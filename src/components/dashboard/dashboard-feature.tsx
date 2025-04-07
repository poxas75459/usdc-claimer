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
    "3YY3zk1pbaArzEKsRs1n2o7smUhhvJrEUfuHNmLYhT4V69sPnWeYSGf2g8uFp13cNM4dsPk1PmvwuGqEPFKrxyt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4na55o8rj49fH9BjsEJaEmJ7QmofLuxVgCbN1EgTd91NpRoXVLF9UjE21qVWWFrdJAQb8asNv1uTCMb3Hrp2V33p",
  "key1": "24ZrDZJt5ufMfk9T5MzvQCDCiBcyH5BGsikC4a7dsjho7mtmNyAQPdNQpYcz13Ffn1zQzxNUJ9AFMFMicptNSNwz",
  "key2": "QLfzG4wDpEmoD8m49xvhnUTgbn2aQqBCUEt9dPjg26FUsmqUzQTBM77UQtx54E3cdbQXC3abycoB2U6tC7wswrt",
  "key3": "4MgcVM4QS71CnJ24diZmxhqd8QZxA9m73K8QP2YZ7zfCLLc7fCuikykmbXBLbrKFC9aARdH6pdVoai1woa773E45",
  "key4": "2UxKSbgdAuq8oRPPdTjeuRZgAqj69G57KPrBdGc1M5hwETLbmasPxNMZWWktGmA6sfJc1cKi38ZFgLqjMHSf48vm",
  "key5": "4iqYLxzQjLUi3iRaxMRAXL8rGiVYMrw4JHGKyGUPoY8xCW4k9C7QGD84eqYRFoUb4Ci2bQGrvDessRKUpr3M8gRD",
  "key6": "34t1Lt1x754MLptwSVfkEcn2FBDzh7uHnWcD3iXmaukW8xPijfzZLDnxWpFA9BBVbWkwv2wwkAN8YdN3MtgwDoPW",
  "key7": "5mF7b33jVVyw4bhZFFjDGqLe1ZzFsXX3xtPr8WnnULpL3DQb6eJGPgQsf98srU7n3hY6oJfCM5hyFrnRPdsCPRT6",
  "key8": "2GEkjkYSxrwHhFGnFGjvxCi9TEJt4FrMM1u3TwMgLz6Sfi8iX7xcZDeXoaHkh7ZiWqpVPbvfLwaM6c99hucd1PS1",
  "key9": "58wHTgpTXhjVbK9Qo13ULjMwVYRX1D4Ww26wCoBTh9B2uh2UHhGcBvJahj2BBhFZ6ubRE5YncGSt3uWgYTQwSXXq",
  "key10": "2Kv1hEuP3JKWhkh5gFuT6zvGwyqZb7KzFLuHa3xexEJfxfwPEFPcTNne1fHVU8XvSkpvZqorWVWkTuJMBZu9HQcy",
  "key11": "wuPkb7wnDN9mZs985iKYpaK3DFFER12TQT6Vm7EnHFzrjTGj6h4HpQCebQwp617znbmXbFpE5d14wG6Xzgntzhc",
  "key12": "eZF5GHcgvBjaCyKck1SRnE76snJ9hvXev4dyi8pfhewCK6Xm1hfZJkUdJzqmf2N1LMLgLoLp5gnnxnue7VM5Yui",
  "key13": "5uYfjxyRXEMsnCEMPZEu76WgG99dP1cEBsVTdYGcAeNqqzZ7VvCfe7LBFzFchbhwpXupiPJzoLu3wEtzeb6ZvCeU",
  "key14": "5q8TH9zMuSPFcCZZPN6obgQKyYGN7ZaMHgLoqcqYpRMEazvpo9maDuHKRtP6ijUZKxWbq1vk6HRPmyYvK6ogV4tA",
  "key15": "2aTv8wU3x6FyWPvdJDUhpNmGKnT4mnn2GJwCEsYw91NKJevmfcBYJi5cEgFXvRoTdkd6JVUKhMyvGcra22UDPCBi",
  "key16": "r9oFXdVRKUMPxN4zcsbd8VQYLuixyRxnRLjUUUS8uEKhvtU61qahsEutTePtsXnF2XBaaFiYN8vNzVMyBkHBWgr",
  "key17": "5ChcbTdrZxhmBkhjS4bHpQaU8A3oRX3ef7mECrRoDLcw1EVvEUXVXiZZCgL6PeJMhAQUnHhfaLXDjxNDWdhVsU3r",
  "key18": "xt8DU4EriHfENrfvYRd8dM4sqnNGEXtHg45f13NWCsRCAe5wcVquSJLmgtq3jbX9yWjV5zjG9QfYrm8GHbTsKQA",
  "key19": "3MpVjpw3DACb7fzN7v5pKAa3wQWS9Wmz4rnJ5A5uKXAyhb2JiaPaGkH44hWUekhhNsgBNfNj965tXLyho2rtpmU4",
  "key20": "4WwTXTVFcNg5e45w9uwZ4YqEBnnuqLQmu9KY4gX92AKwpNwxCbM9ghJMfqAofcAjy6jaJzJ5LLH1kBVdg1Eikuux",
  "key21": "4gCBWcz1HLMEtpzqofXsTnnDxn94dBnaCB6Yms6eHZjmnJvGpvsDAgnnR5vEqhXuGVsRKpMLayM98hzT6TAJ7cFD",
  "key22": "3K4tJ7wJeKqSz6Wtp1oymVeATGdBsoXDh5neTumNJqY5m6kah29WKTFx6fYYN2vPBJN3uuQG8YWgTCCyKsaxkddc",
  "key23": "233hCjwUFreF4u96YPz8JzRMijKnQVN41tfjAJLMkznEEzet1hbkhRD37kJacqEcKvY8b2HqoYfCh4oq4psZtoCn",
  "key24": "56Ky5YWw22MYwrmU24vgwLxRA6H7KfXrGXnKoAKogk4x9LAvb4pyPm8Af771EPSHWbkXFos3DwbX732c5niJC75z",
  "key25": "5aWez3qsztc6UDrcAY5kYCJHo8UJJuE6WKFiatzVuiYKioxNhyZcdgXNFP6AJzQ5WwDG1mHsDtzM9LoqFYfLMBC",
  "key26": "5Fm69ooxGzVJbBYVAtsQr4sa2ZTmJbAfieU17bcPCeULdXSaeXLHcnArsWpVXDEU12irUrrkvtML4L6eQR8oV6Ra",
  "key27": "3KNX3XNRkiCZ2RJSYmNoHP5KmJ2muXuRDBpHGRxNMnswTNM6SZyueqD5dMZHDi4L3yCgpwCsQvbYdKUsfyv7AcCe",
  "key28": "Rc427JffLZgmAjiYB7Aeh1yWeT7U5KAeZZxoZDPiao4e6H4qWwMexj5b6Qavadnu2E5jo83W1GjZNpt9joyWUbH",
  "key29": "XVRPo5W8eCTwWpYhLm9zGVmS2EoNM1YRyCiAZDUTPaxFo6CBywCzfCQEy4GEtNk1V9C4yKFkBPYszUod554Lzxx",
  "key30": "NCDTFEGa7DFuQVbz6HHyxL5eEBaypdrExddawJ1wpQ9jz3m5zpvCyVCNo9EJ8BeWVB8CH6rEGm11fQNU3YbmEoZ",
  "key31": "7McdmF92MpbvRwgrpYYoH7WVTKtyVva4fxqHFymtHtqmmhSYmy7kzftSwfuxnu6LzU78H35FJhjVuteyJGHQLdk",
  "key32": "29UVVmWZyLyGkftWMHRo8mmzWL1AeAKG1kqFHZokaY1E6NWVDWcLgsWF3F6CYBvayseyxAKPcAhyX6Tkyf7mxBg5",
  "key33": "52NdzT5AHi4ZQWjzVUKpiYqnk2gCznnqsHiAcBTHbmnjemT6rBkFxip56BiuDZb8dTXvKLaKDMfg9PuMXuFrpo6P",
  "key34": "4D5WQS8ekEnVUCdiw9EgMuVdktFJBMoJpyQrfknEk2hXkYD5v3KejGG2GYAxDfbWhUTFnbHXWdHKv7S1FYHWMdRR",
  "key35": "2XtT7tzjvN66ht5H2LBFACaBcMbwickd2CEYxBNLosGLFrsh8ex2JxXEc1rHFEQ1nhMK2fQgRVeJuw9fbo3LyyNG",
  "key36": "2vxj4Bj8YmxwwJedn6gigvXHrg8FbcZPPsa5gzoUuvwJD3UDmUiwRpVXiUp1k8dSjvLpQcPvRgKhP9XvgFAMbohf",
  "key37": "5wikj5msxoC35RMVPa7sFroaKsK5wUPWb1tWQDoxJiHqUPkMr7miLtWj37oV661fPhpKxDTAc4m7G8r4V7AjgN2i",
  "key38": "cA2MJji84qaXmAYLHhgR7PdFddZTY5JY9KSxRgE46GJWYTAS6YCR8oZqvMij1BX4LmHoWmdAQtAGJEFCMwcH2dw",
  "key39": "2mAET9ajZNmk44yPTV1c3ZaAPxcdiMjjG6dsmt9MJfBSBwBGFyi5RELrWeoxRsTBrzGcnutkN5ke8W6SXek9EVHi",
  "key40": "2XnK4qaFxFvHbXyjRPQ198L43GSHFk3bVRkrZNFc7AsGN6iCataQipS5o4KRkBj41ofYkWPyWS7QzkDhCSzYNTxx",
  "key41": "4CS89gtYEKREf46mPPMQpDjgWE4Sd431dKxXPpqfvGLvjbDvBzx72bgepJ4Wkd7owC4gMo8w1MHH27HcUxpj1VoL",
  "key42": "5wkGUfxGExDFRCXQzoTm27LzBTKezcvCSbwnmSnrkhhryvUZewEoDFwb3c2CGo4BZhteysEQx5wZopuNpgsoeTmR",
  "key43": "2tpfDTyyy4N1oKP2UKWDFPtTNj1itvLHbaiX9Dw7BbxNsbyRw1k4eycZyAzgDZUAD2PqNuiNPZy2We2y213HudRJ",
  "key44": "5wDNMHsUPBNcZXo8WvnihcLJ2HgwsKQGhmsS3ecU4erxnbxgxSTVRXhNzaDVue9w9FNzsbXEzoNiej8HXP6nKpzc",
  "key45": "2MPntAm8ELZ2NYFMe2ekFTzysfn5QxL5zyTSpQvWe7RdRA6s4TuvnZZMsR57w7RWBEfegbX2qwC6QThS2dgu5AB1",
  "key46": "2swrXStNWNEywu3s1QnxPMa2EbsGQuewzQtj7Ftr7xScn9Bfm9x1nojQQvZsfcg99DghMPwprd9gKbMEnPwVPfMF",
  "key47": "4ZNKLXYUzfndhi9swWUjNcaB8bHxCnVUoeW7UWiH22LVAyPxWpgkve1MkD7HBUZZkN4wbXnREuKZ5uc7CHEaR7T1"
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
