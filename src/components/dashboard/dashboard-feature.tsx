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
    "263U815bQEynrkJsVqBJpA1V2CKUg5Ws3QHAorqKVgjSR8pcsSrsgetC3mJ7x8tgmH3apvoGSEmTCeQNf2L66x2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQobXQDvYdLKrXuJHrfPrVpDDJxmCY898tb9uDxMjgp5sdnVictxHSCoBm2gs6uXfiACPtzMTVAWSNWu1cPfC2g",
  "key1": "fahQstSZScBy7XgGfShpftuCKxF2rjVCDBUfoHDieVGbphzjXevwcT53hSpmvHugcgcG1o9DC45TBX8f3MdTsMm",
  "key2": "5UxbzquVoWCHNfoqqGhEu7wa2mjE6oUvxUuWeLfk5hoRv89QPumxA9WbsuKVv6FAUvWUpYhxCUegMZkHiNHVeEUu",
  "key3": "3pP1Lw4oSTDrphh4tDwVrLT1VJVnzYo6gUg3Hthr7qwj9Eg2ZL8vziUQi4rCFAfRnHMJSWeMLM9dadMdLiqnmdmB",
  "key4": "4omAFfX6oAr5Tdwst4wt8ncxNXs5S7sDDkHzwPkVvXxPuGQ6UKKJw21SXmNvTi7kSpNYkNfaKfaaF468vrBgTTNY",
  "key5": "4DCv2kq4kKuaRXqHFRhTQJKMt1XjWzWaWjGGZkvynZV7QM6bkxfLWyde9vRnkx1uiHBEEpnAsuKvVWmJWNHK1jfP",
  "key6": "3o3nCwp5p6VuShxhBz5kKoaKVEoW9EUYmLsrLNsCSsKAT8qHA3RWtjMXmQJm7XZsZ95FDVEBr8t76kGkirCNFapT",
  "key7": "2K24ju4nE1JfXHdLYaz67ufo8GGXHEauMaAxr3FVkwJKxsdZWPgFjk4iYVfNfkuhhjoZ6Ay9mNj2JDecgn6qT6vL",
  "key8": "5bpdRmtvDVwx4vYKEQyiKeHGvv7obqks4LRJvY1UynsGjZZXn4PevPiYqEVTX8UWatAFDDdvzDW5fYHYyLsufYQj",
  "key9": "2dSqWEruyXmjA1RBDc62NXXZRJRHMTr427XhyYchZfGmwhodBjadfygiTWxFgh4usW8FTdY18921wKEQChsAgL3N",
  "key10": "2pcfiTT2mLaKRnVVB1SZajswvf7hkR5wH81T7ycTAqeP4fvMTw7BADrazTGDShVzKuXzsxzPoortnDSxvtsw5b7w",
  "key11": "2zXv2x12frTCYhCADFoLMFAWyUshnP8cr3onBNnLaSfxsY57ZvbSWvJVqi2mnziBMwak9yHfYQkrsAJGnKP762kR",
  "key12": "4vspdf7xuDAsXnDcXGA1Ve47H6yWo6ysbB35EB6yNWKUHgMRwGcHu6RwiHF8bJKvmvfXz1uWbAf4bWiRqU2mFZMv",
  "key13": "2QfLK9yEp3poKHdPVAkTQk5Ekrtyfx8mz8e8hNMAZ8u3UZPRUCKY6Pku4ycDgxA1FNx8o4GVDNLessCoBMNjr57h",
  "key14": "2CSapJpTY88NsG6JSUwVHksuTJjPmT4oGhaJVXQoz7cwQsRju9mmwMeTnD5hSDZF5jUf8pHwy1PzjYArmikdziNG",
  "key15": "3fUwzbU3jZGG7JHChkRvq5RMYnhn1m79JdmxR88rx9qNstebqWSx7MQ6U9hqTFVmCHmHKVHzdJaZN7uvBiyT2hYt",
  "key16": "5PV4mVYiJm4Us9SFjkTGY36Qcnfj5NdkvXCeNNm7wuNXs5bcyCBLUxNcAkJ3r6uv5TgiX43t6VKbEwM5xzrdDHqA",
  "key17": "2ff9tCDbFv85hgUMXKuy4d7yTfmjo2ZSfvdYBFhreqWw6t3L72gdMgAdnjqo2PmayjVxbRVD4ADAgyX8bwELsSEz",
  "key18": "5arciE6MBgPxS911EcipmxXfQeznhjxcRMDbhU9xPoTBzQA1sf9jpsu7EKMgteTg4c5BFrUYmNkCq3xBVG3nHDQa",
  "key19": "4XUTt3Q6yFvZKM14JYuqUnjGtMbDcKG7HJNyQ2yfCYyxCQfR6w7uLhhWY1jSW2bfzvwUazVAsA8m9SGGG6zPc4ka",
  "key20": "3F7TuTqCHM1a5rtXRn7512sqrKnBKPPa7oMUfLcG8f3f4sT2iQvQdbvQqyP5LhqwZcQXEUmCicq5jXdwZ7aKKHx",
  "key21": "5QPDoMR6QLwQNE75Pyoq7gKxtb8iaeW7Y7oXJ2Eds3DnFGJ1cthzrEQog8Y918cXUFBEYx5mMq7397MPg6xekCx3",
  "key22": "4unQ4Au5datc28eVzNxCLf4RVmgLkk9J6cE3PuwFGcQHHvxiQVm6rkHUDSnR57EoJvt2LbcD59dDE1CdCXv8kx29",
  "key23": "4BH1nseWQUQoRCrUEq2QGKELap976UqaWMZsS3ppZs5Jo3ZdXAFHxTTctwkkmQRrJC6JdSrkLt2W3ujd8J644SqN",
  "key24": "3YTRByDbWhCDMosYeRGqTKUfbEjqfqbYFYekiE6Y6r7bKnN53JHju7pM6iKYVBkRuKmUc9G1fvd745CdPG3CvnQ",
  "key25": "2KmvTDKhHEc95T7f8hgX6siQzeV1LahThB9TeUwiEWPQ1U3J9degdVHeQyxopUReuUqJc92J5KYT9L7U3DbZGrbA",
  "key26": "5oSNiMusaVunLRJUAjqQ16iLK4hhyST93qRx6fRc2Rtwrzv23iGtiLC1WYqubKp2cFXFiwV4jqj3asPfYz2VHik8",
  "key27": "2iwwrHJSeRHrTpHU5vwT7Hxca5EQBNjgzCXZYgtCZZ3vNfcAjuQkASv5FfXQbKZKnoz2wTKwynYH3jQkEnzV4jJ5",
  "key28": "2MmVzCX5LwS5QbfQDtKRQpsWeNRRgL53RfJWbbKzfCd1qwe3cajsagjBcTNBQnfWXkgf3TSgAVomZS9qTZv9dCvR",
  "key29": "hTVxQHfoNwVWWK9dz3P3MPB6LzBJBpn4V62MvbMmRPX2pcvs1MnX5StsuxmK3X4dJ6zBMMZYxD1jC8kUhm2LCZr",
  "key30": "5HMYZNobxkc78mHuaSKhAurCBTgdKNjkBcDvECZvkKZ9UxiU1Txc1FoPkJ6grh2DwzieTvSgdgc2etX1YrCYRgw5",
  "key31": "5NQtHt4U194HV9XB9PfgaaybJ1WMJAEWx83R8NM5v151urzuneAs7QksbG5tPGqSojS4ke7G8ikbz5hSDtDT6QaG",
  "key32": "ui66qwmLLkokhbPNPi52RFk3CAKLvJg7nFPpWf7uvMHKx1MCKWoLhJFL42mHkT2PUgf3m7L4CmNii5c6a2mKhh1",
  "key33": "5o2PKkcQNTFpvYx1LV3KAg6HXXmEM8X6TKYa5dpeqbuaMUxf3cYEUwmfMNNvkB1jzWAvksPeqi91CkLXnRWuuShL",
  "key34": "4ch3a9AqgHHqCfyZoo3We7UaHNeE6peWXvwwRdwqJwAGGCgUs5Ko4oE95onCQV6SFAdubgdGa21cur938h18zy9F",
  "key35": "56h9LfJP3vhBHUp3T8iNSKpyausd5hMjbn43ibiPesU13yWqVjJKPQpcZrFtmN19zifbxrZAWbD214SRPc6pe1zR",
  "key36": "mpdagcQi6eGV3k1V5vmPW3MYe8hCKX1SjvRDZzUeWeRaH7HbsLTttHPJm12b7vwpQNQJiABSB1JUkiLSAM7s9Rw",
  "key37": "4tS44rwwnenEdzAttwkhK735XE2MZHQieBdyGaw8VHgi7wNGKuaztvthpQ2Sp1ebhD9gAfn8kPFxEKjUrvgNmtMQ",
  "key38": "5bDHxzxBu2s3Xr4PDVnVggFEegKUJQhdtfRuTvGsM53a33cZH1PenEtse28j67c965VATfPSnKDDafDZXunx16hD",
  "key39": "4WwqMmQ64Rwyawo2YFqLqZN9MmfnfFDeNjH85Dj3jfMgJYNbtfANDEJVT6M8yL4objFwPg4VgKeCxuUB6WJeFqFT",
  "key40": "3FzcATLwLPfqznR6UjUrTiUM1Tc3XssMaW9xEcsyphc2xnbwukL5ZrkaxzMdGZo5jZgENbVCjT4F65Uud5RgwTKy",
  "key41": "iDphJ1ZmjFLjdi587vvaHVEwBNvWw5zA9sDgu72LE5dsMzK4eXjDnjNya7Dse6sWqdqFnvQASAZyxCzChAKHZDB",
  "key42": "4h7M5ae69mY2DiTxPUXHyrNJnz3vdWeJEr61qoBibJjCPVk8TLV8zUXvQPjgcrFxD33umxJFHysFhdG1dqUF4FYz",
  "key43": "5n5wYq3j2FXxiHKVPmcNa3G9iDhE5AaHSaKt3QzmKHpzpCBKqDQCih8EGQViFpCEUTzzVHJw7ry5PJeHaaDv5LeQ",
  "key44": "5fpHyUpAkUGE95g8tVJCCtEi5E7QtWWZPQoDJH8AyoBNJdgTzzLgE5xn3h58wvnwKAgPNBibUXCUSGQGnucNo6eh",
  "key45": "5hX9uE79sTpE2Uj2gEyg2y2zHUR7DgDyU2xt8cUSQV43sbN33WSdwWxMpZ5DKNnMxo7nJG6BzDCjxoprrH7yUurz"
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
