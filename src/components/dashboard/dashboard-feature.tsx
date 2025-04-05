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
    "2CmYt4yQ1Ze4HC6ZH5yHc2N5CoKyP5jsyEitdU1Gf3tQrnUFFvSmqVQDDdWbaShzJWyZpmbJgn5535m1BrYefiNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQFL8hPH3byERA8RQ5nGPZFkpReYkN9L1hEQ9GwjDYedQaaMCrRgkJbbg6d169GNvgT16dbmK7jxwaA8MT55Wqf",
  "key1": "3tYGwduQEG5BBCGDYiSRtgz1akR6GykzN16n2uSZEcnTZWuBuguzwKnJw6mT5jqZWETx2UNbNfb24pbiwegdfvD6",
  "key2": "4ppbJZ9hkWn2mdK6xTMUbHFmuhTi8LVFJN8ZvJS9tZQM4VZ6zazUdSN8gRPYYwz1iUwcSNgUKsKmBd8GL7Q9GyAp",
  "key3": "5EoQW2dBd5VPPVWHG18WDzLzrwSrYpLj1qdSUnvLED1QCHRuVKi72W41YQyN4Q9hXtNzKttWarzKzWsYoywpW7rp",
  "key4": "48iMiDCAyKtxfH4PAwfPg2W2TiRF9MJVQDBUgGnjcxtkquPQm94guzo15je8FmaDjMjG5b9qi4N3qP1HZWWwfXr9",
  "key5": "67TkbyEjTKiaq7USNVNn1e5AxUmrPrPVgvvv2aYibpNR6RSaX3jDrd8W1XFzCuTbThdejEq1dvtfMCePUDaQ9ToQ",
  "key6": "5982hDSrZQnWgVaKUCtLGSPHFmLqbdadUYeKVxjVrW7LwXwkfRF1CKv6VKAHudZnfygFom8YzMgagdaw7joc5zBo",
  "key7": "5uandNeBSKpAHBSNqGN1oXTxNeoUrUQjR4LeiztrNLetU51BYozqBMZKMxBBueTzcxpLi98rBCoyYwMUswMWDtJf",
  "key8": "jZC5ZvDznCrDjUDKMkBFfKyKk2nMpbjk7aoneY1AoRP7DXcFJVYuTtMzWZeD5uogc21wzowZAyQS7aZ7YRNE5Mh",
  "key9": "54j28hd5iQ4Q2LuU6J7rgkwbvnYTF38SMoED5QdrPQv8DwuzP39zH3eiYEXLboejkm7RSU6uNbKxQ3fcyeTqh5jZ",
  "key10": "2ypS8w5QsNJi8TraXrVH34rDAyVRGAZzyYJ7qGcJx66TJFFBZUXiGynaNy8xRJPZjHAtZaSS1tXhNoxDf9AzjmyZ",
  "key11": "4GPxDNJ678SUUkZMT8eJQeYe7Bu3WHULo7iyq5wdrTiSws3iD8gKKfqhEmw2zRj955vuJanBQD9kq1xXtKjrnQAc",
  "key12": "5NX3fDGJz8B8aVVS5hYGBj2mTD3wgob8yb1uyySi7dUR14xnYsy1TfuxoR9tfhRRgxAixfaK7xSsFRZZNdE58jSR",
  "key13": "3dY2XrUmmBU5ugbg2o1AEuqdVCcvGJs1kZgRa2SC9ps2G6ufaZymL5KJjznkVrpde46FzR2GbcP3prfST1pn5kKE",
  "key14": "4Z3z5LHs96aFx3qGRbAYkEtyYxzPThjR1xdgr8bydpZNe8Zgnz8e6UoijVpP5wg8AMJKMPGCSYzGpVdDiHbXskw4",
  "key15": "QgL5asDTE7wwD62AQj68bhN8qCJ4A695pbWQiw4XFWPhDvWF5S6ew3CDXiNgiipbY5GV7FBS2UKrQn6hdS4vXW8",
  "key16": "36M9aU8TunMN99jzouh54SktT8QiTEgHC9XVMnjN3kt4Y4eCshDFwMr6Qpa8SwH22XFiWHwSaa2gB7xqRsW2gFAj",
  "key17": "5ciRFgbPq33VgfCcAub1P7C9zSC7eyqDPCV1SrE59gLfeBeQEYiZFPZ67HfNesHPDr7overk6a689fKJEhSekh6Z",
  "key18": "h5h2woHoRmWtWQCav1pXizhA5qP4HJSR9sdPTyq2Bo4T1Hmmc1ahdciZgH25PEkVGvuGPbCCg7YnZ2gUVNaj1V7",
  "key19": "2mnzcdpQ6kAeCoDccXz1SZ2qgQxebdes2aCZBRn7QWGBejoPEXqhaAvFAy6x54cSZBYXSts4QSMnYkMMamNjgYe6",
  "key20": "3DM2yfYzCEUGyVGbCae2X6TyrNvYURdYCJAM57ZHocATji5ATh9BjmwycWSkjuoALxUdKiSYDSjPPvS3ZA4U8V4C",
  "key21": "2sWubaKyQz1kB8QV7JbKF2ndCWDLcjMSrRMPcfumeGhkxoNTaGk3RMTdGXeoTk2uTV9X19Ggej3TrSZ3UonJKr5k",
  "key22": "uHjgeTU477iBJgb9X6EEnvsG7c8ZasgprXtjwE6GeBdmThXWWxyt71xznzgg4faKYq6ECMxo7ZHtkt9jPJZGXrd",
  "key23": "5vg8k7Jn1zREiK2AsLSyajZ1W8HydRpGevibZ5XfbMbKXsuAXJn8wwoegaCDaT8LTyWFGWAGED4iJWgTvkjqQwkP",
  "key24": "3XtL5VFsaZ5yLnnAmSs8KkrpiRuFbmRGt7oKDzGiv9UiUGds48RRNuCzECARWVYqkQSDWq4N7U2muWm8DHCowmyq",
  "key25": "5jfCPBXLshYxRhrUr7Ri2ARnJVqbNy3MFQ5m7e4DXYsJ68RmsffMYLktf7DmVBeTAC1XqNusvqsxZjgk7Cx2NyBV",
  "key26": "4s6K2QoKjfb3ofGypNdLn7mBbkUf4geYNTRvhpSYgcwj4dMxnuDRgTztxNofwBSKzv3sRiVwZxt38pno7MGmZPxE",
  "key27": "2yzkAJzC5ApCPfVtQoCk2vxLx5z1ny6oyqReaWFrQ9Cfr45WUAKRA4Uew9q6Zp1W17fcVSPCwpqvGrdT6Uo6qjGX",
  "key28": "449pRNBYWBMoFSqS1ZvY5PZptA6L4uobunwaKBBcvCwttHkwFwBoWSzdYXE7kvcNSqBXD5oSZFo9fgEke66nCXbL",
  "key29": "6xLWShPV4CFX7Yp8i6uAsP2U4qPJehFZD2zSPka4R648EkuT2idRCY1uHdbJeeKBvK8caPowjtNCmKV2rJpSKpu",
  "key30": "3YkDzUF9fUgSMdDd2hvZ2W4dLTeiVZoBeFRny4UeHgXKZJdtHzCRFum2DLkHhyCp928UmCYfUcAfzjAGENYqTHp2",
  "key31": "eeKTxsAcD6avbFVubGfDHGwcjCQhkNEaKmaypiPNupkf3VDYZzWMK5NAMJ4k8TgZhNQ7fjPqcCJUsrntBVh1U1G",
  "key32": "Qtgb7JBQAskqHpzAKCxxY4iog1b6BsUvwmpMFd3QzuvapFD3qKV9jZsDt4LCTsGceqFQSCDyyFvyEWxPwzDqLsG",
  "key33": "67R4prf64mvsQxTpTo7ZgwnZ26bZcMTMiSdsQAwSQAiqripgi1ZVutCHHsqKDnJxvy7zAgzihC6q9YRSPiiDEVde",
  "key34": "4cUK1fap1oJ1PxsA7h4d3wgGsdinZ6a2ZWRp3FP8M4fzUT47QkrSQupYcvhDhozfm5gouX1TavGyrvx13o7H59Nv",
  "key35": "5z9Qo5KfEukZAA3nCb95oc292Y9gcSR38Wd8dyEf5aoyXRv7TRW6MXFEnTUPXnatXyMzoDNudrMSAMH8xMjugFHG",
  "key36": "5jJGFt9M1FAZECERvxQ3JF7Akh7xXU2xLtoxWp524Uypp5yZzQXrpqAYV6HWrVXVNTN89rVSjnwRk4MTLGpUGYNv",
  "key37": "5Fp33D4yDThU2ApRGYGGmkcT4dMZvGL7aJFdtA3d3R1tfZyCMawZsrkPAjcGvy7sAyKMEZBp11WjEqtbpvJeFrco"
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
