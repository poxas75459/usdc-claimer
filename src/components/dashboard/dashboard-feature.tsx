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
    "67MFtxbSarW1zyddE7PqhnSstwQ4vs2SHxmvx6cbm6wWh7mqvvz6yUaWVddripJeeWo75oUq3saGPpZSUwb8L5nN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35g1t5JwDPg3uTqQye7QnwxUVK3vME9wdYZ3H4CuSRovFgWpDHk7ruoqp4S2pmmt2LdL24qbDzGy4MdPxKQvBexF",
  "key1": "5bXChnqUFhHrafM6FpW336Z3x5meHPoVew2AsWcVCx1BsDN2uH6hLuzM8hAKVhZiJXyZPCPsqEsZkWbMCFLMHvR9",
  "key2": "z9yEi75WXp6kjFiyk8gNgVAbA2h9qLvCriz4K3Recqg4gBv3CYBhDC3TWBAS493uuFa4VyFmEZFhS3szkc29kF8",
  "key3": "2qjZHcTKh5WK41akwJDwDMLjWuCB5heKSvKBK5wBxKwBRadAtKk4UyEtEpozmsAyCSnApGPis3d3kYXNZg7WkBJq",
  "key4": "25okCp7zucj8JiHcHZ3w2YphnNKDYXTTJcWNgDr72Yek7DdxYu6ME2ZF8r3HLyHUDZYz9hDhUwAXRpiRnCYx3mhe",
  "key5": "5pAdhjcPTaSGisffgp5WnTiBrkVc7PZBpXMPj7KEMcYnLvYpHgEHMuSVTMgrGrTVPS3x5y9cfrbVAYuWtPTqQTTx",
  "key6": "4uXHphxPGkcJjWiUqq4EnNSYW5tZuLx1hKQuVeErEdN5gafeAJLQT9Mk2NTzEXeLQZb6fzq9ZcxoYs6hHT5pNAZW",
  "key7": "4cQa1FJHA3RuTc3kASgVJqd4nhonHZzD8cRnKamkY7XCSTEBVkEJKXAdYFjTmok8NE6i1JTtB98iVZTjn9LcG4wZ",
  "key8": "3FCMwe9cLL35KcRGumnu1vF2yBQH6P3DGpU2X6E2wcv8QDUKt5vXMRekhDpfQTnDdm5hogy9yghVVBwkFkbu9d8z",
  "key9": "MyQowXUWrChMBYTvJd8yTooNJ9Kdw8tqpFba9RvTn6nM4tEmGNtc8aV3iJVzb8JcfnUKu2cvcwvirfhwCafy5pb",
  "key10": "3LuMLGCji5N4ffDLQd6ptZhRDnzUxW8Tti5cgZNoKhWwK1scGt8Lr6BgWwmravqs3JrGtZWcQ8Q9VBAwNm1DHmsM",
  "key11": "4RyhDX7DKCyLkYpZGboQMybX3F7pK7XnHn8qMcjJhGq2mQRm1Ex6pGGUjkeirvMTQxB47fScaCHks65pFJog7fMb",
  "key12": "4tWXLP66nXE1CdQBvWytqftuAi44YThtsYDYKyKhwbRgkMcgnNioPK9jsfpynUJxBLtry4wWkHLEutEhnGo8XWmE",
  "key13": "S7sKBtvxs3cJ6A75wSZUdW5dPLZS2gbY8ZnitK97JAiyCdRRNHnVVRdhxzpnf3DCbH4yiiex5rRpenb8o86FVws",
  "key14": "5745XefqYPNwg3yv1kNR71pw9ECcsE9SpVgc9YfzDzFCQLC4ApRhsAimWfsi17qzHkFpPvhoEsJPoZXy6EG21XZB",
  "key15": "2WxAbKN4gDkx24NCRDVBUweP15HhLJMqvm9JRmASpNSfdFFTFYeRb21hA3HJiYFs7cAfScYqE2Z4n5YeFuYznbaq",
  "key16": "3iVe7dGfWwKkwGRNMHMoD1oEKXKBC7pzeJRK5CbcDjExZZu7hdFczhABtP5shMouqiiegJBoZpWQQmmVZn1SP2Bv",
  "key17": "3bTVLJhiPbp1S17r6JGuaQYJRM762pT4mh45KdqmAk4qvmK3iwSooj2R8QV6dxKF5B3SLoP1UU9q79ZwxmWUFmyi",
  "key18": "5mhDJ9L8Th9cgHmF4Sxpn3GWpCZSppXdpAQdzc4JArZvCcLKkuQoN9hNN3z3gs4YYrWC3swHs7XHBwPYANwyZZ8V",
  "key19": "3ie6go7FgVWEbAB8UmcbaVfqAeWZqyyL8sLZm76eR1GvyBDoK6i9WzjkftJwR6MJjBzXD8sLiN5KB6qbF6RJTa2d",
  "key20": "4TjcqaAKy7JNuyc4mWdGLiDcpRjN5QrBLFHfCk1FzgAimCmmqmqYEeoVB5KKJrLmLLxfM5rT97MzbgPyidMppBvh",
  "key21": "2ARXrc6reUohC3nsvWzvXpqnJ3GXzLGbQnSi3fid3YcWRbod1RXmEgb2SGa2cYredCguvEWQ5nqYoo3wbvwjJXjy",
  "key22": "pEH8H8Q2SH5nDJjLVEhDMDaBTqfYfvuNN4NQcBAzoEHhaeWX7WqV9Vw12sfGPhmqRkfC7Lmhc65PxFtjscAsGu6",
  "key23": "5D8s3J8peG17EqYcDvTrw2PqYWxWYRAmdmXMreQmuvWtmY8KgKYJdEz23FYrptRzpTRpvskSv6KkUKurgzETzHSU",
  "key24": "5U7fPanUUqd6fPqmycpmvcggDVqm1fA6i4eeUFsSuYSCUQQ2FvfSFDmrEjJ1FiCMzV8P3jKQef9XYAsCSnJsqPi7",
  "key25": "ZSbBpNFUY3Hz1gL6sYCdrbDGEFuwzCnQxpvUZcRXRPqUJxX4365ZCMDSkW96yTG82h7oNZVAiTX6jdQNgu34UBD",
  "key26": "5rmW3kuNg8Ap72DjeUBM8TtZjs6CbKJFWVAnJb5f1vZwFkZJM4MUsccxyLd74vV4eEs8P3eUan8FYgfpj6Gq4Ted",
  "key27": "3GD4qfpwvpU4GLdRxyy99e9QwVS4JJB5XGwsJ3Y6U5Y7pwA5CHduSSAxU18FPDdDD9DBPHmu7tvfio5Uc4uPRBpR",
  "key28": "vCo14tNrkkgtqpBQEFQkPEpU4JQX5NYGNVBCn3Y7b4hGsLZGX5A6tAnakrNeWy2uHTsGmMoDKuKCdhYkDpKBwjQ",
  "key29": "5nvuui3J17GtMdZvkXDtxXX4DBfGJ1Hndd8HwHYExeyRKQBjBZBtDcA4ba7KRagVkLq9iXtNW8uPQoPM6ToHKvZS",
  "key30": "4ZkXUTFSTj3roQLUbLWSTvi4DnUT1TRXS3U6PekWuU6DUgFruLN36YbSewSRLi5JE6sSvxPskYHsR4L1vngnDrp1",
  "key31": "2gKpSgJvoCECwMYEoXMV6cNs9ub3FZ4UEHBERvRC2VRGsYiEzDj6xFWmsus6vcobjwJkc6x4jpxbP2EfMhdf6ekZ",
  "key32": "2fDo5MAdoXB8yJFs2G2yoepra5XbDaTMFVVzuQKRbRnizypivsfbRmuRSKm6msGb8aoJWtHo12JrHjFbWfhJRpta",
  "key33": "bRidpTcj9QpLq65WPFkMaNgHJJXzzkwynEAVcwTzaLhMzkoypFvKexT97R7ajkCG6TvZQHuFm9PdmXEaHhMMMLn",
  "key34": "46uZDz8Wt1DZF5QB7RrPMpzqYd12fvmPn5FXCCoxHFEvTDr65fif7jMTXgUPb7PrN7X3WjMprUcbMFH5KvQh6FP",
  "key35": "3BBCkXuti6SJ31sHtKcfYHatuxEdi3D2koPuk3SGUasNagjtrc1kpRrpmqEK8Rv9RmPjA6ZkW24ELw8hfd5G6rG3",
  "key36": "5iHwWaxAqjgkbJ3Pvqy4WQEpGGwKMazsAiaqebBbw6RtaLS1xWL752mz1TUc5z1LQnaJm68rX7QjwfMbtWMHRMag",
  "key37": "5VtRym97PEc8GzRz4Mq2pemq9Bw9ALYYofFujbWt3kyacNgzBxb9Eeq98gho16xjfbxLuJv7gEP9KkeukMPmDgc4",
  "key38": "2p1YzQ2TZCUwGXjriJYFry8fY1BfZQyzMhV9czBqQS1zrZoJqsKLR5ntTD98ttorGp5RmhuZ9cwoHG2k76bW2dDS",
  "key39": "3iZSxwTK1r65UjcuXLNNkk5jnahiWWi71fQkwZoaXP979JvjD9qNvTAD4o7vq8BVpqNfPZGFTymtYYsFfLEHbmSz",
  "key40": "28jJWkhbksZXv3bKzS9h1SGUW61MJq16BxNBLS8sE4cd1fam7yqDv8hqdD997by9tk33qW7Z8vFtmSBrLf64hqKP",
  "key41": "4czyTG4swNruoCE5qEDVnZm5UBPDaLVASN8fFsrUqHfmk3Xi3BSadhN3aPwz68krVYxDqCWQG1zP3ebCUPZ3nGj9",
  "key42": "4ZoeK57EWrn2YwH3RXaXEZazkS8RajF9gCd5kRkMYdzmCz92uMmDi1GimGGbQmhXsSkCW6LfjHPmxPjrSEt8BAxD",
  "key43": "3rPGqAHEZbFgxWZ7j8Xpt3xW1RW3w4X7R17AKsUdTJYT5PeUXuNAUvCPgQA5hLsTiQeo5FdU3kwxLJxHMyK4BTbX",
  "key44": "4MAG9MVcq1LCRB9cfsGCAZ7buRWLfVQcs9dNPiaNRaHJzpRcLj1oFYTp94EFLdLREaXXYyaSJidCMbUMyHWvsDQq"
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
