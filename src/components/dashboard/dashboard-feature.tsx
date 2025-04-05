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
    "2Vvi4abTHAyuJ4yWupyn2z3ahjRwDkWCR7KXVnrGtfiBpe2xERqs4HFDS5VwQEivTqRQsFLoCXHSSpYFRjXFEbKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p9KXDUfxf5t5T5wMWVeMLKCfTJpESR6qmsPbQTwBBiCstTs2mTodwhabDKc3mrjWjiLnMst4oAVxPkfcYzkMjmN",
  "key1": "RAub6vhu7ni1mtFaEsH3h1ghd1rUP3m9ZAyvbjxRqqy7cCMMwD6fnBNM5CnVSyHUErjFPrXkhN2ojJzQuK89oTW",
  "key2": "2fYciDNoXVaBeWCV7ZPBuFo26UJ5y4drk4ay9Y8ewwuCNdv4zgz1SqWoA6JnaBDzUgeNQwcDExyQnq112eY43PSz",
  "key3": "4tkdb8Pi7ujNBsfZc7mu4B7MigQ6gbh37efEALv1ab4Zv5cE4dswMvWL5AWkR1ViiXpbTbePcE77X386ZHcefVbt",
  "key4": "5pR4M1QHrhDoncdy7ZrzXKiF7ujMVnPmmRAPBzVRAvPScdGByKRRkaPN98QTFgChc5LjhQfavCeyTKhkoZdGZGnL",
  "key5": "3ym98o8GgDF1rjT6mJzUaEi2HafnecYoDqBtUJLz8WpA9RUJXCkhjt6iSm8k8aLsGpaco3p7cSGVXuTDWjvgUeok",
  "key6": "5WxzdfJcAgQdXLLWUo1TtcmeG2RnAovg2pDyC2Mf2V77rQPQbGWFb3Q1k5z4o5z5uGSfohrFQmcVB1BEsnWuEVWt",
  "key7": "5pkktDzT7TRD6bpyi8SP8xehr5fsadEFm1JwHsY1QukeagzCoPnJM5CbojqyRTYcarLdSbpqDYvac5H2j1Q9xEJP",
  "key8": "tt7hLbdsAvs3ruGHtdmDPbU1kYA23vC5FufeNyiUMq5treQCaHCzrh7yQHEtWf7S4tMpyf2ta39Xv8BHQME661K",
  "key9": "5srFJke3cHYjsdLVADFyem7qApmbxxiK99L9SJD1CYcs2hNdXqikPmhW3dCP4qgfBsBpW2ep4kr2PgdSCma9yRtr",
  "key10": "5yun4KJKekfW6HVX2UtH7Gm3BcnDLJtC1BJ1pASU5oik4iLjeYzDUN3Y8ah2aEZ8G4brBrq9CAa3TTNp7HTscvo4",
  "key11": "33UpaZNDzoUx3Rbbmk6aikp52skFZE7KHbSuMeUQ2qCv78PAifg58PfSFmDKddQ3F9EoERVq6zD4SHvZj7A7xZmE",
  "key12": "4y6JtsbfRdcuE1RP4SsxtSTY6QpqwSyWS9mUGpo13XbsBFD6PJ3u6hn1aqW6R7r4rYaJ6A9JyLiDVMMK934VcKNU",
  "key13": "8ZSaAVvgnaAqH3uNCKsQdkCTYdTAyD8JATJWzh5Vm6ZkmBXqN1yPRDo9g3UgsSbCw6f6XxKhj4r5mUmZ7AfzaqQ",
  "key14": "3p23mF7YCZ1fpHx9o8RJfaWacsi7YrBZAc2kckiJPvvfbwEmggfw8WU3PTveCLaorJ4Z6LXm1x5pFJETLAagvpiR",
  "key15": "4Rd8TgHRPuGubFyQhwveB7tcTJMimJJX99FQPheGTKeLT8e7GBVXt5aLT15TW4xdqbVNADt4NE8xvsFRJRrgMzjU",
  "key16": "2xKEjGz2XtKYj5kVpUK475EPcE5tz6gJKXgWC9E1jzhM65QzMSEe58xQP3VQjBzNTYC1sgJ1iBvKtiHnFVtgGELj",
  "key17": "3f4NXqUXQQXNwJkieuhHA35boiWqXUqoZ6DcBhBLUD2MpQKQ3cMtTjSRyKWxvuBrQzjnwouJMh7cr5PEaEKDNzRr",
  "key18": "CKa4m7dSc2SuNRgxr5hQrBNnpfWb7ohNS4WJF9G3Ba6KT17qvSirRj9niyoxditasSJJXgJ2nU7cJhyCZtyHZAu",
  "key19": "3dnLUweoEj2gGR1jYD6p9runVYvV7qwiER9DELgV1ekucyT6fzuRGzrr6HTzwfhnPQhHzGNy88raV52mcT3q7rrA",
  "key20": "4DJXx6FyB8MvkUTBxjRby11ia35876eW8iUwzirhNMX8mRarFDgbnBVMN9ikZQLYQRggGMabxD4Jpi8yzh9rHkX",
  "key21": "63zAJngNJGWqBK5gLcXWAMCZYdScJntHXU4D3ipeAKTCZL6QGR9MmokyYB2hGqiMWjFA8RmfYpHD5RN2MZKZPpSq",
  "key22": "4VLzUyiijPbkv3JA7LKKTUCRBXLzCgZSywgkVFh61CGWtfdQvoAZGMAfSKeWS2aCsvvQFjYDCnZwpuQhUiiGGk4H",
  "key23": "2wZgAe7YmoAVTnBA85CoFez6vDRypUsJ1UyVcdnCqXV35HF17sLQseJLNm74ZbDVD1sueUj2TAzvgbD4p81We7ZA",
  "key24": "s28xjjNjEvzHKJFJ9aWWuga5zXey4S78vBhar9SamMS9H1hNS1zpypRFHFcDFmAPz7MKXeBvT4nwq1Nef7X3H6Y",
  "key25": "5qrNgmVmQE85E5WWCzmDgvrYfNJNTiUUZuZuoHxg4WuN2YLLCoHxZUK9JdXzjJR9Xsof43gJcNsLxVwjVcZafi9",
  "key26": "4Jr8ZgpeSXVJeEoqF8M86EtGFZUo4yj4HT5w6eeqpv1QUL7Gu6JkQWfkVPVQjzHH2XRS6N2hFevnzg2xot4nUxLj",
  "key27": "3G4yMdUWrW96yY6svL1AG4NRhYpR9RU4dahuCAoc4wXGAMbMe9EcRB3LL2t4kbsuV1oeQR2RaTuouAcTB9wc6iDK",
  "key28": "2qQJoB8NBjjmYoxXBqz7VANMyWsbQGF18TBCpMuJhBux3CJbudMjGs8rsF6B7nuPafqCFawfnSEEz7Rw89HDUbXC",
  "key29": "448LEZAwWa6TETpyEKRd1btYLS2neYAbsTM7d4u1iuok7AF3ieB3zkrHUpxJwRs33n62H2tAJDEbgT1LoL7XjSgT",
  "key30": "55VTJYdXwe6mGbdunDRNa6YJpWJvg8aY3zvcVdtPRthWJiWSJTjzJcohKPVtV9wTyXfmWmP4XhRhR1ucKQDfV4iF",
  "key31": "4sHsLNiwNfBX64B6H33eRTBkNz6sm3jQW89NQUmqe5pNTsyUTsP2vjWdCDPREbEiBvS5ewDY3jvXEbjzYaHs2wsJ",
  "key32": "4DkadXoxiaYxx7Fwoynrw52oFLUkU128KtzTerfnDMm2h4sPnBQR8MoU5f33vo333AqvUknc96uipdJQmJ6jVRTH",
  "key33": "4QGNFeLZx4Epf8X19kNCuFLW9FQ9xdK563NsX56uXEbEgenfiekoaBKDFN1Gfu9BkJfYgEpgdb5EsYAFu3GAWRFv",
  "key34": "kjzJPpc4ot7Jfd9zstHVpE16LafK2y3wePLUMTCYYBRjNdLCdtLJWGMi15pf3opg2TZkcah5dnZoCEPxjban9p4",
  "key35": "JEpnFtHjqJYUtJnus3qVnLUpntTkg82BcVRTx5MT4nJvQg22UfBFTg15koo6WuG8BeNhQ5mGF8PkWWG8rf3uKiu",
  "key36": "37wp2bP37mn3UxxddgLQB4PtywAxwvkcdjsEKCE59Ze2CXWpcTT59eqZSbTkcRCjQco1WrFng53bqQLcJ51SLzjp",
  "key37": "37RJfPowuR61KyN5AssXLffSBze2CEezWHZvNpvazbqEAcZdeGHBV4UBd6E5EH17VnTvgStQ6aZNimrMwRiFdpCs",
  "key38": "2Bo49J25qF1pgJymnBJHtSz83YnmneYf6fx4VqyXp11ge4byGSpBjBH5VbXaaazStH4pCbecxBJPYcpqkiPRGYXe",
  "key39": "2qA7mdh28zmWN8dh9rgYaKFY56kG3vY33y4M744iV3yAvT4o8smPcTPU11T2DMA4F3BrtiV6UVcxXijhFF5kE5g9"
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
