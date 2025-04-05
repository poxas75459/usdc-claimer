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
    "7PcQChrH2rkYWzJCQC9LvaMv5FjruFCrDX9JstXz5a8T8eunT3QuHZ3UAg3zbsYqhnDmV2HCYBdsGF41rXNJPKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNuwwGsnGnL2DpxTvMKFLJFzriXtCAUbnyxeNHsBfCVGfvHKhoEh5ZB99NXEuo3acJfh9But1vy4tG5JfvfBqdY",
  "key1": "4ATBr2BY4rfStB1UFM7tyuxJPoB9wM6guXaFwVEjszGBPrmdwMoBFB2Y1noWUhMyo7UGjmjz9zpBRg5sBEcB6xZD",
  "key2": "PMZB41nNBUB5AjmaMk831ACRkrRuq7hsTTop4zfGaSX2AxTeJWpEa6SrXdmc9zYHtnemsoZX9htfyw97sthGyix",
  "key3": "23EkK2Vjmw2uTSWK1hnLuZQVsPFUxjjTrLTUADGwyRcqCET94T7AQGy6LaEHaeLkdYkLUQ7RqEmXqxAoMRFUmV7u",
  "key4": "MEwfBswm9UyuvXarSuJjwTzKBAqViKQodPcYiTaWWqTd6tTFccu6FiK2TPDundARrgfgxjX7SQXAgpw6UxbkEjJ",
  "key5": "f5YTHc8ZxEoiJn6hks3jKJ6NhddF41dhXqhSnaRyLFHmVcoCxwUSkGm9o42X9zmvAakRgLY7kCqkyRmhcwWbeFU",
  "key6": "eBvVHkwFzmfj2Yvo9sZwRJHCA67WUkNKTVrLdp4iMKu62AN8SLqRgqEqJyQ1qaSx7SJog61Haik9Pb667gddLvW",
  "key7": "4YB1D5vB8GVVFGXYbrcaLG7UcTeXQutGkyGWUYzBV6XMLBPw7igksYDX8y51ZDMLNJDDaw4H4vWoa2kjvwwdcvkC",
  "key8": "2QF4y8WpugKjXskubZqNM5EiTSoQUJV2gMZoq2apM6AwzHPMYwSTYyNtfXu6jWK5M8VeATFk4nw5rSNhgqyqU4Vb",
  "key9": "2Zpv8u1dxaRH6pBW8e7uX5A8cfRbSVLKYsaszTur5fR5RtA53ywtinpUAdWkty8pTYk7DqSKQm6cxe7E8uKhSfvK",
  "key10": "NXUHnVKNUr1UucqxwarKh67dC5X7H23Gu1dvDZkV6rwVU9vwwfnXPt9acBGUBFHVHU2VZZyXwq2BCKCJytCM9vj",
  "key11": "48w6CCFTzHNk3TM2apAV9fpRPTzpH4KHMQC2uFhWQDJCz2puJWohavnzbG79hybzgUzNxHHYR1ym3NeMKdMCQ81r",
  "key12": "4XdkZcjJB2ScMtNmbVV3cvADwW6ULcgdt5i4AvQjp1P1jgGzna8ETm5Rx8gYe8SoPdj4XTFKFTF3hW82Z1LgQkmK",
  "key13": "3bmstN76e1n1CjBxDC7zZggcjBqNroELDa8ncxKjNMBwq2S9pHzTRCYvPEDso9SU9K4GBpBe4LYCKvEcmiAdBB5L",
  "key14": "Y1nrk1m85sh2PGt1ZqKbKznPsnDiRqQWgPra81kKuZYw9WVdFK1puvtjbCpW1gABoQtq25jMLmq9nXEkQe9cLU7",
  "key15": "9bXBsuijMtQbCo9ajG6RHFdtepgz1Z7Fa9j4hKNdzgWq7Dz65L78qwn2WMozqcXeQsaSFe1aVn3XNqg6cZfVt8t",
  "key16": "4b8BqUJX1tQCJGJXZUYPwGgAdu6T74Jx5xrSLZiKwzr1zSYjSzYv5Vt3MvzTKR93QSNEFYFjAD3BrLUo1oBwaNYM",
  "key17": "5AQmsXjkQSjesBfcR7DHyLt98hrHub7cTaseMSPgcC5UNF6yZHQpspX4tFXUkxxXdysiaLp5txavgYE6GWTYAHpA",
  "key18": "3P3f2xfFpTQqbh7Y5igsv8F7NSLxwsxYbM22aej9YCzSnv8RDgBq6VsLPjcsv9tgwjGvQB44LqnKNp8xKuUJjeCS",
  "key19": "GwGqdecuQoUEeW7AwPNnef7dcum3Nx695BHvBvZvYFmQq8L7wHUQYsB8nzCsk2KDx9axrPM66t7F7sJMzkG8wz5",
  "key20": "3ovxqetVNumKhkDRpxbWvLuwp3fUDKJpTStUeHGYkjU5WB5jGpKZeTpuMHubuVbegHbtyyKEyusNV6D2RaQohnhz",
  "key21": "31vqKvjFa5mofxKHjkvvQ8ygzEqG9hiAwygihP9TqNSzzch7tCV5Y88dZSW2uMujBZ5GXbdzK5CKLh4LXxBWL9e4",
  "key22": "5CRJm9kVuQthARrU8psvxCXXJ9iri8Yvh52G8o2HEz7DB3agKsncZo8soy9Jy45ZUtWa5C2GkG8FFwAi9waHakPC",
  "key23": "5PmJZDj7mi2Upb3gVavmQ2F7NxE2qVmP2idQKEez4u8FWnxtbb9bJT69h9QHDTLryefWG3kqpkzcE9znV9UD82cr",
  "key24": "5nn2RF5CA4YaqvBxsLsPjUaDAcDekGRm42YRrDJ4VQJN7hVfhRmg8iiNja2YM4J1RjmBWzT7DMJg2CLxhCQCXXq8",
  "key25": "2NomR1eDzzu1G2x753UvdKaupVvNcYvyeTwSZ774fiPCKm7d6fmRtCuE5ystB4pKxG1mkQXs4F7WAesTjfphDfjX",
  "key26": "ctEUFeBsJoDtmigvW8tp1WDcFAoagSP41oW26UuVuv7nW2PsLe73WCYCLX5sHf7qJ276ZcotB5ztJ9MrwJSB12h",
  "key27": "iZddRvrS6jRzr9ixdDRRw5z7kdP7EDKypea9d9Ednd18CG4THF9XY15ZVWPyf92CJL7XuaFmXBomv5Q9VaC9uRb"
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
