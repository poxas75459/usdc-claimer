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
    "3Qrm8oPJ7DA9HjGD1WfaP8ChvhYp257rgBqht6j8NbutZM6beiCn6qowHxCRwt7FnQxEfYvByiSDGBzKwihoyV1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmMHNSSuhcszBd5XVomPmHiAXSMy5Ls35maZqYpJ7hvYV8BADaU4M6FJCd4RXezbCXue972jFofkdkr4MVwNfbU",
  "key1": "dmWPo8dYrnyXEGibECm9iL2ijpzULqDbod1KC6u4jKLA156EeiATzBB85LmBVmkeTXaK95noKW65LyeqN3L8opX",
  "key2": "zWM4aUZqCEFiRs7ABBwkbZTgWDUh1SwyJ3T4LRrpu6WDcpNUSdtm6VXfA5bTgqWZBzNJDzq4G6LHZkzujk9Yj1i",
  "key3": "28RMdEceVUPxP5eWGMvZgEHcpC1dCrd7DX62UXFszbi1XKUVvNhfu7CiGBzceDdoXd8v7WnEmGWuwrM8CsRRjZuZ",
  "key4": "36krWhcph93771J4Mk4LvYzQXpRSAYqFPv7zLWofRQpNUp3j2zB2BBPsZAgHJVY2KhuAZ82N2fXQy63gWaizjLg7",
  "key5": "ib5RYLNRX6kaG9go3uq3yXwbwTtZL3WybJ9EXxfzUkau2pBQU8a2uenq9chNGtR3uNDNMxdzwYy5Pqatc1Y8ch3",
  "key6": "2x7wcGaMaQPhrqNKLBNt8rVRes1hjUzy7JjpaP26SsiENSFWYKxK643sB8gXxDQ97K6Mj9RC5DszkCxZKKn9PXzt",
  "key7": "267eXFtsNbppDAN4mhYAF3cqfSCtaEp1tZZChhQShQG9p7hzXBZ9snGrAnUtjLkqpGDM6aWysQ2UJHo7h9rdHaJw",
  "key8": "5rshcigRtq69z3T2PrwGyXKozo8X8hYooeLKiok7c45E8H5ap9bZTEwJqDQZV7feDht6CsM1GKMfnHaw9dHEDouX",
  "key9": "3ZYdi2QmVBRcwbxNRx9rn9oHqK8psm6GifJGmQbrcobViFPmA1t4QDzNiULDyGcjrZQiw36ohAf7in82VyQJj22V",
  "key10": "5dzzEDo2GPtSG1a4YwRknfPAWVLiVgGqoxeJ7qTCn42RtZyi2gwoPx5YHy5C27BWsWih9541du6FmRyJiWXyX25P",
  "key11": "fnjasYNQJRLUkUkQokoucafZwyeMm82pqfxwVAAVDAsb84LEcG8yuA5gXi5dWWchKAnjtEZNGtPJjJJPishDnvb",
  "key12": "4jovN7ehArtEVTDxUvT2FPNw3Pj2z6XMVPnansPbvmqopjBpnYSZhqWhFnSka6pt7tFj7i8ep7ZqCp6nZAat2dQC",
  "key13": "1UnCBmNR51ScEofW1oA3kVUPNGY9b2RidSb26oUHRjApCk6137kS2ALWWmeFLmaDNYJZ2rjagBgNkHduBXRaJro",
  "key14": "1xGcxafUxD8DEkvP1SZnz9HDYETGXoBhsU7VySVyEA4veVeo7EYGRLS7oMPRbUUAgw7w3U8QctoeqadCG5vCrBM",
  "key15": "2WTbgsGatbAZB9yjmmffdoSfqHLqY6r2zympmhvvrc2PeKN8t2meJ5fj51sojJRTmMXS5LQ7srVm69fHTKZD1UJw",
  "key16": "Fxtp5uoRA1rMQPAZ29pvFTZd9TbdBPgBUYjN3t5eGqY7GvDzog2NvrGG4nxR4muDa1NQEAoXhyudbTXwP2kKJrx",
  "key17": "3wQoU4k4qe4jJvwhTdc9zD2Upj6zLpgkYMmnv3ZPFDL5zUjbpf1EhGzSPSibnmCsakXeJjY56QXGK1wFvsNwcirx",
  "key18": "41TeNGT32noyYQpymnWrRHeDsrab2XpLxooPuexmqjyQPjWNJF7BsjP1zEesFDSacdbebrkBn84cDAF8rzMzqZJd",
  "key19": "4vwCBe8cvRZWgecmK3EVwVPushyR3XdFzWtwB11sPAqhMbS5iqgz3N7qbdeN5EfCGZy15be6JJRN3f7LUvyZZzHB",
  "key20": "3o64ZScmi8pFfFyVqaG62Z1Vtu9FsArSocNCUu9kzWjCx84o4j6qzkjr4yqh57DybTvhQEgiCChprn2KbN2uJd82",
  "key21": "636p9yqNhE97rZV8YjeWtxxGgKxvunTt91Xw2Mn5YT9seiMKrR5dHfMpgWqdaPFLnZs4rLRBPNcuYW1XKVXDziWT",
  "key22": "61tfnyJZ7wivbHaE9hedmtAzdJduTzSRH4vKUQCdnJd2CAqchSFJSbkc8GAGw3nJnsU7TNGidDRD2VLQDVS9cZcH",
  "key23": "31bAsxvNgvVyYVWVfqbKCSXyqoV7eaw5vhDBRKoDbBW93ncDuCVxi23HdGoKdDseGCzuBnZ8JbtBZ9C91XgfrnBm",
  "key24": "2UWw4MYviiZmvkAJuRAUqVLA6gUV2o1Wb8ShjSc7tRRAWTuxALD6kGiTmMBoaERnTU8CtmAkB2125X8GkLRmufkV",
  "key25": "5YMSRotzunzRvX7wmoJ8ew4adci5yE2DQbTuzmqgk9VnUDT3a8hdZbsidHaEEZm2psXFJn7ZgwuvsaCcnDq53pQf",
  "key26": "2Z9E52ZPyVsWRsLXc4RaDtipRnbM6P7Tjoza3WYN22dSxgpN8djo8YwKLcWPbWW4UzAES86S7XkkqgsevBYiYc7U",
  "key27": "mwVgcoXs2GmQZLBwWDq4mHtErewnWoBDSeQ3CbNVmpU1UtuG6hQL2M4Z5iLEVxEJhQ6NP6svJ4gNTmfPBzGUxbB"
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
