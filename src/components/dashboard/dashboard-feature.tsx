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
    "5HispjvrQ5HKs48hxeBQ2DNFbyuTzwaTcuJgyeMHSNu4Ppmb6gWCa4uKBr5FjqXKvfdus7vHa3hACWELi2qRJ7WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boxmXruNs9LMHU87SwTpWEDm4YVhqyqG7SdGJ2pdQaVdni4qJVeHtfdRqktyBabw4QLSwJsawyvqX1owQr8J4FN",
  "key1": "PL7adoPBg1Mafi8aVTKQKMuB9BE9mYeXZqBr9KuvCt5UG8ZfroPGGXcYFzZxEwzbSdXH8zTF53FQtEnVpiDu3Db",
  "key2": "5R5hLNULZBsyxPq4MeD5uXrFGY9PP21bit4oGz5eqEG8g2ZKjiW54sc7nc7wRHcXdEUVSdDwLVjy2dN2PpuxkUpu",
  "key3": "5d93GcgZqinR5Rs5z5Yod3MJXccEt4uiDxawfMeUpQCSuLvpCjzZt1YEetuKjPyhG95NiZAyNzyAG4m9KLWaKbuQ",
  "key4": "axQb9dMB6DupsLfyFaHUxXaA7iZMZmPX4iqvA5LBKyQpk4ncLN9KXgManAHtPYuMpdB76yDHvTfX5ojrc4YShNR",
  "key5": "5zLHEWRU8m6XMKtrvh2JbGBtF4oe2fdQj6EYPERfyG7dDZWuoKzc4bjFZfnQewjY8e6iZYRUd2UcKHbym3eYoEMa",
  "key6": "5MvGv72s8TdTKmbJPpTdvyEwmmHHydWUHuGj7Ap8dXWVwASdWoKvLttfhqHXFiUyV4WvyEBEhVfZQsxgxFBtss51",
  "key7": "43zqThY2rLJQymT8orEVw3NzwAGoWbdrrr4FNcjSw2XWcq1Z2n8XzShQM6fccuPNEVQ8pypkTzJgjCbSNAbmWDkB",
  "key8": "3ey5yYFgmvr6cTB9HHEK74F5Hfydn7XWgqdYX4EM64dq6zyXSV4aeKwAqHbYfoQYbBL1HEVMgXPF1Xh68X8ozb5i",
  "key9": "owmhkpxmH6vWJNTKsU7gKiVvYpGgnJfJRiBNpRefYTqMrjpFpSXpV1YHt1mto3AihEGcsrFomkhJmRBLjHqEBSR",
  "key10": "4wGRaE9vmFeuq7hLahuJ7q23vySoE2GJoKnXyS9CWYRmAXeFzyYpMeEJXjkK4nCn15pJLMxivR29VEzqc185bwnV",
  "key11": "36hG5xAgMSuhuqvBjTkzGhBd57yA1BN2dBg7EVEYiYXRfRmyBzqwMivkaS3hYTR37Z8e7v85coy8rnuxUJKzTqSw",
  "key12": "4kNEyzqe81Va5sSJXtouV5Aur1VBNSc4QB72sB9b2hbb8fvu2Xmwe4QajXxh1mDLyuYLUndTW5YBrcQ1qh6XgbE5",
  "key13": "YfKgbatY6sHEVgziY7JWL5g1b5T76K8dy4ksHXJGVRANM6GpUZKT3McyDxW4y6t2TvqYqrGpMf1nUhc4AqMDpXk",
  "key14": "SWRGTQqfG7FFyzrTEBBw87JzvdydMSKh3nKnHYUz7QLrfAN7b13jHy7rEL1zjZePPiXRyxt3k39g45Cssrvbsa1",
  "key15": "27yQ1CJFmw8JULRjfqYZzrpuKKLfkPG5Z78a53zhDyQTvbuLRpnQCrjgSecV1qyzg9XXUb1CaMx4DyuaWSNwAa9x",
  "key16": "2GUozPgjyjKAX2WcZftZk2eqnKjd45P44enkVALDvpDycB4VxMsrqWDMxbtb8j6VqgWzAXCiRd5Dg5Et49EHmtDE",
  "key17": "4AZgMh45dEmWMm9x1Z2kuAbDMXyDBHE1AthBsvVdBiGAE6PcP9LtDjd5XWdAKbN8Y1BBXjmaEeC5BcMFaR52CZe1",
  "key18": "2osanFiBYvJBxZbUYsveLgKHgh9QSm5QXodSRgiPN4ZeqxVRQyzNVVJqX5TN9ncsE5YJ1ozZmSeBdwHNG1WtU8qX",
  "key19": "44dRZXFAqi7EKFYDpJkmiyfHf7ZPGpJWN3rzngckLkQCGVLNqFYma1FgGiJaNEyCNwZ3nbCDLWpfcNUXSdErapfU",
  "key20": "3HotuT2Ck13ujcHV7HBktCLvtRfCPnXLt3c7AHDXkRwAaaM3Lvz5XPAC4St7SoQQJWvHb2sacDiL4Fh5PViqBBNc",
  "key21": "2BP45jii1zv2qG3qr8y211rC5SUjfrnffamNg2SeqPjjvC9aLpSgZJHqaG8sPiFbK7Zb1NqP5daJegZhbiAP2CGW",
  "key22": "57chWG3MYJo1uT5YVcJAMs3Kf837n9VnjCh6skS5H6BQKHZhEYF3GPwxmqS2L6HvZmMniLnpWRHfhxExyJiaJz41",
  "key23": "521fyJLfM2brSAGTVE3eCv1QpH2NL72deH5rCWm9jXZMr38YMfBeAxsudGy3guugDquhH5RBJoaA2kmEKK8jQ6vW",
  "key24": "5nmZBKPSuX2Ttg4R7S51pbiTvQmgkL15ELW35foxHaBwBLurmVKpvRjhWC3RBBZbTJMypCboHKiCtkX76VUfEtng",
  "key25": "362wnDUQk4Uxp6t5Azb1U1cgW5wdK5GBMXrZTFjNyGkBsM43DVwX7wHq1xiNTF5WWJCxJvTDRWDJsm3SK54VQxYy",
  "key26": "5iU7aietsZM9BTWSa7ok4HS3in2ddy7rBiTMGiqb9EVczHcnt2PpwT6GBwz7bQUwwYPjBi8gdguggBiwa2VRDjwp",
  "key27": "3JYxfDzQaWXasNo5BQUQE4S6pAfTtUJunNVZoE6AW34ZdWwNeYKfvSEvBGjKotbrpBrkCSfWTa2k5KCzHNgTxCRZ",
  "key28": "2Yib76yaeTvzWsGb7GjUKyAzw2FkwhXkK8TnUHTu5hmAEfNrBsTPWWKk9QM9LwyqrqtPEB9T4UNoTGcufxhZHxUS",
  "key29": "2t6bsnyTMqvHDhTwJagi833JpGoKvnZYmUMBgbMyuvDWpmtLgDwLJexahLTMDRU63ZRmQvV4hnwTEYCUMcoxmq5D",
  "key30": "C3iaj7CighKaRDvYzD5auMV4tDJ6RdwHb1auuatgjar2TtcrrYFUyNwYjbwyBKgExuyEr2MZQpXQNN84vV4ehbt",
  "key31": "2WDpqMt2Twce58ZdzBUgfQVdLV8dugCSysZU3bTTi7dz5MbMKDQGwYSjcBQwQzDfaTZyxZdEvwMPYm2QMG4kggBA",
  "key32": "4fH5hajrvWxvQ9LAJJwwUgk4DdnKPkHsBbC7YBdpvixv8RugVNWQx143EU8r74D8cT7ktkbYYF6TM5WGNf6GB5z",
  "key33": "weu3DCMB9DTyZgjzkLgW66dxb22rTzr33Z4ocR67K7Dtzi3a6tyfnuktosv4tRA6vMSEakUFbfn7TSmnRaxQP6M",
  "key34": "4MpwCVEUjVvQSWtC7KAgPzXWBxP3pnkyp53oFtiAJxWD3Bj1NKhAb1pHbh1DxaQGVLsZXqheX5jssVCbJptkGDRu",
  "key35": "3YTz84iY8c6pKMNxJcwFY7P6npAvBXcbMtfQyy48cCZ63SkrmCuqeaM4FEo9oEiacd5YnfgBUS5pHyErk5y384Ge",
  "key36": "36ADWY8bM1bQ3Jd5U82zLvLuV3BxaaokzTWSoTnYAtUv6mBchrezH3g3N5NTS7CwqhW2jzZKSp4xyVqDxDUK1r3v",
  "key37": "39tyeQSGhTZkJN4qSntoxwHF4kFhEYizXTQW7enpHYm2zJknRofZoYy87GQ3TLdPbhBoKss8hJFB5MeZG6EKZ7iF",
  "key38": "3c2aB7KQPhYLnNF61DeHWdY9yr9X9nxj1ve1ZJjmY6KuW1LRLGSJAZLnYcjDgz2wmCt4hDkYnesfZf9Yi53PNR7",
  "key39": "buf6wrdpiziQNLT4e6bwwfyTso3pA3F7L9ZG3QX1erqPrwpsqqmoXj9sy1q2odzB2PaMtqh39qkeek3rtTcJgMw",
  "key40": "5NZpvpmqzqYYJDYYVjA1ZyZ189oLxFrPgw9GeUWNamfyqJHkv4qZHwzGvdGKKYpr6ksxQkgcpeXLnt4u2ac3i57C",
  "key41": "3tnponZoXsogL57o8KsezQuwAnRjGhNCv3ow8aQf2weVgssSHgif6xS4zBV3J7mHSRzUkzDQuuQwy1axWW53fJug",
  "key42": "5hpp6XGSgFEHEBkJB3xk57egPZUtFH8prngDMKzmz1GyoPB1oUKeMsjauJgW3K5nNPkmRecKFrvvz48NQ7NEXcTC",
  "key43": "S3nnqAu1VeEnqpV17tS76imSHbL2SHAP1owuz7G67W2rDioS91APYZGtyHdtPCG4k5VvztYM2UBp2xt3aRkfiGF",
  "key44": "TXpMy8twyVNhcqSgddTvNfcHaWLRkV2qdXUpPVaHpyRQDWjoaEYSWsJBTAKYqCgkyjEhEjtB7bVgzqCcBLgYQD4"
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
