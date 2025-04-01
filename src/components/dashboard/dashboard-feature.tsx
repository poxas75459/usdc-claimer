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
    "3YXBypt7XH3nxjSuM9gDddT2t8t1yqbbE7yQnhVrH8Q8GTwXneAudm6mj9S3SMV11idFMX8MLXXN9ZKjqk1oRwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43B6SYPuLE7VrpSy2NYPpXoDTF5GBH4cefRP3eT6pJJ5KkSZDoPB5HRPfkmFWHoiyCNF95mZyZMrwVhxzjNJL1z2",
  "key1": "3tsBSEVgyBhg5APiGj9KoeHQSvAzbTEjaz17DUEiNVHZnQXjUEwgz4puD1zzRHHarkNekpA3Ph4zeDbfSHwNE7Vw",
  "key2": "2er4H9kS8WPQxVjBYZsGp77J73zqVS2dMyfrVthKTLLHTGd5oq99y9FNkWdVpvftMS51wEWhLSqnVtjBTjptVco8",
  "key3": "31NXtyLLbcgZvnxdbM8gcCtMHqDhsXFZh89HW7hhVeZXeowpgWMZkQjU5T97aPutE1xJBPgbR5nJAqi11vT1xfv9",
  "key4": "2BZnqgapDqA7w1axwybDDEXbcK15HTvP1x1xBKxN37Rh3XHj5X3TZ5r9MzFdXWnqMq2putAKVtC45QFMXMN3xajQ",
  "key5": "58PwY3456xYUdGvwwkhqcQ5iZmb8pUzRVvGQjoNZxCPZbLgSUbpYnvzS8REiC6mVznCDjrbo6ZRCJ7FAhrS6AY7r",
  "key6": "2av2ppwSBbV2C7yc41fX98cV15j5akihBgpUvixe7QtbAcUcMP6WH9Rc9fGdR5us244tj9bbJUAtzGCRQuatqiMp",
  "key7": "3HmUHyyscsTzoH34Bzp5Z93hiYByxzZAR8uR4yS4Y4rwBJZcG4yoQsJSejHAd8q7H3QcdQGd85W5P3bggGuZHeWs",
  "key8": "5773Vo4tcnJJF4DX3pTiYH7QNCEo6EEaAzYfNV7yTtLmiGfG7Nd1PXUM8BBBF7Ywf25FbujeVkyMJwzvQTKXBWH5",
  "key9": "51ZFXqGQsSAt7RWv5KrE5n6YJBubUVEaEX99ewUKvfXizwjRwv48bppDk8m9LCA5EhZvAscP9Dgyc9stwA1NwSpS",
  "key10": "3VTHuSNcbsBg5QuobSRh3jXgPzWyDoCUNmbErqSu83pDUn6GepfxKH3gZBF4zE6Xam7BMhqXGUARxY6R5mMdpAYk",
  "key11": "3nsk2uPu8prZ8NUu6EnaG53t1jSKm5KPfBZHVC3pCTAsSkH3nQf2fo7w6Sgdongnyk7yCwbRiGdkjikEbyVPTRH8",
  "key12": "3qrrXE3GCdG67d9XsDarPwPZT62pK3o7JAdNnSmUba53rEkeNHsMFrdR7at23xGxsVTMvAhZVNxmuHPa5DGNp89e",
  "key13": "2AhGuytt3qAuMuuqaqkbgkKpMcsYLxXXYtbeyX3XTbWBZ2P5wdAfQRbwvfyfBLhQV59VYQkXtHM2jGEKiysrWmZU",
  "key14": "5zf7UteA5fukCKD8DLP3pVP8EZPYLCL14qfS9MeBXLa31pN5RLCMeGjRGAcKvdq1w4WTcGk8FmkYL99Cyi6o3c9r",
  "key15": "dNfe7ULLQUe9EC46oahfnmUrNTes4Ue3yuQTDEo9pbh4QdbSwnWsmTBYpNwkgVRtAMvPgrT5vsSzwSqUgq8ZQPD",
  "key16": "UGjkemSbxwfNrMopXmgp9VeaBkzf1H7mpLENtL6svvwF8FGvJpYxaac5aCxqcvAdc9TqjRXTZQqUeTMPSHayoD5",
  "key17": "3251d9ZbjvJnpQA9ePeYQejEAjHCQp2Y7yHG7Cx3YdnUAyLzNdwec6MK2rTeQ8RordSWVVVkxoW4F5YceuEC2ndr",
  "key18": "122g1Pt8gzuXbD2Qyy6to9UmyDP7ntUUYFCQXiJXscADGe8PXfCzpERMGy9jeBPKrErNvBwUgfptuPGdSfWM8Djo",
  "key19": "3v8Vg5jpiXqexHtPrMBiS7XHu3LYBV2WM6kxSL6g1wBxaua1mLMKiZB1ZTB6PnYYsy9H9ZSaLVF6yadrW1QEJkH6",
  "key20": "4CKD3gL1KeceFhsk5rNoYY4jqWs7ZTmwfYdcmovkdzVDqVAzw1nJrZc1UrpbMQLBfce9fNA1tW6L26Fx3Dknua9G",
  "key21": "3e8Z6U41zBruGFV831kDPPVvwv9zNHC4Ksho8mfc7zwPrDWiqVnnf9mLZzNfyEcZXgWbZyEg9nMegBQcp9NABtgF",
  "key22": "4ZL28J3pMB2fZgaLwcdHY5n8TpzdyzRDXt2qZAN31s6aUUwasFJVDkWfTkZG3aMS65UFCrQt13ptxTDkWGPa2HYD",
  "key23": "5uR9PXTgqdB7XC5cXJxJ6E2diA7Z4HHunbjwx4ivNywBWQHmWcKiLqqpySCj4s7YmpyBELE4kVFxFZsqqY6x1PcE",
  "key24": "TU9KDDKUEP5XoTxdACerXBFFrKL2MtEimzrTwJMeNDJGh5gQZPS1asC5pdTmRsauGkhTjVTa9riVFtkNn4ZahMB",
  "key25": "45R53hNEMnkwkuQMUrPnGgXkXBf74CgxcQNsBbMVTPouAtgg6moEzqv51EZZDF1Pcm4MqPh5AqUSH3ni5rgoMMrf",
  "key26": "9YH7w3G1fjkTZcG7Na3dKQ2TyryUH2MnF1J6aFKq7gkEVjAjyHsWmUFBbV6ozJq1j1Fd254abJAoJsRQZ7zy5iH",
  "key27": "5DhUoFkoTAF9tqjZ6VRMabX9dfYnaZvXBbde8ivh8LAD9QL7hJ1wU3SSFSux5Vt8K33H5q79R7EpQtxziabrijyg",
  "key28": "3PGD38sNqZZLZ43B4bfnWNSTD8Mc5J2ZWvA64Ftkr9JEjC2wzLGZMRmTBhMphJmxZM3vprcZsk8AtDxftVTm8cPE",
  "key29": "2JZ3Kb3c2fKDgvvpSL6wTGqkh1GR3SJkL21c21ZuGrkb3Kk32WVw7kQ3ZTAkPx3YbhjcRzAfgPpVsUfbtJLJjMDd",
  "key30": "4nYu4p7wV6yjSGfLho5MGF8pRGjA3JbY4p6h5GfHaaL19gFhbxxScZSCQyTbfsWS7Vr6BcMQPGUKnxL4VEfaqjUn",
  "key31": "2V7GsDPsm2SDpEsgGxQ53jcBMEqDJXCU1X24QRth3BXusL3DhZsHJnZQq2ApgraRmasSTfmAioZtboZy58bhk6Ng",
  "key32": "3KSYW4xPQjg7FzousfnSM6e8qK9urn5Y2cVJYgx3JFQgiAn7UpJe79Aqk26YU91bSjRiEeEp6gWaysgWZRZhJHBR",
  "key33": "1GNeyDQo9pNtTuvKqgocPZcWAh4uPFtuZqrshQ3HtWCxwCRWpz25UHLaTeK5A2vSsTyEdGRiFiSXB5HDcLXJWbi",
  "key34": "213yVr8fmXsNfHpsBq4GAe1LtqZAGfVwsvXGoTWWyYJeQWQQXwEtzaMTTUAvNfvhSBDa2P3oeKDKq3wFDS26J9R2",
  "key35": "4uK7boToVeaFb1MtK1yAARX1bBnvKA9ssTMKCrXoDZa2PQk8po99MvKA6RoqQXxhhGmfXJVreYQ7YVqxLn3oaBjU",
  "key36": "4eapq4rZc91LnbMR3cZdAWfjZjXT5XkQmohwk3BJ81PVYK998yz7qvvmmmRARQtu2aqB8oPYDDhKfFXRLAk7hFVc",
  "key37": "54JePQYVSqNWPf494593SUDCwXi96iRZhchszQDv1d1so1tvYo1pxCFcFVfAeYRJGi7bZdRnBrAbdcEBcR3nuiHe",
  "key38": "Gidhio4CCmtyXC94BpkDBhSrX42xVRsLjyGP1iaArXxqS6FLeMvNGZyQcB2NbdmqUKAQBQRNMDTgpqp9aGvH4nm",
  "key39": "4fwr4VLLLWxcefkR8ZRTXUqCodA8EBj8jZmu32ebFzYLuztVAMdS6sQYB6R5bAh8r9ac5hZz9E38YP9ALpCb6Ruh",
  "key40": "3yfnpAXtiW5p9beeHE3qGVGqhi92e5gZAB3t9L2mPFSfY9eTGx8TnZohpDuUaUE8BV7wns29V9F18qCeSauX4vaj",
  "key41": "3uFU7U9AuKcc61vfztGe5kSnJo8xFhyGaBGndfewPRnpxA6ZtphwCuP8mqMxT5gZ3BkkyLDYy81TDh3wSZrVY7HL",
  "key42": "A7KszUzw9tX745HpBXgxnvbgNmx6M1PzfDW6hvTeHzLTTiZsnRuk1nS753KF9YP5icUNbUaPhaF5ptE2GXteNLF",
  "key43": "2GkY7aECsfu9EkFU7hkpf5nccW67q2p9oKS1ePpJP4w1Ly5UfuL8tfuqhHW35BhiLsfVNtrRwZQtwYHnyuTpXTNj",
  "key44": "5sr3sRfqqRHf5UL6XCd5WqGYH6pFyf67MRhpWCpfe96CotH1b4py14s4vaEhBLCN31JGk1dG4BCkKW4igZcWm7rs",
  "key45": "37XTX1iCQp92zndP6ZvHdJXpPN2f65dZvHGiVaidzKByxnkCMN5eXmZBmxvdZgZHca3PywtKC1bjDqAyQ8QHzgru",
  "key46": "2SHf1GtGPETPfJpNxwRoFRKMCRaGMLMMUKTK9acME1HNciF2HE1BhHQukwYMRqKy7QohNqzWWA3wbiDDWLabkxXj",
  "key47": "25oYJqHerg7pPdpfekiNmkNRs8H3rcsJVnrXfbSzki2WcfgJFRN8eFqQncJdgSJGQYV5vTHso9yGgD8t8SW6iaXX",
  "key48": "HrWPbT2FFSeyFkmY9DqShgaTbjhHL2F6dSBwGgKbmYK9gHRDAP3dqGYT1FrFiopgrMghyXnM4pU4TjCshoX1aLa",
  "key49": "MBsgK6TdqdR1t3VMsiip4FH3WtTGf8c3eBWAviGBMCVLf34PFhAXvRR7TAQ2241uNbgkTpBz4qxm6Hsk8nxGKRH"
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
