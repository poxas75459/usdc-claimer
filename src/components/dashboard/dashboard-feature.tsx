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
    "3QUMZChaatzr82jwgoGCmVUwmsr3L2udmzPnrLwNNWrKweTE9mzbomwvA7XGvK8NbrbABMhYm42znTHJiQTV7kWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVNEKc3g2yV4ZCZQjDLRepep2eCYrJk89VzTodoyoeb12WFwjvxHpU24uWLcUuDAyvPW9KLAwNnskAnqzWPouYp",
  "key1": "2r9A6TT5ttB2fVbdjQLRk5iNXGDyi2kw7zeN2eH5emN6u93inyA8d6JezZRjwCHqR6L6a3wwukCwSyiJgezznpmC",
  "key2": "XEzQRMWS1a5VBhoFrth7MNrLSPPdGmg6vNPKZTvSHhqFcPRgQzKQVvdsGvYcEv3aniVM2SkWdxQkWhj84EahDxL",
  "key3": "JgJGG95Nof3aJiKNzvYbgvKJKne33DyzRSQgs78wgQZ6YvgBCPssuKJq5e6moDbg4RrRT15dcQHsMiRkJHx1RSQ",
  "key4": "4yd4Nu8xD1PY35TERKbdS96u4wmoTerQxtygTKZsuoXMG4KqJAQqd1g5BwWAgCznMsacSU58cYom6bykYXZUvzcH",
  "key5": "5Pfmdg5sKDEUMTkTfjFDtAjCWPrEjNzLSjqSQxKWL4fbvRSyRmxqoPbPMpT5xyWbxocc4gZeVNbuxzPYfYNjoF9h",
  "key6": "4cT6gRbsdh26aGUuMbZZuVnKEYqYYVmPEAfvHNb97BgPN1HvDyk4rTpVjqXUEmf1NrjzemxTq7aSVSXPgTbZ8fRX",
  "key7": "3aaPibStaF7Zfu3oJJ3fvNhorUNW1NoteRCQ7mSYknmom4BqfPmmYbGJ2V8FHWLoZW5LC2gbPq5wk4ccQaJ5CwL",
  "key8": "G5LvKwXZEL14dLM4fHpNbJBH7CMg6k2xhrM53n4h1Xx9cCh8nxXBdkvFRuBx2U5p83Nes4J7ActkPTokA5J2RC4",
  "key9": "JvRtAqpRTqkTa9uq5LED8sKk3svhHF6n4Wn28W9Dk8Xa5mJeiVhPPde55MF6QPSkv7wSsFZNZVF2pxcG3ceu31c",
  "key10": "5FrZzDdCWuS9U9SnCEbC436nZw6yHG14WV49NXqnq1MbNqSSnmycbrx7Yz71MnZzKqKWWgxDxsy5eCvdhw4sZE2x",
  "key11": "2tzDXgK6WATKLVKdhHo93AsUVkGx9cZe1QXtDJUnKmaUa7UzAatQwb32GQarYnEQXWQNTgEGuW1dvWu7C2XVGYbv",
  "key12": "z3k2ZXJVynjfJwdddm8oUi1esftX63f2WuRAMgjnDQgtSvAXzVxHt17oH5HZayQ7ahPeSNxFgfY45Zm1yH6QHTy",
  "key13": "2TFFahGMYm71y8SfbbeYzK1znsdujDEkZ3JYbgv2hK2WNTZUgnhMzeRVEt46ZrV6vNfg1qeuGi3yFM6JQChXBQBH",
  "key14": "2cPSzVDfB1S59fZn3YAks1xdzy4UrmEDFUFNQatxw1aGcyfTRyJDWLzcNMzg97EARm4j6eWgBebbdZ9vWnimvAX8",
  "key15": "4jq2ALdUfFJWHcu8WnanA1vWkWv7ycQd5yL31EFBkCDMwnmYNrFGxfSr8yg4m8ByWVetLmVExw9RD4HuPWGbuFY",
  "key16": "4pTrLnFYS8uv4t1SxDCLgNUHoH2NDGTmubCqNkdebkThGn2bEtxKe1x8VdbUs8Ra1dSkeNMAQf2CYRWUdYNwDYuS",
  "key17": "533vTXd6Zjd5SHGbWeBixockPr3zVNBLs7tHcLGHRk7pSKKVQnGp6MhajQpcQK4pjvzUfxL3Va37XVsxm2Y5zr1X",
  "key18": "5ckpHK3no7fEdHGgLjQLBiG6e4pjmAUh8V7enUHjufWjk9XJUq5vtrP4mvqUy1rRSWHCiPakGQnv2BgYHjVP3ZQv",
  "key19": "3kMjtqYh31jykSYBfmQCwHAnPyx3frb8zfDjxpTM67LX89duDDjug8abkoXXJqA9JW46axdXHJeeBSSaHPXQcGu6",
  "key20": "5r3Z2NLimDeQvNoBAQkwgErKVYL4wMoLBaBU2qUM1U4e3nT6fpFSyPFPvnPfmkPpJkoktbLgRZk6HKocqDfunM8o",
  "key21": "33BuDovezXzpaGWtMkXT1j34tu3BuXbtRdM2wKB7vTiPjpwwA1zho6tM7mMHMJvp6FBJkFXkjTDE1Y3ujGPRJG6p",
  "key22": "1s7QUaJHdpBV41dKasfRiaEHni8Daev7qgR6AWAn2gwcp7iQTG5jPQVLePzt1nNGLfbEcqZQLErx312Gg9TSgLn",
  "key23": "2imLaxRVjYcA78sayAHKdSs5tyGfeLZTi2PecrscerNuYnt7vbWho2GEAPACCUqKXwnUzxdJg1JCssPYufhd5vGN",
  "key24": "3NuTvDDh1p3HA88S4uNcJiLFdojtv5GiaoaSprpoG9Kw6A6APJ3BshM2rNR6NLG9ZGcC1hPC8PQWJ4Fe5iaZk1Mi",
  "key25": "T8EBQuf3m5JTxJrUWfwETYwXThF7CKmV7bfP497znYS8CHyyojHUUZzUba5MKZZdYkTw133thpcdt9Z9vScH4xM",
  "key26": "2w9rv7UTPAdiqR3PMaedKDXNX1KKZsJ9PcH7nSAdFPWHSA1N5tYSBaez8zazmAzAiywZ9Riu2Qn1u1SurwScqu3V",
  "key27": "5oc6J5n5zrwAffPLcdeZfzJAjXatbxVBXcCvVoJ4TqYYWHpByBnwA7AAsCshPQJtA9v4TwYm9VtbzG8M6otUKcWo",
  "key28": "t92ZWJFDHeLNrHwZzTm6Ra73ifRZeCcMCAUGHL4e59ex36e6odsUDrhcYAPsBt9jm4bWmdpFjnZjE6CQQNjPw4v",
  "key29": "2LUCydG9g3WJwXZdfgA6HeGGNGw3Nq1mNBqzeXDz42KxeSk2KgT6NA46yZ9cZvzFqPoA441ocX3ktWeUMo8GUEXT",
  "key30": "53NqV4fiSNTZDSZPTyhJt6TjMGNYHy7gHLt8bmRfpcgy7UpnxZW47Xrdhj5uBAZQrsYFUpMZ2fveUwseoJv3M5ZS",
  "key31": "3vwTvdtEK47LkqVuidt1vHsU8sHW2qkF3nML9eigsSrKtCu195CR6qcrw4eJ7ZqaPCp8EdJtyFECCjo9KJFEkmP7",
  "key32": "2mbgEXwmiKaNNFxqf6tUfbVKrGnpv8XtypauDWAhj68AYmnGD3LwdS3sP9Ge96dBNEdpJN4cRhBbn28zAqSeAMHC",
  "key33": "Nefq613jxeH9BN8S5XqQPWhCRCz258tub88uuhH7H8fuD4BcqdbVD6DGkh3sWHritmpjvAecdzDV3E9LWgqQcfC",
  "key34": "2YbfdCuDTPsB45QRn51GjtBTfB7X6mNz3zwD5V3pTPVSBmVws9E4Aep9odPC9r8HakxpZ26u7dJP2cYpdZqVZ919",
  "key35": "4yg9ET3SRXovAZ4JNrFe8xQz2KkvZVX5FMs15ogNrxDV2dNKHToVArsEKJpDnzB8jKNZxfZxQpcyvnUomFik294w",
  "key36": "iqwBidDm7HyocfsGfZrPm92ZGtxFwwUqHakCCyMeS2cv7xz2bSzbyptaCSY48qM9T9i88wpkFJcJJa8ET9p4JN8",
  "key37": "51ML6iPDMncHv4A2haXgmYx7Konf6rorrQQYW9Z9WRazKbLaSjVDmhBe2wfRxtbfh5Kyg3BuVHUWoHywGt4PaKAL",
  "key38": "3WjQnXZzGHdYEqfZaCqE2wzcj5J4x1gaG9wA24BsWAR3Ry7bigtAGoY4mgc8oV83EMYhbHT6g7dM7BQcAiAcTSni",
  "key39": "2JemoaxtAySHJgicqfYsHi9ecDAoJ1sVojSEQkXDX8kHKrjLrnahY3aKLXPD6PAErYf1o3mHaFkuvAsrVZ3bpaG6",
  "key40": "36t7LmDjVfjqeghnWqmZueCh9wXMLH9Bo91oWJa8PToGsMKJFLYsGdzsfdHHVFgPHhF34uvJbmSLk3rrbZhCs2VB",
  "key41": "zVmaW6rV37fwhkHCM4DbJ5PzyQB3RPLjRnjWP4Po5u4iNbBUgLAbvKs9KNWrBC4ATYi9mBNkCQpucw6yQPA3fp1"
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
