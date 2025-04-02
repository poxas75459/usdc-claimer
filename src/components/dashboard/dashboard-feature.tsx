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
    "36sbhxcLcqVDcgPyXXsc3uVxdPbiS7r16A8y6B25ooDcE2DLmmLEmp7ZxRJe31EhektdpxEpf7PxWChcTffwEDZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGc9hgpKd36F7BqfNq7UtiYMJSFRYRiLaYtQLLfxxu3dvuccq9ZJpP57egDztHhN3QVwk6XpvxwpVNygr6igbmR",
  "key1": "4n8oXcoYDNCXXZCPtGiuW71e8fi8yXJ1N5RNN2LM6BpijE8hVrhaE46w2jTm5R5az7NLJtGWczmd9nH4EMjGhMU8",
  "key2": "XuGYv1WkLsNxJXUFkGHL3DeZ5i5PTU2Dcyi9cASy7hmDWcPiSCqYBFh1tkoUQrHywj6oiPQCFZAKfNcxAwoeSyE",
  "key3": "5xuBWYWjjMQ4zR9oBuRdpPZJ7mw3KgNvKpjFFVvGGrN8uH7p8o2sXa7KPvR962RPkjVpm2fB9V43VEnvzjgrbP9x",
  "key4": "2CrZGRqaueGWDD7D7NgmTR1gmSQD6zqMZC6d2Br14mBGvGqqpN9PXK4RkeRfV4N6ZaE16a2nErxFT6BuagvTizHA",
  "key5": "45TpENnvawPu3y1Q6qegys6CqK8FFiYqo9Jfyor1bUaQm6ZHA1tJwmboAA8S4qNEKg2KScu8mUyteNixYkRmfvi9",
  "key6": "4Bwv5RdwJQLNrJTfkjg1gYReqpjmBBHyu63WzRdoizCuGisB2urFs8Zayi9TtTvSBRxEwhdQZaWtQ6PqreVtfZ6z",
  "key7": "2RynBC84ftyWwKzYJhcKvZjWLizPmTWmEBKQzyzZ78LbYoyhfzPS6mLFH1XimKBVUSpUd4ioBkUKxCCxjpj6NLfK",
  "key8": "4aNN6AzYXAhRJGtoo5D1TWA7VTVWK3zKVaVPFnpoRsnRx7tidJyiKZjR5ER5kjMnsZTVSwg81UmpCX7jvRUUBYt9",
  "key9": "UsMy79znKHdrGs2WrSSXVcfmX4fcKdBcJnzPFSkU9viv38ntASJn4VJe4brMKCeT7QL4Wz3LzSeVKPPquahzybg",
  "key10": "yWsaSDxa33NyyRXSnG8ixGmTLEvija5wDZxHtrmFdY3PDeMCCW5HCGnRRMXCnu8Sf5qHQ8kohDf7XFeVAiD6b7Q",
  "key11": "4GA886oeji1oViJZ1rwdWMHSF9LxPSu1gL5TM4Hczp4CWcRaSLG28ffMYHiy3WNWSfgBB58CtRN66xExDxxRzN4y",
  "key12": "rW2Nqw2gieG5rL4vPzGDhykgg4MfVqnf6AVux6xub1YAzbJ2E8ojwVQKUBLqqPGsbT7sZMJK5MBEBswWgQipf1u",
  "key13": "367zreGwmcwZ4Ki9SfyHKi65bBTXSc5UVUZhHaPLkYvq1y8C2wocNcd58C21F89kXL7tkpUQzodQPMk5ychouDjy",
  "key14": "2eSqeyZ4TiMbLGqSfNkxS7LYSxRTVGH1CZfiPnTamPnS1hBHxuYPXCjEyd7h9N4dAwJDoHXGoxR3kcwNajmz4Pwp",
  "key15": "62YFwkuc4xqWte2byoM3eXhRAA2ayDn9DsMzdckZkGwDfs72ZL8y15E1Ck3jNJKPbunEzQMPJMpoWkRNxwWiEejT",
  "key16": "2Gzn2UKD5m3wZB7Te6NtwfBsg3x54xLJvpBSD1xgC5dC7ojiUjgTYSTEVa7NSJ3wciCAwc8JPiKduSxPnaPn16Yp",
  "key17": "HdpL75LCCyc3unMqinoRr6Ed5Qx6q67dK11CVMeD2kBYpaAyDRTiaNffhqQtGT85MCXzFEzr8HgTGZXYWAXhGXv",
  "key18": "2ydNjjFgZZ3re5jEeGTzDDCmwF1oqsTcq8ixqg24ShFrj2MCu8wrBnoGkrnqVC4sm18BimK8wncgC7KfXhqd3wKP",
  "key19": "2H1UwwnuA34oQQtwzq8mmPg6vawc38hjS7peToZmvaJjtYeQnGEhyoQbjGj79xPbM57BTxK51YGr1UvRUcWnBsF3",
  "key20": "5PPHQ8nFL3jUeDEEZcZUUDDcKyck2uw1GGfb6EVeNA6RVz81x7D6PG6WXpWxMtLB9QWt83nWivqbmUuLzuaAepmo",
  "key21": "3PyREcb2a6wv7grryJZyRRie6cFH6Y8DcnZJrin4vj9dDq69CVSV5tqLM6PSisGGxHGq44y6oFR8X3NgzjEDvX15",
  "key22": "35ZDi7VKmhRMq7Hi1mcxTrNfvqRPJAcX6ooLp9gh6pdn7k5rBejQwfDVZZQqdYNDDJ6MQTPkA46fwfijUfxvfybT",
  "key23": "4JRidakFasZ81uST5MBsNMh4sBKQ6swbTPcRSvmU7ssGNdCLSvYR3abEMHKbpQXdMCEuJVJw6bJ2HUH4UYwhmf67",
  "key24": "3MXgptAhMS6LvSgDowe7pgqWpRjCGaayVJ7KQCLZ7a3S5BRoQqm9RukmnDGQghVfrdSRFsYxoapyZWkXwT75XQpZ",
  "key25": "4ziDpuNxnFEwARqTq9jCTAnRQ9ZPALr9S8pxGhD3suYWhuD8Z1Ejih2rYWnz2RStVWyDUes8DBG5Y8hG31dvKa8h",
  "key26": "HksHfZCG9ZFJZZ4wtUmFkZjZig2HfsE4UbwKRCTH2mwofp7E8SsL8iBuCBQvnMoLfgYfJwoBfvgFH988uToUStG",
  "key27": "5XYAaZB8wXWMsznGbJL49b8ucLUbQwRUCy7Kt6pGZom4XghYAU1Rjwdg8WFUNf8rQSkoRdmgTWRTq5iacvJQTGzz",
  "key28": "3HvWCvrDZTXzfEB5WM918VRJyTmRZEMSvm1ZJmXhjP2jvE3WGzJfxD5SNaUzWUdi7RbRQGq2nKSp13roWA97Po88",
  "key29": "344emKANBmvA2NXjqkupXNwtNd1TUE2GE9Et2PSgasDFKgFVvP1CRVuo5AenNZM1GgqkNkA5DEtpdgfctuuKqM9Z",
  "key30": "45XJLSy8dBvDbH6u2K5WVNSsCWWU14WTrZMhtiUYVeBEzxdn17H4ZLHKdrxZavP8nLyjouxgqrqyXA7qfngK9iN4",
  "key31": "P39PVg12sqqpmSbGdyafYhUP9sfJVXCwto8tvECNgshgAgM6PpmS3wSVRG29eu2TBkQFZ8sQiXP3MxY6cqUatEE",
  "key32": "5Cp8bFfXR1PUBfnM81zQWrZmaj8NJB5Sfx3sNXsrw5qeuqq9G7ofcfLe6XDA1vB2UhbzAQyGLf6GxQ3FQ7cwTUpd",
  "key33": "3mKN2bZ8DWRiWkwybiPYJEasAYwqduQX7a9qfU8Zm3SUdq8jF284FzqerLphE5ihx3frt2QL6dDk7gY4pSPhtoFT",
  "key34": "4vhyhbsqPfzFBEDsyn3JnSYiPyAMpdu7ujYHprvoEKshFCEbzir2q5frNkj5TSGoCSuoW17EbVEvDGk5wpPB2rST",
  "key35": "2HHQXGs2GXGyoqnLXnAyL6Y3BCc4FMQdXjW9Bsh3aSkNUcTQ71ZdaqhKnUgQDSiFjBZNy88dTr5HGDqnT6Dj39Na",
  "key36": "2VaVw5ddkrMRUUgjeuCJuwnDs6jzHoPtffyHfJYLcmPqfoi29A5YzJbsEML2XqEBU7y8bSEqFQGPPcohP8vTf19Z",
  "key37": "3mUYS1a82tG7P8f73YAxgNuhEifrbxcJQh9AhaeV2ZfuJo7tDaoSvr3UVLwihKokrTTP6YwqCgAcQnpCiJZTyiy5",
  "key38": "4LE5EF7CFJ7SZpWP1sstvftqbvFsScMf6g22pS2dN9yNtrDwNPRpTsT9NseyhN8J5U8kQ7UqeR5GHuguKBm7gGvS",
  "key39": "XRzMeYxAuSQDVphUCo18ob5yPRyZ6RLtfktg617dEghYoeTzxQE3SSJMeuMp3ztDFK1QpDMtY2ekZTRzAZjdi4S",
  "key40": "67UUY1DyBmARPaZhYvjBZvTfUvNBLC1HGpibYgrMsrhK9u398ENEBVQxBLgmQJbzez6hjTRtzf232G2XBF1EYSuk",
  "key41": "cLroN2MnF6e6WstZjDt5fspD1mZMWMxJVSEuzY4vB6c5wLmxw8UHBjeYNgCak3FKr5AnRTZHvpjYf4DuhhRruwR",
  "key42": "WKugqNvb9crXxE5ubCSgLtTeqxp1pcPCWyGUJMpzGFy5drqo4TT87mRJj41WhXnKUYvYQETY7wAQUDV1JXvJMvQ",
  "key43": "5nu3ppmcQdZVMoSdAWCXXrB9eF67FB13wWw28wpbM95nefnMjQYkrfNzwt1Yix6qs2EkqoQzGQfQSdLzjWXaCzGG",
  "key44": "3NwbM6LKRZ3vCRnDU2BP63qjXjjBJ2vACUceKksed2cNCNBL3iv5E4r1oTrbku8S4bxQ2ZyzDsUSugy3Gj2CdEYw",
  "key45": "HhfhajRuRGiVcsU9AdNRL9TH9XyJH5xifK3zRK9VfQhV2fpmMqF1JcHbYkB47E4T2xjZJcxavW2EbP3ZG7NSFdJ",
  "key46": "3ZJ5Tcmj21nKkA82KrBK8hhwBufLhFya9PFwzGWWR7dGoYewMt1q9Vyp2WDtLZ32WVhn8L3Wn7sL3LijG7wRMmsc",
  "key47": "oPqkDPqtPnu4o9QjDK7w5bQijaL3Vupysj4uXW3ebrUmaSsJAVvi6DV8mnChHYC8aP8GmpNj92XUbvaFd6EB9WP",
  "key48": "5Z5obmkLWy1Q2zwuGAaLV4D6XHs7TuhFscZKDhZxDWQWHgoK3LdJQmXngM9VpjKZHhfHNkuws9njykHyv7iqzEPo",
  "key49": "47E3MCr3u2xRMfMdxT7oYK6BCtEEb7ys9SokkSRHwAh5a58Z2hHL55JKDqsxr3hX3dGKNhBb73PKdZzZ1iA9HY92"
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
