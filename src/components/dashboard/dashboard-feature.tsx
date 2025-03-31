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
    "2mDnzVQhbfizzhmv61ZgjLbXcnuHTvruS7sDU9g2JCxvPg6Pk2E4HAEjYYSM3EY2SuQPxa8S7YGK5G9hScrPMceL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cjq2Ny6jmYtkaefunpYwJJs2sejbwqubU2uzxpmBxBHj1DE4qjtDYps5GDFbACzFu5NzxQzZGKf5WvP92wHTb6E",
  "key1": "3a5nstsMGD62VyJNty6NQt5WVeTFr6ccJCY5kTCQHbuivCfAAPjPj7HthTSFje3kH5VvqjH2dVSC9vGpt9mbQf8i",
  "key2": "4UxbCV6rKwSqjt2nC2S3VZ3JrTC7WdLjMY53ZH1cVuDyDWsLEdDDquBVWcQijbDfKDsQnQ26woqMJje5sL57Ug5L",
  "key3": "36Dn7W4CfQUV7ECXv5145H6HK5Gg9NPqYgpmko5XbeHdFeem4X2XaJB341S69cebQsGAHxwGJe43VqCdzVCmJa1U",
  "key4": "61noeufjc6nixcJmCtmVS1tAZGk9X2Jds8gA48SSsSy68UYU95Rhs6yxN57zHShjHcrkYZvixSNXX2qD6f3aDmom",
  "key5": "5G5BdDhFKBe4X8UQ1rYef1GSFv2dqCWkMLhA21tvdeT6ELDWQLhsKGgA2ycBHgtBJFq35X4d8EYULUWbdRnJqruL",
  "key6": "24zGh1npWz6cy2bZrRw6GxAvsTJCsgxhqzkVNqN1jzv9kyDS6eh4Z6JsyvqwcPXQSm16GmjVg89hjMn7FTg9Qtzr",
  "key7": "5uR9xZijF8ZtJZHQEQvVRvnSTtcVsvtywnR8fmRPMTAqKEV4sxmzZgPvXsVZ1YpGCHUSjPppghH1qL8eduyPJd6Z",
  "key8": "2XEG6NXShsuCi9oKccdRse5otAwQqUC14sL4Afhwfif4cQA4kFXkLt94TzNYoonbJKeqjsSS1Hy3RTsdyjenS43a",
  "key9": "4rrzQeh9ah5mtXVs44HoeFRrkjpidnQ59SmBFmSexPdJUok1KczxYR45rN5LZWnbK53z8MhTYr2StwLBDc77WjdC",
  "key10": "5WQ1iVyguojyy8s752PFtbko2jKLz8So4ZzbabdJAACx1J4qPYuaPZszRV1Skx4yddAkgoc4789GxR3jvSrHu8F1",
  "key11": "H1wkZStB9MXS2cVkcfppikpxiz5bfHS2kGH7yp5siUhPYVXstd56rfRLUbJy1s1mPvgaviFMVqRWniPAkiE4mbV",
  "key12": "43fecbUBmXfRBrwXoJxwnYN3xwwYvCLZDm347Q4Qh3T1YDtqWYxPBAmQPupEkipwaeVxemL6dqbja4R4AsdPABEZ",
  "key13": "5o5KBVvBqhPY4Za7afDTHFMf7EX4WG1GQ35n6rdvbkjz6M4FhcgEG4aeLia7qRqRuon9vzEtGrwsYfjqYywBaeV8",
  "key14": "4N3jndiVrS25FY892RZF8JUy3kVVDYMUGP23U5jmQSowtFYFPnc3dwV9JunUWKrVkH8GHoeKc22m6goLpQBNDQU1",
  "key15": "53HbxLyGpiRuA3rpBqLEGTViTVhAJShqKyqRWBcqvq3tyJea3tWmT2h3AgXmddRRFwX59B74NeXYJyuSnuT48Qi",
  "key16": "2qUezdWHzXhZQiMVFyR21iRNfzPNmowxRDbr2PA1MVMrKgtVtERq53KkoBLnbi6LGjXSo3b3d2Azig2SVNM7UHdg",
  "key17": "3W1NAzU4XdzB2Jo3qds5pcfNEb6cDg5xeZ2ntkCwSzhvDztA6WjRxx94wcsYP9FzN4Pc4o4eF5NxVhvEucxjMmsD",
  "key18": "3ZDq7682hqiR3nJTXh72HPq4rAnxhnP3cfE9L4Tk1Lr65cNd3pE5kk8dNBB4HMTap37iKc8Y2Hnzc3mA9oaSgcWJ",
  "key19": "5fsdUf5fndWf1BuKiTU5XDApUSBcKYhUNQFypHoWvHq2ruGyxqXZFmaFUZLGJDGwx7MDuD8m2C4cRJ6tpgXiWiXb",
  "key20": "4JPGRTYaE1kqNUaj6zH3hoHmBSkMFsy7owWF4W8TU9gMVBkCsrHRdDtJ3RPkQkQxzXRt5RgcgPQjpdXbbD4S2ceG",
  "key21": "25uo1bVtqwScE9pUzdy1vSkRBcJWReSGaQXbQjERZFkFqty29YwyacagQqicztZKWfw4Tught3wQc7K4msnQnxaJ",
  "key22": "5F74vyV8fgrFfu7GuzyCxJSVbLA2DCKNLeCrpomW55JjX4oZh4xHDW49qy2X7L7PRyoeCfkFiKwuTicccUouELqZ",
  "key23": "d42oTHP7Ud3ZtrRjiV4Mpi1jMWWNeoy8qbpr6nZXsR93dLYw5LpUWZ9vswfQNmmzUfQKaRF3dodwSWnDadno4za",
  "key24": "4GiFE6GE3L82AwTUV9NhyEQvrURu8zJAeq9NGEmkLK29Wujfm4HM9EXnLc8WrL9gKMSsofWXJWjvygHccnwXrKVB",
  "key25": "AqLrhxEwGefBabMnFJRda5PbVHs7HWKtmzsb3qXcED2vpoGAV3ZqiHaxRvkYvaUTuzgYPZRW3WJKBGGsQcb6tmH",
  "key26": "2QXnAvjeiG6erTMh1bStsPQH2Pf8JaKFxaRFaZiKn6gMF9yHep2JDPQT8bwzdT1te7LbnoXKqKQetkZVBz6mqtt9",
  "key27": "32MAN7ACr165KA9yajjX9jTeAhrJJKFe343MZmXxRHitTNiAyCLypHFXXDF2irqEvjX1dLFd8pHt6s56Zh7MK3n5",
  "key28": "re7XvFWJZG9hfHXyxhiio4v13FpFn2E4wws4wXSB8gJaGQWS3ddnbFn9DPto1LKMja7f2hxmydC4t4XiZqgYTPW",
  "key29": "meJEKMAeCgMHb24EKhf2NJ39WLxedkjfJXkfAinkobjNCCQwvidmvCrXkC4SPsT4QgxSc4ZeALXZi84y6sbMJKk"
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
