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
    "b1xZMrFqWWWggG3Zi5yzwaXtaTBUr5tatg1hEtoEbLL69bEt2zvueYpt27FUxqC1CfNcHRTpEcVqYoWaTQCTZ99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRFNom2MVxJXcy2A2B9mSEfMUoAgArhRmGymcBPBPt59Rds6Ef8uP5mE1mrPwji9UXyABPrZ1p4aYpPWCXXcqLS",
  "key1": "qtbKkUSzvnD7b6jABxahwkBaNSWjgvgCBmxSS1VvA9cXNRsKUZwLahSVPNZM65J9S1G48kUtKzd55DzcukExiMS",
  "key2": "2DAjWmGzmFs2Vk4ErXeK9VP4gbFtuYCoami8fZpQm95J5Dy9RpJcjikwmugRG72q5zytTkQz4D7Q2p3yJThJBkx4",
  "key3": "3aM1W4XHXeEhw4Gq3RhVZhYLSDWVpDbKTN5uZhzM9z6V3tRb3Dqe8SH3CDF3qFuVEoARmukegL6KtcGsKJuK81bR",
  "key4": "5on2H6wbYPwX8uqxJGYpSnoJ2uUhqiswHBUt4UmLvc1ibH57yLfPqcWj9DrjYFAGDM2qMXNrgnPATm6skMmyeBPt",
  "key5": "5sqxXbkiGw8JR4SWcVBDZPDh4b4DUuJiE24WEV2Z8B89pLsJDKazuDD12mipvojyA7cxyoCtBoqengGGQmKVirv2",
  "key6": "4iP45DhFcSWUq14QnHG3TjKcrFh4w32whQ2V7AKhJWQjBG8aZZbxgFoFi8rbStNTbwyjhXxyRSEPsVjzaJSKW2SR",
  "key7": "5mRfS7rSbwwUeuYCVawq4D8SAP5mmoHX6zN1n7dMe2vrXZHkVs1v1ErRdKHGRm6pZUwbG9FiK14itC88YPTWJP8t",
  "key8": "3FogUXMJyZznBTVuzVUVojpztt6aBV2MDbUGJRup9nWu1yix59W5GnpH1UFaUnntYk9oraPUnScNZU2hMaKyQ9xC",
  "key9": "2WdHkrmXSLTdSjYeRBojREBwrC12UR4AFmfuV5Jxjns8j8NdeUgp9FLxB5wbiFusFHeKuMMdHjKtdaAAycbqhUPL",
  "key10": "5yjYeWHaMRNbG4JCFMtsee8po2opsv2awBghg3x3dgmgCpjvVdbw5qWGD6cdCVHitZnY4Mkcw9nfaFiCfiXG6xY7",
  "key11": "2KNiY9XzBK3cWVzxpnMkCEfKwVcp1DruUyWa9Z6JZeyFCwfXNCNjeUbvw43vqht7D8qKfi9yP4prCDeSu78ym9Ao",
  "key12": "9DgVkxS6GgnRnCsRgFPkzFWnYan6Bt2yEVEowmZEmTxP8qgzYUsBZ6z5h5iRctNoLXEwh4SPLj1CMGnkiLUooKK",
  "key13": "2VC5PAEqFgRn3vxg6RTTUAsE9z3R6g9ZDECfjn8ayatQRMdJdBBpz6hsPXChhH8yYNroW6hTjTn3irEdUDrffrQ7",
  "key14": "5ryiKw5vgrB9rqMcbtJMiWevdgr6aoA4ngbfjQxbwTp8eb8kVR1jRpjzjyxkvrUZnb9LQkFXirt82EhB3h37GQdE",
  "key15": "2uuHrZNH8ibTYjWDb2RJUD7oDTJ5bQ4GiaVUiKXMQgrYnGRHJ9Zbzc2Nfi1ajJ63bP1G8uvXsiWXLAG3RCwjuMsk",
  "key16": "3rWY96miQPBwyh8pKCkxwfgxwi4LgPQCGaecCyh6EFiC4k6puyAQSEKNJq3P1ejs2iQ5CyfRp17S5fdpdvTnCtVK",
  "key17": "23Q8dnTyeeo6KNGaTpFD7v18iPpoWqVfviXGN5NiWU5bFhMpiFjrrXB5vvCMyCEUJrYYcS25vYiueFVaLEE87caK",
  "key18": "5c17GaAyU3ByR4m8eGTkgNgLsYop8toLEKZ9PGt8UpbTqSLzPJSNhomjkHqithGXx1nNY9wJx1ugVjtrHc9Cg8mT",
  "key19": "3hbKXjmvSyfbNcwnN5fbrvUtY4VH7FEbQeLW3H5Tiy9G6S73YvCenSxhbEZ38YxMtzXLgG2UcBbCjVFz98BgpcRx",
  "key20": "2eAE7pbAjfcGhFzgFDwTpnBjxt1ZQCZ2aRe8ihNmY7aD45RQ4QDwDERJZJkdLH71KexBRDvUZ3L3tPRjn87FfD3n",
  "key21": "jrMyeJXnSZKkTRipAVvVQX4nZrosC7C6GcPu34QfRpjKNrbVR9RjB1s8HS1p19n6F4KcfnBStd7vQ14ydvk7r9b",
  "key22": "nW4Un4uFRGZyRyiPcKEAuyi2a88sQhbfQyF3ceg1eDDT8KifGpK6kH5SUjicnRt621T2zVhZDQJcMwqscY3KR8X",
  "key23": "41kT5mth69tcgBnr8vKmzcWtBKuqcDXCt2xUske7V6e5Wu127EcRSnWzuyaP1YmeF3hx1Em1Dra6USh7gMEHxdih",
  "key24": "32csGtZfUXRsMwRhcdpLK1P78kTgQJzf9oQ4NQQmKTDRxcwJvSsxy2tum2Bc9p29F7EM9g3fuydN3pNEVAUvEjfx",
  "key25": "36GXuV2DrS285yjnZkpirSXFoYQuuWVRvP9oAcpENUzqedGSRh2sBtuakeG78vyVJj96K1WKqWUDJgefVWuTDHnB",
  "key26": "3hJZqvqUQgEx4m6imfsXuHyb1nzjhtkwd5x1qx3LRgAUmyjNyK1XTn2VreTHnj3wSZFTg9BuBvsM6sU5iXLog2LR",
  "key27": "5V6trxf2iGdHgXKmERDdvhqvmtLubS4RPAXs8VCX8Vo72hsNKkrRb7wJR8YiW26bn2qnQt6gU42nR7W9Wv3e9EF5",
  "key28": "61H4DZCqA7KZyDfJLt2URiqCaqvYywMu4YKL57QPnLLr1pwFuPgZEr4ymvrG5iGfi25HjMbrUPjfYYpub9Mtvfcu",
  "key29": "41n8PamKnTRUHfxYwd8zMqGiedS91DEHUe9N5Bhwi9TU2TPR5pQz1vcMxjBmC5MrjRdPgaJsb6FtaNBiG5vN2no2",
  "key30": "AFtQEXvrfQdwQM1DVwut9aEu8X9jBn622PkBHDkDMMesRiyErvhbWddUP3TtegYMntH4KykHxfAH2fjWgTKRyT4",
  "key31": "5d1q8izCyKh4haHasptT8N4fGqvtxLtMhyqhjZFdRmRU6AdniBkHGDXVAk6Y8YT4bHFMXiMoMHrEbTSNoqdHJoYB",
  "key32": "2MsLbmz5Us6oVQSGZCuy9ps2P2xTvHLSvWoajvfmpRCEsd5Yrm9GztKWPJoLfBMKveA6AGa3jjCJtFc3U2HX9vDv",
  "key33": "3B1EZECBaru695gHXofReUthV2qvK36ZmoLp4N2USDfdAQKqkC1qG9Fe1YsNuQzTCFn7ze3jXsgggkeFBWcwSVfZ",
  "key34": "3GZnJMBQck8bdWcpFMA3AJbgnxt7zYQ6nUWRoEgKLw27L5wuV8qJEtLihCzU9Aeor2tMvEywYbL9RfaboDKLyrYU",
  "key35": "3akTZ9Uqjyvbad4oDFqpybjFZKd4RiJBiQrYUGf2mtZxsPxntXT51SDSXeX9WWcdDLMHYCJiEfMMWMvnXwBKbFTJ",
  "key36": "5QnVpGBLaLmnZryw5HgxCnfZTyUptXvAAxRiMT5RSdmva5m4KUiuEWbHc5enE3A4LofFFTAHNAt527asEnVhEpCo",
  "key37": "SMMCSaoAFVEzR6xhpBYvEk7cyvJwrqzUh9eKBGJjD3pfyjjpctNNnJ8jocJDerr9WdRT6mHoyt9WBDyjrni2XJz",
  "key38": "4n64H8hwJHVPCWGYMiwxd1rdriUhYrQhBkqTvLuxGhK5nxMJv7sZEWyGo7oEdNUGmkUtFgmCowZoRWjQ4z5SkMpc",
  "key39": "vpxkLTwtHF5wWCDagw542zNpNQvUVhG6ZBLAYisee5Mfnt9cUPRUHkCa6moFXhoKubPzUFqNXCX7PQDdUHRiQ35",
  "key40": "3mExZYESLevecpZTDgUpxnkcN3KgAcsD49otthzc7aV5Kep8b2ZRgJaPmECsC8fPUMHnwidkYNJKxVYtSdUweWM1",
  "key41": "aQJbgBA91jAEEqsyhkGwKmDqrENVgvtubN7kUmq4kiwUh6NZfwHPejhat6umdP9oHXgPZ28xep3MAhsDmBnz4et",
  "key42": "3viaSWDbf67qbMhEh9Bt3xYJEg8cE2CUiqfPhtHDphpmcTiRw9knowGc4aNyLgXdeR7Dddeqm6Agk3gRgMt8NVVK",
  "key43": "45bVGVP6i4U84f8DTx7SvHecxyJoU5bcSc9yPyL3x148tR1tQtVBAmgts9HpyNzyt2Rqu9AtDZAPDS3We7cHpGer",
  "key44": "u1B3276QVwMAuejZQhxxdzBUEtcKAkmFgGfWV3BckbdK5arfx1RynhEvUQ1mcRGDJEys765bz9aoPC6ZvM9Kjuq",
  "key45": "2tpUsbwz72TSLchs16TgFtr5vfYYNdp8RpvvCaBp5MHBXXbTro3kzqfXcP7idfdHhJm2XYo8tH4Rf8zefXKRXzPX",
  "key46": "c3p6r34QkWtpUaN5rNEBvC9su7nUxxqWnYFAauLuX7YZXG9i8DxwbzELahNy1mYHZ7wGgN6mnrwEQADVZTwKSwL",
  "key47": "2BTFD9cQMo1uP3mh1JtNFqEe7XiTmDTXwqZQi3RnWRUo9GYQWX2y4tNjgYakcg1R8mRgZHQD66ERnFGaUTqHBq19"
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
