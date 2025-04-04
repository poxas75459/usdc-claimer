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
    "48GZScAkeyKfFuPJramhMyfE2L8bNtAv8aBJqFT9CSGd4t2xVmrZ97CGv9HrNN5Zy4nBv9hJaT1DCsfqArLuPfbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyR4CGqScxYCzqbDF5yte5gjFetyK6MZyEfnf5yVMxWsTVVR9z9bCddyssg4865aY4g6quDfqxyUzAsxTAS9nbC",
  "key1": "3NRKG3yHfUNFvcbAtEJPHkXkMY17jamZ3dqryGkan88toQFJnAu4CyWLbMKgsXL7Z8eETHJiXqVDB3rGeLiLRVb6",
  "key2": "4C6pomqzai9QJhkigvxLA2eAXoKNq7yd8sF1pRnaUeUxGEA2akmYHz3NG9nqk5acjszQcUoqFtqjpg9kSAVdKsTt",
  "key3": "2pPyvAF7hmyieVK9xYPFgxR9JU9e1LrLksxTq67MtAEERhoP8zF99NRH8wNDUhpkyUEdtTEH9HQbM82KjN4sHSuD",
  "key4": "3bcisjDzykw3rFwAkoqpqUEqbFeywXZxYv5X5bHmME1YgGSgbQMys1JMRH7cEw4nLSRCbZWEyfRdUg46YkQPsfoo",
  "key5": "2zfVMo3LxEe4izN9x82pAf5fPKu3DH8HNv4DbUjfUuUt8x4WfmM9A6K2EVmuebd3srhafSYAFBz1q38uUXxHxMBJ",
  "key6": "57k4GC5avveifvTZv74EMqgTPg2YUio8qqxLqoRaLLSGGSCcj2j7ZtVEEYDBhkdKyU5CkJYLanAi2BNfpQvbfarF",
  "key7": "2LTtqkbNGhBuwacbrsssiU3au75vnBFk9APifENVW5Zqi9qGcu2zvmZF1sevSTTU3GkVMW2pty12HtH4A2qmPxtq",
  "key8": "3hfkmMA97WmrDNpLUReLsUkbcSv4iCTZpimrN4HRwR1dCtcJ918poBuNj9iM5D553psi2QWd3FMd4yvWQbaGk5bA",
  "key9": "2tA82ysVYVWnXiTQ9RePFXaTSRqLYXn5UiZBQdak5wtcuNfMSNNbsYbUuTQRBFWkGSgwY4WHqR1TTXZnXxqwmJHB",
  "key10": "D5Kmnmedvr8qYR2zFbHTb5SDi8AqAg4FhbWQUeujCPdTgrMKyywY3aBfnJD25yfSRq2DfebsskBR1bk3dpCRqdV",
  "key11": "2HHYndhZ8W8GJuPGb9zCD7BeSKVcQinoHhTcHAihWSdHPDKrTarG1Y964hKnnRczonQKBjoUpCnGGhYixFvXH88U",
  "key12": "64PfmpRbi8z1ZfAYxph5nYUNKmnQUg7gpsbY24uCs3BVfAMYADZnGXzNvaWe7M9xhKM6kkHZKT2E9X4A4aPhk6A6",
  "key13": "5A9LjhynPiG4roHeoguLPs93BGWLT5kz1YQ3PuP7s85MswHwhdgsj1usgY48Ei5MCGwyRsDCZzAgXXMk7pvwuHoJ",
  "key14": "5X6YAPf8WN3NLSJ7q73kY9Aa5zZnk7RTqqwzcd4NhyU3PnG4Fde7S4THCzHECvKSa4Roh9gMQJzzNmUuxYDVZt7c",
  "key15": "29SUDSZno9Dt5fJDj9U4NpjmgquNaziggcegKxViSRwwnmcMZJY4WXxBnLLn8uTDGRVwD34R1WUGQic9PKCBd37Q",
  "key16": "5ctvmi2YrQM55rfJe7VV7pwXHDKzJs9wWeKFnCpBwmGcYcZrxpYni2MD6wKCHN1NDpxLCXDDmd64sGBAf1Rs8wcj",
  "key17": "2bhryWAEiDRmNzBwjKo1KiCTKY5V6ts8366EgzpXS2xV8kq8QY1Li1kpLFa1ztJL2mE5dCP5F4E27s2WSnVHXmnJ",
  "key18": "AW9iqrdG8JFzad1m1im88VqtSYFrNUFQjqWWynoy6TPfXUcyPZfb92tYy5gcC1ANRcE3xc9ccoLpSjSoixdTHKA",
  "key19": "4Ldgb5aK8eKbEK8GYf6xUbBJFj2ra1CvHdUrXkDbBjbSo1MPJma5i5kuJkGVNRS4ZYJbreHy1fqjmJyUcSzTiYnu",
  "key20": "3qb9FxKyoPL5skhZaQc5abeAnMQhNLHMuEZrPt4f8wPBtDs2Barm81hyR2o7Cgs7BW2hiESg52wSPDWuAjrNsvFp",
  "key21": "V3UFUiEXuTYPkf6TUYqsXiDuE6zNXxFwiCwcdWFSuNmy98vz1TiEyQR6sRogHrFefzzq4Z3r9AZnQcuKLoJVkTx",
  "key22": "396SkMa6eLGYJbRCayi2iBAUH4HPUrAVnq116TVnzuWMDjT4uV4iUiZTdgJNaKRV9x4Cqky23t7PcoaxNm7SS3g6",
  "key23": "4qmV5A7JkWSkFTat1uruj657rTVGLSyfePo3cJdLqjs1sSnyPzXgThp3XCy3cEVcc9ZS8QjXGczFB3CRRxK2M7kh",
  "key24": "5gaB5Zd4snTqEnDjKDfsnkkGWn2xPaL137aoACzzfB1pgvgxbje6PQeT91E7gT6AvctNmaS1fekom9RqbNEzNuTS",
  "key25": "3qZdZG8a9aq5N1hoLTVkWirLCg9ugjQsHfKKqktwHtWEv8u51S3XXy7BJNgYZpTYeaQNAhy6wTLU1ej2tef9cBt5",
  "key26": "45WbXCYHr2LjGJAqpjj7TjhmQBxWwEEMR4ihhqWvx1tyYtxBq2aoUP8zrnB7Mefw78e6inJ9MeCs6ERZ4ktaZVMt"
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
