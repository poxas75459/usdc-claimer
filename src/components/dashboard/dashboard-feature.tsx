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
    "4KKw2Dc5v8eaJcGuiYkd4Vbnt5264DzXwMNqrEVSdedT8sDkEHopncvsq4U5u2z5ygSkR4KB5aBieHu1Gq5cUWU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUEhPFFVmJQEudnzcXrNVkXNG9ukxvyKyduwysBNAUxnAHpXdQbgurCAhGXpMqvubpCX9DtvRkTVsBP4HbVd9L6",
  "key1": "2k2hjF33K1Jm9RFXWGjKjvurDFWhjoPFqbDHrQex4pALeateeiDLPcg7bQy5pq535C7toEyn8Uvmjt8WNwsXhUBd",
  "key2": "56Hrob6bdcusk1uLw2dJY5E2RB1GpvSHeCBQ3H87pXhfb5Tbvh7JAdvFHQNPnjjYebWV7ocBd2M5F9AHobgnXnfq",
  "key3": "5L8VfCZzNPV1JFwzDXEcjGtXquQRbZWa3fprA43jTBsdZUqtmrAkquHB2asAUaspHLRL46gGfpAZeRwv4qmZqJEh",
  "key4": "45eEJwQ2aUjPQ18AtY9uubZFGNDnT5oWvMMLFjqrBGKoGCSxfE9gNYyMvdFSUq2wW36tzPDoXwd8EsrqpkLy5smj",
  "key5": "63cZFmnXt7jeefTu4Zs75paEYA7aMq21DdaTWG9QBDtx8kGoq6H6osUS5G1N1NYmgMhm62MMNDNwMHdposAtpBaa",
  "key6": "4RDrxJ2NeGKZpHF8YkDxEAwHtWJUkyV472aPYJh4opNTkXMbQNyjBgd6cYyozW9bWqfCPnfr75ipRFATWAN7cEuz",
  "key7": "4o14imRxQvngCjre8RCaaLULudvQzdeJMhzAmhj8iwYz1HP3KEVDPqLt97YF6CLj8imjnWYhb88Kmz98bPCQCrsf",
  "key8": "3TP2aHiJYUhz9yCP5xyp4iiWDMPP4tX4kryyQksCU5zZDoxsScRApsVMXFoB2YkKKNSHbnN5ZXBmoU2neYjSD4Qp",
  "key9": "2qGm2S2aTZcFPna5D7bf8qCnssRJsJAe8B3wGoHX9nEGhejWXgHKbXbXa1ae4V8AmeT6AL51byJ9zZH7bZbFL8Up",
  "key10": "4rYW2Pit16uUHdmHGnjLeyVVhS3MNaaDCmyQvaF9QvjghbpBov3zxA7UN2fTuUQc9Zjhu2p7gNdNwsDmzLikepbG",
  "key11": "4MNzNkLStL5MEd9KsNhiNZxXEBxV8aua3eWcGibBVQJ6PPjsCHmnqMDJUfMDbvBkFgiSYnrNzeir6bEg939u7n1A",
  "key12": "QxgVLhWAP25BGaTzNCGKKjB7EGvA2KjVQEyD2AKSUaaUo854srhXy7YLEDjbDNnoQ5EfAAgBgdiMz25YUso6cW2",
  "key13": "VshCTywvVdKR2RjVNFUqk3Ey4jis2UyqWVhBnTxSNpbgKdvZbWeqMhvTfFBqyEtVKXLVD811jLQ8mxMotL5x8Zi",
  "key14": "JkpwXz7z7GSNGzcX6NaHoecos3H72VNdyAqucHNwdNmGqGZPK6C2duKEtmVRX5qFkBFFsiGA6KXvjh8w4qi6A7w",
  "key15": "2UZHBsXWs9zdxkjEExgUn2v1Y5nEJeRafZgZagrmcWwGKmZUpgy25N1vp7Xdc6GbKtdy9r54tBDVuUu93fwjuh42",
  "key16": "5b3GTY4EAVcUqzXakZywQaxf2DwLhfB7PG85LnJjHiWJPJLRoto5Q3mopyRQAoFy9NjPGvmxPvSLfcd6oTfKr83y",
  "key17": "FSCN6YzqsmhhL2fEe3RT9G6Pr9RwM4QqPSUURaDJatvYM2LzxHMmcEqi6ZaVca6kYZqQPetSspYSinMME6RfABL",
  "key18": "54Y1XJ1Wc3sx5nCwogF6foSxWL3tuMPV2aFYNpbjk7HHwSDS1wjJxqvDtLKgspfi8cpFxHJFeSphMvGDnssEwfos",
  "key19": "2CsyFgPfk4bT3abJVYAsg7Whgxp3BheJ7rhgZSKbQujoyDBXqqJVpGDbfz95ho8B3GttSuE1EufrsCAin1jArhCT",
  "key20": "5UG4n53C3jWecqEQbu53718Q8JKtFiFKCj3dbxJFwgpbAuu4thDDcRaUfeLsDrjaovL5U1YSrgWz1XT5cs5aRGtJ",
  "key21": "9qRK7qeH9vNjDdJn72WyJzNNgW1ePXjANJS5M5VEWVgBiBEH3UyiqLnKaBF9t2tE7McG66erbj3GRmiQMMSSm9o",
  "key22": "5upk3UExYRByhfJdN73quSVgvnJnHYMSViGk7Nd4zqUE52oGT8AaoqYLipd6Qt6TowrLYfGdCgJTe9BDSLrxWjWx",
  "key23": "3hB6G4LcCjjwMGwNBakm3UfwAD4yt11VyxrMe74nm6DbpNargpVHtRJVcAfpkUwTQTfKtDzU39hBBrEei7v7Y4rL",
  "key24": "62BRtjqVyjCVtgHLRR1688RUW7Uy3FJMaJ8fCvjBdvyRcCpWr4EzVc5MjVTqrajZxkrRDtkMN9jmZd19kGG9EWYG",
  "key25": "6TS6psskW2EgvXXGDA2UU1jxof8Ckii8AEaKdXRu1RmK75a1zn1x7oGDo22wkV6XM8sH3LBEYSGnALdmr3wgbQK",
  "key26": "5HijCnCLiHuQEayv7Divir7ApTtvUzuXMAcRyQJEDDGHdke47MXEMF8ngyzS3LkXxvhEHRjFwWrCNYSRkmQMEpmz"
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
