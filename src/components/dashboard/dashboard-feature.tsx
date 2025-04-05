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
    "5Kus5V994yjM6grE7CRQFhyarXKTiv1Xg1aDbtWBq6RndCSZ6GdY8gzA8fNc7hS3fXeTDATEUwW6eSYJSwWLMsMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aitts171sUwErYTYhep6CXFBDQLbNRiXZTxH2YCi89jFa7iz1qFZ5kJepjTforY6iLoQMZBEs135JoTaHZxwjub",
  "key1": "vP1SXCbyHGCeS3cY13QAXVDDdWe3vGvWZ8RU7SNmVCBNssHdpciRoUNCZBRi4j2ji7KVnxq4oLdaD28VRCRE3Hw",
  "key2": "65CNZRo3UAJbMP9WB3dkW1JFMPDEkjEuFPBiwM7tY8LKYkc69G5UbV1yiCpTvz9eihi7pXRYxTaVWExybEN4s4uP",
  "key3": "4BVqnZnRMA2TUuh2f8wm7SUDiqcnMSsHvNAZTgwyHh4L96MYNWQKStYatQWkh2anWCXy9uJY129U1sTtU8mAjAcL",
  "key4": "3dF8GcNbbM4cdprvRJQZXwSBeMRmrrir5Jo2Ndx9oBhgMozvWHkFB8K4AeLfwt6H22FWtEAwyVPRW4dJE8GK84Af",
  "key5": "2Up9Ny4uCGyyKvY5HUeya7jRD58Uk8kLindqiLgZMPeSuSCJ2XyyEFLnz6bmDgi5j99q7sJ9brxHWELTa3RZxE5d",
  "key6": "2Yefqpbdyoa2Jt3YRkuB1K7GsgAdqfp6UFTeqfcb6iGpnAMoZJK5JeKC6HQxHECAUGYX3JYF9LM7pjPaRH6bVU7C",
  "key7": "5gbvr8Lhz7Bb6t4iVEoEHZ4AHeuzF1HnzZ5ciebqv5tNYX83o35daDsVRr2TzYxDtSqiJTG7QeL2BK1BQZdrFWPj",
  "key8": "3RFzEqvfHmBd7ni2ux58USGYWF3icLfmFZ9ZAk6bNaqqge8V7vkje4Q1nzeERP1K88SBgTTYAbR8aMVYvwSk36dr",
  "key9": "5CMwk8SSFdGyQ8BojrgUmSV2n2sNAHHzrYvUX1LycCwx8gZ8cQN5keiN725G5xj157s5rMXeAKRLNj8SZkbBF3US",
  "key10": "2DGnmfDGLVYpg54woMFsu5Wmom5ScGzaYBephNuCc69SXPwYrZ8Dx51jKVTqAZSAJ6uKWSkZN4APeXVfujoZz3sy",
  "key11": "5ZDsZNVi3AFHSggGNsnV3ntGsDjxp2iuh79b58qz3ZHneeoYaeaEKepwB1PWVKzteMnDMeDGREUTk8Y13kjK6WNt",
  "key12": "4jxNm59GUYGMtp5TxKoNPTFxkKXRA1Dm3cGRE3NKY1T2p6wppHiAU1b96FAdYipA1DWPWzfq9AjzoYwg9JWKTMN1",
  "key13": "2ToNNXSyFzKoFQs1JRgZFs1hgKZYt5gCnHgknAnrPwQBXtwTnVEKcqMGXhiGuo3SimqABhU7XkR7HRTQG7SmHnSC",
  "key14": "4V6Mk4JoVTBNXjaS6fYKTUwSfhMAdRj9nvCfPbFCtaaM9RCGnS34fszcmSE48i4f6kEYuTmNeFYGY49LLWfJts1s",
  "key15": "EyTfpZXCnbF6S8Bispd2jtbz37ghYPTueUBwefSs3fJfpoWoJVbGqfDFmGNNqsUC6vzvqnXnk86nzGE77k9ZR8k",
  "key16": "zmGiNF6vKWyyLjmhwGHd957VdptZLM35vcqyX6M2sg2kghrkHQb2iZhcst3Bd6JE5vJh26sLgTuYDEaMdF2qUmx",
  "key17": "4UMxQmrqVMpoDwYjKUrA7Ap3UoESm6aC4zNECM3XcwJRpwbR6hJcGjMM17nETYsecgDfLiimCChgniSWuA9FF42V",
  "key18": "5KtxiFg5bcTzV75khzUgLbsYauc1Jo5g1pR7fGy1UzELmNWwxBj8UfBFRA7Vh6k9t4VzemdMW49oZ5LqQB7inxpF",
  "key19": "3gPhe6sj9S8uNeDBVwxb3fMXjiWgLZWDq3kMEa9LafxgdQyM5Ph1hv2JdJWa2rJCfqfjgWRGpp4HBw6Ws25xXXQS",
  "key20": "4hWJwD5aBpas9bq7wtx7Q82ifow7BJAGrrTLb4BprZCJJbfduf1c4oxbcU1goC2UQkkz2NPqZi2wazKjRyRfm632",
  "key21": "2ktXxmUrckA82q2ym28mDbgVx8Hru5ymMzXHG69v2LqMoAYgTSg75hXGLDRGwW7kdsUZGUaBMahKyRot2AoeYiT2",
  "key22": "2ht4ZXyp4irR7FrMHEktJ87ktU7EJqA7mkrjp1npAgjNTzdgif3jNXX3xgz169SzmvKyVhAd3yvKxZMnFL9r6mCx",
  "key23": "62RxxrDoGqfp6HMXDERbneVa6Xdg6R7KhWnqQCoG4qeP2yaGDdLB7J7rsFCKQov7MHnFjPbvT7JK1XjyFuiLkpaC",
  "key24": "6487zyuC9Bz3GRPaxZj5jkBobH6jRYXei3g1nQWq7JAYcxZFuJD2KaCy7UFHpFHpJcnWYmoAFk1cB2uDuSdG16Tg",
  "key25": "5o2ido3ehtSCYd1HoA4ZtDQ4ZqDLGFDRnH3onN1moDiGhDtgkqnKpYbUf4GiK2eLgZGnwiH4EEb9h9dm9PjsMNsZ",
  "key26": "5EA88pvMXHZ5wC2K6U7kNxCwSbXEE2ih3VhmtSaMBnSh4S6wiU66mADjSSspCwzjGdXbbmzzDaz4TGNY7rS8hm3D"
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
