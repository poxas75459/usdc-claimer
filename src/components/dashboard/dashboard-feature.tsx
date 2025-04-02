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
    "2P59y4WpoivxbhMqH79AqnGYqbUcMeimXvTFvY26Qfj84S6QLT38vZRcMqBJnYets6TztRsywuyiRDQ9E9bn6RHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLVippNBr6PUdraFvLbH9dV42fbJe3Qvzhq5wTrNvQAtwyKxMfgYZGV5H8o4YUVcq4rBcJhwYzJ6Rdt8MquwGrB",
  "key1": "1LAjDnha97akNhAQXMLssxuSMs9i9CHRd3xMpCMKyWLupLwugPyRzjqW8RcjZjUmnwU6vG1vc6fVRuZh8kyQkJe",
  "key2": "55qua1x4YonFcF4xRDLirt6ho3SxW97c3CGru8jVj6STQZKdGnZs2UpskJxVkGFoWVGPRsTCAMrQPe3Jywe2Ywj7",
  "key3": "pGBMsK5215JJ4xoxyQW9mu8geFrXGN2grjPyU3SXyQPX8a8ynFV4U2NBk44n1KrbVmW73MmJeLiBo8spwhtUPHZ",
  "key4": "Ca26e5Bt34vwtLtpFLasXKc1jbqm5k7DZYbFeBzjCkFC5ezFHDUK5yP2S5gAqyTcm6nqaX1BPXhBUowQiWy9uM3",
  "key5": "CnWnCVVuW1HKSpDmbZHjMvXZsULXSWBtBBWS4xLjEBiCJESYxk2suYpARtpUEM7ahmJRiqGRcTnDvkCdM1BDosP",
  "key6": "3RbB83jtDxsViw3TehV4bk8WWJD8VbfDSmiuRKEgeJr9pW1cmFrexi6V1Sn9RLj2LnW53f6zGsecUqxC9RcGYoso",
  "key7": "3FWk5Y9GyrEpVZUJeRZfzFRdjvzjBjn5tTZqZzNf7nDLYUuS4PZPH994e32mHQdHz5rqeg3EXejrxRSPtBgdRezp",
  "key8": "mXHPEbtdo7pojzqd577zyDG18XXFU3Tr1TNXd6bsjkUTZDLQawciKDvzt31TXnuLbxS84EjwModn44p2AJVGfkq",
  "key9": "57odSZdETTzLvaoCXT6BeX55YmbmCAiBKDwv5UuQHfMaaBNpHRp5JHVfDNu1nhjSZFay7WkDv6uK8CwjUW2eV4mG",
  "key10": "2vjZJ9UKDxjxSWWczEmj71LPagWYPoZAE5TNy3JsxRfwCfQbxbiUWFi42sVzszh18NZP31pZ2GmQVLHpuyxWU8r1",
  "key11": "2dsFYj1kBHT5xrzqnTDBSpntKVCCffZ4UPgjNnPRdZCMJavw9ygb8jDZCEgVJ6rG3dkxB5WZVxzyvwagpqoykPnB",
  "key12": "63Wimttns2jsP8w2urAZ5VZZZFQtUUPnnwQCk5sT8mxsN5grm8PUL5SxTQ1vAYLGBPnvv5A4s3ztcXUzs9EQ3jma",
  "key13": "2JAc8bfJKZ1HYBNGvGbxHGEuYg5mBre1RuM9EY2cVkAPejHW5RqjBSnFAVEpuoMCcfgkaZ4gFsQyQvMTi6ATBGVx",
  "key14": "3FXXG4J8yibCGXxTFiXeJy8YENt6qkdKoQZNSmjdTUxa5wnhWDqA4FtVkHeDvCBQJtXZ5MnYFutXzsDkJMSP1dQg",
  "key15": "3fwnk5nen6vs9eMT7UZEjDSrcvx9rnfntqnA1jmAPWKLe4zshQmQeDpvfCGAfDpbX25PGsMmSGJLVxTUVi6gcgbn",
  "key16": "4N2d7SRoFWDrkb5jAkis5CCEDPDiiWHhadv5T2cU1U1Hfcu9KJ8eWrwSJQngrKfjvaKboE8N45XkVeQWzhrRyjQn",
  "key17": "2MawZEdRBHUAMxoTraxBi7sps1bPQ6juaw3sCbLKk7L3WrQ7fzHF9gFrcuqp9Wrzfh4MotzXtXk15MuS8tTTpcKg",
  "key18": "4uxucrY21LMPNG9NRGPYZ8Vm35oBosUMhzyELgbwG5bk4G2dNztjoqfFhXKn7kzkFf2HSpzp2WfyPfN5bvt2CdjA",
  "key19": "uK8kzdN9gvyC7xVaiMvYEudir6W7LazJtJERHbQP94CtzrTgPzdjT68CnqozW34vZnQTb3nxMtxaTmQTaHoLK8W",
  "key20": "2eue9w6mQpBKWmN45HYpEZapzqcGkhgs3BpDNpoBrfxnUodwdUhkGmzCA3d2Ue1dERzdBNh4gY72mLKPtNK2WS6r",
  "key21": "311P6mzyrembKf5siYjkVDYtsYs4TmNzT2SsMfuw8gmiA4dZgn7xw1aRYdpbEq39qy7pierLqBHEtYVZy6C8BqaR",
  "key22": "2Y1FcHvGfQdsuy1x1bitqVNew7DMyfETPQ1cPCER93HiX2jzqNXAdLBrZdUbrs5BF7ZxMdAhRpEjnxVNG1hJZ2H1",
  "key23": "4bETLbes2Kx68YZbx5Xh9pbRnHwzUKsAxr4okWLT1F48orGXkbXXm5xgrPBXuFMkACs1cXWwuMyBpqHwKZdFoWnJ",
  "key24": "2hgcNAaoRwihHG9RcLJZfkc7JvNv3PQpXwEziEbGWeYUiVzAyzAdHFLteKWGEymCePUyTsC9M5EF6ZqefWmk8uaB",
  "key25": "28Y4S2f5Pq2Z6VUD4YBgbBKSEj82aVS1a5BVpvvTpmiLc5ozcXVwCEbT3RnCA63RnJezH4d2cvSCCCPeXFEEmm3K",
  "key26": "2da5RzsdxX1E6HBX8QBdkgYoP5WZuJg35LgxtQq5jAWdFgGnYNANZHHLQfUq4P4DdKxcSvqSSXE2ZtEXZGQE2kY4",
  "key27": "5pk5iaM4fKKs6EmrRo9PXCcAtKPeHAEoaPiMapTskQWQwC3XKjLqR5ZVFghHzxPSfEcWLrfnCpdCwv3Qp2U67QiR",
  "key28": "3oUaiNNaufwRPvSJmYTA5y5cmbajaFmrDjK4hf7CZBpAuavkcs1YHEWrhEcD7q9EiNvWMmBVaRFrtCgWPPdztnS6",
  "key29": "4TDGyR5K8SmY4Vo9UbAJXLFyCES7HQfaVRkpRznNw7wpgAZ2RKyJPjuoSbySBTgK9jPrz6Xr65PFLh4LJ1KsPXRK",
  "key30": "5UscRLuY8PzrVtdqUsFPrBxRKCYNq3zrnXUKAcfitFUopH9aoeCd7ck1mf8zcTRzVLywG5v3goeevufEHG4UZCdT",
  "key31": "55RscnNKMP7exVzFZ8ELv3psWuaJYVPvBi2pnuMt3WhEhTZ2doW1X7XUdtzSqatWjH6PMYF57zAxXXNaqxfCSbJ",
  "key32": "3TspRKsBRcKfN9BXxHPqTpUeCRRkgD6Wufz2TXXRsX1nbx8c4Z6n7uUJtrHy14wP3kgBr79DMWiaUzQLYvMKzDuJ",
  "key33": "5GbDzyXZVSZoDWJ17aq9LE8F4AdKqVubUKunE6Shxqt8zGHWxmmz5g7PcDgaZbN8AijZDT8kA1H4jEy5jymRtqRh"
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
