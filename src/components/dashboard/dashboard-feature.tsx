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
    "4FgXrKQSBMyhdFoxvmZAFLJknMXaMVax27ANwL35T1CLYam5xtGLGDh4vTk23XLsn3CsWpAxiATKcHQPPcXukQRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dt1r6pNFA32jjE8Di9PhhfeHucZQuLDgFevw92YHRdzYbE61gjPp65JfjtVC6m8AsSPYXL82pNejm4ErKRkvs3o",
  "key1": "3uxTeQMQHvQzne38CCVRDfFxM8WaY3TzzsbCqbWmW7czQNvjVVkV9bV7uvz1sawoa5PCcao1dKYKXsSHCoPxDufd",
  "key2": "4rtEappECpRYb2SR4wwBvv6Cs24wnf69z1gMSjdQZGkomgDzGvwByhfWq7qy7NTqzEG3ucooTcACCyiotNKytggk",
  "key3": "3A9mKqUK522XvXsVv7xPf2mwfEe6dcpr8ALSsDz83vqbXetH8CK6QVZSsTTqGxxX3ZGJ77ogrhPjnPdDCmWzhLE4",
  "key4": "3JTNn67ABjDAtv4HERyExsU5wNTb3mRBADetWgKcd1vi62d1oUbQnJ87xA6vuDWSi3dyLKGRxhPcbpyumbymxYCb",
  "key5": "2HQcCju7Jeb2kXJxEWuCuGDTGnzU4vcdySby5wWMYTWbaVNLqSeNc5rEe8bgBVyUz1Bibkodakwbh5KpgYyRLQ41",
  "key6": "QGne4LbnVPpnvc26quKWBRpXVP6wmPMSeuB2Ea4uUzqdKkX6uFB1CMSjsJ4mFwVGRj6FX1aRo6y5CmcrsQTvUAd",
  "key7": "5F6MYgwV421EvxW23G8L1j5V9VmcabNRH86DoqEy7W5dfrMgtcRbgsSegvM4nntmdaAp7pcJoRWa4iS8huGY8BCH",
  "key8": "4WawMFfxW6hG7GkBNcXiqhnZSqPhcQQLNnM3fhCMt9PY5BXThs2KMhHNKgGL63S5g1rBkeiTE39NtvnBaueKPb2N",
  "key9": "rhBNTC1Hg6ePVZt5gkC2bUvaGv5CfoTwqDQXJY2Eau1gCEYM1R5NRi9r8bK4hdwfu3a842p6EXHJwx2tJTtAsiT",
  "key10": "3bdVwKRimkGbeEyh38EJ1i137zQTFND4jG6RupSbWA8ESijsZT61tuHWqj85jV7JC2ZSebXDQHQ7PnrsW8T9yaem",
  "key11": "5NKCv7bNVeNcGkizD6QXfgo99setXmD3rsAkZxK9hKoUE2YcmShbQnUibGWjq2wQv8sjovXgS3njYYv7QepBtLDt",
  "key12": "r3PuKKfqZo5hgfEfpPrw2i1X5s3R7KaFN38uBm3apq5XXbKZJv3JcP9MtoLQ4euHca3xHer5yhBv6Rb2hwdCY15",
  "key13": "2yGfppMYydiJW1qDtdnYH94iaQHxQviNtJYpF4paDmSA5TmopNu5hUnrbJfjfvaKCQpUPBt9JQjMm5dS61foQZBg",
  "key14": "33bTqDsrEuDeACq6ySpCPrxsFzTJ9eWtMQXPoTzYnmpp37AgUdh9tMT446a9mUEL9eZqzjTdf9DgaeaVvtc1aNfG",
  "key15": "2sqUttK9TxDvc67bQcM2Bx1kCT38urDxVbL4nsPbkJzYZAcAbFfBF4ujtaJo9FSkBgWkFpuXn3frFM3e6BJD7oe5",
  "key16": "5UfSTyFaGy95C9AAMJCwYdk7cRHusWpkxrHzZ4Yrev1xSh471JA17GbXJzeH6PGE2CEmHQVUDHqccjdD7v6Cbq3x",
  "key17": "xojwdVkgFnDKfS9VdbLLmS5cJVnsckETHooSQNj61Q3nLaHZja51hS3RPuy1tcUE7CoSeAirjpY4sitoVqxCEh1",
  "key18": "3kBUhoxKzsB6y1558iKuzWHF8V6xsM5uaZ1Rno8NJvJWd5xY6VGtrYqeThfd7JjEJ7ctEfzJy36hzC6biynHsDGU",
  "key19": "3ggQkwAg1e9MTnPecnndcokMUHumfsJWCWMuwmzd6uXmdTHKGWQ1qxhvS4cZ2taBWhCYCBWFULVS8UQPU588irdB",
  "key20": "4btUpenWahhZw7XkRK4aPZkcTXcZxjfpXaid1uAW6jbrTJATo62xoXnSwJ9ExTDn3RKs7VzqGJX4AfQgnLpagmNj",
  "key21": "473b2175JXtm9ukZmmXgMYLH79Ye7DjJpu8LiTq2W35rWbdJL2D4eLQZ6WG59Dk1yRQvsQnYUXd1MYse66C3gnsK",
  "key22": "4tbiUhmaVBY5eL6muqViMT1d3hLun21Q4RebAuMETHBsofR5Yxmsgz1vdzktF3jEv97aDi86eXicboTLyK7fyb19",
  "key23": "455vhHq4BwWv6zYZU5VSYuwiGRBsxwJ9FJacUpQaVGY1TTmpengAB6BvXPg8Xkv8WJ3PokEMkujCs4XmNbhRVfH3",
  "key24": "4n6REt5WqNnY2GrC556hxUT7fS3tH6quvNWkBHKcFZEvzDduGPW6wJtioob1HpDRahCai7HtZjsUeqnVF7kbGPPd",
  "key25": "3E2TLDwA1Pzbhq4XXj4a2w2j8H9vvRJsRPYYJsSKiMf96jtjnzvmeXLGQfKKjawBevLfNwST95qyAjS6CdjdiMy7",
  "key26": "2bFq3wHgpx9BiEi4QJoK9zWKarDQMinN5DkDPeGH4kMfRX2SSugkbRCUxFJSkZD7u1NYso9ep6KU3WKhKyjWyARZ",
  "key27": "5GgajfAcU9dVyDj91oLVboQgXjEMMZtHtAjN4WdU17yBjPQqvsg6m78n6m4iJVFzKvDjfcFpYM11qqXDcbE3Y2we",
  "key28": "EeGjafwMHLLQ3h1WrDAsKYU1hF5Xf8rkqnLzKz4FkCs76yTRsXWG8ZbMvxQPjFAy8vJmzZHAMX8UTKJ6bH1TibR",
  "key29": "5SJiHnHqaXsvi9y2qNnPtYZrozuCSHwDPprCQNb1WCUvKiw9kU4HtykrdUrx5nrhVrXnTTBU2iPsuv1V1yMeE9dj",
  "key30": "225EmER42hDC2ivkMaYyke4tPo1ipw3Vjr8jjjDYtvDKYsnRnpgdUSkTQr5p2bJqFRjrahTGktHtwdazU4krbZaK",
  "key31": "TsxcVUCf3iiMYFKLoW3YMy9AojxLP2tDVBzkwf97yWJnjUimXDE5YDyhDoCSXhv9XA9PHwqXXx273LEZFPHLdYe",
  "key32": "4Wa3HPp86cUQ8zZi7Y8wjBhqhDtvtU2TqvPKPe6oZGkNGNjARuTouG7TTPXoYVmHki1M2r9DTvJcY2Up8n1YQugt",
  "key33": "4wwJhC4VYqNnNvMGYfF1mzQWXrxE9NfMfQS62xNcLtMr8YZitHsW2pKmbFTZXLEH8ZGZyFz7efz3xpJQx6EX7Qwp",
  "key34": "sdd5NqP4mEfuMnTVmf3aUc6egmyAzN4vxS6jN2jX9Uj6VUYgBRceFBwrHVsSvSdnTEHnNXZ7JFnueApD5qXCibj",
  "key35": "4dyLd7oMZuMoMBZTXc5JvVtY6Ti7Xo5vQtZzfNgdceZVgxh4Fe9Bc5FACUCW6HhCf7stwv3Znv2PZvjufLHts97C",
  "key36": "uFCajwaeNrXT29UWS2RNuD4TvHhqmioap7YifqZfyzSLsGbnZbak7RGu6j8zyGEBYe2sMmzYeSsvgbP9HZUzkB6",
  "key37": "3jdd1YkeHbsAeikvq1At3kvpHXAcEyRp1KnaWVtA1UZ7Y78FVerQbYLA2LCSfQoDtEaGHqubuP3B6QBrnKmDPwon",
  "key38": "XZbydDNYpVXgxki1VLtLeUD4wP9FcXcWpZ8zVvBb8jpReqxJoYs5jYwVrJu4LkGt4CYMVrrJi1FpK2oqgCFVQQV",
  "key39": "3SsB7DCpu3ELRfo88fG3yAtWxAABKvCakSjfpSmnHP7ZoKtFjtiz1YmcjYjXGcZF45oQDBu1ctb1T3qtEQgkNe1Q",
  "key40": "YJR9V8xGJALMb2Hx65FDqU2mrqP4vnSH99PhXZxcyLbvb87xtUZ2zFNpsVwD4U8PsnZgUg4YuQiTnGZhabQwCg4",
  "key41": "2y2efrK396pPdCSkUB7nEaKK7WjF2rkjpAQVgFm8AYV7MG3hvRN7pV7KWm2SuPzRTTG886RkTnSHRm8hWi9tJinR",
  "key42": "4kk8hfV6WZtcQLaVhEEcRXMCeQv3nukCfzmCt2DNr5bmnujx5c1DPFyfy27vu98T8ABkMYv4hu3vsPvd37NKYNBN",
  "key43": "2LM3jEes3Mt7g67A8ySomeZ2mGzYfmyza2th7V8aJJW1Npduian23MCC2zL9zDvUVtuvXdND8yzdiJ2RuNNY7a9Z",
  "key44": "JxzzZdd75pkeBYF8fbAE74nVcciVSi5WQPeJ1ge2AvuhmNhpywRTXN2Qexr26LhAKBYyucUctrWT1Gm5nWmryCN",
  "key45": "38aiJAG49pmJXaq4V7f4Ag8D1TfC8UZdrsHUBjQxCxDYwgiQwgFNGS8ToQyTr6Bf8tVSG7z9nrQg9VioFNx16fij",
  "key46": "yfQHghGkK6MdybYJrAwkKw619apdP8mQ5DJ3DTyFtzgMAbeWRz27GCLdEKBpTDXQdD4ShcBYXuiVjam3LpK99FK",
  "key47": "pQbjCXNtg1f8SSqaKc6PDPLUcHnSdsKsxU4e7A2VrErnBaGZZ1ovydGp4t1xiosrGaT8Wps9baUsiUzJHdM3nDi"
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
