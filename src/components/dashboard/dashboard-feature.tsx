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
    "3dqYTFKRkCgEbbpR7bju6bVJUh7y3W7mUHN8wgpKZ6YZecGcG8bXF4jpvArtomThWgdSBUpJtyuLYMFeCNpssv1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNtiLcWFpPwaevGdrQZgpm7xFknfmtJ3nosd2iHd9yzG5FsLQY574YzsqeF4Ya45szFHqSoF2bie5meQuvQzTZU",
  "key1": "2onYdRTn6nijsiVoUd599C3rjEgBSbLK1eets5Yi8mc6Warm3Vo5ptPpTdgwHq2ftjadCo3Ntc6YHuHe4p5srxbB",
  "key2": "3s6k5BUpq4a6kLRjnixYYCsvLHY6o3mStTrUMFfzS74nz486MtnsHiN5Tvg5Z7Q48yBgtuqkoC1dtU32efVC1nsU",
  "key3": "5Qfh5TWhrtLrbmXwYiPPasimBbdm2SuAETQVd1RhSmLReC3aU4D65n791caXjQhWiRcqzXBvjtoDPBvLcYQMpj5x",
  "key4": "3TqCmwm4AomB9GqKHZySCsykmdTo9GNMPiSxL6aePDhyXvp9iDEzqKNcqDqTFR5XmCy5TU9bzDJwbUtPH3Ctpmc4",
  "key5": "55mbCwTGbTtgGL56WSomhXP6uBXaEZEaWAg8Zyy7SRjrJw3JG8QN3ybofqDRmvoSuwgMLxMFKB8THYoTY7shuqs1",
  "key6": "5nyKyCW4v9SPN28rkjcf218yWCKfgczTtCoGrKNkNTXDDAW1cedLzs8pmLUPtJr4xnweiKuiN6P7LapTG8a8DzAg",
  "key7": "4JzLNE4Qp9JzCyP2b1ZA5JgR6BUxKBe23jpYkEVJbE2NLtbuSc1Krk3ju6SeF4NLWywequmTehAATjnk7qKTkS7A",
  "key8": "3GBfi3RXJUJtnu8gmw7DXouG7sRq814LuDXUqMf2q1G21bfU5PjyQL33h7a5hPYAVo4yENcb1KCFttZpaCGG98Mi",
  "key9": "3jFBfryKs2xnPjaLNDKeHTS5rPbpz11EQ33K8wbA2u3BCz7brcWsnAqdhjUadfvWSBnxJgezHMcrnvxvPe4ABMAk",
  "key10": "5EgEy4YD4isGtG2KqaixWBmYibz2mW7HhyC4obh44pU4hKxo83U15xwRRBeSRR1NNUJaS71aZAgKBDDxsswS2guE",
  "key11": "2Z7BnqySBzFMgsxH7VKUd7b26xyhEXkw3beK88UMyqJpT8bQpebbGA55SSn3n2miimFPkg3bgZAiirkKTafXC12c",
  "key12": "44y2c1NGdiwpzMcVGurysjuuM4dXHQe1a5SHsngrVTQEDPX9L49LdEMSuDS9dAC5wYTSXQDdC5idG5Ww3zCvZ5xv",
  "key13": "4cGpqxy56LQYcvLzeMbjgrqAQUtge28gXrpxMNQ6TYKi8Dc89EC8nis1cMuoREpKXvokz2yfvoVTzF3ousEAN3cN",
  "key14": "BrejvNMKxZYddJdN31qngZuM1AsfNQSrxErG7Wo6EkPhrmaZABgGQErVsS3P1RKtvGn4daPvD6zAg2fQAe2G3ru",
  "key15": "TqWKStWGUxbBwouUTZtmexmyrSMCee7CiSxidgSq5355aRka5MznJa4ptv18nbzoHoioxmogQuTP6jNSyrWwmhg",
  "key16": "5FxXwsNqkupdthdxbDW8QFjrxaRfqjGB7WpKwJcsg1Ba1eYW7VzYpUpF82sSEPQaUyVaMWEjk31gYkZXeTgxwBUg",
  "key17": "NwdkQjXYjDWC6EJWZeNNpzeTv5RKQ3KDBkfWPhVBHYzxaKngyEPGLWrx3jMQQ1jfDyfWCLZ17TvAUC3xeQX7zxo",
  "key18": "ibTkEVZ9z4oN7igGuQHeNvxnHzhvE6CV43XVxY4tw6LqnTU3LZD13rFUM43BW3p7Tdi4RUW5o49dk5dWMGaE95e",
  "key19": "2iAw1uJL5V6hjwDjRLZDm6ZSEwDLSMCsvvYgKMX3tNNHRUpBbYG9gRbWvvAqNWYSf5Ld49L6JTDsg2aecp5iRPpF",
  "key20": "25a1dnLaoWsQiHpeMBgbP3o8XZt6wqKyjVw5txQRmcgrvjD4axVfnmjT9NX1YqBV9vGutkJ92BscvvhHg9iV1roL",
  "key21": "mkVuU3rfW3T91vXU4pNx7Ju54Q3W4xCPBf24KgcFjCiCnkYqWv71aEAmWJaiWBNYTdEDR37LtvNKhV2r19YjrqD",
  "key22": "26LTDKQ45pvc7zYopsEZGyNbipCsYCn2pWJViA3T9Rax91vE5TSGdHSxuTUsHhNA7QsQfoWWuVtiKUyf7FA7LnCT",
  "key23": "5AEVd2Fz5Rac4GwWmjUNggAQ83ipFr195BitmuA8mDscRMeb8rNp3wJ4ZZA9nz6KagiZ3jXgHV7wJ4B6gRyQMS3j",
  "key24": "PRWNXcZ6EL6NbnaBFVnHyYwcVaJhddBdvDTDp9Mxfsms1uydCxsjtyYB1AgdgECMfzEg71EhGuFCej8QsrajDti",
  "key25": "3SxDXChCK7bPv5GPKTjwsyXF3vVcAcLumfTEkDVVDsKSYEuxv3PztfSqCGxPDPWkTCJYgnE5o8VxWKMQRw1wE3pG",
  "key26": "4YvX4tfbQb1YMDz1sPYVhbQG3NNjXS1wNjpJYjHUw2EwYb1kFuCREnox93eigSBMxeBFsgNZw3a5vgVnuQEoBuxd",
  "key27": "38iCQGRkHWn78iQ6advdWfhRuZ4s6xk22JL1Y3oWwDTR1eNQjxzs9GX3k6hsdvdSSGuSQ6ef1hdHwRqBQCKK4Jo"
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
