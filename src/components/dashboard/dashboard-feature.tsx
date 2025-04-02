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
    "5Z6qR9revsHpcNjFtBhnqBPoXeVbwuQJFteXEYT7hzhUhAs7z346p3jfuzyXqmtDHaAf35y5BbgdaUuWUBUCcTUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVWxf3LG5w1FCNDMtcgQomkzPvGzfzisc1nnBSu9yYxZarpbbqMPPWkMk4DYsuk1BgJYN4kb1mEUb5kpystFd22",
  "key1": "2S8YATXAvDCMZ25AF8Bmcv4BeDf2YNFi1yizxeuyiMjmicWoKPVx2bqbr9eaFwijh6vNxQtwXUKqQtYjKwjbh8k5",
  "key2": "4giLSYc34YHPRZyHxAXa6nsqkNQKm2VfXeV2aFZcr1aG5PZ3P33LofzDKS9GLCj2g4FrFYuZuj76SQQ9UJXMLXg1",
  "key3": "2YKfVHC9YszXimboWpn4gu4sY7crLq5fzQzFHVQFnJuHsxsDWHm7qSd5MgqVxQerQrZ9C4L8wCcTgRpLSqsP7UUm",
  "key4": "K5jo154bvGcYaW2RZFcVLFFXZigySNFqJD73A4jLNYCk7ahr1BYADY33RyFJUiSpytgtPttasp3BwsW9AinBHvA",
  "key5": "GsV3NWfJErivTmW4YK4Bxgie2tb4Ah8a43zpYyFAZRvbqhhAiuGtmdrUXXrXanrJjEwGDjPtvHqRLEPYEXEXk6J",
  "key6": "5esfiLvBFN3bGNzNs5chpgKtqar5NFUQxgCWKRU3bvwnaPJSmi1W4FuQjZsHAF4r7prwLRUtyeNMAqUeSKPjf9U9",
  "key7": "3BUEfFKxFvadp7frYwvXLxSDyika6vUkYBCRjc72pkus7SmnabMxvRDoHTEeupyWJ9s52iXvGG3ZpBkRX7xgMJyp",
  "key8": "2fuWnTmhejeXiiamKciX8YKABfCvwnhfZUcLMsWdX48J9Ha7bFv7Vk7fM67GruSQQ4z7L2zYJ8xvDqogGNg3Hdtw",
  "key9": "5xgpXoPE3QwHBCUH4owK6QFrr66B2JahHr6vFYyjxSNR818TTJzkzup8CFTWxoj8dkXEQ3NaMmyA91d1Br2UjYYU",
  "key10": "4b37mFVuATQg68YpxdDSoKe2zQTG4GqL2vCfg3Fm7hjkx5sFRMarnnys4ue5T3yRigFWH4qQeUYEKpB5xYhen2qy",
  "key11": "2ZcMumfnqieArKjskUZ1LNUrQ8kQC7ziZLRqtfMPeUW6a3dg4N97EhT8XiXuMgRxKKvG8E61pJJEA75XWuYMNRa8",
  "key12": "5uVf29RVvQkKfMqTkDiiTN7svjxhfrvRhjq3QNw3nk7k9BXimf2ndP9TAdZahLbBHpJYT3tq1gkB7XtPqcYgZ2W5",
  "key13": "4GS8AK3nhZL7n3UDcQ6kjFjuq7Lx7gJEyVaEZDsngSwfFrLedEPvKP5EHj9nAx2V2sxjjheUFhs4CEwcv9eh7mhn",
  "key14": "5atK7YUw8boybUy2chxy93t69xRJTxCwtbsFisUVmvrbHr5Dd2H5VUhemHboKVCswBxe3PopNCeUGLLXdLwBSj22",
  "key15": "4JgNuNeE8P6ei2PMZXh3DXiq9aSFVtf8Sve66Q1BUkCXtgBh5aNgdzE5SEtbufR7TwCTvakV6K521NGiZFY3jxRq",
  "key16": "3gpS3xFu4kzC1ZqNFEHSK2CybihVvuEfLsw1c8mqoSUBLm7aEdKfYSub8uwnZXj5GKmD9fGTtW8ybcQbS1iaJF8S",
  "key17": "5pEwHVcKJMvctQP9wpfoFKuV5vdotaSTLQST28hhCcTyJLsnKTSU94apd1srUxHfkPyJLr7BUbiituH1bxTY7R6Z",
  "key18": "utfmycx5HUNUyuiTEFuStfYL6W7wWKoy9i8RYPKqdrSCwhz77eeDMEW3N2KUCqEM3nPSio6DfNMMX22AGALMfeh",
  "key19": "291K7QVY5QPeCEVcWDryXXbGTkZ9pStk4xJveBmEiafsLzhoQtLrZFRitg1tq8WosUa5nexbrfEL3JwKY2xZNeGy",
  "key20": "3NP1WPKpUM3T13XceNBUcyCVwawGY85ZpSmAkfBeknhNZHNEjQxcRaZXxw5zCrgtoV8F81HnqpGujdkhNLw2fy4q",
  "key21": "hxjaXF22c7QQiMdW6zY2bpLcaa59tfoJagwbuK5efYQg5DCzxKhocnbFSJLGs3D5v87aYQDm3Uu5RuijXSUhJcG",
  "key22": "5heL4amp3xFs8gzgYJosWTgYmCLXZYnkEof7CkAg6aQpx5dMU8BRkKmctjtWAwNtXi5q1FsnsGHw27Y1aaEmaCH4",
  "key23": "2pEwc3x4zmLykDoWjqyQg5o6G1ofyxcVncD71JFc6Bu8NGoD1oT432fuccwVENjBcL4hygcpE6FLJxaXdt87J42n",
  "key24": "2aq74eRcELtUo2GQ3jU6C424tURqUrXiUeNJxXSgh69R562Jn4AjK8v9kjPK2aTNBKesHopZGiCDnhxYbMGnfAWT",
  "key25": "4ct7yRzivVz91EL8CbEgTS86TuyS7VE7pgL1713HTihAU3UaSYTxcSWu1H39fN1YJsumUSdeTXesVHSn1D2cNQHy",
  "key26": "2TuEyFBrLZDnt5rm9f1DV1CMSLiX9CmEwSn7nNzk3MHcqPdg6m4BaMwwgmN8mwQnafCmmLxygN2tLu2UQNYdgtgC",
  "key27": "2bv7ceUA9qRv28yzz3UTDAdFqGcGpSk2mtsTdCVfMo3iFfzzMhKu21mgzJxgKP2yBbWKcL9Y7PmsvEwZhXnZRVxm",
  "key28": "5fE2RV5ZgUcoMViNDvgpZq6RA3Y68neBKhEtp4usP6b5gfVPatpefw8DjveAReGRBtaCgbirfVi4c1Kep4K9CAiB",
  "key29": "4UcdtgFheiagAqXCTX8DFDxbRAawFJqqpdVEnazwSA2ukwUds1vtD1ceNBQtvG9QTVfTLhgq7dZqt299nVSovLNv",
  "key30": "4qBKScz1riA4koufVJzf6BW3gYHcf6dMKEcjyYvPe4JVukACE9VxjZjChAvpTTDZR2KaercxQmPK3VTTKZ5cepdA",
  "key31": "3fxeMX9Vts6Gdz2CjUHWFWJEMsY5rXe6iddL3L5jmXHpoeGDYmrfAEfVDWXeCSqjjU1aqWt8twQJfuCCSqCXzYa7",
  "key32": "616Ns3V7W4zywR7HAKP4HYxRSvqc5bCoZjWdwKYTe6tpqU5bcHNBrHxDsy3p2KcrUbaUgzp9t6t1sTZpmGPCxFiJ",
  "key33": "2nR5maA1JZup5ZVRrqyqhjARGuRDVLqvzgdRDUp3yb99SgaNRAatVTZRJsci6HuAKa949vpLdQixKYt9tZnLWk6u",
  "key34": "56DjPmnqExouPhrCo4KtDdAXNfB9qNK5W6xKsgrhFwV1An75iDeryGrbjkFXeoLAgovoYiX6orzV7M7rrooMrM6n",
  "key35": "3Etz12AhjKy7s19sgqGTidfMykWuK9QkuLYKJVeURVNTg24PYfmJCc6GdHHUhLVTVBNt9rhj4JeKjpLuktYPFEMs",
  "key36": "497rkuFb7zpfC4451bq1k94Triny2eZsqgod3NSNvFseSoTQCq7m55AuPJj3WnkYA8vGHCTKW7M611wPCLzzAoy4"
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
