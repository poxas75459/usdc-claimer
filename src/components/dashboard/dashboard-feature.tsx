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
    "4CXeL3HUKeSffFU7dv5U3TYi1L7kRvrMN8gu9Jk31Mwisnax2fMV9dm6KQRvvCUSA5EgtJEQz3CwVzRuKczhAxeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YzDoppkFriaS1RVp4L9CsBLzEX8yRYr3Bu2pg7JJfBq2tERFNL2QELsRmjD6FvYWabkhm4DTUfpmfHmMjzDB8zG",
  "key1": "4jWJZaWXjxTro1zWoLmv1ooLNaCxGYMzgMgRSbQ5V1tyjHMzhC8ZNWaFRQHBW3SHmFbspWbqwVj8Cyw5MYaNR5wC",
  "key2": "3pwxqnsog673Q3vLEqbzopqmppRrHLBurELaWf2QV4EcY6qhqYvpJHtKisGUwogBCZY7SYgVAEkSecukUkXADPZg",
  "key3": "s8zWUfinEjBNJcGpgKUpKWutAzN2ppKkJmNUDkofJa8RnbsQJRbE3VyZDDk32gZhJTj3ZFCesh3gvNDqLMwffMg",
  "key4": "7a1bKVhaUT827NgBerrZWd4gM2hSQsALpAb9DgLngcioT2TnTBrK574LHbszFYKLHUk1UgaAvkN7p1kBqgr7RCT",
  "key5": "xfyTWVTo156YDgQnzTzAnHjyHTkmU2oiUPmouMQDarPAZcF7FGaw76eCdzUi4o4VWgkKeDF8RfWnToTUFPn8r8h",
  "key6": "5VX1Ti1dZ7yJHzhhfVLP6wLbPT1tPK2ktkfdScMF64pcpX4bzffhd5trMKH93x1haMUDfUY6RgVCytnBdUQ4LRjE",
  "key7": "4EBZdvDmqrnTnNDNENDzVuxneJj1Q51pzf41psGkkBZUGqCitxUizipdqvVaUEtAEwUmPVKgH1hfMinTSJGghk3z",
  "key8": "Ypo8dGd5R71ngKLFDnmBqjiabH1tRrVaFZxBGbKnGDYsSJdP13F6qJHuHQW5GJcRix3HkhpetMB5v4StZ7hhA5L",
  "key9": "bmF9xGhTAnYTuEac3CuKo2QKj4zgjB62SNCwRcR8SS1MbrKeniDaz817rLfVmoF8mt7vuthMvMigwxtvCkxGJxf",
  "key10": "jG8aoirgy2koS1HAAeCY844ZFn7Ed49aWXeNYbf1LJQM5z474D7XHeuFyFFsj73jsrCMZSpK1huugLbmBJKNScW",
  "key11": "5TXbACeD4dx2uKJkTMctFZmpwjMbTFiUvcESqj8rcrPMxWkbq2q2VtKFyNUCBRYw8yPy7pZLUgxtvAXWKa6mi9Fo",
  "key12": "5hKE7f83DiZE3mo2LUohWvxRsQNwATWSBZaw5NsuXzMWkfAR9h6V7R6bryDGWkrCaFxbdH9pR28CqBNdd31zgdLZ",
  "key13": "2RFd3Gx6X6kLPjYR4y7bvgwQnQaC6K7N5KQm527TFNbUPnCgUNhhxvRwMG5tBVy9kjKpVa8Jpkr2gLCFuFfH3JmZ",
  "key14": "5VsQU2rgXZY2kJ8RJ3pAXxEUwAwHDo1nLFBkrob5gwcMafVjHvExFu7CyiH6D1cAzqnqoE43Fs39ay45UhVJRYtb",
  "key15": "3urXrcxCRAMDBLvQJQbyw3ZcTCpP2sVVHYwppR2UYY97ikyeoQzA22Pv61MoAV7xbCaLGZvotcdT6eJyGe7aCgTA",
  "key16": "45ivdG6MbCnBBstfSSq4caYTt1hPZfkygx3gPBPVPM1mfJgu9CxiUVJ3LXmsP55gPpG3oVbazG7JYML6tN92Gtkn",
  "key17": "5dMUWFUEQxwSJe78o1XUKpGh1Cti7M7DLFQYY1LhJgvEQSSyqE51Nn525CKbmyf6BrCXkSJGWuUFqdGs14Kpx6JV",
  "key18": "CcuAHVAmJi8HNPNuYEPpQFTdPRQasDpAR8mzJdzaRVLswDvYb11uNp6svyBVVEYbkjGH5woPeauMY6u2kZ9auT7",
  "key19": "4Bnc9LjyDbM8nM5pDWv3UnHZCPBH3Jjtec1B827vGB7KX8oNPPR79HbVn4VUKNSKpEbiG9YqN1mAaRBE1n3QyE8q",
  "key20": "28QvfUPm2KohGSbeyB1opMmPtySZ824csWn7DZ3mesjtRtqeVsTXDWzDMgbgxKCWJVWitmZWjQkj9zFCznU3dx1D",
  "key21": "2iSdhLwB7TD3JovnCGH7AGsPj7ALApau589oCX2DamenLZ5vZiHpAMa1UYz71y7yDtfg3YvcrVYUXnmbAJySSxey",
  "key22": "2tBr6pp6sULAZK6KarFcZvP5WqwjDayz6Uk9MfcMqtd5eNUsYyQC49HeL4zdctNeMtdWZ6rTHQeo15BwSz2yLv35",
  "key23": "3vg1MNDroGU88iG6u7iNS89DxrtfNRbKW5kXhRr7t1EehfCKAK3KSEotqZxqqLzxLWKV8U6yxLfTarWp77YYAWuv",
  "key24": "32niiMj9MDjawXRPZ3UrwbckrxCLSc27YaKWw6Sb52WDVFecYxfFHCKWKUk4u3aZNTdMkxUgZCQtTwYR1Uw1MZyv",
  "key25": "4UtNgjksRbhZsn8eivcnMHPm8sHXwDQKZmxbFyBSYWhZvVAHT7eURtoLyWrzVrFEDpK7ZizoUixjyEqGHTn6iX3e",
  "key26": "3CihtWN5dYvHK2dNkspPhoyZ4hvFpAd3Xoy41i7s6HKsMuFvAMtUL8GorDdtPbwtVcyjb3dbqBpRu9CqApKrWLPC",
  "key27": "4GPiYBUVxbh4urBuzEj9eW4pP7qoBwWgyn7vTKmCJSqffU7SPn4SBD5QJe5EwPjpfhJ3qjUJ6CEQLdahxBj35cJS",
  "key28": "4GU5ybbvmn7ZBB312LVHrLPyLKE39HV8kqaCPqXcZXiNtGNmejvysHozEvep1jNtVFsBfBYhDHJX9dGv8pGcQLeD",
  "key29": "4L5k8xj6AphS3HnAcppF6EZfc59cGRg4At6HhrLNkAHWCnjoEPs52gC9W4o9UZqFWwdji9HDTrvLoQ31VZGsALxo",
  "key30": "3KfB1w3PQ6yTWLvqsSFYvTjGCJ1nbvTgkKUrbZ21fKwpPawzARijNZaDpowHkvNmtsG9wASjxSEScXwbnPLw2AR2",
  "key31": "yVavZ7jiqAaHjryCupb2QHp7EV4DLNvJ2UXFfmC5YgC2gmS7C81SzdCjz2vfHzu2r3uCoXREBBGsQ2nbPs41ux9",
  "key32": "3Gfd3BT9P7xPXh49JEJBtjzoygJx9Cntc4sDq7RrJDeyNAX2TE6TLystjYoH322F9udgMh5SdZgkDYtgb7rFC8yf",
  "key33": "5XJXkstUCCKtE7WkN8fMRf1Jk77UAPFZzTLLU5AgPoGknBQQpYmmkcBWMJhCFfyaNrPzV3vBizjkGFvRkGg2Rh7D"
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
