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
    "Uqj4QZiFWVHyC8jNW7gcZpSBT2bHsbcnX6eoFz4ScFwTuha7UCMTz9yzrQQnH113CgCe9GkWvCEs6xKKowdu4Uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RcYQTbqWBLh7zdVHf5PFePCPJ3FmyBh6C7Vv3NFEUNt1G2oqMpmnZE7jzUJgwTe3b34kwUAATFnCiLf2uZUs4R",
  "key1": "q7BQij9P3DfjnwYCiSbBVhniPYyugaNCmT3S1kzkDZ5X4XLVXoDH39Umpc8CvemquuZw9WCShc8gzxKkYVVX8kk",
  "key2": "4UaEAZfStm6dfubErLN5UYkEbGw536GeCRNpGd5yDxM2H3TfxN6dwn79PkaDVTaaybqGDQgCtbu3cZmUPftH2CKf",
  "key3": "hWkKj5yrkf8ipUeU5PK7Jb5aFEXK73pR8nU8bvRSvvM8Nnu1H7SU6xSoDZo5sNE4pBeJGRtDJPBcJDkLsaNNTZd",
  "key4": "5iuL3znjGekpX4RL4NVEASTHzQ6mLfP4yr6mKaVV2n2hfxBUkaSRg4pB5y98qwdxB47iHiKXitkfptBMiqXjCJdx",
  "key5": "4h9U714VzPYQ4mrzjWoN7Gp6i1PXeVZdW4CzWyDKCSmDwVtaBeuzZw4uAsgsGS1Q64eQRAFktf5TxCJ3LYbjWZLg",
  "key6": "qH8JLPZMJm71uQjvECvZwKJmkVKwzHfSefoTRMKSJNxCycJxKkphNonuyDx5iJocQpzHuNVoim4X7gpEqk85nqM",
  "key7": "3scuLaNdEQ73a7A4CK7xsGkDUr5M8DSFvaY48XzXdoTGtBgC7FWvAiM4TCdi9V8Xw3Wg4PcXF9Y3fMGQBGGZzUbu",
  "key8": "5NWcosLcFF8N31NUD3LTbfHbPpXdebaNACVtULxQRksqNZXLMbWv4sUCaWjwUim4nDwayWwbEy4AnJY5qms5Qmn4",
  "key9": "2sVuKE3GnJFYvbuQEJ83PwfhUy3g5KuKr2tZCBtZYcjo7ApjYJU6ezcay1k45nir2QhLaZfVLAEjXhHxEaCy79YU",
  "key10": "ZPd8s1VDYLYqwSWhmhBqL9Tfa9jTWXVmAhV1qQNFHhAaMu9jCuRkiGFTHQS1zuqmqD6yLMiuiZc34Cb4Ahmic53",
  "key11": "5atz598JgKTLpxaScyse4sUrQtLuHtUfRQeqfSWw5TZDhWui6PD3d5gdV7zNXmMSu6ZcjJWTM1hnADRfJfkW1dU9",
  "key12": "r2hMyu1oBGWNnpKe89sSvrZMmkn94d6TiTShLhPEcg8tztSN8p6XJdH5qyMwcsqy9a96SgYb4bvTmg9STU766Ya",
  "key13": "2bZcaisHSn7gbRk1X2jcyTQVeLCH5cRDJo9CtVZWgzjyYfcDJyBNg8znKTSZyGQ7QzGmqd8sfmjGE6VPMtN5G7pi",
  "key14": "329WvZy9J9s6HNuRZhbJYFoMecJ3eFTmyBWJvyBuKncbQkQFx6jcLC8erSf86YVVAWHyHaFuc3Du1ygMXUerjaLr",
  "key15": "3q2o983LREY5Kmz6NonnVyiYQRTtCqjGwhhDkr4D6iwcP6BbnRQ13E6DEiysxjHFPwJCBWcqA9vPtzXqYmNeLVuW",
  "key16": "3QTCkgF8PgBgEt65R9cmDtkAm4A84XKPqsmVMbGisF5bZGM1QAikmckfgvgoYuxXjHWMzVhMbXMcWGUuPoCKL7Uc",
  "key17": "DrpUzGcbivjWAagxUp1o25GRWrN9B95HES3CsvwbFYeoomamc74D9VDbdXXdV6RqQFKHBMeFc317iw7dbUTCgaX",
  "key18": "PjRaqoXc6kgdWYogVM2t5nnejW7tmeDmeiM5oagco4gpWdAbQy2yjtK3Bwi8AjvDges2LStefKa3n7aimC7qq7G",
  "key19": "5kFunnywrdgXXyHV4Jh25dVJR1SnoPkvrHmKTVxhhkgeDoiQm7KHbfV6erq3bPxHgrk7gpAMAsB2LSgMLtpwSWkC",
  "key20": "4issFcfKS7nqexkqnLY98wHXgDQ6WCuHoKbFvUzhKy5sQRSxko8ZTBL5XL1bhcecBa2mnTwhYHi3eP9gtdex8C43",
  "key21": "T3xrBHZXh61SkDp2QckdWvuYzHfVkmKdh15Go5sPEYfF1sbThjUeJMHq5SGpxqKzZoJHXJs18NHYfAJH5sqpAiR",
  "key22": "3RHieivHiAT9DdF7Rw9L2SmonfxepsyrsF2FuYuw6moAGzo9JmpSLWVg5ZQu61JnCTYz5HbUBV7bVjxmKjjybHfN",
  "key23": "yMJd9RZm7dopFptm8qX4S9838U9F1tZuoxvKFwsYFA6DtxZAurcgh72PvxdWt7znLxTFScNJuKGBPwVMkNpS955",
  "key24": "28b3qJuSe7sT914wvdnqMsu1xuBQqHBUb36EpewkGtPJh8ELrVoG1yN7gMjiAomSNcn5VrEGoUgq2UkFziiio6Ng",
  "key25": "3vh93htGGELv5J3HCk9F2vtXYREoEvYRs6kQky7sNtZe5hZnDx4exXgdWWWH8udx8W2yYkvWNia6Z5geTsmV5Mu1",
  "key26": "4SxoPdjCdJge2Gk6QafkDxVumt9JBPs7DTXQsBsuukUGP2RQXQDEHW4yxSzYRi4fLKkZqvqA5HmKUjz5W8weedHh",
  "key27": "PmRLUS5LoPR7b4XYuDPWUDaMeAodtdKpdbPevPjfmbE5eoy95hjbFeFWmxaUM24ufVg5ubb1ayV3r9RiAbPiaLa",
  "key28": "5yUjYymGSLtQXX12ZJkL5ZQ9bydJtaWiQ6ghPdEwbLQSyuLdUma6ivcU255V2Hd9ykrBsxHzbx1YKoLnEawoqY5z",
  "key29": "3AuUv7KZ9z94rPhNeuHtGByC7TQv9wS3iqFhTwW7N5xG6rzDVYpAkTkAuU4spqMsHW9BSKHKxSQuiHP2QGk6g2hx",
  "key30": "2PbudB2h9A7juxC3RwB1gsXhLJTphjUhshVwWN7QNY9PNCGCaaPb8KNjc4fZbBnHRu16cJ2LQkn31UU7MJEL4t61",
  "key31": "KQos8Tgo1Gr78skHSvVAkPncVjKkc2ydtixjpHgVrV8rxRpvU1yPCZJHzpRevzA4zK6KCVE7zFZJyT2aVTKYChK",
  "key32": "3qtWZg8g1beRvW8vYevZU8yhUu4hyF2hKoJG2Z1G7ydgTmoz9xA9uHQAJA7ekksZVA9tLtMeoSHK11x5qM3Z4Mk7",
  "key33": "3vzybuDZAeFFUSvUZ8pYQgp2nusN8RHQKE1P4mr5xHiMiCJn3H2TvdEwR2Z1bmJknstaGX3Jms2XiWLE62hgopLC",
  "key34": "5D3GSfEpwZ9X1DpoCwqL2YnP1T8a57haVd8AUR5wicHCPbg2uSHvpYYVtso2fukr3Mio5RUeKs26jy6ybqSSvxJ6",
  "key35": "4JwFgxxnp49JyP3GYVMaN1rGLuCDjqXh73PjuiZSJe93JT2jVqJV5nU6jdj21febfbRt8XKzkwFGz1zMK5S6TXtP",
  "key36": "21AnFeZTFq5FLiDXQdE717G6qbnFh3FGyBfSHmrbAuWqLeAwTVHsCMeJddy1vV3WPeLjGnVW83HxiaqsRxPMk6bb",
  "key37": "4Vh6YfjQw7ZkkMtmXECFgXA9LnpTTTWSN5qGVHnUgvaJTnRQffaHE3SW4495eRTbLvbmge5ECXREe6bgDprSZ9kk",
  "key38": "NstJeEg3zhVyBdqgpqevFWmD4iYsoeWLK8pBnM959ZfvippSzPBPgjHyJwMFv9Am9uzq1Dk3WBjVzi4vNWiJnzG",
  "key39": "3dT3bPdaCZD93xB7vN2oQvrLWPN1PJ6kTwMHtaJXVcPkHTQUroHEfQyBydS2DjabqGgvbh733JVWVzaankkvoTYj",
  "key40": "Gihn1N9iX4hebQtfPKJd9TAA5zbECyj89aj2DUVa2Cc7xgGaxrUBZ6dX3qmFrzXiAjSmMjDMbqxy7Su8XCrxhXb",
  "key41": "5RL2csLNRnhpjXopr6WtU2j9djytPfNYrna2dtu3c3WTXiuymEVsc9Pkfi5iRBufKCKsVmp7cfewCuc9gY9wp3GM",
  "key42": "VB9Dx2CPAvTRSZBtGJ7sDqQEcnAMbzxuByyYeqbU9JSYzcKprq1Bs9NjKbPmSRwMf9F9Zt6rma2jyUr3tUxUmwC",
  "key43": "42An67SDPsAbxcLSGigMssSMNoEgt9YUtJkQ2kBPqkBNAeaPkgHHm7MbMy8kvwNfUem174pbxz1dHGT3UmZyRJCh",
  "key44": "2GuT5orBTi9KFrQFR29u9z8QiuhsUN74scRxCKC7te9SZ9bircKPSrG5Cf6kyBMgd1RXW6HSYWmrjQtRtbHeE1ww",
  "key45": "3MtyCddRB6NnvPZn6u4RvuAjdcu9SU21ph5cmZbR4SBXqzECTcroFsiASfQKAEZmjYLpMFnywgLGUev98WDiK5iC",
  "key46": "gwExMRDfLKtEMNQkb5aSWoK3Gw2VEZgRmnpd3d7Yr5pZNLhRZXKnVeAcUqHYj541fmkzNAnKuRBKKSi1TSiw978",
  "key47": "5kvuKS1jVngyj8g4sSqGmGTJ7jbHNLjahSwXAUw5FJyAom1eUyDvmf7PaQP8qmLPjwwP37XBYfvGe1tg2gz29p8s",
  "key48": "5viQiGs1quPzcvSFjj3nKumMpYe3kHrFabaSPXeM7UzcTUjbp972B2Yss9B7ewddEgBmDmgH13RME6X5PdThRErw",
  "key49": "MTfScjRRsUXydfwHHDwzaoYFxzs9e32biALcNkk7Jb4yWfELDZMkhxexJEWNmpYL37y3LsJoznW9pWKE2dg6Evm"
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
