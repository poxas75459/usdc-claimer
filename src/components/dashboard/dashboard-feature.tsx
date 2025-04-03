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
    "34Y4UaeTh7bSSRz4KoM3ykJcnE3ksHokjJzimoi2xwkuovoieKPxXUKZe6yDCG7xb8v2DtvZxssqxmocnE2EBudA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuwBFgTEVHdB2UktaYWj5PjJwY5VsW91LUnwB1pzVfXh5vjfxwUGLMnjzGwpPimH2iamnMc8ASWWdhQALNFhrDa",
  "key1": "24QDsf4GYdE2xj2aTCDvNfNrqA89UgdqEvfddMZMHpjVBaPtMHwE8sAC2ueaFrvdwsDrPRERTGkGWcDVE6rbRT9f",
  "key2": "1E8gacMB5F5ejn64KshAm3tM1hxUaxUUaDvsfXxm8zPegB2UYXqbX7QMikS7esP5SpEBmShwE2hc8fwat99pNhu",
  "key3": "3DTnreoji1XpPXdUrFGtxRqHehDTbi3XXcYGtsvbs3skYv93GvA3ESNrjLLEoMcsfnifnUkAk226ydWQMsGnpz4E",
  "key4": "cTqyC9DXfBcbLshcuoKcwCd7SBPjgUR4nQnQLjmPiUfi8fKrHEFKsyXnBTD6VCieobtq44cqGPH35xunApSE1qD",
  "key5": "5FhmBP2LTY6jSyWsijRSVhcrHQQaWZQurcxk1JJMFizqAVbE4ZvXAXn4pX81qU2pw4tg7JzdvWUAp6VvPNvgaZ82",
  "key6": "5nc67fGwsNoJJS8zso3xV9sbe1Gf1wfCbncCFL8bBxfLPydJAN2rFF3XgFtyVc6t4qRz5SX1xNj3uHJmy9VcpjgZ",
  "key7": "2YQjoFsXHwm2gB3CdVbRs93ehDwy4oah3Sbbahp38ceaVeW913Brxrmwer25v5s4fdLDt9PrtjSehHRxpQBrMZ8E",
  "key8": "5cqLhRVVfjF7cYJL6JaLrSAxyPDQvFMmD8WfvSK7DTMWQpKoag5JSZysq3m2QxoZpywsY1QziJcmdzSruapwcgY4",
  "key9": "46N6XbWJaWCunkg43rNQd8pKQT6WgX9FgbD7dabWRwRZBTeecaikW6m2ENLKzfQoeRLwhqmMYufQPTSfTvUBn2B",
  "key10": "32h8UhThKxajrPUbYPrzmWEybKUUELQ9MW59UoZ56r34ytbMFS9X9yDCJ3rAoaErdPt1CwX4MMtVY2pnNjXLrdnt",
  "key11": "2XHpXP2rkZs9T26TMCt7vWVj4q8Pf8jmMeaQup7J5M1uYiV2ZT1beAsguciTKXBQfGGqj8cLZwjmTEJUcQkcmsEG",
  "key12": "2mHy6DGigUUR1Y7ziUR59D8KqzpTcLHWK8Rxp5RpwKdDu66MktDNDMwNKLUPVKdBi3CC4AmuLzf5F74NHao5d8i9",
  "key13": "2QjRooosz93aiJtYjyjqFShoBQThN9QJucKHUvDF1J5k8hmQp25Nvzscx4173FwD3NeD6KpGq1m3WoET4Uxw4ETw",
  "key14": "554KMCMpFHdtr9HVy4qqK62uUpJevtuCfwxbW6MoNrUqFe81qohiaCtHDd9r6VeznpQgZBNaMfESz7v2oCk3EnVx",
  "key15": "5C726yXFpHdRygo42DNY7gE9pgvVsh8yktv9tVGZmYyVneUAPGEimkuoD3rd7Zc43Ft97xqug2Qsc67nchRpZVAA",
  "key16": "63P46uyKjg6BH63Uaxuc4pbmphgvYDmddEp4ptaB3gcziPwhF1mw1k8TBnPRYJugeBo9Yr7CNxNpzMvRZGXBJCEu",
  "key17": "2yogJJAXbhySyHjkj5ifFoTwr9tvzp6syUWE6j62ajBKaUHa8BxEcibARB7c21CuXDs73iRqFEbM5gpuT9SevS73",
  "key18": "551fbdwr3wWza1Xo7kH8PQXbjKmhcJPcUNhaWn9gvGrpFKZsgoVX5an2FBdeG8pUT5FMaVDrHkU1JA7fZWgUKduL",
  "key19": "27Dx3MKHyKmHPmfaAwo9yXRFyZBPBTwx4RzjK9QH5NbydxiD4EjGRqaYNdypnXfje3j99FEngUNFbJzJd4UYyUCP",
  "key20": "3XYsqTAUD4nWmQuhGCwExE6iehaspc63PdW5LQtNAL8jmt5YJ5QWKRLaKFL5QGTmHyd4VcNWGaTG9tzPd8jU2VCj",
  "key21": "KVfTpeREPrgaR3qSQA4XzAq2rBG6CBRcf8bGZ8ytPw5NWAGqDFvu5R22AUEauukzzEucpkxELwgUz9kUVqZBuj4",
  "key22": "4EfbgfDt1vmVvRQFoEhKkbDbdQ7XPu5sH347VL46pW7ryzs3ABnUhWhctYTy44JSHd18eCj4r8dYDWN99QxFnTEv",
  "key23": "3yWML4TPpzDafS4o63kfZdqJhxL4EsA5S3r2Ttxc6QmKJWKmcYSLGK9NWp3FSfrNyKSBFPf1SYrYGN2fR3AGFucu",
  "key24": "3d6zFbn2uMvVPonwwEuS3JQktqh5XYjogm62AG8AsCrEtbTEBKms83zjniRcD5NpgDFifNmf2Ei24LLUtFDarapG",
  "key25": "3j4ziWhzRQB6mpsc16hzVz4x3GuHc3R2GXj8zzMz5fKKhuNHfkdXctH37dqs3akvUGnNpKQx2R9Jhd7ioLciuC78",
  "key26": "3rT14tbH1qjmbp1V9ms8V9yBMdqH3ycv4hzPgVgUTv3qaiR8KTXAY8iryDeuwhix2MM2BxpQcgh7Ro1U1hsc9w5i",
  "key27": "31iCkPhPTFEZnWTVHngX71wMYbVPdMVFQoCL5nXJuHF68ay4g7Yyb4i27QDHPn3kmZM57WJFaTCxzuwyiCd66VgD",
  "key28": "3yfy8xQz2j1RvHnjc9khiEJsMzUsC6Cs8rPqfnDDFhxRHkbjqnV9NbmG4ATXiokv6JqjuGWqUsrj6iTnnaapiZa4",
  "key29": "53BFe7FL7CeonyG31ApGgSbu8yLyRfDXAnpEwz6FyX1x7sYjkWkKayAbHhGjqc7A5CJhM4EK8cCxacVvpuZbB2qm",
  "key30": "3iwXysFxEmYPKfn3LkKNmSRGnWtnx9Sx7vZVPBTTAYikMu7wc4MUhK6MxFhbimqSB71ctGBy4FySH8EHEJcfGToM",
  "key31": "4DY6ax1pmXkFpUsCGdAuvJ6bEWUhrELJdvcbx8rNvL6783xfCbrqJJ52Tx8CJHtcmuTWir99xr1e2eGZ2nv1CY82",
  "key32": "3ic1bRCvfkyvXV5ENZiFKAvb4HgFzYYphYkdA5A61G24PqtynKgZP4EdXVWCSWts9rXt7G3jUrxyeuais1EfbsSY",
  "key33": "2U4JgX7uvPQJEPGFUqEo2WSqriwqC9hTRZU3XMaXK6v8FUCcRvni1PaHw5uyX1as2T8X6jaZMvsqnf3HeArFQ3t2",
  "key34": "ciXf1ZgUBvMzec3BbG47ekHkmimJSNicMA3aMBM4vcyJbhqxiT8eNi9zHB9C3UDjeagmZz4Neq3muLjFU1PFSMu",
  "key35": "5c2fYeLuNQrkC4x84jS88CJ97XjP6ztEdgQgfDp1TemxeuUD2wLosB96mkieBfo3i5HBqonSHWkZb8WhDspPHqDP",
  "key36": "gUDqmaaAR5n7TKSYMfhL9QBswAXEd3HhB9j1hE9uE7C3UULatNcTkru6ibFcTZTmDhUAL9W41rhP3R6EgSEi3oi",
  "key37": "5ZzBUB5pSn3Dxnkn5hYhCJqrxwygSBmMzBgKkbV9FY58C9tRPxcyr3tA2CwvzPQqNnArTmR7ApaKc5qsk4s7PRuB",
  "key38": "4nVP7T9GQqzgreYx9P5bua9qC8dwQy5Cjc6oDFKENdEhVEgu7WGXpKYJDTNBEr4AkngDCrPa4CoiBsAbNjjbveTv",
  "key39": "2qLbScWLF67WDdZ3JcAAk8LeYnmxwkQ1UctUr1AD1xiJHxeYkzhuutJwSRf3d29ioQ6qETFDDc2eRGCYWs9H8ztV"
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
