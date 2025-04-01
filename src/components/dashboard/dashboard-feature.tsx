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
    "66AJ4SRYCJqFYXQygG4VjQRWWLSgTwtAAGzVpVPXBWFazX7fvB7JYjT9oZHncbsKECkbMLMnWrp2gHbsQq3ePZvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MPEzpxexcC5qrKLrgxjVT6eJK2umBT9ZpuHSyDyfbXdPBCnqdxWkujHpWkUXS5DQZ1HhGhVwNCXq6BDKqZWXZ5",
  "key1": "5mstMyuV2pSCcv8KX2uQhyMkThbFtDBwrEehjpdiBZd7MYKoWGXmnT8JqNzSc95ob6amuHLCQ3cgGGKAzoo8XVZ2",
  "key2": "3iTgddnsocUXbfSTSDoYdQhfdJr15q15m8234C2P94tXB9XaGyxymstSfHMz6ejdvZYoPxzMn1YWGmXPtvkuibaV",
  "key3": "3h3KGW7K1rmEWHTYJwfFu8MpqpAN4M59ESFvRpdUc1Rqp4KgFyeDve2rwGRTBrbSAdGZfGy9QYLtYW7jJfwpT1W",
  "key4": "2iw6FzuzW7KymxqKitfvgnmmyoKKDMQ5hFDRM8eDUPePGvZG9VoTYbe5o7HZysz9P1AncYnJ6ky3wvrpjR1MgShv",
  "key5": "5HQhCMnSksKo3XtbAReWCCTCw984afJhEnrbZu6xGYfL7wKYS7FXrNRWQKbCaAfgC9JqLVS42XTAJmSpTLiiAu1k",
  "key6": "2M8UcFr7jZJC4Q7ECkcpScJRzt8AiXreM2Y8bgMNeTKASN4mnTt2xb73nKUZfkxYvxK7UxFE9XJZouqdLfzbrVQe",
  "key7": "ZgExK257Nj2jdz67k3ujS9pcZqzWLk5ucStcUB1a6xsBMS4kWBinNPSefrixJXF752uJjncQQHYeMUstnjb5CY2",
  "key8": "4NHLWYEKYfJ3tmY2tVsQXAvSJYtcD2zd3p854b9ccXYonEbTaTcWVXv1DWFp4kAbfpKCZmHRU1J3qs1bm9mcrzyU",
  "key9": "bSabt6kp6xi1JDmW1rFDMJjbvpFAB8sAHxzsN271YSPBvZD5TFNYjurkpH9t15Bn7qKHpPFkRFfp8DgmhT2Vsze",
  "key10": "5MHfWGqxKXihBJ319nEZKpvCbHeC7rAJSDAdBdkMCtCsRYv4hxEKKLpwCHDkwL2xW733PtU85WJ6Af9DCx2TfgZ6",
  "key11": "y6xUFHrpBoUpmY3HsTLBsyMKZ4yfQtzDKFzLDwrsesTPhqBsZj8iTAQUKsDn2wac4kWM6LfrNpZiJt2p9TViCVg",
  "key12": "4ALg5fwzPrC8Q6aDEcut4wkW5nBSUeciWUw72kdQKJ2CZRVGRRSk6Q1k9VxiHz1HNx8ZPHCQKtSNJcXVX2PyjXdX",
  "key13": "5538UiWqNgnwU8Mmcw7XMV75xPxLaXWXMc9pnVvCDGqc1QBTJcjGwSMSJxxeNQRjpM6v2Fv56y2UGmvmyG3z4Ves",
  "key14": "D9Jo7NN3sYfKTLf4dm8jJR7nPwERBx8tv3SSxstL1N5Yshuoq9pbwmtAj7S5pW94FP53VP7WA8gnJ9THf9RiVvv",
  "key15": "54ETPvsLvdySwqeAhgD9tAF2Zt2pByfmdno2U7q3jSUDpVJgCJJGczFaLQpJjoy2Gx5WHTwhexAtxcYfDekiJoRe",
  "key16": "4TcrnKDhTfvoQMS91mgUh4Hze9jAoDrnWC9TM4MjUBowPbY9Nyx53WskoNwRiLSHtgLx641PPBuymW2wK46zWV2s",
  "key17": "3HPezuanyi8SedT8ZyPVSRb7t8XbxRukVmnCN7KJGJoGVnoamZ6rUdjWuqxq8XaFbU7YXUZqpFNvbqkVmF9do4W4",
  "key18": "4dVqmZe55tkaWSbhjnvqGnfAAy48Df6ik9AtHr5LgjigqtZKBR2LFDJHRhvoDsKECFwL5YL2FijkUfyStiUBaZi",
  "key19": "YD3CX7tZhUHqzYpyWViWR5oV6Zrx5cSSG7ggJGXmdV5JqpKkZHBQry1RVqnFQngjwRv1Y5EFArXqC4kti2m8gmP",
  "key20": "2bZYVPE6VNvseT2s1qPrWMZbxKkCLPYZ5JbiB534ZhKf6XULc3r5nGZPuAKoNQApJ2EbsDgFVVByvw8s1uuHoVhJ",
  "key21": "3nLgifMDy3ykdJfuJP1FaykBHhJYV4ywzMhR4SADJKfXtxtN3ohLZiyjLknFwP2KBFHLqFCCfcsmc3GCB2ThsDxX",
  "key22": "2qaQJT7kNaTBgqBQShrSrXSZ92AabSNgH3YDVhWiXTvJvpWJKVNn8qXeMS199YSkWcsQwFhXfAD1FLzrCz6nyxGf",
  "key23": "5CBHG9GFUx8YjbYs92Fn7sEEjA5tNB75giBXd5rk8voFNwEaAUDwb9N3jWdaVrUqv9TkaEU1ufQMx9YhUNfvDKFr",
  "key24": "AzZ5usVvFppLB6k8KEwk9xXzQREgroLydTqNEiG8s4oFs3HUhQnXBBwayeWM8BwJousZTaPb4vA673spaE4weLT",
  "key25": "4yA1dzsVW3VpnDYeiutx63XAowMGCd4MnCyx6MQ4wYGYoh2oefvybFofLqtt5ahrTJAtdZyXxeEqaX3219F8KPEQ",
  "key26": "5Z8Kc7aVomzNwxPBhn99yah1poFfs4VCo41awQjDwgx94Y2v1d5SVVNMP7YQer8qPm8MRhKCmiUEqkxVRi1tRZma",
  "key27": "1KiQqD8Wzdwm77YPVq5yzrgep5H9BXiLSeT6LxNSxQ6rBPGWpQX7sAwQYmYyPHHGu7Yg34AyyyVnGtmRJihf4Tm",
  "key28": "2DSvw6CtD8H8z22eMtfY92shJAss9iGhn8ndsqDuXa8xgsQcZ95StjaoStqZrN69zMxk9JHw4GdAXUmLiz39ZBB8",
  "key29": "5EA1sfaurn5w1TN7BjFtAjX9zzhoGyDfQ4vuWS1HoQnZeik4ZaoeSZxgGNBsjyxp3pVU6KRig6Crnr3i2Y1Sw3rd",
  "key30": "T527Rtp8YgvzM4zgXu3CPjAZjBL8xnGgA2aAQop9j4rk2DBCThYbmKxB5L6xwiAkheECWWmWbgLoYZhVw1xJhWK",
  "key31": "2dB5wRBrp7bQRviPasbU2aX5NfP8nCD2ENyCPX2ZNjLfXwCin59rn5SCULoNZvbRnZHbgWfLbhQr3zXNwfvjncmy",
  "key32": "2GZXMmmaiUGMbggg9TR26wdBGokQcciBFtWoi6X1qsXVAbuusk5wMudtKeakSdEFVp7ay4cUzPfMSDocazUxRTj9",
  "key33": "2VJVev4Z3nBeqfGdDKgps3Ei92rK3SHL2rzyU1rj5PVsCFM5PacL6vLBAeJfPp7S3vGJ1eiP5SkAYcYMaP6GyMGn",
  "key34": "613HfdnT9iphPAGbw2tH2AQ4x7wfgNooeQqx6qJSyoyCGh1LK2SkG3EyZCD3Ww7HiCH6eKYWAkmjHf3JEX9r5RF",
  "key35": "3M6dAcXE1CGQBJ8ecuZqqJX9GduguFEYmsgamvX9zduMj46TkaqtkUJcBp8x6sHmd1kWWAk9XcxqdymBiWyef18a",
  "key36": "3qb5Xx8ssVfEmoUnXUa9Jc2cVSanWcPA6v3oQaQrYA9pEzhXiSbHdiynmChfcB6Ncto5ytaevWTQnXLgHKoYcnjF",
  "key37": "5T1QsyQtjtxfyNVq6BVFSySwXEfKHf9FVzYQkFiKt8WnyWmLPzhwFZXHZuqThjxAyYM7ySVttSz6osccfZv2Es1f",
  "key38": "3Q6iJjcT37bXaK53WEauhyHVQjpFCYkj7nD5be4A6rxfr6EViANtyg8fYT6HrRBGf7yZh4VaoCztwUPXd9g5QPP2",
  "key39": "3GcewsdDqyW1euEwWgJiKyaABwkGdimJiF4pAK7Bq7xPSEhSvUEig2GKQRGLyFVUdXiRBQsDxWb9cwqKzWKBEr2g",
  "key40": "nK7CuioQWpfR2dKQVddaHNZLSeJfSSb7rJ2XeNpQm2oAy28HWCkp4BXxxW4X2ML5tA63Gaw8jtkuPoSQ8aoiC3Q",
  "key41": "4F7cXp7Lshxk4ryPjqCKaWrSfmbYMhv18eBqdXbA1Vp3nXss4yocPMXUy1RjELfMq4guYfLGqBjk7fgnKxRPGsdN",
  "key42": "2Bpqu5REw8i23pTbygDmUkxamBN7uk9ZrcmvusLm6XkNDvEQrMVcdAdXjS4jhfqVNa7Xq1yJupNr6EPVRDbwMPUF"
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
