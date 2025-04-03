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
    "2VCQL4Wf1KTLXmXm6y48h9GtiSzq42nvNcRbvNT5vGZrNdQQTeQD2C17y8mQaAq2vVZAtMyHUuc7X3TEsgMko4FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Ln57Turb6tMc3PeoEuS8UxWDZsScg6UY1rcNVgnjKXuTb9bnnMgXMzhZfq8CuGEjek1gpE2m4eNha3UKuUeZVr",
  "key1": "3JsUq7sS4JPiJtub8EhGKYVpB1X26aNTqp6AQrhe98NBF4TXrcZcmCyJ5gRhanjFvemy834PEHUpCLyJpKYSAvdZ",
  "key2": "4N5fVxEjZs49doTPLBiH5xGqUJQTHKBf8Nc6ggRQ4gtAeqdJeYtj9En8bX1Qv3qxX5TQahc2yMrXh7bfBrxtXMJz",
  "key3": "4BfLVoj4A16yZosxYMJ7EjKD7wbytd9u717BLcEXhKU1TBzqbAvUCAv2yZhsf9f5AuLWGdL9yk3Jf9BNx258xknC",
  "key4": "57wn2xeoLeQsNKGCb5QBjt59Kou5hK4VgVEm2zmQHjrA1dfrjmAC7aDAZRHCNvXkvrNduesqJKiop4hYudQfuLEh",
  "key5": "5e2kTFddPA5wAe6JqNmKtTbHmq45S89cJR3DFSeuD2ToT5nS7s7ZQdWWG2VxvWpvWKSgfj3dFVuU7CkqkNM1hCzf",
  "key6": "27EMV5WZ6hHeW3TCL8Ln8jtXEj1yyBKDtnofvMFN8rQ79SEukLU8AoDjf8Nw9ayeD3BNuYTJty21puGBnxthJeyR",
  "key7": "2votxHLZJsMvCBtEPWmwFJqPKgCaEdN7Rj9yw2PUdpyzktyKgVB98QyZiSGy8NVZnSdtEQreTMpdLYWjLX952qvG",
  "key8": "5jBQUPMRNKKmiPUoTFNgzRa7QcXxLmb1iJuQrsAq4RMGsB99e7e5y1iqKc7az9v6QFL4keFtS7JuGS6ufmtc7mCC",
  "key9": "486HbvTN8G2AXvXzRWxR5KaaRrWrZZ9bahiJ99Rq3FpANcN2DBKU7hditoZwXDw75HC98TkmBME4bDaiKsst9XQ9",
  "key10": "3fCNvNUqX7YTZBCTucv2avrn7KyaHey3TJ9VLQVJT6AN9Vd79gXMBDxZ1vM7aGXBDcwm4aZK6Xuocnf1aAtCMjdS",
  "key11": "DHGJNpNzrRCJifZw7dRJFDgy2vBGAe78UgZRgajdAAkYofYpYX1nssAhqahumBzKmBZWEbMi5L5d7D28b66HGVN",
  "key12": "4HWomMhpG6gLpfNX78wVECniy4uG9D2cgj7E2m9KA9EZTFQcEBZDzsWwme3XKqotJyVc6v1D7Sxy24YYXSApV5P7",
  "key13": "5WDsckvs4sRpHLSNwfCwXEF7T7mzAHTYNJFtHJbBMNF61EFnwgShzRonuHmFQKhbFWWGnQgJ4hrYUhHrPL4ZyGS2",
  "key14": "5iJqcj9dCMEgxrgX6D12HE1tkRqP1y3LFbLCdZmnc1MebjLmrBU4mjaSTSHU2YCfhEjNzTYv4nYfgDHynMzvGfS8",
  "key15": "3tHDMheq9ALnZWDtBnUQ27Csve2WiEfmpr7ApBzbSJo4wuKq55W2jwyZtHAd4UP1XMQUAHhcYKQgHQnqTznQg1MH",
  "key16": "5UyULGufjBMcESyRu2nSJQhJ6YuhGQzssE9zGGUyudUZLpp4FRzaoJzfDyqUXj8UXogToAPSCUDLx42MA6qgVcYC",
  "key17": "4Jn65zJ3VjQip3GcG4U4jhHjxktZdw6rtpFBbTBAkTgxEmVN4zFAD9CXuHXP82fKPaYzLJNZ9z5qsWC4jDiab97q",
  "key18": "2Dta6YU45yrr5eLbvd1qfCeCKhDoGFhJQbRTXSsqFNifLBuL667En44f3Cx7BkgjGwKwQEw2s8hG8Eph37KrTrxq",
  "key19": "Me5YsuCSXL69R54A2VdENFFS926YgpFok7vn78aPZ8dfPGSoE7fQ9bkoE8dRgBadv2eNsU5Mqjh2zxrYgJhK1zj",
  "key20": "4XkCGkcpDPqXjQRtyJZ2kc5jevfewaQe8btVXoDysGZ7YBv4uCHv3ioLwDwEKLaMS4S3NqFFd5FxA8twuGbswL6S",
  "key21": "3xRhAXcUSMt89KVeRzFqKh5QbBMiMge2bKCmAcBNFRrKLDwNN1CdckRVAAQaQZdL4ocXnUaxUDXtXDXdGSprwiFH",
  "key22": "5e3pjTPSyxfkkMTWsoGN3PSyfmM7kmM1uZj23PrmT8XVb4JxQT2oGT4KozsWZzZEv7vWshKNnrbwiin1PE5KhRBz",
  "key23": "5D4wBoiKyNQLMAXcmPG5sShFLcP7S7KUZ3dmW8ao9dJbd2efGSXtZziG9ibVS88n63NFjV1QJ7F3ovYECuxrSerd",
  "key24": "5pKWVfhsA4HU9QYFvgN9SkgTCqtypjKSGseLAraQTpjUwYNygppbTXPPgdN8p6nzQQGj1g6H1zjWCbednGZWNc9R",
  "key25": "4kWSUj4tESyPiA25yJb25g5JsPmQttYwv7TfgHzrK7p5yS2shXP1XRLqWCLjCQ5qkPqJtR9cYqbUsBVkNCiCgb2D",
  "key26": "2zKnvjk8TmuMyGUq3XoBA5H5xbwhP9oNkqi9Re2bKLtTtmKqUdmUCN4JxaBu3JU6qp16yNssxnAJo8Y9sxAVaTiJ",
  "key27": "4XP1Ht1GBd8BtvRodPVMH5ECMAhafzFFxP25ExjaFhqZqRggH2z4tz1hTXv8EAoQZih4mX7FUB8Cq3n6dko5V2yr",
  "key28": "2mAYwCvuQ91eNHgBoo8B8yQb6KjbKvvmMRQqNxt5pWmmdjLoP1L49nrQaDomhokQt7KZzhjSMrBCp8waq7aPP1Si",
  "key29": "7qh5YNiFVWq9LivVYVK2pt2wmBCnAUCZfjgGkELhZEzJ7WiXj1EpuyHH7WhsrSxKxy96pUtCgAizYBShsyDWH75",
  "key30": "CuVStdL43t9kgd6c8eh9LnYsp8QsvZWNchjjPAd1hGhHGRkC3mPhZUicXs4AfsvGWfQqRgPLgzNsayxQ9gYPnE8",
  "key31": "42EwYPv89qk6xWAoeqij9tBBfvJRTMaxyXUbD8QxbwattPdEV4FZ6cCCEzFotRftBbXNWdcEqXiwNuEypyzF5AjC",
  "key32": "5WDPGMBNk7aUoqF5Kp9Yf8tdCgujVVA7qNjpUSyWqzZ3Sg1c4Bs2rskgV2z3Sv1d5MgBuwFGgci7CMYtQQJTCyPk",
  "key33": "3gr9U2AUViJb2hdWQu8TiwA1oN31VqzdZBLcMQPaMtEheVcogZPQzwDYaAu3F1FBt3LWSonWEcuK3NMnmdCzzQvN",
  "key34": "4qoXz7Ct9nEKMCCBLsSZX6PyEferBEEYvgGhn37Cf8BduXncJTDwsczQ4c7b3B7YrUsgi9shLc7JhREUMQZF7FgT",
  "key35": "28AYhyBL1h1XCQBdGkrDnRf25e8ccovD9sFc4MFc8ejxZaooJM7Zuhpx5oa5Ro2BGR1FAuFkV1XJ8kHtrimQ97L8"
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
