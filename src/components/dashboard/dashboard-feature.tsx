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
    "3uf9jxnZbKHK4Zz6GME1i8umn7CDNSmMT4AwwanQC5eGHX4xp3muRi1YP3RD5u1hStcq6vonXkyd8yiJ9Y1RSt8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cefFnMMMT1h84yLd2Kwxk9nHZ8jNMKst7QiystnQr8EzxeDpZFb75vGGReqCajxCemzD2CTE6zPCZhi725G6aB8",
  "key1": "54W9Mqh2jE6ddAqmNibb3oj639x94hpdmGwB4T9dbjt1z7jJqhvjHgPA7R17m1TbvhBkMhSF767izY2beAJnNPEu",
  "key2": "532YU95cQ2ihzPu5A3DBxWxaRF4Yv2BoRbnB88S5dxURwng9BR7TSBmBZDP4VfM1Tx8EAYv2qtjmvhK9LrqXr4z7",
  "key3": "Jo4AxqzVY2ktALL2BTKo3BmiUyMA642mTxoyk8bZuuJxZbVAnC8icdjqZZhgPNWnvBH5Lo12DLjzEJeZEDvntmj",
  "key4": "2huuV8vMg5tyiJcXobpuUKcp8wiYEH7fbnnoQ9KNaxUtmcSsVvhScuJtvE9wvc7zxx1zN1B1HD2KnbcmWcLAEV8J",
  "key5": "LEcGHYMUVdotg7dY91qytFUtD1iPESvJNm61bizYoGNzsCZUZ3BZ1Uoa7VGZUc9nr5BX8jtewcy5oVnpx5XAeMD",
  "key6": "33E2q9ZZx6e3vD6xZat8jkr91XhC9nchvfWEGNNH7avbFkNmxwSQ5eR7cedyy4Ka5vHekdtoHAKds4ZmjZS4iquJ",
  "key7": "45eEShxTVeE5ByZgPfhLXLqFvENnw95UpJe6zwuECm8dErGg3kTVn5ZifhDDr9PnHGssG3DTnzJZWdoyLDEwUmjk",
  "key8": "21B8CQUgprDpdrCxwsE2KxrusdvaGzFEkMKaFF9EacX3Hiqabyvn2VS6ghgu6DzAQG77hZqKrz6uPYgbB2pLnuac",
  "key9": "4heW1hRQH8nm21jLKHzfta3sSqjXNbD3fmVYoVDnfi52JCZ5A7s2zj4atyx9uXRYSXu9HoXaZe5UbuMYrLetnLhV",
  "key10": "2yF9aFC3N3naMob2D6DSFio6aQXP41KeiQMzpq2TCzeUH6rrsrz2mN38sJmVLbS96kSVfrDUqa8pqZKsPFVfkdNw",
  "key11": "5fJsrVZFT5ozLCPCXVeuX1hqokwYNnNMx8PmAgxKViSN7ozZ4w2hhpvh5XVmvQj7ghYnrtL31evfZQotCmKP6qz1",
  "key12": "2KC1phqFCVr5EHgGfJQjMmxkUgbmT41soEDpjwPpQcoqUP7fFYUCZRU7u3NiWD69NHtvGP18nocv6hwxPteNPsU7",
  "key13": "2hc4VSsYMzLVTcWUE5ESSB8599p6V4bTXbvrBDvq2wBTFbE1TMBb85QfNTHK1Hyjz1QCqoEDViNakiJS11tAR1cp",
  "key14": "3bbyMhiLJGWX7XtNqsSvvvtDz5yajGmcXN9DfTAoHMk1BzL9u5BsQRxY61BAPwSvoUncgMxkrjUN88KrtRpYLGdB",
  "key15": "4emq8f25VNRuXHd7ETCsTDVLRGyPDYf57hsoP86zUJF85jt3XK1bRsLpNEnNBmwWZwKk8g7NjqZL57pWPER8Gazi",
  "key16": "YXSFYAnHoPsmHGnRKTWhej2msTGs4BUS3VKTk6GsQuzfiv8z8ZBWQ2PMpDq2LUFfWovb2fMdbJaoEQsjw5CvBi3",
  "key17": "4Ld2SAwjtXFu9NQviDFxYQmHLJLwtsz223L145jGnMK8zoJAktishDZ6ba47XLD9KpxA9jbgGb5NZXuHKYfZxxuP",
  "key18": "38QVmeczPdUvAaajbrzrT7Hcxg7deuxjHXfpRCJHsmeyCa2KzLGq3GNczgyeuuWnQ5joPBNhewifAVzWSLRSyEpJ",
  "key19": "2GacmWnugqYCqx5BUUUrVXfZnHXtB9bubSNG3vWhn9HC9kvmiStdHWwTYSjuJ3psm7oAVrJkzx2ZRe8AndG3sEtC",
  "key20": "25RXcZDyJ8kC7NEvXqcQXu1HxCMXpLXhyzxGTeoGRQsZg4gtBTc8WNhFRcRQCbkbiZyiLNzzcbLD8ibkmgAnxoTr",
  "key21": "2UkydPCaDZDaT7QwCBxG4dmkghKgry8RKD1MRWYcsAQ5gfSn2vVnWz1Zx2yJvStj88yGwx1hezx4PXCmD28bqvKH",
  "key22": "qRtZEJQfwazsU1i2Cp1rQgSU4WbRkAG2pSPM9SYH6xcHs7eAyCEMHWygXRZBcHHrsDNbiLmtUbuiPWDzrjGYbXW",
  "key23": "2VaF2vjUEqBCbV7WV9fqsUQkZ5BdgyBg1aQcwnW5marWombcP4bSpRu7wxR1ZghSMoAbBGkKiSaNX29hTcfHkt39",
  "key24": "54zaKRaKQayrsNZUB3ZEuvn5HPqHXE3HMxiM8w8nhsYwcYcP4qyHZvMPaBzHWcgp32rog2p9gvir4ckjaovfuNtL",
  "key25": "47Apvc2dDcwRrw7ru4Hq8cPPvPgUKwYUH5N9NFZbuZJCi1nCnvnr1VoDT6uPxQhg1gz6SCJjgEesJ3yka44atf9g",
  "key26": "UtJ1RJc78JayVdGh6zV2j8TNJy2gcyhGYma6qzcSUsgzoSUyAvaGqPKPxmxHJKA2kDTen35Dpyjb5BecuXfvx8N",
  "key27": "3bYSfqCqPTSnR6FcFCre2Q62BbRpP4ch2dUJU2KfEf5gDphPbSSWjL1kRAA7L3NwStpTJTSMAQNzhn7CY6meiHw4",
  "key28": "34gkpVH7CPi8YzsGMjxorScM1h9XDNnfuumyRym2Np6NpqSJBgGus8n8yw2uh8bW4Rn8UEVwHYEJg3c9jebPUk65"
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
