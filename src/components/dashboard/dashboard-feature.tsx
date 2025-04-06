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
    "5mBqcBj8nwv14Jncp3y444qhFNBEzpCNKjLd1HGrhtbVBNKTWEDtcHLegLg3FHbK7iKJz8GJaB61MbWo7MMxGqD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4PTJ6wXyABENtJNmRb6BcVbnopcMC2eJjosdTZayjpgzpYcca27MRwJ7j6jnaJvAbeZjY6hCay5P51qoxjEFDz",
  "key1": "435ra6W5aE9Ey9kHW2ZfFtv33KMeb3mkyFV1krgUqVudFL75XEtz7yzyF1YaWGVB5rfkve3YvVLrZcEGrxRzv831",
  "key2": "5XTBuQJQ4d2BmLxVHydNyoxFwTKFYtkvPs2CENvdAF9kDj8uEEufGNUGVCng9Sw7qpUh7sk8t1iv8myJWaLWJAY6",
  "key3": "es4mWBSio7SdbyPYLXZSghE5jpmwf1bCLmLW32MYnbeMn236dyAQH2p8zFrjKBaAJ7wHpuQEMkQptjPXcKK41Zy",
  "key4": "58pix2M2Ubxa2QjEVwdkZ5og3BCv3y4KJAhJ9qQxFhvSdist3V5MVEquVjgsBR72iySjf1NHq7MX4qQgZQQGCb5Q",
  "key5": "5uGgZUCC8xMmqJRdpQEPsqX1LCJVA5YFKVVQxt7eesDrE6rbr2RykKiKREKT8pEGbksFi8iB5rMZonN8C5Vf2hEH",
  "key6": "2r9mLvhYeN1piFuiUcaxt9rUn1PfmkzqtvEVpP1cz34r3Mg5GfxnZz3GGGzeT9z6PBtmtSnqz9L9JtfAnsL6LkSu",
  "key7": "2CTcw3kb8iUZFtA8eXdGzh79MbFkUfwtsFvUsLg9ff6esDm3uUwZedDfoaWb36KuzkW5hmgDSiT5bsgcPUVXBpHg",
  "key8": "4EpMSaNVRaGYvSNopmdtLCuFXASt9zPvz6ZQ9rkTWNyYc97eRtJ7QqBXVzsSdy3UVq3czeFQUqA9xAEs2f2xpStY",
  "key9": "5sHxVgcHWEW6RVd5hsptUNQdV8QLiUsF4dnF8qz9MYAFLfFrHW8xqHUQ248ceVBBkEZ6FLwDkMkDqMjtkeuv9a3B",
  "key10": "2d3NyBBPPHDWcY2dT9aD1ssCSNKZJb4PKHoSQuiShZP4LvF5MQGT3GtmG94tbqbX2Kzyg76VqubwMhnPAXprrejq",
  "key11": "5U9X1AoHCSiessJXRRdSjbkS8HMrzLC4qTyqVmuKmwhKJ46j7PHNzJZSX5nkbhj3p6wGWbXJkLTCUA4uguGVMFmh",
  "key12": "45ZNXdReVGZfAWy1nChZgPWyvNmXRVPX9Fph9BRwpzU3WrwcxabdkfHTAm4dhjjyn1eCLosqXk9Exj8tTtvSURpG",
  "key13": "5FKcDwULkxr87L4GgMqRvryRXHfMQ4FUakzEPS6Uf6BGDKCpoRfG8kabhvaS1oh7NTNguSo8qvxT4uWySw1QcuWS",
  "key14": "5oyEag3Qe1ENJvDKSeWS8YwbRgBsEou5Jhr9xFkvuNW67mi52cdVHqqchVuLqsBCVwUPyTJeHgqxz2TybmfafYE4",
  "key15": "qUGGR18vg1GbfR1BHs6u58aqXdjuZFCwRWzpUmTuUDHvvjmpgCinnNnTPX6bv7A8UNCs61mUjCXQmWhXxWf8YqA",
  "key16": "3ZCCnwL2HrsESUq34xpT13kDTfENYhB5drXNX1iRxkyVH27kf33kqk8Nd8vumC9fFYYj74NgkNhGcQ93QaHUAPWG",
  "key17": "338H2RgiK9puQFuJLFX1vJKF1ZtQjUJVMeyZ6hZWCMdKFMj1xv9SHWrZAHgcyyXc8zEhPoLu8bxpqbzjWYSnWTpH",
  "key18": "5UNZNhYwQeyRxCKFjF6erg7NsesTwFngzqxC6F8DXp7xNLgmSDbPA986GPwM1TenSnN4A3YMGsFuCNazeYrVPLUT",
  "key19": "5rfSVobw1Q4JmwSQP3VQUYUDPw3oAGDmDPixooS9gcY5NUq6bBqhySD5hZQ8BuFGGcsVCLcfTaRYfitaGoJwxNcr",
  "key20": "21f5NBZ1NJU4bAxm15R7n3ejQTcfHtJ13odudd4jZbeqxYQofMVKvPhAgBWymveH8NEvaN3txyTWefyDcBNQEFx2",
  "key21": "4Gj8yFGu8pw7voQHDGMpPN57ufc8ydRLSWGUZK87eG7Kd26dKZLLPUoKH9qmwP3oPVLKNb4qPxzczQzgo5JGc1Bx",
  "key22": "5EGkrh76Tvo4dJQtXj79Mt3dw6jorGGRkbQ2g25aerwnow7CirMoJzNwt19yprQKmvdbVpxpdpobgYMK3cXJrJa8",
  "key23": "4K1TXTjzTDuMT6nWAb69URqpb8jBSf2r4Y75VtTCpdTFMfM1z7r7fK96TQuvueVvjFqHpij27rVJMdYhwb1LWPzE",
  "key24": "2XaiK1WturvxKHzjZ2oAQnPpW42GfG3UCRxQJQ4ByMcueTqvExFSrs9EGM87V87uw6forpGiAXsNYApayp76hcaN",
  "key25": "gAwfpq3xiwHdAGqpKbkAZCgKp5mugi5dNJ4VBUaBN7a5AkNXbMrsFvr8tAi6gwyspEQpJqfDpAw3Mq7tQEkobmY",
  "key26": "2G2DVZBiPRTDnDXGYizq2KzfynB6QEfp9U3Yfgg7na8Vxy4YSpdRc6tUpahwqegKuHrWbT9PErByFUER9qm48gyv",
  "key27": "5pmZ1pf5ez16turPYrsJCGV1xTBuQf1vYv92bePiCcRGsLkYSKWcrN3pjDTtjTkQvyFr7R97A3KJtFdYZq79dXuB",
  "key28": "5T1VvdhaHEkKKfRUon5593EJoKeMtG9w9jMR39B7VGxX5PAYWLpojMSX6SMwH6ek6zmHjacbhNJ93nBGYgqwWpyx",
  "key29": "3Ewz93CG9GzCCQprfJWW9boUxxmyhqhJ2dEX962eRcZW3aibT2wePgfTXURaVyKdhZiWmtk678vY8FNo5SnwtVkq",
  "key30": "L2GAbqBCpZ1YPm2uPQRmMYsWCqkeA7R6cSk54cqn3FYCG1atvfSaP5Liq5uojmXWdrA9J8YeppXRa5316LbL5ry",
  "key31": "2691W9nxz2YjdpAAbMHhBZTiEHuA33atkQFWmxtFfnS5qYq8nfzyzb6fyoGWCuuFrX17fFMfM5gM4A5RMdmvidcz",
  "key32": "oUxwDcGALe1xQfzBpUcYDXpC9BPYAmgdv4KjBeUPNe7j7y8yq2fnPbFTuJxZqkxTJWo84qHbQwKEP2BDxo1mHLX"
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
