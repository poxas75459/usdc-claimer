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
    "3csy2XkmQkoaUwxYzuWUAGP1W6wyYMkPw6oFkjRShEKQ55E41ehnYwQESebwWFMVPMoFsKyVPYVHn3n6YgaVscGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pwXarvUiivyq9tVKpQX8q9jcUe53jeoaQAF2Kvky53BGwtNcS49ek4L3sjeFSeMwtuEfo3GzG2w3DEGqAY6aPmV",
  "key1": "4Dn9oZWwgQXvoxqbot3XFGhM5FkHG38UKKdirq76pmzuUxr4oWjeVvcM5MNWqk4ewRjckEgzaAUbHJtXb9rgUHtR",
  "key2": "4qKEoSyduaW3B3agJ8Se1x76WB687ZkYspVTYHcatd5J4bomAyZH2muXxdh4gETf1Ac5UkqQWPTnz35cG556GwYE",
  "key3": "5oMrQvzdU4yb72QNvYeRuPAVYYgCTvDhydqfHxWDokZnovPaQk1h7E276DPjycqsHSPB8FobS5sqZ4rsPcf5zFMD",
  "key4": "2vV2FzaxiekNbTT4GmmF2vViGV5Mwqs7eYy6PPnW6RBDvSg3kBSSwT5WLdnXHbUSWrDiV8oGveKGn2UHN4oJkdvW",
  "key5": "G1He7BV6fxGDLAiwDnDNEtfS4QnJD2nWeRZx6885N32bo57SY1C4JfWJYqjfLaGPh5jo2jx4cuZGi7AP7rhELn9",
  "key6": "gUtUKcGeveNxpacwbFXswLJUrdmkTPjfe9TzEz4z3QBLbNcK3ETVT4aLqSTZszaaTM37vx4TdMpNqmff7enuDQR",
  "key7": "4DN6jXGzu8tb3CxJYCV7zoydVWDQ1MWr3MLcsooo1cbWEJyscakfFSMwFtFsnCpVy43UJsMzgtTfdHG1zd7NqHbz",
  "key8": "3D8g8VxxUQM8y2FtCymSQfhatQbqEk3FkZU6nSsACEpYwWEGZ1u7uhrgFGkgVsARxJzV5FzSCd1XRFMGc43aq5HR",
  "key9": "2Rj98jmikHTkxGQr9BcywXq63yMnWUks3UGorGKkyrPS653yJAHfde55nQ3ovjpiDH3st4gPSz99Yy8CZY32iTTe",
  "key10": "2QBK2dW7sX1qboFT2ejFCG8VrkTNgCRNWu6SWCJ5CVi63RBGV3ZogZQ3mUbEycvzn1updyXYqaXkrUdjtMQu9yHi",
  "key11": "3PkgnUvL8shfsuzaoxN2xZ4zkCij8PZ524WvnSMKmp3PKACjXy7JaCyM1nVpbjGRwhdGfsNiHCTyarahsgNLViA8",
  "key12": "4P7XZY96EXWN7UuzBDJVTTUm8dvBULZHbNab4bF8M4mQwADWj7PTZN4Nw4D7N3sLs3mZaMkhm9e2dqGpRsSsGtyk",
  "key13": "4u3Dyy4mCcEB7spYKRuTFJ9EqhRv1vCoabngUpbuxvQQLxsxg5XQWBVJa79cArFxJG1UY7drZAtagv6XG7aZLwD8",
  "key14": "4gnotWyXPR9pLNV2pptnVmwo1bvckd37PHzN8jGESshcs78HPL9o265xnRXaU5AxfsQgD9K9gNm5PZYXXSQcMZ6N",
  "key15": "bv6tb6k4vzKnp2L5bfBNAJBqLY37Nvjnj1UzZpKo726caw7ihmkY8hqTeD69wfAnS9J9Cow1T7SuGXM6BuXjBLd",
  "key16": "4N7kF53UCoJaLYfsZG3WHh9TouoaVev6jx9xrKmKnHG4Hk9VVyLYydQZiWuhvHs1rCD8aFnsm8fGt1ZV5HTkqKCp",
  "key17": "x9Ct6f9ZwvKmAtyRrNVa1GGRbTUAaPsBNew7f17YsobUMycVsk6Bb6CiHtjgw2Y8DfoQXeZGhhJXt7Qq3akrhFn",
  "key18": "zUQ68wW8nyiNisrKtjL8ThF4S1aat5AWSFJ5wE1jS17xJ1CuaMhShRNzhzEV4cWPyZXBs7zhaQjpPkV5HstbBUL",
  "key19": "3Stc4JZRqCa7fBwcn4vy8SRFEBtMHTGqLRzWotuqfTx8BjfY4Ki23LoEkqLAo1RBVsLj779QuRe1EgAaBRwmxvcb",
  "key20": "4AtZXPe752LA53AoV7St313nME7U8Kc5jQXFrmyQFRzrAvJktUD3A6kvaHZTiBE7rggxDkQZyVS3RZAW2xfQVohn",
  "key21": "4F26YGnEJfbnSM2ziZGgXTLhfDUNJw77JdAii5iBA5d3vgk3TAqbkj6ykFZpRSctXFZaRAJLi8tJcaJGsgNL8aYk",
  "key22": "5QhvQppf6TXUssvJoyC4bgWKEHRQHRuXpxowD6EAMu4eGHX1yUUv6wGEQ4DYE3iSfd6TNFC5vvh2DzzbewinS8og",
  "key23": "HMXJaT6KraNz2e7g9FWcUKquSfBoQzuHSNZWSfSVi1csvpm5ZDBQcikqN5gLYrMFd3yVf8mtYpbj8t6RDvXSLzP",
  "key24": "3UvvYxk46DQenN4NJGkPeXW74NxTogDCv5TdMAKdyb26dgLj4msbpMpGDuXp41qu22Ai8CyMaz1UYGYbtexoURWQ",
  "key25": "4eQ3WR7jFACFNNuvbghSSLooErbEcixcr6phSh9QuJAhX2Zg3JSfd54cxwVd5YD9iTEb9eY66xpHjq5dGf6stS9N",
  "key26": "2gqbZRSxRFry8EuTP4Tm2qU8B1g1gKJNRoYsm8EEVysAEoE1cDxq3AZm5y2EY5tvdqrYnkH8qR5BK4Rt7wn5YPAR",
  "key27": "3xhGiURG859YWFuiYofaPNmXVF2c5VfbokmLap5wBC74hri3vjuAMMwZA8AYtqB6YxbodzeW6EPVmuGKZi5ei55r",
  "key28": "58pkT9SKc7A6T6wEiAyKd39k59r2y5GyfFmq85JLpb4Fp5XvkBVgbv36idS8Mwnd4kxkE7czKf1j2xsiJLKbrUhk",
  "key29": "39wRXuJCK7cWGbQZW4kmseRpWFpHQaRQp9NqVeQyxoXPfXWSS8bVnocBpS9FH5bNR9geve5EMNcCCNi9PyTCnzh1",
  "key30": "5UmBEiNuQNjAvhs3rGSwm4GzbFzcGoPQF31bjiLGU8yanLzTjotrv2oKhe6gESZj1qKU4vsV8PiwTkcnC6F1DqKc",
  "key31": "5ma7UY6NvThuUDjUZJxZgjeSQeyhKkYiMfPe4kkcoNw3EJb7xqr9kjXmPJ45hEHmTWnETtfJtNwP1MUj8mqR2CgX",
  "key32": "2krFG9VaotbLxp6yNWPbbbMftKxQ7w6djXYjtEFe21NARGtNVDQWWM1xr8cACXBQqYyEez1c4WRthoWKijepbdSg",
  "key33": "2FQuRgGbzeAqv1JpVohiiuxnF86HNSYfjGbZJrCKwvkaRvD8Gg6Z776Bd5WHdZoG1hPvYZCW2987x7rWjN69Boga",
  "key34": "dgBPCEWk6SpAMvQbqnPe4LZqrYfRpXtBpof8gYmVxAttMLeZ2QZEydEmnjntf1onc8tJCFtW7erdZ33HRJJszGr",
  "key35": "3JuHqhP8Mye6axh1bU968TGpeG8eTYsAHCrRrarepKZiwjdMTXnRTmwDcYwkuo1iubcAYEKEwKkmPNAA7J4kpTu3",
  "key36": "LnkzonKZ43SUotMEv6aQHkYkynbYRyNZ2s1QG8J9eeos1WBRnMHrFEJH6GETuCPfQzYTnyi3QKxqyauZA2dzQ5i",
  "key37": "5No9nNL5srYkdAjYnZUM4fAS1cJRUoqHstNb5YogKSjrC2yKzWMWaRUPPcvraiPAedwoS2xLLwX143EecMhd5ea7",
  "key38": "VgfYLvxzMZcxSBRZLTAWJHnTN2CGsrETuXQAWeSFc4dv3dN5p18KN46FoUFLV9D1icxDToxKCUurbrRAnDR6XnA",
  "key39": "3Qs7nT3pgQW58vymMdonkSrbWcJtaJQ1AFkWVunBvGZ5zNHYkMNEhyxsitwLsxEmT8FUCsoaQWjndmfwh1ns2rCq",
  "key40": "NpfSUFovyyVTbAEG8p2NYuu4KDtfpdUQReLKdqSCUWnmreiDwwDQ9oMwwQBDxeqFqmY44RiU2c1qAcy8J6rrg4F",
  "key41": "2MTGpEnw7w6CJpq9wezbXv7in85tpVs835VuWCHW8j6uE1zUhRFqXwQ4FV4pk5LdrQiJM4kdDMJmEMKGaz8EBqBh",
  "key42": "52QMNXfDyjHVxknUiYTWgJbKzamCLm5k2RF6H5jp7GGe2f61fEttPCF6J845X5FZYSDPn2PkfyWfVJ2LQH43fdJF",
  "key43": "2SrdYzV7ANXoTLJvXVZ6Tiw1nFUM5wYU8qfTR2aRcASFcT87RbCbtc8W44Cc85PKeooBe81MfEU1j3HegzCY7h1B",
  "key44": "MW73g3xuAdYff2bZjY6e7GM6BuWcARtv6oGswEEn3h3nzZpLvb23yeuCQucHURqRupyzWv7FyMjmt9HSt4rYFMQ",
  "key45": "YhVxTn7KnE7hexS4FxVcCb7v6H6HSKpuQBrFRmX4edYmFg7Qc6rkg7vmpy9n5GNozUFcJyR2YMknQHdE7pBuFY6"
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
