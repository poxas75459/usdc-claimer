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
    "4NbGnQ961FVVYQifkn1RpsayUkvqdT73JhYsUb1ghaostpkn4BUnWbcngzXnFrhRecnjEHKuGfgqiLk9bSHrLBmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRNJbAo8s8NcLzyPTi6ZQdfdkmY5YNN7yXVSfU95xJHhFcKmX4K18xodK9Pw7DupNNR8tEnDY4GszrvjQeLkjdx",
  "key1": "21MpT6u6Erm7pdo4eRfbF4adv3hdpbUDLdHgiQreUjHyb3sd57QkpSvT9sAjrQQRU5Y6TSGNbC5Qx6dBhytVvm9a",
  "key2": "5DAP4e8fUQtsnK8oAViM4oH8AWJStpyUi1voCMMCZyuin3Ja4Fb43JjHYcg8D43xuYueEgRuZ85Z9zB9F85swJke",
  "key3": "5TpdZxThG4J7djCYGcweHGzEUYBMStnNkYRkjwkZLAJhEWHbUmwdcqXkaYzNA1SU3Ug1pakiMxjNqxCyHVQmmkDP",
  "key4": "47UTCp8j1AapaYGCjfJTbocev7Q2RyhEAybxykbZBGW8gb4sNn7mkTGkjunPJ1D6fxKNUBveqGctRRxjUSLvjmbC",
  "key5": "5HeUi7nAer6XuidvSRkShj7WPbFt3JUP5x15MehJzCQcpzDjTgaKrPkvUq4EZoARWVejCkCJr8qEkP7tPHe5Aqbk",
  "key6": "Y2ijHQ7LYhMfekMSVh3oajAq4FivabEKaM6pxJxHqVVBB4UJxHfPB8AsYTBEB3zAQnE156JR7cKMbtDKEBW3mAW",
  "key7": "3sD1uwNBDXxthE4KkyVKbSqqf9BzbpTCU8FtptynB8LiwvdZcDD9m6yS7BUcLeYnj1vuFk3zDffvP55AfgivcCg8",
  "key8": "4W2z1hp5LVWknxMYoQFHBu2BSH7w68pBQyBXGwwH1m29c1Q112tLuuwTRvBF9bvTcz29hJi5ukqVfZXWCx6bvBTX",
  "key9": "2m4De9Mb4cBeAH5BpYnzi4ewSbJBrEuUMLzg9Gxj2dBKZ6G5sGte584xCWw9r4VJdHH51MTowgP4SVmbmChJGLuA",
  "key10": "3tpZWN3ryCRF9V6rwd9d5NEZm3pC51YM6zf1sW8phaCii8Bv7Xmmw1U2m2MapcCH5BAdbCFJHNpscTEFGvDtJRn1",
  "key11": "5H1TBY9CN8BjVL7LmahsUCfLCD88QJ4RsdbS5pv9X1C8dny7Q6bencRexAn2KvYGHE2RrygSJjkJ8a9CJAopCHP",
  "key12": "2hCwXhv7tKH1pGaU321BNuChbgfwgVd28xFwExHLHmSZnMyQ8k1DEkdNQGfqVNDj8zjN6XQiZD7PpaqGtFLX2QYn",
  "key13": "2TVcGGVXJ57MaD6AFCRV3R1tPo48wAns4yu78SPscW8VrnDhVFpcL5G4VErzogvGv5621u76uZ3m6W2RnAGNeSE4",
  "key14": "53K2Q9t5CAeFm1h9bDzDZk9DMiXtXSndGqxAhNzR1XEaJEtWDQkTc95Ef13GxQspHHVsNi5XRA2hYc4aL7K2bSpx",
  "key15": "LT1mfrfQs3MjKXxaGPkQNybymW2g4289LZ1uBWG8NjPb9fTTXRfM7L8teBHXaarYpdeEG7hZbUbBNg3nHZzZRRv",
  "key16": "2kA6uTq3fgzce3jK6M82k4Kw7aoFTTdoBgsP5CeQ5U6dsrhHA1R9qJ11DhWhjVxCPUNEULGsovnsDSHSAc4hBiXs",
  "key17": "4muxuNEEoDiKTeyeHoEGUzfzHsAZdfPLthhksc2zBUaM7osNfZBZkVxnphHkKNw9ohB8dEz72HkS5fUGnMJGaQ2R",
  "key18": "3c78CCsTFAKJtukczbSaxTeCBGSvqXitFx4PWtVw4EtHj7AjvLD2xHePLC1f1F3NctkkTbfHDeDibiGBk5YRoLWK",
  "key19": "3pYtLq9zupn4mfwDyCD6t4hG8Tu365K733XQkup6RZpnjjCQTeUaTahhxkYWcDDpU9kTmrwneD3DGmcDuk6FL2kn",
  "key20": "rWFGRUjRCVym3WmENKQEyWSzPvTe8b7FN2eMYgmrXo6cg7rkH1zwLSJmQpPDpRKXwx3f8X1Ro5AAni1Ws3B4jz2",
  "key21": "5EKKFzsqZenSdXKVnFnYL9nLWrWdArHjCrAHpP66Vc9D1am98Ro3eWVccn8nGN7xMrcDYMJg9Qgp1mHyzTPPs4Z1",
  "key22": "aDFXNbu2kUmUXJwGETA57A6yfQP6nxYweWVewqzvAH2Yg5ZRF4QoehCAADtYLYNiYtpw1icrFgzbvmSQeYGa5gn",
  "key23": "3WX9XxYWjiqu2kNnzV7U3Ah1ygxAyFfHEFejiPimbcoamDH8NHrqBsoPpGcaGwPQZqyMmV7NP6KJ7PPXG7bATqf8",
  "key24": "3d9u3FhGtUJXRpCkC2X9a3VxUvVibo36y5ZfnDjCQab26RbedSteff7u9cqzhoyyazu3s1xNR813srApsp7GiFQi",
  "key25": "4zcWe2U8GFWBzJTqUDgXVaPRP9DyuvV6CifyGgetoy2JQR4D5iKaWtNSm9RfuZuXkgiBGx5rR8Mtx4nsujuWDaAp",
  "key26": "3FUS5rRU8oL2dLvGvaVpweV7JsJkBTiD2SZKSL8Q1TPGpjRmsCsLqSHekQqbHEmQ8Pc9rALhEJiPpgSzoqxyaJdN",
  "key27": "5evaLdH44ZbW8dS38enaGTDjhLcaYN5MeWnHVNQ62yxYibLjEXLfYhLKxwym7VThtAPUf33eRMJGvewwVax4M99a",
  "key28": "3p1dc7niDaYm7Kp6TZFSuHtvkZBE7GYvCeSBcA2WivaR9TFEzm1FvkRhygkbQihW83nXvJRvpJQLtRoTMtCkW5Vv",
  "key29": "4wsRDJCCNBLU6KJ9ZCK1ZAXpHXw5TzqFBu94MaZ27PoXcLb7N56G7t6BdyTuQWcNK2V4J8XE3gS4CdEVhZcWpiF8",
  "key30": "4k1uz9nsLm7xqyxrzwYAdCDCi8C4ECuoFA2n42zjkPycRuq7iaYfmVcbMKgC1rKaN4SdctPVoBZsfC8Cxp5vJzPy",
  "key31": "2jxLkVMduAPkb7dfjsgoGGD2Bt9bSHYKpq5UVkeDaVJoD6HiATCrxhEXdQN6nLcZBLQyeivesk4oyQVubhgbkt45",
  "key32": "3t7asrjSoEQmRHTYwsXnT5j4a1bbAHMdYZrxjRhVUVPEiAvQR95UQBvmkRJL1BMbA2pP4d2bri9BmvSNk4RroJYd",
  "key33": "3V8eWWGiNScaxe1FB3Qwh8Fk3nNXySMcEFZPg66euz7vZbD994T68izLitp7CUJC3UrSrbV7oeBx5xW2xWxQaTJN",
  "key34": "58MCDxcNbVDQq8X23eaj9o6L34RA1DqtGj5AdbDZdkdNJCwCGBp9hHJ2mBtVavZeNK8VJSnBDeW1XmKXoiDY5w2m",
  "key35": "2fWrkZTZ89BJAAxYFhQTB5xMsiCvLnhTWRtmVxPsPX8tSBUkKdoLAXCYGsaRMzkawyJe1etPxQtmV9v4MSXFoeeA",
  "key36": "5Kb3Qe9xpD2vidkMwADCWZzJ47DKy6UoAChD4oyDpTqaWCL9PiYi9ojtFdNwwthxb7YEYMMbbBzm8ax8bT4ELiv",
  "key37": "4BAeBKGRWzmY3EEhC5xaR2fkChmAyi2Q9Z3csJRbztojD3rk9xghjVGaEemTTgf6PSKnqY7BUSLmXnZAZgZ6X2s5",
  "key38": "4LSLJgBM5XLuxcwEFS2Ycx1ejwUkuJCk92CtEF2eQrutLaPHBVMnrdjFif791uiuCF4mWwaYFzDLa4iYuSgWGKZJ",
  "key39": "2QYBQ3rwPKkqxGJFG9mo3NWaHGRRjXdVM1ShR8j7XKsAWrbXMKF6jPNX4J3stew8VMNByo1m7sPheWdoqRCKzung",
  "key40": "2RRbZR9AtQDKp5KRk2GV41UVW6naJaSae3QyWCcbK7R2GE9X6DTQvC8E4pgNNiC5ajiaVa7egz9pig2nYiPvqskC",
  "key41": "4Af6kp8qsxTPQn8n8S3yxpTR4BrETDnnzqy7B8UZvCgbmkwPW6jeLXJ6bRDLQCuhqmqEQaHpbcq1uJhay3LzBdFG",
  "key42": "41FLdn1KtntYPPGbxQ443XuWhn2XCjzbezSUbDScFeNEKNK1AazwMe7waUWua42Vayn1gqX25KLfMtFgc79R5QTr",
  "key43": "4utniof62DzeA2ZwQBQzTyFKAbkak97Jo7mXpDRThMSQvwibaCMTBk5k3d3BfKUxYhLcwBYSAHcMMS59cax9CRLM",
  "key44": "5e9gBZ8UzfwjJkHsdTpkkEkyt955ZUCftavywGUneqd9RmdM5sqJ9dMvpjv7Vk485RfwsUgBNKwLKYDomoj9n4hh",
  "key45": "4HGeB6VtmA1nursukTmAeGe5gmQFjayVSRaMC1nafiCTXXeZ8ArZHp2pCkjBEMZdaKeFV4ar3PbATEwtBvrDmv3M",
  "key46": "2NRJjLZuUyYcD9TmnGToe7Qnd9SdTgVqsLAdmw8GXBsWfHF2BRemyfckA62tz8SPpWVXz6h82nSuYSwZWrcMoC61",
  "key47": "4gUof6ZBvpUiagsjuRF9y1LEpWY64CYPAoqScVu5MKVgVmTr7N1mDgjbLjrhEh6xku7TMuagv9FVKJezfQyz2spv",
  "key48": "5dWus49HdxR9YGvK1YPN1vSvHUBkhZHkjsr6Pj9WTPja3BGGpq4t1YFnVa628ofKy9usHeg9CR9iKPmA4bqg6APP"
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
