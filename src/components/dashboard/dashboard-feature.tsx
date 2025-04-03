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
    "eELseySdXrM1GwQvWcyB5UTejsDuA8WprNDjo82xYSiWi16WABSwbhWRUTt3441zeWA6Uw8XeJGKCrAaste3ZHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d4axvXFUjbHchP2352mwUAJPgmev6MFvA6asCQt6KE8ZRmfhCKwkiBvzYWmqeKjmirQ3Py6HJUevBbK9cXgRK7y",
  "key1": "3NahVQ8vFzXQ7KQfJJkm7cQjb3Fb2afXquZtz4v3Z7N2zkoH96mZax8upyMKtZkfE3fvVytqjnPe91PgRzKoT2Q9",
  "key2": "4FouUhqANpR1L2zR7UcAmvw6cb9xrYefQdQm2nxZqU4GkqgV3rzboQDtXkPaGUoRaGj32PAyfGqB5ozQaLk3ZcQP",
  "key3": "4DLT5pJ5v8VsGxV3rZFNbcRzkfdTgjcmTF4D54cwsAUxr7aacXF8oJxBJqQkeriCFhXoMDfRprxTm6Y8xJ66ivht",
  "key4": "4ypmPK5epXK4gAkYaLULHxPenc3aK9A3kLHywCLK5ELkBsksAAnAmGNWnYPzTJ5Vc3vU5ixDkKqMfiykdogHYXkz",
  "key5": "2oJv394jmcSS7kQ6hzHt9QVw2DJgTXK9LGF5TVtp7BHwVNoVwL8sMfSpTv8VzcXLc45kqwyhz7vsAjnNkcneP5Ve",
  "key6": "yrbZ2bBbVtQbXfdjn88678Qf631hJyQrDTCkWVTBo2aCkcaUWgAd3QRUFADz8YJjDvN5PocgHKTDJfsh6AxjfRQ",
  "key7": "4x1KnDLSagWQX6ZQC8To4BnnSp3aW3sZAZgHaw4fMUofvTieA5hVbMCNgmdz83mknU2jmBwCEnMLf8ERAZpv7omt",
  "key8": "5sKz46FJCnmMwzV5PUSuTTj6iaHGN2N1d3hMVaGG8qtgmhKtD1EF95RgNfZm5HovciCURzhhYnutEngxjLCm4m3X",
  "key9": "2B1JL7YBAoMLgdjZdgXXV2oXtYk8x5q8oyJVujoZJ6fd8bHXLituRvZgfqE7irkvbiq8D5R15x1WCajZZ2aVZRAa",
  "key10": "33cv8VL6UzFPdFN8BuQwrvpgigtQvkuBaovbY8FmnjvCdGYahJDdJQ56YNLQZ8n1RTuqEcrmjJ7RL1CKWkXhYcZo",
  "key11": "qhRTNokrj2SRfiFf8ZRDawZtfHhrQUrJ9Jn7cLe5p3Q9MHBNjdmySH8rF8zX17xpjWxdAApMZmvSbDdfQVET759",
  "key12": "aXjFZoEoavAKpnazRZentLhZAfWtGdzJiT1skzXRjStHLkasQ3oiDLXvegebHiMirxX81S3mQCLYpiGXKcNyEq1",
  "key13": "5cnZLd54pVirudmuUrsMUb6zFES49TRa3ev1bh5Dv7yGBKLonXqLeuqFF61vtrugxBNEHJ7sqYyuze2NfNLFux4m",
  "key14": "5mx8Z58dW615MrJHFjLgTVnUvdodWy2UhTzSWtJkfWrzd56wHLoRF9bQjnBLZ3jdyTYPZSz4WgguKo7SGJ5yWfpQ",
  "key15": "4BSCvfFTwUWYs8xTi3HUXQ7sUCsvLx8qp84uAcnqohDxmfGMjG8bF6ZVTfs1q6AipYhgAo2GiqwSAPiEFRywM55u",
  "key16": "5a9iqwoA4Rh8MGoi6oEHqMNF3JLrL8zfhc3xzg5zVT8D4muLQ1CG6pPjEgKrKjE3m4143b1DLvwhuxqvEbyUuUNu",
  "key17": "31Cm2SpDrN9nVMJY94c6atmkqDo5uybY9brjgcjv85U48Zi7v4GTtEPgJej1Z2mgC6HnbP1tq1X8RzQNCsxUpimH",
  "key18": "4NwE1K2kkJyGAQMVZQfV9t37RU9boHqZ2ahxtkuyWwCJNb5zpP1i2RpBhjhGoPUWz2qEjHz8dFhpuLYdgMzYUUx7",
  "key19": "oKkLWMxSmFYmivxDet8WRaCEj89d1j5RN6jaGaJVCaCM5hsryfzq4C1qEdP6w9rtjm8hQXJK57mDtn4kzUpPtCz",
  "key20": "4RkZjBGDJybmL6VpRgSRd1g7pWSnMjTgGx1fSuu97rbcTZ71SRbi8MWeELNB7YEK5yyMe8JPUL4wRQshSpRS65MG",
  "key21": "QJXMasnFmbZ4QRRnYbFWpEUqGFYzvhuKNgyB4XQHD4MdZYnDpxUVCttcx2LFMXuecimf3WnkSxRVshnRJzZMikt",
  "key22": "4ph5U5eqhaZ9nhmSSSBosbaKDLNcaYaTW4tKzYp6R4Uahb6ixo1uhGX4wnr7JYtN35gazj6vpmGQrrZoYgVz9RL6",
  "key23": "5HqQXY7CQJiCLBDZRq4QCUdXU6q2mTM7FCPS2SWfnb4X7nPDQrpW5VjA7EKcF5gKdYvKEjaeXEBfAL9CGSCn7LAS",
  "key24": "2WNZNef2ENhKgCkrZDCzDF42PPVeRDHL9KRfhuQREfCyeEVnwnayaveoLtrXwHCG2mQTMKN1kJcC8hqNMxC9rtHL",
  "key25": "5fb85w7YUTJ4m8N8MxViJ59ySjkcMHMTiqfBP875bQwr6DAcak4iYKqsRkefN1tJk8VkeSSJ2KbbhLKrSEhsoGAM",
  "key26": "4wYfLhVjguJztGzEgVysXKCchCnUnRjajes7Mkyhmdxno7HFDHyFVGcYQoaQAWPpkZEijnq824vPw8iWWAH5LzYv",
  "key27": "4t3DnKV8mMaZKgRtQmUrijdGtv3WHC1KLsiJEfMMJqnaqBYdSWSDWn4Uyy9vWFySVbxy42nEb3DUVoPg6qhkSJ2J",
  "key28": "5ZWnhADxSHJSvzQzYHwivjQKw9xtxZrrv697EihzL2fq3T4ECx8cihukALrMkvXwDKKfGr2pSApvwf7qqKEFwDFa",
  "key29": "5uTvMdkNsk29UGBCffTBYB2kt4FRvit9EZyirJs62xoXftWv2MgjSte2GNcPj9Lj6wUBm4QjQSrZkA7WP9WMD1B2",
  "key30": "4pypEtScayevQ1WQY1TuPGas8mV5UP7EoARuRL5hAjTdLhKkSi5JgfHYdfUnyUWXB4KKTGKchBVQmHa5d7XoNYTP",
  "key31": "4TYfeDaC8cvURt5k5D38MYJvKMuEDFfdc1PBf23N22qK8UxcXNrxgkCZudGw7wwhQME7BWkF3FxPkVHmwj7xhYVG",
  "key32": "3ianmiQTAbjXrgZZBwvY8am3r72NAMwRBv7JWvdTVwEywQBeqrtBptxnBbrm6gKnB94yVivpAdGN7Sx6aUsSR9mf",
  "key33": "5M6Wc7WtAHkZDbzTmgHMf6chnQsSe8Q5ugFoYTv2DYQDBvG89FnNqSJSESyWYXD7s22yPvog1pj9eagwivnoVhqK",
  "key34": "26DfQ918gCcD6RTPACeo86WsTyuBQGoPbNBAaWSbrNGZSFkHfGS1CLVW1cm2T3mU4QR6YLoEwKNrQdiEKiASaPqV",
  "key35": "3goRCR42GZc49z6x9xQGzc2kCZwhPn6fEUrQwmNNzu8f9B8vrMLbqkhEK5hN7FQmYxgGWNHj9bRoapeK5M2qfxQE",
  "key36": "3uEfGbGG91FW7xpmCkhWhJjNKr4u3eaoNgbBDgLndwz8GR33kpSj5SEyjxxjFE7EWCFAnKfgyQystKaJqrrvwNx6",
  "key37": "4UjNd8ZRcXgNbPJyGzQfvz4tA22Dj9rwo9xbRJGnUx1EwwMttEr5Js27wRPHf5LNxmyKQtDhsSGXKgu4mxDWSXym",
  "key38": "26G2usvNYCxjCdhkasN4gvEJur8bvikZhSNFknozivLGwJKJjadgezb83mhixtCC1KUabX9yRBviW1rDBycVHqYf",
  "key39": "3iAnqcewiATweM4RoJ1ZzWFcDUGbRntdZKrYu8KRMGQvhTVPrWRihcEevuBdDdV4pmTe4sSQYNY79gVUEfKdfYdq",
  "key40": "2mAk2WNaWthUUgoC6tin8GGAq93bugKxv5ihiKrLiJ16w9zWwJwPjD8Auwk7QgxrtQKVrm61HgmekVLCJieFnx49",
  "key41": "2FFQUtBvnWgZtTXC97GeBu7tsidbQf2Wo8kvpTcE21mYSDYYSXbNaJkzK9zsZ8efkLwuqsHJkGkJ3mw3q4hq83bT",
  "key42": "DAuxxNHrmP53FdFtoWzS6wqZeWPU25eLGNDVig3yHYHffRbfpSvZTgJz13ij5LzSVtCWbyyRBwP3RbZn27y3EZc",
  "key43": "4behhkLW7fanKtLEMNbHC9pMFGoCTmiisiEP46BJy8RTGPxEJCfwHoy6vauZzXPbbJGcdMnTkejZqqvW5svcaxQU",
  "key44": "2K7TrRjwEXDqtbabFTNMCzDrJ6UbTfFHqWotj4awNSKPFXzzJSb2nywjz4zzVyht7N4JD26wmAYddrELSRz6ebcE",
  "key45": "3Bz22zAN5dPWqWuduZSTmJAWCWjGioZ3jPnVcT1BQiY8BpQ1XuzEn2jAiKT7yHzn4pP4aqDynu5hzS5M4ymsRN2s"
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
