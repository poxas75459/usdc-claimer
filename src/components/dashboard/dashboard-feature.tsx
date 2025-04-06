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
    "3iRgkK85gWFwURLRwwmbEJ4fDg3qxzvBR6H1dpxb3aqhNRFyfDpE26PWTtWmiLtXUXaCgWGdr7W2Acd5rmYwjKb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eb1LpicQ9hFQUnKrAfHmuFmG1ku4iocw5nzX7RttXr62KUzE7xZf8ZvoNZb2yL9Um5B3HHsPJi3xNvgcceC54rq",
  "key1": "4nAnmqvzBZ6Artucj8XrPWM4sbVyQEtQFKznNM32ysVfrGWqSVsrS8rnHvJAbcEDWhRczEYp6VJbTCYibRbDKbHf",
  "key2": "2Ucq5fBKCQFNQmUpx7G3QP5Js24tV1zys79XvwLhZQQBJREVWmt1qfcd43jGbV9weAiCPUi8kAEbnKWiPC7dKhDW",
  "key3": "3bEekDKK6TFHh8R1jx6mAaLXUX21FnVdKidmKjQwViiLabP7oZ75vLCkfnwaKvQVHMyyfDjFHNnKipHrsWNSzxjV",
  "key4": "4AsdP2rWi6ZB7yskWQtQNaD8TCZAr2umSE5sdYAigWoSeQ42pdNLtW3P8YBfY2bY7RdiL7rb3a6Tgeg2E8MxY3PL",
  "key5": "4b74WFsAbgU6yJJ7WMkw8KBdYcHPTwPsyqjjYdXLmfVwTeHkvjTFjUMU51q4sgjXcmkETBi7J3fsmxRtWDHfYCWe",
  "key6": "jr4rQZoFwMzyGZfT1NGgph423ADGWFvNKuZdzCFnWRL4T5DwCBXrrUXp337k5CB7cEYzmW6t1oymDaFmH4ovRn5",
  "key7": "4QP31DsYAvjR7QTnyL9dzGXUdQPgaZPwTf8NMFuK8JddVFGkKPAahcUh4ei6a4c8mHHUotVEJg5cTYQcPLQVd2Z",
  "key8": "3LQqHiYEw8n6y82bBVnAExUvkfaugiU98ZDPWW5tpHqsrZfjRattUGcnDaTzpXpSc19ZqrXRVS4hSspcyiKvvXnm",
  "key9": "27KebuM7NSUJ2kcKdtRvGeUYETVDCQzjsKShoRX2HUwKAt8rapf3k9nbcix9Tkyxt6VuuQU6GxLxTJfTuR5m9mHM",
  "key10": "3gdL813uUSjQsEHAF5u2AxWJYKVRnwtkPns3FFEq3yGX5SQqtmc7zeCAQvvEPYHmL9NhZdzaPToADqbFNgGbupLn",
  "key11": "2CrvBsoFg8Ac9Rw8tBr3rpAWqjvxHvmVfEkgWnsnFbikFsEKNnAkmjGKxUufipUYhrPwdiVHRFqBdCAPcpqrGBGT",
  "key12": "5nFWswukEW5gugqcmqNMobEDv4EB1BaQ1fRKRLZSN7m6jzqmeGrZH98397Vz8crTSa1Ru92Cqccp5MDHwA3B6GRw",
  "key13": "4yvy4KNrJdXYPD7DUUhqqEpRLRgiBk4nZVYMNMZJXeAcovYb8ZybAHeEPePBysoxtsKioW3gSvjQnsmt97Bo61fo",
  "key14": "3QGU6hg2t3ZSfw5MKJFbMmyDPRT3EjRETSkUTZDEJ1HD4PFuRCdtZBJhtzCzFRxr4mWHtkrYXSDdQFwx22wKw8x3",
  "key15": "2L19aeVngobmoKyj9pCs66Zji8fmFBkAWpFmaAUJeYiVgBP3mj28UoVgrxJuozPxdAMMka8SzG9StikTnbKcLbq4",
  "key16": "4DTGdWPEBT2hfBz8JYSwHngtxhbrfoAyPtNMf15v5HzqvJrUktwvm3n42y9Eew1Tsi212KkLL5HL1LahgNU4DPjH",
  "key17": "5D3VdZLn18mPMZzNh99J6Mg7XGGqHP4YDFLszSu3BSXG69fEpnnysBLVczaaM962qHqvKmzS5GMZ7RK3DJQ95TzE",
  "key18": "3fJaXaiHYNbs7oVohMLyVULMmjbmnm5Qeq3bj2tCGLZWiBk96MsaP3RB7Zz2wAhQhBsn9my19AVCQuTMudC7zrLP",
  "key19": "2k76NffPL1sgEsK4dZioXB7emMauB8ZFjE1w4dZgbtzHmtPe5G1no5tkhprCkm6oUG6JyXf9tEn8dnKe12qdwLq",
  "key20": "2jwrbeqW84FPvDxeTZpH5gY19T97YpGyiiiAKGGBN4CdrfNaxoS93fBWHfp94rh4vXQef9K6i2w4iwU59a1Vz74c",
  "key21": "3HNnydpcNV5CQdedRKsiEarbhpBZQr2Hs9ehYaNn3qCXvAK4s46iePN2qskGVqJX9nYeW8RmsPdajrcKABbPFq6d",
  "key22": "5Mpv5HYar5x6eGaw1rbFVb7Q4h3p4Y7WsoePTzLoozXpGJRUDng9i282TaCAoZcCWmZ5DuiZCXz1bzHTMi45K2b4",
  "key23": "27yykz9JVh4JVBjJVgtnckT664ocz1BHzbvZphRSNAdqSLT7mpfMC6Pb441tFes7m1u6oSU5nBnF6ihf4L8Ak8UZ",
  "key24": "4mNjgePnCMbB97TgregY5D45MNE5kEUZ8kB6TfJzU3vvQU329NA7skAkc6ZXoQwxQDcQ2sJxkVqtanM4xrfyUQmN",
  "key25": "4Y7WcMTHyG8hwFFxZZhB82aWWvDtQc5qtS2sJ5DxL1DR4f6PtgXwm3nL75v2PK8PwJXDxirTj7zFBRTos58Ubyiv",
  "key26": "5TUPCNmEiK6XCb8AMswuZbJqVwA9kcZgZKmLRsRKvPcvWWqRaXJoTrSkR2Rwq7q9UgukxU8cnZ8VdFcV5ikT2Bvx",
  "key27": "24FFG5HHAi52ucGouaJYSykSd7xx3gkH8HTMTb27QayMnETjpBqMgvKcVvtHviJz3R3xcZqZSJ2B5JQR9CNbeYbL",
  "key28": "2ywo82nKmddPiEHrRtGM48B7SyUM3uP39PDCdZEjZQ4oPkq8UxemzAMFgd8Vj63vFtpXgCbFXtAv8du9a62vdBMm",
  "key29": "43QJeWuh6MXPMfTr2Dk6ajoSboN4nHRBmNC87phhdk9kCGbEfo9fohD2D5Pp9XQs8M9BbwbCGUTTbcgxEZ4vrFxD",
  "key30": "GF5QJdFaEVs3XFda5ZG7o8GwBJbbXB5XXsP6MXGEaue6eUFENEhVV8FEbLJtwCxw6DXUGGbj8x5mVhAMhVqRkUG",
  "key31": "5AMKm9A6NoYif9XDrxxdAGTZg7yF7sWYn7fnLiX1ARB5uDokvEVuvfV83FAKf5TtfJGqwCrKmoUYt3PiNgAhCCx9",
  "key32": "5VoFtTBWdWFt8EvHzmkvSMSWA6qbrsWzj8mdqCqCiWNsNf5i2mDtkiNoAAtrYSrZZtw6xu8md3dWjWoaSsiKVaL",
  "key33": "sgfNqqGBBRtKPhkDwGvao7AAhMrJEUPh6xnAEj8wanDqhfUNzKsgRSYtGL43C5qTfbReTkiuVcpy17ycrtmamQR",
  "key34": "39penEP1DnQqkVCBYTXS1AhEexmybtsz4usJbJctRZQev6zDcquRwbA1EgcdTCeUJ2dKJHo2kjAEsWKHzBov2ye9",
  "key35": "4zVbk9xw7p92wfRvts2aMfhWbYPmao54xHbMdHEbHU6qH7N2RgYzG6pPjzcv4zhUKu3dmUi79utujjWnNtNsjwyk",
  "key36": "4nwsw1bABu7DDRKZXEkPGu5mEjBcTkv77JxhZFoQorECMKoh4EkbVhTVP2U5VZUzaGmEoWF3EsZF1CQnM713rJTB",
  "key37": "3YLj5xxr3eRyyzT3gAcPMbpEddDGFwzuBcs7NQh5FaEW9FfaPmfarS7SBf2TwgjBPi7ZK2yHhZ6e1Z8uEXyKPsme",
  "key38": "5TxcE6n8KoH8DByrCbTViwwe1S3sMLNQedmUXXoPHixoXhaCaeV22ewtFe6zoqFtFDBfmgz512hHCFsSYGeH5y2Q",
  "key39": "31f3JNxFmJ7En37C6gcWq6U88w3YP6Pmn68bfPARVEPhoSHGD6i23V45wWA1ixduDNjUbSJsx1PcKFndQS8GiRaR",
  "key40": "3t74qJFaEcvh6Lvi5Jm1PZdEX4nRuzPC7XYWDQD45F6A7n2YXa7auE8rp5ZgC9k7qjPHSj5ddX3ehEQFMtEVDjkL",
  "key41": "8KsXbBuXhfDxdVhNx3EjcuaJcxMmFH5xBxfGHTWKvtD3j27f91HR8GHSruXRVUe2MqHX3gPvdwfpwfTgP9Z52NM",
  "key42": "4QXvuvi2uUUpHtxddRDhzQbVMJmWdGnbmPSXWrqVSTdEFk9JTjcU5uSW4QTJN21J13TBHzjC5waUhKqg99F8b2e1",
  "key43": "4FNFD23KCdGCVekyHA3yNiwa114feTVzgjcSPws9yiPaxzekZC1HUUCLtjbcKJHyoh4t9rzY7suQvULeTRjhHT8T",
  "key44": "JvB1X3XjyQLCpPDjRUKt9eWUCtkaZYc4QszVBbRrZXhxCSWd1A8TPYQXFg2Jke7Tux7yjATwgTG7UVVr8xtyEdg",
  "key45": "2ZDXZSY5Tdoi4UjTQLzrvLH71MMbc4guN2cpia6THwJEtYp38pdpNQ978pvvYHkTWhyU4o7sXbGHMpoqp478wSex",
  "key46": "42qNTHtiHcQaQTMhghGDzvtd2WaGTpzExMSv1ubepRWtVDMEEyL2ESW1jDCvsA8JAj48Vu2sMPwL1aNT1wCFa2iv",
  "key47": "3KbBJo7MGnfSTwAAXLduHhPneVHseLf2PyHZmRUeut9ZMecsRHPWmU33NwvMjqZyhP8JoSx417AnYo4YzSsMzptj",
  "key48": "64XUfbAvJ9J58VHgWD5YjsEUucYP8HDULEgqoAfvtiWCWWrRmqvSSyStbioWhr1HNYEpWVys54EyxxsjdNAGjxD6",
  "key49": "2SiAvmynrdPzdK8PQrcWEs5UmWxRWrzEGX8nngZ9WdDVt7bVdczdYmQWyB7kkxbBGWPTDbLfsaQjUf4MsHwdYbU5"
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
