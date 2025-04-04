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
    "ass5wynW52gKU2hQmad6cjbLqqYYFW92btK4SGZTwW1nKWjDey5KXXbrd9uyWfmNKtuLu8G6UdW82md2rFiBBvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLJAFXCa91zKK75Ladea6EBiRces4fR1WahDTMVBTQLvgBFdqbLimFQVzkwseVq4AASS9w7jfenxd34yUEuppK2",
  "key1": "3MYM7KgWWNYSK9cniRc94voJ4bdajssE5giBKYJmQ6k54SD4yRtydDCmLHkLmxr4JYasUzQJV2FAFWKomuMCZ4A8",
  "key2": "FzsiBXpmnxBHp9czioj1SQMwhQWnW6Sxhw6qphT3RLVn1t8vML63ac9CWNER9f1CDNwE8ZzA2Ypsf3NRZsXEXvt",
  "key3": "4c33Hmhoqbup7hwK4sVvSQUnWGyifg4MxzjTbX6hJJmM6WgS7u4Ky9xsoj1Az4gB85gsUqvebTzR2EzniKLtSfRa",
  "key4": "grmAdP4G7Nit23EUvB76hTMjnic7ctwYL3zY6QZmovG5N6u5yqY1g9QH4ELK7zuFTC9KPXT8cayBi3TFcCMNZ38",
  "key5": "5fyyXs7F4Vk91Q5zKinxZixmRhEaQudnx9E6VrFSKrUv2y8Usr6JhiUMCtFJq3egBf43e9SuZkMt9NpHG3xvzCBP",
  "key6": "5htWB64x6JuHwkduxULJhP95H4FGGpLhdrNKjE61XMa6MKmgHVEjh2k2QsGECwM4ixBQUF9k4ZB4XRwL3kg3Rsvs",
  "key7": "5wKoytaCyC8P2D7LyReCEX3xTehFEPuqjLNUBfnKninGWjmVcrzQHLXRQDjr7C4uf6RDJWbda8kVkZAgr2TRU6Ju",
  "key8": "3uGNgH5jFnsHjxzgbP9yxFfaJ1FzqSpe4uGRL5yXsfZthKtRgxLK6B4tk2sCKRMEVfPaGhNfSs4Gunqemf32PsYU",
  "key9": "4qEmpoD3nfGQT9P5CdEnXTfjE2CSfZHGRZ66YDCHEMKqir5xSnqnBSjz4RnVXHocP5YMDzxa266sM8g7zTuojFSW",
  "key10": "6bBaFwUy4QFCUL1D1TuyiNXMfa33XAbq8MTbmCidPo9vaQDTaWv1aRsS9bqdBYNtjYKshL9N8SvXxkgVYzrVuJA",
  "key11": "3bAGi2EZsjjnhebsd8xRRjPn1h8r8Rn3CnjRYwvpjBjW5iXgarJzFJCXKp98Zc1x55Got6zdKGeyJQwuneobqrbt",
  "key12": "59m5mtRpg3L56J4or78tTLy5HL6BrmtkkVr4qBkQ9w7kR5JB5iT9MKQ9ssjiQFRRtope2dT2MP5yEGysH7Yonu9x",
  "key13": "sZjhMT9TMEpG144e7VfpKWib8gxg9YH35MEEH22f67j15TdQb6cMjP2DzUCjtiDa2DBS7EpLiB4xSRvBuEtL72D",
  "key14": "3tU8eLHdbfdEF9Q8McRNFr94yJnDDcTDKBW1EohpzZ6ZYNsPyNi6SMkysuY2a6Mz5Y7JuS3zDcwggbXXC8kiBsDn",
  "key15": "3pXJLYizKBAPhXpHs2knLWu49ngu3Ekc1u2oZgbaia1GZpQzd1RbfYkSpH1Smon7ngvkCS8eK74x6C83qtvAAXht",
  "key16": "63Z2N4ofXk8NeXxmxhK637x1YnHAWmMo4axgv8ARLonYXs9YPB8KE3wUa1Rqi1sPauzmqYpBJ7onhCctTJ25TwmS",
  "key17": "vgeLdx7az5Khsfkg9NE6vjsKngrHjWdhWdXB9Tnadb82s9kfMjmfyC3zcTNkjXcAJ8Wvnir2U6hSX9dRHmmnzTA",
  "key18": "4wpoWBSC9WV7VXGSLrvFg5anPfR2xJBqMzHASEA6EnSxQkdfoDTbK7bJG9RizkbnzWba3rgkZgyjecEyXvXpC9Rc",
  "key19": "2iQuJKZ2sYL4uKAcxUUCAmMarTfh4xounYdvqYSRVcZUUgwitFrq77QGAreEbAPBvbqqDZnTeFQgfy6TTJJaHtdP",
  "key20": "4GyA2ifoLdydF3n3hsrTfbU14BJs8q7uZcqLZe6vsLQiotAk72nRFHpA2jK9BPDG5q2o6UNK71PDiX6VG5v2dyru",
  "key21": "zmtneDrVt9Law5pMFvxfxWiUbFrw2dXZ1gyYssjhKvZbtFfxsvDqiviLF8Fnhg6jguwNHihHS3wtGStXSjeTCfB",
  "key22": "4Vj3MpFNWkTsJVCZ3fRH78q3AYU4tzG9HBQR5WssprggVAmXTGWg7oekWx9x24mNL39hQjRWkNFmk9vKk9BNnsCf",
  "key23": "5cgmL5oT1hwQZBRVU135a9wiBWh5TxFEEFkueZUQgzxoSnfShSavgoAaVwKghVXab7Q7FUs6BhTnJMRreaqKUHFn",
  "key24": "58dK6S6EXe6cbEzfKHasPRFDqrkfS3jdyif6y1WcGZ9WcN1TFtjxEQGpUMzPRcMpVmx1AJc1Rpqseg1J7Pk26Vg7",
  "key25": "2SfUcJbnaMjEa5hfEwtYMvFAxnvcwMFciHGBFNLJ7m1xt4mmTj5UkJyuUcL4C4pj1wdbizWgqExpNxbJ5ai1D58z",
  "key26": "RaGxn5ATakheUjC4diLygQj6SYWfSqfgA1qts5iMEkKfsphdrzvnbGW92Fn7s25BKV9XaGvbVr3x7ueMdUVKzeK",
  "key27": "2orrEkKPD6v2soKaWzRVNzs7sGDiCxMpHnJWyLs8CLmN4KZC6eCoMBkE1xcdbxDoFsoUhVWQHFnNPPVfZG9p5gRM",
  "key28": "5GPMPse58GtT4CLSVWKcGZUMCjBECfPe81G3AKHpjQ5YiUQcxm6xYsSPxKu1FWDroH9PKQD4oG2WdjUaTgKQg56J",
  "key29": "5riHseBqrap3oE7sYDCUNUoMXG4d2FV5G4NtVFK4tKggkvD5T9CDLYH3voqaSzupHWrdKzdXx1iopCinU1yDnzUC",
  "key30": "4WHx31jamHzKazkoZcqP873o1Wi3ZbPgB2Vbq3PNJKLCNyeiVZnkB1kbjT4HAy3rjRLvBKEXZaQLv85wLgWXEnED",
  "key31": "pGfcoYMFkA5RLJdLFuV5QfrErhxSwpcCDVR68kpvQt8o5YR7zJF7sDKyx4SfdMWuqKn7548VqCY7MGihCxoq43J",
  "key32": "5u1uv89gaoxVcVni53e8yxU82n67aHm2P7fepeXs9hPgdVLfgUvE7yRYoe4N4NeJjPo3mZtQMFtkgWNsy3jVpoXh",
  "key33": "CPLZyDzpzHCCKnGwj8quqwgmZ11KFdsR3M6odYgza7MXGKxfZFSxxrKCyb6hS1MWRvPY84z9BL6gb2UPvJVWPWq",
  "key34": "473jv4bbkJYP7viJHd1XBBddahwYbMwejTfyhBrWCgKsw8N1azjzdvWSZieaY7rEmRUFCCHjB63x5qs7JELaLvSn",
  "key35": "orDEFPqdvRgputbgrXZd5ekRRuDdeRRnc4T86PmfvfhHQXzpRc7sVGhDE47PMHcQJXxuzPuZTCQJ3d7rrJmMxci",
  "key36": "5acd4bPGMUGVZeQ99EAa84fbp8DbJoKjgP6sj8vnEdPVP1agzq5Dz5RU43VBE4qet3ajoGUTK4m1i7GTyyanagKe",
  "key37": "4uJJox8KBXaM6arW4KCb3rUZH7vCqqdyGnih4zteNqyPaxpNWmRfL6JQNvsV4S3QR4ZDPUiBF7ocuhQT7nfahFKT",
  "key38": "4QY5o8vQMFcXm9eZ1wwA7oJCr5xGjZbmwbAnpbyeThhPhL8G5LFhmikk4huqK4991Lgc7dQkX2D2Huby8p844Mms",
  "key39": "3R6vshkMTTam5xnLLBwHs47qGYzU7bJMJEKrwqe5JzNBNmj2REa4q9GFGqvFZDBmvrh2sQdNAiDRS4tHYqUeRC9e",
  "key40": "3f6aE9vbzNPM1fhRtDhZRiZUpcFoqeydauHrmASxtWoGMwJ4NpRf8ipsdyRVsF2DeN4i4F6cR5dKCi5z8HovxrYC",
  "key41": "4gExgk18P54nV3FGWzx4xssGmPvBSLGr319tRtf8pNBpozi1SNkj8fsCQoRggi9FYPohV3KadxSjCkUBNmzmcGNa",
  "key42": "48bGL3WvHrrG7foAoEqsmXJRSeebF6tAP5Fu2wt6uMwrgrwBeAsnQ6pYEKLk53svAQdpCU4c1jUKjUjGUmtcm5yP",
  "key43": "4CMqXYGCYi48eJ8J7cHMQc9LdznjanhUjYH8Ld8R3dHEDur53CY8YRArQ47ATxiDNG37PEER8PWjwxsHxUZEWk1R",
  "key44": "EGhLCPT7rkt29guAoRJjAexwTQzNL3UHC5HM3v16QuePX6u2JP6vAa4hkXkt5NLxFEEvWW7wiYD6QYhyy4F4DGR",
  "key45": "3wkQeG3B5PHmoJYsVHMHT6q5zvigBeEJXbEHJm9TA2WpzdPXKKwjQQJ9iTRuzYPBr9q51qXSXFAGmeGBjAM7eZ3e",
  "key46": "3aPx3t6mvMMAFXABRcibuw6hyB7CMAn4cs1aXmJjnHAyZXbe2TPumMmBVbJPq2dstYto2d9qYAp8junVgG7RxK7C",
  "key47": "529RtoubjXFhKUjDEyvQ21MXT2EmzfHJHeJTkx5VJVBouTMCDyEHeRqwbuk6gcBsfL85f6Vz3fAz7kaDEuRA5xGW"
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
