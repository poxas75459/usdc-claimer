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
    "zrohtAB83duaWSqyaKJNnitAMfYRLAML7hKU3jzMPxoUAzDhVSegtEzNNJhBKtAW8rGnwm5oN11ckstpmio6qig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WW9qXQLQHzASopdkjmeFS9Nfhqviid1SmVrtcxurjSL7EgLiRG7WjM8uPhaG7mUnmExAANMnECTYiUfUWUUZnAU",
  "key1": "34LYSphHBw7M3z8W8gcv8ozRXifNVe5PPNgmyiN7wEHG5kDchqcLwFUJAZQy24pHzboEDVazMSF48QRtHpedEXWG",
  "key2": "4aGnZVZVpAvXQVpT7HF9UJQtWyYSJAoHHTSJaLPhuyVmZC7Fnv7GMEYXqZkUJeZcj9ZixCoTezEZME8fNTHNuFs2",
  "key3": "46YaHxDxYELpDqFMJr3wQJLX34vUurp3wZLfdP1nKJLjQnxS7pKPT5x7GR3ahdL6npd7g5MDZhJkSNh8noPAJFY6",
  "key4": "4NkmLSdvZifyuWADAgNvF42Y2TwwuDBdLRkduVJtGQkoNiP3BYdLGs1rJMNMpXGUqHLjjNeyScHv6vkZKR2cr4gP",
  "key5": "33em42QPRg2YbNC7WcDJSAxFtxH5uBLuxuuiRFVkGWuCd6XJeaqxCnNZjtBufnruWJcCaFFgNpphT8exDQn29iGG",
  "key6": "51Frb9dtuW8jQUAxDMM4UM1DgDRNNe9mC2t9HVpU97gu9THxq8b4TuvehCPQi2UqzUtXaHeEqr6xjMJYMV5E3tgJ",
  "key7": "4ub6c3Y68HCip1MF1nHiDPcsTy4GZvFu5M4b6UHohehmiDm7Gdz9qRp25MDSyqNWg5i3GhmRZP731Vkf9QuDuc9L",
  "key8": "2e5f9QSznJhk9Bc72RtmrHeitSQk8x8gJwwHDBSZDaM67uHv1uUkMfkKJFsPjZNB1LjuNeoUiGQ8VNTBJpCrs6LA",
  "key9": "2e6WTKL6wDbHsfXnREHx6SW4iYTbasGNSu1FMREw3JLbRT7GJ9octJpuGKLyzT6K7GycKZA3nZmQ3hvLTDy8LMvH",
  "key10": "5Y5Z2HXchcWgKgRTjn34yFw3PtZLLvgvZpfRfgNmHMiBYdXzw1sNnFYmQmF5bsZ9QnG1HqLbQU5YJrdEu7EFrp5X",
  "key11": "4uxRoKHxFap81nQb1JqKNqaWgDy9RYzxEEGFEQe9NFeo4oB74vGk3dMVy3Ua7odQQ9AVmjBQ9tSbSHwii9ew7Wrj",
  "key12": "4y7X5NReLRAV3xHruNFjgV6yK9wxqwcFru11eQVqRsUDPEb1oByamozLmpiUnkv11kLNkssmUCg9aeki7Vm5Nfhb",
  "key13": "4mwseUgbhzhjtnEX5VRj4GCVTdYe6KcaPv47eQjRmndLHSr5ymezjFzVrHjiauLHEwi7FYx2XFxK3tRDQTMqe96z",
  "key14": "58idQeWXyWfyeNGwFnnNhxdY6HRXM22rm1DiNfZGGQgcav85ErAcYshnvP8vG8ZSYkQmhTuJ3MF2v1HVw6Z6itGK",
  "key15": "2Mecc2Dw1fYm6wr2XCVAni6AGqpAHBzZ6NeBGp3ikg4EdzLVnuYSv716ARCzJRK4h5HFGjTXz6N9ALuaJaRQLWYB",
  "key16": "5FkUFwZ5QdEKaenzziLtdeXCKJeKnTsGSSLCQZb17HUcVyCVNv49n7vExaSK7LjqF4nxTi26ZWdyWndxkcnjWczC",
  "key17": "bvBr9bK19AyTa7BqA35W21BWweiiZHF9AgN4RnFo4F7ZPdybqU4cGkDCBz9oNTqR7KhedZgDQfo3CHJu68eMxvo",
  "key18": "2GsLgfDdbAuBtGxfjPHWi6kxADNiztjWo1SX7vV7kvVGdjqUUfWL8YkUbzC2CvnbveSDs1qwtLEyVYT3KGdJkEpX",
  "key19": "21k5APA77s8AxEYnbpMfjHAvABCiy8QZFzUzaDWksxmwAX7PuwddyF7gPYfhk8rZyMhWcuC7iGuo1ga3kV5Xwxrw",
  "key20": "odqLvCadxXWh7cJPh1Eea69CaTNGWUBn3VxZvwHdk2nYtQuNyo7d4kojoTptrCyHxviYRahs36SgQwfeK81bGnW",
  "key21": "4z9D1RA71r2zraZ1mfoUjazHuJe8Afe4GqRUwHTGY6izTKjt36jyhZJGfwTMqnQrp4P5HCmduZHW6u92PSZGCo8m",
  "key22": "59pP4BhTqvamdHrhGetZ6kWZFKGD2XkMjE1JxzSNJBvdoAe5MPLbrihsDFqQFVat1SCQuX8Ec46EiFqYuLine2SS",
  "key23": "5YZvoeEEAeUXEGVpq3sP4xUAYUVAAyHpcf2AZ8yZiENaBh2LuMnxQAJBp77zzpeSWTVKNRc7BhLBC9JfNEx6SvrE",
  "key24": "4UJHn7mWqAWAbZeEBRf48RMhRqYiwbMFXHxNDmtAkqTYuE8fktKVP3Hvqmgpjtf4KHyvBPZe6RgpGH7PfSbtPugq",
  "key25": "3iAi62gfVqvSD9wpFeQoGPawUmkZYKXV35zwEjCH32SPMkM2eMJywS5D6QStxkvyRtNcy1vvf4wXdBH4JdmTUzYm",
  "key26": "5icZv5EZEWv9RwPSTt3Lz8yU9844Cxubg8QSPX8Cd4SGMbtNVXk6cxG6gmyA5CCqSBDvUueJgjcq6HJunbV8Hq9u",
  "key27": "2pzbmDH5uvgsi2XmsbotFhvecTkrXu5BtH1V2DoPGiMgtp4TAL7c2JDBP4L3FioGgoAvofA7YSnCJWJSjZ97dB41",
  "key28": "4TpR7W8ud8RKMybjHCYpoRvuqwmAKZSNhUEgXADMiweNMexaqSBWpGMCZ4n9dZW1aGiGo3dUvivBb7sZ5ZGSXkcV",
  "key29": "5k1J3f8qsV12km5zZ65jeBLi2XgJa4YaQdK8btJiAqqHZCRC462mG64n5XERXRB9my6kcLBCsErpmAnfpSsBkbYN",
  "key30": "5YUa1JMaqL4mmW86sSx5dE4gXyFVJV7t2QX8RFkkur9mpTX8MLgmtBxbSasRYypQ6ocXFmX8ww8KatM8ABgShd3i",
  "key31": "4HRCH4oUgfBBEhyeLC5Pz2xNbbiWNY16cwxFYobxvTjq7ihAK1jBmwpZBoFUUAmuWJg2rWSnsbYQ5EKjwT7Q3kdz",
  "key32": "3SRsiKUXN5GeRSUY1RrWAPo1mg6qrS6rU44h86RiMK65BgWKcR8LfXuWAM7NfzgagCVmME2xFxNxfRS3oWMJGK2",
  "key33": "3q7gVKHFsfnokJi2J32CBsiQjWYoLyJRiYMzQvAtMzzYxuM2hREonyN8H7PQZCWFQMAEqyM2tzz3BvMNoCP719fj",
  "key34": "3jcQH3fiEWAm1hdSqCuHDwyzEYmjp88NbtANcybhtVoJUxLnqXfKurSEah6VGX7NPYfj5Fd53YFbitMr6T5SQw7u",
  "key35": "3XhvjQaFfCpWdUPETXoeqCcbchmisaQFD4tygFMogYvQpN2JiFuNCsXQ2XAGQeQUjzh1rFotav9u8veRvyYkUErN",
  "key36": "3Dbzku6Q3U2rVNQyowgFHFmcXnAwz9pZjjHQdEQV8PU9rkeCkM6RvTHD5BXubUcduagRW8HygDzafFFy4P1Cxdyf",
  "key37": "5cgGQE8y3GpsMbHN4cPDosjKFQT7AERd23Nh3wNfJk4dKoDRdXHLvVD7hR1Wt2NysUF5LU7dNA2jj28WNcCBAXK4",
  "key38": "5A6Jt5cU8UpW3kReFdkUBeEVoreS6T5k3WWRiZ2rdMBYtjak6nvwCNiQ7ZFFK3kq8eYEJh1BMDSukaKayz47anDD",
  "key39": "5XgKChvngRtRc29MWoxvLqtmP4jWtiRYvg95wNQBGftARbepJ8Z8Vk5u4G7YTWcobEssqNh2b6eiMGawATjQAetS",
  "key40": "4e6r9tmCwPgcnZER5edaN7Tmjz929h1ts2eCBqVCvkdbXRX4S1WmiNMWQMmqH3M8KNeJVkf5iXZzzMdW1ejsyo7q",
  "key41": "5a7hNvrC77m4TNgMb97c7u3XR6BKDXPGTNQophhb6WFMWni5ATudCtXakC4cBmjtXkhbVJLj2SEsAFpzVvzEvcs2",
  "key42": "5VpYt1pqTMJmqr4Y6KXRbbgiyMg9swvp71ewEXB1hdtGdSHm1JLifbEZPD8SeKrU6K5JAKPrufbdhV8hHnm5EvMk"
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
