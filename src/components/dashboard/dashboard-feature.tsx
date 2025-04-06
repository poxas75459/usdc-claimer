/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "57JanX89Zm247XmLU4BX7uqQvCXocvFEmSD1iCPqCXyBqyWrF4Mz1AN4WLo7fLmgXXtJMQ56Ukwo6bqedyp8tQfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tgGcscJi83KowpFxP1cLxwJHeuNf9YoYCSbxCQ4sG4Lrckhq5wNEKsYGyGknpNArJzoks13JSm6SzEDDFWUV7Sq",
  "key1": "3AbH7k9NCzbFASEkwHbZrfs8XbvUL1smRb3N8o6uEh9b5Amtiy9YZNpLC8mBMq7stCQBkHZxxgL4Gep2PJtFxCWB",
  "key2": "44zsdGcMkHuixqTYhgny1NTa8KaRvsMo1MNkW7yJiVzPgF4zkvWWSsXx9n3sTnGSsgpeqCYXZucMDHjmf59avnBy",
  "key3": "5hwe23hxtLajUjSpFAtZ96PgPMhMEHS46HQuQ6fASYsFfWeLgaBwZgeBq2kMpXoHZMLvrjVUfDv2KFTdJs5y4C38",
  "key4": "4SC4pRq6ZhSNtsVs649GBDY3d5Xpa2CtJXf8MtA3yXLkRADqp8BajxZoh6fj6zoBTaiZp35KAfoLqEU75KvjmRJ1",
  "key5": "onKbA21gy8tgNdaL6FAhrwrCnKt5U7AJ347heCSeaPiZ82dY6oe2GDDxFYRwYCwykgyk1n4fPbUivshKPc7QmLr",
  "key6": "249SdSsHMYMamACD6xThkDtfVh86JViBC8p21pVyvNKfkQJDngQfH7fYnk1YzczrAUnqkDRksm7xRithAXmZiA3B",
  "key7": "bHjVGYtreQ8uixxXBXj1YtnxZuc1BYYsbTHCQ6sf7AeenoGYCWJ2Zka1o8AzSXwHyYs6KeKHvWmEig46tNeXSF7",
  "key8": "3rbbffEMAsLA4FzG3wqY6b3xY5TJhkjGNXbYXZh162EbHf6vUgbXFNKa78e1P75ky9yUpq3oUcEKa7CvzpqEQ5sy",
  "key9": "2Ap3jJR22aRnD9SXii7UNNrtJf5PCMuHU8MdGezdq8rK9jk683z8U5tNvFXLEscBoLx635PZ1AgyE4z8Q24wwp9V",
  "key10": "4N6GdFwX2tv3WuJs4ryZh4kYRjPaXbsosweZ5vxY97j8w6Xhowo6L6KkUU9b6k7Fsy9nhty7sTiVf8X9SBxYpDZq",
  "key11": "5xiRbc4gGmdzUGxYHh5LyzrF3v2j3rTfcMZacGSyiU41zDRbYvuyXTbnFtCre4QNJdfjmaLd4JTQytdCVfQmA1B3",
  "key12": "rR7zNRsn85gzvyatKQAP6ir5WjA3HQWDZKYjycweBSnwpHw19GNNSadeFpASmwzU8CHpR9jXSDZ3SbPP3JZFGXP",
  "key13": "nrXC4z8YjKV6dXJciYTBtWN5vnWWMC9kRnEXgrfcTjX9vWwiUa2kaFmGMkM16osbZHwvjiHZHDoDwixbaVm3G7e",
  "key14": "5eVk2cxNEd6hY1YgL2bBDjafeDcHoxuFgTgPTHpU83EFsLUZNheedaHTKzyTDXpUg75YcajoRcN828vktDDb8Ubf",
  "key15": "52f3adtkyWc2CZgYhEHnLZ345VDb3NGiGT6rf1XYGgnJYPrwYqLgN3fcYUd6e1vPNZtZ6ib7KoUPPQUUAVS8TY6q",
  "key16": "3psihLh2gsbSE53gPaPQ6BFbJzERdpuUJJJM4p64d1akpyr7CXnDLtxviGWPKfyvHy56N6HZTMjbm9bP9ikeECbh",
  "key17": "fAyhmNe2sLBmCdo6GyZHyd2qJ2U9xVkpKdNrPnirPYN5Gu56AGpM4cYL35o7GYGGViBWfrMogBPjCc8WBJvy3Rx",
  "key18": "3Tx5kru4szTqenU5oNfq1F2zhcoaqWEfF4NhAwdvT7Rg11DCSGfppVRDPdWeHLjPEJB8sKME484QCyZ3XJqQRaSf",
  "key19": "5tRb5RGTchkk4sQqif79M2nPU3W3DjMFFobjjQRu5Wziy5Hzp43gqjXWAAzybjDkARP1h4L8rb9d3yy7dan6eAnV",
  "key20": "Cy8bA4tuBV5VPHfhz9VT291Fpy9LUx7FELoF51EWwvyQEuzG7jMaqsaf4ttBUiEPU5mq3AxM8aZQvU8kdDasFhP",
  "key21": "z24Dq1ipWHXSVko8nrP667NoZJmnLj2zDPPoLyUgmo8PwBZ47Y5hHMbaFRVtnU2qZvZeKTraF1x5PBLUP9wCQ7R",
  "key22": "5qp1SkYaPARX9chrf9ovnFmsDHGFwsw128gLJxdfvNX2k5cFvpCM49TVWzK7Jbz9hXo8obQg75QH5zVZG8sJRnxY",
  "key23": "316jtNcMiH8xDHKfPEtoebrnPfmprW4xmcPpkpnCCuGJs87qEXWiqkJWEidmd3fQ6UAwqQPnNu2ozhE5g2HKJDq8",
  "key24": "2wG7c9poLGXC8YDnLvNaMuZp7rnWvSgCw2iYAP4aFYLGgHboJAL8pD9k1yxYRzmSJKFGNjuman6tuJAxj48upjPW",
  "key25": "5WsS5UPwaHFmytAfuUQD7pPrA3S5UPNx2DDgxYKMgLyYnhF2v9dSZeagmzpnmpCbmowaL2k6tSk4BCeFB1FZvnhd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
