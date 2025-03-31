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
    "2TTWerivfehyM3D7BXF9N2DZBurxPCDCM2ZUD2fwqCYr8S5xzN3gm2jZpnaoYbetJw4gv5WGhKY9TpGtJQip6bCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zk1bjSJBFuPo2s5XwxczjRt1mgqCWfbcCqSuRXUnu2q2ubQFTRkmNtgNcmGgrHtprxR3zXboB4TVVeJYf8nmQrX",
  "key1": "48HgNLozgp8WmUnCqqBpY97Tr5PAuKqB45kQpFctkTSzzrqx2TenQYvD1zVQJwrKyGGs9ajZ7WU2dSBkgfmUbXCi",
  "key2": "3cb8gteaNKEowjCfRECQWM4tmWZgxguaWzbd8nNrG5tsPb8tF1oi6qQfVBeUFMUXqXSsRn45PT7SXLbYQAeVsVzK",
  "key3": "JbbgpwRReFU7G7svNJdWwuaJ7izvFFTmtPdd8xPC64vaGSDW9X4Bep3Ei3F4swFB517T3Vi4vpWky1jH5a81Gaj",
  "key4": "3CkWSbMmFHAUiMjDrJPc8gjv8NW5XhqbMLDfpnZzqZxd3aH65KY2Tc53SdFuhb2sLUDY62A2z8SZuPZoSX4Jsmib",
  "key5": "5LJGta141MfWQF1SxgfE29MJpHbCky4gpAqQB6EvnaCWXjuJxGGzm4Jcyh7UsUPm7KofFdeMgctmUR1eWuhnputb",
  "key6": "fQuUC6XBrPs6B3VoVSPBtUsiwh369qM6MmtRoazotBMhxKU9wNZD6Kx4iZuR2cGSUXSBMkCtZjxHV7BgE8mBkE4",
  "key7": "5mBnZydSZYZMX5gpN5EHsBpR3mBenuH7bVJZ6P9regiT3gy2LDZkTNwAPEKh8X22apYoGtWpJvQRGx7k5QneRysX",
  "key8": "3uXRFdwGPn67pswrtovXdsKeKDxL9KC3WqgBQH8wvA1gEk6KaN26wr4EN3jAX9Ysezexw4X4chfywDTE9oBV12n4",
  "key9": "cM2rc7wRSs7XNzDd9tawpGjhGbmRYLTYxcNKrzoKLxdrzHrwgKn9zqqnP3XVtA7sc3DTfEbaR1Fr9ASPzqNFh7D",
  "key10": "3c9J13HFZzGTapF3Vp3y9kDtdspxkyUNZc4yhfGrBzBbAoSe1dCHhhuaLd5T5K53btZ4dcNMveKCX9BZkw7ZokTP",
  "key11": "3xkkVmvwLVuCoAEgZe4RQovEQqYsn8Sh4zNj5AUzKTsbhjJJp2ZTbQU23JbSk8e5CDJnFpA8Q5VWP8U86myXY1nh",
  "key12": "2FJMTncTybEDfQ6njn6ARKyjutQFzVMCZHM1a2WWnQQNGAgA2R2rAeU2DtehztGezmyAygpemjqXAfDxAEjtUUP5",
  "key13": "2gQDgaiVkXB1veRLcVnnTau4HFZkiCniH9rC78wsDL41pFyP3LTnTkpwRMwfs13Awwg5dLJzUkYeEG6vBBch53pZ",
  "key14": "4qW92vXJ4JmbNoPEdsy4ZjZedHh8KTvX83MY566buXzqSAgaDJguUyszuDNzVxXwhMbFughQYuPQ2Nfv7vFnYPAg",
  "key15": "2xWy2rmNknUZRzRnVqif168h2DFs8bnutzzLFkVNc9i9s2LwHuNiwSaHsTaVE2SpjdJ4MCJcuz2Y3Hz5mJddLcq2",
  "key16": "5UMcd5yLr2So5za6vnaSCdnSRDtr6wLoJFKHw9rZTfvxzSszDnYfZCXH8Wx1dNGsdQ3QbHheavneUXkW6owWEjDn",
  "key17": "544e5zaAmu8z5AuNAaaQHmvSdsSXo6kYJHQ3fC6PmQHAf7o2EmE48dusizMY15TTHgxmkDBnrLwDE5uXLVQ6YN2W",
  "key18": "5UaBpLwmfCpQ86KxwNsWdb9hGLo6vw7pwob6ZEYwRPLsDKgYyTpavoN1S1CbreCtKDPc3SA3Kjba3EZwm2u6aM5R",
  "key19": "61MMa3upzjGfvbiMTbDjPRMr5rxuCwbxEe7ehCvUVt8r99i8Kj1UYBu9Rrsfu7RfNzZf9GKCZk4Lag9EM3GAGvNj",
  "key20": "61jJX28EHNNKuEVWwv287mD8EGWRjkj12hEtTT9a3LEtRt2PkHBn54vakRuA128kbv5PcouqKMhijQNKXNDfZDuU",
  "key21": "3Sx69AyXj78iRjx1rm3N7j9p4YAzVdcUx2wB4TjbUayw9DXcUunaHFEzLQzg9ogXxYhg1qPPApZ7PHpfU34qZS6g",
  "key22": "4DpGv5s8H8dUf8XGhLf57K7XsejT8QpZHFa9Uw29VTYZLz7oBzbE65TtrscgYF4s5UVKNTTZEhxYVnaAs8ttsLuD",
  "key23": "65tVxmYrXHWnwdezBAz6j7KDJJ7LreTTk2mrPRHWeURpmhrWJs3CpjRzKeGxdAH1Qwk5wn14CzjHnP3fLZdoEZwP",
  "key24": "3Eb1nHQv6ECUXeHUHeJFkswAgEdu99fPG79iU7rhzAhYHhfaa5a1EGpb77HnBgeNgvGyHh98kSKqJVKBKuKZZ2o5",
  "key25": "25hSCzX6HwuLNQDGMwb9nF63Y44SgaW1gK1ciXu4vE879H3qJ6HLTZ3MWyY2qBRuNHoCgnzGaF74DHd2jT1eAWFJ",
  "key26": "54ZGB5z5bMeRd3K5YNCwRSAVNUEryZweq4XQvSVR1jCteDnVdAxUs5wGGVrMgPxw6nNdpbmVqeoVH8AiyHcumm6",
  "key27": "3obU93E8rsKYPecbr4nnawiVZeH44QmJYQ1T73CTnJaAmPXPrHuGy2kjYVdYcwUzL2ZH4LcJHNuNFPfuz8Ewh8om",
  "key28": "55YAi2vUW5epGotkMrDtxxbzm6gBQz2wS8tnXwzGFJhQjTKagSKzEi1N9eZVDmMyfJFmkgFutURdDV9mXETe7vH3",
  "key29": "5xN3UKs5qmMwZjhTLzf2h4Xa8qEos7qv3epTjwgE5h82cjM2S15RXtqmHahpBxQmXvuPit2LMXy6Jxh2rYJNSpLa",
  "key30": "5Sh9H4Hfk4znPqi8Mhjzs5m9RwAtxkeFgNRyRbzGCGi3r9LCupXWhmFtutWqcN27cgKq4A7ppVv8mVWqGDVGrFqG",
  "key31": "H7kbYk5AwCXGJ8GSXQjjMDTMS7UVXY2qT3MD4TRWq6oPELirdvWBhU1FNZGwVM3nSme9vgvtagVy6YTnNxEfQGj",
  "key32": "2Xs5S5yeF6wdfz9GXCkkSLNidZZ1jQ5aVBZ2AUjJB67WQY6nVdvVxQUaJQayZN9MshHHuickwLFwvCUaocBidqFa",
  "key33": "2Zs69WaxcVGrYh1pRzpqd7LavWXS5MVkpmPqng27w4hFo5aSDZk3XomVayL1uNPypfQpJqSbXgJhtzNtDvzf69hz",
  "key34": "3HadNRfyJYCGofB653cbgKpRjzNaHG8qxFTDo9EuSMjUrU8pou5WZ39wufadS1cnLLQcrXZfkCTRjs1ai1jMjSbT",
  "key35": "3v7v9KuykYQAeDmAM53tMJ9sMoDK1GHAL67WC1vH5KFYjqKSUrXRWViAAn5UUG95qtPePK8yoGPiNjqDDCx35ukR",
  "key36": "4JcPbnfUPpc8pEjD9wbK5s7vmppqZ3VGhpxYBgz2PW5jfF6FfC4gH9L6oGZVDVrYUi6ghikRtwKvGiY6WmKafewn",
  "key37": "2vnVYFd512Nrk39GSX9QRsKrdjQL5X22nHxzeCEP7kik7rdBiSwG8YgVzozxmNctiLQkUzLULDWj8q1qGVcXqTWQ",
  "key38": "RfkfGXoU9QQqSvucrLuzJTsVUGQT11JYseqkeKp645KQaME6aQaC7KuJc8WqCZfX1AvEuh9faHQbtjN3Z7kvRPE",
  "key39": "2xz5VhZuCYHnyUaBc5SSG4YTxSZA74pAdULNRvnWRDUtBEfkEmqXVHZ5DtTjWGrhgdzieMc3Z3fobw7ZW4yQStk1",
  "key40": "tbTGC8opvq9J7u7vAd62iJTskyFiAT2ZfNY6M6MLUttkzXdJSGd6KRuixToWWMbNwpF173x3boZrpEenxAFPLg9",
  "key41": "uZqodW3ULQ5FZrjBNdfTVzUy8XnHBQRsBXfzBUUsRQZZgmshjaw2CiECiADnmnoq6EaasggBkPB9D4Lxa6aHPXN",
  "key42": "2hEpsYvAjQgMf2HzAUBQx7iQoLSzmbsptg5jczpqq1jChWNG1MBamAh2c7rdxdfBV6ixFfHgV7KoaRDyq3EbGJKu",
  "key43": "3WhmezC5U8xsVEHyNPBeVFgJJg5zntkXUhfiYDVBtvGzoWZNSqfmHcCSRHmkbQwTgW3wtGsow1LpgKnXK77dq7pD"
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
