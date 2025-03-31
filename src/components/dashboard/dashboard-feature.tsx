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
    "Gia99b4bum1KbGbL28z9zdRSyqSWdXmbSu47y7cpHM8KdJS7QS1sJZw1bfsDPaQv6ir33TB2ujvSDSntckhCAh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYYLRViLaQZRDU8eackrfP5w4tqPKC2hfBzDDEhSViXXT5UrEke698yaB1BdSSgD3qZQUa4koBV92kGqvbBPtXR",
  "key1": "2f1Ct35eLPbtd5dRkeT1GsRoZMJtnwiFiSnZSxxStFkM5ZgGHiZcLpu9NLy4Q9GC6cYq7hHMnwnb8tKBdj4xydyQ",
  "key2": "2DBus1du1aZzads8DojGcEziUaVRFmRuRax8pHHipP6HUxCb3HWapqZxjYsMP1nqBuEHD3nvN6e4smbVnya1Vo24",
  "key3": "2DgrbG7w8K1stbPHFitrHmeJxwfUiqTtyoErZaMkFarT6EvmLyAQKHkmwh6cNvZoCJMARt8GAgMc3baMEhPkUos4",
  "key4": "3UyngWudx8EXZ7Qav6SY4TmeVmyqYdUgfJd7o5yzQ2xxxGqDVFoYhKwWtNuyBv415h6azjTUFx9q3S9CLhG8gjaU",
  "key5": "Lzni1BYDeZp82gJhhtEEmD2K1Fn4P26akzaxoh3o2eD6NndzciqSdN6yrR7W1f8D3Vc734zvwwB4PGkK5hifq1T",
  "key6": "3TLL2uiRCvnpTjhYvPF1QJGB3JQiEa8Y5kq9mXS9SKwdPce3b5vJxYnWsYRDZvG7bYNi7m6JeZTk1qWHpDfwRt3z",
  "key7": "4teLpj5QwLFMnhW7XTRhNB14J2JaPwpvxfx2U1HfFgwwez2vwTyQvwkZLLQPofCHDsF8UXrFBmSQRQb33VwkfAyV",
  "key8": "4tSPmEwiiseySdWZ4udzyh18K9UxpjUxBJPgJRRxQnLyMMhmwYAbVxRpbizDKexykPCtuftkCvruZ4R5oEepZj7P",
  "key9": "3ZMQ2A9puGLBNJQimrhhQ35xFM4nwesvWsNoX3TU8oQPvaJiJ9A7r56n495nwwtKbNC6tycR1CqTJACPcFomX6qc",
  "key10": "22F43boXpxqdV442RznwGmqrkQb7WsrPSNbbmKajsijnenQ5yTFDeUwb2kQw4a2PEBGDteiVKPJz4dybTaDMyqkZ",
  "key11": "5cHsBcdU18KHkApjFrfLb8WBQDFMNQZYsVRUUCeoefqwvoSNTP3avSuaQ1XFZJK2sr8mDBnzoCCFNcXJ4zJfhhWo",
  "key12": "3RATTkAuZyYg5qbui8QzXpxW7Jrzzuv3ZHSXLrUqnzNbeQ9L5JiJXB1j5hJyxJY1eFiANgJMYUtGp44Y9euFDhCq",
  "key13": "2AWVtLYdnuEPwsCKi1EaX9T1cKRxdCMXkExoQjP9D7yRyzXcRur6H1WGPGKbNU2avPcFMtHeJStpkrnGqPoEkucr",
  "key14": "4cA8uFfacpfYHuNXirAfsFVrtdJU1Vm6SuvoE7TdXUkP5G6wGFmAbFfbgzYuWq69qyBHmVHayj3so4ivaPbVYUNp",
  "key15": "5qeypzjULFnW3LjpLrz1MXeQ1q38k8oaxsU1HuXm2tYhrA8x3U4jUkqUC1KRDtJxn5Zp1d2D6h1NGJ72AsYSkjwR",
  "key16": "3yEvqYnLendFUzgD8oAkkyUjGUrrDdd5ZSWhjfovA8avnVcRVRLbBHKugc9GYkASyGpB3psx1ToPQJKrrGpXo6Kn",
  "key17": "nmXzcwmx1tZEbpNFjD3RAGzZ7AGp7p3Y1N4syzyVCNSg2jmkAWSmVdhEc3k9T1yXKqyBsbb5T6Gg34HoajxKB7F",
  "key18": "2cvnATg2gpvtNqknnvtUe4yyi9aF5maegdH3MDfDq9gmv9cbTW9p6HiFRGgoRLKPyfRbJiKjfGh7E56giETtvSkr",
  "key19": "4v1xWfGU7qcQtiqLhwv4VZZcXAkLJJztCBRijPpidzTq52aW6Y6ZkzWprN5qzoVujP3xSkvuTNVngf6Y7rKhTbQb",
  "key20": "58ttJPJwWVYU17a7BYitK2tZjpV3Nu4o18kdsW9VER4rVRxMyBaDszySQ1bCcZkK79ziqg1oEnh34gwQEEpnJJwv",
  "key21": "4J5PCggX8KeUJa65Vx7N7fXrvP4DUttnwds3jQMwP1tDs6njMntSET78X6QVjMzDBJdTSgbT3YbPdRHMdsKzB4po",
  "key22": "5eTm5MAj8pgEWKm7GrYZha6AuDVFaLTo7bgge8uYanonBAcNazWUNnFxgXXqRXJmLsCRDRvjVGfTj9gnNawutxY1",
  "key23": "5Heef7PAU1hFsmNuP1S3xhwsoqCbLEzk3gJmnGP7yDpWCG5LZgNZjZnuZbPx3oBjJyxcUTXymkbr9aAZYmndV3dc",
  "key24": "4dDCxEhynNbDAHQJw3J8Pi55DtjC8hCHqzMWe6RPLgb1uEWxuSrqxXQKWohDjVM8iZh1UL32h84H3QphcVNxBzGJ",
  "key25": "F524tYyUWuPKU9ZKtP7wcVtNqvrNmHoihSw1vVREznhHAH7T6F9FP3eCbwWyFhoqUnNpBFDHfYapuD8g3TwcNtR",
  "key26": "4sRGS6rmJdz2Vm6VPuhN7z7MsyyjBqc9wMr8kfwgcSoAniKgBBfm4kbgJ4cSWSdwiaqzsaH46Vn6b8qfXAwvavFL",
  "key27": "52qyn7LiQGYmLn9A6ByQxi52PF6mA5iWXGELxAz5TnGqDnXgWjHxcuTexxDqZNqg6ZBn97JDquJxdrjCGgFiTvja",
  "key28": "4qS6dNV8RYDSBP4DjxhANdw7rsGBYPfkCKSA5tfoyj4jZzE4spd1qu3PQz9mrY1FzXjTZvfpsvcq7i6K5aqziu97",
  "key29": "3Rhafrjzs63rFUyntWexmX7QCYni5ch1H3LZMjfGjqsyKtbrcimzRckchFHip5zdbr3M8pRmFZzGFrK5pgr2yF7j",
  "key30": "2y7XiHMK4MidNZ45NqH5PgAS6Y43aByxgTe5KWi65QWpXxqYd8tnyp9HjQSpqCuQpxr9wkfouXcimnuj5FDYk2V8",
  "key31": "4vF5PEuzReJXuVCaNk8yNW8cdKCZ5U24SJR6ya5mzBWiZZN3FpPUhCd1zUghnQkKs4BpcJC5Y5eYy5ef3keydREs",
  "key32": "3WcdsgUBiDv7tbiWReSqnpE2hsi3nkTQNZMpidwCvCXnVGeMxTML3YjKFE6xiSCdLbzQXwzi6K5Zhtwu1Zm3FSMi",
  "key33": "3CaF2ePzBUtCELUDfcQtiU5DRzs52PzfeNLmYnqrgN26fejGr2JoZoVHXZy2RUDxP9atmEWLao5QugVbaSksoLr4",
  "key34": "2zJG2LDJpiKXtDqKfqKzZqAmUVKyX93ZNWjZY5haC4xdfM2MjGQAxoRqf3w9NgB5Z4khoxytp3aTLjJSJoGtTLWt",
  "key35": "tM9tKFV8wYDb54NQmPzYTdBkLufxfwKb41u3ZM36c41j5xNcaoFXEzs6qVH7VvzGSpY9GCPrKsLGaqSVRSZMBxT",
  "key36": "5B6A8HZ2ycX5wAXMAn3LrR8Sy3vfWpjqPCF38wVnaYR7ua9jNrZn77tGWuZQPHYKoBXfvUoCPC7zdo2nxAoRooxF"
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
