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
    "3BZaCdFL6iBU4ERuv1ZmHEQcPYpNgN1PqvPMxNSTWxiYKjHJmP76ooAsjtbJ8P7d5McjxsUv8kFH2w9dkMVpdkkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "673vG2Xz2nCKvF7rPyGUX3zjgM1tvJdsUr56bm2GdXsaGwVPAUaLRBHaiBopobnMs35pufRbFm77cMhBk6mYXMFU",
  "key1": "3TPtyKxbVE32sRExhV2scyhEbaun52aEQgEyRkNKFhm28i2vfQe9TxEdcPDCcVJzmK7bEo1YXpzcemq81y7MUjTV",
  "key2": "4jaw5dPKrUGhsWtwcA1ZMvFUnwP7DJAMJfK5xexkTYkusCsccGpeGM9Zd58zrk8jBKVdY2AehHozYTqRyj6GAEVd",
  "key3": "3zH2KBAwqNqoDRA9c58zMTbURsPi2nf5orf5mwEkEcaJT3UcGSdvpWjaPAFrgsNwUgBwmiN1tQk9JGQpWnXupNtn",
  "key4": "5tPaXV9GWgYbEWModjhidsmzx3CvkKKdgF2dH7dDWSTcXinQhZrGhkXCbu3ZxJyMLHRjhubrZzQj2nzuhoFjBzuB",
  "key5": "2pKkkSujjKKzrixCM6oJreK9sv5QBEcNKKwUcqRAWoFr2kJPKSeGfYdbi7Fbc3HiMAs7h9YHXVHAy4ZjBiPpYfir",
  "key6": "HWpraqPU7UHqskHkXRV32r4cjDnfWbMxB95mg2F1hSYCHYxEsouWv2dv8iJS7VopiLxknZEc33dotsJVxT5udKs",
  "key7": "3qFKpD7P6xS8kr1wjsySNTvQRkKzDsdwftPaHctHtkx2XWpqiQKuvnZjEbwtqAFkrRmvkdV7bHggQwVGrXbPGdLu",
  "key8": "5h8UBw2dCz3NMMJuzQ3xrw9rjBwpzoxWGC86hSAqPrcZj55GJuNPQdGmzfb2WDkaHf4JcwoqUPegv8JXiF5j5LhJ",
  "key9": "5Mjgiy9oVwhQ8azs6HTJgxgTj5oHLhjm4rLK9S73bMNV4q6f8iWhsbbcJDzFCw73c9EHBmkcYCC4JszHZLuJdVz9",
  "key10": "2Pv8mqRVagDvDqGvibzhUC3CjimsoPo5hZjymAGC815acEiBhmCv3EhgSnoQbPn3qiYAyBt27FDstNLPoFKzXh1z",
  "key11": "3hQ6BYLz5Qfoh8TF7sCwAt4AsSfRLYkhntrLphCmmArcknvgKXnwZt31uAfVwnDDMfTznyaNEA83GPpA3fkv51ji",
  "key12": "52MLDTKfk3bxRm6g6YQyenrHkSYfmjVef8QAwVSmmvKYdb11F5DVukLk6XbXpWxiYVeuMBypamiTBrTfsbSTLotA",
  "key13": "2Gx7NpBJb4PNvASZihMaqypqGiagCDMApyL4zr1ofcuKGgdB9TwBV23oxZB6QEuZciB7mDLEHg1GxscvU3z56BEb",
  "key14": "3zDfdYibKPVVqMRvn7iwtkbZiLCqyJQxCJdiRT9dD2jTSvajWDokLW75dS86DxhEUXwvtQ3CDgic1uoQDNrfx4r9",
  "key15": "5i9XRJPMnwux3NH6W4QAWe9FSuZBjrNhBbzyHxscPo7b8LophdFoFvLZzYBcVSXvxHPhR832YE8eA8BnpdjKJ3S2",
  "key16": "36ZenKEKvxTbTzbaefMhTtLrZq4S6hJbYksPNTMn2QvsbNNTcoegosypgz52sFFCk8YbGVuqZBKXSs8QczAfamok",
  "key17": "51tPbnNmBJqb8ZfD8K5VLTnoQqCPQU1WHYR4YAZUJK2Nu9nGKeWrLEbPSUM4hD7BjdZ2ceEpGkDvH5v4R9qQ9U1s",
  "key18": "2CnH3RWpud8c3kwQvw2oCfdYY7Jh11kKRnFSZpgGzmjfk3tRMXkE1Bem1i2strQWksdoopbS1j35Q5tSkd1WTXpa",
  "key19": "65UmNuncHMTSaGbA33GyXvuktz1vD93tPj6NisYebQnjtUMiqRixskRbfc9zm6SZfocG2S7DcYpVSPd99GdW1B5u",
  "key20": "gStZaaqoa9sTQJcanaT8F5Bh2EAkW425Jgq3TbcaKJvhStF7x89qDTdEwXBQfgGfMW7z8Uq9YrWCu4C9RbTysSp",
  "key21": "4SyHsvD7JAysuDQNnWAaQScULfEps29cH3EDGhSUsoZQcYGYxXK9ieb6JBCWfrcDdFnxHGbPWtHp3TCXgaLJT82T",
  "key22": "59WJfnKsX4s4YiiVQC3mN3jQStzAHiDoY5NbGmmAz917PkroreB4q3Sfcz6UHCTgLAzPiBjHG6yQARkr8Lh9e7Kh",
  "key23": "44c7hPuL3UyV3AhRVJSXkSd51RRbQpzmWBMFxmNqxpwtimQzP5oW8pNbGDbibY1SA1m6Cbe5ZXaBb6bd7pGvXtnT",
  "key24": "5g44K5EUnbHsaRX5REPJzQCzkC7tRk2WpUx2ksvPSzXoNGTGXRTGgyCo41UduCsM47yeF18GvAtUYZpZE4LdmWkW",
  "key25": "5mMQsEHgSX2SQPUayE6AQccWaF5j4HFk7SxEgPtN4NALhyaiy7eTeUfZjrBXfS9FkBFPufnEMGbaSrepvazxfVfg",
  "key26": "4JaKNMELL9bsNduQFsyiFq7aoFuCby2jxVUrS7FFHCA5Sp53PuTbS7MjUBcXs8yQouy53dGCdt5FuXEv5cMMrD5g",
  "key27": "2Mhmtrudpt4cfHohVQSSzkgkVCD7ZK3Cb9Vm2eAMgR6bZbzwenvS1r4kjHQq1zMfua9y2s5YyoBM7uYhsFJ928Kw",
  "key28": "2Es952sHJxQjdsKZ4g6tPQvKHaaUkUmoBaDYhKC5X8GC1Az7B4nogUuJw2KCSzBpv7af7CSHJ18Z9exgCPQJDKpe",
  "key29": "4gCQCEgoB7wUAgpwXFVNeACQ3GeoQMhXMfKH4PXWGAPoBgX36QP8BCHY281L8cn9Ny5mKsa1pWyTV68fEPVYYfV6",
  "key30": "38VmU2RUahJbd2tChzqBsDRME9reTeTMviQad9u8N1mxsgh5H3diFadRSS3QTRmLWo5BrBsbQPrspMY2D1eER9A7",
  "key31": "2EcuBzPNLjoDu2Ag2QoG5yumCmytud7C68a66rJey9wZ3yhHHPM7yraAaRvhd5BckqBijcKTsjRu2nwu64X334o5",
  "key32": "YRoK451WuXMP9TYcbg2J1wnGYm2NCJRFnuCK6RGgh4BNeuw2uQQVucZgyWYV29G3Am5UhqXWzEe3Dg5WnivqhjY",
  "key33": "61GBXt8j3K8BBjvAMZBT7HEejvWR9phjKPGUWFk9uswgCutZypZW5QCegpfdoHMEECnMB1YGZ7QymJW7gN3asZnb",
  "key34": "57Gm3ewXjfGdRhvbuV3Jp9upJHSxQX3bW9oG9ivJSrsjA1QXgNJC3tF5jG9a6gvEBNRQHEb3eBSxLPVqiLRsrF9K",
  "key35": "a84kBmJMcMpME4JCXHZZk7GMagTSdNjxVavUxEAfEtmN2gRHVEqAF9yL6oaxHd7fRSgeJcZSfbfS2SR7tnFA2oK",
  "key36": "57v7HcCyzdmBXxcu5E6s5CJYJyYEBekVVjsU6huhmoPer9rFseHsYQsQ6EcGT9eykyFo4vJ4STRE2QSC14EgVQeK"
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
