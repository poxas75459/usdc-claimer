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
    "3V8qV93KdGJMdHjaZhc9fjYXMMHS7XrUPoHrGDM7i1hqamMSNmL1TQkAwBCbVA2SqVYLWsGokSbd2Si279S3KXFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRzQ71Qt9Ydw7cBRkktyMmyVGhjUJVo4iES2tKfZfBwF7ZWLHJXGSE2518JxkiH6Hj3FvYq6bPX69xaDbeYu1pu",
  "key1": "2qHNU8VjeViF5QcH2Sm92CXD2tY3edDXWjDrcUnRjjxhR2ttxhLT2diQwvNLAXpbVsDrihMDTZFrYjqyE1mSUeAy",
  "key2": "3VvQ21JdgyKRUzS4pYbYNEGKFU3WsD92SauZy73Gcg4MMKeMGhGnbkVEVE3XXAqh6rUyp9EaF4adR5JkaDfGW24y",
  "key3": "26HdiAtJ1iFR5A8AXJLMywQKQp1DUUrRDufn75PrAnHgjxnuvBhg12B2jpJXwmaCUJRjdgnTWMz7fne5nXtCDss4",
  "key4": "FJCQvnUA6sSKdbJFeDHZJuch5J81FJbfGjMdk85sfTrmHdRdHUAvQ7cjXSNtyHJHnZg318RVXfSm5yLKuo71tby",
  "key5": "4CA2KVMhnXkr9aFty62hZ8Quvs2iGB1K4pFu5pUrVwwdsBLuLyaJn1PqbrqvMZFN2Uomzi68UiE8VF1khhG6RAt9",
  "key6": "61hXkLJpwkpiRnoAJaoeDNQFuo78h4NGGRXEJUpaQMnxxYvTib8sHeabz4Eaqj4HP23vMB3S6PB8NgN35F8DpoHc",
  "key7": "3rkbwey24N2ocNUnRzL9XPGvkUh2AznZ2RCrUPEBsSRREYY4AkzzgG6K6isz4B149nnRQtoDA1g7JZWmHdhhsEop",
  "key8": "ditbZn7SuwU6Kv4cwodU1hKNJALtVZrmsQUGwUCocbpdiTx9hUgHmFsQcR6RNMq4b939B7NSZ6URZvu9T4PbFuF",
  "key9": "3ZEGGfA47sakXgt5qzcY3UuDGs3hdtr1pYRZ8rKNphWrJF9yaXNzvqs5CLU7Diz45iwq6qFat4TwXBgcFPe2f4Ne",
  "key10": "2WCL7ZCci4nbgrJCG4apM5vNTneCpAZPBJZaDES1dULDTG3r2nZZEfgqZdGQ56oFgFh3FNqRs84rvevQupGCmLR7",
  "key11": "sh5bazJw1sLUfyBHYvVzdDURj7GipeE9AjYC3smv4CqUuvBwQH7zABcKyFpgQHjFskqjeZsZUgsg2NN7i56Fv5m",
  "key12": "68nYVm7PgmSMGJxkTofVnnFDdKBMLBYAEMc2wa5cE1sELVj4XyNmmjquSpRYRL4n18S75YivbX7GMai76DBcHak",
  "key13": "1Qb3i3Kp1M1dEmvDZUsvYtNwDq5ij1sz4eNdbraMWpxyGtn7k1C1P4VAZ1x3q5HRJdBiiDcvyYTgWs9D5eQoDZe",
  "key14": "5mygxSNV1bHEDepdtJL4wpWUEGHNAiCVZqVUSHvsXSbY9H8zcSkLXmfChrVjC4wR6QVR9VzaPfPu1F17WBTCT7pT",
  "key15": "4HYiG9dT2Dto7XAwLcqZQj3NTs7gMBx8wFzuYsVqaiyMdm9Q1hTMDZwnhx5aSX85H4HCeD8KENJ848g4yKp7GfMP",
  "key16": "3rwMsBxHmqpXhTt2TNjNBNaY8DuLuEPh5jAG7wBQ1JBBijyqubLKBbMnmv2YNDoHandUAr2E8aHkcoes7JfJuBdG",
  "key17": "2272gBUmXpzK1s6LxtGfCLDABLR79QaCDSUveWGERrppzSfwLWck7WonjYCSFzYjYmVrU3nBh1s1zPXswFXdkbDv",
  "key18": "4xBRKuW19E89kB7bfu29gcpDN3FvtQa3DNeGF6FaZ8a13BWxBXM4s5wrEJYP19hTt189nB5VsHmAR8MStfKEuAf7",
  "key19": "5wLpBTELfNtzzVKUByaKzmoPwbZ6pNbKWQjsF8D7x7pdjgd5nVPbx4mniAkqYHjQ1CZNGbFAKKDHEwrJtaLzPpW3",
  "key20": "5xZyYzm3n6nke3nm1rCR5YxvuBccejNW7fwpUSHADGVF1iU7gUzGmziWCXc7Y69zDnajsYaYp8ZfcBp3y3FZNbsW",
  "key21": "51Vu1AfNsv9j78zeS5KgVaSTU2Tb5RoCKK87s3TCdBWKxvWwhNi5bMvmU78SA5cM5fHU3sWYFzyGcgQsSf4jxUX9",
  "key22": "2fL6NN74p7MckopgNCPnZiScbPeh7KPXt6d8N7kuPvVaiJmHSECqrWbHMKtYKGEK5vxDitXqnRmCiNj64hqUT3c",
  "key23": "gmK1PTYMeavHNHUL5CMZge6qDA88Dc2gSsYKNg4eSqeFRQJNFtfuGu1X8XLQNuxuRngpfieLwifGqt8eAYwXAyq",
  "key24": "hJ7noneUJLJgZM9z6WJgnhVHbSsF7DoLcdmG1hUCMLoZFg2ViLjhVfbkD3nUMVgBEk9PrMGsRCZKmLNGgLqGCcD",
  "key25": "eEBJiQ9dGGjZ6U9X3pcMDeqwF3Ad5KVNeHWPZnGp9PnsspCcjEJELsZfus1u3kkg2AyFuakBZfKwqWQvwdHHVkg",
  "key26": "3GSLsnXdJXp2bVRzLPsiikp7q16tZYaJgHHwXNPJv23mCDMxC7gQcJokj8CqBeH4mwkTkVhfcuDQhefBxRjiTtk1",
  "key27": "44gf5WJfJudnNd7Uy7akUtQpTJPJZ1Fd6ZqaNACyaa2foMqWpEZ71gcvCaktg2PCHx7jdAcJMVdZQ2XkaJAfnKdc",
  "key28": "4Zhbe41pzuURyYn6SsKkV72qExi9LcowV5JuQAvwvuYXV6QfbcLMJRJa8udsAo546mH6xiCaBJerdv5jssE5b6vi",
  "key29": "5d6fuFGhd1jY4D7d8ihE1cZCbUe2vFdyv46Y6kwsgxeeX4kdKTiN66djQo6pGwDGVRtxb33SWeUkXA9ifoPSj8NE",
  "key30": "WjfkBo9YxxqvqtSFqrrG55vPErHSjDuLPgUVmfh1MGLjjrFc95Pab8C4hL7GFQtpH5Td7X9KnrHaQ2iE7TE5KdQ",
  "key31": "54dc6DdkGp1v9LmWsdiX47Tc2yP67QEgdXsNzwp3pTGHLhV7fZmbXAuNAof9aNwrM5e2g6uyyqrNeaTyw2gsrVxW",
  "key32": "5VEpJ8sKvCRCNnWNMVtFvn4xkZAv6QVBdNVVgGZqqUwE5HAgxTF5ymEr2sQDZmjxpWGtqDLX4W8QWYnRUQwhzEXq",
  "key33": "3QZMLHy6wYuUZjUQ5KPTJ93pJ6fXYc3SAGTvrYWEiZDyuwwErDzX2AxkLmkBoPmFca4JHNaPM6te5b6k3LsvGHj9",
  "key34": "5sa4NpvPVBCpeE7hcT9vj7ALLVxWLizWsySf3tcyKCBMLrevzL7AbU7ZwEh4umRn7EVq52hEkGBm4FoH6W3yWdYM",
  "key35": "5L8qFxP2Xg8UmGfuqKXEJcTLnSxd7S74MTSxp5FvsFqJP7Ro5n2Jehc1tmyChrDk1zxRWtNBr9APW2faftfi4QV6",
  "key36": "63SBcJmBMxtTVUB5RCdcCiCZmNTNGaK1ooHGUtqRTLPNJmAy2q92AKLTddM2mTf7ZKznjkdfxQvYWM9V7FnYZoEU",
  "key37": "4Me2NkAaHJdqj8SLPtbzsRp9PeW16AxRQUZLBcGCj8ycDYu74ouvL6stMhiJYMVAQp649YARuRoDdjmHscom5CYa",
  "key38": "3xWow6Dcnzz28hNAyNVopmpFj3yFvHgyH9uHHKnCjTzCWyn5QieFA4UuNYAHiY627wY27jRaJCBCc5KLaVBTGi3L",
  "key39": "7ayDjxFLsRnf4m7RXLmdPb1fX8SrDTrVPhoqkVk9caM8nAu1wCUZbi5BBVw7t62CNmR3BrexunskrbTNKpzjaZ6",
  "key40": "45ZhtPXg1eWFTa9FQBe24aKA854K3it7YcAJodKsN9Zr3MFsvxFUnCnWvNJGg2a5PwRzUhseBSKvHdYEanxHnpsf",
  "key41": "bv97uCwTSpodHNNzp5gUDcqH5WSW8XC5818UsSK5NQwkZbNhtL8d1Ajhsjzgu9mCakbPr9aVK7Nna2PNEXxrPyQ"
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
