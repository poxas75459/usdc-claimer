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
    "u8ePZhbaEAAx9vpdYwNUT4Wue5BxTntoxgFUvbWmsCnjYT1d5JPna4Ugv2mWs4zBMuAPQ8WxtHtBzvdDzzbShEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9KDPuZSrPpADKUfeeHmHbSgax5AcNW5FC17AaHcEv29fjcSVSGHZV9QpgxJjCGxnBQs7E19bQwQ5uoexuVd1au",
  "key1": "37zTpTW7kbp5sZrPWz5qDuKgn44DBkPnhPnqrFWqpM42KuDhFFfa2grJycgKiwzFD5AFYEEAiXz5DNFNmPpvoFbq",
  "key2": "3mgDf6RexdZWooHQEyhGaTFdbPouKTvZba65bHGVQqWGTdDEAm9xKS1tgPUB6nhzFPaiWgqi4eMtgKEUHPKBQEAf",
  "key3": "2BxkzxeQSEZRwm1RW6d28XgZtkbUjMh2RmEM7hoFmaD1bLqBXm1NeSX5CS2BCjaXsBtGsZYzoAz21BLUuLCew4Pi",
  "key4": "n91JNRKtBGvohrvLSmLuEfeqeaAxRTEhcra99ppDfDwcMi8X7fSK1ZG6EPGVMfFu2yrSK6X4V87HmRY6p9Po97V",
  "key5": "4NGh4hq3UsGVMQ1Pf7Hzi4b3LmDqBx2RSvyrfS4bEzXaeecPj3ZmT9PhfG1jDTw2D4bgUciauooZDT6R5dYgipE1",
  "key6": "6xuA8c2tGGUwUBjBxRg5GuteNL97Tye24Eui2t4GiJu4kzLmAJraDBptqY8nQtb2TFqMWWtBpZgoSJP1bZhHp2s",
  "key7": "4N3g45X8bbkiA1iGJu1xNevSLmxvPRmrzYqKQpj4poD1TPbnd9aZSvTBMcJdXPUN3HFg4KsHQVXARKMrHQ3LrHnn",
  "key8": "23RvuduXttk7fjFVYQPx3eXPwaeK4HDkCGbr3uS2ePzZkdTBYP6oNKha7pwDPzhSRA982FusPcsXtkojr5Jbcp6X",
  "key9": "pQ4581pa5bwmHmto1YgzDtFwuHcgKCdMQbYSjWwQvFZHYDG4aWy7GaWDgaMo5KzsQAMScr5JuiRAJ2U13h5wDVz",
  "key10": "34QM8XLeBfaieCzt3StjXr72B1EEN8daMSwwVXoXWFifB2twdmf8XNWkSxTiEP6jNcZbFoophQ4W7qbd8hBG7CYS",
  "key11": "2E2Urn63RYwVPZsPM3kUpjJEQJcpVSzjTZyNAY5sX1bstwVfMJL3PknxyVxCxsWpfJaoGoyvhkpzVrSZezzuvQ9m",
  "key12": "65KcAggmcGYCuLGcYnVuPSMFqAsSRoUuV6oRXbVy2URXg12Rat3BLuZg4o449fRup1MmLbis11jtA8NwZi9jxDGW",
  "key13": "4YAPA8FrAXW4fMTM9HuZtKJ9hNi6xzfMcG3yQGfPvhujqVTJZuF7dhwY3HHBmadxAg1QCrjhayk8ZwzvDMFvh5rM",
  "key14": "kRf6rysqHoNV9hx7piBrNCLHpFGChyC7kXqJDz83nvGc43Mcia6JpK9MByD2uGwcb8nYSqukaQdsivjmGM9C7cQ",
  "key15": "yMDPmgG6KHFbPxpNW8oBZdD2kk1paYDSK6aT9R55miKYU7zK72odqUHBkuS8essXYbaw3bAeV5KQruv5tyt3Uh9",
  "key16": "498JwAyy4krUgN5vFXyT2dmZwLRxng6erRLdqErgfdqd4tBgXpYCX9WUWL3wyLQk74w7HQjL4Ac9FTN7zaF3Nvkp",
  "key17": "3Qztpqtdgefftff4FG2e1moyJaVnYPSNKck8HFMmrXKDym2HWXvoxouDC5JuSRHHFkJKHoxjhvbnp16RnZqoaVxN",
  "key18": "3Mcfk5AhLX4sYL4btonFF2uPMm3hNobhZQZkH9Hwp2PVCTZdgZ2JQLo1xDWzwJSFp6ZTgTZSUcYtiXftdJUhWf5a",
  "key19": "3sTEt9qqbHHkTAZejUbhPdhohPnNUxvFnkK4RTibhSw9RKfjZR5GAMFGfpvFukjYNC9m38Wkm4ZCqhPa7Pr53hdB",
  "key20": "GhJCfXd7bQUN9icUMT7eVvUPdTSf9235zmNAGbta34qzdpSf5der78Qcx7Ho4qMZQA5XN1cj6niUvnDG2SnnfHe",
  "key21": "2xJCYjNhPrVDHQSQ28EkqmYErxUsFUXiLXsjnebH4KdxSgL8G3xqszZdAZrwfMxLZCAJadjZMj6mbziKpCtBMdqA",
  "key22": "39PtwewGekGmXdwYBfDs3TebSNs9mJ6dt8QWaxMPkrqRzffcRKCHA797vhNxK9k6DWFqYpusfAA9Xcf6Jnb8zsDS",
  "key23": "2ahMKsqyPZdgKr6nSVDVX6T36CHhvXzDAQHNKZ3pZKXrGHXczZQc43UpC9ZsMnrvRb4mNbgmGHEN4KRTthSjC2tQ",
  "key24": "39xBFqSdkSRT7dpEDr1hX3abPPPXK28qX6QEXvqMAzZozCNpEUUYedotjQAqutSznnBZ9VH7LxYNVtgZ7ogAJABQ",
  "key25": "sTGaznxXu7KX24v2WCsHg5SvU9MxugLCrMuTgbzwbrbUv2zHfobs9LZbkCZnfByfX7XuzewCggDpydNDFq427ZD",
  "key26": "5yo3h2Avr9FCDc1oJA3irYoAJUCWKrbRKnZLNZPByqy1nyGtpbCh4FnAgEccaMwViMWE9HEDY1spqBBHZsPYChLM",
  "key27": "51RNZ6stgVoTa9Z1E9GwUvtesRaJ23swVSYuMUdzUctr7AzzqDr4inrTJvjEnsK6EWLsHtte47w8WNoZh1r6fYbT",
  "key28": "3AwfTTYS8EJM1cg19edfZC6cNoCknthrdKKRQZL8dc7VEsCYYro2kNCx3gHmrxM5T14eFR8AzRX3NqyhtHW4Amoj",
  "key29": "54BCUPWSt8FMc3eYfUET8aNJLS6Q65hHuJh9rUKP53oZ8U99gvFhHf91zWy4ub751HGCyjipqACtZGXSibZ56snQ",
  "key30": "4AyzFym3k9sYtkjrbgzxZKbGfMGi4MFt7ozm8QbmCA1dJJxBoYjqnXMLeRdfvpDCkZo825WcpDgE25czH2QAhnfy",
  "key31": "5r69Ck2L1Zv1ifcXz3iSZD4zhEau6nrapsdmzyvHaac3A646N1jDn576dJjZw7zSeem54bW6YD3EZhyLVVjoHqXh",
  "key32": "3mJ7nBFLw89rqiEWvfYPVFzYxdNJfLNpWP2aVbnX8zG21i9Kmz2Zh7svU8fzaVenBAAwoHZCdFUMvf5jrcETQ83F",
  "key33": "3ukifzUh1bZ65ST8qLUg3E5niPS6f5Pyw3NpAp18j29P1AXzCm2xgPXWqCfQDK4q2jsNyKhjxqZyx3pztTMsMAcA",
  "key34": "3wMjCCJBTKfANmsiPYARBdUDkGYc8w4X78BY4tEvDzSFBvv4xh3oWSCq4T9oUVCZLsgPhEfcQNEby6MpRXXfjXuR",
  "key35": "4yogKe39BKgqt2HULaVHABmHAVKev1HT7varnGrmWuhMkEUFDxHZWkWHESHmfLW9CFZuRU37tivVD3wQWcLXg7tg",
  "key36": "3jhjtZ2xYXGsttojEESC4mvSEF29urnjHAxn4X6WJnCsesiz37znwbKzuq7Hd8mAckR3AH9Yi1MkePwc3hRDv68n",
  "key37": "4Zpg5XimhXDr21B2e5EmCGzTtpuP8sCDw9H8uQkwahzfUsnrVsF9AWjUyZn73oNRzomq3cyWvBz6ejCaV5zUVLPk",
  "key38": "3QqCe52CHipbxN2fZG8V8A5mofKULknLmTjn1uEGXhwsFAKgoi8pstjqQcUQVqxJuVZosDL4PyTNaotfg8qfCEA1",
  "key39": "3dSHBtiXfLFjszHMEGTzZVAhpdiymXcoAfpaHL4AysitbfNzZae9nm4hqgHYD8ajUtC9kr3B317H9W4uMpZiDVxT",
  "key40": "7uTJFwJRZZhHrCkvye4GC7BB8SKcgvqpm4LqDKTCgJwmFWBPYsc8KEpX3D8XAJJ3Da9cxNMgjBSSrfpMhXjGDXZ",
  "key41": "37fnc4D9aMj71HbWt3yr6csnD5hpnB3jWvrmNfpXFbDH2ikCEJSMXyftPzZBSWY7pNy9jCWJpjbiCbBZzjNZ9knu",
  "key42": "2pfoDgHjVe8CwF2HLDB9FZKUsLNoyjZneXTk1xHoG4HRwqhiGNakCsvNMQZXuNzu6eCauyMaUz8UhE3zvEZbJirF",
  "key43": "2yrfGtZaoxNDJxf821RpQdufiNVK4Byqm3ws792hLjifc8WK351zW6tNKeFdBrqHbWe1dpfn1qGxDbVoHrNBi4xf",
  "key44": "29wou9AhHi5xKzaaJv58EiPBj264S3xquNwzg5kzBwuzcAaqcTEs87pEFHV41RpeLmvknfguvSTujHt3aZ5LXTbZ"
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
