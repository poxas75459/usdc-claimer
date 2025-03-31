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
    "5Ur3qiNU3uzMS2mNpcvm8SEAE7Ay9ctpBpcfWzgtyvEaDWtgcSFm2w6LQrvqjKbmSmzg6ZpkcidUENhyLnduASDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gn2LvAuBh9CyBtXDK2zwiS8GGshm1wci72enuvUbiaskuKGJKvyEDV6a4Lfgw6H9xHpp5DDjZfjeJSNXEj9Noue",
  "key1": "4uQpRwdbwqV6mBdpG7xuir9ydYjM5bUVictsT8TvPtEZwzh7qEUv37Muott3uZYTi3iry8NFvWunFHT9Ft3tVo4j",
  "key2": "5Qew4vYDEvzLxpZJe5G9o4dLy2smMX9B3W46GaQBs6Euh4zyqxoW24c8q5CFhRsBXCGhepmo7jmJFpWVx7vCfebh",
  "key3": "5oeN9ykTctUQnn875ZbNiKkVNpwG7E9fhksMyRgfHKXFJyVoedk5GD1t9PAFaqizvTMenTWSGfKXHcUxird5HvVz",
  "key4": "62yBRLuu11m67KFbUAPBqeaFEFvSMHD5vkA5j6ZN6thhmJTDcxiXGYR75Bnw2c3wr9x5dqr65LSZ7GjVw1XZwGBu",
  "key5": "58UCZG3iiKSecuZUuFe7GM57JLsh3s9ngPCqbbxR84L1kowMCvKbgUC9AX738iBgYM82WRTUR1EAojRKspagbAPK",
  "key6": "2p5XsA37Di7NJjQu4zpbN8UWHXehL4w4vbUPjp7vcDJHrR82zvJKYPn3KXUtuQRqNRfVSSPCiEc45KrYL3fiQfyw",
  "key7": "3uXuagJ18joZr5K3ck7zdbdsdnPdXHfCbXAqWQncTn2won8rBak4aJvNUjBy3hU2a9NmNPzwj5k6ejdtxE5BKPDm",
  "key8": "2qBiLcZJxZ6KrXEbHfQGxjtRwh6hdnU4nHjyL5gnpCYvV6YzUiQdDGZ1uiwxbw4vHgUa8YEuisUptE9EPKDLo3P",
  "key9": "5VatK93DutE6xxuAX8QRqqZepXoQfNSEYjTcdGHdtnSTDbMwyUgLWqQn3XQhJTRFZ5gVdjNwuBYZdx5pv13AfMYf",
  "key10": "5jPS5HKf64sJ2L1LH8yThGf59yxtuvkLARWPqzbPUP6CseTvkrqikF1eJXRdJ97BvGN15dWCdkqjJM8uL4aLsVmz",
  "key11": "5ciqBH2YbiK8h6sf9UCAZorSw5PwBjc3mo2TP4MxsNLox4ZKkneRz47H3jgm8jdkSnoaGauvQT7SX5j4UMpRcBcc",
  "key12": "sKhyj8GtwwyKeJ6dzb6CoirFJtuPkdHA9yWvhGxFMPoac3NhE8wcrmxapLEmFL5Eg2bVtnghPXG7xPhiE58o3L7",
  "key13": "5rdLVk1X4jDtJnt1T1BfpRa7jL1wzN9FbJEbm12H1godMPFPh6s8ZyD8Cc3U5y3PvC3qcuoLMJwypwesYjVfsuc3",
  "key14": "4con83yPpSLa2t5VE9aHcBDZUcRhBfPkP2wa4Qyymi6R2xGT1upaVDLG8Aw8LGpPCJmen3PRi3P8StBUrrhP2Ptw",
  "key15": "koDyHn4gAKpQzxayCkv8LLWMyeBvv8iEFdRMBinXQYuFDBani9eLbsKG4Tpj5MRHR7NiUvStnbs9HEw4mdyc5Dg",
  "key16": "AvcVphptWZFPMnocpD629GucGjKSSJg643qx1xTDzk2UADUcnQYnkRkMCJASVRgV96gKF18Msi2khdzBGJygG8T",
  "key17": "5VjFLxtegZtR51kBXgF9F26iJrsgBdriMDmbTHJaP5FVa1Si5Cdf7X6cDcsryCfBaY8nCPAwPn6Ym9ziUr676QMT",
  "key18": "2WhrGPSfidZF4MaRLd9cjvkEtn5KQYoi2Mo8k7aFZwq89YMb6C16CjuHapgaZ7UaPufRHCeB9SeWaqf2Vp5XbB3C",
  "key19": "3uHebzTW5TcCRQ4iW9gP4Z385Ab17wXcQqquiSVwcj9HgS5D2Atg93CyMURjQSD1intqaCwTchdzqF5R6fVjxkoJ",
  "key20": "2KG4gQjykdLrEXYsLbndTfEbFAshtvq9AxRLF3m1t3yN9Afq6EJsz6k35GYNfFr2geZRFxdckxobHHWzMWm8iLtk",
  "key21": "4wqALgzmNFc8oe2Yib9H1QBXxC68pe91Xnak6cpPWFFWbzozHRrZymRpQoEUaypg2juNJw9xAsBeeWXfPxr4orQ7",
  "key22": "5fYGKD73rUecR3aqqP2UMF69qC5zDPXXyLj6cidGFCs86nmtSAErue4Avyq8LmetyJdrojLLubmBvCeYCQZLKomu",
  "key23": "5PXknuu3JcGCVaieVnZzweWFssSkyeAMWoAfZ7XBurXozGJZx2FdCkYmnUGLRUqJTzvyuJPFCPMWfHt3zWKppnfU",
  "key24": "64SCWrS99R9fXxgjQZchopd2vAWTdBduM2PfcfhHoqg2WfuLJtjP3DnQsR4suSQFoqRnY717oUXcmByaSpV2paKB",
  "key25": "2PkCYPkTrKQxcQxgZ87y7oCRSAB14KsPSw32Crn5yhnodu89DGYrBmX89X31ueCmrrVvtD3uAhd1d1P4f1hm4VHC",
  "key26": "BiLn5PWz8KWbW9KhoFFX3dwhgmDpDeKP8kaVWCUMNLKwi92sX822e2NWX1YjpUrrYRLMY8rQ5o488GNnY7F7VhF",
  "key27": "RBBP84ADo58h2D3XipCDmKkdnuy8tAfsDZ8bKda2v8KfgRcCyxeQicUM9gJBSojMiBiHxkKEmnL8KunFm2w7qwG",
  "key28": "KPJnPaBLdhWPDD8TpKTQSs1PterzPnpzmhWXrvZttjEouksfb4dAtgBdsHv7fUJy35U1ALA1gbtGwqjobiAvn3n",
  "key29": "2gP4qtKiTGHJyNk9gDcYLKtU2aw485eKePSC9R3Dg6smyDM2bkrHvLGZ8goAwABuGmUTGmfCebJJCgrqVmKMYfpN",
  "key30": "2oi1jKpw7PXtTmj68be6mwCSxPnQbatYr2SfNFbhBXSnFG1p6tTnKTKLycfzQ4fRyTDnxiWJDGqfGUTn4w39wNJN",
  "key31": "3Z6BMc8jjRkygy4tiZbDaNyhnQ8GkkzTHqbYHogb6VanFhQbuUC3ZUsKBJniFS8CDoTfJbkRr7v4scXps3pXMCFJ"
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
