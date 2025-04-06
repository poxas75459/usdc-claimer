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
    "3hnaH1c1sqR2Hq6ih7MgPKmzaZsbDtAvXoayKRh5zU28BEzdeyjwEYdWhZYDeYtQrMsvFgofkDFkXUdEoRxaMG5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fuLoTGp4DpS5QYnfc482q5wEVfTfmti7YRBrysBjit4yPePGnnCzS8tRNC6eSzuWCVKRvgeTzopvy3tgoqpU6ep",
  "key1": "4tW7w5pDLU72G8FBTQmcGvKWvjVbr2GoJredKW2hwsHu3w14RFwxmTTx7uR6LMgPWTsT7rqdY5NjTxyEUj36bvEk",
  "key2": "7XcALdsf5d7FYRaXPgZNL9d4tDZARE8vrrGcJYR71CAevNsJGz7n6kN9DVtA19Gv3MTPjuGBWhYDgYc5FDGRAWv",
  "key3": "5iEgmfCCpxc3j2g1nTEqnDQnuNXQtR39kHafA68mxFUkHn8xEaLztQY4Y8BnDSe8mrjtZTwG4EuMmCktnytMve9m",
  "key4": "NXcRyrFM1hDgY5UtEMMcLVzxZdWagTk59ntuXHPnGAjZM3NZzjtCQmjJJQoEEn7RSYU5JUfhrW33w4S7yS127Ft",
  "key5": "485E9XTyMxbkSh8B9Fd1kuBYAE6rzxGQja531zY25zY6nbwBvWXUauzQ5XopGcmPVBnSXHmfiPJWoFCVY87bhPQb",
  "key6": "3i5i9ysNyELPbPo9aNrPizcs9cU5RCNFgDwjZep2wnp1T8duF2E2Dqgp4wYCgZmHVRqDF2BL5hhC5NdbqragMFKh",
  "key7": "2gM8igTuEnH8Jd5KEdYyzf63WqNzgEJnjjMcoVHUusHZEtSsctBZM9GbRRM4HhX4kKawJYzj7FG7xk2jW2KWDWia",
  "key8": "v6d1U2VAJ8hEZZtQDTpz1oBPHBdGBVDqnbmZ562MRa3iBMM9wx19MxrRkdUH4WN4PgHeGp5XVZeHBu71fRLbW5a",
  "key9": "5K7QNehsJgPsf9azkS4BjonmtMc7oPPFyoq4mg7Br4TSn3REL3WhkaU4K9xSJJP8b1rTz1PkJ7xfK9oVYLzYoZqu",
  "key10": "4xffvrjVaN2Hi3BFqtpaSrVv9cJSh2KK1Rj5z6g1s5MTkXX5kADF86ijPdMZZPXVv7PQS1DwbNZ7eUHNk9P5ddyv",
  "key11": "4i2Rp23HzzgNF51tp6xLfrKwyBVvM6g7wnRKPibw31itvjhnEfr5nk4PRx1Q4X7mnzPrnGgqbe2Lwah3u2P4CwyH",
  "key12": "3bQ65zjjfPMccMsYT6yJqNHAvndZQtXtstcvXZdV1kRmtBv1WR1WSUN11DsskY2eCQk6mRsUDcGQQGrhUkKFY17E",
  "key13": "2bj4VZcQonzJj29NnNv5caJVessmhmq3rJEMmoMerSRHwk1sFFvhwZcZWhpKk9ZcV4u7qQumusEUav9JBYE3puyf",
  "key14": "zDphP4CKEq6CCvZ878WeepjQ2BTBgy1XnPfb2QAUy9gstYn94a7pV9JuNpoVZFGngFPEGtPvsJyn24r5tEThxx1",
  "key15": "28irx7RZ6dJqZ3sLMFuCPqWXMdjVQkE5ypFMxVRm87iPYi9f74JDpcAveoaZ3dpRd7sKBShHUMURpbdDFJX4ef6k",
  "key16": "4PmsigDeXNXGR8DLqxFQ5xw2W6GpqfMBYJgaTBYxrr3xBaKWXY7mb9hhnKa6mMJ4ERxwEKaLH46gEJkv64twwrBq",
  "key17": "5uMhKXTE8tXq4jefdKy9ikQdvftKpbU4QbkstUDdutzj1Wp2Csy911EEe9Mmap4tsXdZzB8grc8HFmJzBgBfVQNX",
  "key18": "5HHHQLfY4gEkTBAmKAHuBQMRVeChK73qkAfNWZWvUKCPZbJZUz5qPwzYc2kUn46wmj9YJhk31vHqFpC63GPjrtva",
  "key19": "cNdhfDXyPY7PZwjqwojfwfyYyGP1JdmH85zcuXe9QbjczxkTiNF54EPBs5715YunKGWJ5hhW4v9vHLh4BhLMyKZ",
  "key20": "2DQmQxRQ2ZnNBCExp851iUnjDBvcvteTDHkCNzmAmRUsRCBoLhimndBkTZtxh9rgwBWLm53UfxfcyvqHGTC7UNbo",
  "key21": "3PGYYbJUFFJCjEsCEEo8kE57DRcbFzboEC1XKRhq4wAR7H7md19evNPjdEF9bzC1Jq16v9jAS7ZHEYaxjnV8K3yx",
  "key22": "2fYBzovr6pdTrwTXGYGTVojomtSX7EQqriRzpzZ9bNyswJfgaRB3MnsPVY3zpXhHYVHas6TzRn81yebHjaecwrUm",
  "key23": "3qqExB8yB82CQCv6agJjPwZp5bW3LxiN8XEFagfNaQKZ76ncLD6BbUZcSVepezr7S76xLLoEhaXwvD2dYZ7NeqT9",
  "key24": "5276WmttLqjA4BEprzmwJTjuqeeU2aepeJJu7Nh3FwN3h5JqPpYBaqH5zjRFGvvqXJCdWtyUNNeSt7CwQPoesJEq",
  "key25": "5jxVUDWfrhtTxq5KY5e7LrKnRAghxLKQVjj3yzZ8xSNFySHwMvQvDMbME7ccQdZmfncoFbMjBkyB5jkmHNJJkfEt",
  "key26": "5beJBZUvPUtMyy6Qdv6AL86NNeBEjzXYSAUzApvmzs3TPQbxtXqKSLQiywE7VqmzrFRv7vnPDwJj4A5nibeB9LbR",
  "key27": "3FYiXibuEigcC7oBRb6TBADY4T1wbykcMvCBLE45ydUtN3JEadacKs2N9KvsJFYNqdv2dgGFrX2wiMqvwKRcZLbG",
  "key28": "3bxfdRJaUrWiERv7U4iZEyxq6REoMysDdZ186WwTXayWUdAbFs7UzrtYDDxBdEGZNsxZFBbUF4ktNcyGvu2sevkE",
  "key29": "43aS3Zm21f7za5W8hPfKxLJpgYZoCdWh5RKkzS8EW2dgLYWjAXZmVSjehujcBUVdjN5UnXFqeho1Mm1EAHLpsYR4"
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
