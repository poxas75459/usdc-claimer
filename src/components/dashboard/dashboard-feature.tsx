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
    "cAw95MBiCFCBhNoGrwjw2DLSUtRSxqbQDb9cQ6VGLh6ixJ1WTuy9hgBYUvPgrfuAJo9fAtQSkHViL1CFnvmNGod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZUhPf5kdCrwVdV4dvHTDGpbp3joyNzTSexKESwXpDrP2WmsGF3cYZW7KNvVBneQBfuQHgcLeU7un5aU6efHZy1",
  "key1": "uhgX4kQMQjYh13shdsnZVCNGEG8Fvuwh4tgdSv3f4at71EdYLyYarMfjgnLGbFRR19eA4igpRxtzVYsi1wFizF8",
  "key2": "A3txYsTHkp8xpXjeH3PW4ub7zHpf2VeENxhk3S1x94D58fh3rzhkmPu2EtCZF7dHUDPbg4dqD6uFv6DmS5Z4URb",
  "key3": "3XffybFwUyQGmApFc5SdovnoP6U38FgQ9oz5gQ5MnxDnw3TLt7tzHwCD3hTqyjQoe2FYtLtdZfknp3CPGk3S44aJ",
  "key4": "38V58AnMRWFFTFEsHD4BFjuixDrGmGAVvS4TLTB1LJeeohtr5nPXdbzdK92zkFQgD1KBmsyS6bsw6h9gS1AxbmQi",
  "key5": "4Svgri18x2X723PUXx6HxsmwwP28Gwf2xvNe7b3P8bfQW7oDBZuyXru2zqtWwNbU22sHMoRuqZqWsWRvimbRDLNn",
  "key6": "ehmr4yPDJHcz7op7mzCcniQbz7cnhEiXtbZLwQiMUQqibgY6sGKEJr5HqHF7jRpcC9g7MnjJYSZQritstcsFu8y",
  "key7": "4aoRkRHxG53RHohVyF4ePa7MTqwxQbGfahR4xUHAmXVEpBkwVY3msAseSBXgDh7SwMViTysVQCiGv1z4ka14wPTJ",
  "key8": "2cR7Ca4kujq2b45KgYbu4sziEfqhZKKzBzyb1mCtoszQ9vBafDSAKXJyjyt2wUM9cNMJ6hqZcXASS1K4g8APerbq",
  "key9": "5umM33bAry3BdV8juuzG2feocS9omEWcvKaNEKXGeqoqfviTntLoLBeGppvno4pivaZGmjHpCqtfEd5MxJXs7Zx8",
  "key10": "2rkLWK8FH5TpcaKTZ34fyCZmAwHqNw9x1h2JFixJ3DTRGAgrLHRsb4nKBsFpo6RLkgSe42WsnGWDA3sHEUihv9B6",
  "key11": "3gwKiLPFPnkzTxnQvuUbMDoxrXRkFjFXfBEoJSNnJcerzokKHLAMnNKA1aWV6Hp18UZU6AWJGjjMBixbDEsHNwoq",
  "key12": "2X9yPox3t6BEWaCQVwvdphf3Nt5ASDWR2vNbCLgnEfEG5mUWveuPrT7zGYmqKCXmYB3kBWp8RrzJiC4srhSZZRxV",
  "key13": "5B6g6u4ZjYQWwssqpS96MtukEQPzjp1SXmFogrcAoufLtqCyuR22ybmTYnsiJaJYz5zY5AA29nxXdPiieo2GQBmP",
  "key14": "4hV1sxbmanA4NLhxcnuZ1tQEa1KTa3rx1pHUgdLSj4LyjSybS1SbrGi2ji22hGrvEGhNb8EwBLG5k77BuKFCi4Zo",
  "key15": "3fP9prnx2mJX8ukfchG5K6pHXfRU5HnnXGd38YmHTaPuMXeWesXmq5USSRx6RVz1rrzXfv6nJYRVTepnne5KCyxT",
  "key16": "4T5qPz5NYMggZ8GJARiejr5YEaG6qLKva1T2mXDkin8EUARH1BCrcqrfgHcoefpuecm6ri8jmWceSL5pzaGdCG44",
  "key17": "5qFuoe51UByej2XE4r4HQCRrdCemh4RenxmWyXARQC3hwdzAMyWftQui45GvJgPeEwk1tzhQ5gehBqQYVpgSfNFx",
  "key18": "4cc7jnGy1dtJpRnBY3bh1xYpyn8w9BJjWkpyQ5JiCX57QFiiHDLfqZCwvjFsrqTVB22UkiGpp95Sis9hBBmzH8c7",
  "key19": "64Fpr6UziPYbEp3WB5WjhZq1BvqhTHt7bSaCj8XWFcSDTbiaLCX1tL9YsTFkxg72A7fHz3gxtxDjY6aLHGLWvxbg",
  "key20": "ThBGnaPRiBUZsYzinkZq6sSfrAUUBRfneSt4E7uuyS67hRPdxH2KYF86zUuYouNQBK28jGaW48Fom12va7RvbTQ",
  "key21": "23GAckXZjt9cT7p5WzHVjk2gPWjwhCSj1uqxHgtBTxaS3cY7Qe6QzEcjgZbhHWQCn6SxRjR7UHbndwDBv6J5wKdi",
  "key22": "ECdyatwiTZcWjuBzdqp1g5DRyBsh4nqnSbB9izBq6FPnK9yLGsXZv4xzwq2Frex3uG7yh8uiphPDZSEnpo6huQw",
  "key23": "4kzLzBDGpCwUvQuEMSxi9XRrjW7MwpW7NvNg4wS668v1uziK3xUAPpdRp5hCjQwWBrbntJZAvnrWSswjrKKhyako",
  "key24": "4NjHJLFwEUti7kkTg1VFahAEnupvC13AuAopAKhTxLVPkMWNDB62yByv6uRJLeiW6ZhGBH3j9rhB1vZqrbey6zN2",
  "key25": "4rzGGZKUwo3bssebJKBaVa3rqtYwCimaB6Z8uFLjzMcEC2aTNBvSgZoyFPPUo6waBVRXqy494rsGnrjpVN5PPk3Z",
  "key26": "sBYz4mBtPxcLCgoYvmnuQkGNwD1zffuS1hnboV8iXLmuiSs1XXg51YN9Vxu1NajRWG92kPdRbSJvd98Ce9yxPiQ",
  "key27": "36kzX3WcLRdYsYHxdTZEFWeMsSqNZWqeJjEHT5XahAiyxfB5x7kRQCAhgWuBUeUnMf9uAgxeQnMY2huQzpvBLh4G",
  "key28": "5zvvpuCX2KQwicmehVascTouQrqjUufiJyJScisicX34zp1vSdCngLhzdGPgrptokJxrhbaVpFse54se3fTFcGjo",
  "key29": "4PhwVYPcWGamyC5gghmdAZY3hrEf1T1wJU51dWY2xKGsGrB8fcZjLYWCVk29XPt83qHDRSaaxtFCKtNHjnejWfj7",
  "key30": "3Mf4CKHLiWcUoBYpebaknt6qzq3ZWxZFg8496BMoojD4FYqaruqy1tSRqDn7PHCisJE62XTuAzPbGyZtdtHWyKT3",
  "key31": "5nH4jgravdFTYQHZEkAo885Aavbh1MFqHmBRnGNQqRr7xcxKa9wizYg5QYjHwTtMGAPR89LWmDuwo1EEAg2s5vRs",
  "key32": "4seNSgtVRPpe3ZWCfDNKQ4fk1XdCfM4RM99JdqvwQa756nbxJueC4exbzCocwX71B13roJc3Ty8f3Rao5mzUou3d",
  "key33": "3kn2kaFUn8aQfSZ8AnytZmKCDr8e95ZFXiCzgZsJkFk6rVaceaHPLWwJZsLaYvV6Q4wz5ABJsJ2zaxBaRLz8RZY7",
  "key34": "3GMGPqGibsb7ZAMktnJSbhzkaMGzBaS6ARjEzesHtNaYakuLiHtJ6RrUoS26YWpb7JNWLtsLbc4N7ZkAZNskG68D",
  "key35": "5ZtyY9PJct1Gi9bU5cJbQLq17CGR7AsuKPA8NhQSoXGJ3hVceyga3f3QQQzH8HzYh56duiwksPCEtnog9HfPHSCR"
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
