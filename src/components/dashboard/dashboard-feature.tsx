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
    "28Djpbp2r6sFc7TqetUnUD1m2wGDtgzLauSmG5V1mKcg7MvPGLexQQreHrsD647dy6upKsde3gURg5L17Qzx2cVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GKZ8P5BBsQKooz5FPaDjiDsMm4oHKmYBHM1jbZeNeo4sA3v6FTZSDXdCbeDw57CZHtQVduz5u2HfgjCsefGkEiE",
  "key1": "4YJGDhTfNfpDkSyRTBMUMNXcUc6REC1PEHuV36FwmgMKb8GA7VE7TsufESXk3UNukLY1JoDwotss8tNBce7pFXum",
  "key2": "54s4AiFPBxhmjPV15MZr6p8Zz96v5irfgp6GB8cxXqrQRBxKcJnUvnryjWU35FuSqx8ifkuV7SzZZPAdrcPksRLz",
  "key3": "36M5nu1kEF42qv3LtnJsaAFDBfJKJFUb63VjeMQ34dnSBqsJLdrTBYm5BQ6oXXB4PJxxYB28rFxduo8dytq2nNHe",
  "key4": "3kCgT179xRer3jRhQYr75YemD1KhWgtC2NViS7ZenkLucZprD6eSayquDZtKE2RUJV7gJBBE8f8niqpGJu6wV1mE",
  "key5": "2aDzjhPrDDgzfDqNeroiyGaCEAxVeDG7xdYmG7a6mJVyP9nEeFW9dKsp4DTDT2FWczSh31d7ntyy9WFzt9fzGGVP",
  "key6": "h6oR99fxbmN1LAXiXnXu3VN5gZNwbPs1LtHGX9NTvX6JMtKsgWqxFzDDTPFAJALy8whQM9SdSZ4uusdfVen6PGU",
  "key7": "zA1FaEisPGC19zNa4iwW9xFqUsXEvPrnyb8XvryimffsxSRrv8qknhfuL4ChNyFZoopuYjYhhyPmHTCuMBcaygs",
  "key8": "Y3hWTgb1y8z98GRN5G7WrVmAdemJ8iyxXxShT7xKZHEjkBXfHSNbPaAfRB7DxNmiFxANwjPiRWV1ddq6PbkATrX",
  "key9": "29kNG2HywjLiTKTZLjJKVQdyG2zuQf3o7hHuRAaWQ1ULD9oujbrsvZdJwHSQrW3v1KEdaKyAFjhT9KvPvPZcSKMP",
  "key10": "3WWFWRzV6apJLTcXTfjNtG2B5GgAwRxanFnriDjPRnNqHYwxipxrz5pJtbobaMaF2UQzHDA7Ng1iMPTCFQ2P2h2B",
  "key11": "tz7udi5RVQXxNfnm3NmsfaWB5kXwTmzBSQWY2KzU81SQZoawTZt7eBEwgTSVUtzr3jYk2p5ZaTGBGSQeeAWXj5o",
  "key12": "5zMUGVvtinjEKVNt4a44akjAPNJeMbzTSQBjSG3b73Mj68ixqoEZv6AyqqSMPMnZXNCTsz9mF1AMhuvcT4REu9Ea",
  "key13": "3TVfxvmFsSYmUuNL4mgfN3ZCzM4CF7FW7qDfvvu2qEuHLFQdooyC27zT9Pjb4VmkqsaBEwUm6jXkx3447r2NKSkA",
  "key14": "5hm64S6WTAsSZFNb2U8WbicNGsDpmuQbtc1WM4pNux8Kyzw1Fg2YaPkkmNBro2fnyBEfsCVkWwM4ZTNPp7vmwCsU",
  "key15": "5rKoieiGJNiWDiZwpus8TcvwfW1CWD8fEtAB2g6FEWJFmR4Hb3TyJVzWbvntvCnyDcyD4gDmCBXD3qv2qYkcyQj9",
  "key16": "4pUMm9fZiDAx8PoXTi9HccWHM6PD9vgaVJ9Sb249drf489i5RCmvRXsosAtWHcb4Uy3SrVb3KXBcrvxq1HgNqFnc",
  "key17": "2sCK5XchG25JTW2r1rycTrMP68viac7So4XiPDcCJahnDFHKpQUssDL1wDsgahfNSfhXvy34WhBqeJ4uoDkF6oAV",
  "key18": "4BSbd8x88XwirWuB5NC7Wgnb8Ef5PgSN82MNEymepj7gKQ7mSfRSaK6ysu8GQwZ1rZ6bCm6idcJpRPP1DeoY6U8w",
  "key19": "4mhK6REyw2WgC454fddFbQVahoSug9Aasp7MQy1H4zJhK9Tbevx4j1apTs3xKm58P8wxyFyJ7UAg53YVsDRK1jSV",
  "key20": "3NQuhDwigo1dAmEpGA9L6zKsDuDHHJJGvhdtGFtxUBWwTnjzr4u5NegToWVwG9fnwRfNs7hP877q2HuUNNHiJkAh",
  "key21": "4yHiG59ZnC1DA7WdZ3VXWyCC8HN9r187n6PCN9ry1EzWxrbouXW1BbZEBxzsbsNgFG58kcwbVmLNWdkJUnkikVZ1",
  "key22": "67mmaiJpyJPjoG81Bwsznvj4ohFWJWE1x9UKNRraqBAQ2DJFoL59BcyYTzyXTzv3nwFWu4yrYHD8cmHpYDmvNfV",
  "key23": "2Xs7C5HvivBtugA2cf9Da8DF9VgZhem1XzwKK1LDfcGhcCjjrVfuZowCWd9n9UEFbSUEtrYujCjNkVXV47rmFCwA",
  "key24": "5RopCFH3qThtRkaTqikriMEaxVBVaBRUJcgdfGi9t3afH16jqs5C8vo7xiBfyPBt1ReYUJAYciT5jAsgo2KMgQjY",
  "key25": "3NxJ3MpsMenfaE9Q1uGtwy1rMnb7xDAfXeVyrzPKmb3C1fcAAum61rcuRPrH3iyjf385qUghW5r87s3fbxRUeHSf",
  "key26": "486xppPVaxBtMUY3o1Ek81CEC1neVwP2a1iPgaiZ5Q6zuTB51Cftk3wyBUg385JN8oE1MZRwXKJZGic1bDQ8TZQ9"
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
