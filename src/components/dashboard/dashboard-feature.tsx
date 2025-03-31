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
    "2gU57iFQ8W7Y4V3bScVWFxLMd3mtwpiyzH5y3iA7RKqTpN97LZdb1un7SnJGMGceRkNeM5xJAj1aXpqjMHQNXcPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JkhJ6wVNzffBrcAS5cCuUgxMv1ML63jcSLvBk9LkveMCW9PnDMqu4XC3VNJjZbfK16a33yHYXyQ9WTrPC1wMiud",
  "key1": "65JoZLfcGZ9Af6R5uHCZNLQfJeSNTP9GFMDhdHuuAjTMm6KV7VgLSGaEQDcHwmz7hJFuGiK3DZfFDQbAfdzYZfdN",
  "key2": "54NtuM6vde9TmHqKQvgqMKqdSa4GnGJnG2Eek5VP1FHLvGiYjFCkew6NxGh6TgJ1g1hfnSBKfX7PvbJ7CQgtNKnD",
  "key3": "kUtv3T4hmuvyvLFy2xsSveeW8kksYnpmvFniTxTLZYJKW3Wc6sKarqnZqZBpgxsBJ6BeXr1PCvmM4WgdCFhFejt",
  "key4": "42hqnLWMnddVt1Xmwga91Q7brZgc5gZKYrFs4fUyw8jwZiT4CAro7iVN6ZQN9vAdz9biAqxeBzRVb9dkvua7MPqa",
  "key5": "5rZiZdABXeXQ5uKFBhz4mXtABU8HKxu898LKRSdSLUW5qdjdbGdUrsYsLj4wC344Qga5BxemMiX9wPXv6HzRrxe",
  "key6": "4FdpRK9jqoedcBv8e3owXbWXCq6bNCTrwdFnZzDRLP6PpTo1eDG7iabbu4co1foee7FRgPPPxw77goWQWQyhwK9Q",
  "key7": "6PTFEJgT2SCiSVg7hsK4zpu8HNkKAbkW2RCaNRvvCswjojvqq4hHdyzAx18Vc3Lg8xNcy9wWm2XqrVc2Qo1VWyE",
  "key8": "4S6s2HB94b6KZtZdXUr138ibgEgyoTfBrHto2SbhRgvBzHMP9gomsvsjFoXhaFLpueR3VFDozTfrombKxuuo68Na",
  "key9": "2gmRK678F2Ey3zqZoMHWX3HiavupTb1QvNsXJjFtXeJZucA2LTSbgYxVC87UnM6cdmXmugGWYhJM7LjoFLCR5fAA",
  "key10": "p9SdLk1DAnXSwni8P19eTrpTd7dmLjfucbtJ3zTqWpPEUrmzdprsxeK218KfN8VEDvp2h1FR4xsYLCAHoRrCR5S",
  "key11": "2yH9zVbjpLGnk9mU43XYxX9oW6LGL6bLtJd85Mt99x9Bi5jrsQqw3wTqULiriNNHE7kP88suuwok31RNn5Qw4jRv",
  "key12": "4kjjemkDHnaCJPhRaoBymNuUdvYaMefXQdsDBGWLs4R7qMKtor2BQcKzpiHKFmhEZLiEY8sqoxR97xzhg3GHujHT",
  "key13": "5dGnmcmnbVnEbHKvU82JndBP2pdMqVRCvLNM8JxdHbGUYc7B2FiNf5n7bSUjo4VvEbSAgm26Lyzzjz7XmTbjjcPy",
  "key14": "Edb4xt9M1xWNre5W7emdtdQBEaKLdtFKGbvuW7cL2uM5acyXbJUQTM3GYSzvoPMmGCPm778yQk2opFj2geqVkii",
  "key15": "25cuYVXTpCscDm61ahX5rSh81isJ3sY4e7M8jfpVP8dPFVb8wqgmq2MjQJuYYStko7b9hzNS9rLjKb5uM3z3F6xW",
  "key16": "65VioXeLYUBRTZU1LahCTKaV2ny4GhiaoYLkn7XabdrwQ3eKBjcxJ7LSyvP7P9GExEr9eZdtBYEo5fEkd3E1eS1h",
  "key17": "56b9RgZQGfKSQiswJPQeUfwPnemXStvua3Y7cUuC37WLQACDKW46zyQMqdT4EzVn1bEfDnFTNdzGmV8KpdoFcsK8",
  "key18": "4JrMvMRUCr6vdx1GkGbJa2fH6YzJ6pw5yuVv6m8XUQw3tMumNU44ai8pyK6aNT3mYUAE3dNGA1bf61aK1r5jTFbm",
  "key19": "5HvEXPUwjDAv9E6A2wRT3d7uxm6PzrRRDHHgxasaTw8obSz1bCBYZEMzt2MmX1Z6XHQxrAeUXz8VVDpgY6XLDmRB",
  "key20": "46mDVkioYDn87xUwPGyYvZXdQMnmm5Qb9x21zgBe2sjaf1cxGc3Zm1v3eF1waqhAiTzf6JEdXchNZj6gVBfmZATs",
  "key21": "51GHQ7JFyKXfx2de5mSNjNJxSvCJLALA4NTsHWN5dYNDjTsjH4h8moECU5Bs4d322tGqQUn65x2pd2hRjyeQHjv",
  "key22": "29grpmMbNpPHpntsqucQPsbiiBK6pJR4mVKPUEN6jwTkEeAAuYPwRz5sQaXkEhFpVDfM4LTckL9Y2KAVcgRXBQRr",
  "key23": "4aPotKgLejkv34GWS9TegU9MeRYA1T91n98g3xVaAJzcLSkTb5Gu4kcAxsQ66Qa1X11iVA7Z5taKTqTnkcUxYmZF",
  "key24": "hMAgMjyEbion2JMPgMgEQ1rfQk4oqqcLZbv5JpbwM591j9o3L6X2er1mR83XFAkfGZmVimwCVfK2XvFj2cW9Wsm",
  "key25": "4prhnKbVVmJC5RRvdoEwq6TPhi3jszSN7qRy415XKu79aqoduARogAYRn7CDEvqfHM6ZHgmKKvyKA4ys8EqvtKc8",
  "key26": "2chAWFSPZRJgDcapndWhPRGSyxkobkC2hURpEZJzhmFFsh7WidUbERPvmK6nRovSz6QiToaMJ92nqvGxr6omAeKu",
  "key27": "2s4pqL9uuecCFQGppYjq4tY4uQP9Bb7uq5PYAmP5JZPdbaahaXeYEi9kNEqnupU9krKyM2SpK6CvKh2j4o9813Zw",
  "key28": "5uUMF5vgdqDL9HvJC1YheXdQWzKBjjxzS1a3tp6JFq1dXXWD9LjY1Lr5zRxppoxiJNWD6NB51uUVy4soM5jkaHkD",
  "key29": "8ifA5AFz5xBiENMq1H24fphaEghz2aYoK2No2YZC5riwSsy1Z1gG4saondE1HwHA5XH2yW259ybRxvgoAcuv2UW",
  "key30": "5S35n1R9mwQkC3bjesjuRjXk9g9PNtEDpTJe77bFtmiE6RPufMMbgMLuTpU2FmBYFo8sFzTcDrpNYdAGfnTWrCme"
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
