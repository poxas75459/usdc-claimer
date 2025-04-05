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
    "3dKUuYjjuqJync83kj7FggqyQSHQ8i1ohtLNCMJECALramb6bUwx1YJUe8f58pzZzNBBotEBTFhuunowSeAuEmsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xh815tCf4un2atXkKJRmttpeUh4d96Nwe7QzfF49qfaZBz4cKp3yiPCWcPoC8e3rv6te49Ke2rwfCqhq6wYMg63",
  "key1": "tegT7KQgJtviyhtS7ySRPoiDTtqS7RTaCjjbe2cJyiGAWh3KXoAZ5bEeWYC18LvMw29sdRrXcDNpv7s6RALMA1U",
  "key2": "itM5pjC48Jxgjqv8FaWaVQQ92oqusmAU4RGW7txFvxa1VbrwcUbWuakBgz56Jo7B8hcFScf3hMoe2Sod8fRnEGF",
  "key3": "21SUS4qKjTWJn27PKCLuNNGwEfZepBYNSJAePdrEhcBpTmS7nfKQ6geEZuJAQwQGCmhULwG65drwAjJUXdBBFvKr",
  "key4": "5ex9EKdavZixsJsHbmga9tVpLtK8J3JBzCmz85puEyvRANK4QAYXoF169AipBM7oNAhLJvA984jMtQ3WTFbBh2Na",
  "key5": "2AjKHsMMUUk3PLHzLHkKSKDsrmCn3zVuHKXYpqqbuT6H7D2HXzPAS1QPePM3WdNpS4349rXy5YXbJNphsHwFkm8j",
  "key6": "5PBZK8r2His59zjm8NiWHNu5WPqoN9CYddWM29L1RbkF6aFn84abQCHgNm7Qem2sfUr5sQ8jqXqLCscKi9aTrbFV",
  "key7": "cPENnh2p31eE6cR2VH2fSfcYEqM6Cq3qfCVEP4V2UVPtt3XqmEd3tBmg4RyhQ4BHWZAtx17Gy8AANVsXBrFSgxq",
  "key8": "PmHJToBTFDckjK9vzCvoiVYgYmdRAnoQCtaUoKAuLTckuWk5avf1MkwsqzTJh1gC65CUS75yXwMDuVzZN8f9v1w",
  "key9": "2JcJf2CBjjJ7GXX92vXZaV5DJc9jFd4LPgenwi3SEuDcrgCMu5VCFEWTxTrUFmZpCYpyVESnPDS6TWJB7Aq1rF3h",
  "key10": "kmftScY4CPX18U1piGS4vnE5NxW5GgiYAMwmXT7aYojEEu8nZimMXAqomf4p25WBYvFkctryQ33erAsNSR46vZp",
  "key11": "65Mu4n8w4yZE7uLakd3cACUBh6HK8vutpK5pKkkS5dxPsTD3grKMG8pkDhfkCabTfKbYoo2kxCM5pMckswFrqTfd",
  "key12": "5gW3tUW7gtBuSw7uexwBR1QCBcwJfj7CnaxL3LCZwqKdKeDg41zcrYLktTHUih96TFLA8qrEeKJeenHwhjJ9ZHhR",
  "key13": "5fC8Uy2vLqPKkt3H2ANt1uWfFEvKttmU2jnUKNTpKEHLZx1rHbEq85p6V7udPy9EyqdMQa5BdsM25CDpC8GKHtYh",
  "key14": "JUjtMZBzXFSxjDefMpkU1kXMFv3yPCAn6uPezA9VEZDE151qtUAvQGVRoAWPdTgz81cT7PvMDpDuavxEBn5ZA2S",
  "key15": "3iHS1qfG7CG982zRwX96Yzgu5iEGhwCEcDVJJ75DhqDw9fqaxvwkmRmTcRSfMsPKNs8X4ShQMD1EH8r8khoYjEAd",
  "key16": "eCfzpQ2yAsBTZznGbDWCPC7H8gNyUJxMn6ZVgaSm3uUuCq2vgqPGsLqn5rTPqjVnF71JEEq4KmiDnMFJewVqPR4",
  "key17": "2CF1Uxmor6EWbvtYhh5ZVuxAVjDfptgvARhzReFk94TBjh86kiZRvPUfdpq1AdUVzpw1VDfHXVu5GjsQNisosxHV",
  "key18": "4YaTGKEJgEu98rxY4Gyemd6P71RAo2ctrnp7MNfaSn5x5KjuuHvyNbtGkr3kKCriJJH23rH2sd3c6WxFjma7DnwS",
  "key19": "437KL5fG3Rxg1m3dkCS3E3k73qGxX8q2LNKj8vCywrdfRsraqBXESGDBA9YKZLiVTv7dMCb8N6HtbMsmtrVnwWNU",
  "key20": "52S5N95L6goMYKZXpbeuWUdswz5neuJXm6EDgQpB2uMfYkzvmXj1h21rmX1xyc55SJDx2TkKPxuLFNRgWpDGXnw",
  "key21": "4j9dciSLPYQJaxwEvtYrrEctg1niHpdkHuzL5yjf2VnoB9i4DCi6PBrHRwXduhV5EQ5sDbnQbWkMkLRggZDJHost",
  "key22": "48NQMcWcrNdfhRuEpU6XX59RbfB6BnJid9MBSmzk2TX46cTYtaWwNmnGB7ZSsXzP6aGg68Uumbqgh2QrKzwLsFJS",
  "key23": "5aQfedH4XFfz51xtwgHqRvJrDgq847dj6m4QSit8DqS8iSstUuz4EJE86CvSqCzZNdNVqJtGqsPHNrLU4xPcAmGv",
  "key24": "3gEFFvMmRDLeb4RhQNiQpnnfAtdxLUs72GMTdEAqxJT4WFJVVXnTWYwbMznmT4N5svfHSYwRvLym8BjuNXGXvuPJ",
  "key25": "5H33BVTW3NAkydVXW7rfSEPiqT1XnjgGFHK8m6iMwaid3kVuwH1BNPUc5owSZYoHgxzvRpa9rvYbBkT7jR8RyS6U",
  "key26": "41xZZZ8hZHXQo4j3skWGwdKfGcTP7rmkMZ2CiTAJGQGza8gDGFyW9cPrbVKuB9c65uwRpwGuTWFdV4ffGt5u2FaY",
  "key27": "5NEjhV9ZhzNAdbBFrrvuTrPqUTcWUqgmZ9gZDyRHJiypSdE1cxz8CLTbSmU3jSLDytBCuoDSQTFyHTD8GuvdJksj",
  "key28": "2XKERq8rMckC9vCfwAARoCf6hpdVyTD1wAEEC4QiK3D4SPejEa2JUYTmVcPSUMmypJJqGTRNFoSnQZKDnzNRvPX6",
  "key29": "5qEyj8mY73zK99wpEZdsr5bcQSDbddR4UcPHkyzwwmUc5MYLHEQ1iyVrj38iERLxy5KhFD9jWdmwp8dgWFSs55Th",
  "key30": "4JPWd2XmhLBXVi6QpKk1tNcKeSRQfanxFjbyagXhfg3oK7nRLLgXR1bBu8WcgBMGAaB9rjej1jS4GpXgBcFZbDUm",
  "key31": "3j2KS4k39KtQZ5fi3GoWmvkmiZhRDcdSGfjRK7YBS7XbxeXh3T8HS1CU8zMMZEkYQqCf7bCK1QTg692ymfP1xcHc",
  "key32": "65yy5mPXrsE9stbFTzvfGbxr5jeEzRs592jjUtCdKkkQrbTuYQbEx6upScLhR3M58vYQG34tThmU8DEVSs6S9hC4",
  "key33": "4G1NNpLEthSUjHCY2VYmtt5zteWUzriRk7xGHQDSTEL7pFghYeAvum6Ku8U4ruNCRmFusaJAGc1h9eL5kWvUvDnf",
  "key34": "4awFgdxSRPTKHhqN82YKcCyDf4nb38RGVy85N7PwCrrHpVmW8pB4hVB65M9o8BviddtSDnDi87FVHYBtZFZjhz7D",
  "key35": "5PiPbdcSDGBhCcK63hrd8Yq43wkEzYjcRUxwunBdzj9mgjDTsw47Txafnz5cZdFww15vFu7HSU5r5vfyjVZ1xvW2",
  "key36": "4TqjLn5aX47YciJHG2ibRrvsnC8c8NYzMjkbwa3dtrNF9mi4Z73PQEmuR3cYkN3dvfYmkqiHCCKy5oC8jYxE2MzK",
  "key37": "5WhsXwUiQwR1Qaq4ECZ5SMMTxEhv2qpV781weGVHU4SexeGXB4LqH8YkYXWhpHWhyKf4sLarAC6YqgYFgo8hmS15"
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
