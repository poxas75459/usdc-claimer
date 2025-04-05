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
    "4dBezgMQqyuwMbJZubuu484XqbGWWyTBcMV6u2PZjwnd7e9C6v6bkdWwkqTXPEwqPE3s71wrEnD4BS1FY3rvmguf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtbK8bgYjQLuqampo9yKYFJmdSx4AbMs2eNRStvQgv2PkETpL92EmGdivQUW1zXBmdfawyUjiS7UXcenjJ1WXtY",
  "key1": "2deVppGKfnUkgW3WjYuwqTXkwzJzrWeVb5JCmLHjvPxcUuVtckvQDGb2UKtjpHEZpdU7SGsqa2USBW1BxEmswpBS",
  "key2": "24PqwCgBf5wSJYnsnEYR4HpMKKSAnYCfRnLHySp1yoGiioVhfUTPmVycs1ptySzFYVW2jjZyAVyuH6837FKxA6SJ",
  "key3": "4Uy5eVL9XnfW4372G9nUCreQBSEDFi2XDsUMjuHDa8Vw6AhhkwzxoHRpPDadMQv9opgbezXSCootbUe5N4SrdWLw",
  "key4": "4EEv1K4MvV4nS1h3uB8yWdk38GEgUyGDrFi9uXkx1bKt3ANgFBck4Zie66awDpAekYENnCFakr7To7X5SsySMVAo",
  "key5": "2nVQrcCrwB1qfhzFNMHr5cCoVb1cbbgvt8WB8oq2PJfTehRVo7EP7cfnfmkKLcZi2WCPyJuF7xcvYBGANe6SsMth",
  "key6": "gxjdVjfCpKVxy1ToXcuS3M9HTmy3eT2DUiiiW8kLcCX5U1NrN9Yc483B4VKpDMwce8T3dFW51NJQnmZ5MqveJpA",
  "key7": "4FTPj7Xsbhtiyns1UFgFBXHyDGgYnS3zhFkozeidQLqX1mexDw8ZuL5NPtdAf1xo7BHdqcous8aGz3CYBCwMJBHc",
  "key8": "2XYk1MPmDwePCziA4w4kQnLEWDkYhhuzYw349ZdU1gP7JMB4NuJqkD1Z3JVd3yXxKd7Dtz6A6ZqFwBaXjFjTmHrK",
  "key9": "24rf1tAW9v636ohY4cP5SVfUqBrwfGqte1JFxwCWyjgekixTV2J67Q9ddszT8FC4mYbgWLBxdC78EYww9YR4grnQ",
  "key10": "5KDzx7SjDbNXaWVzRkKaHUXvecHyYMRi857jYskz896dj7t78WSpQ25ybN5onbspksdAooKzBZH7SfdaVPhF97Sb",
  "key11": "2XeqbvmRJeR8TVVG7AkUsSbFt7JJVGUrzoGDofEm1Y6tHHuM31za6KYSBAzX27su3MBtpsRHBD8BBVjjpYSWLkyh",
  "key12": "2GsbbR1jx1qCB6sqA3C5JRYcLKisMKLEXKe2BxwmvLWfDgx2ReCx84iBqq9CM9TUaMDW2gWqzFhsfF3oQ6zQLR4U",
  "key13": "5PLznacMaUU6PXhTWHXWcHoBFUVZZKaDo1p2CHGXxGV6hhSENQxF2DBZCKukb48SRPPwaNJaYWvq9joHoYWW35Fi",
  "key14": "mRqF68bWFCxo1Jhi9owUAHRmP1tA5JaVyKmNLM7u95MyEj3ae3gyWdww5KgKrnUtsicq3vf8uszDWDzSiY7YZgV",
  "key15": "5TKs35sdCa3T4Qp6oWRpUYiroyQZSHLKsm6uDfn77rhDipMA73gtJHdn8GnuznKX2SQqCWNJgKRw2gwAvWd3213m",
  "key16": "4HnUzUXvGRhe676QNb5LXnSRHNN6NV9Ltxxf2vKFEDLYVfj8dSpYMqvsB9wZsdrCd1v6asj7mp3JDo1hEqYzxUA5",
  "key17": "sUmB9b2mhqQszZv1pf5MqeSGA7QkrwQeCu8Kuo5tGRkKvnrRjQugpSi9Wc8y5owH7mF5pU6H4UQA2STE9SS4wnu",
  "key18": "58gyESJ6vmJiPG2V1iRqfHibqCwxQsVQoN7hsEtQKS1RdEtotcoUuo99fTgxCEeEtAs21JV5bQkUi8pWAKNEoDuo",
  "key19": "3pra229MHy8c2uA2iJ2APQk94evH1EndnuQqTh1FATGHY6DpFBETj4SZ9r25h73o9mVsMn33DJtBn3RMNGL2zBUx",
  "key20": "4Vok4sFEASTK3DzC981AKDVSk5T94tnnQyxbhg4UVTPyau1yPMBZwKAKzKV54xpUnKWMHfScM2BUCc9yxjkThXfs",
  "key21": "2uXpkHSWxv7kZsVeSeQ6FTvH5dhCDiDzA4r9wZGdDXeWWfcbZmTrDQt7zsmdspUMRJg9njHU3Gfs8zyc5X7nMDi",
  "key22": "3EFQZbFGZtHqf5mpw6SeLLvNjUt8ZmCKs6YMq1xmzW3AFmE9bTLHYnUASP4D4qrhmT3zsCGaDHvmrpidELjTeoi9",
  "key23": "62N8h9uYj8rFMg8dQYX8LjYHL5tK44oJuzWErdXvTBJKzDJV4dxmDRSBWWoJyF3gbyjA6S11ibb6PvsZeYJruz4B",
  "key24": "4PhbdW7qYZFrebFUk1Mq4nohHDkMW6FAZiQfiaak2CGgG9vhdwhHaiK7e1B43gerMhXDJe4HKz5jUUnGaNMUdAE1",
  "key25": "4oGLDqrUJynMkumPUtcHihfuiNnrsRUERCoFKxZcp3251GyqHzU4BqGeNhTxVyxz6Hjcq7UspkaKm4m8xir6T1V2",
  "key26": "4JJMxzZ8jdxQxvrGCwQcRyKUD2tNAyNVe9xqnMpDTvWjrySaP5V6nBNRNRRbWyd7ZhqtNHNUPP2GfUCkLWamXfn",
  "key27": "5RUfMpmzykL3tga81SXx8v3XXDprDgdJ9RWRR3SQfYQyRPSneQqrSHk2zDcs4Dz5scMEwDGE6L8GNMfj6yFtFfzp",
  "key28": "FoBDV1DmB3PBQtFcRBXtDvyJM3rEoRqwPvfT7LxTHbZqSLoPiXuhWUznShvm3iu79ECUYBJV7fMD46ipU99PV5F",
  "key29": "45nRUPkYF9Hy8ViDULSdmsZqp9YKdZUAJT6Gmsk2jH7Lmc2PjpXDMgZtS4QsJVT7yqejJhaMpW1ExqFduyeKVhAY",
  "key30": "3QLxQQFCxDvGtGCgC5N83dUganoi6s9NhntQiQuyhv1A5K54u4jQ3guGWErNNQQsrUJcMiMzpdJYPjQ7FjcPMWW2",
  "key31": "5f3j6EKgTf1KYdCwaR3T8vpapgEq8fTcJ4sFbrR3xMiPTyAMDKZFDVLCYvzNKZdAFi7SUoCQTFU21abVX4gsfcka",
  "key32": "3rP13d4MeNHpp3n7t4CqdQRMDfRzbqpWPh9hy7M4wpns1gAiKMV9tdrBbzNB28FuBLj9J4DBRmWS29YmWbaLPP5b",
  "key33": "jkqazbaExf9Q5nprNrrk351AgbfAAThXi8K1mge6nw1c9SS1ChZShhhU66RQJd4EKtZ8DFQFUkP2SRW8MPNGC2v",
  "key34": "fwcCtUgJG1GUaroV2mBcifudNM3rsRHSwVgDKT5BZwiiDc8mNoJZ2LcJd5zgToV3qGZzH7MbfRu2qtfVp8gudzY",
  "key35": "2LVMmLJMWRjDUR2ZbHMqscLZzPbpjnwGN4aGGonK2EiSMcAtNTKougxjGa9Ytu5sj2Tct32nrTWTSEdPjDJyx8oh",
  "key36": "5LM9ML6EBjgShSmSXtVEQKdqn91iyL1njFxpTrSheFqdvdJq9TSNkKe13trmo69ZeT8zcHeuYZ5fyTWLVJkEKB5Q"
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
