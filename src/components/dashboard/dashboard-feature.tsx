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
    "55Q9SSHumvqK1r6v1NdniKvg7MG7TfKkAEoFhFsQfao18JZuBWBywRtkCjzckLW6Y6GWwf7zHbaqa9s1mPSNo2sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQDz5pSDfecFCbZMfazNY5kSrmf297ScvjiyzKDnLDd5jF62XRVnXQVG5dkTVupoPZq5JteKFmViBitvQcLhExz",
  "key1": "4r6EiVVCmbQcBpkcqVstPkrz4DpMzEDuHP6VAay3pmx3aWhav4UH4tXuzoSVozgZrRHv9aPVduoPo3VVX8wymWBv",
  "key2": "4JSPkJehU5t6YkzVyxE3hbD5ZS5aHeS77EM5J54ikDebDGBritQPNdVGcv8GSayEwuYHYR5tLBGW3UPcLz7sLzkk",
  "key3": "5ST9ShjrEEasLYGXCf8VH4JoRb9rtHgqFwUN2z7FSodDLnKJJgv9Xz74PUKbe4MoZa2nojFFEybstQ71jqRpaVKk",
  "key4": "4bysHpst1e7meaJyRf794GgjPyBJ3hZsFWJoXXpSpjnRwETkcMoaj2YbuYuVfyYdyVtswoa2fxHZTP4KU3ZC1DtF",
  "key5": "3Yt19kuNM1CnSgEqh9wTCSTEZRt3HvQtriAwgDRdQdgbp5VLzJn5X3cLwoxEX1orJkJyeGLKKr7WVU5zHZ6KGC3E",
  "key6": "3BxpwLHqmTgrmVhyzo53sxkvLovW1WB6V8Hzc7seyfgLvppx98ewheoVoFZ165AboMEmLrErXcYUPLdrrBjuWw2q",
  "key7": "NfC8nex3GMkU65zoBFpE8AF292EbgJaog6VNaEBzUSir78abRCEz6jHruB18BrLrbyNjistHmKkUmxuCfDAQBf5",
  "key8": "2XQb1t8o42zqBoMn5LTRP8GVzbh4A741oSuTJX43rLszKMNMGDZfhnn5Qxh2iCLPmW6aiD7AqSLA9BGm8W3uBsjq",
  "key9": "4b8ZPB3GykwnauXywHGgMfbamkqB6Mp6Muqg7CrtpTj7C6Hb413tBEdMmJSL6qs2GTto9s5qrX8Bs7UvpoP4ddZA",
  "key10": "5yadf7fWbJzrgqXCN29EX1rRfdLU9tdemjpnCQ8VAshupwacaguCLcrNYWiztLPGB78udDVhQmueRLv2wzwmn9cm",
  "key11": "53iiYrmkMU9bexKktBWzbhjek9aBqCHLD392nWJHDY35vkMycFKN5xp49s5bzZAYSxSjXLSHxf6HhkpkmVpE4pYZ",
  "key12": "3kRMFLRJE4EAp9ksBcyURh2MpgP97zJ4Vor6UBTpCT4HE46u5f8tAwgtvo4v9tFb9kvnCqy8Y8eHPtaT8ERJW2cG",
  "key13": "5Y3UDvkbku4qnjiEhmD8WFFDwBqBnvFNwk2w6xXMWMNWoiKPXn3p7Lrpy42JcgnZy94DHUu6c3Ey9NdUjNHEm1Hd",
  "key14": "2shBSrwJSxQU9oGCNZPtkyacyLBg3DuZfgZm3dbvnV1d9CuVj9r75XteDXAjHPjVoQ76rUjcksscGApZ28xKiPem",
  "key15": "17H2UZPJ7Leq15crLHLQru9PKLWKfuR5igCdQy8aqUYGJhSY5jUYUTt75EzCLiw5mUBgSowJnZXFg1NVihjE3wr",
  "key16": "3guqivYCGudjJvJnf1oSWi6e2tUHYmMVmbwqGShFoEQHwea1sFaEPtHhAr8H18oGp3HKW2FSqRctYRrY5SJpDUhT",
  "key17": "3eXF677eJJ2RU2j9R7cKsotmTBngQDLq65VqZnRBFuvJ9zfT7w7cL8e6uxXnPQv8P75UapnF6Jrht5fJzttnPhwB",
  "key18": "5wBhG6aSGxys9V7JkuERt1idViYh9Jaqw9a8L7Eih9QcS14SVFTAmeTKsCu2yZg8TJHVEobLnLXPTcA2s3XgjY5R",
  "key19": "gwzhY3szossrWMsskSWfad3teznkmu3QysjCSebbdBf6S3zaVxJzjPmfx31PUUJfei6vNZ2h4xpLgEtCmFxJGbr",
  "key20": "5wjU1TLRfi3rJFc5VsnHUTTdwXXWFU2SnLweN8qs4k81jTNvgdtXMZFufSvrJcoFyhWA2VFW4adzrvQ3EDcpjbyW",
  "key21": "27dXMyefQkyvuxh9nH8ePDhFAx42PEVP1hjcuS7o9NfqokJw7MpCiVedByaS5WDyCspoD4UmHsYjMD6cbtDqEnBH",
  "key22": "5HuYFfDRf9qeHUswpbR4NyCn16dWgpxhaSdSJA6WnRw2WQP8Mp2DttzfCsAutYsvrfgwGDt61f9iD8rE8FRpUho8",
  "key23": "3Ty4t4acgTcprCBzHZyyQKaAKQXsKeTUiXLuPfxeRv2MKfEJbmTMvQ68KYqf41cha1LgnPnrz8gfGmJpxFn74k3L",
  "key24": "5hmC9KyjcExgtQTfnbJfaK7XToUTM1KvKMNX6BJWsCt89fNWdD9jpZdZASma536ud85qerYvmqtxSjhomztaePfr",
  "key25": "aqhEPT5PzsPXtENUWkDbfrwRKjVXUm4ETdhU5x3AgXY9hbvx3iFriPFA5E69ZnAY6FDnzhT5GrDvfcMhLABfcSa",
  "key26": "3R1PfSCAWk4vrfcCjTYH8YELSDKAq8T5uRHUJimZWhi3ZkygxycHeH626qVwxFTjUtDsdvprUnsXZHnSsiMA8F9R",
  "key27": "43FP8fpnjE3sMmxp8W3YfAVjbwKdCELhn8vScnptToMQpZceFgndxBK963wk9z6XjnfonJqksCXkQXRyUwWRyMFv",
  "key28": "2Tn3gnXuPJYJYUDbzY16YcRMg5KxygGDEjC9znpAocKcbKhE9DpJqbMWtDnSdyPSSRAoUijrBfCPaC2vUNmSmZUa",
  "key29": "LnnkZvNKASZLsdB8D4yWb2JSNxb2AqB7uRGxV2aPrRLoeSJQPHnh1xXDj86hChAj4swrRb9VWgiscd7kNikZYt1",
  "key30": "237wgJA78ynLQR5T15jkEH1KFFBverF12ZgjM8VhRVSWcW6dtA4KND9VrBDPWGEkeM9qVzyR6Jmp5dpUD6yujjnb",
  "key31": "5kkqwvcimPqxx3jzxr7g6GGuV1Q2HMcgvSeEq4LhPypgFf7tuGrGVXh5ezAWTe7JiBaAVrVCv4xirSkuXDPHNSkc",
  "key32": "63CjMXaSt13LiV9YgMrTYErDnGZ71xzww7xXaY69N6D3Z3gq3ANCjbNF3uFKTR81zg7XchqrFeXnuK6gkea5wUGY"
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
