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
    "4uQ7eEQCntw6XSLRfgtaxU7VYA6SZiauUbHHojkxpR5gUG8YZAyLWuZFmwmPHzHSA1rZhpS1LyrVvFARYqwPid6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ahv6p61FovkXigYRfD83kgj1tuRNFq648ELxgzEzpayuBZFJ58Lhbd4u2ruYmD1rmrH77r2d3pfvYwDzRe4MfLi",
  "key1": "3TrbQ4hJDbyvy5TTep5Au9eFiWbXrgtCcbsS6ikhBrEwWdSqghzQYqsZtHw1WKfuM5BV1vVzGCXLr9Uv8tqw3rnA",
  "key2": "4hbjDEYN9Kiwu2rfLf1FWXLdkHSspXW4sLKey1En7horVvPhsQqN4LY4jy2xkG6ta1m2SYDUJ72V385LGKTvQ1pk",
  "key3": "1Dv6R4ynY2w7y35mtNYCmVbTDmedw9deaCQsysDRVYLptrfw9WKa3RU4Ebur8xNuFvUtTkHdYkMBBSoZbgZxFwM",
  "key4": "58e12UERCEV79rSj7KzRuPLnkYy9MnG6eF7rj8AxbctvnkdvQx1afHx9aeVeXc6YtfTUZ5CQsTBfTmMynjQwG8jF",
  "key5": "zQFjWfpkLr9UBk5sKgxUVemXM34h7NcghExTUqJZdiPdG3Cxxadb8M14xCfQhgwAGwmfnhwH8vsCNoGxubQcWKS",
  "key6": "5hXGC8kSSmsEuWNdSESioVWruNzEg61qLbtRkP1zf6SZ5tgozuixBPNHGqNBP5fiLPEy31u7LNsaBgd2M4fa8PxC",
  "key7": "4U879zxT9Fy9AXLWRWjA4UxBofbWtYELGVoFAbLiKAAzWhox3bcz2HJdtnvfcMqmhXMwiQHpcKSqXBSYgb62hWuV",
  "key8": "vc99NvWfBuUBayU8kXitiuqrG5SYmt42YZmhTCHsFi3ekia8B824igN3YTpB26ucdkJjTLeqHqjF9Jg8UMWXsjh",
  "key9": "DLuCPGCkVzqBsE6VC5QBb5vfsYePaCNntfcFrZa8vYx4JtzscLmEwLEE8wuC6LWc4wNn2ajde3c8gffuCnfVLmM",
  "key10": "41p3A9afdb38yRPgcSwP4qbDDD8BSTKJQyuVPhGb3GSvd7pQ7FT2hJvDDDgi11iP5XLhjDkZu5eJTNnfTqtKUfsP",
  "key11": "3RzAiQJh69PzuC5tCxkWoKwEeUPzEpiZP214pCj3esjXHAqngG3aGszyQ4hT6ujGxhWRFW4hAMv53DnR11RE1hVV",
  "key12": "3oRAfVMmm5oE7tmYNZt4UuPxUMZgiXZ8NfxTdySM9wJ3dAJY4swN7DAkMw4Fj2hMzsow7cvSgyAhw72ZfJzW9aBg",
  "key13": "K8ywZrauapRb4S5oRGUKvXbnC3PV5i7UhDXs3uRdirNUKCC6qWgsqPr9PwuMJ2k9S5yZQvDZwJbDVzszZAR5fWL",
  "key14": "23vkzVppjtZx8TgViNpYCjk1eHMxpa4MoWmcARWLhqsuTAx2CKAMAKyD9XK2RTPZiJW7iZtR5XMV2BxrvU1PMRve",
  "key15": "5xYYNQ1g3u9jxo67Q4sBgbzuWhkWfWSn5zqa5wJzaFEz3jbn8rogfdDHwhW6UBMMRfNhAd9hh9TGmU6HmZxyzWmJ",
  "key16": "2tdLHeF1PiExsuH3LqaLY1An1PkKJbBChK9RVeHbRNT4KhA1Y4S3TURKeZfjCc6QjhfueXu4hdXmiFh6VGpKDSKR",
  "key17": "3fja6FwCc44Q1vn28ZTuTJuFyD5p8Sp5EeLhRFdG42dMHYbwBGjtzSK6U7iUuWYBPpS5SspdFqTj5F7hAujBAPbi",
  "key18": "4AbN81S3fUtFSpVFyRR8q6xnCcHJZorAc1rKPzEZDWjo1JzzYPCXtSQY5hXjXqmiFmfLb55dN8mmu2BPTAk55XTC",
  "key19": "54yzkZ7qwVbzRk2YHParP4iDsDr7otU22b35qpdWTraBh7a26MWAkgZT1wuiAoL1m2LpKboHtdxW6Cvs4hqJuX7o",
  "key20": "D5hk278rHkEhWufDSHJiNEC6svaVPm4LyKxUUm7NUarYtAPn6XAnNzajHnYrwvbQhAGjh7nGu9Q58sn64JAugqK",
  "key21": "4YQR4FBLjNzTvxCq2X1nAQ9tfAex7i6pw77Bjk2jU7RLNDUMmh3FnaVGp89jFBZUt8GeAa1kWYGGKedKJfyKEK3t",
  "key22": "Q1x7s6pYRZMEKywGPJeQQ15wXSpV9NJRBCsv84xbZBEVH6aMKiCne18G8Zs32QzQn7RgZisuZr6HEQBfnMrMxiJ",
  "key23": "4hvqMWoyfUDCXW9T9vJAwQt1HXtXxYAMrmowsoFPMzZqVC4K5SNbNLktCuTsNyXfynKkmU5DofmuGWXfW8zLocJ4",
  "key24": "3uYx8zgjA8EWEp3nYQ4hbXfrYi3vwDASNkxgTBwZPnGQKtBuD2DUBSpVp91GnezFbQuE1xT5EwuSJGWKu21ziPtS",
  "key25": "4BH5vzKY1SapEGgLhUvyZWUbpezLnuDvq7v9TVcF3TiXBoKscuAy7QqoAnyhhs2A2W82AL1Uq7TACHT6J85bg73s",
  "key26": "2ef6ML3rhsZRANWsfPe9n5uQdGsm2B5svALWCKJZQe3kARNMbFNbF4bYgs2Dufhe155FZWMDQh8qfUWqpykVL2T9",
  "key27": "5Sfu8nHKi3iSDw9x9tnhBc4mhXXcrciXxuFUiNQVB6FJHzKJ1W3qfhauJgmifi6PnjfjjCm7mi1y6qfCttyppdym"
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
