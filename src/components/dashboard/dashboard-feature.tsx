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
    "5yv2KCaXiWo7HDq3KvMNNfJtcXQ3c9jhq1WXoU9xCbiWx59ewXUywq5JTvn6rJ7FBHVe8Y2a3mBHjWVgCS6WwBcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crRRPrDGEN1exKq9vdfikhaWdQKoodmtYpjkcjRVB8Hpd3JeV99dd7YpXu45nfuFJFavc5tALHmLr7puYQRGgqb",
  "key1": "4bCqNkLRKs5CCYycPUmECUmSGBV9996nQjUuGFdtKAakg68ZM3yvEedqfivnroLcE4pmJq17LiuaWuCfqSUyTfQs",
  "key2": "BUarQZALbfikTA7fK68yyZ32DBomcLEctMqt6HBrvVsowGD62caxeQ3JPwYXHZvksUBWShqPqoS7p9toUt4wQb3",
  "key3": "49FWedi9qSdcdxQyiZ372mRXYWiFjvxYi3Ub9sBfx3FMEMKGhMvYtAnzG4Xjj21jyuWqh2ELPTLMQ7xxDuLA18Sv",
  "key4": "3Yvav9L2EqFAj3KQwW55SESrqkn4RWQHYx24JFQL5rBGBv1QujofWu1VPVsXpngxfBGW99SASVLJ33vpffr4A3xM",
  "key5": "wYMXX4LnqhwANQLH3iQdHpDk6F5MKANh8hLuAuJz3MiZEG3Jj2vHf4GhQkFMcS5tDP49kbBp5b8GJduBjZ673YX",
  "key6": "2x6ify8Rk9gciTKMhmBYxeEEE4hNLqDj8y6fYQviX8R9dQAE3VJbw7eFLk36uZmtjgy7MGaSZaD1uJoKKTZsi18p",
  "key7": "4WDPpYugZFUWJRBpn8V7VjB3RRGkbsC9WcFiurUcXLr2oCJS3RFvdEaoLFwJCKZbYmB1sp2YmP3p7j6PNiMXtmvs",
  "key8": "4hkjacKGDCiguaeWA2dBNPHwL1TiZbBAmtNnezgpAcZuAridk3PE7YLjLqp1xtfMj1x8F3aj8UxN2Zn7xaYkYupv",
  "key9": "4LSN2hgM8oYPTRsaTk6avZNYhLmzszwn1mTBhGwcUqBpqFjwzEtKc1XmHX5rqS1wYvt4B26jJngtHTmFV1wsNWG5",
  "key10": "2wp5L877narDK7o1ShpEWDc1ww1NRgrifM7Uif2tBHWUGZr2fHGYRcxmDbLBvnBcvCX9ZFDpD31Q9ndiu76WB132",
  "key11": "zgBRPvBUeNydCJfiuhkn1ww5ybpjgBcjn5SRKyk4z2uajkh9RU6LQwZ7grLCjpTcUevk8zKcq3svVWuXTCTnbHp",
  "key12": "5ybPW7Gr75dJDHBBY8AUXWiSYHwaMm1ogy6VyzdaVBtHoMuEsKxEmPBDigrTNDscMzGee5a3fAuN5ovb1TBqLuRc",
  "key13": "3X2faoxn7hhSu95sJ8MRGjqBKCEKn1VxxUAMcrmTfZioZRpXLinSSzvodTi4Nv6wNXxvd3vgrVjEtXKPz1Dnnhr6",
  "key14": "3iJWfmnrL3Sn298iaRaJecYC4qAXX7J3Ji4y5WRL6RcMGjjCvbv56tHcmtnBfaDXV9YZA9BuwA2GecrxotzwxAVN",
  "key15": "2kthGXsu4bjGa8AUTDdVjA5jfPemL262jkHKDdPCkp3ShHevzw9257xxYHGPWJEWdgtTHRVnECZqexDDMyR92iad",
  "key16": "2KZ4TDN1Th9sJfpwvjBpeEAD1Me7KTr5nFcCA3RtydnED7uozTYFn778X3aaKStZ3rYABs6fYDbeC2E9cbnXnPun",
  "key17": "4BonApSfE2hJhVZGCj1uxiq9YhfbhCzuWxMqfvRzQxZBJvkcEJRWNMAxepcCUcCWhHdZgbzGFuHxsGM4nqFntEAd",
  "key18": "5UssZD3L9c4eqF8dbQ2kBddzgZdFFfoxdGnqRrPHKt35jA3byQqPxXj2E7Vt21JkHSV8YKMFzq3ADiGdBXQtBAbc",
  "key19": "3mJtvw4hiEPFN6XcZV8kKk3ANgj3Cv7PngMHkcrTZZTJyeNqTK3tV7bemr53nq33SAsbAxikQiMayE88M49v8pDL",
  "key20": "UvCQbQbd9Csf39zMMzNUZGB4wq6RLdjaVsKXYwWp55HEHaFuP6hiKnxenYT7kkzPD9J2uX8rNE1nkNDqWnagAqn",
  "key21": "4QNCd4s4cN9hZtipuSX4jAd5cg5bcE6mGDufdRfesweHM94TVZirmeSqLHqA2fPqr8qEGsto5dzE7HDxcsiF3wRM",
  "key22": "3wf7dbibBwZZn89jp1R9mtfGYqpoPybFb66gvLLrcS2QPMhAyDaKsPtpREYLzoSdVqJ4PzxtXnDEx4wDJ7ZPbr2a",
  "key23": "2az8WgMmmQtADadNyGgFFjXSWpqp6DpxhpG4t4NZ6Ft3NaLvDF23qMDy1kwem5k1vicTk74hqatgVo2dDTWwjyGW",
  "key24": "2s2CLpony9665JokVaXarLxJMBNWsHZVCkn2ZWhWW3vTBYRwCnvfbbQ9dZ22WcTdLcMAwbaFaTyyocY3ho2KXM4W",
  "key25": "3Em2znH8DFiMfvcwKA7pxFQsEqRCDSfKgL54k8WCQbAjQ1qrRQfY6AVk8XUdv7Dt9WjAxQmuT3AaPxYtqKduzxqq",
  "key26": "2mja2U5TdsqLkTdpW641BLTPvnKo7xp3AocA3t9jrMXU5tkDobBHZJx5iXRKFexC4c2JdpXRnw3WRGyD7BJ6j2o3",
  "key27": "xE3DXrUrvnUs3w2C3P3zxGvEq4VLDk86KgboFaVfRGp4uZF7cfZsvELMRJorpeF42tHTBH96tXbgvGSAUxSt4we",
  "key28": "3WDPTDgjoE4eMLUeucrjrffV55WWZzcXrrbmXuzRr6XumvupppHDbXxF52X9UfYUH9GfqpYVFzN21ybkuXJ72yeP",
  "key29": "63c2vgZXq53fV1YebMZXVSVafwzCvkpDv85YtQ4AszRZvMZCD4vbgd7hkubZrmcHywmZsPxXRvFhdHAPvzajTqjE",
  "key30": "5cWaZ4ymN6cXVkurcE5vRczV5r4CmXnJKGjSb7mhjiLNs1DLZkGFv1haM5Y6HrPH1eWfNbgaZErA69WQAKP7XsDE",
  "key31": "5U4Vaeit6cCwttwFG4KNcsPa4BaUVDH1KhS5Zi41kNK8XHr9rRVBCqF1HLjYVbgWqfzVVSA2iFrWGawHjXTn43ir",
  "key32": "tbZXZgv5ui6H9TsvngA865vYLB7yVxYzyGTzWftQJYT7cnd5xCCmgDrbukvwpUYFkEAPxj3EqnAWY1Br5KSLtNC",
  "key33": "3UKWPE5Pjv1dfUnLXV97UKiyPaEhsj6nxm3ZTLmS2udv1gdMWntqM9zCg189zkmfhtV9PX9iaDzvufqoqqLFQT8o",
  "key34": "597WxzxrEQx39bk4P41vZCHV4omxosZwtMkEF1ahtWBFL5JExMNRhrYXkNzR3Au6zGYfsncgydjyX3WgYFQXYthZ"
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
