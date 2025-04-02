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
    "4EoyFhGUW8rfMyzDvVhaPHN75nQvsiX9MXTNXTTx5ePJaqm13bx2TFtWhaKy463S4cKV2TmZ5ztviRnLyL5zCXB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqWYks8pkjNybFVhLRHfR94YnpTzGdxnF68Z6TMTTaQ77Ds7Y5VfXwrpfpWaLmdswQ9SwRtAzQawW4cTLV8Jf6E",
  "key1": "p4aTTovo9aiaTa1T75wpAa3mKHvtBXvCMCDNA3GABDLA4p4xVdDbpocu9RTZVxGTHDwmeddDpK15Sx8mmu4rXRD",
  "key2": "4ZWaV9LcrWtcreNW1rMvD7uhReD8NiysXpQuvzfiDhPcFUdbjZEW9WNevaRGmiMSsLE3xZzXB474pF4sFWSCijzR",
  "key3": "eTaXWxptQT4a2wWBRgB7yKurps2xwQqXLjJJrAf7LexpvZt4f7sk2RJLbE1APibxrcRL6ZeLnWgxdmdLMTFTZX6",
  "key4": "4JbybiRVm7owU1VQYVaxEvBRWbApVwc9T9H4wLeQ2esAM24fZeWFbX5RUJfUfZAY9PJTrLjJ5tK8Rekpsp7wKwSv",
  "key5": "2W7MUMdWJiD71jAxk6do5pPbiCMqZce91YorpVPoqS3q3stGwjHAuK81pH8USanwuzNM9VzPdkSo18fgj2v16yec",
  "key6": "57sv58cFu25DGNNThJSZA4amUSrVYEFkY12KE14EJP8eLqDDuxxxBeQgpVZmCmvuXUzyV1CBTLQZ6eN9vDfH91eY",
  "key7": "AxQB2asN4YfLkhs8NgmZ111KjPcSmkwgzHzmoKyr9BPmhofaKFjszAQspSLDuYCm2PfZ9Smts8n3dbuwf4TfG1W",
  "key8": "3LNNGUZJUCHFpD42hdeGYu7Sk2bJCmUrr3cLRk6N3aN2J3w6Rh8rTERfzKdxwRML3nncDLuCKEyPgAoF7jRFzNHE",
  "key9": "5H9B1T7uzv4weeNMEkWP4tmdj14eEbHEKZ2otdWPWWYqa4BKhSr5MuQkhz9gpgo6t9jo6ZnGcZH4i5kvkJTG4VjD",
  "key10": "brSNUv3mykAyhpVuXTsyjFMtmHsKWByuLecwGsLdJ96YsEK4GTgEwswRHAP3jFxSAAmt2aJmRxTKftCf8PZbVuJ",
  "key11": "51MMabi6XnWZ2Ry6LgvvqW22wiq3fGAx6FcCB6oyoUsNWEMTcw2R6wWSotZTrTEvBpkbxV3vwpmR78JUqjUxSy5h",
  "key12": "2vRjVzoYZ6tEL3DjH2bBHkypvUwnintHwYbt9pcqyJeUFDMw3pQCBSztUEKRjZP1vBUk8bHhtvEGvLuGiMdGbJEQ",
  "key13": "32MSzcyD1hGxCgEXrWDQPxNYUSSJZp7Qfo71bTqRgxV6mPbx1srSjgPXhk6sLLVT9uxD6j7eDhkTbKcvVUJHCxWW",
  "key14": "gn3fFuUe2C5jT4FJWg26Vrtvynp2RURfnPjPZK1LHBgCufVLYR8r6G6ZdF7KDM9srhMyoaA1Zdh4KVpYcGdQaj4",
  "key15": "5KhBEZmELJ7UgZTriNH8WJ7xY2UE7QaTQXhmT61uNyqg7fjDPQ9EPb6zhw6796wQwhevCAFqPdAPZBXR2GZo9S5T",
  "key16": "46uTrTG2XT1hk9iC7fAjdmaqvHWhasvnmghUjE4Ay25jCuK87Dvn7vmvgohii9moJZHSvHKZvhXp5zhxrw4c9axV",
  "key17": "5ndVR1sFhfeVXZnDnLHTzusyJU8x61gApE8n5tCx4JNi5iVHAAz3bq7uh4w7GM8a3ePWaNSe4x9tt7kr5WkhgjEq",
  "key18": "9AMRTJ2aqWwR3ug7SFAbMLeb7iRt9iaKnr65fUVbBYRHMHMBXWhfnUQ9obgZGKPDQ88QcMiQthMxdDG6kRPgA2P",
  "key19": "bJV9nMGWx86111M2EQPNDt7keTRuPTcA2xqP7ZQnuixeUUkBZqmjg94ubkALPsMfwGW6txzyAUVtJyi1Q5FeRTX",
  "key20": "GJaiUVu1i7JDRL8fRLCj8H8Q95ptpPSPCYsKRzhdfoWEbHnkC4d6Jmn5788nMbedPo8f7FQ78RX85bJ82eGxz2J",
  "key21": "5dawCaiyfd2rQAKvPeXAHLuwJu8Rish9hEvs3ZS3BD7VU4J3wgGrmkywfPuLvHbjbbu1wrJZ7oszsr47Fivyg5JC",
  "key22": "3CWrm6crC5C5gNdKxe8D1yKG5tM1RkBLWoquseNRxaJri1JWe3x3hPnpLHt4sTBRPwWVoHCfaUHyTuvCfRb2Dnjh",
  "key23": "2NqM8F3hK8ub4Xwyp1Rq6XuGEiSAfJHERwgXinUs35zVEK2MDc5LoVpNeCSax5gnRneSArB3mnXLYyDczqyS6KPu",
  "key24": "5CjwYAsbtK6W3dtWwy73SHzXSCAs4y4R74y4S95YrMh7X5Z3mWoz2212yMXamYQPzXXwEhJnDGDWYm25V5Fttpsp",
  "key25": "5StXFGPt8WsZfWLexH8te9GUxyuQ28JcSny3pnH82M1h64mFJuR6Fup48whmZKt6gSgKtEdiuMzNMwnrbQfJUrZD",
  "key26": "64oD7uf6gGt49fFuVGzqqGPLjR7f8Mn9UqMszziJhApUKTEXVkcs2We6xfPXVhmkWDrGYHsjnY4z42D2QmMDtn3b",
  "key27": "evMPkbUQQpjzk55rWqPpKFJv1ptonHVKVQUf1Em32FfbFwSDBTY6XEXQTDXuQQtnPaJwzpDPYfofFbgQtsEJi18"
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
