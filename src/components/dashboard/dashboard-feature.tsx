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
    "5w6QKycMZkf1XJpbSZvhxvhxLjRXiGcm4Aca6b7bJ7KnLY7okBdhDqHtCdLSSHSuwBao2Be97wS2AB18uyU27WTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJ75SHkccmmdS6iQvAWJNMyxtYcAg2wvKmMQQZNV4crboUTLPqYmD8not4hq6ZfsFoQnUW9uJ7nLDrRnMLXV12W",
  "key1": "5Y8qyZFnkyk3Zi5yZVDw2hym3EfUM3KwZfeoeo7zXLTwJHNEQ3pNDQ1heGg4uAYdwZACcr134hsafAhywqFN8Xzw",
  "key2": "3dXmCs3bqd8M5rAGzjPkuErmqwCg7J5sxmFoDTZZrEpCGmkRTCj7FuumntN9U473oe5KvA5u9Av7NnCtngPkNg3N",
  "key3": "44nNQZCex5zUyhwyuoUXv7duYnhoi7n7FM3kN7gjU2xXzr3wrQN1Wh4a4Kn9bCmYHBE46kWJnHfgX8sYMxGHuZt2",
  "key4": "5qbQfpdhyVmfjD1BF5WxdWf5UJm1mnXzcrLapFDbDvcqDgfE534Dt1NuYQ663pikzPzbLNAgQg7vNjzYk3T5gk1F",
  "key5": "U878qhmvFsziaMhf4utQ3xjYjktZVd22KatxKiseHWza6BnabDNbmyiZL7AUomARWCaotKXYqGxJP6yj1ywezNu",
  "key6": "3mVMuN3xCRjjwJTZW9GBHTQBhUNyEm4T3XTxXvT3RWtFuowqAwcWmPw4iYF5MLeX1Bqgv53ZJG7QEhMXm7UgysHv",
  "key7": "dyVTrpG7d3yeN8ZGUnf8xQX1gLC6NZhvH2Ptyp5eAEajFQsFQZNa5hhrJ6f7sUjrMfNTwxxRHCdtSeEbh9967RZ",
  "key8": "GfTuMDAcgnHfWcjLfjeSUxs89FaUDJUabS99MK44PwioqoKTBf58FwhyZGAFo85E3h7rPZFHmZ2Ekiu6yghd4W4",
  "key9": "3tphifDnCUsy5YXBBccKixfUJwtCrQ5YkCmpkHqLB58KoMc5qntDkbEUWisYzLNrJkT9PnqZAizJ5maRhkdwjrZn",
  "key10": "2fhBChdZrTpj2LS3gy8qjJTbwURoBiDHPr1MyMNkCZsWnEeAnRfD6eSpJvC1ML4uPz9tEpJRbRdeYpZ8gGfGQrVD",
  "key11": "21fJFdBmumh6X3nnjMSJUdMLefWo2ZLxmuDizSeyvagUB68TW4DYYuQGwq6W9urFdpeWwe3SKBXUkD69NuBCBUmm",
  "key12": "5ws5JtZfcwJaHQvvNpw45cYtf6dDwd7CNb1tkyHGbFRiNeASEpLRw3r247Aov2UeixPmgKkHUw58CipJJuKZMEqE",
  "key13": "3Eh4p9dmAx5oUFUaX4R95kcGTuA59jm9ZJo2eR7qN9DFDFRAcprjdjajDP8xtoPmw8jHiL5ZxrCYmxi6TyBb1FNa",
  "key14": "8SCRgnwwjpKNx1C3nrW6a3o5mQA4Se6gUHSENHaimWRUo8kvHV8jU5ap2aNME9mVfY2sAN1gRKHEgmestuWatvi",
  "key15": "4cfciyZ8ZriknzP37Jm1bDi1RRJhvp3KQsG4K333q8iU7odYMRkjRHiVMMZFSz1J2DK8LVoL9VqMTCnospyZVWgr",
  "key16": "5QvDqqeWsmJziMvitzb4otUfELY2vFW625e7UnSiVTMuCdRnFwsNBsz1bDSNZzQ5mTiSzMssLNQS19BKqR4S1Apu",
  "key17": "3buhacFyZibCULVqHPFYbyiuuSFGxNxa6ATzXRy3JVhjZRHTN1DszqKdtmTzPSxLPDpPhua6aT8Gfk2DPjEhEeQQ",
  "key18": "4LXntMLjBdwTEdksKvSgfXMKGRVCfeTcz9LpEaEL1CLqKfTzqxnmgD1MyMceeZxGLsXi9qYCHgdPFan6S5hWFDEH",
  "key19": "3PRUpyL94qvhutxZmPSR76UhgPanuomCLRvC8rdzv2y66Dr8RJZtYm3nVTq3gbVFpwHhLJYTk5KdFfxa1JworgSm",
  "key20": "3hVyJHmKKMjvhr64TyfZR6pTvCpQcBvssQphePcA4rTs7EerChYxi6gCi6Jh1qE8xDhhLBNse2KJ9fHJKLCFsCuu",
  "key21": "5QmZwBHwrsPjDJV7rXVt77Yw3FQw1twJEpUL4uyHmXfqmzFecBZmjGa8dLHesFvtnGshXjbyZGtUoyg16ppfoZ48",
  "key22": "2frSMmNY6XvaPtpc6tTBFpP7jY3V3shyi57hbNxR7jAqKN5xfEBDYyKYB6vVV3jwyanobMxN8FBFxzZEmjeHK9Fp",
  "key23": "3o19cN4VKSkFf7v51v3xTGTDTxq97EQM7EDA1unMTp2vb5wnpgn3BSuoaYtPvkEuaayzUzdCiV3pW5YRXWeFWDvn",
  "key24": "2r5o6ftLShkr8vvuPT8HESvAnUpQBu8DkugxVazdfmoS1Z4p1dY4xtZDE9jugpPKueyJedA2kUiFKGYsL43LBmx4",
  "key25": "9r3tnGBgq3dpKr7enrRsffWyU2aAkeCytPG1jMbuQ6sALedGCiqSktW81pWRyPk9LhQAz1YCveGCxX8yWxhAZkQ",
  "key26": "5VTZ5iCfdwPr4Go5WEW8QuuV5jbd6pYv4eYFFc1Fs7gnstFtxfJ7s6k9p1CHjEzuLf4wwnBe14P2obbFDeFNUnoV",
  "key27": "5PiQsqc6ZETja6g8UJ5AKTBaj5ZfEFfXpwMQuCyNVTiVztmmjUrxkGFPmmEMya8QMj3acqqeHzKfk4mPKfUqLibF",
  "key28": "UqmjdyJiKyGctUyPTKhDD7SvDuNeqM9joAymddbXEHVJY8y6677swkftoiJtScdoCRK622UPHSDMpA4adj7squX",
  "key29": "2qZNPTykHU4FtYVbZ6PkPkX2yUR1JoNtDYvRENiiG4pwbdApULTbiYjayhKuYiXG5AcfFgmcG43k7fgumAhMXnih",
  "key30": "5xAbJBAQcMoAUF5x4cKcrU88cBXep2fbvwUKF1J5Wf7YyNxKWx1v4wbZqx69Tn6wKWcPWbzuukHRSu4AW87b9VzS",
  "key31": "5gqZWEJtx253nyGZ84y4jjL6B5eRLXb1D6PvCu9N7zcmLvrnHap8iEe9NKUFvZHbj9TByueh3PaegKKwY2oKuw8J",
  "key32": "3vSZjryvjUb5A6kFNhRfRPedXagRCaTALtmVnxMcSCwXvZoiVCeqTMi8FKHc91Pw8yiwAYzBmkXWkjfiXXgp31tK",
  "key33": "362KmuBX6m4mCrffF8SPYiLnymo4qWdbZ8cQUYVmeNJTAiNJZ8afbXe6kRBJxXm9qYarkRVsLKKnMfZGG1Fhf1So",
  "key34": "5rqLzXAfeTefnhMKLZAPGeabRhXNn88ccz1oTMzYcTHynxxRY9eEGoPQqaM4J8Bv2zmZvFf4Th54FZtaPcQTFCEf",
  "key35": "2RkXdHvivbjzJekrE9GZR1YrvZDhuEMV8QnLr1xrFFMCai6bbe8eq9xhcgw4e2kRXfj7A7BQT9oxM2n91Mnxfxht",
  "key36": "2CL5vHucDXEMvKiVFMYKrfDwgcspJ6hjoPka657m5z8iGwdftmhzabRQHJVaQAkkDQYuh9A93vA2DneQ1LhSw4cK",
  "key37": "3Ph3ddcPAhQASTMQJrxtbzA8ouRgrs8A1GFHYKntLsWm9VGNy7jXTjMiwirBnKScfmrHqfJTzE36ji9gBsmMT6yh",
  "key38": "3kw2brKPQ5B2jhAmNBWe8rfNWc1G8nn5Kh4AaWyXMAmWpN2G1XmQT4BhEwBiP7ZGv5XQJcrcWKqnoTBR7YTZ4rm6",
  "key39": "TpyQvKBbhHiD55HFcPrFunPtyzFZq7muVToKjZSqbgGuLZTBLMkQZdAbqFfW62v6Ebi2PEQrbMDvVBUGXkannB1",
  "key40": "2BDsCgYHjJg2kbyY8LGZswDqGmL4CBzqwNjtDk1FCSS5fM1m17HVNMCnso8nkYAzhAQdsLg7xHvAiw14FkwqGC7L",
  "key41": "5uGbeeZfsLUcDFVTH7n7YFarGDJuP5osaEGZvdMLR3MYYo9WsXDYYP96gxHivtea8TE88KKVweypjHnziZ3weH52",
  "key42": "5yx4YBc1oeMY3QHphn1cFmYcEuGKBS4k3ovnPBid8QnYFBfMYCbUvvstfi3Hh9H3Y6GjuUFLNGuUCCFDeKHUGajh",
  "key43": "2KEH6crWvrzHmjk1JMkNeP1NWWsAH2xiDCvGJGrAkobVVrMyURVh8Dp8qi4iL56tRUgUjC5sqih5hbyRuxQuNQJ1",
  "key44": "FoHrnGja5ajsWJ6KcWp7yMhMsa49UZobDnwTEKQJ7hfFwVAM8AXjzHHpCpZLByyGgc7Umg41GBGeaoFva73pjFD",
  "key45": "5udCPcVcDtEZ6vVULyYE81UHa9ury6uSsrNRicDdRA34kF1kUfg5VfRZrRagwQvbk3C7hrycWK6nPA8HxtRFZydQ"
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
