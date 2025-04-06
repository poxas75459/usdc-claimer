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
    "qmrfZDkehbJXuHwYeeCxeqcnZngWEFk4QiXtoEHS7Rt8JAQewPrTz5uQbV6mxQXBMgwjQAYmcu6vFHopjUYyVda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHvuAvdqQJrm9uMMEVpTCSAQ7rh5V2u8gtq3TcftDik91j46NkHgg2RyyEZ2ihUoj41CbM5WEEgNSrTRyjC4r5P",
  "key1": "5UETTiC7AR1LW42ftrKZbgqVzRzbBxHiAPJESkKM6DMDcRSYdczwhyN9Lp4tk89AKiHgVLxfBq5oaS5nnoBkLVJv",
  "key2": "2ff5rFJc47ftiChN6W4mbJpDURMw8KUEnd73BarrsfWYCb2kLPhjSvS3YkS7Z6znWdCDtiPtTyksPJXPvamWuPAY",
  "key3": "4ZyRYjwoir5Zy8WEqNAdExCch11DPtP1NbCsW8j2rQWUY7PrFfvBwx4Wj9orPNUWrNEuc1pskLHheb4yJP1DUEFE",
  "key4": "44kt5Aikz8S2eFFjaKK5o9KjrHSZzzKig1aWVWEyjNAX3P4sDTPFPYR1Pn5sWaa8rRxkC75U6XEgw2szaTKsQL6n",
  "key5": "33fYmw6kczcFptPF8ri71wyLs8jfqvhVvc1KCcKSRKsg68JMmTrqXoYqhwXq1tzRaxdkzoqYj3BQgvudHzka9LMS",
  "key6": "52u19fH5R6pBQ6Qg3m6yeT34EvGZP42Lp21gL2rr7zyPYtHq1Vox112tTxjVE7SYRnfxF6w1McrwnVF2FT5b5JeE",
  "key7": "5JVTCGhrBRG55m5NhPkAGn2EmhkNTUeMjULMwm67ACnbHDATfggiYuLJXVUZV4XRq3nBfmRksgHzYzgF2QbJ5D5T",
  "key8": "3FuAiTdGM9SqXSy2HWUDJCSj3Kmeh1XAmCcANFLVdmehhScS1PddLjeZ3NPUNKGYvQzZnMCmxBCQpghMeBAsBpwj",
  "key9": "62oFfZ1fR1TPWVSZSBnoK2QpnAue21NxnFeqScSJmzrv5da5UJoe94CdHXfxtzQv41SsQogdExKvtjQzZkqPpWFu",
  "key10": "3XMk3Ya97LvRvVvMysTcWdsub2rQpD4DtQYNKBimZPCYUmsjeHfawbbVkA3XpQYLqPnb1AQSBc75bNmy8cLiw67L",
  "key11": "4qLRKRSYJBnarkSVd4PggxQvBkJq86AZ8Ria2GpfvtxNieKGdjvMQ9QCkdZntLUru5eeaZayLSwsW5x8jUGarDvK",
  "key12": "5NCtFMnpFw3aB88K8XUwKaGU4vJQQNmYVSkp66pfePQwrrfakA2GCYvrExFqgYfAggPQDTpTfezj7apaQSsa85HE",
  "key13": "EcnMADdfh4KWSKE62wbuA57fiDvyz4AUDCqb5YVasSqG9FWg3pW6jwQTzPYjYST2QyB2ASsrnF1Ze4gaTZbEVWx",
  "key14": "RXL8yJsKZNkgEz9jrkcva6TU9rwdtehHdo8CC1wzihYU96EHuoqozacGtd1zxiASrvCXqknLddusFo69GFyCJ8F",
  "key15": "3BY6PdbyFQuWLW2cuVsoFmtn9b1ESSpZRZAaDNrrzbRpP74a515q5bGNA9idaz4GvT9cGGNHkZJDvLEeRf4feL4J",
  "key16": "4KF3GFktZC4pVfCBLxJG2VfXanv1o7y8f6MxSiK3X5AMFkDCXK3vtBaj6biSr27vreYhs85kXooLxYqr7GgTo2Sa",
  "key17": "tzEeAMHgq9fSL8Z9RVG1Pv3pUcDGwV4fPY3uMuSsZVPWt8mSTEEWhiiYTzMRgxWRgKFJB5RdJ1zwVmP65NwPBx7",
  "key18": "YzuLDZLyfrp16LVwhpv7hyXiENehMSYg8Rjs4xv83Ko9uyo3omEaFYS5Xtpc3fzCXp2yTaLfs5NohYxQqs7qFs9",
  "key19": "3gpzmwoU1s1SiESr4KJj99cw23LJjVSB9kheESQNBMwnHXpijV8NZvAuR1h1yvAvKuwWbFt4vbFEQVFtG58bCKDr",
  "key20": "4rn94q4D9c9AEtSpDeqRrzhM7U57ExS9iJVHQsrkbvuvZFJUEd2iQRP6DntNBZEEgWaKykFtV8H7F6LsRv5eQz16",
  "key21": "2pg7MCiDCGiNpHhALjpParSnTsjJJnWRivMxzDX8igzeLKu3FiueYT2RLpLWvwb1NLsnL5TmesoCE57SyWsY14Nn",
  "key22": "2Sz8RM8aQvyW9WJZfFsvbBQU1sVEwGYzaxEAMFk4Zap6EpmooiGqRN8ymCs6UH2ZH5QqwBwRBmGnr3zUCLMRw6Ue",
  "key23": "Tq8AqxzZsS1HQ1pN29rm18Nx3yXWUVKWbnxrqDwoq8my72aRChB7mZBwDLwSnmLATopJFnoy9ekurDhz2ow1KqC",
  "key24": "5fvjx4zH1KaWinC2cJXooGjmkEN13xZntAA2k985GE9E9zw1mTYpvVUACRinvqrKyKmVpBqfju5sWSTejAoC8HRt",
  "key25": "5L2xG7LiQVjBNtFGcbCzb2HfTc1CW8gomKxCtg1MbgWH6e4EQC2dojqGRMd6Rw7fBUvXxnDfuLP7c7bH75FfiVwh",
  "key26": "2XbbJGwFFTPzWLYTEMQGPuwMeSU1Ad9XvRCxmy355V5niaAhpXscLW5h6hWk2RCj2N996AF5UGpkuvE9gKAcNPPa",
  "key27": "3zhgBJz22vprtv6wtYEWBndNJrVNJGKjgjq58uLrNrz1XvdRpzaCath5mPdQSicsSBuEGgUkC3m3sQtbiGiEip7t",
  "key28": "38zHTKAgBwP8rjYh4myL69gjrDWBYZfuiMXvFFWr5wzyD48TTUiwMYcCFMRAQxXZaj5WQa1hBUhPeQQHwktev8yF",
  "key29": "5nEgn3M2YHCJj7L6nVm9pDyxyxudh81cvi1k8sZ5Mtm5zgLfSC8qSMP24ZqYNsoaeX9HgCfZBiyDpnKmiheAAmLj",
  "key30": "4Uh3tcN81X2ybp7dHnVEQ4jgZZ1on8UhVyk3rzBZoUv8SHeX52qajjMVF2Km8dY9mx3pPzTPn1dQ4VioJ4cKAoVg",
  "key31": "5kGdzoGRRUNYuikgXxxCnX2k9zGsyRL7rerw4UXdgd1hFGFMNhFsyRYje3SdFbGmfW6PPn8YUXh6UdSC2MmZLi5M",
  "key32": "45kYuyRLyZSJFiT9GiRBwfUai1xAJhe6ceAU3hVwJYsfVaNp79wEHpFSqxzsg4zudkyiuBrMuQE6sFvuNWKXoeiw",
  "key33": "65Q7bciP6Vh6i1uwk2kKxFYgMSR8dd5U3SrQ8yehRc1zDKXkC6BkgCbtfXUZheKE6PPyn9Jnv97yzYEvS8YG8kZv",
  "key34": "5FS3QTmHDM1M1mST6Rc2AphfAXZcgjafDycHBiA9tD9nFxh26Mnpj36Q1433P9SNFJ8zcQ36y2gg34iEvCeLhqs6",
  "key35": "VmAkEMqtgMiALfnmz4xV8L6GtiqVYNhn6HG6PGeo1swdLw3sh2J9YhuxEd4mgz1go9rcSVJxXNy5etfjkKtMNip",
  "key36": "2MfQb8hqtNvAD1jxkMVBsbefAxxohAyifZGmRAa2xc8TRBZZz689bdLuCqaRshXoBZqcLYMmX7LeCCH547ZdYkVZ",
  "key37": "3QymVU7GNRpDiJUZz3A6GVP3PtLgLSRhsAvXzTT8LGnnqku1Dd63EGkwsFN9DYkZiE2czBaBLZm9kMLcuDNGSq2H",
  "key38": "3Xuq1M4rgmNagSFivPHpaWVaXgcstmEp3RRnwK3QDbJwGoG349bmgb1K5MkBAjz7K9EwSzZAEPJELSLWZwdgNtuk",
  "key39": "RYg2hJvgA9w7Vuvas3BrTcLQ4WD3nvravsLLWYVEyPBTK9VY4yajyzZyJ3RaNxF3VJibY1eoTYjGbkgLrz57diD",
  "key40": "26cYPaU2zSkD5BrUrzQE7Rjuo23Hd1VeqJooWy1sauNH9A8x4BXVEXudYTq6t5W6kLgoUXDTsSTLufXKyADZWwBG"
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
