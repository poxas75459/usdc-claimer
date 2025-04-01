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
    "3R7y6Pjte5rajUoiJLnbcv3uoWjXapvAkDiqyLTPDF1JN6X4MoqDomtp8i6686RMdxunVeWwNc133Ryqn1ST2Umg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avbybHctdkMAaggSQVVeSpZoiAXH31tJFXTmPqjfeBjCbGsp14FzLYKBrkYRcAYyttJ2NkRqan9dtDD9ct4L69E",
  "key1": "3S9AMkW6rqb5G4cC88HREaDWvPr4wpTfMxhvgrVHA5mkXWQTwj9S9fnGtDRjyyJQhF2i1skjpY5Sk8Fb2k7j84Jw",
  "key2": "VAHFWXzx9xMAUwBs2MAUGoCdVMmq6FoYrpGdMXZ37Qcnwk9dhsKrkY4C7NbueKhG5gzNNJFVwGT1WnNxo27oqQt",
  "key3": "3kd1UhNNpp4zGjYpiyXmUet2ky7Naow6vUGhAnxXbQ4Yifm9LP2EiXanxH12ZF83CR5PVuHuUNgPYC4P5aWC38qg",
  "key4": "94yPCefBsMfFG4GMuUJWo2G4CZW8cXe6EBtzRVbUs193u2VJoAajbaqjRDEdjtKMqm7jupP6eudCQGTx4RztUNE",
  "key5": "Q2JfcB6hEtQfTJx8xgPA6wphAAEiooDRTQf32yS3juimBmXX22rBmeEsEZ8qVdM9BWKPbLiuuLZhybAcwkxvoof",
  "key6": "5DcEFFdQoxyorEkE4b6UjC1ZdPzc5sy84d754ZQE2m15ZxFRKMmLKHbugWKUz26bgpYwQrdk1cYZcwkUEN6iZUnT",
  "key7": "3cDWHpiPXU7SpENmfxGUfnZSJ4UcfZnr5DbnFAm55LSXhWpEm18TQY1mVwhrwmTtoieGgQGHtzofizXbXiYsSeNw",
  "key8": "5N4FDNwexRahxAXnrpyGU9RXRvTtg3uSsgNwKybnWzLMnDd76pGxwCQoxfyKU9e4gKmPh5N1UY8f24XPXJwY67Mp",
  "key9": "5K9gfa68g7Wf5w32y7ivttLjcWmztCU7YeqZhJp3V9pomuEYatgvRwMieaNjHPfVQsrTXrsji6RkXrtFS9fMfkEQ",
  "key10": "2FUuUcGmSt6fSeRJhrebmQBN3hfnzAoc5hhMS6S3XqQ9AkvkcW8umG9XqUgsVtVRT1cQ6GqMNPy7oBWZzQg5K8EW",
  "key11": "NHUjnPA6uNQ8bpJyY8aCyLJbnKgZR93TyupMF9UVDq5XqHnuaHS9AgM64ujBQQAbzoZjHY1LRmKvk85xswKEK4Q",
  "key12": "h27jRthbkKjSEBY1p8ekJiM5M7n8fMBpekHSLzWVV78ByRFRi3HYCMBpU4N6ZNt7d7B9WAgiPzMCrsqkyadTk7u",
  "key13": "3jNcM2VK4chBnEAYkz6jGWBtvPDruRHXBvVJ1AbsjjroZxBmmKbWhzdt1jgLUgWRXFds5Quev6dryKgktqrmL1Ef",
  "key14": "5ioJQN8123GEzFhVQAGAgvYeUxQdQKeybN7WQHowL21V7cMqeYoozcYW5pSV8B7E1sUzrY4T1a9cfUyKKsR5ViKP",
  "key15": "2vnCv8FH8MRiJz9GY6EhJ1ehysJNwKXFHi3g9g1mQ3YYoq2wdkQ4FC6vb6hLv8pcUtRjEwt2edt3JNqwUkNM92TX",
  "key16": "3w9nn3zVwoC9BkUCUp8NvCsuzqC9RxyGwvUmktSH82Dke2QsjkB2cYELPkoXAGdFX7GxPudAhMJ8A3Fi5xxpYLk9",
  "key17": "4edpM1SckX8jTm1ggmh9d1rEeQoWmy5qxfQo2ishg3kFKGEpwrzeK2gViqMUU3dAYf8WLQobwkM6N5vxHqgjahb7",
  "key18": "4JSYhxkjDb1rGBGF6dSzXCr7mYXuH56jsAMiYg4BCQoNsBvJjCYNZCwBAtxDdWrd6opq7EVF2RaMHE7GYikoX34H",
  "key19": "4ewUaknTbgPkc7BSDk7xZerHKGfKPDLFhbynQN5XsNw2B3hPSwEgcwDkC5SmrhFSA4BD2CqSnetMqKEaess8gJAi",
  "key20": "4MiPh9q7g7iuPAtoQsBvSiioBdoyF99X4uLHrsyUG2MyLMiVCHYV4JXepG8ZwZqY4WTPcoYbctZYV9G8wxUnsur4",
  "key21": "51BwsnasciKCyUQP2Jv37UC8qzdoDqkrmDpDit8iTVaGxmnP3aobvAfkQqbk2fWo4jNQoPRRj6J8cZWXy78nVuJA",
  "key22": "3K6VJDu4pL9Dvhh4i46eAihjmZBfUpB9Md6Zkxdn6BzinC17fCvnEXdtrr9bFoEZJTzDdPULZFykQ7e154AH8Vzu",
  "key23": "kfBZexo9HqSPB6g4bdL8kvL4Z9okroxWrjLyZ8z4WYHKxxX8iUXp3KKpTERAcYdKon4YivTjgB1z1EYCy1rcGQS",
  "key24": "v1FCSrXR4U8EZs1pVxNxRw4gmSrBeFv5hcCBEKN2sQ5e7qRFdZHEb2Vu5hZ1GkG1gVDKaVrbcMMayAZcgRwQhzP",
  "key25": "24QknuRayCEU363pkyTsT7kb3sSX8pFziHXfan1E7fA78fUUJbGM9EykAL2MFCsX4qeqGvUZ45jJYSzGPoo87BeT",
  "key26": "7v3iwapgvKpBYDpGknwfkbCpBLYxKSZSVsci7xnqsw4W2DxXidzvhbtciGNF3BbLdkoQ5fmRXUb1JPZk5tS4csx",
  "key27": "5pc46JP1oZNzNvVtumbNDnKSLPn8AACWMt7N3U971HgCjN1kbVNtp2JWKFdvqr4kCCKBJGyhxw8qKbLhZmvga2tx",
  "key28": "3CGZAeDY91fAvzoJiMrp6XmjA9y3CSUhSJf6w6Kp28pfHRvvfrueziqL15HqT5EYvRTEmDLE6Q8Z9Y6kYYBgLLoG",
  "key29": "33ypszaghQ1FT7vQHv7RvZLEuc3McBvmBr4T5xyak4NCmWRz1sEGkDgzDV3xQBTPnqPpvCBUBZ5Z9bEvMPUM3YiD",
  "key30": "5maJYDL9KCAANF5F59EK2A8mWVTuzwGwhNxEceq1YZCkQTGyKo9RdZA2vgjJJRqhzvwZGK5nFbBai44p3VaCvuXT",
  "key31": "HjDTsjFbAshqHZPBMdNzxuoqxrJM43ZNv7gNJRjpCgSfENTs6B6KcvuFdQqokn8jjAioGprSqL29QT52HZAmoXt",
  "key32": "5jfh6y5GuGMAvae719hjkXonEncPN2B5V6wTFZeszBu5d1mbkprasrZL94pXf9RG3fJX7qZVQL3i6kgeGzkA2SvD",
  "key33": "3yDcEhC27tnxbhNZH1Y9VfWbVxsShyTubW6FJNtECkCyDjUjSiJTEDpHAn5yY1naJfqD5BisLN4As9ZR52uwAHZ9",
  "key34": "3v1n9CT6nx1cgcodsJqaVijkSS7y1qYZskeg3sA861jV31V2YHM9PZE1kqkW3b5mkSYU8xK8d8WnNKmexMKQsihy",
  "key35": "5aqY8FFWxgiCtecj9e2kX4QPGe9pPMJ5hjd3B2Tyo1KBVCqygZRkysaALo7SgndjaBpyC9zL6WTh63CrCTmaKmHU",
  "key36": "2xNYLavY5VCJDcWjvigbJzEfNGdXnU6UGzAKVKunXVZL5o45fEgurXkG9dpD2zjVj7JazMrKV8LP2BBCbYqLC2e8",
  "key37": "2nTJ92GAjFcUuszjaBkGcURaWzsKHhvtjWH9EDce1z3mGfhKjd1kRSuh37Chc1ey2cT4udcTAsfv5AKKHBZaHdkN",
  "key38": "4bdZ5YAUvivgRjg1Bwcc5Nd6nwaUySVXRh3eVtqqZ2ApnP719d6AoVnUQzN841BcUVbzsLUM6StnbwNxpxm7ZCXM",
  "key39": "4fmmeuYmNF8HVUkcaHcT9wFaAMhdggpnPAWocG9Y6zdsMJxKoVhw5TqMv3yroJxtUXXL6gUGUGPhfjvdHP1CMo6y",
  "key40": "4WHQHsjD9UqfHJNKW4Gri4emSjMRNypVMdDP4mNUrSsRggEDZ3dya42ycLk1tkUqo3tdGnBzhrDubFYDBe1dNsNd",
  "key41": "39kkPsLWyeY8tGjDsbZh58ZphJoQYe2v9r8yAxfswexkdoS2eEFnAWZwvMGCK67GkNHyY4ghBgDgQYgtVztj7XUb"
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
