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
    "5jPzpu2q7eVKYY4NtX7wE4LYaknnh4iSMmgtKuwQFtgjo7Sf9wp6oRd9vFM2pZyG8VaMkFyLbPgTdfB1Q6CDav6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGYb3qYSV7GKEFyEkrJ4f6TEw3u8A4tqzFbJ6NFYiszGH64RRdQReuHk4zuanx8FsEqgZxh5QYCgddh8HgxEfik",
  "key1": "56QGuKqg1jXegDXLTwdeFEUtijyz524gEKGkQYxsmBjEteymVukCHGcKmF8maZeufQ6JM9nJ3jhBWgneH8sJ9X2T",
  "key2": "3V8whxXy4hqpnVbtjHGM3YfaQrvtZNYsrAfaKFA5WRT8nKCyGoHMRV4CCuyjfRpNt1b886mtweBkBK9qddjatFSb",
  "key3": "2zJE1x3MbZRjLxwdAh54zQWab8bZHSSd3rUcz4nqyLEKUuqzGi4dy2xv2Jzdnz9tPFFrtw3RuKu8gbYPhMJe38rT",
  "key4": "5RSCGVTpmT9EK75867rF4TYzrBvdQH2Avw3dUoUpesM8WhaPVyqPTRVFochR7ZpRApgriBFvGLRYnf1xGrwyzGBL",
  "key5": "5KQ5ewcuEPfwKT9BKakNxH6vhm588ae869UT4WprKUNZf5BNrtFVtyyydcqEwaF64YKPmmbe77gN7JZpcjK7Jm36",
  "key6": "ReG1qzEXXVZf3z99rjuB6hTwrDM9LLQFnkMPZcrsdWq8Cq65BpWyxRfLJY3B36pAu9f2e59rfyU17efrHU5yCmE",
  "key7": "3N2RHJyejQSWTh76g3HwbAxKAcv8ZQR11T1XAXBfpM8pFeobdT7jJN42FFkaAeLFHzQeH7gs19XES6crEvQSHT7W",
  "key8": "2KskYR3CDPpnMZKWQkhgbGk12p7MSisCgbvQyhPzsgsec8nztK3Sy38kxUpWh9yDQnz8tkk3wsys7VMGH3eWPUkU",
  "key9": "4Nx4gmhnH4U2zvtRs2aipaxRurWoTxfvDGqjC4wDrVsinkmBEW4YrjychS1qDJWhcH33n4Gx3TQcXYKjJzd4qnZo",
  "key10": "63wMJjdcsyDt9pW9hVKBtATuKDviFeBiwbTmzvH699H7shdEfHr1SbCAxuWCvfh8TWSXDkGzbG7aknf6eXmGppZq",
  "key11": "bbs8uMYikVCTB6ZS4jXcSNNYRNkiF1G21vxNyGWCbsywzMo2eUjh1sMQre9qnaBAWRycowzMWLU7QAKnNfKtUBf",
  "key12": "2FMf5jzPEUNWD7KZa2PzDrwcrsHVkkWkVyayfoeUNAT4pq9JE4MweJWLHhf8YSqFRZukk43pUhy6iUmmVv4av8jt",
  "key13": "37jd6gWAEwveW98b5HrFaYyE79yEfVww7YZGLFiXQNheRJyZucRPd9MXcjW4754FvsuyPq3WuxNWYzhAcnHfAi4C",
  "key14": "Wnvqcxkix77NM9D59RMU8PkuLYPeRTFjGHa4xko3aPwjHDEpSGCUFfn845njTc3n4dGRpEFmF27MReXT2aYAsME",
  "key15": "jCsmfPJYUai43gc9k4EJfH3huVHinTELNCwMGQGG7sKssRpKkbvZW1wHYT8Dd5WytuDvr7rPBYs7euRWW7GRmkk",
  "key16": "2ZwixMmijpARRMMNSebzFdc9ygAkjxvbUP5Jy1X4h5drPTCs8fCMdAR1c6GHGYEYZ8RG3NUQYERfy81hJ5dMx2qi",
  "key17": "m657AVQBFuT6LKn94NThAXH9SCqgutfU2gDTzHggkfAvggAAUtiXTvrjnebJPyWj6KPF8qp7hwuGxfnM7LTcDeq",
  "key18": "fVkPpJ7YpCxpPzrkEJc2PbnnR5vLPuCqDoXUq7p2ZQgtAgLMXrreEpGHTegwY8aeTS4oz7G4CGkkMgFNChYfnQt",
  "key19": "2UtHSE1fUFGSJKonVkpvUm2JYTRAN4zUQGF2JEnQrGrzBe7fa79AECtz51cTcrntML5rticJDv2uRrv8TqBiCmv6",
  "key20": "4SaqB1gvcDsCtYyEftnjNkrRksBWiVcwar6csB2T4xS3xfvqD3VgocaBKHciTcu5eUS2z2UzPq5NohA48j1MZWg6",
  "key21": "5VZfHLdEiyvasnc83Sb43tho3RkpXc6zKnp5BpvLNC6nygbPpKCgKL7eemYw5KDDeBEgFf884N1pfKkcfAEWSR8t",
  "key22": "5GdUHq62qjavx2EMX1rR5JPr6pctNZPcDu1qSqbMQEbSogYxpCjNTDjZcnvNSGDEm4Aku79CtSoX5D3Zhq4j4Nhw",
  "key23": "5ECqYSUeuoJFSdxLYMuXujQ45f4EeEbzSxNWdwW11JNQoDTYaEmLM5uy8aips6h68MEgX9oHzRrRe9QT5ExbX2om",
  "key24": "4kTpTYBGZTR41EM5Mu4Yo5nuHc94L3LpBP3goJhTeef16vhSanW1wqQS8ATJFCPhY7e5r3wJ8uHGZE8eUErU73tw",
  "key25": "3K6Dv9m7g6iUN1Upu1R8Qy2KLF1ebS29ovC3XSYUY25GfbhrpDCcibvKfczmy2rM3MWSGPnkCMiVsEDv4SvDvKfM",
  "key26": "5EeXD49yPTwav1MUDttaf6mDMbDzju6MzHGVTDUS8xkJTaQ4tpw5kbLez1kaGkLbUos8s4LcFK2HfVHnNUSD9kXc",
  "key27": "4Poc6DoVuCeMrAbsiHbePmg9zPHsTNuZoa21RanTPpSwbbHmueWjPm17qDcJXPQ3eTjeGLyW7CrY1trbgdHr6EMH",
  "key28": "3Y3KynLvx8Zxwe4CWWtRb7Q7nePqt1tPfdSQMwvtVV1rzmffyJ7QvXU1WLpk7zyXCDjUczQRKkzZVGLvDxLhKKk3",
  "key29": "2fwv1fBESKxXMCsbeaQiDSf85TARiKmYHfxcNspNEo86ffB19tjVou4TEpB9dFbSvPeJwtjuM6j5oX3UDnuZkEsZ",
  "key30": "4RpWKtXuqpj71dWEWu31VjkPrqdzgHmZoPC5wcn1e2WHvBrxe4Uf847N1zxbwCCbu9icxmXoX1BAHX9LiKGh7YUh",
  "key31": "4DUVSt6MXtG9QskxBZpUCzBNV6cpv2QBNZg2TD4HxKDAubPg9fGvKz5EXzVFrPxTCPxRFTyYhK8DcfU6ZjjpLT8c",
  "key32": "3f6DLfHE91HcFJ37AzkqgsGfkaQzuVzXCx4s8YEVtto3A7WH1L3sHHzdf6DFCLk75WprwS9w4XtzWoRt82ssa5yc",
  "key33": "3giB63rxHyi8NooC16WzvQJ5tB95Nhn2TmnjNJd4i69uYQ23qAozuU976KLe3E6y3dkkC7uowBUazxnhCnNK31Ta",
  "key34": "R5DBN9QK7V1KstfqqxVvsCVGZaHmHi4wzzPuMbMKUSfUFRi9jeGFEL4nAsXG8aU3ZkEtGv6vXAHfnZU8pik9aKn",
  "key35": "4Aia3n7gxaNFPPJwP5q6GUKtgDUUTR82HAj4qWn8AMZwGE5Pc6p5zvYJx24eQuzEeyJ2LtxcKanwJPnMvKAGQy5K",
  "key36": "3xBnKHV7zQQaQeBkmue9fLBTh5oiJfnk9UVJbd2f1TqUPeTczHoLtZJvxA3Bt3WuyTy7ghVNRJ5nvtmWAPiv3bS8",
  "key37": "2yvMjUzW36Xs8PHvvnvsqTdgnZEpkucF8AJXqSMxi3xxwsQEbLbWV2mz9N6iXP3pqkjVcQL9reQ6NhkGVaMzcWuQ",
  "key38": "2H4YAe9jMN1o32yFdDz5uqEL91a15Aiqas2DjwKhUShWHHEhWaqiraUdTxuY1nWEonq68HyXhjkffTXqFUBNGPCp",
  "key39": "5bxjFYw6guNQW9XmvXjQrEagJa75XsD9wvsuGYFbfYMbqKpynAeU6xdKB6pWKFjcnrihjRWTPTbeTWJzHaEsn1AP",
  "key40": "2XLm8McHzUHfSNJ8m2AmDhtwZ75cywzaUvtDg9kU5S2MLq1XFKxMPV6NYyfrZWuxgmyWKihEY1nzyWZ9PbpLq8im",
  "key41": "3gKNxbKn6cAnLkAPcmwLxfe6sjmrJHBzfwLAX5PRWabXXcnNHZVEmjYWoejgpAWWxPaaHBqQQKvkupEgQ3kVzCSi",
  "key42": "4gdkeDtUmpcmrQ3cd9RLaSn6KRvzTi8pv86pkwFXDCYCAaCaDTmzVDPTmX1cBYedr4dZ5RC5DdKarPBYg7bkjhY2",
  "key43": "3UAhNShhkdEVJCKCToF1ZdFf8EwcSkn5pnxCGVAPaL3ExZSTRacYkvVhvmGXvkYZNZ2MywM5pTmcEEMBXvbvivzv",
  "key44": "xrvc3dhaW2xA7MjZmozVEt4SxeQDQSwqJjGjNAR3wSKkPcbvwB7K592NQMMtUfQz72mkEJAarYMvEDTEFt8eYRC"
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
