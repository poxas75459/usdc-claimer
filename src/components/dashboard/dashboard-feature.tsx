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
    "3ZrRexKfkW1JXeTQhaizr9RQRtexwB6N2QjAN2JPHem94sGJ4vEDvmNFdEBBriuyMUPAAJh2EgTTQiao5YUoP2kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ofuPFrbCc7kikeTu5eYoKyTS9sHLQW8F6DdqWFMPGCnTos1GExydHnxrQpbLF2S9VuPskZ5BSk27JdDnFWiNp6",
  "key1": "4rYPJLwRQQtmyzx1ijHoa4CkvBV7MUFFjBnPLsPAms7tMVzNVknQiMkFBMC9fNKnMzdCZ2ajtqy9v3zH6Hry8bqm",
  "key2": "64mLj2Cq2kwC6wRwQs3v6CoFje9iBED4HFMH22ajZGf4t5hoJBxPTokG8WzTD4j1z3gki8XbakZqGMP9PrgFAWhH",
  "key3": "412XcpwAA8Hh6kywNeMy1yWdbjKpKYkMc2k7YuBNE4eZPCpeevmV5LUCoHtRBvtxF6pPTesNKCdkKdxtNDGBiDbe",
  "key4": "3on7bp3Le2P62V7xsDBw461sp3A7mf8UYVQV6JtmPj2d9V9Qep6K9Mwi3ArPTW1b4ePTRKK7ajEZraLgJsdbS7QV",
  "key5": "PgHPR4mkC3GQmYchJ6EfPHaMckciuPYg7za2jWZxJnQwNa2DNb1ZQ1iqqoJ79K5bgoDsyRrCHVeXAghVU5gtZfQ",
  "key6": "suK2yLkeXoxFfbj9dLgT6pfVRL53jJ7UFifmmhgqh8Ust1k25ze3EnjGGeYmt5yWWzJFfwwjZJb9cAhG6K4FPhi",
  "key7": "H5rDAE8dfDSPpUv9ULRrw4k1oweSDQSTUhFj2ti2hfuyz5S8rgMpagA5gU2Q9jUotzk3EZgJuou5w2ZZK3J34P2",
  "key8": "673bCpEAE7qitSF4q2spVockTdXzob1u5A4quyCDBbsVdKk38A4k4cw4PbvJufJcNMXgPHcGgf3wQuX55mKNh6GR",
  "key9": "rSerqn2wevzSLorgfL7vCy4Qitv5c9ZMtjSyUTd3e5zkMzxHrdYfU6osjgM273RQpNddXCX9VyqQH2YpD6JnaNj",
  "key10": "3tmYe58kdHj5iLwqqY5KTK7ix5N13PfRjVhKcp2EfUBcTp1rBTDapGugQFo6vAfx6xf9HB9UZZVXW5xsWB8mVXDJ",
  "key11": "5xrNwnTzhfbRBE4krbARbNS39SUaVjb3uoeKXyrJzCpHZkov8CKC8XWkViWqLLfq9hEEcJPTZBXMZR5Mt3ANBPvW",
  "key12": "3Ki8B2Lrx16owdp1sG5VazZhqGgnL8MgEfztdYWPyWMzDmWjiF3FVwSNB1KcpUMJp5cyYk3UEnqyng3BH7rw58sc",
  "key13": "5b9rvMp5nRPbRHcAFi7Ku5mP8ztjJdwn1xFvf1sZb4jpshd2SqmZWJfczkK9CeQX5ZUW9QrKHt5SrB1avjSvXVLz",
  "key14": "235ywFUZpwgUjk4CQNHvKrK52wDx5qmskzpYg2yxYGxQYw46v3DWudhaXnyncQNwMxNH38mYg5ReJogPVN94tAcc",
  "key15": "bANxPGvi9F4gWmChGYVBe6MFmZfiifugoSnYYwPVuoa26UxyG3bjv1EyXGRth4MgddtRn5m7CcyTSyGc82hUDX9",
  "key16": "4ZRuWSPLwZA4imxSVkd2RHkMuSzJhNQ2pUxy4YHpgb9yx1NLnHmYkFf6q3n8TFBdRh8j2xWziXLU3skuzNcy4EkD",
  "key17": "2qUdcyov2KgfpE2AmwpCD2VPwZd2WCahxD67JnzwbD2u1NdfHtLzeC6aFQ9fDx561r5UUVd1bGbBuTDY9H6ABBS7",
  "key18": "5sBRaLLmS8CACUv6vw7MVREmUW7P2BvW3rLC5oq54834R8XrCuqiPkh9QHfau3M1dwgSNMyhcS97NdE2exB5iHkJ",
  "key19": "3DUkt6GzWWisPDsQc7JzNjRjQWzxpYnCx1CJQUwz18WehLjwTZ6sW78igpDJqErtYyykTPjS8k9xYwQPgMrvrcbF",
  "key20": "4o7TsWFK1XBVgdFUUNhQEX9ugNRQLuhzHQcRedZkrV9jo244y62D54U3vkGdUYZfEqGVXZjYVANgNJXLmTAUyBVW",
  "key21": "2F8wYFGjT8VKjw1Bd4zECpKfBTCKfbJhF7VPX7soD9LFWm3miq9bEq4XHS561EL7ceLhtNrTg2Q5QaxCXXBc5hid",
  "key22": "2GdudhwhXWMJWNh3o11DNKWuUhHYyMjevEopDHFRAavY5sJw4EmgYGdf9nmcp3iE1ytDotByXLKrYiDkYfUpHaHb",
  "key23": "3GATYbYKUN5KFbxrT3v3EBiro3hghPowrHVB9133oxKrw5Ko5bPi7248yoPR3p9nsi4PNEcuVervgjpReNcacMcy",
  "key24": "21HAG8dYEsL7eT9ui66SKebof7Uzr2sJ7vmj781kbMvAqz6dZ7avcJmJsWTSvBHubY6kEJVoBv4K9C3TuDjmdRoF",
  "key25": "3JCZ3rgsLQy7MYE2ovnePzEsjELCGZ7e36cpPVwjpSwDRJ9sGughgGDhdyoF5CLYGnDGsDoofA9edafNzebGtgxz"
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
