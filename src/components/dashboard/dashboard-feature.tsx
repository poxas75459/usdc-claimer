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
    "aLb5i9u7M296tKakZjpDT2KD3sAjUvGPrVskXjVQGD2nA5q6NCcPp1PUxLA6KtKTos7ZknrtWrDRjqYtN4D9VSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZhCEP3dxoFuJxDMKQj8oA2641kr9CZvfPwaoNMosFpswVwDgJYgZiKM3ZGejkhPfb8SvdTzhs34k7MmRGExeXw",
  "key1": "9NU3ujJYHVPkrMkrFdjNqh3oC8BRSkTyUqKfmhqpKvAhz3Lc1fBuHitkiGohfTAxEh5PMQm5x4H9UC3veJmjkZE",
  "key2": "WBAbHhvKj3WgxQxHYCG7aH77xMsjpbuK2fyH8HgQGHgvMJm5tXEn5mwAa7ftKqPahHHLhEdqtjzttwPPrb1HVQV",
  "key3": "s6Zh3uHJDboCXLLpSLLoFSehPD6fSHuE4LFW7pdE3AyAjdwCVh16SpY34PGpyg8EPabrGwy5q9As6N51G6dpGhj",
  "key4": "3vMwgTZ96Rwr83ibLsdMf1zqwSwzYsthhDvexmr3jaaHDXxsg6Wkvo77xKzKAyoKN39tc6Mqnn8VN8qkDq9kaJ2j",
  "key5": "2UzkCUpND5ESpwGqBayTA5YvVz9A3bwxBePCR9qzRzvBNUYPfRty8nqb1RqJyfwHBMMAabHcGiDMBsKNAyZQYDXH",
  "key6": "4XdHTHKwGngu7ULvud76HLiPNEbvfrZEgknK1iCgaWYc5e78uNnCdzsE5FZG3pby1ZktJvHF7LnvJGPhh1cUzhZ",
  "key7": "258Mf6Uqp4fJstsZQRooYnPNGeWXSvwchBDFr39b3hbLmQaJcGpQWXxikrXUFwf78mKn73weShQaYXgFCKcTHH9u",
  "key8": "DoZRoxPXnYDcK38ugo4RitbJPsoa8ouGo9o87N96wASnaN824nhmS4TJNcJExhZiUqn26D5bJH4i6sKz6GiANe5",
  "key9": "2Bf4SMM5rhzv5S6dnXT2Qt351UdNbzNyDykyi5EJaYEZB2NmDUvrayHZ6BamW4ybGwzQd9FznwwVjwCTdrSH8Qyi",
  "key10": "4bUjkvJZkEoigV2eLPX8vBaT6PPfRiiRhe8zFkonBQ93Yp4gbsLRDamCJ49aJuWXXSLwNrksDkjVi1D1YrDfHCzU",
  "key11": "5r1cds7pC8fdHYbvmhhE2ueb31p4PeSF65sNEkxSsyTz5vgdXrxd7UXXix5LSgonKSpkmkinW81ugec1sXjidZgQ",
  "key12": "NYchDLix7vEkm1Fqt6wS6MoGcYpd6Q3JEuV8MYVSkcMq5bt91js64MXjp1GCbSEZyGE813PJSPgcCvYBUq14VSj",
  "key13": "3zYx4NwxtGPT87gUoVTkCGD6m5pCtkNT2xb7aZJfFfouNMt13sF5rk8fRMXoZ7xUvY8JaXizTLPDPJ4XavBkKmuM",
  "key14": "5FQEwqFL9T1Nhg4WZ21kZsXBSGXUNKS8dU9fzBEUhUaBR3Sjuuz72JKsFG6MpAwiS51jbhdvWbFH1mNfNCiyJsmo",
  "key15": "vtNaARENCozJjbTFCNy7oN6mSQykbTffZNdSGYLW3WSdAHtgGRF1mrUBBjnqs6T2WWEuQW87RG3jcLsZ2Ddw1Px",
  "key16": "5hGrusozG5b21bAn2FLrBEGgSW6uhwYpGPzATtpgJZaNsx53vGpJuidzH73MPZJcH3jzfHZUZCxpSbL9RPPWUwQq",
  "key17": "3m97uCJiM8NaAYsRyAhS3ohuzSSQY6qnf2piYgSmXo5vsffm3yFCFDpiVngEcnaqM1N8e7GVDofZLazKY315tk4e",
  "key18": "4AxLrXGLWksLHp2ZhmsBy3HWgZJ96wcx7wFLnWdNokP9vJnbCw7MoN5Z947GmnYt8QNMx45y2DZhJYEjyiKiAgtE",
  "key19": "4P4f2o77GaYzMWsgeuaYyhPfXszTCViPaVndyFLvJvTriEWBcVbpKjiqz7dBi8UB4uCr2dx8YtAK1Sj2TajwRyYL",
  "key20": "2aAnPMDcov9EcPzSELBAoobyXrTUn86FLPzp3qCYW7aLAEnSXWweiL4CyL3dyqf7RpYH1uAgEsakdMS4vbY9rKdm",
  "key21": "3A2Nb4SeKSjQXPfV378y4Bdn98A1coNuAC4byiZYnXrcnyf63bVhzQpRc1iG4D6CuQtmeH3xcru1esmdWhcCBfSg",
  "key22": "cpjtEa2YE5jNbNggV71QHsEiLAMMkmkoMRMTDzdA4dER7GiNqiwQnuiT3s4sBXiZYYwRkSH1bvLycyyYpgkydyc",
  "key23": "53QRXmkm8svwpPSYKy5d9Ctze2rfppDNchYUTRqLgnUihkfKoZ5GiwHTEQ6R3AoJEBmJUJdKCtSatNNfAAAVv9JB",
  "key24": "5rZGmXZrRYxJq6vSi6VCje2TtrjKdYHLNipiESsPDZLsZyZhbXPynL2GubAvAB3ajrvaTuwqFBhXmrmBRxKhuvfa",
  "key25": "2Hfq4CKeETcnd15oL4TvbkWknALJPfQeFS4esjk3vTU9NzJ8M8SGT196tdRn8XV2SJxnzMLP3bQyTcXpkPPqNqG8",
  "key26": "31G2ywSuwE3S6NTLmFe5ShDDNjSCSSQwSLzZyKXKJGjx7BjgUYK5Ycfht5ZB27g2dn1hyHYrEZxCRf4EW2787L7B",
  "key27": "8rZ1sBqs7M3Kj8PRcpU5KLNN11RdCiXpMrC3QhEYQp18st6xkmJesct2swdzSDaxEbssxdH2KqKq5cMa13HcVVV",
  "key28": "4pjDtHQsWyi2Wbrox4JNzcnMgFS81h3mfaJPNwsQJqVMR8U8vP3YBvzdRA7KsHfJuMA3GUpPdjdoPAMAeu2aQyii",
  "key29": "4CXecpsaZq7yje2rPVe5q2k1etEWxUbX69dg2e6KSyB8ESqGFHmnzuq7sfk7FGzdDjr3YSam8ohBjgDEahqUvWW2",
  "key30": "469ohMYkuN7t56L5krTe8iSHNi5sgUxaW5T8bqfUttiFGzguzpkEKiYsqGQSVZghZVHXG9QiVHJbt3ykgnsHpkwF",
  "key31": "rFjeWsS8CtMbVXNuzuBUVYvGwcMsQ4dAXHwQpfXVuMbb9nhwAj4hsvEeFM2skNcUiDUqmkKHpoJQ8A1Wk4GGuSU",
  "key32": "MDRLvNbnksQU5Pv2KMbPmD459tmosMkFf5FeW971fthN9TmEDE9j52WsjTd184rzxYJ8S2L8RbSY8EF7fbFqPk8",
  "key33": "3tAExndPSjyRQb5AgoQqVPJF9QhRvtnpucasrDpEDrZTgMED9UdaaD3DPmY5JXQWjn9K6GUrdugqx4dtAFarPzhw",
  "key34": "66XBGGL8wYBsLpVipwdTusntZH2UBHwggjWiv7zjJ193AQPerSuQ6oHL36EphG6r7L7Dy1h5sHYex1Nkqbj7j43U",
  "key35": "5EuWzZyJtyxSNFF4P4UB7BNU5ssnQZbicuzrTrG571HRyEbv4QrvZd5QeE8ivNgqk4LEJ77jcXwUvay6AERa6CBC",
  "key36": "RiCsjHYSyiS5o5CGBFUrEJTUHu7V3uZqaJY4ekDDmzSLQh6YnfukPRozwbPp38GnVfNUgHBphqyDUPkSvy57Ht6",
  "key37": "2trAvsNs2DGFgneihDJG8JbGhrH8r2oycDNQ2CcU7N1yjnRqacCJ2QdZZ1Bjmdo26TUYTUtsn9mzYiRvRof5Tkxk",
  "key38": "4gRbLKrC1nDevtDDGaxMTZMDDpu6t8Mz8ToPUWYjxW4srREQVJhoo1LoUxR7ATX4HL4StMe9Syc3mCYWjMYUxkCK",
  "key39": "29Vvv8brP5P2wdroibQmZQ8ebfRwrKLqhurzUN44UQboPAQgR4n9MLZeMHKcU8CzYfWT3rcysNR7fm9cYie6tzee",
  "key40": "iMmf1BphQMDFXAbLpBWFfhCypqXxB2vU8gXMJb6ay7E2Dc3svFXbAsv4uZ3MaMgzpVCxH2kXu7snodvaap2PPLs",
  "key41": "3go2BkNDtfRnA1mqcDQP496bo12QyLcYP4EP1sE2doDvnqyFJB7KQ6pE1VSLkizmywj23k9en3kLPPf6kQVWepdp"
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
