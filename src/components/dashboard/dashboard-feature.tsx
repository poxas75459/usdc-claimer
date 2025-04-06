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
    "QLw73m7zMcV9GcoP98g2pL3v8BdsS1UhFZAcd8gWnreDGfpdBU3M5y1xfrWLZGrj5vpDQ2DzxeyvqQVq1LNRzXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367rWweGifWYiYRigtWv8CoENt9KGQtJMmZhJiLg99m542fRxpMrLM9j3z5q8eziZ4LC3oEZSDQBb8xr9D7YHjL8",
  "key1": "2d1d93ZUPXWAdcA89CEfj5pCZvnaRqjfEkyoyhP1MezFL9tqMtD3MBwN3XUe7nrD2TTQk4kJtYgBYkw9Na7XHGfz",
  "key2": "27fq8EtVLLMrocq9FG4ptzqRNWw6265aJwHi7dDKUhvqWttyPpH36kyqF1bXJXDpMRF1p5mdSgRMvwVBkJugrfiA",
  "key3": "23Q49r8j94KuuDtzatLhhY1JU3QYWBChfnX17645JqGqqR5m6e6a7KGGiD2TzKzjNUP7ewooDnovWT5SY9F7awCb",
  "key4": "NqW99852mvXnFccVTdWJpDgAWHzeJU6QDSRTGGZouEiYeWRMcT3Zqrea8hZrt5nzymgYyoXDi4fPUXUYhZ9dTHz",
  "key5": "539HpAxqVDu4gbtGjJ3qq8R1Tu5hVBrW5nzVhfv6FUkdydwmWxMpGCXWhACFsdfQMwLVbR7x9G1xUWsRuRtXrFvE",
  "key6": "2kaB7YaqYmBeey18ErVuoF62xvbw2iZ7Ht3Rrt45jyZvfZVG34jFn3c2hGDJfZffkL5CjfGmnQx2YG4qywbtGJ4i",
  "key7": "5Yykfa7scnh9NtkRpuk8TFwY4bh4ykyB1w9J75N5GHgSaiZattwJ7SSgz1NpcX9oanffFgFe6v3exU9LBurvXSUZ",
  "key8": "4SnxL4NxYqvN6kXVcMm2RLHAuHmUWEY2ndKmHEY1MkuPH6eF3BeDn7ECoqM1y4kFeuBwGSsnHndTLucBX5fyyawG",
  "key9": "3WBT41AGXUbr26GG1KmWQmTsiBmEtCJkybaNqUiwxWaDR8xDUr5RSTCYU9uUm76CutMiz5QLQc7AV4DN2kwaJLb",
  "key10": "WeZgAnWhda5fQQ9TdBqvvZ8Q1cdCmBQNtEKojHvU7jKQfZWAgzbQ6gEwY8xgLZvcHxqmqvASHp8w3rikGWuah5i",
  "key11": "5oHUknC7UU8QKXTHP1pFFVu1FW2Z3JrT7PjWDUwNxMbdPB62fgHhrPYafYJRaV7C5JrWDmUp46xe5tmHQzhvvz5d",
  "key12": "2oXt7HaX4QGA5rTTWU5ZeM1BMZC93T63RzMgwgGNA9FTCo8Wm77ExVANa9Cj99bGL6G2Q5aqujMLQZ3WTjuzveEQ",
  "key13": "3yuF3VpxU6t1obuJQ6nkBoBtvvVJsLeW6R5CePjt1RMs83ofuLjvAWmHbwz5ZgqU38LirDBnQjEcDBw6yrnQ7pT5",
  "key14": "NeM2cnLK5jnVnm1mTTwV3VzyX4H47csykM9m6TaKnEzfqLKktsNGJb5HXP2MowGXrNMzamnmu5i2o87EmcewAWw",
  "key15": "5iJMZ5keifqnei7VZYuaNofFL8rgcXrT56XF2XFWAdgr7y4Ck8XEGaV4SW2kPD6t1jZAUvcCLKabwz97VJf77X3T",
  "key16": "4nrf2ZDU5nwv7GQgXnJFJuNMyhyYgvCCTHjTfwDsLXzmW3TsYF6qBuTyz46f8tQ5AkHR5yTjn2npHYnynfCy5ojJ",
  "key17": "5u6NUpSwUMbohXEx8Ud96tTTRmzopc6zFNATGPqmBihkm44FZ4noHSDfWvyjCUiWkg5N7d2qNZYwKSg8f9n6CQi5",
  "key18": "Y9qK7dAkQW9SGukeNsjsJNo7KjqMPQ1ikpqSEj856U29fazQrxCH1JLQxVG1Y5U15uRgfQqek4ckCgH8EcC1US8",
  "key19": "3kobtDX1JeRgSzDk8oy2iyuJzQkARfYsHESvdvj3jEkihPwQMwFNxq7xATUmZU3auwMi4jNNFiR2MDwdWk9PkRQe",
  "key20": "5W2h3eoX16cxKTwPBLBvF64xonoTVCBQP68vLS4zycw45MQJa7BbAaVK1BGdb87ouod8PUJitH1Gg9gf8cP5CCBB",
  "key21": "3N5tdUjy1c1ByWtCTitpECtmhrMQC1JwammB13eKrFHCRYnrEMob5xqN7ZpzZXakaCAcTLD9vXue1hbuJxHjycbo",
  "key22": "4MTrpdzQiyWHeiKEW8TD9kSRNckVWJ8oinmE58dsdRsxaiKGHDvn5EUG9zAGuVQTWRfjCDNZc4HTCU7rTKKxYR57",
  "key23": "5AhQXUzkQbTz4UjBgLbxWwkJqXn1UeYcKKdytH6v2eWUp4cHLEBJMkXc9PpdRwvYaNiocANbUm2whjxS8547BAAD",
  "key24": "2kuKjq7JNHqoyNxReKpFwoFgQdFPZAFCvoccvPTJnyu5gw7uHAoBTkiKYL7GPNuFUcnVWnqtSoKFsLETTYnkQqRn",
  "key25": "49v5NujZrqmADvRAbP3Qz4iXUozQmqfHiForbWGQ483AsX3rFjtsoCQdaqZpXMgPLqtJsMARrFuCdvgrqTERLzAr",
  "key26": "5p5Uwv4WccZ7bXyMSQFBkJprEJMowAY2BSEWw3hQgvXzLyNmQvx8LAFWobKmgu2Wf71jp32GGX5e85MnXUF2o5sn",
  "key27": "4QZVERCdgekFvhAqEwDtPQVmExEvULpbH5MD2ZeFW2kEvRSKcUzk8Lh4gxUGjVTHDEyACHVkJsEhtSEMe9Ke1Bf2",
  "key28": "2rzsjz2vXdTqJwQX4DbYxviG7CAeCuCNf94pgsHVifFj8hqZqRdu4DCpGs7v8aWSbj8uYLM43VXwTMbTN1T53SqV",
  "key29": "2TzGikEWc6Q5bBsp2NApNg1TFuEdFpH8cymgqx558qbd8sJFmXaxoo13LoA7UgseacyuHD9zxjCQHeNsJpF5WLRE",
  "key30": "4dbsfL3JxAerBuwJ8Rt1WPiMTkbyHwAAX7CSiAWn3jB77quoQ87KWgY2dYkukc1BktC7eKXGjHuDcqCwmgagMm3Z",
  "key31": "2e4xujdXEyJySSdadvdQnEZnJ7ErdotHPDYdQ6NwDJCY6vXok1Ppksjzy598p6iMf7TGzydVddANbrhCJirf6U7v",
  "key32": "658usPVZC6w4Ppj1dFgr5sRB7ejVgXVkVUHJoVgWKnDBPXo6kucZ8LHFqvjHSNhrfQrjhHL5Nn2XCbb2NTL4F9TH",
  "key33": "5JHmJmE5chYiqf5rJYJJTBLt4z77PUCH3ZXehZ1LXS6eR4F3K2tBTEfLv5ap3isegsqwsUomp6bNVBmqPjWMh9j3",
  "key34": "2RWnYxW66K99vtrN4XT8utUNyLF5DMwg6jgcdkSs3QMWTe99KHLtqyuHpbRZVN5BFL2MVbrE6QCM8t5mTvr6pkMy",
  "key35": "4aCcr31NgFkADBZ13qrGmDddv8PHuSw2EAFTysKQyEQKwMWdXo25jMatR6uGCCjwYxWHhp7pP1CPy4DcxsQLv4c1",
  "key36": "5ACoWcwxkhwwTZNtWGfweDHfFq7rJ9oh6NaGVmqNDmihEJ3x73oLs2JZxyFxFt3L91tQXy7jGvbRsPk9kT5ZL6e3",
  "key37": "GVjMru9wXdSqcNaCdHSRQQd9kc6m9Zu6Hn9BwXHmmvZmJyoN9cE2tH8dvCZ9sus9iBnurwsZdEvmyQHN4wQGJB3",
  "key38": "559F8uQ4C1XPZ33GJBQjJUqiFuyzSTumDRjrhwHmewi5ZCYZCXZZgxmdrSGaay7iBtVka3vzqE2oLL85BURP9kX4",
  "key39": "MfsV9jmfme5WohDjJ7aYGKuLEjgvt2qkbvtmwGZJiqDp8xf4yDDyftz2rYfASDUGWQqMaRh9whEKUHuDbvLWQGC",
  "key40": "mCdY1AQwyaekZDMBdkXrkenEcZkzFf5SzZ3tA3qk9vYiEVhxqdovdK1X5UPfnfFtq7rhyuvSP5e4PiuiS6bb2RV",
  "key41": "5gqmndt3iZ5WCvm2GBmheAm7px8gND4eLeLhe1NtHpmVXyKeGKrfoKCFhTtx9yGu3THyhEt9uCvJi7qMz6s3Ds5r"
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
