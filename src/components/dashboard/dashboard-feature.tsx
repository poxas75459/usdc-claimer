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
    "4NEumLWPG9TcxsjHVLAo87FyS1f6g8xPM9JhWZTxoGjHWyyFoj8UYW6PW4Z5PfHC1gK2SLmrPwd5fLuRsHF9DXP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VMTnKemvjPcnCt61twRTKL4gjAg4HCgJX5hbtbDejTnPFXXjzEm3KipHuHKbBj7FGPCLAXW5gE5KmUr1qXRG5jc",
  "key1": "3925QqKNjXoqPg7Fz3fW4hS19MHJpvE7NEQpQk5DEcuV3T84EALEXrEi6toaJxhJUxoh7ZSTmYfKpGq8RtJjAstT",
  "key2": "3MgXam5m1hq1PWmg6A2NP1zvceNxJQ7w8CVcDMLZzwabm7JnHQ8nwZDScyybrNzLzVvpMR6ovjuv6R6PThW4S5FP",
  "key3": "2a2YGoeLA8GZT7A5MvdYmdMpzdBBEh7tKQ2YFPp6tCxigY89uCNozAb9Z2hBZbU8uXKmueWKqGsbxwtFEoUVKB34",
  "key4": "5eUWHfqpEABQdoE26reWjsoXrmgY8ZkZhWhn2H3WGMQjMsbiDSBQNwKDw8hNkw7ry5eitx2d8yX5U2RZCzM24tu6",
  "key5": "4M3BLmPeaFtT334qjKnBx6sWWK7dufT4bD64yv4vw4aMGPNpuvf2PyUpNR6TZiafe7yABLapTZnE2VKsScS5uoFr",
  "key6": "2QRAbmtAtxz59WBQjgH1Gq132DynGcBk2KQfkaHG1cK8fsqiPvfqz8Rrip29oCWq1k3Nw2WDigitvqJfJK8fDyK",
  "key7": "4w9G5nnSRxzq85HAcAhswQWNkBFdsci37T6rd4hs7CpdgrncAEwGqiZzFTAZAEMaq6HJHSpwTQRVTbx5u44V4xcb",
  "key8": "2kS6vLdApfWgwKGNMeH5JjwhTNx5BWUoBSVzU4Q4FHWp7tCxTdbSagayKdneonvYh4Dxqr7rEzEcKCvgSQiNmZgb",
  "key9": "KSwtNobAe48s1wP8rbjRodvGbWLJEmtHYAQC1gCLbSNSqN8f2h5uS35U9geJR3bp2MJxnSPics6woHYc4MAfZyW",
  "key10": "3mgAGx4hAPcwTDQCrueEnQbFZ8VkBD7i9Mp4uRpWwP9ZFpGsJrZw7JGvsHxtLLseiKb34mv74fWT2iUG5YQUQYZv",
  "key11": "3qjrFHsAp9EMSmq9A6hYc3e5NrW5q3Lq85mip5YdAnRLAyW117SAK4DrVoggGCv1r3ko8xVKAHbW2mrA6dFkV9x7",
  "key12": "4wF2A1r7PRbjQCybWsvPKMnE81akwyboetkBrwyjZfP6JC6ohXBpPhpZwxC4Ru6hBmmQHCHbB2Xrf2Vkg5Z98dWk",
  "key13": "4zo1wBgJWgb2VHkboZFbHX5snG2kMUFMPNo7HVHhNuJ5WCsKEf4xMEJTAhLsMbv4c1LxjvEoqk6zczYCHcqz8MeQ",
  "key14": "2j9NJPEoKP9Lg92MZZiatPSXaKWmkQuemiKy6V8YGBCCqofQGzQvSQ38dkqBY2gfYgDLM6po1CUAwUB37z6NbR1k",
  "key15": "2MQykpfpqK4JoH7CjqrfWV8SPWxgLw9wHmAXtabL8Wvh6r6jvEgLjSapC3XknE83Sw5sUY26kWUJE4KW6gCytFDN",
  "key16": "2TcErJyHQDe2DUKZyYyTrk2byqMzmfh715xF6tmSd6Gmx9T4QW2PaCubne8Q5FbZwGiyZn51p5qZEQeyPpD7xHmC",
  "key17": "wrT7FfLXC6E8VznhyQxscfRwekAJijbAnFc9n6MTxiWHFtjrJSDjjLMhE6hE26CcLnFufSa5qvpNVWdgSbun4vq",
  "key18": "hnY7ayAh3u3WLPC88zXbJRgc5HeNXwMxgsbKEJdBsQSwDLNoQQ9BEPRKU1U9HMMsCu7tfMCTw2QMGVYytSQCCbr",
  "key19": "4ieZ7ki4T5AfTbhAcswLQF3Avwnrt9BSjQpScBFddifoCxcVEYJtddza7yzfgijyPAihWd3mXmkLWW4gLLyc2rMG",
  "key20": "8PTgqaqDemwqXvarjfpV1uVBGd7AofMqv7ZpC8NmcqN7VjfMRiWb9hD3SB4VbXiyLWpKNTHaVT3sLmiuVcgDAH9",
  "key21": "5f5F8jey1tmhWxt7jcjsoMC8xA9CxRk8eqFpX1fKKxHdu3Gkfv2ykWdBg7y8jGoVy5wmwtKbkyu7tYcyEbaY5hrT",
  "key22": "3voTgqAdAJYPupyjRamfYYYmvXifEyrKUfbnSXvt6qRpBEWEyDzvLuwCKkFdCUnUZqLpK7xvRojwp71ppW6SKuok",
  "key23": "3gw1C49rQdNYivUmSVdQw9yTbLzM3N16Vh6ctgiU4B7FAA1cnqC9fFhQBYqPujiKGWfPPbhYzM7N1VXfwBcBUpjN",
  "key24": "2u9NsRgpGyJ51ZaU7aMvsV6GsCmURwCNpuQmvV6tyy24aQm5YVQK7hmjHSnydENeqxCRGVLbDeS3FU1SkV6sheU1",
  "key25": "4XKHd8ofNJkzXUEwHu14vYHRUZzCpzLgZHeHYubkkq9XtyBJbV1iKSFmwSv2wosHn5jw55bH6bJkPoebcnwx3Nsn",
  "key26": "5G1tNxyKjJStUdfByuyePnYosoZx9biqJdd3Jky1KVJdwAviLTNWkNodHWWCCp5VnAJRPmADxgY5ZN4arwVt7CSJ",
  "key27": "2Lc2T4kmcWXzWUXFXLFnErSWW5k1PGz9sj3wKtjs9hhDJfSm8ddbZma8vvnzeeqGPSdAzA8f2HL2H8AwsCMFwriG",
  "key28": "VaXjJdKh6MV9QVVpeNLgPHM3pC5FJenx3AgNvSmUHRJfyTQvXx5tWJ2Tc2dWykGt4otaeQ4XG3KeYjCjALXUD8z",
  "key29": "55toz2YPYCgjZyht9XHzHJDHGdyvesYkG6WGh7kNgaZSK17hgWt2i8JxTSGZDyC9PS4PMLQNT1tZR1DpCzpxCeaY",
  "key30": "32Es5M796748ooEGuTK4LgGZ7zoceEZ99myYcpM8qYdtUy78U9uQGAqQTRs6WM88A1X2qm5x8Rf9QV3v329ce9q1",
  "key31": "4gTNXuL19VUW2uNZDqQmjs2sRY8AYpaVYTsSLJhWnRxqBAEtZMEc9bBULEeVNQJPWsSxmcqZaBMkwM6WhLFk2oKv",
  "key32": "5CqnPJ9C1sJ9g27UQbSVUxRMWDL5zGKg8Kvox3XhBwWNVoGFCFxGXtLbSs7MfMKoKAwo754go849PrjAKDT2AVc8",
  "key33": "CsL8CfrsepWzXQ8vfyo722CT1wkgprX667ZhkXb1sNFKvbmjA6wcaK4NmuYwP9kSeCBg5QMzHEY2oZpBeJqhqKm",
  "key34": "5zhgdrose1Eby6FfQiveKCVPipDybAuHDQQdXpdwn1aPCyuDib5rC2VGKzPHtCpa5Bq5aArZuUTgHxbAeV9ZvZNG",
  "key35": "PXmdVGn3KBFHBN6YFii92Q8Kj24MQvjHqxvt3DGQLGokfC8RFqQxxBr6Sjd9N4Pt23BYQctUfwzxNxdAeoFd5ps",
  "key36": "4hdqZvxfCkmkpZ9GdCnhiZuTRDsSs4f8fiGqJT87ErbRz4WQQXBhSqAr8Yj6CfxhkQuuVjjh9uawPNSBxc9pzTgp",
  "key37": "45c8ucvdjzsGxEqYda9rvhRonvipGCfJjDNhUUcTU4WjmyCgtS4gqXBA9MXrsaXxHQR19fwCydCXcd6tWhkfU5vB",
  "key38": "5nT3VqGT5RaohAwJkmMer2QivWe4CGY4oaf5HKfqVt5hrUyFydjgtpyQ3WL7SV8AyP3umSXh4jgi7LKTBSYFS25Z",
  "key39": "5ZYQXqWBqiPGakyawXySXJT8MuhBUgcPNCKgrwXMmeUN25Mx7Hp667Vgd7BT3fjHjMjwYaZq2mfNY2sxwN4F3LoX",
  "key40": "2aRM52JWsZoWz1cTSqWjEm6eh52NJpvSwkAeRMjirKjNAT1dTmB79ecwoHJxnEw5Ci2MyKFpnXNoekUStyd6XTQj",
  "key41": "3hyRyJhg4SdDhfTHEnhrKdk6qfgQGYqB1e94K3fsarr6nqKGX5xmJXra8MV1mkom3GYWpEntNAStEqr78AwsRLRC",
  "key42": "5t8kbmNExERifGVo5qPuCtQAkk8Y33qTbtNhahHDY4JNhmWttkEnKyBjKU4NM4Bm2S92j6VgWiHiRwMuBsd4NT3h",
  "key43": "5ZijHS3zVy5g8mUxn8k3UrNapAT23ZCSyWnk9oKTugo9uR1Fqt88gCSD1qib3VE2GwVU4aLxJX8kkzru9tckXaoH",
  "key44": "5WsCmykfqrBG7H25cNGnMk2HRr3dvU4FMpTtFJbZ8Cf7rZDQHF9rA6UPmY31Fqp8E855Tbd3gzXbfjD788QPVQtk",
  "key45": "Jf2ZMitfsycvqZHaNkM9gj35aA8Niy29j912TZrdeRumsK1vjYFwUu1Ce2JcyvJWJjpyXykjXQMZ1QVaQfvDEEe",
  "key46": "DayDH5XWF6g997ptJPLF1woZhEgdqzSEBGQ98GnMFzFP2u4HMYAXDJpkJjN3TRtVKN8kh3zbEWgt7D6UgwmV3g7"
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
