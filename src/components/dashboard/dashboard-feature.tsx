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
    "515o1LGGW6hNHa1TcissDryksM2MycYqkyXCQCHS7wFDQVSAGiS8FGWqYAbBJJFSAtTn7xULnmWMbf1PEwj9hYSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wa5KqopkUo6pa4kX1Kgp4eY5A12ET3GCmxLUpXq5Ubx33LWn22kY8fyWvxd1z31DJX1t1qv7ZtmotfobHRKV55X",
  "key1": "3gSuPLk9L8nxnBTdXGUCyyGBVYxUoKtTeYrx2xQT5QzQzTogepfBf5MGTzeSJdzNKijE8RnswPeenP2Wu4kV2d24",
  "key2": "5uJubF1vWe782Dp6iP2qj8pn5U3hXtKBHkY1AEipUymZaLALMJr8fPqYnzzRzKuBEijrm1Wnmpjtc2Xqb8tT5LyJ",
  "key3": "65V4WMVS8X3RKiVgWmeYz2tmNJ8kt7JmgquQo3czovgcoGY3eQutyfSrmXxSwWqE4gkRTTku4s8gQDy3NHgVq5sQ",
  "key4": "5P31g8PQR4JGQ2s5qEReCboxzcz1GKCNEwRLc4ajiLansNYQujJUPiNkYuPrLWu4rWzjWjmHTAqWVCXGMts77M2a",
  "key5": "2adGxeUzE8GvYkMfjCLcxm42g6QvFMqkh5fGNudjUSTZVTSA7NfM7RwuYMsjvt7hzqTLk8wyJkhPtBrc2J18bfng",
  "key6": "3o524QCbtfuFmPLrpUKaZKuZ1LkiKtDsqkY4CSxEjDnDmKcKxGbyLR8pBGMNvUoNpAD4qq2yfHVoaWPZEJRj6tgP",
  "key7": "5XvWrMfmtM1aXH9TQzixDt83f4cY2w2gQco9uus46VF2uAF1eN8cWS8i9UdZMjPVqExkS8JEb3JnZN2V3BuL6h66",
  "key8": "56RQkciCd4WroN8uftv1XTfnCevBmZVXfa6UzCH5n367Db1Kn8ZZUj6DnkhFYjSNmMFRrfqAxi5bKekKcu2jDh1e",
  "key9": "421QVGRnnkdJdir7bh8gnDdjvYuXMNTxW5BBNz36Cq1wirDXTUHuARb8uFSLxnXhQMPpEFPxTHcS8BagAVMCLim4",
  "key10": "iTpxg8VE64vMMc5r9DH6xBLGLAAJcgETbfJzFYXz26vYPvjjWx36tzb2RrUJtGBVmS6gN1L3F6ewLAqenp913nN",
  "key11": "p8c9dDKy3EfJB93MECEf1pnKFLJakBkDfq1kcFADxEXwFxgijPEGDRYFpEtzWDBHyP9EUgGZVNv3Han3q9h4dgj",
  "key12": "Mw4x2UExFse1ThpzWwb1yFUiGnQBks1J6gMewd2e8qiBQ28X1QVzKWpL18JDeSmfB76fiFcdiBmGC74YqqAz6TC",
  "key13": "5tjBp8KxiryZQg6rxFgqvha9Xi3ULv1t76SbpfwfgBAWJ8f1gY9tanqeiz4EmgCAkEUCLwuVe228NBmUgaEiKyHU",
  "key14": "dX9Cn9818Z8Qy2AGoii32rH8AEpETGFtDKjxjYmR2ChqMSfNz82iFnkbCoTdonm9oXq7Msy2mkAReQEWorBAwqJ",
  "key15": "2RVgpiKZwkXD5YnHH7Cj61NpDPksogzfcVpfWYECWR4otB9vtJpTCWperYheWLQQz4XTmXD3gEM4xrv4hAwtWTHo",
  "key16": "5ZB8hTKx81pR2LENDWN3UoPeCCqujnn8odpZJRHQWqUJHBvPovncmmqkUYaZnufynGsUVYYUgxZdepPMkJ8Bdek9",
  "key17": "3JTcHPEVCgS8J29ooo6boukxkYgWWJ2fSyoZCJF2qPaJWULWCYEJAzM8oezxtStxzgcJFtQuiBrsG3zvjziadZ9b",
  "key18": "5gG5ctME1Bei2iEn4z73FQij9qrTHKEweNrMmYaYcmtDzKF2pydKuatXgE2KHNg9MU2ecnZRV7EaR8ghyHg5LsV4",
  "key19": "3nN5wzWjnJinqFydYYGfUutJ4Aa5WQCgi3f8jwbfSAaGdfxtURczg8xoEi6V6WniiWin5yYapXmQpBJ9YsSfLyuC",
  "key20": "7CD5nSDJn21KbW41vjgo9JHPdGgFdHUH7orHM3wRroGVWkeySKmnM9vaBmJRf4AyAMhLmAn5iRPjzUYSj2j8XVR",
  "key21": "25iqXt6wfkZA7f7bf41eqHSCraBEDGC3PfpKJhjCuReb7rhWCEVJwktJCPfmk5bTG8e5uWT1D1M4zWEoRp7FsNDB",
  "key22": "5XkjwNyYedoYwPjYbtm5Nrx37pXqq5NMGnNZ8BPxm7ZZA43vp2JH3T6hY15QWZsSY63qgnMCnNPxbZMZCXfnKo6f",
  "key23": "32KL9N7CnBZ78nYQkarjBxGzpcGFtidCFqTCqHytUANwoWToakQmDrMBnvuxS9JjozEM6UWnWUmDXpvwWiTukqzh",
  "key24": "3Y4ZgwqZMq7FpnbMCENNnF8WU1Wn298z1kJ2MN5NJSux5yRDUVUQB9VmNPNUGdNLVrPLZoMdV29558YtNoHiNDaT",
  "key25": "2yr9bKWanxT8snj279fzRZpwYPYWRK4hba186eJUwx7S87g3H49beZ61U2t94ZL2VsjN98kppTBexBu6VLcQgQ69",
  "key26": "5zJqSaN7HPZwGYS78g3y81ce1GhocGyBFGCKxdMBShFQ2ehPv2hbA5NHBiTqUgZ7UxxB12wPidygQEEq4Qq5fXMV",
  "key27": "2ZT5oePLqxkpj8fy33ihCNpCBk15Ej6wpquds1fvsWG9ayi7dAQr6o6PZB1hAtaFxG2FpAMuChE6rdWTYmJKrvUE",
  "key28": "5QfTUgrnqwiGHeSwdu2mALLAaF5qDsvQW4p3xLHBXg17yqAabBAxgNGDavJCzfRCsuGEdvQT6HaccZmFpzzsd3us",
  "key29": "5CEi8QRt45ExW4YS6AR1FCy2PhT3pRxwEjB6ZicAiqnadjwEY33BJpfZdRQo9snriZwekRhGe8qRrD7TuSX4wnwX",
  "key30": "218nPS5U8UfFhDCRKk16e6qDR4c277WmfpXj5esdkD8ubC3bLe1A4AeDx4Ls7ydA5RufQw4YFEibZgYS43U6K2qi",
  "key31": "2M1VBKzVvRMjYNeuTLjDLttpmE3jNNKP4mftdmFhEiZkQUVrV3K1hQ1dHrcFjkgCvBm7qcLWhqHXN5NguEig4izq",
  "key32": "4MYaEdbHFy4QS923VEvPPfH7Xufo8PU47mPsTQvSeE4edT5XCpACdUqFWqPLrV7ZJAX57eCxisP5ZmuWh1cL5yy6",
  "key33": "5ZSH6MmyNSCNgTCYKXVNRy1Yp9y8fEQW4PydcdzqSvEiuwRZGy8GnCnWdNS1GEXordeRJCmCc3EharHtncVJjb4x",
  "key34": "5sBniJ8CzFyXd8PDEBU9duNCxmPQR2ErfQoL45BBjHp3mE8tCLDbdsZi7sTdHHzTK3oqbzLVFJEa5mg8y1cywSZ7",
  "key35": "iK4Gc5mRTpfxgJG2GfhjyMbjryMQ2kpD8uYSG1fJ3ATSWhhUCim89WfxQcNjmrAnUDuTjRbqDLWay7HZTWRdjxC",
  "key36": "64kHtQoXmYW381pg17GyVXebPHfjpgEpE7Xpe3dgMFUQU5DwXPtP6dLoUsafA4GCJXMHjohbrow1uD9Da48z6pAN",
  "key37": "4pPBusyw1WZwUPuPW9NtXZ6ZMEYrW7yRaSN96ksL1mrTG5K8tNnq7ry4FCp9jMheWoXSX99DiZX3BhK2bHjP3hp9",
  "key38": "28VoHir8dG268uJiWYkWiShpQv4MQW8Ksoros4fKq5iw7DEnDdmoDvMxJmje5Z4TS7ojJauY71YKvJJrWd9e7ADN",
  "key39": "2gfWu8FQYe6ghzq5i7grYgC9ZCj6WEM277CxUd7GBuF83JTkbyXc19rAdnMjY3U6pz3V3jo3Sede5C9M6ZixnuYJ"
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
