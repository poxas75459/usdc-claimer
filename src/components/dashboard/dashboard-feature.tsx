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
    "1CdfgvayLLBBpQgaaV4fNVm542Rkd2BTwSqcdLd51U1Br2WFWBsww58UiLFHiYfJK6cowWFBNgr6dw3KbRWEpmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1M8jri174X2BoBjCXsqLQW1PKvca71XrEDvjJQKnuGME9BLZTd4Ym3LozKVZEWqPraJsiLFeVjvZdMg4uvvHqf",
  "key1": "5PVurTAUCGzwbHQwWEMqML9ufwQASQWHNsnptaZhir4d7V5HHiDuDt1Kg5Qr8J9T6q44thxs7BgyVXx8y5v95ZXV",
  "key2": "jvT8uzVd9Bc3st4DHjkpMnYX7D9ep5RdFatzViZhRYXMxdM7okveg8EJMS8F54WgkQ7ZBGbQqwq7doPRqHs3i3T",
  "key3": "2Akt4EkgAR6WzY1mq42mjEZmpW7WUggLcQoZrKProEFbYk7chARPuRQJJFNwmt6v9ER6kNhi4ijf1nMZ2MupTmxa",
  "key4": "4N13HVWG2hgEWjqhY14iY5yqoLRngGxhxGTs7pd5eDSmkFKMraqkY7G2scQ9xyhM82Do4RSuK8PgzzeBJyereuGM",
  "key5": "2DwjBfDSQtSZLqJAx6d5iBTjwWVA12eHs3Vr6huDZawpgYcASDENKGuyx4vhGBA5q1vd1y4au18YatwgCSdUdNxz",
  "key6": "25PFBDntw1VmaeYvdpZKR94r9CkNPFmwfdi1VBgeGEsHVgghT4SqYDQDnw35UTLkRqrLzdgehHfxn3nPpTvwqWju",
  "key7": "55xTEUAKZfgtiVNgtwMyQx8MEF3B1puoY6PhspYwtBt1kq4phqY5qF4Z3wqqMaaJmAo5vZsTgpScnqu2X2pVR8eu",
  "key8": "5hmo8Aj3QEEiNb4GX8dr1JjNecwvAb1HVCPLewmEVMNKHq3UCX745X3q37ocd3wd7amoSXRdDS5BYSvv9y5oVV75",
  "key9": "3toBS1FkBpHdEqPCi1KMDsMfkSmND2L6g563w4X4H8Qse4JRJXCXoYgVDzPWzihNauuLkgJuyhTPe2VmqB2S8A7F",
  "key10": "524LZN8xXpt9h4n3gqatjGNY2YTxBBw8zJVSVx9EpvnMRdt6R8vbtNR2jP1NQGeS5hbYNg5311rMYrKa3cQDFkDk",
  "key11": "5ZKA7pZrcYq5mQ8W4QD81hK8sLNnRvo47bvGKUNhadJZPTty4DVzwS1nNiQ2qj7KCbrm6Znbuf6V1LBvJxu32qEZ",
  "key12": "9MXYxeHcVY2Rhnnn7idW1VZRCLhZAxPSzS8P2TgH8VAewuYFrW1ziD8PY44L9YVWW5VRxUtse42TGoMbNwQectR",
  "key13": "U8iRPczFucLdEadPUzPN7t696XvnfEurr7wxKrweGLMBcpnCSe93FvTJdEqSPHvFwWPPUaZr6PEAk2vvJ2AzEtg",
  "key14": "3G7LmVxzPGpRr3Z4uppxupTx6Hg8NUMCJu8Y1gJzTi4vKgfee89oTULHYQXwWBnBmpdwecYbxUK3rz7CFZXhibcb",
  "key15": "5dT9TEjMngcT4ddreBPfSHzhjgDEDJMe6Mf4Bn7wKz9iikEYh2oKddSk4fmbwP75eMJHgCccPSJmtbQSocGfwa2S",
  "key16": "3GRtBSeaXsh45B2kWBhUor43MasZLLTj1vFkKfA78Qb8tHFNXe6y2iNfGNLTVMAE4pf5BCKC5yhAeQqfPzryx2p8",
  "key17": "2kSFUhu91vMMbgv1Cj14p9KackV7XaDUFBLFe6TJFW9b4VDqBFKeM4QZM5s1c31LRxBPQBWgKrp5UjXct86sBrYA",
  "key18": "4SAajNBDDx4PPdkAbh8YvTqjhMxCFQBtffqnaP96EiRY5rcqPctubjXnoFMwt7RWuJC4FnQzGiWncjRcDFbUzwuK",
  "key19": "5hwjpENGSD6FCZSRidjw89CSEUoPej2FGV3UyvYJNBwFNX74GKzZxjuWPaz4BChu9SoejBXFWN55GdthpvTjUXdb",
  "key20": "3UFMPysXJRG6jubzeSyEcPat7oLqQRG6ATwqJKWyBmhaVs9cozyvDcZrpRgDKKuKaDj3q45s7Ws3ugNggQn9LZCM",
  "key21": "439DYGALcnCvp3jwzr1KHRsFTDtQMCdBHJmZN5kNWHP1A7Xv6uLXUCVKqjnf84wqNke7dR776d6Gaw71Q91UST5C",
  "key22": "51rWUrrsjdrgXYSPg7dcaB6XbdbVMNHHFtq9XEL3yikBLg8v76F45KfbmvGSNK8GXRR5F4Rot2FFkFEbw9sN3T7f",
  "key23": "48s9n5aYrWhh8iBW8dK5bFC98S5kQeikkJ1Yv5YPYbJjV8LNu8HiNstkVZDuvM5EiqkYj18C7CG7RqwePzmFf1bG",
  "key24": "2eudimJQjFq67DYb3LuxLtvT6yDunzGeZvvLX4wsc13UZwsAe75SbtSyW6QPtUZsYuoYskvSGDg1PwgF6UFoz5df",
  "key25": "3SMocBn6eQ1heGp1DPRAaMX4TyZ1Ek99K3C9deRPo8UeEQmRQd3PdfvpUe1w2AKnFnwsCu2EMaVVYufVfxZzvj64",
  "key26": "4FTLWoEFsd7ryvMscxBXRB3nwVWTWZDvb1HtjWveKNRpzoMd9b9Bcn8oXpVbSv22QuW9WD1gF1zbz1Wch4kMp8Ku",
  "key27": "4R2ETana2bK7e2UYmmKaX995iS4ZaKkuAQFZ8owvJ3XaT4S52ycXvFCcNLNcAbYgaowZQrwtsXCpvinfnxKAoLSF",
  "key28": "4QoYyWvbhFJ4a5NTVZLuEoXQXVHNGWYnqaGE6MarRjKqjabx4JmNvWrGuKmSotXHYvKqko6EvcS5s1DqKNCvkzGr",
  "key29": "33PKWqEypxAqj8dz87XHiNR7V3upuC73AJTYQPZVcK3ALquxzUcRnYUePC2fTYRHmcAehbLU9TU4YMjtbYeVUDTE",
  "key30": "5YrhLA5m75SG8ezWyjFLN4TWVixW51vhVRqqQEeTkMuxt4A2hDtwAVwvYK5hJW7R9S2vuofFXLcQL5cRu8CrmqY7",
  "key31": "3XCXxeXttdL3Fa8o2fQzA9tUiGoBiYV55zmyVziYueEsvXTiN64AogYFrYtPJCkWzeQxN4DzDzDYdkDTXexFznTB",
  "key32": "3uzhnADwrRAk3SUkXn5zR15Tn9mwAHMTS4TvFwG9nrKreSjr5Z3s3j8QfN3dvRPfomg1shyi9ennYDExPJAAo7QY",
  "key33": "2G7mBMVYX6xZGT9TsAenwFBLC9WycKKtQnkyNcc8btKW3VP71896kTBHrQZUuGcNks6EW4GYNfN8epagXTLDB6fQ",
  "key34": "3vDiYPQV4ERvoZ4gVKkhAfTu7DYQzYE15hj5gGCdWcm3tqkZBHfkDp2Nsu8RVFSR9k7iLmSn4uvsrbUFFE1yor9m",
  "key35": "p5NKT7q2WVtk8Ays1MUdq4CT5dibhyUZ6pX73xTKteRqocbfhuKyFRfuWwAFmPLNgCSRcWuZC37fnNLBXGTz9F3",
  "key36": "3tckSYvCeQPVcNCJU57gKaFwuQ315ubhHBUwtcTuA9K4soPTvJj5yeK2aZg4cz9f4QHVePkWFzzmYpgA7NJtWyor"
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
