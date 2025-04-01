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
    "2xzYdKM7BjBEguwz5Wc6eVy9Nb39reFcL9H4csaZbvi8nopQewqEAyUYQF2FumYd9iFTSQY5w7etF3VuLfnQXnaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KkoXEZzbdcmfrzcMqchrx6nFxr2Ph8Xd7czfocyYCgVsHsR8XrSHpbcwQXnhTMMx3i8AyX2tm12HLrW7tF7JRW",
  "key1": "54ip1aUjRtoeJM2QRmz5rkLnNJv2pbSG1uJFFVBWS6BtkJ8Q43mzEpx49mpcJpT6dHugTcdwQWvhpLRPzmFEKyBX",
  "key2": "4kvK2uWmd8VwHVFHRJe1KDkzgY8wCQRuJqrt5w8PSksteoBBMjjMucSreVmpDZL9yrFE1p55Uqw9eYAEEh4azMDH",
  "key3": "3YTyTYwgLaacoy4a9mNujNQfS1UenDnBLnWVFXrxDKutU28W4G31fJcufpB28u9dWu2du3fuCABYUy86oadmSC3p",
  "key4": "2K12qph4wo3rV3NnKnZ91kxW21MwgjZ7T8eEuc4qPVjvQHYHbse8Ffx1GJH8GPVUuJZDLQPVBbHCkobu4vtagEUc",
  "key5": "3QoPXkVi1drMA27f9V9EceSMyRpHg64hXQ3HYHFBfCXr5cWmk7aSpqjSPNtMZum1gWCD5bG9bEJYf7MprzwwUoUy",
  "key6": "29jSxdo14sxHXEH6o1Exd9pcS8b7JUdyQ2U1ALvCWsvGq5UvguU6BYbnehDWqW2M1vHGTaLsY1Jcgrw6UQQrBsGR",
  "key7": "4dJi343LXLWLoZoqkbP9Tp1TdkWe7fgk1gmFhWVqyQaYkFEh6HG8nNSwEaUFr5ZWLaFzYbFATc35S9wPDiqxyYiB",
  "key8": "4iFdSqmDcGNcooJbJ6Fb672S7X3ktEhurDWGRr4wZeZxGKXGuaK5pH1uxKq2Qb2KD6883FiAuYkmRfg5UtQtZT38",
  "key9": "2cac49W2xXVb4GXfyck69F9mSE2XShGhA9nckZZqg4DXr2rzn39yD2n3JMfwuEFBy41SNpQaB3yfqKfrTLcgLWUW",
  "key10": "3NrT1RaJ21q83SvK1HafPg5t2YddQfjU8xyoN3BkAquYZzRGx1364Hr6q2Pf3Dj4WABQScrkYKq73wo1CwwpH31L",
  "key11": "XegHURSBPtAmfQ8b6gTyhtHCTy8f9kCp94WitMoKFyVasxqt5zXHUi2kgAgPabqajJ6J9SmCF2w8WNobEKdaQeS",
  "key12": "2jENeqfYAZm1pYoBi8boz1ftfqFNiHfePV1nGHQk3daiC3DWdUsaPq49oScV1nmLMmfQF5L3oHJEkjFJdcFNu6tF",
  "key13": "5VvU6u2aMFfitryhbELYkaH5qi1T88hLGASLvGR1MYQMChtoRiYcmRS7CfWGqd12sTBz1hNnhaEzU43jbfsPHuRf",
  "key14": "2kUsnvEvVU45QzuoDBx3qRaQSeBXJTocxrfsJtG7SmBrhTwLjwe4bm5BfW6rqL1k12KRrJHZqdUtLKM94kuoSFRQ",
  "key15": "Fr9QteqnifUoNDi7wTVRVxfLhN48zU4xDTRTGagAc5yYjzRx2XAK3syvk6SHSaUhEHJQvniMWZBAQnsSk6HEJ2u",
  "key16": "62h13R8zgYTZs3vSwzReRBQRCFAaiYASZgzWVEo4Ksd5M6A9LsuJFeYsTe56jg8zSRqPLz9PZ4dqdGWCPJGnuSST",
  "key17": "28V3v4377s6eDAYduQwtz5e5kkMZwHn5jyJFZK2ebivykZrpUsdhoAYgm7jfaJWQr6WMYjueGKPvFGo83BHC4WRX",
  "key18": "4s64BL1rq329CNHcXRFEgc3JLyfpWrUZ3Uth3nvszEhpxdkwofh1nseNtcM3uBeCf7ekriLQ6v7kG2Jf7DdAc1MQ",
  "key19": "75uGP5Hg4QBdsNKU36VzjbcNsnfDQ8bZGRbgDSMLS9GLZSQTNrviCn4T2i23o4F6vF2L4zFk2nd87FmW46ZBJA9",
  "key20": "5ktQ5iEzqydpVdbqiqcQnrgrsm8AhVP27SJuGqtxLheViXpu9Len7FzBKutyUr18o7G35XbUAkR7YLSqjTiaWQQn",
  "key21": "3CeZFPeV9UUpsgwwFDP82BP2UWAzdht6NzRHv7PsHkniFJT2cfkdGjtfJuxTKn3Uyat8rHSrJcT1EJmbkEQ4Kkm9",
  "key22": "2vKbmeEHfd685CaVG1DcBhgzpcniqNpgX2KKm4nvn6b6joyDJTJ5qB154VGcECP9dfCeh33nM3rM4fztDEpWnP1U",
  "key23": "66y3YW1PLnKqPbZJbMDBo91PMZeitCJESzuXfsG9VFJb3pEaETSxo8Zb8ysrhMG419LBJmhRd2CMKWgd18ybsdNJ",
  "key24": "2quk21wbXaTDeSEmaM9M8d3uk5271viFwHELmQUFf6vf2xyyQeRaQMv56jbkA2H7NTCesrmUAjeDGadR7R49KgME",
  "key25": "3e75JxSJzbheMLsPNMArCySRKfxMDtvKw4E8rHvxbabmU8W84amMSeDdBi3QFTDdh2MAvjHM11mGoG7k81LfJmUT",
  "key26": "4fvwNrehpZYd4gXaaGfn3VsbwGfdQ3S5ytYgTngwQkqtGpQmHkgFvRExdDzYuPG58RNxti5RD3qAB8pRjnoR75eP",
  "key27": "x81KymstfuSa1nFub7G2fapo3dAHsc4xjAeZqQkx7MYUAxAPMF2K5C8Fw5ZRZZwf9wM44pWsupLdzbcUcH3NS7L",
  "key28": "gZ8p81cHm4pY7Bpg7c3TJKNmCbpX3t8WBGemFBASe6mbR9LK47b8tcg4ZEg8LafcvACSePhhWbCoTiHe2gTo1yV",
  "key29": "2ckxTZLEnsKXXKpxCPdAWJQMP6aqwgdKN4RrrS1duJCNiuqWXuLSnkFTxXhumgNKpWUdoUg8bHL2kkUW3cA51nMc",
  "key30": "4bV7aDe8it9wo9nz5WADsgPDZhcvTSQnAkdT9VaNHaeKa9GC5EjTCB7B7x9KDV3DvkVZ9fMZoTqXDGQehHmhzV2W",
  "key31": "5EhEjjK19syLRQUyQcCwmSXJcuZnisLcWPLVGXSq6zsSErZq51b2uLs33w4BLHEke8RxczA4mP8nsuUBzxttgMbU",
  "key32": "4WWV2j7uL899ZKCRo7BjTn73Ghq6fesjRfUtb9FmAQGzWV9Po8sgVPYSNNUzWBy8bRSXEkGaVxz25tVEpr6q5gFB",
  "key33": "5Uvb1L7qXsufRVcZ8TzpdPhfiCKFGWYCt5efuDgL61U9mdUutCsYBk1nH44zduKj44fq4oMPyBPbQjCf2EgjWeT1",
  "key34": "49p1ySsSPwJD2UFVZzR3Vqcu2fkQ1GWY8V8YwSsCytYhT8pVFMVLD78vGo5vW4ihQRmHARVyZSwVw9KLxqVj4Di7",
  "key35": "2WA5EcMF5TYXvoKne5vAQ88YL1Y2n7V5ZQmfx1YdBfzUECurwve9v6Nxt8vvLTZdNZ56jtxPtCjcujba96BySx9W",
  "key36": "5Z2bgL6cW2XcV7Jq4kkPgJdskEq8biQ3bXHZypXEM2odiTTTs6ppWu1Fcw5bJjrn1Jso7m743VcBSTQDupqi6jb6",
  "key37": "icuFx88uiHpn37DGZHJ1EahMWYRbrkNdKiAR1UUANzehdozbHc8nmDcsjBFVMBYmhNfiQWpM9FgXbCZuNaoR4rs",
  "key38": "2Mo6KbfPcwgzTKbLsQWFBT5W9C5cA2zXeGbE9EMGFKREdpG1hwCmyetgq6eRbryd9jRXJuegZ3BzABL1m2mCg3pv",
  "key39": "2BfAL93AWS3EFvxGbePFyFXWh6Cf1HSJAo9rTVn7ZvZ91pUt4xx17D9FUfjAWqsckPjQwH6wuBnt7DCNL86yQgNA",
  "key40": "5CqkT9V9hXoe8eaK3RZMY1QvxPciKT3DdS2u7KbFJGTvd2Jui8DyqfEokcq2dan5rBbHNLui2PAkj32y4nnAFyoj",
  "key41": "Mb4m42mYapdaRepretqik2t35jSsv98YSuQJp1qmdpkGBVk7RZVarjGH7SEc7YBXoJb3JtoX8vj2Tjmt1S5kq3c",
  "key42": "3fNmsMek2KTACQaMkauKdz5wgtDAWPdhRkpTFtxv1jnfxgYF6Jef31bunuVyBeU6daXWCKgq4e4jWWT72k2FSC5C",
  "key43": "3uVTWZJ6iHHXsp7vwH2gEeEiXM7W5qkbdpwhzaDCALdhJawfpULwJiPtega3anJ6GEkY9NUEqdQE5Ai5dZWQvbim",
  "key44": "5BkGFizLR23nVjiPgucdveHxYNUHxbA7D8LUP6geXY91oBZdeg4DQzdyGowDy9SorwqLhxMhbWsZJCp3NsQbe2hh"
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
