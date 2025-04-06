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
    "3fUtAeAd47Rdq85vn6sS6i9GA16hJXrLFmZdBCSBrxQFNdMAEdZ9AzQs36FjsW4Cm78odwyCQG1ZH4NJegtSMzfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58iFJGufcdFRTrveqy4Wsp18Au2oHbt2bEFjtMJPnF6WfodHMuwE4ty1eneCzw67dYx2hTTtrv4fPFUxJMa9pi5u",
  "key1": "5BLuoZJ5h81XqBtQ1y41PjDdNJ5KXVcmcd85c4q4uWb3TZSSfRSEcHt4JLCxUT81aKg4JXvHV394MTyVGq7c8wqb",
  "key2": "4XVNr8c1GLfYrcaLVzqdz2MJAMVLvueWh5DHncXtF8bkPPmSeU69NUfRi9YBLf94TRjXmfQaQnWFTBKq3DTuS4fc",
  "key3": "HCStpe3LSqrA3TzQpmmGVAY1H7CxvVJvZFNPUVSZHFcfLqhMgqBUNS73Nf3oC9NzBd4rc2Bwqgo9U1PHqhLPUXg",
  "key4": "sR1tchrwbAsE1cgpMbJMp39CgUcF7x27QEgGPuZUSd9MCJvwH7gPTtQH7bTfodPoF8xVEUpv4i3yHB5wtrk3pqA",
  "key5": "3B9NNAoHvtMVhGoGbPfHtErWJdec7g3aVh8VTyHXroevyaY3C1PyoDwtjooxhRfYXbsq4sj2mKXjcxNGieMZDL7m",
  "key6": "3igwUuXWFTJQsM2wxp57TAy7C7ySX9A26LsRg4AhU6km2unmFymM3UDN7mXdbkLaSqhvbuzuGqUfsnYBs2HD4CZu",
  "key7": "JiWgCPfjoYjwaurisyPNKEQXM8DCJTbHBTCVHK74n5YjZvjGBKhnyWH43TUQD7UupUtFn1Kx6KVLdLQJy8axe42",
  "key8": "SkZ25NDmjx2STEbL41doJASdCNECKMHES2KusVVkLiG24MH2Fc6e3A16TnM6wwyB4YHiByrD8UfnU3oqqC55XpT",
  "key9": "58m5y5xbKZMywCTR7oeq1wKZJskbopxmojuA2tCzBxaLMAspKjzmaQWZD1ATNkVsKA4M7uSFVibuESgtUqHJQNr4",
  "key10": "5cCQvTtRbvtcCd5JPet7NicgbftzxAWQFS39eA8zzibnpRnaLLMN1pBcUx6MFH79UYYMMjHzY6fEYM3KfHQYPYD2",
  "key11": "4fUNnEuRMopntRA8HojXxJKSTYshfYLLuiUzBQ6AWeg5SvWSR9AbFrMPrPbXZEVpSkM19hDJamPxRLkyxJ21oYuf",
  "key12": "qkdgrt625Rpvn5dCNXrRubugMtWXVh1jrYmCn55rDzAVUBKnJGPLTh7F7BfiLyL5UpdrgKvijY1YrtY6fTexGQo",
  "key13": "3u9nNNsqrFCR26Jtx2Ww97rpZdrGoWeLddbg2UEa7iG2gQPVcUwvyfeZKYm4vd1VoXTgZRvfdmHP497GnmVsBViW",
  "key14": "2AHcrZX8ckiATkjdCr9UW4xhWs1XRGYbQQmqsmjxdPETsBdka82UuzjzXRPKYVW4fAcZ67RoYzvcFhaVwpeaFcT8",
  "key15": "3GGsNfT453HMsf9JdDgcPnxmDg5euR1EFFcXKnAEZb8zAkydaPBgF75gim1gW9d1Gtn8pWvU2xoSgwjj7vfi88z5",
  "key16": "3Sr3jxLEPVuPYMDZ5wyCjfbWBLTzEisvyZrFNWDX2DKs53P8BvUsJAoey2Ezfc95jTXNFM59bko5mPqogbPL1bUm",
  "key17": "9n4FTSEm128ULMqWA6obXeswmTrWLGp3WLT65AUhzamLsGfSCMzuBeU9EPZQHoHyoGBvVSbd9W9WafrW7DrEnBF",
  "key18": "35ct87Kz8FY71EbHhqZhFUVhbxj9XRnnC5nM8t7faUif6NeymKQid8WQ35jKbAG7fzGtAKxApBfUEG7F3hfiy13E",
  "key19": "4RHeMLHQbvERCTZSd48LigmKaJeGGw2miDFsKWBX1c9GoKACm9xXZKLGvjwD2XyGPCwMcLSkpwFf3D14ywW2Pmcj",
  "key20": "2cSyLFBhvG7rJZdr9fiEtRz8kXN6NjQedpis6Z1C2Rqok5kGYWrGznDsMNLvQjft42mW9S7saoXGysUFJvUg7XiW",
  "key21": "82rxTEgYVvs7fz9bio7BcnK21ev7MBHhpWhVXd4MAai4JfdQFthFteGci4GafizcrT7Yu2BtkWfzK4ovk1g7xg3",
  "key22": "27noMTre1zRTXt3XfGJMJBo4i6uxo5wCPJCfGHtSwaKboGbpQgaFPwCDinD3R8ksW6oxmRaPDzjeY8nxN2NutnoR",
  "key23": "7x8p1FR4CcewMGffTc8XVSTc8LVbWhBhpnsjQWcKkyvq3gLDABhoaJjXiJo9qjxGDvN1FUEt48UMSia5tzFtbdp",
  "key24": "AZPMfPviJLuYXFd9RmBc9x7tsmUGMfA1deHgp3eRuMkAHND5dAtGB9hAN5iQT9F8hGg8KVsk2cdeTKqocs3mF5n",
  "key25": "5PCa8GcrahTJq3THkCoEmQBcgi56DLM5QecbJQDoRqWvYPzzZN3EGG1SYXuTwq3TLGoukV2nMsVENWmQBDVhLofc"
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
