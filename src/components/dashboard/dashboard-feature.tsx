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
    "2PGbx4zz7ZpGSZPsxH4FD8oE85ChRC99XxzwsnH7Abm7mWxEeGE1rtNr78fPVW192Axo38inUaYSmgucx9jxXLNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAMTwRTw6BxnKiAhqtfTiu6qyprZAFq2AwwGEMMDXbGfrHG1nXcSRnmbmnAjU8Zr6Mzq47TqWBvQaYZYo5KQnEW",
  "key1": "8vGEbAdrw8kS2DehB9gxd7JywGeebbvn2mM8NYRH85nmS5zZnjVJpTvs7YeveQB9d8R2LTGGWAEBzMaRYN3GEqK",
  "key2": "2qmroJfDmhb8k838sRPBb3NRuzYZapXWcwxnudeuEM6G5BitvFcP6n21KrL6W9yFxJdx2kme2veDQcgdThS6jJ5i",
  "key3": "2kpcupxmBsq712G8qdjuXk4h8B5n9CMpDpeZ5fGRx3TrFhSE8hTrR8Esmn5vbW7tnVKg7QPspunb6DtJxm1a3FSy",
  "key4": "2hcggDpQdDTxfsNisABJDBgnp75qrQSFLs6fLfd7PtbknHqZz7tBovyRKKw8QYxuiBQMzt8LirzH5hjA8nwubXmz",
  "key5": "54hcXQ265eEYrWEiQwdv8qpnEtULkjp5VcEcYPjUpqJUQPghoNAKhirvRntEUTu8diF1fHBZngc5WDDYHmmbAQMQ",
  "key6": "4TCxDTdbjGxGtY4n1xD14ZXeAp28XNohhfcs493AHQsqf5PEELNJUDUuipg9wFpHr2hgoaKV3SyuFfMuW3XPC6GV",
  "key7": "2d7cSnpppzg3TR3gJtjYTXiDtS7a3pfM4WdsD2kMAoE9zcfuDAuhziA2KTv2QdBxu8iotPxTugL9CSJaP2CtnChW",
  "key8": "3sbXN7QxLBgb6t6tkrK3Ln3f8A3iLN7G3X8UV57rdVePHhC1Xf9JDN6dajmrkwbVahbTybXSk9eG7cxHypGCDYWT",
  "key9": "3yYQ1oDnysVq1CbWJShbJKbZCxkzNHgQT6N2cbSzATN76HtYsRFDXqtWCVaVs7r5KWJzTj5LAAZXUL3RVqgn9U5t",
  "key10": "5mzNcF69a3BhnbduKoV4hbuQa7y7HgAdLik5Pp3DeXveP57cnxExi1h1Ahfdzb9vUyZCfXQyhFrGwkutqYLeUMnv",
  "key11": "5LDy9CvKYrZ5p8dCo2KFvQx6rJgMtgC99x1FCno2NsLuhisvjGT8bPKc2dC2oh78zUKof9vByTFsoBU6cxwZeyQ8",
  "key12": "4uL9dFjq6b4byh4HuxaXunYxKjGLma5jjpEFdKqHPh6u648vDqCuSy4T3cDT6iHcByi1DkpmN9hcyuTPkVW6bjVn",
  "key13": "DfoGvHGLwbPbyMJmUn97zAijDhvo4966VuqMgd5cr2ZiwgsPxxAhVCNYogMobJjELfSQ6oc5ua7vhegFFNWU2Eu",
  "key14": "5VJyEd1ejzZgqr8h8pQJvFJL3NdqSrVj8EQGV5RqHF1YiyHkUWLutgC16VGPXkE6Esm1zSQZz48iDvqC9EXzQh4Q",
  "key15": "2rxKpF4fE8twAHFYrHD65fL54zdkCAjyTNdq7fJ1DL2MXVo4jMNqaox1tgGv1eT9Q8eNDKE1iV9XxBNC9AkYyoq7",
  "key16": "2Y3akMTrZh3cYzfogK8zp4TxCDvY8aVpSxm3pTaZjTDT3epc3sqT7psUYE2pHAUrHKUopAd3ceyyePXtxiARtpjV",
  "key17": "53RJQP87ShvA8PGDpMpERv6uCL6PDVZPhQwY2zxX6XPpAwkFbZyGsovaQTy61Bks8CXVbjFFW59wAmLgySxhaGmY",
  "key18": "5Mn6F4n2sKkqMfRz58jtN718Pevqx7z7MGGRbN2c216cXmUZ4auSiCPykETWPY1zc9cYjtELPZjEAEJkxYpKEaTC",
  "key19": "4gVaCNQYMeMegW1dhbb9ZdA5QR1kvSbL1urAi8F1Meq1kK8nRDq52eS494iajkPkdXBeUfrafr7xbEbpMDLzTbWD",
  "key20": "3m7G77zFF8uky4tF4NBy2wEkYgTzKQS4opnyU7wG9DMhWyL7EDuqHnN84p5hBnVxKb3cao4RtrGkCPmXgn4tF1vQ",
  "key21": "3mmBkrqVDL2dBCnwE1ewroxJn1Y7mQdY1TySaCLmYH3P6xbrhtuKawthrik1z7d9HFQu7So6iWWYeBXEvYSC2KhY",
  "key22": "2o7rVLP48nQcagdFWYr8xbHpK8VHfa5y3NcXMRC9oHKGZdbp2z3iZuheDaU8z8dvTUc7acnKjMV9UQqmYGfMzn6j",
  "key23": "27dXw7Yr3mtLysPnXKkQWEANvieXDivpv1kQSiPcfCGGMgtGg9PzUipMKaAGtQWWSJc7bBxxkVhcAv6CX1uohwZN",
  "key24": "4iKPxdEsrFB5xaiJ2RqHUsNH7vNfKvCcMr7LgDEdJaJ38KfAnKEZ9bj6fBkZmUuymGWsaaGHu6PCpywget4PQfK3",
  "key25": "yv7oRp9sF8uDjhF2mn5YMwPaw8XpCzLvPVsTVpReVF64gZ3V3Vf6iBKyV6BNpehzusLyFfVhS2wV7gESpoduQrG",
  "key26": "7T6sdd8X5p9DV5sYfyUquP5fusD6dWQWwZ6iU4kRtgmpR6eYZYYhZAQNpAAEMT7SqUiVkdRtowAPBZw9qLopqr5",
  "key27": "544sdXAstSskPXbnBYta7RMrx7eVYeAVRXghaz5nWkPueTr9FgJFt18gjJKxbWiGt61rDy2bNErBBq9xCcnKyT2A",
  "key28": "2q11oQv2P9gA8MPdv82AFaVA4uV4nC5Fp3M8U44NTgzsTUooWKVMbn6teVJMxnvXaup9HEWKZfK36CKdFij3Zx3g",
  "key29": "3naXvwUt8p7App5dr6PH1dJvuCUCDAB1zqrXQejAqM3zLX5YjotknerA4hnsYJXkRmHABLEVsFpHovJui5dXqGc9",
  "key30": "4hsSYZNSM5D5VbQMsUcQWzrMPiip8NJsUNhcW1Ta3rUgvwLQKn1uihrgVfAhRrcs4jpjEkbKxHoUii16khGSGC4Q",
  "key31": "4XZaK5TMt7PJMkS33kX6pgRyXRTTXJBXrPpJYdAR1UwXjqSJFe8n5hNaZpZc4Zx9AVDQo1nfLksmFowujBrLaWC5",
  "key32": "4NXyfvY9NeKPRZexmpmkXdZbTHA34iEugAxz6p1J4c4JJ8C6i4aYmgVTUYaBo4MkPDMEwdihSu5ULXgTRkgi2DMN",
  "key33": "4vmbmZPpQjKzF7aNt7zYHLVeFNMYUnFB1RG1zJehEYXZaCewvQwYS8FPRAVDUAsCTZx3ZxYz41Lgj9HzJXhosaLE",
  "key34": "5UtckM1xZ7z38YrfR5TQKVGG1CxuzmSHr7qcEyfpS61crSgbD5sxh7yiDyvPqj3qn8G78UPxFe8guEijTQybuXhj",
  "key35": "4b8LQHjA3CJPUaZ8HkoUcR239R5CXLyAd2v644nA2xbnod2pdjWA4fz9oeHxr8r1hLYMYNojRM38uHuRYUeAP4d5",
  "key36": "rw8j9g5aNqQkGiAnyqapubVj7xnU4L7cCEtomshgxbRHDTSBmmjh8Y9ZKKeh9GoupAkd5SyQC2XRepgYFLFACgg",
  "key37": "4SMTLJhsPvRUwc4htAJ221Esa6La38KU3oPweRrzZfGSt5CNy6sdtBQp6ktksvwtELFc1VGPr9r5WAYiCaQUqibt",
  "key38": "5p8jV9v3NJ9B4GWNAkd7d6wKY7HHHUnF3LHpXtFH7duHRC1hpWRDfsv9XnMHWyjgPnXudETQqFnmSUmWRGjdvfkc",
  "key39": "5NeZKQudYVeQnemEvikKmGmyZjEjfVpjdzvgL53cCCgcq5DNqr9LX7HJ9FUGvLxTBXhpQq5nazqNNLt5pnZsRhL8",
  "key40": "4TuQYBUmwfszawE4jnRvWrjPQ8C6CGgdHwJ3zQ7LbL6b5Dc3uhUKJ7tHyQ4ekSDbuEEqGZyX751yVoFpBeVgBc3",
  "key41": "nNWzzq81q5YLuwG1GRYYYrRkaHZV4dXZKesnMnb8QFKBg6rQDQtkjHAev65qmw7Qmk4repBHNcvsSFBu9xHThy9",
  "key42": "4qUd1dQATQKjSd9EusqA1NoJ5L3fpVqzs42e8g5mAQZFV7DxWA1jyp3Z44GH4RUKJV1LoF2cXa1h9vU9S3YQnidZ",
  "key43": "2WxshCQgwcsC12vajTzDFNnFNJFgCGxo5DKNycYkPkTFUJ86KRTyY2sTzcSUBLzravQpptskWXyP59aSqJieFtRH",
  "key44": "2QGMEaR1Mhnf5xh4MKEApPCu3UiAoLiCpenUivZkkW2VPK7d1mWyQyvFc3z6NLQmi6Re4rbBnKzbYygffGxbLjqc",
  "key45": "5i46XX5DX6h8m4Mt7CEX49dxsK7KH3LeKbZSvNZ6N3phxaVzzh74Ypj7k8e915VHzVqUNPsiqVqd5YwwCKce7uuo",
  "key46": "51SXg3d3FHmukiV9QedqpfXwGoNU19rrXxd67xbMxfh3iCzsEeYAQW3z29eXG9CciQz7xhGM2MSffdUk6E7yddmr",
  "key47": "3RVakHyYAJEwjbMwm2ZcnFEcTQS7pSLGMBBX8iao7YN8QzorPtnhvGmtJjziQoR9hPtYvd1R2yucP88m3axrJf8G"
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
