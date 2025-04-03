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
    "Hj75w69GtDqsVZECheooRm83VmdSnmAtyNyTAFQ39bAUm3LqkkCo42GXox3Cpp9u2Jidc5sVQAcTsjiS1NsqZQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFxPyoAcA26fPLrCtzXH8C5wfC1BpMpWFNdMpa6AVs5HvdPcetEc3ha7MqRXHoYJFN7ZivLT5f2FLiJ7CEtKGGo",
  "key1": "3ECZpinfCjGATfdM2KaP6qAoc8MNMys95nyDm9e8EUiYqJqkwvogR5LCFg7ki6JcRJK3f1qct3B4AbNUMQKnrXP1",
  "key2": "4EMcA4yjrFMGnpQrqB3wAnQ7rA9SVTFwZwkkLfd5DXn1VzjzRSwmqyugpiHNPeTk1j62KMjaDMTMCeSdEBxxNgrM",
  "key3": "34QU5pZhFpGbNEFLk8Ti5wS9RbT9qsC4G2SYTSKHwgmesjMqsm2C3BDDEzqMkTyywYUwgLp9HCDne4BBgs2gMqob",
  "key4": "3SnhZTWfTnYNyqccST7jr7NaZeMxGVyCVuHKLFxeKA2M5i5StJJ7JacrFgyMbatDRHQPdxipD67iFcSJHDZXRedG",
  "key5": "xptajAgjtWQQgejR2y5JZv9N61ZqKn1AtqjiWBGnv5XSLbwqEQXbNM6H1wc3vaKKDQKqfJwRM7dbRenb9nAzHcg",
  "key6": "4JtbvvWuRCaBwasGDC5JpkQxhxiW2s48yEwrSYDVzTHVD5pMM1dyVHhRBxv3XLWgJCQMDJpFcFPMs9N1aGaJwUmg",
  "key7": "3ajQSUhc4TzLvScnXykVNZMc3bc91yHNQvQcDdJz133sh4czskU9tp9BgthzVax4YDDgyqbkiBKgDRM61sbpVfpB",
  "key8": "2VT8mBvXhMHt5oHeRQpDNsf2Erjbt5Liv1cRsrrK2psJsvAuv1UxG6SPhf6fLpiBJhZtCYoS6a6K95PsU9GsRxkj",
  "key9": "4PDJhhqxZ1BRkLRmYUZCqm9xAMT3Z3MxLmCMmn5XN7jhcPdEfVjdphxSbfEgaZKFtZEHBsf4jo7P3ENBuw8BdWcR",
  "key10": "5Nbkhxa42rtvEPxHqwGzD4RoD48Nq95W8n69UXPUYacTAjPNMqjTSJ3DDc2tazAzPhrNvihHBrWG29jg9ZiVcjVP",
  "key11": "4WrxHMaP8xQvBtGZTSwZSQyRewAhLWPg2S6bLGoa8RSpSTHNLMKPZV6JngdFSdFsnHpKmrvgFa7xNiGj1Ca1rHmH",
  "key12": "4VTUpsXUjRAu4MsX2hCtFuHfzVCSaqDwpr64RJCQgH64kp7MWsEfgBCNmCPYbzjWZtztE3k1aNzAE9fzbVmKyWsq",
  "key13": "3xMGQ7RDhDtG6gwBhAGzx1EGXkBH7A3Cxo4RVinZDVrBMYtuxAM9o8RYrUdSkfHGSvu3ab14iX81mt823WHAkEt2",
  "key14": "3rKQwRG5pJUF3LiKEGL4xYvbpWAzmyfZPku8E7inZToaiZc4Es21x5wV3nG2HB2R4LrC7JAVJGgTifksA3osma86",
  "key15": "5ypDDS3vHZ96dTKZiZEnKdqDtaMruWzxLPzKuPMLJTj5Q5qih6GxqncMy4JkcXELcMT9xEvWcnUgi2p5CA7TBhof",
  "key16": "gzPTMv5LnNVvDgcZ41zZoxPRo3N3aiebb75cGSJpyxtj4mMaWwRHKsc4y1rQpdvV7r2PonnZ7ifhJyvMFTfT7Tb",
  "key17": "Bgy6CWvxgx9q12ZnaF9jmsTibPsP7aK3udVU93Z1P6rRMTDpM1c71FN6WgBPNwizVMDAeEwvuASH57dmtRyLeNU",
  "key18": "3DjwpAWJWkpdHrY4XHmW9FFVJjjsNPBqsgPzkfJfLG5tLL5R9S6XTnVr62hXDWDK5B84WjbPHS5RWZbnp4ikWTSL",
  "key19": "42wguTBTzs7hA5cX4LNgLqSaMD4GZAjPymziUw8S3furh2C31okYLc6KVcXH8i1P2aYmxWtUeT3mHxRWUkYtQhG4",
  "key20": "2w7f5T8ksyT17YHZx1UHrDncKenaYBs7HhVtgokBcvKsTVtH8MaoNJskcyvhhcvxgmF7ZtihM4jL5Ce1rKKBWCVa",
  "key21": "EH4thdmUWmEJS777aZkRfCkkeFttS9qJPzt3m3vKo4Gb8aHcyTaTk7NvHpeiYzA4USTnjxuFTBGVkWq8xM9pkPS",
  "key22": "56gJU2byvxuD6oZR6mqgj4Zr1tfZXCsZs3WSRVre4poBBntghN8Lu88MZoVQfCDyq5iCAvTVzt19z9B6J6e9gLya",
  "key23": "42gPASv2KUt54QuqDVnwC7F3f6yAuu25Ahbq7YMc2VtB2tkM6QWGNk6hoDYFcPZjM1J8ebGJzVujd4j2ss4G77Rg",
  "key24": "2S3W8C4RakfjCavbueeHb6mZAwmqA42NvqDnxZkpeKFAkPHF3X689WZ9MiGwjU1nDjFq8MqrU4d8D1aXsoUB6Mwh",
  "key25": "44ZNB1B4wsArivueZe8hiuumoEFSWMRqQK6ZYHebK18CYXPWuPVywwMTWPWhTXeGe9GYYRDuUfqVgGE8piQJhxej",
  "key26": "7LiUodo7AUYpvt6xuJELZWT5JfeNoKcgLA6k4igULsJjMWGJVvkMUCrfHXQ4uvisEP828hSWJUHcHxKc6K9PB91",
  "key27": "5yMFM47wNyNv3d1bEiF7PB5HEsAdyxLFeMz74ZGdbdNLFroDr6vNn39ZAMdWqkJTJ3ryKqyEbV2VUrCfx4ojV2SA",
  "key28": "3b2dzfkvxjmC4XSh9WCk2iH65kL9ifj57Xz82bUUrxPnkanpdak526or8jVHT4mTpqxs8zVxGWgR4FPwDkmTqC58",
  "key29": "3JodtxMLRRNhoBSksYUT5zv9AYi7KpG2VmErzg4TJhgPVLpMPLcgE12H9oR15imy57A9n1qekVvwLVu6kymmyrrt",
  "key30": "FayUiSxtFrmEVMdxdtxbf2nAaZxKjJTDTNwg9nWRSF4SNVEnqdbWLSHAGKLp96Lddx7E5jZprJhnBD5u1uySc4j",
  "key31": "454NNbYdrmupzTvLLJj42MQYTKN15EUkAYjzA5R7PbgPQqvt4DJETsNpndaSCMJsxSkCXYNuqvWk5QSRrpgw8zg9",
  "key32": "5Mw9JgKTKJkqfZnBMbr1184moMubzArBLVTjoeDCF6tRWpzKCu6DmeiWG4n2xibzdsTc9aGSTDH3X6nJeuB711qx",
  "key33": "2E75svVaJ9M1hmFytcjKLNqzHTeMdt7ppSAHeoA2n1yJ9MhHHpVRgq4No6wKnvjZuDVBd8TtSUcJpLgRNJCiJsT1",
  "key34": "3TuoxGKDuDdKHAmsLDtnyaXmMyeMB83BeoXBcN5CG7RxvLFS6ypSYVpr4VgiFg8NHDV7sgyre4oMVaAYWepk64nv"
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
