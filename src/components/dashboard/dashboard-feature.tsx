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
    "5ic4RfKk471jgDRxZBn6cJdUP3h2tfFdp7sFqEHvjEVJ2TchRvz2hvQZFpkwmUvStYTTB5wwWB28aGyoiFKyL1hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LLnHMBqx9AWYW7LgkfEpXMwddnSuJtckdYYMbKoy17fU8b3v2D3Jj6KJjyzJZ1a87gB3fJHU8eZ3SK1KYin2Fm",
  "key1": "5qhuAL8KpdFoymYw3wJKYSxK9ZUhcZBv4h2Mkys59dTV2wJUkpmjD36efACSDFUWAQhmdTwnE8d5Ly6nnf8cHuYH",
  "key2": "3J7tVEpa3BgJn6VHCiSVnZQHV1zF8qMJDXxpLNddEdSkiv8g76Km6MtFuRsNV5xZjLEfMGjaz57aBZaJfuuU9W9A",
  "key3": "iURtGxvkQ2NwycAzjd3TfR4V1fVmoAfsVG2tHkEJsLcrgVTHQdPRJ7peuKMKhHnovNw3oLUyE2jQB31bvnYX3MR",
  "key4": "2HkgbQXw2fdSU298e6FAB5sAodDKk3YjjG6vJt66z4s9rPsQZ9WDk8cQYhDEv2oaskRE6b2heMwdoX3rr41d7q1A",
  "key5": "Lw4uTfzCgaKTEvHSDwx426z5J6n4mvQLsNctNFVCwP1uNy259wpc9pQwMGeBz1umX5kKWgChq3d5THZgNvh2vaV",
  "key6": "3wxZQrYS6f1gvtmvPVgDgbiQDSjjHnE7keSVr6Ez3D7g7DR1qkp8Xmy3S72wu6VK8m8C8ykWTjFM5qYKa1JZcZ5m",
  "key7": "2Tw3Xas71RzruXN955xVVCGwfvDLw5538euyoro24QRq6hj3QZFQ5g8wg3bfKDTqzYJjUQaPstKJPRHdYVbf5oPh",
  "key8": "3wqZUVYfAhrHQwTHp1QgQsjRT8fkXU6vAdTm8AqtJ1vNbE8anCPfRCXYYRjkRWSom14PefxTQRAn6E9QCvBX3QL6",
  "key9": "5bLhpLnogRxfdsXdG1h91Y1Efay9NLyoGnfx8nsif7KR32B4gvqKYDUwHsKUEdKdyxE3gPJungUXX4m2BE4DXFU5",
  "key10": "AJBjSjkBDDKCB9quPhSsVDUJonsySNRaeKmhQY5fuF9399BYigAAEhLaBpd8xL5j4ijn15JcRJvjBZYmTzQzoYW",
  "key11": "n811ZjEkVAyuN7cvrf9sN2d5ELJES8Mr5MZdokKP6CQUJENGai723mQPQ69bQqs4uDyjbRQcXD2naBjqAAKw3ag",
  "key12": "5ixPbX8NM8rRjADzfnqHHjCBx3qMb4YHBLznvHUhsAAYdnxXLL4GZ7kdyPDv5kc3f2z4NwiVnDKm2vW3Fg58ovnr",
  "key13": "Xet3hsnXnLEmwHopHcCxw6yQoSobBexrVhFp6SJxmFkTEy9s6D429f8cAQNg7Kaj9yTVF8ynEpJ2ECvjih1b366",
  "key14": "Mnzy9PjGP5aCwbXiG3fUnw9DsYixm5r55wtePhKsQASNYYBioi78rP4XjJY3H7UoooeRcksL4SWt3nzZ2djqTyr",
  "key15": "EW6vVa9xrmSez2ugzpr74C9et1LSxTAQETUt9yVUwp8q6jcRPBoGDnS2aW5mqDjyzKd5BBx144yezefxecVBRvj",
  "key16": "RLhGJUsenx6mWULF49CDZwtNMcPewN1WbVJD8pPXTTWhUsmjRJYk9oRuzHUJBQk4x8vMGohXGEutFctJcafHQtK",
  "key17": "5Eju2gy4CDaQ8bKfSHv73C3qEk8KzWZxHCYRNrzDejZkk5BixdF5SoBv1uhAiNBNHs7x5UhhF9qi42Tp2YcPo4EU",
  "key18": "qaU7gGkKScGBX8fQTQfZ3xGZAqz9cRkd537xyyyxjMSz6ADgZk8JMD2xHV5bxGGVkTLwr9qTBNGknbYVgJrH5zb",
  "key19": "4MbSB9LQDbmfhmGvLGt54dD7gGsRouobzRBmhPBRpJKhJJWZydGsZ5sPgp4PUcmDL8xV6Xg84r9dZfW3rHTDZhV",
  "key20": "2Fbj2fgt5nU7tH97UhqZRGv37ybhx7H79Vt8wjoEJE65xv33uRdHKzFE2eUPPXrpLHmv6UG3vZeBLV37XgqKRYq8",
  "key21": "5Ut6V4cnWmHBGY3aezf3FdgTbwmSAbAjsNenuvNh1ZXbFEFukansiEbFMsojtXFvAgAaweh3b42yTknn43gSd1AS",
  "key22": "5zhqoPkyepd7XHPPbMqoNoqgaExXMWKQghThYhtJ4JhTx9vB1hiYT5MzAeEmLbiU7Ab3Fr6yh9oARxiwDFAvPm1p",
  "key23": "2C7r3dZNaiCoMwKfV5MbnDkk2kG6JkJxzNkrWhcp3A6e9oUrkTugoHH7FZj4zQdvzdQZvdfh9F2V5Py6BkYsaii6",
  "key24": "DApQwpcnXGX5UEK6LEaGGnzTydCToVNCTAYm6Luf9vbUmEq8YVVMepS3e89oW1jsos5rDmunvjmZdooG88VrFfx",
  "key25": "t4odwqzxPCUCst5W12q8PogcYDmuFnX5rwMgMFXfVyr6jvuFTSYH53hfku7zFeJrpKa8KaRHo8BHNNZ5PuxXPqx",
  "key26": "5dMepdezVLGGgRZAVu5MnfRMxPBm9TnnsN5ukZcpzsNvCgL2DBQWV3XWjTxj6FV6ZoTjuYyHGwu2jLjt3mWkp7YL",
  "key27": "oDEn5B8pYevWbuuqojb9pnoHUzbMKmKVzVeZWzLRFFQr829ax2FgkkUskdrYLwvLwQJY7sU8SGpQNfYoTKpuBJx",
  "key28": "3qAVtAvBUyqcu6JerPtQ1jGBym7VgExfDbWqrCdTE2sGMq7EsP1ce1eXoyCv1w9Niw6rdsFqecLUk6Cqum5NFqME",
  "key29": "3ZsAh5w6sr7FLTsEN6DBdfnviDrVJxYLmfQqdvAsCrk8RwScGkuThNgBr26aWgDysAkZbMs6YLE2e1PTkVnYSLHF"
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
