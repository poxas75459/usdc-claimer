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
    "5qTXHH47bQZhU3iTbJhivjWZRtYFuCfsZSRmnoCAb7txga8QLn512pc4ZYZThcfKvL5Jd3G1ULHqZYwxnvXHVWhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HXR4taAeKN8vvhpTbFuZ6Xmp94DsoK35cokPvWvaSG3VeHG4QPbtt3DUpUZ1xWvkhkUwgQLJFtVoqR4pN2x7nCA",
  "key1": "2m5QUmrF76Upj7gxRbvRL5zgqbYrFzgcykKrGCwYM5TifNC5J6y1rXB1wbnotHk3qtjesDpW3m1UYVuB3wQAygEJ",
  "key2": "4xPyDcBGWLsgkVF8SasaR7jA78sqV2v4uEfNjf1MNZeXBXQMkaFYojEqxtbJZrEubzDRfPcAiW32REBCT92bKEuo",
  "key3": "3b7xibNaeiErejUQ9T1ssTLeyeYET8J8JxxLPier5Jy9Jd6JeDfMj8UtkgyoaGm2e4jYQNghcU5bjrbNFJtKPetj",
  "key4": "59EZuAN9AEGGjvKk8tY5CZLVjZfGep611fBDu9FfUwsJYXmNMwjVrhpEEJYTq2eDTwwcDUApnZjidtQhZShKoeqK",
  "key5": "4RSwsdXANL8bm9ZpadqiC82LBaVbkKCRVMfELnbwLgixWuoJRPnkm5u1YQHLjhuqyXeibh1GbuNT8YupzCFGk5qt",
  "key6": "3zxbJe7GFKrrkfCccrE1vR6oYdKAmtt2HUYx39KDyBjzFCDnpxf2AXoxRA3ronaS67SMWsytTM2t7bmFH6DU3atZ",
  "key7": "45EYHboF9MER8yGkP44L9LWZfcAjwn4vjJ2NiYz3R6Wq5qVMiYGE4yHYPjDoRxwpaLEBj6G3GercSAvqD2jcrBVK",
  "key8": "2MVKLZmEsQHZr3ArxGpNqmDALKgMDedK1jQKBTbgSbUNu1YjtYDD5KgBWW1umJNmp4ZFk4tRWBsCPA2eDSe1cgp7",
  "key9": "5Cng1HLaMEDGZR8sfa2oo6WHHhgNGV2nSREiZBrkrue4RMRaua6VACFF5xhC7HcsxmUY19nNtcn6C7VLcx7JM4Xh",
  "key10": "5BkLQRhJdbYHLXa3H1yNQB3Hd6PECom5H7ijNHvhXVUU6Mhsr1FtBuVvucQcsjhaH26sVi6F3x7c9DVmv1a12EAf",
  "key11": "wXLZsKWY8h3N3hQiZ7VtmD1qaWzAqVPV95A7MNi7DnXwThBmvqyaRxHBBv6peXaWQd9TdnsD54hp2DbvZYCMPH8",
  "key12": "2tymkh8hTxJzpp6JkmM3bBR2gAvMen2kEZTw26LkrTL6oXg4T9vNLrzQw2zTZ6LM85fGNmWiuXBqrBjuNXeScWqJ",
  "key13": "36SXS2A2a89C4nBR8pxptfiEr6PiRARiG6YRzGfAtZExqZ8iLUiAqfQnkkgC6NgPNnfVCg1kWvr5DqGCWkiwGC9Q",
  "key14": "4gCA316kY4csH3Nw6E6Y4aG5jfZy35oDAtxsJh8jiQLz1iAYoasJVKRNZdhv2E5GcUeYev4iQhzWRTHxdoNkqD48",
  "key15": "5DzmNRgu75y7MXaVqruKS3kCkn2HkRVLdM4zpyKJSnjJGZszdGoUN5z1kVALoCJZKm1tfuvQ5A978NgGgEwmPked",
  "key16": "4XTi7nFJMRhsfM1doxvp25yaxtw6x9bWwsp88PmsrkF4Uw2ebRwoUg95eyzy4C7cqcsqgJJ5c9u2JVCSrwtQVQMZ",
  "key17": "2bqQFTksvvaU67Ww2BX6sT8rSh3frct9yvjuEVznspK35ubZTEBvBnJLfrEQkyyigxbVRoe6z6LKVWCoGdxf6Tjw",
  "key18": "5vCdtfXvvf1MQ6PLbTnFjyXUGXijF7ATaxMcxMXsyXXi7N9UxFtRrr6XpwbN6B2X1Uv3BkavLxSvE2qBJi2G8sAb",
  "key19": "5B4rkhJQ9nH7c2DRy1US3RypEM8hqtTcbxCNyaunb7zGe9ZSHjo4y9FZgQE3X6KkqfmyxUxygrfPyH1DAchxQpe8",
  "key20": "2rN8jiBBbzGKF6UWhur6tHntKfUvHaHYJzZDEEeSH25a3aS7VH7HoKarYYAo11UAwPdME9jFPWcGf6QVmDTgQy8q",
  "key21": "4aucFh643KM9yszSkh2VbjieXr12tCcxbBsoxQWp58eaPnWzfKSdZ6CBYQRVHRZG73BJyYvuU9y5ZNk9LkNyuXC9",
  "key22": "mJshAM6hYDm8adjXU5QmYqRHbz7YFEee34Axp7wBtJUzpbJwawJT4z3UaTW5P8SXeg76zzLSbiLhPmpNXe4LA7s",
  "key23": "C8iCrZWfCLKi5GwTwqhEF8MKdvpuCMBjy3nFiWJCrNJZ664wbpDpfGW2V1ABFdig6ZHtmMggRTdEncfKffHM8Mz",
  "key24": "xoU7PpLwJMhyo77fstsdtU5DooVLQSbo6pzN556teJnf6sidU3xZMtrFYZLtdsFwHcxN1pH7TuhYb3uYXsYu1ET",
  "key25": "4XvGituTMjpmWSdrqTsiEduaynZnVgZKDKt6MnbwVLTz1nr9LhKhX8jATGXFyMSroc8TLHUhC4L3TTvywJDVNxVY",
  "key26": "4xJuvdwmB1fARcaGaXXVZKKEDAhXCrYGFQmpCMuEUybVAtwDdUZkn3jxqvgpFLCz2Gfg8SuEEDCYcejVbPwRDKLf",
  "key27": "2JNRB32BhNonbxopaoXosL46ayha4neNpMJP1TstBen3aNyNWuwhWNGNpXTw4AXtSqFiki6QBKcoaqTM1BibrzdF",
  "key28": "5wwWgR2JjwvzDowazwxjm61BWNNSbnxzTDD9RfUfYSfQygZRKQJvo23kUkYMaHqZpDRKCLkanVxjfg47bRWzkKtT",
  "key29": "4LxLd1m43oGyeDwEc3QaAxxXFyVWtGDZxzQVvEhHayC9p5DVn3K11eDSgquc9r4yzCAPLLELfMKkjYJYovSLwx5y",
  "key30": "2SZs6UVrHPPksxCCud8dm5ZnmnEi15qka9S3Eh94QNWb1pmYLgDYoZjbKx5jB9ZCC3R5WYckBr73vS6yjV9Yvi3Z",
  "key31": "2oi9ruXQaSsZWbLnn5si4CbTBX5PYXgY8wVbNzg7WGMPgAZAPhZ7P2jesomRYNgZwsfqRwibU2TcpLkfMRpiptxo",
  "key32": "4N473mTubzCoBfsc8LaEXodq5Jy8cFXRMRBawDT1fnHVed8qUoaj1gsFPEhN9HWZBauKzFQWTDBiNZ16Eq2ZtwbE",
  "key33": "5pj8jPve2heXweTsftwH6ULn16MhpTVULm6SL3XPnzEgm5KhuzXdjnaSSL8J3ZzUmY8v2CkkCBRmUrLT271CaPw2",
  "key34": "5uBSicnoHnnzmrrWx9WTLyQdKbgmmNn9RXD6Bv8GNqtQg78GageJrKL7pVurNGxvoz1UHX99W56eWPfYiPCpRAfR",
  "key35": "5a9T1pWvL2DkwdpfAf51kWgnt8Pb9QUeWNVdkzBxpP8u82Hftag3U4mRRu4PskgicwapjFK4BC5bDAbaGL7cizmh",
  "key36": "2uQBmnPmv958ze7FVqSJZnrbP7Gc3LBwTnqx4a7ajoy2n5dqCcVvn2fsBjHpqSZXW25rz7BSfhBUE9uTPc412CPe",
  "key37": "586jTFpP7iG49t13RvaE2wSiVaLs4MWyLzCzCiprEfNPhQT9hAWD2neerePMDdRW4W4EC63uFoD1Nu41hceLUhPo",
  "key38": "3VcDXAfA7kNXf2EcaCtEcaCbFvTCUNCSzYsuMVBCvgTy4sm2U6E18MUj2pVmev8kNEA8gXx8Zce3wqgq5969H9RH",
  "key39": "2mGuZCBi4CCM9PLWdabNUmikWRbPB4Ef6H1bjQXooQNqFjGqA8k14v3SZhWhja8UDD88G1midjpWfVnWvGRZYWFB",
  "key40": "gCp7tmitbe5X92ANjjUFmG58DX54diNLMV3qbcTc3cR2vJAHEtfEHxGU6D4bZMwNuAwTm8Wsz7NG3foRQD8RiBJ",
  "key41": "4X1Zie2ng5BmHY5x1QS8rcpSN3M3L7iYBvyEEYPrQ8oBaLWBWgrX6DDoH7D5bLQg6crnhfhVMjZEvxfzcSNBJZuP"
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
