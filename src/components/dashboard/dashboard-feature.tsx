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
    "5wv1bLVkK5xAn3ehecYFe7di8oDgf4H6VuspJwwbg1LrijR7ZRim4zX7RhmRfgA8Y2CJArFRnoGfuCTzsPDccr4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbrZjNn5ZHiZJZHn4cqXrEdiV6Tn6TRaiAXzTjvcEtoFgGNQf7J4wVVY8qDR3txcLVGb5vy1WnC72wQv161nyFp",
  "key1": "5kXsPXZTgQzJ2gXXz4nSLAioAGgVNkzPXkSu9NwuucEAS2ADYQna3HHUcmd9MRRjZUeDDtbQgtN3S8stHAWUo13q",
  "key2": "59z3vT5oUXmFsJufUKoRa2BdLGVf7tvSNt5MKw7Gc4m3DT6bYKaQbVQecVwtTKLkXGDMA8ajb5cnEnBset2KtQUf",
  "key3": "4RYPG5SqTDHzBR5WB7hiVNEGViANNe1wanXz5tNdJpUuqm2ojM9y9omXewgM8LFZ3MuKPmw5yk2vWDNra8f4W1sv",
  "key4": "2h62tPppbnRudhoxhdrKV1wC2hQGZbfLtEd6sD9EnbKmiohxTKHqe5fLzwzoNW2EftUHtSzoTNgToy2bSgnaCzV",
  "key5": "22DWjNMvh2shNqRYCNw2xtrvB5kdY2FPycK1Xndq2G8WyuFiMxkYNLWc4rMvNuSLKD2tPYDWFjRoCsP9GDijYStd",
  "key6": "4ivmFk4GXVjDhPUhNCj4uVFigmugYpMcGScKEnTS5qdMZtT15nCeK2gMNsfwzet4qCbJfzp3RXe1AwBmkci3XMXh",
  "key7": "2N62j6MN4pZUbvWYHrBMh8TrfuB4NfCNUX3ytdZobNo7uoMaiWF1UKHNDn2X7xPQn8w1jhRCJE9hxWkNe5oYeZid",
  "key8": "kH72GtpbGTMk2mFNi2ykYVGxhJtsKhterxMwey6GRmDbrQj4BjBnKCV2RTEfCJcdyxN67gc7qeNbRjRhVs3ErNZ",
  "key9": "3sYySBQBVUn7BrGz3d7w9GbteefNymRShaDwEe9RY1odAYb7ECuog82MzHY4ARWLF3v4DaLZcSnWMgL92AD5ZVg2",
  "key10": "5AzkoSYDy9A2CoLkzBt4EhtFXSswo4ha6SBaVBX2bNz7r8EKgimstrJ3Ud6WyKYDjkJTWWETRd9emorSYhs9uREJ",
  "key11": "2SBrVmgkm3zAT76aZPicJMTjvGSbngbMQrmY3t89hfSTkpsAq9VqAiumRssfC16rrgGvVEg4S33qkD2Y5Dp6cvQD",
  "key12": "5WmHGgXEbpysHF1tBhzgQLczm3yx68bk3uThsDJuhqehy3NXPdmxhcBzMZasNjPveLQhZMS9HKbpLYqHuSEuhwFr",
  "key13": "4iThpiRTPxv6wdJWJiTF5krSZJ9YbWJ3AmbEWBqQ1WpVwmagwx27sK8F8LPoadqUxzQnsZ1wdLrQCoyyTaJLcqfr",
  "key14": "39KQu36uVQEvm8BfeWMY281CjbSa3UXDJh6gtR1yQoA47CmNSSvysVvsYCDBWMDkj6yDPxPKPN8bWCZh9E6FgNg8",
  "key15": "4MW44qot78hAH29LXc1T898afpmy6Mc3KJxFCrs38pv5rhg4CEtrT4og52rL7v5YwxqGJisMavwP1vApDTQ52btQ",
  "key16": "EA4GVC8jYfumaxWZ2jNGMwmfbRFDPvxCuCBSL4SNr7qyjywvXpUjAR2Y8gLYck8VXizpq1ELYf8EVB1e5oKDHMU",
  "key17": "3utZ5FLvq94GFBseua3X32CHK4rxxjtsDsD6RhCzWSZqTbPFch9fw6n1m7mhqrsiHxbTh3hNFcdc32tN51gAxnyU",
  "key18": "55sZ6L8WrzGT9TAHeaM8mZMyz6gq4QhSTbhaAk2gYkXb6uQWR1rbibo1NCFoJgNhHhEQTMuphZgE3ihCs2SGTb9e",
  "key19": "4s8XWCtB5uk58JQDezPydrmPWkvKteXF8qSCJbMDGXki4o4TBQgZXfWtpimuZZML8v8qcbpXB1MutBBwYrUp6huV",
  "key20": "55r7D3bcuyL3XqJEpV7CaKGVxkLv51cXWCgGaKDpzSFUswNnqDBVG6Ln3Ux8eH8nxC1xAnnjVjoEE8kvCdkV5VbT",
  "key21": "25S1iUi8cKEvf1vSuuXKGzJ2jHjwzuZhHTwUyPq4vGwW1JN5PwDCu2WNi17f5WL5iGxUeQFW2SdCexHHoDYcG4hf",
  "key22": "2oJ2b6uJ8syFk8zK43qAcA2nhqqhFxCD2QqGwpx2sd4c2CKa2mB67pWbScLspY5YFsPBRfiiG2hgDBtpvuSv2oY8",
  "key23": "4QkzvM3W8Bfdb6EpxZcagr1FqGDz3LznW96BKnR2cNu89wtzHZqrJoT32qizkHr7G4QTRmGmGbCZM7ZqWxjSGcLs",
  "key24": "2ymRTbKLs2V7KxZCQoZNByhF24toBaTy9zRcXwA5G21Wq8g6NFTmW7pZTUTN63nY41QX1vHQHhACcJsYXAKrD6Xt",
  "key25": "2za7y4NVVxPewNm8AXHJhbEEcpMVzzQhS5iSNbdzaHTjANJEd5E1z1vVqsxEuSnkazNhTyTF7ADaxicRNbTTfGJq",
  "key26": "3JF5yTT7HVtx9uVr55UTURc9ptaZptm4QxzqckjjMUnpe43QRGQP7eGBS1bimgXYx6bcoGBctv4UAeEqeW6yEbQG",
  "key27": "2d2VkvLz7HUmEk6pmjG41Ssg5B3J6kA61yXXtn9HXWbCpk9WLHo225M824PVR8ws9stu8S6hfxk9e7m7QNzJNxy3",
  "key28": "XkREcupJSyL1Rm9z1edkGHSPCV5SxDEvU2VPhJkpbf4N8Lpn9T1K6bPCUfQeZvHM2bndmi8fRqV48MTTsvMTpfF",
  "key29": "4aEe3V7mw7aYZMPbWsB1ZjJ1b3hPjv929CdRoCe6hkyurTp5UXtfCAW9unUDJX9yX8noPMHDDjLVTpYtHXvCcXPC",
  "key30": "cDnMRYAdVvn8uZfQeap1GuLYbBkYBbWHDKbJFXq3thdcpYPuXxjY37L5Yh8nCM5DpcwshRaZLeHWtRY97w2uGE2",
  "key31": "4CZoV62RmyzPJxPjeBAcGoepzRc3yeBb66Kmw56Mq2ZTXrqTMVrkUM5DJJndN7wPQwYPnLhzNcrk4DhmFwH824Nh",
  "key32": "3MPbdEdUCm6k5HDRN6AwABGbwSbWMLpZcgvcxs8JSg9Rb8o2AmQKmcsBUMAAZGJR3ZhWEUK8yKs7kA7FqXR29kr9",
  "key33": "5keaN33n9aKBEyKk5xxz8u3CwGFckWhknKFBHqfuLtvsC9XExcjBYqvzQksgxskMXpZRojYWGtW7zGiEJhd3GgrK",
  "key34": "42izRUJZd5gWFDdkp5cwuvwZvK8HP94hfbn44mf1f1sdpzGnmb7Fvh2kjwrC642kJRm6xoTctewddEjeRAeV3Toe",
  "key35": "2B8N6PyNiqFHLt61raakLsSBhpkbFJn9CoUiLE5P8RKHU66Bk8YkqNSPxTqhhC6c3pWKPv3KbCfdZTua8YLsdir5",
  "key36": "5EGMJW4snjVe7Ks5CrYREhtWNCaZp649wtXcxFxXeFkLjupN3QLqNktrNibu5UVuspUy1UMiK3sfcen9LFBwZstH",
  "key37": "Pire1kxrNMu5D2FkMHewgic3jtA5eKJVPZLoVsK22RzxAVzpQrPbmDYEtfPL8QQpDGGymLv2jZANRFbnyigBM1E",
  "key38": "qdmsLtVrJtvksbpxLNzuYKSWF52KJ7R8ifsheX6MsQWrXFWJFxhbA4WiH333YaZkZpr2YTs612Qc3obURAf1ccc",
  "key39": "H3ZdQbgwEfY4Kop2wtTT8VXkQ5a6dkLNWSGZSWxwrxr4n8ELsX322bH7Dawd6dkDd4t5dY4M5hc4yDazeC4H3PM",
  "key40": "4nwi3c7UyiPosaKQyt2DDLjEMjcRFRakjmKVHn31LwXQb2wbn8PqGZaikhNWpm2LBb5cYC859jNyxvvUo3rTkzkc",
  "key41": "3JaicsJ8qqCmYPtRoeovaCBpJd9SapKtvp8XmjYVC3CQjapvXhbqNCgrsX84HGPZj8FGzRjDPm36LMdMfna5fmin",
  "key42": "4GojUa7QEK7vr6oBJBxcMAke3tADddrN3DKQP4bFCz4XmEtmNGiFPWyKs4aXDYEMYHoR4FasZNA8aStSiyMaeAre",
  "key43": "2rWgvtUabaNr3jeEfi9nCLV63nHcCs6vgujhX5xmmsggqM4WEgDN8qx39WNnegXtMpD3asWYRfJH57ELoGkW3cQr",
  "key44": "T86E67GrnWQrozBGabJuzyr5bJkk9BhJL7joRuaNK35wWufPs6pqRxUSFDncSts3tEYBt6tQnrKsyh8F1qLe4UX",
  "key45": "38jcB5Fns7xGFJo5X2RVNTh1bm8XapWCiKe6WVwvK6r6o1ttTAb6kpstWHWBkeseJ5BLN5rSMZNh6i13ZMb1zxSW",
  "key46": "8Sf4cL6gpFqJfJizMVeMKtZgzcW1XuW1kdDqiBifvW5iV6T7hyyoNCfmbpfVRywVTxbzQNHaL3Ds4Vfn4kChEEK",
  "key47": "4BCswBC3JwQKAqyn9q1n455jQbGEHDofuknpbRXXLBB7a3m7wzeH2XTrTXKHKQyvmYA7XcVLERtL9YwpS8DKRpvN",
  "key48": "2Yx8FmydQTMf9XMVsC3o2AoL3bUkaiSX3TsmxX5uji6XTBdAYmxRsmyR7ecjzae8vyyLKuNqv7Srx2aMWAjj5D7S",
  "key49": "Gu34M58jePgsHbJjkztafpAzQPWc9ABqCBdzZXQYMqLwzqx9x7XC4xocFgWeerDCuriChqc9yDcVfaesax2CEhn"
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
