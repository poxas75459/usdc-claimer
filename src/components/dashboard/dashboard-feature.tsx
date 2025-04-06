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
    "3TR2yPmjg3vUpxagax81zwesvpsR4vWtpJ2PxfizNTv1YSMD9iLRRZM62Lmi6bQ5YZPkC6UG1d2yyxFSXtYKg1WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBsqPmHKocrJrGASJvQc9a8RDVYyLGpFdW1ixgn5f8dgPwJK92NqwYy9aD7fgr78gemhpABJenE4g646R3jQkd8",
  "key1": "2FzFvTfRvvcTN1g4Kaurvovr38WsvMGapznMfR23psDrixMCcVoCvZDfQjCEfqx2tiPSSgXcWGpatudP8VVWTFqv",
  "key2": "2khWcbUXs2C5ZJdF2sDsxbt8hyjEkX8GExDi2dPZZcLMwwWUyNbuNGDUzd9AVWXqEwF9Y6CBbEEnCdsAwxyriCAw",
  "key3": "LqYdGWF4ysqrvkiUeRQDhcvq8gaf47pSHj4CGCyPgjeTssRYSHTDYCurXea7ay2HiK7XfHiooexq7wskX3NvxYv",
  "key4": "4zsyWs6kagw7eQAajch9cBHG61UGnJHRxME73SL9bYPdGHu6qEYx9WXKA3FVHWH39BxfjBok4PfNXGW7jRWDRMQC",
  "key5": "2d4FzdM9K5jDx3Q6SoELoVnqmvZJqajpikduj7JTzsdPAmE2YzujRnrbfL9LmwrKctgokLBVWq7dqcgNj2wJr2rD",
  "key6": "4muGUkhAXzwvaPC8753xhCix3t4i8nQKt9RFP35qUcJ5z9vZCiLmaKTBAjGBMXaiok8GuLerfUY77BJ6wHLhXseV",
  "key7": "67kPyqqV9JMLAAboeGGZgQTFP4fAYFbAPzxkd7y3hWw6RP2AecdwQqwhADVhYzgdEPfrj2Kb4dsND3xUKJ9p8jig",
  "key8": "4zZT3nJF4yTgeGggeoGwXbLoGepUf7yZQ4f7bL2TynT68QiCiLQyuKVMuneTdjsbY26Ww4mKC1NaSoRdPdwFXydF",
  "key9": "4f6i9VELuYQ7CLTiUvhCoXznhNXL3tQoaYzYiQBxvqNrSswZ4MieycDRCzeRs11NEAuhoH5mtZ3uC86M8r2ZUdjQ",
  "key10": "mc9WxKJAFi9ftUREmLg9MiqoNzHsboNzdhze1LVASGwkgvXS22ZMtQhQb2tyUrS1eyitBvri7KK8nhs2vKzYdHR",
  "key11": "2Pb2B47rVMAPsaXZ413CPmzU1DpbuP44u1CEPdwuHaMTdKGDJiHao7ji8V5QZWXaMExzrKuKdjASXFMHjiitZ2G3",
  "key12": "2Yeb6M63Ng5ZfcaHVvHXKhtAMh55PSd7MV6BtJkzYPAanjyKw5vNPp5AGhTSmMsGPUJ1NtR2toGLjKuRxETgavfm",
  "key13": "5JMf7w4BCpDVpr1UgAcWwdozm38hep7e3S3k2R4qnjvygahRRrbDtY1JGogW3xsKnmdStg6WwGVRgmMvARb7m3z9",
  "key14": "4kPeid1XZLxA2iupJFRpRqeQXykkrxDbe3jXVe4TcWtLPhJCVisgejwe8W2mq7L1vreMCeamcfn4PoQZWao9DyFY",
  "key15": "2ERPZRzxhNwpKGhLGxZrYRjce3byC8ntxsRJhMdkB61CERhoyt3PYf1hmcMQrJazeshifKZzTpxxxZHVkAS2K7w5",
  "key16": "dxxYA6xbsMkjpuB7D2fvHXpZf72HzZhHoSrYLNKft4GWeBh1gLJoEhDySdXVWWv5csXHwScNuyDjBRfLrQWAcGs",
  "key17": "4qhmz1y83rxhTBGxt4hjkfEbsbH4HD6YtKw4EmkP9xqXt1iyjUmiMC9hRh5pYLykNcSmpW4teFUHeEP5bDGQo7ue",
  "key18": "5dW4zTikFeu9sqyrtVkya87nCeYWAu5sjkxrpvjTF1ap1hULYtKETsEiRZ7FouKRUiHYSgjHhTkwovFQxRFsd4Uy",
  "key19": "2gxCtUAsw1HWNm578Duao7yY669WuyDTQWy9KXEZk2wpNWT6emu4U679cyVwVnfe2aWpVPUpF4cqNnNKfCYLaFnR",
  "key20": "3CaC1CHwcoeQXqUyFAzUZuPdK5A9AQjSCvrMX5WUaitQcaB2gMJqCs13NyyC8MppQfxAgBbY9od8zjaj9c7EbcNc",
  "key21": "51iTJMEcMjKKgckBy5ymzTSLZKBVTxUGxNgMiJMmEYMwVt4HixHdcHMq5fw1W1LTh4fhKRPMFpDtmNBqxU2ttTLQ",
  "key22": "iC5dvb2vpDgZ7NdQcFyFF99YWS6GfynmqSQNEE7dDoWqA2A5ohoYv2ifT4YtHD8RYtAVSo8b83PfiCyDB3eB2ta",
  "key23": "3T9YaqqaDU43wuTE1eteMqPcvqycY4FkpwuugqbPBZDxXyYaXwhN4PsBKrk6tiwtkoLiojURvDuoysQaC2SZD1Kq",
  "key24": "EVsbXHq4FxCmBAhrjBhwxPU8ea6n8dykzz3zR3YR6zYyMSNy9RipuUSpNFMRexeoFu3Uuq4N1cx3y3vwUo17LMv",
  "key25": "31TFMLuow7gfo4nWMfu4AMS5M94VziT2t5U2QijNPjk57satTUo58w8R89aKwaK2dyCYGX92pBACzZUeidqfxerx",
  "key26": "2Fevzq75F16UgRzk6gBK8SzWmzYfhFbXG3WjEqMbJzoLrUeqghEpHeKhjp5QpHdkGY4PzKwxhhc5cmV3hjnvdSEF",
  "key27": "5zvA4bj2BJZPT8mw9pJWSFdoW74AhDNmrtq6hinWKfHDt9TnmU55DmqoGFGaCWSRyVQMY19Gy7LXzCWpJQTPLvgX",
  "key28": "4AwzuqpH2LoFGQVKMoFMaGbxpDJVGiB7utjty1puahYotbGsgrTFeCFEHNfRUxN22xa2Pdfzg4QH3UptT2JJk15r",
  "key29": "2xTsXrYTT69q9VrqwTLkAr26ERPKgqq3nM9x3k56HEMkru1BBDjxKEkAHNqJ5rkEWo7Tvvt7T9V9Efi8ydYoXXSY",
  "key30": "33fPErXyZjQweLyyAVGjAkmzoXAx9GUt8Sf75GS84e8ScG7HnzPZ2AxBRSe7YMAMELR5LNzo5AE7awCbreAN8tBQ",
  "key31": "3TYiKTg1VxkowSexoNmcDtcSknL847AwpNQVPjhgbTx5mJhDLPCKCdHL2uSx5G6qMvxMSso9kYkKpnYLKFaY5S9q",
  "key32": "5gY9c2tpXwJykGhfiFjkUD8sv2Uqo8jj1L1ZE8bNWsHxgvDbtiRuiAMwphq1pgt3jWLNhKDdsiVVukhmeWtJ2reG",
  "key33": "3SD94TC1UmPgDGZcevgxjdZWpyrC1nsMcTjDrmcZa85DkvGLuxXGZ4cW422p2Qv5SoqWTCJ7ptoKMYotirRBmhgw",
  "key34": "4EaDzq5YXArSLcVQqpZrzbGqXh4oXnFP886N4i6QGGoughyeUje62JfbRwUy86ML6NVf4tAGd9WTNtMKvXcoEgPg",
  "key35": "4vygjojpiyrjWUmY37VGceaVifHJ1dCvMFevY5bopFFAFcG3Cv1VXVCFcTLPh3t37r8VUboeafnTNaR3ZZZXkJ2v",
  "key36": "3NHiruKKatJGgmQMX9MA34E4C7RR1RL1trmDX2YHrYv64pUgU6ep9gG8iLWC6rZYShRvRqNnqF35g81wBLT2jB1T",
  "key37": "5Y1QmNtnM82kCrzkV8TefWKBsJpFAwKdVcuBtLN2Bp2wf4mpGXTqXaMLiCUt66D2EMysCNoTUAkk6n2HToZFh1UE",
  "key38": "3coMHFXAnXxCgniqHKFwt9yYw1xRYZoYKmJzMZNLfja3JEmgeSfJDhJFmSYq24SSD2D6qS8AoTrVviRySXCQ3pYC",
  "key39": "5mB6kBJqPSAytsQU91GLGETGoGjC4BGsbWJJyjahbe1Wtjr1xp7P5uBMKP82rPkPwkKGmWLK36f6zFuSY2HF7Fb5",
  "key40": "4uhrfjKw8CTkRF8NYEoRzujyfAjGptYhS7YYFsjTx8uzFdzEPGsdrtpgahkRMH2hia2QjKQKkqpbLd2Ryb9JzXv7",
  "key41": "4LWTmJyna5UPmjF9oFnrY8bDD7K46NnTeV1vHT3qezY9y7L3AGhKdiJfpE5WmMWqFkC7PLnK8QL6JbyHiu6yJnmw",
  "key42": "3wNYFsTtCfkUhqpS5WDPvT8Nub2bS5ndoXRUJ1GtgLcMGYvKAtzEAV8FwV9aRDToGdPCDGfWL1mpMHsGAPwXV3cg",
  "key43": "3y4rwVzAuSA97RKcUM1qDwrtYQFiddnED5uVsXHVkf5cuQyAmMbzSxNJPWRXff3gAQj8gn8KpQWLzupmNgvNXnpW",
  "key44": "2FCEbtWnr7BiLpkRnCj7sBdxDg1KfL7vypVXger3XTADAF1mvTyg5282kypyBMUSZLgFWxidmibimEPSFgTe2zfc",
  "key45": "3JgY7FgWsFj9fSAK8UL6snTKzqyYDkUS3buLG5VWwm9fn7imbFRwcUkitAqZx9XFg9HYPhLn2srSBbFUvLmeJbL1"
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
