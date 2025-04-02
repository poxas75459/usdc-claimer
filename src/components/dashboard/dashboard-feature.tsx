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
    "4TYvsoSxwrcdZqAj4SGG975RHac3oXcBJ4nucqNxyfGPnUKPfjpNFVXKW6sNLNRV94Snedb9NURsTBksCPJoePef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4L4CHiLnJtmz4PQGhjXHv8Ph4gsAVnWQ8inAzLRhY5jGcPk43Ewu9KvUgrzHBcZ6LawKNHRVhCJ55GMoko6L5j",
  "key1": "4R7dPm57631KxRxQGZKsd6N2dSwQFpA2uczojWkSq8Hn1yHqLZd9SvDZUVehCuskPbxgH9bQNue4EkygtdWTQzYK",
  "key2": "2V6j6tKE3bB4WMN9wpvTdx8JUC5zS23KkT3HUFGgggmvbB8amPMDtMVH7U7B7DS1iCfmFNQQNdi5aUZJjRD5fHkG",
  "key3": "Tcy4r7eKVdRECniitiSFAZw3rUrHjk7VJpjVMYurhihaSMiEvUitEhacknzQkJRu7WomD1E1yVWUjBTVabdd4un",
  "key4": "4jaWr2QQgNaw4HtsjF5H3UxBVY7eRkBCn2dRtKyAWAEALzuPW9BbfXfNPRNCoadQuGnAwg3R58qgwHZmxGYrfwqC",
  "key5": "NRZZjVq88Nc6PxSmvTi3zHBYMy6ThvEsjufKCW4nfZaanshgz5giyeTsA21DM6wGabsa2f7JA18Ebhq5xmEa6sj",
  "key6": "5PkPVBHQdGH5QU2prv8hcLzKRtmU1eS5Rbpk7TX3YRmNYA5acosaTkmtrYxakb84BzrFKajMbYidJ4QvPkdo82Y4",
  "key7": "2y5YTUezirm9BtTyPHWsZDqDX1TLmX8LAQWWgP3t1Ye57T9mYuoQRX8kGr9qAFji1WeM8QHuEHsnwYSooT6kUEY9",
  "key8": "4RoGHKQqQJdSTp1NW9Cr1hqd4R1jc8cLjMEpnBASbH9v5JTuq5moAuJep4eGjYV9BxgKZVj5fSQxDJFu3bZNEqup",
  "key9": "2YxuyhDiczZnhqfy6fUfGTbwXd3xdoDtysu4aXLv6NBeLNJenofx7xpTu8vGLsvHQfSS7RH4estU3fRRN7s5SAPS",
  "key10": "24fJeX7xew65nLSe4mDUPa65SeSSq7gfKZ5KKg3dMRwGpqL2xD6VJCnnvjuACuuZfrpG4Yad9XiBWaARFw14p8Rz",
  "key11": "5sGnAgCG94boqEeA8zmV4w8x4MByjwipYfQuadWhzqwMVqY7ja9rnuJnwjBCbG9KH8Hfjug5KpRxzQaWZHruzkDs",
  "key12": "2kFsasoLkvz7XQVrsD4XaQKwWcN8adzUuSNQp2NnVq4ZYMbwAbiVfCArAyRdizhdL2goA8aTFtWZcsJs8d33Fg31",
  "key13": "5Ljc6SkZ8zFbnpdBkZty9wNEQgzwua4HMt8ctRNqeDqJfTPD38XQ1iqA22Dr9D6HraJ2TL4hziREa2TGhvKfJPkA",
  "key14": "kuiqRNZEDotSNAoDkNaQcCbg5f1b841x6U1H6JuDvL6EzrapzFxx3c2Mi2M6uMPctsinrxPQBTEK1v2muY3t6NP",
  "key15": "2LzsNPkFKvCtoFFPPV8EeCce1vjKC26WvQdCazNxjCuUubTFAQkqegE9qUvN4S3mhYHGK8M7h3NZpFSqEtxNifQe",
  "key16": "3cGg8rpQV3UFuSLj4WvdEiLSfchvkVpkrLif2cyrsTTHo9fgoAnmzJ7o9GMLvpuARfxbv18hExtZXzcSyg4REuUb",
  "key17": "4AaEfy4yVYWmFxoute5poozsM1x5MuQmCfX4H5vwfgJ442sPVedytJTjv1U3Bx4rAN79YeVr5c49xY97U1DBYKJZ",
  "key18": "55o5eBQZi8aF617ZBjx9UQoXf1PQHCykBKJdUXFcUScnZixPX5bPgSpE1VUwEqPAhsbDB9pgRuqSy9qCU9okz65i",
  "key19": "3i5YDZs2d7KCFMsURx68rYxuASaGVJftXZCPVv6aArtyM2k6YG9CWui9jp7zXMj1h6hXiS8Z3ippxRZAHWQ7oeos",
  "key20": "y1pYA97EDADJVNu4R4R31YnGyjwuSVWQktcxtiiA3pEsgxVJDhDYv92FatLkRfcWWoF9iy8tYrXzPXQMRm8DhyD",
  "key21": "3zwgA912vfBcjhr5PvfCsehw87Ur6hivv7mbMXunM6GV8LAxn4v8MMF5PQyNayMrMqqwrsFAzqC2gH2VSU758ymx",
  "key22": "3vi9VZYW3qUXKqDScHDG1ZHQNpiR1jDyfVrnL2n4itfkkeLvuf4GgVHg9xWXXgPrUvafYq33f68nDEmzAtjxep3s",
  "key23": "56LsuWfb2WquwnTikwvCg4kRY2aimkSZehyuEHgGjQ52aw1VUhLyxaZ8UVegii3it4htrQYfpCshYPG98DkR5Tkv",
  "key24": "5XR1whQ475HQZVodvKyU3ejMaXkXWswbeqNuDi2YmY1gkN3rSEBiWihHZhYordAhRD76ix8LLZS75RTf4aGsLxQh",
  "key25": "5mqiTxR2VA2YVHRbv8oWDjaaXEkzA3NUE9pBuy8U8aZpNpucFENpkNrk66mGTirsRgzUC2to7oC3RDQXArhm1QAV",
  "key26": "67R7B5uz6ZXRNm1xRvhKZq1neNvDxtbueZUzn6rbsFEAQg4WGhizBE7egjM1Fe3jbkKe6MSKJCAvPNLB89AcU9aT",
  "key27": "67NEuFgjeVeYH7Z9ymtPCVqpaVQwcGJXWdE8nRDDj8xBPzz5ARbUqAtB6VcctLRLK2YH2UUzZd4XgoM2tYMBfZzh",
  "key28": "72Jn553MBRXPpJ9oYESpWgrMp6mSnoNMVFro92W75WnDK8TBME54CS5rDwKR9X4w914KgJSqGZ9tzdJMEgqw2bV",
  "key29": "4B4L6Mi9HM2HGy4b4z6sThRhQQSEzuoN8YjsdzAYGySHxuRuNGBEdf1Zuh9P6StDVc3CVPnEdAjXPjfDupPRAVGE",
  "key30": "55biDgU5VkMCjau1scCoW4zZC93ZMZDK1gCicoERm1ePHQuAfV5ZGgy2TyBpVPLL6WSSKmTdHRAyACV37YFmwD53",
  "key31": "2S1sSX2YRoMAcfLvZd9zUXspPc1jyYFfW41DPuriWM1x9Kbc7fmofRhSd81qrExRoZqCcTLze9SDbhh2Dc7zZYpK",
  "key32": "3BEcoYEq4S5q4AZMhLjqqqr95iGZa7jgfxbC1QQPRS8d9sK5RVV6NB98797chPf8xW7JXXKDVh3Xtk26rcJJKKFM",
  "key33": "4XbwSt1KfVqTmYbPeAe5maEWreAje5P6Hmcf7fqFVooKmNqyuLxjeHuW7eVJajnFVvz55Xbw2CCro5u4WBWNR8J6",
  "key34": "2MVypyFboDbbfwr6STg2zaHVTFc6D7V6xs6d1tT3b2x5Ty2zw7Up1U23ADy5AFa4A7Acy6Z6YqzysQphwMNHHJW9",
  "key35": "3qw3Nhf1hAkm499pJdPAa4Dq67WNRBkeCwsiRuMD2dMBWGk75ZocmC66LLELx39R9sLrq9iN5Ej6MvrTLx8niuJU",
  "key36": "5hKJgzqqhvTgcG1a69gnP1337KAtLjnTs4adLQscsZLFLvYSYysFQSH9yXzAnQmQoFJzsrtNei88bAJvg59Qi7oZ",
  "key37": "3nUsWgFMFk3DC2cCCm4vjh8JyruWy1nTuwHTMX5Xwg9424hqignB4atFHpLwVoGPwjgddJbDpSnYenxpT6e6FWWK",
  "key38": "4xP94FiKpdhitrFxQQsjr8igoxKxfm5wJoJe4d8r9WMF5XbyXtup6c59vpP3GHz4WwKJ1v49vSXSLhfM2294L9A9",
  "key39": "2r45sZQLMd36JwfybPLX2UUaFCNMrFWXa5evaaaGpZPWHjg2wuHDTgqhtczgdR9jgzCvBWpnjvDeW5fpQRRmXpd6"
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
