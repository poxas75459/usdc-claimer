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
    "2we64pMagKvbrbHakpdU3VErivgziihVxKqoe1LXDxaS3SErpmP1M7xquRDrTBkdzoy5Jbq7nZFXc37N8z99fzX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UguCj9zpRYzAANYfi3o8712ea8B57Y5LK3QQ4mchrgjuaj1sYRKfi6VnfJ5ydDrauqe1Tb8gerV7rvwpRb787Rr",
  "key1": "4tA3QC6ogAjjiZJMRVbU938Rd9wqguZAQvh3E317eW6JuyiUsLkPFR4APkTnESbarB2TQjfY7NwAp3Apr9mc84U5",
  "key2": "L4hoLDqmpcLvND8L25YKY42Zs1jCVkAic5S6PntYpFzbGnuWjstPYWEzd15r54Tki1mai86kdN13nYFdVjGbMLV",
  "key3": "4sguyKjimovA22M6aNAkFmXJNw1rgyEyLxL9z2ZoexSLSJA6ukKUZRjY5zjUevAAjSPq9Up9chnjPm2R3TBpiAbW",
  "key4": "3zC3ciiAEzkfzgEW9AfKfSM1ybFP6xUGdgmvuNPmQjH9UmbQmw6pLe9Hze2FykzpTnvekjxRSUQAoJhqDGdiboaD",
  "key5": "5sgiEEBD1DskyejbGNZt5PaZGz1GdijBj6pc8NEhyMVCF1jJatTNk661fzC1aMVMgrhkG88D65ghX9QnKmNZ19xD",
  "key6": "3VTh5BWr224fLej7CbE8FzDTcrf6FKB1ssCAwnG5wd3XtaUm6qz93tTJ247pnWPKsr2655gbu73QgunjxzerGGvQ",
  "key7": "3XddgwT4x2M7yzeFm4AbibqzU3w79oTsLxVLTtjzFBTTnYpoqou3cwyzkmULkSNmnGo5MwAP7u5B9hg8xvEeCPmw",
  "key8": "2txfpdW1HHS27VpDejyzTfQEid1C7q8W1wZV3pdVfaWq7WdiJJ61SMEsnLbm4S8hzrGjvyMvkqUDQPckzk9AqZWC",
  "key9": "3Wx2ZjswgraT4mHnkv6tTHWSSDXtRmNvHz8sHPwmizMsQSCbPb3gVnf7AwPNfY7NAAkFz6RCg6drw6B661s4pb4v",
  "key10": "UfV41PoqH7e6KZS7VKGrBxx42V3NVscKtvzdwbiiW7pDaDsmGmv2NFVRo7ae5naNuq3KLqJzrcndbpEU65rqQy6",
  "key11": "5hE3NHybhuqSkkQHEWLtS4SetKy7nqhKgWU9DsfB9m4obkhv6LiRqHnZjfJihWV3Sp3pxBAVwBM4htpxZexQ595m",
  "key12": "5ubzNfoVe4u5ZA2FKcD4AXJa3nhnQrgMFsiLfHfJwfEM2yM3aTbU1xFSNsnrddvsQu6NV81FGJKjswVpWqYw92hP",
  "key13": "4XKBRXYNN4Kazjq89P5JWgs7LDt2sJpm8pW31xBdNVfqvkS5Kp3PFfEsjUMuhskrZnWcHf1j9BX91crBmQYfzX5J",
  "key14": "2m2MH8TTyi37Ju9Eb7Y8ecyroqthEDjUedBAupFkHQxaSPrCmiMj7dJorUhrUJnq58SEVNMKw1nspZ4Lw4g7a1me",
  "key15": "4qL2hSmFetsmZ8nUAh816cefZHqT5F3gMewTWj6vNH54M5Sy2Xbyt3CDJbhe1SR7vsudrKowiP2MGfaPsU9P411P",
  "key16": "2gNZ8MRWe9f59owXXBZG7SVLLa3F9zor1tBgvzkiT6ywpyc7Fh4qgYQt1kG3wyVFiFHmxdXSr9T8w7FeaATSctLw",
  "key17": "58hK4ASDPjtuEpowjRCRiRebrNjfLvfwJnscYV56Ny3yXWueQpG1rZveht45xrMARaxbbazZxDeU3YzkAasWc5gc",
  "key18": "ZtGnkxSpCCTA2tqsWxseS8KjdppbGedf2YdDJqDgJ9LFLoxrrtFLesmw5oK4fdE8ZDMag5tR5rWMxiomJSKkD3F",
  "key19": "wkLeUBfkSzxVfYBNULzsNotBMf6Xo4AJq2dvfFjZQpSDKy1BjKVDFNBbAh3j1bW7UmXaQUEwruBUsfibdY5GFCD",
  "key20": "2uzWK7WnQAvWxS49Fi9wdRyHLQzxL8ExB5Ng2R9HeyAAi9pjC1mywwgjfnYqsm6FdWrgEmogrXTHwtsuSGQdUFMs",
  "key21": "58QqzfTPufk3os3a4A5MA6UDfnceT6Cp6biaheymWSFhnUj4cDKMZNiEzJHy1iSXfQD2TZX6SZ9tnU8ymGwa6zXy",
  "key22": "4QscrTn5eCq14QC415NVDneToUgzhhi7PjPZaFehN6jDRU7vC7WuvPBmvr7MdpQ9CSfMNJcceZLQrTgQ4uXBWZaH",
  "key23": "3e2fLS3FHckBURtHwfV3p4HYdnodbGwr812fmzChRNayUzT17Adoz3hqrsQ4f3wu2ye2C14zZ5rWAAYQXHjzpgiG",
  "key24": "5LRCU94GDBTzf3aKYmpDTF1369iy5oEm9mwnrbuXr1m5n1DtZ4QjiPLVj3wbEK2cMQLpKDXhA2JuqzCGaX8eChCB",
  "key25": "2Xkdezj8R6NzsUUrz6cNXe7GZ8ATZoXTpJX2Ehdap7zXQ23k4eNSt1fzV9PD4v3h8qGdLUWMvDwFBRgCUMCa9ji9",
  "key26": "4vk4EdwsAfoaHFoy8PXraWX8jS6oSWrbYLJxxTV78Ufauvc9CoSZ4bcwWbzLgYHH3UeQq6E232uT2tycL5ZkiHqZ",
  "key27": "nhYTG9UPhTy7NTRTpAtgaBxB3uKmvAfEcRmYWSBx6Nyh7WhgjauFEyrkvSRiceQ6XqCqS1d7ndTjdCKUkyPHrdW",
  "key28": "389ny5Qkrbhh92G6YwvM4UNWzJLpgvGnQE4ZPddgKGHCG1mnqXSbq3JSzYHoTFTuwrGGYu8ahSyVKA4hYB6Jhgjs",
  "key29": "3fmxDbN6vYv2vcN4m4LQBkcL6FVAVyjQTJvuYb5jXmojsVnpxeSqNNJENFgp96CvgZHReAVfKjFE9yUSCz54e8Zo",
  "key30": "2sx3F741cNkMYj8Acu5dKnJ2WAJDBH3mJXwttrrNVX5dMUjHv5kateaRpb4fKa7aEDRPitqQCsbVYgNJD97FC5zN",
  "key31": "3xFJ2mwqRFtzGCVQnfjbivsNxFM3kwh5gtXE9mchuiDZZN9qna8mVyt3DgqS8hffQYsUD2mTzZR81MBYuhAFgx1e",
  "key32": "2QZAWkY2B1BoqifhmSZStC8LJTStmqxfLXqyxex9iBAGXEK87A3akTrn5LCyGkL1bjLppsLxXhgvft8Y9Lo8U9EH",
  "key33": "38UDGmvaBCNzWxFEw2mc68UH7RvUEZD1vHrNBbouV65xj4MoCWR8p2qdU5Ec4Ad8Rj3YGQWsxMNfkLNWQUmCYxyv",
  "key34": "3526k329A7CLC2bjvsfqneKpdb3ssHFLzN4if6DuTikNDzpoSS4wEUNivz3eN27exoyTcVgMppA91GXWWMVVSHNi",
  "key35": "3mZ4fJnZHNgibARXdMpvLLbXiHYXiLv1beSAZug6CrEYgPwXPFwjogzxcCziwjptxiMMjL1UUmjZoJb8dHiCSWsG",
  "key36": "2bXgFjAfem8EU7t1x12BbU4QZF2nwPsPGajba1mKaHGT2XP2bSyZUkRJy2pBFzpJfCVsu3STQtkPA4qLXGjmjX5s",
  "key37": "5qC6bYdpyYPg1h8gA9cuJDR8y3R593st8QoRvJJ1cxyZRfZkcoKjcGhP3ij8nruH3A1Fwi163XMLaMTdJ8HBr41b",
  "key38": "5siDyXM8qkfZNRbf9WBfoTECnGJczWgxPrVyhrdzRgVuwkmmfWzj1hgGJxRuiaj6K67iacSe7CCF9ettkXjv3ssC",
  "key39": "5pMCvYwrt8RLjLsdWqs3CRZS8cvUagHJ6MPbwjpEvRkSiqMnDkw1aKzmpW6sE6kjPXsTGMxuA1esnTn5mcUV3nMe"
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
