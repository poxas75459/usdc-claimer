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
    "5H95ixebMRwekoqHnFUa1fxxJcuQ2aTt88A6hqr6cbTmWz87SVoxAuuViXpLAeM831Udd8wjDaTJR5qPVVBafMwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWM7kV2p5MYyBg3ZaSYT9BPE1AusUMqY32L29V6JvujPLXTugLZWv2rocmVt8QaVFUr1HXtuVvvk3263pYfDzoP",
  "key1": "22jSBwgGTZQcpBu3s36GUKSWdsWb7PUp8EVr6eXv3ctyu8FPc8Lk4rMQGzYmwL5NtTNCL7NFBMzKztKFdpw1bMt4",
  "key2": "21dYssDh6C9ET4wJmJxuacYnNvBTmQ2gGexDUo2ypZhy4AnMSE7qn58Y5Abz2XcjY1LHi2Cz9sBrxfKnHrewctbN",
  "key3": "3GYzaXJz57n3k7Px6Sh7jbyqmAGD7WAZx8c6NFSCHyE7oyyJKpFZJyZ2eX54gUdCDSaQbXcU7gpFsGnksJJcnNTk",
  "key4": "5SmYsAjzc2DAnhKaVoBZ33S3T1txxNFRvBWEDQSC46zpx82kPHWpEcu47vByKHD6rUfSFkb6xCNtUpCGGY9ZERWP",
  "key5": "4B9nJZ8cdcDHAGDkGYVKUDoYuquEL9mKTkNG5GYN3Vj51NzGBMdiLp5ARkdAenJy1LzMzewosrHotySYWLLtYkUK",
  "key6": "5qW2U7kmHJjZ83dZoYuX1URS2aF5y2oszCqTY84CW9b8A3H5foQC85HfkYo5BuoFzM2X8CcusC6fzeiCpjXBBoHE",
  "key7": "3zSFQ691WiVfKSvCRaYvHH3XKPzDGrBorQjdr2E5yrDJCZYH1Cp4HDRPRsv2a3g3rPLH9bTWEAmG9Bq7FoVk7HNu",
  "key8": "5AaYn3gkDPnf5JwPXWXUhZVFADKMEpRpntSU62DQ5G8GsE2SrdYAJnLs8eU7xMLy5E49R7ygoh6E4orRwJwm1wsQ",
  "key9": "5JQur3viDPFQWUQdfnxdNDB3rAJhXRUiQFmvHrxCnzd51HAzEsGazH81mzrV8LCHYRw84LwTCnqv8QYErbWyGr9v",
  "key10": "35cQLLvrL1PSpQ8TiJV4t2qpsTd7upaVJt4btPz5DQWcoP1qgQ5MsoFgW7nUqzUW2duoPp2UhM5qU1oDVN2u87t8",
  "key11": "28wbqUhVCy3XZPDqEuZPQz6YgWMRZQAKghzEnNRNFXr2YcAjxw8j4W8EESJa9EzWATVqF6PuGxJpaiVASoMRoWx2",
  "key12": "4hwCfDtdupSc8CSyZDnozfCbVedVGhHNrVdeiM3LVBhv8m8yxkVbZ2yBf8Fu7RPYN327qdHiWm9S6zTfTVNES515",
  "key13": "kudiDiSxacNKZrC4y32hutRhs2mk7dnEWXCaJ9Do1Z65rVmD8TBMVm65UhhSsD2fSkXVNiU41gp8KpNberLiZMn",
  "key14": "21M48Rj4MSEfjhAyiENCHG6g7d49PrCQyoVVUxcAEhZsQ5Bxo2a3a5j8tBQsbGq2fk49F4PqnVdrrxz5K2W7hGV6",
  "key15": "339JToDNAW8GHr5QvC3ts5Kr4UCoBoRAi5cab3gHUQk8ZqLeBANh2e22kAEgwNhhZCadV1ZxWjmQEVFSHaHeRvMZ",
  "key16": "66mLs4dz3NpumT5A9Dg9M7j6kQwUVpQ1qbHBi23C8NNXHzJBmaCKSj7srpPg3AJYqEQ9cQHdPuA4kMsYfJBjr5im",
  "key17": "3nzqYamHT5DecSzKmWHAqfVauEb3zQaRoHFDjbj2GzSB9Y3JhdR7RrV42voYJqXAjpzmHaw968mCJAa4ncB5PzRL",
  "key18": "eogpz2kNKGwE4ENWsfqX6KSZv2Y6ZMS36TByC94SCW7zFUhTuQsPbgqDDLS1pdXRmpCn7aQ7d3bkVi3MXVBJWKW",
  "key19": "KEpgP97iBqNiXYoEXke5MsahDzQT93homRSuGP8kxPg7cGR2ZQ4aLdgciN6matke7Re1EbfvyprZNjSmsw5B22A",
  "key20": "2TrwDUgfAJLXa5XSTTsrkZiGRjnUSdRbPSgQUJQUsdok9ZzjiPwFoMB9NXU7UCFyWktnej8vfPC663iTNwvxkg1h",
  "key21": "3x1gFZ7TXV7bqiQEykh2nX9aqBX8fAD9BpDpMMCknD7NX4CMhUpc9c7g8dmzZ5NHhqKhRkrBT4CC1UxKe5Kdp8uq",
  "key22": "5wyfSxKA7pHz3hH2oTg2ZkPw76bF7aNTWtrWEos1bsDgH1suNQRJwAPa2NVLvKt24cSee8No5RM2vRpK5gNFTBuW",
  "key23": "57ue3Vf8V88ErU3TefWK2S4viiefS5eSyWfgV6t2D1qe4gcUgWaJYEJkAjgkJGfcDPkXeBs4f86r4hqXprfVsRKN",
  "key24": "4VoED7LWhPK1dfdyTxGaDVqoEBqGKXGF2VHpDdUPpZLAGb11RFNpezAbrEByT2XdoCUDRyjq5CfnvcnFJD1dNrjZ"
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
