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
    "3RjFifFvMMViQPavLsFZpkBNHm2WXMfgYe5opScfrmixQL3GcDA1UuBJbnHHG36RjLTcF71SMN6muse2dXDULm2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zs1T6XFTq7PLdMJ4atZJRazyzX2XaJFVso5ReE49qBvBAZ8bFiycyY9JQ4rD9zaquEvcqTtxm7xkMFuzHAL98Z",
  "key1": "NLnpGg4qXnBeUKB3HHiNAhv1PrFM5LeQiPrRJnr9MJR8D1rPpd9GWNHELcicHsrAfgqKmr4zmb2EnRYXzGVYnse",
  "key2": "3yGhSfAWshjMmCPWbBC5znmDGMF3Zo7EQoMDNDF5smvC9guxyRShLbUY438sJVkyKqA1meRLKwMtKY3XmLEPfTLT",
  "key3": "2x4FkQu5PcvxpWxUYqYwmomhh6ouJFcp4E2Fo2wLuCjMd4ARqWtnTMjbjMXsy1s1jvboe8AmM1EvkKqZNxNdJV5L",
  "key4": "HNUS1xa7LcASyXEbddEVvRrre24LuhxEg45Q7TLiVA3MnH76UABn9dAyGZBgPCqAb4mBMsQTHZ9UsWLCcBvv1M4",
  "key5": "2UoQP7svhvw5GatzCrcAYAHLNLMpZt7Ekpi9s2kDSNdHns3iuy2wApko9z4UyYgCsTDsXgYXwJxUGnQ57wByDjSC",
  "key6": "3FVSqeJUuaL3s85Y91dzpwwMivouR2iKnmR2yLd1FAmkKSdCRpkikxHNJJ5p41xiBwCyku1123AgiP7NJaxhuWH2",
  "key7": "5tqYm85dXfNQfCXV7Ekt1AHxfszRGA27KwV39o6APd6WFb1T1WcBgsKXoczujqzGhjLaBXHHeQZGKKGbWWruzSLm",
  "key8": "5CudG5X8CJcCE1qmQp2Jn2rsf5sui7v6XgW7EzEr9YEc3LJmYhouRR1uL9ms2hS8YBD9xAY9C4zKswJtAFmeDMAS",
  "key9": "3W63vtKsHQ61eesbGKg2DBVios2f1JJYvxgDhJo3rWizwVdi2HM6Hqr1yGg51MV1mMCDkJpgtgv6UVfU3kKmEqFU",
  "key10": "59rDjGJ67fCvHxm2pk31DtvTuPreMjS3pUxF5399WhoHDaTZpvYy1AAafTJeWfFEPE7fsmAj7wwLhhRK1KkBX4y",
  "key11": "auxGTkMp4K47yiQdpYZ4UzLkJN3d2v5s45WmiDB7VuBhZ5p3NrLQuEqEqrH7ofjgS3STSxYsfsUJDdVvrfgXeqA",
  "key12": "3h1QgTYFB3XP7Z2tf6uzVah8UUcMJ6p5c5HbqifQsoZRfyq6AuCoHEuPwECsRBJ5ojQvsYLAtVjGTVzUo3me8WW6",
  "key13": "4QVzNPVnspuT3qcQyxTvHz4iGUuSy3Ay8TXMC1z6oYYmPGzkoqPg4GdW4iembwLxF5T4vzA2fLKWLWUuPU6UTgYn",
  "key14": "4SF9KUCLUu1XvQiKCqMfBz3n2KwubehQWQ5J65u2YUTbihBwj4inthv3Mq8a2ZrPvmSeB1NSLmCyMuMJMfuDGjf6",
  "key15": "2Lve3qNxJktRqW1BmPffdghJZ8xve9nWMx6NyWD94Vj9GurjpECLvt2vYqHgT4c1adDEbWydGH4GMxUZTadpHfh2",
  "key16": "5HyB2y6s95TEz1sTPjqKbfL1My2eGxqxq7ozWpYGtPX1ApWocm3CWDCLaNjUgaNxWCboBNeYDCD2ZdYJjgS7baNp",
  "key17": "5sMB8rArKazRzvxz7ARFU7vxrAwzxpPW5X1Lx8Xug2hrfVj4ofvaUGaxavpV9Z9JDthQ2pfbDNqFM5HMW3UwA795",
  "key18": "5kY8fLBrGNcAWgxesxfGPUvHmxwuaH4cprt3Cx3Qh9FrA734bvPqh6QNkdfNnQhaxJWQ8buFqC62gjiybHET3Gwm",
  "key19": "k49hYB4Qx2RepWKKijLodUPA1oKgsn5GVxanQsrjCHfuToZ4E4apDVkYbrbo7LpcnDkFNhEimuo21bWZrmsVLBu",
  "key20": "3zfu893XQuFi4uQKefiYxKpBP7gM7Hb2sAzvQx7g2zvdtfBpBcshdYL8SUgJa768o43auM3CgZ7oU8m61hB7Qqoq",
  "key21": "2eSf4r91Cn5948eHrG5TbtAZGNobARetLtA5MqjMfr9EtGMTyXEje36PyuYpnhe9L8Vyg8pT7eyQ4y5wcwpVYpGh",
  "key22": "3i6rrYMYrXP5BYYBDissNGStRYpx5YK8987XcaNvLcLvp71MTnPPHH2TeZvfmoQG8oHgyjwjr5AC5SorU5SpMXRJ",
  "key23": "5rrLxj9KDB254FAJrLdrd4xDPGkCLvkSZuo6XY8us1TLWtiCTaoHPA5suA8AnLFxBMB4qmJ9hfoqAHteXxTrWHrC",
  "key24": "6694zjmtVUM4XnTXtPgK2JA4Hbbwnd5CFgbzGgvK9hAgAGhZt7c39dxfQ2RZaSCQ4rpUs4Pc929piMw3CZzShsKV",
  "key25": "2DYg9miUxkrnVPYSCM7UtGRDSQxW93srhjhbdZKdiTh4cKfQ5qGe1jwMopYycSFD6Yf16DXsELxsXKFEAKP5EsyX",
  "key26": "UT9YZkYutWt51GLRkLcedSGqwSL1gtzNTJXs7597PHzkVyvCWvwLbNv3cLyfCeavTce3SxECJL7zAsE5W5db68X",
  "key27": "2khjC6hX7Au8SjUs6XGArFrC922QAgci78MBDNFSCYGNAr4jnPpBj54bRUnaLuc4zv8VMsydK3JYPxsQ8FYK4Qhw",
  "key28": "23MoM9bkNiNjbNifbg7NrKghZ3rEs1R5xfH6mccSNHeC7xJEiK4WpTBqdfGSvyecCD72BA5yWdvZgn2bhrCs4XNf",
  "key29": "3rczQyfBVMe3fg4JJTHsRYkLSU77uPC8JPGgVJ1KbB8r6uVbFdhMdBYGGg7v64SoNamyoTtXLEtYjomRL6EzhCAi",
  "key30": "3LH19pk2dousoFii414hc6aKwazNzFCP2JGyKmiTMwYHbgnS9QAf2S1kniuuxzGu5RkwtWQiq25hiSFXc24q7HYP",
  "key31": "3ERkbQkDDgAQJn9xPQ2xn8JTn9PEDkrYruAgKUYdtRXutMQsY1HTKgC3SLxtrCNDPnX6Un8D3BorzFzaw9x3muwu",
  "key32": "2LxEqxJYhAQDjhZ2JWiTVzBxPdgnEL2nUkDBnFbeSP25qQCXncw4wDdp97bGbHRwYLMvaESVqvPdpgNpknGib6cS",
  "key33": "3naRRRA2n9EHWWpBGeq9jPUUiVA2VK1Mbj5QbMxBrQEqoQJMPGJxdvvcDD7AfvHfz1d8Cm7CUNhd4R5yPHLrvqYW",
  "key34": "5bZTnpFGdRra4e39WBFEzRQAsx2MWVbTyoXEJb5Q6CsgRzNjJVmRwu4UMGDbwycxXomBvnuaERE7aU4ihrB57x7j",
  "key35": "2eGg8PyM9RDBHBXPBdvXBAJsB2zHb2E5GbjmR8CqTQy2NQpjafMy1K2qBbm2AbnsgkxJpM85puAe8WJBrXdWhMxE",
  "key36": "jHDStxExcy6WRD3PUpGoBrzrnhkzTWUNgFzgV7dgUJ6g6gfTpzvUDKmfbbtp1mv6XqEecmFm9xpCxbSfvoHwyq5",
  "key37": "4bXh6dTLsDAJscW8U8RnQGJYsR1YrFpv9Ad71bfbY2egmUSUP4Qq75RfAhaf9U7jzmNxBTDusXpWr5pPViE8MAkq",
  "key38": "61nSirb2Nfqr7ScZaDyj32FeSR6TQouZtUMLtBW8upx83SmS1SoXvYJf5qeSE97wfA6qgMfVeNE7W4Hb7nQ2dtoQ",
  "key39": "1jwyd24iqjt4xvPKdQsveqH918bkzfwC37gxjJxf7RZWFtJJHsbNXL92VPYwhcjCyKCM7TWF8DXLjyvNnmsNKVR",
  "key40": "4MMqMhKuhi1LHnNSMeP586T4qXDW5L8QzSrzFt295So3NBQSGVpvDLPkC4bgDYWVsWZtWnr6VfTV6yU3ERDBSgCF",
  "key41": "3dXEsFXbvCRHYaQsbrXr9fatgr9H6BpkJAmaVML5XdQNADaQ4svhAA2N6pYiNA1j5MVoHuMcgCdxraQfh9vUR34a",
  "key42": "41psaE5j9YLAbB4zDyf4BCVhxpF8NwZTh5UkKo69yUxbZEBr3tETbhDCqnrEX5Cqsx1mq1A9CvT1Zvb1otaKP2gn",
  "key43": "26qSVZaEvD7tSdSSeBzeogATDi5gM3KNjK5nfunMngVBzhh3RaQ1JMDfNfcPMUyUy2FsGRTnsU5bCkDs5JUhZdn1",
  "key44": "2zRXZjeSj6RRCmevHmBYnBZkbpwLPuuQma3NDDFqf8huAhVSdNwshdC24nioxrBKuPorUBxQDMZPC2YwEddCoxb5",
  "key45": "3DA7wBdGAKrg16d8Wwjx1o1E5Q38LN1cdz8i1VpAbH6eufgo7FUvCZKoExq9MrPwfVmcgqr8XAa9L3zSDMRQNJNA"
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
