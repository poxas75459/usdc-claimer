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
    "3txtVcuYNT7xvxWnQPgoMHGAHUFouFGy2amUh1zEH9wSo94PdtLTa887MRZBvrtYkw83nxSo9Fw4vyGopB1beL3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9wfP6k9V3Emjhpn7C9YpHzBCY1c1PNUhL4XUYDMJGGCRnFLgPrCFGAfYVuXfrAdgbeFRKQz55ZatRk3Zx1p2S6",
  "key1": "3jGRbyK9cnA3fXzuA1y497P9tVxdXWBaoNoA7t4qDUokeW3xvzMvwTZDWnCG8CzDZaZ22p4Y1dNRZ3X4e5hKx1JP",
  "key2": "4upr6xSDPpYuAEKgaHUDVWbbF5uBrEuszW27j32BbazFT7sUC5Nr7uLDsAo2dvccFwLQd3f5k7qaHgr3ascibHGa",
  "key3": "2BzGiwXeAeisVamvML5SU8KQJxddHd9dya17t8xLCpEhxwizutpoVhyyVWt9UZt2fUCLHfaAVv6hv8bYL5StyqyR",
  "key4": "49YJnPwxKqZVaUcy65tMawC8QE4wMdFVF3MeqSEqrmRB5sy4kbn8EFPGvhBzH3rarUJsVw1iW4q7KCBRenH1PM4S",
  "key5": "4mmbeMb9mpTRAazSKYj41k8jyvHZWTubec6vbrx9v6mw6ZSzBLcS3poMdaptaaevk4ymrauzQTh2TbrNQANZMTqr",
  "key6": "TDRvAHVoqGK92ob5dAZbxYrYGp919YVZ9p9r3qzkvGJQv6JZxwAriXXFkTQJsvVdgBQA7USSGLxxK7LfXoh6KuW",
  "key7": "2hdfjqvUVRG8DLpdbzGfrEW76UNgEmJG7KeKThLLB2rKqX7FUYdgCDyL4JwVcnkWhDe47uLSn5j4duSx1HupgZRa",
  "key8": "367xY193WsoztH8bvNvtguU3fB6yGM26jEC9yKNEAECFHuNs1J5mRgHZ6saC3EAB7o3geADUUB3Gy6JxBMhk4jc5",
  "key9": "iyrLiNiPcnXZqK7ub3ZwrNoofp7FUp3BBnL2J8g6g127uNf2B69nWDQDxEjGEoZy31u7aPFzL7BGBWTHm6bEwpp",
  "key10": "2Chpq9kj45LmzwvEF4sdp9JRPvi78ULQVvnG4HapjjSYkQWvGRrKNjbKZEb4w6PUqvASvnzW8CGpxxyUDaGPjzwz",
  "key11": "27kBuvLW9cUywDS3DHBZg7m3Rj9DuhXJyfZ11xdsmVja9Wq7WboCKY9wCSZk22oELCERPfsuE5Ba2zFNevwL9KBC",
  "key12": "2ExfkH7S8USqbJ8o8nMZz4N9ym6P5Zv1W8ndhGzMM6Z4Z9sJYAmwbmgwhrAeG2QiNGcezKdtvMzu3euqrUwKBBSA",
  "key13": "5XJAdpWjpYdtkY4HxUeJDGVFZLB4eGGHdhSPh1zKvmLrXogFR4PGZRpNvhfQJuLwyv5aSx1R79pBFFMmVmVbNmkg",
  "key14": "3Aniyoi9Ns5Y54D6Na1XArSSkzBhTdCwKLbgYaectakrqSBuR1T5DM1But76KrC1JwaQkeEdk4h4sAQyz2kFoxZM",
  "key15": "2WjrCHambmXgS6LhZr1VADkoQ9UNEEGLg1R68AszKfLrBv3YsXe4Eturu87i1bMuLQWnYvgWqR2QuSk29QW2Qbwm",
  "key16": "2o8ZNYYNXiEzeChJNLXcPmsU8Voi5hdYNmH4HS4mTsGKuJU5UY1yxsvcZRHx5uW7315qht8T24vyYr5Hh5sSmsmr",
  "key17": "5oxymqb5TiBSPtWmXJeFBxEw9sehNgpsRqfAJATvoWjzNY9i1roxp4kNzpWKXYcneG9DXgr5EWmVj4ntXM64myLY",
  "key18": "5AoinhwqQTtRvAV18cRkmVWvYfs7fAByi99zYYjMAW2K1kiJknTBod1ogvsJNG4oMAtbRRnRCzQXs3mry1kLUYTs",
  "key19": "23N4yD34KGQgb9G3e7uHoThkas71UbYDdzkV3WX8yYWByvWiBvWMKcJs4hy5A4UaT3D8nV9jRAHzJEG2Mf1xZMpW",
  "key20": "2NDmXpydVJbb16PVmenXLQ1otJuujpEHtTb1qWeryAZmNfNXbiSpJwL8jpuE2JrXFM9zUD9sjfw7bth6sQ9CN86w",
  "key21": "2JRcsBJiFpmktJC4Mwp2uL1WRSZGeMhdAUAER39tztQKfaSvgT6DeBX4QHPJGbJCwPfBStQRvj6ojiiXyVzxhXmn",
  "key22": "2PuACjJyHCwsq68vuWJvhsbWjZMg9kQvSX12dFawCizAHFqpqPWHYJK5NGtdyLWr7KEzSkAvyDgx252L4WfrbQtB",
  "key23": "2G9fq3XqB86rexFzJHip9Qkc1G3GRgMnxWHpAZ4JrqV3u7TUtbvHbP7sRUrAV1XfzGUFyUEBrYuzX9UhLprpyrRh",
  "key24": "5urPnpeawsQb6gvov1nFvZ7W54YfK4zihNDrVdP8XEGDDZ2uPX6wHZkRH859vyQjEydK8BFtjKLGwmD6z1cuRGKN",
  "key25": "2FUzYnW3kAS7F2Z29VubNqUa3fiYX3vUxBjYcdLEdmg8w31GuoewrQWkjfVZwQDb8UphrhSSABXzSciv7AfNJzEM",
  "key26": "5uDq7AH1bmXeCne3BQ4UN4brYE68iC54EydWVzXHR8rc3SNfHdSCnGXJq1oDKDv6ywVRkPxmSvAWEKy8xR4idC6A",
  "key27": "2oAh1yEXc7xfip6b55ABp4NMby4EhaAYxzoHpxFAgmnDnyiQLaDrkxKHEtbHgvccVPw9buysZ9kYzXKZSiwKdmqW"
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
