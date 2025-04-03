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
    "3nGMxioFKzDv6Avu599JeMkAjtNyxUKN7Kz2QFZWXaPWKfh3sQtibGGspm71dWuJExUfRGAbps1Av5sTMWyaRNrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qaCw8NgvfPTCFXSKuKioUsVY7zJE5WDAJLE96RZz3vpm25SScnwLqjbeBkU1w43W9CqJ3Efx5HAPxoELk2hpW9B",
  "key1": "2QHBCh71qm1nTYcJZmHPqWtz2HamYTmt7X3x25j7xR1o4wJEKUZ61vJdrCroWfGcTzXNeQXXK7H8wVR1SvikHGT8",
  "key2": "2vs41ZjdGRMKNzdLk1TswucDmat3b58n8c8VTCpkfyyPYrxEM7g2HitRMR4foodSrrUZ9nspEEJ6wdx1u9XVAQya",
  "key3": "kpSHqr22dFX2xmWqoJTbDGSFawjDdPMTDAxfVAhbTcKa2WLnPT2hQwUP6fYgrz522WhwP3xsTKwSVZqYtzFum1s",
  "key4": "4LRDw2hZHo8LS1o8RyTDKj4fB5vMtwhXhfbYctyE6514z8QeQu1SN9u8ckfMKpiLrhJMnKNS9M4xQP9KfrXR1Pbn",
  "key5": "4XSL4KQ847ew1e8mC1c5j936gfznDq4GJAegxj5afd7mAweh3qgn2mUPiGsqkVrz9PirFgFJDwxFHoStw31f8DMe",
  "key6": "52ZpkAnhU9LR7LCJQzmfcdYEBRGU2dFqhK2U4NGZLwG5eAS12QJfbZYoHdBhzHW2KFrWiTAeaznAZcZmKmEU2GzG",
  "key7": "vzfkzuepbT1WcSMvW32inMJGPBhaLBZRuY6PZVVZ8WUjQz6Kf4Mnu9DXbC83KdmcofHGJRjAGXapNF4rcJL3Zdt",
  "key8": "4rUqehr2aU17BssXK42KNwcKKW2n1pEpV2DwoeaUdd2xWBwZb6h3ckH6caLKMHFoNx6CEm5dCcWwrYqUYykBHgU6",
  "key9": "3YqhLoQTzHvbJHBUKDUgWrrn9K2UaD5sV1cuTnWthoDbBE5WjoUqyt6VVyrZNKnknkcDTUjcredsKBgiemKaE1X5",
  "key10": "KnGxDEKA7sGV7SuvMrqThgpWbXACw2KCxCD4jcuETBdPpoFbda6nfN85VwfTYno6EF9t15hHdAqdk4oLDyz5JzU",
  "key11": "2nnWmQ2UjsLUgFTLGkMYbA6WC8tFsEbDaNiQkXFNctXVGaZ1otEKMe7MUwSbYp1BTq5UTfnkH7Q1j8AdgAdtpqQU",
  "key12": "4ynV59ts7hjST2cpPTDvdxWNTr3M8ctpbLHmicDM7gx2kNVrSb6YZwid4aQhqf9uUWRnTvz3FGMXMSx3dptRQANJ",
  "key13": "GXsgwpKVgMN13R8zFzxCNBn2YCRbZYPktJDvENa1XE93zMzLeUeuPqnVnXABTnbtHRazKQNb7mmiFR4Ao1FQmFd",
  "key14": "bCu1TvZbhfN2EGCqxSWSC84bWNKSm9Un5mS1LvcHn33x5VP33Dx5HXgHkrGyLFTkBJ1HUiep8xpX9hnZawQKfeB",
  "key15": "k3kLrcw6UrSnHQ8LmKZz8VQBygQ36TiAjU4AiTXCn6FuW6oQoTjU4a2qeRWfnho23wum56LyixwLfSGS4dWyUp7",
  "key16": "3JukVSi9zmVyte39ihHqx4cVcn3R7mHezDTZUZngkyhbhadYiodvTCxBx8yYAB5j4B967LTjNEpfqLRLJ7YkGdm",
  "key17": "pQiBmEZrB5PXXUuKnkPnycFkzxTX6shs1qpkrWCnkgtH9dMGBK3TysGAifywXivvharbk3m638jiDUeZMQo23bQ",
  "key18": "53xyu9vx6jXBsW1gqg1u8Qvnz4q8vf8SDhPr1kNmb9fQDpnXyhRDPUJny4qWyhsSk9TLZNecCdjke2UawM1XRbJK",
  "key19": "2r6Qw3JtYzCHn7cz6mvoBv3agqBDtmoapknW5CyStugjfcB2jyExDKsgNLVFoXVYsVCiDSPWvU8WNp3SVgsBoW1E",
  "key20": "4NzAr8jdwoqsrv8gGYqmbY7LZ57agkkW74pJp74VUL9nLGusyBWTWwn9ywRwzw4QH3rTfGL5yR19dZzK39fYg71s",
  "key21": "2AKB1TQLEYVmUqoj5E8WU6z8qFaMkKMxXKzhVNRa5TaYfjUoRmMiUkFchUrqXDT5R71EtRnsLHefYzS9GMeZtTQx",
  "key22": "3kRUvNvRPn1yMWjt8uU8zTcMyZKKtnJ41d9Wtz485JJ8G5LrivRGHAMFJpGCebqoDpm3HYBKH9Zps2h1TKyoaBJL",
  "key23": "GS9fqK6jkFiy4GSBau12x8dE12diT8xm8Wr2jdiqbs9kWycsoxKQ4CaaxFFao5kTckYVN8TbvF4TE3q3CsfmKXz",
  "key24": "5Kd8T1xFpFhVSP457s4uymfGm6fwTz79g3QntAE44UPXXR1NVjqaqjiXrpcr7hzCdDiuiyvdAJYvE6uzv6DMr8h9",
  "key25": "5bQQvc3kRJUp77TvyDA3NjDhth6wRGhiPqtX1r2FwEUzQbLSPLPqTWuPkV6VEkHse67XTztBCdbZZ4RF8Fzetxjy",
  "key26": "4qMafjG89H7TJXvhZEJSYLusSL1e3HGJjUrtwxjx5BfkNKfKYR34G11BotBePjFHiiBj9iJCXxUEvuFvqwPmCvxa",
  "key27": "562jbCsQQ66K32nT1YzgUY1S8ksy3Cz5pfnnVWY3pW9nghqRqMFbhomy7VLgR8ViGRv5fizKt3euoft3pigAcRt1",
  "key28": "2dGLMsRtSuN6LeNQd7mEXyFDuyasBaUUcJcBNmg9ELA1BUPNWoHyA1ViqV1obp5jcTGJrEA9dxgzD7mEkfPK7ynW",
  "key29": "24AfYQSKRV2B9JXqU3mXvFrEhDRYtMaitf26RSdPDWHTuoCfe9FdrgDV6bekXRyAUqqTQZ11BQhz9LVPeFVwamfP",
  "key30": "35NAgeoWqTxTT2s2rQduDFPmCPVJmNJDPSycbpMuS5SBfsXg89ojntLpb912LC3inLXSL7cocxNydFVyXaHNsApk",
  "key31": "2pxLgrnrUp2rteChZeZ3F82pzb4M9SFpUVTaiD5zETcnbt8Rnokk7PBFdB8mDdZ4B8JcJz5DYGbjPfw2V2cbbtTn",
  "key32": "NsRW8VisDksqRXQbQDpsmmDZTP1hNVfZGwHzpBdFwoE53qXqedZVcsCFdF73k5Lqxt15EqPi7m9ZLtVzHerzxzd",
  "key33": "4GKUdacr6j13yngTYaKKv2gbK63VQNsBMsvVKkjcS5jCBdSGeEsUHAh7rq5pnLKoGxn6d4PkHfFsjDVcXPoiggqc",
  "key34": "5ozxFrU6GtJB1pxCQ5eZE3Bdjh6gWPAQDWRsWGL2b88AxH5nTq4xoDSnFguQE4HpuwHfovaJcGFGFSKumLVqxQZ8",
  "key35": "3Rs5pXX9gf8Jot83fEnGg1JkwTZGGczz3GCgDWWZqEofpxwxc5zHb5Yj3Dna3ognkTXRQsPCnqypA8q3VskzK4xr",
  "key36": "W91vGpU3ekNDcAYpcSVfHgX46b6D3YX5DJmw4CYRpw2c2A5pJcHwcZX2kGiDucQVEKniRCkLG6yoPpoJdQaf8PF",
  "key37": "4gTUnvot19EKxAqFZxqpMfN6UGX9wz4GrT64i4H37yhfKcksDDbNVUXWprk3gZQS6Ee3DuVAr6HYsxFYfvfF6Rfk",
  "key38": "4bKeSwHxZXCPKDbFN5AHYZk48xwxedCJ2cBAiFXVQA8cyTwYqCHheK9C4h8zHPoxHxtt7axM111xepU5yHUHyUUi",
  "key39": "2tsrhEJQPPuJpCqVS4jAFaLGMyJkeHDWWDtCaU2LLEuuu3JetiFTaG3Jzx8ysHcDcbqv3fkgow9riWdR1HH5kz3d",
  "key40": "5ouB21R4ZdzHetU1RGKhNKhGUJu8ku84GkdRSdqBYevoE4LgmpfehMMo6QfxGaEWRJwRKV11HRGmm4CrhnF8oozr",
  "key41": "gSaN8rFbA4jZFGjWoJbi2hCW1vf5NUgzoDHBw55n92TtG7PsgrQMTWfp4oiQTqjcCWNJpQd7RTKEFXN4Gm3ErH9",
  "key42": "5ZRKkvyP5T8wo3R33FbMJ4nWxxripqDY8bQKL7VJnELjHDfDKMRrcHFrNPaqkr86enX8z7Gzf8QwgcGzAujMvxkc",
  "key43": "4tkirbWxCfrt8Emrp7AQmyzMn2JgHBRbwFjCfhPMf31mCUyZaeQRDK14izGQ2nBZ2yJaSmMzNnzfWzDDikTPh8KT"
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
