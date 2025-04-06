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
    "idpa9Z4XQW3z5bLPaxK3Ws2xwzTfAr1JJjmEsef5S44XYbYd3L9e2cd7u4TjSWwhmx7Jwe4UCTTtviWJ388DdwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S5NFotWBGKgrmhzYbLzspvg9WbZyR36gPESmGkjwmmL6x4Ve6nmqVENUanRcLoSsVZHBpuVe1UzbLPztJDj91fw",
  "key1": "3J1kaPVgwTBbGr1NFUE9t39oELMWShrtnLpQJMmBh5F5sFhwrDectN5j4ZMFnk3fvRGHHfETawr98qfFTVr9x3Ue",
  "key2": "3DEfGcwYzvfCaeDbH4Xvhu1e3obc1XQr7N9E5q3rXcnYGL7QCtBNNpXckTpj8AJ8TM3wy5i4kPywjLDzvnnirAWi",
  "key3": "5V76JFCsW6TD6mdsSvXWk5ztxJLXVU5Ato9NWavL9PUsfSaaTMrk1CkZwXFFLUPBYQPAMmsP66LaWZgnGpmqtYnL",
  "key4": "4hihQjZwSXPokGxGw3eku3u28TMSKrPxJAWbhEQgXn8Jim7B2AcqUAE3Pv7qoW1F71eLSiB5eyu3B6JNZCmtveYK",
  "key5": "52P3SuXtTAD7svDaNguMrLkQKzec7pApxRcaBjFGASLr5GpRRijEvnWbqvsjoUmHkusPz9Shc4ZxYHxDnWDnkbKz",
  "key6": "n9FRX8JmxANP9D8dMqUXrXj3QsW8ySjSPTbJVFqvMND2NB25etN2r1FDwszTgKg15KMwTch1BbQe3mpw3JAJuPe",
  "key7": "2h8E61TAZr2qctBe5vUMoyRD4vM8PDoWQ7az3pwZKwQ574eYR45ewhikHvDh9DQDgyfXMQ15kfPZSpaXWhaJ9y6G",
  "key8": "UNQGH3Fz1RrApXnNCiYYszewkLpRVDm5D6cPuCZyjfFg1wgMPRZsH1NKNjiHYeQFFqtPDMsrQt7RXxGySyP2BRR",
  "key9": "UY9f4iyKGQcEi3mBhLfzWtsMxAK2RCXuPU95rY7gqn9pqh5aGBb8DtaDaLtgMcfcoiGuZC97MRKbvABHsDqiLaN",
  "key10": "Y458Dhd5pToEHpRm2mdR4TkdKimaELNJMXfRcs3S2hvtTgdqDdDw85cJf4E6ozJdbVePguLN22nn7XHcFbtboLy",
  "key11": "29gBM4tJrdJkVoqBhp4GnmybjqNNUcGQPztNFK1ivE95fQinATioEZ643HNrM4EuiAes5GmRbT9NK1CJRm2Wwwbc",
  "key12": "58v1wc2zXgJKFMUKumcWNT2DDMArMyFk3e6NdRyrsG9NKrCap1UWb24fPECWV6zBjPzcUzehZ2hGgDHRC38DAhFd",
  "key13": "5Mfm1N7PamNvSjCaYAV7dTMTzhGmVzSRRHChGQAX42nP73hgdXyR2rcFPKHnUEVJe66WH5487hVupSy62m28uCAp",
  "key14": "2dJfviKtLmwVRL8oNECMtcv9uwzQ4iHD1ekJwmkEBioj2N39Uq5gFCu98aK8nPkcJYyUrGKy5bXqUrJM6nNhjbya",
  "key15": "5USyryL7ZivYeq7UKF2J2mvruvbQEqMvW8y2ejxx2LfSyBoAuRnzAw1Pvxfg9ctU2cFzS4sc77cx8sQkgfjYMQMo",
  "key16": "2odW4MGkopmyBBqeVaVzFnEsY1UCehSaW1Z6cRCY7C5h35VVYjUGhWooMo1ytTFnb5N3jSSEA1zPVddY5EikEiSg",
  "key17": "8Nh6Q3my4gkTEDoU6B8RJM2fdG18kn4EQcZdYo7Yz72ETS8SfJDAD8WDVgCJh9V7baadVmH9aL93EBmPQnZnhXT",
  "key18": "4HkpypixGT5VCkH6u9WTvu9d3SB2YkYSAkehWH6tiDnMukk3UdoF78xDCDN9nN7sHHxxF6iW8v4DWj7QgUEbUV8h",
  "key19": "4rRoovpk3hUvZyJ5SLBppvwyeVvRwpMk5CGPx65a8y4UqEheqHYVjswKc1AbLBSF5WwPfvHoTTyFQa1R5QZDLr2a",
  "key20": "3MvSu2ghCTGoaF92C9YW4WY68GHGc7zX5YLasmuvYfntfBjd5YDi2WBGPEFwgQQvnG4zUbGCNjfWfTmhonEDzpoD",
  "key21": "4ae4zpP6VvS5TBfTmhm3aT8nZscMfPussMkqYG6w14Ty7tkJgn4Scg4hdZjzEF7iPMsKJXmvqNRGYfXjqe9SUGJA",
  "key22": "3iNq6tWX8hAE1TdKNGYACY6ZJNHrMb8wZFC7nNMF4ziHMyeAzQeXkfEdRQvKZMVikUdov9E4mVgbPQqt7TimwrU3",
  "key23": "EVHXJSQ3wXdZ2iFWrC1SHFwbQCdHAatbpMuTWStZRU7934Kz6MYSK2jtVrJWkrF17DaRGVyiccDSVATd8CEQuaz",
  "key24": "4Cex54FYXD1DpQr3Jjtnwdv8bspkHR13pNwojHZRzu2426EGWinPehCRsQnHwFTfrMTFnqFmjZSWjDBYsBhMFRwZ",
  "key25": "52dX4Zy4UZsPsPTS1y1jcdGPARr8R3RqtgdgntYiQYzwcHE5X8GN91WzxA6hwNYU1VdMFMCfQYuUok9ahEtaRhgi",
  "key26": "3GqPhmfPWvmY6SMgpqA1dWHx31RBcHY2HymLsATCGDEE4yeyHxviKRAvEXvjXpUpo4i7yPHmgmKo4k7CkELqNygj",
  "key27": "5KqFuYV9dE44MZ5WPj6iY1cf2tQkdwXda8pSPZ9RNe2zNFYPRiCpU2NCFT75KmdLdrKApGetmrqgpYU6euLYf2Ti",
  "key28": "B3dRcBGNp98q1K7y2DWmvnxmLZFHmYCTLiYqMs3VSLffeAf5CsjPnKc4pGwqp3L7hyddcgn4XcyJrtpty784v9w",
  "key29": "2r7tWtUcoaGf8tXmdnTVNnpnuSvQAZ4QSLoCWW3QqvrM24JsE5P96KTF8zhbDhW13QgoyjKZxQRD57fVr4ZmNAgt",
  "key30": "5RPiTF84EpFQVpgPvfV68eKfH9fwwfHxrbg2g7yZ9xGiBiZKinBRDgVibDtU1oj4K9viBsm1cjc47HfY8p2R4USH",
  "key31": "SratSip89S3otna8LRN3hgqvwj2DtH4RZURggagTMGLvEdRJK8vJP2UTSZie6CNCbEmnyipK2c6SZhGCyxJ58Mg",
  "key32": "3Q3UoNRs2NPbRk2qjGfspN2S1K61TtXeCh1FS4bzLiz4EPTyE3YrKvGx7ynRt7kzLxdw653WrqhLGBZqFxZMjRPx",
  "key33": "4yfVqz3u4XuaJUgusomBVdhdoBxJ2tm9PQVnhMYPRxHmu82dA8VAUHEby1opJd1NFuNNgbFDMoptwAhfPv6b9Keq",
  "key34": "5bCEDfUr6GrKiB9DzTT6SCg6n39SSkhVmPn8dvb6o1ioXkngFy1JnhNpHAPaHxS7LEMNMDTsRXWByWnKpih5mrTi",
  "key35": "iY8cZ39FeirGD5bmsFjqhLpEuWmsTp6RTW9WLUFCr7t6Fc6c2rW9Jv2SgUnNJBngWPQ6ArgmkDiH2Dwu7kMwT1y",
  "key36": "4UdYJVQX3TBQ58CnQWpZShcKv36SctxnyZDHfuuyN27zoKYvixUMC9jSMBPogQpGuBbfhpHQ3Hv8iDikT6z1UZdN",
  "key37": "rvZzBjet2U1LJusMHp2KNAQA7J1p4LbNSW4HwYxKbPhbvkFcDgwB32ptZJfG5rz5kUN3ZQvxf1ogWVtTdW1VPmd",
  "key38": "4fWzGWVZAkQu6NDqhdqHR1tM19jTtnYycD2VXmhUoZ7o8U3hptqr9Ru6ueWkYEtKjnReNfw9R5bh89yFrSNyTrdU",
  "key39": "5gerKBjySiUnMeLYdWheZbq7Fm7kd6ew7Ft1tWBmyrGj3rvCBuRRBHcPf13xAanu9tuMa9SKmxcrSTwhXJmUaeny",
  "key40": "55JAsfNBdyYwYoBbLjMc3svqppZ2wR5mPiTc96MjHsFFHEsMNYijt6cW1J8eM9bKSGK9wNyapgeeuXxAnDLnUxhJ",
  "key41": "7m29UGpq7Cn3z1GGKHx5UtuurR6PNkDFaQPFVa9FRmC9B1th9RzHwNGpxj4EzpMJACjbakrE75rDgYdzHveeu56",
  "key42": "b43ETwE6pagvmDAdCei7sbpr8oSvzyS113WBvveUAxpkaHH66JQhC9pyHN3vXAjtXybrPUjE5c826c46NzYw67d",
  "key43": "3W16juESrU4dVPwn4yemBfKzNBvscGJ1Eoqqsb5vR7p2FXbLq5LLZF2Dd9UMW5Fhk8oxxXNPPEkzCzyQE1UixcuC",
  "key44": "4ku5UuRS1NEdrxRnxiU4Nn4wzN7Xg5ReCDNQP1bX8R1x1G6XyuoQRDpCjDwfBApic9gMBZ7vw1WQboV95neMjvRs",
  "key45": "54wqDKfcjmSJeLp6SWV9efLWvUSQvVhKXp1AvyLXDcj3rqsmbN61uCSPLXZ8izKMNMSdTdjZtTuuSo4cGhBTriTE",
  "key46": "5FY55yXHoWb6RYLZaWeRaEGAGVKiQ9FNg7HALyfeF6wRgvJQxAc8sHFbuTkTGG7Lq8c584ShzWFaSs2DU9GHoPph",
  "key47": "5CL4hYyQADVPZXqLb8nsGNuzohd2exmrijQPgyma6B5rY6idoQ8mz2m8xDKmaLLpE3CL9VqexMjbhwzaW7uBcnvp",
  "key48": "zQz8FDtdpfeNVJK3HCB4GnxwAjQpDjQm9C9F8dTPgvKsaKMMhWbFJW73FurKKK2togFgRp6awvseop6EjPaYeXe",
  "key49": "57yedGDLkuXcXDGySLZ8p8CjqMCFpB7HX1QKaxVch3AJtigMCMEeobYyCCyBpEvnfJSJtxc3tF2X9k2i2f8V37As"
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
