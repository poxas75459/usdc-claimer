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
    "2TSBxrNdPDWwAP1c7KS8RZHiMuJ33mVgSebbusxZQ84Crpv5zSJy85dodZGoQ8DhsG7qgSmSmWgsp3fn3UQPu9Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNREW5mvHcVxjWtuCvKeBNBqKAJtgPho6kkZghmWgAGrEhfmFHabCLf2pniwxj7S6bCvS4rVGFkG7Bj4ZT1QxPF",
  "key1": "ujXQ9g7xZiWJc18938AjMHtFG1H7PNcG2ApuuntJ1K1zwKzBkxQ4fV4SfcV39R4N3AstQD6r3x65YHP5F496gNG",
  "key2": "4BbhCjmjsPCK2Ccxzs78Tn1D7SpFwSK5EybE628FdbFusQidDTg5PcaRJytuLv4SYFDUXvMtF4HAmjrxivmNTetb",
  "key3": "48Fe9V4g6BL58hRJsdxHHZzHmy9ccykxy2AKSULGWnaMWFfCaSQaZ2wjRTifDPaxwot5WAab5v7AaZbEfH1d5KuM",
  "key4": "4seFgcLAdkiB1zDWXwh7fvQcoAJtnvnm2iuq7QTu7vErnie9CWgBe18nQpL3x7sHWGsk9ceybCDAVyUJ4NnpSvdQ",
  "key5": "43PtDikZy5uDW3F92R3f363127w9sjcujoohq8ixKSM1Yz1kwQRZUzaQA2VZujX5PgK1SMwWXHLMqQyVHaVDwAcC",
  "key6": "5nj66oCHJ98CN4z37wDqyknSbh3fVZwsVeedKjhZW1spDpg4hFG2kga7Wj1TFmFyYy1ueyS8oJonyyWJjQS9rJSA",
  "key7": "3jdCBdphusMSxKqqwAcN43oMix6hBwGZ3pz3KAm9F3LWG5krQkohRWhJjLEenKpyfCnqSwYunyCrojjb3LDh5Mxt",
  "key8": "wY9WqRHdVuEV7X3i4VttU6Whq5fKeoAMti2K5841Go5snbQ8M9eBXueyEL93MtfXChLAFtFb7y9sx7eH3sPQjRn",
  "key9": "129kHgWLAnFSbqCeKhAhNppxchU3X9MQtAxMq8Ubb8hCUwLQRsDb5gzdvhSUXo94ZW87YCgfm93tdozKw7spbqfW",
  "key10": "4TdVgFFpHswmQJicyWg81KgfTd7xpkV4EgVEB5WspQok6P4LgmRbfNRQiTeTbNnNBciRCmZ8NFtnBp2mwdzkNMXX",
  "key11": "47VvTUbu1WpKcNJCmGau4HBi44koN5aa62zB2AMyWiSiYbv7KEAZepZeGndbuM8V75AV9Ht9DTg533ZhozPr8a9z",
  "key12": "46f5FscBFVAtYyMe5zENuc5DXeNwB1bRKFU4tMYV4nRM2T2L4GVa39bofVnEqpNXaw46kFPtwFAuszVVGZSG2az5",
  "key13": "3UvRzuFpDotEXwXkCWU2RLF9BPWBB7oQtwuWkXZjLWAfosezS7rqfoUHj9ZpowwdmNtcRFmdnfYdtFaXLDnBnncy",
  "key14": "HTquxyBmpaVnmMnNb8ayPGh6Rz3tgPz6NBXq1cUnUrxhGDvrteBwLeFTo9JQLiavostwHo3c158j6fAqXHTuMQB",
  "key15": "4nTXaRHiS6Eex9pNu62UXVj4d8eq7VccimzDTK6UTUCy98AwZ3zXdExr4QRG19C1NNHymcFRrT4hoPJW7pSAeMeh",
  "key16": "2yjvjG5Sxoff65H97muCcRVDEiynGWrCAeSTepnDGn34ywWTY1z42KM58PTH2BSHX8YZtygtF7smvD9Sjib9KTQv",
  "key17": "3uNhruyL8926Dvr3Qve7ZSpF7d8W1P2vbYMGBtDjRqsfPyLhQpdsyAYP55PqM1wXeu6dMByWTqWvTmZzYEh3Myc8",
  "key18": "2yEJHm3nEiYJYFoozHH5gQKWqssjvA832dd7rvivqiA8w2ddT9LmYcnqgRouNbAbJVzdZ7dWBBJdnn6kZrS7qyHA",
  "key19": "2BEyEajc7EXuqhuK2tmk5xvyEJ7zpFjAgdPqpLk2x7oGdrM64VaRAvvNaBghtPZNbhNBfQspfZjurJzPjmGhKKb9",
  "key20": "3Aavtigj688nM1yomqCPwsNjwJF62PJXNLUMxmAh94TEcR3wx349uq6ouE1GKFntidjQJpnJamPNRVJdDkxzxgqD",
  "key21": "4zr5rtXTr6nhLuJZ6S8rGkMPoDWu1Nntpg889as6pqqxtaSpByWLX12B9CvcJ4PCczG5fjNHtxkceJesoMd7s9zo",
  "key22": "3hXNAFqhPb6umfNTQSFCFrjabihyJLbsx61FcBK3KmPQTy1epnoDHy8tnm6Eo4s2FT8xBft16TV4JzVpJgpwngQe",
  "key23": "wSZmF7wgZ47CsaoquXZsucMsucQYdtfvnhm1mBTgpeZ1DpC8PrCKc1WrV77uHdnY5mC3nPPsdW1cqqn4pkhbPP3",
  "key24": "4nZvc7rmykjXvxuiRnSgxuaYE9fq9SJkavQzhtAZVG6CqyZD5eRcgZ2fxCTi9WUW972qjsQAHavLcfXtN9WbfN46",
  "key25": "5wT2fJYhTn6BBAMKLPMRdNCEgD3cDk1L81GLaWzU4xjgodpz6TVJTKQo9vtHqsNdVSWt2X1FkWvnpFRYwKet1HMp",
  "key26": "26WmtcuxCE8e75nBZgZhqBLNwE8SQoSMM8U4iugsdkBpxhawPLdqeK8xqhtRccUZDi9qdNsUNXg75MNq1dVExG5o",
  "key27": "5PoND29H4vdZN1SAeNQCxLFu2sHN9hQt4bY2zPmd8EmQazHuLapNr2wrHmXueLQHCWwdgt2xFjUScupsFR71y8hv",
  "key28": "45GLQhTwoJUoz2ZvMKoghXhTSdCVdogg8CLWt6wjqEmxrJ4L6DYVwNAnN7A8xaLEYjE4D6YUsGtvtsjvmhTJP9tF",
  "key29": "4QLux4dqmrqfBwCvismdqG4vm7CiWRkKZo4Vpc21rFzWtzyb78TcmSNVRZazrUfVPwXMPaWAoZjXeAQU54J9PxWP",
  "key30": "5YTuDhfxXsPoSTL791xWyhUrmHyPcJGxbHNdrijeTh3JDEL95yRx1J39BWYWZgrbmh8ed6VaK7iZy46DjnJdpeij",
  "key31": "5agfiMygGhVyfeQTLw7y6bMp121tuPv3gTty2UpbTN4GjXdaCTzBLJC7quSqcbiWLtJTpFELpoV7FQotpjTR4Kjs",
  "key32": "3GqNzp7p8Anafyvo9Wudpahf8SBibQE7QhWNSbYtZizqgfLT1bTXvQ56XHS621QZSoJ5NX3yN7uN4JhHWC689eMh",
  "key33": "rha4r9FxezAupgLE5XByJTpY5FD6iAfS8B7bG7JqjzFx4BW1ezxe4jvSFhBH1Ly95raZCBrcex3nWTCATHtySvc"
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
