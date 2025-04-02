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
    "4A81oEbG7kPwFHVbsQ3MHWomnhovtEy4RvUPMJk3a4RhzUBcBrUVtWQY2VK9JfRzrq1fA9Pty7XHFwT4EoXAHYBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mn2T4eM5pSL3haF1R86w4PVDX35yNGEvqg4qm2Gpzwy5WvMJ96Eb3HMNQgUuURMe8jvYWPNLYhyuYGd5nmBY96D",
  "key1": "4eJyEjA5PcW5V2rtNcGFsfnjA3f4jtTKWeT6nvkLeFcLFQzc7mU84WdDs5w17dtnWe79rpHaGVLivFjWMfEnDHpn",
  "key2": "45KdrX6uhHzHziX3urXQmsqK79pLEBk3r4a3hQTQStwBoksE2mSn5f7SoPWUh8cdF5xiJWa8NqK2f7iXXugPgMnZ",
  "key3": "2MiMxECktoqAwmwipzWxgQKXLLwupa4MY1YZy5LuvNXHNaYgpYyXMTDbsFxP5MSJGrUaBuFedaDxjYtZCGCHbiic",
  "key4": "3f5Qc73Bug2h29k7RDGNNyxgheY1i78DxviEQ6GsAyyoophKPH9yoW5PMWuYh1UbvoPwJ8qi5kdAaCKaQoRCJ8K6",
  "key5": "3PKjmGZiJrC7zWqCK4H2s6PcU6UW5kPTxyzMic5DQ9McwYFBwBUPeaNkpCpD6GyrDFeqWwRviZD9ajo7k62Dk4UG",
  "key6": "3j5QxHxcXGWMr8MjsVFzmvprJxmoWpHBYmKbxLG64pdsFq4YfWku83JK9dSbHu1QnqnG16uW2iC3HWqq59ZujoD3",
  "key7": "RhWy1uhscBwnxGhi7unh5fP4RfM49K1Aj6gsWduUfY3wKaHqMMV7hut5LvQYzAX5A8heBi6Wjg4ap3x1jzr3nTq",
  "key8": "3WAZF7hyQTEpQsXoS9C71m3mLSLKn7kJgmc94DRcfcz8Gt3zWjFZACMcBhYRS1D3RvEc2R5y31oUtp37mrYWfXPV",
  "key9": "3pSE45fYCzwa3gz4oMd8kVPtgeMmPKnZsAcnFgdeGPttC2E5b4pXm8AqkMynWVkmXpTYq13Fv1WEoQosvfmgB7zc",
  "key10": "3yrhwRte6F3v9vzbp8cBKWv8zbqf6F8sRv3UTXp33YTjBwCF6v22h8ZdhS6LGFwQqh7ZMCEhHKtsUK7ngvbN56gK",
  "key11": "g2TpeyYUek2dYP5dVuA7d1aogqWrVqDEaJu4ZGYao7UGntKx8qDtfjyrzF979QhWrxRgxwpR6XesxpVTFbhiotS",
  "key12": "41pQtf8vpaSBfWq6Zka9CcKXFPE8tjfyfoPhjVwnDNs2UjnAcFVibUc2JosdDT37dEuYxGX1UME7hhbFk1vVVYAt",
  "key13": "4KubwZ7vB8fDWJ43LWRCAK3q6rfebnKV3yCBVVpfArpKxQzewyz18xxBrj6zgmMuJS8Rb4Af81NHsnkBN2QPbkbi",
  "key14": "5CaUMddkoZy2UJmPTo2dPWbeCaSgK7zEXbtrxeE3wgNTVgtKU9JXxzrvgABsDjCFqfAWWitYEuv3LMmJKTT67T1N",
  "key15": "617FUQsQL9YE4uJ6i3RsTrdKRCkMQn8NY6XZUgRQoJf61ki9ivk4Qhd8rpJpmupUPFe49ANm1HDB3cqxM6Gc37SD",
  "key16": "4G9Nx7Zgvs9LG6gBhGnj6PK8hfa1ePWgu9LVg1Z2ZPGaxNybdcz48d7PrftwzwNAxAgLzB6zVyxe8JndQwMU9Xgp",
  "key17": "2jwGu8BCnyiLcezejRmtjopKq7KMzKmCy1syuGPow1EHtrQemc7MDmEYDgK6YDwM1razYS3VuSp1mx9YCWuVDD7f",
  "key18": "2QuUoE7XF8wM6ULmC41nzQmeBypxnT9y393en2BJ7Ww9ZwqLAayUvWTMosueQT3jiEzEZY1TfWes6kfcLnEcXv47",
  "key19": "4eDE88LpqWgbTPXHPyDvJAYadrA6jKZVhehV5aBhPL5nBb6gmEVhs5YFsDjiFFPgLcZcG5XcmhUxiSBgCbSDoYKH",
  "key20": "tviHMthB6PXrao3iLwr8JHqBJ6dEUdsJ6Up3zUegfBCFtbLXKMexyFB18wtHn6wJUq5TnmMWzK7HAr73p74MapG",
  "key21": "3WK3HiLQrKBk1Dun6MVbVFqEMX6SznLBa3Cm4Xfib5Qv2YfFzTR3Bzp5eJELc82JSkeHgT3yyerw2oy1B4zoDzwb",
  "key22": "4hv6NGJi8aw8vpvdzk1ereTAh1D1BHH56xioyFEkaqVQ1xvmuqmpqnZiKvvg4pUMCxsdv1vtLhkbU7YPenH1Rsrp",
  "key23": "4qFonhi9ryG1yeY6QppM8GeKr2SPc3F2fbK9y7hQjH8656J93Lo5udehctfhFteQDXxeovU9gfVnByZYc3bJGRRg",
  "key24": "384fj4znikJzTPEMXhwkY8NrFHz6SMywC1XHCvZFZp2UJf56CY58mRp2Ku3MSCYov53QENU8uVwzuXk722EUFCyr",
  "key25": "2vPymNVwbJpwep3ykKrVKrpxPjHKpSHmWw9jZMxn2npRrTVApvM3dTocbzfvfVV2Z3ges2DYa4TFusxThjq41hzj",
  "key26": "2H9YeQhBUvjk7mvu9mM7GSGXjkdK1dWsBW3rxYbwGS5x1M9ghsggKxwnZayyWowkKp7SWshmYxksw1CPRL1JFykG",
  "key27": "65235hitewPKbw1y8can7gg9F3phzs4BXD4W5TM85LyYcJMUtX9rmVKzBZDF8HnvwuTwrnigrUB2KojrNjsdcGTn",
  "key28": "3JfdfnZsYaFVR7BgZ1SrhXptNY2e8BT25RydPpUhF9RoMc7j1WxhB22geXL6tV27UYRUi7vXQqczz5At8Q28EB7U",
  "key29": "2SNVU3YdWuqX3PK2pdMS9ij7ETZ9hPdyK7gtfjAoMp4jkeDZKvHdEWGbTf3zwkvVkEJYzecry8Rihv4PfV3Y6wFK",
  "key30": "zPmTTac4DuXsCMqUR5vLbUHzTi4uxEok355rwyUwT2f2eibkTTtbJeNV6mUD6S6EY36gwKq6e29ogQbjfGgYsUi",
  "key31": "38ttEjg83iaArnctnLu2gNVDxZchQSz6Cv9mUWabt3Jnc5FUMPjvTnykaBqihVmeEFeimWRQoSCsQuNpjwUbeZFr",
  "key32": "PtcQud4wxwMhYpELDcyrTaqkGExFewL6TbEcdS62G2VG5t6agktkTGndjTFxFNRQVhSAEH9xgCYnNMTqz65M1bR",
  "key33": "R8QsVq3x4teFVhi9P2dhThfm2ux1MwQzED9bwVkvK3koB6dRfYcpvd1wU6Co2jX7cU2o1esFgX8nqfGEJacLuEH",
  "key34": "52kehYGM4QsvPuB3sF4uiaKsDXR3kAEGxfmmW7H21VUiG8QDMeQ3xjYHC6b9CwSZ23VSugL5maPgAo1ZexSLWChn",
  "key35": "AerRGaUGmXZ8dTqSGU5qz2aeqAeGp8FdWcrvo3v1NZ8LZL1ie63R3UemcEzH84zefXhFKac5w9mGS7jB3oW9Juj",
  "key36": "5snAJGVCdk6tCFHsyg42vwbkrLhcK87Pftusap8FzWLGFn84cnBdHsQNfD5jFxiMwDNRDj82gMXwxVec31Rrymvh",
  "key37": "2Ysa6H6cWSPwP5XQJ8hgTCA3w53TqoqDwZzdyEQonB6BrpSjhN6BGgdsX6br5Sp5ubFmdZShzTGQWD3856cJeF62",
  "key38": "4gVJqgRHmPbS6c7BJV8kXNuY8u6Lb3LDZashDdSAx24efQKYz2eF74Ra2PJgqMFJ5JyZGWyawDuBCWfZupJo9GWk",
  "key39": "MnEKgQXZCxFGkLwzoDxbEgDsqKHvH9PS2e4gh9V17WtLGAEEAzMgv3UPKUoB2Vx2bHhM4htmLDRp3BMAD9U2SAK",
  "key40": "5g4tZhL7C4sMfuoP46pudftjKe71zZioMT1gdTA6H5tQ8R7H4sqXT6gDpMpLhChXws43AeYEHKuub8HAjUBAjfEY",
  "key41": "5WySvgC2F9PePkZFNTdAZ9HGQUiCkFwUGAMhqbe45VNhBUshkfHrmZqhGgntZt5YdfiLqmDj3XeVJT594vJqRdY6",
  "key42": "2zgCsGYMaJWWKZ1FiSSHQN1fXJMnwjWHis4oCAQwdxG3PCzyewMQk5eRDWYDw898t72hD9BaKwnH1HCKVWySepKf",
  "key43": "4y1kK4y5pk9Rww58hbwtNGP9KPVBAP1jvAQSjAkUujkRhNN8Yw1xQm16Zm8WPPdNt2drYmhFWBYnZ39YLsAAwuAj",
  "key44": "2p7XrvyTDUK3iqWHsYVZ1EUZn5StkY2c3axg3kQYacZbjLhPTEMY9vQfkLWD85CbxasYFVBNpxAz3eQuEqgsCvc",
  "key45": "3daBtE3N1g21SHPnnPDgsPwLUrZBcSwm9UbmUgRkmeEegdjScrLHnDP7jrRpdV7TKRRykFyw1x3eHVfK7auGZaoH",
  "key46": "3wBd3CLmRStWw1dYc2g1KjcT6h8bRXQVdhTFhY4Tcp5aTbxZAoeHEZwTPZDARiUVT4ZZq1DafcTaJ35ZuEBnyx4"
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
