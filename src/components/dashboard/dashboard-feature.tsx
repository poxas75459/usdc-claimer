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
    "5BwASEc2iiJ2aXbjkHQayj3fjkDy3qSyHFsgF4ApC9NJpAK4F8ap3usQj6QzRtay7a655hZbdxh7VrmStvLE3xiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zkzTrqKTuGnkDuxsXYyGyqrQoPkZMctVt99uJHFbc8EBdZx1xs81wpsXNvsdsrKvb5S71XBsTzZ9pwSJdXQLR6P",
  "key1": "31N7jNpr4iVfZBsDmGoLHsgqYDyYnHEBBLGmSFt2C5qiYabeuruVk2mybS38e8jvqdVJJ1mdwG6c7sLL5tYksgkh",
  "key2": "83RXnpJX1Uy29bX5PCNymuTtvZfKowS4mkwe4StGgZzQtVNycMNm15DVSeLxpRxcmKUB4WtX9qXEFmped8h8duU",
  "key3": "rpjmpHS1RmYS23R9yuBg8HPJo8KLMEnQUj7EkFsEJoQwnww6ZVzqpEWaN5eCmmim8E3PxKWHnFxjT4cggxFSZJX",
  "key4": "4Dv7PudQQXbWjoZXPoEh3wkyG96iBgAnKY7R3cR2yKftPz5EbhhMR1zPH4fgQ2s2GE9zs5dCxLnDe19Hwe8DbTBr",
  "key5": "5pfRvPqAuSUP7oWe77P5DSr1hzu6zCzKda3C1DTr9qhf31xPWvDuQ6kkrNM3aqBLwafTcNzmqQAVWchirF8BLA7Y",
  "key6": "2pZk3ptoJatKNveJpxA4Yn5hZ8zkTZxM4S7pUVru6j9mETheZWPG4Bd3828uAjd5Yc5itC7QHKK5uoZ1b5CVQWZL",
  "key7": "2BGt8ZBpUSYzx8os6hHspFnDioHbBmMBGimYWD99TF9JAR3ptG89me27Afgsb8RAVYPz8ZRfXAC79W1kGkoAFbu2",
  "key8": "5k9Yj8DeapBD5Km34xezh9qGTbcamRhbhz6AMLeLYz6PMcB56cNAV4FKdvBWC3A2StXh3kZLPCVGhm7pXfVjrWgp",
  "key9": "5eqhJYu6TLUsp98WJcDpKbyfV3RqP31ehApY3Vy9ZugyJejesy5HGwD5QtMtKtZ1gepJUekZ2PAGsta385BoFnVN",
  "key10": "3WqPKfxQmiQKTx2siRoPNu6ccF87vCgN6AgGQPzxy3zcE6PrA8ZKQ2DJai4r8YyTQFgqHwDifVExJHAC99DtD7t5",
  "key11": "5hbjt5dcj4CCMod6sdiAJDGbEqWKLt4PKB8ZbLjZbWVaJVaHdpL2wpMg3bbPqEgKfLPjUgpio7ez23wFku1ZH8B6",
  "key12": "4oj4gbPhLxRNFAXbCZKDh7nvEVHZx1VawX882XiGW8H2ufN1wV5SmqRhq9eKKtmT5MB6fqQAGXDG73YBSbULHzYW",
  "key13": "52EmsTG7mRX2nX83XzrJ5MyRfiCkJhwu51V91J345Fgt4DD4QUvctVGqpL2ijxaitRP9gTwci5jj7RcjijMY1Lrj",
  "key14": "3UbEQMxH3DWVP4TBvD9Uk7jc37Gr3TuQDZMfWpa75wjxutw8H7uMtBhcAy1VSZfu3MWQEKJgC3gu6EDQ1K4kUqL6",
  "key15": "3smxvPdsLrHDnfKgPn2wvHiBiNLCaeo3y8ZNcmVvC94YLJqEt51Vt2aZHWYCLTpVw1d6xsVJBKvwwVvr5cyZ8nHa",
  "key16": "2vK4jWejMR9FKRYjTbRp12kmjY1Ljcxscb5hhwAeQTkfUiczYFSJiNk8ACpoG9j4n69zEwkuuLjQdNBZqVzUQD42",
  "key17": "51woe8vkMqp5ywZKLtJuf3JvV59HEzptGa4ucG5rAt4RkGZFsT2sRFf3pwQibZEFkB5rP2CgfK7TPtNTjC9mgg9c",
  "key18": "4HCrKPxf9CxXBFyF3H71YVcmScz1ZrLYh8astYWMkuTgUJeQ1KZTKVwyJGNrgW2XTspSsafvZxFAVqVjPPriRAQ5",
  "key19": "4N2qHe2AxActtyRfFeS2yiNC9kWPuJwGjMANnZ1JCbhJzrLrr9TqxEjCxZXCY5rcT5TPjbnQr1c8hACNNsWFSwPB",
  "key20": "63zWfAvP1PZvmQ2EyYRkfjti6f9nQBSAR1H4rj6Sf2goTWN3KBrQLUEGks1UPB1SqQHfdDrn4QbiudW4ihRmtDEA",
  "key21": "3QkMNT2R9x8uedSXbWynxat7pVXky1CuivQAGZdUNXLbnkafCMuUJnzR27xZ7VHGtb1wTXBt3xZUY26VttQcWGPb",
  "key22": "2ck3fUoD6e19uKZiH5Db1PEEDo1mPuuUq3JG5z2xSR439PundFA7ZGq9S4K2D8BFv1roEazjUv4nXsMcW83HLFZw",
  "key23": "HyZA79kYtp6wTuLM7Dv8K2aCvqP9sqt5TDRzVoWvMFmyCpLdfZUMEYK3tQyzPXVvHC6vzZt3jsJyWzEweoj2BvE",
  "key24": "3evbmGWqwxHSutmZvYQu1oHZQYjQj8SduU2n8c2jD32SsAU7iZZVdBMU2cdZwNx7VP7ZZtMKe78WiPbnyWtHsnQz",
  "key25": "2Nu8afso1DL5sEKigDdc7z4pagw9ejitAxc7dHdadAjnSRSXVmcMsXvRBUuj3Q4GnEKDWXfKTVwJfH7e1t8SEBNV",
  "key26": "VE9EHymoUX4CbABWaMyiiKHihuJQvn4fFBeYLMQJJ8o1v53kdCWQx1xBfhXTJGFYBKCRDrzK82RJM2uMKj6UFQJ",
  "key27": "6KGhHePFSxT5Z8yEWNdWZ3HECZaRpdaziZsgcB85WCXp8cXtvB3Jp4zVUfpqp6ci9Da758jscTy53SqYkBA4HY8",
  "key28": "3BGJDinGxTsFvbr9BdHeFAuKwhaXpZ8TkNrgZqL1KZSbNN5NGFG8iKHqVenJwhnztQX736gb2iTXTgYwK7WaBSt3",
  "key29": "5Lk4b8m8htQHuvJdy1a6X1BbJCUn5Mi77M4e3enckVjrq8BpEjL4REGMZ4r5S7iHdpH86kzidoQP6v8fhUq41esD",
  "key30": "GakCCCtpKjVvUntkxGY6SBUmNDVnHk1euKV1C9eysJuznb9J6sV1mgAQv71kd95yzZcWo2hSZjgHaHiT4MsUwdX",
  "key31": "4ruSpSjDfUR2RUrDiipLbZmSF1kLSVBpmiPanwVGUGNQb1TWUDHKQmMVfsGVgH2gV8CvWG4p919kKziMYy5c7Q5i",
  "key32": "3XmeoMchWbDQ35UBxZXx4jgbaNRtrtmv45cRLoWd56h8AbuEoVCUcDHPZC5fe3hdzDChmos6uzMYpVhJqPJAPyfz",
  "key33": "13BUFaasdoPfs1D5V48R2aeK5SwsGfKxVAEDButntmmGqPCPcP92JioqBz63voSvqNsvp3yBHDN49TgQPLhSAtu",
  "key34": "zXgeShtehtfwKQxG6wmeiBebSogbvYef91WjsVo8AZzyYQLbKh98UA5n8146Ao2Xn8GgDZdNZzcEeMnminEx5Ho",
  "key35": "4yEV4vPnkRwWKjZy1uFqueg7744aJPzajhqouFRaMxPPKUivZnCG9QJheuf7MY7N4pb7K59LEctMyT5bmB2vtQnD",
  "key36": "ey4CADuUTBNWKD3VrkepV4fPzRjodoUXTgRnxPrSRQ3vb69XNGmkLm8pHc2utjyLc9HDPaV2QVBvBHHzTfxYhvm",
  "key37": "3gmpV9f8Z5iF5LUQJgtiFHRbRz4Pf2eMNwVJj2ZHShgPPGAwPD5FjMWCzMMDrsaAGdD8yu9JA97VH2btHp3Aic35",
  "key38": "2o7NyGVyiBi8XMhPa7YLmHizRRJix3jDRvNusGQW8FLpDiULWMgELPKerYjUjGYjhEerb9KwPHNHVzjz1gx5LgGz",
  "key39": "4AKjuhov3sXT3ofm6asdGhWdpx4w1rwZdbokzUrZScAYM7NzSe9KPV5rxQLT8gQhrrysXGy8fdjwEGWdTeP2z9JT",
  "key40": "2omZtYUv4UbbMh5kdErU7o7aSBzxYMFYJ4EeXv1GBn5WzL9SYLDefYdT3pxFb7K7LVwe44a4ovhJyNK9JpcaavVq",
  "key41": "5oMQ3b6DwLBjWVsApAuNLiudgaYp51dZu4regskyih73Y5C33d7TtqQZKqm1ReEA8J9f8igpunNUcvtwKZT2XuDJ",
  "key42": "3reNup8espAbf1W5xBXiWEyNL9hxZpZHCqnY1XBxV2Ljgz3iFLaRFsKebJrFNrne3tmYkFe4WekpuqVDyHtjgnPL",
  "key43": "3YakkpY4mPNaZhF2oLeLGFgUqXypPKpRkrb8TB3vwq9VoHtMVqvzb2uo2ijRMSkojpYyqoSrc8Hvt8Q36ANoMSuK",
  "key44": "23YmxztFGuHrF1WBSujDJ5gpX2n8ddzns7o364HAMqS23X4D3r3UDNFPbQPWzdcAJrMsHCuQJvuaziWoBfAurqgs",
  "key45": "55cxztsxZvFiW2bVdxg9aPa1bGfsQ4KpW9dfKVwQiSpko43NNayXzxMWfJ4qisD32suJZmv1aWpMC5jT8xVMzDfX",
  "key46": "3wvZA1vgrDGwPiEEmJWsXJc9eWUbVzFf59YpVJ4FV2LAgJowBJqkH3VtxqX7CV2Y6LjdgcgaSv5YvzFHQ3SWq23S",
  "key47": "g4TxtgRo5tdtitQyj5ypWGMwUCC1KDSi787gaXchjzuczBKbvqeuifSVwELCCR6hJUSeHPhfjFMUmsuoZWTDAMD"
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
