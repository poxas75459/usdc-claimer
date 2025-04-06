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
    "34CM5i1ufyvT1BrdipHLtk2zC7zMx81edvKNLH2E12Ui536updAhzqv1oNvTVN6TbCxGX6nxcQDxFRxWnZoBZRTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVQaXkwKzvnqJrxT2ZrUEo3JMGEjpRe8sKxEtQeCDzQb5mFmtF6tgnbzXa5m5ogibRqWmdDaBVsC78uaygjWtJd",
  "key1": "3Q3qFBRvqhs6D1XpdaVs72Ha23L6mHcBxsk8vQhPLU3TXk5CNu2e3P2iBJjDW5cY126JLarRJdoR4Zn59uhwqEPJ",
  "key2": "127dbJ4Vh8fArNqdapFnVnxZKoNLCumR7wjgmn9v7h3QjsmsdfoZUxngtYUTpC5QTkPFt58Y68m4uYUTbMzjZqTe",
  "key3": "3n2dhoWaLnreVmGVBVHS59uHxhQAhULtvRqhNuPqw5ACoBgk4oVVEgtLLQeef9QBzZdHpJrJyMYjSwFd8D9RxhJ8",
  "key4": "635kVLR2q2WekT1538v9JViAhoramkY9z4CPJg7tXqL1cWgYNU7cWHsLh5MSbW97ugHFdXzvefJiYRh4RbHT9ikg",
  "key5": "2XpGAwE6AhZLnyifG26RcpNxhWKTdAukaYv7ySybcbG4mBfuQUxNTP9joC8SoyGhE3LkD3DTpKiZABDgpvSupthP",
  "key6": "dSeRGaAbHmpjufHAERre3BZybJ1UiKk17jyNkD9rfUy4XDbYZNYfFuismLiLMgACqvUNaaT4ZVt41Fy6o7VBFAF",
  "key7": "4ByoPjg2adMWNY7wrqQx1B5dnACZEQG7rgvtXCR4hYVznQaGqEvqyYHWfGMswA9azvC7nzw6k3aESMAjqJz2hJh4",
  "key8": "2aV6JRuJ729JyjJw4fuQoBXy324DVAn6NssyCRyac8JFLeFRNuREAPFMMR4Wdv3ApkH4zZaHrdwmW91Jm3E5TZki",
  "key9": "iht5LYjV6PsGpn3sVZtEYs8Mgxv8shiSfXiSW6dkHioKzhF6xmYjt5G3wjV3d6HEe3PZ2k6mWqH3hnNvs2ARcWa",
  "key10": "2TRWcsFFx17hPBicQnRwMxkrwHBSC1sRFRzBtnjFoNT39pSxDiqRHp5jaznr6mJNhBsrdtQpgvPWonzV1xcMeiwj",
  "key11": "3Lc6V1hDTPqHcuGi1vokvWTE5x2Ydq5hwdVkvtPxWTjS4VKsDSicmQWdKUNhANwSyzy55nnCh32EkSMrVLtXAuoy",
  "key12": "2HxPCMt7G9zzj4QQnaMhdfhP9BiJ4v3W6Cem5DU1jNY5ETWcHNvjRLK64NkNqxPAcEDWqJSjukQtmLph75uTTdSX",
  "key13": "5GUtrhYM66b5CsMBcyM6KiUAMYVMH7Y2zHGvTHe6U58vHvnQZpcpuVEo73Kockvsvp2vc7pWSqWxAFfdy2Q632W6",
  "key14": "3RBULbgsX2bTwbEum8j8wSv3SSNhH3dB7sv4S5MqbwPBmoVDoHFQ2HHnzZdXRPsNvcyCkfc6XBvkCDt4eiaZF9Fy",
  "key15": "mvCavYMdT3GQfCB9cnYk3Dynk4CvboxGb9PBKgD1SizkRg2GnDyiqd1mBtoKCHjmXchvoSwqYqmDnbKRc5UscDn",
  "key16": "3RnM2HkKz7SmRKgAtn1mv7L2irVv2Jp1rqU1t3jFJqTDLFRqhLRKvkhj1iFnDg61iPU5XwcAAgcTuMGKKPkhNEjz",
  "key17": "4nqZDhswanoR1Ld2avQe8kHjvVk6wnoaEqGwXHWw2euwwajAVXNXgLnBAcY2pebNV45CvpMzXHygtHCgknavVryk",
  "key18": "4M9BJ6XrkJiG11A5J3tfhj5UWJ6FRf3YRoFQUTcmby83kmd34MpwvRWeKANH9aitBKpZRj84AR3PDbBU2Vrwib68",
  "key19": "WhtBqvQztZSRBAiPypGmun5RF1b7imdyF1mmxSmTFMreQLArjJAp2qGq7fpGPzLKyZExJksehsbmASPXrniFGZd",
  "key20": "5iia3Zg8ZaUM8DdfsV9g9Qxy1Za69Mr1iTyf1kP8vy2ZYCqhZF7ro7FtSydqX7hyGbXYHDGCox4K1Tyukvhm9D9z",
  "key21": "4pwV2MkuA2UPDjVLLKn4uNare8yNo6TercqTCzTERNAPXKKHBa6ijjkFoQWP2w4fKVQFPerGksU59d15tRt38Lq5",
  "key22": "5DH981ZTGbw9XnobE81k5ZMPGUEPBokvyitUvgSU6mwANCpQak81ft21uindEyB8VUoPd3VasbEDyq4TFUHxkMBF",
  "key23": "47sVjf7gNfye6PJqyics1p4fnM4iCy84VzUQeTVAcKcEiYvWx5MBnTNQBBakq4ywGvBhGLkUq2bRN71io44MACBv",
  "key24": "5kZhqxd3FYbNyKJF5krSjYQN9vcJNAY6p74ssbww1HDw1aB9CNaEaWjNu3pCm8kFPMgBwmqWgSUop3Mzh9sLgG8s",
  "key25": "2UgZLN6uigLa2W9h3W7Gw3YjKQNSMpMnnwkBY5MAfhyxaD6V32MgBqtbPD5HotSHQZqb9hARVwTKFzbdFeiYRBqM",
  "key26": "2VP98Pqq6cUtKSvLqLx9WnFs3tZfEgdhj57L2Uaqgf6MyHvA1LEwQefacLSb9Z87MHacp9K8qnant2MYr1pARMdm",
  "key27": "4u91WUHL9vynrBZSrT1BRBpSckQH888cau5qSizJSigyyLSWTic6ZWgJZX2mPhLY2ojAhp5p9keuVtFh5ARSmQJy",
  "key28": "Q1CDrQ8bbxnapzrWpHSAxwKj82XQcFoj6t3BP6jtccUUY4bsPJHrqLHsZrLwXgWmJjUuMzZqXbvLwgm9qpaSBJm",
  "key29": "SCDwwxxhXvyuvbdP2axVREGyvpdiQGU9USWk7sqm5hoNGjdVczyoJZCvAKyD828QX2RawveUzBtYwscgsXupFN3",
  "key30": "3oKHdw5W6Y6f19xPgiQbc6EJbKTXrnwsasxMV85ZJbfrTW1dDXku9qzfjguZ3w7wP4kgsYuwc18jKcRda28uaatg",
  "key31": "3NZ5No1F4RRnL9bc8gh4e9Bpq5N1CVMRmgomfjt2TFcoBRicR4YnGvR9TMp6u8sKs1wtf4Z6vjtn5jafGeKrTda6",
  "key32": "5JxSyMy4unLo6p9ZJWoYWjfbWg1Qa6YL824hb3A9J2TSDX6CuRP2NmeJfnxLKNu9M99vqiWo3w7fuzbsg1YK7Vwt",
  "key33": "4zJTn4XdWS3EA1hyPzrThgbjrynCu36kRnt7rtCd7qyGiLbJKWU1NeeoaCcJJJb4tcgu6jJZdDBfWgL9JMWeFqyB",
  "key34": "sexnoxSmVvLhF6Hh4in65HXYz2JScj6DoySYBuoT29zqqT76NzWksD2iww2UZYZHruM2AgcVB4AMEV95vkeYFmy",
  "key35": "5YeQF5HZeoHstrzo99H33wRFfWc3acaE2UxzLJDceHq1hrYBPWj823RZ6aTwQtPmZXkEcSDMkVQjRiHPqr7puYhS",
  "key36": "ovwhzSj9KMgtrNEcpikRghXGC7tUoqSiQngGXTg9RaYUMJ2GYs4LG6PAJkd5xWfeeKUBKm8M7qyrHL7GAVAQNv3",
  "key37": "2NB9BcsdrSqfb6NJKfoLctfezMWaqpyodz9a5N2tzDuUH51xtqS9KCemDFesxLkRHDSenbnCGKo7oxLAGKDN2cTV",
  "key38": "4EoCas31AjYLQossq1fj1Ejg48vQJZ9iRES9oQgwPvQstwQEFNchfjB7YjBT5YsBuq6QcU7v7f7xtrRHyNTY5e5x",
  "key39": "3bf2QRqSPw9ugrARoPkPrrmsMshvJwwYcHHP7aWQ4c6RAPaQWsZvhsT4AJEo1UGGuJZkpGDdb5zAnAHjAyxac5KV",
  "key40": "2yYo65uASAzAmREGsNkwFf8cGiTLZiF7FoKP2pDZ4WUNJVybsmePXj8L7XZ367jb7jususaZqyCUBDf3tXKzJZLc",
  "key41": "3W8iJe4jrw72LWaNh7iCc1NcXbkdtkrEgXHFfzEw2LV66dLWMirioy5Z5MNC4zzpEQLxoePxJBeSSLFm5Ud1m356",
  "key42": "DMUc3iJivy48d9ow4aXuU3nSKNb7MtVRcL6QesqGoQrKJrrEvxfVB4ZqQkCXppVHuuCEG8hnn9ZpHgTNh1zKfAU",
  "key43": "5CdSmjvc2WPgWVJqbqFKxJhBkhURpNUYZAcAtvzB5hy4vFBG45gWKgB6KSoDJPPAxrxre23QuVxFyLqgs8wVbcW4",
  "key44": "2RCTCPZbBD9nzzokhnGgo6pbf8i35pRDcw45QQu5PdcoMxK1mPWMTByX491SvCnhuiiSf1Jkbw2qaq6UBkfp8xZg",
  "key45": "3qVzXcscBpEn3a4JHy8LCE84ZN1qkLdZ2EKAMqCtp2AA4dNwCgV1JeruJhfNmJo7LFMfkqkcpmDAWPrxbK12cu2p",
  "key46": "3ZSvLEQRjBprtQFCkuKS6GfrBwXcqhCLLsruoLz95f4QSy61p2mQ8CMUbSKHGJTfNHk7nsySDDDvxJnfN211XkKu",
  "key47": "2DCBmkjZ44VdzudRmoKqVbADmZUYsbYvempNXfFx39XvzuDsCHNVasQ4NSzY1xwecpbnCT4ta9qfRZPupku1Zwnh",
  "key48": "p7yDZmCsPDbBMxTUp4HcwceR1Q8CRxxC7TQvQgp46J4t33LtQ9RmmZcmAMjeUa925P9WAN5GtqFeAtHsMFKq9ZK"
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
