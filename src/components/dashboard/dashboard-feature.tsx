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
    "5oakBuDdUh7VoCPijeXEXyXMp1qBp3XMQZVMc1CAxDg7Vr2XKEVzrxu3TTPpuBXWDA6pYnxmNnfQUiPeLU2G4doM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhC3L2dJRM8hq2Cvcn3Gao6AHmLC7xhTCZMxEcvcK33mg6ZTwSUUWD8ZwFcsG1z3RbE9EE48xrUVjV9fhJ1Womt",
  "key1": "2AmKZapbpKgPXXLyaFXFhLAVWQzofkBBADwVS9139NnChVQrbQXpSJCVJPR1TqRNh7dKawLH9ZiV6fEt2cz8kVkL",
  "key2": "AtnUuENkGkNdM5iUmTLcZD6TSDJtpGLRu5vDnpHcxvWj3P1uEzcaKxDsXDZ5negnV2mgdnN5bSJw5sa7RQgvCZh",
  "key3": "4QYiVvhffZAcw89TGkXVgQy5dyjYdFZud3J6gKVhRofZpSvMyubxFnNo7CrK6AEe1pbDLTWvFhpegg6JGdQQbT42",
  "key4": "2riRceCgihe4Nsvf4FAFMJ2YpZ3uzV2dfXV3epbg6JUu85mwJ9BNkBEvp1TKRyUbLgyXJJ3iYepbD8SzTaEAAMvw",
  "key5": "eUKsuL11CHgmYeBQF3gQcn4CasfNYFMHjExQCjvYgTWh18HqaeePfkZ2AMRuwJRvoke51Ck4iLoK9paQv5WKEwM",
  "key6": "3VqhqiMepz45WbGuz9k6Js5d5b9A42FfyVra3qHj8aVWVqhUMFq12FD1PGXiDjoFK3xcmLUy1oLsqpRJmGWat2qY",
  "key7": "2Upt38W4UvnD41N4AfSueCxm9StBApKp37bPt2KJz5SWnGqgqoEu3piqSyTspfBdjarxCgaKVBU6h9urxA6ytLB9",
  "key8": "3SM21azHJHnHyM3BDvJdND2A6e8mX5y7PJ2np5nisfvF1Y9WMceSoe9jaEat7UhzUfGjcgRU1NuTEbbYeAuTu9SY",
  "key9": "Ena8MvoyzLbRSE9FHh4AVEPCqjbhkzhKmmZGQNJ5e4Abocd2B2vWgZQh4C2Yc2RgVDqLgr1V9vutcxPp6CyY69u",
  "key10": "3t7kTNXRGc7ATcLmwWYmtBTVhdd9SpJxSCLoXABbRsQeJ4sUb9xnfoD91Zars2J5ozXJWqP3L8Cp8a3sY8ssv68V",
  "key11": "63tQ1FufgYXGrqqFwY1FtfLUZPCw5Ji5xMhosf46sZoA9eSaEdb32noBwavyEC1fyjDefVatXSJRMkWA8LbDYhvX",
  "key12": "26uiT5QeUc2KuvB6U63hxfM9Eyub6h584mgXkTK5j3rzurRV3UDtfFcNPoYzquEdb5wkBEw27M56dZjetahSBFkk",
  "key13": "3HAa9Eo3xV5diU1LLtBwL4d3UcHM9GFRX2HD7CJgE4E4XEnuiNTJsmJNX4RmCSFGCxYcwvJcjEAXq2z4ZZhtitTy",
  "key14": "4FV4Gjtyji55Yc11eGQfQv58B7gPhsuCAcayn3SvGqdUsLDcG4iBDV5idLJg7ErRHV7232BcPmDz3augNfffx9BZ",
  "key15": "5X19c79fxWbnbhyd5dvtuvjrAequEbs1HQ4UXJjBTFEYR8GSqySxpKU8UusGjHJe6uQGA5SS2XERoePwK8Jo9e8V",
  "key16": "MPMJC2Tr2GRAvYsaQvtdzfAvCEH2BTziJx2dc7VTSrFrRbdyADBDvccaMbf5ouNgAXUvspieP4EEw1iS4p6hxtM",
  "key17": "CyZkyfvRVYgMQ1HXyuBhBjSy9pFWbVhPSymW4tqg1xLqjnNcVsJ1WxdDAfAQ5YzWQMSPRfcqWiDiHgkYcwFPT9Q",
  "key18": "4ak7GQMBq2RApDZodxEX7EYwydFxwrrXKvnC4YRpioknW7TLMWXNNXb9ajcu2mSSbZiL5viNbajmeagfhAN3FPgF",
  "key19": "4WfTkLhsHYV2ToyJeuQaFcRFtPK2gnomKHz6oHpmsyg5YPqTvYcQaofVrhjnysSrGsXJZ87u2ZYpkSTQVayB8H8Y",
  "key20": "4MPcSGS1B5sDdgaj77ZoSq4eNMvFivTA5FQSNUTaqoZ8dEBputRErMSpsuMG2nCLSCdNat2AuhvUepCaPp9VcjnV",
  "key21": "354tbLZzz2jvhbRQmRo8DDHdpexZKYTxieiRDnFkj6BKLXv4PVjsXcxPuvFHqi4LvRfBMoKuDR8XdHFFg7y7v6Pc",
  "key22": "4VC3z9D87hTWBWj5u4HqHdhRn3cgkyb2vjE6BqjFgoywESnvfEoMQRhAWDawuxeL4nWHwb8A1JyK8JVKAnJHhPDU",
  "key23": "4pexa4jjY4H7YjVdiKwTXEUnX8XzJ49NktWFx9dQe2JQV9dVV8LeWyaNtEChaZ8HkgBVdRBqNfxUgB6cGTT6uT5f",
  "key24": "gdRBZJ5CcF3UPgQuz3cneWBt23NADED5HKV1e4b5KcdPotwazLqLNLAnBRhx2Ku61vks4uf8zDp4aTAqpV9NjpS",
  "key25": "4WJhaRpBk9UXAQoGhxKBvnXvw3zYq7T5mF1AfLXbjFUtVUd9SW4YtZ6ammmdAGtMgyiEBzHzqEM3JayE3LSSf3qt",
  "key26": "2hCLmh4QEoYbwTupEQzB82tqqqEtW5hZWywKGM6UCgBaQQkmvRXjreccAsruuDrvjyo38TaMiYigwBtNrSKAfnhN",
  "key27": "BQpBA4o26tJMKhrJqfupGzwYd3jwMftzvnwHVTrpUgYmLPyfGf4iKFasdCDG5pcF74JWu73BKDb8AjuEVqu15h7",
  "key28": "3QjM7hThqS9GjLnPrbpn8Ryt7YTifcuiS1ojUeCVcyMupR4X4639RyYt5v7hHQCbUGApAtKM6hYJzEcwUaiV8A1i",
  "key29": "5Yu1h25HQ8k6ux7Rs5xHC6cnvnaDWS48B9u8seXtuPa4ma4LrbgmupSDtT5tr1UWZTYy8CKZWzKHtUFK1f9TG7Cc"
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
