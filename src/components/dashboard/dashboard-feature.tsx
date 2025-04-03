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
    "5TFjMCncR2sP4TpAvK2zymoxPNS5aSxaDUrWQ9mpZr2rZq9JFLx9Bww4kK5idwfwztndqJ1KGNwNMwMqq4N5poHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXGhpPsdLXHxQdx28TZQbJ2fnnq8XY6n6JAdWJJjPe58uxHwCZv29YNekdQ2yVKN3mDoUo8dgsLHsF8GFk4L54m",
  "key1": "5gxFQubLbfJBWJG9mCozwPR7EqCEtcu6njQgjbXaguD15SpeEQNHciiNGfB7RYDZyXBh64C8pgzYYUBYk8YUyPHZ",
  "key2": "5DXZmj3Gy1gfM92wVBQoWFrMKAeuJBrdjtKu2z4yJ1xczZgKfWnaJZEnYPhHckDiYU79arpN1VNyMgJGfWStzgJ7",
  "key3": "4eYbLvgF3T2hPRjGev39zmHK9pvmNHjz7f6DnoKJ5pNuW5UQa78FMzDGJ5av5gqCsGMVYXQ1PHoMNBYdrhbKnWzh",
  "key4": "29hUmTVJipFR6PFKXbgQBVC19mRovgBWHdWWY1DnPqmziXDHWKsXbGgDfm5yAboFfzBXa3u7VmhdxDpFEgTbDWo2",
  "key5": "225yVyVkoXD3KHTCjszFeXumr6YpiW5nunJTtdYBCZhBbCwmsizzahsqSq6BPRc2kp5JvgfmEt2BDNanHeady4xY",
  "key6": "4ZaDUbvYS2qmNGm4EGiBji8xhxXaLrjpubrWrZsF2Et7NYM6gFrit8YWSiHMyipv4XAc7gbXbuyVpv6QE1YddVNg",
  "key7": "zqAddK6aisYcLdVbzveGm8G71YQjYjjZxmKyxeFQvfdv2M9YCJk5zbSuq7DZGQ1NC69uTQHghDWz67XEdBQjYX1",
  "key8": "3G342TmbeygsfX9N51E5vbuw8XoJKWG7gSw3tjDZN1BHsB5b78AESWcKZ2SQsvkCFb5orBfhobiAEZAow2QX6y2E",
  "key9": "3suwvps1eLGDGJZA7dytSj2c282Ywer6Yvmk8SzTSBk1poUTyFkz71ekp8vRHhyrYNEKQeaiBnBjoMQAuiiLBj9Q",
  "key10": "5u9h92NwPyUbrqMstFH915YPKPZtN45tvqvZtKnYoUkTLtQoeageZF5WMrv8VWQwGnVwkQAHtXJY4X3QmWtjs3AV",
  "key11": "4mKJVB5tG9w2AGN2tyUyV5vtizKbvFh3qR44aQfj1Y71W1xo22KQAXvb4nNaNbZmJfSLmy3u19xwFZdYPMDuCBMH",
  "key12": "4frHA49pqgVyk5AixCPtE5xrXeVTVjhpFVSqmV8mc6HGjF75LXNyTD7hMcGUm6BDEvvTH3S1UgzSC1giN4stTtVc",
  "key13": "4SiDXY7XJTKKGXqu6q9xhtfxvdtEgJt11PRmgYRqHPcdhCPkSRG6ujDthmx5FyNqAfYGxJJqojditm3eaTj3HoeH",
  "key14": "5RMCnpNkD8Q1coYup29edB8QRhofDoQTmNG9uAW8E4xAYRJ37iv8hSMdBg66rnPaa4H7uuSZL1jNaUKCThkSzg2o",
  "key15": "28aUitpc5zrSF9mZ59TcTTTKwre4hXyx965A38a4DKfLzBKbK1cMxCVroZqhf1cJRkQ9GCmSTKXM2K5Eqycth7mM",
  "key16": "4A2q4XhTFP3gDE99o2ZeVZUkbJ597mVy3N9fbLW3hFuoea5Jy5wirV7mgeQA4Nb9arjPdE1nMBoq6aVnC56tiHqj",
  "key17": "3sKaRAeHSZP8e4i5uFdwZ934HeXBeavmbByLc5t7s6nmPpjm8tSpj7Ce5FKqoYBhPPN3r8oxmicWAcTR39oQpCZs",
  "key18": "4sA9QxWVHhkZ68ZDuVKe3NSF7UyxGnUK8MvrhqxKEhGBm8jHEjAmicR1Ygs9Cgw8hvMvB2KYdaCAcMX4MVu6tiNe",
  "key19": "UmsRZxZyVGJYJdjvknDTSyMcPh5WxEn1rD4zTdUbv3UzXKkf7oTGL1r1rQVrD759TpgDa3o6jjRx3niTNAEC7q2",
  "key20": "d79t4fY5JNwVmMRZJukRaonc6rwLjDSYzpMWdZCgfWJV65Mh7gdv7eFweK3ondHK717wy9n8b4EF92gLJrbvt4R",
  "key21": "3Lhzza2XDZe8eJq7deqzmXqHSJEb72wagD9b7xENbTNMsckpV43uYn1U9wcKAuXApLwExzFuEyaSWYWwctAftb2k",
  "key22": "nEQ5j9ZLXtLdj41Xn4ozJZCcZMq84e3WteAJQjSBzfm6bufCTwaMsvEq8HhrymWqMcJHxCpDxG6e84jT4WaFZ1h",
  "key23": "3zDtkWyFZTsjDmNmdZmDYNhXmqoe8boeAyCeXveP6kjUy8ftSnJUvui49Q6iD25CX3snJ6b3Y9imtVnf4S4pqYfK",
  "key24": "3cvq7hNnu5mDX3w9r86vBiFUbsPeRTogyvxsSBcicyoVS4wJCvahzsYGmqefvKB8qoiPKxrUpi2uPHuHwJdTkfjo",
  "key25": "2rAWb8W2JucuqLA3fb5ztR1cZxL7923HKnVpE8DjLPmdzovPmhBHgKucFPFDQyXsxhyFaXXk2jwr9bnutde9ZatE",
  "key26": "u1YvBiHWoBTgVvfrpH9fMwEG5Pt49ztnFWCbjdsABFFG3nJVHEBoJVADvBzNSiDthkDoUE1SjNnncQ7s1AtyEQW",
  "key27": "4NZy8AYQS4xfyH5kiaaWZ5Q6mDYMRUcGyya71pD7iak2ZteXjrUThwE6EjTuEoooa7m7PwDS5P4kJvAi9mrq85eK",
  "key28": "jCMUQv4u1kQHujKRLdXebLJpdz5CszMKXDgCM2xEmPECYpxGxk2NVrWgAjohYJtAM1tnFKvxBdmcZqWmXkKQguF",
  "key29": "36ftam31kow8kwZqPFQn9uwRgVogaENKVup4HEz9YASy6MKaVE4Vx1X8x95kWvAsCQmKaBN3m7mU8ryq9gLpqmdM",
  "key30": "3GCARQimw6n6E42StWVwGby3aYAg3hXmEbXR3hfhwn3JwvTHcY5fJkp8ak6xTh1MwXj4aBTvB4mvETTvqNnds3DW",
  "key31": "66RzJkzMqJ5gdj2kMr6guU7eeEaKJuMHo5wMS2FFLubxJGS5KkpTqYxd8cK1GYvWx5k9ibf6Z1Ban725GiU2LEMJ",
  "key32": "2LTqrVF3CxcJneH5jpfstfvFey6Sov6uh7DYdSXMZmNKt5DxtdZZUazd6DSTx1i3TvBbUQ9TbKPUxetsJCJcweBD",
  "key33": "4QHAiPFFRjkq8PJqXiiLtjNg1g7dQtvfFL8HVtgiG97sLzb1WGt7Fi2H5DheJTNqCX3VafV7vvXhtDSjKkfM94Rv",
  "key34": "qufqGVFHzAb2otLaYS2Z8fZaYbWrneAxReQ1ebiFTHPLbuDjjgQRdWzXdHx6twaUh75yuXmKXrt3c9uaYhEVVLH",
  "key35": "5s6CK6SF7z8GTm1G1srLHWPsDXcQTCiHqzUZoicDSM6yhGvbaw3PXzGTJcNXCjEYTdJ7EcLnAiApdErnzF6dm3vo"
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
