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
    "49F5JQkawxm5ukwbagWzmmdSyXbtLqBgVv12QgGJaSZWnDKyXioXfBYWRDvaWiKVzDRwAxGC6sH9G4KgQNaY3aCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z57pAC6yqqmacjZZDVwAX1LvTMRPyxGaAs9KEbXFTbcfFk3TpFyg7sH15X7zCxktcxsnDR3PpJsbcPqAuVDEmme",
  "key1": "3FHnYpGrteQ8yQE2kUTBUnNoXNc85H8ibZRZLquGn4xSQYCYVZfSian5oUHQhBVGrVsyMK5en9fmXNx67u7kcyAs",
  "key2": "4qDoxfK6jptshcTuPVPgJfaTwW86c8aynnVN9wBdURALTuh2fW8x7vD5GLYxpSiT2B1kd7Bj9ghL1NDnANLxNa67",
  "key3": "5sZ3gqfviwAEUZt2oBF8isakG5TGJfHRmj5njqGrwkXoR7qT1vysNqcgH1evw8rksVqagkMDWbrCQjidmH6NV2jq",
  "key4": "ZyaerDUsSnEgMpGf7wYe4aSPWWYBt9SCUgwD87Z5jmXeEDxwoLvJDaq3epXuvzF5d4ReqB5wJW4MY2tTas46jgG",
  "key5": "3ud5LZEcqpaU7sZme41RYPyVuB32ipkAh4133Ws9VpBCKpZX66QVNTHhnsVW8gkqduSmbKrRGVPHgo1tSYof71Tx",
  "key6": "poUCWmkvpi2s3Fquc3MbzmYcnY4Y6UZqKSXQb8GgFAsvrB1xS1BZqyBcfPvF4HafYoAoYfVUh2ebS1tdSSpvpLd",
  "key7": "2PMFVaihUVvEQoEZDwmWPnqEKnegJSiiuwpfsxjdYrSyiWKWtXhC21Cs9mc6MAL7Nyt8xDx8DxipuJkZd6URpArw",
  "key8": "2Uu3HTMSWnkbcGuvovcUwvPEucoJ9aVGZb5y1CajEqQzZgLBqtCBRbykjWRNYqXMDsGBpg41gwTyqYerQBcV29KN",
  "key9": "3T8huJ7j3V3QJMLWtDkbDDFNUtkb3ys4X4Zy3mDAHhWq5Ga56iQvHfer9zdUberDrrYEgjfCN1VQ11NVv4QeksY9",
  "key10": "Mo5ZbtKgbPYTYkiaXiiABDxJC7JmxpvyzPL2KHAPnkbyjV1v2vX3kzUnScdDQFC5jXyxzfKBwTuNxco2Qq8GEZb",
  "key11": "4MbWqAcMazi1FR1CzX78ZbQsr21vpRPRVARBsHzLGnx97T5DtDFT7TxaqMiWPcuJ63dtiQyi52ejVnZpD5gxiRr5",
  "key12": "42Ln4RgzahxEKX7sZKU1XJgPpmjN65si35cVcX9eGPfrKU75aiFor6GSn1rLoi8zCQ5faPRSqCCjzmPXhD2RfKnP",
  "key13": "5gPFRSY6BQN53okVbqRDohDZaYdcKYjcNmZmRDLfR8V6EiMqAvB77nmSyxW5Xv4VWerMDt8BpoCLtV7zYNGGWW6T",
  "key14": "5Nw2YW5WTLzT9499dUvqgfAHK1EAuQk6eCTH5mAJjJ4mZVjBFfGaKWREtY49MLrtU4NS5BmLDrJ8u2RePMtoVcTv",
  "key15": "4pqFBx1kHbcQDuprNQ7emiSG22cZzYXzRpvUMER98NDxyLpPq5kEN9633QkkwL4UfWjY8EkzdwdEnFssys6uqKFb",
  "key16": "izfHsCB3Cfm3JvJevLVbxKp1bzjdfWpeNhj3b77NXyFkAuqzEHhD1LgbeMGAmMSEAGhx18YvcNrPGkrxrKrUZ4K",
  "key17": "y1JAwwxsm96TkY1QxhyzB2y4d6mPRgt9nJ1ZdT1QXS2W9xmnz6PHe2GvqbK2AbdSxwnhQBekN57dFta1jZdjjFX",
  "key18": "28eF8nLST4aJR2xLZV9H6p25X5CY6gJirUqocJ6qzuru9P4C89jTwCHioSJ5RztqXgQKztipm1B7G9yextTurhEr",
  "key19": "2CxwAtRnk4Qto1zR85hYmZ5EwbcZrYZ6jKMdevcwfd5fNLB2ipaBy4FNSmtC9ZmwfjtiF8AtpdWkGfHPtecGwRgV",
  "key20": "2xyQ36UhxbWXfpioLmrFcryWTpGU5cE2MUh84MQ3DaW3FXHeLgd3EJW3CXi7VYYfJsfHaRbbJ657WBFEWMUjKt1i",
  "key21": "EYEZtnwnhgU4wooodH62RzwydHc8ZeBXjx97pJxZsifuyBqvvp7td64faz2ZkqSzmQr6JR2PeVmfpQtJSKk8xfA",
  "key22": "52zgRi7FKsvFCAztm6FFnLaXYg2Gji2itytt1KEfdY2VdFNoXN2MMm6bt5UEs4FkbNQRn8rxEsbMyFiJ3iYH2qKH",
  "key23": "4GXpg16UajiZKXckRWtmdjmqhZASwHGpmrRqtARwXsZ3kkRS2hs6UcaSRp88NNxMEf9PwZxTRvEZ7JVEc1wPRi1A",
  "key24": "3d4QJFqi6kBMQwcdvqGd62UiUbzQXYbLmdcCxsiL6tK3Z8Bu2fR5LXL41SJ7bXwEGCt1wnCRc1HX1MJRKmLcwjFb",
  "key25": "4Rw2QcM4istzdMUXE2KGydhpTDjxKYCVsWLXp74z4QTN4oCY923kYUY171613Atgzm7yAQTLZbmAcYFw4cdxjKHa",
  "key26": "4ALzU1G2q1XgPxo4tvyrYWcFshx3CBTgnosoS4fvUqbijvy51CkHNDKjNr56YPrTpck5KYXo8yT5vGkLENbwqA1o",
  "key27": "4Z2fe2FRhsdrnxXwWWPQoETrNK8TNmUgxzAC462ogSJXM9Vjy8g6XqU7YPnuwQibnb7aeergAgA5KGyxYuXJF3st",
  "key28": "37VQhQBp7GpyjdbwPhTEXWVXmBbqckiPWjDSCPWKZ556B1zEWy3XzgnSNoZrUsLT5mvSdeQF2PZ86XMemwYFGcCd",
  "key29": "4kRYF4P1YrTBQE9Y2LZwbDLvonwSWht1cZ3ww8QwuC7SddYqeCF1Nr12WaHAgj1xSU4XcNw54DZMCvTTTVujgGnu"
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
