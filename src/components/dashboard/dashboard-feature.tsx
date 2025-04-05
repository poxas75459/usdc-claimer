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
    "4cFE7XCyY1S7RJY54CUtesPGdGeNXJY8FpNy4x8YM3BgdDEdVDzc84ycmsq87si58QYpg4HYmPt7fwfjEVCwkkhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nMH72FxP4W1jJVjabFU6r8qqvGLygMLFVwq8AKsNwvjeJaEQRAEqWMdw2jBNvp1SoZfHqu4oaeCY7tHZzVN6TzC",
  "key1": "63Vj5kUHsyzwXErJdhmzX3cZmMvioqD5eFYfx78qEtwa4wtQM9nQ6KfBuoSxvZ3VfBbjxTThYDQnr4dM4AJ9JEot",
  "key2": "pYHqCzC72X6sMTSPPKqhmHQP8NseQcFEcPW2kPbkjE1gthSShawaZSwT7NVU1XzuFZBCYtwQvetjpdUfBWr58Bu",
  "key3": "45Ne6ChpAQNzSLNrwJoRugFyz4Z3151nKo294147Yqdu2D6eszTCHMNL6BDmPMmhfhZBSnQiCU2g5LKYgv1nqmW2",
  "key4": "3Pc9LPHBziVuHtWeRzU8RZB3BNTvEzemdGZS2opdeib9fanmbUMEb8y2C2qxBNY9sSqiDxCk5EPC59vXz2diTcMt",
  "key5": "5NhPUqmkRekpbhpzQmeeoLKoHiGPpqZmkzJcbQrRB6PFKykkawdryEWg6t6736UbcqjaqqPfo8kwvnvFyXSzyiv4",
  "key6": "2v7PvzCGYdJKUjWo6hR1bP3uifF7Gmzar8mX9kqAW8ue6G6Kx7BWnpf3WUV1r8GpG5CB16NjDgbWdeWnxyHjBTCr",
  "key7": "5QVKtVLApLNk7uNSRTnAYjzgQ8ejj4cZJZMPeKxdSfW1wzNr6XLLZkcka93HdFZJqsDJkUP5XL9e19pHgsGTQmvM",
  "key8": "3y4FQ8NRdacA2cQ4G4H1fSumXFXA3uadoH3oc8hU9Lcb3aS3VeRHbCynh4VdWu6GBDkau6phNCc2Nk2rwED7nBss",
  "key9": "3b5c4zjXF2r5oqsrkxYbqdtF1RBLDkMYJB6XQ65yKSwB3VRMx2vAgfBwK7XQoFpcky2UyH7DXycvsUTJK5b1LFAm",
  "key10": "4STzHkzCgw6j4Tc4SWZoRfSUnkJBkH9LtPXn82cEow9EwudjnDcWuCuMheCQZwWVskAGDcc7dkabAne4G67FFzmX",
  "key11": "4qFLrFNAfwugTsFnKR3AGp9zLeRtPdkpXd92FzbkBb5vdWqDCx4VYwqWCN3hFzjABePZp2CWndwSDMDusDjf6634",
  "key12": "3sQk7z43qBPx5t5jd4GFxT2ZYmsU8SYbLQ9sLCWyQA47h9quBzxqSRbCfX5Zac3e3iJooLj3HzAMtZP6vUuR9kYi",
  "key13": "37iiU6NoRtWEQLoAMScgb9cSDKRXn6Ar8dDfmHQe8bFuzCTXFvUnmkxeFvmxMBYK8MrrWC7dABifTwDis2yDVXi2",
  "key14": "43UqfejJsLCajfn9UwfknjHopYMk3diDRV8SSuFtPYqwXUgkmpChKrW4VqyPcECmeH8XQGw4MiHyZovJRj7b5MWL",
  "key15": "5vUt11cJyvscZSpanmoiEi9prkmR1zDtgDN6jRuPVznV5DnmdWdVRBkPxbv64hE8tuV3GDN8Um7Hur7dAEgAsdYj",
  "key16": "3xAKNnEQYhKKTihUACAejsgKg9oepCcR5jKsV3SQrG1z7eTTtMAdspf36tjKdSgo14x1SuTrcyUfnWChTJeUdesj",
  "key17": "2PRkoR6vT8Ym9QxZTbFu5SdazgqcX3UFAZ36dwoaanu8ZCsgx6B7qXbvU59cEDiok9BNXuE24WHiYSfbjxnCfNk6",
  "key18": "3oBik5t9FikSrY5eRbG18G2uEzfYBd62kgjyZPvrZFGm4FReWJH7Z37pToNKDHkosN1x2hRywRfc5XVDpphhiRjk",
  "key19": "2Ecd261KeDJKDmEqabJdBv9fDCRgEERaJjsgrqDtv5CyhbwJ3pM9LdkNV1qUAxMayY8c5NR1Ydrno5xKJJE1szSS",
  "key20": "47htx9ZJYy6mU8LgKfdwTb34Q7J3GRphvCpbGYbdxKkRYcbzoPk7buR2UPYwY95gKm374t2Jp8v4bVNy96vYx6VM",
  "key21": "GiDDHJEDhdzHdZrK4CzJMTyk5Vw4Zzn4YXGiARk5tjfXYxkebqL94PjWinzfuhR9CeHg18Kr5ihcp5S9eqV5VFa",
  "key22": "4MA7q1s8QMgNGNk9ef2PU3z8hnrJRisdox3bFMUAtJHVzCdJifChrUwFvi3jrFXdxrPgnBA7ZNnZkRcM7sJaBYrW",
  "key23": "3mKcsmZatwiAxLfra93gEJsA8RwkG8eVDjQpZ3zsFW9nxwknknXkx6mSqoDkysJo5aweCybq16KeGeUaYaFqsyuC",
  "key24": "2P9nfXCPvYuHwz1rPDFZ5JeFqCn2ecgvCrxWebNU835cQAMgP24Z4zk7khUxmXpyfxUc6YDPSgPJaLYz4KjQ5uSj",
  "key25": "2aKC82ppwN6w6UrJX2LxAPe2h2MUPRSNZhmWneJWHXax5tiJmut4pTHemRR5Gxmsp78UVjiFizCMC61q9kytRPSo"
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
