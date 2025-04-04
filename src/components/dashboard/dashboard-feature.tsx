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
    "2uPya4qkZ2t72wCkJUceHTGE1TUvtBoEhu6fBvB4fa2awuVh5cUX51HHCEVDcKhYXab5j95H1bMP16WECNi6j1E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzdCW5effjTdeaCxvmB9qNaH7kWSRnVKn7wAZHscvcvWUhYh9hh7e8nzTLoZjh6WDm5PJHrwc8jhKs2XRcAU5v5",
  "key1": "ErFX9yTcDAujJ1iGBdGsiqiGUhppSQrgSAbNmCuBtXMXczRxePajoBE8Pp7VKktYTV7k7xYjb8eCtbHhBZNwFkH",
  "key2": "4iJfCnK5A5AKSqwcFiXVx9pqunxfpFHt1d4wL7Dq6oxQY8vtfFF6XKNtwa39H7yTm2wrqcUCcfvVcF6RZVcJRiCr",
  "key3": "5qM8yvoQCsHKjzPz7vHdKWGjRmdGXgbCq7kc9S2g1yahWvyNZ9Z9cVo5AGjKB1aKdN262a62cFYv168bAdU2bVMR",
  "key4": "5E7oKUmbnyMCuS4UxHnWrCQNrY81dq8ChCcPQg7Z53cDmacwHFF5tqU2gSsMQnuP8pexATrUDdPpmE1GQGMUx1FA",
  "key5": "8YjfQXTyDzn96v2fsyMpJkUouRYtnfR54wKsuHCeEyVFbk5Mq3btLW7WfwjeMz4vgFoGH1sNzV9yN4ZsCSzQnwY",
  "key6": "3q6uPbQn1tn27piCj4WZJ4WVXZ4mfMgUDo9JCdoUcChUHLMYTyh29NzX5r7JxNAcegByM5Nx5Eemqeq4dR1GFpEu",
  "key7": "4kf1CXJ6enmEiFNoJCFYPyuXKDQ39mfQfGDUd7eJYbNZzvd7v4bfuR5RyGcQ3xNMPZ9H4ArFcRWW9SKMpTUPj6JX",
  "key8": "66gggozcF7nkXvnkisGC46dLQ5edVmqiyjfwwuC3UmSyECLxzmQf4muMTHb9pZc6ZFhkEfi9zA64C3a8VuxM2jzb",
  "key9": "377bneRGBZHV8gUAf2LHAgDYToaydNT9hKHP648Axher6XCbDGSxwV7p9MsAU1h19DJakggvx6adhtkWMsnNpiAr",
  "key10": "3hfLftNJiZFp6BMZYjwxPZCyJz5buRgbazBZYmzyT8aoSSm1mLvYqGhjtoAZCgtbphHsPFYTW7uJ6ugk9rKAQ9eY",
  "key11": "2qWFVraYqfsxWVvWa2XVxkY7eFDokC7g6bP5jw1FKo8725ZEjopxHuBPHzd2vt6wom53EPW6htSF35q47arqCsf6",
  "key12": "KBMym9myHXhf4Cbe2gnmQicfcHQgS2W45zjvSpCWvW4GBWfaYeg7UhSA5m8QfSRBs1uKSwqwPtT1G6A9DLFJnJb",
  "key13": "ebD6dSy5kz8V5MiZQsrH3nU4k2CwTAu6NAixvhTSyaQrssx1bTTYpHTxophDPqjgpni4nE1UUL4byCXGTSKVg2c",
  "key14": "1aR5Rq1F3KUs7RT9ddsaxUgriQxymWMFKnpLJ8NwnGPCivcDRQJDNSi9zBNkhkZCmY43aXZ8Z6XEXN82NaYnVAr",
  "key15": "4YbTrceLELu8LuwUKh5Ha1ji2zeZHZHZoctSdcRNa4vX4h2QPTERxBYSRro2CxH9o4TisEYg8YwB8x5aX5BNVo1P",
  "key16": "4nCkaWeAGY5AmdFgj9WpM2FK5McCgjCSW8bCAtbXuKFqxg6iZoArnYrXVd6cb2ehfnwvXNokkbcaGXebS5oYeRb6",
  "key17": "4AtbjQo3xbKyzuVGE4VVCwsF9WQBdepHxKM92W1EGdtzUdb6CXoEaDicUpgDjk1Y2rzvvWyuAomDiYuY4VMTPiX7",
  "key18": "38MWiiMyHRQU7j1Vjo5ehWuxPRbLUvaL7LGxZvT19Fnsf8owhHunDgNTYvnkWVxEUpCdN9GWt14HCQRL9fnZjQhU",
  "key19": "4P9rNYW4fjH1d6vbSqME3ZAPtkcMy3gwcYSzmufjcn6ZDZoDznHGfjHXeTB3fAzz6q1Cviydb2az7oj66y6V7ZYE",
  "key20": "3viyNzK8Reu3rbE17yeyCgNhhKgd4EWqdsTARjotSyjB1qSQnQFQWPcQzGkX6p3zn579KmdCPgoJ8YWQS67V9LMQ",
  "key21": "5PZ55uK6c9AfM3r96SCHLanVi5mKDK6XfcQx67X48SzmCPpE1ieJEihaUh5zNRxguAcAf2MU9CiWFoAskR7dhKVF",
  "key22": "3ZW3nbTUDuufjB3ccKmLtTpqTyi6zjbY4VKat61Dcid8YZyp4KWQNpzg7PRZTka1WTYQPn8xt91h3rpx1sZjrfgV",
  "key23": "sFuHSWExhmG8NW7ksB53n2MxEmRfMCZ1eSghcB3qP3Nv7KkpqShf2iJ5Ze6zjzzrkaaGEMtAuSLztejC6jcQPep",
  "key24": "UKQvDZ1sgMfsxWBwA67d4kpbb4CaK9S38v972gAoMyQ5TURg1pDDaQzABt9QzmvBUi7JT132CuoyJvN27c5omK2",
  "key25": "7ngmuKQSZu2TrEqktcR3iVCmFUDNWjNuqtUkLuxXjYpjrJi7TiJCqwFpmTzx99WCXdRAe9ctaw2JqLBcEoCcena",
  "key26": "4iJJmtGuccLSmg6BHCv83xiWuB3CJbN1xWsrwjh11HEjpWCd5QtN2HsL1n2H9T221toFgsgBFszngaQ2q8bVhZb9"
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
