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
    "V6D3nWqZnqnFA79YEJBvSA1wPCLXG11nYQUXif7b41spbDtYKyMWK6f96zR5wzmrx6HSChXjLjCKr5gNa1tKDcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCrnQfQrJ4He3rNDaVYUoNhGYyHk9bLLhkJSMF2gmZ4eejYmk1cS9ihZpvPDNnWe3ug1tsow4X3Tb3y4LDZz7ft",
  "key1": "35aTwYWBx9A9KRAd9VzRqyFTUsyVw1NiEnNgF79PR6ZQj5mXkhxFuuRzjP821ixmJhHGtNRUMVq5Q7eqCEjfZiJh",
  "key2": "41RSE6QGjhPZBZRhNcooo9buwr6YxRzXL9VwD7axnBmcCMRQwow7Ya3jzd6w8xEravr4WJWP8fqcA5mSrFGxP1pL",
  "key3": "32CdNaerbUCwxjLsAPawPH9royFTdfNgrm471getTiU6pugrySzau3oABeS89ZZtBvLTW6uHzhkwn5ANkkFXTuPe",
  "key4": "3oYyC4StBi682DsVagSTKdGQrf1eLWTAUvxc15Kz5vhS8vNfkdw6rv7uknwjcp2HkrENG4NzBgCPCXyETCuQNfBH",
  "key5": "37mzHPbHUuKKFiDShspMnRzYXfXjFjWJYxpj8JMJEWjims49nVNhPVjztbSUTmaoiwvwtZcNffY9KWStv6oepYX5",
  "key6": "5VLRJDLAj8pkeGBN8FpFzYnXChbf99TD5AhYHxaqBsGcJMCdh2fVpZRfxy2vUQY646wyvpzcH4jioPuYAHmTt9Yy",
  "key7": "67GhJuvKL9ZZdnVRT7eTSkFihfWN65YBaTw9ya8VG1isKMuFCBmd5Vp9oYsbCxTW8zoArYExLG9qzq4yEDyXQ6Zn",
  "key8": "27HZ75d8LamuNovz7CXCsSgqNB9USrH6kh4LSFj3gMEBS51WUZce8VfByJpiRPZJUgbcN3KbCz6fQF9EvfrwK1ML",
  "key9": "5M3spqXmb8hksdjHHntkRQtATkvQCvED3FEiBQZEF2i7n2FCCU5DhPVGadUfwEbtNUKDKfikwK4J3PuYy4oUhe95",
  "key10": "45v784cGVeMj4WwtebwaPjSjXejSC52pWmAgAT1MxB6twpo8Size8LbFsEqbXBMn9TkVgJN27kZJMsjy94G1znda",
  "key11": "4PMVa5n4mABZEAkdJ7gtyhM1xHqFJDsd3kUHmjzXPXYDYqvZsTNSAQ25EocHFi6TcjK3jrLzZppFUauw3LWtXNV8",
  "key12": "47GfAvTvEoRQ755JCiqxhB8jyksJv11JjgHG4Bn7J6asAG1Fkr6qNEZy3gka1LGtu5uwyXqyNJM3MT9MujDJGysG",
  "key13": "LwpmaSCP2TSUL8rfnCJgDY3CzWA1Ly3nBBWRENm8LZCgQHLS5RXQ83uKVdpWdfyqATbRZ7EXRav76C4iZ5AA2Lr",
  "key14": "3tBm9DjShrxioFSNLiMsgY6sCkXmNWwqhDPCF6dgQFjMBiimx7qm1LKZu5e5LMeMbEFgc3VN8NTPQDjnmCTzfrrw",
  "key15": "2jMgTJxBPjwN8d7TnneCdRwEskqmitX9KHZJ35Th6tyRkDW63Xy6PuCSbL1dBWy2JAb61i11wNgTS5MAH1Sv5Ztk",
  "key16": "41mWyUyPrJQUtxsJpRrGhBQjWE6xJMqJp5DMTnmiNJKZ2AKNYHhq8Na9rAsYRfg3CEWR8CptKEHwAKJinwGodMRn",
  "key17": "2Vfqt7R71ykWsoeWaZouv2vnzrWaKrb38fWWrpzEXA9Km7G6bgnLupNsj9qbQnu8ik7ZsuVGLD8qDXdMxFcviRWa",
  "key18": "3GUkik7DevYMmfC3BdKbLQrBtGs7W271R3Qosfa7xYkJdgxUFjqN1pj3YDHA65u18PTUnTGTXPvq1GK5d1M8A2Je",
  "key19": "5j72Y45dvfAc9SYx5SmRmRE7nMMEAaUjrEe56AveYEGyBpJPEVMHAQiTYy6A5ztQRP9bXy71u8FSMQosydoPyYNE",
  "key20": "3SsnzvTsvRuJBoaR7MjtnW3143bDWKSf6jdCgMa3JHkfyi6h1cCq4gvCTQVdFJQ1AmeC2W5KuZFXDe19EQiPS51z",
  "key21": "2DpuiLk9y6r9MAHqsFJrumAeLQfPXZ8oHjsNLRMqVKWtmD1Aj41BmprCgJfbvm4BZXa5hmv456re4bLnCBctjjYb",
  "key22": "HRnW6Xs82EAZ7soVfz2M91ExCQVjJtbVgmTnVyHkM1J31PGcqaYFUeLZ2hRUCbip8GpayCf2Q1TyeAn3zfTqtyt",
  "key23": "3616MrvVZCXeav7mi2dSCxYsvxwS16zb1gmRymSh8irnbLx5mHK3xb36tpYLtPeYYt1mMuAs9LhaEWkGsTyDaoug",
  "key24": "4Msu9x9MZx6nPsK7QBUbCVCc59ZEBDbvcUzQohjBAQuhCQVkHXxJfd8Rz4ZJx4LFn4s2k6paQEL21iQtHFwagtqP",
  "key25": "GRWwzAPNzk7ppVHfZ4caL6i8PXhCXrJwActKAt7p4btRyatsk3bLWTXF2XLYhTvsfQgU6gfar723Nmn3JqPjXCn",
  "key26": "2hG8e2ZWBKArwcBPFHcQ7e6h9pH1xfK7fwu2Sj5Mzgyva5SmNdCZt6vuyqMfYtwf38cSKbrTJJ3mFoQX8jHRNowy",
  "key27": "3LxSwXDG42jka5rYfrNqxNwRTteZYcs3qictWLMDzh3miFrhdoQzA8jnnyaSpNLE3eQt1jiihhahR6aBVbgAUYEf",
  "key28": "2vyd8UMXG3twQwPoqgYAJ8kreVnDNg3j32ALJqNG1ChXqvKADVyX16GLZMpzg3ABc9bZP487uLxqT9pzrSQzjzz9",
  "key29": "4FRvseJMTRytGc2dA2hAwAqzpfe6mwpxXkmYECnQM5jPRWVYiC5JJrimaKBz5jT6nhnF431n9aV9ykz9etvchboc",
  "key30": "3P8MyNHqFosLMrJtMcBhaGWH6vx67SwZRh9qQXM6qkKTva7x1ufY7PtyyGEiAo7wTUrRAtxuS8booWrJu3bzFeNn",
  "key31": "Jc2xGMBb1Q8y21FnxxXnW1xWSLah8Hzos9oVe4XwNsyNdU4fcWVShTQaamEw7pHq3QGtejXAsgFwryPrs1SK6YR",
  "key32": "d1KXtv4exLU7XXx4JcmWNdcMtgF5oH3esw2Sbb8uDL9AMPRxvCxHV1kM9p5MpfLQGGahZkxTEwLJt4UeJmPz4qt",
  "key33": "2FmXrSBzfAQyXiaC1hyu7bHceTjKZrSyTRD48KZqbuLPgZjFyiwRPqvmxtJRkjRViAZqxZwaLo6J5uaHBGKmzpce",
  "key34": "31bsCPyqkc1pBDYTD6JxACkqWSdFvLiiF2i7ThmtyomWTws71jA8Bga9PB3vSo2LMHyZjyX72tF5pjef52yV5vGM",
  "key35": "5F1TLXzh9dMP6ShSF9LDXjSLEi6eDdS5h7wDYLwvshd2wmzexjhueRM42kvJDBLB6MQnC81oNp9xqiEorMj2TsDQ",
  "key36": "3Bm5UdYj7mBmLTdxq5SpQmaEMBpnpkyUKsR1kZPD47X6DYWCwTYwq2Mab6MfEzZZgLwgFY1AdcQBBBYX1qcvymrC",
  "key37": "5NusjrfbkbsRYCP24NuPeFbkt3Mg2XASutd7mThjq4w5UBCRvxt27C5Hd8AHyDr96iEggqenBELU7LVjj8XkRL3M",
  "key38": "u5coQ1GEz392wzMJrdLk6VDdEGADhxudtTnXLNBKTpszrjDP9GmtG8hf3xYfqeyRNo47bNiQP6ZFSipH8ZjyuGS",
  "key39": "2ge5GjaEYEGqJZ9FhLvpjTgcUXak8jkjtx8jNBXKbSXeNYT8bM53NtFUzf2yCPJG9jwt8zzppo3pw4oQ9tzPE48J",
  "key40": "2xVZmwbGe5rSPJNwH9vPm1hE1YeLvGLLTWagt5xuaq7Jy5NoCNjcSDzY8x49zLrZvDgaYCqpivLT6ga9SkHnLGLe",
  "key41": "24YVBmgzRxqjAiEhTjbgPxKg4gqPdZuZpgw6FFGNwM642X5bF7NFA4ogFEPFpjmCTBBm3ux2i4Z4LcrMt4ALGxJu"
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
