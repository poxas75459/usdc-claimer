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
    "GwdYpbuGQwPf97gWVosUTcbUpAnm75xMuV88xX5HsBRbDBwkdu1mMcTiiDkrsaUPedSsBjVAxgnzawyAk96PwPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvRe9Dug9YvLVVKW3PLVkqpMXsH1x4VVpQosXs3H3RXB4uZXf7aJ2N94AmitWaXaR1YdhMHWb3hTEtvDbJZvAtP",
  "key1": "5VzqaGfPm97d5jgNVaw5nCYz8UBnCUi59H2eSuqVc57s3DQaPPVRBmh7KXiAf8kP9j4YwTxwkJGEyR1NktM6rY9N",
  "key2": "4r6t7EuLfMzW8PXGtXcnjus7yRoovwiFSEHoZ3kyJPfnoqqGRqaeDW5Se9SKmXetBwoJV6qsjeShBSgSrqN3k5FS",
  "key3": "49Gvotd85myqvn8NnRo3GjJLm3nAQcbDZboWaUzfSnjdd3eY1tRUzcboLtDspwYbSFtTQEs6JC42pukqbkBrRTPs",
  "key4": "2P7yNoKDMphujQaD2CfUWUV9wHVDTuGpiKTfGH3FeH5DaZuVoYemfHaMzyCgeRsar9aRF5jG1ZUTExR1JpgcYdSS",
  "key5": "9xLhKSEvtD6k9fEHYwWm4MwEyM1qxXbNC6j3auhGEeb9RQz7duYRKwxc4m4a96epefAa3JZ5jmFQVPqNDCJRNua",
  "key6": "4yTxGhMViQrt2z5gTRWuYq8L9XXL8MLeNARPGykQp7n2fEGVFUSQiuYk3M9V2xiRxsxCnKcTcEFYWp5tAhQQtADf",
  "key7": "ZCBtEnPcNPUwZM24VNimJBoQFqASNGQsGYRCfYwkabYLbvYWAuJNv5nJFyR5hgcNbPFVktUzKkSrMCFPYn2KZVD",
  "key8": "QTWBXQA9ZB9s1FXc5RKdFA6UkvKtGsNF2JgNzDC18pbcmvJvKifZKVvKy92MdmfHnipRVsFSW21ArrHiLuSUy5D",
  "key9": "US8d1E8ipu9XN2XjUg4NM6v6NrgBLiRKe4Nrpy3GrAuci9WYyK2QFkchVmzmLxrknd9UGLNufbKtXrksboscH7x",
  "key10": "3hwaS2JbMSYb2db8VJWTmdfVmep7L8dZ3UuK6bBb7r8eu4Mdg2TkWRtvQQA8oM7m9WRLPLSH3oD623pmv5r6o3Q2",
  "key11": "2oUvheX26ux6iHBQWpofzFKTG3JinKNnR1KJwhNiVDqaCEYkKA7Vd1z3quzpkRm47ExqpSoMKVK6A8wnLNVBQB1p",
  "key12": "29jCQiEkmmx86a44Lck2sbcGS3JE4uQ8qyS3nDYebPb9L24J3JoagX1Dy2MpTUwsUrmFB5P1tFXgP9hU8kvy2T3d",
  "key13": "2AbdS6CKUFUnGGDCSSriLNGDfQbS64YfVzV4dQqBg2fEWJKQbpq5FUHsqtMbL8w3nCWJBCmKm3X9rW2fNHZBSzoj",
  "key14": "5CbmT9v9V2b9xrtKyjik8bmoVonyZneR7wwX9J1aDp2ZvMuiTAnHFT4DY7q8CA5svWS1egcd1pLyDL4EdP2KkyJj",
  "key15": "2HkvQmDTJZWAdNuWE7zCwfRUjb5BBLKx52ZvYN1WSYDhiB68zcRR6T3Y36pxzCQrH6UuTopgGePUmibQ5rENjeJf",
  "key16": "LRdGfji9rrjBi7naTXHwe7BAakjP1Qdth2fi2neJmphB91R4gLQtS9dRk6oK2F3c8dXzvEuFfkL3Deng31EPMaf",
  "key17": "f56F62UiwyQjsmXxh7PMwWzrUiEKuWkCF8J4crUKnRwPo3jPLYwNXcs96utsbfQtmPu6k8nAjGsm95qnjy8eAZV",
  "key18": "38e6W4gvdJ53tcuKTRVfQSeQDz9WdEuPEW44MPLHiKZgbaLymBS53qd5uufbpSf7Ex22G54QLouyCqaymVe7xL7w",
  "key19": "5n9Un62y7ta1tb3KZhwfs1YtRfNCKyte9UXdhcnSKxp6KfTW6FvGBwTW9TPTJUzDXbAPrjbhmrLjBTFnEprRDCGC",
  "key20": "4N9CRjrCXr5VnCdhK5CHLVM8CuCizTs4JzXoMXM6pv9xnRuve6mCnLv2AnW1JJSCSc9t4hPE5qSZN5AhQTQs7DrC",
  "key21": "2Rx1uENPKRWRUgSwBGA8vAMJLepuHKmVACd6bDe92okvWQshYHH5yEJ94RVUv5E9Vkg7UYYzRf13dEvD2baxUg6h",
  "key22": "3LC2jdJNuqaC5ioNnQqNQgrZE2FUhg55GcnbYukzwM96uaw6gBUGZbktAnt6tBLCSMBoqc5nTDGofJMk8df8jbpz",
  "key23": "2Gw25uY4DhLnfjz87SyoqYyLPPXG4qYFYuvqGBBVtnNGvHknWBGhRdgFo9ggUQdmbop8jsLmEyikABivrzrMgfFt",
  "key24": "5o5nzTsfXmcnMuVynnCma1uinNALV1Neej9bcU2HLM94LgUpfWFW96ctcBR9RBWSHqToAfiYAsnEChqod21v2Sci",
  "key25": "47jQdKkdNgdNreXSiUZtxev2Jwba1iwWU1bDs4h8hXeKqbYhJ7e2TZqQ9MCeuBWCqwcZYporZaHV1rE9boqDFAtU",
  "key26": "3ZCSiXB2Gwp77pqR3aFgaS4kGKxRCZWrY53mXG9g9N8xtXXU1ivKXD6jzjBCsArfQj4AyynzWYcDzPQAsREcTvU6",
  "key27": "2EkvsaNm4yshvsrPkcZUXgZk1bV23nSpFrTQ1DtBU1PtdXF7oYJ1c3oC1rL2CKzi1Duu9g3gXguzYhXvmoKs1YJP",
  "key28": "MbXykerTK6rT2gYgPgZ7Fo3Dh78a9iks76MhwJUyWC9c1DK55X6kF4mLHu7u6yk4eGV8tcYEmMrLDEPZ9RbuNmS",
  "key29": "4DSLVjss43b2PnmVax7tZ19rRLGDTHtqEfgrDCGbL6iHbDtxvSbbiidGaspP5JfCTGAAWPyg3Rgo6gL3sfD9EK5M",
  "key30": "j5tfPdxbcUG5qercpEW5rcUhr1GsPTvABYJ3Mw96pCZPG4k8WWEBYwZJ76v1ftp7z3AvS9KtNhD1kZ4qVcJeQyU",
  "key31": "4rWEAAjWU77MpeHdJHCoiVv3Fckp8daru6qwMDhp7DfcMQwoTw4hS8TAmtCWu1L5gZVYgPFgfLyii2xMk6mXwVfb",
  "key32": "3zRYzEVn2RqFo5Ct8BM7kST9M9LvZCrSMMsRk4g4VVXYyP7TKNBySAi8VoHAMTwGRTvLoEUwPnDCxz1Xi8uczaKG",
  "key33": "4P6mkxmSxYXavnt85yS11i8EHBWLWqx7iDvcHwj1nRuifRfy9ejNP5qFbD5qNyok1FXdYB8NfuecybXFDRCjP8Zx",
  "key34": "3vNgbnqy7ic588v2F1gqng3tnLL7WWNAPi9ZTVExhqMw3SUBZzYXB5e5YzbfcY2SzgokV5SE6hnfkFmK6Yqc62za",
  "key35": "3pedVLdNkiEECQU7GTETf6ufLPAH4JSZAYP6Bk4ay3acLqmzVQs4dFJRLXJh7vxebabx3QHiyZiomDheG3RT1fV7",
  "key36": "5ses4KBBGWqPS3nQRWPLqeXJa3GgPXW1TASaEzCdbb4XttkZsim9JF83UqtrFy9UcccTWpuvm4s2jYhgs3fYkSR9",
  "key37": "4tUhgTrvcLyGGETZQy2PNsjVuYYjzdXkWYqxD3xmLNvom24mzB4WdLUn4NJPsTqTu2qBP5dJUHaTRR7krJ62JyZh",
  "key38": "2EGLev4Nu3YqA5hK68drZVbeJsWVRyiEywekJgK7EBJs8kbtbKRxJYdmekXLU7SZz7TZ6qcwAXWa2orcVW6jU2Uh",
  "key39": "26G2BZHwBpBksG2zzzhuscbKVxJyj6uPGuFdsmS9HwaBxHCa3cxAfgRc8v8Qaidvr66vrNyBYzZ9H1s8fsyRBhge",
  "key40": "5aiVnir3izqpwkM1znydteEjMfKBr8HZboHfN9XkZRNxgT6oPKaeBV2xUbiw1bghxAbPgAErYcjRBjr3epJxr8Kg",
  "key41": "3YBdeKPBEfXN49GdphDz3DCNL4eGq22RjzDz5SqKWFbiWvSSjg8ZuGpYKgnKcSqiFRo6Ft5mU1BSkcnKhfzWuwDU",
  "key42": "2jCG6RH7rn2onprPj7HhGjek1MjP3mJimxkUkY93f3fNBVcKZ8e1HXycDmJj6iCrPyhuBeiKxJKgGbkGje437Dtn",
  "key43": "427o71HPoA2uJVQikKkLBBZEE3cq324az7uukywqu5R2UVh3NdEJXC1TYfYuZo11pNVgWNy6SatPiD6hGmGYUwZA",
  "key44": "hyrtgo5WYuJT2NzEZ3gNKCj7kQDuvDzwSeXgiraokzPLdnWRD61bMJkG2b9JBwsV5YEiLE1kshyf46n4gpfRhZo",
  "key45": "37Q3am1ShbgWYrfTM4rtPMwEMq9zhUM1W4goCJH8p82btBx3L82PhJWbE7nAyh9tjfW46bLZopF9GoHLRwCKLDn3",
  "key46": "3DawNny6NZiEdFHM86xKLkpBbbQMqpuWbCg5uw946RxEFwUKdnA7aBWjJbVdvM2Mq9aRSUA4ua5gZGnqSt2fsMY1",
  "key47": "2SBQ73imjJNP7J5cx1jC3Pf7wRpgMDa5Cghietc9RQfDHsvDvv1rxMN1ALfFbob3QevoaPKj9qnamcPBRAq9gbQm"
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
