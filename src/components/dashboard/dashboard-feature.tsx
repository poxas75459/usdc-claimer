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
    "2N2n4U4yTcgkjL2aWqiyJRoPB9fT6oBZc4Rs4gvMwXTtuBYQKcBHgumE3gzXKDqV3pepYHHNT6tCU7CzfQuWZhSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knys94ixBHQdBvh4GQBFnx6zLLTiZ3ngPTZVwShp7x4ZZez4mZfwtDx4rkpTn9fNieVtydKMz4CTwV5BS5qZGXE",
  "key1": "4Rw8zvW6LnLgeSVGBHBiezHAY9UgJFp1wmecuGtXuWFLSv4qBBmoWHuPN9rvavVLQvxwc8ADaB1S28TZrQHaRFXG",
  "key2": "3k8uUXynXWcLaAE1QV1tHe4r6eXZ8tQnphQCkiggaKoRSLLCrgj6Lymhrj53jcFN5DXEEQWXcHQEyNm9dq4VYKvy",
  "key3": "25Pyqqr9y9hwjKgAobzzR2nCVmfUsfupJYuJzTtKQrVSYMNne7M2GsuNMDKhrjyCRBwL5b3FRL3W7HJDGtX9VDCD",
  "key4": "5UuWJMgb9zTyD6xtRFEEg6GXxEXRfR8SSZ7p217w7zNHW1reDiFd5Mq3ndNUAeU96irjGQ7htfU4EEEbFogMFqQU",
  "key5": "4kb9SFCcuYeCuPHu8eHcLJ6encTnR14fFHkDwsrBtcDzFKmZaKsxBEUcdDe52z9x7PAidj3XArgawPv2z1wsayAW",
  "key6": "67oV9Ynbm8GcjAiBcqb4UY5muvxP77BZt5CvkbkmvCDLuCmwRtSLywZeP3XLNC4KUu5UDEsfsBZfiUivRBS7nVnV",
  "key7": "2KyQyRV1vX1Vskx9JGdupNQUpSai4hKoZQYksbjdTit6cb8rqSn5qUbH38Zvbv9ieUwnBpbwugCfuDJwevpVZSCK",
  "key8": "2g8JGZhKSdqC8rCFFtdQ7BSnRqXMLfY7QBAJYKtKAEVNhA9Nk1yDgYYQHKu49V5EFzrhqveHDdRAYixcxYbXC4Lw",
  "key9": "3ey2o3htPNG3RzYaojnKP22kDozVUQNPfSS6uQzX3tVned521T2YTwnwPYhTMgn3ZC6J1VirhSzm9fhRLbhShfmY",
  "key10": "5QSrmXq2hkraMZAo54UCuhEwP8LmaheXjfwAH8Zbv1yGd7cUUXEgWaiVqwRuWb8tqYHuBMKdPwFCTE1jG24p9BRW",
  "key11": "3WVaVnxSeAQ4WYZCFFxYR8AvsigfRuEhXNZKBkFSRfZ6iLtMmZgBgFXnNrg1VsVdzMRzUT6VXYnx92xPYJ6Q1E4w",
  "key12": "vKJ7ydzNQ1168jTeaPdC6PbZGiC2npZgH1xA9yMbH84qaYD9TfeAKwn3aKeHqineKqkRA7dprC1U6PqVg1K9Kfa",
  "key13": "5DokfhBaryQTzUdEvCjgV99kCUxRHLAdTPt5zPs4jPUgiChiuFB7xREzMBqePKSYdgyhcpf22T7bYkiwoh3nszFG",
  "key14": "3VXHmLFd8kq9FXLh1GQ1FZMzD6gbgsBGYM2Gz6NLG8uUuHYJ2UKHRSAuTm8EHyw2yURES7zCtDLMrd7JwjV8XpTu",
  "key15": "47LjcVzzqKajufmMq5YUhbXHWBFEPQLjna2v5Wn81azW7XXd3z4sLjCZ5HJ7GQCWjAD19NsXvtaworQwVprGi7Lw",
  "key16": "5DHBzFxZksrgWG51XM1BNw3dURq3kSU7oaDypP6qizR6FPbysaykayYoh5QZgHPV21jwjJSnwaWkGd8CLcysym4C",
  "key17": "4sCXV1vrUjkYbfvaeygN1yqs8U7T276VRV31N63dLZA4sy6hanzSEyUXgEQQmbznPvLRkqQapfV2xXs1tCoyjvCz",
  "key18": "2ZQcmhHTtUo478QbK2ryEwJrGaD1Hw6qVXCFPs8mCkNvz2Mc97k2pnKdwEF3WXj4CTWZMo9ahEwxMQp77GZjZhvg",
  "key19": "4kheUvg8w7WT5XfcpDMm47iWH1qyHEZtZNodwJsj4Z7UufqW7fpxssmCKmja2EcPgybWh2NbQGLgNYhYbGJKH615",
  "key20": "5W4BMPiNFCzrEXmPCNBATsjRa9vkrHzd1LCYAk8k95HKMaFwSdnpjyDjLS2ELP17P7ZwdXFiHgiXSWqhj1P47Juq",
  "key21": "QVM5WGjNmGJJYL7SFAPTjdJmya8hEnXfVrWq5sL2xNmieaBHLsLqdF9mjW6k61UsewBJE5J8WgMwjK8JPzaS6a1",
  "key22": "4AUndrhyHHVj3rUjg44V1bNUbDUy83VKcxNTd6fsBPCpwJwqbBY6EctdU4vzd53cVSqzGnMZY31dy96yT71HrryG",
  "key23": "5Ua4sNWJ85vmTY2AKM8YQ3r5d1B9TedQxn4bXBrTQnQeW97R57qfqsyYU4CrhHiLLbgqsifbYCLQSVovoFBnMrDT",
  "key24": "4tS7UPAaBeE4f38XqZznHfsA7Tqwa5jsuhAC6QggCQKAtenVPrWJo6n5KkocU9fKpwVketFwZ3bD8zdPk2QKFYgo",
  "key25": "323xezjKhoyGiaN4fMR4LpLbap84Sy8UHCBpVzkSG6Q2ce9BPecRgsy4d5pdqbZF3KW5T21xnb95vZKbibhAj7Tn"
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
