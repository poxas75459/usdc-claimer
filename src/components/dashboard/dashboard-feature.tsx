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
    "4bY69BvJYQ7KLZgjubEHVr4h5yYNfpNcNyVQU9bbxAWWJ2VTymNHuvLRZmWExdUWdD9H73K53wm8jYdfxp5n7yZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yTvxjDVd33S8KLPHpk8Zfp7xt4jBq56KmHQ72YoQzzQGctcmJmsU6Z8dNtUJTmHqT2YtukuSp3qnVhTi1u2DRY",
  "key1": "382uBSGNVqVEYJb9N1WHxA624BdiPr7Cck7pmzUNrrVchSf6XXwYr3Z7uL2vW1FP4JcGdp1qLCbpmE3sw4LkaHrg",
  "key2": "3aDFQqoiV7nZCPpCe8tYqFCridVVjorquySZggfYPmwmN1QdVER76hzMdyV6zFo3U27aC9ue1bC3efDhW8dYRysp",
  "key3": "3hLSzp9cDeCpvtLm1BKy6zhi9XMn9Kq4hhdZcxJJxufW1Cid47adnURpD3abbrwvJ5LALovBm9TTDEziJeNZ5nbZ",
  "key4": "3DbSRFFbTnjucek68JVuVAKDKZYz2wJyQ46HdKLXJCb2HwX5kHtAqC3MLh9aGDm8yKxVfMF6niwLSKD2JSd9tDpR",
  "key5": "Yj59Yjuk8z6qCTrJJCNAzuDckH8FUKs7n8pT7UDf8fjSXyk9SvunEcyjjHwJtP9cjBA2PsR7t639scw4WrofGUq",
  "key6": "3JpuMtyZ9nyWHknEXL3oMB2Kc9Gfc8sjPzxpJY7CBu8j6Hkzdo173JHHGssJuqV4DyHsKmqbYAycTdwn46r4AeMG",
  "key7": "zJwEihfcBDg8dgH84CQ4WrRiv66jVa4XgVLNYptLawb3RKyMyyQvRaq3fMvevzLBJi6MzWCr1ZuNwMLGGb2Ctvt",
  "key8": "32TCZq1dQMSA5waK8Ck1wS48ktSiLAGZrczzBdtSYTS8MeAnp4XdZH5zv61XPpBPZ7kquyAnv4MKGDwAfo5wwC4h",
  "key9": "3tRifbE1urApC5iHj8m8DtMxpeEAGtBLh8Ufn9A97ZK9uiSJEuYGvYAkz5MijBgB8WwACB4jfgiWzvvFZq3WqKoa",
  "key10": "3Pz5nQrinK89NVk2mVAZpvNcV65YKxVKDkumDPCmzHwpipffe4qjKzDvjNqWRJjgVYcsPCsnXTN9yTbLAYozcYhX",
  "key11": "24CHpuVAPLQE7XeScAA8V7rpg8KAD8oEW6MZYFXyEpbKBukwQqSSaKeVfefyufpbu1FFekjtw2y4kcLKSSNhpLeJ",
  "key12": "39FM3sHNXZMWFaKwaZPsDq6Fg5yoaiErFj6DjCVANqxyLNx7cZkFxdjabpA7dAKMm7AJkTKgahJfdkkfdG9GiCQD",
  "key13": "FPx8z9cmLMKmYakHqCZFuHBbikurubwVVtqVMKrJ7QxE8fPCM998D2Pmsz3c9ACJnUk7R2soSzYtdtn2UPfrajv",
  "key14": "5iwFeB7KMbKKDSwmLRhfNgaCPvGPwBmT43Z4Sk27GEekMo7EqaTNnVfKyfSgpwcjgj2wweAiwFM2yqwfrVhRmJVg",
  "key15": "5Rkw5ECeRoCUNvyj5XUF4UMT9yqA6SMLjBihfyHa98iDBPdKWngfDHD8WpEDKfFbxfYbdfMd3n8m2tFJUXYUhqfJ",
  "key16": "5fqDQiheUnsoenKvmBBzHo8aVxCVLQk6hnoqcRx6UVY28fKBcpYCAEsRmnSkFTbNr4GqDuh9pBABQ4muMxztqT8m",
  "key17": "5wgK45atbn5HwTnpAhTYndp8F6o8VZDRZWeGJZXdQnUSFTjc1BTQuXfW5snhv92ppVGPGnqDdsDJD7SP5CvL2xeH",
  "key18": "3MZhnzk8WYGg4qzJFTxBFGzXyjouEAYWBoXYRLXcfoVbp7YYCWAH6gBq8qT1Wyh1z7EGVE3YUGGGRRAKLLukA2hU",
  "key19": "aMpTC9CsU8vF2fzqjxtGWgQptmjQDJqq7yYCm9BzW79k4VB5q6aTRbTQyoPrd3hsPNfQZfruPrzvfb5zHAnRAyS",
  "key20": "3PpCVHSFSQTZS6Mj8S6WayDQvV92NaBtAvJNjT84BYemxmgaJFQn3iCSMu65EwfAcT8LLfdgnPwKkEyWeu7MPgeu",
  "key21": "3ZPZJEJeQBRjLhBcZMkrPN6hMT2mSpKkzE8tMw44hu8x6FKxKBH9ktihGuS3qw4w7VmEpyqj8V8jueg4Ao4fGZa8",
  "key22": "3HTfKgjntR597NNAArLDXDXkbtzzTFEhM6RCG3L2dNktaPsX5JVQsxHuGBmjTngfokMAWcShRgMQSz4smZA4oqyE",
  "key23": "2adqZDBchtPo4GkxcP7HjVf1zh6ZiZ1hVkWPF9HHhQWWkhZXNnBEvpzFu7ZBdEs9uJPyNttnRGgifQKytzNsSf2D",
  "key24": "zx7EJP63hHUL2iv424SEb4ojzfpmGysaTy4eoK7Wat9yTLPaXWfq6ujZZ8vN7GU32PjP1LkVQ4fozVVEcpKoexW",
  "key25": "5RS326KcLKf44wVr6qg2qt4m4a4aYgyRTFSQXqoAvr3bXfrgmWTptacoajuwaKXVDGdwx6wyTossCBDo1B7V432G",
  "key26": "2TLuVCBqntBx9vNy2itakVK8xiNFDSFw4vrE1Zvcg4hL594sZPrG8L2FE2ukDmuGo9EJLGJFGKbjxZKNPSxemxPq",
  "key27": "4F2MJZhQKoPFZqq3eqnuGjaYD8aySNqpabLKoQm2hUSotqqWD6F6afCaZooFAvygq4SPTqdypWWy6dJN3tFa7TE4"
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
