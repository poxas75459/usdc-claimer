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
    "1DFhZT9K4UPde8jHsM86iyxU9y4e7voW6Di9s14W6DvtGbbCWzgf48wvyfpFYRWto2LfypJqfV7yLPHEzrsHP2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKr8dMUrr3ByBzUhtYcCvQJ7rnJTx5yCNRM9TXQ8z8y6FScNbRzWF4A6Ujfk3vkGKdcPeSFK9qo94GS88HZLV45",
  "key1": "47k7fCg65JtQtVw6JVGj9juwwfyp3xqPxHGJpWcgRqPKQaXER1mZ34DMNs9LmcwwPgFYL4qNqDAfzk9rYQ6uVFRY",
  "key2": "5e9wEH5YULWknvELHztH9dFLWCw6vrF1v4qeGmZkDZLJmjyUHWRVoX2t5ebRqqb55754zkNDZncNN6ohVBzrDyYf",
  "key3": "3gjvqeL8f1Ag7MhaKM3d1aJzV7LbZFwKfforecZ5MtC6X3yjn9CZrxML8Uo3j4vBvSvDnNi3k7c1bzLGP6j7VoFm",
  "key4": "2oJwrsfFhCt3jR3qwKTAgbAsGyXD2t8AFnkWVQ8c23SnYTmgwkptxV9FuQK5Pg7qjK23yX2F199fq5TRRsWf86AV",
  "key5": "xxnQsBL6av9D2g88tgiDZsbUSp1cr9XpWbkctaYQT6kj72AucNmryZ9FAExUrjzRZSpG912MQzoiiNThZirqBwc",
  "key6": "KztccYVb9ENXdXfvdJxpNzkKgq6wYCAXrA6Cw73HTM2p2svLqYBEqztHV6NerRVzVN59XN7n6sNfzRxKHY9vHUS",
  "key7": "3qFGKaaNqzoUv3G4kaHWbmKB45WCTQ6rykzwW96ZQ6cK8BjdhiCZoeE44vyBUJwBQ6YytHVZyor3s4yNDx7K5TTM",
  "key8": "5KUACbU958YzQkMfA5mRXmZwxVxwTFnUikmiadh2M33So8d8tP9XnMFEehdbtjYGt7iVgQdTBuxfBPh9FWsox8Lz",
  "key9": "vsoYsgrwziku2Qgwj9SRTjEoEGgsvQaZrK69Wr4r96ML4ASVszoiafG79qQmfS5Ehk1PT5HAudYeH1TJui9k9SD",
  "key10": "ndxnJFAgVyN3wVrjusB3BHGY94941xshiFGNLgzA14RkPs9YJBwsnAE9y71ScqSzTk566tY7pMU2G778Ji9VzvP",
  "key11": "Tg7BFFh6MEwagyfxYAvdVKyEZjmsJKeWL1tsX45kbBEFFMtsxPF4qd1nxRy3dXn7P4aLM42eee7rJsoR2bf8Tk2",
  "key12": "2bf79h1ePmACbFdGZ8VfPstTEbjWFiiTsTrqWgvBhgyCLN4PVbLKyXjUoHfTVirMmPEQdGsKXAqkb7dv8xc7SwLL",
  "key13": "cCC35reYVRXXZeKB8SzF4Dhs3ok5EG8dK4eB5cTrmVdXVLijT3NpHonbbfctyoB3nszshYVFQZDEgzbj95YM6Qk",
  "key14": "3EQDJQ2roj4gLJ1HU8KpaJiB2F4Kg9Hp7J86UK2TE8537gSyYHBYkj9eYYRetUSu2jdWdctpBpKdfDbtHQ9wfaUu",
  "key15": "EeQSkxUaL9ovBN2zez8Kj8L1gjqNSVffwL3J5xTdBUHhuz8ehx4VD1RBa84BXWYt1dRbc1cuLoUhygEDWFieGC3",
  "key16": "5b1ehVQrNKjnQgk1wcB2xCVY8UPwGjD32C5MkZsaz8xzhwyMStWeuwk4faAnoLKL3g1cMosizARmmRGpKA6rkMRt",
  "key17": "43zVUYCvK4gpRBfdbfpVMH71Ci1g8MVAJVdiPNcqLkNpqVzfvWiMs3HmfKaYQA1Xp9H2Suki9D3c731YYArkfThx",
  "key18": "3WtakzDH9BEXaZzCWv7s6Dr8arHTiUUjo5NBLY5sNVQ99DeNdYr9zBiGf9w5Ktmp9myeQU4eXApQkEPHXxwZ6947",
  "key19": "48PG4a2eLZAwNkRaH2PVbM7AcEurmrAA6WCnH9N4nbn9o7Nkiwt7wgRKbi7PzqkGq2eBBRvGJ9PNgFNSpSs5zEfZ",
  "key20": "23MWnuPieiVaB44m1cX8fUvwex42roH7gti99e5J1Xk6Kx7RQisfxQq9pb1TUqkJaYbmqV3jPHi5HubrnzrvmGod",
  "key21": "4Cq15toqMUiw5uYT8mxXLcc7ueRXvJ7ixEar6g3CLshhWZWMDkuuzaJwYSaRuaePtfbYMeFyBRQTa5xfr69ZYZuF",
  "key22": "4VRRtW1YghhXZN2BbSYydJT83NqbbJBAa5DrKvRXPT6G5TwamHMc5iP7BWf4QJTNwGQZLFDTm1uwjr8rppVgirsN",
  "key23": "5AH9vccyQAexaaNYHMfoz48aXjtEUH6CAAD96VnQEk6p47aXbSUegdUkzMjSwL3y2gxULdq1GBx14wyn5qxrZkW5",
  "key24": "4coNToeeJaAC2hXT7k9QZXJEJVVkNVimL8qCLKyHkuZqqh61AogLM7aVTdyrZPDandoSFcu2R7bG8x7yigZ3kvzE",
  "key25": "2Z56Kk9s3v6LLwhyYLGNCUbLuH5vsdxkb2tgHNhfeSr5zXuFNB12PVbof73vuWCZYHmyPNsR5ymmwoD9gcb9V8h3",
  "key26": "5rc4chMDvwRcQAGrfSsCEt1X3grcyFinaWRgUAG1Cm3MbE3j6BYir76LJBFx84sT9XZeBuDH55LXB7p1mBZBhgrP",
  "key27": "3gprJFoojwjjrpHYiMdh8YWm9DsLvRgmQH5eNdjKGupTKmwBfDe3bRa6652XEf21viUeVnvWMK9tvvp1kxUKxyyd"
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
