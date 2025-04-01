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
    "6LH4UGHASYsGMNtHUk9XWBAQkd5Bnbxf7ceoRgYCKDvSiTuDb3LsvynXSABd28k3U1RGnRPpKKpHwF11MzhEKcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ceCorJcZyUmQ5qVH9gQJpvsADyzH1HKWoRtyvyUupyTtaRFNpH2cVpBQjNh1iWk7FDa9G5hJRq2PpneTncQ9Ze7",
  "key1": "4mJ2JMeUepiJ7eNNdCYZFEGTKviyBWibdnWUqPGoqstwFXfBJLJX3R8UwiaZuYZWmqF4vQ6XHZUA94WiHSpLku4H",
  "key2": "4DLbwG331gEXXYdXDa17Q4bnUXLSoq5xLHTjUWhKkfj7oSYDAC2auNQKa5Acyweo6R7kwC34Gvg3pw4YheEsLLiS",
  "key3": "3zqWzTtT9pYUF5scXAQS6eKMAaHXH6LtL9aSjM6CCssTbS4KveZwBwFSTn4gPnj2i3JJpvDcBf9mXgCikFoP5wYD",
  "key4": "5qSK4NTpQkFLSozCca5SzhxgAkc6aNYNXz33nN12vbbK1veBohLBHZ9D1fjpmLhPGRpXp4heyrQwq5xxvwtvci36",
  "key5": "53fVxSxgXzaopBXJFx8NUi34CqUFHxWv6Hndm4ib2wL4H13LCmme8qA2kJNDivj7PV77DEugoqVu11UeKmSFpNh8",
  "key6": "1ALSmNZk4BNcqTUDxk7bG3gvXsUK6XpiGAn8aT8hViQcmdYbph4JRg36vzPRvJ3d6GyMcUJDJecrGdyNMSeWUrP",
  "key7": "5Q8WxjEtZDJXwUUHLKUwpyEyKv5LFcB8a1NQHkgmcVoD9iudGAA2tEh3CssKZm1ekU9NhAnvgvW78vR28tJ5jAbe",
  "key8": "SjFWrWZdMAjyYVF7FELe8PBWhMpf8vY8CsQKZs6fNVUvyHjDrT4tH73jijq1Axnkgy36AefG5wB92S6S6hZfot2",
  "key9": "6NnErWDdcQEGiGVDvmGYZsYAkktm6iWrEwEW5oeHdkmLjHRoVrWA3RP8S8cbXEx5kuCA846SJdoUJ7VfZwoQGRF",
  "key10": "2mH8SPWo3h8HHo4k9UP3qNc6854EGovxHgXo3pHM1bSQYe8yAotWr2ZC1SKfdUhrwunzmeqGrzqecpsfzWvNRZsN",
  "key11": "29u6zwqVRsvAm66m441ZuFMvqmpf5rnv6Pu5cGb8xGRYzMk15VJDVoW9DcTxwyJ5JExbzaVnUteheoXzYRX4dhYj",
  "key12": "49zSDbjvoKKT3VEn4xQqr8fSfyhmn1cv214LKVu5ds4taPQQg6M5yqcLgq2NaTGSYipCpEijCpsBrbxN1t8461Zq",
  "key13": "4QtwvSGcrKA7918zsLyXn8HXbamoMA2gKfwcikgEmQdmBYqGFQ1uFFGkWiTZiiB1nEApazAdyXCXtukoS4mzFja8",
  "key14": "2fQrEm3ZCU5nTmvdFxyJ3ein6wr2chetiNnxbymMVCMhuCpQBDJMvym1bvyeuAf2Z9c4z9HgmLxEmXcErt6tC2XM",
  "key15": "4YaTMahFSRjiUgkBj9BPKp9ySfRpM2PNPRnhDNEgiQaPdwcN5kaLDe1YMFRQzUMKHtWEm8hZHDpVVcnGMj1sN9hG",
  "key16": "KKciaXZoos9WRrVY9w22pKUY8UU8pEGSbR8KvopP5Whg1ppksrtCexEmw4aw2V7gYHAmKf2w9hHJa7N9v2J5KrH",
  "key17": "428i3VtuhQc1p26MATyP2f93TNDwXL46kWhp9kdSuJJmPN6tHEdKnP73JB7myG88wYcgi6uynRTBo8kxdq6eCLiL",
  "key18": "2aq9TTqoHPL1sqgRfP3g68sDTaSUobWAintgeNke3fy61yF3yVK58gHMnv14Xj2GfWcmFDy57NbVyGKpXX31cu4V",
  "key19": "46NRNZyqYbNTNpDF6mC8uQpq1bXQB8khB4xNEJ2LJ7Gr5puYm8wt5myzYAu3ptJArfTCfAJMrRpYy9P9ezWqL7i2",
  "key20": "2hj1wCEN269ddV6fhad45pgZwDKMZc3wy8Qxd8G8KKANm7JUMvdsdqwC1Xtno1YY5VN6TdqZNfBRffHPUgKLPcSq",
  "key21": "4F1F4DqWr1Hb1UQ8Zt6muy2VG9iPLeeDumdANaUA4WYnPDPwyHA7bnRVTymubtdbgC9bD7aGBgE4VR4JmdqBtjGm",
  "key22": "2M85HWCrsjmg44Pkse3g9SQmkQUzYCnCg354QkChTFjAgdRSAvfgkJcBzSEFNm2Y6W6xEUbmJTNhLndnyTzWKBFA",
  "key23": "3cjvY2cg8KcNcYnX4ApGqdtrG9eXjX3aQFEMn5n7NmqBLy4s2YH1WeFQKvH6j7Xn1NszqZHkp8FgaVXWQ2dVUrMC",
  "key24": "CdNt5hh4sHUKpMEcQiSQyiRNtP6o8YWuNHqoCFRv9WM1krx32MmHf9ncfwhFZBv2ycmh4TSZEww5W9hRX6dJKdY",
  "key25": "5VfpujfWZkRaejjocb1BdxJwSdnqLR7uiFSxVimX6mkGFu8gDKnQLwrmVH1iy1BrDhKV6nvbmEfrVtq4ckX3trf8",
  "key26": "3bsABPHrsq8pxfLaB3Ej1P57pN7VjVbtmRABbhrHpoQzPt3JgnKn1vSU1xb1GRjpcKmHgg5B5ijD3SPU3oiabiyD",
  "key27": "2woWfbJ76bTkojSK4yMGZETdjS4hbQZHuuK695ZPJc1npQyk1iUUkdx7cxBzFdtUofYGVR9LfrsJSs3wEw8NKhwN",
  "key28": "28oDF5LYRAgyzksUZK6mTPwfLBcpjVCii2NqQ1i7KGz3oU1W5cT1MrSiGgD3vAfHwE6sN1JzKNKz9J7gSHoabzTB",
  "key29": "4aZYTKGaPcfmkoi4r1YfQnXZk4u6DJJRsAXg8nXXJeLPxcDeXU5NLYmqMjXDNdr8VQJQKmy2DcbGj4xYXRFLCA6g",
  "key30": "2iyhmTht4WBdTPFj6jGno4ccKhfn3L3EWKjdDaPHidE6xVwTFXRxNEswEYUqM4LULaBS79iD3mpk2F9JrgiGctbL",
  "key31": "o3rP6K5wz79jioX4T8aZugJHccKg8NFmD64Y7i3mhNVTPEd3HHcTjSEj9ZFo8kJCwRdWP6S2ifHMzAKoeQxkPka",
  "key32": "2UrPhifm2UBNH1CBNaNknX6zXm2xpWpE6G6r92oqSvpMgpQnzAvb6Rz4r9mHfm45WiJfVS8wrMwiqe6cYcwAJoBG",
  "key33": "4inCrVzNnUWZrNfg9ct3B1uh2XFUnFiQoaVmcU4qgZ8BsLxSHjAphsXQ4wLmu5pE5hZtNvwCHjs5qPpUoKK1xo9F",
  "key34": "3FKcojG8ZRNkZq5oTr6u2AXmbk4vqiSMTRVec2qjtavEEpXru36Sv31Vcopn42fDfMGwBDvM8fEMS2qCQcmKUwto",
  "key35": "3QdyfBb2Ds2BqCzicn7sTXmxkWKZJs4eqESmLuFWjDResaexwG4wXSBSPFdPXeMY1Gb6JMTS5n28qJcY6JoZk25n",
  "key36": "4EKbZv2RzJ2YSdSZoFmmP3NwxE4ALWNuQKGrGkFJ47hRJQf3aRsieVfjw5YRzty3pWNgapGDAFFunrEWGBJMcXtZ",
  "key37": "5nWRr7uX4Z1sJrwVSQNpJxp2TJtCZ4igJQHffh96wG2v95nhpMVEzzHASPQdmZ6uqBkvV5fDDiXoGNJfcdYq6C8b",
  "key38": "4nSvGv131Wf7zY4ovbR1noSiHxkCuAWMAKXvKMpt2hEz6KQ3r5CvQWdMMm1WEXERXDskMsHxpUcTZG42J9zj4d5t",
  "key39": "4BRoav2fPMMW36GpeQzYH2BTQBVuyFBCnYwReL8SfJFipunLZWVrPbnfsZze75JxhYrWw1FivJCxDstN6z4QU7Yz",
  "key40": "5XC586schqLABWsybvWirZBPoowMtYQoqmvEDAUULjEG3upcCs1cn55k4NxqWR8FmHxT32L9AdVMPZeu6RPjXmbL",
  "key41": "4ruAQGaG7rezidk3u2s53hoZyr9tdLNnNFkMkfrkzk8rviqyJa8Yc4QhSZ2XBT4Mqz76SqBNYiHsPTBiHwWJx4Rc",
  "key42": "4KxpqAzozHySmBvnssPXaMLAHkyAUxCtGSTzFi9smcH6pCgfusMDCAagHSVYmDJ6z9Thj958TfQZX7USKgaqFcwZ",
  "key43": "4kqLVwgVaR91CosipUWUhabbFxCmMsYfaENATxEeeeMVbrWuB4b6CLRoU2gC8Zzxd5DXrq2rbabUs3Dnknt5bW11",
  "key44": "4PMEwfNzjaZRjiPfQKABkiXEAMPuku1tLy8o4urLF8dH4LrpcQreMKrBtgbtgT4SaP635nLCVFHAAgNdeRZHxQG6",
  "key45": "2ZYiLuiAXdVMvYNd1d5zKrbP1VBy77qfyRagBietJdxk7S8v7Kpn34KVYjheBsNMmAhCLUrdhQKiRzCeFfKGBb2r",
  "key46": "2rUMXpw7K4LYdQ2RKnEGddrNfoWUgMStK4uHSzeRCjj7Qm7tyFUGduPy346YELhUbYJicBPCZpDYRZKFm45fT8v6",
  "key47": "3D5Ugxonk55KJ8T8Dtma9HsKnFnxfZbcufF8qquJnq57NY2bACWrESNw9NXYiVMiW7gnUKjaoH5jo5EyobsGQfEu",
  "key48": "2YD1S4zMa8swrSMkS2sB6KNUmCqktVE6geomwcMCcCVJtXygN87ZuJd8JmXoJTz38gBbLaHnSLoPXoJHqa6PrsQr",
  "key49": "2GRRymFph7vrFS39V7x812YZGrawZLxgGU3FXupuD47i7AaDAqXrmeVjghpTJoJ9WJT8csr6gtKN4auTQ8b4KxgZ"
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
