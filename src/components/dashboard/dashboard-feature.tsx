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
    "3rm7ZJkUxpfeP3n8FPZXpzwNWb2gM7f5fZArUyr2T6yWorUk4ceJ2a657BVUyJYCcezuKRGn4zCjPxfktMkF6Fge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBAsRnzocsgarBdQiE9jixqrDk67gavnRtAzaafpYEQwiyJ3v7TM2Xqemc4SQfwT2oCRJ9sPDb3WReFyncq65F",
  "key1": "3dcyrjWF1wZMMFbcD2r2dP4DAbTizaGJdTZmYzmte18LJZNKT65PknYUwvgcJ9zvpNxwBzVgwBNLdtpJC5vncmZT",
  "key2": "4bGXjZUcEf7uHYwLp7fTfhPUcM4Jg3hxpFfDisNWrZqqSPoELCVSbCatCq9oyZYywX2TpCZDgcKSYG9Q3pNoWVns",
  "key3": "5MoK4ykfG6mj7LvtwijpHxmmbdVbjE63PkRaLKMV73a8JVuKRmEjzno6X5iyN7G1qkNVTdT7D6VdCduwGZ7xuq1A",
  "key4": "2yVCyCLVb6AkGkDiPzXT1bW4hQ6ByYhPWoVj4gPvbW1gxB5PqUQFvDZbVvnvxiTGAeFxxTKaKy17swwoq86A4LYr",
  "key5": "2qKAyEBdZjzGBwRomEsdbbhxSoHDRM3EFS6QqkYJgvy4rna9Fyu5csKgBQGoeaN4wSJqe7ubrpgPeAZt324G57mY",
  "key6": "3c78gNF7hXPEgXgrdP1hP77pEPGNV4wMBoud98Hau4Bnf6nEFV1LcwvPHBY4e4moHUPRXW6Rb2qgj7eCxc9vdx9J",
  "key7": "4y7La6BjwCAEgNjs9HwbV1dakHqvXjsD8mfV1U2uhHmYuX8FfyJS6yHtuNWB9Mth4mX1zchcmCpzLd3odNczyfhC",
  "key8": "2jNASgSWjdrZtGbnp7DaJu15bwCzF55Vsrq4xzhP2SHpmbX7jwnMW66EyPBaL1KE1M4gt5ebFsvhToruESU9aN7v",
  "key9": "E5cQZHiKky5W34HVweNmkpuPH9Kd3BoAwN857B7xpu4VX5XQyvyL75CZ5Pga6Ge3vqFiAZ2Pq8RspfMsUmczsM8",
  "key10": "2SkPENhKxANvHmLCoGGHPQaEGq8Xs6nrgw4DqoMxsWChiXk4xWc5PCyrvzqbL4eLf8vTTPJqVCsGx2V7Riie9niA",
  "key11": "CTnUuMCtQjnHd2vsBcfSMTCBjDYQkZYWGCeJFdLD6daLgRiehYLDCEUv7W8WrTbPbH4pBA81BaARpKYcn74eExX",
  "key12": "48LsBWHzUrcdXDX5196gmB3dFCKkBytBX2UUBVPbx6enoAi8ncNP5E7VHAYFeGX4XMw6AYsq1uyB7PYthUCHKa1y",
  "key13": "2BHrkwYavAuMvzu4z9c9jq7k6ymQqimSavYaaMuNv1MBxG2h85z4BUJ7mo1948GsAUatjVstUFHNJKJZWdbFkXaH",
  "key14": "YBq2QrNDSykExN3PF5wuLLMpBb3UBn1Gvqpp13n7dZ7knTUAaurXQ9FeDL9UN44yUM19cwaM189RpkDfG9d2P8R",
  "key15": "4E74JKX2ghdDhWALFq4VpGYRTvJcQGfY6cgTn5hhDW4MEvdU5dz7x2B5uBpuo5oCL5hHtNuVtLEeyuFxXVm1H2SS",
  "key16": "cU9DBCdmUdM5VbFcNrZSnAGdG4g7VvXyoJdv3gPnrTAZRzjWHxGR5ZAQ9tySiQqkxq1GA646NWGSX7X1pppGaU1",
  "key17": "5FwWRMhH5obBYmBuPPXyXKwbrZxdeZwMMGRnnCX3B1RPcfPWcQs9Jt2frjaGPRwksw6XmxfzrWbmRBCjk7jdTaxd",
  "key18": "5H1b9gUu7JkwmSuz1tg8n2vbnGWTuh91TzwwGRHsnh3Q8f8LAxys1TpJed9sZcC6N8TnPK8YTwNF15k4YpRs48jg",
  "key19": "9LHPHuD2apFcy33tZyGnThDokLYmiKAyJ48RrFXgH9Auwk6am7WtNDmAzoJ3rdNrojohfrdBh9hZZkZq9V4Madi",
  "key20": "3iP2PEkuVPDPDpm7WwCBdaQfon6QJBmgtFVsMWUuSJ197JhmzAMhbrm7Tqjvpg2BnVgNPM6UWWQfmWgjhDaKrNvp",
  "key21": "3PTNhKTNber2iMKFwM8FVvst5rwWC3zSCQw6CjK5iv7hapNUYcufJGq8q4CKzTQbhnMjFTMiAdHVfRi6ps5ZwLFB",
  "key22": "3SSXHmdn3DypviMyHehW2xdCF5tbbrLFmEBfSQejnq1wsBZPGQaPfM3Z6mAzgxCAgGnmNZtzxCAWJAGYsqW1msSu",
  "key23": "5dchKsx2M2zc2hzdrTsQifvRsHRM4sobtQEXQJtSCRXtnLGqJfe3YPg16TRUR4aDuSh1UqLQA7gWj51cmooVxg1n",
  "key24": "tHVJoot5UXc5DoF6u39U1Ztt8AdZiFH555foGVmBhPmYof5vaUB84TKKAGfjNRdaeo6Csm8HEfrbnnVfWq5ksn1",
  "key25": "48Zm1KUvEYBgsK9gFQtsDYM23MYwGsRdhMdbveiPM8SmoF25FbzyJiocwt7Q3itd3KP1VH2dHPKT8s3KYv1BYBpd",
  "key26": "66Rwp9AXndj1TGJDHGWRaYFfqYwhLpn5sYNMpmqhL6v2DaVtxji7AZekSWz66TyTegQ6iNitEtQPT1BVXDDSFrre",
  "key27": "2cHHdVojUtYsTfe51Qt53yYMSPMPoKg8op6EeMYs5L5DNCv3MtDA9X4gxFXGtygKGatsYJphCAQy3M2rePs7oL7q",
  "key28": "5JG4mzfMEErdMmpBKXKqcZsiMhgZpdWfc54qUTHvfm5kYEFhpXwg6eS7awzQUurLkTHujr9o519ZKSzqLtueKZz",
  "key29": "3gWLcpWrHvSQmonaHdnUyAjdZkzSW5qSQK6ru1UGWrNsMFajrkijMKkdR6389LmJqe8XQ4ssjxtgQstMGWeuYaYG",
  "key30": "4W9XVGhQ6Lngh3xKi36tb3bgyiZvEiRPEgD9tYNcuHbyjJRxr92TY2SnL8bj4kijoxGXaJw35gmyD9yBYZwebSWK",
  "key31": "5WiRiQtpvWvuZakxDF7488UbHnEkDkcNAbQBR2MdWNrApPzGaPLyUfSFwfYFgonsdjxLsdijK4T1P36H7RfyHZmK",
  "key32": "DgemGR2wQchWH4T7PSv34qbwZ4Zh9tXBtwub8noXAA49ciJnRf1ReJBVkHUEiF8xuFtKwGvvi2mehX58WLS2vX9",
  "key33": "frXBLNnwbdMycpt6WuwQ1MHGuMjLSVrJbFifSGD3tJPQ9U6fQgXkTMCeBG2DHLsu8VnAomBfeeSRBPEbkW8Hs8X",
  "key34": "nbCopFY2w6GHWDzcugwVAnF9VUgwWa7GYJViU9RrrKM9hejHqBPBVepivayZzdMWbviQNMppSw2RJifGpvKwKre",
  "key35": "XHo7oAMpr99q3WBnpEsM4L3ABe9GH2SvrQsmKzcUaK31b14kf7WtzacZyDZJQHqZUxoTmBEmChZNnNY3tjP2jAT",
  "key36": "5fmjvGNSZ4bJbPEjoMC173kMAS4dfiMBiv6mmMWYNg4ecshdvhZSSsw9SgANvGrWUJvaKY1QEWCN9eFBP6VdEros",
  "key37": "3geBhJKZM9wRSZuCtS558Aeoyh9dzf6ym8eA2FmJLxJeSwvWoHbyS966hHtF9zPyiCUdB6ZWN4pvkgAqgCyN5dtm",
  "key38": "4oCab6DwdfY7bJPjfnF7M3RGJJHgXzk6RHqsVSW8A2abnmTdeDHSHkb8f9J8PDdJmZUzXVKfnrNVF6q42aunRfyn",
  "key39": "2yXQjkk4vtAbDiMxMCLQm8VzVu1mQ3m5F4gTwiBXfo2SC32YwdHcCgHmhriBq1izhPrWjRUY6afwB4ztrhBNbtPW",
  "key40": "3wqwure2fLN9fiWUcEawwoj922KaA89uAzQ2YDYftMnX1M4pks9ka7ySgTeUcHVEvbhXskWTnzcFuK5K5VGeZskt",
  "key41": "4Dy8uZkDyP3xbqQ7aJbWJcUV7ZBwh4dBEdicAv5HBraBvE94C1QwCGDbEQutXa75xvabX2ZAgzMvGsfsS8Jtx5sa",
  "key42": "3QnyWYJwGE8E2ggUf4YaHBfMCD1zErvXEJFnXKEJiXsA213scdVfWPwMZPNKBAF8CejpKBNhpCMQSgDo2qCLzAry",
  "key43": "2RMgeV8NQDmZGsA4KyEm8Scw2cazhcfmtdLwXiRMfKTY3L2YbJrdsXvxPBvXRyR8R4iq5yVaxkWkGuKeb8HW8Rqn",
  "key44": "4m2N58S1UkTdKF1ZqzJtpggQF4vNHeUCZHitams9jYbuReGY4Sqc2HaUPqXH9nvQDe9hVJEp1w2ptFiFxqjwA9kP",
  "key45": "4SZd3YHaNJVcAocKRw11todpyarRveNBuiBpLxNvH1zXPwonb37hW4mNfAN8RSHpKnndQxGsJU97e8MDBXj8oMW2",
  "key46": "37iX3reei276GeiBx5QGkBdH3yFczdGKCbtDySCLkRpCmDQ7UrVkPqPAgv74pg6sjgLxA9HFoUFAyu737xWh72u2",
  "key47": "5XmSNV3kZTQqkbydpHQq3LfkMUQnbHc3bueShKodRtVL7TaXipb1JCH8KXPHNFPqXyEz62e1wgJWtsmgogc4uyp3",
  "key48": "4qhCuTa35pspW46qQsjcuWEASVtPGqz8tGLjAjLzxLQXWNzHuhKzaTF6AnZuMCDUWA86EvHsVxiQrhpLciyZc46a"
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
