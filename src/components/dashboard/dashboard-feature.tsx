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
    "beevfkeNZa1dUanCR9hPmarY792ZAvEfNc8z3FhAxwSJ5FkyvaA9wQKTP7DTm1Srq1V3Xbnp9Dit3DghKWQ2qJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uq3R87nKqNtn97wTQWRz74epMxsQ2yUsc4Jr1wNi6HdYs9g38tfRbULwqukbQbeKqFfeWFCrfcKhAEWutU3pSpH",
  "key1": "4dCE41wiVh5Vo3sQ4yfW88uLpVjwgzEe34xvG1ZRyXnJEZ2uxjMyKHceXEheTKPY1nWmJr9NovM1TMF9tkGnp63N",
  "key2": "28PynHiAm1Nqcmk4sz5nGitx4WCcSeBtWqLnYM3C81w9PXEFmbb6Sp8QqhEb66yw3UY4NEGW9RQffrC5hMVujYvm",
  "key3": "59TH4e1cghBDcDJn4ASduEUDJQe1DV7reDiPipQi6KheMGk6VEY2anLS2tC4KmMCFEdqLa4VxEJDYbfynBkGXmKS",
  "key4": "5Sq7RUpBGD9aj25SzSXRLgGZngQqcHzS3rWE4GnLaRM5B1NLYUDWEvSAgcsU5WqJn7QDeUfVCN6BTVE5uGzbj4rr",
  "key5": "y7kQUMeESwKSBX17hpwsJL1X9MFr6S6AidJo9h3mBBSukzUpYG4VWWRnwyR1jBfAa5iaMAHb6Sp9QPNH39x7Eir",
  "key6": "7PdCb7NXTmkQmnhNzASw3y9UA7PcLqLY2g18iYceG4vwaJD6NV2GWjD7iZRzoCRWXmXS9wbiDmvaADU1DCwRDMZ",
  "key7": "NYfc1k4HZh5CvGrDD77qt9ce6wNv5LRw4S6FmvnUoKLbqMnTbb1ordth2rzSRKDJy6ByL49m78ZBU6prrTneJqN",
  "key8": "62tbzUab5EJpP7najCvmKjj5sVjhpRWQoVS5LoPsvAazEjaoVzj2JU7jJHiC2KE7Du3HXJ2LbU6PyhSJdczcCxCT",
  "key9": "2ZR1JoGTQhzwA4pXZeLnsusV7Z4Mf1gKVQEcd17e5BiVYDjcqrC2FkJugY2eXeJ151s6FE7uFmbthZo121vX8tRm",
  "key10": "ApRt8qALMTzgKHm967XMetgnsBw64Zzth93mMSLcQyYPV13srVuCCp6WFXCabRrQPs9mnqudysQjg5wKxBfCJ24",
  "key11": "5QEVoSmCKA5yijDEhLiykeB4npbtD4jjG1MktMLaA56keaoCthhbgtCRF6fhmTz1SiEU3ym5nSZ781exVJiv1xsV",
  "key12": "4JqANaYnsvCcKte34u9kBYQtvk2xdxUwpHpmMC6ggVRMZMSJUM2pMirpUi4nhHRHFVo8nSRMgNKs1i7HvMQZgkjt",
  "key13": "5jbBS2N4R5oXyLVBw2f7Kp35ZjvRsYkYHH6HFo43j4gZxpipnZrjsX1QxhjGcNsta7qiKNdmvgSyfGrcTjx1CysA",
  "key14": "3ot6U9j5Duo67hoCvKRTSUg39AsBgCvVPmAUrJ8eyVxhJmYkbdyFuR3gaVHB2Y8ZGQyTrpmErH3pcvDyxcU1QejH",
  "key15": "tFbzL2HVBKNywB7ePYMEWYop61gcSfh4ZLjf837vTcniYC61XtLjwgRux83nuCE7mUTfgK3givytUKqhFjUGUVG",
  "key16": "56Kkr51oicsmbExWd9hJyXx2ux3RULU1aY54JAU4nNoJMjtJJuwzVxMBZknue9uNucucTnL7nRxbHUnKqM4M2V4w",
  "key17": "b5ZtSm1JK6fYNTpXvaZRE7gwhobzfx8zcMCj4MNaBsAujXA2vr89rJyoTeZYRnWjJYDSjreNBPtx9uT6FNX9Jsv",
  "key18": "4e1zHkdZz2pnZ9J97ji57vWjWZTWcrb4VHxxhwmefkn3CGgSnK3FnDJmdfAgPpGBsccXYCWM2HF3XgAQSACiwCCA",
  "key19": "56eXi5GDvmPUREWHyLjaenoAdCVfLrA8VdzC9eJ1QrCBohC5MTcgEsDjkWwXNc6KMwqC2Kk56X3KCYoKmThPR3Wk",
  "key20": "f8coymniha7Lkjv4RbEwhXFbsmtHfVAsVUTNq79kbwsxCqsxDgjJfaZhuj4TqyNdgRMHeziw2zU2wVqTkjxf9K6",
  "key21": "3NXAF5QPDdkqNs53E3S5bhJRvNZusp7bn2Zs8mZVP6hCAginkYy7Jh45TwRCmP5CHq9vCfV2inpCrD7LTskmugGR",
  "key22": "2Lxm8Sb94hghWByX989hYupkYa9kocJKgjtPAgymXiYkqiMhyt8DF2TQmau6By8FTcYBUZTgkQc1Ph2VQfPDD8QS",
  "key23": "3k8kg4VCPLfp7cgTtMaiezUFyL97CPLNNztksCZRZtom7rwiBL5kB3aMLy2kZCatkXvrnXiLuLhaY5o2qRhRMNan",
  "key24": "5ypYQhtddkDjni4wTUrmNrFwrUNoiyTr2GxUS63aw1RsAbrWvHey9HngQbEnQaRm4ABKiHKB4iVEQQNvuNjQxM7X",
  "key25": "46dPizmJNwtyZwMQhtcdSm7oXYKCU3gC8SA4oyJ8ts2yXxw2Rqe2BtcwmCEb3hxvLV5mX9ZdgbDhMvXE8dVECj8F",
  "key26": "5GMsEAG1E7zH7DboEnPZGff9Emsyy6exniZJrGGw7PPAkroJ2hP1Z6gsuePBb76csZNmDiJRLkXbzDG4DeBjW9h4",
  "key27": "5taKGqs9YGmzA5ZSd73LEwBvGUfaPDfeTkj4Ki4DnjyfCywGt5iCzijchkozA4ZmWHXfPWCiFD2HCSJLSGb7ygbk",
  "key28": "3QLEvLUTfxxe5rG2HNsen3zotW6q1wwJUPcmNmxhaCZGw7y9tmNoN7nqKgzrBaNUwuHMEJu4eUucTsY1ATm31idY",
  "key29": "416EAn6mwWRjtGbdPpEpkJ2vcEUD3fHP8WUdsEVNH1vq1Jqtnm2fTPkw3avdVbbqCgBJWD5RskcZJUddwGcqVUpk",
  "key30": "2KSFfhtXvu2Nejuv6rDFGJEdCXX1j6FYGpwajoMqYRhGHerAQHR4nxuzw2kRegxoVe6P5aWpP1RWsCShYMGi4TZX"
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
