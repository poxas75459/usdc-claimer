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
    "3uFU79vV9fr7hnCsmTS5uH47EnnHMhvftWBTu75BJC1F3R2VQKknPAb4UdxFgSsJZVV9LJawEaQybtN75MyacHKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54czUXQnnZ6yVPkNbdYa7xhJUgr7McWDoLsugXGkkyqov6tAD45G3zbtTzdnTBrwfQ4eouCFX5wH7wBZtcHQgPCq",
  "key1": "Afq2Pr12a5iAvnbAYXVTaBzwyARnyvahaJk4h6D5G13rM7Dnqff5v5cT5yC4RYribSZDQ55dmKkDZXY1Xb2pw1s",
  "key2": "2MRwKFwdytMUdNK9oBwcsnVuwTifhgSVbuYDdK4TpEtZYocetsVkdNoBjZhJKJQq3TuE39DNooci4ZwrJh2NVNuV",
  "key3": "4dWgDjXAnYGPBtsekXRAVH56sBq7nXrNHogdPs8FNwUCPcBrDYHudg9KMJtE4E8SN3AQMnKajc4EKpLgYGeo4fJM",
  "key4": "2hbqx759WhXB9hcDKmXRKNmg4XPApmxBY7BxdbJoHV5eBdYDqKE7z2YVWHZMJESh6H8xAr6zXRjA9U3mY9vWyna3",
  "key5": "4Eaa9i9yp2kexKfQKSqvkG8tEhDviRkXkYXkGWVQ54fKxkoKNYNPUfSxwJ3gEpVbESJu7fLk8sT7mgBtnP33KJyX",
  "key6": "547375nkNu3pQuTkFsoh6oura4W6P4epEuaUZskbmcqBBinmopydsDrtDeUC4ZHHfSh9DcwBHYTDbMWZkrCcLqnp",
  "key7": "2gj9PankHwRc2xaR1erwAgJ7pfVQfdoo5QnFNj9dpCVfLByRY5pkh6qQ6Fkkk8Mi8ifkJ29ZdT36rJuVtg5NEw7R",
  "key8": "57exx6exsq9sCwPoEuqvvi9dijNmAJnmmBj9t2K3krzwveLLUAfcchWfdpqCHi8DJfRFQv7qfrjpuqcWkJRZncBu",
  "key9": "u56YSUYUofadvoWiYuNzVgJqZ9gquRhuZGocCmK8q76tg217Pd3xYEJEyRhMihW2MifMtRYL74UYze2NxsAdUCP",
  "key10": "4wDnwpNaJunnWoYuCXNCfW1fbtH2YD2fjZ9d36WKsH41NbAjYfVm3b2HueFxtMtyap6xLEu9uankvwrBM63RodZx",
  "key11": "vjxrYcCbJDHKkQ9tMLsvBxmCvR8spUZb1NJKj9cm35jYgVSwHMwAevWosxCh7MtWttVDD6TWfi3kCqJVSofVbEn",
  "key12": "2qif6u9yEyn46QiZXpVVLc4JzztdHEzfMXqTFnYFwrrLjrtaDwD1HV2StK1wGDhdcDx1dA4QCBPNgAABTz9dKJ6o",
  "key13": "4fztihzAy5P15mA2jAinFGBbCN4TfWzFdpG5tYKdUW6NXVihxMsDauZYQXZFFGd63Q9ozToUL3aMGc5B6D2nT8EK",
  "key14": "53bdv2q7HpoyqxhGAPjhFL38PoNbzkEbVq1tzek7S377VA8QGbqd6rFWV79SsJCutTMxjenXmrtngJQQR71Jwj6i",
  "key15": "hWGVXC99MvDLfwJJRaisENAXsRQj6G9ZCHvdmaAj5Uqu5tskoQpGAufgMikxrm25jmYs3j2puBRBh7KMvD3G9Xy",
  "key16": "4rfB2GkLpJsVXKu848PDVbit1BQioxoezNeve2ftnvPCtzS6YR313ytjWg6aceSVchfEvQfTy4oDsQ3oS4ZuEWPG",
  "key17": "5c1o6SySLGKN4wpFL1fm46GSe1ABABynKiSnzFTnQvMgRjwFz1qBaumz7Z1TfWmdipuFVqiU1ZnfaS4AwUGaBMYa",
  "key18": "5C3CbJoYcXBxewXgakBJeAmg3kv36dcevpvFwXbmd4vD36d8vwppiiCX6sJvGdnn5aJUYGLnaD1zrXGgkT9wA49y",
  "key19": "3Dm7pmkuPDRRbNSqkjKJCQTqVNbSv8Az6snKPRcYfAv8iLCiXJpi42RnzJYMkqYFMEvoVtUxxjc7nbxV9QSe1Yhe",
  "key20": "2BvxdbZz1EjfEwVeGMpchu7a62tRrqtxZUefgzoCmjDtek2pmtYQLR8i1vqk5w9b5WYHCY7FT54xgzpXNXYsJakm",
  "key21": "5PERzP4mdW1jNBvXoU1VThDQqdQJDwQifzt78hkL1U4QFQmSdRXXomjFzyUB7UQEK9GKQrL5PhHbHpZBVRqtjhyR",
  "key22": "3V1TutuiZabCm1S2Z2UuBuUs8RWBJFpYUSJXzWjQurvSMzub3xT2BLAfvrV8YWAG8btMLSKz1RTDoj9pdKFUK6dg",
  "key23": "28VS2v7GPeYZ8ZaZi6ZyR6RC9eQsZ8YUpKpbzvPg7u1Gi7uiQcRa4weneFsfGbaKwp1ZLbGEjEjKqvAwZce75K9B",
  "key24": "4gNssv5fAN1JNYJiJZPc9eJB46F9557TEW7K48aPqbXkgd31gRAEHXJTkQhKKERLrEtKJBLqVREFvJZVoKRkBB2a",
  "key25": "669HXSpxTRZnXT9MvhWVFzENKGrbcYuz7ZuLmjdHuQxTv38FsoufFA8hYcxvnmb4zjh25SdMXBfkmY1cWs6RfneC",
  "key26": "3jgEQeKXv4LeLEBMmq7XjKbghLsYPJXWF6RnLwtDkCzt1rP3ppSVDVzeDWXvGmEmzDNzfokXB17866ZjDSjUph6V",
  "key27": "5kjJiqPYqNrYFSN8DH8qAJhvb3T29ZD7pHAqCCbMCkizwESzwcMZyVnbPs2eExqdwMncqemxxhBG7DwdH9WkS2YY",
  "key28": "51jx4Wkvm82RcWUgU6EFTYEBQ8W5qwu9YGUgREWUuy4XzHRAg7A4EUJZe6HfHojsidBnr6woknwuUR7RdDqXiXes",
  "key29": "3NkUqBoeAZbqiBx88TioGUGSobCtYshHZb7kY62hPQxyJmC2mccC5Z4faeSCqKGmaeWaVRy3am8nRdpBetcBpp1x",
  "key30": "3wobre8aKMPkssRXv4NSstmyzGfK3q8WtrgfKSTw3saz3sh8hrnBsnf4k7RMnUBynWqgyC48DQP8qdU7j56pxnKo",
  "key31": "hkAtBXsFT1EDcwFTWJUati7jBn6x5DaT4NXqHwi7VDehqwvdLZESjGrEMck8dzhG1KfqDQaX41esoA3hnmzpM63",
  "key32": "4qzJJtJxRLW2uTAh3MqQ2YvCMC88FNnj2CoLrJcYfS5KSupcNSGVEjV3JAuoKMaFfwx6HECGrNkjT2LSVkRYFGAZ",
  "key33": "3yAMyV4YFhAF5iR36ocucvXtJxanoCx3Yn3GZRwhsnJ3At5ffViGRenHvfcHJ8rTyEhXKaGDQXUavCEkfsMHTZ7x",
  "key34": "21CNFh3ueEd4RBziDCsqXcs6ymdxD8s2wMJWrmsgmgtUwwtHdEzkpeLardM5CAK1CS2VHzaQ8E8YEUNHorfpk4ii",
  "key35": "V7r88njnc8nNabuZwrsk1AVTv8uuP8X47k4U9F2MMZTS1UqPMxoSowm91okMhtgYe47MpVU96XpS3phyjRALko6",
  "key36": "5Uv4r2yNZCoAf9VV4pThoKyJJ6fC6bBZA82oW4hKF2vhrqZnereT39Pt1iPnrQHZGyCpweQGkJgc6mQGUL9cJHCu",
  "key37": "52EUgM6xp9oUPShCx5NWrePAf2ELGayRnvCeHqZsFb6FqtnsqFgw3FTGXUt3d8ZBLrzKW862FPJwHBAk1xpnjT1o",
  "key38": "3SyYAgJhAXNaUTwtFMns73ZL97dXY7J14B7bGuEjwSqouLLYjwvTb1yFHXmRCJbiNfwzQmneTDZQyFR8eiCQASBx",
  "key39": "2WLpkn9jmQDrGTe8vfG8A52EDkqJriZbgNLzjfem1UCAv7kPJRKzUfJC5jsrRFySw7YMEkQGGBd1KKwFxMXtKvKt",
  "key40": "51E5AduRsxwdTZv87ciSAcdvU6bd441NKVoXca52T7BhPLa4hCDQci8t8f6ScVCJQuKMRv7amsGu49uDVZfeKgFB",
  "key41": "4LuALxMLxP6yTXAgTTcuQAn5HLxs31SHZKpoP4zyRhXe3ehqg2K9sX52vdJmX2tS46PxkuHDfZwFDdWs7eYse2D3",
  "key42": "3qHQvXVVqFaPEpVM5BcdM7LWw49ZphuNCZZKZTc7zAyrGh58tHA3ArcDpdrnJADnBykshN4AEGGcVLZm4RnGHiLk",
  "key43": "4k77TyGFaYCswAsYEyr8XC4SjPaoWRZhQHZgTaxDMGX7UHRoKc6vKETGhAPyfm1PCgDVVGiqDkXnC9cyk4UcKD5n",
  "key44": "2TooULGzSNjJ5vRd5djGLxkFN89x1k1nEnLHpD7YjV7RbNQByk8RULzCZT2EL7LP3y2EmJdg638qDivU6rZ7zYHZ",
  "key45": "23M5Ys45pChSgqj2G15BXScsDXdi9Ydqq73wKpZKb3jVC6gpufRaFffvf9axSGasCSLsnmFdz9iQBJJWGbNqmR7j",
  "key46": "3WG2mXuxEfZW9g7ievSZPu2EUZby36wfazy6WmSvhN4MwNDFXfWayDjDFoFfJeoUi6VtxYLWN3G7qapVXG41ngbx",
  "key47": "5dwDmvBrHaS8ACqHmXda1fbV7rJR7GsmkFS8QNW38SheHpSEUynKKBJonkXs9gW2Uru9AxogUWz9h5k5PihCihtG"
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
