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
    "vnshwRHL2KLZTHfjDnwDwA5zFWYmpm93N9eVE9uJZFynCLLz34zheSFD8VHiLGr1Dx7itYWuQdnpJ5ZFpPfBfvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N11UQzpXye5hgTDpTkgVkuhphx7BcjEw3UxUQthPzzBYZEpVFzzBJQuDtaHnV7FmgMxvhje5j71DwGkmmMUVqjU",
  "key1": "pz4PbUH7uhtoiq7E7sVHq6qXZACSvQJMk5SpDQhsczqhDNAYpUvcwWQmV8PSbCtgqUcoBbbnWFSbfNfS3ifEKNC",
  "key2": "w99vMx3AFyLhLKyWJyVCCH7z9DxUmDsuvgjKsuD9xFYkpudfM2Ka6eDPShKucMReEnZcP3o18GJzSRGnBJ2wRLW",
  "key3": "2jeWe1TYXny5rPGrycXbq1Fkhrao1xVEq2PJ2Cucikhc9aUULW6WQVrsbNoj5czutuDvmjrXXg862qsPBzB6JWVn",
  "key4": "2SHUf4azUKKQzuKKsyL8rbJPaBFu51Dsn4yvDqmcdqHiNcrXZQiiDekDTjbcbhcfaKGaY6LhU7FDBeHJE75YJbj5",
  "key5": "24FupcGGcU3TdU3S4YXDfQMBLyRCwVuA7ae9Kwze9PGoH6seCeamVwKz8RVJWuWQpef8Fr769KHhwL8TqsQPfaxG",
  "key6": "4qTnkt5qNN26fBmGwuZK2b6NyWjq9LU8eaLdCQKrdzUsnU56Y6LZfee88oxKWe2CwZL8djFyRKXhLaQRnGtMqfCJ",
  "key7": "4eY5iNsJ4zDnATwTkZ1h2tz95i6JtqpB3iBRdJnwDrypvTXbFMWt736XrZHW61tqdqdWryyb1n8BZJTwmdzpvT3N",
  "key8": "5poUAfgVQVYzDcVxZVaS1pSn2zigKvD7iDjWHANo5eAstdDrpdr2ZfxX1AANahpu2oGcVwVZPp4UNGTXNruMQEoh",
  "key9": "ZkyPxYBC6NLEKSYEVNWjaKtdgzhp7nukVa2aMoe5UC1E5f3QQ1teGwUBigmH8dhtNvb1H3RMvopHa1P4C925SFT",
  "key10": "2Y862iYxKyS4AS3CxPQwbo77d2gXrJFbsMq3ex2ko8PMaAnrbneDUWkgQVZBXSxvVEpEErYWfz1tY3izk7yF6oZH",
  "key11": "4WVFc79hXGkrnSMRVnmS2igjaECP2Dcb8QFP4viJJfhjg5HU2fxk2KgiX2fKqvawy8xWzsM1gXB1BLAy4EaeTfwc",
  "key12": "3TCD8fq6uePg75vnmmK2Ts562EmdHp2YJEowPErrRLYCWP7XdvC1V2cvAr7Q8Zq9CB4aLLrQY2oc4gJ9QeoKEsNX",
  "key13": "3ZmR4weMKKT27UxAp7GbMYmtJgrGZ5ikGRjkBtvDdRc8ELHG8zzejqVff1HVrHpbnu4LKXSHK1HtiS1BfXpPDSUq",
  "key14": "64sRBsqzFwjxmK5F9oJBf8LU9L9YyUQctAWPK3mUTJCaRP78RRaQRPZEjt1zQzvJ8Pykj7SLAqXMQR3nkcQ9trYB",
  "key15": "4xDm2SjvTRm26VkYXFcnazgSLoqoYVYM3uXZt7yo1uHYgoawUeDZ1exfqzRVGNDkwtcZ5x2tTKMoRDMoRU3C9KrQ",
  "key16": "4o6UjYPoE6bLagkgPC8vf11S4mbpLvNeZY7WrHHTPxAUFTLkPjFYzDo2qFS7c6ye7A8KoTFi55APU3D3fjZu9jTV",
  "key17": "52aGAENFrzvVcZUvu3xo8qR61abydBobg8EASJzDrrHtxDGP97UbfLEZBog4FmKodA3cSGPBs8a3Mae5pNACHE3J",
  "key18": "2R8yLzS1okSc2eVSH42qgUNPbwTchqmc3a7wbxmQXkR3qHYEF8QT4p9PWy1nctonT8nG7WxGuvDdQinZeZ4Y2oTX",
  "key19": "3bJp5iJy7tVXFqGGZfqJL1snaotR35EvBB7uNawXSMmmy4rGnwRGRmYKFnUqDY5iyyCkdDgLYrYHGmYyvXjyFCnA",
  "key20": "5qJfESkCU22CBDE23Wj9mPArhkoVT3jLTmihF413RHHhiSMUqTB2795nZvRJiU67yGtuUNABfKeEky8o7ySiQALS",
  "key21": "gHkDmgduMcH8DihRkXTQPdwm9iYs5fjShKwwj8qos53dgJjUq3pbF4Jdt8KC97RMioqHcG2NMHbwjeH6thCdNfM",
  "key22": "5ADx4CFA6q1ekunxFaZmc7cSf1AMKqFsF7fXKNdkAtG2tnJqQrBaEknhmqmo4t24Rz3YGhrBHB7zZiy9M7VvLxYf",
  "key23": "2KYciQA6GNAMvQL2h2JmCnWCHnbKXvzfE3cQ9JitkgniZqWw1HAZ6sNxj5XnkqMw7VGcayAY6V4h3A3B3UTeCmo4",
  "key24": "2vV4KEFAjnzPjAD3zQErVUVnzD81sHTYEf5kMXM2Ac39VZhnVxrUd9TjPS6d4v2iznzsouGmYCgk5kfejDbjThyN",
  "key25": "581Faa5R2i54X1zpuh1gy9JshPSQxNdkyVW8b2JnVmsXsBmi1wXQQynXvFf13dS6UZi4sypjZu2NCsSFHFD29SCj",
  "key26": "2r8f6hqr424dTto2B8WXdhApNacF9F72WxGBmCk7BKbfCRPGtgqG8uRhCpqDhTyGHfwcN3nuG4UVRD6qsjYhM5uN",
  "key27": "Y7158KuDSweCpuwFakTYwZxnoog5SdJW5htTiev9q8QBFwijdpVZyp7Y4DnH3eveL3m7sCK91bdXVLHfS3LejB7",
  "key28": "21PDQAuQxQrybyvggjeLBqnCMS6umSHDAUyMKX6FRJMEBztoxDnnDLaxBshVnwvVcYpeBsqUrCPNQzxwcwukFPAT",
  "key29": "5g4CK2fSmURnmtMvT3bF7oZGJe2jytUdbrYkj4TQtZMLi61atxqWKMpr6XzTgkouuChSEm6pivt6dwXXe4PhMgg5",
  "key30": "3pJGowq5WhigxX9GX17vCNfGmChYnWbwdFpRnfmBhqk35HxJ9Fw4nEP8qtxdvFDCbqTZmBX1dN4yQ4PTWB8B9cBY",
  "key31": "5sErUduLmpFrYEVTWwu1nuNF5SEAe9PayALRvLB1LfZvnfKH1PQmqLnwgKHWywbwgfoddJu37GuoXAG5UtzkYbzA",
  "key32": "otHM96h6sZ34vp7wRSWSKi2AUBtKpcPCZRDpV4bpztcCgoX56MW4haTvsNGV34aqLCgPodJPeGJbetMBBKxZACw",
  "key33": "48AgqT6A1qUEQN7UemC45uQtHNxTwJ1iam5AqgJDX2mx46em97e3sS2cCGkV5ctS7xym1JdB2Js2fbvgJ5eDJqBR",
  "key34": "2C4eg2oTegMX5fFkZGHbfzF3hj2zx8NFq6cJDe6mxzhcQKapCRp7jBZYbgwBmNTWtYgCu1J2JdfUgACqQCW51KLE",
  "key35": "5hT83TfHV8xvtWe6wzLVU12zMM2NE42L2argmuswGw6oFMnU7fevKAHQcKvAoeUJPfJruytYjrVY7Tum3uPE36Tk",
  "key36": "3zyrqeXuLWzjQ5jdwk1sp8KNW8B49SJr65sCZNpMWBMu2r5Q1AEdo7Y39cLpwxsRZW5Th4GSUHKeCXhRnKqFJpov",
  "key37": "2CGFsNqy5dEDg4pKB66RtRnZAZfJy8ksaubog2qX9jBvs9gRAsGBYHp9xAvYbWrP2thftQ9ej1vc8TygSSjgCkUW",
  "key38": "54QGsApqkgt2kbUakSiVSXZrEp79ae162fqBJUWxkA3RRHogEppQ1CW7se6sMQvs92z5rP6xbzabtnZfVonnuqZF",
  "key39": "51pSj5MaeRgDKgDtzYNtLUUfvGwLJam1sQCvpknZhHspJMBhhLeKSnX7XxKQptcQJ3daq7nKhaSYHmM6fXioTcqq",
  "key40": "4QYzpmZU9aZwTFxZohdhm8kFRsqrLnaeQmJokJ3qRnmDt7ubWvdhN8A4bzRGvQ73wnFskCxWtuPNUk1h4goen43E"
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
