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
    "5PUJe5r9vMx6MgWbYg6FKz5sxW1TwD8WKziE8q84meseL2WD8DKRcZSGXpNU3MgFH6n48PQMupDJz3uRevWJa2Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkrFnay5tyQfuR3mL3hyjZntg1HuW8rhNFzL5LHP9BGwuRAH8Snkr6Bk9UeSP6K6mcGLjGgqyQyyupgXgV4oZbp",
  "key1": "36RccMRBi5AJaqTwE2MNDiHnCoAS8kahAoqGviDV8PWbzA4QnyYaQSJPAtuYadBY7AdwvbMbZnk7mZKtNnWGbGoh",
  "key2": "2RZpfFkk3ETmgo1B3m1siPAtAF9A2Lw66QrS4fkgPU4edHf6kYkrh17zchTw8UbYVSD2pURJvdyNFVcNb5MWkdjD",
  "key3": "4AKELaTr5dBjDxwKHP1LCyr1jVUxnr9Z92EjQKpyJxfyHDgwyvMHuNdYvDcBqCeQ6DXmYGGhSYFWugPR6D6XhKpj",
  "key4": "5i1R8GsnncHeU7RmBtP8QcXS7APhjcoixzbDkJBf52QFHWSaxRodrpiAN2S1ubs1tx8YMUT4vMPK6iiXn2EKcvzu",
  "key5": "3zyy3xMfL2FmR89ZSa7js2yueTEGBHD75uaxjfNBksAp5xesYJLqzg48CdMr7LywjNJtfN5AFdANGzmLE5AEj1xQ",
  "key6": "4KCEQiqKk1k4w9w4rAUUuU9zK4aTotTvYkiaJKiJsaDXh5n2sNuuNuMT3XcDU2oZheRsbZicMWrBavUKLFEisJKJ",
  "key7": "2vS9pAKt44xHrkW21Gg7hWfm6mKTf14BxXE3ipzNgW1BuQfhoqoPPm8GZKL39KU8NLmCjX7WHz6Hm3bRJUzP3Wjk",
  "key8": "3tfs9vVZ23WVbkCM5YYH7rBadwa33f5bfZX4Xj6jERRNvWNXM5LPNEMk9KRwBWpMCRC6LxgXQQzosT75fVjM4o8U",
  "key9": "28obGJvgJBcZ8Eu3C1q8N1UDpPyASMAHa5jAn6XwarjiHd1erTtcHzisMWsqjX62G61fwEPDPNZaA2Q9kDcTYW8S",
  "key10": "4SD6Bq8TXXybkLhZaZhyH8PcduHKV6BLowKnDhmiuoNoRePmqhz2jDWt44kC3eC1kS2qGaH5MBMumvy8DfdawQLX",
  "key11": "31ubTRh9Cu9j96Ygptzhd1bygx8XnTNuKeDP4X22QVB2YgDfvBC3fwG2jTUhLYWZW7NrzPwTexZ9wikafgrzzeF5",
  "key12": "5KWVSU9hKPJCio9nLvAnVDQqcBhE7aNgJFkL7zJ6Rh3K5vYwVnhG1hpJVJHRCYf8XYBWAJsTHAdSFWpxVjLcy8Sc",
  "key13": "2qy7HDwZ2nTUPTEXpxejy1hEvmzUi1zMQK8HHtyrpuK2XK5C8R3zZ8TETjzaC6smJwi9pJqnS4WacbsG2XsTRgCY",
  "key14": "4JGZEkMxUcKWgnuncbYsEYcYxZ6GDU2XKndqs8cogwueguXK4ga9vNhdjFiuaBaSZ27PcvBs4Jur4NiL1GBMFfZM",
  "key15": "5H6mtfLm8JAPeSFRQ9wGraYJJd5FZisSnQ2RQHUrvxFd3sUg6ooULgf9skn8pNH7gWnMTNbn3vyWVeZJWFGSSPyk",
  "key16": "3i4g4LtFGpkY7NFJTH3UuiaxGzfMbJKVbWHS9wqSaggNZDcnSqZsxxCnxfB1qpmQXUa5zQskGLtLZkssbLsiaWDX",
  "key17": "zMuy6WyGQaYDb7EUq4Ct17AyQYFNq9pMUjSw8ut5F8cxf8pLLEAgzUKzv3RCJo3yTv5JHR58p6xvmfyvxJ9MtVN",
  "key18": "3Dtg74sVgQhVXLkGV7CG1VKUMfYvmfxK37xF2o6E6Ty3NPwemjfX6RbdHcTWhC63Zf1Fvpkpewb2bZzJGr3ZDEsF",
  "key19": "5NpzQgfMgUyR46hJFGAChYWnxXCrVo7ChTSGjVZb61mVY5yNth4shBu1M3KhvE45jipDFYVDfJmtgpdzbVCMyput",
  "key20": "4uJrbS3po6SF25ZFAu26pEeuCRYxxAqvHrbkcThm6FPw3GbMZhDU16QQHBc3ZLXCWUBDQr6JzPnKohpYnqrbwKA3",
  "key21": "KauYBBz1TV6ybutJETcdV3ANvRek5Sjh5AM7eUZD1RgTAhD9KR7pnDeoqi2LLs9G61F5Y7ew6Cf5qLZMEnjpF3g",
  "key22": "3JE5dfB43nhhNsbWP1qXkuvm4PVcbXwqPiVV4Ui6xasrbZzwx7AW31z1QBfkWnXnRcUrit9xWLcu3YNcR8gMt5S9",
  "key23": "YD1kdy7VtzRfsczjb5R74HjoMEfktnwTa5TEDQn6k8DotriWkbiu4gHVQxZn5fHuwfZAJtnhnejYzqxhRcGsVKR",
  "key24": "5Xyk8aVZGFRDzG1qdhiH3g4LQ1fykKBATDqPYyKPMBsZMcu9wEAGHiWwijWBSi6wc8GP3CJ8SirggRJ8LQzGofag",
  "key25": "33fV1rFFwsJrxZ7oDw3tHr6RUo5MKVKXLhZ7KBSjV66kayMu8kLPvN3iHHrhQn7eqECDpZeMjLpsCuiBR5x8s18U",
  "key26": "3HawUbd2QVvtbs4wNAqWBS6HrmiL9LGtiC9iv3w19CwWFZrBFrRquiTiFQJm2wPARRH6b5LKaS59jej5LujekYfC",
  "key27": "8KXKaTiyhMKxHzNX55hygYdR6M3hjsr8oHeN49JrJypMVbdWLuPnf5aY5z4nFNqTtzoW7fdZpPXYXn7CdqXk4PP",
  "key28": "4pXjveXAFLUGnLup3YEi49t2iBCbnbYckZhumHPCidTa4tcFArF96v6ysdfr9jQVaFTctWKQyntqVRN3M45NQivK",
  "key29": "D4igwtAcpQR4VP6jaVWZdzJfPH4hyP7i6f2poquxUrYiwcdwGZpNvxf9Jhxx4YFzTbUjbXaapokTB9EyTou28cw",
  "key30": "4srfBcRJPXRKxuyeWM15mUMxbPhL8wSkjVDJmytb3D1XTkuqjaAEJZTiBZRdy8XHw2JZ2egNzqmymBCHhfsNnauS",
  "key31": "5xZLzkzbS2QwPJMX1XpnEBvs7xGWYAtWgMGTT6kUz5cKY43nBCmj8bUZQtEGjy1ahgjhx8riukqDZxepcBbV3ADa",
  "key32": "5eUbr5Xux9EG5aFWUDL9Vv1ZJQQHbuKx3dzjMbbMgYYupzNwjz39xgQ9Ubu2XhEe4vUavjENnhExmemwsGNbbeTK",
  "key33": "5w9PEVQ9NEBDhBRp2JQsyHVjw7YW89gctPmtp9jG23KSeavnxEfdqf5rHvouCc6eRSPcgrBZQHNcW8ERSE6a6Ysh",
  "key34": "2R9iKSehrgr2UsTi4iirNZra4L2pkx3otxst6qFhjbigDFKzL6HmUeSZtDmqwr5vomjqceuCJrXHSPNQ7PKHFWJN",
  "key35": "4491QxFvFX6AuX8X2um1X9Ce5DxmHgnzDzcuBjJc4J7P5zZo8Eju8n9fKGvubUrnzarGxqLVUHBq7PxnPQBjDDmw",
  "key36": "5rtnkqysR4EB5oJmEdvj2dEivBeBYJq8UMWmnNs1Z53W2PJtDhvKJ9Wh6VvmNQb7nBtJkd64RiDr1uuA6ZS3XkE1"
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
