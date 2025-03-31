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
    "5yVicF8rGJbgretJxukQrbwmzDn7RyZZaNVW7FFqdJN2nE8GkuN4tf5z3niyWKwiHdrHQiY65howqhE41ivxmmTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9qbKeBKfdtBcihBh2iJeW4H7XPhU5iMmSzY6utdGgJWVKWwvyH3L5w5T4ofjJ1Vpu1X1Z9KdzyvTSqkNXtxdhW",
  "key1": "3xMrbfLk93v8gYxd2gz5k5tZZSsW777Qk4ZQRyBzHLQLQbT5AHJSRMy7fx8zUsNBuNpYBGZFnJB3EdW1fdeHQhs8",
  "key2": "sAjkLtdpPhCWjTGcacC3cFK1R4217fMBUrJp7C3CjTspDnhFGix6RuVHu5DzWnaqGzFPJDFMpYPnuUuTi5FRYy8",
  "key3": "3mFde9gCDfgU52ZfvhktXzhfwTj3aHB87JxcXydT5nbrn3P6xzjsVmfd1WZxwX7j7GJqD4p2ZER6w4XfjpLajDY7",
  "key4": "4f1a4HJopDxN5hWszBjB1hy1R1yrsFTJTw8333zRsVaHVNnJNtn4fv2sDDBym8e1Agr2CA2ndBZwAdjRd2fAda1d",
  "key5": "umTWZa52Bvpyttr2MnqtjKGGZCg2gWWTvJN5BHozCQ77cLbjGh23Qo3nPKp2ss9VxrDpU9ebaizjqbmqV7QRYRB",
  "key6": "qT8GALR1RDiVLsAzg4TxPoze5Jeh4cTtvXAffvQjRcMqmM1Fh1XTHoKMuEUsHCKwsjsvJ5Zh4wvZjGT5UJ9bZoH",
  "key7": "2CCvZ9NrVMHf6xY1B7tD5QLoCg3jmCEhGwCyyU52ncyRAQQRmG43QztoiUow39uBJWV8rqE4PoXX6H4P9raUzQYs",
  "key8": "5bzMBimYicydmzeuGpYorMH499SsvnCabHzMwH5zUUmUKPprELgiTLJ9Zaxk7MKoVHKmJcNoBjDTcMuuT6c4x6yc",
  "key9": "ypmD7hjyX7G2UqTWRDD3NcxavKTMa8ZfaVSojEHjPrVAHvju6T5n2rgsWxsLrSmWBfnPZ9CxtzL2XJbbocx5LMi",
  "key10": "5mf7oMLb2L4qrDXnJJ9x3yS5USz9nKgVr3TM8U3iJTWkesDSFAnLNbPL8SkEyMrXirwM3LYXet2jG6mUaNt2yCtX",
  "key11": "2HbQVsPr7D3vN79rLF3egGEeFiY9rBidk5CZ7yPAThRpqsXMGSiobdsx6zsaThbxWCqM9sUpQ718dxJ3ujnsWQET",
  "key12": "3HjK6Fq72aj3Lefifk9q9YdQkYL2quCnUwAwBrYxKa7TB8QBLXEoCRPLjkyNx3VjJeE1bmjXXawfQi8QnbiczQ5h",
  "key13": "53JK3TEVq3nAvCFwAroVUnxea7M8KbqWervcnXKdcWhfHKsvw3JtJMFp7hrcuwR1xqFjKcYnCZAcb1mauTKAJpfX",
  "key14": "pFdEbD9ESV5ecKr6JqFJV7n8uVGWjwZfiPbuBP6Aq7yasULVzZmMoaXzfTHKUBJvPXU1i76GEJFHbGu5LcbSbPL",
  "key15": "5eyKWU7X6ecN5RsnysRs9oHQEPUZtab2Qs4e4QR6jCWZAbzwdKh4H6rUMK8QDHKVnozFTdjzUNGeFwNxVJEcS4vz",
  "key16": "121qZsk8NAkbWxPBN8nu3Q1JmkEieSzw5LLsL4XDMs6aPW5EtnNjJe7E1QtbThRM4UVCLCR313LQ3tuDBXB12KZA",
  "key17": "5EX8j4bMKXerKTcCfu8eZ12aywxMcGZ2XcxjiNM2Bne37pJCpZan32Kk3CjiLTfzELpXZQiX1HjbsKniZkF47hRa",
  "key18": "4vahNWafoJSTrPcGkkeQRQQntFgccn2XDcHMFbsGQ1bf5vhysZ9pqympcce5A5fKHfErR3TwHWQwXfWYSR69vCtD",
  "key19": "ggRy3YwuQ4LkRTrfAV43wzKmFP7FGNuVcTMSypxCLtSp9TizbJeCwRNzcFMe7ki4ez5ZSYMAtExhxZ6Lv3Mocrx",
  "key20": "Q5NpUydjJovSdJUytR7Pc5888mQxiKHgaAUixiyV1kuBg73BXpnb5czEthFmvQ3cgVwb2JTUMPEa7ZLTXgfbUUA",
  "key21": "4CAQNqq4aTWAqCznxBqUbXanHdoTZS8qj5pbj1g8HXtt94EoDX7e66b5AvPxVoaD3uVaZjhTTHACR6NArU2onMLX",
  "key22": "4pPtyxoeyF3UhJoCrSZfKG9P1iSbPxh12YXcW7897g7SrQS1Fg8iiwo4S9HLzRb5dxrtzQkiXLAUyLG8BqpP7i7a",
  "key23": "3GyvNwbjxAFHPRStcA3VVhzSQyyrxmnPrZvsnsjSnTfyZGfgvsSx2isQnyQUrEeA2jjQxdtabg5m8kHQtZxhZ1iw",
  "key24": "3oCCcnQzk4UV9Vy9eavuAMXRXcpc8XM1U6pX3c2E92PH15yEn8Ky8NVT3u526BWG8kzjWz7nViayMyzRzPqyW1sz",
  "key25": "3HfsdLUw9UnLxwZPE4ivoHexyeMLHPQ4fZm6kfqkwRe5LfHjbTu9LcPejCHL4h471ieLvwJHCkn3878wKfvMyKeD",
  "key26": "4mZ1ZfghQwpPhnZbuG6V1ei8JKGXNAQiFWnZMEPTgyUSB7UiBnnK9YCxVDJmpm7ZxkaKrYby2kBBAYWbk6czHgLT",
  "key27": "2MY5ofeKgfvvyZD5CygfQ2XRkLPDgpVBmkvCBw7BNxH8KPjyDRzk87VE8D7S3RKJNgMPi9QsATjx6SqgCysyETu4"
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
