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
    "47bYmTiBqLfkjWFFMVYN6XG8MxDFni6M3DgPYK7mSzSahVUqwJMAb4eigP1XnSNUX8kGhQV9bBLxk6H2boCVrBRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAErDX9yjhmH64xKwU63aKVt9YYDxBigtoT7mnqKBJC3ubEBPg1Yq4xtuHoKiGTVAZ9WZmZuWZNc5Ngb7SPTp5G",
  "key1": "3mUW131rkDA8rW9jNWQ1qQiwLgzJ9n4XBGjyjmo5KmAoJMwf55ofGZ9uTsWWjsJKYDLG5Wfuy3G2mDq3T8kH577W",
  "key2": "L3Xb9Rigv1E9Pc9cNFuJMEtH4jt2GPTnfSPE4QVvZxd8eNeDTP4ZbqgwqXpdMQVpdQsYqLpFHrVfUtiYSgq4SZS",
  "key3": "gJvfiPNGFJ8uZ2QkxrFgMbECRtNCsHYoQk4NZExpPfXPevnm7Zr9Mq8ButkGmy6VayyJfUKHcUpnuvMUzhbz7Wy",
  "key4": "5Rr2mandMVob1v4A17Hug3Ztvb9HAsHa8hpa58y7xj6KMMfft2FBBHB2kJXEnG3ki6hAK3CyBwSx2LvGAHpcJ7Ki",
  "key5": "2tHAjW4uvPwKFHgrjzkh8dpGxSNkZASjoYSk4U4SzHacEwBcVrKw9kyYpDRHVPoJZNKs6Z3n82ZGa34Y4gTeZzMR",
  "key6": "24S8evqRPEVMb3Ee7wP7BZMGhTG5eViMbhkFNVkBL8XY6qJoNYfwVuUPuZtSgMMSyqKGUMbEDModGkvaHT84vTXs",
  "key7": "3SUUYoaQ1vrkzsuTRWboqrBcB36Ti2CnDQpFMK7KtSfppQZ6WfP54AZKZAR7SjVN1j4MBjQHzsbQcvv7zhyHoWDv",
  "key8": "2EbHE2uss6AGUpzxVLgFTx2PmMUfTHQvFMEbM1t8VuQGGQtFGrnkjZeo4Jjd5xsHQbe9y1WfUy7NHf7A2kfDd97Y",
  "key9": "5AaBDE4b9fEjPJCVJydmXGdSi5zkQCHUwuxfpR8GJtPfhmd1pMEifeGpuuTjFDwvWfpe1beBpWWRtshZUVcxdPUS",
  "key10": "2vmiSYu9MMUkxRxkBcoiNj2pDTBe89z9iWnx2iv2xg1q6CTJ4A6miza6kXVjypixBgusQ9jxMLiX43dRmATHAtTp",
  "key11": "3LhVtNs6razAGx7kABQyyU4Ud863Fif2ic87yf259hNCyPrS2kWu6iLsincoj3KEAZfhr75bSHQacbGbUAmqhFET",
  "key12": "3ftaAokJhmQXdkMr2ZEkMErEQFeqDEQ498e1YPRHvPwzCEbezyXZsfo2oyAFDn5RpXM55gKbTJCzTDtx6wqTdKAP",
  "key13": "2bY7SuNL7oN2aBoymKLHBQgwa8mqvEt43yDtY9ytnebZ82PBCUpBnr2UzJaUNCTnNygYLbCUoCkTZHCjqEgQoFfL",
  "key14": "UDyhexjkbdJ4ouaxtDjBJLDB3158NyRSYuiD4YG9zGiqjw3i1Qi2BMZLorrAhnSeav7SVxpjQFaUW6VuUaY6kFC",
  "key15": "3qiyHMhmhrysQiESLKRM8dtnFQSf3JLfGGsQZtuuDud1L1f86iBDr5ZxRQ3YfG3oGuopGoEF6feojYJfZJ92ZZwk",
  "key16": "4isK3f5G2cifoa3phtXrk3K4fH9kNjQ66xxP6onadadwz9rjogQmCDNz7hV832vRQwASan8AF22GaFJqY7hqkGh9",
  "key17": "3CvUUVP6Gb1t98wWBEPkLdV3pcor2t3tunuJs7wNen9Sv9YuPsGnXkg9u5XqyeSrriXFVbdDkxstM7tN6bJbnpzo",
  "key18": "3XDPprmHKZydPqePUa52ZmPbYHVNRdoCiemQ6Y36XRowdojYNw1zPBhRrWZTWi4vSQVmrHCLZox4jozAfmQ4XDEY",
  "key19": "5urR446ytC57n1i4cMSN6Us4LuWkb6fCiAsg5gjmKiKwyHMiGJN8iKnDBh5nGqCbCCj12d7EYzv5wp5iQvguRCZq",
  "key20": "5TvUguCh9mJKiw1RysHoRcd3i9sBimsr88K7uBRnpNAqn1XzterYBbr9ZRKWWA7XjxLRsSERTEfD7eWDGqE2py3v",
  "key21": "2W3pS1TRXVyGJ2H7cmgkq48p8VbZ71t1Lh7kFxRRT2nj77iz7yAGqYjgqXA7dpSBTxRQKhCspNq4qD2tAUnnqRyt",
  "key22": "4ZiwmRAuzPCfMbMD5S9rsXyHxJntbBC19kQ5n653ZaAAp9W7MRM2yZKAxGErgKzqYmrVntWuZ3DxaQejmt8EoYfT",
  "key23": "5NNFiYi63XQ2ru9SNEwyU6gNhDBjpSgZPWUttL3rUZB8HWsH7qxamv5yKY3bqLBzTAjHZdMgLLmiPucMrbtfxZr6",
  "key24": "5XeGvq8B1nkVz5Vh2RKqcACSwkdvSSASSSuh8DZKTmFVYsck7NXZUnAdF2MWUK8FMP1kXxQzcgFjJzjHzLxKDukf",
  "key25": "W52WKqg2WSyf61X49wEcRQ87zXdJ82faNLNRYj5xpBgwkeyrzu8E47LjX877nkPzfFk1BTEW6VAXbqPaF6dQ1DL",
  "key26": "8XKWwoYWSogofLNzcZYGibSpovzNeEy3npPfmZK9cUvPtmDa6MFFAgZcSUWPBGfsYDBAeZueseL8sH2qac68wzp",
  "key27": "USvakEbG1ijjXju2kMvDGou3uVRrAWFMiK3HhtVuF2pe2CLfRcrZ4gagDYvpQVfjaMSGeU199NGXz51DkmyVuxd",
  "key28": "3wBiNmFvsiY6Hn8P5ve7s6yJModQKnZU4uAKHZXM4kW9qjNSzB1Zct8kv4XmwAHHw3MvNEB5hzgwSBhs9mqj7ZXh",
  "key29": "2GuTAZWrDj7cxRJZQN8XhtqNyNWir69koWjJudyEEPBNnsudsNxi1Mc6dFacnADpamzFi1hAUT4jmKZ7BxtnLNgq",
  "key30": "4uxG8SCntA7EnwGMs1sRzyGtXMk3a1VXdaQ67imaYnZCNsQNLMPHWD23nYnVeNfHRaWxtxFWsn53aHAG5N6E4yF"
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
