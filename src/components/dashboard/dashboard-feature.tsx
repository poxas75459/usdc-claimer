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
    "46No9dLu6XVrS8ro8kHMvhByomJn4Tf1hm8M2sbzKMkazyvER9QDkp4CWnhrNEmc2VNFCrADPxaKV2QWVaJGWZZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPubD59tBjsuga6K9hMBfhZ2p8QJZJmmqqpfbfJehVE4tjTKqgJZhCQKDmAvHoimpvHQ2T1oghZEetWtqr44yig",
  "key1": "5oPW15y4EuS3HJ3yZitLc2BHJNj7kq2bjGiMCZmhmhF5gv65PYMqRbuSTLhWLRvuNcbt6kSbL2j1CP4QcAM8KCQ5",
  "key2": "pvDaHutr17r7kbNcf8nsB5wxPDp3A71daV4LuYBtdGboHGzZpvgEBkTjjGL8EeYhVE1A2J3F76aFWfdsMPxRiL1",
  "key3": "5UYKHdoVnQEQLmGxioWuwWEoBjoURunH8aoUGcDhHqAe8mAMr2NSPfMAgN2cNhqKTeVqBUYaJG5KUyZY3TM9wVk8",
  "key4": "4cu3EqsAQwvxebTZuDpzAYNehZmLwcTHeZeJ3oLDk9kS8TAx3foLMgdWBSivargDJw7N9aXZecHVGEamiqpYCgeD",
  "key5": "Xr9t8SgY4MHk5KaMWCRnb6AtMBkUXEAiti6oGfRMVa1se2jKxvx1xYSKSXnoKcV7kkGyoRQ4zGJ5XZMBWW7PyMJ",
  "key6": "4tHyZQv8vyY2X8ZS1kxoLFcMYRoeLkq2PZKBHhZcof5cab7SxHsuFN7yUx6mwHeLK4pMHYDaqpmadgka19PVvFAq",
  "key7": "2ALU468Qn3ZVxMNhY44JBEbUwh2eifjNrtv2ZtFtYvKrgDFgYxU88rN35GzMivtxp7mZsn92Cfq1xShR7w4UB4e1",
  "key8": "4y1B5caLSP9WKRK3m1yfRhH25TyaqGjEDWp3QYEZ1EC56KyFhrUYK91QmEZq1pZC9gi1fwKdb9vG3DjnxCriYSLS",
  "key9": "4Cyz3oNirutT7ZCisU8zNek2T1FK2EbsWd7Lb5CDDKjq2AJtr1XoraKsdHmLvxWntjEEK9RjHyK5Co7apWhhU4PQ",
  "key10": "4xW7wW6gpZxz8GZLp2KVp6TLgiJrH6x1AS6CNs8384xKi7FePMzbADdM7B6oDpXsGkXVWHT3eerdSaEdHkhwSDu3",
  "key11": "Bw5aQuXAVdjUrfdrqe46eHN8x2hSyMKncgbBoc1xLkHUrfT2Zu8EM1zTos1K6TzvVX3eNQciGLgCp5jgUF5V58N",
  "key12": "N576ozunXLXo6Ab8chne14TrfzptdNfT2aVJCe1iGQ4oQTunLMNAaKiL1fuCviNQgHWFR2EBfJfQyjEwuQt48Y9",
  "key13": "3ZV2NzMHxR3ToYLYph9dzb7rQZyxkxHLDqxpJx7GQEqZW7vGo9HsjL3bGbLiYwQ7m1f9sMdUJAgVMC7dEEeB76pe",
  "key14": "2mojs9u5gPZfQmcJ7znpUjXQK4y2FjQWqRg4xrWZi9pxe7Dtkvvdj5qB6VaHPt6qgpFeJzR7HTw5V2CiCMR5Au93",
  "key15": "2BsqRxRRmN6zfMRB12MSgBYC7m3kkCqyncaUFasKTMVpWnVBYQt9iWhTEFaa6kb4A74eAE2PupTVKBfiBb6mnmQa",
  "key16": "4ktzAhBqvHvycA8MMtZFhw7rdep8ZKvNjBgfphPiMChzmyuwSZBbkAU2xcpDo3QQCxj38gdnjBrokYtLFgnowCoA",
  "key17": "377BXh72dEaaKW4tXkkT2QqPLCJHsM13gydqAvXy6c1zfKStNEYAJAh4uahdgCAWntGMX7zFw2Y1WZnhKsQUsfru",
  "key18": "4UnJY6nCQ6QkuoLxn7wPKMPDMsHRab6wk5wn6DGq6FKNoL9kRv4fGNnGFvhVqxRPpNtG7iPLiW5Qkqj8yiTdcz1N",
  "key19": "31c6Bvvwqu1rET1VU7TrUJNf1gxqbrfeiUWhdfm8edm9ikb8wAomC3BJfWW7vLFAbGrpJx4w2aUtCQTiBy3VRvdy",
  "key20": "G1eBbnAvQJQeXoaDBEjHAHR4fdeskDmKHCoJJag7S5Fa4988yxgETufYdq5KKY3fTLeVGGRu9odGy83NLVa6p4u",
  "key21": "2AWPfo7CVpefvZqwa4ZHmdZoTAj7QCc2wUwDRHcWVCf3qLj5sKZ1ZqJdwAawwK5n46tnVADHEAMtdDh89Np5sKES",
  "key22": "38ATVeM1yJ1NNM3mEezBGeeryExZFB6UxjTphzUMNLksiJvgTF2nekUY928NPCwmaqvZneCwZcVdJMU9FL9cwHi8",
  "key23": "54bLo94taHJAmpSSfyRGKMUVbnBr14mALzEppvMRLUGooBhPHq774LtRg62k3KQQpTELNGZPXsnz2NKWVDiGeJEV",
  "key24": "2yMENbnDU4b8qDgjUjmFzXcXfpTJgvpgYNfWnLzgGyxsdkGXTKKDfU97EK6JFgrvGwASPrNJN2nb87ct67dTuvd",
  "key25": "dYWSrp9zACzNxbyqfeornMgnoHL8YHBtNpieY7LEbRkpP63GrHBrNgx3jUJVjJ5sc9HTXzFgNSqcuimVtpwCVvr",
  "key26": "JZWw7Umg1HWjabCDCa99YxjdktjbUcxiiRZLKwPYFf5WfdMGu6hUDTPCiLpJDZUJ5es6xR3YdiNNGZqKEk71Nvr",
  "key27": "AQT54nWbRFmqV9XqDkrTYHDoK3W1T7Ax5Gw3QhuhHp3BGcatWe55y6Loc7P88sXP8R1YBgmWmRjBSsfguDEskdQ",
  "key28": "49HPMuqSuHzomcof3dHym48d6WB6L4AmGoi4heeQcxFp82vEDgL4zqa4DWEwhmQGeXoZfZobkYXBrxecvG6V12Up",
  "key29": "5UNBbHbeiLkJXPN6nWDmYRh57jEk7i4gYqRLtGd3QTqAD6K9Ja6yEMRkkNbDkY8C4HZSGUyfht9HcYN2JqjXMgHJ",
  "key30": "4ktRpTAaLin4d9RsvVDsnwB2SnMVTFSrjDkXM95o7qGhnkoAMJPVQbntfQdChtqbwGf8c3N35pE3vdgPze3y7j11",
  "key31": "4gabdy6BWehZTUXogRmq6GEFH4f2TLuWm6ov2aZ2SYBAghz5Yr3T9fi2NZYXeXyrRmsJATZZse3X4oJy1ULTdgcV",
  "key32": "3w8pFN1GrM9VfUgwqYLCB1FTnMBMoUSCHFZhQmVJzfSNKkf8jjjpUvt6aD843DAALGRa6ctz64HA6kJLJf9CUboX",
  "key33": "3Cbktwv7yQK17AcfgKYbJKyQwRMUUY6TKW2FySBuBvUikuEbeTA6G6AoqPUiVvjEUDFyLsXbB9oSPY3FF88jrUbu",
  "key34": "x8nPmzXXheEmK65Ve81qTF5zoauybiQq9y8ZX6u164bhW8y1Xg1Ak49EYPyoofyXo2ahyyLug1fXojEFNYcaBpu",
  "key35": "57mNkRDPEpS5dq1T164eJa3cTsxAC7GWusTa91mugA348Q1eYHAAqe7ZHGmrQV5xTvqbxQkWHq2vV6RdjbRoPLTi",
  "key36": "b28MqdJ3s4DQPzMHBeS4DBr8URokyTPPhBnvRkSuLWdMBRC8KpsRnYr7CrmKs31gZpr5m7Xuy92M7EprevQYfsv",
  "key37": "3fthrvEkjsmAu2bwLJhqdpkcFnmvUWq1rUBcnaDuE7R7VxL9jHX4jyoWMrHZjNUrpafecrjuPQRG898KrAx5aaSp",
  "key38": "2ZZJ2h8kqgPBjmPdL4WWgBAVtvVr8qZD92J2PbA8Q1QBrtDaKWD4u2KvFoTqRU7ros7Kpio1CKC2ZAszVNTjsLjz",
  "key39": "4DetNBDdvFZ74y7xKxp4m5yCrjdTb7n76WAgnAWpwndve38w6H8Vzi7HCF48XdWNo9gY9d2WNTwUwKqVaHTBvTBL",
  "key40": "2S5RrqA2i3Be98D3mXQk44U4NhZTugDN615wHPatn8Fdf99uyEFQvFdjZ17TccoDojjk1G7nRYXkVUSspqsh8XCB",
  "key41": "48p7CXDYN87EJijwLsgFmWxvhyc6UigWV4GDRcqJc8hbj1yGKuA7Fkjisjkvk6Que6dEZTqr8svpaX24jVG2Giii",
  "key42": "24fZ3pYYhbxVTPYFiadbmrduwLtnzLLfBnjJPThZfurapBRvBgEeuMEfyXNgaY9vPy6d52NTzeGVuGkTSkrGRUuo",
  "key43": "5JyXNDgfdFPZDvmeqrVK6MJZMfBLy7DJpDYhvfAEtNvYALRKmAwSoj967csRtEi8shwg8Pe2AXKELBreXgtDctYY"
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
