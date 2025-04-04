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
    "27QEy1CYw2G5aAHx1qGUeRVcSEsrU92ELZiFxtnRViFpFHovp4kD7TeZ7HGTF5dBG2wT3QWs1gZFeB54HtNLHais"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4biXGQGRNp8wnP4BxTUTZRWsHZeg7NPcXXhrLsrWum8roW7JC6dZKwt18broiaDtQa65HeAXdB7ym1GYSi1CaFKm",
  "key1": "2KqKjCXnM1FedzurE4VE7Wc4gPVEVAVhjNbWcqsiiFe3e9pcXGM5jJGz5p4sp6BknRndgJHuFUco4cUXzcuAfcYe",
  "key2": "R63Qm6JKJMCy3Su7XjEE5mCjhiixHnqvLpdHXEjQT8exchxkq7ZQXP3YnGMWbRi6JkL1igc7oBD7mUDLh8kFCen",
  "key3": "auFNmbvd7nfXXJz7nmwXVBzdQLLa1ffRA9GR4J5pNY1aeymc9yEwvdu6NWJ9BXubZVnPhBrEAvEvxZSK4EhDFP8",
  "key4": "4kC1pmZFBRygrHvfWzdayUFkpAW8ob8W4nz65PnQingY5K7FJGKGD4oudFMcyLij7SNCCYK6YqWpiH5MgU3rTyBJ",
  "key5": "4Srrr6KEx2CFhdgRNSd6TGSDfMKAJkREZECG8LFAkvSc6K7NTQELGGB5V7bTQxLsbAumZiKRgLxm7KVxA6vEMYji",
  "key6": "57X3rQ8L5M5AEq49TaVwGzTZ8RyMZJixVY5NRGh4s4xCDtjER2bMQfGVAFUDvP6qvhFk6JTCrKAbBKZXMBSBjXZR",
  "key7": "3ruhRknpRLeDvubXEKXEqVXSMhCvCPwXcSFCTKB5Z1bS3trciDE6fBkfCTT3bXo5KSpwontKtohLjRLgLEU7iV2i",
  "key8": "BuEfZwHH7FLs8xanresid42CVP5UpDHp7gvahdGFogcQjk7KkeVwQNDPXXv1WnEzhTGzq2RXowbCcoPETS5K4aF",
  "key9": "QbNk3tn7DzgHmTH65pE1tcssDSoqtNFUs3hR7DTJRs8QFLHVwHQTvqhAbRpDvNYTouX3ao1SZqETsxVyTQ4VvW9",
  "key10": "4fNiLpc9rkMD6W4KpD1pGWDxrkEaWbckRJFMvH7RUWRCHfsXhiyFs6GbJb2WF6CakKXRpmhCJrKRrCrSsU6UkQNB",
  "key11": "5v8jRSJTb3fUZeqgYardLR9NjdGXVQaEBU14Yvh6BqZB2WDFVAeABWEZe3wqPq547uMXHkv3sV21TgM5Zog5BJga",
  "key12": "oQjT8miDvtNFaH1z2PaWfRRa5ZvfTzEkHkBnPozX2D8uhuNsWfhdUHX8cgpFbHt7Xgwh8JZYeQwMHJY37zkNLTk",
  "key13": "JSux9ei33mazkTc4aLptNdwzLgqwvn8ESW7TvRCyP2GXisQR1R97pVCkyF9FCATsuqwxzY6jtLfwb8hC2TsrCcP",
  "key14": "2cz8jJvYVnZ5dPRCgZwypZaTC9w2NsoiAUPEHv8Z4oNwQfqNX11X5wzwCgBxQzxALQ5jaYM1jK5qi5NEsbVvrdN1",
  "key15": "eMFQYP7tMkoNHNKQP9XUDjaH6UmanP3hs51tRonp6HJ4DUccD173Uy562koQ315NwdQo813vdk6M9XnKBvD4Zzs",
  "key16": "3BGcj5KQqcx2UVajmfJpTzVWwuozL6GNG72pyhaLmJN8ZMxbS6fyeo6eNGxBv4BcFkHNSQ5yLdVXWu1ktv3LEDYU",
  "key17": "fRNrmnMJoSW6ypPGXaf8HArfCr4ojGQGW7oZt7NPKhBr1R2bopqNyFT5AKgXK1DhFN4XXCsjTTYvkepdBCcdQeV",
  "key18": "41jA8bb6vtH3kUmVgLHSxqMw6QvyA8MYBCz2A1FUjdthKDKeU9m1ZJSLmGAd5vdpG2XRqLz51og7piBc7Msw1S6g",
  "key19": "4S8yT9A9ZBrkEHY2jZVPNQ3B3A94K1X7dEbptPBrfQUJSXMGKkk3mJzGrRzQWSAmKMbpG9RMRhJgJTbBNYeHZsTP",
  "key20": "4Z3wtGpVjj1jTNTYqjRc8cj71gxWAyaMgHvykWdK75xK74grJcetfUqyQvBYqhsmA1EsHoQvN4MmB5nNkTvUc57K",
  "key21": "34mtNNSXxqD8kYTaCzbkS8sfpXbjun4L424SvRCYbuVeyhtVywpFGpJKH2hPWmzaPmonjj8jUmg3KtV19Tc2yzE2",
  "key22": "36caSTNk4KrLZdctWznHAC35EtGv4KPYt57Uhci8sNhUTjNKzv5tkKkDfpGLPmefFfgogZBxjBHLMRkpeAzophuF",
  "key23": "NzX5c7KBaFVxsU3vauE5Xtq2nAt8xdBShA8LVXA16GZh9SHxeL82Yyv7ynwUsTW8MhQs6jMdCiKgtUkQS72yEkE",
  "key24": "5UKJ1HbY3C125yyfKpo6KucsJYVW5vXVx9ojs4xwjck5LFUtFmjPZWbkAn2QHK9tixQA48MjV42KruMx4hA2jfd5",
  "key25": "BKFV64ZgkwzoYHhoeNC8hqMXSj3WBT6zFhrK9ZMCuy7chnQYM2N3WmyijrELYPVtWwSgtnc19tMrZ8jnBiDNGBj",
  "key26": "2CcbUVhTi3GMdmCF9SCnB7dt4zBhtaWYeyoUcDNzn6G3mwoZKeEDJmP5ktadK7QKWzpZygLGQVcBw7tNz2wopXMf",
  "key27": "2ve58dasWq3oDFZewa2DYfhqFzsQzu3cdhDis3yLVY8bgKWF5WEcPWgWwbEpYnpCW8iWr8nTUyyeaZHFqyzuRtJh",
  "key28": "CrBCtrCEgJAEuCe1XLWtcPhGo4zyYF3XaQP19ttSyWdrkdQcKkZbrzjKRskrmEC3gDUUKJJbJPgrocbLp7cwUir",
  "key29": "2GKbj7qMkcn2yAPbpoYCPiC8YgWRirYieSBJegvMAyqtR2Z8XKVKmwvuCGsJhiAMseQ1kPJgbQNn7dT69gjw8WUU",
  "key30": "4semr1Sn9AJhsmZC2zQTfdTDZXM7ebMsqx151EWNCFHKEKZ5uGkmT8M88VBM7MoaFHQ4YZYFVoVUr1Ldmyk44Ra7",
  "key31": "4vHJEAucxQ3jNhXZNNJg4FTTsVmmQaHzK9Yn7XkVwdsaBFFAe3CcK2eT1DpNoEJMKpgRwEsq3m9eUsoLNSCRdZPz"
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
