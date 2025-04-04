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
    "2zsYuxx3RcQKM6uVwJe9dVxXQKkZJQy463nasX1wo9PqEjyWr8PfGN8xj6td3MMcbDshhc21KfGyusAjKRoRqj6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XoXa6zSZfgveSkcfR8EEjgJsamnBpaZ7SYG7KiKW9wbQbzSprmniXXrucuDCQS2vUdCL3ujTp2Bdr6rPvQJxNL",
  "key1": "3ghk3LywShNgYUUG3ZXNtRGbk28ciwetnxCtoCcdiddXpGaRwru5xBfQd5iRYEHfV74TzEWksksjSc4fPenR7ES4",
  "key2": "Znir7kjk7q2Kq7AXUwCsyRVSXLPxYNzBoT8JQXZWvpfzh6iz7cJ3jMVxvqptmHYW1EPxQAhgxrGCH48JjApJPLc",
  "key3": "4c3GUehYt9tdTzcSG4FUi7yGbdj8A1Bu2i9NeitQqKC7zA7w1naHReVMHtV77UZ9yinZ1qeGVA9DHEVevd5UaSoP",
  "key4": "3t8jwxAUnRxJqG6abf5Lv68DePbL8rSa1e94V7evuAsbncxpnssfMM79dvD6GzB9J8dMtYneomiFqfSEpXjWrnFg",
  "key5": "5SQaZ4bnsjkTVDQRFkhFnMH35qQ9wP6GHDppjb2GrCzMTooQFqUPAp3EW86F56DpB2JxMCayFirkh78EnwSsTKM",
  "key6": "5yUEXZREhh38FC1GoRSN6rKyjPeVUZxCU3MPbaH9DtkUcpuAHybywfiAJ9gBLHjRNXM1GLb1Q34jPzWPEtq9yAUY",
  "key7": "5ZHUK9gfm7E1Dy8iqMsNTheBoYWre2supvXP2vWCw99Hr3gH4JvuHjM3CjQ75EtiVLToKPsMLjoj6keoo4dkdbJn",
  "key8": "5aTtuaZ7KWSrF8epX1M5JWZfW3NzgVauqrUERuUbj9AvuHxq4dRPNmx8adoNuFCBoTWh3vmYnCWY8ZXXSxbu9d9p",
  "key9": "52s8Ye7DTi4ucSovLWoqCrZwYqtvbHBpEmaEYC4pvCffBPRAk2CvL74Ho34rXS7gJtEFHPkEStyWg6a7Uyr11w4K",
  "key10": "5CmW7JAJeGAwynocVqTup8kz15AripKyPBk1CXYERbVWiY21tw64egb3kGwH5tWdSAN5ZDTkttCdKvFivBjm6Uc",
  "key11": "5S763oBphmggy4cwhEkusxyBai9HyoHHx8TRUWnLXuUZugNQvr1JHJnYit7hcg2x7syyFwjbLWcTK36Aw1stR4N2",
  "key12": "4nxK7JkGjx4J8K3w3nme4Tr72wyiwrnDf7oYLeGJFNjoLFaeByY9Yy18zWAmneLRPUgcScVS6gBg74CQkZfpMtgY",
  "key13": "4MM7EMRbjj2JysUbq3DsizowdcVqpPtui7UuUoRP5zHrr1ePhZwzrdRGuEJY4kdk7jRVqhEFC9yXci4sg9gQrCwZ",
  "key14": "fXWrG18kS5WrrH71pXGb34u9PZyAszegdTxx4eHEc2g716fVRbX8VEFCXUBuTMjBrLGX2U1b7ZBDRmF2q91tyXd",
  "key15": "298tHXpRh8PYmmpyX2czxL7hEWrzCL7q4uTwbGwoKEd7ai3krqCLyp5Vbwe7NrVAGG6P5YfN7zTKSnCHzmFbHYLL",
  "key16": "p1iNrY7MqDH4a2RbioPBp815Qw1MhrJSofCHMgVBKVL2ZHA9kdTNKpg31A4jayH9ZBSAYDhZiZQwMw7FCPXm9Mp",
  "key17": "2NzJa6mEC6qSJWM7BsJvmVhuxC1bggppzAdVUMpBSNWqDY87z8J9QaxjsjnY912EkkY169E8GtouuAC17BNS3sgZ",
  "key18": "VdNeSB96Jp7aAQw6czvJUAZS6S1W8UBwRnFJevddVQGKQK1uuLT4k345mgwZXzRyNj9FLUBMJprdhBsjEb7u3Sz",
  "key19": "326cmExXGD7wMg7C4LDU5sXroYW6sG8uRUXwB9rkFE8F65LxKTMwkvTWBTd1PuHECExdmXmVQZA8AohvE8GoNuTG",
  "key20": "4beB7Ekki1GWNFKuTUWeyuhaAsvTyCcAkUCFKe17A7VtVm1DrtM1x4Awfe4KubYYfACaeonjyY23ohAox2c1ucYT",
  "key21": "5c8SRb8FJ2VEviUxBS4ZWSttYXza1r8Rb2u8Qbxkexmt48GtVhJn9xfYbtVYfavTjdDU12LoBPEwwPUCXdW8HLAf",
  "key22": "vtHwzfuBZjz7FN71MrhYSEHsvCk5YDneVRVDMvthbahWviXo6959L1A6aZ81vMX4t5FLjTj2xWEorEvJmFVQMGj",
  "key23": "39HhATxGdeT61SbFa4mkN3sJd4hDjbZ788FGmdRXy5uhrXfhoaj5E3tNruzwSq7JcaZ5Yr7oPZp5TqWyjUkYTCTa",
  "key24": "FxupVHbrfRGKpfASt3Z1JpA3yEFg5gjFeFkeKYybbEwg1PnR1pK9jkRTmyQQ3GBou1AweaDEQFutCJN7N6to4Ae",
  "key25": "2gGnwLnG58YcYWGeUBydZLGP5qUeNPHjuGNGz385wi59gpEurYACjPLznLSLXKRXZSTLN1md7B9w6MEsT5sX9Ug3",
  "key26": "2GUGqUcjFkMjMhnGUwths9T4W2nskiqthRbZxMLezHtmhFnhJXcxBdzcNDE2qnvmSkjtL5srrYFe2vUYKMewRo4N",
  "key27": "5PXNuRjPqbHwu8LS1J4T61g6xM388xCxYsuZcve2mvoBQZ69JN8UrcteEGGJut8sPxorxx6dw3kEetSSD9sJRZ42",
  "key28": "5XDGY73wG1Wbwjv6Udff7xodrMwbW9Rvsx2Jeynd3bPqncryQkxVodcSjstDK1esmvXUeF2ct59Q7yFm5DSErdDV",
  "key29": "59xQYfgc2YLnBtCVbdXzB5baHFzJNJ8n54dDksiZLB9Yh6KfUzyVzBp9o2aMg3yximdhm9n88UYXGQsMxFzbvf5y",
  "key30": "2sqtq7cXnoJx7F93kouVfF7YwCQPSL5ydpmCRSgQiaCE8tL7HRntoEHM3YRzBjq24PGRrjKZoDYpTgrNYUYzxVU4",
  "key31": "2bUF3GR9wdHobpEuq8vmsWUF248pzpE6HiqP1KxDTWLeEeuk1C13zkc4TARuhKqzssqkecbzcrHm5UcJhgcvVsTJ",
  "key32": "2fjFNqHxupcam6KydMWxo2FLNb9ruKZ4EHbvjX9SArFYF9NPo7muYnDEzGsrQG6GgV9NMKDNGG8WWo1pnAEG7MFY",
  "key33": "2qFNeVtkp81r9EJYmV2KWq2wcViEbbKWYzkLrWuE9H6RgZwcTLCZi4d8KNJs8QYQVwwrfNa2v6ZKbEspVRmB7SNE",
  "key34": "4YKy6B1UX2uawAjUeT3dxTUCKStbvkrosfnxziteV7s6BjQsV7L2ZaiJ1mqtvnopa75Hq4jP6AAEko48Zcg4o4yp",
  "key35": "5dbgES11dUotX35BPDHd3V2TJ2Zwz3Vhz96WTMHWKDFPTFP8nSQAQd7B28C2AMiQ3Z9GGXKKiaztTvCmVw2H3y5M",
  "key36": "GisKK9zzwmDREmE8QDGuJ9XADicV15fJuLRZfNmCXUtBkzPuUoW54WNdt1tJRwQbK3rcQ89DMqPyxymgpErsvnh",
  "key37": "2dnEgpNMUzMr5Teb5rCtjaMHohN1dMmKqah9GoEvZp3PgfuhHQ5GgnNgmVWwMfCnLgWDiBjSWxQBQSN3DdkaM5Yu",
  "key38": "onieiZMAaAiwDAitMTyd4Ei64kicZC6sKXJAejFkcV4aNW5XeA8Zyi3wxANfXTerMKfhRBB3hvFx27NQRNkF9NJ",
  "key39": "5VCxvCBTGszD9nnBxKRXcMYPsDfxhhJMa9uyuwEBozBo4fAAP47KVQGw1Q16ongd8V9kuttEqiVDVYo4oeYJJMCK",
  "key40": "JZJUc8QpFWW45ST5GVnG6riKZek5cuS2v1KS5iAv74VnWiLGaVr4c391y3XNycc56khFTKZbaCTr1DjvCT9jxf5",
  "key41": "3cVg8rFCuuBfMx1biujfNJ7JbkRetiHVs9yrG5cgZZLaghb5rzLUSRB5jbt5KUYEJr4CZ8Rdr79wL9TNpFGCvnuQ"
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
