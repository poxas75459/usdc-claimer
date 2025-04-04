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
    "5jNv1Db8JNo4MajS5UnxDV8eXj9ZypXpEx5HA8xCNfsRbdTKGL3dfyXgebLVJBiE7rW2KNfyv1u1BCZxvgXspyLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVKzksYFFcWZsAUSE17WqkEHjnY2mNb5qTmbogn2C6YiE1v7wNXjh6YUDyxHTahQYT5N4whbxHgPh7WADx6ppQ1",
  "key1": "5SwaFmJGW2Wj7d9GLXyjgCqShzTqHqMk9ZViXcxCbUERE55BprWbSxZ1Y3i6LeU9zpseuQjFHAVSzHdVCwe5wdXE",
  "key2": "3wiR1KMe5h7gLVKQLhwoa9ZhByUdne2nHKCJBWULTohVQ8MnGqiBgXvTSA2Ts1hVKYEBGqbHkyXUZRpSJFXGfQp1",
  "key3": "5FpMzjjmg7Z7FfXyGovMEG9bejezdaP733Y5sLiqViKwwrHAsArbyWJodm1qJAPn1WP8vbU7eJjqYdmM13Bw8Gy8",
  "key4": "51NkoRCAYfVfuwUe1D6NRdDFcnveUC5vHsuLmgBrAm5xRTKSsUNZc4PMqrBaENfhVQrj2cVDN74rMfvThBqzXx8y",
  "key5": "2y3aWppHjHYZMvF4mx5PsGWeX2DPqVgpY2wooXv9HwVNFDkEQTriH9FNkDSTpkx7krSjJHWKJUfok3X4vfubHEeu",
  "key6": "5wpjyG3kMjyvBptxiTfB8kYYpwGzkN2bcVszfk1hahGMZcrcFj66qnB3gvWDXSLYG8Qo5aVmbiGcp6kLF9zJHcjK",
  "key7": "4B6Na9Sqx8NgD31ozStNYPQETNyBMjyisuU23aHWkg561QVWwNCUfjvZdQ4BXJ8dYUq2g8kz3ZZ4Pv8J8Mrf4ub",
  "key8": "ZdqSZeEeua8GgAhWZbq4TtRDV2xD9JoeArFR5b5PrDBR3SLf7BxCDvXYWGVEzoNfCUCtE7UZYw7aDX2emQJJKoK",
  "key9": "5owjhdruVBbtRdKC1j2pr45c3GR6kVJG6HiqacDHUkEv978HfosHu83UuCg1maicd7CL3k7x1mLjL7PqwoWxjVVw",
  "key10": "5UeCgBfMbJU5mz135CPwUKSgFQQbSqwZ7GPcos3YAfEwkHPFTdgjUGei6jKY6NxxHx1gdJryoPJFKc2YvvFxfjSJ",
  "key11": "21RkjeXqvuHNwRK7VkyUDYFPcRkFeu5VqnZdag9WfwHhpmQJi1HCVG2QoCKRYbhfhwimaKfid15vBMcQghUSmcyK",
  "key12": "YDxAecfzev2mZVv16R7VUSc36P5uJ61UxKbaYA9jhBdy2WQh9RDAF2mN9KF857hRwuxHWaRFDGSM7SBE67JK4ct",
  "key13": "3FfsMMbJtoss3GJYj1F4nTJaWWueZzQwbN82Jj2A2c5rn7nVFDx8hQdUFmT9wWsvk2ZBrhRBAGZiDFJ5Rdkh9224",
  "key14": "4cA6fcrtp75hR9hWgFQMjdwEuWqjQwq4CsQxf8kATorSCJhNk36nmzcymtdEqb3ehdD4RW7MyedB7Rc1rwkAhEY3",
  "key15": "5GBEyYtpBXeCcyFtkUkzn7meTXkx2zDhs32gBJBRiVftMR1TMuVAQFtdSqMNurE1qjZh9D1R8L2uShVcV6ajAEo4",
  "key16": "37wVSvEjkxbmuypTBMsnFdK56gBczuJrVUNC9i6QxuCsHn8V4cvcBXsLbXbPL2qiNtPaEKMC68CR4XBaTAeGvibv",
  "key17": "4NNcC9wMSm4j5pWLUHV8mVscpAgM7jqhqFh7rBkHPpmpiHtp7VhenmEwqHPHDhPUs8dUewMcravQ1nqJf7n1vr8Q",
  "key18": "63X7cQMsggivdjgLfLdinBrHGzeQuibeoKu6QqXDkSmrzCPorhxogBprVr6ZtoKbxa4J1yiF4gYJQHk58fXPES2",
  "key19": "2MW5ioe6eC5bLSMYMUtKm8BVB5LCgKv4senbVzZaXuYG7iQdKj2zUYiES5j4FfM9Mq8EHSwvP4jDtGC6zz8y84P9",
  "key20": "38963hAspVELroRzpw9DK6NxyA9Jj58CKpWvZ7U3sDwhvEUN9JAR6Vu9jMJD4twnTLxNHetN5VVDw9bGGgYAH2Xa",
  "key21": "3nkF7q1cxEsVPJZHbHhkkvgA7jaKaK9SUhZvidwvTC6muXS9ujr1vHrmbZmurAmNwSUit2hdPWu7QtwnARKaajME",
  "key22": "5w8ELVY1Z4NwJSUVjmaLzgMhtMo3jqMNGFYheFsmGrucVa3RhvXVNEgVNnk5GKEhT398ZpyNksoi3Qm6ZyLCyKP",
  "key23": "2jbhM1ab22JkFicv6TAzjAqu3D65PXpEnBL76eEbvqWewafJBVwDEicYiwqy9WVeqBDgiXtZVFBhsgwnaPn5cMp3",
  "key24": "4AYGgxnKsJC4GMMQe2951YUUhaWAKAzip37jVi8jLvdQLPFUCzLAX249bnStZfsAGLjzUz8ETU4rvgVLF7emPgCD",
  "key25": "2vSmhLBMoPHmtqEBGiqNitvMBfGs1bKPoGqyZFQB2wm7Nygi1Fr4oWvgWp7cPfUynQa2uCtoiYhG1SF4Hq6rCcMq"
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
