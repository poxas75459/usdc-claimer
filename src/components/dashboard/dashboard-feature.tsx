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
    "2h21RbT2gvEz8sFfp4KcpDXQJoH5MH3BXFKMNvKspWPTY6BdP4KnYv6p2bXVJdTV3eqfp5aPuwfcJCUT1uSKRUDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCdP7x7NQVJ569fhtTe5sUXcxUTrBwknJAHvcHDtJQjofC36NQJLnWYe6cjZyJed8FkVHEun2EuKCsQfnymvXdT",
  "key1": "4xEngNK6vJMF25uaGfiGfejVXkq2x13MSHH6aQeXkkosTxf2uzEWU7JmtAstHuMPjREr5YWtgFtALiuxoduFvBwG",
  "key2": "2QgNoF8VNuZqjmQroY6Crh3y1ioJa6jvJYJjyfxs8QKeKSKLPgvD7aUeswwBhST2NDLfHriCXqPTAFcXHRvKsygP",
  "key3": "myWzVwcjEpGAcgNBcR21tftV4nTTjMdXL2QMgyWHPwNK9NSXowJh44toiEgTxRpus3CSjZG2bzqSSs278ZX56VU",
  "key4": "54HUU9LwVq29jqDmKd1S5rZ85Mjh9TcKG8yXL4VCVRMNPhGe8sWX3vZEis9vv6Yedv5dEB2fBzPradgEfJfjpoaB",
  "key5": "3udxyoF1N4wYqV4KYakRDHY4YkW2n1fJZTL1QwuVacQAkr7J6m8Ev9FcTYcvjTgCPiUkYMP4Pi2pseiXCnuAgwm4",
  "key6": "2aPiyJ4iJdm3jJtPN7JWKwPcnkFhw4VdjWSMTRBRaFTbtNCm79yCHy9TCeMn4dvZAcvaW6LiyhcTrPamJMsTMWH6",
  "key7": "2XP3RRQiqm5zWPCXojh7h5StZN8zoJfFW8FxTWNXhNpcxsxXucEwxzGxTr1ZbJ4CncYgPkTsAg5D9tLihzcGnEyP",
  "key8": "3atZc72mj7Q484Pj5U7sDtPUSuunUo4nbsUFgcR6C97TkLXMSK6NiZC9hDLPPAsfkW52nb667CDfFeULVt63FFsx",
  "key9": "3PEL39xLGBpFqCZBx2cXx4dBPP18uQbKnDM9iKEox9ymT4zh1iky4h8SPS7r95DJPkxWFCRzkzHwsoqRVpguwECm",
  "key10": "2vy7yuqpSC2kMEvKPxRYxf55URB7X4zoJGCqnmyHE2wZcmU1a255NbAKhCFRxbDGCpZDK1d9WVNYAxUaFPZJMWNE",
  "key11": "3Dft3YiARRdhcXuR3ZBhhU6FZ7yuSGY5HxBU5MfjBKZtKGh86v6fSVn2B5TmpcHpfsrzF31ZmLiaqu3Ph2MTGBUL",
  "key12": "5C5Mu8PoPYt64gM2sx9eVGnvsGF5syyPDE3MmQmzs3Dyb9bDXHjoVcmYE44WsT1BEpUn5u4h8br7DQK6d2GZ1G7a",
  "key13": "x5c5j5LzSz7e5uNfgFCDwu7etrE34PPLSD4seNGs1psKCn9SPggHe7MD6BYd6GVfkeFHSaig3LF9KzjpQDk7Skc",
  "key14": "2weHzpTN5RBXUqAmk6qbEi8UpqJg1sC86aQkph3KY97A5Y9txk1c5xsRTSzS6CqmT8sSk95btGB1tZ6tNXgtWqcs",
  "key15": "44E8uwEAAAn8YAjauZokA4D6f55TkKvGndBjRynCPRrRScKH3KHHk7scUyG3eGYWX47wHVZzKfyHr7dcyoVkNPXw",
  "key16": "597VEuGcTkNvawoCuwJ8vNwK4Ro9bAdHE156iJ1aHModvqTTvKeo7gj9FpdiZmSDBDmwNGdUQRNr7q3dqVyBaHTS",
  "key17": "5JT7TLeqigWTjXbg45N48mDv92UoxZeBAZ9Cg4iMc34q6ZL67mseNMhnSP17pgwLtQvXWq4X6M99NhAWKFewNgWf",
  "key18": "32VpjRMATcvQ5X6hgUUoLUD3wXyvYeK5eWjrZ9G7jj6HvRo83P6jFHKiJPWRf4gyuPtde6md5cQawLtZkpeXNcnr",
  "key19": "4WnUKz8EyrxfCC2j3v46Ms61VfSKA3jrSsxV5DZQZZuyqC6JiXRsG9yRLX7tbT6SCdSgDH9ngbicXDC6ri7rMfpp",
  "key20": "4ouVi7xi3rj3Wi6SDEr7JhTLcsntqutNJMzfQVc2UzTGZFU3RX6ypfmjGhS64vwvDHc5UqE7mxsVcDjW67QH3ce7",
  "key21": "2dMSp2PS5YP1wUz8iAXcHCiM6J3FTYUgUNuAiw1vz8NaxDWZvN3p6GVJA5tANHUPC2BhKMpU3Ls8pMDPxQvmmGw8",
  "key22": "UMoUzWnC4sMgmCUZJhoWryQx5W6zVE3mGqrG8fSeKF5arqof2q8dvVVEXiH146BtfWAhoU5n8if5QdeY7vDr4Kq",
  "key23": "5d52Ndu5NoRXcRMtow8ENpnGfoFh7uuGuzMjpYJwC58B4Qs3NZZRAqmEU73mpg72o97bumvw7cZJDDbn12F1uYqQ",
  "key24": "5SyhKSMccejNC6kKj9DU4Ja4UScej15YsFBps6A5544P5euh9sQZEqqWnDKBrekkT8ou2cbmVMcdFscj3Hxt3Hwb",
  "key25": "4eQMm6ZTwCgpmwquMNpJxjPTqzhqXHYrs8w1gjJpXPuuMvBG8xGGnceP7r9cPEGSvyMuZgrMV5yBuc68UD21gZxz",
  "key26": "4i4PQTkhUq2tS4YM2MRyxfa3fXSewQQtKoF1VGhRuTG8i8grgaPxA99utozAx92xuKpMJ4FZmAp7TapKm2z7V2Nu",
  "key27": "4g54HQq8ZySoTDqHDHUXUgBeChTMQ6f6BGLZhU1NF6YwdRab8dWVJFXJcWwraaee1bvdQPidNJTS4BAXLedtCvoL",
  "key28": "4aZf9WjYRWxH3qaoUN9dDeH9aAe5UK2D2ntBL1FRL7ptG9qo5FWCa7qEwLfXeCfaKbcgmnToM7rsE6YoLVVmcrxE",
  "key29": "2dBd6p7FDGmZ4DumKG6YDaTbo5JgpB8n8tycak1bj6jSt8xLBPnnp8UfvHa4smyLJDkmKHyBrfhimV6bELTrHzMk",
  "key30": "4M7Ct1vrkJ23QeZAkLgJjiSuWfH6NCQ8a5ZE4u5f5hbxkWqVazkZ1gH9u9TSjCkS66xHkVxmXm5Tsn8rMoiVYT2X",
  "key31": "4aPoBjC9Ek7iobYRfWDqfqvV77Uidu4FPWDTf35UfqrmF4R9kdntBQxtGK4gZGxCqcYGZa8ZbKLrHW8YN58LVj2k",
  "key32": "5XVboC68HzvPhJuLrRneUxkTqLVyNqMssxjp9AhAZfWAMsW3EKwfS5hgPSx23U4e2guoinPVHKHJFjhgsz85FCfP",
  "key33": "443ByWeMHFifFJbYHtnnaX5fUNGNwHT6H6r7k2ZNJspy5eT7m6rwo8z6mQpUJD5pAGx3E7TTV5vpGmnTUykinM8k",
  "key34": "5whqyKsPYMsDpkPbkeyKQbzWmYjbn9Zi3RsXLCuPcvTC3LPLF2ryjUxxYury1Nz9iVv69dL2qRoQXPJQRpfvJm83",
  "key35": "gb3mvcjFiWFcMmJ6ksWQ6Dx8kkuhGu1ChJJagD4G4h8uEpQUsg4DyBx56vgaJpS2Gdrr4iofoJ54NHTengKNUB4",
  "key36": "4Hbo5jHSnTEi4mkRrqtXPHHPmwD5nEcwErheMSS1S99QGBeSsamAYQerCroH7Y3XycqR4nhtiWEyb8KQd3uCRuAM",
  "key37": "37K2XR3AjiYvPUX8m9pRmA3ibVsKdp3bJHk2M2HBP36iypx3aymAVyb1sLb4uNY9jJM3tr7A1aaCQJvkm38Mt9Aa",
  "key38": "4b22CiZMYVzkx5pGNJ4vQiZvSZfzJB4yFEsje7iezEMVZCe6YA38jNwTjJRt6JETzYuGP9Kixv89nShJRQBvhqiX",
  "key39": "5eMmbTCRjEL6ivDaXLguojpJGauEA9P7MabkQWXja3aBGFmnxJq4Y1QEwaRYM5onPBPXXZQRutRCvEzkjFHdipq3",
  "key40": "2gozaL84kNJ9YtuYfrKs6k2D4f2WipLoTSA7GC6P4QaYeMyAMuNUnsVer54YaUsXYfPh1AL4PJEjYDjpSsoEjF1c",
  "key41": "2uspKsTUvBjpfpyeQ8jb6iLyhQrwK4CiymK48FYApUA2WmivrUNNKbYJDoLkE3iQF9t6Bz85oiB39v1Xg3S8mdD8",
  "key42": "2BWkapLD6cgjBBCSSgbWD63UzGFwQZP5wFVk4Z3gkudcNzUUcDyqUSEEQ1ZPQtf4EzyGaWpK993MgMPscTkwx1mH",
  "key43": "66YQnHEkKfJbYQtwLMGmT6wv4VhqWVdU9LS2d2Ta1H6hbQYTHwzytJn87Pr9chTK8Y2SN4JJR3HbHmpnE9iEqJJD",
  "key44": "29uR1myZCH4nfGNTFTZ9CTJZm6Q8Ys4w2QBpBroKGj5kf1e1FQ1qa11GC3w9zaXtNcL9DydpN4nA3kzjA4KAD72Q"
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
