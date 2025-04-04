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
    "3EWLnXGoGRQvmuYASu2JnhfVa46VzVvB6tFT4vxJbbvRnMohz4Tcv4vjA4FjTXm3mh8Pcyo8azSohTjppLGpMifN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RowuJMmvcSaKcH1DGLGjxR7YPv9SuST9BcB1XkLxBh5vsZahvF3RNiy4quWGMTxVp9p2gHYvpXsa2dRxBWUFg2M",
  "key1": "jjfDwUsQBM1YweHjvwNbrZV8HjTHQ7es5d3smksjuAbAyjVcXqw1BqpXEtdp8BcqocByqMBjve1CGXuwHbcvDsg",
  "key2": "4b4xX69dEGzJ22xt4CcSsQuQWkGb26pvXbVNdmDGGcbxXqU9B7dsuG7Kr8eCkKAiiLpTgMNNjytQ426BDTNtRkzc",
  "key3": "2fMZLmZdDqsrwx9VUcJNtqvtNKHuUpwVKvSgs1jgZ6uWrsPjqTxHganVfts5qTfintyFrHwWRoGAyhqLSDcDfyfD",
  "key4": "BsMvKnLSkeNj5wLHQViQo5rVosQbfgWt41EEMyb8SEV6vJkEKBNsNyhmjQ5Xp9EHREmSdrzThesYRSiDRw2N7JY",
  "key5": "58TVn88A9EihRZRttEaeksYtWKe9yeumuxi31zMHgeryx299PfQEfa2rcjuL7wehPZdfY7KdZ9ZWTyU7iQFt3JUi",
  "key6": "5PrRdNi35pmbnapnc3Jne3QsVc5oLwfZmsr8mhjviUWBiBsLsbu8SYNqMPJA4uFjh67wULAkNuNFsTT5Yb95ueia",
  "key7": "5MMzLyCuvhcJNcy8PkV2617z85r5p8E2gwzECgRgTmuBzLrGPQrfU3oaW4v4Sjdq6pDvZLiG9oP8vWevz3PgBiGC",
  "key8": "41VkuioeSzjTqGi7tAti8PHqWjCfCobL4xHFaXatqwDp8nTM8aCPmVSraVrDqgfPsnoidKRcJw3hZNneDnzTsA3U",
  "key9": "2DfxRwRkZnMNpEdiJsX2HDbJ6tUbidD6V9V381iEVJq8hByrysz8E26Ci92tUwwybq1p9PEuuh18op1FM6H8XYpR",
  "key10": "5foSYrPFrxgrRSuweMkXURqMSJ493tiPM3P7fpCwEaMa4xUpJbfNX6if7pM1BqAyWijLAv8ckSmLT5Gpz4nW59wX",
  "key11": "3a44MQV4ftM3UfvjPq2wZfxzbeuZdNqLEWWcriQ6RSu5YqAJjsGNtVVv6GQW199u2UVnFp1DUy99mLJz26kj2ca6",
  "key12": "VyxjWuZYME5QVEwgx8bca4M4N5EW44MYXn5M82CZ2xTDbpJHD3dTjXA72XxSbrnvTMB8uQGmrfaa18GLPHiQHGQ",
  "key13": "2ehm4p44BmegfpcGsetTeKD4iGdfAU5Bb14RpFXfynAxLHzQ9HoDBCwjJ1MBzdkYYrDqwU6ZSCWFjpBuaufvNEGW",
  "key14": "4R3Bt6tmgNgevwVmE2gB6qgTuGrc3SFQrvd56UhK2oz2NBfnd42FchJgwLRDB33NM3GM5xc8heEw94RtmptVr99c",
  "key15": "35vBttRrVzcuFnQpJXR7tgmJ4F9xLEvEc79sYnoBa98CgvkdiQEFpqWrKXQyJGK57P6xy6yNFoMg9U1goyEa2Ei9",
  "key16": "4jUBgRb8bqrcVt3ye8YzDaerFj5qaWQGJVz2SkYz49mcPgwS3ggvJyHY2NTbadXNwed763QkNz8L2Tsq9HSZbh5c",
  "key17": "2HaAXrki82F9J7uxUT45TXx4wvtaMgfQboZoCfLhM2wwtahnzyumUWE8C3pveoNZ7DubmppPdw7RzaGa3hroGQiS",
  "key18": "5afVgsXFkUe7Xz8yYRadNhuzhi6cG3qY3XFbggnSaD44Lc4NfntzFJhFJtcef7UAinf2BbpzFF2QjKdo7VVEaCJA",
  "key19": "5UgrPrVuEwsbRuYr2aq69S88vC5sCxr2q527t393chkwrDNEUGWZpFvVQTrLR56svSnPNEcDiLZPXCEVAWCG4kc",
  "key20": "421N94o6zBSssYQy3ag6gzhxXCcKe5B2ExWwfW8Py7V7w4CS8NGHHQ3d2YqiHSpmrp3XHxCAFkDMCdH3kQ65nVHw",
  "key21": "G53XKeAEpdq71xQVFLmrDwpUjdwBytitY9XGve4TG2TmP3Kke4kTFzDknqFAoed9zV1ss9UHnqU9GXfzrUcYCX7",
  "key22": "4LUE8Y6P6dpLTfJyM8y2KeUEs2k8ZFBWSvEvD4DLGxfHKaoDwQNBp4RMVJCLgG986pCXk8KRp6dKvXE2wSzP6SrJ",
  "key23": "5eHvxWcWphZcrpLkssMssfedHJhq1rY93G6sTM5L8wtyYYPzaiZuePon9KYGruqSLzTrqYG5Z52R3qD4VMbrEinR",
  "key24": "wefS6x8tf8gQvAbs7JZwTHKTHnKddXxGYjk9EPVa3PYcibGJwFLUkDU7PAdsPKbVgiz1K1hTWEXMGhfXUynSYLv",
  "key25": "fAJmsaGhizXatm9dXGe4RaEpVMt75siEBLgJEbzTxdXhnNJGT128HjEx29bGvbKUbkVMGuBYfwpDKu6rubWyw1y",
  "key26": "ResakPb3CkXKUY1zwXsiPgY9U79jdj3Xj5VceLAwVSJfsiDvZUsGVe5GWd4zDLW2oer3XoihrjBjndwbZ2dFWQm",
  "key27": "4Z3CDEeemFSpoKtQ8hebUCwkJPRKi3YjuKhea8UmQiMBiHxp8AvFDoaoRqJCEJUDTVRJCMXUgbCrXqNwXDyTMjJJ",
  "key28": "4dhridxYNo3nCuLBxmx56y47Df5UU7QdoNQXzHa8QrHr3is5EBBKoLxLo1GKRX61XVz9PNgdmFTUjvHsDwsuyPCF",
  "key29": "2jkGsSR8XSf7cAcBaKA8XdSgCRCr1ueHNpExJDjzMYPcz45NZdvs8MaojnMLEArdjK7MFU7iDfMqXab2Zki1THVp",
  "key30": "5991XkEMB4Biwa77Djj7hePm5PgKzcngwbvbdRkGNZAswRqJCuvL6V1SGQUNuSCpvb2B5hsm67z9RpTzJ2Ky5cjJ",
  "key31": "4znspCgSBvBcMQBJ7iZ93q2qDY98CB9NyYPm63YY7YZg9vQX8BuTHDdDtKmKMG3P6dVmrDsbRtbzHDubBgvRf59Q",
  "key32": "5mbG75LXJgzju4QSNWo2QoHAnvbR8siRhYiL38EgrMJVttdJmqnbFBuJEt7GZQpq2AfpUhvj5He9U3hN7p7kyMYk",
  "key33": "3GTdhTNmdFoVrpoVCP8bAfYqBx8R3Po1YL13arVe5FM5dppLoQnA1KQqYKzjaQZ69drWwRqjYr88ukceSHooTJK8",
  "key34": "2QMcQjghi3NiE33XnQ1kXAdgiUFLbvDNERUe6H7tP1cdDfHZY7A6XcJjLFCceSZTEYZDW9hvrCPUahWZoUA6SM7f",
  "key35": "33FqFT6RVPvKHV9cowQRTnhJCcsvWXabbuc2MeHz7sknYU5Jr3fceqD4MGQHz2y4cRnwAJBztfJTNkxE2M3Dxu83",
  "key36": "44wmxTYXrXUDZX3SAaZ52AadeWNFn3aK9YnsK5a4aVr7ZRR6swbxQhFz3MZF4tha5mvLCaDweoo5x8TJCtvQgSiu",
  "key37": "4NnXwweJNXpAA5FFQ6zRHUuPjDPJWPvgTM97ixMq6YafLWDuFHAEHchGMSsd6DdF8pXkALjsnn3toGZcT6kAhPiz",
  "key38": "55chstzDw7egkrWmn6KGCEu4MnFVGdNUeTMns8mbeGuuqSpusEvaxQKzNHFFu4nvemneNpkfXQLxqPMefYNtbgnN",
  "key39": "3zeJxaWfF63wSGUo2KEFe4dSWypHNhsBB2ksubG7kPAEwA38kQChQBrvwo34KtQCtf3fKAhyttjY65z1EqEGyNx5",
  "key40": "KiWoonUXHpP4hBmVF4ardEru1bbLjKxT2BbmaBdwBXvTN83RDsH9Edkf17GBMBM3xiA3yVihKMBAqYtD6LGiy9J",
  "key41": "9rSw2TqXMdZSKo1yGtfCYomsQ9aM6BsFJXPFxtYoCmEKkpWpvQTgNXBc7DW2GP8bAYXC8YkooWwNBwFGDYgDquv",
  "key42": "4zHrAAZebYsVy8jaDsWiTrR9SyQXucJQbr32DmMj9ytJo7MNCbc2zmZABqPkL3wbHQuaZmr8WWkTpJmRyVUTij8k",
  "key43": "3zECpAQLPP3kFLc9Ge3UrfFVGnDacNwqPwYaYhHd7U5SDUZ2FvFqsA8GaCAkDiZkgtU9B2rLLTrcGJnf6mHDGEgM",
  "key44": "yXsCndSrWsYpyYyxS8gepWSm9QnvoTwHGzHZnQFtP8TN9GUWftm68JUnw5HyjBhzLh91ydVZLH7tQRstvDywe8b",
  "key45": "31bAvDRAS1i6AiRUrQPFH1duGu2AgFGAotDsdz5kyo9VSNcyUsFS5DNMVXYdF9saEWABUDwaQTsfTSnPyG7LAkkc",
  "key46": "5Z8iGynERcLJgXNdhxTJmoHNNrJQ3iwEdMWz8Y3CidzkyjqB6zXxocx4NRjZdCa3N4LVf1R83hAQCRxBCRpU8muZ",
  "key47": "3sX6dags2zhv3QNBibqSj9BKyv4FdkrqUMqKJFRdGT3qJRfJMVTSokJZafTwepk7ghKgqG9c8qVzLeV9SLwrr88a",
  "key48": "23gmQMmYRaZpip86TdEJ6Sg4N3y6viWqTCTYcfzzP5ZHDZTs7v7kDSN4VuYAwu2y5qS4Ww4yqiUAcmYKmeDqYs3j"
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
