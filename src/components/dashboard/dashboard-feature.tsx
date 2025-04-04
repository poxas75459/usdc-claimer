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
    "29aBEz4mFrCA2r6fbAc9N1i2D1fxEisHnKLgZz1dMaH2d1M36JSJJW2ESwD4cucCfaVp6LVMW1ti7mc35Bub6Rz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VeSYLHsFRzxhtHndP1VSouBv82iVhHiku4nZcSTXjZQ97cRjZTzUoaqWYBegafMVhXzTBdVob951h2QsDNoEJdY",
  "key1": "52F7Cnx7qGKbGnZkwh8vs3EbkVmMe8M4tHJJe8S27yairVHk7UDSHuFLu2SyfYZ2FzEH2P2JUpbs41LjbsS9ZcZt",
  "key2": "2jNpKScN83XBLaqW5JsgKZBbWPdqMjXPxwqx7DsQNKrEviHCXYpAWNEz2RZ8Fo2mrPDJc9Lk8QvKw39sEaZFENnY",
  "key3": "3r5GdpjHuVdepugqTXS1CemqK6ZH3ADyjuHAtYGkmvBWv5KNKVrZuzFno9EZgD3bEri5oRgxzQzKhEhVTAYBABx9",
  "key4": "3U5zDdrLKajujQyKN4nkxKF9ZWx6dKPErpDcYitvhpuhDv1Gg22KMppJLJZSougzAATBmLyce1qixKNNjxMNqEKk",
  "key5": "3pXg8a3Fbtf34Ey6rd6YNDgG3vz2URrKtMXBWhE7ApQUiuMmoXVHLGW2zBMLckmut7PojVat1TStiLyBHuM3avGu",
  "key6": "4CKYUUvJMHQocRSHkGN7JhuLNdjofYvi9iWwcG1ChKqeuXTmhqS3UPUxVPpXJYLKm8pxAu6hPiDTUFNtqGuQwSQP",
  "key7": "61uXP6TD8Msj5PU87NrUPMGg3kZ4sgJX1DufM6HT39oX8jR9BqpYZiFDkGGstrHRtbT2FpwXai3qBtJY5fwW7ZyU",
  "key8": "w7mTbk4MjYFGnwYS9H3XmSkhP3nFrHhn6eQ3qdJ4AyZ57Z4fW1W19TRfiXpbonzhKWgKo7qxd6RYCu6aURoiRpu",
  "key9": "4agGyN2p331dR86Ccs1Sbv8A99Xd63KsDVmukWz2gJVVcTopLDYTSPohAce5WTawt79vBfrTKcxAKy5MBFZQwey2",
  "key10": "qu3tkcfBW8gKthpTxWfRzYaVpuK9Qdiw5LEVXn1bYgVc8fTZX7dPYWXP6noDxgZfqaR11kxEGqdFbyLgbHbpoXg",
  "key11": "4zd9C2UMNpLNFVZPupP8ffe5sASbLM9cvepEuthrNfzjNWDgFwB54mye1XNXAgxXQBeumTAcc2byRnzNYRn7sxvv",
  "key12": "3cgRrf2ELdymnBweLh15xTGF9Nf7RRvjuGFmaPhasbMuXb9UbKAj6eXL6H3M7pikrB8HDiQm6vhhP4PXF7o1yBPa",
  "key13": "2GMRGojw5EdJCNwNWeS8WF83Gn3nLDaR8GirzuDRbLijqqiz3RknxfNeFLDzzJyuhATEfupPoKCk19o9kFFU3wrA",
  "key14": "fiu7R9Lnf8JcEXJN6NDsx28Lnb3CgFQPSd85F6FtXqbc77sCKYGehAjDkj6HCtw6H7ZokrcqoGQta44DTPPzq3P",
  "key15": "4c7UpT4CqMibc8G5EsgDedkRSm3jzD4YFvZTbQN73LJWrZriidSXFiVmd7vCz6aDrjjzDyrkd7YY86jquXAs3qBv",
  "key16": "4pdQ4d38Ny6mn5bZxbwYVSt8M1SpbaJTf9eP7LU4bYmysF7uyWjUxixF3AE2xjhZ1frrxVYjzE1pBPnXtFzWn814",
  "key17": "3zrU6x6NpZgq3nnypcxNxUNqLn5AXnwPcKtKfu9WZePU4L2Xui1yfp3W1tsBVLTZ6tK1nfWU7FkZrnNaiRP3k8rE",
  "key18": "MJ3EkRsdHGRXeqT76JzW5W3g6K7hfxnnGHZJPSzxc7vjQDdFrW8Kt6JgXUqA2iKfR71GyLxkYj6aw9s4tSsWWAz",
  "key19": "29k5uS69K6bATHufw8SHA8JCjtpzZdX9fD4bsffzSJVQK2bhB9cni1DHaysi6CHN7xDoxnhBpSBC6Di1gih2aDmW",
  "key20": "4T9AtkRevAs94LLgkRcPNXdQDUTfqyJGVekNJt1GaSG8eznrCBCyHzK8b8XY21r3LaHHxQq4aDrXrG9gwqP53K7h",
  "key21": "34FUKnbK2xbf8wih7fSLtFdRikfTLFgFrYxibJeaaufdtuByzRpRjsnwT35fMFrN8moM1eQZ3kQfr16yS8FvDEgD",
  "key22": "2LAkFaqPM8YByKjm5rnAodVc6iVvfDpP9JxGedKsEULtwxnZdQbJDqnZrzUZjSfq42Tkg1eraFmEVuej1CfG8Hkx",
  "key23": "4K6w6b1Xb4EVb54HUY7y2DKVLuk33Fxu1gF4CoBqGaewA5dELuCmxhSouXSxZeUyWHf5UK5uRzmYNemdVYuTdarS",
  "key24": "3jhcd2r5Co82P4z98bn3nUocqqRAYKmaDEcERUMX79xDo1kc2KkUasWCWYPz4DYuqUvAcDVE1jS45M3P1o1JyDcK",
  "key25": "4njwsuDQGFN2rCtSkfXKXQDZFPvQZWup8P8GFDs6j5s4kEP3gd2Xda24wtTxnhUzkbfpfiFJGYQQConaVTMDzmVM",
  "key26": "2e9KG3DWvjatUtRJd2BWiroxTL5mWV7qEbhLo2tyBn9TsnQMAJjrbUsDm6CR2m6BLmy6EfALw2dByMymVmpJ9KVB",
  "key27": "3NxKaKxsTrZAq1WvbBouSE9CHUzKJpF89M149rS6qLxCbpP1SPTrFn9APgh45mzVohsGgYYTM8zzBjJvd6SXzbfA",
  "key28": "22KG7fjxwxVUuvz1UsWnRYWJCBeTnFPX2oxDkk3tamH31FA46cBkRaPvp4CPpfhCWrdCsayM4pHTGXa9CAJdKQRg",
  "key29": "3YLFNytS8HhLn4rH8aC9dp3FWaQj9SX7WMTHTrrrSuGW5MqwXUZwp83uSjVni31GVihViz1Yn29Dyarq4gEu49Mt",
  "key30": "2PKuSpzSbip6BcWPqKH51bwJs5P5VFg3X1ETRvrtwUk4Fso39pAUmnwRb5gw6PNCQ45KcFJM3RpufGR2zG7Ag7Vy",
  "key31": "ZfvqkKPF7xut1QzQ7AUKUc9jRh6PBztrWNoVAWH8ChXqWxB1ZniYw2BgrA3Cn42aoRq9Frm7pZqf23cm1aPY6Qv",
  "key32": "4wBYypcxYk42U7XbpYxKihxsD6gogPLhd4hTrvoiPszCxB3BAhneqeSRpQ9xXRgg3fH6LP1xZe974weo6KRhpXGC",
  "key33": "3q8m5Dhn4DyejHPPzP4LyLvuVBLN7DWZHvN4vm9L3QB3NT4X4kqLHc7DYbQVkRxYbuDgKF9GnCimW3jrikNB7nWe",
  "key34": "3gkBctNTLLdAhQwudaCGk2HUcHgBSydyLDLkrTy4DtxFwrX3X7y16pzMSstZBH84b7bk8qHs87io9XpjNDFjjHnt",
  "key35": "2A9EzHLfpcLWz26KZHA8YTqpnQFKMDu5DE4KiMRQs55YhtGpFxiFrg2m6tTcXYFLi4WrcK7abL5jVfyUsBEotk2Q",
  "key36": "2WTTjGJSAkLGwa7r7CydGsPE6pEP726vY6oGsQnKDosUBEvfc9mCRtfnpcmLEjkKxLMDSCcxpUNgHyekXCnEsNt5",
  "key37": "4GiFKNe1MMq8tLAPDHhcYeLxrYSJ9SD9eFGtLxiNBfGzAHXHk7ZaXieWc4BtZyddMCrS9oa7Aix2xynuUnXB4Thg",
  "key38": "4mXKL49JDqk29aQwpXTPQWpf5dUPdSEiRKFTED4k5ifKnrZDfpkyGuJ5G4PQLEAF7ChaUqcqv4w9mirD22Rz67qf",
  "key39": "4ZzTzoy2hM8Jzr1sh2VhV1GbZcDHKfWnmgVHHJEtSTbZKUZaa7HUnkynxtmZcum94ENUHfFNVV9fD3NYG9Fnu1k8",
  "key40": "4Zg9WqeWd5J1uTCruvSbbn1Dq9qQRWw1CCJWtRBsSEy7hNHumu2LrCuRGSC1oU95ed33tHxXQeRVrdUzdTVzFQzL",
  "key41": "5me4g5LRSirEzLsDtz8qZXJGb4LteGX1Dw4FjKKFB1tWo3L7YEv4fkjheMe6JqZc8W5Md55PYnEsDGWUwwxcDswD"
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
