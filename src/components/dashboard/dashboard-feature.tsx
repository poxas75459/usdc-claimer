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
    "4GnSqaDqZ9zzHGhjws9zkSPUMPkBhSjVX8U6d2e9ib9V4QTdYz6JdaF6hiqT8jqPwG719q4mPE2eckAANvfB677"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28FLqK3sWGAN6G2Bs83HjaWykVXofG8KrkcEfHj1qGqxw1ydDjVQZGJHSBfngdaUMWB9xULirZdG5CKeu84fjeLF",
  "key1": "2DxzBHzFioBKwRDnRDuPFZa9Qbn16pKf8msLGDwXbVpmk3hAFCm36vqp6RoUnkt3gwxmXCZeiXk7JT2znptaScJp",
  "key2": "2mSbJgqKcCbWy3rAUw5aJjmRZKJuP7cvsahfpg1RoSUkw6MCRG7ETmE7PFbTPRJWGUJHb4tvWu1M7mDFbXS3vA4h",
  "key3": "3YQXUjujL27CEd8GfFVpWMVESvqvyhnSG5BcnSkjCuTEpsSGik9DWkkqjFkDwgteAR9Q1CPAs41ch7WmRo6prsq2",
  "key4": "4tAJqvMj7U91Abc2cTzCnUpmNJ9Sfzh6UVUKV416KNfisH3JTZ8epGQLb9M7FBSxpsgfNyeyMqNi6qSqfyHY3Tgy",
  "key5": "4dqp7uPWbdiJWkJddWGyX7WdpEfxtKXNWDfB8Acd8Ktt48sMRrbo5B4pxCjNDGyjz8gu8cFx45U2DsJVUbYfYd6a",
  "key6": "4wm1UvAYXa5aHBHAyKCPCd8a32d9Gg2cKrWEyj5nHxm47yXKRexePC3hhaMJ1wzUoGpaAHopT73jpYzimczRFqQt",
  "key7": "4pkXHwzhQ1qV9BwEbj6HJq4ihYNcNuhcJHaAxm6VM8T3nNg9mEwBwfCmZVdLmnya3ELoJh2NqQkKn9RQTXbc4CH3",
  "key8": "XpsFySCYddg6DY6aKdFBN6Kh2Uy15ywji3yot8w7Pg7UTKkxCroDvJQesHtyx8PNgf4CtpjtkqzdLUj3mWHMe5R",
  "key9": "Qc3P8TsK5StPBHGxJvGUUKfx2gPCfgbDW3UivhiiyTBZ5jXYxAuaC8QNWncjSzuyLchhaCLRNQrGwyUhU4ehTsR",
  "key10": "2DSn2oJ3rhq2n7CMr57KJ4yZJbtq7TRTGyLPd7zmdiUpqxWAEhf5xu93xgDNxKjkKuZXQNg2mwLp5CvZWQRuzpGu",
  "key11": "2znFR7xvi8Rqujt8ArsXEGf7vo8CoD1uQU8mphqFddEdG3cySo9mEhbDjZ875MeXajWrwjLFiPkXHrYom2wtx1HN",
  "key12": "3vYttZWnCXn1uhVsdgmf5RffE9Px4ApZRQJyxTyXeLKq6t2J8vTFhjxDTfAuByw5i6w9Edt6xTjL5WXEDtVGRSEy",
  "key13": "5vGSFqvYgzckqy7U1msxvsgpKfye88tGXd2rpv3B9YCP1NE628nASqJBZnxPLa24MnRnnwppweW6hSv5xRriZXrH",
  "key14": "ogoYG7YWcnixHKwwv37PeTnRknqt7ELva9EVyM8GJsJqEKuh5p9LqrHYEwMSCT3SyqEC3umg8zWDCor6mNu39vA",
  "key15": "2xKVhNLNKcavx3sMzWF6XHMGKs9x8nUqJxS4X7C5RjLGNTVQyvDXe5Gzk9QbYXyaBfot2enxZibXk3eRn5BKX565",
  "key16": "6RuHBFTseECUwPz4TtUxBdamaxSYpT5xpYfJGsSR4TRB5jN1gnqHS2cPs9TayPBx7VQwZijv2toNnv3Bx6ByEYi",
  "key17": "2BLGTn5sBbsTD2ndRwh1ZaDEgkQdMcuu5kuR3eD4uV5BpsYronBxkoqdx88ftRB1xA3KiDBH5NEWXmsP6M9wiQVh",
  "key18": "3qsvLxms8igoBwQHDHtFKYdEwwV644eDNpyUBdxbpw85Q71kdcbsJ3ULUcCu7vFuUHtwzqWbkJUVz1FGoVWy74Ub",
  "key19": "5LbepDL5Npy8wnycbvBr5Y8dWF72dLex9Y5RkZq5AnEHDa6uznmoTXQgY11Y1Gvih5bCW1ro8kDCYmRj9orRWcB4",
  "key20": "4hR49AxVpvKL357WmfVMLRVDgXZRCeH9QxHQbUXLQziEEiM51sRCjzAkuUgceSSwzR15Yemg2muQhZFKkgBrajyC",
  "key21": "5S9gTDPnvWbat1vPBTTTugjjLFTamF2QQUCMkUZ7gWi1Mx6gyxf8RYTz4pkGEfqraAq6R2Y9Xn6n2ygVEh8NVpGz",
  "key22": "HND5FmZ7afUCx9zQuvHSkmDeXad6BKUx5ypLVW3wxc83XrhFSXV1ggfVWMauD4BS1WNeV3bap6AjWcKnedfktYc",
  "key23": "61ffmGVgTRjKmmtw3SUtHPycPXBq2XKRStmEcjjqAp6dQbjZ1y1jQM4kb6hvijsFRuxgRaMRe78QoaDhsDn8upjw",
  "key24": "nohzX3XaXNpqR87CfkH4tRFdsrS2sH619MZUmhYLjyndNQY2azN5wkezJT14o2TgUt7YPabxxk9PbEYFFfW5C9N",
  "key25": "ymYMwXkQ2jCUurgfMvijaGyu26nuWYQmmouRuyULACZeMJauFjfLc5jASPp6CPNrw5eHT4bE4KdpY3tiP9gs1Hh",
  "key26": "258oyW2NeMscC2Ju3ZQPZZi6SJtSjJNph4ozDZuFdHfTGRFgJtR2qWWrWwBKjcUe8MpJBMjVPWzMKzp5mYVR1Y3i"
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
