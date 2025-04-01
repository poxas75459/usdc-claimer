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
    "3u8fb193W82NRG7xGTgu5fBVXaZrtAziffFmUT3EDU1FM3M6mXWH24FSJ8SXy4zUG21Cbinv3WLeYW1ZWY8NePnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23JyoLycmpu1WoAXBBWKfvhMYES4hHuEVkXcmDid5WntChrAxwo2kmTn67a2pZY8fczciAzr9ygEzHjPeiDK5aCf",
  "key1": "39bejqUKa1tw86TMpUxcvJRQ2yLGnJJVKM5YZq4xHUQgDTrSf68GmXJCPozo9yLYHvjKn4c5KxbeL4JEQ2xZ6Rj2",
  "key2": "YNdcECGr4yY7pRCp9hgi853BoNTBYGMweughsveY5YbAM4yARzGRtMUGhAtzPd7K1TDQ9dwtXBqLtUz5UhoXAAp",
  "key3": "4EpTvuLBNs9jntRoi6rxrbB3MbSAKEwKKAcVc8ahKbuVTMM2d4kJfyww8yAZYcZB414De9uwBnk1cC7TsijVEdNT",
  "key4": "xo5wLZ37tuvaQ1n73zSYemnq3x3C8tZjGToitrYX4wWYGN3LZgcEPeDhgHYvms7DDP67JUjQr7N94WFBUPWQcbB",
  "key5": "2FgJpXndYYgQpLHfAjDADovDPE46vGrxtBw7QDkgXZAMGhMcohXbz5x4C3Ahe6DQzHAQzQBBMUxNZENcqspD2xyo",
  "key6": "4n9KSXutivAMZkDPngade1JGhVBTWd19MsJjxeiTicEa775uP77Aij4nE4BVQmcsubbVbXnSKgEPUHa6BiP18v4t",
  "key7": "54WsqF3GCgBRfRGXV9bFDJQwST1tFyJcFJa8uEfDSpvaeW1RuxmrRNEiVmofG7w6SPwSbfQjMChm9VJAdX3ytLMa",
  "key8": "2x5JTH1G3JWYsXhAVDRkghjU7CD8vfCysBoZ7144pwKTvPTAjN4gZcRxx9UjVAE5rvUM2zW6L6ZtMCynThwq6pR7",
  "key9": "zptTHN7HenDhhmohAdW6qGENGFnMaeEYNfKjW5kskHmUQpY2ZsPL48p5pTomU3y9ymfLdCXCobhYi2s85HHCQZd",
  "key10": "398xDPYmPsDVN65mMzjdjMgzRagSbpdZcdxeyMzfpvo9w1hYkeE7n8sJ3QsHoDK4kXKNod6UQb6XivgQkoxMD4FS",
  "key11": "375E2xUEUWdoeydUnPczdP8RKQAERYPDETxiNctBa3oA5vt37biphzEa8HmTpSFzngxmezhRip5PTUs7Y7M3df55",
  "key12": "kKhGTPHqw4dtuNGqf2uYQqArHCTFs583ebfmM76v99uwCiAafo4L3LCjGeEdCC4K39EWBBYpQurm2L8nZHUfqjG",
  "key13": "ScmWZhhAtJQniyuftaERY5nsiVo7bpMK1MH9s3jj24MvGEMQ95rRZ7orcMJLm4zXM7Cv3FMM5B5WnTbigYGP3aE",
  "key14": "3hqyZT2WFoXbw1ucvNzhffTYyHm2ddyK9yAeSaduTvfaoDJiCjteiC582cfysnLRtWzGzSaLtf2jkejMko2ZQB4L",
  "key15": "4fXbzfatxe9uqdV5pRZJqpTzJuv5ssNbb95MwJ4b3kMFmni9dmkg9VDZ7yopMUEWRzNWT8ECfZ9s1TbY3f46sFZ8",
  "key16": "3UVLUGnKGe5cKrRy7zthRnwTJAvYP29LTgDmG4qtaoBGH6CQgBwjDyDABcp8mAtqy4pmmTwjeTiArhMp1pJJibpj",
  "key17": "4vKj53f5FAJBZpBqDicS8SKfefXjibrG6UKFsiFmPKNcLZZYrwhkYaZJMAZFkCUa77HscW2weAX6cbfySXwHz1zk",
  "key18": "4R3xTJURHkLMjPRNjz6M9tCUpSrX6dsTU2m2zrVyAY4eEZWtXeqNVe1qownhutXof3QFJGAjDSTn57rJomEVvteM",
  "key19": "5LGZbfazr5gu7zoc8MXzDpcxEsS26e3NbtzZv11BRUYQQBm63eSvcH4j3dKe7VKMLFdyXQQbfwbek4NNsbEccu9c",
  "key20": "3AtzpCx5XgfNwKHtwE23ZzyZPE3t7BzJ7X3jQtxyx6vPtz6YZNb43NVkaqSVP7QWNGvLdXTYMzbcSx9oYXxpkrsK",
  "key21": "3tvKV6ZPqA6dWm4bcZiXx3ewWd39FNNWYNLud3phToviYwL3Tfq7ZBm7ov78JM44om9L7qnB2nARvcSbR2umQfkB",
  "key22": "3gU71XtmB1G8sdQQPbLi4YTFdVevkoRSukm1ARH6dsDMPW6sM6Q9zGRWtUrUxpmwVNueEcoUFVGJb7JC8Q1SdTop",
  "key23": "5ARzvCUfm4dqPHdHRQ5SvYkbWgwg94zhgR7YPNbMwFkKTJiy5eyv63MWtbGmPpgZ5ZqSx33yRTDLYfA3L8RU9cqr",
  "key24": "5C63BWr1E2Ryrbgg7AN98H2qaJ5s2fcug9GQtGpa5ozMjj4mLQgXqYDWDdsZUHpWSYKNe6UrHNqVGA4aqoVti9h7",
  "key25": "CGkY3523pu55MUt7HHMTWrrpPrCDEANxczdsEjBjxGCAgf95qBUbiEZKUuqz5TTRNHajndWKiKyFL8C5er3kmp1",
  "key26": "22S12PVQA4HDS4By77SND8vdPbNsdEaj5ZGRcaNHQTuG5zTSUgv7aN9R5i3pdfVjQjzWJhCFkmE4ZepbNxrszteQ",
  "key27": "2rtppCSWMBU3ndnJvaQVhJj7GmqsXMoFi6Es1hyuhRPAEaWBRUHQ2B2ikWnYzxyoXfz7sJCYuSsGBPq656VdHhBK",
  "key28": "3Aqj2AkKpkrVBjxjkpQuGvjyspxz1efxqH3bXvLwcPWDCHwMFmxuPSoibRQPPEc3jzfZ2AavE98Hu9uHH3ht6gfH",
  "key29": "4dD5rCoP3889y1gyWQpQsLhfZVwzsL9JbqSQ5ruUiE1aj3rjFMANXJ7nkeUpHWcenfpUych8KAfwk9VAtwyuYYs2",
  "key30": "5Y8jxbCZCVKJ33tcnW1nUAXAYzxYw5b37vHaL9bD42KGdymQyXyKcwLznHN1ou1sGouKmhDUp8UAHZtJwsC5yBAA",
  "key31": "2fRiqbbjUF7aqKKSmrARQnVRrd5ZUcfye4x94kvppL5HvVyZFqcUsnfigfZ287uWBvoJHJG9GPeipMbfFH8nqk8q",
  "key32": "5iAbFxTDKn7z8g4uDqAy12mbYMG2RLBqrBG4JCrmAruih3ZdMXGMLMwWqqPGGV3Bh17mJhwfnRwH9d9kfEHeSogX",
  "key33": "ruJ1Xbwvt9UmGjJXCXr4iby4xuTJCfDWr2Qq7caeEEZvZ7DEwB356vpJRbL6QLnWLdnZTFtauKXu98XwGNRDBdV",
  "key34": "5JhkCMEknNDKjvGtrWg7VzgvrP7uLfSVknqdW2v8mHbdmcuhdnrbLJ8AHvRQiPWzZQ74PdAYge6TF2xon4sPjS2A",
  "key35": "stUiBieQUnFAV5uRaaJLJLt5ZsqEQZaSSjacrQEjcaBPrpAPenM56CYoVFabzWpczwVEyqT7FaDx8Ph3z1ibDED",
  "key36": "2tMpFAMjWbg1CQbb4pZ3ehRfiLz5XbSEt3j7qrD7TSeQc1uPTZfgiAHi4cz3fUYPg1MFbqN88Z2nfcq8suMZdLe8",
  "key37": "2ZYBWt1go72psm3dGQZxsBRcvtpqwJNkpyNvxDAbzhkpBGu6BeJPpHQxLrVRdiyRrja85wsf1bepMVtMCFcWwFU",
  "key38": "4BuoeTSH2pAT7xHR7hBcvgVyNibZ7FcEzqiWwKSTSKSyZ5NirQfw5ZPhhg817m7cMa6772bnfYnj1FuEHozQVzv2"
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
