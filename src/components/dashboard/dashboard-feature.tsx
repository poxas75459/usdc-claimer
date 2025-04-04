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
    "uGMFJtuP9Gd4uksx2kGdyUAoWYA7JJ8FHbCF9wE9WWewbmyAAQbE2AusEqyXtEmP9FxRcbxyzaG9Soh22dFSKpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJMNRfK9REStgEjgw382VRhTz5aL2pm8havhVPHiKGqfHsJKNBLJBBfFPFVYSKgkRRJtSP6Ns8srVeyCTzVM3cf",
  "key1": "5zkrwTuMxA7p7iMwXbZSSLjW4gtTgfrsLfpNcA28tXakSxYk6wjsXZNQNAwxdd2f9Z69LHyeov7kjviGTDpiHopZ",
  "key2": "2mT2Hk7LPnhTe9Jdge2X3RCN9L8Z24J1wJN3yyn8fWfecWaU1XTo9XrVdKrU3VR551Re1d1hfH74ysEAdDDfHRBT",
  "key3": "4vMcsuCdPZkFV3VNJ7T4dNKNTcV1X3ZQRPakr7MiV76XJm67EBBNdaPmJGhdyNHLzNp7ivqn6vnpfET2VQ3btMnS",
  "key4": "EaMHNPHXMumG3HS6ewYPPuzx3UQESSQakszz8haUbyaXZUaJVAD2tBN3YYfqKSfUgHq13XZ4NVJDAqq927Mpa3x",
  "key5": "18AzmX3r5SD2X52kZc4uZetLgKjq29WNigjdVtBnCWwnSm7gnCB7CyCQKNmVCrEnA8sDH9KtTK1GDQbGG8pE4Xe",
  "key6": "3i8y6o3F1418Vc56tXRSE3H2dTSrRn4yicn4LVpxa5dqiXYRrKsfJp8JrzEGEUmYNCy3XvRTQAVRfyPnuBcooDZY",
  "key7": "3g2WuCPFiEaM8Npg8WzTmcRmpMU6hczD13nKxUV8rFVcUawfUCv5z1hUY2xUdVcyzWbeyn3xcNZ2jYanDewwppbg",
  "key8": "MYm1Bgtt131QXdskPabQ25GdWMqii8s7L6tSfAH56dWzaYQtaoefTcM4Z9xD1xT6J1G85mnLLGgeBmVEYhuui7b",
  "key9": "5VTwku8rPCuKi6Edhfrk5DkQDTUUDZ5Tz518XrVRC3Vu5Q44Svptfi9vn7gD43oPQ4cQTVLAbx2km4V63Mbg2bnC",
  "key10": "3siC9AFVnt1sWF1N6kxeqguznjPNApbwQd15kGUwLSiL1hvQyGbLUqQTYCjDnP7Miq1wtKAaEvV8jagwnSD1HyXV",
  "key11": "3smSc4nPgytV9Z8bRmSRttqWP4HNiejxyLXZoTUwg9qVUuwYy6fF9ec4Q3ygWGx4sLHKhJb8FQsp3XfiBmsWHPJr",
  "key12": "65GFa9dgU8s9dmb9M851Bfy1u9MWtp1UjU1uzFUBdufkJ9Q6etwzBJ7u4aCcmj5fozXWskcJgLPCJMHTH5RXPnG8",
  "key13": "4wzfuM6ZSQVsnDQ4dU1nQqbWvFDKuWZ6bqjfiQQn5w836GgX5zs3GYpaA9Bs98sP4CzxCqWws7WJrkW9gVHUVDvv",
  "key14": "3VYBTnztikw69moUr1HUe7rsHkHJjRm5Zw7joQksjYpr6NeUAs3yx7RFXDW5US5fnfMEwjv5sG7f5rucny1T5DfZ",
  "key15": "5ZGaJyNGzferP5UUhTkLgH8bpJCp7h5hm4pEqk7YUKrG4NY5FJ75ZndzshCiQ37eCvUR1UXAZ9w4W55aqEYYQVYc",
  "key16": "3HPNzMExD5jb7ZR2mhuBxMBuEXUbTzKDWwxrkoRdr4jwWuT963PZyYyShEwqetp2C55GGk2cgiVisq5UMFA4kmwo",
  "key17": "3sD3J6gpc12pDo8J2SzyLaoEDWJZPqcgZcPcUBZotV6rT99bBsFfDQnvihEnWAth4WWY8uDdzzC9XZQifmwQQ3R4",
  "key18": "2mvgtPrVvyZGQ3UbRgu11JmBxUmb7zSiwQs3u4t6zzVtpJxiBi1BWxU3XSLQEnCVjVsSj5Z8jfnNedNEFXjJiT5u",
  "key19": "2sqBAWr92SPiQpqgkWtEdRLJT1us5CtCs1ZWzqSFjdK9WavtcpKa5oqTUVztrtUstgPXDyk9wKE8xjCDyyh4G39v",
  "key20": "2s9TNgAtjqXTz4KK3a8b47A7nXNHJVRpdReDLwf9rw1JS4Ps6aBUeCSas1BHhduVNvCapvmcxe7xaALHav2uFZbK",
  "key21": "5m4AWkSayxVTgzERNQcLsBtWcrgxPdQQBGAg5bMXPbiFbw3i1eJMeKMCev4EchFjR8r6rGctp1un1c9idZXYapfh",
  "key22": "EfwhKhmcsr9V1mdYb75RBmq3V9dMNTtS5egaQtNHcHzeDRVQGYFD7kB6MHrABUCo2hytpBK5GLbxMfWfZLz6odF",
  "key23": "2ckH6rcs2jCyPqddA2vxjn72i9m4BpQK6z1N67x8Xbbe9g1TQ4E3rFk4bL2F3SeGiyMoTPBVLn5zjwCxmegmw5WH",
  "key24": "3Y9kaCQSPMUP9nZhNPv5Y9c74uVqzcbVo76tJyx3GDLXEuUJngzeCXfQUy17hXr8EpCSTNMFX8WFt4U9mQsZWpS1",
  "key25": "3GMt11TxVCEwbU1ZFB5ZrfNzfZwqhq3CZCavq47Rh53PDkjD4ES4DrRVHU63inZbxUU88Aq8P2nkwWEqJeR5MzgK",
  "key26": "DPjkYNSD3gx4kiD8mXyiTyvLcMN6DwHg3wxaHHFavcEt1i8P68PyCFkSTkLUm4nNUTTrzMintCmPtC6Vza96oMr",
  "key27": "4gBAWttYonmqxZLLBvwsGdhP4xNkSiZMudpqJHZ4NXakm8581Gw9uA8mnedhih8t8aMk4jF6RQVXqsUx6pmG3bYm",
  "key28": "53La3Z51Be6RGYNMETSzqCsZpPnocukAbjEhBFvKV4CbpWZhthnHbTiGe5gaRupozC1NvaQnUbH7uN1v4pyDgoxj",
  "key29": "3KMzfrY9BnqgfYcnUqVZr6wMiSpv3fEqsBoLFEcGngycdnZMXrkFtpsdPCGpPKytSYWJL4tfHzgHghySE6AQ4eaH",
  "key30": "ojsd9j8Y5jHzxgD7joSMmmNQN6DgZ9zJM7aYpaBEQijh1cLtFUVsbVdzPLkjRWf8kTmNK3vL3y7JKD7rpXfQF4J",
  "key31": "5RVtEimf8QcE6b8q2ApnTapSWbJcjfH7w1mkHW4kv4sbhfFDqB2b6Mq228fYRjCZWmzGj6hxhoJfZE8BP9T2zvGN",
  "key32": "NqHKbyJpc62SEFfETZRMjiNfeWWG4s8TrDPLd3W8Lz1NBgjr47oP6jqNUzhtNo15PXwCHQSeBktbVfScqqyFjqD",
  "key33": "5GSe7ASGZgbu6nVB7ZBdPzQfSfbhsAQah33m4ytq7AniMZNSvo9dEmxyxy7ZCSbAnxsR3XxV8WLk1ahP9Dp6B74p",
  "key34": "285rVntYxDuGhMRcppscMM8kWCFjfNyQuHY8wwXs71hPrC5NRK2cz6eXuPEULkWMKNn4cwMabaayhAj8FThXAtQx",
  "key35": "ErBmUiWeYGJYJfuMNvty2UeYoDMPnMGJ5H1pwpza9TD9QT8zu3wfJr6Un1JwLdEdKBzXv2tST1wexRmEeh5oaEy",
  "key36": "3fwbC8wmsmQJSeWNaz2paG73XvNeBioCaKAezHmzYVXvR21PvjocsB1KnZZNAUFQ7ZkqoeoNgSjVBrzRuCNEmrY7",
  "key37": "4Ejp9yczDMocAKr3DK34nYFd29rmgXXAruzfJAKdVjyPbayRobWbL626se1GeoBhQed22JbrZ1fpktpzsVPmD2DY",
  "key38": "4zATnqM4FeXWi9uSraSAt8zFNW3Fbi8xuFG7b9uhMzhZ8UHVPDZcZqTNxxUMscbM5k5XNZjh5gRf1hVqzTesik8e",
  "key39": "2cFNQaLKtQeFCguqUcVWWga9EwCw3AV6XwsAxqHbUqCckMBopb1Tv9uyPi93EuBtvhZgHH4aWLUeLS1JokYmD5ka",
  "key40": "3KWMEJXn7k77KqVC8Q3GooWZeifnthUWaC7acLtuWCzrJ6skxMoEvJKs6nozfBLYY4T1rvrXKP9RdnjiuqgeCXk1",
  "key41": "4QyF7s2XSbd9rrzoRsQ6cM4MLS1PSpxiYTNR6jMMdFdSvHMDYSkY5XhzRmDXEZgGCyYYDeLfHmQVdwMYdQf7wJuB"
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
