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
    "5tcjeL3wfXuGiBBNsf3VATJfFwfck8ko8AovJMQJ9jWxSutxuyL2LDh6sZmDNWmVASkMSxh9wCV53LXFk6fCctdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ULmrSURPsoc4YprLzSF5oH7sBwoE415Kxk3CgyA9eLBj37GRnkMpDVd2dHXRmuNNoH1Fsw9RXBPw6hTJTQ81RAB",
  "key1": "5mzBoiEA99or3ZKWZtvhRYHiYtNgpBE1dJjFdZ87Y79hUWdAFUdarmMgVrqu2dtadTtSdfkv4mXvJzSycn1d4bYS",
  "key2": "3vbCV5Fv35G8rV6AMQhwHbFQHjHZdkYazPhFSSXAKXaK8ckvg5wtrv5z1ZgXaNANaY2N9BR3aDsspN4Ek5ZAx2Cs",
  "key3": "3Rr1zTmPkVKgRLmNSuaQTXBZyi2ZQ7ZSvtAk2CvvTKxGGVzmqJy9AnQCy6vPAvyJ2QhnLVyodj74NqHtEFUncXCX",
  "key4": "3SwR3JRsSKfPBrGSwjPnQDAP3kyW4LGj8fHPxTo4SC1UL89ficJyyM1SXH5vA58qWvKzGB1yrkGnhJ6DA7QaSas2",
  "key5": "5q15eKBeJsWXwnxTkGgS7qqVp7nrH5yqA1Vu4orHGngR8UAWCeGRzhgQnya9fz6xzPxnhL79k5LGss3B1oC7SKBy",
  "key6": "3FZtzKzhRKjxxqe554qKSTwRpvpSbpHLmgXJeR2Vyz3ihgoyk9MEzBS6LFPddqGBWhDANqz6nANQ6RLFsa2CF3PT",
  "key7": "4trC7m6FjBjRoRU3F2SuezTGWPjqGuYY4yJnPf5yLyUTjMFP9AsX39QwawQfFRFnuPWXxs32YCRXzVAN2TsR1fnZ",
  "key8": "29JDZ1ECLziV1GtSN3N7iBvmWmAvzzPHmQAAQM3GFq9EFnMULyn8pHvE8fjJHVxUVT3k57D4ePvpM126vyqbmGAH",
  "key9": "3RnFUCqm6vjjtb3NRN9b29KHpkVQVYzEk6xTTNRpxUyVvMdg2WuVBeqeBNdVY7R7GqN76zmYJy41p2QLDm4w3sGD",
  "key10": "2M5ZKCU53RA3jGPVzRWFGsP6eHiptspRQMBUVpVxVMvCiF1npmMJc7rpAkMcWyDQFKrknsp1m3LrEu93oHSuoPsT",
  "key11": "5Y8syCth1YisbvCPU8qZqL44hj1fReDVQU554oAsrK2aBvNWTb5bfq5WjX5NEJkuqecQzkgANbD9HnDqhdaUa9uE",
  "key12": "gDt23VY4shVPnGQchBL8EzKG787yuKW1dBUWi7rVpFKi9G9pgZE8RPMFTbVKtKFUjnU1xRgbvL6MNZWBmJdKHKr",
  "key13": "2sdYKq16GCfH5zB7Ze1ScEHS5Q1sfLoiCWdSKcahCGHsbWmdbhswDwJeSU7auLdA5R9gE3piw37tVzQyz3z2V9wT",
  "key14": "2G2xZ1rcc1Wsgvcfj5mJ7eSyyVkAgm66rehvq3X63C1E13iFjadtgBdZiGkR6VsJuxq49L8Dv1axt9uvXUjj2Fi4",
  "key15": "5sJHD5UFe46CeqhesHz957b9YrgFXitNMBhgZjkHmacRZZLQvXV2255AkXgQnvGT57wYQE3qSVB69msniPA4Rz26",
  "key16": "42u7LMJoYngwfHwyENiT7KMLHyVBZohhF8Dk4za9b1wokFMhfMGTtBCgLX6zivhswAnZ5QcnbHNXvo4uwkMKeP8r",
  "key17": "GeFsEDJVH7HzZi7S6BoWsrUYmJRYKCAvCPDryoQVwna6vfUaKLyovRn4bQF9pc46mFiuXBpegK9uYnP9GSkcqFH",
  "key18": "3YrhRnCshkTd8CEe5hHMGFEnCRf5vQCEk9CnzzhaTA6Rzi6iyFmaQyv5C86n3k5SfyBkMGpRwvYF6j2CJ57n7fB4",
  "key19": "3tr5x5dfAdAizB4UeAQCRynLrQ33GSQ7MFUhQEpc9RzvHk7p2pHAuc8C4GnsJxTjMdRgG9c9U8MjoYpXrCCN8C1D",
  "key20": "31are5s17wxrdqJYUMBbKTMrn5ZwR1soVYE1NWnTFbvEbLNGqLjhFcwqz9jBxowpdk9BmQggyjHYKqLzdAXg23bg",
  "key21": "5G3pBumkZmy6KNKu3SoY2knVTrXK2Korq9Y6gh1NrPAu2ReAfz2A26Kzge8zwYYWww4xX7ga4WzF7AUxgTtoW3ff",
  "key22": "32TGPpqRssk6wiHham9CcpvJuXmBBi3NYaYhG97SvgXKdcK9mfYwuDnpBS2DtWe15oBaN8fbuNXckf1dg1qKU5Mj",
  "key23": "Encp7kC41BiDRGFEoSip3MDZapLbSPgJXa6Y14TbbYsXwwrmBUNKfbzKvJCBGCgow8t42fQXuYZB9ekDUNo8cYC",
  "key24": "5uqn8gcnyXixLC6tUt8BpeqU4X1wiqo3mXTzReFrjC3a5nbR4xDSiqwxrhWtUBgBtnkDtZ4V877iN2FBBSUx2wqH",
  "key25": "46kthbM9Ku7umQxvYmQNm4W23AgVNxsSuiW8QfpTpHFMFbyizJWM3yFZ5aoXoCuderieABnNU4EzbejbukBSHu3B",
  "key26": "3g6raQ3u4VeEt9Ne9XLwhv3dyRf86rYHDMw4uSqBBmvpPLFayawQ6sMKY9kmoiBvtzHNtWgoCxybfzt1Gbfnttfe",
  "key27": "4KcMnLRw89GBBmXNzWB6cdxa6A9WwwiGoLq2mWjxqqqfq262US952U9b5eUUAYFaCjBYQYTjSVVeChEL85hoVGXi",
  "key28": "3YFV3owkZJMcPYRj1kuWSU5m5z6G1XPgXQZMPxR5yJ7KkLtRSQ5CcKkd1pig2weDHB23fJFqwS9P4zrqAjhKUEpJ",
  "key29": "pAwzk7ArBrRkhJ6JH37i5HJCBSnjtb7QyRkUgYgaLK645DWwKMVXkdigxgWtfWe3eGU8DMtdz1W4WhJ8KbWDQxL",
  "key30": "ZyxiKNRdRU8CRAoyFQn6VLvWvbRrQoCC4KjsK3RFbcQbVY2z8rYFHNUKLpPHSJTv5DhcPAtdoUQwjXBjj4khx4X",
  "key31": "3gQxum2ZPeZSno9hpsCMnuhrGhHBvZitLgdrjdhpzGthvuMpTqxzzGfYd1zKdqrVKT6jaSBaeJ3v3pxEXdHkoMrr",
  "key32": "2xasSYx6ZvXuixb14H1dnj8cLnn9DjeHbszy4bpyHQYstbJSHsMWt45reQiczFpr6SYvxrBdShMLkVmJWGXfeZkZ",
  "key33": "2UCWnppMF2kccEMfdW67Utwjs7Kfv8XkvFBk6zJs7BFwvu5ARn6dshAXj6B2Q1Kk2Mw1q27WGmLTzJexUZeRxNS2",
  "key34": "3KkE1xFExPDGN3Y2RDj9KgS1QxX4TMp5TRvMGnUX5nU2NgurubkDXBJ4kTXnxaJuEG4RyTnmTwgRytcTDk1T7MWM",
  "key35": "5WqNYeh1ngcb4eLTQFgio54aVRjKoPdjSnyoq9rMipgapZH1k8ybdKaj2FNj4ihTqXFyB25MHKLkyRZ7BT96Eb5i",
  "key36": "B8gPqXxVyhc5neAiH8BxHqftgerW1NPb2hb8ZGDHKgGM7jft8q8ef4TrrtmT6dMHPrQ74HApV2UtDCGyFWHdsaj",
  "key37": "3L4o9h9hdHCnmFp8QSc5cDR2kame4K7ooLgT6r74FCvsGiTzfdadR6w7s53d5tewHTGYetMXNYth14DDejP3RyS9",
  "key38": "vY37WvwJeGMyEBzTKaMNDHFu6cBUCxFT75BnXfiiFj3ypHgbLRU9B3hgGP9FHsNXpXPR17rQMdh8n6mqxVLyCZB",
  "key39": "ivXGBXxsseteMiNs2GgiSd7tugD8DJdwi6f8iWrDT8K2wD7X6KJetEmBgmkPVQb3XwaTKfHZ1h1DFWbKqxbMeaX",
  "key40": "26DaGQbfWp9ntetS7CZzweLuddHC6frNmTXZWyiKD9ey8UB4Ds9zWcN2rsggE4hibNh96d6siaGedT29CsS4XMwv"
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
