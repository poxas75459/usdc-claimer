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
    "3vHhbmbqPqn4kR1qfRyyWddq6bWJyzRQhw2PxVmcw6cMgTbv7GyPRDNQT7kNs1EZNpXagj7BQrdCSSrq4ppiGiYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdwHRnP75GGp7avftsiQipWFtoCveMDFhKJhjCRwSon4KSUJZiushgqnu9YDey8dDr74fz6mDX4CedjfkdAauCv",
  "key1": "5SmXxEb7QxfqzqJ6o68oNWpLJEzm9qka2uQusNwAwSdBXQtMkGQSnW35mHw7abopVCg9tz2yz8cVeTXxATDizuVs",
  "key2": "5PgBRrSzLp4nqSGDMaj1sTgLQfTTN6A5Uv1wQB8FAsgXMagHoD3VRb3DTUP92PqKp4rPLwT4h6tMnPSuHkAp1ZJa",
  "key3": "2ngsJQ4YNu4zLoDfMLPwWDzY14RxwUPkWBLXH8CfzFUJ9Egk3TmuhSumhjpGc1cA87Fes4PQtK6XnQvexJJfs2HX",
  "key4": "283jRotvizmyusZes7diwzsEmyB8kMMVhLXfGt8ioepJ7yGEREiiXsjotmBTu7CaZXNhXjTttorPbT4MtcHxnvXT",
  "key5": "kwtyRmwzCkTscL4jMNgmgQT1qUaqxR5Jrgb43PNd68TEhduxUBLDBJivPcK643kA6VM5H63fjyja2dtsCsh89Qi",
  "key6": "4GTpDky3c55emAn7wFh319d4V868qeg45KHi2yeMjA8HdiDrs5REXJ4DTogwELsYShR7LKe1U4qdDrqwdTfNyvnH",
  "key7": "3NSHmdh6h3NnoCBuZQkrj7SwjcyXfERhPoXSqPZeqSB965rX1raiDEKLmkMPt9JjfBP3nUXWha8CKPmaRr9xHJaM",
  "key8": "5w3y26WVY7hSLZSNN6ErneqYz719P7cRYghxQ6YaZtDuKdYhfjoA8hEuF7gYcuxk4pxjqwHXkpxAVYrpLUv2fAwe",
  "key9": "27jeu1csNTyv4Lo5U6dgngMbqmfo1SCsYoiBhv4UQtZwrbCTn31U179Ggrve5gLRLrStc3iGiofU5QodXZ2dRJ1y",
  "key10": "EFiJNzAUf857EU9vhQtgnd64EBBgRoazaUM1hJZg1KY67LS8tSZDRhTXMssacW8GAurEhqHZHAhzEQmTk51krsk",
  "key11": "3bwfA2MMSZwc6C9ts6knbM1VGrkfUQXEv5MbEpP9bkuQsQTDAA9uaoxzpeCDHP8xCydYGwUzn1agkFyyr95eT8Fb",
  "key12": "5qhhjX8youJS3yXAwk9eUiLwpLGPhXn3GqSmS2Qqm4r78YHPjAaTXV6guwzaybeXe6QZnebKi1Zpx91Ab186dVh",
  "key13": "3fUsSoXtsEgFPmqgEaP9YWXefsEr8TNUtwotewUYKGRLziCgpggpKhCcf2bZoUKyWzcGocVsVXjfFEvW4yKpkNht",
  "key14": "5FfndB9yJGwcBiztj6i6iEHaF3AsipzHFvAHyjvxazVmtZRtmnWCePPPEB7DEPnV3xYswChwJHAQZz7khn2oGPRy",
  "key15": "5QSCRDFcEx9pB51NMnN35spKgqLSCPBpKNznWwvPtyQEeaFesTtnUz6b5UCthK5ovGNv9K5gx84QrTjVCKcuBvbj",
  "key16": "4uHQNbF3qXAeGDGspHGG7uTm5NkZmN7zsFivo1K1cGB1s5DxdauwfxhHbGHtRBtgtDz7BtpYL7AqcmJUo1XXA6ks",
  "key17": "2MzUet2gLHALVza2xAdLP8DthRgK15P4zb1zPDdyApFBBWJCQkuP28z4NwQuUuCeiQwowdXhpUvCXjnKfnJYoNej",
  "key18": "2KRSAJWd2QDJhD4T9hMBRdyHTnVWaemSWnNdQMoDRQTEDRtJteaW1DkWRkBnwhD55W7YmZyP9iu3QuvNfhLKVy9P",
  "key19": "2YpVfTdGcvzaWinFF4HkkLTyHbvL5qxwTRLoys4vZSdmVZsFR74y4f7VKEAjwEN3RDnGjXDB2BQnMJX4uPHjMkgY",
  "key20": "4hye7ryaHNvpfxqDEfeqAXtFrWVzPszwYacyFmJycJpuSz7jo8f7Xoo98Fg6Vx59h9igC69kWhZcM9HV26BpQcC6",
  "key21": "5R8EQUHMKgcFNaSiv9U8sVxiAekWcmMBwcBh47WJ5BeEZbaDgqNYjX6pwRfQ2mW4eTFAUodND6BvZRwGDq1JK99u",
  "key22": "2SSvLTc1vX7dRAHCxGgVS3SDX4sNvbv84rGRpzTsJRwxy76nHqbYBiQAbzhJak3DBsCJCq1n3RH8DoBDDcdzE9Yb",
  "key23": "3uH3bAUmkfJU1FGXKDZttofM3W5BtafUavxpbk7LdenhunRg8otXYY8cMQN9Cwi85JEQdsUKcuLHyog6o4Aeenb4",
  "key24": "51QcwnAuPejWeEKFN82zjRLw6T94xgGu2bUSwhfmo7FitdUHmVnv7c6zUfnDxd2dWEEpB3XHWFxgnCBpubHMcurq",
  "key25": "nWXEdM9VYT1LMos3hcbyj537kaRH1kit5HCGKwBopE9zkhKD2jZNuzFYTdwNeoPp5NdAgyVEBUx5LuVCnyB2AHP",
  "key26": "5F8yh43sMCnR1xZi3HSmi5Xbo8vx94rDZqoNys5ckxQdsP4gozqcxe779RvuYCBRc51nCpk72ynjYjdWaBpKyw26",
  "key27": "3zX75QqmjEXnxrzkn7wH87KeK9x1Sza1ravbaH2ruBb4HdPpDsf4PTDFbWqrpGgibdfjRZKD5Mehd86SBqCuVtMX",
  "key28": "548Spet5u1GZqyK1ytkZAUCurhCHPwyzd18c4v73YQFv7byDUQc4ZsLdUUrUDqVDx7yLwTZdoCvUwre6FnuY8nB3",
  "key29": "5fG4Nap2hpijHAuP6ih9CZ3j1mVScTxqfKf4JRK4qehjDpW9junfev3t3FbLFNkk8FBs21Thh8buX9XgyjrrDFLR",
  "key30": "38qB659FuvRb2fD1T5731ufujWgZ3KiwChm8bKUEwpNDn6QZ3RvZ44spzeN791HB2BLpiaPqtb4tCxVv4j6ciVon",
  "key31": "4tvYbLX16rtfAwpPYKcFKseiUMzTJrKB4ztyNnN42qBimCfP4TE2TW3sQBciRLySZz4Tui2oSDk6ZRoiT667Qkt3",
  "key32": "2JwXgAT62rJetwQsgEUUHmJp7tpc4Hei9jooXUVSWgqErPx5N8tC3XCtZwqJXSgF6QhK72kUQdVwsjpSo7M2tkBD",
  "key33": "aNinsL3rf6fJFkN4TBoNH8e9CtL8kmvX7SkLMR4yNXTJXsqH6xj2RL59NKZDmMMVwno5ddQPnQ2tMDxypcCD7Ep",
  "key34": "4zqiFs2ncW9NR1DsYFtVeXhqNQ5DzDLrtLqLwkPx3u2s11zvujryvHPvcYNKo3yQxq3WAzGDgnzXgB8QBamtd2ub",
  "key35": "a85NCReQ26j7FnRQw2DskB7ShNBVkmYT6nrwUU2A8Eo8T2yv1KXnFGqirywr1LkDFuw9rBrfuP9nMfZwt8wR76t",
  "key36": "2ZJbtPnbxs625K9g6NQvkw3CxP7xM8ieRqMT6UaHswRk3HezgV8UHn8j5C3nVWC9hUhj8gVs7XedLhxVmkPwBVhm",
  "key37": "4RKb9hR8Ut6xVifz4S2Jz8oxscvthPek9JcrC8n7KKsmRXaD17YgMJtXEtDoX3rUEdPwTYJpkAP6paZpftEGrgA8",
  "key38": "3qtaderu7e1aYp7F2BqJqTF6EkyobBFjEyXGP67hqDb9UdP2KvsXfJAo5mdgg8sPPtrf5iEKjcBQ3TATpgbNo646"
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
