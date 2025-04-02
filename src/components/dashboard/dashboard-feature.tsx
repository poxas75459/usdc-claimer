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
    "nM4TkhuLEoCvcdPqy8zDg8vHhvMhKasdV3WJXCEW9NWieNFKx6BfwdXxVThGhpNSLCFsfqM6X1sSkKRUuNdEekw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKGE65v7DeDPrrj6ozEno6tL4pQybyw5o1tr8wxTTksG7BTPJw6DDY8JPLo5g1f7bNuNvcmNjmg84W5PuQHLCs8",
  "key1": "3ErSXGb9K8DzLeKBzYVVVERv39GHV7hGfT5Zj1X524pgqu99qvS4UkXNKiTvLHackLmSmm4Rdkvho8dRa5YXoPXc",
  "key2": "37xVCnUi1TEyk1F35gn7y892AVEgRLZPekAqebr2bqLERMejnXbTYdCBhXvDSk9LR1dw7Kz2ibmEkigh5Wd2bw6y",
  "key3": "59GkNRQb3xcvD2YDwJfawPUN6pNLUMjvEDWqy74m8cGd64SPTv13oVrnyYMPJyC2APRWvSeRaJDvYKds6SYApgkE",
  "key4": "5SoeLw1kJ7XZkih6vEAMDz4Woe9NxpFNeJn5CBJHhyfsBC5bRTfipSKmSFyZBqEwJ4fR5rsesxw9HVRjMdpaZiby",
  "key5": "VZYoBJBqZbPahifFe2pYx77fwz22V9ore6TdnA9ib82QM824NCNfB6thixMFWuBBERztrdcsLuisSLHUUmVpC8d",
  "key6": "gZR42QjdUp7PhZMYJB3n4C48K9tcW68YXSYt7TjnZ9n9inJyZaiuqnGkt8G6fRjssfnNZ7Lk1kN6k17QUL8g6yW",
  "key7": "4aKxda3Jac4EWCzq6H4h9bHkTv8uWuWJ6q7oXcEbQSEPBckZhLwqc4WC9kczMrHXTZVEWKAAuu51hsU8r6ScUUgC",
  "key8": "2FyBVsWCEzkzUZy9NAdxjGxHbvnthnfjgmECptTxqmknYBvBjC9sHGGo1jUFQgXTtRh4FVgL1KYbEWYPpsdrUow2",
  "key9": "4NCYi4ijTjLEpDXz1cYF6wwAfYf84ba44iWaqzZAZ1djbgx19Ye5mEX5uqw9574gMJCY5avquEBcqDHd73KmDuLe",
  "key10": "5HLKmn4Zjx3jqk6oqAC3tbybQWkKBY6u6mjV1nmY62q3vHGYzGyPp692ZsBkyu9BW2v1uUtFupUBDzjbChh5esuT",
  "key11": "5i54uCt3pwdLC7ujRoy2WCeXiJV8S8VqsyqZQFVFSspbi6WW5628BfAeLztnksEeHdbJV1YZ9HkifPwadWhZWD5j",
  "key12": "433mYiRZb6oPJuR81H6c3MyGdNKvv8bd8sirrE8F4J3N58GLng5hq2hz31F9nuPGjt1W95zSrn1BeWVDEFwGP6Bt",
  "key13": "5VDMf8fjxCTyhLNq8AiRL2aXkHPoQfSDdnqKNq84eg2xTErDb9TMuzf8794TT6KvR5AwRAc8FMin3JERSjvqupUB",
  "key14": "3yKvcm4G81DmVMHVt3XdgVLGfSjbGv3BYCXSQo7eTwSub5rtmG4Xf6dqruATBsB2pqKzL1RewojwxadCFJuiib9a",
  "key15": "2ed5N97Mfhs7UN5QaHqo2Brd8Zde9QvbbTBi3NgeETh4Fxb9UxXwQSLEENtxk5rTRomVFF8LnTJooUHrmEaf1TJt",
  "key16": "28kXutWFR2uKujYUQzE6wUAPyAKeDkBgbtxCRGB6vnYvR3zossLibDExeeXxUiaSCLKkJwVx523FN5HRx8DCrx6E",
  "key17": "31Jg5UuwZbsVLuCYvF5h84w6bcHnEaGtY4LsSFmzSkt7ZKoGk9MdmVAZba9j4Lauwqb4CwW5UP4cQA4ndRXeDzUh",
  "key18": "3Qi4rGvzd9BEQBvt8DXn3CUeUunTXdhrwN5gsGMd9KHUV9Rxw75HgFnaJZ2xrTUDoBQDzevrB5tstRoQdHxJBpzL",
  "key19": "5hxgesiZPH6R6EqdFj1R5vudVifCrwj7pC5Sk6gjyC7AVX5ewi3ZqXWYm3ozzrQxUYSSgPiuuC3zThKmoc2jPwC6",
  "key20": "5L6iRkp84tt9MG4yCoCZx48EtgyWe8yeYh5hPGhSoTf41yFdWVKy14fWtbCoo16613t3oevg6MDSxh3Hqyfu9vD2",
  "key21": "4qcCas4U8k1manBXPfXiqZYYCnE6FQrAK83gHtsuZddNQXTHavqF9Z5autX9G8VyabxNgDQp8YKzGiFrKz5RdpBt",
  "key22": "3R7aBwSLyErjQ1ZfwmGRuStVvLGKbi6JNnk9TvVDmvahR5MZ3eHhEMDVqmghXesFBCuqHrW18KFAzWK3NQLwt7iD",
  "key23": "52dgoFQoUcxocyXDSCQe9fA18Mi1ZYyS8ZJVNCjX8DDaNVxaAsT1NpyvDZj2xZaHsTr9AXe7iFnBodHDcVyXDou4",
  "key24": "3AzZmWzy1dMWcq2bmk6fftq2BnWmzRggo7fwKgHEWhtZh1i4iRDYDxKikJGLrcgSaG726UXyEatW7guJLBYMGZ6o",
  "key25": "4G78jt748iWRqZWHonf8t3XVVFZTPPGGUN2TdC2jiAS6sZfcEKgsQGSpf2Cy3hpaKZhm42nFH2b1r2F5ACzSLgKP",
  "key26": "3faWwVa3vp37mDm9sFwJwMSp2tAnGU6vxrXWZ2S9QpLjWPTNZY4FBobDeCdD8mfwXf3k9utJQCcD92HnsssHuP3g",
  "key27": "4oGbc3UMgMCkSvM93As28D5y3t5g7gKnwL7FxmYhKNfehaR9E5jX81pLfqy4V4HzoEyA4Ltpgzpp7vBFEaYwstDw",
  "key28": "5VW3a9N8nNRRN84j8b1g4u5VrbH4Zryf464MmgR8quhWiRL558A3CCWY5oiesZGaL2QaLhbH4w1FceXTRCcyZ7ve",
  "key29": "N9kT3WMjFFgQaGT95AFQYcP9XigsTwho8umgyGgwhow8n7UrbdgG26qZUpSNxNugGMNyd7yGFe89hg2qnRAkHFt",
  "key30": "3DbpcNmYdYnB9jNMVJgdCGqoRxjz3GJBgnzqXuQ68addVxoezzRdqHxRQRziU9FaHB3Q34KMCXrTDuffzTqKcY2g",
  "key31": "4wfuaZr47XcoRh1Wv6gwTx1YzWDQ7t8pY1127PJX8a7qLvGgy48jy3NC4UeQnHjxVmxmmbyrtKkLC99iLHTxNS8F",
  "key32": "2GSNVPGbTsZ4jkARpwD653BoPzvLuEdPWszZD8FsAB3FUBmzhj2HBePZ21rv2HkEXh7XtRv18UQhLVwqHEYsv5uN",
  "key33": "5ohjop1ybPdS7Cbsgb62LWEYBD7cpgE5jYsczqsZB6ecVbyBHrBZ9XpTY9Ywp4yagQP2627bdw8L7ggQfg5cgucW",
  "key34": "4NmdTDMavGporZmhEuqzD66KKHWgNBGXnwin27dLytyqb4xShZjhYJP2wZQ8N6qEN74c9o6ioYQnCqo5mzgnTDYD",
  "key35": "3ztbpKe47V3qNXV9gGxasW2uzjcYdmXxGdtQFg2NiSstDhopZeUwu725EBXSAnwwgpnSZsHm9oGN69ks66ZA42vq",
  "key36": "3ZCXBKd4nWBLkZiyaz9nKTRtWNs8x6x7C2Ndjr6QG4gTpZFqpk1aSfUEw6eagVe9D9QxQAypLH5wwdboBUekXkhe",
  "key37": "28U8uX1JGbkha8211E4Gq7XgfgZKjNgE21W52kbQwfKWgE89TjLcNwD2brGDP6M8qpUaK7i5vgi934TA2pX7qUSv",
  "key38": "49pXC7dBzCHGLAE5EwDFGuNFZr2RrKtQUe5bPmfYmXcpvb3eBMLWMWCxEkamLKrozs9A4wzvaP2RVKeeroNUCZJw",
  "key39": "62TiV1LUSniqVuN2eg6fTTmXPQ2YCtXQCm1HAMSCarnjMwftqxJWZTvm5f6Z8rkDorYH1mjLUUgrighosbNBgtZs",
  "key40": "2eCmtvYffZKXavdWe5kEPCpNPw9TKnxYe2R5sBN2BoX7RjLA2BjDiJd2we6vsXnTkmxCXE4fmqh5qXrTjAAqn8JL",
  "key41": "4F8jyQLkPrpc5zv9LeGXWCuULnvTyZqfziLqpeEYqnJDxyQZraChRDChC5LxQwU6hqGKaRaC2XZY5Zzq7JNQNGAK"
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
