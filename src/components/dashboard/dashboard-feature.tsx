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
    "4JWw27aSg7X9AjDT3HYmAJjLr6dmh8f8cGsJ9HW2hDp5gtgzMzYrKMSca4SGV2F5Zsrc5r7NkUGkcPHtob4Qd9Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x74Smmf2cEa4fDqNuzjfAPTM1hr98Dfx8utJUprNEpHT4wDTtFiqwqxidNnvuhff2KfUd6DFcCBZQZQUfFys6qR",
  "key1": "26WBcdUte4cdQA5k7JjsaHvQkVRowJsvLmTDgwCYsCq7PjcpGMTvU9GyK6j14d1s8nTAUv2zJoPDCnUPuoWvuauJ",
  "key2": "3V2tFEZvWjMKoStmN1V6LVBZMrm6NNxXrmkcCKxgETtVzqyEzBiCmxZhdbAumjFSkx27D6YZmj6MzPQiHXNPY7gj",
  "key3": "3HD582ixMM6fiywxneEPCX7zsog4NnS8qfEQRXn2xALzBeu3kxtirEm5aJfxQLw1vonymRJpN7na3cT1LjeXJCTq",
  "key4": "8qCyCcJfBZBRhkvdnUffDQso3MwPmA6BAzwsJJSmfr4DG7XECw6oWL8gzqjfwxXmHTVrBpgCxfpdKTFCcU1gnea",
  "key5": "3ASuzPHzpy3dwSZknggwkuHcntiziHoKBXibSdXW1W4tfVy74hNJ96nvpdSTtTgN8gBjSRUcGbFEFg5A9w5HJkaN",
  "key6": "2qmTCr1vvaNEmxrxEor43AwtAPABS1ikuMEYoa7C1sSM7vYJYr1eeFG2WgPNzYNu2i8HgW3tSqyAEgFRR9yrpBeQ",
  "key7": "5YqN7MNccAGnATNmzyLgGwbKdbpaWFmDsVj1HJ7pHF5P1Rbitxux5wMX2JBWADFeveRXvVJh6iNCWbdXkVx35wBH",
  "key8": "Ljk8WeFeLJEZocW65oV3m6TZn624TXWVxCoocsJVpfPRyyHP9a4ToDkd8CSeAjachFkiVmxYqbv6kbPdxfYXtHx",
  "key9": "3qdVcW3x5MRnbMUWCzUZ79VkJ9Y5e6vDAG3Fm3fRU2ukBpAeEkn6hW8RGb7ZRrKquwQmDNE7dyneDfM8ZPSVRnN9",
  "key10": "5eHoD2CcgCJsNhQktksccf4UNQ6JBxX6wPaX8RVCYzKW6sMBhHbNhvTTA4se2oXGFV5ziJeWPXT9NtaUWiT2iDB7",
  "key11": "2tWpcnQ4cqcMFXZTPefUCn9eYdQXsRWHJbDxjpkvDBEraQv91WEq8oXKzFWtVi7JxvLGdDgHWxL1W5qpxVw5WU8D",
  "key12": "4qKWFd95CrRNK9hBLMUJjJhgd95rDM1mbFQGN1tMPQFXzNSi6FXZ9PQEJ1KnohbUurM5UP7JcWkZCigZHRv1jmjX",
  "key13": "ATxWsByoxfHsTuL8HjPrgVS1xRTDJx6PNnf7e1Z56dNvsBNbbe9AuEpJcEFnCJmcERMAKQaJtYnnkLwP9w3yoqu",
  "key14": "5rvzu1z8ERs4Mmbqceev68gbnnNNj1pEDhpKpNonkwYk6V8wh1eVSmvCi71D7Ahut4XoAMQpAa79E2PcKDK745Xn",
  "key15": "WDY9dfrowjsMH8CDUgsDYKUMqoDhznrujyDLEA3GiJGiuwNAz8Abhf8wQ8iut1xGg19typMMdh3NHj6vvrvE8sX",
  "key16": "5umgCn8ZbPwiUk2eCoDXkFcD4Qc7m7RTx4i21Zu8ibyxnne3cH8WSJ9wTmDtPQY5wheBmLDCLGCm85c2LHGzZUGj",
  "key17": "4fjryjh71ewaPM634m7m4wLQrq2NF8E3KfKcpnqm3rNiypphU2zdWJQKVQ6ScZasyiZtqmGGggHEwrA1JAbqQHK2",
  "key18": "2ViBbekm2tYqpvHnAmPpQNkBg244RJ3KeM8MCvvGpcA9HBfmpAeaKp9y3ZZjCEcPby9a3fdZYYFSsXcH7xrswb4e",
  "key19": "dQBSrVcfwHHAiPGFRJ9wgsrRtqoFBiPXojykTC5vrqP8ZQ7vcuLjdGNKVBzmwSXxbgYRbEt8ruubND4z15Q4Szb",
  "key20": "3DkN7LzavsSeydwFBMYsQhh9STUNJfLdFWkZfbGvg45pWG8W6wCBMhwkPzBG9Ex2z3F59PbQnWqzJyzzzhEVXsCq",
  "key21": "3Hqq5zSA2XPduCTBcnqSfGBKfhCVSEi9iw3F76F8ePD7cWJ81rrtWW3SrhFNX3AUYkY6xGUxUAqg4PCUVHLrHJXj",
  "key22": "32y4VrPJwNt67CxMDFenaLbWy4ixnSuHFPZKr1nsiEHYQZKRMU352JJCBwBxyM8FJJXq1mPh2NMNBsPhuLQCnd1t",
  "key23": "3dXPUzDjRcENkm7QfWcdCq2J8DKnhJYZYiQRFK1tS6smESksUbWC8fDXMjRHujeZ9UW8jTcGPikSPRaoMwWWzDhk",
  "key24": "6459szHix57vgjGym9XFC7ckxXsvshDn573bR8MCkGGFNUQXA5GLowZiPTk3JX3jYgn1BDJ5DGKzZLqdSv4xZcdS",
  "key25": "5zguLsHm2qYKjqu8BhFrLJFrZE6NN8nYBLaEAqYmmuT6XkDxiEpb6jX8mgWsKn7vSjKrBRyTDkgFV78QWe7SKuhd"
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
