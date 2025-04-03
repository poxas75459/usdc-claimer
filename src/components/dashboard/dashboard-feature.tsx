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
    "xLdyZnZWJoVrRrAFzE626i6DpXREmmiczozBdPyYZomBfQ3oHSXJiGnbYhr1rm8rMSHXf4QmBpJqtcJYgTSPff9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4if4d53mmWUGHDzXx25hhPTsRUqpxRgxHCs6t1LsJxEMoXR1ACAk3pL9awGMsHUZ2YTY5PKfwPRxnaNQUGG2fUA2",
  "key1": "3CnDdzWpBzWtW6Lc18oSazBiy3iFDJ2hFxoCp6H7B4QwMHcvvjEPEsR6fWtxPe6hhNsWMqw5UPF4mBDxgee2Bax5",
  "key2": "38PZSp3ewtcc6upeNhu2mwfAbBBjt8b27KJnb9P73D3te1cftn7AVaaxa5KcJixDSD17ULwhR7vuCqo8yg8fcxTC",
  "key3": "3qSMUcG1qTEJAx8iVN8sMGcbCLvrh2CYP1rLsxMh4xMHybixGCfkWyPNMuHN9Rgq7LnPJKZeymZCA3mhvjSADd9J",
  "key4": "61mwLaNWPG6b2Rby3VcFGgvmZ7wE2MRXdgeYW5tL7WaaFC8qXWL6SFAtV4z277z5HPLWZFuTdX4hTMPNMXdTZsrL",
  "key5": "WUgAPQkVAWByHc7FwxHYU3Wm9hVb2NEi4MT6ujUdCr435pA3tiAP7Hgzrf1rSPKMaD1Mb2kJAgAxVF5e8187ySp",
  "key6": "27a9XDnrwnbEHy7DD6rLhegAJbNZnd4kW3nEzX1s474TKaQZ3daCP5uLACgys8LrmDSVKFSiAGsn9KzWJ4eohqxx",
  "key7": "3KA7TrefwLLqJJNHfgUFwS2WcyxLzfb4rgGk7ft4kVa8R2Pmsaw6xrzvRpmdeg5DXxUexqMXPayRuXnVR59fCEWR",
  "key8": "5zGVraAG7Cx33MP5Egv1GtMkU7Ni7ZWiKg5Q3VE1a7MQLhLG7HKuvFXxafrjdQY2Q6RAfTBXRB2Ndqk3px4Qpy9G",
  "key9": "FbcpMTqbNdwrKdfnxyjUiGstKkN2y7nxk8B9BfaPtWZpe1dNghoBTfWYY9BtjfcusUG9eg1nQxxQ8WTZw4y5Rxq",
  "key10": "2AicptLoW6DCKEsvH3WCJzoBS4DRVnXbzEekD5VPqKHhXtxCjmJQeGVBjg2nBJd29vyFXe3C5RGKiZuPDD45TcN2",
  "key11": "5skGo1svB3cTMpaBsyxDHx1oZzhuwYFVx71eqA6ycMUjJS2nBYZJ3LyCvVuv3rFPRcpRedYHx2dyQSEX8zMuRMGY",
  "key12": "gtR1q9VnJGB7nvaQhNdryZ3a8gkxV4hLsuDdD8H91PHc6md1UbKFaqWUvYevxKvydxhDkf1bZQ6BtanYwKyHPow",
  "key13": "5XpjkgUkNFPkR8u9BmrdgyU33RupZW6N3bmxVpTB4rm8qeTVDfRyjDjYr7KTmScF6n1rAaepvcRUUmWUCAnPEiyy",
  "key14": "3PAVZpMgAdExXfeJJestzNwQnxFyfKjiiF7H3MabdLGZP471Y4bx67hJrRnNgrXYUc2WMDqn6tRA3yn4tTPsMMB",
  "key15": "3cE977s27CRB55q3nxj74cYLeHFsKLkUEgi79UhN1bCctBeG8UMz7NpCzmRRvkCKZ1r7DqJzxTA3SRLWZJWrBJVs",
  "key16": "5HHZQyULjQEDhxFXsNLp3QJjYKW7Yq7rpZDjFEPAhWZ3oP6uSZfmfe5iE2nxWmdDpNbStsDWoa3Hr97bUCfn6fmj",
  "key17": "2UJTpikF7ZhufKFS1Ksv789TLGe5yRuVoap52ViRraCLof393uCmoX6ZX4j5YBAEbX9fmZVfaBqKHqwA4DDYpxVU",
  "key18": "2f9fveUAVRpmbhiiS3ZNaSHXTN2Lh7Nm5VUbF7EjWcnYTwuNQuYRJDALpDEU8j49tdGRCGVgavfsSJou167oWWD2",
  "key19": "3g1ZQzE57aDZDUUEG3mT7FBHB5DPLmUfzom4Yh6Hc1MKz284FLkT8CAZhXtYDtw4CfcEncSnvkzLsKBpk2gZZZda",
  "key20": "4XaUG7BjZr7kSAr9YrzRD8b6ZN2efVe6ncGD7NQtdFejoxSJB2L4fyRbwjK4KMXG26EtwRJr2NVCq2d5nhTcztJo",
  "key21": "32dmqr8LfVetW6WurdFofYSKvKA8HwGi4Jqne7KEfMkPrQVnBToXHizzWGLU9LYRjXaaQQyz24rNEYGhKFHQnaDi",
  "key22": "5RExGyk2PGBc7cSB5BgmwGQoUSTECu72ffx2nF1HAQcwAqmLhNjmfi4xPnbZLwGjBWSx1qE5ZRMtQv9ovzam58mf",
  "key23": "4hcmHCtq7saWTEhcSHr2McxivZ3FwjETPKX8axSh2cm3KityC7r5YFFVLDzHPBmWhogSQDF8cxFLgQhorCYSvf4H",
  "key24": "uCutDmijma7tapTrp4RgRycmuUC3kBctEDhnHEx1wfbJpUHseT9smeqs1nQ8q9mYR7uDRHPa8CbAr82N1JE9jvi",
  "key25": "2T4k68JhRD6K1tJEhdzAqyb63rzDizRB5742B14V5LqNuWr8epwZ5srWCTf6KUrNLoguFoR6qfKvTYSjJe2chc2L",
  "key26": "2Zf97jKb4BtyM3LgsaKVRMQefBhazw8JFuX7JTDZmcUszzKLNhd11Tf1DzM2LL7PKSJRQ6T5s16NnM1vemtdH2wd",
  "key27": "2Jibu4ySzyqnQSGimPT84AGqfJjCoR9c9fEdz7ZAWqje8F7uTp2t9YhbdFZSgWiZzineciXyanYzFdDBfxANGC8u",
  "key28": "3fGSDAvo9do1X9KtV2xrJBHtcwpsV7mKdvujdqQFcL3XrrF8Pi66Xr4PBtskz7DzpueDE688zxVUHc3599kLEoVR",
  "key29": "3qzZqxmAmeBx7kkVtHfHNaYuFAR7Wqc9x87bYKSuoPL3v68bMYbKeHcZXh639tzWsSyitotp6qZoqci75MPtp88",
  "key30": "64H1fMWwWj6ZJXV5rfwYvdfKrkin7YmKPkX5vjmmTejxbNG4EL4yfecwGmPLZKdo2Ba8cr5rybb5fomvqhHGGVKf",
  "key31": "2fAkZJYK5grTYMrm9bTxdAjvnk2HfqoY6UUbzdtQRjfisU1Xz3n2C8Fq7aJJwBxDpFRc1fcaC8zJMQG3BRhBgAC1",
  "key32": "2QNVu47hnSnFyMchpRLf1dnvZA2xsopsskLfKFP4VqZvZvjPMxT9BhDUFmUZUDeoSX3Kji47jXQCThYHScKPsEpJ",
  "key33": "3Q16VUr34uk47W69nQ2XRCHgdbVKpkL7JmYR5zMvGmvHbbTLw1qWKDMso2tKELM9hpuQXf7uEW1GX6Vs54R2LBkK",
  "key34": "5uEaoYgwd8biCH6oM2WNT3wmx7LN2zvpPqdhyoQasSWutLYPnjesGueEPUWSMFq7y1XgNVKNq3dfC9p8bJnjem67",
  "key35": "5NTr13SfYTVtG1YTcJDcU4xi6qiSnv722Fb6j46rXrs7vBaesgXjmdJjvvXVhDwpyBj4myiiJtn9NFKLtm2RWCQJ",
  "key36": "26kYUkS1wEpNeaDKaXdfojZ6RjyWgQsDdKgnSoSz19AZGPmvqLFWP9F3WbiRWTc5LmbAFfHMaYdDvE3hiut6ngPA",
  "key37": "3hmwjCVypb296P1fUAWXwiukgPTydd3HS6QMYJN11kgTbqonXhoxEriLwy1tMVihgeFczgaYEM8hsWfynPiJQ5DF",
  "key38": "4je9xQWFz4akHFCgcVbHKroqdxFm8hRbvPxiofpzM3d8eSPBbHSvuhmPLM7GVX6tUifSp4zLGqAte1otgVdxAaPV",
  "key39": "4c2vu7nsrJS3T8msKejPD9aCpW49R1y6GeiUvEDespZoSxNtT38wY3FnEt3RbmXxaLBQ49DDR4KTGanpT6dFc1U8",
  "key40": "4nzxWMF8nDtDFZ7BcgHLZJi7ATubWnxkxUMbiqPeNX2Ji2MFtYKRXC5GxC8nD3Uw29Fzem3dtXTiMMFgWs3z8kpq",
  "key41": "2JrdTo9UxRSLTr5QCNiJNfyUHe4xoJYt8KrX9qipHmEfFmCAXFnYXXuT7U9iHVAhiVUL4ZLoXHNAnRABZjrJZxro"
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
