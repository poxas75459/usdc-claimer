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
    "4bP7Dfb6WGtXyPCocBbCayHqpNC4k8L2cMcKAqkzJRHiA164iNaC1frgnxqsjVnbvvR6hNvupHMC4TaYhua2Csjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cv12WL56iLdA9UXPqjFauTZVpVb52g1hkyfKNp89ccB43kuuKNh7m5MncuncoCP9nhpfxH64ReUzxCVjy6ZDdAn",
  "key1": "5nGR3FVdMeXXKMmmLFLv9o6gsvPmfne4KihASDBz6qJKTgSDpHt6EYeuDqRPzTFqgjBSfQzrqCwYsytDp913njoA",
  "key2": "3xRbwK3THSUD6qjcXupciTXqnQWVm4npAW4D8fYcZ4dMETvy88hVUSHu5bcq4KPHHb6g6euKikVerVcTUHqZ7YpK",
  "key3": "5Wb5opXV2RhgMLUKRzXnFVrwTaVdtbGkDMjdPWKSoXSfdMK95oY4w4qrfjF3inmtQ3h4SJFRmWQFmgmEWfk9Ght2",
  "key4": "NnoWkVFwQVjYvijvkYCs3CbYmongdMAsoqn9TjbDhNddbUNsND8pgXbRh7FeFDcDwVPLDj7FzNCHJr7RWVofY17",
  "key5": "4n8ahdHoS3xLHiEXDnjmdSC7mzdxE7Ry48gjec3wX3UvjwkMcvrK9rFEJEgeLDNWhgCoJwksy5cPqLchPHWoNZPW",
  "key6": "2A1zFL43CbUKN71R4KoU17mreAxdBF1MkdS9dSuR1tFK2LQh6Vz5kvCyf3YsTU7BjGAeS6evdKHoUcUkaokVUc4m",
  "key7": "5LHFQTrKe8kom8JEZRm59ey238AM3KL77vQnSuokkXw58PcdUitiaTjJtcDF7AaXAQMwgHkbJhzhRVwZQJ1MgT8K",
  "key8": "3EJXEA4E283kdWLnYqy9xVFcjeUiPnMTNtDC7tQpV547P9rBVXKcvVkhZY3tcF5pJyRXEkz4cyoeaGKgHPu3YNtZ",
  "key9": "35y2fn9gH3APWWXf7xXZCWnAMwQjRkiuk41upE67ojhBApgvC1Zvsj5vnf7thPUDBnvynsXq5mVUR4Ky9T3N6gGG",
  "key10": "4k3uX3HvFCD9JPcjHjfjXcvoEMkTASvwkwdhjiioEHYAeBp48nMwtsVZ8MTEXfTxomh5h4xW87PCeyfLMbLdzDK9",
  "key11": "22QGphKif1e18KANT1qgRQPY2PKiTPKJKACKaG7A8DZaHHrVtjZtidQ5GRNg5UoWJPhwasrp7H49GB3etRAAWiEP",
  "key12": "qTN6nrr7kGzWLR5hVH3HLBty7hDZc9bhcEJCF7tiAof7uFABy3a1iMZCaLK4iwX1KZtFCGnkWCueY6WvrmdzmEn",
  "key13": "5epaHj3y7zqdfwBMwfKLpoN2sRKXvAGVH7zUpeRJsvjH3WzintSe96NBB6s2CXiXBYY9CSkKp5DncfTBwViVi8Bz",
  "key14": "4yfVc4uymPa4U7RxthLLDeoGGB5LD9evdFVH566Xy67airw632ikCb6SLPC89Y6SYsrKR2hj6PVusorE9bsHEt54",
  "key15": "Y5ikd3VwPB6F8CDXrUkcgAkfUiB17y2937wevFXhD3uB3SostVKa7vFG6w22kEvYRwAsFGxHnzN94nPKG9vWGDz",
  "key16": "43w4LrtMFx5j4gFvkCPDVZnRTg3PSrokxVG9KbWC8iPSv9MbQhZmJS4UmzFqoYT88S7J2XcrtoHqv4rgkEM5qtQa",
  "key17": "4BUiLGDJjgiYorydG28n9X8pMU5sPr69yHtHBxjy2FmEHmvcdtW3EQeKkTfQK3182oJHV8KKUXpWMgoT7bsnfnMf",
  "key18": "5GPAEymcQL3b9wxEdgQSFAWH1j8P8dAhM2z3GTdH5p54Mh7J8Pyh81RkzFsDLbFJNNJdY59Uy3UwSe8Sat7PiWJE",
  "key19": "3BLh93LwJHa31kzn7Ydxy6RYBgSMewqaGW5tGGrGNyJdHVos8LkkJvzji3Tphf6PMT87Tg9mNU5imCPvwirRvmTn",
  "key20": "5ee1N7T6XtYoCSbZzqPtua8Gc6JZnhybMuiehfM2GmmVLjQrHNY3pGEKBcwkYQ81LaPq1nNi7PYmfW21HSgPYTSR",
  "key21": "3wu3u9pnBMJrkm9dweDhfBu2UY3MLwHnT5EDxij6Y9iM2rN3n2JkkGkf9g8tb8GogKVhcJPrEbRH2A2vdr4y6Ubn",
  "key22": "68VPa8NgyZHGNjyoeDfqm2t7pHWfwZd2TvnG4Gzsmzkws2eKC175ZEgMCoU3FgwCPndJfMmTacjYTMYvr9qqeeT",
  "key23": "5eAtmprEsN3YiBeZdc9P7vTBxgWLX3q5RM1thZbNWsUpq49pB5ZvRVSYL5fxfwpYU1zA5ux9pxDDFTdbjuF4ALRx",
  "key24": "5enmgVQM28DPXVm4AWEfkeTR1viZzR2fZfakDkSsBFPF6SKT34UebftYy93mhuu2RVPU98YDpfxejHau8QSc3cSA",
  "key25": "23zrMErZVmTyTAnnh3HdC4XfwKuE2zsX5yJCMb7WRw8BSNMgSjxrD8bfAicQJTC4mVJKZQj7AHYdCC3xvNJ9kDuU",
  "key26": "4HtkBMCR1sFCxuxKegb8uCqDbMi3avKKMxwSTqLkk9UFS2f7ALLLUbQgvrvSzrzXNnsE8a8EpVTbV7ZcwXWDVLVu",
  "key27": "37cj3SPkyq2PJMGthKdzwCPPQHD4bDFtxxVi1hca1zfnL1zXkQrLQFmomDL1VQ17iVorf63vwj9M1LzUqZcyQaVg",
  "key28": "2rNNfVWL7qgmJZ7kpzc2Q6itpUFmMYk78NQUJEw4S4rEixjue3THt86CHDnTTL6VFoB7xp56HzNsZafWXizAcs7F",
  "key29": "5NbjXEfkjLtzKQiL5MfGNWZY7w54M2ZwoMUrXzFx2GtxVMHma3xDXQ9ZHgHfFjEdQZ1b8siqqUo73c59vh1JPxdk",
  "key30": "2VFMYfcMnFQAfFt87Mx725FTep8UgwYBr8af43yEhwBbyXKzc15mcrC8hRFgDxqhJ7HgPBq9kF9dohw8VEieLUEQ",
  "key31": "5WvoV78kLYrAj3iKNpmeUCCBGuX9nNGvfjjz5BmBhybhMQJKPv4fmv3tRkhQ6NN5jJzBYaivSTHf28Fpdn345MU2",
  "key32": "5zVrhEYXYkThD3WPjkRZQVHVSCrdBakhdpV12UfQ3bcc6mUnEvFFQ6kC4ZEAX3xwMDbKieXaLMmjpX462aqcoSi9",
  "key33": "5F88H5WjqjyehJsTv7Rjb65DfYTAf9LrYb6asGjnqczvrS8q59ysd3zYfYWWjCdQhpWdZ1dKsMES85CDaPXaU8er",
  "key34": "fVkUqcfouwULE19fqcdLid7vS98UsCHUXViK75KZdJVyZG4ByhBHPVo3zmtsEoTBNx7dEvxPZe5Jp81Uu3cXXFv",
  "key35": "3RcmPLqhP2369TDCUriX8EYwSQiifo5c2jULZaF4BeXy6YbPh6F5xJ3wGPiS1B3Unz5KNHbLR8a4bDU9pwEwtE9T",
  "key36": "4ejsC27Y2DMUNkikriB8DrbUpwCvZNaR2BXYkwzRivdAY9R5toeXeAYt9AYRCiPEHspwjm62PAacDcCg7RqgBLKQ",
  "key37": "ZYGMYxsMwTWrNKKmiBbfUAZUiT96s3zxyrovkme4ziSKbf6diWQhU4F3bW5BWURTgBhtY9pCCqHDefFj33kr7dN",
  "key38": "4pa7Hrc9pWjtQhwLR614UDimpdVKg4aJkbqNjntLKsPaV6Y2v58j7puHZZkW8PZz9MvqYcfQRG4Y6XL3JUXX9P65",
  "key39": "3FcZ48Asc8CNyBTY1NJSpxRBxw6RwgJWDkzHWkhd6iiNHVgmYjEtzCWAwZ9DvEDuHkE5ojYJ4UYb9CiensesUXic",
  "key40": "5fhETu2tLmeq3UtjGufMTFtTuv1ZkpY6juJ649PkTCDh6aKToF9jUwWCdSWiR7D5Y2ErTMQekyu1znsvjbziEkMD",
  "key41": "64ubEwPAayasPoqY6pojMJcGCj1LUpbU8vfuCTZ9VUR9ceZJKP2umvhGo9eGw3PqCqq6PE2ABJr1unDuyCE3Y4mS",
  "key42": "3BoxjLew5vMggJYCL972aH8BrVHB8GPkjRRQsdz83Y6FbJfpWran8Tfhf5xgWsLLbYpSQodK3hqGS8SLLh6zLPhH",
  "key43": "3ZioLudzypLkKWauVJHZu6jnjedFHG4LVdGdedBM4v8kcVCZHD9msSnBmDxL4vQSG7ZzXQkHwJn3MR6Moo5NycJ8",
  "key44": "XX757jD9honR8gZaioTFUxi7Q4DcfanunD1J6n6mB43zmzSoZQdCoC88aHjTLw95s4UnCmSJExDcvDdCb41dRsS",
  "key45": "5eG1vdAbR6trFBL2b8G5YxCBmuGHVgmkdg7USAPSEqypKLVvrkWjwZPk5ksWgiRwgwnDz5XkNt1oRo4Hr9byCBja",
  "key46": "3zeMmQmieu27Aa3tY3y8Heswu8rmcCG5iXufpdHiVNCT1CPbAtDmeP8zJRUBKsGTCriJTjhWGCLhDxURx6wYqxWg",
  "key47": "4EF95ybVu5baGk8w2QeveWY7zEWButDY4AV6byaUsWChifRWYStbv3Nr3eoSankTCX7ATZxpCzbfrz91XLmLT2Gp",
  "key48": "5mpquhSmfr6Btd7z3fPdDc5iKg528b8poyn9Q1eDDSYCiqzrKNPGR9y9BUTrrvAqft5xfAh6763oxqyo6aRFMNNt"
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
