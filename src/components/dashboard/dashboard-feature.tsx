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
    "3droonpTWxX1uCE2zdyvNyF7DgyKYWwCJXWQWWQ5bud8sbBX1WCrFV1QNmJ8FRWf6PEXvZDjbGVArqx5U7PRwt9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZ42oBttqb2J8KSuJXznpirXaaGXE8qFHxn8w4qchHesoApKR4hu5Gj5y7X9gZrfijKtsJw45gyy5xcrkSDXV4K",
  "key1": "2iHS5twzDwshZaxYGrdG7pXBWLJUv1gMMY8xVMi7oDMZ15yCKLHGUawV2y9s1aQZXV1vFQ3VK5iC5pARfRxVXysJ",
  "key2": "2Hq4pEzcvqGMxVHj6AuzQatNCM6rxNCsCcuMgbeBhqSQLubMfDEepWztUEsrb1bXkAr8WVkjrMZooUw7PU7g85rV",
  "key3": "4fzyBUsYYkN2VD5xanP3gNcsNtW1cfSFBhZGUWYjijKfyVaFjs9xAXaCotcnnDs5WG7qiy3a95Dg6CFwGXRNSwi1",
  "key4": "puiK4NMqjw6ybYGqo9SHnaos9Aiv7pYE9QcBKoZ6dfnmh9CmHSBgJqqPuusBzQPUCCUWfXkY8St9EuzMGfmwts7",
  "key5": "5dyDGWd1GwwpaSMYxbSxRt6yrGtVPjSzeTKzvWzck15tnpeZv4nhgD9xrB879YdsWiMgEv2Z5QqGAzbE1FJj7YRe",
  "key6": "5mqWYhJk1WbVxLpbN1scAQXqEHwHPZy3vf8JdzKYKSXmUi1bfsQKxxWKLcXqxejB4J7pZK6J3LxrVniPq2m95CG4",
  "key7": "3nPdtd8r4imAKPWGVwEJUoKyzq7dLDQzSjMX67rphA5sHDqrfVPdhxeqRURjKiLgoFpTPowyouCnPJPNwHyzZy4J",
  "key8": "3WXtngKb31WdhaSmpemgnYJzBZBzUuwWrnQVPoas8EaEUNXSMaUtUAQnwWynmEdE12ZgTgpjXfh4J3CEdELhQLKR",
  "key9": "2HcvbgxrS8GbN3XmnXSbyabwAsSpgdWsABMrXnioVBgTZcdCZrvxo7nLjfMJ6JQiZfLcDdiRNY5nLszJGctQSZGe",
  "key10": "oS3jNq3BVDwawdY1GXtnpVJYnTdyLt4AvyAuE72JfF3BQf2bMhzmuiZrjCTYq84uzThE6nJza3hcK5fCWwyCFpc",
  "key11": "3gD1dGWRBWAKPVe3jHfybmhRwgFRddYXdx4aD4Podw5oTyhzBfQkjHkDYdcSQaeQJcxEdkAYaSfPodADVzyh7KcW",
  "key12": "Ldkaumuia9m6Ud5oydeMTjvxDUmYNfptvp4ZWxBqEhqjLv6BRziXLazRpXUk36PTLuDLJCseEXgjxz8m4F1c8Sc",
  "key13": "5j5N1kpuc5wziW8Lv3rYSu5jkaEXFjE8zuExMkdgy6srFw68bVpzBGEhDcbnotgjq6iqDUaSwaM1fSyoT6Ru4C2W",
  "key14": "2AuwiTJKZjpBDkUdbWq9ZXPkAonoYj94yCYmbeyFJsKFGo4aEM8bemZBzk5JCkZSMjNxgDWe4JVtQN3v9SZFSJSH",
  "key15": "2KpZXsBVkGxjkb5xyFQeHe24rFqw6RKA6EqhPjYrbPKoz3JiVq3n728hq3hUUAZvjU4CVh8LAqudRckKYLEUfzjc",
  "key16": "31G1dK7Q9GAY4eSopCZuDbcvjkxK68TPRT6iXtEV5WH1Q5xhLgSB7oEFb865qg3WZt1W7EQHbpPipivv19CdeqsT",
  "key17": "3CVsLvgJftN5pBmjsLfmLLog6Ac5crMahxnAQrfFCbZ52wrKqapWMQzzrEJxSE5Y4smez5CKzXZzxnyASaYkzSCY",
  "key18": "2ggLTNbStz3MnVJMr7S9E8oQLW7YCrmBeUbSVdf5YWHmN1TvMTQm71C6MqvCvXoCPwvbpVjyyUNGDYU2WEsfKE6B",
  "key19": "5CBUaiCxTW3KzhRqZ199KhgZgFP7qy1Vz5zK4k9SZsmorefwcDSE9bEHX5H5QCoJLJ3uVv97hNv1j1MUYVm79vyE",
  "key20": "3oAupLiHjmD7JmzpPVmn627mSmarbtptVNxnLoDPggBh9U2shLqjQ9PXfTP3yajRqNfdZ3qVwZ3gNrAuXYjcASFH",
  "key21": "4jMUTKrKdrYZUk14WaACywMhBLdjfro2tnTCKrkgDfgMVKVvcge2X1v2j9YcPKtEifrED3gDnCV2chtZ3TiUH1iF",
  "key22": "4LpmGYKaKuFqEXvuCUKBHqbJYweeapvgqufBZViRrmUT5f9U19H3GHEgeVvkmMY1f4jeTfENtMz43L7BtHHBB6xy",
  "key23": "2fJzNP1zht33EMNwiJZNb7gA2yrNt9byZDhw1esD3ENXFYcFn51dN486mGgYuDyt31X6PnhDJjhEWTY1rcbvB7r2",
  "key24": "6611ibprWUxwjuWyzRrLoGtZwpY9Zd6TtrXVsejGKA1jEFCtJWabpsfR8NEKTAru4Ycxoh9SyXVRjMZocbCWzx8M",
  "key25": "2k5NHszHfsyw8cTei4yvQurVEinENJhZoFz4MDNTwvAnjBN7FPqs7Q2Me8S6D39tWMQ7NNwR58tkuRe4KrqWGBuf",
  "key26": "3cUtNRhjwJgPzQWbt6ivWQpZiFCpV2frFdKLyiaAA55aRTAMxyoyDLnFxieR1ZJ4NkNhZa9Gyzg2jX2td1Y4HbbK",
  "key27": "4fms62mujVfahhW8815yr9JHPV67XZYJDmh3AAkACSuTXEZLer6wX6u89MS496ThGYLRsEAvFiZ7Kn3Ck3kaSyKk",
  "key28": "36NgqpLiLyELwD2dSLCCS1sV9aFSAePbRkHzk1nRr2Nnk48h3gApv7MB8A2QBcNpUtz8gobyWemi5T4pn3tw8zMt",
  "key29": "HyMweBXXwFUuLqkAejvQcdob4AdfmTFxe26Fo2wPFRWRmxTBFoSc7jqtyqStqcsVyD7zwn4s52UWzhm9YtXLwLv",
  "key30": "3GWpZrCyRvczKjyxeXxsWPjUBiDqrLEXVgL7Ri6r6SMUKG8cMTfqZE8ny1NVEj7r6bEyMN8oXJyvqTwjE9AotPWD",
  "key31": "4XzCPue9AW5o4y9H7peTC6D2EsgXsLDGukcYiZiqKSUdP2713u1LkLLK8jYmDq8v3QcgBhRMjiZoHxi34UGaFYt2",
  "key32": "D69XMcje9XWfXaUpaAeJJEC7BkicFsRKRiRE6s9ZH7HLqGryUcEqHv3fvuXKYWCadcVhBCCkxG13fiZGQfanHU7",
  "key33": "37VCC4Nso7KxWHf8677u7RyqBkYem4QfFGLnLusJKXnDc6Lou5muELxqndFW5TrSL8KPuDbGFakiPnLjBBoiVWoa",
  "key34": "2FyTBoBfsEG44Ud8Yr3GZ242xWorTtVJgFXeoAe1h8iVLep2BrNE8pCh5EEiZViF2c2TY3d4TGXzt7vKJTtwVvgq",
  "key35": "4KGHuFUuSWyJfGLj1uVWG3JJywiPznMH2Fpqw4njnC1TEkwCbyAbsn5SvRdM9VcexeJJUVkgkXB4hZmWnFk184Hc",
  "key36": "42Fnje8xMpH6L5nNgHeGCQemV64orgUY8vixgPq6tsU35UseF2N2YeaRXp8EDhGec5RCCA8vTH7v9i3E6UmTxVv2",
  "key37": "4UiRrGU6TxaGw8ubFF7SYjsWe7f4sggCDkAzqAfdtFEGdF2drTup7aXU9kdVoLNxqhsRvvHg6SKQyp9NbkPDTPvi",
  "key38": "3FiYWtGsmDqDx7TVJMt1cFWUyGA2wqz3piYHP3xx5fyuNa1LwT4MFLssWPFvMvCfvAMtgKtcpWLrqpC7M6ka9W2h",
  "key39": "dcNag9oiT1ioFjrWDhURkMnZbQFXYBKqK3bfAtB3LcvgrYwwmvudPASmRU35GFdHDzUB3J1BEujMTWZdW24BGfT",
  "key40": "5qLBmUDCvMkQRLC3KCZFvD2DQM8pQYFy3tSyHTU6aDABaVHG6bf3CShXeaAs1g1wvJW7TyStr8N536WtZaqEbk4S",
  "key41": "4RcEADi9X1vgN4xc2irkC3AwFCP9FU3Y7jGVUpa3vj56dTiExHGc8MLqHhVxHHKYoQJd4opKL2L4Q648oHyUh4et",
  "key42": "4HYt3YGNsPnTsZSqVTgwbAbrXABsh47cJeVbKKwLGLiwrGEa9JmSU8bgAx6A2kgvLHCfWUnpC6xWoc8w6KdCGnku",
  "key43": "4Xqx3NbUqCF7Hi8NBk7ZUCZnJjPLsv1JNTJg8izaeVqea5SuNQ4SuuFWtKw4naZZJwViewoAi3XMTJqVxAnQ4Puw",
  "key44": "2JRE6xKSRhkaWHVSXz9QxrZeJXUvQKje1kKrouNPuT4k47PPLpZcPrHpjP2yH9jsxkvPJkfCuSjAXDZ78UHQ2Z14",
  "key45": "QFwej85VxhKMP9DArj59Q8WGfDFADMxoyewbFewphMSzZTsrPw5PtFYUS1h5PDwPd5sU45s9e3YwRdPe4vv5ZUj",
  "key46": "ccEvaf2i2ciaFa3hTczpjkKrsmQhk1JwtwG9Fdd7SeJMpty7h5oNgD4rCi5jfAj5nxhKgjxmC1jfP3RBYbJkjZV",
  "key47": "333etTuj98QaAMugti8AcQGGfd4cSdCJiGDsN5buBM2ywxo5uqsiwjQanVJXEiz5KWSVEmAJw6EwfD2vhd1AcfV1",
  "key48": "5optpWEnCFgn8GVXxjLeoqQNx1VqXUPR5wLKxrPCSyEwNW4UXj5hkTrmFGiLGdCHd2SV7XXwDw92Hbrfj8wUjPhc",
  "key49": "234vBKqHtfkAp9rXd7vS5JvgXwvc1HxB3NayWDHAGCKvNfyQjmfYJTEYNmmhK5BwsMT7Tdpue5SdCtDr7SgAkkRK"
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
