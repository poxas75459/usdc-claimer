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
    "5PKfYc9gXgyMXgRYqZ7ecv2MkTE3hEEVXUUp7YwZ1RBUcDM69qttVU63AV2TmqrZLYRrisUYEuHFmXY3csNmBMiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZio7bANQM47KPdAQtbkv42Dqo9hmiNjnSYUYd5tBak6GkMSDjCJ1zRP8oKiJmXAseQ6ipVGE88hfeL7voomj3X",
  "key1": "315hJTCNZWGAAo64FU9UHbGqdSLwk6V8TYuJ94mrfv5otQwLfJpZetx1vkRT44tppjHtbDGpyUgydTSrBa2hasQ9",
  "key2": "3R1RUodFKgM123krgwQtVRktMbUuhZNXZe7pvUe3rnDjuCfcTtEdNdtfYb9Q8mbR4JAvWqv8BAh2ZpGHAX6SGdNV",
  "key3": "4WLD2BiCXoNWXkfzzb9G18QNVsv2n8LBKma5ULAhijX9gkLKhuKw2TA9HtZAtLiMnM1H3KTTzvCDFyzutruD12B3",
  "key4": "4MGwf1vTLFCnNhioUdQW38VLTMF8Jcp1QGwH4GfsWXfPyaaFAGTTtro5P5Ak3sM5TH6ZpgvgVNd9bsPdz9kxJSph",
  "key5": "2hr3BkLQ3zALv9RZHvhVJYuHsYH2GmvZsnUy4xVeTmB1V5nArpggfCkaGS2aif3MKyoFqnqMjJg54PN1fxrgm2yW",
  "key6": "5svjfEZgkxi3QarfvruMWMQxxz9zXqbDDVZKhencMntwR38Dvto1cwqnhf6SL6cpNqGwq9kDpuHAroHVKbnsHUHR",
  "key7": "GWXDqYcRMVYDdfA8bhZ39h9NbxwJaKGEnjR7qqrTieEL35FtsFMVxG4CnRQVnL8d5juSftPg7oecb4j29yzTzy4",
  "key8": "4tHb9ca3B35NGsGdMnHHRVzeQQjPHhtU9JeBiDmqqWSFRY6yKjEUKDgFdBTJZ7UDmY4nHKg44nCqn4zw3qzTzUBG",
  "key9": "5Duw1inAntpaPCb1Qsceim6guK4tGdWnMZioP1H7HJwermkEfTjNcF2b9VbjEb3KpbtjhvNf9H7e6CHX9UnGZczq",
  "key10": "5bynQwW6UhouZNyPigNPoLb3TpzqF6m6X5xzd7cSatLxv4C8YVzDjg6KiADVmLvGT4TTMqueY6ZDuauKEWV6rvNV",
  "key11": "5VN72wFSoFL8BZxGmHeeqFVRz6ZSJuvDVS3oFUnxNTFsGGvmnXUg7zKJ7P5vq3mgYHc5Y3j3FPjn8MBFNR2PehQm",
  "key12": "pUpXo1xDLgxmFBJsZHwktneVcaWsgNM4MzqF5EFsnSNndpZMkCChRXYLUgSLBMD7bwg1SB7apsmJ4A87SixDh3j",
  "key13": "3j3ZkhjFPWPhqCWDd7k1vzFb1YzjV6jZYn91ygvoY4rm7zJXZpquknhcKc4DSMQUnY1QXg7ARuUF73L9Ym4AcrM3",
  "key14": "5G8jAx7WTjkteHuUcnAYw8BqY4NZKjQiSpUBDHnWf1v4kr9HSctniPjDf83tRxRCLqHda55kbuwSbbgdA7Jzfvoh",
  "key15": "5DKTCz1tqyK9Ls7W3VjsMyvuHEsQUJbMh4GJhAXxHWdz7XAPwepMmuwDA5ALTCB5JvRgAHk3Hi5Kir8mh2Sqg3Eb",
  "key16": "32hXiidhX927h6WLuotBYA6C1wB9cq1Ao6BJD48QHfejANgjje4oZqc5rf1UVYEMBhp4bw3vgRUP86eAeCK1zbGN",
  "key17": "4tbZdvvRLwyoV9Md5VwCmad4Pyo3jhwKquDu9VoZoZ8irrZNbZz9W32r7JtSz3FCNpiCMBp34HiUevMaf2AEY3wT",
  "key18": "2EnpqLaSJ3QPVxGDjJwKW9E2AFub7rRkMggDQS5nriJm1Ly3PFesReQN5dVhuAEmT3Ya4yYY8AHTFoPm5KmryYJr",
  "key19": "5fNrEjfufs346sZfB3wjXspaKLBpnZcbNnSYiLtf9pZzSHcjmrnfSaFd4vwsksdMhQ2NdcHSRAPwTE5T8BhMmUTP",
  "key20": "4W8U3viWx1iFFpFkzbZwgSAqzTLE8UVEvQDa18TLb2EBNENzL83zgXNFHjKbLDBs75dkNsj61znV6FyA8XfsidSz",
  "key21": "8rPKHPqXX8uJms95w2yiRva4rh4jTVZtc9P6wiFRfQRue32pHf878L4g5bxGbSRcwza4cbxnFttedQNawqfcXRX",
  "key22": "5j5BbaCx1NzYR8mSMaNZFHUe3bVj2ocSNdKUKAbNsw1Tx2VKUrUH6zqv4Wt7yajZ7eoXMTWGrzcHcqEzSCBTj384",
  "key23": "sgYzijSSD3BTWsrcaq3TjAgHVQoERCKyqBPCqKWj3dgjFcREfWCfZ6Nsir2pVGDDksPhBjvbvzncBqiMD2FRYHi",
  "key24": "28ugdGUgyS4bkjHePCLqzPx9vDc7qyHYeo9YMwF671DmJWsnmpRnL3hTEEFDxyCA9UjRsKk8heuPeCJAPNcARWX2",
  "key25": "21q2LgtYATLnXh8GdXHJuhKLpyyYJkbksnojUeKxiKfYNmreFDotQ2YLp59TK946iTU3UWkuNPfgCG4chKXuozKu",
  "key26": "51mPsjqgAoKRzS9DrL4sy24t7eCWhMKNFSbRhiX8ibv8rAxEXRGhambXyPTNwXsAHmbzUMe1mFcvUbuqFNsSpZTX",
  "key27": "DD54T3E3MRYjFgcMA8B8PWSJV5uzkiDJKfNQjZDgU1FV4iCqXQ7DsdPDKBvEwb5JgXi8m1Kh7aGUr4uGi3bZVSj",
  "key28": "2SvPehxui4R3fGEUos1hpuVBfBH1qQViQFDAeM6fUEXA2MFNpDWSD1YfsWgy6G1EZtGX85Ma41o59auKEgo1KBVX",
  "key29": "3KmwkeEjVhY9345VancFhjU9nbha626fyspSLGhe2hxqo9YTBQRdjFLvkPiqRCgiSNj8Koiykvu39ktc33QA8Uzz",
  "key30": "5p9N8BTH5PXQPNaaJDyuq9UojFyjrgFJPKjUaCps7k6TGxwprhVYaXPQvxu5FyGmqCHXZmcXh6Mn5zxULkvhXX5V",
  "key31": "3LUCx9fFqYXVPT8gnjFus7MeirX46HG977TrTfPcKdC8jF7y86RJCUD73pT3BUvQRp6AiRcLKtX9gvFPEevhCzGJ",
  "key32": "5qa8Zk4t5Cq2AxVSdsC6DYTkwDquVCRw4zSMsTJ2erWcsKGHEqpqpnViJGtzxyDHHxR4tK5cjJ11BwHZoo7DW1PQ"
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
