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
    "53gTE8Dn99j8T6QttmyLEwdofkrKfVosfzt6V6mJBNeD5ZSxc8mTebgaMNkhNpwMCBWqo7EFuVt6sA1ASh5Q84oG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3UaSxRRyL7y2nJzV6AyaTn3rAUq2cQq1vw1zitrdZbJbbcdbBkQusiTWWDxGHA6arxZcbQeaag6AeojXDQdc3Z",
  "key1": "2Nvd22Q2Dz2iJkF5xVbn9K2gNdEamXiUJB58UsrHguhgG4VughUD9oHy3AHxZdQjsrLMKWapwDBYQ1uxD18iyqw4",
  "key2": "3y1iuSGkCZ8X3PQ7Bvxg3QpYPewNgfSxZxBiGdPFwTVvp33D8ogjVQrTHCG7S8wnuSfptPN7odU2rC2eryjJ67K",
  "key3": "Nf1AQB37EbbALdCMTAQuFShwpWShKkDg6q8jQ8LH4ifTQ6wcTzyPykwb52dyNaycAE3UeEiWvJqoDJPHgzwPvYY",
  "key4": "JKWGV8M63YQnb2VwrD72GMeLGYqojjqsKkRUwNnToLmtE2MKmNHvSDLL93F2oemZm1DtZpTc12VKFpkw62tjxu3",
  "key5": "wvNxUKX9JYH6emFC31eXnNU9q4CqpFWafH7tKjD4UCFWyx6RaGeV2LaHNB1rqfvra3EzPXJ2w8vnA6AnK4UhDWw",
  "key6": "VxMs32q8xWfAJ27ZxqaF7NEixa9acNEet99ZSNyBVfmvu4wPmFB9a4NMmLxdaEgXEpLvm6Aqz9RHjLwcWbv49Hm",
  "key7": "5o1sSCV6cWH59S7ZYNm2myrqKnQg1DQm2nVuhXbsyPnbqMdL8iXbyrQQHWpiZbAmawhz69FDmC7fdBhn24us6w3r",
  "key8": "Yu8f6pcFkTFaCmudf4HHAh1rsUaxjjLfWF6ub1iJBSZNmqfn3vWuF73SixVvPsDisUk54c9RhqU3btMvHrEDkpw",
  "key9": "35Enp1wdRqzYWpE3YvECPPhH6MpEbUkRMFpNQxkZfboSjLnUmvPFS5WTQAL8cmKrSNY8xx5AkMZMSS28Wz3HPsuY",
  "key10": "3EJmg1mD8n5diwKLUfmeJJfQm4XoiZoMhpZaysmkZHD6UtYZCRqeWFquZHHwUn2RDqF95mMgjLUNPLNGbspZgXjp",
  "key11": "Ay558JmfQ7vWm34kkhRbXjMu21dMq3BWbSznCEb8NMnwSyEiS3kLoJe1yhTMjYfohtLpqfwCpWSXAu5ojWUF3eG",
  "key12": "5fFe7A2qdBxAKo1bLeTtnASJjPb1sLi2CHR9kagmbWSmiUAxzPeimLhXmY7bSvWzsL7M67cQuEtw1gen73vsN3G5",
  "key13": "3qJGiMmJ8qh8X2qNcHYZXFXKpDRWTLTS59UdohKvLoud29tW85SWWkMtrS9D2Z5SYxpBquoMkTqiYSJJe4145yQe",
  "key14": "4s3Fduf5wXYwhjCbMoKx8KSsZTHvJojVSyEHnQQnyTUmoHjorTJQLYejRyThQi1z6ySudjQHmr5CJ5oHZxLeHN3v",
  "key15": "TyzfvfBJEWemRd9VdrQgdpvZ8JhjpbRrEFiVZnroqGkVTFj6Wz8BXMX6ai5YG2rCWBEJfXu8fjF1jzefktrpHZY",
  "key16": "9RwcHHLXBbsERXPKWSKrjfiJhmBX8WN6X8ypRPXaS4L5y9oTHDb2tepidjQMccn11Nyy5AWDj41UVxx3ZMSaPVF",
  "key17": "4Ypiy75ZzC1LTzxgRbdGtnbavS1143cAXkAiU71LUEzPb2nvz5EiUswSxLBvQjhkGkWjpwdbKoffErpejPGh6rz5",
  "key18": "TtDqFWUdjXjk2SFRvH4SjuEETDv91kJWiNSsyqgbErkCHG6qcgcPoPLCbqsCnbBJ6Xr5rM51m5MXbcjp5SoAi4h",
  "key19": "L3U14R5NgLW4qxc24bFveUwrRVQ8TwDxRJizPnvrWfw1Hwr96Dv1MPf55EvBKw6zHuG1H2VTXYnbeA7SbqzM9gR",
  "key20": "4vPcVwJASpyQ9CWJBwXsJHVMmuXcqnKtiv7vLtZdveva8SdH6UD32Z586YkRNsbpsoEHSx4dYKgrs6TtFHpzdra9",
  "key21": "65WpUKRHc2uSHmg2thX5sLSLxeiPhkBLyHGjkswYDU4rg8QSftDZrJab8yQ6Jp7srivGcbvm5dPS54JrsmczXdnU",
  "key22": "VfiMkMrAeXSoUBiXwtJwqhszrAr1zPUC4Ra3USYhkBcYa8BdkC3AgwnXaaqKJzf7SJoNRUWzxB7WmnzZbjSVHSw",
  "key23": "5Hpx48deGQzGDqGbN6VLg4n9gYDj8F27DLEx3vnNUeWtYfFsDbF6VSwv8c3fUT1VrACXjS7qcUh8SHUYNszTiUcH",
  "key24": "jYFmpnC7zRmoxdoaHs8ZtFgBQbxxUZ1rPcnPeCD8p71zFLquZDbc4MyUpjLbM4fAjRduzQ4WDJyvJFN3NaK9zfa",
  "key25": "4MxK3C9mNBqNPC9YY6eHQXxLEDDxtJezJ4B4LZc6YwU4ncnr9JTpZZ9nLsXaFUKYCaBkK2MBtKtHij7EuPszem44",
  "key26": "2XBL4mZ3hNuhxdFLapXAmuCntqXh3KiWPafSzM7dJLD9nroK1ZqJLtd2ZZYyjZAhtLEtfVaJoRsUfohNk68gwWgz",
  "key27": "2swZnFYhCg2wJWruTDvLSGjCBDTNLD6gKjSFZ2ws1pdNiQjYuiDLFnKwyz3mBr4NtDus6vzaJGZVAAqM55qGP7KA",
  "key28": "5XE2cAxyXKQUQEbDGBpv66T1BDysKFefMmiE3GunqSBA8ZDL41xbTYbr8heqimhih2EzxC86dJuME9PTQf1GiLuk",
  "key29": "2Py7CroJPyrW1Mnn3BtcDcXzAigZTtRCfD1SomWAm6Csbrf4SkdEUvbK9Fa6RHYKrqWaZEjvTBfPbSNJCVtZJ7eG",
  "key30": "4Mgxj7wTRb6jdJ8WPjYe4EE7i5QXp8zGzGqyxyDqH3ohpjTjJXLB2BoaWoRnczu3J5g9aKAhq4xpiCjJdVCfgpNV",
  "key31": "5BXUMSa8u3jiENSXf3PVuU2bKzGNFWrREYZw4GLEC73k1qJ19qBKpmBxXB2RvuiRse7B2sRu2F6qqwvGt1eyJxSm",
  "key32": "5hKkPo9HR19zLZTTh9YqvWrr9HX6twESAWC7zk8TvzRTYa7gkBJXc6hujHuhY3UBarUKvQYHSdqab7xc8SmPjVZL",
  "key33": "4KzvR5hu6XVRUmRQVC1hAtKxfqGp25BrN7xp8ro3TYi5WsBHLRmgRLcfAhnfmUs2Ao1ZPWB32Uddr5Zzrtq8Nbt2",
  "key34": "3HdvYYSeJ5yjj8tFtqYaBscUgdWzPaKL8kuAv3tpDz1Zrr3mRQGVsWPr8CxHzG5dRYy3Ta8tBD2FSmH7kxxHHaiR",
  "key35": "BF3S5P7eVE2AvG1BohfGwkTEhSjfztJYtG5dkXhZpU1s32dX3rgMHbRq68d5e4FaAT1negote11zLTdooNTwzN6",
  "key36": "52oYsdygquJinW6GpmjcRvLafHDyBc92wVgnVTYKjPz4eA5zoQqmHKE5sYM3RRzER13F47d9dqi8g1n5BzLbsCDV",
  "key37": "aCPoNh7Fy8meDzekZrjrYGmDQLtd2iurEVXhUswcbKfgJFKVKzEQe6LPNkEsJpXB8dpP6SZmv7n3vjSRBtA6zkU",
  "key38": "3d2JZEMtjBwhRdimCFS931s28ThjNQtsVFMNAceBqyojiNDDXGy2kCsRoxXe8jN1cbS87QqECcNMeeo67mSc4oNr",
  "key39": "4vg4t6Fh7pNJTSZoyVaLtik7GTN171CwVkAuZnuySS8mym5Bo2jwW7RZzZ6zk9v74bWzSjwCFNPav9jYrQmbMQNF",
  "key40": "4ueLSWwb4qEpntTrBCNuVS9DYxcqNAkGA6xtsTubD5yAoDnnnNMZ5uYdxqtqxtPbUaQsrbgFWTjwwTwjRAZHrFWr",
  "key41": "2ngCyPwvHvjh3d7qbL4wisjeHQY7zbe4mCKh1q3zdi5Ewg7WqhbPAv31EunzRpU5rBUs7hhDWtH36YarzahWZTL6",
  "key42": "3uCcRKwge6yC1UbF6r2VpSr2vXcb4bXUpvX7rLf8ZPuDS6rpxcDKhQV7BAkwstDPif5khgD16W6AjCvtvWewaVS2",
  "key43": "2Hg477aAJ3GPVk9EmTRn3GG37gZYey97KWc1eKSDWRGCj7isjM6a6yGpATzCGVENhzEYQfcGFACspdvhNQz9Zxky",
  "key44": "2bQSZCrLs9NH3n8DaZmrArVyUVdHCGv3xgw74S3Kyh285s86U31AaH2re25P8dyhBGYaUdVkLVrZeSX1BXVW1LR",
  "key45": "ynDiCnpsvSLTsp3oyb4m7JGenjsuzzNRF1qQLMq564EExRk56KrX8Pi5B2cuRotftWZBSqMW7aXxoMMfqjFV5nM",
  "key46": "2F4UME185WWqQSJZ5DrYCjTWCzoYU1MD3WPAdi2HgkbfFEK6iBcmDtAUR9u35trQ2FBk2ySVXxaUxMJLW6HKcbub",
  "key47": "2ugz7ZWqFhsampP7TzaLDkjCkrf5PdoR2tvCWeNPLuSHKes9SiYH9cYhFT9T8ZFNKVEpo6nVDzpC21WGRSobEH9E",
  "key48": "3Yt6EBnyX2sL5df6QRekh5w3bo1fCrmVDVaZKMt6M1obJ5hWUijWC81oTR8i6geot9uUj3RobDHjH7oH9ASkCraH"
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
