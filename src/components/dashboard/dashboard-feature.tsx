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
    "2FZKj82RqfeLD8MCxrEgEebzMRqdDHhTbfGNJj4tB4rraFmXtCJTAkQsz3fnd1GakgUjpNoWKvanMzsLjTzuLqaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDe2TniLohcVLVXrCBEtuU8dzE8sdBSzCefkAkwwbrbAeXcBoN15Xrak7HRb1EFm8bbKejHBEP6XWyRELNXMLxM",
  "key1": "5fwsV5RdV8ezLWcFNsuAcyMA9nXHQpf36xGdfzY57XTiLk45L7yDRgP83q7LetxshdqyZyzfWQ6yVcn4qVwDjmBH",
  "key2": "2KNvXttPuorQkEpxov3Wv3C8sqvhhF2gyWVgqQsiWShoCthevDYn7xVtqRhiAUXgqZYk8sivtBie9zRYWUixYUJc",
  "key3": "2YLofZWdFnoKo64ru7s3eSwHz9tMtXBANneBbzZ7htZehKYhoqnrxXLeReS3xw7jE4rs9aTUGvzwNsnYf4QdcNRM",
  "key4": "4pYUdbEDeAkAcXtTuKg5nDaG6dUwcCbRX8DeBzMQfqz6DZCkQrJD2gY9DA3oGPS755WjZo2UAXYX4LEC42Zti8Jm",
  "key5": "4nFM6D478w1hXpBfQni9Jck6MSEBqdmcNHW9V16WMrkz5zFTsei1FTNcozqwNfnDawCNESM1cVDFLyxzoDTVB5aq",
  "key6": "38XJTdzuRUWPcVNcpGF8rbe3DribRbXHDTEMLYaMqJW2wNdKwrGhnsrpVpVQceMFpQZEgjdg73EoiBY1xhsx7r4d",
  "key7": "5DvFV7wwbekR28kGF8ymKmEicuzyCcZifNFTntasyyPqHN3pDxRtn4GJonN4nfsowq73R5d9KxjHm2a8WJXe5EDE",
  "key8": "3pmPozDFg61f8wJzbF5QAAWz9V5UDBgergKNnrKzK4v1mbfN9LuRWB14DvLkHqbUYparKbhQ9EJ7gdEfmqC6cLqL",
  "key9": "3V1BkfnPYc8KrMioE7ZCQgxgvoKY329WDA7ehR9sxrsmoptQngtZWPTvV5d53CEVFexdLpZKKqnz7BVjumz9qaFb",
  "key10": "59emzPwvSZYgpxfBrtwKuC8vZgoAh4ZVamxnq2zMwpHZpr8G3JQP1zhn3xvZQTCwWTUa961yEMH7oJ3RzTqCnAHh",
  "key11": "4KjzPuBt2RNo2Rv4XxGKqwivf8q3GYYAJETTrypsT2DJhp2Ne3qf1TDk19u7ZxoaZPCASWgsur2xhNyaoNSoorBV",
  "key12": "F2F9oLdoFPFLdEu2s8ytp6fMFAh55GHhR7peowjh4yKYfw4YgjpPZsFTGeQJKA7DVvvXP5821iwxpE9MeTToXSw",
  "key13": "2omAb6bs8yV6nvChuecUW7YzqtDXckHaTgvFZjspuJK5dXWkaG6gafQcUhWo6ALJ7Lfm7CeePA1f78Jg4ymQePVy",
  "key14": "5aX7GqLkfrCA3gH2A5gANhywQzoJBkYfv1RGLWQngowimH7KYo5Ja9eWtvqcDB1MWtcxFAQeBCuTsrPDCZAJDvpD",
  "key15": "dUSZm13CAjYrCQDCK1zz5C536RzjB7miEVUPjQGV7YUnYyvCigAg9my5dgnDWeGdhKa7rnd9g5xPhEtUHJv6vxD",
  "key16": "25DemJwELBora8aV76xjZ3nVYnhZLBJyP88RdNAioojKLnEmyJ4hYX2UWdebmJDJATLL8XfV8Aqz2hf2jHG1nUwd",
  "key17": "juTvWoVibhA3qfW6vq2d25qQAyARkHejx9EyoWEmzdGUBd9qruM3eBPcr843VN6fA7UqcZvZCNanog5ubS6Rtji",
  "key18": "5CdvNJcsZymBkYbWuFGrHLik5hJsG2DCSHoeBPk25tCadKu4KMdYQ6X8c7MV6w7LSFXr69aQrQ7eiMXrw678B8vG",
  "key19": "59DsfGVw6FC4WK9FeYTAo2d5VARXsXwzDQkAwNANEMvrwtBm1qxuhGmboVQApZotEXfs1vZVohTfJ73MhGYcufcb",
  "key20": "62utFJSx1FX71zawaivB6faPuD1k6cahHgdybMMBS42kkHgvR3gRrFagUFSThiRxZhLkWu7GXnhwE6EtQeMaEYB2",
  "key21": "2YCDNE4cdGfcUjxDzmVBYuKXr5VNWz11p2kH142W6JehYxmABYV9hNRghqm4Sfw1SQJFpGvvarH5VYSmwSkibz1Y",
  "key22": "PuTNTqX8QXVVKkqG4CvhQXDUwzK2JvdUcgLAHbQtmCZi3djgJECTfNdaQNB383NASGq6puke2zxNAPTbmab24jk",
  "key23": "4RVFEtoEuQZZ3oSfP6KbfF8bMXEZRvk8oPopYMZmFSvf8BVSBby3Am8aaxt7ERvbeUGQ4dUHmN4uxBvsAiJB2bbf",
  "key24": "4JnyU1kcXSRm5XVbk56wUx9ejtCYCYNHY3RR4PiZZZSyDHM6ebDo5ibkE4M5RtajErZPhGCqiizHuN1LMXF5wNcm",
  "key25": "3zQjmeMBRrSAECop6DeKi5ZgoHnNa5GuVqEJLvTzuCC1vk67ahX5q2KqMqHNKShN4TPfiHGStLuyoiznoT7jciTA",
  "key26": "2fWxay1VMLJoouvsP6xUYu2VaYeXemVDXB7RYn7kGnxzECKLqyTgtBnsCrniE3eLkUkxGth3mmcDYwCMYhLJ1y9H",
  "key27": "4sKtx6r51rPjpqqxKiBTGMzv8qVpdHtmA7prmqT63eABKBkF2vQAVcHThzUqYRkhDmrBqHVJ9UyQAKUVadYPv5Es",
  "key28": "SgWBfpP8Y32hxzvLmAEDBiCGeGdHca7soZ2MMkpkd7JRYgvdBuPYuvs3NUNPJCtX8AciLuuvZjN6FZXxi2fSTEK",
  "key29": "3P1K57gYRtxaKMEnyfeqDrszv3je7gu1suWAvLJ7kR9m3CMyjsLiN5cxvKPZ4pK6fotnKCV4V7gGJ74tkRQncYJo",
  "key30": "3mf4DGPTZG9VbKHTQAeAd89zqh15oRdGfvYShaAgnMXg9v6ihRJ1PSNEu31Lxhc9NrvrjwPGEw64PT5jVNxhoqfA",
  "key31": "3AYP1Qc3bfAZBqFBQJ44pARPtYLZrnYsVo8wsTbzUNc2DSfBvqFhxek7GnTzpSrSGTqDVSLsYGP6L3y37T3fb3PT",
  "key32": "3mj64UyPbnde6qoqJTupWRFJGQ9ntnArH9uHkixGTRG4YkeeF7dQtUunAWGpFkimyAppatNr1DdpzZGzqzFgLgZ4",
  "key33": "GqRUr874HtQmsAa9UGFTU1FFQeSG1X93kFBbmotYqC9DaUTo5GJH9GQu1xCkYuFVabZDskK2FU9qgeLjhsGMByj",
  "key34": "2q578HeV335xnWYThPmoYvuqAhQdLJZYQuqkYMhFoTCqjG9rhyoZNYUFgA1wr7MBVpnFM12C1gAYBEVjjo4F8vtP",
  "key35": "4TdFhoJmFEs5ZUrJ29TYSxVuL5dTn7rqkPfWUfK3MkRxSr74dC2kuSPobNyBqo8RQJ3dd2fo4pGGUdqkdrbjavvP",
  "key36": "4YZ1Tos9NMXtwgWJFq3FhLBaK4XkknvMM7xmxaesVg47w1pt93Raybiqfmuyc9Ej4ox2HNVftDCYhJqEzwgL25Z8",
  "key37": "5ro5TG3Gp1d1rYWeytxyVk1Ca5dCVbVvJQWh68MJosZzaryUej1fUfduYEr3gk6YHdCtZHdSgqk3t9VJbMfntZeP",
  "key38": "3yFwEJ4fH2dfPxmRk5TKnVJBf5px5SZ5TB9Mie9dPjCVVLBk2DrveRaxt5Jr6QLdwvoq5nLuehDbcTGs4kLCqswK",
  "key39": "4MNYdgCRJ5De9z9VgbZJTaVFWvgFTqqxdckMDftHqUSBAB9eYSyg9D1dB7mvygQX4G479qvEnvdWmssdchjkQWgx",
  "key40": "4DSVeD7gPpvcbQ8QFHcnCkhmkEhBmraPSgMY4ogVD2B47VpPtENYJaKvBbwbMPkpH4yVjYMsUT4fgmSyCyhzJoKb"
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
