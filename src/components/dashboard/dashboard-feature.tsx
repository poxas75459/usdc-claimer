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
    "2DELQZfnoNNgapeBk88QnZCnfaPoeAxUZpKS6Gp7kjyHdb8wWHobSeSSzB16P2z6GggXgftb44uNe63emsx1oqgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8gi7SHDNtZKsRncxTMHtkaiTRJ357jAd6dESrN7pjEtePPa6VFkHdmQnoEuQvtR3fLsKPs6e5aacZ4EQUaLBL6",
  "key1": "46yrpUMVx4deruaYq6ysCyB7HC4gKZPjWkD3ARwNHBNVSrcx6j3q9AaAtjF63c3Fy1Kx67G6NXL4W4doqQF6Ef5c",
  "key2": "51sRQgnaxuvUwg95qSe8HatW9tR2ZafqmWppFWP42kZ4fSK8ZKr6GMM3vXXFThhB2zq6qGeEfSRs8omM3cz6gfkg",
  "key3": "raCv69eteMpATftCCTKy1BKepQVFcTjL5AoogoUD7DceA37c7s4oeDqt5ymA3djgcJgzmw9GvDeRV7dmFidisrk",
  "key4": "5JJzmaGSbX1KTjwHZNbouFpJThqBnAVpNBhWtcyCVULo3mqiJDitva5T4nZ7cdSCH2utjM9aLZxqg7RR6yRdFU4E",
  "key5": "3LYPqQn1v7N6zu1n71DVQYkuUo8NKeZNv9cXKAvd5v8jKzNeWVJDb6CodTw6ZcGmUMcaiF1b3XVMw2mV8ZaALBBn",
  "key6": "66SyXJjLNWWxhsigKSxYr3Hy4uTDNKx76smhjri3rpiEayo5oGxdBt1KZ9JRGo1yBKB4BmGNwCBtxPfrYA1sds8X",
  "key7": "bPBGAVG6vftCn83sXnBiTUjdzsPUsQrPoGmcYKr4YuWQNWL2qpecFito3zX6rXw5zeuWXNzPQrjs5BmMTw8qdYZ",
  "key8": "8JXe454LzJR7YjRf3U7j6ajcneasgSj1gW76A8sGQeSHVoEgqc2zq4txCW2tPMBkhAEQUhHVVBcWB6xGvvFP3yk",
  "key9": "2zuvPAJY4AzkSbY7kqpLQRxMxCgf7GtWgi57DnjwdbxpCdKSoahZj2BU3SmKGcnyjwv2uEbTQJt8cCJmGB5U7mck",
  "key10": "2N2Wdh7L9sAjrL4h9vvuH8ZAJC7S9otLmfRHDxP7PrukQBCewHPhB9H3gvTqc9oFcdodHVYypY8sGNVQmt2MtY1x",
  "key11": "5vxYsLiq4vmT47Lb59ugH7F3wqRvEx87PN2eUUHEbLAADzCWdkaNW5F9hhth6kt3qfa2yrWCzg1cE9FEMkkG1zVT",
  "key12": "611zT39js3rds5MzTDkBsWE21q43KjzqnPsp1sZfCkNHFb4rj3UY3ULkNoz4QeamgJD62h9phkecbGvZo4RhSbCj",
  "key13": "5gCu65nw3qaXyypC5d519Ys3U5jFgNNc97MFbbuCP2KkTHaiztrdoWyVtmVuZ67gQzyAyLMQXpdbpKpsbhi5ZUjv",
  "key14": "3hV2MQJ1Fq52hqi6JmNBgm46MbKEgx3S3eSLXd4aRg89xnLyMqPCXhjctpZh3iYUHv8DaaZYWJv7yscZJbfqFx2c",
  "key15": "2q7DBpqDPDvHjBJVjtYS25PApYoPNdWkTTMTV4DDkr7QSnL7WYHzeUoqnnCvzBojV7c6Vr9wk36ZsoD6Xeaz4u43",
  "key16": "5gyUmWuBcNNDQeuQGiDAGQPJgZ6sKUBWTevYE1VyiBwoU83PfQHhy6byAdqLjPTQFyJwfk7i1h9wHJaZPibQ6RUB",
  "key17": "2vz77RQ8otnmYhTg8AZXNoBdEVVrfyJLjJJxpgH2nVet2AofDoQTscqg3sfq9Uju1Qvc61SJikSB9RGB8QeyWjv1",
  "key18": "5Z4g67hz6o9REBidrRjX2sQC4fGvt3sLmYQ2LgB5avqD6NKeuD9tTLmABZVjorQJXQUiepU8J3bfe9Qgn3U2Vjwh",
  "key19": "66ruAU8GCMzstanS333EhmkcZ9xMeSV892rkdNFnAdMXmgZ84nmoMP16EvK7BZMs1DrumhfbuQt9F5uMLzxFYoyz",
  "key20": "ARacPHNwrPPpnZkFk5KL6nS1sYodDJLqxoDj1kPbujMtoZBB3wXvvjH9AYUQXXRCTrAzThUh6r6FCTQZ8V6H6i2",
  "key21": "4LxuEVEnfwnUUGmCP15XFMEnfPQkEvjVPqkJyY8P1dvwLCSN9DZhqBNtGch4g4kqZ6bn999PfD3RK62xkpvTVEBT",
  "key22": "5paQ9Eqg5HA3pLLD3dLu563r94Eyut6VvusSmAEgRpHiGjfR4GzmrUKYx3jWTqL57L6zFzA9pBHZi4ADsezJKwbY",
  "key23": "5vFJgcWRK3um4Ck6Eb5FTyFrbp6oPehe9XooFzcoo5fArsMETLAAGkpXQ67Ys3cGKfBQQ64ZWfXupcHaMUP7oq7g",
  "key24": "MHdGwaQhM6ePdKJt4XBRzWY2XKgQf1e1kqEK5DSrA5bUZ2WRLozgmWvyHhYE4ERwrPrWc29LBsJaqx2vmRrhrjQ",
  "key25": "3jK3cLvshzyMUxSYDKVwLieRpaxwL2FTd3iRXkLpkZxGi3NkseaFom7FBpnAbnfARLvSJxPTXk1eS6TDux3prnyx",
  "key26": "5tjK3Dp5vub6oyEm7s5hLjQKzhU6hAkpV4EFTdbydEmnAJSKyECeTttvCYcEdzytoZmMBxiyjXaJTSmFdc1KcjoM",
  "key27": "3nP6S5vNJcV65xq8a8hNgHxyw43gSTwNM1cGgfDd8YzuKvWYLVhhWwZNn542qJnN6DBrSXS9mVuhRmGQz2GjN4Kt",
  "key28": "2yWtvfZkHhLSzFE7CSuWkLxG4Q1DKXw9tZFWiYy2kvn5bcEVXPwvqYR5febw8n8bkwxjgCzD8MyH4SCZZryLKdMA",
  "key29": "3GqAVcyyHNgFtsnetYTsKjGuf6FvEtRJDQ1A22jrdwyXTspG1uxeVkSsqwNmSreTh6hxrw41wscE9mAxrUzq6QoA",
  "key30": "53axywB7XajR7pXeP5bU6GECJ9BVpLSqi1AYporUyD1a2XMc4vMZSsr5XBcZndhTcnnKJMXkJDLer6a3weHsLhbj",
  "key31": "5wxUEKgN6GJyjTWVkgUN6QmKDydtzt32rZ3AD72cT1z3o9qV1AuQbFX9mm464Jwv5ygXvPnbLRbqaVBBW9ZY5pHX",
  "key32": "32K1xwX8HKiNSP4YmmmoQBAw7PGHFb5YgV2YjWnrN64RYUQwnGxkzbhNbhpW2MNC5jcbPdy7HkDLA6xLMCh4Mihk",
  "key33": "2df7VZw86dt8xZ5s9ghxx4etN5MyNkxAgSqjb6WHQiribxMWWqBd2aCWeePUoPFHFcLAW7kCfhbEJpeNFzH8MoXB",
  "key34": "yxSh5dWACvTpfnWhKRyCPzbXJ9QhFdHMiQ6jAxiGrw6xfFrpL5VVMXHKrKovX28tMxwWP38UoAWEP35SvxpBjgn",
  "key35": "28zLQPuLtDKEJjAz5t6hgCn2fFpvAT3pD156t7sUpUH346G5DQwt5CpFd43P2PqqgqZkzy1YzWDU5Ma668XzAXdw"
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
