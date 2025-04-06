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
    "3D1zSShjZG8fDKLv3Z9T2N3Q3P8s76Ax88b5fFMFLbxCbFBVQwDdsS6FkehaQ5XVTdYRZUGrWo4ExRDw87Bz3XwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cV4evJmBhzrokCPs3ZJcV4qxP4jQWuHXQ4DBp5gFUc3Hxqxjo7vsPVUvNSRYCz8C4MeowPAYwnfCrkASmX7LFr1",
  "key1": "42ZCWm7L6yXvpAnetZoZny35a8LZLjCQjrZPSG8kMaKXz9fqU3a8diM5cJPq43zhXag7Y3M3RXrSCavDCgrBPvVX",
  "key2": "4oDTiWsNN4BFeDWR8C1zKSEbdVeDiTawEVjizSeL2fanG1otuYMBHqVna2cpdBZHFChiu73c3YomhZPX6ti1btUC",
  "key3": "42QLh2oZXSHP3LUGwE9nGQeLoWHwvWLj8EsV7WTuuJSZfQLv4ShM7smzJ77tid2LmNhnUV89jFfwSdVYERa8R8oP",
  "key4": "2AQz4gvYCgzpfn9cRhVNWFq4UenAuY4NqohAvLZYZdezmNLtXpNj532iDsBEGohuzjKtHiXGiMyRFQDizdwE3S9i",
  "key5": "4kuCDPbZmNENMGXA7Fsa8SE38oEjhkTSua111EESP3eBZwaDdLcMgG2Ro6hHAy3FR45ft4EZFq77ETCaum2b23vk",
  "key6": "4c5Q45AUogySGFoQo6CQKikB3RUxpVWTAkvJPstkxzhVV967nbvM7AfB6exSEuwaFzCKnyK2WMpApMwdL5576vrC",
  "key7": "2o6SvEyfaugvxMUEKJxtnA5doQvSaVCjv7H4GA1i8TvQNF28xvaX3ZwWZwUD5EqJfFPJ59tx7wWNsF9AA3ADt39D",
  "key8": "5kQZdF86SfTvcy8SSoW6kHhn5gndL37wZorHoySKQUri4aQVWdWLEJ2oVtmGp3FSrGb61JuEd3R3zriUNdAfhLvg",
  "key9": "2jc5EPukorSV961jK7fv8VVmScgK2TvbxHMQFqsX2r23Ti8wSc3GbDVSvCEMsYaprVENuAfGPraMYgZic4zFVtc7",
  "key10": "2ryyzVxXxEy9xtcCc4ogN5nqcZFciwd2iDJLNpUtJQUCTeDEsRZCiibT2nGMt14JAt71v9sfbCZbQkEwY96uPppB",
  "key11": "2sfcnCeVN4oN7W6H7xkVEVw5jKsRGNzjydyGCLFUKmFK4rPc1yQRWRtcu3Z6y1Mm4q1kLzCdsAikvkSLKLwsEioc",
  "key12": "5NS3Vxz9TGW5FbG6tcuDNefeAYLfHWDL3p5NgB7knJS6ZKfY1U4NkrZPb1oizuVwpnneFdWB9iJjnq7Rq3YMXQJ3",
  "key13": "i3qFGoZXL8ErFWqGpLtfHVV8mncu5kDPDtTq2M3VY8zX9391Nw5bkoowdFwzKeNh85udDZytWzeWnenG4uo7Rd6",
  "key14": "xxnMBfY25zDyzyjAMNHmsrdJnvZXavtTacCDZVscRT3cKzTLtyFRRJoBYt6sxCUQ4xxSvMJhdG63xg8d5xpq8y8",
  "key15": "4P3y1tHex56AsBQHiFseW5jrzm3RYmUQosMSwVFXNvqTs9G9cayAGbCmqqxzi2YWU17eKdGnDXxC4JTmageyMzLv",
  "key16": "4mNguqD6X4Pm4cqWqv3t3P7pWi5pW3pFS7bG6x2iU3uLdTcS13odcBApsVn2hiEkXxiuNFt4JwAKAAL4mPPvNb4o",
  "key17": "5P3QKoghQb9JEgs7UF72WS2MgjKNXv3FW7dq3byBXhAVoEiZGfBBmzAKjRjCbptfhkRSy4xortPE6nNRuojPaNzj",
  "key18": "5hkKdX8nr5MbMCuju3dQm2vZg7Qbmzi4vJCSE6csonufGToDv2AHgDkKNdv1pevdu3qToxdoXKnKLGipEUUcao5",
  "key19": "348U6exz7pekhwJh7RWPyziMEoWtnPPhrMeeRpQKTjvxwWSNTgap2fnyqQeouSUb8ZDHGwcFJbLNLBK788afzd5v",
  "key20": "znZSxMmHGVVsuNQ2okN5x1M1nAW9G6jkmtyHLpXKvYTuqQsECiq5PAK6yadn1oYH1TaJc1wppHNTVn3o7tg6cxU",
  "key21": "4dLiZZJ7sEjTUsYLy2nXzJ2S6KJWRs1bCVJ9v1hqe923LcF8Ek8AzW2BGVYJfUQc8bibSmkLp5GiGmPLgQkDNcJ2",
  "key22": "4DLwAK3wTktbdw8AtYMF5AP5X8aMjraQAn2qLbkTG8r7sH17HE7pn2a3c1NUWybjXd6pK2sDZj48KSeW7FjHeuxr",
  "key23": "2zsMwpp4pkWU7Jn3J29LMcxAzY1pmTimYLoiAdi7EVp3tpEFdov5LUdf8GLY7JQ27KKvUM4kcrQBDdtE2ydJudqa",
  "key24": "43y29GNZ4o2V7fiDXDTtQedyRBqgQSdhspXBp6jPHn1RnMDFTdMuST4pNougyCJ1sXhEug7fatotwtsVegk8HwnR",
  "key25": "39QQFrioJ1pYtaoBFBu1ffbnVAp4ZYJ2n6xHuWgtoq1w3KeLdmkcAXPZBcEF7Pb69BqEPhY2WnZZZAutNSajE2Hb",
  "key26": "4imQ6AcWTJiyK5drAG5EtSXoxNZaWkH4VZmGVd5kVKyizcbBp5vDnA78U3KfwCsiPabg6AREwWkWXByYjgNqcBiD",
  "key27": "NKjzNDdrAatwRbdUjwPgSgwLekmwRFGRV9dXghWbAkHh3wYehQnbHw5Ws4QsDa8HVutCgnZQ7LEwyf2ddx4tpcu",
  "key28": "5Dwu7is1zpndZ3pa59AjiwXRx3wc2H6EGn63EdkMPs3VTsVfoATwFndjspXCSDPnBCLKqsQTXxdAeJowzbapm7FM",
  "key29": "328yHxH95XtG51wn6iGjfgTg7ZpLZC2GiHPYkZrpJCKTDNgHtS9Rs3MYEp8uWgZdaH8gWEFcG5Z4nQqL8LLjSvCv",
  "key30": "5WMXgQqTLDP9AtPaL94XkNVfDkvFwE4Xr69zxkai8F75BuEuEqmTk4PZNRkVgjJz3N9i6RKQaJobD9qwPoxQENZ8",
  "key31": "2WWxKB7sejRGa5GmDq8FSMFc5KuZyJrop9kuRWsoTs3LzXmF7WvQZBg8N1rmEL954cjK1teAEkkXgQgG13RM1mhj",
  "key32": "4aFy69XzEFesv7HroKC6TdPwpsHFLmMSZght1hb3YEsVnNEP6kTbGBnkaQTHVttJszdM9TdBiHkAjefhNyrN6cj5",
  "key33": "2aehPhpfdEP3RyZ9tPC6HyvALB3xKRbh4gHmkWVjDv8V62UqtDYL9i3XPxFSdWv8ZSTSordqpNRHMcqRyZEAspf6",
  "key34": "oW6y9YtgK4VdvBob1C6S7RwZxjKkJ9UwCM9mZ748QBra5wfnfpaDGhwVAmP7pea91oBaavAYV2jjmLBzgmyLGWz",
  "key35": "4hzogw7cTHjxCg1L1ETgKgkqvgMPywf547LkxxTyZYorRSavHNb2qDdRtjN4U66N9nsVhXGW61FvLk5FjF1wQkyE",
  "key36": "5VNCqn4D7V8eScwacxYHzcyiw2U2pwqkJR82rD5NbXmKXabuFX181qFdzFZmoFadJt7yTEh5dmDSe2XqxBKRJDoq",
  "key37": "pQPbnHp6JWiXCrict47jdfzNDc6jx4QxBDZbSh4mkCaBV4mtNmHwxN7TGHCwTvpSCcrYsRBs1awwSuxhKNziMo4",
  "key38": "3MNQdyCEPQf9CUemuEUec5Jvw7SbAQsFg5f3L8vfD1XyafTteBduyg3qjH3r5VEGtFqBt1n84ktHFUSJAXo4g9eg",
  "key39": "4mFKhj6H2oBUUsduHD3gPCHGT4GvhPVivf968u1q8Xsa2hXkCnaDttUUF4mKuV3KJKGPm6foXtiuWG81bTrteeaT",
  "key40": "3DW35tkPLXALJpRpWnwgTfT9jx8d8SG8euDRdSCYTtWWwLExS1qWQNksih3yLZ3DsunFNgswVqH9Liw6EcfRidwJ"
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
