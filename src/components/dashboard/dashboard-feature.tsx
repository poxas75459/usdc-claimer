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
    "4TacFzJMHV5GZe4zBZW4ZqPWiHmy6ZUmdmYtREJjFRKJKrwp8NKPFVTrBBQGoBKc1sRksqDj6nKVsHHJ1Js5HkGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJPs7eA1RQ8WAqvkxJ5NqHkdd28L8c8LfCceTJDgirvHUQDTMZfo7J4jcrmFNNaTYHFk1bjyVQmY2J7yktBumLW",
  "key1": "2XBnnbcHntAxquG79A6MELsawtqjvRSqmptfCh1NyWqEB1b5EeyUcF9phz8RKPwY1UCFxyP2D34NNXB4ZYbonsPy",
  "key2": "5mzVt779rMEB4DV7zJmMRopwt4YfYKnavYpfKygfHyfmhBkjbSKdJCuXfYJRRXAycyPBgQPa2QJPCPkm6wYEgG7t",
  "key3": "4pb59q2bjcp7L1BSV4ky6shJn6jxawVSBc1eYgW877oyyqsWMCiswKVotAqCcTFxGyBuLXDeDvBdhM6L4ifeocyL",
  "key4": "3BZFkhy4PrhfHdFuqWXtGbbi9jofm5hwAb5YdK18WkCy1fWiGRo8yBioEG87ctyDrtSS8uASqUvWxs9JQk4LN1Mu",
  "key5": "BU5kzdWq8gZdzTzBLdrtPz1FBxaZLXAs4uyc3A6jkvVTstcfv7H9E3YBhsfcv6A6PbAvFENLAHJAR2ifRwYLE6y",
  "key6": "3oMqTa7xrTVc4VbfpNSt6vMq6asxhKzU7XELUa2RkZp3XNKJRQYSbWuQ9qFWnGKqccuTE9RuKDAkeRhiXCFSHjAQ",
  "key7": "2Yrf3aD1sK3iH8Z4xR2CaJyW2cXAVBx5cdfNMEtLmMPTwy4ymwSdtdbt6eCucKn1rP7tZcpAoRNvVV2AghXEY6bb",
  "key8": "5sfkDHsA55xArbpfwaTxhYdvmUonAjhFa3cujVNBs7CeFe5b7CSWtUULjCTLXDcjYrgUkd9hThTXmbpS7Zoi4etR",
  "key9": "2LyXge74ioVfcLAoPitQkcVbnLXhRZRHVHsLPVr688gzLwdtAbqMQRzxaWQqZX3TjVdw1dyqpN8u757rTFPHVVA9",
  "key10": "3yTTshZCLeBBbHZxKqMVoxbyYMqKM3UaKwoSwKhfx2RBqYQ79hiBnbWHFUhByNnGiFQvVxoH1ekACsnPSEryaUNu",
  "key11": "4Vsx7yYzGZbg7yGiZLdaF9oEPSPEjftHZYyKZf822tFZQG3koHF66awxQeMXFdp1PxNBQYCy1goKAN2JFc3XLQEq",
  "key12": "37MFon7oRHP3FXzW5Gf1mssjFx2sYnWo4Zn3r626CixCY7worumhJfEWqDir65ccWC9x3Gjqg66rirY64oCpYLSQ",
  "key13": "PfgzWVEPoNXGvCvphPifWmPpWCgpNHU7fX8wsxx4kBmPRPQPT8RmJDUq87vkoNNTLGgUA2pp8JE4aryWkgUAwR2",
  "key14": "5cp3vEurasvrAvjWa4L3JF3Rwr7dvYuL5GLkJKDMazc44F2XQMURJWmtpevo1SMrsVzKYdktKJJQY7rtUKDCrmgC",
  "key15": "4uMgFuTRJvmHcHT7Wnzn5B53dPN8eNtPmxwq7ZM7ESNQUWde3RDskyuRJGAfhEHrTaS4HJB4BbsJ4fhqegbp43oM",
  "key16": "5TshdauWaKa9bsKzLxTttHRPXps5F469Vu6mAG9mDbRLhVGZUCb9YL68TmiELP82ifPvcwXWYpNYB1q6A1wNDKzf",
  "key17": "4oyjiJQzu2vaSagHWKhK7Y2cZCSpQeGrPi64U9yr4LR3NVP1nzg3XnugnQ95HFBvdo3MpaTcXj9KbKMvukj1NNun",
  "key18": "4KHwmK8QmutW6HGTxzs4m84kpN9ZaoLBoD3U3gfkpdmLYBsMgcM3ZCErUMEgqsfNwLnvu4kDxzDms2oMigghS64y",
  "key19": "3PdnmuBteax3UXf5oAqvHeUagz1dhZYjzhHz46oyfmX1xdGkcHw75wQEtbGgN9YZtG4o8LN9ZDmtC5HfeS17V77J",
  "key20": "5WST44NNSwNii9VLRLKEsXRtr3WNW7eJxJgWeW1eUx9F2AT6RuiN6cTeKuoZSaXnWuUWeeQ4f91FdENtpdKc8ko6",
  "key21": "3Fh39bxGkmb2cxocAvHM2AxzjWqwnKfbjsiiH5WNLxvYYqGhM1sPfZWZKyMkFqXX5eCo3rCYVnwkTxEEYHLC8xL5",
  "key22": "637jeg7wL6zMB4UyMajG799i73KEktUpKYHEjBexHpRt2fs42Wxy2aKZFmVnER7C4QGzFX7BgEzQ5R2BWpaki9K4",
  "key23": "4cwawsBGDUPWDE9D9oePTppgCthth6D9US5dFDBNCYjx8vvdTHNquA7sUWbDDGLweBTCtdkQxDVA8kjV4AxW7PkY",
  "key24": "378WJsaJvXRBgecLgruczPvBbozSEeQMHdznos7uS7mvZW8eWaMBdydhMXYd5PbaWGoFBtPVjiJ7RpSr1Hs4hN6d",
  "key25": "3xqmbjPzcFBnWHsNDsUH4ZtduVVYTRFfD4rNjgSpQ57Q4HDfs4rDJxECcEaESW1YouQ4JKetwZcWSgMVzFPQ8ug4",
  "key26": "5vwDtpx9r26iiNrNDrwR2K1LVPL8EoaCZSeyFCzXmPMjyWtEr9Kzc2Rs3GZMFzSnpx28h4qsHtsdDhqSExL6vtWD",
  "key27": "2WjY7PNK5Eb8bGwVM3MdTPkzB2ZKtnE4XfV8gQG5EAM3R7SaR5ZWrUTnSon7cs6MhgE5znvYudk9tgCZeRDpQHRe",
  "key28": "28Y22W1fCw3NjJCbQswdFuwgXag3k4MbZxfH5CuYwHUaqRJSLJiDYXNMNa81PtGSogAa6hhvGqUmdBKh1Zftcfy4",
  "key29": "JwdwkCHRb9HyD1DH6HyN3C58sUD4wbANUGseiyAn7WgWketR9f551xCZ3nJJfjbgjknucJaDWiK2VWQeZp282Qx",
  "key30": "2JcyHp5Nfz6sZdMLiWFtNE1PK7vZDfSfK2Tniq4fvTCM9Dy9mR2hHURUY1kBcHs4cvW43JffzCzn7yo6bC6FDKbw",
  "key31": "4inpgbHkzPwXW8CWezJdJKkp8NG1MHY8BuiudZrgrJ8NQQGFj6XHuhrgyDFa5kvdyU8MvXNH7LwUsjjhZLMSD5Cq",
  "key32": "5rDhe2BLLjPvubkTeaNMYw6PgY27AQTVtVbLzwuZusszkYmFt3G19XLBtq4Md9Ww9fsFh5D6U7UP3xFxt5uvQ7dY",
  "key33": "3NixZfwFoaxKWcMpqp8V6gB1SuhbKbeAVSf4zuBEGwchT7PydUVtMV2PUc3m175WH571vcqC8gupEeHWBFQzuvwS",
  "key34": "4UMxmnmtTAxfnnafAtDcByj489W98FpHkQrSHCwjZ2DCDCcpzueqogfjeVveNAZfbVxv3VKYq9KJqJmFdSPnUdyx",
  "key35": "4HbAK4vTwB2mvfRQoBfrPg3sCrZKmoirvKMCexGbq4YhbVGLqW7Y4NgMbSuAEYY81P4jLHQH9JSrddd8GSgctnCz",
  "key36": "5riZ9hpCLkcL5Mxagduy2uxU2Wwycvp6Tdk9UpMQZV4wuYWbjf1hTjheM5un1C68v9gjCt9B4uyYyem2kuit2z1N",
  "key37": "4aNrSGjULyWf5Z8ZrgLYqnSGLJPTXswXHgEQEhX9v4JZ7Ndh2QXbU7SvFCGcmmakmZeojojGVcp68djzjm6ahmiF",
  "key38": "3i2HHUFasUJD6kQW2fPxc2ujAE38rv42gZN2U61wrTW822zVJJ8arWLoABRSpTWJr39rWJ9fKZgkHrh9NrGT1FMg",
  "key39": "hit5QwUys5djA7qDE1CcvEfrq6oy3cT8h4282y1ZE5f5sk6ej8gMc6p8BBBCyML7oMp5ie6Ebbr4anHL9yrWtNg",
  "key40": "48GDnL7KaL7MP9HRxdiaz2w3YUsM9WfGUNPo9y3cSoKwv3FF9NJnADuNwnNZ688s5JE4z9zK4RsNcebb4eZhbgmj",
  "key41": "4zRAXBbuEW9bWqZsTfMnSC2ti46zE6hhrwSLxqAMh6bCqHgK2wBbAbSu7R6BAQPpTv2wdFgDzF7tnX7mMcJBkF9q",
  "key42": "66P161vAXWY7LZrgcj2FC5ixK3SCuZA4SM79yeWX5R3bxUaBi6CUrFoZRCTaFpGbdXqLu1feoz2DQtHHctfeMvhC",
  "key43": "4vThBEMhc38AVPys9bRA22Rkh2r8as5XVFVNLxR8uXBx3pdvWkdjedjoVkvH174eahoQVBzSMVaVpjEJ8g7b3Btd",
  "key44": "uEf69eBdkWzzL7UBDFhqhvTu3wYFxstGZiNZ9Djdtnupu1cm3Pr33tnfbCp9UfpsXCD1EwrWxJ5hJWZv7azf4Pj",
  "key45": "5Fp3rtKBX8G6UepCw6B38ewtqvAWzwsMoZqfdVQfNnuyBtHmEq65W1sJ4V2FWcphq4G7BKidSMnfmc7w8woPTm8g"
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
