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
    "3cnSnXUsM6EEXkkspHy27RYh2kc55bpvUQkacNEW61RkspDejq5QEk46g5co9aLciqXHGiy23uN71cwuXactPoEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQzqXoTrPZKRp7Y5CbCLVs7tZTVQsp4q9NPg4EhrPLjptPs4jcyzXssbkfqJPVqFyqV8EifkHmhjYDgi2iH5KNg",
  "key1": "54hcKKGYf6mDaxZ3XfXktoc3GATStp74pcb124p3yFcPetWTXR3cUvfu5y1N1RzuwYoQCikQjUYMQedKTGrtHWRx",
  "key2": "4RqJkPXhDYLpuEYEnm1Fd7NQ39rNdthzuThCwopGniXuRzyzSQtgbQUiF2ChBJphGoF2fPno9ntWq8SRcosCNu45",
  "key3": "4tD4nobUSJyctaYhkHyzDGDj2GHyKkNBX3UmRTSBwvJgSoXKHS5mMGePKDYpcEAfaJ5FMabtzPVi1Wo2b6yHiKY",
  "key4": "59irsJpUmsmKVRuoyxmsYLG49oMnQpW9Q5gMALNf7JwJNv5PkDmNMNLhVJrHrCKhUTFsgHwNuNEiQhsZwaj91RWv",
  "key5": "DxarbqTzZXmdjLe95jdbyfc7aAWyv6oUPKUeRzPE8uHHN2vWa3qy6mRR24HDCGcWpuerWPFZnSb1qK4Bed8NnED",
  "key6": "3bf11oCpcSiwgwgZPE3UvHcs6ZM5VtTR4cMbZdAJmhENZAyanewsak2EXeC3BAi12jBMGHqNuhHBsyabobV7ETuY",
  "key7": "4YtjJwMvH4ppKbV2KMd9SqHR2315seFANtLAwoYywaNbqrnPt5cx6vChFX2u97tiuXrko16kSxnensX1GqWEoDSV",
  "key8": "nsV38jTuM7rRz36zakCt57ufCyB5MhfjWvgyKEoLRqtV75ZFGuRFrFaf3UKV9RUohZBUBFfi9h8TJNtgmQCnxbc",
  "key9": "5AixuXGndPn6fDitHCTZXPgQhMsNgioAgAcxuKyAeTeu6SwySrybVe4JNRg9vpvNUJM7zKusMP3KKChYc8WfwJf8",
  "key10": "5mFRb21KPCAjq2a35crtg4AY39MztmLVMddjWtAMjzRcikyhvxiuUNkq4DTcb8ceYZCFcaKEw1TfX43AmYu19zBJ",
  "key11": "CV3SAuiXXfEWRtRKzHAcLFx9j1SgfPdzFwTk2CirAgB8q59KuMeunswKvqut3XzX14qMerv3Fb6vBM2FvkAkjkD",
  "key12": "GhMf7y2Hh4FkBh5c84WGsf8ARbpkEs3nz8uZt9XNGyAyMHgofMqFNFoRFWr4enBheKyo6dZqd58RpaHp76FMYVb",
  "key13": "pdVuRrSfryVbqrHZhokacTJWsjgDk44NYS5Hj5Kamjh4jxzp5ErZyCCHg2eC8D4CgGoxMtzZG5i3sBTz84YVrME",
  "key14": "stESoqajxxjui2joUQwbyNCqXbSP912iTaRXZww3GcM2DxUcUoWckxQrkKoMwU7b9Bg4upmK3EPyqhfYcjM5azH",
  "key15": "3e3myesH5kvM8kKsGUodhikfCeLD6xbUnUigd7cTM9933K8GDaB2ZhaAKQzUcmHdGCCquJZdqrRZGSKqn89XwYZB",
  "key16": "3W2AacM3PjGDT4xsvUtyRVmSz2rjaRqmVRqeSSdLczVPVZeKxsy5cBKCtRFWXHaviF84i2yrpMYZKCsFvzoqS3Rf",
  "key17": "7pHcCBD9E1YxpUnokBYp1ncrEbK3YUhBwBtb3Zw6PhXei9xnTJa7fTwbCzmSxYPedSgoLos5YN8FC3K6sc2vQPm",
  "key18": "xWBN1rf2v6WqxmabLk5oc3bTVVdEiPJEznMYbtwTkC5FX1bZyM6Tkk5d1Ku7ffsNXuT6ZXMcCPzB1fn29vFfi2J",
  "key19": "r9PE4ys3vwGv3fHTg8VWMn5e89ow8WgaZvaGYi1cySHNgXdy6yozxfrN2BpMMtwpGTmx6nCZBcDX2XpNGEhnZHi",
  "key20": "XfxKitYkcqqctbBh8wANR8omkyMb7yTRdKvDW4QiLSWu6AL9jcFHNQrYHnwpfUbV7kB25BwBB6wrjn8jPBi3seJ",
  "key21": "2HHzXnawBKtVcPKpRnZ9PYYFYvTmeQkiNfdG5UK16F1bi5NPtzHhG7oK2K6SgEoGyWeo7Lqdq3AhJg6x8majD21i",
  "key22": "3mg2BNKQ8fuBi6GK55qDF9Yt3uiWcb38w6WpHTHUQyCyvY5dWBExM1rSZiDsFw3uYuWzekMFjL9qQeo1dhJAoErf",
  "key23": "3yknjXEeAru8jDzAyTopQyZU8bUFAAkwE7cxds9eMped6zJTffLuSTi8DsbRUpibSuWwxmMK3sUwh4GbdBWwdZoW",
  "key24": "2ot3rsNPFtTNTtyMU66GuPaZzJi9pRgVhJkwPbqy59BekK6c6FmEtkhY4L6xJH8souGn2uu1HpwxXbg43MFD9eQw",
  "key25": "4tD2Hb35LYdw6e74gw3iWD7KKpc8YCCn6whuJUAmSdxBsxFyhesNqXKY8kqHUnYr12vpfkHRSm7CB17nYEdZx4de",
  "key26": "HmYVYDqWFhHtbCy7grHBwiQDqyUdwVs2nM4r8Y68MAG2Qg1jX5rMubccBQrV5T2rEtUmRw8hZEHmenoEdtscNRW",
  "key27": "4LYJKWCuxXZC3RuaLm4CoAJq7X7y53mpMt6bu9kxfDPEjSzd1NPJG98eKaf4wixATS1BswMRi2KZ1JZymbhU9xWg",
  "key28": "2MbXHYxXj1fKLKJpTnvL1AmJKLp4DG6YTiqCzYWHuzvRbtmdvPxdU5cbYGBLdEBGRvrjy3en4S8DXeeVC7L3sugU",
  "key29": "2J8J9UiMgchvMNWeR4cg1sq8QTBizJtCp66UwU198Gk1F3XbgjTn8vrh6LaP9uzUAsUdWxFxFfHdvZTivswyk7kT",
  "key30": "2Bymfrv9reA4T1DM2zyhsvfHFsWcNALTCt6mnnspoYCca4sBPZqaL21xzevhJrrH3cL5rBNuq9XGVkqAsP8ZNoaX",
  "key31": "3MhRNRuQ79EMYQyQazYxXrY5wdiK6c7LdU1LUANJ1z5uqcCxnTzARpJvx4zJdFD7RsLUPQs461PdsQHoe6EtPpG5",
  "key32": "2rydxAwxo5N44Me2bkJTrqtjAqYHhtKLD8gFsKqc8ZF3U7ybRzoLTwaPF4zaZRnZKE8X6JuMRJNBVMCffHDNku3K",
  "key33": "3XuX5x5ccnkLspaqHw3ZM79yyZHWoTYQpBFJb7zTPhmmdj4XG3Ufm4JtZVzeeP76Cqh1jVMSvsVWtShjpbzMV9Sf",
  "key34": "3h3bCrknMyhseNBRHUJkuSU8tmYrKE5BMyY3o3TxN3yqvzCHdvHUvo7JbspB5gBQJFsPXVM8WBpuofxHttBBj2Wo",
  "key35": "29tkQxHVWVzQgrsXEKm8Xr7zUTwsW11cRYfRH79MTJqvHmG3T6yuKmzbJmkpdod6TCDm9cBjB3qqkex86cy31mME",
  "key36": "zHtD5V8E4hpajUQXXawZgtpKm9dj2R5YfkwWLWSWfrHtsTwwLM96fxZfFoqJVpALmPifYikfpz9Ut9dAgMrpvLq",
  "key37": "5rCdVNWYroQsmobaGbAJsC32UrDRG2u3QV91DX25vmyXmS54KYREjiHV5u5BgNmDojZNRv7mde9ZexAcLzvSrVqP",
  "key38": "26jhuycV6DP5jRpnhnqKCSUoXdPGFp2SRNFbBr4otfBrNuGaVpnUM7StiuKyuvX9jKJ61S1WeonyqpGsZgTxW5NK"
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
