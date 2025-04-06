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
    "45B3T2ZDnYKZ342dUuCc4epZXbCKCCVj9rzwZqVFL6mskQHkisdcnx9t7k9AwLBzQG9iShR5Eva9X6C1rXmShv5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUCf6cQhNrKB1yroWLfpJTz3kyZrjnS37kZ3j1WpjDU1imWGjc6jH1V4DsEDmtHwLJz9FAfznSdD99BjMsHUfot",
  "key1": "42XcJtQpsvABjLp2XeRwoX4E7LN9sgTd1VMDjSpMhaEBvgDiNPMUyfLwN5x9ZuZFZnN3EBwK1sP82nC5b8zjuYNo",
  "key2": "3Az5PXXUKDQq83RgbTCq9pBBysoukat3RLopb5REwb33EEP2uXkMUyrnj8b4PamzfCyRt4eHvoVT6PAZfR69C4wD",
  "key3": "2DEZ7GwTwWHFsPBTVN8qf3hKhqgY6sesUJ8vmLYXuh69SzKrD4mCSEoPU7nbUUSKxcVMwdxBjueATM3kLgmkzUMh",
  "key4": "2uAGes9h7YcG8akmqR4JWzNRfA7gyYdxqPVX5zZJGd5oKJzynd2y7g4dkAZf3LFMwKAjbjR34Ndbdu3CfzzwEmSo",
  "key5": "22rfvjyAoVcHwZqNqaBvqjFZnubRTNmw3nm32iLvc869hWDkAhPKeAgAhBLUEGqPPxLCNv7ak9Xzqv7AgPXej7Mh",
  "key6": "3hBXfc4HypQPFnT6XPFGBwyZY7vH9CHDbpZXKnszhQ9nsYJcnXorbK4Fu5zwGD48pXaDGWmkMEBKHJg72syBBZjd",
  "key7": "5MAq9YG28vGSg51TaQxuMohMvcV5YG9oinc3VuB7jrQLZSDkekqLeRStu2M3oAD7Nd3FcbWoyv3uVPqhjD7djrKN",
  "key8": "h5Qesj5usWvF6AVCU1ZSLgCjXENdGk92yrerXfKWY85cqAbU9GfWVWuaN3EoAcJnqrry3oqKwZqtxpLGLHszrJf",
  "key9": "3qrX93Y3uph6fDhoZtEygvFNG5QeefjG3Z21Xm2GqmxMYKnoDxQtk8c8jsiaFf7dvYbfKsHENPgZvc43be2CHTSD",
  "key10": "3aNMVyP51FNUy4mjDmHZ2x9t41CkxFVwdj1QZi7STYnGhxsn11s49eKnNx58Fx1QocDhaG18DZs9tHByDCpJBRXs",
  "key11": "z6FFwEa1Nbe36DKhwAq9tPaDVNCYqmYCvkeJTEotyycxeEUxMBF5Au943JYqC6MoQHxX6EiDiTBNpmTnkJqtyeC",
  "key12": "3y6D3wGd1thQ9Bx5LfJMkfoXQCPb53nH6Jg4JV1ZCqGt95p9zzYatLjGAkDM9EMjuPHWFPsjHV7h8o8cNnwpSZL5",
  "key13": "4FD63SGxwMTt1EdrxkH5Nfyk3BTMnJEEogyD7BJq21ah23WvC45hnWUvCuVmYh2rBregXHkWtsi4hpy2MpdPFsW4",
  "key14": "4o1b7nYTbhgyoj66Pd91egzyLANhAuz2n8toQJo6pJKzv8VffzeigFZx5SCDawXwt1qAiWBkyn4BRNNgHdhTjsrg",
  "key15": "aGg5Nx856dXKszFwAzgZxrffaQKhjWXhyg7c1ED4vLA96XVSWbtAdVMyN1MeTi5uHajxLkfMQDfzhfBAqvoivHZ",
  "key16": "2FPHtDhqY9o8pxEgRmEcGZqDtQZ1kcTCTkmjXGJjUfsLDK6S7KktjEoQNHGXPND2DfJXSwv95uCP7cid6WAvTJzf",
  "key17": "2SxCbGMxhdezfvETUtj6JTLSRNpshrGVAox13rJ5R39eGDv6mdyXsRBYmPGitXXcfGnyUGQnHRcAUEEWTshyv7mp",
  "key18": "3Z2CZXrNU8TdbzbQFhfZ6AGddV4QkV7a5QGN2bYUUsbuUnBd5khiHBPJUGCErkP5DSYgLGF19HELVcPHr7i3scp5",
  "key19": "3xZudLYGnQkz532TGX6SwprmjEt4VG8k1wbzSQgsNAw7DnX6FWpeFCTNt6dcgV1UkKrtx4JAoUfa6nmkQhs1qhVx",
  "key20": "512cbJmMQysiNA8VoZN2irj3QekUzdzB5P3ZKbbhnaW7aXuZzqUUwDcJU3DtUdw5zgq6FNQRRuMS912F29hhoNhX",
  "key21": "5SnwKNm8y7BfoN68FhBE2DizzUMNM5zMZKMqoMfVraA2Ygu5SpVrHdWTeR6aLfHShUgZYYyxrTKuowyViB2yS6rd",
  "key22": "TK1gd41hbF2ZWLtAEwrcj6gRs1n9uECSs7KNg1KyYW3jo381YjpBQx4AVDEyai5HMWCyA4X5kJBn7GpeptwFA8u",
  "key23": "3xfgsp5zL8xN7B2XzWJf4qhbDkPghqLeXGS6g3Qtyhic8br47SkwbqU8EUFBRVxhHm98QEWJaVcDbzv9noRMwyRn",
  "key24": "42AqHfYuEVe2b9t2ccV6rWP5r3rCBWfL8RGjnADSBBmKEqZD9Gx49LHA95FXUteKxX1fPKKPXra55FnY4CGFuzva",
  "key25": "5xL1GD3sH5kJy7oK4pypwT6Du3bKg9rFTLKmEkYfPmAq4vDrBLq8xQD9RFfVDVR69MNawTrEXnF6EewfMmLPHKEH",
  "key26": "9kKWARzdje4c6PCVi8yUQAvJQ48PrHcFHVokmboeudAqVPi4Nfm9Ym1VMLB9xChuRg8smHhyAWtwXVyDr6GrmZA",
  "key27": "56vsJMqWvEnfkme6KiqU4hGXGTDzt66Bn7peDQi32WNkj9rm7MmwN8bjpwzPzCqLRFqs4JzHAEehm4DZYRUaX1NH",
  "key28": "2LayNw7XNUnEsctKmLxrB8ZvFJm1p4SENRSwNKCe6V9Eoy3SJzeR8ggkqxtQZa7xpo3izBRLBXhGo4KPZmunsQoR",
  "key29": "QpQeoP1W5KBQX5CrRiLFH44ngS4jtWtqsgGciVuwMXRdAWvTp3LZTyoKAVUkqk7rznHsNDwwCx4bLrDN2iQPBro",
  "key30": "3bt2AinojZjPVLyT22DMJazkAEFGX92xv2q5ag55s9HbqVYnzAy7Uo1PbBMzzeE93mnFHgYmowMTUswHNhN9WFNg",
  "key31": "3Zx1dQe5GDab5PJdnzabsvTmy8Jz2TW7HZtWSRBQ9xWcv2byBJU4DNcrcWPbbfqJKMuurBfeMXJPvaRkf9X7z6Qh",
  "key32": "5EPBUEQRcnEhZjm6EPF7jx1L2WgLEM3dQwosYszckU7A7MJLPweDLgJCuxU9Y7VTPCq6TyzKs9C5iZ7qdrNggUCW",
  "key33": "64w9zWa2f4XDvGVXBgfZSnwvqyTg3Kus87ommNuwGp3Ah1v4q7e2sMYNj6CEhNjJGk38P5Z8T3jNDjrufsYv2LxP",
  "key34": "64rsQ38W3sCPYJHEhrQumsqYMWoKVfaAmLnR22PjqDZjffohHLwCiCkWaLuavFdMp2NjQf6Qv3mmsDnwWjNfNgfH",
  "key35": "3wkRZ9tSHrBtLK1a8upqBofnQ2877dDP3rw95pLtj75BRYfx5TeG23kvhAhQgp4YJNRsStawhKiwsqE6BZVF8do4",
  "key36": "25nMrURUQhtRWaN9YTcYtPVRW9Xaw4T6XPAJTF1qDs85864uHfMPjJqEuhVc8FwXG39dSrkauWUbX51AqanFLi91",
  "key37": "3bLY3tiTHVPL9dfhJ5P3qN8UiCgky1Cni7uAAXY4NEpSys4RaBHY4gGY5YtmNzr6geNnMd5uQzDLqCWzrnYQoNME",
  "key38": "4cySk922xakVMchZRwCdhkLfDx4nRYfDQrkZdY2wZNDbY9ZQdQdaB37otEUw6yEZJHWEeQhFpKEiMSbnUvvZJXPx",
  "key39": "61eU1BNGbV3nDWEHVcasqCuKozMLWxJXcZii2hW5muBJBqfdP9qRd29xYcjJD2g9DkbjbXPjWGzKXKY6Zyg5kPLj",
  "key40": "3z6MLKzfHjzr56Hci2C4xPQQsUfbr79u7EKxTVrz9R6iSodubGpBLCRw1DH6TFBig6z5MzACy3uDDhoA1mJirKha"
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
