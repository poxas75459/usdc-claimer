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
    "3s9QMrzK6Anf3c18hnKdjmSTa82qSY3KiW7iCi5rSjrwRC8biS8LidhMB9ZbWCWngxgYSKFbF9RzRJ3eAfsTVK3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rk4T31ZTSoZYK2cDKHUCrwKyXsaPKuhSv9TwSGtYE6kCFzpLfpTNR1uSbaHUhwgvLxHdMtf6hzEBJzi6iHcwSFo",
  "key1": "51Rxhk991ne5bvWbuwKnfN4Dux6teQYgNsfCVNccxLSGjWn4xe96inqKRevTciaNLhxPSfLhe53MCxw5takLbLDS",
  "key2": "wrecgznKNkgLfn8Ry6FsAKKgcVdxhymMUcor2BuWDcXUXMkwbCyb7aGLZ77P382bkPCUmFytV1HnYEFsdPHziDR",
  "key3": "yuSyML2DZD1wsaUgS87kAxbTi42RrCvpPda2UsnfgirV8s1oVZr5Uf4D2ohUCZCcGqGrw81xBckeqcFRb6Nv8Kw",
  "key4": "4wnd5iuXs8PbF6biqcqhhfxN1UHcwyPbh9HSBp24wqxgf4nd3d3W3yoTKTiyDDcBSVcwXx8aUx7KrgirFfcwnkHh",
  "key5": "2R4TJMC1GUVZzMjtBJG5zR5cEHzvq4qcaMLHZLAWC4dCQhBTZHh4vRg61Wm12hMnZ5xhAWn1ssfJ6xZi3pWqmhzE",
  "key6": "5gMwwbMBm9c9zebfxrXhY1rt4dXnWRrtvFkuMDmwgRCA34TQSfrGxK1FiGdrSZVgdBnAAQdLFWvuvUFpAVJbN7yK",
  "key7": "2QV1kBNEW62RXCnb8rxS2YZv2CVRdYDJMH2paeJHjW8XodnazRB2sMkjw9Ug6enCQaE9JA1hVzvkC224WWkZmEky",
  "key8": "2LsJ6MSAqauReZU5wizxDb7U6bguQuDmchSd5Wgavj77VFHYA6ArWcHrEhuiQetSNiR646r8sjyMUGfrzHFztbHx",
  "key9": "3T4hovgLBdo672g1tW19q8phV7LzMN6wKzfBDXEwjEveWXUCfWjVVwc5fSKGUHU4nYYaX8BBTsWfK73bYUBRkqhM",
  "key10": "2KhHjCpa5T448awPm7mvPAW5pg6fjY2jfs4FKzssBYRpWDV9ouX5ZeWL3utdzRN9r2L47edNAdaUeFRmRJ5QnYgH",
  "key11": "3x2igBybzNdbkRm8TBYq98fmNK3UANUXKvBBpubcbKLjabU3CWnbN4zQpsYfwz8ERusJ1uV77kVx8SJ56q1zkmUG",
  "key12": "4mE8EvRJTVFinYa2RskvNd6sX5RHVMjABNaNwcXV1CRtwhThAutYGXTK61tAHJ2nJ61kCKS3VFTvbXjeQwsHbamo",
  "key13": "5Y8xpm27byWtdo7qgjvdD67YHrqKsqwWBAR8N4LSDeB8DB5tw3SGCvqerUqRAASWoFzGPeF4VKzHV2QQB3qFQVAZ",
  "key14": "2uHqToyLMHxxLfJEmD1yBvLbDzdsbe6BkjGixQoRDAmkDx4pWEhebNUdk8qWPBbiA7AwqwedNTNUJUCeqj9oYCxz",
  "key15": "3zrxf5j6VRpY1xPV5CvSvgwteW8ipaPTgyBntuAvUaVt4TzD5zaV63xHG9tQsbJySSdUVtcSJg8r5dCwsUJN4woc",
  "key16": "4R8CQfdUcbp3fnXnnDjMkChqAawRt6x3B8rEWEQWFbKh32Qr4qLtPNgGtDRAeoh9Ni9rfn7oL7QN1T4Cfokq9BAE",
  "key17": "4JaKrsEtRZQaXsxQM9u7y2etpQLk3XNGWYvRhQwnfNeWNdhWBFMcBLjjKm6o1gMLSAYT679uM2pv1LhuBjqmcahP",
  "key18": "5eEFPwSxsw8V3Nwh71YEToBWQdEpcZ6SKvacenK26q5EmT9psRVyRDtoRhoehenchPFsM2oXNEnnjkL2nDH5K7qd",
  "key19": "3pAJtqHuNc3spWKyXNMXxwYeDAYVaZCNTS1STWpyXaUWdPvyXRjCcCUekiSebgPzou3QDxPGqP5E6arF3oakCUNi",
  "key20": "4VXHG1XsRZcRtfRqBXHY2rwyaqt5hCtd3EZU5Hbc3idDwmeRBZv6nawLd5H1ic55UYgiZk4attZUCFYtEzM99HT9",
  "key21": "5P1tYvEQT1QqvZ3Nu6BFZx9ysTcP2zCSb7w3EWhm11qkgREvDduws6GaE3nbNsZ2fHMvjGecaPUGmMA6fc7N4nSE",
  "key22": "67qXY66GfYYmHmUVXurwHmvpJiiAiZmKQ9q76kp84hWBbo7YY23fsRkFA5cRLTmLwc6RB9rAL8m8zaqihCDP3A4S",
  "key23": "2Bi2B2rzxNYwj131thwhMoQASJvWZgHBJr1TFNLezRTgMksGyjKGCVeCe6krjvL1NBVSnnS3MczvE9zqZz4KJ9Le",
  "key24": "26iN79PmZTLkNnZrigsG5rHacbqQzxG6QLE6Rjt75cCpqc6DGu8RvVifDwhLPSNRC74jkSWvZdtqjRh3HTpYjZYk",
  "key25": "2K7QTdTBZNRxdav3VHpXvyqmuKUvMQPvjfxpPxPjVDAfc3KxG742fGZ1LaG3sPusvLjfhYBbkWPirTFTJT64aktY",
  "key26": "2CCp78RygWJTeumqwMKsfhrMf2ZyWAF7rU4i7JQroG7Ke92Zmc87T3vQKB7zi5i81PwPVkZmGSx9ZHgLqXCSdSwy",
  "key27": "5uKhVFkf6JV2QdFaB3Q6GshnegnQeXnmbMKiyX1QNVc59WBpm8tSHSpQgYXp55kFCUfN1ywrwHiGs81AHfFKK1u2",
  "key28": "2D6Jnpvptyxew88Wqa8jJgsnie8kpkLKbfDK8mBFP22eUWhVMPSEVpJhMVMAfqd8cuahsYJ9oE53UYs9SZ33RKQX",
  "key29": "3vXnUf9MDGWhBRDSKxpEPX3m9FbU7tdx94YPLby3xnqwxdp2M4eMhjcupAh259K1FCLx574Yqh59XyZVJJxSHVPB",
  "key30": "5LgtRLNLSVf3LN4Fi9J1H54QPmsYZwK8yUHJnHBRg5A6w398mr3qMMquuP5bdzXZTvvy6ReeGcqK4Vwpym1gfZLZ",
  "key31": "5mTHfwABpV3LozAFu2qH9ngvHpc6tBZZUZpooEygS7BGJMoMjKW7WjAz1W9VfS7xFgkyvRAsw51GFTjuZoCTEXCa",
  "key32": "5tNW7uZQdWT7M3m8ohiZTZyLe8hRKZuM5fPDFqp9cxSG6A5rX3x8BiVVvLZYNFHkU7BnZGKu9EkXLsjBgmDyf62p",
  "key33": "RDkFMvwfqrDPHKu972HQv5oWq6CHJPkPhePbWpuWNb9NLNSX916rKeLA5bhnxoKTuvo3UkSirKk15FwrCvHaJvS",
  "key34": "4dovZrCUoHqzzL1mjZtmaadUQGV9SgnRzB6mANahYZ1WBXLmLcTZsbwU9Hv18YBdkE5QHMYDNbUui1rqGq7Gzwvo",
  "key35": "SUxEh6R2yLwgumAojorpXwCdL5gU2TZKCxWDmgserW12W587d5D2YRJ9pHZC8bWL6PjrqbhuvqvuZrVqiNZDjZS",
  "key36": "2FStWT63QAGxuzp2XQJUaUvHpvUpUN9yU8yCFrJXgvNVPW9Qwtfb1pCw3bixd7fRp6iDk2EwgBJLWdWa6rzudwFk",
  "key37": "5AP1MxA6Z6yqow7v7cEVrEjxJVQcnGYZKpVzjwbfYMuVwXsy19cYTXw28kJ9CWChus5rDw8Aa5zgkxVJjpiFitL5",
  "key38": "4Uv9hBPmiMJPDbkCDGgnog5nkANiudqDFJegP5oEBS1V46Xv5MkWQLQA2GuLQ6LHwaNQP7G9iPGoq9v4JqsLBcAc",
  "key39": "25KXfcBw64MvJMrqyCGCC1yNmGiWErceSMyuGRvRHuQP4AAuUbovfANG7xMKY8NDJnMmsxRqKck9EFDYkqF91pKc",
  "key40": "3C2eewznXCj8s8ZMSbAmhimTL41oKz3ybScNuftyX4uVoyzAEr3xYFbLhe8YinEtePGKUpGHumHqMCkr9SMBVhEQ",
  "key41": "2pWnWihdtB4wbVTXYhACTEynVZ7tVWbEFATvYYTVMQ3iWLGgP9pQvownHX7p3rycXXZWBFjUMQYphhorNVPbk5uj",
  "key42": "4F9eCeDU8g3tx2JynFXjpjitqiwggDJZ811S4VGNnYktTpyXqJNkt6eX6PJRUqPtS7zLU4xf8xUMVG9ZzhkgjK7j",
  "key43": "GEGAijHa8JRdN72Q9KebyyKEtkGryeVARtTKSfwBdHa7g3tksFCKaL6TuKndKFDG849UX5NDjoKAAL2KBUaiDNm",
  "key44": "35915jmeEcS6G9XuZb2TNbCUkjcGB2sTFm3Z1yHyf3GDRWrkAABRGK7EFwvjC2zBefX4EtHWqgCUJ1vMMfrMJaft",
  "key45": "2XtSnNFSfAjf3eQ2uaK1k3VcigwdbU4sAs6gLGqnktVNweM4xwBdSm8UiD4VfbrG58x4kV2DbmoAGSgGhrtobUcU",
  "key46": "2EEJeeQi5inYisS88UV8U88vCTns6b6FpW9YbjybMvg7Wum9dntQscZAsFencSAWLQhFaYxCmop8MedYc9ZmiYz7",
  "key47": "48AcZ5Kh3DeBUwv8qs9SCZxeKZBQvzGvXTMMdGhoPyqwaJCDcheQ8659jRfTaavRaoF3294sTGYqGvwyBK6VcwEY",
  "key48": "3JD7y3NK7MhGhGmfgQng1U1tCpcVfsDLGGRzef499qeUq7a32pgcnMe495tcGyNthvRthGyTTbBvYXvg7sghmJ7v"
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
