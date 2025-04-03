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
    "LvsXuf9sQi8bgvmFAe9t7UqWmMj49DsUbotND78QSRy9sMZoV4dEyV6hKzEMfi5RUey3VM4QcHULSfNCi6csMav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XTEw6CF2xrn4QKGwTPdtKCyfN5GfeKFgFpJo2L8v37P6dYV77W6sNUbpqqi2be1idQ8byyNg2eNzro7cMrYrvi",
  "key1": "3GavsS9p3gutdz6FUpr64rP1rfM3UUDAz11e3hb83suyy5U6zBdf195S2FsZvU5t8qf44715egHSv43PnPMEgiZc",
  "key2": "3vMSFuQdkHdtmyGvpJpnGPsfDnG25Sb737i9D36rWjfyDLnR4rpnWQw9QYQR6VcMNkVQgZBxFb9K5zribrRtBiwB",
  "key3": "3imZDT3WYMyJkFJDBC9tFtuHEHgQG9ycBVSwAdeNW3YpTNqnEyXBetMmhEXQdk4t64j4JwMFiouGzagVxLFDcjoH",
  "key4": "4nRD2jkcwP68cJQHDCp6SR8Kkx8XuqSNCgki4RDuqpoz1rEd6gP1BojnVPykDW9q1DM4Uwh8t7FEcAPKSsQv6LDy",
  "key5": "2Pe4tHuPcbhzHTeKPn3C5EkJh7Yeey5QzyLFy7Xby1sSC99914uq3M5NZR376m6YYdDgAvmCbybLG7u8Nr391ZUs",
  "key6": "2Ym6FAdBsJ7a4tzoD1XG7NtArqQBfHBFSCCdhvtXEXPBE4R3tWoZCJA6MZhQyUq6ojaG3H1WjHMcjt3RLWaHB4vQ",
  "key7": "2J61hMUmwJmqFBQbE6HHPNYX69LuKCgxhyfTAJrg9qzt9LdHsVjMqN5RrX67q5MQ15sQED7NgQjieCLjjgy5hVaE",
  "key8": "3hPRevzQMDJLMZvebtPvn11B3RiswPq2QgXdjHdPdJRdaVMvX88NWPTuQ5JDxtvTmvXvcZgDf9htpdhYh7nGG1w",
  "key9": "4BRrZwjmqNorveypH6MM67MqpM5jwrUUEaxCM1HfYivmEVCKvjqf12h76ZZo72cZAay7gBEJ5LhtsnXz7CiFQjBc",
  "key10": "2wzr4izpm2ps6KmyEK6LoYxwiFzekA1E7F62eYoQZ2FS6SaNEGVSoGJJKVtJAefBKoZezG4JCU5x6bxJGakjLs7A",
  "key11": "4m7LUfDKMsTEGTbXuvPqLVf8jFqTzevnSQgXNRkHQ4p16cDWdkxPJpqKr36t44FrW5Js9vVaqDz3Af1BGrsUL1F4",
  "key12": "5oZhfh2UBwgccdjFEurab5nfaD5sChbDUcyCZNkSWZm9rWEa1jSFLVF3RC2bcgdH7iws2LoJuVkmpUtFr3AbTcGH",
  "key13": "3BZh91sMmg5Ti4CmgDekWoLY6953suWQXLafxXk2yXhxDXcuLNSNhsPPGaMNzhybwpoNhufRVM9dVLQC94zih2Td",
  "key14": "2Z4ox28JhjAmFW6CjkfzfQ5z8MLzPnSDw5LeLStt7R1AKojT7r9XMUpwJ2HBHxv6Gkbxf7UuTUgRx9uyYmaocjQe",
  "key15": "4gUJu5RSMj5XyuJWxPFVrMaPZX3iCsVgrNzgKqwUwsYATW2ZWb856XLvVLwbVTNngyNtBXWA6Jzw8Lic2Z5o5tmk",
  "key16": "NSKX8UkTRxo5zS2WVTHE72TGWMNWgxjZdvd1axQWAFwoAfifjo3xPijmcTeZnrgpQrnET6TjU9YUdd8fzKcZTXm",
  "key17": "42BN61eia9ya82FGQchEHEUxk7hVV5LLLxkQuUopzuBgNrq7UZ3n91eDA5A9xnEeGmJe9rVq1qcFHyBhToxvM8VN",
  "key18": "4aboWuYmbdwPLRobfpNr9YzvFnc1z5Hb1KQ2n2LdzpWfYGRZPNgoELcg1qjhMKpGPfNB4fu6S834KmwfrtFrqjcu",
  "key19": "2GTzLprHYQzG3GNkQw3BX9ewH2PT88B7E8xGVYrc2zg5bVCFtvD5KFgKJU5uPTK3ECgpHh3Q3SrAgmyPyjhNd9X4",
  "key20": "3RKSSGX6TrBLK2saSELB2raTYrjK428PmKMhZ8B8mk3hTJ6JW9bihD6SiV9WqmeTdDvAAYZeP8zLpEMJWsNkPPui",
  "key21": "3Lj86nRFumjNNdR534KqL99WrRHiUvoYzgnH9RD38djJrUkHAc5aKZE1drL3s1FAEshVoWTknHK5d9vRmb2yehXG",
  "key22": "5ZYEVxjX3naTJV7stskD1fE2MoJW1Bqq3UZEKgANj9cL5QtAsJcE5fKJtQXCmpzVzYqwcaFR7imQkZDqZDgJZ49n",
  "key23": "3GjrwMQHhyDWjNuv9jX8wG85zpfguAzob9WbNAawV8nBBdCSPqMHCoSc3btmedMTAPWwgxZT8kYSxDrMhfAc46bB",
  "key24": "3Po7SLk6bHhKpf6dXkyDWS7W4LaCjiwkdhHHVAunRxqbHR7HgBScg2Lh7N5HUYBhi2gjXU4VuTyVVHS9RqUVPGix",
  "key25": "5LYL4gR7s8E5bCxFKvWSdfStwy9jargCjFYk1F5XLqBdt8Kfmws1oeUevN8t2sEAbnj2DWogRnbRUvLHCjtc191s",
  "key26": "4RFNLWdyB4jHJKsQi8cexfyb3dhCjmP41J7M5hBtpzLwhfb8hVBvyzTHrJSu8kPsNHuGMWyBk8fhES3FeJsEAF2K"
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
