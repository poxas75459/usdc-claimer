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
    "3NSF5oCRs6hd1rk1rpc2iqqLXDVx8DQaU75NXccMtQqTiN2A5TYKs5uoEtip2y6LXyHBBxvordGwoa51K8MMMrvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UdeDpHFj3xJ6h4ryAV3D1GdekCGu4Q2zCBVsnHQjoGDdjt71dbwiwCUf8sdWXN61URsUekAKsfBtmNmW2eSiLVw",
  "key1": "5vi58GYLciRXwgqsz6hgFoUWvwuVt9bQSKyFDLBqYw8XQ36V4H6YnBe2tenVBoASXf8j8ctKVpGDMR3LerVCb3zx",
  "key2": "WN9LStxKMA4uyiekVCFxg3DjmdfLGQBrdyXh2FQD7CRkVrcipx9AtctWBhjFF5psCx3yDkziPYnS5DXNxSrDzpj",
  "key3": "3uJWDQx5TgjVrN3tqsj6XncMedhaLvo3r2Qd9RNiByifWEzntZtzunLi3WLb6WvSZaUf6NZWxXweigvQy8Z7jemD",
  "key4": "ga7ynyNo6rVGiLzwWdqmMJ13p7A1Yp87PDrcjj1UvD9zWC7bAgEhsLiSPA9kGcLaXDqSA5saJ9J9ooodjCxvAdV",
  "key5": "4rY7fm9zbMMdFVY8XVgk2JU7toszbWPv7nqwu3CkjhKtBwXYhansktYeywaMX7m7jkaDVKMHsh9NXEJ46Yj22FjP",
  "key6": "579ptrVFL72NU6gJ3bBLB16xKqHY4mS4EZvjkfb5Rk5YA6BtQbbpB721Ujvuha2Vv92KePTfjC6CiAHxpPkzYCg1",
  "key7": "4TYcTYFJkxVEGKnqdCjNwaVwWs9Piis2745s1RD65k8HHGARHzc7Y1svobTac6phUWYNFkkVAsCSojiyvAbdnjdn",
  "key8": "4x8VsKgb2AZVgTe8VohUy42wwRDUx7qMzauPCfX1gnkGbrt336Zb8zPx5TRaByFQtSd57LVZEEuYAPiUvhtTWNho",
  "key9": "5KKBx382QDSjTJFYH9hi3AnXqCZh44roVePnw78UcT8YAChkvvbpQyQBigFAgiDEewzuYFgdCoC5GymKQWSuDGa1",
  "key10": "d1edKddhv7SbYMzqhLz6rypg8EXGL2MzR61NqWubZKxKBoU3U9vju8m7NdzXnq8jCYZjFHijdPtbQPYnxri9buN",
  "key11": "3KGT7z8WmN1aGHyHtyz1joQA4oaW6Ts4CKDKNwNmyR8rN6bpD3fH211b156M6mM1JWZretQp2U1u8cj4CvGKVFCN",
  "key12": "5w7ny4MX1LoQ3o1E1jm6k5fagx8qLQa98KSe7WXQ7P5Ljf4Ng2ArvVrngdhvQGadyeAsi8jExM1kjC9LVycRDJe6",
  "key13": "3GFctA6L4VTgpHdqSGFp4yFnQ7m8tdohguymmJWP4zz9PkaYwaoposeQnY24SYeejPDXaf7Ye7vB7dFdwUuZfdJQ",
  "key14": "3raDKpzJHf19vc4TS5PqUVsB4BdBtMX8Csg5vMjszEUykBgsDE3fWYWRfvtNyowqmQWU3Uaxob9CweXNopdAsfqX",
  "key15": "5mWwuM54WG1ULbs7v1xCCw1XMPcxBGBaJ8RxAjAZZuQtM3Puy15S5gjnyKhyXMeATTn8r2Cne38wDfVKV4dTLjET",
  "key16": "4hW6RZrz1NP2Ed2bGGVX7UqNfZq7DQoqHfrSQP9mqRybq94SCC9Nqokw7TehowvcFp3f6PyEHmNX5tboq9BFXZF9",
  "key17": "3iMg4RKMVCHM6Y1tXsooCQ8drJc9BwwZRLBVfSZfv1p6wfmeCYW5v6zmS4g4GTX453bw9qKWiu13nCe7RJmycQBP",
  "key18": "DVnyFokrKyHt3ZmeoKA1ozfk2Hhb4xp2dk5fgWQDX2zKeoaBzADJtvPWPvHo3XPPNyMQbpvKWgYwiLmjfXfsZoR",
  "key19": "EdRZ9Efik5bdsKGKZ6hRPfHpgP7Xgt5HQmPGPtXbA3HXqFrwJQYn8uLUYaA59oxUy1RvU8A1wc7r65VEkHszZ8P",
  "key20": "2k8ovXQ8H3yHpFtqVW7KiN8nGPTwKez3si6ZPHfQHP6HPTB1wEDsFHNwvnXoqEhLQhzMfTvKNx6zNQLnByXh7GHG",
  "key21": "5VgZ73trK9t6aLFMZiiDn7q6S8Lh6xoJkCbvhx8HnVEEQULtCK6jfzFYksH3aWfTvSeGJMju3FdWEML94FqfQ9QV",
  "key22": "5wyQFURmSWf93gBL7jk25KwC2oYa26LpGJLEbTCCig6FoKUs2FMqiLArVZLh69ZyEsykVvtSRqaJ9vKKK5G7THRt",
  "key23": "2vzukrFXFosCQgeXDSFa3dvZtLNMx6pFKVC6kEKeRk9SG1KPNA2WauxKxd64UEVeK1kRuNMqFfXgWBHP6Ndh95AR",
  "key24": "3UdAwQD4E7dYaF7fiURrB55QEhMShNPJaDM6VSnWoRoYAzqM5ZbuTRDSPu6jqatvfmbYD4yZgKHoQvHq4nEDvYMZ",
  "key25": "3NnPtxYUXatLAW95U3MK4NLNNpfksoqQUTLofKbtfRL5FWH35GzzpUrvs2TUVqTzcdt7tbSwcLruGNQPKuEtTd5H",
  "key26": "F6d5i9J1tb7umcDpLGzWwfZezbFFzCeHZyA3ZUEfMYSdS9ZhnzsujTsrsC5btPyR2aGkofcdxZAD62JLwGpa9fR",
  "key27": "54tsHroW1kFDUQTQajHUy5cjZKG3hFftvQLHqMnUEvzwJ3f4N4VcBavEefyxdC2wrCQtAYD3fP8mvM2KeSjzSERh",
  "key28": "3WB7wB8mLrp9DPoQKkBrxAEfi957hgPqKjgNE7ia8a3yZDw3bdmvvUG7Sp9vXSfQ3iYKkCSN2S9SrNC8akVshvrZ",
  "key29": "24ZRBgHSqzcLMtDXxENcnb3XmBxBoELHpmvB6Q2XuQG2czkjTzNHckbn1SunnhVqi49F5T5JmDU2zD9KeoaFpisr",
  "key30": "3t43UvoinQZ2vBAxjCDWvojgLKmPtRYiHPjseiQpUwTc1uUotvu8qtT1dCZTzgvPRZkzLa7o3MeLnrL4mwSJDdu9",
  "key31": "2noCTnXZLWaaVrjWPsXuXUbyXA4oxnLvtHhmjJ6eukRYgU7KrwnGfaRF1EG26unxRdgJVcf9zZyL9d9VtjtSMP1Y",
  "key32": "466RwQGnUtsHCp1MKcC9QJ3rPkVvpAyzYsHX8udoD9Zm7QackYPNfau3WA9GWZosMVV5vpZ2wpr5bfJPmyJrsJiL",
  "key33": "X7munFdxyHBTttt63yVYQ9B7Gkje1urfyvRCCfDveMsqzf2DN4knmJPpZK9et7JeTrU3W5noC2GxYWxczrswAGh",
  "key34": "tKfmtcsWju8vGi8YZUd9sPFhCx11qGxUkdwpKB3UMV1NnbdFN2i2atzNuUNiViFE6Cpj7w6mPtvBHQYDcwRmYzX",
  "key35": "3a8ddds7vz1ZiuKakJzfiUMcFMr61w24oM48sjxv5HA46C2StsHtAJjTW7jG8uoL1vhpmWjH7ugRTRoTArbX8yHm"
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
