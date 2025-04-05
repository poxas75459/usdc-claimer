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
    "4PqkFCK6FZZE7iDYHhjaDcEgrXq4CDfgUAU8Xo1MLCwMj7nnnPEovdjZxiSipJGNQMd36kcYerbD4MV2hujLcuBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUZB1zFy7HXq4Leo8iaQdV9wcpjCXtqdb7wYpBQmWciJHAyQcbpRw7HQoKirFnJePwdzkmEh6U7Lmwdx4uQwFTG",
  "key1": "2mhUxFa1KJv3obxgZ9hYmofzAXkQcSJoekZYULz3SuPLcrj4s9v1xvZCpV31vLM9vsFiC5qUicca5svVtEtt1GV6",
  "key2": "3DDr2vQG9A14wFsLfefyxYnCnDwiR3iuiQ8FTxYU4LLLTPnA7eZeurs2nVA7yrKm2aCNYcfgX92fE8ig7WJFzSiT",
  "key3": "cyFRpH28zivmzykRBtsvyiZMCJMCeohhKk3WRwUL1pbSfef8S2m1ksfRUKvj1Kw2qSz9twy9A3XpEwWxhkYfTMK",
  "key4": "5xsrxbgTTSgHrVUJAXSwNT5Sra2ms8sELSXgKpdwyGv9A278Ar6vEGeduqoqgvoZA4ghG6hvDYEKnsEgYm6nw4F5",
  "key5": "4d8MCWoXq1o9EQgpRo9DGEdqenRK58EABF5qffnLXYwBjA2y79cnU9ZJXLp7bkQAn5unmVkiDceTQVxsepc2He3c",
  "key6": "n7dCf7jEZqCKhhSprZaQWuxRZVrTr9cBz3651pxJTG7vQUtbBM7P4nMddJaKjbyjAGdnJEUokhTgJtQmTmnJsUW",
  "key7": "29W6gcf1kjC8htNbeNMEPR51PdgPQH9cdzAgtjjKWdXxYMMRMWQTk7WmMUacGQA4cJGuRE8XCRH9AeNrgB4Dgnyf",
  "key8": "5wV83FK4RjkSJqPdAbWiGvzFmKycdhxP813v7oHfdLYCi68VaoH5WUxvoKR6VSJqF1oABFNZM2sNxxB38gLqSAtm",
  "key9": "5xBas8iXiXvN1Dkeix4vxQ4gxLB1UXDu5KREiyMX88Er6DLZpK43L2hY125VoyWPmzuJrH3NzU5z4EaKjNgirkyN",
  "key10": "5an561UuzZ9fEC1oAPB1gnvPqvZxG1n3kyjmKQBERZ2iw9siYuhgHzcCLUJauPA1P17qigFKPsvk3cypXVgTNnpu",
  "key11": "Cs3wfrFWG4JRrjKo3TgTwEGYNQXcbKycoFv9aAmRMHXpkEzM4NxaW5oznonKUCvFGL6xWQYniDVQLTdTtjwdd9V",
  "key12": "5yLXnW5zecK3dfRirG4FGDG2DnuAk7pFuv5wHsrmYrjq2wGQiAAvgnLUDVy9sS5CWz5Y3fc42duoLATWRiRmZNwV",
  "key13": "23fqDDoNVeiGtGG39viTw3vd2Dds5FkWGxzvBXRKuCHMFe2bG6Ma2VSpbc82c4WE1cJbgTA1uYwtAruiFm6Kw7SN",
  "key14": "5VAhxtYjrYVJtjNpsXap3gBrQrnzTN8C7Svj6UgRF9XzhrM6jREph3HTuQGivN1ZLKDzH7QdsmVHy8YFnJeYnT93",
  "key15": "3bfV6hDSFZVZWM49GLmge5sBNRfJxQgHB3TZ78uvNCmi94jMoE7GEeS6ufDFwmTEBcgpDKj7go9JFaUsRic3dBwg",
  "key16": "35DTzWdGZe3aSkd6m49uWCq8xs9LEYWqZwNrkHqfv8JQosKfwTi6ogJCqUPoNFUKvBurMUfTw7sD7532ArW7pgZS",
  "key17": "3xNuEo7wXdBtJ6KU5koqw5nCog4XDapBfi3mw7VQNcAVxv2T2iABzqQcVJFdH9jp8ymhak3UgTsitA5jQdBNNyAf",
  "key18": "v7Nc3s9CMLsj4MDNUAJKC16B8ZsTJd9wgjFxP6tgUYFUB5S5gK2d75k1Vv37aGcR57dnkCKgMCyZkDANouS9TV6",
  "key19": "51MHmrqYsHkPFib2tfDixGdu7gbyyRtAR6S7zKj4QfxmEcxds4KSb1n2R9bhmKqo3kY5e5YU4PhtMpUqYS7Bj5bY",
  "key20": "5Ufbbakc3uZDwQRh7s6LfrHAUe4NnEn4FcpNv4Nd8YXN4gyAWyjGr3YMiCZNYaWN8oJzQTHAgcVWfBfVk87jzZjG",
  "key21": "22g7hCkvAe8J6gNnyF1LdTxj8yw768XUf6QWsrNE9Y6FvSn1bs3d8TxxJhEPeEj5Sau4pfa5zyBg9yEPBZL2q58s",
  "key22": "to2oT8EgoXfYdkg6aXptKwxNDmdyu6RE8rEmeJWZY9jEsDtfRPdJYxgUSFmb37G1TtBG5jssqff3xukN9BjFwGB",
  "key23": "3psjwdPtC9bgLLCW8HyTj4CxTay4UqeAnUJt36SxehmQjmxJxxrYDzDyPiRVkXTdgz7oouTapZ7FVmYtfkFqS7CE",
  "key24": "5vJEhiJDirDbUqPuUWyy71yCg8YSeSxy2aUF1zgENQ6sZX8TVwBMERVPGuBtDQHiUgpnVviWbNLBoVx2oFbbVb9q",
  "key25": "4PrQEkvMJncBdDEPfR9fwiPtJTdi56p2f9btpm3wMCHWYoAs1pSJvwakKX9bep4JAeDhkjpq5QxLF1Mzs9fzqNAA",
  "key26": "2yaBiWJ9AS6G63raG7pgtzCT88rN8zgTgCuu2LHX9seNNVsDMCt77Cczudaf6Riu4BB8hXoCTLLhbj2uGEG1YN64",
  "key27": "3TYfJ6NwGkKZPdJVtSUmnJYyXNA5ocX9s8UFJAJqL1wRcTdYcH5WvAkx1vKovimVCcASgGkNpfbUS5YZHcVWebTv",
  "key28": "4NaRFSaNAby28dcZdeXxiJhNq6DxLNj6gZNhywBch2KJmrPGjY6fyBQCxzRviPWorYjPHeoXFsRMUUSJH5CEhUhR",
  "key29": "JebW47Qwnbb1TvvJmS6P1p2qhU98f5dCeC4byd9WdsArDSQW35Wza8HbUcsgxjFUxDFm5U3whPw1HZ7dvw1wy2e",
  "key30": "4hnXZE3Y6RH6G7x6aaPgC6Y3zfspDTpAVyUuP7KkuZUFGFuBAznEj5VDJqgrUAKXEALJxKDnVUhg47afUMSwis42",
  "key31": "qajSc9SgKtUBsS2J2DZn75WHMiGYmSH5dA23ArEdk2EgXsXPEhCbd7GdCAtuYjKSjoPhSRxutgxey14nTzPhboE",
  "key32": "4ySH6xCTBdcZYtMooJgvj2D1aiBUagrPTWyCQQ8hux3f8vzJPcWUzL51YvSF1bKy4AsJu3U8NUUQnZjPb5u8eL6r",
  "key33": "4kaxdTn3pzsoaxyafvwQLtPse6HFGECJ2rRnUpMEG7tpfKGGvLbKY4Y53z2J3qbeZthaZqqZj7JNbxzqLL3jNtjm",
  "key34": "51s4Wm8g6bp12bz4Wyi6cwySCzYvvaDjNir3YXHeEBNxggTZ22WZPRuuXTUCWqBmSxmKuLJUeNb2fPUjbMU2QncK",
  "key35": "XstTfz4RJeGB8hpR7WisXjAF1LGW7BpqJDQ2N8Cr692ts3av3qKbvoJYnHMnG3vRZnQ987VCLbQxr5fnq2AbtRN",
  "key36": "5FYx7iYihrwZGfftBmjqQGsQYGMghoJj9Curcfc6a2mVhDq3Jt12erxH4VXmzxk9tpN5LSgwPTwnzGCoLfWk2nHn",
  "key37": "5P4dTjQJu8viCBQ3mwBrmfSqnwG75NndaxepRYh2mYCk8eSeTYd1V8JccFvXMkrAgaujnNLdHSB8D91KFBw6VSf1",
  "key38": "5PJFmmHh6od3Dth4QAmahb1hRPWendwKFVPmePuHTqGSHRjVbMYP5usYNKCGn3xXoDndWKyXVFSNjZV1Gan3knbB",
  "key39": "4Mv9NvprW1rsbXfdxNHrFJrPjSjeg9unnSRoEMTZmY2P41wAB1kNNCnG7Brz1MSHVTCK7oynrjYK1i3LKiwfheM3",
  "key40": "2EwrpBvvXimMiAAcND7ge15oKC131J8sNG25cuKTgbbFVhFg4z5yoLLxEJeGpgbHogBWiDumPKhB8toxweh6VH2Q",
  "key41": "4Y3neh3t1MgRSKeVRJK8vjeTuppSuPsFmeZdUVEJp7QBhGbNU8GMHxff9dH56s7H6YAWpLxG2jeUXf33NKZNAwKT",
  "key42": "ZauLsUDQb1aG1H6u4YE9h8yYqjH6r9P85BwZWLtxmKBfep1tpeXY8Y3XYJ9pE3DcKqAWh5VRNtPE1iF9dSiG6MT"
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
