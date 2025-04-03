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
    "2PRNuPjzKu1MijCNzyDmgjUwDW6AoXdGiHk58bUkHVVhjuZZzstGPw6ajLvvr1FCWQYu7pKFMVHorfdvZ6VVbJJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GsanmY8wJmLYDL4wFuvX8E9n1v6pUqhuQHcrAg8uLV3GvR4sQc5huisjcwEvnU8KF71Bko8xjrXELAZnPfs92JL",
  "key1": "3L7svMtW91thh1APB1ip2oUqNkjW5Nu5nWnPpKiF82WsySJGkLqCG2ULLRDDZzy3LTBjvtubpjhnd2G6V37oFu6s",
  "key2": "3kmWxy6TnjQXcqtrS237bsgNXwpMpmEzkaxyPK7wBFS9K8nY1mcbnJ4DNFi3peQyhKvw9NYVKdPTEjDAUuLTht8r",
  "key3": "4MevTX9JNedS5eQKWLAB1AUkRB7f4xabAU4Uwb1YndPEg1gkhcXeJrUu3GqDnHERXSUer31DK2Q6sccVnQar5W66",
  "key4": "62GgkUm6fQykvTEgw2vv2AXj6m94aH3i1jSxe9oqDR1hCYs5ppe7svNRx7HF7RAGEq2VMufTR4XKgCDTtCPXfbWJ",
  "key5": "guy52Bf2gTqgVc2gN3y3QWRZuorayuWEbdoP3WVZPBUf17cyw62z8ZjDhwz2K1aqZHRSK2srikQDpbeS6CvdnxS",
  "key6": "4S7DZWJb4PcaKFc9dayy6EhgePGyPjFfhjjoj7W5RCvj4PJSZY9aBPfCnQ6uuWrZqVRpmu5nYvBXL935pqGEcKc1",
  "key7": "1QT7AjMsfkiAv6brixqyqcGKcR16MxYuRw2GpmtvkSJD9xpdJepHwVRuajPvPEFtVTuVtah7694GfeGSPNksaHa",
  "key8": "2GvTkBrmBipseM8kgwo84JrirrgTPtbRQtyaLpiqt4QiGcUtkqezmxtFhDv2c6xV8K2QkXX2ycusFNPXB6P9RP9g",
  "key9": "4dMZEpDiWKS1MnkBXka9Cj9QhE9e89mZugoNy9BgCgF1iS8eVXZpnoTfdTh6DQ8TRYaCJS5cz53efrwQAUcwbtNm",
  "key10": "4DWVFtjyUnj6wqUYy7Pjtv8pAsDEcUHcxcM3caq1y2VL4fGwB3VtXrMRQwYjPLvudPWa1BMAVEsxFZ5H7VZZGmEb",
  "key11": "3f3aR9LRHPUuWJ6avTWxDSrB3u2e8VtB1ytoJ1FPRtmvPA8uDQ1RrZCEdLrWncVkKpDCQtvp8GtYLGMGWXg5Jwgx",
  "key12": "3XgiBTBAuNS24yBbGGkmRYPdJKnRKLXHdfUqHc497seSgR8eMoo6DUzh5gJSdEXpv6JnWkUcdCN4VrLAdCukZ5xB",
  "key13": "2ZpT5Te4Ww6yAFCFYkqhoYqpswJ6TqrBLZpp4eFpQgv6bgqX1EfTxGPFJQynv5qrPbemcbZ7i5XJ4G2omZCJ3mv1",
  "key14": "5cHE19fjEdGvt4txmDiB2fmU3rFmFvfrSB73LBBZkmBYEF6dj7d1D9GW6vVRRomqKD8hXRNd5piHRoW3DmRLWP9t",
  "key15": "3yHdJmecj5okD1fqXcVWoUdMZRyfqjoaqkR9tn7nfgkV2XQH5Cb8h2vErx6B5NnDvahk6RcU9h3kf7DtsZjU2BRB",
  "key16": "5M7EtNX738YPCLBuUftGSDJyCNC3hefVFxuEqhG1Lz2wWBiz9U2jR3Ur5mnUh8zNH2K6hPGdSZ8R3551cUzb3PL5",
  "key17": "5x72RmzCtczMrYgnGHbwNKtgNLxVKJRQHFZmsNgac6tUPJTuinUyNfw5rT8vQVmZFaXJWhqnAo4UH6FPt3KENorx",
  "key18": "67QpXs2BKgWSCaCHwdD5XvYBye4s6emXAEdMtg4ACLZgK9HWz9AazFW3tq5TDDY7Q1yfLhB5FVXsu3Nun2ArVuVx",
  "key19": "EpUoedy3j6TDHvUs6Ltgub1z5QFgMnGC6gef4Aw8MGc8MQf99ZWhgmE8dBJfqi1u1uj8UPGizTUSPPMNXVpwB4P",
  "key20": "3DU8MmSSrtN6jzURAQDmYudy9nqFMrnN1ZYyu38RgQGz9VwCVhcB2zPGxnn2YJVFt9HvVj8565kYMyDJEUNb6EPc",
  "key21": "4vKgDxKYqkBSF9CvUyccz1U462HzwL2DN8vMUTAqTGkqfE8ujtVift9nvuR8ANYyzSCUK2M26hymEZMsdbeLaHBj",
  "key22": "24QDxAPoeMPkxbXwkrTosst6pUZAdHRTHtfKk4Kk8cweSZfwrsVkaBuy9JranD28RKq1CQZUa9xgu89JM3mkuUba",
  "key23": "3muUw7zFWJF1qnWmNnHsxfNufbLpZ3qmXMKZqwa63NxmrMCgd59ikgnFpyAgkRQ4HzyJsKXemGiqHMWGzgWKB3yM",
  "key24": "3gY5416Nk14WMW476d2GeuuDGPxwLAMZw1AqNcmP14tbJxNCXh5iipfgR9uubrJ26tQ6mj3cLE5rsoASLzGC8FL6",
  "key25": "5kvc3NQYCwWjgBkYEnmZE5KbRqQdcVDmuPBV5XxYmcpUiRcqnX8TSCtgk2Qqtfj3iBsNqomiEk3gS7B5ekKGwm2R",
  "key26": "4YmAPPK1u1mnpBF45uTSua1N4gfjvrz7Pcv8hfFX9fvxjvPqCN4t613eLwCCMYVjEASYtLDVNRPaSniVt2235SXC",
  "key27": "3fuWDLQiRLocEjBoceuoYGwRxYpVYsrWjyhjeBTc7PJbjtQAKe7sEYzNmJg8CQ9pqXXURhjBbJjL4VALWv3jm1NY",
  "key28": "4Maa2Sqb1JAsKZLqtj4CZDrrmX8BsnWivFXiUfkFAeHtcQapqamSJa1CocahGcAanTjMRj9AvxcvQ65aXRmBYJTD",
  "key29": "2SQf19TAw4AYExpNZ3ySALZQy1zLj2CQ1LCA45orM8f41iPLVATNgHd8sKDexxtYSfwF43c1LN39ooiWB15PnZQv",
  "key30": "5wSq6WhXZVW8QQS9nSciwXx3nP3D7Ng2cyYhtPoDoE1Cb8MUaCpkTFepVZAGP2UonoMZQw78hJMWKojxRob2HY1o",
  "key31": "2YTsRhD4efJQmU48fkGGJygS1SqjdWmp48pNMqQ72dtnwYXt4vbFx3vocYaEWzNsugZyuGkPZaxWQNyXgaNkHkfw",
  "key32": "5BhJxjETSBT8jM4NvmiyS2Vq1vczLDFvmiWyxxE5pz9VpPWqRbCUzcmLawD9v3VCxb3AQJTu88PJ9km2itcQQwto",
  "key33": "491J48hdeDHLWh4HgVmUBWqFScgqAyqpeWzHXVhauUCaWzMhiwN2hPhRbUH3ykpRiKH3cgaNLi6KoAnqxgLYLEWz",
  "key34": "3BbLiPe4Zo53g78Vy9kwT1dd4ZCvSWDTcQzzi58bqY2H2E8YLUCYh8a3j9mr4PTECA8p8RdNUXTqYLAQVhdsfeR",
  "key35": "3YzCY9CMRkBy5HHp4bDa6mg4Teb3fRXYkEU2PsG966cpT1GcbUuY73tWEUcX7eRH2x1W5zwKrbasLWa9QrRwV2YZ",
  "key36": "5WNmbtDvPnEgdcep4jvHLNSpVmTsrna9ZdmDJdHDrBKtVYKzaPBhqyARf1yuPEZr3YXCVxJTAng1ost2xD2Riiyp",
  "key37": "3gFhS4GwUyPX3hdJ8rEzvXa6z3XwTe3hjGYmn5LJyPrJDhBLVju4Xb1vsWy5jtWPKAQGthu9f6GGdjm4G3BEiRBf",
  "key38": "2SshrcNNYDtNqecEQG1Zym1aGJZwVb7HMAXMaEoGr2FJghhSzGLCCR7kVhN31a2DW6gWoNijpskvYfqpYmJ27pnw"
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
