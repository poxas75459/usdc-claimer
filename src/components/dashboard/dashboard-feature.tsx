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
    "zof6iPmpR4FPqUfQToHs9wnwaLoRgYtPvnpkff7ihS5bnAyQngBgWCzuwCFYbJxoousTHivVEcVvVgTijrPBnJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJYzRd3JBbswX6goA8dbViwmbzLkWQ1gSbY4fiQ4CRtP3XQrv65BZ8z6NE9SWz3Vty5mbZty3uRrocy1TAvcq9r",
  "key1": "5vb5jGbui7VCxwbEBpvedkJZN1wnnHJHJ3Jmtai89f7DXDA1Czso5bpzyJk1AWZHr53LdAwZTsMj2MqRAxvsoDWf",
  "key2": "4F5VzSQwWxxF5BVFAVPte4PFFbbcBtyLQ8oEQBGBGKYum7p9qAiHtGkwEp9dCWU2uhg6LP4jE9n76Affw9TRbzEo",
  "key3": "4e7Nhkq8MiGh7bJsdUjJtRDYw5uTAZDsPpJkMjtN6G9A6HyqQpTj8dUXizRsV7DswHsS8DJj92toRb7z1XKug1re",
  "key4": "32u4ojQhToULy3yrT1UJULq2HCxzpqvSMxE4KhrRq4X5VYR7rdx1wNX9v8TkYrG8eoWQe8uMxRaYH4AQdALLbRHp",
  "key5": "4MbQrmhAMPZCcCLGLvjAtMBKskBg3fCh8QUyXXHE3z1cLV8wUAdd8iNeGn5pzbSZJVL6vZBkAb7oyJ2a5x5PyKFB",
  "key6": "oH29Pxz3cJDfmp7nks4q2qg1Xg7g9wYqBWff8KDt9RvkCtWiBhKZBxjnjjMi63MTjosQgBWPKHpuYWqbpreKHAH",
  "key7": "5GoeQ5oTqqv58Ynib6qM4jGaeAXr5MFMU6KbSvXjBSf7nHB45JXmHVnyij7CG7QyUTgAAtnsthwg1aP1EMTSNRq6",
  "key8": "2nJ2Bdh7BvAK7verU3SruBRfXMc2NTPBb6UVvjfhBLsddRTeVycTRZpC46ycmJtRK5Q99q4vNJHyRqd1Co8qoyv5",
  "key9": "1nkWsPmjKRSL24KSoZuipaLrp95zGMJQL5k1gNzMVsBRr1K8CMCS8MFKPTghHywZbV3eEh5Zv3r3RFqZctTdYb7",
  "key10": "4tXyjAGZHuU3c8NtY4dNVf2RoPJdJYwUNMMATgqeQdfxsTo9CdMks7JZQYyE4dLFn3owWJV8SoQXWekiKC8VcDJz",
  "key11": "2wQUUJXuPRrPZi8w4fp99N1dAzAP6WLnEfLS22FDS6UgNbmy4uiaQc4tipS3bUDbsdNrjpziQzSFqqdJwqvVe6k8",
  "key12": "2LNB49JVsdXVnU1j4QLPtU1oN6UVdDjzrHfkNPbCnHPUjDsmwpoREq9CAvMbL3FZ4QCcpMhSrEqYZYdXrV44gj11",
  "key13": "XWAYczicHJwBinnj2i4iUBHnfaGCyVmyTZf9yvqJ2cvovHcVDdaMXtG1otUgXAKxtzeUdD3M5C94M22gvuCFHgN",
  "key14": "22ktyGqgKcT8R9kDDqFPQ8R5LPKjauGxbT2he2wnmoz87Mb6sP8p8taeSzMoWAUWTEcWaxkRmDKFUiaZcXigXYe5",
  "key15": "2JnBn6bXdfMpKUS6kutnmxQABzqisV2yL99Hd2oJjhXkbuKTb4cCDWVfpDxB9yKix3YjZH9k48RuWJUnkr9rpQMf",
  "key16": "5TTmdcxejZF3sqWYTrcM6JTRG5Yd5XhfFjx149pmW7qFyYa9dEVuD82P8HmpqzgEyAyXMVXvUrdrMJCgKsbC7n8T",
  "key17": "3nMVYeC7DdKFobLVyH7xTDKceSy5SLGtPwuhHgt8iaQFMg3GwiuzX7QEZvfpDrLugJ6Vt1XDRoB1HJNhmpmELPWW",
  "key18": "4529F72EVGPUkRcxWWeXZ3hNgvfumUy2ahkQi84XJ9faFaBy1vf3pxUTVhKcHfjDTDiAU4vpPBGXcXnhG721gFah",
  "key19": "57mFRs7mDzXySxJVcsCziwp2MysVB1t1FpQjWPpXfFj6CGjpk8APtH7MqLrH8dM2b1WXkYpc6zc1ZyZWojSzEiQT",
  "key20": "3ekgNEZpTRuvVNiLt5jyueGNVxf2zbGiTZgpmDJ7NPfevdWq1ESKEoFMDc7PLrWn6SvkcjMJhQr1eq4UHQcerZkA",
  "key21": "26C4tBZXm5zLhBFNUA8iFKCMVwc2H4AcF75uDZ6MHqU4yGdMk5V8Chb4BiE1w9bEDdkWY8jzgCcwzmnyWj63zkqS",
  "key22": "hxgkZbgT6aAWc6tyCxDmzC5D5sYFPom7DvVWnwXbDaeV3uSYEy71bT8SHUex6S4rqNkWLnbDfciBhDdBJ68pNwC",
  "key23": "3CU48GzzzvzQ7PQmMZBqtKZozMg1KQh46gQte2n9xdU7TyhYNMRgHH8t4NLmZpuFq6nnbynZCw4uwsmCs1kFsPJq",
  "key24": "25mYAqZdcLyudLq2FV86WrUFrU8shxWqDFLygAbGQHaXjSATCD3gx28PsuuHf5LiZhytDxPYqicnp17g6JyCfWHK",
  "key25": "5CXKaqzuWMjPbMiRGYJZNVBn13tabP6f7GJGgwH6n3Jiamijz3EK6yB8n4VaWP3cGgLN4WvkxNVkpWF7Kcv1YPUU",
  "key26": "5Td6rgctQY2QCJ9fz32scSFsqLDspnjjUK7mJ6RHtAfDq9aZ1xks9HxowHMFs2gEBjsAbvqMGunKYiAKA5e48eCJ",
  "key27": "2VyVyPTSVm5nVbKPgukf79YnEuQ6dM5pa45jhizSJGM8dGR97hmK2hhMiyTmK7WvwG2UqVG7ZXGec8oguUnQ7PxV",
  "key28": "5UCfSFAyoGZEHn9f4mQUkKRXoLpF7mB7YY4Y4pfZnrMXfCSfp7rqjVQvHhACGLwU8ah2rnWa3w8Qs2T78gdt6PAp",
  "key29": "3HywwDzaFSskRSLQfr5qLARWwD3wM8ScAkKRqTzWmfaKpA4Rc3wQ3dcc2AgQFqBeHfmdhQdo8x9VaTp29RS4TbJ9",
  "key30": "f2nf1Fypc5yKRcRW19uXWjTc55n9KyyEF3ebD5ucY3ZJ7eEoWfiN1B8sFfoqWQ7vDRni3DadLpGMK7cbcLbGAMX",
  "key31": "4NVeRUC6wjCbJ3fRz3V6quert5z9sXDvPdd2FBNSco1Eht97X41dVmAnGqg7Xw16rtjEy8uCStqNDS2kifQSf7Db",
  "key32": "4RenCbF38uSjuVTVzmTBiwdjgkPqWVkTtSwW2Ay6CXJNmTmX1NGqa9mw2TiTDvTi4zUdf22WZ7fXDJ6DuYNkaMYb",
  "key33": "5WGv5qCUdrb1Ent4GRo2kGc9YMoc8PQNh1LPf7PZsoSx8qxA1M7Dhp1KSqrzGbFdCqgoNEPZphmnGXrvb3s4seLh"
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
