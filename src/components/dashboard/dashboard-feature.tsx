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
    "265NDzqtFV4LSd2XgTxiLeW3bFWEwaL4YZ3oibg73JAnUZH6UcwL19ATcVeXBt9dp1ph1JC9NH1Zdsag38f5ptb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fz7uiQezYF4JpwwbfBwzo4uJmFLK4Tq2gt69kMVYzYFFyUyzFxtwvr1t8tbRM5JAbzcwcfkU2YgG9rkNQHxmuLN",
  "key1": "3bvfswBsPkg1baVCJxGvUhsfsgjb8YSV8E8iBtyF5yBUcepgb112rH5BcoWNPdLFS2yZVsD7PGb4s875ikDfDqJK",
  "key2": "2JPSU3oBEzJqv7SQeRywthGcNfjNh7qtHPJ16X35C81rzsJieFcWkn6Sgwjd9yZQGzVNZhJ3MynEAUL3kyTK6Dm4",
  "key3": "3Mu8R8EkNSXmjCPndSftH5bSJMsw29nHTbqxVcV1NbYngohf3TgX7XftMNGfVBsCXpzPcTHQkzNmAVhwC2nsF4Nq",
  "key4": "2mybcXUcTckGLmAVWt9vtscKYhhyxCAX8duGETDwPvgMqDVb2JMtfA6vutw2AFZ2HUkGmusBVsnPdM93utUkVyGb",
  "key5": "3PU139cWiYWKbLCCU2paMfbga4PhfwmZfW2oa5Y6GM4ugSMr8PnyzGkvsr3PxMNBCjvcfVdzUEfRSST8NH6PMGLs",
  "key6": "3f5SqTqjkCmRz7bgASRpbsw87hvTQU9cQspk1qTr1JtkfSHUDK6ip8wBVfmXo8sgZKTedsiHMhfeyjdAKb899m7v",
  "key7": "3yZ97bMduZscQ9kDk7Rn2N131YMtEen2YShv7pcWznEqqLFjK7S72VpcKUfqxnmNm75p35Bq9HeZoug4E3bk4nSz",
  "key8": "3atNj3vd7BuUQSwXfwsxNPPhCYDGzVs9i1kgGdnQuuDXBsdn5QReqcyQt6eN5AMUGpsLvGAe6Cdu6hXU7oowCfog",
  "key9": "3gFoFhDvZZitrY3cstT5zZcpaKHfZcvaUzVaMq2ChHXfK5UFHK56ksAGxytuPk2GViHh3Ds3SYcXgqynXC88ZEC4",
  "key10": "3KhEta7oWm3PgYPPBVB1nj75orChzdtJ9ALgThrmHVoTvMmcuyxunm979iYhSTozkHEQE1MtqTRPA2tATTSXYRrM",
  "key11": "2XeJf1fVir2Mvtow4hzqFRUCUMUGgrb9ApPBUd9W8GHeqeQEg3wbSEpmTEGgDKpE2LRQhR92wzwAVhDbLDcSzV4Q",
  "key12": "2w2E3sTwDR5i4m8V6mHcJ8QXFYer44RSSfPUG1aKH1otUrU1XMiwU7egofrRDPonmexzJeXHpWP8m53gCUb9aHxb",
  "key13": "2WwRYGzmh6GbRsGkZ6xzJQBphK7ntEpoQiA4GY9ZDdQ4MamFCQ2qZdhpq9TXfNta6hvkPmmSbL1fJXVr3uCQtfiL",
  "key14": "3BL5cZgansc6aJQ2zYcQM95nsGzHLrAHF3rvqB1kKG21gUfe5vfpSEmrCtkCYMnxy255M7dZUWSTzZa8WDfRMAfh",
  "key15": "3LbqLJhnhphy1yUn8aKyD9grnL8g9J17UXVB8XmyyuDdohRTk8HW6WxnFsbWkirLVn4dfb36wkVkNUH64rVxybUq",
  "key16": "2t1goinKFtKsjRYTX8HmHbuGRzKc8BmtASJUP7Fbo9b7Rtq7hYaJrvX4T2wt5inN9f4GD786k6gGGSiQmEGRbw3d",
  "key17": "2LHuPsvMQLP8URSbaziqyTdL2KzgkqmgTbTn3Mm4qLcVw41W3vmsj8sYDFXP21WxCSZUzwgUsFgpcWBX9VKxbq3K",
  "key18": "4zxn59Je25i4xcqkzieoQ8eBqq1WEadXQzy6DgDC3y1pYJVEtKL9VxTVekBKR9vCJwErv4GLuVj8MxsL1qYBRBgp",
  "key19": "3igqe447NaBKRF8imuLJj8o39wXWN14kXkmU4Kog1gHTLoWEBnwjUu8N1jurRkjAPmV7MKpBySnBZe4X12PhgMtR",
  "key20": "5D6zyebxVKSxZd4zRtkpk3kRpirryjfDVSU4zRhpxZnNV5JM8NFWm71Hc8LKUAm6qeC3F8ykSv616k6oryg9JEMv",
  "key21": "3BcxWvRTWx7X8f9kxJGUnfg9jQsnogSLJoGtZLGEc4Bkj6txdUpk4QU4pWXBxKnzbHePHqjToxTyrYD9vrg7PJtm",
  "key22": "5jstw4nYsHg8wF8jk6Mh5e8Ee5PPMoEDQ4jDwfSsWNzhY4XRFXbL72w6ghE9Dm8QBPpLQvZy1uhGRdatYc4Es2YZ",
  "key23": "2NAkcXY6JSZHvWg1H5cfCSqJJGth3NzBpJ7DsNzod4HmkQr3cJsJFgQQ7bAGXxEwDkrEpkr5xXvTzAgVe5W3RKGu",
  "key24": "4zjKrDFFMYsmGk8hGfPJEvNjTUCat9VYTUnQiN6pa3YztXdMhVe45K4xKNhGv4UT6XanXnkfhnZxBW84icUb5JCB",
  "key25": "5tHUz9QLef8nFz2v8Cm4mYvaUqtAdcsnTsWhbf9sP71pPYjV8VRX8qaKRczztcC94p3PNBQBYS18B46Dv1oDL5AK",
  "key26": "36hMdz8B3DA1ZRZBGxErC2VqrtTcrmVK9scZL4EPfhAwon6YaqvCjX7nnkaGMyn2Ey5bVUtsZESiHo2wWpKeScHV",
  "key27": "3EALyvE6Gw1v36517DQSnoK8FmHrGHuD6Fu8v642Mp4mAdBFtNpmebDyLXykDNWsVRVTKcFKW3MPURxBiqFaVy6s",
  "key28": "5YBfJkz2ajSR7TMFhTof6uYrnoSq1G36YeomH6C2GLg7dbaVi7jT7xtUSjakViazh9vHb55eGDrPJm7WzgK2UqRt",
  "key29": "4spbBudxzzoSjT8Q6pZDKYQTovvjMJj65WjYCsUPB5yJS8m5h3W3riaaGtAsWzEKr5dTRzqA76DUJZd9jfH6sQZw",
  "key30": "3CMExbCFns7p2Y2kUsJbCt3CiT7oNCGTQH961jXQvnkhWvjKVf65qVG5JvezNJzUkafJpfQB72Q3B42ZeSsLrbGX",
  "key31": "2UnnfLBXF17pKWWAfaQBDY2j6rjVLJFbSgAeK7nwuCgohcedLzqtgPH4xQvxXHZEaEHARJ8orqwQJRdvbtDHKtPW",
  "key32": "3PJEU5oWY8nYdXqqgcvW4baMaFVQhyC5sYYH5AMYtwEhX8bF8AbRwEpMxCeny4Y6ANwwijvVze7KSGZerC64Gcg4",
  "key33": "2dfTue89hGzCcQdMgiiw5fmn1SB7PjFrvBUZLZXe3CBSJuZ7GzW6W7Dj52FXqp8Ad39yFc7mhRZAQ3F5t5RQT1bX",
  "key34": "5cdfG4viz1H5ApERVo2puiaqcuydejyJhm1dvW4yLn35dGZDiRrPA7dfSD1i6UxNdMD1EMjyc1fiHX2HdyCsZicb",
  "key35": "5RgK7jitTXeEb3uW9GXWP5mLFzHDgQEGvEcdaDaNNhaAmiUuS3TnZjVN59T8CHVxVP4gBiQ9UWoHo2W8nLbdDGi6",
  "key36": "4trpxR8Bq7rKKTgsQTV7g7yQUMaxsHndGSeRHicxqBqoAvoWvNynQ9pCMa1rJ2rRekrwqV7EQP3uyt785Tj4iTSd",
  "key37": "3TWa4V2FLQnqMdbGVPfW1Q55jRra261HBUKij8mBK9VYJJRtzaYmonsRiVycvBqQyBhpBnSeNEVGvoyyrH9USwzF",
  "key38": "5qgUJJEH2Rjb5PbR9ZDsznL3ykTTxwTc27wrnNfoAxJBv4kyNSWMDCx89WJMJAB9RNn7CQaf4XDdo7vRWRh9eTVL",
  "key39": "5ha1ecQng5UFZ7YK9HhPW8wwEZxCaiEyrtWu3fH1HbrPz6d6kzBc8mL76vy6tYPqVSSY98H8FCac6kwNEDj66fHF",
  "key40": "p7jNJDVkrB6TMBosVhdJFbTUFXBViK4i6BceVnxsCjBwgAN7rixuufLKFmyML477JNmRFaD9ZSnbJyxRfBUsiBn",
  "key41": "4t5dsB1JPn9ZCsjWj4Azvwoa1bZydcPoB38cDShP9vebVsAxnK4dAJ11b6CyQDwqPaecTezj6JtKbpemHuu15sXs",
  "key42": "2HwxGJpvQVz9bsFiiUaDDVFFresBX11m1md3Wk9UA86EMGgT8aRPf1QudirrxEDawxxbZR5cfeCghjuQVGWoakrx",
  "key43": "5imRAwArDNE65io782hnqqBh8thWH47opW32jmVbDdc5yfxPC7FnFbVyFEpEYELnjqSXULBuNJ95di2T1KoatFxW",
  "key44": "2mThZheCQM8vvAdxt6bUdVb6WuRf6dMvjZr7MaDRUxkV8ghPU5yaQ5WKbaW5WotmrQkk6snpmYDUo5ZAjqqEgGu",
  "key45": "4s8QMJMj65MEsQHitrnD1e6czgUEtBQzc879kmU7yQwyQStYtc6ZAzepTkE3eHVQyYaG6TYtLckJzK9BWyKJSWnv",
  "key46": "L1V7mj6qQu1Akm4hKpUby4f5wKz8foT3ySbLD1T3jyxpB4vMvaRx7phkj4guQ4PAfQVdhMTk34VLNAj4XqqrkEr",
  "key47": "3jHdpSogqjEa5mg7a8Zw5VMxfevSGeJyw1SBHy6b2FtE5G3M6kQP5xWmg4hDKwbdqgYD17FXp45UbG3EpeXFgLuT"
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
