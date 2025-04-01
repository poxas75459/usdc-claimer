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
    "qXMuEcPGJq9SFqP7h3A2jBo84nsjeu9rMvYueUcUfkycpaFXvjUgWBm8a7WwubeYaShJcfb7xk8XqvZspmJquwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "996fLrtBA43HwFNFhbKssnHXvAxXKPmR5j99bVhN1pYsuiqjQUK1eksykwCXzciXFRqExZHZCAzmyxZPYkPYtHU",
  "key1": "57kAkPmcg3ycmBMDnbNVQ7ALYGBCJzb92QoZ8kWsYRTnMmz5Q3WWsWzsm5hzNCeZwzbnj4j7yskTKXSmbwwb34sY",
  "key2": "jZ1gd3Yewn5VsMnGhrSErypMYnBcVCtEicdNWsnZgKBgrxWSLouvfYi7QqCHNe11h6GQxrAdKS4WBokVZvthe81",
  "key3": "5C8vtyvJtQCQNE8Lq3H6399ypXLthEatbiELt3gMgvFpqmtA6haZLraM2uz1fWR4XpVt73ac8N3DmJ49cromrjmS",
  "key4": "3xT1URbiod27fWY5XjR6Dddti7ekJfxaDAAogZGb4RUwapB7SSoBFAiELbm1q15w8LVXWqYJ7RcYvbCtegUmCTGW",
  "key5": "2S69FWKEeivDgpcMDVfKgHs21KDANjaNEGEpFhsoqiqcqEAmGoKx4BRTsCsBYneeG5LYui1LVHGjPoCmLewu6vEb",
  "key6": "39gebYzb15JU2bKekXLQ37jRpm7eiBQ1H87vLMqxQLkSefhuBHRcrAuGqcWqEJZ4uKWzC32ixBhGUU6gcD1BaaEi",
  "key7": "3HXRtfHGvngEteif1SSGzyZXbVhRfxFRfxZZapmU6AHmSGQVACUAobTxE74C5kqqzhtLC2ZrPzpFKrLxeUXuh7Ba",
  "key8": "V2C6faHwuMiXvmSoKZr8uR8kBmNXt13FVJ5W8gHvsiKF87w8V4FqqfPH9GyipEP3ayBXz1phgx46Co7vhJMerjS",
  "key9": "2S34iK6vdG7VMZXXA51UUW8qiCovjZqQNwk7jbUSeUgABKVA92WRoD3h5LeFcRANpgZNibLtKEVk9mDW8BG9kpvJ",
  "key10": "dN3vcjFNh7pYHpKSo7qqGrDdP8gbtWhfS7j4CyrxugHKXwJ7w6MGUsERcuP3q7fN29ue5VF5FAB2V4gqJqvtjkz",
  "key11": "3H7KbhE1UEeCppoA4VviNQEHsJmsGF5jCeB9FnKvdCyribjQNMNmGnZPqeL86pc9Nrm2G8qVaqp3XRpF75bKdnVY",
  "key12": "FUE6ShppoYXbsoCHFvrtfFjJJBSao4dfVyJEJkZHWQRWCo13moQTYDFZsrUEc7Ln7YJHFXC8iGTF8AwaYegMcJU",
  "key13": "342oRZMiH69mWmfAVCCHsmVihZh4zA1gcEBBbbKZfKtfmYNqpCt2tJS6Bmy5uCASxCJYtBLu2NVZktuHaHAVV34J",
  "key14": "5bpsMxmEpiGo9kC42vfh8WCCKNobtAAiLUaboh9BbdHEoUpfZZsCejz5trFeFxmjadBnU8aDwrqSiN677KLvRS22",
  "key15": "3t6FbE8KbuxE7R9StSM6QzPohZHDsCCMzidEC5xhsEG7yFmZ97fc6r77TCAWn4AREoKy8RmhskiehooVGDNYvymX",
  "key16": "85vb6cVnPCd18V6s9YiYxTysp6Jej3SazggAw6f62mbKU1yKn1Udt6cfptq99z9cmJNTQ2J7UBWgUDh9Cg1aD44",
  "key17": "2PrexExF6BY33Bcef8fvJ6dD9Qe59Yk8vVZ7PYzKUgmL3EtPDjBycTYWy6BT9XM8Q5LZYqFnfxTK6F8MN6rU1tcH",
  "key18": "JZc33JtA4o912si8AAh5DF1kiJbQUgpuW7UWwcZ3pRwtj6Uu1tQ4vw9XhyijMA7ffdZNvX3zkryBiMTRyrEzV34",
  "key19": "7UYGWmkidkfkGa5hdPvZugMt1cbjrJ5Tgsu72W8p7FzRysLFrHjcj7nNncYCYnvQhLxvBGKtn69JRTGeiP234wQ",
  "key20": "3NGWhiemYLaUTVJfvv6rZuV4C5KN3axL92Dbm8ayY1ZfFkEG5tbBBKBrgv4uJZTugqH8uuq69ceUJjV3XcTv1zeg",
  "key21": "RsUQ4oj6iAQv3hrAxxS1cnAA9pcBYYWKtgrbCmPFCGQesyDq7mUXDXDB9M8HgbzzyZ47kKTPQ3veG6kwdUrnpY9",
  "key22": "5Uaw7TYEw1Co5FKYnwn57ntEusdgj9sUtk3FXQmE9y6etUHKB4WSXhy1uLastTsxpJCqRvrfi3X9gXiF9oRuyG1i",
  "key23": "2B1sbKwr2oTst4YgM3gQUnNTRHBp7viGLFAawqVATcKmJiEmW92rj8uELcQYux2R7k66edPXYf26cC4TT3E48r3m",
  "key24": "3TJ4RKYM2BdcoTESUXQu4SKTKhixvcMpQbhVDckLZzmcH5Tc1aUJ6Vwb1UC9Z262uradvBfjmXudCJnoPHgZfv4s",
  "key25": "5opQ5F1n6wfcBgJpSAwJy2diGcnMuBVqDrytKuUW9j9NUM5xa8egc4QxL6sYpUnNvJoYTGqg6fgYV7uYYYUT2bDp",
  "key26": "wY9XnLExGJQLFPYEWQ8Hu7LeReVpnLost3gNLAqH1iZad6RbdHLNBTBHNtP7TYj6uNgo55hc7SJsftqbLfirEmy",
  "key27": "23H43439QNZ4CCgmuJgoqQV6jGWwJgy17941vsbsg2eBf2f6yDNw6STCwkgzs8eUFkyYf2XDRQ9KSWELjtVh1g7d",
  "key28": "4k5vqT2vq9zKNdJcGEhWiPgLJV6Qk7MHr2fjMNUhqr69QhssoA7NsA4ujQ4H4RNKoGmLGtNA2mnpYWXsF5GSTGFD",
  "key29": "5ubey49Gy7CaPSrzrKUSHmhdhX46BKjykxxr9uVRkb6sNo8Lubr34Y7LASp2QpGJ3WRTFXp9TjoNVrTFTNdRL9gM",
  "key30": "rr2WRb89ahuBHkUXLkCRqzd9QTgMy9U8cNHbdFaKzmocgSDtC47QiDCeb1CbaL5vVkbCguco5DhwQyRqhDbrbzX",
  "key31": "3UTQnonWTR1rosAGTvUksGo2aYyNt8RYgyX5oJdRKgY7Ptz9eWi3iso8THbRRixo35KFxgPeJHmJ4njeTs4fsJAJ",
  "key32": "2UdNRdyCay2QbQwo56NQZtWkLb1K1h9L6fdYVhQMPThDxfBFo8pS6AeXnfajAnm9qnNNLvQ7FijpswpiSpowDBqL",
  "key33": "4G1ynohVYkiwauYrj3hamTzdjNSNQAUtczSqDe9JxqgzWh5qFpdbDb7JMkMGtpvTuQxnExzgJ2ocSiKsVZr3yXnA",
  "key34": "3LgX8rj4EfuNf34kma7ErpRHN8k941uDWiY2sthmmbghVGmF6Wf6cGHrd2PHu4KMRVTet2iv3HUyLbVkhcZRPGFC",
  "key35": "CZrhpHTTrdLwGeE3yhKotiY1acceme59qZPTAS2CoPzhjByFSBZTw9mvsgPUJhrrh5xXxi4pcy7tQg2FxaDND9F",
  "key36": "G7cr1WJmiQeSgpVFn1oY9ZQMbEhSsDDrDUvYGZwAvAryRXMq2PjexNPUFLQBmyJxa7ymGTHHY1Gc9JwdKdGwCQc",
  "key37": "2CpznwiiD7P7oXgABnJMoeVvCPxqjSiJu7WMCRANTb66EshThHVtLsueMEVhoUWAQLuGSR25PDckFeJ3ZMB75v3u",
  "key38": "BahJi7nUjeZmxwE6a9BPos6tGMKab2LmUEGNNy3K67RqtRjxYPYWK1tMGfwyFja2vUx2mgSd9tzD2nRmrzJHchp",
  "key39": "4DqgVnihEn59VawbHFYGKG95cQC6YjX4ymJsvGF55bBoZ8Pdq3uHQ3dTd4JqxdPuWKHMt9cjxEpQPvUw23Zpkmqg",
  "key40": "KYQnzrKJR8dUD9FbbKFMhak997JTSKrcnNJeJYgaJuAQD6gScRAo8MEyLTwooUHhAYw5AX1h3nm9SBrtoJ4ra56",
  "key41": "5FpshX6eexnRbzikmGYW9jC9Bmv4jvHztfufFL13sUH2LBsB4QNw2aDgQg89H188DzmoGp4A6Mjxecbv2MjEgww9"
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
