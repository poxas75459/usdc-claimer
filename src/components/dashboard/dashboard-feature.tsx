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
    "2nX8B4UCV4DtLjURiRLpqfw1iLCVfmAhCMWfyhtPo2dAdfmK6fLrvw5BpYk5baFpQf5diKEzPYCfcMrvtt7WFqQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3W5afPVHwXL9aTTJLzzUq5mMZEV1U2gMJvFGM7shWoSwa2pVxMfbFeEoHdaPob7kERRfbabGcxYsY12kaDVqrM",
  "key1": "3chZzJtCh38517924bmNtspNJi38mHPcoaB5QvfXGFYNkA7Niu4KSVsfLYXnB4zcd2gp1Ais2jpGiFCHV1P46U75",
  "key2": "5j45syzWymmpQ5scdJywKeXuJTTZmMv8uGV5tCxqzz3kgHmJ9iM6KjeSCQFaFioa2xAneroKDWwiypM8vQa71U9L",
  "key3": "3tHsveGQi6hByNKgsujq1gKRXjUaTmLAud5mnTWQoP66VNfGKHBA7XRSbPbG3r7BUqdQuxgg2yjHq6ZvepbEHwJr",
  "key4": "4a4qfoP2nEZzwyz8BgAXRwN4nmZCVXCF7d7YiqsnyLQCLbQjddaKw9vrXSPAasdioMiggrBEwPsA2N1tpM2rTtF4",
  "key5": "CsdDcnFq7udNwa52GsvXygMpTn823UTt5wqKb9bMYuUijaxRj46pFYXxDgBfT3fm5ALfxHcfzpBbzZ2MHtNzLDe",
  "key6": "64dSjyysNzVhSK3dPwkfLvyjiwc1L38nq42ajeEQ2snisCWHx9kAoA6jwshtyvKY2fhransxDAkXHSkBGo55Tbfj",
  "key7": "5mEbKmV93pukC9DsBtJQvTSN7LJdaiAGtsQVCRzmDr2CLSSB82aQGpFHELu21HYh9vqgwmbY1xXzLyoj6uUNJx1L",
  "key8": "2q4ZEo7wdURwykjfmNpnb4c4RnLHYPqLBh3SDU64cxuwuWnuKugHVoaX1BF3onoSqAFZBHv1W18GvcH2FBego1dM",
  "key9": "3kc1ToJhdkPxwF7WZA2wX34iPxE8VJYTmfFzARhE45HfdtSad9oJVp9pZteYq8jYaDk4xim6Be67uY2vYdfHfbyy",
  "key10": "5kuiWuxnpj4daKWomYWX6ZuZ6oyVVEzVAd5mpHDz6BDkoLQmmue6q4GcrHC6CVky5T6Ktne9xYDrFCPENti2iraB",
  "key11": "2AAN56U3mXkyQqpRcktNREERmTmaG98ZNA9YSo71HuX7qaPAW4Z1jg4rUKisjXn7ZKujrfeYFC44UcZEpUs8b8B9",
  "key12": "4EbgQDkZMkFs2Mygy4gYFSJqzHRLgMDQVhTTAsMEVkSQw3Qh8pU3JNNbRMeSEh9rwiKyP5x3ywW22fMVGPcS9L4p",
  "key13": "4FMnBK1u9iX2w9xUTy454HK8XysxpsADT1Vry38dMTA3j3L281YMijE9EmReJ3asnfa9cQcokzthraeovjoBqYgA",
  "key14": "5sq7pVvRMP2fYTyCfThMFNm1Qbv41crziEccjGDreg3CEkoCtJthhm2uGiY66vVpSPWPw6z9Lr29sHbNrccKBXQi",
  "key15": "B88mnFK1sAg9SH78Zj5A4Pzp4UqpGDC8LAkp9spqbv9HTaLynknSQguDrSNk7sUzaLauP41ULA2miwYrF18d597",
  "key16": "26kZuGHs3QnCZkXaarxoxEehCGaA1JZBN1EVZMrrZiXGTAQ1CJNY66v2wNjRWiVz5n3hSzNLqx1GTvnNs9w22xmJ",
  "key17": "5qbDqnVsfz5bAYCJ9aQVES7zheNEzFL2uoFawu2A7EDochir6q73AnddiLCGuPx1WfuwK3x5FcgjRk4f4i42zAf",
  "key18": "4JfEMkKqzvt8mwkBvre3etbeZLxveJekhf3xKt6j1SH7UYRDvpy1t69fYw7z6Cr6ihSKAy4Q23fr4mA6M29SPUE2",
  "key19": "5JaMK1czQLxgwJgwiJ6JsPBfibM9Ar7MwT4Ma4mAKGG17uZEYxwZKywz8nknUWiHkLGXUqfTxbn2hbRqFumcWFmv",
  "key20": "34wqFp5TuXPJLUYS5BF7p7KoyrNd1dwPH4bkq895r472K39uXpU4zxm5fDA5t5cVGos2GiAUatqYdRTXpqoPAToY",
  "key21": "65mSL6P4xtqxcypENRuZvohMTQ9w3Ys2Fp9NsmAogzLQv5DFFrJcbV4WNo6SzQju7Qf2vReyso4nCHAqjvLavpaR",
  "key22": "38YEPcnKzf7NpB2Gy783cYGHcRSr83CaFNiU3Q3tJTQAzx1EdCi1iqqnHEYhAiHBwSyWxTb5wpA25tbP3ZUvnj5q",
  "key23": "231N5K196BhYKXKNAbg1w3QXaiQjhbDJ6yj2ZTjDbn8jobFfLsjo8D3nvcrXU9GQWu2zzPkyXQtqEhjAedhobSQa",
  "key24": "3XQ5T79NHqgbJ8NfXAahzNYAbjDReXVyBjEqeyX1W2p84YkdyrtVcvUrSxdN9hhYSdM9cC7MrTqTGTLQDT8MjtJk"
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
