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
    "21d2BgrGgScVzpQL1ntaJQoHkuBb3PwTDVd9FQRLNawez9VZYfPWLzXoSfdLvrQHeKaZR3HCKcFZJP4ViXu3JxNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DoHyericDVbTbUJ9HnzejdhJeMWkJzH21mTqJ1KyxD8XxXdKHL4rCdTp7FfLVtdVEcGMEqDtKQoLm5RMJ9q1gmV",
  "key1": "2MuYEmzUFWh4f86X3xdcHq78AY82EkXeHQPfXKr6efkXDTpRN9wKxFywt62QMK9P3nz7VQx3ves9xj59ZTFNh7xn",
  "key2": "57G6oHbRiBCSQuoc2LnPPFchsJFo4hvBeRtfYx3ycbgsvhvANDoB1HFvgwMgC7qPbuRea1BbcvNmHpyRGdbBfnGq",
  "key3": "4kAoLxCJQZEXh4VJfgJ2ow4m5Bk5BQtmsdGkp76h4GBR7yeDSZq4EQ4rGe74Q7jvzuUkfJD2Nr67c2EXJbjMj9m8",
  "key4": "5XTCRQy2MybcsUYgpSvQpdzAe8HXMiVt9nrzRtohDmb2r4MuakVpyRLCqxrskauuvqoE3CgW3f2gsM7TsDMBCyTP",
  "key5": "3YAmB4LKGVVpzBLDgPJ9riagbK4o9HeSi9pzGb8uGzupXMEvagCHMx56ijqhQwBTG7HNx4r5NfwM6VpmWCTzNgna",
  "key6": "4tsPNsu7BhZX5wyeTGrBXfzc7Zy9jkwCB1crfX4MuEvwB9VF7ALtcXc4NBxyy5LJj37REDdxAK1NpkLsxgry75NF",
  "key7": "42AWomAiWYiTX8UReJdLMGGYQZC6Lp99gjG5Z3vwm11hk4tX1fP31jsfJLTmcWZZyeMJMSsy14X9h6xRSzxBwJ5t",
  "key8": "225dqnsMXXGiQ9NiGozBitZV6EnZB1uwTD6VPLTLaFzZ2cENT53UZqr3NhyKChFHfirqtFBeaLXH3oEpzoEKo7oB",
  "key9": "5UbovQYQAXHe1jzNdztnzkwpRhWy2Ly2s7XXqSd17nPs3VuMhKkwtNfmsCi4hfE4BhLM75rnapKGth1R9f6ynRvG",
  "key10": "ryKYq3HitgBhKKbavhUMXVvP1LyDswnWF8aNmXwBAANiqKYsXuXy44BuJ8Y6wdcx6RKuxn1n7ZPBF3HnxL4SQmv",
  "key11": "5KS8mztBBAWNrZnX7cMd2GkMUNJmimBZFPmnsgXKk7VPdSVivS473swo3ESSGVoXgsB1gdEi4xqBnc36ipk1JEJM",
  "key12": "4eNHgzS1DqjKSDnTQLDGA1NnpqdgNaAJniqv8ttSERxL1CoQBXyd57vzaPTghB1tpYfzkFqaixtkcuZUD91379Rs",
  "key13": "5s3PXAvUaMNwMWjnjDfHQbMS7GErdZMpdCCHRmZd5kEuE1rRHK49UBG1MZXpQB672FJNCX4NcfQjAHuhAKHEhEhi",
  "key14": "XACbdFvEP5WG4WGM6AAV4SvLVSzCJ5GFAaTKqyWyAazrms2kPEdwHHJRFwnSFCup2fFC9pFDE8t5yVuFFNQjDkL",
  "key15": "2J2jnqJsrPwAzxT8sJ9iSDM3Wu5T1pbbF62fBrUw2Tw1yHahdboeV9384fFn7tfxRquSWwNc5DfEcioPHAKmBtbx",
  "key16": "2iATe4CFqPJTYBhoiSFwGW1UEr93GDXSkgHPtGb9xtrWDDSz7SJHGkU1HEf6s5mWfSN4tvQpQzdHUXKjwhDGZCkT",
  "key17": "P4JHsdow2gVPMrzKirNNTUQiyBwsx6YoqTf8cFDCqR8ZyLtSkbx1BQWjUVqKmd2y3683n6K9Q848X1yjUTc8v5e",
  "key18": "2gmusKWJKwFuHv9kZYxycpPzrSeonryEppGAY9NkQqgnnVRKLXxHJikQTM5gbeCbatabxNrebkYwzBd6oywWoZxq",
  "key19": "4YJBUx1jQT5EPfXWoh3uUKq46GzfEtKdgzMKjJuC3wA4daG73QucbYZhXns2CohGWWzzSMKg6B424x7eSvX5Ad5m",
  "key20": "3tM5KSNoRE3x81BdpoT2uRqjyKP8EXfDx6LBDbSP9iTPMxD3rWSbmDK6MJZHTsZaLNLaAi2qjUrq4u3RtoNYGHUG",
  "key21": "qWgL13uYJoFKYCBCrjndA8yRQhtWj759ziK6Fza1u7XWPAENDrGudqVr8cquGcmfUTXncrfCj6eYSLzrcdHv7F8",
  "key22": "4wDL9d2iwmTtqwPz4dJcDY21y9dkRrfAUzNja4fo9xLRPUpq7UAqVeX2yizKFUeEZfUDJCTuninmBUW76AKKj7zp",
  "key23": "5vMoNdaAYqLZnJmLWcvZR9RCPiSCejd2zbc6ideDr7QB49AuZAH4jVJbRbmcxTCWqnxyXDhSV5QVvjAXv9AGXW45",
  "key24": "2wKKieW5SKbrGXdaXpGBthLRaxgX655wcWn1i7bvKkxxGSSL8rajm5XeiiPgcfL3khEvukzUL7LPBCrDqgZMtXGi",
  "key25": "uosy8Kimye62N59k1MAFd6St1TfFLXh9AbBArGVqp1jerLMEr4yzPL6zeSQ28qMVjvp5HoFRF5sz4gFCK5Lb6mh",
  "key26": "2i3Wq3k8NdMDdSF7MSBBoruekFpXiTHY1VbRLtRCu5NS9aS5yqLNcemtDQnp2RaZWokokfN5d7itLCW2WgrtUhVw",
  "key27": "4QnL5jZrUhnCmqCTqx3TrU7k35ciTu6Y2RxtDD3ZkGBxDXFQ7kwKimp2sdBemGUe1fjYTSZ2WNj1Vd2M1mea2jZp",
  "key28": "3fAv9XPh9ubZwUEvXEEZAwcAgeaCS9hthA1HQDrXWjXeAAekiWwY5xu9SjXB4e97XY5rHrNaGscFH5yb49ZjET6E",
  "key29": "ibc88BskTejthy4MaaMsxXJ8VtSkzvVRCE9dhjVwwC1qLXCjfEdHoyYu4wXk4z7nmPxihzomuG74puqiMRWbdp5",
  "key30": "4ZZRmoqLXycY2iiSZL6i3nU4denM7QC2F6Ji3sPMnmJUrt5jA9LqEQbZnFKT8CB3XPpKnBwbxuumF3QG7mZAv9Mi",
  "key31": "3SSJU1kTnDqNMtSWJSDsh4a12Hqu88yDAhePE2t15Z6TKJVzSZoivZ7ajBrr6BW8EfmgsWguovkvUKM6VUzVpSTM",
  "key32": "4gyNZCsSPHYiLuMVC516Zj841mDUGT3ytkajR9P5iyYsrTxDkFdcWcfZ1fZuhkqKkwWDtbKsB1hzoRptsmn1ow91",
  "key33": "21EF71VJ2SSmgYZcJ6aXKZNyYJ8BENkaJuLzNV4F2XUzD9Zyd2gLnFQxav5cYmmdJahqTmDVBDcBbXaTeoaZWXWH",
  "key34": "2rocHvTKdev98MRdHTJXEVYj3sgVC8NDc9sANpUpgXUQisWeEUA8C1rcBwZm22JfwV6d45GvfrUcdHpxm2gv59aT",
  "key35": "23a9TwQeKe3Mp13KL4hK9FVs6vtR6WuXHLu6mThGGok5RAtFqAhC5dN6SMRyK17Qs5o7Sa3TNR6ZLhWnygvgjtK9",
  "key36": "5P5bjJrXWWwxY1AHE1ARUh49b5qoZp7hALnN7JDaecqD9V75f4KaHeDT8YPRYpepyzh6VsocQsMuZPLmgrE7wTEe",
  "key37": "27KmoCiywDewatuTtvkqZh8JDXyYUfdSo5Xr7oT7gUD6MhoqA7xLY1djKNoPspUqqnuyHCZJevCT5Htghg1hVbCr",
  "key38": "2HYf1qcYtAPRaFvC7CUkwV3pEVxN1BKY6sWVZcgE82UvpbAb6AtFTTTMzV13ocXmfThkayQz73Vm2YJ5pwM4kfYk",
  "key39": "5KvH9Qq5Go7tHY4t95A6LwQsJ4etHnwtvJGSyEJGE5UEtYE2QmKYsL4KKtET2BQoCaffogAkNgayByTzNnDQjpYT"
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
