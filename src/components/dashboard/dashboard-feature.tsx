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
    "cvHfJVoUpzxzU3rG3imrKTLgxWJrVDZFESd2gdUYLZVpZJbdfQtgmDaoqMr8PXRtDNXfvBZmaDwkYGgeqi1fqMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HuqvQ3nz1ecQYZtjM5QDFYwwwwALxgQerQBXeG5J1AEbX2ce9rDSSAWGjmqWiruriBz9CGnaD3i2eSciV2tN3NR",
  "key1": "4DQL1oXo5FD4z2pHiLTHZuLcvQAErAsojTdwuoyjcC1n5GXkVu15k38W3aHQaY8SPLrdX4qPCdwSXZ8ahwr5tM3c",
  "key2": "3qmCUDmWbbWZzK28N1WB1XtN61HJQ2EEKnY3gi65AGgNyKeLvsaMULqNAVR7EFFJUMhAQEjkadEchUqtuLXL4MWT",
  "key3": "2e5fmx92t6bGew76e2eZ6pzvEYbKBvYwpsKkUdVWN2Dys8tD63FHXbWQ7A38M9tSDwjYxDa16A5ZJmLBKRvZLS1P",
  "key4": "3d56HXgr3PzMKiTCPA7pWHeDeXU65be7RTWWnsUGv1LyA8GmQXihTq7A2yFAsgmbmQrmsj98AyAqJUw7WBKRanrt",
  "key5": "2dTS67qCWy67uWkG2ENyzDYMegdrokb5Dnw8H9T8qY4TTcHn2GVmmwhNMqapuSCjDkFd56pYvtgVuQnAfj5AAKPu",
  "key6": "4DykWDdmbTF4ZFYCXqKcGR7TtEztoRHZjUoaFVLEpBsiUKMWqCQStc4KFUE7Y4QiQyiKAfK5r8QQggrQoPPqgYGF",
  "key7": "3Ua2W5Umji5KtcqNVguRrykeoJrLazmueyGJAnVjNFCZsE42K6vM6mC3zRzfHqpkcTEAzgiYZhH7HjDWudt8VS8C",
  "key8": "128uGCoKo9Rt7VxEJhd5cyJVD1rtAGd5UxHszfiUQLoX3EXoB2u5DGEn1ejgfyeUrX3q3nRk3yBiGNqFZK91LZhH",
  "key9": "3uwEm9nYfG5CEv1FxPzferL2Boo5G1SUi7GNyiBPdE9rpKawZerD7gQRqVLJsGMHyMML9ZYbcj3nsu1b9mZYxXLr",
  "key10": "4dRWtMspXMkgEbhVHm97FaywiAW63YfVitD5L9mjZhhGcEoAKs8YQ5RcCiPkzQvYnGnkKmYS6GYonFodtv9i9WHW",
  "key11": "5FAyjXoPd3LsZH6AvtH2rSoRDbBhedWiPZP2zLUyWuXK9jHXbKfimxEhwPPURf6fdsRd4XET9zA5WDiX9YrZ9riG",
  "key12": "3t8UoiQS7KBZPXYRV2iK6itkkRymjZG1vzoxme8fd5RWUsZvbXx2zC1JrgLcGb16fDEjEiyLQWtQdVXDTSKp8H1e",
  "key13": "4HwhiaUnpHJKpP9tJGhjtHwhumVHLwqthuD3cQ8Hz7sXbr9N77fv4UWp1wwufgtPS1UMaP8RK5fgxAEEjX6krUKT",
  "key14": "UjN7Utn54Q7L1KJtaVDKdzHd43ezXSjimRFs5jfd7RUhtxak1nnf1MWUHBsrgVVTAjJJaimiSxqitkNvsJ7FTzP",
  "key15": "3GtCVqwy8qoAdQckC4Xi1xCKcA7YwA8zcY9gVfNpKxJvwNjeQLTkbdVB6rpcwPUK2adqQzxdyaQSfyZyJKGPKA38",
  "key16": "w5BVTbf1NmavLEqwNBCPETMjTWGk3zzBUQYR9GKhNJnqb81VFXsWW9N8Cm4NJKgaLBAEhEhSpQytszKUaEjN7UP",
  "key17": "eaN3ymavyZMkZdGipt7G2P1oTEwyKEmZBzst7zbMCgBtdzbKobqmwqUHa7hwqPYC4QYz1XuhJ4P7rWw8jikk9Dk",
  "key18": "5mur8cpNKXpt79E3Lx5i6kNeNLCBuXh9c8QsvMnY7eN5oYy4HJCHmGeHWcV3yAYzUanEPqL6cpMc2gT3fjLSa4FH",
  "key19": "4x6p7t3V1zPkAo4VbedzgSe7LhhguXnxmeEQBxqD2Hz9MfTJ5qhATL9viyFjrw8v9N7EyyVJfvtKrw4z7gCPLfJn",
  "key20": "syG6iH2YpxqkxctmiuvdR3HJehUuLBGAGnPYDzt2f913TgDGtbUSzBuijiJFCuNQy5tqjff9cowg3LMZvSXpH2d",
  "key21": "3jYeUPNCif5yJdJV7GmM9TJxZEnm5jswz3sso2JYThvEYFfYh1QsaMV8cjNvZvFZCYKPFtq4HUMK6RfXiyxRsMRQ",
  "key22": "5H8tazh6cyS3dQ5ADrGP1TM26n7rRFRfm4MR45YF1F9Wv1R7oTb7wHx7eWeTmzrxVVrQTa81QEVn1MYgidzHd4yV",
  "key23": "49tiVYrvhc2aDNuXhuTJhNNRTsugzbCGQ6LffrbRZwoDuzoguKqQWgeGi58vz4NEzRrZq6qF4qrZEgH9LDdsPu3V",
  "key24": "4vkS93UdLCjdnDH8c334JZVAeMm6NVa6pig65oM4DBYefVaQnhgQfAYtCdj4xjDeVJXeGz5N4UKHhzdDE26jkcLG",
  "key25": "P6M8NfYLoJzMV7RHcRSFPtY9536i1h4CqoJegsy8sQgZSzs2jUph88uauWLD42vFDT4t6cWLcYHsT31pQS1P1qo",
  "key26": "zu2mXo7VnHfDdymMmAxycKP1Z2eXrDY1mYd3bS8Ud4GJJ7FcpifpGthnLs44zC6LSJMcK2qeqQvVvGmDLmhDHX5",
  "key27": "4MeVWwp8wky1fe7H4L3QimrJF34c7PjSgakLoLSBPgssaQH29UtkCMbem4Z9NhA1yPyZNtpBtodcw9JXbixCE3b",
  "key28": "veZvLoo8EKYiv4kEh2MmQjhtbbzWTtQrjmatgxbzoScjvhYvMaZeAymdbvXzLzACPFoQ2UmNGocqMthGqUm1tjS",
  "key29": "iceQ8Wu5knEJmJ1UzsRYB9yMsZwhG5BDjsopmHd1JQmTM3rFoqQqtnqgZcp4sX4WQgxu8VE6HX2HVPaYhZr35jo",
  "key30": "4hNw2T87zNpgFBQYt9eiM5Hn5Y2JtKnjXw1rR75C3auznunypQ8KZgFDNKWzVenf2rHEZh35MTaxz7iEU8gxrcW9",
  "key31": "5P992teEWc4QDeGZRCGNrscVu4jfGpgaffYVZwwhyetKK1FskHYg7WXAXQEMm2piJcTpuBTZdyPt88z2dBdDEN8W",
  "key32": "4vxm7mpofhA2WirxwXhn2yjWTbFmLtq3f4iJrp6GVFjxhDJLXJQQ27VumUPw7jDyyAM4hdZxih3deL5MSYVZWUiX",
  "key33": "3d5RPbAa4TtJSNecuhqXfdsZz6TbuZmYB8Kfhf8kLbj8uv4fFPaH9eZXQHRjNSbq4XRAN3UEL1N3gFbPBRvpsWxW",
  "key34": "4dCbNRTRpc7ankznWGgvccSRgQhTW8m2Fm5jyQw12seXaLbZAZ3FupJpedNoYhAfA2dJrUNsxexxw2xynDQMzihW",
  "key35": "5sPkFxa8cVTGVc1qcyko2p87eyZQ8m9M5GLAq1wLk53XmwT2goeUn4x36AovVEnqhuNMhDJNZmGcpeXT1Sw9uupg",
  "key36": "2Ybz6xGDiSn79mXLjKLBRBX7C3bWBR8rfbRze1tXfGKShH9KdwJ5nr8Cs5w6dByLcVwAKfYdwTKm42NUcnoRoJpR",
  "key37": "3Zn9G28QTaRoZfMun1LCcb6UVUEJ6D6LV2Meo8xs8ZYaAmEfFpNzqRvmXUoiUPFTJT2JE58LWtKWrVypQLSozgRR",
  "key38": "4FTcLZUYUTs3dhk3BKfLpPQLjGcAPDk1MaWhNknFHmXY7ZxGrWqbeWwdX2caHq7YLLCjd8FsNWBkqsEJZaZB9oSU",
  "key39": "5QoHPVyRJijAgcqJabP1LraFrXsH5eMk7mCProYsEPEm1fQuE93TEcoJbKJYY6r8mEGUbqeZ3DnUxA9boht6ZsRm",
  "key40": "gJp37FBXrw27Zop5KDxE8P57vPf1gsp67NRqjEvV6KNMp4WwLaSYeRzjaxJ4QabxrUQKTuDtqpcn7ZxpVLYCWC6",
  "key41": "4w2ftHu5UQgWHjFfx729ptpLJSEvbh4ak6MEvxeMf8sgNfCNC62dLgLrFKx483NSJNV8JJ8CFbZVdUCPnEyLEimw",
  "key42": "4qMWTvuSSVfMNXYSrdstuRn4Vp9p3Qysx69J8y1tUYqfAccsdgA1jRVT5izNhuFEoPNpQ3v3B8iZTCHZJE9YScvp",
  "key43": "3X99arCAWxETrr3EhHpMztXoH7xSgzc8XwZQhet1nVHivxY9nwU78wxieSCAdczo9V6XaY9YNJjvHtpT7PduybNX"
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
