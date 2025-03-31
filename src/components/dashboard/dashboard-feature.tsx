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
    "42xwTgNpjz7ZgSRKTNV88szELQQ7pYeEgPMatxZ6GY4aDD89es6zgKyZs9v6UdDiDnq541Bi1KxRRQq3sEkuuiV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XyEmtE8fvRdwPDAokd9vBStWiNfhTFDrn7GGDRwmE2Y33xL556L2pcPwxGhDFzR3vHbMrve3WjJa5LwK2BqZDeN",
  "key1": "4B4YiXmsPLhzbU2SGmuAcXUnDDhLBuuxrWACN8NeenJ7r7rs5nhZ6xJxMzBN2ippMcYQZ71TPvWxWjyTCfazA1da",
  "key2": "Zx3JH1JiWeBJZipcbGafP7GyC2FS4eMJocq9Na7AetPbXup5dMM563tTxiGNCMoi7gVt3nJMuMqKfV3ZC1FQRzP",
  "key3": "4m2uwVxUbwfeym7TCzu751o1ahafsWN4yjf4VecKhQqQ4M2EmCG1Dxn6yUmz4CB2CvGnGadTuutFmupL7aa37WH6",
  "key4": "2madH46Bx6hMQJDxqj5KhuDzwkx3Xz69HjMTDLWzLcpS97omkT7AFddraqGd9mKMJw8Bm7oFC5WBuuGaTJQiVYTU",
  "key5": "1LjyzuBYE26MKaXbveDKD4f6NCNt8tZd9ArmcxBn1KrWivrH494y7uJZfGiefqTHD6dJ8n4TAnLc4vu9LTZAoNu",
  "key6": "4iryyUqSuNFJaHB4Zit2YqUdEyMVAUZu733ELk37UJAUdmanEontLpPL5NodvVbjTfQDWJArrYcGZJviwMrB6M8v",
  "key7": "DKBz8ojhQttgqWZdn6WDULEcaV5nt2bN2Buz2YVzuGdbpBiHfJiACRVafHaD4Zi32oXY6fRidKuFi96RD2gv4Qa",
  "key8": "5tJGsgJoXVMDErvJgJDqTEfgw879FMmoA6XxzvxUn2uhA8NjTnh2MNmyDiMFg1UMh5NJmVzFaQ61BTehbFnKYm6X",
  "key9": "4a7f4PXhKmNGSAK8PHRENeC9QPeGqvPDHbiLo1zKxzr7RcBVd7fc7LvGyMspgxUW5P73ZvimGYLxWbGk8jac8u1V",
  "key10": "34BJ2Ki772WrUet4k4LCC1bjzU59qvyZSN2oaJBhB7tVEShBevvA851ZN3QkjfqP8bjwCJ1pancMiESYNaQzfiDQ",
  "key11": "4zcbCJWdccSHKZrgrNPAJbkdwjdMErkgyJ2EVVQCEfHGuToxi1ZBHtyXHxFWnHSiete9rM9WSwakSNSjj2XinAsP",
  "key12": "mYgHZ3mroCSDpYHs9XU5EsgyNkbuaYJ7c9kt44Xr1qy77MiNh6JswBWwCc1dJwqDfbTLaRgWX6L5tLtPCd8s9pS",
  "key13": "55oPNFLvkpJ1F2pBWY8t7UrWt52AawbBpe92BL29YDSR7zSSrFqSQN6NFKVRaatgmk1N3PsYFM6hiKuSXD4VCyoJ",
  "key14": "27TWG2XQy2nerYSDyfvjZ3QdYLD8tPWYqrk5yeVscqfLGPxvAbGCCDcqh3rMkGG1fiyzVeCHfMm2yBUmVautBRYs",
  "key15": "39UoHHDAbPhGksUQCmykCbdNyf2CAzFnsNyLomYR4rmQMbm9QXFbT4D8Yw3DqtyKYU5dZmYkx7Q76WuA13RhwWaK",
  "key16": "38Upp5yXqvNY2U5k49GaxfAA1Uv5BTvCtsHEBkBBYWo2Njjbfmfwma3efoeL9aBnjb7FtQj4cpExBX4dSyufs5cy",
  "key17": "6rqetrzVZb1u2Q2U4NJvwEsyFEisXurrV5c8DGa5VCCHHeEiQBjkd12SCWDjn16SawMoj6dv8h7nVPgzmLKNHkC",
  "key18": "uU8PNHUCzasFkUpZ3TB4NtknquaNZkKKGFnDEPGEN7V8h4p6uc66AdfvvMC4Tzxhe4Y8Zeaqsvsd1JghEqZNKES",
  "key19": "5kuBXaVwjpqTZJu7V4N6369cJifKz7c7S7CSJfb4Kd2Dj4HPoTfByq5GJgTreCMZXuBdueChxzV3rSHMqLWfMcBL",
  "key20": "rDFyqLDH8w32WyXNvvDw2kkMYPmWzxEZuMi1Sc995J9qjLFTNd3Uho35vhzjyBpia8C5qz5P6WoXcrusbA5JcQ3",
  "key21": "3myucTTisxvBTd2wnhPGrtJdwoYGVtJtMB9d4EbXiJe44L9qStRJiAwWpasrPtZY4nSkG2ESA5Nm9FECmKJfjv5v",
  "key22": "58C9k7Fw9WJmHutU2QpPJS7mD7Xv65TpGxa9S1XiiLouAhVjEfVNZDEqXE2D8jB623TEbFFsc4sYgVtTzDj5m28v",
  "key23": "4CJAsUQG3pW5PDqVg1pGqXZMoCGgTDqKJpws5PFaJQFK4vdAjk5SxZUkXJqiUbMENYENPo1YQtJFVq6gze2DG79E",
  "key24": "3Hs4dbcyUuPhtSdeGcLCrCVE1rprnCjQcCX33nvKm9RGYpQtjgF7qyiPJVZxDzuhbnNYSL5gXt9gNir6sRYZ1Apt",
  "key25": "5RsREj958uttbHAGa5mhSmE1etDSPY1bJPmgAthBK7LqtxTg8nbD2E15LJH2zrsAckqY8hKPxzi5uJP2Pv25QQ2F",
  "key26": "5xboVcLsUUCH5H6Z5jb1Larbr7ch5zGy1MZraHQMtDJJjTTLVwzeGck6KovAvcA3RzebXMR71mBfNQavRNjhbYXc",
  "key27": "46SkqqgxqnMd1hvVdGB6UggMVC3zzvUJBsnirheDFcxMKawTNS4YC3Mg9N2CR4kvo1UGAfL1CLsaufdgRKNkCMnT",
  "key28": "4yJ1ZeGPxrTBRcNvAEzf2Q739LWBbpHVAPmvEMGDfLLqmgHii7RgPByyodSw6QPazY2bAUJ6Yfrc1yvKuQymZEo9",
  "key29": "5EiX47pfEFxoFHkCPusfZvWxoirZ3H57ncEv3yKZtsjNvMbsB21x14PGp9UFkKnQb9JHAV9y4zgWjZeSQn82FoRw",
  "key30": "5529ETQf9GGCLkaUK5oQn1U96KsFDVhcr8X2yzDrKWYkeB25ZdugpBt2RC6GRtttooa9H4ENVtBoYJzq9k4TxSCF"
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
