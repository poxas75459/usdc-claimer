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
    "355DAp7bnr8utALX1dGuXtFQqghAMPb4EUcDnqLMp9Kaqe8z5rD1mCgAtNx3BisoLGcvxu8zXWBDzdWAKwTQYq1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVj5T3ZmPxfCckYTnzVzDxnE8CCHfeR5ogU789ANh4RNgbF278qBiNJFXp38QVVfim7NiGwQxRYYSbxWMbNdJRP",
  "key1": "3opmoevoT7gHR2E1zEaTfwBx7R1MjYSSc9kHoRoPMWAzg3nHykGDxtLesGfpq8c1ydYPiJGkCBWcn6Rn6dmoJfP5",
  "key2": "37rHN93VX5QVTGrAk9r3q2PjHj6UfkwjpvUSFL87HrjCVGWEL7aeM7Hz7ESDMRP33qavzoGs5e5CiyQmBsHsPLcE",
  "key3": "uZ1GcUuGcZNwXzSaA5bx5AcaJa12x72V6WnerayadyPsE8QtozWNjKHaDu9rHeZ77LKcKopqBRWRx3G31htBJ4T",
  "key4": "5rTZjq6Q3dWA76kRSdMYpLGDrA6e6Nu4Fo6wnM91DfhNSt68z5cvoxkt8n3XAPPvLsfCCXhCGAvxTcTEwS1juF6U",
  "key5": "2egtxtihQFmzG5ktLVaW6dvkgq35EJnUhm2RmDKCJTJ6xq2aKqF3uy7j3tpNbC4uJ3JXb6xhs9w5jtWo8Ntd6VKf",
  "key6": "5MkvWHcXGwekntoL4jRhUHmU79F3vMfeM9rV7y1E4kScxkQxv9DbmvHgZpqi6A9HqyX9Tvu5EXLM2TR8GJ7cChqP",
  "key7": "pGTQMwuEDZ3eV3khR6MpjabtbiWeohH9KWnPBFdTpMPvBo25nUK3P6L2nBfXpcmt2yvyXuCYwCq7dycyjL1JNJh",
  "key8": "4qXXCz6u9EJgrXBtSfQr4HbvvQg76q9P83grwhR9qUwxbTsYNqWBYogn4rcZfRA9QqtXvVVD8Ei1qN1cdWp4HWJr",
  "key9": "2pmdVCgdbzztjnTKpS6AGn2yniXRK5YqYBR2bZK2yUf3H3PerkD7Hkmr7Fa3mne8x2MUeZTYpcZTmgtkHg1jBUxr",
  "key10": "39kGvbSwxoRz3Dj6PWqZMXeGnZMznQE8c7cfL5doFa5WX5BRoeE7LoroQ1WApjwjiVVSDbz5MD878iC29mQAntW4",
  "key11": "3PEYh2kKEj7nLJrSLN1EVxio3qB3ZkQhTDepu1MbpFnzn9qP83vJtspK2vw9M2QMmrvvuY5VZh95MGKD2EByi7rc",
  "key12": "m6Y7dbZirAnoEpV58Z9XT6RmYHS4xYUUdzhiDt9dk17fPMjKQHWfbRcfsgNp5Q7cJDcH7oybVgiaDoPC7Q8C9ye",
  "key13": "5p23kqde2oHU8ySYqL9JmX459h8HjLuVUJpUmPevXwEQSGrMXdU29DsbL4zyRgPhaPt5bryYq975p1CwJEbpvWpk",
  "key14": "3R6cyQK4j9Fn5tyje4atUu9TXxck8zxXqWR6yN4k97ub1AgHrpimgHw5ahQCumd1uUiXorXU59mWTBPwC6Focvmo",
  "key15": "2PreNtumYAYtEBapmtG1CFLqFZahiaHJDRG9JEQJpfaFez2dJKTZYdpkA1EgVZCR1cx93v6pm8shBdJ2UcjBBbRP",
  "key16": "2BtrCJ4YEiHkaaX649wYmhME7tpxD6NWbFenPs4NpfeLreb4bHLQQx8oDWio3mYRa4JqQid73QhL5zYyw2WvA1FL",
  "key17": "4Xc6ZJzu1sqx4pRBaqPN4tY5rnaXBghjV8bgk8nB1a8Cu32oHe9gvurePR52xsj4bcY8yfpDYQxt5kAW6DqFEt2D",
  "key18": "5xzjbWBmdXJ9wR323jAGmhJkoCWdsCQSS4ehjvVEPrvTizZkn51RU1pHMkfzi8aDvdHDDMtx3BaVg7iigCizpqNj",
  "key19": "4Wpq7esTVPx5sBjePULg8K4EigjeWbJYTDFdEjDkSFh4NXaAPDjwQQH6JuaGZygLbiboPYJ8Sm41rxuB2sVoV4LQ",
  "key20": "58bjXdoFLYtcxxSG8nPn7Gw2Kyph5tbuNNfaKU7yUwiod6TEU8ik7EVfbVF8MP5yt5frvw8PabRZLmko8dgMiybD",
  "key21": "5qvon2dREndJcaU9kVxgUfFmaDGnA5JftJiWX66SSztu13StmAdtDdZ2Fdqn7F4N5xNj9rM8ncsjcffVxZbtgA41",
  "key22": "3EDq8GNWfD4Y2ej3Ljc5hepvw2sMeFJwu71EEFSGkVUVCmeUjDPA7svGTLthpfvb6BpS7cwdCMi3B9m7SasRXk5d",
  "key23": "26jiP7Tf8oziBWhqzCscECM2WeL79vAMgS8pPukAzfhkuLsLfwXa5s1qxKikfVdfzRVDo7Dm8J5Z4FhZCUCxkq71",
  "key24": "2aqpbW6qQJLwaZfE4Wv3CKrAqfZaVSKsyEc9D2sEGxy8SoPWVJUogGohbQJFpatf8tk2seXdGj4xAfWrZJs9NnM8",
  "key25": "5CCVVo24FDQxkY3RU6MofxUogLoCX8gZWDVoD3T3CsTR69qk1SdMM4TxdL6Nb5JcRATxyD2YsoCqWR2gef9Sr25b",
  "key26": "Er6D25NxJfxgeDtRhbnoquFBCpb31mwJGxySegmpCWZnjvbVnVNUK2upbHGFYwGZ2LLMqNvNAz8bfST22M5Q4Qo",
  "key27": "4PL6P2hsPz5U68QJ2fjYpUgnXb8h2J4FFvEZnTc3jad1bx5MBdbZCSJFdZ1tQuKAYWPxqGqqRq4ZUV17SKsLabS7",
  "key28": "2vZi9ftbpKyhLWpfhsDCQbnfmH69Cx2GTVSRyHdtXSnmxPaHhXhJpCqZ7voXMeZLn7Quk8JeousKBfk2RYx8uvRR",
  "key29": "TKfmNzb5gKCWWR1PnEiRdn1YbH5VTvu3eTdusobYYSfZ3LHFs7p8s7u37VSq4LgxthDUnFrH23tu6wBeeMk8EKG",
  "key30": "3ukQRWuEBYM6D82onYCjd7rNNjkT85GzR22dPjDcZbjptLbaC9e2VVzz5yLhcmAnWWDgsWufzvg39a68Egv4jFY3",
  "key31": "2b4ZKmdeKnjPzqBvW5XtZRzPwig2BpBsrAidSwjnqLzxcj8aTgoVe1t3jP7jw2VzGegWGyNcphNe8Q3fQjgvCoxu",
  "key32": "2TduXgC4zc2mUZjX6vsPTb7WwpJX5rXez3dbiL7hfjTB4ZLCV2ucKnY6fPt5vwf3eY3FjyRaWhcRgC5gcxszJ8yC",
  "key33": "3Y1cbgvcNqcPVJhXAiBJMMt3s5xRhsirGHKvVXhS9m2UsTwJbF4Tvcc6X2AiZiXikZ6jtmrKygrdpbxqocYVLzve",
  "key34": "5ZMSARgUTz1kJY4FFNhubdcsKJLmvNZWGMJfu17X87zwFQFKQq2kW3VdjyycyBMggpc9HnSJs4TnuzGSXZbKFGDZ",
  "key35": "4kCchBfeSJQD8pa4vd8JvwcHe5FkKYjLERL5wvjCtLeDtio9M24Sf4oEYLGLLQTgTtF5hzi3NLw9gQBYvtPxMUCr",
  "key36": "2BqARzs99cjoha4NpC5VCW2Aqpg2DyBVv3F6TPrVuU6CifgYcsjvgGnroQKMvmoMu6eCvDPBJCJbGgxuuR1FvJ1w",
  "key37": "5Z6pWgkttwCYzVUzKsbeHYXFBUJ3Cc3d5i57V8qe62UFrji4fsuvAc7hAK7aqvffBYVdqLLkUcMsryn2Zo7L4QrN",
  "key38": "2zNMxjAZ557RyYfHREH1PPguLFayBS5iPxFbhMiCMRTs8HXEqWJjzweWtpQuyU2PW3dg6eQnhyuLB35YkwaFMfaK",
  "key39": "3ccQhG1cGy31jPxZRYJwFFEZuiPy1TpF2dmmgPb6FwZmQgxH6nsyBKgbZUnopgyJtp4DuRjtKW6jFBAeFevvigfb",
  "key40": "3BAELpXrEsFNNQuTQ4adRfGNCz9CcAj7rBsE147ybe7dVQZakXidzidmGrPt9cW48TsoBCdGA6pVWo7Jvj7AD1PJ",
  "key41": "3ihMX2apRZoL5E3puGR3AoAPwSaqsoHau5eGbGgHy8ozTwzRLZbTWc6EGynEecgbXknJCc3WScKzYZ2kviEAKQsh"
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
