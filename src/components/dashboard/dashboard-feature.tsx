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
    "3PNeBnZ4WDytY3VFpirAvGJyKUVXEjcARKd7pkQsPzVZFg7WpbtPpcqqv2nx54VobiB6wzWWkcTDEahgjhNHK35x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKajAd3x1CZZtwsmt1wvWiFdbzP9VNzdtTKGRL87zQvRNzdMmzwR6zjYhAyhpm9FRdq56Vv8Z12wK5VYDHzWdZ2",
  "key1": "Nj5v93TpE6H8mwS8ohKJ4dK1aUEJGfgwEjrr1T9qzVzMzxZJqrf4vdUANqowQQME7HBx6kPQsHTEkirjfXmK3b5",
  "key2": "4V3xhpBskwQx5mYoZJTJhKtM2MppL8Hh12zqvF6YL2uJ71QYSnU2jEEU5JFEKqq462eK94EeuDYgLmTfYnP98sZW",
  "key3": "2pRACrEhN8D6SvuqjmkLxDmW6sUeXKbQQVCwH2ZJts18t2jRcjHZXq22pvNPeZYp7DDaaCLqdkjQ3z75h3JrraMR",
  "key4": "63UrgGc26LwVgP2BDmcX8HmuFPXQvQK1kEev9FgsprgPi7RBZqjATbvqRLmEABLxCR1FdPjwravLUn8T3wUKepTX",
  "key5": "3Cb4SGvEiKGciSWvWxXyrouZuj1UTbAdgdKX8ywRKSKpbrpRXamJ5L9voKJkiVGefo3XuSpCneePr2Kc5WcvMezk",
  "key6": "5icGSnjaifCoGkAkTDmGPcyJ7bMvL4J4LUH1KySzX616Smc6fHkhPJmqXW7WAM3Eq92hC9qufpsWDGtv3V5eSyHs",
  "key7": "3CpPv9cQE5DfbWK5TUjz1ps8d671jqVfDNX4apy3HQgrLpNvLV4EsyRJe5aeJCSmWgF8CuWQFqgrwRFzKjAExBp7",
  "key8": "2ALtVZW76qU4JKxi8QiKMvFVyJsnQY8fyZ5N6qkRNGEjxZNLh7Za2YUL1UyMuCqXPTJzodKsCV4mBznG6nYJmFcc",
  "key9": "45DyG4snoR5UFZDXLBgvxonpmPuiYtgGjdhQD1x4ZHVqTp6WYxhW7hE5UC9QzJQ6BtrSLLcHUqooApQfpEZyThUX",
  "key10": "2qTQBnR7bN2xnLxdR36859BoyNvXQ14K3TdqAvcocUPuoiu9EhEMcNrKPNpPLPzDDq2saDHDw34PDdXra9WgyAnD",
  "key11": "62awmP2oR6PSvnGA2g6kJm3AAGZd6zQ8cScSV1GzYa3ntgj6qqaScuqNjtZPgUjqeTnu29Zwy6f1d6Ncumwfsarr",
  "key12": "63WjJ1ornMPgbNDCWE1jjHnpRbLWCjg1excbcFx8cYT9SuqdrrFghCAzuxPnNphnvkUqnmean5NkqrJGJq8hyU1b",
  "key13": "FGXaeZeU9pf1yd9FYxGdH9aYqSdPef1PKXFhTrB7ycgrfZfwoU9eLUhTZULgniiT4Nmp4Hkob547FaDLzpNr1Jz",
  "key14": "5fEtpLtKPbTWWmqJTFrks9dikyrYKh7k4aEUS2QyDYaSXnESLd9j8ufUJz3r77GC4xbULrFP2ztHuyRQ8WzWuqEu",
  "key15": "5GQrC3xtimaKt53fjQ9qfcqTRNCMtpuXuYaCQ1iMDGuHwDK5F3buw9zveWCACsRZpVTRCCiYJzSAKhbQvayofxN1",
  "key16": "3fKz9VcSrxkTVewKEf6wYMbGeuk3RiJrHm99FdcmWWMtKt8B3eao1bzXXeKUHbt71nTJ6rNrVKMwhi7xRiS5uiAU",
  "key17": "3eqtTAMJvfgYH17h8KEwGpz15VUsq4CHn9i3VLRhJ9ZX7Ny3CfMC9eotrRipnoM9zvQc4YJ6xcSAM5EYJT3hxLHf",
  "key18": "4tVnA5bNEJAYogCCBzQWB4MFy9WWmZrvFcPDauT9RKsfzLksfGsXkRQ6DqxPX8nBXSgGFZqY3C5q9xk9iAVcPj8i",
  "key19": "4bwcsGryu5dvUws9hXCoxk8aWmjWNR1MDzRArc9iS2RJ1Dd5rRfmMTXXLnh11DsU9FVynyZrMzuasTPJUZpCrWgS",
  "key20": "3gKmpUvPZ9N6YihEU48zuHWyVyii4yoszPxsrQPHgtH3Sr1qC3giRLjVVqiVQFp1U5f2KSomyMvVxQUZtgErKnV1",
  "key21": "2HyG7fmb94q4AUNf9HE3AGg2NKaP11TWfRXPWWiUc5adzfgzXaASo6TsLmwevD53LR2tbh15iXKbEA8PWMc7eM9g",
  "key22": "5pgGxYKGyu5WiGm66gCsxWAcFmBkLxuDrWrWBSVz7AZ2GtbX8uFNq5uHAMPS3BzVQfz3P74YiLaYVbjRS1eJcEB7",
  "key23": "5JQ1zNBXPXLpkDJCNt2exuiYZMyY9PaFTJedyybzmD74npqXnQyChGj8QjmTpQJfpVJx1pRLN3eZnh7ErTswfZJv",
  "key24": "53gNKK4pDrJZ7FU5KGD5xRfCkhKgxCt2AA9NYkaJYMbbEofZ5PedHcgNyFDEZjdHJDWZRwVTpLuuU6ykJBMDiM4q",
  "key25": "5N18znkzcREq6mEeyW9TZEjm3zuBpXVuRXfE86EQQ8wRBmdny7E5rhS76D57FqUCf9D3xqYTmgWkosYKfFufw1ge",
  "key26": "22mKYZz1oPkHW2y27Wun1iCaxGDccsvKLHqsuQ8sBf1LnGupbDK3xZXLhDAjRqua3tuNjmGKJD8Ks4cq9QzgvpJE",
  "key27": "2yeBtSMuPqZfciLMoT8LEzNpNgNsZfwBrJNZzXqNUTHm6XYyn5Wpq7v8Pc4wYfRjJq65z4pDs194brLfAVvMHKxy",
  "key28": "354ECMe8bX2byHCFrZpjiNz1as3REW1pEu99wWcvGzXB1q7AirXj9UwCZ1AuhSw4pcbNfWvNoSVqpmWSoJ9r2WZn",
  "key29": "5CytXTwc1J8EpPNJdHoHUMxE7S5d3yAiRjbEvfuiMebnwB1vJRzoGE9XiWuhGsrpp3M4tKCaAy1fJGFpVZqmC17v",
  "key30": "vQgH7GdmqKKQ4TwBHRdpWyxoqCGdvpTwforihd71Bg8253kGFw9QDQ1fn7abdfLEgpZCRL3xVWvh7hzuMfC3W91",
  "key31": "frdWGsgNfYaBokXCKsXhHVex558jRMLzr1cNVKeYPb6nBcAzNFyh1BF8TRJDbAqKVbTnbmpqgTUr6o71RR4cajn",
  "key32": "3bqPq2GWEKH8vjq7FppprNbbNSUWGWaoiXUWreVUetkaXQ9GZet6mz6AmjEgfVStQDQcgSqjzdWgs9D8Bdj2NdAG",
  "key33": "4MTDGShXeFSjp7SdR23fHhzcbbxfXbszQPjmhp1P3gHCuCCUREaN3SAWbs21SnQbyZbLreAtcex43L9HDqPHgJx6",
  "key34": "ELzJRce7DLNWJbcLrCw7xLsMHnA6rwQtMH2u4KWb3ScHb61LhyRQYp13W9sYfVcBek871SxVGKTfefoNF4PmocU",
  "key35": "28qxT6XV1VG1soG2NGjXY6zxzRdAkgtHaY9QoCCM4kBBLxibGfx6wHoERBWjc6F5MjNJsp4LNc4iXMxnsATmCAsr",
  "key36": "2ZWc4qaZH5xoJbZpaZsad8KohfKzuqaJ3rdsYF9Lx5rEUCpBm4vUHDF7VBn9qYgFmRmkFyMrApb5BwZz5hu9RZYJ"
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
