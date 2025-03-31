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
    "Dbqk5E3vjUkLgKDkbh3TkrFWw29ZEYfk9BLMGBt7ieudCmTFxuRDBB9vKnsJeAaNCfJmYwPWNvbvzCGdRsSdPGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pgx3YTQsSsyYZu5hBAFLUmEmrzFsEXJooXE4BgWiLbme3eHzc7kx6FWUKUWVpuEQKz74uoq68PuGfUmQmrM1G2K",
  "key1": "65ZwLZoAW4mr3oSyo5K95zGPwxV5ncNoc2CzEuDSKwZbJ99bqsvet8L7K4xEk8QCEnAPzRTNpHAuCvytDuWdSN5B",
  "key2": "PGNm5GMfZd5m35Vk7dQ6mrFRM6m2Z2V4PZQFDQt2zerx18eSykL3c7C6DdUqivN3FHu8epXwcJunjnGqQnhXVUH",
  "key3": "4HyVvL3g8yaP8Denem2LUHd7PCjmRrdE9sKmqY5ozPKP8neVeTeKmdbYUMcVa5W2BFr6AD97TomE3Y7D7cJBQB1q",
  "key4": "3EyAAjTLhDtsb8HDx75BtT7R6R5sKudvPPgrgicvAfeD6AsksLHagDZmA5D1RjvUeAuKhpmvBLYZKYhrwaRJP6LM",
  "key5": "4kSyKSEm47f3MAe7ZLtkQX3YmKgfQUJDrFjm6Ghoqh6tFRubFxBk1BPEg8841xdyWArKqZHVdSa4gRNgPgNVJcnr",
  "key6": "4X4iBsdZrWdmDFY7QdJQGYt7RQRSfLqfX8dub9QhmrFuPvQ2sjsXdFEGGZobKxoaqdBzChXQyEVctcvGM8S7fzSd",
  "key7": "DJY8CYJYF7fExo9VDpQSHY6XU6UxBey8hy6CnxZxzsdvcxtB1YsuSrCmC63LJ9R3DtRRUhDguvy96ndYgYvjbwS",
  "key8": "3FnuxVveRibCNM4Xbmtz9pgm4gTPqXz3vXj2MhiSc8E6MzWQvqDonyLSuGuizXzzNRqSkrxY9LQTRihE3w1ktnA9",
  "key9": "3LvniK5wZ7d5zWTmBwUdvMVMDJMG4AW61p6fh4367v5iTN4jpVeBeNV2RFq476QwzQgEvoWcN9zatsP8AYWHEshF",
  "key10": "4sfbqcE4P3Wv9K5yGJKqvrXHh8tqj2JnDGuzUq5zSjkVL8eAFKxfXMBesxq9fkBeXDeSNyYGDCaBomnbMJ6214iH",
  "key11": "2XJtCB8w33b5yfEsENC8ZCia9rGSLhtqW1g8iaTwx5NMw1MsydK17MqcfP2HEYDCKk9GGUZ8Uit1UqatMc65M7Ri",
  "key12": "2P68cddTBN4VUoeUGavUrtZvRGPo52CfiTFTVfKQ3Yv6WfbKNQuuh4nLnrLHUwFh7gy7h6twCerjbyufz8agCHjj",
  "key13": "5Z6cSgHBjeLABsKubPZvBkN32NJJHRpGr1d2YYX7cQHTCFFNGqDMEMaE42veZepLLQuXzoS18b5SeNGg1EnEkNra",
  "key14": "4wA5ShKf9yoCb5kKGz6GeLspx3hxogehWCyeS5iNm3N6DAxzL9dXPHxyvWn2rKNuRCikrxL7ihcouTZx5NLYYq6L",
  "key15": "3YQz5Fck8H7nEtZhdyooCG6ZUCwEUC3qKjagJFDLor1zP753spQrGxeS1wuXD9bkUcf3JiwrDNLJedJJXdwP2Qqt",
  "key16": "3cKbakH259hNKd1wARtphKSseVLqX1a9eAtsQ983LqtkjBw317cvqLDJci5xW4JneoNeSTsScqJ48FpUpAQvyBY2",
  "key17": "2r2EyxHHGxaVQGRrM73pm8JegstcjgAjz6LqL5oiQ18E4UTS1qDmo1cWDVUFAJbQkMdeytYA71TPYydZwcCvcjNF",
  "key18": "322jpV1nHnhsaP3Gg3ZPsWKHRXL4tCnfqS5SghyjQVqyvpr2hcFPcsVttGELAFzxvEcQvYVtD4H65qtzP4jpDYJf",
  "key19": "XTAwLpqmabU6cjaUcXvgTRkDbKrRmRgEqPrFVd5GTbqKHJPReVvUwxPUtuLLqrTas3yon1bW63bZ4qdFARMRg5F",
  "key20": "4xwcx2w38R2PnwQC7Mx6LmgNi56rQSVHPJqaqx5PH1xt14ibEoGaizLQdjkLUq9XmVghoZJBu748rTzqqmV1J7kV",
  "key21": "4NMN3kjS3YAr8CDjfRtAsBbxiiTU6xWRcBi6BkSwvc4tBN9RnT7XRavZn8kzM1NLyUcKFXUTb2gN79QyEQUJGMzD",
  "key22": "5EQ8s7MX9CRcfvsMJxaM7UZixBdV4YaeERdYCiNPsp7tqHCvxwG6z2AZE54tQokcvk3aubX9cKRBd4M4Gqs9AuMB",
  "key23": "4M57KXqwV3FuPS9AJsLDDeWTtHUnyBMc6NY1BgtLFDacDZMj4AVATpCL5Dc4ZMAUy8dDnZSRVcKZE1TMbjKoHFq",
  "key24": "619NWhyjR3naGTK6sPoeHzxMJScginu5ksJkmKcLECfUXbUq8KQTdHekW9RqskDftDKekGsCC5LzSavGhkCaRQWp",
  "key25": "4pVm1sArj9rbvViinaZsjCK8CLig3vY87JMJj21HAb3n7kQAh8zJvdiJXmfaftAb8q8jnVMpHz9m3dKMFSWSqRNX",
  "key26": "8UJ4zLVuBCYcWixXDg1q1HeGTWoMnNs62LPwvhNGh8RL5e6ZcaL2M3B9fm8zy8pjwh76sSYFU5eJScTwFawMPzs",
  "key27": "XcfVF5XDzfNba4yJ9oHhZTwTLVoq4sFhXq31Cizf27tgKamjaDzKzJcYLW2fSdWpyM6nwNDN4QqaotTC1tQRUTq",
  "key28": "2dZsnKVW7CgKprLvSoTMM26ToMfUfpJnGJcbibpEHY4fgweVj2eVokn1qFX88YecgePC6PgF5QNhYvEy9kWA5JhA",
  "key29": "4X8t5CfVsQLbzwN4NGqD9n4LjsVJpTm9wPr6yVuVcBqZqgrWSsigWrp9Y6rG62uNKz21ZhQg7azZLGqEcTvBAiT6",
  "key30": "5Z5vWLMKEGCstUgCeoMCZus2nEZwCwCTuuYPj2gFoRKjwKBwX7sAmtuAyXsYC1vPBRSCxNJpJx3bBQat1HtRTkba",
  "key31": "4fDdg2DREVxr3DCsDCheWi3JkYWuaEXBcPPq6h5yT29NAKqpJ9KDEpgxF4mTYJdxAHG5vWKdtr15dguVQppKGv9J",
  "key32": "5Jx6SDqUhXSb4suiqhdzogp9qq36To6tRcgromTrxRXeqJqTs36E3Evpq3R6Yp15RG5rv4DpBCyT1tMb7JoWVp3S",
  "key33": "5uyP7QoBbAf1AnHcAPkGxeyYqMhMpA98MqzRXvjnL6UhMgkrUMpYfUQNAsWyJkXdJyKp99FokfSrh1VxHBoBpsv8",
  "key34": "3d4aZHKytZdpKhMg8NdbvCS6nTtgjLECsMhLFt6rboEd1E31ZQxt5jdJyQtV9uyJy5Hkttd3Z8TwXnihkipZf378",
  "key35": "2yxXW1fuhrk4AnV4yWaBRHn9LmRHZWd3KuvgvNyP88rUQtTZWR2diMXSmfwbEJduFh6ThRqZ8fRwTC187k75dKdd",
  "key36": "eJRjY3eHhKN6yusKtGAg5pWy3cDcpyLdm7AM4cgr1xHm9E946PJGJAdnDYqACzeqANaxEZQdFVL2JmA5su5WpMF",
  "key37": "27SxfWYinma3anPNj2AVzSWnPgvthp9qRtfVUVag2u3NVF5gDgiTn9Aq1TRgtMeVusuFhrhUzASRYsR8E4P5LHkZ",
  "key38": "38Lot4tVsWzUKsiXxJe8MBStPq4TzwaV41UKPeZxPYfxJztHgtw9eYa7aCLF1AxUmWKHbU2cEhHM2ujSzjPQxC4",
  "key39": "2mSMZhuziRyr5jVWpVXSKByKpYDeoFAtQcQnqY6YkmChfeuCn4vtoFwfoyaPsWhtj5BJo7m3eKNK9R63rJJ4AhRe",
  "key40": "2WvJGUT5CR51NAop75uos2uwViZTiBtgZtUkv8s7A1867pQyThxHjZMn6CJgwZg5bEHZttVG3sfgHHXR81jfrRXU",
  "key41": "2GCE8D6P8shJTSJfHgNTcukYJ86PXXQjneWqJkKvzeB6zE9i5cLULf8Xgk4Usmc7WAcFHiEmoRLfJqnQLkbRaPHc",
  "key42": "4sXyeCbAGDHVzBE4ATsJY8ZhLiJtbgyyYiJGxXgu72io67a7V5Y87tEZ5vE9syV75LFMvnp7iAQcGQhN5Wr5MBge",
  "key43": "38e8g7Ar6mimSV6jCK4kvWg7K4ufr2Ve4crb59Qd96sjE1u3FJ9ys2qz7V42Y7ftyPP5iMjedCMPBSdHeZCeUcxq",
  "key44": "5UJVzJa2pmpsYRn1ym6cR2Dwv1bdm8m7qKgKK7pABLDjqQ9xD1mnXq9L1g3RqUk9VNuuZ9XU46j8pe1oEvrMX9bS",
  "key45": "61WRbJcKPgJ7Fsw3U6XGE8tWtQ92xE7MJRWdK7AGC4kpgsJNGnUxH3kLUjy9ztC8dfm5V3HTnRTq6fnynumtvbSa",
  "key46": "2MQyWFCZNakxyQ7RkK6PwQxtRJroLWBZW9b6zbw7XTpys2d68CprqvyFEjCrvEVTPAKKLDkPxvH4oG2wVru4PNad",
  "key47": "4bZ4MGHakDj5TNwdMhhnbhVgQT9Rq86mTkGVCMPkX6rvEQpzXdvEDZu3yrPasNa9ukYpGYoxs3G6e7Yhxzu7JLDC",
  "key48": "5DhtJwaZvWZnkgXZ7xoQ2zQUA7GaX3oUt8gbx7qaXdqj8mqo1yunvhobLWBSwPJbyMQLP3iXF9w4n3xCBvc8iVne"
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
