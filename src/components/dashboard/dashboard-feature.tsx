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
    "3h6jDb1k7PiQDHvpJzhwXftkTByfUWK21prqQXWSnTK7Bo597FupkFoGrS26NjqvrHJF7HZKHG1jbivRaAAWvstw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKLiRbCpiRVVYnjxwoNmY3btgvqTjidks7TMz4bZUuP6gD7DX4km3gYAqJgNjs8CXrMmF48ME2pgGx7rJUpgKN5",
  "key1": "tKcxt6Y2XVbd2zhbC2EfXn28vFGiuJvrcBvXXBNTz383KrHRFjooJwvs575q2mn47Jtp8uV7hM5ahbohYX78bAA",
  "key2": "5ubhzYCHqRfiMNwH6CmfBQYFSGaSxNoYCfsfpF4btHPeoLCWaRrbxtkthf3J2MwqcdTeeEvt8fLcUc3UZUr35nim",
  "key3": "F5cQ9zZAgxdPu4mQYfJuj4oagjE2bcBuFkUNHYqztmfPDHVXxL1XJieDbungPKFt7JseMg6Lq6czzX3Dtx67SGi",
  "key4": "2vrTiqfkYoKP5rtkF1NCKcYDBTDB1oQne8hpszyzsNBbSzbGFAEsNR2gdueSY2RvXJw5PNY4QsHScZ6GCM1VKeEi",
  "key5": "26se3HShT4Q7ZRpA3855vjuTuTTk824XcGkggVZjcsUm5inWyQogLNsu6QEYHrkhdXuDXcYFv2R8kb9PkbmAPVDS",
  "key6": "2J2sS2pcqHYLb6o5eMMY2fLyDvkA2StvaFNvHcfiqNXrUTfD9jcBa3dn16LvaH3mcLLhfAnqRDDXjyoHZnCbdJVR",
  "key7": "46GQArosyUXtmQMouGwYAQTx1Miwc8LwhA1DpiL7JRpeVJei6y4i8RbEUjZv35u3XUxovQ9gmWddCA33mx1gfDd",
  "key8": "jLY6iZc48mGGrk8FCXhayGNNK3iZMxx9RSnHHbYPCjRgh5Sw9PVL6RgMFXniivtFSmSNvPRQCTzXnXeSMzDTYau",
  "key9": "4aP3evFdKr8hUbJXGdBXfkZ6jVQdD4DWCwpZHnVDGNiPDdgTGKktC6XEaXS9zGQhaQrzzzVq71qfF46PwiAUbyVe",
  "key10": "5arHG5xJJXKRYxtNBMvZXFLyL47aypctizPxzyGpHzksknufnksQy1APtMU29PGpEQKdnwPD5hyaBLQozSULqryR",
  "key11": "2SzWmrLhZfmeBZNYeF4YKL3MJoM4A2gfDKWGmm98uZybkg5hN7UC1FFKdqxeZF4heKdzoRxW36t3Lu3yNVdQV5ms",
  "key12": "3eiv72RyEmx8hxyKK7H7FAK8VD8a7WfkSuzaNLPYtCCkkT8X93MymH4DDb5t3rdecWHZ9zEMjvY4vjRZxhxmVDDd",
  "key13": "x7sYvQ7E9T8NZxtMk1ngs99tS16mU7sP4nEWaBNW31mJNjtpWGXDkRQATaFwy5BB1cWhFzZbe2KeB2YCsVQ1wLe",
  "key14": "2qu7G6J9UMw6zikcJJp33WerXE3z1r4DQ7ALJiPx4zNKTc6Ea3AkofMxqWQfXjrgKvwrfD8KUkt9F4qYKU2M6PE7",
  "key15": "Y6unKfGFAYNwwGqp3EcrjmfZSaB9Q9tADH2p2feNc9TDVvVeN2BGG4bZJy8jYHYS4QmvpW8u3WKUpzgEmHHu5xK",
  "key16": "GiFXQSW7wuv6V6PgqwK4xLsudAocp5ZMHpsCtEZ2wovevp64htFs5REgBDoLqe1PXE5kUfwLRiEPvU5oHHae48L",
  "key17": "fY1fW2n3KJSHqSb9N2jYFLVa5aRJT8LU3sw4PjPqQb21HRMDeKFo9vc6m8PYyAFUwczQBHXnzXQFSpQZJskDhmF",
  "key18": "2HRgUFhdZ39LcB9P46f7E46cWKYTaSSFv7uDyj1mTH8LhSz2B4KcDMZgqVzbN8Ji7gETmNEmnqYWNkzD59Km7yS4",
  "key19": "41G68n97EZh2v4E1VHZRQVBTRWdj4JRxGxZ6TUThBAUTDBPxrrPspieVjZvousXxsiLyxfbXqc7GbGcKt2dQxAm4",
  "key20": "395PzbK8SCfLRcBGn4NFPCCApnP8XgaaPVsGTNWR35mFVyRgyWD6WfrgDDtp3WUyzqEjtmueVUQUV2FP9AMv2iKr",
  "key21": "HErye5LYgrmobzRKxfQeTXPJZ2m2wZzFCN1ijCYYwy9JzKeSBtzhjiVqrK4d8JaiA5SGL6dLHY18CMQxJUVujiQ",
  "key22": "4sjq6JuVprr6QM7ZeTnCoD6om1TxGzLDGiiLSGSKC1Ajh71cUrprXyuXspobe1RkYxtFFyCkPzrT2B69mtgZBdTk",
  "key23": "5Lbeo51ivCVHruockV9ULycotiMnbdmLNCUyhwBWYUE6dTGdENrHD8JHBSqNnzZMA2KgpVp66AvcJP5Wmu6SuxHZ",
  "key24": "5jkAHFHMiU2DUxB7JivGF5NpTXwPytc1mDaq8Bo6FcFfmi2udDjFF3Nw5XgmujcVaBKHC5ohHzjDS39D5RMsfXxn",
  "key25": "46AWEZh8uFd9RK2hFK3PhNgkuH5ZAX9XiyGC11XZANNcLwXzdyy6wyXDtEoiCuGcXkj6Pvgm8XdvhqbncdDAhykN",
  "key26": "4aE1Mspem6GQiWmZD8EccBPZxSzamGVETa5PwcvJMHwz2MB2jQAGV2PVgtvB7FJX9MmZhZy12dzmMbXrv8fhT3ee",
  "key27": "3FAC6wdtGT9AhjHMCNYVWFuioS2FtUB6mQgGRoey6AQ5Q7mujWNwGE46vS2x4ebGGc2EPPb2wYiXoGXSgGCXvjRQ",
  "key28": "5pETD5yjJnPrWrbkFivCAockKhUsQPtAz26wSj3PuJD4uBFHRCFhy2v2arYNa3v9gCoTHmffpbjvGfFrMBFtv79S",
  "key29": "3s6fFEyQziEXS7cxTTmVZ66kZgViEmtMMadCoomVDASCRiNYbd7gno2EZrvFtY3ZKiTMoPYDaGV6Yei3AsvqRD9t",
  "key30": "5qxjbaRmBTi9HAibw8VzFwzwpdeTBZaJVRAYwBieuUdu9ceqje3jPaUMbi3PDLdQCQgTDyVohrm8k6EDTggND6FX",
  "key31": "4wMLQQnvikDSfpXmWg5xmRnBTstBhPafzceuCSYxeambStHgofVgmpHYtU4x794ZkQYqBxFKxV9cb2F2UqZX7iEy",
  "key32": "5e2aRYDrcSbtYTUUw5vhyreC5QjpBjeTEuQdkhrUHaQ4YF7cRJNXRitJQSTe1KNe5sYKvxofuwxu59ESU4ha9BvW",
  "key33": "3ZDEnw1y7D1a1EV3y1SuyezoUWCNj3GtbEpWcV6BpAHprTeEV64dcAbjWnVmNXbyyYCJLK9JHG5eHaqYa789eMrv",
  "key34": "hKrjTyvUPMBjsMDTxwE9JwetYmSDdtLAVt1NXvMudQ18BMac88S38aQcnCJtEDdjeD1kBQ2anDZ6wzEAs5k3xy3",
  "key35": "4GdCyTu2SLEhi1uQE7AwVwbyW6Akee8XExULe3zHVkSMYSMZxdZdPSo6PPYRu4uUFx1Ds4emmo9eHDSSpGnWUZp1",
  "key36": "34w2txkHCZwuxAyQrDB1hbWoejmonLxCfvgj6bA1innFR4beoZB1YbqBFGwMeGM7ZKXd1g6gWCqZxbkQDy6RzUmU",
  "key37": "2CyWTWagLDAUZdhXJrw9SkKjnowjKriMhK769hoPBCBsJViEXESS2vs6qbPE8mYZ6hwT4ZxE1c5vTztJqVZwtp3q",
  "key38": "4uVLRwN5e6USK9UbcpWGPjKNMWEToFrWNHP3rN3heD2eneYhHLn31wPss36gceSJAEbb7z5BFVS1i8gKjcDAUVz2",
  "key39": "3wGmzeouW7LUaPEYpTWBaM3RdNavWFDJ9UiDsitgGb3nxRCpR8BGSmvupM8XQNHt4RvXtrbndVuEdwCn4BheHMB2",
  "key40": "5LH2b8znfXHwGiXfGdYbpikXejZ3MrWfRjaHPz3R8VYm1HUiyYVkXaTy63MYvbFkzm8quo2gteh9bWwA7Kvh7yLW",
  "key41": "38ZmXgVLHk9sxFGX8GAGLzqaEs9mkDKSoVXM14jp31CzLsmitvjH6DyyUoZWgzeEzP81CCjZPKKaqrUyTc5vaN9f",
  "key42": "5d4XovsWZzyoaCdVgm37n5s86hDv9fGQ4RAptPx9Y3krSboCUdXeenDpcMFUH55thwDHS2wGntt7BJfqWSLwDUsE",
  "key43": "2pbRZ9gt8dsq9UN7SZtYb5KzutHQvr3GrM6EB659N4H4WJmW8SYEXXWbqqvcBiqFH8JQGiHew6CuasnzTF4R3huw"
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
