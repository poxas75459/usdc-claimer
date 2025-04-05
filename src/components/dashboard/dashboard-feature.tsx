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
    "3sESyndMd8wUDepihaZXCKb3MAg2M2xz6Z6ziHCrPemFBexS3TYzUhh3arkHo25DKZjMHjLZzb3dVPqHUqbdmLsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cyTZHHaVhUXoMdsrczFHEpjNmNeDtMDc5e7d71FC1FM1A6Lhbd6FiPiPwrQofQKCADLEz8G2v84j6yyXjfuPRWx",
  "key1": "3HoJXarSCYedAkum8NcrigPN9az1qNXZQYWR7KRG6wemwq86Ho7bp4CnUg2hQ9saXFaZ8HF7xBb1vhZe8u64F1Mj",
  "key2": "65Tyvw9TrV9woksxXxBDG1ZhYzAXhBckqmvnKSJEn9n6UQqk7dk6w6Z17ZZXLN15r1oXe3hBKfcbAci8pjGoFSEj",
  "key3": "2dWscMdN1fAbCv1yXWpBhpMFJjqrePiN3KTfr3Zk1BABABHvDM51Ku9Z8b7yjawpnffkM1ynUszw8EsuWZbWuZiR",
  "key4": "3B9eMYgumaXqHw9gZ2sec1ZpLJHxeZFG7VJkC6CLaWKE5En1pW5mGFinRekvrnCcqdNad9WmuB7yWSKje396pryZ",
  "key5": "3gHBsVXqHxbEPA9pSjYCoNPCN7UQ1TijdReEQTRzB1DGd3KcprQvnjEZ6gAADvHY3T5e5H26B8h1SGgnuwLX8HZQ",
  "key6": "9DbsvFTnrqoEnhYZ8JJa3HAHzS3F53Y94XmJKXuPaFR4RUVSea2rCmt1RU6zNhi6W3GqinrqX5NQ2EmDtp78Tnd",
  "key7": "4WjxP6jHy2SXQrRmDnvSM7p43wU4K3SCWMiPvDBKWtQShdZEXjffZgk15JGVgrxGGY8m9iVCAfgB11BreRh8oNU6",
  "key8": "2Mao4QyTLuF2EdFpHosdXLUHvtTEwiyoCcFSSYsRb2bUSBGLfFm6gWDZUo7Yv71uDJgN78cv9ogp3BfwSChwcg5",
  "key9": "55AXGTmTjctxcTJpXVGXduRGhkRNrWWM6AQQPKTzv4Q83GzDrT2RzB9jv7TkvLJMST9rVYe7W2VnVMEvDTxLuZRA",
  "key10": "2dgJQc3gn5PavjZXfSEhTMUFwRoiTyUDsCF86McQdHBFM9SG6Nt9ZzcnTTKh4nbhhfWj38dveBsAacpeCMeMeh5Y",
  "key11": "5KFX2AvgFvkk7QrHYJHn4qRzmfmiGW4MJ6JWqPadiDT5VwQ345PCKrh92YUDRUifCjr5pQZRgX7hPMrB7gphjfQC",
  "key12": "55edkZYHUSCvZ2q9JVU2zAotF32BFYrktBocEPB4BNCLzn9ffsBxjoiSXG8MHt4d1HdN2scYj6Pspsj7b1DVWNcy",
  "key13": "evEzzEAKXQVKgPcTY1wCcdcWsXqfLw9xE3RqFEcQ2A8UmnSxeLwtkdN58jMGccWci4vvfQpN81VfxKzg5Fdkq41",
  "key14": "3ZCfA9hHcEfHQqAawJVbBjzzPGNCXUhPTehjz9K6qL2h3ux4NFiVkDzcrzR4Rsa8Rf1oxxbVq1ny9PcBUWhdTgVJ",
  "key15": "4QrtpHLpNucYxZYXGNieQ4fcT1fTbj2BaBEMzomiJTQR6TbL7nGu4XFj26Gbq43Q9NaKah1aavJ93Ag9hpk8gHor",
  "key16": "7bduweXEgf4UpGZg17kpaFqsqSjX239SUc7G5aorKdVX1bfvYxX7P9XFpR3QQPDED7TZuBQF8DVVD1uQM4vXU6Y",
  "key17": "4VV7hJ1wdDwbH6tGievdAQLx8UrPkKqg8QiuzpkaxcAjrKCL7JRwWXwhgKz8mSGNBPcnf9GoFi3Nn1wGbgSjmU7d",
  "key18": "2Ci2qqPsLSy2uuv8XAeigUMgyTVbnzEHRG9F4J9fZCsLSai57YXqTwQXsL58dFDnijFvW2McU9QDWCPUL9DJi453",
  "key19": "2jaL5u8X57tRd8GBK7yErRsgyxjbtFsyHMgci7hPQbjiY58MpZF7mjhARsZgT57m9SfupkHAfbwd6J6JDMQ181nk",
  "key20": "5TCSrEPfqe2zkPCfQuU2WXvDb63c1nCk4Qk5XfDoR5eqLqNbysC8s8q8dw9hd9qKfGFm8g2fi7BfxnZdqD9eoboW",
  "key21": "KnTEyvSuURmJkLxTTc8B3c8ZQ68PMJSsZViaYF3NvR8iMjgjtHyrajwcXFzhc3qH4hG3kRNgCmiUYQPCidi94BE",
  "key22": "4q5XAiyRmr65Wng1FRth3KNy9PRrX65eetGE6FfoxhYAKsT4kwHkEnsqCkoU75QTkekH7BoeYfyTKjmSSvukYR3P",
  "key23": "SwMZPqFNwqqwGPrsWp8RwniKfEmsTJTqGLfPjTMYBZQxuGrMeSHa5H6GsGa5jBMgx2aafYkj8uoCxa1vTpDLGjV",
  "key24": "3M6pCiDZHgBJqAGWd68kzXkEmiN741auLo8cBPg1FdEnwQk7BqrBxRDdUUiyRax57DgkwGbfSo7zsK4fvjwEv5d1",
  "key25": "5d7efzFgauiNwbo13RcU93ahx6SVTXNDobeHXH5QJasWaZbcmZfQ62FNjdEEtJjXZaKK6qnA8oSAXkfYRiMjaoeR",
  "key26": "VVGr4uENZ1nbkZ4yPBXgX1Pu18NJwF2MdYtDVYrsqf31eDuuu6WJc2afEwz4gtGLr2Ngy4KnYbvBKKbPAZpbkxH",
  "key27": "3Y3GEogquVcXmEWcopbjE7ViV9wvrTGfqPznapczyFvH2aAoTD81rNCoQ1TFgz2rVAnH7RYtbJYuV6Xs6DGXy8Wf",
  "key28": "5u2CHwhNMk1U6Lm3Ynx7bxYobXpJ2wJcDtFNeCQ8rTf2DN7VFu8JDQct8XfGCv8ELuq1FYsdmDookg8U8udqwPxr"
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
