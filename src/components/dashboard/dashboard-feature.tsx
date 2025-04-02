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
    "p3s6g6pP3g1E1fYkXvW5v3EczLT9G7n9MKS7XENYC84iNqB1cjJfg7xTk8pWhwQrfmUbsxiMhkof6oUM245Te8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37JvUVtKCiKNGQK5qEb8awwiN5RLtBZ3MLZeW6Qyt8xVJMcVaehkmDGgP7dXsrhmLfQC9ZisXKqYjhXmxyHBf9rG",
  "key1": "bjD48Q8xfAPU1Uq9B8uWg2TkCowLi6FwQFRzXWhro7wLUMUmBmimKjrJCu7zKboCZ8SvM9pbtMCcusv1uUgjgJ8",
  "key2": "67GLLacNGmbiki8nsY9YffVVCT6uwJuF6mt1aLg7HPNAkRN97bVZviLfuo6ERduE5DDkkeiw3DD3943KWHW5Hj7K",
  "key3": "24DPG4L6mKWETkPZ4apyeTV5FZoK2U75HncMWKVviz7mPwKsWH7NGUvRqkHfvCnkK1c7zP7UxNcqTcf4Tb4VtsRF",
  "key4": "2YEg6FUHzqsdrtmHoY9juETCDXVB72VdMzZJfYjgFQSdYso2rg23rmhNmeP4Dz4sP77aZT9rDE7ZChWUWqHjizKv",
  "key5": "22f9FFmVfkmji59Saw2jxH9TjFHZtQPXBxzKtCubaFBYpGQiPEHRgmCo9puTwEjaUdsdXQxd6iyq2fhGXtAnxM7m",
  "key6": "4AcN6Wfb3BgfHVMpgUhqoTEtpvygnaQS3fuB4T8tbgCfr9RZ6jkNE34Qt9ZceB6daEckCZy7P3hYtPpnJYMwE931",
  "key7": "3miQxJ7J4Pqqa99p6LA5xLxYjmRTFzQWk2ympSVRUV6quFGQXRDkizdx2PQcmUgpZDU5PJXStaTWGjdUvx5WbtW4",
  "key8": "3gmaiNsRiGXdeKQYzDHvmpy9fcU8Pb2uYad7LZhgiSjho44QcN9KVrykfUzGBXzpj4XmzZopXt7kDRsBTxmLgc7P",
  "key9": "2NacHevYjXGuFpaYWNUq7FEHTMXdTd7tpHPuv3CAHh1GqD4i4CPBTeLNUrg4cmnVCidmcUYVKHVMyACSKPUHa1A2",
  "key10": "3VJ1fkpR6U5faU3xycaM8H8uYJQHmwzoGsxynS7W4SZR65o1NppbUddfGBghw4pWN2snasBP44JZMLUEnvJX9fdf",
  "key11": "2VnhiYiY9vG6HN2K5qMWRf97hahY7EEjo1CnoPsXfYbeEh7H3tKfMUFqo1jTvU8ZZvF617eSqATVoPvG8qup3H3F",
  "key12": "4U2tLHj2qm3Xoyq3tZ66mDjExurSPziWgMS7HKnb6HPqrV4tFRjuLFiaRHSmF6bLDMc4pVKgt8d4Yoc3zhW4CbZS",
  "key13": "KDpKJMxQcbcz8tGkUA9HnxdzRJNvN6xfxKBDqUp7xKVV8ReDQ5CdHQFzkpBAWZ3DYXepJf3ZbcbhCkRUCPSmYLQ",
  "key14": "VkRrJXvEaCgKGZs7enRL11McJ77Fn4MZ6m74Zfqh5dqJQzvc4pFbeyfSP4LmJyMN8ehTbyxHw7FBqXBhtMyggit",
  "key15": "53GoYmtzT2p7hS8oXcGbP6xyyVkLx3W3145MPEqFTafwhULuNkbBF2ZADpyX2xu8219BbGjA5TG5jCf5RRv4QSjm",
  "key16": "4GDBPpE6iMesoiepHUETVwVbZUk57ZA3NxLLyK611EmNNeqHEEi9HyHfQqmUhHMWpXKawwYe34AnLDQFvJo4jah3",
  "key17": "3bxtpgvo7SytXGNsPeNob6eqJbeTcLJbZAYVihEKhug6UVHCw77RQcdZ3z1B5LLhjLNo9Dfz6DDWn1xQ1g4RfbPz",
  "key18": "2dBTyGpp4KVF5fD5ovQp9ugGSf6SESdoHWSmwS1PApypnj9zbDSeFucuddDMzcPck3zUp1gRvNBpHhg5kwq54YjH",
  "key19": "2HG6GoUKUTc9HBAuk6JxxzeDj3Sn2QB7XGxNV4EFZpEKjaudTfB8EBc9o8Thby8Cik2S6tLKetCsiV1TiKngwopc",
  "key20": "4pJ9ZWjaSi1C2Z1rUZTAx3FqDBKwbGfyRHzQSGvhud9gWJKzJxG9C4EZeT8wkyc4m6iRWr8hbqRtR8tW1B3SXJJ3",
  "key21": "ikfTN4cWMLujSLeUQN9hz2qGS6gbcLTsfpr8YGeRCN8RozL9NQg4NQBEn4YpqRrBNWZRu4BcRQiSRiWp6Bo4YZZ",
  "key22": "2h4MUrypDTzJtxCgc1xR8LBQKQUn2yWjAdj5psN94exAmqxj19vkFFckVpNar5jRwfta91KgsWW4xwWWyXPPQ5ei",
  "key23": "5r3JzrmzL1mCgBhfyGD4QGmUVT9EFj3vtG8pTracaB7chqYGQVKpZ1UKyZaRDPkc6FTMnyFHJQiNR3AVkeYtUjte",
  "key24": "3nR2EGRB6S8ngtsB9C5VJq225nbFX8KtJjQ682WnARzYtTbAR6q8QvtynRBvAMo39G34bry35NsRVqu85c8u3gr3",
  "key25": "55WePWyiTGD1htLNFeq3BhoZVu6udtNJcv3dXpjdGG3M46RmhdCMFydLfjfT3zZfuFxK3UjcerggAH6NrgjmvST4",
  "key26": "3WvArps5ksTTzbui8y1HLuCUDdQK5aL15RAVyLvG94eMUfkrZ6yL8ttnWtWWC9cvJVxG4ojb7dtvomgHmgLzK7NP"
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
