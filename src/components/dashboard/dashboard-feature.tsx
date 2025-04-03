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
    "2K73HQiDxdQBqeqdZf8XvQAaQHLL96SnDKEfAxVAhfivthowrX1fatsaaqEJYXEsyGmi8yJ9vzH7ebi63HUTZ39t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wymqWAxYgHXQKGWUg7hbGqUyqDMsNRa8UjXZJ8JjcztmLy4f2zZgThbimVbPtvuGaENi2KW7tRXPUK1hC7EQTNW",
  "key1": "324YxM7GeAMRxQxFDUEnz1moDsNgF4wEchWQMyby2oT84CUqJS1hdfK5e73PFZSZTV2RWBR9Ued3p7vLzdFrsfeG",
  "key2": "3yJs1KrAJwMSE8y1yeKyeb1y2Gnekd1fuZK4L3YFGbV6Dbw5iyJ5iFQk2WKzsw5Z7ezHqaAXGLwMHZjFkG8fLxbt",
  "key3": "4zuXNVNEkb5RJcs5cfqNp33SDwzAyfDrJUU9kwi7xDAaC96RLGhy42zvYxQXnm71328bvZCvd4kFU8zLew9Cty6b",
  "key4": "3ddiVcEtEhGR7wJSGrFW246M1XxLDyzThj3NuPFSfSBgaNRCVg1rbyHD6xjhSYcf3PhL633mquEoARFS2AMB8AN6",
  "key5": "3vrTx7Yi5R4ivT9imFH4QUF47zTVzYhzhqc7vkEi3CiYkanB8bnBaLz6yn76GzbwvcNzLaN1Pmchq6davMoX5trx",
  "key6": "4CNvGjt3dnEdGCkLNo4zwmT7JfQt8RhbFWnjYmKUeW5UP1dDV3LWTVEdVm6TyZ4Fcwc9aFLepsA1oPT94gvMQpvF",
  "key7": "2xmDmBawjfxzQANsYS2M1YCcLzNPUeFg4wP9SqChEkpfkDQgsqbR9vbhc7gUW819ijEuryb6SGenshELPMZPWsWU",
  "key8": "CW7avZ9q5sxu3VQU8KWxRw1tLfsBbGoS8sQR5JQh2Co8BWHVwJRZ2vV6R9tXsLSdjTaAVRKpBbidkcdcWkF5ov9",
  "key9": "5YmQHyvM4iHvNVS8rEhBajTb45rpqCwUsVibzE7YcxEsCYPZ1oADZc2w7gbSnKqVkPNb2VCg2E5nGHAuVA6NHwv7",
  "key10": "5pQAEshFiSdZ13yWWVdxLXrnPMTY9RnS2m6oHPtwzbVLt2xjBLaaCdnhAm23nJGNhvakKpnwNtgf8WPrnX4TDvMV",
  "key11": "3b6pnCP7QwSmzY4D2DJc53zgF9tsFN2UmyvgHsRKTszv9e4aiC26wvBHi7VuUNnjCJWb5W5ssCjwjMeeutEWeW74",
  "key12": "4VTA6wKZ92CZbgJbVFkRzFgBmDyzUx4Ef4ra9QVU3bFBxmqsdroP49zZjjmM1qsqhjZWiTLzY8C8j2jBpCGcDRMr",
  "key13": "49U6q3rcuY9kWCVxm1WC8DrJxd63YgZkbKrBnnWhCQTebUjAWAQzE6m9iwsVV15wnNJfiYKpWxZqkJChdKaJcUxA",
  "key14": "2x2hHXC9EAjZLSQi4fEmzY7j1R2EWgFAEECGd4eSkQgYPBJqSBB2vAUJVJSj3rT66V8fjhVr6ELUD2ixTZkmbAuv",
  "key15": "6VMdLmNYA847qCRBGpzhgkQTZCx7n23FcLNwzM4sTJVNWc1CA1MEyct4gYbMfB45fePB8ALynzoFtnGshxZDYBT",
  "key16": "rfxpGCRn8bckE4WfSTDKCiZf26koJcWKtqrRxXJftzPJRge4FTyRUV47faKcUndynN1qLrcWi1fyEtMjkbFzNoL",
  "key17": "2G9jFLRHZZJAT1zGH9PhaWoWZJeg6SDSrB7aC7yJN911NttiyGJTeRfkLm3Cu6nFofWrgZWCD8riZppVZvibXT2r",
  "key18": "XabmUZvTN3Bs7Z1PyDbdduZYvPh7ftAARHtSL2iKLKwh4rexWhX4iifFGxMUo7cCg5DDYexLJpQDSxpV35z8SRX",
  "key19": "Dmfdud8ooxf3yX3SHZeuisXD9ss6LhwvhF9nhSH5syZuLrmHRxrJJ7fPVt4Y5VvUhLqQcK2TDmXRQ4HdW5Wbcew",
  "key20": "3oKLaWFZr3bFKsRB5eBroeGMvaYrgm41ewi8cBp621NV52TCT6F1axTxAFhJGxGM3ieiZGJW2M3HHpD2RV3Bbdye",
  "key21": "2NEiJYzPrqtupmXwguMccGswNWamEPRbGSLeeRNEnxzof2ZFnBAyqGPuajJnXdoAFCZaa1SJC1C4uWWPEUE3TV2k",
  "key22": "59sPnB13t8YdZYi9GE8neSjXtC2NWnWrKSMuiGt7of4zALfFY3tA2Lt4euqJKCEZPpuS8t17PjtuAeW85kQUrqQK",
  "key23": "JMfmZXwVmQcAjhDCAiRNUxk4JkUiWu3eTmcmFxCQJDa3krPM9L38jyY33JE9PeY1WezdSR7hYDLWchmRtYZLbw2",
  "key24": "D8sM4AaC7YpjnGXSQuLzkxybpVwgEL83mKqj3UuDtqg67zf54t8PUSQP8EBueLTRcVihKAbvLvZQEsebiu7x7df",
  "key25": "2W2kSjSzJjMeJiQVUXtRjKL2ugV2ypa5yK3hNUb84GCQ1yNRpnyxyPNHSt44hxDzYSehM7vsbvayPq4mziUxc9nb",
  "key26": "BMsKQNnLvvFUvbcF4Jrv6NefTjK7uXG4ziKmWBJWN29Riyrpi39bX63i2FviZb5WFspbrgYa9FwR53vAjLGapdF",
  "key27": "59DWDb6HLBmCHNzkZs8mFB4UXzcCLCz7NCqw6vKpMZK62z9zcdr6UzGJTxgAoEYZSemF1Q7qt3Bc41w1hbXYpzAZ",
  "key28": "2aYKmEoy7d145JLqgUZ6w9JTrKMMymcNNhW68C17MmzxRfSokeKEKfNWA6mKtrna5oywtJVRrV1Zd7TbjaNn1867",
  "key29": "22DsYNrn7ipwqGKaHkFoj5tic7ALf8c2GZjsjhYf6Mxh5qVJdGjqERTKUGhT4AZHMGgt8WJqW3e8PgKPdxKgayo7",
  "key30": "27VTJYvKFBwTFg7FhKyLY3zndQ4gBsEwHKg8ho4PJoj5CY8hQV8nP3nZvvFtubY6xpx7kAvrS6pC8cbwYhPgnLzn",
  "key31": "2X9qMRZmzcP2Hv4vxXPojoqtXv7x93zCzjn5yAxmm3sZYsaJ6sdCjDxBPwexxZAfJPdeJqNGaChpvzmuEfpN5ME8",
  "key32": "XqASfCuGbT13xBw8yK5oeehhq4DDVuTKiCqCM3zL8Qyr8G4gkiQUo8Ct6hY2Dfoo6p7gm7JPSho4WcQyZMaCEkm",
  "key33": "4JQipGNZ1DUN5CmeZEgNU8PwXwYFDNvqQ3qAVruMeRtfC3SC6cGqUc66iKZYRrpvhntrZaSaoqhyD29U9UU7wKAQ",
  "key34": "LMD4VppsDp9b64Z4aSZaJEZ9fTzB2dZMBAoA4Pn78DTkRAnTyeM3YtFTNZMtR7jC47wyJZ2fYt4fcMSYYYsxpVz",
  "key35": "4RWQeV8yNV88VQh7p7tkoaV9J2Ftneph4jjEWGyTxbrnzP9orsgKacY77E2qTprJrC2UuM8Zu51Gmnr2jv7B1VXF",
  "key36": "2ocpB3yh5tgQCLyifgGu7aTibWDMfhL8t6z7JjRsBNdSbybgBehGqc5Psyoiy5XdtQtpQbHNYQ1iQzaCL2yjkedN"
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
