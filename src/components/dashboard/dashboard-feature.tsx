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
    "44W5dGgffyTfZgVb1vvi3W1bfJfxYcm7mmV3QwXcwfYY1PcdGuHEtFdndg8MdmABpFnVbd18SwGnKd8qxdsmVxnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NjtQMkSBVAVcwE1dqRbevSTZdFrXbasvixNKidC1QjXVSXo3Z3D9jMdwVZ7SjpsMohharYatehZsYpbQVrV11bP",
  "key1": "3531jWdjzBGGmnQ4ZCo54yJTedWMG4QKPPn3bTirtoedX7kegrBN1rp4WKGU9ZgzjQi44yZwtCqicCRjK8xcQvp3",
  "key2": "4cP1SVPVCCH1EQA9XRdtUCUtuurWrqc8kpjbCLz9ojFXkLANHoqAJQ2NBh2VGwXkGgb7rmZLMRNQPC7MsNr6pQGP",
  "key3": "5d3v1xxivq4Pw8toTJ9Xc3oPtTKWM2iPKLqBfqTmuiWkzu1wkZqgK4RT6XCwSmn3prCLH8YfErE7TnYCDqj6XyrS",
  "key4": "2jKjQ323U98k6229hEwR7oH7QXee41yaRA4taroUzjmi1aVDrUkv8QDq7ntYQrkB7jxc5nbs5ZWBrAvVh1rPam4v",
  "key5": "5fRQHA1f1PEAxQ9esr3R3M654Juj7tdSTB7XT39hUXSxDogxe6Mb9RCY4vNLJTgiZoTiVQxeRdMe8GTfapC9QMTD",
  "key6": "4NHYQT3mey8q84PsJYQmxgXZvLnZeeXSCnV6pumNdfkMWUFG1xeWgeBTytPkf36YUj4wTtReczvHaDd9WhZGu1d1",
  "key7": "3JTG3Jkgz1oZ6XzgNZdxXwj8a4PDWQyLjMB1wsoy3vxkBqTUzuE8agoKSEbsWE6dfVcfP6E1hG5ZVcinFUBUVrNH",
  "key8": "585qDCAQq3kYjRVmpDqBHMd7kM7eFdZsW3n23tsqCbNnC2trfwgQKWkdnf6FhwUo1YpVadPS8TmhpKh7YLNqN5tv",
  "key9": "3P3AYL9iq9xJRQWCWH939ywDaSfTkxAdbPwHURckHzRkoBiX1yCazCZdhKmqfP1eQwqXVpJV2PvXLVC3CGQYGzLs",
  "key10": "2aFvMKH5sEMYcCAMsG8P6x6WXQZzbeKR2vK2K78rQ675jhckp6vxAkC2jt5mPJgEdgA4QsPYX8wYyUZateAmEQGz",
  "key11": "47upAgAzd7nf4ZpxX4mXJuAuw9EKhSs6ctNufYBpAQzGYxwnXS7zQGkpVRBH3Ankaarj6xZBwq9G3w3FN542MqoB",
  "key12": "39WQ88V5g3atg4pvUXbkiovnTdbtXxi7xocVRQCmj2aqgUVc9f5uLKKsoozYjNa4YLtECMhTfpmbQQsQwR5BwyUD",
  "key13": "61cVJ7HFpekRDaeL9dzK54vUXL39rD1SAYQRERqL5uBgnAbWXnSMK9m7gsnBMR3hz5S9ynCmfsfcHGBk3pTEk72k",
  "key14": "3MDv1b4xo1xkNRUK1XwgewEZBAq4AjaSAsKcJXjDsh4GUKuCpUXxwbwjDr8eKBbfMMyqNs3FVuNPv5ZQgQKck74t",
  "key15": "3oRXN8DmG1FB4fPdscwJZzJ3Ss6nnRvbX7gmHTAQ9AbGgCFJ3xSPKApP9t7HfkWfyLipEhXrPZvGhud3TNbJSyjq",
  "key16": "j47LmALXmBjzy7Y1gugDbFr1aqY2d6gxyY5NxfQDmruxW7r1vK3Sf8wSqQeqBRSr2obGTAn2hkHKxDj2gy4REav",
  "key17": "3Et3CEytdGLKj4DE27F5ANsrNUwCunJ4pHqfJt1L7BhK7s8njkhSjwZ2vmoP7pwgeK6N27s96kqAU3pFthu5u3iL",
  "key18": "5u7crkDCkR837NXMQNz8jzNn2fZ9V4VvsuRTLMEvLdh8co9r637zRkft18Th15x2Vx6uJWghPQ7b1zH1qT5or9y3",
  "key19": "afJHL339jSiJSSWBfLrRNwVzBBWzncV1nQEWY6fdKGUFix7NyjC9XTjiGEJpL13oYbdzvgDRNCQvtVtjeKa2mDj",
  "key20": "67J6aP6Cwn5XybZ9SYRzS67Ksvm4NCcYfP4dBrKz6DKjJqudHm1ioqBp2DgBNeedE9HqozUnFY9LgNDM5xE6hbxp",
  "key21": "33SXqDggRh6oFhdFHXqKoye8WNJ6S1DDPZQ27P7mw5LkHbSDHfnBux3LmNJRAKvF9yFzM1nhKJD8PDddnfCMapU3",
  "key22": "35ciBvMPvEcHpZCHKoxLYb3Ar5MgMjeSiPwEbQK3AYFcfzmUAPJJr8wZrtb1Xoh4TUniYr4MVQRbPBNixCRfUuro",
  "key23": "55SRpPLWEJyc2sn9koZhH3WDKimd1iWufK3njFsoiNgrRNi4FkuDMCS5nRb1RKU6jSoVvucx3KCbS9DJZaGBFuqL",
  "key24": "4qTt2nLhA6DR3dFgWBsT6EMaqLQCQUNdW9uvwMc79AGVifUfUJayoLSE69pWYc73ZCkfd78ps8GmtY5K2bJ11f4w",
  "key25": "4KrxNCBrZjmquQdAi4MdExDgBdVjom4dgh6ihiftM7Hr49B9SMpM2LSTukRxinTLdSZTsLRSMzZqAo4y2u4edfMG",
  "key26": "5K27dz6UK5j7yKBS9pogb5WQwNP6vGrt4rn5LXmHdRbYAEwyXTF5vZsiT3r6XTs9epDYRaoa7euLMbtLDrXNpsUL",
  "key27": "21tZJezoW1iCv66A3z6LU94A5HmRrBfkoRq54TZUUvzUj3of2TBc7ukfm64xePYYreJiiZJCSrJKh4EyyoJ7o452"
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
