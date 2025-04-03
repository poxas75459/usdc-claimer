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
    "4QfkTENp2C92b45RKCLZi1JJoKaYzgcUf4arfzNohUrVvAewWHSXgZUh1mZYf1ofws9gqYdBkVFXeK54JNzp2yGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZHDJh28qG7hHcNqAQrP4ZcFqvNcViFeB1u5q1nNitjQ6ot8K2LDVsH1tVDSceayPaBsp7xQpRbAQkGbAe9nRj1",
  "key1": "556pB7WQEvuBSnSJCKpekJ5SPu2rJeWhHqTuGo8NuB2J8rrr2Xqev2ZxhwxzxG4aCSUi2zzM2jYFDHCugycfkUzL",
  "key2": "3n9MoHn7gij7RSKWMRE4ERbp4Mf2seuumxiUgVXQjQntaouKxrUYMXouLpBaa65FQ7S3evumzmry6CJc9oKDHfK9",
  "key3": "65ARS7BMrc29Dw8wS8UjhkpkA4Dv6v7GQizzCTuN588tTi97xGZu4AemdECWAhqa1gtyUxGQRXQ7XDKFTAvbPCdd",
  "key4": "3yvS9GFd1RdTAhEZZurHdF5NWJvmUYjocihLd3qTeMdwhXLZ7rrffFb9XEg7DqyqG6uSr67k961mzFqbWJKi9CHL",
  "key5": "4QcbnmvQCw6Tg99iCe7JUKuxQMf9iazJ5QLcwtxZsZR7FAAFX6U9tYB2bzwi2Ywkqsaybu2whXrmDpLpiwLhyJLJ",
  "key6": "2DYJgnFHp9SWeNGTXvosGXica2ppusSPc3WixnaXfweRxjfrCD4LfYZankD3u7SvpoedwfXRgfZQQD9FV3ipE1S3",
  "key7": "4GjR4atv8izjjF3grcxRUKT37SzoxgbemZWGmALZRqBpZ3iAGLECijpRtzv6AeQvfTqxKheS638ZazeTP9ZkY7t9",
  "key8": "5ktzjDQ8cChkKmvLmjxB8DoS7HXzakgmZf3YnhkohqMvntSJTsT5FEvMBPBb352SjgmYovMypV3scZK7pyVmSiYi",
  "key9": "2XmMaKyjHwhnJ2sMGxZjD3uPsLEctUN7c1jQvKvLkdYtzDRw75MSf7NxnxYqHvDiCjpmHm1aWExrTtJDXU4uiqhL",
  "key10": "wbPoXWJKFZvVgqqYRn1YH4ULJ3mQcUmWR5f9R1YrXcb7JBorARpy7QBCVzkFjJZJkSVg7ko9jGmRDyJhDCLdysp",
  "key11": "3sfEDFkDCVzPi2agxEJL7L1cJWZ6bvDisWzufQGbTNXtQjfy63V9wgqyUiB6ADY12o7CNdsM1eU7GrYWvRhr1T57",
  "key12": "3229n4N7UFZRKjppW6yAU1s8AgXhfNfiT82Nr1xfu7Kfkt1VzYv5ppKQGRpoicMmupxT2sn2hS2gVHLvvKj6q58Q",
  "key13": "592E8hTNxkBhP6nhfELeDdxTHr2mDrgo7L8XzCqvMJVN1KbWJKRBAFYG1UHoeggBQNB2f1URhu17HyrLYp6saq9E",
  "key14": "331nEECK3qcXGN6EmyRanpMfq6mBDzrMYSZfJ8BppkDjh6NvinoZF3gdc6bptg1iLq9imsps5RD6435ieuvFFHCA",
  "key15": "5BVBxst3CATnCjGrT2gHA4xHvpUj5LuB75ykE8ReLAxXPenPV9oekuu5caWihJMZmD881jnnb5Xy2ysauXQ397Tb",
  "key16": "5J3X85BVzhGLUpMu3gzmtuwvP63vT1QzFheNMvEnKNTdfaevsmRW8vQvXnckXK2aTE7x5GP99finEDDgj69dfCj7",
  "key17": "3C9E61j3VAfyXi3JntzJPvks5sS7EibhPqcbqUUoWytzqK5FzfJ8est2pqvHhUAp1JKC1tVf3i5iDwdmkyDzVzsZ",
  "key18": "5NShg1ogfVHMZ3m3vtujSSDUFoSWvagHZhFRFzGzADMRbp5X3FBMGyrknkYKrMn3Dxk4k7QcZSKfEkeLZouLscK",
  "key19": "5qYB64cRRpQufJKwHd8cTSa7DSVc7nZcCWZPvJMde8rK6eMn3qYxM65heFXa681SnADdpUoX3AkXnugFrRmLafYs",
  "key20": "5gK5jbXKx8NNJsr2LbyWwz9QGXP8rvKGV6x2od7AAxLYmZt5nXiZ5Gok6DZ6sLWGMj6Y38MpECJupxiGSv3S5PAu",
  "key21": "22sH44esBg9s27xirZdCSa8Q2rfpWMzoTmHBojFCJLZDtSkgtM3pWr6WTtQMGarUaS3GV4AKXo5qb5RLHHmpZm63",
  "key22": "2mAPLMUYdzhW9ZKo8wbWHxNhntTNzDGTQQuyrfuqdzwycZ4rFGwea4LzKRhQtSK9JzoodhqPXEoPxkuch3hbnRrd",
  "key23": "4K4567V95PYSj9ViboZzdLeXED1xGche11YDtWMsdAdbu4xMciDwoUjd6TJCF8hawxDxCSEt7oy4er4ijdkYJJAM",
  "key24": "5j4YSEjAggnrek3wrx3UfK5PKcaPcbqy5g8iAEnYG784EMm95tCx2tifth5XcPmRQnTbmmSpVdTNsvhbL4j5AQKc",
  "key25": "2ZTsbpn9Rxm771gMuSkWVzing73hDR9kGpahj6BZSavTDdzJ1bXdXgnK6EfrJeSgMiK7ChkjNp8XiKbUxZUEYL8V",
  "key26": "2Y7uW9e7oRABx8qfWNAzfG5S3JZVZdPVyF3WzgT2TYE1dcGchhr2cdztrsBuDcESH8HjKW7K6hgSxykBvtSPWdKd",
  "key27": "urxR69DPtkeeqgi5A7KJvzCHuaWHLpX5R5ag16ZemMfwUSd58EtuK25wkTh8VqNNXtThpBCA6VbD5akgyYAEZHw",
  "key28": "5qvuZBohXAy5KaaYHXfyWKyBuRqGgYkRUJGSUxrP6EVYgb5Szzb7viCCAn8cRQHFcGHYXXpPc87u68aB3fHL7QkC"
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
