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
    "5GpigeiJjx5ixKneKYdHwZWKeJh2DHhtCgGtnpfKpGF8AWarw93FCAeGzMacH3M62zMVeb9iq3BEgwbHn8EScrhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41NSpdTXBj5nrZvbZK3Aq6i5c87TYaDvpmkrCWjTa53m7umqWgmBqdp5YhxYmRs7DHjXK2Ap3zg7n7kUPuDuKWXj",
  "key1": "ajrTriyNsWZxrsMRcNjE5Mc9iEobk6Yweq9Nzd3qFQRTTeedYoDDSbPSjqBY5ApZ6UR1dDnSYZEaxWCzXz8V8jT",
  "key2": "3ui5HXq8YMUXR86s6jHLiypRuuscoszmi41aeEkV4uUNAr1HF9JP2Un3qwZUebd83pTjMeqN7atir4Lw3VD2NZh9",
  "key3": "5gwrzecaF4F69UrXBqc8qwwCdXdMB3VRRuX37iVmvVuhoy8ZKi841K5TXFf2HBh4QRQwykM5LbudfJMjaoyifNNE",
  "key4": "49gNnuYcDqs6geqQ8wAR8jrMeMiA9STbkQQy1T3pS7XcxzzXFMuTBaQZavHu3WR9RpxthC1AJ2iDSZ96dWEPXkqP",
  "key5": "2udU17x2mSLvVyKghbD5pMY3zEyQfsnZi7u1GQzVXdxdX7TxhXWXyzGHwwS4WDWj3kvdKW5upXVwu4RtJdi6fCsR",
  "key6": "2SqRZCaJBVsA5nenGKtFzyduxGc5R2buM9VbvHaS4YXzGUPriWjGgPwcB3GXopvhswneiBQPKdSh174h6h1Xf8hi",
  "key7": "5TZ14XnZXxzVLaRXqB1kP5CMPjtJ4GJAwUigKmGRU6h4oxsPGkXYMAUDHk1GDs7u7vfANQzvBsbARwq8gn4dPQd1",
  "key8": "7hjv9bb6EQeMhPDkXi1yMB5he7itEcyNLYkxLp1ZgzifSy85fn7SXwpBo5bBv5R9h7NYjsNrDPRyuSc5JG1yeNz",
  "key9": "3Rcs6fRUwWvbY6DKesaHe3qqJCG1qdQDCDNPoSmFBpjBtjGo4ZmQM2BzrCzCq2iYggPB2CHSKRhuVv74buUeafGV",
  "key10": "2u1MrDeREiAZC4DjuDR3mRaUxme2Rc47rwYUhsR8zDB7Zih9YNbc85v1C8vzAF1Rxx9EW9hHfy1LLJzgcSZHS8DY",
  "key11": "5QM9HuzzRKTmUG2tJ5FUF4HDhQSVHqC9uRTg4LCndyzdwSvyXGCxxngcNL2KCYKAGJfHi8ZzKc7Nh4q1macqEk1y",
  "key12": "2yhUw1rLav5xhhLy6nksLy8FGacD3PSbdpom9FYZGfrjNJbaERhJr56QFYy8xyY4b35Rjuv25kmdg6TJBbVkyE1T",
  "key13": "3s3HgYxdRM4FzsQbbtZmJFNRPJiyvgwn5A9H8qRtyEPaXAkgtHCzwyv5YKVc8MyzDDRvMS6XgLAv5o7hwt4WQeS7",
  "key14": "yNYpJF7GBC93LKh83Ms6C2aQhvBNVZQzwt6GWZ7svCgN9aA1wwGQ7EP5GDX5Te1LnCCGh66CBL6ALfDJWZ8rwUN",
  "key15": "2t55cCntE622LeKBV3bRzs8TuZY4RZudkWy82HmwPELTYnX2UdQ1MRi5Zgwncx3hrAUw3UNn53AVqgdgy9srWbYL",
  "key16": "4cgGFaM1xqPcPBFrubfUHySbv7W4HZBTCLGVrXsC3VFLDMWUdTVF6dsxcGRADpSkFSifZmb3YNNamad82BE8L2j9",
  "key17": "3RhJY3n7EyovEJtx7VpYHEaGJLRUequhA2ijesePn1QmNnHksJkosZB73Bbgn6PPjqcMKVztogmCrWxcQ85snJnj",
  "key18": "4xrSvxuD9WxADqBnGoDY6JyrViwdEUwtQWxwD1zk16kEYSVd1BFiFjJkKEVQNh9MWXGB5Lkyu4CA6cRKQVF51BhZ",
  "key19": "4vceoAVEDnbmKJMJjMvNciWGTANjPxQKCHm5gk4EFjiQWVCBVP5hGycZ21enhoRMPBD8SP4JwaFNDkcvAUNaK4rR",
  "key20": "2VmUSYLJbyC7JMYTuLNCB2WRgT7YrThbA9wMf1StmJKM1qdQxoybLeEHEw79eZX76tzQCum1pVuMEhR1GZaWzeXH",
  "key21": "3xRgxyzEMwEULJqnxMNfhP6hbnUWahTDyGRP4bHJUdKXJNvqqE5jKcPm6qrkLciLyufUDwdJvjcnWyamyP8sSUuL",
  "key22": "3ChtgTpPzFqn6v7M7nHAkL6vAhgvg2eDQmQMK9MhyiynjdAF8uVaM3mEUAdjq9JT5mYRXaqLjpLhFAPgfFreYPdd",
  "key23": "3gEJQcfoCpcutYCwj3cM2Af8jLzamyYbYDQuLiLszw1eKyCSBhtm61mxyQZJL8ECpKwdYafG4RrLaqctENdVH816",
  "key24": "64569t8DeSUoeAZvXzrRkhcMXAVJGNh19RDyDYqkaT3sxZLzHjZo5twPLC4CseDTXx1xTezXi8ZjqRg6SK4oNxDh",
  "key25": "324fwNfKUgYPZSkovmtNSvbuzaK9NPjVjAuT3GEikv4tzUxh4jVJmadofqRaJGY21zgUXdqBcrFSF2nDpp66YPi5",
  "key26": "3yHitreRXHRtpn9JyP5g3BgDMJwXv3LqpZh2mGpNrDoFYYYfsx8PpkborMi5SJxe6CuJki3ZrMKuainYX2MLsPcM",
  "key27": "5GKZkK8Ud4xk2Tje9FdhhL55427TjLdcWiAbowAaW7QcttKKQMTSgEBt8aShgATRwBbwmf42HitiqVAo1rpXL93P",
  "key28": "4qYuShqGnPBsdrNq4sKenF1oLtEvfs99VhJHGVfzPzf7vGPwPGobp2Zy9n6FCVfQvyUxaTSdD5XgDfbcXWsxEtcf",
  "key29": "sYCAyrquYzc3w38L2DH1F72VzEWmDehqXUCoSyDMS7S9YS79mGEEeP8rqGix6S4DKYU68Fr5oYqtTTLiDykLPLR"
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
