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
    "32WqsF1meKbSgpW5BZGvHmSKFtpCjxRVZ4YheH2ijVEexxH9k9txahLRTrSDp5yS4vhojMp6SZ1WBLqcKmJA7v1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611ASAyweaM7L16qwmZMr8tKdUMHvhpkGCFNSg6TxjVnRnYgEL7dV94mhFUn177EWxgmf7zmGynoD14XF3VrVcvm",
  "key1": "YZrBV9TVvNpeHJtddqd7KAD1V25bqwaixCbyo3Xh5dKxxkKofnhJ1eH1z92dxsVuSGfrKGrhpXSUTBC3qZYjuS8",
  "key2": "3rA2jsc7AYoYbZMBpv3oHJdoC41JFNkJDM5i1Pv1AiFaB9W6hXUj1cz72uQ2fMQBut8nCJJLi75HU2pKQk14obTc",
  "key3": "29e9NQk68T22N3pd5ETiLHMBFULsZTfq9w3cPxPa9NySRErLnhe4mE7LX67Xo16bctz7FwkDh9j5qUcdkpSYEY2R",
  "key4": "3Z74Khuwy6yBUBmk49xGrZF7CPztJfh5xmbcfYjHHcmGDfGdWME281EaXpKvWXFbRMUeJejkaeJyqF6C2mcm5tzi",
  "key5": "XZHhwitk2MYsq7NhAsqdz3F2v4iZxwyVpCZC5v6UY6USPMKb1joDSA6pQ9aLXu9KXTWL3AkKpZSN4byGCigsmAL",
  "key6": "4eEM9xvDUzuLz1E5mv3BF9PNotJZ9hVFHTn14AxQs9VGnGzyc1uGUZBnSfWu3mT3vjK3BdUkHR6P3HbRj5HtLqwc",
  "key7": "5sktnBqEB2TPJBoyJgvSSjq5UpKgoxHQLPbWBtd5QC1wn7z8SZGo7M9UMWsPJKSr3MhXgsW5qUXiqaaCUa7ZyJQM",
  "key8": "5rWTATHVyRW8Dqe2gohc6VobWKHHnupGMgoeXuVqgcgNBLvd8xHiBq3emQwgr7LJC5he9B7kk3HH2binFcKEHdiE",
  "key9": "5wa3AEB5Kd3ozkFyaSug8G7UKFEHCc92HWWEXaBiVuPZTkV6KwotgyisBrtmaKSZphBq5chegvMAy5DRvNRmcA3B",
  "key10": "4YUn8jabuQxhqDbzriMSnEFt64TX2Q97J8rHGrsN7jxGj9qiMhknypoMskycNXkL8nRwZuuVFRJhaxpDKVgwTWwJ",
  "key11": "1NpFkZR5GTx1WhK1HttkcTgL6h3EMbKxG3ngsu24npwPF2xkwMgKhN9rHXdGaDRimMezkbwqJpUcAeMpiQnmBHx",
  "key12": "5KnMKtCWwn7x26VpW3kUYxsfgMqd6s2ixX6Ak37DadycCUS6R2TEKiv2QyYNWf6nNX1mSy9BkwtJZCKYnpfyW4uP",
  "key13": "3zmJtXfq1fTwQ5DkQVbLXkXVgCSwVx8k2YGvTuwcdfryeNQMh2xf1JEjtKB5nWpp5z4ED6hkd3Sb3tRiCuXEBdsH",
  "key14": "9Zx1jbG1DLiTCt8x1Z2JnRygvMLrT2BhHSeWQxnRyWUgiPr1Zc7jfgkqAc9ShjqzAs97eJgEPwS9pn8Q1g4qeX7",
  "key15": "VpCruJyZTUcxTRn88nnBtyhSdirbTutfBoNUzBZr8KkbLCBZnnDNWJGzttnzwdWVDbMKRXzxJjDxkVgKb6G3Jsb",
  "key16": "2LRCDM5j71JFyootgjQCFMPHq6xj8KwoiKK5dkhi7LnDv5FDEghy8tsBQDrg29LAkrNZ9ay8L7Q6LTiET7rxDjSe",
  "key17": "5HLyoL2ZZmLTkGoyRknQHAhuKq7J4DdsAuZm4ZfX332QueeYaxT1BY1NmYKHaJ3eRdX79ntiYGMxici2y4Drbzjz",
  "key18": "5SZgCnCs2JJDPk6UsgfaoA4TTxpLCKx8Lj8cFN1KXJ6N4xn1QAS7xHmFiCZykXotu9p4Ti29gJijXcw4zuFmo72S",
  "key19": "5fTfvXcPLCseSngayv5YiNpo1vj3VFQ8VYBrpQhvNZfJbZ98Rk6ZZEu5ajMQ3btNCy72msErf9gDcWoYQXvS9MwA",
  "key20": "2GzB6ZiJfjAX5FPHAMiUPqLzFox8vKagmpCXzJ4CqYFU4PzZ3B3HXdtumoQAPaAMxKjuTyG32rWvWweRkoemRQVX",
  "key21": "5MDkHYAcfeEdp55sVGevySSCopLJpPTmDP5htH1PJFpYu5hqY3Hrk4KTDw55VHnFSmZGtu4k2UfgLSjrHX3dCEn9",
  "key22": "ADv9Kg1wJHAVAT7QzxYhGJb1bHgmv3dfQUuTiE4i145aJVdvbqeJNYu7i2xMy7Et9mC1LDYPpdYsXEye3EoXsS5",
  "key23": "4Xvx1NXDB9d3i3VcqimsadZeR952HCDzRLD9SNTNDWEm9PRT8ZWMQxucpF4AEgVnzbN98oj7b5CYc2NK6StT4e4Y",
  "key24": "4zRrLqf22wquuj1uHa4EwT4K7i8gab4PFJmoBtyTyR8e7NB4ZSRsSN6t6EkodomHD6K1CtPHFuc1Czg5jfEdnJ65",
  "key25": "2pBjPxREb7u5jHYBTi7R6Z1oKjRfWh7EuVN8QTFPAN7andjJkzJKWvMo13ZYNEqRvZd1gb2Ev59Ysabn5Tot4Rti",
  "key26": "2X7ZFpu6nMb1AJSxTTXhcAaVgY1g85gbzb8rpFtGTfKyGN1NTXStsreYi9jXBXRc2ygpMLMi3KiW3KRNsk4jRdKc",
  "key27": "WJakXTaGRSLWFsF3LRcBXPgTwjNDpJdV7k6bX48p6mPAo9Nmuc4A6K7LyTT5WN9uSTz2NpUUS472mwZQs5Rv28r",
  "key28": "5jPAkoP9FG32nYda4MYPcokbUKJ9C8WbFdpTcrtPYK719htndwvZDzxryWgF7t5n946Cf8RZFDjD3oJGryXZWLmV",
  "key29": "4wuVsS9Gdy9ePndq3Ssc3rmgzFfbG1AJfDA3AanwoKrfVJhUmXKWW1L2RZ49bk5QQ3VWPMqSFP6dTDHf8Gn8qoJw",
  "key30": "4vMaHpgMkqVY8ay6zCDARm93GrkZwgPtMHdbyFRnnMJgT82CQrrAmWS9msTwv9xiWszP6LD2NPbjYhEw3TwyWbud",
  "key31": "2agfsqVKnnKW7V8ESFyhpd1SBRCmaybYbam54dwfqcmr4mCymTmVqbHmjgzTc7mNnfgoE1qABu2iZ7kN5s6VHWsv",
  "key32": "4zoS2K9Lb57axjqb9Sx8oVQ4xKLzNxEdtrKJyPHPm1x3P4QdNTWd68qx9rqhF9cznYEBXvR9g27sP75vVBMdqr4d",
  "key33": "4PTtxuvNwwsh6yXW2uB3BLqva3UAumMZco4n5LPgRfhz77fLpq66ayASKmeij33GrogTCa6zKF4oY6G7bvZeucUr",
  "key34": "23heo6cwP3CvT3oxmTTqh2s6UkmdFW4N3ednrdZ7yHrQb4yHJmBs8oM45BkuJo6LWUtxJqPmvJTEwTH1SkyiZbfW",
  "key35": "XH5kr38J8guNfRRJW9kvapWuyEMbe3bBUvApVR4vig3sKdwjjpaUkv7Bq9dLrACRgfHLW247TfSuXyAUMe46YBW",
  "key36": "4S8Yjb7rmbwk74QZXLJr5UasZv13k7qBSNo6rAuTzCpEmXByWHa4HeurAxNsnJPsUy7ydYMTZz2hZJHahxTQ3v2v",
  "key37": "38A77dcGEZBnnh1JiuBgdKedPJu1rjSvXhfy3XNiJDCzAjYxkzMt7FZHsxBPFDDfha72vrVXAdrUkVdAH8MReG5B",
  "key38": "5fCLhDdQ7JSRukrKiLowgeJwAuD2cznnsKtEeqmSFHajP5ebm7DQ1gJfpxmGWpuMT9uJoezc9U43k6atr5Lwb1PL",
  "key39": "1dXAngneENxUvnDktoYhnERbbc9fRwkFtUDfFmifXjMGNRY17fZsqoeXhLBYVuRYTbMbnFyui44GMpc1F5vx3eA",
  "key40": "rL1ZsbsGkBmZqS8ACBom5cfgG9N6Sph1CSSJR3xVRcgdpYfD2tN3CmCs2z9L7zRbfCnwf5LSEkmXwLUJuu4pffB",
  "key41": "4DHSnEspcg4esdNc3QjoYkJvjQmGzURja3rDFjK1z3W8qznN3UZ7Yw4uSZSd5c6UdmgAobyfaiULc5g1dnm61edm",
  "key42": "4Stfuk7kCNCAPdfow6Wc64gz5Cz4UCCzdjtnfb9H1au4F62C5kKm4kgjWZqzRgQ62HWWPcnLAbakrZpZitcJy1pv",
  "key43": "FZgE7hTnLhTEmNyujAseALWxe9WX8wYjnpr9Khhq9BhB3riQMZu3CqLYgBjxJxFSr4rD8cwWp4M3WapodugFBuX",
  "key44": "3ctY3fsFMJRByKR9nVP5jjcdPLSD4LzYwLi1u9fjJ1WR6d5ZWPnZ4736wTMuYBWzkJKsYF2Mxf1wF9oszfE8zH2m"
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
