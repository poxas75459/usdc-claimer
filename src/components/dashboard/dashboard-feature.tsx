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
    "3noXDitji7tyqamJ5iq13smbRrhi6McftoMTc9CsmuPj7FXdHdQaAuGSTR5VxaHA5ZvHNewzj5yw6TUUX4CPkeV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQ8CEqkfmRJqxVc3MRwqbRphPfiKTA36m1rDSrEcDExokhJ3YVvgtovS9yLJhoYYxvojFcygZEAsMaqJZ1p2hLY",
  "key1": "45a3JeRmWeXmTNkGwD1UjGooEJbVPaDDH985NKguk6tA6abL5RD3Qe5M2uwqZWy2jx1u1pY6s4akYWH9zRd7Hw9m",
  "key2": "5u2ead5HU6RiMUPUKjbmDA8QMPCLh21wmowLkJD91nGTJWVsRtCFPiCcRyZwvohQw5Jz3uB6iWHpRCEoiCEdm2ju",
  "key3": "NHEN2TretkYEU6Uwmjk14j5Pus6cNMb9V7AH6EFb6ba8erxaGdpstwZbL8rXBwbWJ5Skf17qGeagxPsWRorbFLo",
  "key4": "x8KFv9YpJABttKb6EwpPAuy6HLXxuCrnzV6SpNfMtVTcCT1ehdqfnmE3JWYVu4JLPwG8BbWMxKndCge8JYjXBwQ",
  "key5": "5q12ZTTf54DaKe1wis6v4oJjBo4ExiFkQ61VaZrkG9Y8dXTyRfwcJUUEJqgWT9fbbdZWEZBMBLVrJoy4ZtheUc5j",
  "key6": "5x33q5pneiP8SecvwNDvBhfsTNhUfaaCTsfyoWMVHm92FgzysDCv67z2aQccReQg5bjQpDaZwPMvaNWrLYtpeXH2",
  "key7": "4MUEfTWkhcykuQLh6YnNsXYP8DRpiww7SuzqCaJZrHdeMu3ozTfBJ4gSEcZCjRKEQQXggeoK5V3CD73XExEQCeMU",
  "key8": "3Ling4mSKiaiWXdDbYwx5YcyrcH11bt74hqoRhCsRjyLdnHthSRR4TVnf7dJKssaWssPPns4S2hWp5Mv6orkp5HY",
  "key9": "2NapbBdwjekh7JRPb1VPXW8d72jLHPC96QarZ5Te4wYqjVAdbrsG2yeourVkyAriE91iSPhX2rdGSUA6Sw3K3kDH",
  "key10": "2MJtVDXEXDpYYNsH35yJmcH2Ct2QZcYfwrpVMPhTxuCxLtMT33kMCAAFpjxDNMoU9hp8rTXLSsSYoJiQpNNdzuCf",
  "key11": "5nQRP4kTHQsTEDMk6cfJksTPQBzVQtCcopKuTUib71gjtU8Pgr9iWNzdHoki82wp2PB6iJYheftMRgAz4kXxhd99",
  "key12": "2P9gW2zajDsvoKpXzNT4d4wQPcXArQ3XTdEhoS4rhc7PNGSCCxVcUdvH7kGPsMXqvuay1nZa8oFM3cTUMwoRVLqR",
  "key13": "crmQjXoXQunmKESd9NJnbCL6hs1VV2X36bWPbmsSdNuMeXrzp7q2RzitXbaXxDrHNGhMt8CTmWKyU6s7zJ8vxt5",
  "key14": "5MizMm6T47WPQHga71w64mGptL8ZZFx8wywooEG97aXnSJpuDsJX4Zwt2AFrhPdR5uRY2296NU1dL6p6xuHCCkzi",
  "key15": "3DNj4V4LUxAcS3QgpCvMCVh2esCT5jS1XQBbW6xhgHfnt22RaxauKKHsbGHjHQF9Qj3jBvcnm3t1k9rj7erqpjSJ",
  "key16": "13PPdQANmSAJhpqg2KoUAXvGeJDz41w6pGsuq1igLdwxr69FkGsx1BpWxSF97qQsL6hwt3J9kTNPJZNSG1RnEdA",
  "key17": "2b6C3CRcbV7HnsYBdmqp8JXPrUY6hhxFgPb8Y7zQrdriTMPwHe1VyPqM3QrejYTm1eaVVxWKx2K73ebzt2E94gc5",
  "key18": "3qCyKr71NJYMJ6a4yAibesv3jSfb3aLXgB6X4AV5sQ3w2hpjxQVZDCaEQisqhpFTn6kPdR1GA9iGX9SsqxzXoFds",
  "key19": "39zFqCDkQ3U6wei9EHB4rLsGZxSraeHK1J43wfN59o5SQom2ZjPbgmXExaUTXM4dKMHjTNBEPkadDcm2JLGsLvmF",
  "key20": "2Nrs7KPjrH2wjSp56nEYrSf2y792pLEZfgv5wuwC6v8W3sXP9ADsLBftP5FdttPMfEc3s5Y4gnWduNwrgaArYgDp",
  "key21": "3JsMLREuydrsJxGRpbu65FaBZ6rZAhUVyzaE8JUR7oFRT2ioGwbNfCqYkYMGFgk7CszPV4QsymhM5DCbpAy1aSDC",
  "key22": "4i1psAg5pEQuAEB8JjFMToPBNWBmH8QmA9gj7XbjYwBmBPXdP4xHU6PWc63PJf4jf2LAy6DQMn6c9KSE5YMehbMq",
  "key23": "5tQS8soGfspecUDqrstuptuKirEUCNXbF3EZrKGRWmD8RAdNiwYZ76oshVrSJ4bpWKqFdpJQHmyPtQFfnfBCNdw7",
  "key24": "vQAa8WHUVGinr6WiCoY5TNNjbQJyNLoqio7Yw32nzryD1ZLcozs3vDDoBQXU4SmB9Ei7Tt6NKYEPcBMyMDQDs2R",
  "key25": "mETf9mGN4Jjsd53VsYpKScCWsxr7Cp3uS5RH9HnifR4zX4hPV7ud21zTtMtj75c9BatGrZvceaiT5z936FPAye8",
  "key26": "5v65dXfatGzbR4yqWGx7PdfHRUb5TRcKQFU5q4MvPjqkZGwCHyHFw5LCBJhFyG9QJ2WNf69Uo5dqpp1EvmPxoctH",
  "key27": "d1cR7DGCZGZt7BFgn6VBww39zXyzsyRFhMJW3WUTMtwZTqDiwu7BmTD4xEf2aAPSqmxSL7AhvuDWjSswJS8nFkx"
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
