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
    "58Vn3m6XM3Pavh86mWgrMCfgkQuUyoFmkc9oxpwvicGRTGGuvwmCf3pJrcwCMU8B4NJ1BaJtghmp5o5GX97geoRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FwnwmmXmAxnDVJYySArUWTawSPUskE9bQmp9V74LyLsaoYHU1Vr4SRjzWJuquA6Kof1HQYDQgqD2AFbqPjXrbq5",
  "key1": "25v5DYUGsPDvbk92YsFjYgpnuP772ZXiRVnoXMWNumEetX7hUy1N2sT5NTP6FUeaNmQM3HwwrARBUQ4dm8EYVGrq",
  "key2": "4KNyNvNpz4L7StJJBsHuvFDjvc71Bhoe8BT9gyhtW3PaoyknizhRWfcyDx8kvMrE68pR6pszu2KEv5kNVx4C1vzz",
  "key3": "3W6UTVgzk9sWvrwftD7YzcUWRUUbcfFZA7r4exZfeo9fiZABrbKLxNEWNYfhK9sPhSpCfzEQioeqY712xbZnWSif",
  "key4": "Xj7whqinA9vcJqKs5Z5mG4AK2ZfQ5eSR6uzcZPUaZ9z4YP4ywj5kAHZNz3cqk8Ssiq413JYNYdfXnq9CjJW2H1r",
  "key5": "28MFYmxhpwZ3moJPgu6FFMh1Fg2s6vKBJziDPicUoMaKJVn6x59H5oqjZX99WxWDdNv3gCHWAq3PQ2UY1UgnGjPp",
  "key6": "5uHjYz2ovj7kvbyxnfwTE9oJjcN8PVNTZgEAjcJQT58zcVZzkYM5SkZ3AzdcmCfJ77QYaarQ9mxpNWLdahaHmtKX",
  "key7": "5W1QV7PLp5N35bvhz5Wzv9KGXX3vMbRDdcFqzxVd8YGTvBpxGn9B4A7FrHJxHhiafAELeLDJPkk7dJ82XgaedEwP",
  "key8": "3VoyKZk9UKNmsWpztjfq1KDieUc8d4Y5kth4r1GzeeFHxyCVn8AdPsgrdfCzT8L3PqLWWH3cVjdfJZQoC4rBdPmF",
  "key9": "3ccaVWspEpRBKitxpHBhXTLTpiiKhCnEAyaSBRAbqoLP8DzGdU2U2zZEtTLMGnPT2szZovZPE8t2FFEhAsmbafWK",
  "key10": "4n6Wsr1SJqrHHW8Y9BDEMUBLaFkBJpBZ2rPS5ouonun14YXo3Jkz5sVh6YVDUSS2Ycs19d5o9f2YgAB6adqBPfD8",
  "key11": "2b4sbWcJtW3WHKTNjzgkinEMacsFF3WgYmhEQyZHksWR9vVX8JHoYDjnxT7whdMGQSAkoDrwpAHTc4dkKpA2tQu",
  "key12": "2Pfk5C6qB8wEhdpFF7wtwcX9LG3zHZRPNbGSyYArzCQwfAU7NuRyfgAT6jNpQyzb3dNFUC5PhjwcBS88h5qELMP6",
  "key13": "NqH12oLho9t2BKjeMMx742xMgyUXyscxZN7Zmzvh17vpJ8EQ1xBztknBcW9HoAnFTKAvYFqf2CaxjcZyeWGaAii",
  "key14": "2t9YSBDLpdHmUm1odXwUNQoZFRBHBhWJa3tgzPXhAjxv8KMjW2CBH1tZmRPZ2TcD1u3Fvg3C7jRXhpAs7cZRxCoA",
  "key15": "5AihHBrkJAdh9yAzSzX6gNxkrsxW1Zvxte2keTNiQUA9rX3QBqUtzttZ6WvYHUshq8VV1iTKyQU3g38oEzosvKzT",
  "key16": "4M9TpPRBvNRJMVxVFgroSLYayPtX7WhEGjvW5uhbcQNpFC5otQCbH3tUoSk527doxXuPM7hSxVnPpvf5UsU4B8PH",
  "key17": "5auPPENV9y2Bjwmy3LXRQHsgnEQA6B9zd8yZcyvwxuMqA6TS7fpMUWTLSBYafrkhmfhPbSxbdeFA6nMqV6zuef1S",
  "key18": "WoTTzbf9CUWw8QU3cyVhyNajqJn78tdtqUMeLm8dLqsKwgfLKsgDy79b3JDjtCUrVTc24WZEFFbusr2rg7Jdikh",
  "key19": "5UEmUF2P2ijd5nDyeZqk2dw8jJQPSSdJ6eEgE51RUGJgxwM3a92ZPtUJMKdXFXFnuAvKaKT873U6tBt7PyB2Ze8k",
  "key20": "4ZnLhpjnGrDrTEQp6GFgRutLAyhVJ4EXaLfUL5aTLKUhrwpXxzCmEej1YiGssQudPqByLqZip5tpY2pHLA2vBfsM",
  "key21": "xUu3A6Z8VNbHzGNXjr1BFt3q92MG7Fn84NCfXeYtyBvGxetR3wVe7eavre9NYop12x8myMNbQyXoT3Abtn9viTf",
  "key22": "4qWXoJTYRt6rAuhbVbBfQVcfrENa4ehfduocvjUtDoPt1A8D8CenscPmdqaJXX6jiKM9k416nyMhTcfqMp6VdzJR",
  "key23": "4oAJcxjzg41VwJimyFwdoLQjsd7xkvFAtaSCKggVTYrHFraq8BVBcPQ5ADqkjbRFc639L7Mmnp3NZ4DN26wyVuo9",
  "key24": "5MEecaLDnNox4WzjYnXryoby6efCXnRcpVBJzynfi4jiPCPcwq3gLYy4Cf2P3A4UWprokTH5uXJT9q1yobW2d2B4",
  "key25": "21FG2qRnP9r7yjMWwATgzNRH6kiwp2r6moQr8gtHmsabGWQTaqXnzgdbZ8UFoMe3i8KuWTsdQ1yZVcxPm8xTNE6g",
  "key26": "2nDBuxAXHsrhv9yaVyittTNdy8m6aHDUzcVTBWHhGTrhNVnBhakbZQ4zRxi4dxtsiPT2HDcq4JJfvo4g8RmTdGmt",
  "key27": "29b2g5mR771EmqUX85Vfg3Gqxiz2WorhhpXkp3ZPJDkQsGH5bPfYYKqn7wH8i6GDNRvRkkSRUJ46rietZWhHMzyP",
  "key28": "T9PbFgbZzpAQob1vKTzLTRbpQzFmJWxeV3YZ37jmwFvdiYNWEg28XSpvgWxPhhtAZH7JviwfmBovzJkzXLMbmcu",
  "key29": "3NV1rFjWrrXf6GbaxiuLXfd9USSX8eAPT6oSouAurT75vcjjG6myxuhsmKet6gG4X14c6EpcpifafZDj5Ecz1WLP",
  "key30": "QZDRZMogUrtou1vPWWEWST47cnbtHHQbdupQFt4motKUEc7ooDAwPZm2hf2BioebBFbFNxe21aD1aVr1w4mwa8Y",
  "key31": "2dRnbciGsrv97vn5J9MmuFxhjnmysJUwG3ajkeL8ynM3QPY8RQqvX82VLdM23F9z6VYXV37gU7ySzKLBTDwqUDF8",
  "key32": "48YxSD8pjvmH5McQjQyFhgSisTJ6WDmM8ddc6eDZ6cfE6N9BDNnxFonU27F29hkoAWoAn7kL26SamrKvb2ShqpQg",
  "key33": "4C6Xu8hGJ8nNmXmzbEe8gJWnzr81Sdk6VVke6KkzMuiiR5hezuLTazxRTA6hNC1KEGv1QbUkWW7oeXuBfVF2Kpbg",
  "key34": "4hcjFWf7NKdr93NZHjAXZQ8f2GGieVKTd9sC2J8ieroEzadeppsNoiCdwmN9itAXZ51wtD6Wj39Tf1TvQM9boiXw",
  "key35": "2oTPK8xSHwwkVDQy5RGX3eTnWhSWTN3unNst441EN9uhguAFaStwGQkK718td5uGpAbvz5NvTfdQT1Ghv57F3LFv",
  "key36": "2iHkD8E7QzhuU4UvXioNoN8Smd4npzXz7LJ42FEHGfnnioZs9qJ5iZPDu6eZQwrue2RJekj8tyR1mLT1AqTKRRBG",
  "key37": "AdwuF51CujG61aswbL2EbZMEhpJGmuvaVFZLHA1jPERH1kNDmYE3i8srH1Mtjg2vGkfo3qWJrfHGwUMDua5FQks"
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
