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
    "5dySJ6oymEeaJYbhaZ3eAM3gkqkst6y1bWgCFeFTCPdZxgbNsAvRGdUus7QdpxLu1Ezs3862rFtLtadZNwzBzdGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hpW8TQHuZQkQQJrPJ2pWicvgf6STUtZCEwP8jkXuGcxSZU8WFZH4SV9XdQNcdYiudMW5TQkcpfpytZ5Xxg9iKbd",
  "key1": "3We8zeq4U1WrZ1QNS9pvWqe1oo6e7raLrtyvN7H2vANKDvtqqe5oACBkD3AUZ4Znv4xTaR1Ztmm1YREf567h2Jzg",
  "key2": "5ckimoKfnaTQiPBaR29XoLhdQ8xpW24YL96SN1o8ztemFq3sEWhLgmA3TTeQp1vUtNhxv6oTP9XaPHfWewHi1QzQ",
  "key3": "8pkjdKRLkwzJtnbJGx2Hgh4wQkbJN6XjDpm1NGhYfP77tGSq3TBrg9gFhhwWG1BycPmW98dwsKruKsSFm4PPdUR",
  "key4": "2kWrrMHtxdaUVUTVzsbXNNRMXkCEhGJ455SESZ7LXLQgxmPvpgBkpFFcbaUqUbbEujhMe8sknjCwh3JS8zWU1Lbo",
  "key5": "47fAGUU4NnpefJEkppVmHTDLhLHTJYZMtkzX2vP7GTqqQ8bW1p8ZxpEABHdnQWq3HccDg4BazBgoDFDu2dACcM2J",
  "key6": "4KEkufYYJ948wVcLaaF4mmgxfDxYHvyqWkmGzHAoun5nnaWjJcJtLtCH94evvP7Y9SbHhqtcs8d5HHdoxaqNGX2R",
  "key7": "5QJefZH3LhaxUmxf747YcZjpBXoAtqZqY8gkexRT21PuHyiGTfoVUadV7fH3ZvkKgpxnuS7AxBwCGQkYNt7Knbqf",
  "key8": "3WHuP3s5iaFz2nHR8jNjCFFUc29cm9ZNc83JoZYfbwjaJic7Kx38NVFhig7MGPzBQRh7hpgon55W3U5PtqFrfGHL",
  "key9": "5xmJwgAMoTJEziTPnMDuCUCaUKSQmGeEKeLUb73A2N61qoqYUpGDrUGVuLpByx1XXgoJzdhZwWxvyQy5SuUK2HRZ",
  "key10": "3K5vUtxKXyPVZMGffewkV9WiihiQuGdAQWKi4Q3vzTw5NnWGVcAQKMAV9AEgp8YVaG99Q1MRGASEVAWsk1JueYtd",
  "key11": "SfroSdcXNeTWP6jcWMWvZNCtpwvEWDyxJYGVKBrLTDzBqYxSugGpgbw7BonjyWieknW3qiQ4Zp2YRF4Wqk97ecY",
  "key12": "4Q23wbaWsF1oUPCjgWNR7hR4NgjFm6jxspWUDmqrjtNRp4scUVnLhpQnoTYNrJ2HVhU5JJW3fVMuQKZMYLF5beUj",
  "key13": "5o8PdfA8XSoe5msfJaGrwYDBxgC3EZJveLBQB8hKVjZ1LQXEoQDCcd6wnYrGcg9Zn4nktHATiYJcGS7qPrt4NR4c",
  "key14": "4YBTCwMfdbMN5PhcGLuXLx3kF6v2SsFLTjcFD6Anj9GM83DgdNo34QXnRamM7CCw5jAftJBzwY4ro2r2pRydZfN9",
  "key15": "5vAMgCcXPdvkFZLAaoGVsLqnwcPw9c2L7wBJS3BcFtraWHkXFyvFzP5D93ntdhR5aRCAoCEw44TPdTAF5e1pL6uj",
  "key16": "3yGFr4p6iBbaCub66GyM8pkiTExTp42FsmCUaBqVtrgprLZjZVX79R91Fzkib1huLiZ7y4q2GXyqLdGdYZrhvjga",
  "key17": "34kj8HiL1hDEV6Zx8YGcvrad6MZfCN4aby2sACxNVAEF6cEeRG6K82U17BoaWBMUJWW9vtKfQiaQ8q8G2fd1chGD",
  "key18": "2Gn8N8SHcRuGthccjKEkBpTU1XKUPzHETCMBKCQi9o7K8v3uzCX8cP2XTVKxeN332nCoBqw6VwFkwahVpVnLL4d4",
  "key19": "o1V4HxCMS8QV2esVcNh8ihVv3LAoZYusqwNJuZLdhNPtkmJFy9j1nWW6rwKPk7eXVJzJif56NvD18tunjw3fcCj",
  "key20": "bkYa7ge2fPYvJXKvk6vrCN8rSpZTmLWT5caruwyCtLQAUZBu5JMJ3PNLieVZf43cFcxQhW2KMmJCTCFTss73Ze4",
  "key21": "3ykjQyxrTrTrAQctbWEZwJvMn1tWZBPrMa6F3zLoBSmzrqWWYLaQqX6dNN8iL9GALoNMv2XiWuPfPopZg4KhnnEu",
  "key22": "7UX43QqjzJzK2JcNvXM5tQznonN8XxQAGFGRdXP5LoEUeDZbcaB6kCt3ZpxehKny7t6ybFvvzEtixmUmCghs8hS",
  "key23": "55cgZk9q6yN24bZpQSVQtuV5yLfJiAv4z57yEP7Zj3eDQPf3gdGDk5LgwxWtvWksbZKgxkcSjUeViKQ5VUwJ8Nie",
  "key24": "4NWcr6urQEEYqMP2JYKuXkNwgnkbQ6G7upVku556zEh3GyPTVc7Jv3h3bR4yo78kcE7TkN83qeqSMktiWq2UhTTX",
  "key25": "5k1QYhCALzhUdsHxBf95ujQuvadq31wR42KcEkiTdWQ3U1rU7ZR5KDKnHJHCtipHMaPEwwdyZ5eiDHf1iH4kL9Ug",
  "key26": "3mnjLwwQmNPEL6WJeGkgf9Q1JMYx922qwt9XWNYj8JYv2Gp2XaBheUyVc7rwJKZwuWtpN3VKS8UeQpzcB1KBWjnb",
  "key27": "3sHeAhKYgtexnzMS25YH6gEhQi2Skytg1PFmcAFVqXvoQQ1vx11YNDNGLC2tCWxfd9b8hhozW5DoktD5paw3wQ6C",
  "key28": "Zntz4Et5ieWAHrD7pX2TgKjQAZbimdjPX2ksyu1ohV9yLAp3hXWBfz4uxibkDp9j25P8w6rYdHQQhUDLiJiMp4P",
  "key29": "4JePLFuzrhCi9WsRJqUNKUSdQrGRPk6R1pRSZua47Jqa6WPNjA375fQYyyZfzTk7iE3bBJP9qauEpnGuBZM5bwxp",
  "key30": "3sUbPrXG3RnoBVYUQLUUUECD8PhHpPFNLeMxhT2sNhtdE1tKawcgdewB4KYPk1faYXA9QbLhzqGn1TyyQksfzrb2",
  "key31": "5jvvvYZCrdpDLVNUhmRscAydTLHHCVwi6GUkBpDAV4q3cuZKqiCs7JhxgmV2zeFjFv8nQyfcn1oTg588t3R57f9m",
  "key32": "2EasqaB5mx4kAHbjWPiyHo7mnyT3VoZHXqWsb89M4BZAcJQmudTUYpQt8C3o8WnpEEAvFXpExYpsMXkfL4R4QTVS",
  "key33": "3cRft1F75jCGS2xRLHxkZgMiGxpGqrN1v4CCaiyNcEWaEbYNzv6FntVE7fK6v5vt14H1SvqdeGRfdTZQ6RnLKiCS"
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
