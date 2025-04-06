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
    "4qSEvHbokhsgfPp2NGNQZ6aTdE9DFjqHvEiLQi1aapLpXsLDTi4iepRB7epTQqPo6BQazP7BxbR1QMrL6pd1VFHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1BNw9GfyYpFNPQF6Xzig5WnLhB8nsdmV1zBdKsr847FMmX4Lzq327oo6gfdmPceAEjxtaD9n3oK8jBChX4Ng4x",
  "key1": "3oaSqqYArwtWnBanTWFo6vqTWSCP1ReDdCda8GK9AkJFXY8hZR1kK6nvU3GW4WVnFU6qc2jAGhGsCai4sPjUJrsy",
  "key2": "5i9foaLCgRtFoW8wmySwC2k2kT5AK4LtSUiepFEhurC3DFoQWnY8ao3GMPR9BTPZ3CgHg3tMd1hqKPBoEi43D5Ar",
  "key3": "3CpV5eYZgyDvQ3Rt1wGJxD3AsGix43bXFd8db2CSiyz5gxKADUN1EevqTtmKVopaHWCnDcJXZLiPq6716B3vDeRX",
  "key4": "3mi1EGHQe47xPLy79riAYQUNjBjh61MfnxRw1HtHkZVPQoAfQC656RwyrhqtzVYPT6xg12RiJbWAJx34jfMttZpc",
  "key5": "4iZYpwAJBphnZSoLDCERaEVKueg2cUHFZgCNQagJKJGFBVbiS9cZt5bfx6ANF2KFVwDf9emkzuU368Z7gFoXM7Yf",
  "key6": "5G4ssU5XfikeTejjhD9wTJRCwpQdANQf5pHzUVF9TeymanbjhJpSEr9Nwj2mhrXJFEGYGxqG35ybffJZgGZ7t9za",
  "key7": "3aSxENpaNV9o88x4uzA3t74p7cC97kw8t1cJt6XDv4aJfT9PkNbkMYX92r5BXgu7cGdoP9kbpHekPX4LkXtRJwi1",
  "key8": "3zSjCnLC8UpTU33a792kwv5F5rwkHTvDGuBx9MJcaZebZ6Ku1ivJh2gvBtdCQ67ntA2od9t9DNSLTT1ihq8ocv6C",
  "key9": "49aF7A6iZGuNxCVn2UhN9aUCyLgqPkj5YApm4XBxtcaZQB1t6TnxMLe8sRdJshYveQgHUKEFnT2sMUgP4k8uRTu9",
  "key10": "qmN31K3NMh9GqzQ3cpaXeEA1j6oBAhdmNNJ2J2QDuoEjU4VuoYJq4iQip6vzQ5M42DBDr2ZGXSxB3hHq4rpx9ux",
  "key11": "9CzkXSAnUhGsA5oocj3Vew86RijTUd8ucaxdVfVthn8KKmhFQDEvH9Mq9cegamkHewwkRkVV1kJs5YMXacgzx7G",
  "key12": "5cT8zkLMcvxgs1BBkPVJJUfbDocoTG1Gdkb49Hwe1L49ik5NxNrsnZthfu3ehp5DwrH3pwmb6YKCEtCvHLxwz7Mj",
  "key13": "2Gbuqdid2QkUbSjTZrw2TUVFpQ9aiQaZSwwdsu3cMnmgHyTM6rQQSuSQgdRwQCRXRgqdqxyZ9xT1p7yTedxwokiJ",
  "key14": "3DLyYGEid4myjpn6gnXsheX1t79FcifYQwEVrfeVBDUWroHxvVcBYt5Amef72WREteQU54Qt2zc9sZgLHtWAfjqU",
  "key15": "ndW3h7sAiFauK6B2f2xBaQ3ASP3V3a2uUeCo7guxaYCyDearD54p1QDrdNNa1FPQDj6TkVxVHoJJN58Vmi2njbE",
  "key16": "4c7D8N8ijcbm2PQgF65YS9yRKfnb2XZwffozdWSPabqUR86hThczzVZsFAenuAgzAX3vbCT7AXodvXpDwLYWgXy6",
  "key17": "4JBdZ98oshbttdMZvS2YTdzwcnSFpaUhHtx4Fv4j4R4oBX5bRudstPhz4wF23STZ4BPXaZbjPVVQHdRNWWnHMAHE",
  "key18": "ZVUa8WF8fzDkA7hJrAf3kvmKc1M8vmiP2i6XJZEm877v75Crv8hNQpcVb3yuZY5mWW3xqSs1y2r8PVMZfE36oUi",
  "key19": "2fBUCvKfPtgLbNSgkxcz3Dhme3eVboZJBPLc61QUUe23ntWiJCDp69rSYU9dN2MgVj6ajBttiwsqRqwoPY93q4aD",
  "key20": "3M1aPXczVeToTHzcGnqYqZGvYL5m76mwPcF4nFStCf8MtGtJqTMwftH6WwaTPuJCFcNQUJGCDDnKWrbYW5667Zsc",
  "key21": "5xoprqnCD81i4uCtbUygR4mreZ6MJnn37gVXqGXzpm2xvrA932wTv6ANNYKGaiNLb4h4dBzrGFoYeNwFfXSmYTbr",
  "key22": "4goBhsrj3zsefY2N4HLRZgBELqHE9jgRbL8xgNAmhke1Ke9B35ZoyZcD1gH6VcMexe7iANzCimDkahfBKnSrtZVZ",
  "key23": "4NqbeM8jVY2rS16XdMCyQqxgZtpFGx9xhZB8hpwtGD8tQtZgMWQNWyjTsJU3pSAFqKLEtJCU5jf81CGLcRHEnLbF",
  "key24": "5iz6re6h7bMAUUN4KrpMpxMQF5BCNS7Qj5A3rX6UWvV28Q8ryzdBygQ8rPNsFfQH4LqpHyZmUhYJgprMpnVL58Ly",
  "key25": "5AtXWvFBUfbMybFJxdZnmQSXPRsfjUwqVncgHaVeL8nYSgKUKs2PrSqzTRH1RmvwvnMs1tLgzxdBxkEqsSWgNntz",
  "key26": "2YyRi21PuB6S5oVySVmKVQ9S9FE9yELDWhYF5T3VZYN8LEESW6gPx7bWZTGuSKyU7fU3FKLyiCsFJcx7QfrTEsVD",
  "key27": "2bzbkGUB1ADjDGs3LZYkJLSUcXb2bSryRDVn5hMH2Qd2f9vf9S9amHNPtwEnamUiYWQCY2BThATCvMyH286TvD7q",
  "key28": "VVgs7bn6w8JXD1e9oBr6mFJHJvUoYaeZVCBo6HqtZNDnkGPkBxiLFPAN8ZTZLfMbfXqFpFKYHXZYBaXPGFTqgGd",
  "key29": "2fsbJC7jChf9qJfw6UkidLLR33pMWbZYcdnaPx5Gh8QYwoVyHYKqzFFr1LSEGYQ6VXh6tqsL1XXb4DkLwmpJNS2R",
  "key30": "2khKxAkNWh9bmKLrrpQhc6hc8psXBJHH27NDSpNCpQuHEs5H4dNDJBnJXCjwBGNYwdjbzWU1qfZunQTfVAMBid3d",
  "key31": "2qNjsPrBioAZjG4XGmZL1y2ATLBEyD9sUHPN55UuStsXzUZo2K1vHsjJ8Dwqspxhd1HWuFB8w7JqBEGfSmNH6EyW",
  "key32": "4p3sYyWt7h3rL5E53icDbhJxJ9LfXUAT7Lz9LXQ3H2CXWG3269h4GxRLTBt22m7D1bqDn99eGg56HSMWgWBsCA6b",
  "key33": "4sTmKDPj3BL2npaa78Y5k5XQ1ZMcdtpJk5A3C2HWDCe5Fmw8z8dtx1biZb73uZVXFo6S7czKEiRS1RDe428eJXSK",
  "key34": "2G6WK8tEKVrgwwkRArU1V2r8Bxpn55U6fMEASXt2CfpcC5Ze8jcbdR8Pfhgy73Z65byteDrUWxq2LW7nbr8VS8Hz",
  "key35": "5NR3r2mAYGjiyPyz7L8VM69SXz7T5s8C1dS4E6o5tY4NLPpvfLVdkRUHvYA8Z5CWuZW5rfb8MnXoKorF88KHWEjd",
  "key36": "YEeD5xq1JEDkTmyEC4gGZLEXED6oSjTjAgUr2S4yMMZYyabb1uBxscpcMe4yZuXqUCprPY4htK8TWofajgAxHX5",
  "key37": "4S61MpY3ekJTtYvn4eLEP6wKFmV8u7JUFcPqKMJ4qAYAQazBQshLxCwZZ6TAvhMcxiB2z1mbkkQXjqABGJfFc7pA"
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
