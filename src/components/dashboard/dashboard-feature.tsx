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
    "5b8nTxZ7iGos9zFyLiKUn9j9FmmmDgLZ64xeP2bynrKc95T8HNTMzyouBQbs9VFqvWtexQn22qndQcfLZfKs3AaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyTCCEbF6TCvf55uvRBJznqh9Vx1iomxw8eQpGGH3SBr8uh6Qc8prXxn2fCNrCvQaaFVCQkJrXcdcML42T4Sguh",
  "key1": "57YRYT8BJ8ZrJb2b8Dwcnh7WSea6okZmFNx7r9GWNm3JNsKCYuPaPxXu41BFurdh9mC8c46nhd2gCtg5RYVVUzNb",
  "key2": "445ZUBnF4VKk3PbdKJNfmmWjgTeDQ7ULTYdGhbs8Ti4tp8MBy4WQeTd6euB7J56Bu4NkuH9soB1XqtSftav87R7s",
  "key3": "4PcYT1Tv9R5ntN67vv6Ts9puFTGarWiEp8Ncen7ovFXmh9pr73Z6sgWFbrw8ALWa9dUWTf3hRdiyQpfjJ2XVSQyq",
  "key4": "3aEGadrcCUsmby3aETUSJNjD4gGN879wgXRDfyvQL2Rkuc1H3V5oh8y5CZSeT5AwtRZ3DvGuLzLmzn98ZABkEwrG",
  "key5": "2HR7TDWKR6CbSa3vttkECjFpGPqrVWTWFbqUgessrwahmvUqHcqAkSHNvrwVcd3tVHP1ic1DHxDmCXR9F1qqRXTU",
  "key6": "5Seg6cUpvx8PDmdw59614sViJwnPiBjvbzPAU5xwnHAa4rZhyeLGe2BK2cujRZyaF1wXBCVSTSqSEBTffntvDyW2",
  "key7": "4AhJipHNCkp2RU987Cfc43DDdfx81aTKYu66iQoEyyvgdnpTRge4zibxBX9bpKMf1GJub1r2ewe3pP5KWwx399CA",
  "key8": "3s6hCHe8CgNZ1HLubYSSgShXR2MpX8o8NfCSsNsaqKEx9cRuFfHbujtafvvLVMbzQbVBcPRVsNjvG8mRTyhwM1k8",
  "key9": "5Kb76BnXxSLzABANU98M3M7FkUaNfU4n768jBkUULWDL2hMXtprd7MDWNHiJZPfTYThkRVHG1zCZ6XnKgcwtapzo",
  "key10": "BDedJy3o18HRQLTwD1XB3Rk8tgEbHsnbkc3jmR9Wrq8kfNeEFXsJTMhwT9yJ6H6GpQqdJv2d4R6oooejq8prXkZ",
  "key11": "3SDmaKuuED4nHuk6ofWv2pZhY8UJuWrHGYckKuGigoarjGUEMzWG3LxWSecUiKHohEcCkEm9F8jksdpy3rHMPteU",
  "key12": "4XzraS9mvTPNrP5Jgyqnz7gkRfLD7iMyTHhQjTfGU7YAyDWMLhYta3ZZ3L9K3kRxismHgMVk4BGpPriPehDr7cbX",
  "key13": "3oWgZ1nyqWGjMMp6npeFHCUBfzp1JzbMTZ3Yd5GecCq3AnCS2iAYmD4YBCpSYhtDFrbH6VnT426LPeqqtzugN1Gc",
  "key14": "2ez4EmjZ7vFqL7njFbpUV6L9F2SE86hn8DuzGnrAwFxr87dxYeue3C5sDydPBng4z67K64VPSSiYagnnW4ygjyDZ",
  "key15": "3HiwMctcEMyAXaFRG3DViDwjxA54AfoyZibDAczy9NKqChzQKSGUjJAJTm9BheSksVhEdga8ugF1qCbGYEB6R2VP",
  "key16": "3TxoTdeiG1gAZnxmPSx9z4EQYT9G6BJ4mNicz3rDrAD2Jnb4tirYU3QcdFupcjFZfP78qJQHkzBLSmPrzn7Qj3bf",
  "key17": "hrMrj2dQkH9zLR41fQi8DEpNm8JG1d1vowVzZ4zxAC9y2uYHKwa2BJYkF5foeqFZMzjHW1SRaHffparRr5XgWBE",
  "key18": "5VBnp89BHj4PA1PD2j2y18uvqj8xk23rUoQxx2kGkhFptryWqtsbV1KJYjDiPk4zMR1yLbLyauw3HSdJa2d5jS3i",
  "key19": "5AU26bB9t8pzpPYepqVY6HMyWJcsbeL8beQXTHLdcNb8fV4N1cnPzQYsVRkssUCNz8GozektZQrriuWMi33fr7mw",
  "key20": "ZWu2dAPmCnj3n8aAAGPQcG9Sqfb9AcNnBjgqEk27eaw7SDygxAFjAuQyCdH7Ncsyq4pSU92HverBXEgZv1Ae3QY",
  "key21": "34Tb7THnn4qwwjWqiecboaN6dZHQ6b6MHHA1hKWSAcxGNrsPMsPh573thGCftaAcx69qtwVCqrxN8P9NHz1pFn3j",
  "key22": "axtkQyAokzN2dTaDRe6ggQsQ6RCs7qKfskqWwJ6YaiqoNEEtbCXPBa2wRDZ6tM7M8Hvvg8L17r1HgDfTzfUNyKt",
  "key23": "4cPXhy3iarWic7bVmPjTbrg2byuR1dhoZBQtpRDeeJwufTDauTw46CkPNk4S4JEVeSYb4TpvFFGbCgSbF72WHDfC",
  "key24": "2v5wvYP154TFkcGbvBfUJ78MRAxENoTjRWAMHyVbJosBisn1Eh9bW8gTkyNz2zj9GQFJ7A4W2ETvynFpbyLJ71pP",
  "key25": "645efPrUBAontjf2HDio2iifR245AJyyDAsPsTAvRnUsW44BKVbNJtEQ32ji2ivpcHe7u6qW7neX2u1v9mXQwEp",
  "key26": "WtoChworJBbKt91CvADftRSi5qQiJbGgffESG8QYLEpBHFN3KfrstrvMhJF5sTFi1zDrvVqGtJQ7pUee55tT7bk",
  "key27": "5Sfbb8J7GSF7vpYhehFtDnjS8aW7gRykX78FDxq6MDzGP3Azz5752ppvH9WUQwvcArZv8bHi82aGFkeXJbpY2H7p",
  "key28": "2NYg6ZKTsarkCyR2jnafyEyy4p7XsyPP1TbD8XWD3kzRdNUGoqvCz3APTL4r7b9uVEsZhxn6uHj5K9YFFUuDNHS7",
  "key29": "4469fEdytcjm46ziadxpL7Y9793Kq7XQQ5SPvHSZuZuoUaJox7R79uw2JFQdPrJXrS3kpp7zBbErK9eQbGbNp77W",
  "key30": "5jppNZT9QaYEn3uvWxD7Q8HV6HPEyB6gUpcQNwhMkrGsRn6gUfzbAGJeAb6T1ykpdhS2emzthfjN9BA2LtEpXXN2",
  "key31": "8BixEDyerJ7M7sPJ6yDyFEa81k764JPDD9DL2CqmJggeBrRw1x7cj2VSXWZPzcy2ud7xDetV4hhi9BJhuXcXA8N",
  "key32": "42xpZEqWeSXukHZ21bsMcyYwndd2RNUZxUzQo23Fz4QqUX5ujhg8AtaqmQRnZUrXBUKXQ5NuiP1FUzMAuQn1SygK",
  "key33": "bbLyPt7QRnhTHdEt1fSuGudT34AuWx4BfzRTXqDW4ynUDtdY5N5mKAKMzcrf837TJJTt79feZwpFgmLBwuy65Lj",
  "key34": "42PX4ZQzca6HoyGyYtGAgv6o8iE4UWkJ4nZeehZfyGiM3JJ2LXx6DXRFhkNhT8JJM1p2o2ob6iRhBtT68rTTzK5J",
  "key35": "5s7w7roXVxVFUi1Yiu2zfPebwzTJJFxtTtyYy7UCUG52tdTz3eunD2WxrKceCp9f1yXkQcVN7HjsomDpdSZKugKG",
  "key36": "qdSMo34xW8M8Yj8cXcbbaZfVfHhyXixHiksaHgJFMEDJnei1JSKb5uGeVCaBNnRJKwwRLmHSrQ2fuhfDDKJexCX",
  "key37": "5a7Q6edsKkGyMdMdBQYCD3zVcxQ3PsJNoCaGh1ujFHeag3janubJmZi1zeYJXTr7u71VvwrskMVJWmk8QuHbgUsR",
  "key38": "57K86EE1mu561ZgR6eyFaDEsjib9rEViwTRCvUzVz1668EXQicCkeD34qJT7GhGXynGcoyq9sAoTaZmiS9ELjvAN",
  "key39": "3HhmiLoG42YbQaAFyZZDu2oya7eHwNrDXcHWMa6tWuA1nUiem6gSF2aoMzuuRa9ih6vKZmiDfHpvhKssxsK3nGbj",
  "key40": "UzxaTWDzxkVXXhzYbwFCPiAB26dczmGzGkqaQbVpzNC3d8ee3uY6VpnNxbQSwicivx9JAtbQVzyNFoBxaKSgSsa",
  "key41": "5gRzNjAZy9AYpBVfmX97e7mfxNrJy9XY17TPmhHzpNcyxxJRBL4RuAEkeMSKvRTVLUDQXGy6Wz5s98greJ9Q6oqP",
  "key42": "eiJEQvxsbaQvvu8PLAkfLCXt4NLZ5yevzMfw1Suq2S3oJcHmKvjzPbYKGaZZY2xe7zY9s2wm847ZWtsaaUWm4HH",
  "key43": "4LmjB3LFjH8HT6YQGz14hyKveNLJjjmL8ygjwZm9SEmTJzXxqx5Un9GhdLYNjgbUiSktRMZ9RUbrg6VWED1DfNav",
  "key44": "3HYXH5iD1bY5zNYzEEByYgnj9YptwHkysQXdqSLW1GKxkVsqM4SKAGUEGVffq5MxSMs5hKwikVjaqrct8ymWigCp",
  "key45": "1kiarHsSCHHaHs8PbT9sLc2wyWZ1ZGax2kn9G1QtDBs7yJWcHbVCpmLT9bEP5rds7a9Lu22DHXzTwRuKae5odC9",
  "key46": "ynJpGhHXFUUWw5TMiqSzUAEwebM74yT6b9hxCcjCysKGBWZDEuw6kTW31wx57ryQp3UsMGW9jn3jQpKgN9v9MqA"
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
