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
    "2YomLiZLsHUwMbFfU7GsoakQ1WaZtMGzJ886ZmuKTkWqef6tjsJ1MYPr8rQFb2rCrcmmPtntvVwFpJm5d5UCiPPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t2PxAniJa3NpkaCSbaZ7jszbVnPSy8hj9JMeBcqcDHm6xFi5LBAdJMnQtWSi2jEBULo3sWxLvNYih4p9yssHdhX",
  "key1": "3BK4qXAQWZVXJBpTqC76Gn6D1jpAHrT9ES6gVrEAwL2uoLxU3Kj5Yd3tbV8s26LFaKdJmimeqLXf2hutqeZTfYDC",
  "key2": "2eaLbNNv4c4KnvtY16DD84TtvsRPfWh18CzFxT9PrXheh79x7uythMTheL4oP7JVTP1qk38dEW7K4xN2XdetnQB1",
  "key3": "5prAVj3kAHszwzZzT6PgKCdfcwCzs2wEv59TV2TeWF4g6nyCqCRtWHUgDxoTMcVtbLJLhBPVxbwZk7x9CySfigiK",
  "key4": "21QYCspTQXgQ8BRBv4UCDRakE1sS9zUc7dJmHX67sLCPBVHjHTULWxHueGwKe1GoyxggDtmFD48CnzxNgsewZjJy",
  "key5": "2PZhSnGdBMKt2RJU45BHdXobWQndhuRqQygbfv3Vftf4YNzFFQw7RXWvQwJTeN52U57WT2w5fc1bKZFRwrTYd1zs",
  "key6": "48WqiUxtgJoTLGFnjU7Zm7WYXHNjd79e53T4vgoMBfNSfFSrznuZnXfaJYDPmfYRSq79C6c3z4t9w42ya3RpeH2F",
  "key7": "5n1Ja5JQsXRQnGGRJnTHVE5xMDSU4QbNQqWBqhHqjBuWJ9VFuUZcssvLPrwbz4iwQx7kenn7DRcjsahz2poZCfqZ",
  "key8": "5hQ9SrJCEeqYuRxMkZJi7aZ5CJBRxBBZFqCRry2Qgu8vh1ppY6tLGp2QHTPgjSyehn1k4rJvy7r9RQ7kYhHwDLgP",
  "key9": "21jEeBJT5UxQHHzSsGmL5nj5E8FwQigSvvePyXicFC3573goyAfB1njaUsrZ1XGRB7M1mddZYPhvLk7ft6Chpn8d",
  "key10": "44YShw3JXFMVSn4CBFda7gLzx1Ershp8sK7BQ7nUmu2aNh25qQ3TaPH2xM8hW4MdEag7t5q3VBqtT8X82mdk2gTR",
  "key11": "Vn48kYZaQZ4B3yfktUiHRmGki6HhsjXVmpJBvtGss1ZgT7xbEiy7XqJvSc73ujRBsHGnpvfKovCknEfFhbpwUaH",
  "key12": "3Ro3r33ifm5eLVeCxuqCpHb9S4QZazYRuR9Ju77JZywA2bVHQtdU9cwrpYVB7CAy8MLa99NRRqJ92gpfafEGyztu",
  "key13": "9oiFgC4wijwGvfabuvGAtKktmCgWZS72re8pD5Dc1yQhFfX1aF3yeUN5Q4qeAfxi2t7U1ZfAS2WttiufXte7i4v",
  "key14": "3Uwez3iZhVPcbfQmhZqkHmcWuxEc4wAcj7i9DNEMGwqCMQKDbhawHyQPxn8X6SXxWjXNjVQ1qzGaFC3DeuSp9rD7",
  "key15": "a8Q9gGi6eemXoLwFKgkedG4KfHDjrUkmT8C8SeSKphShwRo86cMRNDVreEjMr3MKaxMen6mNoBCL9ZwipsRi6VF",
  "key16": "aJd34VHapWLynjtUTbeJaCA3fPofPNsdjWni2DvBYaQu6t9x1T9Enq3NoY7S3RUQVBoxmZiiBsff396xbLCUJNS",
  "key17": "398qWfZHHn5PGUwxMkYFddgRZQDu2BjVygUg7fN7WwxxyRq5qGAxHfY2myhDpM93VLCkoimFMqYujEr8mZsEbJdC",
  "key18": "Z3EjRpbipazDEWVwr2KE2HvyQZHZLyn7oLGhfRfqUDjzPyvho8ZWcirnrQgZgXdoxNTqFM4sh9wkrjz8vZYTeuy",
  "key19": "3SuXPbQNU76tWXikwX8To58xfVEe3ibvcq8EH9b2Lg1gmDWuQixSHPi45RpNHEDccBJWxU1pxJe3gbXfwhfYFDbn",
  "key20": "5WwWkFLFvPGGZ9Xp7zp1VHnpZyEPJRisbfq5ZUyfmCjBjxAd8yDnKaaJ43TzKsN7dAyPKjP5PaX5psSxBLo7DB7B",
  "key21": "5CtqYhsj6V4M6MuMaZAvYxN4KXkNJ6ZgcL9Whcg1Ed95Ak34GHjn8iQW7tH4RhSTyn2Kkytj5Hkh9HgvU4x59ZXx",
  "key22": "4KWwfpGUQoZgE9fPLkRDPtUAHMUasn63p5wRFgfrTccX4Jhkz8acy6tNfomoNkadxTcBLu5DfapyEFt7KMx1nswE",
  "key23": "3YdmzPgHCif89cYbJ1TASAfdurcwhU3L9AybAz8B1q1tfnMLHX3dZRrRwQDE5U96zgbhyiyuGFKSDdfbtTD8g2NF",
  "key24": "471TsdKjhJTkAupqiQCxJVsMk5EFLLAbr7n4BEwg4JN4WfmPY3DjAD4FW7eHN2cZs5ay6oqGgP8Rq7AzZwFwYQyD",
  "key25": "2fvvFtgak5A6ZH5EGtgLzTRimhGhWWhgut2ZYLqwq3RXudMXVrR45LVSDvCiYwYtd7Smqt1XpGzs9t4qeeV1ea9N",
  "key26": "5wwBn1bFGuGbpLBGwVxxZNtHgVU3qu15sVLpwADKSwCtVYxsqduAYijHnn9Ri7Q1nHG39DEsBZ3UdzUmQDqQq2rd",
  "key27": "22DpqJrETtpXppuoLxNzpj2CHKc1MxbWoDC3PFuaSoaTZd2FGNqYGczMy3C33JDr3av72rYUffzA5U2LTA8S3n6w",
  "key28": "57kUBquKvjnPChpjDLQ7wENeUemq96umWBtuXzeszAFuZNAytvjqasRn3s81eFit6QBxRHnRxmaN39NHGcjGKzYF",
  "key29": "21cBQpFHLbwVeEQMkNNthoM63eSomaBSmfJTX8HvKgP6fbQJG4Ynh2ARKb5GeSVhpoDZnYo5FKxBJJKFv8LXKr5a",
  "key30": "UuJb9icUqY971pcUSAaBS8ATcAFrAPEDaUsjujWk3tNNG6e9rQzrqcJynQuBhmjdxmTibDLcrMcqnaCq5PMmhFV",
  "key31": "3uN9VB8UGKBSsTbi75e3uwDU4fAapMhHBNbEdmFASXo8e82n7bqdGV5gVDrGqbfKj28xpnBNtpoicoJgLdNeR6ZP",
  "key32": "48NS4nAuQV4L15Rrt2LFQ1gT1kWh47QAP4UvRuytf5c95peRqBbewHdz6SRw9ptM3xzy9wt2x2Sv7iHzvs3ZCSEN",
  "key33": "4dDZegjDxxqTQoCjainKwpxrGXXD7Cqz925KYeTowyDuZR1PMCYb22UEqVMkQ93eC3pDv5pq1HU5axLj99mEEjxS",
  "key34": "NmvCYpUAKoz8RBa5KMTCAGVePDcoxJjsLd1sEKgmFDkPUUf62eo5PcUhNNPR9fFkecdujgVi9GCghdSNKVoYyX8",
  "key35": "S3DUoqbw3J5nTnp2B2bRra6CKN4LjXyx6trt195qzcZeEg5rnYUwjzLg6Zxba233qczmUEdLgR9SpuC5LrZEJPE",
  "key36": "2hkBF3cx591PQVwj6Z1sGkfzJN3c5yXq2tvx6jHc3jy8DqJgFLVPSJscEnKDNdKHeWAaWePsxyyuUvtTzVmvZ82G",
  "key37": "2wFC77SrpeGzwEBY9xMS53E3ikGi4ur2psiBK7Db8hWsabCpdxBybD1RNK9gH9eL9wDdLcVPBZfaw9P6Hoi98r8v",
  "key38": "3nBqwxVUzSJMTDxAcQBftpBvqMVpoLZcxStjxrUFkqaXyDWW4t9MRQ7P3vSn8tE6PMZLppmV94hZdw5NXnUi88S4",
  "key39": "47KBhvBmRX4HLWnx8qB5mwuemu2gF88tXBXXXwQPhLCWZjiyiyG1Gq46TZon258CyKwAUR121Nfkid7nqDqamkm6",
  "key40": "5JmJcNjzqMM5YR1thYwHirYJBmuf7davHE4R3j7hNVi2ytkZ7fd5TZYLDUQNVvr8Ezes9XiVC1KutQEizKiRuBxr"
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
