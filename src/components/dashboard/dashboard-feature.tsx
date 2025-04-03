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
    "reTjwGz21TTfnuyuX4TM7tfWr5t7LczkD5ZXqMP3sxfpJYU7oJVNjFrmcAnG2P7sPMRkhomveLoMHTmh9ZxfGDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2mBZBf62SYnXt6aaTjtL7Y9ybFWH8F59GWaCZaxYtBx5oELYiXAQSet5GqLxkqxUcX6LMMKxs6GohQh5t9izgM",
  "key1": "3zaHuitLZZQUWGMeEVimUZu9CgBEnWcEB1skcetfJR9XR2uGpuBgReWdsjMz7XQ1gktvE5CgCYw4but7oUz5JjnX",
  "key2": "hfdMw4EMecNxBxMsS3FCLgUc24fn3pTuCgcWSNRE4tA4vZcM4XeJ9gsEo3NSdHiasYc77uAe5GwZykRmSdqJxbA",
  "key3": "3qVcRCrNo4E6dRBddqiCizwMjWmjcd6DPM1vpKHm4Ydo4zSQDfjGzytwmvd4enoUAyd9YnmMQHpPnRjymQWaKSiC",
  "key4": "4zTBZJ61m3z4PmfmkePtquSEss76yz6zA1MtxTVw66yhDQ45ibgCy4qCSPjxTvknKyJ26LMf4TGVNBu9BaEKG8D4",
  "key5": "2JsGX2FZCooqB8ZART5hn2kNyYsJAbSKqoWvR3ATarQLR6dLK6Snay7GoL9ZrRnVEJR9xfZotUuqJ5JD85wVP1in",
  "key6": "61otgZaxJVAb3JXwGzmBcpgvjyL9QRsL3tTBqbeDkhizBicXbsmK3oQPWrfqMgMaTyKwhqu7AfqF54ZPSgnMCSeb",
  "key7": "jLVCid7cWojQZd5ADgvc9Z821BedExDxrAfaC2uW9ZUbPvenTGaVg91fbDq1u8noPu1gqnVzJnYJZ5P6uP2ExTR",
  "key8": "5Uz6Z5dunw1TfoJDqst2m1LtWUQdJc6uJLpU6QoR92HFcgoMq31mUiUhWyC76NDebNXdebn9DXuK2FUomh8B2V5s",
  "key9": "uSNUMrxkcgXWgkKwPmo2WE4BypgQSLzzq8hJ7Vg9BKqUrsVmHGFchxUZ8BPswTAMuznyL3kr1NncxwSgzsPUnsu",
  "key10": "2sbGh3mMVCSidMRKkKAKdpm5TDiEQ2ohgpEdafULc17SetDQBD8FZrAffoJ4dnkaw7bse6HtxcpvXhQNypTWpz4",
  "key11": "DhzMfrT9krmFGp5idqcNPa26BVZhdTPJkxWsv9aD8vss9cvCByTfGDmbuEj9hhLXkUEAeme4nFSCwduQqAkhJKp",
  "key12": "2PFndmd9kD4NZENdwvAJXk97bdTv8bEbMoRV6weZhb259pXQftxTh4FLg6ujsMxYPtLUqkrpZ9fVWapM3g2feTDV",
  "key13": "4ZfdJDVFFfxHJWC33F4eJg2yHULNZJaAEaneVwzcrsJk2zK4E6PrwujuBzikpYk7yXyDUHmJJZEp1bjrpmd7EuMG",
  "key14": "5C3HfsgKgj6GCouhNwSwPmY5k9vveXB6zqeURPfCbCCb4CCJr9KZehqw8QcAQJNEUkzhtyxPNeqdXXJ91dxs7Z8F",
  "key15": "2qGBsmZFbAWWTGD3ZqZrCo1moo3imtXRmZmoi6HKNhfqxhTLX5UNLfSt93ipqQaTfb9pCi2qH2YiPJq3jwZw5cR4",
  "key16": "2npYbJQ24ZfvcsH4h2BZNhX9zf7U4usKCNttUhmsC3DoFizjd42cp9wLyPAueJdisY2hP1LWxx7PmPycXddNLxgt",
  "key17": "4tpCP7Ehp6n8SPH3SVS3y3bA5FnRnbqhoAeWAoHzN5ggpTkCEH6fc3hyTmEi1RzriSvnJVkv9uFDLE9uW735TtxW",
  "key18": "4CX9yfzTyQkFZ575Ju6sZ1xSqZT5qthaUJ6SMXKAQVSYMXbRt7scN6JRumVBQLdkSB6sQ8Lz412RkKK7dz2KNsSo",
  "key19": "YuwGHZgmVXqzPaFnYKjzzkXb88v2riV2rDCaA4NVPn6NK2odNiXeRwtx2z6gshxuezVcBDPmyEzL6hVrJ9dVpoc",
  "key20": "5y8QtsSGGMZrW8CHmiRW3febt81MWo6qZNQEer6Nc9GzrwmEm5AhmUgTjdqHaeahhkb2fnLp5vJZP7iTFcEhfeZU",
  "key21": "2n2KVRquqfFGeFYPn7NDHWPWtbeNa2xdeHRypx1yhN41ifkBALs7euiU53pCtsbSC8BMt2JhR1ihbSsKe8PTRXmG",
  "key22": "2LhwVMk6PrVpmAQTC5BefUMXWsCx9sigroUhMJQ4bJHpnLtuTuC8uwgwYua7i5E6vx1GGuRke9GGEHumhvB5kqb6",
  "key23": "2myejbDETHVYCnTjdcH93NoZNLAtSY7yWM43eyNpgPGqfwfxUaqgAQRd1dTzRAxJprMYdeN8FKw1hNZxaZzMjjtP",
  "key24": "2bw2EiaaHsj4ypVuXdgAkx2YsjjrSpyL2sjKhs6kMSztdJLX9J15YHH7m2pueJoKVFZ5mMEMsc5DTfTMSmFESKCB",
  "key25": "5JrL9SzW331z7Tzi85wpjsL4VRPdTkLtVqj2CfVMzYbnuewHu2uXB7CUdrSEDSEqSTFdq8mrNKbNQUruqtYYBCs5",
  "key26": "64uwUDKJKduBTtTcxu6CDYxgY3QfwDUhyprytk6Hgy7qwb5BWVgaymMWWk7GuRmD3rEzg1iJV8cpL7khgEnnoAfV",
  "key27": "4T7wRxGh354NsiaFpmoHUWTLwhP1JdKAcNpEht8HBGFWfqet27m7audHoTd3YUdMmc8H66VLDJz2BUgTH4zbdgG8",
  "key28": "2EA6b55iWQU3qFvenmZxHbkpJ2q7amAx4D2Y3kwa1Unqv73KzXaYrsXhDnZoByYGcFjwMsrSNeenDEZ6bfQPKH8u",
  "key29": "2Wsd8CyejMNdyJ3ZYhyrgHhwMnomdWaivdx8HzvubbkXwZE39pXLbbRm3NrBGA5SqVcLQY4gQSowYP53mR2gFj4B",
  "key30": "5i57aoygVsQn7b8wMrZNNAiDpkverYLbdSzYWatWMu2M8UiTGGPLeMPFmqSAsTMYmttD1zC2hHaer5z6uc8J5Ccr",
  "key31": "2oiPsfSis21MP4MNbsTDZDWTbL9ipXu92JQpw7L8bdxhWH18zm4mrtfUXKdyxKBmnN9r8mfgSVbeezi1jtXa7Svn",
  "key32": "3aFVK5abBWeTUL7H75xKo8SSk87cAPugWHkH6kn92nd6BPu6NvyW7Hiz6E6tH9dCWspHnkBfVvxWgJWWK2gUvHLD",
  "key33": "43fhV1pJ4wYCbX4A6icjxUnwzWevBBLpzp6V3RYd6Ng6V2XUeuhqeUmvEDBVhV9uttsDE8AdQ4FYWoJCLZMwavi8",
  "key34": "3A9uURta6EwTKW7rDY1BgpFt9EoAGCojtZqfZetA8eSv7nCojRhnuGXW1JnPstLSp6RMy6PqEvgDjVKhmUe7SFfV",
  "key35": "4CshdvTU8PBbyRS2kLMw4DcoKt4Wr3rALsJurHysAaxDedWX6ZLKV39ka9vHWT8Nz2HcTBmgWD8ELgBdGGXvGdeZ",
  "key36": "3fxShVT7RhGR4vGmVzFXetBnRKL8MfQ7y9gBjeVSMGbB8wK2AMhR5YZfucDeuPe1hF5Xzsu3r1AjBxsyAdY1XRPt"
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
