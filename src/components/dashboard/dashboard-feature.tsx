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
    "472GKCXBmXuQUUGhXRrSJhUrUJxscPtekbASGsShqpxGH3jNY5Y274YsxcshzcAc2Ait8gVZsWSEnaNfyxETdnjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUdTQyYEk6iWGuCdRtrYB3d5XxBpbMadNwefuUXDWQ8MaD1NvzS7bfZ1AJ9B5KFVZZoCbJ3JmWvfR8yutdGQX43",
  "key1": "2xZhfE2WC23Grrwn5PoqPY7QTTDHrotgXwxphPdTwGj9XLPPjpCFc2GbQpyrG9fH7BNzNo7dVE8o8GLtBxDsBpTG",
  "key2": "3iFPRV3ToMHXrctXAzebNJoQC2jQ5wCh8nUSjcPjmiH8duixz3QnULaWCeJFHaRzNn7u95ZnR3xzydmTdyfC7ZBC",
  "key3": "2VcCcnpzK7eePA94fr4PA21tR5BhfWNGuuHJycdpb9NeCbxGNwoZP8At14XZrggcpj35KfK339wvu9Taxjrg5KFq",
  "key4": "27ttSBmbzAwg3T224p6MG7N8HawmEABStXNLbazCihWoBW8dCJrN3avfQxPA919vjuqESuwDY9JN5eaQjYazsWNP",
  "key5": "5ZCwVLVLCjTYHTL2vRCvi76G76PrzoLsQaoraJpGHLXeHXkErZ2XV9iBfdo9wcMJ2ELiLZL4ZzZtURFLhp1k69Q",
  "key6": "3WgeLc8bffxNa2DNQRWR1ZyUqPDnwQ4qxCpQP5fJpNV6ZnQmET7gD4G8RMszdb2MQ3DvicKTQgyxuYJ6WwKnoVSN",
  "key7": "EXgc8D2Fygp3AsQvBcjPyekmeN6svLDAtho6hNroxVdfU8sdveWfW9Yqm6krxoykFW2csiqKXbFLMK9dsGDJ2Jk",
  "key8": "3QbLWSb8nRYYKz8HpeGwTcjSS4H3bZ5r1dsxUE4tV6FEDRSdfVcFZW7xuf4rD78EqZ6uMt2Jdmhk1FF2Cpedi7r8",
  "key9": "4Foa1NPvqyN4WyZX194kS9yJYNwhJypHZmXQHXo7t6g3kmAvAHobTwyzyJTb72zVv3Qt2bya259BeBzPBWHyAmbH",
  "key10": "5pmn9oodfKf6nq1he5U8UodwKaLNfuMBWJeGoUUipn5TaeDzPLJPEuSMZxeWfvydFeDRDgxDriVAj1xwZzGS7R7d",
  "key11": "w9AcfVwsBayzPyQQF9gvCPLabbUXG92JFZXmECCWSwPjwVdfaPmbHJUq28wspwtQwgciqxjeDgsH74XpZujLV4B",
  "key12": "3VMGBdFTZB6zLFw4F4bfEGvS3oGEtDf3QAdKBpAVBTuERfUvRAR2L7cENwyYyqm92pgCot7qpLPyHXVJYeYCbeLn",
  "key13": "esJzs4xiejscarHHQgReqhCAg2tk3kezLgVgFrYPgsWpHrf9S7pKaaY8NJHzNX1t1XJarmknb6S6zhfKRZLa5BW",
  "key14": "2TkqiBg7i3TaiJ6qLy7ZWiXAyjtrWDNFtrpD1MSdvXS8uC5nv9zBjE3QqXPQAt2rCf1LC8L5avw8r6FZZGUYsEf",
  "key15": "2HhAvbVzdQVq7LBesvfhct23THGbJHJAoAKV9UNQ3RUWRFWKsmkv1FCyb5hG6DrRztSM97AQaXMrFx6gnnbMLwie",
  "key16": "47vdHuCmVqDXHJFWD5r4SnUd2udTyX57gBykeffJ73Kz83Qp3i8HBRjqz669gk4fzDgJtbGDET3HenRFhMpMFX1d",
  "key17": "2dSogNGzZBu5FEzHip4uGbdfiR1iBbyGzRUEyJAZktwVezLEWPRRC2KAfyGnuY3bJvZf921ZZmRnbwXayq3GpLK8",
  "key18": "3q3Y4GFCKmer2gfx6VaNyhsSxBw2H3dtSciT9k8Rvnx8aodJuA2BasymC6KyA7HGJ6auHjUkAjYxKA9f7eFRUU9M",
  "key19": "yxWfAPyg3byvvB8dRixhdUDQso7ZA3fziXEddwQxbewGp9MHGMvG7jwFWeYPtZfbDXzgrfK1PzBYm3K8DtkkUWF",
  "key20": "2nJ3UiAHsEdPfnpEC41cjchWSZhjrVPoNy4oTSrKyM2uiY6omLYQr331SP6n62CT4pdUjSnJuoWdTfA21yENGuEC",
  "key21": "3vqfyy9V5tfqQ4BuUCJUZuUDwabyzctrgaF1d1Qa9MEmY9FgR4d2ntehNCBkx7XrvNvH6UtAkxCJkaTKKcvNzGpk",
  "key22": "3wwFCeYbVAdMG3bjG3JsTBKwxX8pJGXWcHBAxvpmSpfMs3YwUJgeE6H18tcxVuB5yaiCjadpWzRP63xWN5GVXFMY",
  "key23": "2rrdSDYVYueDD5J13pp7qG9EuBt4bqk5UkFyeMbxYgwjVaNdoqQsXbUnPYr9vdL17LJbXoEqo1c98LMF41THxa42",
  "key24": "38k5mH6X42EtNpLnv6Sq48EgC2w8FStBm7MZe8aPcARbMU8MyM9Y625ZJDiXKr2gd1op1dYVd7qfNfCwEzqQ1ief",
  "key25": "4rdPASNvYKpNT6faPRB45a7tnsuoNH66MhEEW1mLaxjRnfKXXBmpYnhXxi3vtncwZ7GMK9SJykHgJKF59HV3x8v6",
  "key26": "qxkSNo4ufByLgSY7PGYULwrEmzwHJ3NW6XQkknM9mefo5dZjMvgSbWDf4FUJhWnb2yoaaX98SRf7UM4RQRvwVVR",
  "key27": "48GWtuMYn956nsQRBN1Lm8URsuxVYixpKX3dUJce5B9s6PHLk5b5b3i41ixuY4bMoVRF1TEhV8F5ip5A5vhSu5St"
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
