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
    "2hUjDnCMHFCaGZjj8QgiHaPW4PWC3HDBA2U5PKH1miv6xvgWLCJWwFf1tbywELK4LCe7Zv7VwR8iACpUK1hE6vqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5V4HJMi3ZuQqQ7n76FPfqxTecc7tLHeEE7BoWP8XLy6MmwtFSd7jMMfEFRVtzLaP3r5KQGgR6q4yaXP5BhaGXT",
  "key1": "64tvm8KgQRRdAiA41vRsR8pAgWvdJNfLdxwaAYLwLqWB7gk66JxyzFDfuivzoEVV9QczgeqCVXbZfidEFASyVNYa",
  "key2": "3CHmH137MbDxcWe3ki4Cc9jRq1GSkwyH2FCRVzt5nNT9wKB1YoB1tBkifA6a4AqKTs8VkrbRMmHLWfvP9bokXB35",
  "key3": "2YU9TfGf872YKTRD9mnmowNMBsbZqM62Zk8FL3a7DP46CRNVjV9RKLj6zzAEr7TX33PvJV2WkX9cBUADHq4rrvAk",
  "key4": "5dodBsd4k9E5dxFWQcjCnQbGWvAQTpwb671CoRwycbaUswG4YSVd9GpUtwLMvWs4xFuzgeo6Rikms1AzC6Hp21Ye",
  "key5": "qt6XvVPUVFvWzAUzUKPRtDXc4td88Kmt5maW6BVB7YzQrGxZ1MdNjDBCqnxVyAqSBzMsPDjc8LEho5rXZMdr5kP",
  "key6": "455StX8TAiRvC5fbBpdYXTahXcWjCoGvRKCvhQtay1dHg7mi1HjnQwDp2SB6sEJNTe6bCaNrMruq4ZmvQqVk3LzL",
  "key7": "aR3hn8JEpMi46miJ74qPaQiTRFpTkB93E369BeMhzp615a8iir4vxjPtrJ7wpKKp7CGUH6AvEBzxz2wXjjWUnQL",
  "key8": "4HMJkn5iESVyNpDa6JTxpzeXgABftEgM6YkzWb7heAtfkYuuXyxCpFg2iVZdqagTuVApVu15QRPGfTWhYF7ezRbX",
  "key9": "3VvxEgqEHLfjQPRozNsNMNypDKZh3q9RsLfzPio3WkzHDZ2G2vggQazVLRXrxooFLzPpBGzVQgai1igg6oYB1jiG",
  "key10": "67Qvzrigixtto2FC6xGCQEq3d7nZMqKMzSAYPiAwYfjk9wCmjufFqXEPW1gMToMFpjEPgajt1dUQ4ofu9xbZVUiG",
  "key11": "2knHbYbWURrxHsXEqUQ886JrstQEskzSAGzhxfQznMq9y64FRfaZJzQm3vkMoNiido1ixsTZd1Ms96DeihVfKAJd",
  "key12": "3xzA8Go5tUtXrdhDEqtagzQycqqmPzpQbdUEKk3evikoRWbBD8auERBAaNtvK7vgiXc7kyyEPJ81agq8s7VxyoES",
  "key13": "Tt9ztfGUw4VHQmxKPZVCvhBjEDHRyQYNPh2CrzfayKLYLyG3FkZ9KYLY7wGs8fRXiajuj2QfUQFknAHsNtjKgWN",
  "key14": "3E3WnF1gKmZ9V1V3k44UTbqtW9jBpbc3ap4uABf566AZw6euQ8CDahKFV4T19hKRDvFWQx9Bjg7M4E3bpaCbzqCd",
  "key15": "acA2YpovEA9478JChDjvwpzHfbgz9qECLvYvqcJi9if2rU4UyADoqwcLfJqZ7yP38EU6Hr2AKLJNEbsr2DnPtPL",
  "key16": "2Uzrmdnm8DfNqTp3PRiA2rViozZq1ZsK7jsZzNf3KMjSnrCMQaHUiLde211ZjyZkGHj3SUQSYR4TXGzwAsqqG5MQ",
  "key17": "369eQuwWAE5KeUo4s52KzRNX2fiSHe7ux2DcmdwoBZ77WnRUMWEBv1QeYxFQzTRpf8qxRqYoc7CqGKdRviYf52u7",
  "key18": "5pVgmiJK9PBkFKv6izdPYAPNzqGorbfX42AGoo8PZe4XJ7PN3anniVnuPqyg28ffdALh7bXXtszForRVYpoQbidC",
  "key19": "5jHpiMQydaZ6zBdvsd7U8e6iQ8ta4H7aDQdGW23ySkXq2hkZHjF9JVhgrHjEyiDgZvReJ26nNUBhcB8bwEtbgB1P",
  "key20": "5adDKbnGSaQmuLYVvLzB2eYV2YALmuPD94r7GuSZUHeKbaDYtwMjZVzmPJoYgC7EvHJhY17t5M1GS985uXQUbHSQ",
  "key21": "2MpkxEVPL177T2BpP7YN7MoMNJiJkS4GqgkjBnZ5c5QxmE51nRfpHxUCSN8LGyeeaHMqkEsWLizfz4pW2mSD1n5t",
  "key22": "61M9TyXvDZSKh1aq4wijGbrWYbvicupDa8zgiKmrZFaW9343ZdisLtMMgPbLPuFopEmjG8wyvBJYdu1pt62RBBGN",
  "key23": "2vvPg5hBqCjt6jpSufs7zaSvrHGofsUPjTP5SZ1SCcCimkDp7hZi6mxJrHnt6mPiPvMArSB5D7NeSqMoKoUUSHvH",
  "key24": "3UFLXEszBTep6Sk4wy7TiLR2QokX6HNEHp1qSavGWXjJPfD6nxpMMRa9ZhzJTidLmrWG2kKXcqN6YGy33WvkRGdY",
  "key25": "3FqX5vNu2yAifpbXgGSd5aD3PzKepgKRk9Cx22YYDAK6ChHKBcXB5PzcTjAs7z8q5PPKJZWp7ENEXLDPx9CAnxa7",
  "key26": "2goT7srDuiexTwvskkQrD1ZCv3FasyTGmYRvHZqWaJWJ8Gz6SpJhpT6VS9BUTDH6RxZtGCoVbmnkYwD9K9eTqaS1",
  "key27": "AV3nJMe9ivrMXTNryLBjksarKUUJcPbX8MVSSgJppX69gNfGRH5gJnHepPmoxPNatQ6HVQ6cbMZc7ZaFUVVWWGi",
  "key28": "5atWchu3zrJNei5jZ9Tknv2asDpjVV5wz1AdCgYJWCdLBiWBcBincHSMdwAbXYbAryPevCMXHRQfMWjCcqo9CwkH",
  "key29": "5bdHDozPszEawDfqgpwyFVXZ3wdiRuZS67MQjA36JQK4kUe842gnrTbryyuqFrinFd12sY62Pun29qzBMYGQGewN",
  "key30": "41oyd767GGJZYemxdq4hTimertHYmKRgdAPy5dkx3HaDaTh9gTUe4jjbd5tG7o87j1Yv4iECYfchnPnTgKkUaa33",
  "key31": "2cGtMxPjsUxUCFQpgLYFAii7moZ9Tb3QRoA3xD9NTXVQU6gh2b95abeVR5wBetfuNzvFqm8ngFqcPwUsr5bCiGhG",
  "key32": "NQ9R3kiU54tsEh4txXySSY7cb5HKAnJQ9N4WKHbJBnD1hLxUxLVio3wkPs2t1Eit11akGGm8QJSfzghLyf4oQHN",
  "key33": "4nLsqmYq5kpV7sW5NAFsePeP3jUPtfQJVnxcaam11ubyLpFyA2BJkGx2LHjejY246xFr63yPE2BG7rqyhPZmtxac",
  "key34": "2VW5Fg2onSSb9ys58JBNYSSgwSZTzjpUBAAeCTfRrF771APz4D57cvg4g8Y16ZtEqY6cc8HGHKGhMdSeeA6EKELj",
  "key35": "5zG5m5PiWYL3WKQBVtuMRFQbrUnNZe2vMZZVrLjandE86WdrRBv4Dt8sPckYXUWKUe3xYLXA381XLN33kinL4xnb",
  "key36": "4q2NTWux7BHJgvha9VTWdb6KCHSHJzET6NMQFjJmVVneh9tLP3HwMfZEiWjEjMHuLro5JVt9NazrepT8UwNJbAEC",
  "key37": "5gV3zbnEppDRpAntQrHwNJSXFh6mdubiqy8zLZhA9ecJbBiCZSxdbGu5c6soVaS1cLnDHLbbM8tNvEApgz4Pvfb",
  "key38": "2Lfck31uHjC1bCx3aKM7AgGG1B77jh2sfu6QFszXLQyiteWnzpep98J3dYDLLmj9oY3asKYAtLJuZ1PaxXZaYBCw",
  "key39": "3TCkgbgxdPrHLdFrib2rKdmwfFmQiPNejWZmXxCYmm7PACaNDDucGUdMFYHSMn6tC552kDHRMEkknFZs6wNXixZ8",
  "key40": "2ZiN4wakRGTpVBed1HzwSqfWcHXUBAN6uF1t2eHhTGP67y3hxEe7JBFg5ZuCXEgcJPkoZXKByyKecMYEx6mSHiEg",
  "key41": "4Wa9hnuKnLypnHdVgPpktKfTLbgFPtRAFwNcMNQvrpUoKJmxbishMeidv5qauPnLewyMx7u6XcauxC21QMstB37Q",
  "key42": "48nMzmdhMfqVDbyxZR5aMmbg1WQfuD4g5wb83EtqGYucsgC9ZbsvmePwjy66MNfH5XrQeYyF9avZFuik3fWcmmbW",
  "key43": "5G49EfQjiqmyJMENym8x6j9aXmb4eYzJD8kUrc2VzbYS7gWWQ9YYajKz8nq31PkpkBDMCGF871i4jRYeGwuFtxwW",
  "key44": "vQ1vsNdZ2uKxnwoXkptnW7wDfw7bKjwkHhmS1PGnMoFcoEzJM14f5AK795EjoptrQyHt4sR7DfNDSUzhiP371jW",
  "key45": "2h7bdXxD3qfs1VKnMzzQ7bKT5BpxJKKarNVxyMh92Qn5SzJPMoRcybGPdNcRZZmnuAJ7u2j2r1qodB1mzCKunuHB"
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
