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
    "44MP5VGiZ91TzuFGpkLMJfSAnxXj9TRphumxUFxSyyRRJBQS1gepT6fGXpmoK463NajL1PGdy7roiqSfBJmRjdpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sWxvjXgNpkZ2mEFBm5Y8AhKy24UG6uk2wchz81dqeSekZjD46Gw9PvaDCLjyHxn4BJEiqZaNje9Ys1c9p8c1zze",
  "key1": "4w1gSjbSbtVudguyxZWboAj1qsp455epsjkrKeH2XYYxEjoQnQQgdPSyyxpy1CvPLsYceGrCgaqXcBqw13QbbHcC",
  "key2": "31Z8njYF2GswPLeHwGbiG1yGaMsh66VRqYwPF31jygaqinh5BVM86sLDfB5vC8LmZncMPgEAw3jFHhXwageG2rtN",
  "key3": "5DYMYPPvZAUNxtkNmjQWEFqjPqMXGn7Zjk45KH7CfYRMf8ZN7zm7JGCWfizyDC9jDk38Z8TQd8DdA2MfUJAbXYfc",
  "key4": "4jZNoMpCiQ4umoE7thpPeomaAHakZ6vFb9wDD3FHmuboiFDWmGVXYkeDfUoBod22MakZcNGaAJynqBzsCwpF7pET",
  "key5": "61HXuYDDPN69vu572SM9piB3EK63TrYWNnwLvtVk1rUUCQaxXeb4Sz6Koug59J4j8tUhsrjrnJAkbtowNEp9bQwD",
  "key6": "3pXuZCMZLPd3xmNkhu1SoBmbHep26MN295bF3Y2gWBdnvnFK3dTxYtAFid2b5Ja7p6DmrAR1AFEGbYj6KTEzqkZ3",
  "key7": "5J7FjFkfmjdQLC5p2e9ZXd7Kc9NCHk2bdGTpCvtVfsxpxHry1GkEpuDaaqiyDcM6LjxU2vhZHHupSmYPDR8uH3gZ",
  "key8": "3a7UbV1KiHe9UpTPqgs5r3QjVZUUbhQWk3xvTakyTUXBHPRLQkQ1KCfMuuLYRncgYBGagMUvQP6qsNJLtToxxzi3",
  "key9": "cfu8uzrA5mLRucLys1YzZEbCGqD1bdn3wD3oMi9p8sZF9S19wCJQDUQqVmH878XmeYkXvM9JYxBi22B5FZZPTZ6",
  "key10": "4ZXzUyeC4TSVtLP3QdDVntPmSSU81CgRyz13teEN65F4HwA41FBvPP6FsBWWtpNotUwm4xhoChzD5fqTEgbDriE5",
  "key11": "2tswKiz1kXMi1g6m3FoAAthhg7j8cHSDhAjUvsrfL1oBJtHn8y3S2q2ZFwND7y3BfzZSn6keqQXJfK5bPX1BdPAN",
  "key12": "67UgRkWcHgEkCgdkuxcKad5Z63MSnLRBokxXfHpB2bKHTETiTMBaS5LUgR3GF2bzd388uYCJDbM3U5tdzikRio3v",
  "key13": "2AEQbg7MfUxyS1DPapWwndVDjCNqVwVQEvyrwf2f84KAjP8dhTJR7ipf9LYpXs5kNGmBzswm8LzRdR3mNG2z1PyC",
  "key14": "52iu5T64rpUtLgwd6xbNi5v92VN8WBhpSrHNxgwt5zpE3PCGHs5E2FMuUam5CPJPvkGLGbXzZZED8RfQ9iPLCK7a",
  "key15": "159DXofgaYNYh2brvFNY84AECc7vYDnJ4QkbFH6YQmkbU6is24tZH3JCUqzQ5b7hRaAayLYikYCpsD6M6J9ioJ3",
  "key16": "21cQ8bM4maVpn4gU8cNVJg9f8X7GRxj2aA5SMvRNefHGGayScpSWG29zhaYuxDJATRn1NjbyKBTraJoB8bdWmFrm",
  "key17": "5R9yorvfdpNYFZbBmTBkdVwvL93TaFnx6J7CPV1tcAXyEq3vkxpL9yUke7WTKxdLoVWYwjUqzTcBtGrHnteHj7ju",
  "key18": "4rDW4iWxkPsA1RfzSzDTY8wpM6EVf22b5wEpVMRMFNj4n8nJVVfV33brqyRFvAWw8PcrDfagBUgjhPPt5WsWDKDd",
  "key19": "3w7nb1PWQ3FNvfZTSo7mCKy42aHFybp7Gy36VxAVoVH7TiJD3MxiunPsnjG45arfkziHTZZkJV3ParpGnyeGABiE",
  "key20": "4hmHKa1j5xGUAYVXHr5t43HbapVw1TkWmxKzZ4UpdJP6grSN433qRnrDHW8G8Yn92XvZ6HMpgjWEdTBM7DW4ZaEQ",
  "key21": "tWescNi1stAkh8kmfx3GYZTjcddcXRAHDEV5mKcGmy1H6uL971jWd518EjoyNZo8oPqAgqyiDrW6fd7C27kcPEF",
  "key22": "4hHU6rc36xDbrJSo3on97ebJXZHCovLmou2EQyU5xyHhQ7CKPcgSL1KtnMrM7zs3pXwcajSyqnGRGZvdQHqLoKg7",
  "key23": "3BwxqAByQXHvpWzMZ6zUAv8YUewosXE8VDE14u4pBaRQ8ew8oRo1Vp8C7ir5bRvTxWx2GV9VTSfSiMhxinArkJFE",
  "key24": "5tgxm5NDgL9FhvaZnSSJcp7qBYQ6BG1FSyX7WQfwV1LCrmCkHjUDesjeVHLdk4NSiCHy5bpdGN6WSfYgZUx5e4y2",
  "key25": "5cuap6L3sjZKtmGrRDezh95BzbHZUXwsxxorFuxwuC8vPrYgomJRGTmg4h74SwsdpovKWSZjH8ZGCQnWZGXQSh4a",
  "key26": "1sSK8HDeCrhPuqJgjYwuzkRANpsg7qiYBfYgvH2Dp6NbaWmDXUngLMnhzfGV1NdX8W3tLfNxKZmnp5uLpnmGn1y",
  "key27": "66TAmKDe3po8NoEsNDzihinYWrxjVGKXv5DuDyD1dqVXwm8evBeidRnPaYYn8TTnYA4yusif2we7vQn6ijgSLeuj",
  "key28": "3HfY91DFHhSiRwRaVyzxwTB92UbBjxqcU3JYhhsDHCo9XxX8NPtD5ZdtKJgMHG1BrjWJE32EC39NtYj8bf4LBMtL",
  "key29": "3YuD5R7neG9jRtnvL6T1WH8xdUeie5bieSEQ9vewy7S7XuppfZa33gM5jtBSQqEkoanbohU1DWJY6ZD3RLCJTaCg",
  "key30": "VTQDzK7TkxdVSiYbomXHYdUStrLBBCz82QsRSA89BuQgsBBHCkJ4fcwmR9wBuw4UcpimjreDYuQ1HACUbibRXwZ",
  "key31": "2dmJYXFwGTmECamvk3RTzNGPxDzBEF9AYm2Gah9sx1meEzQMPoko5xe9J8ZavoveEXGWPB9eJk34jJZxUzbox87R",
  "key32": "5vji4gGuoZoG7jkpXfmh1yJLZMRzkXBQE19oVmqesQfrsEvBnJJ6qbw1ifQyF379yRvdnvjsS9xWhWuKrSagVKC9",
  "key33": "UYeLsNyg1eiacN8p78EahJL33KA6YfXeVAGHbo1Y6nyjrRKmwrDi1UgsAWRt1NW2mV4ffxbJ9sVN7nh9hEj3s6r"
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
