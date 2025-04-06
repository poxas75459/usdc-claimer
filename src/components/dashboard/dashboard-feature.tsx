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
    "4Qsq69wytxZDckQE2JhgTRJnMKY6XL6Bi6gRY4KNUFvF9WbUMwdyboEAAXpyaj6VLh3Lqyyz3eZjuphx6vZGEKPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5htJRqWMmaZndz7ke8UMQC8eJXtiJfinnavVZxtkTrZz7SBMxfneGdUkrbNrMk2iSw6VXvMRGuF46PeN13jbBqGH",
  "key1": "41yaj4Mc953FTze5JkEtauo2t8yyei8UuSZLc9fUcxzDonxrBhR1eiLQ3moXhTPcrVkoFxV8kFT8R9L78E5R4ahJ",
  "key2": "5iRKqog6xRQxtCvzMaqCLzEkCSSxcTMVK5RkV7sTUDaSADUmPNpPAjd7sQGzWxHYUKY6QnHQKC27ECnaHHfjJP5H",
  "key3": "xoyLKt1dSh1d53JBDkvEx7xbPV6NPRuzu98on4CGXRAgCpef8tdRPCZ8LzGLjLkTRb8uSBe2Asr8YiQpSrv1yGv",
  "key4": "4e1njjvAYpy33gD7HQCvpUyodf4UAgmk8HDKDosLpwpzwFD2kefPFUkjgasCrbEodE6VJsomEjqfWyEPUqyHSzCU",
  "key5": "3XJqtuLkUtaPFNBx1GZJMJoNL3S5wxPk6iieFHz9NdzV5bARqFTdyWqwbFuCNHZjybyhRA5J3YRN1r1sKFZSncis",
  "key6": "3riTeDTw8uFwJ977aR5djhibeTEwcvgEiQVgibFbjsjJoVNBH16yHdmJnT46c4g3T3KWVX3h3neyaDLehFgfdRf4",
  "key7": "4ADrkBSNXBLcZMtLYKHXwS1yFVWdL6KyxCjL9jGrAabv7nPQNZecsz86CJDxrdJ9JxTnooZxTnyUuMFGEStBqtAD",
  "key8": "3dR9DzkogEAo1WJXxqAWch8SUzBzBPAz5o6AgasKdkv73wsAwdQYf8rVNpQvHec3AmX344EtmLe7sCEpZm8nd1Z",
  "key9": "4SWgA1tDysmBcGq4gcM1qJxiaEt6btkZBpZiG7a2Fv5L7feLFXyHWU56siARwHTY7oQ4D7w9xE3ooEQUSAF2tKz9",
  "key10": "5WP9bNxJwj6ZuFUPKpTLBKkFAW1VtT6zbxPwEv2kxkRjLhnoYduPxHzJbGncH7Dp1anTE6KnGpRTeFN8RHgMUjJ6",
  "key11": "2kVnk3WXtegbt7qoi9odTEmAqbWrKxS7EcTM6sT3ucP3RKkTA9RYVTskdEJoVtbV6R7o4FqkhY4ZhJznKVkHxymU",
  "key12": "2frVwSW17TKvCRRGuZza8XPWWyXdQEjAbYCtmyzhtdDVxa2TXwuLcq3Z7fNGR7Pj1CBXAU6VspmUmmzPBhnTrtww",
  "key13": "2mzwbfUfUZewvLeGUTA9Cns5tiuQUCbmg79bTihuu1gg52WHyXBUZQQPm3gEinFiFv6ciXpD5toVJiDRSfwPEQpp",
  "key14": "3mweXXQ3V9AP2GN98EJNoFtzwV1pz1F3KrKrQStmXkpziBzFMYLWMbgq5oR1SQpe3J9nQaNjYJexzpqGhfGCjJVt",
  "key15": "dtRPF224wH2xcpUQtUETgmmsqVGZesaaoV7rLBmcX8APKK1cV2FnNbjP65WznXVYghKL8xFod2dte9QDqeQeLjm",
  "key16": "39VC64BEK6gs8Mb3Zd8HHmm5akJZnsp8V7CUnw7bSXRmS6yLDZVxRUN2txuczwTzsmcxDZwqqUbFS73a34nYPd8G",
  "key17": "44fpKH7PLepqyLRRBp1aqoaFKVpUTAGscPbCyDfgT3zaX3WGt25kLraRhSCAxcQit52DuwkmbEpe1hhJeG7zPf99",
  "key18": "3XAwtmmhJjopXy3R2EMKDgZs9bUxDjBtfbLbSrtKxYEuQ7E9oVsUzmF1hN7EoFMKN7tqjcy91Mo5tHQZKBEWNpru",
  "key19": "3ctA487qKJSWCm3w7anr6iNPSbAtnc2DFRa1ay9m4h9ioHrp3CjwCb5H1MXrDEm6STCGufBXjcW8T4ZZkbefr14x",
  "key20": "3NLBz3n7PUhv2g1ETF2yaL1rmABpA38p4p3zZJ9z7ej5iRb8EgCweydnoCkup8m6DJFuZuH4o1sLvNXVDqRSEYEd",
  "key21": "23BqhodVd4NU1kCK59bL3EUNDUtLyBgX4keHSk8AmL4AnvRy1ayCKsszNQ84S2yK5vUUoyPEHZH1Ld9ayby8GD6N",
  "key22": "3B5JmKbdfxAW8ayrtSTdjw8KNdgkBN4QNK2riKr1v3co7s57Fcc2GP7wSqwAHMs6yU5hGxff6c7WtqY8UJEmGNSb",
  "key23": "2DwTuyd2bR8n7D6vFUyPBzBgho773bjFur62jQKrbtVxPiZjqXyjAyqK5psQyAyqMC3Qqg5AVrqVz8aVdvnJrjkn",
  "key24": "3UFHHM23xke3xmQnsjH6goTneYnYUBexzs8GPk9n4LAevDpm3heU2VMHa93NsgHu7jQxAdWkvWmw7QB2hPf3mJCz",
  "key25": "4g4rwnZ6MMQZQ3rWgTYwwZzXPXRSJSQSrfPKfCyqFDuGb255t9sE2JWMt4peG8RQdCv8fcDvd8s2TL7Q4eJWdWu7",
  "key26": "5BE5xEjB2wf7x9TXcCDNUw1bdwdDhnyooxNeAU8yvH74nwzPb4RpLyvWjb46to6YaDmGRXkuyT2Dm4DhZLCc9uc5",
  "key27": "29vUWErReSovr79MEzRGKqP6mMXMaYLNKPe6Sq6117h2t19kRp3TdERhAGaPfi8TCorLYEUMRQ7kzZCR2o61nGET",
  "key28": "2x6XmwHxWHkHw9Fp3J7hp5W3AYPRktzs6epWdi3aGgbSMxynSFqQJxegwN7D1W36LGkqr9sLKxp8rQKc5r95fUdC",
  "key29": "5csjSb9vgtfpxW81Px7SKvwE3RhWK6k2Cx7kFwgZCVf2vqm5vJmMwpjnNF8Ft3ZyooYcWsx8cyJCgGjUzec78jNV",
  "key30": "4VhVikTMEK9Cy31oBTJTBR9TLrM2P532YXYAxTD7WA4mBwnaVG1ZQqrdaWhnuQSGWvthRFrmRFdnA1Uhkn2QPj4L",
  "key31": "583tcBQvWMTt1GuZHPjEjRsrRKA515on86tkS36FobohgQfEgjUMf4AumPN6Qn85n5TiVu5ZkTH62RHtxnp1mQs1",
  "key32": "5U6MU5ngVKcoeDVN5m2BpD3xZ9wUoRsHEWQNEQt2o14wWtRnVmuDNdQ6ss2yud3YAnNVLcUFZe8pSFKMVNznimmK",
  "key33": "2ADcocHVCXSjQD4rHe7VbttdntshdJqyUSfaQkjd3TSNWQdwq8zPir4QCwAywBRWGjnaM6svbHMTbsrs5GVK6bJ6",
  "key34": "3U47hdDp4XUtixzzZtxCCFXt8nGBRaHFokFzHyZB5TpaJjyEgdHzYi5thui9N37LwHUHpFSCnwgY8zL6GVCMiZw5",
  "key35": "3xdWhVkhFwR7wbdeSkTn9QyYfTterW4BqaZgeNThHMMaUmk1BvTqzWFYQADDQnGeH32MYC8h4Gwx8zbEihGBXyZ8",
  "key36": "5Q24ijvjED5MY3aqGAFuEgrmtqmdYXd5XuFFpcm2E1MbuF2cmFJM1JkmACZHKLFfAyEwNSuh7UDnrpDdkP59debn",
  "key37": "5NHB2Wso6ypNzwDqdWYks6rNCBMM72WpWBb1jsKUhz4Fdd1JF9DFic71yVoXvhtQFMzJPuF8i6E1j2kbaQtmtoCi",
  "key38": "2qwpsa6fmzGJCue9fDcp81Ck7Q6EYVkEe5zRcNUvBvNq3J7xQvT3R1SGeCReQS3qFxtwCFyxvX68ecHEh1rT7xL6",
  "key39": "2ZZ57GzmgahxEmSyN5K6csAe3JLXSBySyJDkrA1AjPvGiP7gSSLCGP49nojCcQqHoY2bpXPELobaGLYyRFrjMM9G",
  "key40": "5hm3oELhL4oGxdcWoumqMKFeaSRMdgCefCiPSD99EAJdne1aBu6dj5fHBmGT6mCZd4FyQc5TTqDaFp13mMqKoNi1",
  "key41": "5gjX3tSrP1UrcjNULYsh5qXQH1cTpk2RNr8bVTshozh9mj4bU6Dc2J81mJGwBDdcP7oguCUjEx2oza2vkdpwNdYb",
  "key42": "TbdGVc4GXytHTfNm3DJY6GMVsNxyPPK26wNdVE4CsNeC1LjSrj9F88SKEfPbCZ2kPbmfVs1EfJGPmWdzCP4QPvX",
  "key43": "jiNuBRvNfk6rPN38maUDE1wgoNcnXykBs7RsZEb4oEqyPtgYb4a5vn9c4tjg4fQgTEHaHV5zEWW9NcWQdsfJyN7",
  "key44": "py8GHiWUywNxK3KiQdmqygje7QPG9hizsLLEgWHQ6V8yo1gGvGSFk3Gk7xVvPHB7BiBH56SdzXrZBv98vMQ5XSd",
  "key45": "4JfyPb4QNSgjEjJ1Xf3LV9D2P8NCKdCqpCq4n2QWPyr91QbCVkoveQKpckH3rax2gsUESTfyo2NVNEFpWzTP3ZVF",
  "key46": "39Fyz5dBXUo3jfQ7P6vEXdsp7uxfKzbPse8GxkPHQz9P7Mj85yb9jZtr75LquJiyGwLoos4HoiuvCun6NQEJajwr",
  "key47": "5wdkvjbLvVzKPxtGgEijqHEAZwTXyfovWaixDKmHevfSpqvWDPToqtzUPsBysZWXyPkmJZYTsuH2jewSDf8cr5nZ"
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
