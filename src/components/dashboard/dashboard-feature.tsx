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
    "2CCPJw71d19Gud7SmnfsHoQ4E8uT9xjaZT8Fn9fNzmQYMoiF4RHjZiLnbmBHUsi7nwTP8bqrEGyZJpRcYD9VaeUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdtMbqc12NJGxL1r2AoHgmFcFi3hKbMz8ppgkxEy2gAzod5VGAq5the2rXdyoJE9VZE4oJCBKVzTPrdKz3zdZff",
  "key1": "45eN8VRjvwCoHq2ezMQzh1RPg1JJELw8ysuUicWzXtKPTwvv84CriQHjoU5VMczqiEpBkXc3JG7VaY5AxQ3jjbtw",
  "key2": "AmPo5yjbuq9NbqxdN64NZoLqqNs5zopCKzEBYqHyqC74SBjxCmW8abiSyMR34ZPLDr85Q8xkuWQDPC9Qtp3nzCV",
  "key3": "ZZHvFigxTwiDite2yvDDeSywDjz3datVYB5PRZ3s2WZRR1q91MZqD4hFvnwtfpyn9bjHmpYNpRyrb2NYkVtQubr",
  "key4": "2M2HonwtL9tRsRub7qSfXxwmewpjmr4WLwkuoFoa3DdUpC4bznWBEXjJpaZo4Ugv5kQHWTRti93YWyqYRHZqmnjv",
  "key5": "2CJMKhLyTgkfbSvbnWnxR8unSic8nqt86kQxz7QKLBfhhEhPaSPF5pz88Gv5oTD57GoVaGA4cxFEZwnU2DfuuY6w",
  "key6": "MHmgiUdpW8SUVQJdGS8pZaSFDoE1wQa9fKEnms6jcRhFgXquVUVNsx7gu6WD4rpNsbkfvDoVQm5P9NWwQ3eSmG6",
  "key7": "5AKaZBAFVU1woZSsq2oqLnxcBxgRFSRSf1KFTwPF5Usg6hsc3vZir3XEY8jiKucgrXauwJ82wt92D7rQz9QmsPF9",
  "key8": "3FMMq3Y2CtEPxKrHFW3f6mXkHo2X3zfSJsdnHaJx6BNhnj3S4Hr12tRakgkt431UxjEPaNcM12wjqM9rHrLkhFtN",
  "key9": "4yjpCZRPsETc6y2PspFxZqsnEXvVbgokaNy92SQcky1Uq82AGUF7yJTmDt2ime4gLJCVpGjoctPjwDWsmtaUXmhD",
  "key10": "2xQEAK1wF5UswFvyS75PdE1VaDsrc7XB83VPp3vmPxsKD6C7vHrHs6V2pioNWACpnJ6sbZLBo1bzBNsUefn4EFVF",
  "key11": "5quC9sdhMqNfjbrKDcNcspmebzaC2AkqBu897Ts6uT8mYGK1dbB4cSrSH7sqW6LAcvxKFWQekMmd5PHrNpeysFV4",
  "key12": "EhozkLZyWAhYucTWXvwfbESDmP2xzJsDEC1dLd9yw7PFpjeJCixCwrBZPFy14GGU5NShW9pZqdqJLgLXa24Uqaq",
  "key13": "51CJSuq62ZxXA2whi71JkDKoLvY6t9PDFPHi1Jg6UcP7PNe7cyZohyH55oV9ezfaJ6tVGW7BNuWzf7PVD2Xb3L74",
  "key14": "4L2qkDEgMXHKKcbrYxnVBKQQwMUomxn31mNowLbKzzXU7N1mDGzMxX5CR58qBPWTzrAQ6jvgyEUzrbDg5HXitxeV",
  "key15": "4P7St2ZpefuZe2HQnMhzhSx7nJEa457oh5oGyL8RZUjZYt93V87QY1hATsjhMka69sdriYwzsHbeyGp2yawhTu8t",
  "key16": "3KeJfZSEwzjWWRsUESzEuYJFkHBtLUh6gW9NZy9jiUuatpUdL6JWuCaDD8UhAVfVSqNbkiXa5sJN3UBWR3hrHjDg",
  "key17": "22o4E3vW5aBa4QWVC69ML2k6YZFji7sBwQx1kGe34EuvfvZhFNs6f68cPb3VqRPD8xdHCzSQzZ5VjDL4aQCD3eEs",
  "key18": "49BT2TCMx4oRU7qNZTJDbNYcZ3hZXrZTdNSkdw83q7Gh7vzEJseAHSJATYkau7AeMQmBvJZgpLRAwZQHBoyzD6HK",
  "key19": "65qu4dAsWFbVMdLPSSPdWBPXeRMQKaDoBBUopG1ExkPfVvS7TXhN1VUAD2kx1kThwD8bkQztUxt1LBhko7wxWV4a",
  "key20": "3cpnkrFrULUG5EpyPNxtWumSDRDKPx5PDpd5wCDnR2F2s4vhAzX7BAbsptfb6DkDFz1KSuZCTkST78KWQhV5Y6uJ",
  "key21": "4puYxxHqy1C4qVp86jBvjVzVt8JC1PEeCqThbGoPNYtRNX8CLMDPZtuqsYPezwWzmGvXx7KPPxK4ekkq4e4V2wq2",
  "key22": "124rpBQKh7yTvrMB4vrpQTKUuH5bsMK2Ugqrxj5PRsqaA6j2xU6qA6S6h4vhADouV4M65iuS7RQaaz2PoUtuaLqh",
  "key23": "66xKYQ8FdTvQtbotiCopCVSwWG7pTeih2Ytk7s4nz7ah7DxUXG5AZhVhG9KghmQrshGbs6srs7kGMZNVrcEfiU5c",
  "key24": "5zUDNENg9PA2YAKyUM81PaWMhotkj31ekF6FX5VRQTGCpQR1Lk6HSmKDxbtnqvyx2H4P4C4tn4W22kTZ4NrCRtdA",
  "key25": "v6GimmHeU41kSMUZsuP3bWt6L9cc39gn3EXaabjuEfdXYTKPNq2T7b53ByLKQEoSFPjoSgsy7HqsVuzJ4Htcyps",
  "key26": "95CJXG6MhmmjAR8jrgQk6uevKZqp5doi12ULBZxcmzUw9Gi7H4hG9Z982mHPDgCUgygzczTFZtCzuAtF6cM1Xet",
  "key27": "42XzHdsapqYbrP2eoR1mrve8rqRa1YkN5ECbRnuck9Tvd37Zc6SMU1T288ZT9PEURwS4t7jmxZkns5dcYNPqo6Po",
  "key28": "pohzy3mBev8kpaVGc4THJZAyFJtWNgZBNUYAzXY9N8jPobJLmqSRbahSibXkJPSYuEd77ERUh2JKoBEEW3adStV",
  "key29": "2X9wWDLV83SSC6kNEcXqTv2m9sBctqvAyUARqiAvF2q1Y98Au8ziNzsjFWJbccQZot9cUqgnotBPSEoUQuqT7FfV",
  "key30": "3FBenYWXb26pLPWFLxysAWMGGHGd2nHoPaeDdNdoNHuLhnFYJLXW44PVKfd45jEYdhXK2ZonKDL5DBL1cUMw4Aqm",
  "key31": "3sbLMdncCX919eh2P4oWNrinRLxrSHzVj5CNqgCyTCsd3wEDGVFZxfed7DNSYJ2Fab5Rdv782cPecyZxATjk7e7H",
  "key32": "3XFBcuBfXqYJeTLPeuN6goCAuCouJvpQYcy2vSJ49KzqnsJksEiaNWeCX71WdcUMKoEXscTFdxn31eqDAghmh34Y",
  "key33": "3uAJ8QmZ6zLPgshTjQFwRpPDCUoGd7LtzLhxsB5CRTrHTkD8keDihuohpCkE62APqkAsLBHZyh6i81QVAL4uhCh6",
  "key34": "9SjnqfgYkNtbjBtwzXsZhpKgFMnhUXoeq4H99kjAohxF62cn7dZYeYru3sQr7FggnyPGkptZD3TqYfXZZJU7iwZ",
  "key35": "JecGbxp7jqU2ZTYsJweT9feU2hSGMKL1wZQaDY17yZVmXuf64xARnDrcm2mSjAcPSVCLvHhFyMS9xBTNBpqUkRA",
  "key36": "64Acfz3yrXkCTGsF5svDMvbQSgVbgiwwgjgzA5YLkwttbsaofDeC1FtZKjhe43czFZ4vQfd1vYL64uADmNLkpqPt",
  "key37": "5yt4XMrQHdp9vPT5Cb1wtxyVaYEmXABLQKVR3Woaa1EBN4VUBFbfp4DrPhGDkprznY4dE5Uwqu56kZAtjfyWwj4V",
  "key38": "5hQyjrV11Sy41V5VDQp9kf1wwkbzCnTgxhWYFJiG1biVT58yX1UTxmNcKaRM7ouNGgntuyLuckjR5NFyAAGcYJGY",
  "key39": "4XBkgY1riR5JDogSbFsqkmNu6anNftWpvSd3vFjP8NRhCxeDrocsH4hEpkbCi5g5FFJt5snoLfziTeuZMR3MSVZG"
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
