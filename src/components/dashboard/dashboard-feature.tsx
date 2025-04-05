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
    "5HQrCiBHBwL93NzjfSmmMXatjGMuEUP8roE3TQ1DQ1fdX2oq9CcbNStKk39BgTEaeSJWUkeh99xPqJiRfU8iJr4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmBFEV3bK2HYHu6UbxpD96UUACQXksnK96U64cHzWjeRBXZ6iVyQAHNzZhpTJZPypesGvdSwArHhnMdmMxq6g7k",
  "key1": "3m7QyQ1MSKvszJrR8Q36T8fbM9iZ89hmqdxmNA7p8K3g4Wokbgdn8HF3ymwUQhbbWCd9j2NxP3GzF4giigmgCfJC",
  "key2": "24chAfFTsm6AwHJ91k7df2TfqSqY1xXErFiuX593dPWAzPaSF9rZ5QrAocXni62nhiAhbkZxCtMjLgrv69WdA9q6",
  "key3": "44uGnj1SEYqpJnPFYzgRA3SeC2DjHGhxbt6h7joCGiXtMrXUcXiKAiTUU2oonKXoP244HRux4q4YnjB2hrWNCggV",
  "key4": "25TUp1qcyQiTJTEzSSdDh8idEr9DtAEqymDV8aUhUp2zBEm5g9RSWXPYjVgpTiQrHfxSXHX7XLFFe2jMa1HAnDY4",
  "key5": "yfQoypPES5saz8Uub67toToFWSnp8Ggb9s14o3aYmvQUuzLLEK9K8NikWbS2bWjLY15K82as9v1ZRTuRsgEjzMY",
  "key6": "29TTpkJCUEGvu1Ve8Mo9mUNcggLG5meoBdh9cWQXZoDJW3KtFwKwEWD7bmn3qMRxTitCB472xHfkDgxPAyLLHXiK",
  "key7": "3SWMD4gMu6ahHSMJNv4btNL7o4geDeTkGwePnKoF6aTdh8bgw1va5fFRmAPu78PYhAW6KG1HLMegtAboRhggJcKn",
  "key8": "2dEtPVfveWyc3jKvttZdVgL934gttcV3UsGbaPewparYBZD3PCZZsBP19mrtrAVwg5ExUqUaKQNSPkpBmthRWFyW",
  "key9": "2awssTg73gz3WRofcWnAhBzNUSvgZbtLqjnET87efV8LjTW2Q8bEeMXHGPSjCzohmsxGfNsSmMcxdnW2VJ1ZC5ob",
  "key10": "5ev6uddiUq56tbWABvshS3xmcAySNtZerDH6R5qfpkht26oGndqEbJqvvDaewVoBFz3x2xb2s94h36dBcRka6s4M",
  "key11": "Kr2xkbiM7ZncpQ7urjdoYDesfhJUcZfTC8QnLmfuge1vixyGMHCihDT9nZL2odTS13Kwj2Hu69dSNEZPcR7vcEz",
  "key12": "4rPTKYUjsnRZumfvenbwTr2jwLAjvvKG6cijNGjAx8C1kPpfdct2irvsvcGSgiUMtnYVpqNL5TynRVPvpJRwKuGi",
  "key13": "2SSWgSmH4h4wPtVrF5SsraecmVUKvYntgUMnnE596VveuqLGXYvjLmMXMFxtLQdZpWZxzVnrxfCas1s6Ct9Xc53f",
  "key14": "3WKNTDA2f98nDFdxAf1rprNKiGkxHQ1ojx74PxTfXxegtTH6V6117y6mDWcMdZKyMR4MzNqzh1zjFsYsEx29Fwyk",
  "key15": "2evxk5kypZsK7cmi5sDgKAjSwiLwsYGty3pJoF6RZBevg2mgaUn3HUfFJcnKr7mQutHwRVrdqbqk7TT7fRkYMc3i",
  "key16": "2QCXyKY8CkbzAEF5wzfqooXCt1YKPTqYBm9LPxG6NbtrRAuZozKkrpPb1SBjwreRwg4MnnQorDyQPnCC9b5gZKS",
  "key17": "5nVFrtKFJvoyjE6DmB6RYDqG8rhsxrinMALEBE7qyWLUEr8MoCx7KetueYLgJ5cwyqnCczwoy9Q9rERjjbZ2k6xX",
  "key18": "24yCvQmckckg25Uvd5zGzLCwbMGpj8oWjzFBPdyhFdKHAiUdtynWCr2Ps6LCEbshBmLiXURMrSFWh2pRa5BEKGhN",
  "key19": "ZdTnMojKTSFmK63DvQFjAVZ1BtyRcRixKrziWPSY2YqjTwffPrHKKHUPojJetAymUHG97ZQb3U5nL7pe6UcGpgm",
  "key20": "3Da9zTWjHNbeGc8srGfA2hMWbnBJa7fq6JU72dt69n4i7GzcvAy7zTmKc3cZCrCaSFeG4h8e69CPfpzmhUoVxCuK",
  "key21": "5jGMvE4m8UGT7PB5wL9HTgmAHmsZ4vuiKymVDfM8mRiU4zKuPEX94vSS4pKZdP3FiruJ7WYGJgevwQMmzYeCbKG8",
  "key22": "2Fnei4KtVP17shjL8kCPjNttjFP67V9VwLqaPjhsc7urbpUb1RuqFxK8kNoJCXWATtBq1Z7c1CfgbqUBezffMPev",
  "key23": "27SJDRftGqHZLBUMfoQ133UG7dverPorYSm8afM6LACKEFZN6ndzw68eBBtAst7fQeZHY8fhUkHXnhBfmzn9wtja",
  "key24": "b9dyhLtzxmf35WeA9sDVKbb45J3sPwSuSGdFv4WvsPgeSC3v6TmPAynw9ERYJUsjpWMnK516a5S6YX4CSHxyaT8",
  "key25": "1WoEHtJg6kS4bf3tC9mRiubSFSpXs3Sgatji6uybXBTMSkcwvxQ5HfVEnJS9BwGR74reHJiM2UxFemsxCeXf73V",
  "key26": "4PvyjhNm7A57i9w1pj7yghsfBCiDNfUo3PHMwrSow7326y8FZjthmHL9Uewrhhhb3CxgQtzvYUDtenZjZguzvSwt",
  "key27": "3uBFin2U9nBLFkEsp1PZ7mDLJgAZPN9PBPhNoq1MnGfdACF5y9P2uv68vZSLwidpPwCtPMyouH1m6Uu1rx7ngCXW",
  "key28": "3mpBTHwJotuuZSqhLzU22NFjf9cb9haZjHAh8R9CX8GwGws6TaS8JELSkLeGVaUDnhZcBh9dXUmndT35147BSCVn",
  "key29": "5Faf6jekgY1AkeZTKHZeyAKSJ42gN5Zh3pg19wDX8siuqqcZFv9rhEw7gxm3pK7oPXvgPVcFyJfr82eoWmwKuMfK",
  "key30": "93zUfm8FapBJfkzz4RZ8W98uyYpca21BqRQPjPBeUyd7c41BPdxNzMcMLYtMygMYDeNERQiCZxuGhhv49dra5B3"
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
