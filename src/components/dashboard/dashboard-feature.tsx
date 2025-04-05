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
    "5QYcsUvsAogXTvScHW3nXixmFzLU8nSBrb1D9eiu6NkjexJVW32taRGM2WUsrXwWLbm1PompbSVF2u6q9s9JTv8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8y4CyoXNbiydzUjydLwR4mfdpAY9Qt4385HBkji8KSjtFfmp1AfDDbU9CVK2mCNSgwnitR8ouS3ymu14xZUUiT",
  "key1": "5Pa2rwSEXUc34BPXfB5XZyYJkP7D6QeKKdqFQDQLCTnC1PipGD84yvPA1p4xzyo2NXrJuQNKnBLpzJtniwNJGf4Q",
  "key2": "58pquRgqyDBeYr4yV3bv6kc3jYQTJ25Bqi4ozz4kd5eKNTxWG3TmTK9Jb4wouS4cp246Z6ikhveDxwj3MZL7Mgf3",
  "key3": "4xEfBB5c3nSYQxfAKd3zgJkLZ7VaTKaniqCv7xRg5zZaveWJpynRDHZjowUHGRivhxu6sUSxY9aPmP54jPkLoCU8",
  "key4": "5vRXzgE35j4bd2bFWJMCb7ThpGe2EvDAZVdFAJxvaYnkRuYxHkBFjjqWs3GKW4Mxe1KvEdAj8QkzwL8L5RR9GRrS",
  "key5": "3nbEmV2J3dQGpphURVx2rKjM8YT22mskjWP24H48e4oyvsEiJw1VaYzooL2XXALW2hUsHhDyiEfe7sYJGzmw3EJr",
  "key6": "3NypBwZCtqce9mx4oFJeHRxr5tepsfn5iimkATToWdaxWspXs4M8DgMBcNSJpC4GSThuenRZc8US2uLcqFrHB1PR",
  "key7": "2ExV1S2dn8pqBxxao3XyurE3xHkRwiPpnwu5TALdCcQSu88Y9ToqNo3gh4PUtBaEnPUQLwaH75uQMdd2th3AS3J6",
  "key8": "47st4YKCrUxW163S2f1XGd5fhHv9Y6iYVp6ipMdQPncQyaP4ehZqZu1H7HxSqZqqpEWGULN1AFAhx8FtzrWyfSmd",
  "key9": "3VqvUiU7xoUqU38Z3d1QwzACr2bcJ1iWre535e3nVqqLDRcEoFZix7a9BbjGVEemxSvN72krgbzmzR1uX142dfv9",
  "key10": "5nakFDwNZKhUZrvWdgmqx8vfu4abGtvQAbxKoCLFgZQFxW8KCmrmi7afKnF1Mhx2uWHrvTgCkKme5zFgHSFGRiYt",
  "key11": "3ei311bY5XyFGjk9TsCRpjkzK2MM59UUbCA5RWQe4etrZ4FEvBVvmYgJp6Kp8KPdx4Dk9mcWaBb1A2TmAvkn3MC3",
  "key12": "5xXYCwKgxD7q4Po68WFPagm2xmWVQHua95S2DTX5MfKAQdbtiemQLcVkjB7BiuFfiu6yEVWdi6VLuFS26Un1hhdj",
  "key13": "3uuEgQwod3vcLxV9qmxVdYcPDZZpscr5sKnxGMmfGZKhyR74uumY3Eb2D8qKdQG17Jv8iN1LQXUfx3TYMbLGv77L",
  "key14": "oqrfVsPrgRzkzd6GE8z65SnuMDf8t2vCg5sTdHZUUh1xtkdZKwBJu3TwdczHCR2838o75Wx9ChPBLZw2jEiBGuL",
  "key15": "5mqd7rNwWhyVjjAcEdT8RPE9gQqML7dUgbs3p5Sqdy8DjuBnCU7UuNXBvAdavc8YkhWRKu21Q8Tw1gPmGpUvPigm",
  "key16": "5ds6tBG1PxX81ZDMThQ66zB123pHx7HaD17qYn5AdSh6KU4BciLsN1EfLeup1o3ryF56KYdHdWqUSktfZVX5Wm6j",
  "key17": "ni2bZgyUKnReLw6gDQKbNLCNNhHuAMyrbxF3Me2SFGGCkMUuntN9a3EjbFsTjMXZh72qPQxeHsipo7ehmeEfA59",
  "key18": "4VTFBzVqL4yHVXRE6xY88bCYTX63k1XrBPk4vupVjZmLjpgA9euy3vhVr4tFw725nHE1zz1pbz4g89Hwp7QSvd67",
  "key19": "4GiGRNRxmQBQacN2xcf22tSKFEtsE7sah9r4ooJjq5QYt6eBCJtVPNVaBaBRMzQsguNKUfmFGnyt1KTmuxTtDcgq",
  "key20": "5dA3BTbKVyy7KSSBUMzcLPe1dL8CEXBitzzcCH2t5AUYQCrUhHBbpG9MD9WKmGHsVPkMAjf8kgCBuDunh1KbkTHw",
  "key21": "39GbF9h7KgxApxB5waGfhFYerD32s5i4m1TTuFQrqmychyfwUHZwBY8CLC4phhxaxdWPfCKDASNEkoRwJ6F3DDVE",
  "key22": "TUaX5aF3N4LC1HMEQX5PeQeVpPQUMU7auaL4WeKNeGCVNqJcJGdi4C9TdUCMzHom5NdJnE4ppzhkrAupA1oCZ5Q",
  "key23": "zpUdV4hSq8Gc6HCvg4Hq81gweop8pvzsy8ma3H7PQ9jdDCRWckPdpX655iYp5U8U9tozRbjFG3PybEoxiU9fRo4",
  "key24": "5y77zDhh11WnCUKew89tuHtCKKxKpajTXDRksBKjmKuNvVE8buPWW9YGx2wFZBmLxWj13vLSkzRDeBTendyC3V95",
  "key25": "GKv7kXtjT7wMJLWt5dBTdptyQZqFzSAg6kc7MVCCmHGQQCHnRgmqjmpdzCbz93VZnrqybiNpENngec1wXpFNkRM",
  "key26": "RtU3t2WPFcxga2vmfn7BtTKokbLiK2u6o7XUTtRdBTkwS29vN6ADpEmdjpkdtDA2ekkbG6sHSdG9bCnS8uvAVJd",
  "key27": "5GAhu5cpD7QJk8SdfiMSHqNArrJTsVDxuZz4mDiRNnG6cPF5ZB9mjPKBGMeHeHFK52nPqDksyWS7QFgLD3zS4hGM",
  "key28": "5PHtHEnewLjcxndWP14m4ywBUWkdimYYUvRapDP3Nu5a6VfpGWjBL3xgwXY9Sh8MQvu51SmCEXiJPi3NjVRWDLF1",
  "key29": "35QkQrAyqtCgRD1SEwT52L61XxAkKrGNFLuFXuJ9fW1P42KezdsFTZcZELDUvJ72cp5DNdQa22kCgrrZmKMTYxud",
  "key30": "4d1x13yoPGfEmPnMMkAxaSfCfPsQC5VqSHDvenFgB9Hn6eJPZuprRkTLjEiFQ4B7mnxYJRZm1m1MwSK6sTSVayLC",
  "key31": "4s9FmEcdJ9NKiNRBzHrYyBnSJLqfdJwCM3B2Wefk4dEdm2AGfCEfz8hsyNWJZH6WaHz61HB2DjQk9Z8Uib6x95Ef",
  "key32": "4UPdarjnrmdSARWJsZoB5onGpwnGXH7qXThdaZ3QkGESobXNWSfDNvhxXch8amsAojS9x4L85n4oj6tkzx63Rr1S",
  "key33": "GJi36jNiSMYE4rF1QzqCLJksyzeLfCuxbDGG2eKcF7DGb6692Hpo2HTE6AqvdT8iTPNfp337XdYubPHvjum73Bv",
  "key34": "5aHNCTFkh5QNmh3mJy4NgvjNEc4Zk3oTJvo31jZD4skTJUfcoTZjM3RYndTzATvd6XHE1tePvsFpfAk4VPV9Qkok",
  "key35": "4QkQkygicZK6Bxvoxtujv32hAXxt5QohoF2zgxEhjzQHFkdHoDWtPaogw8cfGziVF5bJwsXMctFMRsk95wFSzudX",
  "key36": "3ThmFKvR1yx83zi8KhvLzTy7TQWyf4qVes4WiunsXESFaw8oMTtBjiD7NfhFqRStoftcejxvwxas9m6uCidZmX5n",
  "key37": "3pVrDeqt2ogd5P7FRTR6RNisgQbaAQ2pRPDxu3s7yKjmjcorifHbaE1yx8dweZYtT2tvAmscaQ2U1y3opvEA83MX",
  "key38": "5KdDTGpn1p224wWdDL8PijRhLhAb3Z2guK8umnK9eVMv1XJgK75PoZaR48JT77NqN9jBfAeDBqnJ7Y2cF4iqMuwJ"
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
