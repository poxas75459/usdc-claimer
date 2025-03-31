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
    "4mJynWUmo83pSkMxaWC3DuD1JF11UtV9NFUM7FEj6SjRqhqFKntt56JGGsj5hz8wE7L4cWiSqjYK6AkDmG66o3GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CpYxT6W14xRAKbHYnwL9ZoX64C37ijhgpQXwy9mLZyycW74w2GyUeer22UiMZt5dPRiBsW1bxoUkCqcTGnmzmZ",
  "key1": "37eMU28pdatTBLBQA8TkUPHRDG11ZDNH5SqiZfbERQNEcvwQSUvfGQGQmVQbMzewJbpVjAtMtFK7cyTrDHHUwm2A",
  "key2": "43FLe2VN4RBeZqVzWrTjRcyVomhGDft4Rx3An8KnXw3Axzfw2FyH5ECqu5KHaNdG3gYZLptJKbEdaKRiEZsmhVjh",
  "key3": "pWPhEeZRdnshCcEg1JBFnEx8jJAVVkdNMqyaXMJbf4k1uYjcWAQZ3LkVhSgWxrM2ccqEjne5JyX4WeAMPxaqmVA",
  "key4": "5g5izmurka24Xkyzd4W1wQWB4LUuESNhGeGdef1s61C98aQd5MRZwtC44mmyFmaFebES6YfDNTYbUSVk245j3GFU",
  "key5": "4j6Qp7GjKdX9Lo8hKrwzMdEWDtszGCTDd7vxbP8VkHtcJzJ5DafWrmntSjfF519wCUijSzNedxUkE3NfB25eViL9",
  "key6": "4yLcXCNxtmJWTZTqzA2VXG6BUMjThnhXrFFhtbiBt87q7nzwLegjoL3YW75DZ77AUY77hmruaYGNhsz5Bz1tUufr",
  "key7": "5YD8D4RXgVFWzoZJkQuSCRP2v8sDaewsdxkcMfYgtZRkMcV5LK55iffRp5JazinwbaLqr8eiMWLKgX6TBow9tDqk",
  "key8": "4jbtpKDHi518CgwgSan9vUBuXS3RWDuyQ3G29X1LYVGQkK5GRwLh4hfLg8eo2ZCSeCyvkZDxbFUFt4LfQFuxWkRu",
  "key9": "394zvNPCamMiw6h3SZgAnCPrwYSxwSvvxiW8eY4D3Bvt66bodNjmVMH67zisWtxLZESXfU5jizeaYB1tsBcHdtN7",
  "key10": "4QXXhaNtK2JTqGdGDh2mrsX8wE2V3Ju9MNaEP61fhSYS9qbxVn5REjH5CkRQ3cNiyexEsG5KMgv4bbk5qgmrZ4br",
  "key11": "3gvXZGaVfCn9ok1HxMggzVfARpmZyDWCtLbR23Xukj4mxYA4j6eyF5J5ynFfjFNvZ4w98CCnV7X4uRremYtYLErL",
  "key12": "4ufMdcf9Rxw6CgGiVJ91s2EWRTrCTv8M4cvjPeaLqupRa9EhV1tAfyAX5w4KwsmizcZwQ6WnSxCARX9dE1k3kivg",
  "key13": "3xAg43FLPiM9sGCQTk9onrTZm3Y476y69afnLQqF9a2w2RhFZApebm1SV7Fqh2GwDAcw3xE6DvqJon1W8AEMRNke",
  "key14": "3V8H4evgSVFW1Vk8EbpHnazC5VeZNzFMJwNmYNx885KFsWm4X3HEar5dtXbGYRyE2Tm4ZDYsvmCAcQaqH9G6xZgc",
  "key15": "5hTaXjQ39cim3cFQVKCujx1mQinkiy4VtWQzNcdwHNEUFi44RGKhbMuXKDQ3A4n8NNBwpw3icoS9epYe1RLPnbuZ",
  "key16": "RjWM7xUuTu5Bn9BBkbnbQDTx9u9ts9bua4kwNH8be4Yg1sHYvhMmzPK6sKTfSoKHGjpcewruTy9eU9fA1qoVw4d",
  "key17": "551v9rPZUh3WbiBPPP7K6KTWXjrzzb4WpRQShRjcbrKwLUNoxsrUH5HTfG9XGznh7uZb3Zy9NTfDWEqrAyACiNtu",
  "key18": "4r4D1H1Cj7rxquEvbYktgjGVTDyBD8jnJ15B98kq9fEua5Cj5KSjHXntnq1MTjo3AUQ5ViRsiLjQWAqNYLh6fTHc",
  "key19": "4b1DGGTmNU4yjPtvPoNxAf4JnNqWjPb4R5uTtdRWEj4DtgGkZ7ARfFDpybocHh7awhbVKgAL6tckyHbJLoR8nSUv",
  "key20": "Q1fKSkYrqHXoE9CFsJRvdiEeFF1jFySuJfZE56S6YfNhYo3UMgW3weLVLSjaQLUbRN2YzjoBrpEZCz95sEmvYLP",
  "key21": "2veMZeDZ55F6ge882MDFxFYMijcFzEB1u6PjxzAxJNAmAZ9Z7aSJmzSCMRD9qEs2UBuokViAwZ7fbUNzWESCW6p1",
  "key22": "47zmA7ZRiKFpf1XmwJ81FFDfirdRN3JHubq4JEGqFYwwWjpvrncdDgD8KN725S1pXbMLWe29j75YyqniXVPjQdEM",
  "key23": "p7yWTqMuvUkj6CMzq7XNfmXwEtUH4Ko5fo356UuKXG2ymRVAvhdxH7bVxcVZGDoeRBMrVxhgkQFhh4gLcaDHEhS",
  "key24": "3i3cGp6G8wk2cCSMHsSaU8GYd8UG7udTqJHfUWcHmW7Nbk8GQvM69jGhLYBJeRMFwZSWEjgYBNtNKQfiTRUEHAZa",
  "key25": "27NgXcFBBBFSPe6WtZV3CRwwDqGTH9GjqKJngUCV4MPsGnaHax42dvs9bCFFtvv14yRrQB9T93fnA3hGRq9Sspkn",
  "key26": "27KpkrA6igRcVmvdvAdN7JocreADhKcvygr5LxxPThLx4pZ1CD6syakJZFmJ8wRAgtEfCwzfxKJe6yo3XGJgqMtw",
  "key27": "53t7e72wFbUSCu3gF35yszMWSgGebtcCzqCRjahHmQiST8ueYtZ6YPNqaFRuQvyR3DxyjFsq9fEMsX5eiPckWUcm",
  "key28": "rJpTHrCrsHyKATt8x2qnwyeZRWbMr5vVuhKS1UWhGz46D2tYDtvUyM3XWSKFJfQUH3nXKzvwGzEtyzT87m9rGeE",
  "key29": "3P3gnw6F1P7dDobtpLopcKv4YLRyeUiUU2AAtLnYioht6NbXix7ce5aECSU9oRWDpVy4159zFHV2KFQo9onvsxiE",
  "key30": "63Y8n14UHnPEq7vuezcwx7khJ37rkizJQiVLxUBxgf6Kf2CB8L2w7c5tLLhCPgpSZNXwHukxTSHps3juAT5JMF2U",
  "key31": "48XkbWQvA9h9jbm9Z4nXA7G3LjGpBBGsjicgsbq5KiUpBVzeFMzUDoHvvL4B6Nz1idvuZVicsgkYQmmt35egM8Ef",
  "key32": "2VYxzqxepfkp3V7PPmUNZZBKA4KkEsuHUbg2oH4RJ9DTsUGq1r1SkhSUjozj3GB8aZDV7iuy5bati648L7Lcprxc",
  "key33": "3QERLCjbMTWqijHCm2Cid74qKGe35ck75R4tW3HgNkQkkGwCLgb7WCYrumybbNS9NNVx2SBrFGXsh3PVs8wgfUL5",
  "key34": "2wsxPEGmxP1tNDcgrYe6nZm4RAvy8V1YWtSro5d4hLG74rbfxCCUAAV1A49hZxCRY6fbjPFskVZLmwcfkKuXRRcA",
  "key35": "47zLiLRCoKk19e8REAbpBGWktnRAJjeN4Wzq5fGwtfo3WqEwjMNGYGyP8SYyScAStiy2gn31Hm9VtY8DU2xvQg9A",
  "key36": "42nSF6Vf5o3481WjAZxfivVydQJcWPFvsnqPUvkAWHKsDFg31bsszp51zzCC4N9aaxAKHobozfydcMz9WVQU8fpr",
  "key37": "38VN5vcFWd3woytzzGLDeqyxGqZCsjqzVr33j5bAaC1ySEoSScGAMTyoB6kyTwiJpHfAzgKFRFnQWDkoKjMeWZvy",
  "key38": "uixaBwgvtWNVPJ7FA7sr6mgg4UhWtorrvFXXhHiRVwAENPCLcgdHFPSZJQR3NuUYzDELyyGj4wdRW1MPpU3p8Q6",
  "key39": "45qCG1gZzSA2RedxsgZ9sMymc1QYVWoysPPNDx7nKSqPq1XmVChz6mdbq6W2mvPamH3Y98Z6z7KPGCG8fyF9TpeV",
  "key40": "3kud6D6cGXFBpJtrUroNhQKybXmfqh2FYzG2bQUY5fqZkguUXYYGVoQKesiTZuyq1xKcZ8geAgLWQp9fu43N6dzg",
  "key41": "2Lr1myYQik4d36EH8Nx6ynn1meNCMpjcDVDAJpQC6ENaXUruX1r5PXZB1Syg6pM1KUDWPynVpStNEwKzM29YkbDG",
  "key42": "4B7hqrGZGB5qUP5FFzozCiqTadgsY8inHrdciRvnioib4botUqqZCqTJ9W6XdhLo3VeLJu2yRN5HBCDSrY5cjEqM",
  "key43": "7UkB8KtD2iAFNP74FV4EuZfsFjWZowxgUSUSCbuuJXZZtdmRgtc7Ex6VErpUVp61emUDWfZRAVMkSRqvNMUW67c",
  "key44": "3nUWrKDuP6RWngLMMM9LLcz6SAtBZ1KB2Hnvqn2hmUmJxCYb7Ha441mpfAbDsv89bq7v2xvG8yM4k39qkuFySLtu",
  "key45": "4b8LYEyW2j6yd1ZQYUbNLB5eGCPYT2w6psASYRay5LMKDQetPxzJFUM4wDeJfyCWYBMbCh6MqhNHdQhNqkV1tC5b",
  "key46": "4JH74cwvP38xEXecg4TET3rpsYrzmZFUQ28kEPbT6Yr4NJDP792AH5nvryrgdAWGBWmQAQzLL91stmkrCpGJEURj"
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
