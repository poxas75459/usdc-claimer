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
    "5VmzFRjbz15ziYgYiXpPYYKjz2k9FpfhbHNvwkftWpSFVJc2XFYxwKeea2CNTHmBNgXyrcsFyxZoEGdXbXcppavF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbBJxUi1i4ujkNEtQWLmyRqhMndqGrmzYBAKH7FLZReD6GdjU5sFva3wLBUW4C3HHrp7P3oTcgsN2QNEn9ZiPSz",
  "key1": "2GLtcevGUafuPfccETQS5s1ofkqmhH3xaMoUtT8MyAxFZJgrJLAH2x6m2e9xEz5UZrReQPKgMp6VQPZAfhoSbS6C",
  "key2": "zuq7xfZ2X9o2cpdXqKgp61GFFgXZG6Y312JTX1eoHJ9x1VepuWeLaubHEaSjGsRMLY7BXcRXVeuWje27YwwM9ox",
  "key3": "4jtMC3hLraGHJ1oy7yvhxwaH3TUbS9UHPgzL7NsKW9pKCMma5nehSfFG8WFZEQZayj3rqsdQCCQP28pGgxWppmh6",
  "key4": "4eN2DV5hFchf4fdCFyj1Ep4uqoSqMadQQ6PN32nHjrPKUtJzRSWe1N2yF5AvZ22sDhsAPJEZiYUK13Q2RJQwvFDp",
  "key5": "47fJcn8JQYMEGYc7PPUHC37h9rEJ2hn7mphhwA2FksVz6GqkbTRJg68JSQqh36ku15nKZJtBtuxyQNK8LcsNkh2p",
  "key6": "Php2LuBScbZaNJ6yKqttW28jWMssQEDmQtzbcx3wMBcskghN23ZMsDFLARwg27Dtv9Cn3PVosqGkR7PkzAMSpcJ",
  "key7": "7DSzenCMf1MbEfAbPBvkxHsLMCgeLdeQGCkL86eDVbHfG12rZ2oE4nedZypaFB55oFFqJkfTJZDf7uBSLJBbnwf",
  "key8": "5pDsAc9ojB4ZGMqM365BSQdms15He7bxHNsfP6m4fbNv8jgtr8L3htZQpUpKvTrFKMNhjhWS7GZsHqR9jewBizph",
  "key9": "1yDP51ji9nVxCT5v4d5QX8QjbtvntFcYKjtsMoaX7b8a1ezdZpaAuFym3y3qxWGsSkKPRRSb3DgVkSXBTxLKtae",
  "key10": "5KKntCd9Dm68Von4GAViLx4QcCxJFzBmvKBQVyH8rERVxX9a8c8uFzGYf9tiGXeo1JzLFNjPaFrvryEjANnY83yh",
  "key11": "5WkbpeczXDhZnPRjbaHQK9ZtqqQ1HTv96VGmzmDz8ori9vi4fZeTJmerYp8gRoi29zHUbd2hEzhaEn7XozpKDYQJ",
  "key12": "4DWTAYeTzZ9tL4bL3ASfLVaqq1PEdEcyBRvxbdpYLY1r7ViWUvoiV7GrgH2HzNVN6i45ZFy4Y5mAHM7t9t19rpGT",
  "key13": "HMncM1Lwq9TqhqjED8t6biJ9xzeLBrLiuMuqbWVeN9NfdHrkA8CSRniXeZ7BQZxnumWTQ5kjVj6eDexCd1Jyuap",
  "key14": "2CjZTauQ2RzuAyUtyYb1EnxXtJVqigHogExBQ8HUe5Yb8khTy4ceGKRnqk3ubyCNj8B6WzZLJ3irnLBPwRruPCw5",
  "key15": "nBAskiE7GT7uZPiEcvjDdfHBTJC5XmAT37Hk2urUYVBNucK7H4yTrGhRgkZKdE7vMzY4qyxW8VBNn2yfazYsv1o",
  "key16": "4NzufH5M2j7ZpRAT2KDwdcYWcT6BYTwxnbWZXNPKY5igRQX4EmXcD6fe6YREjYGqcUgx51xp3pjrgcvhR5DaffrK",
  "key17": "56rGKyjBAdrXyqPcoQ5GYuVmADeEmsRqRMkMWHVcRBpB494NwvKjNVWMnZLqsxVpCWsTJADR2WnQRGp932yoJehj",
  "key18": "3BcAmg5jgy2DCKQqooMCvy8fbPzMN3AMnFx7iwrhcwsfFWAfiJuF9jDtJ432rqJ4ncd1X1SkUJpps7ifs43jmDyb",
  "key19": "Hmv18FBY6A6nKgCUMuuy374Vdh6RadaBHqX269NqSAwNUhDEeKdaRr5z5HrPsGqw4rECeT2EtBVnbcKApFZWjjk",
  "key20": "5yxJTemQJXyfPLCMNFXWU9dfW5jwnFghY7ZZem4ryyFy7AiTTT6KaNo4ujWoYtS9z4zcBkvQEAKqyFHYCtFjuXua",
  "key21": "8UDT4kP8BVEgeoq8qx5ThAi4nbeC5FH3pYZvkug5KRjKxQYPZ1UGfBmhPtQh4touPkRPFejQZP2U4ySFFqrpEgD",
  "key22": "4xsTJrM6faNebxqPCGySo1ZYmzTi7jCf7YvXHm5WiY3FraV8nKtSvxqJoib9kSLRB4whxxBCCHcAmfDCsrrwiqyG",
  "key23": "Vv7BTTHfBiU2Gb6wqnFqtpwyXt5NYcE15V2TVgAynQXVeH2t4LLfV2mhyoEarSzA8FY3ooVhswn93LqTYJqVnZQ",
  "key24": "4T49eLAGeGupPAeU7WYrKixQb72xzunp9QdMC8YWzEqhHuSbGHiF2fuUxouwehs2WkiY9boopKS4Bqxr5KGLKcHu",
  "key25": "23s8p4hXcVtq3sXyKgrmMU7XX2piQ2FdsbfGFJXEB7LPLhppPVcppJ6FGNEivwSB3meGMpRa2v6EaSKH6rLUHMv9",
  "key26": "3jLjFQz7ZTg8obHYD9p3R3hj6ArkbwCsiin7YrVHQUZQCiF2zteEBDiJ1HmViqynTfMRdmb9Aw7bbf6735XoHpLG",
  "key27": "2k8sTzAvSYiLNmfJyg7pfb8RBQ9yn71dRqAGivjpk6SGrxMbS4GAcmqMKUM7VZyuhPXmSsR58FXZx1ZrnL1VdkB",
  "key28": "D6y5uAwQuDuabkDK95w6XRPe1Uc7bp1wM4NnNnrUojmYwsnAgLB2NZCWrjWYNPUFFRmynd18dcQPXc1A13USY3e"
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
