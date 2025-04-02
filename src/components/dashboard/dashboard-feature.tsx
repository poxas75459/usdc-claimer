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
    "3QEY5He9DHPEJ9L48K5JEMf8g2ka6jPZuyPZrFE126LdJ1eeypwwfGcmWEgnTCYVkUo1Razv4fzK37YRfpJaFdKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uxnGYTicHvRfGJdbDCHj9LLvtLPd2V7fM5NvTmVMbR3f2AnaoCk4wCy7k871WXHMVRATqLAbcBmwM2ZfXuAPQS",
  "key1": "4RAqkyzLwJeFY5tFQcdLS6DqhQu9f61Xft7UPLAnhDuVF4JqFMmA9DNAqDwq2T2QA3BDz6CdFe2ztJVJL5FBgnJA",
  "key2": "21x856B3b1ForpFGX94e1wSaDZmrwBKsBvBfzbQQsApR67nVHrjKAD9PCDBseshSaFtkEHXEkz5L4gVdZTHgUnWh",
  "key3": "67jmQtb4Sefx1m2P4h7KqEorUnFN8DXaSFdzrSaoxmcV1W6cuvzaR96R71fVPQrknAP577DAxn22a4B7Mk3KahKA",
  "key4": "4AjULRbj9cejGYhcqeZuJMp2DuRM96LaaChcrjyrwLaLY75Whx2zyLNhteeD6ZHazwvdj39SXuxVz5GPtGUmi8JP",
  "key5": "3yCVf62HA1y6CoFgrmJDwNB9wgfDQuiRACnNEF5yx2Cczkmoho1sdMHu6emY2savHxMHsTLTFS9nwugqzJaL5uhV",
  "key6": "Uvx8orcbZjUkEaC93LK4Ra4HpFwFZ8TWf9tKxRJPwWcYtSV5geGnG71xEQsxrT888VjbNQoaiSQ9ZHkCSpuBYMe",
  "key7": "3htKQC1PESFLfMKVBJ29Ydhrx9AQdctDn55Q7UkRQQDP7dHoG5p6wNwT7XYNN1AF581yAhWKBGhgxs778WXGN5aj",
  "key8": "4pw5rctPj2PqzdEJUUUm7S7h2xgqkDRyHR6yZnYp5E4qf9y8JLpNsryd4q7NbZdBYPACawwTLS3rV1dkXhEZoyT4",
  "key9": "2urxRkA4YbwTiNHx3uHhfTQaoxz3j1P8L99y8tBdU7KGTKVedBnt6xeKsMEjhwGscM5qKxhXGAXfR47v4JDjAdZX",
  "key10": "4c1oRf9S3U9rvkPzFqBL7AAajtUaF6hUFFYco8WcEn3v7YMaUGnK6zmgPXTAcEoQgBJFrKsi7wfk7S4GD8STfMtF",
  "key11": "3wphRnL2bre4XYhVZx8G69ciS5FjgDnSfEaPuWdjWewkAj84QruMEX3KqYCGchEGyTcvqFs8fbM4WRkKxibxXtXb",
  "key12": "3pgroj3MUEe88ssbuREWDqm9z8mg5wQNUsKtgKVDeS5JBBBqgST4Re29adkZfJ44UvpRWhZwNnkK8AnUjc8y5boK",
  "key13": "28xfT7piXgMtZ8V1KKPqc8LZjA1d4PJ5teeg5sVdYUwfg6w6BXTwD2w8z4HFwGaxuWtALWLWYE8p8CzrXCuPVGgu",
  "key14": "2WD7un9xuhfUtTsdgju9do3KaEfkVHTX45GYthsakDa2Xyc5amLizM4b7mVrKapp9JzTAJqWGuBZH3E7i3hZKXVF",
  "key15": "5mdRsCGVG6AX6dQMBz5SEbADEzCsjSaih7fUP5iSL8kA6BgZqwiwsxmGniX5yD7ZBKUvWax7V34sS3FHvYgpWAdh",
  "key16": "3Bg68uptLvkmSZ8y7Ytaw1ZUsqLAugAGKUbqQQUWVKZNfQMqMgiZJBPGiMhbztTyNpbt2jnZX7SCZey6bKAXf4r7",
  "key17": "4o4rBd5eKjWatNBhJj7umDJV6MqvooW8fNYyv5oaER9CL5zBYCMP4Sps3dFz4LNeAWvUYXusRb9Rc1iiQGFG56uB",
  "key18": "3KP83XC9bQe1nBiQZVebxgiSDgNC44gTnWnx1LrqEeo3tZvXxuNVaKSAaLhjBEnVhaAA7dK6rKJ9pta7qYmhkNWp",
  "key19": "27zisHLsnmeB9RKVHLvdnsbiWnSmmfX844xysmHoP1u7FjuL7ttTPoi2n5n15472ohbL4MdqoJR2PAe5PVNQqgiD",
  "key20": "bxmbwbHidnyv1SHD3sJW8Qd1Ds8vQ8kzNxxRT4fce55C8CznSA4SwDREzYJfUe9CPyQf8Y4QsGgBxsQeY5gcyvS",
  "key21": "2f1somLitB3gqMKVnDnsrTf3ecnZ22Y5SrPohTgSq942GNdXKX8M81gyWjL4pDFwpBYZWpj85C19abLGt3V3yCDX",
  "key22": "2LoSDUmrCYej6V1CTnpkoWfNDUxuEBp5SdVK8hPDyDFj7WSBVH6SGBSFhhfB3u9zuZVgLVcyuuHcmCfbBm7dNsLt",
  "key23": "EUqeJ5Qui8Tma7HLXwU2PmjLRt6aHFsdFdoT1KPsezwTDQHjixZxyyYNSs2c41GWd57fSvij42Nn2Ue8MKnQRUV",
  "key24": "67anWzog6Q7DkkTQDEk4vrZMpTFgqpg3PBbgEaFzJbae5e6gXXVzypb6DDDcdZvYdfC8MrHR7PExnzE2QUtGTxAk",
  "key25": "4qQgPBwQA17NVjPEgJ36ktvyAqzsNVHWcrYPSU1gmwUzkhHPRCwuPrk5VGGkrkPDySFmDpc1EHQBgVRXyXYCQXcq",
  "key26": "5SdKsQgSYwSznjEWBmpvVUhhXK6cbr5KdSznLqtw8TwGr4s4HsyGVe9DDPX6UCAyTwQn7gs4fRwhmznCJtYgxzTv",
  "key27": "2GhaTARf67BvBgzAThXnWMQLFWaATD69AyM9AHsNPzYiZnH8Yzq5bQu41oXNMtbRKY6FWFe8ZSRYMWX6tHsXKPNq",
  "key28": "2BYXqFR8rks1hheXsWKdjwv5hvgngUG6E2QrEULpDR84rkjMEsNujdnphBvggSW9YmZGxHdEKAMx72Zzhqja3C8K",
  "key29": "tj7c2ZzkuGy2YR2Pp28zk8nuEtUYCJkb8f1Jm4TyAxdxT5WZ52AJewTPWUVG77NRTvC9q4Q5PmA7CpcSQPLeaJG",
  "key30": "9kXznUM3E25xWikLM7jvRq49RE2rmm8unoLbS8eKGojjaxyjN134Nwv3vU5Sn6yMHbHevA24KZSHcfaYRX8ZtRX",
  "key31": "5cxDi3Bdb5XsTysT89dFAf9vdYzp9bkhGzwn1KhtyhnZWvZfdpCt4c2Dfpsfj3TMT5mKK9YmhgKDTNwQHN7dC9qM",
  "key32": "2Cxn9e3F1uq1fXAbKycceb4ndKEtYoMVC1ByP5oHvAKsNsyf3dghx1WS79WHDdCPXSmtMT7hcLZXehbpWXDm2J8z",
  "key33": "3d4QYDCWckx43VrWhRbxbk51arV2ttw8nkAiwfSDzWcnVy7s3p8XUbanvTM9B8cu3KY48gK3XNhYW8P8A7uL67G1",
  "key34": "Ybkigt675bLbadVqNcEqCT96TMK3HEG2GE2kWuKqBnzSZnXjWa2F8tgx8o96qcN552GpgLUzn7XVWMuYDzct1Sa",
  "key35": "fiTebjxyg9PpNnyxcjrSJZFmWu6GvX9rkihjSpNUMqhBTk9hfMjqLWEy4hExjSf66vkyq1mPZFUUbdw2AgVYjXk",
  "key36": "43z79JYJPM7wdraCEiXECbvUFqQjnGkKxhowMSKFnhcaumDYNAnJr7tuPv9R1U6Vgqd3GBHXt1NkNCEHimeB7uEf",
  "key37": "2NMsF3B8ytunNinUcc6SNz7gWUb1gTrPxrjSTFyX6fZwWsjHSsaBGvkhYyBMDV5prsiZLrYkR5dRLB6gDWtLWHvJ",
  "key38": "2W2wTtdrG5hKx3sBDJWiZeU2Bb37NGxLRaz7xUmLwf76CqScfarBHHqxgPb21CwGcQqdmYMTwPpJ85pFxdBNJrsk",
  "key39": "rFB7u9VRmbPAY1jXtVg5Ao53pnEPvwsub2VF2DEZvCPTKm8XbgD9ajRasmnB7kSddkhz1c2CqgE6fbuBbcNLchX",
  "key40": "PX98N88qT8ELeQyNBKAJ2jiJYmqsEsbLWxaAuWG3ziwr9jCbN8gQsXr1h3q3wbA9hd6qu2dM2HsoXBwTovHJwTM",
  "key41": "3QzwEckWFyM9XKEFFthLx7MuXcTw6mGZGyLz9U23ttkxy1fFaWNsN72x4jbTwkZpCEGmnwerQEhf4kVfbPK2rmoh",
  "key42": "3BKXggCYbRUCBb814moLFAAqRC7FUFujQr7Z8ERp5E2RQGbDYVynsfwLVaHq8BS5nAU6xdD4UZCGH9ZJzsKJV4Dq",
  "key43": "ssNEGEudUdNpi3t5sDqb1z5UFXeevP6bQW8CcCj7616q2nny1658dkAtqnrynkzdyzkU3662EpYY2fPUZnXN3xE",
  "key44": "4BrPcTj4dWHi7WN6roxERAeo1xxZdniMoCKiFa8PVRJSzoTdWuzxjqa27nynCTWcuHEQyzj8Tz3QH3N9AWmbpkqf",
  "key45": "44s4E2DeXENzzDjWUjCQaDRB1W4P4mFK4QNw27WN2htTmSM3nCmB81n9sv8qrm2JLZg5iiYAXPw2TbgFbKx4bsap",
  "key46": "4fZ9ipCVJ6MDHZNo5eES17TV1bozESgjsDPgMm4Q2PYmPBBdADDrs9DFBZzi7uX14YepL6YjTtZVZLBJsMcAwbdr",
  "key47": "43EYBYtJJj1TS8JcNo3ft3h8Ydr8LWM68e8csNkP1Cc216khSXiExqbhmWk4iVotbAZFB9VLv4Q7oFeYhufDpyHu",
  "key48": "4HAk5zWS4twE5HBTPq1HL99soX7Y65KWLsAdd5E7768Gpq8G899yiC7xgAQDZSvLRYgLVHgfV1zqvvU3yvEa7uJm",
  "key49": "62eXkEmn3gKMCd3a963TsFNXWZRWWhVgGVQ2aur7RPkZ8f6AAkgdQX8ra2Zr5oUp4ANZDa9okBUB1e3Kciyg6To9"
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
