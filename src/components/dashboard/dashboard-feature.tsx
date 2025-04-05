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
    "5Jx6cH9reN6V4pVhcMjwJ4AMNZMhY8PhKQFsXbYz96kQxKJCtES6tuLtH1uTp8AozjZBWtRaDptEMPdGQCxAximr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oREQruRSBki3ZBSiSPK15rNVxDu4tCjdMpXRkpDecoEtcMNjVuDMaL3yCjJEjxWK9Yjpj4NgfTyY2w5JMXoZk9V",
  "key1": "5n6rvQEwZwTcvHhytbBv6Q2sjFDzYsH2nUyV1QH1e8jU7RUUVaDn3Wc2joYwzABwtbdvi1BautLFihgiKL9MQXnd",
  "key2": "4eg5jSoKq1HmLb9mEZ9wy1pMADB2dTjgeGkyS2WdymNboneG5kbtDGkCi4BecQQp2QCShDygEyYzpxUuYjBv3HdT",
  "key3": "SJqKYtB4F2RwVXG4rAZSx4JTYDyTVyJBPiJnmEGeXyEjkid58prKgibjdYk7y4gYCs9Wdgpz1zL5Wo2V5o1S8n9",
  "key4": "52ZkRvpJw3Crn5vRanSz5RkLEBi9DanVEhLZhnbDursuGEkuTGs6iY9XRXVpQLrZqBGFppHFsg5edc368dfG93Gm",
  "key5": "4nAn1zHAeeW1Unz1NkfgNeSSogPzvXbQFTwB3DcM9ZENfKicP6YQfa6QTbtXgnqa1T5RLrRfFCLNwYEYyAArGpGD",
  "key6": "3AN4ybPrjnFtQVzpKib6dB3dbwrxkbopASYzKviHKVdad7G2UP7QLtNTqnQk2SvHPvBawQaMwHepdk9jb31j8saa",
  "key7": "5aPio8Z5eTuckPgzFJjck8LiHQCdy7Bef8hUhDm62B1KXTMR9L5KEDWewAk627XtDZqUJedNpEqMHLdw9FzGSMm3",
  "key8": "3o8eLzY4JQ7eNvTSdD8fAYhQ7qWBWs2zkNJvvhPQhqTw9BjoJWn1LnVF74bB6KpU1t49Sc1GXxi9YqqKaNDsW51k",
  "key9": "4ieFKb8Syez29pbnCyi5tABNiydyU1sGcvH6ELgPFA2pYBrJvDAxxhvn3DX4xLEVfuqNXB7nkmMUWmRrvesPpxHv",
  "key10": "4YKKwfkDL9viEjAJZnApiBt9T2jWryfFAyibA3wJmZR7G4kMKcPBF5NGRN439GRkY5ZjQ2LKGHKuDzt4Mn7h5hZN",
  "key11": "5umesQ4pE4YQTQGUrvbJHJBpzCKhu4utiSNiQtrMMViAJpv3Je6odL9Ee7t1AGeb5jwAH9Pv5F1rrGovNUTHhauo",
  "key12": "3BdZ99pKtLk6rS45XGuSSi9896xtx952vSSWYi1cNmd3Vt9rrF7DsTPDkNVhjy6qn6kkfBoJJeLXhhGdtr52JMuL",
  "key13": "4DMDtD96HBFUtWuyQtAqkNd1VzCbVAcq7VYmiGmtPEXCEbu8vnr61HJ6UUpEhQqMYv3auzMCKRBqNaKUjGF7GYSm",
  "key14": "47WvecfYBRU5Ktg6dNmgHsqFbRs3hqcVoRwPprZ8TGrDdarXVDcVAx4giZQfKda9yoi3n8ZrPHSyodsuWK2DArrL",
  "key15": "3CUvDFoQfaSXEdqri2FUpEeVwamFDSQa9v1uqoemKrXp4eQoPrfkSmwPzJbtvAQLyXrfRCshJM5YhCq9JWF4fxwu",
  "key16": "3bLL2VE7ejGbQg1aQjEoSDTz6AZi2kmu3BbmMHRAQMzbkJbC9bzSDjEA2Srhseqs1qgUgJeWdmBH7WZKhFvy6pjv",
  "key17": "57ukiGoXAmuWcySgE3MtVHCFVx1ZFeeNWLEsvZKYT77a5JVqdYqV8nR7TLU3vAZyUSMQanNmqADghHUQMYf51qyN",
  "key18": "U4UwrpsVBY46Lu3JbUUJx8c6Gn6M9uqQWSUKwt1GgM2P4MjgqybCoy8Yj3ZXwg2yqWHT2BPHbrU7SxQppk9PZZ3",
  "key19": "2tQqygyxbwhaYniE8xHfrhbiQD955ixgi2nDoMBCCNq4kVuFT7hAWRqJEGpwxKAQhyWVW7FJ5Y5GYsTmd5C42gs9",
  "key20": "4Hwy7fTqXEzRJNh6xjwrVZi732cp6KHNsmLep32P7Tfe9n2wwHhVQGGS4ADrYjAsRHjfd4SBGTXp7jPa95Tjahfy",
  "key21": "4nXzMVY4JEfQJXXqwMekhVcS3HVFbrfzbLb8rVhzd6z3jiSmBQsiATL3qfJbx2Avj6EZdPSKsgvrBnGx4F8YPKUu",
  "key22": "3xv6F7YtFGBPQUH5mb7sqYGniW3N32MP86bU21BEg2JFziDGRxWq4MefnfHbEun8yuTaGnCnrqyo29i397qspQ4",
  "key23": "2wH3fVWY82hHf9Kodz5oW46B5YDyMHDsKzpY65c1W8oM9KDsQ99ANBRF17sVfapW7hFzv9Sf1v7H2ES8J9KuJknn",
  "key24": "z9eFU7yFyHBZvgdkfqPfWnGHBkAtytC1SALKvDG75PfUTDCLfWhNnDkvMFpeDBNiT5YWhnL4tbNgfLADzinczbm",
  "key25": "MGxCp2fNkNKoqZWnaTZmNv87HN3D7vVm96XexjcWD7bqNDbbLLNPr1bmUiYcyWpmVxGvDUgTf4v3Dr3QXmytjED",
  "key26": "45ANRUvC5v5Vcz6EKUVcZe9XHSFcvvG8bkyg2Vuwq5GUyswFWewQVp35mAi1hbA355yLqvmLNRLLdxgTGj8ZCpes",
  "key27": "4UasWxAYoPLEGDm8f7Yg6Nhysbqv6eB4mQsxBaXcBetcRVZyNex18Mm3JQ6RwHf3mD1R8aN61xaxtCsByjB7t51v",
  "key28": "2QVH6P98pAfVxjkyebad5gbwgJZQhnuLogJdhhub3BevUWwP5vrU7HhPKf7NRzt1VeWxoZFepF4zse8V7jzXWEAN",
  "key29": "27nmeSHvg373vYuYnJcCjAucPuaHV6Koj98eGuNBXgYoGZwde7yPMnDFWSYwpDKEV9wR4WVdB3FiUX48qkUxYQkD",
  "key30": "Ljywcg6fQWo4gAEw4agfGWpE5EK6yszPS4tuwJdmDGV8sHuPNHLL4rGjPuKBe9UgjLqLTCR7XuaqXG1ixYSXu8j",
  "key31": "3yFPWMBF6N3WnGQsX9Q1GvZSRgkqko4oBHRUqt9t56m8N7mPijDD31ueNWR8gH8APwmD2vnR2dvyb7xCDysormZh",
  "key32": "4f93j3jMRrArt2X9eG71vaWWF8g3wNfhKnAMHVurHpx9J5tjSiYrXUJXQGJBd8EjrPYgEVqdDf5ut8ctwmU1dDyY",
  "key33": "4RmrPhrnJ7MCS3GEKdpVpFKn5kgiwyMpeswrqS3GGUKTE6ZbVS91Mv3R5vExsvvFg7hJAZdSbzfzgQug1LUR9EGr",
  "key34": "5VGZnnRqkDSLxGqFX1E43sVX5eCoHa8eXf9iW5Ryg2s22exxEtywWJTEEQPPiZ3BDgyjNTQ2SkCv8wMksNxBw96s",
  "key35": "5nizmRANcVxXcCmR9kQj658A8aUhHBawGy4AajUmP8p8gxH6MPDWwSxDHffZEgZXCyzrJihSH2AH3BsZxqpNet82",
  "key36": "wvNmmCGYUmCsrCF489DE2RHAec7TWRaRSQUaLPD6NuBNfw3qAa4LeaGC6DJJ8v1wzy7UDp7B9rhtHDFWANLjsjK",
  "key37": "2or5h4bxUW2FGB5zJm3K8mg2zAafWkiAmQqySYcNJP2v9NRVUTWkHZTrSVozNXDUBPujx1HtFvQ5Lin3rPJvmdKF",
  "key38": "3DKNm4BcmRGqVgAfQaz1BjXusytusgNVV9qcTxV1Qr6kmZY3Zhpa8Kud6Ud38wJr2Bx7mFpBL3Y58UnLeZVUNKed",
  "key39": "5MkugToCaFSg8W8nFwHrqV5t8N6idYzWoBFjhxUuLwQ5aVGwLzShLEYygvVTRj5X5MWGdDRosomdpZyQDBdyGZ5W",
  "key40": "5trUxMgJiW55LytWeAwo5fMJCkn5qqUmEL3SkN2MJ4z8SEx8DSQ17wb8ALFb9Ge3GFu8Bg1oEahZCupRhMsWqpES",
  "key41": "36wBN6iYcoBUxZDkehe8KtoHsjmUo8XtctuN3h5q44HecCekvYUke854mZApFoew8rb7ZWTsJgSZ7V3jYwycJurH",
  "key42": "ULcpzhN3EjJGtHawunjp4z8nQd5dPgtz5fHtaFQ19DM8WZtGwobVQt4NNjo3NsCtVqf7SJsNoqiHiCi8R4YzFys",
  "key43": "4YDMN1JfemxBJZs4KNPJAxiZRTAo96YtHXfsnDN2aZSFLoKnBpokDNHXYgRY8XipbyaAG2WPxVHw3zgyaAjhTTMC",
  "key44": "4xmssNuWEeh6YNLYLz84Bc79U9UZ7QB7h5c24wfVtPC5fUQNrTpvzewhpzYntB9jjxBCZDsZMqNpn9oiGBpp825i",
  "key45": "2cGhVH4EkZKYx9gPiMFCXMGobnVBUQMgrTZydo51PvfbyUrUxZ6RroaPZw8zBu1kAp2JJdSzddDDdhMsdNHakV73"
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
