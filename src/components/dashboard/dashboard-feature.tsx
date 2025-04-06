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
    "5cSXXAdSUXR9rxdxUCMYnhgLkUzKCGEimLSfDK8hqPjWB6EUfULD64j7qqrv7tLKW4sTunPcVvHU4kWsyWp3qb6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5SYMi6piVpTMghXVJHbHyRpWsZLhmgMaELntubrVBhVVfUKPgiR8BdDViScTQtecNFKqCijjTqe8pJDdTXw7Pm",
  "key1": "2qZ7PE5yznZRjKRaK2iD88Vmu75wrHYoGposgeYdH2ggHNWBgf5SbVhr6ALt1iQNJtD2RqHM1RicQPxPt3JQA74q",
  "key2": "5RiTjnT5LpNPFKDLEs4PcNAmdZxwAP5chgPWvvi8yidtY4nz1Jp2MRPYwpdqfu4DGtCkXVTV8QrYjrYuLCqZEj9B",
  "key3": "2sRm4gf9kT7b42LsvhZ6aPdZX3Vhm4MNtg13e43HHxyVpQA9ghduNX3gvW6E3pfKadV19Zd4f6vs1DGE27mBg9EC",
  "key4": "4By73VbeQWzo78LQMwCnY9QbLDwemAQVXbz6rJWZLTjFSse5kmedh5R8QNvH41HhRgHNBMTUJnXyfViDF2iFE4K3",
  "key5": "2Eqswg3z3HFGuWdRwuPCdTZo7sZj5qSdeAs6ckJhXRQhGEzgvJq1Q9JmczSFUsVnJXQxuNiDLv8TZbSaNG9Ha4GE",
  "key6": "76zw5NVD9NTstJ1UMRSAAUXqtB11SHBLynot8AV6weQABuX5DYp7hHygdxCPTUxLLayhHH5c7kvxwLBJC7vCcGQ",
  "key7": "5YcZmz53YRgSaSDAa6AGQdsgKCzphvXuUe8uH7xjmJ9UFm7qPjRSmGYYjDCJ4G3STKW3CQC7Ph1Jx4oSpDTecras",
  "key8": "PfvRJYP1CfMowzYq1wCJFVKifeXfLbTaurxBDzQaYSAu1cECwFMrNYARRZz1YMJz1T4Bs2it3U4dz3SdJeUxKP4",
  "key9": "BndApKGyWnuSCk8ZAzRoDUttKSXQvnYBWeThSQB3ApiTd9CoRCJrLHR2nJibYDApbMhTBF7d9sQquSgU8wGAaY1",
  "key10": "ABFgMHxh1oome3ES4ngWEygZMcPFibXRnw5vMtGarALLeKTJ8KYcNYnTFw3QuokPQbbdkxGvCvMV7gFnpNyRRbk",
  "key11": "55HyoAzPu1kpXsU56Wbs9ijv92Gif5fv5sz87GfFztX6x7EYaPoqiCKnYm4bxiFQWhWmVxsB9tZnv6biMmkYek9x",
  "key12": "2a5Wmpv7o7FbJqe8tqXX1ejD92g3SX2rfTeyWyLyZFZkPhcPUZYB8CMCXtNDGqEuJoud56krMYA7VKegR3CAEKZ2",
  "key13": "GJfgHQCGBg2wrqn4cBZjHC7uhrRhbwGAvGCQKFonfzYQrTiT3kWEELv5x8BLGTzQVoQscbwJsMnXFaeXT1Bkod2",
  "key14": "5YPzpdw1fCoDHDgUe4bQVFxiHhQMxidLRRcqSupah6kQGv7eEC9gPrNvNnyoni9DDrQKgpcDDxY5y9bXFrdTfWwp",
  "key15": "3tXnet4a9XNbD5kXJZop4399xuhhmsahFXB3ba72jKPB7f2yr4z2ctSxN5Xugy9gVqnxiGrWuzjhJ5XsNuWCSWeJ",
  "key16": "3y5hSwnbKkMca7NcEEfnk8TVMXqwnyvxsKQY2tQAP1eK1Z3P7igYmFo38D53Y87RGVWeodgXF5fKehBMj1jCgXJZ",
  "key17": "VRBGexZpavzaMwUNMhF1VGUFf6KLqbBxKYQAa2zY6cTdQfzLtLYicHZv1d1D9Na9gpxxk55E8o4kAMKM7V9V2RL",
  "key18": "5v6K7Bp5WJ8rjgn6rUdhwEQqNtn3eb9aREc44sRNU7GJKBaYqmjCfU3ZXBAHRyGBoNs8yvYY47VTGDUfzpyN6RNF",
  "key19": "2qRomNgYSsH1niiR7e3FQxYPkb7nQd7qbjUMVHH4FuDp1mmsv9sjYtZHZBJhsFMdZN4rkAN2GtmYnkou28pGwpF6",
  "key20": "4jyeh5BgBETJFQkvfRp36aBbo7i4dYcyK4gnVmgi3LSKopdV84qRkbJT5b8Fhtfk86NT9nQ7sKaY6QhptrvZinWQ",
  "key21": "4VLXDWfLABR9HWBgZ9MSiiedAgbZ3QojJvH4XngQB3p5GNei2J3wCzFWEBHgBkRgtmigY5tCTTY7FqRWetEaGwBv",
  "key22": "gyJnuFyiwjMD8qYnppZBXsQkGZyfzHB9GfEMeUHvWhtTYGVNZRkGj75RWT5mAzzR9NQAYrC67TE46pkpU7rXNMm",
  "key23": "5WVhvNXroyKSRuAvMnpyacP1dqog88pGqfrP9rjfEpZVE74aQfQaqjHiofcJyLfCEMqJKn2trxMCQTjzh6ocJQ6k",
  "key24": "6zKXPWGHBjrAQxvHrbtSdxp4kMu7iDahCEMEWUw3BZPuo8CDUia22uDRxTVFmH438GVt6PGDp7Xock5xH34LCuV",
  "key25": "5ApQcWCk1BG7fJW9VQq9RZSVRF9ag8143yixY3xgdWX9pGZcPKRrdwJnLzyrELD3peM8miy3RAwY7nDzMKFinzxg",
  "key26": "oWL4KfH2jTDL4txggkWwTtb4Ustj4paR4o2oTZsJf9bcBnz7BWFRkps3r15q4WPscimF3WHrJce4Lvs9yVW5SMP",
  "key27": "4xnoMf5wNnh1ZBKzf713QAcGLtDhW4TSzxrVRkucTTWrAp4XpRHjCjmuyQHyKAUMePWBc4afnyYwW3rzP77AesoS",
  "key28": "4PLwS3rS8h8torCB3ww6Cqri1dy1JDtdCgTkKH4xWBXinq8dn9cXc7kt4U4EP3sQn4tKDscMMMTEsLD7Wqnbztcv",
  "key29": "znWCaFYDLCYjoURp7PnmCdr3mTfyk4fjx6sR75CVU43UiuBdx9ck9zCGMqBWA5E1NZushDv7ZYnRyVzu1UBTTk6",
  "key30": "66LtC67NekmSqZAjEPhM5aufArJzwSapGfRix1Urv2x3yrP3AnYMuRxiLskBjMfULqGuMezx8N1ZWLJ7g2P6sGMK",
  "key31": "fnjLvoHwYaR1DPPXPmT285jKc3i9xv99ePqJwqNXBtV3srh3JzFQsYtoVSKWPcXGDoxw1zBGixLVneS3ZVpFeh6",
  "key32": "37M353VpMx5DJyqa5bKvJGcwUCrEJL8Z31qfuW9nt1GwVLKVVW1SViT6JTh6NtacnEzsGwmfrrBuAp5nVBQuysSG",
  "key33": "5eoSiZrhWigJnmGDRoizxgYY7JNJcKeKtQfX6RqZUiQYxa5rqXw47ZcR1QbTG8VWrcSrwAQAUKS39znknooZtNag",
  "key34": "4jJ7jTbT6jYeZYMRVxvBiYM41TnRwXCDLBY9kXD2isgXGGFWRUrURJMTUh5FbhenkwB359h9CQL769oENMrEpdmR",
  "key35": "2ktbaSahLAzCpLCpa3JJTmTjbW4aXweo9haFQRLCxKYybraVXjW5yCVXTmoasczjYpVVcwtm1RGr3ePaTSYp4t4n",
  "key36": "fjBTVF9nCw8C1wdBZoNTC5BeznoNcnjwy1PUpJ5JnFh8RijDUqGgxxLFmV6ibsdGPWALbhEMGhdrmVnaaXj5uFh",
  "key37": "2jndSyeuYrMUUfxrTH4U4ANVisABmMbEXVQDPh57CT9gvQWtV88c9mNoqjAywmeyUsddAH2yLEFNthFGgVPdRBQr",
  "key38": "5WKgdLSfxmQpFtBP7m3K8LKEqbFcPSGXUtP3BeVySm4JX8kgfLDpARpteZxaR8QLSu6bpca9RbBHRkcn2X8MDsS5",
  "key39": "4gjxg2uiFF3i9CmLgyYeryoLn6j9bgLiWpaNQ52WTEW7B2pLjSVY9vFNikvYonwESnZsVnMziX6zccVm5NSC8YF3",
  "key40": "3W9vRTCiSGFjmpG792DbZKg8qbQJCujYKtwuPYc9qTpuUUpVvnj2FrN7Lp6SnVbThqL6wQwnDZBbANYsiAYDkKS1"
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
