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
    "4FMvmz2drGkrhHbYJHuphgubKkZjqE9vPLoct12PaR5mhUor4ABufxPD6227AFT8crB74b3CKB5gS5G4J8EmBN4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1Zfw5BNxQXgGzQ37nqCNues33DKstMordNjhCg4swYQ2LrVjsbnV8NjF5EY4tfV8d19pNtLpRj7onhwdoAqgPw",
  "key1": "3DjiD3CRic9YeD4UJkydaPQrLP7tUtADEL6VU9KqnhtDMBokgpW5TwP8fXvBAEPFuqt7FpWjMwdGi2rPYoEoTdU",
  "key2": "5LsL2LbZaaht3SmLMped8886WTQT9B7i29uinJBt7mWZfN4hupaeFAWd2xuA4fshypwK7pthyqhiqWBzihZJtJq1",
  "key3": "5YgF1DCrpuRkqpK34FZLKfzitDFFgiEcGy8jUFayrKZj2znmsQFTrfLGYofkneok5ePyeGpotMRvYbpV4UAtdrQb",
  "key4": "38Qt3wdrr1Dsf8PmtqbiUnuLnMxcdvBKGTex4ThRzKnV5Av4FQFQ3rhR4eg9fzHu2ymmA3Dq5Y2PJk39Lu9GbMBB",
  "key5": "axfkEM2xF35jWwMU9miNPRaTNW8MPcvYeAgQCRJfLFg7XecRRMxTef4XkMvbj9UnhAgr6EZPd3rjktmDgpiLmb2",
  "key6": "1Ur3qHFc69q6aZRjvw6YdECGNSY4NGvgbTdAPppnMFJX74UnWsmztyXqHh5qrqoEJmsWf1fcZHR1Mpr2V1YG9gf",
  "key7": "56xGZs1Ux86c8obeHVneMpt3qDG6y8t1rRo7DixuzvUXEwi4GFak5MW7LFeWXn3w56Yfca6rHMSMQxreAvLRRABF",
  "key8": "Uwg42NJ45g29h5LE7iy6ztP7bkkbYmDg4zXSyw6KoFDgaRQeGXG8MD6mCm5TLEQ7pJzJewNqRVwbLVuooWTg5m8",
  "key9": "4ECaPntoXCLjkkpqcXkbrqqj2xwNRFUm6utZ5JMUHAcFceuMCEtHNpgjY3xmuxWXtSTFKvT8W6WuLei4GBRmX4Q3",
  "key10": "5YGYHhZDnyoeMiXZtMtwwXqp9wUX9Po5WZGaBDc5tSVpgggeuRCxVBtjWvQPegrYr3K3TGSTxUe7M4WdLCBscXQm",
  "key11": "5JztrVtB3sN4yVA7hb7D3mRDTNdQSt5HY6a64GicQpVG1aHBzbhSvFjsLHMusadAMqxzAzfkPLC7abfDxjUVPPQS",
  "key12": "4bbTzaqSfNbUswVvfbLd2UMpvzY3xqGpzct4tpZMf3sBrUAKzArb5Q47bt6SphSC8t8FycZbjDxR9b9Bcy8jnZXN",
  "key13": "32jAmqUnwjeb1S6ALKMK9QDnFfLDXuTuSS265zkMZ7CA9T175ZShQd2J9PLKwsiR6aampbFL3yXkyKsEJA3DMoqg",
  "key14": "XBrnMwdH6s25EoRtWcotPv7onCbgovMSdjHodLxQ7RYirCKKhuJpu4N4audWVVceV1L6oUF5BsJ9s9DStuvhEAG",
  "key15": "4y5daNcFD4otht7hbH4U44CpujGZ5Fg49SYSrS49pQ5nAeWApGwBXjFt9MbSbwtmss9SKpiRaC8SXmJ1SCosgigD",
  "key16": "3BxDZEuXWSggjbqwXknKLKNKnPKMi14sd5RHb58A3jp46CCtFmTvV2TMV9ALLJJmurULzLnMfRppq5PjXEHVXMw2",
  "key17": "5tCiXB6PbjYUTGpqWgFP2otDBYwYiSvERrbPAFiHXUMHpmGa4F4iX5HYsoCLrMSKwj2AKatKimPuZRCKW3C1Mghc",
  "key18": "4No3agSccisFdrhy1KDTMHMmM2prC8qAdwV5zGSuumCYqf6uMaBSj8zsYAoRtybzJSGNhgddvrjDS3NQXMpHdFaJ",
  "key19": "4AZH1tkw5jZ9QDZe8wMvuw77uemXg8iupi78wXAtmHGrshv5aAnqc4nHbHDgWzp6Benmx9FRDzjedgpzdCU8AfgX",
  "key20": "43zvpWgAcfMKfY5soF5r9DA6iAtwQETEA5kFDQhiUqd7H1efFqmxKNijRFcK1WVB2ssodBALtktZCYYKDt98TbdA",
  "key21": "5HXz6jtwXt12F5jGkyQzqVTPALiyBNJjLGWvXGAKJAb3fzEzdF7yHEPeyo7y2KYHEcC292xvYn3JDa7pEtHqio3o",
  "key22": "42hJFtTJrYekGmxyYrUdgDSFLvRWpV93ve7y36yrx3snyFah9eZaoHd4bnXMEQsypwq8EsqXbeKxgoXa1mjjWr1Z",
  "key23": "56g8JB3mfUj1Udk9baiXfhzbL8bmgL7s9oeDpL2AzzcA7M96URMQpQJRbxKwXMVuKngu9UoML12wuqFXhM95HuCa",
  "key24": "5etECepq5GhDLYDksR9aDn87Afo5biX3S9Y3K25hy9DurLTzC6pQf172m1CKLi7k1eagDTa2fPVLyAVhtJANkdLU",
  "key25": "G8bMj2r8UaztNkJMuzDKHHDFdsnTPCoqcL8xYuRSZfDgZM3rEXDxMUFwgJQTfo39g4TJnS4G5zNFsDorNM9h9Hd",
  "key26": "RwiNAybEAU3eQzTcDcVrjto7z69uRgB45G9vQyF24SbzVnqotMLSCxkJbjRaEaaVDEZim2CUwK4MdVnFrhAKq8h",
  "key27": "2BN7zdH7U1HvxnBzq5Dcc4vfTFHVdShDYqMEBy9DznGdFgtpcEbD2Ye2uupG2TZvW1jzzMR7XyCcbVHifLsrZpC3",
  "key28": "4mASp5D4EmFjc1gebLkya32WJzC2xiQXiwg7vw3RmoQMfncAZdhVhRyMu83XFKbCHTd3vzGHmnJPoAyBa7mmwonD",
  "key29": "4tWE6YBvxWvvJYBrfz6MRgQdVSZqPkuNZujBaYRC753SL7FuyHpUxAZbveX3ss2LXcDzA7bbHhDatJzdVhxRczPL",
  "key30": "5gNYFPrhtqJoVNp7GmodY74JrhLq7kV9VbbxTU5KHRBACFx5XYTLeBna4kYzJhPbZZ6Y3E31Ner6gCjnvY1oVSgU",
  "key31": "4PB8sqHpPvvKVJqouhEGGKpvkm2AENaFVMVgjDLigsFpQ3cJYmJuXxW8eAyzzVZ5X11WHsffZS8aNWLfSCT6PiXa",
  "key32": "4co5X6Tbr7TTZKLuJUjAiHMS1mqnqVg5uLUctPvaDHMHeN1A7h7bjdTjVSgHuhy2tnxTmSbVEYJKS82VGWmghgpg"
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
