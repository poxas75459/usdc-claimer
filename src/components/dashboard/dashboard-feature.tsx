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
    "52kL4EYxHpKtLLufjFB5PtSLgWedY9SYJSmdd8NorUAS9R7t6mxJ39mBQes3kbhYYF1LEnCag7XjFVDR9EGw9R8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cS8djTAme2eyvbffHcWHQW7ACUJeYbD1csmM2NDUL4yZEmVgHuj2PvL5wwaaPcjvzosaycKmQFgWAFv83YBZMW",
  "key1": "27TFAFh2YTXFRT73k8fhLza2PDfXEPxFuLGUQ1ueXQC7tNxPJtBfJrF6p3hdCv7f83GQnujfbkkRbvH74ubEVhpa",
  "key2": "5wSMZ712hu6w57cH4GpitPMUSffr9fYzJy6ibR7sJ8bwRnCx6YNmkXcuWGdHRUHxnn9dQczMWd8RajAdXhzJSB54",
  "key3": "SnBYXDMChhgUkH9vzsJbS142Mc8nfn95dAqTUvzLRUhj6L3GiP3ZTC7d4fAS69D8zMdnBqTBub2esLoWJzR3oer",
  "key4": "4JJJiYksiPWrkeP5Xd7PtQm1rein9EDTTZJZpioXND5iBA3ohHHoaQAEqfoEK3njRxFi62sM9WL6s2T1Hx9itDTs",
  "key5": "23ocnwG1pzTuSP51GwDQ8y5XoTNk2otXwXmjvqHD6sEzZGnMtYYZLbBVwsAjhsM1Erh4yCM49ZdVa1bZTmR1GYTC",
  "key6": "4MU3bJ8Pr4yVd5Rs2FSk1LAA94ieP1F9RUyxcw3EQHYxucojM18TKuHXozcq2qsLLnz5s8smPEk4q6teQkS8vSUz",
  "key7": "5m2fBgdxCDnzYzASssiXoKtRSc7W1K3LPT3mf7VNv7HyoGDYRhbrtT4QHgbjZAEbZaDJpu3Euo2xmhxj2mVBnY91",
  "key8": "5uDjZNPdzaBHHyqZFvYxdRrAcR7K5niNez5jRzDZuLQRMwGDdEzdmJbCZ4eewk6P5r44PaQ8k69LxkVQtyKhUhuE",
  "key9": "4EpR7138bgURACmpbrixoFMHS3evNEAj4huBq8hLHpUjRd9WwfAMQF9HMCSgqEvzCwcNqnyqEC2LbfhfnGPaaujA",
  "key10": "5oebiFeRSgmPwarcTPupsT1o6d1PoLcKr8T5kPE3PLGq4E119tesJYrsKBqqYNmnoqwtszNbGD3qYeUsP17zd1YG",
  "key11": "3DsgPgw9D51hFwyTPk9YAdJTYTYwnDzunCUqBtKyLPwA3EAJ8g38u1qCkvCUw8K26SpdR3jvmKxFB4ckcNyLebUH",
  "key12": "4hXJRGuVCn2M7kr9W4RLGWPrW997ixg7kRPThuYjwtt8wNE6y3n8cjTpvBs4Q3NxH5ZgUftAyGV42fVxoXMQ36c4",
  "key13": "5fwCcfZ9K8Ne9RKaKhvneC4Pys616ufLPvff2fEsRvng7gQwsC6WzJ8Z89mPNDJDEnmqVufV5DFgAUtbiyq1w2AN",
  "key14": "5XtR8oDG1SXVHiVxdkLy48vQjk3yTB6sG5BcH2itG1ve1wjLvvn74pNTWxDqvrvJRAStViC66pm8wT5svLEC6zRR",
  "key15": "2vnveYRGcFWHBShSA65KGTP6ZxJpUhj3myfXP4XGNHSm5R627CAkGvRwN5QLdvJGYH2NeQMqtS59fzbqdP9Mjqfy",
  "key16": "4Yn7VbrRbz4JMSxGpgdQkmMwtFSACtB7behLBWzZ8iRKsfGZDbzoTdKQWfySVXRGf3hBRWRR7xXKxZJE3ojMFNfg",
  "key17": "4xSMP7PtdXiba9inmVGmSYS42osrur7ymP9b1GSny2aaWxMhYw8bDjKWs1eC5gGeeykb3t4jbWNCDbByxB4ypGN9",
  "key18": "47gw7wjUeExeYo8kGYbPnjedzLJkmnwuMztBtnEc1v3NKEYYP36pkFbVGbQ41Hr7hK1VBvMN7aV7wYgx3AQXPoHR",
  "key19": "4z7XrLZ3tedovhcRchNr542xAXHz9nCb9Y9Aa1wutcSYDQp6Edb7ED9n6ouyETPMQ6XcEYfkcFUBBdCDBDu7AYLE",
  "key20": "2yUXrsh92BTSXqq76PK13oChtzsy7SBqN5jA1uvop1SCcaxHzrZrPbdSwAopvh1QuxGsqGpBuvrik3qGRm8b8PPP",
  "key21": "bb7f7B7Du2LXdtDtmkkmsDHkZMwSTb2EzxDjTgHjVaqugU66ZpeCFeVFt6TNTSvrU9YT1Pe37HhtKX5RzSUCJqg",
  "key22": "3zX1oQiZcRFKUt87yKtAiDsAkM7FksgyV5zdc6VCxHt3oqSA6rEt5xQQWWUTV4qHWtLactx927wafFvHffHEYc5T",
  "key23": "5VpGtUiLwFVueakjbkDtZFKJ6jWn6ikWDnUnfLqBgATB1t713XJcLFKGyGwtuUiAufAPZ4iUMNEBv8XsCHoCEjUS",
  "key24": "5aMbNuk8JskhvCCHLuFjtWZkGmnWusEpStUibGtJtHRhhSYJF6nmkwWdUdZLK3BpK3uJueTLi3yRoGo3MByRJCpJ",
  "key25": "4CRS45fpy28EBpC7sSr9j4HpaAibRTFZvtrf6jcgf8phcyCEo94DNnBMWa5MudsXk3Da3pMda4mFE6AyTLBFoemD",
  "key26": "4UBbNNiq6LbAeXHzZ4tQY5uDtFhJqiVg25vs3tssnXc5q6wHiPhtkKrE3LxtuCQmnFt7wFVKiiTQqizVtJwtNf59",
  "key27": "32QXyZUCFHCuYZYaDZ1vCgqSoLJkNQvADiRep5fdSVifNz1C3Lxz7mvYXeZ3eCpXwscsdibhmvL1g4db8eypD6Si"
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
