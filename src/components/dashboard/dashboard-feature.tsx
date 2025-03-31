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
    "4h7UvmNFsRZzN22vQ3Po4K9ZbaKo6LLLfjHeKpAXTmtqKLEWUUua8q9PE1GjjWdS3tPvZ1Nkqanp4TKYopeBMpFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jqBp4Pq4vMZaYKJKdpJ9ArxAYpnBmMoqYVzuaNEVvF1b7MjK5JLT4TgpoJvzof54GR97UpsFTCxWVTPz7ifDuSy",
  "key1": "5HyrsMYxs5JMvSx7HuFhMaGHdNCUUEn5vtfXtaxLnVLQN278dp8nZsEsS89rBseHfXPmc73J2WDM8kQEcHz4ZHFD",
  "key2": "ntTuBRT56qNaErn3qbbNYXmUPxG6LRD3SiQzn9DY5EwjT4cMV52jQaxTmeG4pthd7JayeaWfjmJTLF8VoYojKr1",
  "key3": "54w1MzcU9sBf8iYHDJRAb6FcikjhBfveY1wkm6nPmpSr8NGahmqPNcEGko9wUVgwp73f79efSA47NL5As4ebGSa4",
  "key4": "23hLt568PuuQufu6ZoNLug6iwsJY2uKQgRoecRxzBnDMGGtkwMFTksDgbmYpHpm1u9mvDhK4ApxSjs9MZak63Cip",
  "key5": "2oSXF8Xv93NosTu7aKGjdGrHTakidqj8Qabt7FYstMNgUUa6LHF2DRFyJUFmvGeJ85nyV4Ch4q7jiqkTXnDUdesY",
  "key6": "4a5kW5rHKFoqXrdHSPkTQTyyDRrRkiiN1qwtoNcxHnwf1L9HMPFbsqgFXGxmd3G1QJtvi5U5N2PLdEP44oxCV5cf",
  "key7": "3mM3pbB2kRtnhQpcjF8VpJHM1iDp5FTkPWPaxe5XiuBsYZ72DjV1e3ApXWkgJKfZhm5gyeztDcFTiA37f6cZmWfW",
  "key8": "2XADPFYJh4ECPNdU1o6aSbjumJJirav62QApRvb6MAda9A6iCYd7yLuCDcoPpyVeU92mVVzgiGTXjSedjHAuc7nk",
  "key9": "3WGTdmeTuukSfknQsdMJGCPm8CbwLQXTTLccyeXaKxTcARm8FvG5gL7zVihkmg4f5PKJfiFf5YPMKxrbj5p4dgrs",
  "key10": "2Q7VSCGGRrEcbx7WFrynXWFb1RpThDetUQTxDJUXcPirqQfka7aXfZRsKpubhqGy8mqSWNnRbcbGygpfcphEZaMo",
  "key11": "5CxEZkEHdTSk2Z9QduEET6ESydXcmVbFG3rhhDDBWB6gbSM8DAMDVdR3hNKFscXeHsEJtLF17si7A3ocLBu7MqwM",
  "key12": "2oZbUTD2QU15VzYz8w5HVGpXSAtKTtnFpMDy2kLYpSKUdy9VWATk31zwoxqWSQ23SprUX89uvQy5iTR4x83jrCcT",
  "key13": "HoYM1MjUPvmvgJQv9PwjkvHWNzBtvcRZRetzo7t2KhCjvanNn9z8yezJPn2bKy7ksyd65A3G4r5hnsKDRnnRKN3",
  "key14": "4LyAbgQAMvdzWfkXZwwEEFXn8J9LfNTqC81iQrmFaxdihgMcjLugG8wtLouCt6jrUhvTKsc9GHU7rShu8qJqQoxR",
  "key15": "2sz7aSoFb2SNM3Kaa7ZvrbVErmnhyfDngVjoWAwFP1rVZQQcxteg3YaAhCApSKHRFaWYbzT2oSFeb7ySfJuNmg9E",
  "key16": "3Cdoe9p79hWCw63LB5cu7LEZ3xDqLrwCixC43pbh1pXrz4NG9Dk3mm2CHfU6VxfiXvHkm3iYdHYK34tArVhgfhgr",
  "key17": "4cZdbPiiG9x8eYvT3NaUyTWdsDyEhzRHGywB56CdKBDbqcrZhEQP1Reu8mMaTPaMDH1LccQigkurxkzzZXj4DjG6",
  "key18": "3kADLkyio29MvKCVRaqGtpncth4gsUGeHMsH9vJJfkFsLNRBgNHxKQaa2xL7zypJTnzG9AznpcAzfq9Ld3A1egCC",
  "key19": "AVnomarx4LZpowttb1YvbQTUx5vma6V6zHankMtobdrWhRJFLi45W32xyC6BF3vphqHRaDViPwof5RA9WqtHpRm",
  "key20": "2ZX31QCeAmb76o9JXjnfWvpNh7d52VbVjv6FZ8rTyV1i7RM573pPpxvav28mRvAsQsD2KLkHsKKqK4Gr3sLYPnLB",
  "key21": "2vPbYCxcp2QFzHrkfkj93C9SupDLeYx74e16tCyUPM8uaseiQt3zpfkX1sSF65iZW6GD27aNmo62NpNgxBxZuF7K",
  "key22": "3iv5sifj8JMpRvo7q9F5NM3A8NZA8Bfwci97vvFJZixy2kfvvyvKAhzuQHLpAmVnSLwAx6gWQS3g37Z8H7kHyxna",
  "key23": "UiEevcqEUyC9MtSvP3TXe3SjBzYCA6ErBeamjpnMpqSrhUXDRzpL35wvvqmesHwA5rLuNFxNNn3r1Bmv5o8wFqb",
  "key24": "4v5frAo4rmZ2qRVw77rodbohqXj8XdNC5m7kEqB5ooXqXj8Eyo9nXcLHLqPHj88PyYjA3jJs4pkmoa4KjbsHDXAP",
  "key25": "2HccMury2wQEx3UCytZmMi81ebqSVyCcdA1PCLPQ3cSWXGZ43X3McW4SLpRqWTtFKvvUTvDFbcWzakSGobDT283y",
  "key26": "5uD39aN7XQFRP1skUYJAtG1KgwVz8M23hcD15wJCYjR69duifv7aT5e8gW6tracFa99FQ9CuSKaTfYtH3edw8fbG",
  "key27": "gESVEAQD2ahyVCk4ojNaxDaHS4CbB1zqipMKxjqkjqAw82zaiRUY6gUzRoN7ZnCEUuWmYrT6oHVrhGZRjab5TuA",
  "key28": "5Q8hwAqFRzv8f1u1UDgYVqHLZur1ALviNg43shPm3pesSofnaPQJFKSzP4NWzBiXuwXraBrz9kj1UabgiEZ6BUUo",
  "key29": "uubn34QXBGjSspsrA6SRWKKFxtpLKCBMZZ3snQ9mLauNw1Up8VoPDs1dBJEX7cj4EGQBYWZyyQBazbYpvKxokhK",
  "key30": "4Nx5rZSaGUaAkz7ojYFp2z1fAB72cc7B4xzXKG1EncVF36qJBJEQDgV9hHFCVN81VNFZsXVmfERAK5LWbESgwB3X",
  "key31": "PWYx2ced5VneYeSeL7LMviWDnvshM7fRTbrDg55Z3v9FCKfRqEkmfBgcbcsEnJuByVFaHrySFFWjKj7Po1faiXU",
  "key32": "SfRUmubWM6H2tJx1LpMk8c5VqHZeKRhumTLCnBSqmdFfeQH535kTr5dyLtchgUcPWPUx3UXWLPUZ51wC3zfNuUf",
  "key33": "2A92PoL3PZFZ5iDNaW4SBsDNJSVkQTztwBoMB4aDBopBizqzNTAXgj8QnnsMUdzgHzv94HgEFBuT5MQKjVJhyUBs",
  "key34": "25Ux2EwV7A4Tna9uSFz16eETZe3Mfq6eanZq14Zy6cmd9k7vkoFJnu4S9ny43vVmKBRTc4vfVqK3AqakrKQLqTD1",
  "key35": "2SZJD5uasBax6V9YmcQBoMvVDP7imXkBYZ1z695DjUUHtdfoqWQLJ1f2M9Xg1xF942ysDBvPWtKWPuQqfU4ZfUw6",
  "key36": "3wY3EtQWNK8aaryqKwHpVMYaCEFf7cDwbNVsE5kkK524m21WNn6RMjBKRGVNnKo7AchaQ4TToHu82X5Ad77okRKN",
  "key37": "5Mc3qCzGpfQ94tV7mu1pBHQL5eYgDvBKNPq9KHURGUfen1nFuUt3crVosTApqNYgFpRin33cX2Ddi8NFy3J4a9fz",
  "key38": "SJr5Pc5L1GWQVAaJz4y44CJtXCbmKFgvVhNoLgK2ZsKpCdvmpcjXbhBVXDuQz4ABRnFVMYfMuJmT6xFsKwwM3JJ",
  "key39": "46q14evysXqAoiTq66soQvrbvTetRgaaJ2cmj67i6qJrTcFeWaSN4M5hogakA1u63A4Ktm8TV576hPShh6ksVKWb",
  "key40": "4jhrJ6iVagQ5gHtAjfNdS2tvhBgoVqykucbPsYXUYAHAxWiANufYGGcvUrkXvKoxY8g9nHm9MiYzVEuN95TMUvxk",
  "key41": "2puCjdPityPo1CGAri7jqUddKpobHvYggkmWfu35VPNeHcevdkHsTMiZfwcc7jeFwxXd4ST8FbdRq41dSd3mbAyX",
  "key42": "312HnSTNW3iUVh3C25PcrV618MDB7PdWvLPV8XU6WHsgb8L6SFq6D2iVxYCXeQh5yZCRGNhBG5RtUyaN4Zyy9him",
  "key43": "3bTMNtUsHGMquXvZQqiQg4xYvAimaXWdTyDW5Sc7ToArW9CRP1Z6tWzeVABqcUSgQfHRm3AuLuThEDym178Wxs9U",
  "key44": "4EamJuJosuectEfP1tQkiFHijzmJiYVrqw2AZkrmAAKA6f4jPrmLPgucwJgZjURKT8YFWmi5uPk7FH4XTYjEvrqZ",
  "key45": "55PKfh39iiicERTY6QBLVUeembViTkGna3MgpJeFxY6yiVZBhCWidyrWjq5wnmHBrPjjGYvE8L9XX4LfVZrirChu",
  "key46": "3bn41TLKaKtorhbdS137npMRVpyoMhBJG3j6TxwDST3ptv1KmEQYxwEN3XUSF5Ag4eTsSKvLUtAodwcfYyUSS5Cs"
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
