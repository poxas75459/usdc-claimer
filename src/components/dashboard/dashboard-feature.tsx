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
    "3PmABhf2q11uyg4cDMnew433vEgFdNL6aGM1e7dfuJT2bLp6gSJFbmsbGe6csRMdCJN8XWZGcLoXVugW2rmJDq1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qG9U9rJAMCTdrAccmdxmyinFstkP4ErxUJQtowAeWN3ThJ1XMVAX2Q4mpeS3SbmVmrfsMDWrELCe4tCP8kDasA",
  "key1": "2Y23ZcwRzHBCYBCi58eiS8wEkSuZLPNeNW1uAp9rpu6HKzX62pAMXTSdhKScVkrL8Mm3peCKEthgbn8BXHzeqZsB",
  "key2": "4UA2kJyEhLwHTcZNSa9w3QcWcL7dUnAvTyXP3Wx3gJHdyvBA44aRgakbaGcX7KZbYg5tKaSMcnXvDFxMN3sd2LWS",
  "key3": "29k7bryLNVF9DfsLqFCsQuyicrxWc7TT2mRDoNECoKxrVqM33nd9TV17yGsA3SJgpQ6eWzQScDdWmSX3yy7D6LNQ",
  "key4": "3kzYKwiSUtGz1c5B6PCPZkEDAh8nvaoKGcuZWPSRNKR858dC9yff3E4NfFcysZN8t59mdBQkBEra6jVep3Yc9sV8",
  "key5": "3RsxmAx3mk8yYnoU76zSpx72zt3Kb4KFYxcNyS3QvykG4uswcb4U1LrefgMJhSgGQh2XXMQozyh8N7KZK53uqZKT",
  "key6": "n6rtAEsX55ZXCUsDhj72L6WMLo1mBFJRJr1KGprLihMjL2xLyYwAYqpdE3H1328wC1g1WrijyeHuancCAcYrxBN",
  "key7": "28CgTPm5j5HpLcBUXGNxTzC5DcZts7KmB9JdcDx8Ug6kjjQbUnRRDpm1u5NcVfmMaFc7ocCS5c8ju69v6VF3qe7i",
  "key8": "5gLe5zgaxCUggNUJe5RVUZpUcApmMrLvti8JrC4s7mYTeA3imaJn7zzRi8nU9e88Ypg9BoYKszivCNmxypjao5tw",
  "key9": "27CY9SVnD2aPXwQbTcSJjCC97gVfezju2qgQVinE4mkg7wW93voaTUzpm8yKEoguyWjL7DH76SY8qNFEgxwj8bQQ",
  "key10": "3cEF8nus39STFnoBnrFjoQCjvV35CA8eDs8m8iy9GfiDadHPrBVD1X1bjEaiFsQugzZ2hQVgEvJyLszu5r1zZk5k",
  "key11": "2TNj8ve9EjFo44MJxGusyNzxMguGKc8w26iWCUVz8wdyPgeVdZqiq9WxfxWYmZ2UsV8Q5ekT7hpii4Vtn35CQiKi",
  "key12": "KXp4cMdrPySwYqroZhb8fWYHr45p6j8g1nGjVL6zDqWR8FXbdVbaZ7ZQu1PKcrjBgiEDAgyGvR922tTGctgCseX",
  "key13": "595hm2Dnz5qAG8bMzFLQMn2GCAsVvb5XKtoiTBFVjkZWsH1iaUeymR9cpxUbuJKGKcqqzbiULtPkAGAauTrj3Ahq",
  "key14": "2MNL2tKMSUm4Zf66MTeZXvma2kAuW6fLFt7FsMu2dQDMoaogSkDRhvp14XCyFqokGXQQ94qBdANLk3RaAT9iukxK",
  "key15": "2g5wShuK2UcZTKRxtsUkxFEzVUQefRBZoDNS5pHbZD1AkXUBZLxbtBvsczzqBG28k8B55vYgdfVQCHyx7dJ49Xb9",
  "key16": "25ijUYmYQB3PNJhPrt64ycgro28FAyyjtng3khB1qr9g3i5CPcGNwTj9dFvz3pqKdNbbZhQ3G9a1C3NyTUKdwExi",
  "key17": "5iBG8qawUdv67mPvQk51xfhoNHNduBLbrEri8ry4M6gWovYBU7YWTA5EqCQJACqUB4RJiJJ7WrXtbuMdD6jxi1Mp",
  "key18": "nET7wZoPGn2A89TuRdUvyf8g5sseLVZrWmQ7N6teVbfiiom9WW1Hc9pYeG9RJxbbLLj3YvcmU9ZBo7GbiGRqND9",
  "key19": "2c74giHnETwreKN71QTpsYnEMQp1sPFAD3K3MMbLWS5EaqGKTX6EPQJ7XJbaqm46RXkME8gEWiYRzfXAkB7H8mJQ",
  "key20": "4Ey9Z2xRAA7SmbCDZNat4KuArmW1JRQ6PvU6RwNnNYJ7DBxUBWRLZfLgepDQDkmn2YbfzoJVmLJUNHLhTZpG91AN",
  "key21": "47mRciJgQ4kFKxw7NtRreoWm77oT6EZQUAZPXPStUB6nKXrb4uv4BoJrsBgkD6DPYjCBtwdGrdRRPjZWdc1DV3Xq",
  "key22": "53Q7ZB2sEwp471jTbG5XaBzx5idKxXaJrzFzZZks3tJfgwzENbEzLoVicXhGo7Y7jtyqzs6W1mBV8t37sNhAzHK7",
  "key23": "4LSznwLTvNoyKNdq9DgCBJzGCj34X1aE1mLLTU5j6rDDRFLpeoj36jKKg7h418RkwkUGuHzwgwVarT8rZeSq4e91",
  "key24": "2XLcDX8KCWR8VHxZt4Sqybx7m6aTouYJmCJWfkQr43VwxaYLs3qChJuDA33dQhNZY8KnLyafLDi98BcqHN6vxv6Q",
  "key25": "2KzXExXLwKeEx3xEUPh776MrAR4MydNRuN5krFGZiMwdjrsuCoDRm9ZX9npqnhpfp66oubCEHEs5cPbLNuJTSHbm",
  "key26": "5TGneJuFZrywNJjxNnwZjVNXLvAqYJDfxcfg2oUQSJroTeFGo2hzBReAYJc8edgL9TWRPnSZ9BVYk6BcJuBKbCo3",
  "key27": "2int3KxuBLRoazk3fjkhsbsWanZ7Wxs1ro9XjkzCWZMa6Z1zckXMFG5LQzCfidwWbwXn52AW3xrSeif38DMfeXRT",
  "key28": "ZEYDXc2kX3y6vHT19W39hvotSHML3uDvjocNq9wZ9UyeZvyNjGcF4yeTxwuRBF7qF4orPENyKQJPX2T1g4mqu6X",
  "key29": "2FathNLvH7AtkVDdq9vaBfH7gfHTgxwMJxrwCAYEVX4nXx8S1BZESm2yhm84K7XNtyx7G1zXxTAVWB8zS9DNKhvV",
  "key30": "2Thhip1cqk5Jr17Hn4BJUqvX8hZNPA5Qu12npDsMyDDZq81EQifHonDzEUAgb8ZUuctJjHngbRkRi5f45B3sdvK",
  "key31": "51QSrPYPQGjnBhbneCQaHbc56rsvkZYYpx5D3jQFEsSmTJSZNHnwPyFFvCUFKicQNbWixAWmZN2NqDJS6F4nEGvU",
  "key32": "8Mkp3nE3XcTJfjuNPtsA1EaQ5EaBnDVMbLnqdYHnjT3h16PYMHobVaGTx43RS5aJJWEdWX4TK2PpTNvHdTbFjJq",
  "key33": "4tzV6u5R7ztSFQwytHVfsd8jC4ZUrU3sokFBz6SyRDLk9JQMX1FUe37Sapo9hfKszcB45mF3zvqr7qNxdyY1SVuP",
  "key34": "6136zsgbn3WrzFYXZJRc4D2PXsLy1Ffu2M58sLvmjR4NoZDGYEP3e13arxqDoNytXLsoucdqnCCKFYH655NfpABt",
  "key35": "42Q9gz63HncoJdsbmxA56EX5Efr8vviSJZsYaKMBBgsiG7kJYW6gZkbawNeZ9CMkh7BXfLG9iQEjJ8s4BkvvFjzD",
  "key36": "5XC5d6FSM4te8ZvsctvgkvhyamTgAyRtfxqFo9HnusJrEREvNBjLbxCE82heMVdea7onXnEuPDhwdfqUhR76sPy2",
  "key37": "2dnMwWXqWrG3gASA7GPLRG72JRRXsMjng3Cb88hS96cS6frEwNR15vpkRJWaBVHFixdHdyYrV9EWVqbxmvxmNNkN",
  "key38": "4eSFrNt8LEi3DrPBf8edugFTfSSERpmY8SwRn6eYXWLcSn61sofenqdBiCJL7iPyLbhxNhTZ1GbS4fMRswX7xqGs",
  "key39": "4UVTFcYnbGh8Nw1QG9uVijfmmTKqwpXcgpum5JnATZhQBncrTvbGHJgXfpdKgCynFQf5YYiRNpWkGGDHV3FLpBzc",
  "key40": "5oJSfUiVbWdJoZosgi6WtZsHaENsJFS3eQnNPNwLAV7Ajo5GqxaaoZp7pFXrcCdYe1pe3nqYXrMjBNmNmnsFyQdQ",
  "key41": "6ABAXsECvJCNua78NCaxyY7XpLHHLugGt9b3jk61HSttHnrGFqoznC2EVPg8uFTbwzafF8F8j2ELGnQAmVfr5eC",
  "key42": "3nSMcsmoLz9nnm2BShZ7Ex1UJefPA8YFgDjyq7CvpWHojQLXC6hLb6NUgmZK49qToTdtxVT5vvjpYaPsEsAwG7qw",
  "key43": "5Xqx7t54Q5Hbiw67GYf6bpMCHbzYqWztJUBGuXKvsxtS8FdbMzyxe4uSr7RdHY3DLH7X3yqV9HDk6mbCDhQURok3",
  "key44": "2DjQNvFKgZmHeZ8YUtyHpbevwLAYJwtKx4XM8fP4JXYFJ4uSF4HgRdbxb89cgnFTTMAteSrSuAphN8FMCme6s5B3",
  "key45": "8cp7Yuj4td9XgSet1VMCq1RKMCmfmKtFw8TMBjHQLfewAf51XWR9wfj8ZDgstCPj5T8qZZwF59EBH6p1WAjyfg2",
  "key46": "u79gzztnRqGWCARqJC4iAw3XynLhFF33fbRMJfPbDKLLqEataZbin8v2tg6ZYUcjTf2z6i1CFKKc8oQgPZMane2",
  "key47": "vHRaBm7ULvCpSof5eGfKH7YNkkAbYY258vHGhW8abUW1jpq27ZzKhyNWGnimHZCZJrcHgjZYuEHer9ppH5aPCEm",
  "key48": "6KCYR8UWQVzLjjZKUqzjSoS7azTw5CjHN8BVBWEf8Mqi6Rx5oCW5SnKpdkk3t3XUELv6UVYiG9qJA4LEL2AVmHa"
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
