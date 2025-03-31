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
    "3q5TZBqxD2w3yT5UUFh1LAwtp63nSLLce76Cf6BcQZqeR8hqXcx6VZ89AtgxDcVzrVRMwZXfkCEyFoCjudwQcXsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123yYjTRakNqXU9FPaR8p4bx2nGbX5CC3YgAd6WdY6twEQ117BuHqHXUVQFLqZ8JyBZ4ypCnKprwqbCCtfkkdU1n",
  "key1": "5GoRQVyzAChfcuYKKGrd2L9pjcmAp4v7hAUuJPkxeVFD6r5hXQu3N8KFDxdQmKFEK83LhtxU9FapUFGHfuA8Cozw",
  "key2": "3FMtXdUyPYvzF4pan2mVzoVRQ2ECxP7Dm56Jd2zNKjCy5TLCdxhVuPZEWkYFNqTsLPTLwHkE8fn4M6ncF177Jsgz",
  "key3": "ipXQJEhpgJJd9rwgfvBYe487Ckj8gCKaLNsx7ABfQgV1SCLQBBKHRsTxSCjuDYdMBfRFqihTpVDPhyq5wRpmGdD",
  "key4": "3s548wwsi4ST6iW7GypDYCobxcsxu6Una26DcUeKLKXTG16bkgxnYaMp56Z4YxhnvwLQpruonXxQ9qbXchYm2bet",
  "key5": "2tA3iTamHAmraxVa5uiVA2uxwbPFzR24DV4PYvUvifv5mKWiqVuUppZ5pfM4A8hG8m9n9Pehx5PpfFe7Z2g8SGWD",
  "key6": "4VLvEwN2PnBmB4ib5QAuWyvgu8xHad4amry13MKoYKTs11ecdCAhSvNZNAPEd3UpCLmLrPYyWV84i2VRN8M7VTea",
  "key7": "3guhniNZ9cgMbwrxwbPicxPorHVHhyYmNzzkxJk8wZM1bqvatQXf2rkCaBaaU1w81Esr8Bu7jNDVQz3V6AnDd4yV",
  "key8": "4U5xqBMgDK3CaQPRLYjfCTiknvHaLAt8qi1RiSFf88ajwXtqKxsi3h6ksf6UQKvRz5n7vKG8tTH3fJPgwtqhSUq6",
  "key9": "3WiZL1dSfbJEmXQtKnsSmoqnRt9AENCQ9PM1eM3em18pQVZ4Q6khYjmwaCEftxZ1aWxKJS1EnzhTCwDXX2HZZL3r",
  "key10": "59tJWQ9ZNQQSGp8oyVpLu7y5AXGmBa4vcgWC6gfwUR6HNEgScjyb4FU7wGczNPxaPySsXqf9p8g5MWgzhFDc2aL6",
  "key11": "4PMM7XEvjfaJNgXcweVUPiYDhip5kWsLd21TpkfTvgNCpm2AmCLtt3KxqKbabnVqWaf6bwi2b3Z1U16X1iorhrGo",
  "key12": "3ddcZgyHUor2TtWSnauafyXhKFuGqn45ww1dqr1khE9PgctHtksnEscJSDaWCvzcr4Dg6NLDxJTPQ7vVZ9LJXjG2",
  "key13": "3WQZY7rb5s3k2xdAdtJCqEJKjPDe1knxtrS5AZKrNBESKnZQU2vp1NZZBYefBbH5McUkaT5oyFGYu2cBFVaaKEdj",
  "key14": "2sK9HPc6prvGTkxUyAMVoxLnTcSLfxS4WEi2uEhoX6RNiRCLwG2ymBzow6ctzgkLvBCsCckyrCrJgDsdvaG8sAhw",
  "key15": "3qL1FcHtzsnpdksfvE5Uq1jroD2L4AjTHcFRFYJPszwRm1qSNCGqajyc1zVe7A2LPtVXN7nNdSvwFrjwpEHw4rzz",
  "key16": "3iPMqSHiZPM4M4oUActTReDWGH3TFqGF1QUdfH4ci7dmiAeZS3GeN7xuBZpUdQ8fybeePfUhbExhhr2zjGEdq2Fc",
  "key17": "4Yk5nuMY5zT9Phtuv9iyCPeHjJfts8ntq5C3ZxZ852MFPxwrWnU51sc1JGwjzsQd3LfXqTcBTskak1o3C1BHVNn9",
  "key18": "BmdjuM6ecnxwhzpZdg4iB7Y1vNQBc9qtZn3wqqf6M4voAZ9MQjTUS7zYmYNDYnLR929EEwimn3jEcUAj8dUDi5Q",
  "key19": "5nDWZhVwsQcv9wFDywQjLvNHqLy54WCH3i5FdkjfY83THAjmHt95dXPLi8DhiyCbZkP25syn9YD9AV8LRsAddTvV",
  "key20": "3h5xdYeNhSDVBmgJF2tzvbxvwqy6unrtdWdwyQ3CAEjLnHTekmr8veVhAsbYyShHv2zBurgofs1b99aXPorvBEDL",
  "key21": "5q72HK2Lip2A7z1T1jwNpnGqGGF6LwEXnbc84gbDorj75xLh5qx8BKfr3jBi5JcD87C6am2E81g99GCjtCnozcok",
  "key22": "5N1rvPDqBn5uEZxcQ9rkYFhPGrJLzn39govoActHCqQCNYAVjZGVPYLgBq67CyYPwTuaSBrLCpFYnkxthGG8t7hw",
  "key23": "3rSGXFRVSs82vEkCCTuJZ9qY3SfPV8HbEqYBsicLgBSiYqBxb9U5jS4hYcoCBYzPFdGNPBh2cV2pU3c2msJ1ufGS",
  "key24": "3tNQWk78b3XTEgvEc1jY9WSDG21yYx9uqhj5nG3ah8kA34mS4nr2ss8y5FsGTntA2zchHqjEwLRMDfC3puKz5r8F",
  "key25": "KLwpQiWuFadoSVqetMKPyqTs6pHfASnUVNKpkmFwSDewP8Lb3CVeeU4zvZLoUd1SppQvtxsQPzJEvK7z3MzS3XW",
  "key26": "2zGZiHW7NN5AfWdttwMtDSt2s8XETaQGKoEt1wZ4rhT79jrseLNX7gkzb2ZcNZa4bFfZSvwoEhMzc4JC4zXWYwyT",
  "key27": "58HCaYhvCR2RZ3Ghz7BWCUr3NjEdY4EYUXPsMgJdNNHre7VeYM5fd78H52SM7BwUC9eaig41uXwjeR8WHvK46HSn",
  "key28": "ciwtqqfnuXn9SNtVeCa4moxueyYWoKn8pwEp4jZ3Xs7nN2gebaqjvcHEdnBfrQVYRMwtyHswdqfPasz8JyfKKag"
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
