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
    "P9ZjEfsowBXUqcSAtaSd7w6y39gUaufmWRFkDfcbpMSEHEi8A4cZRPNQzFXPdL5vCTuRB3Kasw1LGnD1NSjgfvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TXMBSRJimyjJbrnqq8Rp3HVXcU4pwAUcoZDbXBP3PPKvjm18MiaaHWsNJ9inagGT1pZhNsK2EKbLt4hxTBjHni",
  "key1": "4V4LjUyrc5NbHLkZv54b52RmC28aaZjZgvwLNgmu5qfga1EK2cp49BfN2neuYNVxmDG6MFsxk1DuR2hY6CbhHZmF",
  "key2": "4TdBegx5DXZVqtxTwiTEVTxXG1jHmeonvkpCjXBLpfLNyvAou5u4awHyGJmcMuXrzbB2umH7LNwTZm5C3KqhHfKG",
  "key3": "5gK78XqdZUnDhtncg2xtctZGLYtPmzLTfQkWhf1X7C14gYMethfQJEaJn2AxPeGt4asuVR2vPLUmqSpsCjKPZ8aF",
  "key4": "3PuW9FLNYqyhjPzYUkpZPvJci8xpjtV6dm5dokipxsQtQUKxttwqgiFmYo66Gj48Z6y4sQBin9JzZcNKoXwhEhXF",
  "key5": "AhK9ce5HNhYXXZWTfANjau9b9grBCE93evtpLYJkFRsLDVcoYDNPRiNji2uAt8tNcRCH11Zh8812wQU1xhJKQpp",
  "key6": "4WpZ3f1V7w1uAE8k8bwczbuQ4XMk9GSiDvWCvZZr6upkwk8rrHvynZ1ELs8DFY6s6q7QgC9Dfq498YxkHiXmX3E4",
  "key7": "3N782mBtGpKWs5Q4vMbaJm8CCtYHauLjT7J2nD8sNsqbTB9DeUGeCkeucE8pdE4Hm5KwWcJgKQnRTuq6S3rUrcQT",
  "key8": "5Z5UYyDNpnFvTXKYGygUezG5K8DUwhZg4UPqNY6MLrBvgzgjpqUynvAJcwQ4jq72QmUTRE2yG19TBKwQm4q3cLs6",
  "key9": "hcu6RRA13YL3dSs9oMJWHTQKfUuUUe6edcQVyPzqjkMaCzdDDAQrNGjjFse9xjYeFnQagEK5PVUx1ZffUmBHaAR",
  "key10": "4BGUkLQEt29k5vmeamkiBdCYxMyomjU8azKrtXE3d13Xb9TE61jqZUzNqDh33Em6AYu7vmrjih1EvxsktJoDo8Wj",
  "key11": "4XrneDdTyd5vkxHNcj3uJrfpVLeh9WEzHJszki1aepoJtAEUJg5FmS4uzzbc4VSuck2QEURajo19qfGDXLcU1TAP",
  "key12": "3Fp9Uny1ezdnEDfctvEksk9yjhmbKgewf5cskcY9VTwmBWrgBVMkYtxBkJ4PBwHpSD7CDsAWWj8sDANRn4vHJFFG",
  "key13": "3zeriGivReseryzH1S1MBGQN1PZgnfrcaCX1KNTw1vp6tmPy1F5CdqQC4Sd5Lacc4YC8yrQQ7sVvMUz7vyg49U2t",
  "key14": "2EYPbCq2s2kEjvzE2SpNDgYejWN35i2J8M5cmnsio8VEDmvpeMds9LZxf8DoRWtWC73Mit2Mb9y4sTRo2LmfVpk5",
  "key15": "4XJJ3YdfoJGGS4aarfP6GvzeFDUNaXWLD11fgbAfsuqSo3xRrL7m9zqEpGeNhQ7bW9mFk2hbcn5D19HobQkF1Vym",
  "key16": "4VaQVXn18S4bJ1LQGeCmFtCtZoUwmDarGWvcu2dXzTKv2tKKY5ttEfUZ49jrk5NnC1cm93ziC8C986sDtD4kRVb8",
  "key17": "2srgbgFPabLnjWPwDPrSMqG8MvHGmBJVi7ty8we6VsnsKuuJBawp6ccXvEVbvmnNAUyKA65tX6Db94zBdsuGRaU7",
  "key18": "4WWLdfLmLHV87FTpXZ8uTBKaaQdaTJPxR6oMCgfAD6ttEq8nrUKPJBP4qa43VfWGctrjod2nepQXzCh5MiH492kH",
  "key19": "5BzKk6mf87okm56ZUAchE826KFtnFjo8sv5v5fSEaqXCgFKPSGvfsoaMdZkjcAdq417wnSzLy3Qderjd7qMCCBE7",
  "key20": "3DP7SXUcAkep25wAMNiZt3KBzUZt6aWbctdUacmoBf4vZg5Lkbx91HVQ5AjcpK8mA4nMT7QMtPbkz1hdkPH9uNa4",
  "key21": "529wsSKsMjboh4bxm6efN6UJj9cdrfHQz4gJtL32JwbL6FQRtCr4SLiU8278Qx9MVEXk5k7NycrjZurtNTkbyAnr",
  "key22": "2DgqJU6JgrGHF5WXLBy8utqXBFJfupX3PSpsoL634BteRoWMYYiqfB4pyHb2JvhqvZTTutu72r2G241zksTaJxKg",
  "key23": "28Ye8rzauXgcJbnjohGzZ5sQWr6e9Fp35YFDvmdoX8nU1yfhUKMvBoi2njk6mgQysqSoomxUv3Jg5qfpqtJ1QHmM",
  "key24": "42RYVoo93s1qNjNrhjhq2mpXrSCCrqqWAHv6NSAZm5tQVWgSe1U7XGt4eW4GZ5XtUHKfrkifhQ3D9fBKKnY8siG5",
  "key25": "ot7U4pFu1pEx1hbhpgaa5Ny6KG8LmxVCDqVvFquZKCtfVbXYeQybXo5m9vewE7rgfuj4FMhjaBNJbq5pi4wYkK5",
  "key26": "5TqFR78SQx5rg64szYKwZBhkZJpwRPwaqSv3xKjNe7LjBbAV67h8UA8HtmRV36fkoKpRsg6h8iAiwpL5yXYsBpxF",
  "key27": "4zAg1Jfr4ZgjRTzJRRhKwZ3anuWEfs6fLiKtk93m9mRc8tiqT8Hgty1WN9cNqCtcndE9g8eDPnjTpKGBUTSjeCCX",
  "key28": "2iW6ij1yu1NeyDRgKGEZyKAkU7jDF32QQRLjm15GTB3qoMwhGTrzh9YjyPF3WkpbmfLL4rKj3aikBD43TCaj6qbv",
  "key29": "FoH2WThZQXPnqPmagYBLC6V1wEZdYZacFqzJ2B4ADoVwiNd6MK9mJsqLoJWFKoe5fD6Sp9rStYPZCAFt98u1RCd"
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
