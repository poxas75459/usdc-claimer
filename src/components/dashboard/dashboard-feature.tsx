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
    "RbvpjWFPtkr7kZLVvstseumu7V2hm1yYsWkHst4qV4zeM3M3j5oh5k9h1J2VFFnEbJ9jfx78Zna9LRrpaZBVt44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBsCaZcUYTZ4f7i5Fa1GrKHjG4rQB1n37akN9ZRBcZbk9TNBUbhyyT2FU1xG89MRJBHyij3Z3kqgXG7SRsvLUGm",
  "key1": "66vV8PD3LWsQgvxhGBnKjBAkGYQznxUnKmqAfirK6i1r1UJnqzKHENcoSZjYLmtWKmQZYuQ432xfFmd6zHqJag6a",
  "key2": "4U3qto2deZb8Q3gXo8zSmMox4PV3VpUpjhLm8sPiRZJsZgXynPAyWzJfM5AuRVYKQ7eUovuF6DVCF85pg92CbhEN",
  "key3": "i7ukh5TfJRNSpqk4upRetYSsQrNGL6NkuvoWRkpwg1sNgWxbzbwxPgp9xjaXE77gFpqL5RG2tDhGte8AbBqm5Ud",
  "key4": "reY4fze7TNekdXePJyLk9WKKo6FYssiYgKNP3Ur37higL4cG22RqYz9jxXKb4xmdPx97hZGqvQhfKvKLngdxzeZ",
  "key5": "3SLXn1TinfZMvW3uzyMpcxjaHAGGwtctniG3vnYNGBt2fPRxCzhkRV8irj8xZB8dfprYDnJ8iMtrSYtKKQecpFEk",
  "key6": "5RQjLAL3xjpnzCP7oF8TyMtBEATVeaTcW1gw5nwPryx38sQeJZ2NnUim7N146vqWQhZnpUQ6da1kYUjcErVNhSD4",
  "key7": "3mFoGViUKNLSUbEaxn6xmyouFtvHRtCdLAf15q5HorznZcpmKZvyQeKXpQQXbQNReUCeELYztP7skZrAFJKWE6RG",
  "key8": "fbZr4A1JZ8xp7FHt8Yy2CDvppseXNhtASmRR514uS2apmgjqSMYmGZM56reLqVqhcTVxXmpigWZRRsp1ppLAJD3",
  "key9": "4DK9ZsjNhiWrhEey1THJM8eoPgXhHwuRovvFQeSRcKjiSDGz2FNDzhYVFGGpFBBuQG1817Zf6CrvVx1gsLPTbuLE",
  "key10": "5a48mEVZUnckZ15ejrBLVRwTJcAvwxFct3UHskEi2VvK6DqD1r3cjcEhcyPe3x9ts7ESzBDAyYt6ZmeR6X5iPdak",
  "key11": "3fZobFn3J65DKtvXrx6raFfJQxkhfnXtsc8EjGvwyUmAy9cT5np9kkkkpmZTk19kvDPRF5bo4RspAjbLDibSwRx7",
  "key12": "3rZHpVhpacyCKVY7qi3nwjrmCnaomAgW6aXPna9PopD5RHUdhSgTUafQVhBeqfuVEHd3HU2s3r8ZGksmEKhzevFm",
  "key13": "3jBZ58e6jvibkonNvAk4kRADTnPndvifW7eFfry9nmwDH1QGiWJJUmNTPNNNAXtpFjm1TcwRCsAAwccLUg9yUhZg",
  "key14": "5W8HYe433gPKbSDTg1ipmVd5gU8XtmYY89YTc2Qeh2mTTX4tPDJgFZujUqJHZXNksew5gmZ6aiYgX97xBzELfwM8",
  "key15": "26HLmv6PeMe9GYuC7mPwqFsw6oVyBFskyKHoSe7hnF23ZGsaSj8KZWmGrMB9h8KPKnWMgS7d4mNzDAsjbtCBUXze",
  "key16": "5gDhG8ziwKgQ8oxpjHnWUxNQPRz741cTov114grtVnWDf1HYZ1XF1BVe8vQXAND4WCkVNvVgxdbGXCooQfJSyQg1",
  "key17": "3f87o1idegfdNzFYe8HQJw9984Ybi8xvNm91EzEfTjy1yw4FGpgKgjCqknPgkmuk2GJuEnJNp2nic2RXTrtyQPm",
  "key18": "51qoYAuSDCFXz5sKFSivjdMXMSkgALQCtRsg4iK6G4gUEZpsCVaSi2tfY9qaTi7duXBgvGECv9YKdtJWjFv4c6od",
  "key19": "3Mc5mDnTNgRGSvMcz1oeLYAUnKbtZ5Ksk6Ji2JqXvz6wVEJJL8ydtFn2h6sPa8BzsEjZuUjfVtcdC8eJy8DmRHaJ",
  "key20": "39Zu8JVNhzFMA6tFSsjBjVGcc86kaz94uk2WbzFo77sWgNh5m9MYSUKr92Mm1r4kAZCAtXBdigexNrQT5j9acqu9",
  "key21": "27bQhMxRHAj8eKbBBSexvDLA2WNqCJnfVh7j2opcJzczpVmf8ADAeTsB36cLxMgY8sjd9GgdnPPFP88rsqmvvAkP",
  "key22": "5G2FShEtYnNm42UoGtAXMcwp25ZfFffEVB9uHh9pU2bqd6JmRJ75kc9AF831okdyxSYby7bzJxEX9oE8d3qu8PCf",
  "key23": "4A6cv2St1DxKFJhr6zUik5p8SrYhq5kDCfJsCRxNRdYoPVCgWB1E89TX3HezLGj3YLaKVdfvu2rTBbnCYG12C9jA",
  "key24": "5EVg18BzmWpANtLFZQeqUdAn9UA6CecAVYPT8yPnnkV8JJAV2kqvct7vmYqNJjJAzYG9uXLLEyfMFhTN2mh6FDUR",
  "key25": "pmfkQzaMwXfL4gJTHkEqefhqDt94ut8qp45JoCCRnNEiofouYQgUqD98oZZRB4PMV9ymVYgJ1BxteipStJUTqkq",
  "key26": "VAP2XvgkSfSD4UdvderzX2rhwbx8FuxLgsfoQpMgXGRg7rd4L63fFasukG8D7vx1v7texsDtYaC9XsB7prDKo91",
  "key27": "RsNViWbJAUWy4khgbLjsG5xj3x6DrkvUpGrJUUpyNTKBUYGxoCuYhHpLEHz3HqaNgAfSTWN8upJfgaGp1f2L9zc",
  "key28": "3Uacwc4wFHggZEqfP9spLcgJiqQwTjKYPSa9jxFyKguCBGQmHZWxxHgCuHUuWA2AeKBaqhTkL7Rm5TzsU8KhEMBq",
  "key29": "ChbBMyScD3CfHur6DeQJG1KzpRFW49TM1GK6wTHk5Xiddtbctdesx3fLEHoA853ShTM2ngdvLkzb5P38wfnCWj9",
  "key30": "5ugsKcn1Ex6rLJSwX6F9Z9T9FsrYxVRttifYqLuYbUnFwXH7K1ymLq63rXtwiQ8pQPNk6mbiD1uv9J7jnhjHa6NX",
  "key31": "3tmFFZTVDB9a6sANupLbtBHQfKemwQEctNYZasBDMS4uWx9cVsSDy1jb9sMF3N427VSgTmDWEQ6Fj1gkERdbikfc",
  "key32": "r1NPHd9Lq8So74RpspPktGrVppYzoioaBDDSBDXPfM8xJ2cuEnabfx2WUCGTLGHgRjqVwqCGv4QLatNLaREFLG1",
  "key33": "FQApsDtaWoU2qSNC1b3ZJTdNQK7zknKTuuVeWswKE1gZhB7nB4hREHe64pHwoMxdEvgoWGMXnCkv7uuBDd8zxEu",
  "key34": "dwz4ZR2XwTvQpfJKAQHDyFQzWjdSJpHcVLRhcjCBjW8MgMz93iJduTHnRVopiduMoaVhxd58n5ZYd2jciQap3ZM",
  "key35": "2ooxnKk6iARwpJ4qhquzYrsfAo9JdjwFfoZKJWvHxsriNALMPXB7JQS8go7scjJ6Z8NaKSpLHFnnBfsZ8acpesFo",
  "key36": "4pK3KGSqQbXSj9NXJbKjzb6TKrhNiJqDW4uaEF5ugaFUWozm7ZiEXfvh6xAqn812H51AAHwHz5gchZTicP23Cb7S",
  "key37": "648RxuaiffgRwyrxh6PeiSTzJBBW4BtM6gRQDVWrU1nsKuP4zV45tQNpoixEUdCspKKhQn13C3HzWvSLmGjVxpHw",
  "key38": "yZRXUdxAH2BWZeWs5kjETU9HR6Wwb9YWd3fomhVVJPpeXo4aNQxAhVpYnW5gbQbuE5oFNav8YwwopTVUr1wD11h",
  "key39": "5UtoeNc9QnftUUt1zxZe5kmQdDHQ2KU9ihikhMwy7zZriq3Ru9CkdxUzeGE4x1T8BFM3VNvJ839Tne6gySKFrJqo",
  "key40": "3SKNVpEyP6QikSqZf7GT94WQHtLEgTWq1FbidxdyYxMbcnwVxhbu6dVAM3VwhsPkbgux9syPVXiCiVvz52zVomWT",
  "key41": "3wA1CfFk23q1hv2GFDQNj7Ek7QBKuPYtrZc5wBZW4nzt5s6Kb7h3xHQBKjEYPfSrkk5TgDfvvPi1omVatiqYyWJv",
  "key42": "N7fiMxq3Ni1ufrhgvZHoRvCUZJtdoHkiYEy7Hc2ncLTkRuxUUR3dKHy7jBphJ1h7uaEtzkyUyM6BxVBFqMmGx6o",
  "key43": "3phBCdvsSpoAEs9yLGCTWyteLB2dNdTn3CtNcySiU8qPuwzMhzgpfwUPKPtxjvyKNsggWLUDUaa8s9VbRnN4EjRs",
  "key44": "2KfPvkDzfhQqNxavTryQhVfVdJCcCBY3LHmrTVnVnPXAErBK1msFtY3ZLhZbSM2mJiCvm76wimqCyoAmWADiLwVz",
  "key45": "2GMGmLfM21ECKpdVNpcUJBAxHVMGHH4VLFjYsWBDQjUpoxMitz6bzKbUZ2WGTfmoTfHis8ux64Tkp969jTr2afJh",
  "key46": "485qTuSTcRGTENBuVpxVdxEct8pKpqUaKnw5UtQ7WWuF2nRxbATR1C8rzKuubkkTaanDeBFzaXioo4wjRcU53QiT",
  "key47": "3x43jwrf3CcYXvfi5KrddjUezR1k1scD3YpTrFL9z9cfhR3z8kEq5UpfWUyaL5GemWLGMw7k8SLdraSf28SEoJSV"
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
