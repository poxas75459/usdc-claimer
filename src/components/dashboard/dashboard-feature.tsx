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
    "oGyNPwnFMxerd3nBEQpudLWLYbVLaGRUPoZupiu8hqfikBCzKCErJ9bB24YTC4qhMR8HG6LuEMZJA6W48KkVBww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNHCkarmHcruKci7rLkMGdqmS7CsEMkSm64teTTuYtXRBPG5wt7HesCPXvtSW1BjEYeNGKckQEy4isKbT77PRFP",
  "key1": "2oA8rDTcrAEJS1oQeNHjqb47nX4XRx8qGD4KQYQgGmYtgjktzaZphK9qBmWumtMxxkP9a3UV91j9u9FoNQBqUZS6",
  "key2": "4ypmMX7RgXmHdfp2fPc8Axmv9KqbhYHM17AvHZQYerNQQrdDo2C3TUHBjBHmFKjcZo3pPZd1fJzoxbXoEC2e6J7G",
  "key3": "FUinHjXy5QNuMa6gjxjqnuZ9Ca4LP3Y8mekcayXTeqDJbmyVqU5HordC9nFRW8xktpDHs8sKyT4Q6LMNGG4h5yg",
  "key4": "4hs4jNhkd8NKDsUypEGoBM9kZH3gZfSTeu5Qque97bNWse2az8SdWtYqV9UcnPMRp9thbpb4FC4SnpDxiLdcFzue",
  "key5": "4mi2dg8Pp1CJxYXvf7qd6CEz9c8SFa98HmNmdc5SQBvM5ez5m8JfC37gVzHo3w1Lbuvxot9PD3KanmCe2NGnPEjd",
  "key6": "GYpCthK5i85HoZ8HmQLyMvSiDsbqgjaYYJXatsj1UzXr6srtspYxPCg28hSWb88YqdxDxMRQCy7KoCEVTHZhmTV",
  "key7": "eH5ZmyHuKgvhaHgZrokQ971PLvkJcpKPaVAQhDpfmTsH769eTCD4Sj4nETAcPBzvDyihueKZTaFDG6Rc1Mh6Y47",
  "key8": "5A8AdDQ6TtmwwoQrmo53L7UDLG5VstuZCYQHX7xk7pjWG22C82xXcqFN3geiDzKcZnPyZwsWgh5LjuZ4wiTtHHGc",
  "key9": "64cxx5PuvcyzfvgmeZGbc8tX3ibi125YTdoH8aCpKUQutns2HM3eUC5sro67YX9pH7ZDxWvYpSefhBX1zN3hjeao",
  "key10": "63MHdMPXtpXQg2R1uWwWdSqqGVW1WENkaeeHg6hCaHVfZnQT78jaEd3n2s3J9avGr7TtckTrJ32vo12KWRDnmjSm",
  "key11": "SxTqMXkbgG6G9mo2xkrGYjXrbHMnX3viiR2Mnn3RwskLXaYnoLLxSHAoYJhyUqgqzBjGAdzrWuBgy7QNnh8Lo56",
  "key12": "3vqzS9CNc9E3XpAvoRWEDUAnJXKgT1TL44Jv32CTmcYHh4F7q72a5Z2sDYc1yCgFBmVKF8jX8Hgt9WtPb164ZNZ2",
  "key13": "3AgL5hfNw62jkgnaY1WZTApTdpibgMycS4SXaRFpdEqJiyeoJYEjtSBwMjPzvYREppHqL1wqheY7xN9rxwDFEjCq",
  "key14": "5mF4acFRaiHZtuX4C43SniQjvhkPej7D3MQzHPVD4WwPBPsFsGjE24c1rVCtFNpoHEfEtw8sT8t49ZrDbijsyfLi",
  "key15": "2G4BvPfPVo3CowpRKF4v5CdNjBEz9WGof3xXS5stTFMTjfugaDQeasfLSj7jGDj1Sa9nvxLQScUrJEcaoczQJyZy",
  "key16": "N7kj2TaPmi3YHr6iiNSbg8P1KhCpTvUz2ikcZGrY6SPbPdp4qvTFZvLcG6s5pMPUZ4CaGV2tGwsD9PgryofQjDm",
  "key17": "3G1tcdv8kWGHvjmyMD3ohyo9N7CP5SbSRNR7Kuewg3U7ELUqTmLksZZuned4h7LjmcuXgcMzgd43i6FZBwrWnPAK",
  "key18": "2pWGdn7eBLR7UCxrN9WLwsALNBuv7zXh6hTcRcQ3RJAsbDAhtqnbA5hRDEzbwohqZJJ3av67Pg3qmyN3gXVEa7md",
  "key19": "4YBcjWjmvjSBbgU9JvgzEtUk5mBZFTjiidxftTDRqPowDCGtnoBTzackuxZdmWwh8HAvewh8SRNtcfjFpizc776r",
  "key20": "67qsNiADjf1bUB1ZGw7GsmcKFBj4QzrGpJXJZHGd8jMGct1v2RQemha2MbsF7BSXbaYS4fMhpZepyeJkJ4Cpx1JA",
  "key21": "58zeSDhu5WbQ1yug3jzT3QdQc4ox3ovrG3UZEBhAqRGKGcUEocRZFvzTYrEoijLoKQo4JZxgzJ45QEAGEBheJ2bN",
  "key22": "4kwjhnXMXqosVCoG7qaGdRnR67KxAeG3aAsDJ784RywgCYoGcp9cbGFpk9kGB2nsH8o4WUj9tsMPeLvc97sQP3cT",
  "key23": "47DSjScF9Zqg3VLQu1e4EvTJWuNWQn9ne4Abhb1GVs4a2TFgaom5b2FjgRLiDgogPZmLEPfwKybeTh7qJvMbgEJk",
  "key24": "1phTkYVhPZtkDsjqT2pg42S7QGYjwGFPCeVe9ChdiNxwrJGpL88cEGx6GJzbGy8KJrT2Cp88HFkvt7wnoDh6iJM",
  "key25": "prvPtpjY374FF7mp2kx8mZF3mvtBvJwVcVwb8wubUWm9Fq9cTGCfb5nWNyoJYdCM7taRJARsZGG818zysjegna4",
  "key26": "5MJGgZvFuJDVNrdgptxs6LDzYSPL7AntozZTMdDgDNPu8b8tD8A6r1UpuMXuVgM7jAvLLu4NDyWFMVnMnW6o2nxv",
  "key27": "VkTSQ8q3JwqvTPsidVowaV29b7oPvMjy91C6ZXLchC9xgWwrAdaRjw5WcMpTNepKyBiKAaduhuTZCjmtSHUvg2w",
  "key28": "xqY9yku1i7fNSG4P7PVTyVg5MUhGPzjAQE7uj4XKRoXP9R1Lm4QhxYJg3kF7uxc5LQMzNG5qEz2m5oH4UoMytmY",
  "key29": "WyPGdbFYcqaNXnFx25sNAa49uorcHh5rn3Jqg6Y6xQmD1nWEvo2YTStFQ5wz8211rg24TvzZXBgKwRQqBDqe86s",
  "key30": "5CoKnqTJQYWrE9r2wr7CghBUYCQvhkmVXY4CQE7N9y2sbPG5XcLui8jpCtd5XsitfyQqaNgRfV272qDGdyCfhqp1",
  "key31": "5vMbEnsmzjZWYL3cAkvvG6cXqwBqNSWF9hn8rG9gUpomq1U36i5zEkgEtC1VKq5Gn7W7e7Rfj6yo1BCmCNCKF46d",
  "key32": "2Ma37exQsTmaZDKDyLqJ6ytCveqZQ6ayeZ61aLdwsefudqKzY1XYvsssS14fjpLiDmtk965qVvwfrhYFnohmG4c8",
  "key33": "4Fqvxu9VU4yzcoXau55eA4NdKnqS1dC4YUcmmkYvVEitqfyzbXHu4CMu7TWE8SZ5btVsHnXPKLNJWjjdcJdyt95V",
  "key34": "28X53ssKg2jfLt4q52ivo6JNHGbindzCSiFRNDarZtHTtixNke6RKzMNbo1WXhnTj8ii2fJppEoGo9UmzXRVFMGA",
  "key35": "3kXSBgctbg8q1QYSs2csssdURoD5yhDFtMc417hULp56ZfnkEG5chtnRP75CzFRKh6BmR9yqE8DGdmARDYXqK9gj",
  "key36": "4W14EP5qm41wWidc2XpHyMPCUoMDoTRgAmBimuty3b1GkbiboPapje5i7o2XU3EtSkqrdP652AFJZTXQ3Kre7NtY",
  "key37": "5UT5LpZgPVwaxw8UZk4XEBfUqn4BekJvd9cYvyMQtspagNzfhYctdShRqjTWRjGZRCh3AVugPYEJc7hX2kNzgzZP",
  "key38": "xo7e1BoMrDnMGzfGTjWpFvcHb11t5ppafJA4VLXaXArAb2MpSVTy2prW2ZmusatVQfWFepg7v327kiQwofvVue8",
  "key39": "5ndvjHC6tf6MMx4AjM2Dc11DieQ158WAqQ1xNSUEFsrV5QYEF5QusJizSvip2KCgLreaENNpW2tu5fFso1xqC5xm",
  "key40": "4JTkXC3tHP5NMDDcJVnYdnAJ4MVsT6mHKGz1he3TeditAN6TMEAhQAvHSVNzCpCdTuzkZJ9yV3aZ6pgyTMNLQrJE",
  "key41": "3n94x6mAExQtCgFafK85Wz2S9aoi6X22jwqJiqMbPZ5QShJicjBx5fXeTZFpt2sWoFyWYdHU96pLq9qCUpKfwwpY",
  "key42": "eQEjdneFZbvL4bB6yFufWbEg6eCQxNfPwcpoQpPfxCHyCroC32hoMuJJJshCW4EdazbSdkfej3PBqFJtMDhmWiZ",
  "key43": "4ujjPCNexmZFUBaE5CjK7HJBcDYBjX3GSYcr18u4pHjMULpFqh5SHjnTwLn8EXhFHg6JVCc15kCBm7qm4fLPguoa",
  "key44": "3EYGVCpEVJLoVZsZjYZaeuVfFqcoMTZ6v4oh4nJJwtW1uUxAvprL3BWLA2RRZMgk1SMB16gmXppYgfkeB4t1Djua",
  "key45": "237jgPzDxkYmNs9LLrdKk6mY8j7e6RSAqPzzwWarD9KqDdadLDhZfqXw6oTVNUdAtQYBAtnrNnDuDEmgf5zyDJht",
  "key46": "uvv4BVJgqep9CPvgfYSwKE8xcBe9WQytu3fooR1UrF6mDwwjiTUp1kiFWsCT89ex4J9xxEPPTiwQ6SnquVaea5H",
  "key47": "2wcuiwjp7G5UagohcsFKQqVYAnVAMwFVzkmYC5rVdKrxcNYTPt2wPLwuuU1KxFTZwSviaqjuYTc4ke3TkC2g4NpM"
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
