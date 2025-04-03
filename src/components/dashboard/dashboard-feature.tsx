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
    "55JbJpznan36QcMpRmUNSShW7oJbQy3dSFvUxdms5ha8ff1ix6Qp6bXWLsM9isFKVhFqHz2UcyyEGEnMgyKPSsN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XYrzLJQA2WP8Q1raMi16VJjk4c6CFvbjzs4jdG1HUyYA7CwecRhFmJX2YCcBCcHN8BN4UmaFiTDajLVGpsN6o9M",
  "key1": "3eGJg5BJZ4EehnEfCwbouyQbjv5RiJBKBVq5r42FXKJ7Y3hB2UCHsuP2eBH63hpGBBdYJaoEBPaH5JKk1QrSpoGE",
  "key2": "4okCKr41BXcPKmffASVDWo4vJi9MUb6JjP4ga33h15hzBfZaSwDqTtToY9wVLMqKFaQA5W2Hqb7siZCjQPQpWJej",
  "key3": "3SsrqwkJL2HFpDmDbGmFrWEZLVxf65MEKURikyqd8sKiphH1Lxtfz6VNvqBPGcPGGsUX8qGJHWkaA5RTZaUABQL4",
  "key4": "2GsdqwuhjUeoXmasU3RhbBU6EkGrGiFoqz1aiK5BmZZrhhdCq6AvCS3vussGM6F1J59ZqoyYP9m3vBt9QiKE1iaJ",
  "key5": "BbbirYSDc8gRrdMVmdMmWiDf81q6LKnESgTpoL4B8sRipo2bM6Mz25zbcdDabMU7eW5o6z4WpFDYBCFm9h2hnEt",
  "key6": "5m5ZvtiHjpPgAJddRNUTbb2TYmfu9HJfJc8EpNqjxBUEk6CXzALVfZprciHJEYtUa3VodJK6TZ4MgSsk8Bf4PzyP",
  "key7": "5ScuJXUdubDYqDKYvxYsBj6ZPyDuwS7TyAz3J4tdmUMvxSb4w6sHfsPeVd4bn2LaXxNE7L3SZGixKScaHhjnj1zM",
  "key8": "zD1LU5ksTmoTZCQnK7NVge5w1Yf4Db2ezp72sz3Qp7MaoEgeaL1uFEYPTpzohvhdKZEgbQBWZA84tswiX6Qm2mJ",
  "key9": "4xdy86LjnHYS8KRq59R2CgW8JskHDiU5ygTh1BxpvNXtHV6rVNzSbyw94GGGKwWHbqugRkFnKc5R6MW7p5WmSwf8",
  "key10": "3MU8DcLRGogPVAyaaoAunX1UiY2zz4R9B5hEEbEQogFmdKRtPt4NJTdspK7yNfZWLZykoQdNSTCiXfosepTXaFxD",
  "key11": "4zHcwqY6Tu9HFjvU7S3EoB6PbbY9cgSLSRuVEgUkVEJNabfLmFcKtnGsubJNADR72Ym5hg4pjrrxtCLnkhNbwhSh",
  "key12": "2CneY8xmREqQ7evbfmuRDyzWx86du6hvn9Xu9AhBLLVhLAbHSKoCcfq3jiUcmbYAsVaNGQA5BYjziiwnqYw6Kt2y",
  "key13": "5hiGFNx3AXjbHPQh5fnw4m2dszU8Bjr6ctcUuEuu2wjB9Q9dTtaFQKNQYDt9eYpDjLX5pRjLm9o9mzZziqp5j5c7",
  "key14": "otcCMt8C4Nqra2upXBTH7cGqW9ZgCXeTSDqdLasEmZntAGS2jvMUzYpzUt3yGGXU9b4XXatpzVhbpQozuAzkCVd",
  "key15": "2dwbGgFCRi3jhkgBDRY8QvSKJX66bWnZR3qZTUA4psKvyHeBdKgoF9HZFFTiePU8fxWYmgTrguM3oRqt3DJkFCWP",
  "key16": "2srSxm97fxAAeRJCxs9pMi9NaRuRGRoAL7phB8DoVkXBph8sT5A3d4BEa84JB3aesC9Lp1vdkLQyQdEq6ZhHqY1e",
  "key17": "5HWCMAQVGozEBHdY4LhP1WpBPsgwHGj2NT8MzNAqHWVERS59vEijdHYvkyenLLcqDMebtfYHX61qhm9p8sPE4rHL",
  "key18": "3TtWnQG4fWRL7ArNtTLi2iQ6LApfn45wt7H4xpQxarCASsYnsXvbKoXWYgd353zWrYiZ8VzNvvhXvzdijvtaq2gW",
  "key19": "EtMRe9MLWXy9V3oUbeDXJVcioLZ1Q9YxCF6KEGar2dYLq41DPY2u8DR7CXaWevH7mg1w1WLXs4HsqLpZciU9dR1",
  "key20": "5ZjRqP6FJroNFfx4RGvrXBNpPM97vBigQe2Z9EtHjjCHWr8mfW2B7PGk243YDgruZ4P27yMeeiQBkmJTnP5e8KNR",
  "key21": "43CmGcHeH9LxRx6qkcDSF9eYQk5st2YtHiyLkidb2VCmH46hDq1EbbUtFyqNgZj7PbGWp4RkFwMTH1gLoLxtrQMi",
  "key22": "SZoFxt7M9kyh9bPitcwBbdEABiNyPTfVBJAo4D2zawD4W5DkCGbUL28dNehtvK5jBmPcXa4GF7tqKPkNhRguSxG",
  "key23": "2ibqZkNuiKFTCg4XqUwJxtr4jir8zsa8oJRy7hhgF3hX2zvqgfh4GST8WfE5SrNqK2SKgn5wKYYw7QFRS83qHgqr",
  "key24": "56dwQ9T7Xj88qvhLzvSpcFG5eb3ePzXXw9j331w6SrWuRD7UtnFxeyF6wEziQyvAiiRn8Xae4votRZsxTJW2DxHK",
  "key25": "4gsngB8QfTwQrwHBWVcGZn8H7cWqxPPiTGyhixLwQGWKFUpnUNrNeZUbz3DmgESZoPwHuqcMoXGnAQ7hxiuc3mQa",
  "key26": "3jTCkLL6xEPMPgzqDDsqMAr2F9Knj8eGE6dCFYxuuk7u8KxFhNfejL2dsH8ybv1CcgWNVEuBpBU2sQhzDi88hMS3",
  "key27": "hpKviGzjcNFB4Y8duwTK8u7Uex9qgqw7Wx6vxek7ep3Bu9UHqb6cCAXe3Aj1a1xcC8nRjpXLL5Pns8oh8ns1YYv",
  "key28": "3bPnxXdUM7g8LavD9duSDXk4k16CQpXWdfsAjCBHX8JFc4h6ZQCe7PyEL7fzDQetYcqLeuWSx14t7X4WPUXkEd1S",
  "key29": "3yqRZ3JdqnCaCGLuVXTWKdDWoXifvzLJC9UUyumSHNTspJ9TvAzF4XJw1w2eJwrpeks9ttJiYyywVuxBsfhHYQEy",
  "key30": "3zT7FQg7Tu18ro2E22pb5Bd8BFYgMWLWwkxVcwBqgxK95FekXi7p55qvMBCiti1PQv2TagnJK1SSxkSoDZphfES7",
  "key31": "5F1iw6JsZHHeUsB7jWsfkCVpPhVFQfov4WHW2BSaHgxev7xfXYPSmrjucUjSU4Gv22F9DVmwUNpRueEZ3t8jy4uu",
  "key32": "3Zy1JoVyNYWdNwgMZnXZZ6jLhc9oiGy3Akc8ryyYrh5niZM8tVPS6CQoZcKHHrvJZ3v9FZ3JRRVRpzjT8E3oiWSi",
  "key33": "5BF9Vbao91x2TNr3He9nmJDrYyYX3kVA1miphbdbVdM12JF7qoq9Ny9NumNQTspUQxrzHpGANtkC6qp2iAWiensN",
  "key34": "41dwBTKNjSg9rqxfPhzem8s5hbuUd7SJZZcyQmrBGsN6njGSPutj3KX2wYDVbBEFYzsv5V3HhLaKKS9Yf9ZjHFFu",
  "key35": "2NQpx9fficERRKRZh2SwAsYzFmS5yDLsxBLL1uQwgvCzS4WiUJiaZP76vunUDN5CJeCTMYYAntptVdfHoa2FDUZh",
  "key36": "LfEKcFHhCdwcPuDXkph961oXgGGPokbsqq1B331Vwgr7MgyCwAYko9zTfzv6NPviG1sMSuF3jJfYdWHEQyTMYKd"
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
