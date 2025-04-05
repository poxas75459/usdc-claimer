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
    "5PMpV8R7eG8LVfsNxAFZXAQthwzf2fHrfVzcjPbxW2ECMengwmskVTqRKoJMdtDfBRr4RTbiQ3o36WAF8Khp9gAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TnnqjYs3ymc7UUWgzHBjPiF24Fp45GYhfWzAJ9mJmNmPBgcfC9YRtkoNjuUfzquudjuRmSKxmh68k7A9AqeHMuq",
  "key1": "3xzN3PvNSx725oaQ7CBusJinELJce8uC7LUMcdG9ERAy1zUrDrXhrgws8WMXT5d97Ba9NBbMH4SX4pyNtkT3PdQ2",
  "key2": "46jufkJs4D1849uio1z7ZcfYcYp6mXay9U8rNpPP9KGdVHXMn8cy1AnSs6cc1HKvotGAz79u3Vkjc1ydPNimwMTb",
  "key3": "2uNQEQEZQxjwSEDhX2HsPQe1PWECjxudFJtQDQUHKvnFzXrZbETznizvkMHsw8vGEA8NYP5ZeDaazcqNMNtVTG8g",
  "key4": "tKQdS3aMm3kdeCrRwXdsmeJjJmJwGKatvaofooTdPFEp3tsdo8Sv7HGAuQHFHCQ4sUjsgkvWjzpTyAc9MvpGTaZ",
  "key5": "49F9F2zCmRJ1NMugYW2tEkr9wLys1hJx7b5fQHtt6yy57qHBshTopwqYpjxV14xedwon42VD2jY8KEpZFmrNuXX1",
  "key6": "AbMrDWc12pMHF2xZ4rcGP7RrCTNhsYbQRAU85EXhdSM7ztb7KoAhs2qLYWAfDVsuHyV5CUpBffK21h8jHYuC79V",
  "key7": "4i6PvbbahmF8dYnGfpY3rWXhMUKnEtZCRSkKTqCPZddhToXEsHngZkDiSbQU6JnA7Dx1R8EunnQt1t5wtQydxKMB",
  "key8": "49Ukw2XVxLHQQ1aTcf73CWfXagGzq2ZbKiHpUKjkNkq2RN37t8FGe4Xh4qK3pXzmx5xuCPHAy4YpPhRRAmmvyFub",
  "key9": "4G1L16dGSwnEpT99SCFfE1DFcGv4NiNaXwqUZxN9q8P1jk4v7x5mHoR93J1J8DTpoFG59NRuXjePTFdjRszhx6rM",
  "key10": "2bXA5DQZnyGkNPMNoXMSNe9VXTRh1UZ5FJPgnmqfBBkudzJCyvyENGXZ3RKnvYTQd6Y9vHmBChxvu2PGXTSm1iME",
  "key11": "2DuDz2Pq7qabXiD3tSREd6nrryapcSrReJ4WR8LCs7sQnMrLWdhqCcVCA9CiQak1i9CSpdLvKSUjQdf7FCn4So4H",
  "key12": "5AnyGrfE3Y9DKQn11HJC37YFc37P6iRGZHVRXARre6dgq5WMUr91GjerS7vM1Syat8Q6SPsJ3KAi8zcsBvgVf4gW",
  "key13": "3shLbza4orKH6ejg9HwLrkMEG91CBMTFmD5ruLAF2xVJuwvAxWB7muhEaVaYKtXdbVkiM86ptfcyEgAcMk5NXvGF",
  "key14": "2X175KoAddyv9irB2hVafDoyR5zZnRyHN92TvRk9BvuGdfLWhh3fVdCZLxkouuKRQ71814ScvdC8qynquEWt7U1Y",
  "key15": "3rZUjB8TTobNuAo5LP3ENM9fkTiq9BUmazxyo2ZHMq7jb6FNNu89RfkctgyKGQGy5jCKcczZJ8s844cE4XR2gUQb",
  "key16": "4aJSYAHKWJepZdWgmrwNuvmcCGpziKm4Mb5sFE6GkhswjQsaMLYaPbqq9iXYVXn8JnLqYZoxNXfsigP6UEPHZrpW",
  "key17": "5gryRhGc2P9Mn45o5Xx5Ye733hSkW8dxScm5JJRkTq1srS1j5zhm5tkbJYzom89B1EfexchMV9jk2zWM2kLXGyyM",
  "key18": "5iVeMvMy2mniR6CePBXTQZwRKajHSzwtJmZtazvmngsbxZyyJ1JH2B6AQmEXBZpVPQJ4h5PihjDKNCQjCD1nCY3P",
  "key19": "4fqBqC9Zz6dmjyEGLAEsPFXJhdJW7pfFSpFAq8STJmZdha7R1EduJW4v6gQiRhf1bnz3HiwDDg5TS3sE2hQJxbnQ",
  "key20": "wKjB71nHAxhGV9LpUMgvdamyk11VowNY4PVonfv7o9z7FPxdUFhWpSnatYdcBmWcFDi4nak4Mj82btRHpn2a58j",
  "key21": "5Yv3edfrWZLWyiXdtPk1f21rRrFHLEd8oumoHonchVJkZ9dotNFSsxKFA8gZyfGynFA8P57gao5JcTYGVt5r1X3m",
  "key22": "Us3YFko8imfaYZiHyyeiKhpEQ7UCvYM8CFjQtxmbho4n5AnaTwNRTXgUGwf6WZxbivuZqdm9T86h1LDA561RgtR",
  "key23": "6T1awHTRgmGGXv7vr9jga2ukXK6AjYk6LZJZ6SYxzv5dSvjjAThyrda9QTYJRzk5oH4QcMXcp83VtLYoV6nXqi7",
  "key24": "3BsYGP9XTHep7PCi4NMJwJyTwT8mRiSK7Ewi5oCeRDuUmVTVgn1aHG9J5DPqo2x5FUsmSHmxo1LHAg4ZsL8YUVRP",
  "key25": "3wSLwUuB4H8rmkGnsuDHfkJeUnB4uecRT59RM2csfdSinikERZ5qGUXcdrHwtLXB4Awfned5tLAyCBfj6RV6BQoa",
  "key26": "59KiSw8rACPk3thKxiHjTPc6vuGxX5g7JgBavb2yGnH52QwjKCuffbG8ebPPU52xApheaLfPtTNQSM3w3Re5oU3D",
  "key27": "5pVzh7ccNFybt2NfFRYvMHbbQbKaPRWRuMAAh4X1fCTjrDv72rdopuhUWbM2yc2X5nKzjJaa2HSbqB1fRxunj5Uo",
  "key28": "61gSryL7od71zpv1yoAw1vPY797b2JfFR144BMtzguhmVq1heJBRhNBZae1SwVbhrrSuutBV6duL4tXAEnV2Q2YR",
  "key29": "3YifVFecfEbR8PYEN1xYh774Wh6ttn4iZotF9Hhyo9mjQ1CkQEYctRyFJK3Na1d5KX1TC1ELdNLzEU5fptrgyoB1",
  "key30": "2mAajFyLP975kE83Z1HdZv5Nr7LEogtK7wonfLeJotiq6XkrYjMhTeNCFakZfZ59ta52zb52iUQJt2uDWgKruVLp",
  "key31": "4xG9Sw8jLYiNxZoiryB5a2DrGd4bWQ2za9wgP3kXiiQokFeMCG3Xy9MQ7uN9XEkHkLBuqd3dmqwUvDLDwd4iewkZ",
  "key32": "415w7gfY49VmM9W8NXyJMAAyrnXmEDHSH9RNbaEo3NsJMzh4LqnSTuLYiN3gjssrTGWJpnDnqZYdXiKS9CSbjpWV",
  "key33": "2Tmz6cAujqMQMvegzYrs4WYf1gP9XEj13x2pwaAZa9t9MGxGjQ3R8tNKdcyXw9r86T668qj4DJs9m1sn4KXdYoUw",
  "key34": "nNGS61ZEeLWHqU95CJx22LYfxjp6jX93GtjxipsBYXcochvSfpHBZJ8uKfcQBWm8C4bLLGpq4n9unBvgRUKaEac",
  "key35": "Gy7omoWWHJncCPFCEsXD4sKET7QwRR2X2fxx7zPJ96L3qvyRuTjWmXrAmiJMwJB8kU3199y2KieNhY2MoU2BGnm"
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
