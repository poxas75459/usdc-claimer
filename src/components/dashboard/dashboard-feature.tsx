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
    "34Cz3LHH3bXv2Yq81v3dTV1Qg1PsUAdn4b2jNw3XhDMdVTdpN4J7iWTB8D8Lb8wrP1HHcqfsUrMmcbbdGm4xYbsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sNQytadppEnd4XYwgjFjgeaqZjybg49SVREqp49HeR6RbGK5EcArJkbokPFnJWknifVTfd3Y257Tr8ayXaG4La",
  "key1": "m5agHUVLo6fkFjJESp69A8uoSzzFeQBEVaGE6Kn4s2neoQWJ2aZwH4VM7fDjVQCqAARrX4MrQK41bK267dE5jK5",
  "key2": "nahWtBjYH7EA5eakeAZzanhhUGVd1hqneo5aBTGdLqnFqbEbkpviuRVSHjn7kH24bWZj4apyhz114dzXGpyeGfJ",
  "key3": "3PoEvAQxV82rkU25Fc1WPVRR7xCSetkhZ4QCnGkGukzeSsLSZ7QMzkBV1x3Mi4GSEpxoFxEj2X3DKFkYxihQDvj5",
  "key4": "5VGWr9SyLLwpHn69PtfULALsGDU614NeMySXaQfHrZUu9grHdCD6v2KKhLLYhwQhVCH7C545Fi6Fz1CYVTejEZ9F",
  "key5": "3VUPKsMBBfPYLCjWrfo9DUnSZxagzmrxiP4WKHve9jpSUwarfobHx2rdVfSG6Dbjxno6yMjb7TDqPTGutMvXmzct",
  "key6": "55r86A6rhDSWh99kh6372xbaGHANqBn7STuSWFnM6kgoMTE1H7ESyJYU5JeoZ2kZqYTzWk7FHr33CVgzqft9DyyP",
  "key7": "4JrU8Cip3J7gR7oETSvng7BNEr6MhbNniGCEQGCrgo2ZJxq9uEaN3pC8rYYUx7tUE5DMbaMdYyLpV5GWzFiY7BP2",
  "key8": "2WBcaNWX81N8XGQtWP53JuTsuCu7vMENa1Yx6i6F3op8K6Jti8qs26aXoH51ggq4vb5fp9Gf2n2PVh1oDSLT4HEF",
  "key9": "2hPzcQUWcGN2yMJJRL18Fxm6vFPdrBtDKRbjHDuNca1nH8AvVUsRCS9BYvQWUHqCGeSdxaZYjTBYD8qECkYARrBc",
  "key10": "2j2UmZvF9uhW7ERTfZmE6h4uaNVFHhhJuFteDN6sGUvZC6GzLLUDYg2VexC2AK8aTKXT7uPHSfyA23tDNx65prG8",
  "key11": "44z9pSBFmzr211XGomaTD6BYjVMmPU786binMLUqMNgkZQtWgojxQTrntRAaDUThPNi9r38FiuaS2DQcZdNXiiq6",
  "key12": "4G7gNVGtyGKU4EsgS4gcRYBtrzAVRk3EXrBNa73GEhXR1a5P1pcrv15dLYw9G3uoykRAkdvEGcrc8ePQFsiK8bQm",
  "key13": "qFjxAt2LzYmiVsVJ1xirqpriUMC7x9bL9oFuGjJuZ3RNN2iuTPvGY2uqFvfz8K2xuM3vAKGSqdjRQw4ssSp9xij",
  "key14": "4oadES6grD51vJq5aBMp5LFpGFDHjZKBUUVB1n5LQ7VRMCu6NcwVbCk3JB3hvd97ty3xexXNfuihupJGUwYrkhxk",
  "key15": "5ssFcqqCi6eMUVkg47RAJzPJNRh399AwKVGE4WNVTMcyzcqW7uMhP2weXAQ93zTeFWsS7bVzyqj9GCE9iWoPz6qK",
  "key16": "5gpwSGXeqx7NJ8jogzyfBBKg1s16vciP7PBMER7oJy2pxH5hrDaQXRGx6iw7mDvbWfyrKTs4huPiFs3BVjDmh2mX",
  "key17": "517NB2yyCmWCV9V3MHqu2RP4GvuAJzbE4913dYhebC76t9nmjdc76rYuDuDNVBaRod765bK4jmcX4QxCnaYf9DrH",
  "key18": "275SgcqzM1AQdZDwnSqY3GWtZPNa5658v7ZRxVWibu6rnkZ8brUAQxZWyJ1BXPnSTQWAxNf9meNvjW7unAT3w9gz",
  "key19": "3czkJomddDj8mJECUw6bXWAYKnGzN5CTmqR4Wo4xt4dyjewTX9apJQpkvQYStUnjLwhtEKke4ApZu6qGtZZLXAdu",
  "key20": "2QcfDvRbaSYeP9CK9f7RaGMPgWtwsXmJGf7XN1AuLR8kQ7iieDioa6f4nMhKiXoEhMnJkmwJWBYDLU2HmBxBGz5y",
  "key21": "2KQcy7XWS4p5e8xCJFncMWHHbFniciu1D9J5epp8a9qgiDb2GB2zXsm3aSDipr5eUURYcBY2cEvaqyYRYRPsiNPD",
  "key22": "3RUxBFinYSo84pG3DDGTdL3ZNYtu4nxZvopYNGUeDq4cKiKxsetBpSYMPhJd3ErFe1ZWfGwcepBaJSjQoKcdXxdq",
  "key23": "5N2E5Z5ggmtSnzdCVhaS8J2LCZBaapjD11ybZyyyUnekHiKYXNnB1CuSXM7KjusfnGnxkiD4f4ctMa7a8mqsjSUN",
  "key24": "2WjAahVFV1D1qm9A58JwCKPAu5zupzbYxQwDtKKSqVt2SDj4XK79Uyvt6YiVibYme8n7Ef1GTuJQLkVqfsvDerku",
  "key25": "4Ap3Hg8h6CrRCnZc4LPxbA5oKBuCXrj6ieVd5whbaYzfP7YNssz1pU92djmzNvFZsGkDg8QnuYRKfwwYr29yz1aK",
  "key26": "e3bexJ4EwsSpDp2uGamyKpY2cXC8Eqox4RJbuDoHpv1vQzfrx9FYhugro8f1kUPmJKFZ3U6WMBabmZBjcGKXc8J",
  "key27": "iWHme4nLaXXp7F1ExnzAi4aPdpW3ASmxcWmRF4f4vVMoSybh56wHw3yyLbKVn3bugXtDjSj5LjRPCD39gQ9fwTx",
  "key28": "4TasC1NZjFKFrTdVbt63F7LqqwoGpZhtr9in2FkNk5Yj6Fjix2QvrR3gcYp52q6YF7BH8io79DGZvzDmwsZ3kJ5a",
  "key29": "593SeDp1UEsxA4ZNqdFd5ciYj5sXjmqhmeesFCGQGftmFGfpFF2cyPvXCEiVP2BML3BVEmiJ5v54y5x7m4eW4VZv",
  "key30": "yJz2nPVx8GQt3pJQwRgKKDustGsMFKEy3HqhUTgcXx8fwtSHp4Vaq7F8aqzjcuyAYdMZWAxZGBv91V6brZaHxHr",
  "key31": "3aNLMHtdsaxYnFzNfepfyP9WSDzLyTcSB5ydpdqUGZL1ioewAoWDeHufVytoJ4zLzhjARL6Kq68SUX8McR9ski2u",
  "key32": "3cLQPqAb8PUwT86H4WFPshE3A7ef2qMbys6vJKA6WSPRBPFM1TdP4to6ap3hQb1be8Rm9KHLuuNCyGqJHXgCpDp3",
  "key33": "5zHAayFPrd6BvZC6GUWbWgNc1L5rgVysEi1geknZniUg8ebG1GvtF8baJyUorGr6f5NBERJYeiZLwPRYwQLj7H76",
  "key34": "5sxUY1a4pQcRLkti8YAWoZmwd5DW48vZCEiqk2cZ7EaeRs2x3jKiH5tdypFiT6EBfiVEdBhAqoWtANKnAtEUdbs5",
  "key35": "4Cx8iYjtwaEVb3jHdHiRtVzXByzDYTSNrEsjiY9JbVeuqvLqLvG9vAQQERMVzepbq99xbMZafhNgfmPxbhPPu8v4",
  "key36": "4A958VZvDK47nKWo5N5VRkyfVqHdBXRFKnCrsED5zeYSMvowBtXZj9jL9EvE7cecoWq8LNKrQxdpM3c8x2nbZJnP",
  "key37": "2K8ohyaQBwYz4UBk4j3VT6jh4aaUd9giVuoPmze5fxP6xayJJwekKGqRpsFBUFzmiFma1Wd15J8Lg2pNi31DquZS",
  "key38": "3FdCu4P2Kcx9qvDcGFav9uaA86oCuHXc6Y6G6hK8BNgrGQ1UqqhDY46g9wcgT1JC3sWBShwX8ftMMcBVxbqmY5WC",
  "key39": "5gRKxxrjUYvvKsnkvE3RRMkAqpm4rXBz2vyocKP88GLkEyacH5Wdis7Z5ENbKZPFpZRRvZpvASFwdQnyVRBgbRX1",
  "key40": "BfuGHzBdnUpiX7T26Zpyq3b3Hu49fo9Xqe8X2H8aE73nEQZbBngCNYHCfhcHJc5QYDaD7aBVPibnktvgrWzCLgu",
  "key41": "CXmnuCHx95SR4FpunFd8H6gmjCYwzdYoEgMfHcQmRwovH3fQTyoTaMrRwG9zfKgxqen5YsWFK6DKpNbPcv54bYf",
  "key42": "5UzrT6iCYto1MAWf5HZbTdw7HA7AZUw8Zg2K2hkNrCTSePXNuxMwkGcSSxag9GrZXjYYPGJh18tXhmAPST9gfifH",
  "key43": "Q7paMiPddJB3axpbHVudqnyyCn6RAG9ieEysmTB8B7r4owQiTYyzLP9cfbsrMikB8LAa1MHvVWPBUx5Y5rfntgN"
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
