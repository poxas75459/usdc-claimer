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
    "2xYZ2goSe1fBQuS3TqsSwicTimiqnNdRqx8ZG8UUGEDpuAg5JLEUEbftc2BpqHNs2JLHPMUM6sAiQD11UuCEutsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DV1Hwuz98eJ8RMtjKjUkLVz3kk2qp9k2NZ1kbBFERF9r5ZoCLgz123iwigZgHuukEeXDMVdE5nmdfeLWuV4bgFi",
  "key1": "5BXxP6HGcNmZdQEcqNXrQ7oAH4m4eQrPz9ZVVvrV17PVD7xhZUPp5ea8XLBkQU3bVqajNAxiPZVbh2NWv8sjmohB",
  "key2": "2LMzGerJENScyJXgsTc6XoTUt8dchJMuVbB6wsGuZSmckLVc5PViqdNWnYba9UCkvLJoe5qok794cYLVVvTTLzRr",
  "key3": "35fP5mNxG6HVEQisvoKUzmKcnExYB8oF1EgDuUR6a7ngCPQViPRLEgQyq2RnQQqqVEfrvT3wANbVUT8ZqrMY21Wa",
  "key4": "5pYfTyYnR2GsiGFjcsAvPVXQc54zm5SsaqLF5abYbERNxvGT49eD9dRx3KHibixc891gfVZbCM7FibKNvFLEciGm",
  "key5": "2XiC9C7EBSM2PLegHcqiFz595zbNujHjkQBXSvZxJ1hPN6Dsu16RQDCJPpYRjDDBLKuGrgy7QQmk4tgvDXka1SwR",
  "key6": "2feNRJT7R1K6X83Q7awJ2tBTFcC4YShwmYbevXU4kTFKf7wqCrZU4qZQsvPU8SiJmNDyfNmhn5zYg2dbmTV4ctEs",
  "key7": "kKe516bEWQPMzZeMXVPSAKBrNtuogG9GbU6bCYP3UcSwUHnP2KA9TBg9jEXuLc6epX6Nt3pifUnHbdun3xN1PKh",
  "key8": "DjTSQbK8hU4FWzkX1ngkJ9JopyMPAXsZtEuUNfnmCkxJx9CaDPc8GtZF7ig5tLHjvRAC1XCWvxuvovhzTxdMsj3",
  "key9": "351c3R6REwPGC7UepBXZSdnhbgWtr3BqeVT57FufLoeXzfzRi7gKAySzmCNpgpCqrr4Dk5jm5CoNpZYX8E2xNYnd",
  "key10": "2ntfptQiusgeTyasiKNh1KZWYmejB11C4zX16hnrYHddz3ysj79U7Ky6pnafmGSqUaXgCbuSPHGVCgkvZ7j2Y9pk",
  "key11": "2MspDtcoYXNAF1Jr1i1yxGF4iUhbRRdzFZkqe6V8hWUy5QTPsQDtJHcLGLnvwWN3D77LYVUzYbEHoFcx8haq4KKL",
  "key12": "TSyGNwJAwoAADDuZjU8bey8DYmfW39N4bZdmjC9zZKUWoNo8AwimtydPRPYedFCDDK9oFBzwdvqdkkNovjSDAKi",
  "key13": "3wsnBMBY8bbTaQ2sLgrDvFatgmc8R6wQoBNqWfjBXyzSCrtW4h5AK3hdLwHPYpgMYCixHkEaLXnM3gAw8VqdtWYg",
  "key14": "RUgqWqPHhd58B299NupYcj2zaCgoPFassePBCsoxwGsqikxyvNpPs5iYMbNuJsm9rwkDcdTxEyjQ5s8ekZmky6h",
  "key15": "2BzuMMLwZwRXkYWzF1rccTZFuia5rTcUXSaoQLrrNEq3siUVgF5cZYYmQZ3D7id6EnDYB8GpYZfRT9Kv8vZnienj",
  "key16": "3Bs6PnmqBJXa5Sb48mWb1DLM9GfNR5rANrnusW35xLL1thrWEviLftRsvJEU6bCVJLhfBR5hhC9fzWGUdTgL2zMG",
  "key17": "5HEoWchHoANKcsgW2yL6rNqwW4HtcYwdbdjNdp7V1bGBRjbu9bLujGM1ooECC5CF4EvZDFAtATc8HQc4YBX2noW2",
  "key18": "3Bv2Wnq78U5Yx8avi3wi93mzREsWspvN3Xm4D5ubZdgh5fUmVxrvNtmkLFDfciH78gLP8UFTb8FTtegrBTm5iKQj",
  "key19": "LkKantSfh3JJamhkDSQJLfSt8WcFSrugVQRXmdzba3ha7Srv9bgxSFBAm6pG5S361kNB5vVLjjYHAWPqfQCNj2c",
  "key20": "ZJkUgeioQ4J1rXtx9oidNeacExd1ydvSEjqN1y5PvUb64p3huuTg5B6Ry55Q6xQW823jmwUi4C6D5gUuQVYhGJK",
  "key21": "5AMs2q25kvUQq1ubMyG5AbDN5wx81onPRBVX7iMnwSrkjWwGbEM5Df7RcDuJM2g9JSz3CzwCDF8E8UAGLzCapLZg",
  "key22": "2i6BiA5KzruW1ejUofFMZUrb2U1LEXrHx4wfvdwh4mYPvq4kt5WLggyWQNGZp5sa2kuQva97bK51uu62Syhg5FdN",
  "key23": "3V59uXRFxygC2PZKVVP8AHKg53UjNZ8TsBVWnoTFZgx1kPbC9WpegxYCY4ghP482PWn6N5o3CrSNQap1nB7g46Uv",
  "key24": "XcQBHvussA62hdrzyamzse4Fie4v1CA1uQkzRrrpfNtGU7i29MzxrftJby6TdbKf3GemKVYBMS5NneMeWQmrKd2",
  "key25": "3XfBqqFB64icE793sdz7rrU49mMZbbTdk7g7SAjaW19ZXy3Pgz9yirWrnUzMCn2RzSfDXCxxYtLAj7eJUw5jFBXw",
  "key26": "4tLz7gsWHQNaqYwLyLtFh5u6SXLZHfRMcoHedRuYaMyupQR1WfhYRXchPeDXpuwNkNmdCJtmLDcBUuFMwq1MZ9QC",
  "key27": "4SHN3LkaWNFb96eRAVvXm52J9pR9c9fmjun1BaD2hezke5CHSswmgzZ6UArZfZum4Fc4B2YdsgP6B56Xfx5HVCLR",
  "key28": "ueXfpLwYERp1Fe2tgAM5rzji7AfGYojnqzpxocgShbmjZVYjq8eZLBWPg176d6cPeA9ZxX6MohMx6P36V3fRH3t",
  "key29": "6V2HPVHsAvHRbfg1u4qFxdYm3UNvsQY5Rrdksz2PrRHfnkM9arWGRRtDbWKr7hKtNH2fU971R1ivg2a7fseKZo6",
  "key30": "4uXbMcJTKw9jchhYMihmNNGSmwurtRb76Q114JzwXehLbfcLM33TjshB9Jx1DNeK2TZ5cDT5hf1VhcJLn5jnsyiT",
  "key31": "2EGFatHcKnUoijMPDL5muemCGmHmAXDAVefiKwh9pNzpBXMd4FHXhJTcdtBr6Sei6WQTjCvAWsVzPWpxckegUt7C",
  "key32": "NKqGivb6uNimMaE8FRrUq75U4JgzJjz7Ai5Vbi4HfxPqh19UpGMz14rhDePmg2U2vkjQq7EsvJ1YrxnB6kzB33J",
  "key33": "2CZpUvZZuFkgr71Lj5f3ELa3Dt5gRsxEDiLJ2geiWf2WHz8kvGu9tN33UiFQSMckpmLYSgSaNQY8VdhYR84ry1jE",
  "key34": "2WMRDiBXX8jHTkYsxtFnSxFrkzR76qQ39hXcQVTSMXocsDK8RTxay9dpYa5ionhCxEQhoYciwsCaShW2AavGZFfE",
  "key35": "4dVzGd8PKdnrJ1iEnQ99QAZrCavJgG25hAuAsEqqPCeShubrEnNCUhaXNDYhCy2yYLU8gpB9eRKnqS3PJmzjdUzk",
  "key36": "iammswr2yMNvT7y2oJ3i8MyQhCZ27mM359B3ntYHBDVsWrBysebwp6YAQXA1Lp35Zu81kE8v9KhfX1wV9n6xez6",
  "key37": "43KxT4HeDCt4v2Le6XDsvQEWPbuvfvd9hHofECuLXbEA5AaFnoYLtyQYRxugQNoguPvEpRedcnQidFehYffEVzXm",
  "key38": "4YpTYQsCzJaqyPDV7KydfPLq2vFkEgqvXHzFnLGhycMXqgRs1i3HwUrGYU6umcKgLDgEP3UEDvbYMnBQhNEZ49P1"
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
