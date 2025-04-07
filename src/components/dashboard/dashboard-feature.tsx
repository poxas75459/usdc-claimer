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
    "4G7zxpPrdan4vXMzLN12Z9E1yovnJM2tiHUdqrYWsa3DsFdLFFfc8wQZMciYbqypCSaLb4qX7t746Js6yhLxLNkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xb7SpoNLDTVPxt8zVGpJy8FjjDfX7Z7qLpLAcmX7g8JTCHecJRay1xuYEfxSQacm4n1EUdUrSZcqzZwMNzXxgvg",
  "key1": "33Px4XvTLMECG2gV1PemwTwQ4QEJNS31QRRMWShBVsgPQ17jeuFBz5cqYfZrxudCMTTP6xeRJPiKuu7h7ESMtWze",
  "key2": "63uhHBiPynMnpKxG2pTBDPKnoWKWbu1Rnb2HrWgVD8Zjp2r3p6JWZtTYaeLixMLdSrBqG1W3jXBMgyap216Zf5fj",
  "key3": "55x5yi2UXTkrkeZYwigNzM5179SMroTmctgcHyK94g5hPL2usN7nkUzyNqHUqvaMs4hmab18hUDNCMRRFNz2nPsz",
  "key4": "5wcT2K1pEtPCSLKsKakttTuZcixGDJdQrQuneAQ8EuyyACCDyu22ZNF3b35JxU5Z34Y1hYzgJSiF8EoJJuLTTsaP",
  "key5": "3BXBdbXfWgKM6DYvSRZgE8V1ux1Z29WFLMuqUaGxpALNcyDEbWHmSPddGkiM87AKF2pjf8h9TnZt5AR8pbmbR4CZ",
  "key6": "5QYY1DbRwndLUXCbogv5sTbsMkFH4Y7uT1r8QiHhMi5xXVcyXHUqNY7rZqgLQjKn2kZ3fBgkakfnJqxV8MKzT7Ut",
  "key7": "zhrn2X4v8sw8V8LKMx4N2w1hvPMaiZCdGy8B7JiiXFgPYRwyVyK5E8zV9rDhyEobVXSCn3oiDHZTxZbBFq5Ucqn",
  "key8": "4k7oFNEL6KF5Z495tQ97M6H2wW9MVUjFs8WqQ4X2vpVBTqMY4Upay5b1vw6KzmV38Qq1rDCNa1UTbhbtagxdqmmy",
  "key9": "3ioU9mgdUuS2Xh96v4rsXzZekKyGmbzYvcFi8iPMGWzHFdyWpsc3XTQvumYsbfsGCdGAz1FrLKZmSqXgiAfDnvM2",
  "key10": "NpY9fA3nmERwT3uKeuJR4tbJUSZGTUVF9VWrhhjL7WqDSAjrEJZZEHC6Jom2RzCeLY1drcDB8967a1iob4Sfdzv",
  "key11": "3JsJj2cUQ3AM1t8sgFycZQVc3EuMRbrgS72rxVznC3a1xUTXUGWFWbzXiyhK4XWrA7FZdzxvVaWWM2wuXjiUsSDC",
  "key12": "4rbDGp7dkqSAPPjycdvz8jky94LBi664XpHSj18xomyHDTYYcyk5hfBafKYHNUe7tW1ZuC99F2gc29xHZB4qS71k",
  "key13": "2i3DzZKn1heHt5o5qAzuEgfLHzLaCZTfk999xZAEFm5GunLzVr4nzSKyQiVrJHySftMxTc4gkgYk3BAYNu6cEEpS",
  "key14": "5VQkxJWmRUoWpsw8fVq1iAfUtdvR45MQXVLiAyCaFAmJ27272KjUb2gfWtLtKn8w8uUGFU41wfA4PCaDKhN2Ew74",
  "key15": "2L8RMhy6KGPXQtu84seCUXQKRzihQicLHM7Ha5YhL1E97q2Gbd6Q27fVbQ1AQDAoBC3SoWBGJTGhJf5pvVjhYr3Q",
  "key16": "4pZwSWYCpEDgKCA9HY3twc8RGoku71V7FBJrTk7bZjGKigq13QczV8JjSqo4Zer21Vw6wQz6pynp29J1KAKGtoRF",
  "key17": "2vxRSqRx92eH59wHMxQfMReXTTYSbsxJhUkac1198oRNxgimZCzKTwDSgSFZj1JRKTDs1dESd2u2MjuxBeFx8dAf",
  "key18": "39UkKSMXtZp1BivWhJiATLUq2UjcK4K9bCnzsKkYWMg5VhdboZgGHrmXnScPHvLPms9c1RvUqBhtU8UXHbtD29DP",
  "key19": "X1jDpajgXAsBMc3iDtq84ssxSz2YtJvcpmxXUnPQB4sgV9o24jb7HrRUbs54bUJbFxfo3PwRZmFq2fb3nMWm6b6",
  "key20": "62EaXsAcnU2e3Tu2vqLtm6ctWCTSXydBDrLmXd6jXYKncLHuY1gay1VaBfEz79yipJGsAUALGWfzPxRTzCscaNCM",
  "key21": "2aVPkXdfiGm827aBKjhqkaHjvwD9sw8X1JMAoZdZXTfULhs9Rdc2QMWDkLZiEWvgkceJ5cGWVCfgAzDud6dKX4zP",
  "key22": "4DCuugJnQi8V2RzAFgbgs3PTypabCWGDfAudsc3iQbtbcXMqJ4tGBJ3Byv7wYxG4zSzrt3F4v8JNDL6Behn9EFFS",
  "key23": "58tjs6kJzSvgjoqWjKincUKPHWfXCcDMmqM4f8kqnvptGFRgkPJUsnRxNKL3FV6rNg18KKQXyNMMmoCVLkhdxNU2",
  "key24": "CcGT44hKyf1sqbwcYRtLX3rZ1uXkcaBnSGNkaYQWASgJM5MukjvSbbVv3xie7rZ9wSkaV3Mj629oWvBSiTiqgHC",
  "key25": "5F1m5zG1CnJpcKrxWysE3vnTWHgFVXeWLSHApaBezyRgT8WKyzPJwkyJqaBnCEHjEjwqLJDhxnDas6U5HR5zq8Vy",
  "key26": "4WcuGhxnTWKfw2dbcxi9nZKFcVK5pdtC94RDaAudrCVaoNLsZ1ymaD34HCX638do5tF4hSaPvdiLddF2sdJ5b4Hu",
  "key27": "2bRQpwypEZtK8nzu18irsgRhmt62NsoadaPt6q79MABafVPZkdx9ZpjGLxKc7H7HauTxvKGDjTV7zRK9SwQgg94V",
  "key28": "56YbWmtuYFh14ym4GQh8B2NJJrMQ2QwjEb4LVtGAre5zohY1vYqSUJonktnvDFYdnibm1mPaFJdcs4eHdpZswcHz",
  "key29": "4V7swMjMmw7rAN2ejCqWcPeurLL37mwoQw5B4Sk3BhHrKUgQGP4SPk2BiLE9QeJSWocksytk2UEKWrxHw4TVpPXa",
  "key30": "4ym4cDGekyA1MmpmU2E9Vyzie3MXu5hTDvTgnLDYzmXaQT6wq4o8dgZYrRydR4RRa1Si41JL6h364fADDHci7Xba",
  "key31": "ysNjGaZq1eqLyh7PMbwAGezyD6VN88WjUiCsiwTbA9rsvFQst5nCM3EDZ9LPZeCPHikxggWJQBAa8c6tt6NWFYj",
  "key32": "5CdZe9rrBSXizc1JLscveyR8HPzsNtWf1zngQGxpt1gVoT7oPQyQQW9PxrNvzUwzKu3nWjXPa2CGsPf2ecKDdNqL",
  "key33": "3dfpG4u8DwBnmDngRBFrf8ENGC6bVK9dvxirGrRsf8Ak3Wg9bz616JHbEDn6mmwueZ6rQN3xARakdDGZwn7kPFx3",
  "key34": "3M8wZkocGL1s5A3f4YtMjzYx9rMZ6aTba4M6f7JEZ2VXQ3X4nc2t4a1eWqoBrgKmEGF25apageSwyhYxRurXkecG",
  "key35": "2hR78rwM1i6ccsjhYGnCqMEPqy68ECSbgZWYDvLJNZKTtAzo35Q3jDMzYP6ssL3fFXqVZRSSw1U8YXvGWkyyXBkZ",
  "key36": "4GtRY6zviyF9iwqfW5s52mtWA7hD3ovL5CnRa5tDSdXASwrFREDuGtShTm6HoZsxZoZKhjbKa6Sai8nPpAv46aMj",
  "key37": "3iGK9UPkDTMJJKkRzCLzyrXwbCm72Sv1PDcaXr7eqMHo3QJTnDrgVGAq1caLL2RRrWEVMEdrpzci6eoC5x5uspvG",
  "key38": "kcm46JnWw7VVgWyvxcTFoawzEjRw8sV4jnD8n4JWvpmoqEHRw2U6AvnbBrq8CvSLKAc5JYoAYYFxQPNptqDdDps",
  "key39": "rD4WdgAjrc35J1A3KBPzCgvVDZ87BmJn6BB5BH4tZqjttM27wRnz4gyvnqnkvLYVUWothfW4gWc22H5tHkkc1X8",
  "key40": "2S3SbZwzRxKqBQUDBHvVS7v6cKvhLaR5qAwfAyiywPKiJ2ks6dWfLrURKGrAKPFMTSgohfaqdz4tpLadjetrN24X",
  "key41": "67Q66JvxMjLQhDmHqmSCzLNKoMbPRB8qjtezpNk8o6tmmcvW4cqk6wETMrJob1YmgfuigcjUKwgsmS3vpZcLTUU5",
  "key42": "55rU83abxjGE9HT6RZxyaN9AQZtuwSXhMoKByzvDekq1T1iX6biJdgohzbNwZBRM54Hw1XbKbFJA1Pv8Nq8TQ1oz"
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
