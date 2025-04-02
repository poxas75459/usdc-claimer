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
    "38rERSgJmZGxjbwWJdhFXxdgNWVrng7cftqfcxPpt2P5JxspAwJhHubfwMgPpkYC8DFqGYk5WB4icJJ5Buxj1pWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y58UJruwGfS73nr5jLuojyD2kWUnGoFc3tBiiJeRqkgWyfDDt5ordZciAYm27at8qAExUjr8CiP2bPVXuMwRGs8",
  "key1": "4HXNhw8nWL1a4NNbNGeW1K4px4iAjdCq7m1oTBbSw6Naa1x2dWrKAAq71g4M4MZY8DxxZiFb8YQje5nKBU7iY9vU",
  "key2": "fThAQgf5FT8J3wxRkX7DkQWmZXHtxS78ppiPcnkmq9NuKKpj683exSMtbnHcb8iGXz5p7tbukeTEqN8tFDUheaz",
  "key3": "3JXdBYSbWimLqNoC6WqQAhc8Q1DF6kMmrwvAdN6wxjZgBjsWVQjKBK7CiZb8H4FJWWvDPvYjXKhacaGBkFdVf2TY",
  "key4": "8TQ8UfBaKAjEhEG8DYaRB3zcqsFAuVyXro2Ja5UxiEjM2w5gNG1iEMhecdvVihYmWKQZXJH5eWqFJvJmMj6TQZ5",
  "key5": "53BLH4VGHTo4TNLwxBqPA4p8MqF6DG1Gci5rdLtXtMvDu5fXhtwPJSX9JBMbJ3zFXs6KsGMkFSAx29Vge4bruUzK",
  "key6": "42yq9DZLNSd5bdNSfa7KMKvzBewRtvgPuVA6PGaJzjhU6HpAt49DN3e6LwMioReKh7y4Ycuzb8FDom2Actg6PwpN",
  "key7": "2yCSbe6PFApaqTmtiNxZcBo99Prt8MQTU8JPVMRq7nsWe3NzQjK6xZP14h4HnrF5REFBJ2Pgq3DLATFK5GNiD8dk",
  "key8": "5gojx6Ah4EfnCRTxuoVCBW3EzUwX2zpFg9xpuycyQtUckcJ6mZkSqPbRxoPYGTPJgvzgvrJW37FQjdqpjmSNfGFJ",
  "key9": "RhucG4czKmz5UCqazFUG5a8vJH1afdVNfoLBKysEiPzCgHKE3P1BZW7cT3rKro1kYaT3mmnGFR781ZRDpy7tU95",
  "key10": "tte9DnzY8iudwQywokcyWyudVGoT9Khriz8P8cBSPwFSa1W4fVeRRMgiYTdgWGD1AgkBoZkYtHssXbHsjVv7oVi",
  "key11": "5DcDfBCjRLrSZjSggvxG5qHRTf6wBPpJVMukP3AyGLTZeTqmHicE4MS4hic5DCYM1TKQmj7kiYMG4sN6bAukS9hz",
  "key12": "23c8uN1CJCr6zyVFc5cuQLWcZV8b7fhfyTBsaDh5bLCvSzZrf819jyyAWTbLUnqrxa8SFcyVqQeDxvZFPbEpRALn",
  "key13": "4HY6sytat5xNrpLFV3gynY6S4JHxAGSeL1WD8E5yVa3fEGmsDv6yJjT6Xj9n39hYBxDiDEeiD4gYL9YnaRkBrZvZ",
  "key14": "4Cw8GZun4ks1gMyhX1MyZQ7n7rRjLRWhyCCZyyvBwM3AqQjzawKZqCmkTt2Y6QNPQiXYrkgXSVgFijroibUNnTw5",
  "key15": "3y4Qr7M9SFNeeDvdJeeqKMLtPLYz5ErDutfrxoSCUYbc4nraf6hkWyyVpUfWzkpA5eMuXsyqaAPbiz4UouQyx9HX",
  "key16": "2N9zhyis9Si8t4DCs9NCT5jTQSvK3KeN29pNTQeNhQURyMgF8GGDT67W5db2g5eNEUTwKosyn4NTyG1bm7Vwcpxo",
  "key17": "DTUFyxJkxWyhBeS3JWCBN1hnD2zJ6JyjKkGYaZCXDeYtK4ZtVha8uYiHkvWSzGuq42qNYCj7VwYUSCADkryte6B",
  "key18": "37suUHUnLvNrNH9izYpykLfhY8NF3JPNApaACa3QFfsezFLQHX67drj6n4pfdnHVN3FcwvDYdMa3PbXzdtFafVd1",
  "key19": "uq9mvuHr7pimgYVpb6ejfAaMQjbLa2eFQ1guWrZT8gtUxRDb7DpPPJwB3JCYKT6oFNMKUZZtKVL5g7XLre9pvFc",
  "key20": "5RWrUcBfFa4da5vG3quvMpFahJYkAzX6rHWhWapqnMQqvzswuNWeiJybQ1sd9CiNbEz5yunctfmG5MV7nXcZ6xvK",
  "key21": "M2hphchP5YuFYnxRdyJzZ6QDasRojDEwC4K366XS2deCXEyS9Mvoftf9VxwnnkUghd9SrjAtrpeFu3hz1koC6Q3",
  "key22": "66oJDYg4ki5v3HmurJmUELUxWgFewAwcTNh9jmt4JKBswKAAgMwCF1pktCq4A8nXzs3VsL1uqk8yyUFmWeKQdQFG",
  "key23": "3QvDsPRckHMTxi8kQRRpbdpBMkKmLJGWeixAhed9ph1X3LKm9T5FJj9GhuwPwuYkVuLFrJgSyZ41wN8184vNjWKy",
  "key24": "4zw84B46zB789g8uUkwUHeRERP9xxHa3KBQHaYfyjkMAeq8WAG8HJhbX3Q4pyD6v72zz5RCDhbzrzcbSLZpvYd6a",
  "key25": "AiodRETKrxU63hxqEnoPBZpd86iCNH6xQMgQ2p5tSUUDk8yBxDJz7SqfHp6dUz3ay8VMNQyFAmqY8Mt1Hok6wDb",
  "key26": "xDCEgjgG2JKRrnCECPggZcw3G6e59NaHactU2PqovPVffkfaPpBpP63qHqWSesSMhLVA3bSsRjCUT4SgFTUeHvp",
  "key27": "4dv7k8VCeyS6xiS12CcAuQqWFNvqgkkUuAfBWWSmhruEn4FUzSkgKKMSGYDxXn5jaxTAqHX68QrGeGux2NPXQebX",
  "key28": "h3Ff1wBQfVqkKCd5UH4xzmAnGABLWPtyvYsYHMhPhBLdKK4zc1X5GVz3jx2hx16ZKvNz38CnEANjdKVRk8D3f6U",
  "key29": "RcVxT7dXU9NP3VHwSffdZQrcF9JLEaS6Cvf16Ze299d5ufjwaK5Vs7fSc6ZUg3FHGZJR5VHKQ23AXPF6ighiuvf",
  "key30": "5hj6Hh3WKL9DMghJu4YGrzjQjUY7uYopEgzF3V2cHPBuEKNVhC79m7r8PiUadL451mKze8WZp142cpj6e2zCtBiW",
  "key31": "5oxH9aTeRJ46mnARWZNdgx9ThvwyPHrPQnngKKFPKDBuR6nR5tGVU5j5bQehtJwawLyQuUyrd67zFo1hXg8vsVmS",
  "key32": "5meUd1GwUGqMxAdKKGtgavJ3E2YGEv3K27aAGvQX4EX3Q3N97XyNcryrh4c84WVhkoarSaywPJ5z31dtGwUvM5qX",
  "key33": "28FXcbBfMWGHThL9AQwpsX3KFspHj3mGwXQHXKhbE3GpZ4y2xuihQz4TFmrixhhqfPyuwTadqqHCk5U2YAX9FDB4",
  "key34": "4YMV4rzUN3KRNvMTXnDLti1ymmZCCfqxRTn3hSkR9cXjW6o5sZqEos2yumvEPrvwUMrU5RU9sMkGfk2xUaM4mCSG",
  "key35": "5wU5EMPFQSi4SFkXHB5T12j9VGt18wxhrX1gkZCHqC7V3BHyvCuLrFe2ypkpi9tP26uXgBiUu9dfu96FV1snBhEU"
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
