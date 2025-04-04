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
    "2htFG2LFevY6KWqJ6mrp1PTgisP5YuMheG7TTD9Wu756aQA6xg1poSpwFda2HhLfxDV2QyPnhyske26sJr2fjtTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57N2twTDgQNk8CHbfHk8tg1RuTrbJr94KtAc7sTMZoBpJVrSzjcR6kJkrgzuYWpSWj8LdBAkn63DVYGYG3nK1k94",
  "key1": "xDoC5m4Z3pr5qm2Q1oPY3MhbPZi2fJz6Ry1bG4qEExz3VNuyZ9USFrSASmR6wkezWYAwamGVNvQwwLE3m6bvZ2D",
  "key2": "T9H11uVacQ1Eu4REe7f6wCjJGyZMAwahBwjsAK2EYRRng6BhMgTDqEWWEfgG8EThqBAKjkt2xLbyJMs8DCuc4SA",
  "key3": "wqfokuo4QSLmYXp6gXaCbHo3koC1EFkArrtBp7EaULZH9xg2BzD9Cx7HnUW8PTzTrFWD7rUevnhokxbaxhcXJfi",
  "key4": "DbTyiaJG3k9SFhsrCVEQWzGSFbWXWNiAPVuMWeoxYQgVtpjMiCb45H6bTPHKQQDhEmYV8cd7nLqEpcNB9kLjDPN",
  "key5": "528CdNGtbJaEhLnNUkXpoU2czTNx3c7WwAeECNXUJqVdsMzs55fGzPZru3fEbsHV862GubxT81y7BYNDDcDJmzNp",
  "key6": "3NJcgpGnxfc1ZSxwSbYT436bbfK7wMKgg7CQ6wcMkDwxuY8feE7exbzBUoBFmfEyVgDBA3RfWnC36B1J7324wyZD",
  "key7": "tu6Yt8JX9156vgmmcvHdc6BKaJQZiEoX1XuXWGr6RB8GqPXKebxt2kYEg576tSHW5MarGUcDUtg714uAwEZkj22",
  "key8": "27v4atubFJiaEXJp2sPYnjMYtCJCMPgVMQbf95AwoGvQbSP3RRMYSYns6oPNz1ds8RBnsHFnt8v61fNq7SHrEWji",
  "key9": "37Sort9WpuZmjo957oN4so8LZMrj9xkN4U5Y5CzqUDXGRwyQXG8fyuMFYmj6qKSUrQergajsEjfCCYBhpAAhV92G",
  "key10": "3U1vsnGrSjZTyjfs99EUUThr647vpFF8r5ZNE3zeEikmznSZeQgGNEMXKZHohJCrtYz8Qq97LvRZSzFNsN1RFRrw",
  "key11": "2PJo2wXVPEXAeq32ucjjsMnfoeDPryUXxNXSHdN9tLSkkBqzbdyoVZUw26j6ewZRrGLDjkJZZCkzRyCkATiTGZBa",
  "key12": "8VPwEnZr8FDRYZtKKkHArHDjfT3DTtBhQz8KTcNUBdv7MHhYUG1DSQ1aEnzkf3rxaPEJWkQ3SeySkgh7t3YVePg",
  "key13": "3ALn64e5piCLpPHfWtL1fuJYncEh4D9dknNVjXVmpsGtoHLCTKrmzYV5crJkiyXeTQUjpAN1CmNDWTPEHEZiaJdc",
  "key14": "3KHCFgzCt5oF7Mh9A5Dg3WsHoknCoYt93HwFNtFrHnGYKqmqZhz1Mfj1oHnUazkjViVjyAGy5dWXMqxpVSwNuxRG",
  "key15": "5NgvWKT4oLsWu53tiqhRt8kTwEdfkKKEQMcH4xp5anmMnoVuZSLxdQVRng1FKWqD7UrmVVrgr2fdUrLC6smjgBsq",
  "key16": "3hXF8j5LYHvx3a7We8hX3wBZfwqc1qpiK2yH99AxR5EHe219NynRCTAEjJ5Ca9Fy6YpzuqveDtwppgbYmyhG31br",
  "key17": "2PpFybNhM5CvirU7brAU36vKj6E573a3y5k16sgwuNBEaWAy3oyJ5gFEp776nkYFrGxWXQVDoH6CjfNWXdbPX8Jm",
  "key18": "4MWBnbc5yHAeidXPsvpHjhFgUSMLr5vsvHQwUX5un8i1XS1XBGKuJvT7tTfm7BHaCrThchwAFvQcue5b2yMxmPrs",
  "key19": "Vo7QeGMU4SMYj1R7cpbQkDjJLqB9gNW559CCMakDRwx4mydzeLPYppoJhwPQL9BPaPcFB7vS65sKNqvdrgqwzYm",
  "key20": "5HmtxbKrxcMPK1u7Xb7QGKCJM67b67LnuuDuGKyxWWehgrW9YFdyCJGChT1iMm5p4ZFfeQafPmBJo1gUXpiypNer",
  "key21": "qrBBpHsNn9gjHQEJXp2iJD6jygfpk5R4XdHRzoaaSJdPao8QfGrysxDJ1n7TBBT2uEVhrSUzuaxsp5wofGyaeHZ",
  "key22": "4cp3RLjeQaPh6TFdPYx5rf5Y7f569pPk8bMHfoTja285Hh8uGebZ57iRgpi9dh4nrSZbYupzAJx2DQoWMBfqeHgm",
  "key23": "7PqVz8UzkhEaJFf8zmMXr41VDL1VrmwtzDHD7bnHygsxgjnuAW143uwc737iaqFrubjhkwihGzP7VSkB4Hhen67",
  "key24": "67Kd9ZSipvfjk282nghbLbXUeSZvdXMVkX9RE3iHDCTNmJCtHAcz2ef7gqfRzNnPwnXpWSBxCmnq4yEeBeS5onkv",
  "key25": "2nrdnst5zrcdNEFK9qSGsie9FUUg43fpLbuxMHb3HjMRN5moGEhT7vNmYbp5DQcsKyasYdaUa82gMAvvDgceLHsY",
  "key26": "61azJTKpN4iagR7LGQuBSm61JZbS8o2mZk5BnPy8e15WGJ8s7nvtWSkAwbVb23726rCdqgocgiGXPzVNLT9depbA",
  "key27": "5WUWtEQxtQBbjC4UPAzLuUCSzaR8zUtkSERBUagGYCUDn232pnp57V2LyjDeRSrPYEwe4aRd95hUkTznaQBZmY1n",
  "key28": "4HPZaHHnynoowm3BY74VVM6DtrZbmQ99kVcyLTvLtwhVALdBSSug9nKf8SC7hDeqbD9QDYSyWrUjLAqTH5TNdCYD",
  "key29": "4kSVXx3z4ABo6AiZUB8rraXUWF3iSeW9dwXj7gxt8wGdyKVW5rzq4wE2mJzjzaigkF9r1qGPvBApask3QsmNuxSq",
  "key30": "ZewHxbbU3K3UvTvETYZ9PpF7otFQuy23XUqAdGKna7TrHz4NYvvynugrJVMUuTuc3J4JjbhmNqdvPazyrBJiWKA",
  "key31": "3qdRkgrY7wmnQ2NPJbBddv9Aw6D6kNLie14Dgg34rMWGFwySovD448v9roPj4sJRhUjFauTZDz1LwnGjpv9iF9vi"
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
