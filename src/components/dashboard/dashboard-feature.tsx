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
    "gGqLKDe42QTgxrdkaK1y9QLSvEakHv2UKDnLQAD4jmkrzw8bsyvE1MoynW9VkR1aL6F2YGY2hcvFykmDVnkLByp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t47Zf9HxssesEXJ7chaBg27NNSbyTE1Kb4jtaRJ68zSL8FSofq8WxkwGGXNPkhCnBuZQb2CqJ7RmouEkWeop3Kc",
  "key1": "229qnS5XFC8KEBED5gmAfvPiZhbktMHYwdvuu8sVE8v9Pooh4fz6JweEGCkrw22mNUwcwJzReYAh89RRiK35bfaM",
  "key2": "5QRFw5fgvNdLMGhHAq11SNS9iWBYGUdMrJNtadV3vmWGiLgFKKnABvWX9JH6Rkd5XJugpWXi36gm2Tu487Xq4PeB",
  "key3": "3vK5ts2KEAXdJMPAbJzMqH5SxF2Tb5SkZF3NSv5SuLqUF6HsUUq8gVDWg2r7TSgguVYrwmrLB3WJRt2oBBrkBjZx",
  "key4": "aYRqhWPDNs1NMNVud9hNgdQCXrHTNhTEqwfoY6NkU8JaL4iifwjMDyLwvNq9M13pu3mjeLABX7RXXtxspFXrnre",
  "key5": "634p5MB7F47gU4M6JCYYVeGjoUuEJ9FwV4A79U5Ujusdgw9WFfY7vA9GH6eeacLEGEVspEPtPzbskCQzggtBVKKA",
  "key6": "2bsaCL8YXw5FFDLosLYM34FE69XAqgWA2SyYQCHjezdcHVFGh4pU3gowDMrxi4wvmdc3Z4rYuM1wMoXtj4zxkHpg",
  "key7": "4RtsPicSaoUN8PiTw4UezPWuHbGY3PCQaerwzAw3oMNzzpFWgMQfTYfAf4g4CCsGx8NnBYzr9uZnCQvQEYgTdHtM",
  "key8": "2NCeCJaq6WbZECBWfzfMEyTfDepbGkJVmW7uzen2Laxu7V2c22vRM4aBXXNdUrookZ4eUKDddjj6zs5LbZ6QsEtS",
  "key9": "5R7gbyKbCJWV1d5cLcKH2r1aZhM6TqB9LEvyQgCymc3oFneHnQ15JKHJXNZ4nJ5NyiNVwHiHsjrQyBAhPN2SEU2i",
  "key10": "4w8sNtzGQYhXdjaB1tMihNUqcD4sZWaXKAPWqjbLDWB6Cyk8f4SACwLrg2GBx1SWSVngYA4qjfbD8xL36qrwgxLt",
  "key11": "5No6P3CgBM7uAyVqEyT36x9DHRV1TbgQhm1DbZyimMX1iUCFsEwg5hVhhtFyb2KY8ekq5Rxdmo5RPiX6Zvw44mWf",
  "key12": "2G7ixtaJ97j7RfWNXB26oc5paxf4kEF9SveayayqHeCPQVkNXZuDkxYvwi727bnHyQ41vM7HicZm4QdGaaoDoc33",
  "key13": "3g3xZ7SFEy7oFdzm2bZ3oJ8A71wTKP6WoU5v5G2D7veEae2v9D6m42dwynAjCw1jXoHS431MoWk6AqKgGAA5ZY8k",
  "key14": "25wRb7woXGdd2YTBEFekcSS9YvLAGJ1fou3BydExRBQeEdCqwvD1WERWXisQTYNYWNJfqRWKm1YaMSmKTVksb2nn",
  "key15": "VN7yuayzacyiwo75adXJ6dN1GwN8qbgJLkrapWEATSg3AjmwPeiwWDfdfFF2zz7qMrWweLgZrTh7PuQVnP5amSs",
  "key16": "4uz12GWwGqcJnMqiQdssCqBm2NCVHcZN9GvG4VCvZw219i71XKTfWFTL9T2QCUQD3MqcpG7zGnuDxdZ8drNF8iE1",
  "key17": "4vFSpQ9YJKgYXvh2ijkfeVoXBigH9AqbazDUoSZFQPqbxuWV4Txas3upgUkvh2SV1HBxp5rEii8EgvFLFxMqiDns",
  "key18": "2bkFMfhhZEA8yQPu74Cg6k9hd4tA8A6933tTvpoEG4EqTBn4WMeqWkQVAUiU48UhyoBoBWA93VpR1AbLK5VqzdG3",
  "key19": "3HSEyCuFJZFcKL71NEQX9hGWreraXbUmLrmkaCXj8iN332aiNNdEFSYrhasH6CAYHt4zQfkPu4fWdabbEuLqGn8p",
  "key20": "8XxELWVW9biZ1f6eTLgU78MqinoiEsLuZSktgPdPJrqio5p9ie14Rtqzu3KMS3voQgYLBbZCFWFKt1uH4SRSy56",
  "key21": "4cMSPPzP3Bkatzete1HtwN1PPwvDz7wKNnQkwRnSrjvSjFBXCyA72umUzmsE1RG1dHCBs4yqxGMtcfCxCDkpRrt",
  "key22": "4k1i9HSLUCkoYU8n3Qbmrt2xMi4w5kouVAuVf8q3xqbz3UV2FVBsSrJHtpSfswfhJJhFH69qZBcrjBgstmL9P8fX",
  "key23": "4gUHYy99LeTQCmU4wA465khrBBKE4hiT7K39bEg831BAmYXA8LyiPUmRzygEUDCeychAXrSArmd5Sx1Kxoiq1XsN",
  "key24": "4no3xt5kmhrGZ8dNTjx8sJiGvxz8FKn8JjTSidqsJVgD2koRiy9XsT8ekBN7zsn4PMdRBgnLawMATinTJ8gFzCS",
  "key25": "5dVw979ghHWzMM8bKDLJGWYjEhtCZa4kQraWRLb2KcwcGntKcQTuKh69eVbFcgdhgNYXgfLJ5qjB3Fe25aacy6ye",
  "key26": "2si9EsGXzZCsYW74ChePt67STX3y8MeMkMari3MwKggdzJXyKGpV7TYL7NSMWQe4wa6MLFYdXyUeubDgDH1TxRhk",
  "key27": "hxygoEdbaPHBEtqzR89pknuyPsTHpJNB1iEAyGQ4y3uDb5HZBL7gARYsnmENHptaCP5GkoSqsJhk2rRphykNUhn",
  "key28": "VTr2SWb9bTuoG3qTbyFb5FaEHY1ddGAvpSJs8hLCeBMU6HgqUWKXynrHd7iaGCkEzqAUCW2FQnmcR8K8ttB7UCW",
  "key29": "4QVts6yYzMsUSK7VjhUrEoKPteQzmvnVxba8gF6qhWQg8FQ6XtNDgE41k3tZAs5DPsGfGSuouc5ewZHpHegiiMkT",
  "key30": "5KyMZpg4P5BmgUdrQWpP16vToizyU1ixEXMQL52QHLGj8Lp5L33DFc1sXZMkHxYYkEJuhoveJACD9YeruYp3DJwH",
  "key31": "5oicHzBCGyX1mcVYnsVPjCZmnnCApX1CQFF9u4gH9Pbq72T4kj6zcT2MtP15QxNtGndJxFzQNfW755Qiv2uC1VUW",
  "key32": "rUHvUGoAubu8sjs6pmFaHW1NLDKkRGFXWvgRjsGzKvR6jGhPo1fSkwWg7KQXongZj1n4e2iDWdVjrFwaUgwyL6J",
  "key33": "4GtFrvhu8SoKuWR5T3eU26v9eEYEjGrmCmUX8tRq5peEewsLWPR4SFL7Jq7vnGAvTasedduqJjgTdotswKe7S8XS",
  "key34": "3qwTcF15bE9Eakp8uG5a2gVXRy7bzTdNqkQkCu23s3Y2Y5adiQkF246RWNiwfznoxFpXasD9Ygog5iEJQJoz1Rre",
  "key35": "2mA89em9DmAMjQ3aSvai7a2jpeCFWudkV1ozPcdMAjiaNMeMBtBueXVE8x9ftxBCUkHL6iLh3HwxWwRrvaSKK1jm",
  "key36": "53k1qD9hz4mn5q7t1brfGGdszzMtET6L4DcEjNH4S3NzsVdP7g7fJFCxfW7fieDb7d9DCsG78XZEyGDYYx32EwSc",
  "key37": "3DUP48xF6HX1LM2RchWKsU38MgqX9uBWzkckEcLyeWrgqpnBtxkz3AtVLaA9hRC2SFVKD6QTCP7azvwBdse1LpA9"
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
