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
    "3LhQTcdCqnnfB4MsDz6QHyMeGixKkCvk52CzbVZhG8YXfr6PyqTCGS92exuB6S3d5t6SZuFUgbf1DgFTm5tKDdjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pY82FpzwaiGu6dJRpFyxttSZyvd8VumKTvzuhf6Nr5eY2QYHRYLq1ujgJpdB27ZqQAkfDsTiF9v8tmCu5Vgsvcz",
  "key1": "5AnrqUkJrrhT5HKT17SBqtbE9GB7vPvTx9YxV3vHbZJ2aVChDndh8AJFermon54g95eufjYhHF2HpG7PaAYvUkRz",
  "key2": "39opSVyhVibz9TArDoc3K4q2SwYrvUupVpcJQdK3yGzGbCi4WfGQ3DJKpBdKTzQ6PMnLdpkHcLau6sKtKFtrvxX3",
  "key3": "5yPcJxdJpvgsdMcPpxWnSsTvELWUdDY8q6Bqd28bJ6RpncbiByzq5cYqsfDimg8U8fH4DVZGiWzfVJKvfSsqjkpa",
  "key4": "hfode7MjQyo2o31tq1E3hiR25rnoxYyVGAf8kMixc9eJnW9DXSUwfRkHBv89LCKRUYVfc3tKiye8NQq4W3Axx3m",
  "key5": "3spo9UCtmMxfgUnhkdvGCbLUGmLEQcpzKysDy8Hqzg66mRz57qaErmNcu998VibAXuH9ACJuTdQLwHmNKjXdUiGm",
  "key6": "3oD3HuGQjD7GVVTJvythcEBnx1SNYvzLa17Wu59uXJvY8NaCgaB2Ms2y11QRZLRCcrfTr33KGa9F8GhFcEenHfE3",
  "key7": "5WsU4eo1J9qxh4JjzMNZjewkHdU9Zf3z57CSS412APCdi6C96o5su9ihKZjHEzokWea5qvb6cXzRumtdU3374nEi",
  "key8": "5qWPbuKm4kcWfc49qfhNyZX2anV6nn2NTTC3obSeDtkc26oZGJiU5Eo2zXDYW17onbfzpZZzPC12VioB3wNqDZUz",
  "key9": "5pj7cwAMkrDwUFyenqBKntEyte6Q7XVoZM5gggj7J2DE34dYGoWETnk6CRZBmUyyRQypqJyySAUGSxp9wJ5imyC8",
  "key10": "28tMpKS14K4ueL9KoML8uaVEYpu9hGXhwroCkjjX3HBJa2mKj8FYrenicJQyGgz17ci9GD9EQ4XPTv8asKDKAuBM",
  "key11": "tyob4PnpX2fVXAdxgJxAZ5W1cR3tw51tJZHHPJ6P5XSpj9xuXafSehqzLQoxPXmpW95ZjNeMDmPuqkaZsEZMfY4",
  "key12": "3NnPp8JavHrs4V49at3qjarfzRQPraCRseQ6jHK4dYgwgZu2attXbX4QVigsPtbhYfDe6FXLbMCD9JfpPWQjGchW",
  "key13": "3k36d18aptBBk77mKorWUy9KJEwsj7AaaquHkB35EBnZx2iBSsgau6x5VYdrnvdpb21E2yjGLfb9Eb4RjPYEdKfJ",
  "key14": "5tkxL7CQBFqXYyMR6mkydB85xDUEkP1tYgzzG3L1xWtdn7rmbZHee4Hzxa8Qoy1P4T9oey5sdB9TSWg5Sv5GFkqW",
  "key15": "4Fo9uMFkhJP6eCMZ88CrdzoKKxAeg9cS4iEDVke6FCqtrQU4FVatDXxHnfZAW3RBiRu7WXYAfeRdA1aaqvgFQTZJ",
  "key16": "oDJ9Zgce87Qiwws6Xs52epMVdaSuXsb8Qv7kMDzKBJ74aTsnokcShrVK66GAX2Cf8zvUUsQ8u9nYfn5LfoEtDHT",
  "key17": "5BiFmzh26Lj9fU9M2poKgfNsqVqnaXiLqomx4cwK8KdyLT156gyAHRrikDmdVEEeS7vTyLhM3CGxTNCE8PJsus7n",
  "key18": "4cBMFWhovVgQgEjRKNKcVftXkJ3ZPwwVu6VVCAhHNDfFQ8pR4KtbTuMihWDKPxemH5jHNTgLdjAWKHyYGwVDDLcW",
  "key19": "4aFyiY1vhvRgfCWx5XzQ5DGrsoW8me62iyfyiVkSHWWBnPNShzi2gU4RArysKJiv8Z4N9dqTPbM1tGaCerPkcAPE",
  "key20": "4k8qEQcAoe7Qju2834R7Lv6VPLnsJkgHwFzcoo5VEWcwrYMuhrzzxfbdRB9kXnLp8cpDRNiwwJsNiazxBMN3aqwb",
  "key21": "3xSzLavQwzWyFwtyeskqtNr85twWvXZ72kxeZ4Q1toocNrrD4Zd3nGUVgcaiyobRfytH3oTSzsmafRnk5Vz6Gbn2",
  "key22": "3sfQ19ojSEWbaNrzY79yq6RZooQbcbbbwDS5BQXUKbGb6g8GAF5gqycSHzjExMhAiyRy1Ss1iibE5RaZDs1MFQdH",
  "key23": "4B3kc5xSLhDVsZVtGjeDTEZMDh4FdcgabhMV8VUER76ZeXpumQ8xHGLo9KK6eh1eA5mBHjmN8gGLCwbgW5EDeeUA",
  "key24": "3hDYnTZUGGsj2qX3jWBn21w3ZbSLrbMkS8iptuixQWSV32GLu5j6zQbieJrFzX6264B1vGTHqBs4buvvZe11modZ",
  "key25": "2zcfWKX2duPpuCsxx4avzWPJrygRxb8VzSGRuSYBg9yLyPosJweHNfWw9ZyLiTJzc28s85NJxo2GqR4aSRYN8zXP",
  "key26": "2M7Gir92DUUQxTZZuv4gkadASxJYop9frxmE57aaCTyxWFGioQHasv6Ek2XpsedZ8ScSpENUxGp3AC5wYWsrgWbd",
  "key27": "5wxx4Eg37N35RuA6DEvaHBMZFqzGF6Q382JzJjrJ2AFKQMuSkY6DZDUgn1vRFwnUoAp6Nqk7vWre4NojxYdwRCyW",
  "key28": "yzMi4JY6CRdytR255ngyWzVhNoSyRt8TTTG4FH5EunVacDcvLbwM9LKgZMk6fje11xaffvs7khpdHin91eTkVJQ",
  "key29": "3UipnbEhJk8hEQRrJrzsHJu55vcRUDtoHiwK2vgak3sPNCitLQLWCAt5F35dgbPSepudahTLPmfX9ezeWoXBRFHo",
  "key30": "2jtEdP7kNKJsiL8n7FV5MvdzNW6nj1towfdnqvMfmgL5VWNGsY1XucYCFCU13wHVMQSRdZUAY8yae2jtZ6p4yEby",
  "key31": "2YXSUppJ2hHzkCQknD1jsnEZ15EtLSQgwCx6T9agWSwiXv4ud3oMq9Y3B3uMHUemCW7kkHvr5xkZ7vCiwdae7SWG",
  "key32": "4RSXyxcyWtNU5QtXfD5bsiFf3mgFz7kVuXJm7ppbFkg1s2YAFEf8ZDP1qqVG8AowWTCsVYMmzhecTj2s24Se6qLf",
  "key33": "aizzkg2MQAnnKyTcmNkSr3xLM4As8u2nZSaE89W2FxoNa4Td7QeMS5xAUgx8Gotm7dHxFvSv4jQWgzVrY1LPhiT",
  "key34": "xuzsFvcMDB2u3hCd1vvXB9PdfkADhDuyodmyNsczpfZyQVzU7g26PDMdGj85EKcUKEEXdwD31epeN9v4KBXQGgQ",
  "key35": "3L7AR9Sr6R44pu11ne8FRAKmqku8AUbsrqnw7FKMvd3HjHNMvundeXU7pZBvWCir1M1iB5aH51SVdZVoVUASWjgZ",
  "key36": "5WxKohH4sNgkeDF5v2bwdzcxxwo5o4EgEdYFGKqwXNGEYuxxVZbDmXVhfK423WaZJ49UUNbovdNNeRsCVUL4prdm",
  "key37": "kTb7jYQLJwn4SZFbaVaP6LHJxhikymx5iL3iCvijhRzmVsG6D1LVzBfNL77VFFaJj7iigNPwuYCHqcQm3riCv7B",
  "key38": "2gQkr3Kj7w797iBV8CeTV7J364ECYwLcHedzPSJc6TWzMXZP9MsCi95e9KJb95nxhKdtFCrKH56nwLpe7NEtFn5R",
  "key39": "5kT35ovrGdzdd589DqXbXSSy9YUGws2GdtYY65e44uCFywzk157FCWyxbZhSc6yFCqd1dDEuqJjqzzDCynaETRfD"
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
