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
    "5H6SZA4F8pzogehCtXsJPQMaiVY5yvZbND122Rh6Ykx52UjXT3taSAcPsPbqYvTfCkQeQDAZ7ZsRZUQRR4FZvvq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AwFu915N3oz92ZizXLPfx5zPqQZrkGto2R9LvQWmYbHepry4jCxs2tYqUjvp52un4eqs3vukEbWpGA73KkojYb",
  "key1": "5n7RQUt2g1dkwv2pFmgYwjCZcqnTd23Pt5iKXxSztwRMqj3HHn8WWm3232pn2iWkGYj3a6GoW5MNW1E3SyV9gye7",
  "key2": "BMegpUSAon1hvoUUjdsqMtdKgaP7Dr1ARRbfZkaGciGaN3ARZgNtb2mb28PgwdmmXaMFiuJcwfDeKZLgPEb8xjE",
  "key3": "w4fjaJW4riY5MtY35snnXqNtMwUirov5iiTfbHu3mVdL2XyNSCJRDeRuyuFHwCtK2gauyPkYVmHCfxAccnM6uVk",
  "key4": "LrmHR4VRyh8UKvCtbmvhUGHjVez3XgdphRJbTs5TSfXZDbAg8jYyDKfzUisEBuJe8HQ45gaYA7m8P6rX6PEjZs2",
  "key5": "5p9fZkMrDtJMseoKfw3QfrTWwFRdEtccbE8RsHxV2NJ6TN4xWetyxjKLJCUoM4T7xoWWiRoC6eWsit8zUwx2BKYz",
  "key6": "41fW5pLiDXoovG39MYtgCghHDBDpn9w78Aa1RWXkKue9g9nbC8xd2SzAcgfo3Sv3zCHnUQYPje6AjkXLF7Zbeqkr",
  "key7": "fbjPPjCZAxJ4MwupCK5LPBoX1Jv2cRhKpL9NmustDPa4evgqbcKgBr2EMeuBPHbR7UNVdSy1rLzoMNdwvBG6bN4",
  "key8": "2HJyrs27YNxAPeT1JSimPQzkrrBiBHKR7agmdoAUXkXwQogXPvPbPuDg5osXYBsdvZjiE2xxCCkkZKA8ztb5PU5B",
  "key9": "43z8vVVs8pHnJox9yi5N7wBmnoBdDEFSjDq2pU6bWTk9uJVh2UGU7bdrHpBiaPnVzNgevGwZKrc82chvxTgWRYUG",
  "key10": "3LufJwPUgLdxu3zRLEmVy6oxgy4P1WeExxWiTL9iRFFEcrQp23gZyts33jL3drzVWv7e2WLpno9oTHGwmVBVpzLd",
  "key11": "48J2vGCmayZgWVX4EKxoEaxPYedTqB86a8WEV5CGxbPk7vcPbRv8T7axfZXojyZfwSfM5duBJreXtihmVwGsr57P",
  "key12": "3B86dwcDNAfSXksxsqKkrzUpkM2E14edHASBNCmSsMsTrgyjLW2ju4YqKvWAmjUAcnUnz5QbDSNVdNP7apUFVZ5e",
  "key13": "GWoL6PJS58M1X5jMrRS5vRdHTbUoG3iDwzV6t1YUo9jP15KSrge5ZEy1jvc7PNjmiQ78U5KTrLCCMVtrJ5dKgpu",
  "key14": "DZ5AfswFccT8cQzEAheqNq2MxRNN4D7RKaVnXZvqPbsgzTXZjxCogQWqJ71LeSL9L2BdpQWi7RFyrGa6bPtkPwV",
  "key15": "2RWsy9TmyTVANnszdY13BPeFnQnyjBtLFAx85ekNurXwq7f3Svt32fCsqRNc5q3DrFwxHtXvVhj8z7t7P8Cuhs2A",
  "key16": "3vaNdEDACTKczg16EEqUEXDzH77Pp1WYsbEtn6UyTVcWUyMoGy3uzSRkRGmxHfkzGUoNB4UTfviG1RjWJFQf4pM7",
  "key17": "4oFTWqombzaK31YMAAsS8MYqiMQXGYhq2ydtiBMbuRwtkF4SVxVuWUrRgbpxvW9nQCywhepRo4FjP3P7xq3RWP2E",
  "key18": "QqYtiFYSQ6FYSonx83GM6Kmnw82dcT4iQER3sDYKedEZ3gChqUTZrGsuHswxzqqC9ZtfFtihD3UVPr6J8gBe8As",
  "key19": "52D2EoXBwhUxWDCNVrj8S71z3FLkrEGfyUJ4wp8AKCuMztHFL8AszcibU6zDaBLPVC6nNXQVQbjYTqBccuCY1EHK",
  "key20": "tPudN4NKXzJGbK5gG13FRji1agL1SywMo8BidTbprTF73fuy1Kk2G97tRs4bcZ9x854fTo8wPCxSd882cLACSrt",
  "key21": "4Sp5aJakvvQ33ExAzn72rW8jQkP2dc8VxvPrXtXGnSAx1Y58Wb4Jq19wvPyaaa2nE53eW1sg4xx7Q5embxgWedSr",
  "key22": "4mTVUzBgHjZi789uVhVb2a7nHLPavJ3C7qF5BvBTts3Vw6wAvwGWqiTBo6uTY6Lp9wCmeus1WrbeLjSnnUw8d5tA",
  "key23": "5PS8CetpBTEv6kUDgmnySA3kGesHAs2BbUdf7iBcB9X5aGLbjJDm42vWaoogqG1waAY7M6meA3Ci4CEZHoPZuEep",
  "key24": "5P6G4Q3AKENeL8WNjgbU1UqSLmBKShzZpda4BpmtT55KDaBW3FNFXeRZeRL97wPuiPsstyqZowLwWn3HffZu9yUi",
  "key25": "5kEVcZHzCLYkBzTV5MUSz4KuiBpkGUtgKhq9SuTSWyLrdLLmJzofFmCHC2sPA6sxui47qMKuHCHJd45DAohMBuC3",
  "key26": "4jp1APGugEQfZTvqWxtdCDy4cAL6Uj9oKki9ymNYVrDpHvkvG4q8hKLJLqko85Cjj9ozjmpYQeAeRrEz9NW3wMTR",
  "key27": "3Ywt7vq2ibpq9HB5vYTM6rKkBvbqeNL8qZVked4rfSpQ3PJDF44ckEa2y5fSZwYutZCB63gAHMFfoAgeoK1f5C6A",
  "key28": "4sFtt6s258nQajNJyF48owoaGENeAuX7TrHoMUbyiRD19X9A4pbNZHMWcHaSUSmo9EMncgN1qfXk8ERNeibsTWac"
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
