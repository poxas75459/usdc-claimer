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
    "5UhdHK6f1yiK76FoozvWgmu7iB6JqB8eRSf6jjrj5R1swD77jbdJWFrtg9rh78BKaPKj1vtdCEj7zAqibzLTA1EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VymvXM9y8j7FPfAwTidgaDKF3WTwBLcg1Nvzaei8AmACToyiKWTHDsqZFN2wiR9LYgxsbrT1f8Yj1MLrwYv6Ed9",
  "key1": "5yDvUrpogYvCEQYwni3zvesYJVjXxURf4NBTTeV61FiZ3cfDgxWHNdPx7XrxhqmP6NKAavk7aJEsTyuVr4HqZy5w",
  "key2": "2v891KQyDjsXBHCuQpi3yU77u1fYDhX2jyHWyuTdD5zqdjQP5WaeTmCVvhJ9Ak2rXxRbVb8VvRRazVdWvDdwDPeA",
  "key3": "5L8Ep3wdkTWWKqHyq5zpAFiyguwhmbmDBefx1oAzDTCWvhm1iTVw4x3qrtm7DPR9cYWLCWX6RzfQ98yxKNfgNVvG",
  "key4": "51VmA293HvFSdeqNRtPbBWF6Qphg2aMEr8o3VAczftaaF3YtkfWdQheQri8KDdizpchN28aJpbfoKZX5zahiTaxJ",
  "key5": "2QQjZmxxXU87XxwhoP6d5myGMma5qooAM9Kz7woJbeA4wFdf7FJyuHdEfHbxshWwNXPvpHc1MXp5yR3qHJfRowew",
  "key6": "484tJYuXueiweQG1vBbJVrke4Eyj5VpQxj9Vv5PpCovjpNDB4s7u8EpmtJNbFAMAf5PgeDogrqzJxtHgsRnFjT2M",
  "key7": "53jBn2fTvUuU7KLDmJEYNJTJVEviCHLbSgBTZ9swgNEKFuz6HhWE5QYvobVngrMiatySBy1sE6yEFS9xXwe8XvSA",
  "key8": "5P7AT7LwtV9erJeaZcEpS1N9air1bwarNRbYYvFT77kfrJMtbfBaVTCEcNGvXyPaC8TXt7tYD7PvXoXqPmnJjYQg",
  "key9": "4fvXRLt43vpPB8YPyKTUZ9sNqd8KJijdzeKLmHvUpuoL759gVK2fsuZxEGscuYUtk9s4mAARggEGX7LqE7UnGxsZ",
  "key10": "5Yf3r9zn3QKGGBNnAQsfhTat3McytkCFcQ3RGa2djukuztNXT7f4mZKRsjgFxWZyUBXczSKp3FUH9vUJjMHAXoLp",
  "key11": "4NHTA2maHw82ybdR2iYycYofn1FD7gJfojRFXkYESU5asPT4MEpwWMo3xjqfxgwQ4J7DueGJ21JCB1xHjkng44oR",
  "key12": "5iaBXpjPGDcCDko9WsFgFN9MtGFEYcHToarTBqEa34R79vNfjd1L94PFJEB5b1cyWGmb8G34XCeVa1YHGxWPbpzz",
  "key13": "g2Bx2Biaix1dFChPpXidXQM6HZnxo4C6jhqEkcwDtwWTWBBPykMGi5JLdDMmpyfdKoF4sfk84dfo1uMXqqUUjGv",
  "key14": "4bbcUaNSzdqGwE1QhnNeR4AewEEhXt5cQ2xtn4aU8VJFAJ5uqh63WFMSMePcR9ytARymyefbc6avqNCADzt4TXNg",
  "key15": "2VqoCm2HSDyadjd5E74cNwqsE6Yw6sESXsmQ9pzSWNh7zvCE6WksMByY8u6STJEh5gQiJ9dR9jsHQReZmQNsaywX",
  "key16": "hnCo1zPJ86PEx2MuBUQfMCqND8bC9kFEKYgs4FQmrG8eQssLFHYij6ne45d2Lwa25tGqnfP4tRgWsiwJmXeNUXB",
  "key17": "5oYE4k8k2RHibKZkGymweyLgysVaUW7cbZUyMCUdgde6QAS9SJCq2UUnegD4uadNLLeVscZyfNVW7VKfuByFgkXf",
  "key18": "5eBnAtTmYfYkyPAeFpLmnT49Agxe2ndW3sWf4a9sv1DS6a1aS13LNv4tKH32hW2FpozJjb1S5PXo7b1NLv7Yd9NT",
  "key19": "Raq4ERvf6qwGhxj8AeBtogCzxA2trSoGTU2uuUZerwMfRKqnSrHbTcraA6puKF78fa3F2J2gGZSMoxKvQY56RXZ",
  "key20": "58ZBbp5wLXdTTYmzFqyU9gJdAkRRyy5aZU6GgkJbBdibyc144ehv2qemD2BRBFjVXSfGp5LYZgWCFQ2791nMJsqj",
  "key21": "mpwWh66yRibnTqEqZYSfJd9SHRgh6rPJ51nzqwxAAHBGm1vGfEfvLYqaR5uzHUxbmdb8ivSMSop3M7n9waVhcKm",
  "key22": "2TeEFq8edggGLBuYmrQ8EpWzhVonmmZbRVpkSgByhvovxrtFW5qiMeK3n1zDGzacUYfT3QpvLt2g46Hkv8PC2KZz",
  "key23": "4sqFHHj7iUJbf8ud2xKhxfzogtgpYGA21whth2nNCUGWt4KEjLRQDGjjszLjQETg7wPswZwfK3vF1YT7d4xveatr",
  "key24": "4gfhbQwE5JBs8qa2nViph4keoqXc7EuuFH5x1h83t8HAS6FXF1neF7KyiwehFYtsbubKtRTE8brVRhxX8mDsB1Fq"
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
