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
    "3HMxaP9aLabEjS1gHwA6TqxPayoqm9zYYrvTDXsbhH5NgYpxtG6TCoeu5auu3PADuiDpyCcXpaLHgwPkGs4WYbtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cxpztyhU9vih4KaZNMn5cp2ztCeeRNooh4Uu4xKxajttCeerKGbHfz57agtoComzPts3FqzBh5CfKNNH7mCJtP",
  "key1": "3Q4yKoRfdd4BhXLrRK8qr1c115xPPuXQT7qMj3A5D41vvDgf46fcbCh1Q4Zvt2Bs3YPGQiK2iFauewJrT2MgodvP",
  "key2": "4CynB7Huok29Jw7VwRVxVwYpmLAgCXYPpp2b8UvNygqiMKwnog8nruWiux524i3e4qUiXM1cnfMugXxh8FLRRP8t",
  "key3": "4jQfaTKUF15C1vJGcbBLQf86uvRAvXKyhWitKKUz3V8ux3932a4vNZeU7WNreDAbxoGsPDEVQLK15qWP3ZxF17p9",
  "key4": "5kmfoQWhSMgXG6mJ5JgsyEtzxdAkFqepRGzwABdpKupPv2BNvw54szqM68pETTXxA7e2UPMJjfuKEroDRL7Geszb",
  "key5": "4svtpi1BmttRJuXpoVQa6iFrSMArifXRSDEso3nSQSD1GnstjC9jurEy3yRccQWBPuZZy4Ug8GjziyPUYWKr64TA",
  "key6": "5jjGmUibFWaA1k2F9vGmtHUiDjja6NwbsMCgWctvV6fFSbeo3rgFcmePrGbCeffXkh9C49BfVfdpUnnoByJpKVFM",
  "key7": "2JRk5pGyamAKFEPoa5j6ZYygQPNGULBnNJGmT273iHHo4dNyWswWJs6zKDB48sSRZNsKKAubMHNfh64dvZJw8tbX",
  "key8": "35SYwzmvhWjA88fWoSRUEvdNPXB4jQmfvfBwSvceTvuTLL6ifwWk5x28LMLHsppuuQvGDqXshTUpA72ajbgfTFL5",
  "key9": "4EN4aF4hjGPKpK7RMK4tG3nJJw57UBMJ6UbQtffzhTkbowWw27hjRcMtmVsxWWk9TWKFqg986oEF9Von9NGVKpWR",
  "key10": "2bL4AGNsYyn2qJWTjUaPqiC6UDAG386i4dfxTCX8jCQBHQMjz3b5XJLdfvFCazZ1aGT7oByQqZF3NoYBUHiGLjmV",
  "key11": "3n5ioewgHnxWX7kgxszBitQ9YhJKWa265MTS32dioMcwy1PvixvG9hMP6qGf9FYCBMhMhputHJQ3FCBCzPMTBLvw",
  "key12": "E38XhUCmERCrYRtsQiyH4KerL9uxoy61HP4MQeZJYcaVvDDrXuvAJRvhfiqDTrPpsZx5kw2njFEbNjndtHv1PK1",
  "key13": "4kF4UYfjesLTFzvwsY1LT3o89vsWWwZgJpucZnkDr2m3gDmkdZV9BdMDnbwMF3MrRFyXQ1x6ST4ugUgVNm3RJWkm",
  "key14": "2DbeHNEmRoCzL2EbgK6Fpg9KkbQS7reLWfCBEVKa6bmAvjxWoSDKCeHdkShuE8aX1zK9zkXibafcnyRnaog1zMYH",
  "key15": "NC3rfPLqXqXo3vNb25dhYjjfDRY7QiX1DV3eSogwYQHmk2PsvjwXMV5HXSFDjLvcCyArXYMm5t6Tg8yBxFSsAhA",
  "key16": "3UqYTH5udsYvBEbbozF33GBA2quoF1ykjnkS6Q3qFfPKgt1XgXEpKNtMtV4hBskpGpPXWiADzXFKmiQKNZyF1QN7",
  "key17": "5vf7KHigUw9stgdRhjrMsdXS1dZudhN1SLaZy47pfcuxwUpjUQD2SGTtMLBXnWzMKkiv2q3PCQAbdynutfRStxYW",
  "key18": "2w6zSEunX8ZAzAbwxtSj445gAnmbvJLyrMQjk4mh9tEtpJ3aXMEqGHeo8MMEJWeaNAar6W4rbngc4XXE5rLXpPcA",
  "key19": "5mEoczCbTvj4P6PByjuK769FnNQCchscThQbkgVpa9aUVmcv2rhr19pP7ki6vZoNFLKYiVePUrfbqB7qUcL9fgh7",
  "key20": "45ysQuiAQj6Zwh4NXePSBPV2PATVXhdZqMnKofjHegvG8KaqsksiVT3SijAv7FhNmQB1ZYX759kc6CVtihCjjQcV",
  "key21": "ijZmJt4exJZVDjx9Vs993eix2nMigPeMYDaGGbumSq5MT1Mbs8NN7s3eThVL944j5QRWvQgM7ZbBoJciNRyuT8p",
  "key22": "64KWfDpABGrNzjiCCyESsBazf6rd8sRDFtZx7SFJHWDuyWCo1qCdycXcazJRW2tAL5KrzVSoe7Ho6xj7et1u6S4F",
  "key23": "454dH9ytnPs1HToi9vCoE1DkcrfoAWLa4e1fEtDj261oxFvKgqZDJs7Z9ezW8GXJD6DynEnG5wHRrZn7tmP53aRg",
  "key24": "2G2eHNBaqt49UV5iN7HoKxnYGAYeEACvNmJ4z5aDpVoavLJABoL684S9abXB9Ycn42owykbGkEr63PrqvedKgPLq",
  "key25": "5JF9e161tUUxvwhVEduuPQXvWuB7CZZXfAn29GorsPMiPJEm6KzgsBbXpfePPix9DFX4AvfWFYNDhGAKfLpB3AgS",
  "key26": "45foCN9BpW5VxjYbKAc68JHndFxjn2rxGREiHrxH1EsVYCZ1XSZfePtXMSyhwohmakwDfTENmy7vtd8X5xsJw8ar",
  "key27": "51bqMFuozckPHM4pPPYPZsfxA51AMrZkwyrQ4AczaAvVdRPw2PJ3vGS1qPTAXrRaEvjhRF8kKptGuZEUEc5Rkjq2",
  "key28": "4ZauTePBG9doFfq47MRPaQwvakUVyeBpJnd3pEzCvddZVD9UjzvR9FDVhBTqXBrSokKrvYUoiGTWKHfYCZqWbuad",
  "key29": "3bnAVCQpEdUP5rTABi7rGBiwGPJX6rYALjeJfEGcawcEnTM8uJuDSMdzySrcz6HPae7GLfqdXCc4thkSWAC7spWJ",
  "key30": "4oegp8QLe8RcSk6acwEzrgXaXWBYjHDyr7QSHZqhQ7sF1Adikh46SYd1vFUhKTvTr32vKheYCbBm2tmWfZkcBbaF",
  "key31": "5oUdfKQhSGSb3JtsceBuoMdZb56wVDpoFht9TpNsxAYM7N2jj4uW91ZUzgAKEViYXVMoQb3mPi3whvaVJ6s6qvyy",
  "key32": "26kSGqcPzNfusmCKRGHYQXTitqeWrCFc35Yxkbc88TqCvavq7pUUe7s4v4p7qq4Suyfsdj9JW7JmdNZrGLPVLgD2",
  "key33": "5mZg17DkP11otUXaE5pjtJtM6u1d4ndSoKFSasSmw3cHyq3P3sxE6c2BnUS5h7R5Zw1VMeKwMB45nYtNKbKYvWf9",
  "key34": "4sfNV6pSE5629hh6mTaL79RzgS7w8PMhHaLWYUMbDP7bthJm2AyvctF73bggBMHboEWbBD6wYMeyyjVyV5LnmDBL",
  "key35": "4r6mRfDsL15ZD2b3gSLmp8q4AUBKFmSX4T6Yid5RB7zTb7murQFsbDtpJaoBvWwd4wWPdx2bain2LH89EdoGekZ3",
  "key36": "MNJJ1QvvudE2uEpT5GhSJkNwwsH5vhYv61s2qpGak2QPwPJ7wo1X9YGoFSB2XnfdAE3mMWKpTmFujjpyEc3dWjT",
  "key37": "JTP1gJpJsWHGMojRUKpvX5ch7xoDy3LmDAJqipRYwkvQ2wyfCUNkx5mbEXt5gwJA9fs3mPo3yjQ8mruSXozSfWs",
  "key38": "5h7E5utQ55y36ph8grdYH2sgsBMJ1wdhDgnFEDEZuxwbKNmfCAYb1stfTtL9XGHzLtLRVrgi6CDhPNvMya2JsSj3",
  "key39": "62992gpZpW64FciRPQUJP1Pz2aHteF9sTGhgaKgw5rA8p85ZjBbX6FvuQ8w45biW5ohU2NoRg23oLq7zP6jaUd4b",
  "key40": "d448sb9NDKFJnCcRbHbTPsVPDGUsfGv5r3rK874bept9AVxDdeJmaHhpWBEUbT6xw3jcFGdSpVov1nRY2ahAH4K",
  "key41": "5EzkE1zFezLxa1e2Sy7LXkRQvMQgM1bAW3z1pwEgmW7EAquQmFCb5VThqQTpMAj1M2EC9DPNcmF5NeN1qkZRgNXZ",
  "key42": "5kaGgKoayRYHSCphLzmQ3huMJAzkVij8t2nUE6kVNSNZ8vqczAvMbLuTi8qBTLen7k2dfKWS6iPcgYEoaNyo4hz3",
  "key43": "3v9dYL6CSmx2NBG76gx3s1yvue8jdRJHEenwhybeeKAvQdPCM8Z3Yr66VdkVgYML4Kaa8wwsi45pm21kCnXHtr3z",
  "key44": "2XZJp7jCrw1iDzBorzbP3iEW6qf12t2vWhqpTdEhHkJUcKbPgdif7jVUDRy66ZdUX9EHWLfsPEA5SeNALq5hAAsZ",
  "key45": "4ox61krX6szFmEZT3mGZATfFXMRxjn3v3U6r8iWDgpC5GKsFFW3pfpeqTYG71oeF1M7mh3LawUXG6LqRSnaXKWLf",
  "key46": "56tmorAvB2NspjmVPgf4DHUaoPz9gcqyBGbk2vXBbbFvCYktYLhFEG7kcDP7oennWk24ArYxCAKERPBmJP8LYX5h"
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
