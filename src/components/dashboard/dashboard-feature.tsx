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
    "PAsXGhm1wQFy7dxedhd2ymdytde3G3SSgVRjv3vem5Tmw76z8dzcGWcDCEFfXGQPDLcSDX2hWCPYhsNAq5Fnfqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5Z4auRTHVeN3a1J8gwrknx192ua2rNqZdPcH78irsi9wv6he8ZgWtbUNSSTfjtD9kfhhzh1eRBjxBUmYu5iW2h",
  "key1": "3NKoe3M47ykVy2FGRbgmDR8GGfCB7jPtk2dQat15HK5MQa1AtUXcr9pD6cg3HuUV57WNbK3YH6MNthBncX3uAj2g",
  "key2": "2eodiRc8gpjfgpnEoXB9Xck2q8pfxDYmVPHpX27MaZSxcP4R8YYqr3T4B7ye8weXj1fD99gkTURKHZMedzxqdvLw",
  "key3": "3FEe8PKGzLqFaHZ3xDDRQgr7HHqNed7yvbhJvbjYmcj3mfNuwEGfAsu5DGMjLthZ6D7VEVPb9VR9Y9tRWsxk68HJ",
  "key4": "66YGKhaPaTP25qyzD4FjrC8aH8zHyF9G8ir1wz6KUSQKtjJx4uXM5giBz5Uxn4FmcEEzZqdrQAzcojrzwH5yLbHY",
  "key5": "UTBUswE7i9ooY1YwKwHGvuPvzofgjduLJrib7K4Dw49XTRDKMRt7qohHd8p41hUSYUKSka713K9Cm5Bw4ESCD5c",
  "key6": "3fYQgekJZ972xWpmsxN4EcqUn7X93d5vpkSZHC1y7dE5FVHYV9MUSrgH77q2FBM3RbuYsFrvsDvfFfoPon8NYPRq",
  "key7": "4eLc7WwCkpJsg2X1uFHG8uSvNumKufKVhXokqnfaVhE7X1wCjQxBzsmuBo2DJH5eYWfxZs9jaTxehbHyWL25ibEp",
  "key8": "2e9FGp9CPMnWcd3iDPAwktNkMoaD3onUSX5E4EnjXGpwNJTEWNV5HvQBZevQmBfAWfq3cy4PWSAxeTgjPoYJCQgt",
  "key9": "2HnRP1JXsfsHuKQPv5aq2Y24brKBRg5pS9bVjrL3y3oKNMtJQoYiVACdvebeHkoRtVFV2dVRNdEbYR23rLmi1nZL",
  "key10": "4LUWyatYSZX7Gh2bp31LbemAHzijoM1ZJcFMS6dtUUD8Gocr8XVR6ziU5RAZ6oanhi6dCDpFMQVHJ4AF6jrKfoDh",
  "key11": "59JJpP91bZ6yTzkfD9MP5DfMGSESbn88eUksPnPqUzYqiM68D6wFzPDHjKNwB8xhKHvdJUauAzPqjywQyrFw7HkC",
  "key12": "4Hpxwaaxruwy5SYLQ12tX3dCoTzL8Vgjh9wNv7wyXUkoyFd9aXi6DA7oLwmd9np1RpC7QGQf4vGMuyFpuh9Dmp34",
  "key13": "X4CXizKx7wd9BadjeK8RLANJXaWi3dJpiYMcrnJ8AupwgUCuhgrkfEEmJaDTydoNL7njHRc93Gg8dsj5VLcPRKS",
  "key14": "3RP15q3BD74kFnuEw1J9QszzmkECSTi3SEzNXpHb3BQ8R2aBVSQsaDm47KJjEHAiAvH7QLdcEdCMSksVtjnEAbSD",
  "key15": "2YbjCZFtYq1u4aRBunkFzELy5yvdRM77gLD3u7tExmeox85gD1dymSiUGLMgAL7tTYUJegG86bxcH3rAbPhqBriJ",
  "key16": "xXCfh3R4rkVmn9rDiMVjqBjFUsd8TzJ5jtcCYzqY5LuWj4npbB77nztpTu4KZT6BjakUjWTN84ab6LzK571Y1rs",
  "key17": "fTV4U1Q1ELNowLykaDGDPChmLHk2KdGjEpEaFWptGXQcHoAmGWHSmBgRB6kboY3A78MTX5fkaUCroqRuQ13op1m",
  "key18": "8gmPpbUHPhYBkX3RgRfPc95K2BH1kA6FGPsd93JdVHLWZRKXoTL4vQ6KwjHJivVupE5vJruqXKd26MYXaVrL5Fp",
  "key19": "4vXxtATZMUE3X9jkQMbFTWPg27LSDLMhq2BkZgu9PHxVnh4uEREmr25Vsx4yGvpvc2U8x1p4Y2VXuFQCkStom4fX",
  "key20": "41kKQ9LYKmEDdrxHCLipQLsni2T7FuJy4egJpKHhjdG24Z8qnUYxKENxyhEm8RyCN2fRV9jLJTi5PKe4qBhuazw4",
  "key21": "2yL6DJYPWSFrR6VYWWnZ7Ri3Y4Ly5PsPhAGJXbmdLZysMXgEczb6WPdUM3aepHz1YoqAxBBcXCYJqLCHu5oUd49n",
  "key22": "EscRc9vDpV7RwhiUh5D5rkhF3ijzzNxFwJPU4ojLNixY5UBdeHKNBEWyDx2ABjmdqdySQbCN9SaRQQxKRwrqNoX",
  "key23": "3vmuQf6hrHZcGrLPQSf9Pc3TuV55v44A4Bx4pp68hajkL3S6QdDzZVfx56Ew2xpgSLFnanYTYTFYxodfDzuDA2y",
  "key24": "4oRQHP69sKsxo5MgNNjbRhcmujo6pD9BLZhWTSAW4UmEdGJR3Fyw65tJTHSTCMDLQNUVwp6YEvRmoBzMEXcujYab",
  "key25": "38n9deWJshGDD3MdmENSG4wvJsZzBzqKZC8UHutGa84ED6kHC2AGqA6V5w4fRCFLMV8WiUykDEymSbFJ1qiKJ9vh",
  "key26": "5ESpDybGgwU4z8WTerSHWS9GkcRdNV2vjNDhSo1n8tsnAqJRjZpr9MbLgyMvs4StVmaWXFatKjYTJ6j7ovp8H33T",
  "key27": "daWRCcvXc23Af9LzofqKR3SYFpDDVQyrt2iCS29gxcTqz5EUna1eD84y5LTu6yNTPQs5r74UgqGthLJj9sBzjd3",
  "key28": "goGxLbV96P8hPTuDU29gkPMJpfMg7MvWHxWJYgSqqkmggn9eGdXN3NY8jNq23TYdWKLjuzMYvUFWhWRLBXQH7yv",
  "key29": "4CtHy7K1FizRuRHDGYvrbgaivqVXALantTSLbAbRZau8PMc5KWx8pp5Nov6awTtmqzZmPpcTZpL2F4qaHC33SNFF",
  "key30": "3zEg5PPrEmj7CGG1uPRCn4Usc4uKDep6ucbM4hStvBm2GKZvsmqSnuM9gzpyhjVgN3u4JDNt3E1Wi3iqhrpLfheT",
  "key31": "4RdCdkj93QKTr4TKsR3eSUraqjSsbQAtvedGKVUQGDZk8EvCiJdaJL7LyvniMj5xqCTLG9U1LvUTRV66UFL6pKb4",
  "key32": "4DX6MqSi8R149gzmTvgaDG7xnMfAXAh6aiLQ5T9TtkEnNKfyPCC3gwgazJbxScSvjm7gNSVTHFK4gx7HKzBgGD3j",
  "key33": "6FpJycTg11RGpjr7gzqBRFPR6rBqmNYwfzHRFvs7rJTGsP4vwW2t3CEDymka9kuLAiBTMffuzxdBhihTRsgrLYG",
  "key34": "3iDkt3hjTAvDu1uV6DZdfa9h81y4SfB7JmHgqsc6Be96zjVRSyM5KJtwrchCUX7TGiGF1TZhauM82nKmKNaCfNwQ",
  "key35": "45RNjzfTjqFHzKYEgr5fYTkG2HtkE2s3xusaERP9VJdzkF1QkQPN7SRwFLMzRrLsJ6mF1cKV3boPQm3KUWVuiujA",
  "key36": "4sMpPtKqNUSaJZzRcvK3aA9hgoofkQoMpQ3pBHKtDhs8z5UJsuY5qq2BhAYikzBpCRX4n8jPAgiSJzBNUwKqNA2m",
  "key37": "wQ4CTkZMne8RH7i3gi1XySjAuYwTYaGVsUosTSoJaLLX9Sg56eZhUFPqePXc44HdDaRn3mYpdVWbpHdcqCgktzw",
  "key38": "3shrTQaAJ5pAHrx21qbtEiM6us9zFJZhx7cai91GRHDfBYxiV6k7Gz5wFbBSRLJdVW9auepAAdvVxdfM3p5N7x2D",
  "key39": "5a14nWUGZKhLQ7TFrdAtDjSCmo5s5pNQdT1aH4YuipoE5cbacbdFyQE7oWBzXoX8f2LVzJvg33vMj1kStcQYEFnY",
  "key40": "3AXMhsSg7dzx8utpdn7Lmv9dVPA2Fj3odF1Cy1PxSjkQ4E4KuUTqszpWn59y4fLeAjcCBtqb6Mx5ANJs3YMER4vB",
  "key41": "uEKV9goQj2VBndPV91ajJTENpx1EyhwRDPjen34NCgKmthn21N9k3m8wCWPUWgUNpCX9mErWJAfRi39GXRqkJEq",
  "key42": "m9f6VZqmWYF1ZLVzJ89B5FhRRYcMt8TRxfjbXy7RTCvLj6GkcrSQk159eRfp4e4rgP5XknHnxAFXp9oA3ZZfpuy",
  "key43": "4hhENhy91dqnmhWgE81f65KJW7dXo8VaqjoNPyajQMDGwzHgL5hFaz5AaMf8F88EPbP83jWds9XKRvg9HKjzqZJW"
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
