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
    "3Lv1ytgvJXXJcTZwuwVxJcQSoGECfFMmwJW4gifvVL63U3N12v7XoH91Apom23DgQ68iEGZwDJC4UrERbFHPDjrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUpE3XrMqQeR8SL3DjPhd8zEiT4nS837reqgc1hJ6eepgZ1rRUZSa2A9qtnhzbBDr5sw3jneeSMFGu4AzbeD8oV",
  "key1": "5jENSTiDv4DDcUspPqRdwmTSb84Xgh7jEiB9TH5D6FcZVAXWQF9u1TrjaD7pnTkKDhpwDEiwy4z2rCbH4NLQs594",
  "key2": "5hrkzNL3oUYhyWm845W4fg8ErLaPn1v6hPVHt4zjR3aJ9KntFuh113yDJ4iFkUdVPJi8BPQnQb2ddzvKSsZdLsCs",
  "key3": "4QMwczqP1ypagN2BcqThVAnBfr9YjCNetc9YSQqFRsRejgQoVS9AbdURaLN8PfHcHAtomRuBe3m88Gpqift7cBMw",
  "key4": "4RV992E2bVmgVdyCYQdVTGoWZzJFN5eBnzm7KgrrQGCCGKoeZ2GNqEYuKyp4rdVFYTH3AGHfJ3y9Vrrv2LJfDAHi",
  "key5": "vLArxr6iiTgZrWoKdPfi71hjBUN5DsyVWGmwRxn8a6ZfFDdKip6N3GQctTgGzcxeAimpp9ts8ZSX7BDwAuYhmze",
  "key6": "3dXHmKatUUULFnmfdGmA4bykY9rCKWfegYFvRFdGeHfVayPSrBHUYoe9fjNizK6GzhJpLNiR85vhu6GQBtmyThct",
  "key7": "64XQaUvtngQfG1TAAukQpSWkicJ9tkgrHQf2b9HYi5uMPZgkZVWFTkv9vsiFTR53iFUxwxrh9B6zPQoWLpY8u2ve",
  "key8": "5LeyRX9FqmiBBixcW2EPKyechstAzADZwg3MAHj2f9x5hKjjmoaE62JJ14CbhXHSv78h9ck3oTZq2WLkRu8aQt7b",
  "key9": "3ZArRM1G39RP34k99W3w7hTk9e6p8HHsL4hkd3x8wcsWkKisrFLBf9S7mV9wTGMpLySoGCUGUYZhQeW8chPFrCVx",
  "key10": "2HBRi7sNLU8xiLoirykhxdsrQTQnny9kMb5SKauEAYAzo7zoNWkV5LBT1WgvFMACRUwLH1yjdch3xjb9FKcgx8Tg",
  "key11": "4MssR4mx9CAtziDXTX8MYxyzx2zjUUZwxUqPGQ6g9Cud7zchgDsqm71iCQhb5RgEFq3hLizmTfBYBw3Zq2yJtY7r",
  "key12": "SBBfovgumkpZmVC8qz7VzhiXjERQbggDJxr6bf67VZQkN1FT2QtWPBrhk6vfMMxjVy9CV8MyYD491zjx4fS5nQG",
  "key13": "3ZVD9C1axquZ7yHsd5RbdV2PSRabtqhimhko57v3CfvBeMMMnf3TGzm5EZb1xUbUGTr5uRrYyWQaHHC5yDgpDrvE",
  "key14": "32DTqN5sDMQoM5Vs6CZ8q3Z3Vb2UmnBfmNwtaTZQDMYrwKVWPhp7HhsZLfgurr4Ph2EtYwqpBdqQjtQRmhUjyNEq",
  "key15": "38i5S8wfE1uMjHy4xctZn54ULH5tTjJHUMY8rRCDDsZ7FZG9ZbiANG2V7L8iA8V9GUSx3weQBsMXxfrAVpt1LU3h",
  "key16": "cnDEkiE4xF8Kv1TyN3pzm2iJWX7dfJ2rqU45Nc5GzV2Rtnx6qFMsnxFkbGFg9qyav5cg1cZLhR2H3KuWqU7jNa2",
  "key17": "wrYrnRiQdmxmCXUm68wqhJu1pSziwKKkwszGG3fxQ3GRjaqgx9hVv69E4kdyXB1X4UNjFenVxhW36roJbf1spqv",
  "key18": "5X8Xi5WSTaPCHFFGQJzYXnsRHnjQvQxDa6w3d4U1Zf2SYVbdkEXBdL54JZtmPVh8rqjamAAA7qfwbJZA7q6Ayvpi",
  "key19": "5jqVdovMssYHV35UUnmwArURwp8kyf1JG4V49mXDqgYPCUGp7aYzHngFmBER9PyRpCJ9HVxwKMvzLMf7Y8k8TTye",
  "key20": "4vRiee8v68mXFqy1t4FvoLfm6dzFKtGGTDXiQgYywdsfHtVBpBDAPFDXqKjFb7ZQwNXDDfWWF8mR54DMR9exsqe8",
  "key21": "2Nh1REShRDaJP58QxYmFWSHAwEYLZvM8d9JKR16xfd8n6WdQWbNfQNdivvsvwVu8tjcWwca8bNdyk3qAjBqsVsZf",
  "key22": "5CrBih6n2dws1T75mjKTn3B4qzRhxfX5JD8RUmC9EbEgba3UJKwuhMHiisgR2djzZWJmqnP8WjPx5pHL1oJgZ9fg",
  "key23": "2RpNubGzwrGEJbVsXt2MgP82BZfCiCPS9FCvKaszEM65QmrFmpAenuPT3CFutWgNjVa6mA5N5CvZTMKDBkpVT1pP",
  "key24": "4PyH29L8LHDiPM5SDevhoDqKvp4XCx3efZnNj3sowPdoY3CaWk2ksA3dFsvx4BR2HFR5CXtmBCdbwsUrxm4FjuRo",
  "key25": "3LjBKGNGWpBZxVtydvYf1R4U5R1WoCRaicRhtQ9UXhpREuSiepcNrnjpRkSvv117uR12j2tzt2DNVg1K6ArVbrFm",
  "key26": "4BHdhuRBsaMQBdP8dkCbFjxdDDUWwdgEaw4rCzvVUPtEkNeqAjW9QCwBRs1TQWGfwvCGtmn7zkXFfu2XPfZSX9tz",
  "key27": "61vVM34RMRHZmid9cKriqoJVq42AveGfMp94cTjFrEWS2hvd17q2d2qJ1XapL2bH3Zr28ShE9Y7i1XmVqvwib6pW",
  "key28": "5mT9WEhHKRjNztkh1x1p3Q3haZkuZP2K7A3rtd4iZ4XWJzpbJdm3bB14ECejSYReF2hSU9JCzajJEmUNvA9SiYiQ",
  "key29": "UZ78ajPM82vRHdVb8PxwarrzAnvrsB5KFv5xuxcQiFZDDnV3amevVag1G3h7oNFSKBg8pGk71BVd5pAhkaee3cH",
  "key30": "3ajFJhCsQviyhWYQHjJHvoo57awkUNa9gbDRWaeSHgtDVZFLDscX2kXeAjZfBic39znBtMg1xitP8dm8vcNUet66",
  "key31": "3QXW4Fcmtaq5H3MFicHoqH3PiqZumMq37ii5fnVGtEvPaAKrHvymHbyXj7DmBrr9aTeJUCrZNnbDN35Ktz5oneBa",
  "key32": "S7MUJ5v23thr3gZTm6oyTgY9bPYULqQk1RwZADBJQ9Ab1DqShiHf17gB4wtX9WSTpbT7weZDdffNHRtcSJnx4fZ",
  "key33": "2n41Ji8V97cbNci65AnLhucEeyK2QjZ1qPLvhnFYzqdddCVdZaeJD2qe1BjW7PCjYtSznJeFkzdCuvkirZ8pU5x4",
  "key34": "2usFb74jJBoHKoxR125H2WLkTq34ecEfUpcWJbsDz7Qz2JcZDAdhbMkkY5YrP3CthqKxGFJeJTdGGSDhTGNPkku4",
  "key35": "2Lpr9WGuQfZyxEnc3A2HR69szrwzJaxsbc9dkzHR9AJbtLG6jisNMgu3HczN83DkKhJ8XTM4Eo5WsVVnDLjNx5WS",
  "key36": "3M3aQMwZXpwKgoCSooUHSXaDY33oYyzBqTwUrbv4s9JLLm1NLo23ZfFaqhhPtpWN19Z9ppPH83JsFZvimPua4bmx",
  "key37": "4MmpfPtdeFfMUAGGmKYu2junK57q2WjXU4ZK9XfnHH9vgk8TsQHUA6HqdmUTJcQaqm2H4C2sJj3k12UYg9HqG91S",
  "key38": "52XHpg5MxLSnHBAyxX4d1iQBNRuR5eo8ThWnarFZrsC89bTLMY2w1mmtiVJqet4HMuxPQUavngWfZUKVi2oibniQ",
  "key39": "8pAL1hWB4ATgrLR6ePwvsMgYiGEMCZSCWohBmHCcRWU3XAKKJ9iJoa3u94BvP4cAsuibPQjq8YribPuYCtGUHye",
  "key40": "3Nu2nK5hmHUwEZqj6Hs1tmRae4Vxtzk7yfiXGNPaik12ubLjCUUiQASazVcqyyLBiKM1kv2GKPtbSfxhhnunUPHs"
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
