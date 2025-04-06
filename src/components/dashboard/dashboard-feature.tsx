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
    "nCCosuBb3MQqF1Mpa2NXRKdSHqiXGscYQuuzekEQxAE7rtLzuqA3ULTDaJJJ2EeiYZXi911eXiRRmnUxpgjTTAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZDGgB7PQ88Uko9yz7zMqcrN8RwqB59mFmUhNi7RKSWrSDuE3GGLMw24pC4c9MY8za6sdQBYUREJ1yLUKqRQRoC",
  "key1": "3RULrL28yY2uvVDQHzLuvKg5LzkLwki4MNykC2uwfP31eVsXUaZvkehBWfDLNyZwZncpqSRQSyciS5wBCkBt1sDu",
  "key2": "gJ3sQxYxazA5Vy4H5K89pRWphgdVjtLnYA6ajDxN97jW6YZ9YFYjjgYUPiH9sdjSme6f4GPmkcAfwfGBTg23N9B",
  "key3": "45RzuzSnGesUFvc3oBR8FkhsYCHHwRyP42nywhyJQBMLtDmoKNdFDpsJmhC6WYdjXt9J239W7Lt4CTBgoteMArmf",
  "key4": "34hfiHGXezLFdDaP1miawg6pkTHizbUfgga5Teh7rvZHRYEuh2HXbcdMfoxR2PNZUM8s4y5Qur6rCKTi4S9847BS",
  "key5": "MA6cD6eqG7on5FYTx7rNkgFKAEhR4P5HUGbzACj7XnUzRVhw8U7WmpWJMHKnKPEVoDk1Bj3GYiZXa1GVLjEBXux",
  "key6": "KoHYwdXeBTUbyDfduWg1qDA5VFrAa7mm5iCCjPWUFFfrtWjwJBh4fNe6xraQmCcuR3Ni3xejjgLRvpa9eUCNTsg",
  "key7": "23pyWZqz3jdTKBDzCWjWSmzRDjkP5bFkW5zZ52fdJ7PwJfKzTqUkqtpYtF7pQ3M9FiNjJsvt8aQeLs5X212TaHMz",
  "key8": "5vwqTrWirpfQmRWkj22nfQ5gx1QdVUP1FroBQDBFHb917KXhgqQZNUoF9xQxsacbbssvk6CxDbuv27htXHKZXK13",
  "key9": "5Xq3Y7Uz1uaSux2XJpg4pFgxt4LUfZSua17EfLKoJFDUP5x53VZ16KXTpUxNZw444AqkzF6nrLnbFXYNt8osMbka",
  "key10": "2UupH44NQH8RQnj9A88gwqobiDCNNmF6hnM4kTXJqtm7UP6p12A7vUb3czADYXJCJqZoYdwmt9hDsy7p9WEwE7fd",
  "key11": "3TwJBeLwzWhEUix76T2RRMjaiMkwUQMGUF2NENo4szncvX6pqYHgsxRbAGqxhr6P2TfriR9T3sxQJc9UctUNTyCS",
  "key12": "3Qmh4B9bRy93xb5QxmpiakamDC5XsGiB7eBssGJFeUQo26isq8UqVymSBeLYHFrkqhUvStKb1vA99jePfSAwCM8f",
  "key13": "xdhBDA68uqDYkMmWKdZcWETjUUveRVnpJVU16Mb4WVRhdhBEQBL7Jqq8q5ZnMKPMohDfWJKqPwTQCqz6bQk85g8",
  "key14": "UTnLLBLtRSqjJPK2LwxGBQEi9gMSFpuYfjB1nBMaGGpzQ2o9r4W7vyqtTgwGjwuVv1Gkc4mJwSurXdBX7ravero",
  "key15": "3tFyYSLVWW6dns7TraBd3A3Nu4RcoJXpH1bc8mfRKkbrHYcdSVa2EkdDgRTnEe32DnspWexkGzm9rcgbbyURAgCS",
  "key16": "443jPXqnDGFoh3Y284C7heX63pMJzHsBLoFqsj2P6pHBG9zjB9DmGR86crx2LG24BejRyetvr97cetJ3WDweKKnK",
  "key17": "4mUgQHDP5t4U1quXHhwJEPyBAi9S4rMgNzZshkHmM136BEQTYGSQiRR5zCSDw3kvi64t8V8V7RPyj627pzWcUQFa",
  "key18": "4J29pzxyVTyFKfLAwfyp8fFE1Fjzf6rXeDa52ibfFh9nt9v1RGRsoiHj3shSj6yQMfJafdRg5TNyCKujSXstGqoV",
  "key19": "5rLPnzNC9RRwJ4FT71GhFQgkL1JJGBXJrCg7rE6wHMjKcGCKQkbuqYGuMoVpsEPNwafT5L48QJn4MfQCmvNv3bW4",
  "key20": "4YD3YpEoiVt1LspYYYcz2jawoYrMwqXZ9dxxUp4TmbdHU4HvwgVeP8RYkVnBjRbfhuMf99vaKVsGHse9J85DGhQG",
  "key21": "4dCyeCa1ftn77jiuwtfA7EkYH4EkGGFqxKhE1uQxSdhzpVSodtDS5BxTHvp5YR5qbVZSr6Uda6sa61xShg2EGyhg",
  "key22": "39DJegYhuFtAfEonqCPMYwGEtmYguJrSnSrGwvd1yfUTj8Tj8sqoxY1fQsGvUkKz4RkvdxqFbrjbT56J475mpL64",
  "key23": "5A8CidgXiCJ8hpnB1qzD2keuu5DBFiVmZo4FdTbPXshLkyhKatvWzCp5hM2QwSXmWEeHtQ814keaqr7PDkDRncap",
  "key24": "KhRoUYCvyNt4GnLnTmvAc7b7sNbh7yKy4KhWzDtGW6HQDe1bNySa2aykQmFHCbbTXHPehKYFFXck5bLAbtarhPv",
  "key25": "3XiTXGVKokRG1pM7sVyFDN1cqjn3468ZAtAgMQfyVCrxxv3TvagGiQ3cF5a2bVh5VRgWPHkA5kN6S3Un9kyXdcm2"
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
