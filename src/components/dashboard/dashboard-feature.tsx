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
    "3W65HEasahWFQKTCj7tnJtMiTZMzLn7Z7TdffAnCPoweVpCLB6YnEtGrZXkguwPZCnPqJE9DucG7LmgykyRfb5az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37HGTxab8TwvMZD5ot7k8QaGJUpMXvS6buQdxFBnyzy6UhYkWXZLzXYkGGLXuEk9ynxisnfPkvSfYDJzt3oQdAVv",
  "key1": "2sL4uJntWxKndLwkqfqBxZebqmhN5DUNgQavPjDNYcDqc5tRQCW86FagkPvxfLFfBSF2C5633PewiYFraj1hGZbo",
  "key2": "3y2TQ8v767j4FQXrx9JpPLbU1MXrDfAHH8kA3CbfrjMCCxPGzLSu3mCPaXSPCSrUtcgoAkmifYqzJqVy8ADwf4zE",
  "key3": "5SsRhzwMi4Pq82Krwxfm23xptd5VgA7nGktFXqYHcVHjYkUfqH9VSBLiAh832M2DPytkUuN1DTUEwNMZrgLY3t9M",
  "key4": "QkRgnA5MU5Vd6LMz7WMG4Pxmp1iZQ8dorppM4dn8mX41ugJPDU59D7i1obBhTQxGxwN6TNUNGdsKHHL3PgGxMKX",
  "key5": "emFeA4ZJa5g3mE4n1mLJnM9R9KgbQ78jZKStmXkv9rfbGQFBqj2robzGzEMdCUtEhGCirukuudcJbU69b1coXeJ",
  "key6": "5zpSLydD3KgYgR6eQuUEc3DEapAbE6zmuL1AzQhE3UjbeQCRrVcbp34Nutd1ZUiqJ4ZUxexVtyedRRojCCcAUn4o",
  "key7": "2zGtkapwge7hXQYbd2FVCXrnQmfMcNupNUT2hGM9xW3S9F8W7dJDwNMYBv81PCPBmfUQWeHrvk2m5Zx8Gptjt8EQ",
  "key8": "35T1dC8jrMKVEYrmC8iW4Hy9M79v9k9Mb21NCmrbTRbJmNF8tcSp3cwnVDqGVeAFL5Erz3ZqZhBX6QUnrwiPSerg",
  "key9": "ndQvAgcZmPkZ5W1nptM8XeTZJ6b2QRhF1nKehJunT8bmKDRuRuxbaYgyRGq83PDy4hHt4hmWyATgHjKoDxBLdyo",
  "key10": "2Gcvkt1Nbmimn3VdeZ3UDvGVR5fnVbpmZSHANzfoibSLhzX1uJd41wVi2Apy8aEsw5fSyB5o8hc3WExQ1ZycSE2",
  "key11": "5TzV5Z1Cupd7xZ7bpDEtEmcZpxGuNLofNeeA4HGhqQGNKUYoFsWqPRFL2X2V9MWa5iVet3xYjduB3JysHczxh35f",
  "key12": "5oahrPg6d4k3buR4niwtddQ8zFZ4THkvxZCffkE5sPhXpU2rM1ESxtnj4SZRsNQZkhHW66JR4tKkfebeMCZgvBY5",
  "key13": "2q78pumCt3Wqrw1CFzHM5AD8fZYzeWAvHqr6zQiqvXx2ojUjNQDEj3EVSgHrpNmFTCNuqAdeSAEzTviA1ERarVzT",
  "key14": "p9geSNcYMLDZ4Gz5c7tDchxZU3EVX6duUS9kWybBuPC2ySeCRBRW65T8ycc9CPUEBJs9b56NaRq6dDYtY6LNxS5",
  "key15": "4CE47HmpCPiPhCr4wRz3D1RBsPgSKHW16CSzB2aVGshxfNVKprdPBUTEyPLytCqeu2BgeMgTCi2jbbJWQ8Nyo953",
  "key16": "3RkBhKU9xfUfyULpjiNoiS24TCo7wBsuApgaEXWxTgBD2FZnBBST9RSd8s2usyd4hU2mjA2eXjX2tRfVrmCR6ff",
  "key17": "41yhYoBZmnfQDXEyorvfTp6Bm5jju4dZmSexbCLEDpjct7XweTMRfDiV4433DJ2AjPrNMEYk9WkvkrduZcUjbU9J",
  "key18": "2eiLAanxFNAxNTEA2EKCgLdLUC8PS1df5hJs3mZY5Hyvt5jmBYY55TzyxxAXkVKC7chfuhWsvegximMA2d4KgU16",
  "key19": "uyDHBb39ig4uXpB31o94meFmUpD2jamULgyn74BxzDNvYrcfKPbqioCLnzMjXA7vYDvWRwd5b33YXaSH1KmvYkB",
  "key20": "29spmzc7n5Q1qY49jtccoRvD5P7sqoZ92ipAAkLoP1WxUeQaze4VY5gKawGMSvhq6Mud3bAPkqdpe17vLpkH5WdC",
  "key21": "4bqRBN3TWtNQkbB562M5iAt5eFg8G4Eysi9dnJRYqFeMdWffCNtGVbdoCXb3sx2YpuoX4oYrWDmJ8w9swKvyu1NE",
  "key22": "yoKvNV9ow8rVaoiCXJSovXQis7FBS6XyK1EsHD7BQTVjLPBpFzt6XBYPqjU9rYMEKiXi2H5HgRdBghnUSHBEmxb",
  "key23": "51395s6zvdtr979yfbqXwC2V9oxxehxRxBZqFt3fN3cfN44LuQNcHXxBUyy3Y1vHX6qwXMFWFpfqfpYxAo9BU6vU",
  "key24": "x93NRCVvHYGV95o6bZVPUNe34AmCU4VnK2zDbDTBuK5bsXFaX7f6kNsxrgwJ4TzN3AL2LK8qeehnKkmz6gNqhZ6",
  "key25": "5La61oUxTkufq4SzoV8dCsFcRkkR1a4BnNAHp8EAb94NWXXcjvnLaCZ2tpdBoiuEnLTUV8FXwn9nEaLfdmfcJqPB",
  "key26": "YBG9eMb4H27wiQP9Re4ZbWYLWbrxp12kWxeUbNqyFUvUBDdt9nLz8VZceLQrmUbkq3XiqSsSV2grgmddvRPsNBT",
  "key27": "3iMkWuBHpirjZ2SJ9HvL5vzP8gwZ5srDmHt6ejtDYLFXeccPKbesE8nj9jLAjhm1sqyhQtSyArSqFh2UogaZe8Mq",
  "key28": "3Yjo1gjNH6qd32TxRpdGpHU7R5Q4MBtgXRVtt4DEvZVgfABdc6Adz6HEuE3mATwfDvzZ8uyzpZwYmkQe3CagZWnh",
  "key29": "4rqLtevmuPoiTVrGXtcbmFh3eGLGx9H2dpoFteH6Au1u64WkNJv2nWKQjKm37kxyjA1U94PHumm2E3D4zwyFaCkH",
  "key30": "3oDCdL9sJYjvCV5ZTmLPA7B6gbpaSNYreprK7wy2EnC6xqWnNLy93BGkuKQtzst565bLX9rNhEtbwHiqVwQA1X7w",
  "key31": "3v1uGm7PHwFuB2DKPUnNNYFSHwZ7zJ1VjQGhoT4dSySNAm8uBueYT6AMQp5ypqz6iC6JtJnk9gufpLHNCV6zFZpX",
  "key32": "5GYaKAnQe1ZCVCjLWFAdESbJRCFT92y3GHuv2xd5WTiK51nnddM9KqKSJaaw7bMGNbxMXfFdjSd5KmaqDC7SZgSK",
  "key33": "2dkaWNPrSdFkmwVezafYHriwjRXuwynUcKvVGKnkRsK5vpkqgaYQ4LCwdqTE3KxQdtM67XijZdpa8sn6vL3SSHUY",
  "key34": "2LKdpLozCrv289SNoNgo2FX4yzGYRZMXwNBGbfpQjQ5o3JLiscc1SB7HNktWoa1zp1YFkD7DuGfQkFd4aoXJbtqw",
  "key35": "4Fy9KyqGFEt3q4JqVjdrrKDMzdgLm2BKWhpQj8bCww8J6jYdfaoTu3e4so5Nr5Kt62rXi6JcheovTbTwi6yEc4Sf",
  "key36": "jCesshmkCLNyjRxewy1Wz865xTj1nYg922siw4KtLSqL1pTjYQpcF66FfPfmZBDT9uGaTqkKocmcCKBmdZr2kHa",
  "key37": "EKAM3XE9uTL86dFeA54V87czAgASAt7aEj4kskaLnNfjpm4hLz2wCqiav6iRXitH3Xt3pL6k2BREPEWPwYsN5Pe",
  "key38": "4RLV1mBguEuEzfh5SRyr6ubFBnGqGhjSrcspZmZpjECTbJFEB6rrWBKsM5iLosHXzAC4DKUEesMb6xcTUw8eQxgf",
  "key39": "5sQvG3jzNfXd2uvsK4ns52syJwyK9feJQTBaxDh17zGj2SmSxzuZK2jt8LbM4wmKBFA6iNrtEj9uN671DPUChohX",
  "key40": "2hafittwfBLb4pV7HeB5sMDguHMmE4FsT6qTqK963GJga14pWfoJq6XQua8dYiQiktWkMN8zsNf2c6oF373jjEJ9",
  "key41": "2dZHik4KdqJmqnFBU3qTdoA2JYzj4JzyJPPDzYAZsksqCpDHdNNNpyaYMGWK2FX4CaExYUKRZXK4yY4BaHYuSxsk",
  "key42": "52PS9sLHK3EoN18ezGNPRfYh1UREy3HmhMvAtRPotn2ELeajH6BvxHmNcXSHGJhX3NPqfktAXKhVxdyTSKcFuBcx"
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
