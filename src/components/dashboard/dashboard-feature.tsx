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
    "2caThTnmg3XfPXqAKAe4TnRQGQP7vNRDgdfXvTf2FRMq758gG3LtjeDhUEEhQnn7urC13vVbDEDxX2muNFPE766Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cb3R5DUgXFkWPhYpxBWdYfrv7Rf15yq41wJRnNGTQKYvZS9P44qnPFZBUz3VRFfDbRVqNaBRogKnmHqzNBXHYps",
  "key1": "3q7GaXgEY14WfHRV3gtPJJhkwvgR967Dyk3VQQgLjBCLGVMVbLndmhQvpFtKtByMSgnehrAw82jvi1p5gPSZHNh1",
  "key2": "27T3GGMtpdeKHiCcf67eefHN6bPAzpWjqgbxAsnXQD6ndueUXoik6QyhPw3Uk6BCHZ3vykiB67y26pppWHpY1U8C",
  "key3": "52DrNvZbP9LgXuodPNpja8KZ7AoVQBvKCarjPPnyBnPkLKxXxwFwAoFWxgcboXmDqo7Sx2Wy4bsf73KkbFX9XoZ5",
  "key4": "5QTpw6rHyzZA4gNE4fCSEmRMRyewqHoiYjx2dDRmaiUR2pVthcsPbs1j9MeB9o9BZGywYCikn8PtBSV6LR2KbWy7",
  "key5": "4Mx5evrLrBHg2QPU3xTqhGcLSxSY5q41NyZyXopD8DmUy6t9pnovMr5TPwTEXZFWyA61QWWyS5jrF6fnTiLoBgKR",
  "key6": "5gxfBPRebgp4Dh6NrTd9Q9XaMp6GXSiEyCHppH78Raw3vGKNxnBTnQs7WhoEPmGqV3QN6faF2HKBXdksvHYKStd6",
  "key7": "3PRqKd44qXP4ADwBysCoAeBYkf3Mqs1SAfxG2HqtD9QRwu2gaRJqV9nbwZay88G2wjPieBsm9AsJmvjHfvFez7NP",
  "key8": "4XQX5qPXy4vQfhQwPJLNJ8Lsm1uFACau4emo9TTUaQhjJPWVmgJjEWN8sna3pdUKS76wGXa6MbRatiEZ3Pm2swrs",
  "key9": "5eeznq8484QvbM64njFWNrtnjDRpTVK9tuAoJBEF4EJ14gZj289Auq7z8qmQNgxn5p9R2c3UsQvy4uvBTxTmQZZd",
  "key10": "haek2xGTqVj3dxFTy6BrvauJdD9R3nqmMBzwaSiUxofqDWaQ1ahvw5CayotfCSFWjaRPsdkR1d4X4LNvjmrhMS3",
  "key11": "2GPS9LLACMoPu5vSHNxK4bQbc2yCe5XJ1L7ZMxNGGFamsHyS6yGYw1h771tcUrABwezvRgXf3udS2qYo5463NxJc",
  "key12": "2fo3qb55nzX8aUKWMwMpLuxhKk6pgnAcS8BVQwp19ptCAJ67oDcQBFs21VJpSoyZjUCVmS83FvH37DmKwpMnj4c3",
  "key13": "27CooTfcjkpHe8BU4DaudjUJbsNYACqn4bE5yJxSW8PCN4KiMTDvNXjjozShJy8L8HkJGBi5fH4zNdRzdbU3qTRt",
  "key14": "CLKpkNqhbiZGFMDZ8Y8gEcPSgyu9PLiPAYGXopkpvxsfovZwiaZvjE2xLZfTRZEYM4XhTKaX4NqtQHredRmDLj6",
  "key15": "3LmV5aDgf3PG4a6rkwdkERKH1mJFNP7bntbbM6Y5msSW51E2JAyWpUFsFT8vTtFwCHLaspni8KkqFVWwqpN8wn6g",
  "key16": "4T33tW5YygtUTnzN8F61PXVMwtydCq8h5CQ3T2AWgzEVJu7SQXGG8pK333vnfGtuRFW3XcDBjBkFJFcP6TwNMUKf",
  "key17": "vNTbCRvHeAoKmopzewuk5nVJyf6cayL6BPt7uPDoAodVa4M1L2vA4ZpRydfHDxnUzV3g7kXWTJeU9Y2ZJRus5Py",
  "key18": "5dXUPT6YqhcNbkXyKdi27Fb6UiFTKAXwR1PXBjvhfzFZGiXatjKvX3MdNfb7L2oUD9o2tQjjzVvnTfG8VKp4d6rF",
  "key19": "2jZswSxvAdYEh4L9CJEbcwxyVPh13Eu8iT5pmi5py2NumyQTnyD7EXkik3EMirTW1wLYSxNT3syqyn7AgFj9fU5y",
  "key20": "2zoJzMmJxi5GWe72oFvYr9cG8PPg6mTCKewMBy6phP7BRVkdtwLgcyTGuSPx4uBu3H3ZvwjehdZVNYX65w2L5tyP",
  "key21": "bwSCHpVXcg7fTJZve2nWwJSaisWExGdXugCodEYJRj55iRCZTRK28oVrFxuD2QJjVbivdDyAVwyRYnqndz8HUbH",
  "key22": "38fn6bBuDa8VygefewMmGx2SAiZiUik2khoLAWRXotXsp4jEXNNWovMoTgBgbBUEzd6Zi36rsQCTsDmYC9eCFqhr",
  "key23": "5iPn7kdTxy2NrR7PBqBuR5TTe9u8RHCeBvuVTVfSD72Gw9p5KYM9xZ2AeiE79x22gCLoQgjq9yFuapx9TXpQAvMc",
  "key24": "zDUc9RskuwicP8xgdAhmbLx5QExD7wYzota8iQFuix9skQi2VxGJK8eYoEwmzpGbLU4fCmmZr7R5XFHPqu8aW96",
  "key25": "5fa9rgcNZMPG8nKPzxg8DNfxF8eF4xdK93B4hRVLCGAMoa8CP9rWiAp84ViayWqvbuFJTkq8seSuZeUF3cbFQdBU",
  "key26": "rdjmdwEa6UHBiNMq6jzwHmn8aBCkQ54yasz64n9uVnt2cMvDjnFYyKKoY6KXhrH9LKSSfjBKGZbk54mvfAhKXuj"
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
