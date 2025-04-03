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
    "2jvnAFtMb3HMZ257SXuLfkKKcGxJBzdyWPdVj3vaN3m9spbxj9hFDUXsoYphJT6ihpcWU1GRF8CWxvRLjCKgrE9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLJQMxwY3c46mzdLYqqkCCxRk6tyPhwChorPkkU95bJt64uYT1oLLShNwfQLcxjoDLdhFW77q8dhqhVCqds5zy3",
  "key1": "4CQY7Hjc9gmZ7HKJCFQJGcdeVxuMgqNAYvLr5fJnF3m4vijwDbdwApVaSAL1wxAQWqTuMV3f2s1sApTeTjkwYeCA",
  "key2": "5XCC6LC9qT5qEVYTsyTxDxZaJ6LBbGrRhMvw7xHYQB9ZwRP8tDfg8JCjEGeNjrovquahUFAbDEDC8wtKfknYGTbz",
  "key3": "2KvmkvoJET6Vnr8sPDMZHb6W2chNSxFLvewySCmYQuqpoH4LR9TMSU5d6aP16a8qzLVGp6yXJB6p5X9dA968onoj",
  "key4": "2CCnWcQ1GrAVc8yG7BeHE7xt6cjgHbMuUhdqcawtDWLmMcjaTXg7YUBGokB4cw3qPHMSgc56z9KEFcXN6R3XDefQ",
  "key5": "3ck5HCjRpEt5wKWB9YkfD7von4Xzqcdh3tCZqq4iJ3M5CYDp9TNNjRRNe6pNUUQdymuhpgWCAY1AdR89z1ZAxmrV",
  "key6": "3PYRASaSpvysPrA7NYDaGVfKphMdJqH4ax4gHLxaq8dkh66iUJ6kJDdgr8ZrCN7qK3TN8sgeKLZ1Fd3gyg8aiRWa",
  "key7": "2iaDMe2TWNsUyFuxTzNbu6HLf6FwHFA5g9ieKUgQeNPGamEBabgPFSf2ChQ5umatZ8r8swgaMmJ19eYQnwEz9oSx",
  "key8": "5KzKM9AmFVSEyivL15P85WFBekF2Vt4qHqyiP6ucnYrTc3fmZfofjrRQwXsxP58a78L4m9zZQRqmgVX5Un7eXx3i",
  "key9": "2pBNVi5LyiALNihasGrANWgRiD3UAZ2FcWPLDsJ5mQghTZtnsW3PP4nFB5SEba7qCLFVsC78KUQhYdPMHcbP7dhW",
  "key10": "2RC8RFtyS9QWPKTDC2EvmfyFHEbJQJnVXfz3iWWR74QbWcS78P8Bfbo1GxpYyrttxHVVnVP9bot1z1c5F3fZWoDo",
  "key11": "24juPK4QammYHpjDV4YKXaCFtrPsrPdsKmHpgiVsLaCAApj5YJaDEGPw9MepQQtrG8tZ3zn5QmczP1Ghx7oSiPB5",
  "key12": "4pqj7WnrQwybrZSE6H3Bc8PM4KgauAo2u4YEeLpWyFP2C8wAuFNxqK4HNn1aZSNtaq2CKHkfh7igQA7vBSSdkqaP",
  "key13": "24jwu5mKPPHhu8ZcVYE4mXkhquyAX49wjeiX4yUCDuPwji9Y5XCXmmAN74Ts2TPGZe1JDXrrdbetgGcsMy7KAExk",
  "key14": "2ShEYBZiie4ejEZyQfx8CffWhUebKEMhD8BAv2EEc6Qyz3fzrjUbcropVLhG6PTHQWg9ycMK7kXtawhhUH39GK7Y",
  "key15": "4RNUYeSNo51J4mNqDbrkt5CakUDCSx2znapEA6w5Ac3rug823nHTKrSbu7AuMcSQTK5FVai6K7vPz2eyT2jzbgE2",
  "key16": "4mSiB2tkDb7G1ZQujvY4VcLco4bVsfMnNaGDxoQYMZN5GcRYCiUTBHjxiifuPfdMMEkM53JpStyJ7R4rn4pxGDAb",
  "key17": "2z5E8u5yjdgKctwLZ8WMpuz1GphgnZfEpx6faFezZwzGUSHyT8MNFmWDJ4nF9pxZ2eKBoxwDxwXbmAZzXsp6NNeV",
  "key18": "PKTGHcDA1EgLXs3rCqr3y8fF6LEFq98SSYBxLDrZGjhgeLaUuqBbv7cxfjMgVQcc9JeQdfCKzPAXm1mmj8gC78V",
  "key19": "sPevB6VQXo9ZxgFifBXHW9DCSXUSvrFafgH8nzAM4k7QdxATN7eZuGEvuCXft44wLDFDGuATLnExLMhGZ76jLgt",
  "key20": "2M4A5Fh4W3usJ5oPzgdqr1qYgcSFV2ozXcqM8euTwpGn7wSz7KMyVby7UMB3vWUt4XUMC1f1vypcr9qsw8DvAq4U",
  "key21": "45X75k146RnQqPLbvWgy94Fa9nJcH8Vy6MRQC2kznPrYn8H4wk5nyehqR3AG5aDjWqnr2sjfRp9JmMBHuDPPKi7q",
  "key22": "2aB6AW3rnca4Qyj5hQBER6tT73wdbbu6QXogHM3QzpntisEqKVTc7Wd9c9C9UdFLjSuBV6FeEZFBZpU5irHkC8xY",
  "key23": "ANYdsxhjcNsAiXSR1tLeKKRJeFaPtk4ChotooHyMuGiLPYe3dX6JzJgVzn4agGSfakArq3MAnALQicFNvUv8ymp",
  "key24": "5BjaM2vGSHicUCUysmtQ2JpPFV2XzAQUo86xxvHutTJ3fSFAi4Wsr5AY6BWsizxTmuCCwmyDaBkxVcTX3py7diQt",
  "key25": "4hFPCPpvv4JQ24Msnunj3L76nKZo1x9vZZjUwGXs5nSqymDJXRjcFTJ1HxwgZ6jEz6bhzP5DEBRmb3GSTzBoTHz2",
  "key26": "2ujhVVHoSNvAF2BePPWWRLs2B4cCSQVj9E3GJw6RHqVeF31en9xqkg596KHTju4a7tcgKdis72gfqq2rRY5ioxZg",
  "key27": "3bzuaLNT9F1krgv3AgSAz4oUDxADYWnFx7GbN2uXt1LoHTnpUMLmbmCeb28TS9qH7Tzj9sPHW9wYqGZZWiYRAao4",
  "key28": "3qSFrA4wBFnNQyy6HwDZ9ghVyi26Lomm9YtrAuTT8Lt4XjhSuAs4cM5Dsr1ESVyKB72tAwV8HjSC6yWzKUWqfofs",
  "key29": "49iC9woPJZNDW4LjMRGD5WdtHeSMXJiZznpJ9JbAUsv6YUWz6KdZ3Pugf5YKe33vo8kHrGaGX9toPvzeva7863zc",
  "key30": "5DpyJMsqMKRAkuuzwNLmr28N3FNAKgCnfo2RcJBnFkWtgBAQDJZZxQu8WdhNNVQEz43LRn26M9767TrDmtFbXDt1",
  "key31": "9ZPTkNqjX5ZngrX5bdUd65jVxSDcRwyaZFkSJ3SaA7PBGRqMhyGEyz22U1axSQw7NUcuoRWBpHJkfzR3bmFgDpR",
  "key32": "4zAykQG1YkDGPuyKfpBrEXPHLWjtTn2sF2jvJdWMQkF3ceaHAYqYr49jdVonraYpC8L3wd8SPXEN925S77Q3V4c7",
  "key33": "5zLiDg8bAYU1soyzRuQmQfR2zx4kLaX5FBq26r5L3ZkVWHdXGDwUAC2gA1yEYQ3QZ2WKuSSxhiByAm1p3gHf8Br9",
  "key34": "61fgHn8w1f7fbabSBQdjknDoBkcNA7Fg1cbe8iYG1YWThCjFYHv2kaikQtVcceBh85zNtFyr5odzTamqDXcozfm"
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
