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
    "4YCR6uGc2Fak96cfiSA3H171YtrDWCx4H9qbZUhpiQR75wLJNA775zSWToqvAjhUifsoS77FiGEA1SYGW1wWKSWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25iekaGmgA8g97PrMTXNf3woJHTyRsqA2kfqbFKjmNXLSaYKpUD7JQ4HPQYLHrhhEqBfHwx84Xp9s1PXabm5PfnG",
  "key1": "3tDhKT58TiZV7LfdvnLVynBMqtGqHT99oenwL2U2TsgJgLA2SfDTRWfftHRZNXeG8WJ6jm7HeSZAPY7MgcHHheiN",
  "key2": "4HzmwJwyfjjVps4S8e4Kxv3rrFQq7tD2nP2ohcuw4Df9yHqGqRcw7obM1ijBjksYwhaa5bnkoym68zHfsyXVCZHt",
  "key3": "2A6xpAuxTAeKK2dTTZajLfzEtBSxXBjGVtP1Rpbky5TWtiZvkn7eJgdXJceSXFoGBRo9aApVTFiWKM1FtCxsc69A",
  "key4": "2UwtJ2qeBw2SNXPVS2cA4CwQ8x1kHwAaJnzCnYsoHmKsfXbMv9prqFEAevZbMHtKZMbAYrr7cuQ6SghbH9eccw6t",
  "key5": "5RJC5KeLAa9YrVf1jhvbXYNxwUNPxong4zj2p4o5ws3NGLYhnRBoca9YDXCYHiZHqP7Rf8FFGLjBfVyC1tzLqyaA",
  "key6": "5KAGjEYjTkGpyWGDFP9DfgC8R1gSdLUzjGw2Q7yfDwup8pssenKxoSZ74Bp28ydobvfLWnFfzTVLmipRktSnBuFG",
  "key7": "23diB781bhKNWizX4KpEPBXrrKxs3t9SJncTupWPbjGnM5Znu7mtxhAktQv3ny2sv8gLSiKESBDir487e7WwhCxp",
  "key8": "5ozCh7Tq1MMvmAKAYkUKPGmzYzpoV2ef7XTc9JsB83BNH4WUMK4JfBrA9RVfUxzt5pJrvzfRYfiYsAFMJaYKzpyd",
  "key9": "59xdxME4GjPS7LJW2F1BwaHPTib9RjpYG18pgmNWAzUiJDeuvXsyqtRXTgZ3nMXhoZMdJBVitJiDDP3ANVfxwpJ",
  "key10": "2eHky3jHFxH29hWUVLpHaAh2e1ZBkvn3BkCgFGRYJzuQMzxR4VV5trPU17haharhR5TPJTMYAhEwzMDRrijSQQFB",
  "key11": "PhSio7T4k64j9nShoQG4uskVytuM8V3vqAbSfjDLfxdc8MRvcD5Tkj2x7EgVHDrb2zchEb6T5YRMHGfYQq81tkp",
  "key12": "4eLjugmQeyWgGQAR7MrNwcYAU6Fbvd7zUyaXYYkEWAqrRPNmuoX49Kt1poFfKndJRtdoMFNXYJPswnkiS7K82aDS",
  "key13": "4drPqmo8gRKQDwGJvFYRwUJnZZEwVJe9nnAhWtRoUCCJ9gz7ZVLun8sy9oL9U7axi9VYb6GzqbZzX6CgqNDQ7cou",
  "key14": "5ijosbUyFPmHwfKkKUzmvntNWJXocZnsoGN8t5XXaVBj1YME9mNhvDUD9NZFCjH5gqEGPCW3sdZuwPXnw3oWagmV",
  "key15": "HH7amf9ycUGqoQpGbFAgvHbTNMtSF4JQCJeFgn2sBaBSCemQRwNhoo9zseHuhApEEU5qP2TuCQ783jG73jKbxyk",
  "key16": "3UHWfQeXUMcC2vPWRKwr85NTVwKD3ihKAw6XCbEA8kUHz5NEtzH8K5m1P3A3RjQeyS8Qjw4BQzdNmmumxu7GJTDP",
  "key17": "2ZrgDYJp6ZaGgYtKzdj1tyn4UeFcvCbvLeQRJDfo48QGUPo1mPsCQZUFwyBUv4G3S6yhcetqUAmWp6YpG9xubLMg",
  "key18": "qYMfbrJqbMVhpymxwnvFtPdNejh8JdHn8exucKyctrsAbP1Tr1XED5tZZm1NemqFQoHDHLPz1RdUx9Jex8iXdKu",
  "key19": "5VbDAdYWVEhRCk9fKd8nJeN5m2wWdJJzvzXz2kCL7qyW9y1TwJfiACJzLEWqMqTCxTn7JRMCgpJJFQFL5rgcnRgc",
  "key20": "4sLR6m7ZBs4hwAufUu7HWvZnRCaEXGZemR789EWbcmERwBQLUaRHfZWanUautmM2sMzpKCir3f41g5GG38FA6YjS",
  "key21": "2jtLEFuDEMfn6o5jo4Dbyd2pQfhHsVg4DwVb5ELQUe3z6Dcs31AosDvrZS4GLWgygbVduDWkgUgtK6Y3YUM6d3Qp",
  "key22": "2F9AnwrodjYgHMQaSXNLBcsoKScT6pcJQnWs4FcFCT1f2BVX3HhdUyU5dQ44AiQJxVnMX1n6FtKadUWk2YUWhDL5",
  "key23": "5ntVsXwnZrsmQ8JybCgGf9KKg4nXBTyJPvKUJqxnPmjFX2PFohzCe9g5v7btR6bdDEBRtsnvkXJn8YhTQgc2JNEd",
  "key24": "XPAGhjxTo6aW1Z1edCbRuF6iGmUoCUoc8n2NdEc1AmDGNPNz2U1KwczwugfArd2bbSQaqGsFiKFMxgTcz7FEi9W",
  "key25": "5T4PtBFKpbdBm7amNwxVY96RFmgN1gdhncLZN5DwfzkRptJbtQXu7fGtLmAxLo4PUYLxfwBSdDFqwFkbLh2TKkdi",
  "key26": "5ojdt53Vax2MBmvCwXn63DgdiGKbq1EQ962MsXmsrbeHY9PaHP4KizmJv7os5NqtkPULv9L5eQ1hNacvKYWU5aBJ",
  "key27": "5u7RDppSGKqZwLq5WiaFNeSihVhKRQpaSrM6jf9k1ckWkNyHd8g5bPuQgs1uZbyfHXS1qcKiCKqUSSCCC2TwmJEG",
  "key28": "4W4DjQ1XDHMM8NR6riVo3ysniPbza9dJrdSQWAKyXKBz4zSHBS38VPiZ7oyWocRKqzoPcu3ssfCj3tKyQcch88CP",
  "key29": "5T8UQFyH4BcoQ9geqrjzW97R3cmHxzudb7KATiLiWinC1Xedaw8Q4q8DmhgZ7GrvMXU3TycFk5g5rNkqJHinwwWV",
  "key30": "5SbbRKh4Zob5d55K7XQ9MjWbesXEkTKNwHKkx7GT6hbN5UTc5oL7ZUYFjA3eos23gVogeAqsFJthhpTDGEyRXUzc",
  "key31": "5dyPZHbsBzxJvQETF2zYQa5DvWBHRnEFKgrScNFzawY3T5ueBWNXKa8r4xk7zmPLw6Q3XBFyoKjpEDkWjz6wikZy",
  "key32": "61st52X5V5jvYtN4WSmxhfrZrGvqnXmM5udoEyvDqLbcr2bRGSpCUNJXGrYSxKs5u2cFq19FXfkn2KASnHCmTJVn",
  "key33": "2kKHvocWom5MMkkg1eYCG3mwajgMDR1niCd9MNCF5JkGdJVh9psFDweZLNs7LywKkHWQ6xTm6mNdYxU9TjgbKVbB",
  "key34": "3XGpdgJsxbiinEn6WHsFm7Szavdz5wiUSAQx5Jsb7jViBBuZh65PzNjD2Lu9VcmQxwfkQk57me7ZcRoqZMEY9Ck1",
  "key35": "22h4qAaSzU2nfq5eHQRo2KZRugUGw2S4Z2TSV95NysmDB6aes46hfNjez9yAmZinPKHvHcQ8ugQNHBg7bGrmu5x3",
  "key36": "2zeBycjcvtWRjLxp7BXx32RwWqrb4kjXgaUMUZF2NkwucZb1u5tbuBPSHj69QWy6cKAD6QHT96B6wV4JWUrkFsDu",
  "key37": "LtZ9wSZLUvH3hKYmL2WhwXfhe5QNDDf5UTQQPrSDjrgHSHB2VPxhc42LaA3M6FqE7dRFmhTG1uyKuRnopukMfey",
  "key38": "rrGQHNmktxrGzJ5UhKewALD1nAaEZvatkViPGZxeMFtMKhHyAchjYy7MrwYp8EGEEiAm5k62C2NEKXzMXDQMSrL",
  "key39": "3Dx5razYxjza53J5D4t4hMDzP2Md2ZwM6hW3o5fhebXjBLaK4gdy2m3oZPb3uwk1KfZoCeuZBTDSyqt8LF4Zpvce",
  "key40": "16zjyxtAbs11Yq4aPdCFycC2gmP6uDyhLbsU6Cu6myvZ7fnXBckwWMADkbrnaSenUUE1izBPrSk4JmvGxjAwxKm"
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
