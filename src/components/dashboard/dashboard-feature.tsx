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
    "59DHd7CYUEJdXdSihp3vY8qNBYw55pGaHNB9kvrK2AZwZocfAMdgVbxWp3QtLxCFAzyGEM3rBDBdyecoxy7J4Vvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CAhErkQ8pAqUAANuxSR6qQZVEvoCUY1q2qCL1tsATjLfBr6qQm49Ja4nhP74P1eDS8ewykSujLsZPV72nEk6No",
  "key1": "3LoVyNz8qWut9jxCXdXKnhZDP9P6jUHLBuiPUP2vhJZ8F3yTPBy5NCX5FujosJsMrm9RjpTGDsEKCrxAMKwbdSe5",
  "key2": "2afmtLVmbNv1sTU2nBVwPeufrm9YBbnqr7um4BUDbrd83hDVwp5bgVBwcFHFpYeSkmNoCWTFb5aUPaHGJsxzx83D",
  "key3": "3o5t3SssiYjZ3bpDyRPd72c7pRe4aqEnc6JYkgEMpxb165TXnCLSsmNTE4DVsvPLRgdcDNZS7LQSFgvKsJqkHfuk",
  "key4": "Fw2ifYK8YTh29TJTmVredKkq7QbxbxycSTvGbRAE28dqYM5yTXHbRvM6hiWMmARhpMNFShHA71KqJoScMVZSBP5",
  "key5": "5JEctfse3CqsqzqMWaqZayTZ4mk3NcMtYqLPrHavAoFvqgrpgbtXnFuPhwwVAutvr8NT2nFJkdtaABCgJvug9duE",
  "key6": "LpKEQ48RazyW3e5xB4fQNHRDj4NY8QRnNTF484fp1nsq2RStFSs1qiSfQ3KXrfzzdndeaMFRCTSsqquFFD7qyZ9",
  "key7": "5xVbNwqeP3gKRY16MjdpD8SxxNaZZpR4aLnJ8wZdTeHkdZpTWxSTqd1YbfZrcGM1tbUNRHAi3fGjwQ2JEKEZoFzi",
  "key8": "5o5FvzoZRoTENftBk9C9uLjm66myoNkFgr6TXKWugXXXJkhGwbmE9v6fjTJpHunN9saCAYZGrL9qKD3fs3FCaB8J",
  "key9": "2QR6L21RKmgfpnVdGB4YvC8pQrQ7XWoDjUZ5fkkuVAz9MAMT9HLgaq98xH3ZcfZeXXfYKgeeHLUDLXRMxyiGwKyb",
  "key10": "3kpqvqyf3khdfbtUe8Ah3veXNNTwjBcMuqc6mVEJXNcTWQLZYFa1wMPZdE11dvnhwQpN3w9V8JUUgJb9PyGpjQMK",
  "key11": "5kEbhKeTY6KFcxDHoDgpzPf1XJ9QHR6E2wqTHWMQML7otER4ygAVVRNYZeJtm3b3HRbP7FboysnT9WqHgpeJmxvu",
  "key12": "4uSyehAKVuWvBM3mvRSjW9CWBp35TZ7i3AMsPsn7p6M8yEPGi1UZKwYdjFth5EmZ2MfFASE7zRVzGTEtKtm7dN6M",
  "key13": "5TMTRPKRULyiKwYi6WzdtLHWLxdQ2RrpsmGd5hz4RSj2GScz7DwmYe2ENtKyphwvqz1wiPbS1Bi4ZV7yFGEfzkgz",
  "key14": "2AtAkARq8etWtwizow7jRdXowVEKe1xss1hWmZWUv6D5VdthWaRs7wx8TEcc5j3PWcNVPi7d1Rdrf27UPm9SeHy3",
  "key15": "4kHsMFmCr1S15YSwwQEmBnCYy2K9nubCmCDhkqYGfcSJt44Xy8vn2cpwZ2D3wkywYRXANTfffwZwvCzBeWy4ApBS",
  "key16": "EruELtmL8Qh1Asawq2NvAhmHjUoBMcPL9n2SQKKPLimuzX4Sbbm2od4CEXBq62YuYjwddgJQyZm2MPXc6QhvwBy",
  "key17": "5vQnmGJtodosDC3BhiUDjbE9o5U1rUD5xoobZbfMBS7CfXb5NY2xm6fGtDBCpuCnYS5KRgeDRNdMaEQ2735S24N9",
  "key18": "2cjs4qiQ7Y7fbtfkubaUjXFnn72NN2jU5ZoRAmFUowLeLi9BFRXgDKUXLSBdmAYWD1BF1LG9VDd2vdAZEpryHjDr",
  "key19": "4tofnxV64iBMrFjKmkcJsFySYyFzHnX2UWfrqN4bfeiz8huxUMWViWY7o2pXG52Y7Fm9GDt87xwADh4dNUmX1peV",
  "key20": "3mWFTkySXRT1CL17thE9jsc7CVhHfN9QL8LkwEoZgxoVcWhFYrkUFHzUdtUP3gPE8LJ82WwvBk3wPQKDjsSPJNiD",
  "key21": "654rKm7BWdVaQk33eY7wXje9k7GY5uaz4uvEwFV9Yd1wE7PgvcYdNFMtMiE8m48P4niN5warbW5ooVSaZMjWmwya",
  "key22": "4o78bVJEQmSAcu9GuXCk3HYFpExsEMbN3dLgiQCHgmNwhnjU5MmbG7V3CyF7je1VWE6pVmLL8d744iM7tdNsBqqv",
  "key23": "2wUQW288X7G4v4DGwYHZmgXxxD2ft5MntvFk6zpX8A3cNMvZE7HJAjXMEBvNcqbH8HEAq1uvQncMDPNw2JqBJh7Y",
  "key24": "h4ws1uYgRY7hYAM8otUkjGfFGm6CRtrcRzQEx2fW4FdFVgbcDJeEvRBUfz4KBtSJeizdcC4a66zn2MEKaLg5Lny",
  "key25": "65XUff77e3ZMYVxLY1spJbzipTBn9wszoGizStX3j3QLN3yi8Tv8T4MqtwT5bU7n2U9MMLRsmnAUQiVYMVEMPmZu",
  "key26": "4gYhRk29ecpdovWJAXVupNjcpkvsScf2byL7paHsoz2a3fgtf7RwUjn4iK2yDiAf67N7BpaKGcoKCmJHy6LokTUr",
  "key27": "FMLp8pi8kfCUzYu2uWHbe3yJ93fWiEvcZ8MX4oGoU5XeYzdnTGu9PZTzLmc4Meznx8Wqh41b2qUjyUnRuDDSqRc",
  "key28": "3J32y9kZ8ASh7KwZz9PvFiqteaQQ3eNA2xR7KHa3C87WawQGJXLCkeF8fWTG2nAwuLSzkHHvMyhoJKk6eoHS3Gch"
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
