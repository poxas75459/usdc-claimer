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
    "5ozhCL99y9LkMYe53Sc3A6YVZCofkXJS3VQKrBaiPbdxnm32niFvEdeTikXFUXWikgY5SBP1SLwFsmJF2sEVBcaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623wS2ATDGaKRvdgKUHrVSwWZze6a7FU6vQ5P5vgesJjBJnBVjpZXcunD2qdPE9zWkK6BdSKxV2V8ipoMeNaQ7zM",
  "key1": "5TBhJAddxEX8eBuKbo95Nx8W2ctqGoPEZy3iR87is3ypqdvasHXRkkopYLr5MdUDhUgKfrwRg8tHQiSThAPANc3h",
  "key2": "5qowB17JAqfhBTDCvpucLA7WsuGobsvYS4dbSCrgaawPiEY3o7hfnpgctU6TVQ43t2WqhVXmAQnSvNPo1n2awWCj",
  "key3": "1vR943MMCpsvN1gypJYuqPQpbpM8n9xE4wDv5Aa1RUjxW7s1L8weANifU48ApudE7vw8ms9R7LU1dRyVumBMajZ",
  "key4": "4xSke6zRHwBDTJn1be1zRpw42oDPiokT2CoyHuk1niujXecPkaSWCM4ezj7KT8bpKdyRjGhShHQtRcHtnJWxK64E",
  "key5": "3HHXyEjCCd7QbcTEXTp2gVAXrXN6BvHJwAmU4Uis3qvkZwfbrNHV1Xf9szigREanUzWUzRihF7wyKVBKWeHYHPJM",
  "key6": "66MiuUp1tyMRwZuQFgbVHQ2i9YZuQyBoUf2xCXEmwzrV9Q8NyHD6zw1v9dYcQcAgG6Zzm2J8bxGyQenJjH91bBQg",
  "key7": "2XbQaztMZTP4doLjyug7dpPcLtLrv5fDMcWdkCnbfC2wqiipKWyZFxCPtRENUHz25ukrYPgjgb9FfRYxc7XMVaqr",
  "key8": "4S3wBKZwGodiGEjcVQUv6QoFkoNNC7jWmkjuyCmJnopZD9D7jc7wrs72JHaLk9JnVz3Ja42GgJwwXummf1NG1Chc",
  "key9": "2jw5STxGJhqx5S9ghBr4c6mjhbZiRN8jCRnWTEXjXDkMoS9mDzvgRqjwx5SvaQB5imUXYtc3nbVtGfYMiLv6rPtd",
  "key10": "4v9EFhsiiMzgB3i5AX924rgZFJoW3DuZ82kzUU61LAD5w1DuEe522hHzdPKQeoQyZfHJD4jSReCoGzud5y1SKB23",
  "key11": "4v9x2arYqtuPSXtLEr1e3D63vEk9w9Ydmkbe9Judra69QXmjQrCaRCmVgdreKc7mfmXUZ43QsefircmapGgLvwej",
  "key12": "3bk5gx8JgrrLwkwMx7EphjLwSgGfef61D3xb3fWdivv4QfgsKd86wAnpn6ytjnr3tgpWAzvkmUkqMmi6DPTJRJTD",
  "key13": "3Ru2RDVwvPNDQ9nK4tLWTLpTNwJ2e7Pr1TrVKZZWD8Uhgwhjg1ABY9SraozapGQ2uqJCsC6nwosqsVGNi32PhGMR",
  "key14": "2ZCL6ennJoCq53Ka2i844wooNwfv7uZR6xJ9RxzXveRSNFhqCT9UnAyL5fmMe691Qv6ZN3Qb2WBfWP7cXTPfYma7",
  "key15": "5FUvepmj8icPrWgZKhALaYay6F8xSVkTUSRgZg9o98rrvfLrnRKb5jfwFnH6kq6MgS5jYYfEZ7D97X6N1RqJgL51",
  "key16": "5ww1wcKZAK6tHNNsVn1NZ5qepM23SosTVykBRNDmrjys9yruTf2Z1X5gctY5PoVEvJFyDF3cFY1g5jyRceq9f9K9",
  "key17": "4Wg84ruJoxddDUrLtxsX4WwaX6e7X4oCdpyDqZUcDuwgVQ43YwRZqDjLuCFfLfrQAcdxs8vxdtgEKhrmp5sMvbmA",
  "key18": "5xBT4wVQ7mwKSdcMXaeLEGZGZUegEo7HhJBD6AZvZP6Hq44ThqYWsCH1vkCvczWGY5YmCLM8G8cZZaqyteu1do1X",
  "key19": "273AWv6QTd5Q1NbZssX2x7yHSf3NbQLtzdosteY8GmoGDjiro1DRjtwadbHQrxAUgaaoapySkeJ78eqt9vAiJbhr",
  "key20": "GFbX6SCPZCDj9hwP2gmpANFh7ew15AmDKbWWsWHGMUQrXaGyxLmck6vdkoD3dVQcdfjFSN3Bxf6fK3eD6tqRdxd",
  "key21": "2bAECaGwtU5RiNhEjVqhMWfvGG88tudj1D6BpuecDLJM1KYhtuoJXnxeZKSCRZtw6hPjsykeDj2ESj4M85Kfnhmc",
  "key22": "3x9euhKnFbWSTqHT7hLvpGBEM8kwaE16GSbZaJM9pjhWDhEqJpyoXsYh3EkGWzLmynrxPugqC1mVqMMCM3GCYf62",
  "key23": "5ZDKbtsDygrf2sPHZFfEmuhrVLg4YK1gYtNvMGApuxRb2jjEtwUNSc1NR5z8G16hUmqEUVP4xxzgVg7nahjhYRNW",
  "key24": "5zdvifz69K22m8TWsHYE9hBuLVfMfspa6KtB7kG4i2bYirYTUWpz6csCPEKA4wLrHocmm1njuAXAUxHwCcAYKTnR",
  "key25": "3PAQwVYo89pDtkxkWHGicpa2LTs4ZEJYeg55UcZCDExr7qEBYU754M9Ny1N2DQL8jUBM6qHPSqif8BGfitWTVtHZ",
  "key26": "mpPkM5CMRySUmQ54psHBprpLsoZwBh6XqLLdcRMNtpEouprRWgS4Nc2gvqVtPAmCMQF9onbeQ2o4tJ8xh1bSfY9",
  "key27": "QW7mrxNfZvd2XSVZPvpyH5ujyk4fQ9oNXHCtgJpriQ94s5wHxHf6EMjhcrR28ydgs7TuAhoLjts2YbSeGLUavuh"
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
