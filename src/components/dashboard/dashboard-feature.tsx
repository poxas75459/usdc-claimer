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
    "4TWR8YqfHYyyRaBNKqi8M3rWcJGpfF415yTePWR4WghTSSsGrDyGXnsCic2BaYgE3H1RsepXNBGkTgoL8pMpEQzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEa8sXDoV6T8PBtKwiLz1TmzQPjyMjfagJG8JcFAAjWwuhkLmfpq5watX9BokDCa6x2G3JQLjN6HQk9AbR6V6Wn",
  "key1": "2xS8kE7dXEdLbZ7427WzUw7uzeyuUjkyL6vrq6TY3chBmBxTygj9FKUKSuWUnc1kFLq9gXuSq19A9dULZ3VG2166",
  "key2": "2Sjov1aKXayjSJwyuH5dnJtWJ664C2STwNQ8Ck7GcxmjeGhAQA6L2z5UYpWEKaYQSLWj9YVzWDFG3vcU3J4DMyzk",
  "key3": "567JX52eSwQLYi2kUmb6bPt27e1nXRK8pHhuuWFZt5Rmk1vrHK4ot7R6LwkXtzHqtYVf5rsk3QSh9ZEvDZJbadpd",
  "key4": "3n2Tk5aWosZ41iqewAZ2foWhEa4STsWUiFstLvf1MNaYynAXhqwowvE5ykBP3uG6gbmwbGMF7jQn5TPm5PKffuia",
  "key5": "4TQggpdyQcQnoos7QLxH9uJY332PqC3cuWa6kwaPSTT89A2YYJyTBUuYmqi1wp3tEKUqTLhpJhfjhjGPfiqcSFPN",
  "key6": "kTQyaHoidynCBGDisppRSuGNCMaHveSDb6U5vufs8giWoPNyPiSDgsYbYzertKCrVhPDdCD7xSeTFbHeKyK9t51",
  "key7": "5LGUvdfTKu9qrL3Cd6MZQPpbCteSdWnpNUHvWNZywDBiA25xGyRZWKGFtojAmrMSPrCbGeRcjEzQXzETg2Mux7Kq",
  "key8": "3AnvrWSQUnmfjMiGtHKeXGgDDME5do6fUJ17tCocnZPrDfipHmU3zkCqDzvsUxtrHEwAVyKhb8Cr9BrhAdPhUXpT",
  "key9": "2ZLQjfoL9DJYMjC1MGrCJhfxwdU18BiR3b3WNiyxsA59yzNcEn7X8UhFcWcmE53jqDTH4w7CM3Xx7Xwvn8xpb5Kf",
  "key10": "45ePGTvJFT8R89TZWXPpFDpMQWDAzwcSiFwKvofSJoyofaDZLeATUeRCMCQyTG9BzpuyonWjBJMVZiDC95qUL3D5",
  "key11": "3QaTXAMVXum5wYETrNmFDPX5pkDKQ4AdKtmN5fsyW9g4Na2BDBpN282bQCzWbJerBrBjqoo4UACDz8kkzaBaqRbK",
  "key12": "2SeUKcwkss9mqiJrTNcMjohgPnXn3oiDexNjvXBBMujEqs6GWbzvuziJ3bs43BTZBULdGtwqwcpY3isWBEz6Ghyp",
  "key13": "5BcThxYMbTn8XcW2DsfKHL84LSykaF2NmSK7TLbXGr5N6qUMHpyTbzY8SMFjuMEgVtXGLtRV532Jrjkg9p41oL3U",
  "key14": "9kTRJovjWmD842J5pbd7sLWLCDLqG9FiHAzmp5yq52kfZkFDxnSzrZ8WvWQ4gU357tPCLeaLar5RTw1Wm4pdUsE",
  "key15": "2yqHs8ugXucKjs5eCapNkc5jEGMhhkYsUqSzun8MaAXbKCoEQ2UgGc2nAdt5Rx96CAuzoXNADE7jD9BbVA9ZJsVk",
  "key16": "mL2qt9BwSyUFr9ZN3mUnFE6aGFJf8KE9b1daikf9toLcmXVkmKUUqdRXbatsLMiUt6KGr1rob2RNjveKJDdcmPV",
  "key17": "rGTCbWggocRYT6Wy9F9VhYPepxAU1xStebZGrSPNa1eS45yfkZhCPLbEPybEThoNEGQEJU88k9vXmC8F5GW2c7N",
  "key18": "2cfo7NiM4mdiQxQF67noM6RvST793EM4HBWhMNFvP5pE2KbG3fz3gf2xYDEdzBVRQLLsWYmqQe6yAtbBRR74rzUJ",
  "key19": "3euCqLwqhAfeC4mnHs3HJj5hP3JaFVwjJqe4WtofiYY62NxFZTdiUspaNGNApTRXJ9CE5ajbYZxPomjcNrKR42RW",
  "key20": "3BsRKLSK7mn1e3VPNPDx4WJWx62on3Cev5cNX5K8pWU5VL8yVFSYiewXU7VFB6nCFvBJnbf9Jmdqa3PFW4dSWr4V",
  "key21": "569TiAdTnM17nWkW7xGdUBcqm4NB23Xsd1MQZXQxXCkmndencoakDhisgg9Vx9BKVeYrbRFX7hq5uvNrp2bVXgg9",
  "key22": "5x2V7Nw8CeXiM3Tr7A4RGDib7TDQ3o6VMZiQuXeCvsrwfgvVw13HPVGimnHjS4pnz3eyA1MpwR3VB4BBgGtWTkXd",
  "key23": "2PngXvFobmxtQGZqin9ibnJXFyx9v3EZvbPqjkNKN5wAXES2FPbUWi5jTPEtyU5uNgS7XRc8EaUb9cHydcgBPWKJ",
  "key24": "hBMJHZ2Ed4gWZArVWbYzEzidj3DSqhkgAjE2jtdzivaQYBebHHeMGqb8A6X4xHfkpPNvcPdsKsU25wPgfhjMjyv",
  "key25": "99xHos2XxTRhLmz1mYcZ17mEAybj1MRS6UCmS3TtwA4R2mDvxngX6r1z7BP6z1x8ptwHzZZYypSggNf3J3528VS",
  "key26": "2ikwbDmqBp2t4YCv6Jup9xRNMvmmVzujGr3npWZsWp8waBRRdEaSK4h7LrzBTRFPLyRGx7sSwEChQs4b6Ekbd3Vu",
  "key27": "3sVFgSzDciBZVEU23gYxAMNd7LsvEb9pbKZezY13mVWgGytGs6muisf6adioBGkKLme38vk9r9bJJFDNzMkksogH",
  "key28": "58tHv8XVqdb593KLv5WSTvNRAPDJyE7TZKTxmytsyqiv9fCeAB7K4D9oWcv9Cq3QFwdfGqztnuWSKvvcWQ38bT6B",
  "key29": "3ZkiTpHVyRyMdbXz1PfdyDzS1rPhgq8x6YmKh64c4Frj8QwKhbgxshmy4zfUVfGncPZ713YYe3HXSTHYuW7eBq9t",
  "key30": "35uMHen1k7htFnfoEPSuMAoNUEtRxt7TpkihrTsZLTKfuJDVkRiYUm3ZJQn9LSDkyDMPUYwmnVsSA7yZMEjUCXkD",
  "key31": "4QZexe292u4xGE5CSBKpboMHPUX25G4J4jxn2CPds8ErcesSFiGFDPK2CXgz2RMvQBxYnQoaSDoBsQyc7ZaksdzZ",
  "key32": "4eWr1qBSdsMYxaGp1JwTH2hUy2pP2tnLrux9AQyMSVkbwowDLkqx7yahEEDVRoCzwNidPGjBBHip2dpN9QhtuztB",
  "key33": "x4twj6SecP9fv71far1eppPBei5TuYfakAhxbJowaRpAxsYuhuT3DQKGssyeHQr7VqTn8wtWiREDrk4ZeSU7ULw",
  "key34": "57Tjcp2kPyUy2DrD14uvk5jQihCsQwXM2TxjyCp8bdk2dZogeECF8FByZUW2T9K4AExouciE3YUzvayk4QF5o7Vx",
  "key35": "2Rjq2VtNiqDMH6Bf4Jgujxg6pBEANjb3HDYL78et7SiQqESoDzXmUpY7Lh8F55aM3pUgkQ5fi1Au6Yfzym1eGYD5",
  "key36": "2KSsV7ZHKsmsBWttHjN8M3gGJvQawrpVLQZEDPgBWPw8r6aZUeaaxfCKktknLkhRAKaru8GkfdLA5uCbeYe2517J",
  "key37": "3NmpxkXvayCkQQ5m2Jj8sKsERekZBaU9BZ4vbFidjaDshYmeD8tUiCLYwkbrS1ZTdrPGqex8gtH7EYBHwe9si3Jo",
  "key38": "28FZFR5NksVWafXvbdYmPXcAEDKhFTnX73CzcYirbvFtV75TWJRTHhuVcHW6vNRxpXxwrPkw5kGN39QWPzqjHoah",
  "key39": "5yweBbhYUGSQ7vgtfnqrUVsDpbK4PPg5TkgsTWym2sGQxJcntrjFY2rhQ85PH2jDgfgGLvT9zmXpytRwFbzcxjoB",
  "key40": "2agQRNJTxHJ9HAXriVJdDExUpAwKRPYkTCQc5wjydxKA5nANq5FE29neciCtiAuHQAQYZcxdxJnNve5BuiuwHQQx",
  "key41": "5hHJEJ8td8x5gFdY93tB3WSGZ6G3jUn9QCajhzhpRqaz8JcqDWK9Vfot7A1GRarR3onvMkw4eFuZKJ72Uqyh5cYq",
  "key42": "4123MUR8BytzefZbD9BMmbPGVXjFGBuyeR76QV9u6TgC1wXYQWzgDkECCwiCEgc15gwxfT7LRz5n8UYcE3VoYwYt",
  "key43": "QNQgB8wTeCNZTUsZiwjsNP9S3ZrbmuFnRwivkRCuhfRfHt42QL6Zs4HJRDqvXjWLX6GYqKEMA3GVYijFgbzFncH",
  "key44": "4VUegprDxN3N8iTVu5ssL3VUPn4pZSwphH54DQFB5B4yMDv9HP9n8og986QAFqQURW6DYgwQ1yDWStJPDrNCorV2",
  "key45": "qjqcLwiBQDmxa3n8hcjmF3AzhWbDGUw6tGxFeWQjpzhpU5uZb5g4ovhJVmLkRbUTw3BC7NRcpCzTpEmoccWPcRe"
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
