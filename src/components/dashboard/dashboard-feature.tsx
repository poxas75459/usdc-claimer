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
    "mXYPhT4SUpNcMgCy5SgfVDWJUZhab2uWWCnLgD2UYDKj7jJEfjcwSePqP7afGNFXUoni7ghAeKfWFZ5MSnuUb1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNE8NHPCP1zHCCngwSRabCd9x84YmHt3Cb8WvTKvcaS5o5cPEn5icF8yB1ajhiKvVHhnrsdWWYV7FAukNWoWNsc",
  "key1": "31UoibgdPnSxyfokqEmedtKmtwXkfExmchJpbSCtAuNNcLJ5uqgkpdjEDbZHVJXkvmDiAJK4G2pp4RHLanM2JxHh",
  "key2": "2HhVUTGEvcm1zG4DcwMgjp5psrsoDaU2aFmxgwqXnDXbVFpwPBZVq64v9z5EAAMjsuhyQJss2KpPRB3wsSxqBnL",
  "key3": "5kAevtzCJwuPAUkKh3euFxjknXH7zLov6AqMY9BaEnSvtrLn28isNvfaCFrDvcmLHrvrjfvHF8c23EpZmnECBGfQ",
  "key4": "4qH1egvRDFi9J5jUsnXoKbsBcrVbqGLxA9zftyZqwnsbR164vf8DCKqA3XPu5FwGLyyZvvGtCRADnVUh9PBGSQWe",
  "key5": "628HD9dUoKK6PL4ghp1zYaR7r6rLXTgHJRkZnWBcPsX8YLq5L2VXbvyagNfK3bX9GwVb9udUdf2kSDkDpZqitJUs",
  "key6": "2EcuGDSxfB9AaMW8HqoXRn2FUUam6McgvqjtraMzH1x297Vq2gAxSXmeFRYzGNxTr9jq3cvG4mYXT6LanuPVgrff",
  "key7": "5mRDpeiyAxY3FTUAPwGbotSeGiXuBGCsY7tbQvhwiTyYVsow6S7DJoUJVekDmRcLZBRq9kpcH9Qhret6i9ecnusK",
  "key8": "454WJu7Rt37ZuwnLVBboPbJef5k5MkjmEymENKqevdak2Kdfwv6KFSAXuvJaN1ckw4FE1eZxwbnFf7mFnUdEGNgG",
  "key9": "3AqVF9qWjts39JV9aL6PntvTvwv1rUFLD7dxdF6ktgSfwPXdiQEavFpN9Zi8hQiCJ2jkuXUq7oLNZBJV87Qr5sqr",
  "key10": "3PEvruz4yWYq3bmMd7NMxm8KFuSuyYwBrJFcuVaUnECu2qeWg8KqQYm8k98HkKHopoAPyjfLiiji9YCQtRtfbo9s",
  "key11": "YDriXSS8fUZJpH8y9hqjGTo2cR3mMfDjVKASpMMBE972C6VZN1L8QKcNJSDugKhxkm7XiMyxBgjzXoQkNLHCS6f",
  "key12": "RMhJPGaZ9ENkEoabTF4XrRkXjCdb5sEEAfCX7sjmfbjyAnFUnuoNns7kkd9vHwwLYqHQvUVvr5aEL6NKWKB2t8N",
  "key13": "2bbu8Z79kizjUpj1PLmWH9aFcoCpuNGweAtkoweZPcz8aZMKbEY5gQYey3t6TUNXqDjcjApuqVyo4MbJpmvh91jV",
  "key14": "4UxCVRNE4uctjVqXnUXmG2QvsSukij7hS8qqEAAeoiYDURXxEZBor6XAVxt81koHoLzaL2NtXQD4dFvczhurgrRP",
  "key15": "4Z6BNgs3v7r3iR46SLTeyav1uDzaSj6j7ZSLYGAkBBYrAnyqe4WKpmZqwbxY4QF3CaJojs7qAPEdHvr3djpR2FCf",
  "key16": "5E1tmbJEfBFkrC7WaPEtxxFD2BMCXSZPn2VjacpHEa41WkN4Up2W3xzmDRaQBJtR8v4CZtmFY4iPxUpU7BRfZEAF",
  "key17": "2Gjh2qwLCJqUjJC4m2jvzzxcrED1EBATeews8GcaizZuRAX7QQkB5Vo6aFHWWhabgJ7YMxNqcA4F9sxiMSZMGr3Z",
  "key18": "5UggeejtQyksDsPejKvz9XWkYaPKhReVKrbCfdesdAPMeY1coz1muFktAhfCVkR9JaTjpEnvvSokii8MNroHFA7K",
  "key19": "3nFDwYT79VKSxpCkoAjCtUbbWT6sBK2B5vgjwwJuvTEsrLyah93FFnMMquuu2WWEMDH5PY1BAWgxyMN8eCALdrQA",
  "key20": "TZagzU9UtUNBqgQNXnq8Fqik7A97P1cbvQLsMxLLkibLTKRGEyobH7xjotqTMn9PShwHaZZVknKNXbbfV2mBsXL",
  "key21": "5gomDuRGTz59zRE97dGHESNXvFVzumj69Zjufwm8fVdTebAn8hwHcZqTGsZroiSeMkDVE16SZhKxzoSDx5aMfs5C",
  "key22": "5HQG9kA5LKQSz3bkoULciJ7bKUyPBscBdmATrfJq9Ks31XuKBJhHUSX2Rdcu7ZedmyiJEFixN6Ce32iMwCMS8yDB",
  "key23": "hSTxFGG54VVGsYgL2u11pVH8LN3gKGEAgyKzia7yeQW5bhjr4gMAKsFcoER5SpcZ6sMuWv6UsPwzL4qNKHvjKS6",
  "key24": "3QwkckD7qGkCeyweSArRVcWo1RKJi3r4VNnLLHvRLhwcFJTyhseQaqqAvwB4V43ffiRkDAo6WQWwjJgyB6qyopU9",
  "key25": "46gZNqjbXtF9QDM9k7E7zZgFh5ot9Et135Xfpxq3xzsAQ91PKVi5Yc3jcpYMURwVi26emogufrmJxmbwULpwx4si",
  "key26": "3x7yeZuDnMGEGzMyVGXzq2FzW9q3ZMeZ4iMDMT5VjfNhp3CX8DSGANN6owHH1b54t3SHY5hYcKEdPNbF2ZB5Xim5",
  "key27": "22ZdiHNhUGH6XzPJLU6GCKDerauy56ucKypY1s9NYAVUCK8gtA1FjdfS18fPczZbEy4TrXFNBa6KLxoAbBHf2FSn",
  "key28": "32JvjL1udVTjCyM9esenkRV1iUdjUrLyHpFLpvBkE8pXLwEYLJzXyde17jBpSRFKHisV26up9NSC9TiQ5J1YsJKe",
  "key29": "AioSPdaxmnk1kgqP8Zc2N7rtbB8wW2uftVFDT1mhMH3xD9Bf2xcpX5hfoYTiCzoeKJcVJX92JBUj1X1wPaZuqCY",
  "key30": "3r6uZccSyLsAVXbYTHbrjoWkKiGSbvLNUPJvZ3X5GUAVeSr81y5ri9hPPwhGE5LKcFhvzmrzaA8TP1LVmi67jaQd",
  "key31": "3MyzdWzmjuWnepAVTiWeKqkXJMgxyrJeSriZGfpsDpvoDAgDWp1xTzpZ2Qd7K9bRk76hb94K4myXDxjDdcq6wBtG",
  "key32": "tB3D4ZjeQr9dW73hen7wPwsVYsEiW1oP8fbiDkp4SjJ8qFtaShw5HDQ4L1tz1X1XWapZmAGSKQBDyreddTmHWU8",
  "key33": "2aCNEJWjsSpVo6kzbGh8Fh8XjXVh2iGMuCqfnVHE8Bz5CmPt31nf9tDX6sS4ch3LgVp11jFbjGHKTNdemGNjMXVX"
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
