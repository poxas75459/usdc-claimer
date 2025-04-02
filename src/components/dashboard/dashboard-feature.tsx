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
    "3Z2cDEHH6YAeHVeRcTVZ9Fsk83YbVMRcAzhHx5m4CvWB3sK1ctXKo1dUhfYfwLAXeDHKhXQ9qHH3E86khejFyPoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YALJRLwi7XerAZ9eG77EhNYR8RmZjdnUGQdLD1JkQ4ytPDZTB9xCdoXsacgvCiN1SotHBHWQMQv6zr6AYkYxykk",
  "key1": "5WR53jgVYE4JVTatVeJ6ipYTJFUYqGpgNHsyc6BibS2cy41HZnKvEwx6wzcT3Z6SjbsMpyj233hP2zGmqGAe5zR7",
  "key2": "4NwY5q4DH6ZE98GBYqdb5khXtn14ywHK6xPDYMu22XK4FjrA2xeAJFdTiEFUb6cG4FkpCFYGXf3ga6d4qu3JfzJt",
  "key3": "Cpec1Dp1iSSNoaEk6dMsX9J78QCsTtPwiY5FVoGBhVeHfpbBGnznK7FuMmVcBp4hpnUtcHMXJYvkaCWdo3PHrvY",
  "key4": "2hxu2fYzuU8FF3DjWXverkSNYBYbzGNdnZmvUmNEdW16w3WjgCkkhabpMoKGqZELajQ6VaKz9aUmgq88856cp2nT",
  "key5": "4dY9ckgPV3cN9wKBrBnmGxLZvH1zVSQkFoeEBQQBhevL8iuvqZ98BcYy4Zp9GhUR4saxaBjwxFWq6Niea8ZpkuSY",
  "key6": "4e3Eee2zLv5mhggkot26syUbxLUDdAFPBoVfxpv45XP3A8cReBkzNE6onvc6PfuhH91q5Dy6mRQRTeud4SKNs7Wq",
  "key7": "4EZ9Gr4RJkpXPLFZunu8nPho48e8h5dWCg3gYf6ApRYYtPs3PSVxrayKRdYCnT4At79SYqZdh4qS9WXLHBmBcSFg",
  "key8": "3KwGYrT8Q3CmrqiAECydidsxbgDfkWa8LV9ZsfTbChp22DkcNSsj9uABGfhyCPg7p32F4Ch2axHWgGFqqjYa4nxq",
  "key9": "3QajE7B7JeMn6LaTNuJCVWLGf4fmmgS1qGJyPhcJyPhGsiegpdnUBLXNs8Hpqpc1Zb7aL7X9YoMUohDJQpdVSNLL",
  "key10": "3mqXf957aK9m7guUmMcFtAKZu5tCxYPgkWM3QLYdLLqzHnEuyxLV5NKQGY18Q4YryaSGKNSuqzggWzUCDphpwatU",
  "key11": "5i522K6EcJagi1UPjDck98nmsPntEGPDysva4u4gg1jhfSQBFCT6NygE3VpHz5rGBjdPBGDFTAVbLofK2oXzNMJM",
  "key12": "2Y5wLqTRqoSBvkc9dWGLfsoeef9PrbWeq3g3mNUapLGMGcRkjxgm8B6WzvyrhdhfmZAqm3M2n2BNqzFMncTkg8DK",
  "key13": "xkiW5yR6io24skdL6fbAMaxjqL2QNte2E8Hb81cqpuptKvivvz7fAPZs8QivwtcmbWS8vFWvkHnXDSEUB8migGD",
  "key14": "2umv12ME4BLYp4RZ7nh4gBjtx2BjNDyBtKNqxpzqG6SCtRF6jouzvFmBZr7udVyvNcHVzdpNVYYWrUcrDDYSauxw",
  "key15": "4x3zK8wK1RvWudEAeHj91ZMnKjC3bA4a56VbkXqSjbW4SiRz4YwLR9bNTSNEvMk7D8JoS6R6CCkqjXnqcQwWdYPJ",
  "key16": "5UAJqoKy5b85i7PmNE8LdbMuPnwSqAJ79atPuvJwAdtS7uUD8GmPkk3JXJP3p65bSxdfJYbnqTME8xKAZzu75xe9",
  "key17": "4gNafpRn7NKkEUNt2CsdvFHqzWgBLkrmb1Wq1nWqvrBDKz6GVAFo3UbZryV4Rd9DSv4MADBW5VxdL2zkEKqBuAjj",
  "key18": "4wHuJK2y6TDgonPHRXf1hwvvC6wsSrKEr7RwZyPYEW7TR56gnDttunHjtDWy9XCVDwBiruCftaEgtbwKiZ8ikMxi",
  "key19": "3dykMsZs2P1WDQ2uS97ur8eexWAXJ2t2dtzGz7ahE4E9c95smknYh5wXqfL4hScEPtmr98mNdfJJyffuzT3kVy9B",
  "key20": "2wCZAeqFjZngHSP3zzTsAHJ4MxUGqsm11akQWPKW7THUfc6YGPmJ47rrfuMj1mz5QiCjnJTX3DCRby9gLLQEiZJy",
  "key21": "63PxdxFfm9BfCjnF76duvLZYzDcgrEKMH5Wf7hbfaGspznG9SDXbGRMoATCLe7wuBwTg2r23Yb6Qsi3mR5bHeVDn",
  "key22": "5dBuVeNNWjMHwuXWfz53CUftrqZWipuu8FKAxwVVVKhUub421i5JFPj4hpEM4n6awmF7ifz5dkaANuuswbJgY7Gg",
  "key23": "5HnbRFQhQAC9V3wJQQqz3hRMdksPZYnczxv63LosrygxtU7p6ZpZKQs7MRazR4mmEXPThaSnksS2wLnTE2YswfUz",
  "key24": "3vDtRQ6PwfeVqaFoNE4ESTiBPrcBWV9LXPE6dZTF72out9aDUESxZRfg6hRaqkKUkCLe7xTy7iuYQkA27v1Dhg8o",
  "key25": "3TpEbHLty5rXKvQUoG7vBfHeihqy8FMqySo7DAWRAQsbDgegP5ZuCd6sjKpKC7aduC7pvzUkdpnHa47NcaxQBS3U",
  "key26": "4eekwacCsp5vxFAzGqhwFHNSvs777R5BjCbtA24CsUdpZfvteddmnBuxV35gbVxn6JdMdJTWRcaDh2CxyVtEMUC4",
  "key27": "5XmC8GsJm7TgzuDe823HMeMpWfbzhGHkm3jZPK75GoCXj37TYjJ8bsuhPQJTMrMM5b48HH8V9zdL5bVPHnxUCEgW",
  "key28": "3NYA56aTeSduQ3WdDQ4MBzJw7S3DprEDW7ehNc6wwrZ1Exuf94CyoutC7rud4yC4vUT3jpEUAzD1JQJRTPv5YNZP",
  "key29": "BefFL7iLovc8hMz2kTJQhfcAY18iGmeVztaH6mPQTq5EbhScVfPRNwTordYbDz8dAnmFMNGiwbx2N6xuckuHr1T",
  "key30": "2TXFFHiaeTv6vnHAvj9t4MdP5FpnbCEnqSpwBTJf821M13QmMiTKyePgQuyfEzomPp3f4r9YrGwtrTW2gsJu8aZg",
  "key31": "24b4P2RfgxkzDF4P5EAypEBy9zu5TZop9aojhrvsafmUTZC8MJSNjwphbXZgoTesvFkCBWxS6SL5GeCPCSHqXzTu",
  "key32": "2fb5Jw7ANSNi9LQugPTSsGP1crhuXqS3LbzqhuGbQYywtdLDkTHP2aA7YYk9q5pavAQi7WptApiC9u6uEKFYNTXz",
  "key33": "5dQBUSNfsmPM9cXyaWUAAd7ncpbBY3MFf1MmX3kDpzuZiC8Lrd2a22NzCcVdCjy9UL8W4jUykQCsC64og3c3NaJh",
  "key34": "FH7LwA1AHtDFUZGqQnquETFXeXwdW4DHWSUKA4aKmWPYx4YrRrq7ERmzq1qudt7T4NopXQUvA8q2pRDTTvPVfcY",
  "key35": "3tzW8UnsXWF8ZNCCwCnUA19tDKR7mQ7WdiyRK8w7cFrfPgtUbsnVqiKqno3qPkradeunojLwjxT7Ci4vC8NQhy4A",
  "key36": "wqsLZL8a8hBKQcMknrRp4Md1NwPAx29vDBbgbnqyWvH1AGRZZREig3TwFLUSQN4pfvqnvWwZitSML7akKp5zDNM",
  "key37": "5XLTq4RUXNRJrtdneUsYsgCTduY6NBuSsUPtEejNNaZ2DzaC7JREPNjJMAX537G1SW2nJfkhmPRwozta6F53rjmS",
  "key38": "2oX2HZhcopbGmPDbE9NHCYPPwaEyeoVWsJwxUjLuPYufVvbKXQ8LfiPgrX6XoTp3zJ79ue3XFP1VgmBRkXZma65F",
  "key39": "3S72B53UC7JKAh51srNKJW1PaxMSQAngoQPrX6WhwH4B66Bez89EHApgetQYP29HmWW5TeujnbEL2xnaU9NygmVG",
  "key40": "2Ca8oFGZxJjfDkr2hyjMUwSf3gaeZC5U18uPnND1XPy5A3Ka9Q9RnQ17biTZ46JQeHgCX1oPpe4gkRdAt8wKyjLm",
  "key41": "4gBa2GCof6ufu6wu5pyG4kyeUyCfycYcXS3i1LfGhznZm48Pfw6QjX4cNZrA94urmSfajCNm5jmDPE5fXo9sKK4u",
  "key42": "26uernrmG5HRPZ5T6zdYQyr4jRjJn9vFobK8qTnDKZi5KcpwRFVSmyv8FUiAsK4Co8dQqmL5Q8MXQAfMMmfrYiRw",
  "key43": "2DkCzMJDE5prwDoLZuBGGxKBgJsJvTtHiQLU5q74p1kGefZ1f6cV5VPwDiu4GZ7GYZoTQoK4bmiuWMfdF9Lj2cDe",
  "key44": "2aZaGCD8q4nawoFcWCZh9xd9w9xaMMZm8BHtxrjX52xmfn8B66tAe4CGYPZzHAT8D1d5XBJn2xJgpcVMVk9f54cZ",
  "key45": "sv8UQJuDpKaS55NTtxGr6A25ZboZAta6mDR8SCGThPqd2jvYuoEz9PWvEhsbv6sRfnX8HZqf2MHuaFES5MLvPQM",
  "key46": "5T3qFKmMaFq4aYfvfVCvKdHZYXydhZhCvy5iudArRGp6E1xjQK8P5zYjNux4MAVfLBAHH4uXtt79PejJc4PLsE3N",
  "key47": "37cSj4hnBn8LRkf1cMbsNR941ojoht2uhmpWKGR1aaEwWpfTGtLVuYamECmMqdvDGJwMRVvL2adKakGzKHi33fWA",
  "key48": "W5K9r1FWFbHcnG7Dcbz1xx5qQtrgj647ea8CGRcd3uLVh2VjFBvBvY7iR2AinQ2znpLnY3UAney1LjtXRHQf12b"
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
