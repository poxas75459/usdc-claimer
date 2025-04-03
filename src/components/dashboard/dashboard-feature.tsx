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
    "5Q4KYSz2vJqdAGjWdBVybNcCpWc8Vst5VvdB3SenMPE1h5FsYmPLwL7MsHegjWxxsXxPFGigwcpmvi1ayvM7R7hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWbsddmHuhi9yq5rkAVqVXZbZu7YMhe9uBwDJNdM1rfBMfd2EUmTR7n6oCzeVihehdRnpdLLgC3A31YhvQrBfye",
  "key1": "5P4VzKwQwp6ErA4qkuk87XC7YX4mTJ634ncAoi3xWiuwiuZSdD9GQiwY56FVWuwbniHfNVjWv9THZNPKFzVi3HY8",
  "key2": "44k3oExUjNEaM2tuT7SAc54GbMsm3c72wAPmnkZC2Z2yLbtU8EsYsjM8pT4jGYEvNuUebK9knkyYa63AhsHyaK1m",
  "key3": "4GRJPLpZZFXha9TXhN6Z9kdTRPrHTnsFwAkek3NJwey5qCrNQqV3Bho2UsZPZQjT5y5TYFEmjLaxmCM3P3km6cRK",
  "key4": "BfzB9AustzVWVvsCiUX9e2ceFHF6j17mKHQ1FqYEa2QbQqhrjzjDYcvYCi1J8BG7VrvfCqHuVQFBDpNxnUGcWb9",
  "key5": "3s3GMJXCmi7LKAzqawj1oVuBTJTkDG6mUEMh7SYA1jT9kgVGq49UgZoqVahciLWM8ussoDHWjigXUNgLL4rTgF3X",
  "key6": "5TtFRMkRZ9rGLZAQcNBwvJN9iXM45eKbXrDgFmVCF6phG7yYwhnTKGmcC6qUXckq5cuLHus1ztxYY7F5aByh18kt",
  "key7": "2UEexUJ78DTLchcZEnmfo5vQPCyWDtRUjYZPkq6oWTm1yirTNMhWZXnfZURMEbCHAiJax6gBSicb7e3JMN2L1nTA",
  "key8": "5k5grdAsqf6JroN5GNVCWRa8u58ZtZiRQQFqxsVpwjyo12uvfQSJ9r863mV7ypfpZ9PFsi2C5QEdbhZ5TcqFzAXf",
  "key9": "wvjSXFuWBVginfWbLTe9AyEGjxXoNuvtCWF4JjT1jP1eTbQobBidRAZimPaQKuFbm9RNnyqi9yg1ugH9GYL51Vt",
  "key10": "3faE4D2xbkLC9ZgPfjH5AZEwkED71dwjRMpfN4go6nybUUYh19ucqKYLuhnw94objt74PpRGw4Z8UqwW3pzvwECi",
  "key11": "3onmfmHfPiR2mx8owUEkKwtF5pypRiaaVFgZLnmRKg91mtxqAu8QocheZ8ccvA2EPnPsPbHMVMPQDbtQbAk1LBkh",
  "key12": "5wLAdvgKP27ui1BJEcq3hRZpybN3KjQvcAsK8ZgHbwT6GHM7ypMkBCFt44sFr2wowE8kHZY1pRBc9uWY9YjUN9Dn",
  "key13": "4s3c8X3gE3hKCXU8kvRoNfJwTFNbUWae7zAx7UUWtvPUfcuXXgkXqi5z56aEKcrNMxySVaDKWf788xBxfTjRygRc",
  "key14": "4dktZMpgQK8wfyn3amXxJxrWonUzP8F4zQknos5NdD9PwiuKvGbTfbhNHeop6uX4aNpej4R5qSSB1EDqnjdDmwLu",
  "key15": "ewQAjeP243vQXNyhLPZt1BFBbcMuDEMzp4wi3V8oUnAb8SUBNC33VGJUWjWhGkHLZRSM6SZnc5esXaJ8Ai5mHMd",
  "key16": "4FuzzJYa133jDKpVjhc5Fy84fgQodZogjx1AcpWNNbLG8femMh2R2LRmkNDVZiPFb5tepPRmyXmsnDMmYqpFLA9G",
  "key17": "dGAUeZ4dbaxJpxiWb29AhBZjgtuGSA979NazDP9UizsHdFkS8dV3ci9NAD6SwnvdduLrCNevJts4DiGiZumHxJb",
  "key18": "4puDGbce2JuHsSYFaHtc3carJkBU9wfbMGKEcc5nL4P3qfHS2mCecvrKxZeC4TcstiHeziPvJ9XZWh5Ed165skv8",
  "key19": "4CdfjNriCLRPuPjNpM8amQ7rUDDyPBYKYuUFsuzm16yhmz3WnX5PWmqFovfDo9MJVZG2HT7gHhGX6JYFmERLDYqz",
  "key20": "4E7NXeXWDLaxvVALMkxuouug3sdqAQuwQ1bG7k3Fgh7Np2Ua1gz3Dt5hBgJrQXjsCF1F9Ka9b1sYDM4MZXj4toQp",
  "key21": "5AvevUofXbFpnqDNL9PmMs6dMzpj9uZJLSR2K3F5N2P23P5TgvMQJKb63qB5rUKyk4AaKaueRYEmow9noSiD3ggk",
  "key22": "2YaX4wqya1kEWqYSP8RVjU9WMQn6nhrzzpQEjanjc1YoeXdXkTWyLqMgTH6foAxHLMRoXwtejjkfxKwMLUXh5P4a",
  "key23": "SGNLnbDH55cBxMDeKNtjcWhmg6kxQy9oKW6gRcWiERrBPiSC3Gd6U5pnAR24SdurrfQwge6ZiC48m7RRw8wji88",
  "key24": "5oVoPRvoajpzhue8FzDi8NKVrP3fSJm11HoErLm9FdAoGEJUPEHAVpq6pYVozKDsvwR5wURfgvqtbg94MkUVozzw",
  "key25": "ESAVFmWMfaBdsxDrvfcH1FzGUborJkHKevuwYb5xsbgoHMisnqurSoBrFgD75XV3Gjgp47uLG9QU2Vf8qwLT95v"
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
