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
    "47PkowVzqvtUPbHKqXMNzZyPRwPjFvakJYtysZHd6Ai4PHu9Rw2RFsFPCWFgC4DWVSvheg6X3JwAbAxX3UMwv2yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYQDK63RN7fLP1AxxFP7gR4RfPts3J69oxyqCt8Y3TWwoNkt1CdMY5RuXLutHjeK5DofVS1KGcGTk4qoESK3Fqa",
  "key1": "3dExqeETf1DYbsk5GiPp9d3m6xoV9MYg46QwV6BSpP2gkfYSypRfd4iM72zJUuddRrwtLmYSi3ukpeFiQm6kRPAb",
  "key2": "GVbz137uC1R5X7KdpAHaD4M9Nmh3osE5gbW2mP3mDQtgz1xxo4mvaAYDhiA7qTaFPT8HQwWdSLrqJtBhXTL3kUh",
  "key3": "5kv9xjWUgCPT51rw5urvD6wcFzwYwNNzMWx9Ypyjd9m1yacuAWY7ezHbnH3bHxT85AopdCygV1epiyqAVesCYo5S",
  "key4": "43hgog7jdzW2qWnzpzdqmwMzR4cf72D1JaeHJwfQa4TVPq2YWtJETfJP79pbRMr98osCN2HZJ49BF1EK4GFxMpTG",
  "key5": "2DTfH4w9uBBpaYn2nofAn5dhUH9FotoNCh12YrHsUR5hMF3rrrFQ5fHaUAPLDdVaF5nPDxhKxcFzhPY7Bycc9ZjA",
  "key6": "gkzZgfGmRA33BMfmMiFEXKgu6ZhBJbk2gidTeceA9uk88MFLAWnpTwZ8fSMqavnMmfH94R9fKNzN5z529YyNqEe",
  "key7": "48Xv65jNhpxESb96vSQwpHWqVYLJGjpNuYsWqhWDMmg33Xu6XNbnG8ACoQnu6kB8A7jBPm8K64LHsJdTXcmvtmUm",
  "key8": "MFWZejrKpRJGhmTKo1xbjMxbfLjeCo2jWGNnjdA4Kj46atdM5ioE5mmTLUWrSr1UfLGRcXgJZQV8CHEpEaBUDBg",
  "key9": "3pZL5N54mA8UWJZTrbjZXGy1v3Rk8t6XKdSznCVpPYPYZRghhL2PKCZfdALmee9QSbkrMjFsMeoDuqYTWSNdY3QG",
  "key10": "4SM2BEzAhCR1isR6VTTekq6WQGLn3FTw3ZdAdQia4Ju8VfCpEW71NA18fkC8GvqNsMvR38fQQQ1TPcqJDAWtgzuF",
  "key11": "22YMRtyRR3Ekq6U14apGVnQXkb5MVNrqjkbia5edekeztvbBuhC2r6FdMwSuhrgqYqPWdkHgx4Vori4d9r4t6ztF",
  "key12": "3dajDv1f2s3dixNhmE3WNYkXrFnNTkVus1gpRQdPTpC3GKiuJvDTi3za3GwV5Ui6Efep2i89sPVAhkhCkv8gLS4G",
  "key13": "2C3i69WX7aqkeJk2ngQ8uaAeLshaN5ZkkbZoBSXWZ9g25Jd7kCDxnCcn7wxCmBFd7dEDdnjijRWRuziYT1WjceYy",
  "key14": "5ZZbMWdvnA489NFdVWuzX77LiBCGjQGntJiZSZAa8fheNQmpVwwsrjwUmiTW6Jz2ojn3fNyJyvhbtkDnaJNw3Nt8",
  "key15": "fBHYEm9pK4LSuYBZiVB54W52XbD9ZNTkF3fMisy7akv4NYNRyg8rs3LorpBh68q7cFdRGLgquMH1Y96wqtXAf7Z",
  "key16": "3A8Jr8sppsaJ8sPPsRtBpw1cvyBiWu5WfqkBTkBr5ZX1SKMRS7uubJRdB69dLnhLSm3Z9sdtcuJSnh53B89pRri5",
  "key17": "DLq1F9dPMBGfzbtX7j4HEJj944S1QPyoJhYe7Zi7o7ALgJfawx12dExAyiimTmq1zqRY7UQeF55S8mHBWTV6t8Z",
  "key18": "27gm48vEwAsvko5ru5n8vZwqSQMM2Ewn2mYmmPTi7gEWstnhD6cXwmpVZMmqE2A6ahdDkB56vX2e3htVn1C73FLL",
  "key19": "3qkcsqzUNvFUF3ZitQagWYKAKcao9YdKcpoPF2NcjVuZ6RaZ6b5RPjmKLsyzBCKPa5Wq12MsbMfTiGrWuWGAvnRU",
  "key20": "5wk7Z8LieJmKz5B9PQBof79NdK991bhJzm5ou7htqC4s7xTcWUWomecu8QB9KddpTbJqzTo6dj2Zzg89rZP4qMhi",
  "key21": "64LiPbVuknhYM5e1YLNDUe5c76aF7xHJZB7qKKsE5DpVKX4df2ufp1JArjei8rKBdXmayE4yGqKX2T7ouWDbFrZw",
  "key22": "2BDcsaVQ4A3QeoL17xicawGK9tfqWmLB7wxV4yL3uHXiJEoSu1vytLBqgGv9J1Au5KtPq8gCret6AyF1uT9GHtZN",
  "key23": "36wZTcFBwchF66bv3iBauaEy67Kqk594nqnbbJk5a39Qj1XGEE9cugKmxcE3FGo5Ht2j5S79bmu4XoXy5UGWjhAi",
  "key24": "3vqFg6Kr2AU6xfDm8D7bQi8nLEnTPWGJYf9oYCgrDHJzLfictbWbi7m2hRUqi7xtkcDCWPBLW4KToYDqUt2sdvez",
  "key25": "39Q1x6kfpMrZKfCTdDDSm2yhUFFrcZm69w31RWXetHfQDveaVmrJePUcrjLJuVVcC13Z3CDZrYUhHknqVW8m7jeN",
  "key26": "4dx2oBzeq2EBMjC4bgGWWiYAR1FsfAkybnLqExbuWiLhmtdEdFkL8sKzcseAyRr1APNsLigu5jXUuRr5k38Rhfia"
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
