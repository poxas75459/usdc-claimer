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
    "2s9L5TeWc7J6mugPPQiT6i3fuv1qQEdjMXY5imWEP3Z65yg4UBg311CStg6UqnpisDwMJpLUBqskJe5GqQSad1FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqXssd7zMmqceGRQgeZcFDBVDrekgBwpiQduzq5emxeZs2oQiFNxo9PWbwHQb1MdMdbUh3LVjsMcMKmcn69Wmcc",
  "key1": "518NYLLmeSBPjALX6F1WB9nkTmP6SgiZJ3mebwZtitT7UbqqFFhYFU1RFG8iBrfsmhNHxTMu2KqM6kfCeP18wiPH",
  "key2": "44BwBFQpswCgSWqfUrN6ydx5wXBnFcp94nW9phxHAR89EMShGb8gaWrZVVys9fUWxsaQXWSm2xHA1mPPNcopZQg9",
  "key3": "4pYepgxDpGzMofNNrDEzUZvCVZpdLERzhwmz9P4uJxxWv9dttoTarrj2xmQ2QJkas6V9EfijA5Yn6eJjmnnb9ZGR",
  "key4": "5p6txjweS8J94vh4BWwtnP9zYgCyty8uCbmRKjJf6NbDZWmDqQVXDKQPLaXidQra5ii7zpkqfxtwkTJDYTqLLqvy",
  "key5": "5jpMcPCjww3ka7dQ848y6kRJTuhtWA1xoyLKNPMxyQwkKK4EbzezSRJNvZCaYietFy3HdPZ6u5XAFsRX8j4AkZ9Q",
  "key6": "4ZJajhUyujiaN1AKGqj2nnTcZjrRSGdghCYN1NGCu91psCpgSiD4Eins2H5vmPKJxwRiZv9AeAwSVffNgaK8p7Rt",
  "key7": "4vBkZLQJw8QudA5jEZNWprdri55yaaKcm4wUVfjCXYCNQMUQDubhDBZtNUqJoFLwN3EmhNnTKNPpac9vTDp4vvmZ",
  "key8": "Q5cBbBySrY2NkEEzsot9rHBywmsduUvJDiFQQ3bGZzPJmNfPChA7d37Z5w7gU1YENXMi53j7VqFjeKLjKBjCRGv",
  "key9": "4ZiHaMN9K96Xf1uLawoYUcPjvLVAfKHQ5RVz6wDeSTAzJwEuCn9uY4tvG42cAgq6ZYhjcfyenpGpiBWA3cknK2C",
  "key10": "27h4XvRZYNmxQmeJxy45E7jzfCHFpSZutfJysQckJ21n2Z9i1WaRryR13zZAMGsDFEknT5eGPPqFFLjF9rgZGaKT",
  "key11": "5k7MiLD8hnniaW33Hc4PJxMDoq7etM15uj9HgvFLKrjMbxsvnHR5kUrqTiybf6QxpSLwTuwsLRNp1UDNWkVbo7G7",
  "key12": "5pqA2FSmDKtzUMPz2WEFXd9mfSDv4Taoqy6PLFyhueN1dY7G2Gpfb3fVbnZPS2HSZKYX3yFdvz2fcSHGMGSopPei",
  "key13": "5EPZv26iSG364NjxZJ3ieyfw4e8Ct3eKrGC5m8qYL9oYzwEqsM8YB1QM5h74REpsmAJv28QZ9WqwQiNZweTucgK6",
  "key14": "1grFWooRXdM2LRR8V7Y5QYqYetwkzjU88tE9D7ouTj3SEGd11ak7e9cTgoWrzwErc2K88974AtbRPhuTNaQSqkA",
  "key15": "AJgXcHVo4Nh9QoF737EVfrv5ojLAUCKUTpb82Edc1t3qdkeW7srarip1W1iaQ6QTU3kMeNzyzrR8h6eJhnqoY4a",
  "key16": "44tujCnZ9N7j1mF8KYnCAEHThMLK6ccPLGgfkAKWHKUe6o4orGtG7eSmMsX2iGcNB5gFUKQgZvkqmWGLo1kzav6m",
  "key17": "2W3z7PxjdG3CQ31NYwr1J5TTNYLSC1gpz9EzarqxG62JELEVzzAy4YmN9K1PrByiD8DZSMBhcGFCUh2SPxr3pLVM",
  "key18": "oP8TjbkCRhfZPXQZ5HLN1QqG7kiJNyM95579Uf3MVaKVUBdpvCCbdBfLvTfX2HQDjR39hX3AGNnYdCBwmd2bEdW",
  "key19": "4DGzrDFLRNBMeG1MGpakosei5dovmTrcPit3DeXCNQL4X67cpiqbwa3GFR6DRbJSe6JVhXWD4jBu1XDd43ugXfUC",
  "key20": "GGp9ufTxWu8FKUCCnKvERRRLNUeXoAkmKWTqgDzZh7iwfK8xq12qkc5ZjqX2KudDHeExYx61kYa2MDK3vyGv9SF",
  "key21": "47mU3uYdQgc2UTUCW9QdywLUpJ49jCz4S2TaYK5Rz2UCD7y2CA3ftQzSoaXsNeQ7m9c1qL5WtH7msde1QBx1Lwgz",
  "key22": "RtBKSso8NCJijVDomy1ZE9nJqLgro3oLScurtAwXDAz9VpYbsExDTw8EJ2X3uWAirwCRF5GhHRA3Tms2wNC26kP",
  "key23": "4bkiTgGeVUxB1HumzjCT7Eo2ymnN8W9PPgMe3vvEb2houfvqxZHvozW7NXjsUEyNGrxaosKyQxoercmUN9aQKbKb",
  "key24": "29rz1jYUt9tcfZ5TnKc8kvZ48tZ72aG2DNvktN39Ph5DyG3umn1WErpUKJbChRFEZfa2NUankUX7Wj5aQ1TL6U6M",
  "key25": "54UpxMc3zDYwH1CWsxX2c5hrf4xF6x1TMB9v1AVhPxoDm2mSMn7tQLLqFKPmterXAhAaaRHaD4BDuYEgyBFiAuRD",
  "key26": "RfAoi4YFNDjbzYd5eXxJCsa8M8MAo8azzR8T5j2x54SkPG5RewBoFfkQbQ8gPeEzL5P26gfDWX3AfMokN8FH1V9",
  "key27": "3SPyGTCiL1PjPMF6MkPgA7cKKm1iGbavXWAaAcetdxavKSBYdFqeZvzCdJDCNjLQJd4uCegq3zh1APgGCFu1bqYv"
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
