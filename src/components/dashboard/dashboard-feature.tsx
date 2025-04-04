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
    "4Kg1Uy8NUwQfkbUWausfMoMR6q1kD4ktmcakNY5mjGeB9yUJWL7EgV2HTQirZE3YytnuF99ZuA9XH9zY3KdP7hmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NmECwbMZnyn3XFMo5MdCRJ1uR1X24c7Ey9dy8WpKfGVJg9xo74CemrJEQ1AYRqmSw6RwoPggZp7tEXM9L3Adhwc",
  "key1": "3Wab8aa5MYJTSZsxnxe6yGAn1TexgrCxUqqeqfsYGtJ848ys4w7iHM8vMZYJi3YqEEAedLgRcFsEDvDkW4wwR3xF",
  "key2": "4VhCU6GSGgg2mQRxCiGzXLfT5znPxLuwFfsJD2foDg1Wj8id6rPsgyLxBugau9cKDJeRBWPyC1psH8iiYC2rBFp6",
  "key3": "VFuwf3S9Xy9AqW1vh2YuDh5f5aLRU8WtAb2qSaJvK2EhDcGWwiAPPfTKGfPR6Si8wKd1FsWggMTKwdQBCPToTsF",
  "key4": "QGhK4s9JzPBBLLvPvki6eLmr13epMSP7zcVXBntS5gA8UB8E5CZBJ8wsDCgzB7tyqa3ThaZzxo2uvPG3cJbLRca",
  "key5": "5JAArKLxrZmF2pLHJVdqxgqaMhBLbLDJN6hu1Zq8iZb6kk1ztHtJ66wvH7bSFAVQ9A1Nsq2zvPefB3Up2PESsp9r",
  "key6": "3Y6LcokW7EVmNK76BMCNH5yPJ69tx6y5ooZMc19kVYNSZFGNJ4xsCawrPHNNpWn2QUbMf7B7YszQTzvaZy9pNpRG",
  "key7": "5x9q4TPXhHqbCtP56PiMg2xGLP7XMhjTmAGgvgUrojhxPwW9UQ1qJVBpotvd9vhJtNzoLCeLgb5y5e2ixcy2pDp5",
  "key8": "3ZqEQ7ehKNK2NV2NVhaRjTfw4v4LJWKGW3MPkpysVyZzhYCxEybUiGMzrAYmmobkf94iZjwagvUQkZJfTfLMdhDT",
  "key9": "36uNiL1FhFYGaMphCE2j9ESkLYFpSAXzYDaJYU9oiUxqoN9NFhMAXZisu6eA8XM2ZwhnpcZGymi31kfiGG6geN8i",
  "key10": "5pJ3nSCCNQbuUm9kGRQBx5VMfxkP8g248TJFoLuJ7Qwei2KvF7d1APwd8vT4QXxjeXpMMRhKxdY3dbHPzqHLaD8J",
  "key11": "AX25ckYTDJTfEssuAVPUAJqpoXdQbABAcwYJrpeiCEyQRRQDEiWkmBqcScwunHHd2gDU5SSnurjKGwmdaJvb48A",
  "key12": "JnUS5Wba25YZY63G9ftxusfBqGBsfkQfPSde3xop87HhhgZENMchFgPjJsaSXLPVvde4pAFkkvNMitBtdvH5FgA",
  "key13": "okL1UWnwbFun6eRfGQesbkSgKgWh2x7cGCVG4kS6xpCWu7Pt6yeNJucoY8Smv62rAxCVgT3SDykby8F1RTsW3zV",
  "key14": "63w6vavRbPnVyMkQ2fKGvK7bRCZQSpGfG85JXPMahEy6srhN51jkvLtcuzp9Rzg7tfCni44DPSBNu31ii45SSi88",
  "key15": "4LWDtKqbUz5cJmisLm1yHDfRkQo28Z3CeASCTPb1AT6CjcJ8MCbokCmq9HXPvMGzyHxuPVbVMGKG6GNZJ9MNrQ68",
  "key16": "2VeLUUE9663T3qJ5hcVawt4v9p18A8jWFuNwZ4XSrzBEXASZHrtLqeyZooMDhVoN2jEY641KBLx61iqp7h1Ho2hq",
  "key17": "5Vy15GbiYNugQc5jd89fjbcxXGqDZAX93tvnqhWWCP3fbFZUysGbvegP2fJUqPTSVLeFJB93U9rRmWfZqzseSVUa",
  "key18": "TDVLivQuRhAmS172Vxdq5zrQWDgWmMFMmKFNpZZEaExEtXQuAtS4rh7q3rjX1FFTCEucfuUeQscbGKn8vd4ny2o",
  "key19": "2Ns7YuGWCPN3QvcXEvaSX1qQ388LCKaxs3Y3PFtZhmERruEGZt2bCM7KRnT6a3UdNHBvwRVA4WjuHUKZJzajRLBP",
  "key20": "315trC5Q89zBpxz6m6moor1SK2AdPLVgbVRzeUwSaoB2iGGuwDQ6gdMXgS2TEAaFwSJCcKp5vrUKaMtov4cfZm1N",
  "key21": "541FobYZEjjoJDBGkDt1ZF6XPNJSX1jii7JZ37hEdYTQ49fPYs3DgeaK2k66GXR4qHQ9AWAaDKbbNGirWAfSadw2",
  "key22": "5JjHyvE2G579nELLEdYQJpzBLkzo8dRRYZfDni7WZSzh6tkJRiDjue74tPZ3MvMo9nNCbsPF4k4wy3a2tgyhTCAC",
  "key23": "5QPKcGB1fqT8fU8RRt6kUGpVrD5Wgw372cguRY2eT83DLEzKMLgD6jzDBGBZXD66vHVE85dFousor6VW5nvJZygw",
  "key24": "5VuxVyCw11JGGWKjokN3QsAkq7r8GvXAibFVmA8mUED2ie3zFmq2ywxmwNNwcQaQbmJb3XHfqPakuxfU7EZDDsLD"
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
