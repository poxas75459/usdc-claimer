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
    "xcwyGyMETyGRie9sHLkdpuFNzxrYjhR2KWt9c8uFFmHovDyuKAcFT14dsuUeb6Sf3nVCoFEH1wnEBWYVcq3Bxoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cx9WL69kHEAta2tVU4TbWQBcAfyjFiSYhjjQoQrGqazoJxW8Ckw2g1sMZwfk9n45Dd4ZNaAbj2YHtKsJtDivJF",
  "key1": "5aaJTX3FYA51oQXhvZrHdAcjDsDRy4hKjFdV3ehZYxCS2bazyLo4wDybR1sU5WDrRa7b9cYm56DWYdv3vJa2s7ft",
  "key2": "qnqrY2HMYh4ixSjEbdZvJXSSZYgXvarn1eT61cBFCdLuSuCDQNJzCgkdYkj5eWdN1BLTNoYTiThVkte6wbJ7H9t",
  "key3": "2SBhc6eL3JT4UxqYnPrP4BUYPX3eSDJa7PPRQmwNesgbGTEDpSFSPoEtCh7Tm7XmNe98Ca2GbLodoZDg4ZAAh2E6",
  "key4": "5QkKoJxQardGvnKq24cGTTmhDCcuNCwoPnTRugzMMCgFMEo9HsCHSnuGztoJniZGarw9WRqh7HaMZb1cnC2r5r9N",
  "key5": "4Ejwob8nxCMYVFvgS6fjHwMNNNavCPdgPp1TFTCUoMNphmY6jASQikWT36iRUk43nyeD4H7GWmAbXTVQa5bvXMTk",
  "key6": "322AFAoLUxZjcUQNG7tebTE5H4aS1kS51Wr1PnRMKGnqQ2baBiQ1R3aNA72ANYaC42U4H56jh2VWwh5NVCNGvgEV",
  "key7": "2VXpnvGXXvnpRHnPPgtW7Q7W3NHSin8ptmiiNfGSunBMKCkgpKPZHF1BptmyP9NEknUwyTuvkSDwHFb1cyx7Ajjg",
  "key8": "2CCXbNeoKiVvSKF5KWSWf5HF6sgPvzaUwqbLySGvSNSqCgG2xynvdZgC2ZrQfMjZrChmsdKBhQAdbdX112mbWxvW",
  "key9": "3qkyv2EhCX4igWjjKTNwS3RLNUaY3gtzRKyLomC2QPL8ow49gqzFhttd8BY3V3a4newQo88vqLARsm7cM8N5UKFE",
  "key10": "67dthq3FxghwvuFmAzTW51WdqLbb1eVDDGT88Nar7oMjE2JkAYB86X5mqsUy3mZ5obsnxnp9G39ZYiQeM5PY9Z9T",
  "key11": "3tznRMxBaVHCh8zLSYfXjKDV46EvRn4YeQ9R4GwtqCLPm1GWG5DvLZHKnvLaccdb3UPSasX1K3xLKDAN1ffdeVub",
  "key12": "5QbiFuqq1VjHYJgFSbyKoK6MFDmZkCzRmHFHrHmKUebUpRY6B4VsdRikhiYLFoiAmbuMyv5G4reA41CT7No2WdCK",
  "key13": "4YhVCoiEKM2ELFVNKHVoC3igH19mM9mnKmL659m4EwJ5WXJbAQEYmdUb6r8KB2nLNY4NVjmXs8cj1Avj6KNHMrdc",
  "key14": "4t6QEqtzZrGKzaVEjA5skuU4m1uuqz9sE7DkADMvHgQ9macbRTk3DpL5i6SoL36XyWXvvruWXNwumi4Ad8x8z8mg",
  "key15": "5ER1c7aUy9x7qvPCVicndD6jrn6eSEusxiQ7XJn5nq5MiKXa3GFKmX6nDioiHDS7j3z7YzExZXQWMC6grzEPpP5C",
  "key16": "9GGjbqbC4bervqpAui693ecw15qLWf8Syncm7YmyYNNcBL56CTuTHNE2LHuaueoAjsi9tfWeisd22u2DsPRWfkM",
  "key17": "5R7UiYWksLu16VB7HX2QsbDfEbx5XJVPzsuNmawEzuzjZk6QSzbih6dhRxwLBnf9VhwiFYud1jZ7qMPSvQhb2Ybn",
  "key18": "577piWSWrhHtJYGnGW4bpyLzHzzdRrkV5EFEAaMSt9ZrUH4LW5Rq37BcAKdeagsqKJzTjDp1FrNB8tRRBEYnEimD",
  "key19": "2YN6cgnwe3v1WkvT2N4G8aK1parZ7zhx1kTQ6pPKD5xAtrwJ4g54iDRiKiCeDhzZsj5XGyFMtwTR2eQ3KAQET88i",
  "key20": "5j9b5JnkqRJHswnenH7uwcXYtAS3tyuMx9Cy4xvEPX4ZtzyWT4hbiWJN8hritb7UoVh6B3HfT73f2aE747nCiDb",
  "key21": "5d8EGfxMBeZtAre9dmVZminnghet4CiEiMtkUhxjSwnPRcDjsABfnBSejtShzkqmkmfSe5r6ZkqZvK7zu9ynXAGZ",
  "key22": "2ZX1BuJhM63BnxyVx4WWtYgJm6qWSFWBZMxGb3P7QCvhU4N85FRgFor1u7HBF55LUHhYDq8rdA6L8eE9pMohVoLY",
  "key23": "5oHfC7BoH2LWPzXuQwa7aiPGdhLGViGiyHzAnGsZHeFD7NT8gYq4vafvDn6wfms7MWLgo3qMbXjMmDA9QGi7f6j5",
  "key24": "34K5BAtb3cR6MCWQsHxDZB97LjeFNH6K65N7fZcWXujMu3bZSLbDCZsUtcNXgKMv2v6tB9uXt9sgNTsG11gLvNM1",
  "key25": "L4doBSHmDNegZUBZ2KZ32vv3dJkP3S8NdxQ7Tdw1gmLK295bmfV1CvheoAh5nyLc7hCmQ1xTNwsQCtgSGKfZwmy",
  "key26": "241gAVNimZd76oHSs5PXAqWKx9y2ZQjq3k8GpkoXYg36p1LCHPwoeAAnHPpEhxHgnHVcRREjjNBUJWLb8azgYKwa",
  "key27": "375kgRiSxF24W3ef6zpxKLnLt9nAjFY2qiTGZZfq2LBN4BAGDXrczWrgZKfnZcbu6wfjg6YpqM7NFQ3uTTirrhPt",
  "key28": "5e5utCHPzNEs5PWKASKgBoET7EgUdRzUKeQetjX9TfCWiQUEqzpejm5xiMEhh986art435ik14fUzM77yBkGFKci",
  "key29": "2QwerSquEoN3fpQBvbuhufvs9frzRCkBpWkxTakm7dJ59MyV4vvrUhni4BtbyUjqroTuSsiHZNHJr2ksS463cg4Q",
  "key30": "5KBKfRjiYAYvc46UYBdFc6TXfJBoXNgrpmhD1DBh5VNsFyUpkDxPA6qv7fERsRF6A8fTEkNYjKw3WGyXjyQQA58N",
  "key31": "jJHpALiGCKp15waGvsYxq8L2FjdwXkZJL7Nc6zk3M2FPjqj5KDeEU4etUixkbf2S9K5UW4sWUTV9CLMgWyy2zzZ",
  "key32": "2ZukL2K3Q1YVrh1EgGqnbSVSofP7eBvyx63fMiemE7NK9hnDXKVYi8fFq4pjfgoVHy278PD63kH56egv9xF6V9BR",
  "key33": "3Nm3Scx3YTdQWR23H5meczSYoyhEKf42TNRwhk6gaSXGzo9F5sLmHuG1FLCPHJL23tE8bibKWVT49Y61RUX9AbWi",
  "key34": "4SasMkhJvkjiYHXfzCyBUxLBEeKA6Q5gTPEgBEAmThZcCEkJG3gF3gJKs1CCU3fQhvpZoNKRUxY8zJWr1sBakYVM",
  "key35": "4ZN72vSXhJdd2krFT89dvQTHrGcfcQy2cHBsd58ARfLG4UVmKL1Ee64v8fE3oTzqqJ5CaXdJ4cAJdEfgMwiw9YCx",
  "key36": "59DPEDq7UMcnhRXZiS4WECwPSJgcTwm512MztCcvUYtRCDDt8Z6fh1AhmqgTMLjeCfWJxwri8npqh7C45zLwsMcK",
  "key37": "3g93Mc4XVHKpwoga23H3oFCKV8PK6Cv1ZMpDY1X2Kv1ZWN2PPjzF83tDqh1Cf3v1q1iT12MiKNX5mBA4xoJ7icnW",
  "key38": "5dWLwxdcYkpGqgEbEfa2BYyj22su1YjZXjCpjw916EX65LpGd5UaGZgTCeKt61V5Ls61HzU6aKXZgHq2dq6tGxTV",
  "key39": "2oTvKK4mQJAb5CWX7wLGFhuQaTUnKp4gbnUBMY7wNTZmdBrrVLq1iB6BkPVd6YZeM4AM7jtFKEkPEqZBKYWT9BH9",
  "key40": "3yfuw796UfbKLDFQm9zK3EsRaxaYd6AiWV2DS8HvrGEidKs9wUjhNgFeE3JrifqP4974NVywbV38JPdMhgKo66rC",
  "key41": "3M95AYdmEoUz8uk7hJ3kTwFVHu3qJHpCsxZcjfpSHZh63DmpRp1xm5vwwBwydBck8u3McsHzgt18v5QjUW1vbwCJ",
  "key42": "4gLyNyo8JLN2duRBNnPPibzVYhoee9ifYct8tLgxPtLyCWsqMroDiNWriQtqE4xzWNAxRZwDW3BF4yKcymCHef9B",
  "key43": "2S1RGimNFtY8f9bWKFBZqhgCXqVoyHtLHv6StmPELsPUAMj1rDEXgbs5g3uiK9MX7XcGcnpCkuyoaCoKtesS2ttj",
  "key44": "67a4aKntLrPVLisdKftEmb9WuDV8YUTK4Qfn699CwEQ8q2nAcssoC36qk5x1HKpzQSUaViisZLVgtx55rmomgV13",
  "key45": "4PiJiXh3wmRkjkwghF6dqXSx8WbNXi93LUG96e7McPaZrMcRr9UZCwoHgp3vjHBhNz4U23PpLTNErtFuwEgArM3U",
  "key46": "3dKuYmuQ8YGDtMwjmhzNedRxwLoW2y9fh1H9YeS8hrTw4rXiJJVcKucddoKnnvxqxCgeiwU9XEo9Y38k8Jy5G1Ps",
  "key47": "3xPyT4N2cYErUWW2KTDvtDMvKzujngAZrQSRPHzBymSTkVjT5wZuPb7rovhCcCgDLZhXq1PmDWTsGs5fNniMYx6C",
  "key48": "4fFQQRZLYxZQdaPwHhaeDmAnvgY719RGD1x3ZDBP48TgY4g33t9yKKTEusEWEhFUmVz2HyP8m1ZvxC5EjXJzZqTy",
  "key49": "41ZrCUJHuaHb4u2tDdJszAC16tiYmk6gUpdcNaKAgfezSj8HLeqF7qCC2AFoz4kwUs336xXDWdE1jHGXC8qSYWXe"
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
