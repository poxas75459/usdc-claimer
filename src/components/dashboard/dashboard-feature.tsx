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
    "33htJFuyvdYeakH8DVJ7fRxuubxspTqDkxbUUN9j2vnoH8kXPeq8qoHYqETUfpsn9TZRjPV2LxQtnbRmNcNFWNKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Um9uVpjqzjXieMPoBUqzTBhGZzgUirM7WioMksqseRYLFgkk9FDTRtuwQe9FLEpM4FzLR7ihGw6qPPWMEp6QPMz",
  "key1": "XggsWQvX7tdqUCcbHpT3GcQRRgCULZG8mN4muGuZXFjjvHxzovtGjRHHhWFCA5jCC6hh76Q1ChoXdrhESvaTkTg",
  "key2": "61vCDgp1HhpjWxrk6NPMKjRVbcjvn88cFZ2krh7ayQbuL6xYX1sJbabxTzmwwha5xHB1ZSu3rTQ9UNd56L17eLth",
  "key3": "5Y8EQgaQuwo1DGUdvtbTH4eQEeenqC7NRrz8KJ5idhJTwoMYzVFhdztKiNzCjBFEq8gToy8JVj5jkgciAjedJ4Lp",
  "key4": "36LfcmwedAh7KoMQUfcfgTNhEdVyRR9Z3cQ1dvnHfACkBWKXBiSMxPqvn61nvZEt2nx6Ej8KbtAV8XEzdSGsmhgc",
  "key5": "3qfCd4fGWCKxc7RmoFB1GbbbiyB8q8yi4194XhYttAJtBErVFXyw36imYENpYzRtqJN4PJVu19fEsU6JDhEtUoEG",
  "key6": "3tsChW5fSrqdEMq78s8MXMi5JnQMVdQeiuHzvq1ZucNaDqs3HWVw3T4ReFqDuX1N5rWiietzbPwbaf9VKX3jSCNJ",
  "key7": "5Gx1yWzbzzgyUtcEQVaRwZLyaL4CyyfH5sq9XAWXcAzkcSy8ub4Qh7yDeQVG5pJEa81a2FD8yQP6Kr69WanYtPSW",
  "key8": "LyprfU5woxXWobNYyLkyRX1d7RWt5jjBhUW743F5c7x9cRd7G4FBjQAEHM36PHHteLJJaU9uSxxQsQ2WnxeAFe7",
  "key9": "75XAubFwJHscnpaY3DZJprr97rxgdd9CkFzBrQfTH9r5QW2yRn3Uvr7feVEJEeCGXGmrM8x5Zt5bfjhCDQwCUNd",
  "key10": "5BsmyFUBvMUBaVNa1eRP8ZMnkF1RR8NyGJPohKK5UVtHj9BsEkYRtKWPTU32tXYAP1RfREvNEJ5ELoLzGrBBMDQA",
  "key11": "SSYTqESzyCgMHBWxhKtdWzgbqvsLmYMiARmX35LMiqJ1jhDbaQWvQUu4LbZgPS5PvK8FYny9X1q4cwFiy99xwqN",
  "key12": "2tgkkLxvpfrNLiAvkU1fzh3PAsJkP3vu4rRdPnB4REHJR1B4d1DTeVp1bRppUX6PkKtKXEs44iad3bLiNNv4EwRC",
  "key13": "3AMjFvKncXGXyuWib6px15CPm1o5sQVkZp8A2jgWVf86WVWHwqKkTRYvyHH5F4axed1qYTWNRD7S2F5eiD8t6txC",
  "key14": "59AN2kx69th9MR6kBriLddQhdAB7dCuYoDtcmbqv1wVaUnbBGk639aoBJMNzKtgUxpwKP5tkFufoDtaVWgFXv55Z",
  "key15": "2fDhYiFUveLCWYQNimswy1x43UTHyVvoqGcBFyP8ftiSRdTtaeqgnBtuxi4WyWriixRWfWQ8hUcXFCpDiaxgn8CB",
  "key16": "3JEpsc4SjCZsMe6imF9aSKS15x1KU8i4xQZvZcB97MmJDWbeQHJJE5Weiy4sMm6fK3rLdZCcAWRXwqaNEM5DJHve",
  "key17": "oJmWBEXP1bB9WbH2f7e5DrsrfF6tpCE5N3t8pCdJEzF7bmvf527F5cSpPiWScrYBYVArvg7rWUNot8ZpHKSjJJL",
  "key18": "44LSunuBH94E2DpQAg7G1ECHc4zYWSERQ6VqxQEr4in9wRzEusrh8fuQ7uLV29tFn86enjAX8PrS8KCAYwiSLMbX",
  "key19": "3wsMJPQwhmqve3S8KJkfuPoGYe7GEfGd9LB2EMRxiHNP19w1umL2gSXTUFAcuXWKm7NmF5RE2VKSGbUEVWK3UrNL",
  "key20": "5Wzab7m4LBUfbc8a1zzaDL2awXVnzr4tmuTKasX2YRAPPtgVZ3FzQUb72tEF4jJ1Ar5LmVizDhoLFtS1ASsACgrA",
  "key21": "5SAYBKat1nD7p1R13p7dT4t95HJQqLpprQnQTCJTcg3JdWg6zAafRPgqJmU9wCjsU3N49GsUtfm9KDMyVCrAkmf9",
  "key22": "qe58pwU8vfCueD2jQ57nQh171Z3Wkm4tdPNbuGg6BBhFxgqXmzbbf2raysyppw2QDtg1cVEK3yQnZUgiLnhVJUR",
  "key23": "22nvb9GvNqQwDrPErbL9BiF4RpXdhr7XwowBRzBC6aRAWxvVKnYNboM2hdwmdjDbYt8icdfE9twqnAq8kep8YP7g",
  "key24": "2q6AUVesPWFo3g7uhmHBKh46UMoHhLv5FRjN168FisfKGUu2PM6HPUrZ2fV7sAFoHD7G8NHDbLMa2hqxp5rhf9K3",
  "key25": "LNq8XTJUKwnsufrzB7raGfCQ6GHV3LUX6coa481VNX86XeRJyhYprtiNBV2zZTwZYQa8E1N7CqqMpPTY64FCmqG",
  "key26": "C1DUn8hr4cqWwP2ZGmazSQTweE4yube1AmQj3KzdmYYiydWY5JQw4WzoLgiX1DJU8pYgdk48VqBpvXsSmX6JdoE",
  "key27": "5Lq3LBD74MSc9u9dga2iTPuxAdAGjdV65EVjhryPQCf9nSroup429zHiYQu4h1EXg6En4rSKjxd1ZxfkUFSns7Jx",
  "key28": "4NrqXwvSNKgrCvLvzWV14hxGsGBJwD2iVW4W59iGTbMJbmSNBQbDPbSnSt1emMBCqj7Q91mDEar1exNTquLFnHN2"
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
