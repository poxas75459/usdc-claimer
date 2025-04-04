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
    "5V8qNxpLp4VuVGFSLhXXSbpnRzXupFeX6G4Bvp2ayXggG5DjMrD6zQvFryJNggD6TfsiPkQQZQSHxEYS4XZ7TMh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aUM3dHRE2Q6gg6oqGotfctqBs3xb5dQmyduCMSh1FiukHfyARGjR4vDjxfhtXCdYPRuNjeo418DxrqR9cfz6qca",
  "key1": "5YqjiqAKc4yZvmeCrUj7pyr1xs3MkwLcLNNhvgkNKXHQyj6K1dvysHF3erTnn8iggBLp658PAaahyVmskK9uh4bY",
  "key2": "4C7i3Vz6igiqHHBk1psFSohpU1RLG4Eq2FUjM75FMsXNP86nFczmVJWDZJrTaFpMJ3593z8dty7LkBtAxab3CE9n",
  "key3": "5ZUeS9Gbi4N6SND8jefgq5cDqtU8zzo8rcRJiRWTZUbghzhApVNcYGCUX3cKGBcJaskjzaDJHSLZbfcwWSrCLdJ",
  "key4": "62V1Cu1GDuJGFTHsZCHnGS5LPKHCCdXLtDCRZbi4px1LUpNsQp9AzzYJvXsxmvwJnXMoN2pUZKp2bKu1AgH691Qm",
  "key5": "5ZCY63CRfgbQutdyH5vDE1JCbFzwb955F2oVnWQctSqRhNQCkzhmCqtgwadBEdR6ztfftASPPpSNDzbYuDihtSxk",
  "key6": "53XLPFriisigo8RM1CvYfVgVNvjqDNxLcVX7iVKVAapTLT89D2Yjtyiq2uziNeadjgNkJnKiNpNMyQmEgQd5oUzG",
  "key7": "4zW3vUznN26eUmeGvZsy32Nx8cqf3mrKzYc1pa9F6C7dc6EA51oQw9stjeNNgyBLE22R8xsPT45XBauiNPZhFqKC",
  "key8": "xbc7JY2Yn3ZyptxoCKcxHZ26dYbRpCVd7XnzwoH9bAcCWfJue9FU7qCYPjYxMKzNP8LoDWhqFm3mRUtoWLj7iXY",
  "key9": "3KqhWWCnwKJuiFyvVRPwRjssgUMmBdem96o9sJFRXRtgUUFpdBEKiTvZxHUFZqLyddXr4ZoiRbQAArbCr7Uyzf9",
  "key10": "4AprV5dBXxk7YVvYQ46rSBCtR4oZFgRbMa3n7P9ceV5eNKCGqSudrHHAJs2C5Q2otUt7r9rvHwVmrVo9ZooCjFui",
  "key11": "3ZgQWcLiYEsxsehAGLf4RYunbQCzQJjQtMcmLkeb7AauTV2Aw5dwPEA2cgbh3ro97PqsVhrETboWG2SHodnFmypC",
  "key12": "h1ggKH9MnJpBh8SgebJdKKKdCtTAcrq6fMuHo9F42uEKKLdhfsPtNTF9jvJs2ior4CP2qxhWac1tSYAtYn46RM4",
  "key13": "2gFmGw3xWJVfdgbgRX1zfbxWKoMAdHLHcSNhB1nRPqaVTJwzxg2d4zrju65h8rQkqw7CfeHZAe59ZPQzKW33Y7Uf",
  "key14": "5XkrrhN1so4YC9JFtvj8ActoDqYXU8ZpThRHZGDDXTDgaR5iz5W8noLPUc5534BHTYuRTFd8tt2aNFUqpp5eNnyJ",
  "key15": "5TaFdZtPysmTZk95U76PZhyxYhakkDyoK9DsWTxrEbPQzBRKKy8szotAKxPD46JyjWbehGYgXp9H2cHaCucK7Rt",
  "key16": "4nWGfVD69Csd1hoJrJT95P9xkCrZfZX3r5k4Wkp6yR1TDBjAVktrDs52YXuyTrEmCRv2CJMDNwttez4Whf4dvzUb",
  "key17": "3FPyoaNvpC8JsGNVTLehNWxXwREKmY943rWohQvBZ3qUFnunj2MWvMVcD4SMMqZp8Y7HeuQDVQiUxXhSZxgkJs2Q",
  "key18": "qC1RSHS8y4ZttbTDzG49V4FxVibSZpVFw1ZvUi7VzGtvfPrB34Fmv5HCrVGdREyzeFbY8QpVkDNGiehBDwzgY1b",
  "key19": "ismNoBxpHZYnq3oLrJyRCZUETN631xe7ejw8gP6QxLXhztwudceYGhqC1ZqGVo98L5r8Aywu7QiwtDTpYEFMknP",
  "key20": "Ngn7bYUk5d9wxFy1JLZUk8joouUsV8fatrASMcVB87xzQYCaEyZ7N1LVtifpm9uEVSndBTXocXwN6tT9BEJ11sF",
  "key21": "2jZpi2aj7zUeDLqNnbKmZLXaZQGJmCBYywqDW9t1QoY8FFs5RzUkv4oM87H8uXqWT94FaEBBt8XaZz3JjxWjJ5UL",
  "key22": "58X9tpcWyvnj8vHLB3AdBYWSPhA9mWkhgqM1ynZW7Q5aK9b3W4mz53oydkTPAbYZoW1gFcPShn7JDDxjbRpUX7k2",
  "key23": "2pT9eh677Hx1uZTVp5LUQyinNkRh2Zb9F7ZwJc7KuYjJVW1vTF6V5QwNVUT5F9LLb3VcXZSe1sjS758kFzPMFr8E",
  "key24": "3xmmtdGyRHsfUHnUZx8BBQswBcdjj6V9DvxC7zFaSNrGmfzc9WxHNxgZPoS97k8HjsFTkBamjU8CtXPbNVgVXNWn",
  "key25": "286nLRbjm5YHPZ9PQbGrw9d4poHWraE57q3fsuPTKboyUxh8zU2dcwH9MERJBeCFJLy1VAXWj2R3xg43G6UKXhAn",
  "key26": "3jnPPaY27SjNRw3NKWjqofkPhv1yzZrYRHA5cP4JXQyYicrNySCszFBBGohRgA7hoab5oNHiXXgD8uX9cXfkLN6B",
  "key27": "uVaU7HpkZdhtkWJHuDaDqaPj3nKYcwvCKXeommEdyZry7u7CgHX5TLiMo88mnT3VU5zP5LxcwJuPvtDZKKakSZt",
  "key28": "25Rs83zGHhTKkaRHrjBPXMAGnvbX45YxLww8sJ6FeAYnxNbNsgYdzn5VCibLGB6UpG3GhifU8W9CXgxNtDosioCj",
  "key29": "5sCD2AettmBoiSsZpjUc1zkWoM9dtDiNm2bohvbVXkdAdeK6GWhnyoSo2WjT6mQ83RUFjHkzfP69DccGd5PPX8Qz",
  "key30": "4gdDTgoyetSwXUa2A8dnKQUv6m9RVjmGCdNSCDsCRMNgG6jaQSBT9pTDYo2jQLzikDfyGzr6Pr2zPV28qXJFJ8dn",
  "key31": "GDKxRmPDNLuzgyyMXb1LHBCDNsLwqBWr8oU2uoecSWsnUahVuKGyTwFGcQcv6BQHtYiDSafDmNXxwTXshT3aXRc",
  "key32": "3paPr3ZzdUU9AuwdA1TzDfiFE4KpxLPtg9KPYvKziKvJ3Rrpo66yPg5fXP2ojyJvkAzHqYip17Kkh3yZakL7JApv",
  "key33": "3fny3RhdrQT4m42csS6bDJmiNEkrxb8RJqYFph1e3vBazgAxrJHDNt8DpKkaKnwRLB5Svxv9rHvpCNE4aZfLH87k",
  "key34": "4wLAroeud5nbggFr38upubAij7dpSE6hUv7TJnsL5GjoZ8Ca2dsTQ5HxzmKfqdLpL5qjUHmPyJo48W3ydCUbWPCp",
  "key35": "5R9vMNgNTux32uyVUZ4fdd6jgd445fW2U9n7yEaLrTUt1hHXyCg5RzzU5A3APmDWeaZTSAnypkxPhVgq6Lm8bYuz",
  "key36": "66EeJ46hbH4WJjYQBZuvkuTB4NF8YbvXsbhAWP15zGVPP91zyZFinEavZmzeBrBNJJbhL1CN9jdgAw24k6NkcHzw",
  "key37": "51UXtqdW4nKm26RgejvLSi8nLrFj5FDiWrHhhSy9yMzeC6tgLQP1C87cJCEEvddVg27V1npdpHWxGnzJeV2iBzSu",
  "key38": "5CS9vJfDa8VoVYpu4STTWfJHHjEsGmMZUMZZVDdd5yq9Uk5gvqUBUXku9mr8Yegb4s3zJMka4obtAQYnAcxiBjWd",
  "key39": "onBRKxG1vejKFtQJvLFYcoEkT3Po3uG49y2ifgqFcTzrJ2fzRsCt9UTA2VbYpGMXJ95UHUeBBZe5FBM7gen1jhr",
  "key40": "5s75FVBnGYnshGcYeUVtUZHPHgLeXMci1UArYhg9hk5E7ZGA8w93R4PbNLrugGHGwiVFhnrwCC3vnxiK3WP3WFMC",
  "key41": "5QaEmZNxBQm5pnuJcPiFX1KxMKg1K5hWWrrck4vzsivybYTm5A4C8Y1QP2ftxbNm1vYozaKQMC9HBKatTtEkPnwT",
  "key42": "4Edj3k6RgtrARdoLBYLRNue1sX1CnAdkM7NkgFSswxDBFfgYFMS2rFQ8uJSNPcCxbjAYCrbXkFoc1MwRmg2Hhk3R",
  "key43": "31jiUh5jMWnHbcXH37EZGLhVAtb4h8yEcjnhF3QUPuDxMe43N2Kekc2VDJyj56MPoKuHuz8ygCuE5HZtjfgRVrMn",
  "key44": "56wLtL9ThiwQ5w6qCZa7mwZy6Yzw9oDjebJ2DhPcC3PNMhqYUSzAuwnjxSMixbkZAnqae5UransGznEN8fu1WajA",
  "key45": "B14pgZH88aFYh14YT2nKwhE35mt6efmzEevxLs4hF3A31aeggtRyByhY8XBLazCKfMXy4ATE1uoQ5aHgUt5yvZ6",
  "key46": "k7UoTmw6Zsj4USFp3e6rncaWGqn6mVTvctZkkgWkCdfW2DYyop9WLMazMQukrPLepKAYkZmGBqQg1qwHAuSRTYV",
  "key47": "4jr3KP4RvJGqUCiY2wXHtGxB7wVHGrZUU6MZDKdzzBxudq3zwu46hwZXC1WU1228MfnFSN3qFUQauTCJYzxsGt2X",
  "key48": "4hcdqUtr53x5NVaJnhiPRg66M6gP9oqpnvsJv3hdcq3r3BVaxwMCUpa7GgFoS2XEWzCk5EZq7e9Cg7v5ktwZp4qW",
  "key49": "3uymaiSQRBQVRZzWk1hYS1Pwbx53pberfQkLm22FGaQrAKdK2kgWtGUXSo8H7Cdar1CFvehnoVd1wbAEPzsR1xgT"
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
