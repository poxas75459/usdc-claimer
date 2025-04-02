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
    "5X8jvSndQ5YpVjib9jnUStsuiyNrYwECuSy5xPGRTXr62HacJ1qApQbe9o2NwLqnw71B9T9fXMG5PZHGPf9NjBxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQBoKnDX6BZXiohcAQf676V3WP3ysxPvRZ8R76iDZugHtyG3bKUexA31oswqQz2RnNuzXsptDAKaKN8dtTDydcM",
  "key1": "2f2x7s46XfGSPZad2pkqVWqfJLPVbAJvaBeczV6qfzoqHQKmX2kALWbEpjzzmPkgVugn9NxpSKtngL3as9yyukFz",
  "key2": "54uXBRMhmTRZ1LzoSsrDCrXCwNiz44FdSHAboA8G14se7M3MF6nJz9ueUU8mwCGqqZUxnQ86VxbQ9BxJ7LtXFryG",
  "key3": "44S1F9Uzs7F8imVnvwr65mWgvY6sbkwLKywFmJ2M4Khy8iDtB1dNukpNSVQbKuHazxHKTP5KZ3M58au1xr72NyRh",
  "key4": "CwtrCNRuwU7VJ1gr2rteL4t69AJaZzMtiDeNW6PtSNeVe3v13doRXZY47x2Hyv462SPzUAmWLrMhBUbhWTCTDPe",
  "key5": "m5nqLX6g9HT314q8C6rMTaj3HtfWaskUKHSZKVR3XqpTttt8zj7L5JuJ9xHzdTzC66aCaDyYQAvzEWNyUb4ZtrW",
  "key6": "zCdSxpmnwTa1mc9veMGdNgpsvNo2s5LuBn4iXqmqcQxLqNZdfvxMkL5hSUZweC9gyBekG4XAbGCidWuzNjdPtwg",
  "key7": "auCeT1MoPjtUu7upt2DGNCgfZdnFYKVsiW6ntpcAUw39YvQFLPCvFjidxSv3KbSCnVppbirFKqqp73uAnu5FLHF",
  "key8": "4DbVbewPNzfz6oTZzTnXW5a4Qnws5CWF9HmTU4K6uuyhLLyHynWV5Y6vu6H5NXwm6stXpVpe3hWwqjq5nuJUw6Ny",
  "key9": "2khMBCBdgDYax32bEL3jWtgDkVnPpfWfAgHJ257NWSe2DLguZVqmP1a3GDC1Nv76njKeTeGpqE6hRQsXuNU4ZgrM",
  "key10": "Uc87tLmdtjSpRbdvxE5K6ASSJa9NYpbQS1jky4nLgMMLG7mcp82vo2LNCTPFfhe72VxoYGBb6BukjUfs8WBmdnv",
  "key11": "2hHmNehb4hyybME9NA9iYnCefzzWxcazqXFpj7nWbzJixueG7KGn6cQubpmHzJBeFZ6DDkvWCKsDhqYHQbch5mE1",
  "key12": "3HNX78N3phRWmEKMQTa7KpBwyG826ypHLEuUPZTS8K2whSNNNfTDpmCkBuhD31DyDLFkYaa2vP5wWV6ETJapNKQ4",
  "key13": "315w1z4wEAHtAounAmyW2KcpXfSzmhyysaCtcKBstcu7yEsJSonKGCpMhZRgdBu9twmKTn1VTwConYhjsNzTdPg8",
  "key14": "3R9wog2xUX3VqUpWFULMgScpniXKsrRuswfT46ZJid86dmGidMfuvvUtqqhQRxVWESBVhwr2bydVLDH89qjPHknY",
  "key15": "67BBXjfEzhf6M4EF2v284oCiVuV3aXsa5tSQLU6VvDWAHpgr24dy2ssxdfmUECDCKtDz6d2nPsorP6us8qkh56fz",
  "key16": "3668xdAgc9g3RT6RavHSdHABsqw64Vi7EnvkkmyDCMwni6iuCU2HievoQhAoMTKpYaMJuDYFTwWfdVwexqDxrLBw",
  "key17": "ApZdffxw948NBmhg3u4W6Q7mUvWDBRudeXn2oeHve6vaw5GUApqNT2hEkbRXuJziwWdcbHN4K1D6cMi1S4ve6Jf",
  "key18": "D58nwPqZotg6jTTofGHZmcxjLEMpb9d9hHmu3c7UdtLpCYUF9kaxF7oM8breKmMpNXdvbuVJVUFRNoBGw6ufsqi",
  "key19": "TzQik4u48SUJ2KeQ8vXHzt1zqCdXXkcaaFFG9wnSwyCuhnEbg6LYYGaeHHxy7DePV9vmQu2gTYy66h8AjyiSF2z",
  "key20": "ubenqqzB5ma5pL89YqLW3wJvzWR9Hjh7HhNXCGPMN27QoWFZRsbcZz2kECCHM7SMANiPJio2u99Agh9GWLSjrT8",
  "key21": "63KiTph9BvZEmjHA2AFUmvPugBBqdmw79iLLb4uNLkf5JETaebEaTMpGxKRKEX7r4rRx7NeZ3kohxba1uTnsApqj",
  "key22": "2uKT3EBmhuxmz6xApA5Hwn3xdFeHcoX6HGrEJY9e2vSoydMfxvhmgCTE3bZ43zQDZbdsAmvsjau22M4gXQbTPnVk",
  "key23": "65wC4HrVc1pNLfXG1fk4KEZUoP6ekC7Qi5t3Jrnt8XaRKSdpMPwrvdW23q5koAptemJxKGUUFYTT2wySCZuVAuQR",
  "key24": "3q3Rdupiq39yKxfNhHJnBZ1qSwxFbPsoFevaHamKgCiPKVMCwGcyEQYPsBdqVSDpv1aNgLFMDZQbfrXwRV5Kuxyw",
  "key25": "2BjMiueZbEWdKgo8DiLK8qm2MD4rpGfSNDrtwKVNBkAbioUfkrKkKVqYd38mPztjHA6hXKSDe3VRPW2hNuCz7ZLs",
  "key26": "3FtzKmSta5bZtJq5Uvhopx6mCj5pMdnDaBFPZZ2Zu2h92YvLoqxpXWFeMzqh6wTDzejb3Ca5NinLerCcBevv3YA9",
  "key27": "5eP6hiAiPFq3cde36CaNECgBBA82gk8q4LgqFoipDRZYHyjaWau9pdBPRfHb8aBNQaTS7kd7DCSPD9Yxbmox5Bbk",
  "key28": "4o5aj2omWX84LUt5hLs47RwdUF6XAG3M6R2uft8YLAgUZ5x11BgNEFcj2xsUN7e4Wc1xensr3qvMKkDU11hb3Mhb",
  "key29": "24NdLzeDz1qD2H3hDhMhmbUtHLt7C3ia4SNobyKFNB9eL23HTUbBJPRz5iGgWKp7Uo35h92caKN7xjZrHbVHaFM6",
  "key30": "5S9tvnSAyodv8GwUEWCeivBidH7vE8h3zU3nmdKa3H3BRzW2KAFs96G1KiEUMpNYVSe3dLZ3jLZvhsTN7VnwNwK1",
  "key31": "37Qu2qrBqBTiagaR2HFBvVEYVDS9oNWAy2Qn86JbwdDsqfPmAifA2GX6ZEZvCgkVu6PBe3SJx1y3z8gFkjELMUB8",
  "key32": "3ok7xQyye45xQbU8CuvBiWfomNeMKqab4cu3JTzWfXNJP7vfzx8q7BTSdNaVYGgL1XsTHMZaXemWavTW2yYv5HCm",
  "key33": "3GMC4ELP5294hqZxYS9N7L7J11XqWv9DCGYL5wNkNbBXqDSWWGATTamryCb52J2vYfr6cnsaUuJU6V2jvXntjYX7",
  "key34": "kYBZy2KbciEkZRZgpHcVm9kDxie6xub2urxdB2ykeCJR5g3VDQVvuJKQpYK28onh6kVTrZw6WMpBEYe21RCYpyr",
  "key35": "Y126KRz4oi5SHMnPt8yR1sLwrdH2Q27WRig7QvSUcu1j5LJdYaiQ1qnFhYBhAqJL5gqqCEEePRJEGKUyrZCYfew",
  "key36": "5w6LUtiiBHSfEZreKNq4FP4jULMdWePsjGLZ2ioHSsqfBKWGZg2mVHb8JBQnRzbft8VXrqKbjxKLmicJjzDX1AaA",
  "key37": "5G5HCuXohzt8zVxVTezoh5FzniwcEMu3Gbs9rDvbZEhmUJ7KS67kgFTWj5yKprgCbB49a5tnkPpcwPD9JFnv6PWu",
  "key38": "SKywD8DEqvHdYpi8UbjCLoRKG4An6ZoRj2fF4kk2jF7m5A7bHm4DzQBz8YdS6FBgZHq2VDn7PMhNhkxdsQWuAGk",
  "key39": "X5r88R1DFXBN2cLeJj9FyJ8EAgrsVPec8xXYwP9P9N9dJJgYz3ksxFzdMMab4fsNGiwfJLf6dKmezgkXu88sPGK"
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
