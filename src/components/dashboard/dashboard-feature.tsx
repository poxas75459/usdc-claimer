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
    "33ZJgphW5Gf5R4KswmcHoPbhStnmuwP2h41weHWxeE3XAfnme3x7iSTm8Zgr8e8MQr8sf6hdy5NBcgHnTqmrWaNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BisVE21qsjjbcBxGPZT9xk7haMi8HfEq9QEiewqdYQG85je3PhHY4ozxS7JjAPKsz99Tnz8ENPi1puWaT2SDSAu",
  "key1": "5AowYHHP2FHzGu5pjfCg8b4kxebbrJs8QxgN9A74ocCje73VsUB68B1DFLBcGk3KU2yw1F5MxSX51zBQFbMMntaw",
  "key2": "3aRuHAeuCUm9e38ZvCqK1A5frgRwuQS5DnbBHvQeBRUVxzVZgc6vE8pVCkfwmJC6FepzSf6sRJMVnXmMKeqhjS2T",
  "key3": "4ddoVtrnPWp5T8P6qYSqWYWikmpd5ZHpAGCZHotb3psU47MmrWSFqYaYRKyqgG8eq1FYdPZuDctV9mNvtzUkay3Y",
  "key4": "5xKUZJomfPq6vBCxNLfpGLFiz2jkY41T95QXnj15yaUi6AQGKiXi2CN1ExUpkhKLRxKRYkobexo6YZ3S5aGSbeBC",
  "key5": "67N5tJsYiG6WaAFPT5YwqeZJmSqAyE9ZtjYt9N4X7ndqhzA6cXtRogKTEDXt2JcgDjbBqTB2kJbRvJqQHQTSq7Dm",
  "key6": "3dzbVabzCUAWunW4EJqxktKLUa9XYTBT36MDAe5VwDYKn3Vc81b1XSGhpgj5aCc3iFgZt2qT8zv7MSPCRBjjGoEx",
  "key7": "39f8t2s8SA4ipLgRi8CsvVNLG6siw6zK8WYgPjnUQtuoe7uMiqbKTCPACa472ssoTWWfxjaZUTmKe2siXjQ87Zgp",
  "key8": "4R66VuBJrRBCRj5LQVGkLJoVfxgePASxWNSgcJRDVNMnP557TQBmK95B4PCDHsGg3CUyLjbFYNNkfHJP6mFtBci6",
  "key9": "8xfHW3wRrYJpgmkkkQb67dDaqnBj4UES8avnkrZyGHmLXH4gTPZAW5Wq1LLXQFT2M8wcL7agjpzwx2b1dkwXeqX",
  "key10": "5pQjr7uzm9a8oyXE8JacrMFp2FjAUJrVuuZkrka9wrKyrpjtBnFg1V9PJXDxPG7UZi8JEABycKe5peAW5b2U5ujd",
  "key11": "wBiyJYvY21LaKbdmnddg8U3LJKmyosywiedxh8YdQNyvHEezhsN2aU7K13Q614PPk1TxihnXFFwwdUbPUjqiSUS",
  "key12": "4VPB7N2SA3qAX7ojNCEAFUv4dAjqoJmVtAnHphCUy5wfeDDK2g1YzWfD9qGsFWxAdJgfPYwX8zU85iDUy2t2YRv",
  "key13": "TpnexEHk3KcUG83QVh6cMaDayuXqPJWYyy5ogjH1teh97C2KybnpX6crBHwoGF5QpYAdvsC4T3JefojKHmRfWfT",
  "key14": "5Pvk37rZY97jQ9z9AtwvU8vGNT2yDQYY7kJarp1uMe8nrwbBkWAJf7q8QD6g7Rw9XPYEH7kEKGPcm6wZGdsLvkh7",
  "key15": "damUJn3TQCn4sDwfHHSP1TuFSj2nhdVzQNmSxEHweRTnR1ugKKoCHNKneRsi7FyCUahzAy4HWAgz4oankbj4R3g",
  "key16": "2F6h1t1N11NcVJEYqNVAoQJ6TkLSRUbaqZXdcGHUA4XbrQRFSExucJsiqQGbScFtLAm8eLmgujfcyGVTg4xNqhEM",
  "key17": "4RrThFLDUoKBzQa5sECWpYCWwxhEfSEdF4gVHpajmTTcQpBQ4Wp8zGP1bLGdfKwaaEAhCzpuAjDKQ1F9MRNMQnQR",
  "key18": "2XacJbG9KiT8NzavF7Ddj9u8WCbYC21x5B5exGrDswvzfmP5ioAvspEu1m3DKGTCpfZGKbYeqt31nf839NMeGZMC",
  "key19": "2bhuoZeyTgoAe9zCntQ7rxucbmP4BA1XE8TtBCJFm9SC65XCVY1xM32CrXj79TXchBxukfhRZ3B9NmLDbVcQXBMG",
  "key20": "5mCRowTv4ST733XCZyMJLLBSGQSCxjyTCkyEiELSEj3q3Tr8aAEGMZPSbQ9AVjPfW6pcqcs15CcjsorSwZm9i9F6",
  "key21": "4YYbyu8TVLQkdJwTrGm7WcJ6KHjfXT5agKQ2PzQqTYamwNjyyBtdFBcJTUGJpqwbF8vpRMZS5kkqm7UKMup2F8ok",
  "key22": "5Kzv6Dy5PdLnTNzN3HRtgmtNfRbqxa7AoJVmvRVUzxCrpZN4pxZhNofd2EgLirjrxDDBBNqQcbTZrjc3TX4XuLHr",
  "key23": "5FQowdmqYQ6VYviXCzBDmJfBNQU3UVdTH9PHQVL8PbnLzeuYFQTNaHxv3rQwoD1MpGrXAEfNfYtNLVBZdsVJaJf4",
  "key24": "29Fk9SzG38wjbACQiFBBWZrEbq1qPqvTuX8LVsEkf1AXFbQ1brWqDA5YifeQpPEQaA3M7UpMjBW71x8XMsc6fNZV",
  "key25": "3vyf4bfG7kKdNmcNipAuCykBVQKw3WYoBPAMZzcsvBqRHvwYbBhJj1FDF1mfyYC8RbxfhGzcvvtZjY234xbxRoCR",
  "key26": "2C6hSYRAKXgZMgUCQ7JFYPfbtfcBuseCnqKPiZkoixfkW2d6rmQ1MVUq6YkoPWizxDq84eDRy7gZgHRaVTTXyfbf",
  "key27": "48mXmZE38WopbexokNhm76iha333QEsknmsRXSWxaYC3yvHJypaAPVCL2weaB7w2uUTCt7g49yNtnLrQvPHMqSx4",
  "key28": "4ivTd9Pe77fh29ftw3bDn27G53ddCjh9XFza2dJ88zMXiPStGj3LX3YbL2Mie1tMw8CszyG2bn9Z4HehETNecyiD",
  "key29": "3SCMCTc2yNmUNCmfN8jL7U1itZ8H8NmnxewRPnzDiQ5AyX963os6JTJwAFkS1zK63Xo6mwB1MqexaqVg7ki5j3Fo",
  "key30": "vkPZDTsxmUJVbLRqrDqi2Qn65KLTN9BCYbDzcVwJ92raGg11WcY59hqHjt1PUpVTvjwYUt17bS89WgzaKvnoWvM",
  "key31": "2MFrrdSshs4ko1HbXEWogxvz3ewHBP5G3zqVkEyP6FLNJNKq5QLfc2ay3Q3BobLT1gqMWtE8ZG1xNfmxqnA9qpp8",
  "key32": "3W82mf6NLUQ23pz5QpJyHRoyjCPUv2sYv6QFNcv53MJLDXyybzTGtK7suR2KHukKiET47kCkj1ywFdpgborW1YJn",
  "key33": "4DokmwHqhRB8Hvt8k2KTSH1uCrgDtr5owvjYtM5G5mSrHTeqkR5YTTY7UY69dsa5nBiwrVGSWCA1TRSxJLAepmdA",
  "key34": "4Fmg3ZX2QVF2GJr96iuKWtW7tW71Y9eVJ1YD3qZ4qd3c3hpUiGeYLm9WJkSh5fBpxADE9CELZQkmbXLJaGyU7Kxr",
  "key35": "3VJp3x5TJfXnXBNsvYEM8aXS9t6qWwRZcxQfZ3z6FteAWYi3UrpaWwvKBU2Z8i5CEBTEBTTKUEGyuFJVszr6HrfH",
  "key36": "2PqUeAh4VxFy4Lk5AKfhnEgk1T7GQkrJmFHUt8NKCxV8Bpm4WkouRfkaZdnnTEXARmriDpq2KjKx4KyD3vJ46bxX",
  "key37": "5xm2feYxYFmgYX6wok2zHWcUuiY98p8xJcgn1xqxZE15jt4pxZKvU2EEe2zB7k3iHnF1oaQrU2C1wD4pbTreAXhL",
  "key38": "3MnBPPhpchy6vJ8A11GF9BoEn7cezMdrKKFL8AQgBR9vvj1K7zyBPyvGaoo4nYVWhVSTxaTKdoweCJ9R2dbWct6f",
  "key39": "nwgWJeYRRPvV3Z99LNo4d4kCVRBGEVxgWDcUBudjTdJx6UfmH5UmVGAsy5aY4z4KkdnWspWpffKBh1bcF7koZQ3",
  "key40": "58JBGj3wdJrTktui8docHFbt8QVHaSixkz7XfkDkx9GtUtAK93mfThY1GZMebhdghrxqdusWcr3GuB6Bdpk6msYv",
  "key41": "jueJReJua1LeawQ1MM2vYcMNpE4wwVeB7rSh1xcpMz24hoYv4uTJMnuMSSqGXk77CVYsBRBS6Q6deVbFGd79MMX",
  "key42": "5L462fpEUKJPijtArSXniDmjr7rYu68x9xsLktE3woC5AbqxCUxoSCwRNkUkjmh8wNARigCpoExwfXYxTxjBB6Ei",
  "key43": "4iXnSrfE5MQHxUnxPPGg85RYmtmPA495Xkjeh8jmTaQAKgK2hQ8igwLjGaYWkaoeu15bZMqUfmFATBLvmGsaiKFh",
  "key44": "4BF5mqqm49svMKfN2HkGJZKv8BxCmtDW7T4oH2sTt179rMHDo36B5J91VqcTGF3RTdZYoX3sUQSNWp4EJn8FSBv7"
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
