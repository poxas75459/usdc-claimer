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
    "zmZD6qFFtkigac5KWq7psmGPxkVgwVz16S6B7TyHqpqfT1gf9pVtjbZJg3VeD69PVBsr7zKSMfzP5ULmXbecU2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orjtWoUXwb3LKsC96my5Du1rLUwRoVbyE8e1R1xxuPGWceFoiN6ApCwHd5X5wyyNCUuVPfHWCFAwVaRMYZc2P8m",
  "key1": "4RismzwM9yNqRq1fUkjXkkFUUhvtXpCg67h1VKHZvhg5peQcf1zHHfoE8bDTeNSMoeSKsZqYr44WZxG4g5qLXiv2",
  "key2": "5VScb47nD1LBAsW6RGDmqH3oUkXr53qzBnXb8hSQf7XNxKpYHCjEfUMJVgEiGr6v6X77XoyfrtYb4Tp4Q6rTLznb",
  "key3": "UHyr6h4K7JyrL3KaZA3fk5g9De9bGGy5y91qBgRqh9GdFjRozq8UySe4gGLt43Zq2Rb3nqCj7oBEYCPypNjBLd8",
  "key4": "4NcXP8eKLPLJTQeN51wkcWWtBZEz6y824VvhEBZqfBNtJh1U1txKKMaEj1uVwkegQAy2SJZLToWiQsJNoayUKnUW",
  "key5": "33QPzdLD8DnpdYW5JH678o5Zcb9rtJYWXF6KXvJuoXkAKDgSCHGWL6FhfynaAFhuJmTQFtPJMjm5GmAJdCG6nv5Y",
  "key6": "5Fs4YMAaFfYLqKyLTfbrcKLfYrXAWt7kyN3cpPijFseur3tkk5pz1JZVhsvwCyKb6BYdasMRvDe7Y4AG5rx6P34i",
  "key7": "3SydsGa3C17WHrRftmgq3VUU91h8uuXJTwCXnSwFZKXU2xZHJ9P3w79dch7R7S24w71KnrvueFtukMW3VSmnaggz",
  "key8": "3PSN4JSqEQxDvkEHVZs2wvUeRPimwahbAYLh8GCLzMMMkx5hnASBuucyEB1eUcCPx5USSdCC6sut8uuXk4UoMm6c",
  "key9": "5S3Z3TMWZtkKKCk8ASKMvByihjM8iAM1RP5gznzpfgPrY8qP5ffGtnprWpznpAc8go3DuticJ6QSrB75VxNmFp6f",
  "key10": "4E8yZLb3NpWwbhdwu7pmxsuLgFJ6EMik4Zb9samxAaKXLhh9qWm2ABmR4Nbo21wDYLJbtkFDG6auNUUJrMYDDu8E",
  "key11": "5qLdoaQdJLk1XkFgkakAcShMVbBh2bNrhd3r3VigwuN1pYBmS4pQCtTtHNX3FcgHwqc7kxH4TF8y2sq6FdWh1ciL",
  "key12": "5Aoq1o7bYfUzMBzjRZZfErt66R7yXvFVJEA5EbvGJSGJpkv3HFhnJGjTXi1JT8TKMDFs2wBtYstZMCE7FfyG8Q3S",
  "key13": "qA2e2bRcrueodQH9PVgxZxuYmCtqcQX9K6kZ3DU56LB1L44qvs1YvMwvwGtzjCM2h74wqu7kpvVCBkLm5chdY3K",
  "key14": "2PdndCJbAwciSQ2m61rj3EPtTuesesCaCqTFAVtH3BgpcZXmb86CGXc5XkExzAmwkvQhe6ZE8tQ2LMyKZGd2bBTV",
  "key15": "qV2akpFvqwDPLLixKAWkjR3NpgJMrDxQuReZNJzxfEiGrksQCckfrndQECLgSyGMCW8h1ZkERVrPr45Vf7VCYRq",
  "key16": "2gcv3E6gHp5C7jfqLBKB3XW2Lt3HkBuVPVQrJoGwa8w441g7nBzM4gnmrEXhZttQBdLxNAFrktTNN5zDy1iudhs9",
  "key17": "Mqx8a7EnmMG2JyUvMnF1vxnTxy9x9BZZ5M92LE3yGYfHQdiqXNS6ikujUKiSHU4wiXnnEjbU4MVnrj6pBit3bCa",
  "key18": "2HLvLsHrUSwDQu3Y5BbEaHgNg69f29XAvbVTfhktpSjQf5rD6rWe6EifeUhmkz1wwnLVf25HYxMWQXSd8ryiGj3y",
  "key19": "4pqWBT7orRAAj5PnzHy4YCa6GHqoBukBs3qKHEtrygYXZ4NocLRnAkH5cLpNbtvXyuHWPAruoxb1fBQ1fwp7s7vu",
  "key20": "3qdyYdJ1utMcb65KwYXHrKqz45KoM5DSd9WoC9xfzf1FxftCMTBhVjWt8RYKkLbhPKRZfvVoqXdyJTXHCbWRZp3P",
  "key21": "2NFGDUJZM18u43vYHdfm5e1cQCn9sUVb1rzAMBykUPXFoFx1hfUxbLnmRUbGX3egb33qojzaprFyGKoGXRsVeorf",
  "key22": "QGNo1cDnQpzhhd6s5fsxNimFJx1UmXMevLwBYtHfW1DPrKN2xNE1dJNGdZXjsUMcS1f7rw5cUH7gibLNFpofkg5",
  "key23": "RAE1gPqtYQAwXS32KeGCs6XqXPeWQZa6XZjd58vveHwaFUcuBtSCUL98jYb9z1RKhuuDJLHjwFRammoFuhkn8r4",
  "key24": "R3iQLHW67sPZvmYosEaAn1ZHtADTt49fhLD36TjyPU6MxqywMAtJqYBuKTVww9nhvgnHcESmiZUQrKfpBAAFYBy",
  "key25": "3xVEh7oXWh4LKpn9By8FG35qQMeCTKxTiwWGJAqbbRyn9dsxDkPUtHxgNJUV6uoR8MyJWXduhHmGmRQWkgD9gCLM",
  "key26": "3ynbDV6kDyoXZCrjhbPzJTBN6ytHQSiLD1MbtD8NQ5pz3ozZcDa3XWRSZ7GXfczopZvdGZySytfYPL1yjEifVwXF",
  "key27": "28TjXVgmwQ9pjCBC1uRzjupgMTHJm7UoozHUakxpjBDXYKfwGmbbEDLwpV5Haaj7Xuzdoo3wPvkUxhHegmquQHqP",
  "key28": "38HcbB5DsorcRQ8NVu74KbozyWro4Qux8oPnj3sz5EKgW6FY4EaH957LvhwethFUUUoEPiApruMSFWS717RoJvbz",
  "key29": "5xFCQkuHFeW2y6zGJ9spW8LkufJv9AsNnUqyYt6owUffKPFNMSe6XbmABkcA2BFgfy5ytDqat6oi2XHfLgD3Y8gL",
  "key30": "2hoUroet1wcurPXGTyhq85VrJUENUfXRCJR6WJW7Jy5n62goK6bRk5xAZ7T9BZZ7JgggvMj6Wfb2oapXd6ftvXqT",
  "key31": "3iNbzGv3Bc6u1iwDmziKUbwQk8WHARPokRu5JzewvXLrNeCrG1BNnHAFnc5Ms9cZ8moGjqP2EfZEsqPEg4dW6sS4",
  "key32": "HFZZveum8kwKJ5raG9meFvoG4ibpMuPuWw4ee9HbdmimnoZQQD2QneWtvfjpvqKbQySDXHDWrKkc5c56XFmT5oF",
  "key33": "amFJNm5onTTQib5LxA98ivCZnNGSaaWffGZ3Fx12gpspfdw39AbW2b4iimHjXtFJw7VrJSM3MBJNGnL3hWEA9J4",
  "key34": "5LqCPQN35HErtnzcANEUBKN6F6CHzB34MvRA9vVucE7TiiiFAkYCJmV99ukqxytJE2LPXw7afMixxeoGaJL5k3Ws",
  "key35": "3uZJEbcyTiMfFFs4qFBGeehTCrsuizbRiFMLKZu1YZVoiS9aB7UWDY6ZiWTh4W1DmtxBnnxgmkrwA9G8wda7Spjy",
  "key36": "4MKbyJULYyebGKkKrZsnpDpEQGqCKH3MvSeCigT3GKQ17XK13Kow8adcac2u1b9fCxnUAFUiZF7UP4vtcaZdShVu",
  "key37": "3diWvm5DtD5DiLpKPCPkHFAER4hZXS47v1SKvSCmiWkDC3cW3EhQBkr9QfZgnGyro6AMEy6tcKRLrQbAjyVdj5rf",
  "key38": "3ZE5vm9EABrYz5nxkFcVe7Lt7VNd99h2y8cF5gWhHKQeXL2pducoZ6bNxjFSTVvv8FB4qtPJDjBRPVCEVTcG5z1e",
  "key39": "2Hhg7tPaphQTB3cP5B9kPWa9wPpJRhf9qVdSMtDWtGCDtiwcUZVL3QSjXSN8xNmjCUk51VzaXVSKwW8PN88fyUzi",
  "key40": "p4ffTeB1SjYGomGzwzA9rPGUiKNd25vcS8B6NAKrK7h12XfHQ1mbxe7q8vgHM9fSA7D9y8MdZWeUf3efVFXSf2e",
  "key41": "Bj4yKtitfVAxsm3mfJzE1gqWkyhYkmo2tnWtZRtiKTtsBwFBxbWPFjjxh53upNPjbuRLZGozvB6jXyGU4mQJTmN",
  "key42": "qgqPMsM444ehQtKjX7UQf1ync1ktZksYhr6sJh9iL6w8nBMeBa3RpDrNR4zrHcrAQC8ihTjfRkGic7E7U5pvEdw",
  "key43": "UzHSVA2qsXevHfm8CgesA4KTse4rJMyXYUTiBgkK7Jyy2UnVHc7ZncbCCF9GhS3iS9roZdAA9f7s8PpugUDRyef",
  "key44": "bqRmXBoxeUxW9BxeoFqAnrtnHRb1TkZrPUDEUhVsXztyqgxWCVe9WpTKnDFsBZ5ftsAgD1ZcKTBfkfhUts9PGMa",
  "key45": "4L524CuGVjZStQFDMgTvwqtwPYA9tJo8zw553bJnfEgC4DJym5FTc1vXVJhajvMbgrRwyRsnGKy6Zzmzmy6vemKn",
  "key46": "CKT9aFSLZkVGiBuHqfq32ciuvTJ5o7dEt8BP8YCPp4iorFAM8Cv8QrLUigFADb74kGN8sup1mRxTSu6ZMcCGPPR"
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
