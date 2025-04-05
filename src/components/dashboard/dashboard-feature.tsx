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
    "3a1ui686SWnbYY76SWTT92oTw1b9Q6iPnyS8NUs2U2pMerd1Brp3YkWno5w26xGnRUxbLw9JzcGE4UtruPBmmSeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NXuqmMY4wrV5Suyecm3J5qmmdUrNsVouRUu2ARcrHxKvch1RCmoG58wsfzCo99bNmhdw99cZTrmxXPDhvwYWRt8",
  "key1": "5V2VamCfrgjCRH3RCDNK91m8b31LRvHQsYmLjGTRsyD9jk8JewuQHB9X1voF6BLkSHaaztnQa4FMcTa22nKLYL26",
  "key2": "45FZcpWA4idBataqJteZRegrz3pvB46793xpbfxPys1wMTjatMes8HNLe1MakrCEgNHx4wgUxygssUVGejVKw7hP",
  "key3": "3nKRkvesFfBoQ25N6ZP7k9NnBX5dk8eYVfPG9QtzwrfrM3otMBcSunfGFcBFCDjweKmKC5yCDGHZ4jrYmB6nMNmz",
  "key4": "cDZM9Dv9js5bKrooEAaG1KW59nx9PXTnhkT8c1UecscUy6ShACxkPABiwPJ46VHGkdxAh4Ws9sghGQ5NHC7Xnod",
  "key5": "325LeavfRsmT5yrWcia9vrokjtBKhpto8UfXpf1tBuVEDQLTnrwSJeBKUquWpsYcZQA7JYEDa41kbZ6TGyokSx9Q",
  "key6": "21CEriogVqmAAkZn2KTwE4FT4EViEJN9y2KCoYPS16Ldsg34Ygt2Xtbaagn2iqtDjisqQSvQqAE1A4EYeg9vPQbc",
  "key7": "31esbDBVhLLZGTbpvZCnx7V7MgCQmNY36rQtmmqdt1DFXfjrzAKvpWNCAbr1rgNaQcdpzvHAmJBjc8wMtixK5bbd",
  "key8": "415eNuFMrvh54keokrf2KprYU5nU1EpaQHUBKk9qVPHUU8aybfGJRbZ3kUzbo7858BwFgNyaEvwAWEqYFyj4LJkE",
  "key9": "5Xt8ELJqgWsJkVvH16s57Sp1pz6ustZstjoj6tradSF6xpT4mwk26vodiVDDWJjsUaWJpUqMksXPc3YfXmX2ZYtA",
  "key10": "2BriXCQH51fVMRXbmYuKMhriLbBCkVefHSL5HeRBiqCboXe1WuUWob9rEimhNATw4qyaWL69gAsap1pAPYuaeTJP",
  "key11": "2zSP7q8imqfVm63U6DikG6wJt5xtKgHdEuy9baRpc2LL4RXam3yv2ErLHj5qRxYj5odbbA3mA6U7TNWFVNpNa6YW",
  "key12": "3QfVsbw3GvHnmWRWFbWcBtWmeNrjjfsVAj7rxmH5HsZEP16Pw91aBoGXduGYpvpERBG8wv3eMmkq2uj5LsFd6FPA",
  "key13": "5y7pt6KgP2M2jQVJwaHNe4TJBMuohU1aSNqyj6fVSvwpeXFi4ohriRTJ7tk4FNqC7VRUemogLYazV4JivovVvFjz",
  "key14": "3EQnzibrLVAG2evWRMneHzFaDUE7kwxDQcFons9GMLdarecamyCWrGWSYh9nZzaKNbNq6jFDGsqadry2977ozveL",
  "key15": "5a6YonNwKmftMRGhJRwMJPXVMoSVx1x5RVDhhKTkrkPMij67qPehXbwf7AhFRkxnnaNPuHXMPP3QwcDD8b4tD4gv",
  "key16": "2Vi5ji21svwbvXDWE1wABGYTZ4CVppp3EzQdve6bHCzaYS3jFkvVvyed9WWCK5FfpNDaRceAeSVxxPxFMgRqcNzr",
  "key17": "3Mrp3k227mPTZGq4NpTFh8vAhHvXWZZ3QjTQTn76TRsPZQE9j5FWuTcrcrufdRYTWu4zJLGpc2kEti55AznAKrJm",
  "key18": "LwSWcrnKkXTirb9GisMWzkKAYv1BfisDMdzTe7E92ZRprmkFmkVcF5UwL6qKhmuqjaGcBRyLQdJ924LCAkB7XVq",
  "key19": "2EnbgC87gz71Kb9yUqukrvJx3HhRowGHPhKaAELCEzeq1TJrC5zZUVfitLjpNZP8y6YHPPybLKErUTGHd6crEGfP",
  "key20": "3DHWqFVGRDvDf1iCPUjpXicit1yGqFBG1geqBTpNQFwXgs4NJJvXeBrTjMB1jcKzjDYb8VZAyaWBYcLg9uXSipK9",
  "key21": "31dVSoJLQbUTQ3ReVnddBnqvDfpmTzWeTcaF3VTD8nbZfnBwQB3xknWnyxEtw3jjYWAf1hTZQpTGmfrNqev5BX7v",
  "key22": "5FYJRmf8sBVdB37qY1dJTuR4hUNmfboiGxcUJ9GoWUGhJj2nw23MECts3Xf2c3uQCJsBuJQfafrg149zEpn688og",
  "key23": "2d6gYJgki6LVnnXa1CdpwRBKzGoedMmpKfjCiw3UEZkwncDDtYn2KK3kDe2yTBLTfPtN2N8oGA7DNfMFD13qoA8t",
  "key24": "4e4txP94wE5e8gRgtwBjhRNH3rqvufh7Md7gLdNSq7UJdFGfrBno7iSsce8NVMg94WXEvm9ohd2at7RhMFamoQtB",
  "key25": "5gAuKCt65b3ZUmKnad9eipmHYpYGeZjNUs76egEbz4s5qo1iwJKSnqHmd1aqjPkZKCtYuk1WLKmWNRRX19TYkeFZ",
  "key26": "3mddnguZfhX8Tef7dCTBG29rqvMzrJaGaBjmYfc9bbVHxktjYvt4CTHAv1sfbgwd74chrsC4CrmLtUpGzDpdYyfz",
  "key27": "2GRLay9hFAZ2o5MXyWs4mSVnMXnnwXAW8vaVjfsz1XHKg2YABFQ8sSdU9oJ8SmQuFP6gC6tm4aro2RHBKK88Tv2t",
  "key28": "4RezYpbqAcYu1nWTskVWgFj4bjGCTACTstt657LVRjS2bgBRd8zSzRwMePyq5tRdW4h6giyoAZYehhvXFkPcxQtu",
  "key29": "5WqTtVot4X5ZsVfJtdk74Egdu6iSBLaTMcWEdMw2NtVEefPomwEqx8mEGCrrFFWUag6MsLL7GoeLUfKvy6gUpt3S",
  "key30": "3bSy1cybsGuHVrGXDvh7RrswjosUjBwNfBob7dwHGpMFkPKGGfaPBSfsGTCNP8568cNaber28HnViEt2Z1ELbRLu",
  "key31": "3onbipuNqTots6oxprmzdimw1wLhiY4iUEbuX63M7yKCMYSkTccxBMTuAmAHHX1TYVjq8kChMH9W5bJq3tj4QRzP",
  "key32": "6297AdURD68Hi1XjUUsbkSwxJPGSC116NTYDnmAjikqfUZ9ncec28kxbVUio7JYmXWiBB11ZY8Hc5ExtUAyb1LNu",
  "key33": "cGLvsGKbadGTcKykE1Cggaxuh1gx7QUr52sRtiYqc4HquAdejeRLwufxxyWoqaCdi2DUaqzAokBbUzRNu8qkK97",
  "key34": "2NTUfpcTcff1BT4wX64pQVFgcc5mxTetSfNqyMZPv26J1894jvpTLG6fKbDx3EB32M1KYMD5kc1fZD3C6qyiG91a",
  "key35": "p8RjcVmA27RC1BW4jkhw6ReZ2TDu6X9tudMcUvqGPvWK1PxZPEvU2XgU1f4kw8x8n7auPJ33WiFm71mMrrJHJM7",
  "key36": "5HT1cQoFEnh8RkY7J83wPr8z6rhS53XApPiadkc2c5Snu9FBCbwFPHghjyKNW85s1Me55B6k7qFBi8WiNRhLn1HM",
  "key37": "5Nve9dFyoMYSUVVcKZfJFu4Y7tTbefjfdh9axfQZALYmiiURUqWSAQ6U8T4c4w5USg9Jw8NmF9TSB1X4m1gXG4bH",
  "key38": "3o9rjYfsGE8JzpTepsvofkHvLLYDz6YEdZuhNq2FEun7xDzukWP4arzTLPjeZBfD9Cqqwb9AdVELmvCHGaK9Zuf5",
  "key39": "23fees2KiueropXdC8JN8UtfXDMCZGXgtXpTrHnXhbYs8F5ZKE1JUr9SKqH8fYLDhHhSb6jE6pgbgjxkevG9K5T5",
  "key40": "3ST5UYS2ChrqJkkDaw3JX5HHERib9T9kz83nYUwuw5fZ4yCY78JzyG4D2UAMMWRhYDQ6A7SD74mSFAmgcmM9QbX",
  "key41": "3KyT7EhPPJAVsPceKvC9Wg3W6q87zNocXiu7GmBxv3wNAS9chKg5Lo9xLT4rjqFrdwhLvLgZxaVE5kWiineVncFJ",
  "key42": "5UYpypb1sd6MmuMHD1ScMqQ2jfM7gbV2a7veMMsUJ9XYd7uWEkTEcQ5uhfBUcF81BFDreL2dCG9p5CrEFnBKuSpw",
  "key43": "B9gmJAe6MSfcywK9eNgmMDBNaUZaPWjdp4k7LGPX5uyrgPT9xv9YnkXqroyhLAxDd56FtPYGsJEUKEPjazzKWcy"
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
