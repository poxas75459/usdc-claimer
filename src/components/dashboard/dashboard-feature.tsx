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
    "2JFpK185Xu95SSGT6N1WDfVqTBZ2rLg1Cjcp8x9xXH5zVwYYnkVtJmKz7dbozSwddfevh92BoXK4zEhvjj1MpQWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3frXDwk37csNm6oiPYrUeA7y5La6iLBuKUqQdp1zGFs37X7jrYHHbHbHP581fuqCw5b3BR8xuzw7txgzPPwKCsqB",
  "key1": "5AhSw9qZfrG1VXPrGfuCg5Toou7bq4zedCMXeHHKpEHDbP829csxDmVPnRYenYH5WQwvVm96SKMVDpSxU5pQ2pqU",
  "key2": "5eZyBEYogbzrDtsmrisdNhdoj48LLry2EAedbnsPPwfRhkhc8U68PgitRirpkXYacQjWUTw591pGYndAPH7DCVrh",
  "key3": "2b433pHDpqDdHAtThcuzDkNPQjREdg6wQm3k7nrjrEmzvkfiTokgJNb5YFui8QVEbZFf8vE1Xxard5gERqUSFJ4a",
  "key4": "4vrjwjb1pbb9cuAwprgkycffX1suquXsfTyEdGc55R4KYTdTG6EtfzjYmQtRVf3UMTjQPKTSGDtbf3EbkqRYfx78",
  "key5": "31K62rJfjwqedsn1Lm8qr9WxBxhHrFUWsWw411Z83ykKJbsJZe7ndLNctPTuRsJUKTocu6JCT1um7MfDQ7hj7pYq",
  "key6": "3TWhDA4HpMXXvwCDdMmZNrMPYgQLVNFxGoksE7dSt7Q5fL3y2TQRptzDJC76WdgLbNPP8c5rAjkusUUMjqNmF48z",
  "key7": "5xrN5pc2JXFd292LQLbb7iLNsx4h4WMWjoY4AsYbgYrtrE4DM7ckePekxBsrHk5XjCCexXmzunNM4pC8BSD2GPn2",
  "key8": "fHsbsU8ZzThjB8jHPfbExqykxHJxAGbWv3yQDDF5KA6dEXK99qfhhgqteo6vre7JXYP3YrJ99DjKt35GABVj5uq",
  "key9": "2j8ZvFzzoLc7dj8eMCwV9BbTdtUB988ve8HWQBtFSd8C97RNSwSCuGq8cKmXGatDtT9w31p49j2De7jeLXjuas1e",
  "key10": "3ocLhBK3LPPvAP2mqCcgwi1LG26gqv8ipeA9CMxejd1CovprYyHBmwyadwq8QkYvyfjH1h9n2zTZtwfHtHHWMCqR",
  "key11": "dmCjXBDDQFRCpXdXfk3My1kDCKjRaBcayvosxyx3GKoh7KGuoMendzBjfZESPoe44sGyPzzrEdhLKTRZKrWvFzY",
  "key12": "3rP7oSBvppXm9aXSeZhJMeqXs6b5smDtuo2xRb2KS9APsz5sDbmnAjg3ukK9HoFCpBsEvzB8JySdg8NejYkBFq1U",
  "key13": "vXax7grrCPawyCYspMUjtpqyuTwcciJGdkm1CB6J2Baduekz9anewjU71J7gsKAVdYV7h52495zDFkr9pXTzePD",
  "key14": "5tH1XMZ32kHdDk1RaE1JRa55firG2MToMmsD7YdK3F9zwhdWHwaQCDo8bQHA5rhXVvsETk5oAvu7cGMgc9hFVGui",
  "key15": "2oLnoPu4WAY3w2mNK7YLsQxTugypkzdE71mimcwCgRVz1eujeXMLm5CscaUpTfubMmpHf4YHabeCei5xWFfEJsZn",
  "key16": "EhFpC7E2wPfMEdgXLBKPEWYZYM2HLgQyDYn9UC11BM9PCNiwGU11c4oEoZWL5W9d36RAHqL9gcm8MXqRo1PZ99F",
  "key17": "3XJFrhEFUfmrysNiQMRBaWq3xtRYDhvYG5gxwX7KbMjaM8ngd5Zz5GcvE9dPDtGWD27RQ5nnfqmBgdiDdcJGGbci",
  "key18": "4PQRhMfNbtahEkgH6htgiNcJq61poq8eyfspAzLTpCR52Gikz25TQmVgmiVPx1YiEM3i2g8R7w4X8styy2QENyGw",
  "key19": "6ALJWrwkwN5HuC22KNLqBbDw44fhvXjSAPtDNSpYrdz45sPJ2nbWgadgMd3Nkdk4JFRecf2qYhKt8W9eALbDgvQ",
  "key20": "2wvVRDwqxbodVoD8widd3awnBDxRzygzzeTsDmgxEM7fAaJiP2abM4GhM8z43BmviTykbQ9io7tyqYeEJPQhCLpS",
  "key21": "66mjaGqCS9EwFGHy8fbLjtZPbcaPHBo32u9zKf27hGUkJ5qoB7w8MNBw4X7uJ3kMPfbn6JXEzCCvnjk5g4gJM9Au",
  "key22": "4vEjc9JGJRYKMmVinQFUggBRSwnMQAXv3cjAya9iULpbb9UndohGdfdB4pDNAGyXXrtCKBjhaiUuVjriqhiUWcvt",
  "key23": "cyjeVUiWm1UQWgYDcswsnVdapUySqMY2JA6pNymMWBgVfQhwAqKiBvKEAW7bmgfwkLzyEGSaJpJLDGK8e9J5qYE",
  "key24": "2MhAkPt92hQZtwQPbRYdfWb3BhRErpTAAYyt7VfGMx2cJfMeEzYN6VKbRktQfAEvDpkxC8z2Yb4yXH8NMw2qP7By",
  "key25": "tVz4gtoSq9t5Tiyoq6u4FmEAoPLjVjDhFye3G67DJR67AXZQXXmHoZsFoLvijzzWBwifjkkqhMh3kXsocpCpVS4",
  "key26": "4J4oUk6bJqAcTBUbSYtu3oDGAGSPutaiH51X9uWqzkjLBThQdvq9SFM9BDfBQZoyCugjf8x5qRPKRAhBDesNP3nt",
  "key27": "3XbRF2SUi1sGotj92jvyw6eFt26BM6hG6sm3L6z3xRJUXuTkgdB9aogMNVQXpvyVXktwiTYCLGjWEbcwcVMkk2zX",
  "key28": "5xjpBNhx65ft9zyTFt1EbUaBF2MZngABtJiNPxGT7dFtUWPQYqaJ8Dm1gxDUR8BmFNZ7Y95EuqEasFXQPB1iSRd3",
  "key29": "2HNXWbbWFuqjEdPdXP9duVKfYtsLMPLsqmJn3zqy1NRngqJJazCAA1NNMEQL8b4LNPqsg6Pt6Mf7dDEQdaM5eeL4",
  "key30": "xZXG9e45huhunCYgt2LAF4jqE6ChYuEy2LpLkCtszZsUU5zgQEcsxXLgnRtaoSrEdDo2MWiRmvDaREgZufvUxXP",
  "key31": "2kyxAmXBZw64DDLSsZCHS5poYrrZehiJTNXgvJgzd4RmqpoJoqv4KUQ2YWaFbYdqKcWNG5nQ871hv25WVKMRoXWY",
  "key32": "7tcymtvcqDZCJFPYPNguHpAymSDbhZUHCLMZKGCfgiMiyGaqG3PowmcZbc1KmUT8ZbNyq4ujfkmYUNbVLgBHSos",
  "key33": "5ULz9Wuurm2hArj4M7snCwJAo2hLEPJc7LrDRNJYyekNdiBubQE6fhQbnV4HRdU2xQH4XQzVXmFvqYaYdfDAB1HK",
  "key34": "49VAPZVpA24iYokW7v32cJsn4gWcp45X1Su5Ti61FdUHQm3N881vSQdrDfaEii9oJwasbXzrbfbk9WpAjVLmcW3r",
  "key35": "4V11fdT7vAwtY2oyUmBFWiHpcp9xk2aSMYdCpF54WJ6J69i7Qg1Sa9avUW7A1hHXVsscFkUiyi9KzEyT2mFsgtRi",
  "key36": "2q9bpTvW1HFPVGAuzkhadrm42D891nTwBddJx1x5SoqoKwGRnH3a1Yx6Z8PTwDHd4KsfYK9Lct8DcAQSwJmNg17t",
  "key37": "5FFDS6D9TSNfgEXW3c23mSzVkxBiPqPdADf4XqaBCuz5nnmuon5rrPJxxowkS442kKtGh5U14KvnYtC8NKFqw8mN",
  "key38": "4QeB6wCtEYhBpjqUcCWdjbXt8ZCKuuEzf7QMnNABiZYZPzYWzibxsFJWe3LE3zJRkeXt52K4GY9yzmjxNkfKgwFL",
  "key39": "3ocPtipQc3W2oV3qbCxykySbvNrrukvcnwxi5hPJ37o9Cdw1DWAAxUyC8ReJHBVuKpYsNESq99SFKRk9gnfYxtem",
  "key40": "4X8M6APbFdTNV4ksNiLKfek5D3BQw5MPoWYmPGtDa3s8vay3wyCQmZYrmXfvuWxnt33bJHNp4g8yCUgzDLvh6fFE",
  "key41": "2qN8zHWHmxgY4H8Ffnz79ed3hbM5ioJnnediJtXovdrSWWY6ZZZfKUNZG9FaArZMgTJZteQjWiZ74H8Gpimunnmg"
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
