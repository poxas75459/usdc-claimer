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
    "4eu3PEnm8syTpgzTWqPEFwC1grxG2Xj9ieu3HJVqGcPq7xi2KGN3ghuqddTmc47PQdmLtpK24DorhG7aVHqsLmdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKWRr5bkNpuppD9VEMbboGK1iVgJuBridA4VaMTBCsvBgZTR1dWu2DuMVsGmugKioxTX3mScCWEyxaX8ZdP11Zd",
  "key1": "3HyhBiwgDcJFwEw3Ari2ndLz6e9ejidPwKAq5BLrsUeQwVEkj6PavMDpgxuqCYjuAmfYNDe1FbmXP6sPGxXJK77M",
  "key2": "2Zjuubyb2oJJ2szzYjgdBVayNe6CNLNyZpmFQLc5q1a6vrEMs54BcsfJ2E4uS5UF9FB7xUkre9k6efRHcqc6aF8A",
  "key3": "hnjhgQG6PbfE7MLu1w9jcGrKFvScM4T7tMH4hd9KNvnYTRC1JGVd8cmenkD8MktN7MtXuxjMW33yc1WK7BQEi1R",
  "key4": "45wcdXV4twpnpZu3jPkNPvUJDPxjW5Gid5nGWvE3X826PJNn7xPN236wYWJ3ALQxvz66bbczS2yyKq7a53AknBYE",
  "key5": "rMyoZKm7fRr8ijAfPuWQiBAxWFVsf1yWkE52RDLhgD9kgwzaVVJYkGTZzKFtfEyAWJAUYpRzN4jj4pwikrSV8Qz",
  "key6": "8ZfrKdH8HfX3e41ZvxF336xyAWUbeU6G7BEoP7wZ1RnMpL7AWZTXjWWcJVsVzGeCjqUEcVzg2YU6Ev9zDSm1P61",
  "key7": "EQRmggACrXkPfoMD2BrjQrJP3jswgkYGNmvzdU9niLdeYa96Kb8JRbDyMgBtqM8GsMQJo6StdiCyCbSsZNXSMPv",
  "key8": "4SxxEAPT7UMari3nrxPZkt5LmthjcDatLKFSrSovUm88PFrw6GNvajQTSY4sgL4V85CkybzgDokLwpBWxbtbnEED",
  "key9": "26piEGBbMjAPp8pjxM5AjaYfn37GvDVBxsTxCKz9hqmmY33jD2oHsjN5cbymzS8X9nS5Bf4CXoNAxvr8HLgXDGLs",
  "key10": "5Mk5Y5UxiFhRNf2wQz98DCn24YyhZUa1uDxFdgXkfGZoinzBYu9QuLzmRedwasxGdhYrwrn3nN4axj33tCbLUFhq",
  "key11": "29BSfqwwS8CpN6DY4gsoHGSHPucwAh1icDwRS6on4WYbkjFky76HjBvfP5CqZr7FTaS2wRDBXcE1wMWXkgMJGk77",
  "key12": "gautpniiF16oEoomQsGrkVMzFuXbxG9PAMKorZdH9urWmMY9TPSpJ7Z6yyckyz51yWndRqbhvfSdifF84kmwSTK",
  "key13": "43kCjvEG1FkeNz2ciryVvaM5Y3NEYsG6mH4MucAruyS29UDXEPLvgqPnxFvpwX9yzYX2P5LNDKcmMdciWdNyiYTv",
  "key14": "3VwLA2nEdHEZTyxYumr8mU9hUE4dFriLeHkuoLdbxCDV5kEujWgWw3DuB5HeqXezMZpSA1HmSD4EyoR8cPK1iDSL",
  "key15": "5w4S2P4yDQy1uFHTFFNCdzwU8vTs9T7R9hFeZuoRFg6NmexWr4z9GrB9pV471q4wPMvQ6BDqJaNrPL3TUVSE2aRE",
  "key16": "m1M112LURhM3H3w7iQfQsUzt8D5oenaDRm4REeq81o3Q6f3kJSUgHv4s8XBwF2GQf3WWX19yKoBc3juyL4bSdHe",
  "key17": "4R4vemxy2P5ZJPXuU2JUkiRPZsBNtirk2mPjfA9ZVyCTGWTk1x4mCPhdMj13Y8NsDMqGak2xGBL54LWihVKYDq7T",
  "key18": "4JDDBJCVdQFbBrheF8KEcNSevh4hFXpvQjz3bhP7SsjB8WxYgdzbjeLKY813QN7uZkskZU2LVhRbMkSN1iCrMkAD",
  "key19": "3swVDmNGMab9krfQh5h1Q44ntPUpNSjFENtuKRjS7WJu7qASrPW5uRdjxNXfXKaQ686871juTDxnpUpT1PRoeVXc",
  "key20": "3SsP3XgH9X9owbHqgWkY1nBgJUueKTGEpgK6qsrjNp4G5KWz9xBHk4LZ8GfyLmsoW95g64u7iNqYexj75TkH9vQ8",
  "key21": "CiJgrB4NPMCAowmm8vDYPEh3FLQcXTRYRnyQQWwBkdCWhkzKoTPXHQBKE4oJdvzPZ8a6xknWJ6HG9JCW4tG9FFu",
  "key22": "4v8FJMJzdZBkYsxXj4TDez4iAFnTQajCXupKDhg3PQahhzDQ5bfTArrZ6C1DYs3tdrN2o5HV3NSeaC1pvVCK4YRQ",
  "key23": "5tFPv73eCJiWYemsdSaCKFXighiWFddBX2TCCLHbUDd6V2DgdnGJTJamAoe2f5jCkS6JvrnyPaJAuPPrMDR89x2k",
  "key24": "5emT5F2VMkdE3KYYjkXRxF2UrVZpWQr3DiB9yms4bTb6cECjVmviswc6CB6Fm4xFiiZuYVrgjwXg5DrYZ9h8YZVd",
  "key25": "4EyM2enidrFn2GxqV37jgwhupJQhddJcUsmYZZL2PB5UXHgsuj7vhDtiPkqPNqG72K3VbKaBZWtckrnyHvHHDcVt",
  "key26": "kD1Ph9FRXaGFbk5VeyBc5mwABuKXPiNcsB3b8J4C1QShG3YUupzjJcTbVFMkVMt6W6ZV1HDbYNiRRkoeS5woUkB",
  "key27": "4TCtjTstzJ2DwV9Ks5zWMCVZHyNSJrJigMg1h5T8UUu4vduwcJVazGGYG3RqGmaQvfNeGqYxip69EBXjA5DQGb6q",
  "key28": "GTkCPtKsCZd7FHjHWWXT7fnfZh4Zk2knwnigbjcwAFTxAHUuwnXzpoxTNffGKnHebDZFdzQgTEE79jvVnvNaFzZ",
  "key29": "5WcSUQUUZqKYUhAoeZWLWZZm36Ce4Yh5cBGj93Xfr18ynDRHUNNv3Ty6D5Xo1fJBN5kv2mkE8ZCoRx4QqjKuED6y",
  "key30": "tcySwgksisPJHqHHeW1hPukVr1acsqaxRTyQB7VDksGM5dYdgkfPiYfArfQKX1b1aMHTNo6LixSQjRLAwpNMEav",
  "key31": "2N54fMKECQLRL5wZF321L1McFHFTGyH8cbfN1bPkoTyEr8v3A7dtqyuff5hJ5dNeMzcbiyNRpoyV447YAo1Myd2L",
  "key32": "3jaM1FN8PcpyKddfiAUigVcBusUrcW9rfTRNGYFkFfa1M7gHRTZwLNSy6vvmtjXbExXwaPNy8htYsw6QMbR9ZMHK",
  "key33": "3dc986GZkPMDyANsgq3Zk4bs9mmTrkghQV1dHjTjCLgNv74qbfxzgPvWVUdo9xe4QeCYF2gycL91WtY7AuuCLWdb",
  "key34": "4ZfBoDDw5tj2J2LLNimBkAN1tDNwc6KG3KSnQd8fHTF6vYRQG8RX3zavW1h74ntuJRVggpQRvdQXCgiHw4khkFxv",
  "key35": "5v8mnVsbpAPL8vZFVwKiJcrybXP6qomgy2USH1pB2AEAiBLcSFFef5zzDFbfUQ7MKtyTK7QmVDAnS1UoZfZcHf3b",
  "key36": "4ZBfhAuZSmtrY4ZBdNMaRwPJiM2tB6QBa1owNMtWsTXroXveeCNUkW2b5j9ZPdFXMXJLibeXjgk5sRhGzGZeYj61",
  "key37": "5im6vFeBh64i9NJ4gdXN7mDa43sK8ctyc7NW6gPRJf9vamfb5qHiLA3EUxrXStU9xfXLWqmgzvYCzZ3xgdWJYQ2w",
  "key38": "6inVGGraM9sgi65kXsBGkBuP139J1G2xUzHhDVGHeMsxdmziLZURfGCsubqUjkYCSzFCm7d7RsuRACYdpVjccYp",
  "key39": "huB8eeV9SpKEUcdqtqz25dkMKJPejZfrZG8hkzkTTJTMYnzeceAuJ85k56zE2Wee45Qe1Xr98kBddWB8zH43ogK",
  "key40": "KAeaNHEC8YxJRyRB3Wv1MsMo5hjw6YQE7YjrQnPvGU3trNq7HgssJkNRBSxm8FZ2Tnpxku18k9iskUpmiASCqWo",
  "key41": "4KpC6daipGdiQXpYnhs92uYpUzmR3JEx3R6vA7pQuFsbXnJf4hNkpeWW7i6vFTCxDbCat1YwbqMKG2GzaD4kwkiD",
  "key42": "4gDyEiJx8qoecSE8SfoH764Tcx6rzSZyvn22kzJTjSjNtqyVMaeZoGN8viAkST2Ki2jewr3svxLCNNVdXCkXrZog",
  "key43": "2emcYjrHcnBhBvQHidhTZkhLUZcdErorh8bV5f6w7f97SCzeQ8DHbFigQ8VXhT7njzabMd6w3sQB9X9V2KLFQ9SL",
  "key44": "4KN72MMC6fqE9dLu7mfkpyqqhSmQNvVqoXm5sjSTEJ4TaueGLic2kUNLUtVMARvNfYPowSCh1mB9n1A1ZKMudAEo"
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
