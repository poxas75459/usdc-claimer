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
    "53zqUNgGWjU1NXHrPUseKwAm3rPRZMW9qfVTgSaLmgpZtAy7b8Ej4zjcENXRgqMNhNX21u2Vjp2wkvNF6V4KUFdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TftbLqmqq7e1VFhyXt6hKfswCa1TCNL5Xyd68nR2vHSkWc5C3q3kCC8U9ACYt1pSvnW43MBoNKPx1UV8jJFzuDq",
  "key1": "vnJNh5qTtviZTiPUQgZ72UqibGkC2s5RgGmAqS5nqZ8vRxTsHTU5TKousNJW8t3jmoGmVSY4rEd2iKC3mVMcPea",
  "key2": "3nhCcASSoDMGu6pwRrEDf484sTyeBPBpsFAvVeKssEd86JCEpJjyJnbHpa3sQPTeq92TWi6pfTJDY2XGFKgUbBBT",
  "key3": "5EWDBRt2tBuMeuURaYi8MjcraweCEkpqNgqLviHpDXpRLEzvuTo3BiP8249vj2SaT7isRGUKJFwHrEGa6hpdLpjX",
  "key4": "2Y7Pbxpt3gVQMQAf4caZs1rCA47UScyYeyBQtUVhKfZ11uTcc569hzsPMfdnPuTABKtpXjfP2Hztm2f8UDNKoHxZ",
  "key5": "531Xr76bZz5vZGuvxGD7uPWwRWk8s96YS4FcwNkhaCXscEWMeHKCNsCqk3AhEpWPiiMW71Y4X7QcAc4qQM53yygb",
  "key6": "MfTbnSEYfy3aAobgF2vzXEG48YEHG1Tyo5PKuLtPL2GTBappxKsX7ZNCz9sVc9DH4oE5VcKYCq6XYw5PuWJP9Vh",
  "key7": "a4KYbBogSMtmRJfFVoR8EkVD8vsRs2LpghzsPtypFbD6NyVHcbh3KvqYQvHJ1aEkCs6xQC9z42FNtUWBcEYpSxm",
  "key8": "2ViJYUPubkb2WF2Kytefeoe5jBTuUtckKBQ7hwvQ76pRFaCAPoTB9vLGdj5cSM2VyeK5CDxNbsQKCvxFLQsGCd37",
  "key9": "2C6T7Evz95RbLXU2o83VsFaGDrqqtYTn1yqCCFsjSb9VqX6FCWyrgcw1pVpvBWBxfchQ2FkVPLQxYH97B6YcgZSP",
  "key10": "4mxgRs7A6QcLnAyBYE8YsD7Pbj8dipoJrELcSF3mpf4HAYhkZPUaqgxWXiqmhVwWaHxQJzX2hYTYx346mpVqRYWE",
  "key11": "3hD3M1NG5tFr2p8DpVy5gFM7QU4CuWUvvveFar1KjxvojLBs6f3TxxogJsuAYiujeefy4xfewYh742AeBRDygd14",
  "key12": "bvrzPpu58waSgRiTQAbqyADMwa5LPaw3PxQvRLyCq7ax12d7S58DfWo7JZ5WenqWHDuXanD4BQfFn82CDLXFUJt",
  "key13": "3R75pD3DMSUFdGC7LYguaQCUBMcbxmMbmLZ3j9bq9KpwZjHed7p7PyxrdxP1MMCzngfXGYkvN1rA8RFyYFVfFzTo",
  "key14": "3aAQ1ZSMeyNT6bqWfAo3E3arWXv5gkotCFbA2AfS8E14VSDK7y2BZyyHhAfttKt1A8J4drsxWBAFG2nbxu1M4GWt",
  "key15": "2ZmhjrErYLGvs65GwXL3RriMDWMzrLg5YW14mXvbHTv7tNFW2Z3AYjdnMuBvykaVNHdkMnQ5BDik48yoyHisd7Wb",
  "key16": "5o77Dhau76LPyb3sT2cs4peoVQwt3c6KzsBYCsVkxH1So7mSLYUJKViefybYvB4aA1NdXpUv2muGMJRjMNTZfnNK",
  "key17": "5Ptx4vJfjKjQBHrJ6dVkPmGdWdbsLR2hMfaytpCKGC16CZKaWPjgF4VWruhGAFSNNeagUBUJYxDNSvyCEmZLSDB7",
  "key18": "2MVdbjmn3fzNVaXgconesTj9VixofdbNeqwJ3aYnwfUb7ntYKgmseKjZ36nYeqyVpBc84gU34izc3YCvHVonWU6q",
  "key19": "33aEw7UfzbmC3h2c1jMHwYq5KgUEKm5fKzLNQS1YmSSFM7fbmxvwC27SDZaHAoKaVq6BZ1Xoayi48ocFm2BS3xrG",
  "key20": "4pjnprDfqwKV86CUuGFBjMDQhSwCdYiTbpX6ioqLEEfSoXhevac85P5aNcjiEHbheFE2UtWdUwfKzV1o6hdXisvk",
  "key21": "4sCmXCAKfJd3RzYBupcczAsLworh7UwkpVwLFQBH3YMEnt49iap6RiZgcekCYCRdmzWReRP2SCJBSWr2LX8kyFsA",
  "key22": "5fnZq6YiE1TvsfCbAHQjAZKcoX4WLSatWCYknqQYHRJn1U217SvML98GJ5qrdJtX5xv45cmgdNyGgyN8q1eBSctP",
  "key23": "5aQLQTrAXdjSTXv4ifx5RGGQeVQgWYA9tZmLXF14BB7TQ8jBd5hfTC4sUJ9unVc2vsa8i1i2wyas2LHwyV9iQXsK",
  "key24": "379P3i7tW9mvxpfTFvEKx2VDfZGeWBsu9GLnv2DsG1rXxB571b3G1Tted3QJZxzEqHaeF6ZfeuRgDfSDYXogNczV",
  "key25": "3LWaShnGA9T78LYJmCz5et138ELfMHVFYHKhe5DbdKoCG43rFcGJDpmJ4RLpWixVpruM9uDetWJkxSkeWb19BgUZ",
  "key26": "5wA1TcDFMamvfaetZZg1xemWGdYSmvctkGfo8Yb1qm5harNCE7W7f6bLKzfqNXSjhpVei2wqBQkK6TVkQ1jn6Kuv",
  "key27": "2eRDY1zJ7zjtSQFijjHWErs3Jy6NrMY1VXmfSnxgSVumQwNpR6JtMVdGakdZbQGUrCAGETPgJ9wEHDRZrmGpHA9g",
  "key28": "VN6dao8Pmx5MxinXe6y9VFoMEktXV9u868hhZW7336RCfUE3R2C1vpS1xuwp3v6fFmkZQhfJqqFdC58wh2esggM",
  "key29": "B1LLqGzZHiNcMrcoDnwTsAVqucuc5L9L296tENjNaocq7Ye69pngwZFRfE1iTNmnJuBDqbzZBXYw7k1ANa63b6c",
  "key30": "3zDVPVWz4iy1pR9uz5T4XPF3souA68dVN8BBsyTmmQibo8yH7znCS5rTsSwBwkdG9CSi6uSJ7npEjdKWDC6x8Gmu",
  "key31": "356gJaq8cdrWvPDk9KCG4FAzJL6RxeUKjuUave9FHG4E86JxoJacuScA1bcwa3M2Zo6PhtFqqhxJPQf73EhvpNvy",
  "key32": "3WYNa5GbfHpqGeZsUkdH3UpYiwJMhMq7BVtKsKfK4gPPEUnG5QLKPEiHkyDgUDbEfP3JcATtpvbCoTJEiEWHThRH",
  "key33": "23QrNutYPaU4tLb3gNH3YpFF8PseRKogDcD3LA2eP7AaqsxtvYuY7cq2FXPq7rL6Kz39jaoZz4g8L7YaGXnKGnbt",
  "key34": "521qGJJjT3bwCUVrrGdQS2BQcAwHfUotvB1bmYRAveDj4oPrn19JQEgqQMkcbpCewzw4EEDyH7UQRd5tDPhqLsZU",
  "key35": "5HSQjBd5bjrihBgpMnaWkVqEiyhyS46h1kK2NsbA7FxWEbeKQZ9WEXzJ3yMkxafk3wubUHqWYXYjhqR7sZuafhAx",
  "key36": "4AfGZuBpyr2WaVtxkUQpshcsBkaadaBEuyHhebJkG2HWCcmMdS1FDXqeuLziv4ZpZnSRWvbarhnLqAsUw8EewfZq",
  "key37": "3fjCNU1rQSSxZas8fy81XPN1F9GjaMgfp62dGA8jedV7Hj92H4HYQDDnvEr5N4jxJzX7MHHzMH6XmjRxMomkw83d",
  "key38": "vbmyQXctHSbzJaGRvc3mk5F9YWV1D9LCbaSe9apFsJoSczVvigEQ3yqKisBCsV2GxEFSoSgSsu31nMn72ms4X9p",
  "key39": "2j9ZrBdR4vdZ1KhZEduPKWyseckRr2RFSEZkutrisM5ThjHNRhQbpu6CKcPL8UzQ1dY4ZQHWrTqp6tht83m26tX1",
  "key40": "58ywgqV8kKrYHMaeUTenttquEhCMcRTtyyTx3Ei33tG29kjwu9FkUVBuKH4yc2me9nHe44m4b8iwBRafAFspaP4V",
  "key41": "4k8c8gj9FfT7nYZKseTZatJezvCSzgD8mFbDYXShhXjxK587K4LtCCspcNoD9HYhtcNsUFccvDK6pVkxNAzj6fCH"
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
