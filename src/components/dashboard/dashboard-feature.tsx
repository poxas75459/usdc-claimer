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
    "3ArbdYZQKAHdSkov8JAeDrMYErUVUVfkTHvN9WmvfWqP3avEybGhURTm7Kr8sbdArYbbkDofsSrjvSNvPXgkxK4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xkGRHqqqcJGZgJY1NMSBr1e2VyKYWWt6iRzJJuNJnjRX3kS4qfvE1MvwT8uctMpvbKGVZ1Ngan2VpfPE5AEpoBp",
  "key1": "4Wjei8JmzKjn4UrvXc3oTJ8K5ZN3PEgQXcCza9A17jehRFBgSa6dLcaN8TCRNSqgrrfW9w52A7JB7ppcVWRyUBVp",
  "key2": "5nXSf8chp1jxQNrQPBUYRTL2Zjf3USN6KDuwDaM1rr2rR2tjsTowG4hwrrHTvov39CjcahVipCnhNoCAGtQQGVvh",
  "key3": "638qLyBxNcrCfb8tp5vW2E5bqhc2ASarnwMrWd2KAhvhWyLXgQgw1RtpBJSty4UZPWYKRmwKqbWDu5yhJJDGVvoL",
  "key4": "5nZbAh95B5FvGa7iDFWEoEQFTNT11uuWNUgeQ2MeVYKqkJpsHT4yqNAShYNV1jz6mFYoVidULUvKdNN8XhmU1S4H",
  "key5": "QcCtH6XP1soVzeiZEuHxEsXSkQ5MMojyrWQQijGJarFEpUpAfhJ15ku8jTo7ETgLTZ5d4AvbtEpNDTR8er2QqiJ",
  "key6": "3ogeMq6gNPqyWLn9Pba5TjHecJXScbDUue3H1YxJf6DPxjwpHGtLGVVeLjKkC6zt1xgaKRzvgoUwH1pD7mqH23L7",
  "key7": "257v1koFPfKwy59WMpw8Kgzbar5cqWPctCF23GYujffHx1giBDGvf9udJtptoiokdx3ca8ogr2DgT2GWmdgUgsx3",
  "key8": "mQ4ptQEmcrgZqNyS6sQTvus2F79DKKnxVG84YCBzGSiwepm3AYwrA4ZFvLBskBJqVUrUwATDXvqPv2uVLXdhFRq",
  "key9": "3rTYKGWaVD3Qr46g6KDFCsd3uoEQBxhPHPptEy4FvJGBPNSjZJMooQq4yYPGxnn3e66fgML5NQ16MWybBZD7N3Bs",
  "key10": "4uRUqJhQ88sBGPBqG8B9bFVXbMDpRFeEc1UJ5EfASig9rvGtGsAS49UHqcJDhFSf6zrR1KxktKusrZ3UFem5tLqf",
  "key11": "2x8Fh4Nr8o2d9Qphxt7UsNUQmsuFTT31P2Rc4puU3JrKuAFfdby13hVpi8qg7rDnB6JvPSbRzrXHUt3ma3wy9gyW",
  "key12": "2UmmUPSCec6PkYK4T7WQuBGTz2YzvhD2oAyNgTpuawMox4HW2NGAHr1qzRprQUr2cJrGeiWP77RRY6UNFNNCR3N2",
  "key13": "47u1TeGm7JLCmDmX8sGyMZSFbeHRM8zUmD9v4JfUks42Gven5mRLbX7LTsRW2yazVBHUrDbcwiz7jM74AairtAJE",
  "key14": "3MxBM4B3VNJi3kgA2omDZdt9uATvodrzFRVTddpwsGvvyDqm8jUsmkx2GbC66yb1TDz5YXYT2hoQUKufZ5dBCvdi",
  "key15": "3yWCmcbsiCkkLs99gBoRJiSrTUG4CVF4gUQ2RXtuk94dYkux6GMHfAw8r9sbi3T2qmP2F5TnaV61iqAidxkYbgF3",
  "key16": "2RMh75qLtAsiCiUeSzcFxZWQo6JE7Dj9CJ8iBbKaF1SDj37D9kC3BEapqtq8wCCM49pG8pHLzgzADkegQEqfUzt7",
  "key17": "e42trirzN3WQgt5B7XVSCTWgnkLqJgDq66gAJGUjfgzhy6noybUiJjoYcmHd7vrRDuZJgtQE9jUsPTvA33snwQV",
  "key18": "4thFhcrwVg6qQzwSTckQayyd6jLJWy71dW9qze2SxTe26epNaxvWgNaDnf8mbXQYgaKdp8xmSGbB3Dozo1mD8Rm9",
  "key19": "4FKBtFdAg7MnLpy6tvjxVAWUqdPSS3fo96Ertys3Cb69XBMnLttAWUhdE7ruHjqtt8fSFUKf1puHMiAd1djmQmmp",
  "key20": "2QaDczoMUy1nw6TvkSoiR7XtGwa1BYiYszWJbsqSrMdE2nM5CfTwXv2H1CPmwsPG2JAM7ot6bCvz36rqftTbE37t",
  "key21": "3k9h92TrQcxDW74V2vmLiXftgrcgvj5meq8k6oGAQ1RXgDvm9oR2sTbL3Wo4R7aKx6SwByET45m9ZSkjE63mkJpw",
  "key22": "5RZHvu9M9iVN57CfhkY5z3NKWYeUKiyXqhvCrjVm9U9DsLcwB1L2T3bMrMyqYJY5h8XQGBJ3nCsaYanxasQLbnSd",
  "key23": "2yQ4YXXU7KUqVLCJKyZDa1P3WamGFSXLejiDe2LCgy8oG4U2uy83TutpRkwWC8FDzB3W2RG69GHPzdfMWS58gDVy",
  "key24": "3aJ1y5py9ukXQkzR76sag1N4kVqZeNF9hAKwhhcgSnfomVgJ5RsED46ie2iAkEjYzGZcR7yY3dreCvAbfAeNsuW7",
  "key25": "3GUnmZrZ6XHaWVDt5XiKptgDydV4LJN7b1aieQa13RYxK2hyS68MTAFe5PjSvAfoiDFQ6iBV8jpFcPAsyhHNParM",
  "key26": "2ecoz2pyZGAMaRBMfVaFyL41EkY3eqtuFtw3Z2V4gHEniQJiDYzoFtcxTzVvh7sfNe9eP3mtw541XVGuoVXn7uu2",
  "key27": "5PFCzjRVF7ckzKTUmAyq8BbdkWDby2YLUiVFVwPHDu5nCYFDagtKxwJKGPkUXMJGJhEdZGD3JwKwYRmXc5K4kTF7",
  "key28": "4KqfPssRQkiQM6USaynferLSwxnndit2nVsXVj5AoGCgzeUZExhe1UwU97UCankmywqh4THtP8LBRi8n9ExUR2vx",
  "key29": "4SdiQRcr3NyuzL2zWrZZaJHGRBwReJknFpfmDp55wNkYkgrHwFav6VnHQw67NnGQQYyd92xUFmsbnhqGSAYwSo1f",
  "key30": "5vRK4uxMyKucQbrnT5k673BJLQrcRRqAGrDphWE5LBhrGGkqYUhnnfTgRP4QUEyopFMz5FS1pbhsVNkiMyKzQ9D4",
  "key31": "2tmZSXmBN8QbEazMGB4D87W4pueHsRBo1pSWztbqZeN4G9vk29s5mzwemFC5HPMvidKmNr17GXm2xeFAbSf7FBWw",
  "key32": "5kjXb9M1WzJem2cEms2ZMExZnDkrpL5BxJ6BqvhKBa6NVergCKoY7BejTL1DMqJRs6GenxuLj6pCHSYqVTeznQyY",
  "key33": "Fv9FMekYJBgFXNjeoivqcmLBn2Fd6aTByNMLK1yYWyqRR1uK5JzntnR8sRCgyVbuvkZ6YAaCunex1c4k2uZvb9h",
  "key34": "391frxiQLUzr1xRRT5MtciXrRea8aQrCAjtLEEhKhsSkrMmrJdXtvZo3nCY5j4JAuKvTeQhcabJojMaxTCoq6m6N",
  "key35": "5dTvtXae3WjwPMAXyCSakPRSydnjGsgL2AnVKkhTXkRiWHEW9rGXsSdLxwNjmsMVH7QSwhT9P4SffBQ34V7Qn9fp",
  "key36": "FMh2eScmndYfDBHAMWSL9rS8Mmd5pXiHzwiAGkgDqcPbygHju9dNw8rQ4aHdsMs76Gc28V38cfTYHvK8s77PEPV",
  "key37": "2qz1cRYdgzXZm1CeyEjXUJExYE4x7omfhpyH2ZHMSDej7YPSsniaS3JT3fJEKXnZTa3kjSLh6aMGU3KorSmgb5gF",
  "key38": "3acfDqfkwt66bBzsLQSmvW9eT47rbQMXFRxRTLohpstVxw7PjXH7Gmw5Jfd15Rjx68aeshLKaDF4pFrNjUdtPh6n",
  "key39": "Z76n2GFjJZF7MPGEfG8rXiAx71e41Z1rt5LfswyQ42W5LMosiMqX266kA6QTzA9AqbkAYCbCNfuKn1BxrBrUDDc",
  "key40": "4g54UrEe9EUHjTpxdhi9cjHQvhYxpJoMRRtW32HccuuYVjZovySFShCQ8mKdQHFdUght8tFj6S2PQ84sqjojUjk3",
  "key41": "4kjFpvh1R3aCF7dNVsvm6rL9Byf4eniWmqhJefFnPciKgJPy8UYon5L6PKxJhsZKof56W8oV9jsZDmL2rW7YQyDc",
  "key42": "24JXCDXKR6wu3SQ2ZNqDq47SJUKDeFwcAh3bdB3BkmLvR9tN34Qfsu4A5PPndgYtCs8TkboFuvpYDGVQRrMtpkLo",
  "key43": "YDpRw7xhY8i9QiRTbW3i9a64tPwzCweYVkAMjwcYj7Mj7dMpNewHN4P8owVPTQS6ordi6pWgsnmDnXtrhTznRHE",
  "key44": "5CtYFv2qnbJLaHrp8PfQQRFx6coFEgG4TM6s6c82mDumiKmexAZE5CJpK9Bxwf9DnnJ8CNim2BWNUqDyPCSW9Mrn",
  "key45": "22KpcWd4Guo9Yoj8FKqJ4EzEWJ1z2KwkrCbPuExRbC3XQDT5rn19AbDkjAsjUnzE1CMZ3rfWFaKT7keDmeGMmKxA"
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
