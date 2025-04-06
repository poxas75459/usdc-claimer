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
    "5LFFtRjNcQ6LB3XcctBkSqw2UESuTTuBxtQZZGBvA4aipnGj7tJKsVFHLP2eMNSzGK8Lo1zvdvuLDqZzPDrQQV95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLZVsMZtEo3nMQH77UUai49KRVcuLVqJMnRaMD4sfvAYz5i3zSA7C4oH9sKxdjBCkNTKUwhUbtdoXfemso1uwDh",
  "key1": "4yfzBnCzSNjGiZnTbcTJgquewSdzjRAnbRmLHL6AdnbZFrmcPnRD1vDAiY2mJv6ZqNatd6WHsxa4GyttVmSDkAeB",
  "key2": "5CzvVjMDoLNHUXVQa1CK9R8tHYfEVKztG9sWVzzqkWt6rMNZLDkBqtkWrx3MunGYbbgBFLtw6UVYneddeuNh5Pww",
  "key3": "2VMCysZdkSY47Kcy5uUjDAuQgzon6dtzDZBnF91R76o7Nb8auZ9AgwtjtG7aUKUsBD9ynXR6dHn9vNdUWGcohecu",
  "key4": "2mHofzBySGxQRC5Kbu76TCzwfihhVwkmf7Q25PpBMbSMawgsKtyRkcxbanrxqx8q4sfT64js54qWNQgrm32ivXs6",
  "key5": "oPn46YrRiZHiA1cshxSKS8t2n7MNpmjf1m7jNPu8LGUuKAnZP2PPbjCbLMicQSGxbRi62x5rwKGmQYsjcniBHTj",
  "key6": "3o4ur7cxFpGJdczgU9F9c1XGXS3uiVESpRVF1m5QoHJWuQQ7kjGVLYJqEL4dRMZWc9CpbruhrRZJ2Y84VDZKgYME",
  "key7": "2nBdLRFjarcP9JKfhfFGzJpzqqHRNas461igSkDD56FvwSTUVeoKsxLiHPocZ5vKQzGkSETwv6u3TphQvXEiSnMh",
  "key8": "3qnb3omEGBDNw5jX7wS1Ewjm1X99c4HGYew5Yx2fQQy7sBt1PtGe4fAoU4FeSWroBR4NPtHFPWVhZ2q18xqejGae",
  "key9": "4mwfm8hWYjSW6XUojRduaP136wWEmds1fpgxkZSorDTyaKPBHqe8Z84ntoj8ebWXvaKmKRLfNwofY7hWNSjGj8Wz",
  "key10": "63h8YSSEn9BwUUe9fW1gxBh6w7rpZbAs4xJHr2q9a6BJbuVDV9CjygtLUUAnpV74UMtetvAJsFNYhgRzJgF3pRVC",
  "key11": "4aanPg63SnDqjQ4jfFgF4u8BboDYV7aFsVqrbxEARTvij235SzuJuMNCWKyFyS7hgpAUbgcgxrTzRAu6ccPwNxoT",
  "key12": "ehZxcD658Lwyi3vwwnwhbkSwMav9eNsLJpTbT6sXf4BkeQpp56ZzEjGnTje62E6hxfQHabbnKhUNfNoxn6vemuN",
  "key13": "2P9NEdnL8iLAhUotAtREKDtHiMgGGNFeMJHpgUoixFbBnttJgUcoShamJ4riua8d46dj9APTmhmg8x8KQCPopKAn",
  "key14": "3YmgiDzQGwr3Hu8BEx7T5oRwVcv16zSQGKDrjcVe34xMGpTzz41YDRGjrADRphPSoB8uypkFuezmgk1dFgNXnUwe",
  "key15": "39pf2fPYhv71SZXSqwTjMVrfgmVKo3Hmv6QXKs5QbHAmhdeCDCiwy2DZN8V39iuDXfWGNqbVhMbTv5SUt6igHEVR",
  "key16": "4YfZZjd6XXciyVyctZoeaQ1YNak3nVDGr8XFBwcqJhac22sTezhR8M7xZhpYbS8MiNv2RowtywNKFGZb3gY7hqaU",
  "key17": "4mCoHM48v49QC3iyR1JPqpaxpQ9kWpQWjgwFCDNyNhts8Z8fAj14nsXhdsc24A73Xh9nKUKSYeaL6dMk9ST9qyKa",
  "key18": "uScv7dTQw2jPuDwiAvg4bJaegqHpvpkNFahzSbYAeEUGQBJpZXhSjq5hEDAC4Rsh6UChYpBuvBR3DWtENg2P4zi",
  "key19": "3q2HNx24h8xak6uPMPdrMrWZpQDNJir77FYWPXzuK6KqQmPrnnBH8iz3tNjBGjeZQgterqxN9D6KCf8gazqfoy8",
  "key20": "HWrBLFG45Qe7dn55JT2STM718ZMe7fXoUcBE8EK645KsU7tiQkBK2XJPDqJAnSvg1UHkfroM6zJTz9DGFg9Di2r",
  "key21": "RTmigwKGHUEqHKeH6TrmVMaU7oEdwUHAYqWLp2BZd1sKbe9HZy3o88jLsAnqmdRNT4EgcPyBa76i9LFsRwiVYt6",
  "key22": "xTVExU2tucW92xEch3k3jGFc5PUzKkDL6spUYApU6QbekWb727SbHgQEbXjAc9fZKLbeaNV9cXr64q9N4RadKXE",
  "key23": "2nuPMJ7vMjgtUC1opme5htRSJktTazXcHmWEr3uEAZzQZYUwCKLs8XqLzVDksKo1VsaWsegQZCuNLjcoiWWYPAp8",
  "key24": "2vSRkmD2sHb7ZwZQ7kDckUG5VqDwkoTGQ8a7AUJjecgEu4o6RruMsB21a24HH2PFzmPU5ZtQPiMGRJP5J28BgHaa",
  "key25": "4a3hyHY3VfM7KLEt9WSCryKmVhX5SFsCKijb2z9wspGzRGLu284ai9YYporA7Fy7yEhN7rGFyKDmnLbWpwud1QN7",
  "key26": "4gVSMFifWuwGS1GVSV6ydPyMdwHQXaHynLSsrAKtQJraTVyv6nrUQsDisuH9RRLP9LvZx5xMWAZMfsbQyeDGjahY",
  "key27": "aePLWjg99Sr5XmKJa6wqrnmZEweRCp9yYtS4c7TqcJTwhiiFWGLoeKaRWmL8r3EJRvArC9yFuSXfYqtpZKof1g5",
  "key28": "43y2uXGFs4QGN5GLiuoWS2Rm9NjawcmEQDUkqzamRfDEKwttzgxERmBiRDyU8xiE9dSuKoQggzJdz9pNQrTa7zKK",
  "key29": "3J1VNjLAd6u8arXv7YmML6CU9R5tDjGz5on3Xm3AFNDemERzQhj1DSDV7h5KX3wi1ThFUC9RgwnPgtm123XMC1HE",
  "key30": "4TFRPyP4w1FKepD9WHcMnMVajSBgrtGymwyANrpe9MhrPKvVEkq572q4TvppAfrFgfXhgU1qZdwsrkRXtxenu5po",
  "key31": "2cBjzw1vZAJQ8jZVNTUaBqeVWHGgeFXPjwjcgvMFmiVdd4PBdjPBU1bZNV3kkGqsyd76bopWUBWzPUGPn4GqsHdy",
  "key32": "3SNGmNuFVVeWNVNzk6CFxQpczmz6hyuwh2iZ9QD4sUpQC7FCFa3kGMHGw9kkfqjZy5evKmjJm7W8WbzjMbFGsrQh",
  "key33": "3THNiAv14iS1RdX3X9SgPpob4GdrdiJNsdEYe5KRd9Krku9X5B7vTt3vNYJe9pM75w5WwvCeVhk3uLZbaQ2DYRwp",
  "key34": "VuPiTQfZWkKetVBTiwoWT4UJYRaswpowRqzeHsoPrPNANFer8zQV99Sg1YD1p8rqvE5KyooQZcsSmxCMTDLwdqk",
  "key35": "4beP87aY77yi8yC49bQZpXcztPLq4MVnks47qQrC1yjnqgKKVh8aMCogDLMjTxMix61jRfvd9s2eVq4bK4FNjj9s",
  "key36": "51tmx81UtNWve2NWh3caePjPKtPoddEi573ZzaqQhsVChFP1wS9Q2hN32yRuUsLcFLi7SoPbxRda3kKZfSWcASVD",
  "key37": "44VDNw2pod1FqsosAQMPCdHhohYBhY3Rv4JDX4yUbUVmbRxVFpHFT7dMFTN7Ar1tHr8qgWF5BDfMzEzsWimP22K2",
  "key38": "5QEZoMubRAmtQSUqkoHrXDGYPgYfRhgM6fc4c4S9UCkQfKYxzD361bwG6Gu5b6fkTtJXQ4swmtbXW71Lk7gdxeXP",
  "key39": "3EkPUQEVsVDkJRHATYWyDhACAYoDKnJGZP9WMeeHScP3eeVhLzdDGx4jMdkMNVJCn4eqPxocTZHaSj5FMPgQ8FXA",
  "key40": "4QKYK712UdQtuchmx6yQdj3UQDf3HM6XjcnHjLXSe3JYR2yoYoJvEjyqV4NBkmghikT36qyqBDNNtXDK33xJmWgz",
  "key41": "3NwERJ3m7x4iLsJq5X6LqfWfCQD7CKDMYxffFzUbG5sCu8mGh92xuqh7wHwadqsPMTbo9KLemprgYWgLKzt32vYf",
  "key42": "agqCM6Mn8th7dsFYRK8deTT83DarDrvsNJfcV2sgrsBCuWwc6NYrZDKEXVsB795WMqZDue1bgQAJ4z81ostC5M4",
  "key43": "3Ng2312kdUtXb3XhFBgZYa9ySEXEsbYainLtVGzuWT6dcVtJhW1aRAZ2U96RDi75y6HAfaQjJ2PAYZYDDTCEFjtR",
  "key44": "zUZXufb2Jt4yEhP79U9xeTsQvDmwqJCZwyWYVEEbgY1dAuRYtyb8hzDHWLDRH78WLkrGwP8Mb1TvLBoiX8ENM2c",
  "key45": "3uKCaBiSCHkF6VebH5oQNu6h9sBYBhgN1bYYZfUa5sC8eFoVJxU3pmykktJ7W487rkB5GwkpFNkmBtTnFLpJxPPf"
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
