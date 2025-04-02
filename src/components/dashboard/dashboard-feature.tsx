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
    "55L59WFovWSHLSRarmVp4pEqqtCTU1X8f5g7K2r5TmW2wx2S3cWsqSM2n2ktLDiufzHHBwwF2TKjefYsXPa6bEjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2Hs5tcKvB56MC8QpgGebFeoEHWbuVtPH7QtRxvfzqe5vVFCpz5fmMPXXRAqt2tTKmKDXrPjivqWJJkKbRRSTY1",
  "key1": "41g8JFsQraSpaBQbm4GnwQJ288MRJ3aqzkdbCfpMfXNS484EPVqifKS4aZdSL9pvBRyrKFm6x9hTJFL1WrREkx9M",
  "key2": "4NxJQmQ6TvRGLoi32STbz1AP9gv16ueSVEKVqnvhkyk1NbERRMq4i1QFtS3iDzBhfS4o8AP8nRLVPV9gz1dN8ULg",
  "key3": "mCrfLbRRW9icANzv7xbR4VtCtPR8myX9VSTPvC1HcqZPoGsxab5fQrjkz93386aK94Q4X2cJJY1GKWPcW6eJtxF",
  "key4": "5x1kMtnY1278y6Gbk4TjJRruNUtKbLEt9WVb1uckbgX6r756L6Wc1itovYAGG8TeLX4HBA5m8GdXQ5nMM7Vw9bNA",
  "key5": "4NELZCKrGJUNEWvQuPxmXNdgsZwN954Lby1Tmznb1KDhnDnDoknBW3B2WZQE39FvuU1oe8RxQVJBiWBWaKEcxdRY",
  "key6": "22oCTEaBzas67v2rPYdkPqsxZkyaPGyRW7fwQHkN6X67H8cxGAft7R6USrvQaseftbyR9LR3TPMQDyscuoy9puW9",
  "key7": "5oKQstEhh9NA2eAapSyTVKADAhQjvmK9DxhgqUfsAk4n3Lgb6DwHbLj9b3K1NXhMjo8qrMAGENq3CN5Ku95dDdKr",
  "key8": "2ppVsFnGyBSEHS6EUM2WhJ64mtC89MSXp5iuM6XW4gnH1Rdi2j1C98mV3dRCqwANFSeEnbeDBs1JNERvuNa55CLs",
  "key9": "5ZeTJ7UQ7grBtrRdnASYUNxaqLuD5jZu1JE9mjGRe1CwmVvxX3f4PrxpKGTTVzyU2uUyZWLBj6exyHZcBXHXsd6",
  "key10": "4HebEaDtkAtzrkixdfxHpF7GZcKV74f7Y7CfqDegYYSuPMQsJqHo4jLnaAF1sYcQTZKnh8RaeYF9ELqiQs39AXcq",
  "key11": "2UGjokCMJ8ryySzFG2pSiJBspYEEgUqbUF8fA74RcSPG3kChd5fHUL5bwRZpL3sLrqowKZkv1RBbPrMxyU7YHE7D",
  "key12": "3suT19xwRHGmRy7gkMzaQdooWjzVzyh9qrrFAz7GyNKhFAYznzi3uVYzrwwyTYeWTpNgAmGYTbbX7Tvs5J5LqV2v",
  "key13": "5YSdKjsKAi2o4UCV5y2v7yuLBgqFheprcAXThDGYBvCuFkJXhwVuFTfxSypzfsPCX7cfqr2B46vjFdcqf754vgJC",
  "key14": "3aVXYmMZKortv3Vj19FHTo1RFtsMVYCs6sCVQLQpNvZHDhj3xpsgN4rAyJjWEgWKtTpTqqc6c3Bz9qaoQhCBPL1D",
  "key15": "bWyPzsbNCS89vU8RJNogL5DaR2QH8gCF2jrgwNzWHTid3Pow6nf84bfRcmA2AmaWW51j6njy59UA93LdjRTTTQb",
  "key16": "2wiJGLjjbtHvBoUkszes4hf1pF18EgDnzFqkA95Cj5dCd6h7RAyvHLUZsLJUAju1eyfWjayQ1qssdPe5Df2tdSRn",
  "key17": "4mSggq8ktj18BrtuKT5ZCr5pgsPGTqCArDfRx9ePrLWXSA4qVpaRWheGtWyULDWcnMn1anckc5groDBajh4fQLWM",
  "key18": "2DKJ7uTAtuCCz9sQT28Dx7WRj2FBiKobnDJGwwSnTzWXVf7xG2kKT43QjMgFKJqJpaQwtbyP94226p8hvj1RivYb",
  "key19": "4wPHMoCMWxh1uTkM4yjiCBW88TbMZkpWhphTpsrSmA6Pp8JtLYduHYsDNvPbzmF11A7YgqSi4RzejcP9TCTirwWy",
  "key20": "585WKikgjDmc7TFdJ3ieokBBkQ6ra1hEwEFu2FMPmfNwUp3E7wMaWuL2H9g7Www7kzdDXF6RhmWxtY2VyorN3zS3",
  "key21": "3Cyne5wtWQc51gg852aQf4KcJGNRtcN3JqTYJfaNzxD7eUWAwPoSds3yCeXHeopKE2MzPu131oAmv8ayfQVRB9GG",
  "key22": "2kqWd7AGxrUTKaWajJEVnzXjWCcSD2sFaLzicLQqFmHDVm4t6t5ft9pPcViMgmvPoaobrJC5F7iUFopsU46kQekx",
  "key23": "3WeHKMsxxfJWT7TutrdkhCtd8BnLvDYV8NDkbst1CbxRzAjeLhxxzx8USmRkkQv4bB34NeSXtrKh5YhT9UHSxSub",
  "key24": "25R253tMptmm9xDuexR9oC6CmgVx9f6QACu6GvtdiGwwUMcjSxiEuULiZtUbGE11amaYegMzxJbbvabtFh1sxvAW",
  "key25": "3HA2LXFqQ2xnamibPLdGcYKStbYvNAJNKjXe3MWpGKwkYjp3fro3Eibgxi9F6Q6oaw2pG6VZCUCij1G2t8dkSZ1s",
  "key26": "34ErthF9h54zXtL25ojYNKHpK8Sh5awxEirDBc9ezBQEL5MMmA69vmgr2K9dmX3jGuzMVeyLzjpSt2QJzpT6t4PM",
  "key27": "3AsZa5WxD95N4aRkj7X3qFg9jH4B8oLAGa8CPSCvTWt7cGo698Wkk9TdBbSmwgJ62WMkRcMdMsQh1Y1KFvEQGZ5x",
  "key28": "4ePqHN3m6dtwV5gEuCpALXk8Xkfw6DRuSoXkK2D6xo5g9iK794sGJCR7mwVpTq29jmiUzEDP1qGKrMz1oC1DZ8L2",
  "key29": "QMu7gARihXnFnkQw5BkLBjuZ6DgFHrukpUzcUhYutSWtRNtfdYsNdq2yxbdJZKPQMsLHFhoYCsWrTXQTntMecE8",
  "key30": "3R3FSr5atoEbM7YmwuSYh22ja6MgiLwNjpuJ9TbbCwYpYNSMj7xNBSe8p1VfALW66aoRAifrHxw8i8o9pNvA3stk",
  "key31": "4338cNgzm2ZYUNELFkfjLSCCkTWVc6MicDrin2rdtsM1WKxULcmNXVVmwqqqRLNyGRgtf5V3o9cMaLbz43rrpvsH",
  "key32": "2G7PKPsd8PCoE2jmjyq3eQCT1mmFhGRWsdT6UySBUd1JNFcY9zpQs8ccBVp4ZnVxJm8LqCyVxksNefNRqDG9zjCN",
  "key33": "5m4XhrBhxzHmPq2ndJuoojs3rAR8XeAeL4yyLWVLF253fmjoPRAYT7y8RURM7cHQ3fEt3ykYMQ3JaUH1BVX1PBa3",
  "key34": "27ikpWFDfUQSdte9vZ5rAspzT6jeEGWxVQwae3rYSRMqKBjjkEPidcJFxw7eVAVhb3LUoLrcWFMiQETsp2E2JABL",
  "key35": "2ht4UyDQQ4r1eQbUYWJ9qEaWqRfGAW5RRNrQFLZ9rjPzqReuXrQGTRUnzSsMLw4BT1r9mHCNaVwhvbgjWreuy8RH"
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
