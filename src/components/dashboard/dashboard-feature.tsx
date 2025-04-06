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
    "GVhCrX2AmFebJg1csKLcZ4emDte5BJV67KYCggCd4hiaGKgJN4Svn27MvMK2vn3ftCi2f2PxvvqDFFBTL4a8qqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469DMtSAAWmmoJZTezwSUjC14RmxySMjxjnPCiwoiv7K351HTrDirLL6WzXaUej4JwenTyFYcSQqEMk9WbSssBqZ",
  "key1": "5ntryKY2HqyF9n4pMkZNVKZRgewJ36jeGWzYmSk21Uy7HFb2NQHYrppaxbuh2bXMkJVc5VxiLsYxjhkXLCKEcyTg",
  "key2": "2RKBcs5hPL5tFTyn6yFPwmRdR6sxd9oau2qp1KfuL9qJW3MSkxr7NuECjap7cQf5e5H8Up3WPHpovwcycFcQkGMw",
  "key3": "9hC7ZsqE2TQjmXD4e9H2dViggDsMa7esBxDeWwNeN5F1cHf1kkh8rLW1n2Sx14G6ALQ6h3qoqbLjNxDy66y2wWi",
  "key4": "3bLEwbzUh6EUBTv9SGC4b6nAcwv9mwSJR496Hk6fH9qA5JZZio9JwHZ2F1ZT1nf7VES4JXQZxPjJwvB5in1UbD9",
  "key5": "msP7WNxtp6YcdcPUSrf44Q7shi2YvU7gmeQP8t93J1LLi9vbqA6ARjgExXQocDgmH98Znb59BVzcjFeVcUEUDWA",
  "key6": "2S1rVpwcNrGxAHQhnKhjWtPGzBdyyHcaZBu5jEdTcfVSKTgtdBhkFJ25rGMe5u7XMdii28npuUgT63g9HbPjMdrJ",
  "key7": "3gu8HgBhHmFHfB8zf8YLWhKPdmFruzjgt55TBBRodr7w9PTA4HeR1kDXAZ24DVvWezu9gKXzFYmiGp2kqiYD8mJ5",
  "key8": "VVnEiDUgQzHUbzTQybqGQH7kuihfUjpKxwSqt6FiY6Ec5uKuMzkqAvj4YtTU5rkKSnGcRzEbjaKvq9zs9YRRiH4",
  "key9": "5LEotsUBMusRgwMc6aaq2vkorsLkgbff6RN4DQs13i6dFfFucPDxLYUaAG2bWa3MznRf8ffRdzyuetMRLxkoojUS",
  "key10": "5UFkAAWx7oWgSNL1ssLhT7ojZq5WjTBTKYcqYKYBju1Vy7JNF33Emp1KrcuwUuhQmCrYL1C64g8XNrW9sNjGGyu1",
  "key11": "51spLhd89dWStxYhJuKqQwREg5mEQUz4kH3eeDSRpomRgLKBdMxygK7Sp73jirJDTP6T65irh8ACfYz6pcj6ZueG",
  "key12": "2MhPBppg1hYG5tv74X8UxnX1tKRLE1SjDq9y939sHjmUac8mzMtCqrrU9VHs5ERPWTCPkBrg88EGhyngokcc2h5R",
  "key13": "pfRbWDt8mZNd4wX8zA168cGqcScQN9UaQq15Jskj8PzSUTvCW2MdDoFraZ8hFdPjCeJEm4zfxhcqoPh8PFbzfo1",
  "key14": "32sqnQSWwFgFhJWatKBosq9HEnhDwzzYy2ib5mEsDVCV2PzM3Dev5SKRGumd9nAfoUcw8eZx2AnCkAiQJFQMZedr",
  "key15": "49pme15P4WVggCqyxVub3xMxJTZdmivCwNKnsPEGTZeCy8Gd9j6EgTaqpK1UxNpkTBknwUV9Wp8R5AaJ4GaCYS7A",
  "key16": "5PtYXowaA17td5NtsnZ3TL5AE9Cyqg8TjxTqzZxAPb4Wzom7hQobh9dBqFkEZv6wWjM5vtQVoeS5EM34bdcCz1Wn",
  "key17": "3JKJ46AYxTJptTZKLf5Yp2zCEce98spqUpf7c4PE4iQziK6tvnuCLLAptVrZVe3bgsdYdevPMoxAAEshiCmmv6ML",
  "key18": "2M4Y7qMz7qFeV5DLVXXJZnVmVohtMJFxTrcitFU1kK8NPARYpiLt6ep7CseGTSxQBXwRnChe9v595cs3u1hhJ28k",
  "key19": "4DZYaths3kwWjg4zaGC5P1B6s5pMiueLukKejaaWzDfUpVTX3yY8QCzGCeS8LthNBUWadZUwzSWUvYssyUXSsqPC",
  "key20": "5WEQhsuuBAh6B8sqWWyPJmVGn5FvPjTFD7DASc1ffMcAbHJR57Zp6n16dPWxuzkRo7XicDEFzMqiHzmh9fbmEN4W",
  "key21": "31wkYfEBFE5NDT1xYvYbQrpCtgzHDwzZg4pjfNgo9rZFnykFpYP2rKBW7tKVbpDQ3gzMmYQdRKFjhM5mhAJyWZrL",
  "key22": "4p9StSbpZR4TH52YfVGk8LizhwrjgrPVDi9KXzSQnG2BmXb59eJLuPZLhqG9BpQGZ3RfKSXNUMkYyZQhLj5TpMqV",
  "key23": "zL2dy6rL9LRojGDjyvGJz7dFXRF835tU4FroauQdh4XTLaYVYRJu77qERm1H78C7ym4wG3jdWnU5X2LjrgBoty5",
  "key24": "38KaE2NN5YiwtqrYsxwVqobSyMqZ1ArVYLU83432Pqcfwsk4nucmVDKEDKnjGWx7m9ioFPgwK4ZMvv6VRM2oMMJZ",
  "key25": "4rCXZjdEcXHBtLVEUzFTs5GHfV2n56S2Wssjd37eYWj55Ksu7rVKrHD66c9E5eZHk1Rt4i5Y94SFd9yEQZg1jEih",
  "key26": "377J3DSytvK937HkeSqi4nd5N7891AtmZ7VDjd4HigYyNt74D3Yk5pa65bEtWWKC7PuG79kfSksg1sTmAqZpzhni",
  "key27": "ativyD8Y6FKHU9Z4W54WArEC1SGXJdi6Z96qCBcDWWnM5aiBdJqYW2B7mDMvYpKDUAKM27f7WeYFmyi6iQLRNTW",
  "key28": "8hhQ5rciaam3uZdii3qijZgrJq8UFi4SyiNdqzbPven4vKCmFXjYFS89CD77jRDn9ftMX9oLvFTj8gPPWZXSN4d",
  "key29": "4ZGWAkSYhPeV3YUUdk5cNPSuazFqhbVL79kGQhK6K21JGzdNabG69tMbqDN1BCsyvSdY71yXjnnzYt4TQictQ3m9",
  "key30": "5E5NrinaxBEnBycyFFLQE73xzZ2kcqHbotRfxRsak67bdTDdeYS9sZWtSAc4ep8LeTPE6CuQeiaqDhY6sZscYZQn",
  "key31": "HgtbDeV17AW3KYZLCqiroYuzhu6PiMYx1HsL2dWH96T7pYKhxjkCf4uVmQ7z5B1RDn6QpBbf1TwwD1HZ44B82Ar",
  "key32": "gH3YyectjbmWbYQfMgnwFPENz27ZiEtQVUJWP44rWky6Crb3bZhE5T94cZ78sWcioLzcqcoe5hA9VFGtxZhHAYQ",
  "key33": "8QWbuwMWS872ijR5axCRzQTJLiddpoY5hm84QypDCqBLHg3UgSr1Pc3HyEoWr86r1kTQG8pxDK8U9BfHW4HiCQH",
  "key34": "UpGtfFmkmDbAtJcHuWoF85PJnrP3eBXzSDdQYzSJar9cMZhwHn8fwc7mN4kpYKRSGiYQf3aNk9W4JKsqXB4AkyW",
  "key35": "2hbCsPwiQ55LAXHo8KathXHrHiMuPcBk2egQQ8gBUzYQH9tmoRU8Uy7EMYMDqFNKBsEUiMpHANUX3z7yfRGNkFff",
  "key36": "48Yvn8nTaffZ3m4wTo214KDHPcp584443GFkWQynQDseXBYMymBmHxUbHSKhdfQtnMZNBrPkLLk7nUbsz38dJEKY",
  "key37": "3FELCh4cXeShvBJshszwkCCPGmAeL6zdvo4y5zBFXwicYJojp2VRXFe6YAAaFdDeS6igVNjmLG5Mg6abypnv5ZsA",
  "key38": "4uhBNtanC9UkDTEmEMfEEtPKxfhHm1kBRaSMvJXg4rZEvVWpuSy9nGVJD1XMLapbD5CMTZcGYHmTNMbpJ4pAcdbC",
  "key39": "2keXePRQYxECQgizvFp7wdsRGr4n7kDJCnMN244ZKMcW37BHZjRTPJQXhcQMKocJWMRjRvmtWCN5WYdnEPWo4km2",
  "key40": "5gnaDnGyb1vQNQNw4dKFu5adAQyHAmUM6GGLqsXG6F7xAxkBYprgJiTfq7q3hKBJHVgiUHch6MrLu6XmqxpGaSfX",
  "key41": "4fHbqwq6Br8zDpRasP2RRogftJnegWJgRUjbXehqRu3nMhBtMmk6iP1Qb26FL1g8BFamhMtCCLWQrJ88mhf8tNvA",
  "key42": "5DKVDWaEm6987JfMiVHtYR5cwwvTAt8eXk6yNhbu1nzLYeEciaWJJCXEqEbP5jtvXeVQDCkntTkzB9yPJGyWQomD",
  "key43": "2fj5QJyzJnPBMKbcRwR3N7t6ff9iqKCsL5mAJUq2DH9XVx5NaCBgcSThQ9b6HdDAEWdG77JD2gFLahnW4zPXkWae",
  "key44": "noDrt5wGiVXpXPrbHUZdDgZuoGjE4qULKkFekGefhu6Cx4jKcxcjS4uGn15QWAGSNGAbZEqaRmEa8FNtwjPcLrb",
  "key45": "4nPCuTHA6m1kahQcZ82BAJ84MekU8rXoLeo9bsxHaHscVtrzkHVnKCViTLydtHUExt57i3rVCsFD3ekqTyH3eRXp",
  "key46": "5ag4rCRaeU3KGeoF3d9wqKRxyZejFJTme7U5Bk47ApNY21C3ACkMbw6VXisbf5ayL3TowSDof4hAFxYkR2VdRbF7",
  "key47": "5QCnQu8ELjB5RqWLjCsXUpCRrCikbw96W7ENPFVr5ab5bqseLCpBNHu4Q3Jzp6Fw3SQxnsS6Ba4R7RB8AAtrSpf8"
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
