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
    "2d9NEz8J6mGxqrhfD15Nm4PWgNwHXxda4pZZ83nFiHzFPFJotaZdvMcSSFJxzndGq8oxKZ493PEFwn8ZCF4w8Vij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4arAKymznQyvPw1Gq76wkwJ2CGCSxvQS9sA1WEXbcuRMmmwpNWz3J9nuUZNTG39SqE5gGKUnHJxEKZ5o1Ec5gto6",
  "key1": "4PstaQpawVywL6dgb75dVgfoGtH11MgX6H3Aom9Uv1zaoCqdtkcB6qqAYtffrSpKqRwsRpK9nn7fbrJTGSuu31D1",
  "key2": "Cm6Ad8cSieKMfJjC97qvGBzZVWH1cn17XeXJqdeQiKgkRRgVHMSgxeLjf8PGGzizagEAYcJxo4Nq3YEQmTmkZNb",
  "key3": "KydumMCQFbVBHSQHVwTzXQkTcyLxREHpYtw2wsviF6y5XG1pUKnzg7rGyJTbPtLfWb6jiJWHDov3FSfC3XqVXek",
  "key4": "5UJ6A2ig7qqebxi2KEyF6mb5oxq3nwzKLtQrNkHdVTTZqbHSwvS2L4Duh8vaE9WzBAxH1DKYNVzApA8ZnAKa8UN6",
  "key5": "41jVMSY8V84BGqkfqCoztAS7KDd21q9TZ5peftySzmJ4eXKe35cZPCDaBWBvRWhuMjiv6hHoo9QzQgSz6MtgxkqS",
  "key6": "32CeLuaarPGMQWfhgFHgCjktForX3Hs27A8CKtyEmftm4ZcughucDruxDNoJhQLojUzR5vtWb1Rm3vJQz34xTNPh",
  "key7": "HLinyRWEBpfJkKNcHT5DhbNUwz4xeWAuYngmnQJggCzUiAdM9FZmozAopF3WfdcmK7Wjzs4SGNZSFRSocqLucte",
  "key8": "2A665WhW58jcLqH7LpKT2A26DizueZKeGjLYRVJSgExCAp5KtPjXQBMbvn4hvi5Tg8eRqqBRrzy8n3FYc2u1zJSU",
  "key9": "5cYS7xmgQ1SVwQEFFfUgDG3rBntKr9MobgybPT66qFUKz4ACkPZZsM6toFRusvu7e8JsCqQfRXNLkvU3Yia7aMFr",
  "key10": "EZvo8t33WVFmiUjNBFwiR9S8Drz2HDozPiasfPBMhoCjxGPt6vPjN7GHUYVSESaq3ZUrWksLZj1jKKa9N9i8akn",
  "key11": "478nWzwSF2cmGN29HU6GutWU7ViFBcCMX6E1J2Zwu5rZpZsjwkXPfnsFs7ECrernZVpaaGo9wT7MeedkG3E6tA1k",
  "key12": "3MihUsqsFu1SwSwih7avg14xCsyiowsTfMBVzPWVnEi3Q1ECRfihQUxQXbseDGcTRd7QKJdVuWfT9hixntze3oxr",
  "key13": "yfQDuXZMc6PCS5cJeBik1oMYXFABZicr2R2RpzSUmhgyL12bv9uDNFPymFyNU5WPjt3jPJsrF15du2ioTiRM4Ss",
  "key14": "37yETfHNxceCXWyYqzFKNJmXX6Lw8GCvzGtRDJCXSsPKSyV9aPY1SMWj1ATokWwK38zpTPbuCyEsG15mdpbFQfmf",
  "key15": "3nomJTktWQ12smATZ81oZ8x8GVxam8SY4qA3jdqP6zLzrocZxc1kAAKJzvwAn8CuQ1wAXJkqevd4xQ7v3pVkVmVx",
  "key16": "3xJinaic2Cu9PB18KWzRDtxWgYz16LTqKh36tujrkwerCUEUbEigzoX6TwHjkauMcUqY9LkMzqNfMYstZXKkxWSP",
  "key17": "2XsSPzJJWm9sL7jxsu5hVYFtr7ggnFjWNg4nG9fA6Zu2UgicP8AXq29Pjb1cGCx1FCQsnuhkxQR4uL7PYnSy7EFR",
  "key18": "4xLog2Ph5Qz3cVkpyqnCKbw6aEfmZKBwr5N1UF1AhYXbpJJtekzJTced39rvNzT1K1g3dn7stVKoEKXMcUAXSXmD",
  "key19": "2SmTA4rQsoiQ68ywEuQi8WBjNADR8sd7rp3zf7mXmGZHQ7jp95effsohh2j7gF5GKcbGrofxM1QBaLLJi8fiRmZu",
  "key20": "4L3c3Bg6hsNECreMo1WdXk2z7PLCkoZMWRF1uz3sMz65Xigfb2U1QFAu2wJCQXz44asMsp86uu9Bh8wCsj7FTvJo",
  "key21": "29i5S3iWx38HuUcLGxjyGbuCiVHnozFSQQPtivp4abPfMyGUYXzk8uX6LXsPDZ7Y61DRSNWzQdpZp2txhVTanQ7R",
  "key22": "52cxFur5muEfEKqZrA1KQ1Rw3TE8G7h7ctXodvvXmF2PW3NGFdg4G7TjF1UKqBCQU6UkhkwQzpmxwjMSaHbxzazS",
  "key23": "3PvVLm3kTkd1vg1p45uysjCKoDjRmafMjmecoKrofkdEu2WpLUWFZPqnE2ZJH5EWxBWprvqgxcgqtDu62DkaXTiS",
  "key24": "2nJqMPpnL3qmCQdN3vksPpNdoSPzRiJJaDmiChDM6yZuk896ug9uUqgtK9uttkTWk7HzRK5588KpP2D4iSJgBoF8",
  "key25": "4nnStqXuZhpqXwxYouXbVi9jA1zqfW5rnmTEb8UbKHxDaLN2ojZqCsfpqMSFJvgamZXjzRsGd9SrprDhWz7qwNjv",
  "key26": "kf3KKkKEjWFYkYRhh9ShpJNVEaqEjNAqzAVWQqQoAfyXCyXdoXaq7KtnWsmpAWfTuRG7R6DhaB2YFHnCkvfLXXR"
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
