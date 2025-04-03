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
    "uUBTnvffTE9oHZ2bdYcXAvTUNPqwmcBLtC41GeHLTDWfpFydDyPQLiXp2VrhwB3yh2WKhrRJMBfRfx1ad4KjBka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5derGyYnjgUJRZwuNGBMezMWpKxSeUYKx277PxyrUYA6GaiydAHiL6V8ZPYwWycVZxgZgpyHFTsy3q5k2DnKCxiA",
  "key1": "QWbbQJ4DBizu4dPuRXPvrxF5zs7L4fSNV2CZJ2uCpCqGYHaGmcpccEGaoq5axz5kH9ujoH7fK8kYfcpKiHeHs5b",
  "key2": "4N2zZ6Qxvg8nBLeU4fdjaxWdvPang4CzAfPsfWEF8jT8X6yifx7rEgS9wPNuKJD1F2CuxABt6CdjhTEj8PLGW37q",
  "key3": "3DgePqQFt7mrpQm7w72Ef1mcV63dsZUdrx1Rnowj6gze1L9d137KUH14MLhDS8Ye2SVWUi7KQE8KZsNg1qYXU8qK",
  "key4": "4T5BKyJbXwxcA8WMWquMwJXtpb6kurgp7cxTGd5qHefz3AwEGAQ4bifYgSDT887dmECrHGrhrAjfNhWNffBzzBgG",
  "key5": "2UwTKjtNS5Kr5jnvkEuvgMRktbyuJr4ooHWhSJKAsd88oWF7jDKXx3fV8ZTmyAFvw5vzCYuh2TYpnmhoe8gXC3Ti",
  "key6": "2asgrAG2dBSsVp4yqZHcz4RW91iXmTWvRacAZ1Fw7oYNqSwdykdTpMgiYy5kLcspv8vDzVvYnDb8p9vg29j64A4z",
  "key7": "1yxWdKwePgRQd6Hf9HhgAJytQE7FS3kHiiyMaoy6jNLzLhESJoE32hKf5qdNBppxKmoi6imxtCR7GL97r5wpRB7",
  "key8": "LYNbVRM29HfuFwXF1Kgy3hzhNCX8bW9CdSPqiUcafeKKPg7Pau8iRnkmioD2KHpbkjp7M7sTRaW9kkaXZidtgyh",
  "key9": "5S4v1b3AASt1zGrGADcQXuYNDD9HuZv9x55wGN87GdvyEpBX9x1qbY7anaFT6tzTHSKigbgsk9PBmTF3EytzhxPt",
  "key10": "2uT24Fu84ngB4CifAksiSbeDPoSVZL5UA5ypxkHwKVpe5rL4PPwTBvsohyAuVabAKdwsrbNR4RjjmCCjzBa82q6m",
  "key11": "5xS7KwMsNFKEEprjJqKcVFroxTLCYATLjompKqbNdZ1KKvANEGY7nzR3axV6FawoDJrWQSAjjs1eriZhePds4Tga",
  "key12": "5usnTC2A26vjtsXKKAJcssQsYycgjU9mHfeSgf5y5vipbAod5fCGURbGxmGnKx4DXJAbwVscTzeBUkxPNLBFEWTb",
  "key13": "5cUvN44Gy7ErXVyKPRciLnrL2cZe5MmUwWSPMPtGTpFSKZRmDH1cCirzUwpcvP3Bq8uZkrpA5s1PTGvrxV2421i6",
  "key14": "4JKLJu8kmfwNR3vN6HAYvFjXioxtiA5QA3TykGH2ZV8dpHh7xkxHL5jC6U3ZpgPrePeDetAM5jN3gmhKGbhKJZXY",
  "key15": "42Lm9cTMHfDNpbuTgoQVse9qsFzUpn8pXc3tWcbJ1tqPboEMmXdNZ8PpVr1Bcq8oywHtPDSrMn6PMbJUmFfmqNyT",
  "key16": "7Nx5zF3zjNLUfkKaquGu9aC7yRwuUhVuzVeMANUecc2pisj6DbPQyFRNmzXkB7wGu8WCCxPSWEn32WVaJiitSJY",
  "key17": "2VEkXDdZbEH3dLCdbFPfHX7zG8ajN4cMNvVDpdgqusyhtq7aT1PNGSmuT2QzBU9JtEeFoM61ikRGuVA4KJRZ5aDN",
  "key18": "3WZ2eWpdmydm8xppYMpGz6uJ7K4WDRc3xNBtsVde7ocxk3FJELdU1v3pBm6e2bzPsiBJePQ2u81Q3BJX2h5BZ5KB",
  "key19": "4agH7mZBj9n8TJ6SJTEwaohGpXar5omhc5PaRh1QcmggQN53JAJbdjScRih3nEAqBk3MtB56wKbAE6GjRjMVcMsz",
  "key20": "bxxo92nsvuExYwzKYoaGHBEoAGYHeyagSkzJGEs99gWKu2eRMWZ6yoN359Hwgq5TWdG3z8hokRWq1wBdiNYLSfV",
  "key21": "5gDwvjoiQCTPP5vRAoPbfDdDAFzdpzYwTtcTyjQGtZ8kqu9su31jYoBkYJnHDzLVFNs9V5abhm2PSkJgzRC7YEXH",
  "key22": "3w6yWtUKWWEJqFAhZHAK1CsSVhwzNUa8YRne8j5PzWMtVE78zFr1AD3J66tLBqb48xEjiCg4mGFL2dXVqoqE3czs",
  "key23": "4D26gPLPpqvQmwVTGLtHj1f286WxvJiL4CLuc4FY77G8fUWKgUheDratHpm1qqkYQFSWAEmkj7FSVKhjx8DMEmVJ",
  "key24": "56qV5RttJ1zSqoe3wrq3mLeYbdEPJd63TVznHBX3kMgUanVn66JXY7Vr1rmvCnSpnbk3nnxaTkMk3tnffdpNa1HU",
  "key25": "2qW7NVd5Qn6BychVumWiEz24F2KEmqrP3TMdab4mBYnfdiGgc6Dc6yxE91ykJ9mNvLBP3Phy3YjQCPQnAXAE29Bj",
  "key26": "2v1EdmcsVinPu6sfKX7ieweAtLxBHr1FiKB3pv2Yvim22cyfGz5jKZwV82TFYStCfdcDvRhmUMpEoPBwckDMe245",
  "key27": "v7E1Dwq7rq5y1NZpWsQbh9zfBWPqTyvZdoKXBVn3sDK3zxkvuLrcM4eDXAanodtgnz1uhe3wK3Wum9Hzw1GymQA",
  "key28": "2KiKGEQrC1qpTDzsTgMssBYwCA6aZc9KHyx3XhgaHAWea1QEfKDzrxrXkVneTU6ebwKnL9sYYBJ7uomFUA9aRuh4",
  "key29": "2LjrGqufXFx15YFWdVnkx3eiLviNTLV5yxxrfVLq2eiCoMdKPdzSS2j5atrbLWbroGhLWbjyEvTDuerPmFXVmzvh",
  "key30": "383pRK4UvHq3eif6dYj9fBdYCDrsgn37vUb1LxfaBhMC5W3jWPg28iCHyapx9ivURME59J1mmP7qHsByVKF77CS8",
  "key31": "PmuPnp9aQK8nBAu4zbhP7H1bqi75SbdKT8ZvPyiEEnNhZNmMqLvLM6Eo7CYpXUMvCNLrhb9Xx4Gk5Yc3yKrfZgs",
  "key32": "3j623dXAe3S7k3VpasyiKFHb2kvGRBN55Gm1RFUjyjdoC5rScNX2RcfkxRi3FWVhJ2HEDpB8En3VcD35bJ4zLK8o",
  "key33": "5qKaiUyHWgsBSbNgDpJ9zCL9nzMwQ9DdbPcJMCGXAtRf8J3mtG4dLTWz1S3f84nC2WhdFjJhpfUPhufAs8uHgumv",
  "key34": "5jt3N5sWjB9zUMFQc6zg8VnHK3iiadkJJSQGeKgFc8Zw7gGZvH6df1C74HQz4gNwS5J2NkTVAiY13srHnqB1Snoz",
  "key35": "5ydmfwfagyn7VAs374mvqdWHY8ydJ2a7eZCGhmHgQfUc24zjeXpauKEE19uKQGgWDtuyfPwo8vQSvMh7dRMG8acb",
  "key36": "3JdEETy5ngF2K5xCby2xEEEjQ4cs8tdDvRY7aUzXB1rQQjH2zoz1DpZTGzJyzvRUELNtQS7iQfGESnYhCp647K4S",
  "key37": "5bQmDMqADgZAqNjtfHUroUDDVHnh4W2fsn8GieXDo8DkHwBzApzDRBXQtAuCYJ1vasW7eJWgUpGUSiqa4kP72W9t",
  "key38": "4ZKnBCHSNKvGoL5HgMiWP6UVziJXHx1egwBqkGK1wcCRtcTJDcCEoFMS3vaGwvd9Yzm4PSjacYD2E3VdBTVatSnG",
  "key39": "5v9Y5dk8N6xBT1mB16oN4AYzjnnoKZ4xEJi5zFkiHq8urNkE4rS8zHfLcxaa4K8ggSUQUFiDHZzxmpgUAxKKoH12",
  "key40": "uTqQm8oYTmmrgobNN9DpBV5TqxgLaYoFz4z318jQj2atcV3YneJSTemz5WbcyXwK7J1ZTvBxCNTmCqpZDnowjAG"
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
