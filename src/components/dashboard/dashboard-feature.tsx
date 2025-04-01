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
    "2SzHEjfaG4dyLggqqPxRDKBJ5pHJEqjBzKiMcf2h8xWJHcVwUVQgzVSYcBdpE7tRtZ1jceivbSKVSgAdijmQzn6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQG6VRmSM2HZ4GkjkUL7An2jcET5BhLtpT5RJVJWigW1YEy5Ts7jnes5KSUk3f9eYBp8sVApP6XcYmgjqwiVbfW",
  "key1": "32Bps9GG7dW34jo2do3YdhojXx4aYk1MCNid9W6Tmos1dziuMMzmGrQH78qRCXwdMnDJmQELBeGgUCjBirt6gbNp",
  "key2": "2xQzNENx5w4yM9caj7R68JKkve8mpXWZ8WpKCB9md1XjCouWkckVuSEoyaRr8FQUJBgxcgszU3YFxzyBYWRxGNsn",
  "key3": "5mTUFDc4TJZxvcav5tJzMhofBz9vrFZL3nPGWf9buQ22UVjX6WQ4NKwNtVcVSiCv21sA64qe5rMrC2LDzNMSb7KH",
  "key4": "4ADMj6YQbV78gghgakZTVvkcyrC5Evsger26btuoNh9qZF4TnperimzEt8sGtiZMQidotrg7UoGYFPYoVxfJcndj",
  "key5": "2jBy4r7wGVfCf25RpdN9dAJuTcPjBx8HoiAh1b5MqzoWk7iVgZgkCbGxrkVHZgtenRCWrv7233BVKfaetSP5fwrK",
  "key6": "p1bbc7YuvsBQJtvvqQe7PedshhUC6zGHDh16ZwXsozoznfHeNCMESAeKnYKnJ8Jijaq88KVrPmhqmRjmraEAq6e",
  "key7": "5wNnPh21kJ74ynHZ2DLRRaYZrEjfuZfYivbhXknfv48eNFrvi1kCp6GenU1XBShW6QMETtuQ6ZXebS5vqHzcqPc9",
  "key8": "MDWdy2r77MDmMLARGYdvFbLGCe2doXUuGuR5RjdeAGbNTdNGz5ei6ZQTbdwEe9tN6C5JkzdoqEmQ52SRvjkvxNF",
  "key9": "PriuA2QYZN1bWuBCa1LiXXyTWWA6cvnQkgdenadDzUzxTCpZ7MFcJ8YjzwPwtxFszvugLDiEAGHQBMTFjamrugR",
  "key10": "58fUasRmH9aeh9UfSofifXeGdM1sfGjYPQCsL4hKvttAsm45qqwtVweAA7SXBpm93yKHMrFtETMKh6MSWM17X2CT",
  "key11": "udoTWdKcLqn5j25vNy1xJYFAzCWTGGPnqj8L3SKh65Jmc35wFWKPzrCZsZwVm5Kx4zTSwjnztrU3TF8igAdtaWk",
  "key12": "4w6V3hek6LyEFo4wMKA4Anc25yNcx1yZB1raGRKq6RFMjNZDY1dP2xK4f3VpACa3V9ePypZ6UXMVWiCTUdEdLiJD",
  "key13": "2HdAWEVExheSdX3QhwKSwfC1m3hbJsmyhFTsvnTJ9BMvdh3SXAQ5pVTjjGVnQBdpxg1sVHqUzB99ikvp8mnoHqzz",
  "key14": "5PJEWg88wKjhz58ZxnUGWbhaY8CVSc8WJYggStDDfVhLQj5LFfWRTHz8gYGwkadNACZ2W6MLuqqMy3HbCW2ChW9R",
  "key15": "e6nauN466ayXvvsKKzYYM7xqV3hnefoQNmsF3hWPUyyJTq3ahVJKmgwZXok69PZHitgZrK7nT2qYMG13SzY1auV",
  "key16": "4XLt8Maa5XEJEPdBC2PuXCaNsY77aMsfJE1APdDqi72tS9RThfJVj596nRFkDxz9vJJvhnE21fDtigHps5cQd64u",
  "key17": "2UgxaH6XASC8E1QKdjueXVj2x4SPbLbQbVdUXvFrbiBjMEaadoXBaBFQs5SU1JiwpQRuygmFJRCq3gaPDfVQVuSC",
  "key18": "3Hfw4qd3kaV2XE72Xty1AqdYpNXzfTs4PZjiJKxoRomwF57Lke7PAvYRshFESPmrp1XtibveoBSacn8HHc21PYy6",
  "key19": "vPZ612RKzcb2v28dzA7FDcSJzmYjvoAntYjuRJeb19eUTKbZVyb6D7AAsS8o5ScicVNdzRb6Xk5QPvy7XdiWZig",
  "key20": "3HeUa3622i6TMwiB11tkdxxJSL3a2q1eCnSTuZaCn66XcXmaU3peeUmPXR6GTF3YFED8B9KVZBxXHr3jhsrRWsQ8",
  "key21": "5gqoFHjthTpTMEgUL42fwNG8Cu8DEMXHsFGuMFoBYH9cCgftQ7gRR317bGSv8VvuVg3pi2fTQJS7McZL43qttvD3",
  "key22": "5AMYoSLxLYFAaE6GSXnqkpyubmgcmYbBUrxxYc1S7b8Vb8Yg9jtQmjV6oKFsWq69GMgWPgDvohpiGD7WbqTRyLSv",
  "key23": "3m2jfmWJsyBY8c44j1iZxVauBLoky94zabSeXooYPh1nNEWhgHeVje3TtjZEn2QLCw9fFgWuRXZNU9S1vtjwSspQ",
  "key24": "5TtB1BymSxMeg8nbbsDLHBXEgQ1qYtiNMvSfC7QgZ52KTxx8e4Y7PdXJXRZdsrdCVbd3omWnG6Nk4VYPEYTn9kVL",
  "key25": "qyWmatVnWf29eiAxZVVkq2NYaNseSLivhiiCa9w5rnUtWcezRMPHbxAbFtJqfrSigqY8YWRUvVPSBvkhu1KMb8u",
  "key26": "3CbZdbvM7tT4BABjYs4ttPxYTHsJ3BnLohimYWEQXaswNu5fWAux7c7QyJ9GiQoekPsrWwccQ1SJp4DWj3PTtPPN",
  "key27": "3cVEyLkNubvp2TLBCEVfo4LEbh9FzckWmU6Bwhn8Zt4R6cz3977RG88s2JR521DHwRY9D3NigjJ34QpNSBs7wxr5",
  "key28": "4rWf7AKfQXM6ycC2Jei9qdaNnjFhPDSLvbcLbm6io148j6gz5VASqj6s2G2ZpvnAT4RZ31zepDYHuqRazi25k6bC",
  "key29": "3hrdiUTdqSzLwYrrUki69LcEMzftCC7J7DH9xM2jzULKRrtNuTrhKQP44yh81kvpiEwjRGFrBACZXad1koBW3XsZ",
  "key30": "49xjZ81eJ46z2QJCEDkbD1kDjojK9CbawM7CF5cyj6ssXEwLVUMRxMg4bcCtHSTMV7Ae3a7wSW5Rp9Pg6rPEGgYQ",
  "key31": "4seXfEQE9CzdwvqSGN849ibL4UzYh575dGH7dd6mZcCEgnKoVi8ZUa9EKHd75s7BnkQw34WDfhjvtS5afY6DnsY2",
  "key32": "RioACSK33EEZyGLY5XZ4qCFzwDCYGqpcwBgKzw5L4ufZkrerELLPz2XwDzHkxMzmqtB2MnFM6jHZqzc6VSMjXXN",
  "key33": "53GsvhovGTrHZJfBurUTNWAFpAk2Xt81JvFSRnUnbeofiVjeFMmyXN17VxRw66BgwMY98hwQdiVvsvEYSwVu1uYK",
  "key34": "5vwwmNfiy4aJi7eEpV5QuSxA6PSunqMQxU1udkKYqtCGaQXMLSfT7FGkY1gZRqjsA19dzv2FwHDoQcdMYwwMBg9u",
  "key35": "5yJyY1yjGqPtWBcaXoRN11KLxWKhxLmWmVPawAxMuoJQKHBkEeKtAnxuyuEdJyGUHHhDyrPM1v74sLyVYTwvggt9",
  "key36": "624AsVfTgnHyeeqjAza3HLLZb1braxxS6ELneMpGWEQZzcsYzq5WwKYeJ662bYdd7By54oUREwkdVbJfewDq88mV",
  "key37": "2bR1GFSDUp2Tu2Tpw3PdBoAcKfKC2nF47KBh8Ctu31j7FQao7j62x61V2YGbj2F4XYVsPuwEPBmvzkgfKSRPEDNy",
  "key38": "3kPuyiW1RBwhWULJJKU5isAw155pwTYKwXN3xpdRwrLjfsgBVPp6jDPxGZjsS3jTCWG5yX9P8vvjTECh7wewZf3W",
  "key39": "5FynyhfsiQN21GBT1KtfKzsuT1v3hYrCH8wD4fEK52nsybHnHCST79gUmxmzLDcjQKVxo8aSqoaQznF9NTGArKg1",
  "key40": "5c5sDP9ionZkxjjDuoTtAehKXm7VugTtSNeQYvs84xcgimQetWaeZ7yZkqTEwvHvkfRoqNAYndxqsrLU52oiL4VM",
  "key41": "m938URRH28rPe4eNGV5b1ytJnjCMajvdVdhMy7EShuienchMv5G2cgCUbJV5pjKfhX3iS5C5yvx7MoHc7YG4SRk",
  "key42": "4kNmtJjqtf4d7PsD2dhkpVM8S5AeD62ECWZdbsRLyo5DmFUTqR8aovATARMUC3AiZi5YZuGdRJWX1F6Po5Kw8E1G",
  "key43": "2k45cq1BCw3jACN2HM4mAdGf3YTkHdmyjQeENCN39CZrD56cZWwo1SZ4oHDtvWJZCqjWqo45wv2azWRnEewkrRfd",
  "key44": "41LKxcigopHpPHj6HgKKRDRgvNMGLVmRCswZPvFYQJQxWq2F4YBYFQK2WZAXoR5SYqsT9Ncv4SecZBJRoR4UP2qt",
  "key45": "2yiaHB1qTXW4k728WjMBeYdd4MvBVxDqQrmhatHaXXM7TgAugSJw6s6F1Y9kYuw6WwTwEEbdPL7XuFRBQDSFEThX",
  "key46": "4shkz3YD583tjFuHrDoAnXSeDACWHLCmBv1sgMzyCc5wmvP4PVu8RBiCu8LuR5FQrBubqJqwgcJNqydyXA2RZWDd",
  "key47": "24sksGUdJX8fmvKs8dVgSKFeq7sr5TKNEUQH5DX3ViNnXDnuPw4QUziKPUxKWbhMj2UqQXiEHMYg4q9NiatEbVXw",
  "key48": "2AjRnwEkjGQsAnyqYyRou9zecSycXoXFKqS492QMfSbPbVa8xtB5bFD5gtsc7tF5PapeqmWpUgCNHyG2tCFisB6X",
  "key49": "4zHc9kAa3Q2RMDLQUgfMXtjyjeFN7uzRs3uAgC6cfbXcq4JKwU3LsXFMh3wrSMFjyskEGii1KFBZ2QTNgLzp3SfE"
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
