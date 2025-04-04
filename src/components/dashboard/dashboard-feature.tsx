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
    "5v47TtGfTAFHquniwbgci9m6wity5JV28cw7SRLKpB2E76sv5MbxBRAS7xsNqH2m2jYxJqKEr5KBjNU2e1NNKhL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmaHBY21ndEp64VRX8r1C7RGuwt48VTx1wYfyQcTaHbQQvFhm7sfiVF3ern6fWyDP4cpRreA7dGnYm37EFiy92P",
  "key1": "2YSAizLnjwW76VHAGqBrbT5iueYfgPwcxZYRf6PV2mPAYhbuaXKFk8bCj1H9Vng8UH6aLY8s4v3aYDxydkHJqKjY",
  "key2": "4e8cVJSNp1NgVvDx6CCzqHs7SBuJJFaxpTFi6J2EAJVG3voAdt1RMn6UcUzNvqiGbxHLL6c4FxW9fBPqryL2AE5n",
  "key3": "3qJWz7DtEDGHtTApuTzz3Dwjtma5fsor9XaJni5571FuKArcMFm6GYBytiTD7Tg5oF6csGc5MbCpMWNGKsVYpEqk",
  "key4": "fNxf3g6xBhBLeMtZQ3ejbr8RXUoPrcjDnoLfXTzjSRGY5FXPsXNSpxPXSX9GBMD44To8NDAYeJyd5vGVQrNBhwf",
  "key5": "2FZsC27HBvC2MYDvT5yK2UG9oqnPdiwpYJJ4jXEp9DGzWiPspeYmxC4x2ARUkgRcgT6fkaCNXj3jmsfbDJfcuSEr",
  "key6": "3Ky8SDjgXgkJ25XVgVnPQVJpxWovy8xUEQebcY5HwfHLpRi7wFT7T6nNh6oRVgch28ypSAir2L9NHDerMgJuYMKV",
  "key7": "587KfhdRTdVzTFHi3enCmfMgC5NhS8M5fMZvhNnvMTB8NtJsph12mDE1y4NJJu9wpc8kedtaXkDYfr47FaGSRCet",
  "key8": "48CJSkq6hqy5CB16FRjdSFebteTKMi6uFhK4QiSqkY6UmZTbiQivSwachYdiZTNkWAQmqWNVjqBYpzcjojfhujtk",
  "key9": "4hwCjJUUNYbsEannP9pqtGyDPU8qt51XHkB6Bvdu3vPGmGM1c5vP2t9tc2jAiQEBUgjQKjDTfxJTdmNev1QXcmC6",
  "key10": "3aoLnvfqDJhhm974agCMAVssKxv2EJXTKc6u2o1jZP7knYhCRo7gk4wjrwzNnXhTumxdeGkTJcBrZoo5M1utDEKP",
  "key11": "2RnU9JwQ5Pg5pjsCbpdtT6GYFkvHxwGLabf15CsokyEsv3hWkCfrw4YugKg25bNBJ6T5CYf37JGeeSupE4FaBXcF",
  "key12": "2hPNNeouQMDz4brnJtBPm992WKLEcanhmdL92dZZPh3UHQqyMEEK53ShCm32xpaiBv5jdQkQDJL4aRNcn15anmXx",
  "key13": "f75YWKMWNfMkPVHhfMnBLH8TqGYhMioWqFwdjPDyFWLZhxk8wJ4hqn1iXiLJbo8XizDCmG8igrA2heUFQ1yYvhc",
  "key14": "urSzu5NTCePmBPtow6SMUFw5sWwTRwyJoj3Dh6EQwwwVTJsBfFVbG1DXGHrgk4pw2AWE6jPupmYmmPG7WJZAnEA",
  "key15": "4tC5xUr42Y3v7eZgxGnXDXSfLtsvXSSVRwPbaa4u9BBWaYuz1mRrpzjBN4n1ZkP69QPdJMZBawPwYh9RZzTracgV",
  "key16": "ZhxsoBGo1AABddw6XcZP8ttBq6PeKpruQti8H4bQNafYPV9BYPsSgwE6CfqZhwT5uxnUP7PYhhAnbsLRS97yot2",
  "key17": "V9ka36fqPU7hStqvBCmCso7pvWNsCKTnN7uYNtZGW9haV15piEoXiqDSfte49WtW3tN4URRJEw2doXuXJ5Qb66P",
  "key18": "hE8tBUtUpYrSMRmVe2bfQLbJw5tiJpdLCw1eSbQaeBS2PNhnvYS7KmJug6YQkPkJJcAputPfPxiTatdt7CVxJFR",
  "key19": "2QBYJiX5j7Votj8ZX11LFUX66PtSxU4LhQ7UPw1XWKCNbQwbrHKXJVQkrXQmfg94Xv6gDq7BuPD5tVk8GeZTynMS",
  "key20": "5jWweXKgnPVG57CTH8uWvMovW94xACkK272LGtDQywRuVPmxdsc2gbKd93xUEfN3dxYafGXxHjBqmEM7KVipW5zE",
  "key21": "4RpYJB2Mo2CKDakVozKUaNL5vaYaPRHt3WafZryT6X4rQod6Ed2B6v1qmvpRXB8iwPFJRammozTw7hV7QyVggSoE",
  "key22": "5Uc6jXj9tBKzBspSn8uBG5Wb5UoSin9yQZtzBYSUU3P29U8Rmk38RNqDakvQpMp1NxjHeMpgdu88BnKQTYffAgKk",
  "key23": "2VKcvwktfDLPUqLdeEBmaVj5RHik41yUFYmaZVntRgpKiA3cRd3JBGDS5XNAgwQ1gvqkA8aTxUoRpuyY4my6HPfS",
  "key24": "iSjE6L8rVTL99Q1kTTdb3bpmozE3YFFxfhuekJEMa2cHTd9NWwTNyiopd6jLaa2CDywU1ZuDNEGUVXbkUaTRpY8",
  "key25": "4k781WBijKChkmQ2gLc49ij77mUkutP7ti6aoENktJ71pEEAbsZXD2uWvYXNekBjXdeVsz4sudJmyPhnbzND1TtW",
  "key26": "2vjQrPMrtdQhhULXpKZT6AjKq3R1vc8sA5UX7es6Yf7Zdf8ymccCfgCqgf1d2MgkYys2dXVXzLsBQbNKGPs66TzT",
  "key27": "4JGc8tp1Rb15xvws4ZxnwCG831d2yZvK8vHiTGrj2wLjj1d8LxA9xuAgoUgxEWRfv4MEGZM6mDNPjTdJN1RNjPhx",
  "key28": "5Yax2HH5JZ8su8XeibJwrWCWbiaLVRBo2bJvZDAwWQc3WibmrHT2ME4KDoFBsYxctAVvc7BQfiD4z52xzpGypufV",
  "key29": "4YaJyEf1ezsxRtNjQLRaiWYz9SesiTyimVeLJH6n7Y162hXbLmqYmhsDvMgSqmxsMwDsQw8ttoYa3kyxFj4bmAMc",
  "key30": "3CQP8QtUvoNuRmrzYmH3R1ukd7zR64MNxwRcmixNnCXemNKBQJGeTC2WsxJ6AUABEMJdr1RzcbKMgvP59QodHNJ9",
  "key31": "2fXrZ99cHCTgZr3eGodYQKxWtWNCegSxnFdNpHaQpDTaqqqa9o59WRJpb4RxtMwqF1hRZxbQZuncLTcmEwG69Y6Y",
  "key32": "3FB8NdNASJgv6g4cvw6sXPDNXpVhsz56VsPffJ7HCHdwNwF53XYwTHKcdvX4UYmXNbQU785GN4HD7SM4N52u9gsJ",
  "key33": "28nLwLZJbW3pb3q1MLxeu1kDffvmMsJ9MWKHDKr4DaeiUZ97p6thnLPYg7X2bBrcwzQgiNRX1XSWzUSdr6Yv9Pda",
  "key34": "3qEuvNhA6PtsoKPsmFYmh8489ZxVU11gceV4adt1Rh8iu8rqw3Pmzh61LYBae1dLVLtjhhajXn8xnz48NkGnLuiG"
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
