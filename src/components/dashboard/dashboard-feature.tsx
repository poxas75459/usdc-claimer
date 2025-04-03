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
    "4o9kBvexHA2o76NGEQGdmM8S3YgDLwnhoUZ6QNRgyesPDBNQp3M4nv66ADSbqQT1sVcbWoXWkGCPEoYNKwdofCvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m446yz5Nq7U3FD7sYMkqBYF2qH8uqQTqYZ2E5LFViMNkqF9VnEqKpx2BpSZr6Hd5DbLhwwr6sw9DQdMxGTqwwmm",
  "key1": "5xZoyEnBazzgtCp9QSD3KMfrkTupnQE8zHn7kcKAc4g3e8rvHPKd86xgpNRdi8nDoVjjt1D7xXZsrVK6Pg8h8hyZ",
  "key2": "265z4wbF7X7ictCniWxjeteLb8eNrPCfug5Lr6LSy8p3wEothVJB29wL2kdwJw3FQfYGQKeEFXbHt3qJ1vWfrKz1",
  "key3": "3cNzLqTYFWoKjnMbouYAo3apv3uCebYWotYobQP8eHvxN1zNRpN52JaWFdB4zpeaKEVJ9Pa45J3BoWbpJKS9TpR9",
  "key4": "4cnPdAChS1zVUHfqBFEX5VPUY6qh9wDzARv6SAQvuuZzLTsTjfNWY64LP6TXHZDaJissM5tBVaBka4NRAVK8vuva",
  "key5": "2cF1sYDcVQTZseJpnbzejbUpepEBXjacwzYdQJERnZLBFcfR2QNMUQ7VZewJgngJhpY4C1YyTEQyHgotPA2ZYHnt",
  "key6": "4xnoL9mnqLhGLwLXZe9bCXYksTB5dWqXGPswLnwgvtrT4koX2qpzALXJ1MXQenZSKrF6fanBPiX54s3zkNgHQLEs",
  "key7": "3HSyV6HapyvpknmpvZFrF3bhY7JUpfMPYbnHtVACB7Pttu2dDQ88LQ3QpfTLp1NucfvUAkXZip2AdUZq5nU98x7U",
  "key8": "5s4njfvCcVUtHVXJH2ZaJZ9Y6GZ1shaEuUvzfYCLx7Nwut2CvLMaJCbpwuf17t8TcSSTXXW7T322cxKy3YvFqGup",
  "key9": "5LCDBANvXQfZ3wDQawuEZ5K4LMLHvKny3rV3S1qpBjfn3zdB3RrjMyT5hF1phF5xnQVweyJ4Z3ossLuuibdBWueJ",
  "key10": "4AyRjfg4H63LKhJfeFdY2q8GZT9WGk7vMWmmUsY26S1jTHheNJUtkTwWJvmgVhzaKLKKydkLnUbjFEfsUCLa2wyd",
  "key11": "9fdmTXRZ4JEY2tV6nf3RB5qyfBrNyyt7QGCGWwRgjUkQCViz7WaE4QA6JTGxwb4cff7KSdPuup5zczBfy2gGFVp",
  "key12": "61jyv11i7epEPNTVqkC4osfnBx31NAEQYd6W65ru2fxUDGVy9xa6nuPupxSqsmH4DqNShwgWMfRfHbiHX2fUeFmE",
  "key13": "2kTPELzwTJ5rmnWrEDwd6pLqP1bmMuaYDawYCc7mydJD17Mq2dHmc2DAppEbtDGYN2opS8GA8uvBWBwX4YZSSgfE",
  "key14": "4LtjLEKPikp5MaTWt1qpNqwskLMDNfxPThtJALtBRwXZpTs4HkfcV7mExG2Y7nuQfmYBmLADoNr9bfqHqpdzH3Qy",
  "key15": "44Kso2FVuxg5f8C6vqaEHH5E7rt8M369aTcp8hfUwQQD5b8tu7nQYyWvqVifPforNeCobuV8sNiPbKQSq2KN4uAf",
  "key16": "2LUHFgAFCx5YQPkkkmciBmz6dr8x8FwxfxzDEHT1pa5zetqa5XLrMa46Sws38iPiauMUMGZBYwQi8DeVvbxzhv18",
  "key17": "3sytvZFTmfcjogRj5qwNWdqJY1Yh5PjQpBAQ3s54DpAHW4dNFTXD1qkWFsXKqkPjUQvM7R7dNzHVt5Pu1NPm8yd1",
  "key18": "4ei21JQLifngtHBHuc72z8TxXBHbHig8LWe2Dcd9KfUdoFowSwqJc84s8EkkcivTjykvhP9tVf6jb2zjQ6qHcwVu",
  "key19": "3m8vhRT3WkBrxXrThcyu4XTza23THQM5iKifXkgPAa262fQjWwsN4hbyExRJXWewst4RnqvpfCKnwiWNFCBVDVoj",
  "key20": "2zz6giHXguXU4kH5KVaZ2fXrKggaxmk9mktnoujtz4TXsifFbN8V7jVY4rRzmFJjCZfofvs5a23TZR9bRPRWWsVy",
  "key21": "2QtWDDLNV1zGwMsEcNiWFeYHZxYqWbkNv3BDoa89utmu9LKSNmuuigh2JpoueBQ5PA5DHf4DPsg4u2ziayfBDF7K",
  "key22": "4fXoapHEQLoVG4LEASbBKpcrdZGFjYxnYwEqNdZkChuyAfTji5MLVrbWxGXZDsLpKn8rqbTSfhSB6sRpr6HAZFHZ",
  "key23": "2bAcSVAHK3Em3d5ZK5mwrHaGSzBdN761fWokAcLL28DW3X7Ja62dtH1xzNKpbD2Q3oeEyNPegaS4ka1S6HbsjFSJ",
  "key24": "5gYjdzk636Ca6F9hJ2pD9TqBUXyMZYcUbGrLX5WcjLdKahBJu1Ms5zCNqm2npcP77EMtq1AEmwuNqmApMQ1qBsJb",
  "key25": "5AygUvtRokQiEdciqDJDRkWVQHmVBHsNx2VUdGv1r3Nwf6nSCpKdcny9u1QQZDa9FgU4SXCemzRKwjmqLvwDn3E7",
  "key26": "5QmU9B9t8sKQdDjLJxQPGnDx5ZNBHrBFbuDBEu68JtUWVdHmQSBbdR8CVT2e1YMHTCbypwu4LeYGDGNVD6LFLYyF",
  "key27": "3frnpcgtqJ55eVZfzamyAfnxRo8uB9uHp89pruY8sM7tjo7bBb3CofiWYeBf63eSAMXwciUPCWABRCKqjdxmgtDA",
  "key28": "4H38cuBBn2s9xe2rDu6vYnwLXMeTEcm7s1bqTAM6apHSNVNkSZMKiN1U9ipHwHpRiQM9Adwn3CazWP1te8Pab9Ub",
  "key29": "2RXreku9rmBaD5c7Fif8e6ZVk1tEjZrBj4pSqCK88aQr5tc8vUR9KDP6n23DDbFXYL1n9T9pkrPaM1jNUxDQawGH",
  "key30": "58STvP26Bv3SKYSjypppd9Pnq7qBDNFTaXFFSxQEzcVx7xXRWhFh62ZkSLVgr4DfEnnbrvuXxxUZzfGMLmKsmdfZ",
  "key31": "2v7KXbrbqFKZE4XvhHorVWFeEFu83rFNPz5zdSLJDBDgRfbBoJT7MetVJgaXbJz29tV9DPu7kpfAC6e4x3LdbApJ",
  "key32": "Tz6TpCX8HDns7eECcuZkkHcYWGvBowDKhUob7yWBhtKR7PY24vP6h1oe6pZQQNUbc4LGnqFhW11rpcn9pToyG6p",
  "key33": "5VwTS7uYYxAJaJEErAEXbPJQjXGPCKcaTxLTqKvMZQvLBew69nxiraTvEVBngGFdmsBKihUbY2LcVTNVDAvMaxf7",
  "key34": "246SVjNrNq7a9Sh6Nexde3q3AQHNisZ4Ag7W2X64gpQARx96ncHHLDwWaMGwfe4Bh6W6CAFLZAC8fYuot8fPD2a8",
  "key35": "3CQc7o1uV67YeevRMaKu3GcPbKkiwVwp9u4i6SDmDVFzVH6RobTE87ZgVubHVWg3Stbdo9vStFgjsMBTX4E6JYRG"
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
