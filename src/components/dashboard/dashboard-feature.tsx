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
    "3PeSdnpkFgv7tQYJSupRNh7TkytdFoyq81Gb95fugCbcJyceFWwwsmnwbR7erRrcsMumrCvTx77k5pdJj7Azr7vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmvE6o3sVJKry37HUGveVUfdwyLFg1v4At9T4dULL6oLCZpaqMfQUhvBuGRSv3HJbw1LsHRufxXGtYaYGh5bByL",
  "key1": "3WvTLuoSS8ajACuaFEiQd7FKnZKkgCxjT44G3NVHEUqJLg4oyVX99g3VcoHkb2DY7nscYfospo5hDShsE6RLGfqe",
  "key2": "4idcn3X2JjPWfGXh9MVNePrbi3tAhZ17NMr9EZukHw47w2YkxMGCn8ZrLZw3hVmqwTV6VwpCo2VjBBL8n7ZWLwdX",
  "key3": "5A3Ab8ZA35tycG3cdgZU2uoKk3J8QjCsasMKgGorWCbpF4pb7bFnrKhBikiUWtPVE1Aj7mgwEJf7kBj3JULD8YmH",
  "key4": "22poc2G8FDqkPEpMmzLi1AzWh3kgyHgiu3cFfaF6mPASf2Lr7ipk5noh1y7PrVEpfXcR1pWZt7vp1VgZf8zLg5Ty",
  "key5": "4foxtSybA2Gye6S45sQBuhxpUJxAgxqzrbYEeioeHqjVUfLtwki2qMe8U4C679Ag6bjJzxKzyx2f1qSU2Ba3oZhR",
  "key6": "WECTGB5KKGBqHZGhZ7ReF2XxMsniaxEf9eX7jsgpZMyAbzHwWJW91oacWn47zYgzS9zWd9c45EF7ppnSfGu7wGR",
  "key7": "3EBdTHK5aGShSs96caZNN6SnFaJZLHUyMd6Rh2MUZz25v1UFKQsGWVPoUvGUmh2tiRiffUwrNK31Rkm5LLKsqx8J",
  "key8": "4tM7AD6v7nFPZ8FthYoqzSP4YeJjqeJNcGrqdjSZSmpvSueRsDcj4bpptQATFVyyxaMFtgEDJzrK52GCGTbTFnTb",
  "key9": "55tqpZJDTiwRceXDJHewRmPfpFDreDUM2F98hKcCxiLSywb5zpYi13xMU46XgcuSka5hDFJD5o55iDDqYArgBhdP",
  "key10": "3eknNrTSRwyBffrhvBb9y72h2ae8wqCiNAxxVpxVgudzren667bSzdETgaDqDz138jZVQh1ceVs9ysXJuzsmxFyx",
  "key11": "4MrwSD3VWPQ7DZGgE6aNe3kWoWMe6fTmaypbytHQPyomqTLJboKa2dMtu72mpg2FMzchjzDeJxZRNewewJ3x61YQ",
  "key12": "4YDtdwpwYUSXtKVa5cuwEZqQEMsJwdbhMRBLtqdkt2tWehrntRBEUcdaoioLdsGnts9NnNF4gAZB6CuBs4XBZy3n",
  "key13": "4bSBLWuTf47enuFs3q4DXWZzoAKmKTRkC3NLRhNwJJ4x7CquZNF7YxBTAvhsfS7mGixFubDh1WNMbKerRq7vgwUd",
  "key14": "4rnGzZ8tpM6LpgBsr1knSJCPKZKKHDNXnybDuzLtpvmuJRcmmTMgfxTiP6HEmiDr32RHjBwd1o82c6Nhgh9vucEs",
  "key15": "a16gSRCDzuYQcrg6sNAx2vCsLiJTchdRmWiVBxxYsMtb9YAeHSgGxsQpxh2BDn5ZyE65euJdZkus5wDNpwZN5Pa",
  "key16": "2zdjHbwewGZp54GjbVLmCKPJf7TfxgsGGvEtDEh3nZ7FftqtRDhpqo93UyaSnpmQjwhBijxAyqXMYorcP8b6nCCP",
  "key17": "4jo55kJ7E7NWopFavM8wiA12m27CwmijPwsCvuVow4AaXbZsxCwXwaBVUBvnGXsvGTTA2ib8nraW7mwgRb9XdHgL",
  "key18": "4MZZxmGEjHYK8sHV8Aqih3LBHDUPmr8s5cKVAmUuCFDzMNiGzcst6HsJzK7dZLgKXWUqtJeGpD5bCUj1EK5LFmnD",
  "key19": "r4C7rFwnMZH93qKiueaVAEBgyoymYfUexnUxiyFGwB8nmW5kBA6nXESNmBntGEahV8YVrWg5bew3BHLNwucJHkQ",
  "key20": "45ejnvRnLVepVZWCFwzscfKQLxtxvb12Z5SK66a7mzFBijUWrP8ZS9Vd7NGKAdPwR644Vzqd17ZcAxyM1zME9eXK",
  "key21": "2BVedfwMtEzSEpwYFVFt3AghdAKW1JCRLTCsZ8G2j9B4AhKEPpb9KyjwoaPcyDya8FTWJZ459tDsaJdNCmkmKWCE",
  "key22": "22SYieFr4rHyyw54GwhtxbP2eWKM1LrFhpH1y4nsYf5DGpReLewoU5gcEKnYx6xVmoTEAeKihQML8MeipWWewDAz",
  "key23": "3h4SP4H7L6u3CDhhMchQbJwZLrhyY3nr4ck8wPBa8yC6CKVKFzzNUJV23FDDinQarXWYrRFLeg7aGR2uKsUBAEsr",
  "key24": "378j1EnKEcUdreRN7PaiC4mLVfrkb1aSLUv5un9GuLw3WxpAhgkHy8TJeW97KcL5yrz9TxAjHa6qVXYDm2C4zP86",
  "key25": "5MBKgpjSzzyXZBrgp5rgRAz9XtAwn7EVECHZAsGxei1qeqwMqtfLq6rj9naYASaunsDUAFzomZwAuydj6caUunet",
  "key26": "355u12mMyjNXQRUjHt7F7as8RwJ9KMnokvJx9TdgHFApNjDyCpYxGoZY5HDXsu3Vk5NQbhFCBy6HMngxvcbUvyDz",
  "key27": "4h1ym6tJkK6ZvRWwUn5JDXN3z4Xv3omacfvuUAQ2hqe41Aa5gh5a1RDKG3E5ErZZ6wJF2BtLf7v7brYytJGFxNKn",
  "key28": "2keCZTqNfr5jMC2hyVJuFqouKzSZ4GBupE7UpKWkCiegMQ4Uty38oJAX593LSkhgpnWZiByZuihKDpu1T5VJdWBb",
  "key29": "2Fze9YdEQkgkkC4iKfVxnxmVfSNgSWWesrFeGi1FL26eHPzkmTtoM85VZd5GVDygUkGrYGVfhQoKfiusK79WFggg",
  "key30": "2hqqXRoSQn1xRaTrNDbM7FnzJh5d6s5v11HqdBtmwhQmgt4ceaz7EXQKe91h8jELBiRiYhMpQ7MdopUZxZ62271g",
  "key31": "oWyozCs3J3AmFVJxPCkzjrczDJCSv9JoxkkVfQ1kKipQ9M8XrZ4dmhDkCTKKy2GWZS6GgnPqLUE6fZzXxMk5rmd",
  "key32": "2GWVCjJ49woZkGBDgbjtqY2s7WVMTD3FwZCUPx5dRJiV5XNuqSmZizvPRmtMQMoaWwJQacHGNJo4n1zZ3Mk3LM4Q",
  "key33": "4tWJozb4VE5TtsVsADrLsyAraXqTs9JZgHSCtoB2gRayknwn8BS2r1ZZbk7zCC6KPmwKhChzxXVpbc3hTopNk1Kr",
  "key34": "3tXgZuiuCEGXZS1dvy5eeP4h3sx3djTUh9JLpneVZVfUYNzHfmh7tQfR8Rt3ytUFyZ9H9wpbfL8xdcpgVSQG5nrm",
  "key35": "5z5dzHxdbuZMDoaDVH49Hy946j3R5Voj1tx9imWWBwHLKtafpQ4gBKtEi4ryqvcERMB3DCERRjs79cc5HNvVn97T",
  "key36": "3LuBSLWEiboGSvVCE2UN9geGkkG3ddU93hGshaiCdB1ekvNqrX1Dczvxkpfu2PsKYfbqTzrV6n6fDEuMeb4eaxc8",
  "key37": "4ytASgJJYoWeYNp7hxegJQiWMq2X9PxREApnqDNXApXzXUmHQauUMZtC8o179ccEoLUKZQyvGcs1bGWoRTGtsEzo",
  "key38": "3f1KLiuco5afTCk4YNjJiNCzo3ChyYnSiWfcNeSbtnA72MuvWkVDX8inibY22DVm6kyhurXEQQgNpR9M3dmH3NCD",
  "key39": "5BHqEfYYfctuUvAaAnQKpPRamLZimq4iuFW2MG1t5UNCY73sqYUYtPyJVCKPX1UZzifwW6GitxDVHGzJbhaAaDt4",
  "key40": "58ie93schNXv6mJcrv4RAoxEEeobkaUFYmd4EmwMWrCwoG8mAvcNE1jNWJdxJ1csYsw3EpyCWLLtMycFYefskeLJ",
  "key41": "4srKiAMBB9Mdm4TjoP5xAypaX9uWwABnzRp1sJUMth6Gtb4tbtQU2c7ZHEXuBSq8TbPBgeg4km3o8Bb35rZ1DjgQ",
  "key42": "CdftCSCkmY3yWjA4bTUSKvU1krGTzzfe1CWhwyyFhoNKFEUhjgUdvVrkUVmRteCh72VYcdUBQjCL2YFpxZ2c16E",
  "key43": "3zrWEvxozZvBafiJoMscpXxDXj2u6oDsfMZgxi1U6VEqivuJKEJoEEZHAnyFREzc5xv68fZdLGQTdZ2UgAXovLAh",
  "key44": "5UfkZ8WZNLPfbbPG1sSsjjNY7pCFNJFbZeWoUN7LoRioQBudRdKogDdasy6CK8zHiNAAn8UeYs144dDFDXF1b6GZ",
  "key45": "5BA5b1EKvpe3rSfrKJJfFs8z8MXQcQnGzXBdDHdqvwQGesoStiyaQQ2hA4rzSq2k9sgXX36VZ4o7ChQKzarBCSiE",
  "key46": "3EGavvP9iUkmb9X2hgTd6RvSWJBTiNrPBAo5xgZ9Lq7tJiGrgW5XiCZNcpQDJdXnYb9YVAAzBEP33VyuXcPtYoPt",
  "key47": "1W4K36diPSvUCbkzw9yK4utDvDfoZncYKEnrjieQT9T4AChunVaKVBonUUE92QS8uP43CykZKButV4BD7Z191Tj",
  "key48": "He9v8XMe4FjaVEVtSnuMmLzz1TGtFcCQYqGk5wv8m8VEjZXUv4Fn7Tz9tQwf8hpo1mqqviEwYQ5XcWCL3aGPerT",
  "key49": "5SQCQcgpTvXDR9CMfXHr5EimBcguQ2TsXQjbNoWpbJA5L3cm8RaCabDmWBZmjpS7sGdKxj8DHqJWSdZxrmdT9wLR"
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
