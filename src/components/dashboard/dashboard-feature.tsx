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
    "4cman87wHGsiWqHRQkJNzJcbsGWbitRbyivqVpUNMHcfDsNXDCU3jij84CVK5HGQwE4SLBYRaPUiNTGRr9JFKQ4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ztyGcoKuU3ydRBRTiRBxzKxw8VYm6dEiWYZ7iTg5EXw94Qh1CN1Pt88X4Rh9KeAbsxZAFsqAWEffqv2FSytAFQ",
  "key1": "6Tr6i9rVdkDmAq8WijnhwP8hqQ4GHMzqCTQzgExt8J4TmrV4HgPjetZsMyBqvBgJ3TKN1HnGAqkCoToNaiD1Lyo",
  "key2": "2Xd3qQysaW8Mn9KmoXQuUb6TzFN2srZ9GD5HHexTRyxrb4bdD89vspgSggv8WtrZgKSU4a1V7BE63ba6ehsccFHK",
  "key3": "5e92vbAm11Lkrfvy3QSxEfH379jtoG8QkaeoURJdSjDnfVNs317NH2EnxAPYmbRbEz4WFjcVCBVQsX7Weq25rXj2",
  "key4": "5MkdJBVZps884GEibY2CEvqQRHzCJkAyTAZ9xWp27DMCpsYaAfbkMhC28e6veEyWJNRpPWWYs7akGibyM2U2tepy",
  "key5": "5ov6fhKWm8cg7NFF3GwRPdbaGpSEcULRekvPwXpgq1Ywy2Gs6JE4XZi737rPuVcn6YZZYBuSvcUm55vwdChUb2EG",
  "key6": "5Vu4AqTPSpaAo6oGA99yBCmQ5RTe8ymPGnNDzfw4FRfYj3Ze6wpkJkvEDndNY8UeSqhnbrqyBwuM5rhZ2fHuCoA9",
  "key7": "5Vnz1Tw3w18mgy6jNu6c3Lyv8gSUY6Q2LgxtXKhDFef1r9E8SW3AzYHJVKt3DtA6J3TEBL6f7Nsvdyeo9MT2PncA",
  "key8": "4zeFb1rAQyUiRboPGV66tWmWjhJGU9A7iyqXNcprBS5B6GyaKrBpyZTgFfnijHD3au1kXf3mGpmd7Yq5vhM55XD1",
  "key9": "teNHfNWvaFYpvniCwNuCH1JhZVxKdCyptrMA5ryad2R1rHAtkN4QszhDkHFmCAXiZYXVSTv6x8BxSdUor534pze",
  "key10": "49KaW82hjAckyLaWsbvPCeNeJvu3EXgq2gfYv21vMG3RjnvdcQAVgaq3MraJ1feTtUXxPmmWytMkkKJmSfTmfiVV",
  "key11": "3TiYjdDXd4pETreaUBnxknAnrkKRtvzwurzUjqZWgHqsxfX4bmCsfRQ6KitZNZaA7UxorXoHqzRnNLDQ3T1uK2oP",
  "key12": "GGmVozyGmnDh8FC9fp22ePeCCgxgtGCoN4UYLSYSTRcDkKkEP4RBr4xj8DZHL3D3YU6E4P4siwPcFVs28YLqbWr",
  "key13": "3DQ9QhXxNfSBt2PHY7yYhg1YTwszU5XzMEGAQb4kHPj6jXhwWzjmPwGSxeF56e1yh2HLvqPZh8Z5DgN1a28k7uy4",
  "key14": "48WUdoXZxxMFcJ8U6zRNgUPzpye9FbctfVwrUL8pmScfGudHhgTC8AfAYmWHbojU3JpZwJwDJpycd3Fpu89wnfnK",
  "key15": "5kJMkP7DSGJhPoJNabtpx2ycmDJuWupmkNrRu6Z4mUtrCyrvvkVqiTVZdBU63JA9yxPg8HDQSdMAv6XJqWkzPqMj",
  "key16": "5SayQ21qrDMqYJSqcm4U6EVkRS6rEMkTYhi9b6MuTMydpXM2JUKVBgvq91kr1TDSwCGgCL6dHGPkNxsfX2p2yMFy",
  "key17": "3UhYCWahN6bSMsXFaXoVdEiJrCSXC2EZMH22GYHvJ5TW4NEQnHC5fP32durrKejqzTRGCYoH9fadyiQypAk3uCiQ",
  "key18": "fPBkziWX9XAtetZswTnondRFmFZX1RBsEuzgYtk4saaRkEM8b6iD9pckmrnbMUGBae4MfGoJFnBVXbgVpNUTu5x",
  "key19": "348N1JVytj8dyvQFeUJEUBKCLe4rkSCMAY4SEYLAHD7yFDSjZ8Gp1DMP76jiEkTNgKxZVMyXECnZG8WyrCVjxwyL",
  "key20": "3S4JGK59xJ5ownv6YXp56dBpNnHB6yxisucQWVfW1DnMWW1CV98P35fdfqywnuNyDyFB5AGbBiDyzoopPE4JtwTg",
  "key21": "4wRCen7d2SdXpyKeyY1LaZUbsWnqvzVpD4kzeep5gngdwyvmLk9EmPtTBzW1gCitUyxPwQo4pxbgBb4TSpHSXWJL",
  "key22": "4x7Mm4SaEEkPjx831AfwDbKq3mvwe85SNXVqDRMvx3ZqYHceikgbiQwSkzTuLD5bNdpgmWyNP9p7z36JqdmWRbFv",
  "key23": "4mFCCHgEa1kAELrvVC3up63DQgj6JPA5Md4LN7GcowWRE2rzrYBSaG2LF27RZLUJC5tjt6FvMcGtoerAX2Mzg6WM",
  "key24": "5zfxFfp3ByRtm33jbUB9VRos5PhBMLBiq69zG66fz7EKyNwr4ZMs2PVAsHGwo7ZNzzFFxUQoUwKvueKQz2S8DkNY",
  "key25": "RfxZ2J1bAzMLnNy4AxaWALVA5mDCyDWmLG5driT2fwtD4CNTFzYJcy1Fnw98k5Dhc1eotRLkhwMeLkKZxDpnqEr",
  "key26": "ApwUNZkMp6g1qKtR8ihJmeFuWH9oHbko1yCE3ZC5HnwZZp5sSiVDVb4EBXLYSqkHCsxSetnZgcpMhAV6xfKL8BE",
  "key27": "45yj7EnHN7c6wiskxahvnwLq5FMeDzEXgiFYn1nmdDJHS1S6iZaT4MwBpskSbEZZL4NoPdq1svVu6HkYhvNtSFWm",
  "key28": "XxkHoMn81ijUhWFDARrm75fBP7ragNCN3oJaUEdoFg6P1puvHwfKgGjtjNPdzN9jpNyP91nxK9Zuo2uMTZNtdmF",
  "key29": "67j2sZjc89GVp457CvKGydQPnLfrb117Xo5bZ53BzGMJWh4SY8UrYRXWeSP5dnPSH8K6NyARU2tTyPNWejRqaYCU",
  "key30": "5m9yAJu3Efv8qddhbUpJrzeJYdYJr9rrGaXU4sjbfvZXwye3vDbXxYvxwGqxaKhv7oX3CrH4MJ46NBYB9Bj1A9em",
  "key31": "38NyCuoBnZmTcLzqfyKXjy8gw3Fe9LvBZ3hwfw1vD74jUymJDyUtNRcfzTqp5M1xVyWtTeZZwdYEA5mA9MC8XNPF",
  "key32": "52xthSPvpiqBs2yr1wpx8oHcmw841Trg71GCB9gsCqzrDjK6VmF2KX1qrMsvt9fbciCCsXu8XQPbvC2oS927t2FP",
  "key33": "53jW2J2eULDnotgGSD3NTGQ7YvCqVtTqKJSggBM2hCwQfcANacybDmhhNZUjHQetQHh2uAuESFq7QsDuRt1o2PSA",
  "key34": "67CLUzXF84JZgseMSAXq4BkkbmLECTDekv4ZvUJpBF2SueQAvZksYdvat5WAdQdnbFbVVVWBP2BQSxErqdAe9Hj5",
  "key35": "5aKJ8H6DqZbi9fNXqRRTrpdyL1vV7HWncaHUgBwHkWNBzGNTJorHRvThsM7Kysw5TXuUHb5s6CtPvbH9jsoRWi3g",
  "key36": "32jKESdtknpssHZDwD2GZ2iZ6dwYaaxvviSnxFuD2axoGjcnwNCnn262xApXwLCtRxyPKNuYn5Uh9qngRoj16UhG",
  "key37": "URnwKhjFqGNSroTTfxrbGfNjRWRDsWiwYHQddxZ7pypJpTtLJKZojzQxRfdWAEnhTwRbqgWLQ4oHPBo7WFJzqdo",
  "key38": "5Q7U7bbKJnHnGXQUYfiZ3YZRRiXewLtjDixq4WiQ9vwnAv12xRxHGwigMHVVMPzdYYFGUTrEfDep7c1ghSwykbzN"
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
