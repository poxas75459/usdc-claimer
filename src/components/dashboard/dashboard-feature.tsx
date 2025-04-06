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
    "2uJP8wyV1ebTMpqmENhBXqb68xb1XDm2Zvu3z1AdbXqTcCAUfNMMgDhUSzu293PvSCG12N2owMw1szvA4msb6N3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tTY2wTEnwwCoN4HrDWZcUDtceYgncyzZoQtuHMniFd5Tp7kqnfmeTMhJJHVLrF8m6NGeaVEpxN4NZDc4yJDTFyY",
  "key1": "22JihAreorsSamPERP4aswwXUtdywrvhrL7GocBSrAu4szWDHSwBxSVnoWwcYBf5h9P3A8zyfh7p5XD2NFtopuEJ",
  "key2": "5R9YuL343iMsAkXgMRRb2cs131uZkNBLie9VE3weL7FcYfAWgb3QUu42b8q63eFBB9HqbfDBCZfXijEU2QeDCbiL",
  "key3": "3jyoVP5NP53jLps2jSpD3kkRCG123uUvUnVQw4L95mKm1YnGGxrC17kcEokfdKDo5H1TmPR7W24sA2bauiibiLPE",
  "key4": "37MW5ww2oQfgiDZuuazZBadejg5wCbtUzmoL4aWJRF3qutTdYCMPaaicyBqNVEnSeTSqawnc9NTyf1LPKFw3LysV",
  "key5": "AqGsGSPsBFZdJpmTxF9BjH68kfbYcGj2pG5mNBeusdqpFPdqasYu9nKpqDRHpkzw6bSNZJtDQqGKs2AzUQsAp7z",
  "key6": "2K1Jo8cmzFawgXta2VviB9QQBzQxFskHqAZnNreLAiQnD6w73FarFaXcTk4N2mydkf9agrjCicArsP1gXqC7Hqwk",
  "key7": "2nDXwGtbDhBV2MN93NsKEqzwTtvpDEh4U8JXMyatpdPbCvbRWyJmRKn1cWKe6FCcuGCyiWHg9BF426k1CrbPZ6D7",
  "key8": "3fZrH546dSaUSfiD78FxDMYxZTiojYMEXz8Phv1SLVDxuPwe5QNnUKdJxKuqPDQmwVvqHaZNUx4pNPxpDrAHnff8",
  "key9": "rxA9ySzpsevBLi4wo9Ehy8XExSqRP52pUbHxXkf2yA4bZwHBApyvrSucCxGDUr6QvhpXhHAahedcy3XLhgp2ovc",
  "key10": "3mHSzPzvULP3ZWxZBQu8Fg44BVndM4LiGt3DcFfgWnuBtGgtdJVAVfYQUsDdj3kvzQ27N2QQXH3vtSzz6g9RQJqT",
  "key11": "63ecUo7zC44Tbdyx3KHhrWntjQWQcsTaV53ZxQ32sCESXyKigPe3VXkRwCKjmajHXSexuXo5YuybyBX5B3KUmNmc",
  "key12": "5hJqKgarDf5idpV3EfmRsqtZoLjYjvcaWse22ty3UswgFntcfqUGusQ6k2dgWQPhw9kXRA6tyW5HUjAaGae1tqNR",
  "key13": "5jcFyFG5uP5DPrLJuZB1FXLEyJiQrFG7LyeKcxETCHXuVv7PZhkzWvRF9Bo5mqPrtjBLohGTHuuE5L1tRrtHVpcg",
  "key14": "9T5bZrjWZXN3bXndZndVmDrx3eTSrz52aR78hZuM2qAk4ykByDUEqU7osB5bhavj6NC67ruMKic5wCfdwbh7sBA",
  "key15": "P7Yk2kMWWHohHdcKnKhy1imRcCSQL6hk85qdGCVBjaFjeoHchGxnGFFagqWxi1CycQTR9eKgKw4Jqmj442surbG",
  "key16": "2LBySSCwbeouEYJdvPHFhi7t61C2dCgWHXiRrE7FXMPbsiDw2sj7uv9RQX4KMg6mHsHYkJUoDvFJD5QqysjCxhor",
  "key17": "2vAPZEPurUgs6tjtHNFfFKuxpM79zUbo3RbVjqaf9nUDKUX3cWgQdTP8VmxXhvMMEaGfsPD7yaUBm8wpZjP5jHpc",
  "key18": "5NqRuJrtz9jAP5pzSN1qfFVbKpLcfykQtk4EqvyHm4hqUJqDQSyZ1pHPQfuvbPsFcsveD7a5uhHQpmuorN12dkZD",
  "key19": "4pA1TBrmPEcubdEtDo3zvxTSifqpwEra5imq8LqmA6Rk5fVMkMcx2GsVohoTVEHnLbZXDwbK5TXFq7YWD5ev594u",
  "key20": "2KZYbvo6DqdfBr26jKsggXGaeVXffPFfiF3jfgiPYKEKmR5AfR7CMMFF7hKW3ea6yBQivJ5fUEa1vR2ASBLmjezV",
  "key21": "4ygPJxd5uiSiL4HNdxVeYf5TJFBdYQeRGwCidBRM5qkMqytUuiYNhjwcMc9pSeL7R71b1w3GsCc6Vxz3dbfcoj3L",
  "key22": "4KdgWfYNDYSZhHq5E8BRPKPF3nWazeC7Vz15mcRbJ7S9UoUD3eE3M32uikANgGoL4eLCjy3rktAYSWWk3p5AEYPc",
  "key23": "5JhMZ42qKw3y6s8BRLfZTHHbZZU6Bvnmdn4jqKK73uVrnqe9XbrJFHYs7eKbRCLLXKDLD7J4VeXcJTwGznfHm9hR",
  "key24": "3Gzt9Sbo3X2eWJytefxnC6FBq6YKfJq6q5EfZx1GDZvbStAtj4u3SNrJcvn3VTr2UQA7pcWBNDKsWJ19q45xi1q5",
  "key25": "4XJSVnvVFqARW9z9huiZ5Nx3DLPd7hkJrjwLdLazwbpKE23G4bLeYijaBgXUE6w2LkAsqeqPu8ywXBh22MFNz27e",
  "key26": "3u8jwUwjihD7Qi5rvjMfySmMagr45BK92PZJee5HwDf87eXPobBua8QTTBeWkEecRpAh5n18ZCq4YDrzD81aPTZK",
  "key27": "4c82aDMQnzedtEJCevMm2BYdStQP8wy4YM1NfFnjcHBs9WMzqXQNrZU4Q4XMGiXrq5wxa9CxXEXABo8Ee3JmF4T1",
  "key28": "4K3fp3usrUZ3LNgzBzTPJFM6dDK3d3y37ANSYvjznvCs3MdtTfWq21zKahr4M8yy8S6xGP9phbeqJ9p5LsPabXgL",
  "key29": "zaadfPzB2oFP6r9QRiosAsLiBUbHhHB7WVbs4qcJDn7mkrMaDCWxs6kv4eHD7M9khuqFhdu1ZMARZPoCsrLaB4i",
  "key30": "3Jt5tfjhPe6GqZSiZtPLBM5RLzc4h1cVth22wUhK81xf5iRLMQmnL4nVNCTUzNTGa8K3dnXjGadYZ7DgpwQiBjEE",
  "key31": "2ccKbQyXAWRPQAUfnpUrvdVmZn2Krp9tQ7U8dCKBNqLskQ3AzFSYEMrF5cuTJVFSj39KY3N9Hkt7aXa2MMrjN1vQ",
  "key32": "2xMuLoK98inskZ4wH39exCAo9NbTzeCmNqQeP3deXYVXoAgRMfC6yMHhP78DeDEECpTsFph8KKeTgjuWNSD5yxNS",
  "key33": "svVepWg8bxqYtE2SxFkZX7YSoa2dGTAvskbs6zQxQFf5T8kFfNWPKabLpAEQZvKbR5RZTUH6S2G3TYJZnBH65DH",
  "key34": "26gySJmKmzQUEKu4eWHX5p6AK9wQVPu4kz6o3vNdx8eutCfJxFqYtGpqMb3doiA4A8uPtnf1jetygXmZEdZsne5K",
  "key35": "5w9cdpfJ3UFaoJjPQVU5NSmkNBMXu2b8ahcB2tCnix1kBnbDHWAfJrQhUc4zmoL5UhdzRaAo8nrErYZZ2h3fBue6",
  "key36": "27WtF7tF2b6ojcB3UR7iLuWU8NuJKh3dcp5b9wmSkoi67iS55v7snh8Qgp9EEqfmSbXaPdtnwU97YsLydyApDZq4",
  "key37": "2jXSNcaAz7WPspSrgF4zp9cftgzYjQ8RUFNpz89hfmgmLDgnWkc5evU4WKHWLZhPtBmQe4nwFtccLFKXSfrqSTNm",
  "key38": "5Nn2BHErtk138QiYRPzURu7xTJ9d9Wk8JimAQVBg3Y2HPqfvvvBL4BgxaoAxucYsk2jhXbr1DPqTLfqNtb7QYrYf"
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
