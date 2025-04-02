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
    "fQigYJGVa5crJaSHVX1f2Muu8btHRNvrQ7mRjCNbdXcxC4RsB9uZwgRoefty4jaW8E2HoZdC3YwRPY2qB8PpKji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcxVk9uZXHNXvoPxiXVotRDUJ748kt7v29d15dEM1R1VzRTyr9PzQkiiLS7U7dNRSrx2xR2ngCGBDUJVvDcTYCa",
  "key1": "3CzotxmUhvDeua2fCMVPSwFU4xKYPCPjLWoZdUnCFDBKK6iwV1BZtGpEpNPAa1pnTEA3m45YXobfhaUdPzduAPj",
  "key2": "2M7NHV6Y77VUuMMkrK52H2vuDX2eWwnJCJT93z4MuskbXHej7xscWRjVVuM13ahjdmoCuvC83Xz9CpRUZXAdFUw1",
  "key3": "4MJ3d7VthBZzpgjTdCrK7TExw5NihqEb6abZyaqaxtSRAuG3GujUq8iRkwvCiirSJgzxFmAnrVQNWb67o1UAmk3q",
  "key4": "ApSXH6chWGoYKGpyiX6bB8CfuShuGiEdBr5FDS7Zpd6VPV65eAxgzRbw1fyVe691sj4mRpfVxN4zM7VgT2Bfpvx",
  "key5": "4EXWF9DqcAKq7Gob6UEH1UV28m6JAqnDwxXxAzHm9s3FVKhM4vngasmkYE5KjJCH1FmsErHkviJPTUymxnmyfVLP",
  "key6": "5cVgdjnYSeGdCeZEhpD5rsiJR45KNrXQgJw6Zhv6tYeYUmi6JAqqaPKDDFWRNN27xv5yxYAF3AHYPtpCBBJng4TL",
  "key7": "a5Cuh7rhdgRfHCTujzdHbhMz6SbYf5m4dPsA9Qj6qZKPwQu51a8zLxn4ppzCD7DMmzjHXfNwDUvfczqiPc2in5U",
  "key8": "2z3Hse6FiuQKpKgie7c8Wn5Q5MqS4oNWKoVGYAmLoKZhqHagucADf8esspZbRxXsWWd2yMWcGRcnWmQrxTMX53oZ",
  "key9": "3fB3TLvy8vosmuAbJfyUT3kKC7kYeYyYS3fZyWod3p32LbL2oUdm2Nst5DtvApUL4WvQKrpMcY5ZmPwXsMqr5DVr",
  "key10": "jsEz8ZxiEw7kjrL9zA5qkXwmsiYnrfH5GpPfzXn2qQzm1wwwkNcWfgB4Wj7RoENNFZ8g7qpXK9ju8GqYYz2Kmxx",
  "key11": "43sz5t3Dob6HV8e3xTVag4xzpd81QVugvbaEhjGPBNntAvdn9ebf1LRURBvrEZCjAvQ2UkHMcXerWTAyRuiLZDsV",
  "key12": "4cTYDZftPBCMP9ftHfyHsNqefa4zgeE9SFRVQCHsz8KumZhR2UC4pE1xJDWgLoppaG14eMJ4hn3aEpxV8PnDqBRh",
  "key13": "5JJmb4Gwt8nAu9MHqR4R3rNKdMGD9HMMukCqQnE7CgqGYsN63MgPekoEGDpD9Q9Gz3k6D2SgZy68aNbRD2E2iSfh",
  "key14": "3GCk6sp6pHHoiB8hQYCAKzHy2J5h2cpvFDyddQvtwmFkzvYnvehfSrYwyapNNk1RodBwd69pWkdTu3P6syg2fQ5o",
  "key15": "541A8MABhJu7Us7dM5d4MykfeeDwJA2uaA6EwAsUgchgU9AEQQ4LxASUdn2eTGXCWobkhcS3GPxrc8qBjT3r8RQ3",
  "key16": "56W7chtJLd7aq2NJNXShLDqcz1EQVc6QaPZLtEUsY2Sa5YA13FBFqJxSrrhpAowgJfnrXkRL7bPX8FHyTGRnigRn",
  "key17": "3faip2aNiAhBjgjuZ32DrRULXY4M6y1hQyyf7zktvvnpVjqZ5sBshaBC1hr56wCpyHy9NLrif7Jvw5TBLGQbCt8u",
  "key18": "2xALoP52PgQNAfy36Bzr4VzZzCzzYQsbsvnNv144HXrqWJCjTn1UehruQ8JzZiBpa49F6MyYPVCfn5r3ZJgdEW3c",
  "key19": "5cqUWJdSPKfmSXXmP1CuKJ79YVMjQJpvMgGzm7K6Aw1M3jGg88wyfTwujgJxCWVfW7xBaMWR9Euhf4ytWTL2qYo5",
  "key20": "3dX8PivDARBTWPorsA3PbxBxhtFrKtvoYVbDURkA6PguHW4vzjYYdwC4Y1CJfiHWiVdVmnrBxfPreiLEZvnLkjat",
  "key21": "2iTdM7FfVjkV2XURW4uFFcQygQgh57f6DxrYjysDTDwLvXJ2cybTVg9PR5cqXEPKhijFqwgxpUkZTTmW1s1htH9F",
  "key22": "5pR22UK9sEVfJ4tnTMcMdedZ4sYir98Y9muX6jCZ1hwjycQJ6M2YqzLV6AvwwaHbhbK3Fc8iFURPWAEbmBYEJDzi",
  "key23": "2sZnkhfjJDrSdhJT1G29dmdYrQRNzia3WGBawMTPzBTdxcwTYrDuVCRFzdBqeXhnFwBW3jikYeKAhYsJrXz72Bn8",
  "key24": "66JNWdBQJsJtbGZD18Md8M8geEHSVcmo56ikHfrAEe75WgCacjzjJEzzjpkYBpxZ3ozPu8RY9BvcKisXpYJsxSrh",
  "key25": "5KJLrHvCodZjZKDNU22mB5BANPnNZTD78eB83BHbY7ZrNwmuYFv6bWBjHqvZyscuLZxo8gbC7C7wf2ZWFTouS59Z",
  "key26": "3Cgdmp9xpBEKT1iPhPdH1zCBfxu8iZUc9AbsbYwdaABAbkdEBNKThEoTSmK5mSs4trVyMWYSj6zNHCbjarn27aUA",
  "key27": "5jQ2zyotStsN6qJ2eBvAiX6w3LMRq7zFb6VvHsarygzKQMtK9vXjdBaMuXfzjCBWZ7Mzpv9Y8eTprZxiwxwHpGb3",
  "key28": "4z6sVwSbUAaYdQzLTBLYw1wxUW9Cc3UEQjAHwT7YViYWbLDGarMUc4dWFzKKgV7zJj1ch61hERM2jtB3nj4sMRK1",
  "key29": "5rYBVamKgSGnHeqNVrVCsMNJmaSU4Gt4fURjMWDk4GGtC4ug9YPJzDAhsbJ1EuxjP1UYk94rD2EkFtQSSVk7sWuw",
  "key30": "2HcZ35jqq1VBTVWYApStNvApGUPzCKWMioHZh6fzJHUch7SxVEBEJo6ikfXWuGpi2jhif28Tm2BoYwm4janQYPZ9",
  "key31": "22NTNAmhRmp6dRKZYnLLoqe4qyU8hq1jhysjyp2uFAEd57cLD9Ger1ybinaqmX38eyUKMSfwxmVK7zitEQ1CCm4o",
  "key32": "43zhuGGDLppqQ8aSPwpbEipi7EryhuCVWLRNnBmuwSjqb21cqgPozKpJvZZZCPR8hgs19JbCGhW9DaQuaXk7vyZo",
  "key33": "4WSHLUbeL6QXtFPgJzinHxGhu24cGfv2CjhTJGi3JpnaA42tCvQkQR4Nz2bExmJN1YKEuDK3WtTkaTagQK7A5vLP",
  "key34": "5FiVBGSe4VmaAjKwcFjzGStSxZy4xvTyUN86wgUaSCzYR39Y3rzXFQ15byMs8WXCeXLbMeobqMfhJG6sLgHiWL9R",
  "key35": "2BgUfg4B5HjEYro7DxdfdaYk1rvNz9jZeCfZ5mQuswNRYdf84KHB3ae5k3eW489a7M456dX4qVEHYh1oSg2eSvzK",
  "key36": "AYyzusirXTSfducP3VwkGEpZcSVR983zwvuheWZNjzoDFfooYG9X3qnpDwNKh7sgf94Xm6MSRza77nPxiHqQSMG",
  "key37": "FDCbsLCYZigpgaaRwuF1JzdfMnAes5BuYnVu3Bvez67kzqkYd5RV57VTSCexdHLmiw1e8u1hyurnGky5ST28auK",
  "key38": "2CwMrq8tPj6rDP1PHu8uj2y6e3j27Nso7We269NsiztsUCw8zCgFVjtsXCc1yuxpwybVNTriK2xHYi41j2zGiiJ",
  "key39": "63gwdJ2ipUMJ5KXBFnt8KwNbhY3vkPJrbeYhNjGtStaD3ZsqMt5N5iqSayyKgVvsSGcCsUKEoRanj8Tg2JwxDoCU",
  "key40": "5zWswbzsXShhatGTS9KwjGQKPy8RDFdpcAbgdWZRaQrZp7C3SqK29X22hNeMd6xTNeYxGZbyahKEycHMvrj7jFwY",
  "key41": "5p7JtMrdyhkrZtgQ8vYPqWQ9MXiSuBdAuqEDJcu7DrNcs9fvqaDoc21fN7JbR666fkyjgicdEAC96wmQdQGZJcRE",
  "key42": "24zyyhMZndKJCtmvKGUrhbNZnrnpgDkau1giaqDp678tRsQmNXzkprYywJWBoD57Cswjf3RfvmFD6KFpkYGNgFnY",
  "key43": "2QWrhgmCqDKaLyEVM2dM2buyqJDp6xhvz5gTt5TAJZHRd6tnzfwfPY6ipJdzZj9j9dUrP9uEJiGbo1CkngCEx2eN",
  "key44": "3virvNpLBe8JaiobrUqAMaP9y7X4yqueCJrgdG6Dt1ifCDhdHZhdAK561wqRjkwLkQzFuQ5fKFhmYqKYLnL3UxV3",
  "key45": "3mg6KX4Vh3TW53rFtZYkm4FAEUAvMNnfcMbb5ymzAz9uyppLsMagVKSRKp7NgzxLSoF2ioy8SM6EvRyJF4pR66kH",
  "key46": "3drDQWfZ1jFi1QVE8GWEwkqg2EDwh1tQLK3YiLbvyKWkkr8fU8VGpeacdm9BAf8NVPNCfJHuTZqgzo26E8jAENL5",
  "key47": "66DJcSgoG7BqcAUwbZzQTov86MWx7mKkgFMLE6xgeynU62WgPRZ6yCJufrKBST9rnPfDLaNfy2KscRh6GwaSjsiK",
  "key48": "39jURSUAticjEmCEFfsKJbmDh9N15DEsZzCps68hfDN487jar5Y2uhts8iBwafodnsbdHpRe4rCt1A9gwqqQQytt",
  "key49": "2wVXj7MoKVCu7NArWx86PbDvxL3CichMyDNUfuZtgwPV6RmVWigYH7NNb8PnE4gLvwr5Qygk5BwhSDsqD9FrCioc"
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
