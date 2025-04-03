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
    "4PE3rn4fbPMawpaJCewAwSfMhM5YtqNFz1Nyn29g9onSri4djfwJErD8oZ7zeZi4GQxCndfp69PKvnqorBAoxDff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KwG4e4AYsJm1xSynBLbAVjUjxwtRaGi7DfefUbDT6nUKB7tpHJtGjo8aV1eqLApsH7ySyFZDop1md8EjYoPU8Fd",
  "key1": "dn7fuAP5oLJSrSmWv6wuXEwB7JtB6eRYNTWAa2q73WuoGNkENRhNNBgbnQR7wRyXcWxo8CC8anLzvJwNLTbxPPh",
  "key2": "24GMF6UrsURKgu4rrQa2xjfWJU9eiAzy2CMAD9u89crqNv2u6UtfwZGjFBAEX1KpD15hNDCLovXhGixVdyQjBMU3",
  "key3": "4dz4dZVnBtj3TbaZ2JrVCpYj7i86JMZfdXGtVtmrG7QZJaX8H4fvVbJqci9db6HvZmyHxsB7XbNLKFsL4AmvoJVQ",
  "key4": "5CA7sFrzLVdEDPBQrmgoqM22CFkeSiiReLMFSu9h9puUmvAxs5NKWLft2wdr375sQWtw6keev6TJHoo6cx7V2CWX",
  "key5": "3KMFQ6sna5G9zw7ex8uqhGyuKHUpWa3BFgUpGZxKvbau4Qp5H8M18PedjCbpnw2NSVRp1V456Mo9K7KQ9rXrRkFb",
  "key6": "3NDyDmhQra1MVjzgAsus2xjEtL7XKsdPbPDAhqPJkvRSAXFUNjwB5oqM7cPQbYTzptnUGd8x9HfcfJagxo5qPdVh",
  "key7": "2o2n9pdSWzuqJay7pB6GZG1mCzRTFhuHAzVjTLCpi3QjarMqSRLMAhW1vbH2VA8kWQE7Hmv8qxynNMTC92JwkHq6",
  "key8": "3tdNMje9XyNomTPjfqdC75nKLAVHM1Au3bt4X2yBRa4gpGjJuVWNtFqF3QRF8H5L7LRq2YRnDDArh2qwB2vrc58E",
  "key9": "35ZsV293TzhEAGzkdA3bb4xD7c6deJWAcYmY1tPc9FCS6yF9VFwJeRbDwt6nAY59dviVjjrYuKsWBAVvAu9DLFxp",
  "key10": "V9F7JrGJ8yCwxzajNunVLw1tXYZex3P12wsTGh2AFxLpp5kzG6FuZhZtgMuB1Pdtr5qTYrSwtWQfW5UJwxDDJ1N",
  "key11": "3GyUo4ybXvwQJDWmcszFdMzdrJdG7aL91Sbu1jQykEnzuC3HSABe8BwvSL4sL5FLCdhfxVYQPosunrwGdTz6rjMU",
  "key12": "2CSCHDJtR7f18DYozupvDMWzkhQQg8a3GcpAuzCBcuJTKBoWr8XrM33xE6y4YXJCQQsukUxmibfyARtXc1Qjr6kH",
  "key13": "4fJWd5sgx4mkbSCjPib8rZsAyCgVoAY4x1hWTf7ihukXLVJVYLFcBTeK7KdQALTa5y2ZG25SCNXTcrz8aASe4STH",
  "key14": "2y5YEMFGAAZWT4DSvsBYPgTr7UYL3R5BMoPqMqrJ7qeJ7scwsuKunAGairX67omp1fLgXuK558T6GQ3n5jLDzBwT",
  "key15": "5e4SDSyPotxQFpwC3HKtrsnTNgMFZd6XinaCZit7UgAmcQ7bg5AETCjFNwegCEzfQx3awYCFsCjwJzRJ7vdb42G8",
  "key16": "54kBiqFgAmc9PkM9HSDFB8g8GgnhuEmGVWpe2hLhS7fXjPt7rLe3kSf5MQ83V24SnJ5MJk6dfSqhSMQ763ueTaVS",
  "key17": "65pQkFpUNmMr2Joy4guMNFXohqepi39bnVo2USbfbo3zAvaF8d1EjX16WWW8yLZ7Vg3heP8VUsq376xEj2rPqEKa",
  "key18": "5oKqNKkR8eWiDTMmecbfVquedcebu8HwfVtJS6Mvt3sSzSmX5f9NMKbu8Npez232ZJPikUpihKvXpnrXJAxUspkE",
  "key19": "kiiPuyARqnUbVtZcDHGdrr8tCdczUhDA4osFFNXP1k3aJGyqkbQEqLqMieVG7jo3YXWF6mQzSKhQ5JrKuKFcDt5",
  "key20": "55dfMgdTKyxMRx8iFZghpuNao9sh9ueKQoaUpfRRv8nDomQDs5x8YBhaWEecBWvfcst3wqKgCXNpEG83TGLfX91W",
  "key21": "2c5w7QKnWt1M6jKAGbgW5WrFtBhzWTrybbnNRz9eMFkyNnPC97P8wn5dRMaH1rhjjKXxUNuL4KGh5BK63ApcWQP5",
  "key22": "hAyCwfByQTY8Bg2sGypiS2XEr7DcrhxETkwHehH5UtZceoCPj3YHVdtiHBRMKb4STNto3Ckf4HHipxwDDUQwSRR",
  "key23": "3D9xE7GWQHeG414wAQ5wqV7ovgjPAg649HyP2JYVZxuW9pQLSqhkajxnY7r99Xi6cjonDXAzu2r7rNxqzfo8rgaw",
  "key24": "5TDn2kDWzUSwCGrzyEmxGJJhtkGozcdhrjVeCB3rXGekVDoVKMfbtcXt5PUjijiFo4FscmLqQwX1Tz6LrujhGe9a",
  "key25": "iXyz2ZGaZoZPzfqXVmuBDYu6hw8rXwUW4FHdh2iNRV8FRpG1LQL9v7sTHqWXz16gm7knikfcUsbKf2NUZurFt4C",
  "key26": "sPkD3fJ57F8LwbQSQRLrri7uw4uTa5bEb5X86F8eGxijBUYeHjfFg44q67iJN7PU8i7vKDBkFsEupNzPkM6fsxD",
  "key27": "5WjwvAN7WC4cegQEUR9HhYYbEUw24fM8ygFDAqm5WGuXNxQHNj29c864iY5yF22PSEUzCcu8A98bXzPeaavvyzpd",
  "key28": "4uiWW7JaMbUsyd5PchpbTuheGSC59uo3jfLWjqq9csPusTcfbdMSYxLtVZc3kzYWi1WNN9X9JGag6B5k8vYnZaaG",
  "key29": "2gHNzYGM7Vzie355KJAjpAPPoBwfmmjhUyaM6yDQ6oQGvMVMeb8x4YLkjR2r8n6FhGK3baoSy7CQB8VixxTJnErh",
  "key30": "2YL6W3Jhxzr5giMX4gfdkkU2euUpkaRvNmQrDwxxBqiJ9ikHkDDV8utF5EnHcZpLavMzQRkbuUt9q35cAivgUwAL",
  "key31": "3WP9trVr4ca5V4arBhRhDJDEBoFs3VoVzQ41gcUBFQvJjCFu3mbA8RysZgQ9KpwvK82wziubDm6U4nTZEWVVKpRe",
  "key32": "DiSHhuxUzytSt7LNs5hmNjxDhASAqnEi3V3VF88U5ZPaz8jXkYiRFNPFhN346HjkSNYx7BuwShnFHATc6mGHLHK",
  "key33": "4hMjNgxBqy7VoFSmh8d9g2r3B7foh5enfR9yRGj3DTzZWzDgcvn87dx8Wgp6G3ivXe92ZfxDq8jBtaBYNeGqs5SW",
  "key34": "2gtPTbLRgFULDKdG6dNxTXLVy8niLfcjwQJ62bALDDXZykshKug1EzStwbHNc8hvwSrCpUvCKM9DfqZzBKvz8Hyy",
  "key35": "3qnkeDqvQuKN49S1xMcphz4jC78uzyvhHnJMct2itRbRtyfieGVbPiCECJy2dTTmmZgLXWh8vu35hBASg5y6kvKD",
  "key36": "5bskGy9TaELjzmv8DUvLrL5xJfaPMjC7MAzyF3ZstBWj5JZWcjkaXMHHzEpHtQ9MLTntNMqQQknXBgtphh7oDy9B"
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
