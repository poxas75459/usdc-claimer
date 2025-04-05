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
    "3zitLxiNrbtkH9ttz2PgSNQQHX8kDb6ziT77ss6JPtUpbXDH777Cb5mKuFNY4v4Rh4choqxKJiLbRWqgCrnVgvzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELQpeWVXZRmpRndyEFJDqWAbrpJWUumh11PXE723G8iAjPYyUet6kpSje8awPkTTh7QKdtHKB2mpw9rxZhrYsdD",
  "key1": "2J62LqZkU69CLGwuZJTcqAG9it8JN3cFvoZtK8ERjTVnu5GY1UU33pMueZMUqDHLrtAtSe55eoKZchfrqK1D6QU1",
  "key2": "4E5Be2wjWw4q9Lqm3MZ5yrRaR8PDz6M9sSsu8PGex44KvyhZNiqZML84U1N6fgzhGgWV8U4eXYoiV6cCE7ooyXkk",
  "key3": "4qQubTskytidMq9U6Ynf32ShHTbPrf4wXFqfqAQqiRyKX3DJMncMJUEBANPuSeSXkKEE7eVAKqMVT9fKd1Vy1mSJ",
  "key4": "5uuuWxs3Tsz3vu5Cci66vMq6yxmEBF7vQ8aqKiTugd3DU1jkjtDBATyKMCzQY7t4V4fJgigTpWAYYNKaU9jrqHVz",
  "key5": "48CPEj4aFFicZrMvBAuDFbYxhuhN82hqqKXKasToWGTXdCF5h8mvhP49AjjaitADgsvfjWq8vhV2eJbMsNvJAVwz",
  "key6": "3FrX6Nvr9rXCMpZ5cv6V8RCUXN6mWKZtQ5kTvUtB6xZ33MbqvRHwreTUFd3HCbfPJfd9fGtUQLumBtLfeVmHumDN",
  "key7": "5n2jKKtpsnebNcVGv1Vn8f6mpjjMfgzvrUHFfTiFnDQtZVZWJiRfhR6MDwRQu8ZLHeiriEz2wi4JugQNoQ1z9m4G",
  "key8": "2B78NqtNjL62EuMqZj5p4tiDYJh29uKsfA47iw4VpaSuvdA2G6A1rVWQRr65C3JWmWuVjLWiNWiteJLsLU1vkxEd",
  "key9": "5LVDgEUFgb9Udn76ZKgM3ta8q6Vb2YP1wqEHNES3zQDSa6NJvTNQyAP17XAtCiuiLuwPhwwD6Vg4y1wfQLx986CX",
  "key10": "3F7obtpexXRCzpAb7TUnhLuDwHGrb4ExAtNrh6W14qSLDPc9VnwB5f4MU2gHjVaLw1V2Z8tc8DXSQ1LXLr5Pu16k",
  "key11": "5hL1MPMBSuoeb3Y66Yp6NoUoHu74UkvJBchTRbJ3iDZcVAe8V7fgir3ckoMUn5BYhhmNV23aeXcCNLucYKozE8Bf",
  "key12": "2xbFkqYnE8UCUJzQBPvWSUdJVWzFnFEFuqxvcr328fA66B3bXJL1rUk25TDZgjexH5oSRijuQr5hCHVYMQH1tdhs",
  "key13": "3mCMNiP9Ba74ywhHapNDBbdbhtd6WzQnzGA89w1mF3GoUTKEo7RuJYz6oKzozSYXNYPJgMmjqCganDAPEsbmXr5",
  "key14": "ies2FrX8EzHCtCTgzPJBrDP9sgaPgkSXsdWUAi3TcXb8WR7r18Cy9Ys2wosRhv76JiUcS8uLKemBk84w3gsm6fz",
  "key15": "34e6EZ9Lu9criCpTFJvqZpy81jMfqvaFxbwG8pbNavDTEGSkbQvN7ATCkCE45cCaMzvUFsbWatH75x4jwDnx8aNz",
  "key16": "4UCBffrwBwuBB1sn1Kmqn6fnLodmtB5tfsBwmnU8MoXYiPHRJ48MRBvafBJ3rxTHMffvTbKQ1tkWhovPuTPpjxn",
  "key17": "636av3PBDazY8QXdq2SFZwh7kiNWv1scV2P1yrQUBAr9S7jgixvgsrR8AQq8QJAvuMuwofJCuKtSJip6yL4EiZ7V",
  "key18": "5RwQpG3JDiQHPFqDCHRXjdpDD16uzd6jr7W7LLxaZLkJyXqEJb2PLeeEsdUaZ9uLH2XXLnW4g1sujFzwTzPwmNYP",
  "key19": "4EnhbacWw9qCmvXypPLjxvcrEYWUC33ixkqukBTU656z75HjGpBCe2ifGUasVQsFMtVWubZmeCMZF2HFc2hH8UEv",
  "key20": "7MSCA7rPHGSP8RuLkPwtjvDVtt9GnDuKp2vmZf6Cf6DohUFdQsLbhYtSE2dkXVkSLYL3doJMktueA8aCKSn1fn6",
  "key21": "538rXffjEBchH5gtVAeRmL6aMHvnndD7thiQsuuKWVq1Gdz2sxm3T3VW77oGYyXgtgajd5R7szHJpsv4uU6HXtUv",
  "key22": "4Do5NhAqYaRKxk2n2jautz51uRwN112mTm14BH736vJAvGPB1awB5VcB4XJ4njDN3ktCcpcrJ7La4xHUiEADKxz2",
  "key23": "2ys9Z3Ga3vD5RdrLDJjXcBFurR7anGMj4bpts7eyEm4TtZoaFYzL5qJe5hihj9WhRyVdENcZkJtTo3C3xvHkrCsj",
  "key24": "4ic1vz2dgBUuewWrLieNdvA49y2yenAJQdoCPP4kyXW8zcwQoASoX8AM3Rsg6uTx4L9LH6LNsGZ3L9Vair3yB8Xx",
  "key25": "4DzqQupVSNZkuzouXDfD936Sui2so8XFCs1fNmPA13K9A44hfGyXrSmjK4hQkkMzCiSMphP649VS3tkQizbc474J",
  "key26": "4pVFTFhi8hRL5FKzQ2HYVMwLUYZnGb1nUVF9fuJCekTiG2V1ZHRFh1UNqWmJ6SmuWKUZZgRtVac8uHW8UtPYfSJe",
  "key27": "4fAHA4NYHCcNBYaWio5ftaNLkkVd5iMn9R3bzV8uL13gFiDZJRSbtCFsk32eKQYVUKdk3qVJvZcGTF1SUphGnEwH",
  "key28": "4qTQNTiEx7UqT1HvA8BNAsVsY23o1bjDVraFwQpNUt5hd7djUx9pQ53PTCd45nvc1Nio3yT7ivEqf955peG1d7J5",
  "key29": "24PJJUL8XeCEntbkZu4bQmXPh9vY1rVYrBVudZz5XCzG51EwgeJVhK6NzDGWkPedqsqsN2EpPainhXpcGAd9vqY6",
  "key30": "2BAmvpNeSpBvSotqJGUvgzmXRQrRr7rNZJJvB6UHvJ5878FnsyDrHjKZU3FmbLMWG9xjciLVkHVVZC6Ndb8ANd6d",
  "key31": "2ShKZkxgW861M3DhQ6YezumKsr5WmnodJ6tg45epR4o4DCZZUptBHacba4iyrrCsupt7qEvbtqJ4Y5wos2Zp5LeH",
  "key32": "4xZtyMx9KLKcW7SApFRe46A9wHrLSyyPc7fAVc2731z56CCRptDTxuRW33phMzUnUpqXCMfv6xa7DfsnDakyAbn7",
  "key33": "2T8nKCnMe3sjZhyLKBmnSaQEqzHtc76gBxN9h399vgrFrpaLJVaXJNhmqjbRDJPerfDNxa1D7zaxz4B5c9PPmCkS",
  "key34": "3R8c1mqHdfLjGxyiv31oQEkL3bWneYB5u1Kc7yWYWSRtHF8vC4dXarQ9JtBda3ZDEp3wxDA8dV8ocDhkepYS2yQ8",
  "key35": "3FueRoxtsFxpyyktTomRTat5XGpEBc7vUwGX6AfBZMwNmv7sYuP2HqoNLSkNCFpgBG3oUbxbDS1YbVdoNdpZmi9E",
  "key36": "4xbkm719tqPkQMMYwfvFC72jyx479WbjfZaqvdGCcctJEXqWiauMeugcwga56vZcej8vvazaQM45FqkmScwHxDkD",
  "key37": "4bJvTwVj5mv6YY4GKBEfdZP9GjvUDfKiC6wms7oXrcRBMFXJFWC5VvkisXc9ZC41RN8bMSdR26TGaPEuL6nKsBXw"
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
