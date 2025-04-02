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
    "55b79U5BNuBkdvQAjaDLQSUR5D2dmxeY3HFMEq6s4rpPkkSCVVUvfs3WsF8eRtBd61EeXARLiPNPk5muVuBz2t38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvXF7qgbSoQkRUbLxeWhNKXfQLT7C3L4rD815qBEdM4Dr9XsL7osjmEFzR3Pb1vFsWgmw9YdJdN9ppUzC2HFLXy",
  "key1": "2yZm4C7nU1dKmpFtfMc2VnrM7MEPz14HmNZHpDAVXDaMft6SXVFAhAfwebcQm2JjFToQcNXPUc4PyjsaZkBvrBfG",
  "key2": "2j6yTb57ozDq69wFjxjutigFVwwTUoUaAFU8tB9FeYyJa3cFNKzrZLTecgE3872PgXvGdgJKEBaroVsvzzrf3xH8",
  "key3": "qnspNqQUGuhe8qEs5FBz8JKAsb2J9BqGVkJYkP6SxSMLe5HYeZwS9ptuVMajrMFBGEQUJdYc2MCSJEMrFbjennP",
  "key4": "3KCWxFhjpQZWqy6A3jQYPUizmeeqfaDr1J7f7MMikR72TPsPnX2JKnP5wjhMZu5qG2dpPmSHmvw4ZMHCZ7PND8SA",
  "key5": "513y9f6tPUYEBNBL8K2sVvufFo6DDea5mQAt7nMyJ3QofdqPBpWMEHwWjnHAXokvUTpn3UyAanLaHtJsgCTmecKz",
  "key6": "4D2uQ7JYSgkSmynx2FGedY3oMUAKmC8DhokXPtVeaGvo7syxqsJ1ZfHWKfp8rpgJy5yTKmsmVkc3zKyYcegj7uwh",
  "key7": "4VbrnZiZicJQ9DUWC3i5eusVV8Q8th7umCp9YjEsRiyFoYUJHZbm1LFHawmrhQa2kwRpKcuASFB3Rb1ruFvH5Jy8",
  "key8": "vJBZNwfbyfa74iQRsvAtUzEG5XSdU8XMYY2HHzUCeSBvz2CnrBwF6zXQeX6gAn6ND1ozSjiCvBhD3kuuKqZx3JB",
  "key9": "5BwqdffW2kBTZbNawyJHBA8TUVG5GkABbWzShdexQkaYQ3i8wek2jUVz85hqy9svqrPJrzrgFnuHTcU52GRuxNXC",
  "key10": "2xSQSMfc7GjtkVgqBAq6FSd4NXX4UKXbyaH87K3LvGWA5av7VZJQTeahSdg1GrHzivu7FYtV6W8j5aQ5REM5FCRt",
  "key11": "5Wc4Z4PwayN7y9iEn63FFsz6jiaCrmk8ofW87reKg2KnZECyeJYmeUezpa1ppxum6gfJjApxUh2WdJuDFJRsnM3Z",
  "key12": "637PDCQBa5d5R25h22V8Lixrha96stCLfJHoQEut7TKWqaP9puD6yZ2fV3yNojhF3HqQ8SpYjre6zsjN8YLfDSzi",
  "key13": "5YC7siWvd6WvxiYHdM5UFfKZ1sQZ3CiiWPE1HL5PArzs1atD2aYyMmfrmR8RZJ18v62u2qNodm32pMqRDhn3nZso",
  "key14": "4gTXcncLqum1iG2H9B5b97QLxKKG1aP4gZautZDM2SNnthZvDEfbupnTtTU7nbey7UXwmLDLKE1rcRosjTdVrzvF",
  "key15": "2aEvTih2Vbg35Ptj3wewGTDEXkz8RNnojUjHrhHRcpaRLJP6u1gbRQo99bTug4umWRb2ERe164vNkd4tXC2LBvir",
  "key16": "4rFbpLQNkpvUjexYeZ9VQbkGzd8gJWzRmam1DZwhwj7wks57KAjizekhtYY6gGs3eu3EZNzQMMoZLasNzaAD9QHi",
  "key17": "gi9NPMLvDzLHTFHRYRB6VAWt3hD2kYAbbkjTbvTxxMstqtKgi2po3UZ65BmBdc8Do82qvm8v8CuDmXTGBHfzR45",
  "key18": "gz5fCitpaa4WD8thDaNxsfCtuaP9yGJnJGh7RyH5eVhEqqwhtDrf7WU4Ruwy6jLc5cZmK7JjFv73em1T7HrTohZ",
  "key19": "xfD7yCsdYwnBei5jgrhbUzxuDFcnDXXQUB59eCbom1VaeTf2kK67W9MTJdLgsJ38CvpyBg98U3ai3RXs8dHD4hJ",
  "key20": "4RT2gNohJae9X6QnBDqkKcgV1cd32xKjUaQJrZbQhTrQVdS8Ls2PjoYjYcsbyXQYBhGyvzQwvEnvrb8Q8CzvrLHv",
  "key21": "4cjanvoJFXRVdiizw2Qw6juiaEmePKvBpNJWckmDWFq4QvHvkGZ1SMVSpvY1SrJoad9MpQLnLnMHCwXudUhH52T4",
  "key22": "26tT3h3tnziomvqqzCGCiJxwDAXgKaqzfxvhAEiTnZ1BncstV56L8CPsJnyiCpCKFYPL39fjDUgqf9hC4ojTRSZ9",
  "key23": "3MstkpRyhEAXHejaNWVTcpRgY3WCHCCVHht5VvHmDu7He6Q9dQ21brr1NjrygaC9srUt52Ezu5tbBawwASk8b7LE",
  "key24": "2tYhJTfuurHucuBaVSVdeDdZBi9v8xvtgDQmRiuPntbmAp8cKip3sG6FawwnCpa9Erq51QF3hcz6N1MU69j5phmJ",
  "key25": "3Luwt2nwy7JT9cG3FQDAbeR8Ss9n9R1PnutQY2boakWFiQxMkmaYXVHvfzV41FHeab99H146uQtn2ThuDS1cKKBE",
  "key26": "yuhLvdPDJnwxxg46Rbn66qMaQ2R3uugHKADCRDRhVpX9rTK3bFYdfwDAgHd8n2riQX1UMa2QUDdbR6GComEc1fV",
  "key27": "2FYyubwNiWqDm5vwnDxC5guSjPALQkNSCSNsv31UtRf43j3mbPx5QATKNChuVGSWdqo63ZSFu6Lmqfx4HffsosQs",
  "key28": "3RmPWEaPbNdoLVLRg9pCSfrbCmXeQHoMPXUmkkXkFjAoHLBvXtXNLhareTBtVBZBjuRBGqFxiyayg5jwsh7igrNw",
  "key29": "2cm8bf5P2wP9ZJi3WnP5F76tgMn34Vt54jgJseVTFABzQSxLpvVFzchC2ZbDzGJEPNStUmRTZbkyYu4rEHYJRQzv",
  "key30": "2uhshKrB9VWipD3xUnwQrcz1A9Fx7DHafAsL1KKcK1DzDo3x9NBMe3eeFWysydQLmzeqJvgw1AokRWTGCB3Dhy5d",
  "key31": "66DD5xyqK1jQRmUurcsR4mu9LDkZw5zhUfAYFwqbe6j4uQ6xA8oTB42LMGxRLd6FsdK6jErELHbie2Q5QWP5pjFS",
  "key32": "3zwTiNqoYUfEWFkfwtTMamAAWHePx52XmFNwd4Q3Kn1RuwxNcVx29YKxZ1r6m9BAtJsTPK3UPGGpYTKpqjmsoUuB",
  "key33": "5mVknoMGPNsydoZv3P7mioMpQcP8LbnYdAnpJwztp23ocxMcxoLMjh1aQ3w6sN8sLsztGZ8hutcvgRoJTA3wFBDT",
  "key34": "2YfKjTPfN8NuJP2MtnyrTejuFuXfKi2h8725cENuPP7bvC1zCQ9pc2y8zyvbKnAsDc9iDygDkQmhxhfY1obXiKJ9",
  "key35": "4Ach48iAhZBUEs5ut5oaUDVyPMmtfXznKbdKutFrhmMX5SRiG4AdVZj4FvcDCq1U3HBg9dgB97hHfAWriL9nPZJw",
  "key36": "36QMaSLRyCsSydiEh3CEQcZQaLNHRbbZFS2ZgEeiGvMjJMBbpNztaJ12C2xu7ERKS5AwS8aTiyUNXyYtZAmkcE2W",
  "key37": "349A2X8FKQWAsHqMdhqu23UeuHTgPw88D3eNvZLEJahmyLXJbEKmSFB3TAdg53Yo6e4PYWnMCYsFkoENTZaMqfGW"
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
