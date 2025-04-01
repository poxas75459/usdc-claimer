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
    "5yTvBSLwzfYjNw5DNrtByLvHcWeZbWm3HtFnp5U15s2pUM4zpy2gWU7C5rhTH2iU6PheUc84yQpnwNA6nFrdkkzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yudk6Ynp7c1kXq1oc2LYLxnWN5kHzfKMoy7KqfkbXrbQRwJFznptHT2pAFCpDFnzBuo7xSCaSAQ7iLSfvR2wFCk",
  "key1": "4L6y937cF6hY5nZt2Eao8qAkxzyy6Urp1P8xFYRSSbvyCVmyVV34URG9Lo4ukqhVUj1mYLnzqG8LeqUNA7EVm3EM",
  "key2": "5b8tAtFHhycWomFHc3DGnghohVUXVwkw4ghBFwiVjhphmC2RJdEWd7Za8TQkP1PTub2YCqV1BKJrxawRWPZ15Jqp",
  "key3": "4pjPHW8Ffz4Vh4WQQ6bLWBc7USHEaFQBSG6bKBLRa7bSsmGS8vTDXGroteZjr6q1Mfy3BL55e9gJesLMULDFDJyB",
  "key4": "2d1xao45hJBub4rtTj1Z524xWy84gJTMc8gNhZxokJ6UdLtVxppUZH1AcRFJeeos6w88yGCPvt48PQpcK1NBB8KZ",
  "key5": "MxSgwX3t6vxBWC5dYJ5Krvz9s8Ctf6CwotsiDHeaHp7PKwpbaNDR58jeY6KNZNcFXu4Vz9ceuJHTQj51RebHp1X",
  "key6": "5z47z2Y7ZsfQJZijNLk3kcEa4w6sKKRv9xNhwRWXeJ6NGKXwtwrPHnLDXCWmrQx3vv5FUnXxHqYosQs1mnWF4FLk",
  "key7": "41fWAViym7VoAfhuUS5BWVA4wCt5S7uAVR8szt9B5LvFzt9hsYtBCwh8cUiUMVaphTemjP5FxBignGioX2rcZ2jN",
  "key8": "4mpxXcH5GWYuJVEPANV54hjHqmUo4yNRa32DV8mV2B4QSjWXrkjBzC3MuoZAQFX6GUsxMhJgymSXFpRychvyvF9x",
  "key9": "26U7UxVXczpjMPX3VT8KrkQmFgoz8Y8RuyH5uPtxSdR15TRjb1RL3MFYXwb76CcLGepuZVX4LyWsSpmDwKmSm5VY",
  "key10": "3DqWW2NSE61jUX4aHVAAFKvKYuwXxD4XeAqZSKAsKCRt4c9zAdFuonRn3BjXNF5UzM1ge1dY7vi4QGSEn8yD7HuK",
  "key11": "5wVRFvWJ5KKF1y3v8kkdknkvCYJiUaGnemopcMpimd5mmTkjxrEyf1pGN9oAJNvtzf5x5E8qsYGu82ccgWZ9cbdr",
  "key12": "3TXMCq7u3CbPryiwGtdH3dpVsuYGKuVHuravRHJUcYDLDATn3hm9Pp7wpH5MQ9Stco27N2MxcYFrTXBZ8oZKVnbk",
  "key13": "2ybsqbqbdGpfUR3uxh6fAukVm4JMLVAenaBimoNujauH9H1L4rfsrdV6YTTtu68LehJhmEBRnCqKUre8AoWd7LMA",
  "key14": "41n1wyeLrGSxHYtMamfndkCbYAi4P4sqZJu5CSpZBLZ44TYZLcpSiDzJRefB6cUyMzsp8gJVnnn5Sfuj1feLjeaN",
  "key15": "4r9j8gnvTFLWv6XmMtnz8fztjCHHrVAHcvbiV5xNruwcG9ZjP6AvPzu75eGBkr27YdMJsvXU2uvZutZn5HKEjWo1",
  "key16": "2oKcnAT9zn2zVp764Ri9yMsuNLoLkVcZ7SDvo153ACBpQdt5pUqkXvPVySMUKSvJttaCxmz6adXFQNUiBc3F7kA4",
  "key17": "2oVhCoTpaSQGDpgSKbzo4LpPWZKv1pBjHoY4FUKXcRL4ZwvCtADGwApkRWextDJdQwqPr963tumECzgYu58Duap4",
  "key18": "3TpAyL8H6QdDqnE4XababKu2y8cQyFQjJknTgYz7ipQYo3oCzzzKSSCJpZP8mRBA1dLqubD6FJPuGfM6hVvzTg28",
  "key19": "5zdVfeZbTYg8v2wmiXMgkyTmiXQFM6gPZScbf9ry8wVvXzXSsMKmJoZrMfGV1iwh4x3pwSqvPZGgWXyHQ2t98s8N",
  "key20": "4aMmWctrQZSAGMECtWfSis7mrD92vnNUd8Tps8DoLLtrT5MJHSpVEhSbzNBpjJXYkxpM2zEhKjKsKNJQ6NG2VnYk",
  "key21": "2KgcbMsNyHxF7iEm9maUP2PkUx4DjMT3xKwN67NfDWUw7LfHpGFHaYJaC7ki7XAixhfA35nhcPRK9af6j6fBFb3G",
  "key22": "67qqg8qjc5uEwJ5k4AuPVf8x3PRcv1nSKpyYDY4ZhgTGXigKiPdZFkjnYxR5xosrLMoxofsCBvMB2ZSDoKfUHt7P",
  "key23": "NbKoaTBTiGhr58UpmfuqfDXiWf75C6jqaXHFhtpukvCwLqSNuUjtczV1wEK9N15C5pLk1QGTV1nyzi3QL74oFNn",
  "key24": "a1PrdJ2WpEdhHG5eKasPxYPs6Vq7BhqVEh3iEKJo91SePCXByDB8EqbTWu7mr6H3qsVGGAAqDcDwZk3X9FiWoQW",
  "key25": "V2marKJDyLrpDJHFE6UqeY6jQA36JcY3pSKyeS3CT83MmX9RJ4UDkyFj2nwxhJo6AyVr5ZSCKR18kxbAobd4rEJ",
  "key26": "3BsELoezNTH2nwujrrbR6WDG5TTaKr8yxuT59YihLiyKJpAtw8ARAVphBtb1k2a3dY4NK7Zq7cWKVuoKFnM9T64w",
  "key27": "oxfSri3cDrWiAEXbppkUz8kqB4FXPNNc9bgNFWqp4iy9CX48H8Jn4bnuc4KfYUmUuLCc6YRQF7KG8izUEdKFXri",
  "key28": "5FJb75F1DDVQTvgw64tfC2Srq9sRdFLpgeGTEACfFNmJniF7GMyV7HDZBwMbdTf2zB45rHLFru3i5eJyGnJf7ENS",
  "key29": "4cE87WpRz33YZcMXRe3G5aLAmuGqzQj4d31oWJ9sgCX5sRhpxoDZsNSGs7SmaMkEUUe6Q4XAjzFyoLVgJiA46zGo",
  "key30": "2kMxxybaigCVsjZNn6YgpBm7ifR48sz3cqrE7GwybSqoYcZwJE4SGXWqBeHDaBRoRXJBatuyFeLJP2KfhKjmYFnV",
  "key31": "GEYsyQdnFJQVrF5ogjHRw41oArSoY9GGp7tFuWDpTsBCwpTYAfLecVsbLVb6evdHJ6eJw567ARZoVxUe55bFsxo",
  "key32": "3bWidtiqPUH12DGku81zoG5jEn1BgLHnQ8JuPzNzLWg6xVQZATZEwZRusht1PKjA1b6FJij6BpZkLwZE5SXgiMkZ",
  "key33": "4TGfyQMdkr5ZtNZigX6UgTGypRmD84dxtKeBoay3UeQNG2Lqnv5Lr2Yen6cQUqd2BH9kUQTS7qe1xxzXYRDG4mPX",
  "key34": "2U3EYVuDWDtNV99ehbrvqTmVBDjy3LmvPUvjB3WkW5vAg7rfyQqxbdHARSBZaqyTv4bHzKG3G3BZj34GVruweHrn",
  "key35": "4JSXgs3BsKzAPi452TUqw6xX5cKzPf98TpQ3ikJvbDr5sDeELGQKd8kue8FJqV9Gs6K2rPckXsPTcbbXBE58mmRF"
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
