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
    "3tzZn3veLGs27AChpMgt6miFKNSpZeXdkRTKtnbn6T8AfM2AE2he48ccD3AMo86ZnsGGPXDRDzHZQ2S9nwuFDCmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXZNWKAKV9HLEazRqbSjWZJQFdqZGux1q8y8Vir6et7SgJvcv5W5pw5Xd5sosFZEjUV8KdDku9wn7zpN2PvcdqC",
  "key1": "5ETr1tqndMBCurN7MyCiJA2wkHmF6BHsQ7LLkaGEx8MHXBjZiamZrG3ZcnfNLUgJYJNotWWWyF5kyDeVv2b1aJCL",
  "key2": "NzR3VFwjknExxzmRowH7bEsfWyKRhkHdgUvnKjnPH7VvvesHwdqzZEwDYw9F8U7xFawDpMyEtehCkVUHHqfGfhg",
  "key3": "2U9LbAy1kBn8Yibb8nW7djLbqtjp3EFy2bh8n7Jhd1PPq2SxvZ81hJ1MsiQ6ugUKaSrmgiWGKdtDBwqr1wQ4cCzA",
  "key4": "56xofF9jbut4QWiABZMSCBsHkpxXhnYXyDPQzMdq31ErSBNUDDKdgHdobSGi5AtsAxEyVPkhZQwGELV3QEG4SZez",
  "key5": "3uzcB6bQENXHvWJGiTKxj1rUq1XLnpt6F6RWUMLDiQNkVneE9uuQhasUsrCkXsDJJ6rFfFgYznYSWU59YigrSmaY",
  "key6": "4HJVqggfjDgDJWKvwwcmj4pi2EnoupNDprh9gX8KWRYLdqdmF4ZMjb4Xs6FPArjrdPRPn77SFKU5YsP3u8AocFos",
  "key7": "3dcxBbT468TZnNXhVXk8M7jh7yXXMy3cCZFAvZd8JQ9fk8ACPnh3oEi18ASkRPNDwBUoX3UvcU6Uyx57snqggSdG",
  "key8": "4kjgUKHpsA2sQKm2VFi2ykN9yru37CvfXrfkbHVKN5ymg9XBaWLUYbZ2HAmkCBp55jYdHYaUWjVkinqhnWs7S9xN",
  "key9": "3yYccCFdHnLbN4SF3WK1Ak33ZBNRPrXkuNRuc4ReQij8wpc99Dsyn2NGqoj92eGnEJYyvnFs8zr942sSWTkuyAPH",
  "key10": "jEoM8uu3fVh6JViSosF886bGmBYFXwP466ETNVsfGceDDPZV65Y4bPJ7A4u2Qqw8D7KDQ9sr1tbhr6mh4tdfLyQ",
  "key11": "663FkrFzuDuGMMpMVRishMjdjZS97eHCM7FSCiqJqguA9TWBsJjg2o8H82rCCZtFmbeSsYd9aniWtn5F54LFpeHN",
  "key12": "vg2hUdapp866cyefmRCgSNd8oRkLQigrXFfDfSyEaoNFwEemkQgXH65yJt73R2Bs6YxhWHSq8DocyxtTmUaJYEA",
  "key13": "2dwFoAxSWFCvbQNZGatMNzkTX2AJXHX4UJLqXm4gqbzUhqp1imLoMASu3ts2gaRo8hVcERXWD7ZQUV7AVwMh1QTB",
  "key14": "5uALunxPFBvqhuTqxwrbgRXXC5Jo9DpgmxPHJdD6nU1HmLCyZFNP1MykKzvTtAQUbUX4Jfs7qsd3JCuuqP3wrf5W",
  "key15": "4dYQgt6kQkhrKahrRd934muSGeAac6FYBjS3xuxmykdc32gmXHAuGGsKmU5yXSCFgLnBCWF8T2irEgKVDXG3q3FM",
  "key16": "3S2ApVvdJ5eEBQBQvgzhCyBxtBy3YcYnYKJQ96QqoCxt1suwp4KaXYNJrUKWU39dSxvzcMCECQvznM45Qe8oeDa2",
  "key17": "4f6tNqHyJQga2aeatkTXE7rJms7g2aJFFQ733x7FzVgwFkyPuHvAz8NTNuyJYnrYoyz7Dab1dmev3DFjriKofKyF",
  "key18": "vowHtizwqqai7UKRbbMa9g3HvaFnc74tt7KeuCRKqXZGE8BCCAMpYfbwVfYjCRHaCK6LKzor8X4BdhrDJs1FXNn",
  "key19": "5ajbk5uD7YcuzzRKBLx2968oRYGHQH75Zihj6o9cQpKgCBh5U6bXb1dE7CajuJwGppMuvWjuMBgF6whHtT7uFu2W",
  "key20": "2g8rEJ4ZFuKrAVLUCzYhJnX2HFYDuFHRbvhszHqhbghwnHmd81j5ZiwChfuVdZWdhMFLM7KoFmskGehVvoxAgc8t",
  "key21": "5Am8JtzY7uCEuSXmH8oLpnTpEd8ruuseTbDNpDWWos8RZZNQ6RSf7ukr7cr2zP8DK5xm4YHD2aqUSdExkjve8eDJ",
  "key22": "3ZL9hCq8BmMrm82fpkiW3X2JBYoiqCpHeaAvebnCTeEULcu3ogqCopLDuqvPXS3jA1o916W4ShusarEUSPMVewzA",
  "key23": "4vX6X3db8wNo15aF2SDcQkXWkPAe51RvDmBzGwLVMRodt6huGGTji2ESnvayb8ZC3QGwid8i1rTngnmEbp87EVvB",
  "key24": "4dQW5u84oZTTzeuEVtF9NrbpGmWLqZpHEKbPiZF2jqHDW6EW8x3zXDUnZHUZ6hvsdxMUfGHWihDWjG5VsKWgVYa7",
  "key25": "3dya3WX2QbYn2nB1fzYRaWeATNvpg12sJpU7mD65j4Lw59R6Bhp5rAXoMuD1hEMAbG4MuJHM9VzFX9iz3VWkpuXg",
  "key26": "57m8XVvxj1JkuqdzLQopuERuJEtHNBjxywybheDXLzuxKAJcHSu1WHVpV9k7F3ABV3xiGxZn5rAQidNBkT3EDmDu",
  "key27": "3kYZdsG7WwmU2QYeA9vDy36xadPXaZR5Fd8UcWU4TJRqvUcyxLANWYaymQoCGxJjwXkmstrqZAJEJfsVKrfRsxco",
  "key28": "4Z2utRFyMmgi7V56KzvjUBfDTTc5wH4kLxsW1eP4Rs6dJdhnCf4vuN3ADgRuskLWsaob8box3XfaCghfZmEB2BFc",
  "key29": "2hSJsr6QPQ3W4MwvecDRRjQCF2C5Kzr32aNa3zEVGYEVTzyc76qY4enV2RFDtLXidEgq6FsanYnU5x3KNU7ok4Gg",
  "key30": "57bTguAPteUMF5c1RSz24zrUf1bfa8si8HNkuDRv2uG3zb3NX7PtQ19wntJChPWoRD5kydDYD4otXjxRv9K6b1kv",
  "key31": "SDipHf5mnxhz3gkq9e2ToPsmHDj5A7MHsuNe6Km9M9Jp9auF4rnn9BDh339mVbskSLWQtNhV3iqNNmvA5DDk357",
  "key32": "5VaNhCDwRRZELnuJJUxt8Q4jMMxnYcwubzhZTgWpKR4g4txMkzjRzrEowXzYk8fcGd9eFz7faCWEii42JMaKJ5SG",
  "key33": "4hQzdM6GwoSmJe2sfGoj3R8FaWq4ki74xakrN8JMYt1k7NDhKCsTZBxM2KAEwnCeFguiXZiNSG7Wdzzq4gfgAeyu",
  "key34": "2LUQgvJxR4Qfen9K7Zsphw24owcnM7m5Zwqyc9SeksvGM6PztFnHLSuWDnb82pwRzYK4en2DoMbtjKKGKwuA6tpR",
  "key35": "NYe2s71oPV6MXqJjBiKaNgqFWHf1FYRvsNhcMguC5ugFcTDKK5GstLP2JFWv4S4WnkKNkT9vQvnGViBdC5Xgzbt",
  "key36": "3Wd3akqotFyqAPxcnrDsbGnWSaweasvm4DPzXBoA8gxT3Ctwe8AHLmbW7GWzxao3gBND2H1thmjvRLh1Ln4Y9HAu",
  "key37": "pDg1vzFKkGpAbmrJM2oZZbNU15mtKBNmjsEov1Xh5TBnfozLCzqxGSFL4nwr6BGnX4ZxaqWhwUq9j79waoiHyq4",
  "key38": "3RWivoCw6teG5GJmncj1dY4fivSisEWgJEgDZrJP7cZ2CyX1qkQExwQgKJCA1TJpjALQzMLe1bDAJ91kxfvrWbnm",
  "key39": "PMzyG8gW8dDzH78Z63GGSMt9vz4ieG3Vi2DqDwaZFkRcTPBEqhpA48jSvUmWMHNzDsPAp2k3n12DSxVBJw7hZw9",
  "key40": "5tvy18W3Pnf6MeLaYUuriBGQ9qoUbjUrNNwyXx3GbkNPMpq7peN9XySL2h6ArCAB148FpkJRmeGTU5K5XfN5gZq3",
  "key41": "59c2G2Xszp18iEsu9KheGJdqQG7sAzRJvWXYDM3zSRZcpCi2yMSKLtonu1c2NiPCRtFrigxRwjr9B6aS5zAzVXJr",
  "key42": "46BTnAU8Gv1sTjatC1NG3MhQwj3jvdxp7uGnXPEM37d9CEuKsGFmiqJrk5meaB7tuZh3ofFB9hfmMfXtYsfrr9S6",
  "key43": "5Xa17ThVpWBPQGDZSWd1ZZKgKNoYhw3RGdp1y6gAVqHhSQVVbsHPVmtLtUsvD7z1x4ziW8sYRaYn9mcKvV7SEDJ7"
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
