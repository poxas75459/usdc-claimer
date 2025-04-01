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
    "2ZTb4gw6MmBZ1v6M8XNPYWVbc87TRveDXo3DaLuxZ6QPDNG2JLvdrRJqTCoZUv43WoyQTSJpHbRWvifpMBpQAzbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41MqjNyyTrEmp1qNgkAaAdaV9Nz3YQi9hb7QZo98UNCteEj7tzgBgERB1eZmLJeB6DPZhLWM1g5wHVTXSiHEmJMb",
  "key1": "CXWbvLXLDMDZcNoP7cbuzdW49c59LCkHBM6gYb85nWtUv8JuP5nufKdd2dmypFmcePx4vMCdbq3JgeLrsyQ9yBf",
  "key2": "4CVGq8DJpW7hMnnqDatnbfkaUungao2oQ1Mfq29SBUu47AQ3mFfKfeP5td4EtziDpwtcjLctJjPLkk8e49ehFjNp",
  "key3": "35USJZ6Hdg3An1oJp17trSpfHJ88mpkwuwpfLUn3kp4VNBrdwzJvBsoY5P1jVTprmPnrb7TBFHAHoJD9A2uM8d8Z",
  "key4": "5tg7EL9AZHUEkQ7efiN16jfHYk8wdCumhoM1HX5WPojfe6Hr7Eghwscj1kVGau6AYC1JyXZaQJdeFszUgASaJCi5",
  "key5": "FHr9V2XnieABZWP4aJoj6niyBh6jKRAMYSQ7LhCZee3kGGrYqiFHyKfHqYZ1VGbdf8v1NLrmppjCjavNHMSUaD3",
  "key6": "5YepPa8pH3et2okxrDhdWzogx7NEb4xEYdsYirkhNDoddgwkmdDMcYmsFG6eQiKQs5iUC3fYg9h2yr6wX2YfxV5j",
  "key7": "51DG7HyvpnegtY6zyK433Kty6GqQQJoAHcBZcE8VMFu7rPeTWqM8phYPv9HozyXi68RhyrFjqEi8qLMstVwVv3eK",
  "key8": "3CCAbzH16JqzsWB8tke2xaGNWuPsxLi4Si5TpFAbq1j8yWW89UfFJyConqtkefMfxuKi6FJRd8A8f8vaUyQDhF2T",
  "key9": "3mKhyV2QXKk6WY3Unxc24exBtbsRDkVPC3qep2eDM5NXxX4GEtmCUDqf7ddUkR1QWUosqBH9yNNh8cwSjN8W95p",
  "key10": "2w4zuTE68T2TTpths6nL9rXTtUZky7jPaHRsFAKEYZPWcdgmCMe5g67iMQt9MX2CDQ4NubqpmvXM8xKk8JfyvR43",
  "key11": "2LXYstvQKwYFATmofg51PqbU2f1kELNT1ayV2AMjAAqifkZvafE2yny4dn1eDtZNrhVacJSRsUdh9jTkaBVsHT1w",
  "key12": "36dqsn4gH6Q3aKGjRTwRHC72VPoTqcKRCuUs1nRhdj4duSYAJkZPxeKe6u9zf2niD3TvXs5cF3W972czfaxfj85L",
  "key13": "3akw3KjBxXbWW7ZfmVuykH3Ab6meQysMyZzwPSDM7ZnXpgiUjuAPSddAgJqE1Zc8Q7GjQvtNK5Cc8BroEGcSaSYe",
  "key14": "35jYNPJ9PjyGrgxzkvzgfTc9UCVN5EX5qJX4rUNtsHFoPoJ9F4UrkuPRRw7v9VpzAo7TVxama4xdEuyqgLzgMKjA",
  "key15": "5eW1SVj6pc6Y5uvP23BFAFL7RnpnPysKsrqaquugWfbYPMd4spVhPkB6c64cET9DA4dKWDzxHshRQGcvE3FWMoL1",
  "key16": "4rjesDvWTdMXPrtvtUfHDbJa5VDTPiGKtfzuTtbRmYTXqNkJNt9Tt3ddNPTQzNeCGgKs4rvzGKSHoTZAYvWVx5yQ",
  "key17": "EZz8Vem8e5g1TddafyhGqQFQbyQYkjjTJaKSoezbKtmRKAxUXyLtQP2F1dDynJVi1Jqpz1nYaCBq2Jm8yM3WFLr",
  "key18": "p7dMUoaeMRnbfJgikjBg4ht65QeFgkSFbW1vurzi3xpyM4CWh66uetHRNfNt5TwXdvHAm3LLoPotFiAJMEN6si3",
  "key19": "5giEQiYuy18qpiWKGewdL62LgXpvtQnMPgLjPNyzm4MWjFvsTSWG1B5e2nNZG5Xu9ggVfjXDsgFVnBproTrWTm6k",
  "key20": "4bFYGNdUtqgEjaoA8d7MZWngATABxDpNj9gVcnWTSuBuYrdsT1uXj8w3um4kJchNXyDJPh8g6NLVbno5D5Fr3tmR",
  "key21": "5R6pnNieJNjLvy8d1V6CYA7KnWfHP5SrgPuHo3RF96SBDHPtJ5CVK47C214W7T48yTNq448weqdgbRTJB3wCr7aY",
  "key22": "63bbsVdkQZHzbjfchrKEQRySWXrbZg5gmWuwYJdFvkUq9pA7jK977UKgA63qJwA3nbFM4xM9HE5MNQpS8UkGqSp1",
  "key23": "37B3mCxneobsTHtuAisNpyQwyArBByXgkk4BPXA7pgu97HsXDwL9mD24Ji8qWyckRykJWMKczj7iU3RGxAzEpnZp",
  "key24": "4hqUbzXr2yb6Wvicb7zfjtXfvJqR9RFKTYUprJEJsKnoQAhALaJp1KUeKTLkCpqH9do7sXtSuHswCq5KPLKdtvN7",
  "key25": "2Y4DBX61kChJCcqi89373fLgRA2E5T1kQ31ixNUzuTBMRpQDvwiDEN7seHTGGodmgMV28uKxpM2yQXzYX7dDrgWf",
  "key26": "3oi8PhigusMA1296uKi4EjpV3vM6RJw83krDdppPRDUutynYDJ5ML1M4Qcy1aLKpAcwhDKWA6ud9ZasBJv3Whd4v",
  "key27": "5pMK5LLDpwZncwR17icuaDw4fR1555UdiJBfwwCvTJ1McrAhhRqPzpPrHkuWQcLvbnvX319QtzyV5MSs51jrpem7",
  "key28": "4XuxviAFkyVKHVpteakKFepXpPEnNVZvGzPCiD84Twpdfz9BDAorteX8mxyCft1bZ4LBYrFJ64XnjLhFtVjchwBZ",
  "key29": "5Vs54MHFFEpuH2SkwaNYeSEdqNy3s9qrxZQDdQkwBLJP89A9AA2r5GkB9upZ1jWEmKA2ox3u5aHSi9x6nQjoSBDu",
  "key30": "3Yt3CLEnB41DprwM35YUUKtpH4igfyqPk4ky31sZDDrakCcXCGn3yxsemYeukKzb2QkxzupZ1pJ1Uj6dPbpRER7R",
  "key31": "YvQyzqdD9Z5zx5khNwaWQsLUycuM7H5R7HK4drEEN8UoHDFwAonMUF1HqiybbkzVxKkdc3XxmZC79XSLKdU8gkW",
  "key32": "Z93Xvfg9nnWGeDAk27QwJoS7k148wtmgzk7kn3t4cLuMDnwqYU1vXYF72sGiKk3ZjMJV6iApupTFLy5RzgXPrGB",
  "key33": "3FEDDFsATmy8abMQtmGcEnuXZRPVdCFDi1Tp3qt9euYyKRdxhPQTkFXLRAgoRPGHRxXxHgYhZmg1w51szkyDMtF5",
  "key34": "2PrMci3EHZJKY3syHLefEBLS6qArA3QMnnakh316HWjWmKdKsTvkL5KSVHraPTqjj3udRHrpGqtHrEJTPDR3u7kG",
  "key35": "5gM4eEUixAvqCV9dWXr4gxY2YLoCwkyKmaRkZSoTsgGo2JLDMZkEzem9oJYC8FxCDHZzV528w6Ek1s8jvL8DGEEp",
  "key36": "42rjDtUHyNgUDfEWBAruBnYEy9U4qnnj7XRNa3GAtCs7p9g4bZ66CeVNBhEZRPQXSBwhchW5mqPBCvRUQpMNnTmc",
  "key37": "5dm2qB6XD6XCfM19MciGgUEjsuq9VrkaTc6B1hUDnveevmtFuyPUqkPJiqgvBoPactTB11sjqdicVhNNQPQ4XX6L",
  "key38": "2LXKbtCEPmhTMsk4C4YBeNiE8sWosk6d6pmYuEkKmG7p36P6jTBypJMPxaed6Cm6a3uozMdVmYo4Rj6aZhYv43xY",
  "key39": "3X9FKT64cQGbv5sLsyxd5Nymmb2BC5Eb3i1rdcneHoRuLeffJ9tUWrDtqAc59gWo3FxV3t4cbLVSnfDznRDr3BLj",
  "key40": "49Bg6gmDK9vC3UCKkKW4ai4Lz6JJD9Rw5zrGDUjFYuKGhBfWLdmB4VLivkKDenPupYH4iySpacqWMdhmYv7hWtka",
  "key41": "3qBMQNHrh8j3G8ttj7fGuiAmBjc8r8cTfjbh9FEqkG1NuHB1N19QnoEDfrTADhsYYgS1qy6nqXa54sc5JsbwB6mV",
  "key42": "5BSbWKW4Cfxfmafqt7wakzfk5j8wG4ARa8ufiCuk9eSQogQ3xKWMXKygvL9ntTCc2VbuoY77kPqQMngioMvdhdnn",
  "key43": "2mvsHzmuqqChwQdYGZAUjstHyVZYk3wqVdpmQJmdpD9ZBxtqSKT25nF3Qk67tUxeafKaYagZ1Dx3pGKrXk9yy5Q6"
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
