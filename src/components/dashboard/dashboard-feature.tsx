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
    "MkEY7NAFE65btK9p2bw7bw4Zp39Ha5ysdBuQqZ1rGRzfvrx6Tmsmj86XF8kSXNLxcKhgkaRyQMrsDyW2yG5ZwTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sn8XGhQKdwacDWuTjZJQ8wXxXPwX33K2xDCgGGVyhM9jjD6z4j7jFzj9FoDBMzmjq1AS2yQMv5posoZd6NXmDiD",
  "key1": "3vqRydwDicjFLkrLU5JukkU4kkt1q99s6f1g4oHCEHN58kzwqVE7q2zUZTXGHkXcNmbCj92Twf1gQ6DuXhiyJMMu",
  "key2": "5K2Ffrrm9o82SnmJtgbUXtN5xT7R6LA3re17ENsQm8h4VmykddQS8tMtFkrTWTbn1tuhY3jYQj2LgxKMwNNGoyRp",
  "key3": "2ZxrskSYdjyTfWEAUyk1WCtYzuSdDRu3X1nQzNhAAsmKEhHLZBTQyKuVEKsLAF29FLajRbgL5sWwhjfS63oBr7bc",
  "key4": "3Nb9Tzr1RNhdsUcEWnZaAUqQQSrr9tfnJhDL8uHVceVa6Rx9CmSSa3ZGMPPgpiMCAo8jGhmke2jhNkava75nwLCt",
  "key5": "236QBf5hpmEQMX7KrLa4kmUqT86k2tvmUDeuUc3quBQoKhhb4MJHbZKSS78TZs5axA4PSfkCMEzPhfTsrsJtPcSf",
  "key6": "3zpqGwHHqFudt3eZs3ysURCoaLu8MefQPWYvHeDK48D2UPKDiuJ9wZnBS5J6xDJQb4Ndebuu4ezPyW4QakYr5ZKA",
  "key7": "2FKNkBtYYdMTfxNZhHAouQhj58hhFCWCzrhr6JyNDfUeZE52P2B8nQSahtjadtiKRSUuaSSeJCxmCcRFkrUULpRX",
  "key8": "42aTgZrcEzHRvUvhsW2ZaGTgiAcMS2kaE24JKAX2Lrm65aiJXbu4oUrE8dmeHXtfW4XkheJc34F7MthFm7DMo4qB",
  "key9": "3uzD5WRqNuAznY6R5Ui2CmaZUv6yrFMMcPKD8SQGjX7tZPgrycVBuTHEhCtHTfWbC5MnL6dxaopvfZ2Br8ttpaxo",
  "key10": "1ZrJtz6FMUjTcnCubaumKWacAZQnmeLySog6Lx6HtobsqLKxqWUzVPYC2uT8iDt6LQv9VAXuM6XLgyTh7W8U5bc",
  "key11": "3bdNthtRLsW935yKwnx6kgagg5LRctjCK5LaoyzqkbU7HMuMaETCREhdUVh2rTZKehNCDqjmfLLj2bqAFY1yJP81",
  "key12": "4FhoABZsnZMVHkvMTtni96No9tmGs4ixiDQfcQgB6QqFcSA825bKdPqUHi4DiDSPZXaw887XddmSmUDDtrHmDYkF",
  "key13": "5uaCDJbCcxvpJgRiCnWL6RtXBhjMtY5wyed6hkc2yJFeZ9B8YkusVWNQ2DrJr4UMETskSSwqD59JiBvs9AF4X3Eh",
  "key14": "23SNQywzPZ87r9NnyKUxDnFbkqBgggqH1zKpemw8dGwfccJ2AXkpEoF8CrfW7zMXSY6NSrvBPXwXcYpDpLsC5SZc",
  "key15": "2dW6N3abVVc9TF3Kfh3zJJeAo1g6JX2YwLMkwnyCt2a11VoUQTKYav1Zr5vpA6uqwivPxaAtLhr836xm98BoBdDH",
  "key16": "qgQr4nnQEqLGSMsyEyRafAVGWJ6nWo7Fa6BBMUdmsSTgyny5NtzNrg5xGGDVyw78ZtVTvyHumYWCMQ1XrK8rqQ2",
  "key17": "5ofDzoaEU9suf463iuVsVCuoFWsLqpnEjxhcWQjpAi6a2yW1Lh26WQGUD8p1pBWM2SqGQQ2AafJjH7rfwVD89SAZ",
  "key18": "5HEBJYd93p7RwKk73CTGG6egH8JrTRMtpWZZ6F8Ci35FkmeCNwj7oqXeHUofy9ojNzKYSHQoZXndJTePmHG37tdW",
  "key19": "2sUndfcRoDKsErEpzusRohy5xTjTRsBJ9eYXjkGinrnMNsU2wVKbw3446W8jg7ULqFtUZnkMcfrMCTsVFoYqQVUS",
  "key20": "44fRM6DrnxPUUfMNRaaSEUeWYazAEokGJW6XTRLRaMSAdk8fGuzJy4S6NUDHb2k3f4i6aBb5pYfsQw3t2n5u1Ngk",
  "key21": "gXCvSPNBzkVSj6zrXQDe6hxn7fG79FgtbtDBWH3PMeot4p25VbeG2JPcCHe5mFmzGirAF3F3bmGaGo31FwHzCcK",
  "key22": "4H46bSFyjYASUc7ui29xppFx3zGXiSVYYrNGg4G4QnErcPpXHAzJ7zrYK1btAhNjFb4j5WEBf28vVuYJVg8P8Qv2",
  "key23": "3d3HC6WK6XVwSu9Va7kqXVaK7b89QLxrR4zvo3xgC8TMKyugJzrhxvucVBzFvCk7rjR84NVf3xEYRNFQc5ZNJH8e",
  "key24": "3qK1B4DtyGGRh12YWyi94SNKt93nFsSwTdK2romDVZCpYLZzAJemLLgt8PzZ29nTB1CaYvF7fWkdXpm6RBGWkVwp",
  "key25": "4qGffwG5zriPxPkRSc23TyYEUK6FDmq6uiseEQkWoxJfvAx6ypFkNPAb64XhPZUgz8wHVgeHkTaWjekJ6cGiSDKv",
  "key26": "4acoMVcMcXe2zLCGkEuacdmoAXrGghiwgaq73xVWJYR9vm6Uvcfd9MKCfRgBVBWEzvFyAVxEVHmjf6DaA6v3z3Qx",
  "key27": "vKss9LcWuMCTB59rzmeGW9c1B4SVrFAmukYcdhfQqXZCx89ZXXkEHMJjom9eSvFcGs4iugFrPMiNCjK71uKZ78e",
  "key28": "2pbFiWqCKjn9oHNJJjuSP9WRtDo2poNE69bxsa1cG8LLUTaXqhFtW9KCj8cgpxaceNuRcCfwp4JnJdTm1tCufzjN",
  "key29": "3gRXqiMXdHnP19ghjQBVAVjPEC52B74nXYyMdLrvnWmH9EiCHi7ixa4v1qPNXieoe9E5jLjo8aQdngPqs7EVk4Vv",
  "key30": "56EMo6wM9eodfm4GFjjJxaQhDz6F555yhjQC17dYjdVtHvrx2Gd27DMdLguwFsXmsJTVw2mJyvtRUZub4DxsJSmq",
  "key31": "2WNcHTfjSWryyXafa8oaL379UFpR4PGPa11NySps1DZjKEPQw9kD91mU2aS8CUP2NVZ1CDduMUBrHJbSKZH5dF8q",
  "key32": "JXdnkVfSz3XPuCmZBUPAbJmMzA56ShAaV5NNRDF4fP7LkH5ZkbNpqN1vWbF5jrfqbJ9G1651LwFPbpsEvApAtky",
  "key33": "52akegRfwYJj2uHEJmXS22aRSnhKHWjUNkAF6jwU63UjjeryyY7E54yaajqsk3dtsQtVZRfAPXKHhZdruM1v7Lk4",
  "key34": "2hpYitdJbZD1vtYCeEv1qiifF2XS7AUi4iS6qHT2e513Tw9KELqiTw6XwZYSue67tKCX1FjcKxnYfj53rx7EMqLY",
  "key35": "MHZkyBkGWWkZ7XUA39odwzNjXgfuwoiFbTPUFdZJPLTbYCxCdgHLznCFEaX7DtE7j4QcQ8futmBbfiJvXdt6jAD",
  "key36": "Zb2muHKZysqsUr6eG6BAJoz3wo9CuXrfua5t4ibfhZWx8KJdKVJjgmvJRSdm7LhSeWW9RUGESAYUiqb8JofKDxs",
  "key37": "2yqDP4UYgoyjbJJ8Gja1YmRCUVzpy8Fe2dXcBFwyMsdVEmNoCyq3DR2meWbYwrWnxEkbWFBJCtBx9x2qUgwcDiei",
  "key38": "4o4JQXHTzdk9jQKfEZ21WUqbAxj3hzQWoQePjEgvagSZpSZktR6fazbjJtRmf8jJSbb5Gt9TrZ2vG3jmxz7K1sLj",
  "key39": "2MTx58JJReWdtanpYXK3YcgVPhKojNCmZx6SuHtM4zhidJBC2U5iqc2A5PdeWcSNtHcP9nw4F35wywQFw7Gw83Bg",
  "key40": "5KQMG1fWK32r4EUPnbWonY7hSGqfMMHKWHn6XbXxhnC1qbiKafATmDyXpScegq6p3HV4jE2PqY9FtVJ6zDGW4Krd",
  "key41": "4Dy2a8c4bdNTdLiQ7Dse9cAnZ685tSMqkFHtxBWv9ez9AtoV34aW9sKvh1FZzGDHGtSsVioTcsauGeWR4HhEDL8B",
  "key42": "3M7TpGofR6z4wB4X8bz2odnNAo39JwtDrgLcMDr23mUiArLhiKk2RuyCkHFkqmqxDqJuieVXdxihyCDbDw9mZyFp",
  "key43": "2iuCsVYJrTnXRmrmGaVNP3yED8vZb4mASuFWSwoVTXeWmwPaoFAXWSPdBA5qSmBnes4p9Y99zfjxdux457frV2f9",
  "key44": "3XVQpXDXQN3LLihrNFdb7Hgc1515trZ2fQQbhpu7NnMV9JNuauFX556DdiZHWkrYzDmgVfarJWaUJnH5WYXd6hNg",
  "key45": "imLricSs8msNuNkFUNMQH7CnNARU8u6YXUXVAkHCMi1PRPXYgQ9hrBxKyMVdzhV37RrTR28FrM6T5imX46i71gL"
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
