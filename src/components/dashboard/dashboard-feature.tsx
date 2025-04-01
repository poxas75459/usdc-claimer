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
    "2THJ1mKkFjxBCdgZb8p4gKjdQdS92ZcgoqbH2LmUj8mdMQ6F5eq1q9ZgTS8PJjy16PJHxFuPXyj1ViEmDyJczh3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQT3GHMjhvhRYa1AsVBWogVWXotQ9Ru6JSET41pQjHE24eUWwPkyDk2vjpNgCn83mas7mPKTriGc1mSntbZQLyR",
  "key1": "Ac2t3bBJjvSBtcb1FK27rf1tXaTaYZUyC5cWdK6j8kHxcgmBRrJytJRUJsygC7ujSZq9BaBpsdbXQevF8ys1146",
  "key2": "5VxsVYNjqP11sYeiRdcoKn991yCpX99UorzMmiGy1NpthSyHupq4u9FV59ebSk6z6dwPteAnQJkFtuDkmetVstRU",
  "key3": "35G7EbGZYMgn56oUvtovpnphu14ZRvsWgQDYjrdLJrRgdYGFB2sBc4r4AWckYS4bMCWt3BkL1S2k4e7n3CsdZcmd",
  "key4": "62MPYgEehA2xruWs1XqeF3MpWpbHoybc7Xzw4g9TTe26fmnEeJxE38EERqpjMt5VvhkCe3RP2oZYrgfPqR3ipcQs",
  "key5": "3jJtcoV89DfMf8ouv6NDqzjZnn56tLW68LTT3AaaJRZLqPpe7KFAHHeWqWtJ88rfFhGt6btSPhoRvdDGow5xxnJB",
  "key6": "4McCyqSnU9hLcaEDoJqjt7kmKP12bKmAHerZV1BAAKo2PnsLMn2nFSSfvH7VXQU625qQquJDRoyenZoyTVyf1uKc",
  "key7": "2PxB2JL7QNuNTHgUvgJY41KQb9Nb9bRnfT2J8Dj2YYUp7KLngdGzvyV6ZBPohf7AUQMTMvHnTn8G4L35VzgF24xE",
  "key8": "2LxgBe24EQGK9Tn1gDwSkaQjiL1CFkANFzXfC3q3CyKpGu8CCVMsJPijH8SENoP8PRe6L8Ph5htRbw2yp4f5X5Nm",
  "key9": "jRJwxLKq8MgkuUzY7dUhnvBYQqVnbvhZDz1RH7oP9XGo2tkvFRw4C6o6Nogwbn9wDsLCqQRGvmV27sPvDMagb6Z",
  "key10": "4asT16Bes55pU6PpyZjvbXbGEUzo5XQyXkmAPBmivD5moBbqqqppQqrghNbG5Pdcn6ajGgy3ZdQnbzycg6TrsdNo",
  "key11": "5fUwxJjC8cFkTjmXPZ2xKYoUpFXZxnvZa5j2yHi9LdQCxkzGQk9rvdBKNBw8YcfNrLJyr4ksZrizJgUs9wr1hESM",
  "key12": "5GRqoNTPDvoeypEHcUCwyNjTTHsFMyfagsmDxTVvocP3n4RewfS4moJz1n3ZcFP5F7MUcghN3FnhN6PUgSdT8tzd",
  "key13": "55qWcyUtd9sSNNq51cbTSuJpa3DL5VnndV2wsjxi6zMUWLuAMTzH4UuGDWnTKyG5hhPvBSQ2JEzCtpvDHfoQupYM",
  "key14": "2pB51qkjcHfGCyQCX8s9ebaBhnDXtku9z1XLov5qhXous7aQ4rchCwg2wxmJcU4CVmZc3h6nECLtdF8MV12mYJV5",
  "key15": "3yE8NB1Qk7h9aGMRmCpD3KDXPpjLHeT5TiUg1eWjcJYTTZ9FLZDHrfUykHjwBympGFoWPKe4PAjmYHKrDwNxoKqk",
  "key16": "5474psrCZDmLjRhcRtjNqQCDnqF2ri73UMtKjU2ZE1TrVYszhHNimtfxMm4HWHP5qpJhsLzmV5GcNFuArkHaJcnj",
  "key17": "3aFRAX9yXgBEUCSxJsBYT9mgxi6vR3GozraU88kddoBm4bG8hHnmGgWgXkPcHz78AAv8MoSunR5KrSiv4RukW13V",
  "key18": "4NkPaEZvBFgqtHLWp3RaRUAYVBqGFYx6gNeQFNv2yHNXnCqc3yRVNHUjtEMDP7zy3RCA6cokEAws5QsHyEqtqvQQ",
  "key19": "5wn7XfyVihcFEpkn6eHWjSwj7vywji4fE1hYVpuxTkHaZ843ZQiqyxUP9tEFz7hYRcRrMNPcsa1qhtsVFErP9yVR",
  "key20": "4L7YsRBMfPa1YEKw36jc31pDFsmwNBhBXSnTKtbCd8wN2SPHtAZ22D9Zd6yWLhHuEGgpbyzsMBeXTZWAgh4iezdx",
  "key21": "4eAqgSfC4Qs9YjMn3UQpSyGgCP9PkNy1GBMZ1BaR18ZMYkW6RYi8VJf9fRqJ9NRwokAUd9oBPv3ZxTd4hqneQzmz",
  "key22": "KtEtTBdv3rdmtoRBZoPLeD3aqu3fvetujDL7YDNADWup7afbUZ7Wbtgng8eptmfbni5po3oMsvwgZ4ocDizex9s",
  "key23": "39qPVPvG15HYZtm1kATBYZF4CbE4QyZvL9Lz6VaiHrefzBZrkCtfPaKE2mnqQb5j1DE3vxbpbzbqrb9dN8Yz5bJh",
  "key24": "2uu1UX4kJZQMvbQx7zWqJsHPRrD8YKUzEGVhECWqSLPjSo8xY8NCRNwFCWvi17eqMi4YGZug6A2kPoyJ43LP2tfZ",
  "key25": "5zHu8Xb32WR3bH5XvRDobfTXVhR6yKtYox8wFqW1TYV9EJsQaoNdMtRvgFShuXrLj4Cmeq8SzNxczjg64sG1RojQ",
  "key26": "2xkv8QRui3nsWzPxFkhi2V39rFqj9n5yJ8cmMgxmzWFZQerwH7CQuzdeSz21WFNNPcGLq3Wozbn25327RBeSKSXT",
  "key27": "53VxaCkkmgAqWBCNmwWWP4TCyEh5Vap2eBVPAKsz6gD9MbieYjFYdVg1gpvfP8Y2wHKae2BZxwr9N4BpFNMtj6KL"
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
