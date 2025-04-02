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
    "2yMJirn4EnnsxkgmejMJh3hoq443NeAALiLLBAmMDm4vyvuBnTHQ83UwbwGtwQErZrxcg7v2ZXDFJop7MLEEwiXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9hBPoToat4kM2KcwMX1e15Jost91QbtRTyrav7L2CBdrd8hMvKcofjMoSi2GPPXoiB6Dt2MVuA9iZQax9r3GXG",
  "key1": "2JnBzmkYCuB2KsSZTzhKXRry4P2kKZShbWdaKazdk89jUNuWWYHTV1bZjnR2tZorvk8pcrgf57WhNUmxTehTybVG",
  "key2": "4tiNdorDUPeF9ekxttKQ2xDUSNMrrCcPoWnDJNMnnjzqZK6Uhxq27YRy2Fp9naKpKyd8PiWC9mFTG9CeectoDvii",
  "key3": "2yADjKWmyxcb9DR3W23N6dsgYwFHkD1f7KA6jMT5QjaBeNSkDhd4yBaeYeuQbvP2Ux4GnM6bS6bm51qTu2DaJiTQ",
  "key4": "fjUNRwQendLrBc6YSQxGFZXMist8DuduQGDLBvfkCwhv4BdC5CbJW6Urn9JvjU2rmaKMuEqa3FUJhMaDvVMYmN9",
  "key5": "2N7m7BJQJrwVkNgUuK8aTWFJpvqcEWwnnK7p59ATE6GwpdGWAtvW6z1FGd1tM9YbzMMjqeSUrPkxvckgpoow8YJy",
  "key6": "4H9jCxFjP5k1BPH2zz5aNRMDU8Maufy5WPfDyBCrpzVagbpVX7oN4qPNY5eunCdjbjLdnMeXXKv2yaJzFFYhuhhz",
  "key7": "5doS4gfF1H9Gdp9oJRX3xBgaqaYzGFNmDBFSHg7DNAEFWGK86H8ZXZtLCjJ59Lvwyvc3XReybbqx86k1E1jkNXZp",
  "key8": "4Nhh1Hof6Ua5SGdWGFUrsZ6jRDUiuYXDfyfg6SqtErYHDamX8ZNYnSh4QvkPs2J5uF8eZmPo2RP4nRyNjUYA1aCR",
  "key9": "1MNqhEjiDRCV2cTApC6k3vQmYm7UzV9LcheMK9YJw4gc6kdvRNtzdbr8Xkp67VPpEXMHbGnNsfdCYRyosSqbcKe",
  "key10": "4MGng2tXjRByuKYNyx5aKd5qhfYV2H3oZxP96nggrK8WZN33NTm1oNi4TEwJjnGLnHmr9T8VS5Vjke7YiADjhG9s",
  "key11": "4PZhX4JneSrQqeA7qJZsXsVhpx15XUuz5C4BvkDeNsAZe5tkEkgKpN3U9dk2TuWv1c4bbQfckkoSfDbYHjjHwNpf",
  "key12": "GHdLmeJjPTLjGKWW1e93dKMkqWXj9pTkUFBWtL4SBPKCT6zvXAVYyzNAkzC4rZvn37VzZxRj6bZxdtJ2pwK5QHk",
  "key13": "N1PyNmmx7hzngeoFCYoN5dNTtuCUD5xpeXrNyQpNj3ycuSgjTjSu1uB3uNJrK15DubmA81f8gZgWbNj2BUQ5rqz",
  "key14": "q3QtakuijS5pSG3Cg7si2siXZF2ZvzBCvXrNqxUkN2CjH11nGwAyjCu6izTikc7PpRLMSVLU4X4B3Y9stJCLSXJ",
  "key15": "3uQwrnr5RcFpBou69Dxo88mie915F32C7HBarhcayMMxWtGpQMzcnaepWmSuSPzLtWVvHNg3KMh5HfdGmneaZYnt",
  "key16": "28po4zvWJ1UJFQ9x2idESqTedcpnqdVcgDGcDP88EJJHyFz93JN6Uuoo4kV3R9qX4jZRZmPfoPP2D7eqfYsLmrmq",
  "key17": "3Cyv1pW6v25K66Ww5UWSBq2gvzLea5GfrSgEtL1YvKeSymAdHnYW8TxX4CJEM6kXG12sxj6QYY9Ni3RR3NQEu55s",
  "key18": "4TaZVqkJZzRWM5sBrVYV1md8GvvJxSJo6ywQmWr7YmRvdZorJd2sbvjFwqmfGx13aDPwny9Pi3upASWaX3QrowdH",
  "key19": "51TQ2jKmqWztuCp7QhEHCs9KkPhVznC27yJGCrtNorj98Jb2Fp7nvB74e375NTeLPmWGNnPLvzCWXpmPL62bfUpH",
  "key20": "4iGiY8oC2QC5SiTqPapECu6q4VsKbeUhAqzxLtGJByW8djVexHNBiHCJvxbuCMYDFFCRa55TsjK1sjQQwLKiNpLx",
  "key21": "5x1b7uzQM7DBH5qS6ur7AAKXwindFycpJkwCiHYPhSmta7ph8hhwf34d4q84AU1mNZqx61PNGcutMctMsje61F15",
  "key22": "svw3aPuBUSvb4bPRLtt5qexHwG2aoGmfMape64t3sZUp3VFt9FTgkaBiZxqpEcTpRt6CZEt6VuvUYe8qfnHbwWh",
  "key23": "YtEUkk1SRpLBXSQGWg49HbXeUf4RQntAo4zLvEGz4PZghokjnpDUqwzmMMR14fapRJ66hsrWwrhxgVeJ32hjDek",
  "key24": "5GrzvP9CVVdipWGUxere7yubCQb7JJnyD8HELz8h6WVXb6b5QQJoHKrKzqeFqXYuq8nFFxxQSwQmoAAicZXtV7u8",
  "key25": "5XRcDHwYUXoxT6NtJxjjf5GCfdR4yhkYDc9gEufGKzSbnsmWjbew2RHhYWatbyhSGGJhPLr48p87Z31sCJUuobZD",
  "key26": "vGqZ5wNLDd6Fkur1kYgRRhKgoNNEBknRgC6C7FpgpF9VDtFqRrFbgxGD53A6J3ZwuGSLW5aUgV28YeyrzFcTxhZ",
  "key27": "2sHBucViySXKzEbxpSXvSNhnnYXsaWBzMLWW6u1JQFvpACuPxQnQ8MypXTNj9zHKamQLuB3SG5YzWPPh5TaNVTzB",
  "key28": "36uwWvzB5xFyuwqrBrE5MFUuADBs2bueibmut4aETjPRo1DdAha7tJwczcYfi6wZq92u1oiEkQwDEKisLoD42Ffg",
  "key29": "4TnGW1CP28njnSED1jDcqPVqj2d8SPGCSAgr6ipnyuAhZkHULxwAHw8CVgAmiUW5s3qUQ1etV81zT54thodDZUVJ",
  "key30": "4X2vdpcuYBjhSnWa51SonvST8RDr2JRw5FHS1JNrXaMbsNC4otQ3e9GsxaokXjQram49mtgf6BgaZRExiAhXzUBK",
  "key31": "XNUG87sXXSY61xz8noZGkJFiA6fDideKpr86sCqA3FUB4tpqwEPeDWPeiqMgodBfPDZW8tpK5t7PFU8SAKfboFV",
  "key32": "5QvZY3FPDQuNhpTaPNaPp2n6WxmQN9qVjtmLTmEL6XDEgJKxhdFpF7iiafGyRKtP8aeeFN3LDDnyiGmaeRtjqAHe",
  "key33": "34g8rHJLyLtrd3rWPTx7JMwyF45ew3nQ3XwRBiUDrqSAJJpJZa41pP4aZSZreQMUh9JhHgBRi58eqab3CXaBjoWn",
  "key34": "4i8UY5puKKEKsCaFwX7DHgev6vgCUN96fqRcsxPTss7Qjmiv1BRmBnvcLYwVfTJHu8UhsWWvxy74iPaHMxqTcGkZ",
  "key35": "4YfnBGGt4v2GeYxtLyXfaEZk33CQ9fXqZU7PfL8X4oP18naqHqBLx3RbMRYNxVNBsbgvyCx8pdNjQRYFVQaQLg6J",
  "key36": "3dag13t7ARgBvjQh8hzKTyJMCMJ96cQFYQ3hEHQW1u2wSzUu6AR6RPth5UcrSg7fotuSdfjHrUz6PCB8aJ2SnKXZ",
  "key37": "3NhcSUqwxCcmJzjdYEcUheiWmmbGub9z9QKEUtgicqws88ieUW7JwgCuadJjmrTHuzZrLSYdoggbjoKFyLy3WfdX",
  "key38": "3Zh6J87y7pzY7zzv8EoK3x1wNj4SCqufG4PBa7xNhDd9ZihHsqujk5FdBgryviviyMcpDu5WmDMiZwvy68GbnDYT",
  "key39": "GJ8Hoc2qUCAVH4GGL69ahGiZSqVgF8jCG7gvoQVJhqKZrtc13Q2gHrgNkkwaHhtttbncbrS6ZwNYMtTmeWM6dBB",
  "key40": "4ztFKhCrMnyrNFtWcrtkPBpFJ2HM5xXh5KDeVt9uAn6QabTz9id28ZEjadgTF4u7hYapRfp6NPTQa9Mqv3JmHSsS",
  "key41": "4AFdVGao7a1WPPmhouhARtH6XprV58jkMfc1W7JsUnZHWCXu2wm3CdRHA9TebCYQnVcSBcCzBWPz1uhu7hxWvifi",
  "key42": "9Tibn2VuGb9Dio5bWFVEYcSc5jyhfr1GK7afBHVnHnCNGKeHrqFfB3Mw9JFY9Wd9VRSirPr4sXANH1P4H5KwpjY",
  "key43": "38VFUUe6bkPBnsf8qXN1hvyzXTp3Kuach7TVyKNJ9NjqgvUfJ3W8yxBf5uZ1UrhVULdDTioDMG1YNE6cmTD4dFw8",
  "key44": "35nr4aniMk2hTrpboBVesq2qrksZpQwQGmZZZDfDwadB2uKRtPuW8hkWS7wn5dQHi1mKR79LtBJ7haVgyWGigMEL",
  "key45": "v4rXbmqDihqFQayhszHefi4eg6DTo87E8pokZQh4PPBRK9vNewCxzHKud5FcMK93w9BnxTe6C7Mpszp9W8bmk5V"
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
