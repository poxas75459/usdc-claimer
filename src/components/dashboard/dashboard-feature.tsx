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
    "27sFbEYQGXZ2UPYdaYbZyo63D2gF1vmWipPZgEM8eLdiinjMiakaM8RumXgXtMiEBVm1rXrPKGzZEiGNRo7Ufuvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xh7J8WuEchUMRjgvXPxTx7NQVCzX1BX9JsuhX1emKTno64YgG4PDECbtpUn87tePfCYCYwRUM8QXL9b5W58mXs7",
  "key1": "2P4PvnqboiCoSY7Ted8DYibCRn6R5XyZebxpfoEqnw9LspXKXRcRzeVss56RzSE3yEY1gS6F5pQXx5FQ2gF2fKVv",
  "key2": "2wTeLHEtReifeAUY7PmiDTRWEYFbyLfU61bytXD7hCA1HNQpEqmWTCxwLLPbQNs2burT46CmdkmfURgwDeU1QuyP",
  "key3": "2GdCrP8DR9NKwiKuqfV2xN1hRMYx86eAjPyFLPV5aUpabdiHvGorfYhHAHx2VJWAxpY4pRDTsmNfGQV1hEKYLaCH",
  "key4": "5upFeQfmxTTo7yCcjxeM4BzCwi8wBiRwchLLoJb2iHxWrgEFT1XuSbVDgFdocF35HmqPrGCCA7SiziNWAzwRoPRx",
  "key5": "2dqxM312HHyTyU9umnPPnY21dCHuTobUdxLmQvgDoSvpLDgJvPKrDFs1n8uJGhTmMhzu2eK7Fd9jwubGv4QyNvJf",
  "key6": "36MMNkCvtYE3TzF6DayVLD9DHst1KEaf9Eyvag4us63ww8ZKhuDscyPGFqAzxnneVeuz1TfSguoYeFriZncvGJ8p",
  "key7": "5jEogNT9Bdoycsd5JjgyuWoPuXm3cEVKysczm8zTt49XhJsp7c1u8vJaVLP36ksDUsEuwGXPfbpAiam9vg5UnA8i",
  "key8": "3ch3m12Man6F3ELHqFg2cB8Zykq1u91Mvpkmj6STbaApBMbpDf22oxYuCoGHoLo5ctrkprzh2QjMBKq8BhAJVzhD",
  "key9": "5cprz9zZWqCtNkZJneDvX77edXKqC8EFXRpsJYfR1cBrauARQxbwi7rXVYsvazVppAa6dwN39fpbCBmvucQFXx5r",
  "key10": "23MFbkB3Gg2YTbNYnRr3Kj1dbQpkKt4euD9Moja6BVrL34GPB5p6wZAshwVVd2foaRsBmTzK65TwDL2rHaCKzNFw",
  "key11": "5YK7eWnj3b9Y1poTQhEd3wKohCGmB2azTVUqmEmoFzYLmb44dF2rGspJ4ftQ3ExtKdtjQaCuyn74wiFN5T5Ucqwi",
  "key12": "5ooDxtPdkB5csNWtgvVH7qkUEJtzrhSEoHaHWyfE55jT8cjQJ51LSjWBssQS4BWvEPFSbwfQLeJUR8DtKA8JKHyu",
  "key13": "4yLMh5dJKAre16sDs7LYfzS2HNMZSHV3YG2xMBkfkaKoK3wAvTfXaWkoC3uviYznwwG24Y4r61RcAtAxk7pXGqUf",
  "key14": "4zk2iGeUTDZpZoLD8apziQ4KN4tR4CjrGqTquKYDxSeL4La5S3vup2usyayiAuYNiCQaur39NdtQBFLnp4fN7UhH",
  "key15": "bneBRgdY9v1wQwpoKxMnEU6qDAC2EgfZjg9GeK7gdaRgQFogwSeN2ozsQtf3v6b94AQ1VqvK2YN4CTRqKhPmNpv",
  "key16": "5K7ugeC5ZuZBARvMhZwwHZaqd1RdPtVh9StvEn8aRgr8Rxy3XP8Tn528wPomL6CqQT9uorGeYqBxAdmHqh9kKXGB",
  "key17": "3a3wx3fRqxA1v6Po2Pg4VpVNAefgLup1JAAh88ndbYEo9tRVf9LXfhkV67tQ2pY7dztqCxscchvAhQkXrweudvpv",
  "key18": "3UiPqG6xqyK5MVZJH3zz2zo9cst8v7K9gZiDSEQrm47Ap6LTcWe1nj7BLdpRXAFLxNUkPn1ESBomU72PdD7rLSaT",
  "key19": "31BsADoSorMdA2qeBXgxYE8qk1d269wBcNBjkrC1K1uNi6ADaCPj7KhpETD7zppMrb88uqhEDHQxBLioVcZPmERF",
  "key20": "64kQPYdYa9X17RSbkM7ZvVqqyVShQ38mRHRSjyBjehvv5ktVFwkVTu7oCC81zdk6r29mWRuFpcoU2YwS2VdXGRhV",
  "key21": "4cWw1kSHaHiWRyzWdSLZyewsbTKKsKafR5MNrstZh7EpAjc1HbSnGxRXhy3YNrP3RmddXVmbdjqT9rf9X9mg1EQx",
  "key22": "2uXy9Gfkhft5Mn23SAV3L9pP5rznuNyaUm1BmG98UWq4xrRWkiiW1Be8CLxw3V9pncr9K7rjX2dXx9Nk7n3p9Vnm",
  "key23": "3T97kbryFQjCtWtkzm8AFX24mTk4nATpFVU3a1tgaQA1WgyxNme9t7zJY8jDhF1b4QxySYSRtx9n28anyvUvR4wh",
  "key24": "121ZMajjeBFgJUTMAKHyzEqo9Xw3WvY8gad95jCXvbknQutgHx5qiTyRrCL3BVDdiG8XdSnvwmiAHWWDjvYtJ7WL",
  "key25": "2vWWbnofQNa76Ao12b3Ls8XuCEviLmYrLKZwjdMJNQMmbmGsTBydxYFgE9DbdTPmpQXUiTHya39Gh3oBwjD4vba2",
  "key26": "5XvLebZiW5Atzh7nSasCQeixqzaygNVQMMBFNUHmgXqpFZFXLM57ak9b7qowk8xrH7MN1KD4dpFBBviP7RBJnbBj",
  "key27": "iQtXCfWUZjyoZM5J7KTasZzvwkA7unqfbhBvb1XB27RyubGWSWP7qHWVNLVfyvhAy2c34ga2n2otojm9mQvztTE"
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
