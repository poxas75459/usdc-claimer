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
    "291bKFGcL6HmCHgxCcB9VwUM9uXjgYESQEqPReaEWRU26MQdMzz4fJCMpUXUboB72Gkfj1BxQC1jJpRXiHq9Q5hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDT8XSt7LKTkGSda1Ce4CEStxuS4Y7hNU2DRU3Ee2Ygkzpk9UAryxsuV5YjafKh6518kgUscLcF8WF3tYUAS9dh",
  "key1": "3AE6LnnQkHMadDkzUHDvpRtG7zyx6NQknH2GGXfH3ctSHVy9xC5fguQWbuN6Rxv21AdVajc7C9CZWT9ttQ1UKHmK",
  "key2": "3mW7rQoEFQUFGtExUNnRmHuVusWrZGTMsadujxfLHhFnzob8RuTY42xKmzhXYut3SpQGfh3igSaESm3PuHUwk7cj",
  "key3": "4FNZ9SfAKE9W68ESfFGfqKR3nzhqcjdfBP1xVtMimibRm5Zc2qHkAqg6oByVGWPhTdBvGJGLCM8sdFBFCUJf48LL",
  "key4": "FT1UXAsQdeF67TqPb3Lq6i6Y6eMDMDjrdRuXRXaZWgiGzRtVKRB7p8Lt3rkbT483f2GZr1J6rN9ZF5XK2UvQQx1",
  "key5": "47WBpk5x8RU9x3REcRbY4qf5LsLohp7wGQMJoTx4xNK29rBv2ufjzfYLcGqF4YH2FMdFCSicewRk4i5abqTZ3ULL",
  "key6": "3W8nhBu1b5MjjibysU7CqFNqWMASNaXVQJ7BEZXGxfxq2tBScmGHqa6SxSAZYtLGQrYZR85p3aCAooNWftBWoYrH",
  "key7": "58J2cYhyrSmkrPiVJk6Hf5G8goGhXMLDVu3qegEKLVyTgBFwSkKeJ1auGrr8igw8BV6TMJFhRSGQBRq4kLJs61ZE",
  "key8": "3KmFEsz6bNSZjtsLS3S4kmdQ87uYkcYqo1EzWPw3QkAQfwW8nZSgLyriT8KBzKiGwUb8VXvPicBZPqtepajKhtqL",
  "key9": "2XR3aKWKg338mUgkmcSvMkqUWqjjDrDYtMdUTpFnBm4EnQBxsoupG7MAy6nUkf89gEeVvT1K1MtBwtXupSb32snw",
  "key10": "4SC2vJziz2dhfmvqQzzk4qtzaNtnLDzuiT6kHtQw1oZ8G1X5MGLNGjHzCnQU2tTQNiuphm5iK385PrgUZvJaS3iy",
  "key11": "5pjDdwWhLXmfS9bBE6F7JoHbe6DHRAsjcEJCJAfHUk95znD8sGYrNMjgJBh6ZJ1xaq99rZCrDfRyGS9hEzyKTLCa",
  "key12": "5NYyaUSQiNzYHchGAEazHgqPGws81PTfrPu6u6WhTvDtJobxKpJLkWwqRc2tADScHFWivVPr1FsNYKWw278VyQvQ",
  "key13": "5rwuGeqaERFdbHpRjJ1Bb2C75RgY778tvsigecGwczehdweUhua3vYQGgBaxgaFxCBhHJSRxLt6XYcwnD4RoKGC9",
  "key14": "2RheEYaoaZhg4VaB5zEHVqCejCF9zQScw12FN37nGqtfpRiBW8nSPnVXjyiDeM4FXXjC3HaXRWHRewennpLdxcJJ",
  "key15": "5d3jC49h7iiEkY4ECDE5bD3kAeLpRMHznU6A36BSM8hQJkujynmGgXZjvepG1CdenMdzfMSqkS3uaddNHM3YUUa",
  "key16": "5nyW5t73RPdNhQouZ7TZg12rWtPUN2WxWiBmAh8x59Rdu555hSLirC5h2hx27oPBs1JhELZTX4bovy2WUrYFdQ6b",
  "key17": "4STo5zvY8NsVYhFFG6URooGuuwbnv3JXR8m8iScbgDAHz7h9nCkuBo9h4q5hG6muLJ8UFqjQdRbmrtPU8MBDtKdw",
  "key18": "5RG27xRtvJ7yHoEthwoeGrmjjcGVc5aUBpKTDMEYTCXZWgFDWqNztYrcbHN3X9BwjBUidruVGbwG15Q1uPmiFF9p",
  "key19": "2CS5CDx9qNXx2rLzT5GDjCyAhJRLivyPqWRV7TGxqtCsh2kKEqxNMKPx2MFWcpDTv4HGzq9oM52xAGcCyMTZjKKY",
  "key20": "5XuY4dL9S1WrHJQMDunG42iBxg3SibGqpNdNGRzUsddaDjoanbzCrC6PAHbVWMQShCaD4sviWwis8XR7d9gDwe6m",
  "key21": "HDQZ8iLVKMWWZQdP2ogLPXYUFZaHQYxBKw165aELcU7uf6ot6rJorf6AMEdpJLQH8v1PpyCm5WwjzJVftefG2zE",
  "key22": "5tuzDBQj29r5SPY12kwV7K4Gm1o1MwJf7GYRUYWyYGm4wmAXqHFQQUHWo1uqtPhqgfDBcsEPfBQfhndDgSDUPSEg",
  "key23": "33uZn5o2kuHKtwD2FAQaWEFifgHLYXkBrGKFhG9S2M1QL22h9DykCrgtGYywN6jDmz3ZhVGsQoakiQkRAUcKfeD3",
  "key24": "PMD8MmQrb9YSyomRoKWZktVH47kdHviK51i63bXb5DVtYuEsznASVb5uZS2Npfcv7sNDziGNpuuZVAjJYTqMaVs",
  "key25": "gcF4JeHxt4AcoRbPf3dxmazh9GTaDMzngmfgCvurQPdzSK71uf4hgzoAkoMhh5EkQqVL6msCtbJY4UrjQV3jmdg",
  "key26": "2CpmUQiLAcp84qvTqYGhERiCaVTuCcYmQNHwKm193Lueqsa7AFyVKZAQ4xRNZed7V6ET5nK1VWGRE8yvw32Pwbqy",
  "key27": "2Dc1aeDjtWcAQUG9j7bikJUQyhJUeGzzLw7qNudM26bJ71qR2iRvaxZH7nAwgrbDDgTeno5y2enGwJmY8LFCGhrn",
  "key28": "5x1udZXSiXYhaLZcGY8WrqpSS5UK8CNP98oJrxaUez45JxGdz92wMJKkcNxmryc8uRQx4uyJwVgcZv3d8fNTvL3x",
  "key29": "4tzmQ6eJTqm8hh7gj8NoBoHYLCi2VoG1XLuAhUx7Ff9hLUqXm4QTq6ezEfprQeDoZRvJ1d2GTvYLxwbZRh6PKGuE",
  "key30": "4xVP17J546niT9dAZSXzErN7PEahrUxUsYGs2SThJbqAmuRR4GYdLK3WRmviMmoz4WJztuS2KiZPtsWEVSAJ2rAo",
  "key31": "5Jafx8qMr6GjbZvX93iUyKhLVkbHkcnvJWhxN7cHr8KueFs5RNMwpVr8nwNrVXKEM5HAL4FyCGEcRzRqtFEQswMP",
  "key32": "2AjKwKyfBnCwZhhwVW15jtwfovuMA3dm6TRZRfJg4zJnW4BNuoZNifU65zcn4odowjbQggdnBvatmVoTFEgDHyYB",
  "key33": "XsWhdrwLQZunsH637ha2QgPPHSLtaPtSKUvyUuxaqwQWFFNSkhAxm5irPqeMnJBRsfWNGhbrpsbz15izibx6q9u",
  "key34": "5RVButDffqBVPz8qm1fPQQ71mGv6aHVVuoz63BtLq3gommW3sUccouc3zgFY936iVFoCrK3uJGRqRSYi5trchULz",
  "key35": "2tUUVcBabuzM9ntQmH9bpGLp9D16sVtWw7JYV4QF9iy2KRo1RKy7awW8xoVSFx94KEhuFJRxEARxjNYF6bCisyi1",
  "key36": "39msFAHFgxWeCDukPXm4xRZ7v1wHFzqTraGuDAVz7B5ETXR7UTUHnzNGtsuduf4KEb5EnHojFCBdmHjf6725ud9k",
  "key37": "5jmscjqxnQjfsYaGYNUcZRembQ4TEVQsx29LtnnTdB7Ai6RAbVSC8KmU54dt1L8Vh3mFepRxrACpKuJE68qCtK6M",
  "key38": "3XyPWbX4GAMZLAZKYa2py1Bw7CTzM7oa4SQ2hHWShoMp9uwncUL7aWGTsfF3i6MBAo1wQ8ck6jsRqHNaegEPKxjK",
  "key39": "imPXZxAJyk1rNahivZmnrmyyaJwjxT5BYZpUM5vZjoDR7phmSDFqb5uNnP1zeSAFrDhFD7j9n3ow2uh36kCjCwU",
  "key40": "k3nZY3DC4LmQUrX3ZyDHnseq8SBuiDLjrim3S5N52zMaejgdNoUyeLH4gLVGSgbik1MeLK2vxZNbvVZL9UZQJF5",
  "key41": "3bgTW7cGdWDo9JKFWZgdCezsuNyyVUyCvkj5yVHyvhAwuKrkWozkQ9yUtuDHahKhUKNCMc6mmRZ6RFMqAPE5FQ7n",
  "key42": "2AE6gXbWBsqvLyWLpqNTXYP18UUA5jLNU1dBxJKzyg8c8i3Cg53Hv2PE4MLp7zgyyAs5fgroFEQ6Nqex1AZorCYq",
  "key43": "3qavwK9LzMf9UudAEBbQjhRKkjhZdAcgmn183SDF4wWZdNL4rR5mdymxZUEVctDDCgkbZzebCu3Q1S82FqQnBPc8",
  "key44": "2timzLJuXtgNdDzptK4zXy3fZ6dMzEaj6f2tfaJ7r1XNBa5d55iw5P5KSZxEfJXfSUx8JubRY2nTWa4cRMuM7Pzd",
  "key45": "4TGCiTZShtHTLf3WxiVnUALmKi7YAEEtrzsyWFKovGU82BmoDMq2GaXpF55pX1n9f3jZdLYKJCS4Zj3XxwCiDFBx",
  "key46": "4JUzKTcXaCUzG9fZAvHpz76LFH8vnCq4DgnmYq59bcaiWcUtAffkeQW5YV6ffGjuHufTEWxhBDdqdUcdcudiFLNW"
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
