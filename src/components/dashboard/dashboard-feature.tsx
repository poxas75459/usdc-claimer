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
    "ArwYmiotwfsdFsRXEJGsefTnvHDGRzfJgDyWs7kRgz2VKW95PzBHgGkRUhz9tQfzZnhmwAUTUDtBQTbrgcjvWTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1VfrwWgX6rdemgWHFrzwhF7yq29Z53dzUWGeuTMJ4Ufc6J96M6DC8mJUq7WuRmEon5v1zubtmkbXbztdHZyrFr",
  "key1": "5G69Ags55ps4jd6Grjif3kKKkXVFupyAGuD7BVh2xdz8YzxSDMewowUuE9JqWibW77wnnR2nK6FbAEjJTDPWJVMx",
  "key2": "36DsRAXdkZVJHqvPPKWcYyZzkRN81KQJKJjqVZX7xPAuWJBFJuvTdZNRPFLgJp8V2Qp7m8h5YR3r7LkJ98qCCTDz",
  "key3": "2MWgjvC51WMTvvB4jEVXDBjZZ8uAVHswvNMw5fEkdMvga8e7qnVMjgWpYVZ2wHachtcNAKnrvjSiy8eD5UVoEKHi",
  "key4": "5wkZ6AYph6W2XVKK9ydmZZzn7zL4xxhpcRYTEPqECPAcx64M92dyanyVkv7hbUhNt1C4hKdudXfWp8WbhH7ZaRs2",
  "key5": "4CWqXinUQrXWwDtbxAZfBuqXiZyzaN7eGUTN6wFuZgvojRfTTKFykuzfbK3M8nNsA9kzuKTeLiLoD58xoe8jJ9qg",
  "key6": "4eEvWtKKet3dhd7JXsiNzKjGYwu5av9WckrTHQkgW2QtEh2EuUjdVJVsSopDSkM7ZYP26f35mg5jrNpwuuSLJ2zV",
  "key7": "2YCpJ1Bky2j1C4nudz3xftPWn5czenfsGyZarMd4MaoB83NgHcygk6CD1CutpSn7YN9nPBQZTiUvtHH7Lsq4YwXy",
  "key8": "3xxEf8Vx8eheXLzscUgvqMpdtigwAVas8tDURCk2A834qQMz5topZihCizSVNAJtCEN65ErV53Dh9hcT4f4A7cwi",
  "key9": "3X4W71oLgJYPEaSEBge9YxxqZFP8G3jrKQCm3NJ11qonFACvo1i5m2tQriKF1VxaSjw6y8DEWYZBr4EfBScZhanF",
  "key10": "2rWB7apXtag5J9DP958BupM1Dmh4xorn3bh2EZpPxax9N4FVHjrHacr1QBkGeXfDTtkAeSBVu5mrr48kHvZ8vnrZ",
  "key11": "5omADa7PjBhzQGpufBEYPNF7XzCoUhfomwpMr74U2YRBXujqzFimujTNeHFac8Ag6kyK6MLWPe8fTf1exNjJ2iNF",
  "key12": "2r3WW7nF5x7pnsRWJGXqTykyxdvzs9bFtU741ZkRscAQQSNFkEb968FBydv9hQJSXtwCYCcQBZRbV1ASKSLv8BZt",
  "key13": "oq6H4a3KU3sAu6MiHAPSJnJ2sU8ypt8pT64aSK6hFok22dLN7XQJysKMVruH67Gu3DB132Dzn75dND7ESGEK8xG",
  "key14": "3mHfiRLNupBqrehBw9s1jbc79F9bvnLrB8UK91BeoSbPpRY4gdVve8BRqJziBStHxgDicprJUgQi9eoDnmUQFNdE",
  "key15": "WttHSYX347YM7Kntnp5CePY8xFaaXFgPygQewXEMM9QhSCZExxaqrVocJthCtWjoRXLk5rL8mSv15gr5Yxggoy2",
  "key16": "4bUXovZz7uXn91BeGwbP56k5t3JEzWDA3m6BoYg9SfviLAuHFenR5cJ3rW5Pg2NWcQUDohcYTv6brDMpfk1mCV31",
  "key17": "4VwuHsM3zQCUAgY9bUzAeZwkScMraNcHh9cF4rsYqPEoa4aFQBhNUsNHf4bR4ZpuU349vNmzG8xUHjqd686b47B9",
  "key18": "3HdkJxoAGTGt7XYva84hUtXh4QXr6fkRPFCipokbRujXDzutKQ9mb6nGZfz1fA7kabufKeaS25iyxQgzLywx4ace",
  "key19": "M2yLrJ1xuHRccNwEiQ6ZBRZ85x6mPwhMfJQg18sRLSSeBdCRxCGFHGdhnyRauCc8dXugrmfpbBKDWPj16eQXcLT",
  "key20": "p6viM541iNcpeyZ8zocihF2414C35hco4sYjHXYV7p2WzEug1Cbjd7DrSzwAxSKFbyJTXGJJw56EqruPPUUhTFk",
  "key21": "2tkF9Z5th8uxsez5kxGFCMUkhjvp7MFBaPDWZexkiBKXSLimjaBQRzZEf2sxAbHRSiAPAwFUqryKQ1EXtYhSCk8H",
  "key22": "4rz2uJLuXBhfmVJMZeDSqtPGgfqhUAfSKk4snhWxmD9vgJ32j1uZxDtzH2C7e8jiyjGgUi7Rfc8rqJJEYHitNYE2",
  "key23": "4exgSGijaNAgruDnYGJK6FQfhkCEz5dfTeXLN5hqk7BbBhhpfTzUTadh3TWNCeTFcvzoaeK6Lr1BWDeXtKSaN3ti",
  "key24": "2zZwR1164iRuaEGxTmt9Sma2kb4cyAXEGmV3r8ogbwQbVELiqr6HQwPq7gHkWGxYdCq6H1WnPJdKqu5G79XrjuM2",
  "key25": "582snKfRJQLRp7gPt14YGpcjicsL8cfVgVcX4vYZPmiJyKnA18URopEgKT5ZFBKmzWSZszzD9C6Kt2HYhZkathkz",
  "key26": "3mGUPmFdwxVJpw7tTY9DxFdbPofzEpWWCnuVS7NbvuoEDcfutHB7wScoZsr76SRqV43uDLJt2DRdhn6rfDQYqK2s",
  "key27": "64a7dyWgS4XM87jq3Zx9wyH5ECPmiNxuNzJFC2Ju5L4nCYcUKakLoGwtP4XDw6i5cJK2UnCdwRfVh1SP2rzXKKem",
  "key28": "oyankEfzcbUNwq7zR5vpxe18RHU4ddqkX2BbF9dB4F1xs9SrYy1cygiJCMkq9QugNcoAAEMo3FqGZGghFDv4C4Z",
  "key29": "3HdAY4E2KBkgvhRk7cWyaKtJKRZxf7F3a975jDYytyaX4BUJWGxciQZQyZT5nRXyd89a4BTjignzASxQTaGASnBQ",
  "key30": "4PdgvYTJ7bjGDYC3Ah17U8UmVWA9LwTrJDbaHA351PBQW4YdQs45FeFFhoHo4Yy7UePgJj19HXMSZ5NE4TJWsYnZ",
  "key31": "37iKrsrYTRTiNkyfcnNmLJhJLM8snxxD2LJ3v7mK3uGYJqHLL3T54JoDDR41GSngr5Tkf82kZpvN8bQRfVcXPxGr",
  "key32": "2dofWCoKvdRdpRvzqdHFnuSh54HgZKKr1nsJCpGG6EHv8C7pMNwx2zKEU6rRLpD4ZaUVzikYaxgAK7nRzPikDrPq",
  "key33": "2Cb3fDdHY5Jje6xZLCeKPPKZNPvEYTYYP8CtinX8ugNBdabu95zRaFXy15wgtTvJ9xd4cxFBZmeTxkzsr2yTUkH3",
  "key34": "2w3N4rapeimrsQJuFb9cGUAxDv4AXxfS4BcQjkJzAJMnDV8ncM3JBfNrSSvN9Re1dauhPJWbgXFyED2cVWHwRJWh",
  "key35": "5snNgFRqegmiryjMvYCVXCWC5cNqWP1m9WrMx8saTrxWKUF8LBnV2c9MDmV8goUExn4nTPf3zYvXUtW2WxW9RqWD",
  "key36": "zp8xsYpxmdobjpv4YrCcKPNRVq2ZNcQ4fGRYHDgpXPwhsgKwJgpT6yJAYZ4RPjP1RHGx2Lgs1v26ykmDqybDHZR",
  "key37": "3JtUKSDppodt7Q9oJjS7srMcwaKjZNrrcHM5wDRXpH5eReSVzZRj2H2h4nmL78Lh1PwpFGC7wgCitDAWy9iXiYK2",
  "key38": "3U1c3MERoLZsPCZTLExtSC9mwWpJWTBxfbUY6t4hLhEbde8Tp7TGzRqDJx27z1u6obU3R5G883JNT9PPfAsVDQrf",
  "key39": "3SUXoPDswCoxWFTKDfwbwaejvtz4a7wtH9WghDMuBHSxBN35gU6BUr2RT2qGRb7qyZeNSnwnrcEpzh3rEu1sNicv",
  "key40": "3iXXoWcpUnCksZENmYqn62nUet5AB9xNiXt2vZD7WUra1e3WSLH2rWFgYuzUb5fTc2k2jDvBVaAX27Wp1WequbH",
  "key41": "4fyjaUxmMLaDVQdKT1ot6AsyCr2K9oMU7VYTR4Yz9w4jnBZXz8gdf4WiqKD7jWAeSMLwFLBdJwhffCzJbefqkrXn",
  "key42": "45ncqKijxE7UFWTYRCJcckgK7net35zMQftEsSqfrHNKBB7bA4vjvVywe3d3MjRAhTfJj43EaxxwTArFSVbZeBQi",
  "key43": "2dLL78qgmw7K1ywKQY6m2qkSLts4zsciFv43Pj7A6UU3QXt7SXVfNeuUNRWU5n5gGJhTBvqCFcC1hKy4XXvNndGq",
  "key44": "3xcmwxPtfRwzz8d8BympLaZepmVncJe7Zi4Nzucabgkc9w6Mn2tjr2gfEBeoCidj3ZwUgYQvKn2TLxVNLa8LJMgd"
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
