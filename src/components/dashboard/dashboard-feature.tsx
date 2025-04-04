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
    "2ywDU6XcSm6RNL7uR96h7kF9MrUuKAHVyakBfMAPDC34LzD3oRB6XXhcBzMqDEWgjENTqSeDZ98281XJVqHwTEbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7MosqeegYdq9gN5uFY8eK8pyX68Er2XkQXC8pqoqiXuBduBeFjZxqQRekdZiFrVrKsRAR9en6GewWH73nUFWWK",
  "key1": "5GbwvtRhFrBkgBTZ9cG6Am4Mq4smTdgR3FgPwj2UsCzaEmAU1ibcjbKr6RrStxttaU2wfU1JBM8vTEHt4zmwvU4U",
  "key2": "LvANFSFP8FUpbUsy66EpcV3Nt6ABcr5dZUZjnSQmQARxk6QGdE65bkwQZxVPE5bzjESXpvS9UTSAaKfPc2Fgjbp",
  "key3": "2TzxoxRmssvKur7eKVWmd7uZPg9R6zLSi9ToFELxvyxMtWwDigwUdRgrMJTE2tJdPQvcU25escKhVgUadggvXm4G",
  "key4": "39CkeRzLafNMNffhVgmE5mTWbDUmHLq4bkwRhcASwSodHn4S36RDEzkqrtAftDcnENKopCdnkg2XKEWHyySFF2dZ",
  "key5": "2SpB5kYrQ1jnkSpnkWGzX2itSPtDUeKeRxVoMaftuChQHvv8oWXqdw699j8r5upP7CtqhiqgZvow1NP7TvLkUgNf",
  "key6": "4HfBktQXkELfFs1g6jHHoaXGmfUx5qes8ujH8ikY2m4oR7iMuyXNkYAiaeWTFdAmw9PDm9zijkKtxELhBLrJZnyt",
  "key7": "32CF47RZiYW9CxdL3SMMCPKfLUiiSkFr58B2wgn6BhCzmdCsUqJvijrf1Evf91sK7NyH5zsBKM41damnUjGAcUoQ",
  "key8": "7KuQDMxCa9AXjtaZgHWkGhFvb5pXyTPGj1qYhQZyD23Zy32tZ1BUD4W84uGWBAyoyRk9o1beTXZvX9tButrrNHU",
  "key9": "5ZkcE5rkZaP9UkNCEB7doc6f4tDJQCXJBhDv7bwvg6WFaveCiG3PxHYMsw98c5GiT9HUrnM8VDzeXaSXe21Xno1y",
  "key10": "5KiL9Tbm81ujpbKZ9w8YQ8dPpN8CfByj9wk5FJWngYWRE6mxcenLqW3PVcGuWXUUuXC2qUJMNz2ZodL2q5CfYw3Y",
  "key11": "82UssKgu4q8JQStdoWHKY96yuNadKP6PtihjCWrC5twieovjx8iMTbC9PVfh49496tCtj9N1MGXLmFxodXDidxW",
  "key12": "12rghj11tGi9bXMmBXJ4LoVjLG1v5BdbU46VZYZpVMM6TCpiFNcs8GNMgqQ729ZA64HfeHTymkLRfqf3JEh8cB4",
  "key13": "2etAGnzfwvRZXbC4iXDWgtwXEwwUguRtgRPEzPHiVtJy2TcuTRgzL7ypNxsqzKMzi5fBQj3drVZwQspjgKkSury8",
  "key14": "4SzXx72TFBDq16QuheCdVARZ9c6UdmNia6T6JscNR9MmAtnwPGtiesfEsEmQqpyna628cG5DQNzdioPKLZZ997Gy",
  "key15": "2Fz1t6hbx2rG9SXjA82QQMqxYMu92sCtEYXKCU5yf8CkmZYwwBdroRHivmP4EsNkxHrjrqhY9ELa2WLLZ5ME9hU5",
  "key16": "mRi7cpwnX9E3chuWSQQUMoVyJgofA2rAqjiy4zq6PkiLtrpJR4jZ46xt2SL2QhHN2t4LNHrSpyr29bFQqQN11AT",
  "key17": "wAGjRFF8DioXdAij42V8yoAsHcbQFq2vaxtz5mddmxBwuKUH2yvkiS3pt5c2zH4TbyAktFwo4jWNyNMbbanLwiM",
  "key18": "5CbLmXM8Con7dVUGBR4d6qdnBdbEyfCFoz5Ycsv43rfQppu69WqzpS1U1Nzy2M51pKnNzGWcFUfnyh7pCSHABJkx",
  "key19": "25XonrMALZ953dVF8Jco5tiBWgGBtsHGkchcbVMLCFFsMEufenwNaUEak2JMVzJtLSUjFGDxWz9oizegsLshUkL5",
  "key20": "5dbdHy7bRLfdYEeDSohjjY7bdBniuJvkrUbgNC9caGLxN665SCiKCp5foY8FtMit9XPSPqLnTvFcWeN13EFk3Gyg",
  "key21": "wb88LJRrQVGFPVjVsG1NpS3oNcDBf2vop3e5BGTrXJJ4jiYi1vWbu6dNcUzia4DFL25AWa2BLXuGaMz1J4eAU3x",
  "key22": "KBjPDkHTaV3dmnmdCgZQv7ujwatzYPi9oSFmohDawSH45275BiANKUWkyXMk2JSXdo2YrHDeLdvVmUuvDK54EUs",
  "key23": "4rasopS9pdDcFEnEQP565Dc8dSCYQeT1VcHebTgE1Ki5cRkmV8fAPkLXusmdQUffhNH7HnZrWm7Nanf212jBi7rs",
  "key24": "3HrR3WqEoHUPRWJTZ49Fm7ShiZjiDonj27ZKfTRyV8u1AQx1HqF5T9DiD7xY1ETFxxuGhVmzap3d8dnpBn1i5y4e",
  "key25": "pxL21qV9FodcG8dGyKggDgFdj2NmEiR2FJoTUpsc7rutjw2ip8h6RNGFBbF8kazfTaDz7HwXG6MEiA4kdtkmV2U",
  "key26": "5DYjLaYdsq6Cz3HyVLvTCDZsXrray7w1wzubkY68nRhV3V6vZzkBQ7g8au1PSSA4oZLm6z6qA1TbCGw2sFBwwd7P",
  "key27": "5Dems4bKAr8mXEhYXvJ7YuPyv1Jv2NJVWRn6gmBc1rqZg4vGJ8nKk1Zk1mGXxBRDADSJSK1VyiEtAg7RbNLfxbx1",
  "key28": "4Lz5tGSHEeF18YJ8p6f4FTQZ8rieVfLk6ZJizYP1Vfn9jRH4jvrimyYSFKwLu2mUvpZ4kfeHFBxUvL73KDRwRiPD",
  "key29": "3BMRgGMXn1kKVfr92Eg7JbX7SareKULQQzyLJ2Fs5MLsHreNk8RvorvonEaLaEMZMDjY6NM4FuN8sYhBAy8Gs82x",
  "key30": "54pNa1bEpNyq7H2ZyVxge7EQKZfcv6hxNaNBKxcKUDinDb2eX81yN9ZZ4sZ3njt1fWmRys2ghRpFHdWkWgNXtziJ"
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
