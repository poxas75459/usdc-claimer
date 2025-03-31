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
    "4dc8ksycqJNH335Ljb9TN9FAUeTr7jf6ZA177isPUSdVqswtM8kn6eyf8DMMRFcu6MG9ybavyYvw7phtSfHvK4UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWifJnYhDGqYfj5CQzDHSakR3q8c6KFYKiWH6EPtxuhTqevrmUWCLyfVdBHM4B87f38aAKwow1wKtypFiUhVv2i",
  "key1": "4xj6VB6W9EWBgokao9WKvadcVbnXRtsMzyWT5yXNsiCNBeZ3XLKtCEhtP4wVMdCHuu31H4JQPiYCwD2ZFy32JFrA",
  "key2": "4auen9NH2egpBLHvjDidvqvnhkNVfsXgavnodTQUGhWvXYE2YYKmrGq9pgZAHCk8v181pErXxKnWcnGGppJtmsZr",
  "key3": "PqAt28mYHJi7DDxMpGeTizMqNgQmNSvsapz9Jwvox8vZYCkjR8gFVgDjpwB42BKNaMJE5ubqZucytcTJRCioNwW",
  "key4": "2HsEL9JKqCZEDS1JkWT7SYFDKw39W5JHHvzKVGswpzxLiJA1gVjeg8vDiDFMj6z9NzLLtn9J2Cru9a69mU4gCU6W",
  "key5": "4eaYPNixr857HxccqLdPFVVHuL9wJm1w78axQVpV3jzm5Zhk4E6xz3xxSYQs3BPFjQhqAWTgCjJnjAsc1BscRjFN",
  "key6": "2N1SnFuZ2UiLiG2oFJ29hhFTf8PcimudKehUv1mpDRff5MS6Hj53Qap92GrgNPQ7XjveyPteBrzQNb3HLv2qBep6",
  "key7": "3xjvrhsxeosSxRoLMVydLGs7CYqEGoFzfcYq5czuY1LiRCTuaDDc1CcrHoygQzGmZymyheKsTvaWUohNoKm3xVUF",
  "key8": "3jRx514rrqpjDcvkbPd9dvHKgXxoGLE5cpE8TmGqkZC5K85wMxHidLUFHjgpn5dGAYGPSJKn9ytXmUtdz3bBmikH",
  "key9": "5WFmaWqWNK1QfgNoeKQUj1hSPGBAgvM455XLAG8zLmaMcwUEEyhWgeVCR3oCTgFgKXoevJBjcD2TAVBa2nwyTR75",
  "key10": "3dbakuarhvocQEwoPrWVuSy96RFhxtfvDe2EY58Kr4Y3FiCXjYvaD1eZkM3SU7kizDMrC6yCk18LhKSAd4i2rvW9",
  "key11": "2zzRy4gdthWvrBBcbdMJwBW5PCxvYfiCaHeGKmGCYdmNCoTuJ61x6xeRkdut2cb7Vm1TM4sdhEsWRb94SxxxqRTf",
  "key12": "33t4q4XqEuMc3Q3675dwsYHxzmxtKQ81hiwbRpK7Akp6qs5iDFf7fZ6JSmENSygCmSR2KRSou33ULFySDyoP9Ge5",
  "key13": "i6mFMmCPcpyadPvQhQhLraoFvdqDFogy64cN5cmyEKKGPPCmveshaZMamBNzA8sDWTu6x8Gg73TmwLCQxsUR3Xq",
  "key14": "4Si8NBt71pyVXFR8EB13ogXLYxfo9oKd1uS5rZWhCBDMX3y8vSvng8BLG5BRJ1rrbtFb6TWo6RyVWgzn82pSZUyv",
  "key15": "3TC2VWmqSvC7BeNQCSwQU7ffHJAJZvuqctjDnpuBfimmFxjSS5yj8o6zjstje4cXydFzma5LFFhjKYgpSjJqGZCs",
  "key16": "5BX4wcMH5E9t385GkQfoV27X7vtZJP5EBWU8V5PGfXMjSHKWmHAVKnb6sBs1np9vFsmKwct9DF4BHdtuN7ZSPDn1",
  "key17": "2gMNLxx961Wi4kHqjGhYgyQvQWKoPbiCKTMY3Y6pPG61jV4thj1hRfi8XQJQQ6SnJsf683ZtW1Jh3xk7qiKUVQ2o",
  "key18": "3vaFVVPDQn3utuyYs4ndQo87CyBKD65NoMdiHXWg5tEuX9e2pNroBmssBudJCwZjAs8GBkHGzscE6rJ6fzGmqVmr",
  "key19": "4t3DRd7tP4cXU642ZLMZFYujioVwrP54aTTSC28JJq95wQWzhbhReMmHuLT6y9pyB7LarXLBnasWnR7DUZgmqBgT",
  "key20": "2FVRbMfz4L13QgA781pac4i1oAEc3doeFmBT1MctmTrrnmodcSsBS6kYKWgyZTB8pNyyp671cwH7W9nrmyNfBesJ",
  "key21": "4RpeziNqgsaxVoGtSikKZzYw9imiV4YaQHc4bB9xCCwgpP7tQ1F8MeSjHKVQUQF1Qti6ULaBNHsaArzqq7EpFtUN",
  "key22": "3mBxfFTu7R8ZQT2VX6cTKnJRcnvYAhWw3QimrQPKxBwRghXvA7wo5mUH2XHFSPC4uM9MHoJe8vzJ6qPRBaajuLZt",
  "key23": "35B96qKv8iAzpf8zYnJauEK4gwDZ3ULLF71hEKcZBVhkXUjtvDKqdL9iQTwiE25JugoVnSzFmMgkSdKVbZkJFbYr",
  "key24": "fhwdiV9QWpHtsvrMDq5uUAbYN2ohfu5sHxbQMXWg2WLf29ZiCVjMpNTN2ZcXqLjBGGvXK12tw2Q9TzJrqHzJo7s",
  "key25": "5WNBhXebkAKBdsccrUGfREXejNLg8wtcKnaepvrPAcQK7EBx1zNVDE7q65E9iN97urQHPAsGeDKaTkHBWF22csNw",
  "key26": "5LZoSo1c86th4VvW8JkStM2d7w9UbfY3T8qxApgjXxUo7YuRMannueW7LkZtwsS9toWJwmXCVor6SccteVcn8daT",
  "key27": "5GqF8ioNtQVYTA8eMZAkGphzRat5MiQTSGaS3NXvyabs6PigXJNVN2aEzcYXb9d6FwMzcE1BsXs9Rk9rKohVeuv9",
  "key28": "54Krh7GX54FDBN9yohgQfViGji2qZRJVJq9qepkkMTQvKRiCRoqUrR2TCHk3RMUYDPYcnpEVramp1aUcHwqUqk9P",
  "key29": "3Zp3x8HTvmrMTMVTSdFksv4nZ1qbiABdPrRRArJLHgjQnHv4w6X7KJ4cHAdhV58G9c13YGxLWip3Z2cLkQ4whfqs",
  "key30": "5nBeeNP3xRteP5fV5pMnpdHe5GCeGecwMb7AFtqjLV1wRKZi1VrhzLzH4cDBBAaDP9euTWdN6k8cBR8JZoBxVQVz",
  "key31": "jJxH98XGUzxmJrai2aQ3Ai4ZGNqWpmAi2zMBVeW1UPRN8sJPypqGGxiX8AZJ8AH6NPJvRYqx4WYpgRscV2NSqCY",
  "key32": "5ibskpAp4ewtBRvE3fd8VWkRhfyqTc86tQ3rEtiRgDs4ikiqrMtMNaxxeWLQiDwjag52YVb4CFkMc3ENGfHjjhYJ",
  "key33": "5EK9CSHWfw1bwfUkf5gkDBqZ6sLFsT1hfKiZC1MTjGnWuWoq4YKp9JHZxQjvm44EmfieURGaSoXJ5WrxcsgKXdWw",
  "key34": "2awJDzhjK6vLrLi9qZHwWTfBeJTbF4SuGAuDLNb7urW4Tmc9Re5WLnC6B2Gc9FfAvDJZsbcSZpY64qkAhouHpcTB"
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
