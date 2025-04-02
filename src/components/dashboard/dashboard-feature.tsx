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
    "3f7AreaivYwkXaqjhrtypXYLJUwKdT55nRPwdbnQ49AkrJyvMxDyFEWiwEAitNcsno2gXNMv51SDsz2YJmJs1xo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrQ5FhJxB5xq5KHYBomiHipuzEiB6ryEDYSdqkB3CSsM5SP4CQ7xRDq9cqQAQ6sWtM8LcQm5iBzBxJXMD83tjuQ",
  "key1": "3AKE4FdEktDEG9Yv7ArxixX2K9AstQPmR99T1RwGCmJ7DDksDKwinrRcgrKSizi6RYMLfQRuQ7Zwh9rXcKa7qj5B",
  "key2": "3LaKKpsJ9T9sCPXP4Ad15L9JAfzQt4DERurrbB5MPgEPMjAwC6RiQAKKsa8GpHYUKf7F344UBMmcC5b8CxGwEnC7",
  "key3": "5kyAAmNWcEec3ioNB3fCrK3nNzZWR4pMcyyN9aYi6joMiBU5ac3iAjKFeX5XhsB4FWt2Dh3DtfrWbVURVuaA43Ec",
  "key4": "zs5sZnKPgsVgunMXYoakKeVxKVU8uAd3tmr8sgaWUsZrD6jguCAzpzjbJL1kGMX2ZccDqGGD34r5trUXHRhy5Fv",
  "key5": "4hVnCwYnHR74AbAvUYbYq3FmDSNQnAYb4tPBf1PERyUnAcHiujNzp6Fcv6TCqizhvcADRtTSq6KpSC2MC41ejheX",
  "key6": "5HUQFskn6oaQesRdMNUD9nUUHZCs4XoawQMrMskgH3zuYZrDANLbfFhduVmwPKNgovtLkZbELNEEdtPVbKiYNsgK",
  "key7": "uNHAoK6Kxuho7npbtijh81pPJVQU1mvmHg5VBzpFxAg81MPHF68e6knvHLBNhrwa5SHyp5oWCuBNKbdoRiaXz1Z",
  "key8": "2upz7DAg7GH7uad1AXiVzGrUbhuNtPSdnyno88YKMrp59bZ6GaujUzxLjWojCPVNSL4dw67yC6EaWhwSujMwJsxN",
  "key9": "4odnuQ8SFqQ8ckCpiwg3FEPCboiMoiGnKNGv5VbVxyrhkRekWsXqwPcEwS7nX9ps2NVYWHjUhkhLaEFoKdpNZCnV",
  "key10": "5jTjkepd2V9oDsVth3mfx3WnTfKHB2CfnurVC7k5MX9WWX8aLTNoVoUZ9QXkFPRnRDzj6Ux6tVrapZ8vgwm7Zvyv",
  "key11": "3QAhweoQ5pzt7Xwu4SPhphyoNJjdtj5FsfG3UBHahczT2FSYY693dWGWKqAQvPKNmWnYEaLJH3Ve1BebZqndCSr8",
  "key12": "3fUE2DyVscNse5cqDja9fYMbJNpfcGFdwAHvp7ZS97uenDpZs8UAr19uEqSWTMT1WrvzBXQmhQG5415oYcysGvRn",
  "key13": "5T4wf3zQG1vwrbPHUFTXqxFW8zkFTZph4wkLoz2CMCVYzsC7TYkoKJWvHxwMGgFhFWJ69uCo2E3avLuPKiWtSKJL",
  "key14": "3sEZ9gAvjyN7oZi76xzuYAFPoYXPuK3y9FxU51uwVN7g1aSEj6fcC46QBeQv9EzZuDKSv9vdCxXucE9Fc3Vux85c",
  "key15": "3d8fz4KdSteTjo2TqhQnJj4q4c3a5CBCEJSv6kWy7hjLP5nbB1fo3rAB8hv8hwskNW1oSNNGAeQhjvtRcm4SR9rY",
  "key16": "5n2PYhorx5pKREiU29pZd24EH3H2bZ4nQeFmdFwRNCaT6KGoCgkVig8Q6Lb7ja26tFVwuoG3pCmsLz4SaDXyFEDN",
  "key17": "9vpV8BqshM9N5hZJYQwWZJgdKfLe7d6WBcGZodvxz1LScmmRkbTbqbbtwzm4u1NYtzZtdih1EnErf6e93PUZjsE",
  "key18": "4QTETDevyX3QYomVETKybTCbwwNGgCXmKJD7Kx2kdTWcZ7JzUBw14E8erG8keMjSqnwB2GNdnDfDj5TeSQxwqt3A",
  "key19": "4Y7Ynb3pmNLwihD8ws6snLFusR2fmHj1rRyAhdGh3BwjKy53mHGKQ6By5wpY7y6i2hRALZsSpvVN1RhcgFnvUZtz",
  "key20": "2565ac2qHNLxBXWkj2fpmxFoZLhokHhJpSzcVEB2NfaTHAwgRNqGaxgUJHrM65xCBqDe7X4Envs1yDi9wpheiei4",
  "key21": "2g6a3fNZrzyP4Wn1b4oGsSfEbRwrHQbHV2ie6hRe47ZVksBXndmEKpQGhmKjKoLHVkamhznV7TrnqnfFL49DV4qA",
  "key22": "66r6EVQznoT4J3ibRkYc89RSP45Tss3DjDvZ4zDqiFTS51XXBBe5VdhWxzzkDUPxuDA7Mf5Rs366ED2UJHtzA93Q",
  "key23": "3HMYar9y8VP8zYXMNbGof3xUFrcJh1Hmyfw3Y6VkgGCuyMef1WMsMcoJ3XRpwKAxYydsqm89Nti94QJGs9QFfHzz",
  "key24": "2uknuiJEsZXz5ruXq2gkoNoG6LMDJua4Q6UMwVNYCTFZeCwdGLXwnhL3MXpGUtBWSHieenGwbvNYMiRXiBXLWuBT",
  "key25": "fMmXAoh4YzTgYyc3hQcUvaAfEc6jPgKNhKFGy65JY6AMU6Dza2hqxYJrSd8tqiDWPVVoiUFwKCs7YPnMB3R41c5",
  "key26": "PqvibGqtEocZ5S276PU1ACo4cyp2EyWQCzGDTcvpYX8sfxFqDPD7MuVUFNCQGR1PkAqprg7iunXHHnzgkvuyDPT",
  "key27": "31mqmaVm3i1Ey857XPWZNudXiUnnk3sdwJwQDSta3wAXo2ADCr7FvaCJWe842vC1JTXak9Zp9Ufejx9QEywSzR5t",
  "key28": "3xkT7qkDir2kbxRKDcFCf3fi3VSeypqYB5vWEY4GaTQPV8e8wEyBq2S9iEEvLpreMiJsdBG7kLiBKcFVCzwsncTv",
  "key29": "46JYwbTHKDMV63tfgNq4fpvBJKkBhgSGU2oSLyURuzBc1xtmCbkgVbjySiBrwbpYB2JUfeDrwVJU4ni5rB6Qz9za",
  "key30": "3NwNy4oGnrRDUH3bj9sawRsVPbqTxM1PMKGW5D23MozxUShDqWAPmGzwzFfQ6CRzpV9urmiJ61vRcWkxcQf748Fi",
  "key31": "bJ9XFu75BZjJ3LrHmvutXtbJnS4sayA7KPdxjM1KK2wXHnKACPsVK6eaUFeQx6B2HaNLKDahXgbgnRTVsrfsS1q",
  "key32": "4VL5sQbTVXh8ZVcdj2kpbzt5cquQNYpQB3uWmeoouzUzdT7JyT3J3swmXmxXxN7d9xuGdrnEp5b6aFyubqLf5XB8",
  "key33": "4EUuN4eJT41E2StmZXLmY8rLU84brEup7JfDoM1bwcmDBgBvnucqbGyfK5bUw6HuUfP78mHancjKRfBJ6L3BVDUP",
  "key34": "4dCaYYPY3GzoaSZsbmppd12xJ1bcE6q5LG7Z5SaBaHzVAMVLNGvPvxeuRGgPiVMuLCQqnfocZCUfc6VBAUgjveJY",
  "key35": "45d4Sa39abSrzRj9RoayTf9ojacj58WSZGEWquMiYsE4x3UrgqYrXxrtFyQAUosqPkxSRT7yjQ6tcebP3MaXjHmR"
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
