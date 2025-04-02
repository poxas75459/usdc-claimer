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
    "2BroFiroQrYEXMxiZJhJpDQFTe4rP11r3DkaAPnt5ZssyjJhrfHzvX9prNuV9UosZWyGA2MCXDTYcHuyv3ACRgsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9uHj4KYJWvktghNuzJCpcJrRyJVpF2Lrd7kM1zrhjhs5z5mPKfZkFAundPbKfvYNTaJk9diKmSuzEiCPZBZkQ7",
  "key1": "3YBMNkxrg1ZFrnV6gWy2cvUTFpG1SgzywoBqjznrYVyLLcoVaftitkWWtf2dM3PYEF7GbwoWd3HRVpCDr3RB56m5",
  "key2": "4JQsiCsSHBcbSmo3N3WrRErS9gCLpsNHJmhmuAjL1VRRWRygKojSTSQW1FZHHHa9Vt7bB5sr8pmyiiesJYBfSYCM",
  "key3": "3BDbdYaotJfCaggPyhfyuuCNqmxfo4wgtXERUHvn3qTn6j5WtsFrNaMXwkXaR8Swo6J5FPNWCMF7EkMAGVCx3FsN",
  "key4": "5As3H6MUupuUKVb5UFpZ5t4EUa7fmAA29hPwJMVvw3yuDXjUJqSgZc4V1pMFw3ED86vSSMwCCfwoFv8mvMHJk98S",
  "key5": "4JooRcbx9PEWtCodCCyXKVHxfYPqPKuvvMwsRv5vcE99scu5mVUWGhom5GWVYJiKvsCuP2qy4g5YRqA8tgoJhtS6",
  "key6": "2VaW9z1YsuoFQEALArbNH2hJLw7iutzonMTadSBYSVyaNimQspxVwnuyC5PnJBmemAjMjgWpqHr4x7EzNMA3ZsLT",
  "key7": "X33ZjnD32VtkjW7ox3FjfBjta2EqMvGJhzqDVXh5NPadtiRU2iX7uo97ebPmcxzkL2akw28mV1rMcDtP1TWsggC",
  "key8": "4Za1wfY1ZNvayWW2R1hKhmsCWdPi4vdZv6bkAV6csVpHSznKhjcuzazDn3gegu8Ntqp1MGG89Hi1TSBPCBjs7FRs",
  "key9": "5hb5X63zh24axDVJeWbQ8YUnaKZYpkToyA3v4uoFTpJBg87fUUHPzQBHEja2EvEoNtDGVFQrsC6bX7h25jHuPYGE",
  "key10": "2QZ3q7Rq7puRStvjD1uKRaWdaPG8DfqeRJDq87ZADJCMjLFs953kbjRyVnv3YsjUVUWwfRNW3CfUiiESEvzfmLD5",
  "key11": "2tbvZbHsfaCJAQ9ffaTuCCT7nn8mfWhBhsKaHT6sAdJfoTgXSrU49sLcnpJh2KNWmsDUokgLiYiKxihQLsYyXhB6",
  "key12": "5RBttUraujEDaErrDuVHH28kyEm6Aj2HyBumfafxgs5RuMDgYDLqVWVKksDDfcj3sB6tUQjENCXLFT99nCFRss3m",
  "key13": "3qb9nGfP8iDgiNpqFDyJMzkuWkeVrGuH2xNtJXc8A9wRtgRrNCK9yzdfgAkYQfB8kRP2nZ85cFqyJnLXvkg3JnDh",
  "key14": "5d1eHvJMLrvM7CAubsFGVrQyb5tmmpPfmeBHvdtJ93FntPVNmSPYJLSv7KEMqnFLxn5CrCg4Ti7AuK2iz5WWczv1",
  "key15": "3Vt2y6CN7D6DbREeGGigHyy6JWw9Fj8Ytbm8YofLfsfY7BMaidfVwcDCHbf9P7TyZV1aKvikLU5V7UxH1Fgc53Lp",
  "key16": "2gmU4HU3wi9sEny1Q21rYPZ4MPWcam6LUkTZjFqPRXLmE98DFYGzerzToZLPjecVH5nztJwSxtQq1tm9R5ReDkKG",
  "key17": "3q7Lg3qhAiH9vXPYm6YhSM31hyVaYbbyjX4LoE1i1UCgZdvPP8GH2cAPkiiw3Rq5Rd86vfuZW4a39mRQZQcz9YTe",
  "key18": "29Pg7z2ySLJ6ofvxvXb3hUjsQFJZSwKfLASMBh4A2qjxTHW6KdAYHjv2G2hS7tBirTwZwyXzpJfVWTJdj2ZvQJnp",
  "key19": "32zLJtANbqxYJh89TybxiRm3GPjjvedbSGEx5uTZw6hibtmdDURoo34jwevcMjHqAupWtUbdzbPv16so7dMM8ZuN",
  "key20": "tJMabf1hqX2dQKJyxPUraYbH2sfoHjJFDQGngRcNTKrFDa7G5m2V8sLXreqDuuc1WMzdbayiGgQNtkSXr5e22RV",
  "key21": "3UpLvPQGAY1CcN9xBUWLcYcHW3sJ3ru5bvLcfdqwqXJg8AEboXKhQFRJ1gggvJFVHBTq4Rn3kJEPE83x9VVQeWgu",
  "key22": "4BdtUBj5NemegvqnJCuyqphfdsC81JuswywrCZFoSeWoGfh1nNd2DLjFkq1qiDVbtzKxW6nJAs2CHD3FTCLVWQvP",
  "key23": "3BjVGF5nuKgs74hLhbygs2wzk2TmsDPwgF2jgiEBaCyUcKJEoRLqnj6paBJzXEEHPr6XH5hd169dQyXNGXYqFxTW",
  "key24": "QjP8B5PfR3HAZKgSkcM557tawV5i2c4seGux2M7iGTZYWaJUZQNn8K6VqH5QEXbFbF4osZwCVgnBFNvaBbyikrV"
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
