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
    "636Nk8qFQRrnZ2PUmCpYudEvaJvhBUpukUGSFFGV6K8aFReJ4fnumbpuV1bXPDNfpTnvA5gqCmZzc77e2NkH6Hqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBcrXDd2B1NZBzFkAhX2pQ2g4tvG64N1LnQf1nthVX4xkBxdUamhYU9zpZVbkPTWgRzRJMT3U7rrqseMKxAC3EQ",
  "key1": "48YU6Nx3VhC9EbbhmkA6JKPT8p2pjuZ46iwTMVxWxU8tfpbMvGUkvh51yG3KHSCmKoXG26JvpV5pMRRTFz6ayE9e",
  "key2": "4aod21T4P3uW7NN6Lrg75MPLRUpozHMxcikGX7jvz8CBbQue3KifKajF7SbJbWkrFeKWjXYyCKDkVPU4QyYFpJuz",
  "key3": "2bdftwUXaY6JEf2ar8b6jGt8KJbSmPMrJ6JJMSEnUaGMrqAKMfPMeDbYJQCx4UJ82Qq413Zkc8nK89YfsBB1jnfX",
  "key4": "2T4ggzzzoZay5mZ8kosU9J84HaL67HKn3fUCwh8AvZyquGYzvvo9xpk8xCfmUK2JqUe5YNiDSz1dqTed2QJh9h3G",
  "key5": "5D89HYWP7LuNSDeeGFFgjdpFtgtoLhhUVrbtzaTYKLJ9RjN7o9BPgc2MMb4Nnb3WrKLHQbTqSek9MZTAEzmNLUzy",
  "key6": "3qZHZkcNmjgjiBbpxxbLsz7HJKVXL5NiCHrndeYGTUrY6GSjJvVyMPmQ5oKyjifq8XEEhvc9KdUJy9GiepZ1t4tZ",
  "key7": "3A72Nw5CzPorSviVNfBztYvXFyK6hpXVGUvb7BizyhjSYpqRdZN6SBHwwCGRTs17Z5G81wQRJLxfijen16d8LmEM",
  "key8": "3FnGLFwg7Mi65d2YB9dbzqgM96FSyYt5kNFrFVyYHD5dLBwt9QVCfrJgpc1QVqFMsNggWZAtfpHQz2DiHzU6rukB",
  "key9": "3jYXkA9rNRdzu3Dp1ucWTqFxaaqKeQMcEsmRaNZKNRB8zVJ5g9SGLKRHZ9jDdYaNhDA3iwrPaBHnKMnPihYympii",
  "key10": "QkBLv4xu6AJYBNqhM2mXsnmotTsg9uTqmvyunq4micGAZ9XdefyPtiLaxf8DT9fgviThsS8ophKD9S3FSjqUdDW",
  "key11": "UJkwC7t7yzS1Y7oeCmmjsv5zXUG3bDM2UStv8YV6Q7gSGEB5LgxHf5krwdYf81vKsy1hZm6aFJ4nG6qtSmG8FxK",
  "key12": "3E28ZzQqQmNj933KkS1J8XqhdWKkWDQsyjUk1DLFSJ5FnrjTgo3h3mvb6UFxr5Uf758y4scsyBDaXtKb1vZ6YXWL",
  "key13": "2nWnKrcRMKnbAwzqahsFF43BBncRvteWRASbHDm5FpPFmqwz8jXPbkJCrcjR8iXqp94MGmZ5AAJABMco8qubtN3q",
  "key14": "2EvoSNgVDMcTvfN4razi8V1NbRiXBZCnHwDCof5LrNaRhiST8NJ8rUnP9cMFDASfWoKfAjxAyaPiM9PMJsaCiXU8",
  "key15": "5T5mAG7C4VhtyaLRN1JyUrGw9r8Gz8khSe7patGYv2MJvcfGXqXB3qPDjoHT7T6rLKixMsvT9o4eyMyr3uhDfeoB",
  "key16": "5uhrcb8Z4myJD6QAm1MmhrS7meBNB1y2VWd2MaKgp1buUUAsvcKTM8LaK3g4vXaANTNqqv6yY16zPtufQVH3hXvG",
  "key17": "2gE1uE4t1xMMw7WDua2cQeMccuYCL73nQ7WmECJy4CUS5UVZJL7mEeZJ7cKks6n9STJNAgkvEwhEkZg6WTHZkbZp",
  "key18": "4Yb99vh5N4aDXx3BcpgPHWHULiywZHyYwhp5RHytLM3bfUa66JXJZDsTVtguYsBfD2syjt6Pfvtoo1GvaZyLiaYg",
  "key19": "2HNdGhoRLdVWpgsGQN2gaHBAyntGw6ud6xz8s28xu9pYzLDe6EH5vNumcQXUELDHxHjhdoXXTikCfkyKVMrhjsPx",
  "key20": "3TcCWULDs6YSQfjCBgjjoKEDniw6f3L5PKPnpG8q9hTTaBZtYmh8JV3M7iFU2TJ4HLCgExYJ9uDZB4rPRKoui795",
  "key21": "54VqpzWq8L747ambEAUPudrhtgfJrREMNQHVby4XQwWrA7zB3ekRvk3pqoFSJ2vNYHumQjDUWdpbDMFDZmbtME9b",
  "key22": "5T1EyGgPCY3J4kStDDimDryBDZNbA5id5Kn3UaCBjso9XVEceTBes5cNUKSQfxBx4PeRiTCRRAcA8nyxyWqNAEYm",
  "key23": "2J3ASWH5QywexpnMncsaUqP49xSFqT22gLKA5JxBF3ynxcPRvShJmfDEqEWNVQ9craG9qURRm7SCTjCpyGuqGCiH",
  "key24": "2MQT3Z2cfQJSohxozidfnxacUVugRayPrk2gtgrc1yZTu1NKymikN9ew7VefBZhASZEC7jP1gohKjgK8hb8UvNax",
  "key25": "KHwhxM1pmbwa68q4aesjMKeWFuxYzW9gNM9yCqTT2emfxUyWGMh4DjL72JjH6SgRJBxHecEiNra8uiRoJbj4Y4w",
  "key26": "5FeWMsPeNK2sPpQz3gKUY6LhDKpEZdqYEyQPg3Pj125WGz32awSBKcrzHshvbUSKjHaPR3xA2rmy4LW3vhK275bp",
  "key27": "5JmzJTfZsot3P5itXZ7bYbHNdaimBmcTAA2Q9F8LWFeSjh3KuKrGQK8RbDYUcCXic3wcHsWnHp7W3QooJNpeQsEf",
  "key28": "5MTxe3gcgVuz3hYDbsNX5pYB2st8KsWtVYVWQCBMB6m2sfdZUtX2V8mH6Zhb2FCcU5if5LSJdowgQWMwcavS6EgA",
  "key29": "4EiKMmYM3EpjotbdjTh7pqJVypkq1cqRADiMpjJS3mcpM9tQyWke8mjiipoZ74nSGNpSPEy1sPuL2NGZru5oSNRs",
  "key30": "wJazM75pjbKSpmDymqeGrM5Ui494geWk43o4UwdvhaL6f6sC74HTuZ8jwo4kr5nYTgN8NLTXSS7qgT2gmUwFJ6k",
  "key31": "5AUNFJEftq25oymd3vJ7LBWavD4AThm7rTynxmU9J9dTWnunLvvwwot9cSyLcjkTE6oWGZRQjgqsBfFDYGBd2deQ",
  "key32": "3HTq6xs5U7LfZxVRgNhT77s2sbB7Tc8sQ8SmnY1x49ey8gDzcWsdGTMn5E5ThEZrN8iCYys8RpUDgpSSLH3YSZu6",
  "key33": "4i7u6QE2YL37jeko2vuiksgMqSSksVeZzxRSeqXTd8AyrM1ceFyvYNzL7q3bGQHgYGXUtyF6QWZhaqK9UaeXwfzd",
  "key34": "5HBAKERfgVYKuKhq7Bmo2bwDFHnSrNBuFiAHsR5qaUFmN8e8Gs5V3AY1J4h7UXdVWYc6RKA2kNx7w2pFTYEZr4WY",
  "key35": "z9YnitRU5qUiSN2GesEPa4EMhkVspige1WXnSmweybYnBGs691raix5LbYhrgijeZ92bDQfVMANYs4ovERrYF9c",
  "key36": "3KNM5FxUwyWXqkJdKFgjNfoTkw3HWjGZLxYmovz4VyckTMNkN2yP3N27BBFarY7DMtWkby2rAiwrP4CGs4F6nuaZ",
  "key37": "5kq2HchqTAPVBzGTXbSRtwN3XeGw6qGj853nY1tsoAaG59raWbXXUpRK5CYXEe4329miDFPxVQjifYC8teWPqcap",
  "key38": "niZeQtRR55SYxkcmoMUKMFb8uW8j1TVWRqJcxJtvrA9zMcLCoH1AoUU4QiCBXJpp9a9JP2yPZityKfFwjRx7cMW",
  "key39": "512FGdmdnPXMHKXRWgckVHmz2AjjEuuvZncgZTmnBvFBQXbrPVPViYtphwisL5L7xKJuyEmum8qKtfQWnCmNd4s4",
  "key40": "299v3WFSCgV4J6irFxrYTYvBfiPJ1CFZVebq5WCxA2Svzuppt16ti9Mj15eXvKDZmGhRvF7xh3s7ssc4EsbzJa1C",
  "key41": "5tdFeiEaXdjJujgztL1KAWaApEtKQjXCTnJDMAUXxuNWMG2NfgnFp6W6QKfyHEmLt7MNsaXvTz1zFZ56ekkejSFq",
  "key42": "4rZQvKrAYffVmZoJ789jgnhRP2i79kUh6Z76fBxjNaQKhK2aeyp2cMjJPYAtUAm2iDbPhrAGv51Krc5uvhRy8TNX",
  "key43": "4bLJgoEFqRQJk8rbN879rsdCLBE3Qhr31HoPcnXYsenaKz4zJTy5LTJzB3iLqCpqnDvW6YUnu3Zzr84S8zJ3zLDo"
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
