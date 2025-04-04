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
    "7eK78zY2WwyVYPzuZ6MK5ua9XQLXYKRv9NRaxaYhSTuSXejHAvRB8cv2z9qVZCVjYTyWjfXhELNg6SFescbxTTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E252QeP2UzVy2U6wRfgV5sR9PDx1xA4MVuztTeWdQfJmqzRTDAVj9y8d127xgMJ1RHMtEKktZKwvbDmeZP4WXxi",
  "key1": "4Tfhw5Zx5b2UpeseTtfthp6CJx2GYEqUKgHs2VNsGXDaLGwvHtNzyBtj12AnBQegt3Z9RMma5tz7JUL841M9XQTH",
  "key2": "5kRxNMoFdtqmVJbiRgMAuhPZdREzhcUKtLcGJnyhL1VbA7se6KPxSL4BZGPJ4ZXTUPXEQqdhF5d9h7nx7rPPrdCE",
  "key3": "2tn2AcTx8oBYhMnmvRWj9DQVFF7Te5vLgUGpSCr8DpnJ7cgzxmqJCAEaJaMj1TfLf2sSP6e1vDtyLszzs4Ch53VK",
  "key4": "5hvRmCWZZsNMoBFo7VxeiRb8VqiySLekjJxbBJNEQ6nGqzf2zBq3NmR6U2kXUgoUtkYmZHSpnJwVE94v53UPVy9z",
  "key5": "38yQkSuirS6uEiXWfoE6rmchL3u6fPHdPvoTNnaecgxfmiY3bMfd1cW4dX3BP5mBGW9u5BT3y5LSUzHQsk8ykDM4",
  "key6": "2sXzxDYL3yWNGAhvmKE4czvWMpmR3MWkm286brunPCgytADJ5cUHNst89EPxJGiq6K2A44Af2yKxou8PR7qwBe8k",
  "key7": "3QCgMBcLR6mYaoUqfcCYUvjSzfPL7TK7y3QSJ6yxun3uhXV8CdVGaA8LPqUyUNGtuuv45mj18w6gDUdfTMbRHUKs",
  "key8": "2pf83Ad1GwynQvvEZw66KWPthHWFTHGYHGiwqoPttHYRFG7SPTKbG8TeDFjyF6oguDWysLAdeXq1r8aY2ZgUsVK7",
  "key9": "3XMAszuYLhXQdtW5WPd1vcvnPou2fFTmzbiDBiD7c1M7ZtayxofxaBQ9vJKXNatPnbZjobJC9FGeNXEw5rtGBT5R",
  "key10": "5qJv6LZpG4rLe7JWKTneUDsRW2WAPZSForQiwdPT826VWpNgXoLVpPNb9xFRikTsd9G3msgQTNdTyLLnBHAJMZjg",
  "key11": "5nceypoL2qK7hhSrUMRLVkFkr9bnVRnVUG8FXYsXoG1mrNNnj1h7xB84Bt3GGW66L6FdDxhBCR3Vgs87jDCDmbU5",
  "key12": "qaqYkTKfeeiCcMi5KstRsHL94g4mdxC5dRs1wBkqhbw4ifFRm17RoEkQQsAfff1EAPdMhFpRGNvuZ23mZH8YmX6",
  "key13": "5fNU3Y7efktB71DXKWYnnMRLLt97VcNZ6iKSrQcRWozc5uTnZwAoRRP1xxEcgKAoUeAU3zXTdDndWjdaDMXDxCsh",
  "key14": "4SRoLKeVxzbi825gptjJjrZzXcX2ZPBfZvaqwn9T3y7KD4gyQHhuHtepvSEmuFCmQH6Jq45c2DEj5BbXeGPkTB9E",
  "key15": "2UT5cL1Cg9qXih2gQVri8agBkr1weeKbFyiSTCaho2c21iaGnd59EKHBE9NAnwr7DMZdsiHjLhmcYXDP4n83939d",
  "key16": "3hhpwV6StocFfxaivsmZkCo78YtbxWnX2qH8TvRietLKVGPNgHFJM5JPRdo7GfmMtHnEEJZh2byFZpJomxoBrDa7",
  "key17": "oZYijvrrqzphqfaaYqG9DgpnyBKgyg4MAqdhkZzv34V7j7chvT2DmCNQSGJ8fhwNk61GoVgYjotp1MH4SqHTNqG",
  "key18": "Ja2LFBRZ7zQcmeoi3HzhiGBeoRnEPEhDpXAjij4NVpJDPEhVyEnZVanFWaa958buAAT5HQycDrLWebvAEkES133",
  "key19": "3eBr8yfeXjvVQ3mKhgJQjccm6N7jUmfeDidKruxeNcnAH6ZzXDA56Rof74FMET8Z12MTTRsz8TorGPEivc64aJ3C",
  "key20": "5Ze1SgY3Crc2Jn2HYriqnezQHCZNw4Yd8BtuWvNAhbrfJRjoMXe57qfEUeSCPi6K2bwtYDT2qVE4LGKvpH29UrRQ",
  "key21": "2YKVd4AFqhnLWgow9rhy93u1WEPMSRijjWw5BRiPeBWY1Rnk6uYPQhRiZvxUHtVgtU42T7ZtMUYrdj4Z3bhsP64K",
  "key22": "3fJZdESvecRctGQ8NM7bjbLDcoroqpvDmiVuTi9qTb9d39MtCuFHjK3d5XYnyw3QvQ8wZZebc9vokoDskR1ke6ip",
  "key23": "3hzwSwPinUXy922spkh5PYNGgDDWuDC4Nza5LiwMmosa1GQtjBqZuyQEQ16e736yE3CLSFGuGEukgXBYNA9XRjW3",
  "key24": "2UtUL2M5716RUQehvejPs5MJirUAZZznrKEmbEJxwWuqLwQjgcsyrQVYs5VZ2jT9vLTW6jjhurDdVtkrPRyNsjyC",
  "key25": "3VJVX6esSikeqK6Yg1Kff6nMKhwA3w25wHnegRS6xrGdrq9CUGGaTXnR1NNpauT6FrK4vntsZBUoJbinym3nxYFh",
  "key26": "5frSz7GgdUuWWDtRBd8tKA6MZxNR7Rso3Qft5NTb2uWEqHnwgcNuXkEUZi72my9gNae14HdLEnwnrhxJqgqysKFd",
  "key27": "3uPu5L41eH6tnAZP1QRVErQAcDML8uJbQ23szVAUWHfGNi2JpeeDppRMu6X4qmNEKCLA7FQAU5BtLVjio456RrCc",
  "key28": "4Y9xGLYK2nBqhjNBcd4fMhJg68TRCjYK9qqoWxqVGWKLxMKwjr3e7R6sRL1aozANGnAZr5ha5hMp7RhbmCwLsPBU",
  "key29": "4hEkSrumxCpqWd1v9wdDSbEY59fHj4eBFFK1buJiD4Msd64p9vhSvJYAjZaWLjMN9KKxUFVuHUoh4Lu2jShNHWD4"
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
