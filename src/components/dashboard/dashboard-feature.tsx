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
    "2BrwzMkdw43AQ9VVj4ZqXDC8qvdWNTqM8DoAu79SMcSy9BoUHPoeNszaxr5She2EBdDcnwfL4HhLu8msibdjF7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5snbp6pqRoAtMnNMmdgGMsKuVwmyfQwwmDev6oHEAmqUyZjm9N3z7qW2ssquVLq7L3rpLZ3JqFNZ1azjmPK2G3YV",
  "key1": "2PioLqWL6kQTuM5gi9Swez7WmWhB2uBgBmWViXZaFLaF2uZ4Un7QyJ7PpNBTvhtQ5rKYjBQPVPH2XMaW7zahvDC8",
  "key2": "5eFJAMKxC8TCR8PDCW14E8XkZK7HCfJk9QF1d5yKMz4QxtiGUirf5zrU9vvj8WDWy93WBsu46miVyrKDcAZV6WkT",
  "key3": "4KFxggxVKFvHZpmYB8VcoQozondx8av8Qtw2oBLjTLhpEPXMbtfJSVJG6GMe2cjuAw8Cn1nhsUz2kphVH3RT9v3k",
  "key4": "2NqvyNnqfLGbCL46gofg8qrqpBC8kH9ck6UY3fWojRCHeUvvh9SKdtTUHCTgkXHJpMFUuQkbaZnsSSCRjj4RNLdC",
  "key5": "5gmpB1n8KMzNgHuDFBupmEPRXuefdCursEvU9sUUv6Y6h3UKanVyNdNCAWyG5xS6F3ZtC4MVUAWqL6PzVqYrNpju",
  "key6": "23TxeL47cNzB8xhpsMUB46H8gDnGGx2XeRv6YGUWBmjVAKuLxHeofxNwRsJbxXTGL9oUNjFe93vrj9R8nWKHecSq",
  "key7": "28t2ChAmWWFURdk6ESYX4c9g8AoYKqV7s73Gk3RFUsT51fH7AREbDX5SFkCNgfqtFf7zMgXHTyjFgepToSR1dJDS",
  "key8": "3UvRyAZDU35sJc7GShjcdxpkHuK9ePwbzRd7qmChgYuUXXEmZDmUDBoYCRf5aub6zooWmteFWGTr4bdPT5Cjzo4R",
  "key9": "hGotPJujLbK3jj1ychZpCbfnXdAbcf2cngfDWSacB2Z9PeHXXghKF4zq4jHJZHE32upq5UCTGrTMVRR5kFbadxZ",
  "key10": "5hMWje1VoFJq6Mddk2qnL51gYx5hntt9cQA6dgo1et6honnguK8nxnaXWpWZ2WzpcZxypfqDvi4o6cKmojiGPMqR",
  "key11": "RDbXi2BuefUwAVZa1Vg2Nr9mBFQ6f13KeQ6NWQfe23jGjdb8fGwo79xtgUZaFzVbZEqybiaotwGEXgDcbS8W4ud",
  "key12": "4UPfrFk2jZT3Hq9NcmuChfxyCZeFApTbLhbj5by7LiQHrC9C6mqdLdLggjrRgjQpdWUqUnca4SqvhovQBWXjJJf3",
  "key13": "aDrbFtGE5Z7GYZhsM5LngdqEVARjNPHFuTSAbyHxuu5fvMdErPRE6EGuTfUuL8uzY3oqo1yXmbdQMj8x6VJgzFs",
  "key14": "4W8tNstSvYjXp1bB6MPD74UrbuP2TXPoVvTwx3VE9Ms9FPFg6LSfnQsHoTFTPzJvJfns4orDPueRiBo1Uk77NF1D",
  "key15": "kPEvrN2RDwFHTaN1w1Rs3F2JwVFskkE3aDMmFPBsqBQfpaQ2HQgtYn5NuY85dC5RRD6xTKGS2jTeTxAjTZM1D2P",
  "key16": "2vR4gdaN8z4HXGNnydAVCmuAMBvaDog3SNeDoXt9pVQiYC1w8JvYqJxdtXSap8HqrJsGXKEYQPx7tkES4urpaBVb",
  "key17": "4vGEqbKjrZHavMEtvzyeM14GnNDrxecgALXvVz6R5wBZvbna1tKZH8r3DmGU3yr6aPbBPFRyQo7QzxA9GsdbPewh",
  "key18": "3oqXRPJShjsf2HxiyZyrdSow56NokKnYrAx6JZcCuZsRg3EetPkdf9Vp7wYfDVmms94TJ5i2i15Qbt2L1zxp49pG",
  "key19": "3GAv2vCWTXk3gDWpoADGVPw5fn6zTj4jJYuwXVnuHudK8T1ZszyX48ZRSCSktXi9hKUPdrYJgpxzK4FjewVozoZ6",
  "key20": "3dFuEs7jrXCq4A6CivfDzJZo1TEyiAuCuW2kEPZ6hJCJYG6isMjZ4sEKJxzfzYDFx5c9TvyGd8234xJBCuQsbiWb",
  "key21": "3t4zvKX7FNuJc3KnfcDBWUB7DeFdgF481fahFhxZxyBX7BunLv6zs7wRqKCMGC3tzxhcMdeiBuxBw76EJJ8aWVu1",
  "key22": "42iFewXN1D18SYY5YhZrVu3f3KWQmnwSj4ubWBJGaAJGoGbNE4GENEh2aPnYxRKyDoMpw8X3TYmV489yvFQew3pn",
  "key23": "twVibSLErcTfWbTa3KxiGoUrccuSZmAH1P1wSSETEK4nwqaQ3juYm66tMa53YU9jHQpL4a91PMdgJgbhLyYavQJ",
  "key24": "52nCqchNntjdDrKEycVaqNwF4wVfneQ9WfTTECGeY94iHHm6T4gk5JADDVNT341QMjuTEv56G9ZciWjAVS45sPsM",
  "key25": "2qG55Xt71gPyrzXcQBpaiH8G158z8T6b8Z5drBpNC7hCAAQXg4GCXYxVqvTywomSpC3hezU5wZRCH7nVYqLBJ791",
  "key26": "32BXv3bBRFHiyxdkYfXAMaWhTSKjeEadXxa5UvfsBssTtw7bPtt1XVHQr1MTyXJCjce5dwSoGDDhccMffxiwPUcj",
  "key27": "xSHkZRfVLujVc5j9ACQJbvv1Uaon2CFs9VqXK3Y2X4dtDPwSyvAWjsWHymdPCXJS6qGPSNM6UGMkyQd8hb9sacs",
  "key28": "uwXLEuNzknvTUN9Wn3RZzBuFPRNxuYYVhdsQT8JAm5shj23nHMYvvxsvPgQucKEqTP5dvz8Qw7NWSCtvk9Wyy8j",
  "key29": "3nBmNc35dERBce8nb35MXJq1T865LyeFQjsv92GmadgitXcmj6p866j1UBE6Yhd2vs3CgKK8a9LCEUGzoy5JBKxM",
  "key30": "35zS4prVx4AjG4m38QkMHkAgTkiWF3WTMViBUppJbBAN68SrYfeSTFw4df5HuntNEC1mNWYV2MwBC3THAJGRFNbC",
  "key31": "3aua7rPAp61qqbgpsnZzmoaGfhSjhUx7Ux2p4X27sKHND6Eph4pDWmkCaT3eKhyeyzthnYhDtiwUHaggCbc8SnbU",
  "key32": "51Lk3zjPLZ2D28bxjq4rGLtwaQ5UCeTsmCv52jVPxWJ2jT4set2PYHJ54NhsyfErsFc7j9nFLVhvgPmqBZR1qkEv",
  "key33": "3f51Ci2smBVcAKzCVLJW9wQ7594XcwqWm2KH7bM7GZt9dShvQpppsa77G4icAdMmMQ2mhQCWS5Mi6zXQ8E5vkcBr",
  "key34": "5Sc2Y5HjSN7WKbh6oPWpGWPA8vrwEPbeLc7q9C4T3nGtqEvacfxsc49PoVww5Ui4Vcram9J2yjy5wABewsqx2a2s",
  "key35": "5428pUkDwdcHy9Anxq5EKYNSHQ14dBMuwAXgU1VsBjZTRj67JBwYVEpKspPzD3Ks1wJod1zpeHTe8BqLuVVs5KqT",
  "key36": "2eyt1ZdLYjgvU36JW2aQ1BWCeSurXhDTzpMdJ2X85ADzY6hDDEuqJSLJZ3DX6E9x5DXRU89xF1stGxevE4L28wgS",
  "key37": "57197XZZekBqrTpycsx54r9KKFCRKMs9KjSQGnBkbPG6EPC8ehsVA3N9SZiwiCEq5GDAtA5xkoxDTgToyWC4GCtN",
  "key38": "ELzCc92Sp3QWT7D2Sf8H882THvkuNK64oyZRJC5SZFa6iVg5g8KjhyfuyyWPGFjJ6Syg2tZUYEeDm19LEZqyCzj",
  "key39": "3z1v8BDGxtvbJCgshCaV1btwyWF1eRqqHZ62r1zqFEoyWgeCjuouJgFMB7UdGQmTZSJsjZWcyuoeTRxwc9wtHZKm",
  "key40": "2JUSoLVSohdHw4Em6qsAPp8jy6pSLT8Lz2NwCkv7uMhvq7mAasYSz1EtfdZXrnEHoSeHG2mByrSFi4GPaJWsi4W8"
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
