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
    "3ZzRARbeQrjog9zJD2MBq3QYQHFGHhiH7KADj9CdwaC7j6B7BeMtWp1849BoqhRzf4jqy6g79Gk47eAunpprkASw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAudDeSRh1LiZCh3dZQf2vYpYH9dvpR325haUxdzHyDmr7WCK2oBLhaArfwVfXsLXA5odLNFZeDCams2rEbDrtM",
  "key1": "33NX9r9PkYizusNJz1wVdeEZGyMLZBScMDsNmryGkWaintCPq13wz9j6n45aJk8neRM4jt2pdEux4no4jGnPMWVH",
  "key2": "3nKDa6LP3eXf1U3BMn3gtuSsnKMRCuySz2yMTGkRZrirCjiVnbsoahmeJEygxN7g9zN1uZKixiHCS2yXokSr4gJw",
  "key3": "38otKsxH4x9zRYe3FbeL9zGQrRvLu5Kk5wNaNiugbf7MAhsB7unsUfLeXt5n1dvFfH8Qr1QAosKoTWhVrgzraBJS",
  "key4": "4cAfqLx8dVB5e5AZTNoErKyEG1GrifKqAN9A8QaKrCd3AiFwC71DxtJfVJV7f38ySbbAs7Q2YwUZh7Dnrp83J3J5",
  "key5": "qnbKSauMmkfq7S2iGDvCBme9N9VkWSc4dk9Et3mgnx8XuqvKoo3d3i6up95FWzy7KbmMqAS1C3t82sb9baiUyDJ",
  "key6": "5nHP74BsNeomQAc2mQNcSfMNY6C5K1wXUq83eGhpwAjvbid6qMQyUYBYtZEzyghmyKwUvphy5CoZ2abF1BJQQUgp",
  "key7": "5NMejZvfXdqunYH2Xp47q1RrVNF2vgueUJkqu6m3L36MMH4xuvpqzWEAoW3wfCSreWdRDyGCGVXVCAMCxJ4CMBEf",
  "key8": "5d9egnoKu1RTd6E63LKxACcEs5d4dijwjQZqxJijL83D46QXPGrj47We9my3Mg6s5YEdfq76HEagnFZBanSy1mCP",
  "key9": "3ixDprTjqfBXcZDiHkmDXxau2gruVa72ELyVBx457KVcJeeUuEKkThRoFBZfL7ZpZQwLDAus69NEXFa9AFz2Ep4",
  "key10": "5kLccig2EDyVxRKsPTX5dQv9Kfp6ngprPXJ3ubtBoCPcv554zK2KrAg2Zu6RsPyj4RkHFW3TjybNTf6AhTtVtyPv",
  "key11": "5dvHwj77gSXB6E7emMz4PNwfnPu2UbEnZF9SSn4vj8b8Fv6RTN2S6TZm5xFymYfNHR6vcdRLrWWtjiSbjnZM34oZ",
  "key12": "3T44mvb2opX14hd6ACULZT6DdYAtmvQ9pGWMnLiyv3PD2GLC3VwGHQmjqD6XSmeyq2ZqDH6MzJEMsjG7ZGAcf2bn",
  "key13": "vm8xb9mwV8wt1c9abHrGLvrG22EHvp9GMVd1ppzM1HWtmNigAva8PfcAiwkoALnM6yLpnpft4KNTZRPgXMW8G6Z",
  "key14": "61JjYcCW7BBZerU3kQEzHcXBf7zDrDTFuTJ4oygqf1fkNRTpYTYXbHkNBoeugQMFQ3LUoFrVqUSjefFzh6ahz5JC",
  "key15": "4b5yHcaZP2BESHXn1a7qACf82j1hpiisNW4cLfWTg3c2LGXDdo6EMnnfJVYRHGiSNUFv1moXmHwA5fUVPe8UFqq7",
  "key16": "2JY7iEe6gTTjB3JBK1ZShiZbwK6Z3oAkfDU97qzB1bC8xskm7TbyaRmtumMMFqUWv8Ejmsg9KVCQZKw8fRhQJonG",
  "key17": "31Y3jXUwJhpC2Bg4KXTQUmggSdYB2J84QQFBKe15GtTgHMFhfwonSDkwXqHZNLoQjEghgnAVLid7fdjX85hTKDzs",
  "key18": "53ov72HHgxNMFx3BP8xxyw5zoo66AbAFLts3styHnVaZy3ZsbishqKYxfrdqKAzsxiBicvqtZTWBFd6ZHZtXZGte",
  "key19": "2nMrJ4pRseSAjvp9CbTC3vHYkZHgwaCm98NMyzgvby5LnDVEDzvoUiNpSWzZkc1EMYodo1RjgxcB5yi2dF7wVfLr",
  "key20": "PAtEdwdaGbWMuUcRD6hpG5yRTaM2A8dHoTow2mSM9uvfjdUjAHCqUBzZsGFKdwSCkD188RLdTiC1RPpmrLz4cU5",
  "key21": "6H7wu1hG1jxRNB3EyMt8r2E8ozMneTimNr5N9NmpDduChS9wVmjiSt89mDagqAxMbDQJECau7FugVz4UePXtZzi",
  "key22": "3XhgXM1RUUsgE1gkZZEjdcrWmgKcSCcMQePvZpSaiWb2PMkRmXineenjm9HYFduWPTTMKSY9DR6k2968m6ZzZHgY",
  "key23": "3QEkWsyAPpYzVoemjGCt7ufT5i6cHEbFSD4WCbdVviL3WrRqhgT7xynu4YWtT8m5LJSk38nHCKmY56ZKbUdr8A3H",
  "key24": "3zfHgbXS7WTDoyibQ78fZCA2HdyxE9QNXC3fJBVeVy51BmybnQrAoc5nSUeJXsTDz67VEpWf7sQqph6xma6qwjoc",
  "key25": "4J14Ctn8ptt9YHay44nxKhzwV2DuBuafdjpFndYqt153Eus69UCkDUvAHv3kJgS1mVCq47QwuZXTXzguj9kX3Nge",
  "key26": "rpMsmUXA2WJHgSzA3iDkVYJYwLK6MSc7X7Pupx5mCUVwHAGxp2tbb36VcfW7TdS2ZfrasAtQRdy2BqqKqEpQdaE",
  "key27": "57zNWErkDsD65XnrPn6Q3XeGTib4uxccaBJzQzNd67TCBj8ccSTbx4YXHCVGrxh6a3Lev8euySnG4c4X1qAUfqAB",
  "key28": "4ekKDMvuXZMeQdSMYaALarTzEWMnDsczy2ep44wj9foLuM4V2WpTbZCKjepnGJw9bhZrqtJn83srePnmxbj8C4pH",
  "key29": "3QMLCG7SuFDGpTRRBxSXzaFf24mEbS3yf5mjAqFVVkDNL8HZhHRSVCNrFvW8Qug5Xi7NwqQDcDfTLNtTCGdRB9ri",
  "key30": "4TXuzo4wnWNfdAJ2LchZjiNUHRtkpp3db6Mtm3VH8iwaeyBVGA5d5Rc68wpmeVfc22rRzxED1uTnYDwovEWLXiJg",
  "key31": "MpDDHWvvv4PysbhrWMN1Xr3VTuUCXQiMQ2kYAtkzUWKWifbRpT23PNVJn9NZ92uhJM9jCJ2ia1re2gGk3B9sZmx",
  "key32": "2wfQcF46BPw2Z2HJgwUvirpELrdMXAD4VE6EnJQDbtHvbE5ppHDrUhqYPADjF4C5mAfnawgrUQDuX8VxSEULsdj3",
  "key33": "5A4qKvVgnAxebcfLHTyVBtW9mcegXd3aK9LcVqqSqQw74J8T7hsyibeS3WoZ5xGGA88AUwG17b68bBjVr6N4Kbf5",
  "key34": "5D7HAzF6ZCgFmbDujd4DvjfYqLiwtkU46UFEU8dv8oYJ97w9CkBoS3Vt3Kc76BAMYncWC8ebpqmEMJr6vtf9c4pM",
  "key35": "Td55YTMPyrFG22jHtG22miRmbf7trDFxEpwD4Ti4oKRASs78VZf7kiuWCCGpzGLSG2yQKrz5XtRxoUn5SHXGGq8",
  "key36": "3Uxtb8xooYiunKSxW5Mm4xsHdXAb7qEo7fZLFRZe7aiKfo59W7RdTdnWbadd3fTcJUkZG5bLJw1NFko69WeqJp7w",
  "key37": "5Gn1m3PkFemtQagmGPRCPsSSHMVkdQGZrCmJB8qb2zLgAJLAnpxiJpB7sXG6uCbJzSMrLyjbCVbsRFKiYmBbR64X",
  "key38": "5u5EHC9VeCs3c3Y6U6tsWZX5QbxgPvbAFyK2GoaF426fT12KdN6FQQUPZ24THJRkirHpaL3gjmEaT4p4gM2ukdAa",
  "key39": "5LpYqDqEaLvwRkY4CW4uXYtdY5xvy9sdHqiJFYDGnJ9Kz8fJmLV18UUQ4LpLB4ZkvaDo92kkhgaGxc9DDs86RREx",
  "key40": "5rtAexpG4u7LbWXXhzaQAdBUDCpeRhP1Hb99BRkYAj9yB7PDeFi6AFekN3qjsv967XsmyhUBwqsinWBRpQ8CuyUg",
  "key41": "62YazomHSdr1s4cwmr6eJM9NgM3pDZnv1bUStLFshntRfYVck2upQnfWd1P2UELDXRGtJSgM7pYC5TvYXD1yaDnF",
  "key42": "KA3fBXBJU9JNahh2y2iKiovvrAtPSNjStPKGA5C1QeMC5pH7KJWfkGfHv1udiDZxKT1wakokuxNGSC6JDAVx3QY"
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
