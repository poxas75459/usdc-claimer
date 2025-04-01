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
    "3xMK2z9W5fCgpHRnHanRb2QRQj9Skp5c7humAu5L8Mc7JjsVsgHEWyC16AnUsMgMX79fpiXPXiEf5YWcykFFTXUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eu5z4itw29TvnTHW1mhzAgt4QTvUBnNaD7v4NgdJwSKgQ4M1L8FU1JugKcM6jHP2hN3ewcHEifxfQ6r7b48JuU",
  "key1": "55QBSrDiwBWzsvrk4TyGimBX24ytHhGUJzvdguKMWYQLPjdRopy23E7WT49uyYwcWUhVgLeE5PvezKWiXeoxs1pG",
  "key2": "TXDj4GR7u8YQTSZu1ezta9cY52p1FLbKk4eAL3xDpbp7A8gcW5CP6ow3VEFPRUHUx8wzFFLQvwR3M5tzAqUwuEs",
  "key3": "2RdUYjKftoVbxAjyUJL8w7oDLcaHxnxWP89tA7uEtxR3vhVYH6g4d2gg3KxMPco7wyK6W1UCSKiCTKwa24Whr3Gt",
  "key4": "5Ba9ach5rLn8t7r3Gg3CbxC5F65mnqW3QcYnFQ15D5ATqoAz597dK9zjgyE3ogGDvQmGT4gYUD35mNxHamiot7VS",
  "key5": "4ncKGY2BhndEPPPh6C9GQ832MAdQz1MRH1uYYC8aU3WsbSch842ZJrkXFWVtLCgB99KAS3oaTJPC6qKyvniJEhqj",
  "key6": "3CasaFa5sXvUPkaR4Y54CPtWP83rgFq3owYYAxnHMcnVBW9iWJN6FPed3xBJUybkF97iiYjM6V7CDjxGK17ijdJd",
  "key7": "2MCVohwAqfc16oz7n4zjAw1UGbDFcYMqZYiKJxCYqcWyThMwzqd3SKr6wJkeQ3AiZRT7FDJGwgcHMfQ7EtAXzgpZ",
  "key8": "4WgiFJvGjPKfrNVXVuH6R61tJDV5ciJhfJrr61MWNRaXqa3LKgDwJaAFLSSFq95owJq5B9iVd8ycubJnfwRBnwe1",
  "key9": "4PBKfM5mXGqdR389Tq4QjTUbp7hgrn4nmw3KhSJj4FUEnu9ipTjTjoTtvxt1AiBaaJWMgYGSDZbqquPcM5vAUuyK",
  "key10": "4jTrjiADWRHztgf4pFRpUR8XBMMx3NvBDaiRucyGjR6qhmxcxsLErnePuU7kqzbdb2arviiEgJgZGyvqznUecgei",
  "key11": "41X4uqxFGHrRHJohVguNPMTuwZK3Qv1Lwttp2eYXzG2vQstFkX335nAGrZ6fGDiMhSDo7BoBrnBJwMDW1fM7WyKV",
  "key12": "2TWQM9yPdBwPmdNvro2vXEE4GYZPuiZvSyHXCMMSbPnFqNGvjrEmWtKkikVQE8rKHteBuAKj525cYFDX4wjbZAFm",
  "key13": "3EeSLp5o5rPCqSZirij1bp2rfKY6APzFnBWnwyp7r2c5tkVrgoor2DUdLBPS6AciQoxA3syUhp1MJ5VaEEQezJDk",
  "key14": "52AWudkMXDEw3vrSpsYLuJCaZ4RQh6aj1k3bLjsxuQrFr6uzrfyJ5nkcEaUh5TTGcaWvXifiUDUcCFKwxMTx5ogn",
  "key15": "aXnVoVLjVfbuBHCqKFSxdKDuYVp1RjWexgzjWrEogLhfFZovrD4EpWBNZngpCZ4sH95unJHC9WRyDNHViNJCf5y",
  "key16": "4L8FDqF442z56VqAScv8amxj7aVSK7CLxYv6Xce7Rs3zZLQFaPM3duiEwcUqrKzEBdsq9kAZe1tTzapc8vLvDtTi",
  "key17": "2CSJt7CSjNFCgkY1NWGyJjJbsiiUirtsiA9jjVhbCG24MbM18Yw3L3ZjRPybC9wgXBTkeDFzLpFXKbgtAqWAVNF1",
  "key18": "66aYBSLZpqTqVDT4MKdzpD6Sx2dULf4n3DVWnis4NwEuQZTpSHYtJmpihVSg54fwgH29WxbmV18DXLMgfa9obBSb",
  "key19": "2HXy22UWpWj2cG6EYkgdo5zSCN4pW928tPzs6bRgVVmP4eLj7rJa3FYvK6XXVAsYxKz35vEu1PKJcMN8jEMYPWaH",
  "key20": "2cQGw1FwpTqzSkFpYQ7gDdeW8EGL7HHFQzNFM9H4kanQGUfESUMnBEmPRptuV9u9q53XEWYSXZW7ZysHQwa4N5Qn",
  "key21": "5eVihFMERBW1CVg2vWzeHnvEZ5XqZmiz8j25RuVLsjjmatXndUH5hiWDTp9db3X2RrUeZcDZkZmppDocBkc6zRTs",
  "key22": "32eZGeqMKBtTFE6Fkzw13ceNHvt9Zw4dDRXojbpkv967V2MY3kC4wvoaS8MgFzjWGoN5fXEv1uLwkE4ShhyZ4QTo",
  "key23": "4PiMMCrqS5VJRFQP3SasusZNwP4FfcNctxc9KE7rX6yBGicXdXPFmwSvqmujB3tH4ZRbgsd6hhH3DwJ31UGsafJ4",
  "key24": "5HzLCGiwr7AkPihr4aR5FuHSqqvnC5DsMdVWv4QrEovxk7f3sVRQ3KyUgpFife3vfgMTU4Ns24H5QB3NAKHn1z4j",
  "key25": "44psxoBc5yCTa2q3Y5BsBSo4o22zhxK5Pgt9CWKTgGrS3w93PkMhn9LEkdegVXeuyJNPsQRbA9BT6bXVJwETEYEa",
  "key26": "34JT6qwirpFfjqhFzD1ZsamMx8TNjjEYsXJQcjhQ3BQEQQC3mSphapXZqekJ83mHJitYBsdya6M2DWyXQwpGDehA",
  "key27": "27cSwtLipsqFe2dMddgUZky7SL8Brt6yKcSqFRV361YRL4Y2DnvjrJfyxiztHNrpFmfQDnmisQKtiAn634fkpAcJ",
  "key28": "5dKFCeaqoFJPJ7Q5gQfymxz1XdaUpu1xsZa9XwpaNzbjcoEMRxhgrt9aq3dDAV5vxWf7DqScvcR7oYSuceaZP8tH",
  "key29": "4uaguxxzZNLxfNQJjpXjNoTH3pb7xvQ9MYp2wEcCktbrNYniEmBVCm2tu8bn1Ap3PG9AhpuCZNN9Fx2o651xnPty",
  "key30": "4Y7HqfEqDs3Ya971fWENKUWMJFBKzQ6cxJaefnAYeHyXunveFMff1bkPHR6q4viZnywQjDgn2PfNxK46rahKLYQr",
  "key31": "3r9pjG7Api7T584WtmkJG1DEKww5PwrW5S1zFJiosHsYYBzVTuN1C7HUVECH5ww3GmfRaDqvv8Td4pEyhxFfWUqw",
  "key32": "Andynjn2ssmy4jGJZKq9GZwkB39vkdeAdRmRureYqvwkf8zNFZ2QjGYC4jn9MPqqExFzXEuJ5KitD5yAZBqWTQF",
  "key33": "5fKXBPCNtnFJGCbJPDfHZzB74ZyEWXnRVHywKPViGikFAqMXiPwWjRd66dQ1X9UUNTHpMmqiSrmcQtWrZa4ZYvzF",
  "key34": "41PuAtaZDxPdXneFDXSwZqBJgq1WaLQHBxXjFLA8waRFupmagZvxebdxfRrSY5tSgtunymHwnzfx7WQ2L6xwfiZm",
  "key35": "KiXkx9soVcSQTnRZh1LpDyJUajbbWhCokGDKKe3dAJGu5JXaW2v29A9tsec8CVDg1MBRnhFV9aXx1gRJ8DEGXw7",
  "key36": "48ytqCUWuLQKovWrrs8t4nB7u2XGdHn2UwF1ytiFA1hBysd5o91feXui2ArWkufZMahURxV3GmmLJ3ghonNq1Bqa",
  "key37": "2veF8DgVV8cMBtkcJyP7d7crLDRM5aTziicojQi1aBo5q1vmX1EydsqvTMRje24vWCJni9PDR8FG9pBEDg2fK8XM"
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
