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
    "3KZAaUexaU8RGLB91uXyCaRrYFypvb65qHeDjoxRQUBHzBgQrTcSzAA8XGcZJdAJCwCCDixyAH8QWXKefQpxL6KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAzuZWRL7naAe6BbBtK9ezp1LUA8cgWUL4cfxdYDeQS6YYYetGt2BkyQBs1hndwT1Bj5A42pJ55MEPG4iyXE2mc",
  "key1": "44CzQUQtefWD2wsJuAsEGotwsnwnQbxqL4fJc1Rtn7tzJ3eZKqB7PBNpTMP9hBrcpPi7ZFFAcgPgGTgsY14ctgCB",
  "key2": "3PViDZijqzbt5Ty4CNtReT5ffKKUUX5XJiHQ7W7UhXq6WtBjdBqywWLKwAYQns6LYfpuMvs2XN9UsM1Kcvxz3w9E",
  "key3": "4SxTveQpNeTi6U8ocNyQHc8b1o4zhBCjWJwn1cGS4LhrR1EJfxeqEsZTNs3VhRpv7FJEsBjLFo56qcNy8cVGUNRK",
  "key4": "2pY9AKVbCVo6qc2dXJEB7RtGgfdQyd3yP7N3yL1d8FJsEZhssfqp3B882311J559QCeXx9wSX2xwcfLxjvixBp6R",
  "key5": "4y9GnJJoUMRVnSJC2jZ1q4zKwozq7w7jecHdJM3UTK6u3HfDrmjm8KmQdvTgYfjpwkXjW19RiJWtAA4fvnc6xiiu",
  "key6": "3k7VhXB6x8tmKjud9AU87gBy9v8pgr4drSZ3FLyTYevijDYq2CzbKsA8aG8p9XM665hVCDK6zB8Sz5VEk1ympAZG",
  "key7": "32QK93B3BUTpLYrZewiDEqwVBqc3aNnoT6HxBQGRFsLYnv1YSTkSZB3Ktiari5mzMnTKHxEv7cDMF42CeY84Kk5G",
  "key8": "2S7FHLQ7z5C33thPgaJ8o9eKWRx3Ls6LSQMXN1F9KYRUykhMGCKfojfCZGFzfyP5b5fDqz8uLdFgb4B55qZLRZ8M",
  "key9": "323ytUL8dHVvy8nNegBZc3kmewiSdKR2xUfTfxQLEqfjxNwyK5wJgbK2Akmwqbnqn2PJcSdJNGM6yLWBXocGZDFb",
  "key10": "4poFacjjKPAFeFt4yKM3Lb3mfeA6EjvsHSQuQvXaiD3LNWLTUdH8a6djCCwSQAKuEkNTZukKZS2caVTMUMBNCif3",
  "key11": "5tsU5445Tti32L6RCUejeJNgNfFdocqdEBha1axLe43vuv6WDydRsRSV8iNMHT34i8bkRwXC9rpxufG6u41f6JGv",
  "key12": "5nZi1aENv96C3F7FnRj3W57UNJuVs6d3nJX7pfBJWhFQjMufJTRpP3fLvGKu7zSySU2bpuQe3bs3YRgrBh6juPDD",
  "key13": "4LriXZwB4dTpKESCyXat3vfboTi7724gnj9BUykK82gTx8AHGfcyeVKPwiVQhZM5UuN2aspitDifSn1vZ335GBC1",
  "key14": "57nbEBTpZ92jQpdiEvfscdKuGLbbsCLU6DvLeuQYQSvaHGqq1rmuyfh5spU5FjGGjYqxFPhEx4ztfosC6HNh2yBb",
  "key15": "63Nq8f9gTu6ukpx8axeUakdZwJjWULktwi6QSfPfaaeZAMqQVRwZAXoD8wjVfu4ECGSU6HXYdoEqFT9L6YTRWFRC",
  "key16": "2FmtpGZkvZkT633mbkFd5bbo9LgNdu5AuM6wPkLGxg8HeoEbc7zZFxbyHgB8N55fYN6db4rs5s5m2RLFfhpFmQuE",
  "key17": "24VJLXj8LqsH2kkhwL3ovVW3p1BJoQAwTXbUJRckWEfjAQqBU7rvdV37hkutwTV5fkzLxh3RnpsavDznHATHQDJ4",
  "key18": "5bag5oYWgbYKeafBoXRzGRBiSY5Z9fxmX65aq2v85eYjAtrde3WjbTbiGmTC3yzqibGaWhByu19wNArdSH2xNA8F",
  "key19": "vp3ZczDUw5neKZ5nVkdDtj3uJMLjxpdyvQbsRL4ErRzRGKA11LvsRBJF1Rr32gjykXdC8RvKY1sUSzsU5tLJnzk",
  "key20": "5ZAgf7uhS1dBSUUuqrVUxvDLSe9VgGJSEmg7iJJcbZQutpFxtoodv826cvEwdcgFfvmtperE1oVVAR1DqpbpqhTv",
  "key21": "2yVgpezGLCzPJy5owZJ919oU8AW8YgDmaeFd87siZBYX1r9cBWhytkEzdeFPbrhCdMtHu2FJcq8GsDqvAxYx4nns",
  "key22": "4th9aPkXRFpwA23oHRfPk86rKHrM2bT19H2jXbQRSrf3ekv5wxXMWgu2Q4hLaAcwazndfFKQEs64bD7LMYK3Empa",
  "key23": "uurX5QwRMf6o76UCNb84aymtsVooPvDxwSXSCBBhqN4rWdLkz6YWeJyPuNP9LLRyTiEjzxHaa77h3tht6avwL5r",
  "key24": "BfV9XyGW1NNWVRun2TBpzMQeqoedyoEc3k1dZS6z8w4tK91tKmwNaw7T5amsBs5qPwPTbddhJSrqvmS2LYBhjcN",
  "key25": "54zhDJviCtuHdMMGhoxKVfkj8EQkggXbTqCq32fHVYbqMWMfNsQaSrJ6wm7yL4aCfefgADhEX2BM3QC2eeaKjx7U",
  "key26": "4v8yW4LWqzYzEZ4r3XHTH1DUy4ThbWP6kmkNZ8WK6TaRRifvrnK33zDxjTEk3cSNtv3UnusJf5CkBtTouePF987G",
  "key27": "64B6iSboagPo6BCA352QtenAbKTJ8K6RUfT1A6EWf4TMvpWgLf42w5sFENCqBsPbSjknxSCccGsSeMjrbrvQupLS",
  "key28": "3T4F216d7JYyMHp5sdMrtMLh9mXoYzvHtMCg8ax3rqfmXckmLwcLpFbszGjxcmKzFWnhsvxmmHcTkYYVWMnZWF6T",
  "key29": "4ag4JJvsW4vanj8HfL4D2RKc84r5wu21jSavDEDFLyB4uqJSmsDxd2pRWX3G7KUosCzELeHi4zdBaSPG6582ATmp",
  "key30": "44GgxB6hXznazAwFXn1sa8Z9BDWk1aBNkCzFkj1CAyRWK5azGTbCCtLZb1KXHsyVXTrBYgzqeWfV5RiVgTWU6bxw",
  "key31": "5LTt64gcUwdDMhAgXG71TrMTE6u36mTrLUwLF9stcM5JTH7q9LzCyvsfwSHLB6xJeW17KozHJAoVgX8Qy2Fo5jbP",
  "key32": "5PAuG4TuMZG9cwUPitm9c3RGtZLXLpVjNLFUrhcvN6kveuDzSDidiVwsKcLu5g1XsGv67T6E2RE5gFbD164quGdW",
  "key33": "4Cb6KF8YQDVJjAzTxX3xPfVXeUmZzKUCfkEU515hQYsNfb3dKq3guXrp7X1GycqSviV5xYL2qsgGrowi6Chaxi5U",
  "key34": "u3UMQayFmRAduiBwXifnANmMJRJKY6gGWXMURzugTWb4yp69JQauJMxjPGQi6fuukQ9prErzRD3mSfcswWo9UdF",
  "key35": "3QdKiW9CxHnBfazWXpkjq1tCAkog3mGjiV4KZapxawKFc26Yn7GJv2GdboQAcfabr5EQJVRd9seHGo5oPSUSUpfL",
  "key36": "63tLRBLFLh5yQcLoDV9aSfRuwe9FHKz2uChoKt1T5kJXqUQsd8xx9gAfsf8TSwrFHRr8Z4zrgRszeL3bTCC6pxso",
  "key37": "MHZ7CjkrpEqw83acU6gS4MDH9PqapVRoLUReiRinrSiDATUdJB7xVYzJw12nfzNVBKGReYSwVGq7hkTu9BmPgiZ",
  "key38": "4EU4RFfYpJQMcuwW24QNF7EhGKp9GVCH8nDPX4yZu1soeJ86qipbUFJVqcrNSZTe1wHbma5RyPPnGo2qAH2QhTkY",
  "key39": "3fyf1yV5QkYhA9DM6hwB9mwHLcm64UUosx9BLj4gei5pRK3WXLYxk2HRDMPZXW2t376kkXMmZEMDHhPZH5sEYXr3",
  "key40": "2T8Wkrk8rhh5hwngwqbjv5ho381jLEBCLE2VKV6nymtfs59VfFZHvbJ8SKnEkRgFedjq2skeMHX3SjsrkdzmjvCu",
  "key41": "QAez5WtDb6rXnCqfoB4YiLVKyqH3kWcZKSab3NKxTPomQpe647jmuakdSDRApiVfDtSCL9PTL1u9u2RaFQjjadq",
  "key42": "eBxMzrZfJGGJj8ypWDHuscywb48Dg2PwpJAbpsJbSEDXpuTdyaxZ4QUAppLPw8VPz6mhTMJYqgryc85cmcche1r",
  "key43": "4DWJ57JpsD84MjNLni4cgL4MUTuMC1TjZwgBcTzzfna8JDK5DupopeSLdrBtQHaUYHWbtWPoHpfXkGH4zw2KGVXQ",
  "key44": "3fTbGKtPYxVjyhyifzN9xqWViEMe5E3Sf4UGi2UWo3zivNhvJacoDP1y2WLuj5p9ASfz6ZWSHgTgXG2vW7i9dt5s",
  "key45": "3T4hKXMq1aGcPa2tdPQTtPM6PX1ZGFNUescdyr8ArCRRLDwhP3Z2sueLuWtA7jwE1FYoXANjCmP7u2V52fVKTafD",
  "key46": "65xTv9wkT7AGou5GqTNjocKaypSH7EYcyVY6nVFcnEwJyJZwwXN3SFtDJkJ3JJtbvh5m5RK9bJ2MbdijNmwf31n1",
  "key47": "2E1trMSsSAeHks8kkhXhPMbx25ywSyN3KsYst43duhV5KrzSGVisd64RAZMJTgNRqCKvfYeeygAjWg36w3tSinjH",
  "key48": "44df2jt34JEyYcQWQjsGtFtfdbqX5GNcmXM8zHNfNmRW2yw1ttBjfEcCixcBgPUeZKYX8uXNLdATRg79iDrBf6Rm"
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
