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
    "4CFKh2nShhBeq7pfHktg38o4jnAzZVEJ4ZKjjuEFT1zwHRcX7c3KTFcoHHJoRry3Gx7NNriqu5qo3wCCPJFkUoyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHjbAVnbMsipZqJeWvfuywdkAQkxMGK5TSYCZy2HYdbyqRR14i4pL2tcxR3GsPRjJrx8dhbaR8FbEe2Tk2GJbsi",
  "key1": "3uWYG9ThZCy2pzm9JQ2cPxhVfRUoBM45J6xBGo9ynfwsVeUCeeuuqFN7WUp5BUAuJRQ5iP29eLu5c2cbYpx9xzfb",
  "key2": "3pHW2CtgU31C4ekXnKoGcSNwC76wgZApJpThyiGTcb1nD4Hk9PKfTt9DaqnKojvBapjW7Fabhz4Nuw2XLrmBREuN",
  "key3": "4vcpLwXxxroD7p1DQBLkoSee4BLACPGXWzxq6VKWw6qoZ56o3waENCfQ5qWu5MDkbnM92ydgRRkHG5Mr7nhMBbm8",
  "key4": "5YWg9mKynz6NWbpJ1dg39MedyAwxPqNKDxmhKcmtfCsxcv2oEUtkypmaBeKvpMqLoCDTqvxRDRcdG63tgDui2qAn",
  "key5": "4cBeJ3H5u5ocY3cQThiLbpY35woskqXiRYV8Ub3kCPqzL1bKViswuNn4okWUdvB86Cgd9FGMZNCnEz2ka56yEDnG",
  "key6": "52ja5qkEKbLx9yY3kFtiSz1NqibTjCZoeT1M1p9WvQ8gvL9fq8E82ohNTeds5gkaWv7MFAkAPGj7Gw1Z4rPBPXpY",
  "key7": "5UnUounSpH3C8jBjZH4fMThVd6Eyhgisuu7AVc7A7fgbj1inMPRYGXYfzhK6oNWAhCspp99MjbrT8HhV8gD8oeUP",
  "key8": "4Az4YzZXEFLt8ERRifxfFNNdYDobfc2f1UgmqxKM6DeMEmu3X3Vupz4pNWCpTjEEYhCv5Nopo6Wvi9z8tShEtA72",
  "key9": "3mTRpvFtRPCTQ9woiN8L3WM4PbEKbkEawRrHEPXXocvPoN23jtCNyZETBHiz8G4TvZucVKqJSHsCMvz66oAhUz6Z",
  "key10": "5ow8yNV8RXAMvMKzVVfEeYabPM3dM8o3HvEpsDtVNk7dqJMkbLQKi5nFAdocn71By98wLZpbNNmu1WHV8GEmHzka",
  "key11": "Ed8PpRjoaMQhqbJ2TYQyq9s13uftBSMv634qoEUg4AkHWFT1po1CiyqYzvPLB58z9Fdzgd7G3HwRdLdwZFsngeV",
  "key12": "g3iGhqjPg6j9mrsGtWTAYQp6mEMansZbocQPNTpQtBdtcTSWN9xVhPa4TZDB42yTXqWMMQBnVMTpAe64sGJbPdD",
  "key13": "2C75GaNAzUhrARB8sNizj2L9gAmt5X2Hm3QDxH2JZHgkbXZjpTQEiJ7Dpu1FHUgnRRJjr8pHDSKbhVkYADi6msoc",
  "key14": "2G1VU9CXMNBNJV3XuPB3H97u53NNkUBrsPVaBz43N749hDcf2C16NymP5yiWftRGTPcG1VE8W1S6KUNrjQ7tXspe",
  "key15": "sjaQRx4xyPvknTew8RdZF9B4xp758zCaeyDzPNDDtewewdMZoV73jqFUAJ16Nwu8fE5Nkv9vvKmeAzSTuGrRfrH",
  "key16": "3ALmUV9S1ghA75BvhfhCnoH8rvmmE5CaoXVcM6QMawMaGJXpvZMQxA2UwaU5dyksc9zEa5akh1c4HQesDa4NdRy1",
  "key17": "24ivhYKxszT2oFZgoQMSeSxsztx5avTpxv74ywfqpnspSSgo9poeywFLa4hFwgcda5TeyMz6er5k5k9jCAKtaYxJ",
  "key18": "3kErkNYLF3fKtyRhfaWru83ZQNLggjmPMBepyHSVMrzGHrezy2zLNfAvtNRXj5tgEQn4uB2LnUsL5eMZRLYFbwfd",
  "key19": "5Zv297QqFLXwsWemVbyTnNqo6ZquSm4WoPqbtgvM3G213vmYVDGwFeJSqP4bASiCh7R8LHYb1CTrXDMid92xKUFm",
  "key20": "NBh6X381ugrGwYv1KGTLr7LKnUPJ5PTcDgagAQpGJXefjG7vx2NsYdbKhXT49xaGVSMGvFJkzNi4AYeW6xZjrf5",
  "key21": "2VMTXmRQJn6QqcY1n1LuVc9Dj712pQKGZHV2doAtmXs6BURQgpNuZcvHbXPNvnbj4aKPjjKKrNQwKoEsXt7Vq7HC",
  "key22": "ShsznSM7CSzqAQLDQibzwXs79MEZ3Cn5dkK6VfG9nZChvMZkqBSKu7uYnfFeG4pkZeTd5Cpik2fBt8TKNS6AzuG",
  "key23": "JDmPe117wD8mNaBJEQ3Puc5DT6giDJMiuKMUiVWxsKJ26XgKug4rjkY4GBRHMuapo7ssDBdh16EKhpUrSt1NjQe",
  "key24": "3qGsWSZPuBDADcnSiyaK7P5KqujKiah3rCxhES63D5mpbpTAZ1K71EkKJ5iPXzqZdTxPczrMjwDwDTiXyWW8VNpk",
  "key25": "424yoFdoHVMspo3KBoiztaKBDogwbuyym4o9NPwGn7DG3rKQZzzQwZhwZ6MZpQRPbyXjTm9zFtxN9KnA1JqWth1Q",
  "key26": "35SLuYnWDrQqvoxTtvTv5bu6pgoDDUzXPPqY4fArULCX5BPa5BnejnhAmYgAV2wjdiJ9DVhzp4GyXqK1ijEK8HiF",
  "key27": "46uyJXnEGSK5rBYMAvMMXgsVXhS2r31aQqmTvCtqErUVafyP7UcFF8HzfdgJt1wuYKjf2sfssiTHfJvpkD1f1TNw",
  "key28": "3AV8rxbAfP3RhuGuD9yurJ8sJdJeyTz8U17XT4Hz9Gcw1BPeimH5oxzoFQZBu9JAMjorze4co2xnWVC9LJwrozf5",
  "key29": "W7Gzk3cws6PUEyNATwrQ95XuCcCwdDAdzgwu22mGmJcurUQDTa74Sb7sgHjDxEQFScAMsp8AaWtaz5pzNeQWn26",
  "key30": "31xEgDMn4Ad7uiTEjjptYkr1dVbhyLZAkE9VTjaGUkM9A292A3tLeqQAS5DpwPheijK59aWzviA8qH69FyNRwwy9",
  "key31": "5PajPbHzggo8A79c4qnzkCtBiD75PCWtfM3LXJbfw4GMexKsNASYKp5LK5GgL1gAh3ipVHuhWgWDxDs9jc88YxZr",
  "key32": "3aHucvMkiUXsWAFBWFRKbg3mEaKkc2X4i27Bst7vsfNMTaCnyNefjsXm1hBipNg4ppEqtwpFvApG9BLHXCo3fSfg",
  "key33": "3xHDC4XWEqtgKha5uVnCk29CvzXHK6aopJuTwfzyidjxoCMvtys1Enw5x3ijHiDusqcTwPgQSvnJW7T5xMHcCiWZ",
  "key34": "5GVjjqLqybZoAJtiSYhgtckjPbPWBch2JH8ZPoqo3P8LNT3HZ7ZVDzpRhMvQfD8R21uxkhn61ikPkWDPReNcYtY3",
  "key35": "2KhgYWvfoNN4SBJKqKM4rcbhMbiVad4mpVqNwhdAVC8bquqFV8rwngMmWP1Kem2CVVBHdv3bw5FgA3iig7ZJB2hZ",
  "key36": "4Wm2fMYLf9PEuaLcDGeatHKFzN3HvExAHXuEYE6TvJ21a5srHt896wGKJFj9FptALs2mTPPEjH5E8WeSewDVmZzD",
  "key37": "2nAE3ewj1y8WhZvUTyixM3uPYfqXTv6rNgSWT4K3kvxM45JKjyE1J6BTbiVpyB6bba53yCCJ1JUuKJFBn1knEy14",
  "key38": "y9TrTWW7M2tVS2SqR7mLTrxQqcRnKnXm5kRRkLYQMQfHXuequP6mzj6acUBWbofTNvDtoZd32TBnF3JR9EsoMov",
  "key39": "3EnYxTtc6NycAY3Whms3w7SkZPN4EfLNFAonTTQgTyrC2G9qUd4rKjyc6Vin6KHyr25r25AdpPXRZk6zFP4TPXiq"
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
