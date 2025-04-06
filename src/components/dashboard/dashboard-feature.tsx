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
    "5JWH1jzPHWb4mBnvox9cq154N77Mb4vnUjBGN8w4gt41ZZXY7rC9wFJXbkbEUB6cTu26X7EJAoXhKddqiZSpNbUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "546aaeQCCXv3WFMw6WhdSTH93UQB37jAbHWoB2y6jBfUtZXJArU6i9gSATYE2bHLrp8TP9xFPV7AC63BM8zTYgdw",
  "key1": "67UxRdeFb2oPH9WCQwjRLVUDyMV6muEjw2CL4BHJzXdUf3QSj6hkUSioUB4UufujDUDyFbuE72um3YR8VFzLj7No",
  "key2": "qTBU4w2ZTyKCx5hMy6QptF4WbZguJipcmJ9BuQxYJdy6m4y8HHoFYpmuqPUuAzgg2oMsSQfxvZ5EGqbq1iqxZ8W",
  "key3": "KQneYtqA1RxjgLt45QmEDnXdGv2zvcdVaJFoN2kRRhbnfZLV9TTLYrdyUfQCefxnj8bGywdUCv421Ruvg8ZhokP",
  "key4": "2XhedFxKio9UEaBTY3kkP3Di8ScMF3ybcrHwJJZyyw4GqDYKRt5kMRT78GoZipMBHUZHKigMWwjfLnAXcFvCm3xp",
  "key5": "WqaL8BX15zPLvF6sevBUxrstrfJFWLqmSGwgmaH8gacsvtcTfqtZgGAgS7gVfjqrvwFNhZUoXB4KjLWUrC3YYsp",
  "key6": "5qGMvoorPi3AQz2KZaf1tRVrh8rwNUzkUBJkJbzwjksWpzayLki664G5mwZeeKw8DGHu5oVSj6nRT1cScE1R6Wck",
  "key7": "2otUUVy4vQRjATq8LmrRzMSbFEN9CbNxzHgN14XHpY7pHsv9wAXXgxg4f8nMCYinKzTp8QPE7JvRftRAARkKYAUi",
  "key8": "3r7AMWdq14xBHMR1yEyr3rxCuoyjh69K5C8mycwka2dRYEMEBGiQYZosf4kmDCWHsnWMKNYjEaKAAKWBSg21S19K",
  "key9": "4WndcsniMU4sCMSJ6VVXSEjcgdnvTa4FzRjgYoiGSW3bSeADuFFJhPQKHCTZbC4sRmCDUJZjQ3qfFmWHhaP52bUS",
  "key10": "4WkY5JHNKTBDwGu2J2C5YewYqwGUBA8Y58tbdLqLM9skbQmRLsV5jdkC3wJqU4cENQAqcQBPA2NDCo28C8jjEVDd",
  "key11": "DKikHsyxWUTseZrcgf7uosPzm8HWUEUeKfw5fu5KRMNscsbMRJUAxFeBspPQPoqEtKhwP8bjCXvqiHvMBwY5aWn",
  "key12": "327cWgRCff58zGK3rjLdarLJzSxCn4SM62b7YQH47L6NCATDvG4v2cEcJfop9kwDFCrYbuEJBqS1Ry729QJ2Vc7Q",
  "key13": "3WAe1tAF6BqzLmwwreCAwos7X4DU6VAQST2m2EL5XcbpsgrBLd2SMvadhspdQLqq1BdDZgYXzGjGG5Vm24YrgDjN",
  "key14": "3nrVpDHKDvVwPsPYu4B16VokuzQddm51Ge1vnFV9qB7EwsVM5Tm7fFQXenurRq4St3knGEbVmutgYDnFY5K99PTA",
  "key15": "2V8SspCSbXV9QRbbvtzr7dpRBXiTqmBbXwQB24GYJk8AeMe7TbYZ3FFmxhhuhqq8Pbp4S3VxX6ryZfV8xh6fvMFF",
  "key16": "5qbf1xgyS7Ao2T796y7YJ79A2eH9CvmkHDJT7pZJQ6Ts9aVJKxajEH1UQFfpKMjRNWEyqTvPzpPKCSrXCrHdWVLk",
  "key17": "MunHVcg8pcun8KwF7HnTqwus9TFdDq2i68sRZPrRNx76XiUTGawCNsgEi8ixFJjgg2Rp6uGRc3JxV2ZpjoH65zr",
  "key18": "4E5q6YwT3v6yQ68MekD8jkXV5nGNNDhXM4MT7aWq4tMRETn8q8nHosA9WsUQAGCf1iYr9AmydRFbam9ib3TmUTfy",
  "key19": "42Wokz61NhTyC1w8cAbN2cXjuZjjoiFgCVcLh9kbGdpzwXapRENsXrV32uywbGLEpThw1XfmRfMMpmG4DffVeLTr",
  "key20": "yJ7gFHA7PY4z1Mzey52Kiu8gndxWA1XNuWhoBc8zrnJ5wxnfGtwhoLqfXNvY5TnKsH89oTPNqajCw1buS4CAccM",
  "key21": "2xVD7BR56sx8Mp7c5XMDFXV2vhXwq4gFUmVQyBh6mbxvfKmPVRm4s6psTz651iwuDLNznHfcdND81d6kjfoxsS5M",
  "key22": "2WZuRmiUirVbWKUXgaJAFUwEvviiGrJG3fXyGsVpkjVZ8T7h9qSVcjfRWCL1y94YS9DjNco9JcLVgPPQZy3hQWpo",
  "key23": "3qKHePgaqouy7TrxZJEPDGsyCkb8tQm9FWWnHjuUVuN11atLE7HLNKsQGB19noJcFksA8UoErZWx34mDwyXEspME",
  "key24": "3nYCXowvgkhQqnrhEGpvuPufk8FMzU3jse5D22d8fTheMiHrvrbVem1PdzQvi7HmR4V14nqkfnz4KvxvMycfSxxa",
  "key25": "7aVZ37BUaVBLeDqQoqhTBMBz5EKasJZ2cvFn9BnuVRStCnKSaRv2QU6fEAM6bBc8YAboxjDZqWs53U2FLR6FQwp",
  "key26": "41zDFyoS2TuAcSWWV4YZUNeKsA3dHfmQwyyd5ZkaWbPzj6fdwMV6HToqD6y9gj1aszesHuq3XSWdKPN75NsgQgkk",
  "key27": "2aaw2ZcJAs29j3EzPoGuBsFdFS7Evh1NJAxEXTUWg4vMmu7TVUzZ18xjXfYz4aKCXHRZuTXyKpqCYarndyNYw62w",
  "key28": "3nPHy8Xnv44vubPySBHo2ixCWWFp4STC7aBmsEXbLxDCKaWPNiJYPTxEYp6CXg31Q2C8sSxXsC6Pb1skm9XEPnHj",
  "key29": "51hKA82ZGogvcHAYfYMH7J6KVdmDw2nLLFYANcMMymZm8Hr1MrKeHgND67WH9jxRCUMswb5do98SSFFFVrhJbmSC",
  "key30": "3DeZ78JipY1xtwCHsE8MWURWsL3V1qVu7deoDb6X6vPiWYNLyCCpwQ5v1hKrxDz76vZbCURV3q4NsVESkWKdPXC2",
  "key31": "4cakpQbY2DdsApV6dKt797PAiuPAdjBrczLvx6xD3JzcsDcnwotrccike8akmtZCeHQKw1ASVmascxTXS5ds5Sbt",
  "key32": "29jhf7uvWkZJQ4MNiuKHEvajwyq4fyBudGEhf88WP3Lgr5xzJ2FGTXJf5uyteKfSqbSSsjdy9CcFiQ6bopY1BPxY",
  "key33": "4Yp81ERGrQEFqhKN1vo6p68hcodrcBEvw2MhtfK4WDDchNnHeXiomH3Pc7TfFzyMjFbXUpEHDfgF2fC1DoAcKknP",
  "key34": "HrKo57AurtiLHLYzaNE8NZB3UoUybiUzU9cLYcTQY3N26K8AerWvX39UYBftqHama5cc6v3aJoJAtR9pDtpXBtw",
  "key35": "3ssnKrCa2BYNKdjttq5QTBCet76nib64pCmvcwDXQ7dU4CxowXQXgrF4hBYrmxNJ2XuS5B2VfRKWhP2PzUSAvZGh",
  "key36": "5Rifi3HTyjSm1NLBaWxezduWFDQaqPDLY4yiGtxQNjH9NMpNNrXVaSnWsSTMbubvxsJpPtqv3LWcdSf1oqGPQoVw",
  "key37": "4G7y1nKMa9TBhxA7xw7t933CJWpTa8UnoAePg77ZTTRZ64pJHavt2nk4XeABAN9oY6Lyf6htSdj5NS6ovCgwCakR",
  "key38": "3Zi2b4AWxNCRbqEAnR94XYhnvmhvqAG8gtfVn29SwWZhNhJUQES6xdpajrdF93JmLxbzcbj9oJZVh7oP9PtQu1Fm",
  "key39": "LXLV79PFTFiefUki3PDd7Z9kdLeN7RCSuDM7TeydRyXmdHSPhmWpWdfXmYKqfombmAqCZsuah4VT6ikFcZbYQNE",
  "key40": "2M5LYRr4AD6rcuMPppdfSycTfhMtFMCcpZtNxMUN3Qy9rWVeAqANdWkKSSp62xNBtWiV9LqbJRcxj63mZY1339cQ",
  "key41": "3DeVa6FCLd8KLpvJ5RoDsKHQqaxUdCT1rJETujUHrddPSJyzJ4n4nLkmjX2mk2Wuo932AX2gaDaM7Aza4NAgC3RS",
  "key42": "2EVPwyndAHzAqALAVkASay5FazLRXTjy45tNSCB3veFFonKCgp38hS9DarX5SELkbqoHaLkmfgjKgdpyMg7nYRjg",
  "key43": "4QKuQAu469zXgYRLHmWd2j272SwWypHFEsnZr9Yw2CXEbFDDh7sWXnuJ3Aq9Qa2rwhbgeyVnRZG2wmgk9Ddt45ef",
  "key44": "5t5GkZitk6rAmyagwAp9z2ZYhNQaS1DtUavcq1sK31yDVsGLQyYYmuceQMDEMpXGEF9LT9HZUCtD66T92XTVMSXL",
  "key45": "j1FTLuif2xusZJQdV4FaT2BHwC8wum6CSV5yBf336u1T5N6UBbNK6HvgKJTE1mjbKFrhXK2N1S1Fy6kE3xtGG8D"
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
