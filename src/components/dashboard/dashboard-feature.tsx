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
    "2fBN1caVdmJ4VuyCzs3eNpwwe3TfthpAqAoJxKaxw6ZTaErubCriTHWHsAAJugJrpERvp8HDRaA1zb3hq7JnTk6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TaAQpsRBRaVrTvyQrCu632LJBD2Md9aCnC3k5ENeFjpM1aswMKr66KAP4vax3sV5pjiqFn4gnVLSuqjXJ25rLG",
  "key1": "2tbGqLHnpMtSRtQeYpdN9CUrfUXu8CEzjYXLH5BvfCLhpepPhnScijdAzdg8dhGQcV9naBDLN3GgjHnfpubVmEiY",
  "key2": "2YNQptWxPEmpCAWYsHt9yvbCDG1T4vMHa45j5PP5sVQjvkxqLvCyxvFhP3KrUq8Hiw3MCeUUjL2rK9fqwRpEiF1Q",
  "key3": "46RdLVxdpo3H1fUhXeMQYfa5FVSyNvLkTSFjCjB17s8wP7Jnuxa5A9fchdkQPuifvaH6FKteqjhy4uTrQYtpD26E",
  "key4": "47YTz11pFJH3DT7JwCoAHKxAw9QdWpYV64sGVD88NVSVZWSon6MZFFbcXuWx3XDJy66ZCkwd3ixnn4ExzwVGtPQB",
  "key5": "58SfbjjCAXGzivodMW21QwgRVourQGUZbdt7EXesr1UR26nZbvTjP9NV1tvWSGUBtgP6CKVAPXVNn1VfsEEwBxTJ",
  "key6": "27H7N1K2GxLXzvWSpmztjfsArZxLjsCWSCS2gcYCL5n3UegL3N7eSzu4kFPX12CigCP1aAXtWnXydPBW2nMgSvR2",
  "key7": "4zoXuvd1JbGnzBTaiVFrX1J2RAiW3k9NZpzA4B7ikzdLQUP9GnVcZPuCEQ1r9ZVpeGMPMbYZBBXwC555NKBjBZh3",
  "key8": "2BJdoNSY9raxrCmoKbX8BAckficYoWbz2J5AUJHKGG6wVJ1Z87LmS2S3on6WDEy2Geae34YHtCkuSoud6k8joQkC",
  "key9": "37vxcjvHJ6Wo98UUewwjDPQkkE34dRKkaEkKmB27aNkNUjvtvEuBGkGLnZTaAPFst9p3zD29QJyxsonqjSMtPvJF",
  "key10": "2WiLQsugqD3WP4tHYz19BZn8LK8LH47Yt11CF1JPwgs1R2v9t5XRjRTdqZMGzEmRuxefMW3ToAMaMyiUu2UDTbfv",
  "key11": "4kqQM7x3NNJxex1hsedFaUPGU5AaVX99mct5SGxREoGaAscs87fH471m8dYsSVPWG8wEv9YWgP4xL2XK82SJZQER",
  "key12": "qgxCKQrPKmGRR2NDVjJukLCgAzFvp8nVfwEpxHc59msP5XUYy3gGUiZXNTZT7hycErFoL7E7TDNb9davcwNSw3T",
  "key13": "3iVxu7evaaVxjqUW96eYpPfFSvdyryPUcRaGy5ZuNjQS3mRgeh9pZKMkPT4fUmuKmmHFAavJkLXecgH6fR1VV8dS",
  "key14": "5GsPJrUTjBvpi5qidasP1gjb9ZTKxKcH2wZ87FMHjHjoe4Dp1S6pgPV8fDarDqtcVL2T3ndcWn53AP9fm8ci4aKF",
  "key15": "33eGu5bspvjdsFykY9qYyYrQJa5miJ94ceAmM7jXA6STa3pu6HEAcGjpqZWTeKQShjuBAzToKHxwJwi99WcyYFBj",
  "key16": "5qUCMGc6ex9n7Kk3CAM8CkSXUWYkryoeS4LDALaTFH5bN8AkibxHyoC2hyRJEU7gjva97xwaCD7eFZVvboVBLzBQ",
  "key17": "2hiuSK6XErL7U3pphMNr38nAuzae4SrQvKfjMW8ugAmme9pDDGgugxPju8D9Lsdr1dBxg2WcdMiyjbxpBajJ7ccZ",
  "key18": "4srtceRT1gDh55EJvcrTM7M5yhKRvEP8t2Cpkr3wGp4uR6tGiesZw6ZhsbU8ec8C13uSbfXBfdPZ22a9PvnhNScZ",
  "key19": "5RmjF42UzgWfYHxLeyJMmsVWnfEFgrx4MwUW1k78RrBx39hXYHbCN9NXd7ZV9DwtTDo5bHt7fp9k4uTJ8uJQX762",
  "key20": "3E3g4zWzk5zepWXLLWFWCqhJSYLQwkqN2mZ9MThRBGDExDiFiMB3dfAH9d8cgjgze8VeqHe3TpGRibaPk4xBfwku",
  "key21": "3EYx5CgrEJZWgYo7mY3PL2aTYXL3yvhbgSVwjj3vAW5UgASCPFUjF2g6uWz25HXwmPzaytbRwejiQ1awbMh4Njat",
  "key22": "35eEtsgMT8rvwScxPVtyexyPKLQXSfV4Z5CwxuSB2FWJsX8FHX2KVdk2HsSVirXKPrHNUpeU7FuSJMrgt443V4yR",
  "key23": "34fgJ51EF64EUEfjs3quTvmYfuzcnhrHUQt1Kbg37VPUL8drqyymE865dz3a5VtTbo7UeA63y7sPvTgo6EpjnFU",
  "key24": "44R751Xh6KCEWC3VYYv5DJMgSrg93tUEhvJCvwVevd2W2ujWGVpJRcqFvyydRhKpFMwCx49HZCaQLARPt9VTTz5R",
  "key25": "48paq9GNLQeQq4U2bUyRyCNsufZtrCvr7nf8gUuuUZHvZWwux1VvBwuNjjZtaTLg2gLnAALmVMaRqGn3RE9MW6cw",
  "key26": "4Vn7z6cuMtPpb2J1JdRfzojMYGanrmAPPHDyUUsZxUknQLjWs8xRCacMtvAXkbUnk7KixHvr3Kc6CGfEbkTrWLHM",
  "key27": "3Pd8ePrymWDyVdgAFR3cboBCQT57oYYXzUUZctfRMN5JXDkhXn7aXAPNUcW4T9dgaPxnm47JFaoro4DiXZHughRn",
  "key28": "66xBzdQwGVKkbBz87oastS865iuFhbjsr1snxC4W3uyjr9f9hGa9Gefdz4wtDBADsDCUtactWmXrAAfHTpTYr4Nc",
  "key29": "5zreejXv7R7zb5LTcGFpzdZSisGifaDTq7SnKTcgHHvWo1DJMdmdKpbGwxVYCJZTRJbZRU3D5LVn4LofzejLWejW",
  "key30": "5GxxUFwBiDDkYAhwr1DNAXLBVEh438vcDNsMwTD7NUTWJobmugCFHsVWFnLbeyrv8rkEzdnZLi1SHqrPQzJS5v4D",
  "key31": "5dNhQckyxSNgpwbWpKcju6877cdxaBudLX81ddtPyNQbjobhmibgwbxRsVn6bQc4BakXPhNiuUUQwqhQKhZFkrKr",
  "key32": "4K9TZNNeDjDkg4K5CKXarxnrvJmSoktAYcTahuMFpXs1ErRBPno5QWH8YyBQdYzmMTnMnfMstULM1kL7u6p6j9wx",
  "key33": "2T3X8TzhiYJuW9Wj1tNGSApy5jtpdPNQQLVoRCXfiRyhWG3LuksyAz9xD8xPWXHZK7KnsqqYtdPaPSjBXBRfWPdA",
  "key34": "2DBdvNRDhmpqdv38sFpKoQkpPrtYC7iW639qim6GUxh4HZT4cHqkuz9qBt6cTUbH59kowjLEFr74Nzhdt9aXrmMz",
  "key35": "WVSGkxZimXEGq8JuFDHYExFKQFwBxVH187yxuCZLMroGLZwJrxbDfQdnwQBEGM19vEdMWpXMDKRsqrU8oHxBYCS",
  "key36": "4okTsASv2JTDfFv1pd6F978Boy3morrFLQdh7znX3WbnMCDh2B5SdGRU25fWvnGaTRgvsZQsf5KW87aEuYeumDDD",
  "key37": "4eMu4TWc3zyrwCYopzypmHeE1TBpojCGK62fLpjBVgDW9djmyNQgF7VtJFYr94rqRe5ydTt7osJsR2iK2QaMqnaL",
  "key38": "3fR42eUmRZdrtuZvZUWx8kaPkHGeTkWcBfu8WbqZJe9fgzpTRK5UFY1ahHrenUqRMR96daT4ji5L8FEckVdfbGyP",
  "key39": "phhfNVsL3zJLv3fjSx3yTiRVKZxxPnB9hsNoC4JhZVEZCkC6cPWxn4haCXMvEKPh7kaW8t9FZCaVLkH7GCEwgcc",
  "key40": "4o2KTQBN7CcMcsN7kV7wJv3mqG9q2tjJ2zjE45SiDkpoxQVhA5gnj6RNv7z26fHx4ctaikcFoS1jQJzQRQMv3Gy2",
  "key41": "cAErh2Bzg9x6ztuakAoBC2TbLYyf1SVs9mjcbnadCm1rcFDxsEG1kCeQU1imxJegz4hRXkgy7ftPF2Mxiq21Xiw",
  "key42": "2c4BFLvqWUABsytc1Rb3kxjEWbsUbtHq1Qb9bEbFPa2mg14pjU48q1bcVUjFtHBjraE4GRdbodUJ7nrPt4d1NvJt",
  "key43": "2v7sHzwNVo6kwk9Q51n7AoJ1PudRZFFxeRQpRMz6gieSYJtEWCpYZwgXXnvac1wY42biEmUVMD7CjvRuPNhpqEPw",
  "key44": "56qRFLVbb2Z5ksHD9U4Tmp7XRTxqJJRUx4gzPimUMG6S1nNKzJG8vsRTPtmk1y6yvG3hsYBkP6HZmcC3QQcdGdN7",
  "key45": "3cDeVdVLrnb9NMGoSg3Bq7mFenY6Q4ZjGkoy78XBagqncPZnxQbL1Lef4WVYqL32Nw77e36eL2MF8a6vePPLMuNq",
  "key46": "2tsCFkbUE3F3x3xsQ82p4Px4EyXr8PpMK3oZJFcJvFjRuK9ygCWuch5ZW3cLdEZD6obhzBJ4Drr9Y6dYAqMDPCWL",
  "key47": "5cDh9sDiBQkf7Wfvr5DPApR8dtzXQ3UZv3fbd7jQ7MiRvhhrFaddoa1BsvtytA8FUH5DPzmeKxo19Q2bJbBS6RyS"
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
