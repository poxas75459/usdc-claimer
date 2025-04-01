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
    "2893PWdfogqZHPv7Q7xqED5kmHsbob5Yp7hHQgEovBXWLFVWvATtc3poBcT3rcvTcj2dKZo5wwsnj6NJbVxMmbcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vRJkE5e6fSFTrFsxH3cRVjaqAzaQRGnkeReYgaZMHazDejYkrmCuEZv79ddFTbS3D7GxC3AG7YHaJGLCNyup6np",
  "key1": "2VMxtcQEVtaRS6fEhDsaJTeAxVpNEmRTAGiM38hfQiA79iVwaY5nxtESziQtaDJLPkeouR6EuJ5Ti6ad2oPtYszi",
  "key2": "5nPYgn6zn8ci2BVjV6p8MQrsnfEGcrfoyDnnZck4wCZJs6JhAtyVSFj5iosV8fr9akcxQVVKTgLBsnkgJxcHZ93m",
  "key3": "2SLmgtH4SijggySGBCThk6F5L4Ru3Bemp41L664TE76MsoyjCx5L7g9DR8S9Gw8iXTNtvW4PwcyzwhXc9mevNj5o",
  "key4": "4VPQCc9hDNj8rWXXJ4pUcjKaoxNt5AZ7eLEYYwS5jjEhdjrrtr7b5MaRhCjRx9K9XRyxyXZje9TDy55dJTaJDoJc",
  "key5": "3PH4poL9bmcL5oa1teB2JLLJ7qF1aPuMkZK5jqpoDBiHdUjALn9uYPjCzJgM62UB7nMGp1ngSFqXFnn1W4AYKn6b",
  "key6": "5UbgvUdgbvz81jieZvXHRAp73Xfmw8ZDHA3bnfDVxYpM31PJsEqp3E6NyFg9qiGPZ6ULSiApWnUddsnCvr5yxoy4",
  "key7": "2dFaeAFT3SqfMwvbQrbTxbEkqVeyPFh6BqavYm6rv8e5kA5WRMUmNY5X7MW4GH3mWAAU5XvQcrLj6sQt8kWvibNZ",
  "key8": "47pZ44f36cUmQHbcQSBZvKoJuqbnmvb71CFtEtSzfZxpQyGkRTzjDp91mRJckuuKNyyXzT3NheEU51wibVPjRM1H",
  "key9": "4pvuLzc8tV22HRr1R95jT8EGKFxYWbRRsNwAMdGcX9MkoNUzQnpCSsMLxHBZrmYEEzfakGZRioK1yzovXeHJUHA5",
  "key10": "2ZjMurjuS8EoTX7VizNfJVJDmZpPfqCSuiXKZ16MzniRqvwKqFWZBfw15jktufx4PiJjXPBbayf3gDkoXuvbZ7d8",
  "key11": "35QVAKx2WENjMXj5KUzVYx7NmW32VEWEkRoFz1HHvyVv5n22FzVGYAu3oCFoWh6pF77Ps5nb2K5p5XEcMUQvnnRD",
  "key12": "3YMLoGF2kKfbnEcRjc9gPGrCJmGvob1MdJp72AsmNDLWhz3fvLy7cE6AQGSbchPH5vtX2bwgP4WeD1YPFSbQxaaL",
  "key13": "5sueY9e4scxEXCQySPExvu785WJNkNTfH5VGiVSjBfBrxSmzVCNB5pp1oGLDUWXHiAekoEAjsRZZHjQTkgC1G2rk",
  "key14": "3emTCzTtTQWYer4H73WxRPVQDw2zgzwCxR1ZPsgYKhQa4fVi6EtNKYR1JuQfxAVKCwGHdudDTn9YD5mWoinc4xCK",
  "key15": "3fjHGierTnazuqtJLquSyg1tb9nugGGJwi22eNPmaorGNyA7nJqCn1ZHFQe2iqW1fRX1ysGFTjqbRmoiKgxoskJV",
  "key16": "2KgkgvWxNcR1hqvn9CFp14G9KAkuLXi23qVVUXg9BNB4DFRnYYLuQ4eTqq79m3viteXZSuK1uFMZKT6mofB8oKQW",
  "key17": "5Z5Q27JNVdAAD3yQhEgZQkggdt3tkchcfKTbYwchTH8we99sm2khuEs8e7wnvWmpsyeLqWeiRCVxpfMcfED2rHUL",
  "key18": "2o2TD4HyX12fXrooMUrvsrJBSbcpj8MFZSXvpePZBqZQrajcrqz3ohdz4qaxBgBMKznhzLZXzWDH6hm3TUb3iP1V",
  "key19": "3UFAPpo8eSWyhPik1qQd9qzq2oqXHqP41S6GcQKgq9FD5M2wnFfPpypaYCEEEBPKXLJJgHVccRUuFnxkbTHGLfwr",
  "key20": "2hDbJhDWQg7gTvCMETxVwd4y9doaWGSLfe9gZKxrQgNz6QxophUqH25kyHoCTvMumq3yxZpGUReSGh6dTXYhoMKZ",
  "key21": "5WWinD6fp3KtDvLj1dGoFAJ4qM1Cxch9VMEWXmujK3g3XHD24pCqAUGfNkbyDfiwNjUBAAAXqXmR7714ToQi1VRZ",
  "key22": "5os6iNtt6wpY5h8pvrJUDfWNc97a7MPc8KVMrurqgBWVdUsEx2qhcJpPgizeDzGS3MVsac5jVg8r5y1hLo39pDDL",
  "key23": "2sKTFkMuGihVLA6c7Hqc7wimFdjAwtdTcBdzwvJUvKGjCVhfrj7Ho7ry2hVLQ4mw3wS5LECC3PSuSngYpjujfp9i",
  "key24": "5DnV7YPRxx5aENceaVEyaSNpKRNRRcgeQizTYpNPGboGiE6WHaThxFMhb9b8BCwqLhhUG4x4o2nZFiDqDqJwXwtC",
  "key25": "2zL4DQzZ75Lc8xUJVAD7RJJPk4mUCEU2XGzkY99S9pshuQ63j2mySgTmAUUsupDYF2rgkaFgdHGCC3RfoqJdZvZv",
  "key26": "4ZUnmKecitv3gGgEurKRB3B6dGK48sBaJLwANniowt34TEL9u1oaVhjuB9JKkWaeUrAepHEgHAsZfDgk9xRKoivV",
  "key27": "5RXy7ZxM74RH4NfQ7CToYH7LzDPvaK6Vo2ySffQEgdnxLi5Ny4nTiW6WFZ9j5LfSL2GKP3ARGfU9hRcppJxRpwEk",
  "key28": "wcPeQS2XnawuHtEBwVibHkku9efj2Y1LyPXV6XZ5namyaHMKpadUP8FwVEeoKC6PHfZJ21wMKRcwhmw6wPPnTUt",
  "key29": "43vLJhHjPw3ERypVyV6fx41g5WRzP5Ju1hqoqqthRBoAo6N5CRXhu6SKMDtYGY4HiMdnPEkhWMskqkQP8h7315jU",
  "key30": "3hUqgy6pq8fzuTs4WnqAFaihUuH5QEHDFiWLQ5dayTw11UdGgzBNEV68MpbNgsu3bwSGBsnaovSEzahtACSHz7SD",
  "key31": "4rSKyyiojjgMR2rw7bMqWvqxY1mfaKuy6dXexeyUyJjhw8AkKa4SFgFjQuroXfRXMqhoUpxzwrY6kKLSgzyhyP5R",
  "key32": "5t9yhyodhAstjfSStmXmLXQ3QA44Pyr64fxWd35vEmnx7P94Pc3ZgMfuJYxk4CiFJa3He34UpRXdjscsu9iQaenK",
  "key33": "3f651odexNjTsGg4tKwA8RRuHGnamFKqpugkqxRifbEpis1oWfCU63pPntBLHcwSVbD3MDPtikrSHEjdrnU9zxB1",
  "key34": "MyLwry4fc5NcGUsU8A1Yyv7Uud6V1iR6B42jmacB8kfX8PaapttEoxXzpdusfR2UPqawKUoyGDwHry4CbANVjVV",
  "key35": "2Svy25vpDhqUXzfKMyHJ1gHbm73Y4fTAPNL7xhx5ZXQaEQHjX794FbEBJL742uymWdGwK1493XEiDk4tuAWASsPX",
  "key36": "3yrRF8rDHGj19BQMPL6ifvAM9vYdNrfvHvkbCU8941kqV4fn42N2MQWvDUch4DFYvQ6kGQQoqam8d6h2rLVGEquH",
  "key37": "5BYCz67P7Ezihnk6D6yj3gy37RhAG9nhUWJ72P84kTMFdP5npsJmP7oRk5KjyYDo6SajLgxhiyV37HQSpdciSskm",
  "key38": "5Dhd76kaRw5FhH8GhN5kiSdbt2GwVBLfQz1xT3GUYPFpB7DddPytq8oABrinQKSzWw8xuZ81CZmT46jC2SALHPZa",
  "key39": "3zFLNnehsQNMHVX5BfrCbz5FxBzfdnSQmyqEjTDJonumVcazBV6niccdr2rAfNyQrAx88PBKn9W5xmbH9uBS4QUw",
  "key40": "5QS4be8o4V1pTDa5wHRzTZUZ4ay1ybYPKEio6QjF9J2dHbgNSNuqDbcMQ1fVimTrDrbXfvN4Dor7R7GMtjfF1aH3",
  "key41": "5gDwJKcWZHeyqhnGhKKdVtna5JUMBwZdbewE2Eh7kBtJMXfVBprVQtcQ9wTrZr9fw8TLJtnBDLtgNtGrkrNWBXoQ",
  "key42": "3o4hdUaxYnnYy2aQUJphoyftfmupWuVcJcJ1gMLNBesdoQJy5TugZf4g6Pxj9NFgHjJz5ggXGXiAYP6yNNz81JVD",
  "key43": "5UV94WFsbpn21ZchEvW7kkNFze2a85vxU822Ww2k9mvNQzBAUhXo9as1AjJwa76Uz2eQpkVf9oPKuR3d9BWgW4Ti",
  "key44": "5KsDN7Vsj7MkKFGJ2DrNAA5BKtifdW15WyhUXPFw8Wn2TQmCkAQWfAeQGVnEpHKczCKaqFJQimeZY4uPPW4JR7DJ",
  "key45": "2iYKhcdRvUh69XFek538U4NVYdhQsZfCBJ1SjLubYGanN52XxmyTmaXkWNQKWDTj8RkJrf2mnUGDpm2XyVMC2zns"
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
