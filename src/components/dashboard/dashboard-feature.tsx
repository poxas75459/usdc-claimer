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
    "52ELbbEN76wowEUWkrnoyeusdgQ6EqXRSm7twkQF3Zgz927sRwAiaKyLuRADT85FfV1fbU1BamzgsSMUrYZBxRpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CJEsAskSsdrmCPKbAWqXMN8TbBJViVKCHG9TFz2zTR8NZJthWHzgLdJecCmLPFC8nmnoD784qzfrvWD9D61C2v",
  "key1": "5XEo8sBPFKa3jpSSypdzk37NZRtwPaD5SjFJvjDGxCBeCMPFDfCtTuZ7Mvj8Z5yHF8UAHM5GQh9GYfTAjaSTSsUo",
  "key2": "KSiqiqHyVPqGmSfFHY3EEpoVLWinHvVpjwUvAF7uLFXSSP3yPjVBHddywZSB8Ecae7SpXULcThEKhnGgkXbmv95",
  "key3": "5NJSCmJJfTztLCedUQkYQttvTExhe7DLQ2vYDLepB9buu3HeZpLErMwTZxATV6uYmhaPAGZDJE3hG8Hm7G5CvUd1",
  "key4": "2GRtBzpWuBiVKCTtZsmsvSgie1TdAv9pgC1B3WcFhR2uAcpJr4H1WZd19WzoAasC29o8zitrc54fuiPBQ1mAyrzu",
  "key5": "2raJ84LyHssTh8hDzScjaPxPYmUnF4tTZk5iHAu7QFtV47232bCbYeU5N9Mx32hAcq8EwHNyoavaqKqCyEKfP8b3",
  "key6": "2YmkN3KRw8rdKXHbGjDxJJUuTbLwfRCm6WfL8b4cWgNs8kP7JzEX3R57n3sorw8H3oQBRH1upzWX2fVbnNnfEXd3",
  "key7": "4dieqZZCQLpfTQRVt59jLLRXBri8dbzb63Hkhyt4vnuy87xyjp4JFef5NWVyt8gE1T9e6yhwAeGF3LC3K84hrvuE",
  "key8": "4NDJojgLxVBmPwLpNELdQnGuhsUvFwKdVAiRESZrnLYq2zSPvxWLM8FC3yrQrGBhmQJghThYUid8dtGac6tmrMEY",
  "key9": "3NdgQwqGgVwHg5bcRSefRbMNCJTex1sMEPEEe6r4ViZL9ECt9AhNbETV76K3qmjXfZBhJZ5XGpjjSwTk1boj36HH",
  "key10": "3BiYuxCMQtGi1KHdbsSyz7gSUaKXQAJ24nFhZy96X3ePYiTn9iuii6uM2SCNKwdmPPTTZAwh623f57Me4qBQKQ96",
  "key11": "3eVefQFytYt4LtPRf7B4UxmgfBozbBBC9F7yuDkgdiWeqUdXFCgTkhJmr6tHyfd5b5kCGjoYKqV2Mag126owJBeQ",
  "key12": "YCB2BQNz9pHJ3GktE3iA4B3gjtanuGfmZL9m6zhR8yz6fgGwjvkk4busADa7761AcgKU4QiQix7duWH5UF5sEPT",
  "key13": "2Ryj9JswicezogXuPNq22DiV6vVpiJEu9nYDxRaBoReZGAXX5zm6genqFeNxZmpd9VJ3a1jVNnZ9FpYfz1Mi6gHV",
  "key14": "4QXWEwqpukX7GzvhqEP2zaAmeDmdNejidqGgMbwfdEPGeafk58cZjg3h37A1AE9JLZXm18K2gaUrj5rt5bRD9eHT",
  "key15": "46ZHurHALRv9Rb84rq9Pd1suB8hVHqZP6PnhignZtt5aSTmx5XRAL32ckQp2sEWHh6spwfo4aGccbB8Fkb3xJvmT",
  "key16": "5KRA92fNX4U1k9wk8xim4q8ekySBZDs1s5adHe321sGMCD86XMVPWfjYqTNkWDtnygJ1qvwD7tVVDqAAAKK68ZYp",
  "key17": "mcGtTM5VQJBb8uoNLRcND7TzbcwxNxzshrsjEc9UV4zCbT42Bcd62hUPhsQN9Ui3K17WvPnLdbvSZUWCYzAdn3X",
  "key18": "2rqciCQkAy2QTPU5dWFkV5Q579eYwyTjrF5aYrc9wFc66X5VkvVCY4x8Pxgk5bfXjf7XM75JYjAqsCesoq5zegzD",
  "key19": "33J9c9QqWFaiP8Es2M9A4MGnHPmszMzfF5MusyAcGJizbHw14BeRdFabqWVtyYQFXrPBWBdJ3Kh36mwJNRsySpDo",
  "key20": "2r7srZ9S1VqCm8y8fHKZeJxESBirRnhLGUrDwnG7E4CRQxmWTktBdzQYaMqNdQnVmUkyGyVc7Jq3yQ8CmBo6N1aV",
  "key21": "614i58MPZH5dhvtFZHZJizfWnLbW59DMpTtyGcTYNxs9zwU1FD9fXMhffjJ5LeQkymqGMApKdyRvCSyiECVMBzpW",
  "key22": "Q9V18yJSpJ7AQ8J6iRMJtF9gLhZHgKTVK6vY7QJZH7WXyYVZbPXyKSZ9R3b1aTGmNmSV6hSmvmuNiASWyog69J7",
  "key23": "7mDhUpv3Vpo23oBv785B4ZtzwcSFANXjGXvtXzrSfXk8JZgyHMWWinGrXgNtgc6LNmCe8Hf6qgmbE9MjEBuyxRb",
  "key24": "28Xp45qwDs1VLd26RsuBHVZ9zQ9ehEYGAd65V1mWN89FgY1te2K3wDLUc5vdjCymKenydxxJGMcN2CwLpgHjEi4n",
  "key25": "5ofFDR1d1DECgPrcQ1G5NRJxXvwYddfGiR3ytiUCesVs2rRWWbm7dcLksHHyyTcmdjJ2Gu24d96L4K72KRVkMYss",
  "key26": "3cPBRWLgrkaBALzxt3jxPuTsGbQ8zatQDJxkMHmL8RSoPapdxNZrzdSwU7oD9SBBEaAgVauPCoLnNdXzFm9jhB3a",
  "key27": "fo9MyLnYNymyi3QecchodBVc1C8pdA8xLbfWA6awmSetDQg3MNTW6cnxPwy7mtcH3fEx2zTzsSKQU6rhPAeBRWZ",
  "key28": "3NoEkcMFMoWhEFoPBYBxSVAkG7qHRpBrHWkTbCbLPyMUGnJdX3yKQw8AWsXkh8iNwZ1atPJSLWajc7ZTXLj3byxj",
  "key29": "TSjTkdM7cdtgz9x9uvnJUggQfFWQRsWL4x3UVhoDGXEHaTZtqKxGk3B48XfzycreFxWVV3LUqSNttTPgxGwkEXn",
  "key30": "zfmRBy4PBoSFU52aLLPjegrAVKtUsBUNxoWQ7npfZqaHapGLtgjMj6F6rp7y3Y6EfMAGtxTcfJsaP7KAnr6fsc9",
  "key31": "4cAhu5F4Q14bVSYcQVa7tJgYCeLJrxBKdedjuM5yk82EU6wXcnyBmaEaBwo8uhW5QQ1Csaseqo2sBLh3kZSHXprE",
  "key32": "32t8xjrVs8PGjbC7BAbqmvEhYGPoZ8HezSQXohscyHreRnqFeY2JoaCyBR6hKAKjP25mpEYVVT9LtPCAGy7wiCy8",
  "key33": "anT5Jz2cuPKwHwKyYnGrE5D14jCQYqnsU9Q9ExYDaCqRQcMveMunm4Z3oXWFBRPyCSkoTwL1B6UjPwWouFmGnAo",
  "key34": "4gEvX8YEK3hTCCsi59YEhSein7tj1tkNwZapssfSB5Yp1eSVagR47QkKsM2bwbnzjbGjMqTwzsmz7J7vuaQChrNg",
  "key35": "5Yfz3WpUJ7rEiywzqDrgANVMjeKJwPvkdgkRGZrdohsPr3VWzz7rVnWtSPmm1dKy685uNtbXdoHxF57Mq49TDbHX",
  "key36": "51sfRj3V3UjEcExKiQNbCF1fisFNo88W4qTF7fvCzzvUKuimdmVeVRH1A1vVDUXhBUxpWKYnAqzAThHupoKAu6hC",
  "key37": "FNw4DFKaz8JQYuWyunYmGof6RjChh6WNLQWE7EDkiMhuV8TtBvTc9MfXho6B75Jbwi98JEmU5JMaXup32Lad9RB",
  "key38": "39KiWECJQzXk2vMSunrPWbVgLqHAPJsBVEKQe5RGJhCw5JQ5WKCEvwnaPxKicMA4ci8KjmLeCTfDZbRWv9Wxg1i4",
  "key39": "127cbQ4BoehPbqda2P5dpHKxCa7UT3X1mJiLYoZTkFR9kZi4BH7CQjbfm2x2hmdi4z5nKiLgVqqfyDZKqq95C399",
  "key40": "5iaEFDmBmiwoUiJhqXjJLUBtg8kYmsxsTKqnFPHPuTEmP6RHYiWJ4bPcA6TgrYk33d7NZRjmuaXDgvgcPebN9K8A",
  "key41": "5QAVks2adKk9mCeJePkpXSDTKKxZWbXh1TfaMb3GBNB3nn2UuJkxGskYyr4MpcyQZwDmPstzS5vqGjrZEBnvfgWw"
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
