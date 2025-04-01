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
    "4H3HTj5WVv694Niyk5RBrTQopk4ohrBVBDx8sXQdypBDwaGrYJ1haM7gB1zEKj8hUr1kxQKJCnefbrL7Qu8Wmuby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQY96aZtbKawSxRLKaVk9UvhayC9rjAhvtrfsqqS3un6uiTmwdKirRP5sHND3btWi5fvVbN49riif9yBiZtK59T",
  "key1": "4RMYLaG3cpfuzrHsUzwAqyZFsyxZsTNRkrLDgwdewr9ipMzVHp5eRN3xzVFps62UHAKgwjbxLUiWbs3bMUHzvptQ",
  "key2": "stzUJcspoNcK6omQmBzT4giUwYKci5z1JsxUtfShBRRboVqyZBmjg6xFV14gTYeuwWKAgQSLBicomXxuyRDvPK9",
  "key3": "3rSWUcBfmFDAhDDGqHSFkNiFBdDYBDRfYGE7Hunc8w9n5TiZh7S9aeLDSyfk3zPzKYdeiM5ELqJQ4MKcjvAZh3VK",
  "key4": "3HjzFKe6a7LEm2jgzxBgdibgTDSZEyGkcZrqnjxdMbq8KzeQTJWwsjTKEddXhgZNHCQdkm9eVmeCbwUbjHKAhXhb",
  "key5": "4adybzUyaAzyTNSaDm7SdSUVivhMtdeaGwQk2D8wedsyUDxS4cZL8pBSZouZqbNh4cAaCKWXWP9NPBpRt8RR9UJJ",
  "key6": "5qf4x9qkgFF53spKUDKFhTVvo8oqBm2VkbVZUBYpjhZF7zyK5bS49waE7NkM95XSQJPq3pPazLM9ZsYtUr8UBJKM",
  "key7": "5sCt69iGJ7REg47aVkewf2AHQAGg111oWEvvVqKZGufNhfTr4Zd3QfJvn5YfrpDmYb9sEUQAtG5gaXjEf4MTaq5r",
  "key8": "5Xb1cKcAdsmewgMrjPzmFSiReZgjLNABAxFtaUrJcdwJuQLT3Y21a1dUB1mrY71HokJaq3vhycYc7T26PWNLQ9ht",
  "key9": "Cspde6DMXbHUCZ61uYeDP3XytFuTW8uCLppgxENWUhFRVM6iAnCwWUMGe6S9tcyrKKuPewpt8ese5uAZNP4DdwH",
  "key10": "13DxfkD7iKqxUStBrPWXHXkoz3XF7AdJhPYPR96cfaenooN4MjfSyfnUcZP4spCJKZgmf3te1XVrWWfP9JFNsnD",
  "key11": "5124QGV8CjHzut9n9rBEyp8h9phj5gVrudeYydJVhhHUGo8qDSsru3dy1Y8PoY1GQZk7cW18ELzsryAVZJPkaGiS",
  "key12": "4D5za1pTHsj18jEwpGyttwHZanq2jQqzDdMGUfRYtEfHovQjQd9Xa3AWD86KXaChWeyfa1eQXh9NDmyjd7D54YyH",
  "key13": "4AhrLymLyNk2yTRc8M5fWvqH8mTSeAGknWzTpp5uyrf18t8SmLkg1mbYN8RS1Cj4vbq7AGSoy1YmBGgnGTn3GFpE",
  "key14": "2jbXxy5e9sb6nqZrnByrTZfAuB963J7RAXkgfKR5pmTCe47NAgphcF8REBb4ikzn34G4dPXS3ZjRKZvhckoXgYqN",
  "key15": "2gho691F5jf6cYRTa4XJgRZDCe3YTRDgTmLu5vpb2JLkizeXknTFPVos6V5ceai33hBNkuhiLadP8aQX94C9mdBt",
  "key16": "41m3rL7PDVpyx63ButdYb3Cqr9wL7ULViKzk47gbAgApDx1zybxGfd5HpN5XKFtFZ1DFfvLDyjwxkZyaFBbU6drf",
  "key17": "4QcGuHuZupcDoXq9MS76hTC42PieiNbFA969bGswMGtZSZ6JmtU46Y6x8RghAiRfSuo1RsV68bFTXrZvT3B3ge9M",
  "key18": "5Fvm5p5BpMZjv1u6qoo4x35jtT6nKuZrihD3aP8frCR9v2twt61VD6amXLdYLuzmK5rh8STikcyfxV1Pkyve3VX3",
  "key19": "3Su7rJG9ic4h2gnqZgz2ySiBtzEwAe3QJAh7V1roCuKhP4HAfNWCt67VaGVaUFKWvi9byPMkZBPRdHEBtdYb8hEh",
  "key20": "2hvnygXm3gnZWAQoNxAxB724c1KF7EeV3DA8TgkVGvBbmUKqi7AJow1Bgv3mpVEJA5Dheu95nzSJY2gtyvioX9r7",
  "key21": "4DEEz16Pr5g5skcS1pYUve2xxHTXC4UMNUctkBi8q9q4u1r8CS6UfPGjLHbWn8ehTgjeSQ6tXsXtkmgKFBE4yrKW",
  "key22": "2hcNr1HqCwfdFJtQsYthu44NMeEDKBFBqGhnet7j52CcEWNeDvvS9qm3KkD5FnDK4BTWnuAuG6kQFvpDxU5kruYG",
  "key23": "3nQpJLgVXq5wkrCzm5jSjTUs35HpwGjTaSSC6q956VAwwYtJaDZrZTsJsgbiLJxZ2G4fytv42sHxuBQdM835npjE",
  "key24": "4PEnsPys3GZi4RaL5GtsEsu43h8jE26XkgtdC9cGBjaxivUwPB9YTSiGHW1X97xxDWFzJAngY1WkmjLK6K3QYk9E",
  "key25": "m9vW5kvRic6uUCfEBpaDfQqkFh1TFnktWUasesiFF4PJUneLBxa1TY2458fu5zhaRt2zNiAEgi15pXZfBFszxgU",
  "key26": "4xpSbNr5W1csFF6Xt3f8id4pfWFiBkfVpgAA8da9Hezh6gBz3pDcyr8n9UDbnh8u5ySTFfa3eUfq7sTfTQqgve5K",
  "key27": "5mFMPneQNSAemRUamYG52L6HBiyr2Qf2c5gt13V8YD5zq88jbrSLKW7wopMLXTsp7ZErdR62B4q4WkQh7v111DnM",
  "key28": "5hdz8Bt3beow3iEeKzGipXHNu6kLWTfPtWvbHwgaeFQpMGqTRxtsmSis94r8Npkn63pJbKXRCeLTvWSaLePnamwz",
  "key29": "2aT9yK1kzrmwTEPnciH36YrxE9dV3GgnezPRuxz3e8ySt7Y2uoxLE3JJN2mFGQYHjqzFyp4fqPYfQawAAEiTQjXa",
  "key30": "4FyxuEjZ7Cgw5B2bUfyC4Q6Q72Tp5FD1AcLUZTmAaD3fdndyxSMo7scvnoQTGP8XS1DFU6wTkZhqrJkTseXdPKx8",
  "key31": "3nPbVCkjFUK18ivfXfCzhSpv8x1pfYbamJpu4PJMR63q2wdZsxfZNW3vrH4JzBhGZgPnXxDLwSFYEfEdg2D7FK8B",
  "key32": "GnQtKn44RsgC3iX7LNmaSdyxbhdR3EwN9feg8FEuuata78rhXe6qpKseS9NiS6NDArEBoVdXRoJqS2rehamEmH6",
  "key33": "5BmJxZGbkbFq1Wg91Jh36wEPxQuNVfrmcY1kKbhY8ZdWf4gpn597jg7Ae7KKSpDfSemVAGLfyr9Ha4BCTFkMmKhx",
  "key34": "3aKkcC9PV1VJvxKEm6BMr3kFnaczp47vaZA5e6LHiCpkhb8M38Nytvy5x6xoiQ28kq8r2uUxqyBCDmQAmcWgFK34"
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
