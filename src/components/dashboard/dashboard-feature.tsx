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
    "5A1Wk6qKgEXPTVWEHEefLfbK6t8UAG3sGsSCj1nqnnZwYe9xBfTHiYpLWmLDoesgJH7qfhtsFAic42jd9Xre3p3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51j2Se8EEvMdU37Fp7LftMeeETSStAfaWG9T5LzwKSFzQDQbzwMbcw74zEBFg3NgjYHhKMW2cmfVRYbb8wgJKDun",
  "key1": "2RDtg33sy6VBsbKLkhuz6mRnNsyGbhqqHGpSXqyLZmm2qsLjir5iGRNkiiMVtJ8w29xSiuERWjpuMDDjhz625Edq",
  "key2": "4jAxk9GobipZd5GZfTQB9HYTJPodNVtReAMYwA19PpiJXh3y3SEDegeBtZnJBfpPZaXfxuASUWwSi4mm6UVNsHFi",
  "key3": "54WfnTEDVhoyFLwGbqXtff2YkPgzNYCYjyvYzvwYMH8dJvkiTFsy3b7vZsiPxreQ7xf5V7WrJAT3iEafXxPZoGX5",
  "key4": "3vZcnYgE3cHvRMgwtzexmDiMtFWGRuGeXyw53wG6J6vqPj6dGNS7z7Lx5wn2iYXgZ53nh1xU7yzPkCJ7qKvUFZRy",
  "key5": "5umY9wWNPkHhcPQAi2GptGhyPQggbKpkYF8tcKcCD2vYTujnLBDgkqGteDSGW9FmtMasSrhJ5V8RGkVtEna5qKHy",
  "key6": "5x5Z3dhrsSpUZXwNwpesGzr1WRTEqTARizrThkeKKuJxYixXrTwTPqzwR3DwBuT3Qojjyasij195ik5BdffozTY5",
  "key7": "4VRZozJhNJFwomEyrkX5oHoniutN7gCtt22FMGURfvdix7yDibuShx1mMKyB7pugsM3TgT1Uk19FnPSWDhbLeZDV",
  "key8": "64FVabMr6pFsCACymxvSh3RuRUXHxA4A1YVaMnz1mKmVL4CuS8RXNAFdmDsPLh8Y7bqxRt4mLnM5drZzMuJNUj98",
  "key9": "2Zs1KskxtHQA1PudnCqPP6SR9CZcaxtc6MYsSjrp2BW35k8uSVzKpJWwoCt4YRrSyNVZNTkRp2DnW2kMAufLrxCH",
  "key10": "3P8iBnAX1VYh6pkctU8oYZjNmewxJac7BMwzeGP8TojWAnXdRQ17sJmpiQR3xvS66zLh5pUwDM6TbXvVqZKxBfZC",
  "key11": "3b9RP5EGotQYGruN9JwQjtwboyTKaYa4uBLAxuNxAxN31DQWNSHFd4ivKJnvpTgV6gSU9SbRkM8V6CMYZqihaYkH",
  "key12": "4kE5Yd97Keox7sXia23sCTybRWmi1tQK6UKzvwvJVyykuB45e2tFDBUbmy8YouAU2VLHvXSFtfdu9vqxs4KWNVyW",
  "key13": "2jCCRe2vN2oskF4mu55GtSbCitSQbJmfrymJJpKeRcvLL5f84TLyK2HYjobrHFmMwzeFSsxmc1jnkbyv6ekgL44h",
  "key14": "HpQdym2dwAV9fi4fgVdeaiHPbyqFFVUY9GDHBtv6h8bvQTYhqwjxjP4oWBQwt9WxmrRuSovLscqhixSD7y7Vr4R",
  "key15": "5SfBvCNGTfZYEbBBhzVDsptZ2hBuTxngF5pNvWpKguDw3Yx8YZsyb7Xo45pVsDnH4z1fcYVekfWMX191aK4Ffryd",
  "key16": "2ptTLmm97CNJs7FvdDef61ZZUDgazF6tGUxvknbwVC7asWfF9c32E2tSpcBnMvZrgvgtEX3CPTDsG1WJVJy2zoYh",
  "key17": "3xzy2wehWXUZohV7q2WADfrCyVntN31uybG5GnRkwFEJRWmsHrbheD4JotTT8E64qqiqh26roM5nFG9MNMUwbP4g",
  "key18": "3xBstgKTY8JVQdqjCUFiXxTMzoajDWJEEJtpYwetuK9tUHRb7FTBCDkJammnzHRbdUVvaKps3tZhA9DkLYxssKQi",
  "key19": "4AmDZj8Vs4HztAykKaTCVaPZLJd85PiUzwLcvqwd1gm3NVEU1N9reTe1XHy4oVHxWqdnSiazXpo7EfmER82Qr7BA",
  "key20": "QoiCo9ocjiGf9NCY4L77GUjBnnP7sKf4Pa1xEFyV2hkMio63UY9PhgtJft5MZf5fzRuxFYAQQev3qyzjNKuCU9U",
  "key21": "4LrrZpLYqfVU5D4npxY1FSVaQJ7JWcMFFf2XkRm9y9DmVmASvAPyc2rgzycGYM7YVd9ezFKYLr6vKo4LfbDnn4rF",
  "key22": "37c919MUwU4Drzxj72kC6RkSERaFQbX9ezVTdCdkrkzmqpMxRm4AigcXpprnudNqC8dj1QKZ1nZMTLwkuovRh5FH",
  "key23": "3Xfx3akb5QvR1FD3paQDudke6qGocpfhW1s8KcZa4Pz89FDxpbeKRqWCxCUqiHzhQdGv8kvZAhgWP7RcGmzm7e7h",
  "key24": "59dCyzVhaPYeVHf8hjT5v9PZqSvKCL1KBuBBu82zqgc6edsjDJD9dEH5vweYZ51GjNRqqP2zzGGKe7LaPZczkXp7",
  "key25": "2XoVbP7yBR1rECG6LoV9K17qbeezRuxKXZnFdQWB3T593kT4pobUDim6qj2YxXKZbujESPpTyrmWv2b8JXDnJryE",
  "key26": "2zyCwpbyxZqKieqWZgZy4hg8ym8vuUpx7qynMQeysSvVfR9gQ4bSRi5wczbtMYydEq1fUsnhLPVyDpPAu3wEcUSE",
  "key27": "2i61Sk4g5tWjnGoARJmLUy3K1pKHpGvyFMpDv6yP81qKGXC6sYG8X34tv4eZmGXfZYAuo2FAkpLH5RMEyWxRLxi9",
  "key28": "2E5BPRqVYpnJyNKp22zSbeY4gGEqnk7fHG6mv5FMYyh6aS26ycTXQxfjacEE5KiddzJXW4wt4Bbd75exAsC3FXGh",
  "key29": "52WjgLj9AUeMsfyam5pTGN9CJqJxFNtNafrumBPNPxzBU1ALSB7VEzhVnNDRMjuSWf1nW6iES45HJVd1kJznQnio",
  "key30": "3qadVc5cmD1yMnngoAnvDRDR2FxWHFnJfAHL83DipPMrxwNTme5QPwGT5iiv3cxpoKT3UtntB6Nio4dJEeRh1HM",
  "key31": "5YjA5JwN1c8G2rSdA2CeaP3coCzJzHuusQFTRjkQp2uvxNuJA9P89b8caDf8AnAjWLfuPGcVVgBLkvF7S2YF4nZ4",
  "key32": "4zRYgteEUFtoLXvCiSR1dJATqkL5BzmTiGBNDKXDeHzGAMgLqgHjxT8qAg5oBwUmBRii2uHvBVUffUNzFw187jL9",
  "key33": "5Ek1Eh1R6dNPwAXZsgRYqcvhYyzWpwcJuFZbAYBmNzQftDuboGLAWbhGXbn75EfJbpRUefpiH7tvjq1vPSmga8Po",
  "key34": "5sZFRg2pe5z4sfiXVeJKYWxeWxGjsPNCqFkhbrgU238ZgwQNeMgqkG7VfY3VJgfphXXbaS6z49LsjGAMtAfuh4cq",
  "key35": "3JX6sjp3WLcTZXQqchu2XW4rVe6ZBYxH4QzUWZq8yiJm8M6jysCi7MMLgZoMJ82GdqZXE5BjQP6Yk3EvBXQsmeh4",
  "key36": "FxmYSGcb8o6LnSDuQNk94aXp1T8rGobKvh2HwBrPExY8P5rBZvnCVTG1NrpmEQbdDFcajo3B9xxtMy9t3hRk7GQ",
  "key37": "5jTQPgxFFjkiMc6cj8nbFEYEp9em9UWWGAjvWcJzN1NJv6UCdXYn3WNtp5KWHNipw3xN1qasBHTfgQtss9FgSSmV",
  "key38": "5FNc255NXsojhVWnHwjjT4vKyPEhsYQkZTKpY1SvAE6DDhD22XtEbGgvcR3jA7gKbkFfvPa5E1UuyrmNkvoHZfVU",
  "key39": "3GYqEgLADGccv7PRnQ6MvQceXAvKvuQbkwJNUqqq7M8iehs9hiUFYBNdc4c6itDGQyzw7dC1CA8uwtxKbkenGD4",
  "key40": "5N6au4iD4YAPuL6K3tpYLs8zPMWTw18NfunEepjJvEwNEfP3xdVsWwPN58sfPc8HgpKT2QsD8J53CvrPb7rqVMUr",
  "key41": "3gza4Zg7WKbJTNKyvPG4AmUmJibv5yohevkNDTLxEzfUrHt1jYnhM7HEhB3WqHNUrti5xSak4nVz1BPYAshMwuuM",
  "key42": "3Fqkgb1qaBWTKuSFwzfUuTqJrTv9XMjjxDy7nfoExbrXcdm1fnvkghEbgWYkBsPu66U4BjzzcM1tkB8w2LpMJaS2",
  "key43": "3j4EgyCZWb5gkenaqYd1s6iud8zvKJRRtbGzvjb88YAfVXPZY6Ee62PbzoEzhfxfyawCMttcsEk37FmZ6WeghbuC",
  "key44": "2R276mvLduVYpCoCqatNXeKDGqom9NGUbDq1Cz1NfkmQMLf2TKe8ycEwrP91pLJwBk8NnfMSFs5WNktY1HKXLRAc",
  "key45": "2VPkHqhii39efWaem2NiGaaYhfUkVtANxSJcJL665J8dMukMcufo3qFux62QD2iPqPbhzTFq9wgchxsUiKnRJiVE",
  "key46": "64a6j52Kqu31pEHs1oZkdtZYUNQngD4JbK8rg7T9rDKJu81N2jqgigHRmEjSghY9cAs9V7bR5giXexjaSX18nD9S",
  "key47": "4yq11bRzWK2U8okkKMoJdgQLxhSG4JHfiefVHZXqLRPdGz38mv8CR4jmZAtVZSKhEEyYdLtGQ9v24jeFkH55yYPe",
  "key48": "586Yc8Twfj1Kiuv2Zw3ck9UgFPwjqmuzq31YfWxZZcg1PbU6DjR92x5TABPj4bg4XgAAAri15k6iFNBHXWc2NZpP",
  "key49": "26eQPs9fAZzG33nAhsvhPABxbbFCbWv1Byhd8VfNUpzdzDTqXLVDXkcgMmRY2HxdcvtvP3TWzojn9qJUJHvbnfQR"
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
