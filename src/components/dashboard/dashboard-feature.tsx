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
    "56xpAjxRDQ9XVqhZHG2VQm1dtT1pgBxUgssWdJKpKUqTdEMZe11qHnFiodpdFjPbKgt3CjcFuuj85KvvL3jZGUy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dW7Hxo75LNVTPK1sx5rb6hm8h3qHgpW2UnSnWHRRM6DQaeH4YcFA8jAd69xJaXjKyKxk4FsZffDxdvyorqz8rik",
  "key1": "3qdGuik2ZxhMeR2TJyhjHCjmwYEzFvnohck5Crzsi4PQaGcENWAGKq73HV1LYK8EN6FghGTgJp9uqMWGbWbsJAnJ",
  "key2": "4o5nwctSzwswdUnTM25Qz9tELhSvfhA7nNKMc7fo1rhgEpFJqnSzjygsAGNsjWabQMPjH6TSNH4tcZ2a7cwHU25x",
  "key3": "2hwPLHETKrpWXQZmEBVhQduQQi5NMMHdcGEL5st94AaSyXjTvteDLFPHSRkhYkjdh5GdVsX2BQDZFPrApAq8BmPv",
  "key4": "3sqKPB3vB6wYaF5Ckqx1KZ8szewWQpSBEsAwhVDs2aEckBYzsTmpZx58Lc1Q2KFXMwbkpWYecBnjnFbimdC16DPR",
  "key5": "4Tg2RZZx68uABrghUTt2AtD6myEzR9eRkgyUCxZtoa52UsbZEWvnyJh8T5x13fnHapZUXxyhMFBBm2MdfGAQXF6q",
  "key6": "25ESGLTJNg6mSsmqCu1fZL99Er2sBJeGf6hyVm5pDex4kZpw7f8UFdzn9PuX3D7gAt7UHpumXL2BDCndZ7iG1i24",
  "key7": "3Ex3c8xY8jASxVMbgmubXXrst9RQeaFFmoh4ZtcHUYhCECQWHNVUYqmZtkdki4q7eEo5HnaS4z5F1LGwHmB75CHR",
  "key8": "5kvUgBZmcbttsxd6q32F2c7cTwQZy5d8dRSgoah6e9nKrveLaS6cM95Rvhrti4mTaMYHqSyyxC9uCHaNbEo53xEL",
  "key9": "54NAFsi98x55QbxcUz2dGW2KYkuhwFi8RVpXWf8pNNuJHZbi3DyaTnJnBPKZV1zHDiD2HtS3Aiq1mCyAvLg7GRwY",
  "key10": "5YEBijk3yZGEt4bs5rjHuqWyaDtQ74uyxzrjrTcEFFB3f6DxWsMgeYc5SrgUUc6B7PKmqfDjWfUSdCM9dRbqMujk",
  "key11": "5JAznBQj8ugYfHSNupXywQu7zT5iot3RGswrx6EJD4rE7FFs3eVgqFgrY2JhqRkh9aeGr6FCrYqCUzGHHG2iMn1Y",
  "key12": "9RghbmrjwRSCtwXHwBZE1v75QEngDU13HsfRS1RVu3pLc46JY3epURoDr6wfTHWk3VV3nBwfH5fs19sxSXPrUVq",
  "key13": "2eJgLvdHW8dm6D5g6DwgrpuHcqKnKnEgC7cT3C61WJPJFBmgkc3UHacb4eqdESrtZ8QdoWATuAdFDq4PfsJJcRDp",
  "key14": "2GDEivt9e9MPTTPxwMKPbV11BEKTsSwpXJZsXBiDZmia5yoDEVy7bZGP7NgssdttPJa8xdPzxypL6nirJawL5pSA",
  "key15": "4JQ4aBcB4oQXGoYLwCkuF9amrv6E9EafHUPNVSrbvtXuRdxvcUZjd7vR751s8XnQRBC6BG7dApfx4cx5GqBbye7e",
  "key16": "1ersRvgpRCYFZ1MDd2vR7XUovJ7Q4ySCXFQkacizLsc97i1kjUpY6xG7ptAG7uV3ZmA9RK7fx9Sc1Ty7Y21g9ho",
  "key17": "3fyshxGfqCghT2LimgV3qUVoiKyGr9G2tsjHNMXF2AJ3uLkQkg32PDB6FxaRQJqiVFHWQe5JmTpB2JsedK5YZqek",
  "key18": "56vLoJM75kcrir3WknEdpzfNiyuqH8kFXya47i9vgCngmRcDs5M9r9UkrU9Xg9HU8vgXay9uDX9nhj8ymS1MGRF7",
  "key19": "5MdyqQqSoZucWm2iAfm5NtUT6TPmLgd3YVRQboXBVoT7nFdHTtvmdJTkArdRVjDcLTCBFKHbEPXWBbRLBmkrnsyn",
  "key20": "7i82sW6zrCjTZXkrtRRFhJGnMtUiKrVfVERRygmarLE9W7K4U6pRN1MQvnQyEMaNjBV1jhqcTc4k7pEHGGbcK2K",
  "key21": "34fSEFUkN5pzJKHXq1ffRx3ZouWQeBhwShx8Kq8tomtomRMTnqfZAREGDCXUVTJHKqpishxWiUzembQuQvS6vnSJ",
  "key22": "3ibXdWgjmVWSFMgsy9cyoHR3qHxQCnHYGktnopXiYiWKbVms5MYMsikr5ToBtDB4VCV2SMGeSbKpeRGJa3J1T9Tv",
  "key23": "3NLSY9QzC6AXf31n3MHGy9LfZsrwxQax9waBY244W4JKGBP9x4CQnSN3A8Sit91SfoLG5yqLUyFKgLB4ojFGNFKm",
  "key24": "2CxLSJwd1TYfrof8wTaxz8Zbj4x5rdW7bzfzZYZvzEvutvUepxofWHyhN1jhvRL87JjDpV4iPCrMAAVYhrDHwAJa",
  "key25": "4iCUfq63gNRHtZxvE1TWjv3V198C4cioUHGgJzG8eu3iN9XfPw5czk8VGqZ5qpUotwfz4voTFaN9uXBG3X6H26CJ",
  "key26": "2emebPf7Gy94Sj6YghFDghji22dwktuL3at9nRJGfvY5CArbrj6Nk2x999dZkJAzmRTdiaDLbyMVQpDVQynsiucb",
  "key27": "2gx5ERdBGLv7UurHJF7nFSFCDSfYXT913otryzChCiRRKY1vSeG2u2FNDfNGgogWFx3NrCqWKdcKRTWhJjfh4Hxk",
  "key28": "2yipZk1jntNNN2RojG7LsWbnCVL2KLX8vTV63U5GbM2U8S1gFjYkZcVaEZoQKMnZpXf4Yw49a6E3A6EkAeCNG5fw"
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
