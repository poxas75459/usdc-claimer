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
    "5Nub9MaMZ7Rd77UbK8DGY4xAEdXMnQAq8ofGgFMfcXdUKZD3r5kP9hvqxf49nQ4SFSbcGLArE7wcbDb5ZZEB3a29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTDBKRKRDskcosqmZw1L7kGm82MSFsbUX5BAY9yTWCbWGyxp1G9esB2snponTZAsg8E13586KWYh2Cq7rvZEB8B",
  "key1": "GsoAhnRMFB7fA2kkQpYF861JH1NetUV4B3ufPQWHx4zckAy3MZNh5wBijEi3JLkrHfCNi6Gg7tg9CgPqkFY6Pzv",
  "key2": "GccQcv6FbBeBBuM9rmb3XcnnPq9UeUHziqd925t6g7M7HaJrEeYYWuHrUE5DUfZVnSWXFZiyRXnSNwwXXgsiAm8",
  "key3": "5sQdUQQM9TF79u5B95MYRRsADf4i9NiELF9g9QUGWKyFaGXvueHkhFvSZt4LWcYWmFCo6PMRj4FRYhx55k3GSbUZ",
  "key4": "4TFqvU1yr2GPCCJ4Qkyo6BnMrVfaQNA2MvxMF1SxsEEp53NaxFCeyAhraaa3X9j1epYGybBQAmCbJEoMnskUiKTm",
  "key5": "NN9X7ijv3q8igZnWY45arVseufSyirP3tTzaerwu6x1GRYu7TfnkhETRFnMsxWWJKGMxdEX885bhE93f89x733q",
  "key6": "4VDBT1Cw5H8XX3MGs321U6bYvjG9xZ2TxR7dXU6Va7XjxTgBtZ7VcZ4k9G8PbRVP5rjLoBHo2NUVfbLkqdNm1cPK",
  "key7": "4TNYyHuotysFPhDFrgCbGXtNBXNmay7egLiWzsPqbyjjtPLq4xfBt8wYdL7uicbAyDR6Hn53Se3bg69ZJdNgDtcX",
  "key8": "4gogfZS3nDLcBqcneNncHTNEmEr9qWHfsV3Sz7pKCgG1uvCGeZeyFR3uj6NhUwgvAj7MRi8QLFTp5EqiZUdCAEW",
  "key9": "4W6mQtC9NfGpnpMexxSN6uqPwQejGuuPgUuUzDSQ6cNuMvGvSPEiT7A5twyq8rHri7oCvD3NiR6RumfiWLYjFQko",
  "key10": "437B5Y8rJvBhEcvC8m47P3KSnJ7zTLxnRJLMWo6oySp4NSk68N6vFLx7Dr5qmthTyW9HrK8EJWghpduc73jNerXC",
  "key11": "5NVy7kGzNJmfzAvRz2LY6ChYPcNXjDVdhmCFse7SdkgE9jrtKKbucJ8ebQZ5si167B9H1oMS4vWLNqtXmr6j9ts5",
  "key12": "3Pw2R766gkeY1FqovxVSnXg6JJhFeCdMVjVLHne23yBcYJk6FscMzFfQXvP4jq6RVrgHf5vjsYuv7GL4V2Ma7ABq",
  "key13": "43BVNbM7j8K2UjAGD16dyzDaWuYcQRwvu8DWepm6NCK3vmZNEAHTVtYG9PuJLjbFCsRNKrfivxVhwpXYT9goovfM",
  "key14": "3R2VuPs7oyq64jtMDVqiDLs7E98v3PVNRvvkdxzENwB8MwMaLBbYKJAncTLuzyviF6ygwGfp82pHV7FkPkXgrSPa",
  "key15": "3XtC3G8xwRpEENT3GUfPJJkRmA6UtMbTrCYMqdxwai7oRvtcaxSwAyPqosBXHU3hpSxo5yA1FREUoMuGBk9ydm4V",
  "key16": "4hrM7QdnhfMUFsAg7CxpQhgh2aPL2o373M5oCWDKd3fmcFWevgUXcDaq3Cb1t6kq16dCaJEWEqDyS5WT6JNGcdtq",
  "key17": "5ZnzjdtaePEk2AFsYTPJBQpgoJWnT18Ly7fy44KmNfjMRWbZMpuDtsGHe3DfymkUk3hEst5wq5fw8gewKMbZdSFa",
  "key18": "2KLgbDacNBewXirqDFqM2TzYhRrvs9PdgRmiDNeyEWFFy5zbYku3jY1YZYjpyutj4h5rXkQvyzVmig6QvSRHRh2g",
  "key19": "BEHomjrznyM9dNPtudSwKxwgGwQhHGbpSvnxVkZtRDMxrKF1c4C6pRRi8MvChkCRaEa4EAfPQgTcj1Bogd7LCMs",
  "key20": "2KBcQHRM265QhmuEphQmhgUqysJU6AHr4AhAVUpyGn6Bk7QVapxYjJ4sSP5zy1JsQSGCcYkRhGdk6e1eKm9onz2n",
  "key21": "42vCd1XMC3DZ2iGfGUAPFrAeSZdQVKyntNpxmPtRYHm9FGtPyj2Tw3w2TMHPY2zHvBHLckW48iK21uVKJ6cHa8TS",
  "key22": "3nTmJ4RcxNfeXvbUPaSQJSDVn3UD6JGnqoN8p9hWjjAb4xQKQed1drDkfLzEq1BM3zAuCKv2ETEVcHeT6XWoWXPk",
  "key23": "3N9CobQQ31WkHoXhe5dW48wUYyXu9hetY24eHijWcRocsDZeV8yEF3rJ1Qu7Bm2TTJDb2Wtxe8i4hFJaSaseg8jr",
  "key24": "3Pz7XQf2r3pSwmf8112QBGM6ixjdUTjVAFBikVPTJUjvqutKppB5PDf4d5RGPsfbVginNa8NkovhP4ieh4oSvv96",
  "key25": "xXgqBVwnhwLcJFWxT23wRKgVpHgtN7QDuKobPCcS9haVkAHYL1BLSDfVhCkmCftdGEASyAvd41mStJfS71xA75y",
  "key26": "kCKpQ9JmyHustTC5quc3J8hxNQvPAxSYnjbrgrnuMVmAg687BsAnWEwsN6hKTRPS2VmEPhr6bRF8ukfWTPrTyFb",
  "key27": "3notvhyNYL85bpVsqgtgjawr5D55Ah8wj1jPa74YWfdRsB4JFUftW5HcnDdBcprHisEcRndrPc1maUGtx79bCLwt",
  "key28": "3rpD4pBAPrTjV1t2U5GEsGEZMRRGuB1vTYyHBEzWG8mq7LYg1q4jUoYgriFyGxWZNCyU1yWMPBuwiUV5u67VhWGA",
  "key29": "4WypCF3WzDRA2WcD8BZ1M3e5c2Tpooo35wpnBDn6VnCmMdTzp9GBKvHAaNoBEnEV414TYrgU4TKgXxDf81BVphxx",
  "key30": "4znFeJwdAgbTVQtnifYDrH6Mto1HKXAS9TV3jNHzvj3cKfZW3HPBVhJvV1D9LYzZZQwa8A5XkCYkfJCZvHxFfMzM",
  "key31": "61dNQ3Bn728N6LuaZijXMjydwQV3GmK6JauqYpbAW8cd96ZprY7CqB9xCrRrFvxsJfSL71zG1U9yYYasZzvVTNE8",
  "key32": "3XMjGaCM3ePwfm9VErrMm1Ey3SQU37ZZaP1cQCoFr2LMZYw8CAX62V5sXJvkGUfCLBuNkfQypuQqZu6tZPrS2tht",
  "key33": "4R8QTQMgZn9W952t2L1QZSzfpZHGCqPb2K91k6AHb8TtMFhYtkuWqTRr49DcuDVqVP996Uim4paeSyY1PRZkme7V",
  "key34": "2SF9JMs9s9LAafvniqvdP5u2PzYQH7NiaQoY76CSzXXpbd7Y9493WHUEcyqrktVp11bJ3FH4JKBNxWkgYYaZBA1T",
  "key35": "44Gf7p7oYf31gBMp2C5WAfXnE6MjWC4K2HDTPLJVoEbdkchHpnZSSrhG1G5ksp2HWsZfWavaDtLU1ijUGqnTQCsp",
  "key36": "3ahGcPz54s5ZHfFjDbQsB8bNDKBePUTDSRDwzKosaZTWgiGiqTJ9gpZsozJ3EBxpXMUS6xzLdaT9YMFS7p6paYjM",
  "key37": "gpGPfuYEiXcwx36fFpfPYjU227jaDYvCKSyEvgx6zgQkJgBB5HwDN6XQXhtq6CjZC3fUyEkBfTjDEeBXmj5XhTe",
  "key38": "3EcvuvrLa5eA8Q5Rc9tJyBdmkVRj3AeNSUzq5ywoXNuMVhYe4sLrJpSodTD3oY9gwT54jfJiNVydgAmM3BhxGXTj",
  "key39": "2PHgp6Seqn8vWMq8WfxPTpZ7kPLCqM7cdB9t2pQFvVQeU5WhWWFF5dcBcoYrCzSpbgTNXKqFZNHveLEFT9YT8y8Q",
  "key40": "4iYgzjfR5W5ccYj5BpXFCn7U3SE7dKtFbU1b8NngNQdBZ6HUkkdpXLcmvBb2Tud6VyrRBafUpTXZX5K3M5NL3foe",
  "key41": "4suH7n163YcXzzpG1qsa6gCffRSNqv44DFYPCjLqm1Z3XxS2noY6JgqnVf2M3EWf4kDk5cE9hYY6grc6gBtnpH7j",
  "key42": "goXfuQ4ad8ZnpQAwjJ7VWjbJPHY49behU2bJDRUTurqpgwSYyHLGZgyTtG8sWok2M94dFtvzGkwtFLuMTMtCKu2"
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
