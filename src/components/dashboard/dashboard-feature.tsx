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
    "E3ynvNcKyxqzKU582w4stsjSqV7hGDSQHpUb7h4AbHz4oQHSw3HcfeT9Jjs7FDK2f5ECEdy2iJr36JFDAXdmWjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39WvzbcBX2qTzyrNjdFE5v7VNuToKRWvYkWyU74CiMZW2PNtinvWSB2orKZr5buxUSznb9GuZcV9kbuonQSdn67o",
  "key1": "4gRpRMQnGD7M4LwpNQAKtTaApkyUiTkuTJUvXY8XGP3LtQSEuCJunJ4PeqdPwnxbmoPnQdbnRsYeHcV1Nw3sPj2Q",
  "key2": "gSk7ucpZFX8We7KKiPuQb1L57h5w62cL9y7EG7NpxVHY1o2d5Evor9UBwcvVmoPeEFVEKgBDLosTCMFat8wNRcW",
  "key3": "UmSuVozgj1B1dN6o3UPRHCTe81hWnPVVBXLgn9PVCSCJgQrJRTZ2rLm26NHepAa8SvQdafCopLPQEPKHpkZCRvK",
  "key4": "57hUrsugGqY2Wo65jchdZYiHkhXBiimM44SjNhxdtJ5CRNLCQ3uPYtqWVi13mbPAbPTT6EKMzNgY5EAcB4aRFMdL",
  "key5": "pUCWuEjhSH9nDxF8bqLwdyfD6qpXoqt8wNScbon3iFGWBoWAKkwDoo1wZwxYo59u4W9dw1EyvPN4a1ZmHx6yVXi",
  "key6": "2WRFD1MMCMCBmMv4VKdhjo4wZNHfyeoTE8JmcKCbnqEQrBMycvGspBbJnuPLjvwECLNkgSLJEomH6hLKp33ne5N1",
  "key7": "36LJzLWQYGCqEhGA2hgFzVpgNXs8FUcQzjUNPpjHrKLEXRyXPDXi6BQ7dx3ifJcAgkz24C2xGz5dqZFmWSLd5kWC",
  "key8": "4ftEyrfZPkQDaSs9ncxYMemK8XyYvHv4P7Fm9NKnU3iuKcN3goZuPDEKyaehNhdpwo4poQnvjgGz2fDp5G8viSKs",
  "key9": "3kzJAg2SuC6Fbg8UqqadGiNLKL79UPje31VoSWeK1jnqhdUYVZhYo7f8ym3gFVjswpE2aTGr8BqLR3Vkpk4BnQbT",
  "key10": "2uuBDx5Y5eg4iNGf2D7PAnDJmpHpF4qF8fSmVnT3odvMoXgKFR59UzEg7LEbctYmSJrjVS3eWJ2WWLZa8Vsrqqwo",
  "key11": "3rXdNKAfReJ1tkZ9Bxwt2LbUNoUbz7Poq3y2CFfK2W2jCkUp4TZp24n8cuDvdoDAz9JA5nNjm1Gbhj6hsSgt8hAu",
  "key12": "65uqpmdwCHVLQLneC5Q4kCsBdsg1hVsSZcbxYjLchhSeZa9QqV63Qc7m7tM2VZVvKCPkSjztKkzyr5n8e42b52SS",
  "key13": "2fzFKPffLgm83gRX7J5CiS5Us7HiTguJatw1JwQLSHZRAXr17G9empvKyxp14CRGo7pTbhQ76bVaGiam8C2vvahj",
  "key14": "4aKvEcXhZ7ZxfTbU7LG6WUusmSffn49AkE4hmJ2t8tFQKQqvHsWtUzZ9XfRwQxD4ajyjbQVBY7TQUEYza8ndXvpu",
  "key15": "2ZUsH6aMDH9UZUUK7AeN6jmcJZKKp8hg2zJoaJtWgWVPDKQkHC6nydHVp8rmxSyz4Rdj6R1BR67NwiSojLMYb8xp",
  "key16": "4Jkb8iVKT4mXF25LWPrC3QdUn5FvssMWvDrFaWcuCfMgJC8GrqmCvFGQLfApWQ71y3FyTijANjAyUYXeUPgHQzjv",
  "key17": "4UFQQSh9UXUnLd3877nLTpAG8LgBTYLLymxB9QrWKUtPvVCqyYN8ss38EWNLJ8AACh8Bqk3g5FmQYiCp4T9mBHp1",
  "key18": "DGL78GNRpGKnv3s9mGChRej9dMRP7huVxyewyT1zRinTUXGZQspePB69BeE92jr5daHHCnrZ7SmNQD2EUbsSiD6",
  "key19": "14T4aXHjcWxvhgDE1JYkvUeW6uHbd16m7Cyd5LFbRZQLixFBXqsPZWvUuSLDy1XraMmzYjRRRxVK257HLTE8vrv",
  "key20": "221bjxyGcHLcQ5bPVFZ2p5UCoUf8Qv4xdDAPCHHPMj1Wxr7hZRmz92wrJYzv759k4R1YjLhW3f6DzH5KSTqNJSCA",
  "key21": "2wc2W3nsxDJqjHDt7ZyrERbd2KTu4ScVrsekAHLbUUEkFCMBBrWrZC3VcWjwB8HcLz4GdmyR6FfSKkroNZFwwZSF",
  "key22": "53pTwTeKPVWduJ1UReKaAozCcHAhibvPKBRZEomV6QSWA1C3jBxPHgjLiEpZ2wGF9eQDwAWSmQcsk9eDjur7y6CD",
  "key23": "3iioqXak3DgFUHrB2p2FpW9TqvAw26q4Zts1bGTkz8GZq4ZzoTANc87CVuk4LUCN1pB9fimXRW8UkL3uHTeDbFMn",
  "key24": "JvZKWuJ7s6bQ2q1fTBZi4qJeccESGPwnzYTm91sCkZLX31K4AfaM7iurqBWVPM1qRf5ZuAXG4MsrJUCekHhFy4j",
  "key25": "3JEp3qDctkyjXKuzZzJuV9Bq1Eyntjc971nT6VwBREVJDc4ALNvNvNUYHdcZHjdiD1iGepjLdRFGJbP7kyLyuAeL",
  "key26": "3jSmRmPq2pcD6inPCxkaHtRp7kEh5S9sRhjECX47vpibtVdqn35Js9kiQVh6a5Pw4hWFb8MJ6VzNadPmgdYAS5nK",
  "key27": "BCXr5z5uGWDTQrUfUFYrX4LQxnUNEob19oxYTcJQb4pS6FXK6Bo9a1nMH3d2QzvVrqrWcCPPFbEk3VhK4RkNoc2",
  "key28": "3cdrfXqKdjbJBXsy8E5S8wE8Rpq35mY7Eq1EkpuYZJAJRNZpSBK5Ud2vpD8oBPUY4qyBtXehAmRJS82pmkHgFh24",
  "key29": "26hkp3dTy6t6aTzVHm2TNEq25jN8cnHD6DSoxYMhke4XZMyLq6uzwgaA4Q2bXSuYHFxHdbGS6FLoUYKEMhyf2C4B",
  "key30": "5jKt1RDdHKX1eQAqZ1inu5s4pbi3KcZgqHQG2JMJRzbYBWQAvjT22nYhddTE2aRFJcgpr1cvvYTuZhNyuxU4wdGf",
  "key31": "tm8FZLktv2bNJCjVDLqTmJJuxh5tF6FgG7ziagsXC4XeuZk7C4QNogBqQPvhanULZVUyjcR1gXwGmH6HyxeQJwb",
  "key32": "4HctKoMPbQQbegoxqgNVo3TzbiC9rdUrp7Y7ioEqWkKtP7517z9MuUvjBxvsx6f2XYki1fD47w1aAU2ymKHbm4Q9",
  "key33": "NbiPpxvbPprdm4GAJLZGq6XN97j7aqQNJacddbqVsUB7hfHqtENerobixQiEhGmMLzKdWcLVoh3gK5bCmmEhkXN",
  "key34": "3WYUZpxVvfmKkMGu7UxikFixuHfzeC5A1aMFo2oPM1oSSDCfnURHi8TMKb2GKdKEGiSjnnpNokBGYsguNUSrrAMW",
  "key35": "2eGykKQ5MuzLLtSn7TxNwgXQZmzJDn7DwATmXPztSwvg2krFchyAhv2dttmdZYFsHd839JY2FsMoiLQvVswNU3SL",
  "key36": "5gFWi75nKyoVS34JrF2EFLDLnwchS3CEPR8zVdM5FeMpb2NdewVTtkFVrBBXXNGVSABZ95tX21arPNzBGffYJXST",
  "key37": "4YJrMsRsBuNXLni7UAU4C9R1AuxbxXv7ceNbHLb2CwXQGAqvD5gWQWkvWoz8f8BDrwtr32ifeZKAvvneLfiKpwWN",
  "key38": "VNc5An8XMxmGbAp4FiLjo6m3gZBxXcpvV9ANUjrrLoiZVHjs2KzH9HSgxA1BYewajVrpNb1se4Udrcbxe5r3cp8",
  "key39": "4pMZEKz2iFfkLzZ66RqreYeMMVohWGhmvzsXrkky5dBFDeKkRDCjRFUpQsri1R7TGGAzgnMJhuQUwG78TfzgTDMr",
  "key40": "4d35pb9wZm2Vczzm4sBMHYZ4i2khar3CCiqTPh8Gme17gtXoWKxhNUur9vLJScLtxAcTTfxPb6CNyQJqvzpn2TkY",
  "key41": "MCc9RVhjtkRmR5PpX3XrV4rKo31VtrYgotKLp411DfqWp5f781ngPoFChz1NUQu1Vbis7U2LHUeNpvSuuu3rkDE"
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
