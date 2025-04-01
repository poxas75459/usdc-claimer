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
    "5GnWkd8idGPpLvLsG9w6AJXLwEjaaNQeXW75P5MMccKaYmJztv48XxqnRS1hb6Bj2XKfn7twi2cMNKpssuRQCXpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rP3EvonbCL32XixQM91LuvjuVqSAgWH3ZL4gUQVAttFLMan9G7JpFontRWvKuKjXp5PKTmiMVQ3k5v1pQAceFLt",
  "key1": "35XqqsXbwdzTXNsub7Z8Z3FDYsRXU3ERpyAK1mwWqm9zFepp5HkEfUz9uaQenPATaUL8Sp3pUZKSEbfJocbGVAah",
  "key2": "4mZNByZhswtuDXaKTYbE6xgLycWfLqqrCENYUcdDzyVhiiUvKVAWEyJrWz4m1mqTKLvtQJUPZD9Df5j7ncS7G89W",
  "key3": "3V4vkJ5ooYpARCUMK9H2EF5GMXQne2xRqMgEzKgexxDZ8WK5qhryrtj3n8W1S5XNQVVxQz7Rm3FXsNvmKpHLbEtd",
  "key4": "4rgrU4axKBWfvdYMk7ckH9XjJAgfyhWrQ7fQWk3UK1Aj91UhFzZbM9LDQWZLLZhR1BoXicnuYEnte5JQb9YvxSHv",
  "key5": "2CHvyf41Qxffxh9B3kFKLA6AhukVELVfJoSU1b7qk9wn4J8bZQqRDNoG3isShRSMUBQsjYRHSsaHEhus2nStkkjC",
  "key6": "4YeV49YoUqCGEq8u2JfXtxhmi6LGXd5EaUAUUBJK57K6HinRSwgdCNq2LkQBCKtUYacg1WhumUGAjRcEnxzBKz1B",
  "key7": "55wJv8SBgYmJGrkULwbB8euGSwJWzkm41G71gYZEXoZiHSjUVpQ1G4tADewqWaQ15Bookaw4MQ99GTKKwteYdBW1",
  "key8": "4AE5M6regZrNp5hxcabZdw5UGU2wrty4Rj7nS55MX79XQRTquw14EB1Hv6y9nztGQcwWbFe2VFhSSxSGPrFuaMKm",
  "key9": "5toDdEdPNd6jdvxbj36B82938k4JY26nq6FaoBFU6qXgm3NrsG7PTGLwWEcYZ7Dp2CspzpBLvnu1XjTdarGakUaD",
  "key10": "4pvet4cnG25ZUwp9xiH5s2czsQFNJEwYaVrzMcoaF9yVAqtE5Fr87ucYQrHtqR8s6AwAgihfwRoEMkRBjYrQJfkV",
  "key11": "3UCVik5dh6YxkUpJveqWrmkgFpErovgTNFLW9dwcCRoJcwnqBoTucJszSiUaddioWKDcBoHjgJzqhCdCMSAC4gkS",
  "key12": "66vsT3VoYsDE9t9ig5MiT9u4xfNDwTEmtjxdPHd4Rfu1TwywgAHo5Bj3JCjvkdiBzWZ5mcH24RC9P4ZYKxsrnMis",
  "key13": "4DUah1t1qMQkamtGE8PSbE38ZcgciMXLS3CW1jyNGqUyYcXFJ3cgwCDeib6Z8egm2EYP1MR6CY3wzBXN6Bk1Dx3p",
  "key14": "4Gdcxx8CD9uzCWeBFZEhFW2961stXwprur3AfLbKL4HLFemqAibHPHcMbAcvxcivRJbtUZzM9XZtjv8ZqDHDvRx",
  "key15": "5VXQo4QvbYxf8XDGQhGu1MUc8DkZXZKBujjxKhdRpeNxCgivaoZyxPahu1smQwkAbtKin7J3NyRPmf41Lt58wv5u",
  "key16": "3QKCyGsWdkFh8rE2GTtwoUKQEPLuahG4WUvvDJKFSBJmaMJ4RksD8n98MJGXtECb3HtCCdTAMyHcsVRGNR2v7sM",
  "key17": "ZP911JsVjDUAUymvQb6c7HhTrTuninfJbYTtfmYtX7XPn1SEL7vwo56XnsLjayMM3qK13swMkRTXQoU1LJuBgwC",
  "key18": "2F3F1czk18acjGaGvc1umNt3PPSJd6hcMeP6RnVwZ7fuLDqawnaXrRAJwzkqsAoZfJ3YCq26KZsDRaWdEVqjTxFU",
  "key19": "4FyQ7QpYuBrinsZQ1yh6At8q5ErZ8WDGCNE8542ZyTTdoJS3eYkp76SJwVNXVZ55rqScJj6vHqmQ1PdsLnz4QhRT",
  "key20": "4L734myYHE3yjXmgF4TfXTNDN2vPMpgt9PC47jQ1qRPRMjb3BZvf6jZLnogV46K2FPvFnh3d9ZRixeU9FbGZDz8V",
  "key21": "2r68sQv3aUKyWJxj68fVaQVvBoP3kDHuJ4bm82xsCFJ9upBt1J1qMtP9zfKXn9trCD2n7BVZpJLH6UVPbS6BAzJF",
  "key22": "4oMwPJTYXCMC6rABhKmpLtwKu1MRfZ6Vm8g14t74qY9XjJGzoB5FqXkA9AqaD71VHvr9kj3yAa4okbUd9QjKpgUc",
  "key23": "4zq9y4q5iznzMo1KtLbq1ZLg2HRxunwdb1FHEaz9qvdVTjBLefCx4Uas9pChZiECXRxc7rGUD2RZ6bwi8mLPhEud",
  "key24": "5zDUXsrbCQgs73KEiWqxEyQNZDQNTBzChxYF8NgE3DSksmHtdK5ehowTuDtTYCLEP7SiQrxZyPtSxhCrzjvqirRi",
  "key25": "5vyyM2wKqwzo6vqFnj78M9T7GphRxnydJ5G5hUdHZBzVMjkyPLjSHbFQA5zmVfENuY2uWiQDfvZWezy8uai8xRd1",
  "key26": "3BKUo5WLMJTnN9aH6CQVnX5sG6nuQvZM67krF5i7dkb2GXPgY5Lh4gj6QX8t1AYCShscyRqepvY93zcbCMHDEU2h",
  "key27": "3MzmM2mTMX2oX55zWJCM1Ybk1MTEQHdMc8sEj4mK94buyqAihHLuv5LzTVRBUxqjgaTiD3YMmy3VxBzKHSzCMKEF",
  "key28": "zobPgJM7ZFPakPL7mogzJQqkTnJwVZC5G5r3MNtp8Dn3jBiuwnzPvrV4qGhfGMTZ2twP7qUk2bcqURpmyNf1EmZ",
  "key29": "2cApTy1MMvoQpofdkN8FA9CVCBVtRCqDCKhtYG8i7tLirkq9q5d4WzaxMDm8UmXNmWJSCj3E7Jc85Z5sURakzDdk",
  "key30": "xZVG1Vz5jwL7p9HULH9HRmrq5xFnzW9fXD57jL682EkauWnCrNG3oWXaCdnd2bUcoVBY24m2C2iWawmqyK4R96z",
  "key31": "2LFu14feKVUdanCbxKh6U3wYc2uFWKpS2WxRt6Zd3BFKiHNPSQqphNEJS88drCjcXEPvtKjxMYDvFs4G6HRsGUPm",
  "key32": "WnVxrRuddksdRf2Ax6ycBz1AvgLRv1JPZ81TWb9wEje4VnsvoBRSu8DXSzeJjwJSoPvwkJ5zhVXDDh9bszQqqfm",
  "key33": "4MRBBrzqboZGh9jNRaS8jivwVLRrTwYcMhsX9CDVEL987oKqsWYmSMn4frGLCmnHKJCgSgfMEP7JE8Uf7vVYDYLq",
  "key34": "2Xu1zM8mybMdYi5gAMrFCd5435Zgp7ZU4APyqXLhN7PJXHmnbenLaJueYDBGXWeNTtDjDHKw2wWtH56PicWMcTMu",
  "key35": "3VA3rYZxtdKihoTdoPLzgsSiow8r1qMzPVwpacyMWUNvnaeBD9XS4RcSnXgt7jYyUjHteY8D3dchE1pyX3vsCSyF",
  "key36": "5jbyCcadQdhczdqah1D4rABqXB6adZ32EjfW8f5PVwbe1LUZsYPo6QSavpgMzYnzQYPnKfxtAxxb6Q5HHp4B5w9s",
  "key37": "5sSWbZp9E5gcxn7ZMu2kaTVerGM1XwgKQiAHJTDBnBRhrjD148gvRCEg3nEkdB7CM8gMLdcjqeQPLbkkDMfebGAu",
  "key38": "3xZcDVxw6berbuoKs9xSuWBH6D83Df59jkxSwMnCKjE3uw3joh2czNgSqYWp7Mg7oHen473zGe3fZRwP2BNMTyJ9",
  "key39": "65Num5kvkdZozM53b6LcmGocsw9hQYtiF2PupiFoGAQLK4i59ZwY3KiB7HHKbZfBQeS1rBD3GsmnK6YAfvhNdPN6",
  "key40": "2eQandcQt281S2GTo8ZacG3ZxdofWv3NWMYmbnZYCjZVMqnhniCPMBkNtGPy8hdaLWUKZvnuPjLbRkzfBbuoJ3aW",
  "key41": "5y3LZ62ZRP7wfxPdMbS4oKWXGnmJe1yLqnaBoyLR8yo7Vqb2Ri3WrXtUwr13DQkRJGLsAASAxsy3d6Fmk65qGwDa",
  "key42": "2MDW84RVP6n8NU8Rf8wGX6iX5JeJdCFrkt9L4PoUFimLL3qc2C4hiRky5Svy9NVBSkL4PkiuWHM1nMDaHK1VCsnN"
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
