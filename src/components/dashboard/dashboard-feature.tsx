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
    "4GN2GE8pPkgAwJBhM8yLyicuFEpQU4rv4WdHWPBJc8n3y6SqLYGkRApp579nDwmDNHkZsHx1N8wZxBDHocdrKisW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RJrdW7c2bgs8Du3q7d1USFm86D4mk7ALMv21P2ke5yFfb9oKVvZMhpcsDah3mFq2exsJGFaTcBGnfuvUfsSaKPG",
  "key1": "4aFn6dmwxhLkRqPx7o7xSPTnBftyfAUXXpaFCSikV2WnKEmzvYvJxXsZeKe2suWXkM6iDPfYJkbsWpCBuHJo7M2k",
  "key2": "5pjA2dr3iNM1sCCe2VB3snjnf1RF5pbA1Kir86HHtTAYjMtDFjHyhHvY38hBqF7WhdfXeY6dr9SHj6Wz2C264rcJ",
  "key3": "45TxYcWdDGATkmDZSZyLKBNbrY2UV8aRhozzZgWwRb3B9DC5ZAexSyPSVHxFg58zjpvZKzb1HnY6yYDu55DxANNM",
  "key4": "4F6BaRsvtVWxU3y11MRe9FR5sVuc1PbvbhaDLcBnuLaixftLoZ97WJLLUJzNy7w2LnrjFAAHsykjYuDwY7kXcGf4",
  "key5": "3WizkTHZRipcAdevJ1Dw3wbR67YsweEnqViYwq6ELpcrVYAj7boaGJNVyKNGZHZMy6Hzt6vPE8dXpjJmw3eA2Dh4",
  "key6": "2ifsJDJXs8ddFXwjNBrocZVCEpZRvp5i3VRJ3dexRKJetpemsAxJe1f9oPMk8FmZugVoDimEBU8WGaHpxJoYNb5M",
  "key7": "2hTJeNvZRUcUmErAAMYYwq5CrWGGc2MS7ThxXahX6AoF5JsKZsjzRZxLheHGygDcJbgMhFD9qvgUJNh4vPKSyN4n",
  "key8": "3D6SS5hcF5bjD8LHeUX3Sz1H3T6wNTgSA72Uyrh51cbVVuQWD9iuVXmW1ZrxFGB6RhjqYkCqdDi2yTVCwzfHSXdK",
  "key9": "4sS9tSCW3H3LHuBFtijMf4jzaBu38jLhsM9jtXvCFwk4csnRFnZdGGCnPpKfCEeeHcKhBhxSWjkwpzXH4iyaqnjJ",
  "key10": "2fMmyohhV45KmExR9H9t1TEMsnS1YMRWE5ny1TctmLB4ahMqtvPKp9jdocAkCj2P6ZMqzdnDEjwyC1bwAgb1HKDC",
  "key11": "begMPHhj3HLp2mBrDDhv7w99j4cF2JwRPrpUEpfjrQaDVLPTKY2E7ZVSoaDpYuR3jkCnZ7DsN3sHuDkumegSW3a",
  "key12": "2CVV6VUXxdGU4eWch5fE3JqWEZkZtAn5f58YanzEBE1tYehLFw421HXWAA6gmZsxLWgtSKwQHcMhHA5oC8gm6vpX",
  "key13": "5VGVLxi7qHRHP1d4e2geAKMPxfrHbPwvmw4aNfJqMG8HtNu2TXL3aGHqWWy9XftkCW7w2KnoW99ruZti97hjGr7N",
  "key14": "5miLfUmkqRdpbTdYavDYMwYzfEwfqLTMjUtEtESSzRhEeWuDPLP2hcWt9hKdbnBTpdzjNpqdmASatjpbjtDSTRNW",
  "key15": "whavZbB3dau7eJu9Hj4VoT2F5Q9vJyRsDDjtGeXVeDNZximfvFonVjWWiSjuX2up6tjz4zP1NgYRPbLXjjko9Xo",
  "key16": "5b7cC7Qw4vCrN8Kn68BJcrF6w23D1VE6poDbebiYkJE1fgJLLfoYnw6h3vWz7QVK12iRNNcRdy8NYvzj1fJjg8j",
  "key17": "4K2qbxuWrCXfeFjsCHqB6ripyhuxMcK8GQizzV3gQj6PfUS2CS22MMffJZNdcrXcSVc9z8hZA59eapfuuykmoG6m",
  "key18": "NTXpv9rtgyYKgjkTzrb46VAjtWNyhFdoZyRF1TVrTEZMTPaKKRNqFUo7FHsyCKwRyX9GVVADio8C1Usbka5dy4j",
  "key19": "4Z1BcfuGUfLZy1xg3G8WTckGLtWXK7tbjuEzvdq9GyGuFwzS5HfPoXWGfRWENxcQdscQJe6d3WYD6744xtLKUtrU",
  "key20": "3UU7PFsJg5p98GYAmYvJsxfYsWQQnUfz4mGTdqncFD2bzec7mG3daFCxgXk3VVS8xATite92q6btmLeG6vZ8M3wM",
  "key21": "3Ac3EpBoSPjrkMFa6TPwCatmztsVHWYXvzva6ViZ4TWxWQYtwD3FDiStBD9LYYw9edG5z52be76e83yytFD5ZvMH",
  "key22": "pTFrTLsxVk8U3g8i5J7s5LiFAq6TA3Dir5wofdQ3q65rR55pFueCaPxRDCadUvNi3Ko8PwjtfcZ2Hi5eDX7DzLy",
  "key23": "4Sg4sHYG94DUMwV2Y3rVqJ75hbdAd5uMENJ3PZa1f7LJqoLvK4HjerHUMnHrBeAerPwssPYZejfG74m6HS612Gj8",
  "key24": "3jBdFY61EBaEQBNLMQsuEVw26wWRDTBKwghkTi3YPvWJUq8iKi4S2UthTVdY9eeAM3uDPg85UvZ5fJ4oV5Y1nJap",
  "key25": "5FehyR4PjaewAByXJn6PDRpDvPQ3EzV2xzRx1KFgkWdcaJa5omRMM7JJT5Tmt2edMNQ5K4CqHoWUCbazxgB1LWQu",
  "key26": "58S2ckeByxEDjVeMgVxYD4Q1nwkJcspRNspYdZ8yaAm6oDeGNuMC71D87Ej5R1Ut1bTZnPrfHdc6vFPS6orKUZRX",
  "key27": "WPinTGW77vWYH9rHQkVPfHgvPradb1ioptccRb31DrKE9cD4TjzXUzjunUWf2r46YFs4r3LAtpY3fYsQf9BsAiz",
  "key28": "3BaYwjZfPDuaGPLaEuKKQZzh47Anf34aGjBHZUns5aG5McQYMvsuRQfxd7Xx1ssqNbnsWNX7PYCKpWzfiMzuPqiB",
  "key29": "qkAap2EM3Ru4tg2NQ8EFi7SAnQKVa3VWomcHLPAZoZ4k3w2D9YaQ4TfZp24zdtmjqG1CzcLUDEoZLmooer5RHSN",
  "key30": "2HDeQnNn2zEyq8tZiG1HpsWPNGeVZgTV4Z9xwf4A2ecJdDTfoRLBL9CPFb3BKVqsuy4qq9zxHs4PyUwCNtV6WJdD",
  "key31": "2VaYotRifJbQNssnY7EJuiZoGJhJYq4H1uWGPytfgGcB4gbPpG2yqk2oDkPtNcXxNYcMVwqjthDEKAPHHwbf6FEG",
  "key32": "4V6mYPF4XvrjPCCir8yfyCLtACYzfHWygVB5nmZY5uRRSeCdn7aWB3BGM4KXyKK4AFVJA4sNqb35nST94vm9pPCF",
  "key33": "4A2CAA5WzEXaPTEkrAaGY1F3VNvAZ6wt1oz7zfUxJ2r2t8whAy6ZVeDkQErn3fg47s5CAbDqKWuov5mGPdwt6KHi",
  "key34": "2xdvVdgCf9N7sZhToqCYNbvKvZ1vkG3VvK5HdPSq3jWsm9P6oy9Vb4U4oSzZ6dKB95zTgi9aYaYpWZRwYDMTiymA",
  "key35": "5b3HkQbF5MuJ3qphHpenwXGbcic4euS8h8ZKj2xwBi1JnT9C6BSsnSDAj6qfiAd5JQc11BF9YAMHnhRZ31ziCi32",
  "key36": "224Gj4kdoRQeJ9ufVEB3WxykR7zRVeFtFj7T9yL4K2zndBnYt1S7g9mEGXgBuYJAZD2wt8dZzGBeGK1ZrfcKsuvd",
  "key37": "3WZWEGey7GM19B7TTFjtAvR1u7K5J2QKbzk5aJZVNZ4umG1YZYnKSzqmfzzbt7KpH8okauLRaMSMHiHHaD8snrSk",
  "key38": "8W8mzfuEq2jLkJ2YFNsJispn1EYxzdDD5F9cR1ts2cgwL1QwyxftKZywpibibbehV8ZT1jBUqPuMzSGi2cBqVSS",
  "key39": "5GVo8Dn2o8oazd1rqPCi12EeUMjLWRR3NK4zwtx7RT9KdGUcK9fWsDRjaKr2CwvegqX2TyC3imgqYqwVY7G4SMPR",
  "key40": "2RVsMwV6hULY3kiECbTqwBgj4Q97V3B6SVWvfJeD4LR3YvyeMCok5VCtJ44st9HRHQJoDCyzkHoYGSmMVJwXKndC",
  "key41": "55MGK8RYNzqiQJdPWogGUcrd34VWsh4gpPWkX7U2GRxCpADjHdTTjGnkwVqmrFRGMb6oyT24vwU82ecC4sJz5VLa",
  "key42": "2DJ2iY3kLus2BJWCK1Rif3T6je1HmAGo3HqA3NdSDYWb6RXKh1275rs1ot6QYUn4ZBDKT6494aaZPGcRRgcpJbG6",
  "key43": "3ayr8TAxE6PSZK82ox8uLJucdAdck2iY5rTdm9g5ZDorqzJt7CJiTfMw6TU1QdvhHmvwxxwqXRRJ57xHcU1Y5PjJ",
  "key44": "4kZfRMFzoShCgM4RThcpajBcdU1NhrGjpxeTUyyRtVJZWfwB5Z221uhtqEVqevPtCGPqDiznoefxL1wMapHbwtCL",
  "key45": "2YpWewZ3MSdHSBjjezTuEgQeRVr3skKTABSd3pYHScVRFDwbvyopQJDMcvki2p1XTZR8Gp6jkfPEKX9SQiVUzZZb",
  "key46": "455uEqW4bkfdzmGEp8bwg5A7nTqzk1msDGVfepev9eo4ePoGEZbKW78vLYif79t6nXTwZM7hLsnpbJVtQi2uT8FE",
  "key47": "3FojmQQT5mQELnr5T8MUApbkQDBQWhQf7iNjN89AxDWb4G9RamC2HD2XxoC8T5eSUvHuquR8gViGLVq8wvJDTWdk",
  "key48": "575yvCzMonHTDKh4iCe8wsfRf7gWYtqN311PYv4tB8kAA6e2VmtiH97ZF3cexw7Ks5d7eyLTgjmT13R64LevQAJ5",
  "key49": "2XoDiPPQ7Yrtkc7qcLCt2duZhXiYRfLMCoeSHPE7aSBmJbFQqhNtGJmr1ecRi6XLBKYms581R48AL6WQHiWM19yH"
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
