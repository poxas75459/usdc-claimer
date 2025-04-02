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
    "GcmRqHnjSAxNkKYzcg2FCnjs3JxqXBY9KdeyNcEA8vBmTr2pRE5Zp6VhSusduupRZmy8CuNKBdHh4zFCqXh99U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NATFjpA24uCXq7Tiw9ydSn1TYVqhJHrdVXFoQp73RWPE9wGsi23jbrnMfPpjf2bAFrM6JEGKKuoAenWkT5mUJjT",
  "key1": "27VXH9TCtZ4SZYBZcy87H83823NsPqEN7HL7EacsP8JqBPoJuKbfP5wDAHd5J9wCkgdF9CL7LtksUuecDTzBEU3u",
  "key2": "3mHpcYPHkdpbbk8GjNC7z3mp3LhjZFouFNRJzHzbCJ9d3E6TC9xNWAZmTotggWPMQLGj1QSKTCjN6VnWqdiER36h",
  "key3": "3nTrj8hbdMysRG1SNDW6EwRpNPtLiqeAUWW3RQwmbDQ1cXikJqpTP7CHCjW3BH1FjpBvX1qmKx9h39xg6LJuLVJq",
  "key4": "4kEP5sBt9C5xH9dsLBNRGL5LRMZbcGsKZQDtZZpnfKt65ULg5nyBNfwBF8QZxuousCJpaDpZD6gBmYJpcxpVrP97",
  "key5": "3MUtP9rt6XaYYTdgVB34peaDag3k8hXmi9SHZtSrxuPGALHtKwPtFeaAmdRirbaJrBhTsPdwuGEZVCk496kLVTf1",
  "key6": "3SRQUU68goWyRwMmcTo6MuemcVwbM9aZbKFSQK58zTWQn9HRLGEREmXZxniMry3Yn1QTVPdVqxtZks5dPHUHnJnQ",
  "key7": "ZYc9RvryodHxRCvYSB2ixuoBmnRNGG2GhuYEVrP4naPDbsqfrk9xwvwzbkdSLBa8Djb3kvbLUFne3HSB4obR2Ca",
  "key8": "4RdYBjYfP7QdgEEEPUvh3ze5DgA9J9Ly8G6gpXwJ6twED3iBLNL8FF7VUFvTVmdGriVQzeksYPKBA9wxFee4oseE",
  "key9": "4oPp1sUBx74FiwivSYd9hdBEbh4iaSitRxtg85V6X4ZKQUhWJhRStEPEY2WNWorGHvTbT8HSnPup1ACDoRcmmEnJ",
  "key10": "4dfLbGRnjo39meS9R6xokHbgbhwkjVv3NGqrX4rCm5qADApkgMWtdzQoKX3Q2L2zZofjDwnrvUkXztkFmJzxtKoU",
  "key11": "5fgyKaktdpsx7V8mpKmfH7fCFshmz6TMJ2y2bih7z2k5ArmDmQh3wfT3ypMWYiFnnrvQobmLkFkdLewjtcy8VYGG",
  "key12": "65pD567jUzwThrvrctKApVoQWHU3ouvWoinzcgmBhqB6PCEi6N7jBSjPbzxmzEGWhf31wKja83fSCZuhvr6nDnQA",
  "key13": "5tZZ6prkthzTeGy1UNf4DFpNMBrLViWr17v8nDNfbSd6SmDfUCUi8MtRS7z2ZF9UjMN9Y5o2gqcexRpNEjSjWCZh",
  "key14": "3nZkmnEeFxwPLw9MuYhSJMXQDa7RZ48TYkK4GbwyGE5XJzyig38gzG4hs6obB4zAw3Vyjmyqci1FxJDBUo2KgjHP",
  "key15": "VBQxS1qvsts95YxcjrCjpGjBwSuVtveC4L6wU4r6K5rZCAuCt5kKMipFkRvm2VAe3fVokXuwCqn2DsPKDx1ZNPz",
  "key16": "WpMrcQ6KQ5K59KV6h3141Xv6MuqSbrnsAbvqJH9oBrMgvKjAJ9iH52tBQKNubXMrSwH6aEd3gH4JroBsFNFfswN",
  "key17": "32jvyL4epqPS4qDMUx2qSMG18NBKa3B18carqC5ttDX5YuRU9St8KVsHpWhitRh4FtxrzWv4cpJjd9KBC5qd7whi",
  "key18": "51YD7dh27B8scPhgRryPSKYXAb3yamWqn2ubWtXWfzZKYSbagWbyS4eN6UKWnkwajZSpsaEpdemptCtUaKetDzB2",
  "key19": "tHptd7RBHAxACcCHL7Hte2svxGBLUWAsYsDoa9nU5dBasNJMATmKi8E3Qf2hEw1RXPJwmmaJmXNmVscL7ZT6eJB",
  "key20": "28Qnv4Z5f9wcUmi2NARmc9UiBj9EKPzL8JghVkKjuX8FZ8WNvHMqWtnzpLxVMWiwGSCjymQWUxQU9u6MuzM5WFXU",
  "key21": "23PQuijLjCpWzfiFTtzNEnoxfDXykBpMgAf8DoPMdJx1cY8W1DU95b9pwnK1EnDZzQqyJG6uQhHnebVC5tksRHCP",
  "key22": "4NrzmE5f4x9di8oCeTNeTKfs2MnqVprpN53S745m4Y3BX38KtxKxF1VrnmjLFvD7dMvXnJf9KMnrr5pYM3MyxHXo",
  "key23": "3DXZ8AbcpTcpAT9UMb6gcHFCiCKjkKJQeDK1feznuoSu1ucn55Zp599CFdto958ohjGzx2vfoTLoRyXp24xekzUs",
  "key24": "5ZicJSsBD4t2HnS7dG5LyHEvZTobdJjqjqjdEBE3daAHXdnMiBgVnFmaaapA9DcTcrXmvG2xDdkncYCToyo6mcHC",
  "key25": "5T9WMYPThyiKWo6fwjCZqJofhAGBBxs7B6hEJ5JEHKGwpEiuKaAZVmtEwQ5SdvwDFAdv8eaWzJtynWJbVAsVgBPm"
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
