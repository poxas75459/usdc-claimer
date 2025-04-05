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
    "3HFJnbjpYbQyT4wcBdSu1vJJYp5iPoZ341yzF6qLhGbUE36igVEYXJf153z67uywMheGY3oaeMsHjt6XWXWvU2Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSSNPwVadRfPC1QiruBG3DsGQHcsNEBj3kT6rGPbErJcgpkVZemySsWFoNGok75eSTM7xbAA9TfFoJcJgFQzCZK",
  "key1": "4epaps3vut7uD6ud3NQXB4Cd1S2pMXZmmaaRj6hgxDCEAMwU9ePqVNGVp3QJXWSfAKi6qihqoaW24THFpUEifaw9",
  "key2": "3ToomUdzdT7FgGysnGXXzFf1BuAn655xUtnQwxJe83gsyTLbWkieJMMuq2DvMsnPBmPSApBLxrMUAFVrWEVt9UN3",
  "key3": "zQ7paV6hnJ2epbPeCFa7MitCtRj9Tanv8cgrs4d8iNzoreRFikPUZoYNzyhULEe3vatZJ2enWxCAwXUo2bu2CR1",
  "key4": "5H6ynXixP1ZsS2w1Xjq6drDjzLNfYBKhX656F87gtXeSndAHirNJWnCTmeHa39yTQiFk6DMvZ8vmYzXgMFcvRCLS",
  "key5": "4k2GzMDeWGGLckUF2ewdskr8giPTD3RJqqMYqgNqLV7xAcCjWgSNqmQPbvQxkHXm4yHji17dPaBsNfdDUzgXccSm",
  "key6": "4AnEsodE364SzeK3AWcuKWaqx6izWDuaog9GkY47SBB61RmPB4mk3RkPZxT2X9do66zskKGh1fdj3zXytwW8Erfd",
  "key7": "AUHnCmt3ovk9k16bMar6HKxdidttXm1aiEpaxgupju2KF47vwkhX1kAsobR7XDdwTvSQjdDGqcMew1y4nHVrm1S",
  "key8": "euuhPAkovefv8uCTYSFzdxPoF44D8spWAaT3h39dwvw6bUrDCyL185ozsy8Anpgx9o4aGQSQKxKTScZ2xtJcfhe",
  "key9": "4j7wrtvCktifM1pB8PU3d6g6FzE1cG6A2eLawBufeTxSCekDDdfGRYdq5vJqC1Z2pGsSjrrbgL1UFw5gfBirnMRA",
  "key10": "t9eS2q569RisGuWBn2jkEQ7MdfSML9NUyRBLgcPpRQb7oHwXUa2qzLBTHVFxQU8CwapsrZmQEnr4bYHgueEURJo",
  "key11": "YudfAdxKx8qhtdt88hcoqr594P8nxPtnEbbHGtTvEPVW9ppc1fSoHKF1Qm9SvHp57giMxpQrz781ryE1vPKfTYV",
  "key12": "38Rb7L5CqaHhxyHq1YXemtrwras3GTq5iJGABx7ZXTa5Ue2XwGhnefSEHhv2Qg7wFB5HzRYwKTobwTNBmM4JZnif",
  "key13": "2c8Qf7e577aN1VnXxX6vmReu8vPu9SH5kfR8t9QEsGo1yH8Fch9x62GJNFvTi2kep3veCFWwr5BvvRyMPoUAdcFw",
  "key14": "5oCCHapGDW8TX8dMh4QruG1H4orFuaghUCUNhp7wF85peMP6nYEuUGbmfCzU5ZhXKJrx6q3sPAGEnudNLXKx1qo7",
  "key15": "3d2md14VKwJSf5m89PbgQEhSH7qb2ABrcaianZs5vSAfYzfe7QAWScrQmNPp4yT3umgEYDabb7auQHtgwYmN193u",
  "key16": "anQCNZidrR4Bbc1UgTyqPX7Uf83JQWBb9BU6fVqWumnbwNyBuoWZFqvq5XWQDQdkWVeRy5qaAknLPs1eHAGhPsH",
  "key17": "4XM6iQxGjr8uqF8RcMUVrHuKXhNgneFWakf2W7v4jc9ffcnzVDo7pQY4AHoMvwjxrJkTxcsjaFJ5CBwX2QMpC5gg",
  "key18": "26Cxe4YeVT2rExBYCyj5TC3sjkB3enXoUCo8XRTnB2DKJFccAuKFefcp5MQu4Ewwh617EuHHXV4p5gBYM4sMpbr8",
  "key19": "2Gcm7ntwmucHcUjQsSXm7FR5ZmqJ9JgsiTStC5N1uu2cMxRPpxQE8tmqfSSgGZ1GipvyHc9TjorEbHGim8uK6d1N",
  "key20": "4jxUCU9b4RpPoiTLHVzBdadkFq1ZFxwuKoLxFfWC5oajsFUA6hAwLvud5bTdPqGc4A6p66a9otF5D1UhH1j2DtRE",
  "key21": "5mvnZphXARf1sccWjwNikiMjCafDxyEECG1Y351aannATVPiSQhBee4GdVq3GwCLe1ehL7roGSAzsBfAfNYbkPuE",
  "key22": "5EgmR7DHpZdYtc1wM1k6CZrLJAFvmAh6XFcfQgoyuS9vUrFNB2WR9CYaPi29q279pQNgiWzo7jtThPqsZjRtn48k",
  "key23": "64QV3bugcGKgjqvWrBJZoVxwtgDtFjeuAFU4Ex4hSZ3k3yf9y8tJagkX6z9MvHWS5aaL54gjUoBCbbvBkmK4c1uH",
  "key24": "2gbGJ2tMb9hYYAHX4NW1mdf1HbodHk9b4auaKBrjW9GXiXobUufLcA9RvTz3myQYgfioAHH1PLcW8LpGZ9f5HUv7",
  "key25": "4ENTT7aicDw8fwVCshfwotfjLd6jngF7sXsZkMmpYfdn8QQk7gMmZbiCg1pCgNTh4Lkxnr4WSKcQJH5KNYNTYq7x",
  "key26": "3JZsXe4Z336DvBu3vY4X6N4HEVVNJk9sDPcMbksWEuGXeqXvhnPPLutSiW72wk3gpwoA2CwoJsMB1WeZ8oUdqkHX",
  "key27": "cAid3pUMqZhhYMiocweYU1dN9hJdQCiyvnfZ6omtMJWkSpQirsDaiks7RFfKtWYtoBUjDFx1QBJQXibpHFBoVRu",
  "key28": "2ifhTwNGdLkY6Txp9LB7P7qUyARJp8CrgWvUc9TU1xtqLGkm2aaRmETmQpqDgib8Fu1NbpWHYxMrtjQ9a3cW17hJ",
  "key29": "3gu8rEAy5M2pvkcirkunTLW1iDdhXnYCRLYvxShhZoiaML6t3WYJmVFtEuTi4qSrDwzV8w156ehiwuXeSvMwWGEF",
  "key30": "4tMhq2ZWuCKZxcZGB34C9pgHA5C84TaZnL8ir9EqXjdbrSJenVW1JBGCTboZwfmq7nrcNgqMsj8dKLtQgWyQnXnS",
  "key31": "2LtJGQWwd2jdPhnQteeJjBENdSyzxRepsYsiSZyZDPFsP4xH8g3kMEZn8oujSv9NBmPZr1PtAk8dupwdET9gQweK",
  "key32": "9yqGEJzpVYQuts7DVdoGECGrJBkBjTHCdcM3EbXXMEkhxFZDrGJsiHeGGM1jujhKr77QDPpfBRZ5GQEXXGyFna7",
  "key33": "3ogUtrw3U4fBmejLMtGE3yJkXkQNs1WNKwid6QmCEXQJkAJgL29rpsW7GctzbWTahcsKsoU9vyi12QEVi1ig5TP9",
  "key34": "3cj7xAr3Xcv1SGNWRY4TwjZpcRxdQnnyT73JthXqZ1XA1ujcA7BwQ3xZbfXZL1QrVzpHQnrjUSRZTvfXsGtcaoxa",
  "key35": "i8PGdN8ZJuYFthmo99xR4tMKkc9K7V1eAPTFTxDjnxWEhcMjBteixPN5yNhtWr6PyoBtvB4Qkmv9fKkfdwVowp7",
  "key36": "2T9BAndJ3MGYUcNCrKvAsQYmb5PZZ3v3FYTZ4WcWJaQDfysqEVMdeyMeFDkna4K6ftVcuy8iPzZRbG2BUdkoCHiS",
  "key37": "5PhCKoX9N3rFv4XeGaejx6uikt3zCggYVdoJwZWMB8oJsBiDPCSc5c1TLH2knihTSnby84UQ6CrPtEPkifYcBGgK",
  "key38": "4Z3vEdXX4Pu9BTXN53VFBok95TZmJQepYsREMULZ3kL1cRTkFEHhBXjcCb9NG8zeN8m6LUz7HeCJns8ogwsCN1Gy",
  "key39": "ALMambMANRFcT4FVi56mNzm4fm5gViKu9Miwwytep7E6A8nWnPV4fwLRvCttvAVKV4j3sFsXUE4LparpFb3ie1H",
  "key40": "2r4LmJ9rnR6HAox3w3HxgAvMyqexpiSMFrsEQ8XHauZ6U2weotmoemyoyK6nS2f5LFJoxLD7Ju8bnjRvtehTcyw5",
  "key41": "XeCQfN3Fb7vndkpR3BpFWQYoXSXeorc8ogHebkekyj49zbUoScLnaTcEAJ8AS3H97wfigXmMppS2oa65wtwNKMF",
  "key42": "34hpcPnpHGZGUcAed2xkddt1PXRaQcfANdtYFrZFM2ixfkc7i8efS6jyRuqvzCZx52mvcce1RXVG7WEL5iXCW3hT",
  "key43": "iwZTc3ZRbszf4rL4nrE8iT3c53aKxsF4GXKb3VFpLZB7RiZGYZpYfTfQWUdxL2Vtpi98xtofx75ubfn8YWL8ya1",
  "key44": "2pBxxgER9HonitecEpi9eRfUxX3nDq2y27sJL8t3TQptyrUiYkpy5M9S9qZRnb3dqZfRHRiXHyMVZVxcw3SKQKjt",
  "key45": "8PXmmJkWev2rmGUW2B9qBcK3iNcG1H3domC8Wojd9wHvY2syoCUupsNV4N7uXyRCbn1BbcmUUJTH3T2DKGNw7K1"
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
