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
    "3i64n2RhsN734VFmge2xaSjSS9Cr16uzzjueq8U5n76EJZHPX5PQ7dx7k13tZvE1XW2QJF3YzaYvPmKvj4vh5Xbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDydygAnR8vaZvm7EPxMpq67b9CbLqxvR9PkxHyt7CQDCD5EigWfQ4ishRVCsuq3Agg6HXwJy1qRNyG3S6QMYCC",
  "key1": "3JoV8w3cQZBoSjBRD3pM1zPJZBVqTs9QEGWvaQrN2r9ABuYawhivfEZRpTEPE5Xi4TxLCVbC7mb52w7E24tmd557",
  "key2": "3AdzebRYAxeHcX8cf65ngZSQzUiLz1SVjuq8Vbqk1mhUgMzdPBAjQiugioYGJWVBiCrFC8z4PXHEVdc95fEST1uJ",
  "key3": "2HsmSNsyPPmjJJX7RX69gEEjE3nwfHSP9rF6ftFKXcUUadn7Mv9W2NstQ42PR4J1TXjjq3emPixSe3TjrUBsL3ks",
  "key4": "5r7HTvx6ZcApMBmHaJ8mL2SPzZm3SdozrZ1HVBWnjsaDVWvsTVE4U6M97j5DFy74vd5tKNMYYkuoaq5RozhjGEED",
  "key5": "C7m4DKVWFEScsVRiZxtNzgdQPdWBt7ErzmxzHLyJbn6w9HdaqhzjNqpbX9vhhZXYy9BuY2ppW5M5XN8b7TWP1Le",
  "key6": "qKTkryEBmmnLSbhGd6qY9DNyLv6D3W8cVHVZwFUoVxQgmjks3jcpkZuQK4nXmP9k6r4zZo95t32AiNqTDwnyCEb",
  "key7": "K4YbGjTFRqoVcZxxfwt5huudw31Hbx31RSvWdo55NPhdKuXQxMbqULwcYKC9vheQ5TF551aXDApmp5nPYZCRaRn",
  "key8": "43uqWS9y4uhf11tpEivreBkBmjWvZa1JU5gX8gQLazbHNXnjpqirA7r4qt5QjMtxdvy3p2cTz7qA9cTwhc6Edyyj",
  "key9": "wVU4PSTWf24owowUotFL3eVmF8itw4Q3oyaiGrWr55192gsV16ZnLtPguqcop2m8F1jDgzPPFXfsLANy3mKZyTb",
  "key10": "5u9aCSBFPvHAzdBMRihEmcnfVJJFT1mhbpn2W8rj9qovhF5n2tLCSLjjd6QrpbMAFni2TkGtSfKiJdcR6YaDY416",
  "key11": "3NiKejjWyneTLL6FUtXbkJiHGdwcQDYyJgzQvJzzb4nUMJC5HEro5dSnB54xGT1m1fLkLttqRwgWBMt99PZaewSC",
  "key12": "4o2zDSSrpBQJutT2bKWw5zGNsZZXfcixca2BpgAiF9YyweUrF8CFagauxyU92gxTXfYKWYtW9zvXPTioKeEA89WD",
  "key13": "4eaBkWTfH4FpDv1euSQfC41XbyZrTdCps7KRsymtCaAB8bCZwuazY4ozmVMJu2Tgc4wKbLTLQWytFsdeJzgdTF9P",
  "key14": "S3Ck4J4yHZs3iunxmT3hNHspYuEEU4EQPMBY64zYKir29aHMKwBeSnr9ggck6gobCqrckG2EB4VjXnthToA4mnm",
  "key15": "4QFyFCkcxnJv4DZ8FdLALSLW6iz3bBdoVhDuoEQqypmApYYXknLuYrbva7dxhuTGXCTCTC1eGiVbBxVKuoaQ4LD1",
  "key16": "578vfbgLutwFCUZw46ZnFwQfeyxMdfYen19y25QNnv56GEAMA5A2aWd64FdLYC5EJwtuCQE7KMSEHgL4fC42Exsm",
  "key17": "232KMZMUYxReWbcGEXWV6Dfv6MU28xFAfGjEUre8JoPT7gcBRDPvxBLq1brTeJk4L89wneWUsEC5S8CNeHrYGioW",
  "key18": "3mX7CQ4QzCbp6DLBajLszHAwXtbeqKRoPkKkZZjhGfL4rm8sj5aP1PYQmMynsXf19hWpBHzR4si5VeyMtnMx91n3",
  "key19": "4hWyTbNJNxTL4R1foJh7Kh3HZjdgRzTWFHD8arTVeZKZ4WqzXNMQEHAggLXNkynhrXN6HRYEKceg8FA1Uo2TGW81",
  "key20": "3Agc8TBUVuVMDnNu21iUwfM4djmGyjdKFZVT3KcBhsbh6piYVorpSji44oGM44VVPTHQi96MLiEk2izAco3FMsep",
  "key21": "64hJEvd8gw3zAvgj6iA1GHWppmRH7nPw6uFU7inmxBLPaHDzyswsyS62v4DshMh4VSu9cp21RgkwAgiDZCyzbVQJ",
  "key22": "5BsJMTWKCrz5YD5yu4HCnEpJuZgbneTpG7Wp8eSrAV8nUGtSXeLSER4PdE9KRSrfsGF6nx1LYTjpmM5VptBaVP79",
  "key23": "5LRrD66AbC2jMiw9LeEkWYhEpWi5JaUdYB7kZGZfLUpNMKEpFJchv4r3iGApHQSC1S6nKv3vcBqior1Yrvjgp3Wb",
  "key24": "2VG3ih7Kfniz65psM6bVRgRaaZc1NhiFNFYcxhS5Esr2YmyUzuNn6yMDg1NzASHKXEi2tAQMNN1H6FjafqNFPf2g",
  "key25": "5uXaWGHUd2KLYbX7iWB8yERAwG3b43rStVvnXaeFAPEGGX2KSh1sxEBmhVYja9Uxi63Pu95UTFVVVtJrnurPfCND",
  "key26": "3HZjguWMGR6JM4xC9Z7zxNLvJE1CE1M9c9UgFfENKVHkq93v3UDk7cZC2Yxi96ZFSEa76G414KrLaaKsBMUzecE6",
  "key27": "5T83usZ4YspxC6KMuEfmfWTbgEw6PPe8jgkRmriDhfKyXMWyVx3tVXE1aFwdshp8rEyAmvZsJgW5qGtBUkmcXXho",
  "key28": "2sd3Zhobt9vrdgvBZKKLB6XSWPde1WRwRDb39LTaqrLrZtthAHSr7LtMoqNec8EzTax2kenz31DCH8J35AMk96e1",
  "key29": "5xSGZRaLj4BnEzbWtQ9qgUjaDbdnwsGDVt5nPoBqkUbznPNquxD25UKwozAuqF7BNFsxw3d5CHFeHZA7febFLA75",
  "key30": "3DE4LV8PcUqpvoVnCMpiQKBFzG2FBrffWDkQcavfPR4sP9r5tMFVEKXL97MXCHd7zeS5FEGzsWF2krpfMvmdLFE",
  "key31": "2puywrLLtKBeww974pn9kc87sbpuKTXMomBafmcpdJ1QkXkjm1zkwL18ZK4nfpx9LYZCNwuYvL85Lw55ynE7gQnV",
  "key32": "5qibsPVupy99oo3MKgJRqcJHKk31stxQNz1YmQWL5asgJGXicHcn22P9pYN8iubc258RY51QPYhmdm2mhysjVSyx"
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
