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
    "4AynFjacyKdb9XvW4g7WNuXrNNneZ3UGT7q15D2eZ5v3ianA6R8KB7uaN7cGxhxBeCqZSso5SXWtjUQXrJicZqKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMiUgoT3qMz3Y78rDjYbqQXAjLLg2MdaDTjsCvxXfJGQjcfYJBJEh2arqzZFgDPbJz1NMjz3bjXaAXj54RHebK1",
  "key1": "7zdHG2XC9vGYP7rwoTGwV9qL2rZLB5oYqJsWS2HEfYTNJV2q48NxmrfhTyDnnh7gpHVY1ycawnuS1DjM9v4wYbW",
  "key2": "2VmevXjAYZb39adj3j14Qnui8NL97cAntUsGbFPETJQdp81L3RmhqWDiSN6sJmsLWsDi6KFramESMs28Nvf1BG8H",
  "key3": "AkHcEAvkRjWY5tdSS1PuMohj3crHVYaxdoiV2ZNsxa9u9iZisAYa8ykkbBsADRszphvAQm9PTmCGLKBPT6HQsXs",
  "key4": "5Y9SDsnGJXmvpTTfhxVxpkDd6J8gosSzMX7rxYHwgcnVpKAbGoLCFSzvsfXccETzAu6auArjqAoew5TDS2FLMX1i",
  "key5": "4dyhjzBuqaiD85M3zioqvADopYYfA5XTuTy1aQMX6QThznbNMCAGu6K3K3euJok2EUXfT2KeWwLER6fvEjFJrv4E",
  "key6": "x1aiyCHEzPL1DV5m1a1Pc63XPJgX5r2GUVFPF8uhrNnTbv8u7rHuwAbbr9CPqDhpAWkdariTtB1HFGeGjxpSWXM",
  "key7": "63WHHu1UN4TgmCGDPwmKHjAgwr6CfX6poa44nhThSu7cshwiLgv4shTAfL4cHdXfBVWVTAhQ2C6gNixWaFK174j6",
  "key8": "2KoUE3nbRdWdX19Cg7Rhpg3GAR6fo6VCSyxNMmBJaYyeR52S5xQFHw9DTkBuPfE2tni6QJfBuVwM7dDF8NkJq6p2",
  "key9": "2zrqiBSHp3ZArkB6UCM3B4ZaMEJvJVLXLGWG7jQsA7sHjH15tS1KyVMZBjkzivU3KmryxG4cfcecg6nPshpVzj4w",
  "key10": "2roFEKFSodfL2yECTbGtBrizzrPyXa8ZugcRvVWYEgc948e991798PiczDpTLAv6shdJ9pcwhgE6cEbgZeSMDjCY",
  "key11": "5nxVMQJ3KuYyfYRXW1du3eLh3gntG942MjgSp3VBwnK4nC6evo5Ny941AQxRtmqddBJ7cnR915MD6wnnoBeJpthW",
  "key12": "58gJK159dWa83NQboncsVHWbttGK1gv67W9TRt2D868Fq2mNSFaFdfvVTc8pyJ3ETntmcPWKEey3wyJ2y62Y7WPG",
  "key13": "Faiv2D6MNHthFFcRbLoSx2xZzXta7ZMwoHZfWwMmDn27ACHct5AJvUSvRNHhmwG4tDVvoPNukavxHz7o3ApuqXW",
  "key14": "24xjNHuHzm3ndGVELELGkGdP1XCW1Biy9EVB8C6MYduPxKGnXyoUUZpFdQjNnDo3c8QpDSmxssFqdXy4Mncv1uWM",
  "key15": "5M155EkJLGadbuMGY4HZcvQFotC2q5oW78D2idKH9PBnr9DPWKvyGTZ69mv2hLvPVcymRUgAXrKFFVNR4MYR3B1J",
  "key16": "5M99aQf55DWVdHcLKJap33nQezjVez8xj38YSoMCcYSxYsxcA2qGJVsdUmTvEpwVqZZ5ZLS2BYjRHLfqHHvrUFWy",
  "key17": "xh4vc258Az6DjXaG9stNKXhZe5d2RinHgbqss7gKG3rrcwhVuGrX2beyZnBF6yHzcz148T6RnuNk7UJvFDVUe83",
  "key18": "1RQcDSFbodjBGByRiSMFzdqc9RFpz6D9wGYjtCsNjWKRACE9uT73nJLWbMrAxvfJNpeSHTS82hDFkVWmVMjgv4m",
  "key19": "4MoZKdsa9GZjdFpZQBBmW7KQ8tc2n4M9an4orX5oc4JavGGTUnQyvF6kcEqYrBgRqbtD1g2jd1C3RvPQcNHHAYDu",
  "key20": "2MKaxFSHGj5qtbDFBtw62a4ZCZLUcVXHDQQzv2iEmqK2uKJGW1xb9BVLDpYcFhq62dgvV84DruFci6GyELHxogVk",
  "key21": "4ELcXV71SU8WtDGsPtGhWkLvCuVd9ZzAxDUUxE9JeTqcm1NZwz65gJqb5BbC4d7Qjf5ifPbtptBmm2fppr8SK4Ta",
  "key22": "3D4h7U6cQRQoX9pCZ9F69RNBQHRiXG4N6YfiFxzyuyjd63QyKRWsHYdP433U6WJEEz2uoViSXUETs7nsKPTn9nGg",
  "key23": "2Ep2NvGCLskTagKvcAFMpk23zdPzmZXcecJnXBnRV8qdxVqg4tiF2HSwYh29Tfoo6CSxuCj8UsbTdYFa44kciPNm",
  "key24": "K2Ei8Wh9Qzge3hwLoHkJ1HTDbE1bBA7TLVHrtFEcRLWG5yNLbsAHkeJoKS1KRXQbyjVFqwWy34NCAoXavUYd4HD",
  "key25": "4cQaofB95vZCBHsSTLcJkecruoS5MqzCHAeX96M1GzNSNXn4hLFSoXbkyLYMZfge3qFGJKnQXjeAMrXN1B48enwr",
  "key26": "5Xt8S1jPkawkDRR9XNXHpkbWfEeSrDHHwgNgvPNruZmCBAfQGdBcC4tTQXp4WnLj8P6yAfJvW7yyV1AgEdGeWna8",
  "key27": "2nzhcxJCWrn5UwtmbJ9zNDvUjLCtSNyYXA6jd4kvaYNhSHsAQAajzgsyWbN6RzC4ypnGsPdqfsTGGEWKQwfw8qj3",
  "key28": "3Mo6KRGucbJH6WjVhTKStqgUY3nuVV6Q1g8RJBKA2zjR3ovJVi75LuiMPbViiwj9bjUk9wvaj5ZuJUSmRjvXADcS",
  "key29": "3u7NEbbGpW6uaQjJmhCeL7A895yWDDWznzdoyvZBFbPnJEvkJgzgJmmqrWAFZ4Koj63B3Vv3BgsdVtuppT6ZwD7o",
  "key30": "wgn6caBUiiVjxCxtbJD5XjP9Yk5XPgeuQhQUk36fne9ZrvuVBhGRVBbfZCMZreaXyfx7B3KDude4DMNCexJYcAr",
  "key31": "4sJDXpowzkomsHCbMxy7FEhrMysheM6f3fheNk4tZ1dUUwsmuFVdAgksMJ8m3a9QDxmyW4bgqTYopJAqbiT8TsEu",
  "key32": "5BRQ3Mexba7wNUHkFPJsTtf1hkezRUgdWjdPxTpPs1CtirgtP6CE6x4vBEfgbeScA9Cg9CQNSWLYV4U6zNGVkQpj",
  "key33": "5bzpwgtCvvpsQCMuP7mrza6akiQqhyd6jHsY5N8x1P24SHGvGMRgumbwDWxH4Zksbpmx8kVnS1cuEA8yyM22zdVz",
  "key34": "2mRHiGKgdwnvRw78wvgN2ecL6BwE1D8cX8A4gBJVA2pocoy2M4fhb8osJgiYniQS8R4MJLBMHjwkedj2qJc7zhrU",
  "key35": "5f7VBgmYBEmXJ3otS6UimtwpohQ1FVvQFCugvPa2nkcYNjr47G3rGuJNxjq43bHsM1JwmXbkALmjpF8gj1JYwKwP"
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
