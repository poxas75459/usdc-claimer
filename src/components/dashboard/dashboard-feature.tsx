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
    "66oKJachobjdMLkrUzxCkBpfLoubQrfBPdUdtqC9oU8RV81NuQT3tjqmbKfDkioMGrdCCvz5VBV5LBh2LJJZT2g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWV1SQPwmtqwU7htMhqmokNQDrAAKzwW76XVWEUf2ra5VTdQDDACCj5zqNzjvSWs6hzoC2MnHf6XABURmmSpR4N",
  "key1": "VC29GCLBsyBxbpHGgHMTJteJkG2cPrPjNRN9dnQK2HmvPUbzFG4ZsGdCfDxXXnpiga3AFS8wPfmxCG3mGSiKiPm",
  "key2": "QJgGXUqk5EgaVdzrGQDDwmHs1vJ88KU119RS2YYNmRFdh4DHWG2LEt772pLwBjirU373oQMtG7pXajb4MW4fzXY",
  "key3": "CuDVwJ4RFN6w2hAxGcTK9uWzjKP79QztBTESFZ5rjmxHAgVbuKdzBtj8f3JNVXishjaBiw4NKJv9x85E1bwwg36",
  "key4": "5eJRVrXf3QTjEXkuDaKQhccLjHc5nfodjguoh4j534tYNDSt2xdFwq3MnJYoXLZ3CmgnqcDZdjEjXniBiqDA2z28",
  "key5": "5da9YqX3wA5TAL7ZbUgmUonuU4iH7C2j6p48oLNhKAULHRs5AV6KB1ar1hpoikRBwdYKeUXUVKBVhEw3yGGX2Pg2",
  "key6": "5byvUyNJVoaMVjbJcyuQeKnecCwThCKnXnmP12XdvroWtTmzvQDcQEGffzRbYCQixAMDmSXYWqzzwrmsmDYqYmVF",
  "key7": "5mitvZRJMMdyJuKSd33TJjNNGehMFYaFnJGxsf22cW4k7aCJppdr84FtTTTRTXXpbvTw5mK3JNPnsJdPWbEqMGs4",
  "key8": "47PW6bAFauP9Su7FkLxPDChtABRKjUaYbFfALkdAesSD2A2dPwvTNEgrqp2QBLm2Phwx8RzS7PNjeujZuaFQ1Wbr",
  "key9": "2sQ1rkeTEcC2dmZ5F15x6gwXEYDhSoETEsXiT73VzYVWkpJeJZbE6vPvD1JnTfSFkcEmGqwjLz4Xdx7QY7xdwv6M",
  "key10": "2zUUSKqCq49gsC28StM4dAYkhoyxs8wqzVMaY7mpdTeghCG8D9VnU83vAhuuE7FzGKX64ajrJMX5BAu3V9xoAnzK",
  "key11": "64ayoX7eJ8wdJFnrZG7CARo6fGW4NNVM77J9gxSQr7HeMmkvEY8ZSEyKX6MMfXPW4WP3nShp68LZYLK7qYret57y",
  "key12": "4HHqRRKiQbFcHixiqNypsykF6Xvs481JpSedfEFgGEDTC76iaH4QrVBSJQGvBJAMfs3HTDAYF8bw1Gn8SWFcaad2",
  "key13": "45QLznqELWX9gvArWgwrkkF6tmfgp9kuExMo1ML3oFF76tKZ8f2u1Qq6YMpha2xpstzf3NKNsPBCPgdQEsht1vvA",
  "key14": "5GowbfcjpU6chcembUtq9tdpZNZiXZ1x9PbH8JvPNT7cGhR92jWbzYZQhEhNezjfCkbGrpRpye2X3noicqXW8rt8",
  "key15": "2D17mjDJXWDtJ94GBZ84PxYc8ATxWYQgsuSicwQ7rNS7dxHWNBuUN9Nn1Sw4maFQn5pHSFGvVUHiU5dQ4FKrKvCZ",
  "key16": "2844hJMjikbq7ipYUZZ7U8ziPq8vzvQnipXnrff3VZM7XAHbVd3DBJztNGri6fX51R9BqyreAQ1Tv7dW5ec7fTSx",
  "key17": "Ef4X8GGccxkmC9FFsPjMfPQkkuHNG1fZKAfiV97QbUx4rZ9R7zsDjy1Crk3dpoaQ328UWkr6w9cyjQhJX3dcpuM",
  "key18": "qHuvJ5UaBsVXFfNZXRpGbBSbh6z9zJqia9XEAnt6B5SSJ5bFvVCyM3i6Ki5TcdHef1BHapw8w7pjjcg12AdWzk7",
  "key19": "4u1GRrfg5bHGDhYoSaojgrkZdGJ4mYyenCanaShtBJvHb7k79UzkbxSnZYqVT6LWjV8o9MP5efufFdPKm2o5VxpA",
  "key20": "3sNvwhq1gszN7cMRzQcCFmA52SX1oddS8MrE6YY2hTVuMfMioXmGHCFtkNq5K2eJ8x8vkn9EDZUQHpjuFqnh7kcf",
  "key21": "2NHCz9HJvz5W2YUmzp5pTtPKqCPVcthiNmZFCJUYZJpKV2WzCRAKNGs5pBe17HdUYAVzZeSFa9fQPPpK8Rw8T4Kt",
  "key22": "Biqp6tQp5zoTQkZV2TY5M8VZs4SCzKwT7cSgFCzyj5QKDJub3JBrf4ZoFH35NKu76cBfr58MeeUUAjGrRRt5H6Q",
  "key23": "58MtdVwHGhPewR1r4ictLuPyDp9XJjYF3CzQFJQBbZM1iHVmLCF2BZ1NNatSyXbbMFuZXPEFdJh9qbN6PcuWMgyE",
  "key24": "59nB1ZoEco9vtm4f8n46f5zsNkdPNQAusoFFiELHEw6icoffyp3PPvWmXQZS7NitdockKLXH6n897ReooLbG5emb",
  "key25": "57NKdFXef6SPeDb4itvu9hkYayin6c5Cd1DiyJo6XJYgHZZ2JskZxN4s92KC2HxPaS1ddJf9g6jpCAK5BCXFCifm"
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
