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
    "3XwGELhCd66FouggSm5Sm2fCahUv7pfSL9X4fAffmssSJpqqUiTwspAsGdJWN7mqMgqYh5ZkiR73ZdmfkoPdMVsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cky7gJUGMhEJcPSdhpbnrYRKVdZhUirkqJhq7TA9v2gw1c99gQ1VtB2a3gK6X6pGmrW7tEcUrjwmiaidqB8iLkn",
  "key1": "3SSZB9ZEPomSm4Sb3m9cVwyrMcJm4hR2B77xfQ8RfrkuJxBRDKu9FEj2ktq5w8eaCy9Ct2E2tc8mSbXDRyQ4fNyW",
  "key2": "2j23bHA4hErGbThB1MC75W9SeSjpES4AVbHypGsxk6YRR3S83UNBXE35VmpD9RcPFSK2HK5kerMqUCgwwT1YnPea",
  "key3": "mbmgPuJi9hNVTHDoRZVP8qJbLbsRK4edhJYPjwNQMwcCwoWTNfujX2DRS3hcGnyeiPS16xMzfKKJHuoxvw3WCJg",
  "key4": "s4sCRCtqHzoV77YZhrxuzszfGySe6yU6muEeH8pV7yn95SksQ6GXzZUhwWRMZ3f2TCkjre3KhXc6Njd7rc5DRCX",
  "key5": "ppXgC69YRVgZmnncVKGviKeUtcWAB2Vm47AFR37icpkP11ZFCX6nt2MbS8JYxBr4nXXUC4ifCmMwiGxDYQ5Km26",
  "key6": "4n55tqSJrS1peA29EK7MZMvHimx6SQKDfhwTXTqZrep1K56UvzH6cHFRykCU7mGhse5q2FojHKYL8MDHXxFL6udG",
  "key7": "4BjxRUmte9fUMxo7kfKeHjFBwVHpLvLFRQTaKutSqsUBQBiGvfLQnhXb3WzhKhKduxzDH3AyiUKZT847otAQvw1F",
  "key8": "494hSeDpRMxtHBvUJWU4sC53T3pGJAV5Db9ajp8LMm4Lek2RjPgZEhaemzjZTCHmjcnLHFvmJ3K7CE9nodXwb4YJ",
  "key9": "2UEUFd6rLFJ4U433SKqasN8Wo7i6o4to26dv6JPWnjAjBKvU46oZu2a5YfkEuksQrcsgRNURckpFynZqjRd1tVvh",
  "key10": "3H5n13Ckrb7ayH1HdtezzG12zD46jku7AvuzCxAS6KGVGXELfLtb7UBTmACLRS1CEogtRanyiVgZwmJx1CHg3su7",
  "key11": "2rK29Lo31LRjeaHcA3zD2UUMugBoaBSYTdhXACiED8UQCQQGt7g3myZmWQWxPRukSip8yKjjgDetxa3wXfW4nvsk",
  "key12": "4kG63cjTekFtYMyMpgUFBA7h6JxUAFmX6sF31vy1hmgEeyKs3Qy49XPiEMC38qC5YvMTQKsjBaWYyk9yRpr4Tz8C",
  "key13": "5gPnZYBcLqeAoXXBk9dUeLqErmgVTVX9xQTDxan6VkdhM1ACH7p1JAF5D8XxjUzfFNWZXAw1RbAE3hGnCWzVXi3z",
  "key14": "Bkpm38vFgAxLTg2T8hMR19cDeJYdMPn4CZvJ93E2kKrU2s7SsW3twvVmJ6GnZkHPVc1EC2sfNCdAaNShEMyRoQ7",
  "key15": "2f5shnBVy5HzaT8KyHcsAFYbdwXAcu9DCwjQdMnX5X9srnpSpEhDjRZz7bpXbFk5vwkgoPwPTPpGewrx5kq8td9e",
  "key16": "3nM1Z9iFYoFMpYY4JJ6yMs4kV3KvtVsQJQYgj9SjR5NJADsaXEmWa4itG3AQ5W7asa1C6FpuPJDMjUAGdtyVy3gX",
  "key17": "mcCvKSuqFsGjkJF9vmLEGRZAoKvwFrNJjEapdZA8k5QVBoP1BoNFNAizAEWVgkUBfasRUQRe48XXkWVbEYgbA2t",
  "key18": "58vZJBCTFm63QG63ijPMnMP6R1nndow7TjBYxHuqigNV92dwQjT2NNLMCrULveSPKDHdvQTaDjEXRZiZEhQ7MseB",
  "key19": "4YQNe5sZtchHuFwh5wH9q9R77qn5nydCDB9kBmBMUgqhF6m9dHGSouMxKAnN7fXhwsEUug6hE8ye3Fin65zdkocN",
  "key20": "5ZADoTUUJkgLETxL1oKVeXgyy7AWumTdFTv382ogfkD7RRYN1Fo6Lu9GFWmEmfMswgbu3MCX5k4EEnepU731hQjb",
  "key21": "2iHR9rizUzfHUBpvoMTWLVnzQfmZsQg2bAkzYmk5m7uZZ2zinpsTpcqRJUra1PcNux63qLkjifymhUm8ArpdnjSQ",
  "key22": "3EB1Qw36Sjp1MeqEAKNHJBhL64HmfEGy2C8T4EUEoHLknEmPwDB8rrjVsRgbR2XhMe7PNF7kxFsCPtmHJUhN9n4p",
  "key23": "2gkaFyAhBLphKJ2mPaUNKCPH33Ty8guQRfdYXzcGZSRHwgYPuGLyPTMdUze45NZn9Vw9cYg3uLjXxeKJA2rpP9cV",
  "key24": "4qTcBJzkeUXS8xKYDtgZhWbLqnmgtbWhDp4TuGyg7T1uBw8xbDRimaFDoBVeFqW9FsUL2S9TBFh6obHwAhdpi9Aw",
  "key25": "XEiyqXF581BdVEEmnLEVUq3WdyQkgc5djcM9fNCEjZ6zyU4mZheEoEfVQamfQo3YnDpNW22GbqoRST1yNw6kfj3"
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
