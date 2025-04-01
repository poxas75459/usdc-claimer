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
    "5zPMnBsirjzr8yX6967Gsf9KQcPG1ekebCsbsjgPmnXNdV6pFmJuZy2RhgnGUMC9zEBvtntyFURiV6mZAzT2t2f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gknECDY3fG4F2AozN2mZkzMmz6qDQ92aBPB6Daop3cfic1bSQ2amDTGaThb6KjD9RfNYafWCuJPb5K3eGNuCHqh",
  "key1": "3eNXftdVGsMJP9RxcQvopGB7WjMcwmeHRE9NCdPMbR6D7gZa7CmUyz2zchwp94TtfYTct5yMZHjPyfPxo5nhPzVW",
  "key2": "3TtxN2KhJPsXwA3KfMpwzXjcSBtLhGQPtRr6dVUrrWVvVwauCrt2x4X7UQuXPsHVtFNt3PaPGffBRQPkkDoiT6mV",
  "key3": "2NpHisJWBfrMhGk8ahcdtksQA3yC4yt8Lcj4FADtNZPAJvJJ36xrUyHqBR3mKoiMS5kSJnYtkhdKaKgKjDgffRTz",
  "key4": "BNkCeCPmVbFeeDbauPXpPDZPfpC4JMWqUsEdLQTPMjg83fXZVozkxFZj87LaSnQ4LnN9r6q9Q3K9w7EMF7VH5Pf",
  "key5": "2JtAuBwftVfi2cE5mNXAPuwGu8U8QfAsdv8s7ZCfcAE4gsg4rBQWqhFDPzPsN387HbgrU1F4gRtVEwymgx8jgsPX",
  "key6": "63Ap7W4bF9AQ3HoRL9aaweCjKsRDJiC3MrADAaKahsVykGjDGg2ZXM9KKwxqzfq5ZV1ZdyJJPVqEwGY936wXxG5Z",
  "key7": "4wrxNBNmcttqRMYzYK7ESqouPgZrVmXYS1K9umv6PLze9QFKTjZ4inCRkTL6RWL8dPrKkQQ8W45MPzeyBQQHa3if",
  "key8": "4a8H2FePrQTePwvSjE7bav9feza6ZC2aMosv5bkCveSLSL4FwuEpx92WtP6eR7hcY894zCRMdjaMAs5mf9k7XQVH",
  "key9": "vEvYbHZCiu2FFWCj1nmpVNX784nkhXmm2Di7DiCiQZYQTjUpAdF9us3vPDdRmf1vW4anNhF6Zhs6VfvD8P8bPmA",
  "key10": "5myJg5kCzK4qus9A9pnBycX4N8mR8h8zTTVeNWSRxMjW8cLRUyQuHGp3iakXG2UC3FD8qd6hidX71XephC9icR9t",
  "key11": "5KbNAk6SszAmSP349ygxC3HWb1oHzSxwSEFtqJjhBpQYzh9y3nRA9FZR2BpV5Fcx5xiZe51DuSNXKc2DBtWKeRww",
  "key12": "2g793T5uKrLBBeZc7ryvUBkNGgmRbeRQ5Fg2ni6kGpGapnusfMTLFP4fDhgPerZtJaYJ8X1pg3zbP8jYBhkqAY58",
  "key13": "3xmkbggje9CteRkFc9Xxpt3DH9FReNnhLxLxYD3TRabezXDGTAawBsba59PX5FWmCbayMzHtCP27vheVPS9SW5P6",
  "key14": "3PrJwAnQo9wsi4BhQdQ77w2LmN3Zb6uwkuZATS5wrCWioTNwSWx1WjiEruhzf6P79aG1Mg3W77he1Uzu6BdQzsF7",
  "key15": "54LYSqQGTHAaSz1MqWRvShy1BNKD1pNdPkCHdVgHRnobnrRpi57DPeyQHRe8gwBnX9vTwjqAMnLT6abjEDpQ2sCf",
  "key16": "2E5pEoxLmXV1q7KQiwg6sKR3ger2uYeTJXEqQC5BZnttLjeQPvCNi6zNLKgRSTUu63c6evxFC4SQoa3jZnBVNcxC",
  "key17": "4TSzx7y8cf6ybtnFrDvcpNQHeSzAvQmW3zFuvkAGMGFEGSDhBNMzBP2izQn7aC4oM7XeNHLunknuQyTSYmNnpxJA",
  "key18": "2V4jkkc381N9RaF4NY9Q7V9iWFgFbkALLnrLfXDTwKn9sNtfNrMKdZgYiKF6QzYWYxKBjVka4DnqKcwzx1m7KMS8",
  "key19": "5Z2AeMnwWFFbKf3u4UcUBh8RAyn9fnH4MtvpxH3YYShjx5JhwzFNAbhK1i5sUWXRqSoL5Jrt4JWkiwPvdrDfcLbg",
  "key20": "4hjGFvyRNfd8KQNs11EysQvCDrobhbSzxuWYM6MACggukeuiSx8VHPSQ3zkZ63uHnQDV2Sz5VQT8wvCvYjMxyMD8",
  "key21": "25ifMAE591Biow7q9Rw3RszJwK46t3xW4HDmzAA12GfAtkaxfX2jwChuTnWCjgvYVtaf1h6uM8XwD93TSkvYj75r",
  "key22": "2HsuJ4YGRuLX9S7NeokLdNVF9WADYr8C2EArM3xsgEYn92RNavAAEj8KK48ZsDnADPupYMm8hPKH8pKLaNSG2bui",
  "key23": "497NS3WdmCqZtHbkCEaPFaoA2NRjk2wEvprm6GQz1Tha9ZqcTr8Z34DTiDetYwzAZxhPYMxWfPrshmzdCnzw68VN",
  "key24": "G56axUxSthcBd9W5uCTA5zV77U2hCxv5pgwiV2jjhhfZ9etQdUSSassGou3T3Sefb2w5geR2y9to7J7FcNpuEwB",
  "key25": "2tRQZv3MNEoN62UkwYbqj8KU1tjiuCZzU28WzbmpoTN8Q4jZkyoCDGqay6ByKgDZ7tYF28dDoSTkMcw4PYZnNJxw",
  "key26": "4M6AgqNWtRWsRbZcnctxWrPkwDLM7iWcdU16qCHbSpiUWPAtkSNoqqH8rBkAdAyiFuGDzMS3Ek3FYgoUFBNgNmyz",
  "key27": "eRd4TTbbz6bAfJZMiDn1gTxud1m32QZxY2uLdq6xn9FrCouZFsWokZkFBEuedyb7Be2ueCXRirjfRUD8UKhiq4J",
  "key28": "5Vj61ynXkgGnJeEMmWptGEKDMWbafgyaGZSD3GkHfQmCYnnDLqpLQRQEivm3RSRMfsS89TeKkSibLwCw6YJVqzgw",
  "key29": "4uXhFYLykUkbkmDhvZ2tnnm6k5raeUH7ZDwq7BxuJpX5AxCjUCQsNuZWkPM6271N3rttToiKHwEjenTQ42sJLam2",
  "key30": "21ER9SBd6ayGPqf5GL8DyALuVd8qCnixumuWjPBm4AM5Y4Le1Y9cnZ36wNnCi2byLPwdGxGvvyouMKB6WvDatD8E",
  "key31": "dyGPyF9h8wEamjSHaEDbgpB9NcHVv9BBHZkHfXRGWxrneCUYdJPjLGXXN8jtZyAZq7EyEUx6JqKH9faKfcZjrJs",
  "key32": "ECYJ69a88hXtmqUKNHfz8GFXJAATzLxaDZgEZ1KiUR8Y7YM8pbsRaqCHGUKW2cHK9KAmmyUJ4TzggZu8TzpovTx",
  "key33": "2RQQ7NJHp5e9vQG15c9BDSkwUWLeHqrT4VyMBstw1Kb1EXG8nsJk4qtuH2Y2WvCgJ6rVT2oq3cSza22m8qYgysBr",
  "key34": "25fYediUSrCV6Tt4VqsecPfWzpSrN4vwMSL91Fr6PeNNUZtUwdkJGgi7VUH7Y3qQ6jDxPRoyxySQR4BLYHHQrH2z",
  "key35": "2GMpbMyWX5Rw8CDWHYq7X1mcoD7zFzFqt3dJThxr6KK5R3918FEHJcYJQd7dWjpv2YSEfyn3P3ZWt125GdEWh871",
  "key36": "CipyuCn9EAtMePPq39sehdGm3QQKNYT2A2gA675PnH5CQF4cR56r3MgK1WP6osR3mM8coGwunwhae3KASjPP7HT",
  "key37": "nNeBNAA33Vjjbxgtt7SZjRnyB3m3WTZ6MkZz9yNkjGGJcJUkYDoLyNMvMXztDTqqF8udo9C8tL8zMBqh5Y2YU5f",
  "key38": "27r9JWgZtyFArpAxXZSwnM5uAh8XALmc9ERxhsLESNGQLsoyDnaZo9K84Dn3xwgQUoEjQPpwsNQwu4jYvVjxfGmj",
  "key39": "2b6EeFuCRbRS3Y2kiamju2pjHSuq8AtErFwF987omQp5rzXQrKrVE2uP2RXASiaRndJcBkJnuvDQ6iuvBdr9bAkv",
  "key40": "4EXKW6VDyN615RCbtKGns111ep77wo7desHxjoBgjU2weCVN4fHqCRb1AxbxQwZaEg88rYZQzVa8yJdHBGMryXYg",
  "key41": "2D1tNaq9e9A3TeixQmk6EMu2UYssqG64BNiFBhgh7iXGrp4BRbwYr1MHAD9H9rDoWoQz3y9RCMwH9sKDzQDKd1oK",
  "key42": "67gko6HFLgJLZYqKdC8q47Zr41SzveCX3Fp2veJGJgqUidYSynfkDVUHxAaFgpsexcj9Ax9ukksSvtqjjRhrxdsJ",
  "key43": "5WbCh3moPuo2iqtT1cZ5BYuAsXKtxPDqhK8fMeJaHVVt1aLD8NUCGNJUnC3kX587wsa2Jhc8BGhXzH9pmHpqFtg"
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
