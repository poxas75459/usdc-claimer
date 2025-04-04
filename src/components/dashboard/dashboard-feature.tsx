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
    "5j66CZcTXAc5SQ8XJBMYb46xWEqxPDTEWyHo5F2Q9CXgKwBt2Pt6BihLJ441cP5UTKDV3pYB6M2kj5kUyeNw6Zf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7aZtAjEWwvGhVNK6JVZffVpi8Hvd1MruH5kGGcf5K48tEGG4nFUzvzM8nVYU6tm5QvR3YX4Lgz8NQQFxoj4LaA",
  "key1": "34AaUwdWwdeSR47rmR5WFq7hQuu92qGJht9Dbd6kqitMi1Sh5cRFqdYHKAi99musBWmefwQGffgMoeLMCn2M64xi",
  "key2": "3jn4o76uRGbBfdaqQnYFfBFPKuLvp1aGXCh64HzzYEdCL8pKgt4JNcwaUgsrcqacq7sqyhtSF2ipwajLNdH97m9j",
  "key3": "tqbaUYNWLjT1oLztx4yibNP9SqzfJHnMeksLmJ4zDzBxtjpr6FcW13fjmFv8YMvCuRjAH6DGTL5VdgnZeK8VwkL",
  "key4": "4TZ9uaYFpeGBSziEqrnWhav3tZuGvap3QpNVv2BBXGMDDUNyZQimh4vrikvmdJy1kAf2kM8rn74Knhc87nnyPwYS",
  "key5": "oACZ85DArf8EoqU7y3pYgENxMTagVRt29gFox8HJrZkbNMffrHhEfayquBbtmjwSTJ8BCuYybvY2zUi92AqhFiv",
  "key6": "4qkACcRp7qLJiLJDkYgBtXoKiSpamZ3QTq6mt4beLcjC2AREXqAndWstt7VFFT4MLL18dsfxijdbyFdiCSRXXQn3",
  "key7": "5hP4atFDZMvAC7Lvx8VN7FUPm2RFbHV9bLJtY4guZKSqvSBghhd7zBxyLoJ16WoxSqAeSe88PV1aSrQCugzxD451",
  "key8": "fBLYw9E9W9G91L56VmPFsPfYN758s3KniBkCMcYFTdjLh9LtfFEFtthLitdMMM8rwWC2JHdG22XPxUDAn4h67Vu",
  "key9": "MMLmNPDPkYfDqUupGPhqbGFp9dB6CxgbrMwMazSdALdMdTjs8WXX7zcL6qgubsxc8CLZGm4UhHazCCKbQHKjYw9",
  "key10": "3aYTXfDLf56ojicMvU9xfMD7AXF2HcJVwafhgVJds7s4mnsejHTQ3AhQroK3osppe4PpRRqVZFXZPQ83WeZS3fhb",
  "key11": "2Q8FHGiiMasvNWZ1SFEwy5WPPNpwffYQ246Sfm9cMYLARPYY855PNX2K7pzAjCztxbacEWjpURZy7etwDAt3hEFU",
  "key12": "4pWrgGDjKQKE2Ub6qrzfQC2eaHjzVAsGhtHPKwUopfYUWH7NRo9dzVwF6Gh3g41vEUZEUwuk9SCVtuRzeAurL3C8",
  "key13": "5hz2Qka8GxApwxPTKEFpYumwgRA3BbbAahaZw9VBPzdpBT8fFVPZMV91d78Nf8LkLvXeCKAYutjr2zRAau5PgCG7",
  "key14": "5ejby8ymtzLsYsvDWzW1wzsgBikj7NWknCrg6QwA3t4wtkUGuqqEw6Pbpdv1VuahZiGEm3mv5b6nPnp9wqVWFMmF",
  "key15": "m2BPQrv1qm5katsyCNWZtTqKF9dKkrrNCt1BH2bDUQABWVSN46bDyjXV8fCAAvDYhddW752v69WmzufSsVWZWvf",
  "key16": "5FqaFTNyd1JR8G5MbNMwK27Zgfu6MPadydkDjo3xeKKzN19d1wqhqqYx5odMtT1Q1WDGRwX4A2Zjf35eKdK2JJU3",
  "key17": "2n4bikiCAPSgH1bjZgvCYSX5ZgCVeQF9vWdNYTdtE6wvLASntGnJKWeQPavw84w3s7aJr2geUQxh1VsUzfasarG8",
  "key18": "xy8kmUAMvsxFMRFpVk2jdcLjKRru3otAxXzwouPJMitcVwybMYaA8UgsNy9GJ86endxDoLiyANfHL9uLJ1oiZVh",
  "key19": "3i1taaMjqpisyUfsMFkRKmWXLw32wo2aG82zCokZzVNyrba98nmsi9KW8pMg95bP9wekcTSc9UC18muFjZroFKuf",
  "key20": "5RMnGejoi19kRUE81DPiXH8h9ZDLYcDjMpUUjtyTUyXi1PX8uHhGirAQKi679HucXhrzt2Fue1AbXezhpDD2e7Zw",
  "key21": "5j4U3kwuEpkXZxBoZCQf5NdTaxNHyRY6C8kj2DEojRGHDBdiahvD8vaigGLQxF1XnGqM8ETysooJb2Mi5YiKuaic",
  "key22": "4o3pV9tShVTyujZzfhGU3jtDc6o7SihTP5Mv4ZJbKQdyrzt5D7CyCgsZJzcBy1w5GSKcrQLxtBUxQtUgxEvnRh1t",
  "key23": "5AeszFDL7XWKoXWKkJ3udeyGCcjkibvXrVzwuWiVU61wNf52nydSoHeNrRWi6253y8nhNdovKS6bMfWj57hE9PUP",
  "key24": "3NfGS53AC2osK4ifq6gy3vMTDe2e3zZcAqYN6E7zRT6yhsjeyaLA4gPf6KVuthYheYRxBbzeJ9vvp2NtXmvTMsk9",
  "key25": "3c3fmWjQBCTdfyj2eUYu8K7H2wuyAp35af2KGCNjURnr5u8dbxeL9EuqCUGmj8kpWERCdRGSkSUv7GyMw8tLhCMC",
  "key26": "5qePs7iCFYUUAqVdifEQNZK4G1zEUBT4HXbEoK2bpLoCQQCgrWFSTtsenwZA9Czge2me9236qNFjNmLMj99Wb9Ng",
  "key27": "226yFjBN4V1KMfRfYqywuqZeoGX3jHj468pvTmmAZi8jz18aLR4PSrG6GuzFoRhFtBKxaYp8dsmcBNZba8xbGMyN",
  "key28": "5tQmAcLn3GjC6idpgr71UU1hnBn4kX4JsxF4WhYFZfbzDbg9iS57QPg8Dgp3KG5L7tQn5VfDaHcm8y2e3Z2bh6X6",
  "key29": "2yVMvdbpzkHGSPxY2fNqZJfN9w3n8XRMLJ4Wz2hp6kv1GTqeh3FGxavF2oGkaRpCxv9uzuCEhgqNwvHqWAgeHLdo",
  "key30": "3rwbJW7v6t3TrqVmE3vpw4pNSuJVvdHNHyQ5ADDvqSafJ8XUQEYYDHnDHuGUKebWgysm3L8ECLs6gYZoQHLyX3Np",
  "key31": "53D4oaoMui3MzAxPnj5C1XL1q1SxYz836aGK2PrZunHbGkK9BY3rX9MWmB9qehMpkps9tsEQ8pdjon5Zt2kygcW6",
  "key32": "2j9P7Hi6i4okpQNLEzaMgSBnHqLprh8j9gegDD6ZpKJqHsbk9LCgdnMQjeAQZ6ETCA4ebyo4useZp9wT2Q1KuKP7",
  "key33": "5RFQEi4bevYP8XFUfqXZxp7RxYUatYyPJtv6NtnEFWijbAvtVXQfhLWZVyUUvP9cspjwXKbNo5D56EFsqN6WdqHb",
  "key34": "4DZNatFSAaQt4cyFApLjhRq6sELjWQwufiN8NfgAu9UcDfERNiaqL11XKXSxVtt2HDE2nGyrMxGw7DG3fEpDPC6U",
  "key35": "4ez6r8ycic8Li4Fcr1dVS2GTzTD2sNjnBuSYssGpED21apLQDYEV7vy7GfTgy7R7TzWrPJd8HFA23b1DQF11WKJ9",
  "key36": "57y3aVvzPaJ9E1CrPx4iEFvbMmG7nAGsK9pXSSepRFbxo83vabxXDNg4BYJViWoe4M9HGcLNRXszDyAJWXQ7rpnW",
  "key37": "2VNWKGvBAqmb8DjzSjUWq4DTdtDvkvHoGqeE8na2Ki5TPCyewC49xFW95XCdZ5LXFpGeNKTAvNvUPXqdpY1BB249"
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
