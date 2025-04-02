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
    "34gwPiU9Dmco8r4zpqDrYhMQgbqaPWyhcKp4VdqsVoEpfznuqY9jzHoUp4ZJwdh3MshWaGtzWgfC6BmQfBKuRH5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sg1DiWahVcdS7Vu13f5nG5ZQ1Kivtog734vbg9eJvbkvd9qF6dGgUEWucrbwq5mc95CoduLCidxHDo2VB49Ej4K",
  "key1": "Zn7SSL4xvNpEZ3UjmCpLtDSPXXePwrRzVjnGgx59fLURDvGRjdS5AXhpz1dstXGm8tES8ZRBrDLM8tKwcN9GV8r",
  "key2": "3gVHKj8T2X71XtSBx3q6QbTCXgGhaNptdrg7pqbD6gxVo3a4BXKm1jq1mj32P76nMDKBgySL8VQLV8hxLaQ3Fa7R",
  "key3": "2Zk9yNT3yWwoVQT9vr3oXotVUPkAfqfafSkxNowgaA9cGKggYeR5Qq5i3W1SAZFpbMmfZPvt8M1G6wz96AvAbSUf",
  "key4": "mVXkz3V2CW2sQXKmDEahQso2KWrKyxdz2wjErn3uwUMy4jQB9JbvEoPYmGDuemYr2PwuqUrVZBU2MwYgpUCmum7",
  "key5": "D93DtXTEjdQaonRkFA8Ps6Rbnb5PGF8wViwAjB8quuVAZcx5riAYmeo8jNv6427igMZRLCY9w329aCPuXJqdYsp",
  "key6": "67VeQErDGMkBMHxpibSx8TasF1uUaUUGgt8ppynE8tVGPqBruMmc2A1vVJYUJ3Asih5EbTeteVKzSLE1WXi9jjZM",
  "key7": "2h2YPszaZSZMzfpw7G3ttoXBTuFPDshkto6jXaP8hC8ETPX2ZHkk8aSjBBoWMNDBem8LGQTyK626DLAkMbrp9LNN",
  "key8": "4iuo7R2GTWQhZbhgbbZbxq7UtvUBKriH6Jjxza6Phejfwg5u5FhpHyo3HpzndgorZJggWY9PdNiw8G7TBWkBAJ3s",
  "key9": "62RUCn5VbU6vGXT9q8dw4tTUBZ9fqMJmetpk8SpdMZHNw7zJavHWwktTVcUa6oXjtfVEBkDSJ2dYp26M2cQJHS1J",
  "key10": "2FbbnJEK3SmZ8YQs6MLgGznAgT2EPX4FRZ9QLN6fz57dMqjdqPJqeWuxUMd8m4zVoyMCKvFnbN5qNx4DACZTuVWU",
  "key11": "458miDoGyq2qFfPHEo6uFDJ1QT6j4iu1GGMvzMf8fksyFchwBjSQ7jv6hXyaQudJ7rwVSTYezd9oNfvEUG6orYjz",
  "key12": "2AyRXBtC1ELTKM2VPjC52GZ9fRJVtd1ccgZfjTMqmMH8MWPJPVY44NPJh4NpzBMoqUN2iPzEVxZXDBTViJiJ85ES",
  "key13": "2tx2EQNjn9QcP8RM2CcLjkAYGfh6zWK4biuGPnpmJrtFsDNDBYcK5DyV6KvLeqZLGYWgKhoy8mdEkbVFrc6eC9St",
  "key14": "3xefNRddiQmU5YaHdJC3Jf9nnBhFMnFAT59BqkzrggeNTdmVKZbN6EzPLGteX39D1uoBHnjwXnAhki19XgwHfGNi",
  "key15": "4avWEigLAVzxeSg7QThnAXiAuBvk7gr2snrN6Vavb1VmsvN6zR1ZMkdGmojY7xV4r37k3sCiD5rhwvifQLdg15AM",
  "key16": "4h5MwcDKWvUsQmQGEDGZxeWu1tzYjoWtmN8TLe2trySujdwC7heSw1zCUAafVhGoBjZGfYkqBxaBY1iEzxU4Bwjt",
  "key17": "5Lmp7tZ8JKLvmp5sQpkQ3AtLU39whhVhHhZdmZRw1kgJHouQbSSzEZcu4rdG19WkiHjfZi4nZjvDBrH4LgXb2NbK",
  "key18": "2fQU7o2Y3CpgQgzetx7gAzXN7A21NZibqdk6gxFMtp2uWQENwKUPPJpyXAGm9ietEx7sasUUtp2w6wCXj2NaZjEr",
  "key19": "GD3G2wX3WyY83TFQMDkepJSjmTRTXYcP48Vw6hokfRrGW1nTm6Kk3wxoUQxeX9ghuyvwHy4UhRDKPnr3h1CLyXu",
  "key20": "34SeGoUn7Hs6fWMd578Z8zV3GWxTiiPExJuAD6yVHMQFZFtqauhdvFN95YW1TfuS5NFYTXZJSCxokZa8vvEmTP19",
  "key21": "4fR1QCsaZCmRnw39TpiUTTRptgLjrEaDaMKWr7igdfbsMqbj147g4j9rwyvjVmW4jC72mTWB1CrL5rndN1GvhQdq",
  "key22": "2t9y95dpQ1hm3QkPJFiKkJfXWWpUJyXVn3BeUWcVhUEYXB5hc7g4aAyVYW61RYHbbcDK9Dr3ve9ETPjCK4AjeUTe",
  "key23": "5EnCECh7cn2GcusMhtCmkeGegM6tihTqZzmfgssgrrqU4dT8hvoQsinTGkKuKWTmRfUWzFm63EquqVQ6vhgga88U",
  "key24": "4sAEAXF5zNTD3nH7CoiYht9VcoN9txkXyfEf7hWF3tzJGmMG5pbuwHFVBRb7zitCbADYnHZYtsiE3wQkPkJQnf8t",
  "key25": "5uZbp1a3FkxCuijJWJsNxy8B5nD9e3r5hmuxJaLdejTpy4kps8fAqCpWrx22Y8Ts12imGfyiE4pKkJkzTTr84Rxi",
  "key26": "34rYrUrqfkj58UjPmkzUGpJfLxWvR5Fy6NofaxtHiEYdurbfMKNZh4xGKi76AM2BMNd3xuE1R5Kn3ZZY9CS1gaxk",
  "key27": "AmCKKQ6dRDmeeaZtLwfuqx3qCAJSqDEGSQeJ5CaFRMgG8TyxtoDKzPWmiXr8e4w7uQ7ZBGHKd1TpYvtkHimhtkT",
  "key28": "4MWVy7R6ohEWYfoFZqTHpCBWTY7pp9BRjPYtrc6BV7kstkGZXqNxDEPidqpji19z2Au9mXjQECQLXz7GPswSMHit",
  "key29": "5iY3TwSLjxkRvWR9bdMDyC9W11wct2ysvkyAmrjRchMD1cTqojMjsePkzixUaHYJsAruAJVdJgeoxNcgHWma4r6Y",
  "key30": "3uRs5QCE9ven1HM4T2LCEP1EUikG9mHEX4Uc6wMcogg8NgNtF6boqPcGUGiM72xnsCp1ucMPf91bHZkTLuqQQeUy",
  "key31": "5zP5ZLpEFhMaUG5pUh6kooae6bZT2TErNJt5a8jK9dk2iX9KutzW78U7rThoA3c4cUux9U5NbuDcGpZJPaWmFuv9",
  "key32": "5ZXcnVWXZKbYjJRBizRW6Lqqba9fYdt9UdRGKDPwkkoPRe35ECDVxyKyt8zHqDjExuKqRSJgUzv8MwtJD3Y4GiHJ",
  "key33": "3vZLE7HyVLXhwKjJ9jM6YAvTFTzzPhVfrTAidwsXj9SsVXCZLrCgzptq3y4B1JpCv2WotX38TwN4e52zZDiMzvd5",
  "key34": "4GXAkob3tB35NKv9jbkg6gJPGbUuRVKNUDa8UmYFvZBY44zVXYXQnW2nPi5eoRHWtA5Fa9TqWRcURBR2GCneHGXE",
  "key35": "skJcbuU7koJPbTzjYiRM5KbJcAUmVLXdRzQBGXcetxNTxcNR7iraySW51DJgzGjcbDWrMb5e2xzh9CH4385wRGF",
  "key36": "2BrxxhoDAJB4zm2GAGywCiEj9uH4soo8BU5mqFauSefiLHXcPJtcBg2VqGKr8i8AgWUmorHcRauqabEh3ckh8aai",
  "key37": "3KzrPiFYzjKp1KHRoFep6tnCPD7jFdPmgm7pEMF2cLtRSRsfrXEkxKeZX3UPRL7xKEEQVyRVhBL3o93wtrJZaN3D",
  "key38": "5vDujrxj1t9wxALRt75FFmZun2rMbfviLcYzxaNWoU6ovtX4QkZXkZj5MePctyH1oPRTV2th21cSenoukPniGJRH",
  "key39": "ZVLT8dqVYDz1mQJQGnrJGBSzUkBG8KDctHjawBiTHZq8bYTUyGtwYQhxv9fYTFgCiQafL7LjygKbWaZRYb4pT3a",
  "key40": "65T4byjoVaBuaaxBTXEHscDre8HWEyp4tGcq3P8kA8Q5gYxAcQhgptFBsrd5pEfyxHDDLYH7586rAocc48ezJVqb",
  "key41": "xzPt8EUg67m2TpUmfFecn8Nburz2DnjnM5xXPvrausHiTHrAoAjpTjYp77Tv4cjzHBKgkFyZC26D9o51DnWCz1S"
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
