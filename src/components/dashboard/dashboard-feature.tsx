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
    "Yrx7VYmzytm4ufkNXM6p2Ts7xK7FWMTPbk7oWUb4mDdn33ako1V7xdUJbc2prZscqEuY22xqoYSfdZKV8ZtL7H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxAkFuySw4D5ufWYMbCsmCuEMXBzxUQU2G5eZz4RqsyPJgBkK6Ka38isp8XjU1rKqac8WRg1p8Vcayqwk9ouuZx",
  "key1": "5YcTWtWzHQPWDGjBfquEb7ZZaSg9jCckWUHQSyLtgP68Niqyqk7QSmZyw49bGQwKyB3uL4Xr33RCkmujzsq88YK9",
  "key2": "5srGphJki1ChGGJAxzJfWURFBzUuFyJ7xpyAdwD8g42cQ6ED5DB8egCTHWb9rALePxLPCHekVnzX8uFqmfznm7vD",
  "key3": "64bVfYjb1k3N7TrDU1YDUUZ7BThGL7VbTk2YSnL3QHe5dQ4SF1kZ9bHyGtYaMGBXakoRU1D5w3jwcCfwNZtGMzC3",
  "key4": "5rQxEtTwHd6Xg9KD8wyCo4H1zTWKt9apnyKykjDjdjamqBKo5bQD6bcdhzHuEuP4ZGK8ZRupBGHVEb4KYwxnQ6gi",
  "key5": "UDEU58j2L9xQmHCRgATLJDbmxg4WPfGxBGZbuwrSjEW5BPHKs12YwKH65QAMgXHe8NdSY1ErEzM5AoN7qALUH2v",
  "key6": "5nduJjWRYZrrHZA2GU16of1iuRwUCSJTejo7TSCRJqqnbqXbZApdwbAcZoKKFTWQ5nZyiGSdFpBHtV2L2WcdwPrQ",
  "key7": "NUjwp758VB5pJLRQNSprzzkWR1j1DtCpovZ54B43s6Me4LVErb44woAMdDhJyFPg9vaBY5bzDwdgf6LZj8kD3Xm",
  "key8": "2hGfP7n7Nb3zZAJpkToQzAcBJUAs9HNPnFEYFEssUZdcwDrngWAPouQasc5x3DJB76RxkhnTVDMUS1JQCfzLJahD",
  "key9": "3nUNL8Xua1a3Lg6MR3UYgUi1ipA7t1xrKrDvh4utx8eRDNeh4TmGFSsbjnE3RrHnePhcNoyMWFs7P5EYztu2BDcY",
  "key10": "4fivyTnmwxeXvGKncfsLW7Ac76YyjWBQ2eJXwD55dM8BNS5VU3UT62cDbN8iBeKndD4pbCD6EPfwm8YWfLCGBHxU",
  "key11": "2mppcRVVp5qtPvyWQBrGwLAtFTLCPeeanqmU3joyQhqfd6F2qcwiQJezqxtv46FEGXsZWuJFkPCibX7bJTD89J4c",
  "key12": "2pjQScDYzm98dRAAuNCDW9WiTpwWfCwwUaNirL76VndCcktqiN5nkQe7mon9H31cx9TfJFUnmhZSNaFL19DbnfuQ",
  "key13": "2tAfmWZxTzZzF3RtfNBo6TMT6P9yqs36cTD2o16xJSMniRQZrxxA1Q65tQFgUWyRGQBnLA5J5W8SQsXZ7HeaFwXL",
  "key14": "4A9hNUonBRENuvhMdRjdMnUhX6Z69bfuQwDTE9oGfuVvjpN3BfkdKr9hNqzeLYGpSKqBXT9fPH5aSb4iqgJ8SvYw",
  "key15": "2pnhdY9EY5WYY4DQWLtftqGPB1Kzjfa4DAjMmmDyjqE4E5vCP8k9K36PbDbJgmXJYCpyA7t7iQPt75NXXFLWmVGh",
  "key16": "5S6rKfncnwmpvZ69Y5qyGbfwQicJan1c8kxukcAXkTDBU2hB6aSs15oJd6f4vASZu2JTdqYBmoa2BTNLE1ao33RY",
  "key17": "5FRG5mXaJsWYDGPgdwK1rPQ9PFMuhMviXriUPdqmSDZgpgoMkZUxeBSXJyyjQkBQv2sH5fNDdsSZSam5gkkECABd",
  "key18": "5QAJ8UUqUxt7C8gPb81KT3HKdiEkWWFCTkGcgYFggT4sbjqa2S6gbfuwnvDSgkQGmcUzET2bnoY8yvFsaDaQW7h5",
  "key19": "3S8P94MXkFMXoNLHX2HcjMsZgERnfb2mVMZps4RA287KAt5R5m8zokL2sURBXNkoBNCa3E1mVLYBiaKGVPY6ZkeP",
  "key20": "5WWeDxsaP8sSNcuUKfEQ7FWPpt6Shm4nbbQuy1HZPbh37qswrND8sQ8JN5HiB1Ljooofh1QbjoRWpU8jxMehiw18",
  "key21": "4xRsxKkjWjugxWAe5pDAcAXRCj6BqGVQS3jzb6gsF3E7ZQFbW4CXBzTtPeE86ogUZkX7k1tF5Av2e7o8p3k1i16i",
  "key22": "2ytoYDEyTjJ8VL8ynAFzgUPVkAjnyxnVuVCimXqgkn5XW9VRAH5b4q6uQFFTcFPhdpRxehkorpi3UNFVxpEUtkjT",
  "key23": "51CvBw7ta5QPcWz9udZn4zW43NdeAUCQePnncxjVvXnBZABC8KggnY73fHCDUpnEEjN4VqwnEdjVAtoAs7KHZuop",
  "key24": "LzUy8o793SDLiccJkmCeLFSqtJtr1wfzhA4yDn1faD12U1zTBeRajvqmRx4JowADtnazYPFntxoSmdHsRdxFSDc",
  "key25": "2uQHYenMVP6yf5xypzmDWPs6MSG5k5PQdcZTaoMK1NXJayUmTrXPgGHbcihDEEK15V9uf74spXMo5JfoHXsuDXiV"
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
