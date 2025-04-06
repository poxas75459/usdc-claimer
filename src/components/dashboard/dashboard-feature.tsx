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
    "21MDjdvUWU26yAcou9wtQjDeih4sipbR5S3HLo3T9sdHyhagjg4cfLfJSHgNeFf26MUreCgMjUkMJghVnNPoAKWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nkTG842bEVEVT2gkXTmLtfR5kSgijo9KaUpiUwrsmqvT6VhWP9qbKoBSYzKNJF36SJMEQZDAJdoPaMpXKzxJu7q",
  "key1": "4xZipRiuEKf3QWeEDohPjvfMQQhDMhRmSog6wTg9QaciafpCJYHJm5oNeNFaQKhbyaCihq6u5AAKoEnYzdJDdV2j",
  "key2": "4c4autmZKaQj4nR5Qit2feAM4kCLFWDwGGe41fn7jX8SbKah9sxtEWJuhDxfhgUaW789LL835CuoUCGcEhnMgRLV",
  "key3": "2XBCdFJniGSnoCN1WvKcC7vA74ULPsZ7WzbQTnLhPBEJczLf37Egpks1KHvkQDEfj76CkJSn6bCAwmCm3cytChg4",
  "key4": "5jgRKCdCyA2CwdT4tFsMcvzBpnLnn1XRXC5d8ebV983GDYeTtpWh1G8zQreHDjMvUso49j4PekHuivvzeMbUhcLo",
  "key5": "3AuEPDdCXuGNQteaCA2KZ6q1RwEJraj1zS3emet1MNwT2MpMdcoM1JwCkagxujy9RvRhZatYRXbaedPpB2jJe51v",
  "key6": "3kFwExuTDx7n7T4jzEqqA9oy2nVQFhYzAojxtRC5aAw4T62MqN6iH8rbQMygXNXV8uEQ3UFsAi1E8JPpg5FxXj9A",
  "key7": "28zCuyVkmzxpAotdrGJobt4JfiNRUiH73wwPx2rYanndUT1ZLDuYui6vLUcprhUQFKZUVJvDBEGWqbHN33Vr47wR",
  "key8": "5qaGBzSQzqpAXV6KBWC6QSwwvw4fUbauzjkfjwB44XmGeiz6Wr3U91CcWbFBCeH9rcLeLp3Xhhsn7mwZyGBDbGnn",
  "key9": "2mcsaCW5zG4pBkDAFqk1b7G2a1yBQ7kjFkSRnUyT84gwNiapXdG8Gh2eYjTj6QjCTezBeRQAL7ArCcLNXk6rchtE",
  "key10": "5uBcZn3K72dfxTAG8k1NdZFJZNY1ygeSJXc1q3xqd4TVeatzCkK7TekbHxzNm85ug1JP16XQbiQT9bePggyTpn1p",
  "key11": "4xK4E72FeaadYcJojscdaYXnFU3NjK3pKjcPyPhHfw2gKHBW1mhU1TdKtcWNdMA8fTpSyFcaPotz3jfE5TM8uQkU",
  "key12": "h3YPRoReAGDC85iJAddLVciDGSLtbsbp539UMFZDXnx98Z1DCS3FxENZSMkQ6sshWedGFVRAgLV6xvRMprHKaW1",
  "key13": "4FkLqrv11cnWKxEt6JA8pcjQ5w6c1iWFDEnVATALDkkZEEAcVMPjSaRxSrndwsz4SseT1Mshqxynt3cGAHMYNJLP",
  "key14": "umNeFb1kkSJyPmBTyKhjAVriPwYG8gYkr41kHxkn5MANae5oxJn77k7s6b6XiDGFaegLE6AyPqGFWCdKfG64WjT",
  "key15": "2NHhEVRXxaX26K1zKd2GioT3KY26YzJxSwaSv3TPp3wpmbzhGGRn1RL5YNHZ5Cjx4Moh4U7vhoh9Rd3Y577CzFzW",
  "key16": "WnfQGZ6VsLrbhGGVJK7sUb18Tbe5YXXgKwMkxRnsiUUXjxbuHhWKmPyc7HHwDELBfFH4cCiqMtu6QQzCp5XCkCA",
  "key17": "n3G95Te4Rw5oLSbq5bHmqXkQg7kPCzpXUMXxfBCYZvm8rLzvCUT1YroKdWzxYLwUzuyQtTCfUqhTM4Y78J12Ntn",
  "key18": "23cVvKngqcCTv9x4HAQwiYpPLjmTtyTyELYdC3JADyxexy1Z52HCsMFyE7vZVFvUhmce5u6Gvg2xFbYUxzVTiLXY",
  "key19": "53rrnyeXW8631DuMBXGni9wt7Unh96AnQrCMwjwskWEDTgHHn9LXe62VHM4DVXase73hvmzHckHeZVnvELoa3tao",
  "key20": "5fsvcg2gDuK5KKHBUaphbeyvtpT2jSRt5BgQjPiJV7rknMfpc9Ra5QGU54q3uMFH7RNb7gtP4TJTdS8vSjYMdsTV",
  "key21": "59pSwJHUKrFE4XPtwgXpbYF6E6sHemutJVBQ7VvcbD3r8RP3CALHFjdm1fTS4y4K5scWaLk94g2aijobz77piweQ",
  "key22": "5hJWmCxBo377Xf4wZ2F7o92UpP7TwNnCyxbMprb5GazqcXEs1UDsSZ7MWJNkgmX7vN2XzUSwC9PaB59sHWvVnEjm",
  "key23": "3dnUuYwefngE4Sz2iz7ABVzQSgXcZyHN7B2sudd27sWRtRYhra6aDSGDeXZy74SS2khNFqPzDSgC3Yngf6iQHD2H",
  "key24": "121yornBvxPkHsUAnp9U3tYj2B1qqCEvknc7Pq1QZqnAWobkX1tDmRvfWNiG97Z2k6Zg93X3qrQRHg2xnEG9FjT",
  "key25": "3NHJ3M1DvgbMsPqq21KcBVXw5grdQmHcpVAqRWonrDv28QdueWt3EUHTNpzpxwMZKkMosV8iEfNRuGyRSx1J8HLT",
  "key26": "61hnh3nncCb1Vg2eMVwr5SAfV1yd8yPJ2dRqTpspytRwCrmYaBSWZe3F6CMugfQU2CwKe7gCiwJjMhiQU9wfFnYp",
  "key27": "65TVCmRJom6arNcKgR5uUvXrBKePGJjaCFQjFJr3bESRDhgJUygSjWrGSaZ6QMHUtJdM1dpTmH7MAtyC8wQcmWrp",
  "key28": "vCYSJZrK3JYGMRwsXX4quz1FxB3oaG8UdavuuDp5oaihcHdPnxTLTeQXobQMyBDcURcm8ZsG1L9hNo6ZUosGrDh",
  "key29": "4R7USY4z5PEY575kFJUQCUt4WTcR6uHmyxoY3Vh5GFiq3HgztH3pLUMcLMSTX9RMRrMS6buDtn3edqcYLw1rEvPp",
  "key30": "2emjiAXkXWXd19QvRNmsT8bh6Vs7pkUJTiqoXJeXB3Udvf6RFRi6o6UEfWJtbDFnNrv2Wnn4FTwGkojPJ54ZPTW",
  "key31": "21UQ9JhzruysY9LxXjvGL6znmUysQXXiz5n9quhPdACKSmsQXo59Vr1URZt4po85zcYUeA1NcTN2AVnkB5fvbXpe",
  "key32": "2SdwY1oL7wE3uZGkVZLYC4zeoQC8b2EUfhbkZ1rh6KvYJPuUwuefCa2Gkg6JNiP9nrpFt5hSrDMt1AUQdYyV6mur",
  "key33": "5dbA4Ab4gpvszv6PYWa7FNMq4aUfnbWsquNsenx4GGhgWZ5d9XqBqWNECaGLxgXR3Aipmq8n5dLJ6zSvw4x1DTWg",
  "key34": "52sSJ4LtEstEc4ThK1WFsmRGKMNx4WpLh62DnQNgF4Nih2vWsbunjAWRH3ZMqaSy6h5p1EyCqwCs9C3iLsFsU8NR",
  "key35": "42hn2DA9mWbpYHf3sinpkdwxxg3bSBjErWEJLNPmVcetABsPKV9zKV5nL8k5QoximZsZKQCQoKskUCamQXxVkjad",
  "key36": "65w3FTu48SM7rWviMYGkm6ffcyNXU14aZCcHkqHwe1QoHRNMyYrj9r3kyDdEXeVFtTqMe8jGe4KdwrvrkPrbYjft",
  "key37": "4gksxPaanqn8KJsAM4aWb4FJEdJvCsJdGckfaQLnMDTBiCyumFTpgp5BARukLKwuYXaitkLdNRn6guX2SmQPf4s2"
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
