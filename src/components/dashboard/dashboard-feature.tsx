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
    "3kKd71QcCTSs3PJaMK7gVfNLq8EHtfNr1wHgdWbsbuJqK9K9gi7pGjxV5osqtsSukWTTonpPz9xRXyiQm3RdV2Bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YB4k5yfUtZAi2JVt7v6CVGEGfdqikwRha8Negax9nogP3ukFukdDMCjWxf5rbdtjLC1sFWeGzyMsFzrUH8vcNq",
  "key1": "28xVq4f5aoE2aWtubaHvL5XsNRnxVfowdDumtSSKpchambYQ3kFZiPW38MVeypGhhiTrhz6hU4kFrnUDJ58xBQgq",
  "key2": "2kyvGssRa5V2aytFKMUF8QavZgHsKFmwWqE67XRfTvEgG5etNwDwvMepkdiausyxCZPCTrPvh4bqgEVmmSwLH346",
  "key3": "2KjquL37t5kwr2wSXeR52PgTpDCi3XYLEA2e1fqp4nmaiKHwsJxAhnKi7K2RwAXh66iE6ARnTDZ9mHcCoW6dL2co",
  "key4": "2s4SShKoQMa4RUUd2TPVzNUbumPuV3gd9qzQpSBJz2z8hJeFqJx5PqcWhu4oiwY9GMPS6QdUJLaQ36V8kPVxfU7p",
  "key5": "S5eTt2VUD6hwCesyFfBusqZ3wW66no3p3yvqJsW8ngRjKubhiihwNtRixb972EkxCBwFWMSsevnSQVeRuFgMn9N",
  "key6": "5RkhDsszNLnkssXX5P7TaGm5UWiVb6dMvoG8rRcAquSYw2hrZgS2MtfZKyJvqmbWPjqqmG6db1xFy6bavaNDVzSF",
  "key7": "SwxwnRATj17mmUmnGY5hGjTvmbiGre6gLxoNqMRK96nAEvbwU8S2qF5YouFLKa2kdr876WhUKveyNsGQRNnnyK4",
  "key8": "4E7Fbi95p7hhrEBmWm8G4Zf9dCQGYef9yqmuz9gj3AmxCEgspgcwEttMcQshASkKdvt7yas2TeDPcrmEpHMmyUkH",
  "key9": "4UzMeF7UXcsCHYMuQ1pmq1eu1hic8kuuALHtJPEXvtFdFZrL6iDdy2gaEfbL7PUhRGJtHAK8yjWTvEwbuRV6eWvV",
  "key10": "5znnTVvedkPXVEHW2CDbHCKJkPTVwcQd9j8PUPPyiCf4zkoDNUv8BLTZGTH3SwN9TZCF92SgQyhDfvmLZFmzqApT",
  "key11": "4gAmg3Yuos5KABtm8jKNQ4eMgytfmTtZhXo44XWscJGFG94mwohTsQyqGc52Sp4CTteP4y9qoUKc6iRNtRXCiJPT",
  "key12": "2TwQK7Eq3tFuFcoHGyzmLCY3Woci16YqREyWmyUG2z5d2qjATUUANEQ7xwdUNbi8hxyJ3NyQbaR8M3yNPA8uF8CV",
  "key13": "yNzY1JEJuRESvVkZjMdvRm7idHaR4ir6aZbgZKbhhQYNNDKPB27PzkDDuo1CUJqXWpFkQ458KZRyZDepp6Nnvr8",
  "key14": "SdgrkG86NMpPzdwpUgRxHCsT4MACWs3rVWdr2jUdSkdLi2bJdinhvY81jfYEgNUzfYgrpeJxCrpEXk9ZfvwYhSF",
  "key15": "5TL5nCxZxofdfgHaqe6hKvk1PLPKFqfAUKtAhJBoLkZobbWsanQ2ZYQeNqVoRtQuyFe7NC968keLhzW8M4CKRNP3",
  "key16": "5NahedbFoEffHPe22jnZSBABheEuppqcehEKYDopFRvepS9CH8GtbX52Skh2fxirnBwjenLbSHyKkVToFUUt4HmR",
  "key17": "e9DaJ1tWYthD3Fud1ic5TcJV4VaKAEd7wMzwishgxih3gruFigihTWY37SFfuK1o3gnia6sjEWiJF15t4KmrXwi",
  "key18": "5JiLhgKQ4mZmPKREDgEgFD2gvkN6u1pBRWHX6JfY9DQtfpdt9AmwPojUDPubqN2Q5zDC5tFdon23UzP7c91xePey",
  "key19": "3mHk9xmQEkmQB8BUpa143NwCNjXmuUzcwgVEDPTP6WbTrryuiSLV6KskNzDy5qTc4Y3eo6dwaL4L2MT2XaypXA6i",
  "key20": "4L4mNvHcURiBozCCd5xgiULWnifF65GRy34uu2qP5pfCHwSzYPyjjFyFJNmQ58ZA9aZZPHkxmbrUDYinztwVwH5L",
  "key21": "2VLfLfDvqabz5vRUtFgq49oFsvW2eERLnoVB5wfmg7RTLo1wNu1vFuu8YbVjnvjQbrrZ7Fc5YmeVEmhS7jJQyo44",
  "key22": "2mW8rKgFtEgGLdDfAuV9AuuhNBEGmAcfedDrsXh9AWHY4SacHCkYoGvFYMACuyy5CAKBgL79HNZNMJJi9V3ZGrQQ",
  "key23": "ghu15MvxSvv8L31xHsc736vrWKfAActX5hdeDfp2BWf1iFfnXJu4Gkiowh6LXDqHFassd2neFtKc5fXQjL5X8y7",
  "key24": "4qb4PLuqntXVafeaCgYAW9zVtsRsPwnNi8WXp1imgfa8BqNfotHC3zSoWX5eRAqLTXxKHQKfRLALtPdVqHjzhry8",
  "key25": "5yMXMFP6ZrHtcyui6KCC6n7UP7ZmwanHGT25XTuyKmqB44qBuigr3H7B6RpNvPP7Pc9ijX7G9JugYqSPwbvLbrJz",
  "key26": "3R4W8GHX5NGEknuj519bDq4EkJe8Cndstkhe9xRVp942NSuLA8n2qpxcj2goMqrWpQgPfq7Fyy1Q377KGRLuKXzY",
  "key27": "2SPXQdypr9VftsXqJieBMRxYkVUuCDszF1UoNaUaoh2SwkF7WFgPCk31mCzEUE8ZsRRQSdwiU5ih3VHnnAtarhb8",
  "key28": "dFefvoGa8AX9eN9SYF3sD2VPBV1nGMSHZ2L1NPQYVBcH7wTpiKq4WNiqCsUw3sQFo4VAaxpW4ePxKVVtJ1TDZBw",
  "key29": "2WVKT4wwXBSeVQdFCVrSiMXj6oVijE9BoxF61YLAXut9nZh8pWswLSX7imkgUh3C5Nh4cYCz5ukkHR24A1GPk16y",
  "key30": "5xLcwuEPLugJvQyJJ3LGRu6iQRVNpCUd6VXqCumGJJSM6iRFbW9SxpHteeJ3wboqjWG9eKq68e8CkhsJj5Q7pbhJ",
  "key31": "4ePgQG9rNcrQDKG9e1RgSBjAViRebBnn7hQSV98r7MUrQsxST5sWmz8PqJY11i2jH6Mi9WzR7wEohTqRDhWXcCFY",
  "key32": "4ZyaQ7Cj2gLYDZ9R6zF9zQxGruYzSCL9BMT2fDxBBAnZhjTbVqFR3S95mQyYPigAB9UjzxrUwy5gh47H1Bryx63m",
  "key33": "36qZAsnF4SDC9w1Eur8VLzY5NMxPktpVTmp2DT28eTgNj1hHT3vqTqRS8nw6S6tKu5TBu9dmA7rNzsw8xjpT4TyH",
  "key34": "NJ4L8mr82GTXSn8r8m8VnvuxTzErV1LBAN7LdCptfgUqM9LwMHizbX9EGQ4AUvDR8Dhz6PeecMyQPVY9kmaEPiJ",
  "key35": "4EjagvpvJMk5yNy6GX9oNhVst3dv4vjJVpP2EoD4rdTq58f3MFo13WYEtChFnfKYLHDNE6fZCapKwjdKRDvu9x88",
  "key36": "2wUovhUrdquPEH2cfQrSe43vd36P2pbQdcf4GbuBxfj8weHydTcvDt4Suss89S3rwxyEVwaKoZnWcs25HqCDfM8J",
  "key37": "2Z6DmJPjjeXgk2gBnzDeuzutz5eLs4KmC7Kt833AYZbYFwQAndxwGtt13dGi8U72GfQJHTHym8pytXqaohyZEX5X",
  "key38": "482jSaTEv33bAW8Tw7DXsz2VobSyXha6fH2xdBn42ywDPuo3Qe6w1omivwoYVWB4FjonmhtXnPpAgom15rQyfYTq",
  "key39": "2vqudpMDo1RUZ7YeJ8q5kMBbqE8R7awrA62AcrzYKcfnUNykPp6URtCNqxoAYNqoXbDg8UbMSfpakoKcmeNUhzDg",
  "key40": "KrZ4N4BZkAkirW9zjubfQArEbZS6ZLXbgYQ9dd7pxTu9WnneuY4bBEJVhkbeCncKFdmes9X6oyvuQs4AvMh8sxB",
  "key41": "3EYgrTGZKxAbsQiRzUbQCX2oavZTFUijpAYcFZ8Bk3mhvyfgUiuya9QcfVMs8vTF4YD5bxUPmrBmthnkqmVpPLud",
  "key42": "2k6449MHhbWHaKnzpkEftk8s1SqfifX3MaFTaYBUNybfTwTW9qnYmuxXTtybqTkfZwffvgcE1Y9UgveNUCxkjy7K"
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
