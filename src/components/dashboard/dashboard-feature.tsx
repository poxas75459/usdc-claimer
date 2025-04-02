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
    "3Bhcvo6uJGCoXqxrLL87zV73EyNy3PYcvvRBMrovVqHadPES5MZtW2Jch3MKLjEgkeSToUaFxozFAeM7D7gPTu6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CeeENTWSiuGD4UoKE8XrEQrUcM6vdAgnA5EsZWPqycTNy4LuAoAAJ9dGREMDtUZvnAk71emazqT75o3JnTdsUH3",
  "key1": "4tZFKAnKVEht9yyyfNs2mNpkBjPqCfmd7nmzWENZ4CQ8f6JmZaCFKnL5HLB4H1hw1tztEyR2da1hMVpfkY2T6sdn",
  "key2": "48qRy6BPuqzS73Bn1Fw4ppeuvnjsBidg7hEi3UcszTS2Qwrku6i1fBYcemesuMQmYmKi2b5tdPaq9ypoi5rmrDUZ",
  "key3": "xK8zCJmLTrbbLJGhRp23gc1aE1Ent8ToZDSDxxH2zPtZEqrCvyqdPV4uQgU6qzpkYbJ9De8V9PExK359foUrdpE",
  "key4": "5u8KnmAMW8Qa7UYCbtx4UBt2XB7KPDUstkgnJLZfi5RxfXJNuaums4VmY1wf73w5MG6wLnUVcEXk4gsGTGPTey1S",
  "key5": "5VXMkwtk68R1zv8RPYqxz3CdVfGHtWc2rtNEWniLCedvtWuVD4byYuZxtAP524KUzprn6dPpbptu8cB5mB5YBwCk",
  "key6": "4b9Dg5SsTSAjPQz89GKUnQUEhwCQeoauMeEnC4WGuWr6so1gPZjWjXhLSoLLRJD4VYjg3b4F279GhsUJnZJtzTX6",
  "key7": "2vMMoCRFAfUF22jzpJzGZ8p3mWqMfpmWqmWuyzTjHJUgNJTKL48p1SEjZd9XiVD9AhBfLF8WqLw6ft9DLZRkacir",
  "key8": "5HtsizAWVdCuGjXaiAhymwpuAByjFJEWKtA3jbqAuiFEoGyBm7dybQbp4xrKbcdJkBoXGxRgv6sNjpdbyoTEddd3",
  "key9": "22tyCWmrfMsuRPzm9yeAiawE6TSTqq7g4kkhxDenjfech8ZNsVZsgJphGnjAdjoP7eQA4qv6XNBYWWq6pNFLhHUM",
  "key10": "HJBWuT3LtkRsc3VtH7Ejr9ZvZ77vkqFW1th2MRdWzB38KbdFAmpRToBt9qjZJLegWP2ciNmDNSE3DoMiQ6xbdX4",
  "key11": "5wPyyDuNo6vmTdz8itq8U2CkDiQVWpwSNNeCD3Bhnwok767Syw37uGFbWGShY85MZb5NBwTd1YaqYSQ9ixeCz11o",
  "key12": "3ey3a2jnSv8TQ7ZSse6ZV8UBDj5w1WdzsA5RWnRVKP4E74xTAqcEPScCwc2GxhoTDWTYwB1fmJMibieQucBjpapo",
  "key13": "6bwQSq1fz8oGCfi2BNKrx2feWJ4LCPkoJ1XeEMCNRUNNsQwzYLkrEjjQfSJ8tTFc8qGs65N8KQsAivNUyThcegn",
  "key14": "2uWSQ46Xqd3AuEbUSTkxCwUbaekcus52DQtcKXmLK62xU4ncBxPoiNmpRcsE8cUPR99jhcuuEK4DnEhQFBkuyqPK",
  "key15": "3m78f8xVt1cBEH1KXbvSWr5eSmSq2DsvvqZzcQ1EpqxMqgyjWPfdKL78KKhRbX6Wpx4a46Fwv4BxcMNsZ5QB7oRv",
  "key16": "2dNMyVs8XEpKKh5QuwkBC2VV4eqipeUVUaYe3QbuUURgCX5ZpfUzkKJNSAEpdJfVf7iVGZdzkAJdPbnYBCQ7oyTZ",
  "key17": "4Ma5rzuPugoQu4rj7PxirN2YUxMt2Y2JtTA763b8vhQZyAo7QbJPp1aqDH9nM3qabbntwMgwhWWMnEnspjccDmXb",
  "key18": "2uPpJTshbEg1UCGoU3rRv735dpebpsAZ2H9YAsjcCjuasYbFA6JYCgDYzfX1yRsa3g65y38yxZKu6ytkeD2vnRCw",
  "key19": "514wHwneRQo1URGwA1PnNR5NvaaVzcmqD6NkwC39W3Cn1JE53HUnaFLUMc4hh2PZjcpPsC3tdL3YXikos28ivSpM",
  "key20": "2haUDakNpnVJx1FJ145mBAKPCs3swZu46UCcn649dirQjhX7RV5cpUUbQRpNjpczEio2DNe8io9HvhH2JdyF31np",
  "key21": "3LPcmcAQczHtUcB75u2g5CLsRUyX6Fp74N33TRdNFcG54wEca1KcLU2dKcGA2ZZcMgHVVkyoQJEwCDtn4UbcrEnu",
  "key22": "CQUhAwwYkbNsefMp2gLjE6wYWEAAtbdNU5yZbdRJoHaBxVQjSnkcpejLRc9ZcbTyTzJ9WydEzr6KaP6QeodYGSV",
  "key23": "5BqEi9p84Rzso6fM9gQoxJhd9WBogsge7oQcMStvKsLDkmUGa65cmzHykRtGKKrvFUbK2dW9wTSkoHvYPGwxoS5c",
  "key24": "5TfWcvRFsiM3nvvFm4nkeGo2JKWs1xPZcAEpVgBQ7iqNTtCfL3xk5vR3bPfh63k7rRhxNhPx1aDiXPcjt6RWQqjk",
  "key25": "4ioGCqoRdjmwe7uNSH68pYQfsNjbEYCdkK5Bv3a66vLFYTcAztKNEvxBb1c9QuduY3VgxX8mk78giA9vhtHQoo7h",
  "key26": "3g2Ev8JAsPTBtPq7LaaYoVKVawrji3HYvKE73TGFm1LY71jCCBKKpd1UyvfMX6L5PmsXNfJVNimVvQJAnSikempQ",
  "key27": "5pXcigdK35LNvMYyZ1u2qVEJUJBPPQf353eJkpbq7zzkCiPHkoSMNCZyXRhjgP43h6NXJaRGKZUCFmzUE9Kc7WDK",
  "key28": "2s5WxrbxXeQ1k1AyVV5qrVNV7Bw5M8AtWnV2c2qQfeag5f9D2RNL12hqLWuhYMRxhLwuzZhjrpbzAkHaKDMdtUPj",
  "key29": "2jX7BNCTSxfc6QPEbnk2LMybxAVNSaG8WqxgsNpvbcvSkRbsNiwMBVRVxhkEpVGMLT3ecUZTewFydM5DdzGrKM6A",
  "key30": "3VH388N4PKR9fGdaoq6TSWyiwzFXd1N9XwsvpSEs2n1GmoNiuJMJQUdehChbGXNxt86GNfpAtSi6g9SJW8CreRNe",
  "key31": "7DRuMXkUdvcZnTV91uKpBcbUGgT6zS54jPm73ZPvW5bXi9XTdtLTXfnf6tnyYngg5Qw7CDjoKQFgJCw3H55SJMs",
  "key32": "3Gt5PQxU3iBcna7fP2jtBSBZiBfrjg2ZF8Gryj2S7sizqPp4531nUNRwH4Z4zPzLMBkRCqCVPhrLemapAGGQJPZf",
  "key33": "2LEYSRbWnMj4s8CwMRezwg1KzHCsTZzaRW7szVfK9L6wKPfuwQbWLdkUYqKbfb2RmaEP8gbgEorWnDG4oE14gCxG",
  "key34": "2QX11xpS18gih5nm1DGz8y78FumHGXX4LwsYhRfNrTKaPNSVGu7J7zq7C8dk3mknQbG8p2Wx4XJXcLNfHMsV7urN",
  "key35": "2qjv6S1BteAJrrKjuqKciZCmNyTKxvxHKUSTQ5LKX7iJvyRaaEoA8zRrMEBBZZpA7VeFMmyLoeWJKkKLcu11xjoS",
  "key36": "Au6yktGuVx4aXsenVb2ekehxL4DC1vkXve68VFyBMENCysWcFoqc1WbU8M8dKoSeyrkfQw7LZ34QfwwoSnKoFfN",
  "key37": "viYvDsxzep1Ba2yYRCmYN1DRuh7Nw58jKjm3MbtsWVYHVtutvDDkHwoiedhYgpKWTGEzDjXmejPHRowV6cQWjov",
  "key38": "4jZJ8qjexBtoXwJHD3es53XLXo6yyjeN2sSVXSzZdLmY6rqfGpC6Kt3CgnKQUmYugvrnnhqW68TSPHLM1sWatoWk",
  "key39": "VLZaW61HhKYuQwVLpBDB2m26BYw3aBAb6Zg5nMZB6geezVq8j5Ze11xj3oDbpPT62ZX5ZRDS2Vid9ZWoMpZzHxa",
  "key40": "2t52XziDfJb35YPGZwejzRuakirWdHo9L8g6t5z2qvLbp26UDxuPe9rzm6NWVqR7tuXAArLKVGtjKrQhWkaSLraE",
  "key41": "43uQXhHQbj5AaxF5rbFNnmAJRY5cRv9MJDS8Utjz5NMEjK5qocmuvqR4pXBBsTg8LnBUmzqkJYDFqnWtcoyt2a7y",
  "key42": "4gYKE39AzcpWXUehNmd4M1wB72BHohrmWkXpamwREkFHmksXQK4n2GpYqKREicVCoz7a4nwubrhgEHuBRaQdqbCm",
  "key43": "ot8pKB32KKetuVaDTU4HhUW5SNJuegs9zbMDdZnDwwHLM23Tf5StgxUiDoU24RcB631G1mbe3nU8pxyuSPb7Lj7",
  "key44": "43bLXBovpp4Ern5xAzmKs9wjPKPSXrggvBYcyuwwQoiqN6zgkqqAUnXn2F8XUYRW4fcwavCFTuEcaXct1a6z7mXc",
  "key45": "Wpa6ckD2uj9NKfhqgpKj9fy5mq4ym95gimtr7MMgGfzh6jpUEC4TCyH9uF3Mc9RCfbcJ1nU2DdXBzPzZ4mRKTqX",
  "key46": "59YJJt9j1hhQ6kDhBRa32MVEqJbsQ47LoKvswBRvgQQDanocEG2f9vKzJgWjGwJSZMo8JsBWJicrv1jZWkphh7B7",
  "key47": "fjxPgd1YQhLH5GZQgPAZtG2UAWzZwqKbJwh6Ep7CQtc1SeckzE9GVGCqwTZbDcxE7oNkS4Ct8gFDuDN8msa7Dde"
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
