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
    "2Fi74jHfinhrkr5d6V7NrU8az28yoZkq7rnNvutrMkEB1FMHYhNkyHBWfitcuiMX791Jzr4wyPcFSPFYcxVmwVwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHtSBd6Xn5US9ZpYzkm7yvsCnjFXnqwPEHsssS1oGz7WCXBbDfEa5Na7QC5t4ev4Xik3QkfYNCovv7XkXHQfnwL",
  "key1": "4FfcU2wr6vfifFWhuGmpwFBm2Cd1HdhhVtcpfEixp2G7Pk7tPC9yd6FhpwXTJtQJTHHMp1PDZuzas3CmeWuyk3Ju",
  "key2": "5Am51k6JNffnkbHDyi5o631196MRqsd97QNxmo8wVD9dxJ4zhNewDi91iikxRPyfSN9QZNfQP6iujFYgNFMLnUwV",
  "key3": "3Ruyxk91Ad3bfo34mDSYJ2D4rRMbBbFMqBojJQB9oXRf2vjuEzaGB7RnD49vRcjE8MXPxijXZ8u2oSThbTk8GNAd",
  "key4": "3s4XQLg6Kyir1dk53EkAdVRLRPLjHAya5Lsig9EJJTjQDBtaqvrU3qLFbZX7as1EJnSuvZDTrs2fbZr6zGghTCGG",
  "key5": "4SCAJ33DSFcigrJVPWSwowkp5MARjBds5vHqKwNWLfbwzfMaaZ3wJAZZVBGARsBswiitYaGJSHAmZSMVn2wg1jZK",
  "key6": "45QDpPyZr3GtHphr4Nt3mgYV5ud5B3AUQnnRRFXscFsg1K4FFXkLJZxBUk9MRhsYC4pMUyTR6QYpqFH35yMNLYFP",
  "key7": "Ty6LyV86DjPTuKNa28xbPAshEgUVW9ZTpKVpDaA3WVxedgWxejjYQcK5U8wQtSqKeA9Uy2ZfhDiXHLHbEq3C6zt",
  "key8": "2DoDijwQaL5fq7CswzJc6z8wTPKsooZEUgpw4UdJUjGyoPTgHvckegA7eKu5J76sNbs2jmgheZKxixPoi6sXL5wF",
  "key9": "4ABBvVQfRcXgxMQGPwZXWsfwYkkGFo9dtDVuz7wWBmSgrD2FmxsBzKhkz6Vo1FQqQuegY4cbmqqfgVxL6H5XRnu5",
  "key10": "2NUa2ZWTWkRYgdY38fmpK7ZUxM4AkuQAoXtMMZwfDkaPYjvo8GbE3mecowv5eTzmyRmJ2KtG5C6WtrbUeQqT6Cw9",
  "key11": "2HfanV3YazDFGGS8KN3EuworYSWz1WncXTV3n8mxBTfd4RErKGrxHmHUeqLJwYg8GZurqWnRaFfP8k3XjnXPLGuN",
  "key12": "gBqnfCjHRX3xgRoF8EJUTusPbn1y7zRw4UyGt2U6LJQb6cY44SYc8fh3VkGgbNtRBYNYLG5wFKR6fcHKYs3yds7",
  "key13": "XStrB8Ah83bETEQW6zRGUPo1obErwq9ePc8yb5gBLU9tz9hSeGcRpAfGAfTurfSUPoTPwFMUq2Us9fWUuUf17Yg",
  "key14": "KgYiSAowwJw8uxeZM56fDnEGwmoFRMT7hVXjPR7NgzkGEdEe5MhdFvfE1goMr9a8syTF3KwJPS3cKZvqBAAuEAe",
  "key15": "52FNPNgjvpuiSC7rYfKdSYj38zdMNyYGLYK1bkoLJ7fwskDVXorM7QLAkCb7ZZE1xtKRCoYZYah98E1an7qxXxVx",
  "key16": "4cimQ2iTqoTYsYr1bixYwfzMLGB3LshGcF4UCCRptBcsFxcHrYp8bHN4NUfFS9UcwTgFMj6NNzDczgQUrUHWT9zW",
  "key17": "Bn8GMQrhueMY7tLMzZojB2MYauQvPPQcqw5RVJXgT2UFgzYEE7nNrCVcofgeXfRbsbtGpXFZk2Nzz3DTtyp7KyN",
  "key18": "Q58mN9DmNsgiPEaQbmMVB8MfW2pEF6FtUmk7muj57oSTSwinHzuYZrYmGkD4kbAVbv4NvQD1az9hhZWRPs2ygce",
  "key19": "3uVedWp6RE4VUrqUo8zAzKSYBbbC9pRZdbVrMg56hrMe2mYtjLGFBYxAjBqQFL6T3LJt4qNxtrk5f9BvdWhq8bHW",
  "key20": "2XUXhPu5raNoHLL8WpiJAb3keQuK1rWcvfgcAhsgqffpyH1vEJW14AnwhLbNzdWeXBjhQg9gKGA5QpBoeZyHneqU",
  "key21": "3S2VGi9qwfpsfn9EpJ1AeMAj6iMhQpL9HBfNdFnQ8fjjAPtNpGfxLupDEvRm3F7JutsfiZd1oY7FsTG3htkLGd8",
  "key22": "2BXe5LSsNgPWFrnw65pBCp9bxD3Gk4HQejMWNyi2W6YGoA9Es95pDQD4QV7vsDg5D9wh9k9WHgAKCcqDTZvnu3ei",
  "key23": "4FJSJmE7vfVyj2PwnC2GnBLK2yex6DUnjwcj5bD9Yvb7wPj67Rc8BohEQVuAh2fEp7od7Nuf7AVykyeBAAgXUFND",
  "key24": "563YehF2M7p8zGqnjSNuaSpBhWYG2z1ep1JX8zLiMNTqWwvX7Kw1noZHnuyoWVhkgjWkGNA4yLZY2DNNwRkb2bGt",
  "key25": "492geuU7t3ZBTWWKMeT81ZLQkEBrarGQnBa8tvQ2mXPeqF9qWwX1xvcJSYXvhYKwu2gPJV5mnFjNqVbnp6n5rc1W",
  "key26": "3M6Guk1gpFUrjkDrAiToM4Prr7mP3vEhbPjcKnbBR9G7KxS2vMT3745nt41uAgYz32H4PPPfDhybPf8e993BYgMs",
  "key27": "5F3pxC7vrEYrjLfFh9hNuRXxAvJ7crPa1kE6Bm8ajpvPTEbM5KatMvBYMVhAqmRtrBZKo2hFCuNUdKumVy2nZnVu",
  "key28": "2GeC1mp6Fkzw4vyvHa5tgXshwJ6XUj2rEieFdU5PDr5PPN9RCPum66NF3nbtyEQsyKxpTMbvtqocqebE7gtkdKvW"
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
