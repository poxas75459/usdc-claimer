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
    "5Bs2ewNbJ6DDfVHdjbVrvM1FRR5HjUsDCV59zcHzNUdpFr3sj9BUgZduDs3QjZAwSk8R8faL5SaKxuHAZ9YRxJPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTz7fFxHsosgPyC9bNz1GR5hE7tmF8gFGwKEGtVWSHENiN15uANsFZitDJvxMuNNSt6CXnFHe77ga2AnDiwBUXG",
  "key1": "Ms2pxgjfgRk7Kmt1sPFkbSnFWDod5rVooS5vkeDDCU4jU2XboYMaHEYnH3YMKmxu87rgh53nBUN7dLAvi3gfgbF",
  "key2": "eR2Hyinzxh1haEbrgceX6DWhLzkwgSzmz1L1PEwVk6oj6znzW46QgQH8fgCZqLYYYnZu3Utk5vRZm8HdxZwYD1m",
  "key3": "4mrQFWjBJoB19fxFj82JY6z7q67geZvrVUPzswHFu1sNzSitXNZX5tuFHezaAKQAS3axzKEyDK4h9S4QDSdxMWuS",
  "key4": "3qiSthU7aLCWZHxn6v3D9HW4vvXta1gk7ZfpStEcxFZbu4yJAiM3i9bJs4FMDSgyge2nNosBkoihfwvju2z7VbHG",
  "key5": "4AjPtFhB87ZiLJrWuxS9zbBZGUWtJaU5j6wtu32aqEWiVzPPunV4bHeHVDE3W3qvtw1vh2rgKPNb5MTo792jqbJm",
  "key6": "2NoGyVsLAuFapZMrjWe8nTw6vLzrLP9YquQNMCJHqMYUhgRb5LkCri1cNrQsLtH93XsJs9n6HwmWhJJygNv1uCsy",
  "key7": "2qQWgv3Ba7rnKWrkQ14QNcRCDqtHLZtrjjFo2d8WBoT9fD6nDiF5iZbA3q3PHB8fg8orLAZJ6iUVwZxyJtFyNyiE",
  "key8": "3v8ggahWAQgWjTgQv3gnCfdVpRXwj4JV4kHgEgmQJczFpHxYVx15ZLz4m1AaCMeAHgdnY8fbZrJnNerumvQPR9rP",
  "key9": "r2frBewCZ1AgbaMfvV6Bn6s93Tg7cCBS7EQiZhHet8qCvHRbhedTEZXUviUhL5VkAN1RV9UcN65KnZenbhgi1J8",
  "key10": "2dV4QmEwJ5mwTdaQeRLWYaxYNDr9J6YFi2LY8TWgDxMx12R8JguNF6NSTgNS9Gp1oVFJEarHcWERFJ13neHuQ4zn",
  "key11": "2Jq6jdyTLCxDYvC2kJyoPza6HPko3h383jts8WK9TmBAzoXRWTMfQmTXPwoLBJuLar1qnwehP3RsrF1orhtZzeVt",
  "key12": "4ZweFRXih3mTqi2nZQwXbHFEcSmaLySF28n1YB6a8cEYMWf2VQm7N4jrHo6Xj9svkE4Bdj3aREgW2BYELi7NBS7R",
  "key13": "45sKC6YN3eJvi9DupQjmFYn8JzPc4ErapDG5VwfabaHP6yfd9Np6VuFczLh66Q7vqK5yvT2wgi6eVuq5Erz3rUnR",
  "key14": "5jgHYrjhsUEgvb4XU9WCbKzX7bJyXJ642RS1EBhs68XjTWXhZoa99nnuC9cBoKGQaUEagCuAwjUdZ9Cmb5pTs6Cp",
  "key15": "5cxYjSJ3obpRfiK9QDYVFn6ozHmLurWn3h4rgYSbyDZVgGZmBixEEQqPLRSAxAmRMmRrPJ8ZzJh1hx8RqFoTNVM8",
  "key16": "3WA1BjC14zj7ue6um91ncagqA2cpDnJbbCwFfTLfEbYZJnHANVcXgdMLGMEFanTy93F45DR1WthugxKFGYjYcQiH",
  "key17": "3Mmv5iXsid6twr5pjo99ttd4wwNkCSUmJ6qS3LCbjXv9PF8MiwDMCqi3To81ZPLSKxRk1tPCFKkS8x7fYutaxGPB",
  "key18": "4Z928Z7izzipEXuDesUnR56GmSX3oqATGiUR2Pw3mw1DXCH6WY8xso3na6WnQ2bLLoJUFaoPKKGGTK8KtRpH3cn2",
  "key19": "4fb6qhhCymBY6soFAUoaxHhFFLTM84sa79Q6WLXBLwsZrKzUGBB3e7UbNnamDESJaZmeiBkcqmBaDFMsVa2TPDNC",
  "key20": "Eh1ourmuoS3UXvA7FMyuBKn1FFLx9TNryDy3NaqUwcqYPSmC7YwsTs5TvKBHYo4Gkf8mdRibxhftpC8amGtwt3m",
  "key21": "2S799pbCFotnn2fRtHr9PsGSMuoptTZm4NjjYhdorqiyQe14eD8QbpZSNndmbLi7yAvrBzYdzd8nnRBmhfRU7G4w",
  "key22": "293tPY3DRdEMBDr7io9n2u4u2MF28C8dTvSgB8ZQYzTySPYj2BAbzdvKsfq9LR5rd4p3KrBeacbmxZ4twhpNMKK2",
  "key23": "G7KFdMM44MUf6SeXSXFyau1CVPcwPEcZwhFrQS2zWPXGa5j7mXEwt5Umc6dKBMuxoKmgDaxEnyzRiN8PdciBAgm",
  "key24": "5ZyXMePs6BrqTY88bcCPY2xSkQitUp4Wk9Z5qJcKApZ2m5NMJWi6XSvsJpm4mGSW7GECfsvShUmKiA5Y3q5YDcw3",
  "key25": "5TExE8RR9JNUnjeXXD67vFrHiR5dMR8ECHxDU1y1DCzNguMxaSddHTgwjQp5W4qwML2a79ASvowrvJV8eCb33J3e",
  "key26": "4yhjf7PjemjW4j5WYJKsMJk8owJ9firJigijyFBoqDhKRVSLmWbQf5gMbo3kVLozcZFPWtrcnwfZcbNcdyC6j4BG",
  "key27": "FVVsLgjFQwfyUWs1bRDZ8jcVZC9MPVxBdAKTNKZS2byx9oiV8GboPGce2paCCjUUpiTfsSdhdc1GK2vRCHYt5Ms",
  "key28": "52SGgeYWrNwcZ8wDtaycpSEwCf5u2J3EH5Niof16NiYaoPLQCFjHgbLnf5dtJY8biXMbKpziEwnz9KxgJhnmwd74",
  "key29": "4dKx9rZu3c9WTuVAzuDRVGMw1C2ZJH479N9XZP5HFJfjrReSGJPztPFS6SsAvCCM5m2YBCRnAyEXbv6KyswQLEjY",
  "key30": "qNF6AoireE88i6zVULtkD9gZagxXbecEZBDZBNKwbMPfUUt48zfp3qyFTgrp4sVjQEqMNopzoCsdoFEPqcRip4z",
  "key31": "2B3KbXAnZWsEF6XCubG5VteH2XFsY5cRqvhnWmSXem6aywLyzKJv3Xh2XjB47zxdobYZ7cFAdR3X2VqfKokL3hHe",
  "key32": "5W5NSKXg6mUDkhqsKqaesKREUzeQahwm8WWR2sBVZFghgeFiY6yqLtZrzdamkwsdKZf5fA1HFC1XcqiM4naLmAvt",
  "key33": "29s2SN76sQjb6rizJvmgNGkZtggQxLHLJWiZehEYP6eiMyEfbNESLuCVPsP4HU68Xky75Vr45gdjbjoNBWajXGfJ",
  "key34": "5pu1R3EDXy69w3sA4KVSTa6npzjmzrLNPx1kW4wPXsnc6JeUZi44ooVc49HvT1cCd3PVdttTCNwppWuWAwiaYURc",
  "key35": "4tJYsDFebKxGPb7qqEJHvp5eoy36simNHEPPmPT3Aska1tV3Xr1Vh5XNvct8Sn4wCC3hM8j9UE9rqrNUvFE67uCh",
  "key36": "2MthpyskaDgT8bZ2i2MLr9NaTMKsHYdzzToz8QYz5ABEDsU3nQ9CYkTrDw7Qjwq5HT3FQaWZwTx1Hc9zCEzyEcXu",
  "key37": "3cnGWiGT6SXBybxSRfRdfNCwt4uK2aWWLKskCBix1T5sCwbcnuAS7GfTxnn9fc8d9RVmipMotRUhsT56iRLKyxip",
  "key38": "hwsXn1VjC5zNGV7EYUnWezwds9F9uy4ZAYSgr4SYk83vxLJLNXvrjf5suijhPLBWbsQos2vBsRHs3pqT6q54bHX",
  "key39": "Y19xNX41JXyFDEyf3nppLAkSHdXWqvGC7X4pyvT35Euag6X1j4qCB6THLCCsYCccKbYrHSY91r9FuycvCPEiWwi",
  "key40": "EyohYHnsLM2pfxcFfR7FsujKXHoZXpRCAEKSzkguhP1xMhu8m7r1heTk7wvWo2KQWBrEvqBZNBk96ckS4KuRSwD",
  "key41": "58YqACheUT921heAagoKUgCWJ7Uo6ANAR4wG82uosxWwFonV9vsVnu3Xuj4ehP7RiewBAqCexYu1Gaidru4MsRUH",
  "key42": "4opMPWSbB4WKUzvj2TRY5ejqCVhxWpNHsZAdV4a7jQXb69emaNc16ZVjefeVoWMJKJaiABPwAPtLVTkyd5zn5XvC",
  "key43": "4HGb3VmSx98mGCGHCMrSu8zzyssa9V713gnKcnMZB5gV3PNE6S46qerqDcZhXgyLuBHdmdmZWrNB9ivMittd9V5A",
  "key44": "2j5vSEdWpFavzGueufZumAosL7dtc824HupzhGPwKNPz61AM8WNaFwCt2umDySM4HBF9fW1WRAPdSkbKFts59AAc",
  "key45": "5XogVJzcE4THXsGuPYU9wCaXbpJd3and6zAcY8q1teQU9oDL3czkXqAKFuBbjdZ1eVKLyUfBVHERfUxPuok83TmG",
  "key46": "5qpfD5rQx4At39ebxHpR7QPfdtiUD1XkBeC8YhadNvvupNzc1wnQidSB8kjPnhYFHJ9nsRAEQPNH1zBCD4excmXR",
  "key47": "3KxmsAZKe7gJB3mv7AsnHtxagRG4qe6iZ6yNQksVqisQDQvif1C7SwjbBo8bjvddhMkWBZjywQpBHvmJ7EMKtCsk"
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
