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
    "5XKf2cygaLsyGG6WzyA8P7WmWRJdm5ZxARJ57CzTwD3x9dQ7f58h6tT7HYZriP1vPnwpGGyMEN7N2psGbw35PoNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfpRNmGi5zfXMe7P9spjFpjShw5JnKuH5MoZxUie32tuAA4Y5TTZeb8DoR4UKN3zg3hiR12gX6hECRqAMKh8Phi",
  "key1": "4DcjaAXwfH7guULpf7txBK4pcBP9HEg4nUVbe1BZMpedJjmomKD9EsDEoRuuMpGw5SmLc4UVnz2hKZ8UAwArAV9r",
  "key2": "2WfU6oxkyQg71b2medXUuJoccnxH1ndEg3Emc5h7Nkipt76rgJGcX88qJyVNEBeFA54dhEVgS7skAo3S5KiA63W6",
  "key3": "8cEw6BtoG3T7orUykAnPCKpZNwz7SdQccya1EQZJzuaqyvBKRCZUJaBTJmsHqXDr68qby46k6ZNaXPuA2NwQApD",
  "key4": "5Q1XkRMnPhJCfy3z64uDxGdtbUchHBmJDnMy4rzPjxRXVHFxADqW5CVxzntayMXr97NW2g6rRLPG9fDmgNo33MYK",
  "key5": "66N1zFqVvaK1itWTiKJf6uDgriXWNXoxJ52jm92v2g6iU1f5dicDMvuc8K5zTaV59YFEnRBV4JX375JjNzq4xN1p",
  "key6": "3ts61mh3knKTSN3u2PvBqbv4cGap5B1EwBZaqzhRgz1CwjP5QD5SZtKDUJb1WCNEz3sMcUBQGtPRUYMmDGCqB5H7",
  "key7": "5qZJ932XLroG9qysci3Wrx35HzgWcAg8itCCKAF2YfoEubcPDCKiTUSDQD3cdf1haUkW7QKfXNxzNX8HtuSRkgwZ",
  "key8": "3iVmaVTG9iHnWEWWynwhPqNrsVoF3PcrE3kEgC8Z9nagRaejKcJvZPw4bDSLz6cJqN6mUvQushKvUgjbJiL5ZT58",
  "key9": "2i9Lgu43cDzMwoLwRZQavQK7TmYjS7VrvvXfuUTc211BQ7d7QA2avmL6usu45r6PCVgJy2W2cHCpBgGwoRXbU2Dv",
  "key10": "xXT3jao5wTdNXW9zwPxs2ev87YSrZGKyFyNinifaQGxwqm1eU86khaTUKcSsZgEMzSxJKLV6H61UxDy7HoNEEZ1",
  "key11": "5zHq6PdoXWw2vjmd9DG5DCZT8xC78wHFTYH453tJ74Ch4khkok66v3oGLpeCiW6ASx2NgxJzKF7eqfkbTJhnEymz",
  "key12": "5BPnKiUSKLdmAPMfYqfoC26A2N4eds66u7SyR2BdzoiqWLrnZ3irFzcZ1ASmJQKmitkTPZwkt7z5ZKsDqFSWum33",
  "key13": "GxUWdbAvagirAq9vfnaJYBkntfNtic71C3Gj1zQoRX2EcKGLbEUTyEyPdHU1UoMinPCJPdzHxTDgsunEFmeK43L",
  "key14": "5AagzYMYLw53KMh9apDb33TWhNWXanN3gaVbkuGvzxLiSqP1a4vrcFU1AAzK4zA2oeHVbxrCNuWS4YSX3Ki1Z5WA",
  "key15": "3KBwFqmF9LaXhdq5zWj7wmeQBGkER9Bg19hny3FatWJRN8w5wBP9hMiLPNdPMCsLeCH1X7KeQGKL5tqHEvzN111b",
  "key16": "2tN9PL4u9RqR3vuZXmuWPa4vgbwku5NynfWRgZPerYtB2wwYDm8dqpDpfYUcsXEsCL8txd3tK987YNkTjQa8niVg",
  "key17": "L1Q9NCN2rTkWEH6bQti1Ew9jaJtEMw2r92K4jEwpz29WjTqwsh6PRYfgUBEY4yxVhf5bEtnu4nSBNWU6dDYYkiN",
  "key18": "Z1fqPrutbPPa6iw3bN3dWCvpCFsz1pNZFBX5mYFGLZ82T9rLTk6jGoJsEZf11fphbaBaRRP5wuLaDcYZzitQ4VY",
  "key19": "3anP1Mg4mh2kLN9tR8jhA8ppM1bYFyGYBY5CpaiR1D7KTajAoTNPTNfYXYrbe3uHDEgHj7wvjbPa5Pof22TbiZo4",
  "key20": "24B7rzBFREiTmDPRVdHYGP8QzNpyBajsT3z5UaumEpcx9RF5NKeZac7VnWJW4imibsQBNNnZuqWgRqWzqwU7Vcqx",
  "key21": "3cpBwzoWGP48oKJ85YvDGJpf5vZFzH5iF1cf4vJq6gk5Wc9EP9bb1BR6CV1cXmZTSyRs1HEQwzRBwxzHmnVjduSS",
  "key22": "21HUgUjvVyq4VyeK8gGkGSGJmp9hWXz3ijd1MJAL9yQtqkx5p3HXWUyDCEgkSH2ju6iD5k2zCdATAKwGCSkDy7FD",
  "key23": "2MwBFrMG8BUhM5DQLWUDFfFJRvS9MagcPtuXvnjm8EWRKdyeUnDBH3Jq6sfpExkVCv6Rv6aVc5puAWsFNDwaaLZU",
  "key24": "WsBGEZuGf9fCcQpbyUBSTdmpGtsuojqZEHFi4dyhzc1ADfRN4GoWm2hQpX6ZSUsY5XyNwW6WWuNfVym6wzGqiQc",
  "key25": "3UqPM9h5u1jKKHiQBrRWGEjXJhcNy3pdneBamqvoBCSZsgynm1cjGeqQX3YLYz1GFnggUcHebT1VpwaqS6RT4jVF",
  "key26": "3pcQqUSZczp4bqpLXNG2nzyYteCQfs3A9eWuXHyCwvP1Yn3GzFKbhdPVyqfh16D74CaUTbuRhsgvwCU71wjYgHUT"
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
