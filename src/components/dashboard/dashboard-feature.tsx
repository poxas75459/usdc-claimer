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
    "3hTSSdrW2A4swVk5woapdyL5acaV7K1o9jUztB5tmg9KCSfg5w5QPF6vDqHjBqUiQLNyR84ydciFjjTwo34dvwNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUQb2cytEqAYttADtxrb7HQ1DfGU9tCnQrq5bv51VrudN1SHXcvGZcLTuez9bYrkidkqTC3r9WoMwEpekf1Z7vM",
  "key1": "4gtFeGWL3cGAnvHPVZt3KNcbeZFTCwHwLdnbBKTcaDt6c9pZpvVGhiRcGB5LK2fezRc4ZztfAzcfuMrerPni3Bho",
  "key2": "FRca83JNjCvXYKxqH3gbXzLx2Fm3xi3B4Byvg9GfXPzz3smTgEJSf9m3pLJS3Gh6V9bVPkhTXhP1wxZy2NS1Zm1",
  "key3": "3Q8kJZ3sDh7pWBRiG6reETEhTF2pRscCfL9qDx6yW4Wk8MxZUZsRstgMCef3NiXFQhw9Vbw8n7Bw3V7pWNQyo3oX",
  "key4": "5QJDD4PHt4ymBFdJL1k2qbzFJjA2aTAjopK3Yf21JaJdnrQRhwYTe1XQpvmEigBUnxjwNjt8Fv99kZqjqLSsxMAv",
  "key5": "5XiwED3Dgb4gSrnqKxEsZ2GkgypraExJNPenGG7xwuTGE9DwF55QEYNPXK3KiJbVx7CuiccBwih3ydQ1UkA9vY91",
  "key6": "2SfRPRaaHZTDqGEgUTdf3u4JzVtiL6NrF4YHmNtMHiVCXB3Rdsu4sbtZQsibSnBWaDSLZruNa4VFNTWPH2aHHtPo",
  "key7": "ajap3zeZFHFzvmwyBKVQbSjsX3T5fkN58vJjRS2yiWrxLCgZUYsTb4eY12XE1cY2HRtADKQvqXa5shUWbjLEChZ",
  "key8": "51sRafFhdmW4KXjPTxA26fi4WrXhJhNqqaS9aP7NNehNCpJ14DMaCXPLGRCSThhQ4bLe4WsJFBTfubpPwyMaoXGu",
  "key9": "4iHd5YkRABrv6w9SvgtE5jnSS66gR1KkvFbV7LZ64qT3ZubmcHRt26unhUQMYYSpewsdRrMSNWLmuJP1Qqz6i28G",
  "key10": "o3h9R1VXK6qmdwxekrhLdS2zhsL4ZiYaetpyxaVbHMv86WCZVttqXbTfDhEnyGmq8dWXxCvQPP8AGHmdX33awU9",
  "key11": "5RhUB8Eg3b8rv4UTTaDg8S7pTh4jZePMCGK3stS6rUwNB7sNTA16XVfV3qZcxiyLowoDVe8XUWZc1t41r23GrDGg",
  "key12": "3cFLJwqJvtwVQwSUAK5Wv3FA2Y265BuVSQM4W9AyryhF26eXPmQvXbXvHvc4cFA22JegrikFJExkmrXjz75DiAWL",
  "key13": "4nj1TaoBVKspvNqzHQKyA33aTeztQQHranJQd996YeNmSoGtszySWNh4mNZ83GzM8o9gU7YG7KaoWDd3HF33zePd",
  "key14": "4rJVZagrrir3GT7x8sDvATnUTG2Sjr4jPaoeNeVB9rsteDh8pbsdRH9QT5YwYx18PUuNARqX5ZUE8hnHvWU21YGY",
  "key15": "26taBqYSG5zrCfnCYVcTsScYV1Vpm6MSaqLNgE9tktXaHrjzSCVhWiLVfg9s1dUn865qa9NX3snwnwjs3W4MTq5j",
  "key16": "4T3yURXD6HGpWRctaCPJowZs5WhJFJZa2zrZNwiNDwhndXz73g6F5ChN4yb98T6Me4zimo8V2nTwPsFwb85aVB3N",
  "key17": "nviLGPVA22FWWVCXT7MvFFFyk3tqU2YswUp2uJDmxQndZfWCBD5q33W4ivjT6eZ6RHMuinoHBLTx85YUUYLYYTn",
  "key18": "2dRMNMydjnakPKohyfiiX2PFuH166WXSnbgfA8C2s4SnX1CKeN7Jpk1AjSuLdnzYfbmBrQxcSw4dX4GmWAcxJriG",
  "key19": "3EVtg56CG6jF9zmKyXbwRVaMKdrx4cGNEjpqvoq8GsqcjmiYYMb8MHjWfoKQMgxCMypGghL6FhnyKRxPAB9AD1iL",
  "key20": "3ACaqto2mc6fZksfzSGXGE7QWQHeof4Bi7Dtvwoo6M55v1NBUEqKi5AxEvEUH6Xb2TgPzwrm25ivh6jK2mbJuSwk",
  "key21": "3N4AtrEAjawpPPPcR6VHYaUjvH5Shcu9k92L4Z8tkmCr6JHrKc4oLsSyHYD8uSQjBmRS6Crvi4AfY32mrUUEJvu6",
  "key22": "4uHpZSmXGuAny3f2iee2yxrwXsVUMM73XGWa7bRVtTHJHazpbgLruykNEjNuC6UbtJNxmxaPoCVDmzZxcxA2PyVJ",
  "key23": "23PYhxDBuGYiZHH6qYTRKCpPnnAfTVkMXRbcxYUj46FDCXRJnrCeBf6eFx6gJgBqJKK3oqHhH9Bm1i4dPKCcGwnL",
  "key24": "kZdiFicZSfHT9wZvMroQ8y9r6GaGqD2JtgLRDMNGNgg1rQG7ZyGU5nXnYAFkDCxKSN8c5bXvaYqQ3VcjDdkXUn8",
  "key25": "26cHdHNs8HwkGXxLL4oeLbyYMWZ1cn6HTvu8mGjmq1L4pFTg5iAWX19XsxJsy8jDyqZkTYK3VuStXBdK4CMKt1Ry"
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
