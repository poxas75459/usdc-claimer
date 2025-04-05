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
    "1tZXhYt5d9yfMfZY8CeMrqux3QNRh19RXnW68tKQYz27Mu7xtV7VyN7Gt1rvMpoixWh2EjPeivQmrFeXUrdxXhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cXCT2yfSx1spoYnpjBSc6mpUKRyEHDPvz4UogTKuX3LiELEU5C7XBQjZpmXWXsEAwRhJ9UXjMLtTqCpN8pjJUS3",
  "key1": "2dVzeJhC5YnJZEPREojeSq5SJGXMs9wX6TzZ8qQ5UpskRF5pUP9ZoGTtC9zGHuZnXEhWAPp9x3gmsd9A9Xu8kWUB",
  "key2": "4aRY8uxjJExB8YYcPJunqiXKjo2jneokntqW6NHA7HFP2AAa1WtanBzpt4ebCFbVDnuQFcwQ6GaVXqbVo7bb6vh2",
  "key3": "4jtgU1wuLPhbYwzi8LDcBhkWCA1gaSksRQt2mSM7JNQCX1VvZGmSv4ekytSdKfdL63WeCKhJ9AbYhzNaRBTyKpSD",
  "key4": "2c1cr5Qbypr7m7dSyW95A1btqX5jaTLSxoafwgbBmnSF87xgDnuj4R6PVHuJMFgjq7rdREzzVk3kC9tjhEDEtw6G",
  "key5": "4dKnU4f6hgHP2U51PeVZ59cPC2Giig7FruioLrrgd3QpG1iQ1gD6W8Pjcv13seerQyQfJSm2g6CrGRG4h6LQREE6",
  "key6": "3P54JR1PkGzkXVrKK2du39e4oDaQ1WZEFp3c31XNcPFpWHi3N3ye9Gxosz1bWwWreQ4KwUEGhauw2ND7FwgrfRLH",
  "key7": "2jNu3hvdkapsFFTuBmHjiMad8wTnttYoG7K1QZcRQGyYNbs3vicWDpoaMyDXGnSoRBsHCMKzqmDhuowF4uuXFdzq",
  "key8": "3WRaWMH5NeZbUbefTPsX7ttNvxX46HYSgjG2xHVwjPTUM6s7NCXQ12vU5jC4zwpSRro3WsvVytwVjnNDneWCZNEo",
  "key9": "5bxNnSShAPkprDNxr6USuopukqvQEmvidEydmguuU8qdpgQNwBEavqwAiASqbSLnjY8ihPBCMEpFR7LGu6MJAXbw",
  "key10": "5XC9zBTvasMjqJnydMQPbxRvfremuqqw7zfMx2tJbG1HdbrkYdYMz6Fk2nrviX8DGGNvZNYdKg38omQdSFKXL9wJ",
  "key11": "5AvTuhHVJjrXYagRQcwEmkNsmdgfWYCtzkifA5dWSbYs9Lc8hBQ11KKLmZFQXjWxrGab8T2ADSEsNhbKyyUw46RZ",
  "key12": "4WUKyXn3MkmzVKYRxGWxT2eiBzEak5Lzjdd5gGrsmYeaZ2tVJvJTsMaa95xayaVA6srTuBSeYDQW4YSLieYGqmVo",
  "key13": "2oif98tXGoUo6s7bxcPRDJpY4TvwdKCCF2DgeLTkTnmS5UqGJK8HySxZ7AqXWzTc4F8C83riBKtQeN72BcEhZrPq",
  "key14": "4aPLBAmnN6Dwb6tbfzixwedKv6fKAAzTZCKXYGrG1whAESLRoR7rN2WCjML63zq2NdpN2n86wymgZzFJb1zuoRiN",
  "key15": "5dnMJNXCY8RmGKHKaRopD5T1JaDc2TEFqDi11XjLq6akmWGVPUEarxTQvKXPZkxHtGrYX57cXTXFdsSwxnyPoBN1",
  "key16": "DN5QnTv1ozk6zZaPEMdJnSyS3cSUX1n1tDCQCAXs12RtnLRhmELMdmeuz8ZVwPHPUiBtAMyU7hG27TNkHGB7nHw",
  "key17": "5kLoA62a1TapheB1EZ9jQdFY4Cr3docdtiaTgNYwF1ynY2SFtZUQF88AK2TdxyKU8bWF1ybnxN36few41C3M5yFf",
  "key18": "4pe3CcUAvqAD5BhGVUntScVLJL9sysv1aJQr7hVgHGVXhpzVpr5mQ7Hhq4see9j5V5UEsWCb2GXVcaRSjXj9M5PA",
  "key19": "pJJNeNjNPn7ZuCGT8MBBdULCTkm9zdPTxyFSqm2S3BfFqqMGdZsAS2XmeSqaFTNgDwZ5TAhj2oNPdDuKoTGd6tQ",
  "key20": "4SUWvidNpFRv6FRq6vJLcc418fp9AvKc7z781YxW5mNVpm2YMSt5SMXiyxHJPMhHsUfp6kN8XG2GbCKYrX4xDPQs",
  "key21": "4UgMNWuS4DPguzFzdu8kjuv21BR7wW7h5CMFDZ8mBy8EjKCiE4cEfwU1GeD6itsk3CVmx8auWBcQTUfx5D5SX1Y5",
  "key22": "4ZQFhbzKNSUKLW7gheQb4toEtk18XZQgdPmLbueMWYGgKiS3Vm1wveozVPdYtmNnyYqgvKbMa56BGCwPNMscsU6L",
  "key23": "28AnYzurWtFfDRyEP2kn194Bb1aZcYh6CJgZ8vSpoWDrEm8ApLe1xJJe1Skft3ZLrJYEgiXYY6MVoCcifUfgZmwy",
  "key24": "Dg3mVq8fBBnKTqePcU1nFDKRviH2xdXG85TTyBPepLhGyCxZiPG4h1uduihAuAaScwqHp2wL7aJ5B716PK3cF41",
  "key25": "3XnoP7SKYUSDw8WZuuj2F4dEDCDCLd7w5C5SsnmqREfA7STsWaQFxSvkcDi7rZ7iusSGcWaAcX9QpD5VDj1etcdy"
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
