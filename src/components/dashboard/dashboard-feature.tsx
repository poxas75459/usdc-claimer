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
    "2GHfKkSZiU3rVzYtxS8eniN1L1B3pHg3X7kV2TQTkPnp9ieXn4n6rcBR4QEeabLjcgLcFFD9MYTgXh6oFKG15KVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4XUHsQbjJteJPyAwDpxQhdgpdsov5aQ5L6zdXgcJfgNhbCHReXon3t2sA4dBcMhf21aT7hxUPmaCxfPGEgfsLD",
  "key1": "21EoAduTDUe5qdLXum42CBmMy8VNXtihfKNd4krwxBvZTjRCUzzjw5U4sbd9iiiTibXU69JGvtpzACUCNm7LvMec",
  "key2": "3nkVC6X3basam3NoaZCqxUJ4XPVLxSELSWLQ8pDEn2Jd83UrU9gZcb6ryspa1yjvp6wEKdWNZBYeAoXg9ysQAkMY",
  "key3": "pEeTdG9rT4iZdU7iohY6dyvDLDLm3dSvRk53HvvmdGFcn2rQEjCr5w8SSYsYszoAtc6vxy4EDAfyat6Mxie94Q4",
  "key4": "4fDwXqvghGfATSA9QiMfEeK3bquMR8zNGtQPjY8UVCXRX2RGyEGSCpnA9Jhh3jqBkDUeDPGA3SBEZQFAFHv4sYDM",
  "key5": "4Y6twZKwc5iFSgqJjEdmJWE6nm3oHY2HbnQ6RNhRKt77zoDr7iRAKfiuMHiPRmrmQyPUD46H1UAdbPieLTrVkhFG",
  "key6": "5JTwZtJuBYt5YKoj7XWC9VhVYPvMkNDo8nYXnUjTr3DTUt2iUsGe5X7GFxb4MEA2KgbTNFxEAK7faiscYMjfniuH",
  "key7": "3LsDRAmRA31QXFKtpSZUWtYeLBF8jR5k2N4XBsUUmVYMiovoyXWLMTi5EsvUPa2AwatH4HtNoesWReCgCrLGBKkp",
  "key8": "idT47rBHzDHpxa3j1ZttSxwwYBAXf69p6mkuqTdZDZeB9ao75n891XsSHr3hSwuU6Xb8PSieg9iSLjvG1YgvZVc",
  "key9": "3uJpqor5XLLLTX6sA49P3REWP2pGyErtjAYo6koJ3t7s5iDWqE8Hk1oqgRGxt8XzPssVvCpuh7FqUY7KVqH9Mvc5",
  "key10": "2exDQCmnNaPpB8iusY6axmGadRiFFBMYXNKTnnKVypbKhdQG6cxFUD29L2E1K5J67hiiDDLPigrPChc98i61K9XU",
  "key11": "oFJhyi68vDtVuFWMjf5yDUX6aa4mCoYm35gdqB71PTQHrjV5PwPkuB6TS72qoHyRd4xAmoXHyr1soWJwcJA9sCj",
  "key12": "2VmPuZzGhvWrGw6v7hyxMrUW8U9gxa9DcMwZumZMvw2s2Y2oqMdwTs1pRU4C8z1X2utFc8BHKuvbgSiwfT6hpAqn",
  "key13": "KKgLus5XxfbiHbpwHY1UjizELDyW69RRgkp3HVu7JYtsqKUGXWMxoeqsmS5cZeTHkkWo7XxBPPxXdzfCymqiWGN",
  "key14": "4xTYAcnUJq3vMSPkuRq2wNzjQFYZrd7h6fdWUV5g33G59nJZd2PeZ6kYvxTm2FDjT7Cvd59vsxTroTQvPTw6QRci",
  "key15": "2qBrv4U1DY6SPzSr6Tvy9usRiq2anTNTLaxRt6nv38Mp3t82f8zDCnfkwaWBceqwJZ4sjswNbTtrfiGfJMcZr9Ge",
  "key16": "5SPYMNTgUyfr1TtespN5YiiuR7nFjooKGjLucSg1HBakBKf6vkPDpy299K8wS86Mnt18t9QPbsdQGSH2fwucw5pP",
  "key17": "3yJwxkfrPPgMhmyuf9Xt9WrEGCKWwrkxXt8S6ziFyaFA5PMgeKNrVxEW2gMzJs8eeL5BamZUVhDufZyySydBtigB",
  "key18": "4sdv3jy1eyruyagzaBMhurSJPa5cH8iYHPgTbz1KT5aPuR6j1Wrd8bc8xMY9FP3zNnizraEQddUV1a9x2NKA16T3",
  "key19": "4LP5KL7efqZA4ugdQrKqkx7MgE8ne4jk5kqScDiufKmCasYS7Jg4WHVFJGx4kV4FW5vCZaFinPK8aYDBYmUfNrAC",
  "key20": "4ANZcZsKcB9HC8DBj1GU8kayRCAUojyRVV3QmaAHKXp1pBRSf5yko6cLxQUn8fntnruiK3JnshpdUA39Kkd3vJpp",
  "key21": "5eygHGBVs7jfyDFmT5VMKSJwmEeAETxdxSNQ8Uatzgf3FDo2iFm6PNwQjnU3eqKMjmcMTofsnsk8kE9t8tZqnSoM",
  "key22": "qohVTQ3YsmJBG1Wfa65xodA5tbaXBZehkFTVWvmtrjyoUYUfyVvZc3ZqUCHXwaLk4Sp6WzC2HFZ1nKTxZxWLqp6",
  "key23": "3MuReZqSW5XGUmc8P7zgP5nVzrCtcgxbmt1ucAtgPGRN8vDYg5hEB3Zmwyxr5yvbwdwC7S6jfwAn2F9PYPCfmKxA",
  "key24": "4nQWS45sfan4iPfoinZNfo9yDzdqzUwsz3jgtzKSa4jpxa6zZ6geRrnxxq6HQHdjM1Y5X78zRc7FuWSXBgg2afLd",
  "key25": "3Q1Ns5D5QAW4t7FcVGDoMuMHaUWkyp5W9X6nmZ8mqjSMZfP7raSNahwY1fEd2HHG4ARga81vvkLcfL2uoYvVZABU",
  "key26": "b6wpM9XgsYrRtMJiTAq4MKnzPVrfM1Z3rLDSVTNBx1WEruWsGWoVVWKBX7vNyiEME7QwgdUCw6UyTtDVdtgxEvx",
  "key27": "2bmkYpaE3GAGTqcjc9Ni8s9i1fzoWSTFCGQP1QTfieXABZE6j224KS7fxSwnVi9PPNQkypUJW6aU7fACdNBQyz3i",
  "key28": "5cNTx7bffNvYyBbPxpKuTz59r4fBjFKpFkTEiaCfnjfT5t7m5repQPUerdThiec5RFKpXuSWyAsvvunPfg5C4o9w",
  "key29": "Sg3yuiJYon6rxiZca6YJFqF2ADUwUbtbNggz4XCCAcNpXwYThEE31ZmxKqWncN1JwdQcm8GnxKHwA3tu74RtudE",
  "key30": "Q3LU2NKN5eAFwcYeQvPvbPnr1TeqMbAit9MTKinCtsQETYgV3Lsei6snCHcYAth7RPPwQVZVc31hc1PW3vWtTRz",
  "key31": "3pCTCcx965hmKindkyTUth6EVdsTLemn9gHSdUSx1SdpQiMq3uHtij1TiXHmFZxSZz3s4Xb4nfUFWeoGZADsEzPE",
  "key32": "2JrvfLjQBqMZomm9b7Ax4YfUSqPgWzE2eDoLiqmXvSk3LbmkSRzuZb1Wx44tAjMc4DzxwiexyD8rSTzaTJdGxwPr",
  "key33": "3PPSGnWT4Uojzq33cGAVPt6aexSRdi1mVRd8eJ5gB3eQ1XZyVaTQur17FMAebgF1C2Gt27wNnoRn1XPChn2s9yDW",
  "key34": "43TZKeWpEEbRJ8cs4Lx3dHYoT9TdZSCbzszqMkeFh18ZvdbVZJgMRAjn5XBNx1nsYJ4467gme6JYBhutLb4193D1",
  "key35": "4b72aTPGzokh2zQ3zpHU4ga8SP6FffoAJYsKpqYN4o5U3T1K5KxD8s6SWRJv22hyzG8wF1EC2YuyzVeYqxtdYYWY",
  "key36": "4t17KTmcGYHH4NrhbHVVkg53ajBdJrzpP74iadGanKxsnavPAxuxyf9imCPS76XtkzPDDSazghHSyAzmY581uc1o",
  "key37": "MUttcKPttv9iBMY1FArBVqTkGkhGa8eBfoaEwsn9wewiUFxyWKDMHmR8Pr7fExD9XChLUwyCK6DeC7Ui8N4e5ic",
  "key38": "4afKFVg8JRV6oShd1X5E2RfhzZVqcFhhUAF4YotnZXe4PN3KtT1dAMaBJmcvB8cuqvkz2haCAU6Lz3h6hzxV1ZmT",
  "key39": "5mhaN9V27NmLejH5siyaCsaTvuYspcK2Y1qVgpygcHRHgSEJpRtLcjZczZLSFDtQbQ7o5Kuj51kG1nZDGC2PvoSK"
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
