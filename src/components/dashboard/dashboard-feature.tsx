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
    "63Qob54qsnFKm1bRY7KALaMxhbxj3HVMMcjFhhFURPbqXpfmTvH2AGmAaemjhAFahP9yrUps8ogmBiuGKQTTDYsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcDrknNSGF4y7Nuq6LJRacsvMv7UsnE5vVsRwvPy6SYMQ6p41TnfVtQqmofMoYxqX9GGs1E7NtKFUaS6QrQ78oQ",
  "key1": "4uHaUzyNo9sHgV5ZaomKHZzwoe6r5kVPud3ngxzwp35tiNbFujhqb3TAZMinA2A7syMHVoxtHiQrRegGopeidFTG",
  "key2": "5ZZryeSZqoXGK4Zm1ncZGN83Dz1XbRPDc2bYjpmg8eKtDdWD6P7idxjRpTD6vjS5A1GaB7AKwvmHQbPkGmKW6TXt",
  "key3": "5N3iDbBKWNevBAK2FxD7GBwN8ZCxiyQ7BjfYYaka1fsbhrg5tL6caSjghmxfmcg6896iYprEXRbeKRBN2geTgxUr",
  "key4": "3wzeUQZmxZ67kNEGxaXa4riKiby1bFVRAep6zRpDuHnf7tSd4kwjAuxm3gMVeg9PQgKhREPcrpA4nZ4RxboHa4CC",
  "key5": "59aUvuHYe44sVHVPNYiAFSWAwF7irnTztcHXBtcL7CFnHQDJRtvQvKMQkS5c836arzMWU7eemLfZkepoQLAB6h8w",
  "key6": "s4H6Bv4CLBUuEdiXJvUm3eS6ZhnUmyxoeMBzrpWghEPuRADZUjyXx3G5Z9TpzRxs45Ja81C1NefNAyts6ehm5XZ",
  "key7": "3M3n5jgi6MasdR3p41fbvX5tA6TDmcQGYj22JZ5TAUqLWe1tRAdi4DApkJQ5mXabzvsXtgtxr8rmTNLVBehiNZkW",
  "key8": "4XJDy3Dm5ETpfWC3ZNohRJwZsR4oWJvyUt2M2VG5dEeFQkoBaRn7f8jKHsNCd4x73GSioeaqHvf31Ym555gCK6Jj",
  "key9": "3mWutNYgZXHGrJpwQtC5x1biaHqfeL8Cutjca35qpkUxWCqMTzfVP8WSzCM2KuixzMtnFDyvnd3XT9q3mMhc6WjZ",
  "key10": "4yZeskxYnJJe4dzuPZp3LFh5eStyoqhv8sTQjaUSX7W6vchb49pvuPTMrrHdgJ6AY6iuepryMz5Dp8CxLurzS4Eb",
  "key11": "28GAB4HsDrMdvAAXLriLqM3FoT2x6HXjMWjtzFJMzdrK1gaXSa51G8K5uyTtLSohhRoRf2LAkJfZ9gNVrTe8oq8x",
  "key12": "3SUB5Sb4sPCL98z5wtYJqoYy9eG3qN7UiUPAjTyUoU9bNELn7XeewDFoqLMvvK4gHmTtnCqWceH3BeuDe9zAEaS3",
  "key13": "5nU56gaWxg2oW3xSUWVDSW5HSUDqvKhWxhwLZKcq85zPgYZt5KffY1ieKKFw71UUSdRxunp5uyuP4nnzRWFKrRw3",
  "key14": "2fkarrmGqA1Y1vL5sTfRAUnJseaqM2jANAidzSqK6tPnESBHymx7ibSmvY2DeaawdD4bAVRBai73KpLmjeGzMGWN",
  "key15": "4Kv96HBN1vstWa5LXmFNqtJc1Z94n1C97j8qgJjan2Aq8Uo9dps5LSd3SNF7gMmfDjuYbz5rLtCLVJZDEdijbwbv",
  "key16": "2JDF9NFdoGBTtoUZDeka8JQXzqK9fnNXZm9zx6r5DyMXgL26XpVtvtAXkpfnzKZ9egU8aTMkaA19sfYMNyJ775bX",
  "key17": "45fMkB669TkNcsu6iisWqj8aYkUpDsmq9u9SSDfnx6daBDx63nsGVyF6APgJUEdmY1nNnciFqnfj5APgpu827PsL",
  "key18": "4ejdKXJ8igtse21fckpz3eo3qAxT3D2hSguooQ4FM94h85duAh4s8ZrgorRPC9PuVTo24aKG1ww1gymAqYdzfZpF",
  "key19": "4iarijYT9edT9sDXDFDrb2XRWqzRmXBkZwKvYXSq9pEsKyw1nfAyRRnLLHHn2U3QW2F4SAx91do9QemhixqRZktP",
  "key20": "4mZR83BzVq1qyNFyRPkYiBLD4qHkhxPEF4pZBni6i6pbq7UjsGMLwdptWbk8K5Ga45edv7Q4oHgPd9zhFfStz9TT",
  "key21": "4Ru6WTS7S3tCpTLfT4KXxbDF9vRg1ar57GYisBZD2GTQ91wQxznoTNuVgcaK7yGEpNuoJnzjGzffZdLotx8fQHi6",
  "key22": "2L1KrYtDrZfuDhLT4ikGXs1sTzqi97NCKQWWT47vTQHp1MBxSyVhWGgHtYhqDDqZUdPxN8PmTVdvNpuL4odBmHs3",
  "key23": "4vake4oxkFmgxZaHPCyf8d6U5wo4q4m8TUeXqmkWzaQdmKhbMr2aB6unixB1GbFNY2ZHijdpvz5vpQiVcfvU4j6c",
  "key24": "5a61tuWMMQFvRQJcJwykA2Ffm2i4E9W4a5gHzo7xqQDWUoLqehSkuF8rzszysGx2vwenvaTg2jR59UpxcumBD5KW",
  "key25": "f3FRS2P7NW8aZwv9AbJyFxWZQaMF2p99CsiG4QVjg4EorSeBNU99aTyZuh11sBuBStYbVVabTfRbCGhBgNXXKWi",
  "key26": "5M94qfxbXPYu2xFHqddxDeGxMwRd1X6GrFtt7fDxMyK4pnpVGhk2hMF5rY1J44WWAfwbCaw7iQFx6VWWRAWevwAP",
  "key27": "CNdg5ybrVHyycRVPLzffvFLsdDt9EQqQuVrzASqEDoNwkRs6vGfhnqJXHCCBPt5zYY1J87PoPqJVB9HX5TZD4TS",
  "key28": "4PJMrgyEUQuqx5gs6mYVmqQ7D5XpefYCyNEwabfBRUn4nC8zHbvuGudJY4UCp2GT2b7M8ybksgGUEAEqzJY5wcYn",
  "key29": "2UiaywfUKoSeBicL82y1AtcxqCLrb8uxzfePxSkvhHj8oAT4p13mwHV7NJ79K7pApkxXbarwvUsrJEqvjJFw6y1S",
  "key30": "UssSoiis2MMJGG4LzWWdp8YXixVanRxe97grmFFK4u3egkbz3cRRLRDEsNsWRFjx4TUrJczoBaShxJf8ZfrDgZg",
  "key31": "2EWbUuzNAQRNL5FkjKUNUzFZ7VsatN65oJEjNvjY3mTB9pcDQDCvEtJihVUaxs4SoaLTioytHhPF2upVpF69K59r"
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
