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
    "5JyUGX69gtJrKZnKa6BdQpmqWtoeTvNpFJ6MTrUwv1qo6VUMLad3qE3gCfMHH1KMcSEkfZ1KrJaSkH2WZT1FHbfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWZW8UHdLTFCFTVw9CCsBTzvufnNxHEh1kYRoGFqNAoswwJKHh8ESLptQPTF7GtHRWzAumdLPBsS34yx1zGbF21",
  "key1": "4SBgLjXxNidW6MxvTR6u8r7MeGqVUpjraMHuCiE3jabqqvGxBUBc8r3KFWLMqQvfKH9ckUe9RgZQh9YuU2Y5mtkr",
  "key2": "5KyWZKDQAKKPqNj9fj32GzVg6TbB6tEeKVfbVLnsu2rudppqRMzNJdB4Wzbfb85NumyghNx3munU294g5e6cwPf1",
  "key3": "b6fi2CGiyt8GCqXzZRnZXEFTmia6y3UjHBztQqeFxKndqhkSPJkRcWHZc6FowRhPwEPQnzJpGbHeH2TPBRic7ue",
  "key4": "4JjYaQniWKL4e6mXXALRHhnNoxZNaaxDACNVugWvBjxEvtTeTRpACK7HqodFgGd3XNiTiVqYKbgA7GYY5DHrci7q",
  "key5": "4vAqLTJdCHYEh33urW2Ks1FPPJYUUxS3BaC6v6yBt3afSUG8mYTCphn272r9SUYurVPzGnJRjPeByjvdAD378KTh",
  "key6": "51yaP46KDVHypoBcCvyHta1B4LMWb6iiewtdVvv35HTcbsJ2jrXivCHn8P4QoBaBhM92VZuC7hoTyuLba1J9FZom",
  "key7": "5nswJS4ds8eCbc1tMRpxo9Qhe8khjRMUMnmwLDGLmn5wPrYA7ivqLWQMhrkvJBaLmBmkXhAY1KDr86giyR6iz3nM",
  "key8": "SEw1Bu1ucPH3UeQeJ2LEQPk6SpTCEH9tDCarGraAHo9td5BVTp7Dy5ytu3dCje1vMkQbANANgJD6b2ovezqNtUp",
  "key9": "sbjBF5hQ1sB4jWjy7MfadeY8U4hS71YBqEG64pw86rwNTkB7RS5VEuGyyhfzpAMrjXd7RYAXXJxRh8KzUfwhBMd",
  "key10": "6386W8k3gFYNVL9hoqt25Uvdj3aA5AEWu7S7t735odWg6i18VLqaw6PqvhNwCMJf5SAnCEkgqyTgLZpiMQkYdLLm",
  "key11": "3grjbui45whmkDWeWK44cVdLmfsHBME3fr5zdKX6PtU4V9yBenRpBw3thRgUDMhdJBhHhsj5fXF1kRVSvBVN3ZaS",
  "key12": "38dyuMoXyWptaH21U9jVZgHmRAp76LjfM9reePbNrZQtLkBBKjBevEV5D7bbhNgFbCcjdJB8mjiwqxPkFSVi4dpF",
  "key13": "5vTihPWXNF5gtmhthE3KXS5eALVVZ9PtcGbz3R5LMVUAu6Q2wtTRpPXgvXxiuxGrt8JfiSLdDJiUp3w7f1M83C7Q",
  "key14": "3V8Mkvq5zZJBKFyacSpHf9yj7rCGpKZ9WHkfb1D7ENxDRTyNXZ4B59RUfHqZsFfUyJxwPUzjAizGP2rVSrGYXJ8V",
  "key15": "62Xqsska1Wb9eFpLCMzi1PYQG64PcGQXb6cgX5PcDK2VVo3P8AZ615dfVE55Bfjty8DguswnPGF1xVhEtF45N35E",
  "key16": "5yKW2kpVdo82z1q89bEgjrrYENcRfgakguheECizFof7vp4boLxn9onVKudK1RcqJMZkGV7uRkEWzTEhyY6LcvPx",
  "key17": "4TyQfHzWMvh3KWe2Ysm24xKYUmYqukiJqmrd7LiDe9AM1p5voHsxt8V5bXTqBkbc8RnieLQRbuY4TeABTurEKNXz",
  "key18": "8y2rpwEhKgopYaocGf68JyxFFgWhxk3bzu3Y8SMyxB9Jkb5eTWeowCzQXRbX3HqdUFU1aCo1K6jBkr49UTZj1Mf",
  "key19": "5ojxRCtoRUKhFpVz1A4avGQZVZ13ufPcau8pAqJZTDP4zGx1HBuLA29hPtGG65BPQMSQBTtyvMt7nHKmddDmgBws",
  "key20": "MmHfXvpJ2o3JsmXbD5wzkmL2vHQuhFkjCwjC5WfieqS2MqsXKQwHuRuJVnz4WG8uCbAb4nbGqgq5bv5jyiYq55c",
  "key21": "2UCiG89Mmz9ex3t3xgC8KoQupG9RpMe1mg6ZjXiCyQmoMnaBKrk7C5TvGptW2tFbNLTXc6qhKcyvfCHBnC4YUqKe",
  "key22": "qChSRLJvzGGfoDFUWvp6Lvm73jaVHYmbxuGh87CW3M6Cpnb1TjTa8DmvotcaHByGAjTvku5MEaUjjP56kKhYyqE",
  "key23": "31aAt36NjXhNZfEskULhZ27DqqUxkf6kTDV8GSMeCd2TkrSRG1KNhRkFWxo6ME36a6BmDCEA8Gr5i2KV1yvJTV92",
  "key24": "2KqrMuoeVxcNfamNzuDK2NQKyFfgUFi6gK8w4adtcBYk66JSh4Png6oUdkFuSvXFz1jPtN7AMjHDqMvWU78GmSzz",
  "key25": "53xp8dxAqpKLgeqhgCLNuahrizkNpWQDGVZdZZQhCR4Kkta9v3jtEWJnVHC1Mpy56YQLL31M2uVs12crQJKYVnjx",
  "key26": "4imyZG9WnW2VWokCpMVRhTuaBJMFohMYibuUqrWgqQcWbrjgPSbUYbgGK7QuZ9xL7wTkKV1LuAXT8a1Z78RQsajb",
  "key27": "hHGK1fxwx1XAgYkaRxixrAwZKoKAYJ2CV8FGrxKJtqksiUFL5vpPExnycvnm1zRm9FoeB4oSxC1KUvRqrPzC9hX",
  "key28": "4tL9w7h2wkBKpdktktGYPGb1AviixKrLotPpBHqkkJn42o1MMpBddZveJPonvzLiCZVtrTtk6LiCDtQyHYPijbqT",
  "key29": "3fBXJHHL3YAvSVEhpG7k1WgKBiBDqhoAgCjvM52946qBagYUH8j45snYvCQ3TEwgJJiaTwDNRAVn4c25NwbBRPK",
  "key30": "27TANExtt5cUaKLfTUkZvGAQye8JKZfFViFwFTtM34JoTASdw5a6c4hrkeqTJG3GzHMB4JFnSdk6johgvxnirQnu",
  "key31": "5nQKpdpxc8PiV4JdBQJDT1Qqk7JmXAQCFxvVaAwC36gtF5TfFscEeRZNEpXARM9knrVp69EnCQNnsgSejmTSVWqw",
  "key32": "51Ehm1buJnmJMvXqaHYPEmRkZ3vTX1RyRPwvzvrLfNskb7SFPr4hmyNiLodnHG4qF3V8FbDKxMW9xiZZhXancHF3",
  "key33": "31FKgDCXQM2JCjEWi9o71FwCLT546vwPbLgGFZG66cQAxBZiBUMgNXqd2uRvJa6iXrCSGXNqJJN441SqM6WhJm2o",
  "key34": "eUXG6qauQnVFiz7inkdKBRNQPDuCEw26vefFxHQP2FPyavkFrAGA2A5mRjbGjZLZWsrE8FdYU8zPSFUUahzEsMD"
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
