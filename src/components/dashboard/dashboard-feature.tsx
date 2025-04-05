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
    "3hXLSdGt29GYoR3NEqNdHgDfWvrkqTJhG4dqUyWLsX4nyYGSRNUcqsC9yZ1EdaEYPacXTweBiRt9NpRFEwyUitGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zorgeYZ281DZcMivCzAcjur5W78bcLxe4wuGvs3UFvumzztD38CDpNqK5Rddf9uPbAvktPWbT5Gjm7heKtPdJCq",
  "key1": "49ZPobCbXvuKbzpaaxLJEjNZ92rb5e5bQvKxq4iyYFxx8g6RZiGSxSmsgBKdmo3L6yPL7Nap3S6TDa7TnBuZVmL7",
  "key2": "2yK9oDveF46icUcQEn4AD7KucmyBrPLNLJ72SSVtDSN4wrJtHmWiThFx4XLpAkZkG67XhGiGgoZyFdY37RdsigYW",
  "key3": "5gWjnRDV3R8aj23X1B581uuTF2j6KASoqMAheGRxFumiEJxLQPwy9hDXFf1jh24uRQvdR3FjBXZRBBEQPG4Z2fSZ",
  "key4": "5Ki2CfRaRgi9uvugSz45CEvbXzfEZioBYHNtmGZCpiLXoCzgeiTeEuW1WxSwvQmhMzkFscZwPDKNxT9HyHSu9CGs",
  "key5": "2rwRyGwovE6gwGSvY1q5MBxrHg4U5jiNgiaXxLYeNm7iemGTS7qvnK8mGdVzsEZ8yu2uKHXCc9cryvypwHHxzP7K",
  "key6": "3oLNcCLAreyjGmV2pdf8m8Uknhk5dxx8GMNf4UndzDoQTh1MXeVtEeJPG5bvasVaYQgL48zcwvxNnpcWwqDnJvbf",
  "key7": "2rCfaf6294MkXiZShexYkRvXTcgkDS6NgLPhTDvpShJKDJBmkXYWUgXVisCHXd4d7qUSh4mXJpbBP2ksKiAYEZ5G",
  "key8": "2BGkNHXkG4FW7YgJ5sMPK55ucCBUs7YPS6rReL8GD9GFfyW3gxeBbtqy4h2PoFJTstRi4pTrt8NAVFqMya3jsS6z",
  "key9": "4cTaKDi4PRPrdPttC8Xk9ciiiVx6bxikvesFzp2mNJWu6dHRV9zL1vsRF1Eaz2cTsQvRq7gxHixyVxjpZCW3cYSe",
  "key10": "zUrwYY8pRCwScu6b56ynncxfdynxU4zRmxq86SDFiRk4SmZJgXuighTNHcLxewdkJ7yHEDNW4MavDGng47H4LFY",
  "key11": "51TgbMRkXtRWkWmowPykXRN4pUNo1sMWEPqRb9BcYrWapx5JQPEYVfycUFUzKTus5q8K4iaqwkZc6hthTibhz2bN",
  "key12": "2NgTf1xiZKpu8BEPbSKZapHFUbXyKLJZGx4zAtridBzaiRLnhJMBjdmYrSrm2ooRkm6BCxTYf9AWY75xT1foftGP",
  "key13": "2W6SsAZoXwMjThyH1i1gwzZ6puijiPKwYy7px6qT6YKEsYiUdz74yMaPAuW6HRCeoTvdRdSB2gPSNfZaoSm6tm3e",
  "key14": "4HB7USAmp2WoMhfGUXiNFt7F4u4BpRw4s4SzUmSniQKoTmVLZwupZj3sC8MT8ADbM3cUXx8A45TmWC2sg2dQPX9x",
  "key15": "3vXYJkfWNtQiCnTMzA2uJkh5vfqLPegCVCoxiopWLXzPtNeARL2rtttCYP4LnsKLXnA1mGLQKbTxcRZksVfPcvJG",
  "key16": "i4ZoqdphiWrfLgLAWcauQReSrmW6ndPZohbvjsTsT55Wq98Evy8aFR39Z3vJErSiggqHGQAJ1umW66YEHPtK5EC",
  "key17": "5noEPwa5CXvqJEc5v2YjytLnuCghFK4k3K6mcisbLDJZ2UsT6cbADii3x2dNL6uPf4d3s4fp1UBnugDVZLKFGJkf",
  "key18": "3cRkhoDzoHR7nAunePRq8aYB3y6QttZePkjkTkWRvkfKePP25mtTAoFjy1xNWUCFQZGVDv9uP8EU9s2EAir2Kq4Q",
  "key19": "Eu2rRLruhC5uuZQ5bqYLtev3kgZWSbjH3jV1rvorwbbiFLhEobwhB8e8VH45x2KqKgAkwnu2aG811vTfxuSj78c",
  "key20": "3j4Zzs2aqcq9eB5gB6Kypwm6pKpnjuS89qMdEfRzicgwrUFvFRcfTqwKuwoB3XxJQkAnDQs72VCN8KRFySMQ75D7",
  "key21": "58fz4fv8hH7Pe2Y5UsNjFjo5qkWqvy4xPkStRHCNQv4A8CZg5mRbxEBb3PEYCaiSYecs4JXcCum3cAWM5J9mv3zr",
  "key22": "2hKRNjmm7vgKUTZ31R68QhrFmXmCj3QMLCk8VXfYBAoNSjyxPd6d6EHS1TtEsDWqBGzDgwR9Y28hoNuPEc4E1oTw",
  "key23": "Q3NmiSPyHFHHCEAqbZJKc2ewLCU7X7t74AgQ2EybGp2tmtLXkf3AcDDSDd4nS7uGCwXQa2JkhujWJenXZ1q1bUL",
  "key24": "2gfine5Jeepq23xE3dJD4D6bDPtFdEZyRpXBzjzurarf6pcJdG8MxLNGPQ5uzPPjWgnUJDABfWdcEJae4hLhnCWr",
  "key25": "4K2giaWt8cBTvgD5NW7fqRLMQLZiDWinWGUgaVLeVQ9ApWqWBkEDJiVG7dK9PoJGyTpPg6ibab645bkw8WdEwyjJ",
  "key26": "5AWqcj73HU3ffXA4YhdRjxicXd6Qb2cr2qrpPdFoDFWNYFZdhoDMECW5VCQBFd7efktCkW4csvxJYwYdavB7MvWn",
  "key27": "5tUeGKL2ASQt7NELKCR7PXni2ZKbkfWNxXXzNyiEHx5D8RdBDjSWbAJzKEHECnJnNQaCwiJzece1PFV648RLxdXt",
  "key28": "5r5VG6AHsmLrhiZsGJKPYiSsbtapGN1SjW7XXpZwSSxENwJ6cwEmcw9yavo3PRc1B9tZbdSVT96edVLezUqjH2d4",
  "key29": "3yxX9R9ssxX4UjYitL2KocN7GoBBid9B2rypcwnsWQi5b4Yad3DCGiTP1Su7ZbGysTNQvi5qRuBfHc8PVXzZmq8H",
  "key30": "3YoAHpeqhxJGdcXUmTkrTn9sgEjsb1Ld741YHWABmuX7xsyMypiJZW97k5jeP8x7Ksh6y9bxpugBQamiaSj6dtue",
  "key31": "67kKmzP8AQnHtMYCymMFo7uCH2NtVDXAXP7GGqZq87JA6nVwkkjBJGEdprJ6eR5NAP1zqFFw2qnkju2oco74PKmU",
  "key32": "3qNXNrVo6H7Zs1USc6Jv5saef9ZTt5na1F6qjxhmeGfuu8zjK1kBGy31S7pUPRP3o7iWCwhAb1m7MU8WugshyPJR",
  "key33": "5WkgR8d25axft5vCGESBi9KDVfMPdYPM26rUwAC4sfbsN2Qe1jRhcxCgMCMzL1sPJyZfbLo9gJEXubRHBDLr22ex",
  "key34": "5aZCVydhvUfXMPF36FsfRub27jSBTFb4XP3VxT3tBrDiHf4EWfEQVHZKe5bmgxFHXiiGLuRLV9WDhyZQ6h9xPoum",
  "key35": "5eQRty6VUryzUBN7NzCToj8W3Z6bfuhTe74eADQJf9ZumyLRPejdYPhUoym1eqZov1JmNKunAqnprH1v1gtNdudH",
  "key36": "DsUr1irgs9NJue1WrhYpaUtHazxajQuaaBL3yjBEzxdw1uXHdPmsZitxnpekZVjLZWssTxECdjc1z2gfhpgHmmH",
  "key37": "hsPGc1VpPqBR9nSEykpGEZGLTL6KRrCDPb7swQrD48RuCzDd8f2RFiHJbS9useQLMYzwL5mTs44hpJsxZycsqMm",
  "key38": "5VAKeZYWmS3r26KzurvivExAYR3hemNC6dzkbegnHeXZPPTSwogtFqPk7FRGDgZ7ZafR4dB3cH7CZnkJWP1HKsBo",
  "key39": "4rNJ3ZA5EdjMExBimaeLcXqQb2tk1nDLiaLLEpZdZyMaE347Ei3r3eh4tPdxcHBYX1ukjzi7gwShjhE6T1UX34rX",
  "key40": "XRrYW64ftFtn9BUeLQFhobk7bKnYG4ifJvmArKzdYQQgLcFmQQpTNJJxmXx52bWAejpn6ArbYKLCf6m2oWezTGm",
  "key41": "2UKs3m2mnTkXv9ex1dHPWe6qKLAR3cGka3ZtTrGfdapHkLDg5iDmxkDBosHVoGrzRxozvVA2aoRcr65usNrfeimQ",
  "key42": "HEV33RN9w6pLfNpaCMbSMX3SjU5RZPuiR1tgNjUMwNpM78ExZVhc9b37wMcExcW5Np3AKzD8t38aKSEiqNn6nne",
  "key43": "CzuDPPFtYxM5BtBgfz8kAdSUpFrdoQNM4gqKfKW2rKViRc3K6MCuQ5wEMePxkoxuocwh1s7daArsiutWsjgShK1",
  "key44": "2Z74BZaNLjiBHkGdeXW93MyPqy1ub98UE5PD9yW7J6R2e1peB1JDrhEzSaCcfqoWZzeUCSsAUeA7hBCj8YPv7XSF",
  "key45": "6KWHe6UR2HsMUJXb49Hj1HVVnKuDQ3mjW2qQYfBcQNCvZHPT775J5fgX5W5ycaJTZtRqu39tcgEck4SYyCfbbrF",
  "key46": "3VNBVUGpfwYaMLBTuRLcok43Bt6MNzwurRMvx4riRnrtd4wJCaZ4zVmZ157VYdEdnHfeWvj4qvcjLL3EspHNSRmd",
  "key47": "2N9oS2YyTkk73uiEUfVXH49fH3beSrG7Qb3ai5ymo5wwaNqkHB9xpUgrXLQXU33raNxHJKDFrs1GNdWbSZEpPRAC",
  "key48": "5pSKbuRZBYuFt7TFmxEHm1CAt32idFz4jEJZazaozs7hqoKoDFPaKN92xqH69EFdpTQuRhPNWUSsWYhNyqtjD5Ut",
  "key49": "2xQSqLquiNpzzsLaPkppeL5X19waoNbvLVnD4eAucnPgXYzSTw9v4PCKDgRgkDjtyiV2hUdYxNfHvNPjUjZjAyMm"
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
