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
    "3rTnmBdsHcYd8JnnFDJQdyWb3tRdpo4hFoi68enDnWUn9BXZtbHKNxes1QKsArqRCcS6HHtAAVmqpds8Q2ByhDoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPNPMeKjr6zC8AeydhDqmNdM8sLWazSifwuyhGwb4SKyMgGjTAqn9tudYRNDMWixRtgzCTADUpfE154hLjnSSE4",
  "key1": "58N2izBQNJyJP4qSAapD6ER8pb43HLS6Z8zx6MJZ1u8dEqKKEtTFUcJ8M1b48KXWc3yoUHKrnVbdH6nRfGP49PWm",
  "key2": "5EkL6ugvvaAFDKWN3ehqMRWZMqBaj5Xvotix3PMpP7ZZPJErY1koetABAg3qX8f8MSQmo7bfWWHh27c23XN4YnnE",
  "key3": "5Z3iDxTitTjeAD972hT2fTMxkraUhVoyjLUkosJqAqP4XgstDruxHPVK6cvQoFNdUdKE25uRQJedXnFAkhgKmJFM",
  "key4": "4gxpW72djg72XUPWMbuaUSeaZTVaYDy5r4y4VETFZyoVMTGySw1JQf5QP8xmW7cYs84vzDbVFs3bq72DSRzGQggM",
  "key5": "4YPJuLcRF9hsQNPK9fGnaPawXNNM9t9qScL2zQa5cnvSj8N5xVb9ttrfrL72Ta3pcxKYcxEBsfPFbjkG5rWTSWTs",
  "key6": "3gJtjnAhhTNcVcoHag64So6wHgfodCNa6eWecRqZmWSeQk8bhnPaTPzyXsF2UK1YhQ7KeD7V1sJunyNNsdHcjiyp",
  "key7": "5iss3x9TjuBi9bL9yEDxi8oyXoGzkSyZBPqg3TDCujuPShcVYi8jc7GH74KK7AWVonNcqvEwCPzvxSJ6s3jtFJix",
  "key8": "5BeupWyyMbuWQdpQCSMz2BiYiw5RRMuXDd8gHZEXYS4FADkRa2ZqDBg7z6FAWzNQAtFccHHPNR8imvm2eefDRnL4",
  "key9": "62wv8XP6sbHUsEByqXfZiWscPQLCXiNe1GoLQCSKUUfXFb78TeiY72xmf29GCqFN2VK6hwmvn1mPWo1HaAq4PiuE",
  "key10": "61nVe8H54KQtNZhNSALoadbfTUCknBktHfMC6WpnYXAb85HVDWevsrnDBbqxHRiwsiPbtYyivW8mMXpL3NbeVxK9",
  "key11": "2ERZb7SHrp1ZhZAcT1Tf3du7MmNHgoHaR8vY9iZqQbWPQzGu6ZA3YL8EUskgNLD6UHZ34CPnPfsKBbWSDyGhjBRC",
  "key12": "2NFafqoud2Ac25U3sVUssDzTo2vXv2hiZu2rHm52VhiYVa99bHNMMVsjB5EJMxzPN4rizyPtwtL7AmQymn6wgXtF",
  "key13": "ssKKuE1HeubbuGz5DQtMj44ULAoboMULmhyKDG3TrNq5A6wbfDFsy2X2c6cSr7FdZf5cDHd48SSgobbY5fkDhyX",
  "key14": "wxDyVQsJgoeCbq8ho1YPggjewuw71tu6MQPucBAyJw6Z9u9iRrinLfbB1ceLDjb42g5xBHVens3Eb7gsUgjuvyB",
  "key15": "2mhf7rDLur7XqJYBsRFraWmGcmrrqUDM22AACaDkM2HhGqwwBUXrdk4M81uDAHtGUD7qLAyfbAf5b1cH49xsuwzL",
  "key16": "4m4u3FVYBLnV7K9BdY4CgLDVzhvixg3Z4J4qKAzpRSpKmvdshDDdsmRtpYCVTqkpxiiT3bSm5EkADjYj7zjwqiEp",
  "key17": "66zdwh2CxF4WNNMcXpLAMoc5FmVX9LCQfD2cLikbqGiM2fdJsWQkWHoD6Pu4h7TDCXx6AsEMMNLZkxSPWRsy4h57",
  "key18": "54NE4bsgDef8P24bRvsjo5tY6w8k8b2tCZzTLdE5RZa1kVSFM3PkU1V7CXqKax8iWWBuK62JfK16VAfZvRmLKHT3",
  "key19": "hUpQVZquBf4rkfKUCsZBZWiE3j1ijY3SuZQVBvxYoungPrMjk13exxJtvm8KfkcnxXoUcuApGhSvcRtNheTYxLD",
  "key20": "3WU6mJQwwUWTvqLKzMJpcawQdf46WNGJv1Ep8g29KzKsn8X49rxZRGn3iAaScrxD7mGqsH4cuSovyzW912JG8uf1",
  "key21": "2qgWnyjnX74Qvx1c2p3WRGdxE81TdaQvFcfEc4wK7pe3CdhCwwPJyRy1NnX2GnPBGpxXq6xuAGysMRhQFAeDucjz",
  "key22": "YbQ8EVUtNDz8GT8MLqZBLphZ47fpeJ84TVpnapKvTey8bw1z29ZNzbJK6e9CvReN156MRUDgn6QXiDEemF1rpZG",
  "key23": "3FxucoLA5fQJTfBNJ8gWQ43hC317AtCFZH2iCTosgRwx78D8SYz7Loz7sSSNzGynxDGmS3JxNJUYuUqQSvqeC5m2",
  "key24": "5wRjexxXbCqwEURNbr7ZQEhcZUTtvg9eUuDRWRtMw55UsWTregPp9fS3nWhyuxBQN47dUQvdBddPtiiJfi51etiw",
  "key25": "626wZUmqhSXrTuEEwK5P21XgceDkKhkpTCq5E5NKA1v8dZrbwGJNhrDGx5jxA9RvQxQTLpQ87pYsGeuQohFQPgZo",
  "key26": "4tsc6Pe4wtLdVLjRHSAL9Br359m9yBaT3p86sDHCD1tbEgtx4oW114NswUFvW9yLysSsAf6ddzn9NbaSH7knTxS5",
  "key27": "66MgAFwp3SK55pxw1R1p5mr5SD3TaWtEPYHbhNTnSzuerbUCzkz5R7cd5H7kXyLPtn9gaRn19Z3kjgK8iHjknjan",
  "key28": "2oxtiWgR9TCKQgK5Sry95sDUQHds9qaAnQbPY9UVQMbm9Emdp2rwv9irRVqKmrT7zS6TYHZ4Z4DxupUfYJpaW2RA",
  "key29": "4JCNzjj2hKFXkXftbH9s8vmWkyETTGRr6AgA6LYPzVLCEMorNJzphzq7xM5QykaqZRoj5SzMzFn38CTk6rdXiJh",
  "key30": "5zaWez4PG3EFe6iMsBW2UTHuUiCRssCPNdoWjJQNHkcwboWpUbx5FwsLrGaowF48qDHApae4GYMkpkHMWxuiBk9z",
  "key31": "DDeAGntXrycVPEqM5RPckbePY4KFRBtszgfk1Wv6qJXK7uupvqz6vZG4C1zv8nhKfXqsFoNK6vKpSYX5WA3yzkp",
  "key32": "5t6QVLdKKV8HPd6kWLwnnmxNaA4ppbxszMwjAGMx6dfpkh6D7x9mX1fk1qHkutrQd3LQiiWZgQekSy2v54mD4WRU",
  "key33": "32CscxQiRQnW3MCBCTq9TtVDpU9MG6qEGkCuagTWhTKms2hMMjrx6LZFnSU5gN53vYBBkw6aDadXn6tWBXZeBvL3",
  "key34": "5AhtWNet8HbZ1gGaEPJ1juEhHaRewTHrPECN1qqLev8ToAfzaCEmCaH4d6aXWLneKtuaenS4zN1E9Y3mRA89GjgY",
  "key35": "p8GXcB7BYdxwtAC4NskmNWeydtC4Y8F4t2Xy71vwWWkW7G6M6ryL6Uk9MwZquSKcB8kPZ4tYiBeoriG7GhZxYSu",
  "key36": "miwzknBwUErrdQP66gEQwuAr6rrSyRujgLxV2bkkRXEuKhJsDrEVhBL77R1Fmh5v3Zu9od6AgqFHvAibkyEp3AA"
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
