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
    "5G9XgQNhLN4YL68UyyenPLrVx5tESQdBnJ3PPKeLuAoMqYdov4uAAz4eXwpKZSHZ9jn3VEXKTeDxvoZkeEpG8zzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZF1xt2HiXuBUexUPEnwLEi2uUP6KQBm2Y7maaB2mTgq3wKFgapd28y2rGYovjgLUQZigPoz6iZeq1RTX8gmh9G",
  "key1": "29VWRHdEiijX7ukPALFL1m2Cp4SMJNHrKCFisKuX4e5HkudPiunRsuJyahHk58R7QBpbSXHUXDAwGCa6kggqcTH5",
  "key2": "3cQeWCKasrANS52746ZUuEEinrA2oyd3WCFd5qZ94yRyCmi95ENtm13TEWYdpmuHF8wff2KgUyadSG1oTscxWR9M",
  "key3": "3cqQYDT3GprTP8voaY7mcP1YN2cS4jWXipaNzCfrS4dK8aMFxkirwLboKbKszQ26eFNcvkhrkL1ovifV5CDV3Xsf",
  "key4": "3ocexELJmBntVaVAhHWQLBnKeJ7bDptZJuwESyGNX6BvFfGg6YwnAQPwA9G1cG4jHJed7cQj4QQuEtHy9TJcgqFq",
  "key5": "2NdEZzfAcLd9Zc1dYqg9n2JgVsRPkSYzkLH2QZFfQo66vqwCUBerR8wAP5SUFaGYZE9rR5Qk2uNtGYQuoL9Tv48q",
  "key6": "5RBGNjtBpVwzoQ7wFwhgVc7rShVjRPZwBUUHn8tRZbF99oYaf5jcgzmaBpXC4H25QjnYLZLvs4CUnBycsJZJYFJ6",
  "key7": "wpXTa6wa4ytXWX6puYRm24Bv7ahFTJ1TC8F66i44wYGEpjVkVsdbYJZA6Bm4LCCbmBjgsCCDypKfc3vC1ByEU5e",
  "key8": "27pBKb4twYwk8csqh7HoDPaM9AGHHxMChtHUtzk87CKodSTHeEAveNtinqbBqw9CgrksYqfGGQFSXw2iRzyPJUPK",
  "key9": "g5gLQz6rTv5bMEoRWsjuHAjM9oXfp57oBzuviPmmQXdYKMzpwghFbJZD9vHVG2eE92eXr24NiNuGF7xbwbnuQiL",
  "key10": "5anVbiW3ed2dAZ36Wx5f7TNYeMgVpHXUcE6QeG7vN35ura84uzg4G1ekt744wTbriRnk9j1UiBW6s1PiHmYtsGEV",
  "key11": "mFRhvYRijtVv8k1duifd8aJCu4pTCjf6ybJU9GrHefYqbWpCAKRCbEBfjUapQvJ8PfJKuBaQecRY5BuuWAoJg6X",
  "key12": "34Jmt715uCgKHDB9dFVBj7DYeLhQm8ZMj2Wrgv3iHazGCPbTJ492TjjTMXgQXJmneKCVDX5AV5BEAd3QuWQcKrMD",
  "key13": "QkoP5aboDfs2AXHAcZ3aBKK1xVbjSa2qNh6KWkSUEdRiLRfkWy216HAkMK3qDKjZ8Ww9Ynx5H7PDwRgmmScog4D",
  "key14": "5SD8HJnpy8f6CcyEEx72wnJavkF6U4rEm8ADzsXgKPbq7YpDngLHtwjFTYtzvQKc3QUBmbiyZ3xrSzvqC98h8bpR",
  "key15": "3Cgs2Rbajae4ZGu2SisGCccmakwA14mHjDcHDdYgh7gptBDdnJp9K9BAzFZ9ZR6dEWGjXiQcXDTxMLePb4QSGSbg",
  "key16": "3vL5b2rPa4pSEL8h5cs2Nnb34fsgwEvdrV9nyTLceE6PJvfFLyUKNyh7wdVhNEPzAi9xnZmrdqbyX91KLSkyHXkF",
  "key17": "z9m7u6o6ZVAZbFu92rHv6gd4wASg6BQ7Ab4xL1GvF3BezQRZmTieUwCJUn8K7kcHotR5XAvNHRXeRkshc9EwwwG",
  "key18": "337CvtUrxsTcha78yoJAs5CkxpLs3GKdg8SPVXuuJEHnGkXEZXQFHqwYAmoBtfHoQVdP8yt2ZGuQF3WwF74ZnBdW",
  "key19": "43XcSaYXHBfqwRS6Zu6dD5BhGb3SWgbmFcTK4jirzWJmojtNbyZv1CzZX3a8hGPfk6Py2yTQdDahfJqpW81Z3bW7",
  "key20": "5GSdvQMXCh6Menzhve9fd6pNafRV1ip3mhaYpi5pMuVR7zfoLJpypsXsQjXazDzUMfZtnLDiVGRzWLtsHLdEAUYQ",
  "key21": "2bmWjJgxKWsd1LgSqT5fATttHjzKU17uVG91GvKxQtWKVkpBp5V768wn5up9dtvD1vqShUMeG9z256BbxLyz2nx8",
  "key22": "56tX1CM37paGxu1WPEBuisehRSnQQSiE7uC7sufMYuVViocyoZMwkh5fMtDt9V76VZ9Ayq2Tsbi6Re9vahT3TUB5",
  "key23": "2zSsGch5MVPmzzc9SswhCE6NbGRukux6pRPU2FDTbBrMApemoab6zn45ej5zynx7NVqKj6efUynA84vRDVSknY3i",
  "key24": "57JAjR1zop11YPQz3ht2jnfWDLJXddPe3cAk9Wogiisd5SF4PxnH26C7CJk3RyVHKsCVqpbXkLqwkKrpey1bqWsm",
  "key25": "5p5Zxc64aDT9uFYumxWTZcwVAk5ShWGPaiJui4VbiC97CxqznBfvdzX8NTdb5jwUihDuBdvvpctsi2xKrZR59Cc9",
  "key26": "Xdod6qM7jVkAgabZpgHFuRxLDwjQqTBcFH8QcUzbd8AUwJSNmfapm3YjLe5iJE3upDxmfsQqGx5VdGqPWDWJ6m1",
  "key27": "61YNvfnJXjnzdVAVzSWZqid65ND7xgFY2LSWZj4C9HMseisisSrfR44itRH5KspwCtWxaJkAuqHoteTDMYNtmPXv",
  "key28": "4Qk4eaXtUXVkSfGi8qVKf8YH2ryzM5H79qNxfU5MBdgMX1B462ioH9PWgVEfGD1vBZCzbUNDecb6dvYNb1w2XPoo",
  "key29": "5UPKtQVXpeCP2Sj7Gg6gj4Vr3Jex3mVzzGTpKsU6NAhWp3X2WdkkfNiEK6kjaC8t8yvTm9kvgvuv9kodXWbHV2Xp",
  "key30": "31A3mD5d7VoKmD2V1qeAg6AHaigNpimtvcWo5mavSzNyZkzXTMYW4y6iDsJbhaNcnauwBNL5DuwjryRjTPJR55FZ",
  "key31": "FE9fMGGgSpmHz2sLgXT4Ai5vSvWS4PMPFjCt657NZybDL4g9rNreQHpACGEnd19R23J1uanJz1u58mCVARPQhVY",
  "key32": "65XF6aQh6SVRTjd6iHjjjpK9voZ6AXddWNCQxBetVGShBLdN7fBnUcHs5HvuCkj64WDChPKzrzRAviERJaT5Y2fv",
  "key33": "4fe1b7HWeebrLdxi3QF3CUDw9dZk7U6yu9TAzg3kSWVxYSpHKKzp4CcJBv6DJ1UEns8eEmSbDgtkNLdUhvf9d8v5"
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
