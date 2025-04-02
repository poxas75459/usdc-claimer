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
    "3eqdW56ZhjiU5TbZF8j9gmCcP8vvirx9pvrD6TcxUVir7stU5ZKHZDdr3vBWbMCmn1GZqwyyoibRz7ncCTvLkLDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRxTVYr44cAZVNSf6V33FhKkBkcvXLLSQzVd6kK1ZRLTfTNzREPg6ZGukmAA1pfG7ixh37rHeuKRrCPXjDbWQ2r",
  "key1": "NH2vBCnkjLzoaCqykjtuGxh856WHKKNphJciqAXyPhiGgXji8UPZTbBTH5a3zKdiQ1kyAtYmJrn33GN1GaQhz5u",
  "key2": "5q28Nh4bAmdDXrF3TPQDj34R7bYTZieSXpY2a1mpWt8J3KsXKj9PpYtoWm2B23CLzfx8oU2nB5uZDUGny9uHQjuD",
  "key3": "28G3sZBuDqGFbTW3Md6f9jDMLm1jRqcrnPFxDTfpQKxDFpkhsXJ9ddcKthviEvJR7PWP84te2UtMHQ2x5pNGFbL7",
  "key4": "2K43qt5y3ySpf3ovCtpbtMxC7jR2fYdLHgo2nnJMbEGA6j6wiPigoeXviL76xsdEZj1xPsK2Fw8F85ggz4bQuRhQ",
  "key5": "3h9PF6mXRyk1KRyqPHuCjnGzGejPprnV9VNgcyJRSaTw592ymipBPRNqRXF1bb3vsqgAS8g7uMmah4hiJ7wCqxT5",
  "key6": "33vcMM3UGc64BYq3neiVNJpGdvm5cY3vgkFMKQH2LZT8xnvvPep1PP4AcTsyiWv3UFG7myfGCgneKBgkdoHBbJd8",
  "key7": "2THYrQGYu6Wyq2REshc2MCytqiF7RNjuuWxABsQZGn5hqqpdKM7QRSxbgud47wQ2kqZ7eq4hFLiPcTdVdyt6oLpi",
  "key8": "4EEKgSDhnkMqt55oKV1c3CXjk9jNf1ck5weHqMHDNLRMUFdJr92929dJK8qZDGAPn9y5r8yNAyDwoxvwpMnstzcv",
  "key9": "AFAsj5EgaJcavCuxRmcrC1vxRg8FTizPC4hYm29b8cbdHuG9xnT9dtJMULWmnoHHwZwN1hVvLUuoWMEph2zyZUs",
  "key10": "DqatCAqAczysDMAQrKXtWW6R89LJ2XgFnENF5ioV9zwW4b92FkWrADydKY2DYRGFVofXVd4jMtLv7LC1iijJrei",
  "key11": "5FCqZVira5qUdMcx8dkyeXF7g8qTVRyfQEscypZtbiQUSnygNt7GGPbJ78duqRtrt59bihaLCDaeUw9i7UJZqHT5",
  "key12": "3jEFe1XfsuSjfaGfQ6gaYjvBDrKT3FJxyJYrDftzTJTA5DmY4nfqxufJnU3hWKvhTPNxP34kjLFGkuU6v1yLD65E",
  "key13": "22TcL9B8kFURfHWu36rp2VdKq8itTnHk5mnLoUHVJZ4svX3YehQWuwXqcrqe1cFqgNeGQTGFhXzgPcv2H5X8fAgv",
  "key14": "4Gh6UyDdXEU7wUG8fhEN4NEAxPjeAwB9HiqCrmui4sYdRyb3zYj3r4eBdhBx7FrM6o871wuugieenmTUEkLrFcFK",
  "key15": "Az9mS7c8qEnKG8RcsGjnU6YoS5qoXoi8Rrf6V3nTLziS9hqiVZBLHPj4CpSBPf8MbbX3DKCANypVivGXQCqDFzY",
  "key16": "5yC6PYABwDSaYrSVfdQoHDptr5TM6adwiFxc4kTvgSnFG9W9keAffhsZorhDRs6Td2XwtsRmDM7sYB2fiTK3wGPP",
  "key17": "44WD51G86vPviD66BAMPVFC3dku8Dwcf6NLUoYPUXMzaaEvVCCpyQuwA8uCGkS8fPAiYHMLmfuRtuQWi14ApAQws",
  "key18": "3wze187WhW4YZaoDdJxMYFV8AV3UZPNkY375CpKWEB78nunxTqxPBqDPndDCwyyeVVXC8nB5Sghf83nUttaoDbsf",
  "key19": "PuECRrT4a6Jif1w6bh3V7CiY7AVUhaSDCzznYQtNb9xENhcdV9gGx8bYkGzEqvdbEUgxcbZCepwpDxM7MYZnkmQ",
  "key20": "3VyKYmerG69Kyo3Dep6SVsm1Mv8oSiJ4t4GQ79k6534nkTXrUYBHZ3XY9RtQF8qjr1eX8GfDFrCQvVJSpaLybs5b",
  "key21": "5uK3N97oEeMPRKE5jMsEj9j3QJWQ7uZPBYNwT7QTUAaBhF593r3H14Gyhe5TfVaKgsuEuGDTvMKcrMJwGpmPEGo7",
  "key22": "4tXcBmS5yNSrEdYyLU1J8adsgzMpGbCwKmtoi3dA51cVbdJAm52wGhkTyQn1MFvPpi41Jn1KrkuL9wsywpz8EX7Z",
  "key23": "9JbVv7qyRoTRFsk3hwfvhtMhZVEJSwQBppHYDj9eWeL74tAM7dPFUjWDmGeHGNWfJze8TNhvq3Wr8LyexYz6gvX",
  "key24": "4ffqWxP9hUwgTZxKEdTyUgmZa2TdDSaA57Ja7qcGsN6rxjBwPwvRfhjiwc3FiuWFE2r7D2trPGiZYr1QM37VU5i2",
  "key25": "3c37an6zSPrQjMrAWmLcRquDacEUhGtn8eSnvYHfKgdhu73QzCef2XS6exdTbboSNwE1u3E9bcrWyuWBeuzXn3b6",
  "key26": "2c2bLWkMLingAYVhe4QYygqoXNq1Ho4qTTpXhexupjadC6BfpKGETZdFUgCTfzZJajbmwz13WP8AHaNZUJWasrBR",
  "key27": "3R8PmaxL7nrYiz1Eg7dMQUEL2vShz9LgFZhGTmEwh5QvVgLaKtdqmRrAdmPvwbB1PDqPyfXynqr4qJB6tyX8JoJe",
  "key28": "3vp7fwcATd6jLrVuC6xFzmEthUhHtRBQxra9iwRdrXT1CYGr2jwQuwr7uCKDyYENCtTh9c44nDKxkrJnd5P1Hhp8",
  "key29": "JYiToNnYzCfLtYg2VWBEetpUE9eBrsoLkCWpsTUKZkN8h9MytEPsRjSxgsfctHLBiuGivGithFKJwLJ7DYdj469",
  "key30": "4etVGhUsoMMYBWu6mWu2MHUDF1B9MgDKzEK4oZ3pYH68YS4aAdvFGNRNsTnenuCWHGTE4qoNyaWjLmikUsSHp3B7",
  "key31": "3jdr5EuMP3ZVAYzahMBzWFiusqN2ky5xNxA8wbXr2T5gPNvtB2YG1vQKDNWgq31JY5vq7QGu7Czcj2FWywVkSGv8",
  "key32": "3Y4ehrZ21kSrckPcAYcpackUAWK7pV7nKBCNzVB7q6gargoDfPuq3MYy7aCiaDFL5pTs3i492uj8XoaFXRTJf1cc",
  "key33": "2Rnd6V1jFWwjVZUbNjDdGZEjtQZAJuQp5vam9bJrzPu5duz94jJUNipn3GWjXkvrJnLR2K9xUxVHmK3BVV8cz36",
  "key34": "5vDzeBC9ehJSFHJC3fr454C2aCPWoMdq73LdPWgYPepC3EQzTPFepXzkxooDZhrkazLDJ439utnVcGmSWhrpU6JW",
  "key35": "2RTsAFAYXRrh4Pmdi7Y5UULfTNRcngvCNzYNS6sPaTbWn2JUSxTrCDWqm2XzjWfAwH1gyd8xjoxL89oYrS4uornA",
  "key36": "5sC4EemiwGeN17Ct1ZigphMBgxyM7xJ6X9RZwy8trpNLQC5ospZrB4fVSNxaaGjApK6se78kpss5huxZWBqPgRUU",
  "key37": "3MHZMtKBP9hnvkY6wH3mpzBT4BgR84DAuNfKtLBc57Pv4vLQMmsuFKCNN2yMFq5jhy1jPj2hAgruDfmB7BRaLFsm",
  "key38": "3WTnJ64daUfCwsRfGSD4SwM77V83QBUrcE8RMQQdDTVDmuwd8BwHamfGMKcWWS4qon1VVMBga1sgt99tM2dkQx6w",
  "key39": "57uyb3rgyTsAiVSG2qXN8a6Gx9sXjrHHvmhnVnngUpdm1dYu77fBq3A4u4FbE8Jp25CL4CaBQdk1jnK7AmWbZZ8i",
  "key40": "3Czf8QWZ6edmXnpp82qhu3zLgorb3JGjJrBSS2cnqV1KzV2vsvjsZDreFALCWuTxCJFnLByeeJS5rWBLuCB7gRZx",
  "key41": "sbd28uxJX4B5dJSSQnZau54Ar4VEvJVDUJLNTfyxW92EsxnmqfAp9qjf4idw7etX6hFt1w716seK4D2BW58fD6A",
  "key42": "5qp1dsyZ4kfAZgoRUietTeYjJMEFLW1HaDa1eoc8U35EBtRbxh4sXjsdnnsBZoeVXLQaBpfJFfsXe2cA3KMwA59a",
  "key43": "3mqMv5nx8nFU24e7gwoS1pj3bM8BFiYBC7Ks1jQTHhKBnFUP8st8i4iBCFh2QQ4VHWK6nPfJWuJGF7acGUvboYtJ",
  "key44": "2PxPFVpUFreTuSpyhPf3JPXr32xPLQirrgNGQqgDMQzBpZkzMXGnQ88jhATLbjwY3TcBH1t8P5veiE3eVxDR4cgS",
  "key45": "Yad7QZMQVwizDao6sDHPX2WCANAcvfCdnN4k1cMLZ5DUk1E7btSwXqqArJfG89vsJVZ45biv99D89uknSAfrM7n",
  "key46": "4FBL5ccRGf1owM6zWhiWaVCRNkzgx3KEekjRbm8P13hUiGomFZkVUQ7WTyHGEF1UHf1NM8NzPU3an15CDKYpc4Ac",
  "key47": "3icmRQADz6gRTv7Rw9Xpcv1jHB1tyFUQq57nq8opN8bcSYPG4zbfTSqstoP6t5Df6dACqioEsyKR6KtLPT2MA9iK",
  "key48": "2d4Tf59JuLN5szWsScuAqSgTwL7fnFQYtdJ5ExrvdnudpH2qhGc7rwqFcPVNBQavwoNmKQvLc6cHZgEsdyHaeXcB",
  "key49": "5LjzXeJ53DxjaWHZ93RecrQGQATc3NUEVKdv8RxigTFrfuTkBXjjfzKL5iXSyaZidnsirDxfFeZtYPZPtcrbsrXv"
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
