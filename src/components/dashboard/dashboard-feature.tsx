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
    "4LwQSyXmqLP6qDefNQfHrwpv1yuGNQ8PZ8JW3thdRdwq9K6vYuatzqRBJWtANyM6RAiQJmUQ6WXWt4BsQxVb2XLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TDiwcpgB3qMkGNuygEQSRSdELqybwAbmWqUFALbvHyPSMLqjxgUdQWqScwTiCHdaKTLRJdcXTaiWG31eziCUU1y",
  "key1": "QgMYffb23HoLGrBf5s4wRF8HESf9UGHJuYy5WWCSu287v12epv9kT5kqDPptMEic2RfjpsR33pDQyZyLN3bf55Z",
  "key2": "3CJnKHJNtAqsTLSadtHTZAoF2JCCE6LNS1VJva1iwQtgXwgeUFihDRBrTShCvL3vjGZujUGEA41qMTdggcMhXUwC",
  "key3": "3NLCxAiuzgHqevf8NVVDeH38yRmSwEzGGjLdoPPVmJSL1ZccU1SWq8FpGJ9kaA3Xf7Jdw1jgSY4DwKvY8FnKAQi5",
  "key4": "QcpDxmVv5yA8gGWQHEp4NZuU9LDrEzf8SwUGjzNDZfHX6jfzz6e5rVYjYBGsQ1wJCu8cyavtDXeSNumioVXagYj",
  "key5": "54DJqMt2E9Wr3mCVx417arGwBez1tmDAfdKhp7ApsaqL1Kh2DDdFboQbWfL6dpRPYxwFHLmN16q3fYN5PnuAYuWH",
  "key6": "3HySge9UxCVdpwu7vo613tGtjvjobGxMW9R4mJ9Js5drWnGsps5RaRNDJhtqXgCDq6UkJeNoKyHPB5pr7SdDBV7P",
  "key7": "sJbHGeZSLSXTEQng2L5C78kCSEqqbQwCK6U5WuGwpGBZuidtkFGQXQSWjDChbDJXoYrS33bPks3vYj1RP6eApC1",
  "key8": "4KkisLRT7Z761vzHsWRiNts21wxM3qyzkJZpZEhDRs5eo6WLHTtPJLSimfLjpQx3sfPjjsikKGMhU1BV7aWp2e18",
  "key9": "9CkqPPscVwe7Dmgp7umkzGLwWRxRsozZJeZHH5SkTRH7LZTKepUyZJHhmRM4BGM6qFyn4LJWcLnjdugtdp41M4Q",
  "key10": "4EpH665PqafR3axsjToYxx3yrcJgB7KFdUHHGZiyTm8p7SKRvkGEuwLkAjgYbVYsdN69EEt6ZVtBKDvoZUF4iMK3",
  "key11": "dfDG4FSPTb1CmnUcY1uReEg5XoXGqk9cLfEQ9tqLduXanbCEbEP27hNcZWPSc4FaWP1EU4PcLva2DHUN7ZdiEsf",
  "key12": "3ZrznBUmDnj8wDygwgHBuTpxGZTtKMfRCh3KukMTG8Q2gGSa2yoWBocKjNnxVSdDhCyzqDALAUcnyXgR4WNzTU5B",
  "key13": "4LaNE21cGJDHEKve3xo4JaKogHvG6wsK5SvdMZxPZqzfepLJwydEsUXcDJKLxKNjY9hfvtqf1Uno81Ps1ApRWNRr",
  "key14": "dxiQm5zW3XUjjXUVbZaNMn1kmVjpijpG781BohJddiRhhDWuKzytjzEhFwGrezywsHAroQp1aF8kmi6CSWYmiN2",
  "key15": "u2jh5YQw34RPqR9eZRgdzJCYcRCo58o6JRJryL3uLzA3Em3gFKrWis3n8yWN75Sy7KQ3xRtPKXoT5hvXRhn5Yug",
  "key16": "3pqevYct2umF9EFwHxGoG7fxwvwKC5XJEJhGghRYhLUgpqXNT2bkrqcBozL6CsQF3CGnQJLz5hPzZeqaEnCorh5j",
  "key17": "4Q1MQD3SymcoSA9snpgwWghHDyaw23bgWmnVAtxQR1e4w9JUFzYvGFzR3LvcLo376msbvy9kTWaAkrFLFSBiqE1b",
  "key18": "2CvYGs6hC54Q6VUoRwhL7v8axMaDCqnJ3ThtL1pPXetYBY5kB921Qrvy9ZfeVJQW9fzvUipykXaExn1Qrm3cpsg1",
  "key19": "4MTjxXMWX19fa4qAV9Hry5tgjBuNSysdMdmFU2YG9JzoLyKDYg3iymefAisdthFgnJkAKmABEYHF7fU3WgfuS57R",
  "key20": "vWcCjboXFT1Wz9aUrsEePTCWbVo7LqyoqmM9TUj7JvFwe7HC6Sjs9tBEJeMB98dgXpcXaTTwQu4JnMBcBy6Phhp",
  "key21": "2mAUjnya5W3zGLJDo72FbLgbKRpnG1J2ju5sphsQRzB1eyKMvSMaTPhPnFmeZNHveDpNbgDqqH9dmHZVFMNN4C3V",
  "key22": "5RvoPqXMBGqUbxYxTracPiXGDCeZxtp2iGbtJkqbJtGacWFgiCpuqdMYizpkbumPMah1sfCDux7QSNjEibHXCnK7",
  "key23": "4PPjcvUbVt7dxpM2AsXA3QDQDUrbuRpsGBkXxp1zmNeAeDu3vT9LRn5pGrouucF2xz628aS5emS4yMVwMQsGWuux",
  "key24": "3xfU47udJwmrECAgmUEGhB1SmcoMWXJpMpX1eqHDpvqqCU2VYxb2kFwdY9PhjSmiUkxpAYKogyMh1NxmYGDLQ9A4",
  "key25": "Zy2f6eeBFy7fHSJ8TTV9aX61YtBPHqqd6TdDJKhTUHj1fzL3KVm3UxG9igDdhX3XeTULTXq5t65qgDyGY5bUPdf",
  "key26": "7CB5dozXuCN9TANuiCTRUZjoeX5kAy9eyThhP6wKMkig4VDARrxZEWPgu6dkVrpUK92FpMCY3Tr8k51DszFqQF6",
  "key27": "2BmSzABryCAd12WWC6GDSK2iriVF59VfmNmnPgPWHFHg4R7FBbC62QYTz4bT19ndWzDzuqWSg5xbXz91YJ1czoPB"
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
