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
    "45oEtEvxd6jZCU5BTd8dUkEzR5KgCxQxb8xT1H93zyBDGQzW9CtJ6AjNUrmWnWN88CSDJsyWspLGRSrgXkc9r4oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41nH4ZCeC8SVEzieezoKQtyJRpWCG7Bxp33zrmKg2c75XfLL1S3ddnsPYgt7Ua9USuTsjjKS4qJ9Ga15rBXVN3iG",
  "key1": "4yXD9wPcFX3whjTDJ2zNBwTLqcR5FAk5tfxzQgYexHaPve1zzNFz4SfKTyJVmofy6kBLPJ6jjgQobqPwUsLAFpNP",
  "key2": "66TVTRadq838uRjjCyd9vH9nXgXVNXmF61huYkyFcjgGAzrRFQBXvqGReHba6pEHNhs4zFDjvYhRddVmP6dohSj6",
  "key3": "4iGfCQyfnRAFamVcbMypq4rR14KgQmwUQyjrz5DpjoFcuEwwJJ1X9AKZJjXo2RsZNad5gHvhakfH5WNHvkTUvcJg",
  "key4": "2ALtvNHG6NMeYeYwBPVSba8J7YfQnHfTCAdKN3rzh9pMbEzpxdnQf1h4gU3zXJwt3Liqt5eodkV4ZGYLKWKR9mjA",
  "key5": "2oyLjVaCyfp4VHtWNKhULcrh7j2EKfozdDRDpmY14aMycBdW754CRKBD2UJEoZxr4G1GsTKV4AGuvit4awPy7mj7",
  "key6": "nk2Po39GVrCoEMSCor9GZoW9c3mXXdaCaqEpStAAyZoSNMApPkbrcMDkN5X1R7Jax8qyHzqZh7AWcPReu1fwxj9",
  "key7": "4yoTmAFRQ1K6oZv72YVi94Jmc5cjtnUk6PBN5koVpaCAA9jvfrEWXPJFjLKxcycP7dG8cJpr2X85rr1Z4ecA3Lda",
  "key8": "G1jwvaGwRLnDczNpPimEQXnPC8zikLjuisBfi5hZNhaDbvzfuyATuWLaDG5ap5tx2wHE8yG7zYcYuXqohGDUNvz",
  "key9": "632LnjZyXrMxZNwBfChf9chnCa5zc1LXGZceSG2Um62wH4ZJB14WWykjR2k3pz3f69tUp7QABBa7CjGMCi3RZ7T2",
  "key10": "4aJ9du8GTTJ49sXZH837jURtjfcZB9nDuHtvZisgHBu6qsKwR1nRaLAd5MorKEPPeCoZqhZUuKqNDSD49FeUCR9G",
  "key11": "4f1RDY9LGh8rgpmShdtesyzCUt8kDvy7Rkec8eLrD14QK75KRYevMskSB7zeVX4MYeqvJ8LM414BhkBZXjifAVzT",
  "key12": "PVxfuq9ZYRLeob428uQoVBpYTeFziLakhCJmyMZzS3NVqH538rs23NRVfr8JSdQcd7Mkco7fxD39rseeCokn4iK",
  "key13": "4hEsr6f77SbVVT6Z24cev1v4SPookYRGphNBWWDFtWGnCB7K9ZWmU9LvGKL6hEPAaR5bhMyUMDbpYzMWQu6qyYtA",
  "key14": "5RwuR9z3NpitYBRLiRJexafh6Mr3caU3ShD1oZrqe8wF4sRkQUZVTkzKCaUwBNSBzqEC2JAZPp1m1xGdo1Q3oLTW",
  "key15": "5U8FQjKDzQ2yHvVPanpHRFLuk8mYurrt69xSVC5JvnEUwpr47CTwDdnHJ5hN4jngaDDdrXATrACCgsksuvcmYwN9",
  "key16": "VsTtGnkFpmtoytVrfZNaHdpntWjdieVaafDeDsTan41i1wk15Hf6cJYE85aGySHF4hx3y1wvkxfbVrM8xorKkRX",
  "key17": "c9aWo7gM5pGKbeLnr3Xwp8sfXJhG9BbnS7Ps3ofMM9E4vNQvkkYyKXMpFeHNNm5srHTsfWhf2uMAATP4rSrTFZk",
  "key18": "2vgaEkCWQyajeusydR9dSKLed9SaAqAy1pvizx73Kjwu79nvcSaCf1fS9AGHx8ZwRKQTXNG7sd7aHdwjLqSc7QsB",
  "key19": "3FUzJ1VLL2XZcP5dWDhpdksgGrCTJgbKPn5GThFKu3LzsHfU8zVp4hnGuK5vtJ83DVDG3537RezRK9mLTSNQYu1U",
  "key20": "5H2xNVV52vA8UZxoFAPsfbA1cNLPiRX1r1FZmpsXqxMwa9578W7Ymx7ebwFLtd56wp3k4Ws4wFix8BfTLsgqtMLe",
  "key21": "5zW9W251hGw667i1TbcXBeGRDBp9nvhAhbYR7UbJSsL6oKF59vbDt2fpxQf5qHRkTLsmao3unNxfBruUSaQYje3N",
  "key22": "3i6vcAdxDsKEdivsk7M37g2t9zsCYrTu3Ksmi73xg7Ljz4E24deJw5Na7SPERUFoKTpNeKoLF2NCicodAnbrBCgW",
  "key23": "4eRstt261pRG8Cpu2CMNk81yrjKFRwrGD2SqaWKLcdXmUcxGzbcmqBw984mRmovPwiYenep1NwB65ZqTqiQhwrgM",
  "key24": "5x836qVhaUr53kM3Pr9GQU9AQhPRhubZ7UcjiL8ZGNQiTvbArHSuWdrCMC8PZiMMnwdPESzeD26y4oFeCvMyoUJ5",
  "key25": "5jYAfygsSP4Pfqk6yqt7PridR4a4fwDR6DgVdQF4ka1nwXtVVF3DquP8F4WTr9j2EXUzSUbrkkKr2rhMDnY5mhhK",
  "key26": "2GgZqquR8k2G7K5HtGckdSKJE4W8imiqabv8qXE36E5esiHoDJbpFQpbnHEWMgG52Nop1Q4cLCYHLo729NBxhBhz",
  "key27": "pZQAU6tWDPChLz4hTdgUVBbQe9XrLUm6mPhCeKcyagNLFHQSekKRKszyyz3di89ESUgxyE9ncefCHUWPZgci5eR",
  "key28": "2yBoVp2W4xpwSHKKZPSD1nm5zS8gBgC4UGsWJjN4hTHQyqVUAj321xiPv5my3sCYmLSTeW652sV7syW8iyomVsA2",
  "key29": "4JhovafFgv3JcwMyNsrX22zNGua2N4TFCevBEkrAP4f5rHUAjXnGh3pzUYEjwviqrRZzsdAEonpEtDCYKCyXqHgv",
  "key30": "5XiBobEpshNT2DmzoR2hu8fGVj6C1thU7kbRd3XgFn6AAh9MaV6cqjtKBmJ7A2XMQxfewAafXcA7xFiVR3RG6hNX",
  "key31": "8AGpnwaNRfvCFhLwLdD3VTXW2NT2mJjDqi8Yrmx4Yevv2sptFbjk8Ps3k8sjD5SVbG3r3FEYKF2ZU5NY8cANEVe",
  "key32": "X4obojHaZoRWfNDTc3nFxiXSU4e3yiDUVpogT9H5mnQFT8wnWfWm4Xh2tvh4fgw6XdfqBLdZsd88TYJiUukU3DV",
  "key33": "5VCsGPZU2sh9dgkKs7rCLTmD8TNvmZcR8BAQwdjkaSmECTBwwBzsvw7wSyoFNn9WySP2PSvyNcAY7z1UkmKuEL3P",
  "key34": "2wGecxikDjfWcTbeeVbii8hdxRW2rx23AErB9BjwTXeEMjsLY94EYQLvKdisLDTFofKcq1WcsNrmsGQsEMAGVc9T",
  "key35": "2cNwnwHCz91jbbqUdeoCxa8fz52TSges5pReshHhfyb26r9UY11QmmEqMjRLoudX4syv2rkzErx7dE5uo6ZpsNtj",
  "key36": "2D8Ht4Q5FXz7QGLofdY3Ex4EZnq9PvYi3aSHi29bWZWhSschVx4Qm49aTmKkksY9A8kGJZeQbw7j2cJL1jKghEnQ",
  "key37": "L4TVternzLgejakEMvDwwdsxxKXuNGpjb6qjnpWKD4bweR9c2nBZfBph1pbiKLfPHu1ewTqwVgbWLdagdpw9Z3i",
  "key38": "YnutipZPpoMwYnRX2nQuPmR5fj27fQZQ2gzUjPcp7EUjp5b6uoem9PMnzFHMM8DJCp4jepZmh5TDfMaQf8UiaJV",
  "key39": "5rgRHt8T2HUtW3JHycWrLJPGXvX93RvCzSFtFcdaVNTPh8c91Wb79hJfRF3ovc29pcssRCSBMnTTin4NzgJYeSEs",
  "key40": "351p6zNqCdhGPz9dPun9WDZme8XrM5iC7QgUiKBeBymXnwhp5jH9g4kSaJ2N98MLRLjpU8GwrLNqhHL8mqdYdtTv",
  "key41": "28z6narU9KgP8J1VgcFvEMJ38zCKytJS3hxXPnbFbL4QYV84TfGjDDCdav8DUciQPp4vct9m3FRdfUezs5eGXCre",
  "key42": "N8MUYMCfCjVck82aQi73WMaAc9FMdgrDpUsn8yNj8QoBh4A9oKmnPV4gTJ1FxDzDA2QUqGD75XJZ6Zf1k3KZzSi",
  "key43": "2vWx2db1GkX4mm1gRRTvYpzUVodqh5bnmvZVxuzGsJ94LgZnadnjGxWXMLrb43TK84KA3v9HVNGfqHLy47pcuYYg",
  "key44": "3v35BPmderJkKchyveF78txZ5n769p7LkmTQ4QdGrt9EExMEJHhXEb7HjEEwBMS9qfQndyRfuaSLeE6hhPAEqR6c",
  "key45": "2tjcY9AkrU2rGPUiq6MXPEg5E2B1v6HSLwn3S2sJyQcCPpBB8Y8L6z45c2no6CG8QcwtLP17Nkw3S5VBtYmmH94u",
  "key46": "4Q3gb6v44MxRLhJLvxsCCQ4Zg36PkkEiepa6VGfb9ZRQKVcWbkeJsKjDEXnR7ZrB9gu4huhFuggck2YNticpb54q",
  "key47": "5gxKkECUb3p5Yx8Yi4cRSLQFVaRWjv5iRRwzptPJiHsvhMnUyo7sQREgfga5AHUDr1gymmbzB2xaVL59Q55zE16H",
  "key48": "5v4HvfyarW3PFx6BW8qrR1z2NaeFSvEp1SYF9w4yHhZbxiN1f3Uamr7uNGi8xenUQS21KDdjErinxNdnWfQSHmiV"
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
