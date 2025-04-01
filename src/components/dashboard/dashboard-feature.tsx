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
    "1pq2QDPMzc6NUVwBccNSuDmE9J7ECVwPAVHPqyM8AwQipXaErqrbFQVrwnscy8SABvDcwykbk7prYxt9cP69qZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3wZHh2BUa9nQggueeipGyQna2vLwRr3YaWHQKW6AhBcQTiaHkhraR8RoZKY34Z4HN8ccKkcab4A3kmFDWKrMPn",
  "key1": "5UMthaed5gdnyUTCpxreMXatPZ9GiGawB4FpKzEaz3thnbJpKiRtPcCkRckqN1dSLKQaB4F65iT3hXarqYHeBEoU",
  "key2": "NRaSiWu18RP7NkzASkYaGW49pNWhYX6QHx8u6hSnjVzF6ESNYR1wCfwiSzZP14B1dZ7TfEYPyhPvsbaWgdMvWd8",
  "key3": "3Cuhe84FTx1VkGqb4YAx2Lg8mF8tNzJec3bfVB5V3H4otPPBLwALsRwvG6GrDjGozcvhqNVi5sp8P2U41yhYkcGW",
  "key4": "3SRXFKpxWaMA7RC8MALY8qP8KGHX3NG9iCp6dcU4Jq2TLzuhZa2xYwGEHwe1hf4PqyRi1YgVVMebke272QBYGf6E",
  "key5": "23sDeNVWXRZSoALhBkSmKvbftjsmJ8EZby84XrmqzbkSGXGJ3cxeSmg3Y5x6fYApDyKaZ22HeFgrDyB9SNrU2jGA",
  "key6": "5rMgqYmZqesjHGxjm3FLwc1LR4nEBXRBKTha9Mp1tobZRhNfmsVXDmncqVjjwqgB6GfXKFPfZUELDw9vZViKmNYV",
  "key7": "FDYu5c57o6689EndwKFQXj8nkuFtiic6W6GLqdymeG4ZBV9S2E5tGTWJ2f9ki9PicBnVeCTZv9hvWKyfuT4mdNP",
  "key8": "5w37TgMc8DWvQrXThzH9657Qycn1JQUvmhmRACYsEm3wJDr3Uodd3Ps12x8p9nx4Aeu7uRWGV1WrmqJQDeUytp4F",
  "key9": "q6S8swxkbeWWefT2pD5GG9gGcAoNViW72zn835hHbHhktmwoJAwffzGECEDeoqM8P5mxryPosUCrVF1fLjRtgxa",
  "key10": "VkTfgUL4fwfP8mDCFgvdKV3RkgG1vhL4RmczZpyXygChizFaHnpSkyZrV4T9BQDtdLkz3KSgSGenXQwzALxHWR3",
  "key11": "5ogKPuFp3gQ5D6CJJtmcyN86Ry41emJZwGpMMWP6oWdYuLv2E8JoowiJyFSmeQ7ubRCQy67xgC3S5CrJwiei9DEv",
  "key12": "3bwCHWGVzvdZD2YDEEv8Qz3tezmpgsZbY9hzmZ8SziCn386uqx6xLRXyT76AbCRhNAz9uD8P2k9tAN3xBwVJsLSC",
  "key13": "x5W36RRzcPTX9o7TtQwshXUMNvWuT1Y99SG5yZk2PAwanEjiLggjUzk5nQ4NMTmCTF3mAYjC5ZrMtZD4LEZ3Mqs",
  "key14": "4eRbqLC11xCvD7cWvTfRGDvkWz3YeqmMoFo1QgsmEGD3342n6J4CvR3EYrHX72VWLj3BQrtMMijVtydia6KzECbg",
  "key15": "3L1fHsFMQyWe45eTJmhDmEBn8NCQWgcsTRWhuTqG8iRJXVBE2Y1vPRVg36nDJeyiXn5QMERterUAMCt7kmwLVpWX",
  "key16": "4epvmfSGmccTPejjHzEkj9GAt1m1cqQf2B7ZiUzdDPWVcjPZjYJZYSSkXo6T7KT9XoxSjSJuzQqeaw5x1S4y5mqM",
  "key17": "5jnCAinpemNtD2S5ByFGA72nEAstySXuvkv5HWMWpexWHBrCGDxg2DR8bSBo1cmzvxVozkkiWnaeNyQhdmu935J7",
  "key18": "5fRn43EQV8ekPWR6ea7VeeAiP4mHgjBbCD4sJ6aYM6PNaXVAy6NeYFvsuq2Cq5Kg6qjBBQNryWfE9nRz1bPbUibd",
  "key19": "33LBCSaoL6o6hfva4VSnoZ9rp8TFBSQB8XUJpFCsS6BYoK6fA6KKqRA5rSdDWmZkzNCkf6r2wnukonPZdYRVLdKP",
  "key20": "2ezjEcFgJ8ho7njse8fpj6mSAZ8CrYRQoqRZzJbFUkJCM5ounVKTdVLNf8qFtL6S5GP3SASnMCpnFmQ92S77PDDi",
  "key21": "2HzkbQzF1xiWY8Co8dnjvse9Wgk2y5Rt6exDSbGXPXvfASGMcffrcQu2Dp7MTK2iigkvApKjTgLxFnVf8McAHFXA",
  "key22": "5GPvQwDQuap9NRTjzXbdF11SKAGJ89YksKucBvfKBfBsrunb83Uzby9CDS9n4aEzrtQvNPhov1H8ZRrxMyphsffg",
  "key23": "2PJMvWdNWXU6UrqxLzXL49kFd4g892ZGVvy5oEWeSdbiFCSwBVfpLWVenknEGiSEpsdm4811xDSuLsCXPjgQ3cP7",
  "key24": "4GDhMQMWeYuiGHVWk2eCjxP3PGrYvYobN1gDq3DhFJrazrLx8ww5mzwaTZWkQM846WcVWSxywNQGseidv3E93jPo",
  "key25": "4j4KPWBTYmzeeGop4u7z7qbtn8n1Kr533KhKRsHuMgSVfDk6YoX8yRazQDp8rDZMsZuVtEQGya9yitFedqFWn31C",
  "key26": "oqF13BjJtfyWCtH5JQRecEnk49sJo4eqGTAZ9mDGfWGd6ca4ejDhacAfhGiVZs7UxG4GUKi7B2zq3FzganDAvD8",
  "key27": "5cPXPZHSfvFZMU2xVGH1Sn7HC4HyV9EKLe1xiXWFBdg4CYFRmqaetrQNF31wxfBJwiszg1qDhyiZybj73JXmtvDn",
  "key28": "2pqHtCfbG2uRmZKHSPrqgWGZahJktvZ1aMtyb8qS33Q6w7tEuUTZcK24MkXstsTmkPeFve5kGVUBMNfZGCmymkkt",
  "key29": "27VgLyh9EX6mmiHwj1C35cjijCrVjJLP7bEG1BP16D1Wo6orBAYwcXQEtL2iwQpfsRvZuUhmgxmGP82CCFwkPkG8",
  "key30": "3WapRgQwSCmy5QtAwXrkvbRwmBdQMf7V8v9pFzXodksUt2P2mNth8Jqgkp5oyG4pM1pcSFWpNvnEPCPpNWN1jo1d",
  "key31": "3qkADkuGTYCsVLhxus7kFubJdcZ3G4xCjQX8VxgQF6YC88WoUkdKsbWXdyrsBCSZ6AiXaNRu4BWdwm1goj5sEBD3",
  "key32": "4Qa1RTespgf9aMKwPkEu5qrJ4VefWrTcgQ1mGrxZHLwY1PrFS5pSuDVA9M31iUgUomLm19vLyVti8zakBisSMhuX",
  "key33": "2kwv5QrpWigAWtbY1XtnrHoutxpSGJuG3tA698rqnTs7B5zgqZyBkmRNSb9Zw257c4F65RLUueRh5jFfn6DT4Bu1",
  "key34": "rMk8gUvDRyk1oWJ26w1sPtmMDq85JuHaoNxWnVftoZ2zEbcX3pqyZF2BP64tVwUpbUeb61HjrhgvpbMmCt5pj5m",
  "key35": "5KQfDU5abcJKXZJBnnJcFzgNLUGhXrULvHBF5Y327CkLHTbmGnycMhPViPFgKFXamm6ZzKS5AKduWSdr2TbHxUG6"
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
