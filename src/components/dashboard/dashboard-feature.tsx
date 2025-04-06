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
    "3bhr1u4fySxAVgrzMKCV47uPHswn3dhBFR3zKUD3Sunm6HcFKXAJLUr2dHn3siRRA2GpXT3XSGug889WtuJTdsWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3Up55Q1uwubgJLSvbcYBQH5iPHgRrqq8WvSNiYAYVyYaJcsR6uUXkdipGzqBTH9mUgZLzXohWJvAYXcPG6F94a",
  "key1": "3Gq1WVFFFktmk1AKYA5ToZAcAow7wSKjkraXTsYqo3vQG9iCQJohQ9gcVUE22YaqrfnXb9bTHGQoL87wXoqdUrUJ",
  "key2": "228Uu22wF9fZNgf3UoJPio4JFnjVE2HbR1ajiLhvjKUiKj9nhMJ9pnFjGHmbChHuEV7j3MeR9TJAhvfZUWFsxQvB",
  "key3": "aKEmo4vPBoBdGbJkZxjjkEW1TsJyNuY3mSzVKvjEJ6PwixuegUNh32RF88dRa3DFeEURsrbQaftGHnv8RZmTbXb",
  "key4": "29xo88FMHQUKP2tYDq2E8vGyLrYDWjtSb9nEJMJmSMSuXfZGP8x3WAzkYoSZP9uvzwDGoaXwPmXpJ9986pdM8n3e",
  "key5": "2P44QdksqjsvpaNF3UwencVfB6XojSP7pJJXb8mrFc8Y5JXeMyJmS9Kr3C7ESzTLe4bCWBHDzVDTWyjX8h7vykTz",
  "key6": "2ewr2ezvnehte9zMy7U5SU4yH6eJTkcxK9to18zyWFqsePFduSBKyGzQ7N2mTcNq2wzBQY2wQJmiMAGDbprGr8ZR",
  "key7": "2koTZqW3eWRWcm6FFK32vgLbagU6nKQrjWFntVd624t47dJTAhDd6h5kV4WBd3SUqtzUxQbn4FhPWT7dSpe47mwy",
  "key8": "3RvBg8tUgVZ9fayuRMCPE3cxrCuV2R57AUFMCJF3YNHLAB8PYAE9gDBU7FE8BhN3pzXBCvFfTut9i6yLQQK7WHJA",
  "key9": "3rWCNjWjRM3vf8WS5b4Yz1FRDDwJrHmEPHGTmonYyRFmr2mPCpSwgkdea3XrFDyaaaFqjm9C2KXAt6A7cFGQMofA",
  "key10": "35G6zhJsJXP6mE7BsntGWmr6dFm4xU7eBLBdFoTfPb434fcShNaokGnBVeLHEEQm4geGjZLtCzHptpE628WAGZCs",
  "key11": "5sC4vUMsAMtXGgVxqxSuYmg6KJwzEqk267etcFiZJeM1oZLwufJRAjrVzN64R4iF5XZwtFWz5Xd8UcM5Hcqc652R",
  "key12": "3foaakdPWoyGmstwAmF3i5j6zjvPTk7PLiyXqhDYzZGejd3MntQgi4L3pFuJ8oXQjntZVS4bfryebRKFQVCBeRvK",
  "key13": "4pccfGSWq8qRHcJijhXFmQnxaCCrkY4BN1HJJXDwQZUAudnTGu3RmzHrjh1RQHFgK4N7uhQkaEeaWvHyWZAWNyWz",
  "key14": "27D4npd2z8Re51ZwEx9V89BYx5pWDQZhCyciM3bBzq5Boq5VPBHzRpcc5Ugx179mj9KbN4cgke8Whtur759UYKh1",
  "key15": "4hZomSG4YDrF7jRcHzvGmjHE5DjRuUwCt7L3ShKokzdjx3pQo2MMVVecoRNnwBqhA9eax4pTGS4RXqAU2frQevz",
  "key16": "2EWocxaQCejBXkvR6y7fgR4uycXEoEDEkLisPxY4J94azvYWpKKD1UUDquhzT13q4t1oFK27K5Eaf1seodMod2kC",
  "key17": "5qbEQURfD7X6wL9mAin9UkQa6F4KetWRCWtUgaBaHmUkEcHRh11ytoxkKwa1rztDLbuN2S2nm7teRHceoSCvycwZ",
  "key18": "e7C8o7KGDCewmq4pfuAFasxvwWDjd9n6pDqgsiUZk4FbkQ17pFveCw3VUAqcWNnJxgKCeo7FAV1erfaNZy51y6L",
  "key19": "3KvabT97bMQUcqq1uMggc1zeVaf1do2EvuAoGw3ru3pTDqMhtec7sWjZEmNreWL4M2rEEsaeuVjnzADhs3nYDusX",
  "key20": "55c4VVfBmAmfWrXWAUKVjPefMvRwZ8FXAUqDcyHfPGZQGo2HGHoPD6seU3B2BV3rsfUMQfkikXyu5fJRFd3crc7Q",
  "key21": "2QqgPQpe1ZWqspcsTA3CFeUJgqTBJjhDT8GDXGULVSYz1YDbyz5Q99BEJgaLAYYfm5tXgXLywtbC7neWszv87J2P",
  "key22": "5Uwc7X28NvfLvrEKaxD6qhG1CWcC6Eb1JBgDGe9htids7JT1sNiskFgYQmiF3xwuuh52jtsMXKbUxXFdPeT9ejZn",
  "key23": "4QDmDXASNreGFoaCLF93yPsxB8igiCWVGd8cJ218TSkVraoVTuJba4dTtXG7SNUa8F2tB4d7G13T4T8vQitPKwLU",
  "key24": "4ZwcnhdzhrMHobuxGAdG936oxzbHr2TR8zSuBzk1xK8BQkF2Na5kxxh4NQ1v4daydSgkPRKSqv1cYxNa5pMvFGx6",
  "key25": "3yBY6ECEnJdK1pCjuFoArW6itRnhvgCkCfJuz97DqW4mnzBk2k6fMqJzAZadRMji6wdf5rYQBpLcZyiSBYBKFQBz",
  "key26": "4z8vLUPXoe3KE34pkqDe89KhHm3Qtp4iUng16QtwgP7xm3f2v1VyBJxQJTozCwRSesj9uAe46o9boHRRSJYrP7sG",
  "key27": "5gpZ5K3RqytxkbbphBhsAaHkhfxmZ2rVoz8Fr2rsy2dj2ouBWwD1BzYH7ih7e7sXnaCpnBozK9y5MyiRa62h9EpW",
  "key28": "4PvtyHC3Dk5W9VjYLVrTCGXHnC5m8w9H1h2Gm1xXcDNDrmo2raMoAJS9mqw5z44rPkxT1qfPSqB4TsFEzJGAJuR8",
  "key29": "hg9fjEPBN8vzTNEYjgTyr2sLNupFz88bZQWMcDt9iFtjqyy1AKjTYBzEMDc4mzGsojS8kc3R1hrKKWaMuQ5MGDB",
  "key30": "3UgbLzieivydTKg4r9bP1RbqGewutG2zdunTZczA9pYsYxxiE6ZWv3YPEe2ji6ig2yY79zodeKVZR3oXmknmyqo3",
  "key31": "53BTjncU1bKjAqmxHBVues7KvfK2JwTRJftripCKwHhDH3gxB7163LwjjMopfirDgA7ZxXF7Ye3TKUboJ1quM18R"
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
