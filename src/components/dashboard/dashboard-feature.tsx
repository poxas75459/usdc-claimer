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
    "4jAGqfGKEuBbt2sgA28uFEDSNSrU3Zv2EZB94WBmAgrJkDGm1uzG1cVJJ5J1iLkMqc9SKaJuf7RT7q2H6BbRRi6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSNCw6oRq8pSMhhNPHWVuD8t9dgkwwuBi43vgjZCWjMsKndyBWvs9F9xVm5spR8XGTDqXxqCtBq33PWAzxTfoUW",
  "key1": "47dvrqk1oCYPwsxpW6iJ2aD3gYV4Yd89ZfWdERfFiZEzX9e4ZZij4oAvVPkpBEPDoCX2hncVwPPaVmNn9CYUE7Uz",
  "key2": "5nrZTk6hUqoyecGw7N7emyvztcVCptjyepgQkfdFH6rX5E4o2Vsq8NU6CCnAuRr9bnYFC74C3gquVhufnaPX4Htv",
  "key3": "57fgvTwZUfDBdCML5YwcXsNpcpWzgjkSyYsNDVscTjPvW9oJXoppF8ZPr9L47CohNebLG8VtB5Tr6wdUwnSqWY5U",
  "key4": "NBi1i66Qde6LZCnp7tDGfSzWhP4bnAxAJ2TC2fT7y1LkSjMnZaiWyeVecQ7ubdUdvYGC2qApby6VpkJMSLbrioF",
  "key5": "5zGG2QHbx5tAMmK1Ea384bE71absa8Pzt36JZ8cq1t2FNjfMYqjTmn5jMhG24ZxuCg8WywNt5qm47kcZ28uWzK7v",
  "key6": "WTQz7dHCrpicdDzTmoyQ7473fAjj5F5CNvZnLnEtZiBR1CqTf5UXGJqrBgYvHQYGu2hrgxyWqmUbYDpDHGejFjr",
  "key7": "3DCDG2jTQ4RzJpb2KsFmX2ybmYpequaKDbagQUXFJCW6KUAd3KGszzJ24qXztLCXRyNWGN9ZrdicvPoqiK85sTp4",
  "key8": "m77AzV7g4c3eMZj5AZg6nSd3zF28194ASh3VcTg2H5sfHy8QuH6LUWyZ3DiExwn6tyYgBpaKkXzMpTo9yH4GoX7",
  "key9": "3nWVSRzzrXtBMwnU4S7YRxNvPThtvuY2tfbmJszEahrecWZDMNUjuzRVzqtkBvnyw3QNkRCD68g59XRBjGZuz8vD",
  "key10": "5xAVXq3rSWW4DxJXnWWdR2Ri6rdz8uj6LQKr6c5PD29C22VaC7YjgEF8uLKYJYDUrYksALTmBM56sGYxzpqDLrSJ",
  "key11": "2hH8Y66rJAo17RKvuvuvkW7Y1Zr1BkvCpdpyTXpBqN9X4cgWueG267eVsogTzEuesYLLbXTLZhoGNH7yzyXRw2uF",
  "key12": "4Xj35VKP1B2UxpFZWN7XEjxgjELCH66KKf3RGwJDuN8ZGz6gtndYkNahM4dMTxLbqk4Rg9eK66QcVXFQoYwXUu13",
  "key13": "1vdC2VG4nzSRHWLE8Es8fHYoX4Ws9mqBfp1XTireTqJKPmqWj3HVcoiLqneAae2S6c1FJ7Dnzo4mCb8r2AoeERF",
  "key14": "2rvH2onrxBKmKdeUoJaZzmYgEJTWYgYn5aKzt2xTypcFKejVPzfQDgqVzZY3swTtRC27nNdjNHChwmeAHruYMqib",
  "key15": "513EwRdrT7SHRtx7X1HwmpPB6BRPwP9tgSAVz8z5u8u9Ntr1TDAAYAxK1tavSmhQVztsuznJHQJoR412ofwK9dbp",
  "key16": "3UVSF7SerhkHHuLqZcGyL7pgWTGjcMioJtBvLfk5BrnnHdLaZox6RnX4zuCB1ykR3DT5k6JAPNLGzfpGSJHYQdLo",
  "key17": "66rDME5xouLHa4SCiALgBZt7EEJJ3LtfYF39sr4Sgh2JzLJi9UXTZsyfPzj6qgAGTaVeSqSAJpFSmGJDHUkVSL7",
  "key18": "gVhG2F2rRUe7hSzy7R32wKsyeY4aVMHifnk6ydpShzY9DZXLS3b8ngj91MssyRoXB8ES6hs7eHB9gyLbNSf5oPt",
  "key19": "5Fg8wdJAgnuXEXmexZdzLDPPWGr63ZKSeSzRRFMW8CH4UHvw8HQphQh5ZFjvwSwp4mnvdpPP23PUaiyNVCmQzCFA",
  "key20": "2tSVxXZWgAdU1tRxfDguoBNLPA8VCY5bAjnz9mKxYrkqEwRw6YVtbo3pcCJnZTiL3SkLLhiBRetpkbgNgB1PKWKp",
  "key21": "2aQhN3YdHyttNRpxuaXjmDVDcT3JLCgCbJQcFrzZ61xMiBKwcQY6BrZA1eQA6nRymsE1tzZcA8hUL2Fgchy24TdE",
  "key22": "5WwUVowS7DNd84DS5G5nYZTi823cUjE9rQizmXcE2ZyFMCB2JqFhvmpKYc7Z7oMZ4TKoTJCTc7wZg2e3C9hBoLVY",
  "key23": "3hnNWUdA73FEF8tYNw4KF1GCJU5eGxrvBecP9L4U6hwMSMgm9fraWYdSvpbcUYm4uTqZDtD5GhP6VHhkbo3Ba5aT",
  "key24": "5FEFAT9ZF12sMSmG8f3PKff3GZHprpr55p4mYQ5bDpQDv6KPDGnccxs6C3furgSFWW6RXVUt7Xw49s4oxM7mjMsd",
  "key25": "4sUArQNPjnhLBD1yhSrLSLcsvfBAoM9GZMSZbHtCDCM9HtmSRbViHGoMJnW9SUiPYqPk4RVa2NWRiJn44skigbJ6",
  "key26": "5oLnFdJWm9xvkGun2tK8ZLxGW6KudNp4XKur9WqrWaysBAeXRCh9vQbjtczgYonzRHx9pHR4m3ky2d2CXNtC7KPJ",
  "key27": "65vmTDk3hLGxJ4pgf39PojpTpUUokbsYt6wSvnQqTHhBNE7qwKLovKFNmAfyxfX9e38RSfcQWF6Te2JHj55e3qns"
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
