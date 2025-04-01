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
    "32WgM1eVRZfiAuLPVEh4WvH3VZm6aofqVCfrFtZeu6C8wjhAdeEfsBiQqRjcUBCERYiy6ABXGY1HfDGYitfkZ566"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erUWsXDivg7gpvejxM71gcUXo8aPyMmPaSyoVZMmm8WnFdZw5XkJ8GyHXUa8wfsjrS8Wqs5L8nV2kvaHVzxSZkL",
  "key1": "4zHMqpC43fAzFgG9JWyusUWtWwFrh4B2fayjsfJmJRnvv7ExUPzYDm7Z7hAp8HxyzVKzN2w1hFkSMPAebt5S1jng",
  "key2": "5vdLHdSJ9tymZPmd6hLUyW7NM7VuiPEMMoufBn921mZsNRUv1qQSaA5wBhwsv7xJ3hoP9Kc7JoiT5JdEi7QMbam4",
  "key3": "4KWJqVN4xwq8up9AZEs6MXv6mCz2oREQbM2ArwzrjPze2114etVVfMe86xRwGo1Y9t1t9N67q2D9RxkrmDnqgD4y",
  "key4": "4RYrsFtYkTUkrTZA2TJBVp8sEgFczadECyQdnXMsTA2Psm6qmdoRBfDh31PTwszec1gQ5Yu6qMb7mAQs7weh4ByX",
  "key5": "4s8WZ6a9zrSr4TuwegDvhNMgUmkY4NNm2Fu4Ba8DjFpRQFjEy2vM5miWAwh8texuK6BWBShsPLfyjCG1uFYVptrC",
  "key6": "rWRDqqEzE6FRjuNRJjxqohSVKEoQYoFo8BicceDoxZgGWLg7ABK1C3MW8o82RxpAEeLJZ2PsF7deASV8Aqq6Fqa",
  "key7": "36xR6Jj3gpufh3z2CqZbkGimJAQKVjm7jaaJGYEpYi5JrG8En1xC45CRMGcpi7TEbk2JHmZLm8f34PRH9BZ9K6W6",
  "key8": "FDrN7GbwWi6js9rutjVVezCGJHtSECDkpraKwNzBqz4qS2vrAgbDJcBevSPW6shVbVNdn1NsTMRh9JxesvH1XCT",
  "key9": "5H4USBV8tA8YB6Q266vJ4u4PGquCGkyDFbjKSaUHEj1jxqb7rbPHoZxMD8Mq5AWxQZabjUCeDUoXtfe9Wu7eJa5s",
  "key10": "nBEKEWFtCC9fXyqsZUZJxPk6BEyxi4rqEcj2bMgPMAbXV31Pe47oftcTJzhe1nD7NxbJ6ekEeHQCkZYu6tZQfAn",
  "key11": "PjJyScaFLgz88dQ9L4kaXz5BBfw98wkQweFd4oppcMopELsUUBPDywyp6Hkp82GNNoAFY5p6AtxNnga3e7qFLVs",
  "key12": "jfy8Ln8JSJqfxwVHeQ3zNHujj6t2WPKaETsZUnCDmi4indzwWUiqeAXJorcjzJYEGVG3XhmcrERHA7xmCBd6iU4",
  "key13": "2cfuy2YHcXMzqsQxj4QCRPGypFM8NhrUA2wXM2dKQF1DuK6zZFLE8TbWELut7PjrovaiGP1h8iKE3LaTqqfyVjQV",
  "key14": "3EESWcB7Jm2q4ym9scHjMEPjyLimxXs4P1uNASDp5kj5xDSt1V4XGzs29T25PApwSVjN1QhBExg37DTGEjscvdGv",
  "key15": "3TPe8K1dfcLHoqKibFocxrkUWNLEiX8j6Ne7kkyrFwrBpsm2wwVJidZHba2XkZ8WnuPmPqKs6B6uMTn2QCbqxQzz",
  "key16": "56REsjw8czhRr5zj8X8HDuHfyDGDvNPHVcaqqgFGHXkBouVnBMWp4MQFM2svvmg2iSS3wwyviHwRCex5RakL3sZZ",
  "key17": "5h7jmoPDC5nyExGypLz3mrSbBveoF8pMqB4QAjLa9nKT6WLhgy2QuNxkZz3i8Vve2kDf3SqVo2GCGS3n9nqasRUT",
  "key18": "4ocpGLwH9br1XQeRsgvNF34S15dVAnCvraM3dqJwUVj7ZqeKueW7BXUmbgbYoTab1TQx4h4BwG3S9BqrVCRoPVPr",
  "key19": "5eYx54ChYzkwu6erJghM9T3yJ7Z4HDN7fSvfQPvDbXg3Yas8nJDW3TCDtTBuKALFTmdnMbjgjzWx9zNA3YG3vB7F",
  "key20": "4zczaiD6NNptgmR5fL753i39SPGeYcvUt4sc5MrcGKGRVm8uS8AiE2SrxknFUmqpTP8t6fWe5eSeL6BD4vccY68d",
  "key21": "3WMuZYx8K3PAZje34xUdCG2BSpLiopKsk3SiMdna4AHECXvExp14D4wkWEth3UWok6PkEK34sgJU5RpmbeRDQqxQ",
  "key22": "3FqBRmngbu4kA5QpsUjz49Q8oQTRTWZbToLDi7LmjLE7SHUenxDC2KtK3cr8Y7tJonMWVc4bP5X75U9BEPuBSyCi",
  "key23": "rGRVoMWnpW2ecdTCujxfuhgHPVCdrsoiTorPCfk6oBD4oF7AToD1CyZUfvcbiRtbrm3waxTnhG73d71AZREe62w",
  "key24": "wmmp3n4XLtnzeuXtuxVSnnDamCc3SJVuT3xJSk6Fe7YEXRfRKms4iBeMCvo7yLJrWcss2ta3KoNMnLMnW1wjfSU",
  "key25": "3KcJg84CYdSMVjkH1BfVn8XRgpyBUodXV9USxcTH8FihDPCkXQWG4U4jQG7jdmvzLymDL3L3dAu7tFWQuuepwWdV",
  "key26": "4y5CNX2ZUYpjQ3RoNAe94UzjUtJgfkgUmQcZ1S4poigWxnNb4a9SmcWcLF2Zn6EdFU6wY16MMbNbjNV3m59xqwnE",
  "key27": "3BmWEdYcMrp4UNzK1LVHcpUFTwyPyVM6tK7NFATLKmekR4PvHDU5NhwedUvtG5HqUa6L9rcQep5A1jMB9VbsgkVG",
  "key28": "5z1neRJPW7asQgRztHm61T5bNxDMaBtM5PqFiJ15sVnX4DcgrTeMhUGR6ntWTagA8Q2Sg2BJAnD2tGQPXUszQVoc",
  "key29": "5AJiohnUCiPWQSdesnwsGPucxaeoFQouVty2bLPftwZiLm4w77YkvEzrAFjmESYXPtqy7WzG6QRs4CnaBGj6Mdxg",
  "key30": "4emmhUmumqbJUqreVrDpzNxaabxKGJPRYu1E91AHnw8ReDM1YBbsjc8QKyvWaW6uRMqos1bd1Tgh4svTD39Fonh2",
  "key31": "5eXNFDezWmhw2N6XGxGXVtbVZ1KJ2xz6vQtHEaWgw5JTWaSHHNZNhJ9Wvi2DzqceAvcoAovKvBXUAo6UHkccSxe",
  "key32": "5VeoTdw2NaB1ncgwUZUNdNVAWoBuqvN3CDKHprLgSptrNYUv2qKjjonHJXjr7ZvNJsM4rZMwVCajfSho2uHXuauh",
  "key33": "58bhqEMdiz3xBUFeNobWtUDCEkEyGGqCFUj2bVoMCTgEkExiGrZuiJrzA8kBWcZ5UiA44fpVMo9ksuMqfigNXDms",
  "key34": "rRXahG2qS1vL6U6bG2LQRAdeJgH2dWFLJuC9kQDMviWVE5MheGQbPrNdohBLw3RwGa2u5GQLFfECV9vg5aFnE7X",
  "key35": "2SnEvT2cY2vushC6h3U9CxNzdYiYsGt8JWFAwcEjxhJiJeSrW9q3aJtt5vRyA823SGwvcYLnE8VCcEtaFGAAUnEc",
  "key36": "2VoUvgpSHdC9qtGVxgLjFPfn8s4Fh3DTtPQptNiJvQQ7xHjaYoDAAUznMhTvNtDitnY1WfkrgVWSypZbNUQk7daM",
  "key37": "5GExAvcNwArcPhH2RAKSjnAGYynvevWKj1RLeGU1Auro7ViSxYFEFLuqduyBc68XXBxN9L3yKkJ1gkpYTNLfUSqi",
  "key38": "2uQHDNx3R3ZZtycj3sx82oacyuzRATzR6RjwczXJ1diDm8rmZDYFLAYQdYsd8KaFi2zXbDUHMYy853jfnTcBZNPz",
  "key39": "2SEyB2t1smGpQGbDL6SLwaRRcSgrjxX9Xd1LzFtLY7etqJYpQLRe3pzoBRrL7EArKVsjz7kzqbkMsKPkyWcSSS8F",
  "key40": "wvq4RTVtJF1yzUtn59sgQQoZHQHYYEoJZZr9sfd64mgF6wBi2HaRWZaK1GwmG4HoANZNAvYndrid25sVgU227nc",
  "key41": "4thAaSHQdsoBLN2bTnPJ8BTTbBPKynp2BmBimaEnan3XZAjEPqQ3ureUuox17B3FNznZTs5vdkwCz3MgBaoSArTB",
  "key42": "37VX8ppqKygSTtzGqzYvgHWip31DEPErStCQbBQNNboPuvEHnWzoMDE6T7aPtPeLyKfafYYPXbNanApkNmgckpC3",
  "key43": "3qVDfEFpjKqyRBah8qdKBHjaMSwdLudNBWG5onpwqHLjSiPLPGYXrQUhU3aqrYRRooEqdNpJdwuempXuboqdQWZn",
  "key44": "3pK6sSr4UYt77s1kpbMki8ztDHwMsEfPu4LKqvvkqjon54QQVBXvqK5s8cxtH51d6CUWr5488HoGcWGjiQ3NSh6r",
  "key45": "5VJXjLZ6C2joP6ifhfCJMFP8BoU2AZ1pDfzzdbFpxStZCQyemyPh6XNbHNpgiUdRUpRP7RSDhNsyvoTnxecgURXy",
  "key46": "3n879VFWEPgE7aHo4duUwopUE6ctf21dnboh1dNFKHYvNdgrDUAvUDDAzdLuKfZPACvZ38t9iZGerKCufw92egTD"
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
