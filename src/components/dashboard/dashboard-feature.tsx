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
    "4feWUFMg4vCEreN4TBkTH4f2dPLyFYD5KwtCvrfnZV3xBDvHSDtRHbdK1QjtfXEWrfU4YdmjZCyUwdXNHvZcAeej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YddWcZ1TySpb6yGj9Vu1jyuHnnGWHwNYyXvu5qsUyKsbwmthXU2yVP1F8f4xYrShSp7MoDwVEwQZrsbqA8eS3S",
  "key1": "2NFr4k4G2MB3HJq3uCqAuuCQKtvcUPKXc7XPZvWeqfV2x3Hf1pksokXjRXK1EBqymowasttL3p7B7B8SXQyEyqmV",
  "key2": "3UVBH9uCLpjJVynZzMpgYxcTHWnt6tLynnJy6NF2R2ebCCoQR58qHaoj3y5HMM9wZjp2koDGpQCr6jpj1d86Hkwf",
  "key3": "5YxnwkBVzPhvQP4QB5nE69B3XaGQFuV2kSS2tuKX79mDtoJ2giGRW4Eku9SjXQ6sauTdRUhiRyCBR6nfFFb6QGwF",
  "key4": "5kZjpCpqEiLQkuMx9iY5E2eCBqu6XRxx1GQQtkJsZStJoXFjD7DM6YsDvi8GWvqRWgQQ6NcFckVwtjuSeznAaPRt",
  "key5": "Qa4GjuDwN2HgY67UVmqD1QybaY94mFRwV2puLNaaxYnYrCcNZGT71TXEpBj4mF4NYmvxaVG1B49R1fjsQ6MmA67",
  "key6": "2Md4v69W5CpWNnYVaAUWcDpiVeQ6gfEYrqwAXeXPm2HTdZBFpjubjK4DBKpsDoP5fZHnnBFxCz4iL7d4W36D4B2i",
  "key7": "2a8wYgqSsLnkbk8JZX2w5dmTNH9nJM9e2g5tdUeW4XodyHqmDPmuDjZSJDvjXyqZsqB5H2yf3v1j8jz1Suc41Z2P",
  "key8": "4qXwukuNK8PmbxPap3hVmerHFf51F3JBE5dtv6zRDNR2EpFNMgSgwpdBrEn5ceDDWnHGUQhPRzC8XpU5rXe3QmUp",
  "key9": "4fhEnUcvfahpXj7gK8JnjpHXsWpHvMhUW9UcHCzG3Zt9osgt4v971kR7FvjhDDuGx6s3DB2o2TrfHaMzn58BKUBB",
  "key10": "hBgomm2GVnQ8VWe4fwaD6YDydWxU8ZZF25BsQeX1B7u4p3WKYhhRMVsgWft7oqrdkVfNAhwVpqZ84AJakx5E2S4",
  "key11": "3koejq6V3fPRVBJANxiPhrFZJpgxX9dZw1tzkkqtDH3YZ7k5uHkL27xrXmDCK5QVnNkvHnqi2BiFtZq5Mhbkrw7D",
  "key12": "mV96ATLbhnrheYZXE2w61CVFKGaixksTrPcp7hFCjCHhUvJTbawHTWbhX6QCVZ6boXBxmfTkKZpF9EC2iVRNjL5",
  "key13": "4zWJ2BiDoFu4Yw88d6YomPVkaUe1AaHCaqzTkBUZ3EUh761o8ThgYhLBea6pXy65yXsYzkht4bqeG3oBUEFvCRqQ",
  "key14": "4mb5ucZkhzkZCtgRbE3Wg8WY1T7C4B2cRCFnehhgDRokaj39stcStY2DsJNQKp1P5JpXJ2k8RqVPdpZRBpmzhe25",
  "key15": "2fPs5K3k9GvyPoX6j7rRCRmTXpfiAEAaC7PaUYfziqC5hEAcjjnkYt3ASaoMdxfZwX7iRroreWUt2CGBx9LjRHbs",
  "key16": "uyPgN3bkZo5fd9fnjLGvypKgxeokxh77kzqnhDvdoSc94zycySUGx1aBTV6SjAGt6mkf5nP5PWopCqNFJiz5Wfo",
  "key17": "4nfDMALgv1J6waBuNGyDtt3dA9cqFJKYc99x97RvR8bsugVdy3kvtmqCVpN6RTh8eP8QKQADt8EPQLmTpXsCUimj",
  "key18": "5ZszPN7ZYWbVFJK8LtdJz3sXZmfyMBrR6jWcBxodZYjrbZRbdiFhxSiSJPxti5JxUwNj8QPdWkt72nrsmZaxVm6Q",
  "key19": "23fJGdVBGCYn99nivgSSQVeUfPg9VkjmajmkpzYeSRjymA6w6QCe9Cy4JYJxzB26w234DNXPHKtRDwfMdHFav7bf",
  "key20": "3xuZtacw81gLfHMy9zTRJauKsnSm9JEHTVcvxGNk8wTS4837BrbBSbvPVkwJ1Aq1RAFgQUKKr9oeAvEgS5kpBWGC",
  "key21": "34GYRjHxdMa6M1FmABBgRZNxCmky1sosUQUrBAWQ8zWohu9883QMWM2enfw9TXs5YWwEGGhqtjEmhVjqmbBv8XHK",
  "key22": "4Ww366hy7Mwpni86YPVygCQ9TLoaK2fziqPmT9aHL6rhiTUQiBMrnt1CfhMWMYdXyREjkP9SoWXWPw7GMQ9CVQta",
  "key23": "2fsabDjJXtphYPLq4B3isFdvFFnJSdzE3HUH2FEh96dMENRL91Ma1b1xPbkrdYTE5Y2KNqHypynBToTTxbajwggu",
  "key24": "2Xz8VPzoxqnKiQqsU4gF9BwuyPihapVkqDu5F2CqFDPAtwGxQs9PyXC9FsW6L2WH8NFhWxxe1QizJn9Nw7UxV8YN",
  "key25": "3BY3CHbG4dAVdMy71y4uS7ztVZbjpErRU9KMmN97S1h17VhEattHfHRGt5u8uNB2HsKTAszj5Y6T7uEzZqTSQWe3"
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
