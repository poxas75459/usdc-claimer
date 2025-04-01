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
    "2zMGofm53w5CAqhCbNH8xV1sqhUg4shCb9WNYg2KE6wSsXAj1Ksp75PV44sBKrpth6nXj2PLELjtjhVvXia4RYmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3dVKUq3TWMzyurQ8XHqqCbf8ADZGveCBJdRi74pVNHAzqtironKCEupsCu2ZBuRGBLTsSEatYoQT6SmbRyPg9w",
  "key1": "35cXgeENCicrWUivh9YTzRzUURsFt7JgqPk8Gv8NJKHnuSsTeYnWLrDu93sMK9d5zsTrN1b3h3jkS3EtCXYr8dnk",
  "key2": "4uvrRoKhU7Nt1cNJeNuSVY7Znq1UwRHrCUJDjKGbTatoY9RhAzyEpiYwCZkdY8tGREmi6Mp4m6R356FgrYX8Sjs3",
  "key3": "4kPtrjeByZM3K2mWcKEAtsXyk4NXSMS4awXKSVhwKR8F7wwck9zBGZuyd7UHeNCRhPZpdHfJmYExiEdpt8dRr1Yy",
  "key4": "44hba3HBarNbwcZ3MTkbsBDWjj8BP9QcyxfdyrDQstv8p9xdN4CizCq5cr2xBFCJGBb6NjFi31qZE7zWQKpcbpSt",
  "key5": "KviNMGYJkDaGbymFJp5z77orNVaTkeJjGh1n3isgMB56qU9UbcVnQ2kaKgkskbrSfiFnFQSKSfZeCUusaUS7uwD",
  "key6": "34GcypqT8msqJ2ygtUJxC8CmXwGMwNto9fynSUGEBLdD8GafpXJmArbkHepnVNSy5vjcQMPDFkCTcPSmhyUTeU4X",
  "key7": "4n7rqm5yXJpue9c2KvK7MgXA9oMgXSXyQUAvYebBey1ydYJC2FJgR3zT8uTqzQASiXJkcgZtQDvnzCXmwDceMNyj",
  "key8": "2Ro7Kn4Qxpa5sMKNT7kdFPZvt6ATRrrvenSTdXgyLUdrgczHYqgd8HJ1LvD6D8SEVmRuF4PuccyyY4HKyaA2TrHz",
  "key9": "2bKFf2oNYhXFFUFNJBd1MpH8VeYxNF65TKH5fG6dduEko3WSbnZ58WQDrCYh4vsAvZPHJcqTWcpgKxo5K6HzH1Du",
  "key10": "RSHRctazV8TyGerCaKMuJyDf1JJuzsnEVBngLCEmEmYuzXzH8AWv8ACsDrZ8NavjYJEzQquqWphXzxyHR59hM8p",
  "key11": "5u6dftnPEH3gxp2ks35yuoJiUVitWhgZxgSjvC98g7eYymthBK6wVN8SiYZT7eDVCSyvXQrKcQdVDcE1Je6Rj1aL",
  "key12": "5f412Wzkdtx7gCjWa2hVGrweXEVwnfoTe4Nvbst96CTLoqEpFqPeahWkcNoBgq3wQbZDUEvhwaRwfeAvVtUCGu3s",
  "key13": "4WZjnkyzeDAPxFkAAYMmtBpVGLhTXqMATrU7x45v68gsZY6L3yYFGgcKaArHj1srwgEyzrHw29dLA6NUgtzDTc1B",
  "key14": "1ZhafvT2HFJttJ3uCVnNehRuUuboMy5pK4uPbcj36c5GK7YcQqq5HhnzxMFboJWnCiTyeTc7Ns8dpASt4JeRbfT",
  "key15": "4uYAKnSxLQGGJqkseDnkaitRWqr2HC36RYJWEchhR5AvgoD83RdHRkKcf1ZGNm4RiDYkoJ7zP32bqSAKzrtj7njV",
  "key16": "kW3KgPxFUac8M1eZG54MXA1G2uiGJfYxKEnX4vJVKXjq4jUBe3VoGmuG9rJea1J8BoHgkESvbapdgGCVb1zkgVA",
  "key17": "2gBwuMGWpi4kjzPskZfKK6zi8PeMmCftUWLevvvJbPP9iWUxFfqPLGJoXfpmKzzmZtVLegiRCTgtatd6aMRd8Wn3",
  "key18": "5aXQpDV73GQGG9rMKJxZSJTxvwj8c9bwV27iJEzTm65eRV7YpbngCgdi6RmhGHh1goeLL8uw4NfzfWZvdr3NrDQv",
  "key19": "3iHDXxekHNQJtUaHGeNebYzpedxwRii7jtiwzNqQ2tKGyKBKz5mCgF7A6fTr9PggqCPoePwysfwqF7prB4ssCJfY",
  "key20": "2pMVGV8vrYD6foWwSXyUasiuavYm841W9vJfLqiK4Tkv4irbSvriD2qrUkFYs1YtKDFXPA6uaUsXG2jhUcq7j4D1",
  "key21": "7XwKd9bPvzmvZNw5bdpxbrn6QKdfFBmwV2mReJTvoP4pnezzf1r9JyEiEst5Hm539DzTQ8eQikmd4NpvWMhgMUB",
  "key22": "2Ur1NSEg2BVFJi79FFAtf9cJHVRCnUhe4oYfM4NYtiDkKs5QShh9jSrN4gVCTYsP8b64RmXhi43bfiabjt6G2eLj",
  "key23": "zU6Dn1gc2Y1ES2vBL94JdVN5wNgRA3y5shuckVPCpbN5zbfQCZjZii6EMbsT8nzajBGw3Qikcrm7g6J8wqqSsn9",
  "key24": "4QVqpu7tk4y4mHVWaXDFh58Km31Kpf5wnA1C6mbnSHfQygUrdWtBfGAk4Qn2491VZx3qyikpRHJEpn7obcFGUD63",
  "key25": "4KWJnuEQZuza1e3WveFtxRHoH7khZACQVV6cLiAWDaqt8Ed6QTL9ZFyjspFZP12yGfXmDtdBG8MY1xuxoRT9FJvW",
  "key26": "bDBEHk5cxJczEhfquMUScjwgGbcebd2JYSTSZmttiy7xBmfxvAyUhvX8ztpTcWZJpVfQwKtJqr399u3CYa3rkEY",
  "key27": "2g4BTt4tgBkkbHBUyYB665BP4UiMMFiuGJ2UuG4cf8PDAUvzLyeKxCqE4iyYHKh4xbLRYgx2msFL38pKPw2GCHAs",
  "key28": "5NJ2rMjEgTgm2WqH8RJwT5Vf8MjF8FmQc72TqBs9kEUfeCsiYtEB7RkruRL62nbuCc5ACFZGv1mh85FKHkHJfjUo",
  "key29": "2KighzJuqRbrNeu2dvjKYgFTjvkanXAUVFE5fPhAsiJzcXGz7WqBV3csinBYZctdP4YXc8Ywi1b84nU4TR81DJoL",
  "key30": "5HGxVNGaqPAgprEejFPDLBM5kXTa832RYXa7su6dbb2fkHyZnpJW5L1qfriVPzNbdaGLedRyMr2HynTHr19LhLiJ",
  "key31": "3xw6oRjYKmNecamjsMrEQ6Y68GedBzJBFud53cDPpK6Wzu2UpDk8fqwWAat5CzcViJCEtQZSYE3dKd5aGkGqKGm7",
  "key32": "4j1d6usTwyw4ny5Z7ig8rmfKXB3wo5dtiD9X9dtuXtNCtjtX1pC3gHU5PuCSkefWz1xyeoHSjHNz1n4guhRkaDV3",
  "key33": "4vB1upyD1FAxXq7xfdwn8XBQRim2xeqhrfspGyyChsSyz17qnGNPzN9im8xUQnHJyyXzygjgQeKEQPrvqxVDsHuL",
  "key34": "2YfAJseEkLCS9t4bAtmiG7yUM5bLPhyk5NSm46W7fZbPFea4nbPAgyjcu18TRcHLdXMPo5nmQCn4ZBMgB4gwGdSX",
  "key35": "5hxDU9C2gbJdSCVMes6Lk7d2xsxfpgRiUwd7dHidEuCiiDbrtEaPHTxx39uCcJmq9fQHjmsBDdy8U5ZM2j8AoJTw",
  "key36": "45KhVj5sQjVn1tCzghnJiB14ZeuVpnKqYcTBEeQLmd8yog6CR9mC6ixgJgP1ZmMZUzzpH7AGynyxpPLg7PRJzLnY",
  "key37": "5j5JmGziTz8tCbsgLPFPwnt5t2NLWREhUczYD3A6jQ1pxkWDoCzCAd9sYwvBnCEgJrz5KWAr7iar2RB6PNjMFQK7",
  "key38": "3H9cNjE9JRPZwaWVaGxYwwe8UaMY8wN2jCWCYUJeugMLy6JNv3BNaHvsbkQVvSycQBhkYevHCyKqpXUotQmMzJm8",
  "key39": "2kd2nBmrwSojCQMcatjxgkoRR1xFEBDL5qyWbpTDQV36h4ctXUbpiKgTDL2fw9Yvddyy1TqhG3W8ibgRAe8BVzk6",
  "key40": "kaw1XbaSqAo4F1DmiojayGQUpavqyhPGvqH7hLA27hQqrambfy5RtKJzJJszTNU9UMjz8w48iVTvQPRGfQfG735",
  "key41": "5KzxNQZXGq4ifh8dVPej5FgkGZSWuLa77eFX7DepnKbu3D4LBqxTygW7aXyftYQBoU5CcokXFg5i2bQgk7JqZ7AR",
  "key42": "5XN4p1g1Z1fVCvSV67bKqbS2owvJ54xWcELrmBseYdBavY58qoVJcKNo3iZc3akG9YC5TcdUd7TLAVKN9QdwcriU",
  "key43": "4ysU9WMdWPS1qxdjAZJqqV2SBGh2fFJYVXodAkX5QBL1fwnW51QLgnZXH3o55NuZenGfkZp3JZFPYz1j7iaY1xgV",
  "key44": "52GvxwZZtbddShnaS96kNp3EbtqZCKCDMevuVTKHFRU9Fm1FE6eFPXJqRXeZaRdNZN8XPzME5DxcdTjMwrFeFw9S",
  "key45": "2QpBxAcXtwHJ32Gxqk82ELzkkaESHeHQTPSRRuV1mdrcWAynZ8c6aWdU5murNKvn9QVEC9on5TRjeo1GWCnAfcW6",
  "key46": "5tcKz6vsmnpdki6Dh9SPZyfAABdEHa8EYFwYeUxnbFqFPEEPh7x7WZX1GD32J2sp7U6XqkrqZAVLxHpCapnV9NHo"
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
