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
    "25ysaPxyECPDyjQAuQjK3rPWkyxcN45MCigg5ftcMLAPdsbKLfQDUKrsFhHzArES9Gc36BJ2jRKGxrq1iVs4RNA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBLcoCLFT8UwHkYGMg6T65eTTxsUZgb7NhgWeH4cbcw7DKRD3xdAzfeCAwifNWKE9YxgQCgUFUDEDi8H7S618g8",
  "key1": "66kLUZNcSdnm8sDTUJ6zKyEwPHKSEAw3ACCFdLvuLfzJJN83Mn8vvb2iHNnTkrgt7CeEnmnqSditJBkJifKRHKWK",
  "key2": "6K7TaPutCEZW2mmhaRTAirHnckbbZoMjYbqdQ3LiMkKzKrt7MsMyZGHEmkh74JivRPig1jLPknmx7gkvLxBSRDP",
  "key3": "2tThLL9pomKBowd4FwYWDJM83LXruSH1s6W1EH6yUESqXFDn3g1zfA6ko9RVyrzhskimKPFtBfYDLTusnbEHjUDi",
  "key4": "2vfmmn7FBwt911CadGdZSqFPzo2PBf2iSHkP8e3F2xxE42cs4LjkFNjoL3PezgyUcwsU2YhNuSYNSyMpjRAkn8kd",
  "key5": "345agfvYM7ssWaAdVUrG39hEmx6kiNgoNs4ij9QW8ZG2x1BbVNvYj2pK9X7a69da31ytbKBtWTma6TxCGBj1jrX5",
  "key6": "2MuG1ZBqJpSJr4YXK3dpZdFnVS8fnGAPzgB2HzZP4mCud6b7vVRdBUoyX1XR3ohbmJh2bSBDCQ7kmqb6Bc8z4BE8",
  "key7": "2a7Q7dT2iPAXNXUBQJWeNrU6NnFMrHZjmnhXyaWuqpqrHxCRe4GF6qrEdC3HWZCjo4qNxvea6iSayHt1zmTApyba",
  "key8": "3KhJF66ZULdtD4jC6JQ9eVELQ6WwrzH6N3xuGFwMb4kpfE5qcyUd6u32nKgTcNiLu9fWrVRKmBQjS7JutHtwFz1f",
  "key9": "3nSX3BC2wpVmY1DmqzRHBjP4CvSR8F9hFQBGVxebYedoA6zN6HjXUS4yX6otGd8H4puXEn7DB5RbfQYh1G6BvA9H",
  "key10": "359zmN582GeN2fa2aoPMFH9qxP4YR95UGKxe6DCJaUUgrCKWqcD3zm1W5b3KeZLuqgZd5KBt4DgFyJdFb54gWH6W",
  "key11": "5U8Yuo8gvzyo4a7RKq32n6G5zqNGyGz8BhfXdYxzjCFbnejj8TZGJoqvv6udwGsEE3Vm4PR6NLKsLEd2d5bo9YtW",
  "key12": "547nVwgkEG7463FW4J4G9RiKoSFmXUkKp2NaBz8zYwUDVfWiox7qpCcmhQfHQmUXs3xD4EMdF7iCHpZBxw2PWoJF",
  "key13": "4vKSdCCoTpciwSyXTzCLLVi9tkq3MnE82aWVkn7htbpuggAFv1b3rtvs9JEsPGA8WYtdLGnRMfCqARfR9gRSLtBC",
  "key14": "2uoESAFzEHPwH3UYT5qiTSXYgQWbSmc5jzvtZwTmS2QcnTarAZH3YrMnwVhVgezhwu2xXZLj1ntGScCgFiAWbcFM",
  "key15": "ryYpANy4JF1pW9VD5jRKZ2zRWQBBfdTCDN1JuXBLQK1MPafHsTnnhwLvZVcWCerZ2CgmSUToFF9SNxedZAXbXDb",
  "key16": "5CHZ3HArS7gtZz4uX775PE2vu3QQP3DEADLmub3xNCBjBHNZtKEH4ShwVhexEQsFc2UvsnWZnUDmGWaKHCAvQkCE",
  "key17": "2SGzgAtoZ8T4C9mdMuc2doZGFLZjXPek4umxNLBuihxaAFJJq7y7XmYU9mnXaoKvXWojnvJE6FETi57MibSn22f9",
  "key18": "5cH3tie9EU1z8fpTpovGBQ9og3ZsdogSL5QKVWiWiKhe1vHQUrccwuQbmtsw8U4YjCEDpFJbbAzvTH8ZBkVG8mXQ",
  "key19": "2uK8B8jyERnuH97V8KeAQkpw2xQ1XKjiqawG5wPCdbt9uFcLzrLCV36JJsoG6DBh27aXKiUyZ8z6pis8MfS9HxV4",
  "key20": "41SchYHKe1jBqW2a9FRXNDgDUU7BgiowwjpjSVpn2QzSJmuFHwEhVZvMHPJ1jAKxxEstba26BbGWv3w3CwoZjWg2",
  "key21": "64xmVDhL2aj9Yoz3JZa9vukW5tsC6n3SiyTZVost5xzo7MT3JfX4Phtx8ZtrvufofbVHJkHcxU2DtpqSW1dUwebW",
  "key22": "55qXQr8RVA7dJhKtxeZnVLMeTq99arpb6qp17jmKnb7zWMVdf5G4tYLPdz4xdhCWv24c3MjCJB8jKa5gUb7VN3nZ",
  "key23": "4krXDrdDAnWyWYbegceT2KgWC4jvYSnDWmeCZZw81v7sTFwVMduMypim9miX9hogPV9xb9cecSx9wZgwCLnRxZu1",
  "key24": "2eqFZSXGZYXpPXLsMF8bWY8MstenBT8GwWpmAG79DaEHQj9PCqqcG5BdDgCwU5gUTy2MfQUiLhLbzQfetvVge3fJ",
  "key25": "6o1MoZLFfB1pSnsYKr4z3FmhuHABXMZjSmsm5g2kKs7sxKGbbBdaiLCiCtm1C3WNyCT2LdNScDHYgB8Bj2AmvLA",
  "key26": "fcpX4DBV5DBPQzT8btzDaq7ZsJyTG1PBg5f26fGfWMV5672EWRAZmyopL9aQtB2cpFzX1oocau66qcWuax2Hw5P",
  "key27": "5vqvPoAKrMdeeQ8q8ouPEHBDHb2kY8N9hCbPj2szRbjy5EbPBUSkf4DrZJKEVKLVc6XjcKVamAS7eTXNBoPWSEXy",
  "key28": "3xQChYtqNzJfzj2YQz3ELgdFxgjS2o54WkyDJtTgkTRC6KxAZ1GtzNF9bqBZ55dtLw5CMRtXiLdK2WfMcNQf821A",
  "key29": "5p6J9wZ9Hk9VTRTHVuV2hKp1LhqeQN5vdUZdK21hTWe2vmP3oR8AWBcZkd5rGyaLDKo4jy88nihqxdo7HtXJUKSg",
  "key30": "5H26hJkHJx8x9UpZm1pKDLvcquKBGYt64d3WgXKdzi4mKfYSmPMZ7hqqdL5QbTPSBMU3GeMitU7YZTC77vLFyJ2u",
  "key31": "4Gh6zDUPiNq32VzK8orXirocbTMNQBGk7jKP13fZSB2g2JLnUSyM7iDMtmm7GwkicxY8jsvzsw7K7joqUfm3tcJi",
  "key32": "4WAx6UJKxyBisD7uiNhGcdSNjYyoi2hWtuGgCcX7Ez6UkWxL2gKxravm7TNd96FHjUy9Uehpcqdy4fHDADudzLVk",
  "key33": "KuRZDFxz7pM9ojqrztYx4A6axEbMzTpPfgVS9TomxouZRozg9QvE1AkaJ1LAUXAdqvgNfvJQRHUUymLdw4iyRzi",
  "key34": "3ieXtBfxTqG2gqrxGiAhyryYdMbGQsP6fxHJhY8r1orudpDkfqDB7k6S8o2HG4zBbC37wbeVMAQWvCyfFBFwdiFD",
  "key35": "2ne7hUkoEdNsybWm55du79YZFYeUPRsNhaMz8ZJyQWZNzEeMw2e8pTe34QUvVhvy7j9zy4bfvkq8SvGnM25diTdy",
  "key36": "2mKJW9A2a5ALKpM1YMhGWvo7aJc4DjiAazAyRiMrYV9k3j4iyKEUwtcKRFHqCa8pf2jVzz1Xg4nZDCNijGkTuGWT",
  "key37": "41e5W3RqgCXwJbetqBQuVq81z6ybfhMDBfTU2u7KojQtYshWcEG6ywSyzAdad8KTGtDYvQJzHVdg3mRevG6i1qvh",
  "key38": "3Qf3zgi4Z8C9ifSHCnuSuMJ39ZAaXK2kLjigNn2XAHkm7ykwZ3T1Sp52HsxdXbbP248Vuwj7TYKDLL27PFLgD7v4",
  "key39": "xVmDmAcDYxV4rmBLdUTMgJ484MoRQfbb7z8Ut3Uwdr8aRENHH7hpkq51ZLNHSohYYk32frpS2dhUKtwrFnDb7Lz",
  "key40": "2Hf9566ALisAmHyhJ6Hn3ADdtn2pW4F8tbBP1nT1FtvB7vvykYh2NgTKrqcYuBn4evbN6VnKrzTMHUdF7sEuivoJ",
  "key41": "4TBLt7QLJby5TB7ANrzjYUurQbVi25CBNRsau1CNJRZEsngXtbYHQ1P4Gw8kcqTYHwdXvq2dLj5cCqBuzmehPnLS",
  "key42": "3jquJGJWcyC7N6vGTGd94Nmh32tubv1W7e4UvdHzHhAgn8zdQWf5K3jGzRYdydNGFvd5GiKzQHXA5SvvwMH4kQNL",
  "key43": "2T5uDxWQEM9pWMSCdyGvDewfVdWJCjcX5xcveWZCmctAU3wbxBnJFdy9pb3k8h14qYitUtVcrBR1HLY95vjrAj3K",
  "key44": "4QXUaLoxDT2GHTkxoqB339giMJSxSzFgJ2LcopUweFevvMyHpz4sSP63Nef4WwVQP5zmcZyRCw1ZugcnWhYe4yRr",
  "key45": "2VNVdCVD5TH8Wmv8caBza9AzSzLhFnRxWpHgD2QUvkLVgbPx2WGJsXUFnpMmkeHLPzpcPScpcwetZ1khFNCHqvov",
  "key46": "54bfV1wDEFEhFWNCu6VAnia1iLGfcR5G4QVbBLB8yFFk915zg7HoFp8XTYY9PrJbMTCHSpzCkDuj24fLeUTBTz48",
  "key47": "261CejWSAX3e6nc1k7wHiZTRcZZjLcJ4TJGaEfzbaLXMJJngz4oYComqvc3Usb3EYFnXasPeZimnxHXAEqiTZKV3",
  "key48": "4XG91aqfBMbDxjc1cH7VuXBgSqSw5k8q1TRBLuoLtWBp7bDfLeExziK6tiWDVZLQL1e8DHBobeLCnWBevAnPBiL8",
  "key49": "3oSj3E3qZ5DEjcpH3ctDSCarBNRVT4FgydhgocCTJRfMdtQ3SKX9nhENE3ViPFTBvztGME6iqDRzYE4AyySqtkcr"
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
