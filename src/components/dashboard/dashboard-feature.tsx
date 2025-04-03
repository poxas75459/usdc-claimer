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
    "3jBmbw2dmMbPxXGqvvcodkjcMhvmjkasuzb6Tr2KNQcETwGD2QSqaXSyZnLtM3tJbz8tych3Bfk6Dn8MvoKcwLPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HQPrfgx9fjxVprnXzbiVrPmivuSkyjwmNt1m4CyoFLgrny8LhQxmbFEcvQEGKDBwBRJv8VF3BDn4Ce5EQFnskM",
  "key1": "8GXgghUcAuBjmnhQLpxRDdMcgQNit3JDXxRoYDqWXDi95CHpk2Mvv4MLSfkNgetcAMraTG9k6o2q1eMfPbkXik8",
  "key2": "64YvG9jydqK9gn6S87EaTHFLXMVyQEuQgQHJSA4UwNB5xfyPiVXR2yCgZZeAKmavNT1AxtYwMSWHjfd3geB5LFtK",
  "key3": "39TiBLrMk7L83cmLZ6gXFxyHtsqt7zt54qjU4pQ4q7Kv1f6otinBNzacmuLbUM8o5Xv7owm5uotFMJAiAfx6XfCb",
  "key4": "3ABAVcwBMkq7HPcnrGNwTKuyYasYexLgcQmaBzkMetz7AN8LRuNH1NuxR2itc4h2UiUbVeTjJu9FbyJhm7DWJyRt",
  "key5": "3N6sxouZd4J3nxLCVHvEQjggWT7EnRjT4x8eEgYAoZv6wMHr3uLomGGPvpeTVZ8JAzD2S3m1JacuJsNChH63XM7J",
  "key6": "zkgjdjiRpZA2NQ9qXPLwURRF1QKhsbnFJCfpgmAff4sPAmMcDj6Tty9hDFMXgfwBAY9VDfwtbKgGr2vhSqGkEEX",
  "key7": "3L1oF9Sk3uaP78F8PoPqZTVb8SRzvvDivJQqVAr7J6UZ2awqvZfYCDCzJTy1m4DUCeV28WjLHvSQhaP7wMk825z1",
  "key8": "NsJ9R9a8U6quEHsHBu94AFPH9Peec9UvWHyVjT1nxojgnoUJ6yFvyxpFi2Y1SGKQiV6vzDgpqBonizpkx9F6D4b",
  "key9": "4TFPiE7PXw7VkWbWKpCbLMth39ciNxUnA1Pi6hgsQJvHKauZ6KHX7VFpsvTfxcWoQaAtq7TkEQE2o5TrEWU7R3ik",
  "key10": "3kCbL4LCLKk4754F1Hy3pMA6i6FtxdiMhoEvW25nL3ozX8bXh5qtqBriW3Hm2zNhpukRdm21dtvVmHLFDDbh8JQX",
  "key11": "44L2DxmeSryrggC1awA3HuAXyAoV7bh814TiwZqcDGChFJmEWdgUdsyRFm4goW7qDCH6wF4jH4w5L6B9xxakFnDs",
  "key12": "5KULiv5W3k86cpeZ8VNfS6KxQ8eYyc5SG5KZHqjJ8aTb7X3M5cV2GBvaW6wAEGYgYvAwmEpJyTG93ECyNH3ENdU2",
  "key13": "5h8Wgbexd2PP9wbQoyE55HpkpwXJ5cG2qddpAhRtEmhcQJ6h5BeT4yFk8yqvgc9wUGrM5TbxVbN5wm9UBfpeT5LW",
  "key14": "4VeHTsUBcHJQZsNx6DahzhkXgkJicoXDNeqsBFmaFr13Eas7uBkGxTVtfcViR7yzfXD9kDhAtfvESdWmqPMioCHT",
  "key15": "5ha7QgD8bRSqBB3CsaGcasSCwTSPbUKvjTtKXEigXzPYr1o4fenZ3YRPnYJtCGz3EJBYU5m8ZZLrHzW5aj1md9t1",
  "key16": "3yV35bbKKK85XhkSsbt6TDZ47GGDL2zZqrbMW8PtjF1Rha5uYnnTHgpJ6fk2cpxzXFQCBXA3jkuyZUPHrY3NUDmV",
  "key17": "2m3DEqeeAA1BXNfzUptTyzjp6AcuVP1z4GEFrKnFLLVLkmqVmSDZXdNJba3XJ9z8sAEnVbfuS5f8jj1QbQeuTJJr",
  "key18": "2YpsCqZbW5QJRTWhV4Ai96u7mFPtZo5ihaN6yC38XadCtsu81BiVc7w8wAb6XxysHHjQaDwUiFvKmXL6bXHPntkP",
  "key19": "3BrMVJG4DPntuqjsiQdXtgPxp2pEe2u1P5zUdWJt45XYr6fZKcbeXpSQS4N4smhziwRC2ALP1QURELk6oBecv46K",
  "key20": "49ti22RP6mwbGCVJzBrDVhKN9pAKJFbAfspCVoRmDS1aPkrczS7yqV4EpiebctYwRHgJqD6AV7h7dsL7cN9TBYr",
  "key21": "3WonMjNVkNZfARs9mTcfgRaACczG8VbYJHDMBT7XK2zrMZgmHT5WSqZ61jcmMZznK7GfNqaFVBEkuUDnME86edLc",
  "key22": "4TKdM23JNtvSKS5QKQpBxujyyfygYsuWiPWLefm3pim3nhGnSzRhzdzE1WqLpLDxZSDAg3iwGFQo54kcSGBBASG7",
  "key23": "52zzTzbbJHDexpsy7vaT2XwpMYvZ3WaAyyEeqYaPjWdj4kqMKYK3wWdKS2hGzhoNCYEDCQGpZtmxLqYUyndnDi31",
  "key24": "5VzN3VzDz51mfkjYMUHPrgJh8Vs1ycdR7JW3U8mapuvmy9tb6Wpe1ZMPhaQ2gWKetdRmso4tBNGv6EwDs8hLuzEA",
  "key25": "2wjFM25wiUxfAUb2ECdtgxjk4bkAJCvvAdrcbuSK5Ujrb4xrNBxYqyhrfK9ov17BrSCVPkwE2EH18S3xpaD9DJRA",
  "key26": "2NH2v9rg2oxnw1L1fo1bKe4VuY55aB2ykdzLSbuGHDgD6xNffeT4DA6HBSjzuXL7qXCvWow9JVMWDz1xKuSXm7c",
  "key27": "4dmhZERPFzcrFzJYpNHWdSwCHsmQKCyRcg9hWZgnsB9V8hJVVuQZzwKBexCDXis1Z7pAA3yyCTqv999Ra4N5Q5mx",
  "key28": "zQLH9Lq4QuoVubmD3yCtdnzxaLwRtZPxnda13mBa1kGEkNQKMXR8jLCNhKDJuAF4gNYFg5zS4wBjxmkj2SqQLG4",
  "key29": "5M1PMtzzTAkTmi8vbstpThfWamJ3GjHEUtYb7zGdpDtT2HG6HHfp3TJEPRr6aELimfNdGhBj6XUTYUzz2kn2wcVi",
  "key30": "3o81z2h5t62C1ZkojvEPxa74xrYi4rCoxNrk2BujFVTf6mCqCmmEVSCzTVLG2y4t7D2Rcd1LLxdrHwnqc9cPWV6u",
  "key31": "34ZXGGjbkH2ZCUbvAZRyqocXT7wtfUFzogfY7AB2a2CfyoBLTAdrURNAMcr5m3pp5xp1JoMSHEGuA4QmiHAbod6S",
  "key32": "5wFCpM7Y5M6mPgJmYZ48D61C3dSsMCc2jqG4LdU7taiMGynTN2MatomJFabD6t1mXXUvgsmo11hLKCvXBEcmum5t",
  "key33": "563eMTRzcXsbPk7a5pSfHVkoTNBftex5N9vioA99k5Fh5NYzXSfVAXrsh2kvW6CtgpmQ7x8FLb2ibb2A2qxkGgSY",
  "key34": "5JiTbxEdcrxgpbh1i1exu924CzQfEQJUc8S26819ZQnf84s5fDXwvYmBnsD4oEv3iUY5Un6LGYdMiwV43W1ciLyQ",
  "key35": "4pJwq5n9d6HsAhXZaVzfy8bemDTUzugZX2kJZx24xhjT9DNCANLqjF7P1GCGQyroqrpBBaxYSPJgh3HaNyg9t2Md",
  "key36": "5mbMYPeEhzFi8j5YDQ5rZDYgDXaaMrgAbbtfExCtxSCptpYBi7vRp5PUepe2DiiUuuJLUssYVrSukyM2DZKVfBFp",
  "key37": "UcBbv9eUEWQBkfFSqgAerdcB5wh7FryKR19kpYiFiGkupTeVxV3MakapNLEqY48ZTjkcKsnXTiajkUSRPgr22fx",
  "key38": "uWA6LG6Pr4FJyrjudnLAC9ZERo3NgjgGTeA6b3EiQ2VK1JoDCQShm3DyvKAGGjPohqexXpM1eijQhakHzcie876",
  "key39": "2JfBLcriH24cTpczGJYbSDFFqXSMSPLVQiNkMwzfeWxdWBAis3EpqYUU6dAiRuKM9D59F5xbXG4fC2AdN5krD5bA"
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
