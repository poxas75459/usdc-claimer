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
    "3R41Bqhwhf9qcFVRTgNYB7GWNfwpaz7R53ekhQL9kF5MX5K9Ekq3263NbuMwTtRc4RPSe6gMggdJUiCrZuBGYh8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCoxGfUJnd7TMVB6XepuhWujJzkPq9w3WdMD4KQwWCbZDeGNk87b822eRnD3CN9d8pgh9VrgCh8ZED3HGiCtJNB",
  "key1": "5AiYArGxpo8skE9qYocKBUhVwnsy21kunbaFHjAhEYuoHhqf5MDTZc3Vqd1qsmt6D6oJyMctQu4G6WrPGmi5e2wX",
  "key2": "4pK8c2269h8mZvnJ5AGxRVvUjvwCyS6Gg98hc1cczaMRMHeTAQHHfji8VuVkvPQL5ha7FmaQqexkUMW5nQedNmmo",
  "key3": "2bKndmFySRwVzrzM8zkFW13bytLnJud8U7jKRnAVrEMFefj2ph9CCDZFA1BoKWshPzbDeFbPD1R5PxZdbtFHvNZF",
  "key4": "2aj1BfndWp5sWYNFuvSQuasrReskvMMv9JgLbfuX5jSDYLukgG5ATayuc181WzLY55vcYAzDkv1MkPt7LSe8RerN",
  "key5": "5JFcn3eESi6P3drphzYXDgvrZNswqULDf2d3yVDXdYd1w5sz92Wwa7pStgkcFsW8wLxRhPrhhhnr5bcHZthzdmRc",
  "key6": "2xE3GxLmonYG9ULR1USYBrurV7YVWfZvZy9pXBwDdPkcMpVwFWUnF71dktXzdP2D5m2e8jfpEmaVFwPLxog4WDRb",
  "key7": "AaoEMyywz7aQbbQtbG59pKqbD8ms3G9LPQ2nnzNYPXN9y9hfukCwJDrZG4UQbJxPorDRatTfxfgUw8PT9sLEtMD",
  "key8": "5iHWmABq1PXUpE8e28cGGtxEdJjL1Bxz1K1qvHoLzYGK4LHmcG5y7HatZzLWHDPUVtBhefnFVVAFJtcmwgqfWHYt",
  "key9": "3yg1A9P9fEvcy74DcdJRvVLw7bT17nk4LCjJ6uqccvTMWWqTLPegzkgzYMvYKJq9zxoLWNXj3iuiK2FfRvHjxoc3",
  "key10": "3oDqLh9tr9Vy1mkyeWMm2FdGhSdqzSTpoyEa7MtRAyUvwgDzkguMBiRYFKmfKcG2ZGmFE8B6gQmF73juRoTG5Brr",
  "key11": "2RaDtxbZS8zotcyK7Di6SSf6eqw56WaoEzH2zthQ1QmaAnVieiiNuB86QPkgKX8jfNFa2uTq8qNbWe6KhnFLs9iX",
  "key12": "5q62NU9CnS3QyMkSqy554knLgEF8TNmnsoBNBqtuRgKtAY36U7i5RAQJXgdFvdQyhRkSMo3Fvbmgs6qDKnmeW7L1",
  "key13": "4ZcNv4Cc3aGvjXw84dhgsMs62JxtfFAJHPZzGDBvKyaS3dDrHtgat56ruUVZwWGDruYwtuMGTB8EMHFnjRxGAarN",
  "key14": "5tN89udemuFaDM8TXELE5UgXcwJsWYzcDcFLEFSmqrTis7Pby6J3oYyNmwwduhGALC8KPJxDmsVavE14nJHmzHtg",
  "key15": "5FSm1WnqHTeadDM8vFZXde6oKmbLc5fnicpT4T3zpH7tsi52zPiUVedL31eQ4ozTKVCfVpE3P5eTX7akc425X5EN",
  "key16": "5a5Gq2Nq3XKYpStJpbZzZcBz89JL2HNVvMSHcxTzg9NFGHLggXSBHMitGTeYFc7NMTm7GD4zVmoM5R9VSc713eRF",
  "key17": "43YiAvQ7VzVYmSjMWFUcFbETQmhV1j4QnYHPLnmQbCRHNNBEXSTMToA9MwzWA6Bvw7AdJtQJmxBoYszb6XWXrw7h",
  "key18": "524Mk7bt8pVCWzPVFrySHg9HXuuAtDVYRDJYVbrcZ9fJVFUq85qTYdj6wU4fieSGEgpbPTHbQnznVTysMPm3WJXu",
  "key19": "3uw6gXmuqexEpvVwUhReHePHSM6qUSnB64EBmAqcmLGqid8V8BqDU8LdmGms8gg9LbJ4hLw2NeFcmTzyQH7fuQAZ",
  "key20": "p5eBe7cKVpjFK2LzVw6mb9Rj6vWb6Xs7zAMxd2R2yZAD6KiUVcEPBQLCjMEpYThsYP4A2oDrW1gd1zagFDPnvaC",
  "key21": "3Fqnn6yMnaUVPAgo7GN39FvYLfca6eCqCckBaoRDx7NGt6kBGzFfMBKXKyHzTeweFrjWkqYF7QFQCGCX9bRrLbNA",
  "key22": "2bhZUmyNPwJgGojARhSRn6MxfRB3Ftz6RFCd9orQamrqAXHS3pRwneVzywm5FujmRNM9rhCWKZXbQ61auaLbHdZz",
  "key23": "261MXj2cSEPpsWPjqGuRgPgV1BGZ7TGU5nidZuGhDFHKntW2FaTDa92UeofgMxdUB54TRgFNa9RtzjwNeG3phWvb",
  "key24": "3toJy2Kg81zuvxroJUTQBbrCYpumNWGo4yvjyXMS4uceXkSEDaN6B1ESARSWgFfrpBRivd3gxEYrexcbNXqHScon",
  "key25": "3Nf4iQQhkQYCMziHLyvq8ZoM4QNXdfGEjpsGjRBU5RCtLYExKuqztibdDAdpSHGyNDfTwTzLjifmGYcggb9PUFcb",
  "key26": "4d4FKiTng41aszhVpLWanwfxtwDgjL8FjcFT9JhUBBrVMCYBRhSyntysXv8GhhCKYgQSuQXs2AyhUbvwwjCjNg8u",
  "key27": "3UVGGa8cZC73JDUjT2uErqsw1zPgtzt6rES6rJ1K2jbGMYBXoxrbRduVRWDHahccmqb4YeQkHzq5xRBBQWCt1btv",
  "key28": "2SfZ3boSnwNj4JL2fHEqwJGGsHxDc53gRy7ivTS5kP5eHKgcbGJBZUiYdSLvKj7M3hn4qo2RpCqgYn6yAnZAh4NG"
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
