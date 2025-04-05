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
    "351zAhgc9w93T2MF1vaS98kNagXRtqAqnsrDn9iY8eGD3cjWbp1FTYkZtqXGfUjTSpPdEsfwoAqqw2mYZrCwcd2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MrNxMTjPxe8RRW71mL29D8Zatv77R3hScL6cQkhXVQJfCJmhnAt1Q3C6t1pc7okyCs3gsPXzEsHfcvnC7WmcwC",
  "key1": "21tUnk8jMm97uB9LETQ7KnkuzZy3gEkbMvr9D88fcTs1eVKq3VZoCscxvH335Zoi2vpCCLnxdjTTdeCpKzj8HqXq",
  "key2": "kNojHpFQLbWkwtmV5Ygvq1HJssGbukzahhkUQAum6ys5vXsidmqqdgGjhQPkegqvcNHXwxVGjbf1c9fNcKTYJaU",
  "key3": "3pmqEwKmGEUnfRTfday6djiYq1JiCTaeUmDGfL6hRq8jjak9pZcEmovQo9cZUkfu7gNCtWpdHAmvwpVTNA5KczTD",
  "key4": "5FPaSKwPzhjvVAYVw3xBYTkeWv54ctbtXqh4DT4pkWXNw9oA8wmQc91hwdYu9E2xmSAamx6e3BxRgPA8V96yhCHa",
  "key5": "4LnwxShBcuGLgdwrzx5kr6xjucBhuXMTELCaBtW8zKPbZw8DTB4PgvsWfCbAKcwnFmBPX7uybCHY4FbAJpWRBhXf",
  "key6": "2H1QV5yemipJDtRQMsTKZehuEUE43o4ryciiHe13VKjFWBrcGp7TEZXnWfGRBZJfNVYDRhizt644BnezMmgDTmxX",
  "key7": "2HowW5XWUfdEKJZA6atPvYBphtDjEoGnBAsndAHNoJxsK3B1QXJyDrgMXFm9ybxkFL6JVdeyAyWRnaNq7Kk85q3h",
  "key8": "yUsY3MbgPnvgQnR2Whq4XoGarZtohch1PgBToiZdwDGaewp3i4tPUW5kxsSV3pMPgKHWzPD2HQQh1dmQLZiMPGt",
  "key9": "4A55Gphy1Z3RWeSikNdUepsEiZDFa8PAHzX2TrR7xFRQfbAJJUUZGjSMHxMKCB5r5EWSwDkZC9vCGYMHbENdv38v",
  "key10": "38sH6VTxecRGDS2crPNrFMQYZYLU6uUSnC7tDhgdxxaEt5dSHeGZ487KPwtQcbi6heD1tWU97dgQ6RV9DmjBUwB3",
  "key11": "3Rk2Z2o1o2dxU5wnT645LPTSSNa4Xjc6LUkyRTzwrmMrwWxPJfzRZAgYqa1xRH42UPKLL4KZ7Bmk8ECvf4y28CP5",
  "key12": "4bTupghibm8hueNT6bxBDdiSs4bXyG5eFzkZnmkPdy6kdg9LV41WijNjMULF1KNqUi4w4yHUxanHU9YCDZW4ochh",
  "key13": "44fGMhSozv2F1gw5msfKo97pRdJGNVNVoxWu9dtTEqLPxBPPwFG7scaKaSqPsDh2CkjR7v6Zh34kirqPoi3YXiTP",
  "key14": "5QBrL4Jogi1owQGkQyyshbEV1WLKmcnm9cqB9ZuMTCQpxFGbmCfmcqaosZzouEtxPsegzEQkqFZ1p7YDaEPZE5hJ",
  "key15": "533UmZ1F7urH7jXZ7Akbnpi2RUsq1mXnwYDQopu4PsuhranD8NHmcUERUKqJ1CpUoZkqv6TiySn2QXM4gv6UVPfA",
  "key16": "oc6nbEoUW7kMxU59zs1Nf6F3HVYGHoJCu7hWGdXnNzo4yKhic5YErGaJ3pkg3pDNdjpmBHNGp84H2NpVQLWcWXi",
  "key17": "2Etj1db56f3syyHJi9nUK3H53xNfEy38TyXg6J6XNXfRj9TJ9k43vr4Ng7VdYXvXpxqGfPgtqhyYKcnL4qaDTACj",
  "key18": "4HvFfhE24ZoQtX7MmpoxzeeTzK1Rbw9haWtffLZwrzJiMx3pffiy5swhEBgjdS1QFSmypw9EuTT6fL4JeYBBBTJV",
  "key19": "4JXca1TLhzwz3D97mtPkVcuERAFScuZEtYXE3TQpksJRKxCFZTG3Hp2JSs2qKS9QsrgWeQvMegwTT5kSJBdPSQMJ",
  "key20": "3TJABt1HQc1iLEeas8deddFtzVx8AdTn3Mj16a9D9EhFvVHovw8uBWDJsbx6Pr9Yuo1ctVoYkpz3cQQL18LFh7jq",
  "key21": "4Yr2sD25as6e4hwn4V81cRddczhSCR7qgSVCofnikZi5QPqNtLx6so1wUEpusVRoYwUUrdGyK3iADof875MybcH4",
  "key22": "2GPpR5x8SiSd7aEnFqQPYVgwGoeZZfd3GcJAPG4GtBji5dMVShbuquZd31HxyJxXNnqMR5n2djkBdiFSzdD2sKGi",
  "key23": "3hkLPS3U15gyzjmfCbQFyG1XnMUQUTCzWP824rsRBiJLCHuehjnJLd1pGGmxVBjziQ3qchnTUtcAVtZEMAVgpgDf",
  "key24": "5BBezXLR9r1yQwYiufHBX2wZdkSua5zLPttjdAYcyJ5ShEoe3rGgBKRf53Kx4k6sH3gnq6sK7zhdcPqbabUTxJCH",
  "key25": "45xMDq6KcyHdnfsCjrt2KGi2zGLVMytfNTZJrbyq5ZKvghydsmiFVoQn2aTTdmzgpU54V7SimqsPz9UDnnjdE9NS",
  "key26": "5NayLPzuND3CrMDVbR9MDPWnBYwHDWsJ1MAhVdwYJi8NgPT4YxEi9wRHRSMGgHDoEgGDSprkCVwMXHw5LTsndxXq",
  "key27": "3DyKzXUwhhmnJvjqQdu8JuL9hs9ektMNBq68Wh9Kc1pA5mcZLGnpZSi14s8HwK99KJ6162k8TMaPSPqg3AjqT5ae",
  "key28": "3HDvXGfhMid42CT3vjpbHSBNkddCBpguimGb1GY4MrhVHFtAfdKViTYmKfzmLL2Fa8gzELGpNTxVhoZQVw7aFuM8",
  "key29": "4ffbm5Rf7wDavg8fi85himUEAvGZLBSAa7BrUAQyaTpUBgryNfHTPgp9Abz24xJm7i9Ga7ZajJqrHqL6VGtvW4Gi",
  "key30": "4je89UxcZzjBAKUrnoaQyvpgV3Ws9rqn1MR7W26g6DReXyRupgbaXdvTVF6rq1tq4Sr1gnf4R7mq9EBYGVfU3gVd",
  "key31": "2LmNjnRQMWiHJn3pivgB4CPnW2LNKQDs3VCUdzD1ab9dwiVG8b2XVYPfFGfZCc8HKVdkUMaoeipTK97UxLDH7kVd",
  "key32": "FZ9KfdhKfpuYqFVHJtXBij7cYRAtofbytfnPuzmwNorVNFrvY4Wec1MdoqSeJsF8s7rLPkNwNZHh37mcHSfEhSf",
  "key33": "2MmPmk1zUxQwHUGrM1KnRiKNxDYz4BEYq8rnbyXLe4kruXJN5t7m3P8AL2AYpqzYGMk249Zag1MrAFDKfAf8wkow",
  "key34": "uLXGAbUREBXRp9jb5JR5NDxJDfoLyskqmoCbsqc99UZDaGTvVvRDzWhxZzGFSXWbb1ZfN1Ay2ZddBy6PXhRGyAr",
  "key35": "2hVYerb3hurLWsgtLSt3nUqnDkcrPF69Jk7Ayxse8yEPgYFTCppLK3PuXs4UQs7nc2WPJ4tK4zAsbgBhtxHtEREe",
  "key36": "66DnxdknRUt3J5Jwa57teYTiSo6LX13gxoS1YJ35ETd1M1e1jWAyJkepEfoSPo5cySHs2VLQxYwm5saHrB98Ka62",
  "key37": "5XpsPXF8YebwddoK3bCySmiVVhWpvr62QQ7hqsYauetEwmfjV3wokHgR33ceWkgB9ZG1JYikru4wkX8bgM4V1Vm7",
  "key38": "5k6Wof8e9GVv9nSdZyAwyJ394LLu7BciXJGEKpY6J9NfXdWd4wN7uXqbfNYrBjcjqBTaytW2EPfN9YjGwZZfsnoV",
  "key39": "2yY7Exf3CS2gPiJVXXShhBJMV4vpj91tXELX89f7sVjmxDqLVzLP8DU2sZwqKNnexgP4cWnsBDSZPcTiqKBQNyGM"
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
