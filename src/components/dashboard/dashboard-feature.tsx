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
    "5dan54US7NmgzChKeHhxHzeBFZcs5nP2JT9d9EBcrJKKwGsi8WgscxKiReW1GWL4dUWG4K8sVNnXsQ5tNdoBW4xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3kmnDq7Cjb1QULdcFk4f9XycUuHF7NRHHxaZ2MsrNrTHuNDPbLmPn5R9JMAuwihhtbW6f5BvRQ2Sx7QkL4sKia",
  "key1": "37qa3XkYX5QgaovBppgsTsAoiSHcoAq8QbTbnD2nNeoYC2vpharvjC3Lbn6J2ZmD41M1cxGQeb6Qdvomqj7Ys3VD",
  "key2": "2Mp66X2y5izcijxoGquCi8Xahz4dSSAAgXhdUq8qFBuCRNN31Zv9jfZBKBqeG68xmG3q6AiFZrsaarDDyP6G5vuL",
  "key3": "5MJBHH9HC2ESvneBFv4M1jibpfoG4ubJG4xjLDBU6upbzn9ejEDT79ehw9YG7zrqpXeAgFT6fhVEEzwVMZkysTHH",
  "key4": "rPRmJw2znPYG61vDkCUHAQsXMhjiYPs21TvB5HFVTT6wDBv6fDMnUvdtBfB6nqtcNZGEo5h9rikvZYkhMrkFptg",
  "key5": "543zGiomLYR4gW2fRwmiiZot97vfb3iTY552aifuEjTY1YmyQHrusAvqJBpAuZWAdnkqLFuzCh4n9aDFwL3eTkDF",
  "key6": "ZeHHNuTGaUYW697jb6stYYBAVvdroQ8VASKKh9ZGzY5yjjtJaZVgztXLS8vmP8zNz9buy66BPeUWKipFWeCsLPY",
  "key7": "y5YcGsAHKLhxZLW87ZFVXwMRannow66HrEhiZUa5SxFL8NvGYCuHP2hsEB86kKC4SQy4iHqMKDqm1QREeVYr9iD",
  "key8": "3WgmChdDbiZuMkMACUvnsTsFbaJwsn7kA5LbnTbBY2RRPH5AGBRuCYJZh1uFXRRZfxRHXTpyErfCzbXs5eBF4Tci",
  "key9": "5NmAruoFV3q7somfLb1p1rFxq4ZL2gQwC77NkfeJoWEvDZajeUqWboox67y35e9dDxtt2aLNjos95JcSe24TMa7B",
  "key10": "2CSzzkTTM2ZBtzq366SLu1BG2GajdbMJVNcJjfJcAW6dNHsSBt7L1PPHigTS8Fs3Na6bsg5YzRCUMphuLJUJcCBh",
  "key11": "2e8H2vzPUTUddHGxDoyu3728baa4365garSTqVLwqVJY5Pbg4cfsnT18H4je6v6CZEkSuvauwfRbivqiD5UcZhXc",
  "key12": "WbTk5cwxQASpAZyjuNQW8MEcm25yM3VC7Yz1BhmATdoQrpuyc9uUm4vUgrjrgjAQ1FiDdTaUginmEk3Xo9aSM16",
  "key13": "4NGcuVdpkVCk2cC1WDfhW4sjTRPnGrdpLGwd1VZjWosGoZyTJWDJoqfsQZJoyres9LgrL7sVwVnPHvr1ReBbcWcj",
  "key14": "2KVxYmwJi7fbRzv4UB1jj4uYidjSJwU9ZP3Fh8tu7zHE5oZ9X4VrFuxjGQ7regeE85mHRA6WVQVnKsRQ3UmXMo5S",
  "key15": "2vs2o8Ux8kFGwW91F4m3AjNNMicG8Qa7UevAnb8hRFgQ8jxb9m9z2mGnbrMrNkyYFAtCtoVQbnwarJap5kWVZnhV",
  "key16": "1HrLCtX3CGdhEjGi7MJvoVbTYPonv95HsizUpA9KvhFGsFv1j2C2RFJLEBGFqWxRgg4Sr2ZJRT1TMVsmkcvhS7P",
  "key17": "38hX11VrhsV8koxe37ZLB4szVmdL5jeW9cFjUFdHLLETs6hhrHeiBTjrrjfPMuP3AimvpnoDMwCreQkXhWqxELTt",
  "key18": "5wVMhbH8MvUmiDv2YNzCY6cEdqiztDhL9jXp9K5C9isEW7GPQTYETRcW5u6vKpwxkxXZFys1QdCtphhauYhr9X33",
  "key19": "3ytcy661hrje16uCnZSuzAjFuEWPuGuWS9AP8QEjzjGFgee6fWPQKiWxDAbFuV597a2jasbMCqV3jJMuenvhw5US",
  "key20": "m8tbptc5fEy1ot6riCro6FfyXzwuYagJ1dSimCoCK4pMCejpcuFjXMohhbm8ynsXjr4nZ7NMaJ9zzYHcb9NT8GQ",
  "key21": "4zGepUxmZVN259YLDH34BiCEVoAfWmqHFpwcGFbQYeBRKdQnVp1h2KF56Z6b89o76ZtdD9BQdCN4Lhd64vQvFy2e",
  "key22": "twmPoJ6iHtQ8U9xSwNpetbxPzJRjFpxmCtDhaT71VYhzNQKafhgL8zXXR6T4EDtYRaFitxrG44QEfErrk2HBN2x",
  "key23": "5mKUGBzBNyck7k1Ty13gyRyDBBQsJGsiHdC39kcm63SKjbzCV3ZQtvQ9NbwwEcc7GFrn2Ah8kDwfptX3C3w97vep",
  "key24": "29K3qVWpLQiH6NjL6V58oeYm9A3wPSDp75uzVJF9RRjW12GTWzbY8TzaUSExegouVNdWDrydnW7QPXVjiHkeCAW4",
  "key25": "3Zzsko6D2rYbqKjoco5g8SDBxJbMU94qpPPXfipz9MWCAqduKYQHANLJKyTcLGnpMjRuF67NcW1Fo3HzwRvNuK46",
  "key26": "4AG9YyGCmKiDebZ1yjgronZz23dQNjrGg86CghUMYRwJuU3A1jPpeNWBFBknkYDBAifzkUZao4aRqsjn2ExWpEAo",
  "key27": "59mKmqovkhdgJXvkRh2VxvhXsLcAw71n4BbAeniggdfSVkV8cjdcW4vsbwn4VJJJmMXKhSUh94Mz38KYG1boZsbo",
  "key28": "28LwMCy21C6gBaq9VcJEBvVtdMeMron8YWkMnu47g3X9wbDqcpF736zbsrTTaNLLoD83jsvDpGsb1jdk5E6BnCU8",
  "key29": "2gv18rFussP445a58v5TLd6wjuGonG1H55zsJAD231xNL1P4urr9BNdja4pz8njiEHHXJzWnbgKyk5ZudC8S3oJ",
  "key30": "41Qzi5dJKUsyyDUmMsVQp3xahHC9kYqceqy4hzo3Na8geWbW1LEUH5EnDBmjNYPdLbDMePvrM5KrJiuwNbpFmh5Z",
  "key31": "4Btq72j6jHSzBvAsP3RJoD1m8Wk1ttC4N9UaDeVUrzhmFhxMFU5cNpFvqLG8FWbZRdN2xXXuSBMoGK37X4auKfXV",
  "key32": "5ucP5goizDfAkArC6iN5sLnSGqw4TsEPknAaKbp5aCzobNJbzkeNL3Cp2M5AvPwVoWN8rsNnPCa5kQXkTxmb6tWu",
  "key33": "3KUGSZfwAGyaEFmfAnjkPxtWAmK6bHFtDrcowBc8r4ZszXzUf3J2PandQkENeTM55u3WjBE4FcFVXv4Y9BD4f8bs",
  "key34": "4FSo6CPxjTUoXxoLSusgRur6yH9LrSYm3XbMsTbu8k2ZQKprepyF4pr41Wo15BcrwSahXiQFuJ1e9ZY96To2WGmm",
  "key35": "2zKnTAkDW6SGz3WFwaKKZpwk2DhmLiGJfEx57qv76FpgdBaE1RjXRMRCvyLULnh9dfeA19Kzx77aJfmuPLj8ocn2",
  "key36": "Xau1QhZR9XFnt12x3V5954XTqTgD2yNSMzQtnir9miJAnL9gVMidKJDbtFPpvoFP8MtE7inFDoetdTsSg1iW8ZV",
  "key37": "25tjwj8E8TD7VfL9RMHpkWpWHJgbbxxacK3CsWZZATZMunhB6cSaT3ju4odiKbfiDHPPiipgtGdCpGWzbQFW41uX",
  "key38": "22gSQ8kpuqNwZmfVXyJSuPMG5Pf2EwmmycorJDFtGRuutXpWkeaKVaDy7av5D6Cj8kh2SRF7VzUKkicpREoZXyp1",
  "key39": "5GpcECrpGb6aQ4ESm4D8hjr1b4Vws3MkzneAYoJyeLCgqZiPCa6YuyLnVmcbgmQWsWLybyD7YEno25V4hhAedCKw",
  "key40": "sFiFUgGTDJ8m3KiGMx2aKwgKrEyij473aX1ZaEyjP8A3a9zPZ8cX61yxC8Jf6D5swz9BaFhsh1nkWaQAB69FzHc",
  "key41": "5gvnbSsuRw3gtQohA7hzwpc4g2X1bpUhqXcE2WbBsnCwptoLP3rF4PGxKoUN24BQ9vnGkqK3zN9JiqKVsEtehax3",
  "key42": "3csMuTuvnwWY1veALgvXrG254p8Ac7GNURufrE9WQ562tYA3FSniuZYuFiRDhVEDkpkXJ2dxFC3YrZcsGv3TUYxa",
  "key43": "4jkN6LufturhZU8GGZrDtEquwjTdWK6wy52L2HqwmQMbvbmSMRPGPAU5eN95ZZhTKZbVsKbTq9YpxkRrReegmPYZ",
  "key44": "33RzEBY64RcCpsn8hqLKecfvHbBfCm4Fp7tmFaKUrJnfUwimA4sBvWiu1z72GgPaMEXkxfPV7U1PQFr6epuNbQaM",
  "key45": "27vTWRA3xxeQGh4mfNRtFJtYiyfahrKyhFYVrrhAeibmm6QNPh7PHRJwgsTh1zrDJMJCskDmFXU8Ktk6H8mdn9Nf",
  "key46": "5smSpFbrN6xfXTPR1UAHodJBQbUYjt4ugAn4SDwg4WTkZxMgV2k8ZrB2Q54CGhtywRfbbUN4zSLwVhRKDBmsJtxP",
  "key47": "4j6WQiwPtfHzVexzEYvWsWcTTUCYhrNjajx7j3gBudkhaJhqqkeKdz8WwprRQXSptX37RrHRPzbYVfwrajikiNGc",
  "key48": "4mvAXDMpDXrAUXTTZc6sxyS5raHRJ4v1ZS9kFjvUWyhPcoPS2VKxdNxv9CTcvoBNMTZSqoxE2Qfwj9C4Y2iMBWNZ",
  "key49": "3S3Ya4jdFDqEYoJXmQcVMEPyH6uhquRH6ioxzZCYov2zEv33smaGuHJLNirTz6SRwedacjN5upEYCdgqwCuDSDSy"
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
