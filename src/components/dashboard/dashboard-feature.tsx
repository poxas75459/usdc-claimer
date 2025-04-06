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
    "quD7Vpi5hppX5vdcbHfsdoGXPhS1TQPa9UxTnk2TmcudHQyUTcx5F6QNX8mLkg817F2Vux3D4166E4Am61BPWSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMVQC2YmSboyDkS1ABnviBqgKSHieYzSknrHXbVGPsiT9m2qPT8L9KFu97iAiEVeYePWLRrrUZktHX49ZWCjzjg",
  "key1": "3haieHF1fPsH972BzYewLvBb8QoVVm83BNfPZ2knDHNbPPa3LRUhGnzqnysDiYGJxffmjb9s7JX6tF1huH19TJqg",
  "key2": "5ehg7Teq8YNZQYato5vjH7QVEqrKVYZ6YLUaSQ6PjdxcLC1orgVe4NkhuCK1jJ9aeerzpG4zQrxSXTNKRc2Dw61f",
  "key3": "5Cec2stFuS3vN6iL7JsZ1qVVCjBPokUZrkEtff9TibZ4Z6j9TTPbwcKDc93ZExe8sbc4yMrxnAnhKHasugzJEvsu",
  "key4": "2AgVBkDXSiPKmiZmN8AgDgFUbe8gZRt5v1cZWdVje811Cg92xHqdFHJ8fPSdBEnJYpetQyxRUjNVCPGVxigPaiLW",
  "key5": "588tH7FGm35DU43s7cFbJ5ySX4EBqZkjj7L5h7yytmBMHW9cYm8fxg6TrZKN8EGrGKVU9w3Nc26dmsxjjjwhQxTH",
  "key6": "5PqP1Moodu9TrGZkfXdJTUtGU8dpv9fo9qgedYbnHDXLYmMrMAJDm8VZghbWzUY6YLMUgB9GUgMcqi3WgSsyJMvT",
  "key7": "3x3TLxDq2c65Ws76y9Jd6soSvdHP5gyFCPA2VWqAdHvi5KBGoqYWerCHQaPLezgYXkApbfDr5Wzui4KC1zahoj6s",
  "key8": "61TxuaJrM8CywHpqxzh5v8vzaZyAzFioHqsvnyz4Ngkuo2zcVts9RVarTj17r5nxkMSgYEdKmHvi7CERoNtZcW1N",
  "key9": "5Eu6k7Gkwme85b8sVPpuWwo8xzuY9zGaKRgiFDUiiF3PtKNaC4nwrN5EbsHyXHQqt9YuGLAxexs8EXajPp591HPm",
  "key10": "4AMjJY12WciFKuUCTzf8npVkphCGVva9CwWNVn7jpnfoN9UPJ3S3Wvys49TtPY4QbYRX9WHYer1JsBSLY654xMPq",
  "key11": "2Teb9t1cQpZxtSZ4bb3youm9sd51xmLQceq5Zs7fRdYP39tDQgrX6wC5Xfrw1ZZKpg4Bju72H1PCfT9NK8AMqyNX",
  "key12": "5QSGJiPFwCoc8HfVdzYZ1gwsdCxLswqp9HCBhVGV4LenFJXdxqKhxbaCEnRSyaBdwKxtSNHHAEpWADxQc9F8xNJr",
  "key13": "3FDfDG5p6W5EJnfr9TYyjTYUhrWcAebu21oEe7DKwpsxXGRvCyLR8iMHx4WK1XXHfykiKM1E1p9TXjaRvm6N4WkY",
  "key14": "4X5zwKbJHY2dZbM9aREAs7erDA4R4y65zWkzHAbfSuoev5CgR1tf4uZ9fjFLSHbjkHJ9knisvANRTapwuHozCqBf",
  "key15": "5mEYU5A7b3jatRf7NmLJrmPzLqAPcqVFNv6FKDDpWGkuf4UKsRWFK6tuFkj2dWhhpvVZfy2PEvDzj2iG8G36iLH",
  "key16": "r2hYPryV1gcdjk6H4ickCJn7DtVstQfQSiY6gb596ge1dZSmZed8nB9TWyvKJHBrf3BVWM55pPMG4sKSoeJVzix",
  "key17": "2GwNV19gFc1y5Q4gLbpxF1bmYiafJrpNX9Xxj8vLnSrJryNVv3ok4MkW5Za96H67EpydzdHbGE6oErTjxFNK6Hz",
  "key18": "5hiVDiufS7WMrfJoNyrBGYh8EV6P5kuSjKw2uVwaRo2EzR33YKpkxVTTJecfkLPguYH9y8CTUQG7vDTXanTk21dJ",
  "key19": "4wCxGm6gjuXXn1uTScTnfENrjsEEXjyrRZVpja4XEw2ByTSmh36oAsjoHG7Ksk4FzShfckrKjshmeeHu7rYLaF51",
  "key20": "2EHXZUNNJNKd9Z3H6jYRDa1U2uiJRoaQ6d4rrWjRwYuCUygd4e5qFQjLbHTEDrvqNyfUy8dqgtEBYomGux35GhRi",
  "key21": "BaD3ErmziDx5AXxm52KiKFn5f1oGBUBMnQWQGALcVe6HAZgNm2Jz4ipYHqACM3E896MNvaNpkjVYaX9PNBofa2F",
  "key22": "2cdjfomp9h6ziDgGc575Zq7KbXyoh2KsjzQQCTja9Bfp8HbZ5T5DAuxhae3zbRJXcVVRMdqBcc3gjUoKFvS3GTeu",
  "key23": "HyVH1tZ6WSba25t6ovKy2gHoaNUnXWuhY1i9R4Vg6DMemLqG5Zd6tuamfyjo1Q6sby95QuUQyghEeYppDvnhgmy",
  "key24": "3VrQTjJK5jEKe5mnPyuRqdMDNLDnCzKTacU3dUyPxFQruoHHhWWQ8GZrB5n7yxx4JDcdWZ25zAdy253aHxYjqMJs",
  "key25": "FXqrPXStftXkoDimGy5q34PiRbRpiH1dXBs6QhkzM6bo2Ky6SKsEZV28tUsGB1QAE6aMdz26GqCWUgnb95SC7HK",
  "key26": "HXLNK5Raw73Johe87VpCXJTxxYiFTHXFGZV2qJsrothSLFRD32HaAzc3D1XiaY3ATPAicvsaVSrQNgW9EurXfns",
  "key27": "2AueVVi49yfCc9ForaNnSZknK5EoHRbgThN2vATykYt5bS7U24W6h4WctX9ysRTfuxwBMqRX1RMkw4E3STxgGQeD",
  "key28": "56Yf7x4eUqAfkdUbHBkTJCXY15U8r3JStdUA419FfszYoEXcMkfx6p2DMmXeXWb8mDnwuTkYNDBhn6TWvhisfmGg",
  "key29": "5KSxUtQ1woCS2JPyQtFRuDfgM3kr456ZLdGUMtU558HyRSWcmoGkZ7BCAXRKVoy16XiDTYNiLRGv1ZSPVRAVbipb",
  "key30": "22YiJxBu1FT3MURBjdbie1c2y9V8nLXsUnjfCk1XcyAw17trZwR5wwEUi83gHHLZFtdHjq7WTxfKXE2BoRqvMBy8"
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
