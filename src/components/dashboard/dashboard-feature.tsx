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
    "5kE8Smb59YYZp1Y7THFPHUaZkui6BNCK4tRBtreharec3HDALxn9Qehfkd2ckn48SrUGpeMHnLUGA5WfniqREB4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BSqxiFwYLzq85AcLPLx4gjjPgW2PYGw89EUCEyHsqrqjnTNE5RDsmr284HyTYQKdxi5i1h9v4rfeZBSm7taTmLB",
  "key1": "5yqisTbFx94NNkxSdyK24vpQsHt6Kzm3dmyPkkFQFdTXRnb8KGwJsA13ztZubeWErhSn6fDUvAkHZFZ7b2APHYkr",
  "key2": "3vc4XBY8qNnBfF3qrmRuZrXmPk6cw98P4EVmy3D4b6tcA8uHmnycviX77RbzzNCc3FyTW4JxCskeTevrBCW7xFgb",
  "key3": "2FyU9R6CVmKqJgRGyYR7VkHzGb9NnKxw56ganD8gtPC2eAxyVebKsMm2eqWVj13RHkoK9mZDs2DS2vsn3xBT9nnG",
  "key4": "5T4u15u2qxfkeQsYRtDH3q2MYARMUsr2q396eJERsLjT3MbhUFNPtwqSXFstuPA9v8Z9FNWpfTp37Ff8vsZyf5Ch",
  "key5": "4swBHnn3a6CSStNkt6DuJS5Uu6pVpBp1GPzwyRunDus5ucktHpsDoFo1YxSEYigF9EPkrPdEQH9hCmSBckiynne8",
  "key6": "2ErQbgceAmScVg4p6GKgATJSeF8F5jJJa9EgZdTEqzuF1gKptcCheAZphJQitASEoQFqp1c4E4BYwvwK2bjKeokB",
  "key7": "rtsC4vYG6uuKdYhYRvGvA31ku7eLb3D5D35sXw9LLb7TBQgT3tKFvwTv7MuTLDkq8AWWeXGQ5H3icghj4BTTQRk",
  "key8": "319xhdZMNXVmBeM2RByrtVTeMWiePmWQ1M9jx5H9pFXhnLWvt7tWtzXfUjL3wHUnAKzXKwjmieqwmQMxQrLWadAw",
  "key9": "5Dkgkz1qiEqAtaZMDZdWPRCnk4MsfhYUeKcLfnigBCNSSqkTA3VaBsmp3NtjC12KFB9jVjBE19AkHN76f3yXa4Hy",
  "key10": "5fJdVH8t3dtLDAANUSKos7q4UYtEvQY4zL3hNnAdPQAszUGstYmqk4DgVtGoPNCuUgSqbnoqKtFfhBLLZ9bYBdyY",
  "key11": "wtF2UDbktEuFXfCXYArzSTwa5fUWXD1MkJ1mKVE43H9oF4w4EpH7cwKzu2sp95b2HmShSLcuNFWUgoJKYyG6n3s",
  "key12": "31AmSU6GvSvxfJ32M3ox2fEhcu8SYbSCgHBmTBq67XqtxRPmUcoShZ53rvkNb35EDeoa71dUtetnTmGG7TnzuArQ",
  "key13": "2N5rSZA11tZwHUzFcfAuTftUpVS2pJ82nanr5HSHdzbzYCvrLSXu5E9ckB11DoNXphkTbCFShrXyhvq68esmMvwk",
  "key14": "sppJz27zbaFeihu71X2fY6zmBEEHELcw4ik2REiYEzRBaCVqoThUUa1BWnKiyJzmGQg9Ha8LKUMTUaJwq6JAKSA",
  "key15": "5yAdAeA8MmZJRXDcwhrEM9SPt3415y8YAVAa4m9cR5PofNh3x8BacnmtRtWbSmWVZdycnNwLhfUw2CusDK6CMxbL",
  "key16": "3xabWSCNycGAgcgNbRsZvwR7xdD3KrAM5TBzkywm2YhoMZskMHCnBB5wNVMht99fCYbDPVYCZQjc88HfRgr3LWi3",
  "key17": "4HgohjpUS923WgvsKjjeriYkfFZiBhJpDYJbTJ1wEmRMc4zjoWk5ZEgkPZ24GS5NKaMZESmrZwBv4KsiTQp1DcP6",
  "key18": "dpaRvyUHhKDRViX17of29SbxBq6CG4VUrbYwQCGHquXrcDUfKKZN1pp12gWh6mmtyowcEMfDceayarkmhvRVJ11",
  "key19": "A2Jdt4Xck9o2Uk8S3Z57PnnNvQJ2qKNPhAaAyqdFkMnXas67su9G7jegFxAXLgYALJrjoXWRmtPhpo6kTZjDZ98",
  "key20": "4KXDW54gw8VQLsPCWbMYjfe85fNuT7xrZXFzkxG4LctwVa3QahxiDXMU53n3F2xwS1HfhudmYt473K5GHUdEr2di",
  "key21": "5dTKKKHbsTBH9Fz8h3qsRXTqQUg3Hhzmro4HpL2ju73aXTvnorqHRkKMb9BGfcYD4dHx3meXybaaKkvyuNt5QDGF",
  "key22": "2gp6dKRQkWERbQf9QDxuAfz1ihU6S2jUAiSBW9MKnmJuUJ7FRRALXC5NXZ2umSRwFnVx8SEXdt8UcmJY1zjdAd9x",
  "key23": "3AiYNwMJyTQDPTmo65LPSEscbL8MryX6Ho8iy1LYnHqGiLzJtHJ1gs8R4LjuBhQHxfWztXtpJSUyUSMQLhGMMkPy",
  "key24": "5YqpimtLg58VwSgHtwLMiDiKuUSPTQjrGYFvU4Eum3C2jQnKuQ8DZ5Dyhf8dCaUhSsAuYLQdvLbZhSCAv12tP9HB",
  "key25": "24c6GdxUzrDngprBTbr8uLfhCAXut8mcWQkyD71v728SYdEJ3VKPR3ecoc3whnRi8nYArJ4JqP1FsjtKeQ4VA7Y5",
  "key26": "5732DLr5CDHTWXTYxRn3UtFtdErt8UxQr9ayCu8tJW2aa3S1uYdmMJccWDf8UASYjUgMFRHBaCFUiFVBxyukEhxA",
  "key27": "3H72p3MidipaRVwNBXFEzAGG8h8zhF5Zd8VZgVCrRpxadnCfTSfGkfNPT8PGrC2dm1K5Nu3c1seVtAoHqPvhoDYf",
  "key28": "nJyt5yU9waWtXPsHS1LeBYa5HC75RzhUXihUTSNfm2JNMsydcvyvkRmBPwEGPXADidyZ9UDabfHFsBX1aHNzdnR",
  "key29": "4uZouEJM3bjuTS4yTekQjyF76PBfcrebsjcmwHkcatkbFW3gFYeLNUgrJWpsLkk2NPayExC1bNRjseMMXiqFFnqt",
  "key30": "2w3is55qNvZF1Mgt9pxm1vK8NpR5W9LgM8r6mPaVfksvaDpfvThrUnD1kMmBZn9QgPzuEWEjbdQX6FgsK5Ey3Xox",
  "key31": "3pwkxxkZHDR9gNuVJ6ZDp9QC1sKmMoZvSwQ64DvfTrmuzkHJXDmSYQA1h2AzuRHMYSLgR9msVYGzNmh1jQoK3SKg",
  "key32": "y8Pe2ZFYjGJJRxyiHXAddYhArzF1WbDFDAXk1wca9KGpcnEPEadmujhDyYLPTZMkdVLcn5Dn8fCr8Rid8tJd3J9",
  "key33": "r1dfaACVpmitLGgD1XD9cnew2tUJi2dW2j6RAi55QDSUFSJEYEoGhL3Ucn9qF4Az9TBwMJLkFZZb17x8c7GQLvb",
  "key34": "4jqTyEFR1Bu4Bt6eTSySXt8iVJyKPtvxJBhS78Te2XLWQuHPVGoYZffcVzHqzqBcXc8ym85FkTjNUXNzAyQZDU5y",
  "key35": "2q3VrkgqR8d3jdFpJPNKNZnFeHznFcp5bT4Hr3M8RhWttvB7gori5SCSNLde7CohEJUnDYHPzLomarueRk58UkXD",
  "key36": "25biRGPiDX4AhfAbC2YhxPceLD1n9LVvfizcpR8jHCytmSJVA32Tt1cgWSSioJ52om8K4jx5wm4mMAY4TGCYSnrw",
  "key37": "3HaP1EEj1dooJCcjmVUk1YfsvRPbZnx6YkyTysfm7AdZTSkpH2yUkNdPuz4zCfoqjPBb4AnWGFikhgEhS8Yjnjsz",
  "key38": "5a7FKTCUB31SvbLDXVzdPqaXwTjtEwHE4E1zeLG1wCN8bo2ebcV2vPW3WfpvJoQA33RMapsKuCoZ2kKreYNvkhrW",
  "key39": "34ij1GEg6M9ptCDv2djN2daMP3NWJWuJDSWPif9gURHBWUEw2SMcyPpBjHBY4EnQ7sMq6T8dhkv1g1nt8TF5mY3",
  "key40": "7haXWHjsqLVu3sAKQiSXfjK8ctkTZScMmy3ue7i35e51UHrit9bCjRw1QoeV2r5umeEzbQPrAkzaCcMqe94o994",
  "key41": "2uGMibkqzaNJu7GgR35hEGZDMJevzLV9tiMKQdmbgLaGFbguBJNAgn6EepTAN23HGFKssQcsKdybdntiSd4pVpjE",
  "key42": "4wFs7Ff82vs6G3kHAXFn64d5PGNNZ9auZxrsb9xnAUzMoRPBYdxrKBSpYqHB4pXjYEQQJE5koE65TQpro5BWq479",
  "key43": "5YXaVpnp4zb13mAeEtYvWMqmMciJrvcXGgMwYLvWJLWMWCmSTn12JpYcFc7QfR4nPDmVMef9EzJHKkEynfCsCWuD",
  "key44": "55MXKWxAj79pqubdBbrfxd2WjSxeVMzri61kY5kMLrVNkBkZHMRAUakjFhKmVnm1Kgb3VURByvd45FhMdgCGowXY",
  "key45": "28REczwFPdqvi75qALaVpZDDTC7u6kbHjJNCeJEXW9ZiiEi5ZueMqmEsh7KxKBqSd8PE4pFNn7ExcJQmznMrPfhJ"
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
