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
    "y6aS2zcNemx7i3ViKGs4aeNXDRdzC41CGcZyiFkq7wFAw2ps4zcXJNNWEW3QJkGcezyp41NVgBuGNnHBEyHYcBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gTpgjFvHbRURQYudS17pX6Gpnij7MLk7HL2K5UN4BjyYEuzx88cf7GY55nKK11yB8VUamYLhE6ob1YFcE3g1Dng",
  "key1": "43cefY1wfUbkemx1eDUr2n9NzXFBBEDfuaazpGMeB2AY73sCKGPG3MJzhqQpraLn7m6z4KZm3fsj9mzspK4QVEk9",
  "key2": "jckSEor1HHJX8KjuDXQuTnqYv5naD6WXoXsNN4Y4RP8qgnELv7mBsaM2o8KQtSbXDxR5MDDu685e56Lbh4YNxv5",
  "key3": "5DWcjCJzHuU3MqymjxmRSQb2xj4Ua9vV6LXdVW3hUH522DBePtAywYk5CkseAzNJgQPX6Dynsf573coZQoAvpEeJ",
  "key4": "3nzYw18TM6PwfNJmqo6rvZbMdDEzssyQER5376qw4tBnDgXF7vKq3uDRM7SoWcmymheC7jN1vUksGZxtntfXiENX",
  "key5": "ifpLhsvVyiSdLoxCHXeeDuHE87yxxBSZgDdUHZxiRU6MTXgMpfD5smUZMTTQ8tuPnotAjC691CuFNJ71CVYjrxL",
  "key6": "59hm7XJvVdAMn6h43UQcR5AqWXMD95NNpdQRegvnPrJEtyL5UU5aoB1qvKcy8oXHTRt9GnTxBwEWREAirSarjWc9",
  "key7": "f9YTqv6LEhoeiCSuDof3H5odrct4vNyKp57xvDG3bdC6Cbty27E3puJ2xV4cMXdXP4BXomp13pobugYPQ5x2NUZ",
  "key8": "5NfRYSJBGWyNehUmgN81nykV9UcfhAGAsPFNyMHy1pm6AC7EjmQXj2wCXvey6Gk6kEFPniL85nSxDCvsBpYSvT9P",
  "key9": "EqSwgWfwx61H1CvoQB3PetWmpiJ6neoT6FhJAQcEnPWphnsbw54b6N6T6N1U8pftjtaJzVYgFjMU3JSmbSZJpYt",
  "key10": "2xAoU8GELoY5a8Bi9XcmD5Z8tKL6oVjzmTzXeir66LFuBd1BP5PsY6yYfCh4iNrdnPxKvfLafoTXGhsLfgZfCHSE",
  "key11": "4PVg5h5YMh34bBUUHwDNG7BGiBdFUxGBdKrSvXzLaLB8vsUCt9t31vK6zCT6j59Dw8oqSWaqXvF9Ft4EfPVojDHj",
  "key12": "27VXmd58WBomn7b7QFiKxfvrdSydsPWdEmhRXFdzJpPXLgu3KocEGxdgQTsHMXDA2LuJb7gimb33CE5tdGSsRhvJ",
  "key13": "5FfH7DEHQWhcV9HiR1J7sEB9gUMNBVLE7huNGGyU7DqXEsZbpvaWS3fLzcKbjzZrGavXTLAXd3ZkQoXZfrdyYZRZ",
  "key14": "5ZyPCpM6NSZfQqS3PFWKTvX1bDbbNtmiFucTtB35TZygX7cDz645RjMnxbyBFr4nWNKhBp4TQZxWPkoyT55qQhS6",
  "key15": "3QYfETAVhWN49qHP4o9Z4oy7qzF1gxAHrUFEaCAF57FgoN9yZ2mMgNGvbg6KfimyiPfMG3EPWAtsqkLvu7BNeK3",
  "key16": "Mu5wh1jrtwrsv5tif2mmUxLko4mCWB6QtPAKaxmqbjVU9htnFQqyyFdkDZZuHa9Jm8N1qyFGJBX6GHHNKuJGJNm",
  "key17": "3W5rXvHop5N4s574LULbGrD4dKDjrrftt54imQd2HXYKfonxyh8NsU7M5xsofeT2hR5yftBkGntMCJ1r9Ro7i3S6",
  "key18": "V3qBAxkT9FZCAF7Qffrbsd9c3EtjGHkQoVKexBa5d4ZYLReZ9up7NN35EgF2VgPUfybCWrQSZ3TQwo6nLCqbPic",
  "key19": "4mXgFdtfhMm8YMbFbEXXWG8kvwP3vJzKHuGpa3vPcAJYBFEHg3ZeWFunJQgVwCwEU4ssiyJgcGJJFjR33c2LTaZ8",
  "key20": "2aTPLgtLSZJ6gknJY1cyZNiK6z3FrSDCQ7KPjHQkTR2KUgTKTqYDhR8ds7xW36CdUtQd4UnVaM2vuHH9cuCdxALk",
  "key21": "t3kjgGnudQvjz5rCzarUfQHogPDRMHFDPStHPE1zKCrw1yfzUhSJ8pRG3Huv37ySPj25K7nQSPZ9FR5QcitLdYb",
  "key22": "5xXdBENS3wjybhZvmxj2AzU3bdtXvgtYScHwK9LixeHots78mHFBbhZUnRB63xKHEDZj48AoBfZF7oWh5MnsHR9i",
  "key23": "62eizb28632NcgcXkCvCNAmFbe6Lw7Ta1bNE6DaiGTj44A6fhQnH1QY3WWQP1evj6e14hdRpK9aRFW58rEg13NCi",
  "key24": "4cWvJMpgA61JpJcX9oimna1tsAPDFR1rwBBZVRMaMSAdyMzS5RWu8sZcwj2LRFp9wxZG54jqsbomi3JyJnnzr3Te",
  "key25": "3ZsYMczF34pHBwc2XNapcdYi8rNbzzcsLQNWGbvWKJeswxDwDyBMUMoeS5TEBpthwQ465kq39VP6EY2kw8Q4XqBW",
  "key26": "2rahLhCBkoX4BZBGjRSTg9U8xbjsmGmbNhzAvhUZ2KkvXm68RFnwwGsAyEq7miHGiwKynkJ3ZBG4erVMsbuSd1uX",
  "key27": "4MFYo735DWgjq7AA1JUbyC4zqRkfcFUSKRLqgqV2rzETouCh7vKb3bFFvFifMjQEcgKJDExxnmoxxPzqikZdjDWA",
  "key28": "iZ25aQWxViFuBdo49P8J98VBTMLKcVTHF7GxehVQLy5uzdjRdS7DxRAyoyVhHD4Kd58kDaouELi7WXTvswi2UCa",
  "key29": "5BTbMqFnwXUYoRv1rGNjNV6JhUdmdQW4YGEdYqwPfQMC76k9TNwf5sMGYEqV5gqZ7f7uZTJ99y8jwPe7bwcXTZAp",
  "key30": "3DpEgXkryWNqmE1ReNiUQe8W8bUpsTo4yYJ3KcibgrrjYc8MAs1ZTLiDGDV8oBiXYoJYazUH8TJVKyQARzNC5iSi",
  "key31": "3uUbzyNzqq5rKmVemKMGachYWQfhh6j2YpvRbvgMBxPE3VE8xgBJatcf1mvdEVvRrseANGSA9bgV6Gdv62WYxdkP",
  "key32": "3zeXEpdiYRe2m9d68ZKkzzfKH5oLfuz5VHDrpQ3mPv5mWVrx35HaMQT7KxHzCKoh4KmXu8ebbFTkmDnSqtwogt2M",
  "key33": "4iWMJHNw7JT1BuHQ4eWgF1TQy9dkhdgH9mZ97RBFgTq5DETiCJ8cG7bYrugu21TB2muNd31unLgwLQ8HmyjoMzWE",
  "key34": "5qFMZCAGdg1nL3beMCVRqcyKscfwd63NvkRpJWqbZmKD415s6zcdpbj2PbbnETR9wXNd1VhSsAqAPq7eR65HbtTk",
  "key35": "4ixP4ygvoPhLDCUyY8UriH7Pft5Tdxsij2avYd8j8fFzRvy9CZCMofCmVZmMKM3bVr4tHPP66w1yPbCUEfAtPF43",
  "key36": "3f42Sd9wdh5SFbqrWLsyW5eQbgR5aRf7BAthbtKZCqKE4KXcXxFWJFqrkxEVYX4UMkjJDWaEVfWJWMF36mZ6KgRM",
  "key37": "4qVZbdrjGmbQWhrx6nP4aApeyyxxTqUSVX6P5Gj4QxAhtW5hmD8BYXe2JjkQWYJLNUZVV2q51LyT7FtfEE35CUWr",
  "key38": "5BDjuBkQdfhzbd1beQsZTJc84gMQW7mwmwv7Zno221ZegE839cEYHMChokTjfohn3jGHCxuMMnfiERUxquLRC7Uj",
  "key39": "35SXbwCR6LJVwCrPpQhE8MRPVx4A3Y9XkWAm3RKGX15yH9bxeF2zCtKwjzrb6w3uqeKvyRmf5DZD98GeEektDoJY",
  "key40": "39oQCr3r3orimXC7D5goFKhLcMGSmC9f3qYCrqu1oNGTNe4i2mfrCyQjuNnTpCMqbS9ezK3MPLQPUTAzmuLd9Crv"
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
