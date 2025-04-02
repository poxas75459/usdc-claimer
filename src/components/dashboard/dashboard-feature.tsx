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
    "4vN1c6sbmyLeLpf9w5oKaPeQ69eR4Sk9hsr4o9KppBXqb1UanCZx3jdDxXZqrmP7XLkNYgShi1ys4MM8zPJ5Weck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWZo1iwNwgppdCSs9pgzcN52zyfSmwqu6DVDF5thnPDP74kr3qf6zWivrfXwgWNMuuZnPYW7wqiSWBBvszfZdY",
  "key1": "5nQUFHXvBUonDXbxrmVnDgpEwiCdzKcUcq8Qdsot9nrsyHyTkZ7WjwsNeLn5WZnkYPCxZVLP5t31JxkabUCvvVXG",
  "key2": "4NaffEh17C6UWqaTTyryVwvew5tGJPaRA4DJLevS4ppouoVTFhaGU8HsnNErtif4ghERdjKqmeN4AVCtJbShUe61",
  "key3": "4SWaGyJdukx3XhZrZ1cZau9gKCtMm9Tgd2a3D4CcFnxDvaveve6UN41cckeFeQat7KgAnXLc9sp9UvDaucDvwiaC",
  "key4": "2jY9opPR5YAxsKQhRcshNFwum3FFvJJSuxwHodHwTwqnb6BtzhffuLTVjHercc2gzQMcexpz2QQoL2KrsFVFbZug",
  "key5": "3seNZUoUZrkBRZP3fJEwMPwfS5AUJJcxXdrgJf66DgFGBNqPTLwNK4x1jhuA1s2YdKMARhcZ7YFRwTFiknhNTg2r",
  "key6": "2453SbDpHLw94ZzW4JqJGZqAqqyPnNpTXK99vbZPnUZp2T6oDgowJeotFakuRyPRnHhBbCPJiKGKLL6ChZN5W4Bu",
  "key7": "3boE4MdRbUETwZqVoTaYiyoFNYQ8dg2vnkWtf9jd42Un22wvo8yNTLA4ZvapJQ9PYFeG6kGzYxFRWSb6akbUS167",
  "key8": "3aX5rEkSXqB7gVFkecvVr1kYCEQjUt5QpuF9pPXEueJzZCCiBx8kEjEN8XM2uRxrf89pRdtdjWR4NoEJ5ig6RMuP",
  "key9": "n2gPHNTWt87DJbeuMCBNcR3bQDB8RzYeTW6eD8pWsA426y3aiuyci2iy2ujKDFF1Q2fj8RPm9NohgHj5T7vyw72",
  "key10": "3wosWu36TmcyZhi72hHS8xAXcBdvuFsHA1LBtdEL3R4q8VDR9WYsqLMUMjqU83wrSeQVSRCe5PEdR9KtaddHGn8U",
  "key11": "3aK2rvuUbg2W8ascm43QcWWnFhE7g46ezTqWBiwPXjcsd6tYgsmwJJgXRoBci9922B95VvGbdkenTaQPpo8qjCP7",
  "key12": "4KJwcFDrRcKiDAestC5F5WyXwUnraWgwxCVSeqDE79itKo1rdG6DqzCYThjJW7ECYuS1zDdr8EBFv1a2yd7pWrqN",
  "key13": "TeGXAXT8twSNbSm2LECEbzAEwbBwrtrw1p13RuE3dAaNABReL5gEYwt8AEs6goCSBaH4Eot4nZcPsXMkHS3r8E5",
  "key14": "ASHZmNiNGMoC632ZLvm69g1i6oDySUxntLF8Q79BAgq8KW2A882g6MM4nLuNZakomPg8xbg464qdeG451TXGvV1",
  "key15": "2dW8rAgziiwCZrKDgmUdtBw1aUhADFpU5MRqeA7zQubMR3XtnW3p3hCsGyHxqEw52rY1QxZypsC1vGdov7QugBtG",
  "key16": "oQVHKS5XsQ9AaGrXPNqwE5XvMiDjxWkq6GPmChUD9bN2AmgTZDaCLFcyHA1AN3cN3nFQzTSkNTh2TzjE7LjT53e",
  "key17": "kVK3aiHRrLur7VAFSNurPnFN2Jg1QAoCNbLruMD8BZcwK2MjvL1yLtZj15E7SNxG7nbGN1zwcFcy3evDD98Y8iP",
  "key18": "2F2rNURoZAxmXTREPXG9W4tJL1X4BXFHrcS5G7MRJd4PXVwVsaQiWadHgQyTCqSYxyPq5ywFXpWUtMUTxKiy615w",
  "key19": "2v36g79r2uevaQb9DRggAoMhVbsGJUyARVB3KzdoDQvfS4zR4WTDP7zgoESr9jJbU3m9MrRbSGnWD6gZDb2Ah2xq",
  "key20": "4vvs4ngvQr2JrzCDeudcUzZvnShXyBa6gdkM2C7SEyPppHvgFEPiHnfXLG6QXRpB2zCNxMapxpU9VDjLfiFJ7YMT",
  "key21": "qvTXq4Vfkbzj4E6ws4hodZN65KoSZdHqfkz1SNsLxXY9qicxSAut3gbu21tsTU7CohUPFLyTfnFeDq8Gyfs3Z6F",
  "key22": "4KXZkVZnEV6opeL38n52KNPnxk8nCfMnr62cYx1fZAMkn3hoyESDsZywcp38HsQwfBNLChkazYAFhbQvpv1mB26w",
  "key23": "2CNQhXp6j31TRz5nETaEF2yEpAHv7k19NR2uSScRaXqnK5w6A27SD6dGLX5wLTUc7mYHT3XtLMVuGWtLk9SrHfzW",
  "key24": "QuErW91aHiYCBkGCMT5nFEujohDhech1N7KktW4CoqchnkitLQMRhwyR4aALPNwQ1xNc6c36KsqazGc1itwvmwk",
  "key25": "3ZorxmNtMHVA5oL1bdw5AgRBWiWEmKCeFyEApWsrdcJu6cVkJ82iK2eFN2LGgWPfot4SBqbv3hKuSzTdY1J7DLQ3",
  "key26": "4mpaKMukJs1usvfpWG9zaC89Ea84R7dkPWwv9fZk7HfioDFZExrTthKzHCibRMoSPyf4bbGzRUScDouHV4RGtEkA",
  "key27": "5P2E4cZ3CF6ZqMUnb8FDJ6m6Gu9TCkY1tECPRNtN6eJaoomW7WdRSNdxMza7Mp9NjqJ2nYroSvyoWzfLyfTeFpZc",
  "key28": "2Bq6DNwMq8EmF9MMiCtnqgzGYuew4YbHs4pSTqTHMXDQkkYsWWhGcNtJ9bDvHGUrEfstX7WH8H3cmNa6VnsHDFA3",
  "key29": "3GaLyXF2igF9vN7ZxVmYQshqNY2n8eRgBbJLXqu8vU4MXX8rs6q4AQs8wyZ1kpisGppidF5qZvnJdRQuwSikSMnv",
  "key30": "4hnBqpG4k85JC1gHqNUu1VUBiEQCUjRvgeX3zzMfpaNMuD2yzn4c8KKB3CCWK8ajb4kAPmr4KEEvUEqA81K815aW",
  "key31": "2V1gJzqGFnzB1p7Z37LzYDTq5h7LS8jutKN8nPxDWJaSwY1erkCtBVKKa5EvWt6peLPRVjHweUQWDyscre8Qp3fr",
  "key32": "3qm8dCSVLzFu6PuG398QvWfDKfVa9tkjj3DoF5gUub2scRKPXJF66EUazT76rQ1g9NHhYzmJronhQawYivhCWPnE",
  "key33": "2funtkyFBDEpkPwgASszQiB2xN7PMVHzBTCDHjTVivyrmL8xnKDmgh3dTXouq7tubNkYPoy7S94y3HCG65WJEeC2",
  "key34": "2DA8Gtf41StrwdicVLakWLoY9EgCaVMtDRkDrtahZJNy1PxQFwKEFBstoiRLhxPaxvmqWjGZyW5KZeXwt9bLFwZc",
  "key35": "4g16g3tXLLEJJrC4WvyCFHUTDcaVr1mWic1qtLQrkwmHRgzjuPDw6CQeRV1WWNf6ZEtV9Yon3BzgfddkypN7zrwk",
  "key36": "bTBBv8cA6ghz7C3fC21SeLjqrskRYNaMgrUtU7JJkZMEpNccr3M3eMrJFZrZ1pPBm8X8LCePCN31cNgY28dTtVt",
  "key37": "4E2NjJuWW7zah947mp6NP5yadVuycTqxH2sMFcfnFnq6xa1rXH9Kumj6m746CTbhB8UtiN1819ZxmXFc411EHJBW",
  "key38": "482aqBemzfLPaHUFsEEawEoioW6fS3gQcwZuw23YUKKDHXotF27xsYNj8LiDtgeV1qTAhd9uyQTXasP6GpRxsa7f",
  "key39": "4VYu8ZYNd3Rfma3p3BhYdJgRsq4gVT9HhFviWyMKzZRnMtdfUgHmrVQ45cyCHj1jKZCkKjNkbw1bqbHU8XCw958f",
  "key40": "iEGTtfoQdswxiFEbrnUqjE5mDHWqpVtALLofsWo5urQdBsQv8kwQw8KnR1YQKV3SygDN4qcYN3VDmXT1vaWmmKZ",
  "key41": "3Jrwt7664k4rXCykVbf3SVR9bid5ts7c5qkYF7YKMP6FhjH6r2X5zbLrihKBxvQq9jhSYRm1kqUFuvyg6mNNY4UD",
  "key42": "44W5W7WupSsFAuMHbf6aAsNBh6tKFShMbsndmsoTctFJRgXSoAFmLdMg4Z7mmjR6royucqfftHcEaoseQWyaNSm4",
  "key43": "2DYmeZZ3BsP5D6qyojZUgw4wH7GHRbGDncnR2RmEoAfL6MjLwjjY6tCfptyZaXomr6jNW94qvDa135TviyYsU4Xv"
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
