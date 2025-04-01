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
    "4iDdYyj5uy2EkM7RK3gBSkZgtetSnJZZnyg9PT7rZJg27sVpNxckLGha5aZnNnzwZTkofJbUUgWXztkDDJC4WbW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7z6FRGHZxYoCoLp5WH13wmsJNQ4usaMtLHh2vjSja7cjNxtQBhVPK1z57HhKaKGQvjUVvRRvziSvVBtDqygxDaR",
  "key1": "2H5n6Htx1ek8f6RXDyqzmHy5ka5jVcrNH7bSpAgZLysedeY4pxYEbcCarEwogXcfZMNYyiWubSwPhLMyjvgCeL9D",
  "key2": "5yg3KifnpCVJEksJpRDhdQdrQiVpNcPvboMGv5eiQrPQQMGeoExQ4naT4pMNm4UF6vFrr6GxXy8ZDBwEEp22uhUX",
  "key3": "2cysoFoTu3QYGTtZvqDjtdGEy2GfcFVfZV35EmhXq7B7LyMimW9QfLaLmj2YD7ist928r7JY6EEXLHeC9vyG1aXi",
  "key4": "2UcZsZGNy2Qga5LdFDcepC5NxpSqxxceCXRzLvrxtJzqkaf4xsXUHAfCJvwe8RCtamFPByp7vAd2e7dUGxZbxtMg",
  "key5": "3NvEwAQcXgd3yr45sa1J4Sn7fnATaY2yaA2xWgmbFwTW3GqqHgADwXLUtkk5qjbQQemxPui6dmzJ7tkTLR6sMPU1",
  "key6": "4h3BaZNGdFh6cs1WrjHN7rNtGdEKomrvjLAq963USKDgQ1qgk36gbzNMQQyDSuX5wwGJFexW7nK2x4QLcaAsSGg5",
  "key7": "614qx5q1GGSAjDmSHGDVLK11Astb3Wfmm4JxQEVvw38DPe1GB3LzKajjoEefRmvAfQRh1DoPCiXTgpeZf1zoSUB6",
  "key8": "3jcADXrKCJSrK1e79aJxWT7Aun63QfgLx8mwUbKJdHktYnZmH4XQASZi4oiqsfhJeyJgCeDoE7aufrH2gvPbXBBq",
  "key9": "2pNjNpBj1N7FwhX9WJjHLB1eRUqkfKJ5qZB1fy7bJtAsLMxxicp6GZuVeC1NC1jjGoqRv9khmd3oGjwr3qHLq3XY",
  "key10": "2j8jDu4iUYLVZdeCVrCu9QRRZqqnZkyfbZpYfSCuypSAAWXbfddFVB8uyZjYKpeJRjRsVpoYYcSs6rLz5E1FzHSZ",
  "key11": "3bCGyLu76PtjGLAS1HgK159Z6opYJwrxhsaJv6tToqRKV2yEqhc1SYL7pDD16ECJQLSVHMgxcmYjCL1XAJqMSEa6",
  "key12": "2LWjwWuuF8MnVhzDTEQPe2i55QVWFqR1gkEBBA5ZvN2V4pwVG1kSoqwfMUUoZCB4MKcNK1zYsTFBmBxWkBdqUsWL",
  "key13": "48ATKa2nrPtQMogNHSJHf83T1FvUBom8rNA6822rVc8z8LrVGKaMMoiQb6LSod3wwFVxaaYWfa63SvT2tvNaCwnR",
  "key14": "2HYamGgjfCgwf5Rec7vbLXTtfwSUkQKqJweqA7b5Wg9csmB3fLekUfhQq6J7jMm9WrKWr9Z7NkCofiByd8hUmxgW",
  "key15": "3v5K7QkfNpqwXWWPZAXBabN32BNsdAMEb7jqXW3ssicPwRr2DenUKngQLEv7BiBN2YSf7gQYG4qBrtX82TM85fsV",
  "key16": "3sGmdyJdUgxD2DESxm1nAvSUzoFDfEZwTcJNUrZMGYXZVjNaZ7ZebHUifYcdK5vaQtBTxZsQ6GNN82VZZehgaa8U",
  "key17": "4Gw3fpne3gUuUmhTT5XBYtdbfsUt65tyBVA4TnY6veA6CMefot17szwX1rgeA2vsBXS7KYFVBT3Go97MqnL8PoEY",
  "key18": "5Am4GTax8tqafm6YM3xj1MWGjGT3UXrJ4NfzMjt2NUEvoKP9CRRwLporeUYFU6dNPpVy2rjSxRqs5c6zb6FzQtbr",
  "key19": "5Yjbr8qc1cDCEZtC6EWKqvpsfjsyG4pWoTkFCVJ6W1D4Nc8Jp8KG1nA362k8NjeW3UATZTnZie5apDGPdqUf2qHZ",
  "key20": "373rAD9FHYDehN51ACATNZuJfFgPmBRjoXEY8tyzj9NL93AqGmodBa4qnnTraV9w4erbL27hHKJSzPdeWN3EAwhP",
  "key21": "4JsM56tehPWcj9Y51Xdev2ochC2KsgVpoTTp555QYKpre1FnaQeFMaxchuF9Mgj9dpe6mYBSNJAati3dpfgRs4CJ",
  "key22": "3wnzDeCL4qVhdQXWewALqBHy1LziNPqD49roX5GwuCqf7weV8w3VK14wZNNCmgomhny7MGVqZ1UiwaMXL2ZeHtge",
  "key23": "62wfLGtETnpKpxcDqrgLV8BQ5DiB8V2kYcRcC5VeECyhFWsD3SAHFBoMEov9wGyJDiFpZHQMLxwqmSBNaDR7yXXi",
  "key24": "gVPnukJqtBXJeAjmmNAYtVUy5nGuN5BTrcQe7qs4FnfWLnwCstYozEZsj9geS4uppVuDhn3hhQEJjXxVtangBrv",
  "key25": "4NMEhfzB7ew82eMvH97wD9tdFHr5dq3vdtSqFWfGK7CU7dCpukU29EujYyz4WygMY43dbBEokn9G5TWVBVVmVKHb",
  "key26": "5AUjHZGpj6QjjvB5KpGLu54Wiy47FRee7W4Q72f24fTj5HL711AWUhGCEo5kAkqz9Ji4DZaGmpjWnEuiBN22VZm6",
  "key27": "4tMJesEnPzHdpQKdwvK4ktPkSU7SwexkNj96TuL2aEPiYz8d8bUecmLbUd4YedfjU6ZJdUT4v8zYeK4epWrjLUfT",
  "key28": "38fYHQ6ymfuSYRV82mvrHUFaDUYP5BCykyBU78kMUPtKFAXF9pjWvA8rzrwbeDDkjEJKydV1GUuJP7GEdgRoTYZ1",
  "key29": "3gY2DgiqRwXf4vf46s777m7oRddi4xErwPttGux85XoT7K7aPCdUJajJoKoN3sCDLfkjCQ8hGwvyWs6KkFnV2kFv",
  "key30": "3xyZYVLUfQXEv4MWggJWc5EUx3M8D83joDgLywyxcUfmcvmKm1sDJP5ciCJk6mYRC9rRLrv4KNxG6GVnEqvq5Qm7",
  "key31": "2qc15GzezLcEpW9b1UVVMFaXuFvcDm1GHhADMvVVGJJ4aHibVUzHrzRoaiFk4gE6YCaBBb717kbbatzdr3siA3Nq",
  "key32": "3Pzkj8YcLHU5eBwgvABqibLTnKBL5KpjaJGVTCQjiSNgKn5b9wLyAG14h28DHqPnTCnU9DTvN9hzwEcTosjPoBwe",
  "key33": "2AwwQR5WG9W8bQgFYwEnDxXE3nFt25YTeKpuVVAUqzhV5v84GgRF2fkDC6rUidqejWGDp4Rz82Bnw52arMhkthjU",
  "key34": "3Qgf5UZhSE5JrtGvuNe198ec8wGeswRYfwCQCvGgDbGMxhJ7nrjwne4L561GTQpjKES4nyj636eiyB3pywRJJbwW",
  "key35": "66D8grjygTvWCG36hwjbgKM84YX2zjMYoPevVx6a4XuTNY5txn2BZM7rUinqb86a661HV2DdKZ2dCPHCZ7TKoQAU",
  "key36": "4P1eixTdfyULnK8zKMWWHUQviUgZinhqsP3qkZaBkdYxQaNWYCbRE22Nm3x24tLkXCAyhEGNAnoxLmd5xVPefbVk",
  "key37": "2P7wzobvtyUA92vjgK1f8ps2Zq5Jd19kqNNM6UZswS92kzQS75L2Y6B5Df1krDMQT8tVLEF3PczUdyiTTcUfBhLo",
  "key38": "m9iBVR9seyN6HWuZVMqS2DJzvKktU5HU4ksJB4GnhbUvSGksyxcVFc1g2VSGE1vKtLuPo1itnsmy64rEmcJZSpN",
  "key39": "3oqyHrcZmbm26TCKMcNECDoSmRS5kcZMsiazBt6pURkqpP8XAQkz1cuGxMLKkRU8TKXRNRxd9Jq5eFkwhNsNvmix",
  "key40": "5che364Q88h7G4HY4oJcxgSS4uUc99asi4cGx7XWiLgg1YRNeYvvcxWoa2HxM6UncTNkCgbC53WSvpL6HYnmE2kJ"
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
