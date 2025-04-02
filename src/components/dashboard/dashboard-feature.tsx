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
    "3jjN8pQC5HVpAnW3cz1H6t6ReQLfuFL7yEkqo89kXN4SFdMXNCayBtRsXnoCFzG9Dn8HkJd77M7PephpMBjeJVyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYo5KnJzQCkiVNb1EbMdvBcVyF11CgJtZbPssfttS52GnmZeaWhrPQ2T2LCwh1qptGcgkJQqLiWQy1fiV9P7GJT",
  "key1": "5y2iKv66xLvHHfWBNXWF9cbxp1A1oVBbgZosbtNhN1oSjqUuposbMrAQ5GkUpSWBRAwgzoqgLibKPkyFoPJpMqZ4",
  "key2": "4iCjio1MpBiRvcqd8CXqUDjj97y274WfWunQXm1wK6oo1BK4Q3SezwVA2o3h8SXuMwQQwT8wtSxkBwYvZkPUPqwE",
  "key3": "5zk3TCNCtGba67xG4nRYicM8BLuL258pQf4ZjKfAiBro2eBuLnq74BPqq4gaKNBvf5mCkciz4ME5dehkka9jCc8P",
  "key4": "67cz5fMcMggfykoYvjefQEAnk2zJWqU81i34x56BWbXTrcRBTvrqnmqDpohqJGRHJecVb5EWJXv3nzE8cs6sGksS",
  "key5": "2YC5j5sMU3qQePd7YA1WkKcH8SaqdBoGpGJMLJrofLEFnPfYmy5ry3rkzK14AfmCQjFgP46hiG8SbmrPUoAbpfAb",
  "key6": "5xnfuMf7xQHKXPEL9kWBwWA6cjF5LbiSZRcyQZHpQFwzU2Up9cBZHpYXXAb88T1Z2MHSykpr5T9HGfKCMRE8EtrZ",
  "key7": "2TxbApwCt6QoFRktpySqxpYgGcmbdNQ3UpEkbcMUyr4xHbSW1cT28PYZZtU17nWXazbvLULQhBEPZB5FFrs6cVa",
  "key8": "4GtioTw9xTHbs7jsxbXfNXVZ7hKBStEkZashpdQKodbsXmQV3f8WSFMrY2MwdA1w7qj1UsnY8JrE1xrvPx7khmNB",
  "key9": "2D5wSt8gnLBTZEyizDq5x8tESgZFQP6bBNnahkhHUZR88n3YGk6cWmWgBP8UuvG8mdPuuVmeALKfF3XV7KV4g5kQ",
  "key10": "2mBqvYeYi6kLQ67tuMeDxBqg3FTBwkd4AwQfwAsvLJg6UK5BBzNrhbEi3Sdof2G4ZDJxVE7oNeC5MjH3mpjQvymV",
  "key11": "2fSoDKKujFHGTNDWJPhZCr4e4T13rsbC1XADJg7ZCt9tKza5oaFW662wECxn7AER9e3U11rJjf4YSuSiwuiPHEzA",
  "key12": "3iAstudhRWSJMNVg4szDkdtsqLkDGzr892Pmia1S4BXc1aFga2LREZhvP9vhTvSTtYwmFS4uJfWJcMDDRA7c2zAh",
  "key13": "4evbb1zwqviqQ5bBXXBnoKmczjgE8tZgPQfP4tNQxbCfbbXgRdMvKcK5rVbKUFLh5LLGfkoubtzXmCCBEuLKqZpW",
  "key14": "2MihfjPJJkCe6e834JTGP2X7SsNxr6z5Yu8UCs9h1e71J7rANXE24bJU6da5PFeQQcag5Ba7PLmrU7adLkix9k7q",
  "key15": "2fFrjGXXU5yS3TcBu4n2bZi8uXMxVfq3yHvJQAriaLwoqXwRZaZSXycW1g43x53QuL393568eDu4GYzVsNPCKAAf",
  "key16": "gmzacmLxXKB2crRokw1Z2XFdio4PXiicdVQKKSbpW77qtCQogTKkPbPtzkX3P21EQfg6YNupy5hodag7chvKZav",
  "key17": "5sJ6bG1KZbfYK64pm18WgPNnML84rooE45fWUUL4XEjjxrFcjgzHhFG74tnqJMuzAZ7Mdmm48oCtq9n77sdCqye4",
  "key18": "5PR3n13w8LLAefwoxUjYY3SipGPRk3bXmPD2eqAF58LpezsHofKwr2Y5hDupcVUNqXWjmFjWd4hiTFG2dyjw1VMH",
  "key19": "3enYMTS3eKpH6rEU3LKCUY1XPu7HKrMi8ciYKZzoWTZ736XvwHstSSNtovTjxqd7ESmSZaqkH7ST8XUL7DDz2RF5",
  "key20": "4aFhQs3QYBkXVPk5c94wA7bKuANXywgbtdXhX9MXxYseMNCf3PfaReC8r34JSiopfKbvS9Q3A6Z2gf6uH9rh2hG9",
  "key21": "4z1Vd8UE3qmkYikexkpYqbZacf1vNQWk3QZ94MaadCT7ziowfswneaBKccHdisN1EXR7aeLYXktXuFWJxKBGePn7",
  "key22": "6yzKQ7mGpixrSk5xntoanRh4RdW6gop3njyZ3xSkFjmAeKauL2vRpxQa35EXBQGpJTvYxjUQ1tQJGALNkgdV2sE",
  "key23": "3W4R8C8eE6jnYbWd7NNDX1UeLy5xS4Hrc1SnMoT1NDPbdtnajaAaKrmveHrNVQhEiFCw5fSEL3poutjGfLFAXVRM",
  "key24": "2qbx5tqAAbPZsD3o7VCBhonNNXbfddHmcffkfBtQB2v2t3z2vD4sQkwAYLNxxWDzgoFQzPsMoL539THkYqzgbMeZ",
  "key25": "4dikHGWEPu7DqzE1VozHtTtETqpkfoQRSKR2bEEa9FFK35PMkXF7esw7JtT72aaw1VhDJMqBzFwAeMP94FhfPWov",
  "key26": "4faJxhW1FSLtV23JwQWC4zqP3DuFtXzpnMPHLEgbFrfdriu6ECsc2FXgKHQN8pSmhZpE6YkvcJkZr73uBwahSjuB"
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
