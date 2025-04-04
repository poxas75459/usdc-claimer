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
    "3xrffy3QWAF67ch3a2KTNHDCiqRSgZoAvCF8kFhQfknmEVeebjW8q7NSoJ2QgCDwQmMpGJtd3bTo7aqeXSqE5qWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkSLRh3GTiZE1rewWQ6FXHeh8PHvH2yiSX9ttFGmW7fGtJtwGWcTsFCfCBNMDdaqxtfAB1ZjdN6X6fuE1gkpkcV",
  "key1": "3NfpjKWFSjTENMvGeDp1hyecmbSScNRWQYu3EgQoxkDGDHgXiGbrEF3b4kcXVjPHKb7LKpATh1JJMU2mVdexVHHZ",
  "key2": "k9JQqdZybLEzaQSJHkTr7vhGFtzptpBhcK2hdJb2nWJZbLGgJqbhYecYPwe7AJavEF8tBxkgj6HxdzAkEz2YCtS",
  "key3": "5RsdPBnT2yFRU7TnihPjFoBg4C5M3oytmyriQMGzYafBD9VqvzfSFnVwVJ4m1jr7Wki4PqfHBgE77WaLXFTLGYSa",
  "key4": "5ET7MqNGvxJAFF8HCWPTsA7sM2e2cC3m1qtNYEQAyXhnc9DMmxLqMABukePfZ54NZSddsrYHTSJQABSQXqS4p4HV",
  "key5": "3YbBM1mwnanYVqj8bWCFMMpoK2KpZJgURbBaASgrHsPrQskLkpXWMdffYB8xY29cNoTXNY5FGtBAZWMbSRqEQqTd",
  "key6": "528CAvFC3fwaCWjmEYDFL64xUAKJLW5ciwDnuntEzdi1vrCZGYxKpvGp7rDak75KeLk4MwRfHHCUx85tuZVtESuE",
  "key7": "5iaPgdg58UmTPyDBzMwofRVcretXX3WQ15ixUgrBFHvxywxwfLeMxZNRG67hayjVzhbiSKRqYkE9m2gMDyzpeEwc",
  "key8": "2wzfyupCgqFaFT3CstLxFdNXT2LDo2DhenT4d7KahZ7qycaWNoDU6GVEWBEAFsDtKJn5GsFB2MEbe2nVQ9Dt6Yb3",
  "key9": "5nqNpzuxrNppQYWgAWiCsuahKjHTnxf644kTwmz1bYquou9vRSaz1GZvnrQ8CDT5mMgbaoksod9XcH51B8GDnNjA",
  "key10": "3xA8XzthNLYWGobQ3BU5X32pkNdS9QcPdsWNr2vK45WfVqLggDdt13h71uDGuetTBTbHNBx4NPNV1wgAh6DPXCky",
  "key11": "3XmbC7tiah82UYZmKxTYYawBCWXuK6xNv8PisKSToC6ak4DdmJHC7xDdJ9cSLmi7RSffQw9Tz7xVsSaCKS3qEc2D",
  "key12": "4Ejd4WSmUraCDeBYPx9ybdggtQo85kG8K1ddgaydKnFxQiLVS9GpVwNYdrkNv5B5oFbecv1Uhr2AbFx8ECdH6dJY",
  "key13": "3Ktfe4oqw8ZQ8fw132V4zt7L4zPRKLZm2fQ7Pt2x3qAF8wADUkvx5nF2uvu7bsm7fQJST84yRPFQFhA4ijxZLcGE",
  "key14": "enAtdDXxbNSzypEh7mxsgP9qXLC2SqvPYteuYTx5REwJYZm7e5DrHg93QJza9FVc2ge8Hi4mHaqNDXFaLew8wNm",
  "key15": "3v4hW84kfmibQEV5uUPTLxf22aiJsTZKvrGLX13pQrXm4ciPh3VRYqKe2snmVgpXZkr8Y1EfFmQZV9WSQLL9hG2F",
  "key16": "2fMrv7cQ1FhnWz7G665FwT61WcASDbX8k6XRkYt4q95ir8NFpkryXw4dKqAYvhvq4F4pH7A3Z7q794vb9F3UZvzQ",
  "key17": "5gGUPv26RUAqjfyGkZ4cbWK3eDNQqcNdiCNJL5LwHyVA5NKj2pcDyBru1ePVKuPY7432JzhfXSLnNvdkz7qon7Dy",
  "key18": "5LTbGc3AQ3HHbzXRkbzkgGRz4dQU2yqPjsCaQuvGhDevNU47XkD2VNTdaMh5zx6g8Rc4UQ8LA7UqPxQ3yg6VgnK7",
  "key19": "2BmLoAgfz2Afp5mRyhHFRGTvSwMcKpcc68tvUy73g8aaxD2MzQxGCyQmXV98BXjPZLyqEwmTzpDXHN2dMGbT5MYM",
  "key20": "4XkcNLjXbLDqo2NMG1igWFBrhSPKgdkKbKUVeQj6bFkwi2qvA3L2dAxSbcHmXMELhs5cq1jBumSicLdynKx8j4gc",
  "key21": "4xjr7Uhe4djnpF23DhTkAf5qUZU1zZtQBUKnVV8Px5rkK4PNihAq6tDLUMJsU8SDnC5ksC54aFNTWnQLXshUNwh6",
  "key22": "66h9UVvdD67Qfxkc8ggNRAL7A21QgYxBL6Gokg7JfXdx9s6d9nNW51B4VSVKp8h6T68A5NWqpoT82EUWawEqaBWd",
  "key23": "3kaLSx1aR4Kvghq8J5ccvDdvKKc7wYsNLSEwts1evHJLeDWjSzmYMV7e19YVS2MhTaMM3gqKWoXpzLTZUAxzd8PX",
  "key24": "dnuP2EJTz67iNHujEDDsD6ymWsMn9ziSKZ9sg4UQRqbTHEdZjCh7nxR5C677V1syVfUJtxJaYEo94wemDNkgSoN",
  "key25": "5Enozi1JutB7CN6ttdwzAmMWmEK4tcRQnMSoUGPgUUu33uXUpBM9eYxkU9aHjYFsdvmxQKDGxUuSQskviMY5Bojg",
  "key26": "5DmQHnLcXGACjT3btS5akL5sfqemsEqV72MSzv6Equ6nMFYU3UDtFnmD1YSYYYi291XTVAymqECbFFrq5LEkLzFi",
  "key27": "2y6R4A57sFnmXmgCtYhp1PHhFgDwM8issppcHfnS1bNfQ9U5TGGN3M3zbrS3iekyAS6cbouHcGy2tfrpoPwSEfpt",
  "key28": "4R2tRe4CW85eChwScEnnkMwSudexr6VusVJZdNeHM3v7Fio9oDr1rBSfLVbZ2WvNQ3vry3BAoveLd1ffErzN95Kq",
  "key29": "667JUW9wH7eptYaruT4CbXFCnTieVtawtaifhcLk58nAsHZhGssLU4PnWC1MEhBR6HGwZxCaEpyPwAZKBTT4iWCf",
  "key30": "wzww95HTvJjKDzf5Mc9ERM8uqUDFA1bvjS3ZQgFVX6GxvwBk5iAMCdbb6iiij9zAiMhoBd2wqotgjGz2hHqds47",
  "key31": "21tnaVAHmsqDf1y3CaB3S9jBoVFCDjpyjogGirhzfGq7VZqHKPJCLsjWNg65j74RY5eGZurvjx7sPon6npqT2gqM",
  "key32": "2NEn6K4iGeJq8rAR4D6ZpUV8xRHcB3vq5rgKvyYzb3eoXoZmSxEdvdakrxoo4o2C7rcnzEPgVwCqiNmqKCiAogWr",
  "key33": "5PEZXRbue1ZnCpAJAXUD81VsvCZwYBa3gSqJkDCYuA8KR5hvHnpi2tA1cGtWs4mpS8d7xhc1rF5fknm3pFdYrcrR",
  "key34": "4jheCXxPqZCAo1rP8Df3prUv8Lb6QUAxKzsoM77kDEsgdo8ueozbi8DF5yXsTVKCWLNpUprS1Nq7eEBN3iWuZBxf",
  "key35": "2U6qK1qSYmQx1zrWfBhhbkKdpNTs1LUqwKmM3ttUWC6Kv469rr8UQoJPRm3w4nV1en2GWF86RirAWKcC534Dk8ie",
  "key36": "QWG6Yb282vRQ6Y7jGoPpa1My95MaLn8C2dTyp9iamH5Yu6oVcB7vB2o2h34JgqgioXRomyP53MneK4fQtr1dXkj",
  "key37": "4NHT4DNCgmYzAgtBCMq2TXYUzY32sRWZxFdpPfzAjwCik7vPfmJReQjC6z6qBZBQJgHfuV6ui4qW8QYbS8zfe8tj",
  "key38": "ciucAdqfZtxLV5tivppTHkTngJsQuXMmK9qt6zoc4xWK3GwnuSnwr4ZhhdJKKTmhwAFYzU3BCpmTpYxgjiS4PFZ",
  "key39": "2uPWfJqkaWqaa99iUwLWbhvuSTD2FpD626GadopUxo9ESnMA3WasZ2Y1PMzUV6xqqRk5KszkDo74RYt3Mjir1u5W",
  "key40": "3sDR2x8UndWkKzMo42vPN3ZvcSp3iKmXECqJi5h8jVx8bhyPP5iiofNSK2iTfMmsKehRN29CWui4afkiweWJTMqh",
  "key41": "3Fu5XkUjtZREXEiVbpsY7HZF8aHJJH8U3DB7EzoVa6w6riYgAGcsF4st1qYiFy9X9LYsVDUXKi1navR5UKWFkvz7",
  "key42": "5gJkCR5jkt7rQNpyuY9CBVase8VtViVbyncAcai8SHHA5FdqitzLR3W1mfStEtzinMucAGFHmVBKW2FGj7f7EF1L",
  "key43": "hSQDoZ81p2v4HPHVm5YV5MDuGf83rWoMjNq7ZB42pMKkvHi2sWLXBm6zfndAY93cdqXBs4BqX9WnMNJPWkurrEb",
  "key44": "3U77DCUDPRiMRyVHbi2ec6gRNt4RTzBmUYnsWFdF88CmkQiJsmQ17yBQzyDGTW4uzZPcRGQbprgXkfSkAcJs2mGG",
  "key45": "1WGjYg8YsZRFGHgRHy9p4kpm4ogLawdU1X7oaX6U8LJBa5SFLbrySyu8hveuAcDYGRBDJXAQwW1u9BndzmqGtuT",
  "key46": "36rFSS7EQ3F4NR3Bu2GsUwGZSvumKmnP1k49vpZbeFncRGsdoSvcwT9kThpqXweEgxGQCrN7TaiN1mfgb3NmrvCW",
  "key47": "5Dziuf5Y5RZxPSfUgWVHyXnYKfLf8yJ2rL6jRKXUr4nJbDJdt3U7TJCWZ7SztzUqUsuNJ88nkHiDfEvifmrM4DuZ"
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
