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
    "2d6UuC6eHQHSaMaoWYZDLDHWY2eDU14gkEMQ3vNEsDuY8YHWXqogsWipmZiY5TMTK9ZBpRcpt2DUzuptxMWsQ9Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dg5FsS4WEFjjNByZzk6AVZqYid7CSMdSTmRv3ynYzhojXro9MVbJao7ftCBkmGf9erbAUt3tvvLiEgeuSLLkCny",
  "key1": "3G9xiCTriPyVsnDKEj6bgmhHp8Y5wCfLHxXDPkfAWS8y8cRJ8Ens5FQ6W8Xtcq4bDYdjPH36P9Y5ye7CMcqW8o15",
  "key2": "5RgVocAqY72UQ8qqxtXJBU2hBMfCFdnsqi9b4PQ9GNFuRb4sb9u2ndj1gM2V3u97VVSSkRzh7u1G91kfx3j9mwBr",
  "key3": "25Cm3VTd2M9ez3SGswg7AyMHvS9ESa431pB75EwRaErLi7eBZM2fvLoHKVgC2r2VzdqCxRB6sPPyxW7h4cQP4b9g",
  "key4": "NfmHJ9vrXLBEcrTXwsEFFU6DqWBcqeNGihnT9YTjkzm5e93HMP4iHUyASBzYVgttFsVA2DTCgiRWwfY9CoEhrbd",
  "key5": "2uRsEWgMutDXJHLWMu1JZWbqu8TTiLD9nYsRgXbvMBahnjnX76GMxCocZm3oYWu44xRiGFx53pwFJbjm8nhL94ZB",
  "key6": "5EvaRSoSUv9phUrmLAENPtHSDbddYZEMDjhqdrYfoA87MqDPiEqhV732xCVPG5zR2f5Yts7cTjieLqCuFe7dEMun",
  "key7": "2kjRkJScSF1GafMBfGNe18prq5zNGYDSiGJoy7bxbu3B9tBJcsULYtc36LVJqZUS1gtUY9cfsfRP6P6n3SqnCLR7",
  "key8": "3UbxyTRLps8at7QYqq8TKmxNRMRr8vBrj3Ci5dJryEbn6cp8Jh1fEHkXeN32HFhgyL6DhwH8ZCfWeYQpKCJssD7k",
  "key9": "4MQq7sVJKYm1AGGvAJVZisSe8pXR4o7UgrAde2hqa1iHodj24ou16RST9ixzi8kAiowq1ZA9zy5RUKQhqkXQZhTH",
  "key10": "55MnvACsGiE1CREJumhXNUguLrPP6grcQnbazLXycsff95AQRh8ee8jBLKZzNUjH5ejjC3ZyxawH8adYaGgMhvwJ",
  "key11": "BgXSKHBJKrGWZZ46K2bauvvC2cM3fKMyyKdELSxvfeYyBAEXmQjMGADjdVV6twvPjuhGeQaEjvzbdyfhqQrYbgT",
  "key12": "3mXXaCw4YbqVZM4ovxedajFhH3HuNGi2PYVVvsCKYYzNKcXJZrfarNmnmMVUWFJaWHfgZW1GNw4FiVZ4qW6e9HUe",
  "key13": "4vrU6h2fCYAQ1Bh221SHP6NrgMYZSqJGBspzyxhZvJYywERaphoYo22Do6epVU3LNi6n99R8kK5U4VmQtVtHpHSz",
  "key14": "5qEZpzkmQkt2S3beiNqtPQ5wPHKsLv8Zg7Ry9whZCikYYKkvq8TwmFt6r34aFYGhWMgn99Zs1SfonSNMv4TGHx8d",
  "key15": "5U24JiDy3yQtTVRJxQjXw4azYrRCqFyDMaRpsXe6VAcooMFkLBBW6nQJHKVwkw8C8ZwYLYqSeqTujME21yj4mvff",
  "key16": "5ZVtb8iVkdNhzJPA72vC5etGUb4ZxZA2FGtVnR46GwfrVCJ6A1Z9gZvHojMRoDqVjZWHEiCb2rtPAr7nbjkPXD2D",
  "key17": "rLSg3FAVwE5JTJ4Fqwrh1tmNnVJzVKCHRRWZzqnvwVc27yKZw74cpBct2GhWbxy3daeX1qa6A79w6pD2cccmxrd",
  "key18": "37Zt7p1p7Fuj9UTQsE2LXNszE9pxByNhRpDgjYbX2auiTefioELStL65NTVNFMsq2ybe8e6UEuLnY5Gt1in1gVZH",
  "key19": "3hPcGkfKSw1sTfaBMcqwSayMsrAGx5DmpbU9AfqNBiwcpGHCs8v8C5SWFzZE5YzQADg2fiBLKXUVbVSHiz6xyYxp",
  "key20": "3pe8zur5ZFvCWPLZmD48PMSqtsb8xRGsNiEBpE6dzjpWfZESNGqnhdY6y1WZdsWFfSLuMpRE5dYY51dz8LYCa6mP",
  "key21": "2LnqaP1H39wywmvkGKuPYGXQr4QvNq2YnNBLAbWg4rTTeMf76u3xBJL84xd7A1nFvPCEXXxcCkfcG3kqXcq9RoQs",
  "key22": "3pSvSQV8LByHQmByAThEunkhSv5xprcC1npnoGgbCdpqwH3gnyYvcWN4RvNf8ZMhaih6KV1LD9U4Vitdo1RDvnz6",
  "key23": "vMRTDy9Byv3XPHzvxbcfS64Tj7uCAdgFcqpiXrDRidHdB1LsucTG8rjqh1nVgi9iX93V7uwLEDZHxDLLJ5NcZxZ",
  "key24": "2HzKNgfx9A69GEcC87psvNQaNXartLfT1tVeEZHA6mncGCsTxuVB8HWbVfEsv6WGpdvKnwyWSha78fFMQz4xRDNz",
  "key25": "2oddv81zsPYSrJb3nAbn9juHHDerT8e9qVjWCparfhFepr3BKeqFwU9kbiv7b7PfFiM5Kw4WtPE7gAxrjobn5drF",
  "key26": "2jyipKcWsM5hfm9tCsDvxV4MnCMRbbrDKihPnDXR7AHgFb1zDfKgXrvZ6a3xq42h32rf32daxm9hwzFfTivtSc55",
  "key27": "3vo65LUDRc3sGTn7x9tbqUtsrs7aLdHwb8VvSLZ6XwU7zWm73fE5iLy6KGfNzhARW77xWZpTmT75UQTsnFHgBn8e",
  "key28": "5Xra2kegrgLVZAmMTboSF7cQ4VWmhjKDrhn8pxcpzbeonX8QBDzLMNur7CckCpgXZcLNu5nwBibxJEmqm5W7wN5m",
  "key29": "4NMMyMYKoEKeLAYDaNkGQYQippS4QUFFiVehTv2W96oCWMDuXmC7eQwCiZ5ESVfJbe2WrZfw5hBgNJN7Ts7khJxV",
  "key30": "2Uck47PrGgcLHim4rzEdUvEqNLR6JWGUwEe3JDaiWTUsX6NVChEbAdo8pxfm49HYXuH3N7R8rCSkVrXvYV349Lgj",
  "key31": "3GiaxBYDqFG4gv8n4vDJ2Aaw2St6m4gKxh2MhxLN8E9zCdD6rTbJQySKWx3cuQAgUaY8YyqJqHA5ikKUAPoWor3J",
  "key32": "5tzd3Dt6pGAfYBsij1ALDJPdLQpUAsFt7wikvMCsBzjWJ1K2DszCDyUmqmn2UEA1qhwb1GJjQY7ikxVJvKv6BAYE",
  "key33": "2JvbCZGZiAUkQmyPB5GGeFNC9cGfKVTit5rbEHzu1ZGqF3NGnd3peos5MkZEzd59Yt8ezRNjge3XKXyV7SvpMZKE",
  "key34": "2kgLinuDc3gJdDZ4bDcv61ngmhNgZ8R586bRQDEVoSYYrfhGzKkyPeLehXJ5cVHPJTrio3wTsAu7aqddmHdeTN3o",
  "key35": "4dFYVmtr4yhu1qmebvnFwwtEUtZkkoit1sQv4tfCtgeeqZJa5kcXjUdqGiLTx5vaa7XRuNi3qwfXiZQ6QJoZNmeK",
  "key36": "5QjQKHr3aLZ1iZrcYP4tCa14eG6C6SMC6tQ3jrgBrPMkVePGTPosnQijKkF8MqooP2wJnTMoPtSSXsotANEfJixZ",
  "key37": "3viiKu9Si9ZLrnM9wNkuFC3KysPEaDFPVtD6b43uRkDiakpFeLntfgtsCQAEZzjEUf7aynFYyuDQCdgZaMNsJGNN",
  "key38": "33UecT9TH4tUtNHKjgKkeWCQebnMR3TogW721Vzo6mknntf6uWyAaU93yVNnEpzrbq2UX3AFAKX8KEcHH2yiavH3",
  "key39": "2Mz32d16JzsgP3Ksv6p2yBGFFV2NNGJh48cbaiTXZf66Bcary9Rbr4N3J4EAn93vEEpBRhLRwDVLa18QVJH13yNw",
  "key40": "JPHCCnYv1KJKSuTFmxC4jR8gJMuwuhs63zNtE5bLEmVKtzHUX2Rp68XxucRikWUU7c8QR1Y4v6BmrSDvF1AMZtf",
  "key41": "4UKRY4j9sAbLpvT23ucYwrBcCD9XUs3RhTcHjcwm9doxYuPJ2rdLDoNydoNUUTJLD2sAPdusVA2jmrzPv1Cw5DEj",
  "key42": "43si5qEUjBhZcXwZ2f4XytGUHxaTx51JMDYfAmrnbczgyEtZgqCbKLcJmU8mQwPeeqhnvFR82rPr1mCV1osJQ24e",
  "key43": "4ny34TgRdsVDVUtGEH7sCyfzji7afPKcX754NfpbJn9uit79uMSkBq2uMmS7YdU9ngUeqsmAfAtmixmBmrHHvd63",
  "key44": "4NSyejnYhwd4YqBTxELUiEbQsk5aR623Luxgp24A4eebP5awmpXZdSLJanzMqJ9diy2GprMzn7cMUCbtzNun4ytq",
  "key45": "5tAjRTMU1nSkE578KYR58aEfsjz5kqcNNznS87asAvhk8F4PRjQyXU5ZPWx1QxaFWK6hcuhj8L675c48dqWDVS6D",
  "key46": "2rUaS8fP2X12U3t6u381JG7GECjJZBRXAk2Cy2M7eNhhtPsvSM4bXzT7nSWfvrt95YFA9kyygLc6GPbzDAnVREKx",
  "key47": "3jukRhqEZHPkEU8KHf6H4DdN35FGHz2hNJhxzKztdtfG5ZFzYPLFtcsJnpisXVhJPmhBjrxQktL6CYKgP5YRh7ss",
  "key48": "bNAsQBJxcTqadAb3WsnJTDTa7jVc8MTdavAhXDq5MuL9CCiLpnXeKwznZLXHCGTcKT1n8bR6mVM9vfKUdhjyAFh",
  "key49": "3QRftAcxkg57LNMr88SUrjqZ6Krsxc2ZpQjxRq8zVQMFSYzNWEnvEQKsZYZ4SQQpjRvqpGX3t3aNxfQ8ojo6odpC"
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
