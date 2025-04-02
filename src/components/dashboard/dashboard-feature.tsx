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
    "2pM1KV3RVqbMn7pYHT9tnuMXMw2BzwUQGWtnkF6bwnCUS3ELrofGNZgHNs7jBpvJJv9ac34rZYxUNTymSxTd4bQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcwhQwCGF7rwp1WoX2hGH9Sgop9MjKgND3WTJmg73CkGvRqwsotHDV2fB3d37rLXvxt4rZoJKdE4sPXy6a3K7qa",
  "key1": "3ebqyHFG35wwjwBqmqVJet4dKQomsZQBbMtSmH1WWqbG5FRpKtbvEopj1B9jEavcZb8GnC1rug9hTZJaoRCqaygd",
  "key2": "3WSs69UTFUSPyuBHZxAd9c9bAVCf23redDZFo76XN3CU8e1TR2Nv4bHHvUrA3yjmtzSWZXURZ4hPRp4EehQA1mza",
  "key3": "3pJPtJPvwMzkfQsd1ZPQh8mzLAGtkMEwQxsu3bv3rBRfuDDkNR17tq77A7DD8UeNuPbKU85qP3mpYDSKbPJ71hr8",
  "key4": "5W5AeYS992rqXdDGMDJYF71JJno2NubJhUY7V1A7e4Q21NLTX5W1Bjv4sD26yLecpgPF3XViMEiwMVUaTp9JYCvK",
  "key5": "4oc7sWQfxawiQ8vC1GxZurPs2mE1P6KMqD8yf5anvNiMmfyKWB9rhRR3wU8jQ6GCXFk88B5u7j9RoQVY2szHvMka",
  "key6": "4HWCDh1Bg3DotgtSRJWHAgKVYHrqBfTSW1L6D4wrN9gRNgGjd2BYHCdn66mx3kDeRtGauj9XExhhwPxU82jbU3VD",
  "key7": "2bYZ6d983K5ZJL6tE1Y57ELdKGWMXQGLNxSUujN2w7p9UwcDMAe7phNRKUsQPoZuGgaYPMn5ndxo1M4mQEERGX8J",
  "key8": "65BCQuud5KW1s7Xa87U3RJo1nKU5kTFwdkF7eMF6Hyikrh1k6GQ78sd3Zf5Y1XMHs6ScucELJy3tQP9GaGHm8ru",
  "key9": "fXqbEJ51CBMAAbAg2iaqQXyYY172WaANquEWhhFHSdoNX1eFKKqPHVvg7qVh5cY3ow3UbvVbbXxwkcjAzivh2AP",
  "key10": "2gJvxjPpsWt2wgxgWvCCsJBwrqT7f8qtHnYXYu9wTYy2mPHecd7XbyR6YkPx899P94GrnuMyULSgmXV9L22gLTrR",
  "key11": "27a3S9bJwAoKqrx4VdDdMdvxFaXNxWM19JtgwKJzgDWxtNEebaaTuDb3P3x112KP6AdZ5xQZghZDekcjL5HjFoYy",
  "key12": "4DBZSJnaKRive7SuAHqFAJuoShdgBsBKirQ8RkgWzGnrpG6QUm2dj5GvuDfJLPdqQB3kDx6LNzSbE6PvZrWfTRP6",
  "key13": "8H4E9osWXXQPL5GvvxPNfewbZepLV9ipc9SAmUCW3cy5sxWppBu5YvP647MNo8o8Zu1Kb5S763VRxtiXjHMLWbm",
  "key14": "oCeeCveRXMeZJRmu6oezGbebnzYX3mjbDozsytppGXCmDvNT8PvteB2KzEoVczzc3VzehHVhFtjCsmQmZ6jLahi",
  "key15": "4hjSKVVe7CStbVNMvWV3zrQbHK2xTahKfhJax4YgSR2wPh6WzSKXssyxqgNyzZ8657dCqjWmXRgpcPQ5wi9spFyr",
  "key16": "3ZDfHsNALBZVz6FPYz24FrXjJ1e91Dpahj8shPXU3ioPiUWcdyjyJ1NMzYpkdLjnCh6bwEvH55oBnzCkPNGejZpx",
  "key17": "UhemPDGXYJgGkfL3qafESL3sBFzfTFnj6zxrU6J3qGfaaMh8VAdvSxmU7ifLFM4Maxr8eTACH7RfPX4qgb3QnqC",
  "key18": "MiJUZBGkNaYQrEeeMGpDATLmXotDDShn1VpYxmvsuVKZjYoZFbb3UH8Ma2SwZhhNPZqunodB8Rc9qDkGwzyhLNs",
  "key19": "2Q6Xv5e1PUq8a2yk7gJEe4JJSToNSvpGWQ3EwGDvhfbNK5b9uCVtuiEeTvmtH91tKZE22YWmyWzYfQGTNgnfYLRJ",
  "key20": "2CVTxKddw7tpD5L8a1YXLckAmbcmdWB7iMHH9CkJquxmPVDncL2vRUHoXVj8vm81hnJATei6MqHYhCU6e4ksEG6m",
  "key21": "9HCid7rroaiGsZyqjpsZ7ZTgVw5FJKHJjZomNwDpRQ2s2Bw74dxeJdTTpAdPu4x7SxKvEqcj6edzUHj8skUrqeH",
  "key22": "3fKRSerBUQr7khNDxp6Cocw3vQmY8uoVDfMtT2rLitdoAyDTqcLGz6ePEvyy3XvERoV73CYeSEm6cn6XWkT3ELDt",
  "key23": "37EWwDqpMfmY2CxpjyUwbodrZkMzJsy3B8n4PJMJib5jNHtfwKepS5cU4UPAUjo2BkfMiGy3dac5cZ4LZ9cJ6HXV",
  "key24": "5tahrVbo1Gnd94TBKkuPUUR4WQp2MfFgzMe2gQeLAFfinNmFs54zjdWzZbTvjsbPtceCJfeBC3NND7XKCkEfw7Em",
  "key25": "wrtFeD2PHiM7abEP95GCdA2EKW7mHbdSidRthCoAV53jMH6ffJ6ZHzcWbdkoy3iykrKFp1uGFXuhsKzpsQpTDfu",
  "key26": "5zmRv7jJR25EsPHzirZjaosGWq7xrvaaFHd2Y3qjzwHYcLEJTuKfsqudbrYURbLFFtTsQSxcCYCxsy9g3N8ZLGBi",
  "key27": "61B54nHuV1wWGTfQCNGVjNqGV2gWUqKY16m5fkjri4RbtU2BvdR9cyKMxScUZuyL8xXrfr5mg2Gqnt2sbzcs9sS2"
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
