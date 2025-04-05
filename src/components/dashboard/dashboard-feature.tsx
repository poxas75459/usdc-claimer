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
    "oTqs4P2bZY5FngY3DWbD5WfQeoVjc1Z14mgbAztA923N4BQrnQk3ira23xRdjjq5ycc6kWkmPcPu8za3YMhQt4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zuWdnUYqey7scWU6Sh3SE7xwvJXvdFC6DM5oKuxMwdM8ziDb9xRcrCRURsqipzbQQxXjq4JQ7gHSLGd7ciQqAaq",
  "key1": "6fGdXLzPNp3oYTUaZzwSfMMHezAVhTkrEwMoiWqyTeX6qqav3FFRSFtNCpyaKyC8Aay2rSHamdBtXRR8ejgzgq6",
  "key2": "viAh2FmaBTG8pCsGTGmW1grD8nKwtdVMPzPC5YUeQYmht571JsQZd3ZScnBjDmvLa83rAYmombkp2QQQzmWVEMF",
  "key3": "2qDaAKfCJC8NTH6JWS8DKK6vYjeqimBKGDccKSNBY1rvwmgrW4dznFay2tXvyEeHEzPoTzSzTdy4T3gm4Py67LzD",
  "key4": "5ibvePw922bxiszVQDFGKXYBjYY6ZQwnaWsY3SDCXViBzguZ7kHpN77WJFY9yprvz1Gf3GrSCcLqhFWiDtEEQVAp",
  "key5": "5sBpw5MGRbhp6VXyc1HoQN6QgQBzpThX7PQDz45sRK84cTi4m6UvAN2qQNxfpWWeNMsB34bzwUENUSXTvGZDhiyb",
  "key6": "2HtGQSvkPSi6zTGLMAKinSpZoXZWP1erzqVMzcsyEh9M73YYVRhpiJCrt2Ly9xFKEmgCeKBu9XzU3tVJDxUjfAft",
  "key7": "2Rm5S8DTqHFQZnJusd2iF6ZD8obxpSviWMKQL5CiWKTmuDLJBtroJGTUmBVoQedZMDvczYsX63XRBKMiYVDy2xuM",
  "key8": "2rTwnuTkp5jLapMG9nkRj5pUJ1oRVopuCoS68M4XEP2vzVo7dHZhCUbbiHcT1ZXECbpDYTbZVtTcJ7g6FEZNPiZs",
  "key9": "cTe5qKYpbB5GjN4cDgqfoXJHs1xLVwtRnk8LPjxSPeYRgUTJFzJLrCrAz1i5j4eapKQz2C3hs84CAVBvzE2Vgrs",
  "key10": "2zknTRnmWHC7e3rYfCHhFVvepRwwvihThawacB5czXrdarJQVrnKmZ8UeUj7LuBU36UZXtyELibpwykHkd4Vrust",
  "key11": "5QGGRvpdoh8kzFyqRk8yx4sNp9icQ4W6b9DqDrB5pHuV59NJaWssnY7EL5PRARsKqWS5MeJQ3afWZo7YNfnAm9KT",
  "key12": "5N4h9mzScK2GeVkwnRzPDTQjzEP6onU4RUndPec4N5yGAjsANiTDnzZa1Ygvd53vwJsUDHxk596XMcXnTAfYtWBr",
  "key13": "5pjNVbhiErjBfyoXLvibgkgmjhYXAbyiiZSiY2JcT3zBnMgEKd2f1c4FmUaYcqWq2TGtM54bECc4HaGbkfQyDh1a",
  "key14": "5p4NxXsRXcD4YUTTWpK2Aj92jtegqA67q9cFVnq2EFz7HdouPJsVgot61UVHqzWuqbzxuTMnPt4izij5WS1tNANe",
  "key15": "YorksWKhbACpYcGbPUrqKVNcYYtY1awZD88mxHh8NemLgBKqDYQP5tKMYN3Tisy5RzGJ9g7p1XTgB7UjQ9T82MV",
  "key16": "4ZxUM1mgrDubwEAaYxhXkMr8SjG1JgQwj5UZYp9aYumCYq2758FdQKG2b7VWxvrp1K5fEwHwCNamPskiLiRUiDDu",
  "key17": "4zqCeJSkJoszcU7Lkb2qZ4rQv6Nqt7ddYxxDzPacB6FM98HtG2mTMyDiZWkrR4ups4K5WrjVa47885oGgiTG6MQ",
  "key18": "5LUaKQ1tsirQdW1nc3X32uwTUsFboJGVwEV4fYLrtcCxrcdBcgHcBErpKNwHoDDaivYR7366ogUFZ7HLnXnUfBoD",
  "key19": "4RyfGgoB3e9Ggkix8sRZ965qbpVNeVUye5YRi4cVyvXdinJhcKqbetznCqknjx95BbbNsqYsLGjKMtCpPxp3qrC8",
  "key20": "MYZZH3mJ3hxEda4SEUzoHtJhtVXKAJXdcn6Cwz1PwHYXCwnXXKU4TrZYmwZumSUm6SuC4sA1psPPMQ5sWPqr1vs",
  "key21": "2MvZZ3yjmqVNFwJqmunh8rHUDkBVzZ1ZCe8KNgGd5QdMSVd4W4STHNt3tpGUBh7s2YwYccCUjGwT76jhi5QvUnzd",
  "key22": "2M8NHGevZKkQbhkYQzx3r8NAQyJBY6Uexdomi7wqje8nN3LFuo7pwCW5LuBD5AYQHWP7d3UodzUV8CHQGXYium3p",
  "key23": "2vQ4ApV3ZJnwYGimEAvo179w3nfqVbyAL18xyRjFfSTvV58omGDRVhBfJYPXCZLDJ18PfLM6qFuHUFWAwYFsDX1y",
  "key24": "2YXfGiqquQkvfdFW9yju1sD43xu3L4x76T9h5M1smhZzcKkWVpygFRNBWLBy5MVe4Xm9KAWMaVzJe86tTrPeSYef",
  "key25": "2rfq1EPLyBsKpdUqzkZA69ggnruY6LBWhXWK7eoLS4U33ZGbN8inj2UfVPRjJpDXyunhxqKojzstV6RLyFecrdzZ",
  "key26": "2Q1Bo811Ho38RhGDHNeZaGSFE3PBRqrLHwM2cdKtwmxaxA2c6zCxmvdxBDEaLYdnZddq1foScaz6X1TDLihbBm7w",
  "key27": "3AehQSFkQJFzZYSmQiX7ngSkHo57MWsrVHjDzYu471xUdXz5KhBGfVmdXFTAeZXhv5sCwPjN6Ht5qbEZeSDJrHKq",
  "key28": "3dWkMmtgUkD3BWGrAtfp3bEyFhzHCfBJ59EvEUW6jLy3Ww2atkVePmbZ8Lsb8yzWEStn3PtMmvhedXJU17spLf19",
  "key29": "5ozGrkdyKnA4J1LNXDDLw8qb1cNMumBm6ia1C5TFJB5tKCCU9baFsPydN7GvZ3JNasFhhaBJTPxKPz6G1SHKfRzy",
  "key30": "yH8rRKPab5xfG9vCZ7KxZLyAWdH3r3Xwh64M6e7WK3Ni3XyKvcsG2K1chDrWkzYWVeVGGDnJ1xPhYrvzBjMVNDw",
  "key31": "5Fj7E4D7a8X2xJzc2Z31WN17qDjgvzPpWFwhWvwPEmSogBkwQVWDNjTDcYPTnNNAjsYZx7UWUQVhmZksEXxuzTaM",
  "key32": "58ZmVZTePdgsRxpbptYZozuMSsrdjtd1Lik5eRuPnX6csJub91rTENFjiEQnCCVDoS7Rf7bzfrEfwwthUfZnMCdA",
  "key33": "2hLvbCk74KxdpcajsJRxsQMrUVd7Vzqjkr1qsAx43mdEztmCGLbC8HMrJVQxi5JDBTYW6LmFEpXQvEyRBJGoCdMQ",
  "key34": "3groFDtfTmHuh6tUwGiorXmKPnjyHJtynSWv5nf9iyrHfhLkp86BQ21QvaZ1sCYo9nBKwXPEFgGTDdpt7Pausss6",
  "key35": "5uHkDcoPSLGG7esrTxEkgwyYhqYsDcMyyccbfCWvbkBGURr1YhfAZ69mNVSjMaK8FhcMRSRZkSpANBxsnD7oNVVM",
  "key36": "3egvE2kzys5yxPNehCS5sWNyZESmBHDGCPxeZqbQwnXvwYyrk3kB7tw6Yyu7hkg2k1yFAn5132iXCNyV6Vi9hzNT",
  "key37": "4BfmxU4zr6ud7DFVYEECQFgopsWHHmADCuu1aVbkTqpcHuJiFSX3USN36K71VgpNGwEoT2yHVtPWQBSiTMy1fmiS"
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
