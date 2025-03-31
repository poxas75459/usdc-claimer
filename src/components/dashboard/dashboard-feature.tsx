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
    "3pqjtHDeRJyg99WMv1qPy3Ubd4sp5gPioeY2C9zhxVwjNiReAWvkjn4RoNiD4dYKr7AAWyTTTetY5nUrQPjy2g3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nk6E4CYgAqwUoPrupgHXW4zBbbkSjctnX5AsbfGgvSHdKdjatHky9np6sF2aLt5Mz95x4yyMWSjWyh4fHa9hrBY",
  "key1": "2eq2dnrmx6BmMRw4T9PCXnk1KrCP9yhDqEP4eEthXvERezX7X7PnAbM7dzGaADwC2pMWEAga5VGDuTcrXuWTsp2n",
  "key2": "5vUnd2Kn95Du2TeA2v12Zg67xeKZ4FM1yZBdHZFzzLQboQSWGvyF2mg6pYEHDNUjN8YF6gdcQsTGK6HExVKH8KNs",
  "key3": "53Gp5DC8WdmPiid3cGwdbxbE5JyBFWPEAQf82NLJVV7JQMagaf2TuKPCEMdH25hi9mithAoh6ZDhKo6ScoAtd9Go",
  "key4": "25rCUnEXwx3EJXmLQ8dJ4Hw2EuwJbtt3ygK5q32Lhoioi3mSZHXLQwaMbZBx6iwbZeNJ8jDMtmD7EoMZdqigDFxx",
  "key5": "4obx1SD1hjyutP1xnmmtR2J4SbG5BCiwLKgpEfuuifHGeyrm8nGUR6mYQ1spa7j1349JSUDNdgM9VqAbxkZpWys2",
  "key6": "5CojBqHrVKxeWbE9neLDP2De6q2nSTLPhYq9fLyC5W7MZxvJHknE8aQgoANbRS3X8TXsxccNbdqmJ1ZEkwKq93uL",
  "key7": "4SHZcSXQvtM7m94K2PdXjjTseAACuxgSSEmtaMAJ5nPS8MUkkmQGvUeSiMmz51C4XDVUeS4AiqEFaLiR8CuTnzEg",
  "key8": "5xHGHMB1KSDscTNnAFgBmfSCVLX1xRNxcWvoBVSmt2JxwrsgTobAA2edouHdiZcbWm4AmXUwDHPk2hgbpfDVx1HD",
  "key9": "hWoM464jSB83i8LUvE2mm3ywAj2f55nuuaeHhqwAJSAXe7ocWigGGpRnkaE6i6Fh1PpfxnUT7o192212CS7D1gp",
  "key10": "23VRFYJmBBr2D8dNJy2rJdgiHa3pmodqjYB1DF73zvjz1HCGU86j3DkymC8j8p2q7txkSiAU3uC32qmvd8PfjAgz",
  "key11": "FdEV3fKozdvwhPQFvGWGg2db8zp1yg1vWj1hsS3XqSvgGV7h6J3UYW8dVJ6W9pNcUnwm9JrYNtffhdssFixG3A8",
  "key12": "5E5Xq1KU9yQqPbnZ6NkYMHPwkiTeTENgo7pebTAXCuMoUs7hZ4sc4v1dGsHAjmy829jULexwx7C5n6dganF73fiu",
  "key13": "2YUwFSM8zrmCEpetPZ5cnawmgToYDFsXCxcfAc3fQWLr169XkFmNLHiZGvKBKiowksnGZNns9go8D4GthQcKZUG9",
  "key14": "P79UQ6D5ZpNrPTQaafkgMDBYQavEiNfQsxHcNwZHp8YCEtweDSKa4bfSvNESs8zHxD4whyzomtLJbpXDSPJsnFm",
  "key15": "4Unu6NoJ5xHtV59S9YMDytouieXJ7xHn5KwQh2DwnDaNnFfxQPCvdKpVu88aDb3ec73UEkYtLCsovRREFPrkybri",
  "key16": "2en4D7DZqPpkmySb5bM7KWittEU7ZtEJwAnXQVGEMTNGCxZPPEEtSxHd1nZHG6NYkdxCgEDRPiDF9fG1kp4ADUvb",
  "key17": "5D93fB988udgqmmXMfiiYDu3UnUHCUcyzss5YddnVCrUBe2V1a5qonYDDDNt2FxC79V2X5Jj8Xjbh2XCguuHDcQu",
  "key18": "4qaQ6VmGB1K9eWJy9rFut8mMCdaAshNXPtpp5Ujwx1oaQ7VkgMtyXQ4csQ871jzmcgogHfqNHVyjH9Dv9zktmzNn",
  "key19": "5HcsNjtJrC6DnAEJgEVd55GNAK4mwg7tm96twrD8wuZTyJ4TQkbuhh6Qo3X11sqsGqxadNnc6y8RPMwfDYKPGqqG",
  "key20": "5R1aYKvjLhY16R6gtiGtCMGdYJZdqedbw4MXc41Y3mprPUyKN5vXrWm3PRspneP9afrVUrArAiZJoDZwGfBuwYus",
  "key21": "49J6pNhHyEWpByZTXp9GhmQUEBbw6CVdaSqbPDcbv731z5VSMovx3E8jHFvhZDtSsds2om5otXfep7aKe76FwpZt",
  "key22": "3epVtW8nGWZ3Cn6cymAZ38gxT8KFsHS91XmLM5Dn2Lb17FCCyiURv8wtwtkMMF3WoCxFbC3gqFuGAnKdHaSnj8nm",
  "key23": "5xj3Yks3MD5qtLnjJX5sczcvjUym1gwinXTHWMfUTXrXuvxA9gZa5QFGkdPubuGXxSjX4RixvbqAWaVNP4ZseDaH",
  "key24": "3A6SkCxGZhG1dZoqXm5rQteQPMSnVThHf2Gsj9Lm2Y2tvwu78hEgmyREjArZEuu797MVu6mVHXoYDLrBHJtdPXDa",
  "key25": "giFEAbUTccYqnBhtXkXgigN7m3d5Hk6SgqQg3rpcV2VmNwfcvCKCxnsNjtNt7sgeaY8bcZfSfFSNFjzF1vWwUjs",
  "key26": "4kf6KFcgE2fBRzAWTfx5WJGfg4pYN1bkmprcrxnziEnwbWPw9NzCE3QdWr9VWeHExEMatqk8rKFpUFRdTKoAWK1X",
  "key27": "4idd1Pdx31bjYAHpU64F1w2rLAbiB2kUKioG4AVJN9d6WXrPRKGnwTcvCJtnz6SCxZowNZJHeF6LpFMwmHZt9MY3",
  "key28": "5i3qoxyUmkv1AtSnBrhHEKHDxoUcGkBqJ7crFa7kSFxbC4apbciSCU3MUFTGiXyPifHEreRjFKwQut9euV27B9Rg",
  "key29": "3ikJovi9jUGB71BWdG1rhit5Li5f3KXookM9vtpJCb3d9aoT5GFTXcuKAa1SVTKFkAZwDRWWxJaF1UmcxndK8nqP",
  "key30": "5wD83swRnkHQLNXsGq67WnRkW75LXxeaYHfqBWYvJiKXX1Xwpue53iBfuW9wzSxrty9UB8wKiKZvD1WZQumz2tht",
  "key31": "36ReR4BuGabU4CFnberMg8EMK1QdmWLtgKXFNh8MKhUGg4pbRFAtsQ4ECLMjZ4UFXVoPpDMdLGzQRHzPDBg1WwWG",
  "key32": "3PQwpPiV6eg9FuZMwAXWri4kmU6G2gDkrqZBnqRPrfNjEgXPGkMnSLLqC1ahXAbSstGrjJmqPSQL8XkdZNTMJ3TE",
  "key33": "5LYeuqoVgC2Z7wRPfzXcUUrfdJkTwJQPsz481WHKX2ZTuBrmerhcibmRrS21jGDYJ4LaAunp8WhJohRqABX3s6XK",
  "key34": "2yorrdcrKvGkZs1AAHQecNadgcDeyXXe7c2mDCYpzCALg8PoKJemWSYwMfghicPQ3eB3FEGywvninW418hwek29J",
  "key35": "NHfKeFULUtmhrceybkHVqgXQMqj9VKieGPaYi4VwhB3d44pc2pLUwx6GZDu3t4pUHuvVegizm7HSzzkuYjoNTMT",
  "key36": "hLqe33FzxZzXJHjcPDAhpM9gnXbjN94EqXXyrj9kmU6vQBGp4k1zjkTdPHeTeonQCVxJRiPxntvzRpY7pB5EGck",
  "key37": "59yfsTiNusUf2BWDxR5EAV3NXZJwbNaAMdwmqEiV9JjMqeGgsmgsVMFapHV4o15uE78EPHz5GpxwPf8gH54UwFiV",
  "key38": "22DcL4tQzweJYwqynQtgxGf5vdzR5XAAybvprbURJR4LcgkV1htpqj6vrcA9PyGukrKpjVjUjA3U9TfZAD5Zowch",
  "key39": "3k2q7MVGmAebtWjjKXhzkBUun4jH9K2P5iEb7Cos8aMjJGkrcG4LKeZk68CHWxsT2KnciU4avYBDtKdCRmVw7HYJ"
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
