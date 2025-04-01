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
    "abrP97ctyruUipumbShbVMTQHwMNg89CAjzNX8QTLXVUX4Hvt3Dfe6o9tfzcemowFFG7LMPrrVYxnrzHLbkguAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6jxZyc6VHdiYXypccPF9W2kMaHY5Hpa3gd98X8ENZZ112cAwFGXzwQaaCANf1RXi6DwTuoC3ESKTBrbZoi77jS",
  "key1": "5ENQP1CtA1HSodTHatyCFMNc4w7dgkbDTDkD5UhnMQgj28uMomWTsBsWdaHjAQ2KHBx34mjSdS7bCcPVzVoFSGux",
  "key2": "2MtygHkyTjjaTdG3EdWEJ7G5pDHBw9vq2QSL1DnNavVhWKsC18CK9ud5e3Dj6m1RQ9RpxV8Kxiji9PRFhKX6ejMm",
  "key3": "3oMmdZXcN6RNeTLbXAXaXbDdAmhMLPNa5E1iHddZGPBbib1ELDZqdB4rE1rc37et2Pq41ZEvY5zDbwFgYu2Rk4Eq",
  "key4": "2u8b6aUxpAkM1t424WRs4bMhkoZCRFH5i6NZuCmhPjitFUfokzqtEDNH4W6FGU8RSpY5zL625kwLkBvnMSTgPCB2",
  "key5": "5CnYjWeAAbaRn98vUrj2eEPKc7zSo7J5AuYaGH5z3wnSsCBDrEBpCT12fpH4wQZG32bKvenUpLed9hXL52qYkJ32",
  "key6": "5P9c3SMXoBoUYCp5uTHjX9oYYthHbqoSp8oDpw9wQx5c7dr3226xGTh7Lf1Sp7srRFJ358ahyAC5BSkwZnsPnrGv",
  "key7": "34QxurWp8SXUL8f1eehNLnAMhC8TBkek9nubgnqzZkHyk2RWSzqqaVqr9khgeUfHQwUsRio9dx6mjkQXqCbvSjPv",
  "key8": "62u2f4VztLYNUqh3ZsDGdfaSXwip1gqJ9GeAKDWawvfPU7krqPW4CVMf3TQiK6T7Kmb9yAcBaKjTCLAHzGRrhnRa",
  "key9": "48sbXz5khz79VEg5NXgZ8kYrgjjekkTuZuzhyGcPfx7hW2dwkSSZQuupiz1CmL3PFXUkygkZbkREDhrSUyy2oAbP",
  "key10": "4FLkyrFvPyxtg1CpTUJxiFfCvtQY6uXp5jRiBwfLNxec1JMq1f1Vvgw3jd1AQxyJTx59gjQcbSkKY2Y5925WHKaU",
  "key11": "66WJnzyYCFv9cMrmABn4U7VFN73TVhLfhRKmP3hxUE5Dv8zYApkNV6iv6JyUcLXgXUAZH6Mpat8Z6hbxYV1r9FAx",
  "key12": "5L891zYTmU2hec3LxVjAnJBePHsvGUgwAbbXvWRUsFR8DeG2ryu2MeAhNgLECxKnGEL5ymByHVYmzE8CR48rTCmc",
  "key13": "3m4nHLzLGEJcRpxgyxUv14fFtGGdaaztxG7djuKTJ7Az1tLtTunaLXmSEoqrmrVHnNYWo5WTuDbiQdju6H3mKcX2",
  "key14": "3nVkzGEaEaETP4GAcCrRhmUaAu23K6KiCarvfXPx3D3bGeKkZqxAixic8AANmiPDB3BD1TA8msgbd81BVYjaDvWV",
  "key15": "5LY2xriiiJwN99VcrMWpyqGXCfFnv6s41ey41QQJXZaobReUTQkWowA2psj9t7iXpH8du4WBBDcWByAYdreNYDb5",
  "key16": "2f7CX8xs7dnvaVwhsH3NtkgGCmpyB2TZuFXc6yHgMwgq6MJkEfLyNLJVZuK4cEAgk1uwKMfRjGv8uiHf85dRUN58",
  "key17": "3AK5s41HZvX1zQEK8KDVvB86eMVmZN2DtPebmJQV1VxkQQQSAkNNvbWBzUGCE7dWFPEPwz2ED7aZV4LMp1YU2Egw",
  "key18": "4waWUx3SDV31UMEuQAb1Agok4yrSoL9ELeKSbzmPb6BRPvcqDtek7bxYyrTTnttx18fntq7JtUuHaUznA4Zbnuez",
  "key19": "4KYJnJsyiVHMhtLLzwMrZMc6oGc1bL3e6BsFDDjcj96pywLkBqKgdSp3LhwDwHo1Cu6pQjmnz58jqrB1bBbxpyg1",
  "key20": "45Y78UH7ebuaU2erSAQsfQobDZgBkZ2FrRz8vaGGC8AAcrhNzwfXxDPnKxQ8pnK3d81D3TwMSgMKrh2ZMS4mm2di",
  "key21": "426oRBjcqMfQV1bteQ76qH1ThJKrRWdxpEXfS5JhYbsbRG83xUTBFdPLHQkALJPj2NXeZUgoSmJrRHNKBoGPgMP8",
  "key22": "21HF1J7xdnQJeacRSmmEbScvjLUNobnaoUzEqkPaNtxr3bRPGY7Bd1XWjmwwsj6S46Ztfw9vyUNkrpb6sASBgaPr",
  "key23": "4SruwHs7m396MxgiZVNdkWNWjm3Vm8jTPRwEZFTnwzVtAhNaGpbUPeQE5fLZaBpuQrpFPq9BM392MkUbZVPUpu2a",
  "key24": "4bNvLMnpLxaG2L5QspnZNre9g1Q4CrVwVJavjPfYzq3wDcXKKNbiAVQhyy7W3CPKmaD6QTfoQwvqhBoPGHqzpuce",
  "key25": "2Va5KdFPaP1k1DSFvFpvcw1osM9v51U4e31Xiv2dYAiXpqU7a5noRmNHiHrzwfkbwebP7LwsnHscwGegygk3wzNo",
  "key26": "4H3yf7yo3RAv6MUwQjLH9Wmq5JkNdGR69hCr3CvFgqAV2NP9gokW2MYtWzV5xSJZBnZLq6C5vz4kHCjzBusef1CD",
  "key27": "yJsiYcSLSHV2LU8iCNkkHSwP9a6Et5ExpNmXEHkcn3J263wuHxjKC5rNJFpMsPoNyENMAcJpnY7n6y21WQBUZfE",
  "key28": "deCJ8HFrz1Gdr2Tz8F1PutZezfUD19szDtMYCCSp5yYnvGi6TgkMPCPMozS2BVnDpKqMtszr7GhGNh9dyWwrde7"
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
