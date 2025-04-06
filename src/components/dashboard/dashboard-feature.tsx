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
    "4Q6VLT9vPLPARzbXwmqNY5JYZrFrUkcJjN49SGR332o39zdVdfGC1Er4WfHhh5EDvEJ1NgZzioBT3qNKVgomWvT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvxijFKDd4fjCVfJDxgpzFE6T94ZcnJvD6hg7YEF7K5BCg6vCXAhNQkiVa3i9fsqk6f1pzZZjvJ4kqrxB5UkJjs",
  "key1": "E7aP6z49NgdwfGQYBE4mHhQgnnZZfdGEyBiMXP6RwMSvAg3NqtjVLMqL9mS8J2omYFeWKrHYZRZpwQNj9PDo8EA",
  "key2": "5hatQvGrgGjmmPN1DvJVpxX3UsLg3WzLkFp7H3CxyKpU48qoiQVzFLjFLa6BPK7HuvwqiW6RBogWNRiobEVcSUpg",
  "key3": "4oqgtF2BqRZvcPBE9kmBGxuHVidUxbk2Aeggv5WwjvnzKTKJoHZxpPyApXqzvXEz5maDJ9gqidDkoxLbpyvKe3pE",
  "key4": "tWcbQQy862EjZFWrF6pBFiU84wr2TMwqZSYVPiR6x4HYhCDuy6kf6dYQMXv6FW8fVj7NULjx8PdmTLafbLWhX3a",
  "key5": "sVNRVHsWz6Y2tRf6uEKpuBPoT6obXwCC9hNQyaqYv5WH9ciiBgpEdBX2LZXdA2yBVsMidHaVDtTVQRfdfPnaN6Q",
  "key6": "4J6w8xhpb1oJZKHhm5fw7eYfjvJP86Bi6xEP3nzxCfR1rTw15vxkAbBH8URfU1sAANLmigwk4ysP88eQspQcisYS",
  "key7": "2oWBCGJ6vYKyKknQ1rbzewT8WqLaQfr8UZvZEQrJ1h9ViBmXwqPtDfZ3RnscsbwMTtRr1A77faz4KKoRd59iP7XL",
  "key8": "UM34oqHhoFHzabwMQPDDcgY1DEZEsdAQSjbDSLrkuXQdcE6tpbK3qnZ26AspG5UQaUjqbbALzvN1BSdn8We5nNe",
  "key9": "5iSsKTXt2NvreqZy5CaVAg8snGH1UDpJWftCvofJ52i3g2TADZ7ZihJ5h71JRoZTo5fizurCAyijhFdf6ng1EW9n",
  "key10": "4HwE6WzcEwMmShRy8ZRGYHTbLnMHdFfLmzRskTwBixZQjoXBXH7x1SU2gXRzrKny74rM8gGQdF1Wx9Yk6QLcsyW2",
  "key11": "5fBoVzzQjxHRQpZn46hGAd2sdqbUnXaDEt5upWSnybfaEqDsYuM3v3xcqarwG5UNKLvk7i4fv1f8drxFs4urnaYT",
  "key12": "3obdq3Q8td5r3kTUy6vZTemNhwaVpLcSLW6DjYuBKkBaN3jQZoZiAfQ9EBDmQs5M1w3CUyDJPM2bpRCFjT7tLiLX",
  "key13": "jyTXzmccE8gHFvbN36WFGqP9AmjrRLHYhoPvi3HxAyGVrZq5gv3qFkgBhyK8JqZrgDmCrQPBx6fVWKMdkrzVpox",
  "key14": "3bTdu9GX3sWx2K8LVsfN8bgEkNGzaAoHoMytJFXmBQLVrmYGTNsw7Rxx6KoF2oeaRErU5WVzopcdCnDTFeJqkBYY",
  "key15": "4Eg48fBhPfR6m2HrbH1egZR677d3whGdE41x8XfVoQMDZr4v1WgGQAohnawsUrBvxEn9wZvQQHoPBnCpCnhb5nx3",
  "key16": "3xqFWr7aRAqihHa5cKjJxBCV2fNUqqKR1V3Cgx8Vi1bvDyrS1TtKe9GXacJfsd4K8zd7LxpMEy1qZ1WGwvNNpGDD",
  "key17": "5NYQFr5UGDv2CcHY4DC2g8MM4HaR3aRsXeguS4xFSFAWu3uegiL3SASnDaRxAGazXfdUx6tDht83GDJCNER2KCZu",
  "key18": "6MefN5RbdNngSXeVXLwRupR6cxbWZ4QQqDJoyZYUKfWSH7EcZjGk6UMmxFEHQ73zELkgsc9sEhGT6x7d5mHs2SY",
  "key19": "5K7wyTaJc6LoXxQK2rm9aamkrsVcnSsdDpsQm29HxqpvnK2udRvZkzKMmahCygFpAF6NCe3dXaUvfNwLcVt7jVfX",
  "key20": "QQw29o46q9ffuEez3tRoB8F7YTzZgoESmKMRp34r8qxL5QMNm468TM1QoYqgVd2bhtr3wKtAmxNDhxcnB6zxM6U",
  "key21": "2BX1i7mLRDxRtWvFkwZMhZHUpBW3dZ4c2soHmXEymEGUF4ycwHKPjHrq18am1MfHPB6y81sCEAg13Vi3ZYRyqiJB",
  "key22": "twJj7ueEi4hushXR2p7kq84BBkBtaV84NJZJMcc853dmaEp7hAx5u8NsG7fVhGVThKEHuqxjweZ9W9n1AkC7koa",
  "key23": "4QgiFQMWJTS4yjKMT1xkWmopbWDLftwQEZXkKj5E9qZxjFUGUbHGyxSeYPrj1hynTi4TkkES6PBiXse5zyssNoBk",
  "key24": "2v1KgwPP17ohg1vVuRBQCQ58xzNkuPt4QtUZ5FDyzmQX1TVs2dBBEV3NcxWiEN4cDtKK2UG48QugDndGz2TbqN5g",
  "key25": "2Ubxah4QzEuTSKPMbhngzwPQeor3AukUS3U3wZsGs4CZU8dF74zLRaph84eniYmYy2gwdCVmh3wDVXszPNNcfKFa",
  "key26": "3N7ij392YtPWc9tuNd8Sz9dQA1q2DHwcmVwmCn9gZjzpJQyiNdjptbD2b5pCJyu1CqbKn8Hr3wgYryYcU6Qs8hoy",
  "key27": "jzpw1YHYMR677ZLfqevsNums1QGdTJTwAgDTLJvZ5Va5ocYXb8qhHBPnFBE9ZDmZBt1LiCgR3GgyxtQbC2aFB6X",
  "key28": "QAUCtuKx5ryEKPQvMgRecy66tjj8Jc8rfHhPf4YzQvxKsTRDq6UXXMsF57s8GAaa3FwqredZ1vXvdbKwuDZx6m4",
  "key29": "47m41nKCrroB4mEsnQLWFxhnN1aRTsC5NbqU9ibNDm8RMrnmqFrrFMBwuYvP7hZ52CUiAKUjRpm98k4rGvx9GJxU",
  "key30": "2xC1gbr4K9aD2dskrQhrKrJYdy2EdN9QFYGNEqbtNpVgnzoi62p9K54oSxTVpbdiH7vqTuFkfx7dQknat51fbQUB"
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
