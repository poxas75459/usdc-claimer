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
    "4kCm8B9iDG7VnWBp62tCSeJgGnKeUvtxDWsQwvmCv4Vkk9BpEytk3X9HrHetqC2h6S1h667TdxNg1KdoHBVFxrUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ia2mNLKPcdfrDZiH5MGv3Vm51YMP7FTXPzi5nbQqoZwyFXzL1hAVdryE1pvRYs7i3VACZyyuoH6tamVzYgS3hm",
  "key1": "3eV57kk7m4mpQMzgEanyvxxGUDT2qStjTXR5nuf1KDaTG55oXicd6haMVJPgdeiUsKhevBgsysqoC4DsBeXbEXoL",
  "key2": "r1fXxjyqsEMg9DHE79RhgthMPKhHQQjhZA2u9wUNpgKSNRgA8mJgKNXpXTVQaUxGoWoQCGZiX427TYcWtpzhbb6",
  "key3": "3rTqq2x4YiDMLLnXoku4mLZEi4UM1KdmF9upyaFDpVxsVvGMhJJfWLJ1eNCiYHXrSLuJvu1qeNrEa4JoYbMgQed5",
  "key4": "4Uph1Tu8cJXdqKvfKogT3JBr9Ntcw3YJjwji61rrCjCNMqA2V5A6FZyKd6auydMVyMZAbPb516ASBeeVf6KqfiAv",
  "key5": "4uCJJyhojUBEsc7ujgriWdUK76NPACPNHJPsKmgoFb8Xw16c9p61zsQq1MhTdrLhckBqkJikSHmMgmhmqwEkzW7b",
  "key6": "4nozRh8AXtTo7YYoUvzvq6sAL47xN3ifM7jaaZTi1kV6TitmiSTCpTgTDWzXe2RLRS5XcrrhykPDwADeskRT4TUK",
  "key7": "4jtZiKYrHzdaaRkWHcEQTZ5LpLY4eVPCBfAppm8uatMVTdjs4XAwT1sSiXAfHst8z466R6oCoDiGyJ5Y1bbSDTqS",
  "key8": "meSQDjNFZaDwSc1SQrqSD9jj3CdzuRoqZuArUWY7vN4q6nXWYKCiqHbixU8xfGgbu3rXmQSLUJ8M6jstr6HKjR4",
  "key9": "31fkTqNfkCoqzRwykVeJZcoXoqB2X9BeHJWkFsYYcSufeddzGha1eewn7DsnRF6k3Mdo7acQBSu7ZR1PSo5fhtUQ",
  "key10": "3xGCy1TQMxgifu2J2rNgLday3K2Hes3TVYyoXiCMDp1sdBKgfNBnwWdKhtBAvRh19fWRXYQU6JBhrhyZQ8iNyb7o",
  "key11": "3zUM5EPcPLCEQyjQ8hXhv4zLFJ3hEbw5czsk7jKQHLfBtEtvqsyWmpa1zQPEr7g6QK7HNd6zW9sWxuqSZHFBSsBQ",
  "key12": "3EvgNgkhTrXT9QCAC5W8SDPZhvBMjsyoJSSJtJDWUze3x6BGggD5umbVSJ26UGc8F7qtEUeiKZkdHHhaBFBmuuqw",
  "key13": "3UhXk5iDi6HKVDLFNM5nhTEXSuahLkyy8EyQKv5vCZSQMn4c2f9JGCuD9P5ukDZPaQW2b85PRXxeA8KPD5GVTwjE",
  "key14": "4VVqHmACWuBSTiKZVNPKrSeaL8YPaBnDjm1ic3UaYf53AGd8jMcit3xizM5CSZbgM7uUta1YJM6QDzaU9p5NoPCW",
  "key15": "29T4kC4855KtyTunSPKDy1rnPJ7GDRkfvwEMFttwYkznyJYqX5PJuXKZyrShyxwmsWbVe2BUjrfjGQFEc2xUVH4L",
  "key16": "2fjYW3vmfunF29umQtoxvM8rkec6YRmyMrcSzeMvTmDkay9GYv4FfkqhvqzbsvGrqjq9kdcSQDXSCYCKcCZueWAm",
  "key17": "XLbRtwjMapPbBrowVdY3CHohMfuRmmcwoz4AQkkAEPrZ5oFbPPoW8QHmm3wDkMXK7cNxLReLcSnR3h3QgLmVkqw",
  "key18": "28b7TofDa5fKpfPnBX9UF98LtTbDRyiXLsmR8n5cKPSQjZo8G4Du6t3hk9r8RbVbzxSaVwt2tYe3DdcXA2aJPrQu",
  "key19": "2BjKQvyTXp7iVTuVXiVT3fBGDcvLoExH9TQSGgCTutU9t5oBNY2oiWWr3S8sKEN91JnbGHvynEXvE3LTCtoSv6o8",
  "key20": "2BuWNGyDTWZK6ZxkCbkzNpryab88gVZdomr8cjUiAnrBFroU6P1Tm5wFF2fAwMGTQxvewEuxgckDeKYABaoqezH4",
  "key21": "4jUoZKPNidNaypq6BKLUZbydWQLUi85SFyA41c5nsg2jafitofHNFcBHqVphwPovZB2YPSpa3RTkGqz1NC4iLtk7",
  "key22": "4LCVvfZ52w69e2quqYZR4LCfcQqbY2DqmWZJ3D2fNTSBYBxXDxceSmd9NhZdAyNhim7a2W2LGY7sAG5oPgjatW23",
  "key23": "7GvXiqEqU51dXMpGKF1S9zT7wpGhptF2pbrXZpoYxCRXvUJt3bT1wN55TbGJXpAs7z3YkBEks8v4p9hBEstUhca",
  "key24": "RXW4fcydvnvozxTpLpcP7DHT4m54h4bihUhf4ZnYrVxuSSgknfoXg8FbGqSFbfe4riFdtYvqe5k5ZzJHWnHUXLa",
  "key25": "japhF4VYPjKfmsAMTmVC31knLBdZrD6XDybwNTqfB1VWR1jV1sqiintRpGghyomJ8XZRC7BLXLAKqy4GE62yMhY",
  "key26": "2Jhg4LpGFqtbMev3PAMp3wx5eZc3tZvTbY4DjPA59aWPDVcajoy559MeTsmb6mY1o3ZBT7fpBhQwK1hxkUVNZ2bA",
  "key27": "3gsxej3pJzEv41DcRGuM8g25rhCKK6gy4wmnphcFZ6aNU1upNQBvCnrw8uh7ms9RWwwqHoxbKDRLd6gy5dHuJr4M",
  "key28": "kCQYHzn9LoWMd5tZXTYatAbHv1Rx37cSvGmuTLxWf1H7ZF6d3GZdhjrAfziXPfBkXdF52wC6vedzAqP6AvJ2AYZ",
  "key29": "638f6gpGtyvZHKTzdSnCCJ1aPLTDjZ2yy5q6A4on7ofqUoKXjVziFrreUGkZatACDPJTQMm5W7UgE8U5zYyMm2WM",
  "key30": "4R3nt2hRBmyuSZga7UUo6cViqAURZvMJvXzwLwkmL9JdcFGDNYk4dVubUwTk3Nc5ov3bdSQi6ZJmRZzxRCwazKNF",
  "key31": "2TGF2M7SXUsC5oqYTzfPp9P9GytS8YAzBQ7YDpxHyfB3QVsB5N8JH2VuYUZN71PuyNhSnWF64xC9tPwybDkn2f25",
  "key32": "52ue41KZssTjH6w88ErQHdFRL8BxbQk6NBApuM6P7oTuTYVG7p1oi8shsD47FAKD4QDz2QXUAekjN8caTF7gkq5d",
  "key33": "3oARttvyuWpw3wy39rpiKR3cPosL3o9sptqhJLozsVPQFrYdXBG5qJvG1Mb5ThVeVKW5gnFiGTyzRcaAD4en9KCE",
  "key34": "67nTGRzVM3NZJezCVGMxqthdNpKtowxB1UhrCVU7KVbKWthDXuPQaFRaxdcDV5jFTng78MdDLrwiRvg1x9aCohEC",
  "key35": "5aRv7EtbDVt5VHzwBVBi2mRXmbHx1XKLcCBCEXuMDDbR69dENeuWaqPCZazTvKRNQi2s2SXPptYBcAjfasKRjaMa",
  "key36": "E8TgDHsD8XWfCyULbg7ShaMb5n6KkzvqJPFzT1mwJJEK8qQEQYnddkWVydV3gkAVgkrzKfHm5rRGL6uQTznN6mk",
  "key37": "2Aub4Mc8LFw5Z2NWxTE7wxFg39inn9DmBNtkyfvSzi1vq2EaPdNxRkN997NpEfRxdZCqVCTdQXnwEnvZmqofknTu",
  "key38": "4zLP9mEdjNKd4setpHLfx3MGLZc8MFY5PxHrQfseQLi6qEHpKGQhwCvNZ3ttMpKYnGRuo61PtEjcfCDiv3at8KAy",
  "key39": "2a5NBFppArjtT7i3n5N6Z6dWguuwGditEKUWPbk2quaxAw61SR4R4YjMxEkXZcYfAevoX2hnDkRfJeDZTCVAmYv",
  "key40": "F3SMKRmsGSUWREUCtTNLqbysgStBgdb2Na4ZXGpNon1SgfPgRWocDeLgvsBdYCXSjrkDtDpd53EHYpVhPDe41ke",
  "key41": "2pTT3k1MdK6QRv5D1ocRSRxKY5DWbCHH2QQPJbLESTDYR71k4UiPGEzTsQPtohXZVSBwiU7S5cgwdCx2TJcLK3ew",
  "key42": "5h47uT68m9X3uDXyARdujPmjkcY2fef7gdUQckNp5gjKLcwbt2zqSe65s7pwBLcbmPUbQdF8W8hLr73hiJEQicFm",
  "key43": "4ZtCuDTZUvsU4dUbbmBfJbT8qEZVjYrxnWGVZ1pG639nBpLtfWsMzqYhhsQLzchQ5BrVhgbjTHYk9kGWMAQGWSpD",
  "key44": "64TL26VpBoVjxQceckad9JDxvAQ9mPSEhpDH1oC64xAp2QsfPZoXVygBJ9RDmGyX3qQLF9EawLLfqW1idjkYfWYE",
  "key45": "7oHPRjLkYNkjmmxzNNtr9WnNyfFwZd6XV5PHfChSXSxYEUGNySt7VMzLVnHzGVSfktLxF4UMRdKz1mKEfoAAPMj",
  "key46": "3F9ZsGvz8P3Rq6UYuowgNWiA4fDYUmgpNvwGyZwRQvLcToYFL4KoQDC3i7kyF2QYadZSpmiipuksEEAVox57mL4v",
  "key47": "2jqR5NCUeCikaxg5tKSmsyEBsk2HXm5zDmAHFY1RuKdTvBkyV3hxtgKo3VqajpthHNuyaq7DdyTYcVLHTEhJErHk",
  "key48": "znKciM2mfyNNBE8wLqRgTRJX13PdKqwzbMpDDbfSJTzJCDHf9v4D4nU6ApaxX8HaajT1JP7GrnGBcSCoWtM4xyG",
  "key49": "3qNcKpLu9Cti4GGgEqesWFGHt63sD9RJZ7G8aUJKiXFfuqXC5NSXeFZVzq9h9rYGJ6SyD79dd9cQJ6dbT4x8wyS9"
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
