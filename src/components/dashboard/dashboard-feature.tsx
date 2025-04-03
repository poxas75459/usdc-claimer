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
    "4aQvmi6Ea6piMbe6wGBCwbqHmzFLkxK3fhBDzihcEdwnTPyPPLKKGCk6wTgAne28aV397SsTi6bhuRJevandbuzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4672YM2s7EciSKLb2vRX36NjNbt2dFqdY2bNUesLsL2XZFqwWZHrpSi4A4HZJofk4DCihqejY7J1ZuoVVBf5yXzS",
  "key1": "2cH33tQBT9soYwAWjn5iVEq3LrWg5f8j3EA5SbFpXdquqtTGvpxm5cc3BdwNTNhpVorGzFTYaJ7pCt2D9DyoiSDL",
  "key2": "32WAs2dkjbNwjwxqjhsrBUQafXM8rBiWSjvCh4bXqj3PAfAVEzoH7qrmcnJgGVuys5runT7WBwbeAb1cahfvVfwG",
  "key3": "2zuo1tLFUbhBc8TNrcFjzN84bXLXXrQtsAkWN2HePN1BEJxPYFfKCfWCAs7tDoziDsyxgYTDEKPiB4GN6k2iWWmH",
  "key4": "5VWYDMNBpsi6ABqiyV7on3R2SUwguNuTnVSHu8fb1kH4bYuENymeo7jGs3PbkoJYzR71oKmYTfbBcL7etpjUkQoX",
  "key5": "4z3182whtUZtFPMjgHB9Uqnfsw1YMChJRJ83asV4HsPnFBJk6M27Zc355pcm6t3zeb9rkXDWU2SLizg5fCTznqWy",
  "key6": "5cv3jtua3Y2X7VSPM3UwfQZpECXiczfd4obB57LJ8isyMCE6oAucPvaoSZKGF36ERzvTJxFYamC4nbbD9hhgYBZg",
  "key7": "3wAzt7gqozGCUQ36s5AZrU3dxo3LMkeDYz2nEy5vEiFLSK7SdrU982xkzfu8qF8kgmBgbJqewFp6VUZTzz78rS9d",
  "key8": "124TVe5KwcP67jugnf4LAekR9ehcFw9XRez528aDgUBDEMRSLTfUiMtTzZcKGEY1iDfyoaSuiT6mCAkFYPhAN97N",
  "key9": "5Khn5rb93UvNvB9aSFXpxSr76taZqrYgMd7ere71UUMsMbxcuUKvMfq4rkjry2wEavAk3SEHFTxsAjf24a4kCF8Z",
  "key10": "4TCRQ5kfJTfvfLLrqDJG9kAYhHJmDnyvYRX6fhVcHXnByf87PAJc2J96x5xqbPBwdzsvp7xECbx6WhfBuE671v9W",
  "key11": "zi1S1jNigfoQGc36mcKJ9x9vfjC4YycF7Cc1e4sBfdhCRqmapsokygYnyJGZwnsWCVVuDcqybJ9h1h58NpEvV2m",
  "key12": "9pHY4MZu7B7PFryPEQS8BQdDcXLsJCpaKANKrb1aXxtQMpaXoSsGmyXKd6RCr1k6Amwm8L2MWQh8sv8BWwCN1zx",
  "key13": "5gn9GED5q4vGYRJzodFC9t3cDU9iRsCrxQGtBekARRPkstGA6wQPGrjTww33mFzk22SyHiJWW8VimqgbjVqQCZHY",
  "key14": "3kWzCARzxfHWRojgedMmcu9UWh6eGZFuA2oZ2wpN3pNW2F3juavKapQnopr4rQHnRVu8oPkxL789f2fndMy2Y2Qo",
  "key15": "u95aXnMhFbkAyyuBhVeNCfaHJMPCB6FE87AneFTfJh6jRSeXupCP7zrMQPmVyZHPCFREQ5SnvCJomaHx3NfurjZ",
  "key16": "4ty6S5Qesr5HfQU9bVab7Qs3fxYnaz4F7q5T4pDbVaowP2psMr3X5mFXYJA9uq7vBQ4xvPmFNiA7V88ib94ryPUP",
  "key17": "5LxyefcieutFNbK7Z1hoWNmogustkDpeVmcAFeZmojPb9J4wrr3ZReV8Utjmi6S2HvTpsndXzLqpfCsa3xpwb4LV",
  "key18": "4VbknzaKGNqSKBUR4w1pvvsSg6Q7htGY5FQeqS8nijKPtE9fVPQtyCAmKnKu3x3xxyS9nuMtUB9nrALBQnUG8rxk",
  "key19": "Z49jW8YfybzpmM8gh9qLC7sL1CtQQs3Z6cDa9hMhKLESofxL1wDcsgkaD2xpiWwmC7V2SQ5TyWRkcPAGay7pFbT",
  "key20": "2UcZq1eae17dd99jTtpm364kaAhmWWy4XqnadxhzeoGQRLLnBVfminhofZr4Br8PDCVJuCdLADEDqdz84xABbTCX",
  "key21": "5bThqYb2x4PfoEw6qtr1htPfEYFbMqRkkAJ2gQSV4HN5c3Y4izuW1fzzwmQDr781PG1FDLjVM5kpoxZXxyuCgBSB",
  "key22": "39kPRGfWUztDNDHcnRGpYywfw8yy8unvp71S9NggFiibqyJ1HbPty9g6ZYw99gjapGBejiKoFc7a49oQHHgnhuNB",
  "key23": "3CVBMRVTUR9yXbY4Pf86GRDhwFnwQHUwoVZtXYUiXTduRZUF19NRdFhtPVPLrfD158n4ajwj8xeUNwCLeriGeXVE",
  "key24": "2boLMBLbV7vHUPpt7MFX8kJJzhVjvi7Rp6fkfCS6qSDWpNiFaKmSUFfjant6HEt4MzaFnsP6JWxfZu3g183JL96n",
  "key25": "53Mk6gFMfZkhwQCFcQAsKySh8Y4qLpMrFKnsLEbR3cKdgBFgXfw15JFLxUkKQmc1g8cDE11bzggFUgKFEQLkafzw",
  "key26": "XmYGH3LCm4Nk5P6eTdERDfHJ1mVq1RVoXmnGYcTaw1Ksvqg3PMDauwBEohdWoMPtTVvc8e7XgP96HqwSbXCbzmT"
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
