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
    "5X2YvgwKhddXvcJpuDMNA8A87nd1abVi1yirtaZRHsmAmUYHcRLAjwAS7AKNrEhknzB8QHkrQjXqfnbAkE51oya8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tgnSzf7rjWXXP2E5Wdk7PK4YKUXN6Y3qwXpCFdDgjzfsAtujfPuZ41bcabdzLW775nfGXLf57mY5TQhpmmR3byx",
  "key1": "sFEimzsPeKyi2S6YJy4vwdYxSNZLhztQRhzo7aGzhHFLQYmjXBZqyZYr78JdTaVYpNaf8kvLuQhy6b2isdFULiD",
  "key2": "NmjpdX4MrFJWYAx5CaujFbcGxEH8qNg4f7CeZdQCRkf8VtwAQa7JXvKU1yvyBvrYx9vHSbcsUuQxhWkYQSYoEXb",
  "key3": "4T4CodoozS15jaWcEz5gSrFtaDuiSJVSSGzoayrfo35h3vYfuogo34S5aR2nxfszg3fquUeeYBR6NXmsJy74c92R",
  "key4": "2T1p1ZY6Af8QdimqrG9FueA9XboTC5kCfrSD4bb5J5SehHwjqS2wLQSMsT7W1y9TWN9fg5VugYCdWEeoxyzhJAQT",
  "key5": "429yK7jLzrEhcsBpdHuamkuv4ipZTPaumSS48R9q36VPHvBLH7ioq8Wp3kdzR58TUFxSjtjBZrfLmpjNB93M7712",
  "key6": "PxCzWS6DFbHYMGc84NsBVnnDrmYcY7ZPKdgLAj4YUiAmzkumf29XM7jctZgf97j3eSvBNjz9LZSebcd9KTpLC8w",
  "key7": "nXg6seei68wh3u61SAMtiPTTA82Z54XQqwzWHTczomGXSLuhZ77R9GjvzZwkTD532WuJjweniZRc5VFa44jqHGV",
  "key8": "5F5UzyzAvJfp7qaxU5TqzTqtkFZ8vYTRjStLjSTjfyrZ4dyEWuQHwDknsSp2EuVJHhFVQ3DSqt6H3ApuwtpmP7An",
  "key9": "2TAfWTVNJVh7WjUbUpmCz6J9vUMrrGox3u4fcuY5BfmoF2DfvFyMvGfvD3WnCi76dERVUHinfTVzSiuN3YD6TdWC",
  "key10": "3eTRZmzR4Kd2U9ET4JUjtJ9RDMD6hRfd7rWueqYCCfX2FB8fKCcVMCQgmXsHSNbRskRX5qr5uV7anqZQhSFkjqdW",
  "key11": "wj5AXCeqfaC16DNEZRtjf3PGbz7Qk1NcTCTHDdecdx6rhEYj8di32Xt5qT9T1caWodTUcLW7VGteAaWugfCE1Xi",
  "key12": "3xiff25AP57ze3tJu1fectVG4uKjzynkgJEkbCG6n3ykgrwQQ4x52UN1meYx2bC3sH1fqBeAngNvPn894xMiBUuN",
  "key13": "3B4uE4nJ718ED8Uy6G9pWchj14J9iWD5mU217qkmrU2wJ73ppczQaU11to1p67YiDy6LXVTNyx3Mg8K2u4YJsZkD",
  "key14": "3Siq4B5Ddd2LUjgTM9TQFF2kCUhNGRkyNGizvdJRWRez849ekPgZdEuNAspTjtBVrhDfVUiX1T3pXPMN9J2ZT6i",
  "key15": "2sc67TH6zudfcnU6cUUQRiSXfgrhhogoB48QBycTfUrPUu4yqsTgveeY1vyd51VFJFjiBMQ6tgupEdV9WtDFpVft",
  "key16": "23g7VRvoP5bnp2oKVdWKNU6qkUGsihK9PEQed9wi7kXwWtWXkPwiPT7cg3WWoFPVFFrCxYj1EoBNHR62Jfc79VVu",
  "key17": "4AZMJvCamkSQSp2aGFHHhZsza3jXZZqSumBC5iRFdS7xyLGGCnKwsAJnBhCVMhRpqofJvLHRSnn5RXTofNaWkckh",
  "key18": "4fCxzYfVfn23PkGrdHpedQG2m8f6yBGsph4aMVRiuWsFWgqyYcpvB12EgDt55jLz81m8YUmodzFHD89xwvcKR127",
  "key19": "4kjYCMxAV4Yk2baJdMch4mn7KX2qQDvUzoD6Bw3z8oSKLL62aEmFE6gh8VkVNzFHTnfC9jmwBssewq2ehYvx1zuD",
  "key20": "2c89vQkUoe2DYH3jnsgc7gF6syjJM2FjPoP27stVfm1e7P18wwD5hhnyCAmwWxdKs9RRhqhw2RqCcH4SJFY8jbnt",
  "key21": "LaNGQWLgyANyqGoyoXZJ38qcDeT3eo1e2C51WSAJFtt8FpdAm1wFgYjepoe9w3LRUY7f1SbzEuULrXLAK4RUk6Z",
  "key22": "4nvs8gVe5kZ1XbdAzFonbXVFRxPbSvG2s3VdPHXjLBqLLb1L2GnD96HhSorXwWep1Kq56rM8BgBmqv6L52yEhPW2",
  "key23": "3MRVASZS9jSGHHD9EqHg1PbvyLQFEJdKgiUz12mm6EXb5JCxgSZsznRpcJRWUUQY1FGZik5HM71GmP8h91qxXfvM",
  "key24": "A7cEaqbPFz7C2oSWFvYXqXBmUkRpQkL3WgPnEs4AkcxDbtMiAN6oYfoNadDAjZ4fFjz1BYWw7g5sjL2zrdP1X5F",
  "key25": "3Qyfm71XiARCQnpLDAncfBDJVyVGB4P7sJaj3MjsMYozJethbjgD3WkA7UkABMzEn2KaAcmcTAZ9Err1e1UdBnSm",
  "key26": "365UHFSnztohwoYDk8RRQAs4Xe1MQzLHumpKtqhucaSgVTDnHL5jUoKiWXaCQ6ADqrMVYoPFRJ1fw1tVCEGpDgfx",
  "key27": "4CkXeQcLi4hx6pHZjJA94EyiCDQHKXyEgXb6SH2YMv8v8H7Y3wTS8GM4mqRzZNfUqwZTZZnwC4jnm3SDD6XFTrCp",
  "key28": "3cdDjaW2dfHPz2P5TiiF8uccNpGRGxMhbk3DyLocfK8NH7uvh2kLu2Q26ArCbYFQTn9h9Ki75c9TWcJbJA3Uidc1",
  "key29": "2nAPMuDSK2cLgDr4qcdwCxEsFopZLadLZe7f8t4MxCgoZc2WsZek5WUjutJ2Ma1XaEuUuqVcLz8jPFLY37R8XT9Z",
  "key30": "5iq6tS7jVBdWa2CVTgYy2grUaWDioq6nkDNs3pDGsn7tzaR5mdVXaRfDmhj8XbLebeNVo8FB9CUeKojDxHxo4y5w",
  "key31": "5vkKduw3PGXUXh1ZNikywnsqJry6RamDQTpQ3YipNBFLb2jH6gSsMxpSmMZKTFTdBmxqJcuxsTqKaJKUHdhKr9FG",
  "key32": "48PgZNr6bGhoW2kwHa6BcgtsovJogD5KHXgaeDg75Wr5GcVXqL57wsU83FKv1DbuyNFyesLmNQ3eqM4sJ39aU8gv",
  "key33": "1xS2SNDQrdT8kNhnjBB2bSxqmdv9ZQsMPfUZV8Vbn2fYY7Ypg78XeFTd3xktjTAWnGdKn7BZHPpoLUbJk8QsMaW",
  "key34": "5jz6bM6yASMtnWfDmt3he5i43cuAV36mP1sad3sME2atbbAP3outHybmzRK4pEYH1XcbY2bRWKnASFifXU8WpNeq",
  "key35": "3KSAbTm1PVkegGrvNu8kiXy6jV5T78dxQe5Z1M9iUxWLtEZhqRyc7aNC9zB6bGUu1gMW2SMJuJWJUTFnn1HeZeZ1",
  "key36": "3vQNVyMiLK6vMj4YJdC17P21w7CSFnPM9WKRWZwzsZq4KkceH7m6fFBRAoNjR7MAHxLGyTAEbQTfamu7AYonWzmr",
  "key37": "4VbYNqJTkaM8ZZ4uXcjTdPu1TQNMWLi3f64ckzwMGeowRi2qrabS6L52U6QWUQXEBKREtY7MtQcmfXvhy1PS8trM",
  "key38": "3M8oNnShShrX7qACJf8TNq3Wt6izfPv19hKGaEVXG5yCDp2N8gvNLoZMDuZ2y1KvDr3vhRwAoP9eZrrKnexi87Sg",
  "key39": "5PF2oQxLRSCk5TR9mZKhoXsddTbdZDYLtSnrpny1JnQHxgU58oF2mNGJZ4NwAkobHgnhC9qorjWX4psQqsxTwKXx",
  "key40": "2pQkLaJywMrKuhiSfCHv35VTZmFhGcUTZbVHxg4fyhf1wTJDHtMwag4BjxX8JBUy7pjezfTSWpvMFJmrZwyGF5bU",
  "key41": "56cZcM2jozK1xM9MN6QM1azPj2sQ2WbpVi8n3rAAJv8Z8FYweVny79Gebq36E98eoFUvNUj4E6Ppy1U7kAuKmfsk",
  "key42": "2acnXntTDFd5qq1bKj87ffGkKttPqAMJxQAK3d8X8wpEVRtiirtH57ZQvsCYgp1NHbzomXTn2KCqEr7NuE1Ytcqb",
  "key43": "3aCPxFfoWnL7vgVQtDZbJNGdhg8i9MiEhBo7sfVpAAutZyQDtGTDkt4KunnwHYDzm9fD59v9XZeyLHivmNGYaj4r",
  "key44": "3xQps5mocFySiSuRhYMRrX7gaVihoKFwwtWetxYeUMTGFn76Wge6WpbS8yjhcvMQYWJUfPMj7CMEktWwtMsqnuKY",
  "key45": "3aFc799jv3Q7x2TWKYGcxEz4rsdHJxcApLcqs7Gox1FQ57qnxV1fvuNApCY5AuqqiKRmEJ1gzc8LgjyXiBYvfjx2",
  "key46": "5273hAEK2WmxskgbfKLpiBrBxzhA44yH1cKhG2ETY8QheKP9HwozQVzYatZhtJV6hSvyA73ZegKekCeDeKHQnPMs",
  "key47": "5uRK4YhJTqHeoxE4vZkqKfvauhWgcHhSHEPtvJ8vDEn2UjMwrzTxZ5jyPmyLgHEBUUj7uyKtP9nSr3jsXVvVqV6d",
  "key48": "7vG5EUCAyEc3DepAFCAWHs827JALQwBTw8N2YZr2f6VVnfRCnFQLCEwcYNicGhwmEz5dN4JuW27141oHbpRZECC",
  "key49": "3Rz1BWCB7F1yXqLrqF4TDj6GedMN6HTZFx2q2BhvEuBrwNbjogBT6SfTHJMtH5KFMgx14eMBh2VPDq44pgxGC9Qg"
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
