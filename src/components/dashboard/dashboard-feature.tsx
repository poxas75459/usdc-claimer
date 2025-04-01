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
    "5vSCDAth2xWvN9G3EJo5kfqak7rSPhEXCtXhepS3rrUTzrVjjJgg8HrS9TQhEmC1HqKFHpQHyvEBCdRrzg64ncVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Gkmjx3SezM79rL8tQSy2ABojE2AVt8ZFLS7nMyM3hDrLnGHRM5omvTu5F6g6ki4xFD4Hqmu6iiKHrGjuATJzip",
  "key1": "GNnZZSGqQb6M626sHUg3Dj7JBAP1U5kUjEqijhTfVNvZGiWbsKroriMCL4gTFFkwEk7fNAY3gH4P7APMH27ejV7",
  "key2": "4vJBicYUTXcr5kCsnbFR8WDupmfQfw7nfem8CLcsMYmduGYv9HMk6UC4B3yRvtmDUJVpFDHjrbHUhCbYQD4DGxhs",
  "key3": "QMNjDULyLpGp86FY7YvN2ECkr5XJFpZ9Ze53gZ4SRYRo35giPJqM1kbUoB1RKAqDbpHVED8t6EupSEDtmANvSLG",
  "key4": "3erQdbYzVVhT1fPeizoLQgzoqPfuNGUV2wJHDtaQViQng16bb9aRh3AavqJ3CantsQZaUvFFE1TgrX1iTmQN2Mtm",
  "key5": "2GwKQm8gAEN54163R27TXAPFea38kS2ZggqsVL71AqutErB6Tqin662fge7qknN1WLckVFtSwERLHqer3sPFcon4",
  "key6": "W2QoSkWLXeW1n3hG47ATduHfqhbCiyhtEFKQogWPUuNTpJFMj2V1ELgD867pM4imiXb84VM5DyRtv8pP15KNEnB",
  "key7": "2ehFdoYux7AYFigwLS38rfGrLZPdNrY4cxDPY8H7UnGivJtux5LG9RkgomDSxe5k9Y4fr9MWHrAR1RgP4aimuoeg",
  "key8": "2SHh4k2PpM6KaqEndvRq2DP1nr4AMc7oHvF9AWPbroDLp1feYPVt6XTbgEvNjYGScM6PxSCFYECnLcCPMKgann3T",
  "key9": "3LnEZCbfkfp7UXwKrRKPhGpARRmtrzuVsrbqkkwohcggjoDXNBZyhcd53sZYL9XAQL2RQHAjdCT1GRytmGVXzUWg",
  "key10": "238E8buST4DkzWX68Li1TUdwSpuFGgRDU3rwTituh1GPyrSRgkQzHbV83JVuKTEhwpB8Nqwdgpnm9EB4gvmMhJrA",
  "key11": "3F6FhfYL3Q8uZpWhHPLJ47Neg9in9Wsy8bpZ1UK3itxHzK39rtJFYcZdA5FR2XHKDgqa8XqSxvZLRtfrCvy9tPcm",
  "key12": "3W1R9dNj8VQ6SUJW5vqeiJrJUGkz6thtTwqL8vQcYpWAvV6MDARd6UtPfXexPgDZ5VJ4avRsi7SDWkQS4yxNYz1e",
  "key13": "4tBwxCcGabLFmgUHx5MmAWGNSAhmP4iUfNBqD6YCcAFBh3SyzBq61HSEthVdd2pNxY5upautvjwK5iNvAaKSowWB",
  "key14": "2d25BRUQ6tK6Dcwx9bBTNZZ31QWiaCJV3NcjLYCWD961uwwhCdd4Tg71g93Pa3vaK4g6bSTHeEa9o4QJZ71JkPnH",
  "key15": "xbSooXqFtVpuAcfjkC9natFKoZNMi8PhT3DwpVAJVMGEyAQhY9jWQnqb7hZfVGpZvi89p8wrA4PutvVC9ei76X8",
  "key16": "4RZPtFBQwwWuCTC5Jmkj8bnWXH1PE93s57Z1eNh2iKz3Ef9bCHZDFfoK3fK1PhU4vJ3XY3MWvJs6PwDDD3w7gxZY",
  "key17": "45osdgZx6K4i4rFfCVWZrUWsdAwgLngKxjfWBQLbRWZmAEpCZ9JrTcqRb2Nu3XeGabjBRvHitAAhtVoff1TVXwbG",
  "key18": "2YNUzHxvJykTT5R57SwRHwKMx1BwFVATf8kWc7siS9H7esYN6MNZWqjML4RiJ32RC2A7qDMFXryxkce8BYsBHSpw",
  "key19": "4YWp9dcSPEPZJWNFtKa3bsHFEjP7jMyzGqfEj9YexoTqoHTuKoyb8ag1BfRXtwDixTvhwYWBVB17H9ur1PjWyCip",
  "key20": "28nFETsr9QUCuejq93Wu4PgK9DodLBAuVcz9QkxnmyPbPhqWXDW2uEdzMrJUzGgN4vnNujwNsRYreZwLArMpvc2a",
  "key21": "57CL42B6yLqJ5YbsPmqVz5Ct6QSWNSZ8f3EsNGh4dRgBYXjXvL4aJ4L4qysuH2NZjom5QKj8Lg9GmHEjHQby3ATu",
  "key22": "cEPzVJDcKq3DGAiVQT6z7muwFViaSRaX4Y9JZmzEw2fSM9caHPp9mo21no3Ur6ZQtezoBW2TKgN9Hhn5g3AxrQK",
  "key23": "SaeTw2imBLcWvfytnJra1VgiP1NWHz6e7g9mYK4BSp4h6GDDJCGGVYmHb2EfeJQ3nddZbjSyifbAWA22yW6XEey",
  "key24": "3Lxskk3jw3GYEb5JfGnVnMzA9FVK3vVF9h6MpjcN1UHpZnGqLbje3YUEEQmxJVRBzop76TP1vtm8opXKXTtzK4Fx",
  "key25": "5K9nKYJPtUjvnXCnoKHCiqt9yug2Y7jQ92fqWjn28mc5G7sbmT2WtziiKbeGGuni5UT8Q4KwHpvfxskrGdLjG7Zv",
  "key26": "5Y258whT2EyL5LhpmyyzCCCFCZX7Wb9AnRzd7yM7CVYSDENhgQ85NMMn2DGigY8D5RptZFHk6U6ewqYxUfVSnF9C",
  "key27": "5fdPUt5v5YwnwSvWuUC9yEyfJzDz9oDkfo72cFyrZ5fZuFg3fXKKVq9xdQQDYPDjkodBAvYnzsFK7knzjr4Jp9o1"
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
