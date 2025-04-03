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
    "3cFUrCGVWefFEcWnWgH7hdEYs8beLNJEmBwZe2K6cNCTM4kh3LN4aYEx1GVo7AEKn2rMAyHV7Uzz32vGA6TLQSNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "embRhN3ttS2C4ydp5cC2M3APVUjL7iGBY99Y5Uo8gKVHPfUN6Cnfyy52F1sZZMEjAiirMc9W8WiXZCKUecoyRip",
  "key1": "4B9o8DhW132rTeQ2QuXFUhZwLXHmfmrhfHVxhkrWriDhBWNMWEzr2NpMPxA9i9pL5qfNaSmWbzXaT55UQRX65QGG",
  "key2": "5DaymjcsmcZsAbKKcProDLXZhn8XHJCsamyJ5JwFJusJiNz1DFPdGNfEUYjxc18TByzmznjGyEdbVawvrcmbPi2R",
  "key3": "5owXWDMMdkb8gszyyoR3eam8c3iu5j9QeYo3eoZcNWiXYsTtTpBAmNixhZRwM8Wg3GNjAuqpsYrPuzujPaE5Gxur",
  "key4": "52ThbLwtjUM9sGVUFm7urcZkQqaK1HkVt8owtj1MxHu7tiU3doqd41C5bq2irE1FXnLUHkzygNfYnjZXLjLHujnb",
  "key5": "5VJYvCgmgiqL2nh5U987gZpoNiu6HTfw7UguRpMim4Z7n79PmYKjgkxW75yp1ExA5YhMwhVFDKpfXmNznCsQq8pt",
  "key6": "5tsSHwfV5Mta4TZLuwZRzkcKMQZg6iJF1k4jcSsN6zpwddmJfofpSUvHvGVZMWDj3Uhqjae9zuLrdfw4soi2DZWG",
  "key7": "2vMGf91Qnmk2hdspjrrdJu3EUMGB6pcqGL5Y72yUg3dgmSLDxGmjyDjGzuUraot3gossQhPX13TTE8cqBmCyDb5P",
  "key8": "ZFL8HD1yeGLiYqx3vYK7p9U171QTW3Cm9mmsBjwbXbNnGdoSUiAv8rxP1Np4hjWh2ZRFYY1uX1mzteaeHgGxrHd",
  "key9": "5LYppZoDuy8iVEWb6NWJewouPnvCKkoQZAnwCgxbHjJiXPYXNiiZRJU1cbQKVBtEfGHSUKBXZZpo1eG4B4sNtEpt",
  "key10": "2r5FZX4WCAAt4U5TJfAr3hoGzxtnuiKgtMn8a3rf9YBiTcrmUqyg5iBJ2vSuM2K2u6ytcQgJtF4jz4cig5n71buY",
  "key11": "3ifAXZaSTkH2ewzH9Z5Y9XQc6dyBogxWgDMe98b87k7CG8GFDeks3Q67QctNz5a2qwMj3vEFyEtR6yD4m6TdG4vY",
  "key12": "4vNakXU1dYwjVD5pM4TWuCv78ePBPdJSZ9dvUXugCEa6Ee4gv9rVtCbASTNLxkhfmjVgEFAVRbgzfaLRpJZjS4K7",
  "key13": "4PEGPRenU8c36vHH7kowjd784q6kiAv4Zi8VdWm1HMt9CH369ZEHpQcAPqPNvWaJ463U3KRrE1o44FT3KV5Btn9z",
  "key14": "9zznVD6KDStaRVg2EmiAnpW1BhmfbDGGqQkqy9kCr8KYjqCDvfVNpnYKp864XSqWSrYoWEw8YWmcdockgzeoFue",
  "key15": "5mLv7rdGd85wM7Eacck481CnnvouFBQxzxy8HRQTjMi21pGxLVu9F8YaTekbAx1cYxBHb38cB54bBAxrjVPTNdv8",
  "key16": "uvkQghLv6pCusJRrtVbXq7K9UAsS5fg3ZQUv278ugYXF5neE4qdoPVEZkBnVw6QoXF71VUMYhKnMoj3zV2CTmCJ",
  "key17": "4zCnEzfF41Vn5Eas66zB6tNWUYWEZN9Q4YPvUyEv7MGZVdm2KDxES26H78ueMRVPeTykvp2BFUqQ8HEL6UoN56i5",
  "key18": "2mTTtpWT4dJzCkRpSWQRHPW5axLc7zsDhWCsM1CKbGqX7ejYWxFEC2ejSNZ5cVSzfojRJr2tm9bxFeWFFvY6b2FK",
  "key19": "2R5sUuSDQr4cu7rU8QMcn5otQBG99P5tp1xKnS6UxDsoLsjba8vZTbnZSNK9Z2F2Psi5PZRkAMF74Up9G5ViF2f7",
  "key20": "5CJ9ok3hhR4xamrvtmgMhaSMVicyHFgDY1GBxUxRD4Tdt5d8KXnu9zp7fgxvpsHhKd3riSaaNmQ8GTR9TRgDGogL",
  "key21": "3UHsddd1Sf6pQqWgMe8tscMqYq99pj5wBZmrc9sbVMVSqSvQ7pNJx47rw3EzW4bKuDYaYGT2eQqi4Q4HuiGn5knp",
  "key22": "3ugiUCJ66UTJ6tKoMrf2ToWbeN3fQdmMufv3XRcQr2nS9ABo9d9LwVZYooN1Rr8qzYBugRnjEs71pok5caccbbkf",
  "key23": "2Cz9PcDXHR4ZUTsyLpGmWvaJxgyvEZdBV4BhvjKBThJHVKySskcLbattgPnsoDxtC2WNMcpEQexvXyEVmsXZGe3",
  "key24": "6599KUHkxwPSfX7URFKSsKW9Lr468KfbzHVx6U1jE8E43e4mEq2bTy1t8PhFAMbWh3UcV737sPgqgtxtcF3rBufM",
  "key25": "4ycMmzmZ9mi6Jqv79g2F7coUGFiac93VAMzN9TV6fdFXdWVsiYjHCNgxkBS1sGw7CSdqJfPNdt3DqNKeCXpWcaoX",
  "key26": "4pnnccp6T1KVowSogKd2DrDXgSDXpXs4DVNvKaBcN74TcGw2BAuHjJHU8M4rQ4aBdKqTQcBuwjbbbEi3aWE4pV8j",
  "key27": "44T4pgs2qRei4PVdvJ9Ss4SWLwXorKgwMyVJjcQLVx5JNYef5MgZwdQvp22mCvjyQmVQkbffLGtyGSMTXjGiroPB",
  "key28": "2KF4bo2hDC9qzCJ7XBXYnzWWoBdiyCWo2SWB9KHrdW8AP9QL9h4yaktSbRHYgv3Eybs7v3j3bAxtUddhyUwWDYXg",
  "key29": "3xU1fPNc9XFXFinac4s6XG7zUcUA142e8wfAYuVMqzpS74jTbAVenuxL4iZkK3XYrq3szZowKzdxdngiwLnn8bad",
  "key30": "2HMzABuRESoVcbDMNxvK4jEbh7KRJbqCavqz6wEknCzPS5G6QmwgB9eLrUicA939LZEi6cN7nT7J8cZ9B5ekspU4",
  "key31": "4jwFtgA16uBFRSkJjBbNKsdD4nc5mzBGH5g6c2t4kQ77jn59wZEZUpt6fuDJE69FmQeKYGD7x9KYW8Tt3sNiwajn",
  "key32": "5Lb4QebJcH27RBJXHBSPLBA5XE7K5c2SCZAMt5sPrZXoEFYLWBS5se4YcyJMgSVaDcF2RYWxavwKzYtsBNAJcbE2",
  "key33": "2MVNrnEHbAHarV6mumRWVY37jEhUUgQNTZBQswEEc5T4AZyYukEXPvpNvELqv9WDKsyJmxtVP7p7gSdmwrddyUMF",
  "key34": "2BkaDCaZfdsTidom5WHm7S8TgddEhJQmc6J685VMqkRSDwEgBZT1Mhwz977wR3DHmAHwQwupEc2tCTxgB7GnxNZb",
  "key35": "CoM67L3uwiA2yvgGvujDXCFjxHW3osVW41qb5UakUVFq9YYu4YZm5USYzq8dSKuLC9fAFyGficLkZkioUqrodDU",
  "key36": "4Vjdm38gH9zX2tB2UnssGLbqP68w5eUpFmkYNzeAnaHQvNWwMWJ5UQm8JXF12BXqfM8cWwVyBU4Kh69QZk1cGC1L",
  "key37": "WWks5yuLcdAyvjdvZruoTbkoxoH5iqWDfWUvs5HUNQrvUb4tJ6cC8hQJADr6bdZqvMRBYF33yPWHX8xAMgNXFXV"
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
