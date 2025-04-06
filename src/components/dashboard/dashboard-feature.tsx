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
    "4rPUBQPwRsTeqM7LZt9fQbixhgwREnL2UcaNFu6BPaH7BtHRSKjeuywqw2vYpDNB5ESSf5pKC9HnzDeywWcwPQHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jzDfhtCkSm964JxraxD7B53LA1hXybwLPEsGYLqemVCJAQPq7z4UF3w1FiCKehQHZhc2HSypikmr5MygeQF2LLc",
  "key1": "2x8iguz35SisCqGdpeAokPkFFD3zrUR2dhf5fseYqnSiPmAQPmwP8SQMZmb4dSe9n7WKjsoxZQT6JrEnRnsRdk9o",
  "key2": "2ePTsE9MMiBEi48R7ppqRrmcmYdokwUdg5iJ2HQL9Uy7MfWaEMxTNnhTBLnQqde3sUzJAjF8DJgheHq79Hfov5G6",
  "key3": "28XoVyHHNd35uGqFKtUgnJC1LEhaEEdhxcvLDocUpqMN6m7Yhg5Awf7bTeD1pHXQjcC9cuM2bERanzy5k824mi9J",
  "key4": "2dmrNUpdWrDSS4LbbHHaYAop3MWi8fJBXhR4XdgCDLWEFex6RvcgpRXKX4GbMHnx7cVVwTkoGbXGxqmJQdbbeThD",
  "key5": "64otc6uvjAKUA6LgqN4fV4iL89kcq7fkwdFGczwr4gjtD4WtgyUiPqRsKiVJBjjP3FYPkTGwkKDJwctyacZQejaC",
  "key6": "5ngG3NchkgrBYKTieJTa7qycMVqgMf3sjkZ5WjUHkiEtNe5det12KRynbxfitButzPCkdkyKcDUVH77CnCtAq28S",
  "key7": "2csSSS3BUkWJBsbpd3CRn2Lgmw1XNCumjtMnR6Snbhz3WAuiVEwoBpKkh8cyQyesETgsqDYSDqsQPtJ53PZgS3hq",
  "key8": "kgqVR4mMpNFZsjJmrJ1hWCwprTn8PXxT4SeSYPJLivScj6x3fviZEQTiCgkvy7uUNXycKJxNoBeskU9FShCVU9h",
  "key9": "5eZgb2SwVAhuJLERKVnecsqjdT3ijg8unc7pCzHQeiNixQDFKH1gZAYQ3o53inV7DKHA4hNj6A9Eaqy9MdA6jJMU",
  "key10": "3emsmzZGQTJcrSLsB279yiLp4D2m7gQ4hEFPEqT1aBUDEyKSKqD7Jy7ioF21eTnuoZix2SGR4LHaU5eZRsKcCxw",
  "key11": "5QuafQWBUKGgiNJCFp6sY52kJNH9uXFCiyG6ViUH39qJnjxgpk58PY92QPmnvZjRkSN4SZzJW847PBadFw2AbdJQ",
  "key12": "56UYrNH58XWhMH2dFW58mh6K8BCVvtzJvkVWyaLTQfCjYgtru6SEH5FUmVLngcmQEgkKBkRYr7V7Laei1DNC18cR",
  "key13": "4dyfYjBB7UHZzm42KKpJTGQd4tQVMw82KTtSRTejxBzDc7MZ7bZcn9oWCREJcg9bSbEKwMfcCkgApwFF1MgTc7pe",
  "key14": "NQoksWpiPExZ3mMTMAQJNqaTZN1yyyBLgftwmeZmxQJzFw5ZwK3qu9fxeeCQ6WBcJf2ww1wc8W94tVdqwdHmNUs",
  "key15": "4o1Fxtr1i51QQJ9UA3HdmRrHQdiCueBuDgWTx1mCC7UypKm3vaGCMmExgiNC6ZrV7RWvJq8J8sp9PbXrsxWKG7r3",
  "key16": "3ruWmoYpgg2SvWTmXgQTNWtentDHQDQziqpZ2Ep2Wyx8QhpLh5eyqfkwvqNdwDquudWzzg4L5cyc99CDoJMAHdJ9",
  "key17": "2MU1Qs9eawGLAMvL4xyDxM5E8NUoV1FmqpfwmJWhCexLsn5Hb1QCEsNibEFYUdPSnZ5ahWUXSzJJfH429Uv8C15f",
  "key18": "34GPwjVGtWkGPS9fxruKfDhRofZHEX2QjfQVRfirMKDdwAdTASPVJzjtVobKseHdY7yv93MQsj4bqyMQJ3DRuARK",
  "key19": "3fAmpxxbS7c3BDAkWoQecZzYDvV5XpYw8kLSEukyJKnzK2jzEAokiPjnoCg64gmvhWKmZ9A5nxqGmfqHAGevgnGy",
  "key20": "5BBWK7zckJGg7t7FVEFMY9EpTQuRXYYZYFWXnV22Z88HYp8ES41Cr6ds6fdXCxVZE7u3LLexC8pECCCYWC9rDQxj",
  "key21": "3exPAatgvid4VeYTwxTEzuXQ5vt7Mjep2iX4Up9eZ13HbDSGLgZnFVwC5GtLTd8vmiZsrxAScyP6yukSizgz7n7Y",
  "key22": "3xyRyFyRCRZ1vqA3PoSQoDi5UYryRVooYA9JPBj3Hmgd8KavnY49cXemy8e7fkSnXUahhNrWgA55qvNCfiXbtAJN",
  "key23": "4Pvrd2KX9GJz7VrzewPJ4SLJZT1K5o8MLSH8xWHBFyWE1L9iNiZKnVhJUU2HSSbT794spnSP6AAf4AvSp2cpGszn",
  "key24": "3yKEoiQfAgHPKXHgu73uLiwLxuTFodKm1jDLJVLM5GB5c7krC2sEwRdH3jJ7ADjNF41Uim8K8Aqk2HyKTSgAHUau",
  "key25": "2vwr7osdrrLLwNbS15fJSMQPDhnR2tPGq1QgRhTKdyVyXgjgbKvrZLPfut5Ui1ma7J8baL7nJPZ5DrReHt4SKbJB",
  "key26": "3jx7aquDgYdc5oXbueof6jim9QfmqHPngR2nhuwnNmTpA75KDpBuN69xnp54mrWESDTZ4NVaFgoZmaVVNbJANxnn",
  "key27": "4eFJVZ2YCVc1H6LL8CuM9jRj2XJWgMy48MvJRMj5cvRLcKtaPtTh3u6LDg5fZ1ByZFYTroBvK9Jzitf5c8PeDun2",
  "key28": "65ZiQ7Mhg3uKjkBKEX5HyEFiyYWmoyr8EBycMzBivfev4ABSjrXXYDan4LF3Km5wHpjd3Knxgj6AfPpXeu4oP4yE",
  "key29": "4dp8hgHUUK1E758K4tmqbD59hK92pfpfucvcJsFt5Q8sLBUCFcmXsiaSbuxHzsSF2YGGGYN6oRK96m41VgjG1JzF",
  "key30": "3ommick6XCEKsh1ySjw1mUtJKje3ioVZnfbAu7YaUrcXCFHJGRL5X7Ry2utKr4E1xYeyNkJxGHcRfyKvjAzHa267",
  "key31": "38QmdTB9gQGTZrET6nFeFfRbxp68S9ppWB2hcS6a98TqvjEAYjqtBX3bfMo13cwwr1uUHWWDcBz6cY2TeFT2MgVu",
  "key32": "2sYEih4USCJG2DAtEtjswvLMwtqwyV1WgBAEYc2nhswi998QuNVmqtCe2daeswCXAMTWS8HYddUvBAFzhXvTMvnw",
  "key33": "2eUZ73Basp6jvgz5qrhwnFcq5uS7RaW7jY9kKVDZ1RuAW3UR6LeLiYnaozQT9q7R1Jxz9Ts7SkAJaWdwWhueuCfn",
  "key34": "3CebnUC5MdWWnVJ3MiE5u3HYzPZprrGXgkaYwzcb8vYhMHmGdzno2WqjeiUuQgC3NBEVWkrD1xpDDXkxAnHZK3Rc"
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
