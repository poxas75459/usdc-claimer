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
    "2VEuhq26juGk9CJ4H4QNcz9v6Vu5CtGqZNtQcJXGEX5Qi8zgf7ahkGvQjR4FBmYsrYD2Er8XhNRTGuJXYuyieXLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8HiMwsSp5eVvQmAyRJTs1FyHYj6qsHq1uHNFwqnGH6rmSA3A4sega3CqFJ8Upd4W1Kq2zJmujtT9qA3P5cFW7Q",
  "key1": "7K46Zrc4mNy1h2gxeEEi6uZ64qm3ZuyPvu9Cm2o9okvKgiz9PrdjsFoRPMdfxczywvH4vNggD3q8yh8oDSmrCDv",
  "key2": "3RgATiDUZbKT1JMkaLkAQM9LjcE3WnvVkho3sXSicFZQAVQHEQLiUkjqcRbRdHTGg99YXT3Mnhgej4j8X5AUBVy9",
  "key3": "5WvSJg55nFXAhnkxyEbsnXwgMHPq2F9cdtLVWAF3bHqjqwhBnjZ5Re74c2sjAnzye3ubDaUDHEZn5pLv4qvyDz5c",
  "key4": "5N9UCUrLr2AHRRieEfQHnEXNYnh5gbQJi3opBdEV2FhXNEd8yCHULNTk9RST6gTVbrcV1oeXh1gih6qDPGJ2ym7n",
  "key5": "5ruvNxAS8EEvuVUMaoX3Te2xHptBMwc18SJ2FykkRBmc4KjtRwfzg6vGZsxeH9dQGiu2eES5rEsd7yJnnfbHgwqA",
  "key6": "2xcqEe9t6LEDAnqtvUwwn88GP9w5rYeJJAz4GG1bgKBMD5UKuaaiAMidMWXv1vtEtnJ6Wj9yY8RVXgnTjwJaivDp",
  "key7": "3hdhMDy6DB9S12onTJ6KhBqDDy2yPyitrQvwmKsNr5C8te8BbjLDgWSvjuNMfZeDmWa9xe558cwuHtPBfJumcnJx",
  "key8": "2Vm1FvnSG1iGKwn2ZyKC9yaY9MLfRyxeJfizjuCvcVruTPonQBcaCyQEddQyQvVXjXnGbFaLgGo4VPHuRPYpPoug",
  "key9": "3K2kJVjcb9fd5a5sbLjQNLninngttzPUZXiaNc1ZWXDkZS5KBBf8oU3CWugW7xRbQpLc7iN8YvawqpTViKSBzShz",
  "key10": "5j3wT8h8gh1vnoY6ZiZuNjCqUQAtifKtbpiZghgZZU6aeDoUG3HZ4Ry9kbNRpZ87c1HtFPJ84QeaKssXB4ynY1Er",
  "key11": "53w6u5MQbjpx2Tw2RA2rMX8E3px359Lo2sircMXWt5ikyDWELcQcKTmCGJjXgvDKdsYBxKrq6YwpMS3rS2XFVbXS",
  "key12": "5Mtowxst9T4JGNaaEKEwCrMTxVZ6JcD9RUSr7h2bu5H72Fm9ieWCnziMbdKKsJFJvMxL2XNzEhLrXGgpqnCQwh4x",
  "key13": "2XxLbrh8RTAAxuGjAXNzH7bhwk5YvS3eweL9mkKEYDQBSS43BBRaPnCqJhSpcfZHhuudbMrawHPQiC46HVSYH4ey",
  "key14": "3RdxyFT4TwELw9ePJmxBhP7Y91DgvvGs1wzZfSZxKfyYAG6ffizER3qffU6VxLrKdzDonmxxeBM3oevC4nVKaNZc",
  "key15": "6TRbTvNngLdsobVQivCCkNjp4EjVnCTQbzWETMarmBTATMzXoPMi9GQwdqHjgpQjUFgh3C5bSE8af9wu1J66HwT",
  "key16": "42cK68iFKu9EiynzMkr546bJDFC57czxntrNKGhEmBoD5yjJtShc7F7EdeNTQETveYqUnKMbPBbq3i4eHXAHLaSq",
  "key17": "4CqZpVVySAFM5EZs1UgTXA9CmjJSvXLd3Vv6jN4cvkAn2NJ2wBxobBK7E37C66MjDNFTyTiMzHpqhCRwZnG4Foir",
  "key18": "3FuyQWb9hvWxjYCp41eFGZwH4ywrQLDdbCXQYFJtZWikvwkqMnUo9L3rRye3uzAEa56L8rZuVfZCQiG612NFUZ51",
  "key19": "3VvBTog47YmwTrxYr2s88VLWPo6qqX5ijGorPh2KjTqGSUNPkZh7ptsV8gS2qxJ9jHSSry4gioXMsHdcgaSzKyWm",
  "key20": "454LSrnEtN1eNXwfXaD7PJeFBTZgAztsnimjUYZAivKTFSyiq139TGNnJQix67uLK7BRnmQeDvUdPivXe18Rb77s",
  "key21": "2gxqsVGWvDZw58kFExr63GmSwvEJ7ZxoyJKNV4aUWjLcNSt64ALrnyDiqgDj76KiUKr4DzfQxL14ZyD457tUTk3v",
  "key22": "kWLxFX9eEiTTMRQJivvDCUjE4Jj35dsifa1yVgCC3Ron4bTUAYgwKRTqZw9n7cEsVZDKLQEBb6J2xBY6ohBog4e",
  "key23": "31NoHRdanBHzjDZBTTN22BJevDDhrLUG9gVJNZDSmnLvtypQPj6YoVYrCdk3YtGA8JxgXnCF6ATy7avDaQiVs3py",
  "key24": "5NBGshkmBvUBAWDFcsCY41v8VDBTMNa5JZdJQg5zSq2bQuLMYPYDvPGv1rrxJetKnMNahi9cJbukdkatuwNiTKzY",
  "key25": "3wTb1SCY3GR7ffM96JvSjH1dGBSTsCZE9UD39DQFpv6aztLjYwiRZ96KQAV8df8BLvkmwNxSxfmqDfpcGHc29Fvo",
  "key26": "5DhPRHcVymCjm4SQp79j3tFy39f1FKBLuxnTCS4ZzszMxzb9zEwipnU8SF9YUeNoeBV6CVw2oYi4WXA4iq7zrN9h",
  "key27": "2xX69kmTy1sHbJAoR5KYfYdvMugD6YMU437YTQ6YSVN3LLPHGsq2p7hDoTc6MnSmjzehHDnqBEhxiEJJ4gtxDXaz",
  "key28": "2jxeg3DzzSq7YtsaLRBXnqoN9dY5f2cibs6k1ydaem9vXiDkwYyyRzmnN73rJSmXfYFifsKk87xckF1eXyuBADMa",
  "key29": "5PmCZFnxkr5B19pLJojhwe9zpkD74N9oAmcTFDtrgTTFNdkPYuh4mU8wrbYcA7Rs7EuxY5brno1tBKUU2XR95svb",
  "key30": "3ckABqVjjjJDW8t9Z4iK9g4aGLCqJvsBY5anwYre9sqfeKpnWSX9mGMXVAro3Ykp5g2m1roadL4Md9aKxBzfhQHN",
  "key31": "5fManNRZfvr48m5XytycWiTfK61Ff91K9W1AwQ5eswMd4Ja8sc6EnkQZpPPSzmRBe8rZyRB4XpDXPHHMQqq2Spo8",
  "key32": "5DcmAWeybioSYYS3UXQoJ9dUHDTD5YHSe7MDuKYxz1AuMSA1RqWpoTy72NT3v8cUhWaRLFRmrVsSK4c34ZWbYtbE",
  "key33": "3d3u1JV7sSNtstVEcRWdzP1gogbTBpN1DeEeeAtyxnYRSRLXuzTFU5DjGwpLJidnQjTa7RTsU1THm7AmuAR2RKmG",
  "key34": "4b2VoaKJh8bAjF7DPXhEZYWCwRzMm1E8MYDM1GE9ZpLq7GMUn2F5RRpM2wAAkfKAX46zkunfcTBC47m4pfxZeJVG",
  "key35": "2Jp9SLH6RhKGKH4L94R1Cjz55BRcXhMFmrpXCfZnh3MgJUr1bkK9GHfdGPZuu2Af3RJqu12gc5CjzygVjUuCK75e",
  "key36": "4pgVbJedVBDJ1AveenKpZx6K9o7621qMUssKpKdFCEZNZXEJzA6dazhdSfCQVV1HYH9SVuEfyj5VpHMHWc91e4aj",
  "key37": "5yTXgY5FBUjCTYdXYw4jM1aA3km1mzGiB3UNRF2yXcq43ZtF9sfUXx27YVnZvx4WcRTj8E6HRe1mcBfC5SHwdVGk"
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
