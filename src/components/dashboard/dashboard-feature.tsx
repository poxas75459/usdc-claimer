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
    "REMaL7R6ZoYuLtKLavejSBDrJawG6puWTUEJTDJ9wGrUqcCZQXfLCyrTuLdRxDgpfSKD8MjEyZFtyqet3j5Shsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNK32GUVnYHzcCUG2Rz8QMbaTFf6Vxb6VGz7aQbByJcbByWM3EDgQjKFvPifduWQX8LuJzzJxoy1xF7JgKwk1Rn",
  "key1": "5Fi89aYtQpeayUW7P4ECeub6ygmD3YArC3chpABrQ9apFzUGSF8fG3y4CEgHyw4Wkw2DwxH3XVuweYRAomZ52uuW",
  "key2": "4j9pxtR3XxYJsexDNcRroHchdqvCcErFLHzBRRj6KEpAMQpzppfLwkbjaWDDC6kro4yjDFjuE1eY7GKMCYk161Hy",
  "key3": "WYbqYHQ6UuYR8mPMrH5YEx2AZqf3g6WF3fLHKq1Rrqk2LAMqgTtVGGYE9Prp9ahRJ81jDSChqctc4SwTxVXX5cw",
  "key4": "4e7C3cL9Rh8TKpdbMfkxJnHYXn1trzjTseu5S5hBhp45eCwFXK8aPSfAQs72TkYcHQebudrzFbo3WKTk5Es2Jtks",
  "key5": "2zGUDAwbyfvi1gqtUwPSpTRafuDqbhDV3wWLWoNSHXneuBHGUMJBqY2uV7QzfnNwv1bfcrxxVfrPc7tWVxoduqyq",
  "key6": "3g59Jo3vmWMSTqjkXB4CqZKWEpCHW3bgxZaj6JPuMVs4jYaTEaA37hz1XJtYMe8fM7KQXZ4ZkhYstGUfMZQycfZY",
  "key7": "3HBwxXoMpRQaRMWQVsfiXqLo9fmgjVrV3NxVE9ptbf8pA8GxGki78sPP6qBo2kFFXeXAtrAnHP6RfmMVkT7hFsU1",
  "key8": "5durWH195kMQDw6FJnP7KvjN6XaXnw6bvWXzNTvvhJzyosQBdYD1sYrBR5qZvi9tUsGwUGSh9tGJzYq3i3weRjGV",
  "key9": "2UN42aAqkMNr6e4fcPjLQYKnLDLavpnk1VnK8ZtnaSPAwoXaG8o6dnwdDJPCX3NpMJi479JiAb2SjuzrjnHUV33d",
  "key10": "4tbjirXCZKdcDqwbybsQL8P4gUc1G8ekfDqW1woBCNxYifs6ShqXdKWNFE8ALi54j5CqLM4kKHb3maf9KbYHG286",
  "key11": "543s5i4JhKQEbokSVr8sVeuCsKjsLb9GZ2Ed49fmWX3HZPRwjnEadP7N2Cg9oLmx7fnV3sX5XGTKqDyKfTPtHmYY",
  "key12": "ssVYFgXAC9QjBmLyNFBBVBPxgB62ze3U92LJ3BzLXAdkTiy3BiYn5axonVVMZoegV9pe6LaN6g9t7cyemt7yxiL",
  "key13": "KNTtzjN8tfA8ESfnBmKbsiFqnwxkbHChQkAtWYhoSpxuQVUCAaCa4oPHquyYKHkLStxGvwHTzm47sR6LM6qKcqV",
  "key14": "jaeVDtwQ6GmtMKAfB5aEuMvFSyFi4ySyTcBZ2bquZkB2djEPMEy5JnbUDt2uUteSkfs9J5W33KS2tWtpGozTvgw",
  "key15": "5N2xtphowRurvKqqHTum95XdwAdsDEs7gMGnKzKg4mdopX3tRAGTpkEcDW4t9wTHXhe3Hanyu1pmXQVsA8oaUgCD",
  "key16": "3EVPZ5dPk68N3f4SBcyuoxRqs6aKcJKyXks6765WBSvkZioPvGF39tFtbXQTbjHcSE7FkHucq7P9xvCNu9RjCTAx",
  "key17": "v1s9qfZzu2isgLWhhuj1ucUBpUVtHBGrccpxoxvdfvzVFZRuSY9bgoxQjzuPEGs55dM6RMt9gsTUxLiZE7r812e",
  "key18": "5PESud1m9SfvRNhH4WYxZb1x4vGrhviSrCfpSEeykVZqJHSmocYdy6JPPCKW4mbd6sfCWii1jNYR5yovQgt4ZPrh",
  "key19": "5FPPb5pgufbPr7mopJ9sXJctL1By43aJsEi9EMe7W5LgSTfzi18N13zAxL9tryGdGZgirkLvSbkTqwWyZLxCgH5Y",
  "key20": "5qk6GngXFqksRKp9rrsSHhzRoSHCPcVT2K1cYG9KY2AjSqCPfjDc5wjCeJGEu7MtaoLdWZgiSaukMzWAo9fvcDXf",
  "key21": "3ePHdLmhnpdSnrtrsqZKUUrgSCCuSCjr4h34nLt6KyuwTVYd1TkNC1Gyx6mEiv4BhvpQzWXCqwykCpSZpHN3r6pn",
  "key22": "3wCRbSdJJZuKGjVqsKFwpaLSFtKn1zqDq6u4rAGrBTSF8JfByvfzjCWWYxHFdrzHhwoqcqCESQmkNRtKM2NmFJZj",
  "key23": "4yuVqQXSVzNWuYryFbx8VK9awkpRVNMJ2fZdzQQYmJPsA41Xvaau96V2gJQbARtogMcKMTNJ2RtT3gAxvdAPJDV5",
  "key24": "5vFGy22FEYUQNgJ2Ze3zZRiijxVuimMKKSqKUS2PumjoqSvpCMnbCfYrYhGAfm13c6NJ5HnBF39wb2penjNxc3Em",
  "key25": "YfFd9Gwnr7gLnTQAVqvYBwXb1aDP26rvHmPeqcYJJJzep8J7fu5fM9xkuLaxojQecYUoYgyvNJ4JEEfkz7t6hpM",
  "key26": "JNUUF5hPHTsQ5yishkF7mXhoLQ6cGr4L3gEMuWeczUM5JcreTat4buXqEbs8K5MX5pc6tDJ6NR7N8i3ArrPLngt",
  "key27": "4JfDt3UgCk95aosGXGegA7AjnGjZzCSBTMFPmnvN9mdjnCQt5DRnZWySVhsgKHd5mA6AZtyB5a32tAy3dK1vnuyp",
  "key28": "3HQx4NXBwbh7YvfXH9oLPgSeozPrSELmyGRWsma3oL3WYgmamDa4eaZLvpozNE8JA2GR4Y688M4v1n4XVLTftZL6",
  "key29": "5QXLtAvE9NEGjNq16qR6S6QEfMiSYfJNmHQ6Yrkpuzm31zfH45hEaPnr9J9yULnU7dK1FVcTtCTbKMN2v7oyE6ys",
  "key30": "pzdGGmPpnCRijYFUo7NkKmV71PSa44UP44i8bDCLu1Xk7Zg8KtiuimbK4LmhfrTNCgrLeAp6S1tSkGSeCzat1Gf",
  "key31": "4eegdUvMUCCmT1Z1EHG6iWyeFLUTEgDGNXRwcudvS8pdbtF4pxSbpUbTg4nSfMKFtvnY8iz98WSijM9Xf5QdfbkW",
  "key32": "2CvbHH73vWKBjRdAVVDxfwNGU8jv3fhavyht8zFhthiS5DhVMQG1KgWEoQVihvsa5yhnypytiT2wFbTB3M9pn2BG",
  "key33": "5rtgUBppj8w5b11wxCN9kAqxehFAzB4Tsm4VooLYaVtJEyZ8N6ex1tA7XWYhdyiLqXcsEgK4rYJwBLS4rUXY6cYg",
  "key34": "5hgLGq1sx42kZshJUXvPhcgCeefCAB9q75keHXJMhRAoutXypF87Nfj1273T1fYDcrq4QoMc9fHmbzzUyM2B5NvQ",
  "key35": "3Xpi6G3UiDRRkapkuV1PRxoHiVFLHiyMMDeUPpCRzfLRA4J9NCUuu3spArf2XiMnCgJwrhLLJGrfpGtvFe9SdT6e",
  "key36": "5B9qzHgxhMkSbTBbsvGXwU6uR8JmPa4cno7MK6Rm3VGkpm5AgpKBXgyWZCYVFttx2R3mqx5EEKNoBT4AmkXQb3Sa",
  "key37": "ceR67ZpNLBu1imezAX95h4hNWwyhFsPG9fsuYwA18a6saUsDe7B3iFvHapQxhSBrU4mj1Lrqx1GbF7cmQ4cQYgH",
  "key38": "2qLkiZG97ZzawoQCUBhYVvgr1cbWnSW7n7R5EreGApuvqo1w7n1vpYD7p7Z9RJgCyVP8U2vuu7Sjrey7KdiistCG",
  "key39": "3xt4BjGpPjVUGjCGzE9yteCM3yztS2Sth9GkkadAJ3sETBbFNNKjhYfEg7MumivFDybQ4z3EDMzc8qdxvj9zRpzv",
  "key40": "2TRt22EYocy2BTX4FREpZ4HmtxVcJdFJhE5p5217grioTD91mM98Jw7QN2EkmYNzKxXJdgWAchwfmymShDJLy7Vf",
  "key41": "5CZMBpgnbk6YoPZPyrnwciy2hLdxZ6QUXjjgoewnntnXPRSxw5Hy282US7jc19QbKxhyVshQauDFJu5JA1XabvjE",
  "key42": "33Epg7pPoFzrPhQY9iQPwNXYCwYoydnQjbDqBPR6LPLns6Ucc8mMuT2ibpDcS4FQPwYNLVTMPmg7XabXjYBgxf8V",
  "key43": "T6nzPpGVwGhYLUVR4q5k24UEydsSYyHW7PDxyLLGGRLmErMTPNxu5BNU7pCZFuDd7CjJTo14sUq6kkvSbBFX7tk",
  "key44": "2kJS9NkmtfYsRVo1GmN71LYUaKDfw29Nh3Ge9feR8FxgQY5wbFnVHiRz4kxQ1eiFRLrFd7VyoCsenj4647dzFGAB",
  "key45": "33BkTXDU8qezFntLQsJg8XptrhoFyv1nwCQVSYbEviLXKLvNjMkLAFMqqEGhN9aez9yToAqpkFPH3G2YgnLh6jJS"
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
