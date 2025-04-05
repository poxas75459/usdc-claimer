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
    "54iBBhAGK82suQbpAH28U8daC1fWQohb6TzCvwh697etZYiUVgZN1surBY4SRUd6YrVh2ePtkfUMRyV47oGBm3eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbsWeupQLq3tH2bvFBqLLJNdFp4ydK15mF8oNPYDxVeA1dpJvhuf1jKBL5PDt1DcYjLcRGpDvBotmLmtzWC7Uqr",
  "key1": "hhjxFwhVBjabnfwWsR2wTdUd2dE1wdgdTqC4dw2Hj9wrkbC6yeQMUeTL5TrgEb2AKXUzxXqvBKXFeFnot8aAzkM",
  "key2": "3PD5eXszzA8FKapkxLw3TAxdHkC3BQckmYP1bosz7f8SHoUZRNjMQ4PmzbF7wSXerGFnTtCnVgTsNiTWRSpgBWxV",
  "key3": "5q7hNxf5tAcZJ9JdnZFECenJpQYhQRjLJZrf4RW5QdJVTDMZFSuDgcFruJLnqW8UGuJdaYon4FjtquEAuFgdmhCz",
  "key4": "2h3zCBgsmw8ewNqmsZetZNqXKM1VjYsQYnokfozpU5jg4ZivFkbsVJfTmFFyH3yV9LVbRXA4Lwq8dihPnRBLRQMw",
  "key5": "45xfzL7s6q4cFkWpzyeWkuFhoBhC8C4qLQmtigPcVUrqjf9MiBM6GirpnPsFqs7Sj9gXBsFuHVZMkBzJoowikvzP",
  "key6": "47gh5DTntLiYJQCeq115gYFBjBz1ogjk7nsekmcFSwFpj4QFmY7rn3mGEbyt9Jje7nkcAedarPHjHTZk4WxPJXTm",
  "key7": "4EHKvJmMTNAp2ZoZGbGkvGQfpAT52BTmKmjV2cXd9kt2zYPBBTAJKKaHHoqx8EStWakToVB8aYJWCNuDYC2Az4t7",
  "key8": "3pwNTJHByjnFfcf8aezRk1SFR1cKNAUWCboZgQTiZufnZ1nPAWb2KwAfazP2WJo95wGLJktvBBwYZNvqVgEpjXdS",
  "key9": "4d1U3nVofdVmXZB1iUNAHwwJQLU5XUuqbcL6WYoMDbAniKyX6duu1k71ae3xknxb9tx8gWgH1JHGRn4er427UE3T",
  "key10": "vFWKdFaaybGRfco8ytMJXTGP6uWeuSc3cGDtTo17AXRoPCDtwMmSFJLFUo3keLbHxYWhDsYGQyYxeGPw2eiJatd",
  "key11": "46FcNP3Qt6ezV4dqkFFGAeiwU3Zsynu59dagnEQ4QfuqdrMRU1GCvqWEWsU6R68jGEcJ7MB4agW7Zc7fHebX7qwv",
  "key12": "3qVodzSrXC4gPksS7eqWKqVRDbDbLK29WLVc5crBqWweqg9wK7RBzjZydhsKWdffQKuyDdaDwSKZ8ikq44CmBXom",
  "key13": "53exRXepc7aHtrChWhQ7Kzm1RokjxY7duchRgkz7B4sFSwENUeXiJHpeeXh1EpXxep1gHpjYKJS2uWgxN5vSuKn7",
  "key14": "2vJz7wR4bdzH6kBJRMhmZeMQLCQN2gGAcJf7B93sBUwifao9hMiKqShT6qJtwE9jKsStbrfCWbyJgUBQbfKzqPe2",
  "key15": "3pJRh7ju4HWdV123kb43R4kBZ84vmZEA3CDKcK24fLQEzjFtXgGLkcnRcEKspjn8KGnGM3agq1nBai9zagD2yRP5",
  "key16": "4cNhpJKLGZP16WhgzC5RDwN2cuAKQpCssWEcoqWKJePo5Bdfww8YQEreEVG6kKYwn4ycLza9SrqBQRWUJrhu5X9G",
  "key17": "36iKpcKhDo8wXjk7rHgpjnHzte8KRB7ExeMGu8JQxRNsGeUxc5avtzyy2VsZ97TC1M6ckgwoYdWTELGi5N6GaZQx",
  "key18": "5hPmxP5AFw9XeHSM9L6593w3B3hw7wHe1u5akCqxQ22YDdTnw7GYfzetaL82QahmsUZSxKdvgyigxBLgq1gTScEK",
  "key19": "oai2WYnXrR9kSJYXYxdNr7n6Q5xbxo4ZYP6BCifJKwF2vksKFJFEgcgnZzZ2fTmqhJq4xSr7xHakoexx5qZk7vv",
  "key20": "2A6cZ25P9cgBeq86CvXvX7dEKhSEFEBaq7YySBzV3aLvDUspkfDGu5Xq926CcXvCkWLwDdbVjHgmQK8S4vKX8BWL",
  "key21": "4dEkHcqq1NvXwgabtSB2L1dCZYzUdhj6BUi4yz1DdBhmmS31PJueaYBXeWutMnAV8Co8FKzm8fErH3dD3CV7u3wE",
  "key22": "54K7M2gct6t933ufCgtcgfZzQsgvNFHTT97VThQkyPb5oixkT8N1xuvmw4whppoBD4sGzpxNnmG2z8aMnfaKCii5",
  "key23": "5vwStuaGJ4BNFbqFwvmcqnHAytspPGjBLhSifXrauR9PJxNGpYQmYjZKtbudRFbbAWyaBemBrFNKVXY7PtMAHE5X",
  "key24": "3i6fxGDYFRL4EAK43z5emoU2z5TpB7Q7xiZnKdHTgtYDx9RhzCQ4z9voNDcjgujqAxsCAnvwn4U3AXpCdqK3Nnx7",
  "key25": "21pghWa7yx1Zqk4pwkcCKzkSbeFJ8dtfchZjf24RMaTsK1voF9eLYBMCtvhXt9fpyrX6GGWdn9cvAEPdjTakQWeZ",
  "key26": "4JMqWT1awaNgzZCCyqd7FiCfp4ZzCXnWgjZPQLMs9AZjd2gdmvkf4CaFvg5uQFtLQpECqDjuLc3HcvUvjhwv5oEt",
  "key27": "2gjANrXqSvT51nv98aFxVeLKfNVVoJf8hEzfcURTpmHb4E2RX8sSia6M6fypiyAam9FBeoVp4GSWw8matiN9iyHp",
  "key28": "YLxzDf7w87JxTVFNNk33Y3mJyCFC1aH6ySeHD6HszvHXvUUhzdHjWcFsK9FXwtNKRW3WzT2JggE2ugZ48juKQDz",
  "key29": "juEMBtPi6NFZYrQgD9sFQYDQqiagiNmaWxg58ZEBwNTbfpp9a6FxgGueNkCJrxywCLJYEYs9eNKko9fyjeqcTkV"
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
