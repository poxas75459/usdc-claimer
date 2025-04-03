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
    "4dn5v33GQbNu1HzWVc9o4ensCcrK7mgrw37bS5nwP5AzQf96kvKFogCkHqKp5PF759g9nNsXYoGdKvaC3fKtCR6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aRF927jxGrQxDcymokmwCHrtDFji58rTx3qs83whw1dqUfTGD7ZCzsg1QVPx7FWbzJbz3xe8ig5w9WaLotfFpFp",
  "key1": "fWZcnTEPndJo72tj5kxNuxy95ryWVND7JAVzRUjGEC9nLXuS5mgYcX6EgwWPRgbdR288h1MPALn4Zsdh8uGBLuN",
  "key2": "AHZN4PCEKRHQHzAXEwxuA9ffPkCEJhLgRdxQjwsPBKSK8mtgnZ2Vz9RFiE4cbkkLmAJpBKgrovU69xP5ZzzR2GV",
  "key3": "WgZ1S7X7bTNmxeCHfqWxNce5T1Sq4dAUUU64yF2Moui67wnwTRwLHK5ucsNNB1R5xinX71yUMudmTQRf5usDM2K",
  "key4": "29aEEunogDTjs2Uzg2CEstpuP7QPgLzR5Vyv3gY5auFoNa9stHLY5QwwqfboPANJf5g1L7yAX1wT5r4KPkye8hFz",
  "key5": "5qytQwZuwj1WNYzdorC1oFFWa8K8VFnp1tZjqVScV5hUQ1bwaEWnr4hXUE7sv1wo4YNtYhRd4G5wcPUtRoSWDczh",
  "key6": "4aXNyFwhzPvTb7afGNzUzzdXqQzXabQdsD1GYZx7UqoCgWjvLnS1q4zQ5AKp33P41NvHgaQDS4dCxMrZmWmK9bwe",
  "key7": "3VuzUqKoy4B9P6QWTVQqWFZi2hezagYHaRv1RhBRkf7gRkBGJVzR1avZ8XBk7Q2UJY38hecX2hf3D79vvi3Fe3rb",
  "key8": "5vc8vnmmGCk5wZcEwqt4X7GJ2itQxwRzqwHhYx5wWFWMRdTL23WS7T7gvpQGaw6oYcG2QbQ6Bq1pZPemLaR2Lhfy",
  "key9": "yA3jE75rsX9Lt39LJK5ygB6jiDSHxicqfZD9dSN3FMjpwQxURGnULoDAV4EcLHjGhC2frJCt17R4JosoUQUm2yA",
  "key10": "uHdwngAPvHyW7XiYE7Ez6KdZJNDBU9rvomvNnt2kybss9MEccMotmtqk6GCYeBe3R3ZWVB59sLNJWjVr13Ds1zL",
  "key11": "DaVFji4t4oGuWRD7Kmf1EGqnfMAss5XSDbioNrpJA8HrzyHHmAewyRZvMgjrbqK9pQrDyqgZNnTZYVBBmY8fp78",
  "key12": "4qnWnUSXq3UvV7hGCGQprj3vvYyQYmujVsFGCERvNhYbPLvH8pRtTqYExrXwB191Kte18eV3gwsevwpF8bwq6tKJ",
  "key13": "4Ygeg53sJwZ9on4DcvrCkgVmovEme8V8tXh58oTM9W357J4JWdnJ9hRQ47Xue3WH4hSLpcetTouCx7AtdNQd4Kis",
  "key14": "27xvGXNkSjCUjmSLfv2rezGsZM39bXoKYNqcBXXAWs7SxApPJZ1iU7viFVhDE8J7pJmkTN3cKkKisFEFXyWEthsj",
  "key15": "4Zhwn85Vw2HBhHbNV2GQ6hKQf18dRs2L9mNpzbvTWAC4mMu6CV3aYXQUZGsDxWBbsmWLiVZN44z7Tcjnfe924XqK",
  "key16": "3NEoFu2nZ7vhZmTpgB55uMyNaYYxfnCN3dmp28A1M3ympjKczxXDi4DTtYn9175Nhg7iCk43XYN5nhveUPyFqebb",
  "key17": "2NpNCgPZthhyHEGiyvVbfq4WzS4Fodo5Ww9tHCVDx49xZN66h4ZWev2fqysnGecmAnb84PSd1CcqXjFqLW5ZLQT",
  "key18": "3wDwyW6b1CWGjSo9XrQqEtnqWnRsFBxdKZ714uYq9BGCNCrUAvpZw8hBLdnoRx4K2CbTUGALHDLnf13PZcsp1JtT",
  "key19": "5xvRSv6w264QUSYHv7rau4dht4uinoq92FCrSvyghhd1Af2QYFkkUZJnuq6NeEkdB1vTMA15cJTumLTFhBPtCQUN",
  "key20": "41tmgR4XoFttsiKTxnBd6QYQqpGYKHEHmRYaR2S3pJMaXh8cESCpH3DhuSZxQdxcRMBQkkhgsqJShGXZPT7KoSrB",
  "key21": "42e8EDt7D7FU8913JCpSeTkUGV9EgaAvvsN6NkieVDDLoDoN9tHf1xBPhXbRD4LPMPQs2wa49JPYYgMjyBWPDEQE",
  "key22": "38GUvU3MXZAdWiFS2JcnSsfZnovhWMsDLowB3CMiwfVtcq8oJtLgBk5NHumStYBTwr972ndEdcdy1dYjK9QUv2D6",
  "key23": "3iWR71voCzZ8DmknV2bLVDgkTJvFyLJZ3vYnQvdPoRiN9f21Vye1okcW5gxec1GoDN6HpA4gYPQbLQDZukiT6FM6",
  "key24": "4Na81C5sAKShw7PNz7qs3bqfnMqZKih8vtx14Gb5jXww4eG2gsLmfaaBpyB36MgWo4mEtJxJjgA6tfEE5hbMgp3p",
  "key25": "GEn7HpfgbEfxf2JLhoYxfohpKmnnm4xrC5G1PKB7RSpizGGMkJnfawGfDjEdiLppGMCkEiKRkpRxZ4kVXbmJhWW",
  "key26": "2n4iZ2qr5AVgv13obitQHCYi9RSqDDLiFtYV4nSqx74tmAgZYxf2Lq3DdDk4xGZXJUmzeEWJJf66WT8xefQJxryD",
  "key27": "5rhXaixgTShgJqM3n638BXWobFExhMLmgjDLsyosw6umsu2Zi3SWvqT5wPipD7BQerKr8y8frwckt4NQBb7Pk7ui",
  "key28": "4NxBs6LiBbUAnuXXXnw1475o1j9J9zdad7ophndR9hRbdco2cza5qmMNvEsArEB7cm72bxr4t1cQrj2qqJSZqTfC",
  "key29": "4C6DQMeCPTZvfmjBGjCNBdqeiQvcth545cubva7mxZdrWGgt4YtLEadiFWziSKxoMsHzXdHcH8DjUSGS7jY6WWf1",
  "key30": "3PZfMz8hwGCp9Puk5fpFNBkRioVuH6vw5rhDQHSBEfY4wohQfMqifLHoTLHj9dbRA2JDaj5dTucAchAwLRPHhfCW",
  "key31": "5uLPiVCU6jp5GYHR8EmfKH9cWP12VbBCWfVni4xXfNV2wojjp2K1ibdPUu3Q1GYnbCJXhF9g8PuwPVpzxHU6E8tZ",
  "key32": "3MoumrGz5gb1YYD4UrYeWfJKAAGnDYjN7wQFb6hJvxrinJFM755ehjy8TrhDsmsrDu1gNHctGh1MCkP4JW8YBVaX",
  "key33": "4Vz3feUETdmGXdKkkyjEWqE8uxvMMQHkpn1XCAAhYN5eZTfZiZGrPMfz2zVNPoV1idKbEyypE4hUfBgJMJnZ9qzq",
  "key34": "esUYkpnPVxZgY1Ef7o9K2YRCmSZivbCEax1CeyL3nqxMgw2UeUgK82fPBgZuYMx8M5mVkfWesZWa9R6r8YZhnQC",
  "key35": "3nSJfa8sVaQEAiUpe8fEW4H2GsmzkrzNHwyb46dEtBk6n5niqJUFaeQNG4b6oT8QADjtzR679WXmvZTRQ9VtKWKA",
  "key36": "3j9pMjzhfTLMUDyvrEeDyDgXgqZqfRkD7Bq6HCvgB7yTHKBiYKDimp1w5QHopFGzGe5fVsayxeiBWdQPrKQ6TXGj",
  "key37": "5DWypuva4WzTPxnzNPyYGtsfMRVs33sov4WtWCtBJrXAw4NDz1Qb8zTMEdN3QJVZiwnS4LBW47STtth3nkYfFwzK",
  "key38": "2y7h1K5kDsNFV6ippswjzSHkDitM9m3LbDtebn8jG64jy3vgVjrBkWxdKtzCZhssuM4o1owZ7Uo2xZLaaWF7UHVj",
  "key39": "2NoGWAdWvKEr6nNjfnfBzBGqcvNmdBwm5wFuNm9AKDz9M2r8sAoFVVF3mzEoAxEZ5JJqxQV5o6YqovfmUFXRuHqf",
  "key40": "24W9gwk2BSstJ82FfeJg1vWd7Fm35PaGhd6ibNGuQAM2wt6rHyU5bojsSxMydLLp1nKVWxxR9tmgux6ht4yXYYQv",
  "key41": "3yUPAKDkFqsfaXK7TTLj5gLCKDF7mXPKG7HjHW55PvFyw5NYB1nJ3v8zDnRKVYF2mPBrqN3RmZGZ6gHhJAE36e5Y",
  "key42": "4mGU7e3ULXmhzmngmFtBk7ofnUByTTmekLcyrxKgyRDex7TKsuugCR5kKWTT2XH23MWFZnaeXT6D5wYpVEUXZyjM",
  "key43": "3nHBHu2BZqSmwePgGN7WagdLJ6KJ38iEkyLmP6vNc6UhGZ5EmKneUqS7gEKB2BDtyqTGZw3Y2e6BvokYRh5byREt",
  "key44": "39keHFahq9LGfCrepBYoPBLQeBDP21NKFvj2ApDm4pCYENY1F8wnRkrkgrF4Ng6m1tuYoWNWeHvCwNBMCWcQNwr1"
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
