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
    "5sVQwLmUoAftrSvRr13nRpCtdNUE7VTXJ4KoXrMb1yaxDcmcwwiQWmAZ6rRs3RW3gmY4CesGGinC475sdxZT2NdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bW3ER8KhFpDUXHTdbkYAG2YN9NGSGAZWyHfDkm3amQenP7hoLUxPj9s5ycJMVuZgWTxBQwA3pon4JBPcNt3noTc",
  "key1": "46Rd9PoAFzXGL7rWh6Wr87yAC1vt84qbPteibvDWdCoUQ7kUDPzUS4YPTdPEhch88FTu5wJZyVJAyZ3zrQetqJhm",
  "key2": "ZRfxDs5NkudWZuzMjiDTkshAFzH62rQQZaY3RGV5R2ZZaVb7mGE7pgExG6nTHSnjEKg3ERHEcsMuagiypoXGBtB",
  "key3": "61Fi8hA8Y1xDauBdihsjjdZrZsdo1HhRYCaz7jQoGAjELVJGkmbBnxXVhFn7ghdaUUUbV2QLkvJrvUYUyYNtKu8F",
  "key4": "3G4NhFi8tUtkRwTH9QvobH3ALWXGUouqgvmvRE7Hz88pkB1bdUX5tKuTXHZy19D7YBoSsFQ1jAzg2nqUmy5QBkM2",
  "key5": "3F6NinUTq79RuihNRoZpTrDXWxx8nkYSpYCxiBqA7h11dJ7zGkCX6NBfXoyPz2FkpyVJFyr2MvRr5WZEiryvVdgq",
  "key6": "2cb1ZYTfzsjmAc41otKcXpG6pbLexQmKkMqk6EgjktLnPeZ2BmRRFhXW6fAoLcS13VZSfcGAkUPtyfY4VZmBeN5F",
  "key7": "5WK3DaVvDfSZ9PbJaEdjaeqogLkrDmaHgtntRrHMARbJwa91TJTKJitADs8VfhLFadAVyuUGVwGtdUatabgB5YgP",
  "key8": "jM6hXmT5T3w2T4hMmtGSrTikXmBtRhSJuunmXXkJy9DgHpiK2yJ8xmXtYqz6Znq5QYkmEz6uqZEiR8X9tCGnpDK",
  "key9": "NTusnacz6KJkk3GYMbkWb2yzZ1VaZvxuKBiiFK6Kr8un4FzmVTbBKiMbwUnjx135oBzAp7KUV35XN6qWnJqEoSY",
  "key10": "3NRsmRRUsXKcrSGKkC7PUuW4jw219CqJTZjfzsi1r7rPVtjLnjg8eHWHt3vvznJvXhZvXbpBe7vbnBzqWKFEfqwE",
  "key11": "CiARKPQCnn22c2J6c56ayvYJndcEehhJRdwh1tMZaA7zXrFaYvAfpNsgB63PqoYNzUpjRkhBdx9pPV9J8Tap2Yw",
  "key12": "3X4W7YdVwhtFaPSHqJUAkEMMzJGdY8WEzZAzTE9g5NE9Yrq8D4cnFKk82aw2ozpC92voNZPK8N1digV3XBno6dq4",
  "key13": "3Bnoihmm1LzxSLxAVtWpUiN4JrYGLWavw644sMvVTmLgDs3MxmbpfxTMiStSLiDNUY5Gzey1QGdFKF6F4pnbvX1m",
  "key14": "26s5MSwkrVrejgdT94Mybtbmnh4o68Fu5BPU87KRAvKBKkk4UJkv6rT8cFxKYD1ihGYxZFX3AadTYkkgE3Ynp3Gx",
  "key15": "5v49XiWH29akcXAhRgB3upEz4diHg88eNZNNHnTr9mdHE3YJ13ti4kyp58nqYUjKL2jCvtG1HLjo4Mm8LHyhszgi",
  "key16": "g3j5iYuf8X6wzHY81M2qfEhKY5bJoz4WqNZGCAznBhpiGdzMjzCH4qeEA4jtoEACzHbKbFGip1aBpv6wg42dqLE",
  "key17": "2QFzhgiVfEERbmv8wo8aEoJPX6D1bpGfXGRLiyhceVbDVQv78PqbQLvWnYQ3F6vtLcERVFn4qKDt23onqgsyPobj",
  "key18": "LfimLMMGFvwFiLkVAw1RRZiiXv3EE9B3k1JVm8bqHw3DTjyAjZY4bXgjgKci48Jmj7Cpi92Nue93RQH7bANbK7X",
  "key19": "4VUTGJWe2ycYckKLgnJD9c3mgEd2q4yAjpFs3XaA9zV86Yui8y4q3HVjaR8dcb1kZRbn9PAsycBZSPdbkBMFANBb",
  "key20": "37tr8DXgTm1YdtRv96byN1AbCnmPMS9xX1duvN5ycZ4HRTgfCuV6r1n8p8yKkQAUcstXtTjiSzYE5dyGXQfp6a4Q",
  "key21": "45xMmcWdG7EzTx2TDwBbJMTQMSXqRFGUvcdiXW6YqhZY2hS9TZtXeh8K1LHYMAt4Fa6xU7mbRhwEtTKgCm8rJidg",
  "key22": "2biKfnqgtPt83oRKnVmEfAGWHmEwFNQVj2WEha3MW8vg4dS4ARxsfZqDpRko8oKvDvmTseXrPxddbDvEAKoUEfd2",
  "key23": "524RHBsKHgJJDGa7EiqwfVJCCKc9XFmJk621QnfghnKUQgoq9hv6rE4zM4qTttTJTqoywSEMhXc4H2UoJDFW8hEX",
  "key24": "4nmBYoA4UttNayg6LARJU4mgLbE3s6yn4YEveTMoEfi25kFmhBkJUi7qDAUPVeV7NPhxPViPTDF9AsynRCzzmJcV",
  "key25": "2deDZK4rW5hzCsUoDGMpPxRZiDMUHqnPWZTS678WbCZiVt8S8gcFJqiASDNPAFpNaTvkv4thQ3FQ4JLvHHimriPs",
  "key26": "4vVYvJYa6v1X6tVwf1yWBL33eENnhR6UusZRWpinSnvr73oBupuWLvUfN83wNUL1YWPYuG63rVTNAKSdzDUP8SVy",
  "key27": "3vKiBFxyWB28iwgdmTek7wUMmz4txQdVsfPWp5HqKV8zFBmpRSSm8XNCoZkXE7jU6V1fQouJt82mtMX2nN5YRiuT",
  "key28": "3Nq2HewkPjUt5cDQ4uvvAuU55LwXRmsGtcbvoGsFXaLmQb3JRArPd8B3Dt4eYrFJp2swYQCLxmB3R6fP9p3yjPie",
  "key29": "3mvXHp9oxGL4RGWywWwga3LWBYoFqxYrCzow1jYYtJoNASuq1FYCoirYD355R9bqEdNaNcZq3AgRUrsMpdm8jYr7",
  "key30": "XXZFfZV4RCr5xK9i5wGjT1E5pXru3zaiy5skUKbcvfD16dUWC8QD276MbPDoZ4RLQ5PSTiUwHxTbiNhQGEmvo5F",
  "key31": "wdm1zYdPUGULVWwPpyyudSPzYgyvHJRszLLLgqwaiRcqcYuntk12b11nAitgxT48uJo6GqQDSmDetYfJtSAdY5Z",
  "key32": "2m4cfzSBQPvcEdtkgb8BZTBWHUEExvN1TRvwJa1wA3FENbuDCewZ37s1ceRvsL8gDdCv2ujWSK3yFJv6Tcvo7YiY"
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
