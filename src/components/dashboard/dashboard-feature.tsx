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
    "4xUmKMMGW2CsWkreYnf76L3a6XKmANDaDff85i65srTKFBCtcRAPYisEdd6TWXqb6dAuFKBadWuSri117THWz3pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rTPQqk2eWxiN5sw58TwKjt9Xqe1XAbAzJ6nDLSaJzdw9RiWvW3znT7tqQgX5DEWaCFCYGfVhJaZL1GjW5uNg5aq",
  "key1": "4BQack4Ji7UzTdjWUP1dDK3kfab5vYvovfVFcAWwAAdAtgUuPZNxAZjvXPe9WKZf49ffhqCjaYjRFu5qqFK9Sivj",
  "key2": "3G4QwQuxfZrtPyrEPuwfcP6yBHpuBtif5uqAjfVxHSsBPp9Z1KoYWbW1qqXiSLGe6qnDcb8gTF6xUJWpmxQxpgYU",
  "key3": "51kYdWwqNX6rXFGq3F7B1G2dB1GBPGok7b1j3tAaDRE81y8pHWsdUksGKxzwjC5Pbfk42YYY3JUy8UerSv8KM1GE",
  "key4": "61Cpgejy5rdyms1gPDX1eYTnrZfJwLrKA3gtWuA9z3JeT8hphYFM66fwcbTNW8R45fhPGMN4qAs6jwzsgf82n834",
  "key5": "rx96MbWJQ7RzEZtjfgWjBhWQZ6Ai9VfAfTtW6HFaHEirGUy7P84pdu2xUEE26LmsdiZ7Q76fjz46QWwHxdKnpZK",
  "key6": "5wx6J4v7MoWDCGQ5P24wSy6kNfmZ48mYkwine8PoheRMJTVYr7fZV9jQn1QAZTuueJsnagguC2kLtGcffsz6ucq5",
  "key7": "3Q5JxkJVWpAaYRPAnHn5AbgYUMpV9af65wKAj7cMsdzFUDQq8eVp9pw5Mbd6BQweyCJhmPAGJNGPSzNwTKXd3RBP",
  "key8": "2SGQjBEDxKakotZvmBbn2YuuGrPf7kYDFS3RbfV45XYdeYt6z9xwubdjqqsUrbAykHHyDL6UL5UPqfmPTsRbLSnW",
  "key9": "35AhMqAnraWUrbbArXh7jx4MDwTS52YQH2CjWNksJMFfEkRrd5635BLwi4zfh893WzmvzcYyERt8Ywpu5FuLN1Zq",
  "key10": "4jRm9aZS7ttJLKTTCAqFd4zrtwqg2xVNztm8SZEcjXWdpB1phDZUrUTEbNzVgdMK93s5BWGDaHKLiUGMdZA9qs5b",
  "key11": "4YGxg2qLAyJnQ6nrrWwCKBJyz5W3Jd5Udpx5uFhy3is6LR2Da3Z7gzUUhMk1Ab9CH66fCXKQC9Y7PZ3Lp6RPuKaZ",
  "key12": "UXmfKg7YAdPBbs85yR3ZiULdNgB69cDPgMVhdb4MCSLifV4zyTLeJr8hy8ZNo5WBKqWA97G6KB6r6NY6eMNZbQY",
  "key13": "5SCT1VRzFubJf92ibC9fHUqhwgfuyAGkiZJnxbEeDNR94MbeX26yZ7W7i2wAUntpi5QJ44dp7yfFkvgutJXebQq5",
  "key14": "2HJ4fpuN9vJGJtYHHGPG6bcx2266AEHVkMbVB8GSsFQrJBTs3gerPjniyGqvDUFpEAb2CdgquJQXqVApa38MJBUY",
  "key15": "5kW7LyELBjaV9um1h1Vrep3pSWyMcCw3b7KXZsy7ReeTyteGt4GsWR2ZG3cMM9ZtJkA97P4qq485NScD1eGsDczc",
  "key16": "3Hxs9Ai46P1pm2o1u6paEBN8ckwfLu2ctwcqxrrkT5rPAwxQmn9zZZSrBCJeBWXNG8hkjDsbH8dvhCwU1wZwiJUk",
  "key17": "3384DxQgmfehzYpKxJvgR1fL9nqomSkVTvmRJseb15TS72D7bpK23HbcKuvMNZV55gxTDWzQEW9VisR5e5n5jwds",
  "key18": "5ZhjqHqjnwrw1CYD3Ggw9cXb6UUUWfgazYJnLTxwsVQvCYAutTEJDkqoKXSVzjX8A2HeWRvPKeZiDcqTn6HRfy3d",
  "key19": "2gCiPY2rQyPxkkQB1JzN5jAw4fEUqehDqZCQWfGFvpiwNDKBqg2nGor4WXQCXQ4hcJukqpzva2iqHsT2bDZEa657",
  "key20": "4gJu1prdfhNfq47rydyJ3m8G3z3oR8CRt7WQSaz3mXCFzgyM5GJzQVQDBdHzBXvotui3KEvhbpt24hxyySyGzFSa",
  "key21": "3uamxGf713gr3rUb3tkW5kBPwV5qqifL8EaRKKHErBPrrKmf7TMDBKPvGvnFFRXmLcRMcy3FweskycuGGTvaafnF",
  "key22": "5nUneScf8MgDpXNU3w3imyqhNrJy1LEbQYPHugoRxJ5C5qAqomdTCVanRhYN23Wz6vEXQ7P8sXd2ntz9H1JjSRLh",
  "key23": "4C7ANVudL9eXwVmwkUL7YHniYTm6B9pQT2xZdTZ5Wcy5Ym3hYjKLH8kXcwFx3drzqfZyGd3Q5hbZfaNgebhCFq9e",
  "key24": "3QKN1RZGhxWAP62EBTF7GGSzMKCVggwHQdzZdAEHPLCzmTskPeruU3FWAfedqAqe3JQgpCgmfRbnpRQrCC4dsqtT",
  "key25": "3gVV5yiMr4PMwxo25dHQavgqn7YkadiLTuQxptMSqeYqbXWB7nBvbbvx1ESm47tNdPfuyjTrSsio3r9T4cs9KE9p",
  "key26": "2uF8mFnvHDB1p3U8WuQhmRuw7i31Kqqqri4KvuXHXfWQ9EWztGgug7nRJ85gT7YhbLTmbLmncWa3hhCNBPsbpgUf",
  "key27": "u8sdj2hJfjXahbqGpBEuvAMsdCZwftXMm3drimS26z4evWFtzoYWdHhxkWG3Shv1p2QEzzCe9LZmfSnZGEwTFRb",
  "key28": "2zgEf2XzZ6JPdgyLnXyyRkNiPcX9ejArNAF21aBdpzYjwf1H6hQ1WmN9QMiaTou4FXqsStK3NvrpfH2FS3Uzx8Js",
  "key29": "5DJ3YpFDhP1iQpJVzsVrMfwG7KtcNYyYxaCiV2WSsTg2qUNWkQ1CxhSttLemgwSZpRPmE7AyMnLxM7WS7CnM4w1Q",
  "key30": "57pXY5xkAgyqCS3uCVFf8RRgS7VsB8ED4m3bdpdT1gy27ao5bnTpAxBcGwg9a6DtT5puvxovM8pAkKdiC5osqL8k",
  "key31": "57zDUd65gNYi8uC5XtD3wsPSsMYX2M8J8ACfrGtg54SPD2uMsPRU6h2C5rTWm5mEiCLKmFoCvY9xwHS6siC3Xuvo",
  "key32": "4MeVvFSqGqpuQrc3DEvuTCUNCTCsKSh8zNMhtcT5tnkAmFrtxgFreafqXYwhkLorLMJxkDzLvegDzNPAHXAhkQjW",
  "key33": "36EwkdobW63bqkiPYEqweFMhSrXmHzwDsa97LsruHBDyJgvr1BbEmWx9Ai7ERqbPT7tVdwSjSq4jFYuWkk5byCvL",
  "key34": "gfjUQ3bzm3hYHKByUzGx5vCsvEBQqAJHoCp7kXqQddR9sMb5Sm9xAWo9UWEza6h98yd3dDj6R3otZ9N7zCfkcti",
  "key35": "34fBU6K54LVM6GgfY4HHGhmjnco2tyikmEw5i183ow5HS7uHQJV8Zrp1LXgjBzxEjehpDoTNxVmG3GwU7QZxgtGp",
  "key36": "5Qqt3bjTXBsn8htGE4vi4aEyi1cVoHzc1faheai8ZqCriRkdUV1fFuijFJhepGTSfK68UqxmSbxzVykVkuW7MeE7",
  "key37": "RUXkJY1GKcmyTHnrTADXzmu1oKknbzhNa7PDVgLf21W4YNDYuHLeLz55SSvjsCuUDxc6FHwkXQCH9BpymeyCAfw"
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
