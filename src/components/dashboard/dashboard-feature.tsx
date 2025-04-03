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
    "5ReroN1fibqsFfy9SrocZ3XnBsBUz5rRfDXDU3i4FfxjJdD7ScpxmTgdgVwAM2AQPAuviNMehSVujdNU8stwX9e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxAyyTotcheLJaa6pdxeb9EGvjbhJkU3huXYbiSGaEfRYdBxDqsqKGQt135aUsr2WLMzY59wY18ytKBpcujkdos",
  "key1": "47fYBUME5h16LYUsiU63NUhgQy8i3tnRwnqNsWGfjCyNCo3XAgCabnVkR2A1u2HmoyEQL6PU1sAwChsctWRadS5b",
  "key2": "4zC42LGdrKKqPWBvvBwfPXUYmG1kc1RH3r6kW96bYy7gYgq9RRYoEB2kZxSx7gqQnPt4HEs1CBpmKtLJL343Srb9",
  "key3": "28sx9Xk9ZJDi9XJK6t51axLcgeFrLxEFqa2AyxJXcZSKvruAufmv7bTe8Fn9AbGfXrvqmApQtM54kf6vUzjjfWrq",
  "key4": "5z5tQjv9Jzk7dzzViCUSc18wcQ9e9idBXQ3nQqsqxVgZJXRDH4E8c8qkoz6qHALiTAYG7L5swEyqc7GZZzTRQnr1",
  "key5": "43XAJo1LtPQMd4Aq6QUySyBy1YWc5s6L6tfdDKaKVMSnD7FCbQMobxLzheBCL8mqPmh6ojZcF4CHesTt64JpjvNJ",
  "key6": "66vi7bKomJ7n7DpB5AXngmPQcwRWMYqRwiEJopdrcuEaEVPHeZsbhSuQCnV4FE4df9UA1ykjobtFukDDwgCpXXX6",
  "key7": "43v5XttdhuJuQbnE2w3QcgutAMGVtT2TYuQjS4rL1ztbQQXbb4V4dA1xCESq4fxrjvs9baGwmcUzYNUZtmZiJFoY",
  "key8": "2T1kPuGZ2iTpMHtgJg4bQ5Kbqk1LYKzvTyB4WrANYzuKoxnSuRWEGSfxY9qc9m43tavTmYoAfzFftUnuTSVDRkpD",
  "key9": "33qxUVEUbJtYtEtyirePmw7zFLnHKfhfi34SCpjxsLEV2XUKah7nenCwojGsmkNQF43CC3uhNCQBjYnTV6HEUS9a",
  "key10": "26iTGsAAzB2GHe4i9dk2eB39813FCZhHRfiVmcf239zNXGxMnrEY99Qm6XcurQNJTy5fit8A1dMMUnvik3TMeybv",
  "key11": "4ESSZCq95vcKfDRmq5YrEYcQGvzTNqZnATYfUtM6Ysq8uxSpjkwdbAfKaYVKpveLb6hQF2UJe7jLzZKbkQrTMEV9",
  "key12": "2zyHBJUTER35RmttYr4S1fdiDNbn821BfHq4rNwKHXyeVF8creKKzRDu9McNixpUUEoWrpAYebpxbNxLQiwbYTYe",
  "key13": "38K65N8pgN9hS9yzYWCUdbZnBPN3za417zDRtghF1GS9MPrd1GehyVcF8MKNn6yzRudUaMiTZbRd4S5Zqo4L4gnF",
  "key14": "2nShown2KX7yTf3mUvcZ2po7i12wSAzJXj7zxjaPRgfiWfURaVFm59aUnqacE69QFfMQ67aK8szAAURzCZBsBTH7",
  "key15": "vXm9CU678MM6qwAe78RgaVGRWf7XM9icLtnShjrqmGCAxSHVWhspFoQb3WMNHNpYVHGEvK5eEzdjRoUrmT78PDu",
  "key16": "2mbMULQ17qrfHuJKh5qhSxrXuEjBDrR5xqXvSTBvTR9j1hCRfniRrbxeHNsxp4fY6jb4z3wtCFsjCEJh1DktkYhC",
  "key17": "5Qh3ETaPCiLWedRmPVWCgrbGB59huc2x3xMTMmtZdYpTJr1fsdRAJKKRGerYC3MG2GDpX4b5pYMmJ9Vn48pKnRiW",
  "key18": "vwg5uCE7PY26MPMF2PoVGRaCxn67dvza8RMEa3ELSNzeuXjcnNvGLuoLSbDi5avQE3MNx4Kg1jY9brJ2skGWKkb",
  "key19": "2iRzgzxPhBygvbLpcvNjPyvkLm31zc9WLgCUbzbhGC7ghuSnZf2UXTDqnpWj8Gp4A2roSiUcXhG9CD2QtfDZKrsb",
  "key20": "4tnaGoNjAhcdu7uYdWxYMnezEUV7AnhZyQfuVP6Kwos627dHA6Wkw1WnXnXYg5QUBa9Bib9Eg6eRxFMwEZ9Dtwni",
  "key21": "FrsFxP8NG7T7qDWVxeuV4juiG3wx9dVu3BdHPUtggUT6QeF8mGP9vAiBGiRWFw9ZHjEWRFmUcXPgqaZvxCYvfLd",
  "key22": "296gm1PSdqvpi7TdApPwuhW3fLwhWwZnVJyCjbHT7kfHyZJPP5n5HxX4Qvi2z2FwJpzZH2L8uJYxkgxNbsbVL7dt",
  "key23": "5Mo95ETkscT6BFNsrM11NtshbFQdiqg2WsrqfAQgUQsBKSeBbaa5jepXu6REB7ifTd6u1Z2iVwPv4WuyKtRzFQAh",
  "key24": "4efGeBFLYxktygPWv2KT7d9woLs7gQmL6KMKbRrziEA1byqq6F8QKEkocVcfnSdeYoDfbm1okX4uLWzpxsRo3XaP",
  "key25": "5yzqqsKwt3VJBaA9EzBduTHcdKbbwQL25CkdfBjyrXCf6jcGqKvDJmCDfRj9sVzdPMgfP4rtngcF1RdUs1MN6DBV",
  "key26": "fMFcSycGHENbQnoe73UHddZkQwXQGd1VHhg1V3shhVfNMbF3uJ2a2FjgKQ9gRdqznjiWhAYa4DBAMakVWKEiigk",
  "key27": "3y6dabwKXngJEbuwEQnpEnKjdRJ2RvmL5sMV9mVivzPb4hXRQzd4vf7wxRnGM83zocmRmUwpGzynh3F48EzAnnya",
  "key28": "3w1xL7L4h1j2ziBq3y5vHoByFa4hYtWbnfkFDzs91eNtisVdzmYDFqNh8w5vj6JX28G1RLQepU4aKH9MjvWsHbC5",
  "key29": "2zhbizNwb7J5sKcB98pAMswqZgk7XxSFvQ28c3VvZHtZD1g7Ew5rGS9w2JM9Q5YcAcm4JLHeTfD2MNk7S1DZoJ1H",
  "key30": "5KXGCiSB9rEL8L6q9gsnRYpZbvWc7FBz7TMftZyAjuy5VHKtqisynanbWCPPFPNEcFQPywTuFhwZPevRdziWzc1Q",
  "key31": "iFT9waKLRkQdTqyeuFiGTKWChXDtgKKChLZJM3gZet87r3rc7Wxb69utYvD63G2e6ysPVNhbvSEmUxHF1PcqTh8",
  "key32": "4X9sjoSV8Ammum3wAguPBagctBaU4WDJtkqxdwvrfNM2fL7AAKAuMtE1AgvQgFCpnDhWEubF2w3cRLvaL8CYg5ah",
  "key33": "66HfYS8iDAFAJKcuw5pfhRpxQpGxDrjAiYLq4bGMQVHywJ9YC5P924Cu2bgiMw5wPvGAcAv17msGvNm8RW6bshF1",
  "key34": "5r1dxonZ3uBnn1zKHU7NDGjYAerQqGn33JXMaD1Vd7m9URF9dGcenonjHC3v5Yj2BGwUyU98G2469yMojNi8hcEj",
  "key35": "3f8R9z8zVMDNe984htNyhi5sRUi7rESrznhJL7jJMXgpkd26K3CP2ZaLBJG9vDRpasJtn1GNWdXkW6izvd6LLzCT",
  "key36": "5hVe3r7p3GvzFtWXC79noeVtLYiZdWfiEFN6zXZ1kDcPGxuZ6Gjh6X9SeaGtQ6AQwjAqbuKypgWuTTvedhn213bh",
  "key37": "d3MbhZqUZeHVpriFWHxpxMEsngrnEU2nbndjQbmXRWGCBkUdM7aKKXNjtTnTWmLBJvm9iBY8x1sbJRSMvbT7bZC",
  "key38": "366D93hTcdGBnzn5FTHRDLMzdnVfYz864daVTeTSox8Ef6HuEwc24zuKqe1wA19AhoRwUx8DZQ9VdC2dPCRvHdkm",
  "key39": "4qpe47aZgxtdQ8HmsmHBziZWYPBQSEJqCgzypxTpdyTZBA8vMPTphEa6pnV7VmgauDSTsjatmfKsZz9qErC2pU3D",
  "key40": "5CmrXZbQEDE6fe9YiLqUFrdyd2ve5tVLr8w8SaDoUfAWxqid3tWBSYvpry6dbAYcXr9KmvZgbLD7EFsCyrL3ZVYk",
  "key41": "3dhyYBhC9GcZaB8gBrcv21nZfxKSvzeJ5dBcUPKPbyPfcnarDNkyTBCouV25VzE2Au4pjE6piWymjC3WHkzjiu8F",
  "key42": "3A1wwksbhaiySB1zUqriwR9soErA6gHdkyFVoEDMyPYYrJMzgFAHYUhubh9Ww1iFDBSrvLYrKjRYJacdxvLJePuM",
  "key43": "3ycePTYkmFSxVuzPjXdrr9ouCwtQkufKrLACLZY3fq7iNG3n9xU2FUEGUvUjPoxgG6Bjbw7zKvzaSk9fVBU3YV2h",
  "key44": "3Cn3BGYu1RJUQM8D35g3HPBm2YoTuaf27g2b8RqS15uikTcCP1znDN3i8PZdGR2pAKJh1cMdagPGRnQJh4b3DRNV",
  "key45": "BY1c9xXrj9GKf1syNSmCrzSrnXthDsnvuhfBVVHnAnWTDTH9aCVS2HYR3o5diV7PacZxigyKkqHWh5pSPYPySQu",
  "key46": "4syikW3RLwuun8GadEG4pvxFYEaFaahzD3Cvt4C3ub6dZ6jAGFK4BQsMmzRFNoyY8bybETs2mqM9GRg8LvjLgo6d",
  "key47": "wGzmfV32L7AKRpo72wBN5PRmoz2Hg4rgpFrwMHojwpbxnZywyCvJ22ohdcAUZoeQeGmHMd6Bptt6jEC7gCwwXf4"
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
