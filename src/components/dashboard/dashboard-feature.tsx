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
    "2rXC4YLqNJondsVMHx7BWXzQgi2E2rJzjD8mXoXqNJzDoRzyiactpjNgLn6HFfn3BtJ8CCjYTAc8psc4xQEJtyjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hznQVAWtpri7bgwRxc7pWiqemR9iyT4XTYxYP3PJh44xYRzvY5VFBv6s3mbi3vt312YrMiUYWZUUuhcVC6qhLb",
  "key1": "2scBae7ysJXazmPbfMRP1GWNSP5S23B1RhidmbuminbEqr8rjKN57YWJY7JwsDLMkzkQCMVYD6SKydeqU3SH3bas",
  "key2": "45aUMi5fyFtwV6HiMr6UBocMhaguXbNYnuWEjBhsr3SMJbb4uY7ZvoerPTxTQHqCrDVvgDpahkWphKmkWpQETFTC",
  "key3": "67KteNZxnNMFoQBEoBv7gE1hmbnvEJYJZCFpjvVxNmHt37ZKbTrXdosPBdWvd5Wx6eMDpmmsCiHJRqq4fJCxFBbN",
  "key4": "1Rsa9Cc9A3LGWU9dU64HtYB3nV81TB39ka8KsW7CKDE5DLG2Q6feQxTuP9kqqmHA8YL7BkdfyxuoZRbNXuRChY9",
  "key5": "4XpuumKoZrf8UQvPMhMLUa2n43jUgeGpQw8PeE4stM9q5dgHRQbk7G3mAeXgfN5aDeyhvhvJp959ADxH9fz1DBNo",
  "key6": "4YSTgfS3S3nNmv9z4AyNT3LL3o5EjjnthFdJHcU2w13wmry2LYDZmQNC86evRcxbDrjaZABzPSEZ9HTufRgiDuHt",
  "key7": "oVj5kjTPLSS7ybxFy7EowPSua6zMSDimLn5P1jjz8gLARtU3NzLdUNPUwsx2zoLsvZCEDaHCbeaw6D9V7JEFNr1",
  "key8": "5xUU45gXvJmzEuAbB8UYkAHwH31XFyaKfn6yJpJqZMAwgdvNQ7Y1uyfXEXZQzPChwDNaq6FrMEfxZ8Yh6hYodCdK",
  "key9": "59urueTPRqZUykMNQawrJ99SiCoCbKwHfE9DBkWeAEWwP6hUXiDvchRMNLBrrsVmsUDGZMyzdZ9NMM7td8MM6Pcz",
  "key10": "5hETZabYhED5ZJst9UDZXFX775fLbj3EXoVdDxge1GZuee7TYqL3k4V5ERM5XKnvEATPy2hFcHsJbnCt8izAYXr3",
  "key11": "4yppQXzGam5s6YhAK3z5Qi3wLxMtcBfFghUEM4VZoGf2LjxdnXAKbzczhzL5sxubtk2KV9UL5TbnZT6mcKvMe9pY",
  "key12": "5ZFky2tK8r78XitjTEHDnfnP7Qa6q86xKv2CBd9HtA3fPwpu6fpbQZNYMdjhLCkRaMqTad32HbRv1kYwFAyERznR",
  "key13": "5iCLoBn8RirKJs3hTSbvdydFzaZfaMZUwU4qRvJXnF3oxotuMy6qHakB879qyVmwajr9TY2rCTry3RKwTAs1AgfJ",
  "key14": "5q22VSAhtKK5oi7cfEAvhvgrQq4jS9huaGWZFGtL2yR3a9wPL6Q6MVvUG6nTJoaySXx8QiVj3f2UMCNckVRVaAwr",
  "key15": "2oMNzjcQ82aaW7XQzf3npsFNPM3JRH7xipH995kUhiNZM7ruEMyiDpCSGWUohPXxRbf33wZm1z6bLeqVZwRLQuJD",
  "key16": "iQbUFyKnYG9PFKiyiCQ6Ug9Xf9wDJhTjy3bDAFE1EZ8kp6wdhhxPKLco3FR1VohXstwXar7MY5B37nyeAFVnhn3",
  "key17": "6huAKZeYasktTLWaohWBFzfAxDhHenWGTiSfQp6swfpxLk7GD3pHW9dy71hpeqY4gYoPfmnWriGmDwsdCqUMP1F",
  "key18": "5oUKZxDKfBESkh4j3GZvNxuBHkWpCPuds5pEeTsUddR9syJRYLzPtUiUVX4G7A6XfQ4VVTfGpFAewNSogLVdazny",
  "key19": "PQao3pV43UNx6BKThAuNMmotnTDgSc7gpjKzcpygL1F9g22Lci7CQbfLxMJNpy8U3pvSbbMMcgegVvuask3d9TQ",
  "key20": "3n6Ecf3ThKNNu5MqmYuiJ4HuFyJeyafia6BUfRJEXVjTifVX8qBTnF3dLFWS9vTFoMPFGUC5WBdzRaCD6vYAHBnR",
  "key21": "4128tcZn66cAeiby3yPXk8k9Y84vwxeZ35F2W1McJLbJjGaXDSv7x339ciei9VC9JoRY3P4HtPtM95n3QXJEfxDo",
  "key22": "3xbFc5UkKm6jNhrWitbHAGxoyPPrtXeb9kWhNYGkMv9j3zxZW9WtqZDzLgB186zwZcCnYzNz2XSJcXQKNrfVvWRd",
  "key23": "4XQ2MBixEE4Hv53YywK2AdL9rSp5CgY9UZ87K1yhacspvZLyuUhbnhtRTU1sUAusf4zEkmgPhYFSX3s9eMdYZtws",
  "key24": "2DCRPSL98HyQoi5K78u3XYVpM5otAzPByup65QF5r53Q99mm8gSrqLeGc92xsKZaJHf7FB6nUoZzrNULaacVcRYc",
  "key25": "4DdB9SiC35JQHgH8LffwGSdYa8TeiGsAk7aRB2cbQRAwW4Fdio6UDdurk2sowocH9kJXpUJfjakCDocTrKpSGQk5",
  "key26": "2Uea3jgojwLTtMHrrEDy4AzfNhRPbv8oeTog9gJGbvcBV3DZYhGzhwrD6SEZ2TpXTKfniDv3Rwkb9W2m8C6ZwXfT",
  "key27": "2EJwhyGEBFSrWDtAM42sD2DVP4yNP7oNN4mfHPQw5MMANUJWvQoAFhZZveV556X8dM7TS3pg7gyskxzWCUp93qUV",
  "key28": "cPshYKB5bZUCuHjLqAF6jgEZ9Q45iPJBQWCex51ryahnPkLJZ5RNtRXwJSSEoHufU5mPrW2TbFjAkPc7UYdRNSZ",
  "key29": "4Zq1xgRJGzpxj57vqV46CZRiT7zcpT1oC5wEZ2ya5CZf7RjaWHCgu9z6ojBVMuw9yEPZ9fUU6KSoXaBUQ12PqDJy",
  "key30": "5BukXGhdM2Uc3Napgjd9PGgzN2ZyYp5bNf893X2Eb8YwBgU4wTcqZEcJQM9qWNd1rTLKxjxVEaxDW3DqMohicGWK",
  "key31": "2yN5mgVQiBtPQBFmbBBuLaabLRjmM1i5hrcvtRkz5tzfZmydgH63u97pCXRwrZ5bxSEuya2F8mo8cxFAGkeVsBHE",
  "key32": "5J9RFryvwj2sF2RRq2v45H3ySZMoWRjW5LfY73tcF7xJW1Tct29ctx84sQBA6LPThV3S2wYn657MLmX3PiWaA23G",
  "key33": "5d8GyVXmeARYpQv4an1T982nRZLTGxmUvWjuou4yVb1DAnm15294KH2vDhRLCM9grSRzejr2HGGbbVV5qSmayxG7",
  "key34": "3EY538hX3XKfUKs9cKxBva4k7uGxHY6JKLRvxJBBQrdpTvPyzTZcK8aNSe1xkL792jWYUoj5KMC8yPT38oSjZsGb",
  "key35": "4nF1cY4MZDvK2HmiM9vf28zr6ES1o68GyB9PARcohfsX89nvkp3XKzmSKkEg2HEf2BmuGAwVGuySmktyRHdcQwc6",
  "key36": "3jtVG9mKeus5JQX9U4WfhqhfvDstC5vHgWebGkMsYGyjNrawUceQRT4yTCy55cFegPbemFaLB1a37EPfs1cAifYx",
  "key37": "FU2zLfTCzu9PnB6pBxJ3mwEE1FrGiLD8S3d3yEwcJgjKzeHoK4xLDdg8QrK9ARsWqVw2sLn3dhCtaR3P1e13FxG",
  "key38": "fjBKScfoMq7ABAP1dQUdfJaths1nkN6jSy5dGDzVhCF3FL3hbECiSfrnLNV3oqg7GHPrqWZjuPCcckoVqo3C2A6",
  "key39": "Su6yNFYnjPbYyKviczkQfEFpqmTm33v1d6YK7FxbgyEHt3raR6T2PM6ZipK58WVsrapa6k2KM22qEsj1StEnXJx",
  "key40": "4KyVo7PmfoLkTHUxzHkyN5b3fS99UD9M6emu9nACiHgzeFPMQYCYUx3zxQoQz6h8mCFbfMyGRDNS2uGAMpnpVWL4",
  "key41": "4Cyayk2GSVW7ZhyGcnT5MWfBnE6hSeMCpi8m2We4SXybgoaiPMWUuvfdYEG25m5JtT9Kea7gegfE99GHYqWXaQ3C",
  "key42": "5LEKJytPnsWG3bK8MwvQNcUTauxpisebNH7a45ESVe5bNaJpxzYSpVhu4CSMKjkCt1ZFDbWF1xNJXNsZYtoiTF2",
  "key43": "8EKLCnARrt9hkgvNWNArU3Lr2Ett9vAsjRqHhyu6Kd4crEY3krW3i4d5Lh52U1K56phCZgUet3bGXz9NHcrJ14T",
  "key44": "5GR5Cu3vQZzeFwuPTuvHUDESYiwA9dHFzHgqTSK6ma6gN7KGNxWHagYg3G4U2iMh9RiUfaUXAJE22BFN1ZS8u4DG"
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
