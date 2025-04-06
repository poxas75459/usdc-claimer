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
    "5udcMuHP58wCT4wJjeUTABXQe3rLPBw4y5vzJfVxwKf8PMbu3aH9j9wR6mCyAU7RujWREtRHQbJpn17VfYi6tYhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pz4nrqsZApnZKgmar7DZ9KG3KDmZ4H2DyCwgdFMa8guk2J6HAG1R35jP1DnyaSS8P4fYSPNrf9HT8VkdaaReWpt",
  "key1": "ej6JiEjgoMWEUFLxUncmaf1WW87fhyCAzhFogfjQm3AYQNaCYg672yvpStiyJ2pTiRLumjpn2LzzJYGnV3bHDja",
  "key2": "318vRqJHhgqwrQsWjHzXoYh3NdLnp4sA6yPXpmjc9tSAvLTWWiCd3bXtMfVDhwsNvGa6YRcejLM69MDZDsurCARW",
  "key3": "3YQ28Lha4FezneJXqpoWQNadaJVEfniiDmE43eiPaRegDtb9LuzESmegqNdUeKt83yB2ERSGRpbaW7vGdSTsSFGU",
  "key4": "3E9uvNqQXbTh7HcBLbtt6aiG4GvzPDe2v3rbm8joG1wYAgS8Nb9eXXTs9A3RLJSFtEqmD7bnjrESHE1eeoAVPZ8v",
  "key5": "4JABMGZH4Mb3TJqDNHHSePT2XgmvgrL6H7zUdqiK3nZXaYN77hyTiimwYBWW3pKniU7GYwmsUbeUJhr3VDyJh7L2",
  "key6": "4P3UCbj5RCFxqCGPN5ccwAMkGojozYnNxYyxyKe9mxzYEggjF4wXKGAsNUWwD56r31WT4yKjYioHnWYcpYCP1emu",
  "key7": "2rRFW5ZW3WRQkQqVByQFpPUcUqQYxRpXsKCfcYqRcVwnBneSAzgqJh2k2qGzRoXzmxLBGN4fbrqdTmUbgaR1L8or",
  "key8": "w5izmvw7XzJM84mJJHQhh7zmEq8tFUPPZtaQCzi1Fn4aRgAAh62F28e7EodhdMbcByrR1trnJjCBBhP71AnkmMJ",
  "key9": "4Ao2L9rDGyXHbTNa9LCmhxtkuEe97rPC5QxH5pRkbJ6Ag3dpmvH2D92VWSMtFLj6dXL6WE8mikpexGM8zjLFR6r5",
  "key10": "3LUqLjrbQBwpV8WQyNwVWgC6fsnMXvQ6P8DLGWf4yq4tfdd8q7v7ywojpa22k1LGGg4MWP8BGNz2dDSqeT4wjFq7",
  "key11": "3Vh2H6sQKGRdbh5CoJBEMY91LDEc8LesDppZTMcRhCArTNG9yDrVG4CkfUV3exqmpwBZKeHJKnWnfErr9NeWYXNo",
  "key12": "5gj9mFNoUqtcFfVPtN4umzgMtiWzyz3npyDjeTUXXmMKsbC9aiTJKSf9nTudiNDoTSTnwqaXU4Muw4PDtZdtDoVH",
  "key13": "328epAjpzdLZPwB4AGtkqDJ5TqzbBtJzPBxc3eYbP2XeLXdDn6XPMC96sC3gFWGzPRqcQoFhupw654PyyxfZYbuo",
  "key14": "3AA82tk7eakpEryDWrbPMgT6sxkYxKjPA2esVFMofudyit5Wt3hPUnzXfky4PH5e7n9HbA88J6272cT3et9JyabC",
  "key15": "4pQS4vuTLWc8Hj5PXjn5jc5STZYJ5xBvQcKVA7YhZhxgfsz225BUhCHAjQCDP3SuDeKi6AQcSQQCCPbpwM9PUdxg",
  "key16": "F3ooo1ivoa85woHFLKQ4XbEE9mcMgDZbVREcN45RX338PQFBUi6SACiTe5LgkUjj5geB5nxtzDULYrvGhACrnPj",
  "key17": "3ty5hdhKiPNTZPgBT48SD61mwaebRAoFh3NBcQ5QRjTUCGX4YcbisfgRxoEFwRCUrVQXA6FUi6rhU9XTaQjbQqb4",
  "key18": "4msaDyo7BGV5sMCmcSmE7faeRLtYKLvDvt2bRLJudgFyHwTNsXSzn6fnWcXur9hEiLLBL1A48z6aiEDEKaVNzo4i",
  "key19": "nqkezPXyUFYjJ3mP8ZhTukXpP8L1UwM8cUBNrQePJu9WCYkEeyHqnocJ8x3Y65HR8y9SCAqigFA4eVQrC84fdm9",
  "key20": "2w2aSjhZ8JtbHeCbc4KenzApt4eLn48CkFxH8Kx4qcTfGb5oG1Eh9Ywx8jP94LNezinFfPrje5wGFjAojDkFfSEu",
  "key21": "4yoNBAf7a96Qktc4Wc4rUTKhRDbmyjCxkAHs6Hhqe3xU6ovKwHKzVtBphDdecvy6V2V7wpu8cQYKbfRBEe6yAFGf",
  "key22": "rXynxYLqtpSEsns4Xg8giSvPG1uv1QqtUAS9tKUFdBPB3NLatuuCELdYbUmPDDqzyzJWHVPRZipGrDuhsKNFAZX",
  "key23": "22ymUuEVTUXVMfZ7DQuVb9H9WBjSkR62TPfzaVZbz8JSKfsZn3RJQMoVZ4M8B93raZV663ur1Jv9bCAGWY7N9xEg",
  "key24": "4BsBK3fcDiH6uc91MaCPVLZMjj4wCA7uVNBHJvHsYhY7ag9X2Whzd9HMm1TzJaMXzdKrwF1icsqoddMe9tCWGMJs",
  "key25": "5ZqeB7Xh2WVnuE3amCi5Jaz3LjDYnmLsTZs5C5GXoZppTurC25mYjbZsCvoyp5XxmHNK1ThSXTV5JTNdE2PTz5KH",
  "key26": "3JVCM5jiEfhLPbXCHzyJ3xfjevQyNnWCQSTWaoW4fXcqSGMMfESQci4CcsUNzPFKWm413Ho1ALJ5QCYyyXayv2wt",
  "key27": "53oknRx6gE1FhcK5zGc9VAFFifSoKY45kWSq3GF72oRS8sFH98SPgpBpAbTFD82QUEh2MFXVGD7cDb8FCJfcspEs",
  "key28": "2CXmHAjmUPonChgUh3VjDMqPsYvYTsgnwSQi2z6VZ26x9LBGzwsmDFmWBe56MnacJqwxWWDYxZ5RPE62R8eWmPoT",
  "key29": "4qxK8HdA6NSup2MipjJxnPQqpCiv8JgCQ9sx6ZJ9wxiPiCAHiCYRWwh8ZRSf3ktQfgS1qTuuw6EHGUnXLYzQkpyk",
  "key30": "5nXjD8UfaiNSphQBcQPMiFHuBpcxr4fipFpoNbCAyKCtYqYMhJBN7Qv7XEVThjPdh8BQ8Tgt5dQDtRHvRTvMiAXp",
  "key31": "DhA9w62NPDWHS15iHsWwWmFzFqhdekfmKPFxmBW7DpiKsb1XG3gVWfjyzhFxsXA1UkUtwnt5wrfsgGA9BM3zqFy",
  "key32": "47R8jayPfnYfFh5gZvLexB9PH4dAhMVwG4gAfaJsct26X7Fq2NTjo7pQi8t31VYp7H3AwYkHpGRqMppVtYWwJurT",
  "key33": "5eJ5MepXqUe8dTqJvSre4u1pTezeEnyPQjMdtq6xH6sSeZTCWERs6xAgYoex5d1Sku9QSmBacGUqg8g22KovMKFB",
  "key34": "43zYq76Zdv54NXNHqVjw2gkMR8m94npPEqtmE7NQizA6QUHraeckph7jGn2kqnePkVXwWuyNhEybnBjzSHGWPMRi",
  "key35": "4eEHY5Nv3yMHYuofhVbsD5VRUuVcPSQUdGwfbDqdYQ1ouZ3F2EL2y7qLsGPSGYbfVndzQrPQr6z7PZS2Wxe7F4cb",
  "key36": "2QvbazNV15fBLaC5qsBCTBxVi5tXwgeUGhfqwZviSqye5xEKbS2AhnLRdssVAjZi9SqDBzfDXsRPtbw46F26y6sy",
  "key37": "5zyG47cWiRVg91zA4Zx83HP4TkdKE6cAsFXC9VVSrshSJpbVz3q9vpoDWAZvBa8eH9Brc7mvWo6kfbGUebuQXYeY"
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
