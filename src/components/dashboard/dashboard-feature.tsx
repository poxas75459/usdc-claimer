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
    "23J1kZ9Ggqxv2JFNwMdSVyEUo3WuoemzVC3jPRXJs5VrDdvEfP38xj3Q53pqWQmXr22uAxvC5x3BQ1AyPeKj5q8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhAzEip1rmN49ziAH436yyWZEySRGnn4s6LhvLabDkqMPTgoE6eZGxJiUVA3xio3Yhxs1qyRHXyCQcygSJDfppJ",
  "key1": "25zoemePA5m4iGAufGW7W5QX5CFB3C93BLVX1jmtDHj34ESrgii3D1PzdzjF7Z2thDcYmjg4vqjpdkKm2x8krW4x",
  "key2": "5LRb3dvEsEy7Nxvb2hZBcr8dAXHgjoituXLBuecPzLDGz7qm243nSQVfXePr4f1VJMEcK5EBZpBumzRgw7nuojxj",
  "key3": "sQaxn2JB9x9G8Tiv9gHDKU3yGKFZsmM5cN15DzcsTnfym5YF8kewUgWpT8wnAvGr8y36am3wWkivLSuyvttkQVf",
  "key4": "4JPp1RvdPB4LdV7BcH9b45r9dXjRrb3jGg8Q37itoTa3bMTGyW5M8GQxW8EKCMTWALFAAPcuLQifK5b91swSsFL5",
  "key5": "5v7t2qdYjxnrS6kNecbHvbQowSveTsJcAzHhk4X9zivXBkywYoMc3hHY1i22jAgteN3xwiPyN24CjHmtj1xD6xPC",
  "key6": "38epV2KyEZFosjm2dvZACRpd2tEH12oCYjDTyTfzvyMGRH9oGSjjTHJ2fJgFhDcEfZnyNttKAk9b8Ye6xGKk92jY",
  "key7": "5mB2J3cyhpTGt65VYxoBqbAxLyAM3HeU7vWZg2bZJG1dHL6sWHptj1DwvdBStU4J7snPgJcLpNLGjvFtWhQwVYtU",
  "key8": "463amPP6aH7Qr7n3TSaAZ6KYEaFbWvffAfitMAu4ZKgES5H9rwPwXowVEdSXtupqCHqUjyvydSk67BYs4ao5JL5E",
  "key9": "2Dwn2TCX4P4RBdMwnLEMfp61YrcBa54MvYrqshBHQHqiR5oWaNzYGUxKrDtdToxdT7mZkR2FpKfsiFe7EHryfMEq",
  "key10": "5wZE4Z1WseFkoEgY5hxyY61e8gJoEaCLdEYbmtR1ho2UfZCvxViZqM8zhYmC6JwoAtaM6xwADyoBgJEJ7HkURa3v",
  "key11": "PPsuDnKTExG1tJSiKFQaAXmBrQAzSzc5k31DsTpXNQ1acco7ya79vFSmr45YkfUayrLNZUQSCh2UH4kn2JVV5z3",
  "key12": "55Eq38RdyJCngtthCP6vNgJv7r5sU9ayY4TzpbCchdxy8icPmgNrK55nVqRYkAVnMp8i3Nn8oLjUY7159w7BZGJr",
  "key13": "M2LzW9J4H7xrDUo2PBpGaBwdLYCbzvfWgBEvDRWYh5fqA6H9vDQrscrpgp42FzsU5sNyfZXg8J3wVM7RM51FDnK",
  "key14": "45jCP4wadsUZMWDQkPmt6yChaHANfv1uQPKouaFP8mXWRoFkoXMCwZDNSC9i4H5yQMHR9zabWCRLZDxPSvCCz5dj",
  "key15": "4ueAUhhErKWFosPBfjKAXUo3kJvbDmYvayGfiBioFGjJJqerauNF8NaaDqxauo8VcTBb4b7QwA6xJaW8uij7M89y",
  "key16": "HeQ8dA6Jftn6DnutsEEb5r3NAbxPXArxSp7NQAgFzJxMG8BQBmjCKcpgjoh3bT425PUA7edAenBZeATZnEvsicK",
  "key17": "3K35yp795tY7kUGZ2EhawmzwjfedQLqHNzxgWyD9VHMXAdJTGRwebrhEL6S7JSV69wvvo2PQTaAPBWnXJsdUPEqB",
  "key18": "3wcGc4YxjDU3fVcAeqzwvuyvQxVGK4z7UEbNa8i8yGsGJEC8P9R3o7qzhqsMikfiDebc96Ku2ybFyCMewJ2Kw4kq",
  "key19": "7bceRc9G2hSuPuvbsinYyjSrsfSoq12pprEuVGUWvdLPSWSYQjwcqs39PNkYM2x4YedQ4winYhTY6XcFRmzaoTR",
  "key20": "1Mr2efsxtfXQ7tfmBySkCcMMy31D7Eneh4XCb2myhbhZe98QUd4fLrPgb9353MAwbDV38yfYr81fF7FN8np4DPh",
  "key21": "5JT4cmrxf4cuPKaibadB9ZyNkUQ6yvXoazbZur8xDGMnQXCzfBhaZBDBj6CuLyjiVbaAexXGAzFcb7MCV52fuWNi",
  "key22": "6snfWFp79bf4sATKyS2vwBL57rQZQqrBPpUShSXK4mYmKae8Wt3p89kNJg2Pz15A87Y9UtxyXpjtn667zLMhRQo",
  "key23": "3LAC47TADBS2kw37zSNdUZjZtfjTygXwjpU42iT471pfk4QmfRLbkX9EoRN9BTGDxnCZAnkyLNJ78qvVAPsxhVD9",
  "key24": "3s9Gcj45afMPogwnSG7dFyMVnJaYMPPTgPYpCb3pGqFoZmqJ5jsbzb54GaD7hSPBn5kfJdsuCWp1ZHXhDHnMCWFK",
  "key25": "4B6cRXTDWe81ryAd2BMkq5M4fBaRAFGmjDTMnvjyjLscwEiA1t568s6TjiBahXEz9iLRKsmBLpNa5KRdu23Qtyjc",
  "key26": "2wUMrYQUcKZfp8xKsTkggdvuAUDzYarKfpEztUMDDrK6XQnbPwnzodXiNKvKS3uzHgo38ei3Jk9fWcFVx2KGDF7P",
  "key27": "5Xo2TKjBqQEmqCXb2RsGv72AkLs1fW5F3sd3KnhY8yKV9bnF6vogjfZKc3ftX2A5QG7MvC5EkhuMHqGd3hetPYGt",
  "key28": "fXRMV6odXHJQia64ru2A4N3MNGADsxNJKCk6znQgRiVAG184tgm9ih6WfAHvusxJt2sP8WxvX4sL6wb5Nk75aoL",
  "key29": "3XpCZbQnuUHULhuF3MF5kPgv6AZDPoFwDvkMc7P1Xdykr9CW5VV5o6LN14D6tMbxYBMjAavS7TVtRV3zivosoT7Z",
  "key30": "5bi2qkiXzunpEwq9UdSfm61H8xjV3gySbPTrNn8yREUb13tZUW9pwYDvtfUED5jms4sCPdtNekYF39LX9WD3jqB2",
  "key31": "3oLbVv1tYH2NxVkGCaA8rH6FSbo82obyGvhRVLS829LnMwmmJTTqqGu1NJdXDKxVe3ernwpfQsZ7gAJsRRYwKRHM",
  "key32": "2EDVRbg8anhcM4vX8Qb5WtppoKgSwUrmLdi9Bfb26NNByosH5xnpiFpTr3h16YnRK23ZM98M7uaMDNRQTc3qPMUZ",
  "key33": "5PWABYCfs9GY2TFZsSo9eNuqovAPQfhJ4U5Lqwab2U1rqHyVZa8h9DAaAieX7YD8AoBPQpYaiJHJ8R5rTPVNaGeZ",
  "key34": "3sdprVgKmCMToP1BQ3j6JnrbYdLFUQ6kMXwburvcw11seQB3RQVMHWavVLLTyD95PdsxV6AuHGoSMbM98SiJ956T",
  "key35": "zRTEcHfjMfmTT5QAQdifWvp31GnvTUH2WhVfgL7VeCnaPecsGCNeL9P7jDhEL81Ji2yqYPL11PKNHYgWhkev3sT",
  "key36": "4ivghuKhH621kM7Ym2nHsGavEdnK2cQSbWhtk525jgYqx3BVvhCG4F3Cbofzpfu8wDsHqjQNa2y6S5xFyVdTbLyu",
  "key37": "2GpGyio2K8e3U8ZUbPiUC2Yu58UKTNoKeXVEiDReU5sEWDrvdV8nMsq9c9QwmVi7wP5dMmzvNU1ZovByXbHQ3GVw",
  "key38": "5rsx2yx8BevTWjCMM5AhDbaVeSzzcQJaTC27U8CGq1YBogLr7TxqpWiMqDF9Cy3bQT2PqdZixpRGZpN9dk4FTruo",
  "key39": "4WwE8XxPSPDiPYanuEgvogcNo3YTEZLLKuUnPMAwNr5qBLBvhAnN4adHn4Cc7fSn1gjZRMWyGpcp46M1hm2hQuqt",
  "key40": "3aKQdx29afyWgQuzBn993WZDFgMsRfJtih5hj3fzzB5ZhQdhJTL3aCo1a7Y6qKr4deu69wxRqfwsBgyfWzGrXBte",
  "key41": "4owTaFabUK5qRjEbq5sQzJPp4ouRRbA22MTSH2BzZjVjVzmqZ4vM8qNdHgoxdvFXfSLGoRcJwaB38ziVpgH1qHmN",
  "key42": "eidbp7vPtpXzEXFbEuKCNrLbhHm3DcabzqhhTFCSbpW3Dye1Ymx6nbVV6ZQs2uAiShziUa72A5aWmzrU9CDj8bq",
  "key43": "4hvpjBBHaFHAhCSWqEDCupXND5mHjuac3BVA92CsucccNSv59B1AgDtyLu44ZvbMngzWFua6GMYQ8SxEpURtPTMy"
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
