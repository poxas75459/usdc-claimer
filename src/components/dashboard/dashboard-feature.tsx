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
    "3SFSRwkHr69KNyyaH6y7M9JKZM5tQMzZ6am6rf4Qo4uXYjogjyidq5Xn9bV7fLaUkKSpLSNY6pjtRVvLAVrEr2Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJMUkdGb2yZz9CD36J9abAw7JMSjsw47FqgMGsLzNu2A1JJrED1HgQZTkwQnoNAb1CmZPXxw5C3DKPGj8Hd8Uqf",
  "key1": "3MxKRZ3fYvDqp3p39g4D5RVy6ixJodmb3kdxVvTcyfN32UU98VBhA6ScTfrJGMjdE7ibWfXFyQG2q7KnGC7bBKj6",
  "key2": "iJR2hyh3y6ckxpWUCbYibhGq8p35h1hEprxzqoiruRDbdBvM2gtTRJveb3P1oW8DdxkPbwGfNjYTJvhAAfXb6G1",
  "key3": "3AoKJ7egPAvGVaG7CSdAM9WVxtQYJtK7E6tuHsnCGx7sdn5zfQa6TyxJru6iNVqRisTA92pDFGJiYDXgVRqZ57Ww",
  "key4": "5G45QDMMd3aPJ71Qt7uU6DLE4JtR7HNtAzVn9o2WpGKcYkij3wpRYj5c5rSG4sJVeogV6wt8TQNLpvjsuhD7sBHy",
  "key5": "5fbfyDbsRKniLzJpm1zmSFkQxEhtmkV4SYsp6HMhcNVAA4qwQGJvH7JrgNBagiojexY3bRCuv7ycYykLuZu1X6t4",
  "key6": "3uHrDQz7W4irNFpYHpfhUb49mbhyUWsj9hdmJBHW9J4KP7Zc9z9DksFzdDrTf1QKUDbngNbwJtnibuABDk3yLEGm",
  "key7": "2xqUvzECT46jxYtVcfeTW4wDkbqzt3gGVVpj6VpMTWSRCaH7KyZ3HdjEjwC4Y9ABkZAzrt84ZioCJjbMPWp4v8HV",
  "key8": "4RLVtswWFSNpFZWtL58efcofB2CVeg5daCekb8q4iJ3hXdxba1gQXGMx38euSzmo2Hzrj7MFAVGKRcfEZk6wNRzs",
  "key9": "5tkXK9TPqAZLNkkRN7MNmbFk3WKw1SNcqJnc5fq68XCNHPdok3zDCV63K8xdv2JTi3ZijuQSEojXYBpP3uR97H7i",
  "key10": "4S6mCCxJAGzf1cDyWhVuhrJyKW6BVsr9jcjrNMVd6zpbB9RYy8N2MFs2xBcJdnbMMCDZG7xYJmEbtGTMUqJyt1TC",
  "key11": "3XFjgZYvPLGTLhC6yGjbE46CTBV9ZoXM9ntAiTLUCCNPGfXwvPo5UA5ALABRzxMby9d25YJmACqC653FoEn1bzVi",
  "key12": "65YsS6DX22X4qrZexLTxJuVpCLVPDmKjKDDvGBeJP9ozRJPP6ogU35WDCsTtTwEy9ZnCyUTakbGRZ6oYB8Du1HNA",
  "key13": "4EmPCYSXZR5YBH1fc9PzwdYossUToJEfBTQA3kDTcbnWnTLWEghNkhve6D7vWMdPsSo8rmGK6rmqYZ6G3tf3KyGc",
  "key14": "5QWfmheHF13s5cEFmvgZv2trzRkLHHsK7DdE2sy4YqEDPbUdMHXD7J97pAfbqPkesiWgi7oXj4FepFcv6N6AcmoA",
  "key15": "PvmcpSDHKNpzMNAreM6b5f727o3E8T66Ywacs8Eb8wET6MawLDkjBp75p3L4dAre3mZpztGVQQfbq7oCjdFKiPS",
  "key16": "GZFivCVZdRJyJMfnJee46P2tKn2AdYabnFw1aKsrmBaN5Zo9KhxqiQrgpX8Na442yZxQJZP8KhGjEX4eBubAW7W",
  "key17": "5RVPBwGE1nhoezn5rM4XVKmV6rVUjJSu2Pqpy88bB2XtQ6d8d5v9pRZrqaiQ5S8arEiWAxVio8gWXAXDy3YJPZKj",
  "key18": "p5YqWaxftM47eWiPoxh8xXG8opaa9TuB7VaJdMxjftWePoFRZd6Wu2x7tGnsqXaTtbcv4s8aT1G1kyDjyVqTFtr",
  "key19": "5fyKur7QtPQe5Y6w1CDUXswQyBYVHkTUWRXBYKTcZQ6WoUheLLstmBEGboJctQK2pNcgorhaaSKTqLmBojSTgbVV",
  "key20": "VmecqsynjGT1vJyzksdkYUyfRJG4NL1czfTieCAtkWDme8TFY4piLZV48BnusS5n6SRCB26bM7CiX5YpRvFyLH6",
  "key21": "3M5X1YtyqK56GXojW2km956UFsti82Z1mwMYHTDxfqusenewoaJerqz8EnRpFjMoUGtMZq4TPoFydfboSDTjr4LB",
  "key22": "2QtjMYU7zQGEbekwN7gjcfmnaf44YHkjKefijMnchnkHTeKSRLZzeeS5ZCnbgSuh5F8V6WH3Mg7M25inMV747sMr",
  "key23": "29yGzxb2wxFoeEJjX45U9zDmiN2pP4NNh1FTXozFqLJ6SLxbpKfGfzNaoxfSam7mMbZbxL739MNLCnMxVjf2L6e9",
  "key24": "QQWBb5TL4QwG67oF4jQNn7AV5KK3mEUD9PSTdBKfKs6Rt8UFRP1v5bCy1Y5Mq5dq1MpUDbUkjL8sZwTyNwELc6D",
  "key25": "GpxQob7iDQ7r7M8YCe72htMFvQGmQwSBM6hSPFCMvZoo5fBcvcMGeHFR1B1AdY8EDn4JqxHNRZK1FHGd1uHe3bc",
  "key26": "2NSNrd4UAVQzwx4y6bgncdMjTqMUGw79JTxiqNji7i2KHZ7qhyLdPeGBpjo5PmSPweTm7QVJDK6dN6NqPMwfWapA",
  "key27": "3c7TZcdjhowo1534aJWxdwbr1KtAXLUfyPYxhhc484ZSGKwMbHpNe8jiSJSJ7ZWj8VnFzuEpL4Cm3LuxDWaj8pS5",
  "key28": "2C9JamsdM3VTqrkGvRZFEGpuxESALpsfRwYYniLCgzYK8N5jGGgWtWnyCpLpFnbxb9HLpVHsY8JA4CsNPm5TZiCY",
  "key29": "5SWy4UeYmHrDxFGQyoUEfyy5caWm7HpnGohyriF6NMsaME8kMJvPZGWCkVdkpJKkaX5NL1WmF57wSXUHjrb73xfA",
  "key30": "nCfEjja43hW42n68deEVAgbgMyyQuPuvzD6SHuVGWB4ovYDiNB2DDvTdXShbY6L578dQVR5LMp3xA4adj99M8Ya",
  "key31": "3DZMLzGviBS1XQihj6qXHmZKxRGZABYeH4GjGWSp7BUz76ENxg5JumbYmW2WKtCnNR1Qw1VVRWxmjXCRQNPNSQXo",
  "key32": "2jAG7Jf7afaWmyn2W62Ch8tddavd47ixJPmcg6XidPvgDatxvjefoSCi5MEVPbJY2nB5F5SbtiVdyZAFUsR9EXw3",
  "key33": "3PwGrGTpbNz22PG4xLZ64biSTAAGitry4K2QC7UUmsCkMsEicikMPfcdwsWLTZgRf6WctvHTat1xnQDn8LFYqKqb",
  "key34": "4bqumevf4LfvbnTUvKbFaHDDLjbRtNgda2FrJz52gTYdwXLRibRtSySoN9X6zKKzQvBmkGPFpeMbkK69xoiDWApu",
  "key35": "3sE9WtNG2YN9jVr6vesZ3zjJNdikKDrdSGExbNfCmm6YgkEdXn65A1g9GyYAvx8svSN6zyYojDbvZ7AYvcaJ8zqN"
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
