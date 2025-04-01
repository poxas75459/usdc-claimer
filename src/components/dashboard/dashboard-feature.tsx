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
    "FL3SJb57TGRkb667ck77UVdVSU15rVxWKMJdXZPDYHVP2hniDGpQRjYHevgvP3c1fPNgxKAcBhi8C55qv8jbQcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8N9WN9GBnoJ6obWX9F5e87E6HQposWQzLGWskVCSXhEgqjx41Q4YoBK3MzbGSkExGnBr29xUXEBt4s4c2kp2UW",
  "key1": "pKGnvVWLDVTKkmNanELit8hrXJgTcT6qE86vpYqz33GKpAR9pUThy86fgXPdxuYXA6s8jCcZV6VrdxxroSmw4hc",
  "key2": "5sx5iAKm2ah4LZhCN6qq71vKtBw4VKs5xNwmb7VThgnkXQKR2XNV4yX3az4Ch2FTYDxDoi446mGdwBoYVWC7YZSw",
  "key3": "4UjFW6T4beGDRXkPPC46PranjxouYwsWTzLF18CCJcQw8k8fP2qWe5Bj64VykjtNq29BQMVqobEFAo5XpjxB5Wnb",
  "key4": "3YxW1RWhtwJqDLtRB5TZjC4z4XvM5TtytahgHrh3FSjU8z8QTVRzK2x9vDSg8GYFP9xhcGHzanh6oeVeX1ySqe85",
  "key5": "54JeY2J8ceAErzprfHsdG9bGaLuV6sA5VCJ9EDrByqP3mTYRkgTCsvocGRra2JYVSh1sEH3UecE9BVYa617fuPs7",
  "key6": "4EHYSHSvzFVfDFfMfj9RZkC8YCaugcJQFJNERgFXQRWcptQ4HUFfiKtR4BkSL7mS1v2uHf17gfxg7ywnsbBUAaNz",
  "key7": "24zyodYF1bCMg6qZjLHY9o2H59BbEsVsJNkoSssia9bKr2ykomrX3RB17hpDJzH3gyMsWUc8Dc4qck2gqV6mG5i9",
  "key8": "3YNPiKCcZUHHoez7dCFS26tuhQxU6N6TUNzGSBjkDEQMSXGkUQ2AzCePJDMXQGbjEF7LjRBKquvvTbvYxjykBsVX",
  "key9": "2UC25zv34aikcjNxGusN3kpnnfSgKwFgtvUq4mmybtvqsqvtSRCs6muqfDbdzpZmLb6tJyDr7cCzScZLK3dxkwZQ",
  "key10": "ywkSSBHNR2skgCrK5AjnUM5jFnsLzXVgxT49XtECendRYFnc1UoiQid83FH1XY3CdjtQ9o6s7EHEbj7J6aCpJao",
  "key11": "52vADaH5Niyr3J4G87kyHV5eECSCPNqKnsqPRzBzFpZQyE7ERwYoLqdnS7gSoLqFBS4pQycqfRKzJffazKm21m5D",
  "key12": "5ZiGFnqmXUw4aVBQS6Y6GfHD9sHoPsGb1N3gySKDYzGCL6QMDJ2iP5Rd5nqYBvLLwp924mzqNX7KKbKtFyKXNJV4",
  "key13": "2ph8bT6DKCTdXPVzr1tKbojrz7ZRwS9wKmRcZ1K6QKPHf34zGS6GqGyahtVy4Gax7euNsifCP2ap8bt8ekJogRdE",
  "key14": "3uKfZj6EuiGsvdxB2tRJuK3voKRGKRumpyeY98QGnUXJjzDmYxWum1Ln2eVFf8ajeMLPpCgStZmSi16L5PRGvVJi",
  "key15": "3B6t6XsBQgTsN3uStt1mDiZvzS83oKtP1txi4Ksg9jZrVFBAS73ADX5Zun8FBkX4rBoCJ1E4QgyFo4dW7mENQGX8",
  "key16": "RexvYjBK4w7nMHtEA6P56mVUKTJUkNbyHv3JfBBPjau7QDB5tsZSyorAWyEcLH29AA1eycPTUaTbWBngNiUqHuy",
  "key17": "WY9hDREk1MmTpSMBqH1Nqknmw5Hkb5m4L4ViL9zUcMqD75g3FNgaY56HBhheNWeK3CYtQZ4fkWbvoGJzCsE3AEr",
  "key18": "3Gm9Z3BEq7TvzaDBbvxzT6EFkTsJS7Bei9FvZeAUihUPx9Q6UvDyAazWzb5MLd2g5MpumFgGmf6SVmBccZiEV2fW",
  "key19": "32UXRKNLpogFAoDsHfKYk8Knwajkn49pa6Q1Fvh1vRdCx7rWRRPiCFJk4fpEmYaQ7pz75SKSbqRsLAUSLkMk4o5A",
  "key20": "zu6yU2YowQ2mT7CKgfWe7MEEHVPFYufp2JQU1sbTRtzjHUV94Z8qKjbEMwGpxKkcoQWKucFt7RNEkq5pt2RiW8d",
  "key21": "3bVF4oshjvnnHQGCdXRiF9ZVzQSRpXpmmjSkog5caFX5NCwHVrhC8upAzL962phUXUG93ug3tojoq1U4y5tZ4aDT",
  "key22": "y82xt9i6GMVNY5JWt59guFavceeLp3awXKpG9wq5JJPPw8GirDr3Wg37aSLanE1bq7jZsPw9pLxf7E26fY5rGPR",
  "key23": "4UuTGyyQ9SSVYA5hPm6kDjdD72QSWx2wtjfhcnCoQPS1LGn54pAd9uoeLLFcdPC5mySLzA4PDZhxnxCUoEsCZuqY",
  "key24": "VrJcJoY4k7YHxYdWrZSipnDQzLSwvRkroTFTecFGWBp8xMKo7X9SFDQYRKmXY9keQxwo1N3p4o2Xjy7a2UtFUSX",
  "key25": "63b5oL3r18K5UyfiEuoWxQxE8tk2R23KEjRAvhsb8eNFm9XE1Un2k16vcKfKRCnt7L4Zi8Y9SNueXopdrWmyxRwQ",
  "key26": "4SRf2THNiqcyxpnvexfArdGnWJLoZHQLvbQ7HnEzZ3jRFwMuM6bVZZZptRz5vwAhYd3XJBQ7pXp9Tud7g1TWf76x",
  "key27": "3YBNfsAeErxc9W4EKmhXFXGdPgXAmWE8k3NJojCgfgZf5nDNojtapVMYhcGMBJPovF2mxC1nFPQW75ZD8N2fvRUr",
  "key28": "db3meDkYYzrEKHCod6fNABNvBcUsdj1k8FH9pz46XqvAmfAyH184YCr6FbqKPMm3FZDNwzUWboMFc18C95xjvpn"
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
