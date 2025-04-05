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
    "5Ub6R5v9N3hwXC6htwTnwUMiBamj3jfp5DQvR5oo2s5MArdCgwZ1JjacHuKWUTWUkk4cQrfkd99LeENwWBs8UafU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDuAgNcyEts1FrfLR8n6UE4FsR8cxCGL1vz4Jadvu8auHSFM93rM2Nj3hp57SAc9ksPoEpvLmFcr7trwtkjPGKo",
  "key1": "yDiGYKH5MfU8W1FqzXv9xc59HCieWhy4at6G1Bd3PULHHUizsgfvGe5z1NKuHwBpA387dNiES8wd3hprbUN85YL",
  "key2": "3kc3452zw1hcXWNmJ9VK4t14YDjDqwueLpBb3RnvKTp9v7tteND3KTPqS26afDxvVefQDjvtHo4TPyvvd9PXCaAe",
  "key3": "45UPhLAYSB2htA52nyYbnNwwA99AtuycBgW3Coj3Tyy25tKx6jcDYFf7CL5QQ7ZFyDHS3PghUAGk5GjxfsNRUUYw",
  "key4": "YutC3tcEyNHULjX3TwrDNXyMKUggoQAxZuwprLZAWsgdPAcLR4NCSiExpp2p31PSJUMKcs435jef83PmZehh7Rr",
  "key5": "2GsNcT3YkERwcbQHqmmFjvsZZoj1MQ7KhHc3CG3cufjoYgRWaFV9WvTUGpQwWyqHmH7pnkSXmVVwZbmLvuNHTTbc",
  "key6": "3LwoggraqitrVPjeWmrxs7AtGMgPezbWrgXPxBMqBuXtwJkmwNLGts4xRndGDt74nHTnCALVgonkEFbWUvc7jPgn",
  "key7": "3v4KfTTr4hVKo6bTN6sgNubLgUW97m3ZyTU2j9sCcWEX7YVa5goGtKcujjQ7C6D8cR1JXBoDqywWaEdjQPyTJBp5",
  "key8": "3mmyeHRDMwf6P4nPxeSfebhfJ1B8BGm5hT2n9DPRrbrakd9NyjWdbg829uyXAyrYSyR3XerfYsMDCh4pKVVfUvVU",
  "key9": "3kgQ8tdKGgm3AtXf44kcisK4nKYLFStNYgcSwG1WDjvLnBbjcNfk7ytpnXGrnPStP2DNQTfaktx5byEqFqdGwiAi",
  "key10": "2iitEe6fJrkTQLswTrwFCKKYchhH28jJuvAjvyAGMCJSuey5pXrYYjH4nZL216RzcU8u7VmnjK84jzC7fLHxZcWY",
  "key11": "AXeWGUo2QxSqgT8N8i82yYVLvbD9ccpozL7y2kb6nTWYjLuYqAXk1jVjCPc6teMA7uQKVp7uikJugCNaguQC2La",
  "key12": "9wAuXefvvzbeL5QMPi6qRjJ66qcKoVBEcd3cdYCtJAtnXvh7iUq5y7aQfyjN4i4PGXoKjLJLPkjWnboqNpnCXbs",
  "key13": "5bpZrACUe2T7HU9sYKBQDnnn7okNFWj9tvS9C2njAaXHdh8DdUzayPBmvfia6Lv7sN5D8ohuNPKo1qosVWpv1iWd",
  "key14": "52aL7RKKEzuokqHCXawo5iCs89y8pfFsnNiFYmroAZE1LNVq4pf85hhNLpnx8Mk1jrVRV93DQ55isP8Xx3j3AVpT",
  "key15": "49Qcnuqatbe8rMasypXSzqxeprBkSUkQ8epuM8nVsFicpEx8a8M7dDUVzVt7bzhJKaBiFtEMzohUQZWxP8RcakCX",
  "key16": "3W1Tgwgr4CZuXr1JuW7PzQCfRPB4zPZ6c8P6hSu9gfeiZTCntTS7T7QVVSeGB7pg37wWWeDEpenz9jhJRzfzbVAo",
  "key17": "3d9gD3XueSFQYLHzKQ3t8BJ4KseJvEaMEjrXpuGm4ymzKaxPvw2VkCrhVQhsMEB1AT4rVaoAhgnjQVFgJQigWG15",
  "key18": "46CPkiZsvxLXwZYrpxEZ7MiAq7v21D9oWCPCxLaPBWXLsd3xYTVBz5e1yQ8FuqabtkJhXQ9p8sFH12p4efqA3HFC",
  "key19": "5sAvp9kp8Hn9FQWquQ8macbn6fAZ5kfqtuZ1iffZfSCKBPKRPjdRHRnjTbDevdy6f8UpjtVsmLXENXi8fEdUPdJD",
  "key20": "24fJwzZhjeANhCUXZcd9igu9poejLkE1M4ne2Ekx6GEVWakmtrVUvxDkoFKdXa9qNNjrQk7axpZbbmkHyww6YFM1",
  "key21": "5nior5szozAZhdPcH6f98Z5TxANcJY27DFxekqi2fnVFmAtRRx5Km7snX77pSPBpXWLPo7MojrEnHTqiutzLfcGN",
  "key22": "4YttEPEPyGYzNHA7qCRFtxU3z37rWMr92MrvoBJ9SW1xhiQMk9jn7PHtfVM9y43jmDgoDHcsQEJvaX3hW1cKdv4K",
  "key23": "3CQWcpQ5jy2YYrYXwC3CJp2s8Eoui3rVE22xGEmsGZ2gS8nDcoqthQPNJM8L5v5a7rKFTSMcrHmHBbC199JvcEqR",
  "key24": "65YYJA6X3Jj6TjDyeGGXwWZk9MQQq3RqJy9HyZMustrsVy2nD9kQhbyAWckqw4HcKWzUk12PCrYR7erwrwsecotB",
  "key25": "2MD7at1fJokSjabB8w7ZS4KCUicWG1gLSC1JxLredqbQSjH1MJkWhU7eqctesadcQtvVcX72CsSJKHzk96sigMEj",
  "key26": "5CHHUAfoRFyrJMhwzhVd6Fq9SkmAFMJiCueyu2JCsM8zFWQBhYX1FmcvzjqyNgkBtgqmm42z3KQHQoJR47rMqdVq",
  "key27": "aCgZknYGaeijw9t9BjAoEwYQpZ1dCPryK5Crhp8EjVQ84LyBkN6JmejSknoqT38XiyWn8tPSMHwBLNqoq4G3Dy6",
  "key28": "2sAQYBuKLjxVxxpGVT6K18XtUZm7fKCrFSQce3wusPECSSCCDHyU7wpcnkp6XgnJqkxaM5bSoe5zvVTwimXJue3J",
  "key29": "wTyjSV34TLqRn81h5UE76PBUXQLspobZAEiKvbrJEHWXzhyDUkLQRXF4Be5knhjLfSMrKe6Zi5E4URGQgZmWBf2",
  "key30": "39QWr545SSfnwhpLzScSyTUwtqLzrcVJqm63rhEVRjyaggw2Ry6gRPnSCGzmEymwnnYYV9GQJGP4PoNsyLDjyngX",
  "key31": "LzNneasWH844rLdN86WBYJeq9SraysnBJ1ZW7TETCnLkzCy9J1y7KphsKZWKEjs9nK7R7ZXWTXJ3K8GPzrGAEDG",
  "key32": "2e2TaNrG9N56qn5RppavohBwUh87JJ5TX8td6X13uJkVRddW46uXq8C11u1g6kmo2JMxJg5XUnd3PbrTZAyWyvE",
  "key33": "54tCccmEMU9f3qUofT6gEvw6E2hpsWZQwfJ2jUjeKt9LvDcTNamjqd42Cag75LYzHCrTBuWRNDofdV9rpVkgjBoo",
  "key34": "HEhyWxstYUasucLrdLqAysuZfFmkavnz5knJK1NNjfA3EiRznKT13sA3zGJy9mNpDkzRv8oDp8MaHS95NW89Mjz",
  "key35": "45JoMXPJQ2uXsvwLDRXHwSjhMKE8NpU5xdrTJXDJ8A871ovehfLGi9TLpiUXDrFiqY1fSLaEXcpsSDQsnfJ7gUY6",
  "key36": "5kuaJWXXRehB3zwobSto8Y5k4nMHiacrdgwDWr6c6MXBeQTGBhFmGnoPbe9RyZBUREKfzaNFy2vJUftv94mTYwDs",
  "key37": "5dRRdtJiCFg2Q84gmZC943a7P2US4zZBR9oTHHAHsBt5kxJZFn3nMxDdbKKHGXnZp4DeTG5MXqMWfFKb1qGZf3gY",
  "key38": "4YZzNJxhDT7xNbtegC6Gs5AaYL8BfQzGFeQkLDpuXC1xFPJKh6ky7GCgCjWCGH1dRdgrxk2fL9c1Nwh1Ni56jCE4",
  "key39": "3Xd2Y7J6XGb8KEn1W9BGubf5WUxGCas7oF82TUtPyrEYTn3r22TEw8DgoVgsZ1C9B69aU8uqc1rRsCyh4812C9Th",
  "key40": "31nCQYQSagLveDG1xQtGJK5eLnBDBRhnFWt9FbngGbyCmAD6rp81gKv7Btw8k6FNzLhCRGFQbNS4w2FJaYes814P",
  "key41": "U3CQbsjfRvZBDAtpHX1cFxNZSHZXiwZUnKrWqVz55t5n4TryQhBwXk1ePBRSS4avVJneqgzMXWyWku5CTa5s5Yr",
  "key42": "3La2NT1egMrsvBqPuEoKYk6xsEPrs5FXJZsu1rNinifS7Vh7zbtH7UFWvybTWd3U6x3yPpdek2nq7yVQPsThi2Ag",
  "key43": "2mZWgHfX26mhbgssbiyVTVJWP3ZByji1VWE8LLFcGj51NnQBJWtuvwbym8UuyBBFoDq5hC8mPVRExmuQVtJSszXG",
  "key44": "2Roikw8WPfmEDkUnzg1At5LqUPBbpJ432WEAredEJ54AYJ5djVXtadFWCCMFzVkAPThygNHCB1uPiqpoMDpHJcdY",
  "key45": "3GaEf3qsEvhrP74jqYJ88hh21aSswXw9EHti8XGFj6UX3hK8My9msGE8XNVxrdc941WQjWoomKfddoWr9SGQGVVo",
  "key46": "3vFS1GwyX91fEqCGaw6k78dRkjBxFAt9cTEphhiDQVaebnh9jUufW832HasqTtqS4874JWWzP7EJR5iuSoTfdueH",
  "key47": "2Faz7jz2n7BZNGVXHwjP36KLjfkN6ZYwMjfbZfw1SDCth9N8ZPJ6R5imsYTPznpZUPVKRgTE63jEUtJBto8anB3W"
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
