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
    "bxheyE72dhwxoPcxBnd82NBsELHwEVNX3D44vFiiwMz4zkV3LtsjgysaSPecjjUe2THBno3HivdHFKjUD4deCe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxSeWDVL33ihbPjGTrRc31T22FwaHc3rTwHfuZy3hA2ajmZubtyMKy2EujmmMhv9NU4JFRZoWKXiUa1oHp5mAni",
  "key1": "Wbf6sLXdJkXipKQh4CsQ6FUTbHbiRYXSntTbsfWSHefCd2v6mJQPAHKa4KsQ65kh8CeBBzEqkD1QdBru3cudr3X",
  "key2": "4vy48aT4JuomUDPt1SWQF5ZKeBUw7xjMQqRr8E92iFC1JUDHeX2zn5ksJvirQVnQ6SKDK9ivBbqRtMbDmxqBuwNf",
  "key3": "zWMV5Wk5kSE5SFkgPCkd24eA7BXACoveRPgBez1A4Q6YatmiwXqGDNu5o5kCd6ZgSoF4espmeBqvn6nv7aYG4gp",
  "key4": "2cNdkXo9Z4YEucCvpw48F4GuMDVKeKVcgjHjJnvfyySbMskjvRJTNGdheGy3RBSBTweWzJn81VbFaUtsJHd5cN3f",
  "key5": "42LFUszMJpftdqikezmDmSeyPyyajooQCWvH8E4sa15EueLupxL3DUufLhdBXbKaDf11VMVEebiQHePkAa3xWNsN",
  "key6": "61d7jNHaoutxPwR4Qtyb3jnhUr6WhPvXRiZ7GRhrqfraRHLejA59eWrZ1s6ZHdwuNtrX28zoZacwnS34Jyj9gsBt",
  "key7": "YWTyLXuxv8LnuAjyp5V2ADa5nag64ehLDWGxFK8h8Yyj8G43E8bXTq73v4dxUC2vZpvzH6aceJJSeLSdBbDfDxM",
  "key8": "3KV45Lt89671HLyWp8TxJr5BruXHgy4rCco8aS14BxpchGsah8oWKNxu7ob63qbJ3Zpg7Q9piMsqLqjuY7irKdYg",
  "key9": "xYP9U5s5a3QhhxB3qvC3qmZnH2wxJ2uSpRGtBt7EzdQULSj5G1JawD47r3Uq6kpGt7SEttjzFY5ZpiDYnTLmX48",
  "key10": "BaTe3tEuNDfMVXaSc2Peg3Y7q84GWy98ZnMtgy5ekaHR1ndRL4eSW6qGTDLvrU3bSLeAbxQ5sQFw8AMvAM8fUor",
  "key11": "21V9WMNYELPvX8wW77AjmjQHMXS2WzRnrSThMyTE8gQVABwKiVxTnA9KEHc9sANCX3VAJLvyf7GGg563qT5syQ64",
  "key12": "34AXSVvGZFdNs89G55DndBLAezpWudmwd88aeBpcNpj1ucMMTr4aruGp9tqPj8vMkpaXe2ZzFPPVgDsseBnrMLUk",
  "key13": "dKLh68FoETFuVgWuGZdQHSBqTdWDVJMGYv5EVhvmVPyAPKMoQi5aHpDf9wU8QToPKwReea7h8mhC7qXPXu93Zjf",
  "key14": "47xLVBg5CDsjQxdmxjhK9FrPjbUar17ffUAsRHxEpiQeYkVfvfJmbyHYGB9dE9UjBnYwAafstREz7DT9uNBRQT7w",
  "key15": "3UDnu8PyPUjpChhETPvV72q2zKnzkvFo12dksqEgqgGQiBPF8JXGKJqVg5HZpijpCzmuZoJngFPFAw2hJBzNVJ4B",
  "key16": "2CbWDhLce2QAZQmCX9z3Wuf9Ucb2fRQ4CyqL9cLiMB8ehieoJMCVrRLjJ2dhZrhbBQ3Kj59XCXqznBpTnMmHjq24",
  "key17": "VWpgoBtHWraCkxLcHEH5yq5T58SkxSA1bkCEH5hnATe9Cvx5XkUC1gpmfuVJdmYqpoe8sXFdfBmfzLKCDrCZ4x6",
  "key18": "3Rx25ecfBgwBffUTxkX7hfCJJxztdfVoxyyevAMD1WZQsz9aEG1bYmYzbaJxjJxFek8GdPadnEtbaHBV9LNp16ch",
  "key19": "3YeLYNsEpcQ9eY2ShVpptYSPdJLuwjyy95uvWDnSHkTXrsebgB94BL7X17AtcWbG2H91XcN52WWvhqTgCo3JZEZy",
  "key20": "5mPk93kQ1gRaZGpbCYqmRzJGeUo5rRZk4pT6ohRBc8diRxc7Gmr2HJeDLMxKjcxeaYbeRhA53hEtJuPqCdpsBGRe",
  "key21": "5Q9VrBuGVCjFxSv2T2a7ymUzxV1pnebsiMKtVN4kuqjXd9hHNyC4ajkpQKpHVkqzJhhh13TPeTuN6feKwHm9ip1k",
  "key22": "XZipk4kh1hChDvqmUAtPzweiZTyRuMUkRXveuuzuGpdsQhoj66sNy6k9jAoUteeb88tsBtgBACANf35dPK92pef",
  "key23": "35JurYNiFYEkriRdAZt94LeAAxftVYsxQnxbPWXzDRP9pZt4HuJQLLCdgwWfkd2RjeiRCB57rEmekuJJTBjV2hgB",
  "key24": "2KNSFJDx9fim9YguoyKtoD2ZVz1aejBQfKLMuSVHSdQENjMySKJhc1oYyzzeE9gko2yJSCHNtL29BKUPtaoNnyiN",
  "key25": "2Sreo4EwK1mokyBXPiF95nWCBisUENGG9TJBTZTDAM34okPjv7xJuysNLEmffhP34CFyLH9S4LQagy2VirEVMMgK",
  "key26": "bDvhJeQtk1an3qXboJHcxSEWtqfdtPn4TW3a8dYpZ4HJzbmiudjAaDpPCDtxW2UmSPMgYjXqPr8vN11Dq8iGcef",
  "key27": "ApM2arCLGTRUXYuPE3DX2gqQqJ7tbkNNg4TRvFaiDH19X1swrGKusfDrYtsELJWNk93mkEhdTS5bBnmxQtrL353",
  "key28": "3e6PTHDUrKeRWG5yS2khivHNSboGviq2dhczwSVrK7xW5bPDUincuc6174jGPx7tuCWBinptBxNa7bynsPTkTUu1",
  "key29": "5fM5Cdw1xSMBDN9CqqWoMbYRYemHAg3rPvxoNTpcQ4NbV7sSeLejJQxRcsELspZt8VSNjeiGspsVnu4pPzrgi41v",
  "key30": "4dRMvTf8nf5ngyh7XDhGE59xD7AsGcdmq7WuS2zxS14qcFddEwnMxy4FdW8yY73YjY7saq7274BGe9YXN9Qi7Fu",
  "key31": "65r4YPZADzVQKjW3GVqDfuKPwth42n6vMP5UDVkvRB4JswDHRTSeYaPeJw71gqWGm6RpnGJ4yBQNMaVVcsytXCcV",
  "key32": "4tZzp1QDssfPFpLKhobQd6SDR6bF4xbqDVFLtHbFf8jihgXKQGjx4DDjvVgyFUw6oeayFckQ5Q7LpKbD3o3LXPHe",
  "key33": "5rCFomtAU9MoE3jX5vMzx81EHyNE7gxr7bKkXssvATw8YXbYHEEfdumnGh1PEM54QUWtPLzZkvskmM7H3QsSMMn2",
  "key34": "5LCsCXNcw6pWdf7r7NZ5WvBebCair2X1hYYqbHQ6VxhAkgtHDeuAhwvXgMv1uPBCgdcouU2gRTtp1ohwFUJvwgEz",
  "key35": "28AsR8GE65dS2XkPxT1nqEFVttP7A19EipZd3boFQ6ZA45a42N2T1E4AMZvPzhffoaXuLQzrD1HgeMKWxXzeLpHp",
  "key36": "2kN6NvWkb9t7yFK6ogjnowJ61JPSnpuTKNvbxn8rAumqjqMvMBRceVJhFERg7V6uFHkQD6xpec3JdMNydJEMttZY",
  "key37": "TsjK3n7coNERiju3rTDjBhUTXTgRChXjEA5xhyy2NFrTXVtX64tdPxULupovkwYXQp4NhBT5XT7VdWHGzX1NZ1P",
  "key38": "5ebzZkPDLbSzVLdEMHxu8M7MoCmRYSvP18dimNtH8qUK9TP2LAZA66AVaQn7a5dYmDjHgcinBfKw5YfNmhGSeXgR",
  "key39": "3iHw5PkfFenaH3X5YDiED2N5cXqTTsiTpZKNgArqpgaF9Mnb2LNtHfYJ2AHuwmMSRYST1q5gNpLKyAh6GG2a1fH",
  "key40": "4Sp6f67eZkjJV6ZqtciVVCJ9d1n8Ti5vfaoZNGM2mJVaC7xXTMyaKEyioSWbKQXHidicWPXwp1uPUyLQ5qHQ46Pv",
  "key41": "4N36xhF7X2t8qAJs2m7ZL3q8evCF64GcYi4tXga4y2mdxVALMwJ3U2RRNnzg4mSG1bk18sytqsiJWX5L7gRXbT43"
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
