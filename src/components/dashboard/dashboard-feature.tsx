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
    "43VREQeJXzRERnhr2GFJrdA4BqxWQ69px8xCav3Nxyg7YasYsYUUYJJv8y1W5yV8bmD5LGQKMpa5jRUSczZY9FpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrMYaAfrTxfRRnNvM7QHNDKdRDgyTC7s3aXspn9SQ33EmPcYwP36S6NyhDUaut1toXN75VHyuz7bgpR8A7R2dH9",
  "key1": "4WLeW2qdRAJVxMUo2eHG49MdeuksKcC8eQQv4ZtaMKJVfNJi1tZULjeqnaeHaXXEsZyrQdWJbfTtTGJhmQqHXQmN",
  "key2": "5eArFPxQq6FkyVktrXRsgf8o6pSFoxLNDckmki3RcqPq7VDtVAbVUpvuj7TGXqXt7rfzGMqBrGnZTRvg2pgKZG8c",
  "key3": "29ZEA1K7yWtFABXW8dEBHMrjH18CCQS29yqAhDNmJH7t1ZYEtJkBtX4UNWFgxT167U1VgySn5bA6L7bJhFRwhr6a",
  "key4": "3xoAAy2PUH7Q6RmWVhgW9YRLStH2twW9PQkniw2i5qc5WEPCD7CM3WyvZfRkh7dcsvxCzdKqpt5EK9SixoHzcaFA",
  "key5": "3CZDBeKPXtwPdpxDWYPuwN24yUGQJo2VS7f1MHEfwB5NbWQR1Em9421baBHPVoMYBWWq4His1EeFSMWfPHwSXhLL",
  "key6": "RZdBKFRX9tV9BjWPPZokRtvFzvSPzUj7Eg4PiWTtD17GPbjdX8YkFxuVxfqz9YNd5ZV6oNRx5d8irbyzCmTPj5o",
  "key7": "5Wn85trYCiq3i64cCvCmkJnaSZgyijywhdFKRrnTJyTMcJ53ydRavZF8ESocfk6JSf4sBkEnk6apxNz5TuHtPZah",
  "key8": "43UCSQcydi9CSVrvaCChzzw8GN1TyWKVLFwSa85weDWtbJgyTbkUMUWLNbZqVWAm6M3vpTwkr8pnYVtVr6viWXUZ",
  "key9": "5gSQD6MjQn9b22nnzysbxVqavFQFCEJpnDhxt6AeVp51awWYjKijoYADFxQri6VSWQFQQ7m9aLdvMiK7kzk94dXx",
  "key10": "r9w3vjvSLibt6gNbbPRFHHY5ncnw4Bq3iRjRzXEfhRp2qMUtKfc9E6bGLwZqSKZYgi9cr43WBz3QHbm21zHKyL9",
  "key11": "4YqfECq3DRNxaJ8rbTyqTGcUPwE2TA9gqYTCYNydjfMcuMPwjUEMkLikeqxB7xc41LcJYanYj6MTYQx6UsAnaV1Q",
  "key12": "4EBwTPS68tk3ZJWNemauQC1sBeqpLTPJtkJCqJvefYtG9YGnkp3mRcpgMLA4qPdP436tUjeAzwkXYbt1i3xexfgV",
  "key13": "4W51akrRoZ9Fao7xnjXX4ShwCZcqzcK9vZ1gEuVPWCjjuxAJ46Jbobs4TXjYd7cpXE3k1izVbrLRRVafoC3ybuSp",
  "key14": "3AUgpTnFWJ5DyazKcAfV7j5FKLmiSXsdhnN2rFTerAUgLnhumsYEBTYvZsB4GjAYE7DkUqkEhP1AxmZkgdgrGYZE",
  "key15": "5YJuMRgA6GcutkZ27R7Gqasy6aaPQaZctrqkxLm6WCzL6Dt6k5UBziahB9soTCps31T5FJ6UvsA9JxqMjhtbUax8",
  "key16": "5zcz4PkxcCpq1YK6G6fsm5b1LQQBbYyiGxiYcqd1EUTTCA7KYN3MLJ8KDeisWFHJ8LHZHjSYhchkSHxHgEMti6JF",
  "key17": "2BmZ6p4WDSQNdGZ4TFBpQqq7ghqQFLoKQyv5A7sDgF6caFHDNsuDqXaJR4mawoP1VJSs4bpVdRVPd78D7zMfLATv",
  "key18": "5UEcuL4JPycd1vC9f2vyfTFrJ37tqcRsyHFjfzpU1EXgBqmE1bvoaHL3s6ADw8fSNui6tFouXioxC2H4XaHTWiM3",
  "key19": "gUBtKxC3NsMfgVhro6EcaVzhHaa5Scgny5QsmERmKTiUUk14wnX1F4bvTxxS6jAQwAsDrH6RgK9CgN4Q161YPrM",
  "key20": "4pjUtMKy2uEaKRU2FSUnvGXhnVtmQY7nwEenRtfDG1oty6USB3pwQkxXNts6TXXKoMtX97c11XFfBtK9VBrDfkCC",
  "key21": "3S3ssSWTfRx8L9Evqpsp8SAEmEbKtuZxzXxy4B9uhtQUcZ6bNz721wK1TyfAswykGkEW25DrR4w1Vov2eVeU16ZZ",
  "key22": "3J3zzXqwny4NH1tweW8bJuzZbhymfUnutve2eebC1na1qALXBTsbMfrcntVTH9Hr5HgVZtkwRQVsH5Z277KcmUzE",
  "key23": "64Z3i7rRW9DG3xuAqp4hnC4TANm8SoEwuENSbt4dqX5SZaPjsH4tgFTKJhvBYiHBP6jz5JnXjHJEbh4mrDeRwvHL",
  "key24": "26Wp3yk3A5wKtHVqJhMWZTLymyjf4VNcERcn7d9EACy4nfPcw4fbX2rMVrQPzKHpqGaCwJsjFzqG3MHEf4JUEDCn",
  "key25": "5n1PMn6AjyahUzWSSDCRNYUaZ5kYTY6bKNusiahJePg8YJ1CJJwVVehf9YSJy4Kp8VRRqNrDviB7KPCBFH13qBMD",
  "key26": "opjtEUMDkpTRaZwc9FaqWmqtF2bm1AzqgAjnhq8yn6vNy738PoHRK2zWiZBDzARQ3Sy91giB4h3rBkYjRT6f6sf",
  "key27": "4CzLHLvGfWWncWMStkJfcBcwRG3hxPDGW4j9bhpRw8qNpr4Y8XS8ac94YkX97Bgic7cZ1md2mAjkk4RimnxVVD3w",
  "key28": "G3tppVyuv5xpQV5qQ6nUgVDrgRM7tdChjf4aVxdDm5tdRaiGrd5cSHNZtBCUNnyAHeQFBU67WwybLVDaV7AMM9p",
  "key29": "2DuK6F8XrEcFd9yfgsT7dSSAuokp4yT62hsnqaSdeaNEGa3XACzQsms1agbLGospknTCDDq76uPyWW1sf7L6VjgK",
  "key30": "23HJbUWgadauhZ56EtRM6PKmu7RSxucnk32YseKAVMKJe97ksNCJ5vUw4imPKSdVdupC2PsYPxEv9kc7sGDJKQLQ",
  "key31": "2x2TsYY1jgt4z23GhE4XWDfpnBf6niwBGpUTygwsKUGAxGd4TjuSoDnsY67ANqBrGeHh3jfc3CBusmYVuuzZquey",
  "key32": "31s393wLZ3WWruARLbZkjCfyj6Ks7vGvKNYpg9E3Q4pgicg6JXWxsHQG7zimLoek2CApycxGupjh9jQtUZFwgkmq",
  "key33": "5rvAFLubf1VxhNRpRsDW5ZwV739Kpy2jeEyytYfg1gwhjaHs6bCYJs95Ar9Zy4xFnh6VFSHHGgHhfHBBiY3c1maF",
  "key34": "28zo5j2JTjTXYMTRkUatM6Hia6crQQuunkm2CPvis2H934Tj4R43ubuiw7FqLP4gjcyGBRnGUmaVCDMwXPYRhofr"
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
