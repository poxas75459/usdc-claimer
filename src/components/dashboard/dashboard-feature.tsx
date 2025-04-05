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
    "5Js3i22fumK3xtmkgycMupjgn9t2JbB6jc2PdRUakDi6R1PKVzRC5mpAYS4bmkWN3v3LLhzjhauG6TJA1yrL1ffs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3SrPqYMvhrJ4SLE4NpnA5NJmDRAEgptEeVeYo9TDHttB44cxaxeSjqiZBxwuth5LchNa5vfvViN2qCLWLHAqpx",
  "key1": "2ywdznJnaQLdEDVr4Chu3rRGy3X2dBBGYCSVKd6ngsWGZqbCtS3Gwzn1tvWYdtFpR848stpABNKWLEGADALFKGbP",
  "key2": "34GhAaMm4w3J9uayyuwGKRsN3GwZyJB3q8oFrNGQ7vG8ChQ82iesd964d6jCLPMP4TbcQXwshnMRaowba2hcpCab",
  "key3": "3aufpC3HYWhsKPM7rcZrv14Ha46RoALHBaS2XUHbYuzQNjL3veStkFER1Yu1wZKdRZeyEbGLDXPMZXDigCmArQYz",
  "key4": "2SNZndzLtRryUtj5jUvTdLHxeZyZVWCVM1uGJZotcPLr8og8V6ak3pcBtUU2UTTwohBwnC3iPNtyidXBBd15DAin",
  "key5": "3MYatzLuXXo4JFfxxxk67gokkFQHvvJ1ag67NtCsQZgv6n51SLwcAy5tqHd8dwba516QTFLSPGsvvVjfszo4Z6NF",
  "key6": "24wi8nmr25L9svNJCJ5mCYmNrxtiKSV4uJz5nqpEncpDsh5LACDNe4CDf8uWWtXbtFd1sHkJDFnP8RK6Tx4aUHs7",
  "key7": "2pNNuBvp3vAB4dJQxihq4B9rcC5FangFTLCayKQaxNeTWpd96izqNXVNEoVxT8EC9ifCimrWXfc9mb18EonmYhh3",
  "key8": "4N2psuZvYSaiovcT7151J2YKCh9biakrvXkdse1MZGPRoGbAovCaGBUZFwVHZUokxtFXxMonGnr57odHr4rUEDh4",
  "key9": "5EYvA8x69pApZbaNi2qPdrqNKAdBVV8uziAqb2u31mKedkq6Wzyvk32vgoruSg7pr2XFbbcBEYwVkHtWt2oHFNCe",
  "key10": "2HYFU3zh1SFPU6Eug42STHBV2EMk1bSahz7MosD448TS5WJEDFTnq6esYJwGZV8crPG7p2aLwxHay2pSXiAWE9Zu",
  "key11": "2MdnjP1RYowyiB9wyw9ENAyigPMG8m9RJdr1jSa6ZFqVD96wSCSouJA9RSL2tBjasoovagakeCKJG1r2eNC1NAWQ",
  "key12": "4UWBnxSzMzBLB8HXbLJ2sMhAuxtVB8dvYEwm5Bz3nqjJd1L4Muy5BftueBtnaw9x4WMDaP25tMWYvVAF7htwRY1V",
  "key13": "4RVSUs2JwSE5ANHJ4zo5MU9S1J4r16cahobL5ZouNJ9Tnjjv33MwBUSNeJnssbUAARS8NepTGjc9eXNYzFEeZFxe",
  "key14": "3TGg6r4481beqLjkegftNCQh819nCrmkwnw6U6Djf7FjeCTxrmS9YduwTmFwJ3Wh4qfcLoCwTixkBDwCXfTzooR1",
  "key15": "2w8DcRX5R524uFrBC8yovzj1SxNZ6sfwui8GJTAvfTyJBFDY9vyKiTho5RCgAgJ35nQgxZ4qkxXtLrrTfNYmCjZG",
  "key16": "2kztPJriK476QYWkbipmWBPRBQvxLT38uGLLJzDz1Wg9aVBURu1uUnd5nuvVN9cbKm4CdqGv9ype5Xub1e4WJk6p",
  "key17": "4NgrL7yPX1dwLm3SvF3nGLisRnjRpWbpmgMPQVFEHYRcEwfnZDCRUgWoqKM3fdrEo18dvcUa2JJZrXYATHr6Gw8W",
  "key18": "5YPeJnhjA8m6tLpQc9h7Ak4U8ZjLBBc1gaaMYHTnALRzREtJcC8jWB4QB9D46VaW57nc4Zq666W9g7sKdQ8MDxSQ",
  "key19": "5RA2p2mXwbWrhtm9bzGX9SpQDStHrwxgR8BDrFy5XXbEa3Azmvxpx9BWWwfATXETD5rXs6QFpoJFJShyn7W7X8d1",
  "key20": "5WcXu55W3h5Wctk2wex21GG33AE92in4kbqMTfwLgYKebZiY1z2cqLN88U5fuzZ7GzxGDrEY6R22Bi624iYbChZz",
  "key21": "3KQisDSrLCNrhFrSADqDKmTQbPbf8Z4FfrNzTU5qiTYuPCukPckHzjmwMUHtk6N9uD3v1nEzeFwqQWGyfNRCUKxr",
  "key22": "2ojYaPFM2e44cDLJUAWJKTd991tC14akeyGoFYNdFyuY4uHLsaYGVCuHVNEDVL7awWvuMJQm83zmJKeEYPNU1bHs",
  "key23": "5Yy3j6G2HEPC8PiQshXATAsb4dL4YvJfxJwARU2MzkbBXJ59FLG4NLVyRJFEFGhWeM7oxRAuZJKHT97LXjofLAVG",
  "key24": "4HzPj4wfAMoJRS3kKVHybyaNkvPgT2BBrj2GHgoQbCHmYSLVNxnbsw3SZRsYCYtn49GmLcS1AtacUa8fhsKGTV9n",
  "key25": "5rSnrPoH2B2EY7akt8eyYym2y8xNiR5XhtXWYTFteTUH1dQx4ehUBQGHKBU29Mi3Qk6WaQZ95kmiPCLo6QB2RK5E",
  "key26": "ToKEtwS7b4er4yGi33G7J3Y6EVcYtTYHwLQwpdiRs97wHxryX95Rtp89fkdJbq3pYxF2fdjgsa3kw3rH7AzWMgt",
  "key27": "3QFrW3ijPDaGnJQhRR6XU6SBx8WAC5G1xdWyTai86JZqi9NvyxDykPudGibQtS4kpAFNZLmZufPP6ZovJ1YV9JNN",
  "key28": "56kgw7fBSb7KTkiXb8gYJk1z2AMfeaLK5m8KXtwi7sSBNpSawvpYPxegDeEvzMTJqoENehH68v72TcXbPVB7tLk7",
  "key29": "4nGPsQ6HfMQM6Hu87aQFyair8SaELxXjuz6XPznqiJZNH2gJ68GKT3u3gfuwZZ452rEDg3xLzAE3TkRHeYBNU6do",
  "key30": "4jLRPD4VFqXaNxaUJ4QX4xZiFDhXTXr3zKPCGcJStFMGoUHRmSZkpqPft28XGWuxjsF3hv2mtKEHoNeuh6c2VFtD",
  "key31": "CaNgJuxNcMUzuG98r35aCLCc7Mq2QFAtkUNGeJrS8PWxD9UsGhwJc73buGZEAzVx4GDPLsmiSTNdKWQoXhVxfHf",
  "key32": "3nC1bfNHqQmEh3T46Ugzy3RXNLDdjTwR67HtHCXL6WA9VZcsaoMSARXWdSTUHuVwP1b2co6enMRSaMRqJQWPpfBW",
  "key33": "5YUfeuhbpgHGRsYvzcnG9opREDKckXquGSE6mQXARvJBQcBLekz8jM8YABmi7CyWsSHgEapPGpBp1n49wHTyjxWu",
  "key34": "2bDdvH9M5zFW6gj6bgmt6HP5fJYDpcyotqD2wqvpAmuVe9RtFSzeSQR9qxx6nNHK6DQUngiDYgp2E1TF216TDp33"
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
