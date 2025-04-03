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
    "4tpNo4atr4QzxRjbmysBm4qHycmxed9zuyUahJtkSgkw7M3kUWeQx5P7yKYWVro3M4i1KP4D9HKDWCfURv4tMBU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K7ZXMjjzD56jB1KcVS5PcAqg19LFrkb4uaFnx4tHKcFnUdPUGhfWV4xw3zbRtqwEi7Stx8oN1xT48TiuxKgGdGa",
  "key1": "7oX8iX23sVMryXYqfPDoWrnJqoHUuoohSPuhz5FTnAZtLLHyP7JH5w5kvgbP5i9G9unoCU93hgyVDWPPCtntKzY",
  "key2": "4cAoWKBUsQNQc3TqBw4ZdKYHHfhovNDLk1mWwp4NrCagHWP8vn7WZA4nifirh2QK8KfirYwpVEp6fq1Aoer6nYjT",
  "key3": "37ABBGvQsmF6bDLGWuhi2chUetgxErrZFfq5qZ8uUm2pnaNo2TA7ruUFSBtVFgk6Sxgw7EK74NFfNDMf77pWP3QD",
  "key4": "uZeUUydviwtubAroJe8FJTsFit6zoH5JUPSirvwLBs5cx6nVRcMqAzwVzNX4kvFppmo7Kui3RaFWj5YzR1ugTiZ",
  "key5": "55zTiXPEUyUGGacEkGdWD95WvtTacCxV86c3AZMA4sDvspUHti2iNDR7auWBuwqrU5g4snL9FCAiqHVDUcG7k8iA",
  "key6": "4itLJ5BjTpVV4QAqdCt5any8o8Z9u36DR665jQpH1aMJgEyZPSZ5Jf7Y2FK5BRCGPEASG3yauDzTbUkxbcz5JnWC",
  "key7": "2bMZg86u2R3dNt2X4rE4CyyHS2iJumDvhQcb1dUENxNFNBREc46G2r26tL5KpP5u8NAub41ndqqdFY1i6t8nUPKL",
  "key8": "2bdGCdv8UR26xAWkbRBZXhQuGYhdse1GuPSEkKdyPCrxauhNDi8d4a4ZcatwCdjj1SHoyuiD3FUDvV5g8KrZTQZu",
  "key9": "292GcT8j8h1WQuWdXDUbhJ8upDtCEcs1CJhv8ZmUa3tqfSEZADL6WEPw9YRapnAG9tYLAtQ3XHKwx2YeSeeSK5fh",
  "key10": "33e5CN8ZB2U3Y1ye9HqfkP4hbbrZ8kPtbMsWABGxixAYUqfQesQWkSiEabGNgGS4bRq9tWpfQPjKbZLxJnp8Bb4m",
  "key11": "3VEGK3a3Vu4g8AWrQvdZKcDRMcYgvRxFtjiz1MTJ41WsqinAhtpv6m2v6WokhUKgDhELyHczJQE4ybKZgxdjkBtL",
  "key12": "2SomRVpWGCdWytqUJj5HBiaQ46Rgq3rHhbyh64vRBCyLMrC6S6f9C4Bqe3skkd7y9eWiez8AvWGScBfV5UkWK9Pn",
  "key13": "5k9gFfgL1kwzMnq6Hw7jYh9JbAWmb3FnNQHhk4gb4gAkAf987FpYpSKQaoJLZGNGR4sRB8xxbWMJkTQ8UVgXbkhh",
  "key14": "Zwg2AUrdPkJ6H191t42eTqEbAkGxeGC2FWhjJrVgvLosYPjxHh9Vi1QdSENTnxshJyYRz9oXs2jGNuEkQtp6Xot",
  "key15": "4bAuoPR2vHAyEp5WjvKtmgBKL74VdVztfvkFag17zgziBRFq9h9rFePnqRNoHVuzwPenr8o5crQAMi6NBxfY5Mdt",
  "key16": "5rmenWUjHWJgMZpxEnMPhSEmKsLrtw4WmbH9RGe4Gfya4kFEr74TeoUnF1NBkUMZvxng1CWk7MvXWgqds7d4BSwX",
  "key17": "2QX6NxuQy5nHBQyq69FnRE8iAa3SWZkV3Pq2GpRuWjJ87hhmDsixd1F2wFajxEKT7GX7t5ApPb4TuxswDZQNS1h4",
  "key18": "5i8FkNqUzEyYgfe5YLG1dFxDAgNVHBrXGU2mNk2WaUEYPTpv6PhjmZaZ1jiSkpTv9DtVZtGHSG3CoPN1vaGsPVji",
  "key19": "38niBpvSAuowm6k3JS1S3kiWDiVUWbC36Se8L3vQyHSAde6QpZAj8hbCHevuft4gDH7oLrTteKHtwskS2HvpYUJa",
  "key20": "3uS2mWRD9MTkMqVrzAZJnV9j4BU1PGzYLUP46UNamU6Z71NQZKV6o8qCTsEe7PKaTEKJbQ4Xp2VnbZwafd4Pyp8W",
  "key21": "37WAFqNVDwz2TiqeyBo4eRJ2pzvcLVnbM8JRdciEgR7ganL7j1WpLrVQefvjmm3RN3sprqymgmGKUQp3yPVCwftC",
  "key22": "5bDWdiVVaHfYRSUR6BitEwqmR79w4SfSxoB5QTGYWYKvgMGtVq41d5kL8Lh5VveddjkpZXdYY1K3yBWkCJwL2Xm",
  "key23": "5xqirNvHj3Htver2HvoNye3L8Z7GLgiaXvW6BtVF3E4n1zKAsTahpvAu8zfUWV6y1WutT3i7fzaUYbdj8Dh6Ugsb",
  "key24": "fuVv3GZYgcvR34JH27ePySGNBjj6PyhjdnDZ6Tz8KUbFXZDPEecMovzzmLg9iXbgQbxoPkrheZ5qcNRMxKxE2gB",
  "key25": "4qXejPNFLsxa3h2QrfZMXCZGQCsrjBz2JGpkWNPCfyZRBcRaaV3pqx9ankrkMaEgAWeWzEr7HpMq6rEZKQmVcper",
  "key26": "5PZ3HSYKxB9QEDGgc49WnzfuVa8QbX6LdBEMLcqk6rARgQCfuMVFjrY9gcwQvMhKRNpRJBvjNr9sKPbHjjdNZZch",
  "key27": "2owL1fw1j5xEAryY16Zu53PXEmUvqc1Phv3kLdiss4xAEdmmyKBvDUaBb2B3tCgorfREz6VFRuLWQX1FSeqDmhQL",
  "key28": "2Uk8x1nb52qPHTDwX2jc4JsMuTi8GCzTTzhCM9Dfr3aTBT73cZgjUVaZjNT44b6YzEmWLf7TB31Bn6qyncfx8e1o",
  "key29": "2eL2bsUMPYKUSx2yqeDLJe6EGJYATWSRSjRh5YHASYcopo5auLy7SoQY2LeGSMqHWzAyVDhHTHvjYKX4oNAEFHEP",
  "key30": "5ePeNYAf1KkW7JSQH3FN2LzCEG8PBAErWinmgy8UYcG9NxotcBDDCy2sRtuszA8n9545urrwaNaB7DvMRH53Xdy9",
  "key31": "2H2Z9bjgs3aCuPU6ozPuqUX8bHoidQFtQGzQqHJto4gpigARSjagDcsTzP32K9ivuRcKKSTQxvsAEKc24mjj2A26",
  "key32": "2oGLWZGjgdC7X1HSaUnvdpQmhvjCtSDM5JQhWbAB5n4ex31v4meKMp1mCWpQw8qqMc3shXUv33Vefxd339gHYdSC",
  "key33": "35C5XEChHMX9Hb6rNJKr8Da1AkqanN4DGMePvw58akais9guLb2jBPaT5wceDUJMu4Y9SaCRn7ypFH5XCh8joKeB",
  "key34": "4GEdKXSAveuMNapcHciNcuYeqzZcTJfa1JxGisHipRio9M9BQAbMLN4FPfZhWJ3gopKFjRiGddkfnauciDEjd99z",
  "key35": "2F7fWu1ZRxoRsCKNpWac6NBG5bTCsR2L71ghyQRztFfn9jYNPiPAjCiGoMVZDBPKWpfDwDTukiLcJ1MggigWFGaT",
  "key36": "48vcKsiMR5gyrpqQ29xZTzhnW3saZYQvRkhQ5PGifJPn9nHps3SiLqZskgziBs63KGRvAciJSWBb9GHrx7NELfHm",
  "key37": "2VVMFYAg4wAPfEnWNAqiB8cHMnEKvLCY1zkHD52iHEMfsgAYwSqi1wqh65eT4Fo8VxTau26JReWibd42UwhHqdu4",
  "key38": "5MpAYCdrPHTujHC7zNyfpWy9H4cnTviJ8GN45sd1pVckKnTz3ZwTDRtnjddRXB8KeShUzVtfbeGn5oAFUEKvdhhr",
  "key39": "jUuUnJi7UEfRZN8jbK1nTqoVM6fp8oX74MU8yFbzHMVeXpX6dDaHx1CGTGJU4WeTmj6wMQ4xRjnVXLwfk2P25z5",
  "key40": "a2CovWK6TuZKJxYpX34mLAx5rbUeixF5qmWbRkpdqv2B16kS4st1LbpDrB76c8oKbHCQ8dt1wXpoGyhRGoKKRJ3",
  "key41": "3Pep3kLYWCDjAffQhTPUeD523P6f9fQGNPCN8ZUYsrE2rwRLaLRV38WGKboaDpYcGeRzebebC9MCq9tqfPYHFecR",
  "key42": "jKKqp42AXRq3ySLSRwyPwtEJezTYyuGibng7tbLpJ5FL6pqhJaKTCuLmSuCRfqar7Y22DeGzAdGyjjZdWSU3dec",
  "key43": "3PCNQEPnuTYeY1X7hBJ6GowJb8dx4nv3Vh2CGqo4DzVciHhstYxs3qkUxm3YHMfGmXZCBGzSyPmcXjyZKExNR8k8",
  "key44": "H6iATjCtij7HaA6hZ6YuMzsVwS8ixsxvVaFVGiS2q7ngDURVbLqEuZ48rfmt9THXDxiaLcEcvCwjpYg1HWMUSzs",
  "key45": "phxD9FfUcUQjcHVLdvjpRFwe9mwWNVMs5nKqtVikR9Eytj6uuCNpA93ZexYJuqnXkbnby8VkgFRKZd9oDvHzLCA",
  "key46": "3K99M4vLyXCqamF5KC5BUYqMcfRpccYt3AFbntRbV7CohXuSP83WdSjHW2Ayi5rKax3GnVD7Y4RSHBi5fMZNQQ3U"
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
