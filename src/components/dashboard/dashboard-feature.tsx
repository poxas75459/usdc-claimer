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
    "4XtQpYCwuVAsVwJbuWH6Jh2x6SmZjNhZbjk7MypZDdUG8BjPRZXsG5BrFkBeCrXRwQTo5JwJVM5ftv6f42tcXN5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rW8smQtivcbq9rxZqRXpNBWSWZ6pBc9AbwtvWNjpcyXLfhca1u4NtdkesxZbxYKpGzr7We4h1gNqerSEcuTqw72",
  "key1": "6dXX7EewniKJgeusqHBTbaMjKJJzHMW2FSDYaRdL4mc14y6y5QKZfQaj1AK8JMF3tLZ8wrarmVD8kAbdm2b4gGD",
  "key2": "53tNts1M9xFgZxut21QkESCfuvGLyYa5SqXfcq6YV3Ngj7n6XL6L2ZtASNF6aQFcWmwEpNiX6sfC1dLWssLi7fDM",
  "key3": "29CodiYGiKFsUrCVEXpGhCAj1ytyYfRMtqsaq6y6wqggr45SEdbpNVC5BHf9DTJw9LaGMmp1d1Q8S6u4jCS7C7aG",
  "key4": "5jBkskSVDKQyQcDtVE26C5bSjbGrVRh3gMbE9ZKZcp3c9Kve5GhoCqbArbrHE11ZDRF2QKM2MBKXM41Z9D1TCGL3",
  "key5": "85oQ6Yr1GgHhd5tYw4LybTXz6xDAGPgeo8LvXd3Zn5nuk5rXYaWLmkqicm4MLqsFs7z32CXW4SmD6DYosNn4Vwz",
  "key6": "2zMTKXDWA6Na4mXUHFEF8qP5wfCgR9PnEfsG7pPNLbVxQYV3N6QNWYJXijEmGJeVhuXLp1NRv6bPG1BzYv434iUq",
  "key7": "5fz6GdYWXsDhYVatSadUNRTDJsTkU9E9RaaA6Yvj9csjxGPCvDWL35TNinmyDKwYGr5Qfj37Bx2vH5uQ7cPD6HZD",
  "key8": "4TdicvzTtfwvWymnVkKDn8yD2357HxeM2NjLxKFbQ9uSBpwaR9cJi6m5a3a3QDcqyx1p1LGLS4UPQT8u7MtHbGwt",
  "key9": "3Qo7idS3vptMYibGYFHXse2fv94uFY8mK3dpKSbwPum7jPEPmEp8XCcdschwNrqM9m7MwwX475sXuDvYby8C8niu",
  "key10": "4Ao51uB6t8as7N8LFPQzewAKA2ETexDUrUaDH7LvkQC1BdAgzEegsgiF4vBaDG8rrmHYrVfeHP31cEtuWsgTeRKR",
  "key11": "4CbbhtHX7jAdeYN9yTgtu1bwCp9vLW2FjiNeA4qeU7J5KiYnLobA3PJxFMgyfRk4o9Cx3kUbRGqKUjJntwHz4vbi",
  "key12": "BwUp5ghcxKWWAm6DkFAE6L72VF76qyBjSptSi6YMfc2YqJRoKTBkPV9dci82cwqn4DUukjFk8Wsj8f33xXea8g3",
  "key13": "4XUGgZecxq8fzpdrx9xo3h8mwK8qVy99USQwXjWE6xaC4Ew1f7Xb7e5h5yvTGuyspxNZB1fMA212W77qnLCkVDbj",
  "key14": "2EL6NHWhBQ8B4MDsmozqR3cpZMRSj1sP12raCaeCoCKQvUWeYCAhGrdK7YWaGGXp54hVbC482rh9Mx72WkrXAFBV",
  "key15": "Ue359NnHKs6qvJqv8j7PJPGEKEdM9tUVDgg634mpmr9ek55Ztmf7jftiH7mKAg4vzEmiEbM9Y8gfQjHmgPhYnXM",
  "key16": "3GiiwdJkZg6g38G2fTQmT8osV6JoYGguAQxY7nRQxAWNX1r7wTFsLCJxwwCry9Kfe24ySVDqJeXgufUbt5a9pMD2",
  "key17": "2jarchRqMmmPHtDGq9usfSDLjJf8B3hjpLWLL91RznWrrUhaikFYVHWAng29he97WLntb7TP2r28pjzuYzhy4JT7",
  "key18": "4rzqr42ETAHSxAH2XCYpoaGUQ7eBy51EXX3QxuRyhrJxE6a4QhuhsxPaafzkfihY3YLmgX4fjCRNhnGybZs61Ggv",
  "key19": "3NKAT3fotqNFPWqZCbvNcdstghTbrbs5T5XXWqKXA4GmV6LDt7VKx5XdWf3JCx395SGLXN6h8pxcJTPJ4v3dfXiX",
  "key20": "2FxnvSnaDYJkd5ziSUCaUJkxqyyQGaeXg1zXQAegzYAgFhBVBWiPpsVK2S7St8fRb8ZBAou8vfEjESHyd7pkT85G",
  "key21": "3s4GSNjce5DYToM63meDTuwwn4i11WgiTgThBKUY2zhZ75JbESk9QT58QpAiAwSRgxaticvLZZK8j93Zg3uqunZu",
  "key22": "61u4mCfqj4HfcvcQX7okXjYoTz8mkvS8pV7CjD4BBBuL8UxpBGambKmRf6xT4YiwJMPLZXrq8zDspt21APcs5xhV",
  "key23": "5wdMcML2gX4ZjJ2VnSMLVjHTzStnupQooruerHpoacwmhkQJG99X8FiSAvGSWUi8eDvVkV6xmj11CqKdp8BTbZ4Q",
  "key24": "3bHQFkSHEmBpt2g8L7GFg9iuvXASc428NMpee2zbQFvV7gq6fsEQ5PKUuXvrt48GA51xubfqYJ1TSWYsY99sEgus",
  "key25": "FtEFcd7oTPj5WSst5yG71qZ8V8ehnWpTP24j2cbwPW6PZ8QPcRAAweGo7Sy7bd5NLSfjNBYm8avk7sGArn4mW9b",
  "key26": "4RmvzgM6wMEKH5cAUUDwn164ndzvXVus16RJpy4G8XicAZaTX71jppg9kx154bP99nt5MFP386SnP5sLuVzBoZ5G",
  "key27": "5ZNT9nWUMHhjvKSWG31zoXEqUuiXmaqhr4Qpixhri5xzD4Yeju4Y2GGLe1dKA3dodSQhjuhLD4yFBt4tNuG9SXXP",
  "key28": "2EsMnWTfdThgZt9tjBGYjEnskmuaVj3hzSW9BfaEi6xb9qEssSYDqV9uahHhCyAyy39b2CzaH5HCdnmivhT8Yhay",
  "key29": "4iWJ5XAxsV9sGuh4aea8eDZu2aJ8UXikR8daB3aoPMQzFfCHTeaRnge8nhq1RP4VV8a7cGsKPQqUFa2DzwuqVgQy",
  "key30": "2gtdUXewBEpdbxejrHDfkt12jNpz2jTWDdgWQ9e89LKSpED1wpf1TauKKkM654XAWA787jPH2nPKkKLM77r9Vkp",
  "key31": "5Y3kZRXYDutK18EBtZCV2trvXrGMHAmjpVzMgwZ5xgqhcHshPKjw29NxKUvUsVbKFnp4ZgFu2bFxMAoDenBjt7iw",
  "key32": "53d2ABJun4udnNnco1tsgf6291ULADfm7C1RX5Zdn2BSNz2Kg9SBaJBcX3PakacaDSPjCG1qpnBLssJttueBhsFo",
  "key33": "8XR8NcfXY4p25cfQtnsgbiWn9sAxCE3LKxTZp263v3t6omnKAJ8G5FMdF5KtSZHz21qfoUR1byLdSF36EVu8sRK",
  "key34": "42VdGjFoPiAmWLhCLhGwowY9AmXAqhJyozXA1ZZdjkiLvX9S8TiQinqxVksVK726c6dPYB22ospmzZN8hRabdEYr",
  "key35": "37Deoe7uS7GGiC5gTVaoZgVL3PcNfnTjJDsa9FVAfoYM2UifbUySNPXFnAzWAgBcWxWXgkphzhdKgD41fvDwT7BU",
  "key36": "2wmwP4o8quY4deaU1jfzPY7KpUuiKwTp6nRafGTkfN4WN7BGoBH4yLkRDVMqEYwiSDxnATvkzrAZB1v1GoNoWSPq",
  "key37": "2Pn9dxcGvcdiRkUgcQNU5uUZMg3ZRbcJDsAdAH3cp87PiLPxQRGsU2Qj6nophhAqd9fK5Jzn2gWD53WNtiDmk625",
  "key38": "2DFPXGa5c2stWjDcU2tWNdSGrQvc3HR1MydXbeL6bfrG1PYV24SxXvJwaFsmLuif53ceHJLaYRnn3VPVBLPUh1z5",
  "key39": "45c7giPcMDExfqCMbqzpbA1KXFdYridNU14nwTqdpkNnPQy8NfDdCFhJCLhqmr4KGJsNXy4Tkemy1mtJDfJtXFWc",
  "key40": "5dMbrDjk5erKJ4zu3FgayggYHzhF1KUgY3bnFQms6h4LbzSyvXT5vDZRfsGbcTnETSN5uxbtHYP2Fc5p9YwjibsV",
  "key41": "32nJAK9xb9VNnfPSm3QSyG7hBYVNkTBEdnznxXGGeKHMqe18j54PWkfuvVaX4zsQ7ZSZr61mfX8MxKYWBMCCJoKm",
  "key42": "2AYMneLxfPH4qn7Y6XAjymAY5tw3RAitMcVcX2sNLbd1NHm2jfyuZWbuq49hyKFjHRaqsW5ZYZ2nwMGvSkETwBVU",
  "key43": "5PkLbuWGo7kiy3i5bMDo4FqxjeJL5qWEngG956HovcHHx2pTfnkJ3HePJBD5mH7dg1x3DMB3yy9SASoyvxHFMvHr"
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
