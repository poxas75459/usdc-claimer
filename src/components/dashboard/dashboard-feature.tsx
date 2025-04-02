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
    "4dMxEj9DpDLKRyV8y9VYxjK2q2vfdY6zDWqtuKWGqczxCk2wxqwqoPPjfyvb6dHEGnMnxjRAHFHUEgEUJEWphc44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ecs4VFatBZECHjcsMapm2cfh8t23s79CZCuHxkmHgL5mn8LsjLmYYwzAKq3sUZGJrcznriz6Ym3jT2VRBTQsueU",
  "key1": "9UhN99nWMk5vvgm9XgjtZRwK9fZJJ4DQsRsh4Bf9xTqfD2tQFdwPhA6LBRtegHNMexUfkt3ZE64gYi4F4iHVYVQ",
  "key2": "4Ai95kehJKBDWyQ8Mc4QPevx6Y5UuPqXFZspKXu52cYZkcVskyX5DxbFqZoSzco5Htz1AZQSW7zcEVCggCaijAj1",
  "key3": "4iVuDn9S3ZUeyK29vpZYhJMfTYZqGFUR7Vg9wRN9Q3NW3G91Sf4Gv9SviQnJy2HR5Eee1Vmb9bAUQK5kmbsGAjkt",
  "key4": "4xCHVwvBNTdKY6qh1sN3VaNtoyofcxnQxyGoFuHaC9VpsxkbmaErCXWAvkkKD5LfLpY6ynAdNM2LQaPhk3x2juJ8",
  "key5": "5NTqmhs1TciM5WgaLQpraYkyGjPMKrdDn6Rhc8zJiCWyCSW41kj8S3kop7aevg8J3QNSrReFAxEVfazdAweD3Tpn",
  "key6": "3ewxtS6LbVvYeF7XsU2KqWLUM1iCfERRZEBnX9xbYGKcEoURgQK8w1KgJT413tNAHNgdkf3rdhxE7gcr6PtMK3cA",
  "key7": "5ePhcwSHKg4TqCGTG84PD7D5YwcRaGmF2eqmwHLwooUpjUxH3gak5bWcjKC9mEZK1rcEKjsXHWBusipfdKnyFaUc",
  "key8": "2GmFUoTb5m5Lr42AwpFssaNPxu4kg9zmNTx7ZGNiM6uNjy9xsB4RCxBo7kgT4k9DJFnkPjnrmTNt97ATqyGxwfM1",
  "key9": "3srtWHGYSDGFMPrWx1pWfRxEupHyHJoxWsSZHY91SMBhejSRuznvGEyWDRPYXpZHPRkHwQ7jFXGyexXN9sq2hAs5",
  "key10": "4GbFhX1mSj43kJCPvhsC2P9nEunTP3CThwkzchQNDLK5m9UsDaponk2oGk2tTDi8u9jJu9czGGo9Z9Uyd9w4yS2D",
  "key11": "5ZdaFs9AudrLRVk1nEsYwqzHsg6XecpnQXnwTNUGX9P2xV3jNXpz1gtsa7c4jDvVKBGhjB5AMmyxHJzgpPQ9cbyU",
  "key12": "2cbvxMz7KoXiN2fqDwJttAhMFWEDKDEazXtjQFXTRtztgmwNk48GW7gx3khHW1GxrM2v1hRwFqgdKZKeBEYGjakk",
  "key13": "bdNhu5KrRpon4GeantQDaPWVmxhJo2HHpPa37YLpBtndbEFBv4mxo7b9TP2LPd63jdUDssUdwEsf4DCMeeb1BYv",
  "key14": "JoHebcGVktCZaWmz1U9wb6yQPSmW2gqvH9hPiq27XMNPrZBGUbCjKFLMYRbiExydGki96pbvpZMG67sxtU5w7QH",
  "key15": "3fzDxXFTRJsNgVwPqbEWq6rdvYMFVCPfewYsaT92CJE5f4JdXGs839mwiuKa1e2Q4XoXL92nkeBxGd8uoVH9WGCj",
  "key16": "4QKtLShRG1RLfPhwEap2WgbxDL9apwK9d3yT2vihhp89JnckKDhLYeaDTaC6LpXpXxPqSzAK6Ws2jh4KrdamDWDy",
  "key17": "fk3YHomvBtn2FzH2U6teJRGYFQAGj7jNqRHdEiLjamuxSUuPRuP7Givjy67BaQQFY9pRTz5zFrsaW3qEDn4FUPa",
  "key18": "3FEiJtiGGAzY29oombfTXdnzMmhr4FT2PCTqL1B8ZU8MaiZ139adEn3VAu5LLR7nFsh4D99TcFPoK8BUyy2FofUu",
  "key19": "3SHkUx6XwyPuzkiJnQLTncKyTW5iyhFPKazMC8s2QWA7bQdSFfUVe6cnni7G21AsuoeSVVXHvMAwks17X8538bqj",
  "key20": "wCB1yxpJzFWcd79nyG7WrBWmnmdDE1qsXkqSyGAek8CJDwWgh6mWxEqzq5WY5xhrqajbiLGrB4RPVWY2ga81AHB",
  "key21": "52cUSR3mahtNQayJXcQM7ELdHnnsofNJytqVHp4MoKSiZgH43tftX74aim7rjaPnmvsv2KUqqQuiXvShjGrPZLjx",
  "key22": "2NHiv1D2F6yprxkZe2xutGgYmkewqqdhpECM46imGkyaK7YfXnQyRNHrSfHFi6ckyTspvfwaUXg7zjcHaEbaSrqE",
  "key23": "46MZ34CKg49vJ9DXQu4zdgr65XJUrNjPws3k2PBbjUG7fbivRe27xEbWqkqifZD912wvfpX4tZsCWD2QepuSk155",
  "key24": "259S3oCZ2v1KfGnPowRBFkFb2Mtd4bd4TKBB23QdJKMgD2v6khtk5Pt5c9znR1SmWQSMatSRypcfLUA9HwWNxw9D",
  "key25": "5GzCLQo4voLcJrCJeWHeMnhGxRk8q7Nzt3DVnEc7msbzkinNkGVttHciFSgMb9cz5NVw8Aba9Uii6RmQhBHTL6ME",
  "key26": "4QBXSNgNMHMZqVCBGKbGUZM4ZQG3gxLQturv1TbWtDsZ1HYxLjgitWo9NuhFVJp52LhvtTzyyiMUtAyHHPApTLH2",
  "key27": "5cdoXRjxyLpToF576hMjF3iUyrm1aq6Dt2Zmv2ZpkfNBHupvz9NDJoi13mw5bKqnUpBcjCrdXfsi354H8PRhjxf7",
  "key28": "47LXPAx3soMiYd8f3x3p5kFP45wfaVN6CNT2Pe3neuR1bRHAZZmjUEzbv3DhtFR3r4CUdTonbh46RN3jjL6zYw1x",
  "key29": "2Bu9EZHZpkfzSBr9aGKRDAERZpffBPFN3w5Be5yk3zvLPJEQMEXAkwpqiwayMQTgUc4FiBYDqkms6UXc6HJz8HeR",
  "key30": "4qnXANiNYb9MqAHhmcRkzh2jdeg2WVk9RCjazp1SiUsgVssh53Jvo8xDg79HFb6HV2nVkzcNAFzHL6Y5PqvuR6AJ",
  "key31": "2gH5kbySTaSwRwAxJipWtnBWSkm71ZoVoavLdEzUv9iUVhTa6FFTyYuB8snPKJczjqX3Xomec1bUNKbud2pvmkDA",
  "key32": "2yFjwwVewPtviVPq967N9icWjomi4bzRvZxnnYjBmF9NhsLADMDUx55yzgTU43vNhsU2rvkqLoWjrKCaqSUQwUJU",
  "key33": "63jLqcgwhEfXvQ2GUV2ZLJGdqYL5HdzURUiUp2guHjuam1PPL8hqp84GcdwKzGTtwCURLkeB2Hw4UJSSqWJVanQH",
  "key34": "3LmuvHLX3TAE9eLQqXDGJQhftKR4uvmCQW59A1LTF761S7kxsUGwY9occ2LV3wBT2PSgHWdKRSZTUCuwyheZ6eWS",
  "key35": "4Ci1xAJmXESrFfmFjjrLiDSUreagKi2kbJWmRe6sXbnVRyiEA98sbo1wr8uEGj8wZgGkvi9BRNA9vKdJHvjQJ7oV",
  "key36": "5BW784G883Rv6F7oizyu5d5WAdqg5hVCFnHRRSKJJenWxKK6bNbDT7YECbs6EQY5w7rJefubwQ3qPLrq7rb6cui8",
  "key37": "2WsyEvL85CxEgqjtGBiVonPo22HBGesR1s3Wj76ozFwMVvjE8e8AhD4onX4MypNTjZXxsfwzvg9uwfBT3cY6V5Q3",
  "key38": "2Kff7G6WxP3avoEpv2ZKpgFTW6fxcKMeBKDuVPM9DYknKQvTXQqKuPBNra4srPFCbotQTqUJyQCtmK4sz55LQ3de"
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
