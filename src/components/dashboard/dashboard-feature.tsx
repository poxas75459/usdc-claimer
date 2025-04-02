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
    "5iLSFwkwGfCFim2kkgxPnP3jC9bAjuVDUaa8uZ8zC2fxBvvcfmwXyQ2M5ifRG3U4FMn1Lhc8wPoUGnV3UqsQcitj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDGrWeuzSohNNT34XGXprVqTfDcgtZPYHbLL5cEtwR5rPJ4Qg8CnUwBm9GoNG4eTphCgKE9ptWrP4H4wHbS7BVM",
  "key1": "5GxvTuTG7H45SkGAjxB4m7CbFsC94Gpjfv4p7exQCLkzpVgcrtsts5burS5vNPj5cWowRNCo7po6LJLFj38XZEBD",
  "key2": "2n757m3L9d2nPD9pxi7R9sPCWMxptwjhjXFpuxZMHKtrt3jYHKmJc5rycifjA1kYnkGjgvzWfYZiWSR5MtGWLHqN",
  "key3": "3GaVVuX8rWNFugeUuAyb39zbxJyQmNrkxCCPTiDGU7LyU1t3iucq5DtmaYqMh7Bb4ezUVe7hzieJjUmGff5CqNYQ",
  "key4": "XKqnfWe68Tzag7ReQ6kPaHQDzJH3AErKhDgRnPfHdQNz7m49QbfNAEFbYTZRVYrMrKTkvCP4ZX9B6xzEFUGb4zQ",
  "key5": "LLNziHMKjfwQ322BDXM4k1K7rm8CDXhCejZ2VxNhKWtmStNtPsjRKUt8Q6T2rQQDkEhW93XQQ98rokuZiNf8qos",
  "key6": "uSZGbkHPutCAypqpCsdYnCWTPrTecBi8zF4oCXcdn8wbxSjAd83xPnznPT3JnenhBPPu3qnF3tRDvzitV9XNarm",
  "key7": "2eMxJpXBgB29uLrGyCBNXW1Vb3coPozqZ11vdtkJ8PVaZWFzEYewwNRwi7eyGE8bmUzUkSBP4hhb8RshCouGfM2W",
  "key8": "2nypj8YZ92gmnxZfAUCwR5sjo6kKhkspjkigcBTgdb3qgKq7CFykqwZReuJYBJTHD6k73orhyxW7c1ZoEHdZxX7h",
  "key9": "5CRunxQeKPFLv9AeKwczUGwuAj17gEoC858nNaRmAzcD3A9Rqv2yBEU4nqjGesQHdC7uMQo2pJef3oWWiQG5126p",
  "key10": "61ZcLjpjPDuVSNVyHebXgVYnEZSSwcqUFeN3XLpwhNADMzqBSnnJU3MBVpH2KgRwbA3isBpDg3F7q6xPo7S762Jj",
  "key11": "4YahcGYYfxvf5pn7exW8TGXHs6hQUPxfvvkTqa5inrJSyzTnmBUTe6gTqTLg6bmQTuJeQNc7JbqC58HpErpSp7mq",
  "key12": "2nHkPnV5Tg2GYEUJZDWpJJLTXPU3a5H85NJThETQKPbb1mB8iyszaQnHycMAkmGFsDKxCfHxnUGfF4phhtiMT8wg",
  "key13": "3Do4kAwgwCCxkbvSu66K77SWTRhRBDgfMeMmZY2JzQFf1cVqu2kfM6e32Mb7eTFYE6FvaXLHDMCEFYpLMchFNpxr",
  "key14": "ymZfwJ6Hx2SJaPyY8bDWcr6tDh3MpvsxGSrQ39woSn25syE1QeGFNgMNTfprBWKwJgZZHBmt2D79XVqFNVMaeJA",
  "key15": "2zXq2ut3LeHGNEgKd2BKZqPGLiLR2DPTtdwnMrdWWNsEwQx5UK8xuWW7Lnq21KxnHJnTmChp1qFLd5MJjm5XpGkw",
  "key16": "2iGzVRdh1MXkT8vnCperVfQrxXoJyaffDSsnEQt5vZSwaCgZNpGMmn1LY1nRLSgkiWEp9xZ9kD6bZrfCgGTCR2He",
  "key17": "1edx7myRg11NLjnPUCtPddEPzoVZxCAXgbsV8MXDP71NCmebJ5WnxoazNCDoF5YHHS4iV354opwYiN3fr2uEi1j",
  "key18": "4PRkrNMzQ7WUyzFappRXYTCEWrkczrx9DuLwpx3vqYqNFdHAJh22QKbRGk2w93fcNxWYyVXUZCWCPniD8Ycac5qJ",
  "key19": "3yFsF4ntiu4wydWmPbmVYBbS6UPZ4WxMEeA9X8uqGyScjfQ1C6JqbgJud4x9Jt9kLs94cPXC5vDMHN9G51fMYRD5",
  "key20": "3QFYSbU9jASqLvuQRA9Dnzw7h6q86v3QF4ruGzq1FsRNpeGoLi1HujMs4Jz8jtA3gNNq2agjbsEKJhP4EBor3kVo",
  "key21": "WiqXV1hbBPwo1nh2dA3qn4s2BwijvyaYGSyKfyeYpGcGhESLVPCxd88hdCTZyYbRVX5hPKgCHrxwPsVvM1GwQg5",
  "key22": "4DhAfaaNfPTQN7CkTRX9BimphroHA2E2sFxMcyFFrkFkjeZnB1bQNzthBSL6jvRjDP4gQFmmJFaw7DPYeknzWNkh",
  "key23": "3CKH8i39zJhn3TBs7Hq3cXEEG26k6CzpmSuMF254upESSGVcCPZYYARaqjXWW83e6zkMaALw8ofDUj2voAQqXWq7",
  "key24": "vNRBdUqnEhmMDqA7xavPfWZcahRZk1Ywu2Yvfq4S9KwXabEr17ismbsQwCDX3YHYUyAMfABkRvn2LYXrfjd1ktt",
  "key25": "4NBwAytFExLwr8DftaZ1LkDhRVkpyxHsxT13zmG8DUX7ePBXKoGeKJd6Xk9hGtYwCdMgkwVDfeV6nctPwFpX2fRQ",
  "key26": "7x8UAL3VjjqST1TAruD9PCuB1w8DiiMJQNh1t1Kh6PJFsivgECsmStCDQJcHRAh3JKbLyoFAsYpRFMzcZtGbcJv",
  "key27": "2TGQDwzvAsWRW9PARE16G8t9MT9DRmpJZoLmqSntz53dPTwas4BSCoDXGko7b3PPQT6djgUPVqNcT2QAjvNiDxW2",
  "key28": "NSzyAv38TnAviAXfJsWa3XFyyZSFg8KfjwJUvWkWtzoAzDb9Q3YW5TJNgyGKVB4xz6QHchk6V9EjUypFqLHqRg5",
  "key29": "HJozzbrtfNKFkn6Wk8EfXKxUBQeddvRfRuJwtBxDxdJTkF4ub3HWrz8fiHwSBo4ocN9268vsVaUo1W7TdRiByPh",
  "key30": "pRF65xu5mAjrdBfnroN7aZs9a3ptqVhh7F8uB8G7ARhR6QSnp2DUepLMYZLktHJUng1WbCfWKJ2S87cd59eod3t",
  "key31": "2jitjmt9WF4nXPchqaHiMrTMDqMpGdDcMdJkfnGegDJvUQH1nsWBQu7TsXCbofyqVtTwBrGhigCH8yRgBVJ4dsqs",
  "key32": "3EW2qMheDNHc52FSCYJmiFaYYcJZWFZsC6nSGn6RiCupjTBxGkWp5Hkh3yYGew9jDRFk9TtgdKFvdmGWCqe3oKgM",
  "key33": "4Sb5o9NUG9bZmCXDsMKGhw91BNR9TYocJuDVYCuqZH2LtrMcmm7w8w4SLX8znmcBEKgLQ4NVrtktU1Y93EmLyjPd",
  "key34": "4Ej3FSXyyGKVhggBYAThe1QBZMzoQaVUoqgSxcQoe4GQVyaQASDsJiMq1AfCQqKU363Vh6BPcg7FsxzwTHYonBjS",
  "key35": "32TZKc4Ca4Qi2aGZo7ntcU3RMbGnjZrVNz4qtMsqkx8wJKa7XfEyyKGCvcrfTBHRRW6ffubS9RiErRRcfDyiJzqr",
  "key36": "5rzkLHcg7nVhNBfSpywTgzTJfhAkWsjjwTyq7EYvnyzS6EU71MuuuB8XCUtZu3G2HnmDWunz3NFc5TnPeZtvWcGJ",
  "key37": "5twhkgPTnQFezMNFGfk5aSVSeXpxBJQ13DqU5T6AtVW7BGFPWmswEsrhg44sqr2WXA1cSZEb4nctCAymFsbenGeP",
  "key38": "2L9K8jGCJWG8cUnyFwZ1cmLTPurdKvJ3Xf9gqX28GNJHJixJCxxX8gPKFKJSSajMQCQuH6jvFwJmjt7LtP7KG8Bp",
  "key39": "4Ddm1GXc4YBhFT1YmpYTfy2rtejKyCCiu3iWqWhSuaZ4yFjKjoLpjyjwURiLKKHWehs1Z46N1HhXmB5Z9eUax843",
  "key40": "45dacZFEy2cidGLiAhLUmbT2fDKd2UASuDeiFGuHAUz8am4yTrf6UFxf75KEVGZees6ZAgD3DgHRM1EXyAQAKm8P",
  "key41": "2CVjeMh3qELHALr9hBekGDrUmoj7h4Z3D7V6XsKE5GFeRxyFTsRxjjXDaSfiJnhDq7o9XLPJnuaNycAmRxnT63nF",
  "key42": "3kwxKnmSyE2k2uXUTKDWrqupXUxvvXvNGDYkT21WNofzAKbDShEzL5tG5WEBES2Wm1hTHd3WUsHccYZvbYXq3QYd",
  "key43": "5ndc14SuAAEHB7JncX21K2pNQiK82rCVJxV2rpXn3x4baXzuidwXTXRiCCZToH5Y4N84uSdZXNqzCRfVm1PCNCg2",
  "key44": "3m1gBvuHBPRnPHUvDXAXmuVKcuNPd4kvxAyDa9afRiuFJBHbspKKJMHJzt8vdfpziczfBTxgkfBgxqmJkZGZveKw",
  "key45": "2zBSjM2rPtYtZNN74brUPBBqGisjTn6BFYyyyTqh4vesbPzDk8Kb7xfWBxV74LGS9M5nFCextzBgxK4pcwH6Gmyp",
  "key46": "5ucwcexjLH6zUDnft1PRbcSEQqTEpduiKd9qpYuqZDj5nM7Ng5X7LXE99gEp79g274bSMvPbx9B7WLmvWkZYAs1V",
  "key47": "MaFqE2NB7uTuzzEPKkyvYHVMVRnSsFdKeAgxhyG7zVDgJDA811RkSgZhfSyedRk7ivFiQGEL8pFmFdXhJhuBbAP"
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
