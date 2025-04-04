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
    "3QCHmhBc6MGKtsDzXcU1YCqdfgturvQqmKSm9cZsu6CNZPcYxvXxe57GDghfoddV7pStNBHFWJAvhuqnmtoxtPxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WixcPGcQuGCkrLhgVPvqpdEJS8Ww91hf7XobRSiNJy4ADHaf5ufMLKGutaKu3LbGLDXRDVy4m6Gpqq8gVR2Qqp",
  "key1": "4zb3N3SDUB6Q5j9dUZspdYWEE5rMaKGSW1C5cxx5W1Mm9n228xeXt57doEooE85gnhTKkL7CH1GKnL5ZXkM2fVXB",
  "key2": "2TQaUFVAtQiJC18Hn3F3CqJXHFqZ4RpewnFkxPnWVkAdQHAbcewUPeRELcAxSeKQMJkhMUMPQqeDwviBq3SDMbuf",
  "key3": "5DUVieSdMeGCx6YUJGBjLaEJZ52dJ3ezeQjeUubwE1cytMx3YB5Vo7SpZ8zW9UMPXmRgqm9ZRJUkcGSzX1pfdND3",
  "key4": "5pK1oPXn1YNqJkKacP82CPzGmnvyFAPQ67dJAju7VMtfNQYXPwxD4a9oc6D341BVHDJWWLQASTnpNfak5Wm8dHiE",
  "key5": "4GVLrYpqYZNZ9dn3DN7K7SdbqSBVu8UH9xRF2tyEaVpBKYgm2KpFEkXEwJmvyquwEbXN6DJdWDNTDAjgNZDjBowZ",
  "key6": "4AaKQYYepa5uYYA73r4dNptJ9f8pXxgYipUQADQEQutBcVD1KUAhAtEDe6ZLcLTrwdqVBfZKL1AkuTgXvbJnS5mN",
  "key7": "4UGjBvPVAwhz4ZAvUXHgkAAZYoGAmjoUosb9egptD2VjagcNtqdAX8CiHx42UdgaNTrvkBKCoc4nrgf7mTv3xf4y",
  "key8": "a1FT8NTqv16krj9Yi5WWooYBvg5E4c1ewxGNMRCGge1sAmEmMQKCajevBUgVCXBMM4gXogvxSema6eQzgWGq9uY",
  "key9": "2KDSKnBnUTGMaSuq3i4XcHjcrLgHJ1iaCYBmg2L1BLYhAb72mmfH1tgRQEK1Nu4p1HN8UrGEhJkuAJgaUmUHKPxX",
  "key10": "64XuRgh765tMjxEX5nTe9WVpsDaQXBhFVfc6umgS3L5bVSBqwftkgdY6WjLpm5pNHBRnpojvUzwHEtsTvnXN5zVc",
  "key11": "4iYpiRmK5vALPXSxzwDZJ8qsHxuBM29a9KdP2t6TtTq5AgeyUrPZP8efhGFHD9SgmvrGWeqfswkzxPZhHXHHUBNb",
  "key12": "4WXJx54SnKWkkFEvtspt9K7MDALcoU543v6v3pWVVqnSR13rrtVAbxpo56ywKbzJaXWc9yFHALG9sqpQDJvnzxzn",
  "key13": "3Nwi3pDGe2QD8Ck9F3Bf8iuBP6oWBgfm8hm8Sy6bEGJYRGsYPdTWSZ9kD2WtPspVbftrUM5UbBfij2FNh6ej9LAD",
  "key14": "3JjTpa4StnMpvffWzbDWWypvqxiSbyibv6eUWGZAtjEM6HY7zxLoMUkQWAn2mFzEsYGKGgoxmzT4UEWcdDEnUBv9",
  "key15": "3s3G3sLcz339U2yaLs7zwzQD8EN2AywziqTRPEJCdGKDv9gUVr2HQGSA7MjDZNFW8PxrSCYYkLBHmbuC5TwNbCqN",
  "key16": "3vBLrhRKrMV7ck6e7iqCfUPouhVMowC8DtCbkBrV4QEUQVd9kmgkqAFt4bDsNY43cD6wKpCz4nKBHGa6ujz4YFBh",
  "key17": "4X64K4xr7DriukWs8QpxXi5DN3qBXfEmUWRDDH63fqytMnJsQ9Y6kHV3q63hFZ9vrSweCoznLMEGHJSUwbJF5EPU",
  "key18": "39A7i4dqXKEYUD6FuhoS7GrKyg2wDT3cQhXKejYgQpWBdt1DPrJDjYnSk5ho3LpjGRfbWTMmXdqvDprRsicmLPcu",
  "key19": "41My9vA7ySL8VjbDr8jnYDvtAPGgAWDS3weiQF6G7VwMoc2VdFUBgoJkkx3JwrMq8qFsLu1cqB1oixB9yZHFX8vM",
  "key20": "5QdnAGNgdeL8Cbwrk7bM75dEd6FS2SLGEGPADNZ8t69uuNHRD4bzFLGezKCgKSUiqzxfRHdWYwPhqQ9ucqP6KS1Y",
  "key21": "PMJUc3dK82iXT5G9mYqBTwD6T31fyG2kP51XbqG2agmYChN1VRdz1cPXUfVErQFeRyJMAP1VJPmnsRtHh4UXuUi",
  "key22": "UyfUMEachtCdK6f6bGy1pGrLA4kyPvtXvEgWZtR4DEQP9Fs8pf7vyZJj5zYn8JS8BuqqH8kYaiZHEMAuY93jQuf",
  "key23": "4S9YW6gjTzWnjbjFEEdG99oMMB3cKtRKNqXePi2ri7gzphZ8spnct9Rt2MYB86c1A6PbyQkUvECPunnDBHS9YrTV",
  "key24": "5wed4dHQEZo1YtuizzwkjZp2QxBDguenzxXBx8oofL8wGjiECfefjphb4QgH2fozkZaE2B73CUqtUMEzPRB4L6Wg",
  "key25": "4LtYgD1NJFCpaTt6fTJFWHF7hmBErspkqmTL7KnmQrdL9tp1ArgQmbxYWYvGXz49n7rWpC7qTjHXicJFbKLDjybG",
  "key26": "WUEV1XgG1mTNaQ7NC3tua3DfN5dS3z6mjFGK6JZ8p5KPGERibqzSF7aFBpbwbmLVuYX8BBdnTUfmywbjxjmz6Ls",
  "key27": "3qsDGWQvUsY5AJoykLEPmHTss5ZpU4JN5mSXEnciXrAodeG8poLf5YGjayqmWzFQ6ZKhNwFgoKMCQTi5xYjqWtje",
  "key28": "4wYELyRTQJFLykxs4ZJyNTTajPunbrq424UAFMEMfRCWeKGx8BcYVpcfGX3xuH3irihgNNVVNr39sUT4RXxs9bRT",
  "key29": "541HpvHa63nNsPZcRmHqw915BudY4BGtvYsUWMZrT9LQjXNoJYiQ3s53bu1EostaJpCuNPrb67W9pvYd4pLh45pC",
  "key30": "Rq9Ln8rCDAnEqoc64E8vUpq5EqtQyN2PxAmq5LSX9EPnkWeHX83mYfjnFLefDNyjVdk3f9ZCJ8sZ6WpurE7edLk"
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
