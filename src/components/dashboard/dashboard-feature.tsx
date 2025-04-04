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
    "65LoCnXW4wSAZoek2cQSMrJSsJMs81G6YEVzh2vLgibf7JzKhGUpyxKdWqHJP37edrRVnAxJ9y3HYr8658G1XeHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSzM3p4qw6KcApPEfNcJq5Wc5vomVW72XKaCwcy5vX3pGAvgAA8Zu6rcQnczTEUVCdBvV24vd8sUp42PjyTxXw8",
  "key1": "4eVjiGuJDZLpDJ3o1GsDYgAFiAvEa9XfYAtEQAm5nJeTGLm9pmT1iDQjjd1NzeWJqWebp8aqitcStn2nyCCy4BJN",
  "key2": "5R2PU9M9Vq3CxMjAMwBWjytKH38zSrXks7UVoARfnM8QPFCWJYeiTUu6d7jm7WoiLWKbJFRbnTPKiFJJaoFrmj8N",
  "key3": "5uDAPBCJdAgLp8LKzUs5QRa5RyauTUtg955A3PUfxfNMDWTsPeA5Z8gjt9jNsoae5CnFytSV6nr527oDFkhrkuag",
  "key4": "5enYHvhcwjvstMtpmNYkp9p8JcvwTrr72jeFG6Bv3kcYcAAViLJPspWgZDiZvKNX5jfDxbwbmpC7BgEPjsWjbxQ5",
  "key5": "2pXqyw8AEf1pX6uaoydFwbjHSSt25KZR7gYYZo4RzRu7BKvnSagkPzUfDwAy7PQ1t5uuv56tGLMugyVDfLZRnhqh",
  "key6": "2rFZRKAb6YWDFZwH4A1ArkYsvjDMJYB2MR2jN3bAUKY5RK6z2ykL76UU4GAEMppaFA4juPTsoi6rfUzZ7SqWNMUT",
  "key7": "3z3TdfVvH9BieoGLk6Nu5cWiEwr2pDrzru8FktrFvzZwrAMDDwDNi5p7MWerevZvZwjFsQUDP7M8Fbswp79xLovu",
  "key8": "3Rp7fknJNVqjreFkdjcEHXdt6JYEuTDtsvCQ2SzZBrwBHsC5cfeHxgnrgjg8eY6WejqycjmUzj2NkjFXpYq8vArC",
  "key9": "4JKD2HAakiwCKCB7T5yULkAvcEJe96dtRNiTU9ed39Bv9cK9i4uKBZrGTodpM8mR9K1jXXWx6fh6uU88T5TwK6V",
  "key10": "2pTTci1vERcWYJATGc3e4zB79F7b2uhXnq1JxGDzsXXKnNWmCHVJKHfXVx1USNqj2VCZLx135X7WjbGyzyDLHCCJ",
  "key11": "2CRA51JPGXNsA5JtUHAf7cwyqnmWTW6NnuQTTqF4Uzqm7T3LtuhFHz2z9wkpkPkkzRtTfzXwCNjtKdvtJmarkXfK",
  "key12": "4dexuimaa8pGbLB6LTbzNFSHwyd9VnG2uXj7e3j3HGV4CokebJr35TdzkpuEkzYXcTdwmmSqGYnyZvf2ZPPWc9eN",
  "key13": "XvLavfcXyjRpqansAzWWoh2wghFL15KEQ1we7HQ1suxzvReLt4XcTykryzGz4V6VhVwctYchBLK8s2JbH7K7jwE",
  "key14": "T4trF5TrLU82YoQVS4bxfHKvrpKjBpozVk13YvpDwNEjnByb6jbywRrsfXky67uiYb8LvjhHi8KdDuHCzC71xBY",
  "key15": "4XwNECVvbCrtsgvBa66GMGnhhwJ2nWyXvBWgT8qwubv7DEvAgNraMM22kHJp9RQFFWQ5UoSBMVPyFWPsrTCQhG28",
  "key16": "5HRN91mFdsKLyScQ7mpKPEwB5iBXDvDS3CJG6MS42RLAo8ZyxgMdM2gyi37RvYYrR6oMZ6CcNKFe1tCtQDBkKuTu",
  "key17": "495M6s7FPDzYgqv6GsRHcyNr7Xfr2QPcwBz2GrrJ8bYmCiRNYpwka6of411L2vjuA2W46YeJbEtgm7SJ2bmMrsSe",
  "key18": "2QiSCnpzZyM9Kgqhx9usvBSz86M83o8KDuJabk1pDY31DTTmcJUieUuXQ5j611Hkjj8BXT7cMaoda6dVYgqsNsXi",
  "key19": "2GXpGe8brxqdCfDpnUz9LrXn66cgCXnXuGAfvvFksGApPvPsny5e6XWH7RtwFmTi3cUek9TqAJPpV5xiFMAaFze4",
  "key20": "2YH8MAkhJBREKShRiph2ApPhDqsSEY7XffRECZSznPXYzX2btSgXZdJFqBAxjWQPcmLMjyhQzUK19PSHpycqzhFJ",
  "key21": "4ojpTQykKVetk386JotqfStppMEmb4b6vFRBHnD9Q33LzDXUt5tBD7NdvxswFp46KbHJeDoFKShg2tH2Lf5w2ydG",
  "key22": "2xcryUUtQV5FcRj9SijhXnjadAaNcFm35Hfnepq3Wm5fBmFcMTqGeCdq4PBFB1QQTj8bNJNCzWPK9CwKhGQeCvwu",
  "key23": "4k4XcmnK4PfZLK3yZsDjEe48CuASZC5h2LLQbYRsHB3XsgPqpyKgz9rjGKTDxusRN7KVSmHo9MGQ3LRtKsj6btSK",
  "key24": "31ehthDdgVnwteDvCxY5iWoTHNJ4ZQttBwJPm6fyWZiYZnEidLkTi8jy3XK1jc9c5EvT1U1jn1T7We8K5Nqd7apT",
  "key25": "42uvHYMrYhwsb4WkqUeHNvP47zdA6C9Mkd5xzNGaF4DN1qvhpDhgJhHy3SsVS2PqgTkfcPv17bnViiky5e7aH3R1",
  "key26": "4a9mTKFVpqNfXH3eAD2TdTVBNpVYjJMrThRWtjXgYLq3pgEHTefDdS9HZ21nD81B1oUacT2q1ajN5JMHvFNxsUwb",
  "key27": "4sPbepuoYu32jKXFURJujAtqkWB4cjiZFZ9jwyf76zS3kwZuV59KpiGKQWugSyivc2NsSxXtjgk6NEDkRHxEXNs3",
  "key28": "XfMo1Mc9hJ11rQv7gstZvQ48MN5B7Bcd7C96WipbqUCmoCp1Kde3cbZCYW6z3X58x7rMSeor9d3P71MFPvM5geK",
  "key29": "3ccchFwHRjuY1CEunhWVjk31rkB7g4aLyDsSfF85Sn6r8tWh5f6ruVft8CqC6eHWW71cH5VufzFmPHqFyibYD1fk",
  "key30": "3Uw2LdT6UTCDDf4prmjM2LpJCVwegDm1aJxBqrHdTgAqsKpdw4jjJ4URhW1gDsNvwgmaAY3skMT5mPC2pWCEbn1H",
  "key31": "VVjV43JiiatXL6574N5GSvPSt1qbF9rRUrf6wqgZzJwQDBXf3HZvpVd1BkJwssMWpRajjNYiMMXzp4KDcVHKQim",
  "key32": "2WjWb3Kx1x9MKPqEsgQQkPtQ2QCpGQhfpyikyNyH1X3xxGUwYUeLunPu1B74nfKQ1Rm3qbSnS5Sw1FtjuyNfHimJ",
  "key33": "fwsZBYkXoFY73uETPpszwsb6NFVWSfN1qpgHRyhmVy9VCiKyaCbCBMm5vXT9faUTJmgwhM6DrGWo1twabjJ8zvt",
  "key34": "2nonnyFt6wGQjq1hSodX5ZeGpQ4E9397qoenkFFAexGgN3h2QiRswEZuo8auEGoQqSaoNiMXWN6bAMBebc77NAip",
  "key35": "2yEFw97w8FdnBJfht8auLu1GBgoNviwBQKGdADPvc4LzvLnMQJAhhgAweTPydWHYmLHQEtH7ovqWQDhFz2pjhQaC",
  "key36": "5FZmWrv9U626sioBPNHvVeVc1CsynpNQvfJtbvdj8Dts2SDVNdeQWMdJvMM3yQ6Ht2VhYnXSkCmbRq96WKHoLEQR",
  "key37": "2s5f5isdqxVQL2etQCPxCvxd481EvTegM8cTcNEaUmAccnzUfhFS5iS6q4S5c1egyNUtt1FCYPvvN2MsovPr1Uiw",
  "key38": "4jmv3fK8HqkKpijbKmib5xwQZXAbQ51FohkUXPbHDTUsPmGwAhb4vqTHwQyUrD8mE84fo6WDfZ5yyBhiWCgfr6nF",
  "key39": "3uG2o52DC6FscHBgDmLyT6Fs2caCpyUhdFTHaWmYrpvKF93USzWV8EUdsAKhvUtdA9mn1NhAe2Z5cxxVEFHiGiQQ",
  "key40": "c4UkZwWjfGFRjRRjcuC4q1iwBCup7qLPnFTh2nGKtgCAZoujQVNqbsYC1qL8KFfNMmU6ShhEPaMoPxPwbb2HGPk"
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
