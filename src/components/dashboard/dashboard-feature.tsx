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
    "469TeRduFRcHPd5PPtZds2iY9DUiBCXNnsaVHmf1BTGeMpaPBT2T2EpyB4wwcax62ymnSV2sErghDDWvPbbkjU9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RgEFj4bWr99MvD6tpNwD518D4sivCeuA5M7ptqaLhNi792ktELDTsXzPtMoGJfo7XY3uaLjGm4gsAzADUvD3TLs",
  "key1": "9nJgqW5TdJRyPqGGq4u5vbmU3357oiEMHUfK3m93wss4duTkzHCPcDUMauX4vhq1fmLf44SgU6PxW7TfPs37fhr",
  "key2": "abBcrx6mYRz2BCDFgEu6igQY3qNWtKxMyo3MZ97dmsaNq4ex8rtxdEFuxWGNs38N9DepsbkwQA7oeybewq3ge1Q",
  "key3": "5ePfNZ2UPMNNHN1uSmKhaCLHXhDzeET7ZSK5eitFTqcPPNEX6huNAymDaQFHmE6yBjeTmtd1wvFzRkDrHojo6HN7",
  "key4": "UKRcow1AP1YVrKXie7XtQu6Da7n6LtFNKoURBjXokrDpvvnFoZoTKP3BMVZ7QehhxyHNMCju6YWwxrf4kFzgmrx",
  "key5": "9Q1Bxh1rMMeKpSndKgQBaE4zkNa1xVJX6Qmxhtg73iVqBR6hHGMjNypw32LyzHp9Hov5nv6dkrU3fvpVSUtbL26",
  "key6": "3wguiCQYqXGZn2JK2Ru8xPcJiugViHTTwNw5UjYjQnAm6rKE72gVE2CdAR9GfJ1ue2TW7HyPHzstVNJeweD27haA",
  "key7": "4NjnKfxVp2RsSyRutBRtA8hegBgXkKqYzC2aFh8V1hSQeJmSCqYuggEXThgdohrSRstdh7DpWQ1M7oJQ6MwyQ11V",
  "key8": "yN869LKRzB3ysE4vndbqNfRjC2MFw9o4CL1K6HBboZgxzkEKSXfe7sciSSXY1q5cnyrY8oij92WQTHAgv6G1nVc",
  "key9": "2ATeqqTCGLbq67XyR26cYruUrqCog3WH89ESDAtVQDXc5GocKUFt5xBrhyTxVGwjZLDqaJAr6yrLTXGa1a7nNntT",
  "key10": "5sRhCabGQ64kLjTPJrj8qhrnLFRF7JtEeyBh4EcYZDdk8GtGcK7HkD1oXa2HHkZVb3WhixZvanvfjfd4wDPpmKtr",
  "key11": "23Krg7jAeh9bUzaczV3KCvwr1vgP5RC4fgXjEHS735VcukszbQhACXMumPM7ZtToQG2NicgJSQp2ngPM1eR2Los3",
  "key12": "3UA4VKRjg6dGXVjJskT214s6TM1KQaYWpEx58WSsxEhSfND52gP9EQNH1yRiDipNuaGwdi23fyhrY4agfzW14PDA",
  "key13": "EgXXFbxdEmjCGPFuznA5xdi6xH3GEVWLdS8Ej3nwctphceDFEx7mjAbajsfRjSpnfHV4qM5h47UeJoUUHenkyXH",
  "key14": "5uqVPU2k9ka49VFGPCp44HAkvvXuBtZvhdX2hjAKuDMoCvSMb6FN7S5DFsVbo3Rk32bKm2a7JGwh7Mr3kKb6zJW7",
  "key15": "3awuoFTwnkjjU7jrDqr5XxSgzFXxSuGbE5uYj5DdPcGbrSVy1KXSvpf4mXi12DcTcMqp3eQJPdnvH853AReZH34z",
  "key16": "4NvXzA7TeuhxrnYkyTnbSjnzGRaeRDKSkAsJo8SN3P8mYeafs2JfSjE6pSxuJK7nUPV1vRtYLmfY4ewdLnu8C7uE",
  "key17": "Ui3L3YcW8tV2wMjxn3SZyaXXDVk4eNPhhHK8p322Tbc2bHD3g8THrdfYRU7u4mwEeyiy3SQbTSimhHB3aNVMfU2",
  "key18": "51XxXH3xqhYZuUnJCskQhArNr7msvzLWdhkaVeQCd2jFPZQnzE925ujsBDuPfoMcSX3rcQ97YYwHDuhWKKmJZ7Dx",
  "key19": "3VQwTL8wJ8mjHAUBG1mpM1UBsNFEKrgq8UdDRMepuShgKNHMNLmi5N4ScqzEtznRm2fvis3vxjdijqhrN27VxdBT",
  "key20": "5vZnwWoGaFkUm3ttQaeDoDssR6TnZYZkHWC38yiR1y1RTKmY49dAHHx9S1YFPDEC6MhM9bHpTpJtSrJjBK2k66qJ",
  "key21": "2tWAz5uDiT9cm9kv8LF9QZyq1v21zkAg68QRWEfjUbjsECkHwP2y4G95qGBfLDqxgqGzwU2z6BduT3NxJzRaJMKW",
  "key22": "455wcFisMbAtbQJTG7RHctRohSgmESph8ryY1CSroHTBCf4b6NoEwdEBQAZNbroZ1UvouNbCMnuaJnpWPUdbJDHF",
  "key23": "veugg7UAYrk8m1bwq9sXvSJrf67UhfohG3ChTcL3hMy8Ng72thJRWmaHVs4L8tYQi3WBEKKNT7uo7uJqqF5GJ3L",
  "key24": "2mbmoB23jzPmMCokJ97d1R7i6AmC4TJXMxfXpj3wSYS4TARSzgzipieLfS26BHyYtHmG6DLx1s11UtHLHwZNY5xE",
  "key25": "5NLpxkY82k5UUTYGTb2ZpJyoAY7wUXUVFWbu9RACUjEHEbiR7ssUbAuLLJE83DcKihjbSAJJ48kEdRhgrWfff7vW",
  "key26": "42RGwj7RgqUuaSk1jCjV2MGuD1eyb4kGKJ8rZS6rC8C9Hx4c6USTyYxKVdFt1ZQaxYjwSTdtmxSXRQ5mjDpJgF1A",
  "key27": "2b9UgKqFtC8TbBhjdRwNNdAM2saJ28JDUDBnU8332rcaLZVSX2kuPp8851NiB1qcZfyUZAuLqfyjfcAuh2B8FYV9",
  "key28": "4G57hzoP3Stq7RkBg5LN86J874TmtBmZqfoRi1gXkyncs1hTXjaCxTnn9uFkX4M8YKPTTCm2APeBxCEbxiZEXQmv",
  "key29": "Bkb6zCtCTXvpVDm67atgoo5M7eMGzx8gwHU7bZTdRqWdYqd5jzgKFjDrNdZu8D9DGfrrTVc3dmBFV1UJKzuD1i6",
  "key30": "4uCYYDgtPgFPyppaYPAHBn6GLN7oAraVWVR6K2Z3nAr6USw2BvK27Lzq2MxkxkRgFLxt3GLHokXFNZeixJ82Qsce",
  "key31": "3YzbFu2KPEwa527QAteJjMfpVHmbb8J6rGPw8ZYyzoFJtm9rzptT3sp7z4bXAWe8iSg9K3BXELhtJkCrpwxp6HJa",
  "key32": "2sifVtRjSg9zQmnMmQVxxDHAMrPxde3cFDbN2Av2kyFqMPbyB6BXPJFhWX8pmWwwmwFd5Z4mSrmtYvJ8YuakzF6H"
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
