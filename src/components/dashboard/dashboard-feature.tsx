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
    "wCfN2b3ND3bHRw6ricUMko2tRv26aHEjidFYfv7YDzkrtDnN5RwxdbvDHALhkwotA5bXpRzs2KbfJdxvgJwvhHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpMiwRKUa4sUN68n73zDmzBUCFcjTW6fBcLgC1NHztu8HAW3EGRwmhLSDL8h3VzeFybrJtrYTzZPWMs1qHkmCAC",
  "key1": "5uBeMwwj9Jmwwz4PnA9urae1j79U8bmoRjewkwzYDoEEvzg6F7zmVbPc6saVDtgEmRzkMKduvtq7pkDN9qgFYv92",
  "key2": "2mgKeGJoccZRbnNtJFYeaiD2W8EAcXXxwXnr7ZjssHgavKpjiGW5HPnZL1e3MBGhipoCBy4hT1MySLqzZ8kXrA8p",
  "key3": "3g87TNFw6nFou81wNRhceq4GcTahdjbboY24nMxdNKcdAV3WYh6FDYNskFW2DphcYNwdid8PDx3SN21P5ux8Vww1",
  "key4": "2jZSBA1QBXhV7UvvsBcwFYZEYUX4zCt3x5ziWV45dQe6yR6owPWq8vUvCYgMuvyAnexBfUtZwVuPPhNUbjkmZroE",
  "key5": "5gGYRLrjMMGppYzkkHWoTFbW7zfVqq7SocUvwru347LScznvacjAPMcKRsD5vxWAtUyjdeWrS8kZwmL7VNSVPjW3",
  "key6": "4wkde5Jmie63XRtmAaYba1EaCb8STLCFcVtnKK7oB2dwwAMqgfnjYK5HVJZ7n5RkqXXL9TrJCuXpAqwAAs9dA53L",
  "key7": "5v6ebSVWMZFJZSKAAXKL5Fwu25NUCCpAbKXYmQPwVwJm6W7VXWxcpQ9aTArRFeK6VX4xag6FsJyeQyLcAc6fuFAH",
  "key8": "4exg32UpHSfncb5u15XR4n1XzV2dC84sTGegmE6R1mwBQ6mWemmYzJnhLwX3Rfnf1PU1sd9oPiyeUH8CdWcWUJUA",
  "key9": "4aMKjUwHFeH4aXm2bV4zWK6J3wDRmFHCdFZfGjmD6Wti6DwsfBCxr7Pfjr4jwrC7Q2AV1YkiykhnxvbzQY67UMdx",
  "key10": "26TBro5ax5GWbhQ6FAd26A7hHjkX3udDtxtktcvCWywM69X4bh6HSaBw15LHGYhf61DeTgRqJBDWtdqMWsKXm8Qx",
  "key11": "3hDDuF8FFj85M2d411HXEU7ZqKpmBcTQq9BpB8TWuEQpzLELpqcag727yk4mnMwXE6W6sdUTBoJtqFhFZzfYUXK6",
  "key12": "5KCYgsNA2JzLS9NtcATJrt8RSjEnYzmFUNwMwAz7oxNF648pPrA6T4gd4xTBgK1pbPaLteXhzTVNDnrxzVgDKRfx",
  "key13": "YtaKJnd3WJYQMSLv9iiD1vGxDqXPi7T3iKxqS8Y6MnnvrUnDpRmaJHxoDLFgRE6bNznXkYh8GTQasxw2H9fxCj1",
  "key14": "3QLwQWdPSRTmtSWnyLqz6Bw85MeoKQjr5KYvdNK1KXTh9hFFqiAmVBWf8uP7AqUTB6BTnpSPR2xiduJyEKhBnKvn",
  "key15": "7ELJHRSEPdhkW1rrWWxhS29akYzUFWbhUgepkCThn6nvfedWkv4cmf9KLieVhEaWrhLoqFowrXnB4y8moDvVJde",
  "key16": "2BiC2WiNBn91oG88h1YA3G41r28P2FwGKgd3xg7uAgrgrJP5xDfjseNDk6HdDoH9WRYphByVWii91bodRiYui3Ta",
  "key17": "5J6eZrBaqGN1MDMbcVDTDzJ8AdHbpRgEJhUE2prTSoBmzpicTiUpo3kPBommEitsV2qUKxjG4WJJjvwbDivfSce7",
  "key18": "5cnGm88bfkfLssHerEAd4odDtTcCHtA2pvWhs3JzgEuKaexreof5jzaN5GYtRxG73dZUBrYA9BkaxbhFCHrkJcwY",
  "key19": "2JJXjwAcgc1S7e5NmwntTtkgbk4ibjkGoJwSWNrnWjT52wEL8uPbCnsTLPTWdJj8TdA5KFcyRYSemvJczZ5bvFzo",
  "key20": "4Hg5qr9m9486aHc7p5oR2YanSkPfDdU6yX3CtZ2nzzEnqWYEG6AcjQKXgdALhaQiLzBvjt7D14MJ9YNCKRJSVtcG",
  "key21": "XhCVRycSeGZhZuj3jgEQyRPe6FzDQRzUexhcvKzx6Npcpv2P6qPkoFjhQ4QWRkL4B1ztuRV6XT2F8fDVMM7KzVf",
  "key22": "4n29wnJCtK4a5nQqhkNN7uyjVxhkTMFqijcnLkHxtPVNDDi2MvE1xMtvzoi39md3LixJMKB2EWf7qSRaVnRVE5tc",
  "key23": "4WnFk282Qa3D24iyhc1KN5qFvnGyxdTrHUVMq7rUcGS7cNUbagpAHQ4E9ByZYhbBFa5ShosQpbFuh9SNsmJ2Zj3R",
  "key24": "w3rsYfRtshymvHRv1yitunZ57ZYqWKH5diC2JkkT1EEefS38MdPpqkE66btDg8uF2sjQTXNjq41L73hPjpnZkyx",
  "key25": "39yEgBaY4N9Wko48feBCh9NoXiJQM3pPbv7YrgJYuXoQjMD7KUNqZz536wveUY2juJSSd17qHjEqDyvpmKHkLbHA",
  "key26": "2QYosgBXF29ZS1rTL3fg13ndBNQogAqyNfKTuoRHrmVBVy7SwnWa5LQmH295pMGt7deqUZPioDnvr5Qsskp9EQGD",
  "key27": "2pSCrq4ShZEiX6jFuKS57Rn7EBzGKuXrmMHu9krf1AuRQ6xoGjqmrDYU8Dar7bwKZPqqni8JD8jGisghN6WL973q",
  "key28": "5vTfhog6opkEevJTRGCH4QudZYWTqfEthLZbvw5K4jZsvoJwEuJ644DL6Xq3NSnmKB4vs4MNas1p7Yg5xKxfy4zc",
  "key29": "3TyMuNtLUo5A8t7MpV4wN2JzmJjmNg6r5nh26R7xcaXpSBQ6kxjNA3o4eLsuXtHuJ4TgKpVZToARA1bFSW26RP1U",
  "key30": "2AzizaXkibQEUBzUo8pF61pN5Vn77JTpBC8oXdyQWxFBsfBvsmmtr4M6jmsVRzbghbcHJ8ReovkqMstSRrEfN1p9",
  "key31": "52bLBAFBZJvyn1Gp2rTgqDYvusP6xwy7gomE8ixDdLRgUV7nZ4Tq8Lj5bAxb8Tax5DHMNtEECxU6ffTE5rbZ7J1v",
  "key32": "2zuXDxDD6afnUHeex6QKYZ6fRxxcejrLqCch4ten7zsT7cqVoB6eoBNoaMutrgvjRu2226mWZrMHnFQwhngN5rPB",
  "key33": "2REMQobi398kWntbZ8CzEixTF2zJuW7XX9XqNgVUvnTxcucXMjuNr133RAwVnwhB6abz3RyA33eQhysabyVPhfsb",
  "key34": "4F9MWVhho2EjCbXXoS4AxPWLhqhffJD7BSEWbGHnYApbWEujUBc9rsFu9xMzzJ8UQiK1hS9qMzwk1MKv6dVYWt7n",
  "key35": "3mLuKDiN6ZqTHgorXNX4FvoBM6TqxfgPrBt7xKLqdkVCGxXHQDSGXktHZsfn5dBDRzZe4ABnwtx3MKZKbnHe7LjM",
  "key36": "BKPLdUM4kfqD5tDTkC8j3oXex1BgBAxApS3odNWNg9Ab5WA1YzEv6uTkLRdA32beA23HenA6L2fbpWRwGdJeTxZ",
  "key37": "3366JdqWkpAY89KapQsjuHJnrmE8nr5qcXPodDVG2ZN6wgTCTJHGxMiou5ycQ1Hm7BXX1UAvFSkqLEkLSdk5HR7r",
  "key38": "2bRAUNCn4CRVJa7ZgnPvFJWWVAUMEgJHF1tRPf8GPte2vCnBhrwWPkipodFG2VnrM2XD93Xapjp2i2fwkSfJSgV1",
  "key39": "cws3nQQsdRkk3JLHrr615L4qgW6kn8y17NbS8Rm4snRktoxCgUK5yMv2mBiHszQ36DhvYMyBq85ExWnAj9ch5TJ",
  "key40": "63pEeD8pV7y5Vnyz6VzxNf2D5YLF5aDrP3e6JzQ6auwc2dJCZTMNagofGd22j88zxZbCkMCZ5Fh7ft4LUd6R5qqP",
  "key41": "3tfwxG59HnwG5UFnVR1mHpfZXjrsGDU9dunw5Tpmxssjf1JAU8UM9uoRPe8EfU463g8zweBXj8QdQXvSkAM9xWp5",
  "key42": "66aaN1TJF4mPdANf3p7i1c481dFY9JJPc7Tnw7QBdJqF36Wr9oYWYvXfKQXjhCcrpzBxyqdEPaehHLXATT7toiyR",
  "key43": "cMrFhvMtEZMKZBvZjJSJQjtdGiqAdmTi8urauMmLmrRjFZTqCMu3RP8fDzExN4MN2jrSEq1L3spLUWbHkGc8PxD",
  "key44": "4w1mvzUJ7aqnbPZfZWKb1VLxJoZ4qxAUkRf4Hx2UsAm9q4eJF9u4uVwVMArVYL1Dkzr5RYgu97tmqvd3rTEMdY6o",
  "key45": "5vNtcqf8v4YxcvZ3X6qZhP5KRiDAPYs834X3K6z38fnjjgumZyC6ZHUnbcAz8o3TxCs7odVQcc9YAjg1TscamxZA",
  "key46": "4GDM4LQxS6kQ6gerBE9Vek6v9rkpXCc83Lytq8g7h4rmynT69WrkHFmC2b3JK74o6Q53Z5vZJX2eDDJqQhdpBhdR"
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
