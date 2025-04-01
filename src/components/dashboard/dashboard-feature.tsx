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
    "4MgkQ8erCZjssPcZhjHzhkxJtX4ZyN2XNi3GvAWzHNvsHa9c9bbmH3vnkBdof55LVf2DWdJSRkFvmxu1QyUyrjPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iDQQuXbBhKUKj4VjgufjntL8sGwz8VtcZvbSZAeTYsJndpNz2h5KXq651QxhRSVmPfJidHeSQQ5KHNfqhfBJC5H",
  "key1": "3XR4vYq1ESMtGNyw5sFnAzqcyAkeuPj37hNXz523F9aP8Kqxt4XGSMLdg82iLmi9KkvQz9VpTJTkcJ1nrQZ4iNcB",
  "key2": "28qLHxaBfAzjiGssrU1X3AUgYxHje4LAGGqHGtBJX2mLN7Jtu3mXd4EKPgrM3PG2YnpmtkVz2SBEmKrcmqEGzcmX",
  "key3": "4vDZji6UiDuFcZsMQaarPnCnNyUcSWjZZgBC5qMHLw16Nvw3gz3aqgQbagm15Ps88c7ATmoHKv8ewZaCkVngcw9u",
  "key4": "2edLKyTbQocDo29riyBhbyyxbh2GhDMLPejsVdXmN3ixeWeq5AqtxKz91QpdQtRMuv6zN9v2hZzUsHP4JaoSYqSg",
  "key5": "3rhJ4gAEVWzWsyv4ZDpw9KVQi8hH7VeeAeJvB6Mi8Hooyvdmg7j9acPs9KGHAXkbxN72RhxmWuKzkErANT4wBEm6",
  "key6": "5N4QaEjNcxgzGQXpERExen9wSFcWMV1f5z2FVTcptG9kpLgCJnQa5DyNzwXewJTybL9Q93YcHQQFPB1wDBoWpHHK",
  "key7": "42ZvAb9Z9Eb4gxUF9a5GGue7qJ9xx47fLaEqNTBM6NiGPaGEZqM98tYQwm5KaFLP4w5qL4L2qbsbCF8DjiKoBHEe",
  "key8": "25Kn1E9roZjzXRzcyuP514DbC6nqPPZVsBgjP77yaJJQ245z3r9zLkH8wZpVuVbs1Gi7W8Zkj6JTqxwUHU3xLszc",
  "key9": "3z3FtDUKoc8ppszs7Cn6j5rFGRavhjDYNAT5kKgq74TQJmCKEVbjtB1ERNC7LHCTQ45Aejw2kHeoh2koUhtvbKjs",
  "key10": "62f8SiVjtgvv6HNusMYStQsNE6QyzngS9q8AqUDvaJMTgq4iPvLf6gj6bq4S7b9tzo8ee5F6329dS9DVbueXh6rs",
  "key11": "4pZ1cigx7tYcaZBjZJqV9gG4bHyiEYbamKcDsJvSm5iKDerf3UAFty91HadxNpeQfF66h5ZS8fWkiZSJMk6dYwRY",
  "key12": "3PRMYWWPM2WRKuGr87ducBtdUPpyXfRJQ1hUQtCyLH1Ajz72LHfSS6pDmnni55haz5FgGtjvfC9kjFz1XqAaypMA",
  "key13": "49vCe7QEbeNrbTRMrRhdTkJmfxbuHEhmU3NeiiL28PmteU2RYP63oUMAJfzuuHkxfTGqyQVeiuvJ1dpP38MNqKXg",
  "key14": "3hviXcMR7MzkoYrsmGFG2vV3vp8HARwPx7pzNnjdJ9C477uvDt9mS2pXeyWLsWskxCUKEzNbxrZGyn25L6ooAti8",
  "key15": "3KydXh4TJJzY5Nbat5xTwik2AxCdeEWPbWz6dkEJyDzkizVKVQgQopmf6ezPUc1z6hg2VJLgpTwSrJZ5wDNGMaaX",
  "key16": "EC94GAVuK96n7PsXVczhgDcfcw5nL3kdZbmWxuoKiv7bTLj5unSMNZ8Ha3VkmkzccVfBheZ4rQHvVXJonL2Zppi",
  "key17": "5sTUDrkK64qkcfeWCN28NHLapqw3nbSJzbmueLNW2AboEHKR7XM4vtmKJXB4tjnQG8bs27UymrrraYX9kFRYX96L",
  "key18": "3H8sTwNwgPdMffw3CQaT4mGzw7pbLQpBwaqbNX5MkwB4szuCTyPGqJCZ6QL5Q7aEkJohyXLk5BZtF1mfDtstpGoN",
  "key19": "4MhZfkCtqRvcvauzDpUsdBiPqwqEehsTmeiPyrnsTgvyfkt8RQ6pnm6jz2tqED7G2Y9upAUgKuzZAfNtb86hKj8m",
  "key20": "2UZVisByXi3e8eZGHjtLxhCZZZ5yzaBYJThgHnFNXA3Qz4Poo7134BznN1K1pJPMcZjnpLENwdx2xNSxFTTB6E28",
  "key21": "4ApHgzmoNwbxptKG22zNQdPe9YByEmDvK4rpTyHbG6tez2R9xXe7cQwrY3Ud1wrYGkK1vi5TjhM4hVi5YAubMsUz",
  "key22": "4jgoSEU7TpWL9tEUnvNFkvtkp8tditjve2hhReCAkReJWmYHetb3NUQVBQkT941DreHnjij4dNCAchsHjvZ7CUQu",
  "key23": "3BG7vsV9SPK6jp2jUCgHYb4HDpXnNHGk68PzJhKxyDsbudmihzxX2tg5kQEYbwW7a5bebubYjGyQEe1TP76BYzZ6",
  "key24": "28aStLuNco61jtpmt9a3iXS6KvAquENVaAAAxEoytZdmqWoqe7etY8SDNGWjxMMMAPyyMf8VGwdJeV8T4WsaqFVc",
  "key25": "4nhd6GKJu2Rqgj1aqxNb2s3sVGGrefunuqycgV7ZpdZqxybSuaGfrmUhxFLcmtmUAVou69vXYvpf2XL7kKuD8oJD",
  "key26": "4m3yXWBqrsBYK9Ui45pvvTtkJ514xC5zt7pQrgxdo6Z7kKEG55qTtiyyHh6KbeVd7EUyiXfsA2wkR5rNwiUCMTpp",
  "key27": "3hShxL5WhEMgEZ6P2P4xh2v499XjXbUrC4DuYsVCm5rDFMivyk8cjGgnkUFQ7eQBLEDBeNe2BTJS7kpg9Ttu6nk8",
  "key28": "2dkeg24sU3ur5GY24cS8sPnPwksLvhaYFkteBBbZyaLf7NRMx86jc8xwJp3y7pQTqQ1MGZgXyrmrMu4xry8ataoK",
  "key29": "2Y2iNN2J7JPdmb1ifeQUuxFfpaq4q2aqPJ858e6tU2KSa4G3jNMLHX34hUUwhE3WV6FDDz1tJBiQSyKaZuW9iH5t",
  "key30": "21MfxoAUPACsxLPYdqWMHQ2HmaovExRTCa98CF1pGv2KU1ZVVZSYsiwd7RcbkgLkMGkLDq5AdASgAuu7JxhLQ6gK",
  "key31": "2Wgndq9tDikED2KjfRZyHL54RKwxdyoKqPembvMoMEBNkQi5f1dXYTjqetLvnNsXawzHuyGa3jn9vsmm2XSjPRx8",
  "key32": "3ZtE6fwzJ423qvs6h3r8siDXQL7UJmo8jgZMy7vcX7Pzf2NFrthptyP7pPBXKTRxMmRxt1TCJeuC7FsSaUw4bboM",
  "key33": "2Q2FjagLvKUrkGhV9ipN5TtDnqgMNY8pQgw9vXf5EvyipXPfkEU8oSjkWkuRMQ3ZhEWsouWzj99BsLXf83mK2GJY",
  "key34": "2mMRrWX5H7tyXL1CCrRXerejpYVESoqo9uSUhtrcX9Mbns6PQ9eyj1UygCfVYj2NanYAfCt2Qnbxqon5qVyVnie3",
  "key35": "ZiGCyJ1FY5wyXvwSBcA4TbqN9EVDnZXA1py1yuKfjssSCzy65Atg9ZFopBxHuDJ5dprZZtdjwBZ86rZTgbcyoNK",
  "key36": "4rHK1re5EAnHRQQytJLQ8gxcFGVxEG1DSvnF6cUqtwELfKcb7sKzx37ppS7fEBAGMUm7KkWjZH8hcLmkAjyJKzdg",
  "key37": "4ZY1H4BfFFcJomM5GVpKmv59CLfEsjAzDbXeBE7Y98nHvNyYy8eraQRiRyGFva26rPUyY1MyWut4MoSaXsmBEZhA",
  "key38": "65pVshk1H7nmZMTQT9XkCsvnb4VofBEpFtJq2QPLppkecPLRFeE9DTi4atE8DVZkZfUM4gzVyor7e9Kq7B3jA2Cd"
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
