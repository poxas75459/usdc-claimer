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
    "6nYFPVFQHJ1KHUrRozjzRCQq7LjcTEDqWhmQPAzr4ErUG4unhTbLsQpSNzckE4d6xBnm3BM3MxwZjEPNzDG7f36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWGBdzYcpQrjy9eDFZx3o3NXTBfi8CJHz3ntrGMENtY6KzKVUtp3WtAkebqL3FzuwnERXD5spDUqT7MLA5GD5CW",
  "key1": "2xUmbqbCfEAVgUW32YvUFfG2SjUt99hopYKsmDr3rS5fwNQaAQ5gh5Y4r45DRT2xfePhTbfudCrWYdjzuyWm3Ud5",
  "key2": "5LBhjDWxRcr4pB3gvaYrS5YXbqv5d9zJycyTP8RkVS2jC6FUu4DGVa6xHYKKQC4ryhzLy9w9jos4gPaRHcF3yGAK",
  "key3": "67CxwofSzsdaUMbx5n51toZhZSm14PGEMbQMhLn7X2HRwweCWoTwv3BYKPyYK75aYzZTBZ8ucrGeUPvqWXq21o4n",
  "key4": "4XrrnQ5CPfuMdvDiePviLChfA5jwmBJ6L4B2Sf2soDK9xLoeijuYUVwiytU9ayWz5dGycLgmZM1Bs36VG7cgG96b",
  "key5": "2KAURqYHLbPYdKhqNAiREKBpg4kn3zftMykRPi8EQKZEsSvSzVdb6bb43gJMrC4j3jP2dV7nXeddRAtRazqpueXo",
  "key6": "5RryX4bbWutL1mAMiMTy6bBrw7Cp9MbQwKHPvvvhanuQhJZMgSLtv5h4WTAx7pdNWSyvjWd2uA11EweuWuP3ZmbS",
  "key7": "4XmQftMK7ZEriQcZzMfPYyzihiUawL3sS2DFvrAJPHn98YfBSJcAQMmgtFqSUAAcMT4WmpkJZkrggXMANBDimfGF",
  "key8": "44zn3K2ZnvFMwR6WRTCVdd8sSbBuT5xug6yLqn48W6VyAwWNSFaf29A8G1PZph3hgTCVmYXUNhy7hxVu2ziuUzpB",
  "key9": "ySJxY7xUkqJcdjdSCo43gWKEvTk7N1wjx78fjV95vH3PkbdLqSYovSre2w28JYNtMZazRmFaDSkM7XYwgG1hK8r",
  "key10": "4FPQ3tKpbLKSKvZW5uxpFLh787mHZ4VUW6aHuUPBrA5WJgBUEjH2dNQdS6FkAdLWUXESuTe2UaCqNv1v5UVzxcFc",
  "key11": "3FXTcseBcsKggWPmnKib7F83hsAQ8za1CsuAhiEyZdhp1jsoV2vX8yJAMBJAV8FVqT4C96PzmytUK5bBGmLX2MQF",
  "key12": "3cGuHXCvVkgNyNsjQ4GWJWosMgs6JHsA9pA4enB83X3YC2b3bJfY8jtX5mdMXC3Kerx2ed2AMwLCmxkcqYfbxFiF",
  "key13": "3oGKRyBVEHMbJxW4Ltp24Xu8rAQeRTvh1g6CdY1vwB74nUqp8EevcdJBSQSgMJfqJozaMfLBqUcK2JQT9pkkqoXC",
  "key14": "Upgp3gcA1WxLqkBuvXvkMzDDmE9q3Kfmf6PupQe9Mwi9JZtmQAhnxe9Za71xaRfqYe4ZF1AwsHkZhXFBATZQLwU",
  "key15": "2scdibu9UC4qLCi2q1hEMnL6Lws15ZTnuNgqkwKU6w6MN5MPGaGSRmyYrhvF6CvDVXZzVm3tM3d66indp6GWfBFd",
  "key16": "5PyQjvBjYHiDjLcGfxQNX9XqnpwgW2GMLiVSejb3C4PPrfbfXZFau954iFen9dRsbJe7333zar5dc76SS8tkYqK1",
  "key17": "2FqkXpA79uWyhSqp8i4seKzwEuSXmt2SH7WLnwEUhvunZ1ynPXtWv3okBEzenhEc7R6n5Lxnm579ziVW4ozs4EA7",
  "key18": "5PUQLG9sUYfAwfEcn1AW6vhMvBYYKE9rnYriKoS2Dk4ESL4ErzXYM6zdtvBFo1WfQ2fPetLb8GVUdHZdL1yZMnUg",
  "key19": "39NMWwQyjCRRS5xDvBpazQWJHVRSKTD6h12hqLMBZ9wYgbNoCXmQ4YUrffsYmPkN18UJ6qR9D8DJoiGvQryC1wmb",
  "key20": "bdTg4NHRGdaCuyojDFkp1FqumWmLWpJQZcUXJZKhx1tPxum1DH2aRU1zs3bgVdJtK67tydSJVGNVD8XG3Tru7k7",
  "key21": "tBcLxt7MvkSB6wzubBqQNrUu1eJqgApbn9srWWxQh9JsVvFrzfDP8LTsrpMKdyogefbAVJbRchjgUMf4MDxsrkF",
  "key22": "29R21hoXXFsg2t1LMZEUprsfAAuuMp3Tiq3tYpkHm5MEZZ4LzpBJhGvo5HJuPmEWLa159DiKtV2C5cqc7xDuVsKW",
  "key23": "5ktraKNhsYB9oZLDHGvwBkRY9gGJAFGCf88zPP8yW33YKLyeUHcGpoE784tMDqHpTRPD1zrAZ4f6k4sRj6wLmGzT",
  "key24": "292YtG1bsPaNrj274sqNWpfYL2veCaxj9r1udvenUKeX35hJ1ukickuYTX7NMrcsAVDaknyybBke4cHECNJ2PfKK",
  "key25": "4z46Ey3TLm4TCvVPAzQtSm5cicTR6ejBfB2m8uMchYD4xTeVTc4JAU7P9XPsmniaGoMh4Vnb4StMP2F4GZuoKdvp",
  "key26": "27j6RniX5z5X8cS6BJBcqqX9T4SigKbcEe12F8SWnXNhUnRQdH34WsJGF2EFGDRMNk9HP1XKzdcUSd9P47hLJHov",
  "key27": "2v9nCZAuLtrPMbWMktcL33AfBH1DnD7cyQMiR22mSZ7enyAy1qXfedZ7NjuH6AnGBJ8DSEdypRJoavr9G1J9RQiR",
  "key28": "4JQ41wWHj2a6YHiNWWoabFDk3811PsqVPTTYaCna95BKEbQpmA7VsCyfDcBaVq32aBYqafzU3FFZ2PSRRDTbSS8W",
  "key29": "Ru8ZfWxF25BAiPjzCdApmcZg8K13wWBq2w6W4dSGrCGnt1ZxVb8oTxfzVrUYho6VC67aQ99EL7dDrZkRRshxhen",
  "key30": "rguvGhKzXZ63naZkHAeMdrdsn8L7AhP4kmSZ4R1zjn1Wd7dS4zdS8rrKR34xtTHTDBTLpDWpoJfPER7iLZCdbz8",
  "key31": "2XVt4cy6s4rMkUFESA5rmyYqmaPcs9bLNyQUVBi3JLDNQaYDj25prKVDsp5M3nCDLrXwVyLoTsGuoM5RV4pRGz57",
  "key32": "4ghxpwSrrE5Yu6ePbBRCCjrkroyuWsNEztdQVUCwhsdNVtjVm3XNrQQq7HnQJx19W7ubi95LW1SbpK7q4t1g2GJo",
  "key33": "5Fp2h76qnUWzrpPaV8aKs87YyyjPPe3fnNoXHmrRmvve7U7mFGguEpzzLst9LbSayzkxJHS64qBo1EDfGWkRpjgk",
  "key34": "4WoGJb9VCeSY3BGUL2CCcKnLuhYMHFf96o2fqgMjAw4CbqZYAymSvfgtPgiDPkbeXUARDa2bfSKVH2icYv4DvkuN",
  "key35": "3afEo3KMCFgz2hTgXzwDowUjsN5LoNcs2V1rJw6hdZDCWGF7TQo3sx5gA5Y11uV2VRpS1VE8vacwLPgEHgRZ68eN",
  "key36": "vSKm7QLTK9X13uqXQuGrwVnGpL65EGBCcUjc5Fngt9AMv6qJwChSXd8stsrGm9V3T7631AEa3Gs9Down7DsFD3t",
  "key37": "W3BFqxBc1sQvNH3q8ysQWPyTPb8bcBpKtdvg2G3sXmhoTuWqxn2Hikcb15nJhX6cuoX9fBao3yJP8bTgXNV7pAJ"
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
