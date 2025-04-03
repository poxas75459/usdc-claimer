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
    "2fy7EZzvChvqgjNY67Hq7gggNuSiz6aCS39p852zr2o2VNjugSbRLWVfFKwDoL6HeR8bqek5sxp3iB32WWoGpZ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42SZbWFycuAwX4HxeWgWZVK3HMEA5ho8WdsGeNgzGzBputj3PnMr76gcGekr3C3ZWgXgNfse7KSXTTDu1fJeAx54",
  "key1": "3QDxpYNDoXytrBxycWGi7YpxVgNmVfkkLTXGbaJL1eE2VrNb9vvg2PBebRrripxvhMBAc5S27TY8EQqovjLHFMDX",
  "key2": "RvFZxA3q5C9JS7fihonwLMrFK5AbGk1V7KNquM8Xq3Yv6udZrtxxqwpfyzsZsLopeughS6WSFrFyHucmLAbPpVJ",
  "key3": "58a7p191rBmBG3yCefHLo93TeQHTJX9Nv6TJtLZo73zbcbc7zxHNuojicKkWqbzETTVWNupjhNB43MhBiSq5x89Y",
  "key4": "64MyGdoMZ46CFs8bJEkPTakRuMLUw6ivk6BZyKkMZdaejkFZv5iRbZcYEd6m7PNgmiyVwn1zM8Ug3wW5je38APLP",
  "key5": "2jheGqPT9MJSK8ghAoubAZfkZaLgUtpbemS85zxVRQDNMASSWwz94GRYr2D3JcRxKteCE4D8g2cWTPK7qg4Y26Lc",
  "key6": "2tobUis8NegWdSCs58Wpr8vFgNEjwtrJonYZXHptyg3huYPTts88VKCMchFpCTqKEy5zu8fwWU97V6TMUpb9Fch",
  "key7": "5P5f4dhfDDGAUuUPimFnYNe5z4gDLa9KmhYdykFoArc3Xk66aDG3tQsP7gEwYafJQNgk6C3vW1tokQ78buLAqfqg",
  "key8": "2h8NvGmeQ3vNSPMDHaKLXKJmg3hCSDZHD1kEdToHp8Ag9HWJpF4GV1cN1H5BXPuK5pXhCyDLKrfmtBMaoRQHvXYk",
  "key9": "4DhnD4svoXdQBUxNUgwXbkGRZo4aWWP6DFPjRNUYwtmKVER69prZbN9889L7GcjXYpaqpTQGqGFK2TjsFY239q8D",
  "key10": "4MyZB9JcbjmiidPNsFwiZjiHRuoUk6ufBY8TXawrb3qtuidFGM32J1Yrk1Crxw82WEtTqCDBPsosUxP6jrFB52nq",
  "key11": "uResPaDjBBiWqhBm7TezkaCVASm1HbJ6z1SjERdV2xkX8kfk2Ap3mRZKWJ9DZkJkGWzw17JFsannjr7ANf2aB2u",
  "key12": "4Dif2HwyPhdptpw4wXYYThaBMY3qU2zJqFcgJcLyjQuQKe9JyqgxMVkppN3tFaJch3AEyscBeX32BSRfvVFdVPBQ",
  "key13": "2pdJvoXGghGJU8Xtht7WUsswrckBWZuvH5F64yHYRm3F4GZq4h7DqnAa1rUNXWNMPu7rvD3jYgpWS7pNNf9DyrdS",
  "key14": "3GCCN3nCxpYX1MXEQFeevcom4jno6DUayiGg9zuF4QTwspJ12Tj4vkiUMsg9ACxNRbfcGdxgRwvqZYHx6MvLvnBv",
  "key15": "iwHncoWqbCJDa1jTyiqnbxr7oyHt2p2KS3dC7XRDuc6MYDkKdeV3jyumNwqVUB8PSPm1XtSB5MafQx6a7S5KiPb",
  "key16": "4FVurjoCihNxfouwk9mNHF4qkqUdqkkVUh8ouNKMpkqRxZYD6uWmfiQUE15rsCAzbx8Jxy4xVBqRoaBv2u7GW2DG",
  "key17": "24T1wCTy5GHZHuNarmFMQ2WQ9FWg9roYqW7bWn3ada9v61DLLk27xrZFuhaQn69EFdyuxmmdai89UpPt7Yc4Di2P",
  "key18": "5ohfhq3nS4ys59osAFN6tMxqdC9gYiQKohKh2nq3udkZVF1jU2XGVKqnxXQnkdpNwoHiA1uHu5f4t5PZz3Czw95L",
  "key19": "3k74hDnuiqQyo9Zro5N3aM5ZNKyEoWtv1k5G3y3p1G6gHS3aDf9tyjRXwNuEdJR7Qa5c89dxf4d8b2UgUGEkHspp",
  "key20": "2nmRXqJbeciYhHbEV7iVLwPB4SWM81hWNVdf9pKaXHXL9jdBTmneU9e9qixDRPSFfTj8mz4Zh4BFTqaqofDpAkq1",
  "key21": "k12FWW1doL7ujJabvUzwuWGBGn7m6iyNhVvh4uB4TJeHizKKGfgSAhiV5pzXDF6vhbimEovyTbLzfYGuTnR4zxr",
  "key22": "4FQiguschpRzGr8GsBoXCpxwjweDrBvL161Te4uPcYxfPE923vecWMPBz22UjNo8RvzDRYNvhdmLoHS9Vb3pqd96",
  "key23": "64dDL3Ncs5J7sVJS2pxE9nN47ziQoMwc3UpZ3gpwkaPdgRDTt9sSAehrc2baDohq3VrNfxvAFXeANSsWfAeKfHxy",
  "key24": "5FnGv7RLxi3aThKCgwH7Xxqg4dB2rD69xX3irM4s6F4YHNQd2MPnEzdK5eVdWZANP1NLqoRxYU7tpr2Xd4ppThfa",
  "key25": "4bzcgNUk9YhpjgycPJHoYfvbf4MYUZtwq18tQw5Mkx6Wg1maNwf2TYpeTwyZiBJ5voqxzWKfCaxx8feuXUogAqtD",
  "key26": "5rmdvH1ZXTFxumk6DCvRb5f8UeDxdiZDzjaLbaMCfyzmxxqQHEoF44NPXkLWw6nxCbXBTj1GusnfmR6WFcQRsa92",
  "key27": "3ob9usB63a1iP1RaoCKW71i9hFWvRnshryFhcbpJcVXFC3GufuMd7oy93gET1V391r7hrQX3jYHzniEraLDQZLz5",
  "key28": "2XF1qwJaf6G39BE6EEBYSBCdLmoEQMy3zUrUfJq3xN6YuphNFnR9dChYgFjBrSQQg1FWAjQWqPeior6H99UHjg3d",
  "key29": "3r3k875w197aRGRSJuPA1y9jh338bi1nsrGXFxmN2F6g8Uak6xfYvUS64PoTNSH7BpnLz1gaacFjFeQQwRRRszGU",
  "key30": "5ArpUdRuChLe4jf9sLE7KzvJEGJRwvUJ9WkjGVYPNewBgju5FiSDpspnP91mewBunLCDwDPxJPf7VvZcFF5MXkWh",
  "key31": "2yvcdmpTsfMx2nWnagYqnqAYLLidxCZ6vcttkiRW7HbvnYCo6D8Bq8KkkjCGDFmuvKNzNNsJXT17aWEbDo3VD2Ai",
  "key32": "Fjkk1QX5rnhBWUTrHTgXQAt9mYzAiFfk67KqKnNaTtbjRdfjy7Zm6rWJRFNjeVvTkKGG6YS65n6skLvg7uLLZfu",
  "key33": "61Pi9j5mzfGcXdXUXN457M9JwhVdbAs69bnK2XkkcxAjpECfnFkthi9XJs3Yqnd9dNhzdfhyBNCsqxre6RLqbxiY",
  "key34": "3ZtsJSaW4zXZoJ94irYakYDGsC8sGpesx8rH6xTwRmwXt42BjHRf38SAsRFcMZXvFVRPdUD9tSL6cdjvAXYu3W3k",
  "key35": "3p4KDqFD83KijUseU9R5A5DYZGXsoHgR24NTQ6Gcmom7ca4p7K2izxTjwmrAPg1zgRTZj1xM5RPbRMDRjhkJQSPT",
  "key36": "RsPUfevfdquH8ZNPhgkUbYiEz6itCUQGBQnw88h9VaazHLGfMuRssR4ryeaMxBRoxVUd3evxwmW54xZs13rGg36",
  "key37": "2CuZSd8kpdV6yRDUqeuyNMRxNcrpttLBdoQGh72e6oofGBKWt195QwCRE9truGbDuPChPEZtGKF8FYZPcu6jNo32",
  "key38": "FpK8oSpyKVwXnNQLBHz4kkhn23KYRcsViaY4Bkxnw5Exbet8ecTrAcTjEb9ABnA7HiuUWtgLZy8RjSffn1xHkwV",
  "key39": "26KYzGNJ5CB33epkmUcw68Pz1vmDYpnv5tFQkxv4ExAtw7couZbjLYappdar69hAcSrfQNNA5TczFbspRJ3Wtx4q",
  "key40": "51Bi7RM9FCY5xjVRKAVMmGqDhuyLLP4XqJYsV4XAtu85FomoxyxRY1rz7muz8kHa7pbk1VL3sJkxDt42Mz3hbeJK",
  "key41": "3CUBvRWqu72JyyF1Gy1yVf3hcKNuDAvkgVC2sHE71GPzNoostHKLwNhYs1NJKEuFdZ49HfPZpwWTsBeQhykQMchw",
  "key42": "GDswdmS8E4KfHUFfPG9JtGUhqpNwJckJtBXySujagVy3EQXRT34kbxhrtSJWcUcp8rHyy7xbLdrLytsEsUDFe2L",
  "key43": "61jG5tJsGVDEp3efxWgGrP7dyeMi6HmNc6rkwz1DQSjxFbVbbd3114XeAA2dxawTpfCpsBirDG7Tu7g9po4mcpQB",
  "key44": "3Pr5XqH1V6V4TyD3AsTpG85upGpDXGiDh9RzUoqbH4bqNQJaL2iWmS2JLoRida9KHXK23P1U7wfWdewmYBCxcJgK",
  "key45": "3hziU7qd5Z6vB4vr48S53MiLypX4hJ6VE3WJtGkRgfRp93EuAYz5Hb3YpsDMDyp6qBjMDMyPUTqK2HBequyumoK"
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
