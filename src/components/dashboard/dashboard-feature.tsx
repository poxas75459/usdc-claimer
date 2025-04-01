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
    "4UCYZh9H4RpuCmJxGtW8CLUYm6qixEkBPST33Zd5Cdum7DVd7BXbXoomUMGbhwBwqRtv7M8h6yxws2X3Tqv7nRTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3vQBTYdgcvjUnyHMAXjuo8kXZJkdEHiorFoxTfsdrZovCLn4yi3Xs1qYjhkhVje4qFPgj4JdaXtnxVLB92NXLy",
  "key1": "2Dc2EcoqsPws9AodTCzfDrLsDMcC9pftt4VHXGh3FNmP6anNavuDYyqh5q4JJczou9gsXme9VdnghCKtmqgDrXz",
  "key2": "4fWNJak37yAN8RTnJ3kxM1tMDKfCiM49sFMUcHz2LLfgd1Dw3g4GsNJAHQLhxUPQtaPhPxeif7pDmTxUcBLZHvS3",
  "key3": "64oofRuSwAZ27QXYzeFEvfEPwi4ZkhCe916WARCTBpkBqRoTL73WR3oCbgnEU4goyV5qEHA3pFL251goXgTSZn6t",
  "key4": "2L4TnYKemTChNL26FfEYXdy4RymaBZoEjRercpZgSAEAhBEJZcnK6maa6H8XQGcU1nXA5URPCuxF3VDE8uE1KuzG",
  "key5": "4f92ADwxdxuZyYbnE8M9er9vLjhGimJdederNxa3zpFJMzzz5Rq9Evu2iZZ8jMTLQWUZGgCXaN45v8PHofqWSCki",
  "key6": "5GgnvuUEVQ1BLv1eNzfrfZekJ4o64iqFb9hd9LKYMqy2ibwbXDm8AWi6o4Ym8tmJQAkZY7fGzB4cVwPtYVwULpWf",
  "key7": "4J2hbGFrThbwzk6t4VfZhGpsBmDJsF5sbdUBYtwx6Z4H2a96AEUVAGAQftZSUttz4EE5Tz4KsnGX3A2ubcEAeXxu",
  "key8": "3Xgt8RVf8sKWHucEkZq9FiZVn7WWBYbwSC9UNGCb2SU21PEEQsKkatAbuMSxC5hnhUX5gt22pRXnGupzRePCtYGf",
  "key9": "2ikLtRcr7iq9Epjm4iRebfohua9psN7wJStByMcQDZU2dD6zi2f5yE67xAEmZsDRvM3BKXbrNBtnhyxBCScixwQL",
  "key10": "4VhTMjbmyBr5K4nQTtFNPGZ3EB4Q3b5S59dVwzRi4smsDtvu2MHikTkdrb2Wq6pnJN57SoG6TAsbZMUw1obTvmtW",
  "key11": "XXkJEHb6CRM43TLsM7hQe7ZRNKSYvYZBBMfXnfXBtMVgACrJVTQRDqWwDU7m4UJiksDHmT7jdVuteQEnybpbjzp",
  "key12": "4V8ws2Fq1jufh5tHoS7WXyUeJinHdgSMwW87cBykHTThmfND9ALYpFnaUeixMoNP4HMBPFsiUgHJsRnnQ4AiDidd",
  "key13": "2S6tS6BYdu9Ya6Ff2YqvW6C93KzZm2fhB4DtwTyiEKRU9z7Tb2XS9M5ssqt2FLY15WwvB1aftdHCB5GEFqHrqSVg",
  "key14": "4awWAnAf5jTHTfj9fSSQm2ULGsidWXiUZ9sWkVpcnT6yabJ9AZkXqNWjwNqUUUweTieKguEV9As8YEocwjZNx4jD",
  "key15": "4QEqaa4WA3okviYDaAdx7C51JUSZ4HQtXiyiQQXnxcNRqUvfc7hcHRQS5UDf1MyMTyDTq2kq69scXyox5mb6JLTr",
  "key16": "2cgDi8oY1JdcMNae8LvUxxdTSSG4UA1tMn6bkMSjDAGoXfpPtR5GRgwYa9QScYktnaLhRQehQZrDCzuFujevK9PR",
  "key17": "5TuuS6GzVwRhcr4ihimx1cGbcZmBtbtHQtwN7dyDo61Xk96LBposxquLgRhf6omvhNjygMEHa9izeweXxWtFVEDM",
  "key18": "3vCSN5LUF9Mn3HmEVbKWbNzrwAoeF92aULvtPRxLJsZK6yCALdLuKDMZMzuERVAEHjjs8iTMsoYf7qVdZRtdkyBn",
  "key19": "32Sjcf4XeczB7VNxRhaFgVCCp66h4V9VQMmuZ5hfJdDks58j7ULkhiWUk8LbmdxFpn46B6JdXKfRshbHM18GX6y7",
  "key20": "3zjjewS9afdktyFgUjpM72u8gBy4Kj3AqMbxg6VggfZ786u6bAJEvhrUUpiDLKYEm8Vzx3SUVBa5NqtKx48KGiPu",
  "key21": "4SvELY2DdEQRbya8DdoiyMHCsskweryQiRsjKE5k7byEJee1YjUN4HP2SLgQ3humFbNCFc1GMKB6FbPQNErNct9F",
  "key22": "38gKtyotiAhs7rAYpEr3t6NqpMe8LuR2GZpg1YPXKzqGs54rcGY2RY5NxwKqUMhWxArCbY6dZpNkQXoU56qLwUEF",
  "key23": "3pcGmZVwyMY9iFD4GczEj7wB33aTfsdPkpydhM6yrhmpugYmM48iMih6Z3vqHRgxv3AagJs617YPUtA8QhgPfNEF",
  "key24": "ELVuT2mSjAba1MRv8Sa8QxATjW23DXYpUczjjpTcnpF31d2YqDz5phYEykWd7Mnx2H1DFMmgXBzKc5hhnryDT5f"
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
