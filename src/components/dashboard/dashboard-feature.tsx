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
    "3K4YKmoHc489Js6aFj9RC6VmUEiDkAFbdr2wggSbbLUH6Wa7z1WPdfTzRYdfHEuqkCfAHLSN9u5sTo3kEqp17ic7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MM3VG9ngFzfUJdjEWtU6JDYaEKL2Cq2EH8LiXEe4k5pH9JsJ2nxA5KW7h7v5a5LNSiHafCrXvdPrjyLv2xxRuyD",
  "key1": "2TyemE4tVCfFNuE55n4YLtc65yhZTDARRsT7EaWLJBtX1Qna93JpHojsgbCnqzDDBYWL1vQzJGvps76Drd72prty",
  "key2": "2yLMrDszwpXTf7E8dT8ouNjsuuaRAXdA7Fda9y6MbpFZJ4SfjsMS2ZrzYDxKW6gABZuYx7SfbSbJGwDtvejjzh5R",
  "key3": "2MtkvsvYWTvwEVmQrVHyqyhpnKJytNnD76F6xPqyZjn8a49aD4SoLnz1q3Rvddkc5E8QCsiG1U4S8cizBRdWkEfA",
  "key4": "5KVG98FXzhaveERT5j84yT8AqwpkuJ1sHFqDwusvsVZ7AkYyr9oAFitw44HZvLg9EwmLemvWu1eoxZDbkUS5YPdN",
  "key5": "4BHm1dLjkFY6rgUdLMFyCJY8YDK9pQZHQZzrsmN3VF41GQx94qjExTTcheLmSgnCKrj5Cgb6vobeLj3bSenzkadk",
  "key6": "2B5R9mENnETXgxLuwtGVsR6pUJGT8FefY2iQyhPTwPokM1hPKwUnDiy8gocFzVjR3CWxNNnkibCFb3jWH138Tz6W",
  "key7": "3AqNwCpmEaujncS6L7jX1QmZpaHhCMa78CSzvh6BEV3VtFcZUnM2w9gf6yHCXaLpMYbW9FhBG3mhDdweMyJjtKbn",
  "key8": "2kTgQHz4pHrrssSwmR6jxUu34y3uxXgM5g6SjXqfXdip6rhfeGVM4t42c5LwVBK7V4E3cP1EDBhbScFXUpXY5vki",
  "key9": "3cL7jBs2AstvQ7AKZnnTheF2rPm7bUfoo1DERSj4zfsvQymoDc5nD4XzNGfMZwXnWaQ4n9iDQxk8NpqTUgwHx1Kv",
  "key10": "2FxUruvZQQp7zXYAv3tfygvKWSDmWY8X2WL7KHNoER7xPrjxCBPGaUyFatjttTU67z1F8UTsyYgyQ1sodAcARMKp",
  "key11": "22zNcFzTeVAPW2ZXRjdZ4AsHyUSmKBrST6hQDeUHf2MnfzvCSgEnecRL9XAyBhBHzezEoiSs94d9gSJCmBZH8eBu",
  "key12": "44uXxVQvJhqXLHvEib3uvB8kursLFWniycM6GcYydTUeTNRY84x71jS8cXSE5a7Bgrt3jX9Zyg92gB27naAi2zzp",
  "key13": "3ShLRTTmC5KB43HKoz9GEq9Auuqbkkh2tiEbxU2VCrMMudce1RLJ47vJPkxTgyXSJXPdWbr61mCWzF6cc9oeSYYr",
  "key14": "2XwS9XnCBPao4FMA9UXq31pxJHF851w1JFA5kvZkjfPFHvH2EfcbUgt2SMhMPT2YwnJuE8wNxfrcjdkgbkxNzcJK",
  "key15": "CPuP3dsET2GtukTMQmqKVrgYfyjATxCxogBehxJbfxT5QYjWmWvD1qMfgq57WukgNsiLg6FC87VSW4cGijTFobA",
  "key16": "3YLHdYvTxew1zhhPmxyVy5YJidMExAQvffwgcBCjsZbxTN7rHHHuG7kHesxBbDprYRU5jRfomK9gh8BAJHpc79UK",
  "key17": "3PSjTG7CXs9DJyUdsGswASr2hjJQ85hVE49u3iWg8c7Ecbv17QC8t4qSLbd371cCUoofF3Af4Ugh1Rqxg2QkD2e",
  "key18": "3s9qNZcQEWCPdPZy9AsdMyXNST3NG93U8LL5AbPBRXdH1k78nrirzGQAhGWsKkX99gy1GaW4yUNBMLsoBohcrevS",
  "key19": "3UG5P9af2YyjcFJ3GNK8Ex1MC29YS8NS5sb5MmhonR1ArdmFVAGh1wR3FmcWsZ3A6UcmHEKXMC2HqXeJk51mxAP8",
  "key20": "51ht3DF9Mshe89ytwcwqKzB4nuWYZ6SwgYNkCh4B1uDm9K3MhWkchGWBtL6kDHEp3nMsSQiC2gDdkTzotxhociyM",
  "key21": "ZHPNRB2Vt12d3vLuyRLAuMTwLoM5yDEPPdPEH9841qQqzqfdZTntkextQXCKyFBrzo72abrsQ2JJpDjAY7vRebg",
  "key22": "25CvCXphAPUWBsenHofJrpv4CKmX7ZbVDRDP2jDRHDa6p2g5SsRJK3WefxSciC8tWg225eZEPrLDyVbFnG9zKZRP",
  "key23": "YKAVZLwoPDiT6tcD4ACmiEgKcD1YdBprcsAUxgU44zXaXM5MsJLir6m3cSfx5BjwpPMs8QNZdWdQxwtt9W5f1WH",
  "key24": "4dVewG6dyxaCCYgAXnRaJHNRzNHPuX9sooUV9GLq6EZn2ttm2wSqjxnzxsZ7aA6kk3j25Guh6nJgas5YkNhdN9Ur",
  "key25": "GTsZRELop7qUDDQxbFgW9Mi358kFpdNjjxEHSdtZaxmsCi28eRJ18TuA2v3VWWF3FjJF6t7uVR9ewHwwhH9YRdM",
  "key26": "64A7hqWwmD3BbJweSQ9phuxnKT4EC8bvQ2PaNy4Zd1Uwf2MnXFL3beVJM39bauU51R4uCKBkomgeW6inPrhEShMe",
  "key27": "51JfiqDo6oi54pxALvLbSChuiWhJqzLjYSxR9iJ5BFUATtUt7PzmW4c4TqjesexwSFkjBV2SU85y7Hu5kayGF1RV",
  "key28": "2QdVd1kxXXR1ww1VKyRxFttUVVBmcGGyDvo2wAz5EMsCWPcHev2pEZEAR7uhCvEV4mZ7tgnhhvMHiYdAEpQCSMow",
  "key29": "K2CtckqNEUBRmyga6nerxUywj441CPBU5fqY3N45afGY1imP5vKcT8Mi1zXvx1R5USWVfDLu9NwuLJymTB4XKpE",
  "key30": "ix55n8E83ExrQ6kGzHLH9MAXiC2LvghckdT7fc8m4xfzbSPM1sUtvSffxYCUxmmPJtVTFY1k8DkxEFgefwjhebj",
  "key31": "4HFdHGLY4bX4PtksVbd9hQBBruwdP3rgo9Nz4FCASSpayjgFU4ftGA8mhWAc8LEUjSso8VRiHMrJSGx3YaZFF8Xu",
  "key32": "2mgkHuvD4u858K43tchQwLHNQvBnrRmrh5HH9ZUd16NwvwByXvW9fbnhxtpfWyYku4Jh1YrqiZE3Ahu3iAGPfjzr",
  "key33": "5sArcgWqQbHn1pLUyPnt5h8xGBhQcmUHEHVMHLmaH6QxawFV6ooMB1PKZjbW4nxym5WFFZpd7dZpx7NjEnXDe5FU",
  "key34": "5AxBMpnVeCDKwzaTmcxopzPxiPnYS3Te83vLKCBRWydw2xSx32ENCKK16VXtHrj8jy84gda7WcmzbZReQSKMi6AF",
  "key35": "zEjeHogVjR1o27bBrCZoyzDmKuth18tLn5Z6caj9Siq7ioZoAa8sJXWXU8UPzJphwDonJewRbr7uAYbkaezEJZJ",
  "key36": "2bPLb6pKcjhW39MZk3agRodBYGGTLQKJ7VRNcsm4N4nDrE3RrRgKex5R5xkAvXAx6KwU88WzwnasC77Z3pCTuprb"
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
