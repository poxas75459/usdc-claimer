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
    "5M5LjnfoUQKwnvLdZkCmEMW1g95joS8hn8pQ3kmEbwDsVLC8UEEcRxgWDKEKMV3Tvbcgm4ziaEGJYfH61Ziwpi4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qwv7bzYPsxp3iVnw9bn4s4Uvmcxqb4Df28CW4wRt1ERVLPYLLsqsJxmY15taJAqzMTzrsQU1hfU8GpHQkfNuPSy",
  "key1": "aRqqn1SxdN53DgLka71tzd8ZgBiMbGNUUEK4kg7XR6GpNsLTwVPyreuo9BLs2Szo43XCn33sEMdh6yeC57WnJZ2",
  "key2": "4NsNKvmqmzw16TUW6gzFCz55zxCm5sSFaPVBg85fgwYzzSTs8KNM2Gx3Q1LpgpXCKnxexsecoR7ju1z6qiK1HRR5",
  "key3": "2rd6xiQBWnxbdPuB7T2jtJAPXFYuHjd4bzAMRSjdRnR8oz7mQ2JBthmW2yerASU2CJtSTxS4YjvRH2oSRepsXFje",
  "key4": "38i24AQJRYgXJ4wNmodayyiKxdHKd4tmzi6jYa4cEwFK7AV2xFvBoSLdqxAZX2x6UnUrwbHnBtsbUUAAutMomDC",
  "key5": "5PYurXKGGN2D6hSXmaPFuVq7vuABbaqHj7HFKmdSb1RfM1tSWrjHL6S8EFBfTboU6nwvrRiEQ4TWeQiqzhepAqAF",
  "key6": "2484kAPa9wtfMhpGzkqfntRQEvXpgoDFx5qw5aDV3zfqdXLvxD6PrCWn6n7pTobsa3fnJpt1MdycTMzqqcKrUJDE",
  "key7": "46jxbfDiNbMbpsV1KA9orhMi8cHfGGbuMTmitnvzmvPGx1qmmD2FH2Hx6k8RYskHPMQarf6eMar2ehWdJcewJAyy",
  "key8": "XFvsQY8evT7tRd2G22r6Uvt7BLd4hPB7maBBb4m3SQY1uGWuYP3YF83xQNXzG3stAYKms5AdrLqXshiYxg1zExQ",
  "key9": "EdKZL8nkAnSZP7MXaU6e6dziFfLk5Gbwkb7X99kpkhxfp3tTYfAvKS1SLFU7LfMSKCEBiMsbCJePMGrX9baGSq7",
  "key10": "466UvgheZwYrCQsY94v4NLmuGSJiwfT2kSLcAKdzFmDHGrqddQiVeyqwVmb1S6CiMS9SdU9DtcxzHXtABi2N7tKS",
  "key11": "3qkieubqCebCMMGPwgNc5xZciZ5mqyAcFNfDqgMsdoULH6pMZHD679kMJ5pEwGsW4BAGHSkejgAsXDrjdyP9VPwX",
  "key12": "48uc1EPmThnuC6VoHhpBAfjBhYADHtcN7Lr3TnzH18FrAJwocPEr8wrqsLJq2zCNyAx7euDsnRUm9EPUBjKnsP5k",
  "key13": "3rb2jVJfzYm8yFRDLaBAy3tRAzgzKLfK72JXt6Z8MWoh5JwJ5zGexJTJ2ZtpER7jLAXhP9X4PBuxis3XCCJTQmsm",
  "key14": "4nboj5LGwo4VTHN8N6QvysxWjUaQ3n7dBAdCQH6WSPcby4957WxBjC9FSsG8maUDpDhm8qPHAGU1eGWhzrnioHEY",
  "key15": "Yoxf92cVkcfY3aTEuAJfioogLneRnRUN3E7AC5Uyf6jdJo2CQo2bsc6cQ6SWnkWk17F22RPg84pWSVXpEFAy2qw",
  "key16": "5mNpCHUqyGWUn5D8Ywitx3bGJqumwvQh286TS8f4V6nYLGN9GLBSEfK4PAXBTuM9jxaV6kbeekqz6JPTjFyZvD4K",
  "key17": "3oH9mmPBVdDrmuuC1B21K2nqQWh5Lm8zhxGn5kGPDqjsYFc4woQ17ZYTMkxQdzTaWaNxH3Mh43dMCG4DV8j8dvn8",
  "key18": "7GBZYAz1HLbPivrMR822cieq85vVX5NXsWgKn98rzUoaJVHctmwQwenNF7v1KUsAHzjagEcQ4xXNp4dCtiCdy4w",
  "key19": "3SbjWo3uAwp5GK8cjXSvzYzbNngSS1uLjjCyuXsk5s36GkyRK4ByibjbmgswKcNXKa7Jye2NTRHsq9zCzbzbFxbv",
  "key20": "3nrD2jovJa12U4ZTwcSsgTsb2PtXARwmwt2jQgAciXQuTPSuM625A5khS1CwzuzAhFTKy2nAsXAgNTxzzk73S11M",
  "key21": "4bo1iF1hCsRQ4fBAaAVZ1ziGJyYnPrsQKY1DmKemxJ6NTnXEPfZsgvDsW1mHCAubpRGB4FEkoiPYXrkak4CYxj5W",
  "key22": "2DjcSdPFoVXEgAjrTEqubuE95jufBBaJavgGU3on5x4a4GhSBuS2yrueGKwavkQH4b3fqNatcNVFxzRG8soikeAB",
  "key23": "3do7shHPHDZM1FkgWNk4wMuMehtDMEojm7Br3TNEkksFSn6u5moa2Dw7miXEJXAwD2a8orwgMW3ZofzwUqBm3Cyn",
  "key24": "jF4btS6nTTw3yQpbUHaTf9smnQykiNV2nNFkwk81Qr2YnvHGejFKFKv4D2zrGxQ4hpWFxLwcCoJWBKoj24jQRSU",
  "key25": "5qjMtRuwMFj8PM8ELM9XdQq52Dzimfey2T17J8P8hRnpeJ8gufEYLmn97rL7zjumQ3heiHG1q3BaovcqaH7D9BXt",
  "key26": "FPHMjrBtmwRZEdcMEHPZ85kFhUz3KCFB2u6oqFgZoeAXArLgb72ijnzLoebQxikFQaJ4hDWhgJyJp1Kckx3rM43",
  "key27": "5RTvhRnX1sqt6zgqyzqBM5VJJKpyXHbNQ9PEZQiy2PJEwRySSDPo13NBdJPqh7rdStK1PCDBJyJdQFSrpFxpVTM2",
  "key28": "3wn6vAtGdEDPJT4FU6uf16ffftK4YAxo54SC4gHieEE99EDnmG7We7WcpdGvr8F5SxuHhVPQ3Z3Q2qPTeC7gCRsZ",
  "key29": "4TYhyngBAXLoXDucUJg41UqUQwtdVSq8DUwC5hZJ3E6s5qR6B3gUfJubj9i4JYrEPiHQAWCMVJe2skBryiDjxgT7",
  "key30": "3o2FH1xvH6KXAKgx6faXp2h9t8xGpjpPxkss1riJkH22e3CbJ3NNwGib2VBd2UggeezB22Bdsan3GF8LsnT6g5SD"
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
