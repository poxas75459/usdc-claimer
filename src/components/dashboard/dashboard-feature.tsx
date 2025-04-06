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
    "3uWSrJzhCG463s2BfatFS86RsPyqkeDRC7tduHG3HMTZfzShaaPqy83vrNDoUHDVC1spAaZZ7hkFgygE54FXqpfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WC6tDheYgeLHFxHHpXcZi5seeFoDt6WmjRYBcJF33rYJ8e14EFLvSsTqahSDWXPjxZQPB6qVNPz2yJsCw4BkTEv",
  "key1": "obXkYJCuMAfiH9R4nA3fDvNzV3PCrSe9qGzkdidN9uidnou2q4Z3JnUL2ibA9GYftTv1zB4eDxbPMJFH5brCAFm",
  "key2": "4uER1aB8tAw4Qjatn1MFg5DriWHyn2WivhkJNRiDnNCYB1RHyXwFnZ9YLXvVRTdFvw5T6va5F4kNasiGBtsmuscf",
  "key3": "58YbmKmV9KJBbASt2bc8Ke4QeqfS5FvgHrDHpseTy8niVspg6NgjSwFve5K4MmzJxy6ZJWp6UahkjgcfknHFa28U",
  "key4": "2fmJF8EyMn63xLmmhHVHGj4xmBvYkgk7J7Ru6qQv4k1rWh32UYVcY8oTuJ1wMsez4Ajmi3Hw3qC1AQGPgxAvwa2j",
  "key5": "5YgqBTQtja33yRWs4ZrwnuQCvR8FQCvEDPK4WR6vYRh1XWb1EBAt5DaWnoQJY13dJ5zB26Aob5TLANGtosMei3ox",
  "key6": "2BZTbxBBen6UfLVDS24iwMzc5SvpJ1t6oAq33DTAWpBQyMrxYDzE1uNY9BRoUWuAakGhdA4U1L55wHoDE7edtALd",
  "key7": "5brkgwNmCWu8b78eVqsgjyMyBxWQGwGz7beGPAgVafQkDtzDng75WmcJzTGcL1ZF3jzYhFVQXgQp3QRBLKgGKQyk",
  "key8": "2Y1bMZMd7KXfija81HU7ir5LQS1uxoUV5Kn61DrZ17j4XPHuAohNeYTeY3D4fuhr6FWuYwQcKmKtkjK1QcqhKcTX",
  "key9": "4gknKnsKLJJP3BNd68JnR5r8E2vwsjuaWbDrWe18ZAXkXyL2J4PXRiJJUPbANxMA3WPyt6PVVnoVd43wWnqJYYPS",
  "key10": "44QyjciCsmwQdjG3R32YWoY5LakvBwhwTbArg44iLMwYRTz242hTFvtLXGHmTeZZFEPnRNnoH8QkzLmpwZAryEgj",
  "key11": "4Fn4WTmXWda2bNYCPGqDKhtbgzkn9vc65AwZYtwxgDRKXHhT5u3GMCq1WHj5BE1LHXxrKvF6K55AbreTYM1J9Lgx",
  "key12": "5FRwzbt9PKa51nZ4mXiDuUVSFRCpuNXtwwGegNyFL9kHUPb236b5CC7uUcwRYumGdFzeaEiSCQL4NAKxFcvwhMHd",
  "key13": "3tcGC7Tp5cdSgY2JjgyJ1VeUPc2v1TcdLaMKYJPHijmcDgyZCTyozs4zXxpfMA4zox6BeeANLtSJMZDnTPNMz3wC",
  "key14": "VYea4A8HKghe86JY7igZkxL67SvMCG8WPjJBBDAgs4S2v3sAvpswF6e6jdSa5GRZ6xcgXmKyoNJHgqKDFbT3VHf",
  "key15": "GPE8b7xsNPLv5FhS711Yp9HFMGCBJ1hqP9dRetm82jorEe1FD161zEZDo6oYjEwfSHW3fXUi55rtjGcz8juaU6C",
  "key16": "3UoQyFout8PmymBbXaqLLRFTzuJqZek2faBebnkF7EPmJJ9WZHC4jhqvyFAjfgX6YmZ7oJyCsnWTzbeGTDSAtiAL",
  "key17": "5WjuPgqKSR1u73Ey7WFwtaJmECXsH76Hc5R4ovrBodnHUxcrx9fYhXtBFGtQF2zRLSbqeCiHThT9CiMEcmLbxWPy",
  "key18": "v8YmxR5SQHavac9rBv3kohqaU88rgW28HzYNapkGtaNBnJ9BSvAS39bgKoXaTpWN4UBeAEAFbirfWzsm1WWRnyo",
  "key19": "5dzejjrn6xpAPMtGHNauoZ9729BTs9SRA8g5pfX4HK6pQjQ6uVEXJkRhfhzPUsDqAhPn1H8WYj2axpVmUhzTTTaR",
  "key20": "CEkw5GAvNtEtaAJ55TvfeCL8rro7L6YDFCcqHWJaUWfQt5TGHbjDBzSfMhGxJUeDGSNDSDS1eZ9brpwsAgpTmSS",
  "key21": "4WAW6q2psGtZ6pPgHahoJJ8tfgaxCxMw1xuUq6RGqmie6nNjLJfwM7WRQF2EyodbJ5HeBmZ9SNMcnXbrWsx3HHmb",
  "key22": "HX32Bwk57ZrXs493HZ4XQKUuKpGyzLbS4NDy2fBUCze4U5CH1W5tCfrHoSv3xxb5qrZFwjeSnMXSyi14EGd4oZe",
  "key23": "5neoxsujFrEbSKnXThNuA8MHf3Ycvyjy3LDqBNmQe38RwhVGQyKkTzknYewoWod91ixwcS6CDG3veaHVLK4x5RHm",
  "key24": "4c7gRqdEXq8ZYMh8MUkQUZAbcYp2k1SefiN6jXyvPa654aodBYreaevVuN3LppequE41cNK4ouGL6nBd3ZRdamEZ"
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
