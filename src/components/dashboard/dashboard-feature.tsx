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
    "5V9LrY3oce9w1xq2GdAa51PDCG1Sds1tYAV26F73GXNjaSckQUmMz3q1mmZcK6Ajui9xZRTEW77GtqXM2WSv35y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZqaEQP76kF18dG3xKTct3hCJAcXbxQtotRRCGd4epx5RUePekMd9kaJeYvkHRcSXBzfQxBmkcDj4oMunJ1YEpk",
  "key1": "5EdH2Ba1bzkGWnDM9EHDgtsGttgqqSPhh5NcGMfxdf2SqBtxCq34JVsXHRaFHwDwqRZzhi1i4jKey4tvjBMbNwgS",
  "key2": "2yEaRqoz2NyyETPBFn9Djsnnp4voXW3qq5MUNrMBnEhh3Fr7Azs1Z5pawTDeqXmwpFkULzr1qJj64eyay7bkXaCW",
  "key3": "rRy7cLdTkzFWmfxt9xuiDtm2y7mj3GTsWMR8pAHbGnyLRa7Li2mctuuoF5eL9dPQiLCgj2DAGLozMGWpzz5v8m5",
  "key4": "WTm69E19xFycybDtkRGLBjj4jbDwGpRpS8NgVBZd5CV56erhzeEAcvsxi3dvVWCYbzH2ma8jHgS2VvLibk9ak7T",
  "key5": "otADTjhMkAD5M4DNgjb9r2c1e4y8phBGX5UMABDbRTrYcSrUeFQpEyDsT8nHDQkEacNZun44GTDBW2URAhrmq2H",
  "key6": "JW9FAafZh8CR55hfD6KkhiB1Ba4DYGqTzCV8x752RmFQsxs2evsGokpG9RMAdfXwkNSyPk1Asx6L6g217etXSzt",
  "key7": "n7JQa5aLvJ3gdHj296tjfQdEapuvE5mfyEDeNjVHW7fg9vMr9q8TnCh2bXG4mLjGVHo1sv43nNbuTJkq5Jet5Kv",
  "key8": "FkKMbfaMfdqdWP4U86KX97VU3AVkrrmgKS8AN6deKcRbEKP8Bv3QSq8K8gBTCVgdHUtGisxjPfriBioFigQU8wJ",
  "key9": "kqxNWqxRbci3j1Rw3UYV2Kdx7rh6cVDTSswwLfm5nfwxRAJybuJPy3a88FJuwbnNic5ETYJfRaAtHaWF8MNYeUv",
  "key10": "AAtDvnJ2BPqm7biE7YkKVKagAG9KWso8yRMaXzEkbPCpiAxc18WFS863zdKHwS2UznEZpwZVzF9ctZcKNoQuwUX",
  "key11": "5jFDaaXn3DC4yT9UNHBcdbzDSPSdW6Gb9ZE8Q1xFjXAYbskD8Dq8mB77ZHJk8EtJWTKSVVMEDcAuEPvGKxomxS7w",
  "key12": "2NmMdjzQR96nPXvnREe2Xe2owGKHVmK5CiXpR5DQB3p73HE6iswGs15TWif79AuuS8GKU85xAHNh5De3GZHwPNBD",
  "key13": "3f7JjF1XdzyvP2zJ5NWqBo2TVvrX3njN7spYe59U1HhE9z4HxyeswRospcozwJk6CEtmGhyuVWoyPiRGoSppLfBs",
  "key14": "3DKE567qtPJMEa3zHkMMQ774NkCnfJhwHCdNHEaqbjYKwatFdyoPxxhrwnuwBBWrytLoJuFuaSxALtdvG4CjxCP3",
  "key15": "3jcP7NxU1NaVUGVGRAzPXWMqrn7nEYjpLTKsFVe8hWMN7EHKkmT2m42caC2XU1wNfmhuhR7Z3tNYEiPSgTAAWPx7",
  "key16": "29vvjWJazTDhWQW311H13mXx5emLhuD545q6r2A5KRYkZb4UMwbZhpvQXxhsCFcZKFjNP96dn56FL5k9gUN67SfP",
  "key17": "2HbibAz8XAhzSj7Lf2m5kCZp5Y8TCUCtfuczjocYDUWjrofrKyvusV9UR7knbeTGUcnNga39nCi4jioYgqQhG1c4",
  "key18": "2kdV85BpAvErSWwrmTFY3fbcfGRNzhM3TipvGxcuvER8i2yU1ifPvHCjryJFjgTs9DXqiQPitBHjv2iaAJRM5KhR",
  "key19": "3D1wEfN6ubCQqHzfgYodYq9RC2xdbGeoadSVfZFZoQ8uapfpGmyh9LBYcT8yBMG2AWfq8E8HT8CuLVX8c7UJcHFY",
  "key20": "2jDrwtp5xgEKZkyHd9SJw4VzsJHJzhK2wSN1k6B4QbjPbzGgpjMWsHsfkCeS7DZs9fL91YjCgbpSG3e8u31HPnGC",
  "key21": "569x1nYABJfyngC6q66H1qdJ6Ah3aRWpCkyHqYtKZBxroWAfjxzVARbMCGDZVYw76pHLKVUPHSST5fecWFPJRyD9",
  "key22": "2rTjEznBtjTFwN6xhQY6oitTEyCGA3hfbmvb9CALV2HdyFi44J5T33vN4pZJmJZPD5gpxk89SEabxKamBZ1FG3Rj",
  "key23": "4nD15WUEkGMaUQ6aBtBYVDZqEAG3qbwqw1TvwAcjPT8hdPMwjhurKzLcVrUnweoesT2A3CYEA8DFBrAZbV5eUjX",
  "key24": "2pfRbeQbR7LagTwWn3mkgHUt4JUq6VER6n1bUMTffpFeARiq5ZydtMumhgBEfB7Wwf6MEzDwMrA2Gfgfu5nCh9rM",
  "key25": "2moKs5UryMLbUHUxLy2xAWeknWVKvSp8BLiJi8YncA6YW6gseFVU4hovqZon21hTkUDjDe5y7AGV9sH2NFNFA93M",
  "key26": "499LDeT6CkoUnamdvTxES7f6dVZh2zTGhCijTFBBZU6E6f7VHF4Eug6tkDWosH4w3JNrciK9vkFzFpLJ9w68rwpS",
  "key27": "wgNR7jZPxgiaUUGPPBNEsTwpojFB8KwZG4EEHRJ7y5m8qrP5yRcQRbpjCu3uv117uAqZVBHXM6ThpfthnM67BvW",
  "key28": "5StoPasrEBbYT6aJQcLjAWefxWoWKJsMRDXoA5QBKTTtPxe91E1D1iLnM2XLv4kacHCbRv9jTNft2z1PX87C8393",
  "key29": "LGPHQ7ccb3f2nESmCwq9rNo9ftdKiVDVvzdPK9BW7xUyt5cNJaJW51mX7gdzVs3U7KbMqesXuGB8mKzcESfDziC",
  "key30": "3yM5pCgJn1DEgKAysSwrhNX16fUxbNhNMc6AXuiLtwXCTd4dRoeXEKRUESpggE95nvwMWRf2NafY2vLJ3S9As2B7",
  "key31": "54PQeDkutvooMk5wZyMrKyHujEpYwuV9HxyjZqTiTXUUA3Ebn2RmbzPtR341GhCyKu1GjyugCgjtRjyXAfyJtFig",
  "key32": "2PCtX2w51RV6SBL9G4kVuNitkcQo4fUR78yJcxioF4r4goEq31YaemjNi52rgHKhefFWgADiHCPA9s4xqtt2P9G",
  "key33": "5x35uVGpsQsv96uy1gYQRmUNe2VLy4RMYD1xCeF2eVZMQSGry8J1DNRL3BCiXNasC7bSN8KrUb555u5cNMrT2XUh",
  "key34": "5ruSj8JbNhv1h5wKSMjqguLT5HWksmG8hm44v7db7xREjFeQcBnu4v9SQJVmRR4hf8VkzxkySijYfpEFHMHU1Uph",
  "key35": "6oT9zQ5sMFk8LS9foh8HzPYZHxZjV71icqkRhobnryu4Hj8nGtYkJ4wqE9itKPAcmpXvToFT36Dt9Vj5C2nDmqN",
  "key36": "reYpXrCHJFZAvkPZrSdxGhNR2xeUA9eGYcra4eiUvnCw1u9Pf3imNTbYXsFwSPvDJfBcvz4ZMjRMPU5TV9Jba1E",
  "key37": "2PsVHkgNftswH2GbiKGDMYP74AvngCDWD5HefnZz3sR99y8Ui2KnB4bkmd2zwzGXAER6cvN2Lsjc52M8VxZs2Htr",
  "key38": "cehUeX9fCBLG8Vcyr3WnZo6h8reKqGMKQsUyDRR3wkiMwj38e1ZpM8Z6TxL5zsBZrMcsfh2m5P47icSWHTzTebL",
  "key39": "2mNYdy2CouZps8xvAV4WCaNmirTpBMokxiXUZ6Gui4FLmCXEmKB6cAtCQz2JeVXi1HvSuTNUdv8BjXD9g2X2Dfkc",
  "key40": "5nTbLwXzc91kVisAge8ubMEkFegaBmqrGfiSVRNxvGNz7ofATWQCyMSpAoWicojoYJ542Pu4Mv9Ydt3rtCNunLGh",
  "key41": "3Y7GYsaunU3txpPVtX55FpnjbDwSCq6GZrMXNowMw8t6UigftkggqNiXx77gdVerYHQ6C5iRtypRZQktnBySyMAc",
  "key42": "4kDjfBgCVGDZ5RTKRTBUXVffR4LTCQ34mHrqPwWTCeheNwbdvmr7xNyzzgyybQmgujh1yGAfesGHjDhxSqBpQC7c",
  "key43": "21GRpDisMExvVNpnE1rMcwtKu9BBhkNJ7X6zxV7LjaGsfh5C79DUQMKdLuKT3KN6cHT6Q9sJZk1sw7qVwPKLCn6p"
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
