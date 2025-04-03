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
    "4Y1AQRBhYGMaNKPcsodfhNxpN71ywTgsCAvKeNFdhfjwzUqYdERmp2dpN1cYBfEfrKPcGrep6qnExw5N3fGFSj52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uP1HwLAQbvLEuDV7Q5A42ogX8dAQGB7V8YPjbtyLBybLBJA9Yv9JCwhnMxS2PDBLXY6TskSGo6FBUozj1aQNjvB",
  "key1": "3YTKgJRbb49o6CNM7GWQRzYZzmGbZicPjuX39HrhD59uNGpuhvjgY7EnyadGGqpaKVXsS7SpFx8xqSnL8As24Vn5",
  "key2": "454CwF4TpvUmAX15jegbWT1r6Cco1EufuHEpK4nfgmWYea6CzAZ9maihQqveDoQ1eaA1k4rdWAUeLwYNAo3cMmgb",
  "key3": "1YZJGD8mwY8GqBTRrxQSqTVdvDsHzQGktSw9vP7CJ1QVw23jFbk8xiA4TFoLFZXPmtg8Sfk1e5vVkuv1ULDpZGD",
  "key4": "2RYKXqP1HVBZQdy7QF7LFgf3Bwz1F3YRbkmmwBKXdfb4Tbn2bbHCJwRKiHzmXBw5mmmLddXhDamxqYHR8cEQg21E",
  "key5": "2VV6bwhqgXB8enmFuHUp8KRMJHyUyt4JQ8XAWGBFZTAxY6ugmFJsmz4SsH2ddnQSk7bwbx1miahrmipRT7mWicMK",
  "key6": "2jS4sszbz4cWsAoxUtyHpKzBu4dDh9TmqeGLdFCt748uD4XtML6CebuQdEC8ckfZV2ZKiShwCQjTiVmhDPADVX6T",
  "key7": "3VKqtijCFTp79Nh8M8RpwVbU4yWqqWfTGy8ZT2YmbwUAuJK6iFhLWWR8pt9mxdMJKYPTJBtDA7B2XqM5wTcoYaZJ",
  "key8": "2LVPbi5gauEm5DYTwGvX3oi3QpPpe2sQTCjJzHDCxiCgRu8RgzhyRaUAirFKDxg4JpajoPy7WcCjziSkdEbT2YaE",
  "key9": "3tzG2ikm2WYbxembVa4Ur2QEHjNVkMrhHyVWm4gfUm7bmic2kb7ityvmeWbZCzauQYxRfbMMsEqrm815qYTDZzD7",
  "key10": "4BusbsUgBcXwhgP1gfmv3Au4szxQYtViWfBQzpZAU7zE27m5ZAStnc7hTTA6bfqgxZJa8EddbCiaCAStSdRnyMKX",
  "key11": "F4AfXb3zu3QehWvNZyo3e4c6yhjVqyGMRHJqQBuaDQy8i8qSbYfK62xD6u5cvjWSt4UHxfKEijj8v66akJudaiw",
  "key12": "3VFuN3qejAmQd7KRaXpwXfY21wHMK9ja1mqUFsgZ3N5Tn3JnUkoKBxBr9adn2Tx1WcXdkfVR6Ep68sFceCsbFXvV",
  "key13": "4juLFsBVsFwX4nfdYVeFBMBEMfJqmyBNtSDqoHpSD5LYs4RoESPJ4TRW75S4ZQvosb5QtXB2PcHf8CRBt4Vjjcy9",
  "key14": "2K67oXtBCnHZAGJivgWgd4ELaxT3zpwTiWPFCfmGuNqegw7fGmhsRkUNKtLCGmL6ipTERECppnjiByfJA1KWvgqX",
  "key15": "fmGj4CYPwyrCs1g1nfs6cMWGWQN68opgWc2KSa2xbGgNiorGLUXPdytzxQrGTwNTH1jf6F1XoVT9ShrUxFKP4Eq",
  "key16": "5LZu57PYg2SKaTR5Zn3HkHTKGHKn3nafLCH8Gkm9JqryQikkjbhoAFmryj8eqzGXLb1ienWeqvY2vS27x9ReZTRS",
  "key17": "3sjFQr1QhG52xdG8L5Y4n6BnQKmdjCZozG5PPBvVkEMXjcrZYosnKarP8fgkm5qiKBVYt2RzF89JnP3nEkfGYxci",
  "key18": "3fPQximjRKBNAVbyQSeWvQ3dPGqYW1ZpwyfqcfKp9TJxqVqBH9pXaERDtuVRZPsS4kMF9W431oDG1s4P7Z43RzKQ",
  "key19": "2k8HY2N497AE1SPLxWz5hCt7SQbf4ndjb58PL36gQvVo5HvEocTfExddJjB441EsMyPvDuXGHpMMMAdeeWwn2sPt",
  "key20": "62GdPE3LHrDCXQuSLhRsCA1SmCUFqxsnudoAS8r7RYJVEwwVEBXJX2czJgwDer8v5jXjEyQjWfEF5zPFHtXKaDAW",
  "key21": "2ocoVybmV33Yq89bu6KJW6AHTWQXux2GqqrpFKZ6uCXBdSEdGiUgsiQDqh6RU6UJq1ctwqqzdTBn5nyqd19eii1S",
  "key22": "32YV15LqADaQLDDY38Bd1JSPPZWDSj8NTzTaZkVEwANLMhkiXikBiG55LgWh6y5C2hoCvZJAWE5ZvLL7ryYLX5XZ",
  "key23": "4evHbw7GJDG2FtdHAmFapwf5BJswwvM9SmPJBxzTX7kjVkn9wyMgdEzAYkfWwNqEU94fMTs4G4iCVJaZ7FZQtXPJ",
  "key24": "4sXHbJJtdnpff1NspUjFZmCXnwwQYeFDBs5daTDoS9m8Sg2eFz1tzDbbKaEk8vMDFmnamw1ZmYuhZi7gZf54y3KB",
  "key25": "m1g8ktWPdwXr53xxGR3fCV2BPbY7UePKgF7LPvJTGw6KMmSUvZ7Vvb1pawuX7opddCkez8iq6Ddr8YwY7TM9dK4",
  "key26": "2zuE7S8VbJ2pamNyZWSvYv2egarVLhXUHMHUV3MhPmuWEeLY8bZgtjS1cvehwrLj9xtGfrC9Gxnv9qUBDfJtrEDs",
  "key27": "3FGQnCzg5QMHUF5c4qGtooX6bhs9v2q2SaEUnx6YzNduQK8pSuHLyupUKJ35e9GzJ7g1x9iJMJE4LPbc7X4UaqMb",
  "key28": "4e14HfpWNZNWqk7BiHCxuhh4wQQZAHVhHGpvZjLZ9mbhnJXvENhCNCnfFcYSKxy2MzqLqp8WVkWXkWYD6D7CNpEw",
  "key29": "2Q9wXHZeFsNiboQJKRvWr3HqLisnhWUeFfe5xKQQ9bncQiJv51iwfHKo14z5XEMSa4erngvuZsGmtowCsVgCYKB6",
  "key30": "5aeUEhSoHqSE3QfiQuK3CANuURrWMtuCbkbcPfKJaqu563XStzNaWv245qgXu4Ci3T3Crm9HoY7A5k9bt2G6FbWz",
  "key31": "3BmVjA2bbmkdvgT5ZhkmuL62ziMHJJmMmtczfLcKRr9H1Dm91XvWA22z1mDbJtgntnkHSMwD7bwJUxzpFs4s92MQ",
  "key32": "3UXGvj5HFwHFt7YL1ZKxHnJi9FP1x2H7eDS6scgT21kKbiihU9E158WVg9yQsxyM3ZfJC7oWv4qMLqK7mTrQj36o",
  "key33": "65uexkehSyq8bWe4mEm7kWYdtecvMLxMkCf53DT7wHDmFpisDk3GCSmkYPjKyvyzJBiSJWEB4Qq74rKujhLLtzy8",
  "key34": "4ztf134i1jUAfsMDB9PWQBWwJ6nJy2wSZHgq1yFR2DwaqRwVXrbJaAQv8PfKU91JWZ72CSFjnDAU8349PcM76h8Z",
  "key35": "66sPykg8kVJs9ku9jTvXxMc78RmeKj8VHyjibxS7siuHSS19kvXJ9bM5NxedVVGJgWWaDAQmPoQPUBtKnZShq3B4"
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
