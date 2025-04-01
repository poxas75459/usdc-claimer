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
    "3Ts1yx4ypcpEzPryT5jZ8ZgvmZWkuXv5Z44bvyXYf3H4tkLUpfm8fsHuh91kNxiJrbG7GoSDQD6qGnbEeqMpbrDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQkBPQsvDrhFNMnMxnHaJy5JLof7mRhMBHtgcsZe7fZxFPVypLyK4UnQuXRSBJMYZVWxizPyZpWAE6arZDj4vAW",
  "key1": "374rKbMDKYk3GxH2AzadPibtG6jHHpiQm46iYMakz9yDft93CkGdRMtUZcSCiGsw1inkbLxTk9w5A5Yb6pANkeNc",
  "key2": "3ZPzoep1gRvYE1K3c1fZthL3G1mbKBPu8FuHRiPdBaCVXTvCqEas9JBnCtAhJtUkHBniNAhVio4ojKRLuA1R8jXC",
  "key3": "4WRmM9NXKSskkA85f5uyPTRPBzUMEEUZfXBWDCVM7qiVaWCEGGRpfGsfyemwynFS8mhWZ4rcTzd69MM8Xq93T5z5",
  "key4": "2DLNbevW8GnTemtyWFBZtDymCxvcGtLXdpG3aq1MVdWaw24nBF1NmrzK1jHeLn7sXZxAXhdLCe12uDURWThS8i3c",
  "key5": "2sMLvL6MWW6ZJNYWkRc8gcXvm4nPSqkTfp4BC7iQ865N2hwwNTJSNg32VH1gYhEGT87yotwcNmswv7zYZUFvppnp",
  "key6": "Zo7dfW4wTiqPZYXxVvjE61vsWG2H7x9qNJdmHYiRrDEM8NZn72gcb6R97KSYQ9p8wWV6qWjTnCQTw9YsmuxZu3h",
  "key7": "4zxs1iCr7MoUwzVrbpuYURh8FWeQdK3zjEvVgVaHsr6NcXwAfQ2TRaQsfm3PRvm8H7X4R1NJuqiuEM1Gt3v3171P",
  "key8": "yHsWFYAX9X3LYYVDvHvyu297fP5MPtjf65DsJauT3Ece9aUFpTtTgXERdMA6MkbTkCuzgoqagPq28TZx5zkf4m3",
  "key9": "5ngvAUqiyG3zCPK6XM92N65oK8LP5o6bqMpCpMQ3Rciuydt2gwuD7PEHDTW7aAE3CmgoQBvECkkqNsyrM5nFhtFi",
  "key10": "2FnpXdyLXnapMVpV8cy6ZQgxawww8hd8bVC84W5DMm78diDW74jgnwcBKBKSq5JPfN6oezCsJFFJcpVEPzUVZNrv",
  "key11": "58s58ffndJcW1qhNRb3skL2uTq4DKkfFbaFMN3uB6b7TTQoLLutzjLAsaP9Kt7vJYyhwqQ1Sfwdyuuz4HHUsS411",
  "key12": "4cuYG61TF38UMCq5PM89yfGoJX2EneViHLxrLX6ejZaLfLag6HPNawYwxMa8zg938M7pHTtDjEekUJaXEknJYYjN",
  "key13": "3DGvjN3rTUaKmMGhmUhbR4V2R9Amowg3sQnvDZvCE162vRaFfwN8tAxoeBwGrpX16FPVdFwMZvbepmhVccmp6TvH",
  "key14": "5DPjtZqgBEuWCFRJzWqBbTJR5W7f6NL9N2UEt5FvhDYKxwupXDNbEWVZjUWknS1sCW4LNvZzyFcbLaQx5TTTE8kH",
  "key15": "2cDwdjUxb4VWzjgMosjK4oRjTPe2NUg6vqBziNLvkFqkimi6jVbiJo8faHk3ZSbN6PTNQTcYRAq94Xpi9KEJ1kHC",
  "key16": "3tAujahgMAwaL1W7PqFpoHNQSZUwL8oYUouysyHoAFZeN7WhYuQuyVJx8c8LEGskQB8HvoyY826oHBZ1t169UUWz",
  "key17": "4ufhJpiRvJyim6MKFWm3CrfCaXGcFZ2moGRrth6exep86Cp6hdnCTEkU3AW8fsNZz9wNotSevXjRLWCeQ3Po9vsP",
  "key18": "HJuDpH9zHNFABdTSs2iC6nxuX41kdhtPi1oC1mjz8D9BKBAAhgBFPXMTid8dqCQC6aNJY62v6snygzcEKcPAWYc",
  "key19": "4iaYvW7XJCN74HB2bn942aJ8ebrMxdpDwsLqgPnvVZxcV4pQUqYTvTnXKK5RgbQN1kjwGTEALv3EZQhwogrqKwws",
  "key20": "g6fAd2ix45dqmubTpCSrqgGWN491H8c31H5Kau6VHCzQi8GbXvov6rzRZnKnTvrHjCat7kx5LNgoyGFfHWoLXQs",
  "key21": "3QBQjRFQivbXRnvYsnMJVyVwwaFUfQKf16iFMJPzZAGNG97iexmM7zcNSmyQe3GbYxTy1hJjKKbSfAq5Z852rLQx",
  "key22": "4c4UzzNe3LcN9ST7LNSjSUqRDCcTpzXJtR6Y5Nc6zP4WKGzswJPVYaRHKkcGwDpSePzVfywHikiE4DRpUaUqpKnY",
  "key23": "Tgv1kbSEpDjACdtexp4S4yf4oApCgho7gTRFh9mnoWudwrwmbcSDvGKAQYq6w4FriauU7mRRy1Edc8ccaNacEeY",
  "key24": "217WGzBupDRXTjBmWtZwVvCqATk3pCHu4Nzm39p6ipHpnpK8yzkbWB7BjeF7LBkRydV8mJf3ccD9KKVTyGEYPUyJ",
  "key25": "4hVcXu4pjtM3hhGavm9ERZktSV6P4SxsWAsAzRXAHVtT9ZyMc5rM7FriR6GFn8v9iaWB7JDtCDw69CLy379Um2np",
  "key26": "wGjhDrupgjn8GxQ9ZGQsjb5HDv3CrNxskh1RJxB42NmdrqYbAvFr2hng3BzBBmqzpUjCjkFhoWnz8t5n4VFZ9Qo",
  "key27": "2UggGV5DKXw8KZCHQgeVvUHQbawvVH54sEdzJZfUsvff4PBHPLGMfh4CqtSNyf9deTpuQ7V9fNyndENqZ1KyWPuC",
  "key28": "4whJPCq5uWkqHUgEFJW1PLnDB5c8y1qkmT8LCibWfHYWPR9jjRpZ5cyuTRH5wKy5ABJa5xKDDs8GkDs9QYs7zm51",
  "key29": "3mPNExrfFZvFrZ3m1fCMarRTYGSHkeH3A9RLMSC7b7mqoHoHyfRpxFWbELezFev8588VQnUUf49uTgzRzFvtHQ7Z",
  "key30": "3KarT69vY8JunxhrZK4mM95mwcptrgh8EGtrDhcUHZ413x2BsBjd2TRVCw4P3FFnyyKTANo54LfcYaDYqeNG7tPE",
  "key31": "24nGuBsRnP1BeYTpJNVRtcWk18zuQN2jJaQrwuWAd9dAk23RVtWgB9n7fE7CLh8r8KgVFAru4BkzeMpyhcgXsC7o",
  "key32": "oJceH6P3edcfmwLhDE1MYn9EDQea7U9AsKmDs6YVw2aznTxUzQxQuYA4Rz9weTVdWcshNvQ79fTTYG8mNmkWT1x",
  "key33": "242drEc6MwYU3o95hTH2LE4NZKDwugpaY2PVfANAd47uWRDMUBuRxqSWfgnNBcu7SQJrkYhVtoZVd4P4Bp5mjWz3",
  "key34": "9YtNTBEUarwvDHTJm3ik3ph8ACuMi9YVd7SVVEcVhvLjW5XQAjcTwwqbqMw471wptt8jmdiYBakLvVATSyEK8hm",
  "key35": "2pPjFhmVaQdoMcgH3sdoDaVJDbGxv7eN79yLB1DcMd7ZaDjN22ucd3qRKcrEcLzsAv5QPkNJao8SpTMS8JLvxC3k",
  "key36": "4Ld1bJjWChk4TnuCUWkhMKS1oVfHwPrHGPijSoBWW1v7PDk4MMqSf4C8wyNTrwg38yR3P4UDDrScJUphRcWdJdWC",
  "key37": "DPezPw2fjratCRLV7aSXpMmPbDxDxP7zLZWqAkQxGDFR2TjjM5ZZCfFf3pwRD94AJwCsy1YNwEuMTYbfXF2hkEm",
  "key38": "2phKx2K5Ed89B9U9MWovyTVmpNHz2oxQ2CHqVX42fn3Zaqp2gyCtzUTzw9nH5ZaQtHkeZnmHaNZfMacKJNfZZKe3",
  "key39": "3sm1YcbqKAmFyiBgwmo6ayxwkdXxJm4i9kcuvqVwX5p37eiVnSW8hXGh1upW94MhSR2aetX7DFQ8eBe95QvRFK5z",
  "key40": "4PFTGqFGU5sPibsLvCSuEnu7qmmCWLRRdzHc5LKtSdWdW16VfJbWW3rMN5M7j7e56E6mctuoGT4KjKfuU3Y7uQRa",
  "key41": "55CRTr1wfjpoAob5Tpcf6TJotcrwqYsgPwrVMNHtcxeue8VQktRxXbrDbB5GxHSZsSQU7aTTTWMysnDzk1F7Vhio",
  "key42": "3ucB4HMTRSEdhf9KCEVwnkmdTpziwyzzUw7etJRzHooEYJKJjsgHG5FGzWeoNkKsxbgRxquo1dzYv2hhytYDXopA",
  "key43": "2c4ffMEEbvfGNCsqsfN5xYbTpPWerVfdca12KcLHT8RFogoiBJTShV1eha5yFKnrKeAdfRz13o8wsbUgEfufrM4f",
  "key44": "861tqVciXqoa3XrMW6FbGz8nepDJRriJJsUdvNxaEgy8i6oB4qJYZjebHdhDHp3DXiax74oTcAsBanSTjbr6kSs",
  "key45": "3opt1B2FDZLe5N3a8uGERtrHunAkxGss3BLAssk4wZhR9CVoP5nroxgTMKhcyPFroRrVaZpqN4WGLC6Cur4HHQdx",
  "key46": "5cvMVWYfBXUoQeJJYCbjj6XsTRjLEtPV4zfUrawEPfnoEpcc4o6cBM2ozw1L2fpFKj5giHSqdbVuFfFynER845sV",
  "key47": "4dddWykqmg9nTk4UyxeMHHSdvuygRZ29GT2CPhXywgJJPZZFLamWhjoV3wMy1uBU1tzB6qAyRUZTwq9rKkdnJVum",
  "key48": "ncQfXfVpHcJQffWbaX4dPFvMhV66FnFs5Q1WMo47uuJPABAY6nZfp6BKD5uWrwDRFiKEwKVEPKFQzV6CrwrL83T",
  "key49": "2uBhNaBJ9K38zSPfhNXHrZEJ9kupJXCW96TqVRRBJANqFcwxZ7KmBQZKJsHyUJFJ6LG3E75sm2HAcCGGY3FcMaBj"
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
