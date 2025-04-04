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
    "vFidvyfS8cEV5W7xebh42p9QLGoDm46PoGSZiGfmc7MozeE2xQRdWpJdbXXATi9oxkG5hEJty6r6wjvuxgXC1QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtW913N7ZLYG3qHGx8NNiNskwNUm6aVbHHAdWFajMgQkynhZsDj763HbEXLETSiA6oUAujf7jHGZgMr7gX7ZF2M",
  "key1": "2wcJojd8musYeoFxpWv2n5TWEVXSzHn9KjTiSXYo8FPzNedxnpDNiY7WRhma7pgbEBhU91rWXutRWTHevnwJGyvw",
  "key2": "3EpUYZV3AdrRZKt3nHfVt4SstATeK46CAmNjo5i9AoYmJLCAxLceCj8KVRqwfXzEtzHJEosNZhcmadrcjYP3F239",
  "key3": "348uFKiaUMt349sRkg2sFMXBovY1KpdbhvE3t7Y5Vih5h2RvR4tX8z5scn7bNgBkjTaUapeBRNpbhKfhJ3RXiRbZ",
  "key4": "5utky2ihRrA7ndzCPNEzyii97SEDbsLFtdBz9BaWxhvJoUGu52QhBeDg3hm7sGgGi7MJ98RyhzxKBweTLQMcM4ht",
  "key5": "39oxKKuctAxnr986EVskx2VTWWgmAfk8zHAk8c4wWnLLvy27p1arLbdTdtfYQVJqzs9si6138Q4JvVrQGH5bBKjZ",
  "key6": "5U3bogHh2jS1YnDvEWZd9CaMM1fgSbkhj68dEvtM7YaLc1NxCZqMAmQRaP6RjwuBWtFVQgdNuVzmPRBFC49JSi8k",
  "key7": "2MdLBKVrzdunffdTjp43k3Qmir7PMEHTk1arkaFcvxPYwcgCWxbyARjQgP2ZXQMUHvYcv5mzCgf9pB8KHsQkgGge",
  "key8": "3z6hjzUwVKjjdTiWkWjeLqa2bwK2FAGbXqdTq6txtmR2bQZWpdKpLohYE3CxhLGCKm8HeRrfXvdvAi9w8tonB18j",
  "key9": "3yZNAa9NxwVNg5xfoU7N6L835y8eVeWm6fhzdaD8GUvpmgBSWg8U57jG6aoAX8ZNa7FH6yUD8VFgJrNQHsfxYvSM",
  "key10": "2H5eExXSyuPrN2CxgcvoCR8kyEfqJP9247MAEa5X5PNYUJybn5ZBKvFWpVXUCuXcDqKnuXnqPVbsJKwp418cxLCq",
  "key11": "2sCMfSKbUnHY2fq8Lnv9ADgi8kqEgxyeiWwASjRC7cvjSYquoadjD2MZXEbS1WwyBj3KrxrNYF52nCW6WbvXr1pt",
  "key12": "5HJvADEnBaPJNLepB9gm54miotujyPnkfvg14JdnVSPPucErFCe2NdFjp8hCtyM8p4qx8iFgZnNgUD3K79a6RiKn",
  "key13": "2hTbgteooSyjcLnvWUbCWVXe2mX3iahNz9jaMjAShwCFGTTdL1RPYip5DK4LaHh5G4F6htiQoHz5VQaDt3rT6bHA",
  "key14": "FX1seKUkcT49SFPxspjA4dZcLQuZG9ky8W8BnfXFNceQnLJ19YoHuYwRz7nJSL5Qb9tQi2HTPQpLwk9QdRxJsKZ",
  "key15": "45wQRvB5kGQw1EtTPLjHsaAed1NpvD21dwBdNXvaA8j5Bbi3AZWvuRNp4Q9MRhAptpLk2mToJoyfK1KeTqjd1tnQ",
  "key16": "5uLZ19zNFcGxeir4rWrMRprvQ4YHYm3mkqxiigp6s1gaeMUxDDVDzhNqTUPgg1RfuktqwwAU1JYFPE13JiYJxZ9j",
  "key17": "4nLhMZ37Mfvd23idsL6WY9XSBbU3dEapea2Rm58rrwPcbDYewNHHiXwhBwF7U9h4D5dKj859u5Z1dKD5zqHVbc4M",
  "key18": "35gFFNdYqd6esdGZQoXqk4Z7hP8XekthBn8cUJ2y9JFZnExYDymoc68Mv2hg4qxkR5jrjvU8v1x2r3juVoFGnPZ9",
  "key19": "2y9sS9JPUxHvtkN2ee5hLRjbNYhZNrMQgv9z9hkeDuYsZfmsdykMjcP3duH7smAzG81a1EHM6zfYQbPP5qa5fxzF",
  "key20": "2PhUyuU1huFs44MxzSEQn8AtiWJiwxWV3DkDPE5j2MSyR6VMyaM3Cs6FNkurzMv2HBVfJS5WUxE7vhNr8xnJRUFw",
  "key21": "4gf5oQgq8snuLrey5Wg33BC7YFfC2kx2EkZNS26RXJiEoWpWLTnEyPDY4P2v4PVQG76WFMVNa2Tpi3ZVBYjBh15",
  "key22": "2LNYBZdpzhWUofyudAvdAnUWvFz8HC7RX2jBpYYg1pV52RSCvCpQwhyhTQshvRbNxTcAr3cXtoufPzoKTAuxdMb1",
  "key23": "43erAA1nYAyoaXzDn5dgsgo7e8DiEu1y5Zf1CwS4ENs9zFFyv3gZmuujuczY6cKLk4XZtxbsn9HQ8umqfr3iAuyW",
  "key24": "3V9pnQ3EycQi2KYEN4wVLW2zzuq5faCkLwQ48NWAWqo1nfcZo3B1Mh9yk5ZeQw8XdPRhJNgz5Mdt1EMDd5KFmggo",
  "key25": "3vgMKxSQPt7ghPQG8qo26LutbWQNLaoC6qZvLKwGWQnS7nJd7UTdPDRLHx6W3MGa2hPzbgs5ivJJH6faLXHK58jC",
  "key26": "HW5NMfNaya22modhM5kbLjnBa6e3wyGXj6AaCbCPYrAGe46yE6qVeGsrhxvLvMK5sN5zF9EXkBtBrfceARokdkM",
  "key27": "Uq4NsyoDkUsUQ1inJJUzzGegVCD19HE1k5rHjLus1fAj26t7LFwRsfyYYsdNMPeqFMu3XbnnyWGq4ohe29vMWXB",
  "key28": "32XYXg79iBq5SSYs5gAsHVLJTZKcpPK28vN4w8b6EGjKWjS4GD48HneZgq2KJnHZPqBHsqCppUZvnnLBLjfAkdxk",
  "key29": "3SFV7sApvN2FjtKzbknmAeemD5Q31G91ayVaCiwkRneh2MAQFLFJFxvspaKR3mVfpY6JCqxB4MzWFD1ckatcnfiV",
  "key30": "5hU6CozWdEiovYVkpwVHsQjjVkSeP4hNgENSVg8sr7MNbgxUNALifiXF62UJmxBo4W2SEtaaWzU8RDuuEjg7hHNP",
  "key31": "2qqGd9UqeavXJfngEWym6v5TRsHVDH7gNq2LDdmKDopQrwjjvRb2YmxbBE2pEv2L3pHwwtQVhcu5yhiwPcBpNFXT",
  "key32": "LKFrXvKfop6hPT9ePczbp9dT9otxoYXJVSzdSoF31fBg4axyftiYPhKX9N4MQNNuHa2tPR83i2xiRfzgTopmzDi",
  "key33": "2DQ85fFWJzDjEm5mW28owNhmMNvVvAMUpX9VLdp15yZ4TpGE23P7M34vbkPyec2EdKGJCxpjZjwW56XJCrSV9NjW",
  "key34": "5X9x9yBHVdmwv4MrERD2SNL1aAobNs9ax34xg2DRPAZTDnS1TNRkLkYkhH5CNTWTN46hQiTvcLczo4vCDmeqAh6x",
  "key35": "2t3TvtPt3sCX8aYQMQDkZTdNWwns1bVgxCJaACuSNTrt3d8LZznkZBnWozoeJBhFpY3vaecX5SPs5b5Acn41cSAB",
  "key36": "2ZFEgugt9NkXRWWqPcNsKGQnTmzhur9Di4xziScwKSF5hRgGsHHyK8qeKve1AibBKSXfiD7rAhYFGn7QpBUCfzmx",
  "key37": "9B6WaE9GNgSsE94WCGU1YZDbSdZbjoRGBd4Kgvtfy9LkYTvAkS5EjCHUkg9JadgCQqD1zddjp2rdQPiNtY7k8FD",
  "key38": "4W9VX9HyukjPu2kg9ZXEKzE7sYRJLhKNRkcSdZmbwD5Nc8XkpbFWxm955ssrMEYRTtCcM1RYB3TCUWqvjhTGx6hc",
  "key39": "fAeRJoQyqL564728xLyuSDBkhtX4rVCbk3NnrgQ3ChNdBiQ4F2FFPEWZKPWkhhJgxs6RXz4juSEb2AAtfVHnxDt",
  "key40": "3tdjQibVqExXcKsjNj85Ci68Y5LNUR2D4H1tqoaqmAbUXEjDhMo5g86tLcnUhbH8ikYcT3JbkC43JjPPxGJvLVao",
  "key41": "516LSmfYkcYPpoBk9FGBnnfJ4wq7d5dGnRbmUurVd2qx21dxZjA3NyhrHmY9VaFu9nxnWQTy43givYoyUxF6hp5J",
  "key42": "NK9rojqJANNW9A6pNi5Vdy5MY4vYyPWDnS6wc7Ss8Zzj4ZGbrkFGwzpdGr68BP7cVJzbo1Bn2hAoFquvAb85Zei",
  "key43": "4xTTdfTStnwZ6wa96hVhDJH1ydtoEt5fmtA5Yx6VqwHwbFZebTaRmdfek54BZtoatgd9QddcLWFaVw8RNywVhkHv",
  "key44": "5e6ifqBs7hyxqAHUU2NmUNZqG94Y1xhVM2XTfRqsFJ6PVso5CNo5FAxCxWDKDTBcW7eHsFRZVgte8ey8FssJZUWM"
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
