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
    "4gJgHJtDKXrw8LoW7THV5nam8znnHBJEupR63vES79tCJchzL1qCqXdoWWAC6MK8cYLw4ReoTLyvS74fqCya2pJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eZo4yiPiZ7HSAaY6TtYk1zmqmJjukw5Wta5urbiYDhwsYgwPGYuoxp5DFwK7K4KJrw7XXG4wCbGRNELYVh7yEi5",
  "key1": "3X1eRQPrq17EopUn5m3aFiSJUxAAvEEkFvZCrFEa5yY6PBePqDJcoQKUT46PRZxZPh93TBQfd7ty2ka5AwLQoubn",
  "key2": "JJUrEQaupumznwVZCgT5LCTVkh3dz6oQ2W2JfmyH5t6XvLbHc9mD7aTkY8fexaXeg2sRzBEYq3T7Y2tPSuwAv5j",
  "key3": "4FP9bxjKTmZzNT2KQ85TLEwcBkJFXoZ3z5iQC44w35MZwzm1bNWWRyTxZpVRj4pF8byJH8hBaVWYzt5n45Vf8fPb",
  "key4": "3VKEBFMbkoE8fQfRjSHu1V9BuLqJkhRFzfxeq2j4v2tnVoKToY3pZtNqgcn7ADMPDMAU4fyepjjw1W5prhG58m49",
  "key5": "5ecpN66si5EGHePVNmLWYrzQoAmHM7rWkwXvWbCAJNEAq6WZyN4wxBe7Y3CZufkdcGnzmMauuwWdGkUfvjTz99pv",
  "key6": "4gkuWhqXDjdQYYxr2JqRq7jqaB5Z88GaCUK54YXKvXUF1jFGRPfvLxeUK8SbAbxvqoHAYheCwFhX1kDk5MXFR2Uv",
  "key7": "4EsS8fZ38oKaDRVcWGdfjQ3FnKHCdt15457tDMyk7HG4gHQxBA5BBomQXEDZpTmJcPsqP16X9PD8QVys5FTRPRA",
  "key8": "5qKGz1e7iY5YZx5ixSDZc25V8LBxtQBgnnvCXyVZsvdZ9C4jcaE3pJbbNgkSBXcV4LFBEEVnrnrwEnKray2CyQj9",
  "key9": "4N2jHNKHea8sxLroE6C6VrBGxY2e9gknArA4LYGpxQRWmfZT7ixXd16yXmQjxtCvXgi7YofedBbGuRmttdGkx4J4",
  "key10": "3dgK2hfTezzmiyJX1q9z7zv9VuGukBDt2FN3Q28JWVVrsQCy2ggdDfdTiFHjjuEzRPg5qbcYHHt9x1AoBx4itZTU",
  "key11": "4JzACp3w8JUkUXLr9hX8tpwQBSKsUWnzLdViZkpfCjXmXmwg5JWvWW3YRkz6ajntyNkhHxKSGtdMh1t5zhyjf6No",
  "key12": "4sHLxvUsXEY1e48rBnrvtbxmnC4PAZ2GS53AtCBVq9jSb2mcRDHB94PtE4CaE6YQ3oiorM2iH3GnhNESifk8rRrK",
  "key13": "kUcRnoLE7T6kRoXfJbm6tbpc9EyCS4BxTwbWzhk18pNSEGGfAz5tqf6DvgCZCgCXZ1UJ1nRLhbhF6QR2m97V7rj",
  "key14": "9faFmaRET3jqa5LPnV5nQqC33fzGxPic7Z8Haydxp73MrDuV3rnjB1ZBnMLRQ4oyHV6QNrpKDU2WGcJ8czDupaH",
  "key15": "fEwiQBgAkTnQxn4oAR3R6pSC195ShmpKLqt8SpgpCF9A919vHGstbPRpiv4NbWf6dXnku5Wnr8rLmYbC3gnymvU",
  "key16": "2HiJ3zJfbhin1GbtzcTvDdkF1tX64C5aUk2m4UheVHbtd3m7pi5t4poTt63uQbgm86Ki6rR23xfgFCScGk45eJM2",
  "key17": "38pMnbDhMYfhgL2CgKWGQDGnnsUJAE5kx8FebKJxvUF6zLvPrw3CL9A6n8hFWb6deTey7dwMtyBiHE73d5VuzbDV",
  "key18": "QTJ7bSBRLtjNamE9tLnX9H9pbjPF7tioGs6CRtvygG9m256qqFuVatMrnF7S2kBPEZE5TZVGjXwGR69irWnSiYs",
  "key19": "4vknJmoQi4oPZ4tsmsEtTKrGStSZGzMQpWwNL9Y8dcCbJmZdYczB63Fma2k7tgb9Kg3EgSrBnSFMgGC7p1RvseCz",
  "key20": "2dQ5koWNMidSQS2qxjhb1xpoZCKFepXBjxd7SVWeEL3JjwaCP8jkyxTUrDrfRmFKuZyTshBX6kYiCjH5sBRP41dx",
  "key21": "22JDNTY8oRcP4xrLBKve3Ef115RsbsAxNVfnNXtE3sTNssnLtFdEsKxcDMmWdxkwQsccPkPfKiXAtSGhLnDyTnUk",
  "key22": "4zaKsLFhtsuMsTsPu5cTheb4XUJCf8sA4pGmu5NdGnF3UgMWDcSH1J6kKS8TAo75K3D3M2QsuLuE7nz4R8XYi8vP",
  "key23": "51Gdn9QqwJQcGfqcYC3EisKqPxZHkAAJm5pwjb9f1ia4786heLd1U7ygm4K6TNWzktjGE2AXjUwtccYZsm9fGmEj",
  "key24": "2q7ZyPA7jEjhiQTyUxiVhg1Ph2q5UuGxPyNyqAXPbghw6Bzhs1dgtbJuyLTYvqxnpPdQYLLuHK8y22kAQxnY59NC",
  "key25": "5g2rbgEj4kcc8DJDFtqttiHeFeUgc333jJKevDk5izx6i24oKCPJkJ4R5RYTQ22RXQHGRtVRbvXQEqYHawqbdJb3",
  "key26": "3qAPGAQb2RjLRSCy9dFmyntwVwpCJHzhYzxZkKFoN7xyPDNdfrEZLKX37dGWB68zAQDgiq11N8brwtkBuG96LpzX",
  "key27": "4pm5icNPRMgbdcj6Y8BQcNW48qBkuMUkbGc6jv84X9k2Et9UEmdWc9qpzbwECBqRZd9o7siz9r1MYaAwW2xjMjLF",
  "key28": "22sD6jHu6DByqvniK9UbTNHngx689NS1urbjPZ645VVqis2gX4asKnSgMdpYLsKUhxt9HSvTfNeH1cqTkPFWuG5h"
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
