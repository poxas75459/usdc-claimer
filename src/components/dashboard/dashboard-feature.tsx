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
    "22StNJe1u9Zv1AySXegCo4nwCSzBHu9wz8AreQYn9jtdf8irTpfULqP6sBVfBzJDk4VaK6DNEokfWdvEYv1pco97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MucCDFpRDvvHrhfMCXgzEJQ1vCxXyn1XSQnsN9pDFSLDg9uC3AYdee3F4AJkugi2LnatS4Kh52Dr2nPhj9hvqD9",
  "key1": "3nwSSi1zw87267PFVDvtZ6iXu9YSTecHfKATWyyAWdYJ3SWbk1VqW4AwkaB2nEnF2VphefT8xEntFzCni3A7popo",
  "key2": "5tqcEbbJWWqtnC5xFt7oPJDwk7JSJ9KAYqTKq1v8BREqisMuobShfvmDLDb4hfkDowDvFTWKeawNLWeYtkmhEpoq",
  "key3": "EXrjhzNVs8aMHH3VmCcHrpfL4EE5kNtzoHU1gZYc8Nw5j5LWAkGwLzTGzsS2avPRxrwZg1oaLMqBaxLHCDxFxUo",
  "key4": "35Pxr8d924VhtecXbc9rS4etzbLQqJFDU3uNSGR4CxKH1rZJCbfGVw5AezD88FFhb7mT8C515UUPvS5p3PWuusjW",
  "key5": "3D5DpbugywcSnwvL9adkTTVz7dfNDeUEjGAYFnbshDTrxzw6r2bq3oCRCdmdupErgz1UrUTaRtr9qUV7eW6XPP2K",
  "key6": "2o4kwAekvKH1TUy1yRTuxZ4xpNo5gYyvTkEnwQh4Wcbw35C4zvqsrckPof4uApyN2eRDYVM78BjwDqRKofuXT98o",
  "key7": "3tQ4YnW4VaVVCiLU1RZFw2jNYSb7xTruHqkn272gzP9Ys33T93VRwFdttcg57GQb5PSTjkDZDwxMrSytAUtLPuQH",
  "key8": "4Vw62dinAHdmNMrYofTAk9m6FoSb4PxuNdeqwT3gDU7Afyt2Dtqy7puvfrkNG8xNtB87qcmJXbYDbtuZ7cY6Vzqb",
  "key9": "5CPJiE6AeE6NLTPz4Xhg1WSLsPyXNcf8cdSc6mPRdT322Q6GqGHMGtcfEVAeSmH4i1LVCr9hZDEpEs1ZrHkAubaP",
  "key10": "LZPXC46pFueBceX63WgRcwbumCTRisVewjxa7emFKWTJ9mDQj7eBxF6vBUqoG2FahnpgF8br4HtQLhMCm895ev1",
  "key11": "3CxuUVEx7gSfr5JQ3s1KA7Fp9nm9zu4HbhRRUVD94pWWFj6dipfesw5bgbuYijJST3VYUNy2w5ENDdkpjobUDjp3",
  "key12": "2Hz5pNnowzuf63pbLcvdHq6KsREnWLFSdbW6hTxiAHtuLLmgXKXJiPrdx7zLAaU9JaNH9jQLpDNaxyehfVGxkChJ",
  "key13": "3jDF8M5iV4ZvFFaDGPMJxq496Er9TernrYbsPiyHTxFD1MSSvxn8CGEHhKrouFH9GauhxrJjjHcDe9QPazdS3Xzc",
  "key14": "5oCvkgL8bzsRsm5cLtBahEqi4F4cnYrshPS7A2Wrad1z17vj7jVkjj2WZYifiSpmQfGpqYE6Z7TjmqNCZKwYMAds",
  "key15": "2X58UENsfHSsoTxWLSxQs6Lj3vjWuD53LnTKQwRDZgQq8gR3rM47AZEZsvXxFnstUzVBGFDZV2kzUbEtYAFEMYzA",
  "key16": "2SjpyhpX827kq62WzC3P4PD77N6Md5vJPv43YKDGffm9Gd51p9bpGfsCKQTL4th94TZgw34vvNNj3dyM96oEM127",
  "key17": "bgzkcRe4T1oppdXzHh4m2sBUwNk7MZ3zFtDJPqjEV7isvcCH9AkqUhFnLz56afYJYj7y7J4qFZPdq8hP7mqJLaq",
  "key18": "3MVoT2Ao8c1gBvRuEXm4ZBnintbYND2kid6ycYvDjdTSZuKzQEvQYxeHo5bYUsQ1uoHb9f48cFnsGe2p5ZijSeKA",
  "key19": "4kW3adJ3TZf16DdXVXLa1aywNNSp2LoJ8ULG8QzSwj6muSUCwTdhn6ECozmDDH1QNgscESbkgq8KJKSFtQmD1Cbg",
  "key20": "46qc8zusTK6izc9ttB1ZjiJ4EqZ8Z3oGSkxpXi3WcAJpG3tuKJ3UN6P6JwhvH7TtUReA4QYR9Y9UygVQQEk7pFc6",
  "key21": "4notvmcesSi8QHnJdtkbo5r8jqxYEbRgWN6mxGzqtXRmpUWo7fuc74oKxM8kQYdhY32tRFZhifJPaxabT5PGT12o",
  "key22": "8AMSHJKyAtc9rqbn2AHKVT1mNL6aWbYHKCKBhDyXMEdrvVhvB3ETuYEZ1YgsoHEoHjFDCMiSFCNH1jcjJ3hRHnc",
  "key23": "59PPCqx1GXSRQCsBR7owHMLFetk6c9JxXZfq6PLMSMhKw6ke1CgDVDDiBeADvehdeJaizHdGZZ6a74ZHEn5xciUm",
  "key24": "5JC5F5ybmfFy8RRHybPehTtJQjPq33Ydp1NqKLtf4kQoTH7PTngPHCsBTfVGA3grczMySWL8oAhi2b78iemaay5y",
  "key25": "34HqF4H1kPYxGkDnX3umepWXqoWhDqrBp7YkEdmRthD8PGwe6Cyw5UjYNcmMpHe9sWRs94H4LjoRGnZspFTTgYCH",
  "key26": "3s6bmmYFAcY8GUyJa9N2ShNLVvKiKr2y9yfqHyqxX8PLj4wCLHEgigeWkr8vu4jjQg4jLfv7PLc3ADB5uTyFGGYw",
  "key27": "539MppXTd3B5up9EocJc9R2ZjEgMPHeQ8sjSau78eNhRpeHmgCpav8BStm6kWMxRH2QVu57nuZCQpi5bKScLqqXf",
  "key28": "33eA7qckLccxwdm5RzLuvQRAA4M84ovZWqii3fk6VT1ZhAVBjaj6YNZdKWRjgubaWTWEhL1yhhJkK4hTgYXp1s6T",
  "key29": "p4dYqaB4Jngn1uxcUrLSyLMXE2RdfCaHBv4SthUSLXnaewMmF6ttfZHeQn67Zumjx8YZZgtK7B3VPUXkFBf693i",
  "key30": "2gN3KNRkWPdbaxgCBWkPBHirQ4Y7ecYemt4SH38uLjsiMasZXM2vyPsT85YiQTdWwWYsjH6jdJzkikKG2f7ZpCyJ",
  "key31": "4LBHaZeQWQGKLcQcKqoEH3JrKopKfSDYXkb5XSffe6XXNQU9BGsa8j9NtEa5J3F1azhPRuzCeS3YhMsmz2pNVxQJ",
  "key32": "2sSVKDJoJgaV2z6hdxH2sCHnMgya6unk4Pnw44FtD4A9Sigi7RE5aQN37eqepxKaGDLmUd7RgAaNpcsw5ak5oYJL",
  "key33": "3uqJbvwAPPHvbhN6HF2oY9sSxPhoAvxnv2KHcgYkgrgj5ehgsuBdcJWpRNAqnJmWjG7uATc1orBsuVqrtB3T4urH",
  "key34": "3zx9S8R8xRHxJ6Tty3qgzvGYJeAAwuSZM5qd9uEjBAFg6xjRVWXfZUCgmRLwi2jm1NYrnEY2bnxb9EDw9A1PUi9N",
  "key35": "4kKtWeis5zqw2bbGFE4QMyvTyT91ed6tnR5eCvQjE9HNuaKw6BWSEkKB9nbiQzMDEhDXcGwvnHuTBjK4utzsCpKo",
  "key36": "2ya9b19GQxyWB1yMcu6Qqynb2pXNdQQuzXntMur7KwdJkWK8bWZaVQGsAHDzyFrggh388Rig6jqmL5SzF5zDoGzX",
  "key37": "3SoooodbMdi1jmAptpXia8yKjJm5ZyRVqFXiUV879t2mrS2utvp1fVyGS8yQyaw5DQx3CfL7gkDCcvd71J8HsXac",
  "key38": "58rddgQhLhVfnToPonNGLbYQE9C63PLMYs3egRVWbjvgXQfbYz3Mj62WCGw6T3z96pjKVAF8aagZNEsr2oN2pB75",
  "key39": "4P86nZAHeoAwmuf3XTp52rMPz9Sr1PMsuzb4bPkSrecHHUty8bCon1fnhyJVWa3HPzfjZjmZz3efF44fs64WvHQr",
  "key40": "5r37bymjjSxPVM2QkHJ9Cj13CBueFLet1ar7yoQ8CtjdXhQWh2fZg7KyWWSPYWJBenhtLWTUM47zV8hTckUNaWM6",
  "key41": "4N1pnUSWhquhUqnEZEUGBnpzMFScRBZNqADYNNNoUGbGouGH56tVps5CekVLTuMAEzLDwHEqa379fPwLNw3TSgoB",
  "key42": "5nNTZ565W7oBtLcvo4ttrTb5nFh6wV5mtSq5ypL9RZSwPB2XyftrF1ZRR8TTRW4ooiUP6Yrcucg1VRjtdV85VGqH",
  "key43": "679KHno1JvbJtR9XNZ77pTaL7xpFAAvqLZ7Xty4gfLJDbMPf6LKjPYMAEs4ATdjagv2WodtGLHPcYToBYi7UCGkx",
  "key44": "2LZhYGC9pi59Ts7Ara2CZGmEN9RrGu8v5Ck6p1jXU8KXkM3K25bgcyUCviu5Lhd2viZ6aYnJ7otPg2ceGQk9z3yp",
  "key45": "2wfM7tP5bvvkKL3GMiS4ZBdbTnQr39Mu5sE2FjL6R1kNWKUVq2tPrYzg4uwVfY5bt9M7FwujMjm2wHevranypd8n",
  "key46": "3osUt5ZeycnBW8tPCegbdF1xBAmssnoZmCymgvzgqfwnVTqUjyz6UaADuxsYciyVmpuWPanDJb3AHgbqri6rtqmz"
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
