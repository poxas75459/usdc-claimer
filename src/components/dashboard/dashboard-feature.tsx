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
    "32vpdS2X984zea6QkTPUF8Z9HZHxVRTLDKvmDJ5CQGSmfb1Gyv5Pt6s3JWoYMataN4JKa2m5LWjZKHhdT7cHeqQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UubFactsbvd3erJY29Dscc82Cg62XShEfA1vTNBHtoTqjr3mFu8LLeve9Yqszh2EKFJzeiwWRHK6ue7niFgfasM",
  "key1": "4S6iL7hHuksX3KuyCscTE82987HyzV5bdy25e4tqQXFh8fzTfQqjSkWNmmFBPnFMBeAKAa42iMp6yZY4j98pn32J",
  "key2": "4mFKbZtzWZXWbfHDUTfSqE8oHTbaEtifFkxXiXsCh5CXAPcDQfp3oPvrm3phe2t4jbYePixwb2Nzjr9zbKGRb6pj",
  "key3": "4Z14X66sB8PbSEi21XCyMpqogVcG364X7pGd5hn8jBhE69J6Nq95p3WkcWD6WYqu8UQ5cm59hcFG2CXfmz5rsAL7",
  "key4": "2RpqBYowCnUUtxQTbiRGPnh5hZKrhE24uYTymp2s61pAbpu6FUXkYs51YrRUXo5h61HLVBJzAmRVKe4aBNxtwfDX",
  "key5": "2nzjPnsc98YKjKS1ZbWVobvMvXLEDZbXmpT2CrKASDZhtqeFVGGSDcL9amQkvwbXAz91co9BFZgQxYLk4aWp2vHh",
  "key6": "64BfJkQJm6pLiGpsVKmMsueEGEzL6XjBms2NdJfjYjnVUB4WiVZz6hPmAs57Epimc4DZQPdhT23uBD1tSf5555G",
  "key7": "ZW3ddcbfXXeFTpkkZse6GBv2BQsCTu3BB8Hz3TmAxwZrnmqracN5wjhfTrcqxrCTDHEbzHyZwvajboo2n7x6Us6",
  "key8": "52WeTk9KNXJn9SrHdsgHXEZmczZ4WhZbdKXK63G4PJNZszwxYsW4wXcaeHGs4JjjKB73jHrWajSDHf9GYL5W2wDm",
  "key9": "4Rcbw7s3uUJsDF4JRtRSSmyCzjfuBMyTqrcrvjvXz85LPw5GykeC7LSetGU3bkj5cwugAzkC9QJWqaAwqJcwznnm",
  "key10": "JA73fJiv854656hWi8mhn5TS16Hyo4UWdMakmEkLN5zf2gftUad9RraBo7wUbRpBLqeF5uyqyNj4nxGd6Exu2bm",
  "key11": "2pzmkgTK862KGJACWnALcnS1ZqFGBR8MZ1gQCMhTwFW37WrCC93G3EZPHPe1T3ECkmJjwJpyWoYvvu3V2C39iR16",
  "key12": "3bwBRmc6B5yMoSvwR7eCXC9WFEJKSuW1mB2e2RmFsg2j3b3HBVYq1BzJWYiZfyf6eorKQoChDpK2zz7pdvyDWJYp",
  "key13": "3pKGhtSbXGaRUusxdx8rP34Kbc4Y1YeNRn3bLL8A4jBMczbZbXAP2V4J8Jo2HW4bvTNBcFLDMimBbXEvFho2YVnU",
  "key14": "29qZ6vbHt6xSKpoB9pWArW2bBznNZ9sehJBPhZCQQtpsbguoVCdKwLdkhDudE8rPmg7Sr9G2SvNToBeW5ncPxH9G",
  "key15": "XpDY75b6fsMZqrMuwKjMgbz9WJ9tWTJRGWmVrwEhyy7PuDVS9cGJfk6dCvWT3KLZAnrGVApzgfCdrN8PpQCmKCA",
  "key16": "3Dr7CQbQGNz9cp2Y53Sy3XKbyDnBZL5H48qNTX1575WZe365tDAdE2yFjxkwAYTXHPxqpaEAkuBPhPBbeMHZXAGm",
  "key17": "5poH1wwG7Xuzbs6U4SEEc2kgb1vQpkDGQTVo6yBejB4oYkS9qGN1868W3Zw7LQkrKCyRu5FzwNEh8Y8DSsppv7iL",
  "key18": "5134sEu9YkG38z3HPzmCpjyM6tAhZ4LFZTxaj3rXNKA4tq63sYMwTCMi4kmGgrJTU6Ew8uypiXjyhbskAfFs38MY",
  "key19": "5MsVQmtGWe4DdX7W7BmGTh1163XbgYkPC7uCVX3PQhEgd7LtBprcRUJvXDea59JN1jJT8fRbJRzU3NFb9frvfEEZ",
  "key20": "5ARhXn8e2RyQ8FEgTC3u1h9Hcr3gskMa8JPbMABs4DHQ6bpEgfJagtru1cVyy2n2LsC1ZTUXmRMK1YwDWrauGAuh",
  "key21": "4NEVvDQcJFCtJND3Bd2myrRwwzgbCHSfnArEeDik3q1yh2xCyQiqt7rKSszx16o8W8gT1GCvKjgshwcCpYq4YpW9",
  "key22": "4szsgr6KujE5pS4hVm54CPusv7aAFmFRCLgsUmJaxGPt1rYrZWeHrYEfhVpFyuaE3JcYv6HXNri3DxTLhQjCUaAu",
  "key23": "5DeY4Hy9TzsA5aeJtYbov8Daxo7v3ALr9a5xEw5gXRkUwhZY7HjiVPVQ82HHsuG3Zjr2X6eUAMioWpZH2akM2bW1",
  "key24": "2JqW2ajJyQ1mcj2iHm4NHH66nfGDM4mr2XHXE4nTiBEUqeRHu8dNc8P1LgktUWXEWvVsrHqJUyAKZoHE3L4QUjQL",
  "key25": "5RLBHZEScoaPVD5DmHZ6oo6djuk5okM1eFfzVUMHzKoacYQDgc2TWyFTPyo1jDE9ZbfLV4ZSWVG3EBaSQTvnj9pU",
  "key26": "3QVbRWDNab8GFtdw6ErBjvUmBdcLztrBhqZ8gKthjcL3yBqYA2NF28MSU49BHS2qK4DKLSw33wutpQQqwvyTTnHo",
  "key27": "4ViyNamfV2e6wok25QKV4WXDGxwwHAHbzbUwWUZSaVyYXDutmvrx8kMtqMqGBr3yNd5F7BrCo8AAf5Yd4W4Bxv2n"
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
