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
    "3Bfzk8kB1f1TYYC2rwaBmsCUeHQVWG2yw4C3kafSK1sYx3PoPeVxL642BxCR3UznMKfErrG5RVz7gyj2eVzfVokg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1oZsABQpNbuLeP5tsSW73HayhDtGrQDPsLn52GeN1NcXjsXBBeiT4rAXauKSJCAuY1XeXfUseDHbUhWEAKVm3g",
  "key1": "2bNn3feu3B4NcvS5MGWzQaqVAKPFnu1FCZVLwBKq8NSBLuCA5Pv7PCRG9hC8o7UtcY22998UmuTpz9guM8ezwLcP",
  "key2": "4L9upDJUhQrtJgynabxHUJ6mVfGUFS76eze4qHfXVUWxbLirMdQeCcnapN9tJg6jGgdH8ZBAs3syc5WZroZsqGfs",
  "key3": "4kUtjVgTmcefvJGDozuP4CZeTCZXEKtrmigT2beMFPyawjMA9CU44PZg1ZWxiAK3w2TenjbWRBbhX2SP4RUF6gFC",
  "key4": "49uHLsLbUNZYST74hXKsXzMAzzaAyDWLQDk9AJPEnVSiK4jnaMEmA3GgeCacBGJwUbeXmtJ7w5NLKQV8aq5P23XZ",
  "key5": "535QtC4pwofxrkNXJcjpuV28ap9CjEb4SuBMCmDC2sfdZFPy6umC7kBA5jo4T3joSNoY3vE8EVfWN8GpoKECJCSW",
  "key6": "3AgoWe8Zm21D4yav27oax6EGCkVcS4V4QqsMJw4Lo6A2Skou7rLWVsyUgcvujaZ3M32pwuJ4ZxRUN4BjBBHJ56DK",
  "key7": "3StfWqX9F27zRRdtqDEkK8GzLH9HwULPxwWdcNjdh2ue3c8CuabxiSqzM3CYaVY4gZbd2hnrttLjneXhvQhKb8vx",
  "key8": "3hRLRWwDY3wb95H1AaWdKrgzaFjV1FQxY2BgMF93XQks1cbgKQn8miykVEj6SNKoB7j1Hy9fwZD14X968qG4boxr",
  "key9": "3dr32avAqw16fso6nPbz1M4yjrHHpgke2V4vtxwBdArtG4a4EZywD25jgbSGTtxYfi5qAj8A2Nv951qUvs2Huk1z",
  "key10": "51zrJ6wnDXSHE8XmKYdudA2w2W7mRR2KxsGAxTmyH5B9DxWwoup9dpMA5qkPQ6QDrdgyS9ozsQVzzp5TSfzKPGVJ",
  "key11": "534TDqD8ZkhRu721kK4ibiWW8N5hvVs6FH7e2CkgdMyaK7AZav8cNnGQPqK5pSvfDVdJ3rPkBrmNKU2rppzRmXHC",
  "key12": "2AfgWtWhMBTMnpMnnn7tbv7daA8s7G7SzYPD88XDrrdCJenhNCTcCk5KW9Rg6iehBftaTukkSdJMoUZqneqbrBCP",
  "key13": "F8q8PRG7URPGURT4fRwwHJ5mxTPebjDJNmwV2KVKuazncT4KPcNHsBvfT6JBHVTsnTposm4HmmGpeW9WqkbsquF",
  "key14": "3EHfpx4yd2r7JRZ1i5cdnKwBQ6JBro2AU3WWJuxs13oTtYfc2xUVFM7q7W157nLoiddfCUjeus7drigMbx8TEWqa",
  "key15": "5v7uEVrybKDFHw2quzuJ18Jyej8fLbHw6SFuviCXqNi4UgaRX2h4uUVA6mXauraVGvMHwy8nPZ1NF5sRKeyXVcgz",
  "key16": "5FNrdjaVAgm35pK1AWu1TH6siEPrS4JgBi7NtUaRBvDGNVwgq6KoSTJhGDhEDnGbrXxfmBWwnbmaGaqksysNU8QF",
  "key17": "4XXcKUDEzr2bmrZD4wyDJWqcbyExrXGwYXdkJKfTrMUvDvj7p2dyikL3UR8bjEAQTecQeQZDJ2qYeMrUSgGaB9Hh",
  "key18": "2jSmLb8BufM37NTsdjAnXUx9vZd9Cx6YQZcTu2AnEftQfwEgMpvjeD2zeeDmTChpVdEAHGGtKXPL4iBXBJqcK6wJ",
  "key19": "4S7N2pJy8MCdMidsJWNVYk2DSdiuGdwk9WrP7QxZfnSFTMUDPpqMezhqZaDzQmTkkKM7XqwBHgUGLoLaMyyR67N2",
  "key20": "4TURbxWGitivLBeoii4BG9eD7sj1Cp5mysyUPJAo5rQTSG8wc5ap7RkVhoNsCnJhSvpNVWs8bbU81fERcMcCbke5",
  "key21": "2X8tgESJjfszyickYaybhCCGZAChG9moofw5bujU96Wd21tjo8ougi4o3P8HyQMnK7ZQinRye5MKD9EpuMpBT6Gy",
  "key22": "4XwVYVaUWvp8yFjYmobmJcnyoCciJZ6gzKFWFURUTJdEi2YN6JyB5YSegkTfNcv3wpQDwf7TLSgcb7utVKbjGGyC",
  "key23": "57iHE5AKYgXG41d41zGZ6yW7QCtLC3cAfJpJFswzL5EoPt927ibuPGbjeuVMkQzeWegns1UWpFzrxG6mFB59KoTP",
  "key24": "4sjfDCX92wJXTtgKaadT65yusWrYbdqfZ17jqDhRLwmJ8ePVjAnh5PTjrqjcVy6xrQeAgqoC8op9S2nkdzaoPWWu",
  "key25": "4MU94vqVQByA1BrrraZZmdac1mDR1zzsY4ih5D7aH59W81XAPtT1tYuAFsdd7erP9ZEdYqsJP4anr2kMrocWnQqD",
  "key26": "2orKqZ9ZpozCqdfkjS9x6RD3E1Myi83MmTgNhu9SV7ga7vk3KJGecmJq2iGQ4ftnCv6uT5LERQnne86Pu5xfWwyu",
  "key27": "zioLbVPe7HyYsR26VnCB6LV8xxBay1vp7RPByQtJZUbcK8NVCLE5An6JG7drtEHtRe4JxBJBvjzVE6whXfep9rf",
  "key28": "49QKEzjka7aVW53db33NGPp6fmzsQcBxsJAMeNDEs3pPK573xSa88MrUMJ4MJfeKkaAJnaYzHsaQ2x2g2W1Sf5Zo",
  "key29": "DERetW24L6kKwJ8Sz5i57CtdZrrLjhEDDhsMWZVD1ZDhmc9phrQyMBqYW6RfmDsS5dsDPTKfq5mdtyxHAEPwsYs",
  "key30": "5myWLN4gQjD75sDPEwSV5qkFKYuHjR3fDjvaokM8UgKsyJHJearA9s5FnmJm2wHiBqPpyFy8xPq45DsCnn2LDFRH",
  "key31": "26nr7Cg8TebgPiUCAnLSyKPuN679VnTAqpJSEjUt51hXjsqXzTn9JqLRkKYV14UPVMucwat7j1DSxUFMuP9VvDN9",
  "key32": "owKc5cBJTo12YjxsNTzLtnTTrto4qqneLgCLpRohr66hSUX1gWuA4DxhJnogj9JzUU3J6YXSVBYWRaQN1VXCzrD",
  "key33": "qfYfGvuhjHDSgPbfNRnHQdc2onp2fYWssJR23fLBfqt46xx5NtjQ6fZdmXB9gMaoHbhke5ocZoqeYVqKnz7N9rb",
  "key34": "3VP4uVR4bKW9iWKcnJH7HofkJvQojj1njNTRRhQ1GfAxL7iteC5danH4vpiTbFSQRF56C5bunK1rG7Bymyg9VLvP",
  "key35": "2rXuQhfBzDiZTnYk98Bmzz4fnZSuEB9H7juzCaJqJHN7nZhKRRjNCk7sBqspdkj2oRfLwoQN331ZPC1hpgQ5nDp9",
  "key36": "4Z6bx7KA8b7u4sHUnmqdNDMeo5bbG9qVFtP34Aky1HYrRJPaG6EZdpkXNiMjBLCSGXkQcLTTVAtsCQu344kXnWMD",
  "key37": "5ivF3DhwD1hZkgns2RtbPV4cAcxT9nfMPyCrmdZJogKAr3bEuzNwkFP8D3MbZMYYbWLDxgGiHU8f65B2vNp5D8Yr",
  "key38": "4smV8jLbc1W5LJ73GcPQ6vLT87X7kaAVS2wqLfP2hT7RkTYFpGJKEkFRgQkxoctUhiUiqu8HhkbJwQUFnNW2DMDP"
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
