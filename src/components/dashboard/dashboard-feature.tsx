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
    "3Ji5CmwfFVAe3cLP3GwAmVgMc4FuwyL11Gocs2akrURTFYFm5XRjLAmvUTswgArDZ55fKC97QZhfM2coZG2sAdJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mExFvtQXFVovGNx87ZDdLMKk4tgTYLp3Sbd5Y8RDtgwbUVzDmNtbXUoi14wrtfPDSr8v5GW1RGCi52ZoU6Kwntc",
  "key1": "2n4cRt4hsVX2HGv1vG5Kmu8DU8tRerN59zQDUPRy45Xuu4wnthdKQf7Wyy6RZS6k8Ey2ZgvXdrWXgkmC47J4mnFQ",
  "key2": "4tUtXF2c8f5xdRcyTfMRtYdjPXViCKKytX2T3yjGo33tGoB4ApDPsKhtGFpR9TmGkzKXixV1DpA2CnxiL6fE5tUM",
  "key3": "LdF1MGAiecPTQzZ3e17VJkUxanATNRyEbaxo8GJk7W2AiWHe7Kztm161wqTkCkzLhszzMrBLUmVQKT2XuDQLpW2",
  "key4": "2aWEporooBkKni9q2p1YieYWRfVSt7u7AztZP1HgeEZUo1gu5c33WXF3x5uEtcHqCVEFey8X9KMMz1Kbe2EmTKW9",
  "key5": "VtDidhgQH2a4kRshmjfvi3kT6Q8bdfE9n4mEnreKijbfFfTFDgJNkWiTqMBQE7wGTEF1YvzYgmB7yaXURzWTypF",
  "key6": "3xXcCRWc1nnSk1sW5SwXHfTZwzx9ts4RcSF62ykLHjwzpBAaVpKsGJQ3a3g93wiWcP2tAj4D4TT9H94ZhJTszqa8",
  "key7": "64Lea58Lmqs1Z3SfbPVz9AdCKZgaspYgsfVVz3eAZpUa1LS8ZbexgJ7Hhb81g47BuAtG4YCqxg16gMsrC2EnFDen",
  "key8": "3WUmTizPfnpuqu9o23AqQwPso369s9xaXVN2JzGHQhjzvsVTaPgiswHFkUB4KgXhyMmU754PywyLjCUwUmbpknMY",
  "key9": "2myLfwpoQvm5bbtRKvDX1LmpvJBrBsgUfnNcGmy2eeYMYptASWjfTMYodAzdrNkfQRqNaSn6GonBc9kL3XTXPaVn",
  "key10": "4fVG6nHQ2jQhEfCosCkiGPxwSGYNNHRiQETUfUhJmyVUiQFJ7SXzWDnFwoNpjVVL7XFVDuDk8H9f3xiCpD1B3mU4",
  "key11": "2ksNghiiCsJBXJ5hSbytggneGom1WNLqL31FKHDv9yTJE2Ko5UGiHfaLz5D7ZUfSgr8GSsqXhpaPzzKKUXWT9pgF",
  "key12": "5NCWRroKwUfGcLKysuDztkfkdeboFENJa2vnRVaL47nXBirauFxJWL49AMieNXMRkKYJxHzAtjPuf2n4namWfqTE",
  "key13": "5VjsxEZKAMcPK6ab2tiLkkCJ8YGfwH9Gsyc2JJixZdNktgeKXcWnT57RE1zoRER42jmH2FkEy7Jft59RNVr11FKc",
  "key14": "5VHmRNwoxuNPjTVoXc2DRAmJsrBYtvjurXn1Dz14q7aRajFfXoCPAKVohWD7c7DwfQTCSvuo13NVQnd9rCf1FxdZ",
  "key15": "65si2Ymf94pgrjsGZAxwtrxn8dgEsep5TJActLGFoHeULXYsLRxzfos6UWXNDTEPj1TZn3x9chNM9HawuQZgTn5u",
  "key16": "3MJMS3eJBtSf7of5kMTY7Da8Bd4NKg1T7Em1TuVV1vL1L658dvFpwPCQq1cDX8dLqvkC7JCs1ioZs8K4znqh67h2",
  "key17": "2RQWNKV81xZEmc1X6A6FSSUuG1PcU8VPeYuXwz3bSWAFR8koPv276LVx6UxDj7drYqDeWpQT5PXXdwvhb81g4Cs4",
  "key18": "2y1pM4ikayon9ZE7cjZnfMhXwAHPBVM5axc6kaLeP7u3xf7DJiPm6zxVcHZ7osSMeb7bKP5vsEsB15xkoDNEKEkt",
  "key19": "63KbVnP89whJbbbCJqdUe7AGnDKh5dmN2Uth2qHcy7x4j4Q33BBxi3kj4gfi5fcndTmmuVGjRD4YhTbUsPyw2Ajs",
  "key20": "2afzjt8yF1BrfZbxqbxBx5wdzmyRnb1oafuVDnzLdFMiDLonTKi7mpJ9WiE83SFJRBdqPCzXuaJj2y633WgsmpS1",
  "key21": "67Dva8wfhZZQgbDriteBgnZCujppdr346LZTYv7Ej7Bskf9VhQJ16nGKT7SRFYv2gbJP2bRr5QorjQZF2epseiSa",
  "key22": "33nWpfUCWV622sYB5DLiMWvdc8N1cvgTaYByQFK6qUNLz3BDPFduib1M3RGg67JVNSk4XcinZwaCzXYLQiFwmd63",
  "key23": "2rk6ic5kLn67yBfzBxG17vgPpwWvdxANqHXEPNNijGwuvDVU58JctiPNmgMjyWAby8YAbDStpovUps1ayCK1jrRf",
  "key24": "496TE3DE8hfajhURgWDXEWyf4JiJhehWWLhuD8KvvFvHyWRjJrVsxu6F4Q8jVSL415UTEWeodk8NrQVWVjq86Xq5",
  "key25": "2a1kTK1nMC1qe67FNNt9HHMQy4jU3nzcvCcpWFQYwv5vdSLyKJL1c6aJ1HiryyiJfHwq7jN9wCihRMmWHWMTVaX1",
  "key26": "45P3tbLNG5VMiXFjmmbuWE2tyhAVjvBuuYjrSXjfsWjVqvh1E8ACug3qGju4YAwTQ4Bdkv8XuLGwnELBLjatWudB",
  "key27": "eNaqSTBzwcUnetszCGJYq9jh6KZf2ESHvS9ydoQ2SP7PxFCTgeqHLvRhb3BJAtpLbEkCkQq349xvEcjGRvijiQe",
  "key28": "2ciB6jU1M1wJrApUF2ajhwwsaMVZTnG6i6oLmPjpyHDC2PzYDs8oDsbiMiqCX569XAC5o4FUa9aFUGamFeUMTHif",
  "key29": "5WpBRv83HD4G1BRyuosKC5txm8LW1vFTu7H7KrKWNwgfrDa5Cp46dx8UeMuSAikXQFxcRp1J5sScKVVH4FP2rBax",
  "key30": "4FQuSbpPYkxvXtUPnCHoaYYDHHKQEYtwV3oknhYV4jNUwn8BENdcE62ss42pS84EgyeYZPrkdiRSrKmbJiZmD3SW",
  "key31": "46a7vixtw5JM4q5tndM2e3jAbsWjXkjhiMN9ioytPacG3xVLi5LySsn3tsui1s7LDJqo1dt891sHTfj6D1s2ZiUp",
  "key32": "5ViKkDqETrMbX6GFKasem4tvpcbSZ2U96YjZhmoR5n65QhshctyS5pprZAsZLwizeTouQkZd6btH3rr6GDMSbJtw",
  "key33": "5NuETSi6949x2w85PL7wsuxAZk4VAh4nKxLqr1Uk5kovKmvVxYnMWM8K2KbdghiyMRqFpmCafVDsXdEVqyMBoRPn",
  "key34": "uypth7Q6vFWmbULnfUYG9okZvMNsH5VKNGxLwmJCCGLHrTkUmwjGWYwe8mAvgvQSaC8TZagKRpGCuNz7VZtQrWD",
  "key35": "4GMNeAZqPTbJ3KG2trPY3YU1RHjuC5ChQqTuBLGeFtZPdLFshxiEzd9Yj1TGxkV8XSUsMptuoaf4uGKYqdtjfoSp",
  "key36": "dZH9c7VMq6erQkfK3D3r9vpPx9dKK8QRoQxQq1zPDLQA2rg8bZk5uZcdVHJPy9tXMgrkA3hJvK95DEUjoFzuvV6",
  "key37": "4x773VGe5A8CDMLvMU1aHcKjiYR5FUxtZw8nUBCRVHBERvRWKiiARPWwCFqW8PX9zYD1WL76K7ahPYPSwC9quub6",
  "key38": "5EtZQBfs3mYrrVMxQZxRsYJvXibbUNRjEUze52tcfXUYcmz7vZEKmVGXdCjdtFAEsEdQyKs36aJYsc9UvXHcT2pc",
  "key39": "5dVkm4DT1vC32VVaxtaUXDdFAY76vA9mM2aV2gjiWR7jr2jyCq8mg6Q8zboTuUPEs7v14uNDncLWWQhRGDVLk7tD",
  "key40": "4VpWWvPUdmgohkF3oydRCmVnjDiMwJe29Dx9vrjjsyvKqgFoaZmVhCKpqPASGMndmKcNAsNApNoLRN8WdPJznbeq",
  "key41": "4UVTgkjk6LC4m9e9xqHx6HWQpdQ9kFKNhAFcRmPH1RWLVDs5qwbsUu1spmE43zx4F3gyazC9pkJpFrWaSVGYXm78",
  "key42": "4VCeL9VBxZw3WgPfMZ63sYQMGbPqXBQpCywq46ZbHCe6wKFafdgmtxhfU25Yg5vXt1EZFvqPei5wSmsTezzeNsAS",
  "key43": "3npmsRdu6WkVuPKoasDj5fXFNPXV97UMVbHZMFzHoQ1ji7FbXgKfC1JqpG7qZLk6zMr594JtcxqVv6Wc2vK1Aimz",
  "key44": "3wTtXD6WsZHoTPFh4f4HeLYqhkg1WjqNQRx2mCdjYxx1SoM6gNgHbsNSf1cTmhdZPDLNh9DrfVE1q6gsRmzqodtk",
  "key45": "3xmrcRgEx2Lz8DiN4A7p2JtXoDibC8mr8Z9ptdiJFx66jyeQ7kgGVYcRck7VNBfZoFmVqQp2cKuuEyLuyie2LSEd",
  "key46": "4WJeibPjg6fLQwPPhLJ1GVduyQGkmyy2YfigP1M86o3EXYmswMB5bJbXpwomfBpFDvtnJTYKZmdrEFDmWdnzUFPY",
  "key47": "5unn8cWbZb2g8qVas5WzrFXmJHEgkRbTG3ctuPYzUvhtQbuz4QwnHMBwfcgnGZEoSsNe9iRYjy3zTb6UY1REuSrZ",
  "key48": "2NDhvyceVFQohxz3ncdx8orP69YyFn6ynEfknuUJd2ssxw6yXMpicwS5P7pNVKoMNZJ4fwx2chaoq88geN5VwrG8",
  "key49": "4To6CiBV8vNtTKhqH1b8ew5R3gDX65u4swnPZ9oL2zTwMW4TxCJgiMNK2uUshUMAAE8fbsusVRE4aBh9zoVZCctm"
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
