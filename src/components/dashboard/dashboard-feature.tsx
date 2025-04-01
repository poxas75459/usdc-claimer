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
    "3VPut6AMoJBpjo4rnKAjFqF8aGFsnffgWuhtSCSjz5MoAagzYq2WUynzNG3WTR3VUpLNdYHfi9yTg4z1PQUmyp8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TsKsxQcFFPeSKwd7GCymqi9DhCiKKtrtswBPNt5i4dHohSGyoiDh4TeouvEu83ZVgZ8vYgZkG462XDP8ZiskLtq",
  "key1": "4d32Z9R6F7JijZc4he7FfzmmeeSWeaBY1wCRhnUpiXiGpKbtehgKFDn7BhNb4WAAqvYmbQZPpfhN7fRXjLFUMiNu",
  "key2": "5axFZVZsYCYc9wtRAyUgMb5Rsy6oxBt9NpHX84bzbUvKvun9kHoJ3qYN6GoFzTGjhxyqS929ipNJp6xNQAkoUFkA",
  "key3": "reH9LP6NFri5F5AqeNPKTYt3KKtL6c2ekTr8gky6paNAN27LpGcH7eFTcSyD2WBWpG6yPUQTnBtE7WZrcVnR5VD",
  "key4": "3TMeBWQENtgnW1zms7SYhnaFL48FCaijdpo1dywm6v2fZikN6gdsT9Ut2d4WQDAQqy2oS44WWNnpxSVbUdzDhSwA",
  "key5": "NTRLkQMPtHwFbcACSUUYXoZQAhZKHkkb2sosykA6j2yv2UfRiMYwsJT2S3hEsx6QqdHpcRAgCAp4F9schmkjok4",
  "key6": "2NGjUrsdbgTYViPEMoCsMxxSUDTvzMc9Gp7gQ2wxtNTApR5fTw3haFPWrLfTvwDqxe854aj8CS2bDxHSWcvR4MUW",
  "key7": "4CyAn7aoW4k5pbbq8JMBAeBhcsJWi3heHjm2XJVoimynSPQfrXrzZ5u8jcfC4ruAmcwRBRgwTxgCBxYP5R2Trm91",
  "key8": "5fsdQQdQwL1TD7NFRsDZvphDA7usNingE2C4rimnNnv8z2zZHWChVCusjzzD1cqTLiXbgKrBJebrB5uDzehVTuy5",
  "key9": "ZMdsJivvc5jzVEMAQ6NTQ41TYdiHgXu5TswNUdMQQKShZeSCjSaquMjKxwLzgPW9SCnd4TzpPrTp3wJYv1Guddu",
  "key10": "5xLgtCFbTbTvFhXTA7mwskFRqoTesLGhswzvEm5DDKqrZPvdNPZxmzy9fNmza9cyoekMXEZjTaxCDytphsAvPbh4",
  "key11": "4wnH6xZ74bTzxDmUNF2WwW3vGWQa8wcsovNiMXqvUqX9WyHsEon8FVmoHBJ1ZsCux4Bv5Nj8CJrF4443NCa99Zpb",
  "key12": "5iJqsCKXrpmSjbyVvqr8zedZxsmCWmpvjvdYJYMM7wmPC4E79G6jPHeiGhxJqWyPzvErzNt7gJsN7AbrDxSUrj18",
  "key13": "5JrKVi3dGXGmSbYpBspT8muLpFNQJnG79XQ999a3ZwqWfGTZG3PoUNUUKWZLoNX2Pd6WA9fzPEzuyAzV6D39DEjV",
  "key14": "5opJkyiwSF8M2zQu2netmFwCoADSoE5ZspSRSU5oE46ow1CC6NPgjom3M4EVPzH1YHuF7HxA7nbiBZj6Dr6vhvSs",
  "key15": "4PT9xPj4WnGusP7iZeqhHvTDgY4EMMGaAh8biUuPEgpr5BrWAykYu9cYYWH8abch1XKBYPxZRu36BXqrRcxpDY65",
  "key16": "2hYcethmWvaMRWxk7H94K7kLMHTc7NvCzNPqXHHCk4Sw3zPxVeXng2fKjb72KRF9MNmWyS2zthAMDr42K2syWPXZ",
  "key17": "fbfEJU5RPDSdXRSiCR1zKQ2V5AFeTjeMmXMNJbgw23egLSFe2Wr7EnS1J3uvBx2nVDfnVEXrpfWpseubxLFkMLM",
  "key18": "4rxtGS4XEF2qb2gKGw3KzbvEsNmaTr2y6KjZXw73y365KGmtUC3ndZ7EongiAhNs7CpnSHNgf7mhY4EvsJg6cJTe",
  "key19": "2LM7tCSBX6JV5TizhLnzF3CVYU5pVB1boj1dba32bkoJz8Jfyo1Ao9z7LM6qfk6Mja1xFqi83H72a7kwNtZhZT1M",
  "key20": "2V5pgJ8xdCqkYnZe3XNnVyvJkdFtMtdfLcRzMpqcCx5J6vGKmi5Er8jGdbZtdiPESuJ3dhx3KXm57Mdxds9p1r8b",
  "key21": "3Eue8D8Lpm2nkVYADyehychxr43KhcaJj4WdEUxNULPu2EfDAp9yRgRnzuc9GiX3FF92psf8yT3WBSSyrYHJT5G8",
  "key22": "5TnyrzfXZHrPjnY8TCyPBRC8T4h9bWjKRxBrqkkdDTJQfgWbc7h4G6JU77XvbakXcX7NbuCPpxvkAQ8PXCQbyXrM",
  "key23": "49wnxBh95wZmt6jvdB29ab7cAn7vXpNL1JUsvBFtTx2FPU9sjnjHtfg3iiYgN6CpJeAjGLaYRW8xxq1V1JQpEipc",
  "key24": "yVpFHveb25KqFY6onJdrEkCj2zGKH9pXYnPJ2kroBXTNiCp4PQeosdb8Fw5p3TM8z1kfLq16gWaBcyrmbcJLvzu",
  "key25": "pn9tBzEzDs2SWBVfJ9wqVnkrYhMCe7CYMydSRXoW1ckMzaT4pNGbVWzq4Wrww7PdJHCvwqWJuzf77NMr2Npzc2h",
  "key26": "3odjrKhWxPgMB1B4sYsTZ5ai4fTnbtUtNnQ5RW59eG3pKy1j5Xx3fL3tX8aFmHjr471yybQGk3ZLFEwKN3Ng25tH",
  "key27": "22biZNaTFKi9wTjxt8EGQJtMahNythYcfF2atqnZUi8PjVKQZvkdxiRoA9vTevfHSPdtY2UjQnuzQ9mfuNkpbXJn",
  "key28": "5V7KFtzXXDxgELwVbzoHqt1K5hwhDWSHCw3HQmeffsUb8UcdCMY33jLZ3zvTjiTNkYxr6eATrwQAN83bmNKv3TS7",
  "key29": "fZPsz6QhJs2UAtFPeXeAHmVhMHDGaSFxu2mTouwD6PrditRz6AhbvXnDGi5mri7HQgcgMFWv5ec3ikbU9HywEd6",
  "key30": "5zhsws6ufGwfGKGcrsCZuVFPZJNPzqK7SFdVnGXw2Zm2Pbxbx9z92Yk9ZDyBMhJYWVAf4VBF8TvCC6AttDprkVDQ",
  "key31": "5vqn7x6DX87bzZNdPB5kn3AHKkbMrYQf97wRCijFJ6zKHo4a6AgbHFi5qAWgchQWE39mUYaFmbfU6TGawxK9h9TL",
  "key32": "LEgKf6sXDtwenuSmYUSLjpCaGbPPY68BG2ustnnCPZqeXD28s4JQWBPihJAKfi8VCrCsQUZHHkxuW8C7wqfmvYo",
  "key33": "5MJS9rVRok3fJ2ffbRt8dTsqZjTBzmVFUDiEk2LN93o1DRbebcPUTo11WvKyEfVAeWEph1Mzg7CVkZgRywQmLQnW",
  "key34": "ABoJs14yBdXCj6JzF2q79JiwacVQ228gEEjVwrE9v5qixxfhJ5QpypARqZrv9wEWDG4aSNA1DUktSpxYm9qJbvm",
  "key35": "4Zgp2zmUp6wqZFRQHSX6SjByL5yCo4uL3GWBaZWGoBNnXtE7acvAWSfoGqE9o15hLHFx8GQu3RxaK1G9mWD35kjC",
  "key36": "3f31ECeV6pfonGsKodzguN58rQiBwkKceiGnzERSHvmTrhvAP8zHkprYKbwxPR3QoCvvZjNeHsMzW1QVioXHywTw",
  "key37": "sBJzDWd89j135gtHJaGEc5vd9hsYD81i5JmaHEzNMgUA2q3Y1j5LrhMmS8phdX5Dk6bzDkV2PmwvUwUEnQqbqYV",
  "key38": "ELL5k9EyCtf9KrAoJcqGVugrQYcEFqaE3pyZuNGZYMzbsgrL1N12qmuHkPifQJNAje3AKYGD3fei2ji26WZkLLM",
  "key39": "46M2amoYSfXESVZzfXoJzcYu9WaUEgdE6YpPhKAwtGVskrdf2J15BB3qAFSSrXWGgfT1yJ3MV1WxuXt4txnboVJN",
  "key40": "5Sa1GMBkpQ3Wkz71L8HCyyxyi5zFVwEStupPHvJdRSg37MUwqHDr14MsxBZeuvgTKHnpuyv9v6PzqZTGS6aW5Yh7",
  "key41": "3k8a3b8dbGqQU8Qq3JrHRJFSoEzhMVPtZPM2sxJab5i2ee6A5TeinBeRuMxwD5KUML6qxTVJ5FKWWibz16pMiwTY",
  "key42": "5SVQfi4ZUK9RFkzWEZtR87dBQ7W11T8qSa87tanqdbgQTqRj58bKFEi95MuF3FKZ161wmJMyYq22ALMPVVUAWBPK"
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
