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
    "3hzmfzQZMTDzXJs8ALePiXu9QVwoouiA9kkbtqh6X4m5yUTFn4NdYuEA4sZs7pspiSVnd1xCWRULokw39h8JcYsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUhEedLkEi5HgCZRbGgByReWNtkQqx8scUxVz4oKyMKtPe6ZCb7gQmtzVcW1QJA5h6cZxRck9TM3Wkc8Wsapt33",
  "key1": "YwW7tymiHcihWZTGbWGEXFa7qJL5w7i3LupZN9VM4ch7xa3QG8LzssptTCd7wjsYHSEX2eqgXjXAQ1FVaXzypGU",
  "key2": "5ewbCjV72AmU1MqUbx57jJFAMvCd7ViQ24s2h8cVYLwi14roamf9vaJ3V2u5DffDmGLz4U5abExXJ3Nf8Q6G1h2S",
  "key3": "4omPUnVDTxSDK3SZ7zEk6vrcmNX7rpn9ZXPWx4ss1U1m5jEFvqbc7WVGD2ph4FwBRUkvEYXudh4ekzcygXt1Yp4r",
  "key4": "4wZkH4T8VBQhHiWJ3XSLD1Jnwzz3yQeiQv9MQRHYz8wQEAQyfgSLyKzn1mYpTHfWQ15FspYeC7jrbMtMe3PEBLjj",
  "key5": "5mM5dotp4faowMN2ZNq8ZAAsortpujWgnQHFcm6bWtVaEjX7bM5PfADoLvGfhi5VnDcCvZSzR4vAJf4taFcykaF3",
  "key6": "gudGYDEJ9DL1yjwM87494g9in1sSWpFKx6j9NWPobrR7nU6c2oWec1ekgG3CV1aNEha1vagz6F8Uf3RKRuMFzpw",
  "key7": "6HFf94yN74RU9GLZQjuM1m2Gym8RJKYUr6ZtkXkeBJBt5r9TK5J1f8VPmvURQ2wPuNNecLwpjJwT7Fhdg71mAHW",
  "key8": "4hLvXCu1cGNUWDMTTqN2xAZW3wxSk4WAc8YGMEL69vpKNhuLcejqn1UcWW1XwMSM6AtzTCR2raUm7zs6s8ktE273",
  "key9": "66B2PrA46TwkUE8FENXLnvMDqw5oLHrbdm7Hm3L3RYik7FU7hqf9LAk1MKQiPJ1VmT8C1snVU5wKZXH5YbdQySvd",
  "key10": "2MesgfjWhXuAUmYdEB2uMwdnbgaKutG1EvxFWfBchQjzMasLttY4fzN4cS1DGuek1W3vHMCjQQobJtxzhzupWWR7",
  "key11": "3zG5Z1xftU29Fbph97tC3DLbhoxMiMyHcCb2inWmYHyBPo4R7WgK7ExU1fnd5mCtbm3FBBkke84A61wia9RjBDT",
  "key12": "GwkYCmGu5yrCtYgAA4kQPWAznv4zRaKi3HY9RXnaTdnnLjprvx1qww3MuV9oK6SADnncjYtBFY8R7ffSvpxDPjn",
  "key13": "5ruwoSir5zWqAkWXWzLsteoRqej6K4zg1ivHZqW3UaDDUT63jDR12ePUBoUz5GrEBtRmzZVmyjp658woRavq63Z7",
  "key14": "4zfS8jF8mvJThomaEyDMP9VZgiCKdRs5AeGYeezuMapDyrs4GoXbM2Crhu1wrynJfVT5Xw9dJGuF1zjPXKtLfM9s",
  "key15": "2kJJJnkQx1X79BUcFYwykobYdGkQ34jxmdApFScdmvm6PjQz8uRxGvcraMBysCX4u4jcxZcEFT3TByJ36GE361Cf",
  "key16": "4mvVK1cLUdr7tACBQPdP5rcWtJKLtM1ZGXYbAx41FwihMcV9MjAk3aA9yS1RXPPW6uU6FQ9gu4mEEegV2ufwzMh5",
  "key17": "5DFB9jDfwfXQfKERPagZEwKc4DM9wvSwfmTiJABhsvAhoFTpq5vnmcZR4Ty9NBZRPxbZETavxQTU3hiEW5kTZGuW",
  "key18": "4wubvjGamnxdsaj6TLAqc2bHwkLT5fFKHDmp6X4swhnPP3WQBJLSubUFVVGZm4z5D5JbzuwQzBKVG47cvJ8WuwEu",
  "key19": "5AP1ATahUo1ccvtxpAiJEyWWaRQMDNepvEan2hyNNsQ815nWpfZ3Wk5VTZUDJKMJrvVxPuBD6uhaSHjUtUPbKohn",
  "key20": "51N3HNf4aQqhjdQ73ub8VZ5RXLMG9caVzsoWpGFovNTqFP8CADnq2U9eiQvGMyeeiqfRb2afKvEz39w1b3u1yRZ3",
  "key21": "3T4bXNQ1WgKV8KYs2ctkrcTdQey8fbrzi3zfmpk1Cer5xnb1bngAkxGaYrtmtyoJ2RwJHJGpEiqMo9szX2KBVW2F",
  "key22": "4aSMSMY2rQxMmfgL6LZWTJGConr8NV1t2ngMKvnyEvp8bvfnA3VEb9dKQzmLXvemUwmddXTBVnWd9CPfy6f3axiD",
  "key23": "3WdottqQLwsoSVi9ijfYoSnw6byg2bcyHJpCQwWK19p7KZsUoxQ8pSVN4Y34bcDjVCdtfVuVw4J1bN5dnQWFnECv",
  "key24": "26WFyMk5Ga2LoyDG28YEVnDFC37PKm9DV6rkB6ewLRkj5VYDFoQ1icf2NiS2FZ3HuqqUv6c8v14d2AAJmSRyBtx4",
  "key25": "3uYcqQmVeBNJzAhJMTgZ53mNfnB5yX77HjUJY58Ui8rZASuTc2D2K6tsx6havpiaHxU8L1ANLuxzniVhUjYpmBPh",
  "key26": "62fY8DQeTFVBcToX3Rcku1pKQAhtFfuuiWA9C2wa8BvQEHewB556iqqRUfzFijbPMCNZAC8vXhZWNkZtHukmAwqK",
  "key27": "4RxSDNBXb9tKx6AT4s8XG1gjU8mW9ysd4gU3gXsv8wPQCC9JsSi3ao6Z4qLg5ZER1uP25CbqmsoGFiXYJBmX2U3x",
  "key28": "QKTP1mrAnjKJXNNwwG1yZDx85gSDzNwVa8GEFw1GEsyKKS5RFQHPdHz9XHx3RvwaHhcjnaxWQ8dTtXJcK5aPw9n",
  "key29": "2j3UQA6SV2skY4wxJjp1Fta2GEW1Vtyu7SG6stVx1kbqF7PpSu91cjub6M5vH8rxrGTsbpKUnV9tigKbTvePTywj",
  "key30": "5MgACn7mpQow6KvQNcrRFoEixRnFdNxU94jbkZsCmqtJrVZpQXavetN7cU3BCSeKGmt56TXNG2mBZ53U8sQsttGr",
  "key31": "3JmgChCoWGnGVeFohffAoncrsgZ3f6kqwXW96FADooZrB8HYd9SDdnwHoTrQQUM1EaJFxtcjAMHcR7rNE4SxJati",
  "key32": "3gWyQDroVYRNEjmGrnGyCcXAvsC1BK6FWtnoHLwdb36BjwywbHBc3HLrRAfvzsAZeW8Lcabfm8G6TbJass4ex1MJ",
  "key33": "4t4RVGyVqMKJVsCEAETWVGYSdVxK4AaXqyzinnZMS1uXKEtEn7XKokGU2VcPFMLzA8gQueHzfX5sctAGucaHtxvB",
  "key34": "3ejtSAENgTdtib8MehtoRJR63SkfYeyaf8qUfxYQMpCMp9jFzv69XvJnx9KZ8Ad9Zr93T2DAsL2nd1cKiz89uGby",
  "key35": "65amgx3KiwGiVinqYYTZjJGjW9SuZYquwrvLwxuLophUEQ1qzAuNkWmGddFoaB1ZVFvkUwoUe7kxorBurLayYWjk",
  "key36": "4fsEqcXVZN9xWnQUjTZkWCkiR722n5Vj6ytjBeA16jxd4aZtfxUt9HU62SYKBJrb8PwntuLnsyJjy8C1YkgcsQjV",
  "key37": "k23mf557nSym4qcQuEgs78rZuHn71884tUfatzD1mv3M9pQAZHPyi3RRUhfuJsPGaychwCcNnPfRNZtE6xrqdL5",
  "key38": "2BSp3mxytJyiTRc5ptEpRkvBmqUfcQkL7kPbZGJwEQrj7XSg1tViATySxVouieRKKoxAjpK6Q4WsaQwP8hMDS9JY",
  "key39": "5iMarELNhFM7wkZpaS3EWLiYX9NsqDLv2xi4X1anfePZ1DXrnEscEZU2SVsHVwC93jnT7C8ABDP5YVda8T1rxBoH",
  "key40": "4QL8QJrmzpdXkvmipk3j1yLqEGSxRb3yzYGqDwHZZ4aV6XxbgxzrCRb7Bm6yFv6XJGkpacTJzJaxQqfSd5QFWC9k",
  "key41": "3Xy67k1SNtPp8WMkVi18qikjeUo4EuJNAZkhMKJ6KRdbFhiWdhpSdmV4Y2ZGyTB36Jmbpiytz1BuPYL1XuLsJ4sq",
  "key42": "ApuLu2NNxD2vn2U6Vg1RY5sXZ7pHgYXc1hYfhQ2FVmbwGJYUtZXUJSKzNGsFWJ5ST3dLotXFTSg6czXNFT4K49C"
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
