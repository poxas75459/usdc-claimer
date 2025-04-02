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
    "3Bx9UVyg2m6TADvn3KZe5U83GYj6fqWpsFxhZQoWBDPKXq12KFKqxUr7V5SMoFmcM7eFPhwgvdU36VCGcXRNWnFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcQ9rviofKVhCQv1Mq6GieVkecmM4z9zfAM2AFM6d1Cqbt9AhPShphRQm8fqmuqsTG5WSDYCEXJsywzcABhe53v",
  "key1": "2qPFesreyZJebc4buf94kpkUGnzGRSwmrZTGBWSLYJstkkBC4MbCGoivqwRq8HfECX65rxyv6NUXtXzrx5zCYWnX",
  "key2": "3nWpQdGEmDVyewJaAG3n3WeAjJoWpqomhxMch7yrXMkgtcd26TtWp1oeP6rtD4R7vZ1hBYMH6rjUojqtsHqP21Rm",
  "key3": "4hk2HyRYJSn3HToGqReXxHzCSwAVc1JNxJGrpoMACCSRpu1vvmx6Hh6oFVvv7f66xUr3gTFDM4TikUDFbVNgayS4",
  "key4": "4fNdKry9A2AJNEeP8NJy8m9BKzTtNQfJ3BhorRqw2csWeyjBp1scsqqMT7YSZxso3Q9pg249jaTedtwB7WCRjydn",
  "key5": "4Zs8EL6bWLTQoN4kzusDcNGh5cFbBhhDHoR3SqSqrD8L6w9dcysU7gPeV5srE1fEZJvWV7NmG8RYusgcodCyrR4S",
  "key6": "5x9ZaYJREMcJJULN3aFCFsPNhJusaRR4ow9bPZzEGNCFyveVWdKAj1tXMVLmvaWqZVYe24SPV6frydN3hksF89RM",
  "key7": "3uvQpUu9MHTUMTL73hNZVJf4CjDdgZ6KM2WnGeK89o3ghxJJVcUBcTgFyZViLNSxTMDTkdaaDQz8UieUj8uaAhKy",
  "key8": "3p35bEhd2NrTDfDg6SLSEnA4XPkN58vUrz54eyCED9YA2UfGyFRU7q4tNsKgPSN1RZJ6EN5b789i6kxrGe4qNhAF",
  "key9": "27TzXdoJj81jAkvSkjy45ZyATZ7kJU6KaoV9LX2qV8efoLRAuBmQSRjwRD5wyfHVc8DT4gt3UNid9ZEGu3WZBhtt",
  "key10": "4tngQKHNDZB4u7izwYJmSehfwnsjxAy4L19ZyFSapqHvLX95WzhL25H3XUpp7Y1uvTKWE75tSEG9UxERQBGP4X77",
  "key11": "4KNFJizX2jsDxwNbiiq4N6zvCK91LtiPiYsAroNcNaGpGdAG8TL4dX37hTuyZ2UHbG8o3foKMuYSoHAi7NVkvytJ",
  "key12": "4jgUvYk11MTjZb2zFojd4yWeg5xvwDkJMYNfqU3rQDkpu8pJQcbeYCvLPZMDubMDN9UXWjdHUPK2ERg3RNvY3nc4",
  "key13": "QmpkcptrQzicmwLxUe3QG5GrpgsTXuhdpDDdgqiqncsv5VCSfAZfKg81NymdtgdBGaPsMCAhqJrwjmbXrABgGRr",
  "key14": "v82tHcm6xW4JFHSwddTyZGJu7kpHU52yTd3PKJbSaxgaz5GzH5nCMigZQNF6CudjEdFyHoWZoRVP3ptdjLYc1Zx",
  "key15": "3hMrDCwp1yo2qDLKqaUGXbJAE5M399jch2miR4BKdCYzdzuMYzLZUw2LgxDNUTHcrCsKvMQxHxCYU62LvfxWJows",
  "key16": "3YYwWsQxB3AQihg2b8xQD7g9QPNsxkSb73RNtK51SXGt7m8kVgPzVhLdFuLybaYCFEtwDShq2MqijssATWfPSPzv",
  "key17": "3r4T9PuWPsL9bAgg5nH6YQ1moz4vEVNb1T7KXEvF81xkmxmxQv6135Vq1G5FnTnL6xSRA5skkFT2pHWyYBipUC1j",
  "key18": "5X1fLvkSgUjUTtqZ1fe57ZwBwMzGyZijaLMTYr3dzA2fiigRuYG46vBKKvjAkgodkBuVrDAUbvua6tAagyg2oJfY",
  "key19": "5uxM3cebVVtNwaFG1ZaJ3NjzXxN3bATU2ZXLtrMZnHhZVTGmYHrqACPLXZggy2gFXXCtw6v7xUqEE51xzZB95dTP",
  "key20": "3N1XroXpryE6xeUThyyEiUEg2zL6JWwCzJ1S5dqx6Gnoo9vnEdhFV4jJ4brVC49jwzo8oCi5Q9EHwSyzBobPgCQf",
  "key21": "4r1HE1bkwmwUshaJuRVZWP4To8FnaEWz568dQRa359pbXhuk1ziZqu59A2ptS4eRenKGoVLc2SX2bsa7Dgy45xRi",
  "key22": "3TswfdhXFMzGuruQXMbcyjNUvzzyuFg7EetTowzbcDWMTBuRBcmwUcerUQ3aLaaGTgLtMpc9uMXdDsNJKWZvpGSX",
  "key23": "2tB1qt3R1Ld5xYM41RWf7vevEyYhcJVdWHBYoUreggwMi64FpaV6LqcGSzizqj1MtVgdHDHkjvJXtsPvwaQU17Sz",
  "key24": "2eyAvVfEYpNUTGSh7SNwHpibkos493AQaASfPbJyFCfU8zUfpZS6YaMCDqbt7KhUGokcYjVLFQYtcf16KPyY2FLk",
  "key25": "227A5c4UpCFucNz15UUj56PaN7Z1EkixPKymgubru34EQxvLsc5TBGgDzoVyuK5iDop9FGa8iaVRmQm6GxPLnBbh",
  "key26": "3QAwW7z4ZSTK8tGgdzfZkhqQnGLn8JckHXTMGCy1xaV1cWqJ3jzoshY4FLPy4GSzDtaTn2eUvxSJqCZLGcVEZqmP",
  "key27": "qx4q8agTpnLGe8pEGnvM39AdWoKoGhGyvB5UqxGrat3N8jj1KPWHtDfm1wo6Ze4MiAueEVsnu74HpbW8dXZUBP7",
  "key28": "3m7b2zEDRmFQTR4L7od762HW3kuycKJLqi5yjRKvTC1X8Ye1wwiKQVs4Mc6atpFfSWKwQHe5bhJk9AjNwHbN73SR",
  "key29": "4Sso1kt1t4CRwTQAYFEADbVySEbEm3Ja8AP74Qsbz3Rpj4rKzVyrraJE3VAux9dLnM7QZb9WpajbnBYqkWnToX15",
  "key30": "3Kg4ccgZQWhf5LfqvK5zjoT7nNvyW6PfRc88SzLLDtUxxkP2YtDWP85D16r4AJ2MJY1zFMFgAEJiX4Em7mvw6Ew5",
  "key31": "H71toc73iA2GaWWaG2QJLsA3kw1UggY7yoLezjMJfCPXQ7mhsdRj5ekNeHVsJdv7kwHA3cAyCbGB3z2g5ALd5ZA",
  "key32": "4DBt4sU42PAV7FMrb5BsWRVvYK2e1Pb1HUxTdnqkfCfsPG7cHdJGH2wjixxmGhUkQoAeM3Ymf7TVsfjUJfuRxKeU",
  "key33": "64m7RMdYvZSo8EjLNqCuYXqWEVAFfpLWLGHmnEwE2kgCMXm8fd9trgUdwYdvzt16mTkW6RuYFvzJCcGBH6EtYxNb",
  "key34": "2GoXxU4z4CSP3LZa21pyFMbTA9jUgWm3FjQWNVqpiVb2D6QC1KeZoWycGuwm56JotF9aG4RKv7uLsWVUYiQ1MsMc",
  "key35": "617d9cbQ9sinod3k3rZNF9Qe1P8ePTpoCTD2xLNDopLzvp2gjmsDqCHaNGqP49EMTtsfoCb5ZL58ot11u34HAU1J",
  "key36": "2uSXajLDSXEa14NCiTTjhCdMJFE7adXLdFnihzQjC5yz6Bi24pE8Vtxoyv7kmkUw6t7rEC5qB6fX9EKPcrLF9iUn",
  "key37": "4zYBU9DBSdT7L1JzcPQFdXbFuoiBozs2eb7xpa4UsR4mGvzUp1b22JzGNg1AJ3Q12sNPcGXZ3V32Yy6yft3igJo",
  "key38": "2yKwVU7kEX9nCdPiMDc8aFLXbESq3k76mHSeWkqxttR5CQk2DMD4fMJNnund384N2PQdUt5pasGFE4s74PKGU1Zt",
  "key39": "rBntEEV8vPZPPg7UB18orBk42i8sFQ7AowicUf4Hj13ytLdJP8qnwCypkDuFNcSHbhZLx7SWujwNVM4CwPGGazQ",
  "key40": "3dBLbzXi3roo6Hwnn8aLqrFKPztok45AJ1oLqpJc6hYYrtoAipETrxnkF5QAeZcGYoNfKz49gEMcxuBm4tDzLbUy",
  "key41": "2Q5vgXrwskKbWcp4XLxN2tAVXuF8dfn3qmecgwHiUadq1npuAUrwzJjpST2NWJFbUm2pMBumUFmFL3a1wCk9TTrS",
  "key42": "35XQ32MX8ysNTrC7L1xsLZnTsa8FmwMpiLKUXpfAdetjGHB2YVotiJbdDVyVF4i1W7spEFoxw7h8zM6AorQ8TDUZ",
  "key43": "4yGUqzpszg4pyPyxXea5Q4AXqoh46iKQaqMgw4ckXyjcemjUK8GrAurQwP1TJoLMdwTQJC8um1FzyVJU5XAP9x6z",
  "key44": "5myxDUhmYZayST72RMaAwibqpg9RqjrqX6GkN48VAxUM3MWmpuZLug2B9mzd6bVMY9rPdGbDEFBxc1FBjYqfQQAM"
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
