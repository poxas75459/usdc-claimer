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
    "5otdHg6KsnBxEfJQv9xPWakcj4chTVTxGgE3EkLMTnuTr87b3JDKoN2fmNXGQttE5Kum2aSQssxfpb6zsWr6nppf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QcggrGh8r8352uirX5VcchcPXA6pa2qR5xPrYVuPXPnnz5HHphWHz4zoAHAAvhYXHs7hVZTtqj7m3V7iTSA7sgX",
  "key1": "4rnJUyHcteykeUcxTemzEQnarFfqfzHitMbsWqzLDAAooQ7VE9tPpXBroiJJP1fdzNK4EZkbebxZ3U9bunk5cKNk",
  "key2": "62UZpu37EGyqjbmpQW9DLF5jqJiMgxVpDTbMMtNq7jfiKy5D5ynevq1Td9NR4yc8jYyNBQiXe91wH3B2uQASvCGz",
  "key3": "4KpSyerhwtK1J4DyhoUiWrbePszdufCXKsbK6Nv8bSQrDMdFxkovZijLsScb13mRRyXRnYvC3EiUNMDRfbGYUWwz",
  "key4": "2eY5YfzAFoLw1dQt9sb1494tKzNQPA8sr51Xd286nyY5i79JiMaGoywf8Ay9XZYrBTShBX5YLecTmp3bqts3sUT3",
  "key5": "5pzyePy23FwMqd3UQCB4GRchQigohFW9hrZLnaBSPZuFJ7WuC3EQnFaKNVCoYXoYTMu6CDYzar8ZjDUYAA8p2UCp",
  "key6": "4ggvQJtQrGgsBjnK4wSJV1FrFtp75ZNkaiu8jcQqkgWZKqJRQggKL6qdcFAK1EBSJHLanWVGxx9FNVwSpSv9wRZb",
  "key7": "WDWVgCNaWpd6crZHd3JfGUaBf1Pg7kiG76SURPiWUzHZBeF7MKWD291YWv48VH3jydzhnkS4ZZtJ2rKwz25jpqP",
  "key8": "3W2aARAgCe4R4gEyfc7DNyqiryMBHeawBaDbw9N4QQJ6k6UySBBhAzFeo8E1oXmJ1gX71dUiLphL5QuYxjykewvk",
  "key9": "4ZS6NHicmWRBqAPG6mkYPYXQPGAZ8j7KjPbQhuerbZRZ2iqj8v4HUBCzbrytSiGxGjrudx6JdKiPZQxqrTReB7zp",
  "key10": "27pxGgfkMLDigNbzzhsneKGafV8ZpeeAmU7s5kK9kCMVXaWVuspHKguSPtMn2tdMWGXgJNN9eQW2EdcYUq1L4uEX",
  "key11": "2q3Av5z554KkTWRHCUNwPcvqg4jAHUM869nLzJkRJBewFxu56to7Afzcxcxr2tpvHvkGrspyc8PJr4QMUEeNxaUM",
  "key12": "5jxqsfpWduyNsyfGn9wNcp3hpur5hbmZpYHPvhgUiBJXAjXyRHJj16Q6V7zy2X7nykNDuW7pfvDNzoCaZwChH22z",
  "key13": "46ZuLquv5fcJDoB7hobVqzit3ZCDBjmyarXYnRcDuu9ifDWxPVywRdxwtivgLWWHdgHx7tBp43ShtZq43gSwxSsW",
  "key14": "zBBUyP1a9rz99dM1GBaCZi3SVWP82EC4vjAnCgrB9DkBhecAazGPT1ESi4JEGaHvBjxMx5n4ccJoiWCG6VG6DUW",
  "key15": "4fQYbF6K17rYWzcwo2YL63EYkbcyhTxtm6PwjZzHV8xXmakYtVVDKojKGXVwPhPddskPJtXHtxfCYfngcaMrdzM8",
  "key16": "3sLZrSV4tEkr7k7zyaVthsWhDDkiY6MNr9eqhYzhqWSfgTLLvFkjPSdXcsZZVmtakwPGnzt85Bcfxv4Grybnbyak",
  "key17": "g9cPTKaHKnyB7W3qfi1eiH8XgSKdTGT6MeZgzFoB9rLRcvVGWk7PMcvZHLZYiFuce95ZExCC6V6qYrggM9wbAMr",
  "key18": "3otYoGofLVhDMyfrRqbTUr9sHxHtgGUVV55726Dwm5V7Q5K9u5GuNQqsk6F69o6cJaRP5VfUn2BcJKK8zsyTurVZ",
  "key19": "4Aax1fFb8pjRMSa5SmYNCimH37CNrkr8jrpRgi4cqBqKesPB6CTmfVoCN3VQmYFQ7U5rTTLqaEAdqcF9mKsXtEhw",
  "key20": "3DHNj1uB1WpWpG6ugttiCEXLztRyK2JfRhDJWXsQExRnektZrcLoNBHiArmsAL53hBqiXn2w1mUo9CmL6r587Qxh",
  "key21": "2MjDFK1VksvMTYpaa1TTPFVHVqqFpBykgBm1jdkBgyzV9aapeBTmSmiSPsEB3PTQ1K6gAWizTDn5DU5hXnsPNkEt",
  "key22": "28CihgTbEmRdomTZ6eaoXWuPP3zG3j8pUDZeJmNiJHF1Jf78SRHWp36WZn8CcU2rZNsEkeS6AsUF5MNXe3txwJdk",
  "key23": "5vbRk9goBGRuW6prxGe6uRbgVt1imjeu9imh15DgSHJ5Hcxk88qaoA4mEaSi2Xw4suACo2Bm3WFCwrwteUU8Y4n7",
  "key24": "WEdcyuvEYbYsoMjw6ZBrFvW9L5MvMsuKvrynsrPCwzqJwwPGac7UopbkAkwnFhJ62qX58pcPBha5TFCQSsWgHG2",
  "key25": "mKnZ5TZv4aMtFVH5UrFxTweZAYRNMAx6kEJWd2ViusswtPETaDoTkmUbqHx16XarEysiTtpGq6fdrkthggf6Vfc",
  "key26": "9ga3SfB3DenGV4hMWgWTBA2enpofeCYFv7ALDC9RLe1kThFZivffbcbxcErLoN9GmyM7AtZScdtnKM62U8uoAN7",
  "key27": "5qNFEih2q1CaAcqZA8v6QtaW8FxP9QLzLhdiq5o5hdCCVfQUjz8ZKJuDyGHjJaEpbSQwGmwHAxJW7Do3knwCX5j8"
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
