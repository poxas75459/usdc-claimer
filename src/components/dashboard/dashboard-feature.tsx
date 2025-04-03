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
    "4GckcTmhToArkdREyevGvMC7VZxKCRepcyagU7Apw2uxQLwQKBNnP2LiYBChV9k1rWuioeQQFT1qWobqQci8yg5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJi16RVix2gpEo7EQivhgeFSNGLEC8cgKBbwWK3pCrF6Qehj7KpYmfU3Gq2FMt1Tdm6EG9iP98BqfJtXoeQtN8n",
  "key1": "3NeXe6r4J2rRM3YPSPY5E9ESPjUXBSiya55hXARzkU6irPzRmra62mXfzBwjEgU6JivYuYwXMKMQwzjvutEPApQp",
  "key2": "64hmgoN85w3LKXqki2gnzSUr1VbWfjEVaDsZiKef1u7fs5snugaQQMe8G4iacGaAyS4HCDHiBPAjhvVhrXodAnaN",
  "key3": "5MiFNFsHHVydb4yYN2k1UJMwhAsizozgXCzsq4k35i8BFoervHZ3SPgFTi8JGNCSXVFyWxALf8d14wCtnFXxX1Sr",
  "key4": "2AhgKuPriJAHJajqsz2mjHrtbnmbEBCpCJi7BkLSSXu14uEZQaSuCNa8f1DVdij1WkaJj4FeP1CR2cPvx8aFNG6N",
  "key5": "385QcA9cNtGe81U5D3pTN8VbfDTvBnrLFS5Jwk4yXLR4iLDZmWcSqH98bLSsMCpoaVdHa6vTU7ypzcoZBjz1HgTb",
  "key6": "2QyGgzZ5jdQiXA9BSC2Cib9FLKxqVb61kUfNfh77M64kgkkUfpxWTpx6h7mWsadiLmoGPcaVugtXrJtAw2hM15bj",
  "key7": "5CYFAfe5VN3onkjktkd4EYmaeZbGoagEXLz9AKTVtDJgCJpXYnivCBsoWMXR4wLHj5NRRJ2qkEuVAuubAJosZdu2",
  "key8": "54AF4dxJMxJdPp5vEGNkeLWsxzXdGT6Jn3taMEK8PgLxfLEKmLVQPnZg4Qjsim7z7EQpCYSUzMw2r4Vghy4Gf61L",
  "key9": "3Yy7MJYfeWirdj1V41Cy6KFozp3YZrYAgcgSkERbrXfsZ75sseQyStzSKyFxoo3JkhExXNht5voRsUuqp33AV4ve",
  "key10": "44oa2XYJAq9rsEEaDXzW6UubfFkujvEJKbwsThpxwWLUXeN5jJJ8dkLc7Xx5sb4md9cET2B9qqitJZTg6LBQna1L",
  "key11": "3DhULU5PDVJ2f7ALhSeg7q9aMEp4kJBEiny8PCy4yByvnd4D5SKoXqpmCwPYdUjDVeM9MTDXj2ojHuP9CHXKUZAH",
  "key12": "MX1MgzY67hJD7qgdphBn1KTGmDMCgdi8dRH9ZyPctYqZJxQBkoEdui5KviKiZYMrZ5611PeQPeXMAiUVhSJibsS",
  "key13": "x4g4xXnoLuzrcPCiAwjYqahc3TPg2zV4TnFJjb1Q4qEoY5oRsj9zHFvcXnnjZZDorN5SUgRNfRgtw84y2sLdJjf",
  "key14": "4VoMXdekSY6vbwCgPWg1L9mEJXxVuZEhfkzPNAn5Fb8LSPi4LrjVYuC2pec8dvC6CjvnNLcptbJ96ZiSKQ6wjNEn",
  "key15": "aGEhm7xKZ8u13op3SiBTnn5Xad87SU4BCzaTGgj4nPmzGQgasFkRvx8FKJFxN3XQf2Gez7e7Q1QopRV8dDUU15d",
  "key16": "2ggWffcuGNzu197pX3RNCtJaV4DFuArcn8kD1FTBa2xfzxahkmN16iGRu6EWkZQ7aHrvNVYhGxdCf6dEN5BDMZan",
  "key17": "3bwBLQPwBApMigFagmpzUapqnP1fktCWDRXFfEF4dhMZsDm4E7rSR3U9bTZx8HAF3wbeRBstkP37M4TQn1CA4xLR",
  "key18": "Y21BUEobi2nDNFqSoZQZopHbiioVvEx7RTJP9GCkKu85w833sMDmiz2ARx8yhugZuZAqFUjBANt1NpFgMhhoTn6",
  "key19": "4fSyhpsJvjW771yPZsY2b1E5vFrM5qFFmJogh4KYKZuAhL7CAmzjEvJiATKCBXYXRNqhJ2WXdgg3mcAgWxvh9bYk",
  "key20": "3ua1uVoTL2XMxyfZfCKWNm52CCWSYXFcX8ahccSP1Pgvys1auwYRuNtxev2t89SSZedxFDWz6ipiDfsgX7Mv4UBb",
  "key21": "5jf6qXwcyQPWWbCn3fnZtfstwaf71hufpfALRCnipDcCBraQrb4bwMs4ikgbJpw3CezCchNCKZgvUFuBb6QVe1pY",
  "key22": "5Hv1cgYsMg1g2Aup2E3hTg3jTsonhd2rw2XDzHAUT3HTEF2Nj7x7WwWqqJdBeJSgjymbHdQfUkfRS1YKSH25BnVE",
  "key23": "3t6LjuGK3nMiTqj3wUnaZL7DLKMRHj9GiTNFD9MPbp6VSQuKTGtxjrf6Z8bQuZuCUVw1KQZ4NXmhGsF2dtovqPWk",
  "key24": "2xZvar6tHePpQYHJBJyjK6xwtfrBjN27oQTBGjvqjdMXjiNPozA14i8rfwuJL39Y3hyNaCMXWStsr8r7ZTPxsG1D",
  "key25": "442QLiAgSk1ahwxbS4vjVHH8X8tCnLsT1F1kjKWarHjN74hVJ8WGUy3qHMwV7FPDM3cK4iaEbzgAZYuiJDpfh2Sq",
  "key26": "4iX5UVrwoCTmdtYKQw2GPw2NT9Tcm6USgAupE3j2ARYH9pjEv6SXFiTbewJk4Mr5gDzWq1eN3Xd4kaH5oXDyRLd5",
  "key27": "5CuVVQxC5AWyyzXgioGDATuWCnaM8ESgLPqPd35usTmxZMagFPCkCxsmtkxCLzggKS8yWBkHnJJmxxQMo8CFTYJz",
  "key28": "2mNcHrXSnVQjdvJJYgqHa9kw4kzp3AguKhQTvY7oLbsVEJTWYU75yDkAYW8Hiev3fS9Fyqthntw3EjjczzFodhsH",
  "key29": "4hZBpBNstA8eJZUvoL2jZmtdpHJMZq2WweiKjHUChZr7n3a97Jh26sHcnFsWRLkVNN1577KigWDj1E3prS3whnYG",
  "key30": "8Ly82cTWAWDqdDu1M1rafyRKGFxsKQMNi79gThNituT9doPAqgSXndCRQAMiYRTnPHdeh38PAjndi3CtZahMKmF",
  "key31": "4zQcyCSjwT6vek3YEUAnKYvmcfgA6GtkrQuAXzdho98eiaZ2ktLaforwn85z9qR32vQRqaz8Dwhshhe71fDHVXcc",
  "key32": "28eR4j3iKNRrdpHyg5EPMFrWUobXboaj1TGBtiLpTJWDcbAYWdxuQgCEAdypRgbys9yoo4uUmgE1H77oqGucrSik",
  "key33": "3k7sYotoAj5QQ9vT3nPaKcwUAhbXStEWcqustJ9yNT2vWWksd3DMZd8VMYgwwS8iqL1xim3HrsvUtXpoBAjKik6E",
  "key34": "5BvfDqbzEdPts4WgXmAdimqnXTRFNp53VrmRU7qV5LKK1KHK4vXffTUeMfKJwt1UE7gaLsSPYCMRzmzQZpyEj3gW",
  "key35": "37U8K5ku55NaLZosHnXofD5v1URZxxT2jw26pKBJ5aWZCf6wY9De4j63uEVTs3ZJo5Av37ELB1qnHT4DXSRb7Gez",
  "key36": "B2S2nDNYwcWZzFUYaLjvUH4rjWv7tVuvRTXdgyCp5W3qufuDyzWduwfjxKT4th6YNzdkC5KX7DafGmqfvZUt3hi",
  "key37": "2DNQB8h49RougrgownqmvNQzdaKYoreXhWReHN6YjupQTrNRZMw6M7m9b2xJUsjBCVqozKYT2q4eWRq8jfZ5Rwo",
  "key38": "5acvQCQAJQCkZT17J52Watgxxs4TX6FwEpZ8R5pcVDsE4YQGVP6YtDa5gKTprbjiDUiv4ZBcySNxCM18JdJYkuj7",
  "key39": "2yvPQLN5438cWHzBdEiwjAskgeC3KBicgj3fNE7dszRdikgUL66TEWpDE1YKxSx3A5Uu137gRXYbMjTyj22og124",
  "key40": "3pqYAQSXRbQCdt421X8Z2sdPsiGVMfjYhceex3fz1Png3hEoqcoowpfdGRe6bAFQpH7V7maA5T8myuod7JCXTqzN",
  "key41": "3N9PyCv6j9vwwJZsyT5NdrdaDJzfBUyTRaBXWGe1QKyooJpH1EZwHyb5ZKjkHWoa3QLASx4T3zsMZYUHBLtadgHo",
  "key42": "4XgZKwRJzwf7pn3TWxU1SPwkoWB3B1Wt3RYFxoDPmQpEVoPPTbrPAwSqRJQcUoSTYrSbgAG4aKGnpwjr6eP2S1er",
  "key43": "RF3gr6mfQhbban7oDbTaFwMRK8CFmsEZq4NqyqoLUBFB7hUYvYPghWM8C5YDnGERQRCwPEH4eu5NaQFrvQoTzGJ",
  "key44": "3B6aGzr5Yf2TpjEupcixpQbN75KU31is9CUfTPokiVsn3YURi6j5MUgCr2skMStdmnb2taUrJqvbw9YmAWcwvnmu",
  "key45": "2UQq9GcWVDvSVJY6hQU8jH1bvCN24QxuvZUkU4yzx51y1zb7ArURdJL3WFhA4T52TDv2Djgni7GP1awvESnECRdW",
  "key46": "4h46QLMLDZ7mXXn2ScR8adr2WidTsLFPxKgGhKnyGj2VGsRr1X35xX55PqBtwqeGs7BFQwTPQQ6FwkkSzYVafbA7"
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
