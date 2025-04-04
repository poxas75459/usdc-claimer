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
    "4L2XeqEw4PCqCUCqQsxYhpaQUamFvcQBmW6WD1PdMhMXDzpkaidoKMeFNe2iGbcjb3KrH6629APrur2nhzRHAbNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLbUWWQ5JAEKEqmcTyTnQLwiagNJ8vR4tSJUeKiGEiAoRNN9pYtPDf5QoBwbZLgLSQunjiXdXk7CcuP4hFgwLHF",
  "key1": "3VXgWQucKr7YtrJKDfYrXCrjsiGULFqMsfggoAUB2AKp1vPLw1SzVbScjm5KpqUHaJjsp23UnjJk4peNBjbSKSvg",
  "key2": "2h5Y4ip9aQQBZJyfHGRwEr1RFJmWNr2NAaTU7B8MgDiU6fovvvDKKdXGYCuivUaGnEbLSqYDToriHJkTB8hU6u3g",
  "key3": "3SxxHRLDjCVXHE4g7nB2bMAX12VqLCFgiGc7NyaSJuFBAF9EvFwmtLjp1ayYZkZCtJuJUMtyGciL4SkJv7HEiVVc",
  "key4": "2zzrQDNQCpnr8k8q3VeYnuNUHSmYptqLXsdpVbdBa4w2X1qSL6JGWtB9tdkgnr6KK1FMAkVv1RetFc6Y9CvMXC38",
  "key5": "2qCnZTM7zsoV1Lozv4K8M8ugM8gbbAVCsj6KxfXtFuUs1Z1HpT9yif7rhXGCgy4QLuaMP6iiQLmeZA4xzpKrtPwC",
  "key6": "3ZrUzJzZrBjE82uAXxwefu7EQcghBuHfmMZwm5QNQ9pXcJ7vJWHVEMqJZ76etzJjEveydEesGNSfpTydeGVZuZrQ",
  "key7": "28Buc4xPNHsyqP5PrMG2DuyXaRE3hhQgknbseBc3DKsa2vAEQuo4rX5PjpAUeUbM8aD4fFmzZuANCDUrNKbw2gRp",
  "key8": "3FZE9JwcTyAVRHKYpjc6Tvt8mN6qrmGUt1KaBTWVz2DZwSeFEPGDfDtzxaKwWzoCfdVGKvTJrCEKaVuZcu2GdrSb",
  "key9": "2aFGhPkLBjKLuEVfgHezKETCh3V7uVXBngGcfzywbYMX55h94r5bNqxN4yXdX4kc37f6SckBaqMPvTnJkMqHEqyD",
  "key10": "7qMyheTTuPQovNKTxmqwyGKKUvdHqu352NQB4xtPi1Yxs2b3BEfMied2rZKRmfkc6Q7aEvighQJ7UEUVikjRGFG",
  "key11": "3RSMiaitJECLyh9eFrQCWvH11HUbG97RTu91QbxsYBbAxhANM4mnbi6W9J4jYCSqeRHgN79EJQZjxfFuRfCEnpu",
  "key12": "4ZxBGQD3K2G9kcSwtSgkfqZmN9n9QGcWYqEo8pFvNhzk7UMo8v6GXbV1gLCTHpv8tb3MkbdFkGgjNVj3G6ft9Laj",
  "key13": "4MJ8LRez8f64T8AWhtmghKH2yS35wVocKzXpUCb33rS7tKakHNAQUeCyDn1JK1w4NRPNa2P75Coe8viJC2Zv9vTV",
  "key14": "4H7yPLszpjCqzkMYtsq2y3oAa27zmNVBfJj9h1UoepMDtKT23Waaak9WGyScqLnm56bPGBk6WkC19dwpq7HCKJKS",
  "key15": "3HeNfHD9iDSVxmfkpkk1Wq5ctfsoagAkH2kg9Dt2Dogasky5tHkVrQSZL8H2M3VLCQd9XZTigqr9jzmTx5zrbShA",
  "key16": "2adSA4xjSQKCNrVi7gHwbfLspHwgAUdSUPnK6TXKkAhy24HwRWGGJ4XVV5zYgAiiTF29AbkPHTFRV3pD3haSv195",
  "key17": "5HB3G52XDkVqG14pwJyAFJceUcg3oe9zRd31WJPBXYAZJ5CW96EWuwXNLCN5cRoE4j8e1u96LKAfwXtaCXDgYVQo",
  "key18": "4kzaMqLqGbbMJYnN4BBBfpHtCVsvShrc8qV8V5ttYCyZhzdDL4G3t32ejUKyKS3FbFtZoVKgYJv4UJadXr8aWFwq",
  "key19": "33FTNDu5ZFcTkR4VhDLdVVsvF7J3TVeEsjMXhnpvx8dwe3KmngBSZtV92BP3i6s7HqKV76rx3mxS73CZ2nx9aXnD",
  "key20": "3EMqeG6vcavF2g7ZGQwCRDjtGnrYUGRHup12918wSNc8tb7RjQq3e76qpZPXk4FKYNcfnCMJXt5MgWA9ek4pk29L",
  "key21": "F6Gi5h8R5YQPVQVLj5RR4wSVuMtr9FXE7QBGhrm1VTNsUKEkz3mThodg7J5P7mPuMSHe9wUPWFRGtTJaXKc7FVY",
  "key22": "2su1zWN5nA9fSp1S1uAPfYGBJmo2Rhe29fsCmZjop61Z1f9v3QEVsPQAAVqWkGQdZye53nqbnrytHqTD7evpwuDU",
  "key23": "22M2JE5i7uYjYoAygpXezYHL9CZcUyHzPUNyxUt99N6XTZdjtd7T7yhGxDkQK9jeC68Xy5w9sN4Q2fc2aaTsEWL8",
  "key24": "5YpGV9fHKYHYpoAqun9bX6tB8Y5R9sqSMQZGgExmLAiVcFdvpX7CfiqTquUVJVT3PwN6iD56eg7xum1FyQSe7EAh",
  "key25": "vzyQ78DUZpEQpJZEtM9L1kGNHWjVF7AfzKmqUsESwiymdiuYdSFZnqj53xRUAEdyjV6w3mJEkasLBHMCH2TiRBS",
  "key26": "4AnT4pXazur8CiwSYsPGS87hxmEVr1BNnyUeUDbpMVrmvY7jW51outowpGbtDAQihEzJM8Cx9HyUs1Yo6E7CUFDJ",
  "key27": "4GoNFFiiRuNvApZt89cRL5WtpfvLRmjecdGxqGYYZR1V2ALE7SKuvvfruGjUkZj1wWkoDNYuZA3ZCUEW36TVBJbQ",
  "key28": "55K39ccNjEC7N7yoZEny2amf7FpZEZWEx5QEujY11zhC9HrWpoUucw4kyj373cGvzHroSHBQiBpRpXYNpmzwYaJX",
  "key29": "3svuBi9Lwn3VbpjP9RJ9wWiYEfgDaZEfN86sug3nBAtsshhPEFP3XscxhrhgocmPGBg177Fhao7WpAVCFdmagWMF",
  "key30": "2H4m4G9gmwQfeGzmWuXU9J2dArZdnoP8XHoMUWystfL8WdejjdDb2EDmKzJCbkJUWTbKheF374LTubyoN9ySdd6H",
  "key31": "5FurUB12JkWvjPwYTJfE96uDpVimPV5yAoiAnvYyoeseTgs9bxuGy8BjjT7s6K4B5wJekHDZ3oK9ATTtuGjTuAgo",
  "key32": "iUAqx53RHvUgxh1x5SChLnWDUfsrxvhPCr1D2ahf83843fPV6XD3WEnjVQixHZVPSJPbvqtVxSN1UxRPXa5LAkS",
  "key33": "42H8SYNWAfMLUZcAZGUNm9sLserMZqmaoVLceXeAEoJWJzmw4defbqnMGdqyPje6qB4kn84wFXBZeaXnKa2X86HH",
  "key34": "38y1Q5T8s8r8BcZ3tTR87uPJw9XLReNzcktNgYRfmdo62B2pEfgDokGBTyF87CznBfu8d2r88wTG462VtcXYJiVu",
  "key35": "3LmAEt4LSkQUjt52Q6UB92RwVRM2bbVwEC83LdEeShY4rZnuf7ZbdVjBBHXnsdJ4DDy9LrPsyVFWd2zuRxHXUb5E",
  "key36": "5xuiVUmR76r1VSwWiRGLb5GgyCXe1MaN2vtaSpmsXegA9Kd5jJ5smMaGeELLxwzXWdW6UyokWWxMw4kwtgyUWbfN",
  "key37": "3dSZ1ijos4if4bjqn92qUvHQvdqybBNS8LY5hDeHMg4TAgMvke84mLsB3yTLLMVhhVECWTLQcDJaZKrKyTY6wHh5",
  "key38": "4UKTvJBLgJJYYsoiu7RBfYT9QZoUxq3MBJ4fmGSZzueJPhsw4LS46hHeaAZJ7SxtRAoKHnypv1R6t9yZbSh5pu24",
  "key39": "8mRV4ejav24Nij5CA392kg74t5ddLFyiEBpJgi1HXj7GhLartDQUk5yeTTaWDWWor666oygPD1eopJNQzMaBUxv",
  "key40": "vrpkQqLm7KJWXW75GTT2ZurcJaUYm8JMCA5evX66FqYontntGLVF6mY8jsCbPWggfQHn7RWH97nekd7aTnD1hT7",
  "key41": "4iALgGHqg1kB1sCWPrEAi7NGN7dNwpC2X1Wo7xcE5s3zBGn12thHLGaJTspfTNfXPYXYpQYXpCweW5xrA5qUk77s",
  "key42": "4gpp2aEHR65XY5ce3hzhxaWvwTwccKKUReUzoELVJKmJXGxF7ZQdX7zsm8a9YCvDUmC9pxGMKuXouz9CbrrUoj37",
  "key43": "66maCysAw1kzw4JCYGtSzqXR5tjUBHwqCNoGmBkfdsYQZvdv1wa88WLfKScwj6TuJLmgQNtRYSJhE1V4mBWDmeBX",
  "key44": "5WvB3Yt9mWzQxXBndeMdw3YJTjss9FsCnCmdaeTL9r1FwjVxaN3xNrMjhbih48uoJf8icDG9rMDhwm6sQ51jKfRu",
  "key45": "5WDQL8Jy2FjaMpsshdbA7H6Ws9qr4exD1aMZqMcPFRfttbmt5yNj7MTPjAMwz6Uc1wgfPZ7PeVSeUKLSGbHWjneL"
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
