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
    "45curxCid2TmBgGLBENBNWTHRTKBb2d5279eCmFEXt9w9An1yFLiUcQwmTi6RPe5gFZQWtQTir6Ai7WT6oMGVZPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCoJSeC2XbPseG2xV1P1NXXvTunUsxxqgSn7VBVBfh8z1jcAA9SAaYLBXwEjHReXbtWGqAvLDcRAid7SbXdUkkV",
  "key1": "481zp2e5YP4MLnkwrWJPTrNEJUjvahWxWmxY6X5x1LGban3FgkYw5HF9nnuei5g84UwJkfDooPScNgKPVyWLVRRA",
  "key2": "39TU5iAJBZWBD1AzJ8gYPPtQGsNKPrBi3fDwxNFsqnXvP1PHiiJ8uNwZHXwKpRXAPAsMAd1djtuDvN5eTSzAPk2W",
  "key3": "4Mypadf6uPUeni5BmBgAgikerz2h4kgpuH1tFWU7bs6jE2tLSrgr1mRBSqLSwsu42mwSkNwA618LpnNbuZ7FDsby",
  "key4": "34bAV4YmUvmjEtnYMpkzPwnvPJQze3Hs4Qv5KgbGhSmdms9EzUdDLyn9J4hzztcs8s1nuUyVe5LRcV5GC3nAQSbJ",
  "key5": "5KMLhRCjfu9jPJKSo7d2e8AQwZS8L86V4Wo4ic9vn2wPhtj8cAjcHL18R3ZodZPvffdJf8cdQnFkq9xWXVh6HQ7K",
  "key6": "2qgMUbrwLjBqZyAhNNjBbRs915jsmNtY27gpNLYAN1KF4AXyBXotPEXrHgnWRwPBnrqMEZMQAfipJdKVn7xwRKw2",
  "key7": "5nCReQjAcBg5ThwhcSb9J6Dg3swZvYyxNknrqwVZUndPA2SZxeoZFNfxi2qPRHTugd81oyvcWCQTnagRP17peTHQ",
  "key8": "5Py3GcM8ywyn3CTAkkAwDhKaQazNCG2PoGm4hG93h55QE9BXvdjCmbFy751ct1FJSo9sJDptgFThH3o2zjcwmZxh",
  "key9": "CpmUquKJVn2gWAL6HsnYcYf5tFvcp3FLu1egcRRzY883vugdqmDT45qFyzRJNE99hDnuxzxM4M7cP2aGTwShhM4",
  "key10": "4Ue7ojwjmFdsLpxDkrM321K92ic4K6gLWEMJkL7QAF2fdQBWP4kfvZphh5YN4BFrGsnNMrWB3Dospm3txPYoSmMh",
  "key11": "4tTmSxEvB8dmEF3G9bBaPFyF1Y3MGTWWj5JcNj8K6igqRP4EYBd9dL4VzJyU5FaunS7jLNuUecYqgVMbuEq9DS7a",
  "key12": "N5EeGUt4wj1kbJiWpDHGBP2HQuiy218jkdyKTZFTLRkVoHXdpLJD7cFCStw2XvUrwUaQ2xPh7zgAJ7PUKVJeP9o",
  "key13": "3fhTPMYPaQry4cjWWjiEBrWgG5xKfikj535N2sK36KuwFiHbkiZMJjSpFfmJXyoV7s9rhZACWwVXDQK1UMkbiCTR",
  "key14": "Gi5QrRhZ3fuGeH2NVp2ry8mDYcm9HAJTRMgJfJbEc4PxXR87zAESsbyqn1Ub8zbfQHdwmVEhDMU7vmy8gdzvtap",
  "key15": "543fs2Hca7uuJn2mZEyYG4zUCzy9owZyGEzUc3W7vDCqVkfMw3NYEEW6Uzo6vP92WoKjy1GihEvd5Gp892y9zbcT",
  "key16": "2MumhUiaACnt6NNQymaWvWqHvchr7DmU53YY7g8EeoiRuCXzdKDCpjtGP1xf1Zpsa3EeyUmsGuLiEdJBewNLYjoi",
  "key17": "5ynnKfTJovJfDRpuqJ8pZu9jUoPgt4hVFzHpAg387bJq7QxjqQAfZoyJHAGkNLktJLoPQwVTwSig6UFDJKCoAo8v",
  "key18": "auVh9Bfhd2rauPmaVRQ9w1Q54shBaX7awAiZ7CiF33sEQNLNdfAAp3bdW76fGYcLVLcamJtNpjuKEcCqQBnv4Ln",
  "key19": "2PdqK3SK7jYtwX4ZthWnjusgsABSNmJFFtB2sMYiZzq5inTFqR1xKAmUuezbEXnbrXbNvdqabCyvPvCiLNG9Sb3L",
  "key20": "5VFgSpE8FKshw45gZxsFoGXr4tJuUSj2daG5UviX2G43BrqbKKBkGDL1dEQkZWAtWQPCF8wbH6aEN33KA85xUnRf",
  "key21": "2F2oqYe1cNNvq4EumbD4E95oCMSBkddPxsRq2cFcHbNhYqsaPE3TE4mAxUSF9ie32ccMs6tH1V1aRdT8Xi9x3DMX",
  "key22": "3N95peDDYZoZBkrpUbjHyrAhf9aiqoeYedE4HhW3V2j2AnN8ijqWA41EdSCHdGCuqyFcUD1LjX696oc3UfTxKor2",
  "key23": "5SSiEU4fJbviKq7EjywPtfXaVvfFX23etmk3G6P6x3fRQPPsD4zt7QxGm6TBwtBbH3srLJqQJDrp2X3P4UBwSguz",
  "key24": "5Z4hFW6gmaVhLcsuWVSsGDdhQhGnDqU4qpBu22uMSncz7pVAx7C7HSwdNdt5RqeMHgPFjJVWBoaMyqEGC1aaF8W9",
  "key25": "26QSFnC4kp19hD7X9oUGsJnWmP7RGgmcoSW3vTQT2vX9dkk9XjGLrAYkAsedT5TQ8DgEyMCc9uWBL8e3wj9gPg2o",
  "key26": "5wf8dwJMpUzW37249wduEPGogba5zzKMJE4wwKh3VPnjz9nR23iezH2pdD4b6unXsMKJ3iiKGiCPubmQdSSth9Hp",
  "key27": "49KhbWpHjTP25Ysqpp2GtK3oAKMo4yxY1PxyREhq2Gw2WEiNwKSTDmH7iCwqB5VQXgaJK7iBhSwX9eoqrjrYnSkM",
  "key28": "2v1BWs1dzWnkmjN6UAAnmUEzixxbvTQWejUN1xtCjTTyhv6k83ctZkGCD2853hDVJQaig7T3pukA55wpBcw3nmCm",
  "key29": "23FurkGTyNCkn5AojmCC4iPRSgvWKWm38mTUxZuCEu1CL2gLnrLr6ARZ9hBtbXDWK1b75w6ad4D1fBG87HhqAzFB",
  "key30": "2jXY7FcDoBghmNz1jK7VdXZwLaQPC86NGKLei6cfQdjykVQJyKHiYGNDoqh1dQcZLty9rfGoNQJ6TLt6YnUHLKGj",
  "key31": "2bbX5X4xahgBT9y1jvxsuq6YR14qo6gHg6J6aYrMSYtC3aUGDgXBVx3cYF8jgDxHu46xbwUVmSzeyU2kBcUFUj3x",
  "key32": "29SryGNYx5wLeETfDXZHrWwkPGGanEDUvN2sNQFN4cZ65u4zSYE2aCDPF2Mi19qz3KffxFTBVruqTzT8rhsGFy7j",
  "key33": "2LfahwsJih67wKTWfUyEPiNBZU4kYrQDLHpzdKBM46UrThzrHynrvzu9ptiy9Y1LdYyhKozchVByStvcC1ovwfwC",
  "key34": "2PLfWSJ24GuFZeMD9i3fh8QpqEsH1ELQgs1QvQzkoNTSd3Jf1hkNN1Dz2cVeoskoEBgM3zRQ8DgdSJD3Mu9CLF6p",
  "key35": "4q3FFyFiSPigrqJuiPepXpKYk94fj4gKdUNfx4bZUpQ2LokKmb6igcsYqPFvT1UprV7CoNk6VpiwxeLzDafgJKiL",
  "key36": "J6ARoEfNBeMVH4kbR5AkSjJMD8LKBAuPQikqwMTysajLZZWeZkUVPie1EQP4rve9Un7T9tzNZwC47qAAoLAxYVk",
  "key37": "4rhqWhm5r8yYGmjwA5gCH5t6pZ2zkzWZLZqoufwbgg1bqfjcPpdNFKvbmjqkbGNj9hsTwv3xA9eKUbEUUjPNWmFV",
  "key38": "4Dc4jztbFcRn2UeGFgJRLSU93B7GmX5t81x1UuDHL44fJisMsKaV8L77B5yU9t9ASeUhu6Thu5GYmrvcQiGUULoB",
  "key39": "3mib6zayZ2ih7ZzTjA5vHyvgUnqH8bTNcCHaXZC3zPmUVenjZS5WPd4ih97X7kCiAF5JSQteZ3qaL7nHvnqPSXjA",
  "key40": "3j8AaMthbvSZrGAUJmSA2LsHMtXcBx5M5wUdHjM2YfWi4LoMFVPFrACMDfrjCRYQPBX91bmYsX9Z9msqeQdKeKeH",
  "key41": "1YvsZZ7TSVfCTPTe5Tr61egLnxv5Zsu52umqigAhs4t95C978aB4jZJfd1ZXNPPppRGogGbUzaWGTzaSfGQeJ2S",
  "key42": "3nde6UgYg7e2o5zGhW7rWzGndj9QmLvGZf9gWURsPtzen4zLGDZzQx7U4s5cY8qZbZZ8MseeCK8LgprtkmpSEegr",
  "key43": "4Dxn2mhtVVi6hgHmv8yorRZHTQDQpsWkF8HBjoY8LaVfP3axwuhmk2qEEC1YyE1X7rdpCMesTmww6ShPG9LoawLG",
  "key44": "2YNKSAdeW9Y8ZVSx23MKeqFNLo4bKBiagJnL4wFHzCw118bjnucXZDPJ5f6W3nbHRhdYD7hq5q6ynpxBL5koFdUF",
  "key45": "4ArgeAtk7rvPj5nasoL4QJDRZ1XETmr67J84csyc4fGXFJzV9ciwBoVLdgjN1SoG3V5ZpdVrQya7ZdinpSDL4V2S"
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
