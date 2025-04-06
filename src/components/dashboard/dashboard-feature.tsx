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
    "5Vc1jYRCY6UMK4cDtGCH6LiTjKNipJXLypFxa7jsxdgBWHqF781iG3Zwc4fP42JBt5wdu9Xs34h58qeHKqMWhroY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xvRK9goxTPT6b7jzKRm6vsM6FrDQe97L6RTcWCsiQGPWtWwGNEhLTbfvtXBXP4n5grBqAd9K1R1BKnDo3jj2hU1",
  "key1": "4K6aHauyfnST3c6s9AzVcb36ukwRxvKUcbZpgsXFaRJzGcfnz2yXKd49ST51UUR8nkE9Q8s6AoES9UvFfef8T7Y",
  "key2": "qzMfjDH4d9P5vjqn6Ky96F35pwHEEAoMYoKeLco3s6fZpywqWrqs3QfehpLsULtn9P6gGfugFn5vSLy9FDqcFsy",
  "key3": "9QbrAdUva2mkaQ9k2r7XMEEExikkvkyZQrsym8m8Zh7Jjw9jpXL5Xzi2SF3KxzdSR6tCAZyeyKNk3KGTLyp3MTm",
  "key4": "4i8dub4VTZHsupHNkdgduyUkMTS7pNsCdNznZvhzkyEaiHRKaEeAUYjc3xiC3tkNqRYcBHtP6GdQMbud2Hf8xBuf",
  "key5": "4X1yaG4PrYP2YPRrKAQnCG4PzrshEQE4dPDzCSaWbv2u9nvEiP5katExH5hahCyFkGWLhaK55uQF1DN7cqXTUHut",
  "key6": "2j3ovuPi3Sjp9vt8vvhrLNiC5eF4MhLq48fs3AFLV8xyKKLrxAArnoWfAW8XotZWLKQ2kwDftf8ACepx5UuwinQJ",
  "key7": "5UAsQzoV9jMrbyQ5qmkP8QepQ1pYdrsSTRuXFrpoi5WGNeusaS7nmr1y85ohkcvjtPYkQyMiMzUhQCPbxG5Pm6Bs",
  "key8": "MCuR8e8KHZwmBbHeab8uZkfYF4h14QEpXLVLWzTqhG78V1c4gYxftMqUzzGsbW5oTCqiZ7Hgf27T8yv4KXa4brX",
  "key9": "3bfXBvTZ1rTWeJk8F9eAaeuV4kNpk9tX2RYToovmaHubPcF1onrrp2LajTxNsT4uBDX6niu2N9dqhrxZQc32zHjB",
  "key10": "4kET1YienMMuyE9TLkemJfoU9Y8r4nkcL24CK9UYeAxM5AZGeW4sUJhy7pHDmUYDJFwC6cwBTSErUhE3v8mjpfYo",
  "key11": "27ezMqycvkQX2qXJ9x8LffcKZzmNP3wdzRw9PVy8RXp4Fo8FTYi3miAJk6Co3Lzr4z9pznAUURMMXTwdcKuPj3BQ",
  "key12": "25qn1WKRyA1Be3u5z8MBEFAf3uNJxDWgEHGQvbg9ubSeZYmKDgypCVCi5osq8R5vbYCegQhiohKaA9XQ4vpRt9zN",
  "key13": "675QWoLZ1N5aeYF6exZsGGzP9HZLuhRaNUxh1LY573muhSgs6a1Sunhs5Vmkz8YKz4aP3RPQwKVo8s5JE4N4CeDZ",
  "key14": "4vGmJy7Zh1fqQdXvso5LfLfFgJjqWZCaC3tsPj5wmjgLvZ9zX5ib3hEcmcSSG2sdSEDfTvZgdoxRVHb2EjNmAva1",
  "key15": "5jQai2DQ3TotegSTvj4yHgzTiTip6osqXnUne17XQQWTbBMus6aVWBhJkz5Ykb7TztfDLLF9Dgkj5Gj1p7rzRFvF",
  "key16": "2mwvc27vFy8F88qo5rK25foHJhYWRJSgBoecGDjdmffJuwvCWEKmRnKQBnKTacb9e8CfxdN7ErHNBiRqZRP7DJKG",
  "key17": "RzhEaw8sZ7pdhsUv1a3SwRiR9bFiT7D4yrmFoZbq9G3kNG98xjJNEfTZZyoKpmoVPSHWJ9oZzR27iBzhmfXDacA",
  "key18": "29x85Trqf2QY6ShRnzL7tbTtGRuHX4bqQwU2PQkohT4vP8qxDRL3hQa71d9FDKHDxmLydj2XH9tBG3CfGueRxQuv",
  "key19": "3mixDHg6Tx7K9qkmZDWb3TCCoCBquBVRiNyZ6j869tLyEBB3HgVRV8ydhj4AFA8nGBUTkpEbnCo3uY2qcYfxoKeu",
  "key20": "53SCc8oyGBvsR6DBehMuLDyxLV4edbovEYiqgkAUdHEfg67r4P2qSNNVMxNjD8rNsG9J56FFSvf41tR3AyBTXksD",
  "key21": "Z6Cgt5ixDUZtdsJzmRYnDguc9GqsrvvQNRB8XDEnACeZkxjgrMDd1JDkKvhCEyxXPA4scmvVCnZqxktYLYXJmvz",
  "key22": "3QRz6k7H1hig3wHjQiACostj7GzAx1iVWphkPzVaDkCJS58EZKR22L1BQMbMGSNTRXvFRoNqGafJmmwA3P3qffW1",
  "key23": "2LzgXTC6Pa73Fs595wBTM7uCFAFdVPdAYRLbd2N4RZYdkXj17pvZv8y4sbqoWc8PdxTfVW7SxqyHoMiBnfmvgD71",
  "key24": "4NHprmNLe1jJNrudpgRqe4fwDKv6ARzaErWLz1EXp1Ls7gyAm4G5yzon6J8uZvHJ1zPmziVzizdPg1eNsQ4XT8eT",
  "key25": "F5FhQLF2K2YLqk6rWaiG1uALgkMd2vfwnHjCPwG1TReu7vS2KAjkjxbP9irFQ46mdqR8HzDtcHJFAeeu4Qx8quV",
  "key26": "FLig87uJSpRTtfE9gcC6MikkAaNE8Y41GyxtHtV7BobjCFwsJAXfBoMYt6D46wkAxa3VyTCAg9yDhgqQA9DKAFb",
  "key27": "2mjWg7wZNK1D4pVd8d43tBCJUGifeziTcyb3rSTFJETmL82Jy82Hs4u1HyHuxZRmufSgmX6zMZA6MRzEqZXHpkwn",
  "key28": "naA3X9kxUCHJnWSAo81e4xgW6uPuvSDB55gmLc8hBear7NPJediC1iL1m9jfPwK5bTsqQLZg3ehdjrsPs1nUAmu",
  "key29": "4ZCScWqsbW5RNLjo84mxR97JkEhfro7Gx7p2zvxxaEithnbJXbvpGaQbCsN97VBXpojRSUkTTyqVDdqMQ3R87Kvg",
  "key30": "2t7FWyvShuXDkQipSN8RswmMaDjZ7tJUQbHxGFBdTSnBq2r2NZsgY35wEoypHyWDU2UsnbRrEU9Zk2KYKNNs9Rhy",
  "key31": "2GgN7fhQwMvxL4stESEtX4CLVWbd3RnSLA865UmtAi12VJwTWdqd1E16FfZzf56TAetrHVszAF2MvCiokdKbMcQm",
  "key32": "4apceEW9SCGNdiHXRXJxfGXzSqbvT3e5Z2KJ9uoKTR87tTcyXfuz8rkhVfJSpBAM6vMZkkse5tFKN55xZEYWGQak",
  "key33": "4RQhYxYG7M3cZFRVTs6Ff4ezKGce9seetwKmSr45KDwAzEtAjUXZfw97WbN5gAMQxyqoxoyNCc4nc8HVgMyVduWg"
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
