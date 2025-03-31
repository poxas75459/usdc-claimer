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
    "2hPbG4P31RSX1riHpzwCvzwF7yoL3o6q82mA5FKxLwWnaWitEmnLLiouGotoq1WBx6VnDUEBdQdmjXyQQakbhWmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xmou1FVDp8mbs1hffzYxuhQn8yDPmMQz1DhJkZJhmbAM5aqqBzWks8LmczDwmAqMzjZZNAjL7WHSrNRCWAqHUxg",
  "key1": "5uHZNzWSZevPK9ixjzMWM2eQgPy98r772aqnuoeg4pnJsY7Q9zMQEpisgAcnTJX11fm8uNBv9vxbJPz1o5K14eSK",
  "key2": "3eCr24YnZGkt5RUvqUnYcqTh4kAeUuJs4T43NJDsoUTTMwugRuDKV5ns6eDpSxR9JpJLaC7uZpGWQDthLVeEgibo",
  "key3": "3WGUQ8GFEQc2cC1v1CD3Bz5FDedBouQs14fwSCmH95cmb4EEbeDY85Jwctxxoj7ndD6XheDJeXEejo6w3Xgg3ARU",
  "key4": "XaFMxvywEQPHur7HGqRRLEgT5WjeU1RFrixJKY5nZnqqGd6qhL5t6iR9YtCiNh5aFPkoZiD2KQ2Ah6jsh4uU1DH",
  "key5": "54NX2cKLZ6ck3YuBENAGGoVXtbPgFDsLTunzFgPLGmwU6GxQpMMENb3LmmHbuCcMbrgFA3BA98vVJfRjTatNibZE",
  "key6": "5v824iG8C6DPHaz3Lt3db4KfbG5uXxfFtNN9tKATqfmL7pWbaYa8Zb9qFyhFXkgZz6NmPznnF1ScDeuPxnLV5UMi",
  "key7": "4zmB9Z9X95xNhP7qzfm7RdSv8RAfH7wcXSELdkj2UQWogP2pmA2wgXgLvnstME1U6Pnxa33m3saUfj1LXpt7qgU1",
  "key8": "3JkSzuyhFdg1PoGM1KuRnpf3Rs3ZN1H7RfD2qDbhK9ddZ2PKKDqzC3WunYfMmaMmTGS6H4gZ9gVGe3z6oCdDW2N1",
  "key9": "nnJUASddUtAuD5vw9pkKUUtBCKmtoCccLZz5HL4hBgGEy1mSrNWpTVPHfyqPsTvvs8HC3qeGTYhQ4urftZAQgNf",
  "key10": "AbqEYs5GAGyyeXBK8YZvoynopjsopCM4x492JnefrmLJusexUiMjvzdwcsUBwmFrHNb5Bi4LFWhmEoT176S9oDK",
  "key11": "3LNCnnf4NdZc6bcpFkPCMKZ3q4mpGM19spYE3x3QHKmFrXuHaUWnbbSa5Vc7mGanEwyL3pkM8WN8apTptsct8cxx",
  "key12": "vcVCUS26ybUFh52tLrLLZf6VY1XELdLop4fFStsGorW932CxeySVGXA9UiBmg59TM8VYpsAnssjeQ4vy3RQM26y",
  "key13": "4ynHK4UEHxf6voZXTUC1agL3pXtN1FqF4hdQeZ6ea3njpaswphxvZ5vKLknYcrtCqmHv1WwDTQF7Y2tcZpGaA8BR",
  "key14": "4dapyJzRfhAgx8XzQ1oSuYyJXqh6LhdHWxjRkkeP4n8FTRJoZpHfTauiH2dD6HmqnneKCA18DXS7WSC3LnTwYPCr",
  "key15": "dckek6mg9g4wGhEqetmruPJv4K4wWWXqaty6GeeKi92AAbpBfj8y94mPZRQpSgiF9brkX7Uc8Yd2RmA6Ja5AKpb",
  "key16": "2QcSiFECPjGDcftPHNc82GukhsPkPncGhoDCPC1GAEXmfK7iJmw32acgC4wFzHL4sox7Y3J8aKnoUdXUg1HuURMo",
  "key17": "4qE1vp7GqHKWxJfQYKrJsYfrodXuQmVq1BJeDV392Jp2iReuAoqGsVyvpUtyJjuMz1UQoSBGEGD7CoL9ARQ5tYZj",
  "key18": "bugmrWbjHcXWSoZQFaQuM6R9h23CuLZUvtURgTEDzmmT3ba4irKozgpyrNywSsFjWiaw5y9H8bRm4q8kcPyLctJ",
  "key19": "5e9LRn7NdAVAFcPENeGhQ1dXXjop88zFPocqyjWWdFbsTNkDpgCq2XSb16dKnkr6a746jwa9MtE5GHuiDFVK7VjV",
  "key20": "2gnU5cF2b4v49ZmQRfy8Fhurdsc7okJKn8zZGNyHJUDTDs7oYwxMdsW5eEyq8pdLXrFRgZRFSi8HxBX4gfxYkN6p",
  "key21": "65drTQ5zaS3oA5nuTHuzwEbA3PVQwzPJc2EDkqS4LnkR6Z56aoHejmMbdnZYvriTnH483SiDiEyJRgnsrykzgGgB",
  "key22": "4cKeVLbCDJWKR78peB68PiWVoXtyzmqTPWTgPpzXQ77afNxhEB8so7iJNgBkZ4vu59AuzdAmcs39pRcAp477wW3H",
  "key23": "27U8QU3VCH8zuudi48KLknWogtVARqDfyaFskzqV9U3CbkyNVMuW9TuJWWT6b3wXS4GtEQGQt2hMU53pYYPgvYfC",
  "key24": "ndW51gSR5vSbnWdF4FJeJJCwGhS8oiEx1FWv4Sb1eriY8tFrKqaUTkX9dzuYdG37w9sLNPw5tJEqoLRFQsUGQSC",
  "key25": "JsY5NddyXaEN3QdDtkFvgft5fRaqTn1ej7k9RnYzbyPbqfyNwPwmA8TS3Z9WVA1B7TucFvhvXjBv2smRJ83GoW2",
  "key26": "4Q1XCUcMe4ojWiqDX55TXMKEz2ojsSvEeuttvGEsamfQ2Tovrn1ZXwdgU6E4oo2XFoJJWLHBx1QQW76VGM6M1uEb",
  "key27": "JL3gmgUENJfnHxRnPUvDzAc9oe2WdZsEUM7P1c2dfnGteQArBAhCMobJhrWCrfX9S9w2rhvNARBZtEsXHtSzYU4",
  "key28": "wAJHzAy3PtPD4QtNAUoGqGnmB6WorKhZuUUuH1hva7tpnzHEF2PcdyUa8RkTgXmcXbYvxf3AoDGRbRY9SkyhkgA",
  "key29": "p2PGJGCPRyeDwzNStyVriLCuKdLUC3eXtewM9nKfDH2Sfh6MoJLXmuwEZwRqNibdBM9Z3asTNRBFDXtZtpGfdzw",
  "key30": "476SeEVUP7GhhmutWZDr5Gk5qZrxBZEjJt8mRUyHrJTPLywFC1b6vLgKDkQN77KZ3gikx273q1axuWSPvXB5NhHu",
  "key31": "5Frt5izvyp5waBirW87VjtJrSJugkeZWNmR8c8CjEk4MT8iswfmxbHziJ7J9xCxR1XuDL8HwVgXDTBCMvJa5XYmF",
  "key32": "3RenTVisGiZqgjdKRgwYEaZUwPXFMuUL7ip48YacLGeykejZPjNGjhfxdqPDVwepsos76krT5gWSbeARrwEoQFsj",
  "key33": "4RvUxTiU8UCKY67dfPZNqpB3m3SQyJqNHYGa6ggEDmPRrqSRpP6bMLfVtAtMzb47wBkC1WVjU5Q22cA2v7U89ncB",
  "key34": "41Am42guEV1s4osUXqqMUQCXQNTRUm9qxtGg5UVAz5bG4fwMmAg6MXWoCqBGfQsvenrZwW5EjDRaPyVGFRdUy7Eh",
  "key35": "4C51HhJ5FqDqaKkEBmN2oq9TkwiMgEx6jfLCBabGZ5R4ZSTKSk1AQmre36Pwrc3daPL6q2aofvfGRyGadt58D6Bz",
  "key36": "2GSozJXf2fwVnjws82otggVmtd2SHsgXgvvu8zUxPrqjECXfaEkFofj5E9wiGxqDPsDZizo29Nf1yjjaptY68pw9",
  "key37": "2AVwWzf8gXuJfEribYs7wFSrYmiURyzkxKm4N7TdBaVZWpjSdZmpJ1n3gELp2AHq6Uo8EpuEknf49Gnu7s8u7R9w",
  "key38": "2kDgtQJbLSZoJHR9MwsPcFsmvvxefSWFBkgmqmaQ7RY8PXASZePuv3f4JBBp6YZMSNDDE5gyUGp1zvMiGHmCCosM",
  "key39": "PwQMoydqJwcC5xN1vJbw2AG6YAHcREGCs1NJR3frA1rpb6eyaN18mJjGG92yk5qcFd7jZ6XNprEfD7Rs5P4SWbT",
  "key40": "BPnrSMbg9tv37YfBadvuxhxXdqRmxo1q5n5bVRhbvZvSac5gHg3xCDdzrt4gEhgachz6QTYnRmiEBHXCRqgCHTw",
  "key41": "5T2bPu8dieJtDWcLetBt8mGY7B4bYoX7T1WerTokMxiun3dqEDFsh4hsd7X9jAs8PQtgdkmAysiemq59AwgCbhw6",
  "key42": "5cYN3G6eic6xg8pVgQBD7aqzAtdNZUzWsZ5U4JggSHKRmFRJ37D9kVjbStzCiFq4B1j7vfj1aV4Ehbx8CeG54Bh9",
  "key43": "4QjtZT7YXvheD6qBoEAzPSJDZKR3LNprnK2NBuyr37iivXpo4GT2VHzLtgNqMCrqY627vGwHUVu2UV2APSPxzk7q",
  "key44": "5hwarVAYdcV1ckFyWaYG6uAwaQFKp1PmDA7SLNKpWDoG5ogGD2vkY61SgaqyJVWvPjdBDcE1HgemSbZHfe8dZijd",
  "key45": "3xQDjUQyhahuoHJNXoa9P3jZAySTurFrXMGo6qfU6zeeZxcUfSwyw3VwbstgW3m6rLvFuEXtLHUmsRZFyM4QmJsq",
  "key46": "KoUMHdDxMk6hhExqLJajNWM7u5Ddwueeb2Doxynk9H9VTV4tfeohAssAQpuQDPJ8XsAuwXAUXZDv1RfC6PztZ21",
  "key47": "NXbsUrpYnDBa1J641iskjcjWwAz4po36EnnN7ziBvUemChPS1XbDzzNZUQweNd2DpbtCVpBTocu4SX5gvhjNJop",
  "key48": "5NyAABRSXSsUWP5s2wJn6UsacD7G27mioyHcLg6KB9MWz1XAMaUegbMChtQyUtHcfdvj3Z2SqsMpQU8rCdTB8jF7"
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
