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
    "4uH7868uppbdhYb456gfSVCBWqiPChiArtEDVNjnpYjNA4GRAgGEn7cZPqoUXGgnStVE6vhWZTmVPHVvxYU9y7RK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLZY1P399zaVAWu4keqw5UhS8cWaQz6JAAtEQ16wWfCmPA9jieyvXBcRMum3JLkoxmtMAsRFymy714AtvqBdN5f",
  "key1": "5c4tDvkcMW98QccEqas5hMosrcN48JgTUbsuDGjgbKyTazdpvaSA8FqhFaiMhPEx8jbhJjC6HardXoY6kTMkTVLm",
  "key2": "3xV8jUGHbesdTADWU2kWLbbT7B57Kxc98mdkfqepYLoJEmJwumojjmWsUVcu5JMmMGJnWVh7hYeZKKhqppM7hBic",
  "key3": "9aMx79oh6xa9xcKDcf7T376edoiFqwT3WpEjNzgTuhagQU46hWurhcZiP7ppmUPGN7JxJ79PZe8W5y9pN7d8BKK",
  "key4": "2YRXWd7BBa5Rb4ZAisdf9w5NttVNFWs3oNtNss7BCpUzqYxTFqU62gqnPZtLZ5urcbKzv7nxKBW7Y5Er1mcLmGUT",
  "key5": "4PbAF9b3RnM6reqgpYUaCkpVNW6CwqjJQTpwKXXN2VV6ZCDXL3VB32Bsu9nip7dG4K2VG8JAAJgNDFpkTRwk94xA",
  "key6": "3Yp7XkvEXJ2guUzkuBov1xS8TgyhwEQaNRjiwzuVTuTPJQBcCDkJ1LnTpuR6hf5ky213jtYNA5TtQWw9bmBA2BFj",
  "key7": "2GH2SrJAvVRUYVD5Gqu7Bx374Gz6qRaxfW7rP8G8BTgQ2DQzwVcAccZWNzQd5zot2JugdViSVFonJ6uvwchFpwz1",
  "key8": "22Q3jNjHrKeXPQyWZLoGHiBUyNUX9LgZe9BWT684wFws52QG1DsAvVEX8MxZraRaZaCs4ts5cntZkQ6sqPXRrPEd",
  "key9": "jdgg4M7kavRxFwCAKZ5e8TbGgbsWfjbRGzGWwkLbChwvHxKwtP3hMueN941uSTfNebLc9QKgbvAjZSDL5mBJjRB",
  "key10": "453YUJDbeBtEGwjpQh4LAVWbGVi8rWPzbMSDHeNrpLAwQgFqngJjmrqZZsk6sqfr9mHpeafVqcHkSW39NmYgjFPG",
  "key11": "61NeQMACtK5tf4VtK3s6WifRPWRapUF3FMsxPiaFwjzdsJ1KYeUr7kn2JXDbPeH5cBv3eS3Jr7MwqzV3GQDUHzyJ",
  "key12": "35guf5ArE9mRzPDXP8svQLagrzXreEJHfnZRu1zy8WvJzkNcbXmdf59zttSnuLnGiZooFjaURXeJuGTAT9StMCZe",
  "key13": "4TDKB8JwJ9dBUtL1fkroxdjR8yfxKn5ofmCPm1c9zsSaGXfs72NaNJcyzB2FBQjKuaofueCAnwAxvjmfV9J38D8Y",
  "key14": "4oZwMUEE1gWjxtbCLhgKWx8fNTrKGzCSnnwnw4DLpbq17bdNWaTxeUPwwe4MBSLN32QoDAY4KjTEYf6BbNrFnCn6",
  "key15": "5qCnaJEpzahi7Y9JEMDSV2mgwUMR9PYwEciVQUph4LmfsKjvvjBa2GujVs3KZ492mGYnVeW81zDR9b2sqzyCGeE1",
  "key16": "2kfwwjvxJcemscaw6MSr8Min2RkLvNUUB6zoaq16nXpk1TRcfSF9ASsHZvWFf5YrY779eHKPTgnFZgK65QRJ4taH",
  "key17": "56ffyqYf76gkhrmVV3ZtT6TV6eEhMbrC9JEig6uL7mmitHGeaABLz14fXMHZm6FfrNBetSJMys9zqr82TqiZjKKi",
  "key18": "48HwSNn1hxgkdQdvFBnS5ZzuvGwrT7ftrXkpCfiSr94zduCRfu2nzc4C6QNzGu3KhvM5E5x7pRtJbr8uxJQKZCVS",
  "key19": "tUAPXsc9DT8rNdeJ2Pr3ax9RxWDazqkC95e4zzM4eaMe395DNCyvKK7k7GYawo9M6CnMrfd59XRkMSFjU1KQoeP",
  "key20": "3Rs8972sa1HCVRMTyei2t2NFm1aoCBfNMo7jyAtG82ZsNWDKFeZmE4DMHQUM5odz16NdT5C2qmNn3EfJCXVE9vVq",
  "key21": "47KQc4XyAHSdF1RrUaEZxXmqDYrYNZiq7gwRimQQjP53ZLLxs8Ma4sgSzvBwJahdK6FFReSk1uRXxdGLMCMkXtKe",
  "key22": "D1ozd6eTBtGAYpW92xmUS1CWzQamyUMPxZjuh77ibwNKqYedXEwgsG3oLv6GuQmKpxXd7qdD73apiSrMYBwm2Yv",
  "key23": "48hqvoCcX3AgQMqafx1q8NkDjZQUrrzKMtb4mEhJVj3h2bkrfQAePnCVhwSUjY3jw46a8JqCANFnvKmKcQi1SCMR",
  "key24": "5uKae5C7K48PM9edSwsfXtkVswcNokeRooKpbLefEJukCWif3ShgX3FmKG2YdvvdmpQgjtGoncT4xqwVuYysFE4f",
  "key25": "2kvR5nWMFr2PCd83qdKky8RMdubUMoY6jS9Aur8wJBnVQKTwCiLU9XBgNerTSBowScMHH2W2HoHti2Svh3WX2Vbk",
  "key26": "5GBS2KnqPLNbe1Uv1XDnK81i1FLUyCYhvc8RbfL3xPMohs5tXmFyScrj3w2UvKctGMHt4ohqWawFf8RNZZoWgAL6",
  "key27": "zUQttbWg2yRa8NLAZmgwQv5pbEaq8Xy27xTVS1ocymSwxW8wBHk3sTdcVmgm98461bBwCDo8EsCgAcuKQhiKm7T",
  "key28": "4KXNwnL7muk2yezecmeAgNt6rAP3ornBbfCEnNVydDeft6TgWKKTYbGvHzTneyqCJUZwWXmLRSswpbFXWqg2FqkC",
  "key29": "2fzQtVb7qbii8XASfakcNWarXiZdjsniKwERsQeTWhcxQ6wCQLZ7AF4hiYSDrsdRkh79ee4K5zAge2JvjQ25neV3",
  "key30": "5WuNTXtMqMfXwLARA3P8QSLpP3DFueLUsuJc8v3dAm9U9vgGnjWPoNUAMaHeUDUPy2B8pWw9PRz37e2BYa5uEgzx",
  "key31": "4b1hog48ZBDGTTKeHChHW99r7MKtke8qDtPGtUWMzVU3MSSr1kcVHxJ7VZDiGKHW2NFqH67TXkL5a3CfKnh7Vo8h",
  "key32": "pseaXQv11LATH8dkuKrstYjD73wWgzi1ZCTsYrdA9z9jHQBia7yJuEjcJSw3bERYW8qApvQKVTxF9dPboS8u92X",
  "key33": "3xJwo33a7R2ToiEaQZPKkQoQaTY71njCWzEswfF8e2Y8EzSvbG8AzDTZztx4oZtj2kkGr1sTwDvnsyRX6QnjMKA5",
  "key34": "5a8iZ7S66nyoe84mwQRYA8YRcCrATbytN4UpoypZnNcXZPLvuqkWvNc7HjBXdk2XsNtvqytdvEBu8ePeqEXEWVAR",
  "key35": "KbLVL2SPEBEsjyXHr9X5ECsZnuoUL7bjPX9BRXYJsV7P62xUuyxt93KUeF2fvWqKSnuinaJfPfqCSEpeTp9Harn",
  "key36": "wxsmtTmp5bxV6rrRrHrHsPEUKLLXSMvWLNawbtqZ2yuriUbRi54k9ePy8dLw7UGrE3Qmmbp96seivtCr6KRTqz8",
  "key37": "2B7dnssgoqfGKeWP8DmaqJr73WQjsKo4vsR3hhgnevd9sj9bYitErBCH7u3uDQ9Htmf53YuDmo2yWcsry5bZTgUC",
  "key38": "4pQFjKgjMC7fCXrKoTadz2SEkRSgo7JiQeFLQebkxAnhdc91KBStbZxByzVKAMjskkDkyyfzxi2ua4kQLuv11Kpz",
  "key39": "2kV34RSzNKgLwtCZHMGZ8z7aeeu37q4TZoUqpEDoYtfRLE625dP84KFLwoYTtr7Gyek5EwAjxwSTzbyGwCimoFUJ",
  "key40": "5i83x5Gpj2NsEfCfTu5NhXBLe4SRf9ejqjns2oPXpHwJ7buCTuCSQhLZ6vkSUYXvinEMb4zCxaETvmKQD4P75GHt"
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
