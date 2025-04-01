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
    "4g7uXqLLfjvNzDqFp96scJzxzakewpFHmT8b9MdpFX9jUzxqV98XZB5F8hUyrXUvZgAQAoefF4mefwftCThTNKdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vY2djkH31XeuL6LB6xEBkafDhm2bkdyL4t23nJB9GDURkj6ZuiKt8p2Yk6QFBf3BaiNXwjZVc7BaxawrUf4T4ai",
  "key1": "kTWZJa9b9LjMkSvoCwwcL6qXcBi5Ay6G2LXFCrSgKGmYru3QRzqt1Kb4VvCcRG8LWy68XJZUoYff2MX6Xjy9kKW",
  "key2": "2V2oEbHJhRjwMJy7jLh9F6WAcVovDUtJTogPi1fTgarokBqtTx6GV1PTNuoCkUG5TLMHJvx3iJpA37Yq679eXug3",
  "key3": "2bw5KRRRtxiVoUxw9NTW9TErwxSata3qvNUbBQS36gJpjnmKX3z82jjteEZ4gEPpve5BKyb5T1vs1vWP3iV6YtNj",
  "key4": "6444iG8P29kyiQPu6w3Zg1VAxfE41VaG6LsA63JLdPfv8bRp5hgSh1SKE83Laf4k2hRYQTwBt9LDCA38iUakyzVR",
  "key5": "24VsPiS4aHg1CqcWqejTP1a4JZ2cBba8QwGUn3hVcyuhZbumLZecX1KGCoEPf3quSd13hr2oNFNvNKonwH1gxxk4",
  "key6": "2u5BrCAJrtLiE859saRVpFYHtwWadXqctNSYFocCJjkhN5iQ9xPBwYL7EcBeQg5bnod3gDpqZZCqFetVN5D4M67h",
  "key7": "5mewqcdQyMwZisha9WRJRZ5BTp3EEnmd5Vjz4KznhyKLza2WRdV93cuwEg5AnME1aemfNBeUvVxVwpcPcGikmuGA",
  "key8": "3H9tNnVVtZ57hgABWoYiTN6mtX2gAoisbPYocWVtqijtD1z8jjK1rGE2NkPFpy2dvcJk85h4S4m2Pk7nSrA6goqg",
  "key9": "2nGkj3CUpRdT8fxdt6xxQ2HJtEfHbmKmFcBFMgEFGSTEoXYwH87Lq1nD8qgm4YVyqpZjEDbVUgaVfKFicFh4Q6cU",
  "key10": "2YFMhSqM1552wyttQQ9Wf2HUU4NLNphbRuWkcXhqc2dMU5VVSuybfAoRVL6rgXj9avU4GFYRorGdJEdxx5dwjNwi",
  "key11": "kpW7ZeupZt5FpmiiLcpP2bSdArofCvhEf715PV4HaQwFJ1fCgtaKT4Jyb7NWN9bDbyBGrjcdEQfEb3afArjFSZp",
  "key12": "4EbGAbZmSDELuDoFnEdCeHVJhg7ULZampu7puADwvM8Bs6f899Aw5HKWvuv8zKfsTfNZu3cnSHVFqr9KWFrEzCGP",
  "key13": "3NPnsM8f9LMgKcDfd5ScQNxT8QoFmW7G2ZGpanpv6Vdjz1q473LmeP4hPyoKzQxq7oug9RXdLdWiAeExj8sDbaUi",
  "key14": "38z4L6izVWDRKTameSjB2r2F5xngZ7hi91iuN6sPVASfJNyAC1xxhvnJcYWg4bwkkxTrvCjtyvgy6n8xk3BbTkaJ",
  "key15": "54TDK4XjSRLNmgKNdRudwzfecQvwhwyz7XtRgjKzpwTH2V1xadZ2nNMUMppZtbhutbYTPmfhGEao5cA2p24G82Cr",
  "key16": "5huTjMiyRX79w957jPLNsYu8siV5YV4X8YY75bhAcQ5Rx9NQt6wJ1KUABVLiVvKEK3Xf4mLLxjRa94hgN52p8i7R",
  "key17": "2CYHj3mWHxxSueLn2L4q1Prki2WcKhaGd3ugf4pHag9VR239swfEtudwxwYggSEueVEZxTjf24QYKcf9GTu4KX2Y",
  "key18": "3VP2oaQmzvUV6ZEZbymmie5HCNi3UB91ZRYCDeiotbm5ZikLtFGpzp9vPyL5dEJEqCkMpHwHFn5WS3kYzpjFgexr",
  "key19": "4bZQjX7CeLpuK2QsLcGMcqSQPkWwkUxdMtytojjdCZ2vnV716bjX9LjSbVHpu21YcLxW4dGvU4raSzEfDM5YSA2k",
  "key20": "23QrWiKGHeTYghmmCezMHLB5jpTBV42ozLXtQedUuPhgBJBYW5ZYNaZh6aQXmH2tFwGVcWQiGAAY2edtewUaLMss",
  "key21": "4xTeuPgFqa7Kb8qz7M1yKAYZ2gjkNKdd1ZyvgSqsxuT3A7Wopb5xdWGt6L1kfLqbaYP27iBrQ3AKaQk4xv8N5ui",
  "key22": "3eWVGfS24EnjiGccj9wdewKXTcEY1b5Ts3RaWP2PWE82wF47uAvbf67MDqKFShiRkXprBV7ac3TTxiyMwPnx412b",
  "key23": "YZVCYn37ihLZ93aNWbM2UNL2ZHLvew2rShLgvdCGpQkRhg9dznFbfzAC3xZeZateSEVMQQe45bWfkDmipFd12Cd",
  "key24": "orPasrZD28xpbn5brpUwkNa1PwgZquHUjrMJKV2dKewcQWp4nYdg4QLio7MgE2JsTev7jJv2jAjzoKTz2TYr3WT",
  "key25": "5CKeFJEkGF7YgCwpVwxbvt5VAwgraY3qCXSgRooVeJF6cFhAM52BRUspkCdx5uw5KPQTwKqiMPL1nvRsNmV3NTmS",
  "key26": "5hutebqurLUQRzHQzgtFjBYqQDEdNpr6HbMUUQumY5h6wLfhkLRjy4cfnC1esegk7ajozaW58uDP29ygdapkbKm8",
  "key27": "4twmjmLt67oyPN1nT61e7sHemuk5tDSMthMVxpsP8TDWU2iMdL2FY1Npnzykd4ohBtSrJDph53VttWbve6BLhwTp",
  "key28": "5kCboGkeVJe1N1M2J5EjSpmyRszqfwBRQXkDcZL2d1XUqppKZsFqYTgvEgBeqixbiKcUrMLUj4jTwC9cWC9jPQyD",
  "key29": "aqYhF4YChJhxcsmwAHZVXXU1etNyYDLAEDgwXKRt2Rh6Tqn83ZnoZGofDbfmNs9oKqMPwANEdLtfjcsXzyXKDdH",
  "key30": "btkPW7anracpbSnX8FxKixztjhgqSBddfyog2g8kV3AnYrbXwzpp8yuF7WXxqZUrnQkqutZEoeTXrTXhtqmjwqR",
  "key31": "62CKhNHGhe2aof1q9TN5xZYsq1zSTH9sFbtfDj5YSKhtfHFtt71FCmij9oK47PmvYj15pEVNF7VkSJJpDD7xAyrg",
  "key32": "2iCc9qrDkbJhK231zkiv3WnHmn393Gee6ov7Dx52euHRhd2vDG86kHMD3DiYmkAsgoheV8cJ38zSXibJaxrDM8Zz",
  "key33": "fkcY8vv9BQjLCmLcWKv63ixgZ834icRKJmDKsESrSwZRHt1F6tc5yxrxwebfeYGiMWnQStCMwwmRG15YjsqCHRU"
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
