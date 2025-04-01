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
    "F8V4wR6HDbi3V1cyLie7SV5rVwKWtMD4oLqZb2SjdBqoEC1t8zuXiiXR2U4h82hRByrhv1Ntp9eDTqwSs4cMqHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4uGoYXzF4WyHD4iY8sCF8n78528KEiNWX94DJmCkhN2Cmhq9zdpvfp7Pgq1L1ppdSJ5Dvd79TXBcPHwCbx3xER",
  "key1": "pmT4igdZWV18M3AkHau3nZo9GbGYVhLpXjgp5R6oVWxWCP9U81gu4LQvboQUoarFLFJvrTqHBUDkvPqDFeYr16Y",
  "key2": "5zu8jPnvnUXz7AzQSjMdz4Xv7E8dqUXrWiUBNfiz7GXBWtPc2WcsxzVZmmf4ZjNxqBUkDNSjQAvnf6YgdKRSeiQL",
  "key3": "2hR8vzTDbv2b4nSB9E6vQKWEYF8yKzbXiCGLrBsDX7be9nmoE598K6oM3ajnwsnJgPgLgyRXfhAyqr7Pryffo6LQ",
  "key4": "66VGXmk525CAqi6dx98nR7bmZCFvA6WMGAdGrwFZLrGUUkcgvN7MDq7L3kKpeTvBDrDXnoeLsMLhZzpaNNftA58J",
  "key5": "4FiRWs3rYQqhdR6Pgvf9eLKdsTLjiKmKdEeFNZA9D1kniRujZ8sXBGpzFAuPyWEK5h2vGLRnUe8E7K5sn7YWxpUz",
  "key6": "36CpK8iDbexco2P97t6xCbsnfqvJj1Sfi2bvJrj9KjRTd7Y7C6UTU8VGvJZLqG95iNiqY6YnkVacbpUzSCG5SbAk",
  "key7": "2q9Ne5qrr3y5LBHhitxf3ERZ4Kp6WHtwamDPrzm3wDtMWVm7zrt2b77fj3At34SnDdGgtCNCAcnsPzNi3xJLGzp3",
  "key8": "3vZmXw69Hn7F2VXt4KV4PFb6tfznbVfHC2cuakyKTqnkYtUokv7Bx7xFicbVjKCzBxUpEAKjGezHxH5AgjSna2xj",
  "key9": "2jDQD2zHBCgBpiVrPrZxQVZCeqVi8j92CToSur278z1TZBfzeyahzKmNKk9Q83enZVFUBRpB19co3RNedmESmtF9",
  "key10": "3sqNoZXNdi4jEiJD4FPkpzDpVmx4ZPkZ3BJdsftTJde15Rsax58tGrX7daQWoUoANZRGQ9b1Aq2nJ78bryvUVLoL",
  "key11": "3ppYS1GGeqviNMsugJY51b8J57tLr9VhbuoM5p4qGKGxNPAZ1kkvNcd4eQXwKAfgFjwcvCeFdYRNSnjQZNgJQjBD",
  "key12": "2VWcXcbpPY1Z83Leygxgna48p3ScXmwUAMFdEg7Ud4vXfZfUS56LKQBmdJTcv5NtjjDcHJaduRAe9zcsZKvtWxbo",
  "key13": "3hs3dv3fCxHr6kaMrmeJ59MorjXGLuDs2JubCcWeqWEpUWg2CFFtFE4ZFS8EUMiE3fi4XSyT3BAwMVZ3tSV83BWb",
  "key14": "3MYAa5r9jaAksDuFe5UP3oWig7o1wdBgdM3fy9CFG3zm1nYss81XoTKhndBeamTtCFTdraC8vwvdCT41isR9HYSM",
  "key15": "3E1AayXTv4gRJVmYh89KPdKvGreLdLDzENJGnRm6adhj4SBZJLmYiVx6DnRggtadgLmJH2QhHuAFs5nMSyzQicoz",
  "key16": "2ioMXWhe8fcQRHu1V7mnX2PPCGguG79mGWdKgvqEeYTGEqu88jHp1RcHvmrPEGCx8q9Y4EedWKdZR9GW34kChZnZ",
  "key17": "242ucdfhTZy8rS9sahaCWnLkcunL9bkthpu3KDE577mNd5QNiDg8nENiC1C8GTzVQviurTPNxQqtZaNFNrba1S9S",
  "key18": "58NfY5j7HzJ4LJn7CXwxLmgDMWXMJWXBeVAB9TtYWY7tsmrbCG2Jkcvw461t78Cihm2LfyNLkrfQoKYvYK7om23k",
  "key19": "BSfGiovBWNaQzaq4NH6rqPbtEEuhoeg5RkDLi1aX4cWyJpHdax8XtFSYHHELx8ky7YvgBZ8UKtaJ2pxzsXiHtkS",
  "key20": "2jXHeJz6VUPKdDho48ucTjhBh4NrXUxSJv1ExDVcNbRctsHgdh7yw12xRi1PucrcnmMqsEBqcFiSGrFEyanGLppS",
  "key21": "4gpbPnnyhtex8hzLHnqHVdFppYoWQ395JgFTMTYsAG3rkgAeLxrkBMgdJ4ssYgakCFQQw4U4XH1KTB74wcACTXRd",
  "key22": "2YjDiUh1rHH1uG6WbmN2qFRUkByBAZL68YfPNqL5JDmniR7JZcvjbRdy7zXDUP2XFhkevNQ1bENkb8rgeer37v2B",
  "key23": "4mjY8oa5ZTtNHu7aPwe1wqcMumZeZThHA6JQFaLhHpwxvsTZpL4UJYPQfBC8qi9eaAWiTz1aHYiC2DgJuAG2qRpE",
  "key24": "24GwKToPpSqw9xeJAhWBpitqrN26d5idY5d91N9mvUZcAPbvqiH3GKZjkNVjnRaEqyX6uZfQJi23EK8nWbyoBSdm",
  "key25": "3f5X1Cv4dU52BxsVqrqoMJXJYhwpBRbsiewMov4sajDczw2M6WoPZSD4EBphFXYNc68apAr2d2iFHQTc5B1QAkLi",
  "key26": "45ka2Lsuegk6N3EPUioKEm9544XAmSnfWs6sWwyhCziqLsiLNPNV9iPEQJqphCkTxUxTvqHx51LoucoucUWrVTTo",
  "key27": "5pc7z5xtGSkzhEXrpmmoYbbik3GA7hv8wD8gSknXUtMDRXnvkAUYXxrFm1f3reZgszsyfJzsze57GzayAXavsFoS",
  "key28": "58c1iNmjuZW6ywJrGzWTG8St8LLvADJhNdejnSMSrG6cXP2ipAacbfgTyJ45yWQEgkxWE7a4mw956J2d9Q1vxSCw",
  "key29": "4W9E3uXUqvaGWtYQ7jG7HtdxMJBQedHC13mu7zA5SfeJneqtJJsxWHnKeZjMZ5J6TcFd6zBCHHq3kEgdhGLwJRm2",
  "key30": "2GqCNgjoGfZvtXmHHFwyiBV3SHYPrb5vMzXsNEZY6tq2NeGQDjhv5MFmLVN36RJ1TAtwjrUWoukEjh9zuwMKaknV",
  "key31": "24gDoUsHy6xRiivoe4Az9MKMuVnRh8SrvYWf99tg3hnyWGYi7g4wYzt1tgqYfNiwpNfXYVJCJUVcn3inxJxyw4Fh",
  "key32": "31jSsHpCwUtSGYdKDWTXvBn1a38uFitP8BSsmQqfsjLpmhp2oQpRNwrrzBJfyqBQJ6Z5572M9JpdQc9A3DrWqRdq",
  "key33": "3uuSyipyXzzPpiBLAn71vz9hAHhrT9JezJhuxf1UgXRp8MTx9FcZBaQ18xr86szkTfvksvjx5Zqu6eymLey3DMh5",
  "key34": "3A2sF6BExqynxXmXEiwf3Bu9rSGULcxPtaZduLzHpJrPHoSEYodqDnecjviLcptHqHHJn9PrrPtEwe5MtJyBKHV9",
  "key35": "2Ha3CYJ6gPGy4k4z8h5u8oUYBiFqLJvoYcTUijKiDR8VjkLNWJvKMKTUi7kMmvFYE39YV56cR9TJTBgRnErYHLVM",
  "key36": "2jVhNrfHCMAPxitwNzT1FkDioXXtt3SdvcS9B1xnFiXrqYSYU7sC6kJSeTLuhu3pNt26enmf9aorKnLsxSFt4YnN",
  "key37": "VjC48DSNrjaUmf2NRQfBKbs11GLSLnMk5MkL4NmkxjSCDF3Q77bPFxMrPdTMBCMUxeMTPyfY7pE9JQNW4f1LBFb",
  "key38": "59o4ZjkRnSaJnUiSsy1GyyXGUmL8b8xTvszYriLVMLi8J1E7fpLXNfT3Y3hyzoZ8bbx7n8A2vmUAf9RvuFJhv3P5",
  "key39": "HJcigv3wWHgJ5aDgR7v5wtiEvE3efp9oagZSddDmZvhN4SEijgrUMP5TjjLgHEM1oBQ2TNA5Si83U12PtfQZHRt",
  "key40": "2ZiJ7EwYBCsatkhFpDPz4jNjc9nTk1gWrzaNcGqWofAsKcNED6wNdtmqAQ48m4Zw5D8ZD2xGX8QENzv966oiCgSB",
  "key41": "ptwBHZ3wjykAzBRVsqAqhhqD6hrwW3YvRmLkpp7eVDSWebnaBUwF2BsWJQYZWJcZyeiNrWzsa5SdzUvbPPz3iMk",
  "key42": "gNBE4oZCJztQJfT6gBTdxtaHAFB1m8x5TPddBrGHn5gzearx4dm7qyPD8r5ynejFKeMZJbco3z5UWHRz7FPqxNH",
  "key43": "2gjdY7Bp6iarJyZS5Z6ZMcBUiZhhCuqBFFhsqhRezU2UUubyZTZHGwiekKD6Zq9B6aMbGbE8Q5j5DHHQ3GqrPujF",
  "key44": "3PpzcQKSEsh3X8EPAFwzx7is2f5ynZDkWGcjFJYbJVLUeiQSfXWFSdWnPQKAwNsjnBWedP1yNP9CkrCTNesnV4Hs",
  "key45": "yQPYDU9sy4zdqtTHionfuNymmLq9fou64m2Rs8tXciCGhvTVL35ypdoWa2bE5ek4MJjUFdDib6cje2dzqiUTor7",
  "key46": "2Vj9DK8PwHwR2Zr93zRAq1DmHCF4sVFSUgbw6ivXoS7gAX7KmpXnfJ86e2SgVjKdr9Ea7EaLu84Yt5PSQPtA6Nss",
  "key47": "31Sc6jX6ic85XaaUpdSJ9Xk92NoMcHf7WoBQnw2k5TSjs69wJ1Xx7k33g5MEcA8uc2YtwbipB9YDLHuuK4pso4nZ"
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
