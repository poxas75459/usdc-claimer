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
    "4w1rKHKYdJCKtdpsLJiKgQVz21u4AWHSSmK8crnJxGTNAoPqXUzaBRCDkXF4s9K5FsPzU913m5SXFkMRKuCRvapB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWoA1e3jmJh6WsKGQQfKaZvm6YtyL9hBSUU7vtFVCm594MA4WgaV22TtNmJNxkBNhK4rG2p6B4Kj2wYj46JnYBg",
  "key1": "5Pwm6TXd1uLxggjmKo6G9sP4gJC5NjP9L4ZuuT7nRcj6qohNwvkAj1LWPKE9e8ZteikycoF8vdNKh1fjjoYKVcTK",
  "key2": "3ZpYAH5kopt8DxnHJGMqE1mLmCQmhygU56mdmSzXMWyE2EdnkGBDDugFxa8FRf5b7exsUsV4HGHzpyyQxEwMfhiY",
  "key3": "2XQVctaBjkqHHYncbxjFrdzLzqiEza3JEmMTFwYWxDjFBTAc2TpQTShm1tHYzFMQSjNhmPrN9AWdbyW2z6DpMqyY",
  "key4": "4PYtriM9sQYdDLd4M96aefcFFiWamcBrcZnDgmrrZNVuHZCpAtdhi5dEbeF4UHz395wL87esa5DBM14wizUtad35",
  "key5": "3x1eiKm6Rb1Fft38GJujz5HSddxymwVgVqx2yzxSsf62ztgLsKEyCS5U56tG322wo5kxQBtjR8NZhqsWhxaujgSx",
  "key6": "5quzK5PzzmQQoRSAeW1dvkQU9ynznduJTLy6tipPV1HGnnxPuA24UgH9WHaRBpdHpnZBAURGCpv7ceDJvQv1hen5",
  "key7": "5rxsh5WcSYkVphSG2BqGUWTtJjTdMMijhWtH31vU2GT1dXegZDDQGCrk3rjktcWEAHHCztjp3YFQw14UcbqdBEVQ",
  "key8": "4CVzXyz66BwTYktadypLgmgpRdCTcZFvb98ri7p73pbVwkt3emn46SxnDmpNfWCrkek9bY1N7sd6VvUW6VNByew4",
  "key9": "4rYdhEMbmTKdwXjknZ8TydrTF9ymbmAwGkqgkPP7UAnHkcYp9zrmaWq9o3ybKEeu9w9hYjfpoU3bTzWSatiWKBen",
  "key10": "4cgjZKUG4M6GMFfCybKv4TKKDGExKyKrsdHxUqVQiBZGUtBU3WimdiGrHAHQdUqiugp7PhUQjDQNJyLKdQZSER7s",
  "key11": "3yWrW8k7QKAp5zJNXCYsCKVLBjSA8fh4eYz5evb1PY7XRoCaXavRoDG23RWPPgAY89mPMn8eeSj8CBT1KSXHa57",
  "key12": "3kDhybTFqaVkMMymWqJipSJFhDPpUzdRgoMNyUpcVQ4vcrzbnLgcLJ7UobrQ2HG5bcXMJT8D5iXpRnxkqf4XX2At",
  "key13": "HM6z33xd38ocobHEDc8SKn1D1Yo2FD92daYCXt4P2peKwVVce1f2RTchPWFuGD7krUYpMAoc7rsZfU528wsKU7K",
  "key14": "3BYwitKBZ4D944h4oSsBEJj4pjadRrpcFd1nKjUt78JBeBHsSaQr6sRsYx61j3eZZ5jiA9uu3ZeKmWqsJRtRziXe",
  "key15": "D2GjiM61JnAaHCFEMjt9Q2GMgAz6bs4EqvVFRbKQVSWnoqYuYWPWiJSjrhmLYGzHPqvz5yqwLpCsdPy9wHqkdGx",
  "key16": "UzM4tHUMgbq1LbpfW1PEnevgWQGm5xjxKRdYjh4mqRYMzgzVaM8RetLAHE4mT7BuBAPrbnYooaNpVeHMAnPwXGA",
  "key17": "2N5f3WKPWU6Y9MLWMnYWuiPJQNVBxLqm7m7XZaxR828YQMmuCaXQySF9zL94rmjMysN8pPnAuAFWyiJxjNw62Emr",
  "key18": "xwyDhPJx4yeYsg6p6T4LQWmbU6cA3QGaFQyiejeEQpuJsJASGghWHxa4i15gfgoVh1xxUc2vq4BGysQWn4UvT1y",
  "key19": "5q2XT571s1mjiqDLVD5ZqgyRAikfrzdpZeqpDo91S6R5JJQ9vm6me3nrhE1kAjGPVnCQKNwNkJp8eGtAPpbKTcMk",
  "key20": "5gC4ZD17JgkN8CoepTcWbJEjEipvnPW8xkaKbiUiT8rY5jMfbTYQTGGECg2jZ1wSQVTR4MooScsYfYK2JRGaBtYy",
  "key21": "xr2GZpssh5i3nRox6z3pCn1y11CsvZVjU9XzziSQvuj66CFq8eyTFwR37EXWBL6hcoi5QpscBAsKNwrL1asWZKp",
  "key22": "4hEZTTAQiJHaXkQV2CZF1Xu9Nj6N13FtfVSCSCWWcXqTAXfo3CRC13aqELNeawMiEdCS7oHN5iPTH2dZbf1hKC81",
  "key23": "64y4K6PsDDY7thUDWiZAcs8wVzR2H3dWyCzWfSiDV87rRNHtHbTrzWtoZ33AdYsCDfkJqapHAnUePkTeLwaQwdzf",
  "key24": "66P9yGyxbtvqb4QoEd5PK5qa7seaGb1SummZxshAe7oUKjKefzph5d8zVMWCkMzuCn9B6hSMF8FDNzpiCh8oHUA8",
  "key25": "2BPYqehHvmh4DaAWzJpiprpYy14wbhyvKsY9LNR9RxZoBrvhPB9n5hYrC25GEJV599NUUSstLNALBC3acDMmFmV2",
  "key26": "5xfPfUZa624DEPnCzBWhTRSx4jZcwY71CP51J293UktYnSu8eenc3hPJWw9BCHAiMQqQmLCWt9FNqagCq2UtER6Z",
  "key27": "3ttchCfVkAT755henXDWoB8CZdar9rhLPdB3e6ckozzKqXTkoExmei4KdCczVLLPdcFxbASLtdVWL11jZtd3z5jB",
  "key28": "259EhsJrVceB6JaqhUJtuZNaJYPiUkhZoQmWuKt3qob2XEYXxFfgjfwhwiga3729MaZhhxQHzWXP7vWhwVV2cWJm",
  "key29": "3b8ikMnLP1gxXJNkggoGaS3uGkT87odgkoQFrnNs6pvQsE5zGp8VVFDUVmS9NGwAqYDd2ABtnMztUecr6qCa77T2",
  "key30": "FJfMuMfikmTj8az1dxwayeTVV39Ehmh4E1VPd3vrXcQwEEEPh3mRXwFNmuqHDuzdkKJVWn78mzxotipGVdTSH7f",
  "key31": "536afozCDmp2NroLH1s7ytFJ6pBrkcXKLFMXiLQt6q44VSLk21yoypA7NbnzKocvoRn4iQwu1xmrNmiZ2Ji547ob",
  "key32": "4NjNsMYUJgGfFiqD4HwyRLLUq8YK7D5rxj95U6gz8QDmEnNG4SDNEyY3hHGjGY8jAHVpkc71Cu3WUgrJwj27DJVo",
  "key33": "7xnm3aGEVtYHPiEbaQGFheNPAHqF1nTvkYw78mjDza1M6Sx21cuAk8mj6ZM6JwWbTr8Zc9fYUxsnBc6uYjT9UrE",
  "key34": "2oVrQEAcPAnDKvHSruDT3Q5fJz9vbuz4NhH8QHsjSNUUdomPtS5BNfLstUdMhyj1SLDp342AE5bH3pv5ya6j7MrM",
  "key35": "DNwJoX41ci32DeWMbrA8iCVfzXMS7nQ9S12PkkwMFnsf8AigKura1WgVm8fCyeCLP2A2Z47wUtrYiC4xoVCWPz1",
  "key36": "4Uz4ZQ32j7bbCwDSoMrYkkDPscSebZj2vpAC9UzqtJ1PUzKXKk9Sx9JGtJLE3tmm6H4fBgBEkHSStPyTRbLdwDFs",
  "key37": "2spb7fHpBjjeom7b8aUaP4qNEFZ2qpDgUWV8Mfv5sMQ1ji1X17DMQiZoCdE1d4TB97KtJuaqacGd3KwHJ5DdyPSs"
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
