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
    "3EfSTX6Exo2NpgR8cFp4UnCHiXZaubNovzwx8UJHL1yLCALBFsEcVk9KzpnvbhpTgJPmCzxGmuyNmjjZMPWe6hd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gR4Y7f5hCkZGy7HJMnauGzRi2GuCDtZq1QDWFDDqdtQB9gt4WzonCBo9rxRoeKyWa8b5bcoUQhZ4nAD84zerCka",
  "key1": "2eGziqEG4SruF2sy1LqcGRLqMtscHFTQ48UpVSb4fjMYbctCNNKRF4io4cGxRzgREvnmriiKs9W2YsJw6LNju6Hq",
  "key2": "64D61mjwQiuuBRYj2y76ccj764XP88EgLEdL7cmFY8QJztknxApqdEFxFQbScfwKWG7iVLrx9G68w75fnCv34zb5",
  "key3": "3Ve9tib7krS6bSLe3Jn5qDpwgie2j678wBwDKsaNQHesc7ja5HY8TJh1hY2y2LntNnkLPyKaSB4oQ3BQCZb7gfX7",
  "key4": "4QVZNkKU7at7U9UsyoGEFm8yZ12rsUmHcNpJTuuZX27VxRPnoHGsfKVTurrGbMt3U7Trx1Xs1zSpE7yWLFKX9Tfj",
  "key5": "5UivAVW5DqggJw1KDC81yYKe17N4yv3SYPcKStBuRKAe5mjEJGtksrftaJEV7YZgT8Knkm2JEoD3BVRXqLsxp3MX",
  "key6": "51aGzgH8PshNoM5sP3U1HfqubKDXcYctfZMk4TgcyeRKGtS4A3akvunYrK9ct64Qogz8knJ8sWoxiNVjUzrFCfRh",
  "key7": "3m9Fo9nMdKT4fzdQHmLfiaxUkLp2QUSATiKknBjPSKPUntukBnQ36hQG1iTjAQm85df6mt6gFTnim8zdwNUxuFNm",
  "key8": "Mt36Tq1jgQGuKAsrkBLArWiY2UCf5Ys5hCbKj6s4SXbxR7BmSnp7xWQ9mXucYJYRKBqJBZfLVRatSrqmtrcDg7q",
  "key9": "2zhKvymKZ3DV63W81MjP4Q1bbFQwyvDrMqUDTSoYAmZcw2ThUiEpfR45jAF21m6C5zQ1LcG4hXECaP4f5Dtrmce7",
  "key10": "3pDpseP7GbENASzhvUnriggqt7CXE2t97rrbKWUZVmcvddrDS4zeiiTLjvdRL9LSHvkrSoUoA9QRu5YVtrRg3FBJ",
  "key11": "3bxpN3mHa2RvJjWzgZ4vVePFjfL6UdHdFn4dSGMbLWwC3ge7K4uN3N7DA2R4KXgEC5bptnbWTn1nX2yGDh5fZEM1",
  "key12": "4QRmV5ng85Yks29aWdpxhCz68Xcy7kihfJiZkvZYc39uUfctaKLtpcFa9DMJGBcYQazuHmamyUCbJXHXgn7H7mDW",
  "key13": "5kJxi8QBMzS3CSZCCXrwLoab6s6aiWcuscpzYkxF1QotTfSykijW1FzxQxV4jMZgg4mKGyEUjtB5Ei1GZ63x7Y3g",
  "key14": "XsKj8ixiGMeQSaj1p2emjg5vs1bL4fXZjsQgsjQHVnyzQzsaHwTuyBoU6XZ3vKWHEjKvN2oF31cLvdEBtc6yM77",
  "key15": "3zrzKxD6UBhsES9oAHPx1UB8vF2FR5WFZKR5nDpwEKA5GtWfXBtk9hYv9LLQXtmUYj1C1oeA4urrJrLrWkntQ9wp",
  "key16": "5qpWCUP2EPdt6MdBi23FwQBVFx9SbrrhABD74Jp1CpoUh3ExgnXyYpFzJVZ8KH7cWmp2A16eZLb9VhvtkFo1BYWK",
  "key17": "64pLdhYk3rHuFRYfjMtFBm36wofXd4JP5cXtVuCuDFhssvzTVmeGGQVo5iu4LxE3pjxCc1GXbZ6whBquGT5F21Kr",
  "key18": "3zfESJ4F1kZqrR5TprjRXepSD9aWSc8zPVWwGcBkacuj3oev1G3ymUhjnjT9ztrxaFfD8uV2P2fXpVRea5WegTRh",
  "key19": "GMSQuvQPYKNNqAji9bh51HcqGQ8TzYztZBTKg33hPJYENHVXiGr7gPSf7hWZC4Hvsuji5HZJfmPpeZU3orFeKqG",
  "key20": "38Z57WfXMzL97KpFQBGco6jiYupvt91e4fxNCAdeU8xa11jqRfwdFYMAb3F8ndaLXppKppd2KDgfKqwRfKmukzUA",
  "key21": "7DcLNjRPy62hqN9UPcY7iv5zwBVFYVsL9hSvkuofVdimRWx3SBJ3dkGdoJQ6RnTGJ2eMjqCa6CVDBi5UVchyq5s",
  "key22": "3SbDSmzjPxjHvuwXz9YD8aw4DS6ED9cc6368XFGys9SupiYESaS9xA7y1Cize1GS5n3ormed62Rh6ph8Xbrv4mrv",
  "key23": "24v46iaN4AdTujZjMJqi3kYdrqKZn9cc9zF7Qc5pE7uoBxYH6ZULTjzMyAG2YLP8Zhb472cfdeokBYhat4DgwgTD",
  "key24": "5fskmmaWyBApMfg1RnGLpqZ3mDS77YeNzvUUobw9snV97qSS4U7kkqgZp3JTbqN9NVwjXAXvJ8WwRvC1kKDaLqYo",
  "key25": "2T6D2vYb8QE7wWeupGeKTtNsBh5faH4C3jSdGkGoPaMtn31NyqdSxws8wQcCRSAft7phzkk8xjHK36rrm9JDzgc8",
  "key26": "4DSgtjGhNvYy6MRqcZkKY3iyWgmJUc1Ahq7HL9rPeXn5vjafWGP6fWUAUpxmEPcqjzKJYuh92Lc4fpkoawZ2G5dD",
  "key27": "22E7nUP82pvuJDFYMmom9DM2MM4ad4qgX4cCQXuzeGq3ujZzbsGZk66zfh3QQqdZp51X6Rwk5A5MKDyqBQNhSX9i"
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
