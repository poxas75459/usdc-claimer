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
    "G3zMZyDmaFFtLjYD1spyBDTr5bC5qQ2aTP5VKQ3ceSkwhLyn5vhxCr2drgdsjHQQVuSZc2uKDkFqHiTTJrVSg7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyPe54iMChTXVXDrHCDdbGZhQQ4DrsGiJ7CHz64Qz3T2ah9F9Rxscv35p3cenkEtdFfp7pjWwUi8KoVCe83xz36",
  "key1": "2QpLLroXLuwGPPDdnkakz2GpJnCZSqMc7Qao4QmXdwPKqc2pAAzH5WJkqJBjpGYKWkaLPfvA2TqKGipvmaHWxAjU",
  "key2": "3x3Z665qTDksRauuGnVHS9Pm5EQ8q2n3KxrZ8M4jzu1r53civkAqi75RFwwCnfd6ubcfcanFgGYW7L9ZM31sjvJY",
  "key3": "3efYEtnQzVPxwhZLgUiyYG9eHQwpRR6Jxu3TxDpJwYsXtehpJrjWEPbL7aTnsRL5oLgiQVrWymFWfuX4Pky8j9R5",
  "key4": "3LR8YyzRbavGYs6xEiznRPwaRy12P6hjc42yAjdqTA1cpg6xgbhF4VYpND5MK6AuE5aJqhhUw6AFYfLKgDr8UZxP",
  "key5": "3E3LGsyhgRym6R5mXqtd2oR9qAxtMWQGe1G7ctgGvwZ3F6kUhg9cZUbphJwLbHCjUbfvSaqBLiBi5KAwkk7NSmeY",
  "key6": "4e7B5wLXhUBBcbZ6cJ3JVGUxnw5yJVpB1fPdRuPghhhjK2tirqZFrS4oDw7x7Fvgsp7SYgLU9Q8YczJUzXG36NWo",
  "key7": "2hQqP6PJQY7cbX2FBMvsteuUfAU6XSo3zFNmmXh2Yrc9asETDxR7dA52KXmmMmGan89koQR7aniFa8GtQ9dbcmMq",
  "key8": "48wBozEWKi1iTGgiJqmyyUBjk2BCvNReZwJpzJ8dj5VEpCnNREfNLEvkAP31YR9boSiDc7Kyw4vfVx26Fn7jeJ7k",
  "key9": "2J7v19Uks5tVzsFxGbvPgs5WHbwrUDK9kPSD4ZKXQTLDtvxAxTzoMtNHVFtW4RXunADXHM9gLjshSnqADKUJ9Hvd",
  "key10": "2TRXHDoHtWQK5tyKLfvnabJNMefo5FBWhbhvcEdfitbbRWa8oocWesusUcuKfWh47PzMsnWyQjd2vbbypG4NbQNF",
  "key11": "4sgrqNG9Yezjsi97BVmjSC93ryA8HL7kCMsUrKuds8EMaoBJKYpfU8JXUKoPjYbArPN3PRaz2HdEL2gHZwooR86S",
  "key12": "2LAr3DY55WyhdAD4eWDhdPMr5wRJBxybUjJQp2Bngk5SDkxXXTzeqCEN8GqbojwrTXfcjdmmAhP3fTJYLMBpk6f8",
  "key13": "38kJunK2e23BWSivjafAUDLEBxKH9g7ZCx1Hex1C44NiqUeFub6dCJ41qNiw27V3dke3Wk29vkkEF6Kqev4V4MmQ",
  "key14": "5BgzTkjSaFqZjnmxQFcvf9AjiV6eEESWJNWDQhvWQWn2hfE4rDaanKGLd3p7uoShGVJsKyWaFxR6i4pBMLNakLFd",
  "key15": "4YTP7tCLsHsukWTxhyrgKM7kYwtyCSaqm6dNteEDp8aEtUmuv9L7y6Vx2AYbjfR6s13LgkcdVVcpSijQ27sNiWiP",
  "key16": "4orzfcZpEEUV91wF7WzuV9Rv1H2UXdVDNr7n5rPQBu67bauWnFTbGjjKgoPqH5791313j7XCCyD64jSDq16YittP",
  "key17": "2jWauVco4cDL7yroBQNZQ9UASjZdjkMB32Dgc2RYcUEREsw4Wxk1AMeJdQ8GWATbpBzpPRuKYNpmS8GR6D2VjQbC",
  "key18": "5gbCG9cV93LRUtze88QMh72QSVPB8yi7R4KGGrLM3jhMF9yRDLTtAYNB6s5vaNXWzLs7hXP5vJoRFx8USDkACGLj",
  "key19": "48nCY3PE8w4QHirp7Faw9Vk3sxGGiTtpk23TwMPvGsWTxgGTqfRMtnoZsjqb59d4x3Eqjozz6TGDfaZ7f7sTcqXf",
  "key20": "38EEqWUR4rLqFMPd3XkXaAKXBvgSvCFBeKxz3sBtaxUf54b2fWaMKfStatgQT4ycKozQU4fNeq4aRXwhK8Y6RfDX",
  "key21": "Lykec7cDuaxsBF6s8VfXLNftTd9f3FRyY427AZY5GGuDFGtsFUPHMAVXEAPKbopNdnqMu228h7sdiX1ksf3trbW",
  "key22": "5JHzvnjZyvsSfyjcokNRUdifMUXa5uwacpRGSuNS54YqquNPWF6Bjt9F6BVKP2hYNgPNj3JMrsoK8EW9GkiQDUx3",
  "key23": "2vb6c8dq7hvi3Fq2jyVkcHuWZnB7Vnzd3mEzzPhzZjZjH8p1ffo1G8gwjuE4nxmEkiVfwNDaHCpijNvMcG7KGaev",
  "key24": "2sDZCXbZrcKRGuCQxksKn2KMJBbxhJ1iofzjm9aCrhswCS4RLHDPBSmxkWefjfp7MMhginxy3wRSUJyJCcdMsvKh",
  "key25": "34ET3MVgZUyQi9CZuPxvy3dCgWLcJVqMnNhyRGyH47He5hyKQgAjPeg9DAemigB7sduooTADt6LpwUHr9W9sS2U4",
  "key26": "UYNUmMGW723MuCxQnT1pPBN2cM4cutRGn9VNbXBGahrqVkUy9ThAcSiRxmVsde9jXwnifCF5S8zUggXZcCMpr9z",
  "key27": "4GEANT5y8RB8WoXuYi64nB27RJ25k2JC14tZa9NxNsK5ey2hgRhvezyfskbTpN618uEdTmeQzM7zUUEzamLhk79c",
  "key28": "5W3J3bnjVnz6ogRFsatPiqGXYKB8NwhBmqL4u2XxszBDp2yg7x1zsN2phH9GVLRr8TG9kxe2buGVBnM8Hw7PmUUW",
  "key29": "5NFPHLxhXMu8qzhvEbTCkscFUgcY5pu74Xz3mpZsp4dNrnkGPjUqbXGLS8dJRqqM45g84Wf6BSkw9J7MCApn3WNB",
  "key30": "3TTT4HxXL9aLMhDmQ5cg7vZeL8XpKNxNbEt5LdJmWFiG7gXFvv6oRQp3tREjs8mEMCCkJjShd6MEW6qGDXUs9CBm",
  "key31": "5yrrYMdhdTxzr1j5PTzZvGABcCjEYtjZHB6STz6RMRNn2dXE6rLTLztvL2DsyZboVr99mM3SETijbazQcQqDDRm7",
  "key32": "2vAYp1FVgHVSyz7ANwQPFu16u451ucYrUxPBrKHzKc1FQinKCj8bq6NS1EeD51k5j6r9XoNPrWXCAsaJZxuyqF2W",
  "key33": "2eeR4EX4Ecre8fQe4SLEZZtib7dCUhiwWUSdnqR2f1AVbAHzZJ8Vbv1BvXfc7DPiUTs92qHxfLr7gK58FrkRKyVG",
  "key34": "gDxt9Ye1ZrkBP4wMGkWGxA4EyRAGLRpVafK7CxuKzVcGChAgLxBY3WZyusKcHn1o4LzBDa77jvhpi2zc3SaHVGc",
  "key35": "2a5YSmDWUPfn3ZMMkvjoEtwwEsNcWfp5ZJhfBjxJk4DXrPFrwgEaf2CFYQRsXa9VnJxDUoLEBU7CLRJmqA2bGcQR",
  "key36": "4hjZur9En3BQMdFDJL5cXPTowH7v34gY38WYzH44EXfvPPm7fvCvPVwQuAvhJW6brqA6Gk39LehhXUbyrSjqtZ6E",
  "key37": "3hvbvVFFuCyFbsz66KH5XibGpveW4CiL2c7s31EQF3AnLccwFFWcAmjhMBWbC5tVzpWDLYe2Njz4mQCu8TB8R5uL",
  "key38": "4NBCrGMn2PhgP5LfkzSwN1pEyHj5nrxMJfkcWYHdwEcppAKrYo4wRS67Gu1SPkGdw9dKbMXXVANKKHMr5tLxXTC8",
  "key39": "5h1DDx3jawS8YFK3MytQr9EVk8jupLKtx58WVtKcns4S12r7KWHXsTouzZWYRc8JpNXBHd2qR72s3m5DhCyEWf2o"
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
