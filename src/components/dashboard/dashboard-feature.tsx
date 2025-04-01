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
    "3T6Pt4ofbMMn17MbNUJopWWk6RrWPpN3x9BqYRSL7md2HDNVvH8SJ4gvUKQW2g8WN8qJmxBcdfSrqHsT5zZXqSiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAarhAJGKxuW5XMvPufycRMGHLMczRBbngo1t9wHNhyFA4yRY4d79hGwYTr4yAMxyR1EUQKMVoejkzz786XnG6C",
  "key1": "5hnurBCxD785gZs9mkEJQdrFDhDeM4BZVeww79meNyNQnJaDXjFXQZRzsscGa4AiegCuTzpuQvG1ksESAr4MrHnD",
  "key2": "2apTyKo9bNw9RiTt4Yp9tH37GTabBFhL6QQhA1eNneCeLsX9ZcLWKfzRp5odvpL61DqYpQKSTRys3zsa77DNL7m5",
  "key3": "4ZjCoyVL3vmBZTPFHxxvxNLB6SVC8CN4wMoi79HefY96p998vrnQJiAmWotCVP4WQPRD1xNi26VDArxKsqhrNATg",
  "key4": "RKvqqDSxk4bXYEfjxPqtL2yMMDp34kUnXubxGqCqETW79fHzZ76acPbWw1AQ4bnse3QYq9qzYneE4fq6utTZseN",
  "key5": "5VviDhUEMNeGS6EXivTRB4i7mdzU5aKpKeFWVPjCub5NUtKUJ319MiuMKRPP9PXsdrJZc1HmU5jThfz977n2sBSV",
  "key6": "FiSXA1sxBKZbEfokKJBcJaJq9b3GzCJHxswZTMUq7AaUJyePpu933snJtiUpkAwwixeqjzqccM1KWDAD3unacyX",
  "key7": "2pLFDu1yeag5mnr5UaCGMPjoZG8fXPnRCMxMtnYygY3wmegGepETRunwYzY4Ujm4iTfXkoabFuiYKtJDqR1u4bk3",
  "key8": "5v59W8bZryGbiGHfsH1nUUcSDnjd7e412s6FTFUV162YiCqTmraaccYMLyCKHGmdcAfsAhgxqMPQ4x6ymoUi3jPn",
  "key9": "59k2h5CUbvFScXDJzcpARAMyKEo7xYqhEfSFjSyeHjsuTer5NqVYPG1JG7hS1JHvS4Rxh6S5wQEbbuhDKQ2Khs4x",
  "key10": "3z6CGhigTWLhB6qDjZ5oqHbdXcbtmAuanwHM8gXsJPPeX7CuVbJJvvhowBnEDd2eX8bBeVeYwdwA1fEppecCQ3cK",
  "key11": "5N8hG4jk16Tx8K48ZewUnc93FiNcvMWMwbH8PN4iAa8Sq26R3KoM6nSvbKcF6hRpDUQvgzMjTbCkpHkuCU82C5yi",
  "key12": "gUgopBsjvqZ2aiU7P3xZh1XTxRB2wv47QR25QwJHHLgV297gXAmHKUZF6kzoJSEMFhjGFcsDJGU1U6Kb6ZCu7N5",
  "key13": "49o9Z8evgZTHsatFt28gL5ry7nDvvJMaRLuz7hregmqxcncU13bgc9RKQbE1kMq8HNk7ZUu9q3diPxB7uwfwgAWM",
  "key14": "3vQku615858Gfostx6LzpGKLeNrQSJcDcuES11V1D7fAUTPnQ629uKFi4reT8ZEZW6GnR7n7GF1EmMUofjsMgQbS",
  "key15": "KxBEYr76XdjBbNV72kY7sSWPdwLwokns65o7yrriBT3W5xv4fwkVsk87GGopf2R4Jhtv8dzRe7koqoXb4QRsXKy",
  "key16": "5hQT6ycjAn1oSD4Be5ZAR29CBQEzAVYEvZrSvjEZSAWYsWyeFJ5pcDB9GMeZSWGbjKb5HCUBktYKPpp8WnnDYAMT",
  "key17": "3mHXY2PGYzPKkom9cZCNZMFmMXfBNSL25trciSzgTXcWWakvcKaatdn29gVgLku6fuqB1RmimNebRgJaiBToEKWt",
  "key18": "2SssxDKm5oHLiVTi3D2AzM3JQseUzd2VTgm4yLreQKagTHWZzEfjHQPzcFb9n1kc88sQhYQ8oCkMXVPapQQPWWpD",
  "key19": "61HDoK1p1WWo8Z6kUwZ4AdauW1uKUGGxucRkumxfqMtrMrc9J6NtRJx5h5zT3BQhweQRiSacCdythcGYYcUHyx8T",
  "key20": "632BzqyQWXHPjXETcDogyaiBSUjdyoK212VwVHJu1KwsRJEjkDRVdWi2sFKG4gg1SHYarygDQRhLi1FbEaGhwdHV",
  "key21": "2izsoPm1xQhq7AN5TyNzWqfkCc4sPivVzWfnxmcrsob6ZS9graetu2AFvkbHNNNeUKHfzuRcVXVYKNcpiffU181S",
  "key22": "4vfww2pSVEi541gJdFAyQR4u2rBX5X1QDbHXRKBDW8B2iML8nqv56Zzi9xTKzxsMkQM1BfuMDXEfQ7NsyaAQLBnf",
  "key23": "4MD4kJS3YEsETFsyuBDXuabEeNGEFXgNmt7ksZaKi53yyJ8x3hicV3x5nv7cRsDGqm6w4MLUsAtezq55ew6Gjx2D",
  "key24": "3tvyjTMpRs1Eeym1ayni96FtFmP5daZb81WFdkxmK3a3ZwQJTYRVo8h3xQc7VqNz4TiRhq3q9RiTnwozhqCF5AAz",
  "key25": "2y4RLyWQ6noxTQWdC28WeryA7VHR69T2NuJjXnnPGkzxSRmY1JpL8mgLfyV2NZKrZXzjJVDVeXAdfu9mHyB9FQjE",
  "key26": "sbBhdvUnYuTts3sBdbKDBbiKr3WHQyV3upJuCpCVawAfgNz6ePaL5WjXx5NQSEMYQsCangfZUPo8xuqf4CiwaDm",
  "key27": "5CuBpqdDNoQTckGjBtbQ1H8rqvHNqQr5vGnS1dXnbghvqAyDjgWjxQegCBPF4MAtrw1nxrQh1AkzmAM71K7KJQG2",
  "key28": "KpaK22LzijrsJrWQTWwT8xd262yeGM2HWeGE1Vbh2FRnpC4WgxpwVvJYS3S5jgRM4TCuiqVENYpWyuLt23PkkjV",
  "key29": "XstFeGtAM4eAZCt9XzhHXRy3HjmWejgowkMTDo5joXLCSedcRLA1QqYuYNSuG6xswN3J74hDtZMEyaMRJwQpAYE"
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
