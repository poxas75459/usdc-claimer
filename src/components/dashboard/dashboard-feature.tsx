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
    "2pYdLeR79PFQ3BVpUemaUpJwUQqE2cT7TruPQkQdwQTZoisw1wgvapMSU5RsDJe9bFvSz4UaFJE4VwdUpCMsXnKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhnggGaCJA5LP3GyUXp4XmDW4D4NLGf2A2dvQffi6Hi7FQAeyGcL3uyCjaQtCTMtyVB9Eic9Dt1ZXEhHEMHgCri",
  "key1": "64caCHfVrrbiHgV3ztCrseCkRfWZEE4wdfkxTR763Ux6XqF6vyeJ4MjBLf8VzRWrc4vwBcZEX6ygGcQQvsgS8bFy",
  "key2": "4PsabzbKERTafrWpDcwaHAc1zSogWivFpCkAJWbewQ7GCqQ2pLRUqf9jzemZ96WzahS3TW2Df5GAzp65Q8aLzmLb",
  "key3": "23uYWvjBonWQkkCWtJeaTSYC54ommzoD95jY6QkQfp6KayYVUGmSHi6bLdrgRbHYTdXG3EM2X6CeBtv4uDdx2inv",
  "key4": "4SrjDVms9zCtvrB7DVL1R4SBhhx2t2vdBLgVeEUzq5QC6wrWvU398HXPigkNjUVzr9nURUsd97ZYGcicnChKYRk7",
  "key5": "3NbuiHu8KZergaktcgMKs8sCg5K1o8xuWEdkoeBTNnu1dKzQagZZ2gXTCfRxtYsXDyi7u52KNsZn5oMfUghZzVae",
  "key6": "4vFrsT2qffDuYZ3jnRPLKuAab39pp4UiZ4YDM1yy3yWPkoyH7idzX618ZEayM2BrHp5STSWxLM9qAQJvGfV1uFKK",
  "key7": "3CdKNbzsRGW6uBnndo4YfnF7WKaLosa5KVF2QcDeCHpMGaYTEtiBG5SLwydCnctgAar2hcvhkoavqE2b6Uyra4zA",
  "key8": "29GzhEohZXoh9119go4qreyxn666LCKAdfewUctutp743Wh1L37P1eeJpYwbpcZDGyPhdHy758MSFpkwXwUjH7EF",
  "key9": "UxUH3jpJhWGAV5YAuBuRj6FN5MSVZdSVSLx44bFi1sR5rkdQxvK42ctNF6z2jYptSJS97A3hVfZeh3aixa3f42y",
  "key10": "HbUHAFMEZweXhTuxYGWziwzFzMFYY92W2epMw2wL4VkXkheFzouS9CrjYe7QTrfwYf3Pz6f4TS9P1CqyvFaBKQc",
  "key11": "59Tt52bneFX3B63x3yRkTrkQdzTUhTYCsDhdyWHxSmdccqcDSfzYvCjC5QKLqpeWyyKbN3hDDn6R6DF78UzdwG4L",
  "key12": "5FxmqV5sCWoXmPPbma8Cv7m8YCMwJPTSv3QVFCd27X1CtXnTPcMvGEL9bPrXgYdEbjMsHHY98VSmgG87Byeyvh5m",
  "key13": "2bk3dp1pBSL3XGTUQ5g22JBR6Y4udWa6L8NLYWxzzCdz9ukHWqv7UKi2QYERWeH1AnRea9yVgjBQwrAdxWFSzyZM",
  "key14": "6138YB1VsQNJf4P4UKoaubXso8R7gGsiP8M7tadZwdp5NbDVPSAGw6RMhZbsZYJ5XkyoCoxp8dtpKFMogdSN8tN2",
  "key15": "PD6Qr8K399nq9qUQHowBghcUAASPjtxoX5tTX3AF42hRzXDczch6kNH2CFaQ23EFhcNUAxtoVDinnhWsTBuzLtU",
  "key16": "4auM9ZXgoiznfjYtBY5YAGFr1CHt5Uz25HSWxXatJkE7pox6ZfysCYLHY19L9kmu58xGNQsXVgUGRzoZWYSF9PB6",
  "key17": "5Z4XV2Fws7eYX6VzF3utnujFJCmLh7Vz8g5jPWAaUtqSaZSYSNdrgk3LDziF8C4YJpwFt6PsCdCyTZyEGz6YwWoc",
  "key18": "bRXQn47HBJWtMXwXwadkSD7viu3qmQE8eqaM8F4WuCdb4VUAtFyh1pN7ntSWaSjyTqeSzhVD6mKdWWXWGV7USxX",
  "key19": "w3fqbHhrouwY8z5GiG2MKdhCbjXFVQhiv1WLSyj35KeYSuG6xFneCzUjJfLkD48Dmt4zCdiKcrNZvB1s1uiMJZS",
  "key20": "4GyLT6NGcn8bLTniRyPWesSgCzz3JcPycWZLbfpD6q3gEAHzYcZruPvdDfSHDSXFGbhCb2HSKwZTqk5McY2rPCwq",
  "key21": "42tUiArHkutaorLtfvnTjgMstP2L1vfzVgnG6ttZkzb9qTCMDAnkjgcqmQETQCM8KRSN5frMUia8J2vrwMbkAjJm",
  "key22": "3TJtGVdW5WxPbTkEm6T4VYL2bfVkYH7zYSfWjZPjZ3jBG3J48RtxWXDXUnejR2QrPbH7pXV2xwTArKYbPYCfaGKw",
  "key23": "GwKzUu3e2zaiMBbNqEYNL7XiFBTsm7pBipWxZ1UHacPDCedNVs7P83GLJw6rFGGrQf6j6yYWVk6XPUzMdfTDDVg",
  "key24": "2WVdPJyPcZG2MNDyAaz1Li4egsu82WLWZ5mTYV8cPYbGj5upyVwJw7BVFSquVSviQur4YY2WgLnPdtZmS9M3p8P8",
  "key25": "3L58xCxpXcQwi2TRxKBT4E92efiJ5h3kWDXCHMrVXrJicp2NLVpTMHqFwtBUnr8HyQ1uWJMQJgU37Qbs5h5ZQs29",
  "key26": "5ocmZkmAdu7VRhXpopxg2ya7YpS1DSW1WY3Fk8mQVrDfqwhiS3f6tcKW8izEfmyeb6vc939r8ozx668h5V4WuanT",
  "key27": "4yyHGprS71egtNz5yKc2yo7tnSKojsWVknVyqLFyH9ypewVZyjdjzccw1R3ay7Sj4URWn337FvrEU3PoGupUdEUG",
  "key28": "5YU9ZUDpPeXWRh7ENQkCmacYBL4qjVKuikZm4jsQek8vRjqPU2Zezo3M54ebyLReLHbpgrY8b4j6a2hVwtr7jHyh",
  "key29": "3Bk5FKLL8GFqbvqWGk83XdWTShuiDcZe7froEK39oTY9ovYSsnKYF8N7t1npbgJ6tQ4qFuRYimAVAfZ9UkD7vAqH",
  "key30": "hiRQR3i2dCnqPmDK9hkpB1fmqQDCBeHK79LLCKiZ7bfhyW8tMD2AGcKA4fQabvaQAjUkYjsKxPKucqeqjM5jqMD",
  "key31": "GcTMoU1uTB5gzcEFTAwZeyfT47j1jRyBHADu4T899HdYxjhoxYAiBVgdgaPQJqnvACdsX92x1dcnyLMPPaJ4pzy",
  "key32": "58gKSK5soEnrdpiCJT5QoYt4CbQYzia1T7FKkvRjwfHVryBbfNdGP8YYrt7gsMkiMygJnNW3dooYuutRVSVYu1UZ",
  "key33": "3ZNsikjqAnTaVz7KVhpn3ucb8hNE6ZzMdNmfhWTXB88D1VkcbQBVAbdP7fZyXpc6JkXSjkAZqZ2UzwRCr9F5RLQ5",
  "key34": "cB81gsGyzDeo1HXLxub1PstkqpSMbFxLhwygb97vY19cy9ZTxCsEbQD5U7qzf3q3YKX8TUDhFXbMhCTjyRUnW6v",
  "key35": "2JD39Fa4xA87oLgyNvcGS1HTbu3WQ5VVM5sDqkm8m8niSNzCeTnBUymXhrP5he9wSaC1iGHhjdgz1aFsrmvxje5p",
  "key36": "2qGiVHJe3W1CK4FQvMS4DWsPLNPJ5Ls1aLgRiJvnQwdaRT9LaVD4JENkGh3yY4jWY3CnBr1uRYJo8Q7675uc8Znc"
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
