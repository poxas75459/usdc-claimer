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
    "522MHLz3mxgdEvetpK7tC2mtk7JGph2CrQghBoqq957mNqNAMcQmR41ATN7wdHAEVGrVyigUcNZ5BWckWBoZPmps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9gtwyd1Svd6oomjMPVeDawQuNerAVZU2MH2CKSvvMxZcZHwJbXTbiRiVZoSPhnSs63Rbqk2ueXUNLVNFmN2ycR",
  "key1": "55MArY3j2Z3tpsDDgDTzdwqAq1dqfyHwLbLFnm44gaN1p7shisk1EbWaAQfqSmM6FmDq1t7REPXupdGK5iabEu2n",
  "key2": "367xzYcmZnLFLayxsgf2uwxrP9g7NqjRqwkhmeDeCzUAVxNDJ3L3mHD1SXoW1kLF3T1vXaFzwJuW6XCV1Lmh5uwJ",
  "key3": "yyu1WgzdD8xqY9PmyfgRFtonnCzYezcNUpyKb6uLG4pLRAuYX2UsVYNj3tpVp611BASQKYW1PcRLTzfXdYcQe5y",
  "key4": "4UxT5hj3iQ2zX7xDac9SsejF6rLVTs13VvyNL5y4bS4mcCHS1iYCuyjpnF1eyTVZV1xSqB9cK3E4oj5nzZD1v6UW",
  "key5": "5mEmJyc6keNd6EB6HFd8jYsCrj9rSrhzqoWUsFVeeT3P6YSv2YdoLGP6XSWdMu9UGq3JEPL9VYGECM35Ba5rFzwS",
  "key6": "HbcsZotijwpfNRktDSoG52MZ2ETYcyiDrfPq6UGNgUct1rUZGpd18s6nBkSWTiKjQ1CKwWGwcJ7YA7VAtMwQYFi",
  "key7": "2KofcAnDJ4F9DqL9N327N6nLBtZ6VZuLgCD1SSQ2CmWHCVFHRu8vexhvaLo1SVhv22jyVfQyv2G579GTr1JPgZxz",
  "key8": "2KBW8K7c8ThbAYVGkMYXixEKKkQSszw7T4PX92HDioBSy9UCAeEkDddaTLuzQqGF7MMnkBCmCQZBsted3LY9jP8g",
  "key9": "5RvJzRAgyqdyecEfQLKDtiXWA1bUB4Bs9vMTD2s74a6MhbbMQcHnZPAZVASCuwdG3eL8pcqLYGjHh6Bvkn37HVPs",
  "key10": "4DRNNCTMnbuc83gzkag4ML82CZhYNexVtAE4Xh4BtdZoxHR7W6nhiPzHujpirMcPMLTRquHBj8fJ28aEcvuxtgFs",
  "key11": "49RrGUPbgiiN8JxBtXfCUEE4SDE5kDyroxeSTX1gXewpJgMTCWUGo9DBHiQHxN9uA6yER6HBhQm7K6NahTJtLrAG",
  "key12": "3PxZPYi7NajEqzn7WUZUhnYSsFVDrRUFhM8GpSUP72rNvesyaVmPXzo4Lw8nxbhqHva18hiXYoVYdK1KitW9N1vK",
  "key13": "4rXvNLowGUd8CheECE8MrhYDytHpY1uPXuFRHC7yyz449KL2h84R6tCJyJSQ8NX1qgNcs8Ur86tbthLjLit7kLjz",
  "key14": "2DxB79VYAvDV5hZQngW9PuxvGRzTHWHGko4Yy7iY9kBJg8PeKzVZwNy14jZ7XkfEj32DspZzojSPX2MQNQSrgNkg",
  "key15": "4s8z6a9z86jSrhAnqBrvtDdEmDiGJJgTsXZoayvkwpc3RKyjf5YoQZJZrmohymzBvcpCQPQFPk3YyxkVwKhF6g87",
  "key16": "KYdb6n8wMWNqPWjY9jRMbZCdAMBzjMqxAU1apXGko7HMA1TAu4ZnJTLXLfLKF1j32TZLz9oUxL9oYx2Q2LfGuZt",
  "key17": "5zytCdSfRvqGKGysjEk4mRmfTvu1ATAzyznFAZvQAv2hG8U157qD5KWmXzRsYkvB8UQY9nhzVoygg7Q9ZTj11bSg",
  "key18": "4uzeUpspfWC3PoDb5QkEj6RBKd484sqxs14awtsJ6iKWUhnYQ9ys2cWiRUB1qBJfwAGPcirYCa3nKSZFmELYLsmG",
  "key19": "2yiepGZ8F9ZYu4dkQfMT1onSKQ8euif98ivfpB4fpo5Am3iBG8HNubTZKo2FcQHEvusXtFjsX4FGvBGVhR43Wsdm",
  "key20": "3BfKWUuJxaDRMzSa8VUG5kYVQiTSBx5Kun5KmjAn7af7tRWgEnvmUC8M1WP8jGrNLy58y4LkLUwjJLgwGPcChgX8",
  "key21": "5Ut3nSjQ8AsKfin8h11U1uaCVDvwhizaPZrpUpECMXVCadm3rWzSKa6y4GqpnG62uhTcTLCwwvYxuDfp699jebFA",
  "key22": "3Pko9dwxriTCcgfoPp4c2AnCS6LBdYHzsbp9VoRkC22UGDfPDPiBTKz9wQMw6KKoJitsqdoYRN1C5Kqz7jtFQx6P",
  "key23": "34GkSrk7mpN1rTF1Cpx97sQc7MT8mV4i3ABdKVrKjV3Q6Ckq5kw62HmrKSFx9PaFSkrcrQjz8rAKxd8pAHcMGWaV",
  "key24": "GayZcV7NWwJDqyGmhWNNNmawrN8oFCjG7Sdd5EBvhF74H3ZWFQ4CDYPobPHFGmSL1yzj54qiS7XXJrvzSqQydq6",
  "key25": "5rvknUnQJVV3ig51E3XNTMHHvBfBci5rm2JqGzNdgw5F5oLTSsfCp7PnXPrfzm4mgWW3jqjqDCVLpqjE4X88mSZN",
  "key26": "33zSGYkki4huKLCvSAV2zkRyxw2S6SaPzNneZvj7evGiYeJZAa2XWrf7JSj3FJsufVbwL4UMo5DKBEmvehrZQaT3",
  "key27": "2ZRmgcYtT3x1MNQpiRprxe8dcKCbvcb6QK7V5w7weJb22SJQnf7aYfhjQxQfEiQWJNsR5mJ5Xc6Abnqx74PWdh3B"
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
