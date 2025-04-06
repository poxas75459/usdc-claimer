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
    "4rmKaMrsyCHsTjo5bRiGC5dFPsPcUHmiU2EiHER9f1N9A1HwmynFVRUHKvHnTk7yTNcofnHdEomtd9Y5zLV7bqqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iDXJhg7MVXwAzk2aMS7VaBw8KmhLQg6Jpm3CJWh1GfJ19mYBdja6j3Vm93btZ1odRxK2bwnBUXbaiMJTmBkcPdj",
  "key1": "3e3LrDPqxfWBJD7FB6X87WENxyjwQCnqxWBQAM9pmrwB7Ucmx2a1baPo9L9Povht5jw1TavJFCRYcGa4iAVtAiwP",
  "key2": "NyuAkXahKWZYSeoY3ZtJANq4fdbsP6rq52Y8ZRW8dY5hpLTvJXVLkn6Jwh6KFq8z58ju5AfzwjtT5UKrQMG4sLW",
  "key3": "2SHS2EZsSh232ML1nyFK35jhKTAJNr4NRRbM1KpMGMMCavsXCC4AS1mi5uFvQ8uvpEZRsbxbXKsKWsFbnZeFLiq7",
  "key4": "qAini6d2MBXrsirYg6MYipSevxdVtpj896EfHjGr3vFpcp3XzWqiFRpnzQRGQ6wjMfLJ918qwGshnVSJGTirsD1",
  "key5": "4CJPFJUrEjonu2LGpFQNAoDaCpL4oGuBwE6S5cgY6W7aJY9WewrNRjDNNo5U1nwpnGc3cPuwNnt5p2z1j2yUqkoB",
  "key6": "gmPXMvv2JZZuUy9PvtJJJAgWiLf7jNcaaXkFouNqMytYawTUqHnQcHvcs28vhfw4Ns7hpj8MV4nns5PGtsbVatL",
  "key7": "49ePFvDk16adCKXyp4HDTxX5UaQCQkUzU2utLeBg5ZHQePxsRDB8Nthuh2hWcRDrnnmdU5Z4QwFtPbzokc2sTByq",
  "key8": "384bTkSVTKvpzpjFWSvo6ywfATGSLmzNGuYZx5sYm2BjfMPpzFoWLssyVJvNBCthvqVgPuwUchSSu4WbKQA5UjMA",
  "key9": "4k1yhmfvheCAEDwrAZKEoMCyRRWd4QgSgLsivv2kJRmpHdjHv8YavP9HatEpJ2rTxWtjtVYqsfutYRauzUENGbnQ",
  "key10": "4hA9PS7EYwbi49Qoaaqcp8CfJ4BZ1QdDFinZr476xF7bUKM7wHB2dJCHjU8jm64tSfD9G2NBu38UNKLeBnxDrX2E",
  "key11": "4Lpj5UEvcfZzpjidGMKrQdpr6qaSk9PLEaDSUkhw4ouPJVvWn8QQn1399fHqkHWCftFmER1BM1bb8gDyrFfQHSpU",
  "key12": "2k3wbeFXxXBEnbVFkSAEvNtMR4qEGbK264WAPWrGuqHaGw7NzqBRbzTC1Ec6xyJJzt8zCGvPcm6Eaadpq4bEDcjS",
  "key13": "4k2tYE8VkyTy8DGWRM6ch7StGp1VeiL7knnaTCqNtWktDTL3iWF2cHmPBeuMVrEKoxKFk2LgpZx5jsi3xKJYxYnR",
  "key14": "8TYyHZ4TU2JiZwSzp8vpZBxfxuz7qYTzw6JxfWruuvji7QvSzkCwjxY5UfmQUdGVR9QoyxKZp957QW7qXVSj7tT",
  "key15": "4sM4BwvmgfXZy9ibZaz2tRPjCMt4FEdb4vCWBLtdQCP6oCi9vbEwMXfjjBLjBaJHQ2QEF1HwN5kkgGszahoRRuSb",
  "key16": "z1DyvgeFyYNaEzV5pasSfrPuZcVtfGUm2cFhuAH5XHzQS3yvvtxddfZZhqRHKMEBrLGZHudnWwUKCqywNVzXbAs",
  "key17": "3HHppzyg488MUqckTZAbWQyvFCrToPFwsatwyztjWqPKn3JiptNzTD3GJxs8x95tCXJ4TNJ7yuxUcQud4kUcT9tz",
  "key18": "66tzqicKb11Q6rXqq7UuHEW3axg7NYyUbnR4kGjPdH7tf4x4nSBWiBDTjSZJmSmsnWAkiV5Gp59T3XZHUdFZgEAp",
  "key19": "2R6s5CDULtPwyKUzKjQdFPZUxvKPXJyUrnwQGYbWzy7e4D5iDx34QiTGH2dCLAmCn8vJA9L9dU71Xo8okNhsC6eJ",
  "key20": "2dA4Pu5DvhXXJAVoGDmFFtTbQBbnQsdtjqWPcAEj4iMNvFmBNxRSCXxsuqVfpYVHy9Xsz7UgP31wAN5K8Nj8a53J",
  "key21": "49JGGazzrVnD4MCCVg3mSaZUfraqbyZjMc6f6ZSjTYVuGy1e7x8ToGQ7UkAvDRwjCDuPj6rBP4LgzASNsxQrhTow",
  "key22": "47MRAtEPYLEmBoWGedx1WMX2qfADkPArnZrGFkeepqdsqtFm1vDpDZdmS9zoaYx6ZxhjPuD5FSRECMqzRn8EtfZz",
  "key23": "4NVeZCvto6DT5TSxizwcdiMEhpdirCBefaY4pWzzZQxnGSqoG16v9ah9ujfJfLfRGwdjB97keGBNGKX4MdgPnC7L",
  "key24": "zZ2DvYgpyPvdokzeHEeaiKJwh68CEcyqXEmJBjyVEweHtHgfxcAwKTVfWC85VaUreyK8SYG7HJkCPYF63NVUhFw",
  "key25": "5Pm52BvzqXoe9ACmzThW6urn6QJvBGPNVsmi1CQom2uGVQbC63oBcGgwSbjz3Dg9UrZ8N7hRz5ZLcrAr61i7BtJj",
  "key26": "5jkL5M3bdkEJopQLRrAchXNzyvmFqoTZLpu6A6sHMF1ACDHeyGyVgkwbvXMA5tqii6L7b5NhD1vEoSoVzM42dHZP",
  "key27": "XNT481Sz2kvLPmjXH2RCLK2Y3X3zkHCm391PnrEoqXSw8ZcKY2jdB3GikEaBHQugohDLnCtZNdrTgM2ZLZ74ohF",
  "key28": "2omTNX63ExAR8FnQF25ZK2WaW4LvANHKVQZX7SSM6NdQrpCXGHYuwuCQnupKvhQdqf7AdTTmP6bbJmDibKwipGgn",
  "key29": "27Ze68wARXV9NLNyk3VLHq7cDrEgYKtqES33NHZeGLypfHJKMprZ6AHMiHoGqT7bUZwbaXhBnTzio6bLF4Jav3t1",
  "key30": "24i67T42cVwxrQhjMuQ7ee6SjT7wyWvNX7T9WNVCQgfAS1GKAAaqDCsAKUBqvuy6qDR6KttQmgTrvkN6u3rYfHvX",
  "key31": "66MpXEshNZMBt6Pmw1SQH4366JVV85QHYo2fv7HuBFfiE1tkwF36v4kSvA7j794ep1ugBfcE1DV9bVWV9ErT9Py5",
  "key32": "5GpEckqTkkkxrqpYZsPKv4Gj6wPEY4GegXt6d5AYnRvUq4FCgRRo17h9r6jJhb78jafJ9ooEZdn8iXmHeDKxSoxm"
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
