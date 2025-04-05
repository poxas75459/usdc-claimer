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
    "62W5eQA3qS9cAQCwxuHhbxM9Hz9Az77wgpMmPtmCoRZuhkV2mimBTDZpqRDwytZXPgi2TEYqjCdyDaiU8tjtQHwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVcZLW23nnfZyaNiiSggByXwe7JQYoq1Vex1HXX4nTe64jCRoQHRndcfMGA9Syw1xd7QPF1LuNNLpPKzzcdVGsB",
  "key1": "65HFRq6hKnEjwq1sq4PZgWbdkCU7dpUx4WavexfTyxm1v2EPmn17GH6qzX2wJpfC9kSB8kT5tztGcsAwRZ6S4QBE",
  "key2": "4EeexScy7DRthqkAPADmFpfc7ynhv7aNNkPf9sdg6Af4ZkwgCTZRUY2mupoVQAj7BtQzJ5TM6GAL9yrcmc5e2EPL",
  "key3": "536xrSJp9huiDF37MN2hamxKXbMWzMaSgQmzotVn3hjRfv9ZRUNdC749rjV9aQwLovW1yB5YasET5T27YK35JKoZ",
  "key4": "eyLcM5CM91zWzgWEbpckq4XnRumFsqJgt3P8kqr22YhxQUwniSezQi41dVVSVK2TcnjvC86eRQc3X5dG7cti755",
  "key5": "53He3FS9w2FEwDSHGbgzoX365g9Cf6D2sAspEPX8nc3BuYpZGzgNqWzzMKBJ67MMoknQ19xH7o7p3XdqnntXHEi",
  "key6": "28hUe12bbBaib89rYHuwcZxF6etE2dEKHkg4xgfYAepSS38rpfzCRecu4E9Ttna1VyoF6vgskJRWLfwjch2LEzG6",
  "key7": "4BBMHWSdvBERCUJrkRg19UuCMxsBk8LEqQcY5zhccpTtLDJfnidAsEHMAj7B7PDc22TCZuqbYdDAeq7Xhiw59Htf",
  "key8": "5fBzaKNwvckajnJWpucSAFE7x5wwHeaRS1A8B9AmZWocjRD89ibeRcLAhcbiVvMs5nBeLbt6szfVNJWBGAe9hapL",
  "key9": "7p5CTYgZRzzW8P8RkViDZGiH3NnkoPeHJuarC6w3GBprE8z7Jn5to5T4qpfxkL9uW1JfiWdUgzYESbF4o6LJz2X",
  "key10": "3kansmJfykYwkJRcHUF8Vn9YMZD2BMoLEvFXKA5BFDAZvXAfZvKSfTEma5wSnN2vLqghJwiTRnW23Q3AfzaHxLQL",
  "key11": "5wd9ZhvDpzhAuJuskSfbL8mKDcS1MmrxVNFWVxJKmdFt6qGWbY9Zcmc6z1cMrQn5fnweDisiKXZYVrxnmrhwFPjn",
  "key12": "voUF4PSJTFFa4zVbZg6YZmNPMVwqH2TjHCXsfZXsey6PE5Ur4xKY49cZXwq2gcsjqD4XQWzGTEMQkRqvBXPF1yC",
  "key13": "5JeJtvmnFQC6fAKaGDVtBYN6WCsS437MvxReKv6yprfk3aSgGtoZrPa9cgZTeAMzk5XHa4ayMSYA2yp8CfskLkue",
  "key14": "2YHFHQ3TT8W6ZZQM3awr96yij4EFanGUrZ44ADLNEPGXd6biFafF9bckGUobyu5ZJPpqrB2WPFp62kLtKPV7Rkdo",
  "key15": "4CvVzaJqx5StvBix6hvn8NqECdU8PU7CEuM5hpxoLVV7HZPCwv8QnMmZqzvp9FK3zW3dtrsukzgQGnw2uK4A42gV",
  "key16": "3QN16dU84qNnsyQ3Hi3ZTKETe3SyopPgqVZUWP5csLd4ncyRDSiLwBmDNWdjaGjkvKUz3VvJiNFfz8gkTh37WvLc",
  "key17": "3PK4Cvt3PtXcv98d9jujK3iKQxdCETxYuZcnGygoUFqsbRY9vmuJBYRSH2qGGU58dJM82Ux73X7swiyyLuCpFGxF",
  "key18": "2Xft4SXhgsAznV54uqdLi9JAXU6bLpUN1kxUMPKfcDsjyNPoEj4xRAkia72YuVK9vwNGch6PDRKQfEda12WdEKVm",
  "key19": "B6TSkLZpghRG5BYccDVZnCocaMxJFy13GErE94y3V1xbvAKuPv56qcC2Coj566uyQPZnLaGGvnpdDQKUXgxSjQe",
  "key20": "3RArvqLKg3tfLvdogRHiajMB7Aw9C2woTCHuzpLCgsfrY9NvQtA67dAd2vfJbJ93QhJuSMLEbFbefo3jHgzWEvrL",
  "key21": "3H2NELXpYT4ZbKxCFo9ZHFCRA4kmqGC7uBGDx6ikMM2APJFr7vH7xCKhorUSy2TBsWLnq8c2wNGB9hwEZ7TT992U",
  "key22": "5nbEHSWV9QqZ3CmiATU3xzWuyoSNvE13fC3q7PYxdb4D6HB4Ti4CGruJ3TyJsLQievRwRtcHFXBAMiHZcMRJnyyd",
  "key23": "CUqNmnyszcjgQpsrwHz2yc8uyydRuGWJva4kLvdRLFGQYnhEwjPFNQGvmiPGWwG6Qbcy9EhuzWeTxgYuBU9a1ov",
  "key24": "4JdQgRgPpV62UTC8RxtDcoBmTJCdwXeAT2ZedKi7bKKAubD9uWmk2ub3qhDmFgF2WSR1WU4HifPcEu2roiuPJsSw",
  "key25": "2DwovVSak2eYxbBTv48289YCxcu8Ggkp12rqqbh8kutKptkm8NeMZdr4xYuezo8RbjKFgp5FTxfBms1NHYFjjMMx",
  "key26": "3ozBrybQDHVd6uHraG3zrZNA5R2aGtwEVrqHLt9adiw4Bip9M1HYjeK6ytSi1iHpJ6GhZnWSmvbYKV2Yn9TncZY5",
  "key27": "5qVbqfDXEBr43aj9SmJdGf6mvUrKZsgT3yM2f6BBoAR5D7EecCwLf3Z4hrCPXiE77rrgUqTkF1ABSS6nGxjxGK6X",
  "key28": "4g2UePdhYyD31tEcupe6gL9gh5q94UuR2asFkav7iADFcyrZ6EKnMCEUv1Pndu6eDC34ASty5eWukLseTKoLFar5",
  "key29": "FH84hbxY8L5CUKdqiHciEr694BBASoamG2tzsLyN1KAjHttN3QaE7bzRFoGLZmXfQUQRkv74bw3wTBTq1jcnxkr",
  "key30": "4k628uHq2UqBB91CvY8y7Zzi8P6efhdBMtJNni1u593BLyY1uPW1RLfhVFXvgfAidsBcteYV8QWRUcykVX8rvZkR",
  "key31": "5hPR211Uh6REhDqHECdS7r9dbC7avJzAz3WiP1A17daU1b2ca4hFP5vMWWMt14bsyagYJyUvd8GAJ1KkzgDDX4D4",
  "key32": "36dd29M1vSgLrYL2WHKMdjuPi2RPNxonQ2F45rPXJDsG7CLduFoPZxL8MCZnkSgE8fYHYpGUc7FNRskcuisviFqe",
  "key33": "2aD5a2QyGUJdTSJp61FEKTgn58GuL6QBB2XPUNwKdJFNm7swiDQp6c8UcRi7ytgx4qJuwaY8xcbGcXwZvna8eYnN",
  "key34": "2sVbuquuEkTZwesLhVDn4mnzrENAJaBPpw9UVDEDYeUxwhF7Dw44Am7un4U5rSbnXBzRQHAKJk7idHp5WfeHpB3z",
  "key35": "43NFv5aBPAa7dRE5kPspGDdAfrYkqWxrZ2tnerHkQ34iqy8VTG51hvCHeC4P8fXrUASLdA7unAA3ghphvRDqS7yz",
  "key36": "21rY3GEdTQXHfogp2LHi7QRk32fth1oi7xnKJgoGiMxaT9q9jFkwCEhhPXa1C1BAYjcGp6pCFGq4Hbdoi48rvHJ6",
  "key37": "62GXcTRr2Hod9GJWERFwoSN5B4tdTZVGg8ZcHRgUK5oiVMJaE4a9BkcLFdm2qtme6KhMLUFbiSvKkqrWrb1cG7DQ",
  "key38": "2YZczdiMje8T5NfEbaMADjt1JzjnK74fRahoK5RMbWMS5BDwYLdqGXKMEdMBuoiAiMUYNwCeuRU174dHESEJLWLD"
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
