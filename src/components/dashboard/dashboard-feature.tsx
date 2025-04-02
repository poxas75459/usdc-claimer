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
    "L5TPh6CHTLVoRu5ZesnJYYPCm19zUgN38RDHBXC4R82ALsDk9A4iSEkLs2d2QpFu7TPVhRyvtKB7srAKVtshUHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29mHUNDUvpdbmtijRowiXx7f9sMdTyxzChKd8AM6i7i2pRwhcgvByYGwACZKARGj2MabLc4YKE2befUPurSTfuGC",
  "key1": "3SKua2zSa9dNgVasctZ8qiwXaxXPRys3s2cN9nqNSsiWZNA2Vn5F7ByNEDQzaJQik7tSn1MN8iLvNWXNguUX5oWE",
  "key2": "tiH4cPdJmegvd8WTsaop6c1uqkgfcSNqrV1Tt8iyVGa5fn4f2qjPvbDLSC5Aak8usGEupwqZaCypunxmLxtjv23",
  "key3": "4kBbY5w5yTrDB1iPPMinKWszwfs1ZsmUnMZ9TwUpZhoURKguTd6EpTYLkxMgnZk5D5e2v7uhdiHoDPftDXVAwWA2",
  "key4": "4XuN82ttzNEtC3fbQLWeD9PJM3wPiHDoZ6wDmtv13sv6PxatqJo3sZpZk4myHmTuSTRnSGD5RRMYQDkBzm5oHij2",
  "key5": "55obMNtM2oYKq9wG6FRsq3tp4k6QTEPw3a7XwVKkBwwhw2SoBpyPK1RxTa3QkRrDJVE9MKGeyvqqNvZwzsAwyLVz",
  "key6": "4c1RAkLhgkf1UXgRBz5ZGpa5moBywCkvusX4pTtC8x9As9iVp2kztcuSEtf3X6iLEdaETh9vV7DB3RyoVxR3ezXp",
  "key7": "4TQUJyBsDJnrRmPtfDym1d8XcfczkyrZ3HinLjt73FQ59Vb5aro2yDTBERJCR1Yk2Vk12mTdvMcwRxkDXVBGS8c8",
  "key8": "49bxJ5LhAwUKWVcc4x7Vi5zzAWhcdBjBu77QTfAEPvEzocc3wVVXMFPcjmY9pY3vKZJhHC4PqtgZt9SgbdJSy9he",
  "key9": "ib3YQGYhmQ9EcPpsw1ze4yQSAQfuxeE9R6uxYmhv5P4B19ZZF92myWW2PCp6CYdWC7YuhpVkNJwHd3DuXWyGAGc",
  "key10": "8sQe9GeR8wPvF2BNm4m2AGi1FGBrJnnyeQNxbfxeLE7KLYJxVjNgY2GhxuCTfvNfCvXytkXRX11v6uTovy9FZfs",
  "key11": "2sXwpctGT2afvqXoX7MCe1JGysL95vYJKEV5SoCmhprg8GMk3VWVgua2YTS8nsascNjWQXUk1rxJ2hUNfbHTcQjn",
  "key12": "3T6c6aDDK5gLvboBZcrXvS36LcuzDjkfkE1HQLDzNWvjPJbmh3N975ymrvAASV8eoQ8eEKoMm6YRLCBp7ZDUYnoX",
  "key13": "25diJGdN88ENpjdxu9aYPMjtyym3phBUweiRe63k9ranuXU5EdccwooWovEDcf8SQ21zPPPwUdgYQbyifRtYDneo",
  "key14": "4Lb4bEZRYkeNn8UApF7fk1N5kXE5cqCNPcxJ1v96j9G6mmgSwDPjWd5KXAEVEgAfWJ5dijN4NrTBsddwU2oD69qK",
  "key15": "5xGX64PieuXb1b9fwrvgQbkn6neA2ZPArKUrzEJkpkof8bHwdq5DgfemMjUUUaZ2zvCramfhV6pH9zAFYoCYEG5p",
  "key16": "4tGkPDFznPbS79c3HLnXsPychwMxcWEj6nMnE7gYpTJ43xnfMHWaFJGzEkkir5myrLxi1qi7LC7ahdY5qMgLBcJn",
  "key17": "532bAXPTW9imdG1Vtk7ywJZkrP6QpGiNEEvaMi4UWkBRv4ZbGKArpAGxW21Y4hfViHeewL5QZZnxviJpCz5tZL7y",
  "key18": "5DFMQWKYwfaDjtMTDjUfpYb2PeXPQPkHBvraCguAiF6nKjCD6fdavgDwqG2YZHThjacxzxFfWdMu8asNVxxQ5MxD",
  "key19": "5zC3jx4kpFndgKGkrfLMnjanV7qXZmVcF2ofaGigwVpSb9crmdDu55K49ZpincxTWgQzS9tsGaRQoUwbmrqpgy8V",
  "key20": "3KyPENcvHxknG1iHmG7FS1QBVKLB5aLongR5aoFuUNmpi4AQrLePFHvj1VMz8eNaGBLhZHPcms9DPVxtJC11FTZs",
  "key21": "4v7eSfByXygkBAyVq9nEEG9zrWWMzkFdncCWZPS4jRJyXXf8VxiYydgeULWXpd62rQzBJStWz6YHhRM8pEMVsunD",
  "key22": "5rrwpa2z4KqNdXmpesYbhH8wscqR6WS3PthzepFcX3Dj4Ha6Gp5o7E1u5aEGNxFCtj1U8WaiPwqywvzbCDyb6QgV",
  "key23": "4u22iRcG7ns14bpfnu9JVrPG2J51n6ShGSgyQQ7ZcDN3gLi2ZHHWF8FJ1cacsvXfaqKuqn7esFbTCbLtjoJ8c19U",
  "key24": "3PoxgNVYYVd2VEF2DM9C9FtVz13id3osUwbxSx6dAL447KwzDYwbGNdtVsWeLW5tBQjSmFvUuSfETmed26Djj9YM",
  "key25": "5vgeeGPvRKMR6iK1guGXMQ1XNRPaZH3cVUnfiCjfxK2jije3uQma13zV4Ls4uvjhTYsdxBB5JWazKxtcBaV53tGM"
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
