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
    "2TnCPFXE86YhX5dY4ct1zHBxQiL7qnA5Agmx2Q9yzms3DRg8dWYv55TMdnpKkoYz5FXPktaauijyLunPnbm1wgWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnLGuzT8kKa2aB2eSDWbSbtnXFYpPXfu2WnDDjQrT2KWQ9BeLt8kXjZB82em11pkHZSR2ErQWZ865nuWY7ZudbW",
  "key1": "muZvBqmncH2p47v4fYWbFMf4XSciK5LsTcCUrD5bz8TM7H4ncoRYHyZSvfjBQF5xnX2pZCfvv364MmagebPbtDF",
  "key2": "2oRXu64CcKkR18X9cMFmiy1kyY8qS39GQ9BAJgjbrqZ1JPAD95EJPxUEjYwDphyVwRXCJXFMETSaQRZGz6JvAEa7",
  "key3": "5eJvWzQvuSGfEU24JDsesmSzie6oLwKKwGCmMpUtgk4yoaT2mAoHy6x2sz9xKm9GeWNYkATQLNx5cCpwMipfVa9J",
  "key4": "2mu3rbTzLQs1iJWnLs1tHroFs4v6adVWop7U5hT6rfUrfC3C6z1X4WKcZo7TiKgm1aXsBGZkkJ6Psi6iaY113KKY",
  "key5": "4AHABjpJWXAADFUxt9G9ga76U94eCQ5zXs1GFDRZ2gG4Zde4YLKn7hXRvkFyxom93KFw2vBsQqL8r5wAcW4U8Xri",
  "key6": "4jXyUG6UQbM8v7gw57r3koeyHJoospz1Wye7BSj7xZXb5RNtaoCAr4LLyFHgsg4NXQSTQhBxxHHPbi8EhLjE4AQe",
  "key7": "33p6rXAWc7MnTzc4u84xUj5eDYJfEsGo2ckqapzhE2qRnyXJJkCdp69bhWAx5ZHF965BWzcFxSRYtZQzsMuRSXeJ",
  "key8": "5Qe4Dp8xJJSqsvvB9voLTFsBpW9mfaeDV1Xux9r8hYnSfAe4zKxFZRUNdKtThRqzFrTn5puCnDvfyzgU4P4Jpmix",
  "key9": "G2FdFRZeyEfNmhkrT6nycpUhmreuFUVRczBq5os9mph2tKqDuubWjetdAw2sxuPkfaxaMtMBibLskDwAx3m9f5B",
  "key10": "5NUXxTWXfrWS6V2vWU828P33kN3MXG3i6kasYEeqQM3uxLERorE4fYF3Hij6shbH1L8T65A8Xpx9jCvB86CSpSip",
  "key11": "23CbiUo4hFdnLSW3kSQJwtBEK38jjmmuy8UMpCevRXUHFNr6CLgiSvF7jKeJsfDuStbJFDzYxsP6c2qJsyd6D3ia",
  "key12": "oM3tqyzcEBFe23KtNYADRGT5qv1zAcHinyfW93hbZxfy5Uy9iSb3cEhW5S48TsTTio4xwBwQ5eLWbBZb6yqw4g6",
  "key13": "4ARD5Ba8oK5kkmF1RuDeqjrLxbTSH4vj3uQjFZwwmBdv8dvBCHaJCNvUYMiKY5P1jc7Ln73wkQvBvbDTCmZKr83W",
  "key14": "Mj8pCokGUGzsNB76KxmoH3E6nT9rhJNKBsi62ymgvjwbDdEHiSo2PRv1UB6uduBESEMF9QdTEwU3uPseaShuoCq",
  "key15": "28eLUSPH3Mc2naGw52Qt3GEGGuK2EmQGA9JnmeUhFs2BvoDb3oNDgkth9jWETm4t2Cv3suqYPsXvqBkCQLFh1LTt",
  "key16": "i445BNxU4tgB54fEkYyUWJL9wwqPoyBwr8WxeszsgLrqEkhGScnQUrzxwu8kMgy9sumrgoVhbLnXdJhL9xQBxKp",
  "key17": "36yi3mszFFxRdEvwzvjQHg7BBtMsit6gxHiXW5zvkqbiK5GvqzYXvSqfVQxh7NG8aiookkZweqjiorLZYeFiscSf",
  "key18": "5zrsfWiiQ9vrXQ23F6eumDvv8huwgtkNCLffGM9DVU2KhAUx9HT9GZVvaUB4592ND1rktGAiWw9F4JNcGosTTuRL",
  "key19": "3PwKJSHakgK3DEwXyarCJjgkyWbgc3b3gKAW5DFQ3B9s7JkKW2eUw2YkmwGAFhGPmpGMs874QERk7gAcHSXM2ezE",
  "key20": "4gPngmSwpvAxDwBwBbBgpcDbkkxfULaeEe6DfAEg6HYzykXzBHWD9bKoJrYBLirHWYNJ4A9Swh6fHU6yJyreW1Jx",
  "key21": "43WWxuAVx4jWtC86efXuM27nUJbdyAtWqHbcg5BSqz2ukzvUgsBVQ18wUJ2xZcRVWvLjVZaDEsZvrykdd6QCRGya",
  "key22": "233RmyqqEtAbjHGhBy4YA6PC7j6J65cZSVhEzKBiZr7V4GSHsuuypCsDAQ17QUnYpFAemG2BdWf39grJqzskAZbQ",
  "key23": "6YnWvMBPHP9Yt1BgNzN3kbM6X3SKreNksSUsQVmMK5LYpX8LomVCZNvgTTTYGhEMmWTjcMv5du5RbnoMUBfLXfF",
  "key24": "iaScyu6jLtbe5AJtkR2R1SxPWzBeYn7sYjhzep487FW5dYDvfNgAPPrDtkWcdXyv9LkvYdyMTJVGv5ehK2mn8Zp",
  "key25": "SGUndLWRrXfWu6FfwUpiPnPpDK8iywC6964zWShkw7Hmei62qeo8aqFrHJee6JeSTNQGgtG7FJPWa9UtbWjERk5",
  "key26": "39THiQYD5frqjdAMjYQnKMYkpd83EV2yyiMdxYrWgMbGjogoXpX2mzdCp8R2jT91QTWPcZkr9YCU76DWCdasCeia",
  "key27": "2roizhmCtvafjeVXH82MAN1vAuWLMH9FdV6863gNQNfChuWzVhsq6ZVCQbdmPWvnqxjabu4nfQ5XuSsotWbMWrJn",
  "key28": "5PEJPkRHoAMeVD87hXB9iPWBkuVrCoR1J6N4tfBDpxGLKAz7mHqSmxfwM3rFs4xoiygqX3XruRvx7Z5rgDF4YoxD",
  "key29": "3vm2WXhwDksLW5GDcKFPm5UeHycvRWZ1qbGAT4WeF4YE5gYzH1x2WMRg6J5LR3yAexrgTMLdGi51E7ovgqfwjaBB",
  "key30": "36DLE523y7iiFgSsgkVGrTRxYY5ngjWsevfuntrapN7NpkmJ38pPhHx2fY3RKfPt4QZwptzP9vsvi4jAS7LBV1MQ",
  "key31": "3kDDZ32MbdzwK1YzhyuHvQgFEWKGUn8fKj7jFrvJNpXGYCdfPf292puJUkWiMZt91Z8Vx9eyZwUkrypmjsyA5NND",
  "key32": "SrNTh7FAnLRRyajnuWgdehqqezLjkMMEzPd4NhFLcF3xMcqJu8miMMU5PVgubCVdYRkLq58rBRttN9tQyQudF5w",
  "key33": "3diyoyNm9veKNQkN1npCaP5pJjrMDVPtpvXKtLNuVicZiMAcfxM9R6b6BNBVagxtSAY97onAAyGqHNSoGqti6uCA",
  "key34": "3YgU4qkePjUY8C4N7afR8W95UiBVmhRXVFsgxXnFjCVVVsRAVUpGH956kFUxMekb1DLA1KKqoJgJq5ff2QDYxDmu",
  "key35": "5qiJkKFyBK1og5C2qnoV6pb7fpDk7YofnZwGA2e75H6oD3mDWnM5V9vMUWaW1ciQbyjbYywHHb716ahS3ZMBGJ62",
  "key36": "43cW3jRV5gMJGT6WM8V19YfYg3DzBYrJCVTZ1zhmxwePaBer64U2P6x22hUqoKZdMwAJBahcTYLfHzvonGMix9yQ",
  "key37": "mJjRyrNBavV3cP3gqoues3e7ZLgm3rRJaY18EyaVx9e6yHai8gjoqi4GAYLzeTkNpkwmcvJhtii9CkkdJrZEq5v",
  "key38": "4hz4sLtuoZtEhGtmWUfLd7tdvDkWF34STF9zM1B9zVU6AX9BuhYJciRz3hiKBudVtqzj6NPnbnxaqR3Z6YGAYpkV",
  "key39": "4mmYUQzcAeCYBFpwveAAUXVksFJEhDHkfLom4NBDXPpHShkhUC7NzoZhB58FXUBf9SkUSsanKDwCz3LPYuFrTb4z",
  "key40": "5c4ry5Kws4YU7wzBJAEQTJAtxSUzGad9YKmLdi42HkwkCUQheoDYYKEPLZtshbSPZwV1JtuK9ww9SUN5LDs1HY1N",
  "key41": "48vRi93HyBix66AuLFdaWBvBeiqqJHN4pGT9LgLrtjeMSjBfPvhx1XRy2Z3XHjF6b3NbeGe3tmjvR8p6MZ2NwfZ6",
  "key42": "3PQ7Vd752TqzthrhWpL9s9ZkVEhGvN4NnDZMafrZ1ouHsRcGz8ab7CmfFGvMHE95o9gLxiJq4Yy4h3NWxTqGiNJ",
  "key43": "3vNdwifHbdKCg98M1io2nfuYKgTkWj5K2X9wcYwCUPPzEnS2w8tNzdphqVUyKyYVNcN2QLQVzuSrnTWjSAW4t1eF",
  "key44": "66G5GKrVXuCT9mkzM5vscY5aUG3mmfLantYsofSy9fWmnKxHqaEwqoho6fm7yFapCqo27LsCjppZaSVduspMjzGY",
  "key45": "5mvmVNNbpS5cKA5Kjn6qxBRDYzgvXJrwuhBh7LtEdjeZWP5xPvVpvMpZFX5bg9t6zFGeZRBhQAZQYc7yfZCWLaeJ"
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
