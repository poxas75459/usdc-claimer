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
    "iHKvvadhDsEDorFcmDCJgCdsYWT18PqG3iEvf9SCmcufq7Ehi95pKXECVgw5od4sqaGhAnT6wsshTNxDC8spQr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tp6zYWhmENmAbuBryLCvXGxX5agxuwCVdGr4fspRMmrZU4vnKKQEYAbfEo9aQuKDFSnqktWCxpxnTYCHsDV12dH",
  "key1": "2xAxN4L5gaX4jS1dYYbUepuJbyqW9syR9yqfoVAy3scu5ER8BY9o3Ys415xVMbuGmW15oAdSUPJ1EPkM8priNUjc",
  "key2": "QvZdCBRReLzeDf7PxxN3ZBJRyKULDhqpLNToMBjwtAvPCtu6zSAkybTTvaPQfERFtHWnonqamQzD8bDnL1yMrcQ",
  "key3": "sBYEkXTydBUW94CYUiKRGzK5MeoqMMEekRLDFXbpBfPcBu4pFy5avUep1pfps7rSmL2AYiRC92FuiDuC93g2WDF",
  "key4": "3SCYLcAv7QxP1oDkz9VVtvkfkpGf5LebcCELwEuvtQff9mZWrWyCDxxvVLg2hd5pZZNjD9wrWS3fX5QdEb3Ma1qx",
  "key5": "64tmqJSpFQrQmrVeezVwjNNyqp7jGGgexYt2CAu2qa3mMEKrQnSng1rti1KwDepiBhgLPpLfqg2votawaGDKLPRD",
  "key6": "22MLhsin1vAusU2SinNnyyXiP5orSsths2jkvs4Yo55WqG6eRX3nKDjNjsWq1TGSp8uyEETRNVyKvucgAQaMcBGN",
  "key7": "2hCuWmHtckBSUwf9cBriV2hwhwmFCSuWginohKedgEKStG82kozzYoKQg68wcJFv8m54VPhhndXyHg4mpensFCLT",
  "key8": "5ipVt4uPSnqyfW24FQBvsBf8RqnspPYxhK4pm95rhcnnV1qNDarwbTYAAiVRiZgR24Euoe6DV9Ry99qEbL5tkwpF",
  "key9": "92qZ5QdoJg8ipLKnZ4FLRT4UDRcxeJie7pVek5Z63jevwPnLLLDgkapWQEXe4863hEdiRSQFLURnKatAaUoUBX3",
  "key10": "3YLgckBzAT7emHEKGwidcZNjsX8nLGQ4kkygPmFkBz5wmc2ChErcdJwdhNRkyrYYkFyQxG5efpJu2GxiywFjBeWv",
  "key11": "s3TeSuPRhGaf3Cw4DTpA6Zbtr8Zx4XdLBtfebLs8RtCo4XiQJoipy3USsnFwDNQu2Abp1RugXDEBebQUnEA4gtv",
  "key12": "2nvGerwwT3ieRDX4EDPmGYjAZNhcpwh4VqST6BXXRRzcdr87fGmvLLWJaY9qWSneBbH48TMizGvXFWtiqBHkDFz9",
  "key13": "2mSTz56U9bACeSuXmJGKvJtupPz9yRPcTRoAyU6jgjibCvjZ57U2biroyEVuj5MtJFfJrsSEToRbbaUA2t2yv7dm",
  "key14": "67itK8AudNoscSMhBiV8GcQN6gKgzun8N6LYHGRPe5iHBnZ91fFdknVKJhREV5zJ4a8WZtqyDy5SnJk3cQfy58k3",
  "key15": "3Qm8ebVxwsR3xzzYntW7HGKEq318yWHbVRUhV5AaYr1BuqAhhwqVieyi9zPrdUJj5uUKM9WkikZBJssbBPaEmdKa",
  "key16": "2b2GVLPfLaProZsLiaYwUgSLXM5FyAkM6UGxGjJTxe4LYffmomTcM3jkxM3bR9gpNBF45jDonmCrSmZLSKoAszF3",
  "key17": "AR65F4526CfrPZ1gZYANyKsRBk3u8k73uAjtPx3Cmp2ysodHZbrKtYtgQ7nTosxBAAcQptBCRLyNsApHRxVVkP6",
  "key18": "5UnyDvcYHTgbLdMyy3Qqne2KN6NJnQ7tSzp4FvtoMGVm7a8uUDmF9WMbu1Y9zDV4915cyKTKwnRyw4cP1RWvZBXE",
  "key19": "jTyFfat9y4cw61Kfk2Xfw7Teafum6ao7ptYtiiyAVt6HeArAdafve5BNGvkpyjBtYdRAPZmqfm7JLeXsfnxWQEW",
  "key20": "2w5d6M4y9VSKiHXRChR7onfVz3eoXYfBosHhvJJ3waUZ1tRiTx95gnW2YkFd4Yu2Q2Vac64KBv9Xvxxprr91hWyv",
  "key21": "349ZCfq6G5bPCg3RUamayv7gpPR4R5yLApBiSLVC3in33chhqbaik7FHZsHhmqphN7nvETTSfAug2x9JWGUJ8tLB",
  "key22": "2Sx5zpojr2nosD2wMoiHG84CE36DHwHmY797sFPYkN7PPGTG9y5m8QQZ7iuihDncJrJ5GrKQtZ7ApEzqRTELsm1D",
  "key23": "5N2iASojGzZL8pd5md1bNHoh5KmJMxm5zMMB6wy47w5TpbLhggYooHDaaafd113XwDoN6pwWjYjYhPQ4j7Gpr12k",
  "key24": "c4hx1ryU2p7ep98ZxLBpDewKAUTdsjPWBjrSxAv6x8beQY3gJsdLUmrAr6ByYSq3TW5fdLKnEWtEjtoJU6K98ad",
  "key25": "5c5UUFsdE2KBudtP91L6bZ3oibn5SVd3vDw6QsuYMxXKgVqUTz46EBPuwzsvyzxaDqR2GxEFe75QZC6WebQvJ3DA",
  "key26": "2JHhFjT5Laz3bcdykN83BJgRxsx7mn88Lun9MwdxXqVLAfZE1NbPpfNoHVVkkJH2NBiDLHg7ywmBUKin1Vf5hHaE",
  "key27": "j4BKMfePtiotSqnC4dk4KSwYHKBs8iCysPDH6ythz862NJo152AndWsdB9rNWP1Lm7xn1bbkgNJELwENThSzfPs",
  "key28": "67HqcKj1iCiPPkQyMcpkJaWYkrwwYj5ygPbhLRVuNaDtSwNTPLxxRzig3FLV5PwNgWovTNSeXtEPkwgyohZe1CH",
  "key29": "4YyneBEhmTHgfbHCr71NhL45FNnbK5LR6gXAH99vsp4UKup1hj5z7RPi2rniPCEGYZhmabQZYxKdH3xCe8R48Thv",
  "key30": "2RdLKNxeAuUR5q3Mrw1i6ruTHkKMd17ByRn2fNLnCP3mjQkFht36d6AGr15FGwJJpdgttMMy6F4yEhqQYu9ZXLy1",
  "key31": "5bAH6PmU4SWZqTwr6L3V5ncyhgfmVuBBsGXq6xsXmvayYyUkw6SY5PhCwAWNeTsSPagcdJYN9WjHGPmXhxePWHPF",
  "key32": "5dX3Gz5arrRLsrwDD44PMHarTfkatg8EThRV1bryhFxq1qL8262z2qCAoLqYQ8rBm8xstViSsyZqCNxfy4McYKB1",
  "key33": "3PH37SK4foLTwTkeWtrfXJQRgx6NFAH953fXSiebN2m7UcP3Fuy53FRxXMiX4JpzGHewzwxamNYUeKkDcq85HtoT",
  "key34": "4cfU3P2M589oXHqezqmDrBBgeidRQB7DLDhaqvra6ZoMZWKdt4vP5AAksGwiPF8cTabKUU7nWicUX2sKgUNnuhBz",
  "key35": "4X56BR5zG6Fubpiso6seSZqF4Uj36iRa8FfXQ6CRwCnvMSJXSgiv34jm7qXyvyhL71jn8ZoEbPnia5jr7rNYC2xq",
  "key36": "613KUcxCF7Ys5DUaxdpiEUj9RPLyQ7C9x4spsFrE19VmQCAQ3gM643cDzUVv3v8MakRtfzFUmusg9vHgtV9B4QLW",
  "key37": "37NFxSgpEpGD5VnFJXk2NE3knpTur52GdRiqp8boajw7RsYCcXKQiiXio54tYEUBtaBSKW4s7EfQY6vwsLvUgGCd",
  "key38": "3VcmNpUrutsgeRbLnMTX5vF8R8iUaknd2nAFwd11UAN1nHXhMGu7Jfeswx1rbTUUBaigerbT2CQkS9GA1NjZJob2",
  "key39": "3TVozmgFRtdxMaBo95jyPmJsvPNBkoyUStMoTkVwFbg9kNiv7mAWUj9V8r5tjxMSumSUyWppvLXEr6Me6XN6z6mw",
  "key40": "34cgKvr9AQEvWRaHBzk7sExiEC9G5qJ9XBzSQKoDTy8Xget6HkUxZm3JgpgjTZdhUaSat5o1WNxodPbYEfV1n8uC",
  "key41": "2ajX1Nea7Me9TWjxuk4V1BFjFCMY5R8Ru3rWNiW2sU1ebDkBpPc2ZJG7FaeGgwcFjfRTGP4uh2u1EiRgdsCNKWPL",
  "key42": "iofEjg3ibNxboTdqgUo4DYqGWUuzyRiVUcovK5pLow2p5LVr4yQU9DtfnyZCwWcr13ANDGLcPLBsa7d4gJ8aVGy"
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
