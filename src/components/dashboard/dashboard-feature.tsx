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
    "2u9z4baC1ijkPYUYJTrzT9qTLQMWCo5kXPavWhNxitS9GqTK5gx82K4PDaYC9Wbc4zyALraJrhTjpfFXXU5LtBwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6xzBuxkuQcCmxJPGkwnQN5AVhP1cpx9Xu91iJS26zPzHpArswAybduAaYoabWb8YG9zdJXwQqs2aqhzb48sny2",
  "key1": "3d8KT1BUqwW9nNALwYtNJnricPGAVrGmp7jsoQSEnm6ofMxD4UePS29JahyDZHT4xcpQuQi239iRNk96e925DEsQ",
  "key2": "61a53gKG8PXE1hr3QpzZmt8ECQBpcQWK7wk84b23utyUjr46k1herWPktcCugHUJYWdeKNyZ1ccBTFm6kgwp1pH",
  "key3": "7jGmapUH9Y8MP6yr6afMjyBSu4GcmvGwXDricZ4SbEtjp7PrnVNCVGXFp5Lh47iYsLrXgpM16GpAMxgccfu2a5a",
  "key4": "21XQGrdsQLytMNdkfHmrRpyV74MNGXFE51k1ebMz5oToqEDZfLAm3sRnmRubeSBBQUfZvCCTLj1ENXGADoUv7JjS",
  "key5": "4mU7F46PXATrwMVw85Kud35EuLYMaxav894WnkhVZb4nDvben75veMrHY3o9QYPrhAZeKqAdHi66YMPYiBSQpJCw",
  "key6": "nqv2qKqSDZiW8R9WPwHhwSGfjhaCdJoaFfZdn7a1hi8xcENkGowFHYyFdcbrumGxRga3VpZRjnhjiNRKrxB6zXt",
  "key7": "3xm1x6zt3ouGN9oMc5mmbGAqkFQDQLBx2CNXhbxxMHQMicdVE3qZnY7KNqEjLkeVxVVbcdef6Yiz1PK9ta58Ac32",
  "key8": "244XgtkLzToCLmDE9UanteytgfXfmTgTuLRigYspqU7Q71Wc9RCUMkgWSvDwhaDDSRfpXnZSqCWGcbTFb2u8HXCu",
  "key9": "27yW7aduHujCTVKLQxU7YtrQTTAoaRBgPJXF9G2Hqoo7pWgNfot1499pqWqyQcxDzwinB9jHi5Mz7RTj8bwL4vSw",
  "key10": "5dmuYZFQQfQw9EHoMUb44tDG1B9tYUcvv1yZGm7mYS5FjiU2HanRdWA8RaQhidfVU6AQDWsavgxUmZQADpfy3EnC",
  "key11": "3PWF5G1rzCihUAAYEk9nDZt5hfwbhmKyTcptDjqqunMcKDnWhrcwN97KTfWKZVxyXvw9x4P9cst1CW4Z3q2whwWa",
  "key12": "eB6uD6gVvunzwfFUMx6UgsitoFDBt4UdPw8TTaDGs9gME4QCECSzwMjAYpbQZgwffc3itr8g4aJ9qxRUvLR5nWA",
  "key13": "Apkdn24mwVjoW6CLHGwqvovvYuJn4ntPzuiT5NLMqhpqMCn3gG7DEt57USnVdgxpdmBZpABkueL5NiPyRF7FeTg",
  "key14": "4A2ue82KsNvbsB9j5MzCSShydQmsCWbP1d2fGHpDfVqsHoP6izvDKJiWJDSCxKgMJQ1Yi85jgsES4AARoDsAPbG8",
  "key15": "naFgQmExJvaasCEY1FS4A4qi3K5FoEzVdbkJwd3BXV1QoJHsnfCDJpDkMZt2duxKcrm3H11L8unJMG4H3CDKGeu",
  "key16": "4jW7KfSjSuQyieYFb3Zv2EX2ZAG8KANj5x5yH1DGcFotEdfJ68nJsBkxoiaVdPkuSptQSgrW7yYAZARA3QxwXwjH",
  "key17": "3zE9MRkKzCnk4cVxzqwD8aVkgB23CAKVQHALKcTqwZ885463LYobf1ncMG2oagpkpzUkQWk3sFuHuaasSMhGZwro",
  "key18": "237pv9f1k3Anh1hukry9ZiBgyJpnFNPyXrZeMseBdkw7hN5iHK3WAhrXSZyJD7vsDdKnjTNqBZBuZQj7t8o4kaUr",
  "key19": "2bhVGUZxAwmoTCeZHvATeZC7UQJWaPHs61z1x1y87c8KJC7ibfRLXspDvJkwsm1NKQopRHiuAJnBgmPtEigXLv4Y",
  "key20": "3pcoxaCZFLM8jdnM6Xmi1mGD63hWreTWF3bCPz4aqw3TMkYKdUn6c9cANFyRr8u5Lha1sqMgRiQNHDqzqnaPjhHM",
  "key21": "TEUTfkmjfGaw4EsfBFppAY8F1jDyTayTHZcEReFwMF8ftkACEwYTtkb5T7LAiycAzUv66bpa5CFz5H53JPoifut",
  "key22": "3kUvwg7ZqPVwZgHjqbvHmieL8BNyagZS3vUrQurR95VMgXid5hZEF781hMTuq8dRtirK69PaFDLUdYQMr5NQRVSi",
  "key23": "4wVvxFt762V8E5kqfHdtKyURkt2djSVN1WaMivdN6Wd317UzA52SZwQPck4T4my1e3wT6mTYyLszXGNQkPRMxEcf",
  "key24": "3kG8WfgWKU3Lk62KtBX1Ff32rwdTBcLjKnKz49USNMfNE5ZVDk893Vod3HuKXxFT6J9q812Bf8dP3prDwFn7hUgB",
  "key25": "4UP6dM3g3Jbv1YALQH2TBEZC1D9Q8aakrYrVEu29Z5CkNZrApoKnzVaMvhGzoCYtaoDFg8X8ikHVP5jWHJxYE6Es",
  "key26": "21HotumcWL3qjSM55o5Ea99vVamiu9FsL3gNBqdxjTLRW2W1BKnFgTsRSCWFKcHdD5rR1nfCszU8Xde5TDCz74XC",
  "key27": "RQok5d2i8DbGAPLc2Qy3zv7gyvGWUbWDqyRo3x8qd1VqxLEiwwherqNRnLJjyD5taXC3bLhTPniZH4MVvxyWfJb",
  "key28": "4XGrf3vqy7vxBCMWHfbpDUK615Uv3ivcK4yBVAjPpptLb1H2DQNQb15Pec8wD3X8P1jBX3LJCit7dVGaWoZeV4EN",
  "key29": "3KCvp4QhZP2QavAzjvM9BwwCoj3n5aokDZ4KGAmNAhecVxSeobVXTZekiF3171iqPW8PM94neE4AXLqnzFBqzZ3R",
  "key30": "425evvgdc2o9feRvXpBt1vUFY1xDpd5tFkE2xpoL49o6s5ZkwtkWzR66oi7JM8yVBX1uQx2xGypQLxpydTrLsx9i",
  "key31": "4oZC6bgBM3anbJWtcyLCFpKrg5SXKAQBZmkHDX4ygh1wogMupPfnxEgRmJwF7fDFsSLfm8ix16vR6WY4RsUkbYem",
  "key32": "5Cf4VzLDz89ZchXAAPypNCrPuSvXpUpqLmrqTwkCFRfbtwtPpVxRdotgpYMZhB2odt4qdf2MGMb5M2fwphwcL5qC",
  "key33": "4w8n4JgYFVtetg2vkp3RfRbrSM5h1CwvB5nUrYJY6dhqbk3cTYHsE8aUQmxTUV3ZaLyVqLnxQeB7ESdGFLLHwihX",
  "key34": "zF6SK3JLNGoFGCCj9veNeMErJ6VTzWjDBbd5BFXpcr13RfHMMGwrVLCxi4dY51gG7W8Zy97Bbvmq5Aw19dA6jpv",
  "key35": "3cPy1cknwDre1x8y2ep1Gw1h5YXxRDXDUYdhjVwmskRDUcckN4bJ3MVvYVppMf4eAu8X54iobcf2X4KYesZZn3dS",
  "key36": "63KKR4X8LsZiCvnWo9Nd7251z7RH2ndm6BYmEqXhgC49qPfowziTqzz3YM6zdjWTtkoKinah4Q8dGyWzmdos6q6U",
  "key37": "3UjPF1k19CgjC7Y4WDubb6DES4rChUF8SxEWKmUVyEiZ3Q94roLQBju8sjpNmZf7zFgEpuG8vy1yXzxrnek8NhJD",
  "key38": "UmcyBExDHuZjd8mKr7upVvPL6bsCwoRZxRfuaez89U1fF8LqSxMsdKu8c2WiJAVkzboTwycLaF1oLcvrztdLzeJ",
  "key39": "5zMYgbqbkE5ZD7d52UNmufJxJmANj4Y16bsqpBy8Pza77XozR9kckmS5EEBLTdrHeR7D7i3MR7c83KA5QQ2AeDcC",
  "key40": "593qt9BqY7xJoiEKg53pbLcEG4JCxbLaLDy9utzbrN1u6ZmaP1izXgMYAcLxVhofHgWcPva6WndcpvWd5S6ydzqy",
  "key41": "5WLqVc3mzYRWiL5K7oT8qiPm65NYHrbtxeQJpdyQGqMUKhMMgWMP15GRaZCaqdEUqqjQUEeMYc6vzZfKS2SQSDAv",
  "key42": "4GaXhrJ8Fyd1SPeyPtAYfyDCfbQYn8TrSoMdC45mPVJfY6YR3ZcbNCeBNxEq7HW68j84VeQAz2xzpnkitopXokas",
  "key43": "9EUJ783FbMtKhPejHGqdFau3fj3yRdMHoDeGJeW8YQUTaz5ecckWfZpe6F76ru53FZXvBYezR3PEFaHWiizcixk",
  "key44": "22EKft4FhVkWrh1qsArrY7R5sn83FcxAH8eP5WLAA2g3UubTRU2T4wf9o3d5x3rXo8fwPN1GReXEYtjh8WwDBzGU",
  "key45": "56eDTXJgez6PChhN7C7QRZaoQiprejSroCiMJfk4qmV3ynMWDiRELPubLxoQu4Fdv6Wx8HyKhSVBaioqYKQnJrNr",
  "key46": "2KHAMgLgzqZRxqBqJV8KHAVQ53VDPFP9mBecGtmf6bCiT1g7TQAJvp66c5HfMCQAStYveRA5KZRZxUrKVbE3ckHA",
  "key47": "pmEwu3uz6rb585CmHovvG27RCczsPcYggAZDkGygoccMVJDmYo2CEpDZAUn3Cyww7bmGTwLhhsDJPXU11dkA1m8",
  "key48": "mUSPkBKLJGN95pmNwkjkTvnT3SCi9aQvswjsdTqAXpLtsURHGiiMEfBdzu3KBfiaaeKYkBr23teUY7QBoGEQrRH"
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
