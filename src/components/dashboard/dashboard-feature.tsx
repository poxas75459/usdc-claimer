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
    "4p7Uyk43nTUdwEPPoPDAU3PQmwvq8Uy6A7qkv74k47suoCVRP6dFo71CEzVRg5HgcmvepACn9FRvVPgM6NxvXtmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrF6hm1ravLSayLHLktCjtDQ7z7kFzx8bGofBktqtpNM6mYx3nx5JeT5YWxK7eo1HAyLiu88sLSrYZFJJkMa6Lu",
  "key1": "5TB9XpSmRusJHtDnK2qs9u5nmXkM7hCr6CWzcZSh4hj49C96QSBKdCx7mkyqTGbzgZrWf1qPTaZTV4TuERTgtSVi",
  "key2": "GXxWvtQcCKyPPPBsP25Pk3ZGiAWQxYDZytcPhtWK3e8ASJSTZP4Sw2uxcz84mqJpnxtedh1oTjqdJsqJ5uxc9eC",
  "key3": "3GgdDJCp4rPFMbaduro5P9fqBxij2a33x5e1hJeCYQafkEVbJ7WMoMftC2APNAVKo8xgLS3AyAcfbffmqNfcp4w8",
  "key4": "3Y6Eg9aMKCMQfzfK8mcCnBop3tk275jpZNhJ2g6bKJTc1uEuuNPjb3XjouDznNsdctcvB3Tv3qXxHhAmYdELiQhn",
  "key5": "2U6Be2kwYGCfGx78G6APjCd3wqZLMawSoqaa2Quf7nM2Mx6wNx1ZyTnvynpuauYqFY5eLjL12sRGHbEqiLrHXov8",
  "key6": "MXeGTUjQ86rwACoVZhbTMfzPT2EUTd8ySJMLZbdoXtaqjYzJSEMus6ov53MMyaVSFC5ZQSm46iEnH5aXDkc7ZQF",
  "key7": "3dDmSiL6jfbFvhQnXhmqPne8s3bYf39nSjrdQb2LV1xgSZzw7crmAPZ5mik3DUNeGeUq9qUJyRLMWSgsyXnb8XsY",
  "key8": "44jHxMbZjwZE3mP3XN2ENBHTwGzEufMFb6rBWkNEWu8EwULNd7d3sFuCs5F2suAKv6Hve1ojh472zNigjCVhbbam",
  "key9": "JBkDoLWZtwRvFdbc6UZKxZjbui9ijxNcV71kkeAhsUynmiixDW2PoRpfRTKC3NKMizRJaC64TdVz5zmNfeNDMEn",
  "key10": "gxs3dWorNYYQPrEwD7aqvw33iEgCB3GRS2NJRKVPGPbXBmvGSNzmLRZAuu4qEVzCthEyXtYzzJo1SHfysfKbCXt",
  "key11": "35QDa5mZ7anznTgFqGVyXU1DuJr7acBfdmUMXAMxTkubK5m2zziR7dRNQ3advS8Q3fUuouUzjp2V6HuEa9toE3WT",
  "key12": "YezTAiKG9vTGz2K3pMzz21C6ZdaSgCkBZLGqcsU1QRdbkQ4t24AfsnX67LWVcR4gXMDHTK52CAv39LAop8yWUVu",
  "key13": "2o8mvU2CRm1pZF9k79pmTLLaeQHGDo9ptqNaGpEyxEYcVfFpwyYVejso5tYkmMjjqd2GdcNyyNQ44y3BnvzNi2YB",
  "key14": "3jTQxsg6uBX17iWQjDR6UUxUJpxJ9SjnuWJTeXTMizvJsS4bwZNDHMKboqZ1R6Un5gbXBmxfbn8SoQKjmvr7ajWN",
  "key15": "3FW72vhkAJKfnEUNP443RzBRCfB9kNti6uQT1f3yEtib7Trir3GNNh1YotdBaKq6vs9KN67S6CKTDBkBe6o3ThY",
  "key16": "659LJ2caLiRHbFZqVL9MZedYWqccRjwyH5wHsDHKgF4FqVAghVhQqNeeBQeyM8ERs1K8JbQXcgx99ivFe197LyNm",
  "key17": "eLbdiVGNt7KFJCNeQzNAYcX6amV3ktVi1QPio5Fuiiv9DsHwnBJQrTwoMxL3LC7Ln7oTTEhQGNmGq1FCYCo67Gp",
  "key18": "4f1dRQ91ypo3ye5fqkaojMf4BSwkZSis4KyuLQuDGBBrCjSyo2zEQoruw7pyVzPfqrT3N598TZR1G7M6XStCoMzo",
  "key19": "5muYZnNFsN1i7QBiQ7ZuSVp39zFTUFkyp6Bk4YPdkZe1tmJJyKFeWykdbps7qrUfMaMoq5EHXd3jBHgsdbaj8z5a",
  "key20": "2p2eiHfp6VKatbNXNpdFB6TcCL3kKDrW5mQEzrpsMaV5LHk6sPLTosLSo3W45vN1kupdjPR1dZdY1U8uD39iazMx",
  "key21": "56dpjbzeC2KRLfzrjdiRkrV2sENrSv5fKha3QyCEJCA8JHdxgRQUCBaAMt5fE9Tvgdur6yiRcAE4gfXf2EB2iH53",
  "key22": "7WMpeBqG8mpWRu7DmHi52FuSA4A9WYTzZZJnJGstN5Kwzixzdriwy5CqXqVNQzLyw99P655aT3bdAwPAr52oK2k",
  "key23": "4NwDsC7AFZKtmi6RRto7n8bWYphbzXRXPfGRzNwecNk3SihPB1tuEvcyNwxF34gXfa7uDFE4jqJnV4sx3hmKXtTv",
  "key24": "5LEFJzebFiuiZK9qcQw3bh9dtyGTwrxAkC4EtgKbuKTwcSpGkxuvvickumuD34vVxVRMEaccFPPPx1KwY18SbpLw",
  "key25": "sY93vQZhGMnqFaSpUjfQUaTKZo7ogpo9XGSRr8eLeHiujTDyXbrGh4hyXcFGPAsKraKkQBbkqx2D4aXfV3XHxQW",
  "key26": "uR5PwVu9Lt3Y7mgGhxqBQW9LgiYjN3NteKDCswBQQUzEUqimGXfJ4B4FmQyahtYRvLUox9z8xPe9j2QTBPSZVCv",
  "key27": "3tH4YnUXFUL61okiyoH6qzjNP8QwJLW1eSj2DQwL3XadwmCaXxNzrL5QSRE7ivM4rGWqqb4k2HSLUYe2T76QGLxs",
  "key28": "5XEbb4md3hcPgfJY57fSLBTFRraNBgy1u4PLnPaeeGBEMmURxTrExcfJrvPYaLFVaCNZuX6KymTqqD6RH1yMhnYU",
  "key29": "YueBgzTHnCKpGqmUr7CkzHEjiiFwnyh4W5jD2Rf7En2nsoC6mpjzT92c28ViiubWf47Cmrr5zAyqA7HSZiGnQ9d",
  "key30": "51Gq7XxvMntamWrJMhkEbWPBSrj2CdbM7odRcosZDJNSDHzr7gQgPcHTd57zTFgxJ3PWC4WjmJHjLEzs9iUN3FdS",
  "key31": "2w5zwytgRFbtt78ke52Wh9M4BtYxWsfxd84HuVnbxfPZHwkxvTsSnj1SCmj9pFcnM6j9nB3K4uMNMNkDj3DWWkix",
  "key32": "2vUYZC6sgh7aovPA9pikDB6niW65DBk6erj6Wkd2XDSMfzujnFFT3sqcQUy8ELsGXsFhoseu3xufJKqtYaU8qzQ9",
  "key33": "4ac2rtkueKxNxZD9CuPuPwvt1n1REnfWdmaf8vpcyD5DHBR4nhf33FAKYgoY3rRrAHoL2JwZR8d8SLiGgrsx4vJk",
  "key34": "2y9qd2gDfCPxvbLFghvshtk2ynnLSQkoTc6SkCEvYximDLz6aKeLeqKxgApgjoAxUnj8fPMwBFgHM6wjkVe5CNoP",
  "key35": "5zbevtQD7mno2CScLY9NSgzvcBtCoTT3tiZaCq4GMC7ctdhZzoAkwQuDgsj9pEiXLGWCfLAUSZEKzJoSrC68fD1P",
  "key36": "3DRrEfs2NVWuCyAZcvA28cH5JyQgaRHVHQXq5PQB5ALSmFSnbtc6gZUrWt4CeueWQsWP7Q91koa2YhfTqN6dhG4h",
  "key37": "HaTaejYbbpjexNhqxYWJvCZUoVLJG9xRfBYsAqSyrnH6Wg1CFNNkXq28qyv9NpdD8PkFC7jRtzk2DEGbaEicW65",
  "key38": "4ZniWwqGiwtFjvsHXx6S6ec8cqsDKueepo4DzxCYLBZJWQYMjo8sVCTkHYoP3KdZUCMdU4RLR2uUqzmtmmCDhxbj"
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
