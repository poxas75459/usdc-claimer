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
    "4F1acbAME2Pz1CkQKNaajMAMZujr4FV3rk8C2PfTnukv7eLUzTKTrBNjRgMDxosBniJpMvyidePRDLXR9kfpxeGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALKbAypRiS4sUbgbWVrwpZHQ8zxWVEUHk6gzjjN7hGWRZ4fnSPTrTc9yaJDdVdABr3AdrMMwa6ommJEkUAov3pD",
  "key1": "3MswQr8WDzq2VsrbnrNXVZtbHBowKXMmyaLBghaAqdZENrpswMR4WSc7haKHpA3mHXJuTXTRud1h6Dvn14KRWHmm",
  "key2": "2BUZmWUdsFTcqWF7CkaPZFEgfETfZfom4poRRTaP9DxwtQwqWUoVkTvwqnPK7hKqzcjwTguo3ioR5xr8oePgLGpa",
  "key3": "3ytd3ksjiD7gABXSieXXYwjZgC8ime8HWFTqWzGsT97KAUWB2DXzb5mqSFd74yMUM7gsS8KQRF8wr5f53rCGtasr",
  "key4": "25cy8U5cmkEkSbTxXd3iKxemsGCkpdY6gSxHVHhS1BpfscHk9CeR92Qceiege5tXvUxPtVfofAHq7kAFwpbFv3Ev",
  "key5": "2UVfetXdg41E7Hg9rnmG3w1UZfpUuR9B5WPC4UcmBAdeMmSLvupvko4ckgQJb8CYKAF4CftTrzHTFydnxRAcM3A1",
  "key6": "2gXjEB1kUoBpYjSXtfv3iVCGe12Xe8xkwNDHGK5nfmkkRtMgNXByWDjVi1gpjDLxKhr84rXDQXBS2WnF5m2h2fV6",
  "key7": "54AmyeBj5mcuGKX6YbivWZofCfPtkWQXsXuKvNbgrzeCFBC7oa4LsnLPi6Zjpt1EMtTcDbqxqXxLEfLrZnTkQneb",
  "key8": "5Qmo5AHJsLB9xN2zZD8zduzbfJFr4FVCfyGiTZwirrfUS9W1v2QW5U1WcPEY26gfMsusujRDjHzfdd4fWD1Ws6Eu",
  "key9": "53evQt4Eh8j1ao2Mnhbq6q2rjZ58R7ZVg3eMMLSx7RZG6SMvbSkrkSGfYKVCG47gGyf9taQBBnsP4oTfjXb35uRr",
  "key10": "5yyQRNcvraVKx7a2NCA6zr8rmi5siuv2WdQgSwBpg8MhXfbUUk2pwrpFmPQNiMnjbyfA6JGsbbxW1LV7KsfbgVyY",
  "key11": "5bjHAdakSdfqZEkR4PsVxpkNeieQ434JGJXA9XinGFx1W3QcFPqgbaEyrRYdTtWbai4nRnN8QfDgAe19ZEW9oMQJ",
  "key12": "2f4jb2kKShpmrYxqvF6WDuHqKZ6PrRamm6gxSeXfNBXPsQ8kFdexktC7CdGspnnhmj9eQBp7yA4MmPcXXhxWRefM",
  "key13": "WwwQWuA8xFGik1MQ7FhkP6FBbS3n3jU5DrY66w3NoSd1wYGV6xxpjnrBm2TMpqMqXFtxxUMRdK9tg6X7bG9fAD1",
  "key14": "2RfjDqKvk6uHBv81x5rmGb7mxvyauU5X2D9CwrjvP3kDkkpv59vqKGMMGvr8GNbto4MjfBcvTknibJ3v8rgXMRHz",
  "key15": "2TF1wnbBuUwfAH36oyJJVkF9U3TWLF8LSEEkybEo34UDzWdXkdRkzKFuEs3a3WyBbszeAAyYx6pkppDk8t2mvyqQ",
  "key16": "fHDM1DCVaKBuLEYjqccbdJaZyJpHnT1XSWEujFTGjf3P5p3Ezvkqrs5kmXPcWL4BfQvv4wbVy4VdBAnkFZCvuDx",
  "key17": "NYzQ66ZeTUvJuGPBPZNkEKzt2kaQRC1WS4QA6UHK6n5fJtbAFfeK3rLjT2uAZbfFWm1dTE8xaSYnEYgXdyzJYFv",
  "key18": "2G4zWo5iWbyJvtAk4VCeJnaHyfUefvTViRvMhEXtU8Wow2tbgQacqBHsFnsjkG99SDZpyZqxsKmT8Q6J2EGZDJXS",
  "key19": "gjfkHjFd5zFcC5jm2gSmRxfEtTTvqwWXoLwfM8GEKt8yFXuUEiNgjvf6GNxDN57tZLpzam21yR8nbw6yxEUzKv3",
  "key20": "5AzftM1At5inP9Ln3tfxvCjz25skioMmAavg4hkjpYjTPKM9AvLNp2wb3DSgEGWPCqDUTkiAVkZZDF4WyGuhXb2u",
  "key21": "3t8tCBhpTFGG7bSYWz6eD7CsaAkZazSFKdvu2o4A5EeDbuuifkbiczjYWDAZ8aZ2k6CMRUGGbn4KUhVrQzYAfRM2",
  "key22": "3WWnNrAdJ4UbC7txcnCpfQLsRfUALF6zpkixJh6YAtwjZmN1phN9oPMymjMYUF7jSAeQ7zzDQ5UU9cr9Buh1Mr7Y",
  "key23": "5u1XJrBKfstkgfun1gYcRH7i8sat295G78zeLMoEVwGsLs8WuchRcvXVXy7Mvk3sougHfMeeUsNTsmqk14J4x7c9",
  "key24": "ZUm9MBrTheBJWxicYDqThK6m7RQDFU94uujzrmhayCG25YJi3uV1rpXAibcodQaASwwMwaVc2CyctDxyKfW4fQX",
  "key25": "3XrfmTWgaBwVHfbLXNM8oRbhVR4PndUb8dD7wqGnUt4LmtRQ1fwFfdw9ytDV3uKJC2X2gagYAF181kSXZ4A87eKp",
  "key26": "EC9zSD7qcxAMWXLYthDeGY8f74g382NwNyTUoznHa8kf43Pbsyidctm7a1BgWPsrbSz8gXNHyD8sKDVgL1uoNa6",
  "key27": "4MjrTbqswXf2ngCLXu2ipqfDjK6KBdGjHhmu7D7UhWcSzF5zvyAP3v7RLbmQ2nznqeFutgydL8yNNTMPUqvBigtV",
  "key28": "5bF7ednWAiRsf2GiVMcJPMFUZvvmsVhK85WHuVvCT3cYZHxw8NCVUHRwoZKcSj4jbFkZwuJ4t2oSWaHG6prpqMFn",
  "key29": "3PKbfptpDB6vyZyd3bwi3r4AJgVeLwcPRkV5g6SPhxxPjC5dPbGCfV8sRQMHDdgCk7MKvtfBFDv3PuELr7dxA3kw",
  "key30": "XpXHC14p5s7xTUGsuMSznjdUXu66MPEquftYE8RGtvWmttgKCW651EpZWE7SjJz7GAZBgDPWDw474aDFKj8hgwV",
  "key31": "aC6FCLZGKoSjEz6xn6Ju5zsb1RFC8niaJXkfnGdxaAjdqvmsnFW7dXDqDbpAYce6udLF7E3NfbgE1sPzdVQHcio",
  "key32": "a67kRVUEKwVc8MRqgJZidWsBVbiJT3wbSUsmLs9ob33RYtkoGReQo83K4oEP8LPmSU4aDesy4AqXDh9kSJJEurU",
  "key33": "4u77Ptc1pXbUkMn51PXJJNibCo3dquCTRunE23KX9FAcChjFJsf9yarnivVV4tzpMn8Q53QGLYxPpjmPzdurApkK"
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
