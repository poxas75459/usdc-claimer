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
    "kNc6QMvagHYB5A7KE1QAF8pzw2cTvVA449yWH9ytqoGkbZdqzZ2kpRLxRiRfAJPkhijTe9K9CzK8KfRGj3NyEWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwtUQ6yek1uPzJSVPoSWgje92bnptEAaD7YkYPXpKdHjiu6kRF56YYSTC9Qdw68gYuuxixdp7nBTB1GeNALHk87",
  "key1": "AVZ13WGwomyyfB4Apjt3jjER6oxqJ3Wg75CCmqsCDkqySXYkxqjcVipyc2YpgyizTBDVeXsPRDGFYukK42JpXkV",
  "key2": "4o9yL8ccKesfTdVp6xFnUbbPSoAEM6qHFNZUqXE1C7q3ebxS5iBb4vygQgJskfsT3E2xamSqTnXHNbU95c7CfSXY",
  "key3": "5uxCoyGgTY1HsB6bQ5udzma96VHsnzDhNbfzqUovH4maie9U8XTwBHGbLQLxvBLo2Rfwd6zbS9vQsDKwy1iTAzHu",
  "key4": "J91G2fMHExEqFfJ7dG2tN6pWkds53MHrowQaUG3JBRZJUgk4Z2XXYTgQcVEbK1UhfeiijQxR9Sx4eGbA1dee1Ed",
  "key5": "62bAKqKPxAtNV2v7Kxa2HrXDRWgkASV9BQasZALxChLuJMizP4b6dgWfAcJ2dJJdPXN9wyNMQyW3FP9EA5s8aJ9F",
  "key6": "3Sr9veSVnGDbGK8Mg5ZPoFRB8gV5MoHc6cKCzrRhPY55phzKvBonV4Zy26mr8tHZyrzQwhJ2VphixtwGohJwdZji",
  "key7": "4BEfL14Ysmy7RtqEBYVphh2sPNajdSzYhhFoDRK8X7tVQ65H8iH4Hd27adTyNjKbc2LWFg51eaFuoCdm1m8AUEuZ",
  "key8": "6675WrkZ4cmPhiFmqZib3q943PQF6Wh2qipsL56oue5uicbqxVGpC8xvhw81ihjbW6s3P9xAjCDxuZEJ8hmytJmY",
  "key9": "8UwkfCkohoQYthefTP7ARJEF88szc9eg6Gi9AzvAnYgkirz7wVM6CSrUBjyHYFBnSEf8QftyQKxh9drybwNBZu4",
  "key10": "3TYHTNiw8DWY8UdEFJ4gzjURTvtYbAQJLKXtVU9AGA8MEcTVCmu9QqLLe2UqYHvGyM9Pg9idYGGJE4yavagnYnR3",
  "key11": "38dnmrt6NiywQREB6XGQjotQrvtpXzgMsbY2sVPugfyM1JiKUhSV8LbvzjcPgaZgpr53AqqofbcgwBga5sXCChtk",
  "key12": "5htt35D8zs5MxmCkXCScYAoCyCB1LsgBNe3JqAFmqJNjyLrVsNw5ee3THM7b8NbM31Mjc3hWtnxmF7jWCenAaJeb",
  "key13": "4AXV7fD5qaBqrMmB7NaPRWUhECnwSk2jUpVSCD7ERN4sBK1rEH9VkzePeumAhWTNjyrkfRJKrf1ekoRm78gGVZY9",
  "key14": "4C49ykzQ3jydizNKZf6ry8zkNqApjyahxfEAmpzftsXRFtvhahmqzVMRBS9qjy8yXJJKALwEu7K6aHQu5XwvJDWT",
  "key15": "5JgSotMPq8VGxRDKzpfCdwUL2ZUUK9uAYbNisPehhbwbAB1Aqu6U96g8V9ZasJyyWFkhQPucucmmRdS2CJHsbbDC",
  "key16": "DhGfgZ5NjNU5rzUgMEcqvJnbu9ZQneshr3Nb2qrD8wD9z1Cdtnz19StL3JpMXZBXnV3KMtufFHeYRnu4VHN3vnh",
  "key17": "47p9hH23SeEWTHTSTc3aj7rMVUifrw86Q8xZHL9Fcr5cGFDKALPSTpfEvHAHYCao9Gze2dHYADB1nxW9JymktSNm",
  "key18": "ngau61NVem3pGhXXkcpn8WeDoLKAo9toDo2S29HDbbqd8U69ez8P2fw6Hjy5V3M9Mke4pTsxeNSfxdgbcLp5Hff",
  "key19": "2YYHkEZmjpHSkAtdDkhDsWDgfKqVcZq751hcJHbT8tSzRTfHoW9FEZdPZi6vfdzQZY3LTncznZnFPhKes4C3m3mw",
  "key20": "5gb2qdQ3mGrfAqyX38reuxP63TDM9rf5Fzxgy3pVEWZkwux4JaV2t3pEfBTFx5c5Maa4cvr3TQkcLJZsqGq7ynz9",
  "key21": "oJFPr2mwwU1TLtdamPA71Ur94Xo5rTDJ7BLHh7XbystLbhNoaKsrFATTihurWritAJ8p9qbPkHvr23tqgvD4e2n",
  "key22": "PMu5n9yACKr1bciJToHDToVQPiCynfC6z4yb9UTrJWAPbU8SWkBH8HRemhakBZCfae5XaERN7jkJCRLsUr4M5ik",
  "key23": "3pmC3BSPtK2hVs271KbJ8LAhDwjdzS8ZPFzUyXyjEUWngHEnWpAzfMDwQczYg8Ra1VeUDaDkbnN3QfLaoWHJoxDD",
  "key24": "3LSdimUfQzKXq6d1GzLF2J237LsBbaGZwCwPYUZPeGWEd67x8qi9CbVcB2uRPPnRY3ouF3M75v2w8UGXMXttyNSN",
  "key25": "3VvTXBSABeRUkcJofWpAe1Dj1xKY9qQzKJTevm2JFNSVo5sT4Pw4fM64K9CMrZbBRd6ddTaA31M3P7BaGdyr1hXM",
  "key26": "2tdmT1unzkCRVpSpjYQSpNTKnXQs2zVaRydWM6gqjC7PFnTctB9tR9wNprcUVrKu1ibutTiYq3WDeC4keqwGsFot",
  "key27": "f4XwECX9NWbST5vPZSs77cebDdKJm64wYfQLsU1UF9ZGu1BV31pYA6MQb73RX9ztxyLST3rrk5EDxkXdeibNhzD",
  "key28": "2CTw2Smf46cNtxYz7jWUbN8aZ5t4nEcwZvSy1DHyoKApcBhHATgLwYep3v2K7yNgjdZ8eE4LdZ48DzNMoAtaMk1V",
  "key29": "5mfdHN8yB9YTAiYNK5JapTyA1EtjvSegVB5VDihkW3Bzn1HTFBSv7LASjyLbXcAEizFJLRA81iJRohdNrMqwpjKW"
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
