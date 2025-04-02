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
    "3Ly1qPbzXJ7z6NHDPRZqZ3FotX2jqVhLRQZFhnPA7hnKgYhE4pV5XMEdq4K99bA6yECGDHbkpJN1pZ5oDmMn26kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n7PaedLrRVBoyMyxU9x4hMFvvbox5mWYR8FnUMqBRhLYSdNpP344VvWjfnL7QEUAZHiiHmiktNPUGZ46bCnsiAi",
  "key1": "5uUv1Peh8egkaDWtYpeZV6df7cYRtf7SXxuRtQSWDJzPPnpNDBqKtiR5DnN2pYrMVzrtHWe5ZegWt3WMt25JuJrA",
  "key2": "2pRiSdPqfyuZmuejecrXj5qxz1Be5vuE4Vagd9UiA6VJixYepPdtznrXZ3HwGGCDu8Ec7HDqnZiHdmLJE5rpKscX",
  "key3": "4HYWpuECtV5iQdcmFHdYHQAwk7KqDX3cqqtYv8nAET5bS7kQsd5unKf7rgnKS6WUoje1BXquLuTAFUNzHZKTmNhx",
  "key4": "2xUoDRxxQCdVopv9mYF7iLUVRYuxNeUQgX52cD3Kyy7juAkqwAK4NmUcf5AdzYEPVnJ11qTPYey4cfZBmxdr1kS2",
  "key5": "3JzmGokjbw3uRE9wKsbaQfbWyh7wYexpk7xvhshpVdmBaP7o1wiiGMqvjpM67yswfVbBeEt5eFFGYW1BxKXm6Y8s",
  "key6": "3wu69ExGCPquSAq3SsesdYDqY7nV7CceAhgjCNRqXp8XQfcUHAQ5ZgVbGK4oEGvJMceyDUBYpMEbVcQgZZDcv9ZE",
  "key7": "2AbEvfSnQ2QQT4GDu7tVB4rxG72snQMKNdMtUhZMfvJYUHmRit2eCUB4XfKMWQTpMN2aVYhwLe1LiEyaZ2DEUbW8",
  "key8": "46BNgmfvnJRiDeYDrdeotCEKJHcNS97qyay72n3JWDeYPc1MAufBMMMrFq6C8VjNs9z2dpkd4Kdp848rJbVkJ7Gj",
  "key9": "5ZbQ4KqTXbJjkA1b99cCv13751beah62zt73kAxo7jn3MSKx8UQcpyrU4ngocoLu3La59NtJz9C5kEkP9WzUtmgg",
  "key10": "2fpZS5d99Pvadkskk4BQZxcAiEMvjT4NpTxcv1TcpqnSzMujmb1Htj151TeN79uYTERitsXBAwEK6A7tfvS1jPx8",
  "key11": "3akJp3fTzvEWGMAqRqpR9wZb9qEaGpT2YtaVmbEWKJhUvwavUwqfdFQsTrEeaj7JVJZG7YBwdJuxVexanikj892E",
  "key12": "39EBgkwUmmsXSzEanW99qYUP3irdMC7jyNMVr9hV7vRi9Wez63WoCdbGCoSt6FVDrSBRJKmCkrh4D9hk5k1V3uLD",
  "key13": "4oWHq1gJbYU6sAbLerKi7LY9troFEC9SXRPpS3JWfTERXcAsoh79F44V7ZmvECNJxwYeenMojV4Q3aCwYjALDh4c",
  "key14": "42wDUpj67XX5hxd3vNewkmcCARZHhWSZsrgVQzMVFs3PLoQYXVe3Lfs2yDMnazRuxheoSfibfzpQ9kJC6wG5NzKc",
  "key15": "jCPFNHwjqfAHqCJyC37n9rSyBWs2fmNqYTepCwcWtKnu6dti8errUh2HVTP6xMRBgzHonYGr4RsxD5uLC1GXSVx",
  "key16": "egMgad9aqDRevLGHZu7u5pq1hAq2VobLc8ANr67mN9pB5cK6dQm9K2dTg9u8o7vSHgcN2XMWmfowUThApvpUeXe",
  "key17": "4GMBvnBELtDUfjMNrNoV5sxW9fTXevM5BSw28edsVRoLSWEfMMYxsmRkyNA8PPNLdmQXUHFZcStYF1JehCAFPvQv",
  "key18": "42FrPoDVC9fFDw21YNXd7vHfi1aiYtjkkTcLXyebqrzxTEWgz9j8BsTbioigM9qNzXzcSun8zUHT9NB9vAhP2c8u",
  "key19": "3cVN1M9wxwNkvS51Puzidi7AptJ2wvrjEUhWfBYHLe7BPCqC6Gufe7B2WbiBtpf6ViEZVgwgypvjcgm9Hf8saoqi",
  "key20": "5THBKGLErhs4QJ52yoBScNxUiazTjojNVGo4zkZbTLrv1qKuvjiAJbM3VNNJnZpnZVWW2Z9Cq5kMGrD6LVaCppse",
  "key21": "5hkg36uRsAczJbagNHunX9EuCsNZjtb94vPoEqajuEYAT8PFMPzHg2zwPPcKgWbFVW144cXc2pJ8ay5F2WXqdy78",
  "key22": "33N2WCYoa8EvLN5WPo7b1M3GF8U59Requ27XvvKg33TgJR6yRH5bHWXLCwbSYQUP8H5qC8zCJ8aVJ1cLGhjvBME4",
  "key23": "53uA5GzqDqBbN1uXJ9erDLBGwz2QrDcbXDqLZB3BQkEvoLrNYAsvsT9YFBuV1KiZBYX7TupVNqA9Z2KtcjSMdwVZ",
  "key24": "3Dza5ocUy85pAQzVXdMbLcdiHpNUEdPvghYuG9e3Ki4NRVPofnnbSE9huFMmpBdC9JhjNwR4wFmxvf5gy2CBDefp",
  "key25": "5q54qQS9nfa2NB9dFhGUbQrfB3v5cPTm5uwwUMvLG5GNMMfrhV2Y3AJRietRv8PDjHFrYziznfQ4X5EJi1uxXNv5",
  "key26": "o69tUJkuU6mZHUCCzDAQs1WkQ4sM9z94v6wK9898onQEhG8zroSPWafuDGPSXXX7uh3Pab9CznixFriwZWvjTSH",
  "key27": "3zHZTB8p7Cvrjjh9JbhPnvMNvYXyk59Fb64rurpCESWi81fXnfBaq6DDVBMU9r8dHVs9CXB6oE7cg4qG4PSFwP9d",
  "key28": "4MD6ERT9xDM6enVM6hYcmWTgPhFcft2ZLCZhe91BcF3eQAZKw1kgCyBnLGSeWxxkoBWb5Hf1DTWVoBbDJH4Q3dAo",
  "key29": "4AcXaE1FGUL6E3nvi2cpLem5j81hoR7HE9txDZ8geDnvJF2fd9x4UZ2wa7k9uwbBTYpE2GE6bg3mWyzYkjjHMASM",
  "key30": "2oJRGjmR5BEXD2jmAXRnsLuXm84QnvepQjSbc3wCxxxLu9wzNSgptfFthS4pB3xfP6QvsYMkkNKoQUDHSxbmJngn",
  "key31": "4a7jMSZLsGVLVTqnKCoXfEzBqQwsTW1zQ4ZbPzPCxnfvs1QRHkijcwckESkeR64LTPySBdZZvAN1i7RjJ3V7vg18"
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
