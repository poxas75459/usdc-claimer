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
    "3p6AqMBcUnLyVfxS2fDmqKWtD3CXiXFBcSuDPZHqA8NjBB8sjC9iEQ54Cof7gkP1ahbxdFQuVveEjsuYfVZzK9oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BrVgghuieRGnJDGRwh6xVrpa8xxJqdr5NtZTCzu8sC7WTeizrBcYSqHb8xFCiGFkmrxspgimmWi6zjH9khbiDV",
  "key1": "38CWNQirJegBVXL1QfMJ9XtcQ4KN18oPfWrH4ZqaAZ9phk4fhepUaf5DGHRDQ5nA2TxBeRKdUcNqTJ1x7TwrK4i9",
  "key2": "jDsvwrDdanJBub3CueE7Kp85BBzgbMjYzWs486BScdeKwn8UeqbCrXeJfcUQnAtiNKKHkURvdkzAWFJT5WmgaRe",
  "key3": "3Ry9E6PKScfKmsRDV7pt9kdzZExJoN4WCtmmozpB8y4vjoGjJC5x8J9rYsGHY2N3yX8cjftzQk5XLVBFL1fF4hqs",
  "key4": "2iz5YBVczKQy2ogdnFqq23TLTp6E8JumczeUc28y8nusTXQCcF7paiH5su6Tn4fonMbWHavFN5H9QT1sJWNvhnCN",
  "key5": "4RPs5ASo7tEDzLGLtzwYT88FuUko7KFSBWEShXB6sjsDa4dNu38H5Eopq2i9sYRBd3ULtd4hfebPBi3BEZ4nr4Vx",
  "key6": "Y21xjdoAXT4bcEgyJ5YeVzffxvNchwyiA8z1tbUZ8g7bQVgWWJrkrGb3g2VBVW8X2xRA8c5CMz1dEF8X5KmwAhj",
  "key7": "2Be4jhbfu5N6eo672cPu9N6yhxwR4bDorZcEAS9NhhqpRPmuC7p5tBuvQTJPcioQWwHJKENmHcrKawkWdm9ZDH2Y",
  "key8": "5oLBLhPTWBQB7Zyct4wyci5xberrqzb6RSkoCGmxivQZZpMesFoSGwcEpTYhkfuurwzHdBy4ogRzcG6GrvhPZ98o",
  "key9": "odGBmAjwKFzGgmZMiFGxSFC8JfqM3aJCkrKsHjYAaZTnrwmy4c7RPG8DW2ZYZAkYgqL9yjZLS3wB1SKj942UP5n",
  "key10": "Lg8JuU2JftGwPUhG2z5fB39TUcEWE6et5Nf9P6P7sNWPb1TADf9uo8e7bugtsWxjaBVhDmcSYd2FJwmjWduixT5",
  "key11": "4BQtzH8zkJ1m7aPporewLsLcisi2MYxutwkmoVemihDnSXD2xD6BXYTpiQEWRLXjJDymiMjBBQFj4tNMGi2E3tpS",
  "key12": "5DTvDX8bA7Yd9GaqNV6fLd4aNDQY5nSm4mBWseJYEqVk4jJwUML71u3sn5jpXizjGNBGEZLznHrcWLQy6NpfyDkT",
  "key13": "WoAKMfNJBZigmgAu9qzJTL9CXKwzVxAqD17gbVMgHtWHCA96Fk4NwjQyGLYnWd1zTkJd1XUUnvUTFe3W8scRugB",
  "key14": "CevnCcp8YVDhChXq8UaMb9vzhLafEjCzGgwr5QFAQDaaDXJtWyBhAf5DYbF65MAkTY3BnWNhLBxvGLAiDGUtYqR",
  "key15": "3nP8kyzRLRhqDjC7mxTBLsz76FTvHgurJ5eaunsP4hpy8jHf4PJ27oRnYG8eD9AcJLNChD4ErBUwtJ8W7dVof8f9",
  "key16": "5VFcveT5NSdeFJ5L9XbLnp6ebsMtSGeM361LRgT2kMf8YEGWUt2fJp4QvD48BHSefZWhgEnvqgZ5JGHe7PmMwEgJ",
  "key17": "26wqTGpuym39XYnhFs351KKXFoV8PfgFnD8cBLVNvqctKCQnjSPHbmY6dy6WiykYkg5bag4nH8yiJqg8oTYEeQfC",
  "key18": "2gRsgUv33iVhK3LS9etrsY3BYeomW9DRCnSmtVYrwoNvFoYPcybiJN2WjfRM5CSMQLhVGdf5MfMGmK83tqfihs6R",
  "key19": "gQmycytM1tVAdrYhYXwFiwMXBCgX1rKyY3gUWq8yuTL8j3FZXTQVd63h6c8LbzbakJLs4SnN7FbFZT3SgzKrjrh",
  "key20": "3cGHwmT44ELjoeoTjx21ybYccbgSmeZojuiY7zMgt8DRGx8B33iqR9sE9SrnsDsVvwvJ46dNwHBu8pezUoxPoRHD",
  "key21": "3EniVkEwkHLN7UWeqo9vfnFPLhaZhBjF3o5sJix5Yr2byyiQ2yLhwHcHJv1Rpo9LaBRvPstsFCJfpVxcs1Szwt11",
  "key22": "3Y9rrSvMZEYEMYgbCz2c21LL2vrzKj4SzAXPpty98NUxm15SrR25W4D8vNNXj89ng5VTjJAjoYXy3UGaQtScdbc8",
  "key23": "2v7iE5YuNCLxd4RqvoHaLYjdh1FzSpy1UeNu8qZKrCioRgT6vFy1aYfEYaqWpX1XRD7cbBWcV2N49g3Xh8g7vHdA",
  "key24": "5VDSLZUKPTKXqZQ1tXNJAvCQReY4vUtpwn4HirBxL1FjKeXyJEoxTLCoMuQa5P4xPkCEuSYGcio5kk2qvGiNgaJC",
  "key25": "5wwPcTNTqKenBojbkCqCtRdp5eESXZKsvP2j26FcaRzCcijyoSDxNBXN2CF6euaFHU9u4WQ92Bkj82wxQ4fvvfZq",
  "key26": "cq81o5vu7Wz6qENK79sUL5Q4YbKqYwfdcSvX37QXmquKq2zk5MdqCV7vcgCV8bjfJBHdrMDvRNH4DRrejLW3as5",
  "key27": "54sTntNfHWVJgtz24tfJHSubDZaViLMFcY52ufK4qsxv2PG1VPV6m86YqkDby32aYW6kuSk2ty52T9FVPvn5CGYJ",
  "key28": "NnRCXRiLrTJ9fwRtoMDvP4erTiGFKDCitA31yYJBerJ3qYE5vgqz34MunuUZAp5uRNbh9tE1LAMaEXNkU88vbGC",
  "key29": "2Ee1eRUyVKz8nNYzkYdP2j3XeZrR9nP9QCMBuazyopaC4Q5W1C3ekAYfty3yix4rMqJTCCeajT1dxcTBdfPKH667",
  "key30": "4NeGN8yjUcC91xqpQVEvFtz2EuenXkMRiNdsKxK35XhPQS5qwuyNz5qYm9RbCiWXfxZ1oyX3LFwKtTurcLqfRqo7",
  "key31": "mNVxhS7xEX3yDqngReAHPfActBLVyYUXco1CeyuxReUfc5fZZ6f5qpgDXq4Q3xedGkr4AcYKk9oKgoR3g4nXcUZ",
  "key32": "3dCp5PGT3WGx2xixgDzKUxFWa9K63JUYwsMTsqERM6VabJKAbt2PUxuzH7jCYVCo6PhFU5XmPY8ALUqiSSZhDzXY",
  "key33": "3BT8jqucYDvH8TViqhGPWRoN7Zcc3dfbtDt3A4Dhyj6eqE6MjwtQwK5D2UMZX6xsn3PM9yofkdr5yNJs2CefbEvi",
  "key34": "5be2mchVc34mcuSchBJnRb91jhNteasTeKGtZ5swFgpijsSx1YVGoy5pSp6FvvTHrT92vH6qz8ssnpnRUsQfGENC"
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
