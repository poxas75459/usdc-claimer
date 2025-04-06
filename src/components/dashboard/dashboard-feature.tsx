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
    "5uz33dMonRFFhKDpYBo8BjGX7EfBGM6ZPsd4WubLdJv1Lsq1NcWZDceuMtkrA6ceEPs5pNvpFEhoDdMeS7e7okfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tn1nZkWLy6Cv5j2DMTUJ3aU3FaCD98nNh7mNRKbSzFRtAkj8b3SfdTmh2jRAD9JnqCdpYuYgzQ7c4FKy7DLm2wE",
  "key1": "kp3mVxBbSKsb88r7Y753x1jD9D4RQ5xTyDS685mg8kKouvqixnC5ANqA3CEiLZgbiAdDAo1pkUNq9iEqmf1dKZg",
  "key2": "5q77ZQh897Kjr1GVWBkb4r3drFRK3ScDfF7pvjH1SVFhqaCRHoTVHbQ8efm9vBdRGL76FWXt99bp6Unun8adYUx",
  "key3": "61CpLM3vEGHWcxUUFhcH19VdqoygH1fBukqixAaKL48fTfZJtY9Nja4ifY48dXe4YShHgCexyyN5PREgL6ze2KLa",
  "key4": "2jfVZmRUipMbMqvCywXEcxUCp2Q19V5LrEvbUUhyg2iHQHte2NRWUGXiRB9SAZsZEG6Xy6PYdbrxTLFHvh3RZy2X",
  "key5": "3urGaXqpdUFQexNyY6shNPw4oC4rhj4dLDNFqa9FReR6zGLC6K8Yi6PkSnuQTfAYAvqpR9GCWPNshE1uekfcvqj",
  "key6": "4fuxkXjZ3D9KjRzssgiw9REijRMdR1KitBkjKECjXoAaBJTPuhNqXwuvYYrJFnC2LZPTDY9JZTCcktPb2vEAQggZ",
  "key7": "2xFhgiDvdytPSWCJCxJx1FTM8kCeoWxAz1aCsd692ZjeJNcJAHkxswVg6FaSjGWu1Smd2U5R6iKiratX96ZNoxd2",
  "key8": "4yx5DJoK1HRKyW5DT4894hmve6y5QCWmmts3hqXc45KwmRtHH4PjusfdL8JMyZUnnBdBoapphun5C2659QLVuvum",
  "key9": "2sEQQkZonhfhK2TH6RXTZ2DHxVPbjwQRVvLikEwe6hvk3qq2cqGXWDkL5AzN1VJKQq2ZoRKLswJ3ytntdfUaLbGQ",
  "key10": "3Bb5FdXUxszhETvT14ZeuDUagRbWpkpGAbsEBz8EQRrYAC8gB542mpyrDgniWcbShWe1iDVpcvi96puebH61CrX6",
  "key11": "32bJAcKKNeWkgFDBEPSD5boexiZH291f5sWKAAkR7LwUsY5oJ6gyQymkV7CVwNmLV3TUkE4jncbiZmuAqLNhLAPq",
  "key12": "31yiJjNxWPQ7c18tDWvBiwVGsQBx1Yyz4hatvupw2n6KAThez3nuA6yT2NWbcyCWQ5nf5iQJHtVTJT7t82UMdYR1",
  "key13": "3AsUNknLmsFfDXgz5HseiaWXozLZbG4hwPj5NfFKfd7FHJGJtWB8NCgRR8NWayqfgCc7Jcqfm8dih7cWsmPWBQJL",
  "key14": "2mWRXNY2eoZ4eveX9QACh3tNRMMteSgbKLYBWAjchoM516FKoCnvcRqa297PXBRK965juKxn4bnonxRAusWkATcK",
  "key15": "4XCYw8QaceKgTSeYS5U2dL2Pgag9gQJmD66r1TVsu9q1sDfBErvEXUTpQjotp8CrmctF9djhGkFNxymT3UJwSZU5",
  "key16": "TcuwvAs9UPkMs8zqqsjxQnm56J2GDLa99rPut7XBCtUV7ZN5s9sgPk24XDJoiQq71NHxrmi6kmZnkLeWeSGUB38",
  "key17": "5XGuFnygJLGh7c7ABYKaKepUWnLT3JyA3eFe34dGjK2FoEEJupSuw51uqxZSdaTUrueA6QDmTRa7cYdZ7UsvEnTj",
  "key18": "5jLgyWuTAJrb55BmW3L67QDX8BpzFZMDJFXjaLSazctQV5qUZDTDTF6cTB4aeJ5ZwaVxSBu78qFayyt9SszAyUY2",
  "key19": "3N1yggeMqqgcRJZD6gMM4KGNj56G73LYZxS9jT1jNCR5rA7k4vMBSs8phmbESfRops5J1Jocs44UE6BuboMm5Yr",
  "key20": "2posat3T32vgFrWQZFUw2faFZNyH6PiPxjmD8MA4NsJ94m1SqjgYwQAvDwVawHdsaUXkkwGZ3d5HWhtRvvp4ZwGg",
  "key21": "fohRQSyZfN7Vda3o6se1Tny4n2LZ9QQurfCvskqDcDf5wC2Tr1YoF4P8stBpgCv6wXhnvs9PfVeYED6VhRtrsR2",
  "key22": "57UmQy3cGHRd8T7ubsoa5Bm2VBtTJ2tGMUAHimURquRhtnJCC6rwVL6ESmTQ7gu6tnoK4YGFeDAkACeHi1XDNrPu",
  "key23": "2jvquDBPhAbPVRoxgQorbYZUj8cKA6CwPyTdLLBBF4mGSawHH9wkKkwvHao92viBepdfP1PmMczgcL8SF1TvQbC5",
  "key24": "2mJxTPtrznBbX1h2Rin6gYGtiKaQcVYTejJtMZXf9yJWQkgA3EeyQA2vn9QSTtmsZhoj9piBoe6EkZa3AsvfXvhz",
  "key25": "464wEHqNZ7f9Bt8xV3xsx6DwNBegoNnFKKkTkwx4vEiWEVCCEDbJC5EKPRZPQFWCik7hqMbkwzcvCMqnJJmWFTbe",
  "key26": "4GfLaFPxWtJris3YgXKb1owDrSd3HrJhpLyi35Ku58jQ3zyP8bADE4ZZM5qUE3LzhbteBPfpARpMv8nPZk6nSGiT",
  "key27": "4gn8gMP6iJ6ir5BRrohyAY1nx4Y9zJdV3RPf674bKDfwSADo3YVuF3g1WR7iNJ3PtHJaNYSFFuE7LK3QCicBtpx6",
  "key28": "383CrWdhMm19k2zCKySXyC4TBYM9MBiCUSUrazgVWZRxnRLe8bzcFJ5o3ekNbCbTsnN4P2C4qMbWRmgNKTNbRbpw",
  "key29": "2npD61nLYibDdfXpzxAWfx7ysytNMfsQoJx9ogd2r9JTJYMnBDqPvj6xh1TLU6PyygSLqeZtSuU2xP7TR2nmqKj6",
  "key30": "5SMqeG3DzTY9dLHMaJye6SXahhRre7mWU9hxoEyCrrFRQhmvMnLbkvVj1A5CmcBkT9n2m1ArZrQaeBU6AKQvQbJD",
  "key31": "Vbj8BF7SmYUggdFE5VWtDcLnLhcEFz6MAYqUp9m1wWCLY2WooDfogVR7PfxTYcxgFXWgBn16umYFsCQ12WSxseS",
  "key32": "5Loq6cRfwDepYU4VigeL55aWTpiu9Fz4vZakKVMob5vyChvmtguajE4zQ74E3pkjCvwtTBmbpDRz12VmrLk3NVJT",
  "key33": "2RFTyQps4oNBHWQwggpF2EUn2QtTK7TDemdv793kX3Ae4iLCCNCkxcejzzJrigs51GxGKf23fgbXVhYpEew7pdmo",
  "key34": "2GcGqAivagCQHDsZRxWmx4bYDsBSr2bcx8buxM8VPTVwADaU1TKiP948Addr4B41ARPUiJaQk2u3ek8bb39aSjLz",
  "key35": "2xCrG2KsFgTGe7d1J3TxURDhEVoNrqgC7k6Xm4yanh6RXAUhNHidkD19kbu1Y3efsDMmXZhhHfGo1VsuwWrmdwpw",
  "key36": "4bRiygTcAxtp2XDM3Mx5LRKjcwRSFNSSA7aNX68JuzDqCopdCGiB2bD6RrxFzjAHMGz4SXE2ZQA9yETATaPFRtbj",
  "key37": "vCQinRTbq7VzGFHpY5P9q4By5NagLiPScLhRxdtBPuTcGvPT7C72pQ9827cfYtFWePoACgV5sERQ1hUM5vCod7n",
  "key38": "4uGgVmPdQqT94Q6BrTBLJcPnU8ExAwJupvv94FzSPt1VGDSAoy9nBsFfZuvsnCBFzLPXSfdxbuFBnJskUrZKiMJ4",
  "key39": "jZrZzB46gGHDDbLwGHN3Q5aHW3iRNRwT5Cps3MNKmMSr8GghSh4bevQ6kVGEeUxzDLgSkcugjYkqDYjTFrGicLq",
  "key40": "3LqrbY3KG4yjtN1jK82U3YSC3h1YxFoWSbAB6U7pPEevMF4CH6Ascr8kpzX1pGT3jAqf9WipQwjQu8SLXyALtGBR",
  "key41": "4QEzy4vetD1Ay6sr4WsCytuqWRR1QCVtSS6Kxw5nU2CyoxjfaYAArVVzwqYKGytFXgZ3oehfPwwgGLdQhEaVt5Hc"
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
