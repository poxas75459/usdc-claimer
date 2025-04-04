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
    "6HRqezU4KKfVso6cafCgaqjWEgb8MHL6Hq7aV3dCZFXatmQ6nFEGSHsGQbDXyFJaqF9j4nyS2fsPwiusrRUxXTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6pU1QzYCTWdmHG4iS6q2aXzjZm93WW9tyLXksjyrdAfnLmBXG3875reu5Ba6RiQL8QNY7hQGt1Q9DUEPqXtpJW",
  "key1": "43MYkjGVGzxnmcQDBb4XGtGBEjSG4QZoNqos9DoCJYS4YipWKL3w5jxVQazREGZ4uFZhqbaMDTbgixw1MXBdTc9S",
  "key2": "5x21MAERBhMD5hrgKwqYaqRrqjVVbSrZAcZN7ykqjrzigtgPzsMdgMfC4cRGnkvzjkDjHwPtddih948jABXAcR5S",
  "key3": "35qS1av9WG3ENoiJG9aiou7TEpEkSjF3hEkxJHNtvNmXQmuJPq2bfa6FjjCU5jMP9yBVdYCFjmAhE4bWkabejz5D",
  "key4": "398LBUMcFPiWMoEcs8v451BrGAi2ttErKbE5po8pQzfJ3ngyJTJPVGwB5X3gJMQXC9P9jPKNACjunZfpNbrzZBeU",
  "key5": "3gAabjnNhsV79MD4W4WC6zsK3EHqQS8fd8TrgXFHKE1P1YheG8oeyU4PFmnJSJvR6mZowMZYG8UEWoDwwvZxHzcb",
  "key6": "5i54nMMJ5ffnp6HXCXNeVRkwq4LaBR2Fp6ajjNL56oX9oVMoeWKSbmonEGHHwqqaU8rA7VV6rrDGTAxWgkGSvedv",
  "key7": "3FeDto6vpLjrApDDoY4XDepibBFSi7v9KJqwUWJipxcmfRu2UkDwyCpQhyQ69giBq8rXSknL2EDP96QXKJFm56ye",
  "key8": "3JaHZQnKcA6CzpttLvw1dB9vMuYNZKPYiSCUUDUbmvvERsKfvGQzJXwMP84aVLTEzNKNRBiwHMzjxrFN6G7NeJuu",
  "key9": "7vcUSeVNj5iq2UoM8mXiwoBFLabrXjog356FXfDDVsA8L2bGZoYErPeBXMywcTzrXLYNFYEznikJ2qvmv1rkVgh",
  "key10": "3d2fpsPSxx3YsXuS31Dz4z8qCMhDiwZTvZcowV8Rk4SkgyCWWR8cgDH6gwHqcZp1XepzuwyFi3i9p8Nx4x1u4VYS",
  "key11": "5xAHF5jGptnMPRDrErSurjmXrqQNbDpV2xumK8hYtw9s4kkkCTf9uhdxBxTsJ339QLMEuWeK86y2KwZuTJKVwCco",
  "key12": "55JF7U5PvY1kLAH7pfXsnDyNt2L6UZ9ffp9wJXVPwv3S2SXmPg9DbYeNtkHGo5a5tApMKqV1c5FZGai1vEszoFZw",
  "key13": "yHAnCLXtUCgjeb6u1wQRKfRCFLMxt3qApWh94owFsdczJQ2zf477PqKjXwWdfDbHCQ94mgyv6MhJaHVTtPWJALq",
  "key14": "2Fom7Kukic2JnEo4N2a5T8KUqmFoPvbjxFEJwpbN5WPVyHCBosHDhCA5VTgAwPz9nfD4LMqcrN9CKUjBitBjuhv8",
  "key15": "5yThDtCMMJa2FZyJLm85rQANW5hV9iKYEX67Vqo7NuRrHyD4XqXKjUKUQm2Qq36LzQBBNX7whNRTwCKZeogrdEze",
  "key16": "3VW7eKTkrakxbuH5isXpqBjDRprJHBF71HyZPRkjs938cRP5PaNV7TzRyaqd8EsUwqavaMhK1Gowx1eKwhURuL85",
  "key17": "5HF1iV46cLvZCikw6p3595EacdcQCA7NhPnG2G7Hcd6rnzAUdBKdeS9nb6ikVw3MzqrrWsERaPkG7XcDeKWrPEtH",
  "key18": "32PZ6VYW3hyHGKGiws3kPHGoHv9neHB9G5j2C6NAUmUjx9oRhkuB7n6fXeGqPWgVds862QNdJbRNbiuUvTHt6hnb",
  "key19": "4m9qbgHNGcbRm88mtLjt4bac5jfsbsbEhBX2hcGsVjaDtPLHftg8x5bCaUJXtPNyY8RTJYzuXYRXF7NoxUuqw7cu",
  "key20": "5s3yHgFtcXHbfLGb3q6ybih9G9YThuGo9gCkRyhTdzn1cdgkjrjLuKPNw6KwGyL8ESdwVCwJx9D48xaCbJ1WHgvY",
  "key21": "3m9rBiaTtYCsGD4EG4xzazQzbTC6HTYLAVFDHcbT3rdP7YxamDENCXybziiaCFtUndCPvi6CtEyUH5D6hBSgpYys",
  "key22": "4RXDiwrtHKssYYy4LYBWKG94K6dsdYTws2dWQfKJroyyHXkoKwEDnLzacDLizLUXwdnwnaa4Y64C6L2DPdsjciN8",
  "key23": "4C3LbiDv1RUFjkhg4C13rGCjpezT57FfUow1hYYxiaC9y3W9RWFQ9yQU8h2Ujmx11cTvMm85PLVyzwvA7TPBLzv6",
  "key24": "3tXFRMMLCmUGCXiYGjtedrn3ULDMead4HyFrXMJHgmKUrMqmnRg5cgNFBfpi9Fgj3RjYPjawwfLpzRfAACaD7YhJ",
  "key25": "4gCsKqvum6igjKgbRVNHeLyHRwfwmeANz2kAsTTAvCW1cSGrZEBs8iAAPq5S4HvP9dMbEUbuk8eWPMaXYSPAvkUM",
  "key26": "4wPSTX4SQiPehkePEWQkDnCq2sebbTfMfPHeH64wU9yEWTZvbLP4tPN75LELJJ91SZm7LCMFCTxaSVbHVxuX8joY",
  "key27": "2x1NCxXJetsgTDoSnbEX567Ttm9rL9wBLpQPgXdEKmHV3QEJG6KGBzYSddoi1f1K9gejRH8Wwg1hDwUDa5DfxPpW",
  "key28": "aEBuJrQpqBW6nwgfPVCKh75p4pbaLJXdp5kHJsQzEDQsaQceqU85YaajJ1KevnChWJrDCxrav9SQxShsro5mr8c",
  "key29": "3tsViKBDtbQe7VZ6BYvFTWEmcDXMiQ2xpxsAMJPizaxrQYmb68o2GFA4d1TPdPubbVteaYadgJ5k29EtzGFozYgW",
  "key30": "4UqtY5zYbHEbdekPLCe2MjGCskEnweTGvWETjA5vBWENjFWCNAPm1DaCtuASxhQ3zLYMkpnWb27p6K9SAzVnD5nA",
  "key31": "3VN4MNgeGAjXARJYxxwpFdAQmurVMh19stb7ghsUfj9boqZKb6ZPRRV3QAnBuSXwMvGz9ZK42J6Knks279wfNCUa",
  "key32": "2oAJN3v9zjFgPgLYZ82TjxDUSCCBvJPEbyNkaCt31bShT1F25kUnbjVKJrQ6b1axsmChyo4zGNL91YoJXM5krqqf",
  "key33": "5sDhTnRXZ4aunszfwpbcRPU7ewErQDBdxz8yo9gyntXmJEZh7oHq8MVzAYgdcYa7kWZNDKSkR1hLjecgqVVb1dUx",
  "key34": "2xi7T5dxTc3vgssFmgbKtRZqdWboG6nqsPUfubBWzLCWUNMyehZZiTX5H5tNKcxUK25ubEsi3Ghap7AvrK1Ti4Vt",
  "key35": "5WvQYekekg8aYizjvK28Qa2E8MCVmUN1VkWbn3URR2fQ7trirSJksac2USDTiBSW8kyrRVAtsd88tRfNp2GjSB6g",
  "key36": "395GUHZ4ZocokqTKTSFYYxnCwcxL3RE5cociSUi1jMbdfzGdNYvSfqZ3EWaGLFNwpDsWobRjfGAqyuaGrT8iD7LA",
  "key37": "4RyZ14Kt3xLSr7cqG183rH3J6SovYGfYyCXgRe2SaehW7raSukLQyyXUHj9uAVk8Dw5uWvKACyA5pUPsuy9wGiJ8",
  "key38": "58HujqeyX43zdbbWvQLB2Zm2AGLwy8nf8UBe2rkSyPpGJmDi7pEgts9G12fqGMF3Ajx8wFS3ndxNdCbgxuuaY2g5",
  "key39": "Rv7kvaFf9w2i1vm3pD7QdUZvsJ2m1dRNJ8VxzJyvDR3bhxhthrpnSCHKRHLjBn96x5jdZQjKXVo4iJzfa7qpj9D",
  "key40": "Bo4niiVpDqxVTcDZh2ewhmykKdoyAUosrhaJtdm5XgLNL2S4xnAcVgiXgzGb72nsox9s6HwUCpWZgUvAumESzQd",
  "key41": "2mar7dsh69JYeuC2nZ2eTLaFDYi96HquMy6PUKybFU93zLW4jVzw7y1mDGFzPWbpYnb7pnmixZfBAmuhQp2KhmyY",
  "key42": "5RFoZkMMYei5CArYGhwLdqjATbaSGAWwFyTiM7CSTkt44EXBCPJVBN9irweegpMwAYgPdidaLa1hzeQsbb67vmuE",
  "key43": "449JqoNheK752zu4JUmKBLD61iAjTP4MBTqYinWAnpH6kUZKLdnoj8XWFSnziYz2jZZ9xv9PUapd7xZJZ5FswRBo",
  "key44": "3gJZRgZnrB4vb1uEgTvjgjgNRJTT9gDgDXb9wHE7T8cbEMmmo7PbdTQegRmA5sStBiGd9oCGaMuaAQ6JXKaVysM8"
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
