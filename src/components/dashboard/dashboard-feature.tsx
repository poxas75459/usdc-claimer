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
    "33wF8bkyyu2cBnsXGyxW7QmvaYG4MK8Y6XHbS9Qe3irFi4fpvMcU1rPEQnfKMbrC5Q5dMCaMotdthkxs4BV2tGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhFwRyUuUa6C143a5YmMbx1XrYntDhb97VuqypTFqArCNUQJXzVXF1PsoZQ8Z3xAb5jsqq8Nr42QQRq5pjKXCeT",
  "key1": "5notpWgTkScGdWDAn3pkS96BBxT4An6h1DAkDV6D7Uj244rs9uyhkmk8atx4pXZNqzrJhLyGbYyKUXtfhNDRwcVS",
  "key2": "5pkTxS2oj26kwgvJBvViLsDa2wh9MPDCTrMRbW7GBF9HSN3oTNeVAf9CJqGcyedjopLn1z4Nuao5MbiBRVjbSTXe",
  "key3": "38Frqt6uDhCkFnTJTkfikV23gEjcSgWU5SY6JaDPYDsaPiJSPHSYX5R6Hu6PSCALUB8cLY1C7uHXLcPuoseD6rdt",
  "key4": "ohwwVSdmHt88jbt7R5uBdnQ3RJohWtXrAvZn4pens2jGjTDwunrnomBcZTEKBEncjxM8uXvXhVh2QKKnWUeHbNo",
  "key5": "RnCYWjgpqoz8psYXjcx7NcBPVb2hPEqeQsCHGVds4s6zYGSvNPVEvbudknLq1Jxc8awrvRgDJgSGjLTdLKrHnfj",
  "key6": "3yofe7AdXSmxQH6SH8sNnnma7sgpbgEJV97jhsAfCAkHo9cRGQx3FCFiDFGnvsL5jpCyPQfA2VXfYUN7AwLkTsBF",
  "key7": "35B66oNAjukcH85D863hrEiKxpEkZUPRRjpcAYtKcc9HcvVo7ATFQTTYA6HjLLTCnoCzjqhfVNeqYSisvgV8rx2k",
  "key8": "3hk2UxWj5tpUnjG8XiZAkRHRynaQveDHKDCUkdXGr9vWLLKHNW4J2WRE4WYgZJCT6GxALS5k5zYF3WCEgdFTUSXV",
  "key9": "2s9mqbf9dZN8Mo9ENyMof8JTiLjkmUXCU4JG6MTAq5Vwzh3Td7D5AGoXeHnDUYkBRMFj6w41RkjKKzTmhXMQRzwi",
  "key10": "2b25irr6UoKt9m97i5Tpm8dswkUz3WapjgYi7dWbWKQ95RiaLHLWEchqWmTDthR6kvKpsr8m7GxyFuvdsBAU6b6z",
  "key11": "4ooYFAFQcev7aMxDBLUD5mBduGMSRAAd6icCweHSum3YyafMx4kQ2Z32Sj4XrU3j4DRQzSMCPSKdFDZ9JkQUjiAv",
  "key12": "3oytnmbHMwFvTZEM2yFnkSBtRF1sLZz4DeybnRytNJRdAtHssVdYMgVz9U7G2hfHJtW2oFcxKMuu1RiaUEEL6BY6",
  "key13": "2u8gJBGfnz42C8GWqGpjv2vGb7aM3vQhkhD3FVfHQDk46oFdrDgJxTnF7uc1zpi6zz11zq3twkwoyXMCELk7uMeb",
  "key14": "46thfHYdhMdKim8Axqcwwh7tbGtW6feWJrc69fUti8sNqCaUGRaQddrxN9e52kDGAbHeRFc7nQJ3wP8Jr9jUHr62",
  "key15": "2Rry4mJ22iumNykutF7YdKTYoEi6ZAuBQiaMSoxHf9u292UpEzr9W48fDa8SVfjceDNHDx9DpjWxuFQyHaHgEkiv",
  "key16": "2ey8BbS4F12QAjFBQS7AJa5D2LP3Sy34T8nABDffLvyY5fX8PmTFzbMkxrrQMm7a51SUpxZwh5nFdHPh5k8Tf224",
  "key17": "eLfoFC46ht8V1RPnuFScXEhH3BQZsEwKc1SpuGHx1vFPf3Swsv9tJnFtsuDUghAGbFeY3x2ibJd7qwqG5v1gAtR",
  "key18": "DSVoCEEkwan6LDxLpYSd6BXmr3Y9ELv5RCbPnZUfBUSCsf3pdCBGnNERHwGoivZstvRXkuvy7u64hsWWBc5aTxn",
  "key19": "AW5Bc2cusGVH13iLLqw5wBHvzNodEcAX5xKDJ98cJuSnyaB1PYEUo7AgS2vah8JDRjhXw832x6Uuozv3Y98serT",
  "key20": "3hbMxYfWQBViNebsGaLCNu6aZVaDiT3toGrKRevsBtCTaqs6gJEzXfBgybXTaisccHNWeS2ktc5V7jiQEjmyUipK",
  "key21": "81uGNaAeUQyunAYJ7LU9gPJXTBGbidpmoaSPTD4hsWdNfgY9Ma9AnCrEWyYdAcYsD9axnEZymou4wwqSs2qvo3T",
  "key22": "2yXnaRcu1TgUWuGruxo1BuuXXXhZC7x3xGhgB8LNHpLSi1wg8LnSGvmks1B7dipvnzUdcHqjaJTD6bV2UWUv7rja",
  "key23": "wV3VD6teJzrcprtZah8XeeeN1BCkvhgQCVEBsx4ZrXNfcJaAcKwnGg5mLwnZUzUJ3zoE5Z9syihUgSWEqAWKPnN",
  "key24": "3EmqKt7rYP6Swb37ACs4Q1KXuwz5JF42BvHi6NGNQ6f8kHo94aGssdGa9vFwmaNfU17Y3M3MyRScPNG5GSdzJRcd",
  "key25": "48faeN62KW9nSe3DrfMJzpTwSEh4MDLm2UpmiEaMhdDVAVfa5MHc8D54JQneb3eVSHK3bKmBuESa4doi37QbMskJ",
  "key26": "5f6pC38xLzfaD9KLhuhUGfz7oAGpSHbKPTqMB4RpeqT8AEwSn2FDkfu9RPdekkw2S5GHwpfiJmFjjUbEHXwt3E3L",
  "key27": "3hHC4nXAMfFypVnVwjL1fezRaX5Ux5DJpKKDd4bUZAMayUzWm57Nhfzw1MCP7EoTtuyXuUMTz5FfyYfvVARXh86L",
  "key28": "3PRh8NweYqbFFRUKgbwioEG5EAb2fohp77Ppyxm8893yHLhbvbVCud36jXGp77bwNrM8FyGXAADQKb3t8Nx7ddg1",
  "key29": "42g7421SSbErqUB6Tg5mPP8CUkidbkzRGDspzr45p8m4Pf2RNbueEF8mLTmBXS9bdLMv9N5LPzAdCAEv3TMAQNih",
  "key30": "58uvbU4cJbriuwmeBRKc2qAg8LxWitzyCMXsVga9jJUfzmcWybN3g4sGr9pndztb21sB6xdmsDWp4r6pBoebR86E",
  "key31": "acXH1AZbznMciNdFgyBDPP1qWn25Rp1AdNSB8Sfdxkc3qtRsgjsJRvEeKzu6R3fxk1pbH4eJA7ykPVPJ9Lvtm7J",
  "key32": "MZPsqKcoEjZExaD5GdXFja2ipcdE7Sw55u37ZgWMQuAtg2a8fBvSdDdvEkdjpeYSqTkKaQaq5Sc2vYkwY3iVERJ",
  "key33": "2aiEBXP4yTXaF6CTVMh2KU72yXRRpqgpfScseU2FJE4mVEEtLNAmU72KpySd6pmauY5fgy7qDewNbPFPvTFWNU2v",
  "key34": "4WHsWRPpPzLcgTYxLPFCFZPqX2dY3RPKxT4thKV7UB7eQhReZ3e3zNLdmCZbf4faS7kR9ZvDSsXv3syobMfs63r7",
  "key35": "DCcNxEG4CptTmAww9QLL2MVBGnakaUREWDEmNWg7d8Cwfx7vqGE1J3c9Je8vykuXUJZVCgFm13FHGyskBEbkavV",
  "key36": "56VDThKWQ4uTU9Pn4i6ow7oiTFajKxDHGGXjfh2pruiu2eDsJvJiPGSM9qiquFPL41feMXuK6fxbk3McQFVVNgJ5",
  "key37": "k5JR4Nao11ZiR36jdouvzdsVzxeZnubNfvwM2SzkA7SFRRsHLiSpvjXE7DR1GDDjAHuXfz9AkVEgnTQRh9JsBtP",
  "key38": "4pshqvxm98iyXWS7qP36fYhY5i73onvZWppm66ZTuvspyY19xs12ydJ5Gn1Zma5F3cji3NbsZk1VXMMQEv7q7dZA",
  "key39": "22EivWLxfdiHxrumNKUE7qvYcmctgzph2vutUyEsyhMLnipcwBtt9tao9qDMwvbAe9toRYhm5CrfCGVz6psdA1nL",
  "key40": "2GWdfh3CABWLwS2hLj2TrqYYFky6NPybcC9WLgfNQZk9ABNcMFtk4P9F1r8NhD4fmaMWdYpiS4MJeyiGf297x4Kk",
  "key41": "yBtBkMAMoX1oZ4xnAMGRw8CemnMBas6SRK8QSLhu1MpseBvJAc3nXyGPm7ehW3AfvEwYRxabnp2dSVxVzq3qGFQ",
  "key42": "4ttJFHwSgM12P4Dtng3vobxAznJc12BE2wSEYwFTBHGUMdoqN6wS7MABXa2S268QLyebNo2V5VZ3ntFoAR6B5zjr",
  "key43": "JwvLCh55PWVK3mcpT7ppUHjRLix9gSX48bNGwNeULf4DheAFx1eUPTLhGzrwe3vNPhQ8PThNDAu7o2QaTk6nvyh",
  "key44": "Bi9wP4PQfTTZvW2kc7oAhpFnydzd4fHXDxBdLZ3pHLwATFAJ9GLJ6KcJ7VUetieXiExf2we8hH3WBMXnarVZon8"
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
