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
    "4oh6TLfbrK4LQpWhvwWQBiAnvFeL3MXGXxrwifuhR71TdjXyVL9mhGWNtX5VN13R6gu1d6HMigk5G38UKf624FaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fTdavRTQE9zd7Ydw6LzuPjVmgDATkiB4ZqqEmDMhtzmCakhLADSKdqJATXpTbg5qAHF64KCGFPrvHwKe4q8BqF",
  "key1": "4XyKCiJwGGo3E3SAa6MNvpUMs3yqCiZHs5iSdwkZXrhv8ZxU3VF4v5a48BphwWRdzkpNpagia4NNZG1SihC3bw5A",
  "key2": "5KAXc4FAVr3XuTNVri8NA4q4Gv9vfibpGP3L9XnroHc9AWrpMDAQ5tiH9GSwxenngVSPV6obFvwGwDCj7W8URKZG",
  "key3": "zxqTApTTYaV3YF3qUgqZwpSKTWkYAa7RYFrDsbXUpKmXEhpagkXRkUZbRcz49AmMqCCaHd8JRvQfUDB5Mv2nSmT",
  "key4": "3tg1iCchEL9s6Kine1spw2oXy1zJLoDoYmf6j1d3TtpykSg82hLwwyKQdA6giRtZGYRU45xZo8Roz5HnZZ18hWyE",
  "key5": "46rcJ5GgBh5SFZ6bUBy2VPADUqX64jZ43Rrsz2N8LcyLpW54c22B36Wu8avT9PxTG8eRAxX1gZSswfUJtafHi1hk",
  "key6": "2ELchHnFoPMfJAW5EWyeyAxrvS3r5CPY4CrQbuMzP4BKU5PWGPWFM4ctaYJXYJMGoouZS4kp5ne7iuZb1zWgWF3u",
  "key7": "51UeNWzDsJt1YrqaPvKfxHic15m7htZYku8X4r9EE5nU1FTznxnbh53dg62cJQrPkLfn4Au23zHd9KtPPmwnXcE2",
  "key8": "zLMhNBUhuFHuxfa9ShVWQ4j7KiwiBAYRCe5A1a9BgSpgXdcdJgvHQgm1GAVxRMddpcbLgvbnnb2uhxCV5aVDUD5",
  "key9": "2x75f9aAo6gQA2gtJCt8hJmHgA8tFyiWbfe5bMyCngTFnucoW5pXgbqXhAwnVj7XsThYDpAh5zCuLRweBpgY3mB1",
  "key10": "4RXpe1gf3cUC2MBZate9BfzpjwBrRbPQArncZusUCrAhJtDSS3W9HjTFWGviX3pW9dvumETEyA6HaP749ge1JTjR",
  "key11": "2XKe6ToQubnueUeABQWHVZXTeDha9B6uS32MG66GkgkTTCrpwgvwGxYqzAyVyEhveH8PiVsjkSnLuqCANwh4RxcN",
  "key12": "4oZmTLL247a16xpgsrZ2vcSqzcz1ZFxufzpDpArZg81ta1oyh2G1QGzMoc8y9MK9jQycaP3pJyuPd1AfnQLE3xcd",
  "key13": "2tE2yXF6kGkWkgCpn5p11J2iJSW15461guNLU3812YvUiiQ9JMnLs2KBw2zh8tRffAc4AD3pgnM9CmdtoWsJ5dsm",
  "key14": "2fmm12uzfcxeJVi2ud7JMp7TfCqcVtz1ULmdz25UQKkkpdeTiiLCcYmmFNqDhryrQmPQAgwX12vNFitzoPEgCqn",
  "key15": "5tuM8GaYFStf581YorNqSxW6p9EwnKWeWELv5KJVCdkzmfCcve2eGekbxoWXLp1j7HirXnXMB6tny5iYaJJ2wX3J",
  "key16": "2UoNQwbKWBxNaab6rGahWVhgraVnn8Rm2JH6MacBUSSm9AQfzJEB9eLGVpYb3cUY6iRDUUngwF2r8dFpvBErUF6y",
  "key17": "2BHVKy1avecPRLQZb1FCJqs4oW3T6rzY5ZD3FF5RVWpJFBps8sdfuMj7ZywE59TMpUYTkoANkxv5vWK3Jcvusp3i",
  "key18": "Mtr8eADmvPPor2fLpobkA5jhih58hBiUMCeAjXG4kznmsncZefHXfozP9b3qqrAJfdZFnWyQNjpZJaXMZX2CLHv",
  "key19": "3gMwfUijhkotWJN8nfhuAQ2xT51bxXcs5hzPHivBHQuFXSqkDtybfy4ya5a7Fz2NcPjpD9wNJzekJqAJ4g8cLuYt",
  "key20": "2YmpYHaZ89fqCzzKY9FuguvwL5TDxqHFT4m4eDYXUW1bjsBT3vo71eHX4M4hrUTXd33ryEjsWtC5rtp5Ag2XL7iQ",
  "key21": "sFPgqeJzMfQg6dtMsWJznLFnejQe3JVNPaZVkkENT3nsKS6DNjrn61UKq61HXw61PWddjKUy7NS59X8GWh6MNvW",
  "key22": "26dDQoNCSJuGYW83z4oFcNj6WUjTrqzM2CtYxciEhiKFo1gQUNbcYiZ3VwPkebPJK4h4LFo84RuvRzAPuX78TDHN",
  "key23": "4ESM22GuFu3VpwF7jG4cGdvbUFWBAA8MqGaCpYvSyizpsHddQzYaFxsveRWNT6BLknDxHt5xGxxZpzRrCV3VeBp5",
  "key24": "5BLonU4HyqstWcia72STmwnL7e1XCgCrmKy199iTnLDf8A8MPpwyDqfwRbiVZVmXxoA8Pns7D9mEEWYxx6M6oE4T",
  "key25": "2EXbMWeGNwbDDqK2hiG3zpqptZwHyLvx8GD6bh4XQAYjFy8omCzhsJGmFEnvsEynUx2DTmfWNsDZD3Vy3s8EpYRN",
  "key26": "333hEopZEAC8gqrmqh1Fh1mrJVakuTLjokNggc4h2JAh88cNr1oYMqM5v7nqgDcx2i4RZRJz17F8b6QgW6iprkuM",
  "key27": "2Cyi2ExDNY1bWtsSVQoGHTXordyiUCHNuWb8JFYebu6P8oPjdv3Jeg4AtbU8n9CGaLZ6x4kh4umhbFVdnDtKw1Fr",
  "key28": "4sCRmmBdEpBUT9cbkVN1SrHgMJa7GdNFZbt4X22ajbxucxsNPDBiyCyHnExzqK8xYNXYTh9jcLBzgphamvfw4enT",
  "key29": "3vgoykboLYwKj5cN67H2XxF2pBLgEYfG7DsNizknRUsXuLKdDNg6sdsGcacPX8MUhfMy7BA6k2ffLXruMF6s5LW1",
  "key30": "2FQNMsXyx2xvCVMJ9AN3R9P6Vbft5jUPj7cTfuKivipb7fu1sm5QEzhQo4PCRJfbdeJRbvrGRo38BrAU2y3Bb4GJ",
  "key31": "4XLinEDACnznmDdvhGPsoDR76MUZnuH5xEHYaNrbzJcS2ZjFJz8J2X1B57ennyAPGQGxB58tP79XcyBNMVBGrnq9",
  "key32": "2bKNsNVWPX8RKvSTP77vpHhGx19zUADdrZjY7Ckp37UNZB8sq9kx635hZFZDnHN5gbb9YYqENwkzLj2t5pVPCuFf",
  "key33": "3D7cvF6gFd7UM9rsN6KsXhtNuV64zHwc838WLuvQp4u5SBJJjXj89uxzJhcYgCuCAB4UFkVLqjZq9QG59zHJVBwB"
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
