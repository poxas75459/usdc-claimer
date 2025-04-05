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
    "4sVyzeCAGDqn7ybzrL6kK98Jjjc2Gegdu1paovwtwTDAegrTz1PDeKixWSHKkP1qK2KW6Kwye6rEt6JS2gRU76rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJRaGCUpgpQUNeNTmEKMNBrCenyZs2EGvvXdjnFxMKmUgDRcjXg4oGyEGZb5KgNGHrKjkxxYcB4w5piYnaSVLGd",
  "key1": "5QbcvhdB58AXfKxeCKtwvgaQCjwC8S8FQvmhGVSE7k7EuvQVv5jvC2mEZ4ZavrXcP8ioyr8ug3DgQuuQqiBBGhYe",
  "key2": "4ccahFrVb3YDynUPoBERZ8pVu7KWE8murXvCmpCFRoXn7dSEandYndTAPrB4F2gJ2Gq8hX78YXNhAYdMwkkwXn4j",
  "key3": "3XsXoWrca7A9awKaw4MTdwFvt6SXEJ2r2G3drz4FdrLytPFTxsC3UQxaYbRpDAhyWdTtnkiU7fLH9yaFhBp1a2N9",
  "key4": "67UjAK7sYzYFghXjewiypRkizcrzwtsvAhitKJX9Fb44zxkvLQzLGJXc7cDVVf69cYbdwSCqUczZgFW1ou7HvxPK",
  "key5": "4ZddFHpHNSthndSAeaSPde9Jf9dwBoVdYYqZMLk6djgtetCTKRA2dkR8hRjaSKdunHYYYtsLVEEbUngvAQi5fYU7",
  "key6": "2v5hKbmm8juZh3xf4drxB5gKPfRHojD4C7t2TNnhceNrFCDFUGucEgz2bMJ1rG5USbj54yxWWTEQ1cXdsJSbEGZz",
  "key7": "3T7HdFrqWRnocsSvNtt21zBJp61k2pgfcAHUBYgGF54Y6vfNVATLYFbPhuYLZ4xqXRMMsiL9g2YL9zteARn8yobc",
  "key8": "4uTyqABFDYvvu8pBvNq5R4oH1PSYFAiqFCL73x9SNfYmteNvWkGgg3KauL49GTzg8t37pWvawUzHCSyNytPi8ksW",
  "key9": "K8yXoGc1c1AJ1DAuBpKp7JvWuNtiZHkGTaqS9GC2p37XC7DATAtYEWQqcvizYL97r2jkoxWhbqpVDML25Ah5wuZ",
  "key10": "5R52xMypniSN28GY3UmHx4UiteLpJmiUEY8fAetBLXpPe25aPH2MC43n9gvwzrXJxWrtzti2U8bx1F7GKJkwtESi",
  "key11": "4UZAH2jZz2s2mRFtbAwtFfhkb5s8sqsgyjQfn41WqA3nVhecZ4xFuGzynbkDxnsTAvPF6QpzQsUPJjZcBzwyWCJd",
  "key12": "r64ZztBgMRd8wRWNcSzb4rKD2BZJReVwVjhogM2Gsu8D22gGP4Qse6pQUnUQ1jD2taWJTXmgiAqcSW7bjfy5VPQ",
  "key13": "2EX8Cq22LDiMYq2st6JXfqCrZYc2YXVwTPmdTS1LdMU4qse3MCX4SXvayKNFyR8LbyCDgRHcHaP4wZKGLSNRrsD",
  "key14": "3mMW7DGKmmwrkTgDr46GMPevc3ohxGN57w8zKJthVx3FZY8weNxqLxsADfadGMYDatKWCEja6xi32zRidc5ctEF5",
  "key15": "3aJDNkap43gGSsxqdLxB9fDeTJU6ivhWT5uVSrb7A8pAYdsdMmS8zhdAgh9G2BrFHjH4zbyP7u8PG7jRQ7aw1vuA",
  "key16": "587HsakHYX1xtvUT1RyXW8feBM1Jt5JUP8gruZWq9jVgXjcWcnC2kAux26vU3QkWyfph4McC59n8qnXBvh6TvTnD",
  "key17": "cZUN7SCdnJbtNcTciwnE3KVZZgXC8hJKBDkdvGC6nQbVZMNgXFutE3t7Ujh2bKkmbFRQTzD6YoCCYHBmBZgzp8R",
  "key18": "FzoZSjftBg2d1LbHeHznZXsBT5jRqquisHKAYwB8kv3F3N2fT1GAQAuCePX6U5yyWdY5WFZSRa9qaZt8YUvXLZL",
  "key19": "ju3vMDWEd7U1vgLSUmg1BU4gkTDFtxi8GuW88jDJkRLd4ChSfUp1CWn1StjST9LxsXECVPbRzS7EJeqkmMwbCMY",
  "key20": "3F3hB3p41arXJ97w8TKUKkag5ZaC5oCKqeeb1juvmVaajopLphzMDa2dSk8CaBhxKepnFMtvdJqt8exoWHw5xQzL",
  "key21": "5yHLNFLnLXnMvRAb4UEYYKUyRNpJN82pH91xcMwEfVcJup3ibFuixjXeSDC9QhLfUohwcd3kABN864nahorpvnCM",
  "key22": "4XssZKERyvApDPaeBPxXAzMrh6Vyv4B34EBApg7bqZyPyCNcjLpfRhbAiMj7otwiKtmb6FcTqxhBDYDjvQEavGti",
  "key23": "66aeXiGekK7cZkvbeK7vHNAEnVXEVwquDV2sfzogtcd7DEZUuaeGUMnNB4i8U25ExUcMZW34VMoAHFtw6LkHFGur",
  "key24": "2yGDchuZRCLrp54S2EN5QNhtp4FWeZMAfhB1WX4ry8FEvuz78Kj4FKnTGudV57GtdEWN2rA2gB5AyGA8uhUgote2",
  "key25": "t7xtsL1wDXJ7eqXVEZK4uY3zfjZta1mmAZBfGM3QeUwov7URN4PrTHiNtWuMA7fZkbF3vjSwjdoKJiJDVTHaKAP",
  "key26": "61VF5EQht3UPGu15P43TxkD842DpBN3TiRXdhNCaNQFfb5B4WFV5X8TEP6NWvpU99avRDWnpxzBVSKgVzfuxRPbD",
  "key27": "4t6nnkkaTEBPAEyVhqPLaqe41ikMHDLCHhFs1YgRbPQMwYbtDPKn1K4gzu8hQ3x783qrqReHbSAX52ChzHWNc673",
  "key28": "4nF3QXcVCwokN7mA3EMNrhum1iXtsDu2hfnz8i479LEjuvGk7hUh8TXP3KxmzGFrYeXM23EQSfRTeYT8rsun29Te",
  "key29": "TJw2xPHiKE2KB1fBkbDmmKmeoCSuaDqpXxsvuR16oVZ8fYuA1rcMQN95CQSbx1pVD8encbDv8L6g2uw4LHu3sJf",
  "key30": "3VY9n2KZwhEz7c3mHT8F99yW3EWcC4XunTBmvpS9g1f1Cdmub16ApvuXxarwmoY1V8YSYyWfqiAvyAdVKUhVvofY",
  "key31": "3yu9W2ptzR3nUBwqERPG4TGBEjFCXJRCyz5ey2E5q5jDtmC9dpBe7eT7LekZNm9SkasbufizP5mmvdfiXXDiYAfo",
  "key32": "2X6TdW8VUQDPCuNN9f3iTeAyapdNyoHJsTxyU93hUr5rYYERQqaPaqP42KC81gCcMHB7gZSZb4561oQw6KXmZ8Pa",
  "key33": "3e5vY43FofXDTWiJCbsW3Ua5R3TmM8LUu2XJBnRDQrwKiJxECAVReYJ9gTLMR9dgY8gzWgGBW27n5obwuuAaxnom",
  "key34": "5V1PWRhiu43AzjrzHvoR626KJzTkVDXrivgsY8Me5Xh2iVconxfsCb94yAjjw4AtkH7n6MFZMYj3FWwcamm7bduy",
  "key35": "52uNqMNCUAmQ8ELTaMoXZdF4eEVwfHbVYWvNXYU4nu5guhgPqHRiiyfE633Xfib6cCtewDvcWwbvip54p6XedGqe",
  "key36": "3QKYXE6jUQvZvAQFVJyQWyAcp16VSJaM5VBcavNcmE49mxviQHePWtGLkngj4Bb7mPdT6Xvcv6z4f6w9sYR38sEm",
  "key37": "5NRH393cZ3nzSc7cgwpdXmdQqhJESZcr8QAdYAsczKVDCPjz6NeYAfhAc7R3m7mVgENtB2nSdFXU3pbGTnFokmdv",
  "key38": "2eAreqVy9dSMP5dAx8g47t66uLQ2ko5pzCTqEG4kW63pJuw9uv8p8QeCKDeUHTcVZt92REbxYmSd3upsPNm9PUHg",
  "key39": "3UDYgmqhZ2ZyyKkZuAv3jjv3Do5sF983mnwVJY6JSQisYEx2yDT8SvBiPvfMgPD6jaqNU1uaU1JJowv2emV4rrNh",
  "key40": "5YrnVUogkmjnhsAqsuea7ENraDUm3VDP4PVyaBZUho8vfDFLBdEtU5J6VQp4GFBoyHeENQ13PweTV5THsQZGXVop",
  "key41": "fv4GsrcQWQbWoJPDiZYoGW4avCXbeZi69ncvJ5qWhjcqF9yHngZg2sfN4xYCPWBmvFuDFwgxtwVPfsozHFAczVe",
  "key42": "4BSU3YJbwqbCfJ1uzcPNQMuF7wSCziB4f1SgBH2xMu2zqx129e7TRjP8CAQYtsCCbDXTicdV4dP6mBrymakR2MD9",
  "key43": "5iLKY1LAMTDLfgEGsYrkThV3iARBotXtAQ4stAD9uWNSHMK5zFG7xdcL9kw6ntYCW6VuhAfwH3joLo9qbMg2Dmai",
  "key44": "3ejmLap1s6fEi435ckHj4nHWaXxKnoa3hpf3kDu7S9WzKw9rocbRqUWJ6mtQtL6bRU6kt5FWE7R6zAn3CSm7peTi",
  "key45": "349thx7tkqv6PnXbmg78tW6GW3gjdPkXxSfLfTcwFjyYSFxREda5SEQ4LRZXa5dtiFH85TGrzEVBpmeKRgqnjF86",
  "key46": "3MmrQ1dodpcNJmYBwFPuhH7JQ75JxAYRGbXd4tmv5TsQ9b6DfuGHwRn6cp7mc8Y3CACjbkcySzJkveuq8eBGhfyk"
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
