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
    "5bdzWPmPBX9E1WYsXUoc5csrBMFc9C9X6QTg82JKoYgGjKkfegrprnQCCYfeJ7XdA3XWXCtezE1PUJA8hA5pYQtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1DJjaUpLHgra2vuf3RHyXftcNpadB7K7QFrTS5AtVDZLqWW8XN9mGWfR7iXtqFuL9EJTqYC9LUshHEKKNGVzV5",
  "key1": "4b5uHay8hLNhv11Hqj6MjfjZGCCZLvzuxPVQkisyn6yX9k9Z85EfZ33pd8uknDz82dDh3yNugTndsHP1cAioV5Qr",
  "key2": "45dbQV7m7GcXd5KzWcriK36n3Rp6w6dwK1pGx12SPB3atC4KpsPtYGA9H6Pg1PmwyxhwQoeuaCxi9YPG6ufmxGrg",
  "key3": "3xFV2yTqPazgnAHwyiTRTbrWwUQNf86meADVPErD2HJ4WUhkwnTBMGs3acnTbNHB4ZiUc9qwrkvmPa61cK2Eh63T",
  "key4": "42D2TnKJquDjhBCwHY5hVRfgLjQMPdDMeqPryQv3qd3mKM6HWaV1h7K5TZb1diXngcXaYzwepUkXYAkD8RfcQjhU",
  "key5": "49SBxYt7w2BWccSwCRqH5yzNrggrK2UXCBH7e5BDUqgitT5UPXt9N1v2fbBwgBHFKaLRDSg7sChCPrsKPfqyqgpB",
  "key6": "5iHNntpeMr9EXwkrJVTjd6neAE1R7pR1TQkgXGghokmHtzri2wxcV1MsJjdnE3wJtVKuchkD6NADEKrEtdTjAZN7",
  "key7": "3nU6VuSmDR5hjGofuVJi7oVSUYCNdn2xR2jW4pdRKQ2kBLb5FaHDVtKUsbha2GMcpwM7esUdPL34ZwdqpJP5jB7y",
  "key8": "2EoULZBCXGB2gE3JsX9HV4dwnopJjyFSnnB2vKhq4AY1XibFVsaYeZbg9T9MAJeqJy1grQr3881KBVjsi2k9dRoJ",
  "key9": "3RWuxsEkPRYMMXp4bcr4JzcxHn2ap8ABT5BiHW6WBWsKvawvbwHPa6hFP5XBhdoLn927ocowiM5MdvyBfHVFCQeJ",
  "key10": "A8HNqf4Z72T9GWb5wW8vFsuCXzWmor6od3WPBydBKZUx3UWUcu2hbcE8Pa5WvBSL1UzJGmwcd8mrYmSzUpqNDci",
  "key11": "FRGwv3RYjffMTxV8Bfe7P5FhpQjcJrHJ6Qgq15d7ZpNogPQEKQ9eLyG25oUVFJFzFuF2pdCi9KFJzJeBL8g1XVM",
  "key12": "3He5UK7ayxBc5KsW1Jm6PmeQjCZvEJ7bpjMXFhCDZgqf5iUBc9rZMXk8f4M55k4HRTx2XxywCR96wzVuwqxr9PcM",
  "key13": "4S5jwBZSBxYV3xnPCvaP72TMNbzvhKDWnfuf8FzeeczY6Sx8CtktLsnvcvvQTZNMdU9ap6hzNUfY1jFZV75WDf3d",
  "key14": "5mMzF5RQdEeHsKbwJUFoHkGZfVx3Y5JrrRZ7k9RVX6JaRCkDPcKuPmZVGmcwBX8S98ihR5xwcPPW8P2Fv5BQ2aoJ",
  "key15": "66KAcZwPRN85h6r8Wkr5iDQuDkMCYB9UhrCYiKwjYrdx1s62h8YteHSkNjZXQfgFzffmYrHmXof8Dqohsm1y7bpC",
  "key16": "4BJckuLY2G76CJFPTQtc3MhvTHHUWCJnbq3pgBDQhxsLBGGTepkd4FNAxf1oYBpFMmcVJk6DBUQxix1SuMNEEzdT",
  "key17": "525pJRkctELPFdk4gA2fUL39wJRXNMtZoUtK46PA7GjMBZPAfSSsQPuUJpo7EN78iB8E8DBNk2wpZDk9TEGFk1k5",
  "key18": "2nCoQownKZHueygeMcbsGYVCTbvC9ca6xUK6pP8Ff3NCQzZE6PThALA3HyDi91fXkKfb1UATfw3V4Lv73JM8WGRw",
  "key19": "5jhCEr7f9jBKCWgC6seYuZLqzxQ96jJt513hkz9TpKqcbdesps9k1K2YQNW2cG7e7F4FVFeg2BtU27yVq2565Ygg",
  "key20": "3gasTE3UKEeNnAVYHcQfajirEF7LbpUgTDcrFt5RUsgh27AvJDj8o6QtWNsvTQ2xVBifPhtSFYXDEcwBiFMtwhdJ",
  "key21": "2BmKZwc4sy1SiYYTw4ib7nNYRKxCSi4PYuhNBdNZJ4ku4b4dPgS733cs9dWUEDvGwFdmcC5KRxTyevRykF5yGKKQ",
  "key22": "518tUgF1why9abrbhGogQgk7Cmz5ehs3PrTzU4XBNuUsEcyvghtVDGKvz6BQpqV5c2drYzfdvn528YJyZdfXfZ83",
  "key23": "4vc6EnpLEPG86fnWC5LP77fRJixWNBV3fe1FC7aoFyyaG4om8c3omhCe4jCvDDhE2HaLG4k3H9vSvSSHJ4rPpukZ",
  "key24": "LrWnhp86CFTCPm6jXtTXPgjThqAxAyN5XCTmfc7kFEx7xsuTRae4VY9k42RUs46N3VSS6Px8L23asR83NgfC22q",
  "key25": "3LRkBUe4MreqJ6dqtgUYjLwkacWHdNnbZfp6FBd25ex3oiaEoQrYuCQZeA1yZ5cyFgr9YAozX4oYYjvogxgvhbL2",
  "key26": "5FiyFNWVUnrdTFKKp4BAzgkG8X6dEkuxwPmaPmvsMbY3t54xqjWykjG6qUEJxK4cHgTHwpTXn2DXo5JErKsafSB",
  "key27": "2yNFGYk1A2nrUyWx3oHeMdQJ26ZFMPVsJ7nNyPwnYaz1HnJDBN4ZjD9Wa6jZK5q2dyjHUVCz6xcmMjW8G5FHJqY2",
  "key28": "45khjmA81xQPvNtmUJAb3RP4xFJTJzjC8JJrTJ9b2bKNpkDr4w3jM5NffULz3NUvs8NYYdgKH8CSgRmcUUuoNJkh",
  "key29": "3kCbswQDmiTbnbgC2qabfkGFb919p2LnGxjRGMzfDGD9tpJn4TktV5egn29jx1k5LMn3i56K3dG8aqxaQppdPdzV",
  "key30": "4JdjVucoqhUsCq2MDM19bC5YVARFJtVoFZX9KSim5wyX2m6cdcpqWjjDdfrvGHkLNVr9TenAZ7gMLWWgiR4caFDA",
  "key31": "4ZGJHxCgEyEGCHyTsyfoLxoHwz8GDQrmHDv2o6Aj5mvBqzg2m932Zou9PMXPNz9AHRisqfvx2s5aoztNVjkD5Hpk",
  "key32": "47474vcpcFSNrE8bf7WZ7hPdUr2NFjsSKt3MENHFS1r46TtZ4KrsadokxSjVuoqJctMNKsvbgBZckMx8nMNScoH9",
  "key33": "2ZdnBde1vsPS8wZV7uCoEWqanmRMQ87DgmtEvEyLfQLYLCe7ngC5Ny5P6NaFLyj719MqCHa7RjGewJU7fkUPwT1F",
  "key34": "43ca5XD4hbFAGpQZcps4DbVe6cYcX518Wo8hhWpjJPNiEJExEdp9E3yi3QiVqoHTiGbFjEJJ9dCYwsExop9g8ShJ",
  "key35": "3oPDiN2d1ra4EEaiyY8RsZuh652V5iswA74JgHSGxtVxMPeUNCjySGcfQ9akCoTC6R4gnpdkdDQcmuXgZmPfuh7N",
  "key36": "2w78MmpQh5Hz4juv6xhyB7P1ohg7mzq1atZhN41y2b4gvpRBJFfD7xPB5bHp7ADxJiUgBZMJKnEbot1ZyNuWRd51",
  "key37": "3F6uH2hXCPC7QJ47w9VZSWpEdw4s5njDmXSgGpSZQEkKNmRRwQxGE7qdLsnVnPt8d6ESfYczDVusPULp6yCNkmZL",
  "key38": "Q4D3aqmWgjg6nNYRW4Dphyod9g4pgPP1h8KgQgeXw61JSZK4dgtH1ZP5aAKWJdAisLHFNUfVg4X7Xy5exhHvZMC",
  "key39": "TAPEA5UrQSUWQCcgNRzCgc5wo5uHncvcVDtQT88qtfxzR7NCcW4cqv2wySzYsoLTzh7Cod6eAHkKmeSjkJyycXi",
  "key40": "5fi8QEoFbgaJdufRLXvHSPxgcj5Qhte2T65anqDaTz44ZAjJvWWM1N24KrR1PfkLt1nTzzprEtDyUuPWG1K2wuvi",
  "key41": "ixA16yczb9ekSHPDGVDLzwUeWw4L2pihKncdupwzqnLWwECXkSdUeCcZFkTHUSyq2f82cd9bVEf5FCU6hb7jckp",
  "key42": "63XmUBedEYScxASkbFkxf5fhperCnW9DFVmncBCyfnahW8TxM7qmYDSgtoG21HYAHK7z5GaF5Hbd61gp6jeFQhk4",
  "key43": "AregvjsH72eTujCB3AaFu3CY1RfMD7i7G5UUhjgyBZE621N2ng36iERtg6oB3uHrjjMPa1syn6CCjCHdQjxmvJp"
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
