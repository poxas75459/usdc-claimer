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
    "ghKPfBYSBhGcLB2NSWRZznLutFUqShEpeFyKwbF4sQF1SpRrBdLtQ8ocKKTCzCR5kVaFpy2haSHnEhRtgYCbXHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmghdV3v6525diwrispDy7cm3CQwjnwdT6U5mgV8BrtiQEnehfkoVZk92YUAvPNW3bifdcNPpa3cKPU9SpE2Ucq",
  "key1": "2phxhNgEmbJKxdPPPpPWASciMpD9Jc5ogBoTJDpVQSx39GChgyv6FaiE7zN5FJHwb5wasz2kXSMPb5XVQkNH6tVK",
  "key2": "5z7JGgf45wudtGJ873yhhBjAyKhpYHof8fByufW35jN3uy5SLcY6DA8zgTDnDWPBHuUBQKV16mn67PTWYAJz4tqo",
  "key3": "oH7N8HT9ZaJPqxau1dqX9FMqYQqTfcxsXdhupPYJRVmzfLbNRZvRHP9TwHvo4z1zUPM3C8SnZj35qV5UrNJUbtP",
  "key4": "4BGyycydvZPtufgfUwdfH289kaToM6VesU4X1yR39SX8idbSj8F2gAUAsnkt44atpX5DyMDQi2HZ6HAngh33khtd",
  "key5": "kJLcctronbKpYx9Up9NXwVrCSNsBd7uyt7H5ZeDnvzQwLY64WEuiEpcnLUmw2NidUnBsoV5kUHedd19MxtGmuyc",
  "key6": "56PHP1HNiTo1nLXaJp3Vf8H2TjLbr2zGGnRWKm7FujsDXaKMX8dAagidsusuf8rDBSbnW2mU8aTB87WDwe5NFnMP",
  "key7": "4xQvrVfAqWNCk6HZhVEr5y5MzooFF7awE45oZfsxh8LAau9p1eLq8AtPmALevQhjnTJWDqjEZTDDFAhiqADnzXQd",
  "key8": "L5fUfQYXPhBV1BbRAC5e5x3vkHo3iyD7vMpzNqfqBzZ7twXEpxYQvntZeKxmsgEYj2o1Uo5nyWrHB77m3LRChK4",
  "key9": "4cpSTWbcQ3zTfkVCgxHpaBb5fntYdpW759rWyoBbrC8vjNRtiiwh3CnQPXWDzvHrLkehjaA7mxbayJFHUg9vn9eh",
  "key10": "3PWx9Gm6EfYyddUpTfoPKrNT1h4ytQF2V9RtX8ZRAFXQsRHXJEYKj6U4yLwqbq3r4en49m51iqrobGNn88HVwfN8",
  "key11": "5cBe6ibBpeJaqpquSfGtda4JDUcYv16ber23mbvxfy3aoD9ZQBNVzqREhbcKbGZh5B9y1Q3KZ1z8DJSSKLMcFRZL",
  "key12": "5PJkmYKTQX1VNgVtgvfeL17GjKPEG4o316BxdUiyEWCZFtPDbaMHrVwJMNxrA4SgcAeExHxZk9yiqBXe4UQ9wAb1",
  "key13": "3uoGVDaAkno8pcxpvGHmfWgCNYnFJoyyBTVrQvt8222zy5tLPVXunjWtn7499kZBwpCeWBNo4fBuU3eUhbtBVVL3",
  "key14": "2qJT1CF7Tv3q5pNQ4PH8W6wjc4nEhFt6wbV9hdD21DvAL71KdmkDbquqyTMRyx3gNgLreVteawM74ZNam4rwoWtE",
  "key15": "WVBUgT8SEmJERWSHFc8tMxtaFFLyKkrhoYVoPbX8vZCovEHpXdqtEjoWSq2izyLpy6CoRFDLxLKsFrTeqNK9D4v",
  "key16": "rmExA3bjrbAyKyfjepmu1ynRwb2Bix1gg6Sjf2H3RFtVjvg292uJo7UAFo1TGRqaWbEPT1vAtDSH73wRMipuJMT",
  "key17": "B7RRo5bXmbJTVBeohv91T6JRyFN15UQsfEfstMdBfKQWmfxQkos5jg5ZxJfyN6Na8zNLd3irZpu8bDZohKeVXKL",
  "key18": "3hTzjtHrkkyncDXJMKmkGx5UF6tUcKEWpGWmkKNG5pdMKbGRJLqyvGB8Xcjh5H4e1JdkPLXroPe4x1P96JB9he5G",
  "key19": "2YBHp834EZ65hfNTjz9Kvp9cUvXq1j8EKm5oaXxmVF3MN2PgJZ7nmUpmBBpTtN5v3w7BizRiryH3YXV7NUoWoUid",
  "key20": "4oGHoJZHgGgQwiHcGTUYdwwzk6vn7xWyi4vpMXvKSVWtNcZb3Xh9ryGjewdXNHf8ZLappQf5dquYzwsNtnBhhbEJ",
  "key21": "sQWVN5mM2WG7HKEJQyVEecK6muKRkBsZGz3iL73ByqrEXmY9ggZCcUX6CfS2xQUkkvri4FpkgcrvaoTcvi2Cptv",
  "key22": "38FJ7uiEosDuW9k9FMPfps5RjKcQa2xdNnF1NuR9gWCTJhRnF7w8nUppR8Tv7ipiGTXD6aJcof3trTyZQJzHGYUo",
  "key23": "32xTmVfKPxHCAJeDxQhPHURhJktMEvrLHXuM2jh8tqcuYPMbyJWerepJXjEUTnhzYTs3JPSTX6wNxiAS2F4KdLNL",
  "key24": "5EsERiqPMczUXhVoqPLsyrw4gxqHMUnAhmdT7m8xp5cYDDcV87vC8BADgC8ZuPFB6UL4SocgDRWCqc1XzVNvcKq6"
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
