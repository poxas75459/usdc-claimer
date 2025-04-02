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
    "ZS4qS9YHsq3zbF2Mem6nXTN3Pn99qBJAKxyphQ7nZzggyqaFD5nPEGXNDD4yroxc7mNito2Jcr4zU12nAujUCCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2CPdJJB1jpaC1LXdxMEShA8mD1bcdXxSLk1mFToewYnUERsyRd7mdWh8badmnPVVLLnnykjDMNCh1QipnjbaJA",
  "key1": "5MHiSCFgkdoMed8XsdUZ7cJeZPnQDti4Y1nhXuJFd5a3hfxXbJnwLLeR86KgtmFrvjsvmMkaARGe6zM6PRJMCRtL",
  "key2": "q49LGnDo1gdwGoLocXzbzG4pwsmThxox3m1RvBi1xAnPHKPpdg4BmHJ7EbZ6XTwKWzJSdXzfPzDYC8oaoXDgXKc",
  "key3": "5TrRePkcugcp7s1t3PFohSZdr7e8A3cVX7CTKm2GwJoofzBUmuzoSaAAqu7WMiTHMGgUZn51v4GTsLEsMX5CJPNn",
  "key4": "5i3LuRuR9kPN24Sys1z7LTTJX91Agsx4UD79hp1t7FWFQChZKRfAyZmwzV8Jo5HNjddhg6Z64rZVTVCMmo6BKSqz",
  "key5": "26sqghx5k8iqmHmjVrWtf8mMVZSaCDGptGMLuKE4YYB82uF9Q4AUQw1osxMn3q1TkShDUAghZx8zRNfjaUZPaefL",
  "key6": "2e8s496GtsfdSUGEx9zrycf1J1seaBR8o6iz6qEdsuiXNv9epCd5sP1P25mD39P3nyBBLTx5PXE3xiXjJF94CUPi",
  "key7": "4Z4sFrWoNxdwceYXPTKuUYQHUXzJYUwW7yoFdut39usb9ZQMRqpCTyYPKTLHYhXsJzDDp9WXhnSrw6LCtQ9X2cFp",
  "key8": "4EdykHhTnFXcZdPX4zx5BVQUzATkTkSbTGL1F5V8yiYNDyiPMAM3g2jhXoj1UWvipt3dwnoJdncSfdfKQjXTJm8d",
  "key9": "MfGYeYkFaJBdj4vMPRSp1jw1zWpfN8AdmtQnYNE61dp2FubN7Aes6NRuY3MQP2Y5ePKmz9mvoESSXS6Fx6kwpDx",
  "key10": "2ATWGc8N7jHvdRANnKa9ZfmE7paqR3QU2v64XChzsdndramULYKMb51kJmmWn4vHXN7CZ9pa5Jmty762n6LJiFDB",
  "key11": "2beWgnhyyW2Ey3tNXBdN9NRbNaLGq3w29ADqgUJGbWeRDN827JXLeBrL51D6FFLPvcM8r4GVzEuUaB4PJGaicWmc",
  "key12": "MegUvizVKavTTxcujaLAJvvTnDEYQzDqATEQM6VF71LVB5CctoZ1jfpwFNwBQEBHXZjtwgezeSPAotijg9HoLP7",
  "key13": "5w654dqQ5xYCXFvjGWamghWEsMSCRbFXHJ1ibhw3YYfy5tYBWFnyMDxsS4yrCeDdKaLhXQ2GRsRLGXCm7wqjzqDC",
  "key14": "4jkva8EGkSepsj7dcb5VLNMBa5mnqkBa3M4csvDcHPYvUS1brPBkmAhuibYeGJRgSrHmaCQVw2SxKhf6fSiuMtgB",
  "key15": "4DQqUuHhQuqRMXbbtiy4dkGkaC57c8yDja61D3DeRjVM3j2icJ8GC477cUuHAN1Mw9oKMMa6743zRax7PVmQVxYG",
  "key16": "24zFfx4PpadwCQR8GBMGCA1V4K5HCqVVhXePz9toGZmyTeMMxVEzfyFKWNTp7qGuvjZpQuCoUtaGptQNj51dLyD3",
  "key17": "2tVNwWzNkLvkXwdoSqG8AzsEkTFNspYQJGC8i2a9F4QmJRVg36xBRLPXUHopyFVyhWF8t7k8PdCqyVw9WQaRuXog",
  "key18": "3UsA6mAqNN3jn42xtF5gMMtzEBcJpSMPdnFZHYd6FZS1yEUK5DhMn8UcGUS3vy9bvTtHdhFjFR3Q3iNfabUEFDZn",
  "key19": "2ihjMukaRjsDFKxS3MPmnxcejdMHjWR4JzGx5wRAwPbYPjwMXYfwoRSCMn5iepL8NWa71FjiEEVLycZVdYDrtZgs",
  "key20": "pjexf7CMHb9AsWh9oQgnE4YNtntcMxkHEBzpQg47imJq5UNr22HKZyDzAaMr456oxJqjKVhQKDKdyDAz1Hft5kY",
  "key21": "2JnvdB1P3s89GGNjysRUHFbEd3jDkYqrgjJnkCGiruaxfy6kdCVjFbjqfo9PvXGWvhCnJodPeU2eYNLPsn5N7f2A",
  "key22": "4tFCEaXaDsZMntTYmokNuWvwgBDzqzQhYq8dfLjMxdBG5hzLQkSvS9ddUjrJxVTYM5ss8Z3w2pvZhMbDd48711z9",
  "key23": "5dWnU65VW85iZqze7xmWnRXc34MF9nyaEtLsRP5KhisQUNhWh5cbZpiQQcRdZTmAtz8fkqbGdncMvXxebPHFbWBD",
  "key24": "2KUASuPSBbwbN2zu4XRshNcC4bB9cbz4CX2FFdHfFYaffoM2bSE9rLmZtaQr6gFqd4KLFeEsnakK3QJrZjbc13V4",
  "key25": "Hk9EQnLhXmZ9y9cG4xbh4oRPSMpWUNS8gvt7BUo2xmzwpAZiekYos2amraMpWCuovKRyTYo1i9ZyxJoge4RUrdk",
  "key26": "2VwdSMT1o8ZVmkYWuhvRF7wbEiz4cT9q1TnpPVNHBGDfUPf2CtbzofLA1RBD9KuBqxRhvDumPWQKv3GgGa26sJG1",
  "key27": "3mRNh8uEhhStUXVehYj7rcNAP38YumAYV9HtoZMLgbjD8vchcwbL6UqYSM5kqX8bMnJXefW3DRSmYB11c9Hr6LCQ"
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
