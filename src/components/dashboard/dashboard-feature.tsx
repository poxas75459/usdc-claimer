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
    "4g67tji9UT8jzcB2nKM8Wk4rV417wQL9GyPtugdamFWXjUC59CkYBvWe7meMqLJZzvCK9KjLsQDcvGLiPfEJaKhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oYFT57RNAdrXwyQ2nFGzQB79WBn4bP1EPXgdUZeUzQZBWvzG7e7RtrUSvttzTiDQwvG6ZPGLkbuTK2RNshrduiX",
  "key1": "4crzhEeDKJdt5r6jXagZ4UBXa3MhhiLbhyANAmKpAwvPPCPekDgStZ3Rk4v849CxCmmAS9oWrW3eVu6KNpCpFB16",
  "key2": "2UQFcZJikHGB3AWnBFPjCVfDjY1SdgUwR1oWFMAZxfTzpH6MTiFbHAcETmiPhmGHgrPD54ctQNWCKA5xHGC6mS64",
  "key3": "366fRo2Lu4Q75aojdrDm9GcVCQiKp2uWvYAtCrkE1zxYWg2NYYWks2sktAwB5SC7hNataPG8bs8LAs2XgUM9gJrG",
  "key4": "4YFJfLqKuiv1ftrYMFDFJC63wwPiPy2233LR3pnLLqDKKD1MDizrGFBugiKVprJVpg1cg4yawp7Pvfzs7r9ysEeo",
  "key5": "2jQGHXWujqCewTA3VoQaCv7YMEpkXyPNqYj8QykBR32y5H7RXfxYnonHgQ6HD187j1iFaqCGFpNQ5AsVvaZnWaF4",
  "key6": "h3chhQJi49TzpoF3cM8ea64WCL23vyLueV5AwsuHGxNKk2uNW9ehXLguhHqhaqMbTLYYJKNBB5zE1SevziHam2B",
  "key7": "5JRjHcHoJvfCoJpsvyGW4JcPYzfhaqGnmd6GCpocnFi9sPM8XDNiATMoyCDPjzvBSkYnsFVuf57ecVqpvJnCNwit",
  "key8": "45CyuQ1Ksncs1YbCDWnnt6DAEft36SHWw8qmWMr4qFhECaXRUaMiXrB6RVT6XhPqBdATKE8fFqia7JupwmP8RESc",
  "key9": "4zPxRY9Sf29sogmnDy8jqd7c453UCytQ8Fup871vFF16oFdsVCubY48rZFv5uK9rJLnYGmPXJZK7GrX7y6SsFMia",
  "key10": "5Z6uvByTxKmXdTgQsgBqZAiWaT2sgArqKFheWpVwWjbJkEE8ou1RNJpLG26wFTihbWGzWXnJ7XPb1rtvkzPfFESk",
  "key11": "j1VTaWYRF3opBNroo9jShHhiqTb4e6Toi9YCcnAVcnchbeZZMVMZdVEpiKpuadvUVRC2GHqhZcgy9QEUS1SUa19",
  "key12": "4X3wNfdMPpuHgDqgvr2jNUTh98wqXBCh9YoZVV2zhRsW1RRE7r2A5qgtGcrwgXYFvFzdeXg6jMDg3CpRnK6Xn3BD",
  "key13": "3M54gh9PQiBQDHa57UdRAN42gnYeKA4o5M9JAw4mz32gjB6vnLJMnigsHywbPSrZSCdkktU3MegBgbroMC7gwm2K",
  "key14": "329iN5zmNKCSk1dzvASi3jfyfYUKmskfuxv8frzyQZN63nUUfGU6jcmP1HnY1oSmuPAEXZvvP4G1MJuVq799BBgt",
  "key15": "2JnqT2PwVJhiRZ61joBDi1z2SV8rvvQ1tsoApGqn3LsPNgxZEXn8XsSTZTN3gj7K9hWV66TQE4kVjVH6yNz9cGAc",
  "key16": "4tDjsVxfjwfAMoqB6bEKySYS2UbCgD4ccAE5ejgqQkcXGtkTJ6JKSsjo3UFWqJWxZBadmD8bn1pnKqNEmAu7T13K",
  "key17": "QyFSPeAdJT4fqAVQQEzpgfUAopxhvPm4BkEHdye4CYFaJaUSjGxUbCyv1WKqqVSKv9mT9PkuBShENRyJbXxEDk9",
  "key18": "2LmM2vhH7GAoKEwSs5hpYPvvPTNCEafXRjWTS41bYvyTCFN6v6BYDFFxTy7brreXcZHVUHBABRzmXCY8utqwyyHi",
  "key19": "3VVNAyv8hL242rGEingynZULDJQqo4pVyw3RurL9PjsWCA9eit2oCPXfsspnPB1PGgESVTq2JxEdSvTKaHFETyXL",
  "key20": "45VpWXNH651ujSaghXwkKjQpwjDfv4Ho4jVvZjGJe8EiWE8ctxP77prFt32oRRspvBsEkTGTp5oJwnTJioSU6rDM",
  "key21": "3mqvtDoVvTk4oPdzRnXSQEM3YexQCpHwSvRSH8jcWZhGcpnM1HvHcZgub1ASDiHGbEHRoWYmZjeSZc8D7kC7c7D4",
  "key22": "334ewWxpYS5EPXhjHW3Htf5Z8H4K2eJw1vJcCdyJvr7ViKfmp2ByBvph7FHyHA6X69K6tZjfMFj8tKhaAipPja9Y",
  "key23": "5cTuXVrhWPZyzuQXYkwsUAYy9QGDkT38mppCFv3b1tVCoZkMHSuVdLjbpGMGjRaetV4FzJRQA2C2ptgPo52vNNWK",
  "key24": "77iUPkss5ctduoAWpvh549mwxko7ncvCAuJLjcfswN7MTB4w3aR7PWJEPTg6uM8Wvbt5LjJFm7GgBZfV9x3S9S1",
  "key25": "6XicAxn7YVQ7WHQmxo8cUwWvJobLtatQkpFGK9bHesG2yWboagdyb3QuyLthtWsrGoDnq6mF5MavcatBbLxSMCp",
  "key26": "5R6nmc2ZED5ZpFwYQyZetZDKRsGQUwTFycGZKu2cua2tuzYVjt5tSQGYJm6h2dvoaMBG5iuZvxEDBaxNcYTMh5pH",
  "key27": "j3LR5rpu1qa8yRm1zAWeqgdGnTzVpiRjSLdVdJ8ooFpfYg5oNpFkdgn3fzejg4E5rvoxgbNoTyKpgrPSECXgnuu",
  "key28": "47K77waf21ZCtCWt9jbUgyRFYkPT3K7xinUNab8ejkQ6q47Uoq5MhTayK99Qd41CckgDGzSy3hD6mmS5EQ29cLLy",
  "key29": "5h3W4in3EG1jh7y6AnqeirCQipApwgtDdqx7YRWCCW1SGTpBatvUmxbhgo7YCyYwy7vYUfc5jBiNZSuXkEjK2f1z",
  "key30": "XswpQpDJAVg3VoLcKMdRvKZkHYNabRMXeA2wegdw46RzaJ1rTuMtpqELVtGYeYYPWN4TTg75VaeXTjADsVDGffY",
  "key31": "4dJnZGYCbPZyC8wTVi1Gxe8hf5pGvuU1cMXgvnTEAVhQBuZgqK3W6XZbauki2MLcte82NYWUD4wmA2ABRSK9TNG1",
  "key32": "52sY3ePJTHAwmLBioPfAj76iGSimNUqstiX6BLZKsvMkSi1dVtU2ZWbNi6tmWeR9euwVbrDw2Ho59QwyJrt2grbH",
  "key33": "2E4yqwDELBH7nesV1DkHDTU8LJgvaRKXiiFqiCifN82H5nY1nVTavk8g293Bv4c7LJoEDHB7p55FmRvccFYtq9LZ",
  "key34": "4Tv3zMFv8K9AZ6crQp9kJWyUFromwbVD7RNQt67Wy1Qx1MpQtvsVjC6uEXui4mtE9CzvRr45yeYQe4kH7i8BgMVP",
  "key35": "4gs2n1BzpmPRsEGp5okMRxQ7PYoR5mbnAzCa4jdT64gtW4y7FWhAG3xcB487tMFYZCGdCxCt6gHGxpjLNxmZrJTV",
  "key36": "3CkKQHwzTfjJ3C8MzKAkd2wseQCZ8MwPbPrsRFvf5xebab7FBSW8aG5ArU7fz2cjeLnLCUeGpjFLWpCqfuDMsZHX",
  "key37": "3ctcvy6q64PrWzenQb5B9BwY77khwPpqN7NoEAsf9KPs3e8JzujHoFcRaDzhPPLE7wic4ShjiWYZ43o56q3xtpde",
  "key38": "2Bgi2HGMj9CnvUYaTZ8GLSVYqrmcX8QmHkmY9T47RH8dWi2LfsCZ6n1EycfSFtdbPR7nKWjmrLSsM6tDJ8xmWm9m",
  "key39": "6EbkELBDoq4k1aFHFp4GDpBuyT2bEuSpqQFyxaN9QGLdQv3w2uGS5p2UEqJJbtUwNeE86bAdbRTbbGBF5xVUuS9",
  "key40": "4P99ijCuBMhAj5kWjvvrPNGi2hf2AaUb6mhMjstxT9wFov33GZTSD79MKU6mrR2DQGrcUfahC7UkWGxByovzAcQy",
  "key41": "zWYvNm3GGabDWmez9Y1JbBVTMt9m7nhwBs4buXwMYSUb7i2qqq74dGd1qcoGLbQhd7GefxneuNLMv7DgGVYkBkj",
  "key42": "2Zi6J3sEn8JgBo1XxKeztfwPNfCVGskwnVSUEHh7zFBYEGMn9JhWNYY9DBGzPxMiQdzqeu34EajnEYC6idDURxMW",
  "key43": "3hnjGXrBSUwgi2ptHW4qy2JBq24Su8u5KDGPE4JaNAREooKQezpNaMigLj2tvbBGeDtSsNtvV5Kv2Aw7RimiJyHm",
  "key44": "VJ2ksUoM1jWzHuFgyvKdT8e3RhZxFHMUAV3apfLTVnh1rYkwLhsUCyhu8opb7eCW9LqoDd3xMCfuCBemeUTYU9R",
  "key45": "4iLV8Ed5bEhJoN7W2pMTk4sBYfQtR6kEtQSqscDPx5vPBL4BwXJBqb9SoBqhxv7FE4qXv9iRfdS15BmApoyfQWcG",
  "key46": "4fWfabPAb7QxH3SDdxqDRpER7yJBLP6St1byXiQZrfwCMBHwXJbc1tnZwTFJx6Ggeenc5L11DTNfqjjgBfzp625u",
  "key47": "2K7jtXFvtHMJ8VrWwtVnLoic364QLo65m1VXiNWBbDBSph3iNnL4VNQK3zVTFUU2jTfua32gQdtuFqa2MT28EeV2",
  "key48": "3P8mfu7fsBksNjM2xqmayi3Ck8tf1KqX4ihSXrTz7D5BsaAcvvB1FFQMCHsQMTbvk7fhHBdzWPxDotiKNMfzBGQZ",
  "key49": "4pD6CH7hnXp9V7C9Mg2d6CbsXY2SKAMAytWEN57yLYa97pPbrWmxAHZRzDjJfTzJDvmrpgCtetA33VFauwe9fdZS"
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
