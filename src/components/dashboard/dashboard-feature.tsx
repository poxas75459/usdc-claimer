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
    "qj2nwaDqLP7hT3gNZFiUANdvB5BZvSTLL5T5WffPo4ByQzXtsp2nec26tj9P3mNg44mHJQH7o2KV5jztonENpeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqERqvxBUCtW21miM8wkT7nBKdpuL8cxfka9gkEhk44eEGFoRUHf2RzDpH5ckB4s3LqvpxkRrc2XtqQNRqBABkE",
  "key1": "5CfjEunT6o6AA3qm3addabtP1Ctk1tKBvtu75w2P1JcSNKauadnfetdrS9EmBAjxYHv82GxNcV4dbzkQb8oSbU6r",
  "key2": "qSHBAjtFqgQKs2Ae5Sew3a4D7PtWVyg3RXGibCe3GSkuaYFpUcL1aKzibgrzgRNatLQukhm9myaj5opZwDy1Rf7",
  "key3": "5BoFUVbEF5tdg43mjS88tDGfLeKRQMJnA3aVE8sx5EGvVfKktW7xPNUKbtqmrxXLdnuHZQn6QU88ATUMfV3CKV87",
  "key4": "3pVzU4Kyxnz8HjerUkwnL8HwsJ2do6fbZJsUHb3JUL19K5yzXVZPQxrEJa2LM4EX3cc1PJjcvhYHLn3e8GKhLct",
  "key5": "4p5cETMHzwQ5djGJJtYVnkLtZednM4mLL56dRHmGYXunzG7Js5qK1eihp3VBB99AYz1bDhtAzWgnUAU7o1jtVUz7",
  "key6": "PeJyj2dfNfB6hmNLD1QAe5xkz9AvL36jjrt54QKZ1rpZAbAkRY1vA4ghoBMMHtq1RKKJDWKPjJ6m5N8bDFZQonc",
  "key7": "5UPS3WFua77dTBQ1eipS2363M42PFyq24sJ3Gx34Es1oQvGu9VRckfE6PZG842ajymWr1v8yuna9paN9JcyEdYYZ",
  "key8": "41AywD2uBEsuSPwYQGJtekYHC1566Hzw2QMkBbA2mDWXsSN42TboTtmE5NmN3Dq9sVi5H74VREvXn5iU9fMdJD1q",
  "key9": "5hb59JkJBhXvDj7B6KydJQhcq6jjRrrt18srpsZPF9HxXwDMFXaVYfnGPv5F2DyfG2cAiTGr4S2MxZ8ezT9sL24Z",
  "key10": "4i28g74PbpasuKuD74tJGUXAdxc3aAJSoCrudZ9STD2SxAL8zWB36MsaTaFbhsZzkg4AD8bqDSzbm2Gc1F2qNWoN",
  "key11": "55VPucgMuTDQ9nG6B9ob67YJ54iUw2iFuYKYt6q4qrKUL5VnRiEaDty2gwcBVtFskoUNDbwKwrXpbcuGjdmbEwvM",
  "key12": "fbJZngSxNRASPkiQsjFMeobnZG8zfPB6s9vPnwG9xEvUK4WH2Toa4rZtV89d1By4pF8ViNYtE24qHbirhJwBBw6",
  "key13": "2e4WbLQqGEfvxsucpSGsZsDKgUq26BwyD8ka1tGjsR543gAYqFvKVA6v57rdDSgnZwABbPoiNfC9d547pQbQ6Q7r",
  "key14": "JMyfhcffQSDHvoBap8W4sdoo4mKpW6rtC5W8AmF4LgjxHS8oafhQXx3kWaMHnBmaheEHB8zG4VL1uCrEKjMj6FD",
  "key15": "54XfFjcQh6crfnY7cGjFaq312jP5UH1uTcs6hTBypkgFktE8YPcBpb8gZbzEuwfoJdZDMQzAaGxknUraYBPPvE3j",
  "key16": "62VYCAB1vaonuHj4xmeUaxVQybe3qiA1Cg7NQ41hBjXoTo2VWF8RYdWqPehDTjXFp1tBh32Bq5k6TD6MLpkWAFnL",
  "key17": "ixUfmWwB1Dc7nXsBgdaXdV6qXQbgRdXGuqUySVsPMeGHYc3z413FMhhPqKR4NgAAewnH152dPFeEk8EdowKwJTP",
  "key18": "4cxaZyQqA8Z6sa5DjeE7qqnpWiWM3hV5wiHYsuiEUUncAXMKgUVw846j2T6A2xa8ZnVruePtvxW1RjNURo5aNLti",
  "key19": "3Gsdr6CMtRdyPq2MbGW9PLx1UUcciJE19zgUzPYQyRNfDMzcNBnBMBUChhJuDQiW1cPy64gsjZPDoZejd9Vuo6tR",
  "key20": "2Z2UkJeU9guCAXJj3frVPgguBxpMrnLaBDWm81nwjaZtPzXQQ19SeHdx5Ug54DH2NKHxWSYT3kUDyn7UKPj7ViUA",
  "key21": "3eAvdqWZpsDuiz7YovgradQ6fyH9rXCR8fJgETidmnT6svAa8oHJtwYmJn3qHKz8ZuDKNp8Q9BpEHDzrNJvjA4mZ",
  "key22": "3LY2YQiciodvwTzcb895VzEGceHToEZkV3bSVAV1T3h8TgHGJBHdStZndsBiuCsAAHa7tyVYS88ncHGbi1MtdznZ",
  "key23": "3BdHdMgSRp7K97FpBoHj3ZyPjWn6cci2XaCpR4Xx8QFLXEvEXJ4VZ2Emq5sBejXmFbfzFWPmTkqVJEmpbsMzwxq7",
  "key24": "GJ45JcfnRkoPWPGg9nY5hFq4rCjdQrkrit1VLALg5MwFQChxdMkSr8GDk6a9ZQWt5ir5qdYdNtnsGFjAyfrNsZk",
  "key25": "3XTgAoUuZQRRNNpps1wuLgHopEw7KZyGW8M9UiRLmADUzbFQHpAfvKVUy6LETgLbdcfybcV9ToUVfHUbwcJGhskL",
  "key26": "5vKsTjizMbh15o8nMqhYXtmi2c5JFycZtmXs2qGPhhgiTfXhEnZfoTCJgBp3gvc58nF79rhUXEXBayc9RXUb83Dk",
  "key27": "2suhzcDtQsugYneh8bSgxp1o6zQfr6wBthS21oNTrQH2UZSyVhwSWCsw9nmCQpWD1smwpfyAbFmwuHvnnhyhNQKj",
  "key28": "4iQUsPvSAgyN3VARXq7qighY14e8qekyhbBVDQ2WxNngmwyBsppbhQUHsAHQEvygzpDux7E6P7bDF1sqqqMfo3Gh",
  "key29": "5TSoZ7GJ3UdVY7gwPtKwU8ymUSLe55MVWiPk8s8w3SXf7csx629vK36Au5fpzXozHXGYPpeAxd4utgUh6M6JqHfM",
  "key30": "2CMkqVfRtAySSud8DJaYq6QtjP5DAGC924JHAPZEh9LDiCYja8E8owskhr77LkHdoHwRbXxBBuKjBS3PH8DHoT9G",
  "key31": "3QjkrUNmhG5k6P9QEcUPuwAY3HXSYnDim4SJzAbXAkCAu1YDUL2Xs9riqBTMeu5f7sLhSH9DgmNyn6VMQvWpLihn",
  "key32": "t2yARMeF9BTiKo524BWzLKGHD1TpeTds2YwssHvLkbTDmEseRbdKehwTma9X8tMuhBX4ahtKPVLENyxp21FKzBi",
  "key33": "41wUBkRu7xn2Sunta8Y1LMtijnRrwcTWKK1xTp39dk4VNjRpntKu2ptCYhKeuHuj6J4os5CFmtfZCgtEdVYEynoM",
  "key34": "2ALzBBLv3dB3gcGBK4jodNtL4gRV88A6kcwSpUXe6GrZ1KUHiiqZLPpHYEu4fLStP4PsoqwEeMMpV4rFFzbcjid2",
  "key35": "39vpdZ7mEtK8P9tTYvQMZzSX7LYS48Dxj8y3MuBNG2duPwdHKAwjJC4PNC93QHmfR8w74gAJCD8LSQkuvzef6jAJ",
  "key36": "4BnJiyB6zzcnr2uxM7ECt7DajaMpW7T7NRD2rh67dUMQLWfbZv65eT52zD6F2J9kYiQJi4fi9VUHcpT2xrua277p",
  "key37": "3VPUKRmZPdGcp9dsQ4GeHkqmW6geAhchuk493Jo9atht719tynMSVvDCopxoPxNQ3VSymNEnHFgQ3X5Ts5DZJk7x",
  "key38": "31aPYVmfPGFJGoQhzrUcpnkzxZ2BLdvheUmEacZYuvttPPzVraLj928tyodA3ZnDHCqcxpdgpPfVA7YdoCaxeCJy",
  "key39": "43hgjxXrA8dWpvgchRbSJL7xrQqxYQrapdik92fzd2QbXeYZpbNJHKA9fxRpMZYALx56hbzTT6z7z9vVjXarvMop",
  "key40": "EFRQoKhC1zx58C6DgeR4X17fur6qe3yC4ZESbQktVJdJk2cRbaU5vRAso8viaDMpMkYGK2GiDxcP4Q7LX64tKQZ",
  "key41": "3AETKsnbo1NsLxbcU9c9NeGwSv7guaa8DFJxyRBqoMDgpSrkcP1FiKsBXFjUXrVAVmQQ8ay2xSgm9NFzv2vxkdVJ",
  "key42": "LSRyee5NEKJsqZ8zEJ7sj1xFtqjPH56aip11KdV4WRbRgF1sm9h6a7iunBjsc8m1qohbbx4DMoikSRoiSS77nmH",
  "key43": "5YxduKou9kURZECVZH4ajvHLXgCAsj6Pp1qnh8xEvqo8izW5jFZJBcGw5oDDrn3WkXQ2QTpusw8uHtngxgfy5RkA",
  "key44": "5HQbTJpC25kg6g5XXQ2nqrMz9HJE1vcFF9Etr6a1u1y4d5ZS8LRYTCcqmEbHaXYXGQp5hKswUzG5CLDgtgQ6fCe4",
  "key45": "mhB9Sq37vRtQwh41K1gMwRNtqhonLisparLHZR7kDq4C5D44wyrW6PD92vz9TEdoGQzvXxw88juLYdxiyiqHG3U",
  "key46": "n67VinT7qkKVQ4J7DSeP4k7JWSPK22wqEQiDQNbpt8GPWYtZv9rZTxFJxNnJvN58HkcFREyuqnDaYNkdQZ9iC7c",
  "key47": "4xM53PX8YxPVnHpZjgDt9QhAidcwu53MYM3iJjK4oSYnPVDfUgYhEWSh8vicAN91FA1EChvdBCnPkVUikjjn7Mit",
  "key48": "2PoZDFEvKV45L92PvkUv9xgTBK9tKmeWTG4AgPdenVzskbzc2srDCxdy9XJLwE3mgTa7mDCC8GKD3gf92uXF42W2"
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
