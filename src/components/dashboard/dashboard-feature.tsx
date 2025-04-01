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
    "3Q6ChhrQq5yRf3yZNfxZk6wfo5HX6CBUYu32fbwSeZTBG8CqjCELmwxDN6tPJHNkgtTANPexEbUH8L9kLdPH448S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dFKkjRK41fnWT2Tx4vgjoaQ3zCu9pNjruwwmEeVfF1NWetjtSXTxqkPDSS9g3oYsqBXUE1rY5q4xeCCSXGLG9r1",
  "key1": "2MBgM8WvtnVuAKCnuu5LFRkA6zv8uFwnBZLd2DqjBKdUkyHdPgiJuB7qyaP7irQHyZ8vXBRVVx3AsszLCPNHksuK",
  "key2": "QPsek3Q9uQoKX3mtsR31RsHBXCYjXcs5QriaLjFevq8s9Lf3GbjkHKxEVfbeqVZZKZyC2D3wWdjZKBSDXKPVhis",
  "key3": "3KJT6u3JwkQLX7NGhoWQ5WP2TdYaqyCrbH8WDx4UvxzEyHAq2JMBCHD74Qiz4fPxtDa2Q7mhtrLJFx6axJZHLMrd",
  "key4": "9d8arSLyXdXRL5hUzmw7hnXdNxEvcpfVSwhoS2mJok1j38XLUE7oBQEzzpmk9AYwDen4CaAyHBQXscL4Gba958b",
  "key5": "2MWXk6xSTxxAgM35cfuMhKJ7Nw9hbvPQs4MqeMzmk9NGNaKdyw3WtD7QgEHnv1qKnPz7k19QFQExUosVd2G9AbWq",
  "key6": "66zpwyd5dVNwapoyKEW67PC9fvqUguuV9tfGPHBcvZgeRrqHov5QX7Ysp7tdcFHE9rJKfbRAdJv8MRv7AinUprcc",
  "key7": "2TrrcpPcyeCNUfKXnNcjCPzyGipKJyZqSc8LRD4aMSVaUuNLf1dfaYVqXBDregzSPfi2esxFKHRZ7iZKwTsmfMWB",
  "key8": "4KBtWwzWmacZo8X4RtURQbe8hm4LPE8q7UHqCpq9p5ya92WRpjd6uttuZKQiAR8bu9vkNaC9m27h2CQCEGVEej2r",
  "key9": "5GuVT89fhM7eBZBP1JMvaioQkU8xk9SgumRLJ6aTRRaKASYhbK9yn7ixJiQrRPRkj2qWgnq3y2rZX47gMYcXmjee",
  "key10": "DW8CGzLjjga7PPstiK7LayAZqh4U7eZPZHj15kf2zN93BgfEe6RXJ3q2CcC9YkKuHC5LUtBWJViZ4wmstnYBueg",
  "key11": "2DifFFNHEZMvRuHgJUmfrANWGkmcPQwwggijdvEKpUdYFFpfKrrg1pJqDumJrzHdvtBb1vUeTzP7h978vF2wmYZT",
  "key12": "3AeDn9roxLkZvbWW74bYzaU2BGafV4FQqewYdpRi2Mk57aRPpjDQh3m3cycch6HVSNhNotdxZ89wSisyFS1Sz4mE",
  "key13": "zz86x2pyFUpDkoC8JfdEBf3cfFoFfuD1HmM7HhyQp2svLsehkdC9bGHH9eWxnGHyTJ7mqVYWUfyqSyZYpb9ZVBQ",
  "key14": "GbsznS7PTrTGyBekmN7CbBDLX9GGkemRYAvCtfjUCvsKYMEQtSQXt3yi1VCTMDVR1WYkaMBkVtXsbtaZMDx2vWF",
  "key15": "5Sbo4bCk5VnJcCcxYqAfS9hXKUuqQmzrfTTKvUhMF7wW7up1msE5xS1MTDKd5z7KwNfRBgJFhBsDZbjcuBhVnZgc",
  "key16": "4CCf4r8RR4EyuTVRN7xxeNs7d2VP8MHneMoMEfqiosKjXN7CPP8qcpCSZRB2ZBnDw7V6cB2QDQXCLd4Mzj5ELDWp",
  "key17": "5QPn1hNH4gTuLeAPuV6fJSjZgKeSQMzq2da2AGF6HmjYF3RoXhJhfbXajrdoAHMjWXCetroS6zc9dcHvss1g2gpQ",
  "key18": "3x34NmfhYpeLhD9AedgRY8RFGSqRp8KDexfxvJVvKLoNMJvqKEpbiard36VYjHMkzqLYciSRVMaxzmjMDuWbk9f3",
  "key19": "3NUBCdmsUm6hiqrm4mk55GpvZvSNNMzDt3tp25xQjv6PG1J8vfm2m1hn7JshWsFnKDM136L1VYSke2sWYuQ48fny",
  "key20": "8JYrmWaQgow1zVALaxTkv5EshWirrSZioHdjj8RG6Kf7XwstsiGPeEVwrUsZnoreQLZhWMCRQyJPVCWsEzg1Voz",
  "key21": "45g5Sq4BYdULwFmvzSxeD3GX3d7k6GRs8CJo5v69yBF1GRVT76TQejME2hUPuWxS2119Jeqqida8S9kZmCSJih66",
  "key22": "3NMx5hrJkkVs3b6FHMyW35FkgNTuEUc2RWpa3ftT4dqUDu3wrGBzXcCtEjmGRmKeECv71noRfuyj6fL5dhpE396",
  "key23": "X1DZhkJvXvLBxaTQkzwemxkiPy13i5S9M914etxrxUs1SUMS3oa2DrX7R2LZRGQCe85ZxJ84F35kePurn3z7PSn",
  "key24": "2FofxxXHBkHdSRMun4KswYqUf4aW1WQitJ3PGs8VaoFpKGyt1WQ5LdHuEM9KCP5xMsgCkApzEJKetVAKSL348gmQ",
  "key25": "MnFE5g6Ga7Q5X4j9PkYTB7enNXjvuZAebSJV1bGEJZhJDLxHwBChH7cnFxKRAQKwKGbRdRbCMzahcNaGmCehgsW",
  "key26": "2HGb6zbwDykoxxrQXpxd6joa4BHvtxW7wuUD7H61docgRQ9dHJiXvUxY2kByHqfGGvCDMGck4MQ7xP8QYKR6drS4",
  "key27": "16V1XDPLDMi3WnQENJfFFtCNEHBuwt7MmTMEFWLpK1xEiaqEm9BjfWs5U95ALxFc6tuwaZpTeF39sc5ZecGDbBN",
  "key28": "5fx1NNiCevUbys5R4apThpNe2FT8rz6mFucnbNZgCYzc8qkKSvu8LMDsHdocNgDDhbn2sDmbqEhEB4edXc7YZyWH",
  "key29": "3JnD549VSY4LkDHTUyEVimToSTFsb7ByaEGW7AvqY6KSNYA78nH5CAJxnZtqRqwtskAKFrG2WAhMBDcGGdkknTQ",
  "key30": "3aTRU2ku8TpzgtbrEi36Fguk4eGNCSsNfzE6uicHWi9877tJGbz3xmzLzuzGMDtKpFx6416igWo9erprc3ffEDSy",
  "key31": "2W7PASvBnvKfEzBvXJ9y18eJMCpoMokSasXcKeUWQ58822YWw9iJTnADwcZJzkYtvzdoNV3A8z79r8azzmCs7KhL",
  "key32": "2b6vkj7o4ZuWoUYuk9KZJH5m5VQfaKzmMb3cqaTVg4UsWiH5RVTBcxhFqFyYtWtX3AigPrnNu92B8Vw4MBxusABo",
  "key33": "4GSm7M3ytn47LRgyZB2iJUhGEbTzauXzfEKUDkJsyXmyiDeXig2CCwvggkNAhMmbnaboe4g89MQYgz7iENpY61fg",
  "key34": "9LYpMmmWDmsxpFc8jA6Xa3rgANxUkeydds4Ty7TKVHuGwLGjkJvwREBjVLcoPuaB25BQ93s1CDjwhNKmwpdskC8",
  "key35": "4QbNKmijS6DMto9QNcjMjc82DaNB8BLwmBnMgaVADQmX6Qwr426egSfTHP9PEos769nAvsjAq9dQh7Pwt3cwAAfw",
  "key36": "4Xd4Ta8UwmLyy85X2ZHfBTYNa7SjX9ouUpWkG3TPwQg1rSjQPoGqS3SdRug8KZSuAipZBLh5DBreo9WXzc34A7Sh",
  "key37": "5k7cHxMq1Tn88jXhZKL8u2vAdaChmsh6rhVTd388n2HiCryLPpGdVcLm6ioFeNXZsRwyoXX5MBLerGppPpANZTBJ",
  "key38": "47mjCgjtsEGKvWQmzL6ZrYVVd7vXF92GZe5ix4ULrLYtCKEZGvvHEFLoXwhvwd1NzbSEHQDibAjTN8Zm9N5Fmmrr",
  "key39": "2SiqMVXLqXgZxtwom4gb26KsfZpdcpFSRsdukXZCtpzBJ15W7hPhdvBs89EM34QF6pNZ9Vv1UNnEa8yKjbDa9fX6",
  "key40": "4vVwatKakwzHBkaJMMGkaTTzKvNJLPtA5CZfazNJYcxdEw1xwfMUBSUq5HsezMqnLEEdeS5B9LShgrmvAffBW32C",
  "key41": "2WZGkPZUr5UKiDNBFYwAnSNDXPb9RajKAnvNNNbKEbv3YVRqDPGjeGnHVzCz2yg1LfYN58ANU6jcgHqECPkMY4py",
  "key42": "3a7Bpd11ZFpnsxcP8ixdEFfKBVTxD1iKm49taTyMSnh2FZs9yeRFM1G3HkPbE5z7VKK6bHFqAQ7yCmW4fUkm6oUQ",
  "key43": "2UrDcbijraTErX26Tv2RtRf59awikQU2TqusCVedbaQfgJ7m91oGFyT5Qn1GTHHLwKFjbg1gCLcDHTJmp8rbKoEc",
  "key44": "48yJ7HdgfuXUn3VMoHQVPUStfM6poTLki9YwDnxjG8h26VoJGGEYZTkHCLvBmeJkKAdLPhWYimoJ8CabnLoJuca8",
  "key45": "3tNDyXhkm7kjyK5dxRBu6W6Vujpg6kikF1mzNq19YXVrU7rCRfhkjFLVonaDNsFP6jmRwwunLnvgJj5HWAEkaJUR",
  "key46": "4cYdzrfxTpEdsYXVF87uQVRRxowPcmV2rF3JsV1tzzsMFxcCsMqAm54EvVhzVMiTVGTuRhy9Es8qCew8hxcdXHLQ"
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
