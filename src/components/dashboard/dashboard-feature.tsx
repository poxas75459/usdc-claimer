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
    "3D5uWfijkH6JA7whkiVPuDR3Tivb52dEGFuFe4zLvbxtkYK8K9b8bJHc3CnR1k2A87ZvhrrQpFLaU7LcZ2nPzr3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r6HEXuW4eKtuEgM9mDjcLAUuFptEMjTs3vZn39Lj7J6N8ExMosTkvtpRVZUAoN1sib4FcHU39seU4Wd573wBDW7",
  "key1": "2HKDX4rxU2zH6hH2XBMU4eMUWQ9h2vZKhkBtP8To3ihnEq6LdKQys51KNEuVz15r37vumxQMVqi7pXVQz1X25tQs",
  "key2": "2eULYf77qxqNVQhusWBx4eKYXEbJhDDGAW3qHsQqzHVeQn2qc85eBCUf8zNU7A4KLCKKVfufSxxbAeifYa6JQppL",
  "key3": "5YE4SyHuFDLmkXxGan5KsK88WyYrAMCuRvgqZCQocoYRc14HWouuEjBFuZGzgkr7jTKnKrqbmRmHs4W1YChYUJGk",
  "key4": "5XCv5ZfX1YLKfXDYmP6yX7bJHj4sQhCyE6XVD8JnZf23hSeNdbtJMJZ3YDKvCFMSmtkvDBjeTNoZiqXD18qFL6u9",
  "key5": "4thjYWmEYXD112AeJntiWFBFfH6DbkmLKJbVCjYB8YuXGEAxoRmYgAWdvPr7iqreTuaMZB9wRdFLoMWMPR6ZAVcK",
  "key6": "2ApSABdQ49YuRAt74UjjsAK6uufUqsjk1m9fvqdW2rLpy3dAcWw2W5egVJNcppBpYgeLmKSo8hvZzdWmiK93x96M",
  "key7": "65QdvbfFWP87UtR9GVkgc3CR2129ncUnmUicDDTGq5cRhy2tCnAxhR1EW8rP3aYHrcQPLwyTVQax63hZXxZyw13v",
  "key8": "4sTbPdiz7MbPfUpnTZTK44pMoKs26Lry6vGoADwQ3yPjtF1fzNZikafT5i7fwejibN36cSknrHZx1GpLzUFE9SfF",
  "key9": "RF8xJhr7S5WbWZ3SQhKwcE3szrkTTfPub2cGfrUvryQVwUNs3gpYNcPpChyenmBnKi2GrKjCKbVy9G1vfTxpxNL",
  "key10": "3JAnVBMNwTvVCMMjexPdezFq9JR6o7dTA6PUwDPCAa9YLp4gyB3abjSNZJRMinMDHzcdYRhGywPj4dYbwa5NjTjc",
  "key11": "3Xpqyd68ePbqgrsGkiJsfYc2eNZN8giu4iFBz5LT9nEeU8o3xPM5VioVq9gCtsudSV3D2qtzvBdunCFxV3EmBUJt",
  "key12": "2jaSTGupSEA9Qao2uPz62TKXTn9WPxXBbhGRok7woFngnR3DvJobaxv5A1cGGALb4JvoExkimXW54QUXF4fEDN2y",
  "key13": "2zwCrJoVFBKr2Xew5LwjMs7BatLCeJ9kAgVY1qrFXkJ59bpYqkJrpKTcN71f98PEnPQXjmU6JQyWnYe54k3hx5Ug",
  "key14": "2391qdP1uiAEZ7nKqSH9EEreycaAAfbDasZWnyFvnVLA7wGvFGYz4EmvsxMbsfa49QkGzL5vS5KUU1aqN4xDXbxa",
  "key15": "4ipqDFVes9cCtBfy5Vx5kLJTpuPBXV5DKQdkYLNW5Jmi9cgi2hpxw2CoeJiKfCA12w3pPSNpmtrDukkTMwHpNeXU",
  "key16": "3TGB6VgFxrP8Ebd5163P7FKU9NBJPwsuJbXjiuj38kscjbTkKa8BMqEaJarWy3DqD9MhKRtHQqb42BBWsqechAQe",
  "key17": "2H1i4tftgSY8X5VAFjJJhC5jwVXEWFdUsvA7MqNMEeWJZ4KWgZmKbmnzWFaPMrZM2wnsc9KQE8jv9PsGSHPC3Dzb",
  "key18": "5hQdfoJGSWuzoWdUj11PD7V9s4EsHYfGhaFQWxCeZ9PDkQx5uBedDUyLqsWtoniGuP32zgnyYU9WGcSKPZN6XqFE",
  "key19": "3iDqvTqDKGE2AUjqnCP5iwixogqDStATLiYnAXK9jRtzrxb6WnfVB2A3KV4hCDTLEmWtrkJWjb2KxE68ouPoomWX",
  "key20": "3fuhYSfwj13uPsVtYdiFS9j2iaYg4DQXYg8J6hydkwi2WiWXVTGf2iDoHq6urUjy45q8YoUaQQo24gA8AqV3bknZ",
  "key21": "phR2aMs2CAk2UfBzDYkJ7q1MEcBSzVNNFdfCtamieJy5bBBqM2K62T73N7eLFvwCkXaj83sHLVrrJgFTu2mQ9cE",
  "key22": "3GtEQVTyecv89h4oMXdDnoTiW1XrBdBtQD7urbm9gvwFwy9J92MewRZJMX8KxkzcgdpsdWYN6FVMmVQ25t798LsV",
  "key23": "tCJpuiq9ZoPb1BZBYnm3rnofG5wSy4Lcrpk3N4hKD4qHvgSCemARQhT2DLAAwU18LNvwJUpBDpr3jJdveMiAZiW",
  "key24": "4movJybJ952QpiTDKLQK7BTRjEo5RLTVofQVzcM9QdtmR5n7W99EzCYPvSvFEVwpoWBrzPLkhmiUKNJuFtxeVtRf",
  "key25": "57CKhx7QwphWLu1bsR9McFSG5kk1jSuCLvHtod23YRdyVD2GVMjbRV7dPRivhKS8Ld3BDwBrJU2jzreAPPXKQmTY",
  "key26": "2t3ZnFYUiCVxNY9wWZ14abNjUN584kkuUsNJPPn1TvHPMhLqcK1VHphJCctNMT1i8F86fqMjhTyJ7v6yEkU8JoaV",
  "key27": "2CWnEG786ek91H1QpfWsbtT6mndz1ov8v9oaJZxs5SXYYycxf2qZoQmJtfC2AkijkVP5Uv1VV9fr7rdhEkUH2nus",
  "key28": "YGwsqVb3gB7gSRK5Jtos7dvw7BTBhhZfcL6RQaHozk7uHpKrFXSwKCTpYb8ip13bXGVsa3NZ4bVQvbvHeU6AJeQ",
  "key29": "7UtDeKFFc1sBBjk8GpbbxP79Af1jAVTBqtDF92oPWziA5iDYZLDQvjiXnf6t5XqGVa31x5snGFvvjoH6EEqX555",
  "key30": "55Ywp5z9ojYFY3XkXwfs635CSAGcFeVGNsWpfVgGLHz5YWugtEa6NtdVCWi4NvouK5UCSH6ZzTmYgqKz9X7ZapAr",
  "key31": "789jyt2Xsx4hVMmxB8Yf7RxaD2qq5wS2V1xNpyGJa97SkJS9u3YQhXYTRkfQSxXyxKCZUvMYCgoWr4BHaqARbtH",
  "key32": "2EddthUp9w5UXwtLjXvW32C5sPfi5HFpHZL6AKcDcHie1twQzNa3gcB2bcMcqTiuV9hv5D9xHd88Giyngww838Dm",
  "key33": "3PemHBBxCAULp69NXL7BALpqfmhLrWJV9wzpnyoZHVTLD11FFZyjUEMM6AKCGhMHZUQeG5hqykFAz4zbUsKvpeap",
  "key34": "4DYobjExjK8uJiWPXwZgLQVrVDUS4QNYVqXr1vWx82H8CZJfCgCgAhLHpJB8YJQqzaUTFdMESE9ET8sSLzezUiDE",
  "key35": "5Ngt8M672zhyaNTa3EB6UcHH4HRDy4q5rddmSLhvaCTCmvBH67KfB57AxrBhJdhE8Eaz7PAJCqAZw36RoANtbrWb",
  "key36": "3V9Hnjhs8Vt1yPe1tdZ4yfTBEKENF9kfL7HigtHfnNFSzUzniGUcLoqGoEVjGmMLCCMjgak5hYjqYu8XeNwWQFoN"
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
