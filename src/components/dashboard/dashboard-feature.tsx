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
    "3jy36eg86PVjxgdnwWDRzbaUxGzRU8ar9XqZUoXufk4cyjx3MNpqbwg9R38drW6P9Hm6WDLAdEa5Tdk1ZeQmwcsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpBoD62iYFkyCYjKZ2A4W4jxyPzZALMD9Su3VdGGrkWxCPmeDHry8biiQdVywX1YkA6Vq3j88MeoaHXf8oyc2rN",
  "key1": "4XgjahBYT34nNV63AZkTx77RhLtdXfbwWuAPJVpsaofx2gnT1Qd7EmaKZq6Tr9BzpAMY1W8K2togocp43CHtPfax",
  "key2": "36L9a94ouMoTPpRhhhGKbJzvVZj5mbm75k2nEofDaJM9qpjVRzFVxn3CrrYZdbwBMenLbo3iujPgfh9xLVtYXH7w",
  "key3": "3o6gfrT3HLX5eLwG9CWrAJKBDoKvfZ8ifc3T9KxhVynmaQaCSsh6VGt7gxd4uKpGM7S311grr95qW2aJizciat1a",
  "key4": "2M7tk568wnXogR3zZV4HBuVF1N7uwS3XEFokL9f7vBS8guCJ9GF7sn2u1j7gb2jkSyMH286mtPj5WySvsDToKMDn",
  "key5": "5HfprMd2WQCHMieiQ6pKGaGrAcMN5u7rBj1kE51gGXLkR3Npt8mmZ53dK2JGqTWAMmxg2XW4wh7WA1CUnTzMAraa",
  "key6": "59fWscfgJwnZudpXkgk1SavoPoigYxkPkWwxHtsPy7DTsF5cfUUH52ZYkjD9VLHSD51zp7LxJrPCgH4U4yB4zLwm",
  "key7": "iHPSWjgbRcT4LnqSZh6amkiVw6dVqvUq39EvGXibetJocZVLYxTpyUuinBuRupdpW8rMpAiMppYuAiQkDMNN3kU",
  "key8": "3pbD2Lwz4WYCHgn1j9v1Rfif81m1YViKzLUYvcdrM5mH9io7zycmQUoW3mG88KWNVHNLYJbZn6nCbn7MiL8BGzQH",
  "key9": "ah6R2qAsEj69vpxVP4UGj3BpJcMBvSc1E564pTUUoURQMQRoQbZsKCBzAJ7W25DuWKCakP97Dycmw3EENzk5wpK",
  "key10": "5jEHWBWJdCHWiXkUwWvKNWLxdKUkZkgeixq8QiYBZMjkMozkZaALq87JmwEu5QLr7WziaXc6mjapHrU1WiGFkGGo",
  "key11": "2BsUfXeEz6SrtDe5buQF5mLGeDmRfymnYKUHURzDbRsMqgeCxXtxYf5JLV1SJYe8d7W8jUkkwigBLS4G14ayHuBa",
  "key12": "aq8fjvBZay2zuQDtyxAqqsF9PV2VXQv3NynAb9BgH2cZ52qJH6ZFrnJbz2hX1PLuLgVgEL3aEyffUd7MQQ5mHax",
  "key13": "2bRA7XiRF1s9bpi1yUJwmRx2rAQLhMstqYnM96z4pcEc5CKTrVmWB7zdxKd9VAxXaBkc9S7DpfXPwwGzTTSYnZVd",
  "key14": "2KHgT3Pr9GQ7WL11qwvQPt3pd4fM1mg59DCNsAu5tEhoUxNWtB6Y3ggctwPWzE5kUVKm9uzSrXKRAHAKwVHxvUbd",
  "key15": "BMaym52fPK1muLaydf3gdMKTESZ3AMJrnRZob2xRMV3aeSWDexpgd5mLTesQbGH925axCPYHoFSBpATzvF214i6",
  "key16": "5cjfHqVRa8CKMG8muvjiKmnXzHfTxN54ghibMVmcVdLTXgbKM4LiZVwLQGJfc6ua1hcYZzmzULMvb47bMCMeK4cH",
  "key17": "Xo3Bm9Vv3EmrsckctJ3eWouUAot3dDn6zSyQ93Un36GQgWmJotqoYuaE5vZARrZ1vM84QNHTjAUk7FWVUqvVGpA",
  "key18": "2frrTAavyfqbuCkSN19p4dU6q8YfBKM2Vh7EGekcHPmSga7f3UguRGWrGuaKjKNBEunS9gMqXpgbPjq3jtXMBjjH",
  "key19": "2QZR9eWZHsWYLdjsazPF26dhCzLxAS3BaepEBMwT4dgown3eA4AFxdBCoESt3HvBaEZ9eGf4NWXfvSRxSJdDB6pV",
  "key20": "526T42SHpCy7TbtQxCznRgCJbTgY1D55mvN21dS2m7AfiCrwcH6nB8sogUHGuvAxhfwpzuXtqgRVpqqBqN4Stfnk",
  "key21": "5h21ZXT5mnjCgr8ZNRoj56HyJ8LCBe1RsMfYJYNeoM78vZSwUyBcWHbDwXSd7Ln8EptziLTXpyNRBqdFCweGm5y8",
  "key22": "LG21RKTBuh8uxRy5neEdf2mYvfFHA1Pa3eFPH9HP5wGqfrUcWT8wCRyKjncGCZrbP1jqeHyauYpxdpZCkFTv7xe",
  "key23": "aeY1DSJyHuuVQ3hqz6VsDycwSkpFs6KePhzNgaAYEoAeU5WDAfNT9YP21wDmne7MoGnWss7RnPpEx9LMZfEaQxD",
  "key24": "3Xa4UrxEBaQv4DMFVwKJjF8SCbeA8nLhcC2UnN16xz3c8gNU3i9WuPxEjCqGZWgvv7zTuavxy5S6nxuaTTzuGMxo"
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
