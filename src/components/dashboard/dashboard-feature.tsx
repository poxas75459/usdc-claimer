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
    "3aV9vRffLMXMx12rE8qtsrfXiTRQEJ8rFjAa9LhgmY3vSypt6R53qZUiAiB5CgYNU5HUtKedVP1kdZ37Q1C8NbKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tYGqt21qmkjJvUWs5h2yp1nbYEMZ36sBF6jJ99QHy7ujHQqFSd34aLMwxunT4GKuZAxEayUDkmwhZ1P8gf1SprP",
  "key1": "5EmmPz72nHCom6ShWyJtqeZD4fVmc4kAiKo5CeJXUJtzEJkzkQ4kc78qHP2txQumNeCadPwLSA7oBqhGFfyA5oYb",
  "key2": "1kqkPGP5D9GyFzYUD2yiYwn4TrnJaWHZHbHnAKC8KaTzZHmV9WGbTcdK1Ys7F2BiAD61org3scMAWaeMUCyWiR6",
  "key3": "2ARobLaqKGsov2dozbugSB41xR8Av4BzVNNJQ3tiYJ9rH41rcwWjRRpTtvASjwNrDqhQiRCAqjKVrtXj28f5p6hE",
  "key4": "51odPmzAr5U5y1n7HfdknupRX74F1C5THbztm5yaubtW8mk5WysqLJ1an6fefpL5NYvZ3pUm5Yrw7mrcaYcwDo37",
  "key5": "HPd6iu5V8FRzZnRFfKPkA2oAPTJCmHoTJdBVP7et5YhzwDG2qbK1u9pmPff9h2XbX5hM8MmgY9tWWhGbwzqGtVd",
  "key6": "67YDE8SkASHZpQmExkDDBgV51KdSAYpjokrYw5zBDu4qu52riPYocfuH2YReNWSHPGG5DUVpq67bbc1jCfBSyRbi",
  "key7": "39KjRptfEqbHwjjNLisSZiGKASZ6p9kftsf3ahpch4c6RnNeBKtcP8C6jUsmismTidxBkUz97NDcQj25EVAQa5Q3",
  "key8": "5zXjpuXxGNffDhrrtCuypNWDp2HXTW6YMvJtQcBQHzDcDZKS6PL8ZzTLV3SZfjeU9LVnLXLQCJkovcqixq6rm2r1",
  "key9": "2TAGtq1QMnfQEFegTyFD5FxC9Smh89bksvWvhMvzRBi3K88pZkovQ66pseH3srTQQbPxXa4a4S9gXBUwYD6DKTp4",
  "key10": "S5vC5XCTqxCjVgW1jMgacqCmVgfCRHHnsxn4ue7J3CSqmMvvRRuwjR8t9dh3djdDsk5qB3gHBLcw7Royub48ZrQ",
  "key11": "3SrVKYMT4fs44YAV3KpeeDYf7EM8fCQKh3oBxtJvHPAUQajfaqAs7u5PNuhQej2w7EDMSRmgQWxpTqgbrzYvUNap",
  "key12": "2RbPatUHT648YjRXio4cSiWhW2W4sbmdzSShwhqtWFm45Ns1zx9swg94vgxUXi2tbdfgbZVkotyDqid9xeSeJ5KN",
  "key13": "3k2BJC15qTMaf98BWmaiUAX9iTrDhXp9X4D1beYukLeH7C6HzXoKEE6rEeq3m5aCwxo2KGerV64D5YDwixY2xbwG",
  "key14": "5QKawp2n32nG8LPQNG8L3RLENocJktKtUa32fKUk5MprXzCDy2AQt6cQhVcchZo7aQ4usCMEBMN2BeF3fDpjpkxw",
  "key15": "5wdywuieMjVFTb9AvsuBoqNgRUN9VcyDRcGBSddzmYUupqDBYrgYQphhXzrW4Fp1NQkjHqjJmp8rLGY9x2KJrdNj",
  "key16": "3Db8xVBEN6c85BHfLeoP63LVnAdSmRUs3G8kStT213UV2wp6vcMUnVKEBBqJDo4pUxht3dUewz8j9rEcunC46v3n",
  "key17": "24shKxxNPhGME6j3hNn5bnNnbUcoAYkBjoW5hiLVWDvuZDB5m4vXsgzRmqEJ1iLwWf18L1SC5CtfHgNZKLLBgMsG",
  "key18": "5vtFD18tx7zvEzFboeusN4DtgbmNWRxT8iyus5m42KQRj6ESYmhLjpqmBVCQ5oTxMyBQJRUQYbEcVr3vyJcq6kXh",
  "key19": "28pmqVj1ypQRjJuEGFms4azwUdibdJxvxHXSEkxPwv8gQ2dFd8QGUdhaB5XSPxQzCQ1zNXSMtMaQV5cwFFLM27RD",
  "key20": "3tELrfw4wkxNXvCj5fYiMwdtmmyhUKMqRC6f8nYBqUCsZrS9piiB9DHFyFJbahuu73vTTefr64BioSXJ2wYegbc9",
  "key21": "5XjQeEfKAutwNYWf68Swt4a2rBieBUBpWuxNBUN4wXDXRmefGXoQ3qjToQe55pYfYyy26mLCwDak2trsBmHoXCqa",
  "key22": "5GrPV4VRY9sbojDg83VAwj6BuTbYNwVVxnxMT2sdZD4DPBnwAjWCZ3KmT2BR7mPXDYbmDwDdksdor8dZMHeQVbrb",
  "key23": "5x2MqjLSWpDZQ2dUsyszF4nGqJ4tEtZkGvCeEcJSuCzWxb8m34XLNYrcKaHf6AGPhpfKurKrDtmun7xD1zEzMsf6",
  "key24": "64FNyNamvHixrNESGeuARnVTvF9fdMGtU57oQ3Ak8wS2g7zuqsAgjh7Cz8Be4hTRaCzvafgXyHPTR9FJzvpNGqep",
  "key25": "45my1L2sarxVCBUtpFm4GJb7Ce9zzHQ11Z41wKdiZgpp6A37J5zTEwGUejGisNRa26owhTV1CdzsTp9fpuioDNEi",
  "key26": "gQPc2JjD9dBfK9hFRNE6Fynarnq9PLGeMQmCKpTYepMxq9V7tbBq8YEVwh95hEbGmkWXTMXXZpX5XMPhk1qZKid",
  "key27": "5KG9MN3RX7mD6MucAp8qBgTmxqzt7Tx6qgkrCReWsBDw3aAx8xzPGHzzdaZAWANGirbwSYo6ZypjJyg7tBEdTxB6",
  "key28": "5z2YFqLgtXEg8HJM5dFy2Ls4FhfhTftZMVNzY8ypjYjmPvHquQwGta1soqehRUMe2Kt1dRKsUZJsbAM6vG7vsQew",
  "key29": "AeuXAjeLheY37R8wKgyoBJEVz8YcoLqVmo1SKwgtG4bWPPMJDTbXPzXo2aG2jU1K83JfAE8fbnw1jSnS27T8czm",
  "key30": "2267QLwLSpbok7uk1SvwUhmyyGuAQZmNDgnqnbGbNFBTQ93oWPyjbWSGddshmcZiv6Z6vZZ2RRMGz7sUyuL6yspF",
  "key31": "t8TPzVpjDt5exUtMZkS6mg5PZM7m5NsH2jM5wz5mLuvya8upyCyCAtdzAv4pN4qxpMMiXuzQ8ADimachVG8oUCZ",
  "key32": "3ukTZkfW4v89mwUcdWDZ4eZjYvTwmDh8M7eZokVKqkmFAaQcnfGxjwGAvJQqMM8xFLgRnefAJXCz7ReNqjd1y5Ue",
  "key33": "3D3i9efeY9YSFKTHdPXC66JQNrb1J7dJbMannyaiJLNBMejLRRhUA5FGRsqk7LACnA5a4gtwUHimBapr8Ap8Jcdd",
  "key34": "57xWMf7cCF9m3k8JgTB4rD76PHYRHet4rwxoCaesztvz7Nh5SekVipAgFFons3Tewj6ScE87i7svcZKkK6J5X7iN",
  "key35": "2f87BHpQfnUURzQFN38Y4cbeXhFvJZd7uzNPoZqN3HdYjxvKt4vM7ac8bVZvFgd86rNmFW2NkUJ5Fjs1k6ioGAwG",
  "key36": "HfdxKoiKkphRTmhSNHCJbz51ve9fkVMEZMz3MHHxYZ217R2E8QL9U7bMSGMTJMMsQ4oeSR334TQHux2UvebPJTo",
  "key37": "5iiXTAGdRJVeqTYc94JudV3Pu1qTuztvXBh6aNUNA5ZeJHp4UqRVXpA9U2gS5MyxLKBWSRsJwbW4LAF8YWpuKEQc",
  "key38": "3hEXbBryMfLKg4YSELBTiDhsxQuDfrSqfKbm6n4gEAUDyA48RAg7qNKAFDYkhnMCAADdy6JgXVeQnLahPJQp3Ai2",
  "key39": "2mjtAYz4zLhEaNdKGsyfkz4VAY1HFau7xpSib8rVFH3NCHbRakPLEx7K5CMFtBxc6ekMbym9JhCxMxcGfMDXi5Dp",
  "key40": "4dQiQ5p9y2arVVDeHv1D7Ruc2vi5ThtMDsukGC28wpP8QoTWgqpkoCVqQ5S2Y43qCR79Zxa2SgRDxiPZu42gPLSs",
  "key41": "5v8VCNqZbyBh57gNBRGo1gz5WtzhNWgkFnzLtC5WJkwBideFcMFFXSJVxuwdAbLg2ZkdamtDBr6nNwwbCbVxgLcg",
  "key42": "5pWynTy9KZtrbvBxsD2Y7Zu9UcWjug4hCodSm5cY6WJVXoQq9EC8Lysm5LeWTn5kFq8msgH6VPa1DGYuynFFMRDs",
  "key43": "4YyQXb1tAmr8jvNpvHRBzso6AHs4XrKcjJymsHWmc85zheMXcNgcpHr889EiP3cWnS3Cn2qL9S9sknNt21a6ynGt",
  "key44": "65BG3SuRKfEsvuQUGkpHv4mqfQg562N2truz9MJTuYXWSJtX3UfohURxzTeWVcLenaya8jx6imXsvFge6cETd6pU",
  "key45": "67Jqu4yaWghcgWWkqqVVwN3emtF8ja6iA47EedLf8yoj3PoVB79yqbw4qEEWgJxPyN9xcJdEvToKPP6vheUCfKsm"
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
