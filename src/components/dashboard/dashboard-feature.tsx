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
    "qX97edrCAbroGamCJzSJVbUZzASN6QRf4c74uJQbvET944G6eByo396tnGPsYcJWys5mEzmEw6JUTgZZL6oRgsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wcqifUYjrHnPKY1LpiRV8rHsnHa1a8VMiJAQGGBKRhry9g1Pz5M4A2mcmmyntYkGgbAxEpuGwC2Y4d7V5ZHbNK",
  "key1": "4bgLKXztXfvPr3hJkUv236Wh2S5TPZ1JzjdiUr9GNjeHX62Lm43cFcYaS1Enaza7Pc7bYiffzBhvpDU8bmTuKqEz",
  "key2": "4rZpisVjS38u4SYPXpZ6YHrfCgxnEafXZe6dL1Rte5fUU5buSuJn3dzsTQTps7MEfGiBdPuRBSh3CG1smjArigyi",
  "key3": "2ERhwB3PekWfNncpcscHtFYKpmLn98bhBTPyNDETocbq9SrdWAqkEJ3L4Dz4uXCcZb3TrKWzpQ7v2L2szgACeg2C",
  "key4": "2rxMYw166wjhdkLbwgjBgwKKyAm5TT1hqafNy32MRzyoRcSqzysXkoGr2MY3Ys9dDFpywqEhojx2LquyJkXBmyz",
  "key5": "5jTQoYVJkTkxeLqd9SiGiNnfgLnPJ8VLGmuXj4tTjEBea1UPwPJdtZ4eNqDGZJ8u1P6FedGf2MWCs7yoAjvkFS2H",
  "key6": "3d3fF3ty9szAzXJKbuJm9WimkriRS7fqeVQ6oYD7caoAnYCM93uR7jebrEp4W1Hn283Z2d8yPFibx8ypGnmXM1oD",
  "key7": "4qS6JiDa5ita8mZxiw19zhEyzHyJL9FsSy6Wthka24hLBVQwP1wWpQwtURn732LxJUk2pnxAUG4xz3aMHEg6dL9o",
  "key8": "2iZbFzJsgTN7h51pDZ1oCdoN4QdwPcHpqNMd6Wcshz6PCwGkkZWABjxhWEBxwNixoERwfbx2ofQsXLg4uWzUJT7M",
  "key9": "5ND3DhrQKxxg2SdnyJkYmUhFLoiHcDQd3DVKaAJ9DRyJeVphKPBsJPKBMKQV6Z7zZ7v65MvKQ8nzwj6vHjUkgAJs",
  "key10": "4CihjJgvkVDuFtbbG8sggVMnHbdPfm4iawq3TM41p8d3FoZCzqQbfZNR1km6po1a6mBC42gRvH7JhXQoyYX5i5Gt",
  "key11": "3egShgbRpzKLzqNjR4jBcTTjPkjJ8k4SXXyd3LPXnvQasTosErkT4vmaiR95sRkosbfbTZkWs4SkYbjLeQcZhUre",
  "key12": "2a8wzmGSE3tPwTosPN4q3tbdSVj3PGVTZFvRXFhpXefWq4xUFcKBUAZhTd8LMNuNEZC1dmXb5hfivqXEes4xvSmi",
  "key13": "26ZX7FKebedt2sEStECJGXYoYW6XAm5NArH7B8N1ZogV8bnFFeBu29nCuPbyJWJuLDGeKdKAeHQKdqNTzm3ffZGr",
  "key14": "3v3LHaqFZWLQMWtkrP9MLHYP4hLa6ovxMJktWGcm6nQtYCtL2A63YXgPBTNtUMtNqMj4Dxefi4SWk6dDVkkzPpVc",
  "key15": "2XaJFNo6YQcLAioFn4oAg5y2q1x3SFeptzy7nsd719hetHh9rcMk9YyWFPjkmaWKnMpFFx3UR1S8HaCgPwoL5gPo",
  "key16": "h9nZccGVGnoSbRkLyVbTjyQLRfxyMcdKEjiHGuZxhbgUviphVpY6CKUFH57yd5h13scgmy7FVNdfWXRxTgvfzST",
  "key17": "336bcvU2P3N9tLpCCLNyfXv1K1kppzBrKw6MFwQgCtKLzFRyv1udfHmD96YwXspsUET452wFbzyk5HsyJqDpcXt",
  "key18": "2kLq5xG33EvnY8tooVuMcc57pLQFFz9WAPU2wb43z1p9L71WZ5r3CwNzyheTPSxBGwCaUu7MQx9vYuMtqJB3PZnP",
  "key19": "Hqk1ux4z6UwLGBGMEEwQGkSPUx7iPt7goJYJSuY8NvW6nA7S3HoFAdJXGn9RcP914cp1PXYgUy4wBF5sLWDLCPx",
  "key20": "2MbJYKrauMtisX9hpAm1rSyxqpfP7yiWcKKKSDFWzJ9No8QnPPnUMyGaoDkTjEHLJMBUQZfo9f3HA2BU6VuDLWiv",
  "key21": "2JmHZ6iwugSJ4jBhDTVNd3jANCqBGS58Matote7osm5BXSyMECsis4G2mQok4NhpGNDyeG9rvDo7BHscz3CnWdEH",
  "key22": "3fyJnE9g8DGopP4tnprtLJ1994AGCm76DskHKirVY2yptBYk4qRNc8LsNPYiX9xdVAzyfJ58vy4mnxUxSLJkCvCR",
  "key23": "27ACgiBumFubPNbws18xEFSTXUosBwYbuhb4hVnN8gDzu7oM9WBHNt97F3JoR5oUi6YZqM92g9Xth1RbELb4vxUH",
  "key24": "47fXGenjdXoukjLJUoLGniEerLPJE9tmVmegaXnna47HAafRo6sWpdBxAMym5Bwr4uy65YSanqmuJUEnfudf8pYu",
  "key25": "5LNpCYaNQ1SmsodRDNXhaCJX1xwEY4LRwBBYNgh4uLwe57ArxiVZZteafAkLQBWsTB6AyHqW5k6APuFVEdQHhE5e",
  "key26": "4cmYX8xgB4ACqPvW4iM81RG5Rd3Fg2F2ds3SyXMWB6KuztptoqKA4c2uvRrzjEjfcVNvLLK1EjUoKrS3CRFeJsYG",
  "key27": "3gjmhcCQHMH1o1SAccuGbScMsMPuBTsRFRZ2fmZqzZXdqXATKVerB5NVcrz8rUwLYcCg8NzvKzpYskuBszqhhLdx",
  "key28": "2MpUqsbERYnDybJDJgC7YvH5Gndgawa591wQhZGxvyCHjyT5hSHbU7xk8rxFjEqH5mGrsC49w1XF7pwiX5nwUzmm",
  "key29": "5SEWy5nVWNbUBDbTgY1jG2NrkfepCw3s7Z8u3CCynbK9t1JguNmmv8zewdGUCBqgX6MqwrmvJAWxocbtcBusMshY",
  "key30": "5boXyoiF8rekXna8WvqptaNjkGEG4JMRmCTeMz3pxSzdbcC1jtT3vGHX3wQrPByTe1ZFxusAyEiegJs9AQg52Smj",
  "key31": "2vnz8NcrobDtxmrovL3X5nZEYKGZduJUdghvKa7E1Zo4hMyEu1bq35SPUq4BWTy5eWpskCTEgdFEcpdNtUx3FnVE",
  "key32": "4JigDoNppvrLEM7T3zaqdht4AZhMgKMU3LjMaSJpTqP1k8Tae9wJsxZfyA5uu9QgrUAMqaGhoQBKCDdHJqMcx2LW",
  "key33": "2qKnaNXpypiT29vgbGTnWLPT6XBNMN7yviBpPw8h6S1nfwdWERJ587wVSQzwVqc3vsdNnL3S1z1JqWQ4Ph6oQbEt",
  "key34": "3v3bMgZgp6Zj7MnrFGNVzh2CQ1E8yg3kNHxFb18WsG4VFF9WjvGBTX81DSf4kYRTxJyGGiNnmf3dCa4mJvcFFYXt",
  "key35": "5wnb6U5zJGWXFRU1oQTHnBMqyhNECtFAb8XUv999tBNqzFipQ39cGFHAUdDdqdVpL9QczwkB8ScZpW5tiGdmGuqc",
  "key36": "2dTJ636qfuBw1NqFJnQj6RBHUevtoQFbaJ1MmYMFmB4b1R7HFfEZk7gZXPUwABEouDC7zoxYCPj35YNkTduQhjM6",
  "key37": "4JwAHGBjTTUVRUwxxeR92GiVu4uWH8Q2YcRprGNSyB2mM9PKXrm6R812ZmCgCR7o4FjZk64gM6JYH1Ry5k8R9oEX",
  "key38": "murcthf4n8ywKQxTbJCN2R2cpD7VRNpjzgDbR6fkVnF3HtAXn2UK1a8oUoRAYzdPBSY44Afd35gPCz4SENmTjTk",
  "key39": "3DD9Jp5YFhjjeJqHkRUF2Wgb3US5EKwTa3vcN7h6WZkPeS1a557V34FYeCPvLiBA4QSa6MMmwo2vdjS3okMn9Rdo",
  "key40": "4RkonutfR1HnQHL1tJjbr5CTdQHMska3xHJj9PdFtLes5vA9EGLRcJyfvJsz2LvVARrHoJuP7bm4fJS2arVxMm5U",
  "key41": "2dUW6QZZNy4mAhLEqVZnGZF2aFoDbiuAeLHc4jx2iNPSTwpntVEm6mNBpuEU44FWAUYhyLPg8R6BoHLEBGfhwGBg",
  "key42": "4WSXeQ2Dw12oNFHF3FCSCdyFkkhDeT5PkYkToDZwwmK76uAoNsM7bch1TTEgkU6zp12mAox9nZwhojhpjvL5LtjR",
  "key43": "36ur7dzZbJaKG7qMiYhtsB3FqJyFRLJdLEm4SgriNLzrmypuk2Rz8xR8D3QTqaRTWJLb8zQvCWYJcyN1Jd4wVGou",
  "key44": "5phvxERubKTftgT4Gzr8WSn9jqf8xzzTpm6jo9eD8ZLWwuF5J74Sttg8kwoqHKNkEzkz2g2Ck7W7rvJiE3B3C8P2",
  "key45": "3yX5iMBPnLqfy3ZCiPWQNddLBP4enkNTgiwXQ58k7nEYu5ZSzGY2uaMd4hyQLyuPtNgHbYa1GizANXhLVN9Wxupv",
  "key46": "3vmJ1PxDEj5fzEDAczwJGkZBqFDtTxxhFTYMDQ137sUeQGonenbya6R1JRTJcGE4njbJZ65x3KLnTaLGkRAUupiT"
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
