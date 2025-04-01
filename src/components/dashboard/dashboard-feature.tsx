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
    "5jjzjPhu9qB1HED3HVYykYgwStUVLsa9TWRD1tPue5X1cw1hTeyNEJaX4UKMhGgswz8x86XXDmU94z5uTCrZgKqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9CH6VyBxYupDsk74SCgceLA7CGiN1XMnk8BDGFLZgkFT3pxTzGAXXrXjgSCTt7kL2xSctLTbZqtX6cjrScngS44",
  "key1": "2WvGMo2Sy5ujBVVVXa3pdMBRDVBC54QGEk1DXkD89ugPuTUyEji4Axm5H6gGeGzxJcyiPvAruahdEa9hgStwZtW7",
  "key2": "44e5UbqYdL2jK6nai3KkW4XKWmuFoLGVScqtZdgBnYHCurxagXZq5DLcov8PhV6X2L9L7CfpYWdv9c9kqhR8GVN5",
  "key3": "sDmpXHD7UN2RC2WhCwEezuBfVNxCeaiSfcSL7qhr2WikVc2JA4e1e6iHmsMSFo3BtE11ZGm2Axwr86oWzfddEaa",
  "key4": "3FtuAmzLbfaZwRSWmKJm3Q2etfNEEbHbrWoxsbF5Wr6PWUMe7ygSDy3Ktcbfvhfk2vXxZbM4PittWBm8Fep6yYfv",
  "key5": "2STS2R374Zm5vgGYPFot1ADgxRLCUubkbsntiGy3WrAQTMCBAMC7V4cm6CwstCHnUjw77AebQri5XrkUTG9DHBZ",
  "key6": "Xi3Lem4USoWgj72ZixakMXgiyptkh3HW6JNWdH3uuc9xFmWoZhfwWcNCc3BVz4ULxEa2HoUNcztm6WTA8CWPtpX",
  "key7": "2Y4RV21Lfizx9xwxQEFgrPBKiWzRDyaHAFnrq12SXxU2U6pudpuUBPfaKowGiKmdcHbnmhn8BLmikaHX6ys1excN",
  "key8": "2KfXx2RGbLqjWVDNDY6XmSz1121sGy9rXpZuuu8gLivPgS9TP1icvnXGwHr1PzSJDyBSMHYwvXQC9vJF7B4i29m8",
  "key9": "TBMg98nuTjwGkgUKo6eqYDj6JhsPKaG47eb2XBTYXNge3oSoFCifibE8HzfDaxokiX5ezTVKczoyiePFDq5QzpE",
  "key10": "A4dgtmGrdA9WpHuCp3py7uSAJEiG8YB3QXt1o4fc17k5hHAiJuBEtKFVG6E3AvfnrrGomWDX3GiQukVHZYpo4jq",
  "key11": "64rVXupFYsTR2UQpmQM29pq5NjzomqrfnwuuuYAA4kct13acsQS8C3yj8MGa6U9UEaARb1Wkxy6xRm1kwEDPXHqj",
  "key12": "2xeiuSvjSBNFEH9ojhyCD6ARWXh4buHN1D7pztPdf5DiKHvWgwgoGH5722t74v4r5fYHWbrigsoHwBpBUhmeAeNQ",
  "key13": "myvn2Yt6sdHXFvJM9p9NLpUF6L4VtaKeyyuxCQ4TiHfncyzCd4ZJVqmqqoLd4sjZjAAJyrC5fvk78Nq9dJyYVvL",
  "key14": "3rJNF5j29848dbFM1x8n8eGuKXg1pDoZoJkJB4LRSiv68xnMotdV6cYNgkkb116KZxXNhWAfteM36U5n4tMYYY23",
  "key15": "nDnBBmVHvZ5K654px7zh9CCHsQ5xrFAkFJFmdx4mGL2M2Dug1CnJNjtXSZ4WycCDprN9ZThnn3mfcCr8Aqf9Q28",
  "key16": "56xEQYD797K5PST4RmPU9FHUjCexVA2edyZoaddNBposaHj5cxhkzt4XNSbXVsT12AVvarRXaZ1EUn8o64H7jsoE",
  "key17": "515WLyM12zC3KahQXwbKyna9hSfhw6zgwfTnRZwB3CeWcwDKe6Syrbo23zoZp4YEoSW8ZukE7UvF3gRiKQetFamG",
  "key18": "3QKLgFGVqcZQQQ4CNfbKccqBknLZ53DimiyTKK1F3kR7KX6dnyaAiFGLdmoGc8ZYfExUYCFj3TaaPKKVjro2gRt4",
  "key19": "M8yNX6QNvB3pgsUzC5W2tCGDEifSq4z8qpos485kzY7oGfFjao5yYYjSjgWuij8seJd5RrsZC9nzADLQawighTM",
  "key20": "4u7xnAUaq7Bq1iVUNWZkZZD3deEMUaSwPNsqLxpY1BgaQ2JRduPEumGkWXT3EL13XXN1oBsumRbZnDuzPgfh3VE",
  "key21": "34TKmj8viwZu8d7efTaftk5kDw1TVfWKKek454FDsT9W3BfWzHToZQ8enaMGHu2FhfBtavcEgyzveHS9NQYfXBXW",
  "key22": "4obnvD5z9r9npssmV1e5QMqYwrPCTf1aqQxps7ZqGm78wuT2f4MRkV6vv8QbgkUUfzzGVK3kVr4SZA5Mtr35Rmyk",
  "key23": "HHP1oEXLHtnSaU5qGzPCibM3JkVTWcPCK4wVbctvXgxP8HtDG8tR3NeJWXssRZLzmqYba7rQ1YUVMJ9uSfTRVbD",
  "key24": "31yxmrizrc1Ax8sgPtKzgLzRD4MZ7cSr3B3PUq8erezhDt9ji8UHJmPYfV1eBR8ZbzKB7xqkipsgUBEiMTQqaBcB",
  "key25": "2sq6XatgbQpBYTyJyaGhgHB4FhvBjc1BjruijzSz7Vugd6vxXK3Uy5hmFwCH13yPzCPESDmSYRdk6euBa4KRZ4Tq",
  "key26": "56DXtjYN4DmKneWxhNBo1FnLFxgVfJQ6eeakgyedLH8zMDm1QxATa3V6ouqankdDGukYhCbZBfACxJYFNCQbehz4",
  "key27": "58RQfKfNo2eqru88h1b9hUeh82LVjzpsRW4x9LMzXPvVRURzotZZD9CXsxcPBkFtU5EuNAvm7K5BW14YBtsMw4o2",
  "key28": "4d8nT31Z6ioXRnEzUsZo9Ghbh9KYvEWSspgavVmKVtf5g8m1v9qkJyKjqBz1FFBE3BKPphznGYAzphRBdcgz4SR1",
  "key29": "3XAY12MvrYjxPDQi6MMfr5KaguAhwhESTrn2MV31NDuPRHheSsyEYeU1hsYZLqA267yVqXkAwcLwbniMmA7ZPqa7",
  "key30": "3U5EqMunqNQDC4fxJD8yRDtcNGYEit2fqw6DcuGgrt9wGWFQV5CeU2jcxiX3gMJUJDTLdhceSGuTKVJPPcqnZRcx",
  "key31": "2tWeBjfRDn2uxfztAfM4CTkiJnDuZFsdWGkPvt2rdiyG4WMD1VTi9v18e81i6F3gqxQwVj9SjN1KzXkoSGuaiPJK",
  "key32": "5oVjoCkASoj1KMdZ8V2DSnqX2fuwWWT91DsrjqLhQ8dHXyPwoB7kZQ5CemydnjsT433rBd8TVNxc9qw9sP2S5N6g",
  "key33": "3B7W2Hi5nHBaE2mEfseEaS1gvn8QBjD38rraCF6w1hHHB1DDAcgYsWZrnXGySLytNoaa8wFMW1w8y7nuTPpgLvtP",
  "key34": "3vLHeCU9DPm36W9g1cxaS9zGP7JDqv1uW5tJKHW7dD5rhLkP62HwxdAJshvFNF4eF1MycgtX33HuwDwKGqxVWo3y",
  "key35": "2dCQLbKyTLsMVGVECb7duz5KUF1s5PgqjJNmYCJU4sSbvPrDNwNgC9qR7A3LBo8F8xrrX5cAeDykfAm5UGsdvXQ9",
  "key36": "4vTtyqByzuTxTPFoZZxkDwwJJrcdtfbwBS3PrBCy4A7LKwJdPb4iQXAhK3wuApFhGFAs7evk9LoxD4eE7oLr8ijL",
  "key37": "2ETWdWPDAyjG1KXU6riXhqQpDs9eeywRY6YidSS9J36wTwjSBvAA2fZWpfHPsKmGKfbqXzFrRuDuXtoYAFPuQnro"
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
