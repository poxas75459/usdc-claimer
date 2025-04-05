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
    "128v7Am5AiMmzYdkZGhQJvSVWteKMW2vauAKCnMSWmNBLXFBCH9kvt1PcJDrLDgLxWudhcGBCDj2zhJcTUgFNyPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krz2WR2SVp5cCewXsvs3eZ3Fm4xUksoDva9YDzKqs8cANDpWjLawS5Pr6wyh4ctLVdTEL8mXafy1kh9STP1nUux",
  "key1": "4kfroWqC5jvJyAgtXFUaM8exhMsCFw2yptiAcPKCPiZXHSMALdqeeMbbdsteuJRSAYtrWxnEH5RsbSB5PkMoMQqd",
  "key2": "56BnonPfQktFRAb71R3MSA8JX63NtPKqFjxaJWMcoNrMXoWkCK1rfaGBwxoUq4wokXgEeRtqJ7DnG3hFvNSdBuAZ",
  "key3": "5gvANKv4V3VVR1Uq4Bg1g8i7cKjW42hR4ynwmsSjweprU13d4MPWDaf1FU7a5QvWcHRduwq1ko4p7ixJroYhLFRX",
  "key4": "4JqggBvE2bPDkf3NJnBa76KNHDn89VmSRUZLM5dNH8VhH4yr61m5dHSnU35WvjC8CjNnZqSzE2uZR4SurvuTr4K7",
  "key5": "3NAyMPEZSSLUpPsZLBfwThc2cwiRVMusL13meMA3HQWtFf7M7JA7qxUVnD4Xp7HQytqwjiXUFVKKKEW3WwRBVACC",
  "key6": "2CoQ656kmk9hXj9JQu6iFd5TXsgQ5SizHnVZJcuEBg7XCwXx6K86zAqy3Jg7y8gGPgfDgmDc43tnHL3yEF9n8hJT",
  "key7": "37j246vsjrfPsiRTHk4EsnRTon8pQpbzptXp5jQK4avcSysF6j6qiPidUD894Wyvcr6Gafpg9AN2928CPZ7m6Gk4",
  "key8": "5TvSttyw8UWHDaMr28gktb9zs4ZvxiSJPM9cwAmAsCtMvr28HRGKPrWphA6xgCyGNYTQ58yz5ZXd3jJ3mPkysHe7",
  "key9": "i3YU8fkua4dqHQ69F9FhXqW943mqGAZMCC35yLzJQEK68nrJruAnakScd1dDnaStrubQFjrFbqStYXq6qyUTv8B",
  "key10": "DaM1GW1ZAWfxCbiggzKBJDJUQUTq7hRg9g48p4BLeZ5fEJj3dg3w6dZi3JR45Y7qfhVwSLtHt7vXQFSW6xCRk6r",
  "key11": "5LE47QigXbrqMYnHrRXHRY6yV4aLcKCaban1TV9wFrViQSZi2pEbqDiqDzCnVrPaDicFiB7HmahEgcVEuNSM7rVC",
  "key12": "5Hbi6p5pKJYVwek3sT5RvGQNTJczg5jntDhoReuh4NQezevQ8g9CZThpjEgWsAmd2N3KKwA2ANDbjYcqQgL3DKaT",
  "key13": "5USay4jFbuQ94K1XW7px1FmwvjiSFtGeDijr7wFhF3b8Juun6cLVeN46LZ5ubjThmPCsGPFh3H7WWeRmgkuNUe8E",
  "key14": "N33onSGacXC4YvnNeip7fJ99HRkTnyxQW9behpq25KVra9J3HN5ovj8ysWHy7VLoBkneBQv8z51Q3jVahSGpEWx",
  "key15": "36Lc7HjD1a39eG5aXcsaFeMm8SASxnqqRXap5Nbr6R2JQQVgmbFQKRp66tzZui4a6puYfnFN2xMPDQJE3q44Prbh",
  "key16": "16572eaKMTtgiXkJx6RrP1dz4KDJ9vqHd3J4qtFpKeoj8aXrYUbPobBHnifWjJGvg91DkVLz9iMnwPF3gUR4JcC",
  "key17": "3tXAnrcixu4gRGXVDC3A1ao9Uo1Z76fFwHdBKQ2bgPMVibv7v7a56Am1Xm4yaVLH6TxmJejhpKKFEM3ZmU9rHmKm",
  "key18": "5x8s6WDRaM4aruNribKdqU7WNRRDooMHctyh87d61xcYDePf9S61z4ixkTnK9zmW5wLhB7ebsAV7fVjc8wGzbQB",
  "key19": "wzL4fjricZq2q9GwrNzcRH8eT72sHGVtZYQMcX7LHry83xV9YPsJLkZrbnkatbX8pw2ujTQXczht2Yhv4kiFYPs",
  "key20": "32FUeMMMaS36Y2WjnKBTuhcZZykoDz7vSGyCww5EZpAWR9A8m6rgEAiTj5L1GG95tnDr1cVdbxJrE52mNY7pH9iU",
  "key21": "4Arth3ct8TNe3E4YbPq1p7iPzaW4FXfgWQ5ae3376JXhqvjHBnfygbrGsvFxyjSYizXTyo4Ry4vo2QBGL8mV8Fcb",
  "key22": "3FcuC1u9b1pmBhUB5Aqs9vKFAGB78KaPhGUME5JkvfytMv16rXHPKM2ajE1P4Hfarm2pYCnSjGmsojP3vcxAodrk",
  "key23": "qb7A9ad5YKvigM2Qx8ySqYmypqiVUMdXW39hbHHn9E2tTGwFrJcPsuzfQhgfRnisw68DfLhubSBJEGjPTvregEA",
  "key24": "3Wz7nx2rjG7SC43rzvNNmFgxagLv7zs9k3to9U9ZW22aUGUBPftm2hBVH9GqgXAEPka8HFHZnFmkw9J6QMGbgr73",
  "key25": "bYRZNrLBJ1WTbNaK9okQ3LQPvui1485Atef3feN8awn1yvqa24Ed9poicvCajP2FT5saEY9XnLmBbDN2YZin9YQ",
  "key26": "3xdKu6XjB1ekr9JfBSJU7jEoxQiQynwBejdz3iUW7E6MYr3GE9MbvLAkC5gdKazAUy8FqT2rMSESmXeyk1DKdRJ9",
  "key27": "4W4fDUqVGtc7seo71sgZr4VFQ449PcHUeiR1UrkQk1ZCRCzVFwSdx5ovPiW5CaxkTnEsKaiiZmGWhKQAFb5aRAGG",
  "key28": "5dt1h8L94oKRJqSzYRDMXnkQbDUZvZ87WsHyv3CPNgXhqRqoXqURKCWXEEuboZsQxfLCnDYHgHTtPcLGixSjD5q8",
  "key29": "3RXrAQH9YoCGuwM1efd2ZwFeZWb3TLZi21iMYYjPpo2BwVG1vfTxbt5syZ83UvXXC7WBPbfA2DvLQbgjVYqtEv2d",
  "key30": "3JEXEuXDYxgJmTQC5GAhFK6m2XoYigEiew8yWJKbZvoeDrEi2amLPEev9HbXNCWTq4qRdHvaijW7Q3ZAYahf2ThS",
  "key31": "275zaMnknVjYAQHb12uxnMK927yPLMVwQGKduwXKymNfCbK5vZ9jG3QSRFyFNWZZKSUUywfFS6FJitvdAhZbyVVb",
  "key32": "ysUohAPNM22RN18kENBLjrk3rQqQDqmrtBA6fT5Rtt6WxfR77iScfG1C59Z57oYG9ZQjxwe9cDK4g7DNbxSvxpc",
  "key33": "hUGP6LAab9n5pRfjcktRFgFDTQBXQrnwgiVTrhaoZ7QSnEwVThxXYf8QbTLZTdUiEAcpa1Yqn7Pi3NGEYnfGAAe",
  "key34": "3ZajaLciMwvTi8qQ2oWdjgEBxEGiEaNEoLWpSDRDbctXcqMmreBFW5dZy56S3cC32vi4GY9ZEytLNbXZiQagaYzC",
  "key35": "3rWozVvF2Un7YAJz356v8NceutKrWMmdGLDLP1DdTqrqdCE2jLAHEMyjd3vaWAnEqC4GUXmH8qS4WyfboNmUVrQZ",
  "key36": "276zY1tmzHN3ty8LPhhJ2B1g2Hhb4SKvEQ7wFSisAhLsmWQdsyN5sXgGNb8tX9ozPiHwdF7JMiMmdXet8B2DyT2M",
  "key37": "5TnomeYDEJ1xEHqdUTe6yLPPeqjTf7CyUf6KBjoJVD7o1jLwWFu7wRJRJZ6JvnjrFBUR6J5khBtYss9UCbDuLb1q",
  "key38": "4rx7TF62S1WnkVtQ9eJFH2XXcKgWcp9fpAvjqifom1bBSwRLhq88upP27LvTzoizjUH4d38KtaZy38CBDnobwt2p",
  "key39": "5UU9YQ9ThUK72pbZrFq8CVp6Pz2cXkbtV7a4vLUkyJbQXonWDRWdEcYqEYj2TxoTQGuPrf8g425EXAhLiiFwCvdY",
  "key40": "F8V1gt12dZD6zy19xeJ2u6Q9ksLU6nsdfD7WqiqehX9fj6w87RQkxfUoaXiZy8d2VQQtSE9WQnJfVqhpTLnF4pN",
  "key41": "5ALsejnpkxGDPASBmP99sERCmRmS3g4YY5v4xzM8UovS3xbshHLunaXKKw4VnwYd5RaKHPaCdQdHLrtDy8KCivjZ",
  "key42": "5NYqWApvW3ZTXzb24LDeDiaLeE9rAodKwsEFnmmgP9FZSFMcCGr3zbzrcx46jZu2H666vxTYh75PgNPETsvkr8wH",
  "key43": "2uHNYAwtnxdRCeErzudPu92qB6WsAmnfuF961FSoMN8nAWMU6GejrAoUGKzAfb1WqQZStRo23woDwkK1NQF9iKCL",
  "key44": "5J2Aov8KBhsSYgWeSqSLCXmtFgUFtMMGGZnYQadbd9tRN4kiadN3FVNVzmM7bJAdr9vfLQogMZhtovqLJqqRUFbN",
  "key45": "2N8vKE3gc4bYyLD4FtMCtnSu4fgU1EHVB2zj8YxeFBDmtLb5rUAHnvuLXXZi38vSBSqLLnAodifMtLNmPgLGhfCo"
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
