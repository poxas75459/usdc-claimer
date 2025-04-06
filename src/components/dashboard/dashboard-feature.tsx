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
    "4iBs9TkqJr8PVyCdRRjqdF1aciUVuP7tzBALSD56y75XKhsYPVNkUt4LyNaoen2CxRTXaet3HKb5EFihwBhUAqgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZQVBbNXnKTY6YgT5STUaqDovY9cRm7mYUvmF93APaZLzzynZgXkM7eo2YQQ3jckdvCB3R6ohSrZUhPzxd54DNx",
  "key1": "nUU3YhXhh4XgjiJtsAb9TMn46cX6G1Di8AnoTQpNBE9KMct6okqHRDj4zyqbD1PYmTieJ5hZbweZwjVdnJtW5FV",
  "key2": "2AA44zegKumAUCat5tDqHYDwgHDU3zBrGXYXpUUbkHV2DscKLwRBw2Jm95xG7SpP7pAtDYPCRZpjxwwjNpukNwuB",
  "key3": "cSFeEGNbb9UrHszktEh6iyzaD8EkyUSiAsL8KFpA35HYYzo3TWGUaFNLGUskUjrbRZPvGudt5Dx9JkSxsb5muiY",
  "key4": "2mcQWkzWLy8wwgVfiT85ezXAFBRx9XGXb9ehsKJEoHCDD54iEPspPhpYGqfcjifKD94PEQeV7CjtRvQSjjYjZHAW",
  "key5": "5Sc7FkTHRQs4PXkWhvtbxp2s5L22oJop828REuRhTWHyyxNrGX3V6Pt5cKY4U69FZ2VGc59KfJokXHrwk9c3NxEi",
  "key6": "cnUKi3f6JR7j9jooWkjMRwDNNw1LUHPkmSHcwAncHG9zNatLc7irHbMECUDrFCLLmF4fW1au4ioiymKP1ho3op8",
  "key7": "3KAZurhDczdws46Xq7opX2ub1dtFAb33QTWMZnAK4JvruHSt1MVzkR1zpQw5xQFnJSwEbNRZDrhnK3hmRWs1SumR",
  "key8": "5pgemJvonsuRcttv1t95imoYYRnQjZ4J5VsuzxxjM4JHgPB84HDHyjiE81BKs6kLuR9o8X2sAPwdbLAjSVbKahsx",
  "key9": "3Da1cNDaGUpawm4HdAzPsCnSNxKDG5ACfT2TL8uyafGFw7Q5AZPZ3prsESX3BtwNZrHJbKZGPzRT54HBiSrPiHxg",
  "key10": "4gjeA7WtA2H99kbWQwH5m4fnU1Q6EmSRRE9kLfkvDnuSWyQtMemyrDsHxDx1utbSa4mQh5BrgXCqKtktP5Y2yVR7",
  "key11": "7p6gjTzEAfSx8WiFPUD6KEKS7oxNCeVGzFoHhuuvuGnfc6nFevJaLXjVVTN3i7JSSqKtGQmGs7wxUsnyDi13fCP",
  "key12": "k7Ez6Z8oAvzQtSqGDWDKs25puEvzSatu8zQSmBxpH2cGbXJpTwHyHtmo7Cyi61mFi3Rk4zZsoC85nviZy5EVE1j",
  "key13": "4bsdjNxwKeh7NPxsoi9mxuiMCn8uR6qB1S6yXB9aGQoKxUtgR8FqYQ5btEXfRvWX39vtmDDR3vnKi8hpv9ZyA7Pi",
  "key14": "1GzRLgnNkg61LXhw4w9QEaF4oiRB2mB5XuYLDK6LV3DabRhujjcAjVBS4Ft5jEVJVUi9bxDMxD82vUC68BKv4eW",
  "key15": "52XD7xHjwgFX3RoDByWhgL8Y3CrABHkQXakf3iepuNMGtkyBgZxoEKNj6f3NdtJhBSRgRakW7fnCGLpgDe11HQxJ",
  "key16": "5vr8xdzvFZCpf7kRWEtcbbkDLTiBSnSngUicRsF5fQYTUC9SyE9DbppW5Zr8KJAqHsi5j62d8vi69itPWZpQBG1J",
  "key17": "UeKz3PKQbj6JxgrdNQKzawMXzytYG6Ke3sXYLGtbxAkrTz1opAjoH8JLCEk4DPEknRXV2hnb82Kf8b998oDCzPV",
  "key18": "4yvAK5f9UedPxdnP8tKXxcLKdWPUWB2JXUaVgmjo7a5Rq5jMsZULYSjrHnxZTb7ibCwn8EG9GZAfp4ntjuFeoqnP",
  "key19": "381YTpXmtNaeRKMj17mdeDjEwc4NWeGenUoCHTUEsdYodtnJRZ7rNmduRx8ME4tSt74iuTq8rAS6P92QM1gtW3qT",
  "key20": "44KF6Su9wYpU8CHBZ3PR72yKUkJjUAgqWuEkF266Zu5LfokxfFbMZWumzAphE8JxRsQ49w8Syf6CkWx4fLbtDEjw",
  "key21": "4Rzs7V6MKVjwirUPQwd6PWgwHRfAJsDhxbgauHK5m2CFGbTEed93EgBGgRVgM3JvmPU6E7UpyqMzDX2sC1i5ogEM",
  "key22": "5BMhRbjzdRfRpELY2SWvFj8mYQZZU2DoDDTYTJv96jHyRMUmAqaG5zDm5eLJL7p1NFq4dkfU2zQXb8fytWMe8bSr",
  "key23": "p254THn2d1vnfV96DnD6EPyYPNCNkYapknCJQBvmj6FZLXF7KPL8UjHp9vHfSvSJ279UAyx927r4VYERaxMpZi7",
  "key24": "MygJxMbUK7qVWtfmEqDeX3hJ42sAPFUuuAVdDC7uvw4qfkWSPGSNjA1iFGyBvnToY1QwqZaLZfAuv8TeMT85bxS",
  "key25": "2uHsPn2NY1JsXq7AMYJZd171bWkpiHmHqKTWJer1P4yEDEKWAcso554T6qwqC35fGhNQUEVSeEiFp3tGdHNAv5yJ",
  "key26": "5BEN5k8jcmPQ4bhY9Rqo2wLvd2PGYGMTpdz4j9FqVCh4NhETBrwAeYrcMY2XfJnoRVBqMiUST7hY4Gbxo53DgMJx",
  "key27": "2kDZb57MRbyDyJfad2Wv6f61TRPhBYZpwqNLWL6omy4tanazetNJyQFtztjTQkHPFS7E6foALkTXGmTfeF5XrMMG",
  "key28": "29TKRfbuz8Quwd3TD5X11UcWMkEamkRXsHH1Ma38AJhjXNNRSjuaJsa2g5SSaspo82nuQ57SFJUYdXQM9FNzHXJD",
  "key29": "2uBDH2KQEtPPUbFcV2Lgm5mcrAZAdj9sACoZDwYr1WbpibBsPySg5wsawDWznmTPq1SBjZounfrXfXaGNV8yspUp",
  "key30": "28nD9GUptgc9q6ugXo6ycfaVM1FqMJAeAwV4z9zmC5BsWiHvhrJsogBbo6Ce6Rk7T5JxVbi2yZUbyhBrdpbf3ZbJ",
  "key31": "4NPTca2UdPEBa9oKjkXDvCf87uTdB4cvTvvTzmLdUSh8Gch5GejandShYv5FP66arzByYU2mkDLrhqvo8iUThF7P",
  "key32": "5kHghQUQTRcZftKrihowseHKS8LTFULjN4bPEB3PmxJ9dB3BYG82M59BT2ujUFBXiiU8LkWKjxxRX7xA4vFHUJLR",
  "key33": "4AzR1cg7UPKjCrbxVLVosXEUPdnGS2YEvS1tuaVJ76xmeav5VpPTP4VCqAA84YqtKvoesB5L1pqvr11NeEyuxVfB",
  "key34": "5uqiNVXFJUHzaWX9YWzwQGEHBnibQPx9UWyAv3PMWJHWV7yNJ3LfYW4mK2i7tJsFxCjFdqQNn935qUpDozTogpSH",
  "key35": "2ecHBGvSMizbQyTYmWiSNciLtSie8UE7EmryqdLs5BKAjxBJgWabLVSqFByy59L2xARjZnKLNm8fiuuKqrvg1M8e",
  "key36": "VAr1uDgwRH8EqTdKPn11FyhqdB8wmGqXVc2rUij2MGKsqkiPtxdGVfAvWB3Ls13TuySnW8wspauVFEKJE3Vxukm",
  "key37": "SKykfQK6ktb1wxvRRpe3c82BkmYqD5wCGgayd4oVKrpqYCyZGkRaXa5TxCKibhkGncaPLgSwwyaNcALpnhyyAEK",
  "key38": "4oSeGJwhgchqizLqZR4SSFfMD96osiwuSenA3FQpmbdN8B7ddiqthzmpxXJ2Z5frNKdaS41QFpuUoyUTYxAbxvJs",
  "key39": "3VLFF7tCSsrw1oVxFoSumbP51j6D9EEcpYwe5cPcWGjZjdfvmjjRZNfnmveQYjNHmjve1yEyw9GdH5drV2hAgu6i",
  "key40": "57TRKuDSxB2SuiV8nZiQPrv4vXAHnP3eEhv7PtS4Srs3CFTeZKLfHcGCKdvfDT9uTB7bshLPfXeBU2zfdE7kQENX",
  "key41": "61PoUFmvnyhN8y91HdMRZVTSDnksQ9uSkG4nvfV9kbLKP31FHrdUYzkNQWUTTbBDfqsYMXZ6oK4c9pxR2smktVkj",
  "key42": "2k6mn7rnvRhCjRV6A3moHaJXq8KDwBZW5ebw2e8uS6xmG63GGDqLqmeoF9xvPw2cYwqBRpgoiWKkhxModS8gCWT4",
  "key43": "42ktS5AzR8eQZG6HsA3P3hXdmVGJSGxbQhJHTpZvaknsP1vtJUqHZVHyg42QwVag33Pn49UuX4KNT9QVc6qwzN2b",
  "key44": "4ktYCcsTicpqZrWjR4feH2wxFjuSBvqAkaDtu9aNeo7DhT8fjA45QqukGHZH9xsJNuwGzD5hwFo9uAf7FWphX2jn",
  "key45": "5X8S8HtHWkh4BS5s3veMhcbAY4em2N4k8EuZ4sKVnTcBhigEYbZ32GM1McdzKP1fews1ditnzRpyN4oMGjvr2tkQ",
  "key46": "5AB8fHyg1dVQCTMfwgoTzHVDeVGfwHXpv1QXceGtmzueQNnMBXfzySk5A21Zjo5UNWh8sTZeeAEcKTXA7CXZVbQ1",
  "key47": "4ryy16m4QNPZhRRGYxmM9v5b5o3JV8SLTiMP7QuNn8Ap1W7Lpvh2jJU8Sm1ebAp9FbmXujmNQmmhtkaehpSZfEmJ",
  "key48": "3JzT2VWLsXE6d1nF7hoqRwMM6drg8rfBogFvkb7DqkEAaxFUh1V3enuGQcYSH7EmtYBbTDvyb1Nsy4GbkMew1jPG",
  "key49": "4JG2f3UxTyuDHZwZDhFMkap1iwtWETrLy4ZEnmpSTZ1cuAkjkAGBahbWGM29WBBiZFeSxyf9u8vBJ6ZVunf1NSYt"
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
