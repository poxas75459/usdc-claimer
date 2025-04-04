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
    "3Qpe7DYSnzfN886xNeKeK6rQgFCg3f3zETBBDNenvUGVAaSWD985cP6PheduTPUSPZBLC5sPqLq61sSsMk6Leaip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTSfxyAT1vZrT1zba5c1M88E3LnnFWN4EN3zvbuLf9VZJm8YFcQRDnwiFggnzdeq5M7acARvUeGiYQUW6GjhpFD",
  "key1": "5zu57FCWN5pMNvWzSxSJUdmfXM2Eufw7hP8dbYFDLvGUo1BXj1KyoALjDe946o6eS1XwKHNFFCjoAnipVKm9weBx",
  "key2": "5MCYQBmk26tWNNRzCJaCpNooPr9KxuMnA4YNLcyNfXye7gXCKyJNomXcBXwbaYEjtMECdr2VKrQMYezgvwwzhuuD",
  "key3": "3gfnPZB88m3GHSCzaagWrtaz56gWAp16rid58XmLmqA32rT15GQwQR5xUdTWnBfFmpyG8pemAjXXsMD9TpzFRzsb",
  "key4": "4FJAC6LrdT3r7Ay8oK2xs6JNpp63M2cFt8e4pn9CtktmxtnYCy3DihecXonPNXLen7mz15KFPNBjDZWmQP7JyEPn",
  "key5": "4eSjYFwPRP8sTNn7Z6sVZ8Sif7hdXWt1n64bxfnooiFomcZjeDe5tixqtj7wMerLfXNQXtQjj6XdYgHBMu1nGwZ6",
  "key6": "4Lu2NK9UqxDjC8uCo7vF3WMFNYc6h8sS94ASPR1mkeqcPUT6AwfFDk5zVdVknJv7CBdLFMh7qpwLVBERpQVuLiwx",
  "key7": "nKoMyfAgLsABEugA5UkAcQutbYtMWEoJ4rjW8FSGGGV7PrERxgYLGc4rAodU7QxM7cxn8KtQp6pY6HZCEDngFEa",
  "key8": "Yje88MmZMcGByDmXV6wHxRUUy6rteseJh4NXZLXRmLr9BbUR1TrFRKRXbGJWS5TtMRx3hYRV9SeFttfDciH8APY",
  "key9": "2mGkQ3s4AU74ypFnb9W8YKiPru2aGycjmtWLv1VGhpH6qCkiLfLNGcQ8uW1LEEHRV5iqp4Rt8xVrto3FpfVvwG4T",
  "key10": "5VjtK8z4z9MKuBiQL1BvWkKyBVxiowhxPXUXiFypBdjrTax973kqmQBAR6K9iCCmk7uoYcRaqYyEq9sw1k56vWMD",
  "key11": "3sgdCkiXXH2S7JM6M2UNz6DJ3H5PqxsxURbxWxrqizfJfPYWbPkL3sa5nCt2hUrthgU4bvarRL4y3DB8WJfgMFoe",
  "key12": "4TDz9oioY5P52zwqstc18cZtqqhpMT2UTotC5pzwXXWc2jmYdcqGK3n9v9W1U2BeiBiffQJXcgJdwwGK9LUvsb9y",
  "key13": "co7ARW1Dqb3Wbi2owzaNSmbYiuC3qnKjyod2wpESH1bfcoYBxzgzy1rtdfv3fSqtmXzF91i4bzAdsUauxsMHJDg",
  "key14": "3vG18QkBZ47XpGWXB5VkBWBmhX7zU8KupA5mjgjAV4enSjK3w6FeCNMsptUywTvRXvjNVeGU2RupY7VVWozfoQoQ",
  "key15": "3Ua5UqYyy1yzCHF7Az4awqCiBDA9gBdpBMvBv6YVBYYi3SzzJN65zm4pYRUmodfyE3FAb6nRGp9uJrAPrvPfLiCx",
  "key16": "3o8dubYZ2CUBL8Dfk2AbUkV7VE35SgeYayEvSm1MFWAtbXByMmQFksLA8vW6etSXdvtk22gqaG5RUSQDVKbPqF87",
  "key17": "39TeVR9BJS523wMc8RUPPrr29uuhWx4KxbKfRk47AUEJkNhEwYEKc1GzrQeXpQK8k3wXTB9gXF6NuLjomvVuGWMf",
  "key18": "417HGnfpByXZz5neLdpeipWQbQCTXrT5r8GE1TebM2MsMkyPAD2Qa5KMihyjS24M423nWJdW7Fia9U4p8JwnR1GW",
  "key19": "4wduwPSUk8rRAm5sfSfdVuvFfs15bSRgsPwuFzHhJzunjpncdRHe81F1uCcSCQcv1ovVdAbQBgVhQJcviT3SPDsX",
  "key20": "2KFUeyAErkNSg5J7EfvHB9tVBfPC3nnaoZYtagbkmrHh83HxLpbs79kjmwmwjbf2T6uudMCt4tWzB1seqsXw9QVT",
  "key21": "3CoPuazQ7iyWWcrDTdCNjus3hwTv5ck7cAyMf6p21L1snLMABpAC4EkG9aPwgvy1jDBQkkrYwQXGG3DCYZtWuQrx",
  "key22": "5SWZPYtFZoouMqFSBd4hEFUWDnFPekA8VycURU33upi7AME76vcwmu4VS8kRVgfEYen9oSaGc48JPKGvTRF2R4ei",
  "key23": "3d4WxnwdspDhvZ58a5SnN92Hq9wUYNyLsDriL2EsHDMFxWYacEWwQ7W3Ppkv4Prv33pcMzHmPqyoEfY2fTkCJ63d",
  "key24": "5iVMWaARvzXb1oo3Ad8ijDPGz93SEV1x9Qvqd3NnRDBWHaV8rVPM5AHBnHhncV9N7MWmuF7iBgdLrE8ysLNwuRqV",
  "key25": "4V32iKybq1gqxMhujGV4WH3TVvCsh8Go6Bisb1E4npQ36a9PRFw7QcHEC2rKkWdFNGi5drMDasLASjs4hDE6JWNy",
  "key26": "2VgYJhfsj8pzaLNeBjvqFDzxV3qgiAiAYc8NDehnRrL46ag9duUPy8AKe9duDai5X2wEUkVxrC5tdwq9VEUvr3uF",
  "key27": "4731JFBnKWGD9LCXq4EFVJt1hgcoLm6G7g9LUsJZs3ywMM3s9ZYtFV5qdrVBhEWijfqQ95M38zZ8ggBydb6UrKzG",
  "key28": "5Re6iynvMsqFzLxX2j4AtEQHQEBixEA8t8LV1nyAMNKRTTFryP4pwsTHLt5Z92wMaxQKTXu1YtCq21gpcfmSkAQt",
  "key29": "2tvrs8no55djoKomar9kEhb8rnFh2SPJbofvV5hw4G25xeR8Qp2wrhcJRvNxvnpPEwr88jQLQqysd5R3k5ob7wYD",
  "key30": "42rTGe8eeE3mBS87Gr6xqU59V2XVHD3AvTC3EjvopY5Sm81WSmkBBab4AC3h5UQjUnujvBXeHjcaN9sAjEvf4okH",
  "key31": "33WHGN5kTc1xV4QNRd8kdjqViMM9qmi13mvPrh33pM19uHHKkkT154egDSbf2wpCKcyUpATsmVZRg8kN7npcfrFP",
  "key32": "pyMuafE1YhHvQac5m3UAPwWw5bYCGaV4oYK2QGkomuY1Ucz7NsgeqE5T5sQmcpApsnvLa7DvVocAzMdzDfsWp4W",
  "key33": "5X45rpKFYutK1h7JNw5XJdwwqGSJpfophTeudnUdswGuSqmhQMveQSshjhvzRztSN7LrdjcRFjHkih1rC4gnwy2A",
  "key34": "28vCLF92F8bc4Gf6NVU1iMQQWGUPVbY5TbwqHUY4Pr2R5wFVojjhTKecCqHv7VwU9nAKjK9H6X1D7bS7CWnv5Pi7",
  "key35": "4oWpx4kheXyM15QdGtuBSG56ra6Mhs1o7QfvQeA4koanGZhgy1YmqmZbu9LdkdqLRftN3RRXHJ4QvY8d5YaBNqRw",
  "key36": "5oSsZrjNUVai61Z6BHWrDM1fXDphCHMH5WUjt5WrVtmAZeQZgJB3pJ78r6FasR5geFSg84JDG5KRGXSBqwMdY2uE",
  "key37": "8261FKphGh38cLWFs427FRajLomBWdRGh4pV4Zr5oUwoVv1xDt4Q9c2TBEzNztyhjJ32ArZwgUjR6rSx6G6KykB",
  "key38": "2EKpkFdMpbih22kqRkBpesort6RyGbyuk5RbQMPgCfKy3tMcKmW1zXT4CWvNAJmTkXg2CoDhrfzWgrBxzsJVbgDa",
  "key39": "5vNKmGSu5m95sVnivPDU95c6dwpS1jwzFdDRCwq1GfWPKUv2M1PJyHJdJVrnM7tphSZKudw4axZn95Hc4NQKjTp6",
  "key40": "1uJELdnMh2GNznHt22qWSJZGDyy4dW5NSP1PdbzWT11N2kSZ31VWS6zMZEZoKvQm8txbgxGWeE6E6zAtnpLyBqY",
  "key41": "4FqJXUCkZsFQ8ogeBySBoTngTCBoNQVgpxBFzREcHRjZaU5sf4Svaoesqz75EGrp51RZ5sgji27oNhPfnHfQfkYU",
  "key42": "2LN2v2cwcTw5fkQYkG5gnCQoCiz89jdRzo5cgUXuLJAGh5uEjGM3V7RUxV9K7GyviNkmV9oxYGqX4Sr1Ho2djebB",
  "key43": "2QQCsDh1MnSghAaEuCkVRWrdT54QLXUfSAQq72eW6P8k3ituCNEMuT49J8urXStVLAvoo6NYFjLARL4DZQW7FaFy"
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
