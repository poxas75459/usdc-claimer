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
    "3p4cTJXvCG7ESQ5Hq4QyDasJMAdcn4sVaFT7z36n8tpYgjgLu61Knz9ki24PBsDVTdEifc8WCyv7TwvE627EzUrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Li6DMqeXy1ubUBiEdxiZpyP6iHLDiDfqQEYEaJxQRttpYZZ6q69twYfvg12VfZJoNTB3eZXArAKcgVAnfP5oCWa",
  "key1": "41eAgvKTxNRwED59KAgh4bRx56oT6vzAxrmK6obSpmmprk4e2xjpBLfV9xH75NpkVikRsvEXxtiyNtcDYoQua1ag",
  "key2": "2MAm29a9fZV1g9qRSuTcF2vHXq7rRzF8Espa4mQ68WMNeLC8Sz4NV8TP4huoa7J53gvManAmtiRUxHSuCjYkWxbT",
  "key3": "4AME5KT5NiWfHYTdJtzFdknp3yYw6ELhqameexTHE4Dmy1w4oF9VU5ZS9wvngbLdv7j8TsRq1RtWJXSHqcAfaaSW",
  "key4": "5YXRJ1obvscPv2Tu9GbvKpMZEYKdBS8sST92zUeEwaJuU9Phhb8jnfPRFc9P3ZKUkcPajDDyURzomNUx1ZmopSH5",
  "key5": "2XpWRHXR1hzvhHgqiR9Y76oc14RShu57oHu5HaxnYF48v2t6YQk2GbnCvHzSQ62PVXN9BbwYEYjeXiMqWGPQcjKL",
  "key6": "63GkwCbx1i2Jukbb9TgfjzHJuUsLLFN2bkJdmasZzGpwHseHmMP24AheuFWeDJ5xi94gBEzEpeTBWCXeWWmFie2h",
  "key7": "3YFZ2NY3DYbqruVE9iwpw2evbDncMwRqf8zdGQcbKokCHUTwoMHNeeQ1JRL2tS4fuDGCQALcN8fnynTcHfDrs4Hx",
  "key8": "3isHFsndhDTvVTCHptaqdbNy5W1GQNLVHG3wxKTtgvNGq3RrbMvhvkLu6py2eo7zJ5zPAvcxM73zemw5j5oHSUz",
  "key9": "5i6gfw9U3pnopwG2g59JjEpqD3eunGkEAygUzsb2bC9j8Dyu56EeuVoP3wUGQqZhREVDNa4TrUK7huqrg6DGU1Zn",
  "key10": "67XDpfMiK3UaMrTZKvU3xQpTVgWCxKduQwS7ztwLPWCk3Swdre2mJN66nRaj9TfDWmZ9wYXb2TZSN5Rcw8ZbW2Nt",
  "key11": "4GEPcvMrJ3UeLmkP6eDvnK5ihzTkWTa1SUPZ6UojMeVDxwbAnH2FT7MrnMvFUJakpQJSbQTmFSFa9qvVLHYHEfQd",
  "key12": "5yy83kzD4DisEL1us27NXujvuwoZ5oCaJ5nzY9jGBYSVJrAbfe3TArH9uhPJaiHP8Gpm8KDGZotzCCpn4PjZ4txH",
  "key13": "2CR52znTQkdg42DR3o7NSkVtNUmaBvvY51Seh8GD8Nx22GFf1e9LieE8jiTe5b5xHtDoMbtagqzjgetJoHrsgT2E",
  "key14": "3nfyijZZgHeB7GTwB3z1Hh4r39ZsWiE4VJY6k15Wfu9h7a4NPpbmy4Vbzo4TMoQGLYbWDfZTuwcNvEHdaA51ymus",
  "key15": "4B6bzuhpGASch53F9d5iyCeqVr7fZPNT6ruqvvxp9ScDDiGTUkvvnHaoDuq54Pak1q2f5n9fR9JMrgzrzPnP8bWT",
  "key16": "2ivwCCXBgzttaUM6Q8g4BNUxjvHnEqFN8QdAg5RDMSZaZuydefPXZXaaSLhzcXGBamdxN34Wpg7zXiowJPiQbtEH",
  "key17": "4ZU74rA4KgQRinT1BwjPtbtjhEDYpsAah7ota1rGKRGNhZbUB2DKYct2kyScUKMvU2a7Cq2ubw4rpbYUN6SwS9TA",
  "key18": "5D7peZ7pUx31vXqdf59rqsAjSqEMdF2YL3eexnY89NYrgHKLDh3U2RQp2ShCn8jTE8h9CRqTTArYQfCK4RHnTrSA",
  "key19": "5jd987AbjfF7KTzxYs5ejAZRsedCKx9aKTxVzRpVMw6eiUyUrd2eHCzgq4SJ8uULBGVbZq75dJ4et35UdYcWLXHG",
  "key20": "4V6EAALLrTNb2EmUpxoVpxS4DCKwQ3yQNKXLp4fDrAQWtVFubRLZx1iaVudDpDxqxYB8tWjJcY6FREag5Li3NreP",
  "key21": "4peANeDPoFE4kH6Vf2xVajdnJsTgvo3Q4GV8Lg78pQmaeDZmpK5NWPzxjjttzCerjVkTKQM8sc4r1e4eTxcoYxgo",
  "key22": "4HyYSvAmtYYg8GL6z2UYm9ejDpP8bSxhwkyNVcKjGxvRy4HKei8Zu72d3siXHq4VwgrA5CKHS28h2zQEZRkj87Qo",
  "key23": "2CQDZJnN2yyA4phx4dKCGmtm2L9pRgNbDpYN6b8fyJVzM6D5n8tBCRjvTAr9qMmEbq8tpoqUot4XBD8MfQbAYKfu",
  "key24": "2hejSD2epJNGaPJSSsGkCsq7E8mLPoVhq8BcX4Bi7v2RAsTHNCCTfrbW7FQoo5e6iAj753HqMf6ufnMZUdATJF1f",
  "key25": "4KzPDLPA2jthnBiFhj9AjddVaDHR1Y8ayZfyoM2FGSmYZrdaXCwpc6j6ViDCvVhadgE241FA9GVhgGX3G6LyTjVd",
  "key26": "4F4bSTAMhYkLfAdqub2dt6yHKAm5MMBoH4LAugToqqE4asNXLmziHcd3uqmmCTW8jnLDTDpnyExBGFaKXUY87HyJ",
  "key27": "2PrGt3kxjbZgYzB72vUaUXKUQM144chrGscy5n3Wbagj1JeLMFVssZaPebMrohqzsf76XfMUn6mztbaQfj1TFuxb",
  "key28": "2BS6k23G64cAasenUVi7m59owYPNNH8YwheuCye342ryqkajSqCyoP1UDSLREcP8ba7MqWGStpTxUS4rAGu3mz1Y",
  "key29": "3wbr2ChY6TPM4KzJkZmNPGooZr5PVA5jnLcY9wXBSTSXxPUqe2AxdijxSCjNDUH7x8z28p67pD94pPLREw4zTUce",
  "key30": "3YvtiJPq9VsXrQYJ5vDGqKgQdB3PCFm5Rr5iUPGprEmvxgxJEZuWTyihXTFPbdN2hKngbaSya9BoTAERU4Me63dJ",
  "key31": "39SiXEjM58pEBLvQPU1CTrQxQdfp4GCEViFBrfVHBq7XXpyxJ4Rz8oRnBRe6WyGDLsZ2RJmoQ9JTFaUQLfkHpWSM",
  "key32": "5dka2eSwp38VfpwNGA6E4uGEVNasfY1UUak1C6aqfypjaPmeFTkXGbKsvLg73C8b67AAnFGWueLC3pJCPZyE9ApJ",
  "key33": "6GrN7hhht8qxkT45jqvCYQLSpPrXoXHuEno2huX7DikEHCZDogHJfgSxd7vxt6picAD8cAhaCSLgq8SWJpSrDvt",
  "key34": "2macvTTx6rKUSWbd2QvwojBBH1wtWo6G2vcrDJQ8vPJMzewVaXVT2fi4hTw5GmSN6gWHUrK8MYaVSeHMawpTZMog",
  "key35": "5pPgAWwYzjFS7q12N4t5YHBCtzrBwYdY4uKGJqK4NG8h99poaXNjW8S1r6EW83SjzkR3SLiTunkKi2xQBhufAsBJ",
  "key36": "4QFem7Bi1tK8QCeM3gemzYF763heK3cn8641pkf13N2eoHnL5ojgPQAb4C2b5bk6W4sFxcoK8atuNpw4v95qAKYN",
  "key37": "3m4VPQdeY7ro15XvGzTCu2wVWGD5Sj9dbaciEnH1kyvruQnzQzXtCyKVeiYBjcJ2Aj9H7E3WQSSSZ427NwgrSXLU",
  "key38": "3ddickwi5H2KSF6UK4A8maTd3Yr7iqfK4h2Z1CYeHTJJ9pYeneWSSqFyuNjAFbWu4k1aSXKMQQL7n1BLQCzR45BF",
  "key39": "gLAU8Qi7ACG4WwG6P97XVKx6w3wLzWQQheg7rnVB9jY2AfSdDkUzsVYVWGBCLT3kaouuVKxzZBpC3Wbknh2QZTq",
  "key40": "3UKTztx7KdMZNFypEhW1cUFB8yiJSYUEAbGD7on6MsDJyCbxhPZnL4DGxQSw4MNgPMywKH2atb2S1s562j6odozx",
  "key41": "48Mkk3sz6ZzK4G1NtipHMygZdHNGCZxTbuSDCn5b2R9B8rA7aTXTSrtcouWb3f3GLd5i6j6uCqTGdv49deBzCGfc",
  "key42": "d2h1iaMJUFXQLyv3oBu2wzSyH4t67rJ9BxSudyFa9D7tGBjmSgRhChZwe1c5JoZNka79PYJbGegvHvUpVAGKgt1",
  "key43": "5nEuAho2yyZh4HHv78ut9DF7Ds8uuXXRYiGyLQ3oAgwrLu8mGWHH7YxtUySxhYLtN6bTUrfzJDWPST24kJ9trUHj"
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
