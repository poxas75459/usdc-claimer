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
    "4zwUkmX9wc5JVvV48zMeEMrFLuu2qWdXxoRjXxFiQoMbYciH6gHFSWz7mm6wshfSaGTHEFYbna4RadASRCq1hTup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D68pzPpgywXZ9dg1cGgKrRDZV2s5WSeRNVKgdHuuL2HyGdgiM1grHmd1dy4aLNQrrV7iLKwfqPjqeHu7wH5LZuQ",
  "key1": "2mBauTJ2xjXTiczR1WLcx2H62HYHeKMmnjdyFkcn4m5MzizJz91mf8WqahCGdndE9YQZYpayBK4qTRcTcmbSUBgZ",
  "key2": "Pn21KLVs7inj6uvYG4moshWGZuCGLFDKzsh6yfCYvURXdEBKdsFDeNV7y295H8UQ3dxoLJNn7EVDmm4e8oQN6Dt",
  "key3": "4Y7F2MjQrfDy1PofjSPz1XrnRK6MqjD83NB9xHokERcVMs26jZ3MkFX8iADduKeN1bg3GZvrp4ekaGyKAWRwKDfA",
  "key4": "5yEL3r6Ku4KABU6N6MwdhGF3TKVW1ajciarM67sR8rbziebaN8yB8FjDGnBzFi1em33qaSUcCogm1mPyS1ZGp4v3",
  "key5": "2UJ2WeaJUZUxuME2KHvM1sPsstXf47SNSuuv3D7dQ3QjhiPgK6JfbTVCmwSjBrxWanxg3rZrWkBGaeHTgwB48KAt",
  "key6": "5hGB4MqXMxkHi3LJ4b8ZotzTdEZJJBn7dDsmiie52XCgeTi78wTapdY54zKoNSfvTbMfeLdUNs12MbQqL5QG6Vgp",
  "key7": "5weXTd6TGBifB72iau7nvdbJAPwhZTkx3BC82fgLqhDpCZDp8sF8nuLyeZgA6noS1cRcovnWHz5nqnhnnYpaXsjA",
  "key8": "3NUTL7bNZ3MB9WuVT82Fh3rYRVb3SG3RWeBAmAZJVDPjGgpZMjrMxdffEUgEDfLam1n8doCEeykDXQfvV3GKMpxt",
  "key9": "4VvR9jH8TU9ZutrLGKngNJGS9LfAZb6BJ15FqsFFWcGFNrVjsViRwKj2q4ootcznmYqPAGXwhxZe99xTBA1A9LTK",
  "key10": "2W5Kxm8ezcWExzmCfpoR8CBcup4z9QjKyuyKa9mMnCTUv9uZTpDq93AevBUdXAkKfvhCVTzbyt5iz8zkWxi6NLp8",
  "key11": "2m953EzvvcRL1vuZdRV7qPP1g3uqoQfRqES3N8WsfZSfwFVxcNN7HuirWJDgFpY55bDmhJbwgQqkdjs3UhQGwh7c",
  "key12": "UaWdapsFUS1Dse7x3D5io6tseFLNqkvA6UeD2zNreZUE3f9zRBm7LF4geguynEEXg64iY5RYF2CuSewQRa1n5a3",
  "key13": "2ujrpnbxDCUXR1Suc1eCjNrAQS8U7AAtWXPejPMsU4JBM9pDXFsSm8KbDS4pLXHLKLUWJo36m1QogDsvgZzH3gAR",
  "key14": "62p5vFRKaaMkNRMRybAverqyrayNZ3dR2Jkk4yaUrQCDqVDztdKAkzBUuovyTzATXt7rw3ocbaH7XM8WwtFpddd4",
  "key15": "UKLtthktMh7vEEvtXcaqzPJsXrWtj7qij5xgAr2m9sBzamGyMn5aMGrqg2S3chVzAngGJ8yzKyndMjwsARVYHkr",
  "key16": "2iVQE5PJt32p6dELYcwLcdfcVxGFhMP3M1jV6dzh7581zKHRxZ7Rn2STmofpAr4zbvUJS9EM1kSddUpjSEskGU1N",
  "key17": "64pC7j9qKsrbWn3E8AqDMsdNRgM73sCGzNW2QnjurSd8LmwmmBgzw4p6NDprban7VB7tNbYBdg33qBT2aZRBuwV6",
  "key18": "3NzNAkEytgkq2N9AXmjcbGq7cZQDsgPaEhPZN2iHjwoqc58PP5grtuTgZrcS8JWkA4oDosv1CSdugidQCNphnKyu",
  "key19": "5ykh9JrZo4DfCivBL9b86xX1hQnwW2q2USo1Nwm5ANrBrQCHV5Br7XQ8mQVuCToW1oBi1o2KhdUeVnv1kARUHawn",
  "key20": "4iWo4Z3uyogyPQWpBygg8vj5aHQsFGSR4vDfycE1s5UjHRdfSRGBtGv99gRAGADS6H1d4vY5v4HFPchhgpk3Ryz7",
  "key21": "zM4hJGEZEJvoDt1G99X5fSZaWzPowuWSvmD5Foqj7Jxiafdpx13RG393kwC3ZmHrntCK6xQCvKzkiVj245zyrcQ",
  "key22": "5v9bMVbwtujd45UpddtUExMmqKat7ZF25xtfwiM5MFBsB9fQyRi1ZZWGba4sikMhVQsZGVP8P5ht3CywFweRGuRE",
  "key23": "CxMSPLZnRynhve3vuAMREraogzDjo26SESLDSn5DAKeLaDn7hUwh7oUJNyAReopkf3N5Ho5z5S4jG2qRNY5cWms",
  "key24": "5r8wshc5ZWMJ1Ys8fndaMJuFMYrzyA3YdLV9MBoFxZZkuAvrWQpBW3fY6CZxxsppj4RVEhoq4EPqq7jjnWw411hT",
  "key25": "BKSArV3MMnTg2YZoW8ZDpSAaA1Dj26aoeKYYwKQCHBHbQwZtU8ztqS7W5enWQkmfkFPjPN7dL7mT49Ci1TaZuEt",
  "key26": "27WUDByVLLJgw4oYfb5WHa1V4abH7uDRUfJq86gip2YGNt9PM1e4N8svyxxToNgyouRArSk3Qv8AASVBsB9QMAKe",
  "key27": "54bGNd4hCWpVxTpFPvUxVyrRX52pXfaSPmmgNzmWvkmHaCwsdL5FiM345aJ35QvkbjXdRHfZrymJxo54413UtJKf",
  "key28": "3re3XAyCDgqmcsTvnTaA884w8qKy3HcPAq8JdVMuJypnDNT6mnKqCEx88zCtEFKisRJkJ1C63vNmfjE2xfUtbtMQ",
  "key29": "Nx33g7bP6hAZN8r2aDoaSAimsrkHo1uGuztPDGUFNHPBL4cMbTyknupzjGUvQDYzCrAnf2PtZuTY3nxETm75HSk",
  "key30": "wS7qxJMR9f9we4ADJn28GdraRbE5WrDiGe3r6sEBiPfFKgPWT9hZSZmDx3pRysWgp71FgKg2pCiRe3AJ6fs35Xj",
  "key31": "376LbzCUdUvsMenV1CEt9JyKRPmtnpdfJkUZvRx9i8hbQ5aUhYw5oQhvWL5iR95ZXGFNMhnejpVMj7CmYEo3cov4",
  "key32": "6xuoGVmd1Sr2ktorPmLzdQWCb8YVUxHqCosCsAobDnw29LNjvwSZv35pjw4yK2j91t1Bte8ds4CeapZu6opyLcc",
  "key33": "45ZvzrXxH3YTJvr8UH7ddsdAaZaVT8GNrrSrZCs65EYYEMrSzxFdMGRhBdSHwR3wJZaMGGsiPNS5P85BAL53ECcG",
  "key34": "3EkYgW9F5g4E8JDq1N7vXPY52ktVeFr5Ver3gbuHRRrsxJfyW5CRX8zEKYXQyqJ83atATDGHYCiyPtqnVw2TfFeX",
  "key35": "5BRhRedMZB7iUXSLc6aLZk5NrxH1WJkKkWgjYyvfNReEzEmUSEHBVcQMsRecbdNhEZyvakogJuRxpAKJgy5uTa8Q",
  "key36": "4ZCke2ghtHbbMYZfgTcprt5FCYdZ1piCvb7cvvpkppFT6R4DoNZT36riHBgxSn6P4EU2pzzsAb1Db5PYSvYR48b7",
  "key37": "49PuBW83dtaPBGR5SmTbwU3BWasVePgeCu4sfihq3AUQEdmuLuG72mpQ3H5wiuePR8SaMn6uTzAwKADM55NhnPjn",
  "key38": "4ogjJ7qteLKDNxRS5cqJuAHTvJKoz9atVzvXyKhpHeZNnMNQgXNS1MCqyd2kb7MvaEYT6bjC6NzbtKR5cgi4UdVq",
  "key39": "5vQ1bg7jgkJqy7wFLqZMKT7ghFK5Tu3TnQx7uPyy7VyDHAT1F5Swxhsm7nSjTS8bSkTRfqtNkZJM16fG3HLzGdpE",
  "key40": "5UP1pxNcAz6wjSbQwVhkp8xPz5ibPJvoRguAH9nAUnyQLVbWQJ3YjXk8Fpe5fHbApikUyWinewUaBHwXTXw7yXXr",
  "key41": "5EXA9z1AgkY8opVoThttigTGcFPXZqKPnrtBDbwvCKywxkC8GC4NY5R2P1vjhjSrfhqw9fzijHseShngYDZXBHBM",
  "key42": "jrxGz26FwAX1Z4Zh7FpLvQ3YW9z1MLkvMoGeAZUdnNsNYJC9EhKUVjE4Ez2R3FMZVfYcHfxvqHg7FfEy3SQBxr4",
  "key43": "4i2MXNRgmQJrff9PJAaiGv3DL7pTxH3pDwuYoCjDPEHKpMyjh7tV8vcSXomTMYTgGj9k1XNLF82CNGeF9kdbrwFf",
  "key44": "51RfxF9bSGUGLPdpRo2NntLPJUGLkgBqpT6onLKWoZXWc2YmuCPmB5GWw8feeCauzyAQ4ypj5cjNphQei7v1mwxd"
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
