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
    "5QPZZZnSFuic4iufgBmQCPzjAHu5StpaXDnGJPipQDH2uu82oGXHYbCyT7nHqDbnMjVgkfvZJp3nA3rzCw44cNKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdFCk4JPx5gF9gNa317D8m5TL9XF8Ycis1eC5Z6F24uHYvSq9YpQd2HuUwgF91kiFUWHiHgn2fooNC9UBRXKKrD",
  "key1": "2oKCir8o6UENqLB9tT79BSKbhZ5b2cGtJzJqu6WaqZt3khrakmV2wgF1RtTBQdri73ijyY5UCC2Au2boFDiVDVTt",
  "key2": "4LppCQwpTKyTNYNukBNbcq2Z5DvyWSGkgyCE4S6kMdVDZggciynk3KAvbWKaRTSqU7k7sYSiZVLsrnYcM66moQKK",
  "key3": "4nZnb9yc9iNeJeDsHo4VymjpuYAXd4QbdLpWiUdKEuDyHGVUHmQevC14UfcXUX8152VVCkAFrQeDhQtpCk49L6sn",
  "key4": "59aTyHmyDv3bFHDxjEXcavWa8MFZ72xXG2PSPKbfyVBH4sE9EZTnxAMkiNCaS5bDo6vW8iByFBW36dt7knw8ZkzD",
  "key5": "3wknShiyKhT9EHr3473vrQJ5mq3T1aue5cNj9sqomFhij6eUuz8PQyyU4GH5NJNE7MHS76CeoaK7j8m3iVvEr7jc",
  "key6": "3YpwPUmc9FgymCziPTg5Kt6huDKTV41spJDdoHikUmL6orp3QhZKYDavLZQVS3KuEC8Nmz1eTSVtDLBxj49yxbi8",
  "key7": "3LisezWupnkiQSkypM27rkeyXZjZMLyxfujuK9M1attoz92rcTyvzUPWE3iGgSMYBVrXQ8uJnuzGDXzddvar3CXj",
  "key8": "5WKDxPyXJn3d9vnrAfK2s1aSrzHuhaknaFF5FDukexVGcEAdfB2GF1wKHsaJuScmtRKvGNke3zriEUBoJo3BEMAG",
  "key9": "2BQPV8353fMiSMJZ1S2G5i9UoKyqBogxwvpFeVNwG1LebMuSL7onnHezU7ri3h6ravAexcQULq2eariCwnUVxLN6",
  "key10": "9xFscV5p9C72x1niV6iJDX5UqgszJ9HJRnyNTgFd86CujMsnNjS98r8RLWvuhciaYNi3G3WYUsY5zZ86UxFPj64",
  "key11": "2wRNiPkki9PWxoZHX8MRVd1VkLNNZYqWEUQ4t6ys2Uk53iLqnD3K3QMdEahg6g3CS81d3BAdXY74rXwSfPXpuCYo",
  "key12": "5z5YRjUek3WvxLUBHA1Thjp3KZdGfyGoUvjmJC26xBeLs111mqnvQFpudPyxbSymSDnFkVupZ85J4U1TTd44yPuw",
  "key13": "4mCLDzeBwcdLx8z1HT3Ph49co63GcU5Yjv9RAu9Jq6mgHF41GDeX7S1iFbapVPzmnBTxcHRvEKwXFEpM5AXXn5cG",
  "key14": "5KyuYm2hMg2RsRSpZfy1XFQxscyurNA8cgShbm7YTE3LGC9FtEuXf5GiGSN2vxpB1JnpyzHgvfM83FKo8qE7qvas",
  "key15": "3AqPwnpQ63niBHfuPwC926WFoYqVUgsfPnQ6B7bhoVLfBTj9MYiaAW2F9VjYVnGy6K4mzQ16S8HDeJYnHLmoJRCt",
  "key16": "3aHcaMk8Ct8pcaNLmTRAXZ22FAkyYCNoGRgiWD6f1vbKPKeAQpKPykxksodNTEVofA3YqTJiC1YFSzTzTnvSuALk",
  "key17": "2s28aRdQZc26QmVL3kQSPPEcjYUuB6qcUsiiXvBtnoX17Hd9AKe2SdKjvnvesEcr7UuxAib4XCBvBEq4pj2ohYFa",
  "key18": "3gcWurFWqKhqFbD9RmwAYQA72qZUfnJHhB7MEq2Labo4uyPHbRBEG1UmdtNwW5fyujrAjrr69sMZgtXTGK5qWx6D",
  "key19": "4zb4shxSGtXPFm6tvzMcuAoovfcifLvnJXCvmgPAZCAeTya7DGHmg9iPT2ZNtmoWvYrTC5AUnp9LVfpP3xALH8pj",
  "key20": "4tpRH4PJdmQ2MjUoxvNHwDVb7PVNRCH2JXc9MsqYDgmmq4ChBFaQ8CbJnX6XXe2XZnitRof688XRE7FpMJDoAs1S",
  "key21": "4Lts2pD8LTYL3j6Jxf38LCwEsBvSgCUTqmmJmhYEehTCnjD4hBxXrv8zbS6mb72qiH5X6GvTB6wCZP8vKopRJyav",
  "key22": "2wKiTeHrQofQZLY5D4YB7iGKRz6uKH592kbfFCrtpJMKiEfH6WuoMBhXEDFWnUCT8vMKehGxHq7sXhuatCyKbS1T",
  "key23": "2xVXMwPDuZ4xLAvB6GtvfyE2vTKi2HyimCijRR8pAk2MgcRakYAjWUdGpoBCfgWmmKaYPFHXyf4GegcW7VY6HYvh",
  "key24": "4YJsS9p6Y5ueFkFVpGBmTeXJf3Gz2msQDjr1XjwZVJ7CtPmAqbPmJH4CZTSv2TNNHVTyRtvxGVwD3HuposxBKf7P",
  "key25": "4rCwXTTsfnBMQnJNkjiRu58zvNFPYo34pVecSM8mGXp5sUU34ZqcAoqGiU2s9LkimWvXsmQsqUDSUjjzwJegEYtt",
  "key26": "2EoF2Xt7fjrAScYTZS6pD9E5va6C55fSwY1nRNBmNUqCMaQzYkA6pfa9gyFrVXXDjMrHTXzbABbMTF7MFLhroDbc",
  "key27": "5qdAbpD9mbGLGredmXZmnPe5CXw8NVT1Q6VGNaNDpH9hTTyhwMY9DerFzeDzYqoB6eJozF5yZ9LJ7eyi8hTLKBwa"
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
