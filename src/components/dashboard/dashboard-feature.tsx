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
    "2f4WZSbA13grYTLhiZiTQ5RmE5DR5561mJy1jYjNdyKVJuGXV3wbxZj9iTpX3hjTp7NEyRmPkFGJut2YS6am7dge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVraD4b55SqzXRgeSv6yx6N5W5hKanxH6bzooqTcdsGPUMFwLRJyWTeZ4ZRSqkr2KhiSzZT5DfdHaL7Q1WckgGQ",
  "key1": "HhpEf3z9HGHowffuLahZ8bcgWPwQPDQ25nWxSGmqwrXENwYHq6VsuHamC5aVvTfurJm8UBjdEaUmwtL6ftRQQwU",
  "key2": "WkH3f4HCAWsCF49rohLD2HyjX9teNF6FgmYffdHSXggU7in2nscNAf2Gi4e7r5WNd7W1sb4j5pSBC6LmVhxYbYV",
  "key3": "5yDJfLSshUmNUwR8ffiDZ6PdsLDxLwH4xDrtrq82UWqajYDAgsocZ9vefJchSLhJ8SjA8UAE5uZgm7YotJR7A8Ba",
  "key4": "44P2o1bdj2H8ivpbHZq4vMYYmVJTG7cjQ3avcm5DfATEymdctPBLBC3QAejDexpz2V7PshGnSSdtMmp3PB1Z89Et",
  "key5": "2YfXiXv95kHo9ptcVJvgeENFEVjWuLa4JowvsLy2fciCDoo6wK1gBsVVsUQzNYWqMG7vjXxhutMKLi924Cts2wfC",
  "key6": "5vJefZbnoQP4U26G4SJxGUGgsnrUJbdabWFMsJL3q5mtEop2EsoGfYAvsHVVBLEVwAASNKJwRcZ23cGbR1DvMT3a",
  "key7": "5fCaK1db98KQusTyNheE8oD7bwMUswea4QC1B5xUhX7PQ8bTf1pvAQoHXKXnGvx4o4pqCm5RL5jKY9Pf9HmSCG65",
  "key8": "2zbpEM6zPUtG8nqXe3pTxXpd6STzJUaFt2KNSKuY7bjT9CgZLmpkyJKWLkyeYg21KVsGuLCwAtg9F1HweAXZdcmR",
  "key9": "2CDw1uVFKxVdeEEaHYpBz2VfmmoCUkRSDrwo3zHVCoAPfbCkKyimLF5VRzaA3zk27szCTZTzeZf6w9TvBfKigBQX",
  "key10": "Je9VixJpDW2v54qp2j4LVERmMPtL5SjqstmidmBqaKUo1Fvx9MYcHBewVg6tP5MUpiAd37Vemde72MuTEkwwisi",
  "key11": "5Zq3RHRbGkbUiNQiiAGmTyUs2f3AWSuTMebmnQ2EzL2AbQK6KUzYVDRvckrH5WkThpdKdcEDQispazZEi9ZPi67Y",
  "key12": "25B7vALxBiyJ6HefjedQUDZVP4fUaPPbUrbSCA3HcKTm6bB5y9bR43AAQUHkHLUZctnvMBibRFg1eFxevekQ4E3p",
  "key13": "2nPcfAw4wNDtEmh1FqvRATeEQXVRYtinwnRtKgpUFaJvJFcwvaESp3Ju3ZxDAXNsdGBz8vyfSJ8XpDXb3BbhKhdT",
  "key14": "2Xno5SyzPT5EVEyeF7XN84cFLMTYZnjNH24FCmhqXPxq5AHKdwCnqr662HqA1CDEzMT9vd4Em5Z2dw829aUwRShC",
  "key15": "478vCT1s9Z34wq4VKDcqK9Bt9T5zsh9f8WWC8ZcGohZchGf5wjd2gtshdxxeNrye8xcSN2TY2eLS9mfPhEBzw4i1",
  "key16": "39Ybz1bnviDDFuJG846YT9pzQsna9uPZ1LnEW2DuGTJXBd8uxb8FL14dWdxbUmHhur6jaYghb8Zy1occuxXdY5MZ",
  "key17": "471iQy5GS2EipzCpjBCJAL5R7baoKRYb2Xqug9WCDMoGtfLfUSHSdNi2aVc19wJxxry23nM8SXYCuwpBjqmPtYNh",
  "key18": "2CaC68KBe3krqUDLgFtkJeKMGVeiRkqsLrHHQg8BufmPMWFPRQwHQwPybPyFmD2rWDMSB3pwWYvviXdhKfXRMwrZ",
  "key19": "d5HueuESq4CjPXZ9ZySco6TqpYnNM4N5GJo1kcNJCZB4yTMiwvCRSBw45BAGf5Jtpyk5EsDHqiTUPhTATfdwYt7",
  "key20": "5tNgdZgeADLLtC4er1qGd3R7dYEna1oAJ4w3fiJervH8ArJKLNtY8CGQw8uxbVTC2u6xNFjVsKHAyeMGRqjmeX1z",
  "key21": "chgvU3UrtR1Hgeze7QEdxggCsU8EApQVEA7REMf8FXAmV2ijqEuQiTUrVRDDPZutSEFBC9nxupWZ3BJH7RLkjeY",
  "key22": "LsU4gzfJeU5Ls9aVWPv1rfPBCRZebAzo6nhUcjf7hFkVsUf373pjU7c3oXWBr2FFZnDoBJNjcfdim5zLXFFFrYf",
  "key23": "47dorsrbagkHyaUgug8DYUPLt7X1xhVGkQsdKERY7guBJL7jLkYjw5L1rPXp9JwrcgXUbhLD7v8Uuq9YbHhgQW3B",
  "key24": "4bdKjwx2Pz23GhVf3dpNHsPBNKKxnyRPzRtrWEZE78i7TFmhToN9jVqtc9rdTkL3K3GqD7iJKE9k864dFqF5o8Hc",
  "key25": "gUSCZ2jov1FuRQRJijhtazYX2rNk1ym7CfqvcFZUVigHrY2vL6zpfCV2MR93UKQnrus2nedDi1Jr5zAnpNdFNNX",
  "key26": "sdmka2EMAyDZKUpyEVqg93jmdsvw8x9UjKdpuudCnUZJBBVkJ6a6X75riRoVvbfie9eVdLYYJiLLaCRP7oAohyx",
  "key27": "4jL9JBvMpUgM85g7s23PewkY5zH2FngHdcKkQZHHtyCgWqffeQwFe1vF7Q23CyYgXL3Xh5C6YK62j5DywmtMDqDa",
  "key28": "5Qcw5M4EwoQxyKGxx214tkN3fHt1vUCwpqpwvDv5hLgRgaEPH9uJg3hh8ViYzJFeuN3tDucwgXa9dSSZm8PSgJHq"
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
