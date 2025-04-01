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
    "5sPo6n8FvsiAWDhYeFJvmu5NNdJVyaYo8AQhx33bBVxqUonk8tyW57T8UFFxdLaiCHd9c7KpMUZZPPRwPeWJQQPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qKbkMKR4g2AhEUirZR3BP8Hf8E3Bn86JnNrp8Xq2VykdoWZJwP1dYnJhv3944ETbPjeccLLKdLm755jHXraZHk",
  "key1": "vz8h7FGaTYeACkoNk2Tr2RkJHX3egmzhwKJKUvz7swm6Y8Eos1zmQt4wXxYgjSa9D7eMMFWz5XnAryJWb6oNLGi",
  "key2": "nrM663eCu62noaac4UATbZjqukHVks4Xrr2ZzFnzZER85yPVBbgjuWfurSNDFwmPKKdddpDSseqQ9nKLVaAXoRW",
  "key3": "zk1dU6oh8JbvUTBMwZopMWGkqt7v6qWni3azAUEZavqhsQLnkdrv2A9cbA5shSMdEbqhraXyP6miDeVx5BY6sCQ",
  "key4": "5oXJK23ewN8VDttiiAe9tEzxnyj5YvJTQCFqUjQdM37oGQdyTaHgVBe3inviJtZAj7pdbZttqxpiBwi9GaTvABgg",
  "key5": "PDfypxS3spiZamxeoK7LfTxUeoR68xKdgm4XmWZdhNnK47WsexjLrfqNgsVkg4FQVM4NcNzRSGA4XnfydtnX43C",
  "key6": "5zRCCxUoHVXEvcbuesa8fEbb2xYwnxafNy6SzrDw6nqyZbniNNJQpbBgSwEfcBQEc4xdPs4RXxhcvdLMoENMb28Z",
  "key7": "5gXmQaytqNwWDxw5Hcvj3ztZA5ZAcou1W9edTEKVbxW8tYaZ11RtBvmTw9yFuE38V6WoUKww4fpk9AMqW7ok3xPN",
  "key8": "2TFfSFK7BQoaUM4iV9eL4QQn97KiSvRCj9rhnbiMUkv4tzhDp8SLxB4nu7CSGcM8c8AEkatesUzYCEXNPzRAiXEi",
  "key9": "4qX2tK6S5yLo5nNRFjb1GSdk7PJY4u7d1i99PBEwUtVFEs9pDjUcNBewUcJXwodnBKKbaiVdLQJLUHpGEEyhfzD3",
  "key10": "5w9jD9qBc2MxQ1PMBHfSTzsuwi33B2KAWcQHc1FiAhfnSWKY6JGDYcUQnhY5HuA6eK85VoYhZNwJEY5bbRkkU73G",
  "key11": "32fgiA77vwxP73Ef2fniH17h14xAU74ESof3zupURm1AhpLa8KHSz8UQugRpmoVjmvazD3yTSG1nsZBnW5KupXCV",
  "key12": "4aq6z4tuUbNJqS8SBo3BgW7gXZKoYhgu8Bt2RNks9KPJQh2oFNitriTRJysvFPemgCZLB3iZADebSCmJZLxHnwAk",
  "key13": "2zDGLT8vzvwVi448Uwi3eYDj38Xd6uhHZ6X2KEaQY1jiteRB4D3E69JJQL3ox1yEKSkLUd1PwCNfRkeCW8mjAqJD",
  "key14": "58gpqnr6xxGA8uZr7qoURtbonqhcRrbomteuThEsCHA8KKnJYqWj7moQcNwtiEGBdRWGMugMRwZKuuGbdSR6Nxof",
  "key15": "2x3KU2PCQvPTQueEa7Pvq4EMPC9hCnMU7ZLG11TqfDjff9ka4qSPWuP2fjP5rp8XGt7CJ5xr127gwq4TMe3a63Tr",
  "key16": "3hNdYLpYURiphvgeHFj9w1KkJUgVWAB8h4dMgjGkm6maFAZWHpBWVD1umaTH4jPYpnqc4rpahWB5VW88N7ezFyTq",
  "key17": "2KtCMe2VxNfSR6vDSFhSYXs3cWrCuq9Z2j9ySebod4u2YXPTaV293vGgLNvEFQug5V8yMMGU7kkWzfLCKPYYe3VG",
  "key18": "ZK4byVAi4nRVmRuDsfNzw2WH3gNXtUqYriQDjidV72TMxSgUGvdksNnfSzCMLy4jDsbGDbLtk6ZrENsPf9bTRHa",
  "key19": "D1JNCBAstYvRUdrQdmuDEc44WE1kWqk8tdgSc5nDwSdFKr1JyTCoA719tbj1TBTPAt6EhhSXhCvyV2MT5z1Seev",
  "key20": "2mxXxovbg8r8dpp8fi1rnqSbiFzgbgxHVQzu9GYziCpFW4a8aeJ8d2562WWK1ZcTAdXw7Nteo4t9QyEhXzicJwn7",
  "key21": "2854r7fKT97CZPaYmkdacs8gdt7tpdvbsW6K72KEz5ZYeTRB22YYekQkBG2CDxAU7ZLU39V2QQe1uVMb1DRFKskx",
  "key22": "44qQo6LMppfNARkMjfKfhG2jPbtHuzCBhLWQpKRad7PCtuKxjon7aPQ2RwGn39JAiMx41AVzmcE6dyHj5hyYBUVY",
  "key23": "4Ma95i39k4naPiTKUACv8bfLr5UB2RSciw6mWaBC2Y5gMEzfiELAwnKsH2hWDvx5PdQDKTnh2E34ZX6cejMNJTcK",
  "key24": "4NF9wRKpZGT8XpW6uQGgxrZWsrNAGgJyV7621X7LkWyaDEoWdKvHzyQ3qqVuZPKV1CYKDTKZdg4BHF6bzohrSoRN",
  "key25": "2bHEYauw8xKKzcFo5nqAhaUxy6aU6HqmjWtRLDruJArd2c8emo4b3EDWk9Zix167rM9wopuZKETjEWBJv4KMpkVF",
  "key26": "51fp4wn8iSSQjSkNE6EKGEbeVQaEWxmDATMtSjXjxDRr2zcV6iHkcLfj7TAEHU5Jonn1y7kULzUdddhBNEMctd1f"
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
