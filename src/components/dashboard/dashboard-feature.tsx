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
    "52R2kn8XwFKR9fynbC37fEXUC8DGC2SZLrQLb1RWTAeyC8ZvN4Qut72Uvfk5gK5szojLmL7HPwiMbp6AuxRPPmwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fze2drDqBiQEjvEywzsjPujnw3QALHZCnxYT287Esg9dKpZba1bALaaJS79AYzRGztjxPuwkUhPKEJEh4nDw4cb",
  "key1": "2LDZ13k7Wk6Z5D7C8DP4iPDKaKgQTURmPDtyWQjfVwmRTcCrn2jPUgP1BBgUGNzZKhwF3SqtDaoQXroN3WRcPteN",
  "key2": "48i87dqe5JBTHmPfarPWkMoYiXyowvvHdM28B4bjHmkVYYkut5fYZvNy4jxYxRXoebshFFWSMb6wrm47UTYvre9D",
  "key3": "4VJvt3s3H3dFwKPEH6djn2YnRXq4mLpTTZrQxuCmkSMNkWeUNQqutBf1XhtBFgU8QrMhWZwCksmNJiR5NXytntEn",
  "key4": "4dChkSbdTyErgeLvCRfHi4qMFQ9tsJujdxb5811jMhs4ULz6UDmD52QZwWAVBrWytG4nzzQzhYK4YiSTrgL7oBop",
  "key5": "wB7rN3KpvTdwTu3fatffK1tZbFxi8ynAWuPCwmkn6L5EbXs9QYNWirkC8wVF1uBySt4FU6wWWnun7kDbpin2tkn",
  "key6": "5x84Pudm3pkpYDqpk87nq2JeLX1rq6QogXZ8a1SHtcY382eYHqGiNgqe7yKcqEj2UKg837njd42LVRRPP2xXYmTK",
  "key7": "3k9udWSS68FCZ216r3YBwgSBYqYfAdDAs6wv5ECg4611gwtfkLa3ke5dfFXC9WHN5W6fmJAZ9PYAMyRNfo5kJQR6",
  "key8": "2Cmi9EFaTTsbjg3qYb3J51Cdjhq7N6GvE9CSRfL2jf5RQCXvXccfyhGts92aEmuvYHQWv7ySmfwSpc2KDJmEQVss",
  "key9": "4rMrKBo53JYjBZGGroHqeTMGoQsnwwTp46W52CJyNvdGaRUi3XCtbHe77Pw5217cSLjLjVtRs1GjqWwmdiwWnjvW",
  "key10": "3SPjP3a3fhUtUCgci8vwkRZggWG4dgubQtqUQyiYTg2baLjFJrNZha7TgrwpMeanhpTK38CWdzCDQZt7Xjx9pZ1i",
  "key11": "4gGU9jh3AsVsyZYhTK2R7ZCfkSBUSDS19HZQ7ui5mkmxmx7WsxbNnULSD6HhzrK8B5fzfDStiBL3gKhgobcZ9nSk",
  "key12": "65Rizur6kUAHAJspYsYqewAWfXtpsWi68q8zwkSCPwvZJfEdqUSxE1ShesGe8RFKxFieKUdvRzdT7Q7ofJXU7346",
  "key13": "3dZaBco6Y3uoPTKrjePNEb5Hs3mthkQpsvmV6zt7B9nbnAUzwpxfipEhociTUPSgreCFVFzHKNEpT449hwNaBsCv",
  "key14": "2QXRhpVSNMqramQjZ7j8nQhEduvnXmvrwiFawXrXsXQR8LdzXYc1ckGWjGKbqA9Ec9SbKXaEwLYDaCSef3MHgzhz",
  "key15": "48ibz2hr3Qy1eE7sgsx8yasLY4PR6RJkVEo6BdHasPL2HE6rHAG5XHsR42F1NqbLBqVP4ZXnJbz1TLhFZJr67kM7",
  "key16": "2znY9xWFpMXBxiTDqKX9EM5csQimhGy6JS4DGEHKBsPh3c2xaKSdNXykjRBsLDVL279RSxnniGwdWRYjXGhPovVs",
  "key17": "29MVMSFWxLP7RErFhsX8JSgpWikGhKMzemEJosJAGKL13BNimPSjrs9KazNMxTeJLskyZqhhcSj3PrmVgQZUs7eu",
  "key18": "2yeRpCZiNnERVLBTR3SwNeaz9f3BgyAP33FfpVi8VjJbxW4nHNFWywm6A8kktzXrJqgjJnf74g2Rtz7PJGQ8Hf5s",
  "key19": "2uSTPipwFDLYH4HrQ2gsST2AxBxBckgCLnswmsJWn9bb5WouJv7eA6hDDAvP7Ryyq86KXR3wy6TdBHvh4K7ACQ3w",
  "key20": "Z6UzVGMkfkDRBj7YVsQinaW17wFm8tmvu5vjFHbAvABSVDpHFk5c7y4uiv4eA9JTpBC2n9AEmvaz4ChPa9Uz6kn",
  "key21": "3bfvgmkg3Tmu4z8QSqLDUkYaNbuSsP941TNeLrPg7kNAUbBvsfrqw9vS4YRnoSnSPVCxDwd5JkpKRNmh1qsFTPmV",
  "key22": "3gjAQvuei26xmQP1GxiLF62CWLPj8WNwP2xqUR3YAJ4BfbeseP9a5w5FVMDhmYymttbM4LZQAs2Q71rKuAzGpBoL",
  "key23": "25uLk2MJrRAS4qoUSTkpfB4Vt3DKnM5TUaxJYQiLFcJE2o2TepgDzQ2sSkAJvQ6KSxXxvwVTHf7qbmWihVtdpAtx",
  "key24": "HpQsREbvPz7s1vCg7TdL4nfPnX2Y97QY3BwewpMvYNsxEdQuZcGZpK8yMVan3LUL3ZKMNLVnR4QFSv8pu4nXXsr",
  "key25": "2tzvFEz1zFm91pnzVfbNV7v176eyhS1NTGCo3gyVxroZmckvmC8r1MRA7X7vNjaSrJpCDDqEfwGUariN8RLTnLMx",
  "key26": "37u2Dez1xiRqwSdW8R7AYrCyptVbHReVkQX4iqoqN5MJsAtXS6ApW5NZmiSnL56jMbuBJqKiw576zy7Dri7sgJPo",
  "key27": "2xxtTa8A18jdDbNfGApkkFBoibRZQsNWVxFNyzeWdZzRRSEkrECiPdT1bHdYH4tJS6aESjcik1orybEFt7phc1d1",
  "key28": "5hxHVihoygX6nsFpEeJ2HEiwgvJNhyg9kxAuuRHLGczSzxKuMGfU2zQo7N9XMbi9pnaZKEtiSaqmpLGEFThk4quT",
  "key29": "5aHqHYf8z8tKeMMaUekxhtzUjjDkZRmJH2zJb5PJp93xNbQdqNgbnR3JNqMcygTfkdot43rphrHEHSdeyPSBwXEy",
  "key30": "4AHGgHyysXbsBTxnBmmqzmvFD5wZ4mGmdWf8Yk79j7s6MT3Sqb2Qzvf9cub8eikDoyvoGpVRGpoeGCp8jasgPQbx",
  "key31": "2aSRDxMc6vtPeRr9B4MUCozPuPJvm2Yuki8ZxaGBYDMigHVNeAQ3CkCrogjxDfDcQSTwr1f6RasPSYHEtPtjwBdb",
  "key32": "rAMpWKRs3EwLEKLvvqJA52G3h7d4vhnGafAGqvHtpAKLfEfvd91RBJ9avCWdDdMP2BQ8qCq9rgMyizfLHUxRvSt",
  "key33": "4XcerfdgMbeMdKjGswxF4J5ezp4bybdoGRN5cpP89DuSKRzVhPfzRqTDCBXpktF38gCoDhrvfAHpWc7ZZyLshxKx",
  "key34": "3jVncoT8yZtSx2kWqqiK5yvPYoQ5ioY5ikdnXhoRtevzbwRcK6gtEQs5DGq4JiTraNqyrpvgQBEkAAXumAnUDfPx",
  "key35": "25pWPG1Zzo69gkinBVnpge8rhHKy4o42p98DvG6RK3HmrsD3K3HaixBH6XmV6JYtro3FDuZFcB9LUE6ATqpFbMXn",
  "key36": "5cdYp57mNTykwCQd71AXWzZgaTA5XbMQEd2ug5RtEDnV3TNnrTAoNWYiamxqP4w7ZK6wfAc7RYbz4YFEhdKLpc6W",
  "key37": "3q85XbG5L4REbGx76ZH29yPWRAR8xsTk1tZ5E48D6mM3yFPohnkiGvvNqznvDkGbV43uSgXVX15yg1KMLMDUHuVs",
  "key38": "4HKKNJRZoRNiw6oWKXSdJqSx19r3CHEcVK6eKkpKJcajSCKx74qgo8xf9tcgiBRwkakTDAZXxhaZXPahFURnTQNM",
  "key39": "upEkCuzdfprjcKCrGzi9yceiNGg2UHFTvRC4qkULga6peCEcZVtYKcus38ZvbsHfASRzsmcGm5NAR24EMsgNs4d",
  "key40": "jLVUVRsoowAEXLxbuq16nQGqk4TB1BnqH7zgKcK3e5yPHMRZJjtGNz2qK7n8d97Lw39BFGhvxzn41Ak69ETyz9Z",
  "key41": "3kTHzdvJi1qcsHbHPbaJzLqJoT8srgk7ocHX3beykPVnAhuWmsCvPVATei3CK43pnUZk51YLsBjC4JRmiKRPs7S4",
  "key42": "21MXbGJHNAD1g73Jm2KLYREydAwCTFTwDAxBtVWco6mLzsJbjtvqGC6NMWFEuHbHDq27SKRTT28JSPYzEKiT9nuk"
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
