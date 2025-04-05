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
    "4ubLfH6tGd38pxooKRyUMfPBXc1m1o4JgLfceyixuN3CQTPaEVELvyekiWoBSbqBrBwQgX1nS5ZzD5ctoQtwd7hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrQPej2RNHXM1Twca7HuGFLYG7cLu3WT4WtRVqNXDYYL5SeJUtXR8tjQqamBt8Zqjq9H3kPzqit7oLip89vjAD3",
  "key1": "5AhVhrrrzKPbYqjNAkqaECj74FteM15tMxSjUWafP9VwHkFx5ogwh6mh9iXYyZsJtBYofvwzrjL82peHBBeJwLVf",
  "key2": "48aGs2Mdg5kyuUcyWXh33hWaAAoLEC57wPfffBJKhCnnTR997ifPAU2sWLFZQXpKwzTN9tk5CVxQUMZDDKwMj18a",
  "key3": "3jRVuWFtsnhea8qhHqDAxyKqF6giYBznVimzSmLH9ZwYWJCCCRzedaCAwEn1ivVUShp6Dbb1i8shFwAai8hck29Q",
  "key4": "5sw6K9dhEb1pbBZNGAAZTqfRBV1THtj4HYKebpJjnf7savJVokvYmgb2U18xgNaQksPXCRfrQHenmo7HGXQ8TfYx",
  "key5": "2RzJAyqPVgQ7xygdG6Bbnpujby7xcwe1fZ2wojsBq2DmFkHL393dG6M6BB871MYWbrG11y67MUQAxwgw3scGg9MU",
  "key6": "3Eu4GM3EbibjS5y4L59vcwWPZXBScEbUCunSeaEbNruHm5kd1T26dJm5d3M3oBZiVZ76vKC1hFnqwPRqw4MtEhn5",
  "key7": "2cGhkk7z8CLJZUYWYEjiBu3P7wiEwXQ9ak6dtmBApRuexL2skzMGiX98RYpRYYDoUzSCQNeRXZpidvRBBqNRFeSJ",
  "key8": "4WRxNQ8KM9P2JKrbps1VR9kfSxKZXX7bhMYJuYaFVhHUzpauuErx2WfCzRr1zocq2zUP5vDrpC8gMsGxkL6UZmH3",
  "key9": "28xiJMpFNLHGN7LyVAXaJ6Rm8jZCp4JG6M9HFoSxYnDm8nAnrtgeM5dsXrfYTq6PNrbM2BwAYu6dfaqvBF5ipj4Z",
  "key10": "5QVacgn7nraRcdfmWEyavAhos5UtUYRPCcizrYKcWyax1CsEuTdwpCZA5oLUDF8XgdVoCht1eFAeb47vaHaN3ebG",
  "key11": "677ALvd6sAF5Z5pEnAZnj82TqxijJh3rxDHfKw7525xvMTU8fMS12jKw7PVRqrG1LghmnzbYPZ63Xfgku6rg6GL4",
  "key12": "4N3T6TgBeGuUtP3hV4TGsw5VsdexT4fv8nQQmgRvDeNRu5YG7ogPnJBkQYEmkcaQqhJ32qaW4rTQavTcfjJgBrNc",
  "key13": "4a9gW6sFysgLoVQDXVTfJSjnzQ1sLXD7J9UpkymvbXLQ8myHs8Shrm3mQpfC8MKQAC5jzNY1VHVTeKj5ES4YtofX",
  "key14": "54APkdswo63Pa573UvpwYzDyyVuNbxepBp4k5ChiTgH3r69wh9nPtZk8FeKVZqVAKiLYpgrCS6gX4MqpKwERxFfW",
  "key15": "2ie4wJVXULBV9DNbV9e2UkDhhTSHdpLUTcwBGxu4NFW2nhmPfr3nPLSZHEr5AkXKf6MZmPn2x49Fo2EJuC85DgBy",
  "key16": "3LGp71PHLdiGm3bqpEsaZ21N6PzmSrki4S4mcjzTp4vVjTsB4ghkfDQfmdwMML5k1D5NLDKvebabGj2UkpwcDYxX",
  "key17": "5UG9NL66MesfbBZnSXWCaJp1SWhbbjWckp8tS9czUZz6waWQTfSvC54WNs3r3JhvZNHo7jwRPNU8n1GhHQcKFoHq",
  "key18": "5SF7iE7QCMbT1FWDTtLFBwTxdM7FAn77xy7mAV7rS34mh8jYFU9ujUfskgvaJ4NevRoA6DeSwFjwWHqZ5S8PHrWV",
  "key19": "gVs6xzNe1RgbU2XNsMAq6KLVUN8KU1wyLWFhG1MSUafWuhizFap5DmPazTVfQBzabLPCoUj1vZn5k7z8GWVTGt9",
  "key20": "5xHggBdA9F1VXiCmbwFkg9t26R8Sdn6jmD344ZWki2UTLnq5Ridy4SVoz9qiMvrgpFMbLCRTG5KGJZdweYQ6xywv",
  "key21": "3daUbZUzB2ysYZDr8Y4DoryfUp5A3uTWrCDwUw3vRv3jQbsgLAPyMkVf5uJT5pYfW1TWc3hWTCRY6nVmQ1D7Bc11",
  "key22": "Q4mPaW3uzbkfaKZcAM89CH3jyCT5WRSMHhUX3FvX4f8L2FoSphxtQsjc4LuC8oGAjEnVwj6kAUmouS5CyVXnfEA",
  "key23": "5QyPMzVvapbxt5GgXwmRsNuBhwPNTX3tNhsjwRtQ18xUGaqDajAJ3CfP6vwQWnzebVcCrhik6o2tMq3TtDedAkt4",
  "key24": "3aSQfK6otR6wEXKUHJMYhJVW5XxUDS3G8x7M9ifGuRAjMm9dd7mm7UqfY9NAkyo8h5L1PahEafXmCQddxMfwfhnq",
  "key25": "2ie8CcwNDKSbL5tgXh39etLSY7FJ9mo93ygUwo5N1zpDoLDecDn8vGcDLUL4cq6jhenq258tWid5f7hAcKKmsWz2",
  "key26": "58nNmZGZGeCkwY7URRMWMPidw8NtqjiPEpBGN1YgezRkuLVcpgTz1Pix3hGuXLE8WrM77U2YLPJo2aCyaVBBxrtL",
  "key27": "3QcB49WfAcDYuRFnVFohkhfXZm6u475c5pyJmBB8nqJKUBghSoXivt4d9NCGHzESpnb1cKhC1fxxcuWjkyHvCctF",
  "key28": "2PVJXhGuNft5YFzfrNaS8dpz2aPd4aoYkGsbqX2wMDh9XMcEX6CNorSzgQFKa9fBvdEr1kQZsrHNB8BpSzocZp2b",
  "key29": "5xHvvHNh7wXs1Kbsv2UcjfJoSWUxH6CSNGefV5uCUjuoXyBqvcbaR1ssDvE8YzjySRyEUWnkvYV4cWsRcBgnC3vF",
  "key30": "5DXXP9eW66XyoonBqdFQcGSm5BLH3ajEoCREEnayd2aCrtGswJw1w7QegRTQqpY5CMf1rtvKeSEBmrdWQ8XTTGBt",
  "key31": "2f3VmXLXSp4fvn8LWFpYtKEYJqS91BuARD3w8f7XKcNpDmui3Ut7JunrVqQBUnK2ExJFbAwWdAw5ByaT9TeZ1uKJ",
  "key32": "5BbfqGv6GqHhWicXmb6pLYDXiiq6cvaoQ6LT8KkdVGQZon7RJFAWjcpsNdixA78we3THLPC2FfPJsEwf24T7GiVq",
  "key33": "bj8JREtZusqo2xzT3zaE11z957aVW9iLpidJ32wBcEF6ABW6Hy5pzkvn7zWKTNnGNKDuV2x1zm8spUNtV6LYVa6",
  "key34": "XU2QcgAS1bTDQYSZvG5mr5Vqq2j2qPopwh8aWVoeZ4t5aHcHFWtAVKtzGTy8JKAkcn2guYUzfqxRF7cLYxpjQP6",
  "key35": "JJoMaXVo38YYvSUfQPkCTLWGq7ubR49bVp6ZwpjD8trrajWfT7mxBcVkNm41pqpFQgyxHQEfbpzkLyujGsRH379",
  "key36": "4SZZLKUoCz1sr6DM85KhUmTmgLEEE5Fp4dredW4BPjMPya8pnhyhigDBVnfuMmX4c42mKXa22fYHnxiwLQU1dGV8",
  "key37": "5mCR8WTFA8ckJRwZQcXcwidg4sKG1bQQgzYXUUFgbUte5f2DnC6GP5mqSkxQcpyELfbZjE44yzjqfseHDzFCgZyZ",
  "key38": "616vk6WtXTZEznbmjRtHMFmLPZibskXzBGzAf7dTTf97wCGoMLBLZP2JXcgPa359jAUJ1BdGvbkqp7NDwBEf3fzf",
  "key39": "PDrXkhd3gfCdFpc5wBB2Z9kR65fgZ1imXhEk6fzB6Xan1YSf7zv5kYN7dSvcf5D6wzHJaCDs6GCadqPa2e4uScf",
  "key40": "4UzsKgkosRZskoUfELjmGeNWqHi5hJwGSHNRJk9wYkf8G9co1vfjmnGJaUkn84RDY4mpSNGzhTnyGpyGimRQw5Ny",
  "key41": "5SXUB2BvexXsdz6eUqL6wy566SSsXoXxVBjBXvN3UfzKc8MorckMgM5stN61eARkNE1L7Ge8zE1ECtpb2mRuwMZZ",
  "key42": "3MkAGPJ5B9NjiEwm61ZzReqv15zsEbNZGTHgzM6iaSVY34pQeN9EBHFNiEvzD2wFTi35Z4uUF6TayMYCyvkekQdT",
  "key43": "5Pgbjqo2nyLf3XCxsd8fd6RvjkwY8ux3JgA2UmFwkC9jYE9W8sL5BHdBcSVWjGPW3ccEn1oPKEuKE4AiFMYuFcF9",
  "key44": "3zHFJx3MCBSu58NWZbf7CDGtj8bVtsKZxriFGrT5vEGpuwa685spgKskT2TRHsLGm5y1VUMTKfD5pURskvTf7HuP",
  "key45": "5LMnT9bhXhAHGoCJocbxtdCc5Zmd3EGJz8AFjPjbDCnfyxu6Vw8U7LPpjL7QyRQT7UFyxvt4brpe7kDnjXUsAmbU",
  "key46": "4Byd23AFmyA2drgeWg3xYnxy5jmmVwVi9g7Y7G5QMAZAiEAJhpEsRDxrxC8qbzbg6Vu7J4xktKxsJaQQwMYE83hV",
  "key47": "2iFbxKKtGRE8dR8Hp1kpEY5zkkdwtKGAei4UCiTeGUqRayYqRJLjbHzcGHcQ6MU62vLbYLBAqw5PiiWDUo6ubEDH",
  "key48": "4rkUXXrANekm9XRV4TuLhvv2re98Uqt4cCYuecQvKT7BoUoc2PPRavtNz7reVnFMw56CfB4fdEMmkLChtKpWXm6B",
  "key49": "YaaV4MtLfZPvS5civYpvavbTiRaMiqu1FtKwWBdCBKkbz6e47vcMAzexWpMESenkjh5YFDb7TbpFPTjjhTDnNhP"
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
