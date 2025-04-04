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
    "2q3qP9tkwaL9YJePJHgtZxMkMXDy3JCJh4EqMGGSjwp66ZzYg7E4tj9E3HHEM5jJquT5fAjmSp5hsyJ5akE5t7kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLwETCUcYzScy6VJFKueDWZY8DkWTsex7fw1trrNfhqinrkcctnvw3ZacrFr2oeFEytxHeQsKq3hX4YGHmouc4f",
  "key1": "4PYEV8ayCvRrnJZQioa7uwLMaXTDEAW4Le6BXHuwNkp3ACQtJP7XdAKN9rCfJv6zdFrn4a5Cd5dHMM2yXwWFup2J",
  "key2": "5rbeVqTrR9oG9b7B1Uq66gGVUN3q2vU3F52kV5D5mky2P8q4fHkgJfk4moNnRrEkUqP19ywQy91wS9d3YBhopEFh",
  "key3": "3bL9dGj91kFrwjBb98TTQBCDnDiS5kSBUGPQzdLyTRfhKjH34GfDqit4vex4dHVNZY7a5B6Za7sXV51qMx5C4s5K",
  "key4": "64ZAcT99fuPGWdkyY2TuwUmnivrPd5oxg2DN2XqqyejbKfnYyuABF2UPYTyXhv9K52baNbzEY4UCnqDyYaHe1a55",
  "key5": "59iE6r1rDdURHYGNGbnEcTEmuDK8H5KaBqrPUsEg75PVxKPTkyPab83s86Epbo69Gj59LawwFTDARZsxAt6dks1n",
  "key6": "2p2NkbTHDy2ppg7P9wmsSphfVsVpAPssRBtugs65xHBy7eMNnGLSZxzVNssr4Z8W4uXvK2EB2GWbVxpjane5cKh9",
  "key7": "zj8LzJwAtFPCeGggKLhoPDFoCvuPH9t9CdzrVcUzNVpSuhueYES3wTLSFzhd4ZvkWBMyhbJA7h8BH23XjGKD4vL",
  "key8": "3CmpT1K4N4rRYRVWLw4WqEYJ9fnTChYxSTRfgHmXD8Z1uZNumZa2L3iZMXCv9RtPUjRYAfbGVVHnMWNgjBeVpqSn",
  "key9": "4jATurNZgCMdaubVf6rie8Bk8mmdBJw3DR71yBGzxnapueHnDs9oodnFvRvbwaTMFoRMxhPh1QfsEeLDqbzoJa7B",
  "key10": "7rF9abCvZx8NKHjDNTbCQTdqShdYuu2ESJM6gKTSFjpZaCkotVeCGM7CPsaArxQPXYhESSnyGj4YddTXE58yaVh",
  "key11": "SnANQAmwpsfiJkM7isjLHg6Kxr8wz7cpj3SU2CFjkSWJHDHLfufA4ZX23XifVxScSc8UE8cV5ifDqk47C2moWAb",
  "key12": "46UNkVvW3mCNruYrVAwauWAd87zKywX5GojEnmowAtfYvUkcyqwKso1MNCrdX5fLaYt5xqB2LLofHyE4i3HsuVYn",
  "key13": "4YTnWRvSxUczsKM24TZVtt7DJ81qEC5pDsZ1ioUoMqk1E13BQ3mcQL7AvmNvt7PUXLBvQiyV83yiTHrpM3Eoj5JS",
  "key14": "5aN3sHT5AydbTfZ9zTAH9fMp3pofRx7pteq2u8tTSjeTF8c87qGJsTR6j7t6eVQuKGz5WVUegV7FWF3LF6X2ke7X",
  "key15": "66VwGTj1s8zZ6aa3SZVcJCrGkcpfiYsvfny9EcEz4SQoxEaLAHBKPxRahp4i6fp87VrgDouvbHQtjjkSRzKRMCxk",
  "key16": "3jBrWtoEZkrSD2C7EyvQXuQSBJxikpq7z2hepSDigSReuNQmSoabdQ4vtCrG8X2ytcWjPYThBkj19uaAz6oGc6FY",
  "key17": "4uVM4RGTYyYt5yNaihWjwrQZvYeDyqKkVeo4tCMA6BC6iriZkT9cRixnc65SKBT1zLvVRBtaTYMa9n876qTuRW3F",
  "key18": "5mytvmTeKTU9nPCZXL1gwqafYoY3r3x489a3bjTMKLRBeBD5fsQWnD48bA3N9U4Yj5KE4rwdAK333NdUEvy5VG8a",
  "key19": "5FqEk1UdKe7YnKCb6UDMRUbk3a2LfxvgvPQGTA7J5dUeKuqPWwiTNBSaDALhBzPeWXutLGAzgnw6w7Hh9CvZRaSR",
  "key20": "9f1CznLv9b42aGwSr39nqBwVBvnapmotqN9BvWq8bzcNW8UwhuvkN12jvGWGsmEBPP4ZiT5TWBLpVDaahqzpUw5",
  "key21": "3hFphCVBXUdNXWB9ocUjGufSd6wKdUGgLGzoa82yhgsiDZLUvhdt2mbLpj18AMUmN3pVBL9DcJGkZzxN8Gu2v3zv",
  "key22": "1uCos3xukx6dwA3qXj1NqvZevTFLqqnZzYqw3WhXJNinwmvLCsqhXZLsmjozi96er7UCK2mMSPmzLpnTSZoM7qu",
  "key23": "4nmpQgbDUwoUHRM4Aa3BwStH6gqUVqArfgfPWHawHpjNUhwQ1BzjZtAF2ibUNi4ZzoZkoxNU73GZHYQu1AAxjc3B",
  "key24": "4aRJV1o5u8mCF1noRDzd9edCAb1QPqTKy43ZUgPJzdVMaTvzHxcNPuRPUwbqJF2pZttGhejAikiCzsUm9yj56T2d",
  "key25": "YegbctiJ75sox6UrqpXhK82JFuNCyAddswxZRXuZxMHP5nDiK3EwV8ksrQKC61N8gN9Zgc1wMmGbCEjhnrqne79",
  "key26": "5LKcyFhREnYhskwGKjMpSXf7XUyqF1j68tohRJyeLLzgQf4wAtjLSQYwfSxAqkZJj9gpVLKu64H73buLANeq2Tf4",
  "key27": "2L8koppYcPK6vY9U3REwNVpni7S7dx84nb1Mhifhk35GiZtecAgnhiPVQViPeERyTZnNUan7Xa3QHcT2FZGFurvz"
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
