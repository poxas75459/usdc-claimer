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
    "56d5wSEdoNuZeJCiiWHuV9kbaGwAfyZA6wEqt8cnL5nCMvFdP6ViX9dQMtYfnn53adDggzhwzSJ1Xg2KUU6fo5J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ak99W4RMtnDamZdNKWQp5hC9yqHTyvMfXmcKnT39aSvgLbyAJJNREm8sy9ybK83zgotEbWHUXmoBXTNR4ccCRYe",
  "key1": "xtrqkdJfQ8fRR8U2NiScAcuNTYALmj2GSWbXntZXzBJH6NSURKh1riLwb3UZu9qnm4snf3o4zkrVftb53t6BhaF",
  "key2": "33LAQqRRkoi7TJ2CoZKNEjmwGEnGN5vvwWCA1Urn2Zvbk2xFjJQhpWhTVcWJ6mG7WCFVk3ZfUxKZAPiggPRoZnrG",
  "key3": "MvN9rbcBvkAnYrvM7G1QRjYCHXvSksdh52u3eZ84yiMAaemRFNRufgojFZpKwdgDAzZdy5dihTEk2PEHsdNgri6",
  "key4": "2zgwKh8xvyLknvBuiZHcE9NaEqthDk8VnahNaniLzAniPDZmMdpoLfviqhDDUoecN19jKdGcFhCrekMqyLPVKqoG",
  "key5": "2LzthE9FkQjD5guzAbbGZtFqFRL9NJHBdydY6HdyUKiLm5sf7suUVmYCcnt5oydEGeU7oFLj2sU5qZ8MQbj6RMmR",
  "key6": "2iEeGLWTMKcZXLP4xPuuwQCVkqcVzTesUHsHCJUfufvheqgn7V4zHiJPCsj2cbqdxrxrLFBKFUHbweaDgGZk7mhy",
  "key7": "d1DtqsZG1inbh3cy46Jmc2rRdRV23dQ9AqacffKrZTDXEZgLdAjt3B9MPLT9r78Yu1QXsucQxJQFShdwtCn62GJ",
  "key8": "2W2BGZkCqxajrTcFM82bLRFV6eXyH4YLBrvMSc2yPAhuzWerktkxmiwrL3HhPCSNXw35Ab3mGoeqCUzEZMa3Xjff",
  "key9": "24u8zgiaYq6wTZKutQkS12Lj7pR9Uobh38V9t5fHCHD2h4nVgwrVy1VEzibsYgjYhHJbWgfdam37wVMN36nZBZpj",
  "key10": "31rEVm592gXxpf5tLdFN6EX7pBVh3bhSBU7yEXg73x94xPqeE6vnrNkhPz8c3HM2SAp7cuhgP59zsDFqTfra5kvJ",
  "key11": "4RDDhMHdu7Eec6HALc1Ci7wZZgCHhuv5RSLmunD2Ev86AcXJtWJCuHLhLAmFRp6hET5cnQe2LszGyBqA5aC494SQ",
  "key12": "4ZMWYgqUfMryaVogJc4zSL9pFprCQDotaeEA9FYwRsiCxP5YkaziftqzoHUZLUbZCpeBEpJpxXFEzu4JdH9mSKmE",
  "key13": "2ddfEewtpXgkfZDbkNNYv4NZvTm2ZMVpfZ7oV3L5j6wNesMw6RD2U2YM7rwfa1f8zeBpMK1P2SJieZS3pkXeKf1c",
  "key14": "4U5omZSjA8ru5ZkDkywpY3SR8rja696BBU6feN4MA94UGYhL19rXNEhxqY3QbYen875AVCYb7KFWhxKgJz8PtJCt",
  "key15": "44xGQTjdc9RLKczdPJBc37LeXSZRgjxynY2J17qZd66JzhH1bMTGqGac4HbRjKJfPEFSKUaXH9NdYpdNbj992WBb",
  "key16": "1zQmcEA1SxgBA8NH9HnrzkSW478kUHAeVAVfBvLKcdNRmhJbpVjFxrmQKrPoUitvYuVgUgPMz5AQjgfBRVtQX7H",
  "key17": "37LEfAn1yhB7jTEPPzNvshWzNb91hAkGezqtT6wrWwNrusTmcTwFSYtccqCzNJ5YFqRkz8ek9SYSDvdx4rjERM5h",
  "key18": "3aQvGUddgPynFZkjXenMCrvEFgBXbVJqKwzxa4zzbWbVXmheFhjx6YC4jsJKqQ7wzhqXeZgQbXKUBGTm3re9A1DT",
  "key19": "5h7KkuXG3d3yjZAgzrxZA8BRcQ5Yux5udQeotc1nWqZMdSn1gaDnYUF1n1gkQ2EiFmK7wb4CfD7dKmpSTYqzySpY",
  "key20": "5HDCECCfhtuUnivapERthLmKSiKbpvRUqyYVQm4kNSkfr8EdArXRFjJRbiShs9zRcvM67z5GwGf22fHci4GnxEj1",
  "key21": "qfA7CN2HwGKW5fHTjcbnfDkmJeTNdb6G4QGhJ6TorFcpF6wEoVeyw4z7Y9unCYCbYPSshjhSVqcSbzcgGqHfHU2",
  "key22": "4cvriM6Bj9wHdztSVRCE3x5FHZ96f42FojkRKoQdAM8NruU1ufn6L7i9yovAx4bLBfqDuWSjo1F6zmmYr2jiCoK3",
  "key23": "mverxH33XtLDJGd2H3uqtyhtxCoEASs5iRF1hCTobdVnaDwRNW1RLHXwy1mMKu4KmQfj1XRFQGJoqaU7wuhTL93",
  "key24": "25dgbSEZV2Zw6H5YsvXBBD386YoSSXF7D2mfyCFcqqzBLSMTnPLzRz8gUZRttuMg51gwm24i8kQgDDmgtwc2wgEp",
  "key25": "3t7tRZACnEcaHt37zzRwd9x9jwb6TR8tv6bzCCxfdvnY1YSopzPfWk49bF8BVa9jBYL8CB3wqY5JdpNMwGgNWws5",
  "key26": "2QDhqZurM7xKLV84CZqcDkY5KmGjmyVcPHWf6T4kCydEQXxN5p4jSzEdHUQFxyREmdymGe1Hnu9JWpunbgveT8yr",
  "key27": "5QYgudjWAMYqRZpEDVLgm4zn67o4SHWfLZogyE22bvcGrNR6N5tUxVopTzvybj94ShxZZKHiXSJ3sYBAHyDwuVFF",
  "key28": "2tz5n9AXajx8pKmFwfhtrWRYDKZdcCd5MGrT1rtcq5GYg6pSQb3oPp9LN5fsg9C6NSJyEtpjELyJGLF9KWYMkJAK",
  "key29": "5YcbWCFBvWq1gxtiQNt3bQokAorNoqp3t95DA72fihXdaEGzMtDuM9DRDeKVmzpxF2u3itiw739FVT4d7huoCMHV",
  "key30": "4keJ7F7zUdogBr8siJr1S4QBWxUf14pmseBeW47zXTTMxH5fDZkoWrgXHMdFZ2xNhu8wDNy3DVuX4C4FrCxk3Z9g",
  "key31": "4D79cMjooZ14xQmLbsGA7P318t97VTo2SeoeYFbEvyFJx5BmzsNhwwoWKFqseE9Nk6G5pqzqRcpnFHD2exzsL8MK",
  "key32": "2SoxnjZF17SLBeSqFKJQRHNfogoKt5njc5pni9f5c9V59USTQwuGgMe1iyKMTymgbjdEMymS6TC5b6DzWvc9eYx",
  "key33": "4nGFmmWtrMCtfJyVhsh97BK9Yfh7XQDUbiTn2yGfmc7ZxYiGCiGbVhuAguFD3aCA5jbCrP9DXrPbhY9CDzQnUjYJ",
  "key34": "2WnDWZyycSWbDXoLL1c9Mi9amDnRAMRbnNQfRQ7GXfv9HeETQHYSqhHsdJVEa7S1znwjZSQHwqqS3NhGUz7Cx12J",
  "key35": "5zqpkhfNLP5HfppHJ3jiCcobyxE9Dxujaq3JjVFxAu6qdnwa5ww4cCYvj1XEgtKDpBFV8pSpZiqKXQHgfbSMZYSQ"
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
