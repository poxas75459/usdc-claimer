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
    "5TKXVQVL1gVJizdnPyT2LtRoziynSVdcgNtQ3K4ex5gHUHiWzM4WZCBVT54hn8KcSG77avLpisdxy7g1U6w8dVXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ZD7T6B4VuY83jyppz69sK2C3JvNYWtUx67zofjdmRn7ZvfFxzPC8TpQb76Ge6NZSn7CWy6qLWb2Na1AMTSnosd",
  "key1": "59ewNKuWSwh62yrtJJ1bAnA3Lti1DDh1TuKdz4vTfV7yzHrQg4L5NwfQQYqANzgfrv8gkq3PxRQNRFc2ZqmD8Jdj",
  "key2": "hG9BqhCyJsNhJR1cgnf6mYThvpf1dH3mnPpGTR5ujFnFtaQAMP1rU6msLSLb8idXJor2dUvkcF34sVAmMLHP8io",
  "key3": "2F29Kf5rZxHPauPkbWhjA1FBQG8RnMMwUd9xBBVXuuwodCPC1stEFmFu3tCxmcJWA4HXLLnUdLFrTbJRE48CdbuW",
  "key4": "2P2qezGWRq9m1F4qzFjNse25DDV5xwVn9hivCviheaTGkih6GyZE52gvjgobNFtBinFmWi68NBVPAD94oEHq6btf",
  "key5": "41YbtBquezMtXAuY3ihgBuKDPDv48Q4nBJrH6zUMF27cgkR75muaTxxKWbwfZdTXUQuiLhryGWsQt41y8Y94DXnA",
  "key6": "4N7KFJpZvRWmwBSSfCzhjnxNg7wo7AyUuCkCgRNfLTWe9dajtKsJpXk7APnh6vBuuuRnYB7zLstMM9TSSCdAFC3t",
  "key7": "2AodPrkVtWuTE7AWuGCH6jkBQyzsEuAzQfLHUuSqS9d6t72vNcKJbNVJ5cm4TPv3GXhjT1rRvFHhJ3ty469Ms85S",
  "key8": "mHNia8KxC1Pk8tTBuLhyV15SBTbV9WRbeCbq3N5mdn4kpznuja9Ta26faXdCnXU27hAi1K1i2MRZtxutr5ifYBn",
  "key9": "66pPNHJrAxhtVFnZDXDUZXFjYexYYhdQhCqQdLzjy87r2gxApFoDn2k6wmaafdDcqvUp4iPKzD6STsJwgHYZCrbq",
  "key10": "3FQ8DeqfpUA3UEMTNzCQtf8eWJ1rE3PWji3bXkkEAy3p9Dpuj3UZzZhKc2L8VLrjnxaC4pyXzHc5qKNobUHk8qfh",
  "key11": "3frH6rEYFnrgWZwwT4HRkwKWa7y7MRcKgEgdmfV1gfJh6Xf6PUkV7TP4kwZuAYcwWc7zNm1aGL9iKvjQDuVrX5sQ",
  "key12": "3LviS8Qw9ePuLhfxHvTtLAQqpnTFxCmGMz3RpbuDED7aFUskw3VRUAGb1KsRLWnvXPAVBVLYah1CaPHzmZumECXR",
  "key13": "4zWG1R2iWxgqgGdfM1Y2GbyP4GLDxpAw8Rtm7VFBnJcHyEzDqW4L4ihEu8gvSkKzoM7xs8tYVUNvFgkGa8kUMykm",
  "key14": "3R3tirKEEkBoP23DzApwdujdRdbq14DhH5Z3kWYQMijbF9fvRkPZ8uH4452wyAwSFUCi6QXP9Hi3MDJmfjrMwCEJ",
  "key15": "2sx7jd6c3E9UGcMKhgAZACKiizHZ7UynCLS7FtUwS4gQ6teoTJSftFYzUYyQ7CpnmiruCZymd3qMyu5xrMKVV3QD",
  "key16": "5BajVp7EPU88HsMs8fwmwBBhDBVMFbg5Z6X7o4vXxtbNCv8sGhj3EPACpFZVzFm6gZRxxJqCVvNX3EzPaxaxM9M2",
  "key17": "2mA5AKj7TnF7En2BZ3epZwbRbKcZgnWucknqGtrGdcMHnWaHYi5aJCkLTiNBpigx5xudHStYThBD1T3gWqbiQqqk",
  "key18": "5g1cp5S6m1kUwnJCwYETJpvckUydku3EBsXAx2g7Nb8NorT5qasijr3ebMmKYWtLVfdm7hA5J7eEExioxXrkK3ek",
  "key19": "3KBhmeV7j3JgTPYpxiuMWXw6tkucMEX3T9FfsshEoJtSfraWHzo5g5BvwZKAqhTwxSFV3D3RfRVohYYbDDXgK7Ci",
  "key20": "4FaAeksU8EjK1YKzFu3gJ35o6YqpnBd7EX95qkz8aKALXdeAxFW4PPSGKyQX1GetksHp6D8VjnTTHDETdMB93Mg6",
  "key21": "5TsSwQueNboc1MBjquCkztioBKut4wwqsmoAsQWkzbtgPnpKLqmd6seHhiVxb6yywTwXbVTfHVM9sDa2JwvDpcKj",
  "key22": "97p8sRdfrDS4fE9AYn6JfqwFk6qFDpj8oGqNrY4HYKxwa1NjwRRVnNCVDHjuv4jasg5Jn4g5o3sNJC4Y9A9QGrv",
  "key23": "KxWxDqFBDVrzFPkE5reUJg6auGknAPg3GQRzfUWXfW85SJczygZ3zjXhStMCgtvM8AWeqr1eELe8GRJXLhSDX96",
  "key24": "3Swsh7Kgh53nfHTso15P7c2bNhN21EMM6b3PHzeqyhcTbzH6D3KrV6zNBHAP2g8EvH3P76VZdCQyd9DAN5CSSTo1",
  "key25": "5ZAe2QWHitnTpKuj9raKUjEWNGnK4avMzKMwdwDjRikXVDMRFvbhwtrvZ9bXMAMcFSR2Lvxz86C8UaSZSgtP6WiY",
  "key26": "V8p1u1r67dKWSdziipCo8eKkxXZTLHNf32kmGgA3RrFSvEvwxpB7qwQXhSHfqqTq427x7iw7E6NqEtU5CevNCX3",
  "key27": "4tVxSefnj5PGoz56MPA4VQ1BqBkE5dRbb8nLbepj77YLehHB29HMzbzkna6BZzQcRgopfcVroxSGkvfmW4CvjCez",
  "key28": "Ks9odk4KFQTvuykv2pCo7mN38WdRjxV8rqs9UJT6b5uWixw1RCuzSCALMpjhf75Uy4NbEEd8omjNocz37wvCEKt"
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
