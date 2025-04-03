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
    "uD2shohnwwbVVaa6bWE258BS6anDXqtFdTCij58VHCeNwQUafsxi4tURUJ7t6KbZv3dkdrMywnGMC5mVQeGkGPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27BQiLM4yLSq9oG7bRXcEfM6DaEm8GVrHg9zGFa6qgCNDNpA9eZ5ig3v2vVW7FhXbDi9NoGXt6J8jdLxZSTNPq78",
  "key1": "2aLmf2S6pPBXGTh5hNzvg6Sv3q3NBDRyf9L5c5stFQXvTqeJnWyGYhNEZyWKFzbm5m4vK5dNgiPgTpS8YuPF9WCV",
  "key2": "9ee7nfsGh5vZtUJ4nbKc7AQf7G6DYQMYwHaLirCYRYg7iB17wxXq8kif24gnQUGv99LKCWddykK5SnLXxMSUmto",
  "key3": "3kV8fmELQdBLQgG74qU6Ba4zJkxZH23effd6Tn1DKM5RPFB7S7PAeSXwB1LwyPPqWT9Yqj72oM2pcdQQUqa6tjhh",
  "key4": "43fj15GiUcrwhpjgo3YgnS4m47iE6NV6kpA4VEy6ijzdqRYU5NhcAJiuWqAQZZng3k5m9wKecSYmspbEiNbYN28J",
  "key5": "4aPmpegyXknuiQ8VdiNrfeYxG9YVbQYwYAwREswWghFuCc51MbJjnGrTduAdNGLX7a3YJzVQK7CvzNB8WSmwMeQY",
  "key6": "4nt2T2cDU9Wk1jP6GCC5dunkXUrPBt7oXQYfftfMrkhmKC4ov1nBhjW2qWgf8zKKie6ZJtJv5yfRodNphzdPCfe2",
  "key7": "4uqkYdtLqT4Ymu95xVTvqRRvTaswDCmM24CZ6L1PuHew9ZQT5kHpt2azH9Jj43zoCpPR2kfRbgVPrkRBcoHq5eYf",
  "key8": "3f9siMomGKjQ9Qka7RZNgi1SwwTXwvZipqCzZBEPnkrw9GnWmkxcf7NM5Hhk4Q5u7MvuHCr2AQ8WeZw4msCA8Rqk",
  "key9": "2oUivjjj2U532XcXmpzCVjQfzmxDPE13hDMAK2vknJBCULryfUAJFUyHHyDTJ1tv8WfkiDucxfRHHGh4eiHvH9ca",
  "key10": "3kMys5vg7HK5F3Vrn8fWSdmg7S4sB8tJdzt3ZGvHk3Lc3kuz9LcBhfjbtkRU7FNErMRagHzyVu8KKpSjG5sPgzMW",
  "key11": "45r4eGhXtYWpcaBDW3bFRMN1xLiBbkoQYWVxrRxKDBWgoJSWoc4bTFAPKLsi7dvBw4Zgkj4T5XiZsN8AgXLHTR8Y",
  "key12": "2BCqdmEkpWF7kM2KAAEcvYxuJ7Pcw5v7DfsibRMbeLL58VBY6SwZxnKLxLA21M2UCUBTd3AwaaGbNp2rpmVGnQvv",
  "key13": "58DRCQ59ZP4UsLptSKsjNxiNZ2qDNqcbSzb4W8TFFQTfACSdP6gxyq6HPptx4fjAvDwiHpEbdidh4fnnmWSSXkcQ",
  "key14": "t8o5KDRvpbd6XAZuvnE5azjkfEjAYbAKbY1zq47qMikohnGYXkrZZioY4EXhkxFkaPCcKzDWiA3X37ubJ9FHBUu",
  "key15": "5xcZmiV3HwKkQAt9SwwLyQnoj1NxbXu7oQGmjt4myNcC2gs6aq9RvDNza9cai8ZU8hmxSG6dWqb5RqNr4BkgHYpj",
  "key16": "2MDphKkbk8Xvp6USFLLRq7BAKQyzYjeb7nz6mBzGVNn1AitcXgqRmsQ8WWS8PEtoTtHLKrKdVwKCM8tbqG8PihDy",
  "key17": "2UtoVRaiAf2uaSV3BwvU1sifUXeJ2GHT9oiZMVpP7mLK5BKfrAZS3zzGXDYewmYD4cBtxe74GF5QRXuNxTqPFZBY",
  "key18": "2X8x4YwJmZg4kzTBXcSXQSTaja7ynvTLHpC6DaupQCZ78o5bMhGFHxjiYsNNoX2AKX5sMmjZ43z5MoLq5fVTR7M3",
  "key19": "SAqVm4sr1PSZD2XYnYsztahDoBhUJnxFn1mBrGka7zdh7YeTU27xDUFK9fDbvkk4yknn9in2E8hGYSLZgdu7dRe",
  "key20": "5Rfn4FjvEwUG7u59yJFHPhTkUioMmbM4TmN5NMYGyUkdep2ECHkeM2W8ymGQGzpNYWWshcyGcKQkrGfz4d8omoxL",
  "key21": "Rro5DwfUDhRUMnP8bQNkV9VVpgh4YuF7y8kD9vZXSLv3yEKjgNXjJwTDLiKfrZQptV5eDtJUpN5c1jB69Gv7x5q",
  "key22": "huENVBRBTLCxkUZCfc6HsRdTGgzLKptSKq7pR79ukZ5j6reCStf6BQe6EaubYdD4F3ZTdX9vw9yiad4iCzd1wyQ",
  "key23": "2GxtjDABHUJRaWPjufM5opihbuhKJtBb3J8rR1jSRG5tV2VHteZr6ShJ1CmLvhoLBNqmnC2EqRP2GTcHajGG9Lta",
  "key24": "2aHphCoFi2pVnpZYGsApnf51pTVzxyCLoxRrHDyf4T861FBAgVVgLLaTnSvN1DamVzj59Ja6kiUgFzgQJpEMkyYh",
  "key25": "4NDKQ97iG8CisnSZ3iXQdFm2bPnmj8yjPmhoFJHxWzsMV1LHxnAS2SpqDcCEsbJ76BSGfAm28KDV1eCeeFDHRLKC",
  "key26": "5DH61FuuzegnudrA4r3Z4JECMgNjTzkwj2Qj8dHcvngi9Uc4qyvCeq626Uejk6rhQb9k5vpQ7xvafmVAMfcEZWdS",
  "key27": "41X586Bo9etT3cWhg2z3QML6KuPB5LV5HvZ1RvxforftrQMGwwrwySXVFUocPNBUUWNsFF8UaXhaQd9CLrePDGDi",
  "key28": "2LZJ72EdEba4hJWgxAvKDxR1K4btFTFAxuS2QkCGHG8cFDuadtsGNiDd4Qgc7tCubhjDiz1nuRrVyPmMGzvTR7R7",
  "key29": "dPFVX9jg9RdEV534gCUBUDAbY1zyrYoSvS2YD1N47xXrNrKSAHDWbayaKBV95mTeRyqiDugqsFssSXbcGGuwLDj",
  "key30": "2LQBySRZzjMCqMAnCKM9VVadTWgt9nvsJUBKGxFFmZVN7nrHkaL3hd7ZQDSHUePW6NwT4NLYwzsP1bLVS9nnzdJq",
  "key31": "dxQP1oy98cDxvdFevPNAGrYL3hLEmqU3AVEPPPXwkoqZmV8Hb4nvsQXkyFBydPwdBLEHA9TtJyUUJQPRo5KK2j8",
  "key32": "2Z1jDM8KV8X3ZRh2eo5K3N1r7c9fTgm9HJkjxaVtkLCqASiXHdCTEjnP96HzQuTro8URpesV43aUqbG34DpUoRpT",
  "key33": "3j6JzSn3JQHGiEjPbrBAFnUVByLqk6A67n4uAF3PmnLEwRFDzet56nXtJyU9n7EumgqiteC75x7YxZiy9EqJTX1s",
  "key34": "4GYBPdiQ5gMgwvSHWF5w5dpTnzhfbmdqobo88qo1eAqHRz1zfn4DhKspTaEDa5EvsFVGP9jTDiT21sWZagJKdKfj",
  "key35": "4s4c7F57ZFcQApN1jPjDJHhtGQsFdLXXA3QBt3kKEU71VgvecWomT9We8ZtjDKe5TwQPEMFJj42L9J2qE7iQM2ys",
  "key36": "5EJaQrftpRB35f4NG4fuxT1jQCUychtRNYNPJYUqJvzLf5d71JDTBLkY2Yi2DmZsRVTgdhkRkZ8SDophj9DCTv6s",
  "key37": "27K8QGNJbc53zJSu4axcY3yuN3jpkKnHpGdXcgHuHfmHqkstmMXWpPEqmkcxi3poGhdzmgtDfTTn5kAC7BMtLWb1",
  "key38": "3gJwc5cWCJ7ttDUdBp9SRJoTT97xqe8tt6MkyNGKXgdqFxQCotuoAK1D3mYtDKymJAHqYD7yocjzLzjKAHAdhrC6",
  "key39": "64T4utzxBbM6yQArZoLV3K6ayX2o6FsbE3cVaHon6tQr1grtf6BWyCbNaKvwVCSViCjGDSzbPRFCqufakh6Cg555",
  "key40": "5N9xunyU2cEdGdBjFdCApwraK4318QFEce1t9yRDnsnfugwwFqTZBmKWyaQok5meM14rSgo9pqbkSQYq4dDMT5g3",
  "key41": "craYrRsqcHwv8whpRgpZFS6SPeMKN9JXNDSd1zVgTJqhRNg7sa2ekQjonpaknphfTMKbohtNMPd5uEM6bmX4LyB",
  "key42": "8MUouN4E4Hfy997sycBm4mcLk8g57TzPTTYm9CuAsdUrphk6KTtcPquwc39y8UpphWGzNwA8Sjmhw8pm7qjCBUe",
  "key43": "6TLKFPSoMhjXV5D6xLDHUyJqzJJJtQy7bnFTbsmFxyLVCyu54PXchYpZbiu3N6heEF2bws8KaJKLpsmefL7P8ez",
  "key44": "4rvYL28aEgRk5iGQfKgP414YiLaqKqPxsiDDpvBXoroZ4bYBRG4mFKeB9N9bqhbAUCj7dn9jsQMvfNMt1FV6tVBP",
  "key45": "DtAMCptPDgFMY8cgwRgj3ck94NkHt8pxF5SmpEqEp5Jw4nhDwLaXj8SkZGZ2MupJWeGQLFoFnzgikekZV8MNah2",
  "key46": "5vuBoqJYBct1Riv5Z1RtHR9eaddnJoJRRpybKmnjKpPeSygrwks94BUkNcMbiQyrjnu4ezaLZj4QBqYEgnAog371",
  "key47": "52vXnTNQ1DURAcKW6jP7ixWGNbbsCy9fTSiub37CcrWdPkHpKUxc33HfAYytgdpq3qPUt2HGLomrRaUVmxYwpZGg",
  "key48": "5LevZFxdDREjXuMQERKngariag8KesN8dWjGJGvPhpqonyfywZJTTjpXhitHc7EisRj1U9GNFzpTnzW2VN9kS4KV",
  "key49": "2SHydf2iHLbkrAviXH4aF8QAqiXxR8S4HwDvgPPgEsNXVgM5gxEj2bLjo8sNs3KZ8oxhPtbW97LL89rGpu5vdhAg"
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
