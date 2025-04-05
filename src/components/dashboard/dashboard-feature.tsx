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
    "Wr5UWc6PhKREAfp2jsdRLFvqSdpaYUB5KhasSxD8jUqLtvhinqvVTSMmu7SPodbCZHqinBbHLLfv9xX8hJzQqxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h413i2Z5jCaDRrqG6rM2zUjU5Mxh7292B2R5soE9EYqCf4BftuehD93YkqUcv2QJYsWz4bzFLqWHYMbg9cHUUW8",
  "key1": "3zcNAELG7KscaPkp32jfQDjo8bA7SqtLrFMDKRdD7v8A5psvEeGHzf44Zk8d8pdQQAM6C1neQXZcsDJCFQjc3MrA",
  "key2": "aoXQuH9tDX4TSVB6tEintfgPh4HN7unRxzsxHDjS7xpq9QuDPw6QUGEwGzHk9cFPFbaRKtvid422T2uWstwPowa",
  "key3": "4JiGiXsbSwcNaM2hvcTScLggJQEv7VRKjwfEhiUKvFpKzhhoMgAexUjjcgJZfyfdhEYk3j3Hw3MKkCzfx5SdwqVN",
  "key4": "5QBXqUmHwcYe4GYGAauZV1Qj3NHMPxEV9zRA28Az13L8Fpt6s7KoRPq21E8nmV1eBDJ6yuFK8q3AouoRpUePC5ns",
  "key5": "Ehrem55Twcq7uECUzFv2zQkNhDuZnzqXCYFKZfWa7dYjZHThxnrP6nw7M971rzHxn9RbmpUmvi9UEEtqEy7mzgj",
  "key6": "5A1TjY7qENpiUB9EDuPkXWTpmjVLNZxsQMcjDN71yYWjDihyyFhd7wwGsLFJxtWMruaeb1peJvmKUHw3peoV4rs1",
  "key7": "625iYfjawTQbtgcoLYNDbLsHFnowB4Up27vzcFgLd4JsARdxP25aHLEXo74qsBHhBjA9krRio8zSdKBtg862zsYf",
  "key8": "2QFeLS4kiL6SwLBoqxToyMDXZuPkXE9hZW7MMpFN5Y8YqRVqQ6aWPLzmpr1cx5bPp96Tayc7iwar1ttnZq8Tt4Y",
  "key9": "4kk3rwLrdvZmzw2zGBAQWEhG7xAwNwZ7VodvdpYjm7jQL4YRjeZZbbZWQJDZGTPaHBb7mBbe5Vx85XsHXjhewfYB",
  "key10": "3xxYWUbkaGhQoaiCP16c28gxHhEw8D5Vw5iSLkYMgRZDR8XtXPwCj8i7ovgKgt2sFjPLb3bHgukhPuVibHBuq9zK",
  "key11": "4K4hunvL9vMTgmctKEFruTuj573rWq7bzWJZGBigkVrE4mtRyD9XAPMxj5CeYBYHwz1UHdALCqzQgSB6HEEyVjtx",
  "key12": "3G8BFJPfyx8tM1x1ZDXHVR5uVSwucvQzGGK7hdXPGWwcfR5dHJpkoeen8ttZzgoiUoPFhmfB1TuFPbEmzEB6yNsa",
  "key13": "hdMtmXzGA4rtZCXJPoif5b5ggWEQugZabSnGTfvv8VQcUdxNoV9Lxubw5CJzj2XYFoqZs39CQfvdzaco9Wp5KuH",
  "key14": "5Y2UwaMGwd1abmGEkf3f8pSnKt5iHP61Cxpptekfk7qCfifMNYfBo2pE3cQXFh94e3eVb4EZmaHN54obZS1FswuQ",
  "key15": "4H29nz5Raov1JvFfi9fkLB8iK7DzkhAtiMoSXSmux7KfeHN2GvJpUk5h8j7pyTyvQa4VdknyKFPNKzqhuJqPkPs9",
  "key16": "4EfY5eXtkPa9vQpEWhGpefc53fDzNCpR7ja1NBYgiQaPXa8prqMwVg7fSEZD47AXzgTfengA7Hnom8WFC8UUkw4j",
  "key17": "3eGDM6QYhQ3AHhRUHzHgt6YQvgHhbmQzWWuq9hTYxY483xF7tPMu8vK39iDnPDTgC3zpCgMxaf4XVkeY6KKcaSnN",
  "key18": "2K9GAtsGFjq2wQUcrKK6bYbwwgfHN8Sri5UZiRZ8CVHAQpHQWMPujEZrQYWNZYixwbsKTLn19QLiiqvFSJZH6eMr",
  "key19": "3QFoLs4jn8HS6AEXhzJD2fvnSHfF4fL6k9Mv93ZA1k1d3us1fVvZrZeZYAhixU4PXVa1RmJwTULVRkmfFWmFduKY",
  "key20": "2gX5LJeCgTMNtu6MN8UHW5iueA5cheSDT2pc1jtTdgotm4X6ydwMdcCCpad9VkY9oeArDWD81ZCEw6uEvqyFhp3U",
  "key21": "29tgwjDPURM5uJbZNGejosmCMrKXUbWniaSeMfE1LUBxtkwYUwyVT5Rju943jJ7ibPmhXXHReqAVEf1sFCAY33t5",
  "key22": "4p2KzTsZJZiLzBu2mjF5njphVsAhAiPFCtmJ1pfhv8nMwpP4isBW4X6riQCzL1yyXZ9q4L71wyDau8uNPom4PQzh",
  "key23": "3CErfAPagv9T8JLeEud2iaWY3K6jEhkTTRCdyksAPFufMhN9J5ZadHsrFv4HsZZUrFYqfnMYXPELR8V4hufputc1",
  "key24": "5ofJRRn3NNy22f2sNK2sBuWh7cD7VEnUZGd23crKr3Tx2jvFmPPDQ3tpS8gREQHvvbqiBcLqER791jPmj5zB68sz",
  "key25": "2sydSQAkeUTh663SmP3oDVj6KSFPhpFEbzEbu1agkMBbGJRgVByNb7AJWUDwt8GpBcsE7tqT73DcaRUg2H8TKxNu",
  "key26": "5oc9E7kx8JBecC3f4QyiMR9xFPZABXBHE7EkHCcdvERuQkfcmfR1JoWUpDUJ3RR75FE2cfLiuH6AjE5fqPWPWTyo",
  "key27": "42yk9mAzW2ZZERsHEBE8mQkXAZ9nsSFf96sstqZnR5G47Secx9Hzp1sNzhFPC5b153922vm43kSbBJHEF7HcNTJm",
  "key28": "23gNNwLnyckfo8BFRqFWk9339yTEsqyu1Wr4Z4fyRcYNbHLuSHiHX9qALfXkoRDpwA5zC93YCKTDKk38QH6UFxuE",
  "key29": "62r9eHZTQiAzzuVKJuxDLuwWytuzdweHHQ4Sz6fyZMkjAy88X8KRgSWG4g8z1Jgnzw6nSof9DMihGmRBqMJL4koH",
  "key30": "2JVHmdxjC5S3rG4NwYz8HseQpmLXsDnucHbjyAnuqJ7agQKSajndrAkyGY3pEupBuT1mgRrTBxNwmhQjZ7yWAS6n",
  "key31": "3p83swaQj9tEmUEw72X2KjuiQVvbCTbv4iXieUzqzLbeHW5jhDTBWP2sMiQA3Jm5kYFAy6vA1C5VE1Ub42pTAAAS",
  "key32": "2NLybxcnSUbZPiR2Ze5UZ1cnYt7AYj5XjK4ZN95gATN4aH1KhdHkkJnTFQG3CZX4PiwxC6pjfd2YgWjapPfG71BM"
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
