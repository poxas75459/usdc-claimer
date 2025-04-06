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
    "5VhkWeNQjZE2s2mT1xLDeP2ZNZn7TBcebedN1yjYNzuqZRUMcar4gAsbD1ZkCQB2DoeSPFRBLaRN2Y6QKm8DRVkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1tMJExGQiUknrSDdG8WwAYK2s6tqnJEayTfRbLWLzyrSV9Ks1Bi7X5eGBubw6uaghHdRE3ZWSzhedBdZ5jSxcb",
  "key1": "38Z4NHTjCgaKGq3dMb5eV2gK9YjEefPXreN7eU5iimTp54ALjoezB7feWcqtrgwDZn8R8sVhcMgRzdfj2FapDcR8",
  "key2": "2sgTiqmuHrRGBWbDUc6nqggKmAfZ7eykc3dKRsKQeunr1WcuBjcRsmC213nZQJTGnFKecJaxCyaZbcATDnqCtWnf",
  "key3": "4HetPsfoAqB8t6u3sMVkXWDHshnQb71UAugeb5FtKmJr7wQiGtp9r16jRGJM2wSWshMbhtZo277qNsqbkep3u7fv",
  "key4": "hmGKHmLAwJPBRD6ZFpqLpTrrWHpayZiuRpnqJgvo1xZgj7SBnkTAdunRiVNruDzpXtjceGUoZiTsqJPGTrAprvX",
  "key5": "2DadzpGeK1ytTTerQ6qfWouypaJHMGqwZidqm2G3inh5YdviHen3RJB4YCvrPGsvw2ycnMFWFk6UWEVVFQYaPMSp",
  "key6": "3UqYeaNWZjy6MzyzUX74rroHndfrVwEZvFW9FfoixSZARGXzJXacCo4NCpmxy6xyyt1HMfJYVsoa54sMBsTKnwfi",
  "key7": "TRFeSGeGXiiNu2GNAEJagz9xiBx5KXV7uDzcwxiXuyAb15q4TrLrRAukQAg9fSusFZhs6jpUfTBAFRZbRzbeV2a",
  "key8": "4ss1SzzMP32afKdbG1JLSLAHnHchRXjMN6LodC9Xf1NCeztDcnS8gcDg5mXv9HcX8QWLKoCv3g9PECdmfbWYzXmF",
  "key9": "5dVZqdSutQRi8HkWFSBjAqECCMxSoXSzJxAyNLrBicSkmThZMMEAL85Njkyx5wDSZcPZxcBTEcnMRLGZW1iMxmAY",
  "key10": "5WLaMPtYBGTQhawkzBANTxq8xGzY19BAFV38cZxZCqNP3gRYKtSrZGMSV97yffmh88V1SgWDjRnPA3RNYAttcKKB",
  "key11": "5sV29e2FSaPK2amU2G4aNYNttUzr4mjUaoXHdJoRTGh5XJBQNaTeUy8WCXZQTDmAfMKyS4gYTjaD1d3oaYSvq5Rw",
  "key12": "2qNNxVxGcugbNbhePEWAvwatbLV8AC7q8Gr3WYRzvjnDtQB75NNPSb9TEeBtqkeFwA7gT8kehTDvALY8SybxSeZG",
  "key13": "2J5v24rkVNNz62Swfto63YSEFzfCFEzVFgAg2sq3YgfZZCiR7pPVPt8f1pWdMFvsEzLmLBjoj72n8NZh8u4eRm3t",
  "key14": "wCG1EAvaX1rXDrnCEKhTGtvcgS7ssxfnMRTFYE3mBwrBN3oFzASheR32XgFSt2fpuxLPbm3EHXJpCeBnKH3SHzy",
  "key15": "JvX1uKqEy3s8hUkxf1hr8LLbgbusZ8N4yNQwGhZE7zEGZmR2wts55Syuj71kgTK1cQ8KqECdZWYFiBhj6XoKpTX",
  "key16": "5UHiLC3s4L7QdeamWZC2yLC2nyMcP6go6ocF7fxLHXcWaNF7oN9YS1dZJJqDUkwQqJGq9CR2aAUpJrH2He4T2Xv4",
  "key17": "4AX46gQvqVrsEzVwnHWDUKiXzfuGM1eR9pWCSL2bxPWygXYfz9xgPypT1uJixdyuRW9RdycrLmx6yxJnh4WoPzGn",
  "key18": "3EBnBHmA151DbrZYB5D7wc5P32NiL94NFPMXwZUw1Hhzu5tMUT6RD24QzLNER5KAzJZGvBJ1a5jU6fFMttKwpVSf",
  "key19": "4ia41wnMJpeQSY9asrBSQTU9BMUGvs4tEEjKNc6nmN4nSus7YdBHBLNFEK5pB72EUrA8zGfgaWPUAYVkGc5amPYY",
  "key20": "21EMNn6iTB94LqeL7sW4ewAfrhXsHh8jL9Hcnq2qmXcoEwrppmRQR88XZ5esrLmsbfVnk4pUitAXRaMDvQAH6yVw",
  "key21": "eM7DKxamRnVhVriFABN1Pj3Z3agdpDe5YW2msHz5KVgudjkqoCFk7uJbFaamTx4U6PPgMGutKjEQij76ob98hGV",
  "key22": "2vSr9vdHvkXvFs91wVFBW5vfWNDciSW2xR8HqH8ri53G88jDqdz32Paku227f7wbjk8FcjnrAgFg7yvuyj9mU66c",
  "key23": "5P3fqf9uZAYCCKUzBa225q9EUTxPeW1Wdt4VBPJHw4CWWnJSStJvphRwdfyz56n5i867a7o4TYfBdGCtE5j8vmGd",
  "key24": "2miwHmgxgECLqFLGDqayEuM5Jj6vALBor9hL1ju18jmKtnMEqitNf9tPiemqufZipxyFGpyAMCXHyFdrPJW7uGci",
  "key25": "J7KVu9uG2Ku9G7RiTt2SUyEJ91z2jZKVgKqUtXy6fVpi8naZp4nTm3kaA8ubXNc6mz2i4zwLMEDdJ7isgUmvZFs"
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
