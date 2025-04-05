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
    "2y5h9pABv3aEw9jJpPrVPW6TrxSdL2otzfGjmVyXEYwnCg2AFRAqEJ13juGbUzgqkA4dEA6rRvcoCTbdVZN89LSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppR4GtxNjcpSZeXouayzMvvHjJkwbTwSj9vRn6ftCxU3wJdCbMo3r4pPLfMetmrCKu9yEFxjtAPTThnd7w375e1",
  "key1": "52RSmB3b5xoikrzUu334UDrPJqHTuvVw6fNnffFrTczBUQCuASiLPMfWUQjwfLNuBTZ6si1X6uePXEVSxgqmfbsA",
  "key2": "2huZGfFLu4FcZk8NdCbMdCEFxV5jQzHE2xF5NW5Njynj5i7jevtpd8rVfFu392gCzMpFc5KynNjVkV1XK49T9RzD",
  "key3": "4PkoRLADWP8yBfybnX1ScgJHbjY94CKATJw1GhTxYwAMiQabqyLSXW6tZcB4LQsCXqdjbm1oQbDtjeQmgf28KsSE",
  "key4": "5MXtGqjQM12UziHSYcctV5UqBXV5gtnBDAqzRm1VxbLNUHtzSVCo2D8vAU5HjDdSU6ovqev1vTEMz3MxLGgjPKNX",
  "key5": "4XFJkWr7Ff5RX1EgzZFQQAAmsRLa6vipziTRTha61Pkm1Gqx6ezpFhuHWjnRYhHXtHuzZMPCMHfEA3EyFE5iGnCQ",
  "key6": "2K7ZbZq9WrtddUMqw8Dn3yucGSoRV4JGvMt1HMbnh5mNEsDfi74wB1HZPU37hJXdKPzDWBcDX3kwGZaqEjGTcwRQ",
  "key7": "ShXWYp56Z3Da668uzt7FYxRowxeNzCLQw9N8W9iWmPGvYDZyGg7ufPHLN1GpyfPPJUqFG2FUrBZQDmV7Mg22DDT",
  "key8": "537Dv52acB9sAcmBsM46CmD5sy2StLAmmbxbpBqFvizth9RZ18sZMrkMhVM7mvGXiUM5jPKMS2fipJFcVwjZz3AH",
  "key9": "kQK2pBVzTuEZeo7jT1u9SPS71fTRX8nUPx4CwtjZgtSpaZkLR6cf1kYTkAdkRyab8xegHtPKixu8ci16cbuJF6a",
  "key10": "fM9Dg9gmWU7yroj8qveN3WNyr6DtiU1tW8r6Pd1vNnxX9nY3Kaam4ZkcJDTXxL5get2Ebcgc8Arod4LyUQ7rd58",
  "key11": "P9Rw9fgQUxKU9oZr7KKd3SnviMBJ1AmrNyhibGFm2sNHuJnwZHW8tEa14gdfQzGynr8bF1KL3crU3WTb7xYqt3B",
  "key12": "7FRF8Hx3f2XhMEuC8xqoomL6nx3EHc1WW6K4tbwuPN1EKPsfTa4HjKGQAucKswaaxDivGHTmfCMPBB2WZoSuYpp",
  "key13": "2EzENGeVNit8KD9Jy28Cy7sHs4yz5fKtYY5Df4RPMGaWSkkfTZAU7EuGgmKQ3kFsSyFrhZUQgUCSRjN7bWtYDcwG",
  "key14": "5k61AYN4CPqsuPUF4nRtbGKLqoAzeS23g7BfXd6LgkUMYJfEsdPvDmATz5WHGGMnFrDH2mEsrCEN5P9uDDD8MEWS",
  "key15": "42sTouYocYmfbFgWnj3ohtFVd8edJ8YmHmSRYWsd5Yj2HdU48UPm74Fm17cDSAGQb3s9A94QAs7y26qDL1zs6CeZ",
  "key16": "sQkR1M6kgAg9HpPjf91hwy6zCoqNTGub6FbkA5nVgn8TQTDcBcCcbkJ13E2UDL8RnCN5cceuRFTYQ2KPPRx5xGJ",
  "key17": "23dRxx9RdsLqmD2BaQwj1cZ9zVoNL7WMaTGPjUwhM2uS7KjZCMw1hTFzwD3T1tUCrYC3o3oDVfFkZs3akEMRqPd5",
  "key18": "z2KpGm985H7jEfC9PaUPTXuPxdxJaY5taBfUbwsyJXVHccaf5JpWYcA8zog9a7U6sbMjtBsrHjRJB1cUtbZU7Gr",
  "key19": "3PEGNJtjMSVPg1LNcoEeZL1SXiugazGnEwrSqpagUdgYQRCyoqjYrdxYK5QkmJeXoKipRno93rCANKV8tqCRXegX",
  "key20": "2vvveVVZbiTxqJWbDhYc6Dv32ELzTVqgptGzFtLwXVLm5DSrf3qG7Kc1BUJF2MoTcHoFRkMiGpocVvzCvk6QEXiU",
  "key21": "5ScZh4iZ9XW1oduBQZj1M84kvGBjJciboUrahLDmt1R4asP8zpEaqHJ8ihPLbZnahh3oaovdRo4ngdoMdsjpLWfg",
  "key22": "6AVDpo2nSQeX5kThSatLCCs3YhonRnX4qmyptEJBw1gtXMzikFZ9Y46ttF7jjo7nPcNFYNRGGGPRigqdUpm539G",
  "key23": "4RUuoVwTWmdwVnfZU3mZe17uxLRPJYrXizjQFM5Ru7Br2WByvdDzvrgmq3kBEsStwVES5XpmZeWoEGjiyJ9WkeJ8",
  "key24": "C6rVNAzZp7T9rkTS9gSRYbJX6Zm3QgnHDYsuAgQYcqt4AASyqYg61LUfy8M1MMaJtie1FRe8sUZPCu4KdmzhMDd"
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
