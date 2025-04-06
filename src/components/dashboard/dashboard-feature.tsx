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
    "2keK5hbZ1jz7DdfAZT1irgsJ65hHeNALuMwKJMbJrKwL64J1J5zmnKkLUoZtq77MGAA5zUNB9uBibvX7a8sCiimP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBdrkCh6fJdeWk8pgMruXP6XfDXd8wEdTBFsKSGUvrWW7yzhFy7xghuvNjV65Acqq1iQkB192dgm6jajATdBnvc",
  "key1": "33kVrJ2zbeCLtSrvq3QTjxcJSUXmJHo94iz2EGRujESsRcBkNBZ2LYMzHwfMQqzoKoELwrkzK7q4Y2JsF19TPmDD",
  "key2": "2WMyP1i1L5hgQN2KHB5PNYLrWo2K1CPWXM5MBnhpniQuREBQw655opDEHefJvLyNw95dqbkts6UtGusYrdHnmzhk",
  "key3": "5Gf2brWXHziHhEfLmo5a7KLijeJzyYasYiXsenwfF5GpB9dxABKYq5usA8rkfZPqDshUxszRBiakQo61Djcx8Zh3",
  "key4": "CRD3TqpA6pAvLdnXDVP6FRW1SUouhAX3wUnPVsaAydtQRVotXuYfWA1eeVY5daX1BjZSkPC6JhWxyXMmxdNvNLG",
  "key5": "EkZW4d4VHfykD5stkLARg9o6aJzD6nrkmsUzMUfaqdnmiWZ3rN7PPxyYkSokufj59XnZQs9w4bjC78Fjcwucesm",
  "key6": "4vUF9Qd1ipTQZT1ibmWVxt4rYTfvZvpsa9A41ABdGtfqVNmA7qP38wZ9s8FadmqNqaDzFg3hJAwRvTWZS5kaB2gu",
  "key7": "53VvFx2AZSsojeAu3bpabVK1FvWp3gqDFn5XiPa87mWYDREfkHD69vWejGFKwy7s7Le41EyTNpPqU9hp5QpUikSr",
  "key8": "5kxMbdm7v6gVwoCQVqfdyWvUrzmJGSu54GkBDFpNefaXvJEH43N6etqYGrD2UiCbhUSSCWX6yPTNvYEBm11VDB7M",
  "key9": "3Q421akqG6Qj4kof7BEHo2xQsKfxXnioTn71akeVekVvPyRMxTBQzoaWtLMadyBMyr17EXpYEVtJtBvkrjXNGULs",
  "key10": "5iDHpGPU7JfERo7EED5K3qYCaCLsNMvgWHoAkrwF7TPfxtHfCVhUKxTtzvFiwc4QvibZsaeLHZBMJb5pq45R2DD7",
  "key11": "2WcER6Bo5GMfcNVaqWekTPhzGSYc3kgC3WcW6gD1PstnK9FQJhRUtwp9M22NcvNPNm6gkQj93B419vKuZrQ2FAXv",
  "key12": "2XBRvzvyuY4A8ghP3ibi2R7mcpMwJhNhYZJi7bnkR5FUBqzKDDvE6CMrai6U3kux3vuR4obsv5imtLm9Xtf48nEV",
  "key13": "4TAGy2ptKtzJ2P73BfrGyAbfC4q2AXfKhbU5KK42qDMhWW8Kx6B7EE4C5P9K855VaLwqB5dzvJPG5tcWGX7sCLUg",
  "key14": "567vCmGsGVmJfBcsNyB1JfDQbPDAwk3LUDzf3tdJxKwHS6hqKzVvrGi2JXAFWdaEvvNmUDhTchi5FewVa3RRgfgB",
  "key15": "4KygTSEEEHFzzk8w2MeSu4qKJWfWzjoAxvAqsMYS45q1DJbbAexWwLXTgCvJU2SwMrGEfHQBZARA5MEUjVRgimTn",
  "key16": "hG5Pgvju1h4DijLYziyBgQN4F7pC1rN4NxdwEJvMLkhti1wiJgE2ADm2o1L5oqHSZJVHYAcjdhmsdjeDFPbseuY",
  "key17": "4tLtBmysQCyT9rE1sLFy3MNW7bvh8528LGxbH4GQJU77kuS738gYjRTXA7DycMcVsyFZ1tAGexXVJEAtTn6R7bwZ",
  "key18": "WuPJfwnU9vAzDcohEW7nUe6XDreS5SDZQ3FcbuyFfzsVAUZaD4o6r1L2nQA96NGnvEeptQjx1GiFJM35BJiLfkB",
  "key19": "4YKUvdTQtNAAtoQD9jHAPZYGZQsjZNumW8CUzKwpQhSgVEAxQTPYC4viWsDkr4mbdNy6maX3vhNfbYsQFhGUt7P4",
  "key20": "2Zg2MMXHEqQsHCZJbcSNBXLQzjwow5LDA8Fmffcc9vNjVab2kjPWe3fXnU2PFMD9azg5Gd8D7pWGs4k8eui3WQJ8",
  "key21": "4CHW8VAoNdZh5LK75buV8R1WKNNF7NtjX14CpyMifpwDtGGqX1KpVeNiHQqQdPpqCR3Y653ePhcoQUw4XzMi56f4",
  "key22": "5UWJtyZa1ih7sL1V9o7qcfHHm6tbzRpUqUBaMHhMffeyytRsvHk1K7YbU7b4U1VLnwy9CgXcQa3v4zZ3f7LoN9Tc",
  "key23": "4rEYjDg5H78zAxFHwpN8mMcJXw3wNTYSVb6afLBUVByKzzTeXYTGUGNdLuxsqLBsM3FkovX3v8a9PtdmPz5Hii4L",
  "key24": "cvkfDxFixSm2fRqCVncvSHP3dcPsGjHpB5jHWZ5fNm4nCTEFNe6ZPERF1ghWccn8dfM3wc3wxZtRpgDTnKHLX6X",
  "key25": "3ntyVb9PPBWcjAF46hi5JavVVCaYdr6eK95BKQx5HtSr6dtdQEScC4b5JLv16fSPFkj1fNMMt4bWzcdy6qBRjGL",
  "key26": "38xfXwD7VQvXqz6oGGFwsddo4PSXGisGzHvexRE7nBBw6TKauF7w3BDbckHfcjJNanqNQzhfFkW25SNYp1GFG44X",
  "key27": "N2aNAQp241btLXpZNUnaVZ4VKtuANexMbgPvaeePVsgMMjpv6bpSDyta17tLSAmBPGs9wjsunWDwosZF84zrt8y",
  "key28": "2ddwU8JUjUpae9c411NWnsok1xJ8crom8hs2dSV2YMTgPQppAAYzvikDoVJzGthyFXvKG3Wu74Bt9dsVXwz9kMZa",
  "key29": "4FZCof8rR7iqT6gZGpAYFAzTwMmu1mSxRCfX4HYjD79FvauKPEUJrpPnyFM5FkjT6KyDNvuZ8P5wZVg2tHHd5TQr"
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
