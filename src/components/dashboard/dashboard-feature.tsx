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
    "4YNzJBDFuoQMmUCMJmFk2Y49n8m2PWKZ4jfy5UzQYMswhELwojZLRBCfhiiGgGkLMPHyHGDLseQ3t2bUTdV2bWVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrXbfbCmyqLnZYEATAKnQWvAVAHuk4ha2KcBWWvhs6XUsPSXMweqdA8LWdoY2iP6TBtQVtgrrd4oar6pJtEBm2E",
  "key1": "VwVoMha78mjski9pTXL9Tz2jCAEhra46baFUdt8QrNU6YWxass4tzko91EcgUW7uMqFHpaaWNaQ8DzYW8jf28Kj",
  "key2": "58uErZYrKNmJedehb7n1oLBPBxQS3ebLuudoU2DmjQjFa39hm6DhXLATAhyt21bEinBDRkAQsyJ6tX8HFsX1t4yp",
  "key3": "2D8h1SW6anQrEjJZ7Bkz6tFYdQJ8VWMQaAr7zCq4E2WBUbFaJS1ryiNwfKBURwfkfS22wVnR6j9TBkpbGYLHwLZ5",
  "key4": "3C7hXsRao5btFv3WoiCFHK9NoPzNdVC5p1gmPAG3JymzNjveBEhccV5x7F7rYCXPdM5R83YgQ92TSFD5m3iLd3K6",
  "key5": "2GKqpyiJCxe9fPQRb21yXq5CVk13gJVmkA9Wahqs3mxMMgQF1e2fuf9q4BLf1gy7RWdHmkbYz3KFZVCaPNN6Prgk",
  "key6": "4G74qAydEsQmLB7fS5VLyC2Wtx9XAuSZ6SvcJeLR3U3r9HA8oF2rwHmQNF5RtbbGmLuLsThay3hFHRFriArjZHWY",
  "key7": "xtTFgaxCGzsJA5e3ZnMLUauwCqscRd5Lprd5gDDaCrJoW8sKQk4xq3xszBo4TpW6i4tmvzKe6ZgyEHxEjoSGNvU",
  "key8": "4H3RieeHMSGupbCayMV1eP4eAcjrBpBWSE2D85Y88kuuYpPQEnZVzWuUsKtZawWYdWAWC21m7vUSuPymtxzZFHBR",
  "key9": "849wnMxsBmaG26nmjsoBwBfrZbnmse3HJxr3JhZy5RWs9ZPNa4to469VHh4ecoK8dLEKDshCZdujg8Wu2az8Eow",
  "key10": "4Gr89YskGHLQaXN8APucYCDo5FbRTZq1SyqEV4mdgKPpqXTr3dEqbV3rL2qCpUojQSC4jQUH6wmicky81nT9gaXY",
  "key11": "5LXCJeQuFM7FxkvZy6WH5mbxaHf3aLkq8MwvMUC31MyzyaxCsbbK7dEmhfJCtUh7QVzyfBLYc7WskcVNuvpNp7Du",
  "key12": "4XBu9eyBrSNJ3ZMSthBxSas1B6XM5YMQCbQ9n2rntqHGoGcYgtQvjBWzcpsXfzQ2QEYsGikD9zkBf6pYyDFFvTr5",
  "key13": "HpigoecFr9xv55xanUoUqK583E95J98Ms9EC9DZXC64v1nuda6WDKVuVoFoVgesgNrZHG89J6MW5QXKuNPbpVeF",
  "key14": "3qNUfHCVRR1n4GAg9B6WcHjT48rQKxX3wcygKwhMRAGCEa92mqwH5YtjhJPjSGMNcAKvitXJVHnFv4G4PwUu3dHy",
  "key15": "3UzSELaTA5aeW7ocMTE7xxwPkYhV9wzya3fqCV1bwYs2YxsYoerQqcVkZ3QiYdTBEGMeQd3KnfHWvr7ocEtaDLZj",
  "key16": "3Yd9Abk5qeSxYz9nRvd8ezNfuAuvYXZSrcQU1b8Tsc9yvweu5qiKC81DpG1Sga43UjKbE8nFA6DaDzpmA7jtvnui",
  "key17": "jhaefWDzMnc5smrpeL5Vz2wvVB5i16XdnzoP8VTXspXXeLtwgPTUUkhwVptKdsFDomyh8h9kMSU6qGrDUcT4r7B",
  "key18": "3mKirNhqwNzTeM6roweayCqy8C41HkEfQNugWiKPhsptwzjWpY7oMRRRkRUxwYXGPLyDLHvtDp85nHQBERFvywNQ",
  "key19": "218ufCxDXo28aMn3trwXg7JydUtbuTRNBSrR38rnwJeonjWk1M9QQWoMx4wu9V8n6n7HzxLyEzG2nUN5S9hcnyx5",
  "key20": "5geg4Rt6TWnk2ttcAuV3kkGiKsbKm1cdU4TJmHgUUTgbdY261shjZvnLvmJkX4qtMFrmJy8EAdbnL6v85t4V6qHS",
  "key21": "2g1SFxRdBWTURznugBg2CM4KQyuV6Mk8YhDSjhHX5TM4RehhoNQxg4UUVGF9Vp7hagCDbXftAxU35yjusAZc3BFE",
  "key22": "295txn9At2RmGDUEpmEpGm7P2VrE4CyRZHZnScC2XJBt2UtKByevQnUJDtcwwAKzDMG9wXUQhMdHuvrozp2wrkdS",
  "key23": "2yx93dfmNPYrnooP29HHSvUS4CpUA4W21YTng4FNztuijo4QGCsS6RBDVbkLNihDJxT3XnfrGjLpxEMw1ruBE7M8",
  "key24": "2asPN3RNKPF1rwXyPHhSEMd4wgxkcL8F1Smvuv3UUA9i5fmMYMpUS2fVPxGcPqMBaC5eHSCF9rDfCNvndpeNiaU4",
  "key25": "344ddTvpyu3kgKq4y5RyCUYEHnbWMrSXDitiBftXdYhfHCCrYY5ecTc9rWJZ6RgtS8tWTvn9oKeSrnRsHAjmRu1R",
  "key26": "54HXsBHC3fJnNQ8TE5f9HgNxZBSZVUmgsHKzjrR966tDAJFkSQtpyuCRep39kMDrB6YXeN5FuJzXoHBQfEXiEo2w",
  "key27": "2WqigixZwFEfdYvKzDTfUpGmXC2aygfdoMNXCBhRb5RARw69wSjns5BamuYu7exASgmsRKK74Sc5zFXFJBWBbmvo",
  "key28": "3QT6kWzFtZVqfokaCYF12xkewvkv1Wu5eKWLqiN3ToLuuHnRZYAoAEd3YUQYLUKwm5yHjnzJEB2ZzaKhackAceZB",
  "key29": "3AzpmxEJ57pf7wG9ka4i7EZwUsDzBR7a2r588k1vjY8bvSxSzXcmhk1zjHUyGgchgvAJp4mpacKZBmDs3zdMUpf6",
  "key30": "3532WaHDVYWiUhh1wy5pKLppMDb3VoRe6ueXYpUtSSc3mE1ys4ttQ72jCckRwva2k1xPYBMTGMtaTWGSDC1JZY5C",
  "key31": "Jm8LGoPNzqftVwuKGtr3BPaqHDrMWkGDDx79PZMRufufGzMp5aSvTEw7HXeCTfdRYhDwHZJaHFxp9xgZP6v1gGH",
  "key32": "4g5KjD1ij8oTNUdFQxjmev3KNiXnHVAhFZhBLL8U2mDv5qbSTGM1KsHVP1Vgkc1kpPDNe4A3XXXUNsHm1MMRMkTK",
  "key33": "5Zh8HBXmasSK1JiXmMLtaQmibfYxGzXRUxtEZgS57RqyFQ8Ggswjm8khDo8DDAgeSBwdgLd8sEmVRAvNuHanKZ6G",
  "key34": "4PdNYwFR7h8M6W4Gq4ZteYeYwZgjttV9pHa1V2sHBu6K2gHQDtZqYmcJJQDPyMNtjmF5y4sEsirFQ659XifBp3FV",
  "key35": "5yypP2ZrRg9FhxtqZ5A7jTxHjD4CmET4TpXK7MXoAwyQk1aRqDx98Y9RmukzcAPa8Qgpg8enTnfqR4C7xum54g5t",
  "key36": "28i8qDhci6fXFQ7ZjiXKMGLndSePyrEaCs4YPuMfCsHoCd9xug7ZiCCx9Fkp6peiM3eqDkF1tUE7fnr8tnJe3Wjr",
  "key37": "x6tbFJB4dewQXTamEK7cQueHquq4n1y2bevrg6gUYXEsF7kLuVhvC5gLojdYP1HstmKC2wpXihKMxZ6S1sz5zRD",
  "key38": "3GZS7PWsSzPRiAQVrDY4opvDRDnZ86HLhMDeU7AJXghKMCxkEH4esH7NtUfnEErwYhX3NQU2mEzkX8T13P1mW9AC",
  "key39": "53aEz5sBWwKJQ5CYu2N4VkSDcnw54d5YSdWKkGmjk8iH8kMvjz9SsjLzMRUttbfm3hPT9tzZwxgLBXwbmMSstc31"
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
