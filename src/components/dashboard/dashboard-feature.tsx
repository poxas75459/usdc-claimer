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
    "34u4XQnVDPH71BqUDXqVuugUrkRAtq9H62uDjo23BzkEtZavmLkHxUP7xG182s9y45v8pMsgZBhJZA3weQLSZkzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4uxDPNjdGPmLTHHtLwSc44jHsooQ3QcaRUvzA7wnTcjrhqcLskHxjtTNkqyrH49A9ymcmKcjX1Vte75EAUSqNX",
  "key1": "5GNGCMTMsGWNDiZt7KzvYaL33p1dh7hNNYB1gTC31mwysPtjY4usoFbqvY5UwY3f8h48HQPpKqfNEDpCueS1hzJE",
  "key2": "33TxL8c96WkRxFm7MeG4QqqPXLFjuUzdJLRCJz2tzdsuqhx8svvMeeZmtVHzJmPoruDf19bhFkio16zw6Xi3HTCY",
  "key3": "34jF7wgecwJiwiiWfjo8sECnQLf4bdQbKn1E6SGRwZKHKJL6y4tiDspQW2Fm2BTUESDyPBka91iXadypGuvYqrXx",
  "key4": "Po1XJ5JzCf8NTQVx3TbixF4BsBBbKbi6Luj2gjj7Ex41jxJ4v7UuQdp8WrJEZ6uwp9XFRneYMNhdyJt3nm2uqHn",
  "key5": "5dvzXWJ1P4etM3LgBmgUarXEvZKBKhgn8w9qrwLABGaPhfauNPRLHuJeTwUpBWWxHAGsetnHDxk2AAYpS9EbVj4A",
  "key6": "5wVqbAKgPwCSZiZo7CQ3u7zqU96eZAqzvBBV5SXY697a142wheNkbKKBB9CubtcpXct35dv2oQbXxLtA9pabUxkH",
  "key7": "2FGcdYN1bTCtMgVCzjnsNw1naJyGkL8TdiwgrEUJCdvFcp8NL7oagKjqMS1ovNAR1cVexUFVB4Bu8Jzz61Qe3VZD",
  "key8": "3KBjyJfbAdxN8sPQCt4hth1V3m9gsEVMiMVDs72HFFKewGTYNjTa3xsyvngcj5EHChNsHP5A5sSyrUeDZKx3UN9M",
  "key9": "3FtiaEX3kufNf3qeBDP7BFEb2WnTubvU9J7geH93Px35unqe4ai3Nk63w74QTSmpWGuD8C8ST8tCR5MgEoBQiJ7w",
  "key10": "2ZnLovU3A1qQUgWAELLqDaJtWysxJfgsN76n13r25Y4mCZuJjLn71BQBHS9Nu1mBTXBvqyZo9aXrJ5FdzSi3PwTd",
  "key11": "2BtEimybkKqt1V1cHjaZjrDg9bgdHoLaouerF3kakAvWwvE9PPgkCgPYgpe8osH7HTuBBDedCiULPPAdJNwGvN1g",
  "key12": "31Du3kVrkMZdtnJ8Xj4HRZMnQEF32f3D3ueFETrxxfCEXW7WRZmzARsevjTk6TWN7wcG6NkcyqpuAdyFLfq1J35F",
  "key13": "515VBKtNSvjRbHRBthk8WyyWUPNmM98NVnN6q1q4HUyZsXuZU5uZveLnJdHfc6e2cpULKK9s7ttAKJs4HFf2Zzfi",
  "key14": "3AJfDJcL4WPHQsJdDbEJKrEztQN1YL3uBPBGmszWHT2kdDmpDMsnpzNAdz2hexkR1at5BdwJUdLsytVPSumm8rLb",
  "key15": "5FGxDunkqtC7R3pNuFkeHATh9VAFiVwC6Yfdn7fLmMQkRPtNfctW7AE3MyBaN7rtgo7H2bWD4MCC2B2RdPd2g9rs",
  "key16": "axHbcDYe5LLGbjL9PAftURxSQv6uhNmYFJNYMRynYDm5emSAnw2wtHgZGHHyi7NMNvRU73oN1JHpGDsFyX5s9Ug",
  "key17": "5YaJNzq2J8kdVbQAp5VnxV2xSnynhhsUWLqAF3cPv1EgS8WCSNsm475ebG7xYuUybBDE3rSGJFpU74718p4JVVPG",
  "key18": "eHykAFPrwn5gA1UxJtzZRrKMDscDMb1zbUTSAZYXcHH9pBPkacYefKcMZEhfasMQW1qDHgjgs4mFf1sYwGmGdDv",
  "key19": "4cfpLn7PuB1vTgJcZYrLfS4tpuNLLTsbhpxA73gqoxR6qfLiHdNgZo6wp6bQiaf4gj9tiexh5bgrsfV5WHMdGgc7",
  "key20": "3TawZz2Aks4XP3C2KJamDjeSDEpF7Jt5gRdT6QF5AUJAa9FenizhmqfzQJshK17tYnP6TP5wY7gotSDVdFKjoE8u",
  "key21": "4ADHofbvu2pUgcrzLbrjycYKox6Fj6YhN5H4mgKfyunsWo2aK7MFznW4KuTRkcXnwkKSSTr9wmWp4qG3JP5iUusv",
  "key22": "2zkX4Ut7Gu73rtPWTV5fUasZ1ZHf7fmPPbpoEq1mBMmtvu8qtaEqxFmi4uCF1DHU4nsbrBHdu6jSWHe1SjTjigoy",
  "key23": "4h58MoX4h9bAuK6Bmmjty3nP7Sg6fVgb25c72qo2mJVpknEwLVkARG58EvenL5ypK6LW8JPyCmk4iHdYnd3S83Zj",
  "key24": "5NXQoBKt49eibr38ir69GKPbBkd81ZBMyNyHjSvEfssaXrsToEiALTRkahneEVBez6jdDisN5tKDA1MnCMyMpmnS",
  "key25": "5rgfvJTHwHLtuudfsEmD74LtFHuugeiNxSGo86w5KeDLmCvaBDgcaskQeh2qYfeiBeCi9NXqC9jtULVZhw6dK9Tb",
  "key26": "pTnu1bfvxvWqXYqMvMZcMG4XgrjTJjYTjWQh99HnfKinR5RC8aZkfVWN6LgFKWStsLP2j4RZLtFNN3zQNsSNdMR",
  "key27": "36ohoVh8SYaSddeJyhfVXMJddzQqYnwgxRhbBHcMhcQUzygohrY9J8HL34QHzzvhNzaRPJuUeqbcjTnAikbihCJv",
  "key28": "5p1ReCULv9GykMj9dcGFLT8NbjEpzYUAMwr6eY5XQgDSXtS3QzEstue4yaC6FHdih3vK4yb8iJcSaQpS9oPXyjUW",
  "key29": "3zGUiRCixxM3UsqE8pXk15AVvKmJnsZgCFRV8AHoJnJDfrSfwZPeLxoFbtPX3pa8gA9DdEYffj5eqGCFJ9Vg2mey",
  "key30": "2vuVCLhVpkAVcqwZ8hLz5kqck9HqywzozdrNRPWVRgFvZNrrGrKxUH8qkGh5upHmYhDoCHbsafU9VQ637odBqGv",
  "key31": "3FoNJzw1aQwyAFDMqbT82u99E2JRpsDT7Yn64Kh5KjEYvaRnW7c9snVM5CjA7xfnFdx1VXsrmP78fbXnQ9dwuKDz",
  "key32": "3EB3oGKGVJebcno4CN6keyW8xTiPvtARcshnYR2tSLosTMuiMhmBHhZdd8AK2WjLcHVyPU9QKhjZjA9tqYnqjqTw",
  "key33": "5GiFyEVhwrprBLpW6mU4uHScmcD9yiVt1nfPLZ7tUvTEETEENgZyiHu8odD1CbQLeMVF5dqezts4uveXTXaY1ak"
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
