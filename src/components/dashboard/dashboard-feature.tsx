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
    "4A9Kea6SkM2yhiWpWRaUcyRGaTYpEP45obFtFryFvuNPnoJns8X3xopjR71aRa95R9ghWJL1A6K4gVAhBAP8JXBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27vZzST998bxhsA1hTHcmrZ9L3e5khyz7eaKARom7ZgqenBtG31Xx5qEkyKQndnk7gCZuNXSXgfzdDkTuM27nFSb",
  "key1": "3F4hi3SNtJniv7otEWF6fqVzK2DfhEbrQu3MM7RipqQbZGR5itkUCchinAJwiRgyHuecNHk6q55buX1r9XomUVuK",
  "key2": "2bYx5yphe7izuNC6ThmWwa1pfKKuxg1ZctrjrcsBPiyVJTncAtnWyfWwx7fZ4edxg3J7XZDa2p9jVHS8nXTvcm4V",
  "key3": "4fukGG98UeVPisoXAgwf6Lrc7fzVDcQgYCutBdd6Yvmczim6Ybwat7AiDPTmHnB6NQiVDDqmEFzL5SF7TcCnzcy4",
  "key4": "5rKwJjGrMvoqEqcAgzcmP942MJNcYBDJkJ8rZX8Y2YucGJCRRsbDBU3XoVurkaWed5MMXxLEPr1Yy25x9Dib978",
  "key5": "5ufWcNpUTS4LCT3Db9Rd2iTibnL4TtgbxH2ftWb3KvuHZL4244T7AiuhYHu2Ns7SC3VNzMCEAjmhtaY9uYEAK9KS",
  "key6": "3NEyHeDwjuMVr7fUBQtxhYtjtRQHASJQnfADxac79QV7jGanCaKfzbunXhd4cdEjEG8gMQTUpRnbyV8cDAMRRgFH",
  "key7": "QvexYANDgpCvvjwuc61v7K6Ynkcf3n1nfUHosCix4Cr9JiDDEmzudphgYr3yqbkCkxUHFxDFDxXwNBVKK2j9h1H",
  "key8": "4eYQEbM8pmEgePMXE3EBFzEoe1YSzGJcFRuYAAo1mdCAUkU7CY763YQnQPDBvVo3wT8A7jofQLftnuiMC68tbhJA",
  "key9": "4NzqdBaG3Jwmc7crMgLwk8fcE652LqQDuUtRgZXz8ncyHLHXty62g8vxLwsBSXTQ9qn4nvQBmBTKt85cjboCh1SX",
  "key10": "5kfhMbAktfY7aKirHHc5KJAdoz6Gja8jbE1rKQDbwakxVN3E1xJiMff7ecCKtE9Eh635GomHdX6Fz5wcbEipCz98",
  "key11": "4hiku8EcamNoztxuQ3r6VzRAcj26hQncZjdZiKXDCpwkJVw8UAob5Lm2EG1i3EoM76kMRo71MCd1UvttAkvFV51w",
  "key12": "5JbNm9xtMVUo565QCWmGZF9WAuTf9XJX9sqedcgNdpK5P9TLYbRjHEeZCZJNinBk7BYnFiD8Tzuo4fe7VWh16Kj7",
  "key13": "5wkTSwqGZJzPLUBk4rqs56LxvSzR3GeezqMgJmxJAAHz7cscPt96zZ8aDASqS5v2cNiQ2LEFQxjkwWKBZBEzTHFC",
  "key14": "X9uZAutK5XcEAN5aVWhmU2gJzS39UNZd7KPiUW2eFDKCqZuDex6K1KrW2AovNpgJgjhfcUHpsGdjtnsHnTpd9YE",
  "key15": "4QS9xbbCoxsxPyBfjMhEhJXurUWytu1ds1TvpQELCUppuJtdBBYRthPLFcCoav4gFDq4PduMWQA3PMBKS5Y1Ws2f",
  "key16": "65rVQnVL7Y16asoE2Bkbag158yBhVkiMXrpUuzFFnLc6zpqa4j6ohGwztLKDFfPVAogRC8zLXR8s8eHpE5qzHfPv",
  "key17": "299yDFyAUgwZdtJMHG875uPpJopfCoXhmQQL8JQDdyoW39ZniXnVmi9iTqa9v86Ro4Ly11Saa9hpoVZPmyMm3dZo",
  "key18": "4YCEAsQ5p4K3kqXFR9TCxqJogHX5ZAdjqebNgfLn4g4FPwPNWNzVfnZGjC76Rxybn1eDGiYbq3M2b2H8322EpJxS",
  "key19": "mNexYrVPnYRMStopd5M2wtoSgLLhnqVA7msDA6rtmA2X7q4UzM8Fy4XEXtK4cDJdewPMPQj7R5psPhhUKR3kaQS",
  "key20": "2FahUbGV1o6GX3geZJdgGJTt8KEY86Rex8ya4m73E6QNojiSS4s17raCM5YfS25MwYTUyWwv6yo74UMC2buQiZ81",
  "key21": "TmbuTL9h8X9JbXwsfvEfDvVmhpgZiQaYPPghRNLCjEfJXiaFXXsSeWiMSCH2nLkd1DjY3nV4Q6TfLRbcXdxDf3g",
  "key22": "4AG1wNyWYH89ujzF7TvLnGNXxa9WB22sLHcNc3Dq4RcL2mopEVVUtvixuggWes9j8Mq6BpTM2DZbcTfF5qb5GNhM",
  "key23": "3dfQtqsNiReTgmSRJLiQfaqQZVQptB3yUmGYh1wjX7NGHntNj5sEPXJTqEzf9UxUv3NMoFrWB4RPDUcbXR2ovnrf",
  "key24": "3pF6zijEF7EJxix1MwcVeNfmzgVjYoV24LtxakBfMpmd49rNoe9bEg2aaiYSAMZFWV6VLMJd3Skz8KXsUv9PVXjX",
  "key25": "2hPZchjqxRByyM54AbnGmenrYWS29wquojT4bRg4BSXAMzR459m1uzYULsDL6WwMssRLPjMwU14shwsdcZSzMGLF",
  "key26": "2b7WBqQm5J9VGcCs83HA5s56D9WdjtwPiDNAjVY5m215mBec6sxPSCE8KGt956JoYwLuPSVtENDN3Sh7miN6LYpT",
  "key27": "35vju9PsT4cWJiT1ibJEQFru3imXfwWAinCrmjEoQLejZqzVSzQMy2rFgBbadKAURk5SZsroChCS5BMMPaUWQmqt",
  "key28": "2CjWNLeu9iJbqFranFHY4L4d8brSBcyqZfEqULZ4voV8791V4RWigdi5ENPsMUkbEw99RABeCvra3xSYc4PQzxpT",
  "key29": "3HvWStM79Pgc587bi25TbvkvU5SooBibCLTyF64fZmVJfSabtnihKrDjmNJzxpN3Kes4sXy6GSH2rN2J4xmgnxLk",
  "key30": "2sZwJWeSjFf4pCVom7VdFXTxwj24VRWBBSKFZvj9w9vEuEqoQGLk8FtGHYx5pa2sz2WuYA8vUW8oxWH4GiVv17Ff",
  "key31": "3j4SdYMwpo5EboJgR2VA4SQJmzWPZFH4dRAULyvZeVVjmCCUae1QVjt9cbfLnrLjP8ChyHWxhivt5GUmXxRpFGc4",
  "key32": "58x2FNKmi3a237VSmQtQzNjdbLeBoaev8A4cDEhYziZ5Bruqrps4xty8WeVC6Xp7fr1ZqAkbjngtNm6srVfCUc63",
  "key33": "4LrZXtpLK5rzUHhQezEmXvKnqyfuvTTAVy5aypcTio594N3nd5ymF9f1TYMaiZZXMTZzDbhdDvafETang22gdfkA",
  "key34": "WGSYRKAeSkXpSNVYPdHuedUHAMVmW6kj2wYoXFq9hNdbzwLMUYfXPTA1KmDjEZUF6mLpMc7yHRDNahhAyKioXow",
  "key35": "5pvHf6Xf68G7TePejDSrttc9cnXqLLEmVB6ojomMKzrjXctaiaSGuHKdjjjxhyaC6SNQaxdABfWvqzEaoysgLkbJ",
  "key36": "zbVxdcs2KRSecQqyfqarHEaDSosiRBW4knxG3CTCLgDytcsgaEUJxcEfr3PhymkUmruuyvSMqdNpDiXU8NAToeF",
  "key37": "79JEbzqFch72X59cDEPfB1L5QDuRYwQHMKik15gVWruBmzdqsGTHaMT1XuoCNGTiXHtdNG2PkzmnXUwmi6cQD6D",
  "key38": "8qoe9e2Xr4rKkXvrmyXapSD1T3SmM3NMxpbuUCbDgjXNvFYYLB17KXVYet5hCfSaugVMCjht56wQJJKYGc3JKDg",
  "key39": "2mdf69Z4Z3m8RJhvTt3UfBYZe5ci8EuVBzscgaFy23BqSKtHQZdo39mieMkBLzYEhR6zqVjBMYZBGmoeEWeJhfp3",
  "key40": "2XE77MkAKYkDPakBNhimniiaYPZymcpQuurGrhm62dQd9FhYiWp14f9SSjakmwcKJTXbYEdr1ysWmCwpiQ1iZ8XL",
  "key41": "4JouMux4tyQYTsTvY6nQDydjqAo2qKoaRUoCardbYYXEtbpKNvwtMBETYbyRtYUCqYRxRrfyr7dAfPnwMy9UrkNs",
  "key42": "4ViYe8uwY1ZHnLfA8VuwERFwcv6tXQj6LrDtiy6vmz8PzFsKGimBFuH34BTYeQjj1pa49CMAzwhXYriHN46wzN19",
  "key43": "2Re67fDHENCepXPhQAPYbEcQWXQhsRworBFSbSKVWwQryzwrv3zaMSbr4xeiworDHFZ39KZwyCdDXR7Xm58pG6dU",
  "key44": "3HHGedDuB4yrq4p8bSJwzbUBe2omncgzy4TYCrzKsomP2HHdgkHQVpipcjbyRZaLZ8CyZ7rq7yD6mojW28oGMjAZ"
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
