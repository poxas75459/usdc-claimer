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
    "51GWx6zLB95RRBHVrK6QbParX2gbW9HwZH5NxfDSgKE5Y8nCiAsRuGoKZWWa5RFUzQTSPnGA2kgNdzDpExnYiWp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cdkxSNtLnhKnHDH9y4vsz9PUYFXVHBVX3Zgo232DhzTEMxQQZUButDJm11D7oHWS8a6npS2sEecAQdXTj6cKBCM",
  "key1": "3bSn4vDT98VTWU4mcyMcewRrUQck2mniTZyeRaJsJjx5ZHVZQHswozL2nTFiMnhv6NFp48DLw27DemmoT8geeP1P",
  "key2": "3Fe1UTsNd1EzSeKVCXp1DnHrvuxirjdWRTv2Uguaf4Nst9UEbj5j2WhUT9Axjw9vMuLwprJaivJGU7gvAyNFXX7C",
  "key3": "36Twu1UWTd2z8jZAjBTAND1oN8oJjSecLRqpr3nCPqkczC5dXRvLdY4rR9zuPgaadq5ymJarJd4zgvTUPCN1nAGG",
  "key4": "5VkNjZvbobxGVatx4RU9PyaPy6p4WGBf5k3E7uMQNfPFQXviYs4yoFHvzXufWYvm1b7we8wXyZB5doLpKRzMvS6n",
  "key5": "rXWzFrAjuY3GyRHEN1TDGjCiWvoRmFnSaLgZswGbtHdDktdddxwCcVV2gy2nZV1kTcHBgLMj4pAEwrK8V715uW4",
  "key6": "2PYvF8TnVnup8YF23iNEvgUNdrAEuGyqvBvAe5LVboqgKnWPkJTKyZhmP2ZQXZmKetek7sFmMXRGus6QiY2TJu8c",
  "key7": "7fXRBcVdruDZ8s8m77vVW1VpHM2oKpeDKVGCCJdqcrd6QAMgj74e4x4HRXmqbZxXquYaPsmccULu8CAs1VEShUq",
  "key8": "kS4fdsX2mVevtDvtHbmTY5axsxYWsQJpFAWLsxnaCf7zw7AAZTa5YKRTgeaxZ99MBXQp2prfif6xNEZHYTWiJ4b",
  "key9": "5WgWEJjY3C4YfJi5hojemhNPfgvpGtkNwN3MkdVWXSQQL3uCEGhJ862ppjTzFQVryehGWpyU98oYkz4bqBroTYjv",
  "key10": "hdiTgb4ndNQXdBujKFwwV7rp8fQbWKpooSFCbZ2Yu6vFbWPNL4eX9zQTSRW94eBZkR2yMTrh2q78fwCfzuZ1mWd",
  "key11": "2jxKu4tqrYMKfVMGb7yS7AjPijBFUB857nned66pYX1mNZQ63XVhwoNpmkAbJrvkEwzyykqifDKR7FynRGvL2dwE",
  "key12": "323myTLH6YzDSKLdS8unXihfFWEVvXkCKwAjLwmXD8GSHYao1k7jxWW5H24sJH8iDheCVMt9689Wrer5BouRVg8n",
  "key13": "5TqbChZ34mNsrT9MPoBSf7YzSHHHBzApkWhBNunUjsqZcrpwnFuGQKgfechhDcirUaqJtLsQzCsroexvPEdqQLSx",
  "key14": "eWfhr7Q21McTtXXsT2LJk8hMsXVVTQWkm8Xyu63uXmpZZhAmBnXN9fXG554pbBdhUyF2YXxZzrYcWZ3bJYFY8Mg",
  "key15": "Kz7oQsoGojngbFtd7cMj7EjRWjChfFy8aiCKEBag1hxsvfGs3i3A3y2Mwn3m2X3ir5yUBCxSKWBRhdEBF1iAnHW",
  "key16": "LCHHBtkrcJfkzR8Aek6Tkz7bBYPH6FjCEsJC6AW4ZUUfB6zXGbDqRMqvRQDHBqGTxcFPsuFaPwryFiE88ZUJax4",
  "key17": "4Qd3yachGto5puUtzJJTNeyKgAtNKqikyh3xV9pSWMekJX6DmwP7UPue6SrrBXH7v7M4sT5QrQD7KuLwW3fi6of3",
  "key18": "4o97u7aJ6PJkgsJVkgUkh82hVRDQPB4T5Rsj5u9iygHh4HYRjzktMpLvfNLFzdXDYVs7rxnGbe5jJBjvwyJzE1kM",
  "key19": "3cXjxHjYjnXApt5TWc6gAaQKUMzuaaw8xaz2wR6aP5WWMqFX8NFp565ivnGiXUW5CUEUBfhuoeTQQemv7sWutLyb",
  "key20": "5oU2mV7sSp4mVWTZDiP7yZ7dWZQvwKqJE67XX17ZsvvJiXw2zRCygEPcMfCtDw2VpAqHUPPyHNSs6w1F7HBn7wq6",
  "key21": "4cFtQ7ySdAh7h7ZgAw4ZQ3iTnzKXg7B2svKjLW6XCBVRqY3j4tYZmoeeGk25wkMdV12uiTzXAFctqitq2PUEVA2R",
  "key22": "4esYRB8cR7Mq78ofRrNsxLVb7P2oqsgPVH8tMiDeHi8tr9e3o7L6ePfikFyvz9QEijqysJ9LuGzLXY7MgaGXanFe",
  "key23": "3nTqUtbkt4jZgFoHJoqhueY5ocnQQSJ6DRqLCn3kBbNaNwWSSJs49vZ79ZpU9gM76XtQ43nAHT1x4Nw2U6qwdZws",
  "key24": "33ko6vMZQX6SpazvmfoojiVJBywsB4wd44T8vFDW18taHHa46yR6ozGRtv3Qi56N1YaYqqxhv891LwovRURbtdxi",
  "key25": "2Ls8J1pM2TcFWscQS851pkEqmPhC3pNTXeh8YrMZ9FmJfaTVAK1AJxNtRA2ETWYMYZfSgKTbS13aJbeKkpi49RJS",
  "key26": "3E6k8udbmVVajLC39vPccPpS6KZB4rUPgSKcEGKT44Me8fydfNpTgnyXv6HhKj4e1YkcJJeaWocYVUSXR7oHwjdr",
  "key27": "4GvHvvzY5ZFrbbgjVfdPqrnrSXUpSGW8M6A5UacQTQnpobMcJbUypgEuMXMvMvvHjj1uo4yRwHeY4fJtEBFQ3s2R"
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
