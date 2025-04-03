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
    "42Lk8hQ28rfjNtEbo3FgBWvccqbWWc9DSMQPwcaPqsXvDTnTVMxs3t7ttoJUh8fwo55Q1WhQF5GeUfLwWZZP9GQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gw7Z1yNPpDdRTEQxUhNqXzGxy4iubdkKYQa4bGADGnrMWbY2ENXhAFpJCaNCn4dShthv5Cmkpc8cfbJeXgY1KLc",
  "key1": "33aa6kX1rjDUr5qQawp7rpkEujw4s9FeMRbrNKrLpbVDXmcAfVvSCGUwQnH6EyH2CsYDiyagjFfkgoVfxazHBxJJ",
  "key2": "4F6qmDruUhpqbMJ819fLzPSDMGNYkRSxPuU6b8cSEGHYZYqWArhCiz7kQbwjbtkvCtbpkvtLfog8LssLyQ8MNniD",
  "key3": "5mP23fauPPvqc2sFR1JSHQcnDKcwPsr3cDVNWDRRXxKsa27pp1ppr6PXeWfqSHuxpA2x7gx2gbR3bfmTgn3EbZuk",
  "key4": "5nyqjGKHE1wncCfuy5PmApCL911yN3TDNLMLBFiU1xbcsYP46CtJBYXBr6bhc34CmwCf8iEBhmGErvEcchr4xiH3",
  "key5": "Qx63v3oqnFQcHdJUYHuJurEp8V3Zs965sE3PooFFvmgUsCcH6XobdcCTUkNtUppXcNUkETfoN4qxGR54AGahwns",
  "key6": "5z3eoXcGUvQ6BXhQP36GatW7xkx4P3knsCucjXD5SNVoh2696JccVtbD5zJUX5h6K8L2WiAf6UpWNjLQbYeQMmw1",
  "key7": "ac2i8roE4rm98RpeZTNzwQH3iiM1dkM6tny3QS1vmXHUYxfSD9gZLUp6rkkQSSViHC3coDRTQiiu32kJDafpSbA",
  "key8": "2vPp6PrD6RCJf5VqoVdwq8t4ktokm5GCGGZPE4uJACC92YC7Qt7VkNpEaPWmYcsYCh3tgMbjVdTSZA9wET9fSq2h",
  "key9": "e8bouEVcE62Afq6RXx6oU348CasaaXjhBAfyY5HQBRqjDWUubgGHzvEAtcZjhfZ69uJvfm9JgTTNnhmqmXXT6ke",
  "key10": "C4vsWU48SyPMsSR5mShkz2RATL2nn3eGfBu1qGVA3PquBo4pCsM6qmgCkKGJwXQqsbUXXcUVQc44FiUnT5QEupW",
  "key11": "4vM2ohgC3zuy6WUdhriagzpspPnhNbErm1iDVuJFdSbNXhdkVAPuWDxR6JajX7xi6C5UKSFdNsPn2sPtcouvUr5m",
  "key12": "45k7C4sb18gZoUHB6kGAus9rfKW8XZMSUjLWr8fQJV1YkaBZwuDmqtwSH53Uy6L3ZpcGz5BcD6WcHugodPv5QUg3",
  "key13": "5tri7kRfeetLJhBEzVHmqL836QqasueoAdSPGbh2SmwqUyd4ERRHFhDaU3cK58bdfKFnonjZj6ACBr3mdSg5yvZc",
  "key14": "5u2ZXVXqFAmmsbE6Sku21BxepbVDS181PGd3He1XxLhVTCqzLtrbBHGkjbnnT3G7yaYxNWtki4vEmKGhm932CuTh",
  "key15": "4oviCoBheib2U2yVmuVmJ8nsGCaSpLHvjsFFUN4q5FoDUXSDkQ4VsUvvLxcWsozQxLhaHemtWnXk3mkdN56EeTEf",
  "key16": "5UkbZHeqgGuFKvoxAGY4tcUSRVRFT9HZTa7v9VKgoQYT5Az71483i42D6S1cDyy8RscqV3vkDGU5JKAtP3zqhK4N",
  "key17": "mhg59jQu8aoqwe8Q3tekWTb36SLkTDnjoQeH3DCUtDjsE8Y6ASxveiSPD9mXMzC8zGDWra6tpNbAJTnTwCRX7Fc",
  "key18": "2HADdNHq7re6HAdZVR5EPGDjmcg59jj38M2GgSFUrG5RvNnQJ563kkqz3NftfbCtQR3BgwxTTKzs3xkvSH5N1sNH",
  "key19": "65yxALHbYAVNm6i3xkJ8f8m8zCe1A4jV2zWFRMYbMkuNz1ogSHw8e1S1ifqZpRSycQmdY8PhqQ4ZeR5hTBvYvzPx",
  "key20": "3UHHVHy2eX64HwcvgjhGPTrdeZjBQjH4ggPCRqHokTAQW52qzPZHcRCyJd5gBVsdRxJCTWSEnTWYqAxzYf9NLkgD",
  "key21": "5QnnNHnDoDyoFiWHvzPQJXqLZ8ej8Ya2VeguvA8K4niC1AwopmR38z5JmCHaHNAzexPwfgpjMkReyQuWb2UtWAAr",
  "key22": "2jMbq7XY5HdymuyxkJHVeL9ZkCZHQo87Y7DatAqYAT2K2cSeSgEXerU2sVzkADk6XkvC9RTbmAKZkZeRTwR4bwmJ",
  "key23": "4N9ZZ4PkqNd5cs1M5pfezHokojvfjfE6XGCzqjG9nYJXHAntkQmkyZC6GmMqx7khLg3wonoLg2qSgnZzSwGyiEhV",
  "key24": "5VJHH9qqqGmTog1wycUViAXPKyqmy36MDUxWEKKUt1U2YqNhrx9U5Sj3Zb8Cdniqx7udU84Ka3aqTfjejr8x9GRb",
  "key25": "3k9zSRDXf3wvhB9UUq64MJM5x9b2XY1KtqLBL9YkezRV1ZF9b4kCVAcmnotBXgH85QDPnYxDgEMiKnECeCKErZec",
  "key26": "2piNFECvhM3gbosZPM8vG8i6dVUkF6EzkKoKH9r5VgLPEq9RUWHzxnAigB3YevQunbmMS8zVoV6P2xycperN9jZj",
  "key27": "XUcYkto7rzJVLH2T8DyHXEZQaGehUi5KyPK7Gnk7WMvSgKzPS9ovdYoQPZQywoT4kFm1jk8fMi1z8QB1iGwuhBV",
  "key28": "4SMMsc9yzPfe87zwRTAH7GVeYGxkTZ34UaBFKBEKpKVrHLa9piYjn15HGJt5kYCFvpJbJmPPaeQ9j4AaZ31QTvvK",
  "key29": "44C7kppQPNcs8BZP868YMQtvom27U4cWJkgrCBpatkiB61xxEKaheGMYQLEeTgg5REowY2aJzCGXFA7J7fq7u1ee",
  "key30": "RULNLiKRypjWwvpdk2JGz93Gxq7tNpU6we9dzpTurfyJ1B5aygnYsKwisQPhKmVET2us8ks7rjk7zAndsii6fiy",
  "key31": "3L4NQwhKr3TQX7ubjwXZpiRhwRu2VKHiX4NKW4Dqfeqp212ueXAprN8h3Kt1BsRbEefzto45tTdJgiKrgfSHtx55",
  "key32": "54pXCyQ23jPTV7Hd5VS4C7VHB8JdkgAQojwcLFsRb3ksuuY3Md1zjByiAFp1MD994nF2w8T8pTfXzLEfWzS3J4nW"
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
