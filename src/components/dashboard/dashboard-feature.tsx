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
    "5x8qM6XoP8dJuQBcFS8QfPbohS1SMzrCKDFhHTtk6G9ajjTKP1oegWVCtYYQhLgAXmtfFo4xD6eDT7xxLxyKU6Ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxmRoK6pxpvz8MFYemVzi8rYPVg4aHLE1b2THzb1K9E1vScngFmrhsUJmmHhrtAsCszmuceHKoStfKQvzTHrtdB",
  "key1": "XLwP2oejprtpCqbgMnCUFUh1uqxViTMMbVBijhBHvC4A7dbwvCZQ49iq9CK5g8nWQkWQrBA3bCgZWARd6FYmBe8",
  "key2": "2hNsS2ehagnc88KjGM2187eat11JJwaJC8ZMk1PCyv1jir3kzsMNWLdDSfV7KAJ52ho97q4NQ4WhiKihctFwSPK1",
  "key3": "4iY9hAzKjwjwLkTZdnyrtDNXx7xz51rgkhduceP1KUuRagnh3rVAz1uMsQW35ygytFfSKdJo5sb9TXXkyXtRM5KM",
  "key4": "kh5SXJhwLhb38LB2mWBbnzD2KvrnJNdgm1wV5UinxHw9PceboJpkQoRhQFinbebWnvbZ9JeEm5eZHEBrdBPkYdL",
  "key5": "CgJnMpBX34bjDz1a5x5uj59BUtY7r1scR5UeoiDUmwMh8iGJoSsDq8gQEYFTMCKUNqs55zLryFwCbcofYxtzSzv",
  "key6": "2Byn9RdSNnCnXX835Y6YLgSoAmDdDfbqP6u3cjPkxgvjb8UUSKdJy1kAh2MzzcmvaAHEpqayeugPxrZFoV6PbULP",
  "key7": "3D4YpNGy7xAGc1S4ErWMSyx4bnj4Qum6qneucPhLf2Jbz2FJ24MnEpkyfp7BPxxrojLKo5BzBxVegKHfpQK7W5eY",
  "key8": "hbMdroKkT2BFMcSJ9k7qPyg5nFxvC43ox8gGiaHLtkUWFQDs4MkJ2iNc88qLpvrjFYz22mieTfDkFzTviq7xWmn",
  "key9": "3Ris5Qk5BUc8vrjJA17eL13RK57UVGwuF8mimc1Em8HSZ5Mr9beFBYnjjnspALnbhaiatBU4CYrNHQE44CozQq6x",
  "key10": "5qWhDv9EnutnJMMvLE1HtRGjEpKGTzaBXHPYjpUNBkNydpsvEKRJmBqLUGXnFRj8T1VaD7Z1dmzanD1p99rqj7Ke",
  "key11": "59Bv8hc6L6X6rXQPA29F2WxGTTw8Ca7Ci2jVRJeA4sRuyMDGxGQ9Bx6W7WKEFw4p2ti84hkwGeESe8G271yoG4L2",
  "key12": "4NFK6qG7QN4dhUs1t55PLvvkvTs43wZpyu47MqDhNtUuqKv9ajpAXgnX7sPpUE1kP79ACmrDmZL7f27vqXqeeUBi",
  "key13": "Bp9D72ZEh4TopG5aT4JJRH8wSDSr1tKKckCDprmhExLZ63S2YEKXZYDgHMrR4Wxo2ZQLS3o7FQ2WorzdNCEhYhT",
  "key14": "4PptfiTMmpFpXTdhqJ27pLJ8wPKk7TZQmqWGWoLbssr6Z1d75krzEt1g1AE3ZQ5yHxejJffKfMMZejVtPztFsQv7",
  "key15": "3wPVk7zYr8o2z2soA1BJgyXewSr1VfoCg1KKPKcfRdtUb45YwXLTdVfg7DeAnhctiYPYC8ZPf79Ck93jXbgsY85f",
  "key16": "65LFitv4yAtX7uhQL3J4GY7ewezQSULAmDMrGHkjM5kBPac7zH3jTW5RrypQKSjPiKynLf7Srxoa9KE99VMi6VEf",
  "key17": "45c2pjiubRCHechPeamerL5AuAHpj73JLpMfmcHx8zVo8Gt5hVTCQr1yj6suFnyi9gqSpikTnqXDzddFFH3MYdWX",
  "key18": "4R8cJhzUnkG9g1eCkpLeNriwjdLSGVYd72vpcddBWRA2g6pUDu6JaGeC3pRVtEk6bXmPkkTY8HM859VMyEj9Dg7S",
  "key19": "nee9sgztiGkem7cnkSP2uX2hP8XhXp5R7kRgtymzVbpprkoZUVy6KxU3YBRRfSm6YQXL2S9yNrvw4JSKKxtrApw",
  "key20": "4yQcLwAuPV9SC2jJwK7ydkuQ3ZG7d1PobP34a7f9YSAgCkGu89TKbyQJXiZbREkGQRvSrwiEKgR2Z2rGX3KDKxZJ",
  "key21": "cGMwBucXUMb77BsGVgWqunzLeT84zpMwycB9qrB6fZ5NyFqMU7pPHSwgtKYGvBjtckKwzTyJtq9DGnDiQJCXsFW",
  "key22": "48v2gVQu7atyRmRRanpm2yPfwgWErnV2uDtU61miqbimh28cCppRh94Pw8noXsNri2PyQCAXTTTgJRKK1YUW74de",
  "key23": "3Y8qWVWX5o7g76FcgKjJPrfykzgtfi6BbMfkFoWvP7wpFKZsXv513Hu63b7yQsNW43rPJgux5dT7zPWkqjyn79W6",
  "key24": "5haELQzuERQjy8huHjjB3f4EH2YeMvR1T9vWLWL1iPHSwRBuBagHpY8rPsNXHYFaZev81MX5LmjaHs8yrfPbwAyv",
  "key25": "5Xi1rExh1VzuUgD6yqoWw9G47DvQLHj6Bu1LokGBnWNwHJLRFNfZpgwwWTVe7Rq9dM5JTajFT4ePx8PW42Hx6Ba3",
  "key26": "ncKTiX75AssSTvVvWbrHSkh95ukdnZZ4xb4Njg6caSXpRSRN9c1KZ5gVxrBsCqzkDrgQYaYKXjAzLhK4YqANFja",
  "key27": "4SwmHSMGtjcXJpJz8SenSzNptBRHQnanZYUQagwHzu2zKw1zRuavNySu4uxLB5k8SZ21F6MH2m3512iP1e2NZi1c",
  "key28": "3KTDEwjZPZJthVPgk99C7DskRfMZWnPZG2zL2mPjxJTPa9FKYGWHnFSz1sFSYaV2pgvmUrA3MwfZVEYu2mLQWoxU",
  "key29": "3QCk8hu2Ft8N55V3tGoQ1LpNrpwb3J5FXRKCF6LM8KhkYCQNQVQ3wJ2YraaXheycjfuaSqUvxhAxQQuMhPHFrib",
  "key30": "23EHfERZ7uBybj17BY4zWNk8mNZzP9rT2DjmGZweqHZgQuwmffXrfeDFjuSCYN9hFNCGb1pErryxFD9rKaQeTkbq",
  "key31": "5zByULxJpoTWqXjCHdczn9v2iNpT5KJykngBGPkw36sKSBZQLY6FTbQtWoK5NiQjcSgzZV8bjfb7mh7pcCsXGatV",
  "key32": "3EKdPJrAaxJTnRkDkfUmFwiMpHHZrqnSX8xxXvhLaLjVSE3sveKq4TiSDDcBJdEZaPaY6NxPPXTLn3z44pKmr4Dm",
  "key33": "36PubrY17bfWdhfbUyw2vFGMabbzvquqDBjCsASRZzMajiyJUsjbyMdPgbJgdq86DAZyJ8QzJ7iNG99RgonJQg2a",
  "key34": "bSZ4nHKedJwNjb878ib6AoP2fLGnF1hfgCK6DZmhYNoK3CuWY3eJ7VBgbYs8q9DErMyA8X2PGbTbGX7J9WECLxR",
  "key35": "3EQy6Tb7VdC5nJtvxjzsHNB87EQbgBL4sGThgbAVWMKJcTKPucDkdnevhRe77yNdPZ6ze4wKV6KJSvdD3nmarNPB",
  "key36": "2AkBxdKqftLfkReTXjDVrEaQwS2yD2FkuJfPXxno7buAn7KdJWULWJwiyCZ7SrhiTNdGHgtS5ZZLYxmjA9kqvxy9"
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
