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
    "5qX16RpVzpmgKf3WpgKohGVnUaBCxE9iEvwbwuhvK27ZLJ1mgmSPX6s4EufiDwPZCNLC9VKLSPcbqo2WcoDDth1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcQpTHVn7TT9uFcaXqNFkyxbcM7MAH4fDXyBWPBD3YF3y1tKMUA1Er5XrdcUye1zGzNFrLXDSc12faRDrukqJXR",
  "key1": "2ZwZwLXTyiJEspiv53rD6eEVtRdqGxCNEYLucG7N2DNnx9Q9csymqBE7L9xzrQaeWjHopP5XVwG8qE3hVTEKvcoU",
  "key2": "V2fCcZrgRcEUt2w3PPn8EPLrEZ5WmJnYivZZApKSdQgxMQvycABiVJAtTMCVnL458pBzoAbSbLJe4LEHiY2vpTa",
  "key3": "5jZ3rGJifQry6XGW5u7AQxAseN1SbTqJBazKcPuFeEE1vQHFgQfRnmZ8AdhXAoRgzgTDo9Mj5PABJjbDxjmWfDf3",
  "key4": "5pJVN25ei5YbfzZRy8c7FhsDhZhk2ZPZDFemmzGNAcHZZW5tas8wXoMeprdWtHDokj17bHbvFojbMpoP9vT2sKah",
  "key5": "4kiUG53ZCYPawnKRkDwwER3PihAW9KJBkJXsXyAEBnyi9LNKdnC91Q23G3FWYFsmhQxEG39H5XbFMw3fxgBjWhoT",
  "key6": "56hwFdLDvvMUmik97ijQ2sBJmoMc4S5wHSynkXxFK2N51TJLYMD3vrNAewHnqW9Hy4pAtxkHRFEgpYgB89rRAJa9",
  "key7": "4hEEYH4XM1AsU7srAdLQLEjx2tym9Lgu7xYsK7hm1sCXVGA5Z7SGANAyBidcJthVXiUeZrazYe2U28chbofqCkcY",
  "key8": "5jBDiYwiqCY8bVPN9UJvWCSj5uQytJTbEqR156tHCGccfgMyvJTikJbxJBmmXg3bEQnFBQLcDg2zwNTnQjFY9F6f",
  "key9": "3ad2UZrLBAcMX44QSsGhspVEQx6gq8oGj4vwqDmmTSv7NdXWgqLTxTabnutcZ2mb3q5t6ZpZzV1qgbvey7ZQDUzH",
  "key10": "2EffoRzcdVvrJLwtkZye7uBUrwyShSxfCmDpHvoE8jwYeGv69hD6WYcJ6nKr27suzN7AFdVxFhR1xnzRBSRuroPX",
  "key11": "2vRK9pDvQmqs9Zr7KWwb8trSg4uUM1Ymp51RpvUNwt6g47upzNXaZMajWuPfw98pZESEdBcMHV11ahGzrt32czbJ",
  "key12": "2tUCMyADFQAYF1imHyzUegouQna5CuUvqf7TZgMQ7fepj3bXE6c4GHuRbpswnYhx5kLr5mpuvEXhUPGN3GG9LQ8j",
  "key13": "3cMQjZiL8ovSakM2ULJqvELKwcsL33L7GEGg1nmtGoDuTJAFRYNXPcCg9aXrFgBJpTQMNj1QSY9ehuiGfj4JYoNW",
  "key14": "2PWP5qNLYtafU1w8DupP5MwXEqvhQCmdREKANavERi78Kvvmu9QYorGiZ6mjyb7im65x65gjEfA3RnXn1Pee5e46",
  "key15": "39mS8jB2W3oBnKEfYEDEPFN15c9rmDjXRHYZtYouK2Cbj4T4S13tnFabpmDUqCNea1DAirYUHcEMsjtu85PY67T3",
  "key16": "2GpHAYJAh6Lc3iBsXNA8j7bokmxWPQkuH2zAT3UotX4cden92aZavAQiRB9WKhrv2znRh5AzEFiJwfK5UKNDjyjU",
  "key17": "cD7n1cSAvcsYhTadFazcxrEz8CGHVfRmA9CFYzZ9K3sMgcYmXbiJtyedbdxr2L2o8jYy9NWBpXX1cBThahPZx87",
  "key18": "1pEvpRTVEWtVTs8o88a7b96o5HhCqbSq2Wj79hwsHnqz9kiJY94rgjsTdaWWRZAUjB8UsJmyMfYWVSukWbGTV4B",
  "key19": "RqB47bJe24v8RhKgkS1QM8aLjJfomLAYYZHszmJ9m9XjZZqiejNTP6SZgrTaqSZtPH7tvBQfUaEhdkAtx9Xmqh4",
  "key20": "5g1J8rq4nPDHXJBrbs6wAyqfvsb1VrdAnNTvf6sQAwSfMMVv2YbSHv9YM7XbiwuuFefnS8mNRAYpLazeS1nLqRLs",
  "key21": "5xatWXyQRV5CgMYeSjUgp7eXG6ufRdCqJDSDEk6NiJ94jbCZ9KwHHkm65FPvmL1HodpJwi1G8GD2xyFEWnyMgYuC",
  "key22": "3PNbSmKqfdaoPrdhW5jyiMosgLAYxRUHXWGE3tmKWhG5rCFiV5HHJ2Eh7CnApgFJ6Qvo9rncXm1JzHVqC6rNSKST",
  "key23": "FdR5YdUwxAw5Jvnr3wQ5oRUUBcn8mTdDxmHCh6eGXEnEkPYwy4fLM4eW3wEFv2ULEZDtu6nqgtEL3LQNq1uChLo",
  "key24": "fHWtNLwb3mAWqcqy3YgTWNHiaFQ2Hn5gPmHwcQBZpZnmywDAVKDGZnGWpE7NWByGaZM9zD5J5JT62hbdUcmxZns",
  "key25": "4f64jPSoQKqJd996zeQPPjvDmfijVA6dpdaAi4wVG76QCuJH1WoR699F4g1ZWevwVh5L6516fLCAPUy3gXsCcUM6",
  "key26": "PjDeoW8akZeiiitDsj4TLi6fxeoNb2dzsgaFjBS5wvphQdivJmD8ng4JgGVAjxm45zJKLRr3eXVZoMikggLgKpV",
  "key27": "gDYsvjsDRtyEYS4JCUDGweYNvR5oVMhDVan5RY5UfKaEpkwsKag3SZhMQnYrCWnU6dt6bwybwrzj8dzE5BHi5kK",
  "key28": "3pQnfBkUdgLecpPre2TE9jpTfevPdfrcDRigWR1r9Z1ELPyrKbcWccc32a2KGFQcjTeSK5XBbvTzSuF2rSVFFxpv",
  "key29": "5KCE2gjNnnGDDFB7gukhkbjtyR9zwXu22e2g6KGr8oenqnWbU6tJCF675bNCwbE1aNHekBxuhuy8aNvts3eZde8N",
  "key30": "4D68B4c23Q5ryVRw1qH2SVQPxyUkZoWb5E9QAXTdFymmz3Fq1mtaf7psoah6sEXg5WWoUXUgQUH2ahPyA9uZsBey",
  "key31": "3DdJmbZwpQSj3jwSgEVmwV1JVgevKZThMBBsJotRB3kLYcuFmbdfvBKeSpoDh5BLZRYRptP22HTDSPACSvodmhFp",
  "key32": "2oJ8ZDEkH4WPmaRbmcum2qDwjw9gqcSKMBina7L1Phi7GjMdHVBEDoD98nQ5ZqzBfTWstAP16cR7uH9zUcwizGcF",
  "key33": "5wzoFyW1ZzoqqUUVBRDfNEmyP8ydSo1d1qpFnjnkkB1vJRgMVZR53cW6xAVUTZFCW7AkEvmw7ubpVheGU7gPd4Ct",
  "key34": "23HFV5jvPoHj8737zzB3CELdkpbrfP4aBnuTL198bcKgQXLqRDikbSVSS6wjpjFZZnRwEagE23TWejUg64NNYYZs",
  "key35": "N3r4NeWBohEmZtP4yaS2abzNqwMALCjafgbfroi5qztX7c1A3BUnrf6JSQE6oS8sGGyfAXUbxn8z3jJky54f4h7",
  "key36": "3SM6XM7BvJSVm1qyxVAN8ciBbDMuYi2QRdtNeKdaQSrvg26CFWiL6QNwWBbJwL34G64RCFCXw7g5yMyGPhz56E2z",
  "key37": "4Ehmcx3e4ZSeyyvihfG62qzjszrkmuZepJ5LHdJutXKrhYs9qeUsoD4mG5xLB59DR2e4gbRDQxM4qsTCSxAUxfLc",
  "key38": "37DswNBsiVDXbyMbGmm7XwpmXowt4EMytrLXL2M5pG77BxCUtxVvGPKnfYiEwfoYPNeHUHADn9FSEG1abyN4r4MP",
  "key39": "48xPZKKK5JcXrLff1JQJcWwdNRaJy2J34rE3YrMytyHVCrJzeuMhEL8nked5wuDfa578R123T7DZqMBgMXPfqXoV",
  "key40": "5HVPzACdHpFAsc71R7Us4Y7LPpfwnJH66ixn4oNVdrgKzZR7PaVUHWLK7MGr6HN4HqocyZ8ofJ5S5zdykXLkk8bF",
  "key41": "3pN8WTBBJkNQKrXGyZmWqtYYWG4sAaF7arS1UDRBBizo517xHUKy7txUM81noQzEXbZiUxDcf5WzeKXk5jwKtxwk",
  "key42": "41cJLcZJba5K8XSXbrahqUioYSUQ2sRgUgybMm8KnmdvxF1yuEW6Vho6Z6uZVuQwnPfWHpqRiXZsoVWF55eV9BPX",
  "key43": "5CGi5M82y2Bik2KD9CfdB89XAXnmt5PvrN8dPmgRapKXCLEVpPFbuhyPcB62e7CTYaWGhXgQNbFWtowJnsraFWHe",
  "key44": "4wYkWgWD4Qc6xeMyNC6kFJhGM8yh7CGe3CMwXxZqm5JwvCX6WL9eY2MRuEJzhv9aJQneqhDF4NJJYaXvHRCxZu7V",
  "key45": "jziqzgmeqY1K9EkVx77Yvi8sQZoamXHAPaRXppUjQZ6Me5a1sdcT1sffwgMrjGsd3dHy7aTdETxBdEdTxHHWmoj",
  "key46": "3Lv7osqtP6VkXXGiRaVanW61GRCFkWzVaHYLfyKNivpWDT9PAzmynSZJUpRYkYAKkL4Qmxk7zQNM3ZtxCBKHC9a7",
  "key47": "4Gw2r6wX9AEFTxeiBX4sguTMoArKpccDUBKsh7TrKmPkbA7MwyqJAE8Pemuu793E5CTS1QwR8uNTdMg94BWuqE4h",
  "key48": "4SCp8QM4ZvaHaaA32CN3ChTxGHQCqGTmpV9ctr2JBT14FaSP7UzTbeLMtcegYREwYKbFoBgFCfajbvGjHntQeUxr",
  "key49": "26cf9JNSkdRhzRrzUohBqw9e2XUSgoQLpRUJ4eC1jiYWQWWEf63hXS4TPeNmXJUnpzi3psfj798wnrsWzk9AL6Pk"
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
