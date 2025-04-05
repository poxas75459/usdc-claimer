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
    "4Jg7so1Ng6uqoyrTMZTvtzzYbuFPVAqRBpGRNAvrrt2iPhV2JTApLtVi1EotWBbDkoGfXvg9BpwtdiGuQDhb9MeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XaR5mZUuoWAqKXXertq9pKg75jB3mcBELGhqs8kEUctqV78LNE3pdaYrwoayU6QqfziTNtXgjgHVRPr3JubkUgS",
  "key1": "2zy5ufZ5yUzyL6j9qQdMAcNXq4Nbvtnx4A8gwAT2TchDksSgWc8DXvca4wt4B3Cdf63FMaJNQnnHwkbQ63q7pbW",
  "key2": "rX1vzgpXph7oPTZWFCm2JTwhx7h4oRLqQ3SKfe5bSomvvWLJVJeihPfbiiHKSna5219U2NTnPGo3K2FXLH1htyF",
  "key3": "4DwK8hYZvJqeyVpsxdcotCTcT7gHLWrk5DipgzYRFjtpXMYLmcSXM5APWYBXd1Vqo55tdUFBG3giBQGGk4TSaCgW",
  "key4": "3Co4XGqZmYh7KtnMDczE3Z7tWrbmmLDRetVN7ztpoEa12Zib1FaSUPM55F4rEwy9rzVZUkMQ2MU8efPCQxSEMNDU",
  "key5": "497BTA5xr5Ltk5jnHh7deBhj7esLdDEgqxgybjHEvch6TY5CEas2AKu3t5FuSdktN9uUHTygRYCeKJJYFy7Pyv5T",
  "key6": "HSS6d77jqsC8Gxn1suXqjaTQeas6PAEks6vhKEWYPxsT4JoTe8CTFL4pMp2x6QcchoExVYxWg6BvQEWNUgsdhaY",
  "key7": "4m7pxAHVb5jyPjZ12Z76d9oahhb2KqGUdAhcY6uQb9zh8jvnHk4wu19fNgxEBbNrw8cGZFHTZqgtKvtbrQDgRRhr",
  "key8": "7KFtEgMcb9JcW4vUzMPDoJrJr9XfZLC5uY5Pnnakx2hAtCACJwUw8HS6NtgJXLavMeXGJdbmyng7pKKZxxN8mo4",
  "key9": "WJ2mxFwTKPKjncCq4x3gEE2m4PeU63bcweLkzM1eiXA3q3DQfnd4E62HFN3KEZwSMnvRdKw42uVcYVc9UfQhSm7",
  "key10": "3qDM6aGfbD4vyurw5BexcWxWmpb4snhSQrYhJyKWqEXNNDtd2up7KMEyUGqJAvGTp3uznopNALbR4LDMqtMGk3q6",
  "key11": "57y5XeJin3mHAsyFQZXMTvoh26AidJFEXQoGrZyqc2oqdDJJStaXf66GtGQG5rSpYSapUCkcZnSHsACZ7h6xtikz",
  "key12": "3Lqo8GYBPDFEtpjU41t7VKdnBTfCxoM67hSBHoRCZJjfYZ7wXXsU9N2oH4RYhyS5rwN2ZbER2McoVGFg93q2eUYJ",
  "key13": "5jF2ubbmA8iSzeurHV7Ps78JZLLQL1UCPxmeYvJugq36LxPxGU1EHgPV4c5b7ZSX1BzXFkjzoG4x7guiE8p7iavY",
  "key14": "3gzRBqNe3S9vJfHidkMvUtht8mzxRGkF1vkDVFpBZsx39rFiAyCP2UA9PNiVEuztcUuF1Kc3D83ewCztioPZQA53",
  "key15": "2K9otyb7hmwaefxSAewoE6oqZkzYaZ9k5cY9PfuumF5V3dxG4EfdbPWFD93z56NQ5JQM9ZQwdifoRAuv5KMXbDfA",
  "key16": "2Wcjv4izFWtS2qbqq9HvjWbt6EgetQUbi3QhQfYZiH6xzFELF1vVprnPwTamQtNybhCzVz8aQrXoLPtG5yXJiBDM",
  "key17": "4gTKZ8hBj29KCSW585yomZFeY6WP6zFJHibaX5RZAwwRn6sJk5a821TMDyzXjQAGrQP9FLeAUVdV5MYnxvi3ctBy",
  "key18": "2gWECfCthS27Y2HooETvYir1ycWhvmtDeL2zMHE9AXWfh2NzTCBYACja5F87egaXFRSvExuxi8zYSGjuFqsWk1kt",
  "key19": "2gyprY7Lzm4G2dZa9e4rZSm2msde6REVHsw9KXgqdqER2tmZ9G9NovUAVCgjXW6cKhmMahrvhoCHvgrJAicixyCX",
  "key20": "2nUD98M3CEryBDacUTBkpaW2zPiFJvq8k5upkipk21DkgZdQBbe1YDphem9X7vmMbXNsTK72LfVkuWXUTPwWWgjL",
  "key21": "3sPmY1vx3wY1cmtn5ULjwEsrQAkr2Udmi4pbiNxaLHXvHQ4N17gx3R7e1KYqqnrQxbpFsZkEfUd1rMhcgCmm2GSX",
  "key22": "3Q2PYu3DfW5aqZzFkkiaeksLzWcxvn3RMcPD2QktRBSwZMzEonJLYsDoazgK49zP7XrwyatwmzvhsZmiihZ1FbeD",
  "key23": "4pG2vrbZ9dTtGxHLmFiCet9b5sbh7ndEBBxhgKLnJPMvMZHzKiDLzR5hb7NrUgA2Bm84ekrgQE16NvPppnbujZz4",
  "key24": "2k3qkPNCojpvshW1SMbLycAStdiaHUGYGCDRf19QdPeNCYmN3fye6Fhn1VX8JAwtV47SQd61pAk6kEG9mRyeQ4uv",
  "key25": "3phRSgqLAwY2zJ3RyzTncpxtX21NLMpKmV9dHARpHD3SPeri78EUPsZtvGsMzT3bHaKD4pSTUPSoVL23advUaZ9r",
  "key26": "KdVUz7wRPAMBnbQ2fxSzBjFnyHNQzQVts9UQPpPsiijw8tthqt9GEuiy2DzidpVkQ9sdtjAW1zj4z5mjX4zJMBW",
  "key27": "5v9rn67q68JZzBc2zkDoPDyvvrTpp2sVg9jyEZpRMpL78qEZaRVXz21sMwmNU9wfiyFhAn4uq1LuhFf5u8bG7ixz",
  "key28": "51wr7kNvE9nfmD9LugxjRjceFYra1p9fDev6Wwu39S7JzGu7fbRGTTyzcnwnGF4mgpAoW8Ys4rYWZTyaTZCueKeY",
  "key29": "25ViY23np3Cf3ZNHSM252fhfLp7kcNSrs2Y3BFLRjFiYMS1fcdMdLF8iTHzcb3zoo6i7SSfbur8YeGnnvD5N3L8b",
  "key30": "2XEdZG4GEQZpprbukvkydmzFtr1cvpJ7pbBg2SzPL4fb3rBaES6iumYbyBgX5iM8kRw1NCDk1DJEdz5VX4bWjFSw",
  "key31": "62oy5quGCYYvwx492KUuzaFA7dWFbHyDv91JJ8hVPv7s7BuL57xraffC1ShRarUPTmGnVoJX55eGEu6UaGgqFQg1",
  "key32": "5GUawVh9RxFsrJKy94QHxjv5Cm2Tzs5MFcSxzf3Ha5KYkpZLDs7GFGQdnTpuzKFyE5LFCYqpRnfCz4jNyVyunyfa",
  "key33": "53MTQ1WzAXM6bCyVcXGvhpYtVRav6FvBDQWwJDbKCZBAmNtWVk3CEG8BmU1BoxYq824Fbxkeiys1QRxDs1NDMJ9Z",
  "key34": "2EbU3xApb4oMrKrjcuejL9M9AWKU995KVFD454n5MCPhNA8FzCFiqU1L3RERcHAdkEfaMKzHewoxYgDGBYgAYJy1",
  "key35": "zPN9LG6oesuP72i3v1yRDbSoq4uqZoBzHZHa5TQsLKe5o8T9PqyqDFu7trwzdNrR9wN8cXQ1tdqXqhC3GH9qHDW",
  "key36": "2JncJ3hCjMiPmXKsFkN5jxTCn89NDtqcqE9hGb3keDS8RX9B1hA9WD2WfpMYFQQ35SuGfFD4sbERwhrwbWoo7ejn",
  "key37": "3GDZdaev7daeKVX7wPxVQfrBbUuT62MCbfFd72nMe8Hz7sVBSvtyq8QkBH5SEBq3HiGuZ1GkbTRuA8SnFgMxp5C9",
  "key38": "4Y5FF5m8ea29pTrt5bJWTb5gr2rBazCtaBbxPTyFePakBs1LfCqhj5uGjvZ7Qaz5Z5puramiHhS8upLZwwq6h4BB",
  "key39": "qQXL7oHgsE6R37xJrAeRSXj2GGNx3KaXY5HLVMyYWWMhbJmqsdxjgXp1WXxg2unmmKW7fzjQurL7xdQ6gXnaixP",
  "key40": "5wXmrTzBkJT53aGjSXeVVXx99Sdkve3PMHvGKM2rSGFW8mn4YfiDaizrAnfJN9R4vQVRK6hjefAi5WnkJygMLK8L",
  "key41": "3qjmxPCS2nZpDfdY8nPCuUdgL2KLtrEyA5QWDPwjn87eBAHDoTXW368S4ZEdYhjA8sXnGLMU4uNzHM9rodJ48Nvx",
  "key42": "4LbRcrqTb6heWwh8QXmR3pYAjgYT2k4WX8FGsCWh7xR4DQroM7c87bCQekJqGFvtSRW26yEqqFEP8cTiXHgN26f7",
  "key43": "gZPjbKzz6qtkBqTaVnt92g4SWFZ4CV59q3cD2u6HVg48T1NCRs7i8y9qE2VcM6bY7Cf2uT7cALWxMZAs4jPu1qR"
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
