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
    "5cWpsU6XPGFmutx7zC5qz22khKRT9msfubm83WGCUaoutts4faUuqRbPQuNJnmQpiPoraGhkUtURSD5NzHH59rwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5Y3M5oEkL2Hc6zeoXVHon4Ch6fqFpmBjooxqAuorD4bUFbMhqQxd6d87fngGAVDiH6zBLrBKUMLX7dWH8uztJV",
  "key1": "h48DwLSdkDjRXZNwmrFUGTqmLNsmDpYRxAowcMMJVnfRB7ua2e1PPAE3yDDbTzWuFnotgkq6rfxyDdQFWCbKHqz",
  "key2": "4jxdZQLPuu5LQDZEaSYGtxsTkRNqa11mU2ePnFXci7h6TYr98XUN4s2rAHrqEnx24oeW7WUEFVRnruiwqCPMwRnr",
  "key3": "2jPcCpAXD4Qv7ECR9yZPt7SnzMhGLjtX2x21dv7HRWc8vguTwZPJuqKZGi6AV3NXFXkg1dX76QikhWydgnfhBvfM",
  "key4": "2FUK7kUbMBDbNkKVqQ62LceoYaxZEtA6CEmW7pSzEChQx92xeWkVJgQP12wGcnhjEH5HLUWmDdNJ1PqyqusfMu24",
  "key5": "5pKUSsZo2nhCe4xpjGihoKKrbW3z6v5dBwSydfGWQnTU1TAKKu2srE5MPTXYQEGYa7Gc67GHCkEXsWfADU2N3tez",
  "key6": "5H9LwXJ7zkK27nSobLAEY1Dg6EWGoAmSQYayDX5fqyMANzaLZd3Z2QvcWeLojzJJ5vjAc88669sES7JUCrhQAJAv",
  "key7": "GM95AjwsaoTjt8zEAG7tZ2tkrukyYmyU8VPxe2Nn67dDRQVhPmzpwLLjZWb6mAmRzActP491MfxakuMK3yfbHoy",
  "key8": "2afApZMpdXPDSpeFVBLQhwMwf3uzSoeK7JDmmV36Z2cA75VBf2Ntj61svDZGdVpzKzreyDaAbziRDMSNHnQn5XNN",
  "key9": "3Ru8dWZCsPkn9xWXi4UmXRfBpDzmW4KA5eYoFf7pm32GZkTFLHdKjboF46SYcJX8qJUVjSMt1fWSzkuorKuGTL8B",
  "key10": "5L18vWPBAw2rgbzjQeFGUqVYa8b8pBKEqZMVKxuC93nTp1Qy4kcADsCqMydDG9Ggvf48azSu8Rjj762Eyotx6Mv4",
  "key11": "bY25dcuEQRJCWCHjnaaGYdcFdrRGs7iJB199AzRev8pxBaAKd3hUqhVYYykaKoJ21f8fcgTxXKcNBFaBEUNx9sx",
  "key12": "CVPcqXDC6fRLwuuVtCV9hAQgEFvc22SWWJwmkpsW1WH5TyiuM6pgHbdGQiqTGXHErJfoKLB3jn6HhDg2NqjEEX9",
  "key13": "2FrknmSh9s4rhQEDB7q66aATnWCVGFgZpadUheazxHcfUFn4GyDLNM5dYdLEe5B16y6cVDhRpeED9APuHWgVcFzK",
  "key14": "3NetTppQ13K74MZnwVSiXNoXUMJPCmM6VzQzP3fmjwuLS7eBgXVixMbGhbC2bhWf9FwnmcsrBdrAmEEHSxaarnBf",
  "key15": "2JWeRPRNA4eZdYvSLCirjECKhdWTEQnkZouyMcBPsS5XiFKRuk5YzLAYPhW5odWVZHCXsQK1tJPRb7Q3sH7Ay9RN",
  "key16": "43L67m5aUkYpbhsqexYf5PHVbwN4WK3WipGqRjzvfsrz6qGTkiABz56Gwg64yhNteTuTw37GUyqZWqRRCrWUjcVd",
  "key17": "5FkcL6ES9TeZ1pRGrx3kzZSdjx1cDipeGAxQzFBp2Drx9vbL5nSCnbzAH2jFG2iJKK3hVxqGc6ZdrvsNYbvjJZxh",
  "key18": "JJuAPEP5hwJtqr1vKh3eSaxFKVybVJqdtcZYvNEuaFgVEbCKUkgazyHtw27173hWaxe4Np5cEJcgZMjryA3xRah",
  "key19": "4zehed5WuM6DrTRSMNMKfNsKsFamba4LEU1N2H2JnbQTDMovouVxYNYjndqGLWMKgpucgCT2zmNYribrNxspeGrW",
  "key20": "458YDzuKUbtaJNGvpE1MzLVoGn64StNQAiqhpEcr2MD61GBb4WJCQK4RkXJaJTFMyvASbyA9K7KkHitm8gkQkXjA",
  "key21": "5ATYhGi14V9WurmXcdTtu6wgpA1cTJcP1GHS4dZeh7fM7bA7aUrA81czK3n4LvBtkXTqxv41tUizzkeC15FZys7p",
  "key22": "5yVyZEMbq6h2z31MfBYNtGyEFpdViMSHiae86siRKJUeXddoLZJEoaBxpJNyN8RyBALQKfsXExQeEho1cTkHChd1",
  "key23": "4TNuGf4hT9Vxz4woiJiMVir3PaBc45Cev2NLDcW7s4EfarDTxVR5yVaMbvR7KKKUSonM11UR89672mGFbkco6Bmq",
  "key24": "5TEd7kEh3yphT7r48DZG6eyQMcYb7Hzf1hCzYnardXZxhFfgqoredAXpPEqPUaQuZzjtjcyYT36egucvTBAhM7X5",
  "key25": "5HsryweVmwGpHR8Ut2MaV3D67zMihD7GgVtt94twzUsyk4tk7ccb3LrWSyCkrBTyghivwLsAAQTgxq9JBrZUhxur",
  "key26": "E3aqePYRLVvy8fhpjJxQPb791LfKWXF8jTK5BMwvgR5DbvKRsghUKV1aNpXsyv4NYftE9rPCAhwJJMNCJEUSeLs",
  "key27": "4xFP5Ac3bq37vVTrv9NfygJsQijLJ4kaXqKmWWVtkWDReH6KFcJh9Qc6R13rg7vxyvG7AYoQtDvikS3jCVRrwxeG",
  "key28": "4ZtxLcEUdVUmiLdfumLbp3e7CwYVZc2usymA2LxgJxGEynjy76APQBGMCkK5XLYuiWQjFBeQCFR4dTDBv7pLb3w6",
  "key29": "274tJVkwvsS8Teq8o8SVBZyvfyBCPt1WCuZb5ki1GqFHwa3Nvet7Devy3cxgYVxS5bggvgLcmwj9J2uGLD35TCZ3",
  "key30": "GJBEXiFP66X1N2TTVjqpieoKnFDixWYqZvTZNoEQBsFDjg8MQUjEp1oJE8m46eQPNRgyCPHEXYzyJTy2ttcy8X9",
  "key31": "2zvq5mbZ5BSLVcDwxoNfs4EMyHp6xZE51ZSeaGMDyVGq8e4XS7uqwTPhoSewjMwqTdtsFDwrAxCRSfbTQ2Pm6qmH",
  "key32": "2vKtWNQzUqHxLFrST9ShSeXNtmopWoMoBFwWx5Qk2J6jrHynZkceikBcCm78WDYd3QxzCLM3HjRGeVrqu8tVcchx",
  "key33": "2FWEM6qRnWFL25a5CFH9SXU6mTs2G2rJbXJRgfg3kFPoHvWmSmEJtGuVDd8jQ1GVKDKzv1Z9RjR86tCx9EEi64Yw",
  "key34": "4FNVWoRrXEjBBAKmVNk3ENQJTPnjWCpwsRWBpkMdbGgdDg2258A8DH5mQ3dpvtnrUqJYnoroNZYxHuWM9CaFviNf",
  "key35": "2r7CwxPRn1MgzrNKtRwsqa8sDZkMWftDfk9Dp3XtufH18ZeCrtYrfG7564456Kp5ufLBvSdsfq1R7sUGYRnKKmEB",
  "key36": "3ibnS3zqFA63sDbrQUEazLgQJKcYiah2DYVChoGkUGqVt2D4xvuFhcvDuh56T9V5FtMCw93LMXxXYxdMQsqX5k6j",
  "key37": "4LGiywWfFRB2oTmx1fFzfJmhjzGAu9JQMtMtMEhHdHEp9KfG8fapUFdMcbSwSEd176MLoPagjubHij5KQMmHSGGY",
  "key38": "5tkyH9X3Foejd3vid4VPcMSXTV5dzPin4Rh6nD8yYBuKdDqQgADaXgua46bVjxhar9iEFZab15HfMEGZ3KTTr4pC",
  "key39": "2jC3PZVrToUxjq7Fd2CukBBkyNpvJu9yEAfdrkVL2GMthNcCpDJNvEGaeq1ohJYsT4FXwbrQWc9jtZ6tkDKyDc5",
  "key40": "4Wf3Fjnn17d87Yhg6qyHyrZFTNh9Zz8wRSk2wRAfEhZvTjh6esZPdv2bhLeAP8FXRh7samU1GfLRHUNfbSgw7c9S",
  "key41": "D3cVsBMo6KnWNPg41zTx6V4kEX2Z7wriUjU1ud36mggtfEJgnZwy1xAvHzM5Tpg9TzWUx1CyZuYae3xRJ2w2xZF",
  "key42": "3uW1Qn5B4cMk7JDW1kPmqCWS1nuP3VddhT1xSpcrfy157oNZqqdcf5k7osB8XY4kXy4xdy2TNHB9qiNuuHxobonX"
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
