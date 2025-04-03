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
    "4X5nwSN5zfSzTHuKaf8sgKEjzTfpiSbZbdeXmXgeXLER8kBWTctBAZUER7TKqpZ98cxr15aPXtNYW3jLA4PjMuA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqSm58qAD1bM4RfJZ8XgEPyWAiTcX5g9Q33zb3moBtfyBUEztZbnzBXKdzY4PQByDBKJngYuDxRcYzdqNGMWsVp",
  "key1": "4bY2oVg8466ix4bCUpALLBuXBN2QPMGreyHUXoKZiSN9m3KsRXvWvga92ySey5LwbiCUW8zo9yLHqyebTEvYpxEB",
  "key2": "3ytM8u4FSjXb2hw6rwxPsaKX5wWtc1rsWBFtGNUGcAEGM4Pj7M5ssWQUEdFxSL7Um4aYbP6PWGYnaBrKD7pESTGF",
  "key3": "4zdePv7HmHr11D8odejNWFcE9ShHu7TYtKrCEp8r15X7eYig6Wae2saTMqnN6wGPnyTk3fNrKgg5JCWKhF5VQMxp",
  "key4": "4yqVETupvLi33WUrEYpgVcuBjw54avmezCtyxRCWpdE81A2wQtrZRXCgZvikHGiRcy7GKM7U2o3HiLzHB6K9RnEH",
  "key5": "4GHDnpBDn4je1WdXDrGMhd5q7sKREjZjoaLdXxVexXiSnSXSr1eU9XM1oWYGNKDX8EiQf7PfdHTQof1yfXpjiaXj",
  "key6": "4JobTpo1SSFC4XE9HLTsE1VkGN9seAPKQUMpvRgTAFUEnyMqEvpWEXWovHXdfhuNbKWAd1bXnJALJDdoQnLX5jq5",
  "key7": "5VN3kZs8hSaoj3CXHtLbZpGSLzyRod1okzrpxj1Ue2fwQ6wt7wxm43YHiJwW5tEj8BnQfTiaswcQKxtFnqgCPNXc",
  "key8": "3J6Pep5hsdNS2GsNEZZJFrmYo2Bj9mWmwj4WmbcwoPbHNsdi8ByottDmjYP9KVJWU5G4BQ1zG72wPqsdbYZaknQt",
  "key9": "61SXFU5wXp2A8ZHUs6qQD4FjjzpUghWroD7vPTRnqpjyVZBVWzfMU1CNcHRkbneMqyo9Nq3iVu1kDDym45hsqPzf",
  "key10": "4DUELKeMYzwbWNc1j2BFTPRUrYxuePhRjK3EcNkuCruvTWPUfe7jQUWCjKhZXdLGNo32Zvdw4ye5E3raJP6atcNG",
  "key11": "2vagLyXipQQY4RGK75d7bhiArGRYR24bnr5hUZFAyiCJ6B1CRGzXPYz8jrkdWxYLSeXQhnpT8TA1JhNYB6h1jCiz",
  "key12": "4STEffC8kRAqDs1hh3Jv4mv8D5srQkDEvEx9To7nLdBfTFjsz1P7JYo41spx1ejxiSPuVNGTfBGVw3eZ43PoZ8Hf",
  "key13": "5H5YMuAsFtmXmMhVDdsTYUXLpjfFbJFidwHYyZZyehPjWPqE2GupYmSptJUAwhx6mBNpjpSpT3W7qpi2nxcVvooV",
  "key14": "5SL9FXzSLBmjunwJvVB8ytfuJaz5bnRExgqakYCTYzbfU4D2fqvm6gVqNcppg3PDWDJZYfo754DKBJsSJYDmeRvJ",
  "key15": "65aUQVAUazteCPBySYJVHLtHLG2M18Qs83EwntQ8YoXuc9rjVvGNYym1CYVeeyCLN3Zds6U854F1Hg8qvuhdvLeT",
  "key16": "259hf2PkwEHUhKFY2yPCAtrcsAkHadU9enhb1JB6o2632icWt89e4xrtVQ63jn4tHuN39FxyYDGwiTjSGgRZZEj7",
  "key17": "66PxnTWmgez6ySQRbqJkgSiyZrJvASQDf9nx5FNdjte4iG5KfabpNBf9yzQXr8etqDtZPANHMhsKrpxfdBDhjfiA",
  "key18": "51DWTCkQruiky9dTxVw8LZ67fpyadvHKn3qieFtyjDGmiYWagxCgL3wzA6rrNPjL8vS1KfJVE8757RHXUEDHcsL6",
  "key19": "329RKoAHWP1s4wZjuDBpCkhEc4RGwECLk4xaCPEZ8VDgKfJ9YHKugyHyodDskQsSGPNy8THuBWAGRhXsjRtHsRcN",
  "key20": "2gDCcxL2TAu3EZJEBShwZ68VGhu81mXSxTAd5vENmSfs5L1Mw14ZvikPfpQSRTufaBMk34Jgp7u95SADnNRHzHz7",
  "key21": "thj6EUKo7i7F9HwPPJY79FyzaG4Lj7zyWZoU9qf67xvULx6W2hYvUX7RTFu1Kg7muWkVj3V3q2zUafNteHd64Yg",
  "key22": "4W2g4AKj7RHBfBwFvWCHt74R5qWDErRAqZi3YN3Jx6yXHWC9mGbZCLZCRdHjX7VhrVoMqj4n99YipM6ApCBboLH3",
  "key23": "5mLSyqi8uYWtvi3hAZhxJs8upvqv2dzKFmkmPsmCVQ9CWYDgaWZCdXGdjCT4HziLLA868qfzwycF1xbLHTwVDpgG",
  "key24": "x4PtFZDr4aH3VavgEe1nCfqQrhce7aRtST8Q1WwzE9ieJnpycUpQvP1Mbqihx8zqxbFtZzYj7K1V5J1zghB1Fyg",
  "key25": "2o589o3Ks8JQvU6KmsMkXpvLUgsBvQrGmuwScVhMpCYgze9URX2o4TJcygM53Zrfd3aBJpj5deof6jXGT2JNaaP2",
  "key26": "4tAVurXWePtRntY3yFSbFQiNCY2WKbDgCU6K3ifL17RkK8WVojsHJF4CxnqYi6LFfUMrDzcSmQZ2YpfX78TBdS6C",
  "key27": "zXuYLW5Dr3QPNBBVuGhAN6UC6dyJ2dEXqhVpE4pr7j3dTiiQ9uN2K4i9snnw13BPf8pHN1zugRuJXb6UrDXF6ub",
  "key28": "Sf2ie3MDgGGGCwASiJ2jRiAXtaTJditTDkhyEeWjAvgDdvnfEd5D9epzFFxVseqG6L2N95UL8YuwNE7gvbXNaDF",
  "key29": "4tahCHHeToC6LhdU84ec6tfpDnZ985zsr6qhcBTKVaB48AsUDWTCrB557f3umu3CkjRXr86QCES372S3BW9mDtgk",
  "key30": "2GkKZ9aXYNTaLG4zBgUrjcxUsX5Bgb2DfLTRL3hPKMAcCk3ShK327jb9jjxcVnUMjxkSuA7SeYaXcahyCDW3j8Sz",
  "key31": "44RbMkn2zpHdDWEA6pnWWgTGLZsEurXhYdA1GWsn5ZwjCCNm4hkDk172AptxgfsRoX4GoW5sin3sAdVgmNQftY4v",
  "key32": "2rbUr1dzWPz4wuJV2ABkD9RgayDtF2xKC7uadPao7pfio7fEXWFZa9jxgzJTVsVSKExKCLpYAfWCeR4okLR6ZeCM",
  "key33": "5cSDmgSnFyyR6VehaGacRXQiie3MtfYGViwwWqVs8iKxqVDD86gyfFrzoL38tJwfYW1Z3KxUkHofXnTAQSkRwUXu",
  "key34": "4294WJFBgTGFAWxKTVoNDkpn8LRhcmaT5H3T8HSD1Q4NzT9tNRF9L6GVMgfJyNbhfv8XV9MV3JJ4EtKkKmPAtZ7X",
  "key35": "33UkUqqveN8KAf3VqQFfpu4JzaJayr9XnW5evoT9b11ihYLhP3FCLZzyXPTgMVi5ynerRVd4QPfpZHyGjjBmZzHs",
  "key36": "4JAA3kW7LbLR5RGcbWPAFtVPatZgpp8dfmVCDbkGXQYRxoJAZnVFbe82A9Kta7DC3EEoqq9233EhmnetZvZcNGNE"
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
