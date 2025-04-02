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
    "2mFKU2xfbDmpMgu13tnnzq6Vo27FBaG8QiqjnbouSt98inaHvwtnVvtRymZZXq2Uvgvr9zHPmmnfRRrjABDRHnho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFZ7aZKVfC82eRp4c4pqfFWCMbx6pZVyhmSfGrfKJua8LM1dGpJ2orMvEisnrSADKCgZHWsXSAKy9HvgNnqwH4H",
  "key1": "4musnAxX937qtPc6UrBrZ249duxA9Df67bpS1Y9igcwZ6b43CgQkn4yKo7933dBCEdMUNRj69FyS4jcf8qibErFL",
  "key2": "3JWqCPMRTYDVHUF3fVSqrMA8BStFpHZS4v3XhbzL5coBg3sJxej7epGkkVGBtP4AXVaXqupzfAPSSrhn7Sg1zHiV",
  "key3": "64hyndacsNcxAjXH9PX714G5wEQoMUoEqvxMVmaJHQ9ZKAbD4xZM36QivbHqmzFbm6XTGoMpXdhJHqhdMPJqiju2",
  "key4": "37JUuDXZuhej7QXp7d3V8CA6bGmXwAjLFNtGnn8wdqcGJiQAucco8a4Z5SoJxj2kwa7gSsqoNkvS7FMwCCyxFXjJ",
  "key5": "54xvNEbFyFSUWT4C1hVUKfiodbTM2AusSyjJxKJDx2c3Ms8vF2aTAkCdd6334EjSKhKLd4zcczs3veZP47aah89X",
  "key6": "4mdWyvSBhTKCgFx3jCBMQp6DMCUYcXhfrjQCpB9ep4GcyPtZencmY8jUTcF5Wv2yAYa1eFw41VHhEvWTfYUed7sP",
  "key7": "5GcEQeDJDU9CYsZwWNMCGn1Pn4AyFs7hD64vRvtGzV1aJDrcQUJP9v15c39WZY2Kz1zmH9MZWWLznYYDR1Vf87hg",
  "key8": "614Y2d16Xu8HXt4Jm7y1YaSmXpr7r24brBBkJvFpHN4NcAMBDTNHXhH7pLu4HSMfHCqBvCwfS1ThSu5GexwXTjXM",
  "key9": "56w5mwdSgnzCoAvw3LRUsikSCkr3FXTo9VHYTDpvQNzXf8RBoUDuLBXdEArHVih7nVx6HxDamU8jRAScM9w2YgJw",
  "key10": "3vP6XJ2dmcj1poArHsGc5nhyVgBtoPu8duSRVpZgChNiTQJyMZ3JDuzawKeaDSYUEHrwnC9KXeoUNdbGm9pojSbZ",
  "key11": "QVDp33zZXhoRSs14Kdb28NdwayGWxFPbpGgJGSFhMewMBdL2DvAeUFyvY43Qm2WMb6LRdqZfHtegkBUYhkS8aS5",
  "key12": "5f5KUdSkR26DBQqtKqDfNoZgLJk5Sipb4baHBVfsKKaetowG4V3DRhvSJ4LPx4CYbPUPU1HhXX7fzrt9ZGQsvnY9",
  "key13": "4UpToXvKm5ELgh2g8w2kB7oV66zNEg6BnCwS81dkiTAmQU1tB5FUHignzBkpYdjDfH95Ub2mNQvQxuCAT2cgK4pC",
  "key14": "3v5J3Ju8YPJHL3MQvdE1Jj6sC9UG8jmuUtUv7yRafpfHaTWW9z4UnFL9HM3Q5r95Wg7KQVPTvHR1HygBrtA7nSjd",
  "key15": "3sDR4aLQdfXcZ311Rn1EejMTv1sepvFEhtvWrx4mK4P82S9qQjHJixxspUJ35mn6F2yay3USge86cvVcABViRWL2",
  "key16": "5SdMJuDXgt6Tr5SoGFrgHqxkkxzRvywLfY4i4CxavffRPcxBhaasRiwNjLNaFbSg9W6NRbrNkrqdUv1Qzby2upj2",
  "key17": "3rQumWHReQpBDmVVKPw7GF2XksGVyUDUiZ9eu6XwcoRXEK5yo7WUXMzPBwDW1qqVmpHQQyVuRamg2PPEM74jr5sa",
  "key18": "3jitXDmW3oBQWYeokZYW4PwtsM8ZdaqEXWdoXgXQik7QU3RX4iVbrJnThAutVkApei5aL3fyGf5RAzoEo1RhebSo",
  "key19": "3gTZRXBGgEPfuL8Bi5PzGadSdvQTWod2L4hNk8VejXsgYBxAVevS83VtTZtQqrwAjpQLag62iDP5k7uNQcWitt9A",
  "key20": "2PLkSvpRnSuAXbdQuxw95M3HiqesRjT6qGt6s2iLsE7rmyJRMXCFjUYnTArBowpTKkF8qchyPuS9ajAS9NCSHppZ",
  "key21": "4GQhasiEbDD9fpdm24n8AaeV4d6XeprUar5bRA4MYHL4k4vFqNN19norNmMgD5MHok3gQnFTUBf9qtfWviZBoNiL",
  "key22": "411jLdzYiKR7iAs8WGsNS6qM5f6bGwzAgd1cT62fHRZrn4yBdhXBtpA7XFWQ6AT5Dgnvz2L7pkgiTcVaqZAJQBY",
  "key23": "45oTCuTvQBUkKuyD3nZntbzrAB7fkq3cuvSsBWKAgHyKX7ktJ23EDf1pzYpHscbvQWKS22Vm13iSJA5rw8Wps5g",
  "key24": "2UFZeewPfvQrrxnvWAC8Ap94U9BCW9ahpHwo74ymiQrD2ornwRFNfEg5xQRi5RY4cdnVsQDqxoyYi2RtyGBERVQN",
  "key25": "25cQoEy7ZAA1nrF7StPvyFCy6d32WqpUsTNz7RxqyVSVNAmoJaX4CDiZriHKdmqr5Qu68em9iBrCyDsQkWAtNyck",
  "key26": "5DHp8c5tVbvw4p88rm7t8u4yXnxpmFiykhB8xsSfLKLvAMjzpJFhYzKhVFGFZvjaArkhw4Fh86HmCgSiTYRTiL2e",
  "key27": "33a81ykXKGR6gcEVPzgwd24Km5b1k8Pf389C36Z2iQ36hxrDZEuhGvUZFQ3h6WJmDsGacGJP769KV9WPcuu14FQ2",
  "key28": "2YLYhV2u3oBAdh6f93PqpXcQ2gPv6mDS2oKoD79zH7Pn2GX64PvsFycnnkZCUEwARgvqnesCa6ba4j7ZfH8tCrhZ",
  "key29": "4FKs5658NkWJbPnvEAJC6WsJXEW14xXzA7Dwi7UoegYCFGTBygVowDUgCS7eeYYB6T7jzd958V9mtFKVxT9dzVL7",
  "key30": "9WGTPPRMZiy6P9CZAwE3qJQrJHGH8XBAkhvpzcusr3Rkr16eNbU5TskfQaK4tVAoAzFbdXxzDjA1PDqJtTzS7Wa",
  "key31": "66jVCnvnKE3qjw9JgXprfF4qCJXStRV4qWKThmfghfmu2ykMSMLYThDUxQyoHNZAM5BavigGE8Gb9VwiFNiXQmLu",
  "key32": "2nqbpiUueb6eJnUviNvHYKcwCMKMd482toAHcGt12Scm61zD4NrpF7U12kgLi2wFgENmCqSMyLkLiJddrE1W3es5",
  "key33": "Frq9aByEryRP1MRpeEw6qG1hQ9F6ox3gX2qvkJaPccmtW1vzREmLaxQ7miGrbHHw32dtcPbqhbVEfEx66Cbe2L2",
  "key34": "5rRZLHQeLaPFzNJtQ6iiZQXC7Prz7jwjxVDsZvwwb82cPhrLtVyLi1R468qxzEGUXmPmigNtCA6AtFdnkBpLokhD",
  "key35": "4mXgdzEfUtR7piMShZfj4hrCjqoRmswVq4uTwcN5GgTiFrHWawC9Zu4KxyN4eSHJbeXUPXiJqfKsvvF4kix78abm",
  "key36": "5tHzgT3iGMfXdb1YKc6F77qQw1Y37r7X31uxRJTG5ExizhZXLg8iwxyY6dtTDQM1A1VjVKoteBN3YHSndpL53p25",
  "key37": "3sbnXZKAcBZvQBWD9ivnictbqs6yj4c7nGvFFdhvBsjtpCwaya6L9mpyfveB1ypKDtg6FGrLzQja1T8aeY8xEv3Q",
  "key38": "5KdwTp2Q3DCB2qQUpDPWneRSh3tTYMZzAPBtjqMLhYomfDBdNPbWuio3M7tmyfJ7XingbgxDCeRzghoqfgPxrhEq",
  "key39": "5LAM6yr7nWCyfo7LCi2pySGdZp4mNZq144YkQHyFVHXJzQqverm8snbfhfJWtgx88wactTRyqsfpBUivKTz7Hfyh",
  "key40": "5UdBNWBGWDkh8SwU4byEncDb8hv17gVF1RWk5LNKaP7T5sgN2oYtZAqY8mrL3fTX3Dz23TMumTt28x4oGHebH1iW",
  "key41": "2zkGLa6qeapjf59aqenLo9JvyNUyjMEGvZkhmbysWxMhkFqXHkWwdFyTqR7efx3a5Nnh4iqapWR7hHEZVLgNUJDV",
  "key42": "3UrZPRLYudfM922uZRJkgxUQuKqqEtpSHvfETnJWuAbY215ZXUawbN51QJjXnP29QpiXADmQXyFQc2WrFhc3Mct8",
  "key43": "55nwwGgKqzr6W3AFBtUNEJy6tNEPFP46LKk1yQDAjYMjcSkU46FSVtmb465E5VkcTqj24NJRH9qomUzd9XRWVsAN",
  "key44": "4xBKT7MeBvCQjxjBzQXvvDycxyn1nBK1Z2djcyb89pvjseap3GxFw4okp91YbadsEfkC5V8LFUTaghyZRacGbx8s",
  "key45": "BvsU1HL8zSZe785LTa2VRKqxXLAv1TYPgNs33qLHjesdWbSe29vXi6AJYaFHU5TFPbwhDBTuyZRXVcjSP8t3k9T",
  "key46": "2qM7v5EzqkhDPJLJ7EqYg4wRp8LRbkdGznJaLGTweSuLvYD4JS5yMz5mLXVLicn4qrWrezhnhTj3jHTcrQ41mCf3"
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
