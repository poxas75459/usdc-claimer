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
    "5UdFvF6DVSX36CzDDvDtWt7uuae8WQsshaod6P2VMLcqT76udwZXzDhMXYewZAHcUn3QjvK7KPtm8YcLXuYUMQHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AVMNMqjLMJDKiG5D7SH6R537v68MCq5iFQe1uG6kZs3oJUmoZMQSx4JDGJdukYJ1uc6Rbew6GsxYouRrfAQfi4",
  "key1": "3qCKmLorqo4w7UTy59oXbBe6uvRGq6Lmd6CTyqBumw2FEx92Gc6u8Bz6vhvgZmgCRgcahk2xqcfyfRDicR1o5M7M",
  "key2": "3MM6QUME7z8rRsCk7StVxs38rGXuib5yZSf6XD7pTLSD8Nj626DPpcgYNQC1rxtmtKPUmrzZchu3KWrbHTLbgibN",
  "key3": "3XA6fLuUp44Jywqz8S1RoSRx3eAsGRztVPr478eGNf3N2Nen7NjmkqDQSfwAm1TQdWY3d8pyab3tARHEvXstWYkq",
  "key4": "2W2nZAj7sd9s45PFYcDQ16FQH8S2sYGMQH2x5e9jZPGqiVBpqSwC3hqxaopMfpE1ofoCDZ74iHMRXgzBu8b26mfa",
  "key5": "2NEWzfRrX8UgDbN83Cg5Lm2WNR5mJos7aD5a7yTUd7AV9j36RHKunbdNhZak1H9P5TaYZh7LExtXaFUtM5v851m8",
  "key6": "5L4h9GQdu89W3WwtKHRKXzD8s87XXAurTQBCCk5iqH9TMv7Wg1R6eVFBnhkdjiWcXTa5zNCHfHvFTocKgVsk5zR9",
  "key7": "2J2WKbaSeMYK1bbTVHvRnaH2NjhYZFvLbDvbNnvDVJh85mhtpQRkS4diAFNMQWJbFwZiAAyGnuGL9Bpdhgbqpgg2",
  "key8": "5CdkNDaZNk3mPyGW1ZmdJdCBcDaxGnoUckPtb9eRGrQL9jEJ5S6Jsnyo4tpoTWtn5mbGYj9dYUxrSvsmpRayQXrH",
  "key9": "aYWFgMJx3ZaB6JZk4eGaihmkkGowiqb4NeqSMWR5d9j7RKSW2ghfpPYwTAHVVmPU9e3xttnxSY1cjddi44NKaEu",
  "key10": "49CR4kEGDSNpwSvq9GdeyBmLTTSgYL94Z8eAdSGLoYY9dDB2Qbx1gqj1yFhTgfhZTp7Bb7eK4hbQaf88kMXFyQSf",
  "key11": "2jMsADmvz6pwf9KGzrATKzcKzrLqNcdiNqy81hreE1CQkkyR2QLunUtHDE9SsZHrVTD8QrvGqiq149H97fwXRMx5",
  "key12": "4y2PbHHLLFghhpVvJPxZshXQyb9ftpCVy99oQa84eUEeDReeEmfYUmeWqUx4ZsZr6LrbUmGuxADxGL41c7KDbQZk",
  "key13": "4cYNx5b7Dew1U8rXeD7ofaYRLc8xgzF8aAswQ6maFvshZVFUcKHQgSg7SYhnisD2xXiivmEoDREr7GCjL5Q4nDhe",
  "key14": "59oSjeAzJc8G62ANaV7AqEqExAwP3jBtiti75muLC9m8EAxVNzbWfWr5idbPUwF8Gsj2cmtzqoh4g8cYvgAwwjcQ",
  "key15": "3RuNkoiBkDqoxNCciyX8XEWvH2xUvARzB1i5YwZe6wauovuyBojvrgsgU8A5m6f7Ux4vZmLvCnwFduYZb69WYRDz",
  "key16": "2Y8m4oyd7UgFLbyvqjjcVnkjebYCqaVHke8PJuhS6fEJBLnQwyj7ynJ9ZURbRmjBXthnZDXyAh4DEVNkjgP5BZxp",
  "key17": "4Vyyh7ZVR8pQbFXfCFrmjSMAcPxsnee8EaPNuAZoszcXdj3tLvwb9XAnr3M25thy34gRHgXJogmTLJYEfeGTELUX",
  "key18": "3Pq1SPTQKULXpacUq2VfwY93378L2tf2sEUbh5RRXBDoVFwYsGzdgraVBgmfPTjgXDQapFRgtkV8vQCo4EouFiiT",
  "key19": "MXzLaBUatLwFooVLq5mDAdUUqexMdT3kijrET9JAbKnW9f59sQAEi8rF6e67mnvBfEN1T1YtRGv2GgmcsY7Ej4Y",
  "key20": "8QCF7Wc3as7RRCfAWimDQhBm9iiZioFVGoVYyHLeT2nzkstJru8Nw8zk1yptXvy8KfKiSAiaZFuEZGkDo7cqvA2",
  "key21": "TLmymEKgnVnFqXirCsiP3vFHQjdXmg1JP1CDxqqVsiSSJj7tpjqoMMwLUTogennKuzSCU2fRYYNDKqfwb76DX5L",
  "key22": "5AFC91CTN2oiURC23pMAZxStATrScSC67asVogMod7vnrjVpw8UdhfxWSXxfh6Ayo1BZDXq5Moi73zd1Ggc5p94o",
  "key23": "5wTZT9wDDrqeNSBxJSbEN125LtAYnU61cZrUv1PuPb8cx2asfop4FHsssvYYnkiMeAJsqXS3i5z7QcmamNyzKnFJ",
  "key24": "3Nfeqzr78mhKRmYuRa2FbpdyFLmax1KjsvEdZ5AN9ySPghZJ3DLpun6dZsqkMuYqSU9XNnebXgL3QwQYUpUUX3fK",
  "key25": "h79MWP6VipYhVWxkLRawpUNQypzvTaWDhqryAxqsY4fZNopSfVFfhSWzdyGP6vjXJJ3RMTQe9J4EMYkJDYWXUQj",
  "key26": "5h7rdat37ZNKjKuxmieRBUmYg7UbmxsXGY9tnB8jw5TWUSaBjkvqGTQXzFDRm8pbXaJS2HSYo3NoT2Gx893ymJ5c",
  "key27": "K5uorxoa6RXmTUJqqpAUGnQxm31AwiFeJQRfM4JyAiXEEbWtb5cY8sHvHGuCt3X5zvoDC8PNG2HcTHum9VtrWmR",
  "key28": "o6Brb5JMbry5fjdnTYAqGea6ZJcstX61twoz5VWDa8XxMRM3opWpHAayLFAvRfcyiJUQNMp1dwaWZ5uQn2XhQcs",
  "key29": "5Jrb6ZmfgRLW3Wh6mMBAyCfbm65H99tTtYKCVzFsisN3RtQ9Ffdg1n5nud6Sy6WZNMAWKJaXLm9yrN86VHypQTVa",
  "key30": "4Ws1FfKgxuBR1HdoQVRa6vvsnN6r3aFui9eYf6DNtFYs1aRXz4SgEB2NWNRt9EzpUEr2YW7g7rpdKCrESsQFmVcn",
  "key31": "2TKMAifsh4E3V2N7xo9vtMmx6S87a5Pd1vvy26uwRH3jTD6QANibkLS3YpCFMJsr4ErHyxDR248fpgK51MV4D8Ss",
  "key32": "2wHDbhdj1xFHZbQnhwt3LaGMtGg2ogxyd8LgnNtY2Y9GVuCuCMwv3iahtQASLMCsRrbZV7r7LPJXc4rrTRLfky4p"
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
