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
    "5hVFNkr5hpWaM56ksVn7JunqMVCq8M3PaGbRxfTh5UnLegD6FPPr6L5y3aUQdJW3Szzhc5iQRELkd6eXjauQxAbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyvNpJy7vtQmujj6Pjd4zjGP8UH8uoPKCoGN5KD7fUeK9eTv7A45BQSnEM5YtFZqf3kBoLh573phMbMCYtXtAgG",
  "key1": "4oWR2VYLKvb4vVyPwQSjBUKiHeFhYhBxSrDSCe3hDRU8TCqjK7vx8YKn1GjkVafdJdGBRoheKdHZqfnte1MrbCXZ",
  "key2": "2Ua4nwmxv2iWsqa1QjGueiy7RLyzFEzCdaxVMbfHqLGXLBb7ZH3szxNEdECqQFxfbBjAdmjRDVs5T2FGn4CH12wB",
  "key3": "3DGPJcEBLEHMYC1H3oQwkCvH2HvbFzyDWGi8XxPPLBYG9RsFyfPKGQgUivRHy2Xz3d4DYobrJuJ6h7euj8t2HDct",
  "key4": "32fUyqxKqbc3pZth4CGoHuuP3iNKrYcDYpg66UoBRUNke83ksRajGCmLaLDVpbStbpWK4aQYNKmd47zQMGAspYeQ",
  "key5": "4kn3F9rfqkJ5K4NFceCPX9CkPk57ZpjSywsjpTpTBM42BCgveH4zRrVYqCya75wjZxnqStQWNvfYD84hmMXyyoz",
  "key6": "Dsu7mitfJbd1HiVn7ipMpGBL94R5MumF1XwyLKGHmL8JYsDVTRpNehK62AN5xB5ghCgx6ponx1q5Zq25gbSR1Ay",
  "key7": "3ZpadDLSsg1inQzgCzkY6SC8pgsCke5T9RZPpBREGqbxy5vVATXughZtHy82NHZ8RWfoD5Ex6KLGWJh8A1xmkLV5",
  "key8": "zpDM2v8gDLGtkeUapFvoZL2rvbJ6tTFWa3wVwoTS7SPFcZnPYG4QmAsezF164dTzVfqoP9HzyQRhE76ZYWmvsqr",
  "key9": "66jVbJQndLBcvvXCFvThWzngqYQLrvpCyBsDrpeFdvMzPKhJ6E4p4visrK6LEQhe5WNz391ReE5P6TzkLcAqN28q",
  "key10": "deszUKmd7vEidkpHqzVa4TzYxxSD8JupAxXo4JVNL6TcVZKJKp7gvTssZdgWDgTE8GL1mkDFTzyQHrxUjq4kuii",
  "key11": "2MEzFVVuHhBUW34HEmPCJnWEok4uKL7Yn9mgNP8KJbLmhmYF8d7mNAmzZyWxRL9aPjnKprDiobeY1ZUWXjLoYPTP",
  "key12": "4RzK4C1H9xooTNqdac4kRENRtWtjJGooxf1VueED4ehozjXMHVVFeZMHgQnUkzxwZsL7Pq4fQ8pJh2zq6FW1uHjp",
  "key13": "585nRo1PhNsnfF4nDWu19zVfWP8A9y91nAvP68MYKvfJfMgJrYM1ZX5eSHxzNd3FvmwMWKkozdN3PjYitskt9fL1",
  "key14": "646fU5Q2r4zJBTYZmh9cxYHNu7xMWr87UJXbAyh4EqpWxiXxRz8JEJnJrGZtpZLdJw7jimqoY87YXBQqJAQocKyv",
  "key15": "5nVdqecKk64Qc1RPt8hs2VCH4EDxWTkwcZLpNunD3jS128yU6dHMpeVztMLtRXn26EtvTxsemYFemKVQhK8hckiT",
  "key16": "EYA4niPiy64pykd4CqdBLXS9rhNnqHiHxYSCZnqMCqVFHoHdAp5EUxNrfSGo7z8V7WeqQ63dii2xUf45yF1iz37",
  "key17": "4mA6PKXNK6yCXQSashbSxkwth3r78YsMAkhenBFgJNkJPRWGVeE7eNbHefvP3i95aRcriBEvCE4WFpevAAas9rQR",
  "key18": "5sMcAndDQxhzMzoS99vxAAJzX42CvE841A3c1HtoeU6dnhe65vtreA6HBvTTfGarFYiC2s3CMeHtWw4Goa4Wd8wn",
  "key19": "2JiQ61icEQJgeG9FJMCRz4cYj7SQ4nDrBd22MSE8s6YgPEiATAPt5ykQFA8nXiC1c28sWe1kFob7KWUCVfuzN9Ss",
  "key20": "4E2GLLRUb1KPLVkWMDkKja8f6Sh7RBCRGxEvJUYoow4vfxNDM6WBqzQBaMwKtVXzaEX3wV8ydn8FbhptSonxPHeS",
  "key21": "2cpTPGSqKszwB2t3AoFEThF1PY3NoU5ewsikvUGD9gHj3GQw6SUaGfRSZmFFJuf4MtwjorZW4EpWyNLH56FEgeij",
  "key22": "4Yrkv3d4mqAMpmTnZZqw3i2tHpkZ5eGfiX3VATKik1Ld6hjVrLG3x3Y2h1FEZJkwK4vyb4sbB2qCn3hv6ivYaCWd",
  "key23": "5KuxQdVy9hCCfvCbCv66gfQeLrz9nwHk2LuCc2kiETbTRXT5BhyoQWRHaJs5VofNYMMu9SyDPStf4PEzJdCeiuu2",
  "key24": "3kQZXuYvMSyF3ftfPKF1ormDXaseWUBw2qzCeSqPZHGPERJD4kfQU9js5Qx68dkwN6igVQu5kQavo6aM3FEW7abS",
  "key25": "ptfAkE4d1bJvqbXuG2FGyhKap49xiwTsREWKjg9qvEJ3XLFFqEB86DrX9xAQaCy5ptAAESMPQRAXMM3hPbtKbkw",
  "key26": "2Vm2tujP1E7yJ9n7oWEKjf7DDvw1Zs6sozreKmejehQK5q9PYukNgzNnwHHBhFPkvRfHRmLsTwe8P3gxpLSNhpD6",
  "key27": "3MGPK3P89ESHhKyDp4Y2qx8594sd2BxUHufHTZFi6HSJQw9ppiT9FLHktBENzPtve5hppRFdew2Mh72ehmJTH3Vk",
  "key28": "65Wte5ckmYUpad4QuTh5LUKpgediHuUjeV1EfFmPa59gpv5dyaBVZRiqo3mNnAEv8S6LR7uhhwXwPJjsN3VBmBPr",
  "key29": "MjJteSdQmPZ8JJNDr5G37mWEvsBjco8ajgkoSyGdLjtuDVfag5k49hXiGPPtyto6TDAAHJxWCutpv7t4URLGZN6",
  "key30": "bgqAnhVRWVqBVSQGzzn1GBqXrRhNppWRWSgvzsUQyLAc84W7yrSrvS4PY8sFxYybLayd4KnQ9aSkKAhaa2P4uH7",
  "key31": "2D5dpb6ViEogYeBf5KZfB2G57bcGa7AtXniFQafLHUzT8JeFeNKyds57f6eETyFHsasg4MwLVyh8rdetMeZWjaKL",
  "key32": "55FHLeegW9MAr5pCqerY845eLjUS8HhGfTkY4RXsUeX6HvgYuApDMVdP1Kg6kRnQDWMeFGTLd1KdEB8x2QyT8bEy",
  "key33": "5UPVEjQDrq1QZmovpceEST4LeWFYDaSrbbPSFjBvUNCtgMeuNdyBMhZeJZhbFoey58vPnZP9wsBaAqfZHueMy9Rx",
  "key34": "4nXQNkPWAivrhAt8JTknf4qFFhHTULjXAP2gL51D5ZJ7q359Y5gxBXmzm6jhHeAf1h9mK43ffxgWT6vPHha7wk5Y",
  "key35": "4DQS4EHQ8XZD5f5d3Gsy77oDzphF6SuTjdeoQ1r6ShMvL87QYsV7RpfgQ2U3aXGnS3FXoweMc6UE3aVrYbWSFcLr",
  "key36": "5GWBnD2gir22sh6YGMhU93Na9uewhb1MH8jjKtdnSCe6ZPVvMWpNSJVLb5R1jYpNnaNxp912Q4xfUitA2pnggfuD"
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
