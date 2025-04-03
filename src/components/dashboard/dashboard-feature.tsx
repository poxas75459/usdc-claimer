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
    "2wH8V4NpRfEksWfdWsJu6caRSjTs2Xe2etHHQ82QzuB4QTiW68wiGUyuw3VqjzrQhZ86VeNri79B5PwwmDmfwpLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vf7Y3t3V2QPCQrFvnzJwUhwhQfAPC6v9LJ9w1HorW8MCVHboqrByAqjmszJhY1UTGxFpMSVMSvCJAHPUoLUuZm7",
  "key1": "bFJE7AYhMovKmAcdBEDxcKFk8KoqGu4Pnkmf4S6cx1ZKMbHSdpKH3HU1hC8jMoM3iMjSh96v3WfJTn3oW9XY71U",
  "key2": "4j6FxfEB8GWL3VHaAJEntGSvc2Vo9eXd8wQEUazEHGPZMFzNBoQ749ZyxowArsuXrrDCbTQB33ukKMzg4hoHFQun",
  "key3": "5vtnZQZsBWZnV7P82hhjrv7gdnMmqxHeGxx4sZPdJjT9x2xeSd4ucDUNA12WXUDUAgygpMQtrhStGVWzAVZUhzKk",
  "key4": "24JrE6wpX8hunz4QFi4hwakCLBSrEXY72CEE3S7NNXovuUCuNjPnDpZEMtBTVsTkgGRUrkfDZxBcqJUbwgR1SyhQ",
  "key5": "5RVMuMRRvgRWXX33Ri4xVKHpCejeNMPakkMSxAYdxihkhma1H7Jusm3SmM9pNSELYLvS1XeAqci4XF3162ggNtko",
  "key6": "ggvf5UtciEGgyJy1ZZrQ1jxLMi48Pm8sNqZbZRgy7UrWKVrecaSjGm1fbQk2gnrDrZqNJfP1HnYSs8EWdfFkuES",
  "key7": "53j82zFmHYga6TW5NtwbNXpYH6bWa8u5EqXq3PNSyaHSXTED4DYyn76QLmjGzMoHny96swb3BQrk7A8TuK1JG7SZ",
  "key8": "5ESnjFasybeQ7pthto6ypSNndVJP1p3TE4Cw4Dpg2BsaBPdG7kWmBgDz4SSWsEwozHy4yN1Sqd3TbJrMMSs1VXhE",
  "key9": "4GsVMWwDr26zqgXEMvP8xYNckV8JQFSVT3TXhXA5BCRhEkU8BjEU9MEYZAUzwpNNDHYpkVcKzGzqa2eN9hEPsS1a",
  "key10": "2Nm8oWKSBAAW2XvAR3o4C825PAa4DePQWSdtfojr2fViqa5EUNmevAjMappWZjoKpkZuLAhY8huLXiyxeZEwbLKZ",
  "key11": "4wqRfAq8waecsScqiLGzku6WPoALx9BfYDbguTmLQuFBsBsGtHdYpxCLymchJ5rRYhH17cTgtASCgfdbv6xNeVzL",
  "key12": "2AJmTfH4tB5NjVFZVecb2GaM1tPvTfcWC3ukG9T1zr8Wk3YYxgoth3xWsFGt77K54D9QkYPV4Q2hNSFfMYMs1Tqg",
  "key13": "4hQRRd4bcEDVYNQ8io4Xqs5BEqAPVGat6w6otWEw4QqQ31NgPX7kbBXUU99AVafRhmqMW6CnBH3354TcpZiqUV4x",
  "key14": "Due4JnXUXjTAEG2UkPbhKbUiK8cqtKTLjcJRQRo2X7Mi4LLrUfnBaHzZnsxhBjZugZXphzaVLK2LhKa6HqmmiVX",
  "key15": "3vMtZWehwQS5xsnsucw6rs47tkr4UGnJbrMLZjXjpjpGLkJwFxptythcwVf8sPndrEG85vzxEjA7a9QzVMQ3j9cj",
  "key16": "4hsJZU8t7qNryEA8dduwKDqLhJEZSne3w2p22ZZ129qCFckvLRvGGXm62eHPdwDACr1xvMTTLZDsWbHvShvuL7cE",
  "key17": "9dqWz6ze3H23RfJxv41d6ojWqggxHhCEDFVBXAz355i7Zw83VEaapnXyxwdubtKckXj3crRKdLLmZySPsUvrfbH",
  "key18": "21S9S3dHPGTDorQdc9HgsnnrtZhmA1zSH5vroygR2LoqaH7w1Mg77XqTb8aj6b8xxKH9AeyywQ3CGJJC6BMRGx7g",
  "key19": "2BJetNTiASWcJtU7R4b4RX2fpVpjaMRhRaH267d27wAV35JnTTKnWYT3oMk8MGWFMxRR9EdZe9JhjBj4uU9sYqfh",
  "key20": "XFtFuVoVZSuGHLfJUdDUQwRmoostSMXDetJPctibuN5zKzrQFWYetzhqQqHvv5MbbxbAiaXv4pE17Xsk8GCBzTe",
  "key21": "4xrK2QFTXDo99gDTjyfAWoa3wytHDfbzUwFkJUPkjLK5EgMBompyDyorkRoue1j4TWPhmgVKYUnGQQ18H7Nwsemy",
  "key22": "4j4huBrCWtNdaPXAD2j16FHRKBBzXoNZT3XXFvLiBoVeWCKFhLWgH2WCis86LTL7g3YX39B9fGD4GJboVHNy1gkC",
  "key23": "3aiAXX8ugNVeS64cbnN7Aa8CmBTCAviMDVfztnCt3HmojDtSHkpF9uiLiStrRpXNU6VNDJ7cZC4CCdRYsDLfSyr2",
  "key24": "4TVEhXHyC4yK1jtCQUjQLwL5vHBoL4pV2soNH2ccui2Zf8YvreD3tb7EEMr7NGSWqBMkF4SoerT99Yr6VRtKMLyK",
  "key25": "4B463MMjYzoW7TDe5JhAVJ9QPLqQWpFdwsj6w7oM8NKNQZhsHY3XQhHtUEuzmQK2MpP5MCHUgh5feMTJ3nGwsGeN",
  "key26": "5NfB6xnzK5SorjgFyMcU4EdViKh1U2ChDwshukkC3n4QmSxSY4y1JdYBd1jYNZp3q6gCQDXKfV19Y7KxUzngfzd2",
  "key27": "3Xqa3Knmb2rLC4XESrEHrSLVyrvCtxpFNoVNuqZskbNMvPNjc6PaodWt9WZzMxw7fxfdiYJ6Sx23Kb5Pz7Zdd1HL",
  "key28": "5n1qseqMCn9PCkj6y9aUrPohyC1J74Lqk7e8HK4SCsybie3NtsG57mxputdu1rpMkAMUv25yCofNEkt1uyvtkZUX",
  "key29": "3JKnwjFgaDdwUASJcw2EMusvcQM26tmx5giAEyvHqEy6LbmkqttzwFYw1182QjY64KtDCoPmG5NLL88SjBnH87Jx",
  "key30": "jBi7H7HPNyuVbg8faaqHTjmqstBC9C917dNsKentiWSPhA2z71P6uajURuCcCtkqsUcoacWcAhcprjMnjJEbKMM",
  "key31": "2sNTrxMYrdwQckFAtN8TL1R5XfHQQ45rCHi6YjXb8ivXtoHwQMS9tUbfbUsCmfr7qbw25G6xvuV5K2aq7ZLK4gNx",
  "key32": "28wJYSiXEqcUK2BCodYrmTSk56jxwmcFsaSvLAa6DK4SQYwpHSBAP6L34BQaXiyU44t32EboTHFM1xMfhJbbXBY5",
  "key33": "3P5hw4cXWfZgrEgqVqAG5XUmbYEVr47XC9Wj7PSmWrZRM9d5P6PJMo4MdFM6mvcZ5tFzTdd8XvUSTMtbrHmr9k6s",
  "key34": "2wuW5qCMX5g8CH2Nzs9L1Tt9zDbEHLh7JrbqwZzVqdzjLwEnsWWfXbBPGNp3ocTDSaTPmm1UAFM8AHWBx7QbM9f6",
  "key35": "4p4nq5MgjmjnDNFw5oiYi1Z3kUR7kahE8fm9FcxmfVmpTDDPjy9oE2AtotdpjLKT2mYUi93LyNtPgoMVqvy91Mbf",
  "key36": "3azMyp9mdLCVxUy5YqkhS2yryDxkNeGTRaZ1sXcNXAmVRPhu4cKyrhFLpUfk7nGm5k8FuyCE3LPv6pK8Ky7PiPLs",
  "key37": "4aSx1B9uNjWZNgeoAZxjrtPY9xR5TDDqYEGXChZn2zrXvDYoknKRbptqtFHf5GptNw479bChveTvGow6yzN1FFDJ",
  "key38": "2UY3xwyyRWrcWjqtppTgrjtJy7iJzRzWQZdKK7e7CSZZz9ytvdHwBZ48k6KESvW3jZjrAuztT45HAzSpy5pzNziW",
  "key39": "2Gpdsk9nUrQ7skrHmtTxU936gopovUXa2s7rBEcorf5FG77P6KSD7BJi3ByH9cF6Jt9nzMdyUwGqhyEnHtuYv5ER",
  "key40": "43nK5cJWgevgXR4w69ihzx7w5877gw9KZRxzmWGa4j7KpQDsFhGGtip9U7Du7uSxqeaYUcF9mjwDYtqy74jkaVh5",
  "key41": "5GZ1BJo5CJtmPUENfBSmPqKNDeMqF53W4TgZ1q1hyhVt2bX1mvZunfp5XJLnaNn4BWihcR8yEjSi4im8DEme277i",
  "key42": "4yoW5RqrdxberTMCad4Rnk2eYLyAuwZrcM4bJc8Y9jVjiPiYHCtMXHJbwpuqe871chgCv2MktH5AVuv9ptePh9bH"
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
