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
    "4uSyiLRHakyNfpmjSmDi5ykq96XFjAQCKDV5ujB2SB22wsuTBv4ayZLt9dUDqccUmNJGW4aAMEekjB2bi8Hbyb9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpnCcRMtLoCmKHh1BytMKwq1yHuLbjwYxC6WK59E7bwH7Aab8myMSKByERCmMZYk1vPh6cFNrx3ikrZjT72uyG8",
  "key1": "35VQbdLgN7oUMTjkTYyGZif7sYheyHzN8jdPZdSNZX59kpaEpEyE4SmgxptAidG22qkaXrukm3Lt3a3zFRSJttSB",
  "key2": "5MeCDviFuafXv19aaWLiFja6sjgpCfbnMcHbGQKmmAFrx984y5LT3bUoHVKE8ohcmsx59mk2RKTwWKC668mwsRFD",
  "key3": "2reReFy3HktQGN3urjhfxM6dug27hmpeBT4nckAioyfcfMEjF1f1xCqCHKL5jfAcBTUjq5mZCA4ue119PvS1n5bU",
  "key4": "6Csat4en9B1ATxYtPCZuJJr5bKFMHLAc6rSdqNfUbyu7tngzVk4NmBRkJpJ6Td8jHTpeEEL7fR4gcpwVSf1ChjW",
  "key5": "2d2qinZouYZbtheKv9BJCXddvQRdEex6Xga2QcaPhCTHsms9ZBon7qummJnTD6GiELVGtmRMMxMhpVC2ibjzGXiD",
  "key6": "DRA6KcrwrTbcDSY1jGyUq2Lay74VzVPQtjKGo1EEFak1hJXDu1pcP4dSddtBQqamuP1f1VxiPK9P5mBCMvYeUPM",
  "key7": "2fhPc1oqX7tBB9JpCsJP6bkn2fd3NffBHuqBiVxz84d9b3jqAmXKJuqpzFeoDAEYYfguRfQfidmwZHvgHMAihN2b",
  "key8": "3SsVN5SMDJDG1uVDehczqkTgMPJ2FXf8sPGA7TpsPtQMM2CZ6uSfLTUA4rDgT7PqcoSwUTsEx1rz5c33eNvdX3Hq",
  "key9": "2TqAqwGqEMZbrBnHMexXsd8c3xjGGrmC588YfLa92vzdyn55tcZNjK2gvjbQwSAfUSVKcm7woWeBKhuN4HDJaTb",
  "key10": "5ZMjRH4Ff6PYQKBnK1uJhnHVNf8rKX3vk5YsRYtR7DYmyhSHdJ7WCRJS8y7f6hxHesKA8vGLPf74uqp6yhw8vKiv",
  "key11": "JJ9Uj7AddwWGX8KZBqPPdk9KGkcNA61eaccXkJebFthrdyPKKECEkCvmM8CrvM2T7Be2qHWjgqcUP6uaH1Muq3L",
  "key12": "2e5EUcM37Tr9EoiRKgcyLxtSVyygRBJEdfGbXtJApt18N8c41o4HwwHBbDRmbJdBdB84tBpjb7EACaLQggU4So6U",
  "key13": "4MCLmchtxbqpkwrAF91eK1ZNfrweNTUeCUefyjdB3sxL3qMiWkA3aZbvd85pQeq5uqK7u4Nf5MpRdMHvnAsbWa9V",
  "key14": "2USrfjzthupeuhrmLDRtUDSCTWzuJzvP8kBCQaVGZBQGr88WMgfuWVj9RKmbqZZWgSJ2WVU9WdtPFTpEF2tGgKuu",
  "key15": "2WdDasq9hWC8ZdWaSQM9KheVBKcpbgSCdhJTmjCAC6TmczFSkdyx11zugvegmAa2DZGEjWuSCUTkcBZsPGvyD3rA",
  "key16": "5BhGgYcJi5oiDX5CZePoYGiDbex3bg3TFT4BBXxUESWhSwwadMQap2M3cWNz32pfkgn5WHWaLs6hMWCD3Xz1XNpp",
  "key17": "2tsEJSVo5jVaKjCfkqWbzZjaYxpWmK6n6v8SSA5F65JqydU2apfpCrh8DkGzEG5KHLHkaBUSeeqaemfHhBPENbiy",
  "key18": "tTBcntrXcHXixzeGZaS6DYRBNtKsuRheLcnKFCHyj6EuEhuvMRj8xuHsTAZW8xx8ZANCdbpFq4cco6fk1vX7nvB",
  "key19": "5NDrQ92rL8pn1Cy4YvhrFoHTupuYaiyGQrpe6Ri9nCH48YEwN8jmLMHNhpJo85TioMJcbSpkkfzN2MsGRv7cREsq",
  "key20": "6CxNkoWYNnNNgJiKQ9Pdm2Rk7QkjAEJ4Dik7PdHvPAyQ6JXuXGSJGori4tvxAKXJ83pbnZG2EpU9D9FN38YqDVQ",
  "key21": "3Qsh4of4hnWUYBNTAViruHCD28XTkXBV3pZpgyDQrif3hxhUsnUnt1hiQowo4yBBW6Vuax8ePUmr8W3TmyUUZBYd",
  "key22": "4VkiZotUzjxyTR45N8Yph9qwGX1DGXvn4HdD3qgkwcLuTCVTnKTcZLuwjMpKoQifN6XWmPJfFxg4EjCAPq98VYcz",
  "key23": "2JQrNqAZ9bfqwcg3ByksykosX3GRzaNUFaQo4SzMWTuLvaFwjDN3uZXTbWcHfX1JfgeQPcWVo6BvVd2JLrey5was",
  "key24": "LP654aNCHm7w5FE5D9C4i7k5dK8gr8EKbb9WioAqkPWhruxggi1gWfejz6tGxb6FNJLbvG5YSGfVW24QPJBe6SR",
  "key25": "4HReD36t5EdkxQMEnUANLDwUGQYjgdHGpBKCArWDsH6gyfFc2jcr8qa3UFwQJUfjjmg1Dkrr2BduqG56YRHrYtsG",
  "key26": "2W7MVLdm57EB4tgsABji5sRoUndbiD3PcbTR8wdbg9zHpWB4Ze3TktGK6CBVoXoXizgwCypNSNxoJPhFywCJZJqx",
  "key27": "2n8Bq3oLTbD6tAiHs2LqKMZC5KkXCwRcUDwi8YLiqFNteXxHXYouoCebcpWeVTSWuXMXGkQAmAPs3qSQv25hR3Mr",
  "key28": "2KQgS43JWDqmTgUvFQ5punGD6iMkifVauPzGxzGYtJBnEdnakRn8wEeegSQ8127R3pLTyygji4z22iTEURAaJ3EF",
  "key29": "5gPSUHwFRhHuPEGNpFdVMBCxp1wWzC1M4qRGU6s4VLZQiN8tLWX15RcRJVjZzRBCCEdDdYXzZkjJs8Y5jemeysHk",
  "key30": "3wwSavbkhuJV7woUWUoVkiRPKLQHs5tMooRP1gKVk4ZfmN4HvVRU3tsfx7sL8uZDoTfRBx7F6W8pWeR8Dq1SceqB",
  "key31": "2SRzat36wSEncWeWkh4EuLMxizG74qHL1fFg7rKG1HsuHp6V4mo2RzmysBANzkhSzj5FFSHzrk2jsFoTYgJBJ8xX",
  "key32": "2zhBe9823HSfe1hxSGSAW8uJCrsbrbt4Tw9DZbzbP6i786ZMbJvtcjoMdsbcfCE4qXMMHsk4BR2jv7axcttt4cbo",
  "key33": "5ufUBSXkxayfUmh3GxmuVEXjCyAtgEWoHsbfnAEt7rfsmmVLT3v2oTMVhFRJTpw14oAbpFK6WasCDiHPD2KWF7Tj",
  "key34": "4f14Yx51WPp8KucxYamMwQNsfXGSzYrCvGJaZ7R6UUzQEZvmWoYWiBD8fwr2qGV9qezYdC6g6Cp6y4U2nV2bkAjY",
  "key35": "JypH353K6Kww1nWumhhqF7Kd9m1ivk2SWQnUgneDMGMaMmpRrZuRWpeu2xvu98YcQz5juA4uEHuYdGjYTc5ykPJ",
  "key36": "4pjCQpYiwsRYRXi6nrrPt9WPz1W2rafKKavxFLvAHuTcr4kqHktz9savtvpQDJ92xxXP9FRuCs91sbzsFSCjXowt",
  "key37": "5EUfMeV93J38CaEJoH7ZwTTzz5NTQ7uGKzc5QBPiSNXqL8Vfbotsqn6k8uptdxk57uHeSW4wT5V3CKmG9WZ8MLD4",
  "key38": "4JBnwNt9hQxPWdq67dk61XhRsf6i8J5z4uuh5Y37KXCg12Q8cuNt59Vq4vTEz596RxX25SoceSKz7eSR5gdzB7b5",
  "key39": "5iZin7Lh5wzwKdMWDmSjVZKaciAcbHfpTKSBJ6wQyn92nk7wKQaHXe1bkGykk8rC4bCD7pHVF3fCDCdWm2ueoZ3A",
  "key40": "3xqrsAofP9jzZKCxGjuMjHDHfk24EBFQ6c1e7SH2wBVZM471Mitpd4M8j3EuufzTQdc8imj1buAmwrkcSckzLMsF",
  "key41": "4AiQ3Rq6UYL1LMYf9M2fWgzGtpKUtHWd6grmMdbB5LKoQJKWW663GnhDtSGjBtxg4JZvwuktC9UZPdt3vrdCBBQg"
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
