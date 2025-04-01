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
    "gXfbw7QUb4Cbc5872hM8JX8AKXR6fZZCU4WnakLSu8j2s6EXVkDgzPoWV4zyV5Y67LUmTuccFPgjE9cEm6q7uGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CpiNHLKSMmLrKfTXvjLFurJ2tM6LaWQWEaRNkTVemYcXMs4z415gr62JNGift4pPAG2nPDEm6j2LgNpP9rAXmZ",
  "key1": "5AA7zD7SCDE8u6DLQ7dsMbB35X32EMG39EJLDmYyAVEVmXEakhmaQ1Y2EiiWy1FbDM1SVvngQoUVTKNSVhS7UKVH",
  "key2": "2Ki7vyp4cQ3xXiKXWfcXhHw134eG8hPizQs4qUtHWYxnLQPG4aycbY2DogQYLQbMM39HEQHk5T14jVs5hDbeXkED",
  "key3": "3yi5JEFfs6oTxQNi2wasbYSRHaafH1oR2u1spCeVzF466KWeroAeJwEVDx4EvKbS7eFNr1aNVogh4E39Na5opEMi",
  "key4": "4kXeCeZHS39xqruKeGdtQ3YNjDRFwfWAdhfTFjBrPv8ERBYAmcw1v22XDk81q4ucZdsQHjPnUkpBUmQ8MnbatR1x",
  "key5": "32TESzNxpgXuGYk8i2JsdS3yyswrZA9Qh7MjBsrwi9o2GA9ZCbY9xi2AQpgGU2wZo6NFG6EJ6nx5ddBw52U5N9JZ",
  "key6": "5HwEiiRTwSabgb2DjwGmYxSzG8cT4jxLGwiNraHCnb8nSErp45bZR4vH8SP6Z6whTD2yYumcKEkcYYtPkAmNyDQY",
  "key7": "ng11xWsKae4Sa3xjn9BLxSGFTLYerTZRJ1ZuBwM2ADsFqZtCY7ic516ThZ1zkKW1rzJF7myeFwMP4RFUFTRf8Vr",
  "key8": "52vqqX9Ej3XCCg94C6xHiAAgvvc7AnLB8ixmmPpfe7jH5HJr8nsY3m43sCujz8hYeDax8wmV5y6C1d24FwemFXN9",
  "key9": "2qrwLEDTRc86NE5gyYHL9obyeUnjMJ9jSgRrqNiRJ6XPE9hJ52f4BRQuKgzjgsA4PHiL8xx9asV6AsCqZn4VovU3",
  "key10": "3NTuntRkUuFD6o8aWvf3jNvKZ97abHeLX5ppkZZoPf7uSdkEU25TEPfujHDKv36dpta2VMaaWniym4hfdPCnUaEP",
  "key11": "4UrjkkGYW5oWs7kdr7XxJYwu6HgpriDaYUv7dUJQAsYDa5LsNSiXuv3nRwK2SSLdin9JJAPmGP3jkuyRLww2Gfxb",
  "key12": "5QEJvC1QWT2SNAxwqEZ5hfoQ3CiuYsGQowNFonZXamyn1jQ47XZmVqwAxk3AWcdwdtPQ8FutaAPya4CEqFSmTTML",
  "key13": "BfWVZQo5EmJ71NfmotcBcqFfAhzN85B7wyTEMqUYRhptKtsmVoErd3YpCZJ4YmauKg8Kr7uywMpzk559VDRVpgi",
  "key14": "4TgeuDv5td12CchRpSicydQhh4WjuHAA12xbgG2HVvR3p41N49vMNjgJFeutTYzr7Kg63FCTpNffBRq8SKKxBoXS",
  "key15": "3w9gRsUvXK9zFSSb22wjB1VLmr1vZCXbot16HmegRgDbxWXm72mdZocxMqXvBGkePEK7oq36BHcGDcNWyzcvBEdD",
  "key16": "2D9dyPqxwz6Yrwiain6zr9sU7dK7zRpNXRR787HZoFzt3mmZM6QtJQAku1ohZGKEYQA9Tu3iDb5qXy8z1TbRJkc",
  "key17": "3sTN6mvbRCujvvpfZ3rcnSthdLhLM8UqqfopD9xRktWSZHYVyVHhDMMffFGiZJ7uc3ZYDFNFur4Z89rXZLdGoB8E",
  "key18": "2R1R6jBuVMsWqPEJVssDJvAadMGp47SRxhZLiqDrJdiLgopdA6iNsMgh5j4msMR6DPfpA8CGyc2RhxG9YzQuEoAp",
  "key19": "59KvZjgCeEBcJ5z2B3dahntzgm9HrMWPKn6BQs9Mevy2i6DGBN4CdLpZYnhrUHp6xUXE8Q3w2bHCYUdzAB8xhuvY",
  "key20": "4judy84knaDMRBC7dX9pGCzMEeDUVWkJWUVgUnmagtdNxCGZqdv4hyPZQBViREvDkhFX4KTDj7uZ2Cr5zLw1563z",
  "key21": "4SdEFiGUi1umbGGm9RoU1D11gZyroyqe27dxp3Lq2hr5c5dxDD1ubVABrk1uK7BJaNbrMNyKScGejGYCBbTduFij",
  "key22": "4de6cyRBKtuQHnpDWjvn6ztpRMVgREvHiDpSbh8WNMP1EZbWjgrk3s3JwWJgsarrSLEq88mcvwhMe5GaUjvCPjMh",
  "key23": "4h79NAP8nY2xsf7m4rZD7Nsns34phXZ2Ai3k6ZPuoyz72tziwFtbNEUvMg9Uh9M1YShm2vMX3GpbuySCiTBDs5Ze",
  "key24": "2jASejZHaTBapNptv6u71w2Y6b4NoMVZCuQRghAxMZqdgu3AcnAsbnxGmZ2NuNKHN42wRegKMSX7v66kw8RzevJH",
  "key25": "ftpHWWiAWXst9xo3QBEiJzNFkM4fm7zGSSFhFZuvsBTPaLfFVFfnX22uLQSvo7BfGY4nJz9awZVGyXunJPZZuPM",
  "key26": "3HmxHumYktUYvwnzdpYmUFbzQa9Wsp2R8eNoAy8Sz6gr9o1t1GxMJ8cgPAyPD8nZjXxfBh1223eczVprNmtdKfZ3",
  "key27": "3QxaF9vY45VqtvcSpzbHuQ1QJvrSzuNB2cWRY139thm9K7HkLXtNx5JmZnf5UTNJNrmZB2pD3rHvajqiM6M1AgKH",
  "key28": "3xfJM4tNngA2a4hLXAMQJDYYQ11LbKaUYRNkncqiynaa7ZDW8S2baUyiNVZ1E4K65e7yrXCwMCyoZFQX8aiAKkdU",
  "key29": "5LjkgR75NLME6JcBk8j1oePQaP3suTgbwv8pWFcBSrzMUi3WdvBCZE2a8dnkjLBTsxd5wkZr8nH6wbQRUQgCBAYV",
  "key30": "5XjuY44eu31quF5s25SdT9td2gT8WjU7idFZMGDMZATeheXwt6myTwSgwCjzdi1J3qBt8gV64hK68PiNG4uRsK8U",
  "key31": "5sGmCmCVzj5R3kRq8scgdFtBfBfXtpQmGg3DVtUeNkqrEWfMepVSx1Rn2tw71KJ48GSBJ3VxcQFK5YyqB48bHJym",
  "key32": "LNYuuK4ui3pKymv8KKKdb4T7tx6ZwwG5wdvt7FtMXuWcRw8mHncDe8ufz38ZVEpsRVDp81bycACbRhAzSt5aDKT",
  "key33": "5DXCcfN195oJyTR1Ar85Pn7X1LEQ3gQJfnUGmakGXDPpKbnUAgRCVX6GkQBdzU2bBcxXdrLH5uycdhUgZjMpLQX",
  "key34": "42t6kNcZNZmpKwXmxfq4usVb9QXUu8E6ARQAmqD9iHUPRPfZQPGqefrSnJ9RpvTpUvXos6u7paPohC1kCcEcawDU"
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
