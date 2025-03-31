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
    "5j8pxHeqKrfxbfYoHkQ5cEBKdy25RdLH7oSh9oY52WkD3eqNVddYNcwwdDuuHaoWxooSs5jycH27eJtcsCbGdQpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62B9Dcvv5Bbnv2agSpUzGhUzunmn8goLQpXvquG5AkKXC7VahzENy4QsJMpcZURXDqRSXZLhz4bYrsK3g13PPNtZ",
  "key1": "2iidvdu5mefey9dQQrFfwAt8JUdt7bAa5Lh9xu52XuAXzoEKdvSJqxMu6RxeXnNEKMniQTHXuVzqNbghy48tr6e",
  "key2": "2ZpZp2G6h518s1wnXEhmwRCeYoyKX6YNTrQxT7oZS5Ybx3WzTZu3NusbtToiuQK7Cmf21XtQcGoJURVMwh7a9Lt1",
  "key3": "BaoT89b4ERXNUTMnHMxTbZNnG4FFW9Vmrr3WB2yX9Txv98KhexNZBJy47rrCTYgTPDts7NFXF74dzTxYSdBnigz",
  "key4": "4ewkWtoY23WtWQQB1bxBbedrSv1zLVHdzaEg99rfvJ5cJ7gh4W75esr4Pt723aEhETmyJsDLsuQXEPDwMod7dgbx",
  "key5": "2rSZooUYbx2GNuVBk665dRAKkcVNANCaiknFsbNapDzT81W2BH8paxNqzD6DPtK9gMXUxQZY8YrwNoFjF6xhNSnd",
  "key6": "5HWk22uiRTKGYBYgmR3Q4mL5p8BK5TcPjK7aw5qb37EenqWQ84BwYbtM3YNXmq88HK47KMTJxsraRNSxdAgYuL6p",
  "key7": "5kYgGR7JfqW5ifoVPLsuWSSBgUzck5N3PyoF5uCoWVcrmwFS2kJcGtSRkBuPjJ7PiJrj1PizQPLtqNKoixoxeVCS",
  "key8": "2JMRZEJc3bCD1fYFhuAaPkvuKJBhz71ZWTo1uNdikBscGxgADuCvqfnh6kWkWcLJJXPWn5mhayyqRhCS4KwC6eFi",
  "key9": "2fLTx2Dz2qystjj82fB9APsJsSmiYKd2a6iaBbmWi6KQm36gQ32Dkwh9tP54fXHqimWbTSfrCRg9PLFQ8JrbDHXB",
  "key10": "F1bjifpsK11hhdEZHHTGBZzheCqHVp7BrxKsWzWczzzvhKTrckhBukKnPwXGJ6jZwPUWVhyFauzPwmpE4JiCCNw",
  "key11": "55eXKWBf2yxx4w3PZXis9PknVosLJMFSNyEs3YmcEPGoEdr3Zpy4nWjJinNsSvpeLBLxLVsJLjxH2ZL1jGSWueFC",
  "key12": "3qZkmtHoxXKsmgXF9Kck7xh4vNW9mQH5fbvtQLc7PKGa8Xb7Vc4taBJ9JVB2sN3iXwxXz5nv7ym9fL7ke42uXQ2m",
  "key13": "38rY2HCdPwTV3o8NyvWQQAMmwjDkajGNzY5ebtcymgPHMKKWSXM4sKnDCEr9vnns3QKWvXSEXkXZQ8nw7G4u5hX6",
  "key14": "49ocvqPjqt5o97kn42VtED4tsfn6fQG4aKreckEdoWwR6RVr25dTdViAMrFSFMQsJcT8tNbmysqyfVxw56kkBgj8",
  "key15": "61wUwvw6Fz2fRDBKBAVSMsEMCquzgfHrNMBrwhN3eyezyUEBrQy2Ti22intfn5sjDQ2AChWwFoa6HNRKN6BUjdnt",
  "key16": "4NFHQJxUi6EsDx1MnwwrhCBZSjReYFwLfch91hna9u9nnpF85PfsxgWPHx2mKznyW69cbZgxV6vn5AL5miCfEB9i",
  "key17": "35c2EHZwsScrcMcHf8jVuM8H8aT8cyJbBYXtofx8GhwsmLKSHjxsLBsjLG9gckbF5hjGKuMc54Ds58KsPxMMrtN8",
  "key18": "3Sac9UQjWezWr3pgVtBtVkXv5V34KdgTCQQYM4ym5GcF8Zycgw2ypFjk6T6tddi2948FhsebQaVUBcxma8DsBgqJ",
  "key19": "56U4MzCS3MFm6q5gkyEbDAtEMLVRp2fhdLcYcUTj3nwJ1RHfit5BB4PeFX7jydK2ouhzeoE8USXRfdP9YUJEJ7G4",
  "key20": "KAGaCYKJ1E1rFxYpJCK3Zhk1rjXDJHQcgMMKoACvzYJfw58rY7LYuRpUcuRCuuUeJoPfu5zhAQ7sVd8RYoxPbke",
  "key21": "Lw5vVPiwEdrRfDXtC4iC1pNoDJi8tQ96n4F1mfbiqjRMqU8yYAJQCmkMRXQEWKEgUDrJMKWNUQHJ48wi7pypQUD",
  "key22": "3Rc2VmdkxDTg4k9XZueSj2FCB37RPjYS1xihs5KyycwLL3X1FTtLhmd1phtxhBAn55heVYUViFwy255mqoPmFgej",
  "key23": "5GkoCgwBRaUJVcSGeeWgooBGXAik8aUMU2NEfiutNmXSdA19CGfApUuUe5zZkku7ZFZHvS3L8PmHMzhkg1hZARoE",
  "key24": "2LsEKtYzvuN6WeT2DcmQ895pg1kJ8Pp7ybZ72WMqstoyR9PGcWQGbJEAKCHGT2gcuheP32mczk9eLHZ2p5zj2YpZ",
  "key25": "3SvaJmx7QvTkhkvJ6MgbkxaWcRQKR1nqLGbT2Cmg3oRMSnMSBg4ZJFwse4kqa2kYVAz8ZTfYtAD7Xsc6wBFTCSNo",
  "key26": "4p8abf8UVJsFrpZANzKfFia5J2Fu9x1uQGFzkmANKnC2pygV7qLnQRJtTcFdxHk1mmbsFqpznfihb4Ha76VdK3To",
  "key27": "4b996ETfV62fvkyo6SbMCaEt73UKcvMQSxKsjdqf52AKoZbaf4ockTzZhNro8iE1mzYCdoP8uLnJUcTKZcqCjEfr",
  "key28": "5XJNghQJVqwrVxWN55q2YSRJWYymsDQkSSL6SndRy6CkCq6oHpNf36QANWM3UAbV4pvZ6HWhQSV9rQVTfhENcAGj",
  "key29": "2LPrbrw3yuUaWTpvkTQFH33HyNZNGaATn3uUQDPgtSQVCdsdSMAUrKXLmgZ7XQi1fEhYnRxAq4iXZpVwG6iamvcZ",
  "key30": "4rJDNUedD9hGL7MaLZm9t9ze8YDjB2jfEQHcoNS6fxGBKpqTP13SFkPnEw51SKAC39CBzq8wBFqFmm1fkqaC1924",
  "key31": "2t26MGJoSYfzVra6zpc7XUTywDY5mXw5YWMHJ7ZfUM4SETnFXeZtwTzJa2mMVutw3p3CRaLxh3Q1ewfSMzJwakkQ",
  "key32": "7Gm1L9zre7bwaCaX2myo9HQLmAbBbJkkVeJHmTZpiX3ihGFMJ5CNbxZxDKfyKyksDGWudqAe9RaYPNjgrpVU5AB",
  "key33": "2LBRh1dtqfbXuaG5MYivBgZDsv6AFtChwFKchFwqTiwaJvZBiXkGEWqUpnad27pNJ7wvromoKSCqPX741MFj6SM3",
  "key34": "2KNXRNcZTodUEu9pjQ75t27RsgpV4i6BQ3KQfVxPfY4Y1nTxxuLJBYtM2VPsjrM5QTKoYhv1mXZsFz1tjyRbbJ25",
  "key35": "47QRaapt8guaPZbREcjRXJozvBPcfG3JYa8ssgP6yvsx6FfvaDLSxqCFbkwmuKiarmsM43xW5KbQh5pa8To4KuNx",
  "key36": "44R9xCHQJQ4Q2XWgjGtCV9D9wY9UmHQbt38We92GTbACg5gGGa2ZVP2XfrUqoNoBbmnHkaoRCk6VuowFXZ53RtJe",
  "key37": "2WUF7kfjP9AAF8QktJcEyNcCpWNc8reNVhWRNJenuZvgpf12d7UvLGZPA7wGsiC2RhP88m8BrGYtvJkidTmUMrdn"
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
