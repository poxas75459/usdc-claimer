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
    "RcsuEkCWLtvPr6LbqXTr6Hm2TxR24996yJZ1HH1MfLWknhLzQGKM9RSz48AqE3PZbwXpNmteHGVJdtayBLFg45U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfxS94NQGy6mKkUKC4Xbr6BcjHYM4vY8mWUk3tpqXSTe5PfYNyPnUMoh3oqAf3UXrLF18w16CovwcMot9XABKBY",
  "key1": "3QKia8YJMx5Nh7nyui8zw1jXwjjnKXfW5YDph8NSJBmTiBtPFqckSKXXmWZ58TzzmLQX9gip4wpr5LrydRENxQkq",
  "key2": "3MdcbM2f9xC54f3c5kwdzQdMNKdLv5Yr5eTNEhkMPHUhADsExPXt8Pdyz8HMBU3ZybPPA3JUSkAdVqgvKB8cBGrE",
  "key3": "2Pr425Kb1iRG7VaNNoQQvSizbyWzgHZya1mb7qgm6kusydFSS11oTdwUxXGqoGaoiPmXddzPAFMQjTLx4WUeZBMy",
  "key4": "3SAztJNCCbUPxGsBCPyVC9cbVbDWfQUD33qQn1h3VaVidUgqRrJcxwiy1ACZpKh4cP29E1pUuUGM2gZ15SfW2NsS",
  "key5": "2ApLvma7hWU275y2Ao9iHWbamZ6QwnY2YYFbDiEAQ9qokQLWExPbW3LEoG3W2HFGQuTj9ph8hzL388rdkjGi5quA",
  "key6": "2juq5YxUoR6AePYQhoTAhxQ4MyB8ndBH2ArqcNnCJ8DKzS5aPFsNwviXWVXdvF49oyV9WGjNzSigatjyTRo7R5RN",
  "key7": "3BsBNQbeBrAS3hqhbLmwuHBk46GY7qwwRURRpo7yjdsNu72dWG3FVQoQ5tvYTixbx2YKjpmETzhfv6BW7QS3nAx2",
  "key8": "3dmvPFgJ5d9HMWnNgVztVR8txnVSHrThZU1yqHUnzmQiqGBj4ozGuko1mHfXZ9nBoJ6RtfRfDPqKGZW1ec62GNpK",
  "key9": "4ZHHmPEupSkR959cJr2cHmBmRTuxkKuwFxRq8UkDbdRyKC5JARX5fAebmp3wUAh4SJFA2j8RbnBs2xaDEQ9H9phz",
  "key10": "2dyWeBAcRNCjs6mXumamLcJeZiiRxpSvcdY2snmdADsZv2PS8idwxMpVY2UumN3wUKH2uGPVm1Z1mvMRqgfcgTfE",
  "key11": "pieasDDamUfGHZtnbQz88o3jPdN8iWJqxGhHhFyV2prPKuQW14acSh3ZbYN6BBGbFUUntVzCWrFaG8gDuNwNBuN",
  "key12": "3RPEATt75zPNtGLq266j8HKdZBS8mG7ZtThruLMQM9GWKZNX6HuEr6xvABxCE6vHfAw429KphbX9gdwmK4zx97ez",
  "key13": "5KMV3iNJRatj424uXihGXhn89w8h2R7XrVCfNHW3h8YLNnDCkd4WnhLRaNFEt2gJtQSdBzVGL4oRYbayp4Jf2uk",
  "key14": "i1BECtLW93SognhsME4BSwV5dbiF34bYiBnQHxetnEhxGW41oZJNAWQuabu92CXLCKyLwUqhhRSj9vD9jKDqLFX",
  "key15": "2BYF79e3tFWPZv6wyDVLmoTttDnSRhEUJr6PB1fqWA2tq4aU44uVbskZm3xTeEzqLgNZHcRScdDXxE6CTE4JoJWZ",
  "key16": "WLFLwUjspda6zmgwrpakvidPyh4KksbmksAEsv3XaEQgUkUiKTKJ5937RShwVJPEZrmWbnp1mrJQsZLKZfx8mkA",
  "key17": "2S4dkGnNe7Y6HrQuqePKyB3EhCtkBjFBcFMdMJbWfyaDSYazZXpf7BUfyaVJE1ZiZE5KbV99M9K9jfYZMpnpsJ3s",
  "key18": "3M7M4BiLdznDvG8ZJK7NeC1hJGjKHGswcHc2foBicr95TPXn6yGsRUP7CqXqH7PFLbNTAfpFy5BNffCc21WG5Lwj",
  "key19": "4w4wsqtNKTxXSKjWCvAMPFZ9PEBZgJEaZELgX4WFraoAXVS4RcRLeGZvox31GYKN2pCos3XfQQ11JQ8g26kHwmSu",
  "key20": "63LU4wExrJNyaihPovu2DRbtTUcNhVzhBebScYNdyag76ZUoQWCBYoYdQZxAtgGhF9TXAjdyRNCGHpjSP8kxq1uY",
  "key21": "677SNwNNSKkjMPfbZ88vToXU4xVZQFksUTWqEjF1ba7LSZCqcib7jAzVXnXgNpnBTDDUHoLhPGFr4QXwrvdqz2tS",
  "key22": "45piRTz7Z12r8rQM5Hdu4G2wVyWLuAcWjLCLNyBSbL9MYg478fUhoxeC9RsFeYSJzSSf8sFmzZ4KRppjeskfYYLi",
  "key23": "5K9ZaQwvPr7iReXWu274fzE1qrpF7SvMoBuXXzXUfpk78SNDW5YKeRudxkXCmNQTDQKT69BNadaS2Joab88Z3iht",
  "key24": "w7RESBtdsgUfs5JQQoKJvVz4zqq5ybMpR4bBVx6gVM7RwH6wLC4CZvnny1V9YMre3XAxdjzUiLU1oTsKtyT9HDo",
  "key25": "2kbXQZkTNKz2NYhAnBTaSYomWxQRQc7JPQJ9VFHHL9fMqgXGJahaT1sHX5qpdJXabwm6eFhq9fQERbc8rtLjP2E5",
  "key26": "5oQ4rM17cpDt6b5vrBE4i7WC7ZURSiBxS2Zxp9cj1vQm23vLZpUE1tiHReRFh6uEnoiCFhNPM8ZZWzjXjTLaqPDb",
  "key27": "35s3yuBKCZZRtcoERSQsZTaY2BzngkQTpY6BFt7hwLnAJmZuemYB8GMy5HVPkPnu5m4YAai3h7EwT2H5V9RDXQsd",
  "key28": "wAPbdNu3UzLMnFn3DrtePhCZ7XDiZa7Md6ktTg17CCh5GYJS1h3n8qHXW8vHRQN2UcHqSFdMXyaGm9tyoNhAsV3",
  "key29": "58JgYa6eY5XkrJX2iukTooS2zKQe3vzyp6nXoexffLUc5mwKyiH16tYk8sjdgknuetViW6HaAf2NaSUZgwvoPPyx",
  "key30": "35CvmUb8gCtS49vkKwCtRQGMMwmRBjXjM8dfFac2iuzzEG9JvkTNebLysdXoegoHkAcYCp5QjTi9wh6S48XZkhYr",
  "key31": "2diMBgMe2qVr3oY6TiuVbypAd6ccr3ZHA8862XMc8S5L289SYz2ZjV7ACMgHRAjVKRbWUnUHW73wAgx5xtV57VGH",
  "key32": "dCtStbb5842uNp2Gr32Jq5nSANdnSzjSiKsLmDa5MDrWDfvnJRQV6HxDgbLVSarAANkKemta4kDMGxmmrPra3Vt"
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
