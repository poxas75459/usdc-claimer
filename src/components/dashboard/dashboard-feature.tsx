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
    "4tFbuewmMwiazdXMUPiVFFRaGnSfHLtEFEsEGM7hgMvKk2VjtuBDfytgevDuoX8ENjfZByQ7Pq4QH53Ey2Z8UGHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6bCAorRKQmfDFfK7QZjPfw7mXPbohH2sHkGL92SjxnPnXN4LU5GVwg12KAmscX9nwNw9v5v42FxP4cRk1Fbj2x",
  "key1": "4caZfdYTLeiQVTNbXyM9LKmvfMzxdnDcTs1uY8PRxNcSZxdRCMFC9Wgp2v2Rp1BodbX5uip4KyZfm2dp1yV5zksp",
  "key2": "KbUSeYSXHPq6vLhWaZqHkJkikyq6wh6yHGJf7KvzCFutPMVTNkbgdyixSqHSG6zw2Zh6zS8mHnBTSQC6XzhS9ds",
  "key3": "4kDZdr81G3Sz4xAQ22HqUpPK6oL974EfUQP5YivCs2dZqxJqU2AAKBV2d8APRwWUYyYzx3NQzCJ6AT5Ln3R7qcGM",
  "key4": "4sgXzTdBqWUY4yiHSrfvbArP5QhuwmmZVUiDuNgm7WWMHyxHdprAig6rMV9JwdGFFqgvBUGotRB4ofhRd51K751P",
  "key5": "5hkxYLVrh5HrgTEXPtyxjoYn3zVsxEaMHzdD5Victcn4Tc2wbmsCN5popjg9jMxiFWSajcuTiG9f7stJcqGb3Ann",
  "key6": "5Ze2AHuGo7xLRj3U2F6e3SnnBNPp8bwFPaizCo5WT8khZWbhTv3shMdVxkS6k1wYNYonyz521Cw11aV1mbnrmgmq",
  "key7": "2rVEvtBmGZXUeKTNoHKP8YttoPEJ3e8ub19uA8QZdVpVRL9b2JcCqWRUrwXnFjZX9gheqG2fBGSQhh25a3wNXsWR",
  "key8": "aHnAyz61T1fJyeZ7s2Hv4kozittMtTpSjLGTSgoosM1K482hNxGZTkZ5zG8vfy3RCzJ8SoKUbt4gtFKESevPczP",
  "key9": "39rqiYPjfEeQKgkfGtY6gF7uETb9unFdjK9TXsR2uvDuH4PNmz3vmvmN8Xt6CdKSvsD69tEBYWkwj1a1yA1fiWkj",
  "key10": "4rHbncfyJWdyFARhmujWmQ7EBq6dfsgBW7MQ3jDNQkWvvwucnoLNsKfcUD4BdRFKccQfBDqwUVHJzRhamVu97WKq",
  "key11": "2diMiW26Szz99fCC9ohRJNooYxNUZeD1S2SDnhi1JxKdKSbtricFk7xJ8fQ5CUpTamMqJ1PHv4RPkv2i1eqc8jVx",
  "key12": "ZKQxS3Q6e3eesFxaDddwwPj6YUjNR3MaQV7MgEaGxcL3QNF5smfajypWkhKCzd9qC9a8uUoJMEv9QYnF8AjKnjG",
  "key13": "qGC224AUTUp9ggenkjJK25T9hb1rjUnXzGrw6zjbuzeamunczeqzjaHf8CWYmUMY4w3nFisEdZkaW3u3Yazyxdf",
  "key14": "9cXG5Gy9EwohTpVqgB5i6tUeALS5bYviLVrgzfmuZ3Xjvc5h7P26ayUaukY4ht6D4Qvf6pofxND16oCH9EdSvUM",
  "key15": "4EYTCrgPY6piYBhWyoafsyTuH82fwNecNnufF8TzPKihZtLHjsGKeLAT92hGfHhPYoayFRPmfjWrxQFdiN1ZsmzL",
  "key16": "3BzRGQ7PuW7L9cGYTywj3naYeHT6LLfbtaNhpaQJHZ1d9HA3ogFjHjCkdnYGQ6pHBBybfVm3EDEA67sGJX4WEouS",
  "key17": "4wskJPFupUR6cWEwCtrmNP4gikWqT4gYWWEifQ8uyprHj2arJYbhJo8uPsU8VorMtzSCygWzTGMou8J7sia2ZSV7",
  "key18": "q2Hj3Bb9VuzGpuwTSGQT7xfqc4zTmy4MwsfA3F53coNdgTokZnRNnnh1HZemmdeUcdCs4Z6eRVTjFeFQz2VF5D3",
  "key19": "4dmQPhemHgH5TpMCZN8YsuY1kUrBLGpiNdKQkFb5yZwGh9psYaAcRBKoDSFRQbDwoM9cojcAVZ34CpnX2tszQk7a",
  "key20": "4o48q1jXS9eA9ibr2nF7o1XHf1VTzR8josA6XEHSSsPE9XH3dW1U74DyV918nRNuk9tHDoVBtp4mW3PyUAa4975b",
  "key21": "5vUydngJdxXAdTRshGnvrJ37AWC8XYDfhwoT1chQ7x64jrj53LQ7kk6Y3SZcTigyNS4ZwdKTU4YcMcqxFnwSum7n",
  "key22": "4a7Gmi7hkBTsLsbaRV4fWJzvh1UR254sirV2NeeGGz1p2HTKh4s7z6pQ6NZnWS7cMwUx76S7FdnApzVA1dvqT6Np",
  "key23": "SiSij4hHdimwbFtUg8WxD69JX7NvEDtRTfUHBTuBJA9kRD6PwNZBCtoebYEvd61AEATjrnkmvcU5jmd8EfLUBGF",
  "key24": "4edcPq6tYF6sm5UwWnrDAAPEUAeYH79dFDfcQQT3eQKAuT5MuHRCktE5mEKptgP9QcaAgrwjseafEj71QZcaoLCs",
  "key25": "3hQBRCBrrM5Ypy2zVfbPgmYjZKMyy89cTpidr7N8QgzmuctG33CtZ9mtJK6dReEp6SFEVEARHeXDhP8H29tVnByu",
  "key26": "3cne57ya4xhbtr1wvb9eBvskTSYGKB2KfysyeqC2riaercz1fePPF3P9b3iLrZRycr5neBK366mYy7Cu1kvyfVbZ",
  "key27": "2QRsx7Yz8jnpkmjpYd2E8bGBaXS3kpnfpyyLjmxsQ3vR26FWWtyDzocdtJnysiTVdA6tUiqjZ724d4DKMKSbBK9F",
  "key28": "5Dw7Zf8hYhp5NDSiBBvz55EqSXB4msytsfEeYyTFsNM4g7FbCb1Rw4nM1o2MU6dvRKUMXgpnhH2pY3dPaoBCRUyx",
  "key29": "zV2HufTosoYKZ81ZWKjSN6PHrjqDpMGSqW7zZ57UFQYRZEbd6DtKsbb6A2bDPSYBCm9v3V2B7N9HCHo9jSzbN1P",
  "key30": "cHLBK67viCbS4k9LivbJshrWxFQRH6sqKviwMhLKw1TF6UACShe1bGso3y9ENWEdjhEGKwvnSgxF2CZRiWpoT4v",
  "key31": "2fRknxMV3sXMw1btmxELDo3ZD91ZsidEhYP4RAev6sV79jpGSQfhUnh2CPg1cL6pn7gRMeH8SAF2ma9FTcmt6yh3"
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
