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
    "5WtbP9CyKyrhKrKHEhtZ6B6nddjoJSkRUqg6snm7P74yxdDDZf3TDuH4hQX1nJSEhTBHtLRUiVypPh3QadkDest2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSTFGSVfQumBuDnnDn1ZV3ULXCFz1U4NBrs26fH7UVsRS3yKEViVB8WrXqzwjUVpTxWX2e4qFaNuMKQuLXAcVA6",
  "key1": "mg2a7w9E93r4pni6ywRxtBuXi36bbgrUoidXZRYb73mDeYDVNbU2QoHdbcdRKyYsJehUfQTpN1XzXPSdWK6J3jz",
  "key2": "4yLCqkQyLRmGLsuQ3asopni6HWmUxnJC6c35LjbYDWiLALHnQAGb24qT2yXkYDvdiS6a3h3ahQdL1EQgpyFb3CXk",
  "key3": "4LCBks7GhsJTVGVNv1nowJmnA9RAwBsd19zjZGngF3iWuTiLh8qd4PoJQXjcdSDrhEm9XLsESGcaXCi2vy4Qp3x3",
  "key4": "4SLZgRT99yTkqRHJhNe8apJae5ojtoFPmTWYFxJdnHShPUH2xFapzTx58NX7GZr5VEa9FpJ2EYWcwabsXHNRAtFb",
  "key5": "5zsDDD1bmSU3dUya3tkkVm5EfQBqZwq1pFtGjKKjtBANdRQRJNzYotsLRck83eGXrwfYnwkmfVBW6raVRX6S6bXV",
  "key6": "2gExVj9HHSCX1G38kQoxtyC418ZjUY9b8ipBasAEMbFh5Qs931YmNfxgpztTy2rz6PTx6uwp444YHWUnXxF5Yvq3",
  "key7": "4t2dVgiGP7BfcR8rxVPP1TMNsbUkXvcjTTY3n38vF489htSBxSjYeYG7PrmDxfSjnaHHp1bUp73wsikUPTLJKJoJ",
  "key8": "cn65z3WaJB8cGid3f5WzZ5Qi8gubmzZPajx2DDDYGLNsyo6HvVMgrtW6LhCTn7b2iE7gP1U3vGHfX7DCTkFu2Ur",
  "key9": "3Tg1vtSDnc3RNL3syrkGBnRciQNVAobSueZrTNpVNo624w45dHLjpT4owWBFbEwheQVHKohxpGCTaKWUof97esds",
  "key10": "5r7GS7szC7hoDxcmCTBhZeKkuwwNNyxn6WycR1eeFjGpAuDFPS5QqddLPwqu23cxYjtmFc2Qr5ks5fxvTBbrddq5",
  "key11": "2mbLeQMX9Wn6NWAebE6bJQLvuRBY7NyioH7SGBaK58iNUv6nXjkrKUuvtDhNyU4XCkZbVXbB9mWm4CUpR6w7jQaC",
  "key12": "4nLTTtqPKqLARN2yQZimS8W5q6wbqxTr8HorzRXmSqGLDBEFGk6TnbxjHXVi2eFGJ9KAShKnojeT8Yt27gNvo8Tn",
  "key13": "4GkxLV6bi7PuusdzzAupvF81waLkihUhj61HiJcicbPG6pGHBEd4rWPak6DHKRYwwcUhcFZ8HhmxkXGNuTpNHXqM",
  "key14": "5QL1oBKZHbw74Wotjc3XtWxf69vAXbuYa9nyKB1DKHfW38yVswSd6fetRtVm2hmSKBf7UYRnTf6sqBJ1daqKP9AK",
  "key15": "3XMdaB9uLZ7xfMbqJpnuJfJeMgCgQtx1y2fXrpy5SDa1eNCxLCEKcL9dLHd6XFesAGhZPdbFXY7hxaddpcsRhD2e",
  "key16": "2fjk17vYKDNA84bdhXGXGr1pvrXuNswBhMCEoTUKTj1pnf9mX4hGeSPuYVGnviWjrNUn1FcWajvhXp3XmPEH9WJZ",
  "key17": "36N2VGqCNMja8rfhS4X6g5J9spFTYcsKqw1deBMr3xzLAEy6AgPP9BxX2EzRHeVgSvL5sHwojv2xviD8dhrEfK84",
  "key18": "5DqUFiq18PdmJGEhyPV6wzc3UAVUkJAwDUFfsdnDfo5gujsixNuWeAXNk6hZTq6zkZQdBv1NPdXxUv5YbrChi2Rt",
  "key19": "5LNFUDwrxuDnv7ERkgtxaD3rPj3mxRf4X4PNB13uhdegWdeDMURrVMLzu2F7CaUdyKRWXUWSuwZnyCpEpqKwYdmL",
  "key20": "4yh3oQeRdt3TAYsnDz1ELKVLGs3qHzZ3K8mYnQ7nQBp4AnEsAn63fr2yk3bBaCCD3PXqAQN73WeyCQT6uyuZmWB2",
  "key21": "2BS46tyAS5Xtqv6BM2QB1va74mPE6tsun1iGbKCniBPwLmsXut6vHQW7bptJsa9ndSsjiuBhxWK6WgHehaXZ4tWX",
  "key22": "3Lo7YYEfubW4C6DdYAwG8EaQtNxKu5nCD4d6ewjczVB642jk7oqBpqK1wAHT1H5YHyjywgaNGhV4Kh5kgQuKufKj",
  "key23": "kkbfEmV8MSZKkUinzNB9JKH4JBrjRFM9gogQp4KythtKZkS16d7JFsTrFY8hhzn6nHGj6c1DM3ZAVgGZRF8ieGN",
  "key24": "3Tb89r8VAeVoTFXUu3meNRH7gqgZydUJXJCZQAN6MQ3rMnmqxypXN3LUqLwbJ4DC2tTHYoX5eAJ7Uc4UdNuWBNyh",
  "key25": "T3XwdBW9UcMUwypq4RVPPCZ9KFq1nopJy3He8fAVskpx98TwUUJnVQtawEXGCgLXeY6cyhoHLSXymBStr7ZTqQ4",
  "key26": "2eoCDKJDYXPW9mYifMDJnq8Jb2bUAZuQ29RJEPEVnnPoDanoueT598paaUV6dfRh6PA9ukCuchifhapYc7qYojer",
  "key27": "58UMfh2yB3z4b8zcNkoA4fLiDfxSX9wjXnkQ6MPeFeRJeXVUsFG5VopLMUczKJ491JknR6mLeS6tMNv8FNJhdUAE",
  "key28": "3BPUviWCL3Ed3sbn5KPgRRvGqDpKNCiYyt2d8j8Rj17AFCfRa4HZxzS1114JuJzUQnYiQiPAqodSJzcefiVSwENZ",
  "key29": "52T9JBfBEDwUv5m87J4oT23WwgGC3vxnrmqJGnUAbxqVDtuG2yeTNQ9ojW2y75LwY1LgsYKhoKtyVxdWgHFJavWP",
  "key30": "iESygb4x22NSoj9eLYHhDWQGmV4qYXq4ZSdexUxR7jkoUQFLbvhfSj2bmmhH4E2sReRQVurjVcaJQnhQ7Un4djL",
  "key31": "5fTv5kYDgBPGhW91eag6865YdyMsFZTip2nMxPC5Wsntgwq4cyb3xZBUXJnYk7K9usX9WvLDCVPWtUxYoqQY4t9Y",
  "key32": "62RiCXPy68ZcjZpRP8oFoV3ZBBrXsTgAD1aXJBtByBDzYRVFV81aKgeUkeaGSUQGCDDFvUkK6dLLVE3JjqVrRh29",
  "key33": "2Vtm8bA2dad1Kimft75bgFNJ8aTvAKjeye5VrQ8ySA1wRjELD1k45HEBqymAMmNxTRyqDWwszMfe2r18uB7jBynL",
  "key34": "4Z5N9JpVtFzMCK8e3HwpxCD3PvYYWgfaoTPwd2C8x64XVoCYtEjdo7UV1s4EuTTfVeePoT17pyifyVCvXY4ZfAnC",
  "key35": "5Fz1XGNKBj1esdwoPdjQPANNcKhvqDEYHehZZVNEtqKZeCswcSxyHaRNc2WH8nfay4KDUoSGpWdrtTPfYHUt5nVP",
  "key36": "fQ2kUEY96MQocGMJt4BqmoV4dSmkS3gEJFsZymVf6vYBzVAJowf6FXR3pL13aCdN1RjhGkrQkZR8XQhv2MD1K3Q",
  "key37": "2FTqhritQKdUMbQNA1LeB4bGs8i8Ncd3LHkfKLVxqwTA2D23vTe3UGw4HXQkFuaVmn5jk3f1HZ23P31QhRDrJNHu",
  "key38": "4CuXdb4XyPTyXkSRF6xVz5HEzYDB2VWwAnmS7vMkVABRSLD1pNVEKjTmzURfpJQud7WLhouv2kQqUykahHYGe8sW",
  "key39": "2Sdk8MJwxk2iz4SCzAz2NVAJuXtA4KyBmyytmzK9cX5QmfoGDaMxtQxZm6evNdvkNGVuEPX9fhr9KPg8YBsrYdf",
  "key40": "4kxm5CJkccmR3j7yVhziFKvjXfnVsvnuHD9TiiQCdNhrTd1KygBRw9Mypn5QYE3Cr2CizyTy6z2hMCujgXQL7JH9",
  "key41": "5jVF8woc4Twz7MAi3t9EzEZY9YxqiLvEkgLzYpTcEzSjDdsbWNdrdFCzxAWTF3dmxCdVgiPAi9oQcoVy5QnMcZos"
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
