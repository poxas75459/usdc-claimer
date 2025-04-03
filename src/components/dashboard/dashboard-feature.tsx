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
    "4Lc7zHdvg5UY2F7B2PxmAyh2sHHusis1Exb14zoSjt6Q6fZ5hmTSXJtmuT7NsFdGo49eB3sGxJAwz3SDqv9moiFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cAixDHwDpGzxzEx1az2tAipnTe95rzXHd8894q8JtRMxyZy6R4yAXTwDUELJEu84Lbc51TAwBa8B4pih4Gx1qG",
  "key1": "445bLmPLXCDdNuenHhTrZH2pWreajqVv2LFSUWgXNvoL2S2ejbCUg352va6YcL2V9bt9sTgxvbge87v69n8ff7TF",
  "key2": "4wUJyM68dYkXd56MrSGXNH6mcV7LSjqztHUtCqRffoJZhZ5vWpAw8zisBNxYwbjDJzwuk5kDqftGrcjqrzupzfd8",
  "key3": "2AnsaMoKg72pvrQ71x9TC8PfoFKujvqvuJ6BfeSb9SA5TXUeU9zg6EcFQzj4wpDgnoxMJ5s8rHJtiwPEUuhJLZKq",
  "key4": "sCwUUifDjjD9vza1DHRaZAvHV7KH85uacZZbGNMQ9XJLnmT1rrJFf6DpgsHLH9TwribSzijVUqLeSVcScAcwhHg",
  "key5": "5D166YvPu4kKsQnNM1sjj4T45ssQeJWFgnt1tSQQGoaV9L9HvaUGQDsjsPcCFq1ncqz8V9qS6eCT16JnkoyXnKiE",
  "key6": "z1cucJcimSWE94zieXXDLah149kaaohoXx9bCUhR8GWLse44UnSVHLFGJpnEEemdFm2WGXnTQidZAovxPYLCmqh",
  "key7": "2WD2rU2Ho3fPWRrj4pmZA8dR8pb3kfQmALoD71edN8FKhspKqRo2ReYpEGRnb6zhYXaxY14FukqyNN9cDGist4dM",
  "key8": "ZrbQvZBMZZoHsUji1E2MG7vP6nnKUQ55kpbdaaj52xJn28PQB6yWYgb9CnFXurCrHDPu7a1EH6HuwaBdb68ijP4",
  "key9": "3btDCLbvfCKunyPVLV1omynCHrgdh1weZS8Q4tryUKc8oPa7Ax4j5Umv1ot65F9QhGTw6nghr7wHAUZ2w3cMJcKF",
  "key10": "5gDm83QEdHwDzwdsodU3HjVPchkxDk1xexk7uVT3rkA84hUTtA2Sg3CP6cmpCvHAZZFQD49u2suNso1VtZgmDUai",
  "key11": "4ozBLu5kz8Jkpc9jYMFc6aW33ZHMqFqRTmSLN8Lp17QgiWkQfNzkpswEhuM352vhpwCr1mv25u9qYvLDr4XReku5",
  "key12": "5ivoNtYUSW7RFP6nmRVA3MGakymKXKAasJw8jSHSfGFz8wNjbMtKgC6K5cwHPfWkaEsmoAML6kMToABi5agj6uaA",
  "key13": "4jGeJD8EppRNY5N74yXQJJnidXwmJL414M1C6T81UmPA9ZcEnqCFvj34uroox1q3m194WnVrZkX6jyjQTVL69rub",
  "key14": "58JD4ax4Sip2AqATYGpUGjzQGuoTTpui5bnfo96VNhAfUkxUi6KN9wrUd9NNM8hLXdgDJBwyLEyc6v1s2k9JdcGQ",
  "key15": "5ReWXyiB4B3rpvokEVZc4Amy14yFRw5gaRUTZAjsD46EEpBpg8yD2Hbn5VNYUgc9a9iFETcBqem5SMveyPgUGJGZ",
  "key16": "5b1nNHX1xttPxAC9mHqvCKsEfFY3ywB4eCdWvYY1dbot1jbuc4ZzGwtkgNCgmCf8BVCNVR2Rpo37UJndxUBL71Hz",
  "key17": "54GNBtwtE9iNpcBa5h5uKkeV6k9QoF3CHDhrcdSrAYn1C67uy4VEHUsAjp3tgw1WnbCRHMYD2JBUh7yN8sqBZv2r",
  "key18": "27GCwe1dpjiP4ggp3nsENwnXs799FbeXE5jm55zr7NvEqUp9oPdxH1uHK71QmsoSdB47K43J7ar3fQAeVsWpe41Y",
  "key19": "2q3dPZgSYL7F1pCEjMuiejx34Tf3ad2mMxFWfGkLytLddNVxv5mbyQZ71X6j4BdSjx5Sn72fdxvV3sAxpPyDoZgj",
  "key20": "2oJzVZCJnE1yyPmr5NHtrxJ6HgbPgGkjekdvyhcDvoyhiCCEQhaQHzYddNg3eTasbEwaqiSZDtHJw11JonBJd6gs",
  "key21": "B4kZYrjtLXnQFcqNzPd97xuU8L6RpoUyoMxtRDSxbcUgKou3z367gYquRfHsKD9b6USHq2H68nHnCkigBygR5QF",
  "key22": "3NuMKQNffo8CyfvPrcqnK1hx3UyEj1RmUbSKYKmvFuXLVzQdSPBaid6nntCtycDC31iTueo5buWTJriW9A6T3GVp",
  "key23": "4uzCvFtEckLpqmBBteCK6PXo2EgkrrgRdMNHSqs7Dx4wdejqj2GqKbjLcrvitRnahvCKfYgdFG15u6fATWJVbiyK",
  "key24": "3yTSqaDMvTwFmz7GPyKBSZD6meCGBXXSYLtadbqrA23oRZfdvfuFZYa5m5JkXF6khwsKtzJ4ebagPa81nd2eLEK8",
  "key25": "53wqEgcrr6zexT5EWMDfYrFAWrXJ9e9MhUUfqBGxwmGso6YuctaUwwjd8rEnZi1fhNXnTbW1ex1VDDUMA8w6db7f",
  "key26": "Cbf9qT46xMFuHwzJPBgYsHVy2q4dZ94ZdBxWj67FwkU5sHzA2HR2a9hksSrBp2aPVB4SNj2zZStf4iurp6Dyk1t",
  "key27": "5tR7xc2wCu5oUbWBJ9UCCWks8GXeMwEGWVfojeE2BpAEfzuAaUpSZ6HjuD48hV8KRZ7g8Yy2kuvVEfjr83U34jC7",
  "key28": "3Zh1FyU4Xwazt7LLfqXFME3kjhjmhxV3Z1QMw9wue2mfePn8zZC1KhuXr1vp3w1x6cgSMFXAg3zyCQ61ACpyf3Cq",
  "key29": "2uhDThKyhFu6rhsZr58NXKeuM92tgHyL2ppRyVQZcDrix3h7nMEgbHCiabUV8J6MiTk4Ko5wqdzFgckU2RXz4CpD",
  "key30": "4WFdcVtj5xn1aigGLzWBNC8F5h2UyH2LGnHPTPLnMu2pwGLXqFzereF4b8PqbaMjyCDv4ZuCXBRxGvUasQANPchE",
  "key31": "4Pq2aBmMG2R2YPzaeugwrWmApQWNx1EtK6KSirdAZHXvr4bx2voGRVK463XAr9UcRqAVyHkvRx1HgwgECGXZW7qr",
  "key32": "3sXpvhLnXjMJDQ2XoEUW6mgaVRiPLcgtWRzTT3oEv4WjQEAdhzLDv1kG2jbWVNKn1U7Znh558Q4LDA6t8jEewziD",
  "key33": "2PgNvAXomz6XyPTHkWu1aApDJkLa1n3UNc8DsNg9AZwptdRQcTEpAAGCmFNowExVhnHsj7yPU5PHVx2K9mgLeJN5",
  "key34": "5EMpyixfaD3n6eWiVRUV85jgBnVd4RFr8rV7PdiiTxHKEx3gaF8eLYAkJFdwU5pyutXGzcNJR7pLhBe9viP9ufSJ",
  "key35": "3UsAtSqS9qPAXtuiqfLabtPcA5C9A55uQ4szcPNcJDa75cNqtqJBTx2K5ywvNv2gvC7C1DCkL3Vu6B1yAGzj4Xuv",
  "key36": "4LhT8ZtzqupzBTeWiEGrWJBFnBnQQMwTo5m1RcwVmiNCmuXnJxaVDdtTaEWaNSio9vuQwku76uPuioGcjs58MVQJ",
  "key37": "2ivg3JBVDvFB9G6byjuao6r5Xm6kYScrNaBDjxb8CoJtrygQBsrx3u5t8afqnqD1Cvy4yMG1MFbrCWiiwHEnqp4Z",
  "key38": "TqmkZ3DQFEDTKyKAUVzrmMXiuUVKq5ShmKYVvM5tU4Gm49UMTxbCwNUynCYdYzagf9H9uAL5yAtfAEUG8ouSQVQ",
  "key39": "5txkPNbDJSTdcmGzKR1fvrH1YH5LS7GhCZjuLAUPoYdpPVZmSL3B3dbYmLG47C4DjNpAzWmAbnMrk2y1RyuG3Bjd",
  "key40": "9hsGbCmw2xTBWNQHMRnf1kTXWvivz3b2BvrS1rMN6WdegwDwmTKApiinRFLyDST6QCBA3VGwFzVB4XMw6dzxxmq",
  "key41": "axj7Bq38U2yfqPkaxnr1Sf53WWezrNfcJs25PDQD12EH84hrSzS4Bsnr8oBeCxF9XEttbVXHfbxGqwCQWDjLWZ6",
  "key42": "ToY57k4519wxsDnqySiqj36AhPrTBtw5UY6yeo3HBWURMTFYxv4wgqw4ewm9RXRMReY1tUwA1wVmH36DudVc4cv"
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
