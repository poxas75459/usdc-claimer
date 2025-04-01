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
    "3LtfQPwwXYnV1EL162LWnAxGGbaTUSuDwpXYBQtQCssFuZnHZvVtXDVavxkNyokfjnteS2Tc53f5odDvdYHuYyLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bp8UAVyHp8UYrM4uMzQjFkLBQwLn3MDVfY9TiAER7QvtHxWA9Q6oc3ZJ29X5rofTM6gVLBF7xD73zkHFj1SqxT2",
  "key1": "mGzDSP2FqF3XPey1eG9qhXNy6SawwzWGZmZvQvEZbyYNWBq2E7u6A95sByKgS6rprvDsocJQMebpGR4whAyQeCE",
  "key2": "4jSZoAxmTYxSWnbKuykPPWNsz8Ya9MAs9aH4svZbCcjtJvCFWNwWXKv9MN18bSZPMfXRKyNchynabGnvXHGcQK27",
  "key3": "QhAhAPTuBa28JWwBZqbt5YsqQsTxZyxtmz8o5x3ZwoAjABsq1qLaPfTLnxHHUMBeZNUxjCGLwutpPY4eRt9VzeL",
  "key4": "4sbveFcz8AFkYiqj4B2TH2SeP3Jyzd8oQjvjk81jwmwMpBHgZeqK4pyQzL6cJu63hpdZoUwL6VKRbAv6XBNcyq3u",
  "key5": "3R5HT614BkixnY2yyi964xcam5yJaNb4iTt7fmMPhw8RVrw1SU8MZH4Wz3JBMN8tdJqZYBcae46NdcRcDdUMP6v",
  "key6": "42PYPkAA7bVtVeW7vagMCmi7XXmMUhS5FQNLbwfY6v7bVG7DUm5UgS2V3zqB3uV6ZhYuCAKn4ur3DW9sjoTCNkbi",
  "key7": "4KnobPtQsRsd5hcW8zHraboHzhV1WcZwedAt6s4FRsdWYuK3zpyhCWFEt6ateSepAkU6KoYBDeKVWbXygcBhTbyw",
  "key8": "3fZmuusJA7fS1AqTcdRveyfGhHs1FKFJwnXuBBkq4tBmnZXtmUCyFtEaZVdyodoNCzSXWDJDXmcnsYM5V5pvFLrf",
  "key9": "5kYfedoJCjnHH9QriAMHm5Kq7tMdFzvsa4dBdP95djvqj6G4GhS84xMKFnKVrYcMrwnRioHiE4apvi6EBT2SJqPq",
  "key10": "tA23XQELo8BvM49tTvRH6mEnrXadajLNWWTHFe4mTeMj5cYxyzr2vru2uGvFAAYqJ3LUKw6j7Pjs3qH94BZ4J4T",
  "key11": "3mCHiESqwqQiSB35xxdctmfp5me85TUNtKVe2kLEaKGqCPqjBZKfmcug6doPP2rzsEVqoasAMgbrgKaEdapSJF1U",
  "key12": "4uXiQSdjV8TE1vnomSN22GvCF7CaRwRiH1Lv2VHBHu6u2F7nHX2SmwVdwf7Km7HjsEsJyRgoGAAiF7BRpSWGN3aC",
  "key13": "43NgDZwME8HgnsTJrb9kJXzYmPmEgkBNQdnwpj9Y4wjzrfBdA3SNmmLA5rN253rbjQC5ig3f5qQ5ikQfW6VPuc5v",
  "key14": "2wBiykCcxBQKZivX1wsA1Sj4kSYpvQGSSZhTqQBYmktfSpeoZEAPt1PFd6TsMxNyiSUk6Wj2d12t8wgLzp5Gax96",
  "key15": "motznUkizT72jzNBHg2RJNvdnS9iYoM2Wkzttw5u7iDf33mwrUfCk5d2c83dnXAzYoJmeLUG23M7AYrG2YS4W3y",
  "key16": "4JhGtcgdXqu55qTQYfTfxHHCGmWN1r7KoqNK16bKYr7TUW55fRSCW8VmpvuuHTzFpazWsNKNTpPPwFYe9QdDYqWU",
  "key17": "2ejA5MVpyLrRjkuxTKEAZjksmFnPvjpsgwoAHQ21HgCLhzJVdFZ7PhTBGCQT6LUbAtYzpJzvfWpzaEDdu2tFtkFi",
  "key18": "48ytEZmw6rPkHxJ1R31LrSvi1fVHVBPZJUbzyfpdypxCTntRopTuHQvLbAJY4u7z3M5CJG9kkTks2DxzjaksZPoj",
  "key19": "2bESRgKEG4iHzAv7KwmCTfu3MsVaQ3VU39cHpPE4xuH486FhcCbMVNwhKgXdZfzwnX9n5GEvmSbcBLrGRtcDJFGE",
  "key20": "36T3AXDGQ6hHohgGKpCN798KF8cBbZ8EPPRsG2wsM4xu3xPWfTj9eMQ8FxVKX1CLQ1j6KkcwprZskb5Khp1hordn",
  "key21": "xJfHeVDpDSRmPRP1uhdrDsaadvBJ44MquGPLGeqah81hYGj3Kz8Z2BNJATN91nm6DNPEwaYP6V4uUVuGY8ptY74",
  "key22": "AYZYNz3B9KsNqqJAWhhRABvxxcqxsDbyYxz4BJS8s5BBgLSfXrGUgPuvsN6YaTN1Ls3gSrpvnR6o8o8QscgeHeu",
  "key23": "2Abem7s5QQ8J5YUyqfc89LAA2jUi44h5FphCei8KCBzhVjRc7ZeDCT7iKZFeQzXX6oqoLgraqouVPjDCa3LwMdE1",
  "key24": "5YeXvTo4LSXpcVE9EbbRwPuzLapJFwhnXgvNU16uGwSvmXhDnqSWbaQ6hLt95qzLZQsLeHv1YjyduVYpKsXLfArB",
  "key25": "5JsoBa9FX8SJDaEdfdzAFxJLnxRMsqano6nsnNLRiyy1tG5mDNY8V2tmwePT8pijRGNCbqDBn5eJU4XJjgkwaiPS",
  "key26": "34mJGD62hwnFTBaMTrRZaxqdQVVrgc5PfoqTJnrMZjosrdnKjuQn3EFMqa2FEBPYUHiEY8aN6eMAnyT1JwcWCNtn",
  "key27": "2PhwkMi4N9QhBmvhHDFegVRQ5Yx2mSAgEBgVBEww85QiU5cwCAxZ9t5FaJEhgBihBGcvv5R5xa1ek7GoVMhg63xd",
  "key28": "w1VHRsNEESUWVcTgar9ES2nxju6PvkBgHQXe82FzRLeWay2Wg347DMPcoTYiEwRHmCWnpDtW74UN2JUB4wKQJuW"
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
