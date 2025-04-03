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
    "2UhwYjm8MGQJ1Utc5ncwYUsammwPQGvhPcg1awPh79rParsoBr9mG1RqMm79Z76tBPuG2WRgwcUvBzGLeyj3fRuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLAbaNkhjqPDDJTbKPy1hGNF6UknneGEkkbgYy2BJTJymtx2Nm6ANs3aaB1tmvPrqxzpPdAHKgZ6gNyVPQjoMkt",
  "key1": "2uTWvAh3W2KgPdqxAAwVzG293SsQcJPoMzWCXdk5ZHyoqoSMxcA866vZ8KxkUZ6MYJ5X5CaezLgQRNqqt43ikzHg",
  "key2": "4uxpSTMq4EZWrYi25H9MRzbja9L88bsQ8TMjLR8FfFSnHjSGbkKocCapdv8pMoZSd79STUKGCiMVG16sDSiRQwUX",
  "key3": "2V47PTr7bSBDCMbAoB211w4y24o5S8oMnfeGLhMZneX45P1X5B9pFx7WXtTRqFpaD1K7YxxxNjJ1UWDZK6UBUf6v",
  "key4": "5wGY9uPUXvQTEraBzCeAVACuXjKqMx6yGiYMD55C4HfihjDobdeTLcrHKqvuEwehW66EiH6tby2FYbU1r2AHSRnb",
  "key5": "3immy8jxhMBDMy3R1ddEsiUhKzp5ZKdyTgMN9xpVVSvoCKFeXsgxdWQJy1oBtSEoBeW5SmfB5LhjXKmKPVohvfRF",
  "key6": "XeByVVEHce2HTT24qnyKAjFwFTsfTW2yeLwWYSmrBwtpsxFXQo2zfrt75NQfraGEwWCEkymsvTTgj3wwaQbcEaQ",
  "key7": "23EqDYGWdewH9HEbLJ26uSPMSvkZ1zifswv5bNALs8Z7JYdvjrQMKhX8UwMgJd5jT6K2FRsiP17grPidF8khkYKf",
  "key8": "2Xd4XLHKgZNGTfpG1oLnrfo87UVKXWzmc5e3VnpxQdFtj8qGc1iGcEHnCWHjrEBK8eKEA4THUqyx7c8UQGLvj51X",
  "key9": "vJKUzXTfCNsuBQ1ECDM1Q2ZTPzPFgYBruiozaE5b9A1vFwMNTKCD2VShyqhB69jrKkTVismAt1wnowyk37L3nvK",
  "key10": "4nHBJdfH96QxRjRYnFuAMMrVw6WDefeSjaWYzfTE7nZTTfVJrujedfLLz6BogzggxBJNsmbozkH8v7dYLRCGEACv",
  "key11": "3AqsFMSXMYK6LATxAKEf4ebxxxprUD5QjXGz26496eHEkr9KpGqCZmdoEpdJ62gm5SDLea8neeMxV54Tpe15fe7e",
  "key12": "3aEZzsoV4quJvbCCHDATqn4RyxRCgs2mkx2AvgikUr9QufCBxHuv8gygg58QQfr8zg8bxgrqgp5UhpQaDZ1sqVvi",
  "key13": "2ry2yi3ANPKDch4hT8Fm6U6Wb9ujb7mn1U5Y9WjEVDgrcrAvhLz56WKwL7XsqF6LPsypAHtmNr4AQKHoA7vXEA4Y",
  "key14": "HLwrjRsv5nMNK6p2cP7CqGeECRsbWjewxrchUvga2YybY3J17gMzB7yaJbMTZ5ERDPhpbsjTvCPbysntJMjny2P",
  "key15": "3r7c6o5WNXecdwBJKqxhJ5chGbL1ZPrDZ2Ukn49ncay17KrvKfwLoTgXUrbKcsQLkirU4CESh71EGDpqmiadQXG7",
  "key16": "236DGtYzkuU7iL1udxnidUGKu7GfoyzEHeKXN6iK6WdtYpmRWoCfipao8MBqz5h59UCihF1ZSmR368EAZpQcuvZb",
  "key17": "4GwDNkRW9647hJ1cSDwYpVpk8tSguxXSF88A5GPiAaUNkT8QfjRHW8zeo8Hru8V9JYTJbEoKcwuGpMo9sk4wodYD",
  "key18": "61iQDgBZYnovTXTwNpX1op1km56e18YEmVCbn6HQC13meZ67syhrRHBDr5YM8PsdV1WUGUYdxuG3UVhwgWoK7RLn",
  "key19": "52emjGGD9RQo622M9G52QNDEJB2JWE7At54VGxGMDwWJNifExFCtve5qLLezmj5HCGxNwaFVJF1j53L78CzUdSqP",
  "key20": "3bxUUGqreC2AFZQUy6YGGpVXyfx1V7LEBppwbpD3ZpPmFsThcUGSXSd3eVe78XNzF3Xor4SRGa3TUN2G9UshasXP",
  "key21": "nSR2CTajj8tygXdxiWQQuJkPBukRZSVxaKpjhKG9SQQaLbjAXtrZ6C9qDoiGr4iC8ye45CLobN53BqPRAhW3Poi",
  "key22": "4is9qhSMxSdGXkTUQvo8kvec21mU6dWaW5fvAQRntVSwM9VCWyxKXBs7nBGPEpx1XTuLhut7YfFRCGz9ewWh1CxB",
  "key23": "2GxaBpFkWpiYXRo1ZbrBf4HBigu2f6rmcbcEBzuJnHRDD5BRWFfCxnHLCmhpPH5BZCmpBoMi6sZ4PVwwztm1FFc8",
  "key24": "6NkhrJAhvT3YnC43Z6RVUmMX9ATJxaoaA4XGtYZQx6LETxmhj6Gh3PJCjZgc3Ud9ZyutQb2kRH8XnfbnkezDKwN",
  "key25": "4KBdZYVtKstWZQ8D9GCR3GLD8FvJ48Js45ptUJAKTfJdRJkVkrnEaqnUVfBoaigMaSZf5NXF1BM4h8X4F9m3ZoXX"
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
