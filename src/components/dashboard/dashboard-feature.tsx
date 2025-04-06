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
    "418kEDnwZ4D9yNVy4apq7X52reFKet2gH9tGqPyj5hPJQAYd31EmYPSm2WrVzJVvtwZSLDbYjHuDVbwkj4Ephw8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfYq5qfaXBegtno4Uvtaxte4peqXwaCvXGNxTRpa5FrQDE1RmnsGJgY9asPFDFoSuvCJrpgE7bk2CfLTTwkjSJ",
  "key1": "5aUUF5AwdB5vsuwcMfJi3uqpQSRmyCQ9Pxspz9iBFhXBFVDzQQFXLiKtPjD8U88hT2bTtyAb5HB8sRXgKbzjjZDm",
  "key2": "3mwHHWPT6Hx8DhHBWf1h2D9o3kJrxz8D9LuquyVDGs8KNRGFyJRn1N4xwyJmDWc7s7XBoNtVwBnhMt9SECzcex5S",
  "key3": "33bbmpn2CfQUCFkm9ywYePGHegoiAfCQ66pX5MZNzRvNvtm6ZCw2521w87e6eu22kdCmWjGtJXe5GarfwC1rNQcq",
  "key4": "4FhUXnWfTmx7KMmDCeZ2EhoErJEtBadeG5YwFtR7aYmFN17XLqLyQkyzmXWeZbYhux3Qtn93vrWQX9gzrXyuurdB",
  "key5": "nQnmmHn4ozPP9jk7T71EwheoA67nfxzEgBXFu3c4Ro5yYFMyqowHxvzNgP8tgjxGhsmSkZx3VR5ScbzbwS9CUse",
  "key6": "2s6XbDPXDwRhaBFP2iL81Th1rrnh2gX9TUV1wSVrndbYnkWZbcY8E6wr59T35y6VNPNpJsohMyW2ds4qAdqoCang",
  "key7": "Q64GbFdT2SqLDpGgnQmm9VmhwJTqzam1y4vQRoy3euqAgTQddSb4rseNKuXvNntx4ZMe24p7vsa55uh9g7DjCBa",
  "key8": "2jujTU9z7zMLJqNgGEnMuRnKhok8FGqQqhB3keg31rx29McmaW3u4cm4AfqMvPrertxKBtCwPNSWCA4MQNBmLGDD",
  "key9": "3MPVQrwATFXdXpeo1Vq9v1EridYFqrbukQFgkB171LdyZ8u19NnMvE3hAfvHD6kbGsCc5ABKPDeFaN28crg4HFm8",
  "key10": "2PXyeXbcLsyptWk8W8cezJ49BCnW2EqTh28a77dhhiDBcua2TCkHxwbYgoysE6K1B1eSQPRs8jamp98RzmQSV6Cn",
  "key11": "2oQz2hZRtUA9Tc74hzV9crejfYWDWnd8tomYPHMFakFpo7Tjx7ibQr7DGP6DS97phvzWC91Yvsn2WKDamTouQWxv",
  "key12": "3wBWPzVq5s3Am5Xdg1wEhdSKiUSqg4hc3kbBuqoQzecstyT81DWhSjVYyUP31abHtNrsHFkKjmUhU8aJ69d2CMMH",
  "key13": "4MUazCcW2Lmv66UE7J5GNrveb4gPTUNMm6eAY96Uwox3ATME7UeBZFwdS8JTKtPRJTj3LUQ1Tqm1qYJWubKUdCXE",
  "key14": "4S45BVCxDJhUHocXThXPE6kWR6vgWdoR1uaB4Jr1yWLfJoCNxy93gK4MtwAdViC9Uz5HDN9dkjK63bNHjuici5gn",
  "key15": "nujANjUcLm6j6debJsoz12fjYBZ4vDoGJ9WY1mKJUkdM7uEDz527HoFfR68NvucqZWr4tgeqJ84ThrtRYnfMAtv",
  "key16": "qnMVztToJgtVqb4vh8Y1m4GQKjREX3K8MUZvuZckoeCRDQTKy6cQ3jmkrAdxb1eicmjdhfgVyFubjaXtErHP1kt",
  "key17": "3MhCjYieJzQYmdPbitYH6FYZtpgy9jvCjRMaFHRNHDxJ9fpk3R6PueuHQkKjKaUXHcoF4LwQa2Z5tzpF39yxygs2",
  "key18": "URthqAikNPqjjAgLhQQNn2J5MwTW7rLsgcXvv6P2FoLcbakFKPvpJ1nzSP3izkJV33k5wQtJx5XdF2mra8gELT6",
  "key19": "3HyTpnrKcnbYu2r9tSfMMES5RjbzXdWtG9PHYsEkfXazCVJXKa88jJ9wKnakSLkK5efAnDBpfuDmhHZRfWPYdDsj",
  "key20": "4KRuXDjFqbdanLycbzmJvceNigLiAUx15EDRDV8aiJmGXbRCGaqYHFeocoN6khDJuoDR9KchgvNzFbw2XSJ6Y5Hq",
  "key21": "NiJsVzgTc3NaiH7GpUNEVW5Hfut4bFSzLTt4Y1ZaLSTHKZCdYBiJR3grErm8nfjW8ETRmQ8jbvWBxeFSSq6C7Mw",
  "key22": "5GQCDuWr7uLiAUKZaZvVkoxMRxeYWsizibhfrVzAy99zDpP4TF6RJG9F1ESjkgfvuAXMKY23qyeqGUbJHkoHGr8N",
  "key23": "3H9fufLvM89Zwv5y5uGoGEYctQq6RDsKcwimZyRX6Mktdbj9moUWRddfM9ccLKqXqmNK6vE1EGzoQNq7kxNMWsTq",
  "key24": "5eu6XmwWpwQAnXQPtvbyuFCanuaXw7qnkufNMfLSD1E5WXEcaq8wo8BdHorEVy6QTync8BPUQiTgTzNyuSV9HJzW",
  "key25": "5aoZe2waei42nyqBN7BjuqTJ3B8Wk5eurX6eHguu9d4ngyZx9hW3K79XkM7MqPxPyT1rn5zMeWDz95QyQRYWr1WP",
  "key26": "3yZ1BDUdtk5tFHUy8LkDsQUfhSg4fi5pFZMMCdT4KiNVkXpAJdFbBwSpChDPuB7RpK6fRdp3jaryXD61eTyQXKY",
  "key27": "qaxK8n7f36ydhSdXXCvpWbS1nkWt93fsuvX5ZQsy5RWMuP7CWoNGWDPY6vbCuGd27pm811iyGtnUWD6iUT4cY96",
  "key28": "4bnDzUyb6yFaPbURNJGzNEENubL6XgXZPWkUFfVcKPdntHYN8YmZghyM3NyVET7ZQukUFZu4pxTEEJdPrcz22zKT",
  "key29": "3Z4o5ZTLK4oXykTPUGEsWjeA9HpaAds7owpqN7Y3b3oS9CbkeWt426ezTrbCiVQBfPVNKzMDdyqDi2qoRMjD8UDh",
  "key30": "4qwGboVS8KghTn2GfdVqfLzsGZUxatn4x5ygJpZriLQL1nAss6aCPX8V7TrfptFXuRD6bxsZvSSX3ejsHSxxP36j",
  "key31": "5xBawB3aSWYvsYJ2CHGYMjBctLhJBgdx5SpWxteNhZiAGMbs1AT39wVoeC848yhSe5PXEjZ7ajxzEoFqizcnGZrD",
  "key32": "5AKY6UopvKPBDxhiKZXh2P5avZVjxH7HvaNPgutFQJaFgqEHdpsWGZWTKo8iEdPKxDhh177rc5ibN4mavNBsLuY5",
  "key33": "2rh7mcag8iiJwTvVVCGmwLrnKTGeSG8uQdNNm1dUWyQ5Uvr857eNSe4XG8ytw2fLMjoHJRgprwTr7MSifb5M3mBU",
  "key34": "MNesjaPzdT4hvGmTR4yT1oV4bN5FKkxQJ6ZFkxFhEguAVJ1eTyWXhJGWN9BJH6BBw94X2fztDMwQHzUHkHwSo88",
  "key35": "u88UfrsNvX679G5rmmtsHQLwqRwTCEd9is5GvvvwQGGsParrSpfamsxAbPNTJPRjxibpJLGDhJjnhJUHvC79fxj",
  "key36": "45ek5b7GzrAqpNT97i5DrN88G9m5TVhuSaxBBop5eK1MZy7NMVDY4M7WYjprbZZMweeNsbisFuJZLSbHAtTFcxn6",
  "key37": "44jKiNevtWzBq3D6DWsTqKHUUraK7wobXThVkdBQcjxreEZ713gbXcGWL2MdDu8BXxccBqqLf8AVgAUbNi2uh4N4",
  "key38": "3PaodNJfLHxRCNyEao9N5RwFt29TDv7wPigqNrTKycP2Xh5LLe8t2d8ANZmAHxdvRxS2PiaFN2tskNywvggf32ud",
  "key39": "29L1Lyv5rCc2SVFDtKvdrhtndWVLuxW2LSzvzDgpqKb1NThXXrxMQtEPEYJYL1VAYUJND4w9ifhQ7XwpxepwCDYL",
  "key40": "anLZZ3hcw8J47pL35mTgX3gKBzFmHfGxKTqLJNXSM6uRL8nypGdEjnQZL4N5UeKAugRfrCYE9QSQZXnCfJaXabU",
  "key41": "39qyzK7gPKsuQ6CzPrv82j3uqXmeyHUrKggeEM538knmvmZiZARP7mEk3KaXHu2AzKWNRRvtm7vX2f697hTQ1Uya",
  "key42": "3YuenLCAtCwLET1Pc5m1mwVmgis5ADp29co5xXMs6dQQQnD9zpUwJ2t51QRRiFUPGeR3a1buBihtQmesSbm7V2zq",
  "key43": "3n4xUr17UEx2fyJncQ9uxPNcHKDVhz46QkxQB4933SLDTqid6E4Rjeipuv7JNtM5adMWPXLcwhm1yDjT2X5grXbz",
  "key44": "2Luj8LpRpQGNn65fMNi4RZcEENobzZ4uMHTCJrHCJXVeQTWmcx8mMEoAmbykyqupVSACVcZ9pB9pAd61Dqu7P314",
  "key45": "5L4b5CTT4LtNRCuKGztua2jRa8jpPGNchFVpNPMV44AM3v1ubHqbHvmLzVQgHMPTgsaLtZXAjHeLQwiqsRKNq1fE",
  "key46": "45vcZzt5oY52m3d8xLUxzuynStaiazfbSZNbyKK3v9QipuNRa6L6FUyURQdNuCaA3ZFo5rnP5ovL8ZtZ9vUZHBnj",
  "key47": "57NwYze9d1GHWnNgE4PrwcUm3bpCveLbpa3HFWN8imqdpUz6VypUGee1FaYtXmeaJ3e7j9cWhGwkNGEMw6zntFmq",
  "key48": "1TqrnKLCzoJaa3Pcd9iG9fVCj214GQrZ7b8JraRN34sy5vfkBUkTLUGg3vMZor83NGtbRmzcCw8WNMGc7keevv9"
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
