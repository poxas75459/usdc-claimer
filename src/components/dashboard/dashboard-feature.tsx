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
    "3A5AeRNUyLmmL7DLrZPDXs1i9VaFXADLxDEopJwnRcW7TmkxWphuSTV2BXazq3TQRWuQdhVMWaTmdKo1HJSXD2WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geYTK9km5LceYuLWk19eRS48EAv92XkxH2YcC5gtgiF8ubEgcSTQwPEuovx4hV68sHHv4WhXBDsEDhqV1SXTBAC",
  "key1": "31oD1t2MUNZCrba5gYxZW6rhSNT9JRmgCDFnbi6jvNHbPSzSoB4d3GcYKPjtFS8HmLSoCm6FqvXieKeTsMKqvdS1",
  "key2": "3x2URpVTsavC4WFkhey5oSzFJ1pG5TvodoBM5zkd4k8ZXApE54UNTcBW1gNUtsYSs9e7jUZkVwx2cT8zfR8cuWKo",
  "key3": "3MPBjKwfDQSR7GTUrze1EJbQq3dQxhi2qdn1F1GRgbKxsuCwsiWyGwXoVDXNvqcdK19uxHqmK91bU3u2Y87yJAdo",
  "key4": "GyAFgsdZCWfqjxkfyTiYsB8JqunXWWiQDMwNvAcGLHDW4sAWjGkFQMbKQq8C3GRxFnLkom3kdAgBKiamNjfvyth",
  "key5": "27YcuGZrsfkgku1KgDmBHFFfgPUjLSjC9E2DHDXGHUXQnKYTdR7RRL5DZrvqjEr1nM4C3ndcDW6gCZGbC7qcSYLA",
  "key6": "4njzqwM1ihDj1hNHPqUC3TYEvPJTT3m4EL9rsDn9PpWZzpMZVKW2s7mQFvCXQRgSKE984gYCLiTd2eipZfrqtJaB",
  "key7": "rfuq3Bkqe1Pqneop1CPJL217BitEzZhgAZmcYPphr2gHPHRnDb1GutAm7dtDTvnQ9p7gBukdJXr4xmsQGE434gC",
  "key8": "4gd6ob5CrJji2W3UrsNpbkNPFyZ9q86SNa2A5wFGtVy9tXQDyBHMTS5HVBADNp6daMU86PjkhCJaBueYxiRjAe6X",
  "key9": "4S4b9X4stVM3qN22TZfSyaE7a7HPWdBc5hUwDgzWkPbwr78hNgTjEgqQGo5xvqnGa9f6nXZBnG3JX5DdGZLeP5hS",
  "key10": "JeVUX4Lrf74HVomcFEH5DoMcTyTzWox9jPBCaZG6h5YMdAahFdKNuiBh9kVoaVC1ySP7nm4kTudRabzwyHtgDWD",
  "key11": "2A5BPgXSokztqvwPKM9eoKtLh6CFCkcUyo4XWziyeGqeM7jMJgRETcdYJBXKpDsf1pxu31V8tnhY1XGKkdnSUdWo",
  "key12": "4KJEfo8VtXNaXuxEUY6Z72KkXiiqZAYnG1o7HNmcgJVyvuE2YG7RCjxYkbbcNpHqGeco9awrxKUabvNTeKVeYs8F",
  "key13": "22Pi52MjzzFqqVdTvQrebUtL5w9YwqydAoKnASiNdh4wFeW4XuZ9mcmnLwKAVF1WmM72DqfwXUSD6XnN9qXDRYM2",
  "key14": "5ox1Wt8diSTtW14yqJVi27rDRa5GAyW4TDpLdve2LwLL2aTwyBEnv9xen5QLH5bzkmDFbAckmiGnSzgykyTptD9D",
  "key15": "4R6XGmctgJaCFyuZrqteFTqAJQsr6G6htfeRtGxqE27qqD32Sa5Df5GioMp5puas738bwrDcz6PQnmv21pSoFFHq",
  "key16": "8z9fNL6GZHgH2ivgJKF1bGWxCEA3Yy3RNAtMaSj72WdNp52uP5b1qamj9RS1QCkzD5i4KmkEHUAYUz9caHViwEz",
  "key17": "5XHpPMWKHpUtB92XwVN8KP6ofWxY7egJRVJ2tajCChVMtdSnUcyFZPZ4yyLYbkayaNtmpK6AwZFiyQ4kHSWDnjtT",
  "key18": "54nMDTzBQBoGVqWYBNv7oVh6ezYcdpgCKt12gSUxusbWseX63y3MFfqxYYkuZ652orEBAkJc61NQHv9zsbLxF4XM",
  "key19": "24y7Tk5HoSQuoPipTFHYffQJNW9J5ekMXnTMd3LtQu1MLSbgiZmM5HuRfLEUvXTz4BWAC2dQDpLweN6ePShPxDhr",
  "key20": "2XWQmX5fPxGv8RQUhPJg3RNQ5HYPwGvwFK54SKTLKwvcqcTfozp1FMUsBSJ6Q6hBYMdLBjhrqGKCrxzAJns4BFvx",
  "key21": "23anndRziatVLBB25XHva3HvvQwanizLAL3KGb7ne93YoDZBMCYn6KrRW3StNdX3oxRe3SwBVU5RxiuPA8UW18Jc",
  "key22": "213Mnb4Ys3ovEpLzXjPyk5oafxESWh2kRBZ512X2WK6UKbqwZDvEJqYttJQFd4BY8FoY1DzDqXp2agApGSfX3GTn",
  "key23": "zZeV8Qpm4KYxWYewDedFjTVUYaoNxcapGo2o8dPXFv83is5FLt2MfnUAKdNmmU9XdFZBTBmGhBmgzetstV4qm3k",
  "key24": "5QZ25AEF2w2YTaKYqWfQCt62Hc44q7pK79ZRu7NVNZ9x6RNJJXwsWdStgyj4gEkeDisn4aTM65bU6VameWhExKun",
  "key25": "2m5NMLhJxhJKBjfi8gegtrkrkMHFzuzBkxNUoUYkicUYrmdgi8w5ugtpb9c6nfpUNxUgvKByMq4oNyMnC9BH1zeD",
  "key26": "j7ZU4jnBzXUfecwWrz9PzjvZVxi8uWiQuk8GZAyQAUY15Sa28KDQm2sX7uNtTUaniCMy8qHpv73HMv6u5JBUPSv",
  "key27": "614Pn8AvBeHJaJNHnSGt8tUirTfDxpyaeU558mPQ26emKV1NnWUfQZcVCWAXT94Z5k73uJoUhcyrV6ZfuQF4SXDe",
  "key28": "5aaLT6TRMVoikKTm4FNZfUp3mmzcbjbNkEbDoMtet7aBfQAUAQqowmSoHCyZueS1VwuRQhBtSQYFy2YHEeEJCAVy",
  "key29": "BYwFfVCwYnNeixG5JuWGndiRBQPDRg7te3D6Fj1K1TVqcswYzrTAfjWKg2zeFYGXbTST5YMNcqyT7hvEvitJ3u3",
  "key30": "5bnGXjYYg5FNk55mkkWo64QH8KiZkHeUDBWrMHhG9454E1EArnKptoa2uhTdYycCd3PsY5aiAVyL8CPhUv75XbKv"
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
