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
    "UfH35URu4A5Ln1D3b6rsU56ytovyzCq6yymRawTFN33DxmMgd4W2kFy8B1MgZA9Xj6Gc93B48rp9XS9gVkx3gBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36soQoruEW6nR6RJw7AtZoHBLGb8CGPMdDDd85TjERsyHjwzKjMBV8JQbWFnumRmKx5LvqWmWVJtKzsWDgxScHJG",
  "key1": "4Zh8C1gAKXTTzSnAp63isRs2kTV7Fmw8fT7KTjuxpPPnhJrZ2GsnFwNY9BMzuKp7EGZQHrqNqFQHhT6GKyH3nATZ",
  "key2": "5KaBNwks2UhAiQQjV96Lfwx8PYmVD3qYMbMEY7Lh5Q6E7SvR8iM53Fw2yj16KmGXqkXundfadGLd9EdNw3tAoeLg",
  "key3": "5GkSjjozzfNbp4KGeHUR5kdgeLQMFXeMuLpHR7ziBBqsvEuFWveHHu9ArTyz7bsJMwmXTpxd89bWwXst3votYy5C",
  "key4": "pHvmEuLMbDBPeaCBnsSTdM6LFVQCGsiPgUSjN7e56Py17YsHyd6p1byL8a7YEK9pYYdVVG7Lrn6bA76jSCMgQne",
  "key5": "3nFEyPdKtwfArX2XNdU5ftYULe5RxYFHXxK9dqaPFA1ZPPvbmaM7fLGxw1aZn4maaoPLV2rYqUBkxmprnV2HGpEH",
  "key6": "4Mher2zQyEQnwQP7urUSUFtcHWgPJreBJqrqcnBBVNB7BL9rmucrpUd7asi3G1HYbXhm3PKoVHyREg3qAUZSUQXN",
  "key7": "67VTMWAFVLkSe9xR8wxmsYhrvxqeCkqBLJ8i1zpx2XqV6amJui64Vn3pMDUsc3KcRYGxtnazhJgTdzaBbZGqk321",
  "key8": "rdbbpqfrjxWtJU6Bo5UkdawwmRvXW3c13XNNy11g99nTCSUrSvZ6D3SveZ9ZfuGU166gLuVjGjfWyNyrYXtegUj",
  "key9": "4B1CV7VtWneEwebsUxTkj5Bv3o56EBYHpLx6F1VVB5tUiKSh18CQPCWKhCcDSr5BShXkVnvynWiX5sLzr5i4gjsQ",
  "key10": "DStQwrafrDKtyAAFVwSpqwuf6aDLmooEQGnqaJREMupjngnJSpw1i3XbV3tLavV3U2PXNuGHtKc9ufukBTt2G4e",
  "key11": "5NiJXWjZu1AcZx4Pg3CoxG71Exqq7gTLQS7Wny2xkGb44GzWrfBjpymJTWmdtDht1cjDKRAnCvTzAbhZ2V9tm2Ku",
  "key12": "3AbiXESZnB1xGCZSuxVPEKaCA33F1q3vT4AhyHGFRiiwTNAXWeS9KvJ1GU3RdgyQbfbbik5WMMCw9oJ8T16HjRD8",
  "key13": "4Xd8qppDYn6BiFsaQxbgNtTHoTQWDTEdX8hgMDGrX6TPhhyRAid8Co92pwUNLEgeuh42UPTzdgsKUXcCgQCNrZTH",
  "key14": "4rVyM39ofVCJXyKp5RJWkrMQHQFNp591fw4q9yukaoiigavfbitPGP4HLNi1A6pL4hQ6YbsiYAJNhDWdF9tJMrsH",
  "key15": "axdLxsvckoRiqdL12yDR9jYLd5a8gWrn9B4Zeqbqgtsq32c14ri8N1PM7CHsqJQciVfJTVtfGsWXg2DDfoYDrSc",
  "key16": "3ipR1ZQznAY5rXXwjWX7DJfZesHTTYnFTuSNAg3aehSDTy65d6QCQJM28pfBmF1oxD8NGrbH7J8TNuXWhRJKmu3o",
  "key17": "2cG8jaEZZg9xjm1R5ME5MYKtEebNSUYLULvD2J2EhFBG62zz8o31iKqUGvP7WAU629iy2JQGMMmfA7VH7AgyDjGy",
  "key18": "4MXDp97PQj6nfQP1ZgazusqamAzSnsDSge5DTGeJMG4VkrUL2kKwy3cag7VQ2Xv9sLsASrmeXm6YDrbdYwhEqz3P",
  "key19": "3b7cvjKGSHTnWJ7dQ3NhLHdVvxnSiA9Suz43gvU5TxWCshZGWaXdNz5HpMuBYfQwbGU42rAGGWDUBz9bWAjDXTDD",
  "key20": "3zxAJmawZvR2DybmN7TkG8B9zJ7aawxw4Rvb8ZU7x3XRnzzN1aUy68AMZ4ChcuLQtL7nfiFPDV1poTj6gQ5XiuKQ",
  "key21": "2LHfwKhEyM5GqRupynpvESn5pkiKFSxyz4YDjRt9EKm84paDadWS6YT2GZy1ByNG82u95R2vWyiSnDu1nEVnoPaL",
  "key22": "B8fsLUMxDr53PEYkEUNb3SxYUYHLmcxg6rZbg1MhtqSVfka1jezBNHCpVx9dtszvj5NMEt1P6CSeJBSTMeFSAQj",
  "key23": "2pdFjEELqxuRBS6yN76Hhp3HaYPGXM6FWULNSSjGPBgGm9JiQStj4uhB2TihTLHWtm4HV8hwW8pJfCiqLvEZimze",
  "key24": "2Dd4iPxS3Rx31TwDzRZZyP82qU5VsSDBiq5Dkm9H4Nj83UqT8pSscfJeQWPDzr7x9sv6GdZ6Zzv4qRQncbHJDnUj",
  "key25": "2dyWmHj2xcYxjNhKRBMoi74pXR6nYxTm4z5sUjsUzZbkquZjydTyotQkyUrrSuUJPUstJBun1DR9RsrArpGWiGdL",
  "key26": "5RtEAf1kRETBfQwktRBnYCE6eD4Sz7cv2f5dnFx4RJRvN99RA2fVPheCMBtyZxNq79y2b2USwaFSXRuGQPMGPoAo",
  "key27": "aZVfSy2srnk8HLSGjU1CArWDomHdFwT1EXXwMRFgW3LA8jb26umvtQ2L3NXMrcgUF823HKMKiAeibo1dYaUyCJq",
  "key28": "AtGTRXKnevRoGuwW5z6HcasJYwWpny256oAqfKxLntPGckXMTJEqsY8yBMATkVhNn2oAS1eSo3Q4J4CE6DqXjfR",
  "key29": "dXigRc2Rpzf9wwusm3c1NssmCtXqgzaHeX3shjJrG9wCgpQnUV6b3KcS8amxNKYt2bA7io4imK4J5VAnHCsNt3i",
  "key30": "5YvmDgTFVWRa8m3ZY8fPBZDLrMFYaqvwJXUUwgnDuCz7AcaagPWNzhPhZ5Q4DC4JjFZF8GreohdYcKtWety5oxLL",
  "key31": "4dBgyZqUJCS2bV97t6mMTUhngBTbHbE6vMCugJyCkhCDz3unb4CEyr44q6fdy8adEdvPMand4x3idGsS7qt5GDtc",
  "key32": "2nVRm9XvnJrvSjiebabVHksyUFHTdw1Gbiz4DE9hXiKQ3bd6xqC2B6BNRZ5uvdfCwyZwNQ4n1PuMsEfypFVqE1yM",
  "key33": "5PmpPQ33jCoDtByjzVrYzTrauSazbSYEWr639cYkfi4kTbRJ9TuDXAgTM8SmWpcdHZJAzcTEiKxxcjNvTYFZciYK",
  "key34": "5U7msH6aazmRbBWxoGmAzmAiuwnuEcEXXFeP18aGVX5TPFukBsT1gYqQaynwYuhf3jz48qkabTxjwnyAi3oZbCrZ",
  "key35": "3RknUtodtexJJ82KXomXtva94AFPB15PMcugDqY6KMYg8G6yWZeX5sDVnBZs46wojQGCyYmh92ksC6qcL8k7Vwwe",
  "key36": "5ixheSo7c5rRVVumPUrqMxwGNZ4JYpfk5NY1bJmnkcWz5GAZoc6DZjArfFA1zcqN7e8tTNndBKhXCVcDtv6M11KM",
  "key37": "2GBeErcKZMpTiNTG1jWGip2YmpsUZuWR3kGjJTZVVJ2xWnbZsafHGJmZY9xm2sb315rfTRoxwevJXvccrJMi48po",
  "key38": "3kthycShX3Dq1zgttXwfFNs9SZdC184LQkGDaZrSWDwduau8LpyC5oWX2UPNPtQEFt4HpUDxSkXfsmUBbffN5BKA",
  "key39": "GNovcLqwoBNyWQQnDJPc2cEUoDBnAfeB1coXYuddHNx6NuQZVA5UcM24WVMXMJxDSsH8v7ruv5TZ1xVH4gJ7ZNY",
  "key40": "zV7ig9kU8kFjAcPffSg8AFsuva15st1UpRZesCTpacRtaNVCfjiWEn8WaVHrQ2g1sfbedhZTbD2qcZdQqyCqqb4",
  "key41": "5E1o61J7JRTLm84i6NF8paiuF7zp22yL2jcdB95cat8hmx4j6Keda2aDitt5Ty81H7jFp6USLAj48y16JH7sbiki",
  "key42": "C5eYdFrNmt8yog78wNqefJSC5szojScNxVyCx9JhJQ4oM8nh7G4tgcfdaHTTr8DqWcxmGYBgDW7MzePoh7hqCZG",
  "key43": "5KW4NYctRBf1JVJ7TikrXiETSKeQTPqCm4Nhfv3zF28QG9TVNLtrLnZfPzb29v2SbbCrCuj49Ly4xBHLEPrgyvRw",
  "key44": "3RgcaMfAoUcLAy4VYXCRrSemUR9BwrMYkLPD1trrjeczPR8sJPZTsshsEo6jZBcSbfKu5zE9Z19UyXcgxgLKzdNy",
  "key45": "5Xzn4dE3DcPN7FMpV8wE6LTG98X6Wqan9qUG6MgLWop8Dhx3PCvannSkaY55JmiG2nbyTd1mQqfW1ZeRLGGjRSuB",
  "key46": "37jEqH747kF8SXsisoDEnFFBtWMFqHuntymx5ztuGWLkKsdQs5T8i8SP7RBeNaah9SDWpTG7S4qKoNYkUSD3CPuk"
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
