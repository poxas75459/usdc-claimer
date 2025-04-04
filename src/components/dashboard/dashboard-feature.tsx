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
    "4pyi1id2hC2nKScNww5aqaXBhYpd2DcR1cYMpaeanmEefDzENkgvq3ZJRJD8RQtFbDCKcPaJmUNjkSq913d6TDqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZKT3hAq6bfug4kAFVBR46RdFcx64aYrsHrv9fYhyFnNExeAXtDHC3Jdt2Y8h8aQfm4XzreXRjsiPFPgdKGKKjE",
  "key1": "cQ4c71pWSDiEGr4xgPVTduWutSWqx6QvSmZvWk8qLHpzcdJkf3C6MRmtYSsBX5pSrY4KCmiUvYXqdNp3ZS1MfvS",
  "key2": "5zaHcAzPqCRG5zxX2x3dVK1iSsXehkmXHa5tK8ACKS4oyB1kyHeMF8JUgh1GgtSYPQ3u7Z2SDMxpsg1LSChYVJAx",
  "key3": "5bBEz4uoxPp8kjQsHuj6cRVXJoYBL1dguPg5juHpDUa5tiyMVSS7auYAM155n8DDTQ1ac6iHZmXUtRcBqVkVPunv",
  "key4": "62U6MySJtuyUT4bk9SeTh2kbaisEyBtqfNyXYh4SZr2LN9UV6f6ZxgFkcNcc1qaFCLsNyvetZiw99GAD8rEgCCwZ",
  "key5": "5ZkLtK8aVwFkzre5WuxMMncg8yaRUqXjvbs8ZypcshxMWdvSWAvoUWonmdLf4Rb6XhNqvoww5oRBrBTeDzFtPftT",
  "key6": "2C271cjgm8k7k92b7AN14xUe1CUpHibx3ns56U1e1VjpXq7QZorTezCoM676nx5ejFdsrNuDvS3pg4yE6698gB9U",
  "key7": "2bWxVKJjVfgbds5wqpiHxByCDfdvJx9hAEDD3v2cCWUeDcBLpSwiEFFNxB1u1TYArTuy832UiudBPYuy7PJEPjQx",
  "key8": "1cZzA5eaeC6UtB17EWWz3KpkE8YD4sgTXLuxefH4aDu5ju8PXxSjAsbXkYNgfjzaLUBb4ynQRZwqpCVPYPn8HHM",
  "key9": "5bjNozDEMnnJVMJBnyvv7CHsaqMBzKtsiSKNfT5vdXqYE4bVroK2qFBfgSwRLyumjgotbt7DgoyC4s9zQL29yrf1",
  "key10": "4MdABAyNvFW7CyeUk9QRoLjLoGmSwFf23oZUyxneQKL7Vg4dMPxRvMya9c7DAjigvz5J9JQwvWXDubda9xW35tBK",
  "key11": "59v1HDKbPDanDRneazYCCDDERpadUE8pqZFMm8t7QBLPCz5tpsq3QRr1mXyRugTobC7HwEu2CjTxwFP9WGwMRiMF",
  "key12": "9BfVcsM7TDSEfyAe2eohTbNLfEdtvXQWkXSVuUceiu8fgiWzhCRfq7s862E1MwjXTkiUYxsTQk4GDM5PLarXsdB",
  "key13": "33P6tesVoCNSx5VYPiqsnv2Rn3NJBBwKVLcsm5asjoNkc3QxBwpDYEJ8mGJkuedsQQw1XTvj2NHDK78QDmD7h5MF",
  "key14": "5crcVxEfwDdt9r5nyoHYBiQ6ZUBNwBebaTA3gto3a3YZsdntta3rfPMUEvD7KdaqfjeFDCmkWvxEUUfdaFcX3Mmj",
  "key15": "5mkxUggJeKF8S4RRgmCQfwUARveAbDYS8jxvkvDoVRkZQb2RR23PUxw8F7vV1uQF6tBBTZDvS9czXDwxfGhDGUyQ",
  "key16": "62vb17LmAZpYbHAFbYZkEwuGc7cx9oZSijc3Gyi9PZKp4zGqoGnQSSLNaVNghe9buDVzsSopnnh42eTStsWtj3qF",
  "key17": "5dhLTZ74d1Rf3oAKMbWhtAEosJ4h6kC7q1Mr2CwHheZS3bzsvEW7QWgrSCZjdTcLGJociYYEddnis3ehDkfrER1i",
  "key18": "VSQVihhXJGffmgDWDGcnAab9wRcXKQTn5iUSvsbjSmL6JMGu7NNsUb9WRNefT7qaR5kfKSibspndnzJz6AgsnCj",
  "key19": "Qm1UYsEk7n67o3x5Zik9Qq56qBfkh6vuxX9ovR2RN7JHvC4AUrwh5exBD1j1dcgA1ScNZaafoo9JCt6VaGhRrp4",
  "key20": "2SVhCcaopErqYJV9Hqp834jBQ5ENrh8zKQ66tWYQpuviSakXFQsENPPgtB9JAumAHLxsG9nKSyMqKL46nk5rvVZc",
  "key21": "5FSd6n6rZEM2ymZu9rdr4a1fQwWw37J6ALUWu87wZLChsr6B6hTRfWSmffKmXVDptqxwz5q39TDjY1cXAntFiD9M",
  "key22": "5ju5i9MmRVHpNgLV2YVReHWDQ3qBvNoignZDcx6gdAQuRfRWgTbzzwh6Hv6kQwVCv8Ubmv7qRTJTTnQjBjNQ9dkT",
  "key23": "3tquj42jpMS29bunonyiFrcxXqBPsp1UvMu4dW4HvFhqp3Z2xKH9aRvXYkdZ96ZBJEHzjM7SjZeuR89C8UD1H3VG",
  "key24": "CFoxLDeSo4KZvU64tHbELwc4dWUfzMj8CEPGGtebo85x7ywQrew8zKY52cgi8kZM5AVsmBFw2N3APCeeiWJqzie",
  "key25": "63f2mZA9EAG7MngLeyxAUWHs8hyqvT5WHGPLCPFortdiuaNbffCYfo2tH1UZcWREYqkArQYnNCTeBDdyKWsphwCT",
  "key26": "23DnaJ4rmuqZ4byRfymRHUDKvz4uSwkqngDvrFzoUgthmKrXUo1Kb6a5o8789ebDKGdH8apc1sMiWPk7HKFqZu9q",
  "key27": "5xJTZ2mLE7bgBx2vbYehVNTHVJRFsBYK7Wg22UUdCoB5pRqC6E65qK5FsGmziFFtbtmodSsis4obqUfFxXrHfmKe",
  "key28": "T4aTjihqnSctfR1u3PsnjYpumzsT3yZeg58PP6AcJCmQjTrHk3kkJPKdcjJBS4XbG4dGbfCs3vgx48UnmP6yk5N",
  "key29": "3fsxyPNd3sk4hTY3HvY7cJxRDSGaP4S4SNDdSEjmxk5mVjGrYyYDPM19Hif1bSwXuENdLRXUCydFhVsXMtvK9VvZ"
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
