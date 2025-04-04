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
    "238BccywnLLMQL6EB9be3Kam2gvfiGEvQTJXLNmz5wERC4TvE12J5U765CRQktn5PkwX1tLzDEMAxiuL4DQSxG2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6Q2WNt3SMX5BYhBLFYHv8XnFRmmCE2reKsg2ah8VoEP3ptQ9mxVwkmXSVtFcuVi1KRhJ767N3zrgYn5qgycdcN",
  "key1": "5JGX6abuFeox898GCHXbTPSEm5omJRHWg9M8Pb8F4RECd3xPDNhiix4KG27HneXeBS8zRgUzoL5uVxkxFK2xpveA",
  "key2": "3rKBMS7GQ9gfxvusEfpSFLRVabjAVykG3TBqU7KrfGkyCfgmtYALKfpWpyCG9xCQ1pMEx9cJsEDtaZo1tumaPF88",
  "key3": "QpMHzkRrY6iRpuQettmwi4pQqteU98Pw1MUPp6SN3yJVYJTwvPss73sXUkryZzMcfnGThLQAZ4wX6DSg3QMEEFN",
  "key4": "CpGb6gYBCrAbGpRCdztDu889QwP29ezmFQQhkLKn5uS9hZ2eWWjFP9XZWG54mQ7Q4y1fgpbMnr65xnQtp2Drcxy",
  "key5": "2vNE5j6MdRD1qWt1Pgp9K9uAt6o8EeK8WByX4Xfg1se3SL9c9jzAaHvwjq8Qq2ixDSmH6jyb1Y6mvDTn179FeNbT",
  "key6": "3YBh3RUzRXRwCvjsenwC2Lo1ZBqq3rpxvS3Py6uN4Edhhu1AVaCicpA66x9B5jjBhZGtAUrKgqXAcbhZh9rHRDGG",
  "key7": "3oX44sR19CDRe7EJfuj2FopLc1LZ9nw8nsBTAbmervWvs1HceTX9CwKQ5FQFDButs3uJXdzBsm7EztJNFBZZ55MG",
  "key8": "9jGoNqYzPZDbpaKM1tu3fkyTqjs12rXPoZ4P3FujVDhQvj3Aiy1Vmc4tTXZiny3UFFU6kc65Az9h82dsXTR1BhM",
  "key9": "5Xy23tecuoqDy7xqC1AVdr2f5RWox23AHjJCRgoSU7aZRFqN9THsHnsCs3xSPSpcvBxJP8VX8VzLojwzoAYTroYH",
  "key10": "576vvXxkPnhdqeCLXJCRbJVDUfTCewp3UM24bDXkxEybqMkyjmGibfwj6bxmHHwjzY4nE68iTAjJ5jFGVUnPqXR2",
  "key11": "3gzVZfSJFwk9dhkN5kiB2pZc7QFLumU5fSQbEontBDbFAYn4jbstSJj9f1pxvC4rQNDVZRNo78NyZowvsCtTJHz6",
  "key12": "UFiqiiaCjNJiE6njj8FnDBh9GqXBpE3stEPR3NoR9U1rGEPjGSqNdBrxWyW8c1qsQEQepwbtVA3oiG5aBbnHg8J",
  "key13": "67oD13H6inrem45bC3Ac2mjKxevej2TL74DjZk8aocpnBBPBaYsFbz8TF772LSS63cFM5r3tSze1Cnbaeo91sbCY",
  "key14": "25MG7wpdGmWNVXkYh96JKk4BWmAt69qxxvTJgRv8sBwdkghFPQnTWRYsqLQtvwYXAo3HA2G1ynZ9MtLpL7ZRp4cA",
  "key15": "4B4mRcwG3Cecan6gBtHba412KqWs3u5QjrCrfaxwexsd4fWJGcCA679hT3cgX7wgxAFQLDVqdaDoGr3W6jLkbJaA",
  "key16": "3LHpEj7x9HSxFssmDaPb7z8Xpm9Q7C6RJkj4Z78GmKsz2Lrq7JQVpqdhLB847Ln8BfUrsVTXxCi29hKnNr71EgXm",
  "key17": "TKNarJzEtJSfkejwrjv59Q5UeRfEtKwQy1PRcMvNCDUJSpiXQgpJThoANkNLPvZF9SvTWtVBfRnq26egzYk7kod",
  "key18": "2A3gievLHzwuUEKZBmku3qCvtkkybWLBeaN2GjAv4C8LVcBhgtx5dsfjzTXYDqPbY4N6PkrQV615AV5ytLACr9sA",
  "key19": "4NiWo8dJLZgJbiEfnhyGbU9LZadMDb2mmK45QeqJFyfz7mAzGXfnc4xHPBopCJ6ZUwr9u3B8aAeY7S8LRAQqT6dT",
  "key20": "3dvitYyNdciKuea6ivxC81S8DgHH6Q6VGGoMTynQHh5GVx6QTuMKsi82BNyMa1LD4aMUhxJACy6iujmsWhVjxMjx",
  "key21": "5ANb69SAScMq85A1X2QnRWAis1HqhDF9U2hd1zxLNhvuEpA8zbhdQ9Z92WX4b2JtN8PQV1Sb9Y4Bz4pm2Tky55EE",
  "key22": "4LhwV4SpPtygUy6UiNaMqXJ8yBbD8NcpBG4ftyDqqGqvZ9CUESCBBnZbdCPFYM6U1XKQuFMvuycriX2nCwsm1M6h",
  "key23": "UHBSH8SocFan87FQCxU3Ba1njNMRrCycjJevH67unH9iz3FRK6Emp4SgNJAPQHi9Tz2uqam2frnsJCap541KGH4",
  "key24": "5ZrCe5VojNLwxXxKWeT5R65J8LL73nqq41sbpaZv2VFQT1egwkMkPXFQTMJdUggPZxmP2dGsoh5wsmbZz9ZLE42U",
  "key25": "SPTSMJAkdaXoUKTmuWy9c8WqjwfDMQ8mA2SCfA49eVgEKuY4Fm7szm6kYH3H3EU92fE3CBKu9qjoJ9JcfcSV1hC",
  "key26": "3ZJem2CieMB9K9g56wFDSUQDv8n2CUQmqo5AoorVEeU6m3HSzCx1oM7cDoDfaSjnxuV8WwDoUG7QuAWZhvkWPKm4",
  "key27": "TQEXcHi65bBNjmKD59HTNpuTFkbS22UL7JDsGzFenVSnRmkUs11RX9JhmrDdnyjYJS448XcWq8XLCsFpiSFY6Hj",
  "key28": "3P8ADqnXM195obiFN3EYkwxhQQxcZeNECgAtVw7ZV4zEMu4Uz2FbdqXErp1EPnSD2pbf2DKPAtJgUoqwHZq8xsqY",
  "key29": "3S14D6muM2RJDgXu9qjsCpLop5x1oCg3yfjzCYPMynNvPNcVkJEnCHZeWbrMC94KRPGLZMG57tAJf2H2JMGZLsDZ",
  "key30": "4hAEWKKj9AwWLyHFe77jje4fRc3ErvtSm58ACbkUsHT7fXxsz66SFt4V7SRv9qZZAS5qYE5RXryEVwM5HNikRMg",
  "key31": "3pjJQ2SvuLPz8C5Lz1opWfxnRHDAgKHTA2xjEPNYgeMEhWdGbEzWVQS4xGKksBg6x3mcuYqm3YY5uPwr5MCFFf6a",
  "key32": "4YWrjTYqaWPVhKYFBSmkjjuyevRDMbKZatbrb2mcDGBgBcyrEjfABPXVyAdhHGq5DsNNjhktf2oHXt4ronZqiicg",
  "key33": "5aY98k6qDJmBhNGPCC157TSJunTFh4e1bVYQ63T9utAm7U86zHZwKMU9Ha2Q5ZLwwoKnQUKgebeEyE4XHvjy2VDn",
  "key34": "3M3rv7JUNbJ6hArg9e3pzwUU8xuK1K8BWRdgpTR2TN2347wsE4Ts8eNdRYi8GnuKeEH5s3LDmuCwvhShhE3Wey5x",
  "key35": "3o5ogy4KSt3KWUPJoP1iLCDcYzac7u6VFj3x3CMqk41gXZCepWz95HBsXc8CDQoNKzm6n4FFCb9K4QfwWfYPrWig",
  "key36": "3W6F54fQTDJKsnBsc9oKevyDNRMVju3Peo5RiTBadN8uJ3gKeEsecwwuiAYHuAhb233gpfgo8VAytraEkwXdBURU"
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
