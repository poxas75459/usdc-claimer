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
    "duv4jvNtoofjGK5Pgzgogh2FJSsxT9f9kdRdTnCcfLWvZfAFiMmVsrzgKZyvMffAiDEQzWTnL9X3Lb7x72qjf8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ag6uAXcFYDXV1Nc1UntfYBVF9RHAhUVpTKvERB4bmHy4KMvPNDSYZeEiyp69pmtxNCLNzaLQ7mrDKLvSUmaN6YG",
  "key1": "3UbmBAHoDh2BWHwHVxoXMFpXi9L1a9hUFG5P76HmH56Chdn6PxGTYaDbDLts714BP5Z8za9wqR8hoLcyBS79vy3a",
  "key2": "5CwaRdBFt589bTgbmZ5bnxbJGacNwG4Kw3C7bqiZRxpySRR3DTw1rAnajXR8DpfzhfrUyKMnHoGR7PqSfYij9PBT",
  "key3": "xh5yJDTEFcANecegc7t11oAMysWeMXMqu6mL3nHquP2fJHqzXGMpXYhbJ1w5txqstT6vKyHJmr9cp5eX16GtgWv",
  "key4": "5ycLQ6SMkGL1juwLDTB6hUZx1oUGXE1spAPHdYmhFmMPXTReJ6SMmJ1z1fqBsGcpTQCe7FvoqHfaHjA3UQ6AHwMX",
  "key5": "5miRnE367C1MR7bDf3erL1FokR1LKNcGMst4xeyMcSZCVHQzyNNrHCepDq2wwTjZd3xNacsm1N98WwGUTmXB4yYP",
  "key6": "4awcrpVF72rYrs6MZSNVTSFUVC5SmaGK7xLpU3FYNJshowECeGunRDBnFmwRBS7W1TC68Wc4Ev5gTEGxghpNSkGZ",
  "key7": "4v9oczmxm2wkz4LxeTuMBJiJjFnGbFyvpvcWcfJB2PV14gK4L3H8swv4j6rJ5PpENxaTffigdVBAKKRFD2AjhAkr",
  "key8": "2TYYcCXuP8faCFuPqzARTt4VEYLbPsEU3A3pRBVAj28w8XmMt5DEp2PLADiZLFok3onNcYYYPvYVPR2kjUkpYmwL",
  "key9": "3Unemka7V8QtUf3xMkwHYBUFVs7Lyqx4AizfvNSxgE8va8ohKarLiiXRArLAKLNiMchpLJVhxJ8fT2RnEZM2yQNQ",
  "key10": "4WkU6pB67rVa51QyrQBSxBrzPAX89pzqQMxqaCLi7MYKkyyUSobFUo94nqyBwexiZVkDHC1Jo7beEJRNggUawNvp",
  "key11": "sMLx6NCgKCQjUmJNZ8GXBMR6Hgod8xbqH6FgeKjz9VawZo1zxQJfAoHxkzFERPChMKdEw8t6u5qwsvRnY4YrVL6",
  "key12": "4rTQxQ7uCLPQ1Q34aTjXZnkv9Gex9P61gRpUxxExzjk152RWL4U1qquof7bBcwVBRX6wxo1oRiLcgj6noBh3StGg",
  "key13": "2ZamMx5unAMrnBR8fSpW1KoB6FWTVSerAxsKA9cdXrcHa7vwNACrH9oiPufQbPU2zmyE3tYUGkLVff5hWT7M4GJJ",
  "key14": "NwsyR7bKMJxdVzFc8oo9bFTmJrLhoauvZYxxhWRxnXtmGr8TMbV9qgpPbUMkKzTrAZmX3F75uTMmqFTpVVjcdTt",
  "key15": "55HvQsQu5mWgQDrfipi5W4h9wecJHXCMvsNY39n7HjDeT8ZKWDFDMdT87oKUtDo946cs1gWPy4n8fjZ2eJRtJPHq",
  "key16": "45TZ2R6GySvnqzq8YaKSPvAAcUTkYv3xjgLhamHdzmbXMQsadi5CAZu8EzFHw6BsGKooU6JwPcPTYYd2ecnCBwHZ",
  "key17": "DBdW8KpoCoyanQnToD4aY5WmxWWdYX1UEvXaTscyQkK547dQJwFvDs7bRMez1H3PcedAugesxw7HBAisJ82AaL4",
  "key18": "3Ghps3f6B7G3s1FToJWUAhsg4uQBsGoFr2QVvm1qGGKKdP3af7ojMmfCmXryj9jUQj6p4uDaoh2ZTj65WstSyjbX",
  "key19": "VzY4G8Jzvjt2b9nRspGZr9fQcBjoBNjFormvjjH4tNJjWErGni421wrU1Ht4DhESrEhZBy4rTntXJznrFWwCC8L",
  "key20": "2fqS7Cxd9L4ioGeDhhsVECuJNNxsVkYRrYxmb8CK6ibF4SB2EoFsqsYesHkxxg2Kb79k7eaNbochxHFwuhs7KbPZ",
  "key21": "M8qfA9tHicZbeFZiAEgD1yBi9QApDS4sSWhx6K2XHjCbH8yEwjTxnZiZnEXgpjSTt4KE5ZYa8HtBhWw8GaDg7UM",
  "key22": "2c1quQqkhKFNH7CSkwb1qn4nDFGvCmndWBLNokH1qpQFGPk96dbA6U6x75tqeMWzU5LgTJRvpHajaZVTkw6NUH8z",
  "key23": "4n7xoMfRdKZ5o8Gb2VtpD7ZhvwfCfb7gfAj5bTsCKM2weeUdmtvZZY5GKXbLgJjEgaPcMUf1EK1WxwghRn9nmEQR",
  "key24": "bGuQXB1Qugtj8M92jVjj6mQSugBEvzZPMnk8JVETQBp8bJKnVQwZ28GsmtvBoboT5ktSSyYdhZb3KKRHAGBsnQh",
  "key25": "8VcMykKvfKemAqsmqjxVVji55zaAuiY5d1VKAJtDXw1wV3817biJ5HWhjr1YMVrhjTsPq7vrygfC2rkd4EtyiHm",
  "key26": "29qz6yYP7ornNRnyUsxPyHrDYev5x5eZcJBQPJuvCrmmnTrfVYUaoNqBsPvvdpg1SbxtvNBLqJKdDxamxuxMvLex",
  "key27": "guLnKnnRZuQMPYhdF14q5TqrAkZ8AnouqXEnQZBjnJcaXrS8T4X2BZuwJb16sTQ1GSijfnNyeQDi3cKfVVxqjZq",
  "key28": "3s5TCK5fE4USDQ1mUCr71cVaih4evdYwPyc9f5DcVGsJ3qkZ4XY4cM9i9DCXFCZ4eLNtibuHDN5gRbw4kwkaAvPy"
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
