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
    "4YZVMuUanWT5nmm4LKqeiNNEZ4A9MQFUPbU8ELRtLSCVE374MBiVDh3j7CHU8SVJJ8YjwB2TSz5J8Y4TkmjvFgXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHscr4eRTMght6wjqoJpYfG66mBJLedzaKWvFzTm2WE4gzYSdjzeEN9fcirfjhcSasmLvPYR22VCCpW8eGAT8oK",
  "key1": "4F3kQ9faBy3WtFTNqpvNq24e6YAPqybdqXyxiRQPTzKsxya3DeAXywDVVHJtvBWj2cz6Tn1JxADucdWZMzMKadG1",
  "key2": "4W1p4qFWg5WBpW3FAipbN7dYq8zJLQNDQP9gf2s2G1yUtk4uorA9EbLtbEZhoS5gouYyAQ7ncvqahABmLL5DQ99q",
  "key3": "2ZZmFRDVKZjkVf5pv6HCY7FAJh12bF72BBJiLhhuZRRaGqGEYq77zsyP39fnVR63QFsK5pPKXCzZK99Q5eueckT9",
  "key4": "uG1bwEBkU5YQcHUf4P6rAJU3T3qQWP5By6EREVb1KnGTt3iqsMp4Bnn6nu2cDbKcPrnEisq3X4MWDf7SwS3HxgP",
  "key5": "5x5XYavomZVV7LzQtJLvodjEdFKktvC2tQSDL3RsUEKSwP9Vhntk1CJQe5xHmKtsi2M6kcG3ZDsMd7fi4ZAzCsYZ",
  "key6": "5KQGZGCXZ7eVRY3hb4g1BHxw4uWNcod9bfYt6TD8yNzFF14wZKSCVx1a4GFabSCKwsh7Qb2HQun9AQTKhirE54hR",
  "key7": "3kg1nYVb61Tzb2CTtWQJdNsw4ycpHuRcNW6MS8PyWpkNUjd5vqgWvs2Nw96pMNyUET2wfF5WSXSUFxyDZHbyGcwT",
  "key8": "4BQZsM4RrmCBpYCCfowvfoUcEYzwy3xwp4ujhhdZgp7UFfE6S9jjGRGu4ibCAxLNhAKhAr8c8bMEBXAxZPoRGu6u",
  "key9": "Ff7vRMmQhJ8qdgvFh1VkQY3Zs2cLBt2hccjuDRCimzTKC8Rv3ewmB1mfyR2G5Jx5KgCzyAw2DXbHiaRg7bQ9fMa",
  "key10": "LV6nDKFbqPPkShJ4ih3dU7uWFZ2MbF2BCPxgsSjawTffEF93qVedM1gL9JEn2KpjnVDDXRVcdjRAy6P2y8okkkX",
  "key11": "iJ5sWmPu7aGpGUsWGPWJXAbjdQf2HQGFWd7ZLSZiBhLZpn5uU6ZwKdPwBmgKHY3w3uHSUunYhhQ8kb5TcYnDqrn",
  "key12": "2sb1SmNbifU36aULt4Z7oWbu2DWxh6nYPcZcjP5jTnrK9LASrrLBpUZsm3pNPQRrGA8bcMvdFsYjYPcbtacYaGxF",
  "key13": "4T6Rf1Zvu6ivcgbNxqBjUfohttqJ3C15q3o7gyEy62kHEkhCLk6bn9maGcpiLTqVHZh5kmAQhfTJjfgMFo7L6buE",
  "key14": "5XdXuVo3754KvUvUQR15QpvDfhJLBX5QUsCfY8VYTNLr7p279xWSyrMtVDJgnNWrJGwLGz6dGRd8toct6eYfJ1Er",
  "key15": "w2a3cBpjNs3hAWY6sqosYbqoEPWdVhnY6XX4RyucnXCPEfjYAKT9CqJL1uTioeHBr26xzEdA5zs6zqEd1biAahX",
  "key16": "aBZZxUUQ5dPn3kBkvenmnFAdCwk6LsGbyY8yCMiqK7EEwTTp1kiivR81bsrte4GFpdXAfdZ6igpMVtWA9an4kvq",
  "key17": "5Ri8ao8snpjrdf7sMjf3b58rBn8K3EfxE4serak4RP8HbXtXAFrHkXAmR8btH32oFTSLyS2675PNEwAwV2pcVJnr",
  "key18": "2DPwsJh2roKgqA6JGBDa8JYWP14EVneWYehfjAnS9UenwCY98EEsAS6hBPLqt2F9TVDPqMPywfhjoR4yE5g5Fv4s",
  "key19": "VQVNdqVRZ1jccdZxrs2dcsHqpizXu6WEGAywXSnV6BY3Q4njhNqMmKxhBbr7J3mr2CS3Pi4sgKqmZs7tRzomVWt",
  "key20": "4Be2FzPA1s6Ab6AyNvmUmekjTozbxwDTzkZKtwhhBf4NNzPRKAf3cuSqCWXr3qhxnhn87yQHQUREyNB4kSCs6w1C",
  "key21": "5VM8fNjtVUgztvTe6HRjFoefeLUVoeuc22y5K4EQMmyny5Ve9GgaWkfBNwGpptCVPgsCvuhHgFqMV5auW6GaR3eE",
  "key22": "2KsND6mnK2JJR4ZAa7uE7y6ht95M7u2gdiyLzaMEsFdSpai56f5Es4eUAJqaDEyVZ3XgwFkRmyukJCieDqPEJGrc",
  "key23": "5j5H5uWihiniPQ16VNgt1cTrh7K18EGn9XptDn2EbQfgqh23ic8QhtwinWcmZiGmZc4QPjrBNLWtFCFAWCteV762",
  "key24": "qPTe1x6zdor5vat1vomTFsC5p99iPParxGCNBeY2gGJq3GRFd9Y7kvPwzk9F4JmjFXv5tbLMJiUmqd7nnMweSWz",
  "key25": "3YHv7WGk5ufzyL8dNJf82qQYeFLYBcuSQWYTLpN8znK92ZXaVraDRBZbKRidXcNUCNJ9S9Qwa2CKPoPVvsZAz8qE",
  "key26": "5JwQeCsA97G5phxdjszHRGi7y4yKmxaqA9qtuoNH7VX3waCa7QZ5Wxsc2ho2QUuhAwAk5vaFgfDyE2iQbvQK36d1",
  "key27": "5R7Tq2pnLomocAsHxUEn8v799k5V7yjyCUX4QaPLk6JYHXdHfuT2WADDcETEiuUpFZKfWMhBLdkF6Lqou5w68N8d",
  "key28": "2wKakfkJiCV5jWk8nbMiueoxP8YvrHbpq5E8RGc4oZmjRL9ZPW2GJJHccqsPajWRtvmugVrZfJiFJ79DXjVumHiD",
  "key29": "2QpqWLHqEsZwoP78hHcqfw7Dq9yWSTfjA5FeeZtm95NjB562m5Gbx2J3qfCXHCbYcKs8Z3Gh8euyu3ESr425vJ6C",
  "key30": "33mWu3pGLvVnncz2j4swzHdw4wKjXLJaHHp71SKNY4Ru6xRj5iLo3UB7KW7QdMEzHpBtNbx2DkKFHpY8sCusxFK7",
  "key31": "2EVuUibXp9745cdNZAEkDbz6sKzpDpvEiPTNnRtfbExq6svx3sXgAzwMccL3u3aXpc1AkzUqJsNesSKXTQyjThEa",
  "key32": "5ujmUenvfWuWTuhFi6FfuSWgVWJPEEnfduK3PJzDys5WJgWU9yFoUCBPNnnZc66gHC7emgVt5Xj9TZnU9MAeDamU",
  "key33": "Nw1zdfUyb1vWRRyFjnGUP9FQej43ptZ6pdTDPJWrN3jFEPnig8zpJ191x8fg6hymjzJSjjg81SJmP2haPcGQk1K",
  "key34": "35nyMkJ5KMazUEKfYDMRcKmoacRvqriGV4rZX37eraxPg7zJPkr8XWPXsvCz2UyvanmDsivGd1cseYKB4fWB7NxX",
  "key35": "YdmHxfxUB6tiSvjk3voSyYBnxA4mzGA9GodV4mNoFjP4AYFmuxZyPfm9UCR2yk6J1eyGaA8E8ruZSF2oeGuu2oG",
  "key36": "2nxi2Hdn8H5b8zoFhh5dSPVcU7iRYXfB2xVTeb4VYeMYdGVh6up2Dz9HfXACxtMzcU2tME66QhALvrhoNPPGD1wH",
  "key37": "5yKh2MGh3J1Mj6tDPeHhehGxEyE9yC2DNFUBiT2tnD8xEAWcHDiPhxyfN7aNfyXtuEeDVE8pGUiEBDxXF8n5MM4b",
  "key38": "3zzxmMW68HLCyoLa61SeGZkysrn81qDsWHHQPk3m21fq7uKEaMnxXyMtgfCfFb7C4rBwvrBY7Wwg7eJHCF2xiJJ8",
  "key39": "2mwwfC1ME6yqbv2LyqFRdDLCrYyZ4riRj2FCsXBYnCQJfzokxtreZBKUfyXfgjr64w21tuQPhFHVU6KmepQs28wU",
  "key40": "625ynQ8n92tK1aDm9erzbZtEwSxk5pGTQ3aZZUHZF4CdyMhpoFuUXf1Tj1wnoQ54Eit8cC4g7X1bRUhPNR7GKrhy"
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
