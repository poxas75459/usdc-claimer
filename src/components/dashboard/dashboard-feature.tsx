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
    "4hgjV7d3EQCbNSKURzG7KARLWSrhRQCvLhXk3DV3S6ns6uJAtmh4hcP557MHHAGsNRx6cKZ4td3JxMJkHb9U4naW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FygaqbgiqwV5nYWq67tSdDKcqMKStQreMo1Drfh9pY95aAMGQdG8fCWULqyciHwxDycNWYcDZApM2eb9Pwwi8M",
  "key1": "3PUQEoBiSAjnNytSRT7upQnquaeLn3aXQ5iqRGDUv94NThsebEBqMdrrT3nLhUhk5mUDd7mgW2YKBBNQEhHZLYe",
  "key2": "2W6ZWYgwkq32kfMUgNXC5gCLZCKuTMmFWzUi6mLuoMjL5BNp36x9X7FXxj8nsVmYJcpHjEb83FhsbjGrqcHu2LSe",
  "key3": "4viQep2WAjtvydUr89h5UsEeskQZYKqinxNVy92UhuqsdR5WUAyKiQ3DZ6ECGwygbvo4oVazG3B7jxogK2Gh7ixW",
  "key4": "4e7eFmwPK9Z4UhhwvUZMHAj6th834aVv9rYRkvm3CzHpSMGnEXPsLjcno3SBBrtsfatzkaEehFi6RTNpduGPpH8b",
  "key5": "3WBf77qt1RUxvgaLQ1YXjP5G7GLedSX9KUgxru4kuq3JeG9uTgfP2GL2m19nFuWH8LbmD6uiD591LZEzuJ8fpCJ9",
  "key6": "53nQ9RdS9Bi8o9RBmRq72xYoiKUcoM76ibbu3znr9i8r6GjZ3wj8Arfc6J4cch9abnuGMdcnr1Y79BNaP9b9DSwX",
  "key7": "5EMXYSGezkSFTGfagtvLw81MxDivrZEaYMZMntSU9ePifjsFqVVQwDBKdRTBJKjHcZxzQvwiZxFLua9XbPbKLTVg",
  "key8": "2qi5Mqah4TaRTaoQjHpJzDYLX6qmKHc8TKQwsuNPxNFKSFgmtNosRvHYFW4YHjXca31RLBLApP2YP6YdHNRRKz3q",
  "key9": "4ry7NNMSachqQPayXst3pbaPoJHWvbNyvXcPtEvY9d3X37xXkZmcRRF7peTKo6z6YTSNapN9JMiDRST5K6wsMEVw",
  "key10": "5fdNEjiCvumYS3Qge5P9bEoMhbifjjfhQZdzJyS6fA51dmLSZDREF4zFUZaUsKKNUxqYxBWoWd4mJcwKMZasS48A",
  "key11": "4MVHjpDjs9k77revSZU67UtkNXDFGQg3aPrd2KyfkvJWvUy1G2Kb2TALuNg5dSou8fEo11dpDHo8iCroE2eqxt75",
  "key12": "4c8LdBt54HkqtJzEpg7stLeY4nS511EpKJJWAwK7TA5CYRBinTycFdq6D2ihvPWWzeR4KAUxAQyMKSFsL1ByDvL5",
  "key13": "54i6CA9zF7p1sEchJZAmFsAzaiVhYBwrfoAvt6qYJ7AzrybT1F8ysiKcAzjSCu53MeqrL9MHt7zEVwYz4d58BUp5",
  "key14": "53b3rn88Ys36Yb23SNVFCme79j3DSh5AknkhLd2EQeAXroJ3ZD7NXXRv25rdtxodCwNp3yJzHWyWEYjT8yTn9nND",
  "key15": "4wrczXHQ6oNcGtMtY7qYNjwVkf5yKTMg9D7CWRpKSeQWZhNG2BGADD4nLSQ71MDC5Rf5Qewgr9BoPrdqiwdzZtfU",
  "key16": "43QTAgafMMvmfcnFEbVxT9zRAj2VvJx1AaduyNgP3Bmyh1PFbm8ZKpKQr73iffroXXWUAaSRLjABaYvWDbBVFFaF",
  "key17": "vw7ysmz3c1FZzLJuUTuSSrNPcQvG5bwpDScwVqM3qk7K6EATY4MqUxBZTbNp2YfGjb59oNPiDkdTung8Dg57jyB",
  "key18": "h3J8WeePDwpAzjg3JrrtwDxSXESX2so8XKve1PSsyfDFK9Cxc18JmERNtynWakVaP9wujmJbhG9Vs6BRGT5qwfo",
  "key19": "27eNbyieeLxhLMSo1xpJQ6GvZFHeQtFNkhBynqNjNx3ieNgfmgVobwKBZDJNeskGtHVD85pozJMoWSR26q9M6i3U",
  "key20": "35AZ5GGZ2q4QQayguQyVEgVRBHEkt96XkYtSBLwbHyrkmT8k7xrhwn9XYgqbJEUbbdDYsR5Vha9vYC5rXdZMmywL",
  "key21": "85gKPpK8eGeoiFMTVbUvq4aFKQfXuU1R6sNV1iJzJr87Do52Ht28EyGVWEL3BA7C6cezr9XtNucrcpeWjXiaJ1z",
  "key22": "255pCZQK3oM6ZCrga9rPo9tNW1eVfNSfXkyDTuY8u9hn5cyjHr7rC5Tt5PxNLHMJSFxF4f2Zky9W2eJUujdjBPwP",
  "key23": "3SEUTRZEsQjv37MPWLBTwRYkssqJ3QoMUgryvnotizdyr8LAjJvMSSuxntHgjJW9pjAfmbp1YYfcnYdPrrAgWs6a",
  "key24": "29KqsW4pzFCz5tXzb7ZDPVHdQgpBUoZRG1xammpfw2bwZQFbugvHtBneTmC9cDPabC9XuHSLjA8s3zA2ujjan7W3",
  "key25": "4miEa1JrAkqRbHBuA1a1B7UoUV8iuGgiRDggXADhba4MoHpS43oikj6cFrHFz2bQvD5R4wMFxVAwEhLPJSKzKFwB",
  "key26": "2UokbcSCReZPESXwV8jfQBAnvQMWf4px7egnLq9MVHApvZTrW2XxhUNQDd573zHLECu3S1qFvTf42LJWMZHyRsyA",
  "key27": "55XssDyoccF8kPEPnKbEeAei5Zt6FhEdZgVsfh4Fa4QhtAH1C3ESKP7yaxJ7GeStNXd8HkFCcZUTqFC2XbYReZD5",
  "key28": "2iFg6oJrkULTjc9ZpzbtaneECLwL9SPDxmhg3Paq5Z8kZJhfWJg5nNudA9QWDE2h3BQuUsZWufRggSQroxzhkXJS",
  "key29": "2VYQrhKutHmztp11H2e4HCXw6y3cPSJB14a1iTrmbt5QwwyYZ3tJwTAqWBeagqBakiDijkJg3rHHKak3Z28jQHer",
  "key30": "4DFbwEzkNJSJBtaQhcMNLZUpb4zzr5en8ZVVJ25G5TFXbiyeACeqXiuSQgFbQMNhQvBNA362ea8cfpVCPsxaCKy4",
  "key31": "2parnrbr3dQWSWCgawQ9JW4U8XCapDP4btdZfUnHwqXKpyP7bVMmb7arJjvyTgy8Fj2nirxAfrBfob5fFGKkHrCQ",
  "key32": "5oqHNLqrmeF7LjSdeEbiGbfDFH8epLzjWJDtX2jiVA9Sv8cBNT5uh6cuNG9LX4PfGuPFSYsdaFarwHBRTtbmHwAJ",
  "key33": "4jPFsN8DDFgUEL6XRSfmNatSEMZg9VLMQNdTUtgVhZXd1k5Hq17iawxJbtyWo3pZBpyZEkZwtUTGeHF8NsixDWQC",
  "key34": "2MMqXkF125UVPmYCRxq981nU3yBLgvkkWjFpWZdrMFqadqyhMzNn9WCbAdaXczxeowdPyNuQTvD4qFxiLTtgzJJB",
  "key35": "HRfwzy4rMeNiVkfvtgrjAnrcCLHAqiQUJcJLuSn8M94ShyMvp6jwM5yFmKgDUxPaYkeHmETjEbrXWE9evEDV2R5",
  "key36": "Lw6tsGCerqGpeXcVBDraqSQHccAnoELuZQdEjw2sTkcHTz1EJAUp9xQPgh4K4TG81EhmbRNUCXqaEbQoTyo6qWH"
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
