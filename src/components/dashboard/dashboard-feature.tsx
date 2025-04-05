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
    "4pLAT94S1BciajV1xYc6fjPn3i89GaBegRduFQLJscEBK87DADGnzuncfq4reHSvJozdQNJPw7vuai19odo6c5Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjJjV79B9LrqNr81vEvcFPhMC8jxQycB3xe1QRr59Jd5EbCtDa549sQ8GSPGpLoAyMF4FcBYjSM6wezdFab9fTm",
  "key1": "49yxj2w9TVL6vQ3aqymkcY8t33feVrB6LZyBgsTxMTWYPKJA8anR1hVnGaqvsBXfjH4KYbNhAYUg9q6znm9L3YDs",
  "key2": "4V9UXdeXPA5rZGJFQzEgA6NeVAFTgfY2fgNtVkdoi67nujdT3q8X2Ws8CeXkHpYBHruvwV3ZvusiHvow2JWZNUXe",
  "key3": "4vKzMorEFpwyGmGNmmDyjLGeDxLJsLppfy2rnRWbXSTnDzWocdZuutwnpubJiSTHBNg5rQg6j5XpANo98av3GMsC",
  "key4": "3uar5LWdy4ootGxLBiCdAVveCGX3XXX7otDHYCugMxZX64rjSVYaXNKWS9ZYTVeXEvcZrWNKnY3UZYXN9T5MbkuY",
  "key5": "43CMXdNoJ3zfik5o1Ea1w8PrAVpmUnrNjubGXkNqfNh513yBRnShRnGK4VrFeycNnh1no1SUy7pSQRp7NaBmHGgr",
  "key6": "3FHZxb7e7itiqGVxj2JfuGSZ7UCoyNyJ4RSi84hT4a351DStjvaxbksXnK4wHKX6UVNDSj2d5HfrRJi7bCZHaWzk",
  "key7": "2HfoZyVmStusLffTgdNknmzkBTKUnQbPGwbgB9Zdb53dBu8RVCPQaiJBjkyVHez4vGahJaH679Ejf5J7JPLy7KHJ",
  "key8": "5rXQCFzXeGDAhTiSi7rCCuU3wH3MmhgLpQoa8gQWm6u1MqiWQKAkQVrNyo7i2XL8hBQRJyeHqADKBXXsdDFhB5fg",
  "key9": "3GaoZoFSiJjDinx1wdaa5ASMu4GTKu8V7LDkD2MTrvkb435MmyYzPtS2TKJPGiSd13ZYGNC29PX5Tkx3a3VBfwGp",
  "key10": "2yaYJiuYpuQHwjcnCW54G9NAYchNm1mfus213W1477J2ufdGcF8NCTJW76EckvWnoaTPqjQhEYfEUx9wUGqydseh",
  "key11": "5B73V7CwPZAvxwTNgNTD8s5a5NqGMpEYKr8m2awUZCB52mEEJjC7CdmePCFdXGaPnYKA1ehuAkorCpczngxds32C",
  "key12": "2hNYtohcKP2TJzfdunYXfGszY8n5bdJnEkJLrHefuFVTyVgyYDwCHezJj3kofxD2W3LrQFdN54vFJay8tNcvm6sa",
  "key13": "3vUaxHqx5nYaUr1Bpev7xpcku1JU4qiaXEL2EHFwGtXC4TZEZXNMvqMX5FVgAN8FDE8ri3GEGKNDfaVJrsE1jZ6H",
  "key14": "353SJ5EDpcrGC34qFZTuqE51xKrtLrwHVFneukyM5zQAEcP33a5gQoibYfEeoFQboXWrVaDFdvMtYKHhdcu9XAgL",
  "key15": "576z97JcLpPfLJEWhVXt87XzaAB2mktFRjxFyNzDtvosky9KKPH1oBmPANnsvV2kEd5SVYqSzohQcoAg54AyFS9S",
  "key16": "5wd1i7nSTcJS9uqcCCFTNEiHcrotAhc5fs4BuVyZpigVUo1b9FzasSyxsgZCriECf83gCCLo8tMKuMkKLpuMAD3Z",
  "key17": "5KcPzxG2TiMwe78syQbDNt4Go33bxBaPgsYxub9hHiZhZq74FT4iNntD7e9AijQZYZazFcXawDSPkTEHfbKTXomR",
  "key18": "3DRnmceTqt8mGNywCTW6ZKeUJvkXY2E2kKXmBX5DkTrPMCVXvc9LiDT1vLVCoeFcnV6a3K76mJfN8bfoBaeV19Nj",
  "key19": "5fMmdADzvhyoFnQk2aNkQxLYNhFMZLakW9FKu9kGxykT76NE3hKUAZF1cmu3U2f5g1Wdjnm2yAyrZ7ct18NgrwSr",
  "key20": "3G5qTuJTR3hDdjdAmQW2UkXSCfQy3LJE6DQjvG8pdJB9X41nF66vPZrcfTMQKygAWMNkkbUFgGFhQmL8giJCzTRo",
  "key21": "4qeEkusi4ZPZZjuNUUM7U22GvA4bfWschDRQcShEdqSPf31UuHAQNDwzqFqgEYkzqne1gCAogemZsN12LPPm7eNd",
  "key22": "7Sx1BNKugWoC8JnBsC7kMREZjZzriCXNjrneY3bYDXT167bWnZ8mKwKkuGCENvxmCJKFWnUQmjLaMqWkPFm64BE",
  "key23": "2vXjuKVy4akwtx6u2yyrzs62LqbXZcqAuUcrVnpGH9oN6H5ATHtQU9UAHvWzY6jyJbH8CiSgupZxvFgWqcNc6nSH",
  "key24": "2WbJJnJfV6iR1LEgJUbt8Ydn5iPKAdXG4Htd1vypQXxuGD2WSUg1siU64jDMfb5nHewy946tFJofcGwVSbEhP9RE",
  "key25": "eSZDAEvTd6zQWNhQwPratsUZHMzh2QznWaoTdikNTvCMzSULbFTEP6PfubBYE9qeBnfMB9EDKJ6Qs2E6duXVjTF",
  "key26": "2U3crgaqFY4WP2BdMZznZEE6mD4ewNjA8j5kijMDt2YqCigXwLWFF2aYeX7GoD8dej7cK9YsyASUUzjSaWYc8H3e",
  "key27": "2LTjfrv97KbWYR3okTy9GxDFwpnkLb6DR2kJhWuxaDgJCE1bHRYqz4fizhKy8ThmSoLhZyxwLs9R5DPubMHRdS1g"
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
