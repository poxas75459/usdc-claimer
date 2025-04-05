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
    "4Q6KdDeULnWiyKGZEJKGrsaMMYd4X7hapfteDSnyn43uteLXkbx3QFB2kCwkXCLWWskxXEydHRdVzZpjNacoXahD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWtYNsbQZG9ybLv5MEJWn76RaSq21gYizi4tFJwSurjENQvXz4W4fgiER8ZyfR2x8AzqJ8MeAtvtTEsA79kYbfV",
  "key1": "4rVorsC4zgFnMdsC9xPJxaaKvxV4XHDN6RAeRTSvYcwXbSt1gyTMBFphbk9vcYejtLWPhM1u8U2Wq4CVDMhXzsnM",
  "key2": "4eXTHiM1JnsCmMgknLV9tsimBjLur5ugD3nirbhW9CApMU6Kacndirrqg8JEcgGeiMEk7RNSmFHgnH11ND5DBDGP",
  "key3": "2ya6gRTpfcUzjZdS58bhyXeJLXrzwd1JXsBuMApm5MJCLA61kvuVJxc27k97gEpfwLB9sB7ku6VGLZB5ovcD7b3X",
  "key4": "2A7gwK5RA4kmnQm6zuhY5pKvhAnd6vasHYnzfdFqzDdxtc9SXC9VMPd5ST1jy2axcB8jooFbxoe1fqVoixAyYHKC",
  "key5": "4riPMfC5TDun8nPHEvoqmmDkLJouk4pRmoaqLdSYyJipYtshsbiJhgGJtPRyVQKVjmkEmRwsn2FNnz3EYAWrd1Hx",
  "key6": "3te4SHosER14pwQY74yuvGhKaNEpxG3BAbbKhF7rmYQhCA8D6eGMASZcPLJhG8D8Yj3wtXj9LUnXku5b1fRtHA2M",
  "key7": "57a6axEowALAqNU4iPAk7YRoyXhEsAzmgQQKWEpMaNkLXYmvjqZypPBrAw4xRRiCF2mfWevzPPPHZcSxk3vXxUDV",
  "key8": "4PCcuER8oY2yfTCHCAe96QVn8n7GXXzf1Cpz3Efcy8b7Zr53vYHghxxLuTvqRs2LXcbcfKrwFba4Yy5Zbu9fcTYy",
  "key9": "2NHNWdVHWoLanjWBR86UV7nnzh6hjLa92jwRvZ45NBRXZewy3rW2qwU8gZSLviJpd5rp4hYucL74LkC2wMVLuRih",
  "key10": "XkhxzVMNZq5qWJoT1ddedJ72aVWUCKjjgCNXb1tvur5gheXRQgQzuegBLajSGDZhQYYgbsRoDrtxPMGxtUSjMnL",
  "key11": "3GaUapUvXVJ2nxgFDLCHbq33SDKvkSdvjGccU3wZ9X8sCrGSoUiVhWG11ucFFp5vxG4XeyKBPDPJCAjwjgBiTUaD",
  "key12": "5sT2AREVC7b2Hjf3oPy4fSyWxXvg9rMnK3WmiAL3q4VWUUoKgMYzVBp4HXx7C41NpBN5btucbsFtgs6Y711YbqMs",
  "key13": "2ZoiUDDY5Trt1SXCTapu9HR5oybdpgJUpwW8pJFhLbbPyBEojTjGHjzANKeLAAXjgg3azgZDGx93Qhz84MmX88pU",
  "key14": "49VB2miX41nhn6bTunjtQZrH5Trz8uC3ZkwGvuzhtoBQQFKgNaYcUbPCagYsYJ7QQAbLy4wyNyhGLaVUufyfnk5k",
  "key15": "Sr2rHvmwECtMHJcrhXTy5aV2zAGHG4v13sLp7HgEGb8yrxngT7yhpE28DPACbVZXkshzf1R3CUwwGSDEfsuM41e",
  "key16": "4smCzfc1HXYUBNG8LRBwT4upEwR7s92GLbga59kpX9axu4Uxtabxy9Ye6MxPApYqXgHNpw2NqXBbd4diJQS1zSk2",
  "key17": "3dxvjPf7iCp6QEXcNKYMJvqfPyTSRkkUKjSRkxbyNTp9ejJQafUsC9aPHy9j8KAW6H1NXzZGb77EFixd9TmdLcuH",
  "key18": "34WEWmnrH1jii1P8qxSVQssJMUhWmvav9TNESxAtZj6cscyvuqJDt4V8qkLysTWenKD1n9pgjUtSnPQjMnDpHZPF",
  "key19": "62AZK313SkHNT6pJMEfMCMatVyYKrxD8HbaNgRzFReiNihd7LU3YjgdS2Syd2YnQU9CYSMcv562XH8xjVgNBdRrb",
  "key20": "2fDD2Gi6Ufm2P3PNmR5kg5CXqdSuEsBr3wUDy7oCnWGBQdwUKJER2hQMhDsna7SukwHgB7BnB7vVpxbziz39fsB8",
  "key21": "4W9M99wNjXFpkrt85Mfb8gohtX5TPEZF9vfsFkBTR8QD2rP8XrrHxXpyK4cGPcMCQotREqU7Gc6xiyYFaQEuq1nB",
  "key22": "5eAdzPe243guqcFH84HjA2SmSxQ1Sku7MJ3JCEZ32PXyHnrBbvn1bv8A9nhpi5KvDNAufByHu6ZQirc6NrYaDgam",
  "key23": "gcPsrws69aTjaL1xZibnth357DmExxrtfis3eogeHRc3bkGoxDSPbCWbaJUFkTQtq1WyqtGrTz1NpkTNvKgrkZB",
  "key24": "2ttKPPsdBbUiRLhNc9j1kGhTxgb7eFKtGGTXcy5ErHkyS9uG3coyvdyXsF1wP3eLqyRBa93q17MmHemAoDPtZVeb",
  "key25": "3JxCcYVqTHG8cjQcGCXLbGUYU1ck4bYcechtxMNJ4UDaZb41797zomHf5abaFmt1QQd75uFC9NtGqUSK35MMbA9h",
  "key26": "2Xq2exoi283FkUJxtCabEgPGfx1iE71SZn5fZzRZneH5FdXHQnmYMk4N2MJU1Q8khmfYQJvqjc75W8StC3eG8f25",
  "key27": "q7tFev8rpy14V6BFQ2PgV6nyTGQY9xhyFKoLvi2oLwYmkWpak38yE56PCw2geA4iDHwzE8CSMtbvk71uCW6axhf",
  "key28": "4QTNUYL7H1uLunN7R2DHZYnW3X6DA4yVsFJgXNohWSTkbcrsCstg9xH4e6rubj3k4QeUZEHoHrkUHYUvYPASbVCB",
  "key29": "53AeZytiPA6jg2eUB64Mbkdpnpb6JAALpW6Dzh4JMtDbhfxy5yNavcMtsie5gncKepTSnup5FRr37buvmrEEKdJB",
  "key30": "26MDJbnLSfkcYtJhcYAdNsVLSETFANThZcbPn3Sx4Um7hjRiXbMFNq2SatdpvpdLEZgKSUGNLdwVcgg8DtCN3Sdu",
  "key31": "2yT4PzTfRBkXQQyvRGjnAYGrRCEA3M5jnoYdPCJYyZ2rfKqxLWUUHMxiyEvuDfQpSBXx6StyBxxM8UvLZcMYeJGm",
  "key32": "4ASHMxKqK7xDVQwLqMCmpfgozgm1E1tpiPqRU6FC6sbQkvdrLcD66yqUTXw6YqmhfuS7ynF24NTynzXzvcVwts3J",
  "key33": "3swiQbPtUNYrMtpRTcYWrpq1aYmh1Gxyq6BdbETw26DU6P7yLfiD1d3q3Vu64tjmjVSiVNvP4XbadB5fDpW1rCka",
  "key34": "4fNgwvyCJSbg4HWXHaPGmFSYbp712AKPuaX6rRqJxJvrhtsccWaTTg4YtAfKJjABtsKbdXirwcFEQr2a5joWdjKb",
  "key35": "3Cdk38HpYwVA3kJdd3b61iihq5WF9SBaaBbW45w5yim3QoLUFmft8u5MWhZWFspZPE9hvXJC6nGz7iJft1cKXayr",
  "key36": "3Nky7Uazj9Xj7qReUkvDJgQSfRrs54FMDc3qSSdUqU2tin5qGbC3fqNZcaYANVp9ZPFhHaAuuJmocHXW59KBRZ23"
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
