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
    "8Mde4tH2MUNS9ZYGVWgGL7Jv6Vt8U5wFtFGjkN5EFmwP8cRVZ3Mbi6QBnovTtEQ4wSQeYgxd8svxwJyw2keBegN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFXsjkhwNAX6QKESPZwgtYASm1HtHDeoDQcC6VRa9KZVxfcMh4nfrbNcx56XDjAvuJVE3kp1Hpkiz4Kx9VTLn91",
  "key1": "3Z2dBPLQxyBAXQwMZQoKTYUsTAYRi37ioNkfxyBmeWdAgpstPBTGk1YiPoKjdSpvKLoNhxkuFWfhhpAFcF345aGW",
  "key2": "2EpzA7xXMtXj16i6hkzEWzeNKQmEjb6XsJcXQTAmFm5k69V1EiV6KjRaiAWvKar4qrWpQ7FLiwySJCsgB3yEhmZ",
  "key3": "mYrm2MV3kKiNMN3pbYFGjLLFmmfTLhJu3nc6X6DRvLs2FZ9QTF8qyE6tnf6o9E22jKrhN5rNd9eF2yEn8Y7eyEe",
  "key4": "38GB2B9f8zXNPT3n28MWM7bEHn1gymumXJC5mtreiJTmLRXGofbuj8Fr1ueNdakYyKwnpt28A2ZkXhzRCZXoADb3",
  "key5": "2ueDjm2tVKnSDPoxiG9zfwGsm1UCKQeZNZ6n5MSwCTq2yPYmYKX3DdVCfNiEvTeKPotB4PFgzVLWjutE2aAe5HPB",
  "key6": "5sUy8Yn7rKeBEJCsRGqvhnr9VkSgcQYAHCjjY1WW1wuFAR9cGVaY6gcfBMQVkHeTwjEYd7fzc7mEGkbkKKiZha4U",
  "key7": "2nwN7ihUyS792b3J7R7hV969hMNprervFFxtpwPdfGvGyuWgpgpK9PdB5hZoXYYCsKtcsTbymoda1GiXHVehg1Mq",
  "key8": "4o6sZEfmCbh35bQdXPfFc4jqkJPufMkFgoqcDB5nn7s6LdFesDJiKeqYmBcvRAA6MYGdHxB9aYDAuSAZPmNPiCyU",
  "key9": "5oxYupChKj1xbUsT4rBEf7Bi4A3jFmwmtxWAvhw2REGMKhtEtkLLFscHpJ94Qqf1iG5H8fcMCJqpBHTXffUoXzap",
  "key10": "2xgQRZiyfwk4CCYvW79nZKSSFBMTMMz3cNfMBQKCwzCnqDwo5i45tQ3uB2jfRQhnNZGtfaVyaBz8xJSfjnyiwPbf",
  "key11": "3GRAfaKRUJ15PjhVW7JWR7FX8jeQPpK1WKrTnAHMsLmvhNpYR89k5PtYDpGrEVaqYWFJZptRBGa7aQks7z4TNXWJ",
  "key12": "54ZELdSXD299j41na8Q6WLKxYD8BJj9g36qdq7Vigin48agLVZEggo9zhaWG3hUELGC5271mCRnrDpPi5TLhYXC8",
  "key13": "4WYGm4ZwW2r3H6mZhLLm8HLdUdJV92YRLcCYgo6oQC57rSbvfuM7eocBnyWCHQnaMEY9g9MSrf9Dvr241SSfezhR",
  "key14": "4HKLZLGW78swGZB5NA2UTCZxrWZT481K2fraaeScqbqGgbb6sxDNB1VURkNXKmxTm1GPtQfssydUr8gxpd72zkaU",
  "key15": "2mJuhDU2Dj2dP6oyUop4nKhDEakZ7E9UrvDRjaSkYuPp8EPRixKjF6StTb4DncHcF1ffzMLJo31cgkRUwUbq1bYT",
  "key16": "2FdB5DUUXAvhDcfwoYob8JedFnKBmg4MCeoatZjDm9BsGNtU2kwkf3ZziVYkLyuDhhg4ouX8gLs1iAwootwCn77i",
  "key17": "3vptRR7R2fFHWYAVGDZnFyPmFqSgbuQVARyy9W9psXbNwijtfiwgzoKJWDB1QkmV7nowM48V1bg5zuuQ6acJRnx9",
  "key18": "39RV3vZMikUCFHa8X5T8yJd6h9FefTnr5516qQ4TMM3kq81LQR1vmyncjQqYRFENAJi6eQ2j9h3dqKnL8K91qf9D",
  "key19": "5WkMPA8FCaJtMjzoGECzkrrdRQNx8STcvphD8KbZGRJeeNBXrJ1NrDUCqGpBD4ZfcZA49zdiqCXpLdY5ymQ43BoP",
  "key20": "5UrQRstP4bhtCBLzThCEhF52uqv1DJkoFMndEiC2wdvpCzWHQ5GPY23FBT1NdjdvFNbz82M9euN2cpGoeAE1pZ7R",
  "key21": "3AXBLpYeTiZarM5CDaUe5yjdGDLhfBsoSymdDYAHJtWddfTn17Ls9nXPRNiC27Sxvn3DYcN8DDDxqjgvsjEiXbWf",
  "key22": "3hi9nukZwHqDxrJDYMm7X3KW9Kv1f2Zj5o1ySVwV8utfd9uNPMqiBqGH4DhKmMibkFJvQAnzcRTKR4QthoG4P3KX",
  "key23": "UfYSsW1oeqBgq1MSXUVi6aSS5gCRUDWgo4g9yS3NtJDM1pjptsJsdq6rtcmNQYGdE1bXkn5BGneudiPqHjXmMC8",
  "key24": "5vhCFJ7UYD754ejQVjcPHBdDcYXvyASNzSe2s427EzREv4LEJ7B6TD7Jtkx1yK89bDQdpeYMduppg3b12B7w7muZ",
  "key25": "5Ez9jQmdj83WQazQ7EZLaatxTBqWSrVZBCtE7YFvkgcpTYwsFYoWs9KwKmsA29pTJjKEKUyjzwR3LfBKqSdAhK1S",
  "key26": "5qQLgq4zuJitxA3ZYYmBQhFJXx4TdSATe29qHE7NkuXgv3NZrgxEJaZkbPRuVSrCq1iCneLEevftiJxbn2E8mCiQ",
  "key27": "4LCz2QwFJmaSWLjwLMX4hPkmZsZFRyaAWLAH7dY87yBRDhu9Uui8F4k8h3bcz4tYNYU31ayabz6vfj8iSNUoAqXF",
  "key28": "2vGQ4pBwWmntWL7adF4AokjcHvkjdfXBc5JacSReR68jrDPnqzkWuqnb194FeHr9PMCjgNZ174Ke39zfTMe1y9kP",
  "key29": "ygsSNY7vjqxueq8F5w92Uck7XCTkUcJaM53sfxKWtXc9c13hXGHUWu6PRGX3A7UxGYoapByC6Tqb5Yz4sQzLT3z",
  "key30": "3qaJe2HrvdQJRPfC9UXx4WXSdEKzzz79N6k7KCAt99QqFVCdpjJTF78oiVLKvBD793mrr4vJvG4bkyQXxxxhHzps"
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
