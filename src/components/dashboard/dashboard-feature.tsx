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
    "2vEW4tsPMK4MrprJ6YrUvjqKXRSx2KjKiWUr5B9eMVunKzhRM51h815KKsVjzQqgKk4ozBRFz22rFx6fNMgBQjkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQTxzJKBpYyS7eZQ5wc7M3T83rpLLvNgKombgSaDhApTbZfDwSCRTNEGRWVjgVdaveGQfmXdycUNVNKtDjV5psP",
  "key1": "FtdBjvy6CE1ca8rhoHUcu9NTTxFRnCYDCzQWq6vS6uxEwyhBqzLiyEuw1239eeWC8vb89EskBrRMeLxrGqPGzKw",
  "key2": "QPJRTXmzSju9Z7yW537UC5RoFMRwSZZsbpQwdcNyvWi4tR4XxUoP9xzviHgQ2Ur7rVctL5hNLriZc49SrJDLXdS",
  "key3": "5on2Z7GY9wGLBx557hHjAaMP9AhQvGfdfr196CcDtayoCauLTfufXV9Ud4XdwNYo2onoqUvp9nGtLrPJ55yRWdKL",
  "key4": "wKCNKATLCEgjStdRzgQdL5HHDWU2Z2EMoChRALiYU2pCur9wDdeRidvJEnwLQ1NUt4KoQ5eQEkG5MhdgtyhZHWT",
  "key5": "53Hc94FW2Lj8d3gKD59CpRVHGP8ZWw5jFCcmDY8rwDLAvoakSMNK8HVKQzQJ9TEVir26ExrVzXgDRDhsz1ktpuXM",
  "key6": "2Bg34LqoLvDekfkidhvmoTZhwhdq52DfRucyvYFAPURj9K63qPzWmnH9721WdH9JznrBR5dGod6TF5TPAuMdZdFL",
  "key7": "5oTWf3CyevydzhsAjdAb9Lc8AAtvSoKEqfzSNy66NGSjRJJx8ybrB7YE1fJbjsBHJcEP3kitxefAwabwzsRvMYjt",
  "key8": "3DsBicoKzuV7LoLQ3RqezepQ1RKRdXoArnpqQFUYQVNjqZ18ad9Lymm6mBNUiC8EN4MFaxKTwXRbYHuNFMzzsnnp",
  "key9": "5M4sdkZYaxkWcLHbrEq85y8WXxtnENR26szHZq4dYWqUVYNmZNv3G5SJuz9yMNxv9TG2SSY8t6jRt97uA9axsYJt",
  "key10": "5ijgU7JQaUCfZtz8mXXQH2qBUfkXSo1DY1Ut9Jz6rNN1R92aEzSuZMg412HV8aVixsi6nYwS4sGC3hMaccwqjejh",
  "key11": "ft3DGqLcRTE4jov5APPJvKFwS6BF5NujRKf6H6Z6AUV9ZdPaXpQ2XCJg4wQAq8sugoiHjfEogPHneZvYAZJDy6n",
  "key12": "XyrfPd4ieY2HshjJDzB5NDMNd6FbJuRfpXE1Zt4hcvWMXXZT8LBDcYz3yygTSujDb95SBmK3GzNuugJjPRgGNmX",
  "key13": "2Dg57xCh5CaphWku7DBjzgfT34peGCz1y1fnB4GjJiGs74tGEL5g3C3Lb5XJgQnoM8Hfq2wNzMzQd8A7h3cMvXXh",
  "key14": "jVfF1aDom5f2W9hYNAetQSAUxWkCq22iq4EsVfayjHVfCtcBMg3Hx6sbmmdWspqcjEL2pmGzmTbni7RrV4WnKGj",
  "key15": "4fxhACozjvw6jpDpxqmzSCd5ptvLPjEKQuCrWZkcwHAKooZfaAaPorW6mjT4UrahXwbJLTNzmihPXhamgnzdHCC9",
  "key16": "2SZtowiCYn2DZ6cmwK7amf4NcSC2p7NNfVuhf6aeYa3TMiQqr1ob8KDVe3cXQKRfPfDE5WBzexAtHFHw1FKNznWf",
  "key17": "4wDRgASQBpGewCe8ZAS4vis2aNJaoBzLGT9X6uEhywYGtxeboBYmUcd9huRi6vUt1pH8zy9j3gKjgxJzuFw1NC2P",
  "key18": "2uoeSeDiRvDzSqu5SUp1rxJZ3idFrajrELpfkxT7Hw1TBjLY5mcezFVJyBqL5GYod3ruiJ4SvhrSz9eWnfJReDyk",
  "key19": "2xbrhPZWkFNa6Dw4ewNHBdWMsWX7NPuRu5wYZTo1HctzmqkMUCefqKjve6sqBxaobhm1ZYQQ6jczni13AJd1xcL5",
  "key20": "5zNuqHHxyJjEW9TAgjQzx5vr6hbqSLgokH1WWPHJpLJED7snhoNwaKUKeTsie18UmhKKJgiqdZethW6RBcr9AUit",
  "key21": "3ZZDaezBswv2zDRaCUNWHy3txpEkDRhJECjvD3eCGHWJFfDom4Pkvv7hsd4fbrz7D6QgyaWZ3rq2UkRPYFdPCuUE",
  "key22": "28mgdVHdXpeYRK7HXxZm7k1JucwodZk44CZnsQ1s2rWLy2VXcdwt4qcLkXQYfWmMn7nz1beCL9cEoMUisiFWMBU6",
  "key23": "XXvx8aAi5mZhqGvsZUb93RkFH8TYYyEKNEThEzrr8Emd6Gm7nCPBhkwTGntY6tuwUHMys6vNgLCcmgLo1SgU5cj",
  "key24": "3QvUhNGPaC234dxxfH8m1hR4gdRoqYE84f1AoDR91TXWKNjtLK1bdfmjRJ8RNUaL6G2B8xLGPr8nmSMkRNKxyPFJ",
  "key25": "Ti416WR8DYtx8qFsWZcYDRQopaiABmjYSsNDik2AvFBvzsDttf3tbQsbMBBsFqYqnBdvUUY3W4DtnXrdNtNJ6z3",
  "key26": "5NdvgrLHxUqkF7qjP4mLePZrCqF8sW6izeBAdu1cL6JicNNHgMycrcwcEGaAMfaJoHBibEBdyqcCJKHnd7PcHTAD",
  "key27": "4uSoesHfu9yAWrC9r5MMxzpE285owtutoFdMg34DCnsTQrhZ4wbqcJoArPmMKjCYaHh4mTBVyfAAVj4yUzfQBtco",
  "key28": "2GUY8dMuzbbpQRbRjfYZUeaMbHkFcvwCLosn8doWrgJ3KQooDUvMsTSXw14J7Ms8giGLjh1ipyRtxUePMisPwXZ4",
  "key29": "52GCsQZ7i3VeC8grRTN2nv5gTskYAgX6Ekmig7QFFZcRhRKd7yF6zupp4y7dy3o1fESLS9LwocdPeFQD7yn9YXwo",
  "key30": "ydWdb6YgMwYkmGJESSCG7ZEpneWnZRKsWQk2vQL5B1P4dFkTZoKZp2dPZNPoJx1VPNoBXGBUpK7CmbXV5zrrfaG",
  "key31": "4CKhpS7ZSyuxQzJbbtqf8LG3STcm91B4C8RGKXkeZxq9Gjimbs3awhgjQgVqX94jBKmAtMLPjph9ZQDNSavFeKAe",
  "key32": "3erSYB3MCf7aGnycBFPXegKV29Yjmn2w2MDucPxMxx96j5Tf61PkizUGTsHukGmMJDmbqT5fXWbwgSmUYpY862F1",
  "key33": "5ce8hKgdAwtu6P4RWSgEqCGLoAdXzs9RphGtGW2XgPybEWdFBVHp6JomDZJfVNWfv8hpywSwWoz94zf4FbQoF5oA",
  "key34": "jnUrJa37ZvT3NRfhya3nwfqzz1o9h2zr5mBW3vo6XojJ1Pbatf3h9XqyEPHSyfEsuyRECkLFdoF4osCLZqYeXw7",
  "key35": "3wd6pBBvNmY8GSBaTG1KanHSMji2iWyhNgxPKAyZrp7UgyfboSM9pnJbkm8k4unCTvuGZgMgLEJbNWUimUGawgdm",
  "key36": "5h48oQG7aU1HZRnA5soTX8o5vFbL8uyqEgvrfe8wV73qT47bATcSBP9UMN49w7q2qRNDkDMnZJC4qpvXYkPNcxgd",
  "key37": "3oSdNrY6uEiD3xUvQ17b39a9r6fmx88XNi7mTiuaiiS4inXuDG5W5kTkATQaA1nryDNSNjWRfc27nFPTf4Kpquwr",
  "key38": "Qe78tb44yfXbVWnqMiv3XyFNSWmqemz7oDCFummg3sJPtW7p98UdEzYfyoSw79LuqMoL5f2GEiC7FoZRk2HTcWP",
  "key39": "5AMd8199M59XcxBgEnaum3CDzaoEngLZTZR3d1gkAAKVtk3DHKydWV7yt8ZuwzP4eMoNWuQzsZuGjr35UWYewZNP",
  "key40": "55yrLbQF9x4gLYnz3sFpfUAW5LEuLy3Y2faFL5GFHAi5ir9h46j84NwpxLcV8716WVE4i42tbkmTiYA78s3kczoR",
  "key41": "32tr8hGBnLYD5vGdzFNVaXUWv241GQJ1hw8CLtjcd4kbBd1v4xtjV3Q2hfJeexGF5FUym3UeXHdmWoeoWKadAtgQ"
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
