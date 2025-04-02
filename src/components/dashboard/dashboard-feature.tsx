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
    "5AAZE563JWqczGgAVe527h6oMSUPwywT6VHTSTwPN9Tj9RSjq1eeutEZ3uszD987U5t6a3JoiKUbrVnWyBHY8X4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNvk9juwrftznqJGDJ4d37fiyxvDMqFHHCxDQvpKr1XN2wYk4C5BYLiQJiSvqwJGuevyGhqPgoX3NyyaoxL7yen",
  "key1": "2HPidtVU4HZ3ufrWy84pvB7m5PW3RBoaFhQYnpwiighiRsRa5wjNW9CjcL5VGmGuBr9Li8EEWzw6DQaLRCbA9Whp",
  "key2": "4zFo9NZMMSv7Sooch3rJEq5YxxCzpBbgantt4runTAfuK895YBzbTetqs1wcJ5Wuvwx7pf7rT4XWD41e6pCBdxNm",
  "key3": "57mEwVEwNhXmya6A6jh1B6Uj3EQJpT8YvcpoaT28Y8iQnhRUnxy6QttbShsZsinRkdNdUK1AzM9LRRbkimnSuomk",
  "key4": "669WQBK3ry8NGNYQVsDyBLX8ghWVS9jwpnptyLtYd6VHdKzeSGuMy2AxMUy1ZtWaSPhwYPGVnUT5c775rGpBRZ3D",
  "key5": "5yB1qkSUBACJ8JoBCT3WNRzDuAffo1yoXHsdUmMht6nDGV3Qmf9UFDjJewopLC3mMEFRkpNwhpP7TQ77qC65hEx5",
  "key6": "s9D3WbA1a8cdhsUsh59Tj3PS45eE542X8dKeB2VJwKDmENAD2a7J4mn8Y1pNiCN61R4eyK29JFiaATSaLEweXaz",
  "key7": "532J5iKj8UJLbYsXZzCfB4T8UZJvSMCRgCSDcYyU7yma35V3bWA7ERxKJoRrwCBPjNot8M17ukMC7uLMVWfzaoAX",
  "key8": "5KQSnTSfduhWCFjc8p9nscQicarQLZbnSNu5TLBGDn2Bqh4BipbWWghZ3mtELN4fCBCac4Z9soCsATnSV3guwqxp",
  "key9": "354YtRXEbsmv4bWkAstHmU5hsd3sr9UAmZ4jKoUCAJ3G1fx4rzSiQYvYm8xhGLMP1ymGCECQ3m2wvTrBCvFuRQMY",
  "key10": "zYdqB1EMLR68DD7EjZLsLo1tojbj4XKL6MUTPdJt4GJNdXAGaX5Z6uResWfk7jEBzi6ZYdrJ5CsgdzNPHXXv85B",
  "key11": "4JLgMkydPVG59Re7jHYTth5ZvYyN1BfGZj88BkgwuR58qevoTiogduXRoAEcKD2TWLgGc8NDSKggGc54xPLY1LS1",
  "key12": "2E1ELwN23Cg9Go8kP3rg1kgkCis3CftgBw1VZkqbfKZVJVC8LFfdDqJ5U3PTs5uq2mS5UsquuNvPhTMiHoFyKpyk",
  "key13": "4DC6XW8vHRK3QD3yJJosGHwWxxkdtmpkvBLBHTuhwkAugsdBgutNd72eG4fFbVkF9saNgJD18haJjqod5kCj8tCp",
  "key14": "3xKMzN2bFQGtH3PpWCuvYFKjMYaJPqnG4sKYnJ1rQHoGetv5ePSzFCGssosiFi53EuvMgbEAw7pJGCG8YkPSDNVz",
  "key15": "3HfVy1basmpXBbRiekg9iY5iJ6gomYBgH9DUq582NU4jZZQpWxneVYJvBFnTvtwDhCLmUxUCyFqBrzMuQddMqztr",
  "key16": "5fh5nBs3XSKfzC8GgnnABzdKcmwaqxx8NiAMwWfZtgwM2hYdpXX2vD9Uj1YL28G7HvqYtxoGz3hJwja1dUUpnEbU",
  "key17": "5GXR2PXRYzYFGU4tEGvq1cWXascaf6539me1eGFmLBVgfPRdSkxsFBKFtKjckXBVw2iD5GjetzxXJMgp4bMBnYpG",
  "key18": "absGzaSviPxfN74CGcLtwgiZmFN9U3vEimX544s6WCHx4J14wMbnbvPkdpFEDrMHV419NPLeiac1sm3qKbdfpcP",
  "key19": "43CfFidSE1BbZytfvR1irnfeG3Drs6iEmdtX9zxRiTHyhvJpSM4BjzhF4GjvuLSCvFt2v2WVXUAuU8VkkMccY6Df",
  "key20": "5hwfPWt2jvF8NhDP4xMMdewQeGo5jjvPshJRLff5FdJdt32trPyG2s5uT5245NAcoU3Up93RSTkR4NBPamVV2Vit",
  "key21": "3Tag586NvMNs65cgfYbr5wPpb8DYEmPg8ZkD2EuYj4gm6TJtkpWq4o9sap9yACsSZerHTLxhdtpr3FMBnFNst1Ea",
  "key22": "64SBUd7eQV5cDffEDSRevsyfKE8u23MkocK6pW8noEJQNJMHNXoN3jNBKvP3sGAALVmHNYfrZrXz9V1Yxq1zHi2C",
  "key23": "3cQqPtfKFJ5mPyWKR1qgm4E6GP8G4fBaLkuYNQ2Ki6htDVtL8mtWBUGoU7cnJ71vqNyYCirzmHg4V7hNfysjnGz2",
  "key24": "2UUVVb1tjGkpR3hLL6TwVxky9P64sd1dak6taREGrrnyPwHzu6xcafKmTjj8mJpB8e2Empa593a5rRQUVZpwNFeU",
  "key25": "4fRwVJxw4nwVTnEhhX9Dxrjft8LpvBPeY42AXqavwMULSBXya8eJV7C2yvU9Jo2DvoBnaT6VjPthtwDzEh4PaNEc",
  "key26": "4ZTZemdoXVViS4G2JExE3X8xDhy5ACHGyDoQg2Zr91Rz6uSF1gXFvw3eBZUs4bTSMqeKQovERHGwdJYES7H3LHQW",
  "key27": "5EGZq3sWyV4JV64oWKBKtxoouuXZHwiZXvbyeMf9uutySCFM31MRS9URqfbCQcKBUWooYQJPU6WqMEnVaGYmzUvj",
  "key28": "5cbGyspjpMLdMWMp98Ha4MTnBMdRjbWeRqMwRFh8gL9AP6yjA32RWLhyqZfSUGFcpYNqkXMqHcvz6WUQBocR3bYS",
  "key29": "1Wc91gvYnf2pW6XafVfHP5PvUM9EAYY8w3WthD8Yh7M2Er1TGahsPqzHrHFrZWHZwhmitUX5hCkeT1n7tHeBxrA",
  "key30": "2xoJxHL4QyhfzkhUmfN2wvEf363Ld4yCW7W9tbsT7rAM9edeg6pVvX7M3SN23pgA3docn2CRV7ActnZmXxDj51yQ",
  "key31": "24VXEU4WDNHpBhnpeGPnuSKkpzWiU7WXgHzqJCEZrHRifbGJsyWpBDGZXYQAkc9341SriZ4KXmKTPav9L79vajfn",
  "key32": "5V5MUgTmzphESsB1BamNAJQe6rRUN1V787Z4Sd7sncpeKQjivx9Jfw22MRdUczfuWaNu7roi3Zjcw3dDuEQWqnyU",
  "key33": "5yvEbSSyr6hRRkHbQF8ofpqYoyeV5agK3213A6yx3njCawQ8HCKVmKdivc675AA2i8EPBxLSX9Jh6dXqwcMycAxs",
  "key34": "58bsLAFRtVC18JHDqVENktewLUANDWxwo5wVwHSZovg8jcbwnrzZzR31jmWxorQWQwHthztQ3ydHSSAMmqwU99Hq",
  "key35": "3dGjoDzDQMyLhyaQpFrJX8XNNntnsq1EETtPfnq5sSebCa7L2qg5PTs6f3Kk5ube29QyMLaqE6G9YahZLvU4U56X",
  "key36": "2fXCVM9yeCWhLZrNgb75B6ApsB5acnGrdR6xRWj3KyaFK7baafxB2sVi7s2ad3pggxYv5HdHJM7r26moCk4ZVXTL",
  "key37": "5sJwSDcoCtNQazoqfbQ6AB4TTNAQAtpeg8aG1cNxcByJdGDu9CMMEU7NSzrvjf1cS6D4pVQx6439KLjjZxkafe9E",
  "key38": "3hEz5RP7Hw1f12vVjuuUZzwgP3n2hf5ArJA8xm519zAypoe52ZCfTwWoiKdA2qi4LAyrvAGEx3wFTN9x3Ljdd1vs",
  "key39": "nDaZVcfBAVDt3FwkP7ZdZfBouhyf3iLTnBsYDtJoBHd89vXRdrQi6DPxnNTLC8TVvXNb89vXpPZS6oqhxTApvTT",
  "key40": "4r8LPeFhMcq1SMWSk3XbVs7SfCJmBfk3Gs6v8W9JPc64cDMHZ9QgEUDw5DxkpETFY5yswQueY4V1HWBQnptUussi",
  "key41": "3exSxqFB8krE5vE7p9JuDJFbdYRXwdimkVf6RcXdSdJWBuNz4KPGaDgQRsGymZSzZUiViteSLS66SQj695mqqofK",
  "key42": "V7jnVVdg8JJrsxinYMxh6ctzMCy2Xtz2gibnyTTnDRq3UVh7ueMNAtMhtargqqQMWvnqC7S1K9bxaegbFnHcMv3",
  "key43": "5r7JqERCi7x7DDSSEj9qf9bm4p15osYjK3weMiWUkN7ZW7Tv39F4zgKrwgwePxT8QsLLYoA51AajpXJGMvXrjhxo",
  "key44": "4HpUMAKGpDHHxURrskANzTUCanRopxc4xaGRCPJ23Yb3CSFKeGcyDM3ndrxTzdhZhPVNDMJvc4PEuWkqKZ8NDLV9",
  "key45": "4ixC52jiztk7Fn8EWQuzhwyvrjdNrqUZCXYQ9aqctMb4Z9Ya6ztGXui5LeY3F9qJ1Ld7a8bun5K49esvGybzoF5y",
  "key46": "3H99Kodq6TuLrxNBzhtZ6h7KDmf5L16wZ8Tm31tCCaaNvYQ4wqDA5KEFB4cLEd3DJXvE7zMz7kL8T3USy7xBCwyK",
  "key47": "62RSc5YueMJvFCWeCwD6oupxk2Keirvupgi7R7APoW8izQVu56meeFqRLRtDKt1wXpxYfypUeZKvBNcE8NA4iVRU",
  "key48": "5gGL4wQEPvAbb8B7osUkwY9nDHNAnmhuqFTgUbaHfcsiUmmv3CPaAqDj6hu8HFnhphaDpdD9xiA7oemLMeUapLsi",
  "key49": "5uprEqjAZSQTejVhzZDqMGC28GCWDGA8q4TcKK7PptTqNbgmvNohGAtZ427qfR92u3DmNTmN2YHjdoNdQo369HuY"
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
