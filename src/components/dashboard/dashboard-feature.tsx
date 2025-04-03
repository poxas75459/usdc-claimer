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
    "3umxUwUZoNnx7ExcNiFDCagxhQqCzcQQKPKm8C1gXEfw2NJa5GwiQ2TUaPKNHCpPvQg3mA5tEATLATfTfTmdjXZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9PeSqo5TAsfLhPedqiHdKuLbN51hqzhxAnGLesmWjFqhDD5CsGYcGct41JAbqMQC6Hsa8SeCL4u1fUEF9xc3qe",
  "key1": "2vhTam1MhmtQasjMJQcsBXiij6fyQYMQGCtwKLPrE78w87gHGaMfVp6aMJtgz7QFr3FeEUTmd6NupzXtHkkEztPP",
  "key2": "4nHvYTz4BMkzeTSArcs6tERTYGhs4oW4jqgGcTmUBvFAUfcSuMXG1KiMpSW6CoygEwiWtV5VzPPGRFmoPPd6csfg",
  "key3": "2qrvstCkQVVioAWofS3bvtq7gZS5SRppQfbUWW5qDkZxYvdKdsfHDT8hRYtDwSzjTRLwg7eVoAhs1BKq4LUaXwEC",
  "key4": "62ZLSjEyrRKukbemHvUk2DA8rGUvXQRxhXjqtm4TM8kLw25TCRS2JVwhNWnWhArfeSo6ABsySywUtN4UAYeU9nZx",
  "key5": "iBYtpme475a9a1VX1WmFiakuXSJdNHnTY3kUuMVhHMEoc2oeY9xaVpBsSTy9VAqXbg7w7tEWE8iNtGn1dXzDB9N",
  "key6": "4KKXB5S6VABYfjQSioLs5h3iDbqhq1SbHKkce86iV5KRN7UjgnY5Kh5KsVEUJfzz8sLYaBFCoUnBE8UqSkQr2KBf",
  "key7": "LTVTKJ4qgAQJUFpMRiSFZdSqx5fYX1a1wyksMnk5EZSjshaMNgMww6AQRFusuAMgjYboUxrFfpuoN2rFrX189oc",
  "key8": "t6t1x8CYpcYwDdbW4Ntw4BVJBj8GuNT1Lki6fCL4WA54yqyc3f97MqP9VTA6RdXfyxfqp51R59Hmopz45xsrqwC",
  "key9": "5sVhhspGuHkyPoWhPde4Kd8j9FLNaSPsQRn9tX3semcNpyTswYsNyWCpXqdCs452jpGSPpgT7qypzYjvjDkzgznB",
  "key10": "43SMbsKwAMJq8udu1nMubnndKdb8u6zwsHGmmnioiuE8nAWMd6frwGHWq88fQM7548JycqJrWneznXWtADpeTzHU",
  "key11": "5NMhm3hk7z5tT1WinzibsBNS1ZUJ8r9cGnzCWMXRTm1ZRyp3wuBkDNHmbbzKvySosHi2SbqX45WFKauDvjBBuh1c",
  "key12": "3HLXE2umFrEVBbayWwEyhqCAKxctQmbeKRZdNupsajAGaYF1jCr8UbSxyKM4ie9re4oTt5QR1NaWnBbvMLNEXJ4Q",
  "key13": "67P7cN7ffWxYD5F65uHUvMZTQDn8QQRyNTuLgKBUPYNsMXcSM9BzzhoLQJjmcd29bUgyAv5p24xs8Rc2KKyWTUBJ",
  "key14": "4sDvLJuJSWjJTToUEjFPidTN22gvq5peLRuLi4q1CAQWKwYnqr1NxB6kKC9svEhXMENbsvrKvdFfRrHzSh8AtuDT",
  "key15": "2ftqffV9KCoWL1GqLsmzJyajVbbhuYxgyLR7vHrA4vRpWRL4trq3cyKniX8kBhkJdggVRf5ncZW2v9gjs3R5Jsxh",
  "key16": "63ZZ7Rzd2fAArPhDAkSQP5JkmxXZC8phpaHUjxV7RVE7PMz6zZ2wsHuuDMXCerJZVPxcBAw6pEtnXNkSpkFgDaCJ",
  "key17": "2y1dzDsK6MjDt4NadNWA8QCLWUh9Rp4p32yu18j1YpHNfYci1GG7He1HrzSmmxHpmdyhkRyfCY9iKFDofFSGzRZx",
  "key18": "4xhBNh9aHiThWRcSuNFdGiFqeJTTUfFiHxMMaqoyg2JzXxb9c25swZgfosYhv8rQBWsxTafpXy8hTnfvPaxV8HXo",
  "key19": "3cvquSbHzbHWTkB9mVt2LMkmxiWv3AryFoxu9D9PGTFSjQ6HbWg2KCz59C9P7g1gmxg1MGzPMti1KDuwx5ZqEZdx",
  "key20": "nmai5pcAMNhQy5YiaoKWdHYXHqXT2ELNAfkux5JcovA6Uwr95tsFMiHma66BiZQarC983igTsAVQmbLQzeXnGUV",
  "key21": "5djVNAnQ1ua2mxyFp84SnQPKXjM3MgieijUq9sxTMc2D3q3U5yEWdYZFWj2rSMYhVgxqYwPP9EbxG5UgTezFHAHB",
  "key22": "4MmtvNJpfX8FiqHzLPEgr4jgwwpedvtxq24yCpsacQ5sqoLCMtXzB7N56qPxebWR8qcfMiV4h8SY9h27UL7vc2Z4",
  "key23": "2qgA2ZGB9VdZJiJnweLj44cgNKuLJWfZjf6HjM4x7VGBJ4PxTKhsQuRnNgMrbKwZE5q4VoZ1GzQGB4i9K9Nk98eM",
  "key24": "4Y6YEnieCwD8qCmb7FFMMbZQwYei77jVkh9NUHdCMZ99nisL4VQN5myxvp8BrekBesnYT8DD9tQZQogefGXuZK6o",
  "key25": "2svxxMpmS7vfGTxND2CiN5BW7fvqgSJDxG9ppaA1dES8kDn5rr2B53yyenNfZVSeCWbx4bpWk5bLSDqUwhaB5UDj",
  "key26": "3GRqkeH1zfxfwLaxrNx7p7gi1EzzJPM5yCR8vjjfbLdFFgZGyvxjhJy6hcc3kixwUvzBN2zervX6BvFSg8Pq4yqr",
  "key27": "2jacw15GY6WuDBQTursFcbRBLyjnAQYdyMGzApnrtYWDdtSXbi11ZuXRium54thhXDYukMi6GunQW5UMry2VzfD3",
  "key28": "5pEKn3xt7DVdDpXqwYcvvC3PjpRHVLfJNNrmHRYWR4bdp7sBN7QVy8EnhRx5JuQ3RYfX3Hu8Lpx97DQTfgW8U7b2",
  "key29": "vDVxSeun3ij5drm6hzfKTbC92sQsyqaSa6eHYrg3S5U3EHKfRMVyW7QPbAmDAw91amKYp656y1AvxkhnxCgorVF",
  "key30": "5HERQqmN5kCxt4K5LqdLcNbDFqcrAfT6PdpJfFfy78urfs9RBscHw9ENw1oozxdD9Ch3LcLcu5fabj8LGb2vnCZE",
  "key31": "4kVCx8SX7zD8bVFoE3SriexpUugJoAJveCkWgkfrJCucXXkB5pyrZC4hJhzzWbzZnJR3jyevtcMhVi6BvK39AmmH",
  "key32": "2JXdzEnz12bkZ8HDTNsHDdYPtZhJE7hqNHTFcHKUsKeip7LsbcrbMcEW38phnMzwdNDT58zrkj37xPP6aydYeoH4",
  "key33": "2pLSF4qJt2vWdYbH9zHhLUTHhfFq48xiFPpHbozRv4ydfffzXmG3LjJRSLHhfbtYDApMwKi3gWDu6pzFThoXBXt3",
  "key34": "36f98EiYNXsFGiHytdrZWQHvCvsDcQyxin6f4biXWvzqA1uddXt9yk9zZtKymrdSm3iZHfURQaQSSuGtYnQSrUTg",
  "key35": "39uKyXmjV5fHKC9LyRFB3uKNWNBHTWuc6g9VKWJoYGJJhxhqcxhNt6WZvXyRYCo7wpUCcBeD4hRWbXd58Wg4Zi4E",
  "key36": "2CVV1TfeWqv75Pzb4rHci8W31DrGKEU5SN4Dy2DYDZX4xW7pV9YZWVSwm6etXnSHtPV7bZqC3htQcyHG1HkhTBVW",
  "key37": "5gRmqdKupzcakaPofnocPu97AiAb93ChpfrEDfJRZ6Q3xTtzKj473wdP3HL6Ceu8ASnAAXRvPPCubd2hLGmx4fwF",
  "key38": "5favdvR5rpU4FEZfYHBAu5vvVfymK5jSwNn1oim1ftPwL9NsmzpxHa8AExpb96ondorM2C327TdvuWeBY71vLPRD",
  "key39": "4piG538aHJo5XEwhjiJj8rtuZoxc9onMjnDZUzJmmh6aPPJEaXZgUAKoS4Bqte4Cy5hrWkxeG7ird8N2CKgtqfTt",
  "key40": "5yfHvAVMWkPMjhj5YpCfVfaYJXEMfWbVvpaAzFUPiDu76i9AYVNPPsa3ZYmNF6zgDixstMWq5XbVkVuv3Hg6nu3r",
  "key41": "36ZgSxMneDD2UrFvK6zWRHrqANT1iLMCzXj4oqdYEnCa9ckJt2UdahydoBHBfNdpXTDGz4jAvmSgga2x6Xk6y3PL",
  "key42": "5y9jY7vTetzWSPcf6LUVvJ7Zuxqpke6TnXcGLt76rCh2AaZDX2n2hk4B5ciFn1SAYayfJ11S2niCBs3SWu486i6t",
  "key43": "2d48VwsnUNXWfdDagQEbfiMLyve5udMXBvGZ3h1qvrgE3JE3gxPvq9uJe88BfjhPeqx6SD51koa2bDgPoBWRU3eq",
  "key44": "2QyTfLTNAn8xZdd9BND7jXSSfHB4iiuYxfytPfR8cD2feGWBzh5z1k1ciPpjnBJaFntYAhiJKD2LXnnvZZC3TEgh",
  "key45": "4sfjKSQWssY1UdMhHHs2jshHt3m3Pq9ujeuxdiReKMc8g1AgtaastqoN1E93sC5ZLVqGUJSq2pfHekDGESA2it9w",
  "key46": "3NXAqNBUwxEwmBNhSzHCqURGdNRzWaZvd1L8v4pyUkTJLp1YvV2dc9ZXqmPZJHx21sB433TiQmmasH4hS8A6gVUh",
  "key47": "3PgHBW5A4SLqteP9X73A9wqj5NRx9yW6SKnsDsFAm1HCgkffBJSv9KK1gTfFbLvmiQssAMSDGDUm3BKfMnynSSV5"
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
