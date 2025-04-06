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
    "4fEPDFnUTgYfbpWNuLbQqxj5NCpewoZzZxG8wa6Gr8aSubJaYKe6yCKT3uvzmsif7KZCvpBaCkCyPupi1BuN8TJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfCB6txX2yR846xGYVQDiCpjR7Z5LrUuKrUaGf7dwrP7W7ufGHq2qEExhANGoGwi3ckdnRKXz7vQ538SdFvCLYX",
  "key1": "4QLUTco9DMnknYfyv2t7QoMcUNViEN1xZSEQLM4ZxZ61xSWZtRpzYKyC9Z5LU4drAeXC3FXALsqD1Nbs4KFAvZs1",
  "key2": "2dsmTZi4KDLpqNRViUrtxkB9M62XbmEn7DRUkHcmGrM73xbVaHC9TFXrod8zuemtE2f9Q9PUSg2iRFuZakDGRULm",
  "key3": "49qwm1kKnZknYSvc5no3dPvmKH4cGQWYQBRKsvCnPYvs1my4bJoX2AqGahTmzybWPcjaWewNP2P6VA2JZ4SVEMmo",
  "key4": "4UaZ4PbAsqU9gPs7qRZbdrfp1sTV641Pwd33jKWaJrK7TpJWDeZDf3hqCdijhgTega2F6irCcFPLoaqbAQuqjguY",
  "key5": "4Nu8BtdLXTa6Sv11bZXrQwG6XJytC3z4XLj1W4qxJQT9Gdj2jcSC9jdAwimQ8PjMyxBBByvSLBNApJN8Z8VQuNt5",
  "key6": "2jmHYT2YL7egzk95kj1eTCMtCmG3GAEH7674cyxpX8Hz5HTQVKfLZezMQC6q7xg5biN2V7XbGJxYWiPEKqR1G8Nk",
  "key7": "4ENNr5KjVsiY7rw22saXmLmqHC16vSCZgxhHyJGnmYQsB9Mmw8BfyXTn9oeGUZVQpDRXiAS35wNia1ZuZo1DoKXh",
  "key8": "zMorgrwgpSdwvcoYW7vNJTENpJz4bbQ7JjinSCX2kzcpVXmqfyjg2nMS75eCo41uu7pGx2YFj43oJ5vQptZPtam",
  "key9": "65dF3hDDfubGqWfPCATKrRiAztRXKk3SMbVkzFi1fnUU4AhrLVC4dXmUJMgUYxphWA3cS7xN55hEQjjtARpgpCtY",
  "key10": "5MSddvNdXmYSiKjxUVSY4Yfx74tSwaburM8yyswHd4DmTyZNwiTj9FG6yawrWn6iqhCV84ByKBuF7QXCSukJ9w9",
  "key11": "29B9HP9ixTkWaXgzSWP4HFBFmjkUXTdcdTSgbHqTzXddPH8Kq8VVdKxAsJUEnRkPQdM9jddGbbbyuRYzhsUsmswV",
  "key12": "UQEnRW7o2WmhpM5xieYXmCcwXvf8tDwGu76MAyLk3E3bdte5VNzWayFSpPZiZxY3v53XAAR3tpwkEAvWVQCjgEv",
  "key13": "3zdaisThPTR6GeSL31XVzVywNERRfr38yhYkUU1jqx1YUjuRhQjTTzycGcWvuhKLXE3FKq3U1HSeqAVax9TSzZ7y",
  "key14": "4Hh1VPgUvrWD2nVHpVcUutBUfuvvCfso1QvVTRPbfCG2GY4rYN4q88UC6pAeg6gnF5qCPR3MVgNx2yJwSPrWdiB7",
  "key15": "5j3pof9kSHmRyvKf2737PAFAKBvHKbQQtfcFzkPMc7i9SZpdGB8jiKRXaW8NTVUDC635Kr8rM3FxGs98VQfGmGH7",
  "key16": "5m2ZboEFN74wUEtXmS6s9mUHdtmw2MELJNV1UPk8ButxQeWvqr5wWy8fysgG6aXgh8ceBwzLE4GzC3Yt4BnZWoMN",
  "key17": "4DvbT45ffv4HKo51NDfU1mXWDcmyp8JZxgeRXZUb97NUnLgHPCNLdkjBekRKYAFQhvXdNwqK4FUFisTjywkm1aNQ",
  "key18": "5jvDuRCdNda5LrGCYtJqhJMK2zhyaBb2ht8h8brn7YLU8YC9MFPNvxzEfAyycuv4rLyS4FrZffqe1ntxTfL3GvpQ",
  "key19": "3gDCnc3QKL6PRueZZZf5p3zpQnufjF4oZRAfTJBoc71M8YAZQDoxNdYZ5Go9WBetSjYUkZLsMXzWSL1rnZMT6VZx",
  "key20": "Sf23fuQhfzLDDKqnFRneG1JBWVzpnXrg6XANEPfbKZ3oJekuu8QB8AFm3NX24DkXRLutqkJ85ukngcMkpfzfLVw",
  "key21": "4QTWzPkNjV7qkKXjxzFveE8aUE1kHthMjp56S9piNs7C3Z3i3uFnHvFF4nCFCu4dGgTLzdEoLQqYyYAmmDzbNTLd",
  "key22": "3hzXnu7RhBHNP8GdDVmqn3C2B9GsEwEBgb7UJ8S4TGLXRj4GjdvMr3Wwr8WqNgqnaDTukjwPAaWWrzuDwvdNhySG",
  "key23": "3n1y7nL3FabK3gesyWcBCofEaqYSxUvZfYeGQx8omC8Jjz7SkAHVdxgJLBNx2e3CdUpo1AitcwaDVMZeEy9nLSgx",
  "key24": "LthgCWdZqJubwxdJyr5EYWbh6gGKzWuTUM374PTnqCg39rKzjuzgtYykRJvkb4A5RpGAwMubSaHgQs11gJgKKkN",
  "key25": "597YtuMh1TdEK8MYqpVan6rudiznySLPgYomCMVTkN3RSXtyQ2VL8xjB14ZjfzRRfygExixMhEdADU6y2189pEmU",
  "key26": "62FERYnmiskPf7bj2fuqJNAFbM6YiuXFyaMtLf2zJT35UWEf4mXxCm7DrwyjpkyNEoXbMLGxiGPEHUcxQ6pnrpnN",
  "key27": "4qMj2xRnPnA5RZ44XJaWncn6uSmDxWeeeREStFQgGXp5kuc7MYkH7hbkkk6LbSh4VBSjUMR2Qfpvt6hsaS5985zn",
  "key28": "5Uf25gTSSi6UaFYhP2NjQv4eafbLnCpGceYqgHyMgywQXTeRssHthgEEhosCyaAL9jBXSUbLfSDCQNF9Xdik224P",
  "key29": "k7gdWSTxvAafZ38AovXt5Bq96NGD8JMjGZ4k4Ma3kc8ZAZtpkFiLmB7iPHdLMbQZEstsKA7Q4t367odYHNx554k",
  "key30": "3BAeHSvvfKgPnWXDb8u6R1dE1pQtuzNQyKgsdp4fNRQ7q3PoYTp9Jur1p5NoCrhWLxeTuam3TKBDuAJurzG1jk9k",
  "key31": "3627amHc5LsnPG8myQKmSpk6FWDx1mDiBcwFMjJmXRG7g6L4r8EW5c5w3vku3gnbLGNbRQzYtwBh8YBPtCnTxUxE"
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
