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
    "4v4W2NCrm7KHSakhha6wiJtoSw3hYKgYpDiE9Fxduth6ZnLPaMMFzxWXmPZkPnMtduq1Vju7BPHiZutu9LEZ1DjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y95yVxCiBZ4Z1mY6bZT6pXnLh4KqnjzDDgQJXhuFRLFX7FsWWrQ1wGyEfgsc1yzR4JidaZVCTxdZFqjXX1gZukz",
  "key1": "4ma8jY8BkKJwhXWAkFe6PZ1VrQUbfrU29b7iQrFQzKuDwGREcoDkmrHVT6vzzakaLoNZJctm5KPz9djGC4ezXboV",
  "key2": "49DkfHh4qbPPYhcohymddMqVtZBMLNQ8iQ4F8S8EPbjhLKEZwtXwKfABWPaFDi8PRkXmyoXiKQ7WFtwS6GVGECNs",
  "key3": "4oLzrvvsS14mm1PocDFhwfgp4pL62Xj1EX8iiXwJpq7LMb2mvcnm4iEUhr7ZiVRXSDy77iFxWD1XMxSrefLeZXeo",
  "key4": "4MJC6JVufwHeBd2jsjzjcSLG5Gz6fxipXwF2nQkYioWkMToCBJCcpDuMd2yxmkuy3V4J2nexWAq4DTM312LxmnPK",
  "key5": "mXZHmu62cMt3C6uGz5KGDmcL5t6zdVomBes7GRW3DxLjXYNTzbBdRrN1QXtYgP1wygwFP1vaHk2bA6Py6f8bjcC",
  "key6": "4R4Y4H1vXbnPzGG6L9MCCPaYPerHwVZbMmUBrZjs8JFqtdSSvVM1LfgAk6mPcG5TSbekuRbs1NZ3keJj3JFnVbxg",
  "key7": "mkJjX75AnqKsvCaC2PqkpJGCLf4YQHRoLtswj5VwYC94KA9bx1cc9wfMp84GNadvkkqBQb2qcrqnfL9QsnrpeoV",
  "key8": "31YMamciju5gbZtrnyNbV4s194xesudpZXvWhMzCyHFgUEmVd31ggVWSGWXJFyYLyT2BkXwTWDrD7tT586bBZLU1",
  "key9": "nvnKsy6ewehF6ptFFkyvCS475SEybvcaPjYzGdwZgdC65qtE3ALoP5ThbxXomycSiKRM6uMnF2PqXC6YH75tw58",
  "key10": "2vPSt36tAnfSTsoh3TgAQNRRMi4WBE6gNKERDL3ogmE2V6L9XtATpdtcZPMkgu5MgmLPjQG6YgRhRgUZDYYRNKkq",
  "key11": "4yMsWEAjfSGT4ZdfxhtGo58K7MxWxqGsdp3x1Kh5y48dwvWUG7MAVHkzgDcpHttG8ssqzQBHHUdR6FdhdmwtxVEE",
  "key12": "2saqjgiwmA2EE8jmdjdNFjQ9GhEBYg8ucAw8XoVXJZFgcqaCPEEXaDxxv9fNfceuhxbVueFUhWF54io1MJN3bMAW",
  "key13": "4WNqgkXnN6a6MbWrN6E8jJAPeAmhtg3uqWE98Ro26EgHAZq1TatB4itJuPkK9Fs2eGozov8EUYxVZCr4rLXkcAi8",
  "key14": "4wJYxQTt7nAqRovKAuMVRmad17rjGAB5HP1DKx3EsgZDAkcMeu5BYqW14B6rzniTsUVgo4zQprqLrC2EM9cPkMZG",
  "key15": "5essy9zMUmF4dg3M575ccr8LubZ1KRkB1PTrV5FFTB51ThyHoEeEbnRddUcSFxjnBJMnfwj2RjXr4MmgmJhzFWi8",
  "key16": "3F1mytB1B98nz2nyT1xceqE99LfkfUh6Hnxr1ywBSqLvafhbWPUPiTwBoS3L8Uh19XhQSXHCF5a8UzxWcXrzGWHx",
  "key17": "392DpjpXHfTfW8rjU7MAHr3kELmYua9DVDtSPiGQLAPHEE2XCE5WVm7d5ngKyd5NGJQkwmLtS7C37x1Z1CZerTfs",
  "key18": "377L9w42VPVUVJySBrWUfNjZJibFnTqYMUnoQkJzG3RZB5JMEpP3VCK9mEYAShMXww4kDnWnjimHZ6MJhondWfNq",
  "key19": "3Jmv7c2WyuHSVrimLpY6H2Qg7hyjwfuvciAkjW4QQsqN8Yaa5Ex4f2fMb4CbBUV4tPD12uyouRs1w8veEVUJse5m",
  "key20": "2J9qTD9NgPBBqu3sCsFLCerxtgGUkG7JF2WqydBruNwupidUUjsmKTHcr6xMGKoa9DLSfEzcR2HRReeh9DUDb5fj",
  "key21": "2WrMAQkRi55emGSqDGYG4FvbHd3isosG8EBG7HpSCqD4hMi6pZWwpukv5qoKqe1ykjW8QgWy3tjNpUpvnwVAXR74",
  "key22": "2fj6TKS5rtZWfy1UecS1atyMmTBADRo3C9LZbonzJ7bykHuzYCGKfts1YeXhwKv8UJYcziCVFMG4XC7gYQpRr9o6",
  "key23": "dAdZ9NbVhZ6ahcc72aKAG1rNSqgxcpbxNuWmkPzquLumdTGkGQPmYxtSAKnCuKMgMxoBdf66qyx4VTuoema44F8",
  "key24": "3mVMJe2ZttvFXhFkrxsV2XUAphhfYjVN9RgJ7tRV1HvsWW6UDgEB9PQeofghPc35kiPPZxiYvzwgYx4gocoKbL7N",
  "key25": "44EGm1zJZUzzdGr7ZQUq7FE4JSjbhncK3GowMUdKjXYfBmhvZV3wcBpiDL818qB7BC7JNEUnZ3vG8EwhqhPPzw6E",
  "key26": "5ih5Q6AaKW7ptrTsCh8MnUs4TAzVPHRm3CWNz96LG1dzy8BHtheGqFoF4MFAxbJDzd1CWKhNbf1XwAruZ6TWsTbd",
  "key27": "hb6XE9uKWgWsLsDSzZYK6PbQu4eUVQJGoSCvgRvKVCeKKyA6aVMzXjQEzMWG3cjuVoaTNYCRfsdLarMU9Sjet3t",
  "key28": "2Ko3qYtEMvG9KR4Lqsw1p41VYaPtQC74oqoGzqR4RmYXYLhGKXEYMnEn8Hyzm5fa7NfVCHhh1n17qupLowCrwJwB",
  "key29": "3L7Tq5DJtaP4K362gptZhbQfLzu87vuieVYYATUd8eWKcRjAKr4GvzRshS4KwCDrByAbdyUmsDFt8W8rrRqcE44V",
  "key30": "3B1u3wUJqxhvN1bFmejEXdAKSHncACxqGqZNyC6cpokj6ic9q1RMZWsnwrStfnLiYyzYXkb1Uf7ajNEHVfPK37Wy",
  "key31": "3YXFEYPBdN9Q18YCi7mbV9vcDAYnjuV3jpoNkFHZjj6Mh5SPbV53Jp4UT3w4xV9LH9Lxv1bLP79x9WaYNwciVoMw",
  "key32": "3hqRzNDJN2cqeuYNCo96TrrXdhYVn9gA3bfzPcpNMusKX4nE2coKPxFhkgSgbS8Mf75VrZVBDYJLQotH9ytLGRUa",
  "key33": "66o1asBy37nLSjM1VpX8dGo4YZkuko8TSFtCzhmCfjYR7PhqqP3D42kuL3rUKL7C4wyg2Hg74KGwUdRNpXV1fkK6",
  "key34": "3Uu4zaRmGyFycM43icmTeznoP7Yb5ZrQz644Z89ugXjJ3RTs4auZf3kmLsZzeiWW7TZCWgXa6drWNPnzzHfceXLX",
  "key35": "2eyCANaCkvJWmUe47nLcrvaFphBxivhqiyY3F7dHRUGeQSG74XUWtdXBYwzpoEMKH312x2rFyu9DiYjrJcxMyncy",
  "key36": "4LmRWCVrR4pyHihiNNWUfexfCZhr6RQb75k9uJV1mB6McycE4WAwgYmQuHwttk67wGHmSCHzAf3GDM8CEdCQvGp3",
  "key37": "4dSeZTm6M7Y9FwtQFsHXLD7YZ8PcKwQnv4ABiL4tone6TzSuQ3gPPLHMzR5TXJ1WxyLJAnMbrfRt88VNuqKrkkAL",
  "key38": "2WWasYmsdHNURkJj5BJzFnqvwAxawRRG5ENq5gSDQy3tJmQRXoLKMvrRKntwhMHgiTTw8XebpEVCxpvR9rtJtpQP",
  "key39": "h5KnCpsHvVjyJ4gSBgNx9Yv8yvUpPufd6LPWuBK1sRTT3zT2C5FTTt5smLb1syk5Ph9Yqqao8ZzzBi9W9fesNqL",
  "key40": "2Cf19zt8XfYxCY95aRQazKZKqf7BefxdGsNqSVc6D6Z68KMrovbL1DvAAm37tNrW4yXp7mdEq9S91XAK92vTTY22"
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
