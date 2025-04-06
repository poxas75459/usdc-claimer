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
    "EX3pFqspLWrcvnyJzVEHcdPiqtGwAdm1s3zeQV6L1u9PrRqEtdSxgxMx3gx2Z34FDVb8aUcKqkyJuJgaKHUQLWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sNZWZFXXSosTCjswtApkSUeNp4hk1UooyfZeXvytPEGL5kJVJH7oqytMBF7t29C9AszNqdzcKGww4TTSokDHkf",
  "key1": "gsjHgQtyR1vLiuxmhAmvXti3x9YugH8tGWYCS6BW4A1YxBwAZPKWFcwRrkrVtUVC82uNzcMxs4xbCYbSmh2uBuL",
  "key2": "Hq8ZRfovD5dRMaqxFa1gh8MGT3vTMGU39FoD3nexv49ozDLX4Pzbum4SXPhki5jzST6Y5WcLRZaK8wmmsBjQ8jr",
  "key3": "H8rF62XbvocZJe1AeLXZUj8fRqdp9uxzVJ55s9XxX1C6fLa8ZnjGnHPruYTkouL5eteCYfw96o8YGH6wbjHdRfq",
  "key4": "4pMEXobHhMLXobE6iGf9PH5kiznoLMKDHSTGCLg5THr6xusCZmvM54TBtRNPAdrXSHgRT8dgsBGzTKghTxdYj2GQ",
  "key5": "4AXTuQoyRJeH34tqmo2pRBRRjSpruFZDgNF4eRRo91NJpRmBSYUUcGaZ4NJRiNfnWMdX9Gixy1835ejE2yNihExN",
  "key6": "3kPxPhUfS4LgXw3ZXDuk8zXmEWT87omekTiJe3W4VYM8tgFDJNrWm81hhjpuHmvH7Rkz6j8V5nfLpui9VWqriy2t",
  "key7": "EbeswVkgxccAJBEjcmr2irngjdChzWBMD8cPRXydPY1qgKkQE3eiDTufFkAfgzqJmwBVKzBdppa5xThQjPdN95J",
  "key8": "5GmbCmQCGyz1ctt4w8V9cfheH6QdTaB1GVsrq5VAdCNN4m3H6ep8DGY7s4VepUKa9iDCSdLvqr5PTjCtWujW4Lp3",
  "key9": "3yQP8mcMABBYy8WntdmT3EhVhYfqdyJEUCf9dySFjJk7uTE8R1RWR2CQ3tsfgYqm29vLKYdzDMFiZqdu8oYNdEkA",
  "key10": "4Fn2WVKRUBrrxK4eFAcoHoHSVZBfq8yCAhAZ6vADf4Vg8YQcjsoCW6CyaXtf1j8xMP7bMRQY6xG99QLtad2CH5nH",
  "key11": "67g5pAomPtYfr6FQVZJ6UBHBXLB8AgqEQRwnUsmU7BEoJjZBTUrycj9KJvUz98LrpuZ1WW2Fd4stEhF3iYKS4nqa",
  "key12": "xM1g15n7sHnDxQDhFrwgJUDhaVRzbTuUDZ3e8jEPTupGeE3bSb3MYpwLupPoupb1sAnXjSLH5J5eQBscXCLFb8B",
  "key13": "2xLMy9V8i6HPuWoy2fbVs64bqXv2gPgSX2mRB7ADCTzueQcm8uBdFHqfDX8Ktd5NHe7VVWS61oW9JL5eQFqrTssa",
  "key14": "3qt1BxokLaf8uUCeWLSjg37FRgLc864peXccXDHLo6Zf8qBMczyy93SDLv9s4oR1nt2jH3tdxnDoUPjivC5Bhj3n",
  "key15": "43rHtKCc2tjVuwRs3WhWiprqvxTJT4LpjmRNQNnE3fioB8vjL1RhsEuuxGwz3fMXPzxUXjvUyo4xFrZP9XJkzWJW",
  "key16": "5WuKnKPKiiY8bbgk5BVUYZnShvMajQf7cFPFPjAcXBG1NXVt2cUXGaVyULemCVi2YZM3LS3NkWvxu2TRaCHCQxJM",
  "key17": "4pUV8iVBwYc1vmF2vqydoeQddoJgB542APkvZp4Y2hPsDJD5Lw5E1QpBor4rtCRpZfdDKJ8A9m3BHkNCRuxKZ2fu",
  "key18": "3pYuLXFoQXZDd8VadWYZZnDUYNkQtiPtMk47qssJv3ndm7JiKZHSFq7aaXgjWMcdesx7Z1quXw8tGQXbmDt9abD8",
  "key19": "Hr2Ac8iBrVVsruMLuYeKLksAABqcLYStAuHhicb4uxiPGpLVPgUNpGx8Yu4pmMhe7ZDx8pWKHQKBJBmtAnL237m",
  "key20": "5Mj5x8f6fFSayfTwdEhNq3K8wio6QVUP2bEYRgtqXL633683MwnrFDq8nRsEtWLuGaaYqvNroiJ2LowzdQ5xNGbt",
  "key21": "5B5pdNaPo5QAgQcSrYaHE9ynTBw5ejgS7SV74wD5vbavRZdwjXDXBuTB6mbC2tfLviQqEzU5BfaFregyeZHbDvyW",
  "key22": "VwzzuYyphaCQdWivfyvuXbwweHZU4whBsP42CsXBK5P1cM46zNFtcYLkrkAWGYCXEeFQyUBRAUn1WTDMssehpaf",
  "key23": "USKdyXXinNRrJaiyK2eQPU524QJR12EdnyNEhDXmQs8D71n8RDtqQ5Y7Kv64w4GsoBb7CQtgAPNBGV5jdhfyXVK",
  "key24": "2wbkUeV7BCkZGkNHoprUPNWH9m98v7WwgFkeyjkJvorp9S43hbwmKigtrT6g3tRGHuVGRvzXKVDeBZxNnhjQnbRL",
  "key25": "3gy8ZZsSYqzrGjhvu7PRtX8NV2pG1ZSJtggmbeS54ARa8LrrhTXKdceWPqUrexoneGCVCufW7YCpKJCpesP7y9Es",
  "key26": "3L12qmFHX5KzeUE7jPnQDpY7rEq7aGxQ8t9ZeL17ArWP4JsksXPxSeD2nt8fxogi1cTVgTD5Xh35k3VXs52adFkr",
  "key27": "G6Gg27W3VTwnDnkBX6ucdBbmyiUCkjSZPLEt2yPBuZzZmqjFgsbFk4oLgqwa9h3LLRmgMAV84uLeEWTcKTWJprB",
  "key28": "44iEUDGGNNppCN7uyn7LuvGmz8HGLE1iTBoLMFmHDVSeb8eHeaeMHDeVsVaja64rpvKus5P1taRWAUtgECHe3j17",
  "key29": "3NvPifS4XMNR8od6i5ryGz27jo8bQkQkGujgc58w7YVBuvTWkGDYukHHpsxCbLkb9FpkGjiwjpFBsbiXJwZ6bSFy",
  "key30": "3k4TUJnTWiS2B4JgsQvggjki1w5msN1FuNYxJTjJzFYVtWaL34e6FrfPjuT51DryTMAEkTiQLtxZsP2FZL1YS3ar",
  "key31": "3U5YHudNa22mB5CjWLzYVKxyM1ksYE2ZZWUW28sQQbcyEs82KhyXW7jfBUzRZty5m7bc1o5iaJ3rbkYzBkoHHH4L",
  "key32": "2S3ET2o8LktSqhvTU3fAz4aQzypqmvAmXWKUPYNTqu6jNoSqxSW5FiU4AD2qnccFhdYJ4yuGyeRoBdKTUBPs9ikQ",
  "key33": "4RMuQJZo4HyCmRYzQDgcuM5uVJCRsYJPsAZ8VSPNUjufR329w11zGU9mJFqPo3Fp5sS8gTLd3TdpdDLr8EmWdCma",
  "key34": "XF3XZp1dYy16UsuhRafxHN4dt8tvFZxUFLqgFkgtWrt9D9paBFyv2qVGWwJtaLUXez5gfod5XkV91D5h1sdpkef",
  "key35": "3B2BNdLtqmjHzsKzT1kcPZ1aPxqtQBxoSiNjAnW2bKRs2K1j5scW13uRvS4c2sZrwHA5kAP61jxXY2A5HjxiTK4",
  "key36": "3LL2P4G5FTzeAqiJDDDFVjhYYyaUrNs1GPVTsycC73uUGwopF56RgTw8f8Mx2M7s1ipxY7dSVQouj5RTmnw5hQoF",
  "key37": "HoVFTAqpRt16cx7FqCthbsq1TfN9rxxvS27FtVL1C4bTpbWjodEzRBjdUS434CJoindCdctMRt95RvzYKTr5zNp",
  "key38": "2cbiA6AxchKExBcpw3oK4vCwgrLgfFu68v59zYdyXB2HbD8CUcYh3W7mrpT7dFdKFarXQ44yXURLripzNNMzjQYW"
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
