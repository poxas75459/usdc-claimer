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
    "2N4pwnLUWewLb21unoPSuk9QWncgFd2yEitFu2fczGpZiebDp97qnRswYbYMFSdGmn1FXG6ECR5Moo7P4L2zRLPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uv1CJ3zwhoxFdvuuNbLzxTDuMcHSSdVuRTqxFaCh3eUc9vWQqVDaEtxPYQbeh3h8HPWAP3cigAfJxPkjZSCA2yw",
  "key1": "5A1gULiFHy35VqGXZZsmbpKsPRwVYTkjweFwwZGNzv7b7vNLM1CQzQpui5Q96tds2AQDDUNyMihgppSiKgLBCexX",
  "key2": "JXrLtfRt2txrFUe2TiTboopitWC5KxAM4eoM5YF1mKZ26u38HqfAUMm3hK9M39XibXzBy1DuBbNdrRNwF7M31c2",
  "key3": "2McqmD28qJa5kxEw2EdYiNDmbw3cEsJ1zDuhVTcgezuXKggy38zRZR7nN2jj3SbYXVfnvHVfgS2Vax2V96RNnNuo",
  "key4": "2RjPmzw4KarwKinrgY7r3Zje9ZGKyhjrSEZZSPL3EkV69DQmW2YiR1m4GDTtdPvsmU1Guo654ETqe1oE8LRVKdNV",
  "key5": "3nq7poRyjmYuawh4k1CoCmgKC1iYsgSGyFuyZzsCMpkwknr5LzjAQJ1mxsEBuDSLbibqTZSHmLn5ySDABJe2Lw3z",
  "key6": "3cksNTh5aBXDCN28SB576xMk471ecTPZarHk9MPpZgKhQRtVgNG7Aa1qgB5exbNU6iCLejYnx8yjZ1Bwzs2wp6Vw",
  "key7": "4DhKAoXE1ASAyQ6iPTMoC78QhFD8aZH56rReU2nR4XNbRHDwTRPJ1yT29Nn38JXZm6oumScGh5azzBtFZC6fySwB",
  "key8": "4asWjnt7VQePcw3eq3rroG4Qy4BV7ZywrTA7SGGEEzUzSEH8JtfUfXyCWMfLcszjt8B6dLaZ6SdBi3Y4HGiiFMT4",
  "key9": "658ZKqe8FLNpDhfYDZ3fLjLbBKbgQJqY1PtYGV2P6pAxS1SyAeQx3t7ULp3au2XBqp8D8oQQ9dxTnSi4gLrHJzmP",
  "key10": "3CTbtBYH93qpyC6K4DYoNvoDoH86gcCdQSesSzaJX7iu4NmDGtYjYaPuz3kh1yf2T9CRKHbaEVLoKiSLERCiH4pU",
  "key11": "3zfhxH3FMLJZ2SQEKDhsnAwZAiVj3P3kyxsBsGQEDxrtR4DWJJBjDHXPiEZeAvhuPwzJmbya2LmU1qG9wKcd7njV",
  "key12": "4KamZYr1xVyG9doB1E23CFx2GURQFpJXHJdoiYJ6ESk2V1xHmNe3egMa5UdBLUyzoyW97JwYzWn32sjvi4KyNCgA",
  "key13": "331tVkiy81BPaKbcS4zJnz8kjXg529yqdSyeZkmMMzMF2a4vhwcCqPX2tUDRbx4z9v8c6YFg3D4aquAfkYHTk5xt",
  "key14": "kVP8woAp8Ki9JFskRp8ovqpfxcxXGmihBHGy7pVd9f8VBjfrHgVpq8SETYULj2r4ZQ5Vh1ksMQLbsSzt6vSr9qM",
  "key15": "4X17vXKR7GtZ1V7kmy5uD6BWciqiSA3y6kdEnURuYMDUvn5XTHe7pmEGit1o2kgZz3adYtssa4o76gdMWCkpuiAB",
  "key16": "4xLS5d3B2Kj4YGqTHfVs3BTqpwzkiHnfVvPCixck7zNKG8kVkWGEhj6n8YXp7uM8fCNvY32TkHjiz5D7EJFPbCU2",
  "key17": "dyH9ispmVpTs3fduLndBeqShHvEgy8qMZM7kEacmnMHve49Ac6Hn4AGQuVsYcQWUW7VtA2HC7RaSqCq47A2Pcgp",
  "key18": "5bYytv4tWwvLFrC5udPv1yLNAT51NhLf62pH6swkvWZdstGxbr79PKkEt9HvMmYDRHBDpc6fTb9bWhdSWrcYCHaH",
  "key19": "2ByCAtvfhS1kwgU24pPxZyP42YTuRzucTPuFJZ4HYZkUnJNTcSK4Lu1ajtXKb7Cmz4LSix4pSLUdcMDi5DVcver1",
  "key20": "4UjARw35qY3hfVe6oWKbYakuFgiWW9Nzk4TjBpzT2mjqVgypjx9f29u8svHqouQ126KA5zfQ9kEZbAAnmRZoLX8",
  "key21": "5ygvwHcdR3F7exdGG4xLEFMSrbyNaAe5neH2REAP5tb4nqMMxzvVB51KvbHnZ7h4ZY8maiGaSV4pTVxXLxX89NER",
  "key22": "2VrGwD2HQ37U96SbfR7AtDQChkGCFQrMYJRAyVwENGeQqCw6G31nV4A4Nn4kdkRwCwvLQcewmR9ZxHUWcoddc4Mn",
  "key23": "4xSmzUALXoqFxB2Lr4qWXjUMHTadZBF9SedjNjyriLcmmfEwhQRXyP5ojD4WDnSWk3MGBFPzVfp1W8jxBi4GuxL2",
  "key24": "4aVq238gD9YJFU7DNuu3wWjRGSMq2jZuppjkQHXTyRFHhro47nZy5H9KdcdBQg6NnYDFTihLz1mwmmVnTxDg3AX9",
  "key25": "66Eqd8i6kABcVEa7eFwGchXcBogQdwFDfqp22VksFc9diWNrsehB9jQYAUfimFFwpF8h62eH9uM29T3tW7asjUxV",
  "key26": "cnJBAsj5hum6fqoMcUjFChejF1dbxKk5NYU6UTeKrASwEggs6PF4x45tv5ogiaE3WdGY6c1GWoN2RiRCckycjXJ",
  "key27": "5P2QEwxMJs8mzTqxwzxMirx9bF6CCcGdqYe5aftUj4qRk7sQCMAk9XjdazFg73E87B8bUhD2CdBZGq1ebmj1q85b",
  "key28": "dfaPvX7V8K956YsXC18GGi4x9P3Uo2GfYc9JJmm9oYmbXg4qLwNCvL6z2P98pN27vvbsWq4Nqfwd1cGZ2RaEnu4",
  "key29": "WUMUtnE58JscRJw7NNdsrfe4A27z3Efx1HzSru8asLE1C2ZyXdTw7u79a51Ah7LNKq3hoQiib61HQ4Dvg3CweJz",
  "key30": "5xnYWG4HFqzifNizhgo1oVrz4G1fFnefjrF3CXB6WEnuhKkLEuCLmWrGuF6Ki8zr94odmeJ4sW6jDwESEQmssDci",
  "key31": "GtVTgFyxPqsr9CyrziUWoncuhEAQDqj1WQQsBvwwMnbxvfbf6DGq6FTncB3tHSHSCftTmES344MNyLnR3Wjz5Ev",
  "key32": "5xtKfvtAUUh7tLwJh9NMtdzoBYXATx2mFopqtdg5jJCuLNM7rncoFs8dJU2iJ9tj1eygeDciqAQwBiRJH28NxzzT",
  "key33": "4GfHLkRmDJUMvSEwyFw8CgknWoMPNi1K3Q5NCaczPxNSLGSap4az2Y8eBbMwHGJ7yyjyhnt3ctQcZDzk9VEiKVgG",
  "key34": "5vkT6ehDdUJYTo7ofPu7aTXThbWry5GTEYfdxrBw7vZMjPYY6JJwjhXj789oLBjYev8ys4amZGV99p1zVeQAujFG",
  "key35": "2h6TBGRE4szLNZUwmZ4sYzRa3UPxCeKcDuD71LxKsc4NJ4rE3H2wV8GKLAFPjK2tCnBDXzRDikrTDm6YToCzLUyi",
  "key36": "3NZJdN8JUGoq1ziAH3vk9SctFW3DJzwj1DkSkBJLmPmCMpWAh23rTEL5uDKrjwJceKsg8ATzc4rYViL1C4Kc2W9",
  "key37": "39P4Tp4CW2DBgDHDUiFggrf9EAcgFaSzGoaX5jfiE5L4oRyNhL1cWs45dEYnSh3Zy3dCE19yxyiQg1oUJYR7zDTp",
  "key38": "4gbGrPP7f9frm1DrNdGfWPGbtxHmBpe3fRjKVfsBs4eWFsZggqJMWrcmB55XMdsbtvqnn8VHyd5G1xRBKKet1MEH",
  "key39": "2VxtcXQnTXt2mE1UVtNYQDU6JqhbBotEjZ5PfXSCwJRBKr7pheex1Eaiq8xpkfspLMgFXF7EifsFxhcCh7KibbyW",
  "key40": "4SwJruuEKZWME7EbRZv9HF57nRXoeqTKM9wjLKpCepnmkWvBJTPs83gtde9gGqB8kLMVdrBFYp2n3yQTk76RgiNx",
  "key41": "2uXiGvnxxQLz7gAeafHrz8BTDVC8LL6KcheHFTv3EhPms2xgGxU3LciyLJ3so2FdYVe6NQAWXBe8RBkThS6UzpWt",
  "key42": "5biSYuXmiprsGRnqZan8TPXwhxTiecjGF6kfT1wEfdPbfjU8JT4yuiWr93y5tYy4MeWXQyoD7t14JRJPBi3NhtJa",
  "key43": "5J2Zv1BZJCkWoimMV6e6RAKWsAckj852LWCeyyEu9W76gavMvDhckp8aZauG5nQccaASTdryoQG4avtQ2kzcctks",
  "key44": "57WYsrYR9jNtULEgikAYFmSAUzvtgkMcvDPKFRsh6wWhF4S7y5YdcDZ6h3N48A91NTebHDYwAGbq2THjJ54BmCBJ"
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
