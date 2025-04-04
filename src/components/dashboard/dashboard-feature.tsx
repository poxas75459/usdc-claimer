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
    "BEmYrwYLSpySGUGUHugcJLjq1GjzRMCBgradhtdZft2Psw2qHrkhECQam52nMn5hWLetrgZeSA5HHCRXJ9QTjat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQt8NSPq912V9LKQzyMBXtmPStSkfJSiNVVGZErC3tjLbMrZdp5kw9kkyaEn6R1xjUpVLDNqPm2mppiT9ae1eec",
  "key1": "4ct5t98mPHvGHJhrunuQdM4hqe5K5M6K5848CBuzS7kCAPuLFqrmnXvazU9HRUjpYxFxrC7HaYKKCf99AcqtejJ4",
  "key2": "3xy5dQUqfgsDDS5jguJ1nfEjNWG5wBMLg3xS8DYe8eMJTqcEEhEPQX2VBj7STGutqHqogxGnm8XKUXvqdM7w2dfZ",
  "key3": "4EZk6h28LCcRfoGc4puSNsUfSSH3j7fUbVAAUUSDmiFGYNW5m4gSJSDcrp1UbDMMaTC66dtRXoEiqLbcqvpdYwyX",
  "key4": "2cqTxV6MadC6xxuEoWckBJFYZWseYoPxgetJ7saFQCVTfNAxJCyG82McquGei88WKU1XJtHanuqR6HW1TJBSuB4x",
  "key5": "2a5WiPi3keRuxnyiWdiFCdhz7yVFUAUWyVepUS9FawFfTjbQ5fY9CS8aQsWg6znf8RmLRUhGXnFHYPnHHrvip5fG",
  "key6": "4BWtGZ1trnfMq7LstN6rEQcP1bJLgKfkZFaM1bqX6Joor4Liwbwp9fZsD5z9j82vux7roGXoie4QDbMS7chqVFcC",
  "key7": "5Hr8VY7EZ2WesBKTcNQfY3urhfrLSmKgv6MVgQVPihgJUoy83J6PnZVWxskpyaSdS1es8RvcNrBFdumGCbpbn6t7",
  "key8": "4x7rjYKBBFEmPD57ot5ppm5wgrjLB5rSjrbZiUpVko7WCEJDPgBA71Vn4md4a5aup2UryyFX1yYk9MiYtVhLBBqx",
  "key9": "Fm1FgLiuawiUzzbjwVuD33xdfgiSN5YDjLg8e4vubEiSsjuShiBPN9UYf1gcFL2JMfDXXQVTgttDVSuBRZHXEf9",
  "key10": "4SprdyAvfYwNpSKU4hW27ZEEsWCW1UB3B1akx6N87VJ4zjch2nKxPnXPew94GxDspiu1ZDhEv7GuGzJ8c6SJtj8J",
  "key11": "4DZHCoXDBTwTUrwRnM9A6S9kwtbECrTkxQ7CnKDs4qkgF1rr2sKnufLuAJ1LaNXCxutYxcPojBEBVQBRu1odeAwr",
  "key12": "4ksg4xHNyiaHcvxTRfWZjjBgBxgFqjX7aiPKenJbf5HVRM8rWiBPpaz1tXkgYYp2EmSRvHKxkxoJjfBpwiaYcMu1",
  "key13": "5WK7TQrGTtsfKt2srT4iqbdoueaDVzvDEDSpskSXhK6Eu6aZs5jYUnvrfiAHfnZStMyj84NgqPJu51KfVnFy6s77",
  "key14": "yBEKVKp6xCbGC7EUvXsJCGkhKd3dHn3GB8yfvGL93PqLRhUjsB4PFkqfMGo4fFPHUFuZiHbFNjxEtuqD9k8Hrvw",
  "key15": "3EMQQtnQjYLzB7fb49PGL4wwKY2Dvr9cgKEB2FEu3wj2p19E4Cg2aBp5NnY65zQKogfQBWJUu1bqb318cjUekhEc",
  "key16": "2U5AsGisKzdedTYdHhh1hFXrKCEBoWMtP9ep4RMbCxRk3zSePpFwwN5ULjRTKN8j5usxZ6zwSiwMSFW86hhgyhf",
  "key17": "2rGQL1uKfe35UAEZ2eCo4Yf4nU3Lnf553MYsrWZa7xeQ6cxuqQy7UBSkjerQxev6LhiaGPgubiRyDAQCPi5mDMmS",
  "key18": "4tRP4UPmmK1J6azr92dzAHKppj8c9G8opSKqxKqC7kkpVf2rXhMX9ovNS5hKwqMsg8ZTWmLafeAP1gD5C5qtub9R",
  "key19": "58iaryBNqKQdrUkNtP2CbknFbqvWcGpTmkvWBQYd2edjuj3zk5tvh5SqCu1SMLZda4gGuZE4Mv6ouFyBob5m5C9y",
  "key20": "5SZhgJYvujPBPgxYcRqofoijwQiFHwUb6BVCNeaqrVtg4T5HUHURHcCi5K8ExDzPjmsnYV6RbdPQfuSzWYPJesJH",
  "key21": "3gUXmSbc642vW5o25zSD6xLfzg2rmavvDwTK9kgyMrBLUKQYusgh6kgSuYPUgW9Y7xz5LeERCKMtgWgAQjZn2emh",
  "key22": "2auLTeQzBzrNSX6MG8qu653u2PkAXjPnT9SAgtnRFUni1HMKPHFfWiLtBq16Cegc7ci5EPkZEWJymptsRd4VjKdb",
  "key23": "4M9oW38Mz3g12SiGSqv1cfEq9guzGRcgwLEJFKRHnaE6BupSHEBDW14JFxgT89UZBUsbVmjSrqgFmtbm7VF4pidS",
  "key24": "2LguXtKdDhjiJwtLahaBXiFhHgLJXKmS87pydnvp6Fx8DmqGeuvKbN5z2cC6A5KXuEn2V4HBCkpjeZ62RoMHBntE",
  "key25": "5HKXpCWavS1PReExJfM5ARmGBBHxzrwrxM6zWyRGwb8g31UvRTJN1YX8C4oEZg46UHBXcizM3G44ZDBggodx6adD",
  "key26": "4qaVwWsurBN6FgAP7FnsoSoYoFpmMn1DDr9T5Y9eXAjtNqzkkjKU8zx3bV3jEaff9qLgbrxmxije87nZi4QgDpwZ",
  "key27": "2dQuuQjahh9WvmCnUdHetN6gsmvKaQcg3GWpSJaSeKGcGLNLk4E1DL1dKVAMs9tTa9vDXXa3kAHZi6XNAiz8EDc3",
  "key28": "3wkbtFfkvQxNR8wPpNFrpGXQCcfZsvCoDA5bcZpmEz6vGeKqysLSdnqTXh9DRzqCjE3WvNA16v7Dhjbw6TDEYdfV",
  "key29": "DzFWjz6TaHVymvtwXRV5ckcxbKgHFFdmzYCXJpKrWC3793GLhxEcesktSRoA4VyiwiDrgw9Ftq21bnVWThKWqLV",
  "key30": "AZ9YajjCyWwCX9V4f8NRQB1EuwGWoXLFDrZHhQaY3ThqZb7N1gHL7qYsHBfRFnbvbb584ZfstjUj1GzQXy7sNbE",
  "key31": "2w4ho6Fka8E9WoVWfU1Xz358zGJLGMHbvTHnL1FVxxFWdd6nXhceseTkZCKGkDVB5Ytk6N8ysVigZQPRxpiCoLRt",
  "key32": "r2UamooqW75bbA5VpoyTRnPtsaz89fRQz8zsru35xsLiCzTgFyipvUXU4LiTnnGdkf9kDMWpvVW9TwYYEwV3mzq",
  "key33": "522xGsgqqwueUH8PQQ3k88JuMbRSoRHGTDKud7Uq3NUxQwgvkDeUQw6CJYPZtjUjAsgo14qrfK9xg9LGuKj3bd5z",
  "key34": "4p84xLz2PChYCAECj9w36Wd9NaPM5hUTUCMVd1emMDrCTanmqo8zju3xQBxsWk6vfTp9hmRFoSxpwExfHRLWngha",
  "key35": "3rVv1Jeg3FhsspH1vme6bh6QC8EJvYD9mqfSjMC6wiHsHUYmw3Pvyt1Q1aQEHa2PqhEHqgDjddYcL8ApwNKxHy5W",
  "key36": "5QjC7ENmR8Dg5aHWnmWkXGX45bZ7ZUuFR5SteHbQ5mrx7yqUj4U57Ym2brrAG7eFTCgUZLya2A2jd1JAwSegDyVA",
  "key37": "5JFGeTkw8a1Myv4ZQSVPWuS7gDXSGqstLG8FBsPxbMoWdvzZDa6FLgSAL7j8L46HmbMeXBHqGey9qazuFSHxdhrY",
  "key38": "3MWAhGejrHxzuBo1Hj5bJ3cdTUgsmzv76tofVuia7Y94SPoEGPE7CbgLJ9aj6U7NRQPAq3FFhcvEYYKUcaZEV49V",
  "key39": "36CL2dw6BHGpsxhE8XcBGsq3AA3PGT2WiEMPbgPogNYkHPVTtt3KhL5Ckg3kGyJKyTGAJCxUSb1gRNmAjGyRXTAn",
  "key40": "5jhv9M93aTvmghATS4y4dsbHZasGZB37urG1nXroxUZ1MVnXwzLHUManu1j4DDXzMgyath5xY3hqW35GZT58NN7o"
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
