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
    "4Xk4M3NDN6WWNeFYs2ZPR2NjwVVGdhHMCzLvtS6N2CtCRsfBQYxkpYXfqxnnWopzaRT9818rooXQobwKRudvTtdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LY3urXpQUNRMuUh3RR2q6yEaLYbbhTxLychz8zaHtLhapKiPFhPRg3fxwf1tFH3dVtE5vPhh7vh7rQvet2JJZY3",
  "key1": "29eBA9KtqShjCTsXEFdrESj236zx3ZzLWxjh3EbSD7ZAhTptyiDCYheqSfB5tWTmcq48o2XeKSAynExoAuaVVHU5",
  "key2": "3v8XjcVc4Gecp7q2WwCdE2EVPoqcRn5bfLiW36sVS1nSzn55kfyiUDZq8VZ5w9UKzWHNhRi5GDCEApJgQscRUKQ3",
  "key3": "2EcDVH1fjErJNJ68bGqKihq8u7iW7SiVBtC1pUT5eWuaeQZefyMZ9N7CXaCBxeJwPf3kLmYu9q1LvJEqwuHAfo3L",
  "key4": "2AxFSqtmKxC6z8RJ2y5E8eqssHFNVYTvwaP2iwgt6bi4qD8wiad6Y18ngL1z5kSJXNLCS7dHb22LN2Yjs6XGA6X5",
  "key5": "5BFg7S1AfpzhUcnfRHkNbi9tag4xNE3igQZ7a2RtfHEzUMgqKRmzBcbpotreZ7othoQZTfXe6ioTP3SyMwGbxEqt",
  "key6": "42DCSBHierwaiTaW9qQ12UeFdMsqprC28uF1kcfJxj7MCpHfhD4WBiWPRdnsTRYJHnnrueLqVHcMSZZs9m1Yc74Y",
  "key7": "2yiDfqtQephhr7FxJV7xwrj9BVtpxTqStz2PtFM1VADfLuFR7dz92VUjhXQfw9WAuZ3RcFrwFEzSRhDGCYRPVLCF",
  "key8": "3SskEJ8LGQy13f5ZKNve4hsi9LaHbAaQ5sC1UAmsBkTKKDTFdcFCDBEsFzVfQspr5nDZKSrHgAg9YruvAWppEsXt",
  "key9": "5dSgUySosFR18d74Za8PWmcSKrGFX7NnMGtnFGEfVCpJwcz65oMoKMrKCqDgmVUaaGx82rA2FTvrYLsq1UbFLtyv",
  "key10": "4vjJAu4UufWH45n2GT8cyt3FSHbhr4ZFgZNi7a4ccTgcnRcgeupC1UsiTbCvjeXhrLgwfiMNAWL8gab1vhrt57ky",
  "key11": "4BHi11FBtLKmuNURfjMwKagjHt7gYk6EAGY48DyyLMGazk4zutDz4Jvh4ReSpoCEa3s7ZnXEmPTbC8dMVXngZGn3",
  "key12": "2hb97zCa74r6PWoLTy9jqzqi5ngvmSRBv5DzHa1qxGpdrcjLRRobqt782hbRtGYeTVUcn4r2rdAAfcHsooprKVLD",
  "key13": "tJKneYonpyLRSo7KSbt7SyN5Pvg2eMWZmZTqRBc3m9HZ1zrEkqMQitwRJw7YJj9VfJ3DFiENyamH9Cvb89Hdyq3",
  "key14": "4GW3YBJRXgrhB8j37pJ1WEAxjYNzAgeetJBTXfuXNTRqnnn26mzWqyce1Qz5DkAtgr3J4ujhnsMbqg2G2qVmKjCH",
  "key15": "34HEC6pw1oZfzk2KMpXHTkPMd8WFh7sWQ8BVmXPon6Az7j4Ge7n8osAyUodQPEQHLavm3dc1DUBEQzGLUf6Hg5y8",
  "key16": "2x5VrKDgoNcEXQRJLZdwY18CLj5pWY8Yh1QpfLZm3qSQrHGknjrPoiTcQQMpgtLLtvEVuHBB53Ria4qDxD48fYZB",
  "key17": "2XdhYUwbFp6qqoWW6EFUwPBRzYMssxY2Fo5Efx31Gutp44bt2bD7BDtRLniTHq6AWEQVaLptvhSVaxxREUwxCPnp",
  "key18": "5Bbpky9vS8UkmCHRw3V68YT68wRAHQQUqCKmLH2Ua6JH4qMr7xo9NHyhepj8jE34818QYHbaMSrrKekTecHP3HUk",
  "key19": "63FVfh75ejer2BARKmfM7z74CXxLh6fb6e62gfAfPutsCigLjMLsuyH47iSCSEJRgXBvbLrJfL9xxmmvaFjmXo28",
  "key20": "5F8TxZGZntLpmDatG68SpcspXAL32i6ymKjcAYHRZR4kKBuByJrbnAUmhtuSKuZWJTCcr2GqP2iT2czuNe6UDEHK",
  "key21": "PdouC7AetJBdd837XVpABZzmhetnEdSDZ3ptvTr1jih97NoxcaDvwxgufzVRM3VSEGihjzkfaeTf8i8hPutvMWp",
  "key22": "5443YBFJvYtXfzHoNVHUYGCkfGtmc2FyAxAZx9DR2U7XncKe4eZ3XQgMfsSuTUgn4BdDeraDqnwvnDYFRbD5Fq41",
  "key23": "3wVRW3rzpXUN7vanC1PhzFMFQpKKCBf22PJ6bqydjPg423iDYNKxBpfwdqK5UFT9v6h9CpKdwttyYXnLeftf3hXW",
  "key24": "4N9FM1xPw5bgC9DGeE1yhURVsch8tuBjSNF3bDN2YNeHe2AundjqEiR4KhowSmgCVHqbAqR6LtHZtMUJPN2GN3cW",
  "key25": "5LUCP4URRXSsJH3LECWiHwxXrqrqEtqYqTbUE2rPUpdeDMjEyiVsHXHf6caRB5CXtehh1L5CkgGCjPNZ8dZe22Yg",
  "key26": "4ceZp8UsKSX3SEP2g2TLE8kEyrXUj4G53UMoTxCUBGyceGk9pC16SyeQTy56L1rbYFsAMwkR6jbEEDenFqE3VPvf",
  "key27": "2Fo7dQkLths855jjUH5q2axfqRWnP8MQbMCf5Crnn1KX4HZiozgWAWypDEnRgg4DCpk7qhZFVFyfLZyfmrFYmajF",
  "key28": "2jncUMpsUm2B9dzgZtBS8xYvQFAhb36Eg2Ct1QDB1Qj4DqgENZToTfZHWvGiAVJFtNXHEbbqdBqBbp2hcrw19ctM",
  "key29": "5qWCxYn3xaQ4M1YF3pTDjS5o8ggaQpafPjWd9qQF5TnTgvoKV55d7MmeGggWFBnDo95oBp5vsesvGVghMZ72DqhT",
  "key30": "5jKD9tSEg2p9qWXA4qbhE5BM9qUWveYAHoUFeULNh4ZhMQGMwH8PMtN2ki522KYVuSjV9shsH51oDjG9nBrhJxUR",
  "key31": "3Kh4LcetWEHf4P5FHUfpmi7wvDoHm99wGpk1zKD5D8PwYMEK6FiERj3LVLHeUYmBVoFgvqwXNYRkqqDzePj5EnA6",
  "key32": "jECGuA7zb6ZXtFDGv3n1nfF2n82KJPN1mNkAMX1opBf6gghtF7P2JRySt6h8U8iMMuk9vmTaYTHsjVvXos8K5du",
  "key33": "4FaHwYPFsPqXR4KaQgahCNYT6L7RfJxBQBbde9nd2WJrkfg2d432NrnTWh4xB3newGBkJaUiA3yMXgYvegYfxS6M",
  "key34": "2PqEDU3Me5LsafqmMuLyMDCgQj8ipKcJTQWMVwLKY45cyFNjctpEqJzBqhrqP5PD1AHD3WP8rCnKKSDUYd1Za3FW",
  "key35": "ftCyHN8vME2aJ1a6oqeeK6JjrPb9JV17jSqE96KvAeTfG95VoWjjV4Hk4GX6XuGjcgSA9AVWUXNw7JMtPV3HV67",
  "key36": "67P2nM6uHecY8fwfvASqD2UGgs7S6wRTRGS7HLRbAXHccS2mPqAfKdhB5fGneEBUaVxLzuSLGMYXDGLfN7K36RkK",
  "key37": "y5yHqgZthvPeSfvgi8JHgxFZXsujqsjFUVpwUnAbkuCyBrj38YaTa5ePu67ddsaQZDp8wz1qWAoiexKm2pmiXDg",
  "key38": "21Mc7n5j1HzAa86emwF92iRYhfJ9239L717qCwng51oq8fNVgh1P1pmqdzBjMVr2tGn5CQzD4uYwc7Yom7hi4y5m",
  "key39": "5auzU6iyqfJmpuvYi6BgVchdhKH4XE5mQMjVKw37wecoMyrvaUwJmadVPD1EzbKY2RxdJqVbaZ5yQuyLLqkp4Kuq",
  "key40": "2ytSx9RdQueqDCdujvisLTKpRzJ8eLW8B18vFodmck6yLrVKfjoUKtoNstxLDEUGcVUxm35d9rjBLepFHBxCR46A",
  "key41": "4qQAY8UCJB3RipYmVowXEtFpnZTtv7p7mLpWpeguPfRN3Apx5EyownC1RMkejJnJWnVuYoXW6G3RhKEchirGNCH2",
  "key42": "5Nv8U1ivPknqCczUUH1DqjgRYwNgdiiTRx7qBxYZFmF2KoYwzVgCuSCwvhJQH1fkRTWmWFREtkP9cgujQWMBZWev",
  "key43": "2C3xUZf2DTdNC54J9bvBgayzgkDDzHstuebq1vVv9d5Cgvotx3qxwtMWw7H1d1ihUvRZDi91jhQpqxcoauMWhgX8",
  "key44": "5iKRrfcdPhLvECv4H4yeWgmyC9T4rZ6B9cHi8BFrD1eWq8H1VAh1PcDktFVC7MFrE4VhpHjJpBJou6uTwCU1ACF2",
  "key45": "3rcNEf69Tj1Rnm4YkjALvkZ8jJHtcGCCt8hgWHu2hdA7zPjRkt1gj1SfzST4nbQyFns1QEGqDPGJk4vyzk8QwTiK",
  "key46": "4WCmvWhGyMFZ5ZEk4WuVvSKsQPAZzVz3ngJsSieV2cfyjw88acm5Fu3G13LYBHQWVy7uWua9WNdTQSBZS6QY5xJ7",
  "key47": "5zjwKuQ2Psfu7UJRH6Rt3FuxrHk3WWcsZzN1FFVARN43uGmHGMghM7DK3bLkZWZnsv5Wf3urvyBnpJ6GTggbaTpP",
  "key48": "5uofHqmgAr4oHgFpgfuHFYHKUzmm9ic1Pg6nqNBPwYwuqQBZWnBPbAzde8yhNVAi719poHTbYZgjgxQNDS6giFXu"
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
