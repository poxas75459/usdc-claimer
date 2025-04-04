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
    "2oZiejeCd2qkUxtCQbb5GxjfjR8Ac1mJ4PGigsMGJ88385T19bn8dMckpRYPCH2fFSeh4yahn3XyQQ2RDoRjuqRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XR6RGLRjV4sTcJsnsDVc4zAame2AFgL9sDNEHNvZ5fqjqsFq9PeFWhUuxcQqRgTYNEZ4965qR2XG29cM1RA3cWj",
  "key1": "38vaXeGb3T4ZfzN77vBvV5nZjQLrJ5yBNVSHaCMVtnVGsJfpREMcqXWgqs8hgF16MdXu9KWadXNnqa8EqL4G7nhJ",
  "key2": "3YtbXx1BcBCbd8o7R2oESBMn1UAJV7sTLx1QVYthhKjx858zN2kN4CsGcqAaG6fLeohGQJT5LywzGJDc3J8gLPct",
  "key3": "Lo6mTWoJ431gQVsDpFYNAgg1WJqxBN72DVNpUgYnH7hQNgUq95duFvv5BKJ7GJESmddtK7gWL7kfFmegFJq7WFs",
  "key4": "1DdXJELNddT1sePTNWFHkLjc9AnmAwHAG4KS9qSKdrbJk18WuVDeDTz3Umt5UXBiJ4JNQWmWJ1vkT98Moz8qsL6",
  "key5": "ttnHzmLPQmMx69mM75R9LfAYQqaLAiCKjyFMS8ZNcBsdvd14ZtqxES9yLtMN3FswX5cyjBYJVvugL92Uys1nm3U",
  "key6": "2EUFhCEzDWY5XNFRAv1sRoK6LBpNfoDSM3bGXyndRwpHhzdxsdPzqXGDTmXi2Nsujs8ziiU14kSSk1i2SHaNpS9o",
  "key7": "3fWc5kMMsRsdByvT3tnh16k1J2tFzMnkPDShneFToSHxPp2oTDzk1bJNYJF1xqC8TFUREDNFrSPtn7xV2BZS3k1n",
  "key8": "3gdm2w8LZQ2BU77pAkcopVc2agtS22Qb8fcpj1Kmn5fNGTcq2ZQSesdddFeCocSeSAwUFmHfKQEo87por5B3fZn1",
  "key9": "2o8SwYkEYLxB25LnpWiY63MPNPpLkMRzDVdtrsyMViUoNQLQbS7WWn6AVDd3fND9bDG3u7rz8sFghEhqCA56YeEr",
  "key10": "61FYSeUDv4WQsVHTUssLVJP5nmsXWp2w6Wqs2BwMfuViWVhD37NueBbhKBiAMFMAc5mE68Y265QJBrGdvfw4UV7P",
  "key11": "P7G8sqrAG81ibfaSjdEAu9mixvYTy5o3DRW22oyKJWqdpXJ4xkQ7VQQ2ZBijbsi6Ec9qqVCM4tkdz2kq1HLSvtq",
  "key12": "2tsT3tsue1RMrXGUwbH5yvbs5VTLXDhCCgFb9JToGYLZvjPGcuqLc66CDGDenCrvjQzmJ6oTAYNePYuQmfhbrhyq",
  "key13": "2pKEynj7F9dkPZZLYpw3xEbKWv3FEGWVtGMnL7GsN7Q39gbUgKM7PQ2mL1YwsuY4bkVo789bnwwFLNPe2jHZH9Me",
  "key14": "3QB79BYRoP6of5sakL8tXatPvbaXp3ERMPSeaoPYCHnKBte6QjtsBhikbaoaUPeaiN2WVckiLFTUrqBC71zwy3rx",
  "key15": "7S5br6zDmdD5D9rp3C5PvX2wpBVruE1itXjDVy27vh68p8o4Wung4XuLyd4Pf1bFr5t1MuCkTApR4McZHJBBWRL",
  "key16": "5h5rcNqqp5tZHQLskaRRaSFA6wKt4vUzPyFPVq1Jp62MutG2ec9uvfiG2ZHU9LwiQ3gY8ZCQGcRDLzxh2Mq5NBua",
  "key17": "3qvniKhP6LTeMYYPrWPRQ3PFSQSANPFeWe3jUUyo6g3Z8J8KG9fTexQr93mA5BEbQbzfMQMiGaSo6VD5LSqsrmQN",
  "key18": "2kwpqiLwdZcTC6iFXB6BWPSd87mg1zCUyUfABD2XKy4K6gv5Us6NK3Lg3FQxLnfGTBnw7Pwt1yyPwCGMAhHR4dwZ",
  "key19": "2mAyQqZmw995WaPn22tzh8ejTttNciRXYqsi96tg1WKEETRuVfeTo4rU4dHfz6UzSv21vSUMHKaJWLciBReCTnoy",
  "key20": "3WM57WDyZn4KJUNZ8c7togRM1S9dVyLo4nQXyYqTLd24WfK6Knw6iLKkbunsTX3H9dtboZjPB8RKKxhY5fsogJmC",
  "key21": "3LY8SLknnmiKYxVFiJD4Uz8AsrvxVAz3NHDyJvQPunevs3FaimCoPEN7eq8ZP5fMe3n5iiMQcFN9vP9ijpXxjAmV",
  "key22": "42baqfPUEWTsVZKUAhqdFCuTeSaC5khuwQbbKaX2NouuKhJaJ7zpXp1UGzvCVDHxpKySVG3WhbNjpNrFk8pfbVjp",
  "key23": "67bAG9saUaSVmCUqwojYqGL3Pi2uY9e8q5SYnqWS8LdEBhoWfTydiJWQgACZG7hSvEdTcys8mLwYerDs88kusb5b",
  "key24": "5yhD5Rzwxqv7swb1CtbER4PHsxNbkbQxcmrafQCTJB1A1LGQr8jWXgMqLJuJbi4oskcvi8cXE24QqFHrxG8wgsv5",
  "key25": "4RUuadVJpZFYQnsdxoQM8xvVWsBYj8uYp2hSm6qv9amxZ5bQPVyhzaBSAZ8sr4MNvs6Z2Gs7Yn5thLk4cqPdejSC",
  "key26": "2SNHuVJ5qZhvcUAzm2DrRFhmdFvLuhcUbQEk8rEwfL1ks11VtZehHRw726tdcshTTuWFZ5xkueqi5a24b1sFWgDT",
  "key27": "T7MEeP67UMq5w1MQe98eoQy6fozVRSV3D6Ri6sHPsBXCyWceozMQMrpfjfQJjE9L8b92ZV5nKqK6ubGkhHX6yUo",
  "key28": "4DaTYwzHgBzVFTfBZj7rFmhqJuLMDNX7bi99yEeGxRY7HS6cb6cY49K2p42QnNr3ZzwhxWKGBByrjQ9pGGrqKcoj",
  "key29": "4DoWajxX1NeykEQNaEk8Ry8TLCenQ961PBwELeaWwbqwz8hhpudnis2hnqVNzBFPmiFt88xP31zFJCG94XeJhXmS",
  "key30": "64NV8UGXHpJTSXNwPULBuW8693MTcFUUpGdLATeRS2gqKCPkHXyeWNfT7sEkqxtnEHXBeaVvPpBjFJbrBn9ejkTU",
  "key31": "5suqaDJYpddg8QGa1HBkfEFyBpJ9ZHbzzEKpFBaYt36SuSpi5xsfdfcrpqNGfV3aQ591jBVFVrXt8bQtKB8KWN5r",
  "key32": "3W8kjuqnKXxQ3f2RUDM4Mpom7oMxQgEhhtPmRczGkXz1F87o7PpQMu8KGFAXc1ZYdstjwpbb4jQTB44KxF55D4qR",
  "key33": "3Ko1Guw4ZJjM7cw6VaKkXdYHcn5vbWdeoNkEVpEWz6KvHh9eNh6isX9eydBbiPpGgQ1H6Vmqn4GoxSSnihUYHTJj",
  "key34": "3MAH9iPTn67qQPxfB57cDnTRyt3x2weBvCs7CSmf3MxQwYRVMCg4dYjJbmsbmdWFp9JevbfusYoy3vHiDJNyNVBw",
  "key35": "2kpqp4ZL1WW96jMQKvvF6j2eKQw3dpvWYAXnudCA8uy44rhh29ZTjLe2ozSuhDgWH8XcwqCVTWDXuKjyxt1ULmTL",
  "key36": "5CuMup2UBZGb6ZouomDeFXYsPidoHz6RgeGLZ5gQ6nTAR6Ytpid5q6kSpXFpq8WijvWQP1rkhuARoMMo7KTy1BGk",
  "key37": "4mFZUY4T8Uh57xF9mNu52uqvw28k8SKVQAoRsJT57cV79PVyxZFPGTvQD65D1sVHE42n2pXXrBM3v89y1fcwBNrX",
  "key38": "wd1w65FHjRj7kvapEidTRrPAHZBQpmr8rxA2QnG4kbuweY6dX1Dy9mQLLxuLhpGbZf4ccQG2GeFrEGodAqL2z7N",
  "key39": "4BNuWqUfwu65wR98MQuyW2TH7uaSqDtFbupRPPGfiu2nU8mzLdDjzXJEKwTPiEAF5imqaDB1KdVmxg1o3q3knfaB",
  "key40": "4bpRxQDtaqC9DtnFZ4qr4CEJbUzK2pyPK5bUxjnhWd6nf2T2TLamysX363SyrmuTSbLFbLv8kme5vjgxJhwmNW95",
  "key41": "5JoTR7GsEeZccENjzctf2RPZxkiR6Sorxn8x8x2o6sUcqYKD9ayr3s7H2fEB3dgzHkJ2noNHgY5JhdpBqnEhcfNK"
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
