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
    "3MxX4GDT53vhkH9F3NGaHsBrLUNhR6ETD5Bg9FJSoR7QX3MjGxP5DxEUAwht8fLR5A1jetA7o3r3qd9BCtbbknVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tccEc3VjMk9LhBRbzQqZEXWQEkWvho97znzNicSy5Mzjd7qs9RqSvkiBKJBYiu37KUqiqSrnBcepa6BWGXHiQfg",
  "key1": "4BZV4B4F5ULjFvacu9QTamXYUzc9SLqz4Xa9EA4AhJtjoYG3kP7rgu3QA3SupUuuRpB2S42cxMz8VFCpy5S8ukE9",
  "key2": "129urkFQjvvmhFXR1JhvrK3vRkAJYD8R6gdqPRWLJyf384CzhmfnSeY7ZCmLTqyEQFHFxxGQnhSgGVWQkKsYUx4R",
  "key3": "5SzDV86pyTz7GHD4VgWrDHJvD4SkmoCxxHLU4ZSzrNo33p2rbBRu2HN3K8xrJ6AgV3UB7eDSSNS7Y9kDfzsLzna3",
  "key4": "5UdbD5nqyoQqTP1ratutXfZHfreuV7jusB4woDxPMf3L3z9HBo3KGrFFEM94TP8qgUBwqeCu3fcrd8VBZL7bAymm",
  "key5": "4BM39CRMComWweM8j6F6rJ2e2V17eQ2vSsxXPcAY3mtxikgUPpURSXrXarF5keQuCJPjSRBriAdxVsuntcZhv5Y3",
  "key6": "2qjSkgbQsWchKVAAqADYF24XN6qHSSao6snxqEbm31XZ377VYg2KFMKwpvZBkHS5pQhZZEGYt2xSbVtPVgdVaDrd",
  "key7": "48gB2ehq3kuoVyPMP11iPdeH1QMh2hKreJdqkm66FRtgNcmeVQkcB98uycLnWJaSexoWDDpVUgNXj7yQURWUDtBj",
  "key8": "56KazG1WrhZKBHmu5ASTxEA5DL1UE4W2hxsLD4JFbrpXg8Hh1hUiB7UMgdywjRjv8Nrk9EtDJxxDpxP9UhrePTtD",
  "key9": "3rFgx3T6kxu8iZDAnnD2TP9LHbWX5ShSKjSx8jkEh2vQWacWULWeU1QkovPnEFyne3zsY9FYHGaGC8U1nYLfKh8o",
  "key10": "29qwELX8jZtwGn4Jj2WZjjzBzyeP5gE3j9ETAV37JB1GETSG7hJGc5F6T7jE3CgN37SarbhkU2JNtE9naD3KkXP4",
  "key11": "4Mcqzz835HHZ4yMv54tNG3Lb6hw3KXfHHsK1KGgqXZfj1CteCRzUq8RKFrreW5nJxBeYUGmFzuStaq6tv8MKRNAH",
  "key12": "p2bFkNsJ6T95nJSwAoPzygeL65mAnXtCFUsjpLpqGnLp2adMzLKaLNeoGCRj2UBuxNDZNBU4L9zVCvcrPoZk8UN",
  "key13": "tGDcxnGK6XypYqdDGAKJPbuCMHGcbbMSWvYARVeL8TXbxcPxfmH2VsAJPHsY9edvL8xmMdoki72Ae7NskKFAQhc",
  "key14": "7LruC1fxvarib8M7MaJcaabcecmerqhtkyGRgYNPRTy51pVMCEqbRygq4pYPfE5XPhVWaUbRy5TJzwe8FhvnVSb",
  "key15": "4m7BQUz9e4o337Rm9DYPWE2b346nLunEjXLGUE9iDJnnej3eK4vGdzcw2k1qiAgQceUc4Kd7Bs4oqLLnnAPSmYAc",
  "key16": "hGmvEk69ULsVaJX5bFUWmo6aENX1xtYoBT16C7uiT8ZE3gau3TtyVxK9L5Yb3ABZwjG85Y3vuR1JrYuxUx1s61a",
  "key17": "5fPseeSW7EM2cy7Hy6eNyEPH3WDiiwDQTRPZjHmjafMSJG9ncrHGN6T6MJ1W7qi95RALKnZWDKXsnWVsmeZijH9j",
  "key18": "61pXuKiesGDcJREJTB8Dtk2MDyhLez7DU1y3fN2qvkDw3thUTY1NjtFkd2ngJADuHvTPqoUtWAs32VLL6DoRHmKM",
  "key19": "66uR6X1PE7oF4Uez9NNJJXJ2Jr2sBiGGBsZ6dCAycJFHBSGc67eoFJd86WiYMeE5Xush7wJbfqsnNXEPXmb9f78f",
  "key20": "37x4i6VhvJHi9YziTGMnuebErggvn2T3KYus2nrZqbqYyBiU4NkxHDYSB1SvJkaLm1ezBYrSjsUZfu2DMH8VKNyX",
  "key21": "3RLcp1Sq7AefxBRoHn3RTAo1s6VDmWQ1CDHG4gmmLWJApjRe8kF8Kr7kB2fN2PTdQh6t1tGmyrQtZkYA7P32FdYS",
  "key22": "5ZSCZwG7t34C7AwRUpgntT3GAnWWfk1HS4oEdwg8iomV7PE4LmCBqvx5qzdfephzTuCpYHjZ1f8U3fDrWEddvY6q",
  "key23": "KkvvbF5DA6TqyZBX8nQQtv1XRajuvt2yYKL1KtVnktQWs1r4CVapKxZDWM2QHJR1QL9GAubw4QzBySxm9XPWr7a",
  "key24": "PhUeBVDwtXq19Vt6LjkguWu532gKRmBpSEG82Fr1Zs2f1W6LrqSuGZyZYwNUkJWtim9kGbpXnPxFuUGm3ZXBCAe",
  "key25": "2eJF6RyGt3ikriM7PMxF9jrEFR6mi6UYBLBVNhSX4HenHhzUiPebHna7uGNUjAeZFjzR2gR4UjvU4Jp4ZrGq2EUK",
  "key26": "36NdPFNJHJieAGctcM6d6x2G7e84Zz5HZU97No6icSn4fbQXRJxTDdj1SYrwgpi5MmewYFjPPKZUwa8f783rWLAq",
  "key27": "5E4kyDfLMyZdH5CcFse53wxGdqqRCap57wvDi3av329xVs2khFEjMSTNBzpMoCbhMfheE38ejdjZU9s5gmHFUgFL",
  "key28": "4sTRS4x8ks4sreWDMrgLMJ2c4pro9j8TcQeeKQgPdadT2BQGrDgkVMxkmtytsVkiBrQHGwpif2WQrbhLAsGN8Fma",
  "key29": "5W7WmT1Sdhbg1BCEcdYtNDgdqxbLEDt9VV2aAij4mcPQ3xi11NNgEov6585v48gkx6hXZXAY4FHraZ3Tq2bPBv3R",
  "key30": "3wCaQJ8QkGVjrowv9shUqvZZKmhvLguJDndmDsVJkpshkzuoyWR848LwGWCbfGKUrDnxnX3mtAQLHh6WxHFhHNKy",
  "key31": "3ixvfmkqU68W3TVBsEUMLU47axxCZicMo4dBYHyby2utDEpMu4GCYoSP9jxj2pvGjstdEUpePKRza44TjbgkFFjB",
  "key32": "4xU8vDvj1mAZz1NzaDTYvdXH9tkEHPzsVu3yTpdbBijQ2GVHgjv3naq6ZuyGrBDJHd1a8sA2GG2AUcf5EwwtBAAS",
  "key33": "2MBAGXXQSF9LuLjAazZkRzztLLA61sY5tfWnxNEqzSaxCcBagDEwZX7YmuyRMZCA8YdYk8eGMaHa9g5jbLUFgpWu",
  "key34": "4nAVJJmRpDWnAyRfhBFWtM5Tk65Tc8GMXVvuDZnKiHWTdmPt3UCxBH1LpbpqqasLa2S741rrdG5JmjLLyoUVwx2j",
  "key35": "2i8VehuwVfVEgesWc8QZKzR7KZJkf6U93WQhvBrYyc1aWDqKSAGJPSnDXz1qcwHzusRJsN5pq5Wy23Ub71W9zS9P",
  "key36": "4We6qH8jhCs3bQrK6iEQjm8GbEJFbieT6eQpvxGddMGdfsQEU9DzMGx4nzxBKJ5GVZAJQmoz51um6MJeVmMDLMeM"
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
