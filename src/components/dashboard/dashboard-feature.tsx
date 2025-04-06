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
    "3V9S534UFG33oXKUnLuCQot7pjLkQoxBUWBMttrtinwA17FyFrMDWQAN6Nm7Nbdav6M7DrSC2DwFBrdspFCMbgsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNGVUTiqhfif4FkqJbT2JZoHvSGXC4vr8uRzsn5v8H4vsq6KWMX5su4kiysLwzVrFWPqxtTDJyVSa4RAKKZJ7MK",
  "key1": "4P6KXkKHwATXmEjbKgUPrdc9RxxWNt5G6zfLP9fxhqn9uHB6hzNNSvUMjeeQ9nYDhpamfFpc4rhayuz1owEc6Jid",
  "key2": "4hMq6xTVqWpeecD5kpGDu1UT9UwxiUb65n4f9xDsYrN8jhNqxaVWBKLFWpDCGgSorDUXfbi6m1a1ffzWPHnetYk5",
  "key3": "4cnshz1gCb6WEWt7F37zv5AWzVQMvXDC12n8TTxHoRKjcXTyMRycmWtsbMMGZHVCvzf4keQQBPw9Ki7amAi6RMGL",
  "key4": "7rHEKtRrL8saHvKMxNcgKxmcFJxyUMvxZ51Dqgy87624jYFRrjMdVbQe5ytu5bu4kpsbJxMFNpavRszai2cM4gJ",
  "key5": "42rK1TKcneLYvzMgZp21TJDfx1fmUa2ivJYtWZoQd7afsPBVZRBAviXDvkKHoNAmGNCi7QmibphLrZTm6vvGSB9B",
  "key6": "2iL5CpSC1qcDaZJQnfdTVABat5pYgauExgdeX9hhDVYb3vqVdPakKj7xHpyd6x4UmEJZR8EuKK1P2jdkTXQMACU4",
  "key7": "59ZC5htjcUiELqWhQahBj46vhbxpbMZ1Rdfj43W3AtVn7jwNVUW8DfYRgRyyQMBDw4tKUnEgWYDb4yqsf2s3BH9P",
  "key8": "2MiFptXmYTvAtUzzVaAXM383SdSzXrJ4U25Jwups2skZzNp8ZYBY4ErJ8YhP4hicDTPn5w4XPJNJ3vcARJkW9TjB",
  "key9": "5YCK6YLckhgoXyQ6wdugei33tDNLZoEXR4V8GwDXHM43okVnWvYz8V6mremQydSR9fc9i4nYLztPsHFNG4JqawdG",
  "key10": "3XMJ6a1TWjx8Z4cmYURUdxiie5PXcDvtsLgVNM96HLXLzBkonBMe4WPYAQ2AvWaha6bV86bkx1ivWhYp8juXRF2J",
  "key11": "5AhdLXEMevG6z5WKqEXezW4vLcMfseMmBH6yZ5AqiiMwukBZTGQ2qEhrU65jLFkqEFRD73487VxTTCF9JXqmXyiq",
  "key12": "5RLUKvuHz6HbzB9jXzgNytwTnRBPutDXMqd7CXe2NQWA9iQEVKdPedUSy35eqd4jou8vLgkksYu4vEQoSTxm5Scv",
  "key13": "2CUFcyzT5cebfNpL8Wviio2QRBpJET2oBxMQBbP1SXBTF9AJ4VhpxbdfjeHwzpoSek4JVQpYVqzV32sLqjnwq1xx",
  "key14": "3BmyZSLEp9V7hajkCKMQE3m1AFxpBiLn5RpFsN8vL1pE55qrZXJqjE2h4Mmb5qxLKnerPMk2ZjxNGyTQdjoogPyW",
  "key15": "2bd3m57jWAzeg3bcQznnkZdor6CZodPNdVbj7U5Gb8DuGumtJdXnfVF8BSQNuBg4JPMtukMZP1K8xBSGtDRtJ2HV",
  "key16": "5RzDZU25FvkbyrhARcFbn91pWZGXsGkhwS5eEtV2WnW89QvvXzrTpobYrqgyQq8xNTvayCaB3StCMLq38bxfDXp8",
  "key17": "4UmLGJYpCgyBHunS44DCub5Eus3WLykhdiNTaBCdVvEfs3fsyPWi1y4DDYYYLVT62opEoM3QzMBsuNfhEZmyxRUa",
  "key18": "nxrF9bm2ynjgviyxrDWgvNLbdwHnFNvxoupdbjxZx3NHQrPHWR2bHKNQxixurHfbZRyFXYqZnuWSLYNHDBhyQ6G",
  "key19": "317Rwy4igbURivNKyapAvY1Ve1kZMYCKJHKDJwCkfCmzmqJXsbMBa8ba6wfUsD7L3xuLvsaWMo9cETFsMsADgruC",
  "key20": "ibqZretDm5qYRP3fKN3STPjtWJTvR6dSg4do8mjde3rag4rs81wSpfPJL8oinhmxoKAUaQwgcvE7LMrjagtkZCG",
  "key21": "3YoMhuJquMhwwU715d4d6TZgE3x3tAY3mWKhmRzsckwf4ZrUcicoT6pLudd5nDR7L2drSW6gwPQjJsF5xUZ9LhzM",
  "key22": "4EgUnFjg3HWA9x9duWJpmqPpbTgbeJHNdBbAdR4GiXEzc84oVKVk5UE5YZXRQP9A5CRrSS1a5FtxEBbHWeSM3LEh",
  "key23": "67o1Z9NXZm6MiR6r8pxT4FiFd1bhQ7BUbPwD6Qp9K3jG9CX7ST9orvZahN4cnb6w9tG86jB4MGoThoT527hCFaho",
  "key24": "4C3mqG1KgysYj4919fE5ynHY31keosyG8hbMNYPJys5XKPZteNwH86wEUiDkoXbujpa8jTi7jt4pF9DrSUqZvWee",
  "key25": "5Qo6KnK9LfpgYaLG3FauUZXALGR2Ky9Y29Dz5bvQRBJ2EkKorwNf9ssjGNBDt66bkPEtbTZ3r6RagTst617quUpK",
  "key26": "3RxVwW11nvDaj5X6rCvAaSv1pThnP1httr95JdVv9rRfo6zzuvGrQ6Q8wSzFd8b3HkMBfG2yu3sBHduGSaE14V1",
  "key27": "6jCvNtaoWPCiP6NxKvdqxJmKKoWbpE59BKYiXuPWCyx722qqgQsdDqVLWN82EWFcEs1tyfqyy46X7wQEBRk9UmM",
  "key28": "5T6hxmY1DkeLggwPWNi5Uai7Zqs6YGUanmtSrXWKnSXXMWGpB26YM5ywojdQBP9gfLAn5zNpBYnovzoWutcrBRR8",
  "key29": "2t1h1fxGSKyLPsc5qUQQzBJEL1acwdG3diiN3nppecXUruWFAy2qAk3mFPSyuQgcCD4ztTzPR77G7BVeCgHcWyCA",
  "key30": "25LRWn6ZPLTNuccLTNtoigrVWdjNSkkNFaLrCtnaauBnhTbWZ1EevPJ6bpwJ8hoCXnc1263DJfBTsihoLV3uarkN",
  "key31": "5oeHEVQBRkcjtWK1B6CviAGdQpVumoBoXWoFyhcx5x5wBsjxTM7BvhgNyWm79AnxMjjE3bXDh9ynqkkzptsJskwc",
  "key32": "5tyRvtV8srkJ8VewzjmC2bSUxqmHsv871whKYbwfQhBaaf7gbwYoVBZtWhsb28Rhgxq2aYRniqywwzMJ8HEKEeD9",
  "key33": "4RUAGHt3yQYj3wWcoREfaPyYDPsdK38tRjSXmnbzEvAdwMGoPvqQuGqQo7tsVBD3CdVXz1hdX8u55RUJpgXghWCX",
  "key34": "MAfMbBaPZEC1v78WhbHFVzS5LYoSREFSUbnGwLHTPUYuPcWm3JuB93goxfLPP96ksjQq2sUawb7uVkCs6QFBexX",
  "key35": "4YfiXhxiHJwhmC7YGGUrVjgiG2i27BPwQe7wZDqzK6d38ooxqzxeo33Y9JGKteA3EEPWX9DWSGGAsbiRyCv2oBN8"
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
