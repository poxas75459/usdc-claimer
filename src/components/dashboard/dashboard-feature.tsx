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
    "2itRTBmbQNZSy8wZqCQduWyY5sdTgyPQbwdm6q2ZwvVNuQwJJVESxv8cjYqVmWmUFqZfNp7uPSBQhnRNibmP168"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "saPw7gcRJKsteJQXv2RMGChSqFL246Z7AVLTBjjzuTS2KYqHhqNztbSk3zQKA7pG8PXCD4ePbuvNBiSMoZxpT79",
  "key1": "5Rc5cF1Ph1G9WSMbeFoFbznEDBLeTGGb14DJNHtdm6HnN83KTUXwN8pApDHU9gzbEepHrcjwiWE775NkQQcA7Wfi",
  "key2": "5z32egutRCdfKnqJ91R6cZSwjBwrdF6XBN24vSVXYxRuhbfeD9u67in4pE1pRrDQdoprcdZgbqfSEb5117qhyg3H",
  "key3": "ZekLWcKymsbJvvRHRe1rKYGnVtjQexMN5gjryFwzjAe4vGRz6JKTC9TapRohs7n1V222MfBuWsonoHz2rijKYP7",
  "key4": "42xt4U5oQvhhp9C4ouckKPgNyk2DnkuJAZFytUh7CgnQNtn1WMRZnwZR7VZAfeFkccXUPSHHxbxMFFS2BFiA9RXr",
  "key5": "5CcidDFb6jzDMUG5JphTyFaUEdRZDLyerja8a53Rq7qB7G8J4ZbggkvQAWqu1o7bQpypwaR3JBk618HhdjhK8tZn",
  "key6": "E3px2RGp8A1tUsKz4kuB8sohrphDDz18ko8qz9urEabwqy2qdfTLsUiAfAfHstFkWJt21zgeV1wiGyCqKRavuGA",
  "key7": "55Tx3MeqZhcDQitzXBJcZH6DwXsfiUHNH4w2t5rRoWm9dvMusy5t9ZZgRLarh1nMfPwSKd8msyw1cfKwmVamS3qk",
  "key8": "36dbA1Y7NywehQBV6yqFHng9268cEtBAeZinHpqkmcK1XteqhXebqcysh2rLRk4trYHaHkx9frBrAX96BWkkmpYF",
  "key9": "4haMz2a5cy1LSAMAbZJy4cMGPLPXfdzBvQCtnQWayUwUjJUabrbbMJPfBoXyxn4YBFngbxDYWcFXLzQE5bxZyM17",
  "key10": "pkYNBGPEUCsTim6pAaczbnRQHvB56wVGJZSqjXxjiHKHtKpRHKwY6RnekHHB6aEDKAh1dUxexcMUtCy1bAqcFkg",
  "key11": "3iK1aP2JSGoDBzPykXvMzaxataaezDy2xTKz4JcFkXfdjgKKWu4Qfm9JhBUwB6o18tiGYVgp4pAFjKrSezCo79B1",
  "key12": "53WZvwQn2Tzsqhtt3LUgd17zd1yMDoedZrJipEmpQYj6mPWW2hGr8o1MKoWp1bVtS7pqe6YZftcnsmPfXe9Eh4XN",
  "key13": "6TWPKmQHwBRcYHJX9SHnrYy6z7PmvP7gGF19zFZ5zcAgt3oHp21CSxYYECUNeb8xogoTmMVsToCQCXB9SD1D5Yw",
  "key14": "4Xiyic946LPYJqfWcaG1v4ryvEvgpoqF3TDW8VtoeY7db2oucW21wtaufb6fdTNgeDXLXN77jW3bwXkm3cUyaTu4",
  "key15": "7DUMdJDJ7SJ63iuWFVVFV9cVkTkNo6gycu4aiU7UmrcsyaWuEDknspbijsTvARS9fYHbs6u1FjDj5d7TRquf9iX",
  "key16": "4YNkfhDeGbiAAfQDD9vx8WJ2jkc5SmQoSqzAitzGCUWH1GimRDCmifCEnQi1Dksx6mm2S6D22hm9iE1oEoN9Rumz",
  "key17": "5629iuAvhtXbBgYmyoSd4aSdBg3CyZaL26abBmMo7QCcdPn8AgLBbMD8yzfxxmAoaXKPHHQGuJNHxutqCgxD5tqw",
  "key18": "5jJLWpgUVFdQhhVUnFBYDp1mM6L2ZZwGZHNUaEUZiDaj3K8vr5UTPMDossj1n6aD5NS7U1GyaXT469zXpeew5NnN",
  "key19": "tM64uGzF2NcVVqAXLJDRNmz5iwWvNrLjCwbCiwe6aEy1TMrzhrZy8ncC5LmezgaZ2qa5bXKCvgEVWekrT4aoaRz",
  "key20": "4ywGQKpzFrCH2yu3vnbQct7zSMsyt1xyPeUHBxkNF7ZApKcPEUE4ptwHk9DoPHgw1PuC9JxWKzVAX1TfxQ2bkAqD",
  "key21": "38ZY9EvfooyY2w3DhU9aUsoovmjivs5wtMVrJhfU2BqJzMeZXCfhj8yGrFWyZ3NxpAtZdkvspRZXTP2VCsCdUfLT",
  "key22": "rYwHYpVakwECN4kNbcDFLMarnF8jpCmWYa5DXuSDxknjUimDsSWTYEr2ZZXjQa7GDJM9gV7PVC1qQHeH4D3iahu",
  "key23": "2dQzQXjh2axkqPBKDKyAjgSny5WVn2igtFxS1hXPg3ZizdUFcY3aNyq26DMtT2RgXnL14RqkYnRMvXWaRmHgtkLn",
  "key24": "3cWA5mJbZVqf61wonxhgAZXTT4FjsLF1vmAE4C6fikGQdNEnE7JBQf4uRK8HCJqtyrFpX8NcunaaaqHCxPe3iUfk",
  "key25": "557ZhuVsKCN5Y7HZioeshYSf3Dvn6Huqyp4q4PiemhWRHtNZQo7rhJ8m7aqo94RH4x99qjMSVHm5K87fftT5AxQk",
  "key26": "5XeTRZ3Yxj5b371iExsMkKTV9TXinLixYjo1coXsj3j1pkSYGE2psXHQGNKDi5Hm4epzd9fiXLXSS646wNwyFE9g",
  "key27": "5tWZ3zUhquT3FFYMprMQt5Ac8iTXdeNXrk5rHX44T3wZPhTQ7QQPQqNYPCFm7JRic1qFBELaB97zeLHv1tKmm4Ph",
  "key28": "TeVYhBhnuExsMVEaRTGmNuWES7WTmTG8LBpQuaEkwzSjPw2vvdQSzUNCoH2Ajk17n9KWxSwDfy99MLgkbNuW3vu",
  "key29": "3PN9gRjXPRMpUCWGuZQuSGPoRXRDrztmQ4RKnkxS2Dg6PmjVW99f7VQNvSLdQhADq2z3cFDkxVHMtho99BrfEjrr",
  "key30": "2daQztpTavjnC7mf8DjUQeRsYEGUbdtn7ej8x5DGsjTzMyseBhoVB4akDL132LQ2cpfnGFophyt5PtCNxqXAzoiY",
  "key31": "4kmrPEtyzsgM8aKitZSEjPXdQgKGEdmsjbVm4hVXEj3Uw1pHM39dUSmgeQYb9wEQ9bmAE8ymjWxzUbbQPWQntNjL",
  "key32": "2mZnkYVpGQ6QJoh2DmJ1iyS1b76vwVUhPTdTmKZgEoqPgm7jwNvrT7bUgDUxZ6XcX5KWb83x3qStg76ncjxYjBoK",
  "key33": "UqbDvN3KjqhdWQw8smVbrHEs9sMqsgAyexV3p4s9ECdBwkreSLvQNDMuYqxucZZUQn2xikCU8uTnSfBAEbCwD76",
  "key34": "2B7fTxch3ZDF8PEBboQQDe8YbS8nCtkuySEyNJQE6wcjc21isXYk4KhDa9Ruj5LDyeL1NQzSEyv5ntiUwd2zt6N",
  "key35": "5sgGXCwdD5HUTbH3RkLS2g4JQdmVYesX5NmnfWNMpFrTmG3d87MjUZzdTwF5TQZ2HYBVqnntuePeao5XLVzCcUDS",
  "key36": "2FFxb2fci2tREgb1F9bWkTTSZKKiTxNc81NarLrALjJC5uWf7QusQ4juhRV5fotu2rELXysBatgpHpxcWdsHH4fd"
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
