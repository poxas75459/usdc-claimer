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
    "5k2GDduyUKkpBf39pa84bHCYoDcwpVbAh9m2VnW6SQTqttLfNA9sGmB4XyASvxewYgSU8Q2GxdhtEm7GEx8B3m2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55E4TCHGMjLxmKPcQ9JLFciMvDuCzpa2yyGyccGdDPV4YXCbQY9RKvzQxY7aiUQUBxap53oXpmNbveq8S6Fu37ZM",
  "key1": "KQtDBtXaByg8MYq4ywFuEv2bRwsEtYcT5ykW9DR3rxL1yhXE15fqZ3XpMgYiMNbFbcCT8yJ9kqzLas6nja9yFPp",
  "key2": "3S33QdMVz9aD3gYXjvBmCkVyPSJz8dZxE1qiDrqLUSrhyhTbtaLnsiXj7goprk9SeEpiFCnGRXooQNpqfXieCMag",
  "key3": "4ZsQMB2SYAvLxmQyPbQqRu8cejnQKQn1LriYt3Y9mHd5mE2fj9VwLhbQ6EKEPaqtX26gG1XpZywux2trnHud2G25",
  "key4": "y6WjWNbAb8Kx98cRJGShmSbxU3PtpNGYW5uVfeJcCmfjUDLWxFCqwQ7VLE6ZUDTT3SSdoBcMeu6GucLoyL8zDgy",
  "key5": "fyApF8d2VrTBaBWzW9T6gHZRDQ5yfirry3myohNqL2KUNMZoYWXKof4DMGv25Nf4QtUEUgGBiac1uuGgTqocXDm",
  "key6": "2HxQAfWjXuHhSG3oWyUNcsxqNVyWYR9bCB7RW65J4Pub6Sjf69MiMr7RqaJbJSMG7wHGfyjDgqZ8NNqGMbjc1MaM",
  "key7": "4wsKVf7SkKYtz4AMPRVpwnkFpaJAPqYCHrNwHnLKdwruuMRp6L8rt2aKDW3QMgit1iMQwZQ9Yfcxd6bKh3ME44df",
  "key8": "3qvkwZuYiNqNyvW5yPL6xXvK8LCjTmVSFsUYmL5ZLNhhGcmJGkJ5UZEaN3PMyt6gbtFF2k4L5QyJJpK16W63AE4H",
  "key9": "2ci1CDx5TjUqJfo26XMMtbhimKzxMZqHmUBwuGT8VTk2aC2o1sASpjfWUZZ7Lotj16dig1Wq3xLLugqZK9B8bpbH",
  "key10": "5VjzXsucpGhDDQcfvoc2UuYsWkw9VUYMTW7FoUtLsfJrbeeGLr9F7sy8g5AN4R3VAH5JtpbvKbZcL4HdFAnck4km",
  "key11": "58MUvFbrkmPnBdWtpnmiDam3L2AqruUwPQGytks5pUJJ2yXRWjjTZgiqMpKcJgjjNBHV9xYpVMJ164VoxsnGngkG",
  "key12": "3jnZbyr2x71rK7tD1Z2nJqHmSYoBH3v9d83TUHGMUBDXL6ERjZmwQtwcCXm5oBSKUwpN3QfToUreX2Ggfy8LZAsH",
  "key13": "4cxTNn933UGC1bpq3eR5yugMvY5eTFFxg5D1StBCEVZZBUWgVBbHyieDpj882etAiAntfUwcSrKTaYn62n3R2bU",
  "key14": "nXz7CsbhBJ6JqQCPKF2pYf1p9FPohdkAhq7cyUpfCeHTjVdXAgdMNxWnreaTFS5hSAXbbPK3zcQ9RL3qqEQwJgn",
  "key15": "37JnxsWkRCj2bxKCH7PyVbf1XYC4dq41PtwdHx7YoFEKSF9YgRYiqDJvz2vZLQPi56tAZjRGR6S9FfyTYrovqLKf",
  "key16": "4fEjFZ89z13qrk9TbfXpXcSf5c5HKU6i6ut6WzpAB3bPwUWLpqNJVnVcAvkJ1AUajQX4qNraAPbxZtNU637HrWca",
  "key17": "HRxRVFnGXVpsRUHujQcj5SofBcHaaMASGP6PZGWUmCgNYgAmZC7q1WVdCzvTre83Tmtjr3h5yobyqMCNF8A5DrX",
  "key18": "NPxAdVF2UuYKze1hA7ndQp8RPGr1wpuRKGK7trsp7iCNZjwvX4426x8KnnsEYZ1YE9NXjC3auXK48nsNvBXc1EY",
  "key19": "46LQpwfbA2cDZBU7DJ1gcVJFc6AaTsEU94Jg9eMf4KMCfHqXcwj72ykiWFkoVoqHpUwFC8G9uMeSXYXJXi7tpTcG",
  "key20": "2ysTcEBkE7cHSVL7k4nCB3JPJQEMAXY3QRwqY4V69BArX6NyN75BansjjHpcdD1JTJDXy34xjWVdwDX2i4KS9UrJ",
  "key21": "3imDmAtPsoCEutWufHaLEwbnsw7UqMqDw5Z8ev3JDKLzmBozo8nAdEuCsV9cJjvfZtrfF8B9yvBc9x6ZMYmb3E2k",
  "key22": "5KL67jAuDG1AdKDEBQfVnSgTmG9bXwMCzuwnEFXJRbws27iddMJFabsGPmG9sZmVkDinMyfqFH8Y34vAfU915Bnx",
  "key23": "g2Dnh6V2XJPgZm6RFuNHm1BxNgKUtZBimCpbbe5fVLhC3iCocPnJ1iyUySVJE9NV8QPJzLHb8a5oLXP4yvfaeW6",
  "key24": "wVVR6zbgNhPzinLzmyLBTuHDQKkWKHp6icNM2VBvp1dT2wQTXCY2GpKnP7htAR5cZEwocQENe1jXNTbEvkDUy8a",
  "key25": "YmDsk6FxFnF64C5g4YjqpUm8YyGXbHHKDwLGsRJZs5Q8FZVvgytN3k1bNEhQP2xnoEagWJvFQyjEvUbedHPWftF",
  "key26": "5zwofF6MZ2HXmxxgnJpyRiC85g9TfxotVSfPNxoJmMqAXYvzbLwb7YAnHwXVLtpT3NvGks4xyUUqst3pLTZNZBX1",
  "key27": "1BujMQ5SyTsMpJxndUH28SEYMy69dwx3QYEMGqiLFekxY2wqrHDJv5P21cnVkEtz8JmUiQaEwwLSSozZ8WqpiBU",
  "key28": "21kHK6Qis6Ya8ZtzMgRLgHVswXuPjAGzEXqiCZj8NktjW63NexjuZtaY7jjvRzadD7X1bS7XsRyEdpWpcGfeLWBh",
  "key29": "TTErUuiScWLCwoyBA5hcuZ4kDgkKz5tjfmQmocQo2f7uC7Dsm3fbSMGeEYE7PS3LsXGyz3fY2GRfbc1NxhRDFeW",
  "key30": "49iVj39iZ4VSva9eGMNDXjj5jwimXiUTqzvFBywEbGesXYYqoCMuPszfKxVE1JCGwa4sQP1Qk9gFBzkDwCnsfJax",
  "key31": "3iGphmHokY4H7y9pdsthw7wRUShcRbUSMgDap5GuR9Kqegq6EhtdX1podd4A6qcp2DkT8uM8zJywvbMw4reLzzE5",
  "key32": "4zGRPpgj8TdRCCLtk4FEwscrk8u8ixKB6fMPWQUiLyHeEmZDzfRRVcd3NeC1iJ3BrFz8Q3JPmjbWdbi35LHctEmq",
  "key33": "EbF8G4bqAn1QAG1hVfTS5FgGAx8mCJ1EH1NQdAY6YRZaG5YTp4wyZJEmjcShC3vmuA4PWPJtnjgfPgBfxBvxHh5",
  "key34": "43VoNzJV8uDgfHrY9HasGaZMMmHqSVYALtfhZmfHrYrHkzLxCqfas7WydZXnWTBJAoPwaE3FSx9J5mnuWuLWUd5g",
  "key35": "fnxxP5i3XwXkmL7PjdbiqsTgBp27wZ6HGk35UxvYjhg7CGYrc4rt2k8k1iGBJksksqMvpQR86ZGSsrMbrowy2MY",
  "key36": "5u9zYksLSfvTmR2Vj1wPseqnUmKAH9Ay1b2w2mewvNsVwsenfYqJYMBGmnCryePEJ7GyRjyqTpuigqxxEtD7Nsdb",
  "key37": "2jtYzTpCWcs9uCyPiJiuzzswXUKuy5fiA2PTAtHKVHpsK4gZyJgA3L9fUxs2uekwrrqtwofkmAzEiqdu7MXFgeUT",
  "key38": "5AmCST1y644ExVC5GCk8Uvv585ht5CQpVzsXvLt6FKdr9YGCfo11k9VitenAaL8Sxu9r2qRiyb8cwnQ2UN98jMhQ",
  "key39": "5wFj5YeQGCbUbx4z1FmdL3BTncJoUk1JDS2Ki2URHQdmyqfvaRwxG9miLUuT2XND2AsPpuPHzYR2fYbMJ51Rhdqk",
  "key40": "397cyUfVqqV3QoCLi73DuQKMBRHLThmHPM54feT2J5KZVZLnhowRVtc8RgQk9WmcdkiAKpwfVbrMpXzQrS9p3y8M",
  "key41": "2qciFpLUuyje1wfPK2Rq2vjQizvpt8Am8NzFw76ueNtPjQ49aDjSH2pk542naqmNyQGQoZNygEMTcWwr5JLcyAxc",
  "key42": "5J4mQrtNorrE32z4QWEQKTaouwJUhDeFwotRgyu8c6BFDwZ2pPBAWEigzDns8zw41VbQrCTk3KpDcBJS73pAC3yc"
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
