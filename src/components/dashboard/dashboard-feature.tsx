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
    "63ZQubw5ZCLnsQsQtUqx5QkRoVrMKpr6NTymK5JWRC7bAzDEZkNUq9jFohHKpRqXiVhLjwQfn8eW6s18X8y797HU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CciFLPw9mJnU7gfTx5wUNMiQuAt7Mma5Qsy3NXW2HpZgnyrHSc5VHb86fgsPGmXGUsa7Ym2Xuy3W2QDyWzvd3vC",
  "key1": "3xFT2tDykk5tJFzoZ8X3iJpm4Sp6WWLwEm25tzdj5SgCBMB7o2nVFkAC3oWdqmYBy1ViMJtFiVKbheyQsfR9nj35",
  "key2": "4cSEnhsDppySJrcU2YjRtjkkSNw46rP6Kffihs922eNt9c9ovnX72erFLyKE7GX77wmmZ56VbL5oU8h2bQAiHv5V",
  "key3": "2ESUc3ZAC94u4M7bEhkUdfkGTAb2eXtSDeMMntFVkjUL72g95P2ziPyypVhb9YCb43VxvBbqeETNA9SogjfXrU69",
  "key4": "xoUyiqyzqSr5jFPfDJt8zLWzN2gdnNpkMS3qtDeuTtMFKdTjfe7ZmbSThB9PpVxbwiW9YRVW7Af2CcEsJgERpuv",
  "key5": "2NKvfHUQNJ4qB6VwNDDGbW2WtXmGaZ6cVULurz3zyRutxXbnr5rrHgWL8Pn93Kw3xshLw7Nk9PHfFZuRU6N81sZV",
  "key6": "XAMMe9Vdp3JumcYsuwTC8fLePZAT53H4FeAeSQkpA1smoo3LQFH6gGTqzDjFrFLwwEDUG6wz192MtjbwFq7A7r2",
  "key7": "5LqFXziwpvJTHGbCkkrtuH1js9UNgjeBV1ChLXaSqStoRvv79oDTFftzhDefQRZNnptFGL4LZHAXkqZvwd3LxRRa",
  "key8": "3MXqUrRNPpn9AG7M2h5VAraS5LmMkMFvTphFZCudVuu5m3jbwEjjkHCDzqxNayk6vQFMSAz9wNWgzvB78wmdFniF",
  "key9": "3RkNP8bqFpvtXUwLVqPBCaKRE8gVM76kW1dQ1yna33kSAcyQjJ2vJWSRx2a8hwAqfwpRxbgCeF9S3hh3uieXnrZA",
  "key10": "5w1UHAyGwjh7j37NRHuqLFeP7ANXbJvi1NHTdMSAhko5Gp7GMGCnAXpDBj8bnqZwsAyy51vx9V9mBpk5sJKNAuRz",
  "key11": "4HrdLSJtnyKi3KFY77P2Q3vJAjfwAaFFCxwovMAnMSrN2Y9nkCQDVD3Z1Yas6ijfhe3abC966XiM6WLZd2PmKUwm",
  "key12": "5iryWcBhBH7Y5Ze9JWfPzxxjeCbSNVhPmCwLu5qnBRQFGrZtizRuDeHRt2CHc7ura789SxAvirPoYUSDxmexkubi",
  "key13": "2iAV7pgP23zzuhvQaLvvFprs3awaCjCdTU93MaNyMiuHz1JBEvNRWwHGZF77YMx2JBrPEZL3P82MWwtBnqfqyTXw",
  "key14": "C3NxrYFLzUCxeo4sd9y9D18oUMYkucZEfWc2SvttGSg2tiF6CumUkx4DndgqMaZ4sa3C2SQPxgoGfxpabu2Y8Wm",
  "key15": "4s9DvsC75s5hbv38CMJ3qdN9NMXYUCp97s3FFxvHCJFrNCseGfxLPNoEgzNbPuvqZXxZ9MbPHqguE1ebJwDzt7E1",
  "key16": "3iFusj2fg7euHWdh3pxd7S2QoKxqUPNRawFg9QoiY7NwmYoBjRjyfJ2LPYvrU3BgPtnxnWfE7qZ4LXmAaNd7apHK",
  "key17": "pDH4ZEWHYRVfJqk7bZ6irdnwzYoXiS7cYESMbdP5Lb2DjGrqVMV5a7iBunVyDE3AGM44CJK37mGPi96S3LemWNy",
  "key18": "efcHzHkRBjMSqWvxke8yqCg4oRtoJfw1kPKDpaEaXWDtrcp7gZDVQR14ZduZN6t97DLcTeVtoY6bU7Er8C23tBP",
  "key19": "ayRj72F3qib56UpbK3N5u28MHG6EibZnbQMVTnk9itfjPs2idSrnYKacBYFn77JQHNDTP5kQ9BjKrJ1nZ9KQRNo",
  "key20": "5sQEgEa8cg2vPeR8kwFsAojx2dCaqgFm4mL65WJzk1GaHp2PUe6eoetg4e1dpfGqKyxrVCv2cvVu6J13FvByJMW4",
  "key21": "36zGMzRop7XUWENNH2R5fZQq9jteVYiTEKFH4dc1ev9u6VLi2HnNhAPntqpmgshnH6ug6tYCmN8EVbdKqWmFCJVg",
  "key22": "3sZVZTynqMuC1f2rvFt3rsvkUuN8pUZuVcw9gHNn8GKMHJqTXyxZBrBTWt66iVG1JtiQqNv7N88RZbapqYmeg4yf",
  "key23": "4pDY3PBRC8yEXaz2QaUMvcbCdJB3SzNuni4cZEf49cvEpVL2AT5uoMG2yddQBWikV58iyTVcb5VgvhLmHQAKjBWv",
  "key24": "5Q81rN3zt5gZuhDy1kUVefGMRZSQYNvi6PYWAcA6x9Gw3ruHio3YvR3FYyNpWUZnuJpDzCk1P5PiizthWmFyGh8T",
  "key25": "5bbF3PVFFDZm6PjiZnA4sHpJ66Z3YppYkL8iQJgUno4YdU5uR53jw5VBH33msbatr1rMKarMr7bCgiN4pJF6cVXZ",
  "key26": "5j7DARsh6thd53SkwDSB15VnbYMVYH7gtyVsiQ1RP6GEuoo7tDsdCg45eGS5UXRBd3PHdCcxjMJvbEuMvDL7KFNM",
  "key27": "fmKuxd7Sv9Kto6cRqn4tTjxopojG7CaTkjfw7rcv9W6WAUzkwV91oMtt5xemQTyerrgWUFjHWcjFiUsJDyR2c2y",
  "key28": "3tMPGM4cXEVeVTfBiRnLEZDSZw1Npt8M83iobkzE67Wyk4E6qgdbpPniBAiVJE4qEvjE4JQ9q8kuKthajMi924e9",
  "key29": "257h6r3T7L2ADbWPwurCnqnmMcTWcS5Pv6fGC3AfxayXUQCPiQJekWH3oThxgA85E4F9xq93u18zGRXxz6abDXLH",
  "key30": "4J1RqLovS5cukeo6cY4x2MNUta8Vf1UsrbzfKFxzzsjv88cor6oo4oF89Mto3oJ2emg7TFfjDWPdxGCEinBH7sii",
  "key31": "3njeJQr7npHhdAxJj8g1w81yLt4hFw7ExF9LHiPDwzJQak6eib3s75fH3zVUof5zwQcxTk1Dzs9NDnK4yYojFatS",
  "key32": "5X4mrkRXFz6rRzsACC9szcmCwup6FaHBaq5LvpuKPBLm3h9YiCBeRWEqpKtU7X8Efi9sawopybrc7ExEtBQQzAX8",
  "key33": "5E8WUa7iPNbnczZqXiRSSDfb53tUFmwBKk7FDJzdfoEPEcRG3BETHqc4AAYyPvi7g1nd8y5yAGpcMnQmH4gShRfs",
  "key34": "4NzSCBb3TZof1dreRKRxxb2stS4UDwocqPENN7wtRyHUM91SavKLe9S2HXR9x1LPLBFzwQybGWsqt2p6rEbr7qsG",
  "key35": "4umWe9VNWUoMkgmMXcMA7V1Mj1DuoX3tJigKomQLsoGD2Eag7GKAuyrSacbvpfuzwq8XSby4784M1f9TivxsMeyN"
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
