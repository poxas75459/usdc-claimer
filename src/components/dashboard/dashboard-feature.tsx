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
    "3ibvpkwvJ7yCejRtQRXELLfTnuPme2Et3s65CFmUjK1vJd7zsAemEcsmFfMSpgTHxDWFU5WsQzkv93vj6MKoK1H4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yi1b65aWaZJ3rMbGVHQfrN9MnpXgvRSvgMSEBxVWrLjrvA1a7q7ZPTHsdgBsCmiSLAiSH99FcCLpfX36kCxvQzA",
  "key1": "659hapXwLiiNzda78en5KEfMJXfwxDumNnySwJL9Fd5AMnALHfCw9zHPWxRYLzGhC6RN2kiJCjv656aU56yMoeHi",
  "key2": "5seKt3syYwTdYuQvqeNysJ4iLTgCEsYRiRLTfo4G4oiwFtga2ZgRuPV3onbtZbjzbx3EGaCn4LgM4FCGWpEGRA7y",
  "key3": "4nALnQ4WXSJpuE1E89YDufe4umd6zUMN7eYoXMnVGU8ZBYCgRDHRMuHPmjQeGBu4LGSEJ2zBgwUXXdVTrXMVBWEV",
  "key4": "idHipKhrG9MaResp7GoSgNGU3bgwAgPFgu2XVhdn5Fqabcj1b2NRuuBULgo2obypZnAhckWCxccjb1HQzGfE34i",
  "key5": "2cR8VQL7P5cNs12CKwxx5KayjjYG2b5vzrUjLetTHtTfAXpub6AToJwUu5Z4HCLk44ZxSp3pk96vp8LrVLv96FLY",
  "key6": "5Ne2K8YFEbS5QNsJrVoR727EYBAZXbiSSLhVfLEeavfeUg9qmQ5dYqVVis2EBqcDQhm7xoudXnhr1o8jNhUkP5xw",
  "key7": "jegz4mAcARSZPSjVXbjSb2h8UKucNyN4Zd4ktyuvhmpLxUjJCRoQ7uPHYQUbDvhjBJGXDThNtNFVBBRQRiLmy7h",
  "key8": "2aEfSNbXXEDHUFhDu1BLLKrdHrdAscyUE1mPd4BaYVT9aMQbC2xd5VxxpLTBYfDtxr5sjzZcNwMJNfWGSsjDXzrK",
  "key9": "5Ufntez8BtZQZsLPNv43Vhu4eiNr49KB4e5cV1bVDAvwbsknCV1zbPwEuhCt87Ua468iAFL2q2JN6BVTktY7PTcN",
  "key10": "82dSMfcHb1bFMm5NU82pSZfA3RUDtTFyCzTMk91NFi3utRT6kGD49rrD1h1mWYDz43om6p3SJSGgLauxDWZLELC",
  "key11": "3CBdhxzv96hRthgXPstqgWibBQs7aZhTVDD6Si4DZCoZS8bNocpTUwQJDXnqpeo4mKscaivBNJ93ycrPnn2Zj7o",
  "key12": "4wd85VeX4Y5sqY6Ym6mSzKT95HnVgVLEKkui9NDBePAFAKjMefGvpLm2jGJRqm67ZTmrqPeAoR7jfwxBKrxQ1raL",
  "key13": "jMbTvZTTWdHav6NfhsEPRYLy83ahZ3ziuMnXJsQYidBBzWqs7BTJTN4R6hZ3MQZUYNMg163FRrCtd1Q17BGG9wC",
  "key14": "5RoQjSXhPTA35GCYQh9pdguRztsUMycpwUqiVPnG6EWGEgQd4GDxHkW58eSH5b6Vpgb7ozSBw47T2CwgYbVAaNfx",
  "key15": "3pwXvUqQxgswda7eq8rRzNf82CSfpP4PcRyjLroU2f8eEUD6eA8NXtZSqrSCwan6gNqNSUsZaMQboFoD7tZ4WQrr",
  "key16": "QehrnuyVxd11mLZtAnikveBv1z6d9KzF3jgEEpopvUmkyCTiwHd5fDgbobGdTF5qcGDHvTNeSbf4zd1NVqSxbfV",
  "key17": "39tG9iJmkFyYvTEuVRsRcsf8d2CjCFNhPzdTZDg5ZoKnedBkXbaE8Tt6qGns51vfQEQZPhryBFt6ZbsJ6K4q34XE",
  "key18": "3a4QncBQUqxwtFJ14N4MVeNR6L1BqMtm8WAmu6oNzaWe8Cai6VpJqX44YPv3wJPwbjSzNMAoEXSTAkRdGMpRZNBM",
  "key19": "3wdP1T3xR8HKYwDjVCrL6rGgeTXoQXCPQM7EE4JTDVGws5NnyUZr5CC8NkG1CarkPfCYmCq6dLSFCekyxaQgb9iH",
  "key20": "uidAKNPRzQKVYTA8VuQ1omUmFVvgNXjS1VCVYmVuRBG3uPVE3uQBW1cmombTtHXUpyqaHRdTtigQYKY9r13E4Ut",
  "key21": "qAqd5vwjC6o1uXT6eSQ8dJ48NAtbEkNhWBKa9gbcadoCw9cmK54xpNzhKqTBFZKvxLh6ZRhg6jGuRtCWbTAu9ys",
  "key22": "3AhJrpPgvgykw59pGFzXqcGftMQoj9XKR1tUfSqroDrm3e2H6ah2nU6HqcgKXQKQjZiReEogaTn3Hjbi7ykDqUjR",
  "key23": "3z3wV4R8fSq6Qm2JoU3VnQBa4BZnnZjpRdFCf8DJBcpCHfuDp7Qqwu3VN6GqDFso2TAiTTaKcv9BX81AFJbpz3GX",
  "key24": "3Tu4hXA9ToMTcbLWcSzms7X1Q8axEBSX2qEyief4F45YKJ6jYs4ftoFxYA6cKgwHLmUGJ4DyPhtchsRmqb4xyCDk",
  "key25": "rhZRxrpeepqNxktx8HJNqcE915truoJJPWVkB3reLnyi1eLpHRunMGWfmcoW91tXoMLGUQi1X9hUL89eHE4yh7E",
  "key26": "2ZuXLTrwC4ryu1cwSacesxwZk7L5gYQKMSiK32Tu9eEyrzEQ9bC1PhMgbYZejKVpKwwvqtQeny7AVTr7hpqw2sQU",
  "key27": "4V9YDxUtvsGuaQssR2eNu8H4LsqAquqs2pYeui7PJwBThYVaLCngskr4SSrUfyaCdK916eWNZ1ifYZwZkLL3dtoi",
  "key28": "54Y7F8iqjDEGMdWBgrUppGTjYLzqr6nfHhVnhPVHZQs6VppAF7LACZyQQkQwZSDsx7GFPxiRDxrB2vPX5qcgsmnD",
  "key29": "22A2WqWjbBuNVH99ERipvjSRPb9GMENniWdJxrYbNC4nNQwEZEYf8ZgedZyAfori9P8yGGv1Fwd9JZg1ee6Z4PwX",
  "key30": "o1pur1UJoRTeKp2A8SbqEYBHdUBrGtxZ3jTrLyvoE9qFQDzKx41pCNQJrmFcnvjU4T5sC3hVD6sfWdZDacNfi9Y"
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
