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
    "5K9gfD84w1f9gzd3cEUSD5FPtmVLdLYYcXjo371GhYor5SeVVZKND9KNGK6hUyw87zRiCSvrtg9H3dc7kykJNrqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGHiQ3vH2TQTLNYFMRgzfncgMHqt9gzPV82fiivtu9C6VpKXAEKyby4Wqnt2DqYstJE4zrUuH4gX3JYRqGL93HH",
  "key1": "3uz9a8aH1jJfGXWhErfeqzCpS6JfMi4YpzwPk7D2Kqwpnp4HMLLcd5PrcNgSpfPNH7jTHjcjDvLkUsNHhyNFHUE2",
  "key2": "4cP8GvrjkiRwgq7QQMwuhbBorGtCq6Ejb2jMLpuUf98twXYnMH8YgLbHxBqf6H9v8UvkwZv4y2qSsciF1SWeCN5r",
  "key3": "29BobBZUZ2jr5kHySYWyw2rjpCBGq5oRYbCEEcd1MWNSuNgk5eZMkJxfevAxAySaGuW6ZNHGoLJmDc3eB7ksSG3o",
  "key4": "3cDjrHu83UJMkJofo45Fa1GHFiwM4jsAbRbyviTkxsq22WRc6B5xfmZ4DkJDX3cUJqzDc4HoL1KNFncnPTygZrKr",
  "key5": "2AqRbQVFYarRun8brKXibUNv2rmgdDeqbpNumQtcBAzepZ3KDZufNujZQ8RQo9WnkasJDrxyeeYZn4uGWieHW9my",
  "key6": "4Xea5GqraNkispTutxveJuaE8d16hgBLGAfqu6tEfYKQuGGpNov9TSpQ8gvzBoW6B811tuSkd3bBAJjvZASUNNmE",
  "key7": "44cr9s5UWsqNtg9LZE6wBnffYruh8dRWPFhedHJrW3dQT8f5pFKRNwUL8TGEp5cGF9YAPJTxQLiFeQ1oft5fkGLy",
  "key8": "3Fwqf5NnKkNsPnYZJ3JsY7pwj6TSQDtrXz6RvCGjASEfdSPUbeJuMjbw9rW7Rbh9ceN6te1iHZsKfTZsgqTfiMPP",
  "key9": "3kJsUU92UbNdi1nxHQrxw97nzXBb421MMwFhA1YqW3hxq8ASDNayvCHxE9oHKAfZeomWn8H74QASXL43Ms9eCbkB",
  "key10": "4iFTvMTuHbVLzFs3YYbSmz91zpddgT8XzQMCq9YKTqZcdP111QvGyq7vj9nFZFfo9d3VR41Q4pwKxMtPY8LgnaSh",
  "key11": "CaF573n1B7R9F7EmYnyKwqbPq7zt7PsQ1ws3FLty1sMhRWuz7osbkkq69F6kJQ65wmzYpRKRQhsVCgAdkyVC5tP",
  "key12": "4Xq43K8nhkaXjyxSFAmNU87x98sujyxRdhYVWsjCSEJkWeFhaCWhfsNbu1tAyCDRkz9BrBqYSctbkXEbnAorfxZG",
  "key13": "4131dBy9FnLbuGCsZwpfc8g85SfkGRRgVcW4HmyN9LhEca3YHJjL2qV5ZMxnZunH7ZDubGiToYQg9LcGfMaTY4yc",
  "key14": "d67Vcg26R6D9CbRD1pvvzMLd3akkcxg3uy5PaxEisD1whFZeKLXnVUXvGLGNAjTGDgVsnV1cQv9ap5BPrdLWrNV",
  "key15": "3MSMAcg9pyzmmWNZiHXrnA6kChiLKckwEDf16SK5N7YcKv4ciurBPrQkLWzw6eoAPt8oGksa61cFY7cpo9bYCrY5",
  "key16": "oFYd1HqsouTzuSyMMzJpAi3oLtiXobBFqxy6Ey69vyNuz2dcfytDHKMFNatYZDAaQEt4HyQE3KZQTRLovewmqpy",
  "key17": "5UJKyWS22bYeiCzEWqr8yMNdTCuJFdMfiaESXeP5soeJxta9H3F8YwqvMcn3XD2pu3Cv17jeTsagiYUMb4k2rmjG",
  "key18": "62KLr2JcKs6fUumradqmCbxEfxGwsHssNzAKuquRuFXub6SwWKBFcyuYnF9tGiAQ6C7vaB83zpyKSAeRUtdVB8TA",
  "key19": "5amVSDZSJEzqerBv4aPopyUhQTdGksd1dpMno7p3ZjJihH3J4EeHwsYxAg5Kh74Dv2i3Mq9k9Kn7pmGJoXya9uHi",
  "key20": "4boRYFnnkX4J9EdgMmcN4FiZk4pMPLCw9nXYHX48FsMDAVFjBnYv5kEmaKYViYoaujcHRWeD9crooYfXqn4Rvc5V",
  "key21": "29sjbYurGLEybADhF6cMhh41kStuCcduVcK3bSZGnhWiHzje6Y9RbTYWvcoEePLpA7nqH5epbRw5cFUQFoT8ZUvg",
  "key22": "2Ru9oDH6ZncJ32t74wBGTF1SsL5gAUoVLdVBXEPV2BxiPUix5Eis3bQJ1KWC5SJENwB1c57Bit8BhJpgvTngFtVi",
  "key23": "43WSFZQM67zQ6gueb2mFvhAVBwGt9BtXCF4Wj38DCqcBZUkJ41JtuTMvwH54NwkeSL3NDRAkDnacfJkvNvzjz5Dy",
  "key24": "4auN179JivAin1Wp2LQ5j1epYk4yEn4eHC9tt5yKuRJq3dnLkGbBRZ5Zyzj54Ds4cUhYAgdickUrjZsbBcCocCpP",
  "key25": "4AoJGv8pSx5MAAT5faoKWBoUTgRh9NhqUbqUu42d1isV97hGVaKZGqAksrtTou3iwK2x32GyHkMVGqAvY3N3HmW8",
  "key26": "4QmWi4xSr7vxSmTY84obfDjfrLySZGwdSkVphj4hubguyPRPZGXYbWnweeW2XbDhfvgC9GTpyBXxkVrAtBqFq9fB"
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
