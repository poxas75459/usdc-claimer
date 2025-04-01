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
    "2BUGGtj7NLLskYZFikBZg2BmrGsPNdG7bVkAvbn2Zp2ynxvxcPYkDiZ5S8z5gbfUZA76gii2cZzPkRhtUMeSZkeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QeHXYCrhztUVzoV4cMRLmkd6P4FiV7Hs4ik8x8nzu8kVdrzGzQmipPu4qg16kDiEwg5D3HtQp6JGhhPcSFK2tY",
  "key1": "3dymiUQhimo9Pnirt6viYkMnHQAg3LFe1qZJVPnxDDXmYW5gu43BgD3jbAkD71iutcJkxSppw1oMa7Gv6LaMH34o",
  "key2": "5dHCKZL6VJeBgibt7Y3NAwg76b72AehPmajw9XwurRpTLz8xJdcNPtLXRuqC6XvZYbfEKdGZzUnsnCtM1gjpcpJc",
  "key3": "2YDwkujaYsB44n2TMMeWzJ13snZDHszYEqRF7Vdc2gwaemCuwLBrV8656wQxd3ZQ7JLwUhnnK4dSQzKzeBBWtS6D",
  "key4": "4Rpg2FH5rTtGpxPmYFuCagRhEPa3o8443ngD8htnAQXoXzBhnRFkrRnoLHSDhTL5tcpf5bY87a4EegdEqgqN6wjU",
  "key5": "5pzNaiuEjPs5Pj9KqhxoveAvqTuaTavqce81tdUNLZNWdEn5oGf9KFSnPV2J9Hx8zCSgw1dbXQAFmJsUasFqjdAy",
  "key6": "5M81irKUw5zoBni6DnAhGxGwc2A9ErMhKHb9nGhPGauw85QZ4DeRr4MvGkqZGY5KCJnsgrULWS7RFN8He7T9AnGJ",
  "key7": "2LH4EgSKKWirE4Kb8fQcFTzq2j2bpm19d5G2WvrK71TsPKVtrGkkyv1BUSxUQUqintvL2z6XyxHxMQb48KiszRhL",
  "key8": "22ToVnEFRaY6Teif68qyAr7DtN5GNx9h5neZzYRo95AAYUW9cxZY6iGbDnBvDqYjwcPEX6xFHS4H7DemRnec8i96",
  "key9": "2WjXDhSPvMEJMwfSWvtMY3AZET3VYxPakjRyzzuG3hV7N31SRNv21P6pnCpFokz6F1pFZzR7Rrbyjvo9ro1nHZWa",
  "key10": "fzdcBpU53Z3ynH8BA4XWpkqzgT151MTVJGPuvRpQJCVqap24z8ckKFVcYVFo9fHGbvWJQB2qXHMWJdWMn6Wbokk",
  "key11": "29rZYJYZQLugDF1tAiCk5N9GdVc7twgUVMqgjxRe4yzWUHM4muojhVjWojuus9y2GxQsZid5uH9DenRJZyBAnHty",
  "key12": "5ro23Jqgu1xQGjDfCMDrUJkWQHUyPqQrC6oixFdmehMccbZLw8u1e9Q43uvvvQbWXHYjpNdGmV5MKQSfiW46osKR",
  "key13": "59Xahsxsy7DwJA3ApjDQPk4YcRbfmhKotdjGEMXkh8uQgB1APNXNyoUeV2eiWtFcYdSaM8sBhDFCvDzyFjzpJg5w",
  "key14": "4eP9Qi1pCrxefph4fGutHnboAcnAXnFkPk6qtWtSaTD6BqjKs42rfHh5cM59QwpCLijNJvS4B6wa4pAEpf7aZh8D",
  "key15": "5S8hHJVsH8DhpYoobLLkozNzPQspTafnQ2QCuFtLGVap9eFuvRaCAXUx7DvgUyFTNKjRPqxXmpd2hFsciwK4fUV7",
  "key16": "3ggefT7XgEKY8BXNB2s5uLxFrbF41K5do1BUMFynRmCy9hGKSGzEZ98aL57NGXjLhN41eM8dWfgbJ4nh1rYXoY8Z",
  "key17": "5utJatafcDy8QxNNq9dXCUj9nNKBr6G7HeMbeW3Q5A9afyS8Nagh21Z1XvuecARGHanBvmKhNaHjPLEsj5QwF81P",
  "key18": "4oqUbQ2zeUhJfihwecMAXdm2TuVANHptoG285itPF5bbmomomD8gyqNwLEjDpW1BMwq7fhR9wmWseecNKuyBcpQD",
  "key19": "61D8TpizUqEZFg7QChr8ZBpWeTzESvp1RVbVde2QDjWr55MxHZzD1pevu3o2RKy6EgUkVrvZBquddmXhezvWgCiH",
  "key20": "4X1RjvNqVf3jkgqQRx2ubNjXYjcVfKKephvvD3fnnvb2iRQ6RGaAkXb6yW4y4xoAH73KXesaQ3AWv4N9EXHKXNxi",
  "key21": "4b2wghKqfGvbaB2HiLp8fabLDLF2QeJHbHKAUfm5fkLio77ZzFd4Xews9qi4sUqsQTyNQQKMCpz28zhi9eK9QvoE",
  "key22": "4fzALN8N6yPdXestxffqdmjce84drU3RtyQUuB3fSejgk7nQfmcmqd1x8aWwPJiE1UJwaDq17RC3sJxs8n1PvtgN",
  "key23": "4zDLzoEvdiy8BqdNtmewjCcK6LKiJzPDY8rD5vJcETM9Yhhb9tDKyHWjtJm6XEuYahdT27r4XUcPM9fYqVyDVDh5",
  "key24": "3cTWmZG3Pv69uXRKwkbU1Eeij8UKhC1ZLY8ATfX44DcGryqRsSL8azcUdfeTbE8iJUxz25o4aCKRyFUH9gi756ei",
  "key25": "51RsRb1Hj7T3icrGmTuLEdgcYVRsZkHmyDB2hxRgvGXxhtBmSyn8r6YVydz6QnCW52B2WfX9FUPh25qB1x29AQVB",
  "key26": "pQVLh2ebMRw73XW38fPyDVFA9zFMj1jntwVsDwFmvtSuqNThQdtuHHLbtwCGi4dF7mUiqyeLAs4EYyCgTT9TzNY",
  "key27": "3kmSHKpxAnjGS947WnCVVi2iFR68Y3zG4fZ7yewKe5dNcSbK9uGKS9TL8gw2FP8SFUDza5q6PQs8GoLAMchVLzDg",
  "key28": "39Ybd8LsacMUSs4E94sTZxnSoeCFa83hAWkat2v96wHiJLsqQJmK6uugoaZueWDb1AkUPrELh75Q4oGqtKCrk9XB",
  "key29": "5hsFqs5LZDXitqaS9zwF2cYcAqX4mA9tSM7faBFpYztPX6jbe8b5UvQXRDq8ALjac67SZ2vXxR8LK3FoMZmDBykZ",
  "key30": "mY5mcj6sPzgPXYKnEcxKGwRXSYnMg7Rv2MfJFZG5r5vGawHjKiZcP34nhzSEQPMY4RCBhSMMz1WZMZiUoEPWqs6",
  "key31": "5WDwiMUJsnP3wAje81wVLerey5xvkubzs72YASwvjg5DwLB5Lbq9B6cFDtWS8ttpUPWRehmUpYyEN9ybEigZFQqT",
  "key32": "41JFmFF9j6cEA77obXykuBtZRHBjyTFwpqLVDTTrPtpeZLgyT8Zz3W9poFZS7rr4AL1qtf8gReaU2MDvwNFXzSAp"
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
