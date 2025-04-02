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
    "2t1TPA3vPvqFFENRfocChokR5veX85pZ8dWmGKuzHnjqq2VtsyvM7NYZubUY6jcomXLEJHVN9xSVdYoi8a3b8Xfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXvkGkhEnRVt8yGS2jsBrUqimRE62gYtVcKvQJbCCGHmux4QYNQ49G6qMjDspvr4YfgXTyrDCnCgcfeP7wCWSed",
  "key1": "3eHK6vi4zZDzD8fuB2HqhqwQ89GhUFT8dtg4iVxgVKBy6R61t4MiCrev4U5mJ5bQGtnTywqetivf7sEzn9bmkrn9",
  "key2": "592zDNYbq5Vozwd3yC1eorosBnh1wibC2pK2H43xBKBUZTbckNfWLz8kGQZmpsU7PNJcnmWMrPRPSgvvf1qCumDu",
  "key3": "2X4xBnNJbLumoeQcjKFFaKVyTvDqkxLUVfPVRFohE1zSqgZ5t5DiHB8To3h8TqYxEcQ5T7UqygzrDChojKKwDGgb",
  "key4": "61pw4L7ENvLr9pssSj3vdzGehms121K9whSpZgJ2JLwyGAXoyzb5yRdvSRDU39kXfUUMcLLGN4SyusNq6rYxnTai",
  "key5": "4otLHsERTLVHm6WTXCiKSnwV5dzsFLurHcY15mSJT8rTDvYTmWjLqsYCJaMNR9rAUzXxT17ag8KprLwZ8tW5Ztto",
  "key6": "Q8sALb4KK2pv6G8pWjs5EuyhH3QKb4X7nhwBZXrXdHRkvugm4U494Wr4ffuazP591sACL1JcbYbstuAbsb8veJw",
  "key7": "3mKsXQSupS3DWh26FQDbaaiUXvK4RBErTQncZrbVBuyTv7fRPqrJ6GQtJAMpC6vT6CKJNBcmdX23D2dZ7xqVJmFF",
  "key8": "5MV6Jqyoo8MXLiUuYnzv1CXHF3Ks9D8dU6uD9qt83n45KXiYd8XHrZGFuLZA56PNZ9K33mZQaot4rHcjMB3zAQ7s",
  "key9": "2UR6kaY39xh5cUFPRoPJ66a6gFYvrSN53azBzksgksJwFyLhiqwXRvt1sfQQKpV7japeAMhNjkKhPWT6GncWH7PL",
  "key10": "5nRRpEMB1DmXvqZdXm5iV3rw6FRZh9NeazUrBZtDSfh4DhzCAuRJSbQvgHVHYYEUd66egQHkPqF37mdKWm5NzDkg",
  "key11": "37Ce84jrsPn1DhhwzPRQaVyEYnQzpsQzxVHwwbGXixmcA9L4kdBAri5RehnSAmh2BXcPSdPLwwyMg5zJ71GpZW8Y",
  "key12": "5v2eAXkNkF4K2akmDZ2qJe7QxowQPK7CGXZCv4KTwrbsTm5CvD6M1Rkj6puYuFFxDz5RKMAeNFA3BK4oVaDv5i3N",
  "key13": "3rRR2D3y3C7vpeX2eYZQrx4fQiti7N28pjDxfzLpre44agCGu65XMcSPLgW9ZVBZrxYRPVNQNnWbwi7QDiCMCrbx",
  "key14": "4WHtcMyTYfM2n72CEYjxnWbv45PC5WwYU38nQ4yXBasx2NpHUGFBsVrQzHVcwGCzsahBZzpJgJJoCBVcvHbAW7t3",
  "key15": "CFswu4cJNrGLYbsJY5XSCCGQQr1m6K5DDmwtwysFXuDS9CdA1SbpxF5F3Rw2Tr4LxPwQgkEKqRy6kdqCC1Vjm5M",
  "key16": "33dFpDihN8Atj4r9w5ho5AVibFup26CLdxmXyZQk3qffRVZtPMkbzR9svkuBiJ7tQZxMoE6N7gZeSaQmYLs9cN9R",
  "key17": "2sri5J7fiy5XHUaSS1QNL66XhSwukwuewoASAjtzXS2XkxULWabNLRd13HXPTgohMm9uswDn7MUcwE4WPMcwEX6w",
  "key18": "5nja1g365ETQgKdxi3T3SkFmWFaT7QmHUnpzbkMXDNfYwJD6emqJXg4KM1Y4zwvpw1uigwUXR8nDfjZsMxxJnibs",
  "key19": "5uaW1fnTP4babi4q76pGGuvedV9n9mmCaJ3u3J3W9RpcRKP7yaeF3PxVhr3XguiPkhWsVBNNrdQtZ51jHEoS3PQR",
  "key20": "51daT95SH1G7o9kqf6cL8rdUWLnHTmVzxZJw23spBPy2cbRLRVTbfRAahuvzL5hNEC7QmSLPogssirFtMabDJX2P",
  "key21": "4xfCu1VFiBGSjLcXqQP5NzZfFggqc5rGsRnUuJwPzikv2u2BuLMuGCjgVn6orFNV3CEUBpFxPNBRhGAUAmtSpq5X",
  "key22": "32aJ5MZKzx9UwVw6i5M2YN5QjCMLoBFpHXCFkzyH7sn1oqPAwKJDZChCuakb7pTttyf2RVoW1Y616aU5yGeQmTM5",
  "key23": "65Qiqdg2bZsvZzQgF7fsUqMBWVqQjRCpCDSsyPMtdmC3G7TYSEXxirZx9iFBSCpQ6Quw29Y2XSSCiE7HMoSZPosf",
  "key24": "DWDHBEAihHtHJHvxvtDhtrVdHYRH3UoLxn4xDA6Yjebow1Niwk4dWPvdv1vKBWbAEabJHmZds1Ts9VVRhSmBL2t",
  "key25": "w6sNvPwZf4vnj84cHNRvMgvHGtyfxv3g5SDqLSehcin8FeGBt9mPWc7HMJAPHmZshuuNtwathQtA7sLReSZYGwk",
  "key26": "t213grZ2cqko4ELF7RtW8g732Tex3Mxc7PWF2hx1ibg2CkAXYxM7saWVVMQQPA7yxST4E4RUyB1ndADjViEyYbt",
  "key27": "3MGtp5NMgpNcsDKcEGQQUq9FNLmkRLMfgLfiMy6XxnxiXLhHxMAfnzxgT5mFuqTi311xqLDzDcAhhyyKiuiigrp6",
  "key28": "5GY5oj5KwwMi69djSpPjDQNPLywZ8LLU6kGQsMPkeuFhRsFj6kEuetKngK67yJBEbv6rtN1MPY4objnTtLqAiBTV",
  "key29": "4jsJe1dK3vryna8VfDQjAmJZtSH32PNgyNEacRyYGxLp7uLhkwBzowHzw4icqH9NEnUgHV5LSsxn3WspDBzNeMxV",
  "key30": "5QA5a92tRYXhBoQxYTueAVnM6fpCRt3kgMRzyVDof7hnsgaWih6jKrs88X9rcdZyXJvKxqV3tNSD3KKgQDY2RBzE",
  "key31": "3Vs41ApTetrae6Fd6sDPQktSV55NzX6cbHyNizTPQHZDbgqbUadeKHrbnUoaxxLu3e7aGZzDf5mH8U4cKdoJadNX",
  "key32": "4F8b2WKubsaMcZFj29gmmQHBuK2pk75Xh1SHAwHgyyZnCbAzwRUxk7thgEfk4vxm8b8FqHGgMpHANpJXaZoSmcdw",
  "key33": "2V9wCKfmjnWNqHhZ9J5TzHYx3boSd9Wh2WPyFJzmPYsBoo9d2oxvUFapieL4i4dGiCU3zRCory52k2Zx4YHSWbFg",
  "key34": "41fgHchdCPVD4Ub8utVcJn174eVSY7Hty7uFCb6VC2USjeGxDH5xcgou5B6qQUcPTJvEYWy1newzGW6wpvHzsmc",
  "key35": "3NkLch5AfWehnZg9RJQZPah9P1NELPpSN7M9CrgSdtGaojLLu6YfcBJWDuApkHqAGdK8N6PCY9rS3UrCH8NSUSjR",
  "key36": "ZbAgqDRS73SJws39ZYhWAhBJz5hmYjhGCYVwhb1BUM6gA7xSbhYGEUiT3DVQPW8SzhZGusX15Qr3yFSkZVHZgd3",
  "key37": "4usKyZLxgozx3SccfMSr5g1UNVhWck9UKu8pkrNNypUczwuahdrXqfDgkJGDfqvRR39D2JHAnAHcdzuehiQGDADg",
  "key38": "3NQLaDUkQqUgmGcAFTSeiPZJf2LpCGJCz7whFA8Eka1PDrsq4bZ6P5w8turywXXKSj2Xzk5gUnicshPxQwSjUqDR",
  "key39": "gTTyaDr7MLhes9eRwsAfDrABXYJxn6cyciyfuEJDodXuE2qeoS1b5EXxJPJEG8ruA6rydYrBZNH8S9voUWwyXqx",
  "key40": "3v2fP9c2HSmoWqM7cFQ6f1KCGE99Y4ZSJcnDQcjtcoxDgnKWJZrpY2dkyRa8dYPgnbVcYkJDF8f9cbZ6Rrvsiq3L",
  "key41": "5agSKoNHoVNmXCYz2KE9tYenUweS8fUGWYtA6AZSeW583DNusyX8f9RDPcJjYyFxVB2cBUTqMz9JVS7Ju6UEGH9T",
  "key42": "3LV95KVj4gNAsfi4hwmKs7Tfyso7sJi7vwmordcZ7yrkRukfY3pP5fUUHzXzQ3LG7cPmSGgwSggAL2DbVM7FR6Vj",
  "key43": "wdfv7HoJvAgHj9AYRHMCTbbftH9DiKXCNLkHc81S3Yj89FBySaJZYGQtpaKowsrXnVohW2tEqcJQ2hXeuefmgXY",
  "key44": "4FFJKd663Gj6mk4DNmWK2JT1cbVfo7G8et4Tn3H7JZfdYWeU6vHJfEwmLF2Dz1MG5DSmKVFCdse5r9EHjFCKWi4z",
  "key45": "3Q2R3qd84xoMsTcSkpukFZzPQk8D5twy7cHqumVLicTHXZqhYfixDqZ4AwRP1gtBqrBxryaxYjawDnKRef3kpGZf",
  "key46": "3SgHtcRHvteXisw5SkF12QpePzPaAFb7stLqPtt3HdFNpvV7PVB1Z2c93KHPX6Ub6i6BbC9LneCsHuPzBuFYZNtz",
  "key47": "52u4pe7NTXSZ2ydVekyQMniC3H95hJaxPW5GAmj1hjBMBv2sJGfeWtP2fJ2ATTBgU7ggJudNvi4HHf9juHZXXGcx",
  "key48": "3ngNqg4r4faYDh74pj1q1wUA4vytAfnJygKML9J3mShsRoZ4ghQGxedMWhMXfAPBacLjrpw6pkZV3QT7Qv4ig6Zz"
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
