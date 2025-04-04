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
    "5JwKCghgmCb4R1Mt4oymiDwqW2kkbhR2rNE3RA1g1f6VLNEM9Zgzm9pcfHGTAwhvLnaLBkA26b6xib4sNDg7qgLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36odKzGsnkzjKnHuCgntupwRhLDvKcN5UY6Av2C7nB4EuSkGcpnAkfu3AYyFT9uuaCbBu2ij2fRCDBWAuPddku4i",
  "key1": "2D1iHgpD7bs1dwqeTZcHFRyquUaNxWRYpxw7ob9Nm4U55qTkMR9pQxHPPza4CqHqMRpLMhfw8VurkJEEPRLxvZoA",
  "key2": "XtxzfVJwwUyriSWXhWJBGvk2tPnDtuu9VHmA5cadQdBLr7XLHE3nTLUyvEnRt3oSep2pYHhYfUfrPpvxFe3Gf6X",
  "key3": "5U5W1iQ3wSYtXEiXFmN3zvuB3NHUSFDq1yAKBHVYuARbaY9gATXFPSaLb38SWRkFSWqDCXNn1YjPWDvCLzg7eEsv",
  "key4": "3KJxVFNHmcn8vJSgC9mNc4ALpPMbUwxLifamRebAK3N1aLcmrrLx7mddcz1S1CoM5b3X9SVhLiFiBHZMVph26g4V",
  "key5": "FnoN48npzYVNMH4AnKgRUv9e6HphtwwzjKkPM4wfrdiLpu3ZYkzrQE7x32opWP9PzFtHT4bFmUaPVtY8Lz4Lh92",
  "key6": "5GX8EBqRbudPLVKF9sQmJChpUo3TDzqJdiWmB5yEoU65Sw3oqJ6KY5cSAQ4GFqfTbKJmAcZkh6Qto5x45iBbTMrh",
  "key7": "5Hyj73YXeSY6bdKLi82ncyjWmwcuhDupHhycdeMyDrYvBhtoySnQWiPNSgN6w65rjtMS3Qqahacthgk4AhF158pH",
  "key8": "4dtsp6gCzWxipTrV7rMaLuC93BQVeSToToPUx5KsrzQNkv8Q6bDbQ8HqLMLXiWdXdbA6o6UrvvAzutQK3nCLpJ2n",
  "key9": "5QAxzkaQbTo7jnrYZww9vs1AA45Ur9PUKRo5ZvCEGqdwCV3nNSCk65qEq4ypcGe8hEiuMz5eaYDQQRsNz3A5LgUv",
  "key10": "aT8iN6ma7a84XEQq6h6ZmBTUEcbpz7mH8efxuw9mjFTtD9v6AWNmUZ6XZ9pN4BcjCed2BukedkGdptvcqscMLDK",
  "key11": "F1gSnZsQDJVpcruTznYbxveE5HJfCc6erpJ4sLf8wjwpJZD7GzgmZgjQSyWQEzM89kP8xWQCVqxXG2hPZ4NKZtV",
  "key12": "4cMXci3QScFTiXVeP2P4paxfZB24YqrLsiQTFcmWhoTMie8bSJx3BxrhdkmKsPTmguFEnCk1r2WTgDvVmNu7onag",
  "key13": "2GqEurWUnBtDcV5go2XaPEv9rqRPRU7y1wNtxvC7TudUZgWAJ1qGreMF9MAFGdXsbQTALF45iJQDZNVz7b2apUA2",
  "key14": "29xFcKhjLerKfoNDdQYdhokp1Xxysp5fo4UwEoQthZEM2PVaSa83mv75dk4FTX1h3PErDgKn9A5vtQHxD9Jj98ts",
  "key15": "21sVPwRmzCS2hKsCFzriq5iJkHXwGrg67d9QbtMiu4dk6KcxT33WPBBhgBmNQkhQujG4cS5V9Pe3BhzvhfJFQZwv",
  "key16": "4RZv4aKiPZR8NvNifZz9Q6nAVW7dtWHAR3EfH1eVFEytjYDPkEq2a7UeawXnpZ9kygXMfDDnYf2H971v6XpULqaq",
  "key17": "pgcn7BQmCZ6ZQc6tzWmXQzVEM3bYsxEdckLzVLb42s6qv89fUvFFfwJjX9c3MrDq8o61XfQ63qZq9Nm3q9kuS9B",
  "key18": "3epDD6xusMCAqsENnNwhxBzKyNEmjhxxHiveakg5b9S3rG2hiLErergwkHQDnuUuyQzyV15XBpETpBuTfPU79Qrz",
  "key19": "4XrUCS5BxrYNwiKNUqGtX4aEyEeKe4wcisqZmeFuDZVQc9asQ7Au9fj7LDJdmsbCfBpJttz7GEz8eMVnPxn9XaKo",
  "key20": "5GLMmj9hr1b7t8Av5Y9V3yLLEghReVxV8cK27AtX8s4eJBv24LbnJRGRR9pqyRiH5vT8cNR5GDPgwgJwXtiHv1PA",
  "key21": "3ijpkvtP58BmAfsLwrFp5hFaLEbFmtm8xGsM16NccURbFt4c8FPQtmd4jJhmCpMmHYr7RXPGQpu3p1J1qV7enC1v",
  "key22": "pG6PtMoHTkst11ewAVBa28hCKczrhssRqgQej59mxmFqwqDBC7AVZG5ebgPTogcjSDN4VVs2EPhY735EHxghgBc",
  "key23": "5P7UhWJA2ndGsUoDCXTdSJTj4JXupZMJp4ygkzDEvEH4pgWyJ4govBo8xkgN7J4bjrsNugSmT3jPjvPvisHhTJxh",
  "key24": "2Z6m9hWYq4q5KrrjJxN3khk7GL7dG5iMv44YjwzYXvcHqgeX3MghHBfHp87vyRKqt5RRS1tseiRU5PBJJoAb5TgV",
  "key25": "TqAKtVAvRUVHJLc3QRdDRWm5wF5PcgSsHHmnYCi7hjHnxaUrkYHpRzYWufF41myrx8MFJKsF4EUkEyAf2X3GYhF",
  "key26": "5ER27kcfbkjrcbwUJr3BcizU1k4g4voZML1R9tnnRZfzHLMuHqLBwzTb92dwskALErDDDuTBNAezU5TWZsEJsoMR",
  "key27": "4cFcyUufxnmyrqvReoq8Rva6eRgXUi1nB4PozfhDYUgb9dt75YohUUUGvA9vfJLVgJDJsnji6YuBf1rcXdY6Uvfv",
  "key28": "gvGK64KRLG4s9NwfHh8SAqEYeLaSKax7bv7EShcz6F8bTLjPUNbiT9yViK3vsGZzxiuFYZnvYPGmexq2KVn7fdA",
  "key29": "5hhidHC43hZwxRyyfhwmKiUNS5vZjHGNgYdbuLekidDVJEwqVQDqRkzrHACHoPPkazk26aH6mcXAWJUgUZoxEcnY",
  "key30": "4Ld7QLkcaNXTa1eN1MTafdF9TDjdrPgSWkjy67QGF5kJJGutE8rtaHopmf6dun7num5Z1iygCmMutPho1ZbqNN3M",
  "key31": "4ifrayJN2dX9DHnxcS2gd2N8wn2rURfcvFYj3HAtmnMARJuLMoSDZA5cDf1548b1suMX2hiEJbsFisQN3B2RMGnE",
  "key32": "3tKiRXwSjWeDvArVQxXqVi1izsCwV9DMFUJFqh2e5k8Yp9qnJQVpm61nyWAMxASVuBq2p5oR4RqnrPnF7tdseKAp",
  "key33": "3rFQ9XkVeLUn6dJeZfL6r7tgEENPHRqCC5Ro5FD3VTrnEe2sk2qUiTNGd4pQv79J89NV2DZSD8EBLSNrt9E29QFW",
  "key34": "54ugbkNqcDxTbgJRYfddKBkC5JTr1rBE4tHuuL6GJKY1m5KuPMD9LQa2vfHrPwrTg9ZEG2tK6yaYRhqEmVK4DGhb",
  "key35": "4UqhwcvF2gfCXtsY2kH2b7RgJwfmHR5WiQfzBNwi7gGrZm8Hw4Dyxin9ptsWPvkt5oYQcmyZMTEsFhzv1w1YmHac",
  "key36": "mJpvp8Ns5U5Z1aDbJ1vNfTupEe9SeRenstNBeEwx8qhesTJuTa2qozV7bK5SNTk8Q6qUYt5ziiHyFrrxKJR7uY5",
  "key37": "2NR2f4ZxHKWnZQw87GGgYeHVmzBV4FwZXgjciZQic6pn91pZ9srwDWSqCjXjVWtT4b1LDTmjNYbU8AyhHYiUBUKo",
  "key38": "3XB4ri1sBTAZsLNebGJzS3YQcKncMe9NwJnFP5SHn3s4G9VcEjsCf6rkK56RasyzqiaV59bUByBqsu4vRxXFVdNf",
  "key39": "3fjeRbqeAzpuAzg9GP3uZheRdabnGectUWsjfG36h1Z1pD3hzHVrXciMuTyvPfHQQRvtv6vnKBtYXk53qUFLeeTL",
  "key40": "Bhx2mCFTv1Pyk7rV2RFs7jN3byRkndqz2VGNY8xjt6wLTScDuV3CnshA72TD9wLZeETVFnwRPtb6jr9kMcqooTz",
  "key41": "5m41oZ5jdQFLzec4GTd5dxYTT96LAEtqrAskUiSaJgKX5xq49rCAKwvgGsqwjStsM1UwX8vNgQpwMozgjPRTLFmD",
  "key42": "gbTYmzjdU2zvAAGPPzL67mW3DckPiSgu6xunjNTRCsaFDmSBMh4gxr9tPJGWC1iCCsVV8dVT6vmUwTkBaBpr4e4",
  "key43": "5eWKx2kqs6AYwUkuYv9yKmhGUmhXxqm2xkZJBgEBRXRyLcc4cEUYRALphqZoBNGs6XA6D8WWZHtCSUmEHvY8bvKT",
  "key44": "5smVsScwVAMEK3SLiK3fEJmXmK9S9AkoDPcH9jcMexHakW7B3VyevpuQie8zrgUwaLtqVnVtzBCTq9F5Njgmpn5C",
  "key45": "5yJYVRQsdP4JiYfXcBqW9SXW7vrP28ge4zT4BfcZ1Wgz1XZKys2sWcEBGrys8GqvPnBAAQNc6wmbWbjHVRtB9t2r",
  "key46": "4pvokh7MbWKEVwdG1ZfGtwUsuEyyejmUgaabzHtyGpfYcq958T5SGnCBbKn8mcQZwdg76DDMYg7zi77oFynzexjG"
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
