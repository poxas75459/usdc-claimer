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
    "4ncxep1s17FHappof9R6dSVtMekEpAXQpdpZo1vWxb8bU5FxenF74SCHYjNGBzVGF22cdZKW2rgdwYy8BM4tiGBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDbYiimgeD25nZ6Gw51Xxt9wMiBBH6ruzFGwsWxyeexZ5LstD2qB1AaFGHp2fh5o75bg4DJZuu7rwDZT9kUHt54",
  "key1": "3jSQvamyvv4PaqNJPCPaLTkUJd96FdS37yCJEva9AB9cB7oXvwoB7snRKuUMbRBwMH9CLfLdkAGY5B8awBDitH8L",
  "key2": "3iTxywrQZcQPgLEaTsfETmyJX4aJzAwShXckmkBWp7fCwefaK65TmKvjJ4HnFKXezDb8c2kTCbqY48PmtyawXMhc",
  "key3": "2Vz2Ns8MoUsofztdQsfRvGLuXnYiRgXZf4vpAX4bnrtDK5gywFSLm9m8iF3LMRuPPp4SuyaAbEwvHmTXFpGYtEMq",
  "key4": "415ce5Pv2XMskXHvgcGQfmT8do7wpCZafzFg9GwLC7pXoQKYxpcDR6MTqgoT5CBLnhMj1eS4aD3yFcpJQMXvL1RY",
  "key5": "4Ms8Zs4qwJnzGUK7ha6q5TsmJYie54MubgV1T6kw3PmK9dVQg7MsDpzMWHWfhVNhFsmvPPCHS5jY8hmw4LRpswNV",
  "key6": "23SykAt2kTDdDCojdrnCY8fQ7U93AEvqJ2hwMfw7oFUZgCaZAx14iq2LkFRYa2cuAG4ygMQgSzCnsHvYL1pL1i69",
  "key7": "2gPKFiTFq355i29DRtm2LVa7oBJi3b3ikWroRjA6KRPvBHWJERNXVXGeaazFKwmiipqQyWvk7dV8ukgCDpjpVg5",
  "key8": "4CRzhCrdK7wHcmKPHUVit3UMB6ff7CGKDYv9tbFsF6D3ZccCJQNTbQkiG6awE3yxbsFbw2xLPGgY4PohXLYhE4Rh",
  "key9": "4eSWD5vjfkgLwQgK866xCDWzCCyU4wwWQdNfU2FH4vzBFgoB1VA9oEhMdAZ4w32axbUiiqb4etrYLCZxs5ggMs31",
  "key10": "4TYFeK9cBQDvAzuVsb4qHtnBbUUFxzm1MnFRMUEQKQ1fP5i2MgnFzF5pGpPdkHqwmQmpjZqQ2nu5Cp8iJj9fYzDP",
  "key11": "5giEPHKeUsCdCqfKnMW2KyLJ2iSSkzn75Sz3PJvuB3vLQ8MrhjwF3aVe5YQQvUJ7ZKmdLSiHtjhWGNf3tofv879V",
  "key12": "2gZKegSFzXPSTUnqf1wCpm8nLGsVWhPFMndx7myVe9vUtyucm53J3vWVDRpBE4Dg8uzbghqhviEcTjkJ9nRWFGtt",
  "key13": "4gKkNuP35AReRxFGKZnXCCrTxSkpR5aoYvHBJ5GKffdZgC5tweWuGZzH9XX6s7H8WELmBcadx1roEGWTAdyo34pa",
  "key14": "4RNLAH82D4mrjbzhzB7FkuGtP4SWQ3EN6faR4h3G92BBtAoFjjLSk45QbAk4Jt5Xg73itgdXWdjk7hPtaofdy1u9",
  "key15": "5gPcSdzkS1AzeWfsRUi7R9Pg6UXY231bkwTMH7ExaH3vmT6ueLBWP92TkdTzuiorJomdMu3tHu6uVW4ZXAz3somC",
  "key16": "3Arz1MyTKjZRtennZqqhCKPsZksC1wuoNePM5ERbdp3YcX2AeP8GiReYTLSkuQjxLMUnNH8RDfExBgg4VgPDS25F",
  "key17": "34Y4BMQdZ6ReSBLWm7sxwd4PCHxzBmGioPy6SMMqjnYGzW239Ei2cnB2etJp1E3TUzxBxB71iWMQZJJ5oDyshd2S",
  "key18": "4fXBKzNotWXKAWjDcoEbtdEojn222hfBEX3xVJah354wN3Yj4CHwz4cpNPxkC7Nk3RAE5orM3SpqPZMfoLijm6cQ",
  "key19": "4PWnqWzURcjrLc81qXg6CeXCUWm1aCQTJaszo69RZcYcphcVZmdbUMwKkkJmSLAqdGaAbWyhZe4rYpkXHBTSvjrH",
  "key20": "5Hvz8b1FKbJzTHmDiDTkbFXRDP6rAAJXiAid9BdU3aSscSZe1NUJRxHN3KMBhTC6cqxsUfNazjL4PqhGrfCou7m3",
  "key21": "5fBaX7r11dmn3ZNX9vws3HxmoMcga5goUkrUcr3rCmrbiRNKNad5dZG8trtdS2D3UuNR7DvoLhcC1tPyB4Jvzuej",
  "key22": "5FCuWA1naCtAxsprmEZToRfWRmtWWF98wY2qAVF97xiUaLxTFMsSCanXnT39Ki1iSNKZA6dtF3xdn9K47AZL3GxL",
  "key23": "5d3BdRJCmpZfdue23Drgr7Mw8r6gJj8BTaqc35PFNKEhYxvBDoEgEpf4Ha2JJr7zfeCmLADzD9wqvzhxQq75vRKY",
  "key24": "66eeAViYXSVndWh2iLh3Q3wcoV3EUJxdNS8mHeoQEpmfewSZyFMXDLfKw8PNyHJFFDsqLc3pHzAi1MKVntJv22ZQ",
  "key25": "65Tvcb3mgJSgftGiqaBCZRMg7V4J1ARqZTieV7DkKpfmMSV3njesbV2Yr7Lnzp3kq1CggPtNrBRmTuK2Thc2ecWR",
  "key26": "5HCkKf9hgfAQ3yceGxQKayQs5rnmxTbxQtP26DQQetPocx4hFfBpDHc59ZyzZKrXhbavSsxT2sY8zWySvyVCvNJ5",
  "key27": "58VdZLZR47bKC1nQeTk7HG4TqAfzGzfGe14rtXPyv5v7jh3itzpkE7JKBrdUn8CpAKYxjuoaUu2TH1M6CHjDvJEN",
  "key28": "2VpEtQ2d7KsMhWdhFZi9VuxRvrsaEZuJnMGxwqHqb99MEpRpmPAMaK5ZfiboZUiU6Us4ikxMaQRVcP4RWyyzYVAX",
  "key29": "BxeSJBE9q9pN5mUPrzgUt4KSH2CsQNSspY6LBGefZcqvBern9aAvJ7vdLAVUrTNJCAUzEhvJSL1BDsHwmUjLZ6k",
  "key30": "BTvu6jhtRXW6PLjqe9Cwebx4JW3ghZNxq7gyBS6U9Am4i6M15aoDu6LZecWdKEBpAhJ89ogNTzmtjarKUySQ9n2",
  "key31": "4CFjsn7tHQn1LBA15mWTqxCYp9mJCfLy3zYDHF8j18pQYX4wUuYXiL3pDCHtUoBbd8Nw9LiVHE8TNUKBJyDZZge6",
  "key32": "4xv7NLGceSArNSvzxzXY9Tf451AXCnY8g4Wn3PU9WsMQfDMSkwYFjANzSoSFbyX6HKjvBBsvZM6pQTr2eg9KqaDJ",
  "key33": "2iv8tSwENdfauoen7Yv8fgxQeRPxNrtUC6Yvrtg9E8hYpDKL1vcgvJY7Ere3BV9uxVHedVvHpwJNqqDcrQdm3TsW",
  "key34": "2PdYjhgoxwzkVeUJuhL8bKGgQGrTymeR5SWtyuHiJYSFRJYLh6tGiPrGqK31oCLB6wuvDW3St3LRpRjZamWgtYsg",
  "key35": "2HZvXZjhCgCUjqombzoKrRVtbmsToXxWd5SYMiCJkUAVPMyjfTuhHMMm6fDgb2Xas99d7yByx2uzpwzRyLWyTZh2",
  "key36": "5MCHxLhDAb2Mk5czzHYpdahhcYUR6aiL2HnTTt5TNRQVXMnS6HrcS231vZN7vQzY5bPSxvNpivZhFrHgzt7QfpFd",
  "key37": "3TRubhTMmNTr1eXZYE7xjHc18HbfHf27Zm84NgpCae4AijgA3WhMuyHtCLj6PmMN4etQxhZfssFpWs7c7JtZuv1y",
  "key38": "3HDr1aWF5dd3FRC5nvggJgvTquFi39GneGG7dywUmPW7T5X3A73WN6ftu6wtJ9gFgTA5K8QtYECBB2CCQNdWtoDj",
  "key39": "29ULVNy1xAyjZ1zxs6MWxN4PDaoXuXYhi15pQUzQn1Q6jYXVQ7pqGg2KVqP9cTvjVCVbE79WzVqjdxW2odrmRngh",
  "key40": "4H5Q5KJLn8YqV6yYHLBnjwjzgyzdFX3Q5EpKRq2WX4KxhqVnxCCnQqLfkEWqibNyK8rGp4R2YmBYmB367111s42k",
  "key41": "43g2HZQYh1icmmoGrjbXw8Biev23pyHtFWjwGf7Qok6J1ZQDa4UDCZCxHft8wnkeBdTyM4aYmFQjziEW9i8dizFo",
  "key42": "4f2ysRmgBquwjugFvhn4F1S6xxLh8xLYewz6qewweZkooaeWusD7zijiqsVLYUo5ATPFGwDPpjV4tD8dHszYPKjT",
  "key43": "dvhkSpvGd6XvCWbLNA5DZ4kuocR3motNgG53x7S1tzYUMTDvd4kWTUkC3MWRZnjDmixgfzQPtpENdSr4on8Gxba",
  "key44": "2UrQCi8tbAPi9rnpfEuPy3Pe6xeAvBYBfdJMchiZX41ZJZGn2pgYiB1nYfQNuEY6WGSyGsoTpDgnhdS1CeUwQzw3"
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
