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
    "4xxqbDtVoFJDScyce358SYdDSWdWNHXDKdR7L2YKLbit86cinrLCuywZAQ3yEXhVTFUXayeRwtJBnQtcRrPMi6AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prJMvmMF3zt37P3iaqay8XyLPoZqKqJfhmU8kMsjgr8yTvoosQ6jVn6SDA2Ak3j9NHGhEvFYqHJmVnchxtoqwms",
  "key1": "KGmq3DYQVAwEekkpjkadjmzQ2pdnwQfi4YCPvz6QbWxjMgYDsPnDWk7VqEXphYoHtsqVMp6WPUW4sfFARaHRB4C",
  "key2": "5egEvBJV2QCE5sfH9wm89GXvUU3bZvF9cfLceyCPRx32tUN6pqG5RfNX9U2ZY7xK3ykDqKwioX6MTT7JdE3cJRQZ",
  "key3": "nTeonDTHU5guyD2CUgSqQDGQBgCL4cFFpbyw9bAsXc8kF3FHocS3fPebDJZJ1ykgf2pTB74P2hgYjpPW9yPfBxc",
  "key4": "3rDTtmSriL8bncdkVHuzdZ4FS3b8ABbTTqaQ8SJfnNYP73A3NofJ8zfiUfPFoXvsuj19XWUw1HuieMrMxoiGfjoe",
  "key5": "48qrXh2pML6Drpq3PwH1WfKSxj4JDt1QhEzV5A1iFhVLHDTtoc5HHGwK7NbxRvVdPa9FD2GXq1iDdy2MEbAYh36v",
  "key6": "2QQtoEwv1cEATNixHMy9rKhc8chsW9HDAdMQUrw9q56VB1wc4DV1RfxGqHLZHXgdx9R4t6tgWLJoN5L4fkDZmwYp",
  "key7": "3Fdok2yqbEF2o4PgG9fPDPqckdb5SkV9XYhqT861mHXit8vDzpCe36aN3kXXC5ajhsEUY5ZXDiVEYbD84SsG2BNZ",
  "key8": "4Hjd3Cn315KtN4XDTPDyXSLNzsvtqr8CQjfW3TQTfeUqAAz7ydBeTmwkmyiqkqL6nz1LeppbBs44ys2J47TPC9Sp",
  "key9": "4gUDpPnL3qGYHGi6Q9MnWr6eChKmgcCj1Qk7Xso3AeNypTRLCHDbdhXiaBwcRDWWojrQiFfAYVFSKFY6jJoegdip",
  "key10": "5iAdyQh5zv5LTLTkX4yKTWHojv8PWCgBjK52wZbQG1ZAmbtE8qkL5jqAqNWk7nTuw1iJgyTNesM1323vQ2AktqRa",
  "key11": "43ggZSa7FaMCUt6pEdMDMjz1NmQvjzDEmkkA9mqXd87TVtosYKWqje97mzJnGEb3wiuZrZfLx2Ej6LxEESPMRUnw",
  "key12": "5s8Wzr9RduipHRfcn6P9LMG6tmxqMbTgLBxZ7kgsN1hAttxxiSTsLWB4XbvWbZQGPNzcYv7bRe9NhKCH7EXS4syw",
  "key13": "3UhZMd1svdytoisCr3A1zazi17DjVrS4pecN74QXeiAS6mf1eRrC3QHWNAhRKVtatb3Bij6wYmVDCKAdjsJrCCCL",
  "key14": "qzVVSw54ZjteV8tejkdCz9gvMbPp1ZKUUCsspP5d6HDLj38wGwePCbcZsVvxKSepQfKey1TYwjtQcBZt75TG12f",
  "key15": "2CZYq7GRe4VuaUot14a7n5QLHqpmP5EdgAiPRYLBpcWMCm5219omcbpWcHFVPRzHWWgZW31eVbz9FwExgLNeEax2",
  "key16": "4kGkKnxLQE6anPGMxfA9iHfTBLEb3BMk7BKgPYHDpYEyj9vtJyG3GoM2MC3qPoVrzQgUtGNmbm1n34ayLZBqCEqn",
  "key17": "4MZk7za8qi5hD5vELWFLYLDeypw2MSFy2r1XPptM1u22wJsNXviKJzHhYeEVDieY4KeHmW7jsjhAnfHPrsR5CZcC",
  "key18": "d5oQPGdhdPuvF8Whru61Azz4fFE8eETqwaZQM3jKNcK1nwKQF6uMnsGJB91Qw8vWwUb311Cu2P2ipmMHtHznKhr",
  "key19": "H8tJAsPbf96xsdny1YvBQxCvEkA6BQhcF44Q3eNoyurkHWFWfki45DTrZzNyrUso8cWq4vsMACi5edcWiDPnybW",
  "key20": "6emQ1bvZpPychGixyocfvkKXgw8NZCdFseMqySxsxwCdRqy3bKgXupdQHrYqEMYs6vT4jXQ8gB3nSBoweypAsgG",
  "key21": "25dmhNsqsPkCacbi8tDHR7BKWsbcoho1sgFHgWsESc9TQB4uBLisquttbDeDaTJaWwMcbGdNVwyPGsNPcdjEfoZw",
  "key22": "5zTRywYGA9VgvdMXVtCaeTUJ1zxXR5JtGvwQn9xa7KbeYuQJS9t48YeqFrBu9CrjYn4XDxyQ6FPtB2ZvjYQSw5Pq",
  "key23": "4kuY9RWaJgtJu7fXkJCz9P1re4DL2fNwJjJWBrZWaRcYLqD7iACHETzQQAQnMfgSAaZ5Fn5oeaHf96Cka8QvSeMU",
  "key24": "23VGPcUa6AzhSUZDGA75qB4nfqQEKvLkPCPpqUJ3aH2Fp26qXqz2jmtKQkF3msNRVuc5NkDYU2eXrDq3mRvmXZEA",
  "key25": "5sdEQwjR7XNQ28umYF9wwPTtFeHniwaMwuvNeh7KE1AQNz3Lw6TGt2b9HxAGoXJJ7ZWehgrK5i1igH8zai2JMstH",
  "key26": "5pN4eCWFXCCQ3HZnGudR7tkmWZdX8Mh1MobupZurZ1Dkq9YVYcd5Ln3pRGUhhV8dKVYLU5joRaJz8Yubx6DC4n49",
  "key27": "2eZY292sfPrM2njLHb4MDtpPrQD6JNDp9KWeMs1txTdQDxgfpcduBtyGFdv2pYXA9Gy1AAdqwFnmKipVEsqpK1u",
  "key28": "454NupyxB5i79n34kZV8wwtn4sK5TBsAp32CAWawjh11ozo1VxmGyEVaYgsrHHnFUyjA3t2aHqGwocExFtYDPQ1R",
  "key29": "LrAnSddhcx5i5CU6zHd6dpvaKF4YZY6ZQGy1mxixHWzE6Z8Jdvx6nY1k4aehZnR19VJ3wYtHKozaNCS2na11ePe",
  "key30": "4vFm5pqPZocjdkxoRXcwtZVN73JoucAaKK5nB5fDMRbvUYATCDrHJATS4Nd7nWsSAs9xKaLhQB7PtEJugfRvUrNX"
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
