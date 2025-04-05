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
    "2i3S7fceBCioHHP4jQ4sU1oYotU84nf9QSUQf47JSwrhthDcVYQxWv1kdYZe3CvKUgZ1wSccS3CWYqJNLZfnDC3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFQQjDucL6FNzyjQo9H6zs4TsXzGZAuEXrei7xeBhYrUkJdLfuXh9142wwKPooni5iZT4BNm6dfJpiPB12wDVBF",
  "key1": "4m55AfjKiwdCpCp4kSeXuJpg1kpCwV2YjBFwRuDM6zTssNNBJ6sjqFW6h48jnFqkF9qYhVhdkmeB7G4qQzsT3KXL",
  "key2": "5mirdPEhVJ1fyNopyZwrwfoZmtJa22uUibZTn5VNKJ3RpW5Ka91toyi1F9BydWLkyfdvnziBjXnX4K64CDefT53X",
  "key3": "3WoMdMdcdZ8WEtXs9JLfMAeEAGYcD8hpMyaJWntE83Gejj5CgqucQFKvUYRLnmJ18iaCDeVRQjwh8cDPzowVGC4P",
  "key4": "hBVaMm7hV6dRVNzx1kqPNumCgnRGsnhCRZpYux2wCDB5jta7964JqFAWJTyNsMakARCUUeq3VsG5muneUDSKP4j",
  "key5": "5oXFyrT9KXkpw58MTiQiLcSeHcyfmTGaBx6rTVEzP7kGxddysT3cbdUKj2rNQYdEWUMCeMN4DVGiuqTASWxkMcQ1",
  "key6": "296LHxFGhk7e8t91FiNMX5LjZVFJzFGRRjxwFKqFkEZsJxe9UA5uUpL2CjufEFHu9QdgWqcLSTFZ6YF2iDj3T9yd",
  "key7": "4K9w44SnUwXR8kdUd9tBaZ7aCaxcKhxuRenw5knQQdBboR2djwqVQMVN8YsdQBVVZZWj4JbVi66AZ56jF8rc9H9L",
  "key8": "4Cdt9USQboPiNm9Yt3TqeWbkTjv7eTHqTshrXHZNTzUnR2G8nmzMSe9AM39NMJ2rdDceqWa97AFdPurWnb7eN5HJ",
  "key9": "3EdXbajEKVF8yiEs8wLkLmMvWqSvnNMnz8ovGiH94UQ88NvDrF2G9NMAWwaiLhUHUKAMSYCaTSqFdfNa6vhKs4WK",
  "key10": "2z634NKhAkBVV8qiC3JUW4LKus2BTmJpG8pnJzCJbx8ZcBbqdNaFa2TKai6Pg5HWUNMZbZrgYC9jXKaNZrtuxAJh",
  "key11": "4KCFfuA1PAq1zeTktPDBX25Qsd8LYu7PfWFYfziEUKNyMb1CJxBXufPZTRfbG3JVPATRACAKeSnd7qf8xUTSW2qb",
  "key12": "nizxHV9jfXWh8XLUSvZyofqrrUvKzeTePECuC82pwRPjGN1M8FWp4r3t1h5nMmSUg8sNtvXdk61HL6R3zzA2fQW",
  "key13": "XNKdN4Vf5t4issYxmNKtNqVVrME9W2MuR58ky7gqNzKZgJZGVcFYJTSChPgJQc7dmHy3JrCVCEoNvqTf7gnExZ5",
  "key14": "459G1FEuuJUzdhrdJcPwTTu69ioxbgHSUGT3wmMXykbZqcHpFjLodEtCmCcKBZpwgZx1c2PfZc2DFxTfjv7yD2wE",
  "key15": "2LxHi94tadSfTjyY3EVXCr8C9fGr3y6XBe7a5VZKXXX4pt6uuxqnh1frD4AmkBiNVsQQSAcDo6Sfo7FxKYpU85wx",
  "key16": "4PeTm7bdXShjEBzEpyF2Z6uJbbwJCeCXsfXnmYdGJYcPjTtXHeSLhrXkxp9JjQShBVgR5WPxVkNjAff2DWqqcryk",
  "key17": "SToPyJcoRm4juRv6V1q5LvZoFrhcSFx2BxuWa9dh8NxdnU25dQhoFntwcaertDQTJFAhgC96bgAD3EUxtYETLEd",
  "key18": "2Ge3sqohAcsQNczhmeUoRMbwvNcwLAB3mnSe9N8DF8ccvtEmZbj2YgLyH9rLcogS1geSEZ7bdhW15FMMBozP75Z3",
  "key19": "4R3zdeLaDTvKXbdy13YCoce1codFMX5vx3abT7T7uZJ7MGvkMgXTMG9XzGuFSr1KH4FtJNDZSeLwC9srYj83LyYk",
  "key20": "4eVnABSU3zDBk6QHPFh9ccwQT4moSad4AnzjXka6HfpMJuLXtCDdDhfCdJnSoXoKLNs7YKRm7rdXRV1Ep4GJ1X6E",
  "key21": "23PszNhRHmZoRsF4j7C8Voqc5CiERc2nv8PudXZhQJqhdX8YjtbxwoBwgKpWeJCbrfCAwMJkkXdbFjh6xx4a6z2g",
  "key22": "Emj3iZYydYAxxpEXkSHpX5WLpevrVghThkFHZc24rVPRQ15NZM7n5A2tzPmNGXjXUh8ga8qn3V794vVqRx8aWbs",
  "key23": "swArC53Wip6YnjZEN4RjWKkHkmTowdnZK39Cdbf9JujPc3SKfbqgvwhqoMcC2ENnMa8gwji2XeWytooDSjx6Wtk",
  "key24": "5gEyCX2E83E1VT8gYHSWX7LQ6bnJfQQS2WPt2WL42eTBV3XGGWK3osareZB1oHUYapFuxqzKFzi67zW7yeU9YXZv",
  "key25": "4PMRgZfJNLGKtygg6kfp4Yknq6XiybYwXWqvEiSZ99VtmP8XMmwrHeEotphSYuW59fMosd3LZfUuVvk3K6Wj1QuW",
  "key26": "5Mt3FLygJmW11EacCduafmdfgAXiSyJNnAwSf3R8WtN7XBLjv3dDSLkGSNXWM5w4vKk6ojNXe9JR37QVxbJBCYtT",
  "key27": "3ezhAJr9A7ikn6GcDWNjqwmcgdqy2z92BjJhecNHUZUiPoQv9Dd6BvdURWe1M5qCkD879iWe1AsWmNuyuvyxuJKt",
  "key28": "4B7eNRxGJAcEbGprAY3oWfd8kUYy9j4b9yZmjJYKGLkKr7JZQbix8Syt67krqpqa4wrN9tdmxQiBVADj7B2AkeNs",
  "key29": "3amA6FCTzexoCCkHoajxDkdX5hcn5r7qSSPUfjwhzzfukMuE1VxjKjyFikuWFcozzEopHq51YnbReymvReLtMAxD",
  "key30": "5cVMcwu1nB1mgCAwYLdyBRV9WpFCkaheuY4tsYU8u7LpkLM48ADz1TogiUmfh8Rg8SPVjbHLsyvk56HfrA6NK44g",
  "key31": "5C8UnjHV1CeTxUQVXSNKdUJAhQc5iKQypKD2EBGyY3uWCtyPTC3c9tnR7fbNHafjiM5DxiBBJGYoR5GNek1qBrSW",
  "key32": "23rrVvTM29QHqk3GybHCN3kRj6Q3FkzdFssXosFP3T1GBvLQFZWKVmdkj6xnvxixGZ4L4TwHRgCZbUoMQLzVvTa3",
  "key33": "NreCpz7AJNdFdZRyc4mTuME81cs2D7AJFBkCw9TVLc99XP8bR4HQzF3KP4Dpgmi868gGBUT4UT4GXbaXwribha8"
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
