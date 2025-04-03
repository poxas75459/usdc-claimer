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
    "57qJCckbf3KSMbW3S4ymk2C1h7bpwWXPF5aRhkmk47ZHq7mwHuJN5hChDS3M8Tu75f4Jp11JUkoYsZUmGY9rRwzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQUa6YjRFm4BaZVzQT9rArFHFcR9RS8gf6VySQqVvPFoCG3mTcaynnZGHV88aCHhVZVtV8uJqeBmPGPjF6Ts56Y",
  "key1": "5adTXb37tagoZbs1TZ1tBFseNjHfAQmYnxHJkKBvDkSaB93Rm9cdpuNKrfLZ7uf2qUzjP7JwauUFje2iS1Fa18y4",
  "key2": "3hdD9VGaxxfyide4jxADMgUSQJPwR1PTtXWsSLbUtevrX3hdSYFCyw6yZntWrq7jurG99WbRqYHF2NYyaby2DL7j",
  "key3": "67DhSfh5Z9iTfJ35sytVS1MUJGB2cJ3oc1gJMZMBbyMJJUY7HtzP73vwki9FoB4a22UhFzKwwmmhCT4Bejg1S4VU",
  "key4": "52K5HVazcZUZr3g1WmovTNWu22N4Cmj6GvgbVG2HvQQmBgPpwVbbi1npf8a2tPupEzPk81hywSkEydbkoSaX2fDp",
  "key5": "5PFfSa6L9SmgDh5nrHYrHz57qUx3b5c1fvWmQ8E7Dku3tKL8aNRdCq4qcLWZim9mTDFGvMfAfiWMQR3kcBPLEcRh",
  "key6": "4GkvJAf3LgMmsUNh7PaPXKYZRqo9Tuz1SHycv4mRYyfbSNWhrpyt9MsdtWeW85AZ6c6hMiUMjcm3iQyqD4N1SRuy",
  "key7": "qar9DHnJ6CJJd6ZmSMyyAggHxEkNLcvwMKqGJRaWKyLFHGvsRxB47Zay5YihzYDwDw929h4xQL6ZLqWNejYZrdc",
  "key8": "4UVreVrvz2fY7HAB3cqEtRHAVXYqXAqtuS8ZnMFYmbGQQ1PaJRs6mkx5nzFXTGJi5SPPq7vJ5ZtCudfXGp9is5XD",
  "key9": "iETcUGmkVSWPP2gbx8GiQB2a6rsddidZbVVTN1nXBqbCqrVS2Kf2QBEtPTNvx61Czwk4RducnmAQa7ZeaxRCGk2",
  "key10": "3qXHRxMijNBTEevEj5anFa8yCwApRuRzA4JTCuwpufdTV4UXGbE7ef6Y3qZw2QWFoSna3G7CE3iXGkLw7UezhAVg",
  "key11": "21C57qsry2KRxn9qe6uZV59kCbC6Zk6rRfYKCee1nQexu2UprXmgtSYxosTw9jHno4DPS5MzYxAArbqSZrHTrh2Q",
  "key12": "5x9Gm8y74MhPnDhJXR2Di23su6TG2NxniabRZeFwrVzUoNBqLoM5RJdPxcgDdTjNz4kn5VbDtkYeiBjdBCN7me7s",
  "key13": "4G5jVUnAMc11PJfLKojbjCFGBod1qqVLhvNyrvEREopZAVGE3fiZuLrVf6UK3hx7ZGJnxTBBZvsTadzQidQu4wNq",
  "key14": "4hojKZBDyZPqtbiNP6gL8cwXxPyPMvCpGgZoqnmEVV2ppSjMunMSr2W7Km7C7gooivv5Kx7B8nZNkY1suWt3WguN",
  "key15": "3FVVGDEg37Tkg4NuzTztFd5owFBwNVKsKyuASDGpc3K2q19VAzXuXoEHJkju7zUGAryAWYytuTGyu1GSZXidAWu4",
  "key16": "4NmE8zHs3tTsh21C6LDn15gycHEmGEY5bjUfJaTn9DpKMdUaY8iSwCLv3tnEdxbiLycmgMpFYi3kUyKChidwNdaT",
  "key17": "2QBKeEeSfmBYgdPgTxcvQ5ToDrEM811ALzCVibQ27VZYnjqmFxkztnEuSPqeHaFVgdJmBay4BF1B2JdogV8V5DNg",
  "key18": "5BpeSc7Xa5fiwKdbvBfZb3D8Eh262DfeFSbV4Rv6zNy9JQ4xdxxmosxXVTawgNXiVLL3oZ5JYrpJcNax9BcRXG5Z",
  "key19": "5NhtqhnAKA2xxF2bdMNVqC8eMqpxF56yzELituZV8UHZyiDrC9MrXqAvGo1rX9dS6RgrgBrBXJVW3kWquAikzrn8",
  "key20": "4nnpX5cY79cfiaNauAD67iGFBS7hvazLoovvy7waoaZLnU6Djp5NGReBVmrrVv6X22Ad27HKb1GZB8RKZzyYm9v9",
  "key21": "2GwnsnPxW8JAzuDtRy4d88qt1BxjXGWUqwikDdxeRXsSn8fofLUFHkQrB5sX9erD5quwa8Go287oJqWkn7L2i2ZT",
  "key22": "51Mhpiwbu7jnxL23pvnTHVFjSGMrK9Zxujp3GvAnwwSZGNGV2DzRTDgP7r69SKsFCk9kGreQDC9DVwdfCAKHH8Xr",
  "key23": "5KpYN3BSnJs4S2Ue2xwnMcD44PGBCQsHsjtsBYa9oZDxy5cwd5kV9RDE7wb3VCJWMiqHnFLGVCpQeqJTMH1zDqzg",
  "key24": "2QcZxMRmbqQQi7AePneWCR4L99co4ye7W9mnS9HipUs7ozFL7rWbtPvGsTfpCF24iAp7kb7uTtUEAjCN6PXk3NLr",
  "key25": "2dT1HmUsoJWYRGS9fSLZfrnuiUaeGGkV58sxXfVdbL4k1L3enMTgQyosMJxRxjH7172yG1UGafdCQrgrtZRMmAAS",
  "key26": "4ebS6jFHrqoSJjHfXMtw8t6EVwNxKiUGyCPNw6xbL9GXzidVdtHgsZ12yz3BsxqbVWwfpY8eypkxrys81Bk3McA9",
  "key27": "42BRhki1xh5WtFG5Yt3B5i3SU4moNHRmChBJzEK49p8tnSufBdD51nBhN4D2WfvA6QT4BfZG3Nw4ewdEkuHbWZ6u",
  "key28": "tYFCTNwx7j3zzKM5vx19oZ3Z65ScX5aTNTPMF9MkNCtmhqzd8KMiGQUmpAYBefAxT77A1vnZ3WHc6xcQZ4awAL5",
  "key29": "1JNxFmEsDR86hvp68nMhVgkPGVSMh13Zvm3R6xjVBSgPZGpBkNRcCGmGL3F8QiKynH2KE1QBU1Hg5D21wYGvFUV",
  "key30": "23YaHqRNTqpSQQjy5BQzBURKuCGRKbtrv2fpfULLPiViRWTn5to9EmsckWFDjdmuTcLcB62MVmpzT4dMr3y5Yr9r",
  "key31": "5HqjA9PiNN2BVadf1JoSiSsqrdGWAa2gUru1osp1BeB3i5SuZcG6uBnBMk57sYLzNe2D38w3i5Nt11P2it6BYtET",
  "key32": "SrhBtFtgquvW8T1X5GjiBCS4RKakkPZ1mo3HbkaHnNM2EDWBQgN3zby6YwgvhewJaetaZn1i7XAz8u1ziYUnydz",
  "key33": "4hmGz6CLjmVhm9DpHfc1WZC8Nndk3vCZApvqoXA1hLPv5xjdESbpKEmLLJGq8Bef69hPfFbEbhNTXyzPXUL6w4B8",
  "key34": "4ZKJsg2WnepGjoLZYTSWiL4agmYxrTCYCdFGLWHNhd1MDjzpevuqpvBjT2GzumaBb5uWy8DqGozjckbx1cSSFeMo",
  "key35": "j8eMiBUPoB1VaCLJtCMuBS3XPk5Kq9jxB97WgbCQCH1Ewwz5FcSz8c3am59Q4qS9synsyqm944TutMwpZ9tbbGD",
  "key36": "3XNzV5JbPqX9b5BdqDYUbBuqp3mt6brZTvdsjKyaUFBBdafi8M3ynsWUk6rhHeCyz2J24m5E1qpjJFB8mpLghwvq",
  "key37": "2QPgce3hv3ukjekDAVst93XW3AeRLN3fpmG2A5MMADMxp8mjE2bPKMWGSLo1Ussw7woafscLCKipEuzAnziBfqTV",
  "key38": "2SLagfrYF8FMzTQxs2mnr1EPrvyw55mcGSeG1wFyumn612oeDGYdH25KNLxCoz7wasA5k2UAWAaLZ4JoxfNGcc5j",
  "key39": "4iM9KtU4VXjsw4d83zpxDewxmNiLsbe3GsdZ76bLXAoPTMB9d4aNSt3t32aMfhnApEFSZ3obMGA2eNRfVBmr91Nb",
  "key40": "3sk3sobP2rQWYLpr2MLo9zhL9FqRLwgdqe24vzVxosHtsSuPGyK7HLr6ias8dyRsDKZPjQW8nCUUTf9A58T2pv8B",
  "key41": "63uJJBk3dBfTmmwqoTSCQ3ozaKnh4E9sJFHDBCiDseYhLWvyRvj5PQDCu47kv8Pyj5MHffrYCce2z83euT6uY5ZT",
  "key42": "63T3dxbuHxTojSwYCas5dH5UCdnWnrahmTPB3G8pESwa6oAhWKW1ipPZRenaCnbRKSrHmL9wsPNyfPfeMj9dzwAE",
  "key43": "s1m9oANEPudT3z46G3xZe1jfdan4D4jGqvhzt9W33zD14ZKkMWSArYNU7xvKy7ZTm4b7HGpx87xybeRsHvxVLDu",
  "key44": "5iR5gtNWD7Gkfk8F1Rnb4jUzUnMBC4DnLpefnYjskxgc1cQ1959aA98wMsqesxhxgCKkeaD4PJdQoAgBqkE2NXeB",
  "key45": "UB4zTwQEhCHk6zYBG43HzqQ6N2c4WLjmEjM6d46hSsroAcjhkWqxtygAPmZt17Bwzm9u27zdyT6kJjjLrB2iEE8",
  "key46": "UPYyae9vtxGTFdEUb6LjKMHt42NVC8TnXhvMpXCuUdobHG9Q8vT6a5Ue3aaCYCQJDTCtViNWAFPA1XBkmGbN5hS",
  "key47": "PXY8X9dm7fJtzMMkTPWBzhBrJtcDDsDDSLgHLcY33dQwU55B6uBvecMFDvtC5RXfHf585vZCAoWeHPGsJkpgiUw",
  "key48": "1HkJt5RQTkNEFvDX1RUVu9rKnPDnX4yghK8r9hCpeRhmrTyW3G4RWQt7c8Xpa5jTbHYJLVFTDroYVSQftF4T6NW",
  "key49": "2xpQYuntrF74LnDTDUQwYyQcvJuNzsM6BovnbcCwtGLD23X3iXU7kDjb1hnkoqNXph6NLRntkNHKB7hq14rXj8dm"
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
