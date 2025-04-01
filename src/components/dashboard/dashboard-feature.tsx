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
    "st4s9ZTj19NoAwM4j4gQscjp5NaLgfAeX3Ybzv6KdGkUr9wCEpcRjPtKLmyRxhLfhin6coMrb6CSGY4z3hxvgfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQyAanudcFZb122wBaXFYLtCPUrXHpWVwzKa3ADPWb3HTNnBU15QKYhjGi3pJmQFP6dMCmmoBX4fRCyCZZjaAKG",
  "key1": "2UwFTn34fwsBYosN4Nn3MeQNScTBbfAiRw1wv7GCR9DsGrYbc1d9u98MtpjhoUR1BUcuiZSR9DECWDM49sSFJiuL",
  "key2": "33xivrZXtSpWZr5U1UTvj3rriLG4KPLuANEmGJEidoRFgKHz2TFVpUwsUupXJAYB5Z6KuZcnYkcnNCWxj9eGiwts",
  "key3": "Q7mQwhiUQj1dL9oWhLbYhK4W15LW1mR1BAveUSPPvqabNqyLPbHgKpQNMUVMxDJmnxzg24oGQxRhXWMxjvAJrtv",
  "key4": "KPJhu5sCYCtyM4Zuy7NeFxXfL51qBhmvti97n3dAnqWgysyewvwe5kwxgM2zWkoDDWCV38wYA3Pw5JzsMvVEMy5",
  "key5": "4sg5t5VPPqC5LgPWRYc23uqiCHmdUEbpUahFUi2hXWwKgKrUphLnHRhL2PsTURwaaFibNQTCBg8tn7FPQLHo394c",
  "key6": "64MXZbvp8RYLpYdh8kmATjepKYQgjVF2AkTHQCMxcKr942bK1aQpsvuoES6WsFXpbBAacZvbHgQYtiiKLRonoPpZ",
  "key7": "4jZiDp9TgQQm5NbnjHa8D1NF2bRiudcehTk3ByUyD72n2PBPFwaWbYwQmnVC2L62kRsmDtcJo2jKuoskwziaZsq3",
  "key8": "gSpsJdsY1EjmKWo5RD2pNRa5NpeG3M2hRnMAPwwRKnkgP9vw19WraVcdTE3AS7iXoeSH4AyikwQW3nabCMCNrb1",
  "key9": "rNvEpkPJ6PGinav3qCmgbarTxneaELGcsSwdvAkdeZVXG5cn2pHfHSuwru56jv6LKqeC5AMmc2kqcPQ1tkSkWDR",
  "key10": "5XJMQvDvrKgNTpDj1B2JLCMNfvWoBuqZ4QT7GRQQA7E5rc6uY1X3vpV1PTChDhnWkQkcVM6WJ97m3fFe75iT46cu",
  "key11": "3NMtT5ByAbBRtisJaNx4vcXJB5qc4Gk1R2YAptSzYQsLAZp9RoFSEkjfqMUNdaPHy51ict1rqt7DkAyfhXPW8sqL",
  "key12": "5k85m3P7CWcL47V6TKtL7QfFJKUCFeQPY1aYAhViRDnGMLFDe4SugHZh9emszypDicGg1yRYx4KeezxJkZh1ZeN7",
  "key13": "f1PRGHYiZX1nVSaPG3KdJ6hzuu3YqghFqKGnstL7THqgbTfYBUvC1hMw5s6MivLvtjuZYwMZXtYoYT3GodU5W6q",
  "key14": "4UPMPgC97ZnCLukpcpE4ikZ9Y7nuZe26GLgKMGqcGHjWdobVsNUrg1A47TafDYfxP6gDYHrrCXkWBn26c1KgzWa6",
  "key15": "5jrYjVBF9NaMwgMgGXUoczM5eFdQaQ3ixLd8rR7r5uNS8UbwyGWTGcZeuo6hLfKA9P6jdsKfZzDQLjrRbPNZpH1V",
  "key16": "2SRY1cFhecngVSPSVGqHYei24CH7Wm7KpS49BCj9Sao9G66zDkz9Ygac8252ejVEhrXtbJpZUSJABVZA6aGtnfCD",
  "key17": "4wB77HiUQz8Upf82VkiwCQLuNd4JUxU9JkZsNjoG2uZ19FXxoh65XFXm7qNAaqUJ6vmjezs4iDuDTcNZQfaYaoLu",
  "key18": "cAatokbS5eAh2ZLKMKvftAS4kktSob48JAc13yWsfu8txAXDPmbVVzFNbtricXWQiRHQScFVGETSCAieCe54RnX",
  "key19": "3hafwyRJHLfQJcPqvBKLR9aBJp4bmoGChgXPHYmM4pgv6VNJpsMAEcJCbkXWJeqBcSMoTfDqYNz6oHFenx3xbTwY",
  "key20": "2wXUA6YRBPptTRfnHZwiohNZ4pdFEyt5sHd2ZqXPECsqgHhXSmL4KunPxfDiTD5domaQypgAZThmwVAx1sdh7Cxn",
  "key21": "3iUkPPc54nXHf8K67SvhXtmAX9cVGPUWnkHGqxrixgLwWgWJ8i8GDhu4epML9bdTX6pPZuGrUajGeu8zWvDSU4zS",
  "key22": "5Fb69rKe4iypkr8BhgEPVb7wfvehRXs9NcMMUGNPUiSPxsG8BgUhAgJyzDfq6o8gAqsRYnpjfXk5SpUKKGrJh9KU",
  "key23": "4FPVa4J9PSvRC8HvDnnhF1Qs3hbG3Zji47XLvsjRXogatHaHbrYCTxpzNPnq2xb9PLfRGto8eEKAYuQvnZNAbmWM",
  "key24": "4LiAeaqSmDfP9U7LrPEBjhW1dQ9fxFginYAiPugocJ5a2BSfwCPr2qzWsxphXMUTjygnQBBgfNqP5qKcGePTt5Qg",
  "key25": "3z3rnezBPTb1Yi5sNiu6EC9ASL8ycofsew7HJy8KiPbrxUBhwJTAqRDHJYQr1VWsPxLX5SuLUjeZQP8tJ1kLnxhK",
  "key26": "bAp5WEgeD8TA3L7fviq9P1xMShdysK2tajEnNUM5b6mFdCK3px4neaNF5r95dEXW3sccSmTWL4aRhR1FYo3XYkw",
  "key27": "2RZP8UHJnzYW6o8DJmcQdVwyq69KyPx4Xe8cbHAETm98Xzi7a8WeQa1Pf8FFvUpVaHeJSUXZPtGTzjJ8yekBqEUK",
  "key28": "4zHF6AKbJ8KZE69ATszMV4nZwE2F8URZXD6UcjPRJsqytB2aoM1MpQCD5nQfy2R5vtP1GnRXmKTMi8hi8WjADD86",
  "key29": "21S6QTUqCcHvCE6AXY9QthvM729WJwQuDAA4y91qbRRnN1fTPAP4fPo6eqNibDjoyu6Vp1MG626H5hhs2SK9Pbah",
  "key30": "dpT9Es9mEpr8f8qmgHhxRUvRsFimyApRFkuHpwTKcBHDxopaNM4drs3tjTPG9QhykqUNvsziq3JpKFCTEXZJj3T",
  "key31": "55g17oK65hGP2QDQmq9DsnJAcHEFHEZPjTgFi8HbcDCKeY2hBVyE7pJ8c8a5y12LGTyGekG2dm2L9GtV12WAnPB",
  "key32": "3XxTZEvfFDHdpjzWMKdYxk64CqWeXi9NyeUbVPWvw1UTYsrpCcAKBzFanQEcgKy62CSZH1wCVtngLodaNLVfEJnj",
  "key33": "MfvB5mHYUriBzKFSj72cekCqgPyQPLPdjKze5NEjKmtWzYMcqvuZa68RPvy6Ya35SRicms5fZA1A5uuHUkTAKfN",
  "key34": "2Gch2KtadAggscf32dZLRTw4EwydXPWGrvd9ukWE4zfBtcVAr8yqu8b6WzJzrjhmNJTE7GRJ96Ecj39o5vEWtF1S",
  "key35": "KTF7ZYuEQK8W1YxAEiFAbvAYkszPzRaoTVDt2RJNKirZKTAq51BEd9Aoz4unnA4Dnp18vt42cWdGokwQqGpqfFW",
  "key36": "5wCA7aRkVchoPPcumhZhxeUMNoZHo7jAaiVPYoPwRdTwWxNTLsyifK81wkCwXgcvWTDhSGGd9LmLwJyLaeHqHSBU"
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
