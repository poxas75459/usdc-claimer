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
    "3Y3A1xFLk57JZ1TwiCrnMvGTes8dnr8tWCfwtfmRbo2ekwWw58dzHfpgYTTAUBa8uijhniH3h8MM8mugbGrRHeH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hnoa7U1MXdJVwkMHHJSwbQRBgyeVsfAH6NhwdJHQMyURdTrPwTNBxuMXG7AMkFw4HXLDfbRFA4YvenwN4JhkMDh",
  "key1": "4bCTg7JsucXMsmTufZVEf2T7FpiVc3gVx1phP3MAigxNaMpXtoZzthmWG7prYRCiURUS54u4zPXndCr3r4TMrVYK",
  "key2": "3iNbMHwmjjjt8MSdGVqmQX4G9pSgD4ZSGoUPjQYFQdZwCBBFdAx6p6RC3CCF81GoJfQDzzSovYSQYxkfinoCtL3q",
  "key3": "h9SVLGgwT3HWoH1raqadvimGsxDaVuTHTEzcqNa8vVyN1RsmRHeeZyxte4HbSokcPgBzdq8gZh23CqNnUYGvi7B",
  "key4": "3UwoiZeXzkqbSt3MYou6i5d2MMdR4p94ttiF1k5h2LcmANkjqcdMYbGh4q3pN66uizwiRqB7BDxdaV8bgKuxrXFX",
  "key5": "3ryb9wQ5hLYVfGpAvVUj6bMSmhfXcRgMsC4j8PnHt9Fy4qbZMTtaidP2eMfEpj4Mzny3YCGnLN1PHsFgie6zYLxx",
  "key6": "LXHMfU7d1aMeMwNPpGTPV7V5vfF5XU1pKS8y5LK7Eqffo22MyfTYiyz6SvKKeao5JEvTbYgsAZRkfhjK4KLfvdC",
  "key7": "4BVFYciwrysdjZWWvdSZnCprordH61PVHvLmJNKU7wHCgu241Rhd5PLSyyPGtYDtNtssxxz26Gq83fUpNFye3SEv",
  "key8": "2tW3ivqLyrGRUcMZnbzPNKDdocarA6Qj9f8pBSSU41hg9FJWPfkU2TvbCvuJaTAaXW62SFcMpZjs29WzPJfW6ZAX",
  "key9": "45VBXboqBadKWABZARyP7srERqePDYEbCoyfpLyN9smyE9JyReJEwjRok7ToSjHoAxByTjHLWSCqSnx7JPxA7bUZ",
  "key10": "sygRnzUZMZytmCcdgBiz8AvEkhfTipPHRjmRwGGodJjJtmH8ad5RofLYUKc2nhSnF9XoX4zoNuJSCNSRuehJ8AM",
  "key11": "4pYZbR48uxcaDjrZ2qHT6xDkbUsc96nPZ4tqkUAaFDi3RkjeunMTcP66r1K173ESs2NYA2XviNutssTSMgG69811",
  "key12": "5Vt2ja1vByJs8R8NTVNiieaB9J2p8WwrELao5LbFNxKeqnYpeuCzTivZJPv1x2Vsp6BASCRTpsp84xqpcJLHtPTg",
  "key13": "5vZGppT43fzTkJGZD9kuExKa8o54K3eyEtbRFZPjLD3ksmEkYNoovhqSd3az2qQcSK55EHk3ks9UwUgXnmc6sz4L",
  "key14": "4eY7BALutVss4MLRUArp9AZVfCVna7ZhWedsSVxGUprHJLNh5bhBPq9TvavkUThQy5qTbXnge3oNUQjEqhUZhFQu",
  "key15": "2gRy5nXF86azeMEjqmYUf7YEjQAT8oWace4bSByfXurqFxQXxE4Dhdvkm3AHKdTaVLxZAVa3iVs9jYcGJH1GyBhd",
  "key16": "2NMbAjydeGhMJ9wvxyrWw1rwcAzv2XZVqu6jDa1eJVZvunR8iR1ug4FMY4SQN4eendQBMeJEcfwStmidqeXzHc47",
  "key17": "3ue8ZwLdx4Dv15WG3zEDtqYqW97Nti2N86f4ujDksp4pgm96cuVKo3WJpqtZqjtAs5v5KfJFwAMTwVSMd5h47ejc",
  "key18": "5aWXhbGAL8tfBwzgzLnyfc2xURxagfLDMfZrgKCfszvtiU3Pmyto2jB7EisMP36DSRsffjRY4GimeQJoHRBwtwgv",
  "key19": "2sanfAWBFTqDEs95xvwtprbNMuuuGZm9Zigr1pz57uWaNqWaVP3bT9XHT836PkHKi5jsTmwBCK2uSacjXKvZSnjs",
  "key20": "tyAzmBvaRBVvKvFiUQrDcQowtj2qXsapiBB7MtyfpAYkDqMK4J9xPXaG4maqNcwYWmFVrjE8fefYRv3SJjhGvN2",
  "key21": "5NWPjvS5ZDNHVa9sHD6jKyxipdvddNgFX2rjcVEopfrFTNUNxhfgYHq1hTgX7UeZByXnfPbKrqWiauhnQ5qv8eR",
  "key22": "4wj8jXQZ8gsYPkD3Atq2sXvX2pdsoBcsCAoB4JJeiaXEpNMcUbTwLezgoGBogXt8W7GN45uKJprZS1x2b4koFB5G",
  "key23": "4wvogeQvCgox7Z3f76NKVmGWiPj3TEQPkRVaBPErqAvYqLgTzngqcUJj3KXFFwAzb6XCYXWRRdhNRj5EHGkBqFRx",
  "key24": "4R6NbEp5bG5D6csWqaeS5oNuhecbWMuK63GeUrgqUWApoVExP42NMq8RN3NfYWecnY44FfqZzcgtSHZ2NhM5a6HB",
  "key25": "3Dusq1NbY5Dmqn7B3azbvtJR2MSncx2bu8w18tPWmX6zF5FAPBbk1YEDjzcZsk6nAL72bymDuWh5Vb5qNzYCbNen",
  "key26": "3F4gKUZmHGwHm2Yr8DDuMxELyYcuxNFFWSmUaXoPhY6qdWdm8US7tvFWuZ2tdNJrj8hMT6cX1LBLQBF6Pmn7jMXu",
  "key27": "2saNAuRQnpzEdZTSvA4hTMcBQgQ9ytBxyJgzi14mJh7S7gow6s4EV6n9nr4vScsu1Q2uNtzrjfKYG2hzAJos9czV",
  "key28": "5Naj9CBoePaR5Xt9v6VQZgeRF9r3ujLy3jSNatCU9ywzoZd6jVkJXN1KceSyK6R97pR5b3JRhXANaB6k1NLuKh6c",
  "key29": "2FyE3YfSAW4ojPq5kdifKim9yPSBL5FAkRqac1HPiqzwe8LwC8vvWGDZ1VMEAjh11Ne1CfRDiM2ynqDqqYN2Towc",
  "key30": "2xXL7tucLHQRn6L8miVng5yAig6U7o8J1ziNqc4UAdutSHybvTVGz6Aok2YszV7TTgrznyxRdBH2RzTSJAE5pQgE",
  "key31": "34U5abCrTakAo19sDvBVXrk1fhFKKmYjCU6sdF1Y5d9J5pW3UV1stugFmQB3YaDwKCCMhG7ZnpenB5sgJ5agvDrG",
  "key32": "59zdfUoozRuwSb2F4iVGBEHvJNEJ3R7wzPCuVjXXV9Y4gDwkNuBKJTJZsfyB78pnd48arpt2mLqTTGr7Jcmv5dH3",
  "key33": "4swzBCvXgtPpP3NHXcDqVmuaBubeDKWxxnAsmnSb6PmFuKjjdEPGZC6g1ZB1ViceMtAgydocoL4cb3Xr7xujAJky",
  "key34": "2qk7rsRnuBFB1RR6qkA9UWpPyZ3YGoR2iBtZKEJcVqeMUCQczZM97YRVBQ8FfDVrTX1MCBQr98bv6R8H1UBZ7LP4",
  "key35": "2KfhNLRbCTVzdNRrfj326S7ks9MWHnjqnw8AVMZiYU78PZGkcabYnRU3URCKxcCeNeLAdaZMHQJe89f4z4jUkBCQ",
  "key36": "22BxABcp4EoS8qfsq3CCoL5GjEMmuRZMfXJaCBH6Luti2bWAYHFGHthkTjsNq7RXnBq4P3bqPU2xnXC47HYtYMcV",
  "key37": "3scP6gQF9N2QpZt27ifXRjkHwDMWfEEtgJJbqVe3NZsFkVSzGYU3hGG3JGqtsTEaMHVcuGW6Fr6ejHpggNNXxMbD",
  "key38": "4RwMMPFovEkWAJq4mCFrRXDkvZyMSnyrwoiFNZgwJ286sT5LK8Hfw7oQkSTWr3G8kXe9Pu2U69zsMCEsa6J4YZ7Q",
  "key39": "vwBEtLXNCqVyFjwrkHNAjeqgymvxVJKbBGaUKxAutd136rYRsvK1KH1PFNqSMVUdjigY9LokMKctQCHZE3QUshf",
  "key40": "3DzAYB7jQ9d35SBuftTekvDM5Y1qgH2qW7hu4iRmcrDPUWZjdhTX3FU5DDThMW3F6ocvLACcwjb46PcjVWV2HXCD",
  "key41": "5sKcZz8oycS9UuNcAtWFNPai4YsQwZVhRszGT4cVeDnG8qDi7JRW9BoKAesZ2gxFxH913s46FKZNapbzzxj9ueEN"
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
