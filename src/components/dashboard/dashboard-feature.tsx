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
    "4QNudXRVGZjRMFzmnNr7LhC7GCP8YVqd3PvXTEGq7tpzuzgtpcvk5GuFx5pZibNW1WtqXzeLhBUgsJRS7Y3cQJhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1zCpxD3KCy96Q96d8CwKiiu4Zr629H3RrC9G5ez13SPH9WLcsQ1Edv8xEkQyvNtdt3bNP8hdcmVyvh3Q6o6vBr",
  "key1": "3y6FGqXjw36prFjCbTJYxsymLVsgQ8ygppzqYJho95ftMjif89SgKGUR23GsukqKhUJK3zR7gbTqgrfBGiwU2SeK",
  "key2": "zf3LHKo2S4juvTHc8zAHwaatGGa7C2sDKUQRs89ckM5o9wJGXzRYwNTXjnwW9YAQ4Wx4S3FQNW1ykznLxPQ9wjM",
  "key3": "4B3fWUcnGQr2WmknLcVXgE95bVbMkrZZKXCjukPzbibLZw2yXdginfjskPWcchFAsUeJZEiieQ2TgNo8hgTy3Bkm",
  "key4": "4yXxySh1MobwcjRMksXq4sBHkMoSK2WnpUHAtFJmSCEe1GxYPyEDngMnRzyqdW1bYG2shCsJoSxRAaHgvim59BtH",
  "key5": "2vFm9wuVCHmM7wcQTR1P2HdqmvAyP8HpudqfnqbnSPGodGFQ7mtup82UYTbis8hADW5YoqQ9rKSJXMJoLYfB5kxz",
  "key6": "2huNAfHFHCVp3pNQaAUojwv2sQrNAFognG3F7G8grncapgrMNVjpTPEPho53YZCEJ8xp5NurpDZYBuGe5dQMWKWX",
  "key7": "53SM3VU4ThMBsprSfBKGvUowh5cMxoCfJaurEx8PqzevED4fcCapebb2kTXoNAkYWZeVVtJpEZpheYCZ2HCi13fe",
  "key8": "2WCufRYURGRsKpFLHjL2Xwd5XFE7uaHZg8FEHm83CmWYToGvezfdE9gcbVYF3JczvcBvzgrr6oBWZBLFiUuJJYSs",
  "key9": "5i5LT9i4ZVEjQUx5cr1QUxksN3wh3B8x7oCPSCFFSUPwWS1cB5K1JikfA1u1wQfcj3o2ZVmEA2tp5fJF4n1TorFL",
  "key10": "3DtUsjWcHCD7ZPaquUUtqyosK5UEvxi9vyq7oaH8DDjyMMhknG8KpasV9vhZ8juBAce4Fpi1abgQzxQ7CnnUkRvT",
  "key11": "4JMr47gUpk2FUon5JJZE5ykXCKi6q8vmHrKsKGeAVUBqcLjtw4GH8gwDf1tkoY1RL7aqG5dcucbBZGfwcVSx4Bup",
  "key12": "4gWtGobZ4PqQZ7wSPoXSRgVfG87vmu7k6CZJhYBL9ZsaaBoJAvs3miPRcQWJ4U3C76gj3UqLh4n6RA2nMkQSuLrk",
  "key13": "5T9iWiQPNwD6ZwXZ1JvtHK6tNEyiyrmNbrYViv1cyDPEWE6Wq5xQtqH4kcij6b9PfqyKjcZ2uikairtZzyPFmGfr",
  "key14": "4MDnJjYjagBGFR2nbnmjHhsoTb6dPYuEAnLwKYzmNQdm7rYpKzdqHKKdUp6kUfncpaNdNL7ZmZLGkn6m5pJ7BDyC",
  "key15": "mi5jEEkPy1bJx6hstUimsJj2qt3BSqx7fjJbwFSEvggL2raP2wTGRjx5HCoL2b5bCZZWEbzV2xFTHSibgunrv3E",
  "key16": "4UepVRRGyovdfdXMin9C4cpY2BaTnFwoR7vxRdHq8GCvhAZY6ep7cu3fcD6TAHqajHRRFioSR8xPT7tU9HZ7H5zL",
  "key17": "49xrMUBkixeRqXAX2F5mGzagsSVkpNt1SjhFHyizoUBJjsk1ft9uufsnx9VGh1nrWYE8PUhgaiUUd9q6VQ73624h",
  "key18": "4mP9GwHhpo6co6PMu5aE3MbWrFTRjq3HhQPjkk8cehHozjFX4EWvKEQR2b51RCULyeACRRK3vY3nUrzPTmBHJggz",
  "key19": "5dnQsB6nofvAfvMAWK9gXVRTRPwuCVYmumo2bhx9NCb9GtY4UrRJSrDu8BiusJC42cSimmqabdtMq2MmtnorbvPB",
  "key20": "4c8qyvvH7Bd3agC7WT6vrKHLNt8a4CcNrJkqjmNCfAKJmxXS8mp6pgrU4cUATCkGqoj4snkmagguD1hYcKB6uKEg",
  "key21": "2Qp1Bsd9HwU7S7eARSyeA5LUwXeBurPcoZx2vtAF4APM8onSdZK8GzaLswuNf6443mFWXvuUgTYrqCYddiLCLNbH",
  "key22": "48cdpBGXVbD8e3GzKu3Y4V6AdqNGJfgMNynt3yb4pRThscbR6ML2U83bFYbE54Fqi9EXznyYK65aKqzxBow6iGVZ",
  "key23": "4VLR54hQGP5smiiabxdpS2FznHWp3XHEwXMFi6hyBtqgDuQxUJEJU42pr1bATQfThRmRnJ4qvsBd2eXMjNvtvb78",
  "key24": "4RPQVpdzoPTizncLS48E6kEP2S3CcdyruJfaNXYk4s6wnQdmimboMx5cePf9MLbjKJVBvHHaccSLBUTfEhTmWXey",
  "key25": "4Gbb3NM1McyegVjWP6gq4duR3a3DC5iZ4k66iSJuYaLo5FhTRdtdWpZHDF6MjfceV9jNDc7tNXQgYdKhCxiSHew6",
  "key26": "RDUvMGDzRzerfmzgU2zJBzhg9GGv9huWfyHe8mHg32uR551CFZppkexWucBnEf6tL1iKoCjGN4xhXVAYRyUt5Ye",
  "key27": "2rCma2F7xtB294v55ukGe6nri4wK5jLfVePYQHMeqqUggfJ541Pt97wKoXZUAQvJV5Gxv8C1GyR5zLEUZwwzuh55",
  "key28": "5LCKctbxR8xDm2S2xYSJDQCSyajWRYmL6y5gcM8C8H7L76HEVnUPKq6z4TAs51pQ1es2fpuvKxo5w37HtXbQ3ZYt",
  "key29": "468eXUcEiDt2Hih94qtDkcdcCNcJxJwnpcFADoUEkuVE4VqrLCBNYtBN1WJ2X17pu4623oArUtjq4VVCpdwe3Ada",
  "key30": "2aMs6vEiCiiid3X6McQ3aoJcjYxyExEHdomrkvPfA6QZQAXv5opi1zhvtSYaZ8Vq2iTndfAGLDNVo8otH6VEkpZC",
  "key31": "35nm1zgajkC83Wx87R6akUnHNHb1cNfdz95tWm2JGZHA7LzsuBin5ke8mfhXy5Af7on8gQXvTTFBVfoV37efzjPq",
  "key32": "4TFLayXFRTHg8Hz6kPNFsr7Ew2xe8AEVjp54EB75ozHU6H31Crkbyz8uZoWwTh65hzMNKgkq1Tw6Jqxsk38fgqt1",
  "key33": "5WYGz4MVCDUpjZzAEhEh6XVaxcN9vkm4hV8sQUqS1J1a2Gyowu5DPEmp8WeQeRVCE2MhXJNLQ7G8kVGGvsnpi5ub",
  "key34": "4PN8oQMoyUScrNs7xteibfia6T3mon86eatBhxJiHYRmVo4zrL4eaV2pYgNWx9n8cjF12k8tqmQbFw6bfLAXNBn7",
  "key35": "2L4mXr71Hu8fQsbz86uKEKZyAL9gPoV2zEgvwFzgoUGRn8pZdEGN7vGjVktvJnV49NkTxYuJEKy5mbr6QBAYteTp",
  "key36": "4D2XT9bBFqEUzLJw4ZzELLuUhoZKrGApdzp25os2D7zi3FANqJKc1EuT4s2rtm6EqD6qUVzrLTMhtPhXuxqHxXhU",
  "key37": "2AH2N9gaXdDdUBWU6CV8ftJDGkXdveVRBAG5tGkV9VeWDpJ4k21tdxyMY6GApEopVUEWmPzuiY8zNfyE7cfHvawY",
  "key38": "2oMS7ExbED6Mt1mQBDC6ypr8SXqMChPn1jzAa6fCLPJmK8i1MmQQXE5fJnhXkFZxEgTZwyK6MWAidgsrA7ZbKERk",
  "key39": "csZB6E1rmdofSm3zcj9tDtcefbLm4MeHZBP8B4X4weRCmatC2nUF7Vbiz4xYzufQhFM4xrLsyCVcWUQPCeD8kP7",
  "key40": "4pF3Zi9s7G2AVZ6wougj3ofihJ8G6cprPut1PgtfZpgVfBHSgC6MdFk5NpiTYosjBX8RdX4T8wNvmhGumyryNTAU",
  "key41": "5md6DRRfSVSdCTooZNSxm4SSopA87YXprQ41XbpQgoVaNXv9KBrwxfyK7JgtCCkyN9n1UZGUXDzJMTYAjeUHHLLQ",
  "key42": "52znsmyj1rcmNxKxtcCT5Bsv3aPqgwRGb9bJGBp42Kt2kF4cFimUtU3UsbB3V89vyiHkA5TgprxAGtbyxiebFWzV",
  "key43": "5igPGAiH9p5SFvJwmTXoKzUDNjeFhLHiTqB6k82ZERJnmZZskGiX47m3yNq7huAQzpoSGq8CxwZ39KwYe6xZ8ffH"
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
