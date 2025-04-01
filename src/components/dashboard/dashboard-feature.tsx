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
    "4acRnS1zRfbcdXb7VhQMasiP9z8pxb9LgXmMFBuekVxkdCLXcVm3avhFZ3DUCD8ATHtqtfVVZp988KeabP9Njizy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w3NaUtVDfZ5pJbgJsBrsL6JBSL5UWRKa9Lmr88QETMaHtEunsuLe4uLEMSnN7wsWeshvcqsTDWC5HVXUQajazRJ",
  "key1": "5d5oKZTKM6psivqqb5eJ7Y1pW5NJehr5qSmZK2p89W5cENmPQkQaxZEhBFxiTjE9DMeZB7apjVwUMmRjoiYF2EsX",
  "key2": "nU2cGPvZPQGSTUfaoj9CDi7M3Qa9WYyj8XfcRWChA5BsaBiiTPgrC8xsRnHqXhZNjtkuhwWEKVH5yojK3DoUZrQ",
  "key3": "2bnx5UxsAyQELdwiPpV5hDWv7n5SgTd2eJHdfbesNYsVxXF7XqA43X4dHzbeaGLngFQdeAdZTqhd11BVDQnUjB2f",
  "key4": "3tXb1zWXrZsCFx6ERC5kg88ksysmKyLp4Kyrm3v3cfJ87ptDmQdAxftgxgFopWKSj6Zg7vASCRCXui3KGsAWJZWy",
  "key5": "56XeAQcQbj9gcgPHrntYdCC4dRtcT9AMMV6j8XaRotaCeV9Pfxriq9Pgo6Pz91acPSxAdj9nFsmP6X6BA3qnL3Tv",
  "key6": "3uVi67cbMetkeFB6U9wy2YS4jkSZvCKddRcQdxENSajPn7KLHHZBEjRQ89S8ES53HmwABf7rugMsmCWLNbboigfs",
  "key7": "oZzM3pGdMwD5iUiMGHpNkYTvxYqwBTqbrg8Pcun3MmCqQLnK97WDs4addmsxz9XJiLAo5ha9EHkLFHixK9xbm1F",
  "key8": "28yPmPdhg39XuvC4ZcTphgLapwYW7VDGZ1u8TgA5TnZNTah2TFG7tV98uxHYHtJPgccPKskLVJNKxUMVVv16uQ3J",
  "key9": "2ffYig8wATPGs4ePmw3y8BWXhvZhqhaXR2CRZ6pqKcTSK6DhPW8iS3BvUzyk3LhVqFXsyz4mV4dz5HtYGD6ZCMg9",
  "key10": "4DTsrPQuh5Tnk4LdTJALyTkvRe2JT9bqdqomSs3XuRzmukuRFMUUNWonKKx874Yu6xcysiA8KQtVjMm5XoCZfxfU",
  "key11": "5ABMSmBcJHLETwU1esAZ4hstNnE537XiEsGzM1SgrvdqTo8UsPziGpjQAnuSYpTYMDS6kxu8dr23aLSBXhDUVUP7",
  "key12": "4Y1YojpXKGujw8GMs84QF1os76EnqGYJLzYFos8wWVSp3vRUrx8nNd78QonUAR9KGGeEyPM1ZWRueHFQfNwbiPjX",
  "key13": "28mzpXfFQHM1s64Dc7gqjf1Q9pGceT5uVbS6pxqFhPyKRDx8xJ1TgTMMWcqpfH6xq7Fh2CLbaT9QzU8LwWGM5zpm",
  "key14": "43wZmT4FqCrgYQ4G3JJdyyCjhSLSTYQczfjnwvo5qr9hNbcrGqbcSj7UqdFaWgSEXuP4zD5ErcGxVT2oBbUhvi71",
  "key15": "24XqX3SkB11sVMEoaV4SqiQfWaFWxf93tCwUBYRyjL6Q1vHPLvuDh49ZHCgwCoSdZypjFYpUhvMP6rdvEXaHk4K3",
  "key16": "2Jb1HkjXNBymUNbKi3jpt77kW7ExqxXjAQQbNohJGmWkiM93GSaLjm4rjpNS2cFEB5dmr8s2oqLNig9wtF8TxxDm",
  "key17": "u4Cqes1EPKGzerQniTsDsUuvai2E1NpTmtUBBU4FcbZjR9j5GNgMWxnqfE3yxHt31nDPbCBhdLsDvwTg7JGhPTb",
  "key18": "RTvU5ovzy1YbBMF4kUeXW2AwBmNGdTKshRACh3m4k85utUzAynN8RMPKKoDN1pPNd2kaaQ5BNgBYEbHapRnT7ZU",
  "key19": "5jJHQfMomYihL3GCoc7SGQX2VQ3JXdcdgqgayydWnbu34eeNa9RScwcPiHwc3wkJxqLcdzxen7BK5LHbBikPfA5h",
  "key20": "2Fv6Urx39ZCP4bf6MUK3ZPTPCsdL7NfXJCdruvPJGbeMAAA9WFiBPDZPF3DucBwtZsFPvp7UCCJ1R6srwnSqBN7f",
  "key21": "2Syf9hnJu4DmyxTF3bYZPr23Bu6wCVxc4ZRdi92Hrt4LpoiLuQf371D3vXeGvpcLaKj3GH9rpuLZU8kF5jk4nTiN",
  "key22": "3SoBoBN8tmnPKQoWopLdZazvZFbgCQsMpLT63unX4sGG1y8zFcwMhvoWDJJf3KmEGVWAWmFyd5wYxf7u9RWbuwQN",
  "key23": "3zRdJXiBVTmfriBynmYLuyes8TXKxe9L8FMQCH3Y6h7VWxaBW6eLLvWzDXCvLCDq9wZjTDVBM81sdpXz9oLUd7Jt",
  "key24": "2kzLJaKWerkaMfZjVn9eePzRqP6Bo17aQF8Pjf9uVTrPuK81vCeeMYbxTYUQcCrncSQnu6dKWGP483ovggaycXmo",
  "key25": "2tYU3RW29FJN6dVwy6SCGx8iMUynUaQkc2ZYRNYvMWpttSrGRT9BpGqRFC99RRwT2AG1SPVs9YP5nuieYJQZ8sp2",
  "key26": "2T9ZvpFbit9wHTULMDHogFR9MYQycPVBNUJ7ygQ47uLrfayQvokc79bntxeoKQqNMCZX6dj5PdG7WxHfmdF1a9L4",
  "key27": "5ppV4ViLmPBvTdb7mjUMZJPzLTP6XZsehrMPfu9zCKbSyReqdDwxTEBwPdePL7dnHdFiv6qcZxS9uhVELmZC9UmC",
  "key28": "5nPmGuRqbjkPaxMz28dfAPz9pV2Yw4tFW6dpQXRq9RJRwqCbBVhb2QnTEpYXiJKheCqVh6hZfrLP2gPqUn623Jfv",
  "key29": "4TVcwQT9rPCB2FtMVJkjeCEKGVJU296fWwxAJkHcWCmSoa8pfB5ZBP6XUsFucsSB5LkkKH7R4qYWamJJrecUWN34"
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
