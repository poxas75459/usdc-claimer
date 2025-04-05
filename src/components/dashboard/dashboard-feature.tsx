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
    "34qJkmosLhUH8TA3HWCgV8p9gkHxxgKVrLVps7p18Jn2ukbDJjvdqkGSF11Zg6aTykd5H7cGNSkWVsi2csVCXgST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A7DZwawybD1i8tsV4mdeMmPbmqsy6nfgp1qcApyXi64hoLn3UiBAp5s4R3iYUvRSRm8SvV7ee23TiuqMRLnq7s",
  "key1": "448T5rm5e95HnrnZ6YXYR7aBAcUFWSuRjsKxbwMNCLKHNHtkYhtZkD1FiuvncG65Eg1uT1GWgp7f6QHJFNVvpEd5",
  "key2": "2Yt1zwz2NCJUQhmmUzTij9HZeZfX4FiCBgyaL5oAUtCeHxK6JFacUCq7FfNmubHoyDTsdXa8ikbXkJ2m8eJ8qMVs",
  "key3": "5rCW4fAwCm1abhXCU8tZkwoSVq7nd24R1sPY4tfj4WM7GXBpAHYqGTspqTg4WrbirLBDBqVByMJdTmKvaVopFhwP",
  "key4": "3waE6mn6CRGsDnfJNFs4T89TUBdxBUGrr2AmGevVmut3t87HzmxaaZuMXACz7BjQtX4eeNK7wy66iA8UpWfJTMwF",
  "key5": "2FnrxX33GRNdYy5aNtbLktB8DYgoMeudQRbivKWtB8tNe1HFwTyhU6t7eSzx3ju29zABmzDGyWzMs7KqdKaa47nP",
  "key6": "3YeziYngfsUm58th2xURC4qdho5k4Tv7N2TgfQcHHLoZBw44De1E9NGj4DLNjTZtguoukzgBCwvWw7QhKrZJim78",
  "key7": "GhSkx9jQ3kWsPVaZ8LUbEKuEus1BusXJH1QaW4XpJFDHg39QJuoFft459S1fpA2fwsqU2jbAEH5uTB7BW7KrCAE",
  "key8": "5kEtnzX2FYaB6W4JEmus9rTNkcgNAF9tKT7VjB41CJvN53FbhFTappW7wNT4wsG9w8y88NwobJk1RcHyRtzyJRQN",
  "key9": "55wogS3UvDxbvzyYXyoKAC8GRZNzNFbtHMLWcJcjJWqL7ht2XRtKYHjYbZCAQZa1W9WJvMvj1hJ7H2E8voEWZH78",
  "key10": "5ZeA8Ut8Lz22BWF6vyhuYr3rcK9PfL5Gcgj2hGFuWHHFqoLVzZ3a9pwRZRUrWNayQ3qkShCR9Foj8jLtvQh4FSvb",
  "key11": "2BocQLXKzjgDHqqLT4zVQfJebtuxSe19SkV6hzaZQgkjJC6Xxb9TvqmCoc3vEZk6AemeBCWaGiYUTuy8Xw5wa4xK",
  "key12": "yYMsH7fvzb99UuuLAhNy454Ww6uHbUDCNpaRUwdAXQGKNhPzSzwt3TTrT2Nbx5pdKnnD8w9XacZ8keKEn95smP1",
  "key13": "4JHPjfopcrRf4Hmvk48AhgzpahYCKpMeji9Yw1bD4ZVejrWPRSasojExZ3AkXsts1etXsdVWxa56orkbEDaaU7yU",
  "key14": "TPqQJ8JqvcZS4vMjpDPLXMgpAKUQ5oqFNeN9XPv5RBzZsnt3kcxx1rxrM6eehkAndGkvUeEyLo8Rydzr2hb9iUx",
  "key15": "4FEBs7GGpvQb4vs5FJsYRwnwm1WZNSz5gsJAZZ93YWeqTDSQsxKUmrhKrMGM9ELvhqoGUo65BHEiLjH19AfweWea",
  "key16": "5s8N7oeA5EAwDXAewrKbguGFBTmHv6kTiNQHuJXYGyHQHZqcsaP1UDWQTtFLXwyADJgkDSSYeciYD2Eu6qQnp8mn",
  "key17": "5P7Xe3wt5433dF8RhbERCshL3LcyA1D9ayfNVc7QGSamQ7YuL2gdmpqG5Ehbmmw8Fw2BYfP8wSbWgpQPC5FAcqzP",
  "key18": "5CeBcpFMWEGykEeHN9o8DHPEz95v9RnQmgcdCKvacbxEja9oNZXKEHUkmjKp458NTRFjrumcZpRvzz44DYHfFeNe",
  "key19": "4rVAMQtJmZALsPN6ARREuJQgwxd3QvZe3DFRogb7XmZk1KFVH3KJiEkPYFDhW5yEJENeruw3iAVofkVn2AfBx6ZF",
  "key20": "2fRbxH8KYJYTQb9PbRfkdPghWCBoeyW1U33Nx946up3azhGimDGUkov628ah5Wwr645uvGgtYhvXCjn5nEoDwW8r",
  "key21": "69T8BzgBQsKvFLCd8BuCyvrfQrdmTpqndYffd9TTgePawg4jTki5sXnKdpa5Vf8otQjcAa1YsP2JuTzNyNRqNf7",
  "key22": "RNMCyLUwpK2FCR1mmaquWVJxUfptproSPyuUk3Ja5peQ11nBG4VXQvjVagZUnqcKKW78gPU38h53ZyZ4crAzp8X",
  "key23": "3toGKuHuqYZnDyfiZtPTLoCd7FLXs7fQe1R6yG5DaepPGwtYWy1scGVZsq5kmbHif9mTYYPSpcEshz3sjZrgFvv7",
  "key24": "24qrs7AZJkmmmwBsvvBDJpJhUjPvZBoBuBnhs5t2g9ccPFwWtiQRLdHg4rfSKZn1aGcfDVgKa4yfbkfwHCKGUnYy",
  "key25": "5rBrZTCNR1BDmTvBGDmZsKuMsm37wRgzhkai5ZRCDxvvLkxYD5dadC2dVpackkHQ7yPLTqhDEwXawEChKXypf2cy",
  "key26": "2aYNSfTzfHf3set788esau76nRRYKptsfha9Ez8zthjxgekyYKSW4npesjEDuxEfiFxCw4ivE8kKCh4q1UJcMKhc",
  "key27": "4xEsQGHuDA24hTwYZT6FG1NK129LSvcPzprJ1CJ7zc7kmJNNxEDd2GuCvKaho6RqGS78pTRwng4tETzugxvoWhrD",
  "key28": "2oV3ygYQr32HzxLtcjQdo4gYhyBojU1eUvEF1z3KySjugUGYqsVijZ9CrCeftsQcSeJ2tChAcReEM8vFdsdVhw3A",
  "key29": "3ceLiYSWHhvKsWdgzSCtmWDXFRcrRQJvuVieQksnoQ6Qbkqm9f1eJbZGJGfkhTWNWXDLWFZJF3unHnRbw3nBxdht",
  "key30": "3NeYSrpb3UGTxEH5P82QnTTtApAsm7pwUMP7vX6xesrTm3urkmKH5xApJ6xnEtQiAu4qTGdFGyT87fchVn7VeM4N",
  "key31": "27krYD7p5qk3vSDn3fgwQVKsF6TfGroscm9SF8SVhD17UCuiBJ7sduPCCfSJ6LY9FLxatgSUMmP7fikkRHy7P3mp",
  "key32": "2Pnjt3mHi9iNa33oPKw28Gbud5oWLYetxMJJZAV2ywa1gZnRBuHeu8WuLo9X6C1coRjK9Y9S1g6YjwnCRwf25odc",
  "key33": "54xCmSRFTnHuNRdbyz7frgwicSbLystiamqoAYyqNFNXjRxZ9UoudDt5CCgDe6Qrrdo1i9sktrMHfHonqiNV7XSN",
  "key34": "5SC3QXt9ZjjvgJ9SGTW9W4BJWt4xiBegVXndPuGXuLyF9UiGB1iRx5TULm6bnWWGwPVvs4qPfLvkjfn9YoPHnnZ4",
  "key35": "2WWqZ2n5YtevbvdMV5ScXwTqfEXbZ5r9KdKsp6BGRDdcAvqKF2zMAZ5WhrZvh1jWEW4nzNgpvgntoMNpXcyRWX2H",
  "key36": "2Eb7zSGPFzrELGDLkEHoVYEBxcZKtZLbJSJ1WXEfDgvQvRYRgD37pJBYAbfiYRHdmgMX3srSWLwtEN8FacU77Cn8",
  "key37": "5vieZC3cr4gVpBDsCr8f2tfK2XMpiB5DwBgqEiu6sr7UZW3HREqLrJiB7irqarKktogWKYLukJePKcvdkdD8onwC",
  "key38": "2eBDQrwf8VWxxnYDMcPPdtqCSRYz6TYLjm3662kpH2QLGm8MkCUoVD1rr3ZXgEqd5x4hzzmR2iqLF6prLmMnVpjN",
  "key39": "421ZTnLH4LqHpBp6FM1jpKNg5sLNL2WxmMdFxQXZTNxbUdD6bdwTTqVmRTiqNWdnZxWruuxrBrHy5d8aq8N2qjZY",
  "key40": "4RVjvi99oLAQAHd7rbmSrfaLvZvHKPWa8gx4GJTQHNg1UH9V1vZaNB58VPSL7ptxph4YY2ELsaJG75jrdrG7m9Dp",
  "key41": "4pTevsuRj5rsZpBceRnsbmsJaTVThEvTSmuNvBR1PcSWM293oY8EbV9L1StEbf1p3XS3kWrxX82bqpAN9rRXUGPc",
  "key42": "4niDxu8AKB1sR1WQ7kLyWUWT1u9vwCk4UUpzsu4izwm88bn3gnPv8hkZnSfBEdx72ivG6rhjXeFV3sTz7ZXj2ZVw",
  "key43": "3Pzn1teqJTZkujB2hqcPdTVHWkML7MCx5573b2YQUBTYPLLwkCYjBZkFKD7M7BStUdprSnLtasvSFMxwMTyrJk3z"
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
