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
    "TRcZQv3oCsqoh998KCvMgvucdfAf3bvd76jou3rtD18UjWBLK6cDCqP9B8Z8tW9pwjw4cFg6BTaErvDgixj622N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYbQ1tWz3LtwDZAtnpZ4ruhVFrzECfXsvBT7uSd6Wrjg6MzEh941Gp7EEFCkPRm9gNubLA3fTxoAuDg5wXCbuyu",
  "key1": "aFdm7nsRjXFmMY9w4ssjxtvD45wwpWcFs4QeP1duCSq2HbFtFkKhSiCNZkzfjc7VAtWyMVdNaSHB1pgs3paAbW9",
  "key2": "2WpzWJZXjcUKaCaH73FmdKmP9TqxHQC6bb52ibfv7QYBcdBviJjbTTDX12adYpUXq8f8SnCTyehyxgmZUgF5xnvW",
  "key3": "2iQYvFoKYFr2jDExTuCkMKtdK6is5DQyov1QKVE8TpxbFxJcvLHFEsUiu9zVCrAiyeuPcpsAUjAkUVkMHP15jJMn",
  "key4": "613UN5C4uxAPGgkcSjQUFgR83Lpvf6brjfsSJBsuna3Z5pAgfADWFM3nN8J1v3ngFW2o8H87Spey6PtVL1PRg9ZQ",
  "key5": "5ux3BS6h6aMt46EYmGw6UGLwnF3f1Q7TkiwTY2qLsuMXgGHB9e7Z3ZiVdP29CLEvwqCGnrzjsCRWw8dMfE469Nfr",
  "key6": "4mVw35thbMi6HUVWG35eBzaRfSHf1NrdaU9YJijNuaTA4ZP5PcA2QM6Avj1ZZRTL1GZGWP91oH4zcniTV83gpMPn",
  "key7": "2KHV9hqWySXQUXzmh4aPov7gXAc71hbjvhrcbiNhv95zoVmDu1zNGQAchzSWok3GCwvs2MZysCvAyhq4S4u36ZGq",
  "key8": "36SttshpWJE9HMGkqCQvTA6eAwzCyptUmEEg8imv5oFxPgUbgAu4DL3y4AcCGeCRpFFGTbsRRYSihSZcb1zMzDzu",
  "key9": "5HGQwNbxcBYKHsotQRvne9vjoy64PjuWdCL3zVue8LZwQCxq2iEsizX1TbFYyXaZnZ8bC64dXW7PwTan825nHGVK",
  "key10": "61ao2QMa4wLFXBv3NGjQaj1xXxjiPuoJ3BBagPoBajjYhE8MjcCTKmS4crjeT27R8SV1nDahdWwnL4xEknytGGU8",
  "key11": "5kRhUKof5HeNjZa88p3y7v3KTAbUcrgqDf9rPjfZi32jG89cV2dfGt2UJpH1sBsj6Kh6K82VihkAzxCu9yTLFcsa",
  "key12": "5jUpmnYW1mXnDRLBFznavgTWCRyk7Y8eCSeFwrD1i3CNuHwrKXENjj83sZGebkNyhe5oc8k9ajq9F2M8udqWruhC",
  "key13": "3WUCbgqy8Mn75YyHhZ5ekmwJcN3x1v7oth6tnL5Hu4i7QMRNXX9Ue7GFdGmTpp461mMpW8gUVVXCMcfiV9T1MtxD",
  "key14": "3Kg5n6oe9hRMLQjHBQnWP3arFFhgZFhRSrcjeF3bHfBbaS6cfcksp5Ryst7froUyzoCiX1WHb6xSzkEvAQoT7kyX",
  "key15": "52dCgYP14HbLzvBERoTL2kckbukT3PezRNhiD5F5fhQygWecavZNAugtzDEc33DFNRvFn64VvKVUT92WSe5KpizA",
  "key16": "4bmUE9uhcGEPHyXuN8tjBy6hp6PXdeUmpwRhi3tUwq3CJkdGFYwiF9HDiU2urf63eYdJvxcqGxg1kEEzPoBfmSKg",
  "key17": "35JQs1ZP3FAtt37nwBx1z3TbDdUP9XuQYCj38ZJ41xM5eWstzSuzhEUr3HSMUkvjtfwDjnxmSrR3g9uZyfbHBzgo",
  "key18": "wHe8XGSTnbLuYD8EeMFRAkgMQK5V5CGBGXNpgq3SvTWArqP5Ugsod5AQeJzYyFQVyFte9dW4HWH4E2rCvVdEspr",
  "key19": "2xfTE6vG4A2geVdjtWUh5x3wZJaWf7VCfFF5maa2tuj9S7kgeBYFfTAHVxPPzXpcjZGuToTSGVvsnQjiEr5hUnLF",
  "key20": "5jSsNfHR1UuAwrYrosatc4EANpuR5voENGKqtYvw8vwRAhR1RcP5R1oRsPLESfJr1a4UKkTZwky9dUFonzzWcQko",
  "key21": "5TjKKhzds87UXkP5NeYRf1drrQ43hNoEeWjfvp2VX9xY7ExukH4oRefyckt8m8RRCsarbhW7Zo3SCEQG8GsiYmqV",
  "key22": "2WUp57s5LUdWvLmSfVCrEoDJGK5rXn1AqnpxcDLcaxeRn4vrq22GVDTm361mdvL18rbi65PVzVsvSXACYT31XJPX",
  "key23": "5EFe1MDNzUU3wZYg9Z47YmpXuq2wBic9sFSJCdiGTH9PtD22pkibhreaCxXKkezwhnJR4MueP1i1VZ4Mgi3A7ZQe",
  "key24": "8Ujk6V3tosNSrVrScSNKk77SuyW8TpyFffGRVLMKSFgXR7A3yrTjoiE3QeSRyd1FRyELmt9CHY5gxuLxuLqWT9T",
  "key25": "4o39nXsRXg3znJuCdh22hKWKow4sEkdggC1hZVNd218PFwN1WxapCh8K5vzNLiYyVcmWzdRWyoaYUQTVA9Uig8zR",
  "key26": "Y8jNzumGLPS1yHRxbnxcnizT3vypvodrRU7LjdyECbkxNSDYRAMWF2xbQTipSRfEub282Z2tu8DfUXujvATAwZ2",
  "key27": "58eWLVb8uDASdrnMtCa76Ugf3Vt6h76sR4tQ5aPfuuaVDVdzkSHwfzspkSSMm4dvTjzgNKF5UeJBAnEFHXmRCSHN",
  "key28": "5HoqAocTAYbnqnK1282ZESnp3dMHTUHmrQsGB2k8uVLeto29quvWbWR5Q9tZQNZ3G5BV4rUMbMhJArKRunMgtrpu",
  "key29": "5ND8pnVRarsbuQi3EV6udrrwjv5AHgfzvkmsjKdH6Q9n5U6GtcrrdaM36vy1mL8NvdvXc5LpTiQt5kC4hT4U2SUT",
  "key30": "4XPUqotzEhGpdqh3PpVZiCwQKmh6TuXgDHExUwxJAWGtnKEuX5yt67tBzJqv9g5pPM1iJyG5LcRoRbeZLB2NbfFu",
  "key31": "919L4po2SKCNw3Yg8FRLMdzz1QMryFfwpoctSoL4ZcVNb6WonYDibGEbbZSVWyExQjfB5MLjTMxMPKCvBQGHutK",
  "key32": "3NPpzHCgVABzVwXqoiUYG2x9H3gSbVMVKb2LZsFx8K1Skvx78aipz2g8qDfVrsP6LmVRsutNLWzrrSqiAYkPfKK1",
  "key33": "3WAzBbRVtCJ9Wc6EvF2RULJBZma5CYYQLB2tNgzbnGvRTdQSExHuJ7P44N8T1ygY1Kpt8txEu57MWpKr7D8UyErG",
  "key34": "36BYLfx7rAvfsKZXGGR6h2P5vTgDq18QKsgTXJpiB2ksn2gNBGoSMzLkbnnBM1KGg7vMz5z8CDrr14ePegsFmHDA",
  "key35": "3dcCJx4x4XrTtVyAT6Lxq8ZqDgPTVXTuMXn8VX6F5riSmZodwutkyMaghWzJjd8epuk4WdM1KnJ1vkKgKvi37SZL",
  "key36": "3fevKqfrHkSZqcQx78jNbTsq3yDoTNaP1kBsRsYFKpcA1GkopkBGT3NfhwGD4H5wznSKfKVDDzDqX4jGj1zf695W",
  "key37": "3M6ejC4YgCMozB8b7JHcB7U6bcJA5x7T8ryABCabD2msxwUfdNu6aMDmgfTxWrfJLRTK3SDby4atLwyAWE9VcBMG",
  "key38": "2D2biDi1VLAt4ykaJkLVjuycnAFFSFbpn17x11Yf8fuGtank6NEWWphi53TjLE7czy5AUGj37VwEVBvMks5VRNmu",
  "key39": "57LUSP4oko797sn57Thr28gxPTkqb5vATLM8oj9fRfEKitsnGm7GHo2EN3j4mwQe6n8VqnHshYcdytFFFUZLBv25",
  "key40": "26xHm5BaSLHfWQ6H61qLBVxRKjap3Ki6Nhpoj3vxS7uzQSgBufxrgX397KrNTg3fpfyFB2epHsxJcAAv4B4Pmir6",
  "key41": "36ngfZ5FhiBYwAFNUdNPfni1tw5o4hgH2ARjdSDEe8C2YnH1Av7xs763oZ9WQzMKRPa1L7ojvd3yYvwtG2ruFjJ3",
  "key42": "oAAjh2Y5QcXA26CghSCi6wNgoiS8ScFxKyikRHZDJ4hrWKii8Es9QPBredikb9yfJuXh2pbCeckhwPZqqKRzMXt",
  "key43": "29SAg8pBFBn2J1WBwDrorjZb3VANs82nUtCsSUU5GJFzzQoKVZgdt1phHRru2kqvWMEPFGAmmG88zujNE7QKGKr1",
  "key44": "63BxNwhZWfRYYybNZqBTGtUZYN9Bfu4YfX9hrZ3RmhwNXdA14woErp346jsonJZ1CmcbxgXP9NUNa1egLULvvJKj",
  "key45": "2dmUj9vsfBmjiHVKU6Sv3sXfDkMCaQcA5GpCND1BjjH9seAajoVBrfYnKDYCfosgms5hhMn3ELnuWXtRjKNwohzq"
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
