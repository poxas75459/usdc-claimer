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
    "483gUWMn6e6r7vX7Ym3DFvqmBwGnMdvXghqGeDuar4S7iJem84DezkJDYnV48a32e8jnnNbB6Qf1kHMUoE6U7hXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZCAqsJG8iGQ6iRzrNrGpBCjqxDouBrZLtGo1DgkcsAwYBPTR5VD4X7uLhq4GNujHAQXKgmtBUZvTJ7PD8hstib",
  "key1": "3kHDn4Y94WsSJYNUDcxr9hRqgHR4UL5waz55VoEKiMoitPj2NvF8mYZB4b15HpdWsEjA6qvDim7rc2SKsUFno57h",
  "key2": "3QuD4SsSjzeRqPqUT5PY8BQY6J5zZjL7vpgfLVwUK472TQb2mhvTuGytEiEf6XeMox4hPZygzbr5wcY1v9efSd9d",
  "key3": "8fnZQpwjiNeArfNyUaynCgEndXmkPzmeWjCauxcNz183tA46zavs9NCXWj4tZoZKRbkwBkgdRQFaNS5NL1xTkKw",
  "key4": "5BTUSYFAPoWRpHjzJjZRqb5ooPLDP8EFoHWDsDCtRxHTfBBseeFmVobFAQBF49eBmQGzrg8vFjadmapdxHBGXWvR",
  "key5": "5zz9Up2ZWs3wwizSmnCyf2VejmAYRmvzHgHscXtotjunoeVEragwwLpzN8w34qZ7cHzD7T7JqyJ4Hgz9Wn9Gopxy",
  "key6": "2pCwSYX7inNuxBdi1SjegJy3rTRwcbANNdLd9Mh3ABhUUi159TgBaL9uin87pJVT5paQUMCfvgcRic24xAUm66R5",
  "key7": "42AvSyBDhEK4brh9VZ31ptyCDD2VEJRbFzrPA5o3b4uMxyV6SbjjHEA7nQEczrUA35c9bk3pqSXhHj2FpoMph2ro",
  "key8": "TveAaTC4aunP5C89Xioge3FpPV2j3ckh3hHDCDsHHUmCwcJaAuDQzfdib6kYL5WncK39R22uctTLzZx14D3gQYo",
  "key9": "2ijV2Ps7Cyt3bzswHzuSKjb1HPHhoQKdAHBJuM39WJUnd1mMLaJ9beW167BXJQb9XUBGj6hZcKo7hHYX7X6cjgRT",
  "key10": "4yg8DAee9fL2uK9yQo9YhYDrKJSXu4g9e82VZg4Rt6zN61sv2GnFXgzdWhpfSbsj5mgz6TmtUmB6ybCWXdu2RheA",
  "key11": "4ChqZLgzRudaruowx1vL5v27srQkdcWB5W8mvvW82Gsp373b4QTB7vQMKioL5mdWyPciy1dT7gusKjBwgkFJtvSB",
  "key12": "3fKAjiReEHam3BY2yUzvUjsmB5V8u6QveaJEj9h5CoDgqyyhXuNGNYXvaWvqnumRKqWg2cHSmipTGstNoLFgb7DM",
  "key13": "5EbW9ovuGiKvRFuiHQaFaMAPoNoeLrQcG2Wj5Teiob1xzHyHpYN5JcxYWKfkdKrYZaq4Phn1iVezZWbUPS31xEWf",
  "key14": "3dz2hoym8VbHhX4P3f7TtuuBRdxhdX8AE2dnRhXAGzSvFu8kiJtqNkpjicMkzfkfa26eqPcjmE2yUhtvDaqHnk8H",
  "key15": "5Hb7x7n3aASsUfjCKgBzjowCtzFsQppRJzDigUR1zHw7NArMLMuLi2R98t8haA9FEpW5mNYnMbd4Lzot66EdShVm",
  "key16": "eeFV37Ap8oxg2sXiJykX7RgkJmvw9Zf6ZhNg7KTAS5Po1vK9iw5Ggav6VC8ccwYULwRsXbX5gtTTVrJBYrLagWM",
  "key17": "4E4ECvLcLHDfYqpya2k5djdGL4mtWKx4YdwzYMKYzHwp2hdHTJx6q8KQaBknG7tWkV8kwDhL2Gof7fqxTG7SMZ6x",
  "key18": "5RHAu4DJL94YSTBbtkeHPxmmqbC8Q2WH1L4ZG4BAeQNEstK66sKqUA8Rp1kCV6CsmvHezxLnpTzjNqkdreq5Twhi",
  "key19": "sFiw4dhfqrTWxdDcpcgCxceY4u8vPVHjUJZrPcTEYRP9q3CgmHeZ92UAbSreZgJHTsdrULxR9kSkJTgopxFgPf4",
  "key20": "46JkkHw95eJhDL8AjyZWF75LcCWD2mufTJWumpE9t25SMsoHcSNmpkEbFYX8UCqpgDSpuAnsnRHrP4rV178JGpSh",
  "key21": "64ESjJLxFbTrbP3oMiugJ2hM7eh2NcVqHKSsE5MVY4HLfkD4HQpXcux73epmi4VoX87LSY3n7U89CtJLyFyrKkZn",
  "key22": "3Dwd9m6AktcvyexhpMi7ocVUegC43SXQ8TDd4jY13sdeiiSAB9tjpKQZd3kKT1pronxC6kLZyVFFjVc1PRqzV3cV",
  "key23": "iWjjK2W3U9c69286D8WMEiiYcj7ZceuUfEFtj7PJSvW8D8MokuNCM1GCr7Bmcy38kd1wAT8gaKR8Me9aYWJeVW9",
  "key24": "5RCDwckEfE4RvKEh4hh4swnidp76QA3F5uYwEqTKZsmP16y6Y5vPrceW3i2q5GreXqp4Jv1gfnVxtVGKkSxMgmEa",
  "key25": "5hzYgdyYvPd8yT8GGjEwN4T2mnVfsSuFjC19nvwdK8ARAqjJA2ev5Cxk1rxXuUTC3EQmA1Zn7HDqUrcbaiuDBP6V",
  "key26": "3WXtFBJuxL9jPCzdpc4thTALurMNxsaH3UvWNsyK3QURfAeXDH8rsqh6AKGoBsrGY43ru8cR5d6DEWJj7yMPxTEt",
  "key27": "2YE3Mgm8spsSqr2cmLCGsyhXtxwukLmGzxej2V2epGQq6YN1Es6c28RA4iMc3CLZi7yRCvt6rukBXMUe9VqRnsmn",
  "key28": "3bfPKAGib2Xk58Rq5fKmi159E3fRV8Q5yq5yrY7AuPSnCVFh1pBtx69k75YwUpCr4Wm42SsXnd5FGMeYPuVQpgRo",
  "key29": "2vDGPZHWYnomR95QxWZ6STYVuks2cKnBEWKdVCY1gNtweo8GBx2tpHFvLtEkCFNxy1BumqKUQBTj9wxab6Ci1K15",
  "key30": "ieKZea2MSKfyn9gbuKCRJYm7KTgKu2rF7pb4vptxXkwjhh3AaKu3b1AjTYDSPdFkaHaAmaB6sY5UVDihD2BAtnG",
  "key31": "4wfnrrQDNUjGuKfqbzTgPaQmGjFhaJ3iNitVNeLzAqRWBQByLak4nxVi4YGzuqLS5uNcd6bqZ4ZE44y8vQxUrKST",
  "key32": "a8RGc7iwMvbBDyJwnNeKb5ncXtLd6cw7qzJUZzYvcS39nkNuWsNqSEtZRqC2LS2mkPdMbQ8aFu49Ucy2QY5B914",
  "key33": "2QE4BftjAHiWwRPgdcz2ahNvrhMcBEZqVZ669kLJsAXdcZEw6i3EJL66jRrdfQnrXS8iUGXLbdhFbhzFGwSeow4p",
  "key34": "5Z3zU397xjfLZLaM3HZkfhnRkfAeBqv3PHkJJfLGabfsi2bG3aAAeiZBCLDNN1ZiBzB5UgaA8WcqJLTWZLpe5XS6",
  "key35": "5VmTkH8EMJDBR5GG1wthREeqvaE5vjqRfMULz2dLhVz9xtSqNzFi3hrdERaXzoygwesmaS1HMNMVuaw9tvDG4mBr",
  "key36": "H2Z1ToL6LvffbXKVQLCvFeZHB64ApSxhMGdTo2X6bLgAyAjjD2R1VwWG6jtfrfDtviGerzuM9GvfKUdgYbsR4sA",
  "key37": "3ZUfUyMZVEXN2zM9V2ZYzy6uo3ukBQUKBbVDdbeWEpXxN44oABWRMmQ8U5iYn7xKA4B62TEJbM4BqmzHwZawkjXB",
  "key38": "3EZD5RnA1CkQ3B421MezWTDTCfSB8vQFXe5tAvfK9GZV1PAzByYGZHvPPeZsUzCht4EXDEpT5MZZQnJjM6LtybEe",
  "key39": "2KoCmEcxwksK82A3Z3CN6HKC5h7Pg4hTpgDp2dsJqAunoXLj6ozLq3ry53NCP2yZmt5GbU4zVvuy8RyQjD4Y2ccZ",
  "key40": "36w41p4kZCdvEdkEWuvD3RfELDmiUpQyLm3NVxXqVvNo51oPAeXQVcWfsAyS8KGt9LPbgSMynfTrHGmjxj3F435E",
  "key41": "3SbUA7MrjBsTjvnsyNzGAepnHYLvK6C5WC8tgMUTezyacyXQ9YCkZj6MzdGGvJswWXT1sCMrEYaF17DnqXHx9Xo6",
  "key42": "3N7hxkHDharkeXn7DK5CRULz1a8v7FUhtmUELZpomL1jbBVdYLj5UZUkb9KDF8ZYQmy5nFsMXEjUGGY7nHyqGPTu"
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
