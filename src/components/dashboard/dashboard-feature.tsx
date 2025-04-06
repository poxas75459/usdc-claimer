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
    "3xLXWtB3JMybL9xfNL3nnBkM66JbSsR84vKXrqWpedSj72kRabxB2rA5YnJprQH6KjYi4iWFgG9AbBXga86yLsEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZiEPTY5yCuDJEVZp6q6tYeWq8mKPD7WZm2ZZxipinSh2m5Jd4Gs6gNUDMmJTfLtzsrFFs9ErLZe8AaXKXkCgCp",
  "key1": "3xfuFR3zh3ip4ScsiCHdnTVs5ZQ6TMbZp9MRPLMLc8yvofHi24oT8euzZNQ4sVVLAvrmLPqoMzC5Epy1dSXAVZyZ",
  "key2": "2hb3N2xkN1obrPi8swC6qDLLyakb8Q5KMe7VDWLnUrKm4G4MRT46jZGjyzJhy8zHMgJpVT4i2FFT6E6aL5y3xJaA",
  "key3": "2EPisrhMkbGNZGambwKBXRJEpFaMiJSWqxQ6svokj4kLscTi3mFAXMxpZfvVKKamTQvcpHGZPpHj7crCVeZWo8dV",
  "key4": "2eytfptunpsyUXHk1xmtRwstAP8PvxQbQb14mvqkAvLThgm39uH7rWs8567sWgkZjUyijDaaJT2EcB5dwAsDo3ma",
  "key5": "3VBm9jiasczvMK3qcy3f5ZDCq49XKXJjjHqdttmVP28XLcdrXLvCgcst3WkSS1MCF46KVCoYSm89q46da5wghjn1",
  "key6": "3BNNKNhypcj2LmeJEDNnjnJDLuUwWDaPuCBtrbrbz9zwL2G3QPa6zQEbv9DsaaP5HWfpFYBntt6FTN1PfzYZUPsQ",
  "key7": "2PyenhtSMtLTKjDsfoTaMNiTjTnknjoZgDAuJmpGpD19ffxT9eFsSRfdfMSyQMiVcPmnEf6vByfWZo1t1L9sjkvi",
  "key8": "4TBxy8F7e6anE18VPPTfkd4rdZYSjv8R1sTHahLE7tM5b7PDvJy41mh6fVm1s8P2ZpiNjCC5NRbeVnbG2AjHzheF",
  "key9": "i4nNK4GuNu1wVLTdz73Bs3bThaJhPfWRNGv4xpNVM3m4qTuLCzixMe8SrE5wM7sbHYhxnRR84U7ProxgDUt9tuv",
  "key10": "218neT6tL7cSJ7kTCo7EHX4nJrchPmY2mcckSrTbtqMj5XxxjZA1eev2xMUGahiMQfwTVj6VGEMBfsvFmd8ng2eM",
  "key11": "h651XM3f5jKWCD66rbqmVKgEaQ2pmF69qA6wmFk6MdH148GB3iWHc7mJffqBRGtVqbJLccsesLSUgRdK8dgu14L",
  "key12": "4i7nFyZPWt5KncbSci1chaeQHYEp5QYuEqciSvrCsWhaaXMfjY6aoLWWAgKqJtWe62C1tK1SDokYBVXsxD3rKCAh",
  "key13": "3WmpAZ3uTGrTvqHjQyJjHXXgzzE8DyqkeDYveXqmJpWJAGFHdmdneryT8gRhsa7oqpxCNYa5XSLwGFtG9Z8juha",
  "key14": "3mPzTnZsQAzKzaevVXcJaY4FfSpJ8vJxf4mLKqQXTTZZsYNsNdZtrV8LcicRdv46ZysAn6Y8u98xnsr2hWCv1bq9",
  "key15": "3ie6Q8vjoDQcJmDLtW4djmukizALhQXkE2QN66eSGji7P4sUyt8ZCAPCEC7JAwVU5idzH4V3tHn7krQw2Cd25fDT",
  "key16": "5CuBLzwNr8xcAJLNCHrTtB1V7QNgAszv3we73NRhtybjE6AqH5VrXxdj73BK1cEVJ7NUTZ5mMwJLRJ5eXm6fQpjQ",
  "key17": "2fhjgjSUBUM1X1TbRGmzTRpz5qqszkPRhRZDWcb62UUYX4VWgYHDT6anzeEPuBb8xYmuw1W1s11RfU1PxgrC72Ch",
  "key18": "4GG7tWDe5YfTep7BD6GarEtgEJYe9jwtgB8q9CvUW6NQYYx4JzAhBdDQyPY53k68HK9aVDzYzaZeNDBrcKTDbJNV",
  "key19": "47CEDR73NoJq5S3FZpoKitVnBGc6a54uZL3jzpQaBu1N4t6Sj3zwM4HkjnSEkVKKC3WYuT3fMcjcqHsy66jtsEjc",
  "key20": "3tdX4dJEtUeyp7VZTnaZucL9uBkkbTNVToAYjeGQBfobbHGEAWstpnW3upPXpg8gHT5EiB6aev13GmL4xLa3SrRz",
  "key21": "3yDVnE61opkt6atDT2SvriKdsKeRvz5SJHt27VLFSjq8k8pu9foyi73Yf1sqVsAaG8NkJCVeABWbGSd4ntXTQ8JS",
  "key22": "2DiZNHBxceVA7YFv4qWTCCvmJgCPPLMuySzVYddQ4ehgnrv3Pej6kLqzQBczTZoqVTnjMvug2nAWRBZGnCd32ueT",
  "key23": "5GcG5fRwVVH8eTan3Ghxfi4uPqeg2jEPV6JRgsNhCteMJ7VnMATWM6rMUADvFXP5T9KEoeMGfEZH9CZ7RVm6JUVy",
  "key24": "3EebmoKHEe2gd9YfyYpHtKWfNoaqn4WEzbn8T9LTGTjr1CUcVxSR3PnHqWSu5jmjRD6XHSwcSFPKr7McSpgdcR1Q",
  "key25": "56xMY5udskbX8WzDDjVQ9j7rpuNpReEvESAhXB29mkrU9xo6Kf44Djnzj1V1tTdPLdr6BxVfdE2YaSgTXK3bhfr7",
  "key26": "2cc7i5hB9HDawKcSrzMrYodcXfYXBqxEr2bAJHzZfzZdEveAZrhd335ozKB2BzXzPwKYbf3mAy6hHGVeKVzK6fXU",
  "key27": "55wFi8ESam2KZVwsfG9aCwkuyrLiBRMzn9ozz4ciRV8SG7AkCU2RpgRUy1bbgN5pMCY6B6wnJkSGaWDmWmXvsbYk",
  "key28": "3CgRab3RrHEwMcrUhEwbvbHsD5zaK2xxKVJFdiWmD6kzAzvqjcGjjdFHDXTZRQSEWAAmrZuRas1hLqz26QeoTe1B",
  "key29": "5pXzFXELMNkigZWTqmsZ3tTJtjkbFe43BmjY1fGDPtfSiky5N3KA3aLVzSpCVngMCRY3CqZ2EGbMxEbwy7pvrrme",
  "key30": "4MFVTW84t9XvtFbgoUy3YoPDnzAYvPCftGuKVLWfuTqbxSEFvUQvwu6WTd9ebb1f2rBCKNLY5tKvHBXbbCTwKeAn",
  "key31": "4E7c6ww1uxzCgNAcBZq2FUt8ixjzzjEFKvvrikD2eWkmnSnwhJ3aTANsv4ASHr97ds3sU8Nj42aTPkL1qQLQzbM",
  "key32": "32qisneK7RHwr2jGCynprs3rCarr3ZJjShrfhQ6vJ2SyEPqasmjrfLJDE8TojVhhcwuuqpbJqkvkQGQBahg9bovT",
  "key33": "5wtFACJYkSPdVi84ueVNS69GtVKTmuJS2KFrmB2ioUfKVPJsJbcwdpeGF8CgitRPAK1DL3sphTraeg29q9cT3CrN",
  "key34": "shAqUbtF9fMNT6vaG62yxSxMcy4HSMWYEMzYnFQTspjKL3ZeRQzf4eXFDeUweT9QKx2YJs8LNquX5sPuoxPKgz6",
  "key35": "5DNceJoWgMAjBMjeVEK4oZ7W1h4C4xEx8PQ7NnhfG4a9vQW4Nx8iAck4wVJiAbzkWPuYxC3ajCqsj42MP582CjsN",
  "key36": "3Qh8SjSE7gUgMAkcveVYumw3dJ2rhEwCmhGCYh3TDw6GuMzaqFgVu7wCZsX43fimAXvNGrnbehcPiHWNeN8x52Dc",
  "key37": "2YRSrahuD87khCNe6kjTDed39LZCqG3rLCwy43DXzM6Pjuh1DMP1fnLaXmQLMzKf7HKnAZPDUkL19d6yVrxAjdK7",
  "key38": "2zwuFG1QkFh3qW9HsMHbP6tK3DVKWaLBSku5JnGC5Y4R7VDsfnzWwJnzcv25FpsNY3qwBz667rhLYH7b8RE9Ffpi",
  "key39": "5VRS2jGueybrRUFfNgDCda24BLREQ851Xpi865PVt9TsRwmY8YaWLdyBZTyixYaVpCUPntqo6ZhfiyQSMpaAXWP2",
  "key40": "2ywdWTi6udZdfGojZ4xkiXLAnHWcUunxJBVtSFEncXdRQaYSFwzUJH78f9z6xAwRsVaGxvF4HRMhqLyR8jL366Wf",
  "key41": "UK3sCVVcMPSEEbKszrR7bPSQWaavYLp45kV2hriU7uEajzo6vt8YbjJgpsi8QiVRRAC1FT2rmJrTSyeozJBDfC5",
  "key42": "2AczshBh2bxNbtV19ooHNaygmqe5YjKayHzL4tuPSc3pKxVb4XfeoezpMZ1c5KtH3kVSjrCZdePePctgnRtfLrWo",
  "key43": "5Y2NmfYjz9YYUgsF3puDXjxomT152TCPDar1ZaWDKUuQDwUhLA76Ttp7z7Qw3kYSLRWXRif2bR9B2Upivvhnmc1u",
  "key44": "28NzdA1Lq5VnauvDa2zxE9VpsNqRsC5SsACYPXkoa6GywKHbGpj6adUCTSY4Vc7fmLMHAY6mRCRM12EvLNwYUDiJ",
  "key45": "3utpGS3GqDgPMxuZsEDAEWEMtvxumcYk5EuALkwoMGf7c1euXLFX5bPF68qXeXH4BvBeNC5vjuE67Eyi6Kh9uMe7",
  "key46": "3M4qv4hquETTd2mbYvo6SHj4ZGCXVpBSVmAE1uGj3HF9izPw5fL7nVuEx7AoXuDwGAxB79fPpKzsNFM5SWDEFLGm",
  "key47": "3oKp1oMh2B41zVZwsn1uRkrhgbxWkzssmuwdaQsc1QrXqQGoXneboK9YrPLsQiGPdsZBj9tC4dJZeoWFxtNm68zA"
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
