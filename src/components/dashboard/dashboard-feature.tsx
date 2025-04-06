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
    "26BhdpmayAssmE5bLJwCwpSWsFPDUjUUyr5QFvmyMajVnfrMcsAeJAVB9vphWYRnHD2Y9ha5aPM6vynPhsDci3Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZ12rEo8H4Ac7ZkzCs3jpZBf9JNMrfJmucbwTvZ8wQAVDNZFssPE9YkMhkxnwYC7SMKSV5tR7EKRnxXyBp3iVaD",
  "key1": "5MGj4zUHniECVuRHAhbSGQgUthQWmivCBhM4p4gTyD83z6kV2cRKaHgtuodfxpSVHDWjLwKwGz1g1ZtEgLhzaAUQ",
  "key2": "y6qzZx6sLM4j5gQDYSRbp9XGfqaCgmMj3fUGzmmWH2cwxutKtVDtAoiCXMwnwzwn4VKbKaBhx6Q4VaCCaW7q3qX",
  "key3": "272aTAUEsfhVN75ytDGMBrag1PZ5UBAUz69ydWBYnmwJu1oxwySd6ZnmomJqBGBRd6rodx69Dsy1r4zS1RyXVm8i",
  "key4": "24x3Pun22yJto2V9HwyJhdJ9iSDqJN3kfJdUUKaW4MZ2Ccgwkzfo41Li1mGvmTDgvsPPU6mt5xd5LQuXPGqY9SQB",
  "key5": "5JpyuTNKEModvnuEznYPj5P4oQn73rNx9tYAuxAGVP1NvRo9jFMADdnMU1nxB5hhRT56RVwdiXLBXBf4pGhE8NgH",
  "key6": "5xbT25m21AG47jYBYLFWvWcwhFuK21AhEYuA2hEsTYtx63BWVaXzLxyrnLu6uBbicjq8pPJjkPhbkp3aik5xXhCZ",
  "key7": "2tzguUtnqj7WV21XFF6LcMK4BDXw4UryQ9f7tJdUNEJBLnzm8nsVjZYTrJknLdnvY9AWzBEdWbVf9cUaeXES3j8C",
  "key8": "3TxSSZPsYrLDz18XG9DngMNQFWuc9RfCkAQPcAxz9R2rwNh2tgFPRNMemUFVqpYuBiD2Ky8Q4Eq62B6tfCPzifLb",
  "key9": "WvscutDqREPSeGfcUNKLDzr7opRvoZavHnvKt5is8yLNbkX5bsAUWxS6GQFyV1vA7iJhCDvY96dXKkkjkce3dVW",
  "key10": "65kjkCY5x7aw9tEKCquZZfLo8eXaTah3b5nfR2xdWhDBME16rx2DuVD6PKtFXLWAC94ZaRcXGPccf9UJNniGcNga",
  "key11": "3yD8a72o4aPNiaWSAdCLgBkKrLjzFVrg9BBjoQfu8wFEnCcdtAsgtV9d7oVYcJDgvPSbrTRdqULGpTBy8AmkWRJ7",
  "key12": "2vL7heuQJLCbK42tEmFBMoYDcxHvC2TCwNZ8fBHFDud1fLRyZUaSPgjTugpeuR1k5TsZd1cQMqyUAGSCobqb4Mxa",
  "key13": "5YLpxDP3TGSVUxCwT93wzKQj7cd1CAcK1kZEJXo2CauaX5uHhmW9DF2CTXGvWc81Da7GH167rAFHFrL66XeECQCd",
  "key14": "2EdLAnkse82SiPnbriZNBn6yvfejkSYJmrQseTGFypDeMKs2Vyd1m6gZqXmLXs78u44P9xFLgFodjvURKkvqkCVi",
  "key15": "2vPhD5ofSARvtuCeU8ZavrWjFGmrSLKSMAW7YKz9SfbEqBxMP4xVxMSq8k78DLyqmoD5718tmSNRjmJqPnVeQkwQ",
  "key16": "2nhzSHiq5Zr2pBLYEpk8hyJcFaZxwb4w3zc9EpnoYKSarpTEH5y5A11xp4Ba9rzkcNbor7nupYsEBgT7ioNHQ3xj",
  "key17": "5AGqGn6gCHvUFewR6kevz3Wdxn8f4jqN3jXjxLVA7qxZt2w7yQXTrnZHE45qvWm98udPRjYFv5Mp3zGorpaZNPXb",
  "key18": "YWgbbVXD3vFvyKe7Z1x4CYXXiDhF3XoFFbB24TgVsmNex69XsxKk4xVUzYieLC8s7LNuhiABvwJWB9UMmqQLe9p",
  "key19": "3jvSwAFbcmJwu9XY4MieGgwqHfmr56t9hstzjmvFv2DMFg2p7pKi2fetGBzdSP7W1CQmM22cDyUwjvGpQgeEuJPt",
  "key20": "HHPnpDSSFBJkwxhdyJWdhEv2QzASH1tAkyrVTJA2Qjvama54oGQGxraP5kcK4NBe9Q5iqtjkzZ5ncA9JCzmLvra",
  "key21": "NBr3Nt7P5mHJWJ4w34UQBofmR2zMgCAjhPMREnb2ahew7gvRg1f7eJKc7WDJj7ETmoN5UU6a6Js14ruu5CyiLtA",
  "key22": "4c8DfbZSLP2aWpiyESxCpdLGQ7btXDbi7a1ihe28gEkRrbujbGrDYkXERbp41NGeZLezSE8NFyV2abZYcogmsCCq",
  "key23": "3EcehvDW3HfidQ1mri1ZLyFbA2BdmCjfenxw4KAiLScXe19iGWR2RnzvQ86wbyrL4anZ7V9bLz5m6JNmukqMFrnx",
  "key24": "fvZJjyfXbHEEkzyNUv16MhKavgpVLCq7AxYxhAy4c3KN91q3G97u8yj7AwQtvV9MBVdybsApexHaajxSmoaXfbi",
  "key25": "2YaNGPPmtpjQbNYB9iVm7QXG2bYPxuVnTYe4J97ncwAjReqmcFmXWy5tQvNqHPRUkHnurBqK2iBgmphQJsJ81YHK",
  "key26": "5R8zsEcHnZxBXFj2fT2AamNxbqv83oWrjwJEX9SPhx7hxuvZM9V3PAufdSfPGPZEUFst9HiGj7HiHXfrWbUC6f3x"
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
