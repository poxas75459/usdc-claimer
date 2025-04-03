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
    "4m7Ffcv2ryuknN5sHnE6RkyJgJQ6iy6RWWuKAQoce2HoLpRvyUkDCPzXiBhZQsDXsSoT7nAJ21LqBj1aaWbxVP73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRSK8kEjKeMC83PjnK2cJCiwfycMKpMtYZ4k9SF9bZ988BHFQNXt1nWQZ5Z7rwe3ciozD1JT4EK1GZsBEYKS6ge",
  "key1": "425tMYPFoYqA4MFb2JRHnZxUFuy7h9Evbk3cndzfj4A85y6t81jZGfLSgSp6jcDB8jPwuAd6d5tSNZiyGe18PJjj",
  "key2": "4xgvT6gmWJYnbjqQ8kAfwLkLaPaQpGtVWQYE1zxwFm2NiM3jCw2mPjpqZDDqFbFqJ8GNkXvDjhk55nNvYk1qfWxf",
  "key3": "4iAbhswSFeRJkLZszjuPyyQN7Vs4mT4WteUsfcEcdema7XcJLsr3sN8bp1mMWr7vWhQqPfHA54RsEFonQwcTxEoP",
  "key4": "5AT5znuQGZxF38ZG27udcWZt92LNCZ6Vr2RfjCugYgtDfsFEQt4bXn3zPbQBh8tfYPwwMTUhS3HDpbcphfa4wPjn",
  "key5": "4FhvSHCsRbae1VJmyiRq5detdYYwQNiCgkxYJQgRDNCpSnwnBALSFeNJvgKsSAphZ9Ns3CbZBCpf7CQHiPBz4nx2",
  "key6": "oQ153QydQs1rXoLQmbk4KUtXaWuzoTGmC6ymC6n29w17h7RKZ3DdbCLPFrxSLSQEUvyo61drkpLZSTtA4GJfgDa",
  "key7": "PARaSYmHE8wVgMmVhD9CoPvRpnzAHCGPugioKFvRyPh9XWqkpHYPRsyKiFsAFyYpL35DGUu4MBC3qkqt81meg4S",
  "key8": "2VJgqYVe5516mMduY5am39gLJaFvV9X8cCPzY5xszwdnFfHqrGrVUtX8nQAY9MTFwkH8gFfbSHs8jjuBvYwEFUHZ",
  "key9": "5R6YhUZtVFRvtwitHGcZbayxDw3CMhZo9KLhS3TFhgo32CeeQ1mTq6MEAjiV9ohEV91f4RPEAegJv8oPAndPhhAa",
  "key10": "3pwWCSACSFnJZqiUvcxxi6yUYow16dAeUiWzBdc1xqTY7zQUkW8wvLDDjwC1Maf8ATdPUaqP8nC9Mzn1qJx1Pd1f",
  "key11": "kceDfdC7zAALTgVd5FrLLFWAhknMfet9H5j9Mtphf4M4iigm86B3ANqkGPqcPXc1AoXu77fqzEekmczX4HyKBLY",
  "key12": "33b9KbS6iVnxfaqCtsd7YaUAD1jQrpLTXtgykkz378EC2XhoTp2eTS918kzDSr5Vz8XQhSMG2F9CFZuDfxqR1mjN",
  "key13": "5wRd8aUWQkCiqapZT3CrB7oe43wVMQoeN5Xr2vdk6woZCdCWHSLobV41PDY9gQwZFCLJKbYvwk8HYtbZYRRQbajw",
  "key14": "2iVoVdMoGdsxi5SkkscnKEu16EnULzMa9E8JyRgypkQuBYgYM4SuvTr4fv6NFRML3ct2WWeQKiEU9GHHLNtKnFb9",
  "key15": "5Hi31ZjrS3iy7B13Cxc6b29k6UaZZ6wfor2nZ3Ho1KThmLrdSFp74ong8Ax62SKGzZdWsf7HCB78NakXPMDyH2Xk",
  "key16": "3B1Hwa25E9A4bAWt7kVxqpxsnr45otshUW9hwrDJfB2bgJYnpSd5o87o78uLVtnvRcnBxWzHACdF2Zx2cRGnuFLA",
  "key17": "4qEaMWA5z4xeEtKscTWm6UBuWQQbhZBA53wyeKcQSBcKtDedSmVXKXM38pjRsXMeSLDbAsfFjPr3u6g6f1S9qvWo",
  "key18": "4BCQYe8hnxAwZyPmRrNnDzNwix5hRQ59DSvZhcmXnyc8651hYY1Kai5PL7TNNHhxUMnfmdWjD9AUPUBALAChWAp",
  "key19": "2ABVpucGt86kkVWy7gfxRqzjg69WM9K9RmwZAyfzT4aoz5CsM1A3SnQRVRLbLBPtGLoxirGubSVBdEvEcHoEs14m",
  "key20": "4o6sEb3fDPMhaoLLoPPwUxFHNyps58CZK2XVnz9qqwxxSLL6PQFaq88HA5BAoHKRBHYU31nH8Xdug432AYQ4bTeK",
  "key21": "5eDv76gvebj8UirJYFZjEbutuFLEMqQmmBmwQvDeRVPbzErTnNkva57JVrgVZgo38PQeYFkmLEyCGhuqDf1kgkpz",
  "key22": "5QTSubFkfkBbT6woa5ABuJh3q6EhFmFe8BzvWo2bEkSJXUtDi6Ft7bCcN8rSz7Wh1464ZQ1b3XHt1bi8snfL1ckv",
  "key23": "3JVDXQMa1fNitwXnGR2Dx16CvpLgBd6xhF8AcQCrRuzZHowDiyoX71vbcxfaoUjosnTDYB2AiPFSqQNVg7sPn3dF",
  "key24": "fV93G1WtXoqyKzP6psD9evNeLMy8M4WN7S4kYircWVyqeF6NxzuZrvEqhfa9uxSjPD1u1NqwFUBXxAa2zBSTr6W",
  "key25": "KpBRH87yFKZvXatvramihXMrpXPAHtY4VXBc9wAjUKieQ4P7PWwwLHmJMjA4uf8JctPfKTZgc7zZyw2mUL2Lk2D",
  "key26": "5qms6E336nZVhojh6jmoPacM4yfAwXX9CXDzcFqVJQK3jubhLrt6oGpFD6jkWygEgViSqaCkQnREipFKLRSEB7F1",
  "key27": "22H4G8EttarrLoKFwAXEXrtjtCxaU7xxu7g4YmobLuGyq9SRDDontELLgV22DYaJgLJkFMEo9X23G7D2BbjVEFUW",
  "key28": "uyaUMpwLV7VAa58rvssgQNAP9JvUFMNgpn4wR86Aj983npebBAZkQxvvigAiEeQ9ZqVP3vz4DKvXYtpso6gMVDX",
  "key29": "4aBUWUTThmJ66eHeGFnvBov315NJFc4DbiH4Ck1QLd7Tro3oxy57oQuYSy62M24UDkgZSpHYUpYKg2YKuTeP1jsm",
  "key30": "k6T9oH7pW1Nf4UA2QTpTsikrc8pua9RwqdbYuaMSketq2XGoywJmqJTdY622Syad26867LAzNbSxzkmQpzhxwEn",
  "key31": "5HBfivR4DDKdeWDohtrmZ1MoM3W8SfiepkAGUKmS7WvMd6kv7k42tWqsAdShMbinHRys4wVTMJVcSBJkjn4o9ePQ",
  "key32": "2rkxeYXapYuAueakH8AXuooU11ThRjaJC3CkP2hiY6bVULJX2BDJKf3RFM8gLJ2tDK921p99Ny6VdnwTrY5VBANs",
  "key33": "2gdh5xtHCNhQLqWFxyA9zyJYoUUSp1FK3bLfkHYeeVsepCt94KmczzZRB3wkW9Gx2HTDLSwYs1hRmR2a7xZkXZjC",
  "key34": "3jYTHX2gDcSxyFtCeAhYcKSNxYCo9EqxoVMcNFmEyDkM96utYYY2vBGnM2Uv4gCHWyAwQgQf28k5tvgAY5ytSWDo",
  "key35": "MCAVLtnFDDrB2Rr4RnzfArNHnFYifNHi84u5ETANZrsvvyVhKa3xdcdVrxjeppGXvv74aRt5tXe3ANAgXrKD3oV",
  "key36": "4riadLKwRqxisPUmrYJLqHM7Whi5jWdDLwt1EC4wxMaUNhCNDrRFpotVsLKdk5tWftoTfkNvtYT7Pz24AaBAcBFt",
  "key37": "4oT1mDcZ6wYYsDHgKq9jsrqss8nzG7KwMQ9E4AeZVgLMwq3je1BjPFr1tSGeXwnuoMVwwVqQVNhAr5ZqHkGYPCQz",
  "key38": "3D8BT6b2YHAvBReqdVcHGaSjKpSUmLQtZVi1DCSGUYZdymzAkmGUQJdgEQihuR6qmjXgtVv9eJF19K8zhvgN11Rq",
  "key39": "5s2r7aALDKFkaBRHx4GpdZ8MTqkkeJCFkCvXP1gJWv8aTrtzPmax8hqm4j87Kpe1oA8JYnGXuLRnwhhiKyKkffP7",
  "key40": "4S4qsauprks6dKaiDdnvT37VENQVWZbxhAXDG68Z9tPUdDKvfBSU6E3To4YoHb6V4ULttfYLNttKt2PtBc1MtqeR",
  "key41": "4UqJK6jJwEdzQTncLWdueXAETxEwAmE9zqyWddZ8VR153KHgaqw9zArKLuEDwq66Dg4XiPeiJfET2bDCwQDfSWvy",
  "key42": "4R4gUUgrh7s7CNcW7R3Sj9sPcPX7yn95gC1BXpNeRPSXhWpbrMCNyG3sbVGHy8ioFH73vULSFLKYMYW8jeBaNUZ4",
  "key43": "4HHDzkSXFXAfQBwLZKneDq2QxDD9JY37qxRAxWZ1FxciZHeUjiCMEqXvC46TMarHHRh44QUE1rENPFLE7RZcGXbK",
  "key44": "5mZggeSsqe9Xwy8fG5djX5TBrarod5YNieRbLc8A517CBxyW4Kon9DMd16Q28D61p72rrfp8nDPhK5KmF1TMFBza",
  "key45": "5cCJPkk8F4Deir5WHhVuW9Zbg9LqYqSS5VZaSmya8oFtC8bw3HT2kCS2xv98MoSZhacHaBMPdeuGhqz5DhwmPiuS",
  "key46": "YLELSVPxMGiTSzJd8UX6VdyzFqLDkrKZoAUmB6svW7yK784wgfG6EsHFdt1WpLh59YD9UbedgEieFHTKQWYCovc",
  "key47": "t9dbNcrpK63Njn7pxyPmg52T3Dy5MpAT9b9oQFLEbmKABrb4RdxRezACBbhpL1KN5bx37yL6D6WbN4CKJpVNM6o"
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
