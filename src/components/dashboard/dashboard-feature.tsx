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
    "2AQuNdZXbmdT4HwwWHLGRwDqWzs6i9zajNTLg3DtDukJsky4nvZe4FXYgc1BjW6da69GUvKb8WBkyZFPvwNQEu5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UoCsBNoFF8V4gqejHpfHGgmwLWD9wrDcUtr93skQLHx16pDw6QxNEk2Psccx4YeHxgioLHCWsMAn3DudA7XHkVU",
  "key1": "5hy1N8vCgcsSpK4DCncrNX5fo7RZCnW97cmriZa2m8K34peqLtCFGJCBrUNWnTgDqe6hPr5EnrcNPbCc1HZDuZMT",
  "key2": "29T2A2EuKSuovt3HfvgMeDZVQgYk3LJudcCq46o78eB6fkoB4drpe9a4XjqLYMY1wK6AaR7BPH1RC7AJyxwbGpn2",
  "key3": "4PoKYkmHk4ix1YZSHaw1Lvioip3NXTRVoeecBpTnUjwCQ4CHc28p51chNTKd5xdbxAnW2fUEF1w3F82JDPnyq39T",
  "key4": "34MA9M6kP8PxCexKDnHaMTBfLTwUY6mrSNtXJAQtSossZRAgz4YrC4PojjAvJvdcyo6MfY5sZNLmN9ajLW3viB8y",
  "key5": "hSqtfzC2kXt2bZscz3Gv8cx671B88iPpCPvCvGw6sG6QSRYnAkQNjt5Rod4qMWqzVpuYw4nmn8GxBbn7L1xVRgb",
  "key6": "4rVyJ1s6LvXQBB9MV8QMd69J7VAKjvCzVioUFdiNxuvj9ghPq3JDWMxypsmB26CJHuhPQKNAWZzZbaMUc1Fikk2s",
  "key7": "2JzzZxQgM3PKKsDA1iau1R8APKnkKuHoJK6LnYGfnkSvNjTKhahctCE7esaLXwUpRg3TSFDVztRCT3NNtmTtxHkD",
  "key8": "4zQhApRgJLrLsQNaARBt6XPLxjVChKm7DrMEGky3sSEvTDWiVsmE924uLRBSqJWuJZyYtXKisecRAmkoMeeLnQ7K",
  "key9": "5kkKBnGyxefofpqi6vugvefJgNYQYF9Mum2Hes9xfbQD4gwPtqDMD5fTpeuyMCA2ja3yG82heqivafDL7aQNqHYi",
  "key10": "3yereXertCvg44GGye6hWG8xZAKpYS2HSegM2JjDt8NKhCNSnrr6qxtLrtbxuSNGjn7TfDxjhoZcGtY2dkwDKNQo",
  "key11": "4qT2HtG4zRNY35s2BPFoGqhmNVg6mz5GVyJanYaWmhJf7bGLDZzrt8wnRhjs3h3GMfeC8VpkTYtJVMFVJbUhXVsv",
  "key12": "4iN9QCUFPBDA7HKsQuQyGYFPzNneqCpLtckHGeEhmSRgSeZ2DYKbE8pn71WNf7swzk9369waSLtm2D1DukdVh5yw",
  "key13": "2SqwwPwRNamgutCRX7sCzL4QkUP9mZxwGbNfrzisTWBYwWquJaQpPadjd7pVGVMdNNnycn6q1jv3fiwBh4xLNjDT",
  "key14": "SXHvLX7BfgBNBWPuZJmVuVw2th3Zxgx4zyw1nASCKPhir1QBBen2CrXqU5iZHQBjxRp58cD1myXdb6MSfRCiAVJ",
  "key15": "8mjs2rJy5uCyw5kSTS7bdvKypnmcWuod8jXuUSqRQWq2dgR1D9HtmvyqTxHYy8RgXwJt2qaxJmpSKzMzNSB59kY",
  "key16": "2VopfP2Qrju981eYm9FfxG6ei7efkFpyuRLVQP2CPehFhTpCUXNmcUHPivPRxLVDHYuNS2F2SsoXygkRBxGiFiS5",
  "key17": "52zMeWF4PodKDuxnyMH3tNndoedjm8YZ5JV9MKKGJ1ZrE9JoZp9aBYDjgKUKw9m5Gw7VbUEHYDtHBdomC3KSWQyZ",
  "key18": "4xLNJJYdTPYjhxzCzczAF6C3jabHLwjmwYxHy5ekHkAwrx4SVafLXKcYwaKMw3BTeEm8cjwmzxhqWkbkfPvLtUtD",
  "key19": "KuwoMEZRwLWZ2PLVBH25gAxECCAVUTVof5k8Wgq21rRBdJcnNmzZ4d4ZdHx3uXMX4C53SLnx7hPbNrFkxiYh4Li",
  "key20": "4XCbnRSFVsz6rjFRPZbzqNnBp5CuiLTXkFLwuxngjAUvfAZdRkiRgiGiNdNyWymAeV3StqzDuSe1nGiRK6HLwsKU",
  "key21": "67QvLk3fcWTHet8MinEMGSqTFhkWttf61MnEp9tMb4UBmQhXDJDUpqs9QYqBBmc2kDcCTtZG3PWW54NbiG7rLXo1",
  "key22": "5UiVzniaErMxXUfpzAzj6tQ8Wi6pGcBPfL58Aj7PGvXJoFoaDPM4GMvARDuNAsjAj8iH5f4ADvtB9cRf27rLun9f",
  "key23": "5imBsS69dAAXLnYeFpjnHqTr4eTt8RmH1CPPVHcLLWw3kz3ZU9uBdWy7joKPL3ppHJL47csZaLjvxck69d2YeSif",
  "key24": "4u5zwtmuQ6KaJ93QMzXiFk9rtb6NYyyPt2N3N19qSamVZUf4rKYcWosezPmnhPZGBstZYJUMpgqCWU5AXKz9neqB",
  "key25": "2kSZkBSCfQ4T7fpxKfzk1VwmCQqU56ZcPtu9vckbuKusZK5xjNQtWWuHr8EfK9i5jzq1xqTbcu7J1g2apv1gHXCi",
  "key26": "4WSRUgsKD7JghYvozWgTUreynSNHjLuukRvccJ7QQe9UryhLrpWS4qo2gQMsmXTprZK126DA9fejY1Du2Zd5iG7c",
  "key27": "Q9nsHUsj3VyvrHVcwMtDa2fcaE95TgVU32wtqNzHVA3ikr9si4amvaUBAryYEVj5Y5kz9Cd9aD3eq9d88PtmNfW",
  "key28": "2ocuqEu4nphuyNTLSoFFkjqQLEgnwCPSAgqaqaqowgjKhMCyQ4B8Ym9s6FFfn528wyR7desmm3CvEf97vDYVTEtz",
  "key29": "3At5vWeorTAqjjcmfD7bwXgrMvD7769YMDXb4v7aYYcrsoqWEtTZT8XWtR28Ne9CxRzEXaVecjPRq4T9RQ5HJfFS",
  "key30": "3mudj6JuWeDsMvHxnJNXjUtAEuCs4ttA1JTCnecJ8uxifi3rXwmkRgY5MMoz5Vcg82ZD4HZTHnS56wCNDCohDPua",
  "key31": "3MAgi5eeWznZUdu2nLVVUWRT63AZd8CFmMfztuxFAn4QtGP8iqe68vYjx4sY7FgMV8tf6Ygyibz9rkBA29tk7Mtv",
  "key32": "4DFrzTS7m1wkmiFWcWhwJu32jWpcjxi8jHLePEjd189RSf9ADdLfBGJXiEKYp99KeSvTjBoUdC2heN31vEWHCyxs",
  "key33": "5aQiBXtna54c8KaZ86WNXhM7pQxi8f2WGGmygid38TeNk7gsdZDXapBRivmTFUcwrGvWiKm8yRYHaiCbYQHHdH5G",
  "key34": "5KSxZn2mCixjrY56t5bUYhnYfbG7917F8cfrVSnLXpvuFYhKg8Tiie1T7gVWWAgN9mrMsnBY7zEydDEHDNrLiUAN",
  "key35": "57g5etDRx2WU5XLnPqxjMMtNtQ8TE6kvFFkjd2LxF96vewLosLdtYg2464D7Ugd6UYDHp7cZ34Q1Em3rcujfiw8u",
  "key36": "56DsUDymWDFYhjGisQptmBcRbbcr24rJRaJv6jYRWAQDbnSXg2s6jmnsb3rkPSUbMUTD2Pa8Ftbnit1rXyKH8bVs",
  "key37": "3V1cTFwmrgMfwFsQx4XrcckTgkzLmNfnXGZN63H1RqxxRuZ315qqCQwiWXwMAoWDaS4cf1wqdBkdRmYWHQTGCDNT",
  "key38": "bwQKSdxamtiCc6wE61fRcdrTEe4iTREY3qqrAmwAtfCarEX496EmZmhc2dZHiw3JbQqh4Tp5kKNuHeFJbXvU1rB"
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
