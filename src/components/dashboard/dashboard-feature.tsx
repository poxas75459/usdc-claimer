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
    "2ex9UxVvrkqmYX8a8tMR8YjxP4LD38eBxvtByU7DaQSGBZtxceAhnDKLb21tpuFPHUzpng71TpHiLeBkVM29onRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVxBhjuRyi6xSyEHvjLJmzwNs9saPEDcmoAY3WB8ds5U54fK3XqCj7tT2VpVut7aA7j86ZAVUb11ZNTWLrGTVAF",
  "key1": "sVritHwcRVmdkJutHLC9a7EsB1zS3CS8HaUzCu2qTCPcJzKNAbYU2G3y1ydk36nPfj8jEyLGY68SQDnZTxc1Zwy",
  "key2": "7V1kc7sgN7PpHLR1mN1J1pKTiMaPoZyRYTdVcRFxz9GmuR6pxZs5u8P4QnqUDJ1Fiw3AKgZ2VQFWeUQ9Yk8iZE9",
  "key3": "4wAjJ2ZYUE8erayUhCLTGJHNrT91npQNUHcSFE3c2qEDnkgxAc7KjaL69WLRebJepyoYaAZMWZXURVkHzB46dv6g",
  "key4": "5QFVngVJSodqccWBxVGvm9F3ZN3zhQYGH89BccSxBQVHCuWdFjqFwGPDeqNJa1KeXjtbLYdGuSDGrGEoKzWh1yFB",
  "key5": "5ZhqcnyefTc7uXjQPxpScLRgVerjbwynzpHyS16KtbS5Ao8DyDXS98FkmAG4cR3g1GABPnxGJRLwy9Yonaomded3",
  "key6": "2t3a8aibWaYz6oGa8cgTGrwPCktVDoEqj7pqPeNqoVz39dr6GjJRHWztdbB7QnJePm4NsGjtFH9EjLQ7FHHsrSwH",
  "key7": "5b7Dkafd6QXqoA2foWmKE6mQ5cj7yzbZua5PqobhZd8bsimSFQCksnCTQmuA2B9Pxn1KGQ79sUftLDZtjKqYgAR1",
  "key8": "42vTXp2GRiVfZcK6nF6HgWcn5SwpT8pCSBPPqSeR6XBLMQaR8jCtampztfgxCXaYsRT5WXC4Gw7o6AY2zJQQAkJj",
  "key9": "3TfhNgQwVwp7QgX5B77oUADZv46W8vtcQKkJH4jhZE9KiUNuBtFb3FYSpi3KsG2LtxqhMCjbgBSbkdbbikVx7rX3",
  "key10": "3kykaxwdpG63VJWUEwsut5NEH3qEts1MByKESDmFaCoK1YCx6M6KPPoCEskG8FFdHWVkFso8ejyudPTpKA2ZvVmE",
  "key11": "539ZzuAQB4Bwf49AMMhNV1hgjtzoaGwkNgskbQh9kTDXwirwcrtNhQhsS9kzKQK5wxc5so1bcAA7DXKopHaQtF5H",
  "key12": "4XK6LsZm4iz8ZfvVcu5XhotT5qwPfL95Jw3yR8qUDc1e6ZBwVRomdPnt7wV62bYwhUQzYMVdkiyH45LRKDFF675S",
  "key13": "34VWeQoV9NG9REnTTPEHhjC9krXBZm8fR3QEY5UciMvyBxj1SabcBHmCPWYpc1UyXKdK1zAUeMM16xVg88auH4rf",
  "key14": "2gNT5YwgemM2UU7JNqEnf74ZkSxgM7XW5o1MsfyHHttgxMENJbwgJrRH9CRJc6qHmmkFK5zRN3vxNJGXA3du6kfJ",
  "key15": "2V2v29xeMgLPQUURe2Q34MmtQHSgfE4TEAijfq3oWLgxRAKydoL5bukv3zQ1T8hJUuDRsY1uM5Eg6qVHFigkY9Xu",
  "key16": "4KQ7PcKUiQxonfJAica8zrx9b3Zux5eix4UR33pvKBPMWgRiTwQT8tomZqC9U3BqfhqnnuDJy6FpKji1pfYEwaYk",
  "key17": "52F1yVn2YRF1eFLBMahf1ZHKTCBUAC2PxdxyDiwF5WVePaw6bRosBLG43GGskPHsRuxJd1hNb99VnuegyFu1drgh",
  "key18": "3azKNewmF5YaPqEveXakViFovmpJNAZLDq8Q53KuMwtGvtVidgVNearTZECR75W8QJzM88LXJtH1T69umz4yqsbL",
  "key19": "Pqrb7eURPHTthuhHT3F63eY1MYqxkgffKVwgykDaetZTbpEQ1srcNd6A28ns153DHWKVNGgXiRAuLa1ATF6iQ4R",
  "key20": "5edwqYrYswQPZKytcPNHbyggh7Qdtf9GRAqNQR9BFeD9oLZzjMmjzcPazDfd7V5PbCByXhJhDG29KkxbqcwzstNs",
  "key21": "5sVzrkFg8oNEoCESALAV71BeyfpxHc9zZ6HTdJonR8a2ub7KtjPcZKQh4tKLBmJQ15yELK9cJubzF8rCWgT6gBa7",
  "key22": "4dh46U7sccBNjehC69QVJTCcn2wZcJVtNEH659yehMoucR2mCg3hLcnkuEVFcm8r9QFeWcuiRqKi9jobijbAWAfV",
  "key23": "27PAUmuzSwpyMUPXPesLnKHfnGgCi2gT3wQ2EshQKwWx1LvFb3eVrMSXKPfk7j5jwLCcB1vkrKubCL7Dh1PFDHh3",
  "key24": "LG1izEvDw3Ngb139MGMJhcCn7jsjFjkGuchoDqSuB7bVkWhxZBi1tobGGoeLxVfEXAm9Uyjp4JaZYYbRwYcKhSa",
  "key25": "5m8xSvzs5BaaDzYnJLW8epr77aEsDQL9REDNQgfuRJoEm4Rx5P3nqd3YMPL8h4gT8vXXThTYWpQWWhvxt95s6qAx"
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
