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
    "616jqVUK4wnpuQbs3yn9kbsK5sT2f8DqvJ8GENcc8VEFEGKG5Lu8nRE6NLRnpbbxxbxDcvdTM54yhgKwPT3xpsCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPrHKxGuPTq4xApvUcDMtRFZChyhj22VXE1Bib5McMiyHtscLU5QNSV6NJgWYq4itxDGCWuqorhKN8YwvptE8KD",
  "key1": "4rwWtTcbhSLfa9Pv3NRWxc6LWNevZmxY8crVNmZJAXpeWeobe77B2QWQy8TjmATj6W83j1m5dz5SVBnfbuEwdqn4",
  "key2": "26WDjxsBqXHT6eXS1JWPyEjpo2d3YgkYAyhz3DyWb4s6EgfNCsDwPm4MmAQbvh5JkDnhSFPQd7GkYgHK29cchmgp",
  "key3": "4fYbKgR3fWmDXo7Yu5cnsFFUJuUvo3VWDseVBdL8KpXFipqkUDq4uSZu6n2b2wXuLJurQWvoT7MQeUw9KmhBNoqs",
  "key4": "2ZA8DJqSi6VTUfATHPARLwEJfjDKJPiA4uiCM9cATNyg9y3Da7EmtBVun8gdtTDyuV4e79DfkztfoVURQ5bxdR5J",
  "key5": "4uv75pqVsDSvxqkXjsXQrNqQzhZBeQgRoJidKJDZuebMVx8mKinbmV26kZsHLZhFJMRHQHAEw7bh1z17nMVWhacM",
  "key6": "2gP9ZcGPRbsMKivTGtQxPDhMFsr8Ft5eMUCcboqaGxx3iUkC9dcLsNiADkji8zPq9oNKnvJ1Ym2rqTzHZ7mrgWih",
  "key7": "2md8zqoALT6KPtrE3tqKNCNCVsY6dABsrbDnS2m1DM9gizfyQfkjp4uD7d8R7hfD6NUMh1eaC8TUDzvNVQ9vYcWE",
  "key8": "5QedUCMgbXC3H6uB8oLo9JaEjH341FB4mB6RNvFGe2wVVazVJnzpZ8ioezHAQo4PFpSSqviGArXYwUGTABWh1xnX",
  "key9": "4P1XVQdFT9Tbw17nTNozp39hgGBAiedYtEhZJK7Rvg5hgVV6FKDHDpgLyY9AQE5rzVvk2AAAXxSfSRArDYb28NTE",
  "key10": "4ZSrSoBHAHkZP8FGWSaYKopMyR4B2NMHLjzW3p38QtA5BxhREHMn9FSLBsfzcJ4DAadh8KsnjW7s5kwp3b2ummsb",
  "key11": "66DZnFBLs5CavVKhJgLxbNJUPeBtK31v2EsEyVSHSqCRsfeZnzS4vT8NF9EVXRWkVL2iTzugpv4reoTH9rsPkHdZ",
  "key12": "4cUyMqWzXbPY5mbMLf3ZHZNskeKbHcM5Dt21QutjFFyFkXAmy4LHETQwAV595RpbmZ9eDjgvN9ZeWjUu4ubyHhRx",
  "key13": "2MtEYXvTmoSEuFGggLYU9H9pKUVSu2JHdjq9qdrXGrYLn6d1cZ7uWgEJ9SYBkkUvXQwtuRZJEruZe95qmuRCsvTx",
  "key14": "CCUQQ6snuXNwFZJi8m3wqTbWBjau7C389sFZf4WjWxWCPZdeiM166goZGTbSMfNSkJcLbfzrif5FnLmv26WEmro",
  "key15": "51BzcuVoDZR4rWB4GHVxsMEFXDEzXsaVkdw6kTSyRS4FZpVGQStpmH6AAJUiSs4Yf9S1dut2BcS6jccZjpjFBdcV",
  "key16": "3HRMYfBZKJkmAJtXnq5TFngvL7GEGhtmD8JuTvhGH7CvKFcw8rKqZ2ogLjSjDuq6KzTjCf5Pbd5Ro6bbATuNhq5w",
  "key17": "2GV2c8isDnrG6i99KYvTnG1UojraBNht7tbBJ4FWu1WdJuR9M59HxM3njuwDyMiQGdqtxoHY5BMrLq9YHRrFyd3H",
  "key18": "iPc7ou9b9fdwHwEGXEYEAEm8m9Yqx4zUGgFES5VJEAZ7Ue1WbHRrdmZ5ZPXWncWWVuNdKePQTvwRTZvVBQKff87",
  "key19": "62mJFBB8LAcsy1qjNtoVXSxVsPXMpVW5AQ4tm4Zb8DtEk2R64ityAw4SyH5Y4tiqrRt8QRv8bYuAcaX6CZy6mHv9",
  "key20": "2yMMg1tzF3QiS6gxtH4RG4qEaNBXrzqzJFf8EL8NTkYGgbTGAhrRNoZDCiQw2gFSpwDinHT6tzsQa5vqhu1wawP8",
  "key21": "2sVhrFZnYfynsTyjHKQi4hocBwU6Vp9E4iz4EYHv83FcBWRkvqH2ZsPX3g687N6mB5oibKhZZPnyUkZbsMrYT9dt",
  "key22": "3xRwLJbPQGRhvEhRBJAHh3d3rEE6HtF5p3EX5UPRg49rRDCCZGiSkB4yDc6Lr9UgF634Xfr7hWoWNkSdLdudNhER",
  "key23": "4dvpFtHjzkZupBGw4xyvGe1VtsAfRkg5Z8rUeeZrudx5YvKfzxDKK9KbTsovb3uPnXBRLqKeCeJVUuVtRQnM8gjK",
  "key24": "1RsNyu2a6AWvZj7UK8uDexiG27KdaGJJds2ohjV83SwyYS9dtb7Q4fft6mwkvNqMEWFbF997iEJkXBqascwiwww",
  "key25": "2WTM2W5RJHDr5SasNLykvJsRqpFLWaPVuPaQKzRWQQsPGsS4QVEu2Cy3Y5C7TcMsYd6gdnbbfLmod8aQZhUdL8gh",
  "key26": "5Lx8aAxyAbGia5ujYUJbBhF6TroMZkhmPqwaakFrfZFhij9gd4ke3ifUrViS18DhX9dM7YC3XqAPrSiRkyXFZxNc",
  "key27": "4iDwsCCB7eMshj9aSJSBYsg5bNTN89BPjsW7y2sn9TYhPPGgJ56vQ9E4e8vZvLk9B7b5JFVwyi1p2DfD1wCoByzP",
  "key28": "4hvLtVd5xnNx47ffpJCJKAzGXLieF9m63gtoJxzbtjyoD6hsY6GPMSDUXcSU9DLrunSMRtc3K7aje6ksqYM3qhsE",
  "key29": "3EqWHHP1rLr8nJ1d9pMRVNgJe3R95aXmvNhuNYwtFaKSQRunKQkr4CLzgAA2DqE3oZvUGkkQXe5TbZXUQCfGKYXi",
  "key30": "4mZTmKyMBSKzLwhKU6WvkasaszWfzUBZpuetC8oo84p8tRwThtxoHws2priyG3Frr9DUxaiCsBhvgspx8B88NTFx"
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
