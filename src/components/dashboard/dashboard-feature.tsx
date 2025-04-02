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
    "5xs5HoX3tJdcm1BC4dfyJ1zGSVYPQGjLnJ3Ywsxswhbf74spn5xnuVwrGU8HH4Hx3F6RqCosDZ5Qzzj9ZbeFW2ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjRiSvLH6Re8yraUZghnaZhntmtowKTw6jwxzNFEtvEANcGnVVX6uGZNfTP3dVuZteZ6M2sBbztpdh5XZK1z2e8",
  "key1": "2gukChDs5qKHeJP3Af9gVEYHcJwkPcP5eNdgavKXGMUXV169CT2cAanzSxFyXKZW7rePJyq2Sye8jnvLAH2jCaMN",
  "key2": "37mrkohVK7tXjDYB3i2UeG96by9m5MyDX2ZAQrtuGJjEPda9AfUh75Pob983JMPchYUfsqoMgLQC4tBagEfaEcts",
  "key3": "PFt8CqX6A2pQXkkPMRPaA4JXFp3CvDFyqADvXdu6f2XEPiyY62wJTXh3dykuEpAyfwAZvKSDBJQ5sUiF9By5mpG",
  "key4": "4Es8HSjpw41TbbJivSN1XuApNp2DmKJx5WRy9vS3i3tttF6JhGimGeoUqCunhduP8wphFNZhRVTpY8DYy792R6J7",
  "key5": "4TTio7Kq5sGjnoi3vi6ZuKoA7MNmmTPhgENNDkqJbT2cjnVyk3dxUz8zMnYF8dPYVECmuquMWzPiceSgvpjwYXLj",
  "key6": "4KgbRi5hUnG2yNnjhXp214su9u86uCawUH6NcuS9TRh5PNisoeSz1eYqxmg43kU2vCizZCjNZpJVS7rco3JyE4Vf",
  "key7": "XWQMPs589LFmV3ZCoX5ETc1qQp64aszodxo5Dn2Cp252kEErPvh5d246vKM9iF96sJ6CZxjZBHRCUkKkjL93tnN",
  "key8": "3gFDpwRLeoovMKi8nMU4io2EoJrqBjQXp3RJ8YihzSoWY5Zsx3Z5XSwkogQDFzRec7EBR3GPJfqKuv4oXLVpJ8jk",
  "key9": "4SeDgD1gotWHBJYXcidzK5muhFRSDrpbdd6QirA3SZFLeFZDdHPi3xvnSqLRN3u2VWhS7Vw9pJpzkyP762VXixsg",
  "key10": "5RbKhV99tzQqdvA9tFjPUzvs9aenN5QctMSSy74EBoCtsWUGt7Tff7mzphKmq5aNqRXMZqpw6KgdCmWPfhhoESKw",
  "key11": "4Jw2XAGxw6xEcWgLoH4YVCERRhJJwTtnuxCwsV9BV9jGE4Q1zZLnrPNKfTxX2wNz5XtNwaMmmG55evExgVJzsZWf",
  "key12": "56vXB4HmYNvQRDu4LJLzgcxgfKG1oeSYjckEM5ghr8UveZFE22ZgGsNyxjjNDhsxQjnYJ7CgADyNyFvqUBLd8isG",
  "key13": "2Zt7P3NxmCmzDNYrLWXQ1gFkdF8yUnEcy7eiWiJxJY6jdpCbYCAcgKEGD4KWrxwz4rSNm4Tfcz5fdvfwu4U71KJy",
  "key14": "4ZoftfkrfyrbMCvtaUShqsmdop2zUFQdZpSUpCERc12CYjYoBVQe55PAyAijrfimubntzhpu1QiUu3YtmKgWLWQQ",
  "key15": "62NuUjs2DNvcKVEnwXvzc1P7YGLkP6rf8vw56jdsy24LFtcenawQPLKjqQ8HZnF5MXfxy8ATbEAKX1aZucGfGzB7",
  "key16": "5YniPLSP6ES5pdzguo85vXfpeSgPNHRuEyLgvejZSER1yHB9G8oEct7pbx9e3rBKneJpzvGzBc37opCk1ugsBWY1",
  "key17": "3t5mxTgytuZ5rg3sGtsjYw3VWLDMWLnLXM1GsTkFoUfZSNGU8hRghb6xJckMTZVoDSApf1oVtTC7wSmKC8gJcp78",
  "key18": "5JXvJUpvAKCb9C7HCojxX5ULrpt1P9dg2XQdGzDX4rVK3NKEsxtYU78NeF6wFxaJxmNP5H5yHGuoYrwchgmbXopr",
  "key19": "4GuARnAEHhV3sP4XydFnVvx1fJWwxBXgmLa6uQasix6pHvro3A93nCrjNavRf26AxLXCu7JN5JJNpauxutMSjAqJ",
  "key20": "2uRTY9RNJhsscb1YoJySKqKS4KoDvz5bC6CwbKtW7Tf677asoTwyCdQpNb1yy8UxWP1DEoT9HxibwSSzqf4uGWJX",
  "key21": "jWUEq9zSGjEDBasdh6X9ecP798VTK2Qxrh57CHjhDHjaA4DA5BVLtfnADAKPMYMXtYsaE75o9Uy3ZLA4W7fv8YC",
  "key22": "5WrZuw7h93AVhrj9g3MPto5YTrZFsRmJdrR7ZRmRi4yVL7Cn4yesQ47hhPGd2eEHSzx985yVAMCjKzwUBKTh39VH",
  "key23": "63zpe4LNV9gcxTkot2fSSFQioajMRvQrf2McTBnP3gY8Py8n6cXNruMbk1covZykc1UDc4Wq9GHCPu9NypeDQqPG",
  "key24": "4ogNxUguRHoWCneVvnsHNDnrWP6m4ZiEaJNnQF5E4htzwFfNbBiKLHN5pHQd1ifEbgsZVv7M7fUBUzwsbnvyCMjk",
  "key25": "47TsNY4Tve9QCJbpaDzLB4czimCmEysMjhtqbsXG6BEjmZxJvAWBFYiLL16EieEvooCyeFCFMVgeQCf2RLcfEEtd",
  "key26": "3de3Jve1zisCj4qq9pSvZUybPRqghXvbPxREu2kPAUvWs2x2rQ7wVsxVcYJGyp8Emty9tfJMKwZk7PuXRBVo7ecE",
  "key27": "4rZkBRaR3pumj3SPPMtomuJmf9sP4hLEyPhUbG9C9aQT7RjAq3BThbwj8vEqa6L1dp4LmXGVz25nGBspuzuzqzSw",
  "key28": "26qDj3WnnwSrP8mNmG5S9vdDQTrCw1o4YtNpbo1j1CFGfaUESGeYvBsP7MogHK9NXYLnD4BTzp4BKiUw9m4H81sB",
  "key29": "4Kwghw1K1y7mt8PjruHKa9aFsFbjyY2B3YQFTQf5LWLZvgLioQcbQTUzKZynh35qphaYvEGDf3nLkDnqsDyMes8r",
  "key30": "5FnELTyesHfYwf4o7WtdXdcda83iwN3haBSAd7keRyx3nSnL6DuTFzUNn2aDtPcoLD7pUZGQ1ufh9pSw5FNReD1e",
  "key31": "5Lg8NZZZS5x4HnP9HYPhaUx1fP6hPrDeqVpFFwe8zbsWuzAnPkiNienCbXBvzhMz6PbK7i3gEDPc3QAC2f7TUAPK",
  "key32": "42NbnX7LJf8SPVRvXcHeSi2WfLF1teaqng2vLtE4nQvvzZi5PiEHtA3VdFG9nKE8hvGGSs4aVsoyvSpWfJSS34T5",
  "key33": "wejvmoZbVQNWxXPuLRYtbd3T9YzPRUhv32TBHPZH8JKSJKmVqKPCdaT266sPmUYZKPXMMHqw9dXuJiR9zmdozgC",
  "key34": "5c2VKivxtfHU5q2XjBsVB7ZNzLWqTmdLvye8ymopDaSYZSAQzaX84nNuTardvSgz4ZmmWLC43Gj2ZYY2Wq1pL8bq",
  "key35": "wiFVNsMbvS94ViZKmAySAq1jzD5aVrJ5jK8gYcGNrvQZopfiYfpCox1E1d1iQRxJT8xE8aMhtFLbzHrSKvBzMoA",
  "key36": "52qPYG9ipk6rB1sg69f7qQ9JnaxVPxDfoq2PQReFxoTodSEBGPEAnsYQMEgiqUAFEWYi8VCqGnAyXzMSR6AGSW9T",
  "key37": "vKdEdvLKsCxde7GdknqUhmLU74hckizGUVA1SisQnocTVVDHa6sXCwTRVE8hpaCSajLh96RkUJCQqPy8gWjPBik",
  "key38": "32fKzWcjRxhYEFS94ebe5rMQiw6f2ifFtFDGMv6FdzZSDyN9czTXdU7NgmY6dkXY9YiAmb74MnyjBYES2ZAEJ71M",
  "key39": "2knFAm59ePzESTWdnyCtnU7zEvQK5csRP2SxxHmJvy7pRgJRAPmmVoUNPBgANLQ7NnWBPCC9ddmifh3JUGo9g5nJ",
  "key40": "4toLfvVxqteJLjG7YbxjGx6Hxw43WaD2utqz7AJbE8xWBaNYk5f9yPDv4Nkw1YRHZtHxQyQdj7MZP6BdV1prZLbX",
  "key41": "er3xnqgheApPcQt9AyBPkYLSFNjqzXzPr3fH4ovRqHB2F6Md9WXP2nkZwyzrERRd6ZBs12TjAiEwsijxD68TChE",
  "key42": "41LhJdti5S1HsopuueYiFDLRw5GgEDTeVA7LgSfY9SU37xDshxcLSRTZZnhAEcZgyQoTEVKAhQgQ3yaVCQQCpyTM",
  "key43": "3NeAbGnxM4qumffci8uwz3vXv7pYESqoGaciAvxCaSWk9NRtQGfSKU22oJ6mHi4Rbdew6RGkZzSGDHc3tPm6335Z",
  "key44": "4xiQUAT68ocya2LmttL8fHcZ758WVBoPstr3j8WFAP5GZMUEtArGuviYx3wACdwKkvtMfEp1shdiitRRZyWiaSyB",
  "key45": "4mxhZknQHFaAH16j7xvKtVYXoTJufBeFw8KcPBHA38LtgTb4Wq3QwH3azpLfCo8sQVBZjFH8EmKJNjDSoeg76Rk8",
  "key46": "2fsuvLFxDwU3wddQCJE2riELdLEv9UVaGJiwj9Rc5kFBR5y2Ghb9FvbwaWj8tx98tw8B9NNQFVC6qAen9mT5YbiN",
  "key47": "3Y6FLAXo2hjXXmqYvR6Nb8fXdJRZX7ccc82Qgp6jLxe2TmXeZdV55fUtVx3JxEUgrquXZ6CNdJ315zTg6gHr9mtL"
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
