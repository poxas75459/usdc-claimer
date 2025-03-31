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
    "4ASkLv9UdTuFZNEFTh6sSzy6Wjjrt4RXfmXM6UDLBrTdwZA9RJgkSrucuJZchdSK1QAm2fiqSU6qZZ2E1gXLKU3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62pMThZeHJkG4AENqNpHGLGuk6G9pnWZ9ZFVNPdRffdBKjaBaDJh8FA2GUFBSvv1hZqcBAxyaMvJdVETahZ1BJm7",
  "key1": "333Z9bzZY2Em1xdkV9HoGmYdfHZ8MCRRb2MdcTcKGc75CMAZPoZx9nAZEA4iS6YWV3c5GMbtNCaJSbQ1bh3BWvh4",
  "key2": "2zd81YTJjfdXvABmxnzzN6YjnSkXu7y9mztHPUxRDtyUa2eHr31zDbRdhVn4GJNDC3whrL7S6UT9aQYHfacYtKgt",
  "key3": "5WYv3yqSZmgqhVTWvkfPDbZRNnF8uqYKiWo2Su3bRT6JFRVLmagdRxbhevpKS2463uYkbfdunozSFxUw5VJWAJEq",
  "key4": "43GryuLTcLmpux8TTqquBkcH1g8uAsRnGaoAov8UNQ3ESLuk6NACR2BZtTP18VKX2X3GWmaRCxjScA4KtY9SQEiL",
  "key5": "2eAhaTbmJW8Dw2v2EJRdJvLR5E8GBCyB4Cboiyop8JmbU4GB2vyb4ogeX8VCHjTJzH1D6XfW4LwWK6dQy2TRe2GY",
  "key6": "5Px6ouruHNTtCrwD47rQTsQmx6BcC32yfFuGEq6sWMTBrcgPUnjRXAC8QTqSvpRZMvD4sqmZ86wXszbH6oqBj5yX",
  "key7": "5VBe2uyUBK7r3EYjWjtdiDHk2vU9ixMVujf3oetZuh4HK7srSqD12kxBQeCU5WQP1k3BJCt7seihDeVCGnfVEXc6",
  "key8": "5VGp4Qhp4qq3EqcZXSqDGroWAWhmJAp3hqn9hYW7LQaitE3DfYrpSQRHJUjMyxmQPd9fbUiLog7YW9KDeBTo5gYQ",
  "key9": "4WDrFAPbA9P8R9ByJCCjXf72zPT4LYe7f1P6G3mF68yzuEUeJY1CYx55ndvPbX1Sc7znqeNn1JsemZmpwD8Ge1fC",
  "key10": "X4GE8dgHqcJC5Z1boZr2V96r7jNK8wcPrEE1wLRUCiGaBSuKLDkdUcSoYtL37iKEpniHrG2YJGUJkRsVM1YiYnB",
  "key11": "4HhKLtaXMgHaHMi41TMxFNCBLxthFoFA3WAP6524zxjAvpwVvnzVkaZyaSy4MVDZSz63hMtCdTAXntjSxJZJmUB5",
  "key12": "4pYdegpJS4z6btgTirLhFdkBrXCDPrhppBcsTagbwdtT1mnfwfMZ5Z71M9mWBFeD6b5DuzFLdMLqSTPaF8KuqTQc",
  "key13": "gAuSvwk8o5JoLSGgtKqWJEVVjweqMu7TwGd77HLx54ivjN9fHNeghpq3L7MUVytio6ApksRDnYwwqGh3zizFzXe",
  "key14": "5qg8FxpiGU528vLTW1qeKT9CFi2kig8TLWe6StQjmTUSwTucPAPdKFxg4kQVgcetRdVrt4deYpGg6twE7Fg4xxnq",
  "key15": "2wbsQhhP2BPneSRJtpH8j2AENwDCnSynkPyPjJhXCW1TqCv8p7svWjCoKKXHbShrDbrSu7X5nP5i2X9EF2k71WCF",
  "key16": "3tXBU2KjnJ5Qd3SUtGDtUj4PLRF1Zzjm3wS4tGoQYv5Aoaxx3zSZfzi6nPtUc5tPMfr9EQzS6UygdYK9mThwFmy2",
  "key17": "3K8ZSEFTGzYk2Ykn1JcaVQN2hCnE8d2K7CsUoFhURdbf8MFVRipE5e7XfWN7hVc4r9X49yy7fWiMm6V6VD9PNmUx",
  "key18": "4RNPxhYESgsnn4B64Cknt6snNzn5J4XLEaoqRboULxS5JvDtMA5zKw4pkbiZgRzx8ni8Pmy7fb4HsFix58pTquAA",
  "key19": "3hRogMj4w9gWYvv7txuqSqVjau36L3WcpTyaRjYLHYJBPkoncUAqXEJyZAMfNk5RMTV2PqUggRt6qczSGGRH2HTC",
  "key20": "5D1Rc7KJ13Gi8dnjg6b2ZgRgAd9S5uhasHch8NnXBvznXo6vKDhcuRWYisjaqBkcjkZyPU99C5BEgQa5rMR3ZBab",
  "key21": "5jPfzxsh6UqJS5JqLGfDjxKz5G83Ly2KSUTXzMJ3tTRQqkrMhdKqM6zgf7atp7pkNoBxoNtYbiGA6uC5oDj67Dgf",
  "key22": "4ShKS3Hk78mq3936A86nGCWxhKSKbKpstspHirUQDRUJdcPAGuhbQTamNzUTUZrjM3WgJNqptodSNoATrg8F4GJC",
  "key23": "3M7EneMVXr1XozRxd7BkBeDEzyooZhMtwRP1rh9xeH6HsgWZt9q1cttsd79tzNnKkbK3ko84Q9UXYggZYBCm5hM6",
  "key24": "4Z625pZaiD8L3VJXV6VB6LDk8bEywCFfAiWUW3yiUFvPjHBFMpeeHt3cbP7GsP296LHEqsQsKQXmpmXTaq5g52RD",
  "key25": "5EkEbnEyTPN886YAVYBD3hXtm2hfK4WGFUoC779KNKz8zprDpEJVtWriBk62dLvS2ejVifnC8ymzTtiXqufYDTBA",
  "key26": "TqxL6sQQRSqtBD3RU5gUstqrwPuwXqqNHfbpEqUW35QBeMac5jMHgeKHAkMobLMmG4FSPEFvSa3GUf5CRkTbDFC",
  "key27": "2fxrFsRMWYB4oAXYcnuk7jdeH4AWxPnun9xC4u6grYr78j1DYgPKNexPnp6UbqbQTCB5wmxtLnCFb97Yt3Ysxcwi",
  "key28": "3hKPnRnCZXffVh5tBc2ZCZGxafSeGHrKx43Z1MXoxVoPNWZVVkNayVmBWsU3YTVrpn9UcZXPWfb6MLJUt4LTANUL",
  "key29": "38wt461bWv8jvUq2kdeSvCaeuuxbPhdb8LbSP5oaD1kq1btG1hHowHs7fnD5Jd84hhaGg5edv5BgmzeW4eUsGb5p",
  "key30": "5k4d1texMSaz2CMnZZ8asU65UX5CA837zGKYRXbzVM95F1AXMdnZvMQ8YaCCxVumvPWkRWyu71mQwzY3MphKGV8S",
  "key31": "44zDqqKbEvTXoEhvEnuoGGmuVKejSuYsHQn1JrZJkrS1c7HrkXi1qt78yWGZewwzKtn7ZdH1sd14LUe5ERJiQxiR",
  "key32": "6kDLx4PC4dLFPJoGCmwGKwh93pTHYY5hhtU6GiJ9NU6TVtawGpz22ZuBibFmLBaQ4KwAhpSEhynmxf8QLb2fCD7",
  "key33": "44nrb38XKD2q5NfWGS3iQ1wmcfoJ8FBz3KjE2JzuZeupKZfELHKhd9HmUyHKnF1uyqsy6Qo5BCQ6U9guMJgxg9LV",
  "key34": "4mD5TSd9ZC2mtk63k4K2Xs8nAWzLXUbNumXmXZnnTy2Uv1nsuUEtybYMF2DVii4AS3MVyue5CPY4YGmoV8Y2Un7G",
  "key35": "59wwdrCQwDaNc1poVXt3RfKV2VQM1a6tu9h6HTwLLnzCAN3XHViixotK5YrQ8JCPTxy6rmVmmYYgF32pcM6WptbF",
  "key36": "3fvgAWRphFRGE9DsqDE25CvugJGSL9cwrjpfeCi9pQciaFD4cJodk16FFbqVmpn5SdyPfHxbc9ZgU9PwawPBtSYo",
  "key37": "5gqiPosaAAaPAoszHdscFqz1iHeZ7RzFm76qMxNtaWQTirQe4KPS5wZNzAwsBMxkFGc855L9QhcKjtG2FS4YJNsu",
  "key38": "Zd9hDBDu9u9chHVrzoiEn27bJdkM9WQ3sKSuQXRMdVykJTam7j8oQoDLvAwHZfPxaPrdDpxkFXqbSwUN9LLtzHP",
  "key39": "4k2rZV4b9ARXPxTBV9Cjp2KynusggHsSU8venMC4QpF9jDAQrJz1MB84Dq7AGcinsMuTCrYuVT8NbS8bzbfygN5c",
  "key40": "4FgVXifg5XDXW8rYhxN33j3Q78vj5AaHz3p7guaWh7Ag6inL4bj1Q6Qt1ohjWWTMToQBy1rzULpTY3dQf4YQwBqB",
  "key41": "4hVaQK7RvL1s5PC6EpjVvRsRqZWbu5BaUHCwzHn8wNRegvFNC9vj347vE3PaUJi7Ec2pSD2tGjcjowET5DS9Evdh",
  "key42": "65EVWzWaGaWBXv8Cyx8BYBmC2GgYvGm7MKH7wLCDSLbntYFTDRp4Vhtg8uNK43wjLHkN512NSdHZvzUmNVwJGnGy",
  "key43": "4wzP1LMF4U1JYb2XkaeYtMckBCsdzggN3wCYmhUvQFnvkEyjMswHpU9mnVUWvEWZQ6Y7p8eyeqrXzxEgXadxVwv3",
  "key44": "4CEhnNx8aZo75153Vv97pMmuwLH6QTw3XeNT1625u8Fm819m9WFksH8PjKtQ8Dv8v5Dt4LfALUkpNZ2HYqryC1mD",
  "key45": "GUzKDnEnumczZ8pZRWvWQrptEGuFBsskZs3iiovxZMkVsBtEgVptUzmZ4BQruwqdKKfrrZrFFei9TpYLMQkobAw",
  "key46": "3Xu2KS7Zg98yynqsRB1r4ALqrVVG2cc1UrwUVnHyQM4YMep2b6tW4PTpBkRVjpyxmXU8QxFXQWLf6s6u8nSbigko"
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
