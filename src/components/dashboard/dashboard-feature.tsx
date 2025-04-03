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
    "47CgdhtvdoAruEX1HxAcHDFm8ys1bb1TKjWPrLsUfQ7MUH2jDLFNQr4QjE85dGMcKfaeyNibnyUV3Hvti45M7VfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUd7LdYdnrULTS2BkEbs9KgX1fhgTduTiyLtHKqbdNVMPWYe3cbkCgt9hUk2YvHmeBhAzorbf6cbn13Q1JSM8QQ",
  "key1": "uYkn49Z7ZvD4tbrzALQ5aTnYSfCgAmnFtWHxreFyuLqipGd9GFgiJxVxWtdh3GtmAecXWo7V4QbvqBEhhfanY3Y",
  "key2": "5fcMBLAvzWnWTmvxk5sstWew8wytr91PpY9C1xHamp8tEBrRcbEQ7JUZuEbL49jb1j64wWw7w3i54TR3KX2bhw9",
  "key3": "5xSB1TeSwMiTcu8YuypTSMSHnu6hK2BBd86QXEAA6zWo6JRgdnuUirreikH3ybTianVDJ6EEwo4mmdgbTXFVF69U",
  "key4": "3wt4v6t4PBmDoKMyNg3ehpg5Rfr83Nxxf2gv2nuBDqS3HdLjyqoXwQPReCwhSTxoxBN1JGk8L4VNY3bmLtBxdnZq",
  "key5": "3Y7QDj3yVmWyj25qCZpFqi8fvVTQPJcb4zMhzGp1gD4ztRA7CNgppW69Zd9RpyXrKEKjrutvFtfqu6QypeSPz3hW",
  "key6": "4TgpFE963AvpjcvSPRfFYwEdYrT1h9EX6zUUqzX5AHZbrbfCqEhRrwxu2AS4a2w1o2VHSqfD7j5Ty4Gu3t5Kyx2e",
  "key7": "8gCnWfEaP11un4mZhWCfsBef2oy7WzVeRDHMVyH8dnruYZ97D7tbUjSdPvYFejJ8fc9j4Qw3EmwdGPHZ8eZv5hx",
  "key8": "5H16hybeuDGFuHfC4veaYPCke19t9WPE8ZCh1GRMjSC3eMYh7mfezwrvphVJ5eiz1jmeds3kn2GzBYRPcKd5sbBH",
  "key9": "r8P1wE57VSue6m2CCoX8ocyjC6LJYtn4NBQaELYM9AQf9Q3nEc7ZxNjSgkX5yCcZZKUtkJkXVdaLgs3VZNxJ5EH",
  "key10": "3NNZKViyYRtFCSkqDQF3BeizBQ8mFsVMVpDfXpDd9RFnDhZgWZ8jAFLZocZiYWjJPXMzJrW5ur9BYxcRjZY5iUQR",
  "key11": "6529abBXGmP8ZvoqLPbDgr4dniZoSoSEPQqe4np3EHdq5fYQAsj7AnDy87jkgcHm7yRQncCqQptS69cG3ZuAAe6Q",
  "key12": "9riUmQMoTUhiNdnB1XaudCW37ENKkzEpYEEJFnemqLmVaiDsFAjzwLfd7RZCs7dmvzCdkTEJcjFsNJmVDKQHXwb",
  "key13": "5hFMzbj6eiVcDEZU2w2YiTUxRopFEuLyYotyVi7DjDN6zoCVegugm2wSiEspUypcvmN2eoamuQxfreitfyo8QRYY",
  "key14": "54aTXcHnPKFATQpUHvB7S3pTNTLsrUm7DU1QTMJZdn4T2XKUA5EatkhkBK5EuJFwLsPPEMAsByeCtvawCXribn7V",
  "key15": "2m487kh8cSvwyV71q9T8Zqff3UB7Wt5xs3ESyCF2kwySoNppuL6x1VE6mwViwgi5k1qN2ixzvTuHm23En5BwstL7",
  "key16": "2jCuPmxmc9ZZXYYwrWRueDSqyNLJQBzfUFoANruLnJ1zq8rYMD3hkzWunnrD9U1Hor65fDdvPzu45ikScSZLmEaK",
  "key17": "3X9wfDkXmoBhRCm9gVst6qezaZkyvgQsjXDdEZ27voH8N1cw1kM1hC9YNugggrWcBBVgBAbqxxFnnHE59AMLH8UH",
  "key18": "5be8jwhrU5nRZJ48eaDe63sQacQsE2tFM4DDuYSpkvV1t3EoNwqzeUePPUZqTETTpHEwEw8nY2oE1pyuMxbvzceM",
  "key19": "mjLDF8HgFCvmJwdkdExVzLnobXgfPkvhDH9u3m4qLu1LPERW4K74HPfkeBRzEeHhr1KAkMktEesxvvLZMGLf5Kv",
  "key20": "4wNGKX1Zxjo1Kz3pJZcA7eHS2DMzDADiikRUKnZxaWJRmxNHgDj3vFgK5VzNfurTZyfQDnMax3zRsu68SWYQA7ss",
  "key21": "25FxhUB7kBv972Qh2c9Mtw8a9TP3XLKoJBPUKmHZQU71z8df5yzZgXdpCqux9mBQkzycsNToHbCc4qmpPhyo6XTf",
  "key22": "2yXXoFSwoFtR4fHm3x93iz6dvrjb9dnDmUi8LchX8KCzCKuR2cku2Un7uTpa9DJoxtuLA29mrtSEmgV6LGMogsrB",
  "key23": "4f6BnM4LoAyGns4sWDJQc2P6qrQpdXqLQBeumgCEj4jSX9iw5atVKuQd2AW3yiTDJqgY1HLmA9r6jZrVyejGwqz6",
  "key24": "2oT9MncTcq41UR4A3k2PutMXi49VRWW79U7BHJBgQWDfYsJzGnyRFBt1iTv3yQ85biFW6BRjrhYRybXKPxNYmdoy",
  "key25": "5f8uzYiGr3P4hMJunA8WL5wpt6ZFfRHS7H2TLcVVdQqJ7zHpFQFSVmgMsCRhKsrcqQzF4iRU3joYZCJEenToUa2F",
  "key26": "43jcwDBCXj9QeQXx6aBQMBKA1VHMQ2PQ7mmqVpXwVkEjVNwwTwDi6MDAnzKfFUJMkkK3SvXgMR934KM6p6WJc8tT",
  "key27": "4CDWVC5DM9yaMiStLKS2J3roCEQbMPYiHPBABJMfjzh4owU71kBhJ2g1pmnePfQKWVZBimcWvfPSQEFgdPFgvPFG",
  "key28": "LP6mp6QNGa238Z4aTdozaf5Ekphx82hHpQHDmieLuCgZ7upgf8cCGNpsmSPampUjL88WEgPF6tKJ766N7rcjwui",
  "key29": "5yDPvsqwLgPDA7krUBgC69C3RpAmaMgsUXzWZ5MwNE5sknvxufi43be7uMHqxVeFf2fchsFeTztHCwEuxB2rCg9c",
  "key30": "63Z74BzXHHxuL4qh9jJyfi9VgFeVYzaPL9xqVEVF8JMA7Q9rYtdugeECKcGrJdF6WxKQhrytiU14uSwkSCDU1S7Y",
  "key31": "5SyiG2UFP6PEN6P2dpKyz2eoXkrVV5HWMc86WXH7eW4WtWbGZ84eoMCSKia9tAHLttooYc9sfUSg1dC7frzhtLcp",
  "key32": "bhEvZbH3QuPKzXk3mGsf8tuQhawfiu5AsCWd1LAnFkygtGSPhYnminHJVVtU6D8aEqjdTBr9MZa5xMJqKNwXC8e",
  "key33": "XaPGHCVqPsALzNmKR7GEQcQaeRhq29oyHWZCqH531v8JgYX8XpkWTJuESVmSEqzF645HhPyDcH2XdY79Q3xZiXN",
  "key34": "1KoBtAb2gG2Y1hs7tHx88coyeKiiu254mBU8g7g2iTGFoHr63o7nr72uxZ4SHe9xGKd7XDqD2zxcccYwh59ESub",
  "key35": "2KqqGvcorhQEGnfHftL6YdHNPgk4mdABW83iKT3NbrDqs7chHos5RKsoGsz4yv3kjHydqCDWqrg5Y84HLYAFMeuZ"
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
