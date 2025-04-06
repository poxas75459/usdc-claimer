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
    "3rQy2Pk7BR8T89BETpokc7UFWpDgBNyf9zHqi8jnKeUKczCYVrUhh9VfdHbwdaY9gQJtSgT9jD1ijRcjwZkK7Jko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTEGcC4rTTqGpKmrVEUQVLw5m8bf6oTehgsUqYL8hBqrpxU6ZnF1qbTrdNv3Dhf7ipkooZfmyYEEQnWBd5tiC1z",
  "key1": "4dwQjhpmB6uFuY5rTD2UZJgmTNcVKSjcAcahfLymSr8TP2yVMHFFmV8V5z8ijJX41SovaK7yX6d8agnYt7yBLJzL",
  "key2": "5xhhcYfWVRLpPNunDDMWfFdj5Z1A4GrK7MKeEsduJs8Lcj1rvLeusGJ1YJmHi2GWZPKw6HMbjkCAuJiTXLU9Z19V",
  "key3": "5qRnhDrwd3d2qv4E3ChrTfoUWRsC9iN7VDfzPmnmKu37goEmWmAm4Zw1pmXTh1zQp1yFZozScpyMRDSdsW963xeS",
  "key4": "25TU65MKz5GGyUXMHfbEtWXjWnU66mqF8rKNZgeVPFmp4kEi4iF5U8SxcSgnFaBPJy7heMbRzT4HFqhTbWur2y35",
  "key5": "5CSrD7Prjbt5WAC4TthiWZ9yWUwyDUA2p4oshkYNk72Eq1s51NUv5Ev2RaRJg9egx9yzaZnB9stt5dTmxr4JGMU3",
  "key6": "4Dey9jmfw299p7ostt91eTBRRBzCZupo4UDZAgTtQmGPKLxGCuqjqXsixvTFCBukPoUnyxvWAGScvhoawjwQ5ijf",
  "key7": "4NvH9TRAPqa76GX1u9fEFaunJZhjN9Y9gKyA3oqanGkwYd5rWfxY8TKn2b3NmQyDK6Ym2f3D7dA926t4RxXzBwMh",
  "key8": "Kv9vyLnChQR19Vm9VUrcWR9b1ND1rBHdVnoTGHUNdWmJxEap4fvd8EiBNSUgWAsXR3Tye236pYT2oNbHfQxjHbr",
  "key9": "5URtpDvN3rHHpPSE8Xups9zBAWLQmuAksddi4dUSBw95SGLPoz2RRVuzshwwaVBptFYeh4HLVrKzs28vi1rEiZ1b",
  "key10": "4kckPwjtKSsEyTuLqX31T3JLB299XUHWn4Pg9ThDt68WDg3hf52xfyujhqvQ93FeduPvYdPq2UdhZEaSYjAz8wgb",
  "key11": "5Ytmf1z5QY9a7iPvJMa7Eva5mhN4mSha3x65p8r287cwPQoyifjd7FD86mkripGuFh1hKYxZ2CNUwfvWxydJwHbQ",
  "key12": "2ai3bm9fE1AzXWvE9EaQSQNt9JMhjYh7VbqeeSw2gHnM99mGmh6EbNxz54w8AJGXnJvUAcJrayYxZ4RpefiXAo4j",
  "key13": "5kJtNL3wr9pPy2DMBAfMncEK6XXeE8QYjfXWPqSPk9VSJJCHG86V7jduiEsHj9cF2FSHioRQUqtzAgytKWoDFccf",
  "key14": "2GEGQZ27DpKAxKA2RShsw93Y3fkiJzSSsuwekyTE4zsLVziv6FYqPzx745Ah5pAguJjULYmTyCapWEbas5bwCK9D",
  "key15": "5NfyTGUfZuj3BgLigiXRzUSXwcAH48pUHAvGLBid28DjWxzM2ENv1F3tWDkJrMZStg7bmDzuu9yrNsbNGBnWPqaU",
  "key16": "5bxr5tidgFUSiCsBaZF3ttszhUf65oP9iDy8vJ469cgPCYx6GsSj5WATQUras4FZgyKU1hbE3v8MMAXhpcd6BcsP",
  "key17": "3eVrVMrkWpuGWrd7fPc6C1iwqU4sUkh4sWWwj414n8urjVCoqR5m9yUo9zpWpZa9T79jcUMT5GtFFbYW3zZnSD27",
  "key18": "2E3szqLk2jbWFTCN1kQvNCtBehq5Jf6kQWhJ3o7tYM4z8jcDPiX8KDEzXMbRBShAZKrQNTBk3CeTRsRdh8kCxT2W",
  "key19": "5VuKZJajjLhtcGML3FqQbhyeqzs5jBpvMBjA74Q9CYd1KKkPpEen5cthJxz89dSCe7c6kwyaMGpAuP11xFR8A2vR",
  "key20": "2qCekNPTnw6LxuqsCzAKtVpibu8Pey4R6EGjDRssi4VRMJWdxZzYXrPpsBFMp63uNmG8fqGNPytE2waHDUoUpagq",
  "key21": "33uN5PR6G2oPDpZeL7fDcDLB4CbSV8G1LrXyDSFmsMbKdHBCTGr1e1pDgNpcvGtg5sLYX21J9imQv4QMW6wGDL2a",
  "key22": "2dpM1cZubXvTS1UqdvaHcSezqHNwHPLeAhaHQqF6yhDdyLaV4wRghFu67JH87CFuSYqp864FgC6m9Dhh55kiKUBc",
  "key23": "329mRHRHaxQmPP4gZ9SYMTxKsjzErHakDwfUd9Mb1gnwXC6ecF2h1ZcKP2wUvMediRSXhXoGyyTdALiMNjCUFsuu",
  "key24": "4jezyttiV7iWLt3bgEiDhj4mk7MXFfky5fRnMFMNgtizSYW43hdtw3FDR3eLDytkbGtanr7amRLF8zgHcfi5DRgY",
  "key25": "4objGzB2pzNFXDhBvyZy4A7qyiEqTXhmuCzHe7QUro5ELmdzxCVjANRHCoSzUnffxX5fLep6wHyU1VTcPd5U5NyS",
  "key26": "2F29EkiPy1Z62ZHjCXeu4NxKczFmz4DqR8pet3Nm2YqHWazGQf7QSiCZRTw1UzEY56yZBNRRE9bmDDVgJuxXyVvB",
  "key27": "4Zgyo2UQLqo4BcfUX1gs44yVnMf6snqnVAyX15QBdNcFqyXzbTLLFSPdGeP7ra1SM8UQt7WF6g6o12NYEUg9n4Z",
  "key28": "3wZs9DEz6qexfYNxiLToGZh6CxKgnXXa9Uq1eAERmjwqWT7CagcJhgvMytZYdjqQHDPsxbphKSpEXLJcZfh7Z7xC",
  "key29": "38YuTrnApBabSmcoTYxi9EE95Xf1dxNnURCf1o8gTeeH3Ce13h2fjQgUVuteDhy124capjjNpPtsuaf4jGSBNhM8",
  "key30": "2KEE93pz4hh9ri97HKmcGsbubVwz7KP3ury68HTqUAZYC6ndE58kdLknVhGDUiUhcycXpNRDURuoEXdftZpnJgcp",
  "key31": "374EsSyMsvVnsYGGgkDdf9sLwp1X3AAiNUAJ8Xj6iZ5QpmFj5BDYhMr6842hZFqV62PMSiKVfSX813Qe7Sw5zAs3",
  "key32": "61C7wRTuQwQAaPB1LK7hgqKenTyCbBHWgKoWEJBnP8Uq4w6ik7VtnCfaRsFoaVSU46uVUAo5sukWPXexEwaFtALS",
  "key33": "Es3yd3SQW8q2KcHvGqj14vY1W8c7CLJF18DraDpLHZHzqGXsT69cmaYkn73DQ4Q6goL1NrSkydfh4ehcfjmiEXV",
  "key34": "4GNwfpdJvmCMW4Gx8PCZwoXKXj6W1yEXrxv6ZEVT9kWoaWFPJYD8BASWG3NbBfSNd5xp6wXJ8nXKnfXgLRcCGjQs",
  "key35": "ju388q4Ruft79SR4zkHN7CD7MgmeEVMuG1V2qDbzZ5G3jEkRkHxGBJbfs1AQmMx8e7at5Pj8mmsoCJsT3TMwrqm",
  "key36": "5kL9hsD3W6RkUqPrALNur5fyigwwNEREknNGVBbPDRfsnJ5ceuPHSWwgofF8E9qAy2FEKGpGbrHjoD94yGBgYkQq",
  "key37": "5PKkjVmqkBNSnLBkumDsmdcv3pjBPc9d9XHuwyaYpu7WM4kdDPqs9oMBZiRGzMGsYgyKZBew6szTQVCGmmaw8u2X",
  "key38": "rBk2oX7BdUZ8qnQmu1jJmUKjJZFfQxhPXm162jRXGeKs8GzYy1X6jPWGjWF93fhGLnjNvAqw5TZ1DXA9MKZoxFn",
  "key39": "2C8799FSQWwUdnh4eKmZJa6v9uL7U92naZhGyZgvuiKHN26irvy2KFPk28SXkCZYAEUJ1BkqVwV5Ky9h7t8zag25",
  "key40": "5DbAoao1wHhqQcmmys4cArDszfeqAAjWRMTxY8ESYej2tPifaQ6Pv88ELLsk7fXyexZhBP9A3Za7j5e5wySrrWJE",
  "key41": "2iLvjEvGWxj8cDXpUqp3Vqo64sF4Py413NSN1UiyfppwJfgDwviS1UKcJf9e4mxxquX1UbkAX5JfhhMHZb6xkpYn",
  "key42": "49LvyFXpmX3Rd4Y28VQ9eY3fcJUbh7UZH3NrRycKQQgggt5hKW63QaHUVD5yhirVgSh4ZnUmMHMYsJ94oP1bVNcu",
  "key43": "2xf4nUmUd7eNW7Xvw3t9Zzz3dS1YX4e3kvjvbMSax9NSxxDoRV7xDovGXLS63YtiurwAvnVAVGY9M5aRHqma1AfA",
  "key44": "4Gqop4MU7oXT46nsiiqm3y4vwU1uTAeBqQVpbA6xMdjEv2CvgWz4aELnLZ2Q5piSUhwDTZ4AUNB1M4awVnEMMSUV",
  "key45": "28oaSdNMcgXGcetnvtgcF8aiNEbx8fSmvZ9PUQNYs75iC23k32GXJCsDxxTpnJWwVa1NYNQTZQZBBfKYY2Piumw8"
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
