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
    "3DU7ERqymUXL81m1vfSepSCXFydxwHSjrTD5FPQeGsTypmvQqq2hBwbfxLG7q3tbyTyagrxDvhmQtqC2R1We8Hjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vCQzLEaRFSHnYJejgdJ4rzaX18Fjt28FEgp1adTRVvQvVcGHRwo36DkQzVkxEBEeo59uRjf4yLDphNiRfk73uGd",
  "key1": "wodzC1x8JGtjAEm1mdDkvj6PA1qLhPzEnPJvxYjzCs1KrJaK7DUTUP6aqJ1ByETDpddj9LUgZU9XZDxUV9wkbNX",
  "key2": "3mWpbUPaCdTLmrmTj2eLjcDnTHNSMJpbboQ6by9SomKM8cETsMUhXiR4qRWP6mY4KEx5QmYyQ49xGDELE6S4bte3",
  "key3": "3LfBaoUG72nfdRz3vCBuA9ZCD7Luc2woeUNQjkDQD8fSkKLu4t9URNG6AZsTjohvnjXyaecgqb8afSabimGkyDiL",
  "key4": "622a4Lfspvgjv1d7bzV9A7FmcpZRsHP82QtAHDJRTiJeqg3YNGYMstXCRhiXddBWGWBmf8HSZkJuJaacGJu8rNr4",
  "key5": "zkrndiVZFJKDUUCXrUEvRad4kgzNx6hzR7CKh4H9bXsYmnnn7Sz9vVAoByNyuXiujHGDwV97NiQek8yD7omUwhy",
  "key6": "4hwobnUZdjFkMSMDDd6H7tQ3geov6rcV8DS6KhcNg97CkBBpqbuorFXRiMSnbEz2i4BpVCdrFb1By9z5fzeovKhy",
  "key7": "5XC9q4JpGs1wq1eipgvoVeAVuCoLqg4nUMmDPd2d9wivR4962T3TcsBwD39BhfHcbGZbkxuR42nNCh9mA7WmH76W",
  "key8": "4NiJACvDxt5LW9shWFDtCo7Mf3BJT8PBwuV5yqDia98vxTMN33uTFJjeiNzg1sTUdjjy3kCa42udEHfwYUvDh5k8",
  "key9": "4HPYxBB1fGzHckahtBhBbrSWNiJ1BNxjQq5VDBTf2mti9qJQehWEFNz7jygZ9tMjFU9C7h2VnyjGg8BAFtzcLQbr",
  "key10": "5b4Xok832eA56MKz4nrgptXug1YfJQPVDwbwZ1oVsy6Us2yzYdQgWeyFFijmefcnfwvCCA6vrFxZSeZwszB7QLpc",
  "key11": "foQse6pTzUihHpbrdekqRobsN38Wxf65Q7Km6BYyVgKQDtpwzK1ugnnV7cNYP3gT47ugWx98UneE8Gxt6KuWda4",
  "key12": "yJZpePc45YHphN2qaxiuTWVqjYFPpi4p9i1Ez6D7Amq3YrECmeFxcbcCgon5TJXuw3YoTFR8UDa34kPVNQ9Fb6i",
  "key13": "3NGfytNM5HMYuNcsSptkLKVUjrGyRqrWbkkRdt1LLFuNvw4xxuTnBQQzARfGkMxwud4MECeq4KkPrNCCdJKCF4mh",
  "key14": "2tvZJyhiBFbrq7XPavVaFJ8NaSsiP1GMZfaSkvojYZhDWJLvyXH6p8PZ9eYShDyWPme5HSDtPShchbjJnoH4fVBD",
  "key15": "u4QHkVF9KdmUX14c1GetcoE91bHtLCSnBYRqwtDZT5zwGkkVcsQXVi7wLfKxuCi561FMTQPf3hmpJvdJ2NtEUuS",
  "key16": "4EgbTYhbiUdNqCuhLFNyjSJ5sVo1DogWNu5F71u8CKeHWx4mdwEWE6yv7JXVDoeUSQzRNxuSwyhspB78KhRrXSSB",
  "key17": "3mccjVqXUz7dcjzWdsPma3r9cQKBHq1rh8AGDTZ23AcR38dftp4MnfHqNfJCTkyFakeGpiUHuwFb4YyY4D7HT32s",
  "key18": "3KCNSQsLuqzaRn5deT6QoqMFAEHBFyAg2Dpw5Tq71GsdRmMycXCNkHYXDhixrWjTnTCi2NEg8fvsWRfUgNp5BPsN",
  "key19": "2BC3MtnK4EZpTzFF7yaFWnDCJBsJbiN7rnknrgvjA64hAiPzpGDeSsgxw2MxGDacgMBv6bngDfvQJuY7TbqU5Fwd",
  "key20": "5p9ztJbfJcxjP4HSnoFDSbtxyPDWv9YrKdo1Z1fy53DtviMqVzNhiMn31ABYCYPBwCy22owAgij8oDPf3GjAXDxt",
  "key21": "Dde6VBRiv2Wn4ohM71sRfyojP4cVQRicAK3FTDQZZgbcqkqBcgytETD6iMWYuD6ABN976XucJaZzn41t1bcpmD3",
  "key22": "Eh2dNCzL9z75LAMKQrKVjkF6isx24qUbWCady9LiWpUnGSUSQuY9FH4PpYR2aywassWBobNUcLgQoQgM3jyu8iT",
  "key23": "rUT6TiWGWt28K8ZEtCNWKR1j8bTpwvGdVkPxcsihjvyQdBm3uE7p6cPvgR7nBteC8rVYG4YRTBV6gsAkVwSnAt7",
  "key24": "4hSmC3tTVm1DurWRb9Cc3k49nu5iW4Mc4sa8i6JdGKZ9DR9dEDPowNy4NxRmwan8nyxUpZVxF3bo9P6RydMEgbEJ",
  "key25": "2c6DQdLsqQ6kCPmpBTyLfstugSYNcQHwMkfSdxt5qidgeyPpGmihM4tHyvjJqKHFSmvJtTfo1iEZgeuiYJH3XGUh",
  "key26": "5tp1tFYoAgtDBCCQ8vCri1AxBfpRh2cxpZR3t1VHqperxN8v7cPQQWnfUuxrtepZBrnQXnaVt1Zr9B9n2ffNcm7m",
  "key27": "2jf2QnETBFekJgYfhrm7trM6fvC95nJT437Dt6QhqFjt8JBbvDbyDo2QgENGkxATuaon2FNZVa64m9fwBHUP79ye",
  "key28": "NcgTc9uJ5g3FYdx4gzmGSfR8mfyJ2M5UjbEdtkcDENC4k5ePHgs5ax9Tmuireo46xJds7PFECPoYuzFdUpmEa64",
  "key29": "5J7ZDZmMdtDW68TBdrXHSZGofQJLxo6CeaNHFMZWSKiDtKcAeJnhPB1dDVWNLsRasKjoZpgxqgcfN4foBu9154EH",
  "key30": "3zqrjxpENS63Bw6BFj24vCR7oU3hFbg65ZEA9QPSkJ7GZ2CWDBqeHjn11m1YK6x4uWFCvxA7ZGR3HMM8KWypdK7W",
  "key31": "3AsGEjEXXGdUXgTg3tgRanP4LXznFzAjCBSdHTMAc3zeRnKVF2cg2YNgZ4NU1MXQzENqSTkyFTr2zQbWVJK3VSrZ",
  "key32": "3ShTDtDxzXZT1sH6gp1jpTCzqqzZxSWvyJrDSJuVdLXgfSswTY2QCzSQmA274fiQi1RPTMmgGj67x8bkaqTXgZ2S",
  "key33": "3Pk4TLTmEz3NwM4mHGgTmYRm6FBjeLsrSU61tu6jAPZbaKcra9tFyYJLXXrZWnaUKMQuhRRmKEacTKDbFL7w3j6e",
  "key34": "5YnaGkPSnAMsnRVYxzqwAYjR5gqfGhdhNqQdJov9dVmzSuBbzpRh4uzc5aiNvCY2imxHiAK29tfQLjwfgScNMh9B",
  "key35": "bPs3qwy8TzTTo95NDEad5rvJswU2VeaFntqsj4b1a7qMDW26Ttf4kx3APguUkXTqDtuAn1fuKBzCd8oJtwnr6g4",
  "key36": "njTH7UXfqhxHAsigW7Ax2gCQAcVBYubdvGCNCzfArNJmcApNERhQUBBcbJmH5EcPpYgtLuhrLWs5oM1b6fze4on",
  "key37": "3eMh5P8cu6G9FmheLqfwWNga9DjM5HffmVqjZKBBxa39zpu8aYUxMDUpWDvXg3fyH7rcdB7CMGVWwiuPjdjpJEz8",
  "key38": "66c977L7AHzoaArMNYD6VAuQdMoSC2qc2UrAyZNJ9J8PJoTbH5crcmGgf1ebr2YLjY4YBEWoBRtWivzEmiU5KEg2",
  "key39": "5m9rW939GzE5SnibwnL3JMgSttM1wjrxXARHh2a3TF98TxtW3hXu2BZvwCVLwudafuXuWc75p6XsdU9LPiS9xSHN",
  "key40": "sExqRmkAPRsU7416iBm4E3g2DiD11timRVwR13MFaahT5AmtZQgug4mMQagZqycHwdiHahGm5VJkHbR9ukEPydv",
  "key41": "3xzeWqGtcnEJLuzwsh22RT8f61j6YALe1t4iM7uxp7stdnvHnn4irC1yVX4zoSSQyu87oEvrtRhiyKMgbCsp9rkJ",
  "key42": "7kdDgcfjyT8Jghe8uyBXs4H8WMbk1gwkg869YRdmAvBn25MW8kfHgbrby7b3dG8X1pahshUhzJHLVPmzNvyrfQE",
  "key43": "46sxEcghHWv1mXzQzGroDKzJDcwAag1VkrFrKt2r38nkPnAvsZ2BnGNvMUvLLGEQjsWMPBYUwx6Maw7mK2dyNQhA",
  "key44": "3LHYtFgsBTYRxzaHDuBDtTqm76NR8QB1ngnGYWc8cxS4Hmk3fhpE8zXiw9yv4oFJhBC1AbKEsESk3nMpefimtrjT"
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
