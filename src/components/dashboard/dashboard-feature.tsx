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
    "3R7S2kg14WHwLhA6DR9B74xVT9cKFpcxB3P4voGwVN13n6PiEEgmBDj4wk7a7ugKW1ZLNjg572HURc2XdtCgUdix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtKXaLiRtR4abi7tDMTibTkcLhmwVtkEgaQ3ZZ3jXzKS2SV1M1r36D2MsdFqATyTaKVsQ1rVeZLik9s6NLFf3Ym",
  "key1": "S3efZzXG6x1m4ZLUUbcDcpz8ECgjHgFS9ubMmd6tuyfu5BW3jyY8HsNfqu2JeCefNsDpmPPgG97tRCbbkK68UtE",
  "key2": "5Z5GDGu3AaPwxYXmbaYqepKepKP1bSqZJwen5b6a4Ncy9aDQjXNnX1YjLNXzqKYsoQvdebCaLcPpfJpp6k52K3ts",
  "key3": "3RCfoXmztZdtVx3K94TUZ88zKnvXox5BZKWpjA2hdFnZiAY6g5bxRMVgQkzXdMMNspJAdhaEnVGaw18xMkjmzeLt",
  "key4": "4fZyanSsv2CW1TT4VEZKqFnA7sgj2wT2xxBuxy5tdV2Z2UJpQPsdFtCVAREaLZBZC2Buwa5JcDt5nPsdoFzzqhdt",
  "key5": "2KcDXCrkVWKA8Z9F165nvBzuonR1YTsxtbewsZuDM1jnNpnhrDdqbWwuaM71tKXA4MMSy7GYYAeRmKSyP63sNEPc",
  "key6": "zFg4ZihFyUjbUAQGo4Dbr1S46sWRJefUGjVtJcXTZtLRBwFkyjtSe4R3swrwbDWGjcPEypck34KwfRqSfKanbqg",
  "key7": "2MKLaMnGXmQnZwCuLU1uktsXVH2xPXAHAyY8AAW9z3DumxSkq6HW3hbRtBc7eAwCawSKQGzyyu3KbAG96tGi1wmD",
  "key8": "4GJ9LFJF1XaZKPyuxPcvGcKLCrAZefVyndowKvRRiqRqf7gP4qrJxyDjtcUebuyYMaYZ2HPvjUnEiz3EeKDfyKBk",
  "key9": "3aXyZmySAGMQ4EgE9ny8EAVF2BR7N9UYxHVxuBMMokyB1HySXRWvGJgVLjgcxomUhU3DWsmCsWh83xKx4mMAyRyq",
  "key10": "2jXG3DivMYf5R1eDNRtJwA7CwwaJAn1HSHcMt16uyemVzwspg4htdhmhp3g6QoBBdsQvnzgou14ZDUSDBnK6n6Gm",
  "key11": "5bSyGXBHMzy3vBbma14YJmaDTmishgtjrCEVcZq7BvcDAiXrHPfXbtP5SqoMwfpgSTgCT7vWnutvE3Qu8wh7VYE6",
  "key12": "29ZBNxFc66ou6xZNzGWreC2ugRMCXZZeerAQXS82rQm2ft6A6Xg6fx8cQWzSdGNA8CVSpFhusVwXkK9mHVf8uC51",
  "key13": "5kRK6U2f4Pg4Kv7YDkatvouqZ7JqGEBQWGRW29womtrsL5MAd6bXSyg4gVYaWr8LZUszLvaPqkPMJvisBd9fs5vn",
  "key14": "3BYZSL3ByuEog65VABegkAYwbPANoAZV8vauczxYH9gJt7QBrje5ktu1NkTttoSNsGh25Z8ee6mZYDjXt8mCBnVY",
  "key15": "4k2jSWfdvD1wohMBz5eN4SwY2xZ8acqg6W8xaHEUzgjinRQkeCzPAX9e6C9fQbLH4s6srwmRcriLZ6bxFwtQcU6D",
  "key16": "5Xems4Uc1zvDK7q9whMRDdaXEbALJoWSmmXyr8oDs7hLFm3NJumcoET6LSiNb5fYcFPUb9HSYJAj8s6BPQL7BqXf",
  "key17": "2UEQEwyybHsFjzzwhQwDWSNJKcCUqgVwNNGfRCSc4sDCbQuVn6XFFgPZz46cJsTyyMcYvYNbVstmFhJuppmLeGNb",
  "key18": "44Jvtfhgbhfk2GSzekhNoxfct7nztmHjRKa9TTtzqWt6HarERsSdpdunrhZAdKHjfd7rViQoSnb5dQaEwwMUL6CY",
  "key19": "2LJdZmnBjnAFq1jbFfg68XSvuygaUJdkVkKXL3pBHnvZ2gH4dagcM5V5jbUiaLKvEt1AFpCJHgaymY78qtgLJLXP",
  "key20": "4ZwketEbTQwWyiZCpYBuBw6stvWxqtjmaTgq1jc4729i3DDD5qRATbW8Hw4WP8A8N4xa5Vjhrx8QLtZHCVZJFFfk",
  "key21": "67AY3ZN4QhDaFDoJPJu6R5i7eBkZM9nfWt8oVoGKyQR3vmyKpg494GHX1GAVw7LLcZinMT3MJYx7RvU9j4NA42gQ",
  "key22": "6s7bxgZFgG9W5P2KL2pcdcqgAXYGzAg4UfKnhq8sEKxQ7P7e8Rnh4cXaHvrfmcZBy3yTzSwQY21Cxxkv2VkDomz",
  "key23": "k6UNGQKiZrV6scc7pRpdMDXpHfwCQW6dxRHcJaSaxsNpFVprUt8KeaWa1tQyacG1AD2FFU5Jz4AmsRrCeH8hetN",
  "key24": "34aq5xj4mZ33mDvHzkEjvMeqF4xh86z3a2gPkrugSbPtaFgieU1AGenE4TYtg6UyYMrGSNK4xpbMtaDcyEwEQf2V"
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
