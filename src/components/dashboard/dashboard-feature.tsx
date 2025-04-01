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
    "4xP26hgtCuU9Sqxv8QuQUxUvT6GbegWCEEDdbCB1TBvyXhNCWbWcFiWLjode4V8XMMff8VtGJ56XNRfMKd5HdVh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5snMj19Myi4Ttpn1fLFPJfJo8S6rzPGmhFHJBQVfJx5zmStaFou6mh9vycik1y66hD4MuNTrFmBMeeTDkovFVvCu",
  "key1": "37PsdmTDDur7pnAs42ax7YdJLg7YyD4cgJYKWEq82XnJdQyQa1bt2QdmZcMwJ3nVEcJ8VWJdDX13iLoxhBGKciVr",
  "key2": "yeG9w8guZEycqdgpY1XhPd5PKeVdAi73Z3xD3AkXthVGWNHsGn9tQo25doCqUx9et35Nman2fyc6oj3ofgVLQzZ",
  "key3": "65nYQaStQacj7ea5K427i3eCLiuew7ZL71vkFVfu6pJW1zQeTioXVffTX36H1KbnDVj4ekt3J5eHzB6mYVb3zJ27",
  "key4": "2oFjKqKrP1xo4Aa2K8ZNQrmhtchDN3Nch3CuV8qadRRZm64UT3UzcVG4fxbzzsSWp98e6TKTp6rDfAitmanQMk9J",
  "key5": "2Avm1B1PjgEWTx9yCP4T8yKbPBxK29LBxgTp1vdRxEcVv4qEYmpKL8QvYjnxGfXvcpFpmU1rKfFDdbpkiz7KX5uK",
  "key6": "4vhxuvzs2F8B9Qb7KnVrn2mfynvFLVbWYWXp1PYUvxJJ1ncsSK3sRnty3vKedYfbe8VPM7AFBrgwXWfAyVrVapCL",
  "key7": "3uXo9Bs1QCx5kKyULXc7k7MrMNN2MqoBkMDmyQgTPXpEoFt92dZVEZt2di8cg5W6E27PD7deV1NSwxjAdYkRoKdb",
  "key8": "4n5UN5qK7QskrxLsMrzbA73TETAzAeKcAjTTAJi6BPyPfLsV5GJ3nYtHn63xMij8r1eTGWu9uJLhtnuGwDxDyJWo",
  "key9": "38rsjfqfK7ndQbMBzGvUMBmcpF9RMpJTLhRBPri9mnv5EuB8jb8UEZZBpeS96NLajEDLVgJJXK43wRdhFKG5JrCp",
  "key10": "4ctaqZ1eEm3PKz41bU4VneM1dHePfh5nwLk6ViC7AMJvfydefm5B7ffhcdrmD4FPy2XNdvHDEo2pHQDC6e6B5oGH",
  "key11": "5W9PaWzP1yfi5jczFj4BXka1icJcebAjr6vQ8ry8oBaGt3KPFTrKfNgbM8YgQGYYGsMLXd2BqsFt6ozncxwSNAKx",
  "key12": "2XbqKi47kHsFzFPW2HzcGuWDqvrkypJFpzAXahgFEikYs4rrXcF98ZTUKRBA5ekLdKsH8Yz1CCW9rxFJm5QzbDvr",
  "key13": "3UJdRXHPJsK2cvisUguUvZpx9bijmX15UJrGMSBqG52jWEMoD3byEk3UgYcraXfpvvLQfBUtGMQ85RZAmxF8r3j4",
  "key14": "3MnsUQHW6dtV9gLJwbQbk7coMi8bVRqw4HEVskx9PoqJtjBxBgZjzD9mgz7Lw9Z17K5UsCLLUVwBBf6Vx23518YC",
  "key15": "4UeD6kM6JYVsDUHbXbBHZJbT8pLFeeoKvAMkBH5ZNZGyg1iumjWHcrxn5QPZegsj5Q53KtcTbTQC4nyUKUBLhhdY",
  "key16": "4WCVNEPfW38aEoxTZ6Fyc7RaG3GpvjjGJyGhcHPaUUrFtmVc12mDnQ87NEkB8faFJBVLRndUbmjq2Az2Cjh3XvF8",
  "key17": "gQNVNeM2EuZoNuW9TKeg7JfiRmTwNQBMvF8kuBzPt4974ebXWefw6MEXgKtToDiDfLsqQDU69yQMvX5UwUoDmmT",
  "key18": "4DLmojujX4WC7xdxDARZSQxCX64kZGHsFe7wzdfFMnDTTyc9fN2A2jv8NdRRCdCxuJXacf75Mu71SEfzFv1m5ssG",
  "key19": "63njNwfQuzEq8YLDUyfB5EqD6UquoZ3sHh8dsLxmadN4HttWWNtFCQV3DYusPWF8SxUsBfitfaCbZjn6MkhP4xiz",
  "key20": "3VY3kpdDd9RxJPEbG9KtLxNXT9TLDPpkkrrbkS9Q8sqNHHUE78fJAtaPhPWrHMVg1atvF3sDbSyvXqHhsAYg5MEa",
  "key21": "5tvYNuMjdPXMsVRJhh9SWmrsgBu2oyj53CbUsMpSHJzEZjAQkY9fAXKsd6gwEExukGquCzniaMN9umQUVC8kcWTi",
  "key22": "41gz3bDCLRyteaqH45rhTTS1LTnvoeeNASBij6dJxb4sMPkCRFzY91hV7K8qGLsAcBXFZHfnAyV2TNVQSPsDUcte",
  "key23": "55uckNPMgWi6d4FFQFduiMgLCBjyTrVLmWdDNXZEP7u687ia86ChoWQ8bPUxhxWCydU7czxfQ68cKBSapFAD4Hyr",
  "key24": "Ans7d5pLLLtL543x4q6M5GhaosJkakdEyacLKZDYy4nKwoRMm41EaumnjYk2winsi5KXcWyMZs721ErE8jHKS1J",
  "key25": "NPPPNR9XDiFm11LfwY3TS9DmpyATa4yjoxxKTn75kzATRCX96bPBcWeYB2kpaPbsfa5eidJcdxpHFBoYvf2V4cf",
  "key26": "3gaWKA6uCPYBr5rZnZW7cvM7SNVzqNtpadu3KGJH6cWh59mSswDrszujacv96fA7X7jN2emKqLfovmRCt79xf3Va",
  "key27": "5t1R5d1Dvg4gmDqSsBAJa3qdgaxTBZi6471PYW61UMWYi4tmWw25TZJJxtCW8H6dcDoXqRXgdzd7NqbcXV9Kwnb1",
  "key28": "5MUpyUz6ZxfcmiuPESCnexu139V1RhAUkswvxcTGGFAhY25tZrgan1wzvCSXWQv3C6YBjGpX8UrnhXxj48k2Db7k"
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
