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
    "3yC5LqyhzshuvxR16Ljpr4HL3S5eAopVYubBdjTysfEeSjeW7YifEE8tyLDif29AnKJHh8VUiJvTT5MTCo9ygKXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g7apPtF4qf1DVjNi12uCUzzNUG65RmBZ378o1ppv9zVcjqy6ppJv6kHweeYLV2tp7PGfbbfyKVVgFrGBs6xYZYH",
  "key1": "34r9ubPW6gppzB9VsUycA5vwzb1xnzAY75wVCPy8ELL8wQvV4D6T1fjas4wTQEuSHUuph1vqSaw8zAYA3d9Jzyhj",
  "key2": "2BSve98M2XybmhKH8o6EjTU8JXRjYXaXiYzgjQkGycoDi4MnNL7Y9Gx72k3cETTWWwJsMq33fwPUDnKVfvdJUm3d",
  "key3": "5sPvhJjKvw1Wx2F79qvKtMqDeN2aim5mSRAp1KgJMYgXEjgL4xzsEC4UD4cQVyPGiv6c55YSuQdW5Qe1TGAEgaAr",
  "key4": "5RenKGtSMQ6iyntY5CEEq8ucg4YmPUj6u2a6wta53tHFxHdNxPmoqbLEyuTeC64FYLfnjuErPjdxuPjThuWWYSCN",
  "key5": "4t6RmZQm6ZX7eZThgTJmCLriVVFx6XXUtirU47r3AUbbAYwLVttHn96EN9urpioc1MusFRsL73tMRC5YfzLLcUhp",
  "key6": "5y7xJ8Eyr2NR9zxVZsEyipF1cvrTEdTWB3crWM1NfarzwqKTJhe2VNnfrnPSjaSs6PddR5iVWRTos4grQProkMDw",
  "key7": "5VXNZf3hLVs3r85p3wRn4rhCb9gyYXs94Yw55v2du8kX6a5ix5G4Ex1EswPzZtEEEh7ZPJWhJt4DFHJaxMJMNHJW",
  "key8": "4L3iANsmRc1JBfR8QM6YTtPJPTVtqqeo2uEUid1F12JWQGTLEWjCe8pnQxa6z3ZVrxWc3zdPzPNirVqvkHX7n1MV",
  "key9": "5yMutcbec3ZjsKx9B8UxarnaaJe8REhWaY6ZWMTyzdXPFH9oLc9WPc5i6ykY9kYejBxV2AZPaZ2EdAKYwajea7CV",
  "key10": "3CEgdJhBj8mRaLdxN74s8jW9CnGA27ji6NxmRgpQYZ3mMQLbMBV5JquSsG9Efs7vtgxrDTyPqkzKwHZgSBMR3Kn2",
  "key11": "cGHXNUU8q8WvpXdNSCjJmAXENZsK9cCDXrdWyzBXXBx9U8aAdirsV7FGwGyp3oL2G2tRnVNgtCVgJwisfUiuuXJ",
  "key12": "59mxee3z5AvDSWDW556oipXTYyzpA4x6VK7DQL5TZFsATbfkew6LBF5Nx77gF1PUwee99qCMjjPaLCMVBnBCuzyD",
  "key13": "9uXxc5KMqi7ziYpEULTvePfWs719TdWYKAYt4Z6tL2E7JRiqRUE9STZh3wHH5TizBXDtoZSNNyjrZi2MK269sZQ",
  "key14": "2x8QAg1B5PAwDr7mV6rpk7jEqrrhoXiRjsVACS2BVu7jGB3i8MS6iSKN1YaHA33GNj4ukm1DTdTJVs3gLdtAnkCM",
  "key15": "5vP885fhjv4GYLqYpNB7LqfKPjd6WpiRpxrGjh1xzV4GC9nrYgn92byLeAfAwd1XgWqXfMxCnuYhLgXhtLQyBdvT",
  "key16": "2dBQ6TS57D3SgWcLSX1sMhfTFLUKnTPvehXxuYyA3ZQHHqrh8swBeiXpLB6jxxRduZDaktgv5hUGtxn5nyS5L85P",
  "key17": "59JsWyKF5XbMdy35gosiRMfNVmuwRrwoXf99TeDgbr5sPHtAHT8SgDwFnDT8VHco4vhgjdfJNWzaNApguKdWagC8",
  "key18": "UaBAhJ9Pb74EfUdnHDgf3YRUWn8iXNo6Sk7MmYkvycxpYHaao11voWiTjqeJuos9orU5L5fdfDbhf6zDouwVMxS",
  "key19": "5MhkuEWF3sAkmbyWkjF7rp8mY99G9s6S4v2Y6LaRGF2JSkzm4UymXjP5HnRCXcPqpsafxPNQA4TDisZQ2TDCLEqB",
  "key20": "4MFbaTQXWUPUrCsgZLWe5rCrdtmYHaLaNrPN5HF2VMrYCbTtecdzBk2FNAgRQvSfQCZnAiagrHNXoCsDajFUPi5V",
  "key21": "2rabKjXCnBKWkQGZ6kZXX3Hga5Xao5xohBKXdTY21XnkxSwnXfvBWtMPAiwUFi1dMks5VPCrga3iyEU7gGZMdGR3",
  "key22": "3xGQm2XqDYT9geMGQwZjcie9x2MRSn6JGMYa7aabXjdGTcqKDaPqUH41PG5K2ejsSvNBihNfENHrdWYREZEjbkgS",
  "key23": "4mmtry8Hh6cvj2r5P7b8tRrj49ciFPootKwqsdXeQdqy26E8H2EzvSEtvCmYgzXPQftdVvaTupFphCchZAUyuTSU",
  "key24": "676CNwMzGs59ybPVRLyBaJMXdJ4VnwrsEQsJmDGHEvSAMwroajP3DZ1xdCGerrPvx5dkcMFrAkh4ttANyFVnU6BK",
  "key25": "2D2dFRp1thx5y9ejYmiDbNnugc21RnYnBdGAbnwYRagAi3MAGAMmvdFKbx7WFJFvaxyfTwFF4e1SbK8uicLJFsFG",
  "key26": "4Hc6VpN4rZBTaLJKZcx4xBGgi8uU521GHk6V72tncCJ1a77Yrm1YtmuzZWBZzwPMZfe95NkkSfkVDgLX3HQ2ittm",
  "key27": "4cEKKCW125Y8GknSdWLnYW2i6ihiwo8xJyEBzHUG6r9uGZwecVVG9yC55jXZ3cdHKDkadEhxu8W8yVo3qZ8DVwVJ",
  "key28": "64H2CGyjYdRMNM3cxgUPCPfjrAkHgrzqw5VP22P6BU6RKQJkDGwzrwA8phPwcNap2XvCjoqF1NwvbgynMLisPiH",
  "key29": "3FUCC9Pxqk1Cxyto8JEXr9JDPN2aV2y6SaKKF6eR7ANZ769U2Q5zpeyQDggnxok85rbgG6s4bgTPDhWU5peNY63q",
  "key30": "3PW9njLFCjtdwhjDqPU6oB2LdCLQfoGs1JVF4K4Nht8zSExb87n6mrgaBZed4jfEEnopkrPXVzMXQCMeYLqKyCbS",
  "key31": "5UfB2smSGFJSNBAsmY2gLaUr7Hn3e1UPQpr6EDvhEVsdPsyqwQPQHxryuRc9KzoRfhjVEwYusUaahxK6mHTwGvKD",
  "key32": "24YZQUGZV7oDoRk4E8x4gvuz7sEyEvpyX2XRaqrnZu5Z25P2f883n9jz2fbNd3BJDJqfZfsL8wd9T4ABQGLxBNM3",
  "key33": "57wgW11woAo2gUwRwg48uK4odHNwsjoniodVKe7pUjtL5sxkkLoC8ZmyqtQUFABv5ThtyVTEVJ2mQXea9XaJ4dHR",
  "key34": "2aYiHbMpoq8o35MaBfaS5dmHwPrCFsSZCNKpkaRRXW58mLY9QZ59N2n4gZkr2ySpFy7YLkWLbF53q7Bcnu9V1DbQ"
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
