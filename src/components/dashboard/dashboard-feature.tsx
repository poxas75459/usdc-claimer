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
    "3qBgFCjNiirFbsgGtXMVYdAjTxfiiEqn3mXUt89HtCAL49QyGa5b2Pxd9QnYXCFJjKJFd52imH5UoL7HNYxqLJkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1aB2xAu77kzXWCK1LruYs23KPP8CWWDtRyWXji9HpGqDdJfif37vDnJJXNmGoMgqoTWDCVNrqwE55JWE85aa6B",
  "key1": "2JyEJs2ZiDe5Kjj5Qow7zxAjquKfpNf34oMn4sDq86stV5zwLcb2ZT2wpG24Sa3aUA7xqa1zjWVzbqieLeLPCDnz",
  "key2": "3dnut2FLibcTZNsSwnBNaPfvEkDhg9NuFgZGAAMcBQnobsxdThkWic4GmAnbtGyVv6cSHr5DAshbc6mixysDxAou",
  "key3": "b1zkFuAczxUDSHUvZJLV3mcdZdbwcLCSRfKFXzGr16ikKeMDHGZvSrEuy1J4JNEQiBgfdFAf4A8Bk6vd25mb5ZN",
  "key4": "5F47zba9LYyG7gDZJuXd49SEkoXMGDsXFUxonQbH6iqWiqU2ncbwPyA9DkBtNiJaUSt7hYZyQhD1RM4eNQYtQVSz",
  "key5": "3iew1JQD2iJTyPT8weG3HfiTYGnyqDPjfChTDWBR2kN55D4YZiF1CbTFaWU2zxcumYZu8GAvgTEn5iqt7EoN3kLg",
  "key6": "2gyaAcgn8tq32aLbvffnzxYHnb319biQQ39SWmaZ6P9sY7Dcs4JJKdMVsHKXCrpFugvQSxQyFLCmP7secR55go5v",
  "key7": "3pQyH1yXQDgscTHSPXgNqscCriATUCsm3suNnDqjDXfNTp951PmNVrDfHEcPGFX28gQsqDgpaiHVhTFGA6ZwFcoj",
  "key8": "21ZL9kf9TAA6JRXRV42WYef5UdwAzuUQGcSVrZrqoPCMmYhP5TynxgJoJELqBJEwu1FSBKaETpH1Mozq14q2qJaw",
  "key9": "4qVUA5oTMFi4mxwdmvEAZn95rFXd5VkmhE3GmP9QcujyoG5T12fmwLysjJF6BZiSQZimDdMCsDBXxcWxiegBhye9",
  "key10": "2c3RjtYQ38tVWNuMRRQMYrsW1wPtcp5XqWj61JF7dLBQqrxQg17kFHqKCDbDrj6kFodqSHZ81ynWyh6r7Auc4NEk",
  "key11": "4KGJdWgNvKUzV5GJXgt7jAAZx8Mi3D8QUFiHuqLZwRKzfWbGL4Aw7XbrhQW4t58GbzcmiCzFfdG6MKrgXtSkzjpr",
  "key12": "22cnFi6qJEbWzHknUCacU1e3eaQhFMRM96RLa3Wj6mTAd2DnYTcXSxdCzorpJAnH7rgG7ykXFgkzHPSqVWJCvsna",
  "key13": "eYmhXFSJiAfyNX6Sw9h1BNQJCWhtPLQ6MPZmC5cqT1NNf6n7ADNdpvjYdfzqHmxQ9ifehEq9TM9xCioiAuvLevr",
  "key14": "bzBmALzEBfdHNrEELS55Sthy4fSjqK4pqzEViATHZpEZG1u9MUzwc5AUHAyyKzBh3TN92QCbhAN5PHdn7hAcRDe",
  "key15": "5nZWzCqPNbcJBZ7LejR3WcKjjZSjqhcmn8sBWdynas8cPUiViw342LFVSiEMK5jVnAzSd6MevQAXrGHqnHje433A",
  "key16": "48PTKyhxEUV1UMJG66rNQsbf1DZCFdnb5PtbsCrarQDRfNa6GkPAsEm5jwzu1WF8rPQqqP6H5FDoUfQWr8e6Y2aT",
  "key17": "3Biiz6Vtc94joSQSYZjCZEJWFZVGWwbnjFoTjbcnzVwjBkLCoWUkLZiUB7MUmqQTRPAybK6vMgMqBdjyVZrsJGkq",
  "key18": "25AaC79HbkwzWDRh4RHGXYEsUtV7iXgoasMTUY1qfaKWx6xniVoR2LaXVQZDHZPkMuBq3PG5a7gvJBnY9jrfhk9T",
  "key19": "3h8LwtjAVyTgCyoRnYEDKAmQuSdXcStWJTNfMTDobsPFdLN3WjcSCZ92uwvm56jYsbREp1sPKqar8LUEvkL167jT",
  "key20": "gwRTJZwThHU7CuaWqCFXB9F3KQyTkn4BgXoMLPmHBMkybP7Yq42HaxzKTXWcqPq2tt1gnTsc3cBAzmT2jdquTQa",
  "key21": "4SZWFJnSpeuPxXvnxyR5G5anTRWp4vu1Gxk7ZsTxkfeTScryswNnmkTUwdc9hJg5bTkhrYsk4eEwJY2UxDy9YueF",
  "key22": "cBbfbjuw4sQyuNQ9ipzrbUzFD6vPAtcqe2ZefamTtxgH1otSMG3Ji6iJbvxZbP76rvJMTjdLXEn9WoWDBAxnUJc",
  "key23": "4DTEkw1w8NJkBsT8hxiZdVAAprGr1vbrNG2vZguiFehBTrTXs8y189nVzz5HPvATsickdxaRyjws7PiwicW1uxwf",
  "key24": "29r2wMGn1xVmc5aDWth43LWLx44c99Lt8QpD9jQ85cosYqyg51x6kmcwJA5abYzK7eveUSMwNswdDwdazTW4qfxy",
  "key25": "5MaQQ6JNk4nbm4QLdFypJ6ZJpr1mZWPioyT6t5Hisj8xaSKVf41TdTT4sdvCvke71qF5utKmtcCWKLZ1us3tDYNu",
  "key26": "7UWCqjoYgtATuRiDAzr4f2C1fQB6JExtRLPTW66sTES8yCetBit1KjoJzRHFmncY6et2423YTBBsaUqw8dVYwF5",
  "key27": "2gJE4Vqkm7z7G2xkLxC65C7wiTN3KhFHuqvEntHNpJZVeiVGFA1xpQo3bPnQ1yFrGtffGFpDioXXgtSQW6LdB9Pf",
  "key28": "38b3sRcAa7UUyKRbfNwnE4yifBXFMLYTRPmpuLPUrykfCoYDV14BLYjhT3KLcCxETpYku5nUiuUXxoNv35S1k5dt",
  "key29": "2zFRaJE2w9G9oy6oN6QFdduNNc4Mq6EiySwsNg9vfgFtBqFrHNA2QCFzH6gckJGRjqq9c2foF17uExCTaoZe8RFQ",
  "key30": "2zA2FGGHxedMfw7j7qmZh2RVupvFoz93mBKovw9YcQND4zmUg29w4JALhwxi2dcGX8j75ZuaJ91miJEBxKhY4cu6",
  "key31": "5L2fPHyiy8jhV3aAy8RS76Deb8T1id3QieSVquzsoibrjytj4WWP1kdAs9Nhaft8hssWuPGY6Ay9rdbJL79TuPQC",
  "key32": "HooyQ8LhvSMYD37JtjPJYkX8MeYpjWnqS76Zt1E2MjUv1cffXJQ9RpLRDP58GHjtZfM3wWypK7R9QTkvSuqpz99",
  "key33": "ZhchZsQ29Q6ExgjpUzAZPSJTjNtc84atZTVh2JbJGhn7ksHFQj5DXCckhvcWELGGZYX6RqGLh3RuToeuJEvaQuX",
  "key34": "2WCkK9JBQjpY4VoXZBD8HT6xHFAVk1JUygzJ4iLoh7wLAQ2Y2XXuZfDRq2zhnB918uRmyWDdByW3dQFLuLmCQ8wo",
  "key35": "2evcK7c2PzXL2SziqZjvVrtRfjTW7cskqvc1n2G2VxLQffvJL9z3iZJJtWip53XL5KgjCqSGTtfhogKwBjfmpLDu",
  "key36": "3KxrLpgKqQ9q7UwMFgK5R79jYPVqwvGua4dh2Tr2CJy66jPANSDmu4dUqDSXCtMCh81DVdfFWYFZUnijXuPeBSku",
  "key37": "425f6HWa3TXySf1mmDCrmoe2KLMFr5B1np9NwmEMU4p7P3CGKo8QHEyTAEEDANzhhsU41Vpmm5ra3HmdEK8tUrsF",
  "key38": "4s2wb9N3D9ENHSG3VtKWjrBZY3YD5B4si6BGT6Vx4dkhdVgjyxWS2wrVDigwTsPfrasUPZd4gL3Nr44VwUHuiwM7",
  "key39": "3Y4CjC3zk92o51iQg5uHfVrTosrxJNNMrAkZH52Vt5vQmTnMyngSBumLiP2h1Y6tQSLoadM3s3gwkLBuFb57ReVH",
  "key40": "4SY3kfujx3E3hpN6BDrqVFVXRcgmb6if5ioVLW1RzVraxC7CGRjGKNuAgjUzXtHBAgjyNrro7XYyQiC4GvEwbPUp",
  "key41": "59MQfJ3cHt6GaEwm9nekWVC41o7GWs5cz8jn63MUek4TTAmAbgskQiyQKsScwPx1vZE9jbS1Qy7HnWCv3DBaaC5i",
  "key42": "5kqVoUAZiVBorQL6DnVhuL7CY69hwScDYS7qH7Dc1e14sNe2BfBYqJWn3Nyn8XuCPzi8fWwL9yuv31wuAomoJUap",
  "key43": "5rCnBzunrDH9iwSDGHwpZozzNVsFAKU343w8f3qb2a4oxGCXDQyJnDJFxp5PLmELGJUiVFQYF4dvarfJZQXBQAry",
  "key44": "4eJPfN22q4nkNcxoUYWVkDNDeDBtDN45G4DZv2j9SR3TL3rbaMrWiSEjNDPw7F4FuNL7WMEXcWjCyfTRqRvHqSz7"
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
