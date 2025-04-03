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
    "N1kg1mys5GdYRo7p2NLaGHBywYWzqVoJHQ5UHHWiT8wabHMPqSKH4pwqSvoP1trd8rJbEG27fY6HsMmT6hBSnf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZSuUAQpVZnacLSdY8uMRjHZmYDSWXw1J3BFTH7mkR2rr5u3fZ6JcZimAS3zwLELicaXBzbBtwfBKFS9sTRfhCYA",
  "key1": "2GzX3i4KpgZKe6P76PcHWk3mw1MctC8DQE68jMGTTAu2Y5bHGnc7S94HzBgQy5K3VBXL1nRAZkpeLczV3FdFtZXA",
  "key2": "5TnSYVzX2GG4q9rcJrfqpn19YcsRPRbohbcJ3Hh1vV1GhmRoRLC1JjTNeTPg1ZGsErPgsnfsX1x6XwpABatGeXP3",
  "key3": "4D7NwNG579WhBbCikdPxNre23TfeDez2y7gxLorUo2KZDr3ARHdRGWaWWv3nw9fMAvM3u6VikZLqBcupaYdGfCax",
  "key4": "55pvhdpBWpohkq1HsTxAK7Aefaivg8AR4TgQchTrYCLQadpYK8uKNgryYLofJEUze782RZ6DTW9T6G9AhKCANwam",
  "key5": "2WjbRuUzEp9hhGyeTxb9uq7YTVCU5UWXmNJuShTexwqJNtzekqV9xsTSFiGyesowou6xe2sVAHEhEPGaoXVyAuH5",
  "key6": "4n72GZpFY8ySWZZFYG3FYj3LApK5TfQyW2ZsCZEPBz3ZiCybcJyNCZp6oCjhZ8qcD9erQjarWucYcME85SniJaGr",
  "key7": "2sNhimfNCS6QWY1TbxVAX1LtaBvJdN3AwMhbgkKMA4Px91ThLoChTH5z9RCWE2hvMzPgu1ka8vrJiKzGbUgEHiYo",
  "key8": "2BYHLxx2uYjyjKTLXL92Gh9A5Lo7PVPT9uk6iQpEXvcU1EyZJu6RTmKPQMYv48SFEtMqZzU3foEoBtFYZoNCPM2r",
  "key9": "2jsBZ6XAoF1RjxqJBY8T2pdbqsyxfMsAgFic6LGZhHazFRdQnZwFWnLC9wvk7HiVwRAL2Jr9MPx4zMoFQYB17Wie",
  "key10": "36Vdqn9z5mUoKorrjeckEf6fDvm1XXKpAHfZDEzchPYFJs3eAsHk64sS2UrYTLUHiaxG3shybEMCRiWpuBZ2BBhw",
  "key11": "QYaPCepZoF7kpUgeeEaL6ouU3dkPt2iSeycgu68vJqfg2PvYjryS6TGUsMqGfiNVmwxwQ6dihL3TH4e7s6jRqEQ",
  "key12": "29yX7Hwr6dGbajo97c8dSk9MD6oTHDqUrqrrpy95Lzg5AG9Vr2FwS9S5RtMaN8DZY9ch5anYxE5wYd5jtYEwYYgK",
  "key13": "2nFkL2czBVNWtFHwmFAcyqQsmYMbRBdn83eo8PDzy6CcZD8QTdXZEscVXgL78UsWDEt9JaLjRjaLKJm8pQuWrRJy",
  "key14": "56eEa5dwSN311jppDsSNVSgibvh51MmWdWqKjwfMUjADZHWUe5uYUy8yQCZQ5FaPB6gkxdKVii1gc3JyDkTJqck7",
  "key15": "3aAzRZ3cUyZWZRTmzn2rh8hgaTaU6Xw6516jBiZCNe7B3RdtrrPdNSqBavvatym4Xmp25XumF4Q1CtHpB4nCdS9r",
  "key16": "2kau8vt5Kv1kk1wxQo8pP4dvWZ2hToECGxKpcAEjwuWMerZJWHoDbosmpGM5dSV8PhAd49r6U3zc8v7AtxtptJuy",
  "key17": "2JYM6raKVoohy9PXiem8RTJ8Vfq6mQtEC1oX48QB2xko1Tk4XhmT6JeJxd16QJ81WxmQrbGN1txdU1Jcb7sSkd5q",
  "key18": "3J8sWxST1pMFFNdRSkncT2VMPHsAAx6ee5LBMkrR1AS79YV8v4jLYvXHxhTwa4VTzKc5Dy2hrGWGZnXmTCNPzpZ6",
  "key19": "4HMwTbAMw3zRujS7NiqTQUiiANfsYhcLkryAYz5Gj1jnD9hT8YtT1bbyoHxrpskYnQ9VsWtEmy5N1G3TAT1YkV6g",
  "key20": "25T7MnFWdfWA7quku1yFRKJ4VD8nmJrqpdJaAFLVY6hi9sG4StAB615tYFDvFfnzq63WHjGhufnPcFzY6neXABLn",
  "key21": "4E5r8Jph6wMEAFRpJb1QkhswB5XsSbt2c47BYVwzLsv4QSGuc6XRUt2ZYiqHXtYW7pzQgGM89XUVj7nkeafD6ane",
  "key22": "4TvsXkda8NqjSR6R76HVrLWcp1ZSBmgYntWWToVkiZyWQETHSejtLCVMZTJvJGXj6GVnsYt8b8FpB5UmWmqoxmfn",
  "key23": "fAnt6MU34Vo335ocrpyChmkYbqQg5c1EK1tkrtEwgCZrF85G2byahbeMH5HG8bsXhrtAs1izxJAUf7psf2K1GHe",
  "key24": "7ZFwF4cJss5YTCAzS1bFdFneGoGXngQpURrNPTDCZsKvAspBRjmPPQKfSLt7ADYwqHRSZpeXuQRHG8aDSVjdVfX",
  "key25": "3d8Z125DpVkiqUZBsArztgACW62Li1MYmBEnbqLcReJoBkS8uGZcU2QPGrKCRxZuByi5KHQKWPZSmc47odRg9ppQ",
  "key26": "3VKqeDFpbVKyULCDWoQQNzr7MQBoy7oaWSeZQM37hM1mMwQYu11CMNjFV7We9rmPsPtjnS5PCjALzR8cu9TEHrZz",
  "key27": "5vcMYYx3xefiYsJ5ssnpmakUaZds3joHdWYqqDs2b3Nk8sesXCLmuUUfohczELyXAWwwxfs3U7iiW7TXbfvtZnRT",
  "key28": "4RCrGNnPjaRnq4RzUzBfWBaasJv5VGKkcfUEAqLqqxkN7UYCmvZkuvTZGFAmjM9DWCjV6amwpfuSa7J3z67UHgFC",
  "key29": "2nhxRA5JTXkTHHKUwK5jJQwNsDTGNzpDHRdq688P1rQSrCqe1pD3APVfUiFL4gufZSqHNn7pCbpG4krbchPqpRRN",
  "key30": "3tducU3BtbihytMBh9Mvc5Po6x8J884tJLpVdUUGJHe8nH2x642XYUCkbjvw6pbeA7i7QSWMGYqipQRytGWb74Je",
  "key31": "2piQJQrzpNvFeUDUNK8FQXwAgAdwLJHug12GSWcJoYnQk7epwHZToxxpfV8h3UdWCyJUnjATs5EY8PU8SUBFVoWu",
  "key32": "3nJY6c6rx5MesvpQXfwtNkgue9jg5mDm2XUt2bMgiDHD6uPA4kzN6mAocpmfWmiGz8RxtREJaEcWYmd93MVwFfhG",
  "key33": "Fpx9CSdXW5bG9uE21g6nsRSr22mNGJRPPB5N3qctiwgq5FVWkuc8GNxYPb7H8UV4EFs4LvN5YyBuh9AD8u5Kb4N",
  "key34": "5TsVCK6mX2we5dS3EoVgwFeCxpDpg4PuRzBsinD4WuuzuU2FeexqD9t3H8ZDT3nfv6j5EKrS49LnFBkxqz5AcvFK",
  "key35": "MNRy4XLeokBtZz9jJCmnRQFHibdabiA95aTuontyCkxJSB62fyJWd4EeiWL8Rr3Dc2nrX8Qd9CQZK4ypyUkqems",
  "key36": "5JdNEVrzGGub5mC5n4ywHDVE2Y5UpzMV93HJT4bMYgM9m9jfHhzdhjwj3tpt5zK46QN352Udv7nLpeDNqLAPPgbL",
  "key37": "5mATZjZSGBZLYfwAZ5SDyixXjpscoHb5wngHxBibiaBAoQUZz1VppB9PuWuxCEgqB2WBirrQQ79vWbyMP626JC3F",
  "key38": "Nhmtqhjv62Yji5AZVoKHUjnamuF938u1CbAb7dC3egj5LyFcFc5q7GsZPGKZCasaXKJVwHVVDK5pZYUTWGqoCvz",
  "key39": "2yKvZ8foMkUy8zd5aqy9vJCVpG8T95FNtxf28STpkmJgP5TSy3pkbwyHSkm6Dozi2U6n8WE1JZEmpFNZir2Kpm7K"
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
