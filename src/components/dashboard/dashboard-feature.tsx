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
    "31CBNs9SNkjGVGGJeYQNRtVr4STFJ2K7P332eyaf8wx7cdgk7Jod1adtjaZaz6h66i9RXqe9kwHRynHWmyzPaVQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BumNnwYgiQr8AbXW4R5UfqkEb9NbrhoGnXm3KmwEB5Hk2hzmSbZxQEzThaAWRjQZSDuhbWH5f7yB2WU6Kn6UR4i",
  "key1": "5z8bDt8xpf4P9GmuK9NDRBcj1MgsbRUmY966rZnX86h29jpKjpU14XK1zax2qoZmgukVP4AoDRBjtDwM6tuRURoY",
  "key2": "5W6RSuNxVoHtDjVxbCPYCVgS5o6UUBhWWbGHnLo3HnHuz4f44oxT6D4nedhiXn6vmwrvvpStiKxJwhFjRrqqSaCq",
  "key3": "3Pxd7PUvZ5uSXVBeUaZtKSnUTReFNfu6JAiuahuRXbrogPZnY6uJewis97bnNLFeg4Zx2ihG4iidFEnRJPn9Aa4M",
  "key4": "3oguWCLrawQ1VmaJq7kgi8AMr3d8Yzcftxzm689ZmSfV5wQQbavLzR9HJmr19nx6sDqEzPC5kJq8B4HNMVQJ3cNP",
  "key5": "3NtAzpZSz7QhX9exrxxgnZxnppgF2r4iPppD1X2xWTnhXckmGrjmYrGWhSDetE5V5RfJRhWE12aihFBLFXvo2PmN",
  "key6": "YpnfPdrswRjmJEhJSZNcBtgPSxQmPvd2yWQ1thKcSqUzstzM2LW7cykbK67LGyoyapRNaPRWtwFC6C8d4vy8oXW",
  "key7": "5SXvLaTUzeriF3in7VG7p1aijvhGNqyz2At7RCXrQoJU5tZafTMbgZPVyVnGDcWgsLjQv9jtEB8nqHFjrek5rum1",
  "key8": "5SGwZyGxZ6cjVy77ddo1JdsngXr5WtXivkwRPWR3G6WhEVzb4tqfgegQTeqoHXoei7PPyUY6bdHu6b5DZHSgq4FT",
  "key9": "5at6khMmH72Gsc8udfkRAKSxjMpr8kaakgkiJEtaeBKWr5UUbJYBUvfM3p46pgvKgLwyR8nNPKudAnc9UhCyXTXr",
  "key10": "2kKYhhNBgb44RvQ81hPQak25kfpdA5JM7pF7BmwcFTicxsLFkE521zCMparvyzGBHsFssNFFfHxZqUWjuNRdxaPB",
  "key11": "4HUVkJuRwuvZzfGjo6bGYAopnTwBZm9eMAML1mUgeZdfMoqwR7uY6PxFCxmoTQatziDwbNkDb8udyBDQ2QTFrP19",
  "key12": "4JshXvZRcTeSSmojr8hNNLGX4qe5qfxwQ1tRqc8NWMZiChxau26JG1A6gsn5mSDfutJ7Ck9QjDJEEcncWYNfNmRp",
  "key13": "43jvXrkwUgVUKXuEbUJsfR7b1cL4zYwTdJbEUoHr3356GSyYdA79fxfh4buZUzpNYg2aczQB2fxAvNp5h2zrGYNq",
  "key14": "2g8kM1Xq4ALKZycxiQdxXXTzag2vmm8SffATxb267r6VgchUXojH4t8vGx29wciskMsvwV769wVYNzSRxHwE6D4",
  "key15": "eQBE8ukit1tHMQ8VmYhJTG1ayebjec93kXE7o1M9Zkt6TCfhwuepaPRUKPrcVmxWgnLVfHip1qfomA6B8p59LGp",
  "key16": "2jd2fcPAUhrguwtPycp7hkr9HetRF9vuw2sD2NQWTry1CRcdbxKBPUXV69i4hST12ib4ahWh8zUZwtfTFLEktiAh",
  "key17": "Tf9FpWnB44vx2gQN5PmUd6tQT4ygqNTaL94JxKf66BDByZzTehyVafJp8idpYyhbXNQPohpd4fGQY5CL7A8Cg4i",
  "key18": "5aAYkJZS22YXKRagR9Vi2vBsYAD1aSgaqN67dKXCoWAuQrUfF9hRtafCFDQZM89Ek19peYAFQDjUePTg2eKcXgpT",
  "key19": "4Gyj7tZRrvf1qB3ny6CFZnUFHPrveK4Fs1nqxuvpB4j9cRjoXWEY5wkzWqUi4CgSiPF5RCeVa6SkBqC8W44y4qxM",
  "key20": "eivff3VNkRvowm8eVD1X6JGRiWSbCimy5xsjdWP3VKVhMnWQwJUfL39LtGdKaYfcQ5xSqiiquHPUN6S35dAGFAu",
  "key21": "34Ux2tVKm2Ld7u9K1axAwdvfwxPN9b1T6LdGoWhkDp16W72zzhMsUdZmcnoEcoaPSd6hhwXxu14fiaR89NA5Af5C",
  "key22": "2WPsguwY6NEqCtrP2NyEDsD1xNW7KZQ62kYZhnpwdbZPeHBewd5q1Su6n4TyWdcWHf5GFp6ahYhtEfDGKUGFbapy",
  "key23": "c4D3g3BdrjAAUeoM3THfkEWtAosYi58Hvn31xGYYzRWfwEucBa353BTZLepzu8mnVWVoB4RH7B43jruqdKkd8Fr",
  "key24": "3McVKDV25fzP9N5ybRTwG7onguvhh1JsyjJTbcteEgBbb219FirdMsYM1ypQvccR65NgCx6WGtbokesYZtzyn93P"
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
