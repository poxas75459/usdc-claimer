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
    "2XcLrpNnkMBKvc8V6XLdhBBWCcXoDuVBu54KLTwoZ8XFWRpB83vLpsBojSJz7raNaV98n3uDNovLSoqYbPxz5LZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTfCqsTr1WnL1EjfE9Vug3Yn2R2ujqMwByTst2gVeErzt4ZwFCuAEj8ZmJiPaD8C4HZFmee9zFZ8jE6axXQF3qN",
  "key1": "5N1hrfXyxd2UqDpPdQSXsi8hv5AAjhBbPqFza3SdzyyQzL7bi4RbR3oqCm3RWgr5q7bPUcMExU4FSTsHrhaQ7BeP",
  "key2": "5EaXZUfrirnb9acf9gAU6UhJDUuSJLwtjbsfbZinpMPFpmtVjcu8nEkfvY3GffU6m1dtjRW6UDwb2ZCUfoRKwqW9",
  "key3": "5fBM4GB6WJXpaBpykub4U7GBmJAaqTjepGzHM5yeaeWjNmg68MvrBvaEzgbhA7neh9QPgAzifjD5YaNGWArs9kuV",
  "key4": "2Vtp2x1LZjfSATUq4jG2BeLZ4NjiHF18VTKCoZ6EJbr1FZuYfEo7dcoafZXoTJi1QDxdLhqFm4bd21NvDCyrignv",
  "key5": "34E9KUphEQxv9T8KpfPujwAQHqw9EEyEo5EJguMjNVYntnvEPiXq6QWzHFdzLSCdgUdKV16e83XVNgXRiLmMdkdC",
  "key6": "2vHYJKBGGwNCV8ogtp1PWgFYvWgZYPR8onX1hTNPiGfBFfuCnDkW38wv7Mpokoic6GLPVUeGNRWZ2de98Yv9ofS",
  "key7": "3S36FUEVut4fB948rGNhX2jkJGPtnNUCm2biEakw69CeCS5ragrX1Qi9GBeDHxLXMHEtCGtY9aWsahvbCaUfoTwL",
  "key8": "21iUU169RxEQJMw6tY3zd8ZRMMPEYBm9mtKZLgghu61FRLLkJFLKa1ZYDvXoCpLMbiV7ED5hLb6ww7T6bTRMDCSE",
  "key9": "5qtb8g4JiDdC7J8iudBjGPJAdgLCdRbZgKeU1BQNTTHEuQiL2e1sN3EGjgSUbDHJZh2pViRKt7Nxn8hN3CL1cFv1",
  "key10": "5gEbYJuvfqdJMq4XPGBoqB2FcUAyHrpnbQfZ58CYk5ezF4at4MeWC1r9WMBBjRb9VKTy1tQc3GRmR4ici7WVVJwg",
  "key11": "3eWKWNBHgDPXg37YHiKiNyTbVKDJmUXv6uojmnwQEeNkyarLTBTvtueF3q2NQhi8NUgwa92GnqbGo587S1h1ifFQ",
  "key12": "i1f4oTrtrn9jUw6KkJffB6URWGSJ3unK3sDYSr3Wcw2KcMB3RHX7w5atmkbyYqVL12tBdcK4XexywcfKjPY6xs3",
  "key13": "gnM6MB27eLn3HpUzZNN1X9c4Dzn17ZoU1ThHj75L7YD9pz3kZrRsNHa2hSrxhkjsLDYxZ24FQKAV35JwoU8nUK3",
  "key14": "eN1vbapnKX4EyZCGRroXU3wVgQeqMAUWA4VGf6wDJwx5NGuLPYArGgQuhnGVrUzHu8USorjeRoqFhQc5oHedTbU",
  "key15": "uEgupTYvWjF1uihFxzYzoJqhKLTqpy9tpidWoa6U7KDL1p8uNJzmEu8rFSZ1v5eTjZYL2bVhr2v5n4pTWRqWwwY",
  "key16": "4BtjnKR7xUmG8gPuPEq6qo1qsZwkg4o6uP74sqpmPbruDsRNssykiJyK613yVZvewYpyvJ9BKHr8vz8HrUDHiM8A",
  "key17": "iwjhV2V4eGogGoW5cUzkFSsAGCA5k87kJs4JZE9nYpw6jFWChpYZF9dS7rLe1B9D1vXfCRdCEEayZmggj1HKAk2",
  "key18": "45721JQfpNGv4ZMGKLHdjCF3Z8QKLmuhD2uYHcnyF1xDBG8EAhPHutkTQexB96s2qcibhLhH1bMZmoA4SJKM1La1",
  "key19": "4MzeaKSpqJmht65qrVfuLidYqNTBsjXLdK9fEL4CNYiStCWX3s5pDTZqRWRC3P75sMnXmRReVR6NEBkDp84Q7HtK",
  "key20": "5LEB6CbLkVbMsDJ59bqLgaFTmUjUWN4NoJcppf5kLD3i1Y4QsRVBHniPRqATVn2J4STZsAvYHrYwyay7PGKqgkRa",
  "key21": "291kG6jEGYh3u9xey1uXJCyJ4snxGCHLWfeaN7suphAkbShR3drvVo5GZ2oVgkrvwgykCsYLVBoixtdKLSJDXNxr",
  "key22": "2TZZrWaqLcCYuECFdg9FL7vqeTqTtpeR7rPGUEvD75Cmy7MYfNT1DG19qDpL3qDY6XEzeQJvbrn8mqviVLEguxyY",
  "key23": "4v1wuTkUxYpjisBySfXcd3wPnbcTBbzMW5BrPgvCJ5CyuLz196iDgvgnZu2XJSt66eqTmKY8cXya79TXCkdJRpRp",
  "key24": "5MwTGd1MQ1RYCvJ6BbG1nesHUy9YqmtWecRbhmb49wd64Mv1wFW8vSuRd2iu3gcpsseSPxT4UtRdxAkNcCZHPykA",
  "key25": "5xhH8bL23TRxCUXADwpGKPiNtYs941VPTG7ng2UeKaQTBczPWo58197VW1ZF6Yag3EeFBDuxMLfqMHrHpXUne9vF",
  "key26": "5WTimg9TTwpXM6gFbQn5GiZAhtBp674JcRPkmYkHFFJWWGUhAJSGd7HTzbRHhMoMJoJAE2RK2S7yMcUZtZKsMx3Y",
  "key27": "trjMJPCErZturMPwtYvQjqq3T82pYtgV1uHzvhAZafU4dMeAkjp8crMGPNgoNozs3wZYQWGw4LLpLQfkXzZNzDo",
  "key28": "p7wEx7jRgL56JANosENeb97dyvH2uBrrXosvqu6RtpHcLPnF14KBLKB9UhXDsmauWf5CAP3KXp1khdgEZHT4FWm",
  "key29": "47sJeyM8Wc3z4GB585oGYPAQreoafN8Jn4fMpXE2ZkoszbyprvmcRCCVnXgrQvEXcZqmdwEapaHj3GLfXH7Y6H4s",
  "key30": "JVXr2BD9x1Jfqr8ntFMvx6xgRAXZeshk8QAKSNzbdvMpouRTAkioxgXvexgJSXGPnN2jrVpnLtMCLR45HwpyUD1",
  "key31": "5p3AoNwMi7bRTQfSftG4gt5LidEZGmyLpd3C6pTfrRiiFuVnGJr2y9dqXwEHAoTKYoCiaUimGo8Rwn7gY8ommXZ2",
  "key32": "j423XZYVppi2fkWGhgJCeHDvMGQe9M6pnLrYdwM2NQD1TJuTFkby8GaHwWM86EMisxcF45zCdiu6eBF8N3ASMpk",
  "key33": "Ez7Du8h8LkDPkkrSuZcEV5DySuehwj2a5veanqTyz8K8iJMMETywwbGQ7HKvKMkC4C6oZgNsuG53KWi1XrAvaE7",
  "key34": "5Ci7oAgQDUyqmeVYp4rq6PqSiNyCuuoVsnX9TaY6W2riGVHbikAVWWKVhRiQHkKsx4TdoACXEzPUjqfkh6DqqkQZ",
  "key35": "2XBAFUb5ZGJpBCXbtsCoFWNKtmoT6SeQDqifQJGCqaYy69EtB8DY3KMopXAkiUpN1tEkDACzCKyiBH4TqexBWiKn",
  "key36": "2nsHsfGANpZXM6g49Hqhf9LTZA3pv77ayFxnYp2GyLej3qBcEWTnkMyjY7uVFSaTZUFVzq1rqGz3AfdgJUG3KHF8",
  "key37": "2kxqL6bZuMNgomcHkS2LLffLdtrVfDLVpda5Pmrg916hZvyc11XE8pmkW6FBegRWxNAuVzTewt3fra1CivvFsHXU",
  "key38": "5yZSGoUe75Ubwz4gpLYFyUC5KYim48NZjtCZ8kMy2nMvfo9sdbqgANLNFmmAsUZcggovEebueam2hgBrSS2nwVe2",
  "key39": "5nrneWMcejovhskPETwvuiTzQFuZdbYMqveiSaLQAVTZEQ3xFJgjZSnt8KPsSzg9KsMs55AfBULZSptVejYKguqY",
  "key40": "5HyApoDmH3ztbYPoCYzmFFjgcPQRYHHC6UNsRNESXv6eDc2UnvP5ZQDJAbGjykP6V3MFx7j3UfDoVXC4oF3QXXB1"
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
