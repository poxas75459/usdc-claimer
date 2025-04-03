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
    "3VisrZz9NvSixSrCvXkudArayCRR4QiDqR9anfvShMecPj1ejk2sxjHhBmDpydWwjCR5dcnQASgV8AbrCVUK5sUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhCbd8Snzp4bE7ds8WkzAscCiXHJUnZqtzyZW5oirbGbfHXB2wFvx2DDcNeG78tmgDTjpYz3V2FLmZpS8ge9Jea",
  "key1": "XeBJ8yoeQkFCdjSDmrbTDpwNp941JEJjKwpVVrGfXkCxFz8yEaFf68HXDx7MAbyBEZZTKSiLHu3wmLUyBwyE6gB",
  "key2": "4YDqq1uoCcaR9iptH32Ry8eyHccF5kiRXqN7wHZXLZHFD6XJBRvPk5h5c4vJYPk1EtfhvK3APLa2N91xL4gwxqrD",
  "key3": "2CyF415J26kASWJfntgSJzVEKDAN7uS7tY3hAaSDWyVFAYyvWrtWfWfb3mufzCo5S8Qb5ZhVh7TvUZec7wCkgAeb",
  "key4": "4H2VvijyLu4C4YeHGy6JfpLXErGb7DioamPK5kkgWFYxUZrwWK99LGsRVBGWzHsC3unF5MzodCpoHUARAL3rxVYf",
  "key5": "29WQssoApZumFprx8kMsDGj3gvWgx2AnnRKHDxkxRPJUtBfFd92uHCYQwSRXwsYGvxMh7CUjVEN1Cfsa3zW2ejBu",
  "key6": "ocop3jdvUowSUQxNyyDcZqphdAeSDhTa7UNmPHBGdNtaJ5Zybtvuo7iAevLH1AvA37yHFe6PUAVUZ7ssi1KspHn",
  "key7": "WtTHsN3TgwpDxj19NUJeTPfU2SyoypbcMr1z3qLEsDhV1c3mK1VjRvcMDkRq8RwLSfsohCNHp76AfCx348dzrbc",
  "key8": "MZKdQfeF4DGYNu6JMauPUEAsjKGkBcnfrPpSkQFjzXyGT87bvSyzW9gsbpnc8PUp76UeEkQfviRQsuEgiTM8C6H",
  "key9": "5qkMfD5T8awbeLfiMtiuvJWp1uMg31ZCNH8QMcmJEuXtczBDGu2aDYK6ADgmnwixHUWLPxVeq7AuPK44zGfyrj3J",
  "key10": "25z9oUXYYteaUqPDK9g6Gn48uSwHZv12BiJMzSMLuuoSkY152y4ny8iQNs2BRct2xNtztr1N6W18HDNoLLpn2rLe",
  "key11": "64LWMNmD1ZEQUvGYQUn9kJK2YM9TuVxMxE8gBMzhBzLCNeTLQfzqaGJQDbWZs2rL8L28QyrDRHZNNP6j4eRiAZ7w",
  "key12": "2it3eC63tsHYma3f7kHrrBwKhinDJwPxHLwiU7RUsZ4tpaFBZxEXLxC5Pu43V2nFwTdgSheh2MpPsaoSEgXYbJ4q",
  "key13": "3H4ndBB4o5xgtD3y2vGnXAzSZUjXJG2srMZ9np7CCfZQznxMup7JebQZLJpWgGoUTqTgzQCV9eeAyMSoiZ54YMcT",
  "key14": "4rxz3xJ5cPurat3s1nLSH5fH1chKuSzcJM1nJZs1PsNWie1wfUqpkzjfKBGCRviaieLVjqrbVMk99aSnwH9FSQEd",
  "key15": "3mp4T35gyPBEW58w21MBLzjx4zTm23smothFyJd9EsV9jVrb8oY5YaprShyAdwwexBg4SKbq2yXoet2fk1zUB95R",
  "key16": "5t6XTgqRsPTLkozr4wqhBEbk6u6yduxZtqc6RpMNdXzjxLBpnjeqJUtCM2tRCuixGu9ytmA6iBx6D44jioGRq7Gt",
  "key17": "4pN1GZJwyGLnBqJ3yJg3Z6Uu4poKiwsaJbxxnNkHatmSEwNXVFxahkuEptzoo1w1nmJw7Fdv7FxRYZu3vvjcGCKm",
  "key18": "5h5t4s8qt8m4UgVCkarjbjJuom7C7TdxiNg5FanhezdbfTGmFg3g36PfTEftqM39itZ6s6erviNkDYoKTYwuAgkV",
  "key19": "2HL8jhNBYcX4cawPemYoT9SKkfN4K5Kxm6y1H2bd9ejih6kcJF5WHVwcDuR3CiymeVbttzgpo54TS8P4suRajfbR",
  "key20": "2mJAmK7rTnuNKhiL9Wze5E6vspQfjXDgFFoZwd2SYRYhtHjQpvDtFvq12tKZ8C6T2Gr77iAi39o61KHwjmGS6sXZ",
  "key21": "3paDeMW4tmdmBekvbJjjwJt9dKFcwYXEaCa3DwZzZqt4TWWLYyJhvoS3i78uSDjwtTAAnPoy8VRbAHfQZefaGjzu",
  "key22": "uzsgJNmwYzWYmmwGNgWtPcELRrDiDecQ3YMMjGAGPtXJf1gPGE6ArENfUNkVsWvYBnZCrePyDE3SMvPDsH4LUjg",
  "key23": "3EX7TvXSpGpHttq4LARfLs6DPgytMxrTG6wuTCDDMxHRX2aTYSCVaDkJgyWJdE7x1dmkN5wUk8E6EghQBKJ4AB4q",
  "key24": "63QxMQNA1JaTC7b6HKQuUGpQAP5MV5jNFtE1CoAdBUdzNptu8j7C7LbNwLGwQhWdwAhKJMh3BCRqAYohwVBT6Uh7"
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
