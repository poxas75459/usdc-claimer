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
    "4zrtTfc6kpeoDVmRo8BrvkVvDGWRP1oAAVfywBgdW4LcwFTN4ULrzNa9dkVaGu9jnPpE3skUA4UYKNvwxoonCzMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAeiCkt5wooH5ertSBUWdpy66AstmUKyeFDorZJTorQzihF11fgTfYZqnR3V9cMXae42z5rgobtAzaT9ondBrwP",
  "key1": "3KjKYjQSPgTm3DgJBWu33VJr6UGDsTpjPdd3YLQDh1mPYZ7xpJTKNcvvHEzNsAzTmGbgVPs4TVtaNsaFCeFTvLhB",
  "key2": "4uSoSYGfpiFUGSXHArM3VLbFJshZbpfzjm21cqC69t3gV8XXvGGZCMMGnoydzuMBuZ85vGC84rUNPGaDCQq3iFgp",
  "key3": "3SiAJiLb2taHfnCq25sX1YT3VQZos35CbLGjBHj4ipwKFotahKB3mMsnMi2KsUmmnTEwhjT2woAyCs6HDiQqikJY",
  "key4": "4x7Pph3SHBVDNu5UUkGUQiKQ1ur7KBc5Y384VZo5V9NcPBWcKrQQ9gMCy2rTqM16aJcsMjmxBdR4nqUEYVRWL5Bf",
  "key5": "2Rr9ac8q8XW7nK2j9sHNQ4JDuWFcJojg8k1vxCbdiCoYnefuDJruBXJJysLkgQZt8tjTKqMiGVmkuQ5drHDQz2dQ",
  "key6": "5FF863QZ1e32xbFoVfaFHeDUE3JWMrGLKbwf6uNF3sZPvsEm5Rz8EAxnd1fioF8fbC9tPeXXGuLEMNCxwiSRdS6y",
  "key7": "5DzNVnybK82oGhJ8zuoN46PQbewyqR9yB8Ywv8sU8GJMVGS5ke8VSkdc1pCzbnBLSoVcnXAHs5NVvfHiWNtuiLmn",
  "key8": "uwGAfGzCT3wh3SSQGRHhxB8vWLYT2hpBUhtCUt2evZ15nu7EmciqEnf3Du28sqnhWbyZWVjWeiHzRtrXWAM5GDy",
  "key9": "5zsbii5chrwqZKNsotaP9rxP6HE5PwiBsGpQEegzUGhBh3wsVLEhf9fEUAie1UKdy6A623cXy6UCbKdQ9BzrLejN",
  "key10": "3nEkJz4iX5E9qk3DJQRQAMiguK9Bd74CAigXD1NTW1XdTU63QWzn6aB5JMYNoVPMbZGhGCbQXRRkjFDxa7vnwQQy",
  "key11": "5Frmv12t9vtaS3BQkk9PmoSXbQtXL6B3ykjvnFUAkpiv3qbZCSRBXRbhCAoa8bZqZ98CGv4N8qq6HajzvEzjwy4W",
  "key12": "5aNjyXTFpkgXRbBt2fBgZbV5yPhFfb7xgs1r5yVSy3fiZbn1Y5XPD74XwN922xvGG7nx4obGmLBZqnTLJ5zZsNNy",
  "key13": "n6FcWANJjRjksqrV2A7Bi98J2NC3nk7gcQ5gXHUnXhCR1LAd1VeBZQ6tfTKC3iM7VPw2vHjFd5cvkSHD96j2bYn",
  "key14": "2dWsKFHoTf7C463wdTE9n92XPS5JJutQmTgE4t57edPiM7552UV7BpZtkSo27czVZyq1ic6sjDUwRUzorpCVVfdm",
  "key15": "36JAjAkm6BU6mCBtyVUjt5shkEBHeVyGHj1fDxtGdq8AwdXgAzX5JaqceXpoUgwH8LRqU598kTQHKPX4sC9phARA",
  "key16": "2Lt3Uci2VST6sFQdUZcgyV5R9TN7gWC5bNmbBL9kdjCfW5cAT2cMp86ztngJKwjKwAiD6Fkk27pQ7zYDLuxERmpB",
  "key17": "3tNa37BDdooR2djqah2v5hncnynYmFmT5JZf57qb9wbnoLajnTWs1uV4JMcGhmDuLMguEEZfLVFVrE1b3BTdebFC",
  "key18": "3ESE4EfVEGo5XxiXBzbZGoJsRjxdfQeRmQG3bTpYUqZMfFGBXLG4r7usxJfNnEjX8QAWAKPzFACPdZunjbL4wHyf",
  "key19": "4htaQZdmjPLHEAkL6Hqv3SpCbnYK2fUYbsZHL9mvRdfSUuujisABg78HoQS9vAhcr3UHRWzTABefDwEMdXB9X1RT",
  "key20": "46E7K9k7oSxZUH7YQwgooWVSjCU6Csm3MYdHjxgBbTEXmYtQ3s5dibsZK9Uq3tzcpvpMjzHVJnbPkMNwbEQYEJto",
  "key21": "3moS3Jo2kbSQrrYNGdQpv77WZ9vkz5ZMjBTPaAXb5Mu6GwhhNBFZLeZkyxmMwK8P8rKk2JTAiinko9p3GnPYPaRK",
  "key22": "3YDiAkJEWyWKCVshjRtzAzBHtfwfNb59GyKZYDLdjC4gBsM2R96s57ciiNKRSpfeZVLh542tTsHjqnJbdNZc8BXW",
  "key23": "XHhHaj9jrwwoYd3aBze9BkDc6fkaSYQHnTkpGUAdxXwdhDdaJphkrp9DQcxb35GYpXDf3TSXCxhX9wZA2wrKg93",
  "key24": "3GMjLKiGh75HrzAajSyo7j34PtwT4JVWL8bvdCgD6cR9piUpRkJQEvQpgmcBrDeJvuRkU5J5BaTogvKpkGbZ4hEw",
  "key25": "2oxYknqDvxzE4ou3xKnCTmffUNhMTofPJqHkBjv9HcE8ysm7A3pQeGGUVUsKHdpUBn7n6uQqAwDBrJDQMjBYj7f3",
  "key26": "4ZAUn9E9KYki3cZzjpTKMVJhPqU6nm4gFkTChBPUi5UhorwUp8Y9b8pLcMmeT92GVx8acyxZVQtLFkpdSds6V8s8",
  "key27": "4TbEoKVnqCTSqL9x84SgJSdMNNKgrR3P7jY4VgNCzR2n8RxX11thNjAoPUx2a4bsA1U8oEZwKnjW99pxVTbt5ynG",
  "key28": "2KGzjrd6KYsjkyMge7UzdKdTbCMQC3cL9kMhEaDYDbTRxhgPtAmSHMrCo7sGWdaZGv8hxf7WQBajrNky2MdKwYhi",
  "key29": "4PUG4ZRHpf577dBJ1sVvLy9uDuNMA4PCU3xEaRuhKTTx6q1G6MXf9NHT5WwcyQmmm9Z92trg7KqcWKZKZmR6NSWp",
  "key30": "4aTmJP2qxshoZt3srQTrzSwPQokPzqgqdjX4mGVSEeWG8MDwByQEg5XEDFoYAKY73zkyFYfpGiGC5Qu4WPSihLik",
  "key31": "2cw1CiMDWJFyXKHhcvfnvnCg7f2ksn5pvo7xWbBv2GATu6HWueEe9wXvPBeE7uRyTne19h2kpA4MehvuPkQ2m1xa",
  "key32": "5T9yKVmcoebssq6emjEpu3FWXV3WDM2q7K9EtwvhAfrh4AoydY6nyCRj85YHMFJXAmsWsUN2BWZ2pW3AGqBoq6QT",
  "key33": "3742kma6itpftWpeUnQtn6zfrBHvJMpKgXLoXsYJJpLjVGc38p7nDY7dwP84ryEfLu4GsR2DqfwwhsigLsRmgFNm",
  "key34": "2u1skwZJqTAZ36CDFmFvcEZXJeXNmDXqYGiJFihxcvVWeoeAmW5yhuqK2rgZiTLqu4C4URFC1HSUfBwsDyd7xQjw",
  "key35": "2dy87Wda2LmNgqm6tbuYjKFPTERGUgH8wAz68B5uUpMdvCvujeVCAPCaJ32LyNW44nYxbSfu3AjnDaseg6c533WN",
  "key36": "vBL3DerCqDFCsfd6m4YRCqGB38wJ262eXh1NrMALpdoXvfFgmajaVdt7xjUMRC27zNNbBuLKxetF5x4s8QyFfMP",
  "key37": "JyayQ24bUhB36aEmBsfS1UcFguvq2igi4RKuPzYVMrYWDkJyYXikDWZiACmeLrZNEB45rfV49LHaV9U9uythN9f",
  "key38": "57LVwSuhRXBcS9BGhBQpfXjxjkvi3JMptuKUHunHGNVRa22vK8HQ1Yh3eAbYzXCvLF1HKtGbvKfeaiQJLZF82icd",
  "key39": "3XzhA28ScztV8NnJQWqiZVZ4GbcynHAY6EJ2rk8KHgAHbv3XE9LcPx3h7DzHV3KZaZCau9MWcJ5pnzjsG41DexTA"
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
