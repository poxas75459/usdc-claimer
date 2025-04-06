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
    "5ix28gc1F11Pbd9w4RNzsZ2KmiKsxShxBqyRAWPrpCjKJNnp1QDpRF47Pmv5KHLfvfBW6NxooY8Ez3zvciQnByLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uiHvSK9Td3pvSVByNi87v71QYvZ325kFp7SvHRBKARhzZ7zd9JPeomiFZJVbzJMjer9fvpWAcV5S1zMnehvf63u",
  "key1": "28jjoZKQFbm2XA8PstaY1pQcBnEKcTtj3thpC4Tt2ehY5G5oonjjvQXvqgsVHiviBwVLzFVmwXVByQZ6ZaG6ZwZS",
  "key2": "64ZXtncX4mHvkSoLsHK3wASFvHicc8JyerFS56wv2d8CqqyeRKF1x2A9XniKXVK7xpWLiMavFk3TzgoTyiLGpW6q",
  "key3": "Q8s8KsH3yXwAezdacxdntLYdygQvAtp2Wv5JnAMdWazHDdT56QeyZ4rUgPR9fT2wHMGwfFTeu39nkojg2cjkSji",
  "key4": "CDeCHemmfUrUvFitfHD94ofSNcvErLNstKxSwMMfDuefqcoUK8y3tZ37SkSh4ZA7xUSe88sjDwBx7pepCD4D4fU",
  "key5": "3JDuoKdQDt97YDtdHartzBw7cuFPxdoaByku6dz2JcQAhJ3HGaidCRoFezGgtX57ziCDuLgEd22hCUjHWAXyXWUy",
  "key6": "5dMzRWJa4U7bjwegWfYKfXEjo6TZpLVHwzfVkfSZBwUPY6skGuBxRxdvNX5eATSu1iPoEDbMs4SXNhgZuBBL5ayr",
  "key7": "3NPHeDZdifumZBi2owMqGLA2tyDPaSFZMGTLMXWpJKqsqoT6BDxjxkoUHFrPQzng2gky8wud8wVDjAim3rvfVpdC",
  "key8": "58QJ14q6FWgrPnYZXe5ySjpQwTDaZ33ZNVjjqqzbNSoWKVKgwqwxNLjJ9tVjKUZ5FMnYSVDQqxswPaYqwPPtJ3eY",
  "key9": "K9qyfuayQfTPKgrVPTip4sFHpFWC1xz4TVDor4ZPZS2E7ekTSiKbsyDmfXd9pu8ZHuWKVYk61c1bDC4PeCzq4yj",
  "key10": "2ZYN8ScwfH5CzSgtfLgUqzFJkKb2AWYiaRTFGkhXwBeE1xeYLCCGcrk3PymytvcLeb84GqUAkphMnzThkMnmfQSn",
  "key11": "3S2TLvDiTLjQFBogzvbZrzAYPbK6aRN6dqfMGa5JVWsiScHPrcPiw4GWPbjvYLUamHojjPYwdgyLnF9J9xMYURxd",
  "key12": "3L89UN1htARm6yXoQqGudBnRmyJURwX3tvK8CGr7aarv6fwiNbvYxefDRRLxaCvzixkmaL8aeezgbyJffrCvhy46",
  "key13": "3yn9Y2XSLNP5bKdK674h1ZuRkZyhrdUb5TQRXsWZhwcr1iP99nfL2LheWSiVaSkKiba2WuTXUEVWPF5EjwQJyBUF",
  "key14": "2uxRUgt6UikM1Pw8RN8wCdf41LwxXV9EC89yXQ4NaJ3gSkUnunNDmAD6WHjvTF9oC9p1dqcWYaWeQf7BSZu2oCfQ",
  "key15": "3vxTrYfTHtPd9NRVCGWPocLtAbLv5LEd3SwjGJDEdp9Jt1zKr9sDJcwSBNnRMPAxZryc5XsYNU4KN32gGugbcwwR",
  "key16": "yZDjBxdhskZTJWgMpzQVkvUCYhQ8PDjiZpYj7LNqFMGm5dp671kRr89asC6UGZJBNQemf2k6WksoJbSbv6B8QgZ",
  "key17": "2zJd1wL3tRPavEvfv3BDPEX3HMGvXVvxJNxCeGK5SbEshwvb95RzPpmZKJNJ8r6bFJnPddW6XKMwbsYwrWsPn6z9",
  "key18": "5vei22fAL6CtqKzPpq6GHMwms2g3py3AxoWkyuCkphH6enUKnLEuFbz2xuGHUeE4n13P5k4FRDpifxaSLufyJVv7",
  "key19": "5nP1QYAAPNy5NqewoDfnuSnFEKkGtvD9bPZHNcZ3CQ9H7VViCL7ajwyMJaNAnhGTAe9LsA38jX8zJVESrDZyd3GB",
  "key20": "5ZHKsNcWy7uaVTPdiehUdDibCtuPAfX9pnKZraoJEy2z9sgdewGXGW8Yt2UWwnPo1ArWVk6jbcANnjrNH1JZfRZD",
  "key21": "57dzs6TEx8QDE1Emz9v7LuwFouxBgm8bLATTyKbNpcxpBFZWF5ke4UsvimK34q3ondJcvkgxVVmt3o8K8U6iDbAK",
  "key22": "3jiUUCojBqMELQiTe73nWMvbKsCW1xAwJjeStsJ8UA2DmBMAnr5ZVNj8zhLYzQtqogK7ccnvAu5G8musfaqRm3Cp",
  "key23": "N2vydUmdk53E4KhDnnqKqdP7emwTqgXExe2KuSfTP5GpsfvScb4RZb233cYJt3Z41mfQ57KZJEpxWPYwdLCoiEm",
  "key24": "3oJJJCjvKiRPtv4NRJn5QoDL5V9gRiUxo1E1ASQ6WY1htfbhxEJDxJg8zhGydLZMpkurK3av3AZb6MgK98WGMYkz",
  "key25": "3WaX5gHCm1jQPSSu5zjigBgiQtah9jxEC2ByUhQd3ZUpF5kNChKKiTBZVDLMDEVonNUyjtpuYVbe2g912Fmthmx4",
  "key26": "KKBFLMgyxT4PtyKCaxT4iybJ8gmboD72CgNmsZGrnCUvqD2jcBd3vVYT7L8Dprv6izLhacwwgnbnWwL5MTqP5ck",
  "key27": "3BRbAH2nYwXvje9XLAepJ8tf5Ri5q3FfgHhBnysMxfhSYw8poKcqLcJ7EcPifQNmjTDtM17nzaAui6xjR4ZhvoWM",
  "key28": "5gK2JKbkghucsTFhuUQY2HHR1fJ4sYygYqQ8hmQCqoN3SgPhVY3oFAr6Fo7FUqggCMEgXddgrnsEK9k2WPBz6pgT",
  "key29": "8gBmw8zF19S8J3DBFGWDJFBWp3xFrkX2Etv5xa8uRftHbHhsbzA1AcWf8HXCzNeoNdHUKDS3yuF3t2R1icNmQ4Q",
  "key30": "2AKJvgatLGuXzHZksT5xhKMKWf49DpqCCRdSc3kjinryYPPR2MPuP8Md5v1pnyS4ivPYk3br2A6JBPMK4c3KTVVj",
  "key31": "4bQFoMKkmhRew764oLrq15bXyLSHhWxDAZ8gF9HS8z4G9yzc663j5fK12FM8LwY6oESCiMKkGM9jScRjokRh1Jxw",
  "key32": "6UaRyoUrT5wrF1CE7WWzx5d3v55LfJzRibkvucboJgVUo9msdiTD4NWzvE4qJDiKixjViVRsEgNvZgXTKZinf1c",
  "key33": "3gTChZXdn2XJDgZvp3A1J6XsL3EDg5ZnPkwrfQusE6bz5t7ussUeSxyz889dLxhPg9MsbRaXSG3Q9NSA5dgTWW92",
  "key34": "5n554ayKZAruz2DBCk3tXWv3XgSBahKFddUDX76iUQxnjwvVrThJTvzjTFvP1BtD4X6mqd9raJP4VridzFWJAAxK",
  "key35": "U8ZRLM51z1CAxPQ5FVhcXeGmUspF5rSdACamWubaXy7uZ9f3Y2UAiGPDvLuqBybUmiK9fRyEciZg8TE82Tje1ei",
  "key36": "4ycD5Xpu4j89NJNV1g8hWEKjS5aJ2XqpuNaMgVW4caufALRKttoLUDFBwW5YD9ymgkGcTJ8zvrsDC6kPFsxjAEZH",
  "key37": "3QW8h5zkeucmMfJd2VYSXmXpUNGyS7u57bHXSSKihED3HVWwkTeDXQpCbAVNqVPTfTE4i16FjZErS7buSasR6Xqb"
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
