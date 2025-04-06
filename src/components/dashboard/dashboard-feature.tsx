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
    "45a4pxiufESkP4mNAxGH8RSnzAqQtp5azc1UQ4wSFJsuwrMB5fM74H1WdyEcqA3PUDE9Z2ZZC2wMBFhRgLeQSP3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQYxoHokStpAv81Kyx4onwgoXAdG2KEMK37m7YGcsoQPH8FeqmyG2TDH7Jsk4cSZP7SgSVAYaGwsiHuWrJf7xbS",
  "key1": "3rhBknHR5ndctFSwA4N5ZCohrnui3TQsBR9KH9ywLYXn5eZ269iDP6gXyEqYqHbVYzPc8s7Qd8xRovnWnPTyqyvG",
  "key2": "4gkhK9iWYLCCCJA1eGYRjDtkSmWwHYdHDxiqpgDP6nTZ7tqJQ33UzJosZQz83tJfntaLFe3JZE7iP8ayVhUEsL6i",
  "key3": "2jzkUigpUoLGPLhWnBUDxvUxiEJnQYswjBU7ftkdCn4Je1A7XHWgGJoxiSyACD8E3GLL1RDT5FHSfNTPPkSL6SrP",
  "key4": "2btYh2aadjSUCofiveRfATAd2Ex4CsfwrzgFscZYr8ZFrZHd1QunFMbF6vd9C44RA4UpRxnU1apWgPtjYf3ayy5g",
  "key5": "jJETs6mEKR4NSGbVw54tW8hNxvN4HorDVCmDx6TjtpvMhFCUH5FHyDcWBXAduD5FkEyRzrcKGnDtNu6eYHts57m",
  "key6": "2xB1Q1Z7V12wjtVhtqWK3yfphiDdUGHAVdfwmJRqNj4jBNGDwsGNtqwRqcr5UsDyzFsaJZMYrHkJDjMeoPmQARW4",
  "key7": "2TXSi73XYm9gqiTYLbq86U8e5mNNvRZJ5fQavBPDoy2GjdtxSwvS98XTNJRvvydkCaScm3zU8Jkk8WvaU3kozdGT",
  "key8": "gE5YBo6FgSCTGabV4bfWRbrUHiNkReeH9FgVyXpwt5KAzECgRaS16YTVbuxgFj7VumHFPB2oGhGb7qGc7YWJvB9",
  "key9": "3dZAw3JrxxBcjGh5h7SXB9i4mmSVG2rzc9DShHZHxXEmCqjQkMDCnWFYNx738nXGr9ZPZvb43jFnDWJhXAhWcPH9",
  "key10": "3YE2s8RDgZxh6Sd6tkepk7rxG8z84y3829vsAxsiJ9n9UgPZdiJvkJUHcvHfBRcAFe1HAZmFNgdRgAFgvYuPTBpR",
  "key11": "2DWo9ZTkvVstZFg8QcmyX6Tb2A2BEtFGZDLDhgcoo49bZ6bZdbDqbyA45mLEzC3Q8U47Vkcrh8Q2Dgb6gk7Eza5N",
  "key12": "4mv2ZGKwH92JtL4mjqcAmJJBjqHCLkrYANpBA8vkiXfoiakin7S4Mmj9ahxqgjHRrasSPYNGFUh8ff4B3eyBpx8q",
  "key13": "3byFHAgcVT9NVLnYfLDYXRJyf4qyRepP2PyZWREwTQrguh2jJ6n49NMQoiJ9Nmtwa2UBjdXCBzTTFCgqWBsiXUh5",
  "key14": "zYmLMLxp7McEtmy3ZqLdrhr5Wy91czSBy5Ccc5eCVUfRkaUwV1XcJTSWsgfjr2H1v3t5ELHoRyG7xWSy7bG2yhi",
  "key15": "2W7ufCtLHpPufgSWcszopVKCR7tjkM3RLJmQpTWvg6pvmdRP2Mw7QJiGgEDDkxjMs1DF87mhgzqqrdRAHUweKbx1",
  "key16": "5dFRqBPimNFqgBhso1tnkkC1rSDpziesLZqvSauXvMK1f4mjgvZ6MTvXfRKdTBXKNAiLYhJAvgaHgbghJTYTXLMW",
  "key17": "3p5DCWgmAvGKTY6BmHS9h83fk8vtAajw42a2PvxmZnfEbRvU8Z9DCsuQERk21ctYH5thutkmvfY8ipDJEs7CBipd",
  "key18": "5xqVw5on2EuW7XQB7NGCyiPHFmMBxushHtMnzWEYQBEp9ZVgPT2ffAA4EJ6bWf7BPw4ftn54jP2k3MXg8Azxa9UE",
  "key19": "4oq4moZu4NtpRw2EYNcU5ZRc2dUeSMSJ27xR8xdoJ4CE4dbyotwcVUyMWrTaNrweERKrcDFPKvDqdg7n6TsY112J",
  "key20": "4HakVMiw47CXRWWk7aBZi4DP8bPrMYnAYENJZsQ2gdtcxj6Bk8fTyG3uAsLYi1nep7SaUzkZTng63bKFZEQEM4wH",
  "key21": "61J7mra9WP4oxKnPkX14iAAv24DhMrKLdgw6QcZZt6AjsCLNDGyxUfremt2CkCL688c1x9vP8Jdfq24GoJwph9Jo",
  "key22": "e9Wgu4PUZbbxyLWiVQCfc6B38X4MLNwo6zfkKtkoNqUHMxtPtYSdbwcoaTjUn14rgMJPekdTqcLqKJYgkrpKh5p",
  "key23": "3LFcxH4A5hM2XNPQPC2r3muH5RAsfVubbuw9RqLxCngX3eTCatiygNMegt8YuFe9hCFFijh9aKMxectRKGYeLmo8",
  "key24": "5ry8QkoPYapZFQNc1DSQi2dYfXYKEbx1mKyrMJbQvtvrHoP4ZYPAa2YMNWirprbhgnaM9MzBb2qbuobtwuvGPVMy",
  "key25": "5o6vFk1F51JdHB2CqqPnf6UdM2bvfnq4YR14qoMLhDDnYFmSd1hhWYEDVyKcKcX2sYLeX9wDmWuqtvJE6aychJP7",
  "key26": "bwKJ12fGfQNT5yrVcL5E9TKPBSFQPdM3B45nRqfvU37jViEWk4ba3qG5FAW42sfsoEKE8nB2z9yphpPFu775Azu",
  "key27": "3ihgb7X6Q8c3p7TMuWhzc2kSkdmsaBuKwo9jZnyeueoC6qswYW9auo2RB1dtzSq7Uoj7wBXLBTf4a94XwPZenRFp",
  "key28": "4ZVagNBsEJEKaXk26RdvLLgxjtkM9wN5HmCeTwwp2VbU6GLXhGPGn9t8auZ9vWBQ5fw8dY4hpPJWvQmmbZwoNKxv",
  "key29": "5C4BCErbLfEnWcHsBgSxHbpwBVpaaREERS49uGixFvz2Nu8uY59D6yUKp29Lu16URYoBTkGbMUwvwreo24R8rZdE",
  "key30": "2wnbbkN2KCaTmdrMdTR2RzUrijtKBbMBBP2K5ZZDjJCWzs1ZDR5WMLKn2jZGPRvdupCns8paXWp4VuyjjRnZ4d98",
  "key31": "26MhayN5Chq9xKQCjXML5hS1eeUY3B6ChncbZXAFpp6ct8TfGnWyBGmaMb5gFEiL9u5ALDSBz1pCeVEy28LabLNB"
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
