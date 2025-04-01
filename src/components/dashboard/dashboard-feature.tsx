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
    "3A7WwSU2xke1HqLcV9pFC3GfDTojurzmNWPR2pCrh5ZqXMYiXuP7uAv8Fo6QuKZU2qjBjmcdKhptkVgTcjidE2pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RnVeZzMvFCQbsrcnsFxLMmnGoPFJnrqvmkvjpiTjcqgB844mDjepj9FtdyW28muJt3a3qbfk1H5eNCC8ZkbExyy",
  "key1": "3kmy3GJMCLhijqh8XbVfb1gJ39QWZws5wF2DAoNi1DZapPdCiQBxbZvBjJ12RXXZP48zXjrPg2WZfJh1Xxrn3GZT",
  "key2": "3aAeWuN1vzm1vAPzpEA1H2Nf6XPN711HQoMJCiFJjmvawuziizj9FigLtUzvo4wVbXxh8wn14Y8TfZtYcYfiKfWX",
  "key3": "4SZLhHdmQxuRAq7d4ECE1sFtoxNrR7w8meUt7PwCLFRfT58hv7GPy8CoHgvkVt6q9WXa1yG7rR1epCavQtB4Vame",
  "key4": "3kcLqfpTRGFL96CbnywnXA3ae9ba2bXCzEuhAW6zTKueQZEFNd5CVkXcKfb5WskMZ6UTAvdwKr86i8GopBb3JeYu",
  "key5": "2FXf5gmXRWBB1g8C2bKbPLmPaViY864MoV78pSERpRBXVLijPQg6tUUbRxNiky63RuJFuf9XH7BDMrpqjMsqC6pZ",
  "key6": "2fAVhtQ6c4h22cDgCNF3Gwfxdbjugjvp55HdUqmhBQQdCo8HLYGL37CJUqjWgcP2rK2cfyF5JUDWvGKr1sEuGR3N",
  "key7": "4v1RpUC6vRg1V6wQiCXyBRcHC1eenV5v2szyfSPcjePvkUsqk5We1he6p3DNXMUACs1Tjg3nqTCrZhX8VypNzNpq",
  "key8": "4T4ABAUKUYKbwHK3ZEtw111LfTfqtFYnu6Dhmgug3ihqcuVaMMDDzAdK3Wgv8zCXsF94TNTAeLn69yMf7nXbgJaP",
  "key9": "2ag9kfciJj9QWLjG8eBCSKsGkSSFGeNah14BPd7EB2XJHXjU6HVJ2Yjv4M2RBTfva4ZN6rJyHrACwxmYuXV1817t",
  "key10": "4TAeprCkrmNZtpkAxxkMaiT74w6eiRMHkPk19bRp8PGDGMRazpQWFeqv6g4T5u5VNDqns2yWKK1xibFixms9brbr",
  "key11": "4HvwkPpskgJYNecpi6pH85kHy8yiUxHXjKF4vwXPm3BfNdQi2wq3rMQ3kULKTqm13gCyVxSAckqL2A5RezxPNJhT",
  "key12": "2HJEaSjzNt76EgLVZNwEwZRRY2LjFiCfP8hEipFkCDrVb6e37EEhGdJ8Y2DSsDzNiusFpbzCLLaWndtzLDxcPzzF",
  "key13": "d5P2yDjZWEAWGe3vxhKGWoWbF6MZCykpzLCAwuzkbcYwHKdHNq1S3atBzpcdTnDzd96CY2hM2nvMzQRY2qeHBxv",
  "key14": "55AouUKkHmnoeuPuzGQrX4istp6DaqNy6e5eDReSexdhWszx7SAG2Vwc4obCcAVLPh2sFG8SotKn9WSQUdHG3ozT",
  "key15": "4vQLH8SHKbET1aX8nyf27EpdCWgiYqMQFZiiB9tQBBrrubokhR34CpmmbGZ8oS8zKeC7eXr3UT8af6twTcmkTHkT",
  "key16": "QRVKNC2BFs5kY2jexQFKxavztD2jFpPJJNHidxfbZJFeXVmhPRtZc3rMm7N4nXLPJsWp3SFq9uChoAyuDkysBJG",
  "key17": "m2V8AbTjoPP8DwFGHoDuas3bKUyMUuRsULyRZBPQo6d8K6BvGkBrbAgVFEDNt1hf17VqNehD6LpahJ7LaqQze7P",
  "key18": "2jdzNp2tsGaZMEpsLkHTDyWzGZKPUXWGp38wi9ZpKN4ofuSrAiJdZDdVAnBv33NfHChdJkUGx3Q5wJL3wxcfDsM9",
  "key19": "2nvN2YEx8dN68ttprtVQpVZJV22iHwhowYiaqsYfiZ1qNyuvB7oskzXtxg2JeYQDMtHoLbqSZGyKdMd6G6FAsviS",
  "key20": "5XkuFz3Y1vg6ynH937JQ7QRgTMwjQcWsr89BvbAGkKSWKb1ipaYsUf2YcvB2ftCm1K6Tix8vYfg1G45GSPYUgYSG",
  "key21": "5Zvmm5ZPKMnAoke8T495iMFo2CYUbShcLCdeubNQ7K6niaRLWVrqPDTqzBSBYBVQBKanyJFSAafa2dWmJTPGdSSu",
  "key22": "4CD7p18Xb2BwvHa1EyLWX4rQ9tBMPeCi1xhKUikPVh5iYjjEP3qXTLqtcGmAFNYzTK7sgehpGD4rYAVq9Fqjrc8W",
  "key23": "5QEMeS6vebT1skfBrJJSPx1s4qGuAVdAavP7vHkEpr1HqaLpm4XAaMAkm41akz3hW4oJ29tyhMFHbugAPdTsBbtQ",
  "key24": "2gRuyeUriHRpNrt9mKE7uKakUAGhXfg7qfB8VGL8L9xK9ZzZUZZEXYyTZwd54aadDMYm1F4cuAxxXe3EXpCDxFG5",
  "key25": "62c4GYpcgQXMd7ouSW3zzpJVkVbwL26K5wR3npb2iKUySKwVBEeb4uaECjNqVmLWghd4x8H8X3HgfEzKLswEB4Vf",
  "key26": "tvQt4sy3vu6oPrTPHUdZdta9ZAqpnhuc4J5GsJ91GLF2zifxtEkUr5JHonHzMiApBPdhUnEMmjpYYYsrs297ibi"
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
