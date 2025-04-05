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
    "31grTTP5pYrD6EEhRb7AvS1ADmat1ctszLvJ7qekLZNVNkHV4moZkfGWaMUD2yGPKGzZUckw1G2mr8xw827USWQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YCFqSZCc6ecwCST2SPnZZ32QCDZCxLfS6K1xVEgg2f3dxQt28ct5VS5gcUSqBPUQ1KsSzAKn8wWkFsnyhoYKwu",
  "key1": "4iqWWaufoddhQnJSq6D14EaiBNf5v2YZUNEaA9TBBbUqeyLq1S4z6VSVWJBURNtSAGQ7AnVLjqZEUeWuEzP3D1Mc",
  "key2": "RhLAWWbM4igUxGWMstKy3RDSfL5TAjeStQA4L9SRogQu8NQgcacyAsKbpdMyK5eWvEv4Gb9VAAxqUej9KUvS1QR",
  "key3": "2z7jRXzbkrvH8KBYrA3iRDeHGtQqBueDKwT2onZmfE9K26Xbd7T92ZJmijGPnWj5NMVY591VKWWcrhtA7ZNUHe8P",
  "key4": "61ba11SSJJgZiEe6TTL7wXGX9F5LXWMhtCxNi7z1X7zyomusYppJM3bhiPaDDNWum7xyD7zNVMpfrxC6BgGz2sud",
  "key5": "4eHfHmkaEbYLtPjqyYvKKZyANJnwPrBQSJbs5EhQJtjfygujcJAphUd9E7UJ58jNWrL1mdddrKgNYt85ZpS2EGLk",
  "key6": "26gMLfFQmyxmeQk4TtT7NUTmRNNNEd4XH3wa9bQRtmi5ZEHtVze5emhp8pgW8CHWc93UfxVoFZz5Gh3qECesUSJs",
  "key7": "5Xow4WXWMRvBjM3h5FK1NfNVGCtW9EBnsTtUFVXYQhfHMKe69vtHmHv6rkMkpVt8KCGeugAwSejZduxYp5PP3KYj",
  "key8": "SvMe3B1qQkqLRY7soHh9dXMvUo8BbW9MmeSLFKwHk8EKYWSwRWXBGY92kzza9m34N2uTrnb1pL8DQdgdHznbCTe",
  "key9": "2DZ3FSoGp3V2oZBMiQ6zXh62VMDQdcFN8f4VP7h65M6hD652MnhQJ6ehkjNZsRBre17ikwDDL7CEbuRmsVbS9pu3",
  "key10": "595bJH4rSwMLe2B7PvRV6ZJG5wUgLbHBjgZJ8hSrgvdobwoSnCXjJFsmvKAeRV6vd17Thz8fdmzQVHDAtSThQCXJ",
  "key11": "gv4NSRgSRdzetXHABqXq9HucHrNbK3rR6Y5LiELwEXizKFUx3cw7WcB3FnP1TQPLuEDdDnXNc8zwPYT8qVkhvTj",
  "key12": "5K5AmFR9nkYGAgCFe8D4xSLLbC3EqQ5U5oiVTp2jm2cgdcFpnEpGdh73wtSZYZShNr2JVDUU9PVj3hmohtu3tDjn",
  "key13": "4EzML3iU1hmzDBLQYnnYK3LHzEraRKGw8gnPjPZT4ir3mJ8ugLGQe8MqVRyiym5JgvfWFHnsuKMbMmGeDUNsKrLP",
  "key14": "3rTzB1CXqHh34cba6GYSkcCi44oqx98wE4ZgbqsYcVseSSp8WXYBPw2k8ppTk4dDKdV5SfvYzc5Rmx7W28Ah6pTq",
  "key15": "jkL9LovrrwY6A1oQzq1NpFdBZWmPE3st874kAgbZmGywhXUd9hY5wZ5RUJnikZ2gxFZ1BXKznjxrjGnxg3HiW5o",
  "key16": "4mzkABwCWkYi5nT93aG9qyD1nSfDtiyBQmoL1JjByT5SymYGmRFowCJxjWNcj7ZqJyZLmo8epDTVzr6eWqYeCfkh",
  "key17": "2zNuFH51ce4f821Ydjj6xS7om45pjhWFdwBsEpTQusbG7U3Jn44kkZeDKFAuDhSo4EFJwz9WmDV7Lv5yYoExqKC8",
  "key18": "4L5unNw99kz8NEXtVy59LzwNmmbbaAyZMyhoz5V1vXkSr7hRjHruyPV65wkT7nhVo2cWK6K71gijA9gr4iqPFSvA",
  "key19": "4Rm1wC4FYzXMAgoMP84wP6GrdR4KMVHMmZKeEbv4SY5XZrFqkca6ZeyVixtp1fZnALevHb4BXzMN1m7pjCrDcbA3",
  "key20": "2yrUzSGH3NcXKMPrEborn6z5vLaq1eGKFyhk6W7MAA7t6MYrPiHVKyawD3jixm9pmgm3t6NHVo49KuhhPSegnRjr",
  "key21": "5jR3o6h1FSPMP4WfWrpAyH4mpQB6moco3ZTvXwLLSJhKXRokCtfhZj41Ao8zFV4k5VAp7Z4UjN49SozHHb9Ag5iu",
  "key22": "22LohpQikEmeaHdQkTybp3hFLPw9UwSj3C5QNpgGdki1crSR6CvKhTucSeRzrDWAwxUJL4Gc5kHXPaXMWNG3M8bp",
  "key23": "6UArZgpCQQgiQUkDFeMLE6Dtmxyv7Xpib84VvsD2SjW3Y8ozKQSCyT19cwCQee9f49jfu5H2acatrXHfwpqE4B5",
  "key24": "2m3TWhvaNHoaraBDbCL1UbAXvk9GEGjbnnuNacAPHoZ499Ck3gyCeLNxR522VahN244EdEURgqDKHvH958em2NKL",
  "key25": "K2TrpGjk8buEAjVCwiyf4L6qme24guBwHJJNygU7VqMmjX9HL3e13LhcxP2YgpBr2Unv7QW6yjEMM1nDAeQDetm"
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
