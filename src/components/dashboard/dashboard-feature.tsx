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
    "3ndct75CmMiajyRVk1pDejXrQdP5mknZRi8nPRpXTWSM6z9QBaEXSV2nGjDksavjftRxQKsnoaXHnaFUSdB11d4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eoz38FAnqW9fhTNJx9Y1BNRZvxqqHw45uBnDCJZtgDxEcQ9iVW1So2H2sMxeAmHBSeNVEgWpoCfUMY9ass146cA",
  "key1": "FmH3iJbe4912K7uh6V4aawvBzHZcbzRghbeStrTyQgRFzT3s77VrRwEHRAQ1Da6oNUkMZd4PtXsD3byrVK2QU2U",
  "key2": "4AezwApyN8nfazxVoPr41bkaHcp4GN62tkoiz4UshRxJWMWcpGGmUbdftZuqRZ3sbcn11k1TFdTbNq7GnTtgRb85",
  "key3": "3sp3rLcYt9p1FmhugLr5vHrffYGRcTjKRMVvBhd9jFo4V6WFD2JFSBtgov1SyoQr1YAaaQSy1M1djPh1EFLRF1QA",
  "key4": "5ZvGYArWsVrJcUPVwnqdKkycw3eLmNMUAiz4TWJNxAXu35Ty7yo5MQYrJ6RpKLC2XHj4XkUoshpcLr9cWJnDYz5u",
  "key5": "NAgPTy5oEqskvk1yaLdGvtsv8fmL7kxVD6qCdoiPJ4afbUrC68UWoYF5KpPG26D1cXVhrjkHKvw6uQst3dKMg2X",
  "key6": "2mENpNabGDi2MVXQJ2H97hN312eQWCzCo14fMbceqk1LDx2vRC6g3kZFukEL69tMJ6cYoZrCwTej2ymkMnuHsExd",
  "key7": "2ueEJi8sAWhRKrH69kogn6Ud4bnjrs3kBCG5bdiNYNoKHpwYkKfS7kJAaNNMNX4KBgTNHMKNgm8BEHyjqHcKpeUn",
  "key8": "37QT4YUnSR7hJMGmqnBsMTCsgvNFh6aWoHg6cBdgGHSdfpVEdzMHRQSd67Ez5svAyy7G6UnbJwLNYWZhXtcBrY8s",
  "key9": "65t5Fj4r8KazvWaykSkG94x6mU3L9RbkNEyiBLbQKTKdWuMLqRknRCViR9FR9Ap2bNg3auxXhjwATq56JZWa9PXd",
  "key10": "3xPDVxCqUnwKoMuGYTFk6odL1FwsiVUFnVCrevQ8ZfisUnmK71CafFtVZhpUL8VSaWajXXbWkUpoAmQVJgHfAnrv",
  "key11": "2k4qfdtLFvWGXVnaH837AZwaRgp21ypmL5BDWGD6wxpUm3iKPby7qf2rL4qFwu5fK5aTGRNjYxHUkPxVJbryNbxv",
  "key12": "2XJjLof8xfMfxdzFVj2cwpL1wdw4nw8vAqjPoA5kPCyA8hhFFagmTkgZ2LunndZphLNnWxjpKGQN1fsEee542vCU",
  "key13": "3NCQkgzAuDdzEZyDZVKhYD6taryHLjHc5SfeyarwcrSKxKxheKoxh3bhqfbwR5UFMXVCKR1kPVm9F9DYjJ9bknYi",
  "key14": "MvjQMux52QrWTMGqqo2xbaZoKZ4FJXj81aNsErY5sNvVcnBrfs29Yk4pSM2mBN8WSZGc9SNZDrTNnbU2VHcxaCw",
  "key15": "4hrdB1JMUKPR26WKcV4dia9kFpSNWR7MxLuffaBJAQ1vSMHVVemubR2twd3i9KHP1xgjDSxzZwRB2oCHN5tfvPBs",
  "key16": "2Ypom4gkaCRctVE9PDngbq1wPnqPCBASZKhXJLH6NAuMoZhpJ7ZRi7M4XiGHjQN3muPtCQsRUALuL9L2CPfDmA6E",
  "key17": "46z8odofDW2vnYJC9GJernRSikQvfJjozoRjUaLupFzDnaPYZgFo9FvHnaKETXktJtZupDgfgs7gG4ecpXZT9t2q",
  "key18": "WhEC1kQENBdh87hA4oRB4NAREcuDghHXanRM6FLcAhpGDsBhWqc7MPmw2Tkz8WDifKvsKSpr7zKvXuNzmKtNjFs",
  "key19": "2esnHnaaYS1jfbCsP3uu76NetyyoCJ9wTJ5qS3UR5DqPCnFnC9NfABAzMFnHSYSUmvvNBFeiv6HfYQkt4NPJYrPw",
  "key20": "54dK7Edh7hjcWRcKwJFQ7AVmxaBknwtp4BjDdrZW6bJMp82eW7w3vtxact4RHuXAiKwMEm1xhbRFPL3arXMSEjam",
  "key21": "2ktxdB7rSxNPVVPDFhbRuhwM4hLajRvWrk71JzuhC8NVh8RLPvP33CGU1NgUADt1hvkdyRxXN9F8yvDxusUeJiGb",
  "key22": "3kFUuybKiudZM26QvJTykMVriKLjgJMpPszw8bPCHXbUtT3JhRw3nNjaZtQUammaQTmbCDViX4YZaiV5WJM3TM53",
  "key23": "2UFY7beA36TrP6sc9u8zKDo2vkKKvgLBAuJUPR1kUrg5QMHqmefUcX39BB1GcG8GGrNcqywKAyPPMNUaabS6PXRS",
  "key24": "4N1tbFq8rLZEErfnjZc5YvcbCn4FnrDDubpBNZQBGLXDggi8v5AZZvvTUXp37JDtqNuiXcDdjGKJbgasf9rEKpAH",
  "key25": "25RHGHMCTZpJvCfyAXfAg1ZMNkRHCML7epyx4TQP5HSKe6aSFyHYcJYeACT8zuac8NVE9pX7vFHcz4NdsBYibV9M",
  "key26": "dMBuWthJbcCX6i1ZACFCThPWH9LAbxiGrNULnQpHTHEudmTMLwZ6T6hqUwFYkCK1oq9Kd1SbNcLq8bU3Zv31c2U",
  "key27": "2izRpHmH5GctFN6vzbLeQNaT5T7i5ZzF5GiH8JVigUnh3ziiL1FkVZCVJswj3B9PCurB1W9jV1ojgRKfGsTbdFUu",
  "key28": "4fhiuitU6wXn4DvkzxQz5tiaeabFyo81bSovEh3fVnSMbefHzq22aE82sHLMaXKtVoAx7xGCT5EvQFYdNbxRJ7rV",
  "key29": "3w7C26KVSETwZdAzhHeYrPhwitdrAGvx8qfv1rhb7vhF9XToNkM682knZCdF2wMbHTBh6FMbDatwLL9XULUkDz5w",
  "key30": "61ReraTnN11VPjAeXQ6ngcXjrxHqcxTGuaWW87cpzqSf3rrJKAX4aMa1E3id1eCh1sL82kM6g8NNyS1DkLbnkoxd",
  "key31": "5NbX6qNK1mw4Fmz63mQxyxnBub9GnqdpBSdgn5dSy5sMW1fhNSVFhtR5qwJ62ghKEqU2hFkufyr7QGkg5WF3z397",
  "key32": "34iFL2jaZS2eXmMkrENx5EvdPrJh29K9iYTs9f41hvV1FJmVtgsDWvxyJvkvfZiSKNUowmEHdbZc9maJ8rTVdSwi",
  "key33": "5sLaPYPbeGSLFWd1p4cGdjxtZdB9CuAHWMAZX1XjYYd7kuQep6eE22L2EwLk2uknBvvikHXmM8q9qnUzhUbDGTwY",
  "key34": "3Dyh9mWNXaz8fmSQDpg1GZDgfKZQPWaWec5Nw6TaHxKo5RdDYZMaPbcmMw2QbLNTm6a7sBYJ18xBc1p8HHPMdXZC",
  "key35": "4EAy6H8UPNUuiWcGTQ8ALUgBfiFDZALEodR4r7Fivrjk28RYnMLv65Eqr1M2atE6R9j6K8gPWduNwW6etsgSpeUf",
  "key36": "4QMkRjwkqcCjNanb9VRyWDF5u86HzPwsLojpe7U3NF9616QF3H7UkV7MAeFaY8PSjRGizKnWuRB73Vos4kitor7D",
  "key37": "3X34nwaHDcFvPgCvnBnYF6YXaHDHjqBk2NtyMounbMYBDeR2fTsC65SAEnvZM9L6AQr4QfrDgymAHTb63BuNyXiT",
  "key38": "38iDoCzEmvrRPzEer3RUBWqiy8gZ2Kcjx3wacENqGgtykBmXc6HEAkWWm8zvgB7wAwzxnQq5T2CorU5FCjRaWQd9",
  "key39": "25bsJkr3VcfiTRrohWR4HyYe2NdXtwapQkdGmFJhWF6GVb6a3AY9f2RqV1H4yJYvRMYnGtCWFoBDWe45hCp44UkH",
  "key40": "2WCod7ttvhWi3NByotA9VDjKGpRAmGR57MmF39J81wtbGSKwreSKqgr3zi14TzbNk9FbXCkFbTXrF3T9Ne4LiANg",
  "key41": "uuQgRn6CYCXMEys8ATjMUpBmDtTPZQjzBpYukJwZUMZtBUGU3RBVkbRCsEZU7qWgniCSpugQw2WxxpPrDPWBpEz",
  "key42": "3HojqM5L92hYi5kEVw2iKSy97CDeS5DDXwFb1vzjTLVNZcZgyEECKpWbe8mgB4ua8jYanisGgpHJYpvrhLBkptU4"
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
