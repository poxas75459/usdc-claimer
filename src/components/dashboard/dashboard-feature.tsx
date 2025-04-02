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
    "4gXzoQCBrs8BKCnQHa1UEgp9pmWr5TsrTkPwNN4sgYkoKbshzj7NxaAbcdyAWMt9Umgz7cQVyw12AKeyPfBxYdJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P9Tg6DtAUZ2ogDLvG1P91ShmeFrnDb2c6qqNC4XPpxDyXKfVWPHqDdGhJ7ywTbssCwGCaKfrz8RGHz5NQyDyNWB",
  "key1": "2ZTZKGxurn4fk7YwSaoWN566diUELPgWTmkLPXgxgBwfnpeqXKTNoZnCKk2gGLuy5DSXpmcHjdQtR5WgM6gbH3z7",
  "key2": "4hn1PPgb5uq427L53k6oMVEvaRfe3ibXG8FfxQyNjqtDZrtPaUMA2hzDzRLwQ88UMRfQmBGV1veAN42sCr7BWbhw",
  "key3": "4pZRcRBUd3CzchRYqiwAZAe4wWnqs3Gd2tG8uFHS2A8ftAMcjR5zZqWtFxRimNZ4xVcZAcHBZ2ByadGNFoGPYgPn",
  "key4": "3gD65SKsGhLwXabsq9oRbnqeBiWnsX9rySMWyhX5p6TqbGkW2qxpcESgUXj7JcjgXbMrvuM4RMYutJKM2DS7fPBM",
  "key5": "4p2Sz6daEZ9Tk9Jkjg3cWFWncbhrew1fFaafgLFcBaP8bbi2ZBgGEEhMcx74296d2AuhxucmhrC42B4oJ5eGPyLU",
  "key6": "2qMisjnYh7o5aPqkAPBrpPoEwgViiFwk65mh6wMVpTUahNCrUsGnyfGvwMsznfiKoK2jB45WzDAaF5bBEy42F195",
  "key7": "4CeV2b8PfKc6efFWHWvFjRZSGwTYGoCetpuuqAWwbkrJEQDyV458EAMdNHdFCJ6v6U2tizAFP4SiXVu6a9XHp9jt",
  "key8": "43oY7Nmr7gDyQ1WqQf76SL4YebsKE1dmJBz2YTiGbb6RzReAiPvMypG6WvgrtQXLJ1SwreDiyZAvUMy6rCbvyWAt",
  "key9": "3RVQxmyEZPCqi1qyGAwmNmv4o6UjwaEiKHo33BS4A8BiSGyPaudry7DBeo4Ubz6Radj6WMvQW5TyWdkDqEX4DzDA",
  "key10": "63LxKsJtxCb3R84mGSZURjortsZhdoNi1jruiGBk8gUr7BynUQb5DdS9oDQ5km6XqYUdqzBkSeMXVbeYFCMx1Dyw",
  "key11": "5qmk1xtqQNZ5NKLMriTjCySRN9r8uc9sRfpV2ASwBWW6V6a7ueERc4XyXW62kmZQLrCg5sLyXC8fR1ePBcvf6rN4",
  "key12": "4jykSntMsiaZbo1r3CmGfcn45bfqtvtVuDs6j4p5t7i9wyL5DfuJwKBfWFmFavEUpii8FMQAAxiG2oCcH24nkZrA",
  "key13": "RLxW3xpGLwjpkYkq8pSMKCvqh5se7yEvLV8CQo377Z9qYaVUuncCpcHbsKSSQtjVT9KQibNFSQ1SZQy7wA8yVmr",
  "key14": "nRXPecpWKjiUxDG5JN6zo34AW5hMv7LQFgCwQ9XA766UcaqbRVhXwPe3mAocL8uBVgXTxruJEdpEjTU1V5PpeiH",
  "key15": "PTRtqP1vaNqUUjSfZvFoeS8VbsNYZAyPRQkYe8xDaSwYZbDDdz3Y2ZBRdbo1gd3KgR5TjsnmCLF7yBoi4x2WJsG",
  "key16": "4aGmxwzhfXiidaNRhWiYFoZ1vJE3ew87Hs6d2CnzR1ecmiijZbUK4EtoKjb3baB2KCbpjKpfYm5UmSHmaWHLZjD",
  "key17": "2AUdMui2agFhQDsWHFSna6eVY9PHV595PaXXSyNzZehBiD9gmmDVphGCxdoteDLxTnddfMMZ2wpET4uwhoiuWNaE",
  "key18": "2nsmVp338YVfjPs9rN9i8AbVWsSdFrKKY3FYqpDE5bNN1ZAhBCptCqfzjQQnKBSV3H26jQekC9MS172L63SAGiqy",
  "key19": "5CHWQmb1t3wNp1Qc8CUZXr6DUKNMXpzZMafeD8ibXqWEkgiW3nBKLbRHgRWmFSddZbBJB4rDG84pwz86bZXnQumC",
  "key20": "VLPxKf6MMJboc1ySwv4LBu34WuMT58H6WUbm1PzY7kjxLqiCaJJhPfFU4GWKUAgtduiSB7v6AMxqPfPiRpqP7RF",
  "key21": "5AXRLTxFx7GQMB9GsVBZJGabWFxscDX9f93q2TMkEa1VERK99evM9vT52LnFs9Nk5huvkhHovkqTqyBuQ9GkH73y",
  "key22": "4jURYNiQLc6H7KvTYQw4jspyYbSwxz8eh2p7VPbRuMZS9gQ6iqEziRhp7adqu1ZwFyFfWA55FQAkMkpE4bf4Z7wa",
  "key23": "429J1GoCucnZxSt8qsabdd82a3NmHeBirHmeGqRdCK8nxYNNjBG19SZUDV2eNjj9VcEsJjuWgYpF88j16NZLshRc",
  "key24": "3KXKoyHnh8uJaX4GWk3nomMLVUwD5Wbs6ZdaWapbrvYisVBifBvLs4pPsoLfi3atw7jEyb9tik1ZbtFXaMJwDPsX",
  "key25": "5Kyk4R4yQJCsDScYgeEy4iYkBTXE5mcqLRepQhVpUAErE6cTXU5din3bG6u6YvCRhLRKtzCuD1oeYRrirzJxHEgd",
  "key26": "V2ci8txz2bceYKa4MyCoE9gboJLq18sc7Hu8WDkA3c3WTdBeBtbhUMSG1u54cjeHG76ebUFhG6masUbrdSap3Nk",
  "key27": "H2oaXPVA9jpRz8HjKBQwpTg6iU6cmDmShF4Lmexdy6GQXmpcd5zf6jt6dEpkNmWgoKsNWuHPfnUMNF84SRR5LLp",
  "key28": "4GEiV81VT5ey8wv1Sr1YwUpL5o1MAnaqHsffBAC7vcN37YTd3RQukMT6ze5hZfqK3K1x5nSnaTNSPjRizAEn9AP4",
  "key29": "42sTBEo7YqosEwnJa8r7LKQ4AKKACjJWgRCoSjXnCcNy9ixDpBjwpvernH865Xyf9x8hwAurBX8maeVKm1m82sza",
  "key30": "55QiDfpinC1J2uQ44t9hgNpZaeFwMZCgZq16vUbacZCrwSqZgZLddFrDwjMSEWPkGxpqDvjMFRGroJ19RtS95b7Z",
  "key31": "3YkntUWCuEUR4Tt9apccDmvdGhN9QjGcr9Rab5Ewv6DAhyGpDo92Fa2jQ81NMzjyPVSjUpjL6FRSfANMCu5TkBqa",
  "key32": "3Tk88QagoE54fM44zBgVW923zaToWNvteeftoveGw54hd4XC4VS3uS48bY9whkp56yXhK3XisdYymAKDY9RK4w2P",
  "key33": "3V5SXmTVJbnvAUqYDoNYPxQuqrbpTekQvGTB6oYgVsyUe9hkBV1Gs2NaAKxRh8wshW7JNXzcZzr5c3gwKBPNTTJ8",
  "key34": "626tkz7W3FHhsixdQHLdKRQbu3V4zM4NcfNtXMeMVck8xr3JS18e6KtoVDAZ2RqscFYMmNXni8aWj5wbmxS6okhK",
  "key35": "384z7f1KSxzB3Wp9LCxJqu7FGQJwPRTudJZwCZzhKvMjqdE3WrmXc9jrFtGK9v8MVtr9zhr1BRhMdp8jtpczCtJm",
  "key36": "3RQSLZ81ag5ETTNRW1ibVf1Kj83QbSfUHh7BPmgczVYGMXxaMSisQEXKYnnDbyQook6NXGCdv24tkCJkQEsTWFE2",
  "key37": "4SwmgSNARC99sqdjfJRyEatL6P6EjqSdtvQRDqvkZ2txTRPPSE3iKXQmJGvgrHNDQQeU4xMRoHiseby5FQMZQaTr",
  "key38": "3g3isgt262me1QKNCzY23ziWWytGbkMVvPPxgqVw2fA67iqwdJ9oZTk582E261J1uiJ3HXTya38syZhk1sBjHnn",
  "key39": "26ojpmDdvDzC3DnsSfw98SzbtE6x7DfEgDvKKn5scU5F2A6hiWARpz6LH2Yo5D1A2eHgf4ucWNLsVHd7C8gMyPgY",
  "key40": "3xksdSJCkVQ7gbceSyAYcMtU4DVFxRBzZeydxxMmuzixEb76hC2ixhnga6E29BQ3LLQEmsa7UoBjWar8R8Xhfbvc",
  "key41": "4LJQGYiWJ3SAfMzpJe6Ng2KPhMqJXB5xDNMUfEbL8RaMTqcvFh9qteQkot5DRJRf2nR8FN5koDJdvGPq19AVYLuk"
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
