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
    "4MqTCFqFpFWgmijL9D24HBjhG2WCwNFj1mfx2Wr6vaU3jzHiB69bbBFaAaWCSPYDRfyLgxnj7xWkMW8ZC3NLrXcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QuieJiHoWomdEJ9FndCXJmNVsNm3UESWQeqyjcXQq8CJSQgtEs3xHNHfJ9poQGQeGdzicZuHFr8peNXCzAJuq2",
  "key1": "2hwqGAC4xRZvr78de9FZzKkbc5cByikisWz1NfYfUt1sZBvqA1Uk9HeufXcSQcduan76FjgpxXY1RKdF4xJ7Zrtn",
  "key2": "3x5NB1MqWsPjiaeZvqT5cotP6Wk6gvLkAiWk8QXLrqYVtxyTDfLktP2FTNQbs5NNvqBmMygcaYqYKNAmQ3zWvrL9",
  "key3": "2M7orR2LTJWii15HNsiUKbamJwjFpyfnxXuJKZrqyoZfGdx2Pyw1gdGR4R7gtdCSqiz52fqmzgsriKUysNJY9Jme",
  "key4": "2NGCiJvQM18nbdP8Wg1LhhnHqg3k7nCTduS3mawKwmBWTkt66vzktQxkwXzazx1vhm3xAbfkbXtr3pTpPfMRioXZ",
  "key5": "mp3Dz5xei2Eczhgg5nRdTph72iWF7q9ZqA9xTxQfbpWu5EYSxJfxjaaBS5uNNiJNh2zdBymaGK38osRsBoURk9N",
  "key6": "5HHTF3AaHrqxYz7SDqBgy9HD8mQoK1MZAa9tL38zqNkUcJLsJMwTE7V8fYw8oBreg71da3k6xcsoBiPmp1jcYmAz",
  "key7": "5YGCJpR2UJRV9VCQoiAdbrFFkWwFr4jTcEaxFdxhtwRZYV5hPNjjS91NmKvKvqgEihJuj9v9K75r9MKn1b883iWe",
  "key8": "27kHVZsYArsY1VN9p8DkG8UyWU5JZprDwX2jyAAuA5QTH7tkMbBLj4PVRarXirFWyS9HUtwMoih4TyGbZnBboLVN",
  "key9": "2gtRuFgkge2HrVDpBA8d3E3jogTLv8KNWvrnHdcGjz3YXUnUAJLKfLwBMcAuRQu3jkNNEecswkVeonNsUbQjFT1m",
  "key10": "62xzQ9wrmyzbZD7vn5W9uFYivE7Yuv8MAYsjEzMkWPp2ThYBN4w2dTTSpm73awAC5ZUqyMHF9id6FftpG2Mgd9DB",
  "key11": "3nDcafYE3g8tnr6SUk7igBBi2BJdrGuWEhJZErQfA4pYfgZM8ceUB55yWaADjvk7TH8gSEQJBY1BtNkvEGjMPRui",
  "key12": "5buBFFe1VBaknNfUeGz7HnmFEgBv1W2G36hjcuSJjqJTxBiZnh7rJ25LEfuwspXiNo94mquxKUW3RN5VMhnTYGmh",
  "key13": "Fu7ZP8nyw5uRjX8TMckCU3RYNp4cUjAKwfGhZwUV2ira9X3nKhmhqvzHJiwMPXkmfrNTgxeHd459RmqysvLVBgL",
  "key14": "4eXfamhkPqYTwfgTe54LccbUDxm7D3UHSG27cbXqmg6bdf73UYbCVkt38VwPwwpCX87BmQo3a5HpKxuGrFetbPPL",
  "key15": "5gqnGQSsJYhu1AE1EvWmHzPVBLkMh17hK3NjHTWkvKnQbH3GAkvY92GPMt4SE7Yya7g6GN18LVYpSqc61n9z1z7a",
  "key16": "fyU4w6DKTbWNyL9qoR1QLFHvBLe8mvseuxaeg7aMpAHwArp9zmBKj8PEb5g9sWmiGEPUWGrSJfLdpNWJA87uEtC",
  "key17": "3xE5AoKsBkghNUh4gZ7dYF9oyLLRoocpiymNu5uiDv1hL8NmJZ2e9RgZFk3HWY8uYRkLu5YSVVaWxxbRFH63Kgyk",
  "key18": "5zd5bnqaHPKTB2LivMxkQ42aABgRfx8z5Q8PrhkKeWYGrUPr4QLQpu5kRY6zKuW7SvmkNXiWPXxp1pEput3pw6kF",
  "key19": "58QxH7eVNRdHgKNWnMXYYgyYhp9FUjtPbZjzgUid4d5vkP9BYSk5FZz8Zvyq4UDtvxDS4BXRTd21wKG8CMGYyowt",
  "key20": "2fgjMsEzAE1YXrxGRd7jG2bJKA5u2C5opE5P7kKmngCpazvvJ1xn8MuoMdUfQCknhERYW9EcvUdg5kHDtFT1DDcj",
  "key21": "5R2SKtMwt9RtvYsG9QHS2yu4F5TL6pUYZWQvWybkoV4Jp4dZRic9AQZ7XcmXLJTM2nRYk5yUotndewA3p8mTMA1q",
  "key22": "zMFQtJiPYdxo15WXaGVUTzerhqPqBmwBEEV4TPDpYgUoej7JryyfqcyNaqokMJTWNmJuA2xBv6eE2HMJy5B6owS",
  "key23": "4xBWH7ct25QRNvJaCioGPvAbg4Q4rwhn3ha4ku8E8BBCJaA9128DaweWwQiqri2D4skPqDvrysnWpAiERStf22iF",
  "key24": "5tPrnzav2TuNyh9TGKDWBGXiDuGJZ6h28VcCthNTWkChREgmYZVJyptFcvaWEjfBnwoCExdHNUifFTRZddgjtuLs",
  "key25": "3svcitqBFGktuvMsBTDPKrLqhrV8FvTTdzk6vCpKEPiS96qGvmADnRE9cicfVaByp6yXCvh3AfEQKejfYWo5qbxr",
  "key26": "27RdpEmiHisowMPupei4BKf7nyqvZbuhLezELz7YLuVdMHDEqVLgfntczQ3MrF7QAV6YuQ6sqzeuUeDSiWJwyzh6",
  "key27": "5yNW7GCvTb2jFZELz3cuTAVt4Bg844wULCF1QU1otjrpXPZLHApxaG279YvgG5tLViEp1yFs4GohwkNXg6Dyer3D",
  "key28": "5ZeZygDdBMJFP3xWi9jnZY9ZWxzJyVPCK2A8QyFBEFNVwaZxZX3o9BEEtCuDYL5o44Th9et7ywux6aB7w2KZp3bM",
  "key29": "2UoXip4UrzyY38V4AD7hC8fd14LrDwBhQMjfHqrZfgt917PQLFKurWpQ5XqQ29vsf9n5GCGjcyiywrr2wJnuFHMS",
  "key30": "GCPUAw9XVDn4awzsyjPbHmjjQBhQLadMnDgs8Bvm9TzChsg3PqTW6nUfAEce7jcuFEvD4FudkQfERYVRRZeMRHM",
  "key31": "4yje18rsJgBz3DTt2Jt9vcbo164osAUVm2sJyFikGPmEWgvV49GtpjEEf9GsrE3HC1GoJYoscns7WLBFgf1nf3wg",
  "key32": "2B3yfBZmdNkx1M8K94T1YWW5e4xn85Kqn9fg38xBLGxwaF8NjzKj8yQmyq2xDnuwjvSti3yVdwuT89NHVmhbdRpZ",
  "key33": "3FYjdioRpmUXCkuWmY4rRZwxQAX9pkMGxDjxcbCFi4NCXSV5wXyEoK1Cdza6PEhRtBmYTBdpRNeCJZzfpd54ezae",
  "key34": "5VriACMcEGJJB46r5aEAEfzCFCJ8ffuuYERT29QACv7XAUjrXZhwL9RXjbHGkHYwBb3ZcNy5JYonH5swg7zubLYa",
  "key35": "FmnQXRqHpu8KXNDakz9r3TsDYfEQXLrbjHUvmkEcuDq2Ets2YDm8rKnBoWY1ptFkBr8ddVHbPjAqorg8tL5jXC9",
  "key36": "o643XcAMPZx7LCYzad9kCDmVZz5ZkK26YaSuCTyPWgj1jQagPvYmVbYr8ZHGuMWZsggKnHrXEutVhJ2qwD4bTGN",
  "key37": "2MJ5ePQ8UfhvFuqqq2HdM1Rw2ce7uYKirYm6GFdTvNtnN46bBzWey5y1siAmFAAMuGE2xgmDNpYYGZZXc2yuqxhE",
  "key38": "4WzcUBgn7uN1XLrJpGgPPWSTodRe11Wmc1EhdJwSQNdpBWst2XJidtBnsRtwo9LTfHs8o8R6qGZx67j2oUDHjkvm",
  "key39": "4tqNPKR3aE3eFvBxRjhke7MWsN9DhEYb82xyiDbNBrxTUCmqbT5F3itX4CT23CqYMocf3BC1hcYD4eyP4BsCjRmC",
  "key40": "34ygrtyXvt9pEo3LvDAfjTs6NiGLpb1d6WVX7J98mqC2qF5BufwB6X31STThrrEZ8Si5bkwkdMrrYnwni3vDKdU6",
  "key41": "s5q4G2pfG6mXzgRv5YexVXrTcynnKdM9Vkw8q512FzN14vo8RoBKjRLP68GB2MwdofdfqJekQ3DvTFGdBnEba1x",
  "key42": "3UCGvkhtRRMj6Jxjuct8gtvdprcGkuyFZ9c9kx9iyV9smcn1HRUUvGNZFYzpmnXcVSHn9MCwQPfoc6nzV3LBbLae",
  "key43": "yQUkh7kQKvxG6UcrpwxycbaFJXbDhjAds6pNFSv7i8ZqBLkWooMQLwBVvVaVHnqSQLmYBBSMyTTNGRmxt2DMvnx",
  "key44": "2SjAUk5qc4oKUazxmorXTqt53vFSboZRsYGFPcRam8iEhYj22PtkUwbRNwHigR1KiYccbkj8chBqd8ro3MGkVyCs",
  "key45": "5ehCQiwJmDcGeom2qVzFhMuJqdUcEy6oUKJHTnbyvKAqD6tANfSVvoaEc6NxjzqYoDeBn2Hd2hmDtWvNvMfzi9me"
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
