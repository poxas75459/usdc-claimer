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
    "JwenY82CdhAacHcrdnGbXqerbwoJsKT8G67syGkCj6DMQd3Qdhvuq2P1h5K5RruBT33nWbWzZbuXkH6W4DC8hzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SdPYFXwF8CyFKU4j6osMTDggHuRLfRFT51RD9Tj8y22sF7WUXVF6zakjBKGcHZ1g5rY35YL3z6LN5Fi8mjWRUtB",
  "key1": "2AJ4PbAYdPB2Uhk7CaVDAJo7XpEc7yXEEZFUEPk6XksdqttPKKHqC1cQmsCQ2gUVEwbtXmwGmoqnniLAVYu1pYho",
  "key2": "2KYuBmvtJeeanoWXPQnCX8ihcAXfcdhgZboggsBnRUbPDeT84EUyxiNEmJprcVEygFFZMJxxKkyx6ACVMoJANKSD",
  "key3": "554zDZaZgfH3ETcgpnsBs6yJpnjsv3uAnwY79qpbvmGzwKZ64oZvAqvtLa6FUC7TFYeCo4w1WmRwhV2zvD121T2T",
  "key4": "3vhSK5d2Ek8sNzUkdVBi2nXDtBt7VxXrqyyAkEC86tTJ463o6yP5ZuxUmiaLEkWtF1FnwrZCT92hGPqSUW2RL4de",
  "key5": "3ogPRk2AcM3GnfzFAjz7m2AnZcymBibvfUFzUPnpj6fw8DpEs7v5gZ1Vh3n8ZGS3th4qphxJu42WbJTT22MgKyvF",
  "key6": "584ZcZdZv2Ymr4SCENSWNSYL3PzG4tYKbJzyGYpt864NaAH6Ugf5ZgHsbdrnVaKNxGU1UJSiX5wZFYSPHqqJuWN2",
  "key7": "2nFTjrW77rHoLEEGSTPw9KVhhXprrfsCmasyjVqDe9s9EGmKcXyYX7AMKfpwLTAjn6ZhERUKmH1EfaUDTT6CXDpL",
  "key8": "4SLjw5RQnfkc5yP59oiYdtaHrPLrzKbWxG84P1kB1gZb5LnWo2CkJGDTXUPMQCwVQV54NyZEdqjYnQz1c2TzVGK2",
  "key9": "2CF2SdJuBJKtuci8BWFeYKsE2hA5j24VKyGCBe437ZqNbQQuMKX24EG5PTQK7mEufM9gv51VFc3FnMRvieCnmF3T",
  "key10": "4AScCwHnNDvZmV3BtcWxCWUENkmDXuFdN4KM4BGb5xW6qLaHP2ZdaMPyNiFtPJTxPD8ZxRSeQyJBJq8ResMbkK6",
  "key11": "xNuqy6AYyG4n7aSwGVFikFTVQEfd12HLvz9Pg8AJhsoEyYCd85tyymQYzjiG3udsxzfd4HB4vdTG9ZsLjpSDaii",
  "key12": "5mEN1QQt8u8K3aBvZhoVPGP1btdw19iP563u4kKkAg2h6vcWvppqUgv5FWhWXXJTkkSA2rCz4V6BJy4gURBk6SnU",
  "key13": "1kz7tZzmHwJea7gkbbvsybxLo9gyY4nxnTKF4k8yga6TWfWcF3yATQsoydKjGomnSENKy1GvtnYZ9QeqFudAeuw",
  "key14": "4m5WqYWGtkSbPsqfjq64avRX8nQVktSPrQTimQ3yotGAjFpE7dDjHg4Pweq8xvhpL92Dbn7cFRmb2UZ9qKkizzGF",
  "key15": "YvZ8VsdyV2rVauBxyEiiSrSwxyEtT4NxwzqiRCD9CjTrk4CASRAriNt63m3qXJew8g7zXK3MbfDCEPNXkG4nNbJ",
  "key16": "32rmyLyNQV7UqZFM8LsQHJ9PjjRYnwM4gtjAABU3JSeSfpd1Nni4KnDhsJzAvyoRkBDwgMba8wbrZ34SLLsgrGGZ",
  "key17": "3uK1xRqoGsVmyuqoAQcrVbEPcQV1TRUAodJQurPkNk91guTh5GpzKvNd4peiYu3FjRAP4XiT1WoUP2GLp4YGaxzg",
  "key18": "5PTTGhssJb4toiGZf8h2FwFS3b45X9GLfsBp9hDeRuHpVVMAfMhG2ah2F9MmHQbj2bQ2YafLXoC6LWLLLBQscHzm",
  "key19": "4348tCAF9kSiSwtBWBAs6WvbvpvNd1J8h1DvJxXXwtCVx5job4GKcjTjbjozBd863xUXCd4c5mqQWH8Whci24W1r",
  "key20": "2porxGiCPSWQsF7fh3cd5aCmbzR3atVAkCYRXE2DUbKyaiYUSKB4hVYa9UK9C1KeyRnAtwUV8m76cpjJQ5PtH462",
  "key21": "46B3ics6UNt8FWZuGHRjeHyeX3SV93s8Gx9CxXZmaiREy5x2WmVxHXtAxdvRXr7RDPcoCsRmyv496qcEmcoYJ2w5",
  "key22": "5cCitufBSWLG493mb9AvnvTMpcXNyQGvvX4jqq4ymPTxiWQW7UwHc1FTaSAQLx6bsZg21YdCX9SjV3raQ8MG6jrj",
  "key23": "4k7gLno5BYWGKpEiDuJjfn6jrxeetzopMQycitj6EZpUfGAVrR38VRhimyBjP23jL6tdbzGbHP9eWwrgx2RyYTVc",
  "key24": "2iHXKvVL7czyDzs4nkYGzo1Aq5aMGJoQHLtLjm7JCZa7APBsDRKecyyNvZGBpvzDYCXZ7p74AQc8dEtJDQcK9bW1",
  "key25": "7MTdhD8kh5c7HD81r6mJu3X3Hj3ojnDFVoF8qwfHzpf3sjEFAK2fqTGsQPGuhYwwwrorDk5k4Y9GAsXi2ZzTisz",
  "key26": "3q9DSxFN2PNZjjioHRnwZMpCE6raYt4LREBoB1bQYWHWaBdXxM3Ju6KHiZYVnH3erJxW4iWFPd1q9qXmHFUNvahc",
  "key27": "3oPbmG5W3JcKbZ5F8enXGXqB58PCjgvYX2uGkW6bafU6Unorp2QooFpTJ4tJHfHojp6jx87fFZiNuWSjzHftBV3V",
  "key28": "2Dm1ybhJfUvwdyxktqwaG42fRpVFJMLdRXyAYzTjuL4n3bfE2Jy1b8T44PvB2w6HRrt7gM1PJJ9QR7bW96cwALqY",
  "key29": "4yz9Ghryojpq1Fet7kcfbFQReWca18ayJpMso7fQpXCpBAb5mCojW8JjpCngExe7ijAHHH9cN74354nAccbYxLP",
  "key30": "2dFaYpGKRwbbrR55Lb2AXgN692gXZgnLG2XWfcgpZDJh7kXhbK6ZNvXQJ9QTAQqRQB5PH6yHAUfjqGcGR79Pzu3B",
  "key31": "yWBTdGpDJxvC1kmqpZ2XPfBM22nDLsi2nG5zC5ymFhSGaJKS2eagAnSU1eV5r11WeW5DABQHztwWQckWjp2wT4g",
  "key32": "3DhfWpTCc4Er9f3bNaEQuVAAAkVLGu8yxKM5eHkNvDc6kL8a4KpqXFusLSt16VbtRkkHd6fGoE7LP8mZ43FeTkk9",
  "key33": "5XVaYyXqp2WPXGsdFnCbckDpM9mMx8yTQqvT1w7Lgm6ubSxWEYotM1damqzsT6hVY1s5LxTG7cLwtufuG93x2K8n",
  "key34": "3K7jPLfm26fH2UYseNPfnF4f1ofFPAbGBrJQWMkQdQNH6HdSAp4muyDiVY9po28KwT8wHKGF6TFAp2UmyeX5qrY7",
  "key35": "3CtcqGfd2A2LSsEDpNYiXHSfUD3t5WvHhuzmK84rkfBfdRVuVoDD1tN86p9haidcvG3mEx74Eo3vFb6zjp2WcBBs",
  "key36": "2kX9xiZjPSShukeBpWh4uKDSVieBLHhDKcJx3LoeXdYZ6er6chaAPPHwpWiRo5D8axSSxvRXucnX8hndwTw1Z3nu",
  "key37": "Pbw3NkPWWGd44yyMF1eVeg3pNxbgqdYFE8p2ippQ24pE33FeuJ557opVJJGmTJ1Lgz6RuKKr9uCjJBAk57RbmWS",
  "key38": "8ZF6Mkeam69tS11CFaQrq4KnW7L1eQvqU4pQAWuX21yc49wXh1FkKqfTN586EHjsFgmaPnpXh7ahgM3ovWdgRuw",
  "key39": "5G5Km7UKVBhfuszmDBvnB91diARGYK17rJikzzqDGhRZbJoZHKAM3cqWsYqTF8QTmRpGms9R6TojsaLFH12tw7St",
  "key40": "4Qb7oXqzAMBLUUvyComRycvrfcym4AS6XGNZvbTz4JX9sDSKn6AnxtGXd2gsSVvZUbP6VvyXs1i587T8t2BLXsac",
  "key41": "2kxdGviHjCtjviXaKjcXuSDhgE8XKevxDKzzS3ThttgrD4BCRtj1r4oeJ2iecudEhZEMwdd94bw9t9zrh54qY1CU",
  "key42": "4dVdLem3GtRvKQArR2NNws6ehzN4cnDRXMm8hjDPQLHidCXm56hvBjixJtGsn7wm3CmJp4NMX5Gr6FdXvJ6edN41",
  "key43": "3Fb4xeLeBrTUZ9KZR7oxqefcqQJ5GVRQZrrs4f6nqFXmbSHrmuYtEWCXPLPbX5GDsgQnJeFN6yRzfw26LCE5WVEG",
  "key44": "4RXq8z4hJ72DA7xhXUzLtbutG6aF5cJbfFaFM8wSbfCUhN62yvNfq9VE6swVL5mfdBX8YJrFJJsuS3Qo9PQvuGqN",
  "key45": "2DvZJwdVZtuYUM1ZzmYgy4p4NsLp7v3NhyR4rkFvd5bjVQdrRrV52en3WJ9cJr7mxaKrUWx6fpdBLTctyHZjry1N"
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
