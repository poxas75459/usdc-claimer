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
    "5SvhmhEoSwHQkJXd6XkHSTHLncK6wa1zTQXmNffqwn8SbJny59ABAFKw6d3pCdpYa76uN97ErPR6UpU6hdpsvvca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJ7bujzTuPYmYpR3gus1z6JDnkS372EAS5sooUVNqDV93xQt7wiUVuYPekzTydhRSSdvTFpKXxdJfcs2fP3yxSH",
  "key1": "56TdKq5FtrmXhPc7YGiqbTsZFxurc8H3YkFn9jmE1frsNszx9RFnawjhAg3NZGatxWsjQ2goWVbqQQ1V1w9kq616",
  "key2": "2kt4jqhxU6ghLqmCnS8nie88X6rkakyodgq6rJsrtukqMRk6AWF8YgSSL2x2YVPv61GZfJX22u4ZNq1amFd9E9uz",
  "key3": "4hDJF84RKtm39eu8wgwxkvzXYCHYBfK4Mmnexg39YuJAWPeS18JEqLALbxAw9kYhzYP7Wy2HT45Pb41iSvndXjmg",
  "key4": "5UYqRcdKukLh2iVJQVgFvdTiLTgoXmsYB8WpCyhFkmxx3UhUVsr4KwS9meAcmLdgNys3JJVv2YFpkFDDZKyEzVov",
  "key5": "2XGpMh9LU2pD6gVJ1SY4TuikPxfKcw45xQKMwGTBpfa5fQ9bNGeJFCXxspwND3MJrHmSWqAoT4DSTWXx1nHuTHgx",
  "key6": "5tcqDUNRyMAEEvKs9Pdn7Kp8wbUVftgyKMwBRxFcxYrgZ1cGgiUxUUHBF1RTwVqnAAMAtnWm67AzxpkKuQcn5PZT",
  "key7": "3mx23VcNPsqzS36c7bZyPyAP2K9kS5SzyTa5hc2RqQvbuTRuhR2RV9ms7S2kewyrLoDdK45ftVaAzj9EGogKWGWq",
  "key8": "516atqTGF6yKKUPns7SC4cb8m8Fqbv5WFBsApzb2NFPUfHiZqhEHGLVzgN53rpP73gs7wtGjnUxfKrg46sp2JSpY",
  "key9": "4m2g7oqDs3ab6oRYADwz7gn5vuEyoK43jksGjYs8YR5FhN49gmAXJfAPAVh3teuWT5Z3QFnctEFTQmFBJU7bCnWR",
  "key10": "4x96twugREnQGQdsJ37829dxUsnP7LcUdo4rEr1uFt3HZ55Zh6qHR2WFmm6GKjGifS4FNt7RLaANX55m3jdod69Y",
  "key11": "2kwp7baKceD8CjWrW7wpVvbEfQ5ayBXsGd6HZcrGVdKtXW4ehhuCt6JXz9kJMxGnbsCMzDsY19NvNUEWTFwfCGyN",
  "key12": "5Aa5ijctLh8TNysjFLtoYaYbqrSYFirxRbyChaivSChF7PBtPKAKqjkMhSW4Ddm6qZgfSxXUryp3o3SfqUaVX5TX",
  "key13": "5xMfHAFqhxkjWjRWx8N6RqzQnmzYi5Uxa8P27En5u6W1w9KHFVL2xQSPKf9MKhEDbVe1Tsk2MKvdrq2tShRDaLg4",
  "key14": "27z4TiTtdTfJgDY8BR71xmfUEMX9Han59NUAQ4Q5V6NEXXauJ2hXvZeX2HeEMcH3FCNuRYw8jmg2oZ6mS1SuvMmi",
  "key15": "5o1s7pifncWtNBr2NiQvtV3ukvhjqBMynwvNhXEF5o88NyYJrGBFXKzNDG978b7UTDyWDsdm5pSHShGv5JYXEtuH",
  "key16": "2edi8ubpmrTd3joqEFqYdHiKkL6v47ita1PmB8yYFYmJYGci7ZEJcEtvE4La93BdKvA39zn6eAkL3gBfH8BukdGL",
  "key17": "3Vw9FFYajgvah1o6QgjsD2escpjHTHeKDypetTNGo1b6Ld8gWVSTY42GJx1WwVjxCkWhSrtykhGSiW2tqNeCxEmj",
  "key18": "52n71n4XQZXHiEZaCjecT4kBe7gbeefze3H8xXVzJ8rVR61Xqf62iv45sazEib7BSea6f2FksZKzRurWrSEcLMuA",
  "key19": "62wtmUezKw9ZdHDUw7nrgm2yWhUsDNtYJhUAGkGqzFxQmJhKpykWn1Mh3pTPZPqboDNUMp5ugpxDHfDARJ3a5Zsa",
  "key20": "24kVWq1W2tmKv68BBxRyUyuPB1Wa5LYPxXT7Xiv47VxxRaUqY3DMt5t7Yw7w5YghquJ1x6e5NNLuBXbzTkb3S2qe",
  "key21": "XLwfv7WM5jJtCQGWfXHpASKSTw5tyKdTmr7UZwQPeVcbBUCLtm2HjJ5ts4xCpLSA2vc6CjMUyVRaaaQ7cJfNRrq",
  "key22": "22bptdk554jX2DX6HS33asegxbiNL4hf5Pef59UtLrC8hBiuVBuWB9PmFVhJPkr99P9bEuZp24PZWaGp9cTtb7Uz",
  "key23": "5zdEo7BSebq1t5nWyyhVVqXXac4AXcHhRaE9QpFmvvRW6b1Fvur5oS2ABQbJ2EuxHTPmFFGeuDYwdPTdvS2G7iDP",
  "key24": "xu1BPaSAEKGUF2JZN7dfrPTePbTL7RAz8sAa92RgMmK1y28s5HectQAFJp7pYcPTsmjqT3VzeV2a9Waeo5Lgm9W",
  "key25": "3UKxanPCHFndoM9s2ujvJpqtcnQmnbrZkv5ZpPSQWGKN5biBvZ1DtvsLe3oyJ1bsdwvLPyajspcZw8VGSnjtSskT",
  "key26": "58P9r6ZKuWbcrqZVF5GgxFnWFPnoYixLQK173k5UCmexGXwfYxhM3zKjqp8SqNXhFzMi1Z92ymjMn4WsXNifwRBR",
  "key27": "4y1njv5MGhPWPoBZe9iSABkNYbSuavD9fQJWNANb9wr27N4nPsrqTzQBww9rVATipwVQrBTkKAA7ECg12b1ELkJS",
  "key28": "3PLSmBocBwLPZFUYA2JtqJVAi1uA4fDN1FDe9efqs9x8SHkjw9tkpcHZ1DghWqxAtqz2wLeA87UGYSheSru6yaRA",
  "key29": "2SCmjBZ2gzTsuyGAPS3xkrX7Nn5WG7z9DNQVTChK5YBs22U1c31WVxniFgPxGJ6xBaEzoa1g3EVkMfs3xUg8WffT",
  "key30": "4VNK7mW93fsNUKjSvUUhFLnHdJhhtvqCLKU9FfXVrLZyGFJLovBdc8FKJhkNJVxdDt6aRPeZVoYn9AXRjHSHLvPA"
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
