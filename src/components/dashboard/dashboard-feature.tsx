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
    "fU9B125wF6trfzHhiB9MKZ8ZExD6nkjvKmG7Gi3eZXywj5VDLAmzKH4v8piT6BnqmCvUPJZTLZG84VpgWezJfir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FgrPzetc3otbVUY2CDm8XpL1rGhP3LeuKsGN5Tr2nRUbHqQYiV9tx77jYhjWKSG6aLva2ZXjzULxUQWMvgepcU5",
  "key1": "5EVw9wEQjn4DUk6PrGwjdjRe16ggZArm1MUrD8MoLvfP4McpGvJ7E8p8owpDBQBEYz5SQE1sfnGxoKTFL1ARjKmg",
  "key2": "62i8SGvbX3xdeTeBz1hSGD7h4j9gvX97ZG21rzocL95GA3dvrqBDnEoBrhBuA6vsYbkXVsyLMLMNkA2PakG118Bp",
  "key3": "UwVTxYFMeC5y3mGvqLdv9TZQjaKu2D28LVcUEBiwFWfSDiCcUjYJ4cD1uMuQCtRSE4LyfceufFVSGcBxebgcLK1",
  "key4": "3HVK8Aert5ByCLntaXgHbfzpWGFjQuq6ChwiNmgv1jEZsHazjJW3o6DogwdgMoP3Bw8cQXvLacUTJLhUKpAqR2c4",
  "key5": "22v1vUpfWSdCH14UaDJbyVHpED39yDgNhtoQNM7oT6PTvtAq83dZdoE4bGd2c6kzSLDmJ1WEqBF4KoYA8TLijGMG",
  "key6": "5zmMwonVEFFTWfF8gjco5myEsbKTyR4dHsjxq2CMovQd9Buk4hnH7fw2Nmpzk8UiFtK4jAuapK1xQT7ypTvB4te2",
  "key7": "57GRFy41V2gPDPuthz4sFB3pdQd8jRG71KbVFLHeQgp4KQGscxoWMipioMKSg55uTKkMSR9jZcVsciPLReWzjZyc",
  "key8": "5rPS3n1fJukh6bYr63yTDdR38DGgsfp8jMHo6VEMSAfagjymypnPa7asRiJEpW4cBJ59wjwJFWVk4T9vxW6356x7",
  "key9": "4KAv2EKn4YYep1ibKjq5tZbKNWdkHeyZEJuB6UP29kDgbNpxNJb1Ct2ei76GfWq2CgGjkeWt7xFTCQ2AaafTxDtp",
  "key10": "3SUn6KNFmnzKjWJZ6dCoco2HciDAH3aZHq3TBDkRJDqUwLKU2tgKvj8zbb8dgPgkmuXWoVGKMRZT83uC6MF4Q7Ee",
  "key11": "2Pr84zaDvryDaH7DxWhUdLuLzA8XM5k5aWrXXfkW3uc7txcdwpt6PVtdKsZkDxhwiGMw5NnuuGzmoYeEhkaHAYpZ",
  "key12": "5Na8NTRaTJPj5NLCjJGQRC1EmMfGm2vcaPSwFvDEgHa926yfs8M15wLLdDBb2TndizF2TAfN8sx6gMcX7h7XDkQW",
  "key13": "6rqBgdh9mhGq5qtisMr4pzLUnZBLkvFd8TvoCzk2aT8MuQueBLEPy9bMhGUE6KfgwAJPXvLZWP4y1BupJSygL4Z",
  "key14": "3WWpKT2ofTjkFUiSHCMpW4Q3vwmS5H79Hwfqf8KnnrCnymAw2uvFP3p33Lr7obohj6FmUdXoZWqTvfgE9gFnSMVE",
  "key15": "3PLyPVJUGpmbDqa7HKvbJeovYirCWQKSEJDaqdB7WGrSrC4V9QuHZfYjUyKhNzEzDE5NkrdTD8xifHSmZJUEWAKz",
  "key16": "4CtUNkn9DpJkJF1xgUDxH1z33PfzyD4xMYBCi1D8HtwoCKxXSHyXrTJRvxHXTpzmUijP9Uw9JAf1KyfW5Sy5WVpp",
  "key17": "55Xm5gftssbAsneTscWPP6YQfvRD2E2CkgmES2WswJ7gGrbpdtVBH7ANft8aV9CWeN4KxSWneXwk3vdfoYjRhfK1",
  "key18": "57RCHsCJWqhfVZkYxUYd3Y6N67DMJaLkUbCzr5Xv8tdmApkon12jjFR6UzZmPBEsYbFeEMLtm4fxSHrZYMkLr9cg",
  "key19": "3yFPjHZvidZmJZCLT8gAyBYExYUi6NppeUAUbPLfsafYEGM4AwJecQTz1L1miwgKu8kbkhLYek5MmRAQPcF1ZtrB",
  "key20": "3yKc1NNTr6se2boK7ySssgjgt7i52fnqtUoQJewizQ72AFoFJktMpqtsY2VmonvvMai7TnrTys31iSwRkmvBdJeX",
  "key21": "JWAsR2bAhS2zow84eaubz3QN8WMYvdB84pJobqed3zDNT5j3wzmvsTZLAf36yMkGS3XefpwTMNB7uJaLLJYbrvw",
  "key22": "2ESRiaxDTKUMhUiWp7kHyBUXokxKQxTA9bh19gjcEWLaoD9NVrb6DDG6bxEmPdZDqZBdNAbogrukoERGgdSY8avL",
  "key23": "3fDxo31o2yAtaikQofEPUhGGaMqRvEKBRaehQnqgfQuam6LEqGMsLNErnjGytnz2nHbhbbXy9irFM6uAMYw8FiRg",
  "key24": "24V4B4J1ng1LQYbPpRy3LJ2f3inXhj2mSwmHeaC89fVFygvNbZxPEMWFe623Twrb5E7EBvtqigpCUiXYKjTJtBBX",
  "key25": "3CuZqqWJGbSVmKQiEKmneLZg52hDHXZi5iFac8LLzxXXicJzf9UEJS1oC6ntia11CLHre9Ka3zfCBWnsL6r66GRb",
  "key26": "4TdWZZqw4uaeeaGEMMZAnAwk4BbKo9E5mhLkrdkkugBhAqEyTxbUdr7RPqkrMWv6uBjYjK21eHxw9u9VNGbHvoef",
  "key27": "G9GPoo1r2LcWWRmhYrjrKvPL9UPXczXirVzYteNbgct7sRhvqgzCmWgiePcL8xeSPrfj63WAeFeUmxDFWxStf53",
  "key28": "5ioY3VGYpnCx6kDcVCKB5UKcX6bDsd7C26Bi49RqSjpernwqdL2WPTomRUAvLN8aHNrw7bHLskoENMyt7i1dzcjs",
  "key29": "7szaQ6uTNRG7RMmEWGqTniQh2y2onTLU6agH2hKFZQERWJBFqZSbQxE9M85PAFK5jvsF7aApVW1DHreHdPDxbue",
  "key30": "5LZq3J7x6A2n9A42GB6x72gJDWHQneEfui6i1y1ZWCsF2EhNyotdHvWFi93A22gRhrpvFnkwzQbDfCPNnu5zy5tx",
  "key31": "ypc2Ct9hRuVQehJsfeUzFRmXMAMPgB3Bz9uAssSVsbEAKR8fBTJ92QWSwbnSKFJsUdu1EfLsh7niT1p7d9mhaAv",
  "key32": "2NvyFNNeePPDp1tkAK1iPWUP9jXa3jhqT2ZzFn8gTVc7rGhWRATS3wgfTCpFYroMq7o4EZ8NUzXL6RHK1syuK3Bb"
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
